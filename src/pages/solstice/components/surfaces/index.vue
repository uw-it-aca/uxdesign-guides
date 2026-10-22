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
          <DescriptionBlock
            name="Card"
            link="/solstice/components/surfaces/card"
            :accessibility="true"
            version="1.0.5"
            >Cards have a raised profile and has shadow. Meant to visually
            display prominence over flat items.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Tile"
            link="/solstice/components/surfaces/tile"
            :accessibility="true"
            version="1.1.0"
            >Tiles remain on the flat surface of the page. Bounding container
            can have background color applied to show slight prominence. Still
            not a card.</DescriptionBlock
          >
        </li>
      </ul>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import DescriptionBlock from "@/components/DescriptionBlock.vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsPatternsContainer",
    components: { Layout, DescriptionBlock, BBreadcrumb, BBreadcrumbItem },
    data() {
      return {
        pageTitle: "Surfaces" /* TODO: asdlkfjasf */,
      };
    },
  };
</script>
