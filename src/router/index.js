import { createRouter, createWebHistory } from "vue-router";
import { routes, handleHotUpdate } from "vue-router/auto-routes";

import { resolveBase } from "./base";

const router = createRouter({
  // BASE_URL comes from vite's `base`: "/ux/" in the build, "/" in dev.
  // The base is resolved against the current path so the app works at
  // depts.washington.edu/ux/ and at the masked vanity host's root.
  history: createWebHistory(
    resolveBase(
      import.meta.env.BASE_URL,
      typeof location === "undefined" ? "/" : location.pathname,
    ),
  ),
  routes,
});

if (import.meta.hot) {
  handleHotUpdate(router);
}

export default router;
