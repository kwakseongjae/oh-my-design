import { describe, expect, it } from "vitest";
import { cssFontFamily, resolveRuntimeFont, SYSTEM_FONT_STACK } from "./runtime-family";

describe("builder runtime font resolution", () => {
  it("maps semantic System to a deterministic OS stack", () => {
    expect(cssFontFamily("System")).toBe(SYSTEM_FONT_STACK);
    expect(resolveRuntimeFont("System")).toMatchObject({ mode: "system", cssFamily: SYSTEM_FONT_STACK });
    expect(resolveRuntimeFont("System UI stack").mode).toBe("system");
    expect(resolveRuntimeFont("Arial").mode).toBe("system");
  });

  it("loads Pretendard as a real webfont", () => {
    const font = resolveRuntimeFont("Pretendard Variable");
    expect(font.mode).toBe("real");
    expect(font.stylesheetHref).toContain("pretendardvariable-dynamic-subset.css");
    expect(font.cssFamily).toContain('"Pretendard Variable"');
  });

  it("marks a proprietary Toss face unavailable instead of substituting it", () => {
    const font = resolveRuntimeFont("Toss Product Sans");
    expect(font.mode).toBe("unavailable");
    expect(font.cssFamily).toBe("inherit");
    expect(font.stylesheetHref).toBeNull();
    expect(font.label).toContain("not publicly distributed");
  });
});
