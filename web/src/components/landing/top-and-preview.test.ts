import { describe, expect, it } from "vitest";
import { builderHref, detailHref } from "./top-and-preview";

describe("landing brand links (IA decision D2)", () => {
  it("opens the reference's item page, not the builder", () => {
    expect(detailHref("toss")).toBe("/design-systems/toss");
    expect(detailHref("linear.app")).toBe("/design-systems/linear.app");
  });

  it("keeps the secondary Customize link on the builder deep-link shape", () => {
    expect(builderHref("toss")).toBe("/builder?step=customize&ref=toss");
  });
});
