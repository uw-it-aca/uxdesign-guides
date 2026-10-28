/**
 * Per-page <head> metadata: title, description, canonical URL and Open Graph
 * tags. The layouts call `pageHead()` from their `head()` option (see
 * `VueHeadMixin` in src/main.js), so every page gets these tags in its
 * pre-rendered HTML, where crawlers and answer engines read them.
 */

/**
 * Canonical origin and base. The same pages are also served at the masked
 * vanity host (uxdesign.uw.edu); pointing both at one URL keeps search and
 * answer engines from splitting or misattributing them.
 */
export const SITE_URL = "https://depts.washington.edu/ux";

/** Publisher of every page, referenced from the structured data. */
export const ORGANIZATION = {
  name: "UW-IT Experience Design (XD) Team",
  path: "/xd-team",
  parent: {
    name: "University of Washington",
    url: "https://www.washington.edu/",
  },
};

/** Name of the site as a whole, for structured data. */
export const WEBSITE_NAME = "UX Design Guides";

/** Meta descriptions longer than this are cut short in search results. */
const DESCRIPTION_MAX = 160;

/**
 * @param {string} path router path without the base, e.g. `/xd-team`
 * @returns {string} absolute canonical URL
 */
export function canonicalUrl(path) {
  const clean = path.replace(/\/+$/, "");
  return `${SITE_URL}${clean === "" ? "/" : clean}`;
}

/**
 * Plain text of rendered slot content, with whitespace collapsed.
 *
 * @param {Array<import("vue").VNode>|undefined} vnodes slot output
 * @returns {string}
 */
export function vnodeText(vnodes) {
  const parts = [];

  const walk = (node) => {
    if (node == null || typeof node === "boolean") return;
    if (typeof node === "string" || typeof node === "number") {
      parts.push(String(node));
    } else if (Array.isArray(node)) {
      node.forEach(walk);
    } else if (typeof node.children === "string") {
      parts.push(node.children);
    } else if (Array.isArray(node.children)) {
      node.children.forEach(walk);
    } else if (node.children && typeof node.children.default === "function") {
      // a component with slot content, e.g. <BLink>text</BLink>
      walk(node.children.default());
    }
    // block elements are separated by whitespace in the rendered page
    parts.push(" ");
  };

  walk(vnodes);
  return parts.join("").replace(/\s+/g, " ").trim();
}

/**
 * Shorten text to a meta description: whole sentences while they fit, else
 * the first sentence cut at a word boundary.
 *
 * @param {string} text
 * @param {number} [max]
 * @returns {string}
 */
export function summarize(text, max = DESCRIPTION_MAX) {
  if (text.length <= max) return text;

  const sentences = (text.match(/[^.!?]+[.!?]+(?=\s|$)/g) ?? []).map((s) =>
    s.trim(),
  );
  let result = "";
  for (const sentence of sentences) {
    const next = result === "" ? sentence : `${result} ${sentence}`;
    if (next.length > max) break;
    result = next;
  }
  if (result !== "") return result;

  const cut = text.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[\s,;:]+$/, "")}…`;
}

/**
 * Breadcrumb trail for a page: the home page, then every ancestor route that
 * is a page of its own, then the page itself.
 *
 * @param {string} path router path without the base
 * @param {string} title the page's own title
 * @param {Record<string, { title: string|null }>} pages page titles by route
 * @returns {Array<{ name: string, path: string }>}
 */
export function breadcrumbTrail(path, title, pages) {
  const segments = path.replace(/\/+$/, "").split("/").filter(Boolean);
  const trail = [{ name: WEBSITE_NAME, path: "/" }];

  segments.slice(0, -1).forEach((_, i) => {
    const ancestor = `/${segments.slice(0, i + 1).join("/")}`;
    const name = pages[ancestor]?.title;
    if (name) trail.push({ name, path: ancestor });
  });

  if (segments.length > 0) trail.push({ name: title, path });
  return trail;
}

/**
 * schema.org structured data (JSON-LD) for a page: who publishes it, which
 * site it belongs to, where it sits in the site, and when it last changed.
 * Search and answer engines use this to attribute and date what they cite.
 *
 * @param {object} page
 * @param {string} page.title page title, without the site name
 * @param {string} page.path router path without the base
 * @param {string} [page.description] meta description
 * @param {Record<string, { title: string|null, modified?: string }>} [page.pages]
 *   title and last-modified date of every page by route (`virtual:page-meta`)
 * @returns {object} a JSON-LD document with an `@graph`
 */
export function structuredData({ title, path, description, pages = {} }) {
  const url = canonicalUrl(path);
  const home = canonicalUrl("/");
  const orgId = `${home}#organization`;
  const siteId = `${home}#website`;

  const organization = {
    "@type": "Organization",
    "@id": orgId,
    name: ORGANIZATION.name,
    url: canonicalUrl(ORGANIZATION.path),
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: ORGANIZATION.parent.name,
      url: ORGANIZATION.parent.url,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": siteId,
    name: WEBSITE_NAME,
    url: home,
    inLanguage: "en",
    publisher: { "@id": orgId },
  };

  const isHome = canonicalUrl(path) === home;
  const modified = pages[path.replace(/\/+$/, "") || "/"]?.modified;

  const page = {
    "@type": isHome ? "WebPage" : "TechArticle",
    "@id": `${url}#page`,
    url,
    name: title,
    ...(!isHome && { headline: title }),
    ...(description && { description }),
    inLanguage: "en",
    isPartOf: { "@id": siteId },
    publisher: { "@id": orgId },
    ...(!isHome && { author: { "@id": orgId } }),
    ...(modified && { dateModified: modified }),
  };

  const graph = [organization, website, page];

  if (!isHome) {
    page.breadcrumb = { "@id": `${url}#breadcrumb` };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: breadcrumbTrail(path, title, pages).map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: canonicalUrl(crumb.path),
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/**
 * Serialize JSON-LD for a `<script>` element. `<` is escaped so page text can
 * never close the script tag early.
 *
 * @param {object} data
 * @returns {string}
 */
export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Build the head entry for a page.
 *
 * @param {object} page
 * @param {string} page.title page title, e.g. `What is UX?`
 * @param {string} page.siteName site name appended to the title
 * @param {string} page.path router path without the base
 * @param {string} [page.description] meta description, already summarized
 * @param {boolean} [page.noindex] keep the page out of search indexes
 * @param {Record<string, { title: string|null, modified?: string }>} [page.pages]
 *   title and last-modified date of every page by route, for structured data
 * @returns {object} input for unhead's `useHead`
 */
export function pageHead({
  title,
  siteName,
  path,
  description,
  noindex,
  pages,
}) {
  // the site's home page is titled by the site name alone
  const fullTitle = path === "/" ? siteName : `${title} - ${siteName}`;
  const url = canonicalUrl(path);

  const meta = [
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: siteName },
    { property: "og:title", content: fullTitle },
  ];
  if (description) {
    meta.unshift({ name: "description", content: description });
    meta.push({ property: "og:description", content: description });
  }
  if (noindex) {
    meta.unshift({ name: "robots", content: "noindex" });
  } else {
    meta.push({ property: "og:url", content: url });
  }

  return {
    title: fullTitle,
    meta,
    // a noindex page has no URL worth pointing at, nor anything to describe
    link: noindex ? [] : [{ rel: "canonical", href: url }],
    script: noindex
      ? []
      : [
          {
            key: "structured-data",
            type: "application/ld+json",
            innerHTML: serializeJsonLd(
              structuredData({ title, path, description, pages }),
            ),
          },
        ],
  };
}
