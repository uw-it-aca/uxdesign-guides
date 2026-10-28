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
        Definitions of words used for labels in an interface.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2"
            >How should you choose words for your interface?</SHeading
          >
          <ul>
            <li>
              <strong>Be Active</strong> — Use calls to action (e.g., Register
              Now) for headers when users are being asked to do something with
              that content, to urge them to take an immediate action. Avoid
              using the progressive form of the verb (e.g., use Edit, not
              Editing).
            </li>
            <li>
              <strong>Specify Objects with Actions</strong> — Include the target
              with action labels, to make it clear what the user is about to do
              (e.g., “Create Course Offering”). Because a “Cancel” link is in
              proximity to a button specifying a specific task and object, it
              does not need to include the object in its own label (e.g.,
              “Cancel Course Offering”).
            </li>
            <li>
              <strong>Soften Headline Tone</strong> — Use articles in page
              titles (e.g., Create a Record) to soften tone and help the reader
              parse key words.
            </li>
            <li>
              <strong>Don’t Be Redundant</strong> — Avoid using "new" with
              "Create" or "Add", as it is redundant.
            </li>
          </ul>

          <SHeading level="2">Design Recommendations</SHeading>
          <SHeading level="3">Action Words</SHeading>
          <ul>
            <li>
              <strong>Add</strong> — Starting or completing an action that will
              change the current user interface (e.g., adding a new row to a
              collection)
            </li>
            <li>
              <strong>Attach</strong> — Link a digital object originating
              outside the system to an internal document (e.g., Attaching a
              document to a course proposal)
            </li>
            <li>
              <strong>Cancel</strong> — Return to the originating page without
              intended action taking place
            </li>
            <li>
              <strong>Create</strong> — Instantiating a new data object (e.g.,
              add a new course offering to the database)
            </li>
            <li>
              <strong>Edit</strong> — Beginning a task to change information
              attached to a document (e.g., Edit course offering)
            </li>
            <li>
              <strong>Join</strong> — Linking two documents within the system to
              each other
            </li>
            <li>
              <strong>Manage</strong> — Manipulating a set of objects, often
              children of the selected primary object, by adjusting the
              relationships between them or performing bulk actions across
              multiple objects (e.g., Manage Course Offering)
            </li>
            <li>
              <strong>Preview</strong> — Displaying an incomplete state of an
              object that is currently being edited or created
            </li>
            <li>
              <strong>Publish</strong> — Changing the state of a document to
              make its contents viewable by an external audience
            </li>
            <li>
              <strong>Remove</strong> — Unlinking a digital object from an
              internal system document
            </li>
            <li>
              <strong>Save</strong> — Completing an edit or create task (e.g.,
              Continue)
            </li>
            <li>
              <strong>Submit</strong> — Sending a document into a workflow,
              without saving data to the server (e.g., Submitting a course
              proposal for review.)
            </li>
            <li>
              <strong>View</strong> — Displaying an entire read-only document
            </li>
            <li>
              <strong>View Details</strong> — Displaying a read-only subset of a
              full document record
            </li>
          </ul>

          <SHeading level="3">Status Words</SHeading>
          <p>
            While each type of data object will likely have its own labels and
            flow for its state management, these are five general states to hold
            consistent meaning across objects:
          </p>
          <ul>
            <li>
              <strong>Completed</strong> — Finished item now in use. No further
              changes expected. ( i.e., Offered, Official, Completed, Scheduled,
              Active, Generated, Published)
            </li>
            <li>
              <strong>Canceled</strong> — Discarded item, with no intent to use
              in the future. ( i.e.,Canceled, Error, Closed, Not Approved)
            </li>
            <li>
              <strong>Draft</strong> — Initial state immediately after creating
              the item ( i.e., Draft, Not Started, Unscheduled)
            </li>
            <li>
              <strong>Ready</strong> — Preparatory state with item awaiting
              review ( i.e., Approved, Planned, In Progress, Enroute,
              Unscheduled, Pending, Not Generated, Open, Final Edits, Publishing
              )
            </li>
            <li>
              <strong>Suspended</strong> — Item on hold, not in use but may be
              in the future ( i.e., Suspended, Superseded, Exempt, Inactive,
              Locked, Retired)
            </li>
          </ul>

          <SHeading level="2">Resources</SHeading>
          <ul>
            <li><RouterLink to="/user-interface/labels">Labels</RouterLink></li>
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
        pageTitle: "Terminology",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
