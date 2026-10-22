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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto tempore
        omnis esse quasi assumenda quae voluptatem, dolores perspiciatis
        facilis. Iste cupiditate similique quis nam amet officiis? Accusantium
        ducimus vel sit!
      </p>
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            name="Alert"
            link="/solstice/components/messaging/alert"
            :accessibility="true"
            version="1.0.x"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Toast"
            link="/solstice/components/messaging/toast"
            :accessibility="true"
            version="1.0.x"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Banner"
            link="/solstice/components/messaging/banner"
            :accessibility="true"
            version="1.0.x"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Badge"
            link="/solstice/components/messaging/badge"
            :accessibility="true"
            version="1.0.x"
            >aksdfjaasdf aka lightbox</DescriptionBlock
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
    name: "DocsPatternsLayouts",
    components: {
      Layout,
      DescriptionBlock,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    data() {
      return {
        pageTitle: "Messaging",
      };
    },
  };
</script>
