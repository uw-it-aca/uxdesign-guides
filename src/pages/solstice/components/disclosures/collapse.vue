<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/disclosures"
          >Disclosures</BBreadcrumbItem
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
    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#anatomy">Anatomy</PageContentsItem>
        <PageContentsItem anchor="#variants">Variants</PageContentsItem>
        <PageContentsItem anchor="#options">Options</PageContentsItem>
        <PageContentsItem anchor="#usage">Usage</PageContentsItem>
        <PageContentsItem anchor="#access">Accessibility</PageContentsItem>
        <PageContentsItem anchor="#implemt">Implementation</PageContentsItem>
      </PageContents>
    </template>
    <template #content>
      <h2 id="anatomy">Anatomy</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, sit, quo
        ab pariatur, recusandae obcaecati necessitatibus doloribus ad a dolor
        minus saepe? Quaerat cupiditate ipsa ut nulla nostrum ex aut!
      </p>
      <h2 id="variants">Variants</h2>

      <h3>Collapse Link (inline)</h3>
      <CodeBlock>
        <template #preview>
          <p><BLink v-b-toggle.collapse-1 href="#">Show more...</BLink></p>

          <BCollapse id="collapse-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium adipisci expedita tenetur officiis voluptate, laborum
              error cum soluta. Beatae veniam commodi voluptas saepe facere a
              reiciendis, explicabo minima nobis? Fugit.
            </p>
          </BCollapse>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BLink v-b-toggle.collapse-1 href="#">Show more...&lt;/BLink>

&lt;BCollapse id="collapse-1">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci expedita tenetur officiis voluptate, laborum
  error cum soluta. Beatae veniam commodi voluptas saepe facere a reiciendis, explicabo minima nobis? Fugit.
&lt;/BCollapse>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Collapse Button</h3>
      <CodeBlock>
        <template #preview>
          <BButton v-b-toggle.collapse-2 variant="primary"
            >Toggle Collapse</BButton
          >
          <BCollapse id="collapse-2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium adipisci expedita tenetur officiis voluptate, laborum
              error cum soluta. Beatae veniam commodi voluptas saepe facere a
              reiciendis, explicabo minima nobis? Fugit.
            </p>
          </BCollapse>
        </template>
      </CodeBlock>

      <h2 id="options">Options</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quibusdam
        doloremque quaerat nulla enim, magni ut pariatur est dolorum ullam sint
        rerum odio hic perspiciatis, commodi adipisci, vero sapiente impedit?
      </p>
      <h2 id="usage">Usage</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="implementation">Implementation</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  // import UsageBlock from "@/components/UsageBlock.vue";
  import PageContents from "@/components/PageContents.vue";
  import {
    BBreadcrumb,
    BBreadcrumbItem,
    BButton,
    BCollapse,
    BLink,
  } from "bootstrap-vue-next";

  export default {
    name: "DocsTemplatesComponentName" /* example: Docs--Folder--ComponentName */,
    inject: ["mq"],
    components: {
      Layout,
      CodeBlock,
      /* UsageBlock, */
      PageContents,
      BBreadcrumb,
      BBreadcrumbItem,
      BButton,
      BCollapse,
      BLink,
    },
    data() {
      return {
        pageTitle: "Collapse",
      };
    },
  };
</script>
