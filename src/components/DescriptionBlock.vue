<template>
  <div
    class="bg-body-tertiary d-flex flex-column flex-fill rounded-3 position-relative mb-4 border-0 p-4"
  >
    <h2>{{ name }}</h2>
    <div class="flex-fill" style="height: 100px">
      <slot>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, sed
        voluptas eligendi corporis.
      </slot>
    </div>
    <div class="text-end">
      <span v-if="link == '#'" class="text-muted">Coming soon!</span>
      <BLink v-else :to="link">View {{ name }}</BLink>
    </div>
    <div class="position-absolute end-0 top-0 m-2">
      <span v-if="accessibility" class="badge bg-beige text-dark me-1"
        >a11y</span
      >
      <span v-if="version" class="badge bg-purple"> {{ version }}</span>
    </div>
  </div>
</template>

<script>
  import { BLink } from "bootstrap-vue-next";

  export default {
    components: {
      BLink,
    },
    props: {
      name: {
        type: String,
        default: "Comp name",
      },
      version: {
        type: String,
        default: "1.0",
      },
      link: {
        type: String,
        default: "#",
      },
      accessibility: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {};
    },
  };
</script>
