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
        Toasts give timely feedback about non-critical information that does not
        require further action. In Solstice, Toasts are primarily used to
        communicate success and confirmation messages with minimal disruption,
        and they dismiss automatically. For intentionally disruptive messages
        communicating critical information, use an <a href="alert">Alert</a>.
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
      <h3>Sizing</h3>
      <p>
        Toasts occupy a fixed width. By default, their height accommodates one
        line of text; Toasts can expand to fit additional lines, but text length
        should be kept to one line when possible. Since Toasts sit above page
        content, their size neither affects nor is affected by other elements in
        the markup.
      </p>
      <h3>Color</h3>
      <p>
        Alerts always carry a semantic meaning with a corresponding color:
        <code>danger</code> (red), <code>warning</code> (yellow), or
        <code>info</code> (blue). Refer to the Solstice
        <a href="color">Semantic Color Palette</a>
        for appropriate values.
      </p>
      <h3>Dark Mode Support</h3>
      <p>
        Toasts must maintain proper contrast in order to be readable in both
        light and dark modes. By default, the component will update to
        appropriate colors within the semantic color palette.
      </p>
      <h3>Icon</h3>
      <p>
        Toasts with the <code>success</code> variant contain a corresponding
        semantic icon. This icon always appears to the left of the text. Since
        they have no semantic meaning, toasts with the
        <code>neutral</code> variant do not contain an icon.
      </p>
      <h3>Dismiss Button</h3>
      <p>
        While toasts will disappear after a specified time automatically by
        default, they also contain a button to dismiss them manually. This
        button (an 'x' icon) always appears to the right of the text.
      </p>
      <h3>Shadow</h3>
      <p>
        Toasts sit above page content, so they use a shadow to communicate
        elevation. By default, Toasts use the default shadow from
        <a href="https://getbootstrap.com/docs/5.3/utilities/shadows/"
          >Bootstrap's</a
        >
        <code>box-shadow</code> utility classes.
      </p>

      <h2 id="variants">Variants</h2>
      <h3>Default</h3>
      <p>
        Toasts by default do not have a semantic color associated with them. For
        this reason, they are used in rare cases to convey timely, non-critical
        feedback.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BToast v-model="active">
              <template #title>
                <div class="flex-fill">Title</div>
              </template>
              Body
            </BToast>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BToast v-model="active">
  &lt;template #title>
    &lt;div class="flex-fill">Title&lt;/div>
  &lt;/template>
  Body
&lt;/BToast>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h3>Success</h3>
      <p>
        Toasts with the <code>success</code> variant confirm that simple user
        actions have completed as intended, and do not require additional
        attention. This variant carries the semantic color green.
      </p>
      <div class="mb-5">
        <CodeBlock>
          <template #preview>
            <BToast v-model="active" variant="success">
              <template #title>
                <div class="flex-fill">Title</div>
              </template>
              Body
            </BToast>
          </template>
          <template #vue>
            <pre class="language-html">
<code>&lt;BToast v-model="active" variant="success">
  &lt;template #title>
    &lt;div class="flex-fill">Title&lt;/div>
  &lt;/template>
  Body
