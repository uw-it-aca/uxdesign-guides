<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/navigation"
          >Navigation</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #head>
      <h1 class="fw-bold">{{ pageTitle }}</h1>
      <hr class="d-inline-block w-50" />
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Tabs Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum eos
        provident praesentium ipsum sed aperiam aliquam quibusdam voluptatem
        corrupti, reprehenderit illum. Nobis quia incidunt non officia nihil id
        perferendis molestiae?
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
      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/</a
        >
      </p>

      <h2>Standard (w/ variants)</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quidem
        sunt, voluptas iure laborum est nesciunt perspiciatis corporis, ducimus
        perferendis nihil unde illum asperiores doloribus vitae velit quod,
        voluptate aperiam?
      </p>

      <CodeBlock>
        <template #preview>
          <STabsList :tabs-id="'example2'">
            <STabsItem
              :tabs-id="'example2'"
              :panel-id="'first2'"
              active-tab="true"
            >
              First
            </STabsItem>
            <STabsItem :tabs-id="'example2'" :panel-id="'second2'">
              Second
            </STabsItem>
            <STabsItem :tabs-id="'example2'" :panel-id="'third2'">
              Third
            </STabsItem>
          </STabsList>

          <STabsDisplay :tabs-id="'example2'">
            <STabsPanel :panel-id="'first2'" :active-panel="true">
              <p>
                First... Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Voluptatum quaerat fuga ad quo facere, beatae odit at
                mollitia reiciendis harum nostrum dolorum eum dolor corporis
                doloremque architecto accusantium? Quibusdam, vitae?
              </p>
            </STabsPanel>
            <STabsPanel :panel-id="'second2'"
              ><p>
                Second... Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Tempore, provident quas molestias dicta exercitationem
                nihil odit. Itaque qui minima sequi, reprehenderit veritatis,
                cum perspiciatis ad neque architecto repellat consequuntur
                repudiandae!
              </p>
            </STabsPanel>
            <STabsPanel :panel-id="'third2'"
              ><p>
                Third... Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quidem quam, beatae perferendis dolore ratione doloremque,
                voluptates aut, ullam illum esse sequi blanditiis pariatur
                delectus saepe molestias necessitatibus cupiditate maxime
                voluptatem.
              </p></STabsPanel
            >
          </STabsDisplay>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;STabsList :tabs-id="'example'">
  &lt;template #items>
    &lt;STabsItem :tabs-id="'example'" :panel-id="'first'" :active-tab="true">
      First
    &lt;/STabsItem>
    &lt;STabsItem :tabs-id="'example'" :panel-id="'second'">
    Second
    &lt;/STabsItem>
    &lt;STabsItem :tabs-id="'example'" :panel-id="'third'">
    Third
    &lt;/STabsItem>
  &lt;/template>
&lt;/STabsList>

&lt;STabsDisplay :tabs-id="'example'"
  &lt;template #panels>
    &lt;STabsPanel :panel-id="'first'" :active-panel="true">
      first ...
    &lt;/STabsPanel>
    &lt;STabsPanel :panel-id="'second'">
      second ...
    &lt;/STabsPanel>
    &lt;STabsPanel :panel-id="'third'">
      third ...
    &lt;/STabsPanel>
  &lt;/template>
&lt;/STabsDisplay></code></pre>
        </template>
      </CodeBlock>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";
  import { STabsDisplay, STabsPanel, STabsList, STabsItem } from "solstice-vue";

  export default {
    name: "DocsPatternsTabs",
    components: {
      Layout,
      CodeBlock,
      BBreadcrumb,
      BBreadcrumbItem,
      STabsDisplay,
      STabsPanel,
      STabsList,
      STabsItem,
    },
    data() {
      return {
        pageTitle: "Tabs",
      };
    },
  };
</script>
