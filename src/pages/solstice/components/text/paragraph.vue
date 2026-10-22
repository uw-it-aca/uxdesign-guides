<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/text">Text</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </template>
    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#system">Type System</PageContentsItem>
      </PageContents>
    </template>
    <template #content>
      <SHeading level="2" id="system">Type System</SHeading>
      <SHeading level="3">Body</SHeading>
      <p>
        This is the default font size for most text, and all content contained
        in a &lt;p> tag will automatically display this size.
      </p>

      <CodeBlock>
        <template #preview>
          <p>sample text</p>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;p>Text&lt;/p>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="3">Small Body</SHeading>

      <p>
        For content that is less important than the default-sized content on a
        page, or if there are space constraints, use a small body style.
      </p>

      <CodeBlock>
        <template #preview>
          <p class="small">
            This line of text is meant to be treated as fine print.
          </p>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;p class="small">Text&lt;/p>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="3">Large Body (lead)</SHeading>
      <p>
        Use this style for introductory paragraph, page descriptions, or content
        that needs more focus.
      </p>
      <CodeBlock>
        <template #preview>
          <p class="lead">Introductory comments about this page or section.</p>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;p class="lead">Text&lt;/p>
</code></pre>
        </template>
      </CodeBlock>

      <UsageBlock variant="dont"
        ><template #text
          >Large body text should not appear below an H6 heading, as this would
          result in a heading that is smaller than the content.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <h6 class="fw-bold ff-open-sans">Heading 6 sample</h6>
            <p class="fs-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div></template
        ></UsageBlock
      >
      <!-- <h2 id="usage" class="display-6 ff-encode-sans pt-4 pb-3">Usage</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="accessibility" class="display-6 ff-encode-sans pt-4 pb-3">Accessibility</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p> -->
    </template>
    <template #author>Cayla Snooke</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import PageContents from "@/components/PageContents.vue";
  import PageContentsItem from "@/components/PageContentsItem.vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "DocsComponentsTextParagraph",
    components: {
      Layout,
      PageContents,
      PageContentsItem,
      BBreadcrumb,
      BBreadcrumbItem,
      SHeading,
    },
    data() {
      return {
        pageTitle: "Paragraph",
      };
    },
  };
</script>
