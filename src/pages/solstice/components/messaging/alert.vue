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
        Alerts are semantic messages that intentionally disrupt a user's
        workflow to notify them about issues that require action or provide
        information relevant to a particular task or page section. For quick,
        non-critical messages that disappear on their own, use a
        <a href="toast">Toast</a>.
      </p>
    </template>
    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#anatomy">Anatomy</PageContentsItem>
        <PageContentsItem anchor="#variants">Variants</PageContentsItem>
        <PageContentsItem anchor="#options">Options</PageContentsItem>
        <PageContentsItem anchor="#placement">Placement</PageContentsItem>
        <PageContentsItem anchor="#usage">Usage</PageContentsItem>
        <PageContentsItem anchor="#access">Accessibility</PageContentsItem>
        <PageContentsItem anchor="#implement">Implementation</PageContentsItem>
      </PageContents>
    </template>
    <template #content>
      <h2 id="anatomy">Anatomy</h2>
      <h3>Sizing</h3>
      <p>
        Alerts should occupy the full width of their parent container, usually a
        section or module on a page.
      </p>
      <h3>Text</h3>
      <p>Alerts contain a message which should communicate the following:</p>
      <ul>
        <li>
          Why the Alert is there, or what issue exists that needs attention.
        </li>
        <li>
          If the Alert requires user action, how to resolve it (with a CTA if
          applicable; see below).
        </li>
      </ul>

      <h3>Color</h3>
      <p>
        Alerts always carry a semantic meaning with a corresponding color:
        <code>critical</code> (red), <code>warning</code> (yellow), or
        <code>info</code> (blue). Refer to the
        <a href="#">Solstice Semantic Color Palette</a>
        for appropriate values.
      </p>
      <h3>Dark Mode Support</h3>
      <p>
        Alerts must maintain proper contrast in order to be readable in both
        light and dark modes. By default, the component will update to
        appropriate colors within the semantic color palette.
      </p>
      <p>
        Below are the primitive color values (100-900) for each of the elements
        within an Alert. The <code>warning</code> colors are shown as an
        example, but the primitive values apply to each of the semantic colors.
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
            <td>
              <code class="text-success">background</code><br />(required)
            </td>
            <td><code>100</code></td>
            <td>
              <code>900</code>
            </td>
          </tr>
          <tr>
            <td><code class="text-success">border</code></td>
            <td><code>200</code></td>
            <td>
              <code>700</code>
            </td>
          </tr>
          <tr>
            <td><code class="text-success">element</code></td>
            <td><code>800</code></td>
            <td>
              <code>300</code>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 id="variants">Variants</h2>
      <h3>Danger</h3>
      <p style="max-width: 85ch">
        Alerts with the <code>danger</code> variant are of the highest
        importance, and communicate that an item needs immediate attention, that
        a process is blocked, or that there has been an error. Whenever
        possible, <code>danger</code> Alerts should include a call to action to
        help the user resolve the issue.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BAlert variant="danger" :model-value="true" class="small"
              ><i class="bi-exclamation-octagon-fill me-1"></i> Danger Alert
            </BAlert>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="alert alert-danger small" role="alert" aria-live="polite" aria-atomic="true">
  &lt;i class="bi-exclamation-octagon-fill me-1">&lt;/i> Critical Alert
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BAlert variant="danger" :model-value="true" class="small">
  &lt;i class="bi-exclamation-octagon-fill me-1">&lt;/i> Critical Alert
&lt;/BAlert>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Warning</h3>
      <p style="max-width: 85ch">
        Alerts with the <code>warning</code> variant communicate items or
        statuses that may have future consequences and require attention, but
        are not currently causing an error or blocking a process. Whenever
        possible, <code>warning</code>
        Alerts should include a call to action to help the user learn more about
        the issue.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BAlert variant="warning" :model-value="true" class="small"
              ><i class="bi-exclamation-triangle-fill me-1"></i> Warning Alert
            </BAlert>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="alert alert-warning small" role="alert" aria-live="polite" aria-atomic="true">
  &lt;i class="bi-exclamation-triangle-fill me-1">&lt;/i> Warning Alert
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BAlert variant="warning" :model-value="true" class="small">
  &lt;i class="bi-exclamation-triangle-fill me-1">&lt;/i> Warning Alert
