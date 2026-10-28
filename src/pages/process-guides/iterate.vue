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
        This step is about continual improvement on your product or service,
        based on new information discovered through
        <RouterLink to="/process-guides/validate" title="Validate your UX">
          validation</RouterLink
        >.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <p>You iterate on a design in order to:</p>
          <ul>
            <li>
              Act upon current understanding of known and evolving user needs.
            </li>
            <li>Address failures with the current design solution.</li>
            <li>Make improvements based on current priorities.</li>
          </ul>

          <SHeading level="2">How should you iterate on a design?</SHeading>
          <div>
            <SHeading level="3">Plan for continual improvement</SHeading>
            <ol>
              <li>
                Accept that <strong>your product isn't perfect</strong> (it will
                <em>never</em> be perfect).
              </li>
              <li>
                <strong>Determine the success criteria</strong> for your product
                or service, from both users' perspectives and the business
                perspective.
              </li>
              <li>
                <strong>Determine how you will evaluate success</strong>. You
                can use:
                <ul>
                  <li>Log and usage data.</li>
                  <li>Periodic user studies.</li>
                  <li>Periodic contextual inquiry.</li>
                </ul>
              </li>
              <li>
                <strong
                  >Plan for both periodic and ongoing collection and analysis of
                  the data</strong
                >.
              </li>
              <li>
                <strong>Have a process</strong> for putting iterative project
                work into work schedule.
              </li>
            </ol>
            <SHeading level="3">Respond to data</SHeading>
            <ol>
              <li>
                Based on latest data and findings,
                <strong>recommend opportunities for improvement</strong>.
              </li>
              <li>
                <strong>Prioritize recommendations</strong> into logical
                groupings that cover known user workflows and address known pain
                points.
              </li>
              <li>
                <strong>Prioritize an MVP</strong> for the next iteration.
                <ul>
                  <li>
                    What are the workflow(s) your product can support that will
                    provide known user value?
                  </li>
                  <li>
                    What issues with the current product need to be solved in
                    the next iteration?
                  </li>
                  <ul>
                    <li>
                      Consider both user needs and technical debt as you map out
                      work.
                    </li>
                  </ul>
                </ul>
              </li>
              <li>
                <strong>Begin a new cycle of UX work.</strong>
                <ul>
                  <li>
                    Start back with <a href="understand">Understand</a> step and
                    go through the process.
                  </li>
                  <li>
                    Focus your work through each step to the scope determined
                    for this iteration’s MVP.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Plan for the next iteration</strong>
                <ul>
                  <li>What data will you need and how will it be gathered?</li>
                  <li>When will you do the next iteration?</li>
                  <li>
                    Who is responsible for pushing the next iteration at project
                    resourcing meetings? (Service Team, Service Owner,...)
                  </li>
                </ul>
              </li>
            </ol>
          </div>

          <SHeading level="2"
            >What are common pitfalls when iterating?</SHeading
          >
          <div>
            <SHeading level="3">Lack of foresight</SHeading>
            <ul>
              <li>
                Not scheduling for iteration. If it isn't planned, it likely
                never happens.
              </li>
              <li>
                Failing to set up necessary data collection to inform the next
                iteration. This is especially important with log data.
              </li>
              <li>
                There is no organizational support for iteration. Always a push
                for new features or products.
              </li>
            </ul>
          </div>

          <SHeading level="2">Useful Resources</SHeading>
          <SHeading level="3">Iterative Process</SHeading>
          <ul>
            <li>
              Quick overview of the
              <a
                href="https://www.usability.gov/what-and-why/user-centered-design.html"
                >User-Centered Design</a
              >
              (UCD) process.
            </li>
            <li>
              Our own
              <a
                href="https://medium.com/ux-uw/iterative-fidelity-development-part-iii-of-3-the-new-framework-2d87c52070ca#5700"
                >Iterative Fidelity Framework</a
              >
              for product development.
            </li>
          </ul>
          <SHeading level="3">Data Gathering</SHeading>
          <ul>
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
        pageTitle: "Iterate on the Design",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
