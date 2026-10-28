import { VueHeadMixin } from "@unhead/vue";
import { ViteSSG } from "vite-ssg";
import { handleHotUpdate } from "vue-router/auto-routes";
// import { createBootstrap } from "bootstrap-vue-next";
import { Vue3Mq } from "vue3-mq";

import App from "@/app.vue";
import { routerOptions } from "@/router";

// bootstrap-icons
import "bootstrap-icons/font/bootstrap-icons.css";

// solstice bootstrap theme
import "solstice-theme/dist/solstice.scss";

// solstice-vue comps
import "solstice-vue/dist/style.css";

// bootstrap-vue-next css
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// app specific scss
//import "@/assets/css/styles.scss";

// bootstrap js touches `document` on import, so it is loaded in the browser
// only and skipped while pre-rendering pages at build time.
if (!import.meta.env.SSR) {
  import("bootstrap");
}

// vite-ssg pre-renders every static route to HTML at build time (so crawlers
// and answer engines get real content) and mounts the app in the browser.
export const createApp = ViteSSG(App, routerOptions, ({ app, router }) => {
  app.config.productionTip = false;

  // lets components declare page metadata with a `head()` option, the same
  // way they use `data()`; vite-ssg installs the head manager itself
  app.mixin(VueHeadMixin);

  // vue-mq (media queries)
  app.use(Vue3Mq, {
    preset: "bootstrap5",
  });

  // bootstrap-vue-next (legacy)
  // app.use(createBootstrap());

  // declar global properties here
  app.config.globalProperties.appName = "UX Design Guides";

  // unplugin-vue-router (auto page routing)
  if (import.meta.hot) {
    handleHotUpdate(router);
  }
});
