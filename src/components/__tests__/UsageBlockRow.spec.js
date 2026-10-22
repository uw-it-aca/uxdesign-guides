import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UsageBlockRow from "@/components/UsageBlockRow.vue";

describe("UsageBlockRow", () => {
  it("displays the 'do' variant", () => {
    const wrapper = mount(UsageBlockRow, {
      props: {
        variant: "do",
      },
      slots: {
        description: "This is a description",
        preview: "<button>Click me</button>",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.find(".bi-check-circle-fill").exists()).toBe(true);
    expect(wrapper.text()).toContain("This is a description");
    expect(wrapper.html()).toContain("<button>Click me</button>");
  });

  it("displays the 'dont' variant", () => {
    const wrapper = mount(UsageBlockRow, {
      props: {
        variant: "dont",
      },
      slots: {
        description: "This is a description",
        preview: "<button>Click me</button>",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.find(".bi-x-circle-fill").exists()).toBe(true);
    expect(wrapper.text()).toContain("This is a description");
    expect(wrapper.html()).toContain("<button>Click me</button>");
  });
});
