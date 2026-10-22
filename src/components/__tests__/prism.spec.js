import { describe, expect, it } from "vitest";
import Prism from "@/utils/prism.js";

describe("prism util", () => {
  it("exposes Prism globally for language components and plugins", () => {
    expect(globalThis.Prism).toBe(Prism);
  });

  it("registers the languages used by the docs", () => {
    for (const lang of ["javascript", "json", "markup-templating", "scss"]) {
      expect(Prism.languages[lang]).toBeDefined();
    }
  });
});
