import { describe, expect, it } from "vitest";
import { h } from "vue";

import {
  SITE_URL,
  breadcrumbTrail,
  canonicalUrl,
  displayDate,
  pageHead,
  pageModified,
  serializeJsonLd,
  structuredData,
  summarize,
  vnodeText,
} from "../head";

describe("canonicalUrl", () => {
  it("points every page at the canonical host", () => {
    expect(canonicalUrl("/")).toBe(`${SITE_URL}/`);
    expect(canonicalUrl("/xd-team")).toBe(`${SITE_URL}/xd-team`);
  });

  it("drops trailing slashes", () => {
    expect(canonicalUrl("/process-guides/")).toBe(`${SITE_URL}/process-guides`);
  });
});

describe("vnodeText", () => {
  it("collects text from nested elements and component slots", () => {
    const Link = { render: () => null };
    const vnodes = [
      h("p", { class: "lead" }, [
        "UX is a   human-centered\n way. ",
        h("strong", "Really"),
        h(Link, null, { default: () => ["a link"] }),
      ]),
    ];

    expect(vnodeText(vnodes)).toBe("UX is a human-centered way. Really a link");
  });

  it("returns an empty string for a missing slot", () => {
    expect(vnodeText(undefined)).toBe("");
  });
});

describe("summarize", () => {
  it("keeps short text as is", () => {
    expect(summarize("Short.")).toBe("Short.");
  });

  it("keeps whole sentences while they fit", () => {
    expect(summarize("One two. Three four. Five six seven.", 20)).toBe(
      "One two. Three four.",
    );
  });

  it("cuts a long first sentence at a word boundary", () => {
    expect(summarize("alpha beta gamma delta epsilon", 18)).toBe(
      "alpha beta gamma…",
    );
  });
});

describe("pageHead", () => {
  const base = { title: "What is UX?", siteName: "UX Design Guides" };
  const meta = (head, key) =>
    head.meta.find((m) => m.name === key || m.property === key)?.content;

  it("titles pages after the page and the site", () => {
    const head = pageHead({ ...base, path: "/what-is-ux" });

    expect(head.title).toBe("What is UX? - UX Design Guides");
    expect(meta(head, "og:title")).toBe(head.title);
  });

  it("titles the home page with the site name alone", () => {
    expect(pageHead({ ...base, path: "/" }).title).toBe("UX Design Guides");
  });

  it("adds a canonical link and og:url", () => {
    const head = pageHead({ ...base, path: "/what-is-ux" });

    expect(head.link).toEqual([
      { rel: "canonical", href: `${SITE_URL}/what-is-ux` },
    ]);
    expect(meta(head, "og:url")).toBe(`${SITE_URL}/what-is-ux`);
  });

  it("adds the description when there is one", () => {
    const head = pageHead({ ...base, path: "/a", description: "About UX." });

    expect(meta(head, "description")).toBe("About UX.");
    expect(meta(head, "og:description")).toBe("About UX.");
    expect(meta(pageHead({ ...base, path: "/a" }), "description")).toBe(
      undefined,
    );
  });

  it("adds JSON-LD structured data", () => {
    const [script] = pageHead({ ...base, path: "/what-is-ux" }).script;

    expect(script.type).toBe("application/ld+json");
    expect(JSON.parse(script.innerHTML)["@context"]).toBe("https://schema.org");
  });

  it("marks noindex pages and gives them no canonical URL", () => {
    const head = pageHead({ ...base, path: "/404", noindex: true });

    expect(meta(head, "robots")).toBe("noindex");
    expect(head.link).toEqual([]);
    expect(head.script).toEqual([]);
    expect(meta(head, "og:url")).toBe(undefined);
  });
});

const PAGES = {
  "/": { title: "Welcome", modified: "2026-01-01T00:00:00Z" },
  "/solstice": { title: "Getting Started" },
  "/solstice/components/forms": { title: "Forms" },
  "/solstice/components/forms/input": {
    title: "Input Fields",
    modified: "2026-10-22T11:19:05-07:00",
  },
};

