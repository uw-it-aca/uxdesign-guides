import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createBootstrap } from "bootstrap-vue-next";
import NavMenu from "@/components/NavMenu.vue";

describe("NavMenu", () => {
  const wrapper = mount(NavMenu, {
    global: {
      plugins: [createBootstrap()],
      mocks: {
        $route: {
          path: "/",
        },
      },
    },
  });

  it("displays the navigation menu", () => {
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Getting Started");
  });

  it("renders top-level triggers as non-navigating buttons", () => {
    const heading = wrapper.find("#getting-startedHeading");
    expect(heading.element.tagName).toBe("BUTTON");
    // A button has no href / router-link destination.
    expect(heading.attributes("href")).toBeUndefined();
    expect(heading.attributes("to")).toBeUndefined();
  });

  it("toggles a collapsed menu open when its trigger is clicked", async () => {
    const wrapper = mount(NavMenu, {
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

  it("expands the getting started menu when on a /solstice root-level page", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/solstice/solstice-101",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const gettingStartedMenu = wrapper.find("#getting-startedHeading");
    expect(gettingStartedMenu.attributes("aria-expanded")).toBe("true");
  });

  it("does not expand the getting started menu when the route does not match its pages", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const gettingStartedMenu = wrapper.find("#getting-startedHeading");
    expect(gettingStartedMenu.attributes("aria-expanded")).toBe("false");
  });

  it("expands the content menu when the route contains 'content'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/content",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#contentHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("true");
  });

  it("does not expand the content menu when the route does not contain 'content'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#contentHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("false");
  });

  it("expands the foundations menu when the route contains 'foundations'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/foundations",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#foundationsHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("true");
  });

  it("does not expand the foundations menu when the route does not contain 'foundations'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#foundationsHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("false");
  });

  it("expands the components menu when the route contains 'components'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/components",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#componentsHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("true");
  });

  it("does not expand the components menu when the route does not contain 'components'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#componentsHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("false");
  });

  it("keeps content, foundations, and components menus collapsed on /solstice root-level pages", () => {
    const rootPages = [
      "/solstice/solstice-101",
      "/solstice/design-principles",
      "/solstice/developer-guide",
    ];
    for (const path of rootPages) {
      const wrapper = mount(NavMenu, {
        global: {
          plugins: [createBootstrap()],
          mocks: { $route: { path } },
        },
      });
      expect(wrapper.find("#contentHeading").attributes("aria-expanded")).toBe(
        "false",
      );
      expect(
        wrapper.find("#foundationsHeading").attributes("aria-expanded"),
      ).toBe("false");
      expect(
        wrapper.find("#componentsHeading").attributes("aria-expanded"),
      ).toBe("false");
    }
  });

  it("expands only the Getting Started menu on the /solstice index page", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/solstice" } },
      },
    });
    expect(
      wrapper.find("#getting-startedHeading").attributes("aria-expanded"),
    ).toBe("true");
    for (const id of ["content", "foundations", "components"]) {
      expect(
        wrapper.find("#" + id + "Heading").attributes("aria-expanded"),
      ).toBe("false");
    }
  });

  it("does not expand Getting Started on deeper /solstice sub-section pages", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: { $route: { path: "/solstice/content/voice-tone" } },
      },
    });
    expect(
      wrapper.find("#getting-startedHeading").attributes("aria-expanded"),
    ).toBe("false");
    expect(wrapper.find("#contentHeading").attributes("aria-expanded")).toBe(
      "true",
    );
  });
});
