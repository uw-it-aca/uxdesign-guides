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
      <p class="lead" style="max-width: 85ch">
        Links navigate between or within web pages and initiate simple actions.
        They can be used in paragraphs, in groups, or on their own.
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
      <SHeading level="2" id="anatomy">Anatomy</SHeading>
      <SHeading level="3">Sizing</SHeading>

      <p>A link should inherit the size of its parent.</p>

      <SHeading level="3">Color</SHeading>
      <p>
        All link variants are blue by default. Light and dark variants exist for
        use on colored backgrounds where the default blue does not meet the
        minimum contrast ratio of 4.5:1.
      </p>

      <SHeading level="3">Dark Mode</SHeading>
      <p>
        Links must maintain proper contrast in order to be readable in both
        light and dark modes. If a link's background switches between modes, its
        color should too. If the background remains constant, the link color
        stays the same. In most cases, this means that primary blue links will
        change, while light and dark variants used on static colored backgrounds
        will not.
      </p>
      <table class="my-5 table">
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Light Mode (default)</th>
            <th scope="col">Dark Mode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>default</code></td>
            <td>asdfas</td>
            <td>afda</td>
          </tr>
          <tr>
            <td><code>light</code></td>
            <td>asdfasdf</td>
            <td>asdfasdf</td>
          </tr>
          <tr>
            <td><code>dark</code></td>
            <td>asdf</td>
            <td>asdfasdf</td>
          </tr>
        </tbody>
      </table>

      <SHeading level="2" id="variants">Variants</SHeading>
      <SHeading level="3">Default</SHeading>

      <p>
        Default links are within <strong>sentences or paragraphs</strong>,
        underlined, and blue with light and dark variations. They shouldn't
        stand alone; for that, use Quiet links. Apart from color and underline,
        links should match the surrounding text style.
      </p>
      <p>
        For use with links on a white/off-white background. This color should be
        used in most cases.
      </p>

      <CodeBlock>
        <template #preview>
          Hello! Welcome to the
          <BLink href="/" class="link-primary">Soltice Design System</BLink>
          documentation website. This is a paragraph example using the
          <BLink href="/elements/link">link component</BLink>. Goodbye!
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;a href="/">Soltice Design System&lt;/a>
&lt;a href="/" class="link-primary">Soltice Design System&lt;/a>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BLink to="/">Soltice Design System&lt;/BLink>
&lt;BLink to="/" class="link-primary">Soltice Design System&lt;/BLink>
</code></pre>
        </template>
        <template #blah>asaf</template>
      </CodeBlock>

      <SHeading level="3">Light</SHeading>
      <p>For use on dark, static backgrounds (such as purple).</p>

      <CodeBlock>
        <template #preview>
          <div class="bg-spirit-purple rounded p-3 text-white">
            Hello! Welcome to the
            <BLink
              href="/"
              class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
              >Soltice Design System</BLink
            >
            documentation website. This is a paragraph example using the
            <BLink
              href="/elements/link"
              class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
              >link component</BLink
            >.
          </div>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;a href="/" class="link-light link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">
  Soltice Design System
&lt;/a>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BLink variant="light" class="link-opacity-50 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">
  Soltice Design System
&lt;/BLink>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="3">Dark</SHeading>

      <p>For use on light, static backgrounds (such as gold or light gray).</p>

      <CodeBlock>
        <template #preview>
          <div class="bg-light text-dark rounded p-3">
            Hello! Welcome to the
            <BLink
              href="/"
              variant="dark"
              class="link-opacity-75 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
              >Soltice Design System</BLink
            >
            documentation website. This is a paragraph example using the
            <BLink
              href="/elements/link"
              variant="dark"
              class="link-opacity-75 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover"
              >link component</BLink
            >.
          </div>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;a href="/" class="link-dark link-opacity-75 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">
  Soltice Design System
&lt;/a>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BLink variant="dark" class="link-opacity-75 link-opacity-75-hover link-underline-opacity-50 link-underline-opacity-75-hover">
  Soltice Design System
&lt;/BLink>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="2" id="options">Options</SHeading>
      <SHeading level="3">Quiet</SHeading>

      <p>
        Quiet links are <strong>standalone or in link groups</strong>, typically
        found in sidebars, footers, or "quick links" lists. They can be grouped
        horizontally or vertically, are not underlined, and are blue with light
        and dark variations.
      </p>

      <CodeBlock>
        <template #preview>
          <p>
            Hello! Welcome to the Soltice Design System documentation website.
            This is a paragraph explaining how to use the quite link below:
          </p>
          <BLink
            to="/"
            class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
            >Soltice Design System</BLink
          >
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;a href="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
  Soltice Design System
&lt;/a>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BLink to="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
  Soltice Design System
&lt;/BLink>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Icon</h3>
      <p>
        Icon links are similar to Quiet links but include a left icon. Use them
        only when an icon improves understanding of the link's purpose or
        destination (and not within sentences or paragraphs).
      </p>

      <CodeBlock>
        <template #preview>
          <BLink
            to="/solstice/components/actions/link"
            class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover"
          >
            <i class="bi bi-cloud-download me-1"></i>Download report
          </BLink>
        </template>
        <template #bootstrap>
          <pre class="language-html">
<code>&lt;a href="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
  &lt;i class="bi bi-cloud-download me-1">&lt;/i>Download report
&lt;/a>
</code></pre>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;BLink to="/" class="link-underline link-underline-opacity-0 link-underline-opacity-100-hover">
  &lt;i class="bi bi-cloud-download me-1">&lt;/i>Download report
