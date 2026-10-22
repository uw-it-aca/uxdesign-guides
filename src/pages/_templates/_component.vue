<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/_templates">Templates</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ad,
      dolores repudiandae natus dolorem recusandae! Incidunt consequatur tenetur
      ad totam, placeat ipsa explicabo, eaque id blanditiis libero culpa veniam
      aliquam!
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#anatomy"
                class="text-muted link-underline link-underline-opacity-0 d-block bg-body-tertiary-hover rounded px-2 py-1"
                >Anatomy</a
              >
            </li>
            <li>
              <a
                href="#variants"
                class="text-muted link-underline link-underline-opacity-0 d-block bg-body-tertiary-hover rounded px-2 py-1"
                >Variants</a
              >
            </li>
            <li>
              <a
                href="#options"
                class="text-muted link-underline link-underline-opacity-0 d-block bg-body-tertiary-hover rounded px-2 py-1"
                >Options</a
              >
            </li>
            <li>
              <a
                href="#usage"
                class="text-muted link-underline link-underline-opacity-0 d-block bg-body-tertiary-hover rounded px-2 py-1"
                >Usage</a
              >
            </li>
            <li>
              <a
                href="#accessibility"
                class="text-muted link-underline link-underline-opacity-0 d-block bg-body-tertiary-hover rounded px-2 py-1"
                >Accessibility</a
              >
            </li>
            <li>
              <a
                href="#implementation"
                class="text-muted link-underline link-underline-opacity-0 d-block bg-body-tertiary-hover rounded px-2 py-1"
                >Implementation</a
              >
            </li>
          </ul>
        </nav>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga
        corporis totam eligendi molestiae ex aperiam soluta, consectetur
        accusamus accusantium officia praesentium, magni numquam sunt minus
        architecto libero enim tempore!
      </p>

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
  import Layout from "@/layouts/default.vue";
  // import CodeBlock from "@/components/CodeBlock.vue";
  // import UsageBlock from "@/components/UsageBlock.vue";
  import PageContents from "@/components/PageContents.vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsTemplatesComponentName" /* example: Docs--Folder--ComponentName */,
    components: {
      Layout,
      /* CodeBlock, UsageBlock, */ PageContents,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    inject: ["mq"],
    data() {
      return {
        pageTitle: "Component Name",
      };
    },
  };
</script>
