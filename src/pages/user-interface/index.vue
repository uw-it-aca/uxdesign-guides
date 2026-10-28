<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Guidelines for how to best present functionality and organize
        information within your product or service.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <p>
            The purpose of these interaction design guides is to help you make
            design decisions about how to best present functionality and
            organize information within your product or service. We do this by
            providing best-practice UX guidelines, interaction design component
            terminology, behavior, constraints, and suggested usage.
          </p>
          <p>
            These guides are informed by and encapsulate human factor principles
            — human physical and cognitive capabilities, strengths, and
            limitations — and established conventions of human-computer
            interaction in web sites and web applications.
          </p>

          <PageCallout>
            Before making decisions about how to organize information and
            functions within your product or service, you should clearly
            understand the use cases that your product needs to support; who you
            are designing the product for and what goals they are trying to
            accomplish. If these are not crystal clear, then please read
            Understand Your Project.
          </PageCallout>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <SHeading level="2"
            >What principles should guide interface design?</SHeading
          >
          <p>
            Design and build in iterations — Follow a high-level approach
            described in “Create the Product”; this includes iteratively
            developing your product and validating your decisions often.
          </p>
          <p>
            Consider the context — At each page, section of a page, or interface
            element, consider the context. Ask yourself:
          </p>
          <ul>
            <li>What is someone trying to do now?</li>
            <li>Where are they when they are trying to do it?</li>
            <li>What device are they using?</li>
            <li>
              What is their mental model? How are they thinking about what they
              are trying to do? What language would they use to describe it?
            </li>
          </ul>
          <p>
            Respect human capabilities and needs — Pay attention to usability
            heuristics.
          </p>
          <p>
            Follow conventions — Follow established UI conventions and build on
            what users know and are used to.
          </p>
          <ul>
            <li>Build on expectations.</li>
            <li>Consider how you have typically accomplished similar tasks.</li>
            <li>
              Don’t get inventive just for the sake of doing something
              different.
            </li>
          </ul>
        </div>

        <div class="row mb-3">
          <div class="col">
            <SHeading level="2"
              >What are common interface design pitfalls?</SHeading
            >
            <ul>
              <li>
                Lack of clarity about the purpose of an interaction when making
                design decisions about it
              </li>
              <li>
                Creating a unique interaction solution when there is an
                established convention or pattern
              </li>
              <li>
                Waiting too long to evaluate a design. Test early and often
              </li>
              <li>
                Not being concise enough (e.g. with page titles, headers or
                instructions)
              </li>
            </ul>

            <SHeading level="2">Credits</SHeading>
            <p>
              These interface design guides are a subset of design guides
              originally created by the Kuali Student User Experience Team to
              aide the development of Kuali Student, an enterprise Student
              Information System. The Kuali Student guides can still be found
              here: Kuali Student User Interaction Model.
            </p>
          </div>
        </div>
      </div>
    </template>
    <template #author>William Washington</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import { BCard, BLink } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";
  import PageCallout from "@/components/PageCallout.vue";

  export default {
    name: "DocsIndex",
    components: {
      Layout,
      PageCallout,
      BCard,
      BLink,
      SHeading,
    },
    data() {
      return {
        pageTitle: "Interface Design Guides",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