&lt;/BAlert>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Info</h3>
      <p style="max-width: 85ch">
        Alerts with the <code>info</code> variant communicate useful (but
        non-critical) information to help the user better understand the current
        context, such as announcements about upcoming processes.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BAlert variant="info" :model-value="true" class="small"
              ><i class="bi-exclamation-circle-fill me-1"></i> Info Alert
            </BAlert>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="alert alert-info small" role="alert" aria-live="polite" aria-atomic="true">
  &lt;i class="bi-exclamation-circle-fill me-1">&lt;/i> Info Alert
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BAlert variant="info" :model-value="true" class="small">
  &lt;i class="bi-exclamation-circle-fill me-1">&lt;/i> Info Alert
&lt;/BAlert>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Success</h3>
      <p style="max-width: 85ch">
        Alerts with the <code>success</code> variant communicate... Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Tempore sunt reiciendis
        fugit placeat, deleniti atque eos architecto modi sit nulla ullam ipsa
        quam eius nihil earum debitis ad? Earum, et.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BAlert variant="success" :model-value="true" class="small"
              ><i class="bi-check-circle-fill me-1"></i> Succes Alert
            </BAlert>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="alert alert-success small" role="alert" aria-live="polite" aria-atomic="true">
  &lt;i class="bi-check-circle-fill me-1">&lt;/i> Success Alert
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BAlert variant="success" :model-value="true" class="small">
  &lt;i class="bi-check-circle-fill me-1">&lt;/i> Success Alert
&lt;/BAlert>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h2 id="options">Options</h2>
      <h3>Call to Action</h3>
      <p style="max-width: 85ch">
        Whenever possible, Alerts should provide direct access to relevant
        actions needed to resolve them. Do this by adding a call to action with
        <code>has-cta="true"</code>, and specifying a URL with
        <code>cta-url</code> and a label with <code>cta-label</code>. The CTA
        should provide a link to an appropriate page where the issue can be
        resolved. Alerts may only have one call to action including one relevant
        link.
      </p>
      <p style="max-width: 85ch">
        In general, <code>critical</code> and <code>warning</code> Alerts should
        include calls to action whenever possible.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BAlert variant="danger" :model-value="true" class="small">
              <i class="bi-exclamation-octagon-fill me-1"></i> Critical Alert
              <BLink
                class="btn btn-danger btn-sm rounded-3 position-absolute translate-middle-y end-0 top-50 me-2"
                to="/"
                >Call to action</BLink
              >
            </BAlert>
            <BAlert variant="warning" :model-value="true" class="small">
              <i class="bi-exclamation-octagon-fill me-1"></i> Critical Alert
              <BLink
                class="btn btn-warning btn-sm rounded-3 position-absolute translate-middle-y end-0 top-50 me-2"
                to="/"
                >Call to action</BLink
              >
            </BAlert>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="alert alert-danger small" role="alert" aria-live="polite" aria-atomic="true">
  &lt;i class="bi-exclamation-octagon-fill me-1">&lt;/i> Critical Alert
  &lt;a href="/" class="btn btn-danger btn-sm rounded-3 position-absolute top-50 end-0 translate-middle-y me-2">Call to action&lt;/a>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BAlert variant="danger" :model-value="true" class="small">
  &lt;i class="bi-exclamation-octagon-fill me-1">&lt;/i> Critical Alert
  &lt;BLink class="btn btn-danger btn-sm rounded-3 position-absolute top-50 end-0 translate-middle-y me-2" to="/">Call to action&lt;/BLink>