&lt;/BLink>
</code></pre>
        </template>
      </CodeBlock>

      <SHeading level="2" id="usage">Usage</SHeading>
      <SHeading level="3">Behavior</SHeading>

      <p>
        Links usually open in the same tab. If users hold the command/control
        key, links open in a new tab. Only set links to open in a new tab by
        default if they redirect users outside of the UW or interrupt the
        current workflow.
      </p>

      <SHeading level="3">How to use links</SHeading>

      <p>Links can be used for:</p>
      <ul>
        <li>Navigating between websites, pages, or page sections.</li>
        <li>Downloading files like PDFs or software.</li>
        <li>Launching the default email client with preset details.</li>
        <li>Logging out of sites or apps.</li>
      </ul>

      <UsageBlock>
        <template #text
          >Use links to allow users to navigate between unique URLS or specific
          sections of a page.</template
        >
        <template #preview>
          <div class="rounded-3 bg-body-tertiary border p-3">
            html or images can be inserted here. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos, mollitia, debitis delectus
            beatae magni, doloremque quia molestiae accusantium maiores hic vero
            rem repudiandae fuga! Eveniet sit amet mollitia fugiat similique?
          </div>
        </template>
      </UsageBlock>
      <UsageBlock variant="dont">
        <template #text
          >Don&rsquo;t use links for complex actions—use buttons
          instead.</template
        >
        <template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            html or images can be inserted here. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos, mollitia, debitis delectus
            beatae magni.
          </div></template
        >
      </UsageBlock>

      <SHeading level="3">Where to use links</SHeading>
      <p>
        Links can be within body text, by themselves, or in groups such as
        headers, footers, or "quick links" sections.
      </p>

      <UsageBlock>
        <template #text
          >Use links in paragraphs, headers, footers, sidebars, in other groups
          of links, or alone.</template
        >
        <template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            html or images can be inserted here. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos, mollitia, debitis delectus
            beatae magni.
          </div></template
        >
      </UsageBlock>
      <UsageBlock variant="dont">
        <template #text>Don&rsquo;t use links in titles or headings.</template>
        <template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            html or images can be inserted here. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos, mollitia, debitis delectus
            beatae magni.
          </div></template
        >
      </UsageBlock>

      <SHeading level="3"
        >Maintain consistent styling to make links stand out</SHeading
      >
      <p>
        Use proper colors, underlines, and states to demarcate links as
        described in the Variants section. While links can have bold or italic
        styles based on context, don't replace standard color and underline
        styles. Avoid non-standard styles for links or using link styles on
        non-link text; it will make it harder for users to navigate.
      </p>

      <SHeading level="2" id="access">Accessibility</SHeading>
      <SHeading level="3">Ensure proper contrast</SHeading>

      <p>
        Ensure default blue links have a 4.5:1 contrast ratio with the
        background, following the WCAG 2.1 AA standard. If the blue doesn't meet
        this standard on gold, purple, or certain gray backgrounds, use light or
        dark color variants.
      </p>

      <UsageBlock>
        <template #text
          >Use proper variants to ensure sufficient contrast against the
          background.</template
        >
        <template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            html or images can be inserted here. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos, mollitia, debitis delectus
            beatae magni.
          </div></template
        >
      </UsageBlock>
      <UsageBlock variant="dont">
        <template #text
          >Don&rsquo;t mix variants or colors in a way that compromises
          readability.</template
        >
        <template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            html or images can be inserted here. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos, mollitia, debitis delectus
            beatae magni.
          </div></template
        >
      </UsageBlock>

      <SHeading level="3">Use clear text</SHeading>
      <ul>
        <li>
          <strong>Use specific, purposeful link text</strong> that doesn't rely
          on surrounding text; screen reader users should be able to understand
          links without extensive context or additional labeling.*
        </li>
        <li>
          <strong>Link the main part of the phrase;</strong> avoid linking vague
          terms like "click here” and “learn more."
        </li>
        <li>
          <strong
            >Maintain consistent text for duplicate destinations within a
            page</strong
          >
          and distinct text for each unique link.
        </li>
        <li>
          <strong>Avoid distracting styling</strong> such as using all caps or
          displaying full URLs in link text.
        </li>
      </ul>

      <p>
        *In cases where additional context is needed, use aria-label or
        aria-labelledby, ensuring they read naturally with surrounding text.
      </p>

      <UsageBlock>
        <template #text
          >Link words or short phrases that make sense on their own.</template
        >
        <template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            html or images can be inserted here. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos, mollitia, debitis delectus
            beatae magni.
          </div></template
        >
      </UsageBlock>

      <UsageBlock variant="dont">
        <template #text
          >Don&rsquo;t link generic terms like “click here” that don&rsquo;t
          make sense out of context.</template
        >
        <template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            html or images can be inserted here. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Quos, mollitia, debitis delectus
            beatae magni.
          </div></template
        >
      </UsageBlock>

      <SHeading level="3">Keyboard functionality</SHeading>
      <p>
        All links must be accessible via keyboard and other devices, as not
        everyone uses a mouse or touchscreen. Ensure links can be navigated and
        activated using the tab and enter keys in the correct order. Also,
        keyboard navigation should trigger the appropriate focused states for
        links.
      </p>

      <SHeading level="3" id="implement">Implementation</SHeading>
      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia,
        debitis delectus
      </p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import UsageBlock from "@/components/UsageBlock.vue";
  import PageContents from "@/components/PageContents.vue";
  import PageContentsItem from "@/components/PageContentsItem.vue";
  import { BBreadcrumb, BBreadcrumbItem, BLink } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "DocsComponentsActionLink",
    components: {
      Layout,
      CodeBlock,
      UsageBlock,
      PageContents,
      PageContentsItem,
      BBreadcrumb,
      BBreadcrumbItem,
      BLink,
      SHeading,
    },
    inject: ["mq"],
    data() {
      return {
        pageTitle: "Link",
      };
    },
  };
</script>
