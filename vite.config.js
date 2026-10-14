import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "vue-router/vite";

import htaccess from "./vite-plugin-htaccess";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // Build only: must match the subpath on depts.washington.edu, which bakes
  // "/ux/assets/…" into the output. Vite would also apply this to the dev
  // server, so it is left at "/" there to keep local URLs clean.
  base: command === "build" ? "/ux/" : "/",
  plugins: [
    VueRouter({}),
    Vue(),
    // emits dist/.htaccess so Apache returns 200 for real routes and 404 for
    // unknown paths; excluded prefixes still render but respond 404.
    // uxdesign.uw.edu is masked onto this directory's root, so it needs the
    // "/ux/" prefix stripped from the baked-in asset URLs.
    htaccess({
      exclude: ["/_templates", "/solstice/secret"],
      maskedHosts: ["uxdesign.uw.edu"],
      allowOrigin: "https://depts.washington.edu",
    }),
  ],
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
