/**
 * Exposes `virtual:page-meta`: the title and last-modified date of every page
 * in `src/pages`, keyed by route path.
 *
 *   import pageMeta from "virtual:page-meta";
 *   pageMeta["/process-guides"]; // { title: "The Process of Creating UX", modified: "2026-10-20T…" }
 *
 * The layouts use it for structured data: breadcrumbs need the titles of a
 * page's parents, which a page cannot know at render time, and articles carry
 * a `dateModified`.
 *
 * Titles come from the `pageTitle` in each page's `data()`. Dates come from
 * the page file's last git commit, and are left out when git history is not
 * available or is shallow (a CI checkout with `fetch-depth: 1` would give every
 * page the date of the latest commit, which is wrong).
 *
 * @see https://vite.dev/guide/api-plugin#virtual-modules-convention
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const VIRTUAL_ID = "virtual:page-meta";
const RESOLVED_ID = `\0${VIRTUAL_ID}`;

/**
 * Route path for a page file, following vue-router's file-based routing.
 *
 * @param {string} file path relative to the pages directory, e.g. `a/index.vue`
 * @returns {string|null} route path, or null for dynamic routes
 */
export function fileToRoute(file) {
  const route = file
    .replace(/\\/g, "/")
    .replace(/\.vue$/, "")
    .replace(/(^|\/)index$/, "");
  if (/[[\]]/.test(route)) return null;
  return `/${route}`;
}

/**
 * The page title declared in a page's `data()`.
 *
 * @param {string} source contents of a `.vue` file
 * @returns {string|null}
 */
export function extractTitle(source) {
  const match = source.match(/pageTitle:\s*(["'`])((?:(?!\1).)*)\1/);
  return match ? match[2] : null;
}

/**
 * Parse `git log --format=%x00%cI --name-only` output into the newest commit
 * date per file. Git lists commits newest first, so the first date wins.
 *
 * @param {string} log
 * @returns {Map<string, string>} file path -> ISO 8601 date
 */
export function parseGitLog(log) {
  const dates = new Map();
  for (const entry of log.split("\0").slice(1)) {
    const [date, ...files] = entry.split("\n").map((line) => line.trim());
    for (const file of files) {
      if (file && !dates.has(file)) dates.set(file, date);
    }
  }
  return dates;
}

/**
 * @param {string} root project root
 * @param {string} dir pages directory, relative to the root
 * @returns {Map<string, string>} file path relative to the root -> date
 */
function gitDates(root, dir) {
  const git = (...args) =>
    execFileSync("git", args, { cwd: root, encoding: "utf-8", stdio: "pipe" });
  try {
    if (git("rev-parse", "--is-shallow-repository").trim() === "true") {
      return new Map();
    }
    return parseGitLog(
      git("log", "--format=%x00%cI", "--name-only", "--", dir),
    );
  } catch {
    // not a git checkout, or git is not installed
    return new Map();
  }
}

/**
 * @param {string} root project root
 * @param {string} dir pages directory, relative to the root
 * @returns {Record<string, { title: string|null, modified?: string }>}
 */
export function collectPageMeta(root, dir) {
  const pagesDir = path.join(root, dir);
  const dates = gitDates(root, dir);
  const meta = {};

  for (const file of fs.readdirSync(pagesDir, { recursive: true })) {
    if (!file.endsWith(".vue")) continue;
    const route = fileToRoute(file);
    if (route === null) continue;

    const source = fs.readFileSync(path.join(pagesDir, file), "utf-8");
    const modified = dates.get(path.posix.join(dir, file.replace(/\\/g, "/")));
    meta[route] = {
      title: extractTitle(source),
      ...(modified && { modified }),
    };
  }

  return meta;
}

/**
 * @param {object} [options]
 * @param {string} [options.dir] pages directory, relative to the project root
 * @returns {import("vite").Plugin}
 */
export default function pageMeta({ dir = "src/pages" } = {}) {
  let root;

  return {
    name: "vite-plugin-page-meta",

    configResolved(config) {
      root = config.root;
    },

    resolveId(id) {
      return id === VIRTUAL_ID ? RESOLVED_ID : undefined;
    },

    load(id) {
      if (id !== RESOLVED_ID) return undefined;
      return `export default ${JSON.stringify(collectPageMeta(root, dir))};`;
    },

    // a renamed page or a changed title regenerates the module in dev
    hotUpdate({ file }) {
      if (!file.startsWith(path.join(root, dir))) return;
      const module = this.environment.moduleGraph.getModuleById(RESOLVED_ID);
      if (module) this.environment.moduleGraph.invalidateModule(module);
    },
  };
}
