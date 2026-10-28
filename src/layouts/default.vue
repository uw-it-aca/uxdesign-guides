<template>
  <!-- $router.resolve() prepends the history base, so the home link is
       correct at both mount points (/ux/ on depts, / on the vanity host) -->
  <STopbarNeo
    :app-name="appName"
    :app-root-url="$router.resolve('/').href"
    :page-title="pageTitle"
  >
    <template #navigation>
      <!-- MARL: proper BNav implementation  -->
      <BNav class="flex-column flex-md-row gap-md-5">
        <BNavItemDropdown
          text="UX Process Guides"
          toggle-class="text-white px-0"
        >
          <BDropdownItem to="/process-guides/understand"
            >Understand</BDropdownItem
          >
          <BDropdownItem to="/process-guides/create">Create</BDropdownItem>
          <BDropdownItem to="/process-guides/validate">Validate</BDropdownItem>
          <BDropdownItem to="/process-guides/iterate">Iterate</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown
          text="Interface Design Guides"
          toggle-class="text-white px-0"
        >
          <BDropdownItem to="/user-interface/page-types"
            >Page Types</BDropdownItem
          >
          <BDropdownItem to="/user-interface/containers"
            >Containers</BDropdownItem
          >
          <BDropdownItem to="/user-interface/forms">Forms</BDropdownItem>
          <BDropdownItem to="/user-interface/labels">Labels</BDropdownItem>
          <BDropdownItem to="/user-interface/terminology"
            >Terminology</BDropdownItem
          >
          <BDropdownItem to="/user-interface/color-icons"
            >Color &amp Icons</BDropdownItem
          >
        </BNavItemDropdown>
        <BNavItem to="/info-design" link-class="text-white px-0"
          >Information Design Guides</BNavItem
        >
        <BNavItemDropdown
          text="General Information"
          toggle-class="text-white px-0"
        >
          <BDropdownItem to="/what-is-ux">What is UX?</BDropdownItem>
          <BDropdownItem to="/why-do-ux">Why invest in UX?</BDropdownItem>
          <BDropdownItem to="/xd-team">About the XD Team</BDropdownItem>
          <BDropdownDivider />
          <BDropdownItem to="/ux-help">UX Design Help</BDropdownItem>
        </BNavItemDropdown>
      </BNav>
    </template>
    <template #main>
      <div class="row py-5">
        <div :class="[$slots['toc'] ? 'col-xxl-9' : 'col']">
          <div v-if="$slots.breadcrumb" class="mb-5">
            <slot name="breadcrumb" />
          </div>

          <div v-if="$slots.lead">
            <h1 class="display-5 ff-encode-sans fw-semibold mb-3">
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

          <div v-if="$slots['toc']" class="d-xxl-none mb-5">
            <!-- MARK: mobile toc -->
            <slot name="toc" />
          </div>

          <!-- MARK: content -->
          <slot name="content" />

          <div v-if="$slots.author" class="small">
            <div class="text-muted">
              Last updated by: <slot name="author" />
            </div>
          </div>
        </div>

        <div v-if="$slots['toc']" class="d-none d-xxl-block col-3">
          <!-- MARK: desktop toc -->
          <div class="sticky-top" style="margin-top: 11rem">
            <slot name="toc"></slot>
          </div>
        </div>
      </div>
    </template>
    <template #footer></template>
  </STopbarNeo>
</template>

<script>
  import {
    BNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
    BDropdownDivider,
  } from "bootstrap-vue-next";
  import { SColorMode, STopbarNeo, SHeading, SUser } from "solstice-vue";
  import NavMenu from "@/components/NavMenu.vue";
  import pageMeta from "virtual:page-meta";
  import { pageHead, summarize, vnodeText } from "@/utils/head.js";

  export default {
    name: "App",
    components: {
      NavMenu,
      SColorMode,
      STopbarNeo,
      SHeading,
      SUser,
      BNav,
      BNavItem,
      BNavItemDropdown,
      BDropdownItem,
      BDropdownDivider,
    },
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
        siteName: this.appName,
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
        lastModified: null,
      };
    },
  };
</script>
