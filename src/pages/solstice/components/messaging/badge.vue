<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/messaging"
          >Messaging</BBreadcrumbItem
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga
        corporis totam eligendi molestiae ex aperiam soluta, consectetur
        accusamus accusantium officia praesentium, magni numquam sunt minus
        architecto libero enim tempore!
      </p>

      <div class="mb-5 grid">
        <div class="g-col-3">
          <p>
            Semantic palette:
            <br />
            Messaging / Workflow States
          </p>
          <ul class="list-unstyled">
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="success-subtle"
                text-variant="success-emphasis"
                class="fw-semibold me-1"
              >
                success-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="success"
                text-variant="white"
                class="fw-semibold"
              >
                success
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="warning-subtle"
                text-variant="warning-emphasis"
                class="fw-semibold me-1"
              >
                warning-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="warning"
                text-variant="black"
                class="fw-semibold"
              >
                warning
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="danger-subtle"
                text-variant="danger-emphasis"
                class="fw-semibold me-1"
              >
                danger-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="danger"
                text-variant="white"
                class="fw-semibold"
              >
                danger
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="info-subtle"
                text-variant="info-emphasis"
                class="fw-semibold me-1"
              >
                info-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="info"
                text-variant="black"
                class="fw-semibold"
              >
                info
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="secondary-subtle"
                text-variant="secondary-emphasis"
                class="fw-semibold me-1"
              >
                secondary-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="secondary"
                text-variant="white"
                class="fw-semibold"
              >
                secondary
              </BBadge>
            </li>
          </ul>
          <p>subtle set at swatch -100 (default)</p>
        </div>
        <div class="g-col-3">
          <p>Academic Terms</p>
          <ul class="list-unstyled">
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="autumn-subtle"
                text-variant="autumn-emphasis"
                class="fw-semibold me-1"
              >
                autumn-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="autumn"
                text-variant="black"
                class="fw-semibold"
              >
                autumn
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="winter-subtle"
                text-variant="winter-emphasis"
                class="fw-semibold me-1"
              >
                winter-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="winter"
                text-variant="black"
                class="fw-semibold"
              >
                winter
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="spring-subtle"
                text-variant="spring-emphasis"
                class="fw-semibold me-1"
              >
                spring-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="spring"
                text-variant="black"
                class="fw-semibold"
              >
                spring
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="summer-subtle"
                text-variant="summer-emphasis"
                class="fw-semibold me-1"
              >
                summer-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="summer"
                text-variant="black"
                class="fw-semibold"
              >
                summer
              </BBadge>
            </li>
          </ul>
          <p>subtle set at swatch -200 (testing)</p>
        </div>
        <div class="g-col-3">
          <p>Decorative</p>
          <ul class="list-unstyled">
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-violet-subtle"
                text-variant="deco-violet-emphasis"
                class="fw-semibold me-1"
              >
                deco-violet-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="deco-violet"
                text-variant="white"
                class="fw-semibold"
              >
                deco-violet
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-turquoise-subtle"
                text-variant="deco-turquoise-emphasis"
                class="fw-semibold me-1"
              >
                deco-turquoise-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="deco-turquoise"
                text-variant="white"
                class="fw-semibold"
              >
                deco-turquoise
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-burnt-subtle"
                text-variant="deco-burnt-emphasis"
                class="fw-semibold me-1"
              >
                deco-burnt-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="deco-burnt"
                text-variant="white"
                class="fw-semibold"
              >
                deco-burnt
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-olive-subtle"
                text-variant="deco-olive-emphasis"
                class="fw-semibold me-1"
              >
                deco-olive-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="deco-olive"
                text-variant="white"
                class="fw-semibold"
              >
                deco-olive
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-rose-subtle"
                text-variant="deco-rose-emphasis"
                class="fw-semibold me-1"
              >
                deco-rose-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="deco-rose"
                text-variant="white"
                class="fw-semibold"
              >
                deco-rose
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-lavender-subtle"
                text-variant="deco-lavender-emphasis"
                class="fw-semibold me-1"
              >
                deco-lavender-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="deco-lavender"
                text-variant="white"
                class="fw-semibold"
              >
                deco-lavender
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-russet-subtle"
                text-variant="deco-russet-emphasis"
                class="fw-semibold me-1"
              >
                deco-russet-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="deco-russet"
                text-variant="white"
                class="fw-semibold"
              >
                deco-russet
              </BBadge>
            </li>
            <li class="mb-1">
              <BBadge
                pill
                bg-variant="deco-ultra-subtle"
                text-variant="deco-ultra-emphasis"
                class="fw-semibold me-1"
              >
                deco-ultra-subtle
              </BBadge>
              <BBadge
                pill
                bg-variant="deco-ultra"
                text-variant="white"
                class="fw-semibold"
              >
                deco-ultra
              </BBadge>
            </li>
          </ul>
          <p>subtle set at swatch -100 (default)</p>
        </div>
      </div>

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
  import { BBadge, BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";
  // import CodeBlock from "@/components/CodeBlock.vue";
  // import UsageBlock from "@/components/UsageBlock.vue";
  import PageContents from "@/components/PageContents.vue";
  import Layout from "@/layouts/solstice.vue";

  export default {
    name: "DocsPatternsBadge" /* example: Docs--Folder--ComponentName */,
    components: {
      Layout,
      /* CodeBlock, UsageBlock, */ PageContents,
      BBreadcrumb,
      BBreadcrumbItem,
      BBadge,
    },
    inject: ["mq"],
    data() {
      return {
        pageTitle: "Badge",
      };
    },
  };
</script>
