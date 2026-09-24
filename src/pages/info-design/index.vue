<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 80ch">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse a
        neque non voluptas blanditiis saepe, tempora laudantium necessitatibus
        cum hic nobis libero delectus ullam alias facilis est provident. Quae.
      </p>
    </template>
    <template #content>
      <div class="row">
        <div class="col">
          <!-- MARK: vertical spacing scale example content -->
          <!-- see docs/vertical-spacing-scale.md -->

          <section class="mb-4">
            <h2 class="display-6 ff-encode-sans mb-3">
              Lorem Ipsum Section Heading
            </h2>
            <p style="max-width: 80ch">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              odio libero fugiat impedit perferendis! Accusamus porro ex
              accusantium voluptates cupiditate maiores vero, commodi aliquam
              eaque quaerat quasi libero placeat eum!
            </p>
            <p style="max-width: 80ch">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>

            <section class="mb-3">
              <h3 class="fw-medium ff-encode-sans mb-2">
                Lorem Ipsum Child Section Sub-heading
              </h3>
              <p style="max-width: 80ch">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit.
              </p>
              <ul>
                <li>Ut enim ad minima veniam, quis nostrum exercitationem</li>
                <li>Ullam corporis suscipit laboriosam, nisi ut aliquid</li>
                <li>Ex ea commodi consequatur? Quis autem vel eum iure</li>
              </ul>
            </section>

            <section>
              <h3 class="fw-medium ff-encode-sans mb-2">
                Another Lorem Ipsum Child Section Sub-heading
              </h3>
              <p style="max-width: 80ch">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
              </p>
              <ol>
                <li>Similique sunt in culpa qui officia deserunt mollitia</li>
                <li>Animi, id est laborum et dolorum fuga. Et harum</li>
                <li>Quidem rerum facilis est et expedita distinctio</li>
              </ol>
            </section>
          </section>

          <section class="mb-4">
            <h2 class="display-6 ff-encode-sans mb-3">
              Second Lorem Ipsum Section
            </h2>
            <p style="max-width: 80ch">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          </section>

          <section>
            <h2 class="display-6 ff-encode-sans mb-3">
              Third Lorem Ipsum Section
            </h2>
            <p style="max-width: 80ch">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>

            <section>
              <h3 class="fw-medium ff-encode-sans mb-2">
                Lorem Ipsum Child Section Sub-heading
              </h3>
              <p style="max-width: 80ch">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate.
              </p>
              <ol>
                <li>Similique sunt in culpa qui officia deserunt mollitia</li>
                <li>Animi, id est laborum et dolorum fuga. Et harum</li>
                <li>Quidem rerum facilis est et expedita distinctio</li>
              </ol>
            </section>
          </section>
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
        pageTitle: "Information Design Guides",
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
