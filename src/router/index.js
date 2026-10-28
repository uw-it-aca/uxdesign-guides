import { routes } from "vue-router/auto-routes";

import { resolveBase } from "./base";

/**
 * Router options handed to `ViteSSG` (see src/main.js), which creates the
 * router itself: web history in the browser, memory history while
 * pre-rendering at build time.
 *
 * BASE_URL comes from vite's `base`: "/ux/" in the build, "/" in dev. In the
 * browser the base is resolved against the current path so the app works at
 * depts.washington.edu/ux/ and at the masked vanity host's root. Pre-rendering
 * has no location and always renders the canonical "/ux/" layout.
 */
export const routerOptions = {
  routes,
  base: import.meta.env.SSR
    ? import.meta.env.BASE_URL
    : resolveBase(import.meta.env.BASE_URL, location.pathname),
};
