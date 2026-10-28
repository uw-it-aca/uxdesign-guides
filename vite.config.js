import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "vue-router/vite";

import pageMeta from "./vite-plugin-page-meta.js";
import htaccess, {
  PRERENDER_DIR,
  flattenRoutes,
  staticPaths,
} from "./vite-plugin-htaccess.js";
import { SITE_URL } from "./src/utils/head.js";

// Routes that still render client-side but respond 404, keeping them out of
// search indexes. They are neither pre-rendered nor whitelisted in .htaccess.
const EXCLUDE = ["/_templates", "/solstice/secret"];

// The subpath on depts.washington.edu. Builds bake it into asset URLs
// ("/ux/assets/…"); the dev server and `vite preview` run at "/" so local
// URLs stay clean. Preview strips the prefix from asset requests, the same
// way the masked vanity host does (see vite-plugin-htaccess.js).
const DEPLOY_BASE = "/ux/";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "build" ? DEPLOY_BASE : "/",
  plugins: [
    VueRouter({}),
    Vue(),
    // page titles and git dates for structured data (virtual:page-meta)
    pageMeta(),
    // emits dist/.htaccess so Apache returns 200 for real routes and 404 for
    // unknown paths; excluded prefixes still render but respond 404.
    // uxdesign.uw.edu is masked onto this directory's root, so it needs the
    // "/ux/" prefix stripped from the baked-in asset URLs.
    htaccess({
      base: DEPLOY_BASE,
      exclude: EXCLUDE,
      maskedHosts: ["uxdesign.uw.edu"],
      allowOrigin: "https://depts.washington.edu",
      prerendered: true,
      // also emits sitemap.xml and robots.txt, listing canonical URLs
      siteUrl: SITE_URL,
    }),
  ],
  // `vite-ssg build` pre-renders each static route to HTML so crawlers and
  // answer engines get the page content without running JS. The home page
  // stays at index.html and the catch-all 404 page ("/404") renders to
  // 404.html, the ErrorDocument. Every other page goes to `_html/<route>.html`,
  // which .htaccess serves for the clean route URL (see PRERENDER_DIR).
  ssgOptions: {
    entry: "src/main.js",
    dirStyle: "flat",
    includedRoutes: (_paths, routes) => [
      // the same list the .htaccess whitelists
      ...staticPaths(flattenRoutes(routes), EXCLUDE),
      "/404",
    ],
    htmlFileName: (file) =>
      file === "index.html" || file === "404.html"
        ? file
        : `${PRERENDER_DIR}/${file}`,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ["global-builtin", "import"], // silence bootstrap5 related deprecations
      },
    },
  },
}));
