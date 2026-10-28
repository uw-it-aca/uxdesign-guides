<template>
  <Layout :page-title="pageTitle" :author="author">
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
        Containers are a means to group content, components, and other
        containers into cohesive units on a page.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2">Design Recommendations</SHeading>

          <SHeading level="3">Headers</SHeading>
          <p>
            Headers are hierarchical and so represent nested and peer
            relationships of content blocks on a page, or even within another
            container. Creating a cohesive and
            <a
              href="http://webaim.org/techniques/semanticstructure/#contentstructure"
              >semantic html heading structure</a
            >
            (e.g. &lsaquo;h1&rsaquo;, &lsaquo;h2&rsaquo;, &lsaquo;h3&rsaquo;) is
            the first step towards organizing content and making your content
            accessible.
          </p>
          <SHeading level="4">Guiding Principles</SHeading>
          <ul>
            <li>
              First determine the heading structure for a page that represents
              the organization of the page content and then think about the
              visual design of the headers in a subsequent design iteration.
            </li>
            <li>
              Pay special attention to
              <RouterLink to="/user-interface/labels">labels</RouterLink> and
              <RouterLink to="/user-interface/terminology"
                >terminology</RouterLink
              >
              and to building narrative cohesiveness when using headers.
            </li>
          </ul>
          <SHeading level="4">Typical Features</SHeading>
          <ul>
            <li>
              As with any hierarchy, each header level (save for H1) should have
              at least one peer.
            </li>
            <li>
              Some headings can be determined to be redundant to the visual
              presentation of page content. In this case,
              <a href="http://webaim.org/techniques/css/invisiblecontent/"
                >use CSS to move visually redundant headers offscreen</a
              >
              for non-visual audiences.
            </li>
          </ul>
          <SHeading level="3">Callouts</SHeading>
          <p>
            Callouts are areas of a page that visually separate content from the
            rest of the page in order to highlight it. This can be accomplished
            using color, background images or textures, and/or borders.
          </p>
          <SHeading level="4">Guiding Principles</SHeading>
          <ul>
            <li>For them to be effective, use callouts sparingly.</li>
            <li>
              Be consistent with the type of information placed in callouts
              across your product.
            </li>
            <li>
              Pay special attention to accessibility when using panels so that
              an visual distinction or grouping is also communicated at the
              semantic code level.
            </li>
          </ul>
          <SHeading level="4">Typical Features</SHeading>
          <ul>
            <li>Can be used with or without a header.</li>
            <li>
              Background colors or textures, outlines, or font styles provide
              contrast between callouts and the rest of the page.
            </li>
          </ul>

          <SHeading level="3">Disclosures</SHeading>
          <p>
            Disclosures are containers that hide secondary content to help
            simplify the page.
          </p>
          <SHeading level="4">Guiding Principles</SHeading>
          <ul>
            <li>
              Use for separating optional or non-critical content to help users
              focus on what is most important.
            </li>
            <li>
              Can be used for revealing additional content without forcing users
              to another page.
            </li>
          </ul>
          <SHeading level="4">Typical Features</SHeading>
          <ul>
            <li>
              Load in a closed state unless prior user interaction determines
              otherwise (e.g., remembering last saved state).
            </li>
            <li>
              The disclosed content should be indented to align with the
              disclosure label.
            </li>
            <li>
              If you have pages with multiple disclosures, consider providing a
              control to show and hide all disclosures at once.
            </li>
          </ul>

          <SHeading level="3">Tabs</SHeading>
          <p>
            Using a familiar metaphor of file folders, tabs can be used to
            organize content into groups, break down a task into multiple parts,
            present distinct views of an object, or to initiate different paths.
          </p>
          <SHeading level="4">Guiding Principles</SHeading>
          <ul>
            <li>
              Grouping and labeling of content should match user’s expectations
              and mental model of the content. This can be achieved through user
              research methods like card sorting.
            </li>
            <li>
              Tab groups should be limited to 2-6 tabs; beyond that it may be
              helpful to introduce another level of navigation/hierarchy.
            </li>
            <li>
              Tab labels are usually concise and discrete, helping users clearly
              choose which one they are interested in.
            </li>
            <li>
              Tabs should not be used when it is important to communicate a
              process or consumption order (e.g. don’t use when a form on each
              tab needs to be completed in sequence).
            </li>
          </ul>
          <SHeading level="4">Typical Features</SHeading>
          <ul>
            <li>
              Selected tabs are displayed visually distinct from unselected
              tabs.
            </li>
          </ul>
          <SHeading level="3">Dialogs</SHeading>
          <p>
            A dialog is a window or panel that overlays the current page view
            (appearing to float on top of it) to allow users to perform
            supplemental actions, view relevant information, or make a decision
            about the current task while preserving the current context.
          </p>
          <SHeading level="4">Guiding Principles</SHeading>
          <ul>
            <li>
              Use if there is no need to interact with the underlying page's
              contents to conclude a brief task.
            </li>
            <li>
              Use if there is a desire to collect additional information from
              the user without removing the context of the current form.
            </li>
            <li>
              Use to confirm whether or not a requested action with significant
              consequences should be performed (e.g., delete).
            </li>
            <li>
              Use if an element requires additional context or definition that
              is not otherwise visible on the page.
            </li>
          </ul>
          <SHeading level="4">Typical Features</SHeading>
          <ul>
            <li>
              A higher z-index positions the dialog as floating on top of page
              content.
            </li>
            <li>Non-modal dialogs disappear when they lose focus.</li>
            <li>
              Modal dialogs restrict access to the underlying page, forcing the
              user to interact with its contents or until has been dismissed.
              When an action is completed, modal dialogs automatically close.
            </li>
          </ul>
          <SHeading level="4">Variations</SHeading>
          <ul>
            <li>
              <strong>Tooltip (dialog)</strong>
              <ul>
                <li>
                  Tooltips are small non-modal dialogs that are typically
                  triggered by mouseover (hovering) or touch and that typically
                  provide contextual information about an element's label or
                  function, but no other interaction or functionality.
                </li>
                <li>
                  The default orientation of a tooltip is above the item for
                  which it provides context.
                </li>
                <li>
                  Tooltips should not be used for providing validation errors.
                </li>
              </ul>
            </li>
            <li>
              <strong>Popover (dialog)</strong>
              <ul>
                <li>
                  Popovers are non-modal dialogs are typically triggered by
                  mouse clicks or touch and that display a small temporary panel
                  with additional functions or controls next to the anchored
                  content.
                </li>
                <li>
                  The default placement of the popover panel is below the
                  trigger.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </template>
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
        pageTitle: "Containers",
        author: "William Washington",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
