// HelloWorld.vue

<template>
  <div
    class="bg-warning-subtle border-start border-warning text-warning-emphasis my-4 border-4 p-4"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "PageCallout",
    data() {
      return {};
    },
    methods: {},
  };
</script>
