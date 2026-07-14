import { describe, expect, it } from "vitest";
import { cssFontFamily } from "@/lib/fonts/runtime-family";

describe("cssFontFamily", () => {
  it("maps semantic System tokens to a valid deterministic CSS stack", () => {
    expect(cssFontFamily("System")).toBe(
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    );
    expect(cssFontFamily("system-ui")).toBe(
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    );
  });

  it("preserves explicit brand families and stacks", () => {
    expect(cssFontFamily("LINESeed")).toContain('"LINESeed"');
    expect(cssFontFamily("Pretendard, sans-serif")).toBe("Pretendard, sans-serif");
  });
});
