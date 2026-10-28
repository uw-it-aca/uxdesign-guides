<template>
  <Layout :page-title="pageTitle" :author="author">
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
          src="https://purple.uw.edu/chat/e0c28dde-a219-4199-9763-1f4dfd093927/true?silentLogin=true&showModelName=true&showDisclaimer=false"
          frameborder="0"
          title="UX@UW Design Agent"
          loading="lazy"
          style="
            display: block;
            height: calc(100dvh - 8rem);
            width: 100%;
            border-radius: 8px;
          "
        >
        </iframe>
      </BOffcanvas>

      <BOffcanvas v-model="offcanvasStates.second" placement="end">
        <slot name="header"><h2>Feedback Form</h2></slot>
        <iframe
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=W9229i_wGkSZoBYqxQYL0lR1xshOYiRLm33c8S43MgBUNkVOSUg0RkNBMFAwSkZaMkNJMDlYTURHUS4u&embed=true"
          frameborder="0"
          marginwidth="0"
          marginheight="0"
          style="
            display: block;
            height: calc(100dvh - 8rem);
            width: 100%;
            border-radius: 8px;
          "
          allowfullscreen
          webkitallowfullscreen
          mozallowfullscreen
          msallowfullscreen
        >
        </iframe>
      </BOffcanvas>
    </template>
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
  import PageContents from "@/components/PageContents.vue";
  import PageContentsItem from "@/components/PageContentsItem.vue";

  export default {
    name: "DocsPatternsUtilityChatbot",
    components: {
      Layout,
      BButton,
      BOffcanvas,
      BBreadcrumb,
      BBreadcrumbItem,
      PageContents,
      PageContentsItem,
    },
    data() {
      return {
        pageTitle: "Offcanvas",
        author: "Charlon Palacay",

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
