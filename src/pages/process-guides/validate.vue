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
        This step is about understanding the ramifications of your design
        decisions on the perceived usefulness and usability of your product.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <PageCallout>
            While for simplicity we focus this page on product-level validation,
            validation actually happens at two levels. One level is the
            validation of the overall product and the second level concerns the
            validation of individual design decisions or assumptions that you
            are making as you design the product. At either level, the same
            general process &#8212;as described in our recommended approach
            (below)&#8212; is applicable.
          </PageCallout>
          <p>
            At this point, you have solutions that will hypothetically help your
            users achieve their goals. Now, it is time to answer some critical
            questions:
          </p>
          <ul>
            <li>Do your users find the solution useful and usable?</li>
            <li>
              Knowing that your product is not perfect, what should you focus
              future iterations of work on?
            </li>
          </ul>
          <p>
            You will gain clarity around how real users will react to your
            product, both the difficulties they will encounter and what works
            well for them. This information can then be used to inform how you
            proceed. Are there significant issues to address before you release?
            Might enthusiastic reactions to a particular aspect of your product
            inform marketing initiatives?
          </p>

          <SHeading level="2">Recommended Approach</SHeading>
          <ol>
            <li>
              <strong
                >Schedule time for validation as part of your project
                timeline.</strong
              >
              <ul>
                <li>
                  Schedule time for planning & conducting validation studies.
                </li>
                <li>
                  Schedule time for making corrections based on the insights you
                  will get.
                </li>
                <li>
                  Plan for validation to be iterative, scoped to design
                  decisions at hand.
                  <ul>
                    <li>
                      For Agile validation work, try to have some members of
                      your team validating the work of one phase as the rest of
                      the team moves forward with the next phase of work. During
                      sprint planning, you can plan to make changes based on
                      last sprint’s studies.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>

          <ol start="2">
            <li>
              <strong>Determine research questions.</strong>
              <ol type="a">
                <li>
                  Revisit success criteria to inform your research questions.
                </li>
                <li>
                  Determine your team's uncertainty around design decisions as
                  they relate to product success evaluated from the end-user or
                  business perspectives.
                </li>
                <li>
                  Document these uncertainties in terms of specific, measurable
                  questions. These are your research questions. Scope to
                  questions that need to be answered at this point in time. If
                  you don’t have specific questions that need to be answered,
                  don’t do the research.
                </li>
                <li>
                  Prioritize your research questions based on:
                  <ul>
                    <li>Risk of proceeding with your uncertainty.</li>
                    <li>
                      Urgency of answers to the next design decisions to be
                      made.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
          </ol>

          <ol start="3">
            <li>
              <strong
                >Choose the
                <a href="#data_gathering" title="Resources about data gathering"
                  >research methods</a
                ></strong
              >
              that will answer your questions in a valid and efficient manner.
              <ul>
                <li>
                  How much time do you have? Remember that different methods
                  require varying amounts of effort and time for recruiting,
                  study prep, study length, and analysis.
                </li>
                <li>
                  Each method carries it's own potential biases that you need to
                  guard against.
                </li>
              </ul>
            </li>
          </ol>

          <ol start="4">
            <li>
              For user studies, <strong>define participants</strong>.
              <ol>
                <li>
                  Who needs to answer your questions?
                  <ul>
                    <li>
                      Determine what user characteristics are meaningful to your
                      research questions.
                    </li>
                    <li>
                      Consider including marginalized and underrepresented
                      groups.
                    </li>
                  </ul>
                </li>

                <li>
                  Plan for how you will recruit these specific participant
                  types.
                  <ul>
                    <li>
                      Be aware of selection biases for each recruitment method.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
          </ol>

          <ol start="5">
            <li>
              For non-user data studies, <strong>select data sources</strong>.
              <ol type="a">
                <li>
                  What data do you need in order to answer your questions?
                  <ul>
                    <li>
                      Determine what variables are meaningful to your research
                      questions.
                    </li>
                    <li>
                      Be aware of biases that the data might introduce, both in
                      the data itself and in the analysis of it.
                    </li>
                  </ul>
                </li>
                <li>
                  Set up organizational structure for your collected data to
                  keep it manageable.
                </li>
              </ol>
            </li>
          </ol>

          <ol start="6">
            <li>
              <strong>Carry out validation study.</strong> (for user-studies)
              <ul>
                <li>
                  Create study script.
                  <ol>
                    <li>
                      Focus on script questions that align with your research
                      questions. Resist urge to confound the study by
                      introducing irrelevant or out of scope questions.
                    </li>
                    <li>Be clear and precise in your language.</li>
                    <li>
                      If you will have human participants, be aware of human
                      fatigue & plan accordingly, limiting time to 45 minutes or
                      plan for breaks.
                    </li>
                    <li>
                      Allow for structured improvisation. Ask questions to
                      understand where the user is coming from and use this in
                      your studies. The less clinical you can make your study,
                      the better.
                    </li>
                  </ol>
                </li>
                <li>Create artifacts/prototypes to be used in the study.</li>
                <ol>
                  <li>
                    Create the simplest artifact that will test what you need
                    tested. Additional information or detail in your artifact
                    can confound the data.
                  </li>
                </ol>
                <li>
                  Recruit users.
                  <ol>
                    <li>
                      Be creative. There is no one best way to recruit users.
                    </li>
                    <li>
                      Recruit broadly. Expect low response rates to most
                      recruitment activities.
                    </li>
                    <li>
                      Understand selection biases involved in recruitment.
                    </li>
                  </ol>
                </li>
                <li>
                  Pilot study.
                  <ol>
                    <li>
                      Conduct at least one run-through of your study with a
                      participant, ideally one that represents your user base.
                    </li>
                    <li>
                      Validate whether the study is efficient and effective in
                      answering your research questions.
                    </li>
                    <li>
                      Make adjustments to your study design or script as
                      necessary.
                    </li>
                  </ol>
                </li>
                <li>
                  Conduct Study.
                  <ul>
                    <li>
                      Be consistent. Do not change your study design,
                      facilitation, or artifacts during the course of the study.
                      Doing so will confound your results.
                    </li>
                    <li>
                      If possible, have someone who is not facilitating take
                      notes. It can be hard to fill roles of both facilitator
                      and note taker.
                    </li>
                    <li>
                      Always ask for clarification. Be aware of when you might
                      be assuming what the participant is saying, rather than
                      actually hearing what they are actually saying.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>

          <ol start="7">
            <li>
              <strong>Analyze results.</strong>
              <ul>
                <li>
                  Resist biasing your results by peeking at them too early.
                </li>
                <li>Comb through the data and identify relevant findings.</li>
                <li>
                  Synthesize the findings into insights and prioritize them. By
                  grouping related findings, you might uncover larger issues.
                </li>
                <li>
                  Summarize & prioritize your insights for easy consumption.
                  Focus on giving voice to what the data is saying.
                </li>
              </ul>
            </li>
          </ol>

          <ol start="8">
            <li>
              <strong>Share findings</strong> with any members of the team who
              didn't participate in the research.
              <ol>
                <li>
                  Set meeting to go over the insights, focusing on high-priority
                  insights.
                </li>
                <li>
                  Help the team understand why the insights are important &
                  their impact on the UX of the product.
                </li>
              </ol>
            </li>
          </ol>

          <ol start="9">
            <li>
              <strong>Make recommendations.</strong>
              <ol>
                <li>
                  Invite relevant team members to work with you on generating
                  recommendations.
                </li>
                <li>
                  For each high-priority insight, determine what action should
                  be taken to address it.
                  <ul>
                    <li>
                      Be opinionated. This should provide concrete direction.
                    </li>
                    <li>
                      Sometimes an implementation decision is obvious, sometimes
                      the recommendation will be for more research or to do
                      nothing.
                    </li>
                    <li>Note priority/urgency of the recommendations.</li>
                    <li>
                      All recommendations should have documented rationale.
                    </li>
                  </ul>
                </li>
                <li>
                  Share summary of recommendations with rest of the team. Focus
                  the team on the high-priority recommendations.
                </li>
              </ol>
            </li>
          </ol>

          <ol start="10">
            <li>
              <strong>Schedule work.</strong> Determine when high-priority
              recommendations will be addressed in project timeline.
            </li>
          </ol>

          <SHeading level="2">Common Pitfalls</SHeading>

          <SHeading level="3">Process Pitfalls</SHeading>
          <ul>
            <li>Not validating early enough.</li>
            <li>Asking the wrong research questions.</li>
            <li>Using the wrong methods to answer questions.</li>
            <li>
              Thinking a prototype has to be refined before showing it to users.
            </li>
            <li>Failure to act upon findings.</li>
            <li>
              <a
                href="https://www.translatemedia.com/us/blog-us/cognitive-biases-influence-decision-making/"
                title="Cognitive biases that affect your decision making."
                >Bias</a
              >
              in validation process.
              <ul>
                <li>Study design</li>
                <li>Participant selection</li>
                <li>During the study</li>
                <li>In Analysis</li>
              </ul>
            </li>
          </ul>
          <SHeading level="3">Participant Selection Pitfalls</SHeading>
          <ul>
            <li>Validating with too few users.</li>
            <li>Participants are not representative of your users.</li>
          </ul>

          <SHeading level="2">Useful Resources</SHeading>

          <SHeading level="3">Evaluation Tools</SHeading>
          <ul>
            <li>
              <a
                href="https://www.nngroup.com/articles/ten-usability-heuristics/"
                >Usability heuristics</a
              >
              for evaluating design.
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
          <SHeading level="3">User Testing Artifacts</SHeading>
          <ul>
            <li>
              Wireframes: (<a
                href="http://uiwireframes.com/assets/img/wireframe-examples/Email-Template-2.png"
                >Example A</a
              >,
              <a
                href="https://wcs.smartdraw.com/website-wireframe/img/low-fidelity-wireframe.jpg?bn=1510011058"
                >Example B</a
              >)
              <ul>
                <li>
                  These do not need to be fully developed designs, but need to
                  have just enough detail and differentiation on the most
                  relevant features in order to evaluate these differences.
                </li>
                <li>
                  Can be used as a paper prototype or interactive prototype for
                  user testing.
                </li>
              </ul>
            </li>
            <li>
              Creating
              <a
                href="https://www.usability.gov/how-to-and-tools/methods/wireframing.html"
                >Wireframes</a
              >
            </li>
          </ul>

          <SHeading level="3" id="data_gathering">Data Gathering</SHeading>

          <SHeading level="4">Considerations</SHeading>
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
                >Combining Qualitative & Quantitative Data</a
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
                    >Support logs & other similar data sources</a
                  >
                </li>
              </ul>
            </li>
          </ul>

          <SHeading level="4" id="study_methods">Methods</SHeading>
          <ul>
            <li>
              Advice for
              <a
                href="https://www.nngroup.com/articles/which-ux-research-methods/"
                >choosing research methods</a
              >
            </li>
            <li>
              Overview of various
              <a
                href="https://www.usability.gov/what-and-why/user-research.html"
                >research methods</a
              >
            </li>
            <li>
              <a href="https://measuringu.com/contextual-inquiry/"
                >Contextual Inquiry</a
              >. Goal of these individual interviews would be to gather insights
              about participants’ context and/or existing workflows
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
              <a href="https://www.invisionapp.com/blog/how-to-create-a-survey/"
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
          <SHeading level="4">Success Criteria and Metrics</SHeading>
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
      BBreadcrumb,
      BBreadcrumbItem,
      BLink,
      SHeading,
    },
    data() {
      return {
        pageTitle: "Validate the Decisions",
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
