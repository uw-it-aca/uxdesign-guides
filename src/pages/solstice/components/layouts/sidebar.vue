<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/components">Components</BBreadcrumbItem>
        <BBreadcrumbItem to="/solstice/components/layouts"
          >Layouts</BBreadcrumbItem
        >
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Sidebar is a side navigtion based layout intended to support different
        menu navigation structures. The content is can be fixed or fluid.
      </p>
    </template>
    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#anatomy">Anatomy</PageContentsItem>
        <PageContentsItem anchor="#variants">Variants</PageContentsItem>
        <PageContentsItem anchor="#options">Options</PageContentsItem>
        <PageContentsItem anchor="#usage">Usage</PageContentsItem>
        <PageContentsItem anchor="#access">Accessibility</PageContentsItem>
        <PageContentsItem anchor="#implement">Implementation</PageContentsItem>
      </PageContents>
    </template>

    <template #content>
      <h2 id="variants">Variants</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga
        corporis totam eligendi molestiae ex aperiam soluta, consectetur
        accusamus accusantium officia praesentium, magni numquam sunt minus
        architecto libero enim tempore!
      </p>

      <h2 id="options">Options</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quibusdam
        doloremque quaerat nulla enim, magni ut pariatur est dolorum ullam sint
        rerum odio hic perspiciatis, commodi adipisci, vero sapiente impedit?
      </p>

      <h2 id="anatomy">Anatomy</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, sit, quo
        ab pariatur, recusandae obcaecati necessitatibus doloribus ad a dolor
        minus saepe? Quaerat cupiditate ipsa ut nulla nostrum ex aut!
      </p>

      <h2 id="usage">Usage</h2>
      <CodeBlock>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-sidebar :app-name="'App Name'" :app-root-url="'/'">&lt;/axdd-sidebar>
</code></pre>
        </template>
      </CodeBlock>

      <h2 id="access">Accessibility</h2>
      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html</a
        >
      </p>

      <h2 id="implement">Implementation</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h3>Props</h3>
      <table class="small table">
        <thead>
          <tr>
            <th scope="col" class="w-25">Prop</th>
            <th scope="col">Required</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col" class="w-50">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>:app-name</code></th>
            <td>true</td>
            <td>String</td>
            <td>appName</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>:app-root-url</code></th>
            <td>true</td>
            <td>String</td>
            <td>#</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>:variant</code></th>
            <td>false</td>
            <td>String</td>
            <td>dark</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
        </tbody>
      </table>

      <h3>Slots</h3>
      <table class="small table">
        <thead>
          <tr>
            <th scope="col" class="w-25">Slot</th>
            <th scope="col">Required</th>
            <th scope="col">Fallback</th>
            <th scope="col" class="w-50">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>#profile</code></th>
            <td>false</td>
            <td>yes</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#bar</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#navigation</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#logo</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#main</code></th>
            <td>true</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#aside</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#footer</code></th>
            <td>false</td>
            <td>yes</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
        </tbody>
      </table>

      <h3>Default</h3>

      <CodeBlock>
        <template #preview>
          <SSidebar
            :app-name="'SideBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="border"
          >
            <template #profile> profile here... </template>
            <template #navigation> nav here... </template>
            <template #main>
              <div class="row">
                <div class="col mt-3">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer></template>
          </SSidebar>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-sidebar :app-name="'App Name'" :user-name="'javerage'">
  &lt;template #profile> profile here... &lt;/template>
  &lt;template #navigation>
    nav here...
  &lt;/template>
  &lt;template #main>
    content here...
  &lt;template>
&lt;/axdd-sidebar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Color Theming</h3>

      <CodeBlock>
        <template #preview>
          <SSidebar
            :app-name="'SideBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="border"
          >
            <template #profile> profile here... </template>
            <template #navigation> nav here... </template>
            <template #main>
              <div class="row">
                <div class="col mt-3">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer></template>
          </SSidebar>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;axdd-sidebar :app-name="'App Name'" :variant="'dark'" class="bg-primary">
&lt;/axdd-sidebar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Logo Branding</h3>

      <CodeBlock>
        <template #preview>
          <SSidebar
            :app-name="'SideBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="border"
          >
            <template #profile> profile here... </template>
            <template #logo><i class="bi bi-emoji-smile"></i></template>
            <template #navigation> nav here... </template>
            <template #main>
              <div class="row">
                <div class="col mt-3">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer></template>
          </SSidebar>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;axdd-sidebar :app-name="'App Name'" :variant="'dark'" class="bg-primary">
  &lt;template #logo>
    &lt;i class="bi bi-emoji-smile">&lt;/i>
  &lt;/template>
&lt;/axdd-sidebar>
</code></pre>
        </template>
      </CodeBlock>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import CodeBlock from "@/components/CodeBlock.vue";
  import PageContents from "@/components/PageContents.vue";
  import { SSidebar } from "solstice-vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsSidebar",
    components: {
      Layout,
      CodeBlock,
      PageContents,
      SSidebar,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    data() {
      return {
        pageTitle: "Sidebar",
      };
    },
  };
</script>
