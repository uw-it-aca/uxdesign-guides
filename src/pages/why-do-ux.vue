<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        To create great UX, it will require investment in resources, process &
        vision. Will it be worth it? There is good reason to think so: the
        tangible Returns on Investment (ROI) make creating great UX a smart
        business decision.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2">How does UX benefit your organization?</SHeading>
          <p style="max-width: 85ch">
            “Good user experience is clearly good for business. Studies show
            that companies that invest in UX see a lower cost of customer
            acquisition, lower support cost, increased customer retention and
            increased market share, according to a study done by Forrester. When
            compared to their peers, the top 10 companies leading in customer
            experience outperformed the S&P index with close to triple the
            returns. Forester Research shows that, on average, every dollar
            invested in UX brings 100 dollars in return. That’s an ROI of a
            whopping 9,900 percent.” - Good UX Is Good Business, Andrew
            Kucheriavy, Forbes 2015
          </p>
          <ul style="max-width: 85ch">
            <li>
              Don’t waste time on what might not be used. Streamline development
              by building only what is needed, without bloat.
            </li>
            <li>
              Save money by iterating early. Rapid validation of decisions with
              end-users in development allows for adjustments in development
              rather than in production, where the cost is far greater.
            </li>
            <li>
              Minimize support cost. Knowledge of your users in development
              helps make decisions that will minimize post-release support
              burden.
            </li>
            <li>
              Market effectively. Align marketing efforts to known user
              motivations for more effective campaigns.
            </li>
            <li>
              Discover new opportunities to provide known value to
              users/customers.
            </li>
            <li>
              Unify service offerings into a cohesive system, understanding
              where alignment needs to happen.
            </li>
          </ul>

          <SHeading level="2">How does UX benefit your users?</SHeading>
          <p style="max-width: 85ch">
            "True user experience goes far beyond giving customers what they say
            they want, or providing checklist features." - The Definition of
            User Experience, Don Norman &amp; Jacob Nielsen
          </p>
          <ul style="max-width: 85ch">
            <li>A useful product that addresses their actual needs.</li>
            <li>
              A less frustrating experience that supports their natural approach
              to accomplishing their goals.
            </li>
            <li>
              Increased efficiency & effectiveness by optimizing the product for
              their specific technical, cognitive & physical abilities. This
              includes both major populations and critical, but often overlooked
              populations, such as Accessible Tech users & other traditionally
              marginalized groups.
            </li>
            <li>
              Smoother transition for them between related services &
              communications, as relates to the holistic context of the product.
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
        pageTitle: "Why invest in UX?",
      };
    },
    methods: {},
    mounted: function () {
      // MARK: set the dev environment for feature flagging
      // this.isDev = getDevEnv();
    },
  };
</script>
