import { describe, expect, it } from "vitest";
import {
  aggregateReferenceEvidence,
  classifyCapturedElement,
  classifyEvidenceElement,
  isFilledButtonLike,
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

  it("uses the fill a transparent control paints on a child or ancestor, with provenance", () => {
    const transparent = { ...element().style, backgroundColor: "rgba(0, 0, 0, 0)" };
    const framer = element({
      selector: "home::a.framer", tagName: "a", className: "framer-abc button",
      style: { ...transparent, paintedBackgroundColor: "rgb(129, 105, 255)", paintedBy: "descendant:div.framer-xyz" },
    });
    const gradient = element({
      selector: "home::a.gradient", tagName: "a", className: "framer-def button",
      style: { ...transparent, paintedBackgroundImage: "linear-gradient(90deg, rgb(255, 0, 0), rgb(0, 0, 255))", paintedBy: "descendant:div.framer-uvw" },
    });
    const ghost = element({ selector: "home::a.ghost", tagName: "a", className: "ghost button", style: transparent });
    const bundle = aggregateReferenceEvidence({
      referenceId: "brand",
      capturedAt: "2026-09-30T00:00:00.000Z",
      tool: "playwright_cli",
      sources: [{ id: "surface-home", url: "https://brand.test", kind: "product-surface" }],
      surfaces: [{ id: "home", url: "https://brand.test", viewport: "1440x900", elements: [framer, gradient, ghost, element()] }],
      faces: [],
    });
    const bySelector = (selector: string) => bundle.components.find((component) => component.representative.selector === selector);
    expect(bySelector("home::a.framer")?.fingerprint).toMatch(/^#8169ff\|/);
    expect(bySelector("home::a.framer")?.paintedOccurrences).toBe(1);
    expect(bySelector("home::a.gradient")?.fingerprint).toMatch(/^gradient\(#ff0000>#0000ff\)\|/);
    expect(bySelector("home::a.ghost")?.fingerprint).toMatch(/^transparent\|/);
    expect(bySelector("home::a.ghost")).not.toHaveProperty("paintedOccurrences");
    expect(bySelector("button.primary")).not.toHaveProperty("paintedOccurrences");
    expect(bundle.colors.find((color) => color.property === "background" && color.value === "#8169ff"))
      .toMatchObject({ occurrences: 1, paintedOccurrences: 1 });
    expect(bundle.colors.find((color) => color.value === "#3182f6")).not.toHaveProperty("paintedOccurrences");
    expect(bundle.colors.some((color) => color.value === "#ff0000" || color.value === "#0000ff")).toBe(false);
    expect(framer.style.backgroundColor).toBe("rgba(0, 0, 0, 0)");
  });
});

describe("filled, button-sized anchors (owner decision 2026-09-30)", () => {
  const transparent = { ...element().style, backgroundColor: "rgba(0, 0, 0, 0)" };
  const anchor = (overrides: Partial<RawElementEvidence> = {}) => element({
    selector: "home::[data-omd-capture=\"3\"]", tagName: "a", className: "framer-aHxTq framer-nq4w2r",
    coveredByMedia: false, textLength: 11, rect: { width: 160, height: 44, top: 100 },
    ...overrides,
  });

  it("counts a filled, button-sized anchor with text as a button", () => {
    expect(classifyCapturedElement(anchor())).toBe("unknown");
    expect(classifyEvidenceElement(anchor())).toBe("button");
    expect(classifyEvidenceElement(anchor({ style: { ...transparent, paintedBackgroundColor: "rgb(129, 105, 255)", paintedBy: "descendant:div.framer-xyz" } }))).toBe("button");
    expect(classifyEvidenceElement(anchor({ style: { ...transparent, paintedBackgroundImage: "linear-gradient(90deg, rgb(255, 0, 0), rgb(0, 0, 255))", paintedBy: "descendant:div.framer-uvw" } }))).toBe("button");
    expect(classifyEvidenceElement(anchor({ tagName: "div", rect: { width: 120, height: 28, top: 0 } }))).toBe("button");
  });

  it("leaves a transparent text link, a full-width banner, an image-card link and a textless icon anchor alone", () => {
    expect(classifyEvidenceElement(anchor({ style: transparent }))).toBe("unknown");
    expect(classifyEvidenceElement(anchor({ rect: { width: 1200, height: 56, top: 0 } }))).toBe("unknown");
    expect(classifyEvidenceElement(anchor({ coveredByMedia: true, rect: { width: 320, height: 64, top: 0 } }))).toBe("unknown");
    expect(classifyEvidenceElement(anchor({ textLength: 0, rect: { width: 44, height: 44, top: 0 } }))).toBe("unknown");
    expect(classifyEvidenceElement(anchor({ rect: { width: 160, height: 96, top: 0 } }))).toBe("unknown");
    expect(classifyEvidenceElement(anchor({ rect: { width: 160, height: 24, top: 0 } }))).toBe("unknown");
  });

  it("needs the collector's media check: a bundle captured before it never promotes", () => {
    const { coveredByMedia, ...unchecked } = anchor();
    void coveredByMedia;
    expect(isFilledButtonLike(unchecked)).toBe(false);
    expect(classifyEvidenceElement(unchecked)).toBe("unknown");
    expect(classifyEvidenceElement({ ...unchecked, tagName: "div" })).toBe("unknown");
  });

  it("keeps every other classification", () => {
    expect(classifyEvidenceElement(anchor({ className: "btn-tab" }))).toBe("tab");
    expect(classifyEvidenceElement(anchor({ tagName: "li", className: "" }))).toBe("listItem");
    expect(classifyEvidenceElement(anchor({ tagName: "article", className: "" }))).toBe("card");
    expect(classifyEvidenceElement(element())).toBe("button");
  });

  it("counts promoted anchors as button components and button typography", () => {
    const bundle = aggregateReferenceEvidence({
      referenceId: "brand",
      capturedAt: "2026-09-30T00:00:00.000Z",
      tool: "playwright_cli",
      sources: [{ id: "surface-home", url: "https://brand.test", kind: "product-surface" }],
      surfaces: [{ id: "home", url: "https://brand.test", viewport: "1440x900", elements: [anchor(), anchor({ style: transparent })] }],
      faces: [],
      stateEvidence: { "home::[data-omd-capture=\"3\"]": ["hover"] },
    });
    expect(bundle.components.map((component) => component.type)).toEqual(["button"]);
    expect(bundle.components[0].states).toEqual(["hover"]);
    expect(bundle.typography.map((row) => row.role).sort()).toEqual(["button", "text"]);
  });
});
