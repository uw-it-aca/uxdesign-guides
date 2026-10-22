import { createApp } from "vue";
// import { createBootstrap } from "bootstrap-vue-next";
import { Vue3Mq } from "vue3-mq";

import App from "@/app.vue";
import router from "@/router";

// bootstrap js + bootstrap-icons
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

// solstice bootstrap theme
import "solstice-theme/dist/solstice.scss";

// solstice-vue comps
import "solstice-vue/dist/style.css";

// bootstrap-vue-next css
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// app specific scss
//import "@/assets/css/styles.scss";

const app = createApp(App);

app.config.productionTip = false;

// vue-mq (media queries)
app.use(Vue3Mq, {
  preset: "bootstrap5",
});

// bootstrap-vue-next (legacy)
// app.use(createBootstrap());

// declar global properties here
app.config.globalProperties.appName = "UX Design Guides";

// unplugin-vue-router (auto page routing)
app.use(router);

app.mount("#app");
