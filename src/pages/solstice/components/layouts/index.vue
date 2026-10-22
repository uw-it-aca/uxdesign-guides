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
        The layout is a critical foundation of our design system. It provides
        the structure for our visual components and overall user interface.
      </p>
    </template>

    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            name="Topbar"
            link="/solstice/components/layouts/topbar"
            :accessibility="true"
            version="1.0.5"
            >Topbar is takes heavy influence from MyUW's currently layout. It
            has a header-based design meant to focus the user on the contents
            below.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Sidebar"
            link="/solstice/components/layouts/sidebar"
            :accessibility="true"
            version="1.0.5"
            >Sidebar is a side navigtion based layout intended to support
            different menu navigation structures. The content is can be fixed or
            fluid.
          </DescriptionBlock>
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
    name: "DocsLayout",
    components: {
      Layout,
      DescriptionBlock,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    data() {
      return {
        pageTitle: "Layouts",
      };
    },
  };
</script>
