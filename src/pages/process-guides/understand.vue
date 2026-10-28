<template>
  <Layout :page-title="pageTitle" :author="author">
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
        In essence, this step of the UCD process is about understanding what
        makes the product "useful".
      </p>
    </template>

    <template #content>
      <div class="row mb-3" style="max-width: 85ch;">
        <div class="col">
          <p>
            Here, you will define project scope and provide a basis for
            decision-making going forward. Your goal is to align the project
            team with a clear idea of what value the product (product or
            service) brings to:
          </p>
          <ul>
            <li>
              <strong>The problem space</strong>. Are you solving the right
              problem? For the right audience?
            </li>
            <li>
              <strong>The product's stakeholders</strong>. What will your
              stakeholders consider success? What assumptions do they have
              around your product?
            </li>
            <li>
              <strong>The product's users</strong>. What are your users' needs?
              What will your users consider success? What are their core needs
              in this space?
            </li>
          </ul>

          <SHeading level="2">How do you understand the problem space?</SHeading>

          <ol>
            <li>
              <strong>Get ideas onto paper.</strong> Get the team into the same
              room and get assumptions, expectations &amp; ideas out of people's
              heads. Focus on what problem(s) people think your product need to
              solve.
            </li>
            <li>
              <strong>Talk to stakeholders.</strong>
              <ul>
                <li>Understand real constraints on the project.</li>
                <li>
                  Understand what their assumptions &amp; expectations of the
                  project.
                  <ul>
                    <li>
                      It is important to question assumptions and set the
                      expectation that the project will be guided by the
                      discovered real needs of the users.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Understand your audiences</strong>. Who do you expect to
              use your product and why? Be expansive and don't forget about
              admins, support staff, and other user types.
              <ul>
                <li>Define each audience type in a short and simple way.</li>
                <li>
                  If you haven’t already done so, do some user research. There
                  are
                  <a
                    href="https://www.nngroup.com/articles/which-ux-research-methods/"
                    title="When to Use Which User-Experience Research Methods by Nielsen Norman Group"
                    >many methods you can use to learn</a
                  >
                  about your users.
                </li>
                <li>What are their overall goals in using the product?</li>
              </ul>
            </li>
            <li>
              <strong
                >Prioritize use cases (audiences &amp; their goals)</strong
              >
              <ul>
                <li>
                  Rank use cases in terms of relative criticality of supporting
                  them (primary/secondary/tertiary).
                </li>
                <li>
                  Scope product (who will you ultimately support and toward what
                  goals? Why?).
                </li>
                <li>
                  Create workflow diagrams for each goal. These should document
                  how the audience will realistically set out accomplishing
                  their goal (their "workflow") for in-scope use cases. Base
                  this on data and confident assumptions. Keep this
                  implementation-agnostic. You are not trying to design how your
                  users will use your product, but to document how they
                  naturally approach completing their goals.
                </li>
              </ul>
            </li>
            <li>
              <strong
                >Identify unknowns (assumptions and open questions) for
                prioritized use cases</strong
              >
              <ul>
                <li>Do they require answers?</li>
                <li>When will answers be necessary?</li>
              </ul>
            </li>
            <li>
              <strong>Define what success is and how to measure it.</strong>
              <ul>
                <li>
                  Ask yourself what, from the user’s perspective, is important?
                  <ul>
                    <li>
                      Use what you have learned about users to define success
                      from a user experience perspective.
                    </li>
                    <li>Is it that users met their goals?</li>
                    <li>Is it that users feel satisfied?</li>
                    <li>Or is it something else?</li>
                  </ul>
                </li>
                <li>
                  Identify what can be measured to indicate success as you have
                  defined it
                  <ul>
                    <li>
                      Since user experience is a combination of interactions and
                      perceptions, choose a combination of metrics that track
                      <em>interactions</em> and <em>perceptions</em>.
                    </li>
                    <li>
                      Interactions are what people actually do, including
                      clicking, scrolling, and filling out a form. Commonly used
                      interaction measures are time on task, success rate, or
                      user errors. Perceptions are what people think and feel
                      about an experience.
                      <a
                        href="http://www.nngroup.com/articles/satisfaction-vs-performance-metrics/"
                        title="Satisfaction versus Perfomance Metrics by Nielsen Norman Group"
                        >Simple satisfaction or ease-of-use rating scales</a
                      >, for example, are measures that gauge how people
                      perceive an experience after using it.
                    </li>
                  </ul>
                  <PageCallout>
                    You don’t have to determine at this time how to gather the
                    metrics, but it is important to know at this stage what will
                    determine whether the product or service was successful,
                    from a user experience perspective. When you are ready for
                    that, however, consider if there are existing metrics, or
                    combination of metrics, in your organization that are a good
                    indicator of success.
                  </PageCallout>
                </li>
              </ul>
            </li>
            <li>
              <strong>Get buy in.</strong>
              <ul>
                <li>
                  Go over scoped use cases and success criteria with team &amp;
                  stakeholders.
                </li>
                <li>
                  Discuss in terms of user-benefit and user-judged success.
                </li>
                <li>Create plan for addressing any conflicts or feedback.</li>
              </ul>
            </li>
          </ol>
          <PageCallout>
            At every step, you want to document open questions, assumptions
            (need validation? when?), and facts. There is nothing inherently
            wrong with moving forward with unverified assumptions. It is simply
            a risk that you want to know about and the team can decide how to
            proceed.
          </PageCallout>

          <SHeading level="2">What are common pitfalls when defining the problem?</SHeading>

          <SHeading level="3">General Pitfalls</SHeading>
          <ul>
            <li>Failure to identify risky assumptions</li>
            <li>
              Introducing implementation ideas at this early stage. This is
              about defining the problem &amp; NOT possible solutions. To think
              about implementation at this point is going to constrain your
              thinking to what problems you think can be solved, rather than
              what problems should be solved.
            </li>
          </ul>
          <SHeading level="3">User Research &amp; Validation Pitfalls</SHeading>
          <ul>
            <li>
              Unclear research goals (what are you trying to answer? How will
              data be used?)
            </li>
            <li>Trying to shoehorn all research upfront.</li>
            <ul>
              <li>
                Be agile and answer what is needed when you need to answer it.
              </li>
            </ul>
            <li>
              <a
                href="https://www.translatemedia.com/us/blog-us/cognitive-biases-influence-decision-making/"
                >Cognitive biases</a
              >
              in research and decision making
            </li>
          </ul>
          <SHeading level="3">Pitfalls in Working with Stakeholders</SHeading>
          <ul>
            <li>Failure to understand business requirements or expectations</li>
            <li>
              Failure to get buy in on what use cases (audiences/goals)
              &amp;emdash;and consequently scope&amp;emdash; the product needs
              to support in v1.
            </li>
            <li>
              Allowing business goals to prioritize or dictate workflows a
              product supports that are either unrealistic or low-priority for
              users.
            </li>
          </ul>

          <SHeading level="2">Useful Resources</SHeading>

          <SHeading level="3">Defining The Problem Space</SHeading>
          <ul>
            <li>
              <a
                href="https://medium.com/ux-uw/notes-from-an-ux-consultation-24285534015d#5a49"
                >Defining audiences and their goals</a
              >
            </li>
            <li>
              <a
                href="https://hbr.org/2012/09/are-you-solving-the-right-problem"
                >Are You Solving the Right Problem?</a
              >
            </li>
            <li>
              Thinking about users' relationship to your product with the
              <a href="https://strategyn.com/customer-centered-innovation-map/"
                >Jobs-to-be-done</a
              >
              framework
            </li>
          </ul>
          <SHeading level="3">User Research &amp; Validation</SHeading>
          <ul>
            <li>
              <a
                href="https://www.translatemedia.com/us/blog-us/cognitive-biases-influence-decision-making/"
                >Cognitive biases</a
              >
              to watch out for in research
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1yOWyUGUqzOHUZT6HYNVlQSM7PbvpVTSHDYNZpXoosQY/edit#bookmark=id.uhmefbcao090"
                >Facilitation, Moderation, and Observation Tips</a
              >
            </li>
            <li>
              <a href="https://measuringu.com/qualitative-primer/"
                >Gathering Qualitative Data</a
              >
            </li>
            <li>
              <a href="https://measuringu.com/mixing-methods/"
                >Combining Qualitative &amp; Quantitative Data</a
              >
            </li>
            <li>
              Mine existing data
              <ul>
                <li>
                  <a
                    href="https://alistapart.com/article/internal-site-search-analysis-simple-effective-life-altering"
                    >Site analytics</a
                  >
                </li>
                <li>
                  <a
                    href="https://alistapart.com/article/user-research-when-you-cant-talk-to-your-users"
                    title="User Research When You Can’t Talk to Your Users"
                    >Support logs &amp; other similar data sources</a
                  >
                </li>
              </ul>
            </li>
            <li>
              Study methods
              <ul>
                <li>
                  <a href="https://measuringu.com/contextual-inquiry/"
                    >Contextual Inquiry</a
                  >. Goal of these individual interviews would be to gather
                  insights about participants’ context and/or existing workflows
                  <ul>
                    <li>
                      <a
                        href="https://docs.google.com/document/d/1yOWyUGUqzOHUZT6HYNVlQSM7PbvpVTSHDYNZpXoosQY/edit"
                        >Sample script from combination contextual inquiry and
                        “usability study”</a
                      >
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://www.invisionapp.com/blog/how-to-create-a-survey/"
                    >Surveys</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.interaction-design.org/literature/article/the-pros-and-cons-of-guerrilla-research-for-your-ux-project"
                    >Guerilla research</a
                  >
                  (quick and dirty)
                </li>
              </ul>
            </li>
          </ul>
          <SHeading level="3">Success Criteria and Metrics</SHeading>
          <ul>
            <li>
              <a
                href="https://www.uxmatters.com/mt/archives/2014/06/choosing-the-right-metrics-for-user-experience.php"
                >Choosing the Right Metrics for User Experience</a
              >
            </li>
            <li>
              <a href="http://www.measuringusability.com/sus.php"
                >Measuring Usability: System Usability Score (SUS)</a
              >
            </li>
          </ul>
          <SHeading level="3">Personas &amp; User Stories</SHeading>
          <ul>
            <li>
              <a href="https://measuringu.com/scientific-personas/"
                >How to Make Personas More Scientific</a
              >
              by Jeff Sauro for <em>Measuring Usability</em>
            </li>
            <li>
              <a
                href="http://www.usabilitycounts.com/2013/10/11/why-i-love-user-stories/"
                >Writing good user stories</a
              >
            </li>
          </ul>
          <PageCallout>
            We would emphasize that the user stories should be written around
            broad user goals, rather than about functionality or micro-goals
            that wouldn't leave a user satisfied. (i.e. for a grading app, we
            had a story around "As an instructor, I want to be confident that I
            have successfully submitted my grades to the Registrar.", rather
            than "As an instructor, I need to enter grades into the system.")
          </PageCallout>
          <SHeading level="3">Working with Stakeholders</SHeading>
          <ul>
            <li>
              <a
                href="http://www.inspireux.com/2010/09/27/15-tips-to-help-designers-gain-stakeholder-buyin/"
                >Getting buy-in from stakeholders</a
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
        pageTitle: "Understand the Problem Space",
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
