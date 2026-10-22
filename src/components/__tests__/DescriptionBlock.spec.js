import { mount } from "@vue/test-utils";
import { BLink } from "bootstrap-vue-next";
import { describe, expect, it } from "vitest";
import DescriptionBlock from "@/components/DescriptionBlock.vue";

describe("DescriptionBlock", () => {
  it("displays the link when provided", () => {
    const wrapper = mount(DescriptionBlock, {
      props: {
        name: "Test Component",
        link: "/test-link",
      },
    });
    const link = wrapper.findComponent(BLink);
    expect(link.exists()).toBe(true);
    expect(link.props("to")).toBe("/test-link");
    expect(wrapper.text()).toContain("View Test Component");
  });
  it('displays "Coming soon!" when link is not provided', () => {
    const wrapper = mount(DescriptionBlock, {
      props: {
        name: "Test Component",
      },
    });
    expect(wrapper.text()).toContain("Coming soon!");
  });

  it("renders the name as a heading", () => {
    const wrapper = mount(DescriptionBlock, { props: { name: "Buttons" } });
    expect(wrapper.find("h2").text()).toBe("Buttons");
  });

  it("uses default props when none are provided", () => {
    const wrapper = mount(DescriptionBlock);
    expect(wrapper.find("h2").text()).toBe("Comp name");
    expect(wrapper.find(".badge.bg-purple").text()).toBe("1.0");
    expect(wrapper.text()).toContain("Coming soon!");
    expect(wrapper.text()).toContain("Lorem ipsum");
  });

  it("renders default slot content instead of the placeholder", () => {
    const wrapper = mount(DescriptionBlock, {
      slots: { default: "Custom description" },
    });
    expect(wrapper.text()).toContain("Custom description");
    expect(wrapper.text()).not.toContain("Lorem ipsum");
  });

  it("shows the a11y badge only when accessibility is true", () => {
    const on = mount(DescriptionBlock, { props: { accessibility: true } });
    expect(on.find(".badge.bg-beige").text()).toBe("a11y");
    const off = mount(DescriptionBlock, { props: { accessibility: false } });
    expect(off.find(".badge.bg-beige").exists()).toBe(false);
  });

  it("displays the provided version and hides the badge when empty", () => {
    const wrapper = mount(DescriptionBlock, { props: { version: "2.3" } });
    expect(wrapper.find(".badge.bg-purple").text()).toBe("2.3");
    const empty = mount(DescriptionBlock, { props: { version: "" } });
    expect(empty.find(".badge.bg-purple").exists()).toBe(false);
  });
});
