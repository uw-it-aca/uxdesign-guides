<template>
  <STopbarNeo :app-name="appName" :app-root-url="'/'" :page-title="pageTitle">
    <template #navigation>
      <!-- MARL: proper BNav implementation  -->
      <BNav class="flex-column flex-md-row gap-md-5">
        <BNavItemDropdown
          text="UX Process Guides"
          toggle-class="text-white px-0"
        >
          <BDropdownItem href="/process-guides/understand"
            >Understand</BDropdownItem
          >
          <BDropdownItem href="/process-guides/create">Create</BDropdownItem>
          <BDropdownItem href="/process-guides/validate"
            >Validate</BDropdownItem
          >
          <BDropdownItem href="/process-guides/iterate">Iterate</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown
          text="Interface Design Guides"
          toggle-class="text-white px-0"
        >
          <BDropdownItem href="/user-interface/page-types"
            >Page Types</BDropdownItem
          >
          <BDropdownItem href="/user-interface/containers"
            >Containers</BDropdownItem
          >
          <BDropdownItem href="/user-interface/forms">Forms</BDropdownItem>
          <BDropdownItem href="/user-interface/labels">Labels</BDropdownItem>
          <BDropdownItem href="/user-interface/terminology"
            >Terminology</BDropdownItem
          >
          <BDropdownItem href="/user-interface/color-icons"
            >Color &amp Icons</BDropdownItem
          >
        </BNavItemDropdown>
        <BNavItem href="/info-design" link-class="text-white px-0"
          >Information Design Guides</BNavItem
        >
        <BNavItemDropdown
          text="General Information"
          toggle-class="text-white px-0"
        >
          <BDropdownItem href="/what-is-ux">What is UX?</BDropdownItem>
          <BDropdownItem href="/why-do-ux">Why invest in UX?</BDropdownItem>
          <BDropdownItem href="/ux-team">About the UX Team</BDropdownItem>
          <BDropdownDivider />
          <BDropdownItem href="/ux-help">UX Design Help</BDropdownItem>
        </BNavItemDropdown>
      </BNav>
    </template>
    <template #main>
      <div class="row py-5">
        <div :class="[mq.xlMinus || !$slots['toc'] ? 'col' : 'col-9']">
          <div v-if="$slots['toc'] && mq.xlMinus" class="mb-5">
            <slot name="toc" />
          </div>

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

          <slot name="content" />

          <div v-if="$slots.author" class="small">
            <div class="text-muted">
              Last updated by: <slot name="author" />
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
    inject: ["mq"],
    props: {
      pageTitle: {
        type: String,
        default: "Not specified",
        required: false,
      },
    },
    data() {
      return {
        // automatically set year
        currentYear: new Date().getFullYear(),
        lastModified: null,
      };
    },
    mounted: function () {
      // MARK: constructs page title in the following format "Page Title - AppName"
      // as a default layout prop
      document.title = `${this.pageTitle} - ${this.appName}`;
      //this.lastModified = new Date(document.lastModified).toLocaleString();
    },
  };
</script>
