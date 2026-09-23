<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        This guide offers simple principles and guidance for creating web
        resources that are easy to scan, follow, and use.
      </p>
    </template>
    <template #content>
      <div class="row mb-3">
        <div class="col-9">
          <SHeading level="2" class="display-6 ff-encode-sans my-4" id="what"
            >What is information design?</SHeading
          >
          <p class="mb-2">
            Information design is the practice of organizing, structuring, and
            presenting information and data so people can understand it quickly
            and clearly. It combines text, visual layout, hierarchy, and design
            elements to turn complex information into an easy-to-read format.
          </p>
          <SHeading
            level="2"
            class="display-6 ff-encode-sans mt-5 mb-4"
            id="why"
            >Why it's important</SHeading
          >
          <SHeading level="3" class="fw-medium ff-encode-sans mt-4 mb-3"
            >People scan, they don't read</SHeading
          >
          <p>
            The main reason good information design is that people don't read on
            the web, they scan. Studies have shown that ~80% of people scan
            pages and only ~16% read word-for-word.
          </p>
          <p>
            However, people do scroll, even long page – if it's content they
            need, and easy to find, they will scroll down.
          </p>
          <SHeading level="3" class="fw-medium ff-encode-sans mt-4 mb-3"
            >Help people, and machines</SHeading
          >
          <ul>
            <li class="pb-2">
              <strong> It improves readability</strong> – clear headings, bullet
              points, and white space guide the eye naturally through a page.
            </li>
            <li class="pb-2">
              <strong> It improves accessibility</strong> – well structured
              information is more easily consumed by people using screen
              readers, people with low literacy, or people with non-native
              language backgrounds.
            </li>
            <li class="pb-2">
              <strong> It reduces cognitive load</strong> – breaking content
              down into distinct and digestible chunks reduces overwhelm.
            </li>
            <li class="pb-2">
              <strong>
                Helps people find information or take action faster</strong
              >
              – well-designed pages helps people find what they need or take
              important next steps, and faster, so that they aren’t wasting
              time.
            </li>
            <li class="pb-2">
              <strong> It improves usability</strong> – studies have found that
              with information design improvements, the result was truly
              stellar: 124% better usability. (Measuring the Usability of
              Reading on the Web, Nielsen Norman Group, 1997)
            </li>
            <li class="pb-2">
              <strong> It reduces AI hallucinations</strong> – poorly structured
              content trains AI systems to make wrong connections: when related
              concepts appear too far apart, or when unrelated ideas get crammed
              into the same paragraph, AI models start associating things that
              shouldn’t be linked.
            </li>
          </ul>
          <SHeading
            level="2"
            class="display-6 ff-encode-sans mt-5 mb-4"
            id="prioritize"
            >Things to prioritize</SHeading
          >
          <p>
            If time is limited, focus on addressing these high-impact items:
          </p>
          <ol>
            <li class="pb-2"><strong>Make the page’s purpose clear</strong></li>
            <ul>
              <li class="pb-2">
                Ask yourself at each stage “what is the user trying to get done
                here/now?”
              </li>

              <li class="pb-2">
                Consider what features of a page will support that task or goal
              </li>
            </ul>

            <li class="pb-2">
              <strong>Guide the user</strong> — on each page have:
            </li>
            <ul>
              <li class="pb-2">
                A page title that clearly describes the page’s context and
                function
              </li>
              <li class="pb-2">A clear call to action</li>

              <li class="pb-2">
                A clear hierarchy — create a page structure using groups and
                headers to help users parse the page content
              </li>

              <li class="pb-2">A clear path through the page</li>

              <li class="pb-2">Clear feedback when action is taken</li>
            </ul>

            <li class="pb-2">
              <strong>Use headings and sub-headings well</strong>
            </li>
            <ul>
              <li class="pb-2">
                <strong>Headings are one of the most powerful cues </strong>for
                both readers and search systems.
              </li>

              <li class="pb-2">
                <strong>Create a proper hierarchy</strong> using semantic HTML.
                A proper hierarchy of headings should have: (1) only one top
                level heading (H1), and (2) at all other levels, at least two
                headings per level.
              </li>

              <li class="pb-2"><strong>Help users understand: </strong></li>
              <ul>
                <li class="pb-2">how things are organized</li>

                <li class="pb-2">
                  break down concepts or tasks into a manageable size.
                </li>

                <li class="pb-2">
                  specify actions they can take and what is optional (answer the
                  questions, “What do I have to do?” or "Do I have to Read
                  This?”)
                </li>
              </ul>

              <li class="pb-2">
                <strong>Be descriptive and use keywords </strong>naturally in
                headings – use target terms where it feels natural to reinforce
                topical clarity.
              </li>

              <li class="pb-2">
                <strong>Object or verb labels? </strong>Pay attention to whether
                a page title, header, or subheader is acting as a label for
                grouped content (for which it should be worded as an object
                rather than a task), and when it is acting as a call to action
                or guiding a user through a series of steps (for which it should
                be worded as a task).
              </li>
            </ul>

            <li class="pb-2">
              <strong>Favor structured, scannable formats</strong>
            </li>
            <ul>
              <li class="pb-2">
                <strong>Break up dense text</strong> with checklists, comparison
                tables, or short bullet summaries.
              </li>

              <li class="pb-2">
                <strong>Bold keywords</strong> – lists are more readable when
                start with verbs and have key words bolded.
              </li>
            </ul>

            <li class="pb-2">
              <strong>Say less, clearly</strong> – Be specific, concise, and
              direct.
            </li>
            <ul>
              <li class="pb-2">
                <strong>Keep it short</strong>. Avoid unnecessary words; aim for
                half the word count (or less) than conventional writing<strong
                  >.</strong
                >
              </li>

              <li class="pb-2">
                <strong>Lead with the takeaway</strong>. Start headers, bullet
                points, or sentences with key points or calls to actions.
              </li>

              <li class="pb-2">
                <strong>Use simple language. </strong>Avoid jargon, technical
                terms, and overly complex sentence structures.
              </li>

              <li class="pb-2">
                <strong>Replace vague terms</strong> with specific entities like
                product names, versions, locations, or dates.
              </li>

              <li class="pb-2">
                <strong>Provide clear, unambiguous instructions</strong> that
                leave no room for misinterpretation.
              </li>

              <li class="pb-2">
                <strong>Consider using AI to rewrite an existing page </strong>
                – Sample prompt: “<em
                  >Using the best practice identified in this page<a
                    href="https://uxdesign.uw.edu/info-design"
                  >
                    https://uxdesign.uw.edu/info-design</a
                  >
                  please heavily edit the attached page for &lt;audience> so
                  that it is optimized for reading and scanning on the web."</em
                >
              </li>
            </ul>
          </ol>

          <SHeading
            level="2"
            class="display-6 ff-encode-sans mt-5 mb-4"
            id="chunking"
            >Chunking content</SHeading
          >

          <p>
            Chunking refers to breaking information into meaningful, visually
            distinct units so
            <strong
              >readers can scan, understand, and remember it more easily</strong
            >. Clear chunking also helps AI systems recognize relationships
            correctly and avoid linking unrelated ideas.
          </p>
          <SHeading level="3" class="fw-medium ff-encode-sans mt-4 mb-3"
            >Core principles</SHeading
          >

          <ul>
            <li class="pb-2">
              <strong>Keep chunks compact and self-contained. </strong>Each
              section should stand on its own and stay focused on a single
              topic.
            </li>

            <li class="pb-2">
              <strong>Scope each section to one intent. </strong>Address one
              question or idea per section, such as <em>what</em>, <em>why</em>,
              or <em>how</em>.
            </li>

            <li class="pb-2">
              <strong>Start with the answer.</strong> Put the first one or two
              sentences in an answer-first style so readers get the main point
              quickly.
            </li>

            <li class="pb-2">
              <strong>Keep sections to a reasonable length.</strong> A target
              range of about 150–300 words helps avoid truncation and supports
              semantic matching in AI models.
            </li>

            <li class="pb-2">
              <strong>Keep paragraphs short.</strong> Aim for 2–4 sentences per
              paragraph so the content stays easy to digest.
            </li>

            <li class="pb-2">
              <strong>Strengthen entity clarity. </strong>Replace vague terms
              with specific names, versions, locations, or dates when possible.
            </li>

            <li class="pb-2">
              <strong>Use descriptive subheadings.</strong> Each chunk should
              have a heading that clearly signals what it covers.
            </li>
          </ul>
          <SHeading level="3" class="fw-medium ff-encode-sans mt-4 mb-3"
            >Why this matters</SHeading
          >

          <p>
            Well-chunked content is easier for people to scan and easier for AI
            systems to interpret correctly. When related ideas stay close
            together and each section has a clear purpose, the content is more
            usable and less likely to create confusion or result in “AI
            hallucinations.”
          </p>
          <SHeading
            level="2"
            class="display-6 ff-encode-sans mt-5 mb-4"
            id="disclosure"
            >Using tabs & accordions</SHeading
          >

          <SHeading level="3" class="fw-medium ff-encode-sans mt-4 mb-3"
            >Why to use</SHeading
          >

          <p>
            User interface mechanisms like tabs or accordions can simplify a
            page. When properly used, they can be an effective organizer within
            a content page or a web application.
          </p>
          <p>Specifically, tabs and accordions can:</p>
          <ul>
            <li class="pb-2">
              <strong>help users focus</strong> on few key pieces of content
            </li>

            <li class="pb-2"><strong>organize content</strong> into groups</li>

            <li class="pb-2">
              <strong>break down a task</strong> into multiple parts
            </li>

            <li class="pb-2"><strong>reduce overwhelm </strong></li>

            <li class="pb-2">
              <strong>present distinct views</strong> of an object or task
            </li>
          </ul>
          <SHeading level="3" class="fw-medium ff-encode-sans mt-4 mb-3"
            >When not to use</SHeading
          >

          <ul>
            <li class="pb-2">
              <strong
                >When content needs to be visible for most users to answer their
                questions or complete their primary task</strong
              >. Required information should never be hidden by default (or on
              page load), this can lead to user confusion or validation errors.
            </li>

            <li class="pb-2">
              <strong
                >When an uninterrupted reading flow is prioritized.</strong
              >
            </li>

            <li class="pb-2">
              <strong
                >When it is important to communicate a process or consumption
                order.</strong
              >
              (especially for tabs)
            </li>

            <li class="pb-2">
              <strong>If the a comparison is needed between content</strong>
              within two panels, as this task will become cognitively
              burdensome.
            </li>
          </ul>
          <SHeading level="4" class="fw-medium ff-open-sans mt-4"
            >The cost of nesting information</SHeading
          >

          <p>
            Nesting information inside a tab or accordion can make it harder for
            users to find and understand information. It is then better to show
            all page content at once when the use case supports it.
            Specifically, the following problems can occur:
          </p>
          <ul>
            <li class="pb-2">
              <strong>Users may overlook content</strong> because it is not
              visible at first glance, or when scanning the page
            </li>

            <li class="pb-2">
              <strong>Users must decide between topic headings. </strong> Norman
              Nielsen Group notes that “accordions shorten pages and reduce
              scrolling, but they increase the interaction cost by requiring
              people to decide on topic headings.”
            </li>

            <li class="pb-2">
              <strong>Accessibility is reduced</strong>. For all users and
              special users with disabilities, the site becomes more complicated
              to use with keyboard navigation or screen readers.
            </li>

            <li class="pb-2">
              <strong>Cross-device support increases. </strong>Disclosures add
              code and usability complexity and require more technical and
              design support to ensure they function properly on varying devices
              (e.g. mobile, tablet).
            </li>
          </ul>
          <SHeading level="3" class="fw-medium ff-encode-sans mt-4 mb-3"
            >Best practices</SHeading
          >

          <SHeading level="4" class="fw-medium ff-open-sans mt-4"
            >Tabs</SHeading
          >

          <p>
            Tabs are best used for organizing content into groups, breaking down
            a task into multiple parts, or presenting distinct views of an
            object or task.
          </p>
          <ul>
            <li class="pb-2">
              <strong>Tab groups should be limited to 2-6 tabs.</strong> Beyond
              that it may be helpful to introduce another level of
              navigation/hierarchy.
            </li>

            <li class="pb-2">
              <strong
                >Labeling and content grouping should match user
                expectations</strong
              >
              and mental model of the content.
            </li>

            <li class="pb-2">
              <strong>Tab labels should be concise and discrete</strong>,
              helping users clearly choose which one they are interested in.
            </li>

            <li class="pb-2">
              <strong
                >Tabs should not be used when it is important to communicate a
                process or consumption order</strong
              >
              (e.g. don’t use when a form on each tab needs to be completed in
              sequence).
            </li>
          </ul>

          <SHeading level="4" class="fw-medium ff-open-sans mt-4"
            >Accordions</SHeading
          >

          <p>
            Accordions are best for when people need only a few key pieces of
            content on a single page. By hiding most of the content, users can
            spend their time more efficiently focused on the few topics that
            matter.
          </p>
          <ul>
            <li class="pb-2">
              <strong
                >Labeling and content grouping should match user
                expectations</strong
              >
              and mental model of the content.
            </li>

            <li class="pb-2">
              <strong
                >Avoid nesting accordions inside of other accordions</strong
              >. For more than two tiers of content, consider other design
              components.
            </li>

            <li class="pb-2">
              <strong
                >Avoid using accordions when there's little visible content on
                the page.</strong
              >
            </li>

            <li class="pb-2">
              <strong>Avoid using all caps in accordion labels.</strong>
            </li>
          </ul>

          <SHeading
            level="2"
            class="display-6 ff-encode-sans mt-5 mb-4"
            id="instructions"
            >When giving instructions</SHeading
          >

          <p>
            Formatting instructions that are easy to scan, follow, and use in
            the moment is critical. It is especially useful when creating how-to
            guides, job aides, and other process support materials.
          </p>
          <SHeading level="3" class="fw-medium ff-encode-sans mt-4 mb-3"
            >Core principles</SHeading
          >

          <ul>
            <li class="pb-2">
              <strong>Separate instructions</strong> from background context or
              other content.
            </li>

            <li class="pb-2">
              <strong>Arrange steps in a logical, chronological order</strong>.
            </li>

            <li class="pb-2">
              <strong>Give one instruction at a time</strong> when possible.
              Focus each step on one action.
            </li>

            <li class="pb-2">
              <strong>Use active voice. </strong>Active voice (e.g., "Click the
              button") makes instructions clearer than passive voice (e.g., "The
              button is clicked").
            </li>

            <li class="pb-2">
              <strong>Use <em>italics </em>where appropriate </strong>for UI
              labels such as <em>Save</em>, <em>Submit</em>, or
              <em>Settings</em>, or technical terms, new terms or titles of
              software systems or documents.
            </li>
          </ul>
          <SHeading level="3" class="fw-medium ff-encode-sans mt-4 mb-3"
            >Formatting guidance</SHeading
          >

          <ul>
            <li class="pb-2">
              <strong>Use numbered lists for steps</strong> that must be
              completed in sequence.
            </li>

            <li class="pb-2">
              <strong>Use bullets for related items </strong>that do not need to
              be done in a specific order.
            </li>

            <li class="pb-2">
              <strong>Keep instructions consistent</strong> from section to
              section so readers know what to expect.
            </li>

            <li class="pb-2">
              <strong>Make headings clear and specific</strong> so users can
              find what they need quickly.
            </li>
          </ul>

          <SHeading level="2" class="display-6 ff-encode-sans mt-5 mb-4"
            >References</SHeading
          >

          <ul>
            <li class="pb-2">
              ​​Nielsen Norman Group. (2020, April 5).
              <em>How People Read Online: New and Old Findings. </em>
              <a href="https://www.nngroup.com/articles/how-people-read-online/"
                >https://www.nngroup.com/articles/how-people-read-online/</a
              >
            </li>

            <li class="pb-2">
              Nielsen Norman Group. (1997, Sept 30).
              <em>How Users Read on the Web. </em
              ><a
                href="https://www.nngroup.com/articles/how-users-read-on-the-web/"
                >https://www.nngroup.com/articles/how-users-read-on-the-web/</a
              >
            </li>

            <li class="pb-2">
              Nielsen Norman Group. (1996, May 31).
              <em
                >Inverted Pyramids in Cyberspace.
                <a
                  href="https://www.nngroup.com/articles/inverted-pyramids-in-cyberspace/"
                  >https://www.nngroup.com/articles/inverted-pyramids-in-cyberspace/</a
                ></em
              >
            </li>

            <li class="pb-2">
              Nielsen Norman Group. (1997, Oct 1).
              <em>Measuring the Usability of Reading on the Web. </em
              ><a
                href="https://www.nngroup.com/articles/measuring-the-usability-of-reading-on-the-web/"
                >https://www.nngroup.com/articles/measuring-the-usability-of-reading-on-the-web/</a
              >
            </li>

            <li class="pb-2">
              Nielsen Norman Group. (2019, Aug 25).
              <em>Text Scanning Patterns: Eyetracking Evidence. </em
              ><a
                href="https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/"
                >https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/</a
              >
            </li>

            <li class="pb-2">
              Nielsen Norman Group. (2026, Aug 19).
              <em
                >F-Shaped Pattern of Reading on the Web: Misunderstood, But
                Still Relevant (Even on Mobile).
              </em>
              <a
                href="https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/"
                >https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/</a
              >
            </li>

            <li class="pb-2">
              Jumpfly. (2025, Nov 19).
              <em>10 Content Chunking Tips for AI, Search, and Humans. </em>
              <a
                href="https://www.jumpfly.com/blog/10-content-chunking-tips-for-ai-search-and-humans/"
                >https://www.jumpfly.com/blog/10-content-chunking-tips-for-ai-search-and-humans/</a
              >
            </li>

            <li class="pb-2">
              Nielsen Norman Group. (2017, Nov 26).
              <em>Zigzag Image–Text Layouts Make Scanning Less Efficient. </em>
              <a href="https://www.nngroup.com/articles/zigzag-page-layout/"
                >https://www.nngroup.com/articles/zigzag-page-layout/</a
              >
            </li>

            <li class="pb-2">
              Nielsen Norman Group. (2014, May 18).
              <em
                >Accordions Are Not Always the Answer for Complex Content on
                Desktops.
              </em>
              <a
                href="https://www.nngroup.com/articles/accordions-complex-content/"
                >https://www.nngroup.com/articles/accordions-complex-content/</a
              >
            </li>

            <li class="pb-2">
              Accessibility Designer Guide. (n.d.).
              <em>Nested content. </em>
              <a
                href="https://www.accessibility-designer-guide.com/docs/Architecture/nested-content/"
                >https://www.accessibility-designer-guide.com/docs/Architecture/nested-content/</a
              >
            </li>

            <li class="pb-2">
              Nielsen Norman Group. (2015, Nov 15).
              <em
                >Legibility, Readability, and Comprehension: Making Users Read
                Your Words</em
              >.
              <a
                href="https://www.nngroup.com/articles/legibility-readability-comprehension/"
                >https://www.nngroup.com/articles/legibility-readability-comprehension/</a
              >
            </li>

            <li class="pb-2">
              Nielsen Norman Group. (2009, Dec 6).
              <em>Short-Term Memory and Web Usability. </em>
              <a
                href="https://www.nngroup.com/articles/short-term-memory-and-web-usability/"
                >https://www.nngroup.com/articles/short-term-memory-and-web-usability/</a
              >
            </li>
          </ul>
        </div>
        <div class="col-3">
          <div class="sticky-top">
            <div class="pt-4">
              <p class="fw-bold">On this page</p>
              <ul
                id="TableOfContents"
                class="list-unstyled m-0 ps-3"
                style="border-left: solid 1px #666"
              >
                <li class="mb-1">
                  <a href="#what" class="">What is information design?</a>
                </li>
                <li class="mb-1">
                  <a href="#why" class="">Why it's important</a>
                </li>
                <li class="mb-1">
                  <a href="#prioritize" class="">Things to prioritize</a>
                </li>
                <li class="mb-1">
                  <a href="#chunking" class="">Chunking content</a>
                </li>
                <li class="mb-1">
                  <a href="#disclosure" class="">Using tabs & accordions</a>
                </li>
                <li class="mb-1">
                  <a href="#instructions" class="">Giving instructions</a>
                </li>
              </ul>
            </div>
          </div>
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
        pageTitle: "Information Design",
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
