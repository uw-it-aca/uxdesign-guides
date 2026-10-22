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
        Headings summarize content, communicate levels of importance, provide
        structure and define relationships between content.
      </p>
    </template>
    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#best">Best Practices</PageContentsItem>
        <PageContentsItem anchor="#access">Accessibility</PageContentsItem>
        <PageContentsItem anchor="#system">Type System</PageContentsItem>
      </PageContents>
    </template>
    <template #content>
      <div class="my-5 grid">
        <div class="g-col-4">
          <p>Content baseline</p>
          <ul class="list-unstyled">
            <li>
              <SHeading level="1">Heading 1 - 40px</SHeading>
            </li>
            <li>
              <SHeading level="2">Heading 2 - 32px</SHeading>
            </li>
            <li class="border-bottom my-2 p-0" style="height: 0">&nbsp;</li>
            <li>
              <SHeading level="3">Heading 3 - 28px</SHeading>
            </li>
            <li>
              <SHeading level="4">Heading 4 - 24px</SHeading>
            </li>
            <li>
              <SHeading level="5">Heading 5 - 20px</SHeading>
            </li>
            <li>
              <SHeading level="6">Heading 6 - 16px</SHeading>
            </li>
          </ul>
        </div>
        <div class="g-col-4">
          <p>Surfaces / components (unstyled)</p>
          <ul class="list-unstyled">
            <li>
              <SHeading level="3" class="fs-3">Heading 3 - 28px</SHeading>
            </li>
            <li>
              <SHeading level="4">Heading 4 - 24px</SHeading>
            </li>
            <li>
              <SHeading level="5">Heading 5 - 20px</SHeading>
            </li>
            <li>
              <SHeading level="6">Heading 6 - 16px</SHeading>
            </li>
          </ul>
        </div>
        <div class="g-col-4">
          <p>Surfaces / components (styled)</p>
          <ul class="list-unstyled">
            <li>
              <SHeading level="3" class="h4">Heading 3 - as h4 24px</SHeading>
            </li>
            <li>
              <SHeading level="3" class="h5">Heading 3 - as h5 20px</SHeading>
            </li>
            <li>
              <SHeading level="4" class="h5">Heading 4 - as h5 20px</SHeading>
            </li>
            <li>
              <SHeading level="4" class="h6">Heading 4 - as h6 16px</SHeading>
            </li>
            <li>
              <SHeading level="5" class="h6">Heading 5 - as h6 16px</SHeading>
            </li>
            <li>
              <SHeading level="6">Heading 6 - 16px</SHeading>
            </li>
          </ul>
        </div>
      </div>

      <SHeading level="2" id="best">Best Practices</SHeading>
      <SHeading level="3">Content</SHeading>

      <ul>
        <li>
          Heading text should be directly related to the content it is
          containing. Review Labels page for more guidance.
        </li>
        <li>
          The <code>&lt;h1></code> tag is typically reserved for the page title
          or main heading, while <code>&lt;h2></code> and
          <code>&lt;h3></code> tags break up sections and subsections.
        </li>
        <li>
          Use <code>&lt;h2></code> through <code>&lt;h6></code> tags to define
          peer and parent-child relationships in the content.
        </li>
        <li>Avoid having only one subsection heading within a section.</li>
      </ul>

      <SHeading level="3">Styles</SHeading>
      <ul>
        <li>Use only the headings styles defined in the type system below.</li>
        <li>
          Heading text should never be smaller than the body text it contains,
          visually and semantically
        </li>
      </ul>

      <SHeading level="2" id="access">Accessibility</SHeading>

      <ul>
        <li>
          <strong
            >All headings on a page must be semantically defined in
            code.</strong
          >
          Outside of it being essential for usability and accessibility, clear
          and semantic headings are also important for good search results
          (SEO).
        </li>
        <li>
          <strong>Ensure your heading hierarchy is clear and logical.</strong>
          Don&apos;t skip heading levels, as this will break the page structure
          and confuse users.
        </li>
        <li>
          <strong
            >Try to avoid the use of <code>&lt;h5></code> and
            <code>&lt;h6></code> tags.</strong
          >
          The use of these tags creates deeply nested content that can be
          tedious to navigate for screen reader users. If you start to use
          <code>&lt;h5></code> and <code>&lt;h6></code> tags when designing,
          consider a different content structure.
        </li>
        <li class="text-danger">Need guidance around visibility</li>
      </ul>

      <SHeading level="2" id="system">Type System</SHeading>
      <p>
        The heading styles specified below create a cohesive heading system that
        is visually distinct and hierarchically clear.

        <br />
        <br />

        <strong>Note:</strong> This type system works well for content heavy
        sites, such as this documentation site for the Solstice Design System.
        Different styles may be necessary in a web application.
      </p>

      <SHeading level="3">Heading 1</SHeading>
      <p>
        Use an <code>&lt;h1></code> for page titles. The
        <code>&lt;h1></code> will most likely be the largest font on the page.
      </p>

      <CodeBlock>
        <template #preview>
          <h1 class="display-5 fw-bold ff-encode-sans">Solstice h1</h1>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h1 class="display-5 fw-bold ff-encode-sans">Solstice h1&lt;/h1>
