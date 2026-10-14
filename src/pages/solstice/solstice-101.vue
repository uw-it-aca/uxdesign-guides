<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/solstice">Getting Started</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Get to know our design thinking and how we put it into action across our
        design system.
      </p>
    </template>
    <template #content>
      <SHeading level="2" class="my-4">Frequently Asked Questions</SHeading>

      <SHeading level="3">What is Solstice?</SHeading>

      <p style="max-width: 85ch">
        Solstice is a resource for documenting design best practices. It
        provides a set of curated content guidelines, UI elements, and UX design
        patterns that work as the foundation for application design and
        development at Data &amp; Applications (D&amp;A).
      </p>

      <SHeading level="3">Who is Solstice for?</SHeading>
      <p style="max-width: 85ch">
        Solstice was created and maintained by the Service Coordination (SC)
        Experience Design Team, to help provide users with a consistent
        experience across D&amp;A services.
      </p>
      <p style="max-width: 85ch">
        In addition, Engineering teams are able to use the technical
        documentation to build applications based on Solstice design
        specifications.
      </p>

      <SHeading level="3">How will Solstice be used?</SHeading>
      <p style="max-width: 85ch">
        Designers are expected to use the elements and patterns documented in
        the design system to aid in their design process. Further resources can
        be found on the
        <BLink to="/getting-started/design-with-solstice"
          >Design with Solstice</BLink
        >
        page.
      </p>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import { BLink } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "DocsSolstice101",
    components: { Layout, BLink, SHeading },
    data() {
      return {
        pageTitle: "Solstice 101",
      };
    },
  };
</script>
