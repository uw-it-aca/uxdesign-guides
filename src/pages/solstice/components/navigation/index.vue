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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        consequuntur tempore amet consectetur minus autem corporis nostrum sit
        sapiente cumque. Rem nisi quidem aspernatur doloremque id non natus
        voluptas debitis!
      </p>
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            name="Tabs"
            link="/solstice/components/navigation/tabs"
            :accessibility="true"
            version="1.0.5"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Menu"
            link="/solstice/components/navigation/menu"
            :accessibility="true"
            version="1.0.7"
          ></DescriptionBlock>
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
    name: "DocsPatternsNavigation",
    components: { Layout, DescriptionBlock, BBreadcrumb, BBreadcrumbItem },
    data() {
      return {
        pageTitle: "Navigation" /* TODO: Set a page title */,
      };
    },
  };
</script>
