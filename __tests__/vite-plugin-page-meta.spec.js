import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import {
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
