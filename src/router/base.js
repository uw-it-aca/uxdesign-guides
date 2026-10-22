/**
 * Resolve the router history base for the mount point we are served from.
 *
 * This directory is published at two mount points. The canonical host serves
 * it under vite's `base` ("/ux/" in production), while the masked vanity host
 * (uxdesign.uw.edu) serves the same files from the site root. Choosing the
 * base from the current path keeps generated links correct and clean on both —
 * "/ux/xd-team" on depts, "/xd-team" on the vanity domain — without this
 * module needing to know any hostname.
 *
 * Assets are unaffected: they keep the baked-in `base` prefix, and the
 * generated .htaccess strips it on masked hosts (see vite-plugin-htaccess.js).
 *
 * `base` is set for builds only, so in dev it is "/" and every path starts
 * with it, making this a no-op there.
 *
 * @param {string} baseUrl vite's `import.meta.env.BASE_URL`, e.g. `/ux/`
 * @param {string} pathname current location path
 * @returns {string} the base to hand to `createWebHistory`
 */
export function resolveBase(baseUrl, pathname) {
  return pathname.startsWith(baseUrl) ? baseUrl : "/";
}
