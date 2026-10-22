<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
        accusamus vel doloremque odio ut sapiente quasi facilis veniam natus
        eius expedita rem aspernatur itaque aperiam nemo quo sit, placeat
        quisquam?
      </p>
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Solstice 101'"
            :link="'/solstice/solstice-101'"
            class="bg-light"
            >The layout is a critical foundation of our design system. It
            provides the structure for our visual components and overall user
            interface.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Design Principles'"
            :link="'/solstice/design-principles'"
            class="bg-light"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Developer Guide'"
            :link="'/solstice/developer-guide'"
            class="bg-light"
            >sdfgsdgsd</DescriptionBlock
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

  export default {
    name: "DocsDevelopersIndex",
    components: { Layout, DescriptionBlock },
    data() {
      return {
        pageTitle: "Getting Started",
      };
    },
  };
</script>
