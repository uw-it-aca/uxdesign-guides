import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import PreviewBlock from "@/components/PreviewBlock.vue";

describe("PreviewBlock", () => {
  it("displays the preview slot content", () => {
    const wrapper = mount(PreviewBlock, {
      slots: {
        preview: "<button>Click me</button>",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.html()).toContain("<button>Click me</button>");
  });

  it("renders the preview inside the .preview container", () => {
    const wrapper = mount(PreviewBlock, {
      slots: { preview: "<button>Click me</button>" },
    });
    expect(wrapper.find(".preview button").exists()).toBe(true);
  });

  it("omits the preview container when there is no preview slot", () => {
    const wrapper = mount(PreviewBlock);
    expect(wrapper.find(".preview").exists()).toBe(false);
  });

  it("renders the description slot when provided", () => {
    const wrapper = mount(PreviewBlock, {
      slots: { description: "A primary button" },
    });
    const description = wrapper.find(".fst-italic");
    expect(description.exists()).toBe(true);
    expect(description.text()).toBe("A primary button");
  });

  it("omits the description when no description slot is given", () => {
    const wrapper = mount(PreviewBlock, {
      slots: { preview: "<p>Hi</p>" },
    });
    expect(wrapper.find(".fst-italic").exists()).toBe(false);
  });

  it("includes visually hidden 'Example:' text for screen readers", () => {
    const wrapper = mount(PreviewBlock);
    expect(wrapper.find(".visually-hidden").text()).toBe("Example:");
  });
});
