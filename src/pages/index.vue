<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Great user experiences (UX) aren't created by magic, but by a repeatable
        process of inquiry and critical thinking, and through deliberate
        investment.
      </p>
    </template>
    <template #content>
      <div class="row mb-4">
        <div class="col">
          <SHeading level="2" class="mb-3">Explore our guides</SHeading>
          <p class="mb-0" style="max-width: 85ch">
            Written by UX professionals on the Experience Design (XD) team,
            these guides share the methods and patterns we use every day. Use
            them to plan your process, make informed design decisions, and build
            products and services that work better for everyone.
          </p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col">
          <BCard
            class="bg-body-tertiary"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <SHeading level="3" class="mb-3">UX Process Guides</SHeading>
            <p class="flex-fill">
              Plan and run user-centered design (UCD) activities, from discovery
              and research through prototyping, testing, and continuous
              improvement.
            </p>
            <div class="text-end">
              <BLink to="/process-guides">Review process guides</BLink>
            </div>
          </BCard>
        </div>
        <div class="col">
          <BCard
            class="bg-body-tertiary"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <SHeading level="3" class="mb-3">Interface Design Guides</SHeading>
            <p class="flex-fill">
              Use proven UX/UI patterns to create interfaces that are intuitive,
              accessible, and consistent across digital experiences.
            </p>

            <div class="text-end">
              <BLink to="/user-interface">Review interface design guides</BLink>
            </div>
          </BCard>
        </div>
        <div class="col">
          <BCard
            class="bg-body-tertiary"
            header-bg-variant="transparent"
            border-variant="0"
            body-class="p-4"
          >
            <SHeading level="3" class="mb-3"
              >Information Design Guides</SHeading
            >
            <p class="flex-fill">
              Structure, label, and organize content so people can find what
              they need, understand it quickly, and take action with confidence.
            </p>
            <div class="text-end">
              <BLink to="/info-design">Review information design guides</BLink>
            </div>
          </BCard>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <SHeading level="2" class="mb-3">Not sure where to begin?</SHeading>
          <p style="max-width: 85ch">
            Start with the problem you’re trying to solve. If you’re planning
            work or deciding what to do next, begin with the process guides. If
            you’re designing screens, start with interface design. If people
            can’t find or understand your content, start with information
            design. Still unsure? Reach out to the XD team and we’ll help you
            find the right approach.
          </p>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <SHeading level="2" class="mb-3">About the XD team</SHeading>
          <p style="max-width: 85ch">
            UWIT’s Experience Design (XD) team is a group of UX professionals
            with decades of experience applying user-centered design to products
            used by students, faculty, and staff across UW’s three campuses. We
            wrote these guides to share what we’ve learned, so that more teams
            can put user-centered design into practice.
          </p>
          <p><BLink to="/xd-team">Learn more about the XD team</BLink></p>
        </div>
      </div>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import { BCard, BLink } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "DocsIndex",
    components: {
      Layout,
      BCard,
      BLink,
      SHeading,
    },
    data() {
      return {
        pageTitle: "Welcome to UX Design Guides",
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
