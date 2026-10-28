<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        UX is a human-centered way of thinking. It's about understanding
        people's goals and designing useful, usable experiences across every
        touchpoint.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2">UX is a way of thinking</SHeading>
          <p style="max-width: 85ch">
            User Experience Design (UX) is a way of thinking about your product
            or service differently — it is a human-centered perspective that
            puts the needs of people at the center of an iterative
            problem-solving approach. UX Design isn't about pushing your
            solutions onto your users, it is about building what your users
            actually need to accomplish their goals.
          </p>
          <p style="max-width: 85ch">
            To design a great user experience, you need to understand who your
            users are, where they are coming from, what goals they are trying to
            accomplish, how they naturally set about accomplishing these goals,
            and their expectations of your product or service. This information
            is weighed with business needs for the product or service and —
            together — these drive decision making through the design and
            development efforts.
          </p>

          <PageCallout style="max-width: 85ch">
            “User experience is about more than just ease of use, of course. It
            is about motivations, attitudes, expectations, behavioral patterns,
            and constraints. It is about the types of interactions people have,
            how they feel about an experience, and what actions they expect to
            take. User experience also comprehends more than just the few
            moments of a single site visit or one-time use of an application; it
            is about the cross-channel user journey, too.” - UX Matters
          </PageCallout>

          <p style="max-width: 85ch">
            Ultimately, UX Design encapsulates a holistic view of users' entire
            experience as they go about accomplishing their goals through
            multiple workflows, across many platforms, channels and touchpoints.
          </p>

          <p style="max-width: 85ch">
            Emerging fields like Service Design and Customer Experience Design
            share similar concerns as UX Design. But despite slight variations
            in focus (e.g. Service Design may focus more on back-end processes
            and less on interface, information, and visual design; Customer
            Experience Design may focus more on brand perception, pricing, and
            perceived value) these fields take similar approaches and utilize
            similar user-centered methodologies as UX Design. We are standing on
            shifting sands as far as these relatively new disciplines go - you
            will likely come across a host of ways of defining and delimiting
            these disciplines. But as user-centered designers our focus has not
            shifted: we aim to make people happy by creating great experiences
            of useful and usable products and services.
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
        pageTitle: "What is UX?",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
