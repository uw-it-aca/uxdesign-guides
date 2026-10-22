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
        The visual style of an interface - the use of visual treatments
        including patterns, gradients, and color hue, tint, and shading.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <p>
            Color can communicate meaning, improve decision-making, and guide
            users through a system. In addition, the visual style can
            communicate the voice and personality of an organization, through
            the intentional use of visual style
          </p>

          <SHeading level="2">Guiding Principles</SHeading>
          <ul>
            <li>
              <strong>Minimize Decoration</strong> — Reduce the cognitive need
              to interpret and parse content by using visual elements (e.g.,
              lines and drop shadows) sparingly.
            </li>
            <li>
              <strong>Be Consistent & Reinforce Meaning</strong> — Associate a
              single color or visual style with objects, states, or functions
              that have the same (or very similar) meanings to lessen the
              cognitive load on users (e.g. blue indicates an action). Whenever
              possible, leverage existing color palettes or styles to reinforce
              their meaning.
            </li>
            <li>
              <strong>Accessibility</strong> — Don’t rely on color alone to
              convey information. Colors that are used need a contrast ratio of
              at least 4.5:1 (accessibility WCAG 2.0 AA criteria 1.4.3).
            </li>
          </ul>

          <SHeading level="2">Design Recommendations</SHeading>
          <SHeading level="3">Color Use</SHeading>
          <ul>
            <li>
              <strong>Blue</strong> — actionable elements (i.e., links, buttons,
              select tables)
            </li>
            <li>
              <strong>Gray</strong> - disabled states for actionable elements;
              “Draft” state for data objects in a state management flow
            </li>
            <li>
              <strong>Yellow</strong> — warnings or critical changes that
              suggest future interaction; “Suspended” state for data objects in
              a state management flow
            </li>
            <li>
              <strong>Red</strong> — error messages and conditions that block a
              task from completion; “Canceled” state for data objects in a state
              management flow
            </li>
            <li>
              <strong>Green</strong> — success messages to indicate a task was
              completed; “Completed” state for data objects in a state
              management flow
            </li>
            <li>
              <strong>Teal</strong> — relevant but non-critical information;
              “Ready” state for data objects in a state management flow
            </li>
          </ul>
          <SHeading level="3">Icons</SHeading>
          <ul>
            <li>
              <strong>One symbol per function</strong> — Each unique symbol
              should map to a unique and specific function, to call attention to
              an action.
            </li>
            <li>
              <strong>Use as buttons or links</strong> — Icons can be used for
              either buttons or links as a space-saving technique. In these
              cases, be sure to use a tooltip for an icon label (where hovering
              over an action icon will produce a tooltip containing its label
              (e.g., Edit)).
            </li>
            <li>
              <strong>Put next to object identifier</strong> — Information icons
              should be placed immediately next to the identifier of the object
              they describe (typically on the left for functions or menu
              items).JJ
            </li>
            <li>
              <strong>Sometimes visual subtle</strong> — Information icons
              should avoid drawing undue attention away from other elements
            </li>
            <li>
              <strong>High contrast icons</strong> — Icons with high contrast
              relative to other elements on the page should be used only when it
              is vital to draw the user’s eye to critical information (e.g.,
              form validation or error message icons)
            </li>
            <li>
              <strong>Accessibility</strong> — In cases where the icon is
              displayed with accompanying text, care must be given to
              <a
                href="http://www.washington.edu/accessibility/checklist/images/"
                >keep the icon hidden from screen readers</a
              >so the action text isn't announced twice.
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
        pageTitle: "Color & Icons",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: override layout pageTitle prop
      document.title = this.appName;

      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
