<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/user-interface"
          >Interface Design Guides</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Labels are a means to communicate to users the purpose, type, status,
        function, hierarchy, or requirements of parts of a system or product.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2">How should you write interface labels?</SHeading>
          <ul>
            <li>
              <strong>Leverage labels</strong> — Labels are a particularly
              effective way to communicate to a users as they use your product
              or system.
            </li>
            <li>
              <strong>Narrative + terminology</strong> — Pay special attention
              to using the correct
              <RouterLink to="/user-interface/terminology"
                >terminology</RouterLink
              >
              and
              <a href="/process-guides/create#narrative"
                >building narrative cohesiveness</a
              >
              when labeling elements.
            </li>
            <li>
              <strong>Be succinct</strong> — Keep labels short, and to the
              point.
            </li>
            <li>
              <strong>Be specific</strong> — Make sure labels are specific
              enough that they help disambiguate between similar elements or
              tasks.
            </li>
            <li>
              <strong>Make them accessible</strong> — Make sure that labels
              clearly communicate enough meaning on their own (relying only on
              the page title/purpose for additional context) so that they are
              understandable when accessed by an accessible technology such as a
              screen reader.
            </li>
          </ul>

          <SHeading level="2">Design Recommendations</SHeading>
          <SHeading level="3">Page Titles</SHeading>
          <SHeading level="4">Purpose</SHeading>
          <p>
            Page titles describe the context and function of the current page.
          </p>
          <SHeading level="4">Guiding Principles</SHeading>
          <ul>
            <li>
              The page title can be worded as either a task or an object, to
              best reflect the user's most likely mental map of the web page
              content.
            </li>
            <li>
              When the page is depicted as a task, the title should be written
              as an action with a clear goal, using simple language.
            </li>
            <li>
              When the page is an object, the title should include the
              information that best identifies the page to the user.
            </li>
            <li>
              If there is no object name, but will be when the initial step is
              completed (e.g., drafting a course proposal), use the task form
              until the object can be identified. This gives the user feedback
              that the system has received their input.
            </li>
          </ul>

          <SHeading level="3">Header Labels</SHeading>
          <SHeading level="4">Purpose</SHeading>
          <p>
            Headers are the main way to group and contain other components,
            helping to arrange content in a meaningful way on a page, or even
            within another container.
          </p>
          <SHeading level="4">Guiding Principles</SHeading>
          <ul>
            <li>
              Pay attention to whether a header is acting as a label for grouped
              content (for which it should be worded as an object rather than a
              task), and when it is acting as a call to action or guiding a user
              through a series of steps (for which it should be worded as a
              task).
            </li>
          </ul>

          <SHeading level="3">Form Field Labels</SHeading>
          <SHeading level="4">Purpose</SHeading>
          <p>
            Form field labels describe what data should be input into a form
            field.
          </p>
          <SHeading level="4">Guiding Principles</SHeading>
          <ul>
            <li>
              <strong>Objects</strong> — Generally, form fields represent
              objects, not actions, and should be labeled as such. An common
              exception however are search parameter fields, which are by
              convention labeled by the task (Search).
            </li>
            <li>
              <strong>Association with field</strong> - Use text style and
              placement, rather than punctuation (e.g., colon), to associate a
              label with its form field or field group.
            </li>
            <li>
              <strong>Constraints, Instructions, Help</strong> — Don’t use the
              form label to communicate input constraints, instructions, or
              other help text.
            </li>
          </ul>
          <SHeading level="3">Button Labels</SHeading>
          <SHeading level="4">Purpose</SHeading>
          <p>
            Button labels describe what action will result from pressing a
            button.
          </p>
          <ul>
            <li>
              <strong>Action + Object</strong> — Default labels for buttons
              should be in the form: &lsaquo;action&rsaquo; + &lsaquo;object
              type&rsaquo; (e.g. “Save Calendar”).
            </li>
            <li>
              <strong>Space constraints</strong> — If there is a space
              constraint, label a button only with the action (e.g. “Save”).
            </li>
            <li>
              <strong>Articles</strong> — By default, articles should not be
              used in labels. Use only when the article is necessary to
              communicate the function of the button (e.g., “Release to
              Departments”).
            </li>
            <li>
              <strong>Icons on buttons</strong>
              <ul>
                <li>
                  <strong>One symbol per function</strong> — Each unique symbol
                  should map to a unique and specific function, to call
                  attention to an action.
                </li>
                <li>
                  <strong>Accessibility</strong> — In cases where the icon is
                  displayed with accompanying text, care must be given to
                  <a
                    href="http://www.washington.edu/accessibility/checklist/images/"
                    >keep the icon "hidden" from screen readers</a
                  >
                  so the action text isn't announced twice.
                </li>
              </ul>
            </li>
          </ul>

          <SHeading level="2">Resources</SHeading>
          <ul>
            <li>
              <RouterLink to="/user-interface/terminology"
                >Terminology</RouterLink
              >
            </li>
            <li>
              <RouterLink to="/process-guides/create"
                >Building narrative cohesiveness</RouterLink
              >
            </li>
            <li>
              <a href="form-layouts.html#form-inputs">Form Input elements</a>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <template #author>William Washington</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import {
    BCard,
    BBreadcrumb,
    BBreadcrumbItem,
    BLink,
  } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "DocsIndex",
    components: {
      Layout,
      BCard,
      BBreadcrumb,
      BBreadcrumbItem,
      BLink,
      SHeading,
    },
    data() {
      return {
        pageTitle: "Labels",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
