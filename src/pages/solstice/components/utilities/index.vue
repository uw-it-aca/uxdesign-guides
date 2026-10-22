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
        Utility components... Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Iusto tempore omnis esse quasi assumenda quae
        voluptatem, dolores perspiciatis facilis. Iste cupiditate similique quis
        nam amet officiis? Accusantium ducimus vel sit!
      </p>
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            name="Profile"
            link="/solstice/components/utilities/profile"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="User"
            link="/solstice/components/utilities/user"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Color Mode"
            link="/solstice/components/utilities/color-mode"
          ></DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Chatbot"
            link="/solstice/components/utilities/chatbot"
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
    name: "DocsPatternsUtility",
    components: {
      Layout,
      DescriptionBlock,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    data() {
      return {
        pageTitle: "Utilities",
      };
    },
  };
</script>
