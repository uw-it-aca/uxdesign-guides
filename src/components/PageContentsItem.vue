<template>
  <li class="mb-1">
    <a :href="anchor"><slot></slot></a>
  </li>
</template>

<script>
  export default {
    props: {
      anchor: {
        type: String,
        required: true,
      },
    },
    data() {
      return {};
    },
  };
</script>
