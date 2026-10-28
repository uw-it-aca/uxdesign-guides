<template>
  <Layout :page-title="pageTitle" :author="author">
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
        Learn how to use Solstice's comprehensive documentation to design
        highly-usable user experiences.
      </p>
    </template>
    <template #toc></template>
    <template #content>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
        accusantium nobis dicta saepe necessitatibus eos eius quas quod quo
        blanditiis, eum dolor totam nesciunt harum beatae recusandae! Harum, id
        fugiat.
      </p>
    </template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";

  export default {
    name: "DocsComponentLifecycle",
    components: { Layout },
    data() {
      return {
        pageTitle: "Design Principles",
        author: "Charlon Palacay",
      };
    },
  };
</script>
