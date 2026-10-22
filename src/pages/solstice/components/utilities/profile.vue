<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/utilities"
          >Utilities</BBreadcrumbItem
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
      <h2>Standard</h2>
      <CodeBlock>
        <template #preview>
          <div class="bg-dark-purple small w-50 px-3 py-1">
            <SProfile :user-netid="'javerage'" :signout-url="'/signout/url'">
            </SProfile>
          </div>
        </template>
      </CodeBlock>

      <h3>w/ userOverride prop</h3>
      <CodeBlock>
        <template #preview>
          <div class="bg-dark-purple small w-50 px-3 py-1">
            <SProfile :user-netid="'javerage'" :user-override="'jbothell'">
              <button class="btn btn-link btn-sm text-danger m-0 border-0 p-0">
                clear action
              </button>
            </SProfile>
          </div>
        </template>
      </CodeBlock>

      <h2>Flyout</h2>

      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/</a
        >
      </p>

      <CodeBlock>
        <template #preview>
          <div class="bg-dark-purple small w-50 px-3 py-1">
            <SProfile
              :variant="'flyout'"
              :user-netid="'javerage'"
              :user-official-name="'John C. Average'"
              :user-preferred-name="'John Average'"
              :user-pronouns="'he/him'"
              :profile-url="'/profile'"
              :signout-url="'/signout/url'"
            >
            </SProfile>
          </div>
        </template>
      </CodeBlock>

      <h3>w/ userOverride prop</h3>
      <CodeBlock>
        <template #preview>
          <div class="bg-dark-purple small w-50 px-3 py-1">
            <SProfile
              :variant="'flyout'"
              :user-netid="'javerage'"
              :user-override="'jbothell'"
              :user-official-name="'John B. Bothell'"
              :user-preferred-name="'John Bothell'"
              :user-pronouns="'he/him'"
              :profile-url="'/profile'"
            >
              <button class="btn btn-link btn-sm text-danger m-0 border-0 p-0">
                clear action
              </button>
            </SProfile>
          </div>
        </template>
      </CodeBlock>
    </template>
    <template #author>Your Name</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import { SProfile } from "solstice-vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsPatternsTabs",
    components: {
      Layout,
      CodeBlock,
      SProfile,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    data() {
      return {
        pageTitle: "Profile",
      };
    },
  };
</script>
