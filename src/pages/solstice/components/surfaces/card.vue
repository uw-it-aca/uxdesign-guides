<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/surfaces"
          >Surfaces</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 80ch">
        Cards is a container of content... Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ea nemo nobis, eligendi sit ipsa mollitia
        necessitatibus possimus, veniam sapiente deleniti quo. Nemo error quos,
        eius facilis rem amet deserunt est!
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
      <div class="mb-5 grid">
        <div class="g-col-4">
          <h4>Elevated</h4>
          <BCard body-class="p-4" class="mb-3 border-0 shadow"
            >card 1 w/ shadow
          </BCard>
          <BCard body-class="p-4" class="mb-3 border-0 shadow"
            >card 2 w/ shadow</BCard
          >
        </div>

        <div class="g-col-4">
          <h4>Filled</h4>
          <BCard
            bg-variant="body-tertiary"
            body-class="p-4"
            class="mb-3 border-0"
          >
            body-tertiary
          </BCard>
          <BCard
            bg-variant="body-secondary"
            body-class="p-4"
            class="bg-opacity-50 mb-3 border-0"
          >
            body-secondary, bg-opacity-50
          </BCard>
          <BCard
            bg-variant="spirit-purple-subtle"
            body-class="p-4"
            class="bg-opacity-25 mb-3 border-0"
          >
            bg-spirit-purple-subtle, bg-opacity-25
          </BCard>

          <BCard
            bg-variant="husky-gold-subtle"
            body-class="p-4"
            class="bg-opacity-50 mb-3 border-0"
          >
            bg-husky-gold-subtle, bg-opacity-50
          </BCard>
        </div>
        <div class="g-col-4">
          <h4>Outline</h4>
          <BCard body-class="p-4" class="mb-3">default card border</BCard>
          <BCard body-class="p-4" class="border-secondary-subtle mb-3 border">
            border-secondary-subtle
          </BCard>
        </div>
      </div>

      <h2 id="anatomy">Anatomy</h2>
      <p>
        Card, card header, card body, card footer. Cards are raised off the
        surface and must be bordered and contain drop shadow.
      </p>

      <h2 id="variants">Variants</h2>
      <h3>Elevated</h3>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BCard class="rounded-3 shadow-sm"> body </BCard>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="card shadow-sm rounded-3">
  &lt;div class="card-body">
    body
  &lt;/div>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BCard class="shadow-sm rounded-3">
  body
&lt;/BCard>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h3>Filled</h3>
      <p>
        More details about <BLink to="/patterns/surface/panel">Panel</BLink> can
        be reviewed in the corresponding documentation.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BCard class="bg-body-tertiary rounded-3 mb-3" border-variant="0">
              body
            </BCard>
            <BCard class="bg-body-secondary rounded-3 mb-3" border-variant="0">
              body
            </BCard>
            <BCard
              class="bg-spirit-purple-subtle rounded-3 mb-3"
              border-variant="0"
            >
              body
            </BCard>
            <BCard
              class="bg-husky-gold-subtle rounded-3 mb-3"
              border-variant="0"
            >
              body
            </BCard>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="card border-0 bg-body-tertiary rounded-3">
  &lt;div class="card-body">
    body
  &lt;/div>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BCard class="bg-body-tertiary rounded-3" border-variant="0">
  body
&lt;/BCard>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2 id="options">Options</h2>
      <h3>Header</h3>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BCard class="rounded-3 shadow-sm" header-bg-variant="transparent">
              <template #header> header </template>
              body
            </BCard>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="card shadow-sm rounded-3">
  &lt;div class="bg-transparent card-header">
    header
  &lt;/div>
  &lt;div class="card-body">
    body
  &lt;/div>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BCard class="shadow-sm rounded-3" header-bg-variant="transparent">
  &lt;template #header>
    header
  &lt;/template>
  body