&lt;/BAlert>
</code></pre>
          </template>
        </CodeBlock>
      </div>
      <h3>Dismiss button</h3>
      <p>
        By default, Alerts are not dismissible from the page. They will remain
        in the interface until the issue is resolved or is no longer relevant.
        For Alerts with non-critical information, particularly info Alerts such
        as announcements, dismissibility may be enabled. When the
        <code>dismissible</code> prop is passed, an 'x' icon will allow users to
        remove it from the page.
      </p>
      <p>
        In general, <code>critical</code> and <code>warning</code> Alerts should
        not be dismissible.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BAlert
              variant="info"
              dismissible
              :model-value="true"
              class="small"
            >
              <i class="bi-exclamation-circle-fill me-1"></i> Info Alert
            </BAlert>
          </template>
          <template #bootstrap>
            <pre class="language-html">
<code>&lt;div class="alert alert-info alert-dismissible small" role="alert" aria-live="polite" aria-atomic="true">
  &lt;i class="bi-exclamation-circle-fill me-1">&lt;/i> Info Alert &lt;button type="button" class="btn-close" aria-label="Close">&lt;/button>
&lt;/div>
</code></pre>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BAlert variant="info" dismissible :model-value="true" class="small">
  &lt;i class="bi-exclamation-circle-fill me-1">&lt;/i>Info Alert
