<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/navigation"
          >Navigation</BBreadcrumbItem
        >
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
    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#anatomy">Anatomy</PageContentsItem>
        <PageContentsItem anchor="#variants">Variants</PageContentsItem>
        <PageContentsItem anchor="#options">Options</PageContentsItem>
        <PageContentsItem anchor="#usage">Usage</PageContentsItem>
        <PageContentsItem anchor="#access">Accessibility</PageContentsItem>
        <PageContentsItem anchor="#implement">Implementation</PageContentsItem>
      </PageContents>
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia
        dolorem? Perspiciatis excepturi cum aliquid praesentium aspernatur,
        accusantium assumenda, odio neque nobis quo inventore dolorum,
        architecto velit magni rem odit?
      </p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsPatternsMessaging",
    components: { Layout, BBreadcrumb, BBreadcrumbItem },
    data() {
      return {
        pageTitle: "Menu",
      };
    },
  };
</script>
