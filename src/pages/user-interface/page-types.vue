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
        Page types illustrate likely arrangements of content and functionality
        that facilitate specific user tasks and can guide thinking about how to
        break down a complex user workflow across pages.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <p>
            Page types can help you think about how to group and organize
            content and functionality to ensure that your users can find what
            they need, when they need it. Organizing the content and
            functionality across a series of pages and within pages in alignment
            to the steps your user is taking to complete their goals will make
            for a useful and usable product or service.
          </p>

          <PageCallout>
            These page types
            <strong>aren’t intended to be exhaustive or prescriptive</strong>,
            instead page types are intentionally vague. The goal here is to
            facilitate thinking about how a page should be laid out and what
            components it should have. This collection of page types were
            created during the development of an enterprise application (the
            Kuali Student Information System) and therefore skew towards
            administrative functions. Your product or service may likely utilize
            different page types which are variations or combinations of those
            we present here.
          </PageCallout>

          <SHeading level="2">How do you choose the right page type?</SHeading>
          <ul>
            <li>
              <strong>Be clear on a page’s purpose</strong>
              <ul>
                <li>
                  Ask yourself at each stage “what is the user trying to get
                  done here/now?”
                </li>
                <li>
                  Look at example page types that might match the purpose of
                  your page.
                </li>
                <li>
                  Consider what features of a page will support that task or
                  goal.
                </li>
              </ul>
            </li>
            <li>
              <strong>Guide the user</strong> — on each page have:
              <ul>
                <li>A clear call to action</li>
                <li>
                  A clear hierarchy — create a page structure using groups and
                  headers to help users parse the page content
                </li>
                <li>A clear path through the page</li>
                <li>Clear feedback when action is taken</li>
              </ul>
            </li>
            <li>
              <strong>Consider timing</strong> — Consider whether a user is
              completing a task or series of tasks in one sitting or over
              multiple sessions.
            </li>
            <li>
              <strong>Simplify the flow</strong> — Page types are a useful
              abstraction, but don’t lose sight of the higher level goals;
              consider:
              <ul>
                <li>Are there places where steps can be eliminated?</li>
                <li>Does each page serve to aid the user in their goal?</li>
              </ul>
            </li>
          </ul>

          <SHeading level="2">Design Recommendations</SHeading>

          <SHeading level="3">Start Pages</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/start.png" />
          </div>

          <p>
            Start pages are intended to suggest and facilitate paths to tasks
            and information deeper in the product or service hierarchy.
          </p>
          <h4>Purpose</h4>
          <ul>
            <li>Understand where to start</li>
            <li>Understand what is possible/available</li>
            <li>
              Quickly find content, a function, or an object in the product or
              service
            </li>
          </ul>
          <h4>Typical Features</h4>
          <ul>
            <li>Prominently featured search tool</li>
            <li>A hierarchy for browsing or drilling down</li>
            <li>Option to initiate one of many tasks</li>
          </ul>

          <SHeading level="3">Search Page</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/search.png" />
          </div>

          <p>
            Search pages support exploratory or targeted browsing of content or
            objects that lives in a product or service.
          </p>
          <h4>Purpose</h4>
          <ul>
            <li>Find an object or collection of objects</li>
            <li>Enter criteria to return relevant records from a data set</li>
            <li>
              Unlike Manage pages, search results typically do not allow for
              bulk actions
            </li>
          </ul>
          <h4>Typical Features</h4>
          <ul>
            <li>Parameter inputs (editable)</li>
            <li>Number of results</li>
            <li>Matching results</li>
            <li>Pagination</li>
          </ul>
          <h4>Variations</h4>
          <ul>
            <li>
              <strong>Simple Search</strong> — A navigational search for an
              object using only one text input to perform the most likely kind
              of search, sacrificing control to minimize complexity for a user
            </li>
            <li>
              <strong>Advanced Search</strong> — A navigational search for
              content based on multiple criteria using more than one text input
            </li>
            <li>
              <strong>Faceted Search</strong> — A search whose results are
              filtered by selecting from categorized attributes contained within
              the result set
            </li>
          </ul>

          <SHeading level="3">Item View Page</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/view.png" />
          </div>

          <p>
            Item View pages present the details of an object or collection of
            objects, or items.
          </p>
          <h4>Purpose</h4>
          <p>View a read-only version of a data object</p>
          <h4>Typical Features</h4>
          <ul>
            <li>Object type</li>
            <li>Object status</li>
            <li>
              For objects with many attributes, highlight or summary of the most
              important attributes
            </li>
            <li>
              Controls for manipulating the object (e.g. changing state,
              editing)
            </li>
            <li>Breadcrumbs which describe location in object hierarchy</li>
          </ul>
          <h4>Variations</h4>
          <ul>
            <li>
              <strong>Quick View</strong> — A dialog containing a brief excerpt
              of a read-only record, used as a reference to help complete a
              larger task in the main view
            </li>
            <li>
              <strong>Multi-Page View</strong> — A read-only display of record
              with a large number of attributes and related data, divided by
              tabs or other navigation into segments visible one at a time
            </li>
            <li>
              <strong>Compare</strong> — A two-column read-only display of a
              record and a previous version or a peer record for side-by-side
              comparison
            </li>
            <li>
              <strong>Preview</strong> — A view of an object or collection that
              reveal the consequences of an action before the action is
              committed
            </li>
          </ul>

          <SHeading level="3">Item Edit Page</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/edit.png" />
          </div>

          <p>
            Edit pages allow the updating of the data or details of an existing
            object or record. They may also allow creation of a new record or
            object.
          </p>
          <h4>Purpose</h4>
          <ul>
            <li>Collect information to create a new record</li>
            <li>Change the details or data of an existing object</li>
          </ul>
          <h4>Typical Features</h4>
          <ul>
            <li>Form fields</li>
            <li>Input validation</li>
            <li>One primary button & a way to abort changes</li>
            <li>Requiredness indication</li>
            <li>Disclosures masking additional inputs</li>
          </ul>
          <h4>Variations</h4>
          <ul>
            <li>
              <strong>Quick Edit</strong> — A dialog containing a brief set of
              critical fields used to collect information to update an existing
              record, as an as-needed change to information visible in the main
              view.
            </li>
            <li>
              <strong>Multi-Page Edit</strong> — A long form distributed across
              multiple pages navigated using tabs or some other navigation
              mechanism (e.g. a wizard).
            </li>
            <li>
              <strong>In-place Edit</strong> — An entire page or section of a
              page or container that toggles between static information and
              editable fields without a page load.
            </li>
          </ul>

          <SHeading level="3">Manage Page</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/manage.png" />
          </div>

          <p>
            Manage pages allow users to perform multiple or bulk actions on
            lists of one or more like entities.
          </p>
          <h4>Purpose</h4>
          <p>Perform bulk operations on a group of records or objects</p>
          <h4>Typical Features</h4>
          <ul>
            <li>
              A command toolbar includes actions a user can take to affect one
              or more items in the group
            </li>
            <li>
              An optional detail panel includes read-only information about the
              group, to use as a reference to the bulk actions
            </li>
            <li>
              When applicable, each item in the list can include links to its
              own operations (e.g., Edit item, Delete item).
            </li>
          </ul>

          <SHeading level="3">Confirm</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/confirm.png" />
          </div>

          <p>
            Confirms are pages that are displayed after an action has been
            requested, but before it is initiated, to communicate the
            consequences of that action.
          </p>
          <h4>Purpose</h4>
          <p>
            Force an acknowledgement of the consequence of continuing an action
          </p>
          <h4>Typical Features</h4>
          <ul>
            <li>Typically presented as a dialog</li>
            <li>Explanation of consequence</li>
            <li>Primary action button, with option to cancel</li>
          </ul>
          <h4>Variations</h4>
          <ul>
            <li>
              <strong>Configurable Confirm</strong> — An editable form allowing
              the scope or configuration of a requested action to be changed
              before proceeding to initiate that action or process.
            </li>
          </ul>

          <SHeading level="2">Resources</SHeading>
          <ul>
            <li>
              <RouterLink to="/user-interface/forms"
                >Designing Forms</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import PageCallout from "@/components/PageCallout.vue";
  import {
    BCard,
    BLink,
    BBreadcrumb,
    BBreadcrumbItem,
  } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "DocsIndex",
    components: {
      Layout,
      PageCallout,
      BCard,
      BLink,
      BBreadcrumb,
      BBreadcrumbItem,
      SHeading,
    },
    data() {
      return {
        pageTitle: "Page Types",
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
