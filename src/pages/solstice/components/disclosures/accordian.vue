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
      <h2>Accordion</h2>
      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/accordion/"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/patterns/accordion/</a
        >
      </p>

      <CodeBlock>
        <template #preview>
          <axdd-disclosure-block
            :block-id="'blah1'"
            :block-title="'Heading only'"
            class="border-gray border"
          >
            <template #body>
              <div class="mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium explicabo veritatis harum ab eum quos facilis nihil
                libero ratione voluptate a magni voluptatem deleniti,
                consequatur rerum minus. Dolore, reprehenderit dolor?
              </div>
            </template>
          </axdd-disclosure-block>
          <axdd-disclosure-block
            :block-id="'blah2'"
            :block-title="'Heading with content'"
            class="bg-gray text-dark"
          >
            <template #header>this is heading content</template>
            <template #body>
              <div class="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Necessitatibus sapiente reprehenderit, quos ex id magnam
                molestiae veniam commodi. Laborum, eos! Voluptatem, deleniti
                velit temporibus optio libero placeat quae architecto ipsam?
              </div>
            </template>
          </axdd-disclosure-block>
          <axdd-disclosure-block
            :block-id="'blah3'"
            :block-title="'Complete Example'"
            class="bg-purple text-white"
          >
            <template #header>
              <div class="row">
                <div class="col-7">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="City"
                    aria-label="City"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="State"
                    aria-label="State"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Zip"
                    aria-label="Zip"
                  />
                </div>
              </div>
            </template>
            <template #body>
              <div class="mt-3 text-white">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </template>
          </axdd-disclosure-block>
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
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsTemplatesComponentName" /* example: Docs--Folder--ComponentName */,
    inject: ["mq"],
    components: {
      Layout,
      CodeBlock,
      /* UsageBlock, */ PageContents,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    data() {
      return {
        pageTitle: "Accordian",
      };
    },
  };
</script>
