<template>
  <button
    :id="slug + 'Heading'"
    type="button"
    class="d-flex justify-content-between align-items-center nav-link rounded-3 chevron bg-white-hover bg-opacity-10-hover w-100 border-0 bg-transparent text-white"
    :class="{ 'bg-opacity-10 bg-white': isExpanded }"
    :aria-expanded="isExpanded"
    :aria-controls="slug + 'Collapse'"
    @click="toggle"
  >
    <span
      :class="{ 'small fw-medium': sub }"
      :style="sub ? 'padding-left: 32px' : null"
      ><i
        v-if="icon"
        class="bi text-opacity-50 me-3 text-white"
        :class="icon"
      ></i
      >{{ menu }}</span
    >
    <i class="bi bi-chevron-down" aria-hidden="true"></i>
  </button>
  <div
    :id="slug + 'Collapse'"
    class="collapse"
    :class="{ show: isExpanded }"
    :aria-labelledby="slug + 'Heading'"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NavCollapse",
    props: {
      menu: {
        type: String,
        required: true,
      },
      slug: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: false,
      },
      // Optional explicit list of route paths that should keep this menu
      // expanded. Matching is exact (path must equal an entry). Use this when
      // a menu's child routes do not contain its slug (e.g. "Getting Started"
      // whose pages live under /solstice/... rather than /getting-started/...).
      // When omitted, the menu expands whenever the current route path
      // contains "/<slug>".
      match: {
        type: Array,
        required: false,
        default: null,
      },
      // Set true for a nested/sub-level trigger (e.g. component categories
      // under "Components"). Applies smaller, indented text styling to
      // distinguish it from a top-level menu trigger.
      sub: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {
        // Manual open/closed override set by clicking the trigger. Null means
        // "follow the route". Reset to null on navigation so the active
        // section auto-expands.
        userToggled: null,
      };
    },
    computed: {
      routeMatches() {
        const path = this.$route.path;
        if (this.match && this.match.length) {
          // Exact path matches only, so a broad entry like "/solstice" does
          // not also expand deeper sections such as "/solstice/content/...".
          return this.match.includes(path);
        }
        // Match "/<slug>" as a full path segment, not merely a substring, so
        // that e.g. slug="text" does not also match a sibling route segment
        // like "/forms/textarea".
        const escapedSlug = this.slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        return new RegExp("/" + escapedSlug + "(/|$)").test(path);
      },
      isExpanded() {
        return this.userToggled === null ? this.routeMatches : this.userToggled;
      },
    },
    watch: {
      "$route.path"() {
        // A navigation happened; defer to route-based expansion again.
        this.userToggled = null;
      },
    },
    methods: {
      toggle() {
        this.userToggled = !this.isExpanded;
      },
    },
  };
</script>

<style lang="css" scoped>
  .chevron .bi-chevron-down {
    display: inline-block;
    transition: transform 0.35s ease;
    transform-origin: 0.5em 50%;
    font-weight: bolder;
  }

  .chevron[aria-expanded="true"] .bi-chevron-down {
    transform: rotate(-180deg); /* transform: scaleY(-1); */
  }

  .bi-chevron-down::after {
    font-weight: bolder !important;
  }
</style>