&lt;/BAlert>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2 id="placement">Placement</h2>
      <h3>Position</h3>
      <p>
        Alerts should appear in the section in which they are relevant, directly
        under the appropriate heading. In most cases, this will be directly
        under a section header (when the Alert applies to the whole section) or
        under a tab group (when the Alert applies only to the tab selected).
      </p>
      <UsageBlock
        ><template #text
          >Place Alerts at the top of the section in which it's relevant. If the
          Alert is only relevant to a particular subsection or tab, place it at
          the top of that subsection or tab.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <img
              class="img-fluid"
              src="/images/alert-asset-placement-do.png"
            /></div></template
      ></UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          >Don't place Alerts below other content in a section or subsection,
          where they might be more easily missed.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <img
              class="img-fluid"
              src="/images/alert-visual-placement-dont.png"
            /></div></template
      ></UsageBlock>
      <h3>Stacking</h3>
      <p>
        In cases where there are multiple Alerts shown at the same time, they
        should stack vertically with the highest priority Alert on top (from top
        to bottom: <code>critical</code> Alerts, <code>warning</code> Alerts,
        <code>info</code> Alerts). In this situation, Alerts should remain at
        the top of the most relevant section and push other content down.
      </p>
      <h2 id="states">States</h2>
      <p>
        Alerts, when visible, only have one state. When an Alert has a call to
        action, the embedded outline button element should have a functional
        hover state.
      </p>
      <h2 id="usage">Usage</h2>
      <h3>Use Alerts for important, temporary messages</h3>
      <p>
        Alerts draw attention and disrupt the user's workflow. They are
        persistent (including across page loads), and will remain on the page
        until they are resolved or are not longer relevant. For Alerts that are
        dismissible, they will remain on the page until the user clicks the
        dismiss button.
      </p>
      <p>Use Alerts for messages like:</p>
      <ul>
        <li>Warnings and errors</li>
        <li>When further action is required from the user</li>
        <li>
          For timely, important information or announcements (make these
          dismissible)
        </li>
      </ul>
      <UsageBlock
        ><template #text>Use Alerts for temporary, timely messages.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <BAlert
              variant="info"
              dismissible
              :model-value="true"
              class="small"
            >
              <i class="bi-exclamation-circle-fill me-1"></i> Registration
              period ends tomorrow at 11:59 PM.
            </BAlert>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #text
          >Don't use Alerts to call out permanent content on the page.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <BAlert
              variant="info"
              dismissible
              :model-value="true"
              class="small"
            >
              <i class="bi-exclamation-circle-fill me-1"></i> Registration
              Period III is from the first day of the quarter through the 7th
            </BAlert>
          </div></template
        ></UsageBlock
      >
      <h3>Help the user resolve issues with a call to action</h3>
      <p>
        Give enough detail to convey the message, and use a call to action to
        direct the user to a page where they can resolve the issue if possible
        (especially for <code>critical</code> and <code>warning</code> Alerts).
      </p>
      <CodeBlock
        ><template #text
          >Explain what caused the Alert and direct the user to the right place
          to resolve it.</template
        ><template #preview
          ><div class="bg-body-tertiary p-3">
            <BAlert variant="danger" :model-value="true" class="small">
              <i class="bi-exclamation-circle-fill me-1"></i> You have a balance
              that is past due.
              <BLink
                class="btn btn-danger btn-sm rounded-3 position-absolute translate-middle-y end-0 top-50 me-2"
                to="/"
                >See statement</BLink
              >
            </BAlert>
          </div></template
        ></CodeBlock
      >
      <UsageBlock variant="dont"
        ><template #text
          >Don't use vague language or error codes that are not actionable to
          the user.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3"></div></template
      ></UsageBlock>
      <h3>Be concise and link to additional information</h3>
      <p>
        Alerts should be no more than 1-3 sentences, but can expand to fit any
        amount of text. Give enough detail to convey the message, and use a call
        to action to direct the user to a page where they can learn more about
        the issue.
      </p>
      <UsageBlock
        ><template #text
          >Keep Alert message concise and link to a relevant page for more
          details.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3"></div></template
      ></UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          >Don't use multiple, long sentences or mention multiple
          issues.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3"></div></template
      ></UsageBlock>

      <h2 id="access">Accessibility</h2>

      <h3>Assistive technology & keyboard functionality</h3>
      <p>
        Alerts include the ARIA <code>role="alert"</code> by default, and should
        automatically be readable by screen readers and other assistive
        technologies. Ensure that the component works with these technologies as
        expected.
      </p>

      <p>
        Alerts with calls to action or dismiss buttons should be completely
        navigable by keyboard alone; the Alert itself will not receive focus,
        but the interactive children must. Check to make sure that any
        interactive elements are accessible via keyboard and that they behave as
        expected.
      </p>

      <p>
        When Alerts are dismissed or resolved, they disappear from the page
        structure (read <a href="#">Bootstrap's documentation</a> on this). The
        Alert component is configured to set focus to the top of the section in
        which the Alert was present. Check to make sure that after an Alert is
        dismissed, focus is set to a predictable location.
      </p>
      <h2 id="implement">Technical Implementation</h2>
      <table class="my-5 table">
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Values</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code class="text-success">variant</code></td>
            <td>
              <code>critical</code> / <code>warning</code> / <code>info</code>
            </td>
            <td>
              <code>string</code><br />Indicates semantic function (applies
              color and icon)
            </td>
          </tr>
          <tr>
            <td><code class="text-success">is-dismissable</code></td>
            <td><code>true</code> / <code>false</code></td>
            <td>
              <code>boolean</code><br />Adds close icon button to dismiss
              element.
            </td>
          </tr>
          <tr>
            <td><code class="text-success">has-cta</code></td>
            <td><code>true</code> / <code>false</code></td>
            <td>
              <code>boolean</code><br />Adds CTA link with button appearance.
            </td>
          </tr>
          <tr>
            <td><code class="text-success">cta-url</code></td>
            <td></td>
            <td>
              <code>string</code><br />Destination URL for CTA [when
              <code>has-cta="true"].</code>
            </td>
          </tr>
          <tr>
            <td><code class="text-success">cta-label</code></td>
            <td></td>
            <td>
              <code>string</code><br />Label for for CTA [when
              <code>has-cta="true"].</code>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <template #author>Ben Yamron</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import PageContents from "@/components/PageContents.vue";
  import UsageBlock from "@/components/UsageBlock.vue";
  import {
    BAlert,
    BBreadcrumb,
    BBreadcrumbItem,
    BLink,
  } from "bootstrap-vue-next";

  export default {
    name: "DocsElementsAlert" /* example: Docs--Folder--ComponentName */,
    components: {
      Layout,
      CodeBlock,
      PageContents,
      UsageBlock,
      BAlert,
      BBreadcrumb,
      BBreadcrumbItem,
      BLink,
    },
    inject: ["mq"],
    data() {
      return {
        pageTitle: "Alert",
      };
    },
  };
</script>
