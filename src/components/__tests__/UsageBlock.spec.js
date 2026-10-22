import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UsageBlock from "@/components/UsageBlock.vue";

describe("UsageBlock", () => {
  it("displays the 'do' variant", () => {
    const wrapper = mount(UsageBlock, {
      props: {
        variant: "do",
      },
      slots: {
        row: "<li>Row content</li>",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Do");
    expect(wrapper.html()).toContain("<li>Row content</li>");
  });

  it("displays the 'dont' variant", () => {
    const wrapper = mount(UsageBlock, {
      props: {
        variant: "dont",
      },
      slots: {
        row: "<li>Row content</li>",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Don’t");
    expect(wrapper.html()).toContain("<li>Row content</li>");
  });

  it("displays the 'do' variant with legacy layout", () => {
    const wrapper = mount(UsageBlock, {
      props: {
        variant: "do",
      },
      slots: {
        text: "<p>Text content</p>",
        preview: "<div>Preview content</div>",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Do");
    expect(wrapper.html()).toContain("<p>Text content</p>");
    expect(wrapper.html()).toContain("<div>Preview content</div>");
  });

  it("displays the 'dont' variant with legacy layout", () => {
    const wrapper = mount(UsageBlock, {
      props: {
        variant: "dont",
      },
      slots: {
        text: "<p>Text content</p>",
        preview: "<div>Preview content</div>",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Don’t");
    expect(wrapper.html()).toContain("<p>Text content</p>");
    expect(wrapper.html()).toContain("<div>Preview content</div>");
  });
});
