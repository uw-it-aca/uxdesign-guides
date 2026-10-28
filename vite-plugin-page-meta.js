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
 * Titles come from the `pageTitle` in each page's `data()`. The date is the
 * page's `lastReviewed` (also in `data()`, as `YYYY-MM-DD`) when it has one:
 * authors set it when a change matters to readers, so typo fixes and
 * reformatting don't make a page look freshly reviewed. Pages without one fall
 * back to the author date of the file's last git commit, which survives
 * rebases and cherry-picks. Git dates are left out when history is not
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
 * The review date declared in a page's `data()`, e.g. `lastReviewed:
 * "2026-10-22"`.
 *
 * @param {string} source contents of a `.vue` file
 * @returns {string|null} the date as written, or null when there is none
 */
export function extractReviewed(source) {
  // skips a commented-out line, like the hint in the page templates
  const match = source.match(
    /^(?:(?!\/\/).)*?\blastReviewed:\s*(["'`])((?:(?!\1).)*)\1/m,
  );
  return match ? match[2] : null;
}

/**
 * Whether a string is a real calendar date written as `YYYY-MM-DD`.
 *
 * @param {string} date
 * @returns {boolean}
 */
export function isCalendarDate(date) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
  if (!match) return false;
  const [, year, month, day] = match.map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  return parsed.getUTCMonth() === month - 1 && parsed.getUTCDate() === day;
}

/**
 * Parse `git log --format=%x00%aI --name-only` output into the newest author
 * date per file. Author dates are not guaranteed to follow log order (a
 * rebased commit keeps its original date), so the latest one wins.
 *
 * @param {string} log
 * @returns {Map<string, string>} file path -> ISO 8601 date
 */
export function parseGitLog(log) {
  const dates = new Map();
  for (const entry of log.split("\0").slice(1)) {
    const [date, ...files] = entry.split("\n").map((line) => line.trim());
    for (const file of files) {
      if (!file) continue;
      const known = dates.get(file);
      if (known === undefined || Date.parse(date) > Date.parse(known)) {
        dates.set(file, date);
      }
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
      git("log", "--format=%x00%aI", "--name-only", "--", dir),
    );
  } catch {
    // not a git checkout, or git is not installed
    return new Map();
  }
}

/**
 * @param {string} root project root
 * @param {string} dir pages directory, relative to the root
 * @param {(message: string) => void} [warn] reports an invalid `lastReviewed`
 * @returns {Record<string, { title: string|null, modified?: string }>}
 */
export function collectPageMeta(root, dir, warn = () => {}) {
  const pagesDir = path.join(root, dir);
  const dates = gitDates(root, dir);
  const meta = {};

  for (const file of fs.readdirSync(pagesDir, { recursive: true })) {
    if (!file.endsWith(".vue")) continue;
    const route = fileToRoute(file);
    if (route === null) continue;

    const source = fs.readFileSync(path.join(pagesDir, file), "utf-8");
    const relative = path.posix.join(dir, file.replace(/\\/g, "/"));
    const reviewed = extractReviewed(source);
    if (reviewed !== null && !isCalendarDate(reviewed)) {
      warn(`${relative}: lastReviewed "${reviewed}" is not a YYYY-MM-DD date`);
    }
    const modified = isCalendarDate(reviewed ?? "")
      ? reviewed
      : dates.get(relative);
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
      const meta = collectPageMeta(root, dir, (message) => this.warn(message));
      return `export default ${JSON.stringify(meta)};`;
    },

    // a renamed page or a changed title regenerates the module in dev
    hotUpdate({ file }) {
      if (!file.startsWith(path.join(root, dir))) return;
      const module = this.environment.moduleGraph.getModuleById(RESOLVED_ID);
      if (module) this.environment.moduleGraph.invalidateModule(module);
    },
  };
}
