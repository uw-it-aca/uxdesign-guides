<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/disclosures"
          >Disclosures</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium ad,
        dolores repudiandae natus dolorem recusandae! Incidunt consequatur
        tenetur ad totam, placeat ipsa explicabo, eaque id blanditiis libero
        culpa veniam aliquam!
      </p>
    </template>
    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#anatomy">Anatomy</PageContentsItem>
        <PageContentsItem anchor="#variants">Variants</PageContentsItem>
        <PageContentsItem anchor="#options">Options</PageContentsItem>
        <PageContentsItem anchor="#usage">Usage</PageContentsItem>
        <PageContentsItem anchor="#access">Accessibility</PageContentsItem>
        <PageContentsItem anchor="#implemt">Implementation</PageContentsItem>
      </PageContents>
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quia
        dolorem? Perspiciatis excepturi cum aliquid praesentium aspernatur,
        accusantium assumenda, odio neque nobis quo inventore dolorum,
        architecto velit magni rem odit?
      </p>

      <p>
        <BButton @click="toggleOffcanvas('first')"
          >Show Purple Chatbot OffCanvas</BButton
        >
      </p>

      <p>
        <BButton @click="toggleOffcanvas('second')"
          >Show Feedback Form OffCanvas</BButton
        >
      </p>

      <BOffcanvas v-model="offcanvasStates.first" placement="end">
        <slot name="header"><h2>Purple Chatbot</h2></slot>
        <iframe
          src="https://nebulaone-pilot.uw.edu/chat/41d6588d-541a-4e33-89d7-d290ff873be7/true?silentLogin=true&showModelName=true&showDisclaimer=false"
          frameborder="0"
          title="Char's UX Agent"
          loading="lazy"
          style="
            aspect-ratio: 2 / 6;
            display: block;
            max-height: 100vh;
            width: 100%;
            border-radius: 8px;
          "
        >
        </iframe>
      </BOffcanvas>

      <BOffcanvas v-model="offcanvasStates.second" placement="end">
        <slot name="header"><h2>Feedback Form</h2></slot>
        <iframe
          width="640px"
          height="480px"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=W9229i_wGkSZoBYqxQYL0lR1xshOYiRLm33c8S43MgBUNkVOSUg0RkNBMFAwSkZaMkNJMDlYTURHUS4u&embed=true"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          style="border: none; max-width: 100%; max-height: 100vh"
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          msallowfullscreen
        >
        </iframe>
      </BOffcanvas>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script lang="ts">
  import Layout from "@/layouts/solstice.vue";
  import {
    BBreadcrumb,
    BBreadcrumbItem,
    BButton,
    BOffcanvas,
  } from "bootstrap-vue-next";

  export default {
    name: "DocsPatternsUtilityChatbot",
    components: { Layout, BButton, BOffcanvas, BBreadcrumb, BBreadcrumbItem },
    data() {
      return {
        pageTitle: "Offcanvas",

        offcanvasStates: {
          first: false,
          second: false,
        },
      };
    },
    methods: {
      click(place = "start") {
        this.placement = place;
        this.show = !this.show;
      },

      toggleOffcanvas(key) {
        this.offcanvasStates[key] = !this.offcanvasStates[key];
      },
    },
  };
</script>
