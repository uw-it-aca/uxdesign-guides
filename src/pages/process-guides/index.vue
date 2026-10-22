<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        The UCD process continuously aligns user needs and business goals
        through four stages: Understand, Create, Validate, and Iterate.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <div class="m-5 text-center">
            <img src="/images/process_viz_basic.png" class="img-fluid w-50" />
          </div>
          <p>
            UCD should be a part of the preferred software development processes
            of your organization — UCD & Agile Development aren’t mutually
            exclusive.
          </p>

          <PageCallout>
            Keep in mind that any process requires thoughtful, deliberate
            application. This guide will help you understand the purpose and
            end-goal of each step, but is no single "right" achieve these goals.
            The guides cannot be followed blindly; remain vigilant. We try to
            call out the pitfalls at each step to help you along.
          </PageCallout>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2">Great UX requires investment</SHeading>
          <p>
            To cultivate an environment that allows UX-focused teams to thrive,
            you need team alignment and administrative buy-in.
          </p>

          <SHeading level="3">Team Alignment</SHeading>
          <p>
            "It is really important that no one in the team can point to someone
            over in the corner and put all the burden of user experience on that
            guy. No one person, no small group of people can be made responsible
            for the user experience of a service. It is down to the entire team
            to achieve this." - Leisa Reichelt, There is no UX, there is only UX
          </p>
          <ul>
            <li>
              Ultimate goal for every team member is providing great user
              experiences.
            </li>
            <li>Aspire toward iteration rather than perfection.</li>
            <li>
              All discussion & decision making in terms of rationale of value to
              the user experience.
            </li>
          </ul>

          <SHeading level="3"
            >Administrative buy-in for UCD-driven decision making.</SHeading
          >
          <p>
            "Most often failure to implement a successful change can be tied
            directly to a lack of management buy-in. Without this buy-in
            cultural inertia will fight against the proposed change making any
            change fail regardless of how important or necessary it is to your
            future success." - Mark Townsend, Achieving Management Buy-in to
            Change
          </p>
          <p>
            Design decisions made top-down, by committee, or trumped by
            non-user-focused stakeholders (such as marketing department)
            subverts the data & rationale-based process of UCD. You either trust
            in the process or you don't— there is no middle ground.
          </p>
        </div>
      </div>
    </template>
    <template #author>William Washington</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import PageCallout from "@/components/PageCallout.vue";
  import { BCard, BLink } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

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
        pageTitle: "The Process of Creating UX",
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
