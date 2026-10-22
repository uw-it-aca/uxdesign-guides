<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/content">Content</BBreadcrumbItem>
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
    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#grammar">Grammar</PageContentsItem>
        <PageContentsItem anchor="#mechanics">Mechanics</PageContentsItem>
      </PageContents>
    </template>
    <template #content>
      <SHeading level="2" id="grammar">Grammar</SHeading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia
        dolorem? Perspiciatis excepturi cum aliquid praesentium aspernatur,
        accusantium assumenda, odio neque nobis quo inventore dolorum,
        architecto velit magni rem odit?
      </p>

      <SHeading level="2" id="mechanics">Mechanics</SHeading>
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
  import PageContents from "@/components/PageContents.vue";
  import PageContentsItem from "@/components/PageContentsItem.vue";
  import { SHeading } from "solstice-vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsPatternsMessaging",
    components: {
      Layout,
      PageContents,
      PageContentsItem,
      SHeading,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    data() {
      return {
        pageTitle: "Grammar & Mechanics",
      };
    },
  };
</script>
