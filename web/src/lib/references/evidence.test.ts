import { describe, expect, it } from "vitest";
import {
  aggregateReferenceEvidence,
  classifyCapturedElement,
  normalizeCapturedColor,
  resolveFontEvidence,
  type RawElementEvidence,
} from "./evidence";

function element(overrides: Partial<RawElementEvidence> = {}): RawElementEvidence {
  return {
    surfaceId: "home",
    selector: "button.primary",
    tagName: "button",
    role: null,
    inputType: null,
    className: "primary cta",
    ariaHasPopup: null,
    ariaSelected: null,
    ariaChecked: null,
    disabled: false,
    textLength: 8,
    rect: { width: 160, height: 48, top: 100 },
    style: {
      color: "rgb(255, 255, 255)",
      backgroundColor: "rgb(49, 130, 246)",
      borderColor: "rgba(0, 0, 0, 0)",
      borderWidth: "0px",
      borderRadius: "8px",
      boxShadow: "none",
      padding: "12px 20px",
      margin: "0px",
      gap: "8px",
      fontFamily: '"Brand Sans", system-ui',
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "24px",
      letterSpacing: "0px",
    },
    ...overrides,
  };
}

describe("reference evidence normalization", () => {
  it("normalizes opaque colors and rejects transparent overlays", () => {
    expect(normalizeCapturedColor("rgb(49, 130, 246)")).toBe("#3182f6");
    expect(normalizeCapturedColor("#abc")).toBe("#aabbcc");
    expect(normalizeCapturedColor("rgba(0, 0, 0, 0.2)")).toBeNull();
  });

  it("classifies semantic controls before class-name fallbacks", () => {
    expect(classifyCapturedElement(element())).toBe("button");
    expect(classifyCapturedElement(element({ tagName: "div", role: "dialog", className: "" }))).toBe("dialog");
    expect(classifyCapturedElement(element({ tagName: "input", role: null, className: "" }))).toBe("input");
    expect(classifyCapturedElement(element({ className: "btn dropdown-toggle" }))).toBe("button");
    expect(classifyCapturedElement(element({ tagName: "div", className: "settings-toggle" }))).toBe("toggle");
    expect(classifyCapturedElement(element({ className: "krds-btn open-modal" }))).toBe("button");
    expect(classifyCapturedElement(element({ className: "lnb-btn lnb-toggle" }))).toBe("button");
    expect(classifyCapturedElement(element({ tagName: "div", className: "tab-conts-wrap" }))).toBe("unknown");
    expect(classifyCapturedElement(element({ tagName: "li", className: "" }))).toBe("listItem");
  });

  it("distinguishes loaded, declared, system, and unresolved fonts", () => {
    const candidates = resolveFontEvidence([
      element(),
      element({ selector: "p", tagName: "p", className: "", style: { ...element().style, fontFamily: "system-ui" } }),
      element({ selector: "h1", tagName: "h1", className: "", style: { ...element().style, fontFamily: '"Mystery Sans"' } }),
    ], [
      { family: "Brand Sans", status: "loaded", weight: "100 900", style: "normal", sources: ["https://brand.test/fonts/brand.woff2"] },
      { family: "Unused Display", status: "loaded", weight: "700", style: "normal", sources: ["https://brand.test/fonts/display.woff2"] },
    ]);
    expect(candidates.find((font) => font.family === "Brand Sans")?.status).toBe("loaded");
    expect(candidates.find((font) => font.family === "Unused Display")?.status).toBe("declared");
    expect(candidates.find((font) => font.family === "system-ui")?.status).toBe("system");
    expect(candidates.find((font) => font.family === "Mystery Sans")?.status).toBe("unresolved");
  });

  it("reconciles compact family aliases against a loaded FontFace", () => {
    const candidates = resolveFontEvidence([
      element({ style: { ...element().style, fontFamily: "TossProductSans, sans-serif" } }),
    ], [
      { family: "Toss Product Sans", status: "loaded", weight: "400", style: "normal", sources: ["https://static.toss.im/font.woff2"] },
    ]);
    expect(candidates).toHaveLength(1);
    expect(candidates[0]).toMatchObject({ family: "Toss Product Sans", status: "loaded", usageCount: 1 });
  });

  it("aggregates component variants, state coverage, spacing, and typography", () => {
    const first = element();
    const second = element({ surfaceId: "pricing", selector: "button.plan" });
    const bundle = aggregateReferenceEvidence({
      referenceId: "brand",
      capturedAt: "2026-07-11T00:00:00.000Z",
      tool: "playwright_cli",
      sources: [{ id: "surface-home", url: "https://brand.test", kind: "product-surface" }],
      surfaces: [
        { id: "home", url: "https://brand.test", viewport: "1440x900", elements: [first] },
        { id: "pricing", url: "https://brand.test/pricing", viewport: "1440x900", elements: [second] },
      ],
      faces: [{ family: "Brand Sans", status: "loaded", weight: "600", style: "normal", sources: ["https://brand.test/font.woff2"] }],
      stateEvidence: { "button.primary": ["hover", "focus"], "button.plan": ["hover"] },
    });
    expect(bundle.components).toHaveLength(1);
    expect(bundle.components[0]).toMatchObject({ type: "button", occurrences: 2, confidence: "high" });
    expect(bundle.components[0].states).toEqual(["focus", "hover"]);
    expect(bundle.spacing.some((token) => token.value === 12)).toBe(true);
    expect(bundle.radii[0].value).toBe(8);
    expect(bundle.coverage.surfaceCount).toBe(2);
  });
});
