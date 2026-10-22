<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/foundations"
          >Foundations</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ad,
        dolores repudiandae natus dolorem recusandae! Incidunt consequatur
        tenetur ad totam, placeat ipsa explicabo, eaque id blanditiis libero
        culpa veniam aliquam!
      </p>
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto impedit,
        tempora nemo molestias repellendus nesciunt! Amet illum facere
        consectetur molestiae ad perspiciatis! Ratione voluptates et esse
        consequuntur distinctio ipsam nam.
      </p>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  // import CodeBlock from "@/components/CodeBlock.vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsFoundationsIcons",
    components: { Layout, BBreadcrumb, BBreadcrumbItem },
    data() {
      return {
        pageTitle: "Icons",
      };
    },
  };
</script>
