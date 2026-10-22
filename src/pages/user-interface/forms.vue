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
        Forms are how users enter and submit data to accomplish a task, from a
        single search field to a multi-step application.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2">Guiding Principles</SHeading>
          <SHeading level="3">General Approach</SHeading>
          <ul>
            <li>
              <strong>User-centered</strong> — Arrange form elements in a way
              that makes most sense to the person providing the data
            </li>
            <li>
              <strong>Use smart defaults</strong> — Use sane defaults to allow
              users to accept pre-filled input and to avoid redundant manual
              data entry.
            </li>
            <li>
              <strong>Only ask what is needed</strong> — Remove unnecessary data
              requests to provide the shortest path to completion.
            </li>
            <li>
              <strong>Allowing flexible and forgiving input</strong> — Interpret
              a variety of formats as valid data. Permit data to be refined in
              later sessions to expedite task completion.
            </li>
            <li>
              <strong>Validate real-time</strong> — If possible, validate fields
              on loss of focus or real-time. This is especially important for
              mobile devices where limited screen real estate makes evaluating
              and fixing page-level errors especially challenging.
            </li>
            <li>
              <strong>Consistent layout</strong> — As long as it makes sense for
              the context, use a consistent layout (and therefore familiar) to
              help users expedite form completion.
            </li>
            <li>
              <strong>Code semantically for accessibility</strong> —
              <a href="http://www.washington.edu/accessibility/checklist/forms/"
                >Make forms accessible for all users</a
              >
              (e.g. making sure every field has a label, whether it is visible
              or not).
            </li>
          </ul>
          <SHeading level="3">Mobile Considerations</SHeading>
          <ul>
            <li>
              <strong>Maximize selection</strong> — Minimize users having to
              type by instead allowing them to make selections (e.g. use date
              selectors where possible).
            </li>
            <li>
              <strong>Field Zooming</strong> — Allow for users to zoom in on the
              page.
            </li>
            <li>
              <strong>Leverage semantic html field types</strong> — Mobile
              browsers will translate native html field types into inputs better
              suited for touch screens (e.g. iOS scrolling pickers rather than
              dropdowns).
            </li>
            <li>
              <strong>Avoid Dropdown Menus</strong> — When possible, consider
              alternatives like radio controls, button inputs, date pickers,
              sliders, toggles, and steppers as alternates.
            </li>
            <li>
              <strong>Labels above fields</strong> — Place labels above form
              fields, and avoid using placeholder text as labels.
            </li>
          </ul>

          <SHeading level="2">Design Recommendations</SHeading>

          <SHeading level="3">Form Layouts</SHeading>
          <p>
            Forms layouts organize input elements in ways that are optimized for
            a particular context and for the type of task a user is trying to
            accomplish.
          </p>

          <SHeading level="4">Fastest Completion</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/fastest-completion.png" />
          </div>

          <SHeading level="5">Purpose</SHeading>
          <ul>
            <li>
              Provide fastest form completion on familiar forms by reducing eye
              fixations (movement)
            </li>
          </ul>
          <SHeading level="5">Typical Features</SHeading>
          <ul>
            <li>Form fields are stacked in a single vertical column</li>
            <li>Form labels are above each form fields</li>
            <li>
              Buttons (for form submission/completion) typically left-aligned at
              the end of the list of input fields
            </li>
          </ul>

          <SHeading level="4">Unfamiliar Forms</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/unfamiliar-form.png" />
          </div>

          <SHeading level="5">Purpose</SHeading>
          <ul>
            <li>
              Facilitate easier scanning of labels for understanding of the
              form's purpose
            </li>
          </ul>
          <SHeading level="5">Typical Features</SHeading>
          <ul>
            <li>Form fields are stacked in a single vertical column</li>
            <li>
              Form Labels are right-justified, positioned to the left of the
              input resulting in a side-by-side layout of labels and input field
              pairs
            </li>
          </ul>

          <SHeading level="4">Mini Form</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/mini-form.png" />
          </div>

          <SHeading level="5">Purpose</SHeading>
          <ul>
            <li>
              Conserve vertical space and by organizing a few inputs in one row
              alongside a button
            </li>
          </ul>
          <SHeading level="5">Typical Features</SHeading>
          <ul>
            <li>A small number (1-3) inputs</li>
            <li>Form Labels are placed above each field</li>
            <li>
              Buttons are on the right in the same row as the input fields
            </li>
          </ul>

          <SHeading level="4">Multiple-Column Form</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/multiple-column.png" />
          </div>

          <SHeading level="5">Purpose</SHeading>
          <ul>
            <li>
              Conserve vertical space by organizing form inputs into two or more
              columns
            </li>
            <li>
              Callout: Be sure to implement tab ordering such that it matches
              user’s expectations
            </li>
          </ul>
          <SHeading level="5">Typical Features</SHeading>
          <ul>
            <li>Two or more columns of form fields</li>
            <li>
              Labels are on the top of the inputs, to conserve vertical space
            </li>
          </ul>

          <SHeading level="4">Numeric Data Entry</SHeading>
          <div class="layout-thumbnail">
            <img src="/images/design-guides/numeric-stack.png" />
          </div>

          <SHeading level="5">Purpose</SHeading>
          <ul>
            <li>
              To improve accuracy and efficiency in data entry, tallying, or
              comparison of values
            </li>
          </ul>
          <SHeading level="5">Typical Features</SHeading>
          <ul>
            <li>Contain only or primarily numeric data entry</li>
            <li>Text is right-justified within the fields</li>
            <li>Labels to the right of the text inputs</li>
          </ul>

          <SHeading level="3">Organizing Within Layouts</SHeading>
          <ul>
            <li>
              <strong>Use containers</strong> — Use headers to create sections
              of input fields within a larger form to increase quick
              understanding of its purpose by showing how sets of data are
              related.
            </li>
            <li>
              <strong>Indentation</strong> — Show parent-child relationships
              between fields or groups of fields with indentation.
            </li>
            <li>
              <strong>Fields groups</strong> — Some closely related fields (e.g.
              First and last name) can be treated as a single input and are
              often presented in a horizontal row. In such cases, one label is
              shown as the prompt and it should be semantically defined in code
              as a <a href="#field-group">field group</a>.
            </li>
            <li>
              <strong>Responsive enabling</strong> — Keep forms short and users
              focused by only allowing interaction with form elements needed to
              start a task.
              <ul>
                <li>
                  On page load, disable form elements that are unnecessary for
                  the initial step, subsequently enabling those elements as they
                  become relevant.
                </li>
                <li>
                  Components are always visible, whether enabled or disabled, to
                  allow the user to understand the scope of the task. This makes
                  for a more stable interface than dynamically revealing new
                  fields or options through Progressive Disclosures.
                </li>
                <li>
                  Controlling fields must be placed above or before (left of)
                  dependent content.
                </li>
                <li>
                  If the controlling field has no default selection, all
                  dependent fields may remain hidden until the user makes a
                  selection.
                </li>
              </ul>
            </li>
            <li>
              <strong>Progressive disclosure</strong> — Disclosures are used to
              hide less-pertinent information on content-heavy pages (i.e..
              content that is relevant but not critical to the purpose) in order
              to emphasize the most critical parts.
              <ul>
                <li>
                  Disclosures are always hidden by default. If the content
                  shouldn’t be hidden initially, consider a different design
                  component. Disclosures should not include any required
                  information in the hidden content, as it causes can user
                  confusion or validation errors.
                </li>
                <li>
                  Use a Disclosure only when it doesn't prevent the user from
                  completing their task.
                </li>
              </ul>
            </li>
            <li>
              <strong>Multiple page forms</strong> should be reserved for cases
              where there are many fields that can be broken into smaller
              logical sections that do not need to be done in order.
            </li>
          </ul>

          <SHeading level="3">Form Input Fields</SHeading>
          <p>
            A form field has several elements that may be included that can help
            someone input data successfully — quickly and without error.
          </p>
          <ul>
            <li>
              <strong>Form Label</strong> — Text that
              <strong><em>defines the data object</em></strong> represented by
              the form field
              <strong><em>or the purpose of the field</em></strong
              >. It is located above or to the left of the input. To
              <a href="http://www.washington.edu/accessibility/checklist/forms/"
                >accommodate form accessibility requirements</a
              >, every field has to have a label, whether it is visible or not.
            </li>
            <li>
              <strong>Watermark</strong> — Temporary text displayed within text
              fields that give <strong><em>example of data entry</em></strong
              >. Watermarks disappear when data is present, making it useful
              only to help populate blank fields. Because it can be confused
              with actual data, the styling should clearly distinguish a
              watermark from user data.
            </li>
            <li>
              <strong>Requiredness Indicator</strong> — Labeling that help users
              know <strong><em>what must be filled</em></strong> in to complete
              a form successfully and avoid multiple form submissions. People go
              on to a form expecting to fill in everything, so it is better to
              limit the form to required input, but do mark any optional fields
              that are included in the form.
              <ul>
                <li>
                  If <strong><em>all fields are required</em></strong
                  >, indicate with a form-level message (e.g., “All fields are
                  required”) placed before any input.
                </li>
                <li>
                  If
                  <strong
                    ><em>most questions on a form require an answer</em></strong
                  >, indicate the ones that are optional using an "Optional"
                  text next to the optional field labels.
                </li>
                <li>
                  If
                  <strong><em>few of the form fields are required</em></strong
                  >, use text or asterisk to indicate required fields. If
                  required fields are indicated with an asterisk, provide a
                  legend to explain that meaning.
                </li>
                <li>
                  Required or optional indicators should be associated with the
                  label, not the input field.
                </li>
              </ul>
            </li>
            <li>
              <strong>Instructional Text</strong> — A clear and concise
              description that provides additional
              <strong
                ><em
                  >information about how to interact with the form field</em
                ></strong
              >
              when it may not be derived from labels and context (e.g. if there
              are multiple ways of interpreting a label, or if there is
              information about how the inputted data will be used).
            </li>
            <li>
              <strong>Constraint Text</strong> — Guides placed below the input
              to specify the <strong><em>input format required</em></strong> for
              valid data entry.
            </li>
            <li>
              <strong>Input Validation</strong> —
              <strong><em>Clear feedback messaging</em></strong> either at loss
              of field focus or upon submitting the form that provide specifics
              of what went wrong and/or how to fix it so that valid input is
              entered.
            </li>
          </ul>

          <SHeading level="3">Buttons</SHeading>
          <p>Buttons are used to initiate actions.</p>
          <SHeading level="4">Guiding Principles</SHeading>
          <ul>
            <li>
              <strong>Actions not navigation</strong> — Use buttons to initiate
              action taken (saving, submitting, deleting, launching a process),
              rather than for simple navigation within a system or product.
            </li>
            <li>
              <strong>Make them look clickable</strong> — Style buttons so that
              they communicate their clickability and so they are easily
              distinguishable from other interface elements. While conventions
              are slowly changing, a well-established convention is to use a
              border, gradients, rounded corners, and drop shadow to communicate
              a button’s clickability.
            </li>
            <li>
              <strong>Align with labels</strong> — In general, buttons for
              submitting forms should align with the labels to minimize eye
              movements. As a default, using the default Fastest Completion
              layout, form submission controls should be left-aligned at the end
              of the list of input field fields.
            </li>
            <li>
              <strong>Fixed footers</strong> — Buttons may also appear in a
              fixed or “sticky” footer.
            </li>
          </ul>
          <SHeading level="4">Button Styles</SHeading>
          <ul>
            <li>
              <strong>Primary Button</strong> — The Primary Button represents
              the main action being taken on a page or dialog. It should be
              accompanied by an alternate escape action (e.g., a "Cancel" link).
              <ul>
                <li>
                  At most there should be only one primary button on a page or
                  dialog — it should represent the likely or “happy path”
                  action.
                </li>
                <li>
                  Dialogs don’t need to have a primary button, but if there is
                  more than one button in a dialog, it should use a primary
                  button to help the user find the “happy path”.
                </li>
              </ul>
              <div class="component-image">
                <img src="/images/design-guides/primary_button.png" />
              </div>
            </li>
            <li>
              <strong>Secondary Button</strong> — A Secondary Button is designed
              to draw less visual attention than the Primary Button, as they do
              not reflect the main task of the page.
              <ul>
                <li>
                  There may be multiple “secondary” buttons on a page or in a
                  dialog.
                </li>
              </ul>
              <div class="component-image">
                <img src="/images/design-guides/secondary_button.png" />
              </div>
            </li>
            <li>
              <strong>Icon Button</strong> — An icon button relies on a small
              image to convey the purpose of the action. It may include a text
              label next to the image.
              <div class="component-image">
                <img src="/images/design-guides/icon_button.png" />
              </div>
            </li>
            <li>
              <strong>Toolbar Button</strong> — A toolbar might be used above a
              table to facilitate bulk actions. Toolbar buttons contain an icon
              above the text.
            </li>
            <div class="component-image">
              <img src="/images/design-guides/toolbar_button.png" />
            </div>
          </ul>
          <SHeading level="3">Feedback Messages</SHeading>
          <p>
            Content on the page (typically by input fields and/or at the top of
            the page) that informs the user of input errors, successful
            submissions, or warnings and outcomes of requested actions.
          </p>
          <p class="callout">
            Be consistent in how these are presented; use semantic code, icons,
            and colors to communicate what type of message is being given.
          </p>
          <ul>
            <li>
              <strong>Success</strong> (Green) — Information displayed when a
              hidden user action has been successfully completed.
            </li>
            <li>
              <strong>Warning</strong> (Yellow) — Text to communicate future
              consequences of current data entry that do not prevent a task from
              completing.
            </li>
            <li>
              <strong>Error</strong> (Red) — Text to communicate user mistakes
              that prevent a task from completing.
            </li>
            <li>
              <strong>Information</strong> (Teal) — Text describing non-critical
              information to help the user understand the current context.
            </li>
          </ul>

          <SHeading level="2">Resources</SHeading>
          <ul>
            <li>
              <a href="http://www.washington.edu/accessibility/checklist/forms/"
                >Creating Accessible Forms — UW-IT Accessible Technology
                Checklist</a
              >
            </li>
            <li>
              <a href="https://uxplanet.org/mobile-form-usability-2279f672917d"
                >Mobile Form Usability</a
              >
            </li>
            <li>
              <a href="https://www.lukew.com/ff/entry.asp?1950"
                >Dropdowns Should be the UI of Last Resort</a
              >
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
        pageTitle: "Forms",
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
