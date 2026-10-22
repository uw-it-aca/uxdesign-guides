<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Components are the re-usable user interface pieces. Components utilize
        combinations of elements and building blocks of the visual user
        interface design.
      </p>
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock name="Actions" link="/solstice/components/actions"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Text" link="/solstice/components/text"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Forms" link="/solstice/components/forms"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Surfaces" link="/solstice/components/surfaces"
            >aka content containers</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Layouts" link="/solstice/components/layouts"
            >The boilerplate is a critical layout foundation of our design
            system. It provides the structure for our visual components and
            overall user interface.</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Navigation"
            link="/solstice/components/navigation"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Messaging"
            link="/solstice/components/messaging"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Disclosures"
            link="/solstice/components/disclosures"
            >Interface changes (or progressively disclosed) based on a user
            action.</DescriptionBlock
          >
        </li>

        <li class="col-4">
          <DescriptionBlock name="Search" link="/solstice/components/search"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock
            name="Utilities"
            link="/solstice/components/utilities"
            >sdfgsdgsd</DescriptionBlock
          >
        </li>
        <li class="col-4">
          <DescriptionBlock name="Data Display" link="/solstice/components/data"
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
    name: "DocsPatternsIndex",
    components: {
      Layout,
      DescriptionBlock,
    },
    data() {
      return {
        pageTitle: "Components",
      };
    },
    methods: {},
  };
</script>
