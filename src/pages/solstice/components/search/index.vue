<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        This is a directory index page... Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aliquid maiores quo consequatur, minima minus suscipit
        doloribus quos dicta excepturi porro obcaecati, dignissimos rerum
        consectetur ea dolores vero sint. Porro, quaerat.
      </p>
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock name="Filter" link="/s/components/search/filter"
            >Component documentation</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Input"
            link="/solstice/components/search/input"
            >Component documentation</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Modal"
            link="/solstice/components/search/modal"
            >Component documentation</DescriptionBlock
          >
        </li>
      </ul>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import DescriptionBlock from "@/components/DescriptionBlock.vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsComponentsTextIndex" /* TODO: Docs_Folder_Index */,
    components: { Layout, DescriptionBlock, BBreadcrumb, BBreadcrumbItem },
    data() {
      return {
        pageTitle: "Search & Filter" /* TODO: asdlkfjasf */,
      };
    },
  };
</script>
