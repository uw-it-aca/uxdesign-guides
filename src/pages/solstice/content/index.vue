<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi
      quaerat, molestiae vero doloribus asperiores pariatur fugit eligendi nam
      ratione, quos dolorum. Eaque atque quas, laboriosam distinctio fugiat
      autem molestias?
    </template>
    <template #content>
      <ul class="row list-unstyled">
        <li class="col-4">
          <DescriptionBlock
            :name="'Voice &amp; Tone'"
            :link="'/solstice/content/voice-tone'"
            class="bg-light"
          >
            The layout is a critical foundation of our design system. It
            provides the structure for our visual components and overall user
            interface.
          </DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Grammar &amp; Mechangics'"
            :link="'/solstice/content/grammar-mechanics'"
            class="bg-light"
          >
            sdfgsdgsd
          </DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Language &amp; Inclusivity'"
            :link="'/solstice/content/language-inclusivity'"
            class="bg-light"
          >
            sdfgsdgsd
          </DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Terminology'"
            :link="'solstice/content/terminology'"
            class="bg-light"
          >
            sdfgsdgsd
          </DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Labels'"
            :link="'/solstice/content/labels'"
            class="bg-light"
          >
            sdfgsdgsd
          </DescriptionBlock>
        </li>
        <li class="col-4">
          <DescriptionBlock
            :name="'Writing for Errors'"
            :link="'/solstice/content/writing-errors'"
            class="bg-light"
          >
            sdfgsdgsd
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

  export default {
    name: "DocsContentIndex",
    components: { Layout, DescriptionBlock },
    data() {
      return {
        pageTitle: "Content",
      };
    },
  };
</script>
