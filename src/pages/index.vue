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
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2" class="mb-3">Explore our guides</SHeading>
          <p>
            Our UX Design Guides help teams turn user needs into clear, useful,
            and consistent digital experiences. Explore practical guidance from
            our UX team to plan your process, make informed design decisions,
            and create products and services that work better for everyone.
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
              Plan and apply UCD activities, from discovery and research through
              prototyping, testing, and continuous improvement.
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
              <BLink to="/user-interface">Review user interface guides</BLink>
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
          <p>
            Start with the challenge you’re trying to solve. Explore the guides
            for practical direction, or connect with our UX team for help
            identifying the right approach.
          </p>
        </div>
      </div>

      <div class="row mb-3">
        <div class="col">
          <SHeading level="2" class="mb-3">About the UX team</SHeading>
          <p>
            Our UX Design Guides help teams turn user needs into clear, useful,
            that more teams can put user-centered design into practice.
          </p>
          <p><BLink to="/ux-team">Learn more about the UX team</BLink></p>
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
