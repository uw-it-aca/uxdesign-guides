<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      This is a directory index page... Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Aliquid maiores quo consequatur, minima minus suscipit
      doloribus quos dicta excepturi porro obcaecati, dignissimos rerum
      consectetur ea dolores vero sint. Porro, quaerat.
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Section'"
            :link="'/_templates/_section'"
            class="bg-light"
            >The layout is a critical foundation of our design system. It
            provides the structure for our visual components and overall user
            interface.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Section'"
            :link="'/_templates/_section'"
            class="bg-light"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Section'"
            :link="'/patterns/surface'"
            class="bg-light"
            >aka content containers</DescriptionBlock
          >
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import DescriptionBlock from "@/components/DescriptionBlock.vue";

  export default {
    name: "DocsTemplatesIndex" /* TODO: Docs_Folder_Index */,
    inject: ["mq"],
    components: { Layout, DescriptionBlock },
    data() {
      return {
        pageTitle: "Topic Page" /* TODO: asdlkfjasf */,
      };
    },
  };
</script>
