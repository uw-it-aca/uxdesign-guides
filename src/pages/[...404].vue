<template>
  <Layout :page-title="pageTitle" noindex>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Sorry, we couldn't find the page you were looking for.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col-8">
          <p>
            Our UX Design Guides help teams turn user needs into clear, useful,
            and consistent digital experiences. Explore practical guidance from
            our UX team to plan your process, make informed design decisions,
            and create products and services that work better for everyone.
          </p>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";

  export default {
    name: "PageNotFound",
    components: { Layout },
    data() {
      return {
        pageTitle: "404: Page Not Found",
      };
    },
  };
</script>
