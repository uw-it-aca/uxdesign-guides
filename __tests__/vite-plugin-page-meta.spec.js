import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

import pageMeta, {
  collectPageMeta,
  extractReviewed,
  extractTitle,
  isCalendarDate,
  fileToRoute,
  parseGitLog,
} from "../vite-plugin-page-meta";

describe("fileToRoute", () => {
  it("follows file-based routing", () => {
    expect(fileToRoute("index.vue")).toBe("/");
    expect(fileToRoute("xd-team.vue")).toBe("/xd-team");
    expect(fileToRoute("process-guides/index.vue")).toBe("/process-guides");
    expect(fileToRoute("solstice/components/forms/input.vue")).toBe(
      "/solstice/components/forms/input",
    );
  });

  it("skips dynamic routes", () => {
    expect(fileToRoute("[...404].vue")).toBe(null);
  });

  it("accepts Windows separators", () => {
    expect(fileToRoute("a\\b\\index.vue")).toBe("/a/b");
  });
});

describe("extractTitle", () => {
  it("reads the pageTitle from data()", () => {
    expect(
      extractTitle(`data() { return { pageTitle: "What is UX?" }; }`),
    ).toBe("What is UX?");
  });

  it("keeps quotes of the other kind", () => {
    expect(extractTitle(`pageTitle: "Don't panic"`)).toBe("Don't panic");
  });

  it("returns null when there is no title", () => {
    expect(extractTitle("<template></template>")).toBe(null);
  });
});

describe("extractReviewed", () => {
  it("reads lastReviewed from data()", () => {
    expect(
      extractReviewed(
        `data() { return { pageTitle: "A", lastReviewed: "2026-10-22" }; }`,
      ),
    ).toBe("2026-10-22");
  });

  it("returns null when there is no review date", () => {
    expect(extractReviewed(`pageTitle: "A"`)).toBe(null);
  });

  it("ignores a commented-out review date", () => {
    const source = `pageTitle: "A",\n        // lastReviewed: "2026-10-28",\n`;
    expect(extractReviewed(source)).toBe(null);
  });
});

describe("isCalendarDate", () => {
  it("accepts real YYYY-MM-DD dates", () => {
    expect(isCalendarDate("2026-10-22")).toBe(true);
    expect(isCalendarDate("2028-02-29")).toBe(true);
  });

  it("rejects other formats and impossible dates", () => {
    expect(isCalendarDate("10/22/2026")).toBe(false);
    expect(isCalendarDate("2026-10-22T10:00:00Z")).toBe(false);
    expect(isCalendarDate("2026-02-30")).toBe(false);
    expect(isCalendarDate("")).toBe(false);
  });
});

describe("parseGitLog", () => {
  it("keeps the latest author date, even out of log order", () => {
    const log = [
      "",
      "2026-01-01T10:00:00Z\n\nsrc/pages/a.vue\n",
      // a rebased commit later in the log, written after the one above
      "2026-03-01T10:00:00-08:00\n\nsrc/pages/a.vue\n",
    ].join("\0");

    expect(parseGitLog(log).get("src/pages/a.vue")).toBe(
      "2026-03-01T10:00:00-08:00",
    );
  });

  it("keeps the newest date per file", () => {
    const log = [
      "",
      "2026-10-20T10:00:00Z\n\nsrc/pages/a.vue\nsrc/pages/b.vue\n",
      "2026-01-01T10:00:00Z\n\nsrc/pages/a.vue\n",
    ].join("\0");

    const dates = parseGitLog(log);
    expect(dates.get("src/pages/a.vue")).toBe("2026-10-20T10:00:00Z");
    expect(dates.get("src/pages/b.vue")).toBe("2026-10-20T10:00:00Z");
  });
});

describe("collectPageMeta", () => {
  it("prefers a valid lastReviewed and warns about an invalid one", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "page-meta-"));
    const pages = path.join(root, "pages");
    fs.mkdirSync(pages);
    fs.writeFileSync(
      path.join(pages, "a.vue"),
      `pageTitle: "A", lastReviewed: "2026-10-22"`,
    );
    fs.writeFileSync(
      path.join(pages, "b.vue"),
      `pageTitle: "B", lastReviewed: "Oct 22"`,
    );
    const warnings = [];

    try {
      expect(collectPageMeta(root, "pages", (m) => warnings.push(m))).toEqual({
        "/a": { title: "A", modified: "2026-10-22" },
        "/b": { title: "B" },
      });
      expect(warnings).toEqual([
        'pages/b.vue: lastReviewed "Oct 22" is not a YYYY-MM-DD date',
      ]);
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  it("ignores an invalid lastReviewed when no warning handler is given", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "page-meta-"));
    fs.mkdirSync(path.join(root, "pages"));
    fs.writeFileSync(
      path.join(root, "pages", "a.vue"),
      `pageTitle: "A", lastReviewed: "soon"`,
    );

    try {
      expect(collectPageMeta(root, "pages")).toEqual({ "/a": { title: "A" } });
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });

  it("maps routes to titles, without dates outside a git checkout", () => {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "page-meta-"));
    const pages = path.join(root, "pages");
    fs.mkdirSync(path.join(pages, "guides"), { recursive: true });
    fs.writeFileSync(path.join(pages, "index.vue"), `pageTitle: "Home"`);
    fs.writeFileSync(
      path.join(pages, "guides", "index.vue"),
      `pageTitle: "Guides"`,
    );
    fs.writeFileSync(path.join(pages, "[...404].vue"), `pageTitle: "404"`);
    fs.writeFileSync(path.join(pages, "notes.md"), "not a page");

    try {
      expect(collectPageMeta(root, "pages")).toEqual({
        "/": { title: "Home" },
        "/guides": { title: "Guides" },
      });
    } finally {
      fs.rmSync(root, { recursive: true, force: true });
    }
  });
});

