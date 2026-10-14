import { describe, expect, it } from "vitest";

import { resolveBase } from "../base";

describe("resolveBase", () => {
  it("keeps the vite base on the canonical mount point", () => {
    expect(resolveBase("/ux/", "/ux/")).toBe("/ux/");
    expect(resolveBase("/ux/", "/ux/ux-team")).toBe("/ux/");
    expect(resolveBase("/ux/", "/ux/solstice/components/forms/input")).toBe(
      "/ux/",
    );
  });

  it("falls back to the site root on a masked host", () => {
    expect(resolveBase("/ux/", "/")).toBe("/");
    expect(resolveBase("/ux/", "/ux-team")).toBe("/");
    expect(resolveBase("/ux/", "/solstice/components/forms/input")).toBe("/");
  });

  it("does not mistake a similarly named route for the base", () => {
    // "/ux-team" starts with "/ux" but not with "/ux/".
    expect(resolveBase("/ux/", "/ux-team")).toBe("/");
    expect(resolveBase("/ux/", "/ux-help")).toBe("/");
  });

  it("is a no-op when the app is mounted at the site root", () => {
    expect(resolveBase("/", "/")).toBe("/");
    expect(resolveBase("/", "/ux-team")).toBe("/");
  });
});
