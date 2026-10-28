<template>
  <!-- $router.resolve() prepends the history base, so this is correct at both
       mount points (/ux/ on depts, / on the vanity host) -->
  <SSidebar
    :app-name="'Solstice'"
    :app-root-url="$router.resolve('/solstice').href"
    :page-title="pageTitle"
  >
    <template #navigation>
      <NavMenu />
    </template>
    <template #aside>
      <div
        class="bg-husky-purple rounded-3 small d-flex justify-content-between align-items-center mt-2 p-3"
      >
        <div>
          <p>Version</p>
          <ul class="list-unstyled m-0">
            <li class="mb-1">
              <a
                href="https://github.com/uw-it-aca/solstice-theme/releases"
                target="_blank"
                class="link-light link-opacity-75 link-opacity-100-hover link-underline-opacity-75 link-underline-opacity-100-hover"
                >solstice-theme: 1.0.7</a
              >
            </li>
            <li>
              <a
                href="https://github.com/uw-it-aca/solstice-vue/releases"
                target="_blank"
                class="link-light link-opacity-75 link-opacity-100-hover link-underline-opacity-75 link-underline-opacity-100-hover"
                >solstice-vue: 1.1.5</a
              >
            </li>
          </ul>
        </div>
        <div>
          <SColorMode color-class="text-white" />
        </div>
      </div>
    </template>
    <template #main>
      <div class="row">
        <div :class="[mq.xlMinus || !$slots['toc'] ? 'col' : 'col-9']">
          <div v-if="$slots['toc'] && mq.xlMinus" class="mb-5">
            <slot name="toc" />
          </div>

          <div v-if="$slots.breadcrumb" class="row my-5">
            <div class="col">
              <slot name="breadcrumb" />
            </div>
          </div>

          <div v-if="$slots.lead">
            <h1 class="display-5 ff-encode-sans fw-semibold my-5">
              {{ pageTitle }}
            </h1>
            <slot name="lead">
              <p class="lead" style="max-width: 85ch">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                maiores quo consequatur, minima minus suscipit doloribus quos
                dicta excepturi porro obcaecati, dignissimos rerum consectetur
                ea dolores vero sint. Porro, quaerat.
              </p>
            </slot>
            <hr class="my-5 w-50" />
          </div>

          <slot name="content" />

          <!-- MARK: last updated. The date matches the dateModified in the
               page's structured data; the name comes from the #author slot -->
          <div v-if="modified || hasAuthor()" class="small py-1">
            <div class="text-muted">
              Last updated
              <time v-if="modified" :datetime="modified">{{
                displayDate(modified)
              }}</time>
              <template v-if="hasAuthor()"> by <slot name="author" /></template>
            </div>
          </div>
        </div>
        <div v-if="$slots['toc'] && !mq.xlMinus" class="col-3">
          <div class="sticky-top" style="margin-top: 11rem">
            <slot name="toc"></slot>
          </div>
        </div>
      </div>
    </template>
    <template #footer></template>
  </SSidebar>
</template>

<script>
  import { SColorMode, SSidebar, SHeading, SUser } from "solstice-vue";
  import NavMenu from "@/components/NavMenu.vue";
  import pageMeta from "virtual:page-meta";
  import {
    displayDate,
    pageHead,
    pageModified,
    summarize,
    vnodeText,
  } from "@/utils/head.js";

  export default {
    name: "App",
    components: {
      NavMenu,
      SColorMode,
      SSidebar,
      SHeading,
      SUser,
    },
    inject: ["mq"],
    props: {
      pageTitle: {
        type: String,
        default: "Not specified",
        required: false,
      },
      // meta description; defaults to the text of the #lead slot
      description: {
        type: String,
        default: null,
      },
      // keep the page out of search indexes (e.g. the 404 page)
      noindex: {
        type: Boolean,
        default: false,
      },
    },
    // title, description, canonical URL and Open Graph tags, rendered into the
    // pre-rendered HTML at build time and kept up to date in the browser
    head() {
      return pageHead({
        title: this.pageTitle,
        siteName: "Solstice",
        path: this.$route.path,
        description:
          this.description ?? summarize(vnodeText(this.$slots.lead?.())),
        noindex: this.noindex,
        pages: pageMeta,
      });
    },
    data() {
      return {
        // automatically set year
        currentYear: new Date().getFullYear(),
      };
    },
    computed: {
      // ISO date of the page's last commit, if known (see vite-plugin-page-meta.js)
      modified() {
        return pageModified(this.$route.path, pageMeta);
      },
    },
    methods: {
      displayDate,
      // the #author slot counts only if it has text, so an empty one shows no name
      hasAuthor() {
        return vnodeText(this.$slots.author?.()) !== "";
      },
    },
  };
</script>
