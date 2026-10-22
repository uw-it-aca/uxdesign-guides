<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Elements</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/forms">Forms</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>

    <template #lead>
      Help users recover from form errors by providing visible, clearly
      communicated, and actionable feedback.
    </template>

    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#anatomy">Anatomy</PageContentsItem>
        <PageContentsItem anchor="#principles"
          >Guiding Principles</PageContentsItem
        >
        <PageContentsItem anchor="#overview"
          >Validation Overview</PageContentsItem
        >
        <PageContentsItem anchor="#implementation"
          >Technical Implementation</PageContentsItem
        >
        <PageContentsItem anchor="#accessibility"
          >Accessibility</PageContentsItem
        >
        <PageContentsItem anchor="#references"
          >Resources and References</PageContentsItem
        >
      </PageContents>
    </template>

    <template #content>
      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="anatomy">Anatomy</h2>
      <figure class="d-flex flex-column">
        <img
          src="/images/form-validation-anatomy.png"
          alt=""
          class="img-fluid col-md-11 rounded border"
        />
        <figcaption class="align-self-start">
          <p class="text-muted fst-italic my-2">Form validation anatomy</p>
        </figcaption>
      </figure>
      <ul>
        <li>Page title</li>
        <li>Alert message</li>
        <li>Input error styles</li>
        <li>Input error message</li>
      </ul>
      <p>Refer to <a href="input/">Form Input</a> for input anatomy details.</p>

      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="principles">
        Guiding Principles
      </h2>
      <ul>
        <li>
          <strong>Build form HTML semantically</strong>: use tags and
          attributes: <code>&lt;label&gt;</code>, <code>&lt;fieldset&gt;</code>,
          <code>&lt;legend&gt;</code>, <code>aria-describedby</code>, and
          <code>required</code>.
        </li>
        <li>
          <strong>Prevent errors with clear instructions</strong> – Ideally,
          make the interactions and written instructions clear to prevent errors
          happening in the first place, and help people fix problems as they
          occur.
        </li>
        <li>
          <strong>Use adaptive and forgiving inputs</strong> – Validation should
          be as accommodating as possible of different forms of input.
        </li>
        <li>
          <strong>Preserve user input</strong> – Persist forms on refresh so
          that user data isn’t lost.
        </li>
        <li>
          <strong>Avoid disabling the submit button. </strong>This can be
          confusing, better to rely on client-side errors before and server-side
          errors after submitting.
        </li>
        <li>
          <strong>Disable default browser error messages. </strong>Disable
          default messages with <code>novalidate</code> on
          <code>&lt;form&gt;</code> element, as they are not helpful.
        </li>
      </ul>

      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="overview">
        Validation Overview
      </h2>

      <h3 class="ff-encodesans">When to trigger validation</h3>
      <p>
        Whenever technically feasible, input validation should be triggered at
        the following times, in the following sequence:
      </p>
      <ul>
        <li>
          <strong>On each input, when a user is first inputting data.</strong>
        </li>
        <ul>
          <li>
            <strong>Behavior:</strong> Validate when the user removes focus from
            the input field (onBlur), not during input. Note that some input
            fields with complex constraints (e.g. passwords) may benefit from
            real-time validation, even when a user is first inputting data.
          </li>
        </ul>
        <li>
          <strong>When a user first tries submitting a form </strong>(a
          pseudo-submission)<strong>.</strong>
        </li>
        <ul>
          <li>
            <strong>Behavior: </strong>Clicking submit button does not submit
            form, instead triggers client-side validation. This is to ensure
            client-side validation is complete before submitting the form to the
            server (e.g. in the case where a user had skipped/missed required
            form inputs).
          </li>
        </ul>
        <li>
          <strong>When a form is submitted to the server </strong>(via postback
          or callback).
        </li>
        <ul>
          <li>
            <strong>Behavior: </strong>Clicking submit button submits form to
            server. Either the entire page or portion of the page containing the
            form refreshes with validation triggered.
          </li>
        </ul>
        <li>
          <strong
            >After server-response, when a user is attempting to fix errors.
          </strong>
        </li>
        <ul>
          <li>
            <strong>Behavior: </strong>After server submission, validate
            <em>real-time</em> any input that can be validated real-time.
          </li>
        </ul>
      </ul>
      <p>
        Validating input in all of these ways will require a combination of
        client- and server-side validation, and require using a combination of
        Bootstrap-provided styles and components, and additional code to
        complete the functionality and accessibility requirements.
      </p>
      <h3 class="ff-encodesans pt-3">What to validate</h3>
      <h4 class="ff-opensans pt-2">
        Semantic input types, basic constraints, and patterns
      </h4>
      <p>
        HTML5 introduced new input types and attributes that allow browsers to
        perform client-side validation by default, with no or minimal
        JavaScript. Validation can occur on the following:
      </p>
      <ul>
        <li>Requiredness</li>

        <li>Input type (e.g. email address, phone number)</li>

        <li>
          Input pattern (e.g. must be numbers, must be two letters and one
          symbol)
        </li>

        <li>
          Minimum or maximum length or value (e.g. must be between 1-5
          characters, must be more than 10)
        </li>
      </ul>
      <PreviewBlock>
        <template #preview>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label"
              >Enter course SLN *</label
            >
            <input
              id="validationCustom02"
              type="text"
              class="form-control is-invalid"
              value="ABC"
            />
            <div class="invalid-feedback">Must be numerical</div>
          </div>
        </template>
        <template #description>Numerical-only input constraint </template>
      </PreviewBlock>
      <p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation"
          >Learn more about HTML constraint validation</a
        >. Note that server-side validation is still necessary, but using HTML
        constraint validation improves the user experience with faster feedback.
      </p>
      <h4 class="ff-opensans pt-2">Complex constraints</h4>
      <p>
        It is possible, using a combination of JavaScript and
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api"
          >Constraint Validation API</a
        >
        to implement more complex constraints (e.g. constraints combining
        several fields, or constraints involving complex calculation).
      </p>
      <h4 class="ff-opensans pt-2">Custom business logic</h4>
      <p>
        Some input constraints must be checked via complex logic or via an
        external data set (e.g. unique input).
      </p>
      <PreviewBlock>
        <template #preview>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label"
              >Enter course SLN *</label
            >
            <input
              id="validationCustom02"
              type="text"
              class="form-control is-invalid"
              value="12345"
            />
            <div class="invalid-feedback">
              Sorry, no course exists for this SLN. Please check for errors and
              try again.
            </div>
          </div>
        </template>
        <template #description>Server-side logic input constraint </template>
      </PreviewBlock>
      <h3 class="ff-encodesans pt-3">Ways of validating input</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Validation method</th>
            <th scope="col">What can be validated</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th scope="row">
              Client-side via
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api"
                >Constraint Validation API</a
              >
            </th>
            <td>Semantic input types, basic constraints, and patterns</td>
          </tr>
          <tr>
            <th scope="row">
              Client-side via JavaScript and
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api"
                >Constraint Validation API</a
              >
            </th>
            <td>
              Complex constraints (e.g. constraints combining several fields;
              constraints involving complex calculation)
            </td>
          </tr>
          <tr>
            <th scope="row">Client-side via custom data store (cache)</th>
            <td>Custom business logic</td>
          </tr>
          <tr>
            <th scope="row">Server-side via callback (e.g. AJAX)</th>
            <td>Custom business logic</td>
          </tr>
          <tr>
            <th scope="row">Server-side via postback</th>
            <td>Custom business logic</td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex justify-content-center">
        <figure class="d-flex flex-column col-md-8">
          <img
            src="/images/form-validation-methods.png"
            alt=""
            class="img-fluid mt-3 rounded border"
          />
          <figcaption class="align-self-start">
            <p class="text-muted fst-italic my-2">
              Client- and server-side validation options
            </p>
          </figcaption>
        </figure>
      </div>
      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="implementation">
        Technical Implementation
      </h2>
      <h3 class="ff-encodesans">When a user is first inputting data</h3>

      <h4 class="ff-opensans pt-2">Behavior</h4>

      <p>
        Validate when the user removes focus from the input field (onBlur), not
        during input.
      </p>
      <h4 class="ff-opensans pt-2">Implementation</h4>

      <ul>
        <li>
          Use HTML constraint validation, or callback (e.g. AJAX) validation, if
          performance allows. If callback validation takes longer than 1 second,
          show a progress indicator. Note
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity"
            >custom error messages can be set</a
          >
          using <code>setCustomValidity</code> method. (Custom messages can be
          set for each condition – e.g. range under, value missing, pattern
          mismatch, too long.)
        </li>

        <li>
          Use <code>novalidate</code> on <code>&lt;form&gt;</code> to keep
          browser from running validation via default js methods.
        </li>

        <li>
          Use <code>required</code> attribute, <code>pattern</code> attribute,
          or input types on form inputs.
        </li>

        <li>
          Use <code>was-validated</code> class on loss of focus on input
          <em>parent</em> (likely a <code>&lt;div&gt;</code>), not the whole
          form, otherwise all fields will be validated.
        </li>
      </ul>
      <h3 class="ff-encodesans pt-3">
        When a user first tries submitting a form
        <span class="fw-light">(pseudo-submission)</span>
      </h3>

      <h4 class="ff-opensans pt-2">Behavior</h4>

      <p>
        Clicking the submit button does not submit the form, instead triggers
        client-side validation. This is to ensure client-side validation is
        complete before submitting the form (e.g. in the case where a user had
        skipped/missed required form inputs).
      </p>
      <h4 class="ff-opensans pt-2">Implementation</h4>

      <ul>
        <li>Intercept the submit button (blocking POST)</li>

        <li>
          Use HTML constraint validation, or callback (e.g. AJAX) validation, if
          performance allows. If callback validation takes longer than 1 second,
          show a progress indicator. Note
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/setCustomValidity"
            >custom error messages can be set</a
          >
          using <code>setCustomValidity</code> method. (Custom messages can be
          set for each condition – e.g. range under, value missing, pattern
          mismatch, too long.)
        </li>

        <li>
          Use <code>novalidate</code> on <code>&lt;form&gt;</code> to keep
          browser from running validation via default js methods.
        </li>

        <li>
          Use <code>required</code> attribute, <code>pattern</code> attribute,
          or input types on form inputs.
        </li>

        <li>
          Use <code>was-validated</code> class on <code>&lt;form&gt;</code> or
          parent container of all inputs so validation styles appear on all
          inputs at once
        </li>

        <li>
          <strong>Note:</strong> these changes should result in real-time
          client-side validation (e.g. input type or input pattern constraints),
          not loss of focus – valid state messaging/feedback should appear as
          soon as the issue is resolved (i.e. as the user is typing in the
          input). This helps users identify when an error fixed.
        </li>
      </ul>
      <h3 class="ff-encodesans pt-3">
        When a form is submitted to the server
        <em>(via postback or callback)</em>
      </h3>
      <div class="d-flex justify-content-center">
        <figure class="d-flex flex-column col-md-8">
          <img
            src="/images/validation-summary.png"
            class="img-fluid mt-2 mb-0 w-100 rounded border"
          />
          <figcaption class="text-muted fst-italic my-2">
            Example alert with a summary of errors that includes anchors to
            fields.
          </figcaption>
        </figure>
      </div>
      <h4 class="ff-opensans pt-2">Behavior</h4>

      <p>
        Clicking the submit button submits the form to the server. Either the
        entire page or portion of the page containing the form refreshes with
        validation triggered. Based on the type of submission, specific
        validation implementation varies slightly.
      </p>
      <h4 class="ff-opensans pt-2">Implementation</h4>
      <h5 class="fw-bold ff-open-sans pt-2">
        Full-page Implementation <span class="fw-light">(postback)</span>
      </h5>
      <p>
        After submission and upon page refresh, the page title should indicate
        that it is in an error state, and the top of the page should display an
        Alert component with error messaging that includes a summary of errors.
      </p>
      <ul>
        <li><span class="fst-italic">Browser page title</span></li>
        <ul>
          <li>Prepend “Error - ” to the page title</li>
          <li>
            Screen readers are likely to announce the title immediately when the
            page is loaded, so providing this information up front will make
            users aware that there are problems requiring their attention.
          </li>
        </ul>

        <li><span class="fst-italic">Alert (danger variant)</span></li>
        <ul>
          <li>
            Use H2 inside alert message (note: header will need additional
            styling to match alert message context/text). See Alert component
            for additional a11y implementation.
          </li>
          <li>
            For long and complex forms, consider a validation summary that list
            errors and provides in-page links (anchors) to inputs with errors.
            This may be especially useful for people using screen readers, or
            keyboard navigation, as they are more likely to navigate back and
            forth between the top of the page and errant fields. Moreover, “long
            and complex” depends on the context of use – input dependencies,
            likely complexity of errors, user time constraints, and/or
            familiarity with the form are all factors – but a rule of thumb is
            any form longer than several viewports (e.g. multiple sections with
            headers) could likely benefit from an alert summary with anchors
            down to errant fields.
          </li>
        </ul>

        <li><span class="fst-italic">Form</span></li>
        <ul>
          <li>
            Add <code>was-validated</code> class to <code>&lt;form&gt;</code> so
            validation styles appear.
          </li>

          <li>
            Add <code>.is-invalid</code> class to any invalid form inputs (it is
            not necessary/useful to communicate valid inputs at this stage).
          </li>

          <li>
            Use <code>novalidate</code> on <code>&lt;form&gt;</code> to keep
            browser from running validation via default js methods.
          </li>
        </ul>
      </ul>
      <h5 class="fw-bold ff-open-sans pt-2">
        Partial-page Implementation <span class="fw-light">(callback)</span>
      </h5>

      <p>
        After submission and upon form refresh, the container/panel/area
        containing the submitted form should display an Alert component (at or
        near its top) with error messaging that includes a summary of errors.
      </p>
      <ul>
        <li>
          <span class="fst-italic">Alert (danger variant)</span>
          <ul>
            <li>
              Use H2 inside alert message (note: header will need additional
              styling to match alert message context/text). See Alert component
              for additional a11y implementation.
            </li>
          </ul>
        </li>

        <li><span class="fst-italic">Form</span></li>
        <ul>
          <li>
            Add <code>was-validated</code> class to <code>&lt;form&gt;</code> so
            validation styles appear.
          </li>

          <li>
            Add <code>.is-invalid</code> class to any invalid form inputs (it is
            not necessary/useful to communicate valid inputs at this stage).
          </li>
        </ul>
      </ul>
      <h3 class="ff-encodesans pt-3">
        After server-response, when a user is attempting to fix errors
      </h3>

      <h4 class="ff-opensans pt-2">Behavior</h4>

      <p>
        After server submission, validate <em>real-time</em> any input that can
        be validated real-time – i.e. semantic input types, basic constraints,
        and patterns. Server errors will still require a submission to the
        server; when possible, errors that can be validated via callback should
        be validated real-time. Client- and server-side messaging are displayed
        inline, with client-side messaging first. Server-side messaging will not
        disappear until a valid submission to the server occurs.
      </p>
      <h4 class="ff-opensans pt-2">Implementation</h4>

      <ul>
        <li>
          Keep <code>novalidate</code> on <code>&lt;form&gt;</code> to keep
          browser from running validation via default js methods.
        </li>

        <li>
          Keep <code>was-validated</code> class on <code>&lt;form&gt;</code> so
          validation styles appear on all inputs, and so that HTML constraint
          validation occurs real-time.
        </li>

        <li>
          Similarly, callback (e.g. AJAX) validation can occur real-time if
          performance allows. If callback validation takes longer than 1 second,
          show a progress indicator.
        </li>
      </ul>
      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="accessibility">
        Accessibility
      </h2>

      <ul>
        <li>
          Make sure any error container has <code>role=”alert”</code> and
          <code>tabindex=”0″</code>.
        </li>

        <li>
          <a
            href="https://www.washington.edu/accesstech/websites/forms/#supplemental-help"
            >Use <code>aria-describedby</code></a
          >
          because default
          <a href="https://getbootstrap.com/docs/5.3/forms/validation/"
            >Bootstrap client-side validation</a
          >
          isn't accessible:
        </li>
        <ul>
          <li>
            “currently the client-side custom validation styles and tooltips are
            not accessible, since they are not exposed to assistive
            technologies.”
          </li>

          <li>
            Remedy (Via UWT): “if additional help text is available, it can be
            associated with the form field using the
            <code>aria-describedby</code> attribute and corresponding input ID.
            Screen readers will announce both the label and help text when the
            form field has focus.”
          </li>
        </ul>

        <li>
          Don’t use <code>aria-invalid=”true”</code>. Applying the
          <code>aria-invalid=”true”</code> attribute to a form control will only
          cause the screen reader to announce "invalid" when that control gets
          the focus — and that's all.
        </li>
      </ul>
      <h2 class="display-6 ff-encodesans pt-3 pb-3" id="references">
        Resources and Reference Articles
      </h2>

      <ul>
        <li>
          Accessible forms:
          <a href="https://www.washington.edu/accesstech/websites/forms/"
            >https://www.washington.edu/accesstech/websites/forms/</a
          >
        </li>

        <li>
          Form design best practice:
          <a href="https://uxdesign.uw.edu/interaction/forms.html"
            >https://uxdesign.uw.edu/interaction/forms.html</a
          >
        </li>
      </ul>
    </template>
    <template #author>William Washington</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import PreviewBlock from "@/components/PreviewBlock.vue";
  import PageContents from "@/components/PageContents.vue";

  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsElementsFormsValidation",
    components: {
      Layout,
      PreviewBlock,
      PageContents,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    inject: ["mq"],
    data() {
      return {
        pageTitle: "Form Validation",
      };
    },
  };
</script>
