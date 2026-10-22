<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      This is a directory index page... Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aliquid maiores quo consequatur, minima minus suscipit
      doloribus quos dicta excepturi porro obcaecati, dignissimos rerum
      consectetur ea dolores vero sint. Porro, quaerat.
    </template>
    <template #content>
      <h2 id="heading1">Heading1</h2>
      <p>Go to <a href="/_templates/component">Component</a></p>

      <h2 id="heading2">Heading2</h2>
      <p>Go to <a href="/_templates/component">Component</a></p>

      <h2 id="heading3">Heading3</h2>
      <p>Go to <a href="/_templates/component">Component</a></p>

      <h2 id="heading4">Heading3</h2>
      <p>Go to <a href="/_templates/component">Component</a></p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";

  export default {
    name: "DocsTemplatesIndex" /* TODO: Docs_Folder_Index */,
    inject: ["mq"],
    components: { Layout },
    data() {
      return {
        pageTitle: "Page Title" /* TODO: asdlkfjasf */,
      };
    },
  };
</script>
