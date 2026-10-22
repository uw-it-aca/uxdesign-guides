<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <BBreadcrumb>
        <BBreadcrumbItem to="/solstice/content">Content</BBreadcrumbItem>
        <BBreadcrumbItem active>{{ pageTitle }}</BBreadcrumbItem>
      </BBreadcrumb>
    </template>

    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#language">Language</PageContentsItem>
        <PageContentsItem anchor="#inclusivity">Inclusivity</PageContentsItem>
      </PageContents>
    </template>

    <template #lead>
      <p class="lead" style="max-width: 75ch">
        Actionable language in interface elements such as links, buttons, and
        headings play a crucial role in guiding users through a workflow. The
        words chosen shape how users perceive and use our tools to complete
        their tasks. Clear and concise actionable language helps our users
        understand and take action.
      </p>
      <p class="lead" style="max-width: 75ch">
        Inclusive language is paramount in fostering a welcoming and respectful
        digital environment and ensures that all users feel respected,
        represented, and included at the University of Washington.
      </p>
    </template>

    <template #content>
      <h2 class="ff-encode-sans fw-bold my-4" id="language">
        Actionable Language
      </h2>
      <p style="max-width: 85ch">
        When crafting language for labels, links, buttons, and headings, it's
        important to choose between active over passive terminology. Active
        language instills a sense of immediacy and clarity. Active verbs
        communicate a direct call to action, making it evident to users what
        steps they should take next. Passive language, on the other hand, tends
        to be more ambiguous and can create confusion regarding user
        expectations.
      </p>

      <h3 class="ff-encode-sans my-4">Choose active language</h3>
      <ul style="max-width: 85ch">
        <li>
          Clarity: Active language leaves no room for misinterpretation. Users
          can quickly grasp the intended action.
        </li>
        <li>
          Engagement: Active verbs inspire users to take immediate and
          intentional actions, fostering a more dynamic user experience.
        </li>
        <li>
          Empowerment: Users feel in control and empowered when presented with
          clear, actionable language.
        </li>
      </ul>

      <div class="my-5">
        <p>When creating labels:</p>
        <UsageBlock>
          <template #text
            >Opt for verbs that clearly indicate the user's next
            action</template
          >
          <template #preview
            ><div class="rounded-3 bg-body-tertiary border p-3">
              Submit application
            </div></template
          ></UsageBlock
        >
        <UsageBlock variant="dont">
          <template #text>do this..</template>
          <template #preview
            ><div class="rounded-3 bg-body-tertiary border p-3">
              Application submission
            </div></template
          ></UsageBlock
        >
        <p>Buttons are key elements in driving user interactions.</p>
        <UsageBlock>
          <template #text
            >Choose active verbs that resonate with the intended
            action</template
          >
          <template #preview
            ><div class="rounded-3 bg-body-tertiary border p-3">
              <button type="button" class="btn btn-action">
                Manage UW NetID account
              </button>
            </div></template
          ></UsageBlock
        >
        <UsageBlock variant="dont">
          <template #text>do this..</template>
          <template #preview
            ><div class="rounded-3 bg-body-tertiary border p-3">
              <button type="button" class="btn btn-action">
                UW NetID account management
              </button>
            </div></template
          ></UsageBlock
        >

        <p style="max-width: 85ch">
          Buttons need to be clear and predictable. Users should be able to
          anticipate what will happen when they select a button. Mislabeling a
          button causes confusion.
        </p>
      </div>

      <div class="my-5">
        <p>
          Headings set the tone for a section and can guide users on what to
          expect.
        </p>
        <UsageBlock>
          <template #text
            >Use active language to create impactful headings</template
          >
          <template #preview
            ><div class="rounded-3 bg-body-tertiary border p-3">
              Create and manage your academic plan
            </div></template
          ></UsageBlock
        >
        <UsageBlock variant="dont">
          <template #text>do this..</template>
          <template #preview
            ><div class="rounded-3 bg-body-tertiary border p-3">
              Academic plan creation and management
            </div></template
          ></UsageBlock
        >
      </div>

      <h3>Best Practices</h3>
      <h4>Heading and subheadings</h4>
      <p>
        Headings and subheadings help users identify their place, understand how
        things are organized, predict what actions they can take.
      </p>
      <p>Heading and subheadings should be concise and scannable:</p>
      <ul>
        <li>Use simple, clear language</li>
        <li>Keep headings to a single sentence</li>
        <li>Avoid using punctuation such as periods, commas, or semicolons</li>
        <li>
          Write in sentence case (capitalize the first word and proper nouns
          only)
        </li>
      </ul>
      <h4>Buttons</h4>
      <p>
        Buttons should always lead with a strong verb that encourages action. To
        provide enough context, use the content formula {verb} + {noun} on
        buttons, except in the case of common actions like “Done,” “Close,”
        “Cancel,” or “OK.”
      </p>

      <UsageBlock
        ><template #text
          >Use the content formula {verb} + {noun} on buttons</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <button type="button" class="btn btn-action">
              Download syllabus
            </button>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont">
        <template #text>Avoid using "new" with "Create" or "Add"</template>
        <template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <button type="button" class="btn btn-action">
              Add new assignment
            </button>
          </div></template
        >
      </UsageBlock>
      <UsageBlock
        ><template #text>Provide clear context of user action</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <button type="button" class="btn btn-action">
              Send us feedback
            </button>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #text>Missing context of user action</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <button type="button" class="btn btn-action">Feedback</button>
          </div></template
        ></UsageBlock
      >
      <h4>Links</h4>
      <p>
        Links serve as essential navigation elements. Effective and actionable
        language is crucial to guide users seamlessly through task completion.
      </p>

      <UsageBlock
        ><template #text>Be descriptive</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">View course schedule</a>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #text
          >Avoid link text that doesn't provide enough description</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">Click Here</a>
          </div></template
        ></UsageBlock
      >
      <UsageBlock
        ><template #text>Align with user goals</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">Apply for financial aid</a>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #text
          >Avoid ambiguous language that lacks a specific user action</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">Financial Aid Information</a>
          </div></template
        ></UsageBlock
      >
      <UsageBlock
        ><template #text>Utilize contextual language</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">Explore Biology programs</a>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #text
          >Failure to provide context creates confusion of intended link
          destination</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">Explore programs</a>
          </div></template
        ></UsageBlock
      >
      <UsageBlock
        ><template #text>Use consistent terminology</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">Submit enrollment form</a>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #text
          >Avoid using different words for the same action</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">Complete form</a>
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #text>Avoid redudancy </template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">Click Here to Download Syllabus</a>
          </div></template
        ></UsageBlock
      >

      <p>
        <strong>Prioritize Accessibility:</strong> Ensure link text is
        descriptive and meaningful (see sample #1 above) in order to assist
        users who rely on screen readers or other assistive technologies.
      </p>

      <p>
        Following these practices ensure a user-friendly and efficient
        experience for students, faculty, and staff.
      </p>
      <p>List of resources:</p>
      <ul>
        <li>
          <a href="http://uxdesign.uw.edu/interaction/labels.html"
            >http://uxdesign.uw.edu/interaction/labels.html</a
          >
        </li>
      </ul>

      <h2 class="ff-encode-sans fw-bold my-4" id="inclusivity">Inclusivity</h2>
      <p>
        Inclusive language is paramount in fostering a welcoming and respectful
        digital environment and ensures that all users feel respected,
        represented, and included at the University of Washington. This document
        outlines the significance of inclusive language in user interface design
        and clarifies its application within our university community context.
      </p>
      <h3>What is Inclusive Language?</h3>
      <p>
        Inclusive language refers to language choices that avoid stereotypes,
        biases, or exclusions based on identity characteristics such as race,
        gender, ethnicity, ability, age, sexual orientation, religion,
        socioeconomic status, or any other relevant factor. It encompasses:
      </p>
      <ul>
        <li>Using gender-neutral terminology.</li>
        <li>Prioritizing person-first language.</li>
        <li>Acknowledging and respecting diverse cultural backgrounds.</li>
        <li>Avoiding assumptions or stereotypes based on identity markers.</li>
        <li>Avoiding idioms, jargons, and acronyms.</li>
      </ul>
      <h3>Importance of Inclusive Language</h3>
      <p>
        Inclusive language is integral to the University of Washington's
        commitment to diversity, equity, and inclusion. It serves several key
        purposes:
      </p>
      <ul>
        <li>
          <strong>Reflecting Diversity:</strong> Inclusive language acknowledges
          and respects the diverse identities, backgrounds, and experiences of
          our university community members.
        </li>
        <li>
          <strong>Promoting Belonging:</strong> It cultivates a sense of
          belonging and inclusivity among all users, regardless of their race,
          gender, ethnicity, ability, or other identity markers.
        </li>
        <li>
          <strong>Enhancing Accessibility:</strong> Inclusive language
          contributes to the accessibility of our digital platforms by ensuring
          that content is understandable and relatable to all users.
        </li>
        <li>
          <strong>Aligning with Values:</strong> By prioritizing inclusive
          language, we uphold the university's values of equity, respect, and
          social justice.
        </li>
      </ul>
      <h3>Best Practices</h3>
      <h4>Prioritize Gender Neutrality</h4>
      <UsageBlock
        ><template #text>User gender neutral terms </template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            their<br />First-year students
          </div></template
        ></UsageBlock
      >

      <UsageBlock variant="dont"
        ><template #text
          >Avoid using specific genders when referring to more than one </template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            his or her <br />freshemen
          </div></template
        ></UsageBlock
      >

      <h4>Design for all levels of ability</h4>
      <UsageBlock
        ><template #text
          >Use terms specific to the action not the user </template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">Display your schedule</a> <br /><a href="#"
              >Play video</a
            >
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #text
          >Avoid terms that imply a specific user ability </template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            <a href="#">See your schedule</a> <br /><a href="#">Watch video</a>
          </div></template
        ></UsageBlock
      >
      <h4>
        Race, Ethnicity, Nationality, Religion, Native/Indigenous Identity:
      </h4>
      <UsageBlock
        ><template #text>Use inclusive language</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            Students from various cultural backgrounds
          </div></template
        ></UsageBlock
      >
      <UsageBlock variant="dont"
        ><template #text>Avoid outdated terms</template
        ><template #preview
          ><div class="rounded-3 bg-body-tertiary border p-3">
            Minority students
          </div></template
        ></UsageBlock
      >
    </template>
    <template #author>Diego Bejarano</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/solstice.vue";
  import UsageBlock from "@/components/UsageBlock.vue";
  import PageContents from "@/components/PageContents.vue";
  import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue-next";

  export default {
    name: "DocsPatternsMessaging",
    components: {
      Layout,
      UsageBlock,
      PageContents,
      BBreadcrumb,
      BBreadcrumbItem,
    },
    data() {
      return {
        pageTitle: "Language & Inclusivity",
      };
    },
  };
</script>