describe("collectPageMeta with git history", () => {
  let repo;
  let shallow;
  const git = (cwd, ...args) =>
    execFileSync(
      "git",
      ["-c", "user.name=Test", "-c", "user.email=test@example.test", ...args],
      {
        cwd,
        stdio: "pipe",
        env: { ...process.env, GIT_AUTHOR_DATE: "2026-03-04T05:06:07-08:00" },
      },
    );

  beforeAll(() => {
    repo = fs.mkdtempSync(path.join(os.tmpdir(), "page-meta-git-"));
    fs.mkdirSync(path.join(repo, "pages"));
    fs.writeFileSync(path.join(repo, "pages", "a.vue"), `pageTitle: "A"`);
    git(repo, "init", "-q");
    git(repo, "add", ".");
    git(repo, "commit", "-q", "-m", "add a");

    shallow = fs.mkdtempSync(path.join(os.tmpdir(), "page-meta-shallow-"));
    git(shallow, "clone", "-q", "--depth", "1", `file://${repo}`, ".");
  });

  afterAll(() => {
    fs.rmSync(repo, { recursive: true, force: true });
    fs.rmSync(shallow, { recursive: true, force: true });
  });

  it("dates pages by the author date of their last commit", () => {
    expect(collectPageMeta(repo, "pages")["/a"]).toEqual({
      title: "A",
      modified: "2026-03-04T05:06:07-08:00",
    });
  });

  it("leaves dates out of a shallow clone", () => {
    expect(collectPageMeta(shallow, "pages")["/a"]).toEqual({ title: "A" });
  });
});

describe("page-meta plugin", () => {
  let root;

  beforeAll(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), "page-meta-plugin-"));
    fs.mkdirSync(path.join(root, "src", "pages"), { recursive: true });
    fs.writeFileSync(
      path.join(root, "src", "pages", "index.vue"),
      `pageTitle: "Home", lastReviewed: "not-a-date"`,
    );
  });

  afterAll(() => fs.rmSync(root, { recursive: true, force: true }));

  const setup = () => {
    const plugin = pageMeta();
    plugin.configResolved({ root });
    return plugin;
  };

  it("resolves only the virtual module id", () => {
    const plugin = setup();

    expect(plugin.resolveId("virtual:page-meta")).toBe("\0virtual:page-meta");
    expect(plugin.resolveId("vue")).toBeUndefined();
  });

  it("loads the page metadata as a module and reports bad dates", () => {
    const plugin = setup();
    const warnings = [];
    const code = plugin.load.call(
      { warn: (message) => warnings.push(message) },
      "\0virtual:page-meta",
    );

    expect(code).toBe('export default {"/":{"title":"Home"}};');
    expect(warnings).toEqual([
      'src/pages/index.vue: lastReviewed "not-a-date" is not a YYYY-MM-DD date',
    ]);
    expect(plugin.load("/src/main.js")).toBeUndefined();
  });

  it("invalidates the module when a page changes", () => {
    const plugin = setup();
    const module = {};
    const moduleGraph = {
      getModuleById: vi.fn(() => module),
      invalidateModule: vi.fn(),
    };
    const context = { environment: { moduleGraph } };

    plugin.hotUpdate.call(context, { file: path.join(root, "src/main.js") });
    expect(moduleGraph.invalidateModule).not.toHaveBeenCalled();

    plugin.hotUpdate.call(context, {
      file: path.join(root, "src", "pages", "index.vue"),
    });
    expect(moduleGraph.getModuleById).toHaveBeenCalledWith(
      "\0virtual:page-meta",
    );
    expect(moduleGraph.invalidateModule).toHaveBeenCalledWith(module);
  });

  it("does nothing on a page change before the module is loaded", () => {
    const plugin = setup();
    const moduleGraph = {
      getModuleById: () => undefined,
      invalidateModule: vi.fn(),
    };

    plugin.hotUpdate.call(
      { environment: { moduleGraph } },
      { file: path.join(root, "src", "pages", "index.vue") },
    );
    expect(moduleGraph.invalidateModule).not.toHaveBeenCalled();
  });
});
