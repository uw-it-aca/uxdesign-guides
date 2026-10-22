<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/actions"
          >Actions</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 75ch">
        A button is an interactive element that users can click or tap to
        trigger a specific action or command within an application. It
        represents an action, such as submitting a form, opening a menu, or
        navigating to another screen. Buttons provide an intuitive way for users
        to perform tasks efficiently.
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
      <SHeading level="2" id="anatomy">Anatomy</SHeading>
      <p style="max-width: 85ch">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga
        corporis totam eligendi molestiae ex aperiam soluta, consectetur
        accusamus accusantium officia praesentium, magni numquam sunt minus
        architecto libero enim tempore!
      </p>

      <SHeading level="2" id="variants">Variants</SHeading>
      <SHeading level="3">Primary</SHeading>
      <p>
        Use the <code>primary</code> variant for buttons that complete actions
        (i.e., “submit”) and that are core to the page experience. In general,
        limit the number of primary buttons on the page to 1-3.
      </p>

      <CodeBlock>
        <template #preview>
          <BButton variant="primary">Primary</BButton>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;button class="btn btn-primary" type="button">Primary&lt;/button>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BButton variant="primary">Primary&lt;/BButton>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="3">Outline</SHeading>
      <p>
        Use the <code>outline-primary</code> variant for buttons that change
        modes (i.e., edit), or for buttons that supplement core actions in
        button groups (i.e., “cancel”)
      </p>

      <CodeBlock>
        <template #preview>
          <BButton variant="outline-primary">Outline</BButton>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;button class="btn btn-outline-primary" type="button">Outline&lt;/button>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BButton variant="outline-primary">Outline&lt;/BButton>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="3">Subdued</SHeading>
      <p>
        Use the <code>subdued-primary</code> class for buttons that change modes
        (i.e., edit), or for buttons that supplement core actions in button
        groups (i.e., “cancel”)
      </p>

      <CodeBlock>
        <template #preview>
          <BButton variant="subdued-primary">Subdued</BButton>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;button class="btn btn-subdued-primary" type="button">Subdued&lt;/button>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BButton variant="subdued-primary">Subdued&lt;/BButton>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="3">Quiet</SHeading>
      <p>
        Use the <code>quiet-primary</code> variant for buttons with less
        prominence than subdued buttons. Quiet buttons look like links but are
        considered buttons. Quiet buttons could be used in more complex set of
        related actions, such as a navigation menu. Quiet buttons have no fill
        (below) and look like a Quiet Link.
      </p>

      <CodeBlock>
        <template #preview>
          <BButton variant="quiet-primary" class="">Quiet</BButton>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;button class="btn btn-quiet-primary" type="button">Quiet&lt;/button>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BButton variant="quiet-primary">Quiet&lt;/BButton>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="2" id="options">Options</SHeading>
      <SHeading level="3">Sizing</SHeading>

      <p>
        The medium (or default) size of buttons should be used in most cases.
        Small buttons can be used in layouts where space is constricted, such us
        popups, and in some cases alerts. Larger buttons can be used on
        prominent tasks, such ast Call to Actions and where the page layout
        provides generous space to accomodate the larger size.
      </p>

      <CodeBlock>
        <template #preview>
          <BButton variant="primary" size="sm" class="me-2"
            >Small button</BButton
          >
          <BButton variant="primary" class="me-2">Medium button</BButton>
          <BButton variant="primary" size="lg" class="me-2"
            >Large button</BButton
          >
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;button class="btn btn-primary btn-sm" type="button">Button&lt;/button>
&lt;button class="btn btn-primary" type="button">Button&lt;/button>
&lt;button class="btn btn-primary btn-lg" type="button">Button&lt;/button>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BButton variant="primary" size="sm">Small button&lt;/BButton>
&lt;BButton variant="primary">Small button&lt;/BButton>
&lt;BButton variant="primary" size="lg">Small button&lt;/BButton>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="3">Icons</SHeading>
      <p>
        By default, not all buttons need an icon, but in some cases including an
        icon may add context or make a button more identifiable (like a
        magnifying glass icon in a search button). Typically, the icon should be
        a leading visual before the text. In some cases, buttons may need a
        trailing visual (like a dropdown arrow). If buttons are part of a group,
        icons should be aligned (all buttons have an icon or none of them have
        an icon).
      </p>

      <CodeBlock>
        <template #preview>
          <BButton variant="primary" class="me-2"
            ><i class="bi bi-cloud-download me-2"></i>Download</BButton
          >
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;button class="btn btn-primary" type="button">
  &lt;i class="bi bi-cloud-download me-2">&lt;/i>Download
&lt;/button>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BButton variant="primary">
  &lt;i class="bi bi-cloud-download me-2">&lt;/i>Download
&lt;/BButton>
</code></pre>
        </template>
      </CodeBlock>

      <p>
        For icon-only buttons -- for example a hamburger or a meatball menu, or
        page forward/backward buttons -- they must be labelled correctly in
        markup for assistive technologies, and they should have a tooltip in the
        UI with a text label.
      </p>

      <CodeBlock>
        <template #preview>
          <BButton variant="primary" size="sm" class="me-2" title="More"
            ><i class="bi bi-three-dots"></i
          ></BButton>
          <BButton variant="subdued-primary" size="sm" class="me-2" title="More"
            ><i class="bi bi-three-dots"></i
          ></BButton>
          <BButton variant="outline-primary" size="sm" class="me-2" title="More"
            ><i class="bi bi-three-dots"></i
          ></BButton>
          <BButton
            variant="quiet-primary"
            size="sm"
            class="link-underline link-underline-opacity-0 me-2"
            title="More"
            ><i class="bi bi-three-dots"></i
          ></BButton>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;button class="btn btn-primary btn-sm" type="button" title="More">...&lt;/button>
