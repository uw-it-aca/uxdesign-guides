<template>
  <BApp>
    <RouterView />
  </BApp>
</template>

<script>
  import { BApp } from "bootstrap-vue-next";
  export default {
    name: "App",
    components: { BApp },
  };
</script>
