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
        This is a pattern page... Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Aliquid maiores quo consequatur, minima minus suscipit
        doloribus quos dicta excepturi porro obcaecati, dignissimos rerum
        consectetur ea dolores vero sint. Porro, quaerat.
      </p>
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            name="Collapse"
            link="/solstice/components/disclosures/collapse"
            :accessibility="true"
            version="1.0.x"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Accordian"
            link="/solstice/components/disclosures/accordian"
            :accessibility="true"
            version="1.0.x"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Modal"
            link="/solstice/components/disclosures/modal"
            :accessibility="true"
            version="1.0.x"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Offcanvas"
            link="/solstice/components/disclosures/offcanvas"
            :accessibility="true"
            version="1.0.x"
            >Component description... Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</DescriptionBlock
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
    name: "DocsPatternsDisclosure" /* TODO: replace 'PatternName' */,
    inject: ["mq"],
    components: { Layout, DescriptionBlock, BBreadcrumb, BBreadcrumbItem },
    data() {
      return {
        pageTitle: "Disclosures" /* TODO: Set a page title */,
      };
    },
  };
</script>
