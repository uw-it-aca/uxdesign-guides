<template>
  <li class="d-flex align-items-start mb-md-2 mb-5">
    <div v-if="variant == 'do'" class="">
      <i class="bi bi-check-circle-fill text-success ms-2 me-3"></i>
    </div>
    <div v-else>
      <i class="bi bi-x-circle-fill text-danger ms-2 me-3"></i>
    </div>
    <div class="d-flex flex-column flex-md-row w-100">
      <template v-if="$slots['description']">
        <div class="mb-1 w-100">
          <slot name="description"></slot>
        </div>
      </template>
      <template v-if="$slots['preview']">
        <div class="position-relative w-100">
          <span class="visually-hidden">Example:</span>
          <div class="preview px-md-5 ps-0">
            <slot name="preview"></slot>
          </div>
        </div>
      </template>
    </div>
  </li>
</template>

<script>
  import Prism from "prismjs";
  import "prismjs/components/prism-javascript";
  import "prismjs/components/prism-json";
  import "prismjs/components/prism-markup-templating";
  import "prismjs/components/prism-scss";
  import "prismjs/themes/prism.css";

  export default {
    props: {
      variant: {
        type: String,
        default: "do",
        required: false,
      },
    },
    data() {
      return {};
    },
    mounted() {
      Prism.highlightAll();
    },
  };
</script>

<style lang="css">
  /* global styleguide */

  .codeblock pre {
    background: transparent !important;
    margin: 0 !important;
    color: inherit !important;
  }

  .codeblock code {
    color: inherit !important;
    text-shadow: none !important;
  }

  /* reset container padding for render display */
  .preview .container-xl {
    padding-left: 12px;
    padding-right: 12px;
  }

  /* reset vh-100 to something more manageable for display */
  .preview .vh-100 {
    min-height: 30vh !important;
    max-height: 40vh !important;
  }
</style>
