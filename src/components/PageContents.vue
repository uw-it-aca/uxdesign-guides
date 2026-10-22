<template>
  <div>
    <p class="fw-bold">On this page</p>
    <ul ref="toc" class="list-unstyled m-0">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
  import { useScrollspy } from "bootstrap-vue-next";
  import { ref } from "vue";

  export default {
    name: "PageContents",
    props: {
      // Element holding the page headings. Both layouts wrap the page content
      // in a single <main>.
      content: {
        type: String,
        required: false,
        default: "main",
      },
      // Headings to track, queried within `content`. Page anchors sit on the
      // <h2>/<h3> elements rendered by SHeading.
      contentQuery: {
        type: String,
        required: false,
        default: "h2[id], h3[id]",
      },
      // Scroll container of the sidebar layout. The topbar layout has no
      // "#scrollbody", in which case useScrollspy falls back to the viewport.
      root: {
        type: String,
        required: false,
        default: "#scrollbody",
      },
    },
    setup(props) {
      // Template ref rather than an id: layouts render the table of contents
      // twice (a small-screen copy and a sticky sidebar copy), so each copy
      // needs to spy on itself without colliding on a shared id.
      const toc = ref(null);

      // useScrollspy resolves missing elements to undefined instead of
      // throwing, and no-ops where IntersectionObserver is unavailable, so a
      // layout without the expected containers degrades quietly.
      const { current, list } = useScrollspy(props.content, toc, {
        contentQuery: props.contentQuery,
        root: props.root,
      });

      return { toc, current, list };
    },
  };
</script>
