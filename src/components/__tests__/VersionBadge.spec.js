import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import VersionBadge from "@/components/VersionBadge.vue";

describe("VersionBadge", () => {
  it("displays the slot content", () => {
    const wrapper = mount(VersionBadge, {
      slots: {
        default: "v1.0.0",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("v1.0.0");
  });
});
