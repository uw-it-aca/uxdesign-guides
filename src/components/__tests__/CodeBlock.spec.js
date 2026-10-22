import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CodeBlock from "@/components/CodeBlock.vue";

describe("CodeBlock", () => {
  it("displays the description slot content", () => {
    const wrapper = mount(CodeBlock, {
      slots: {
        description: "This is a description",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("This is a description");
  });

  it("styles the copy to clipboard button on mount", () => {
    // Create a mock button and add it to the body
    const copyButton = document.createElement("div");
    copyButton.classList.add("copy-to-clipboard-button");
    document.body.appendChild(copyButton);

    // Mount the component, which will trigger the mounted hook
    mount(CodeBlock);

    // Check that the classes were added
    expect(copyButton.classList.contains("btn")).toBe(true);
    expect(copyButton.classList.contains("btn-sm")).toBe(true);
    expect(copyButton.classList.contains("btn-secondary")).toBe(true);
    expect(copyButton.classList.contains("fs-10")).toBe(true);

    // Clean up the DOM
    document.body.removeChild(copyButton);
  });

  it("displays the bootstrap slot content", () => {
    const wrapper = mount(CodeBlock, {
      slots: {
        bootstrap: "<div>Bootstrap content</div>",
      },
    });
    expect(wrapper.text()).toContain("HTML");
    expect(wrapper.html()).toContain("<div>Bootstrap content</div>");
  });

  it("displays the vue slot content", () => {
    const wrapper = mount(CodeBlock, {
      slots: {
        vue: "<div>Vue content</div>",
      },
    });
    expect(wrapper.text()).toContain("VUE");
    expect(wrapper.html()).toContain("<div>Vue content</div>");
  });

  it("displays the script slot content", () => {
    const wrapper = mount(CodeBlock, {
      slots: {
        script: "<div>Script content</div>",
      },
    });
    expect(wrapper.text()).toContain("JS");
    expect(wrapper.html()).toContain("<div>Script content</div>");
  });

  it("displays the preview slot content in the .preview container", () => {
    const wrapper = mount(CodeBlock, {
      slots: { preview: "<button>Preview</button>" },
    });
    expect(wrapper.find(".preview button").exists()).toBe(true);
  });

  it("renders no optional sections when no slots are provided", () => {
    const wrapper = mount(CodeBlock);
    expect(wrapper.find(".fst-italic").exists()).toBe(false);
    expect(wrapper.find(".preview").exists()).toBe(false);
    expect(wrapper.text()).not.toContain("HTML");
    expect(wrapper.text()).not.toContain("VUE");
    expect(wrapper.text()).not.toContain("JS");
  });

  it("includes visually hidden 'Example:' text for screen readers", () => {
    const wrapper = mount(CodeBlock);
    expect(wrapper.find(".visually-hidden").text()).toBe("Example:");
  });
});