</code></pre>
        </template>
      </CodeBlock>

      <UsageBlock variant="dont"
        ><template #text
          >An <code>&lt;h1></code> should not be used for an application name or
          logo in a header &ndash; instead that content should be either inside
          an <code>&lt;a></code> or <code>&lt;p></code> tag, and all within a
          &lt;header> section.</template
        ></UsageBlock
      >

      <SHeading level="3">Heading 2</SHeading>
      <p>Use an <code>&lt;h2></code> to designate a page section.</p>

      <CodeBlock>
        <template #preview>
          <h2 class="display-6 ff-encode-sans">Solstice h2</h2>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h2 class="display-6 ff-encode-sans">Solstice h2&lt;/h2>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="3">Heading 3</SHeading>
      <p>Use an <code>&lt;h3></code> to designate a subsection.</p>
      <CodeBlock>
        <template #preview>
          <h3 class="fw-medium ff-encode-sans">Solstice h3</h3>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h3 class="fw-medium ff-encode-sans">Solstice h3&lt;/h3>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="3">Heading 4</SHeading>
      <p>
        Use an <code>&lt;h4></code> to designate a subsection of an
        <code>&lt;h3></code>.
      </p>
      <CodeBlock>
        <template #preview>
          <h4 class="fw-medium ff-open-sans">Solstice h4</h4>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h4 class="fw-medium ff-open-sans">Solstice h4&lt;/h4>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="3">Heading 5 &amp; 6</SHeading>
      <p>
        Use an <code>&lt;h5></code> and <code>&lt;h6></code> to designate sub
        sections of their respective parent.
      </p>

      <CodeBlock>
        <template #preview>
          <h5 class="fw-bold ff-open-sans">Solstice h5</h5>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h5 class="fw-bold ff-open-sans">Solstice h5&lt;/h5>
</code></pre>
        </template>
      </CodeBlock>

      <CodeBlock>
        <template #preview>
          <h6 class="fw-bold ff-open-sans">Solstice h6</h6>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;h6 class="fw-bold ff-open-sans">Solstice h6&lt;/h6>
</code></pre>
        </template>
      </CodeBlock>

      <!--      <UsageBlock variant="dont"
        ><template #text
          >Don't mix heading styles or semantic tags</template
        ></UsageBlock -->
      <!--       >
      <UsageBlock variant="do"
        ><template #text
          >Do have more than one subsection under a heading?</template
        ></UsageBlock
      > -->
      <!--
      <h2 id="implementation">Implementation</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
       -->
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
    name: "DocsComponentsTextHeading",
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
        pageTitle: "Heading",
      };
    },
  };
</script>