describe("breadcrumbTrail", () => {
  it("lists home, the ancestors that are pages, then the page", () => {
    expect(
      breadcrumbTrail(
        "/solstice/components/forms/input",
        "Input Fields",
        PAGES,
      ),
    ).toEqual([
      { name: "UX Design Guides", path: "/" },
      { name: "Getting Started", path: "/solstice" },
      // "/solstice/components" is not in PAGES, so it is skipped
      { name: "Forms", path: "/solstice/components/forms" },
      { name: "Input Fields", path: "/solstice/components/forms/input" },
    ]);
  });

  it("is only the home page for the home page", () => {
    expect(breadcrumbTrail("/", "Welcome", PAGES)).toEqual([
      { name: "UX Design Guides", path: "/" },
    ]);
  });
});

describe("structuredData", () => {
  const nodes = (data) =>
    Object.fromEntries(data["@graph"].map((node) => [node["@type"], node]));

  it("describes a guide page as a dated article with breadcrumbs", () => {
    const graph = nodes(
      structuredData({
        title: "Input Fields",
        path: "/solstice/components/forms/input",
        description: "Input fields allow users to enter data.",
        pages: PAGES,
      }),
    );
    const url = `${SITE_URL}/solstice/components/forms/input`;

    expect(graph.TechArticle).toMatchObject({
      url,
      headline: "Input Fields",
      description: "Input fields allow users to enter data.",
      dateModified: "2026-10-22T11:19:05-07:00",
      author: { "@id": `${SITE_URL}/#organization` },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    });
    expect(graph.BreadcrumbList.itemListElement.at(-1)).toEqual({
      "@type": "ListItem",
      position: 4,
      name: "Input Fields",
      item: url,
    });
  });

  it("names the publisher and the site", () => {
    const graph = nodes(structuredData({ title: "A", path: "/a" }));

    expect(graph.Organization.parentOrganization.name).toBe(
      "University of Washington",
    );
    expect(graph.WebSite.url).toBe(`${SITE_URL}/`);
    expect(graph.WebSite.publisher).toEqual({
      "@id": graph.Organization["@id"],
    });
  });

  it("describes the home page as a web page without breadcrumbs", () => {
    const graph = nodes(
      structuredData({ title: "Welcome", path: "/", pages: PAGES }),
    );

    expect(graph.WebPage.dateModified).toBe("2026-01-01T00:00:00Z");
    expect(graph.TechArticle).toBeUndefined();
    expect(graph.BreadcrumbList).toBeUndefined();
  });

  it("leaves out dateModified when the date is unknown", () => {
    const graph = nodes(structuredData({ title: "A", path: "/a", pages: {} }));

    expect(graph.TechArticle).not.toHaveProperty("dateModified");
  });
});

describe("serializeJsonLd", () => {
  it("cannot close the script element early", () => {
    const out = serializeJsonLd({ name: "</script><script>alert(1)" });

    expect(out).not.toContain("<");
    expect(JSON.parse(out).name).toBe("</script><script>alert(1)");
  });
});

describe("pageModified", () => {
  it("finds a page's date with or without a trailing slash", () => {
    expect(pageModified("/solstice/components/forms/input", PAGES)).toBe(
      "2026-10-22T11:19:05-07:00",
    );
    expect(pageModified("/solstice/components/forms/input/", PAGES)).toBe(
      "2026-10-22T11:19:05-07:00",
    );
    expect(pageModified("/", PAGES)).toBe("2026-01-01T00:00:00Z");
  });

  it("is undefined when the date or the page is unknown", () => {
    expect(pageModified("/solstice", PAGES)).toBeUndefined();
    expect(pageModified("/nope")).toBeUndefined();
  });
});

describe("displayDate", () => {
  it("formats the calendar date as written, ignoring the time zone", () => {
    expect(displayDate("2026-10-22T11:19:05-07:00")).toBe("October 22, 2026");
    // late evening west of UTC is already the next day in UTC
    expect(displayDate("2026-10-22T23:30:00-07:00")).toBe("October 22, 2026");
  });

  it("returns null without a date", () => {
    expect(displayDate(undefined)).toBe(null);
    expect(displayDate("not a date")).toBe(null);
  });
});
