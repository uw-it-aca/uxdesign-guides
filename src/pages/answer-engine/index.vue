<template>
  <Layout :page-title="pageTitle">
    <template #lead>
      <p class="lead" style="max-width: 85ch">
        Answer engine optimization (AEO) makes pages easy for AI answer engines
        to read, understand, and cite. These best practices help your content
        show up accurately in AI-generated answers.
      </p>
    </template>
    <template #toc>
      <PageContents>
        <PageContentsItem anchor="#what">What is AEO?</PageContentsItem>
        <PageContentsItem anchor="#readable">Readable pages</PageContentsItem>
        <PageContentsItem anchor="#metadata">Page metadata</PageContentsItem>
        <PageContentsItem anchor="#discovery"
          >Sitemap &amp; robots</PageContentsItem
        >
        <PageContentsItem anchor="#structured-data"
          >Structured data</PageContentsItem
        >
        <PageContentsItem anchor="#headings"
          >Question headings</PageContentsItem
        >
        <PageContentsItem anchor="#placeholder"
          >Placeholder text</PageContentsItem
        >
        <PageContentsItem anchor="#checklist"
          >Author checklist</PageContentsItem
        >
        <PageContentsItem anchor="#references">References</PageContentsItem>
      </PageContents>
    </template>
    <template #content>
      <section class="mb-4" style="max-width: 85ch">
        <SHeading level="2" class="display-6 ff-encode-sans mb-3" id="what"
          >What is answer engine optimization?</SHeading
        >
        <p>
          Answer engine optimization is the practice of structuring web pages so
          AI tools such as ChatGPT, Claude, Perplexity, and Google's AI
          Overviews can find them, understand them, and quote them accurately in
          their answers.
        </p>
        <p>
          It builds on search engine optimization (SEO) rather than replacing
          it. The difference is in how the content gets used. A search engine
          lists links to whole pages. An answer engine splits pages into
          passages, picks the passages that best match a question, and writes an
          answer from them, citing the source. So a page needs to be readable
          without running code, clearly labeled, and written in sections that
          still make sense when quoted on their own.
        </p>
      </section>

      <section class="mb-4" style="max-width: 85ch">
        <SHeading level="2" class="display-6 ff-encode-sans mb-3" id="readable"
          >Can answer engines read the page?</SHeading
        >
        <p>
          Only if the content is in the HTML the server sends. Most AI crawlers,
          including OpenAI's GPTBot and Anthropic's ClaudeBot, download a page's
          HTML but don't run its JavaScript. In Vercel's study of AI crawler
          traffic, none of the major AI crawlers rendered JavaScript. Google's
          Gemini, which uses Googlebot, and Applebot were the exceptions.
        </p>
        <p>
          Sites built with JavaScript frameworks often render their content in
          the browser, which leaves those crawlers with an empty page. To make
          the content readable:
        </p>
        <ul>
          <li class="mb-1">
            Serve the page's text, headings, and links in the initial HTML,
            using server-side rendering or pre-rendering.
          </li>
          <li class="mb-1">
            Use real links (<code>&lt;a href&gt;</code>) for navigation, so
            crawlers can follow them from page to page.
          </li>
          <li class="mb-1">
            Return a real 404 status for pages that don't exist, so error pages
            are not indexed as content.
          </li>
          <li class="mb-1">
            Keep drafts, templates, and internal pages out of search indexes.
          </li>
        </ul>
      </section>

      <section class="mb-4" style="max-width: 85ch">
        <SHeading level="2" class="display-6 ff-encode-sans mb-3" id="metadata"
          >How do engines know what a page is about?</SHeading
        >
        <p>
          They read the page's title, description, and canonical URL. Every page
          should have its own:
        </p>
        <ul>
          <li>
            <strong>Title</strong> — the page name followed by the site name,
            for example "What is UX? - UX Design Guides". Make each title
            unique.
          </li>
          <li>
            <strong>Description</strong> — a one- or two-sentence summary of the
            page, under about 160 characters. Search results and answer engines
            often show this text when they cite the page.
          </li>
          <li>
            <strong>Canonical URL</strong> — the one official address of the
            page. If the same content is published at more than one address, the
            canonical URL tells engines to treat the copies as one page instead
            of splitting credit between them.
          </li>
        </ul>
        <p>
          A page's opening paragraph is a good source for its description. Write
          it as a direct summary of the page.
        </p>
      </section>

      <section class="mb-4" style="max-width: 85ch">
        <SHeading level="2" class="display-6 ff-encode-sans mb-3" id="discovery"
          >How do crawlers find every page?</SHeading
        >
        <p>
          A sitemap lists them. Publish a <code>sitemap.xml</code> with the
          canonical URL of every public page, and keep it up to date as pages
          are added or removed.
        </p>
        <p>
          A <code>robots.txt</code> file tells crawlers what they may visit and
          where the sitemap is. If you want your content cited, make sure it
          doesn't block AI crawlers. Crawlers only read
          <code>robots.txt</code> at the root of a host, so a site that lives in
          a subfolder should also submit its sitemap directly, for example in
          Google Search Console and Bing Webmaster Tools.
        </p>
      </section>

      <section class="mb-4" style="max-width: 85ch">
        <SHeading
          level="2"
          class="display-6 ff-encode-sans mb-3"
          id="structured-data"
          >Why add structured data?</SHeading
        >
        <p>
          Structured data tells engines who published a page, what kind of page
          it is, where it sits in the site, and when it last changed, in a
          standard format (schema.org JSON-LD) that doesn't depend on reading
          the layout. Engines use it to attribute and date what they cite.
        </p>
        <p>Useful types for guides and documentation:</p>
        <ul>
          <li>
            <strong>Organization</strong> — the team or institution that
            publishes and maintains the content.
          </li>
          <li>
            <strong>TechArticle</strong> or <strong>Article</strong> — the page
            itself, with its headline, description, and canonical URL.
          </li>
          <li>
            <strong>BreadcrumbList</strong> — the page's place in the site, for
            example Guides › Process › Validate.
          </li>
          <li>
            <strong>Date modified</strong> — when the content last changed.
            Engines tend to favor content that is visibly current, so keep this
            date accurate rather than setting it on every publish.
          </li>
        </ul>
        <p>
          Use FAQ markup (<code>FAQPage</code>) only for pages that really are a
          list of questions and answers. Since 2023, Google shows FAQ rich
          results only for well-known government and health websites.
        </p>
      </section>

      <section class="mb-4" style="max-width: 85ch">
        <SHeading level="2" class="display-6 ff-encode-sans mb-3" id="headings"
          >Why phrase headings as questions?</SHeading
        >
        <p>
          Because people ask answer engines questions, and a heading that
          matches the question, followed directly by the answer, gives the
          engine a passage it can quote as is. This is a writing practice, not a
          published ranking factor, but it follows from how answer engines use
          pages.
        </p>

        <section class="mb-3">
          <SHeading level="3" class="fw-medium ff-encode-sans mb-2"
            >How does a question heading help?</SHeading
          >
          <p>
            Answer engines usually split a page into passages at its headings,
            then match passages against the user's question. A heading helps in
            two ways:
          </p>
          <ul>
            <li>
              <strong>Matching</strong> — a passage under "How should you
              validate design decisions?" closely matches someone asking how to
              validate a design. A passage under "Recommended Approach" has to
              rely on its body text alone.
            </li>
            <li>
              <strong>Context</strong> — once a passage is cut out of the page,
              the heading is often all that says what it is about. Generic
              headings that repeat across pages, such as "Recommended Approach"
              or "Guiding Principles", don't tell a reader which page the
              passage came from.
            </li>
          </ul>
        </section>

        <section class="mb-3">
          <SHeading level="3" class="fw-medium ff-encode-sans mb-2"
            >Where does the answer go?</SHeading
          >
          <p>
            In the first sentence or two below the heading. Answer engines
            prefer passages that answer the question directly. If the answer
            comes three paragraphs later, after background, the passage is
            weaker even with a good heading. Only rephrase a heading as a
            question if the section opens with the answer.
          </p>
        </section>

        <section class="mb-3">
          <SHeading level="3" class="fw-medium ff-encode-sans mb-2"
            >What does a good question heading look like?</SHeading
          >
          <p>
            It names the topic and asks what a reader would ask. Some examples:
          </p>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Generic heading</th>
                  <th scope="col">Question heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Recommended Approach</td>
                  <td>How should you validate design decisions?</td>
                </tr>
                <tr>
                  <td>Common Pitfalls</td>
                  <td>What are common pitfalls when iterating?</td>
                </tr>
                <tr>
                  <td>Guiding Principles</td>
                  <td>How do you choose the right page type?</td>
                </tr>
                <tr>
                  <td>Mobile Considerations</td>
                  <td>How should forms work on mobile?</td>
                </tr>
                <tr>
                  <td>Chunking content</td>
                  <td>What is content chunking?</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <SHeading level="3" class="fw-medium ff-encode-sans mb-2"
            >When should a heading stay a name?</SHeading
          >
          <p>
            When the section is a reference entry that people scan or look up by
            name, such as Resources, Purpose, Typical Features, Anatomy,
            Variants, or the name of a component or page type. Turning those
            into questions makes a page harder to scan and adds little, because
            people already search for them by name. A page where every heading
            is a question also reads like a marketing FAQ, so save questions for
            sections that answer something a person would type or say.
          </p>
        </section>
      </section>

      <section class="mb-4" style="max-width: 85ch">
        <SHeading
          level="2"
          class="display-6 ff-encode-sans mb-3"
          id="placeholder"
          >Why does placeholder text matter?</SHeading
        >
        <p>
          Because answer engines index it like any other content. A published
          page with "lorem ipsum" text, especially in its opening paragraph or
          description, looks like a low-quality page and can be shown as-is in
          search results. Replace placeholder text before publishing, or keep
          the page out of search indexes until it has real content, and keep a
          list of pages that still need writing.
        </p>
      </section>

      <section class="mb-4" style="max-width: 85ch">
        <SHeading level="2" class="display-6 ff-encode-sans mb-3" id="checklist"
          >What should content authors do?</SHeading
        >
        <ul>
          <li class="mb-1">
            Open every page with a paragraph that summarizes it in one or two
            sentences, under 160 characters.
          </li>
          <li class="mb-1">
            Phrase guidance headings as the question a reader would ask, and
            answer it in the first sentence below.
          </li>
          <li class="mb-1">
            Keep each section focused on one topic, so it makes sense when
            quoted alone. See
            <BLink to="/info-design">chunking content</BLink> in the Information
            Design guide.
          </li>
          <li class="mb-1">
            Make headings specific to the page. Avoid generic headings that
            repeat across pages.
          </li>
          <li class="mb-1">
            Name and link the source of every quote and statistic.
          </li>
          <li class="mb-1">
            Write alt text for diagrams that explains what they show, since
            engines can't read the image.
          </li>
          <li class="mb-1">
            Replace placeholder text before a page is considered done.
          </li>
        </ul>
      </section>

      <section style="max-width: 85ch">
        <SHeading
          level="2"
          class="display-6 ff-encode-sans mb-3"
          id="references"
          >References</SHeading
        >
        <ul>
          <li class="mb-1">
            <a href="https://vercel.com/blog/the-rise-of-the-ai-crawler"
              >The rise of the AI crawler</a
            >, Vercel (December 2024)
          </li>
          <li class="mb-1">
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"
              >Understand JavaScript SEO basics</a
            >, Google Search Central
          </li>
          <li class="mb-1">
            <a
              href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls"
              >How to specify a canonical URL</a
            >, Google Search Central
          </li>
          <li class="mb-1">
            <a
              href="https://developers.google.com/search/docs/appearance/snippet"
              >How to write meta descriptions</a
            >, Google Search Central
          </li>
          <li class="mb-1">
            <a
              href="https://developers.google.com/search/blog/2023/08/howto-faq-changes"
              >Changes to HowTo and FAQ rich results</a
            >, Google Search Central Blog (August 2023)
          </li>
          <li class="mb-1">
            <a href="https://www.sitemaps.org/protocol.html"
              >Sitemaps protocol</a
            >, sitemaps.org
          </li>
          <li class="mb-1">
            <a href="https://schema.org/TechArticle">TechArticle</a> and
            <a href="https://schema.org/BreadcrumbList">BreadcrumbList</a>,
            schema.org
          </li>
        </ul>
      </section>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
  import Layout from "@/layouts/default.vue";
  import PageContents from "@/components/PageContents.vue";
  import PageContentsItem from "@/components/PageContentsItem.vue";
  import { BLink } from "bootstrap-vue-next";
  import { SHeading } from "solstice-vue";

  export default {
    name: "AnswerEngineIndex",
    components: {
      Layout,
      PageContents,
      PageContentsItem,
      BLink,
      SHeading,
    },
    data() {
      return {
        pageTitle: "Answer Engine Optimization",
      };
    },
  };
</script>
