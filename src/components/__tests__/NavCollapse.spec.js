import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createBootstrap } from "bootstrap-vue-next";
import NavCollapse from "@/components/NavCollapse.vue";

describe("NavCollapse", () => {
  it("renders its trigger as a non-navigating button", () => {
    const wrapper = mount(NavCollapse, {
      props: { menu: "Content", slug: "content" },
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/" } },
      },
    });
    const heading = wrapper.find("#contentHeading");
    expect(heading.element.tagName).toBe("BUTTON");
    expect(heading.attributes("href")).toBeUndefined();
    expect(heading.attributes("to")).toBeUndefined();
  });

  it("expands when the route path contains the slug", () => {
    const wrapper = mount(NavCollapse, {
      props: { menu: "Content", slug: "content" },
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/content" } },
      },
    });
    expect(wrapper.find(".collapse").classes()).toContain("show");
    expect(wrapper.find("#contentHeading").attributes("aria-expanded")).toBe(
      "true",
    );
  });

  it("does not expand when the route path does not contain the slug", () => {
    const wrapper = mount(NavCollapse, {
      props: { menu: "Content", slug: "content" },
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/" } },
      },
    });
    expect(wrapper.find(".collapse").classes()).not.toContain("show");
    expect(wrapper.find("#contentHeading").attributes("aria-expanded")).toBe(
      "false",
    );
  });

  it("toggles collapsed open and closed when its trigger is clicked", async () => {
    const wrapper = mount(NavCollapse, {
      props: { menu: "Content", slug: "content" },
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/" } },
      },
    });
    const heading = wrapper.find("#contentHeading");
    expect(heading.attributes("aria-expanded")).toBe("false");
    await heading.trigger("click");
    expect(heading.attributes("aria-expanded")).toBe("true");
    await heading.trigger("click");
    expect(heading.attributes("aria-expanded")).toBe("false");
  });

  it("toggles collapsed closed when its trigger is clicked while route-expanded", async () => {
    const wrapper = mount(NavCollapse, {
      props: { menu: "Content", slug: "content" },
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/content" } },
      },
    });
    const heading = wrapper.find("#contentHeading");
    expect(heading.attributes("aria-expanded")).toBe("true");
    await heading.trigger("click");
    expect(heading.attributes("aria-expanded")).toBe("false");
  });

  it("uses exact match entries from `match` instead of slug-contains when provided", () => {
    const wrapper = mount(NavCollapse, {
      props: {
        menu: "Getting Started",
        slug: "getting-started",
        match: ["/solstice", "/solstice/solstice-101"],
      },
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/solstice/solstice-101" } },
      },
    });
    expect(
      wrapper.find("#getting-startedHeading").attributes("aria-expanded"),
    ).toBe("true");
  });

  it("does not expand via `match` for paths outside the exact list", () => {
    const wrapper = mount(NavCollapse, {
      props: {
        menu: "Getting Started",
        slug: "getting-started",
        match: ["/solstice", "/solstice/solstice-101"],
      },
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/solstice/content/voice-tone" } },
      },
    });
    expect(
      wrapper.find("#getting-startedHeading").attributes("aria-expanded"),
    ).toBe("false");
  });

  it("does not expand when the slug is only a substring of a sibling route segment", () => {
    // Regression test: slug="text" must not match "/forms/textarea", since
    // "textarea" merely contains "text" as a substring, not as its own path
    // segment.
    const wrapper = mount(NavCollapse, {
      props: { menu: "Text", slug: "text" },
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/solstice/components/forms/textarea" } },
      },
    });
    expect(wrapper.find("#textHeading").attributes("aria-expanded")).toBe(
      "false",
    );
  });

  it("expands when the slug matches its own full path segment", () => {
    const wrapper = mount(NavCollapse, {
      props: { menu: "Text", slug: "text" },
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/solstice/components/text/heading" } },
      },
    });
    expect(wrapper.find("#textHeading").attributes("aria-expanded")).toBe(
      "true",
    );
  });

  it("expands when the slug matches the final path segment exactly", () => {
    const wrapper = mount(NavCollapse, {
      props: { menu: "Text", slug: "text" },
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/solstice/components/text" } },
      },
    });
    expect(wrapper.find("#textHeading").attributes("aria-expanded")).toBe(
      "true",
    );
  });

  describe("sub prop", () => {
    it("applies small/indented styling to the label when sub is true", () => {
      const wrapper = mount(NavCollapse, {
        props: { menu: "Forms", slug: "forms", sub: true },
        global: {
          plugins: [createBootstrap()],
          mocks: { $route: { path: "/" } },
        },
      });
      const label = wrapper.find("#formsHeading span");
      expect(label.classes()).toContain("small");
      expect(label.classes()).toContain("fw-medium");
      expect(label.attributes("style")).toContain("padding-left: 32px");
    });

    it("does not apply sub styling to the label by default", () => {
      const wrapper = mount(NavCollapse, {
        props: { menu: "Content", slug: "content" },
        global: {
          plugins: [createBootstrap()],
          mocks: { $route: { path: "/" } },
        },
      });
      const label = wrapper.find("#contentHeading span");
      expect(label.classes()).not.toContain("small");
      expect(label.attributes("style")).toBeUndefined();
    });

    it("still expands/collapses normally when sub is true", async () => {
      const wrapper = mount(NavCollapse, {
        props: { menu: "Forms", slug: "forms", sub: true },
        global: {
          plugins: [createBootstrap()],
          mocks: { $route: { path: "/solstice/components/forms/input" } },
        },
      });
      expect(wrapper.find(".collapse").classes()).toContain("show");
      await wrapper.find("#formsHeading").trigger("click");
      expect(wrapper.find(".collapse").classes()).not.toContain("show");
    });
  });
});