&lt;/BToast>
</code></pre>
          </template>
        </CodeBlock>
      </div>

      <h2 id="placement">Placement</h2>
      <h3>Position</h3>
      <p>
        Place Toasts centered across the bottom of the window or viewport, with
        adequate padding (at least 16px/1rem) above the bottom.
      </p>
      <p>
        On mobile, place Toasts centered across the bottom of the page viewport,
        above any browser UI.
      </p>
      <p>
        On any given platform (and with as much cross-platform consistency as
        possible), Toasts should appear in the same place every time so that
        users know where to expect them.
      </p>
      <UsageBlock
        ><template #text
          >Always display Toasts in the same place, centered at the bottom of
          the windowc.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <img
              class="img-fluid"
              src="/images/toast-asset-placement-do.png"
            /></div></template
      ></UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          >Don't put Toasts in different places throughout the page, where users
          might not expect them or where they might be more likely to block
          important content.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <img
              class="img-fluid"
              src="/images/toast-asset-placement-dont.png"
            /></div></template
      ></UsageBlock>
      <h3>Autohide</h3>
      <p>
        By default, the <code>autohide</code> property is true, and Toasts will
        disappear automatically after 5 seconds. For most simple messages, this
        should be sufficient. In special cases, <code>autohide</code> can be
        turned off or the <code>delay</code> can be extended. Do not show a
        Toast with a <code>delay</code> of less than 5 seconds, as there is a
        greater chance of it being missed.
      </p>
      <h3>Stacking</h3>
      <p>
        By default, multiple Toasts stack on top of each other, with the most
        recent message on top. When a Toast disappears, others move down to
        occupy the space closest to the bottom of the screen.
      </p>
      <img class="img-fluid" src="/images/toast-asset-stacking-visual.png" />
      <h2 id="states" class="mt-3">States</h2>
      <p>
        When visible, Toasts only exist in one state. By default, the dismiss
        button (an x icon) should have a functional hover state.
      </p>

      <h2 id="practices">Best Practices</h2>
      <h3>Use Toasts for real-time confirmation and updates</h3>
      <p>
        Use Toasts for non-critical status updates that do not require further
        action on the part of the user and are not meant to disrupt their
        workflow. Toasts should provide helpful feedback about what's going on,
        but if a user misses a Toast, it should not prevent them from completing
        other tasks on the page.
      </p>
      <p>
        Toasts should primarily be used to confirm the completion of actions
        (use the success variant). Examples include:
      </p>
      <ul>
        <li>When a course is added to or deleted from MyPlan</li>
        <li>When grades are successfully submitted</li>
        <li>When settings are updated</li>
      </ul>
      <p>
        For notifications for which the success variant does not make sense, and
        when the information is not critical enough to be an Alert, use the
        neutral variant.
      </p>
      <UsageBlock
        ><template #text
          >Use Toasts to notify the user that actions have completed
          successfully.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <img
              class="img-fluid"
              src="/images/toast-asset-do1.png"
            /></div></template
      ></UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          >Don't use Toasts to communicate critical information like errors that
          require immediate attention.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <img
              class="img-fluid"
              src="/images/toast-asset-dont1.png"
            /></div></template
      ></UsageBlock>

      <h3>Keep messages to a few words</h3>
      <p>
        Toast text should be no more than a few words, and not more than one
        sentence. The text should communicate a simple message, usually
        confirming or indicating success with no further action needed.
      </p>
      <p>
        If the message indicates critical information, and requires further
        action or explanation, consider using an <a href="alert">Alert</a>.
      </p>
      <UsageBlock
        ><template #text
          >Keep Toast text concise—no more than a few words.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <img
              class="img-fluid"
              src="/images/toast-asset-do2.png"
            /></div></template
      ></UsageBlock>
      <UsageBlock variant="dont"
        ><template #text
          >Don't use long sentences or additional formatting.</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <img
              class="img-fluid"
              src="/images/toast-asset-dont2.png"
            /></div></template
      ></UsageBlock>
      <h3>Assistive technology & keyboard functionality</h3>
      <p>
        Toasts must be generated within an existing
        <code>aria-live</code> region in order to be announced by assistive
        technologies; <code>aria-live</code> should be set to
        "<code>polite</code>". Read more about accessible structuring in
        <a href="https://getbootstrap.com/docs/5.3/components/toasts/"
          >Bootstrap's</a
        >
        Toast documentation.
      </p>
      <p>
        Like all elements, Toasts should be fully usable for those navigating
        the page by keyboard. Pressing `ESC` should dismiss Toasts.
      </p>
      <p>
        Toasts do not receive focus and therefore should not include any links,
        buttons, or interactive content (with the exception of the dismiss
        button, whose function is assumed by the `ESC` shortcut). Additionally,
        dismissing a Toast (automatically or manually) should not change the
        user's focus.
      </p>

      <h2 id="implementation">Technical Implementation</h2>
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
            <td><code class="text-success">variant</code><br />(required)</td>
            <td><code>success</code> / <code>neutral</code></td>
            <td>
              <code>string</code><br />Indicates semantic function (applies
              color and icon)
            </td>
          </tr>
          <tr>
            <td><code class="text-success">animation</code></td>
            <td><code>true</code> / <code>false</code></td>
            <td>
              <code>boolean</code><br />Apply a CSS fade transition to the
              toast.
            </td>
          </tr>
          <tr>
            <td><code class="text-success">autohide</code></td>
            <td><code>true</code> / <code>false</code></td>
            <td>
              <code>boolean</code><br />Automatically hide the toast after the
              delay.
            </td>
          </tr>
          <tr>
            <td><code class="text-success">delay</code></td>
            <td><code>5000</code></td>
            <td>
              <code>number</code><br />Delay in milliseconds before hiding the
              toast.
            </td>
          </tr>
        </tbody>
      </table>
    </template>
    <template #author>Diego Bejarano</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import UsageBlock from "@/components/UsageBlock.vue";
  import PageContents from "@/components/PageContents.vue";
  import { BBreadcrumb, BBreadcrumbItem, BToast } from "bootstrap-vue-next";

  export default {
    name: "DocsTemplatesComponentName" /* example: Docs--Folder--ComponentName */,
    components: {
      Layout,
      CodeBlock,
      UsageBlock,
      PageContents,
      BBreadcrumb,
      BBreadcrumbItem,
      BToast,
    },
    inject: ["mq"],
    data() {
      return {
        pageTitle: "Toast",
        active: true,
      };
    },
  };
</script>
