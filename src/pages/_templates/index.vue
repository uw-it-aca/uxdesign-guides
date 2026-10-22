<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/components">Components</BBreadcrumbItem>
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
          <DescriptionBlock name="Page" link="/_templates/_guide"
            >The layout is a critical foundation of our design system. It
            provides the structure for our visual components and overall user
            interface.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Topic" link="/_templates/_topic"
            >Topic pages contain collections of Sections</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Section" link="/_templates/_section"
            >Section pages contains collections of Components</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Component" link="/_templates/_component"
            >Component documentation</DescriptionBlock
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
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsTemplatesIndex" /* TODO: Docs_Folder_Index */,
    components: { Layout, DescriptionBlock, BBreadcrumb, BBreadcrumbItem },
    data() {
      return {
        pageTitle: "Templates" /* TODO: asdlkfjasf */,
      };
    },
  };
</script>
