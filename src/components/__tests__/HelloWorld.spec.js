import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import HelloWorld from "@/components/HelloWorld.vue";

describe("Hello World", () => {
  it("displays hello world", () => {
    const wrapper = mount(HelloWorld);
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Hello world");
  });
});