&lt;button class="btn btn-subdued-primary btn-sm" type="button" title="More">...&lt;/button>
&lt;button class="btn btn-outline-primary btn-sm" type="button" title="More">...&lt;/button>
&lt;button class="btn btn-quiet-primary btn-sm" type="button" title="More">...&lt;/button>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BButton variant="primary" size="sm" title="More">...&lt;/BButton>
&lt;BButton variant="subdued-primary" size="sm" title="More">...&lt;/BButton>
&lt;BButton variant="outline-primary" size="sm" title="More">...&lt;/BButton>
&lt;BButton variant="quiet-primary" size="sm" title="More">...&lt;/BButton>
</code></pre>
        </template>
      </CodeBlock>

      <template v-if="false">
        <!-- MARK: hide for now -->
        <p>Grayscale variants of Primary and Secondary.</p>
        <CodeBlock>
          <template #preview>
            <BButton
              variant="gray-primary"
              size="sm"
              class="me-2"
              title="Delete"
              ><i class="bi bi-trash3"></i
            ></BButton>
            <BButton
              variant="gray-secondary"
              size="sm"
              class="text-gray-primary me-2"
              title="Delete"
              ><i class="bi bi-trash3"></i
            ></BButton>
            <BButton
              variant="outline-gray-primary"
              size="sm"
              class="me-2"
              title="Delete"
              ><i class="bi bi-trash3"></i
            ></BButton>
            <BButton
              variant="link"
              size="sm"
              class="link-gray-primary me-2"
              title="Delete"
              ><i class="bi bi-trash3"></i
            ></BButton>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;button class="btn btn-gray-primary btn-sm" type="button" title="Delete">...&lt;/button>
&lt;button class="btn btn-gray-secondary btn-sm text-gray-primary" type="button" title="Delete">...&lt;/button>
&lt;button class="btn btn-outline-gray-primary btn-sm" type="button" title="Delete">...&lt;/button>
&lt;button class="btn btn-link btn-sm link-gray-primary" type="button" title="Delete">...&lt;/button>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButton variant="gray-primary" size="sm" title="Delete">...&lt;/BButton>
&lt;BButton variant="gray-secondary" size="sm" class="text-gray-primary" title="Delete">...&lt;/BButton>
&lt;BButton variant="outline-gray-primary" size="sm" title="Delete">...&lt;/BButton>
&lt;BButton variant="link" size="sm" class="link-gray-primary" title="Delete">...&lt;/BButton>
</code></pre>
          </template>
        </CodeBlock>
      </template>

      <template v-if="false">
        <!-- MARK: hide for now -->
        <h2 id="button-groups">Button groups</h2>
        <p>
          Button groups help to create a more organized, intuitive, and
          user-friendly experience by grouping related actions, saving space,
          and improving the overall usability.
        </p>

        <CodeBlock>
          <template #preview>
            <BButtonGroup>
              <BButton variant="primary">Button 1</BButton>
              <BButton variant="primary">Button 2</BButton>
              <BButton variant="primary">Button 3</BButton>
            </BButtonGroup>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="btn-group" role="group" aria-label="Basic example">
  &lt;button type="button" class="btn btn-primary">Button 1&lt;/button>
  &lt;button type="button" class="btn btn-primary">Button 2&lt;/button>
  &lt;button type="button" class="btn btn-primary">Button 3&lt;/button>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BButtonGroup>
  &lt;BButton variant="primary">Button 1&lt;/BButton>
  &lt;BButton variant="primary">Button 2&lt;/BButton>
  &lt;BButton variant="primary">Button 3&lt;/BButton>
&lt;/BButtonGroup>
</code></pre>
          </template>
        </CodeBlock>

        <p>
          Button groups can be used for toggle buttons, radio buttons, or
          segmented controls where users can select one or multiple options. For
          example:
        </p>
        <ul>
          <li>
            Radio button groups allow users to select one option from many.
          </li>
          <li>Checkbox groups enable users to select multiple options.</li>
          <li>
            Toggle button groups make it clear that only one action can be
            active at a time.
          </li>
        </ul>
        <p>
          Button groups should give users instant visual feedback on their
          selections. For example, selected buttons may change color or style,
          indicating that they have been activated, making it clear what actions
          have been taken.
        </p>
      </template>
    </template>
    <template #author>Diego Bejarano</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import PageContents from "@/components/PageContents.vue";
  import PageContentsItem from "@/components/PageContentsItem.vue";
  import {
    BBreadcrumb,
    BBreadcrumbItem,
    BButton,
    BButtonGroup,
  } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "DocsComponentsActionButton",
    components: {
      Layout,
      CodeBlock,
      PageContents,
      PageContentsItem,
      BBreadcrumb,
      BBreadcrumbItem,
      BButton,
      BButtonGroup,
      SHeading,
    },
    inject: ["mq"],
    data() {
      return {
        pageTitle: "Button",
      };
    },
  };
</script>
