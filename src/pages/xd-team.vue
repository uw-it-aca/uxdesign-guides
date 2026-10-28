<template>
  <Layout :page-title="pageTitle" :author="author">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Decades of user-centered design expertise serving the UW community.
        Award-winning products, trusted campus partnership.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col">
          <SHeading level="2">Why listen to us?</SHeading>
          <p style="max-width: 85ch">
            UWIT's Experience Design (XD) Team is comprised of designers who
            have decades of professional experience in applying User-Centered
            Design (UCD) process to product development. In addition we
            collaborate closely with skilled and experienced researchers across
            campus. Our award-winning products support staff, faculty, and
            students across UW's three campuses. Additionally, we are a trusted
            campus partner, representing the needs of campus users in
            consultations, collaboration & leadership throughout the UW.
          </p>

          <SHeading level="3">Testimonials</SHeading>
          <ul style="max-width: 85ch">
            <li>
              <p>
                "They are praised for their expertise, their strong partnership
                skills, and their commitment to providing a service that goes
                above and beyond expectations."
              </p>
              <p>
                - Presentation of <strong>UWIT's ACE Award</strong> to the
                XD Team
              </p>
            </li>
            <li>
              <p>
                "We can’t thank your [Design] team enough for your support and
                guidance with this exercise. It allowed us to make data-driven
                decisions and to effectively transition to the design phase of
                our newsletter. Thanks again for your assistance and
                partnership."
              </p>
              <p>
                - <strong>Michael Steigmeyer</strong>, Senior Internal
                Communications Specialist, University Marketing & Communications
              </p>
            </li>
            <li>
              <p>
                "Thanks very much to you and your team for the UX session
                yesterday, Tim and I found it very useful. We’ll be using the
                input and methodologies that you shared in re-evaluating our
                current navigation structures in order to best serve user and
                business goals on mobile as well as desktop platforms...
              </p>
              <p>
                Glad the Top Pot doughnuts found such an appreciative audience -
                I certainly felt that we got our money’s worth and they beat the
                heck out of paying with BitCoin..."
              </p>
              <p>- <strong>Rick Hauptman</strong>, UW School of Pharmacy</p>
            </li>
            <li>
              <p>
                "I really appreciate the time you take to work toward accessible
                apps and web pages, btw. I brag to my peers at other
                institutions about you and your team. And they are envious."
              </p>
              <p>
                - <strong>Dan Comden</strong>, UW Accessible Technology Center
              </p>
            </li>
            <li>
              <p>
                "Thank you and your team for such a thorough review. I’ve yet to
                touch the pages, but hope to get a chance to make the changes in
                the next couple of weeks.
              </p>
              <p>
                Nice meeting you, too, and thanks again – you guys are awesome."
              </p>
              <p>
                - <strong>Sandy Prescott</strong>, Enterprise Application
                Services
              </p>
            </li>
            <li>
              <p>
                "Both I and the rest of the UW Internal Communications team
                really appreciate your [UX and Assessment teams'] thoughtful,
                collaborative approach in helping us think through some of the
                key issues and questions we needed to solve in designing the
                newsletter and consolidating six different publications from
                three organizations into a coherent, appealing and easy-to-read
                format on a very tight timeline. Your guidance, help and support
                in designing the contextual inquiries was invaluable. The input
                we received helped us make essential decisions and guide our
                final design.
              </p>
              <p>
                We cannot thank you enough for the time, effort and thought you
                put into providing us with such great advice and support. While
                we will continue to refine the newsletter based upon user input,
                our project would not have been nearly as successful without
                your help."
              </p>
              <p>
                - <strong>Cindy D. Brown</strong>, UW-IT Communications Team
              </p>
            </li>
          </ul>

          <SHeading level="3">More about the XD team</SHeading>
          <p><a href="https://medium.com/ux-uw">XD's Team Blog</a></p>
        </div>
      </div>
    </template>
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
        pageTitle: "About the XD Team",
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
