<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/process-guides"
          >UX Process Guides</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        This step is about translating requirements for a "useful" product into
        a "usable" product.
      </p>
    </template>

    <template #content>
      <div class="row mb-3">
        <div class="col">
          <p>
            Here, you need to think beyond basic functionality and provide the
            user with a narrative through your product that makes sense to them.
            Focus this design effort so that it is both effective and efficient,
            providing known value to users as quickly as possible while keeping
            development costs down.
          </p>
          <p>
            At this point, you should clearly understand the use cases that your
            product needs to support; who you are designing the product for and
            what goals they are trying to accomplish. If these are not crystal
            clear, then please read "<RouterLink to="/process-guides/understand"
              >Understand the Problem Space</RouterLink
            >".
          </p>
          <p>
            Your focus now is to create a holistic solution for these use cases.
            In order to ensure that the product will be a success, you need to
            have:
          </p>
          <ul>
            <li>
              <strong>A unified vision of success.</strong> There needs to be
              mutual trust, collaboration, and ownership across the project team
              & stakeholders in the definition of project success & in the
              process to use to get there. Success should be defined in terms of
              providing a great user-experience to the users of your product.
            </li>
            <li>
              <strong>A clear design process.</strong> A thoughtful, repeatable
              process to ensure that decisions are made with primary value on
              and careful consideration of the impact on the user experience.
            </li>
          </ul>

          <SHeading level="2">Recommended Approach</SHeading>
          <SHeading level="3">Set yourself up for success.</SHeading>
          <ul>
            <li>
              <strong>Focus on the right solution.</strong>
              <ul>
                <li>Solve current, known needs.</li>
                <li>
                  Design and build to support user workflows, not functionality.
                </li>
                <li>
                  Aim for
                  <a href="http://usabilitygeek.com/the-art-of-ux-in-mvp/"
                    >Minimum Viable Product</a
                  >
                  (MVP) & iteration rather than perfection.
                </li>
              </ul>
            </li>
            <li>
              <strong>Cultivate trust in the design process</strong> to ensure
              all decisions are user-focused and rationale based. The whole team
              needs to trust in the design process as a means to make product
              decisions. If you allow room for whim or non-user-focused opinion
              to dictate even the smallest of design decisions, you cannot
              guarantee that the end-product will holistically represent user
              needs. Decisions need to come from ux expertise, as based in
              user-rationale & supported by user-data.
              <ul>
                <li>
                  Conversations revolve around rationale stated in ‘benefit to
                  the user’.
                </li>
                <li>
                  Personal opinions can be stated, but are not valid currency
                  for decision making.
                </li>
              </ul>
            </li>
            <li>
              <strong>Build your product as you design.</strong> Don’t separate
              design from creation. Get the team agilely building toward the
              current design thinking. We follow the
              <a
                href="https://medium.com/ux-uw/iterative-fidelity-development-part-i-of-3-the-ux-of-agile-318d15bdb53e"
                >Iterative Fidelity Development</a
              >
              framework (see the "Design your product" section below) to help
              keep everyone on the same page.
              <ul>
                <li>
                  Communicate often around where design thinking is and what is
                  being built.
                </li>
                <li>
                  Be agile. Start simple and go from there. It is far easier to
                  rebuild an implementation of a simple solution to make it more
                  complex (if there is good user-based rationale for it), rather
                  than rebuild a complex solution to make it simpler.
                </li>
              </ul>
            </li>
          </ul>
          <SHeading level="3">Iteratively build your product.</SHeading>
          <p>
            You will want a thoughtful approach to how you will design your
            product. Don’t confound your design by trying to design everything
            at once. In our process, we treat information & interactions,
            layout, user interaction enhancement, narrative cohesiveness, and
            visual design as distinct iterations. To do this:
          </p>
          <ol>
            <li>
              Understand your audiences'
              <strong>information & interaction</strong> needs.
              <ol type="a">
                <li>
                  For each supported use case, use your "workflow diagrams" (The
                  steps your users will take to realistically set out
                  accomplishing their goal(s), independent of implementation.)
                  to determine the information and basic interaction needs of
                  your users at each step.
                </li>
                <li>
                  Document the information & interaction needs in simple
                  bulleted lists.
                </li>
                <li>
                  Highlight information and interaction needs that are based on
                  risky assumptions.
                </li>
              </ol>
            </li>
          </ol>
          <PageCallout>
            If you are not confident in your assumptions,
            <RouterLink
              to="/process-guides/validate"
              title="How to Validate Your UX"
              >validate them</RouterLink
            >
            with your audiences.
          </PageCallout>

          <ol start="2">
            <li>
              Create a <strong>layout</strong> that supports the needs.
              <ol type="a">
                <li>
                  <strong>Determine the scope.</strong> Ask what information
                  will be supported in your product and what information lives
                  elsewhere.
                </li>
                <li>
                  <strong>Organize the content.</strong> At a high level,
                  determine how information and interactions are organized in
                  your product. This organization should ideally match the
                  workflow diagrams to ensure that the users' information and
                  interaction needs at each step are being presented to them
                  accordingly. The organization of information and interactions
                  can be documented as an Information Architecture diagram or a
                  Pageflow diagram.
                  <ol>
                    <li>
                      Determine how information and interactions will be grouped
                      into pages. Consider what types of pages [LINK] will
                      support the users in their workflow. Document the pages
                      with simple boxes and the page content in simple bulleted
                      lists.
                    </li>
                    <li>
                      Determine how a user will get from page to page, following
                      their movement from initial contact with your product
                      through successful completion of their goals.
                    </li>
                    <li>
                      Have team members use your user workflows to walk through
                      your layout diagram. Correct areas where they become stuck
                      and cannot find critical information or interaction
                      (including navigation).
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Begin building your product semantically.</strong> At
                  this point, developers can see what pages, information, and
                  interactions are needed for the product and can begin building
                  it out in production-ready code. Use the simplest and most
                  semantically-correct HTML elements that you can in order to
                  convey the structure of your product and function of
                  interactive elements.
                </li>
                <li>
                  <strong>Prioritize information on each page.</strong>
                  <ol>
                    <li>
                      Determine relative priority of the information on each
                      page (from your audience's perspective) across your
                      product.
                    </li>
                    <li>
                      Make and implement design decisions that reflect this
                      <a
                        href="https://www.smashingmagazine.com/2015/02/design-principles-dominance-focal-points-hierarchy/"
                        title="Article on information heirarchy"
                        >relative priority of information</a
                      >. This will include style and placement of information.
                      (e,g. creating wireframes).
                    </li>
                    <li>Determine confidence you have in your solutions.</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>

          <PageCallout>
            <p>
              If you are not confident in your solutions at any point,
              <RouterLink
                to="/process-guides/validate"
                title="How to Validate Your UX"
                >validate them</RouterLink
              >
              with your audiences.
            </p>
            <ul>
              <li>
                To determine the best grouping of information to create an
                overall Information Architecture (IA) for your product, use a
                card sorting method.
              </li>
              <li>
                To validate your IA, conduct a task-based study, using lo-fi
                prototypes (e.g. Pageflow diagram, paper prototype, etc) to keep
                users focused on testing how the IA supports them through their
                workflows.
              </li>
              <li>
                To test usability, we recommend conducting a task-based study,
                using lo-fi prototypes (e.g. paper, wireframe fidelity
                interactive prototype, etc) to keep users focused on testing how
                the information layout supports them through their workflows.
              </li>
            </ul>
          </PageCallout>

          <ol start="3">
            <li>
              Look to <strong>enhance the user interactions</strong> across the
              product.
              <ol type="a">
                <li>
                  Always start with the simplest solution for supporting user
                  navigation through your product (for software, starting with
                  vanilla, semantic html).
                </li>
                <li>
                  Look for opportunities to enhance the experience (e.g.
                  find-as-you-type searching), being intentional to ensure that
                  functionality is appropriate and is created semantically.
                </li>
                <li>
                  For websites and applications, all interactions should be
                  keyboard navigable.
                </li>
                <li>Determine confidence you have in your solutions.</li>
              </ol>
            </li>
          </ol>

          <PageCallout>
            If you are not confident in your solutions,
            <RouterLink
              to="/process-guides/validate"
              title="How to Validate Your UX"
              >validate them</RouterLink
            >
            with your audiences, preferably with an interactive product.
          </PageCallout>

          <ol start="4">
            <li>
              Build <strong>narrative cohesiveness</strong> through your
              product.
              <ol type="a">
                <li>
                  Walk through you product to ensure that the content (page
                  titles, headers, content, and instructions) guides the user
                  through a cohesive linear narrative as they complete their
                  goals.
                </li>
                <li>
                  Look for opportunities to more efficiently and effectively
                  communicate information to your users. (e.g. Maybe a diagram
                  or bulleted list conveys information better than paragraphs of
                  text?)
                </li>
                <li>
                  Make sure that the accessibility narrative is fully supported.
                  If there is something conveyed in the visual narrative, make
                  sure that it is translated into semantic code that will be
                  effective for screen reader users.
                </li>
              </ol>
            </li>
          </ol>

          <PageCallout>
            <p>
              This is a good time to fully
              <RouterLink
                to="/process-guides/validate"
                title="How to Validate Your UX"
                >validate</RouterLink
              >:
            </p>
            <ul>
              <li>
                The usability of your product through the supported workflows.
              </li>
              <li>
                The accessibility of your product through the supported
                workflows.
              </li>
            </ul>
          </PageCallout>

          <ol start="5">
            <li>
              <strong
                >Create a cohesive visual language for your product.</strong
              >
              <ol>
                <li>
                  Determine final branding elements. What ties the brand
                  identity together? Are you adhering to existing
                  <a
                    href="https://www.washington.edu/brand/"
                    title="UW Brand Guidelines"
                    >branding guidelines</a
                  >?
                </li>
                <li>
                  Pick final look & feel for the site, including colors, fonts,
                  and other visual considerations.
                </li>
                <li>
                  Visuals typically are trying to communicate something to the
                  user. This is a good opportunity to
                  <RouterLink
                    to="/process-guides/validate"
                    title="How to Validate Your UX"
                    >validate</RouterLink
                  >
                  how well they are working, as well as testing that they don't
                  adversely affect the usability or accessibility of your
                  product.
                </li>
              </ol>
            </li>
          </ol>

          <PageCallout>
            <p>
              This is a good time to fully
              <RouterLink
                to="/process-guides/validate"
                title="How to Validate Your UX"
                >validate</RouterLink
              >
              the out-of-box experience of your product prior to release.
            </p>
          </PageCallout>
        </div>

        <SHeading level="2">Common Pitfalls</SHeading>
        <div>
          <SHeading level="3">Process set up to fail</SHeading>
          <ul>
            <li>Doesn’t ensure user-centered decision making.</li>
            <li>No stakeholder buy-in.</li>
            <li>
              Lack of trust in process.
              <ul>
                <li>Design by committee.</li>
                <li>Death by 1000 cuts.</li>
              </ul>
            </li>
            <li>Lack of trust in Designers.</li>
          </ul>
          <SHeading level="3">Conflating your thinking</SHeading>
          <p>
            Trying to solve everything at once (IA, UI, Narrative, A11y, &
            Visual Design). Hard to validate & discern what might be causing
            user issues with your design.
          </p>
          <SHeading level="3">Relying on big handoffs</SHeading>
          <p>
            Every handoff involves translation and is an opportunity for
            miscommunication. The more you can work together, the better.
          </p>
        </div>

        <SHeading level="2">Useful Resources</SHeading>
        <div>
          <SHeading level="3">Design Process</SHeading>
          <ul>
            <li>
              Concept of
              <a href="http://usabilitygeek.com/the-art-of-ux-in-mvp/"
                >Minimum Viable Product</a
              >
              (MVP)
            </li>
            <li>
              Our own
              <a
                href="https://medium.com/ux-uw/iterative-fidelity-development-part-iii-of-3-the-new-framework-2d87c52070ca#5700"
                >Iterative Fidelity Framework</a
              >
              for product development.
            </li>
            <li>
              <a
                href="https://www.smashingmagazine.com/2011/03/lean-ux-getting-out-of-the-deliverables-business/"
                >LEAN</a
              >
              approach to design.
            </li>
            <li>
              Thinking about users' relationship to your product with the
              <a href="https://strategyn.com/customer-centered-innovation-map/"
                >Jobs-to-be-done</a
              >
              framework
            </li>
            <li>
              Thinking about relative
              <a
                href="https://www.smashingmagazine.com/2015/02/design-principles-dominance-focal-points-hierarchy/"
                title="Article on information heirarchy"
                >information hierarchy</a
              >
              on a page.
            </li>
            <li>
              An in-depth
              <a href="https://hackdesign.org/lessons/19"
                >course on visual hierarchy</a
              >.
            </li>
          </ul>

          <SHeading level="3">Design Artifacts</SHeading>
          <ul>
            <li>
              Creating
              <a
                href="https://www.usability.gov/how-to-and-tools/methods/wireframing.html"
                >Wireframes</a
              >
            </li>
          </ul>
          <SHeading level="3">Designing for humans</SHeading>
          <ul>
            <li>
              <a
                href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                >Usability heuristics</a
              >
              for evaluating design.
            </li>
            <li>
              <a
                href="https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b"
                >Seven Things Every Designer Needs to Know About
                Accessibility</a
              >
            </li>
            <li>
              <a href="http://www.washington.edu/accessibility/checklist/"
                >UW's Accessibility Checklist</a
              >
            </li>
            <li>
              <a href="http://jxnblk.com/colorable/demos/text/"
                >Color Contrast analyzer</a
              >
            </li>
          </ul>
          <SHeading level="3">Working with stakeholders</SHeading>
          <ul>
            <li>
              Cultivating
              <a
                href="http://www.inspireux.com/2010/09/27/15-tips-to-help-designers-gain-stakeholder-buyin/"
                >stakeholder buy-in</a
              >
            </li>
          </ul>
          <SHeading level="3">Support for UW projects</SHeading>
          <ul>
            <li>
              UW
              <a href="http://www.washington.edu/accessibility/events/"
                >Accessibility consultations</a
              >
            </li>
            <li>
              <a href="https://www.washington.edu/brand/"
                >UW Brand Guidelines</a
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
  import PageCallout from "@/components/PageCallout.vue";
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
      PageCallout,
      BCard,
      BBreadcrumb,
      BBreadcrumbItem,
      BLink,
      SHeading,
    },
    data() {
      return {
        pageTitle: "Create the Product",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
