<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/content">Content</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>

    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Voice and Tone establish a uniform and easily identifiable communication
        style, promoting a clear, cohesive, and contextualized user experience.
        Voice, like personality, is constant throughout our messaging, while
        tone, like emotions, is dynamic and depends on the context/situation.
      </p>

      <p class="lead" style="max-width: 85ch">
        Both voice and tone adhere to and follow the
        <a
          href="https://insideuwit.uw.edu/support-units/communications/brand-style-other-resources/uw-it-writing-style-guide/"
          >UW-IT Writing Style Guide</a
        >
        and the
        <a
          href="https://www.washington.edu/brand/guides/editorial-guide/#editorial-4"
          >UW Editorial Guide</a
        >. Both of these resources should be explored, as they contain
        additional tips and guidance.
      </p>
    </template>

    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#voice">Voice</PageContentsItem>
        <PageContentsItem anchor="#tone">Tone</PageContentsItem>
      </PageContents>
    </template>

    <template #content>
      <SHeading level="2" id="voice">Voice</SHeading>
      <p style="max-width: 85ch">
        Voice - the consistent and recognizable communication style in messaging
        - is intended to align with the UW style and brand, and in addition, is
        designed to optimize usability, accessibility and inclusivity. The
        recommended voice is:
      </p>

      <p><strong>Conversational but professional </strong></p>
      <p>
        We communicate in a way that is easy to understand for a nontechnical
        audience - we write how people talk, as if we&rsquo;re having a
        conversation. We avoid language that's overly opinionated, humorous, or
        trendy.
      </p>
      <p><strong>Clear and concise</strong></p>
      <p>
        We look for the simplest way to communicate information, without
        unnecessary jargon.
      </p>
      <p><strong>Informative</strong></p>
      <p>
        We provide information to users when they need it, helping them avoid
        errors, and explaining the impact of actions they may take.
      </p>
      <p><strong>Empathetic and inclusive</strong></p>
      <p>
        We ensure that messages are easily understood by a wide and diverse
        audience. We maintain a warm and approachable demeanor, fostering
        respect and understanding.
      </p>

      <SHeading level="2" id="tone">Tone</SHeading>
      <p style="max-width: 85ch">
        If voice is our brand&rsquo;s personality, tone is the emotion expressed
        that conveys how users should interpret information. The right tone
        depends on the context, audience, and level of engagement required for
        effective communication.
      </p>

      <SHeading level="3">Tone Map</SHeading>
      <p style="max-width: 85ch">
        Since tone will vary throughout a UI, this tone map demonstrates what
        tone could be used in the outlined use cases. Note that even this tone
        map is guidance and should be weighed with what the proper tone is for
        the context of use.
      </p>

      <p><strong>Tone map axes are:</strong></p>
      <ul>
        <li>Ranging from detailed to concise</li>
        <li>
          Ranging from casual (friendly, fun) to formal (serious, authoritative)
        </li>
      </ul>

      <img
        src="/images/tone-map.png"
        class="image-fluid w-100 border"
        alt="Tone Map"
      />

      <p>
        Tone Map items described below for accessibility purposes. Range values:
        evenly split between two ends, somewhat, moderately, and very
      </p>

      <p><strong>Forms</strong></p>
      <ul>
        <li><strong>Labels:</strong> somewhat casual, somewhat concise</li>
        <li>
          <strong>Empty states:</strong> moderately casual, somewhat detailed
        </li>
        <li><strong>Errors:</strong> moderately formal, moderately detailed</li>
        <li>
          <strong>Placeholder text:</strong> somewhat formal, very concise
        </li>
        <li>
          <strong>Form help &amp; feedback:</strong> moderately formal, somewhat
          concise
        </li>
      </ul>

      <p><strong>Workflow Messaging</strong></p>
      <ul>
        <li><strong>Onboarding:</strong> moderately concise, very casual</li>
        <li>
          <strong>Dialogs:</strong> evenly split between casual and formal,
          moderately concise
        </li>
        <li>
          <strong>New feature notices:</strong> very detailed, very casual
        </li>
      </ul>

      <p><strong>Academic Messaging</strong></p>
      <ul>
        <li>
          <strong>Journey/Academic guidance:</strong> very casual, somewhat
          detailed
        </li>
        <li>
          <strong>Academic processes:</strong> A very formal, moderately
          detailed
        </li>
      </ul>

      <p><strong>Systems Messaging</strong></p>
      <ul>
        <li>
          <strong>Permissions or wrong URL error:</strong> moderately casual,
          somewhat concise
        </li>
        <li>
          <strong>Server or system error:</strong> very formal, somewhat
          detailed
        </li>
      </ul>

      <p><strong>Situational/Semantic Messaging</strong></p>
      <ul>
        <li>
          <strong>Success messaging:</strong> moderately casual, very concise
        </li>
        <li>
          <strong>Informational alerts:</strong> evenly split between casual and
          formal, moderately detailed
        </li>
        <li>
          <strong>Warning alerts:</strong> moderately formal, somewhat detailed
        </li>
        <li>
          <strong>Critical alerts:</strong> very formal, somewhat detailed
        </li>
      </ul>
    </template>
    <template #author>Leila, Cayla, William</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import PageContents from "@/components/PageContents.vue";
  import PageContentsItem from "@/components/PageContentsItem.vue";
  import { SHeading } from "solstice-vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsContentVoice",
    components: {
      Layout,
      PageContents,
      PageContentsItem,
      SHeading,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    data() {
      return {
        pageTitle: "Voice & Tone",
      };
    },
  };
</script>