&lt;/BCard>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h3>Footer</h3>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BCard class="rounded-3 shadow-sm" header-bg-variant="transparent">
              body
              <template #footer> footer </template>
            </BCard>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="card">
  &lt;div class="bg-transparent card-header">
    header
  &lt;/div>
  &lt;div class="card-body">
    body
  &lt;/div>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BCard header-bg-variant="transparent">
  asdfasdfasdf
  &lt;template #footer>
    footer
  &lt;/template>
&lt;/BCard>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2 id="usage">Usage</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="access">Accessibility</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="implement">Implementation</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2>Body</h2>
      <CodeBlock>
        <template #preview>
          <BCard style="max-width: 600px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </BCard>
        </template>
      </CodeBlock>

      <h2>Body + Header</h2>
      <CodeBlock>
        <template #preview>
          <BCard
            class="rounded-3 shadow-sm"
            header-bg-variant="transparent"
            style="max-width: 600px"
          >
            <template #header>
              <h6>Header</h6>
            </template>
            card body
          </BCard>
        </template>
      </CodeBlock>

      <h2>Body + Header Action</h2>
      <CodeBlock>
        <template #preview>
          <BCard
            class="rounded-3 shadow-sm"
            header-bg-variant="transparent"
            header-class="d-flex justify-content-between"
            style="max-width: 600px"
          >
            <template #header>
              <h6>Heading</h6>
              <BButton variant="primary" size="sm">Action</BButton>
            </template>
            card body
          </BCard>
        </template>
      </CodeBlock>
      <p>this is a card w/ html as heading action</p>

      <CodeBlock>
        <template #preview>
          <BCard
            class="rounded-3 shadow-sm"
            header-bg-variant="transparent"
            header-class="d-flex justify-content-between"
            style="max-width: 600px"
          >
            <template #header>
              <h6>Heading</h6>
              <div class="input-group w-50">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  placeholder="Search all students..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  id="button-addon2"
                  class="btn btn-sm btn-primary"
                  type="button"
                >
                  Search
                </button>
              </div>
            </template>
            card body
          </BCard>
        </template>
      </CodeBlock>

      <h2>Body + Heading Tabs</h2>
      <p>asdkfjalskdj</p>
      <CodeBlock>
        <template #preview>
          <BCard
            class="rounded-3 shadow-sm"
            header-bg-variant="transparent"
            header-class="d-flex justify-content-between"
            style="max-width: 600px"
          >
            <template #header>
              <h6>Heading</h6>
              <axdd-tabs-list
                :tabs-id="'example'"
                :variant="'pills'"
                class="small"
              >
                <template #items>
                  <axdd-tabs-item
                    :tabs-id="'example'"
                    :panel-id="'first'"
                    :active-tab="true"
                    :variant="'pills'"
                  >
                    First
                  </axdd-tabs-item>
                  <axdd-tabs-item
                    :tabs-id="'example'"
                    :panel-id="'second'"
                    :variant="'pills'"
                  >
                    Second
                  </axdd-tabs-item>
                  <axdd-tabs-item
                    :tabs-id="'example'"
                    :panel-id="'third'"
                    :variant="'pills'"
                  >
                    Third
                  </axdd-tabs-item>
                </template>
              </axdd-tabs-list>
            </template>
            <axdd-tabs-display :tabs-id="'example'">
              <template #panels>
                <axdd-tabs-panel :panel-id="'first'" :active-panel="true">
                  first ...
                </axdd-tabs-panel>
                <axdd-tabs-panel :panel-id="'second'">
                  second ...
                </axdd-tabs-panel>
                <axdd-tabs-panel :panel-id="'third'">
                  third ...
                </axdd-tabs-panel>
              </template>
            </axdd-tabs-display>
          </BCard>
        </template>
      </CodeBlock>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import {
    BBreadcrumb,
    BBreadcrumbItem,
    BButton,
    BCard,
    BLink,
  } from "bootstrap-vue-next";

  export default {
    name: "DocsPatternsCard",
    components: {
      Layout,
      CodeBlock,
      BBreadcrumb,
      BBreadcrumbItem,
      BCard,
      BButton,
      BLink,
    },
    data() {
      return {
        pageTitle: "Card",
      };
    },
  };
</script>
