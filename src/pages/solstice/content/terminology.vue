<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/content">Content</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #content>
      <h1>{{ pageTitle }}</h1>

      <p class="col-md-8 lead text-muted p-0">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        consequuntur tempore amet consectetur minus autem corporis nostrum sit
        sapiente cumque. Rem nisi quidem aspernatur doloremque id non natus
        voluptas debitis!
      </p>

      <hr class="d-inline-block mb-5 w-25" />

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
        pageTitle: "Terminology",
      };
    },
  };
</script>
