import { mount } from "@vue/test-utils";
import { useScrollspy } from "bootstrap-vue-next";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PageContents from "@/components/PageContents.vue";

vi.mock("bootstrap-vue-next", async (importOriginal) => {
  const actual = await importOriginal();
  return { ...actual, useScrollspy: vi.fn(actual.useScrollspy) };
});

describe("PageContents", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.body.innerHTML = "";
  });

  afterEach(() => {
    delete global.IntersectionObserver;
  });

  // jsdom has no IntersectionObserver. This stand-in records the roots it was
  // given and lets a test report a heading as visible.
  const fakeIntersectionObserver = () => {
    const instances = [];

    global.IntersectionObserver = class {
      constructor(callback, options = {}) {
        this.callback = callback;
        this.root = options.root;
        instances.push(this);
      }
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    };

    return {
      roots: () => instances.map((observer) => observer.root),
      intersect: (element) => {
        for (const observer of instances) {
          observer.callback([{ target: element, isIntersecting: true }]);
        }
      },
    };
  };

  it("displays the slot content", () => {
    const wrapper = mount(PageContents, {
      slots: {
        default: '<li><a href="#">Link 1</a></li>',
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("On this page");
    expect(wrapper.html()).toContain('<li><a href="#">Link 1</a></li>');
  });

  it("spies on the page headings, targeting its own list", () => {
    const wrapper = mount(PageContents);

    expect(useScrollspy).toHaveBeenCalledTimes(1);
    const [content, target, options] = useScrollspy.mock.calls[0];

    expect(content).toBe("main");
    expect(target.value).toBe(wrapper.find("ul").element);
    expect(options).toMatchObject({
      contentQuery: "h2[id], h3[id]",
      root: "#scrollbody",
    });
  });

  it("allows the content, query and scroll root to be overridden", () => {
    mount(PageContents, {
      props: {
        content: "#article",
        contentQuery: "section[id]",
        root: "#pane",
      },
    });

    const [content, , options] = useScrollspy.mock.calls[0];
    expect(content).toBe("#article");
    expect(options).toMatchObject({
      contentQuery: "section[id]",
      root: "#pane",
    });
  });

  it("mounts without an id on the list, so copies cannot collide", () => {
    const first = mount(PageContents);
    const second = mount(PageContents);

    expect(first.find("ul").attributes("id")).toBeUndefined();
    expect(second.find("ul").attributes("id")).toBeUndefined();
  });

  it("does not throw when the layout has no scroll container", () => {
    // jsdom provides neither <main> nor IntersectionObserver, matching the
    // worst case of a layout that lacks the expected containers.
    expect(() => mount(PageContents)).not.toThrow();
  });

  it("marks the matching link active as headings come into view", async () => {
    const observer = fakeIntersectionObserver();

    document.body.innerHTML = `
      <main>
        <h2 id="one">One</h2>
        <h2 id="two">Two</h2>
      </main>
    `;

    const wrapper = mount(PageContents, {
      attachTo: document.body,
      slots: {
        default: [
          '<li><a href="#one">One</a></li>',
          '<li><a href="#two">Two</a></li>',
        ].join(""),
      },
    });
    await wrapper.vm.$nextTick();

    observer.intersect(document.querySelector("#two"));
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.current).toBe("two");
    expect(wrapper.find('a[href="#two"]').classes()).toContain("active");
    expect(wrapper.find('a[href="#one"]').classes()).not.toContain("active");
  });

  it("observes against the scroll container when the layout has one", async () => {
    const observer = fakeIntersectionObserver();

    document.body.innerHTML = `
      <div id="scrollbody"><main><h2 id="one">One</h2></main></div>
    `;

    const wrapper = mount(PageContents, { attachTo: document.body });
    await wrapper.vm.$nextTick();

    expect(observer.roots()).toContain(document.querySelector("#scrollbody"));
  });

  it("observes against the viewport when there is no scroll container", async () => {
    const observer = fakeIntersectionObserver();

    document.body.innerHTML = `<main><h2 id="one">One</h2></main>`;

    const wrapper = mount(PageContents, { attachTo: document.body });
    await wrapper.vm.$nextTick();

    expect(observer.roots().filter(Boolean)).toEqual([]);
  });

  it("tracks the headings inside the content element", async () => {
    document.body.innerHTML = `
      <main>
        <h2 id="one">One</h2>
        <h3 id="two">Two</h3>
        <p id="ignored">Not a heading</p>
      </main>
    `;

    const wrapper = mount(PageContents, {
      attachTo: document.body,
      slots: {
        default:
          '<li><a href="#one">One</a></li><li><a href="#two">Two</a></li>',
      },
    });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.list.map((node) => node.id)).toEqual(["one", "two"]);
  });
});
