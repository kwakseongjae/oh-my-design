import { describe, expect, it } from "vitest";
import type { ComponentVariant } from "@/lib/extract-tokens";
import {
  EMPTY_PREVIEW,
  buildColorModel,
  buildComponents,
  buildRadii,
  buildShadows,
  buildSpacing,
  buildTypeScale,
  cssShadow,
  hasPreviewContent,
  inAuthorOrder,
  isColorLiteral,
  lineHeightOf,
  parseFontShorthand,
  sampleOf,
  trackingOf,
} from "./preview-model";

const none = () => undefined;
const v = (name: string, fields: Partial<ComponentVariant>): ComponentVariant => ({ name, extras: {}, ...fields });

describe("colours", () => {
  it("keeps the author's order, draws the primary large and groups the rest by what their keys say", () => {
    const m = buildColorModel([
      { name: "primary", hex: "#0096fa" },
      { name: "primary-hover", hex: "#0086e0" },
      { name: "canvas", hex: "#ffffff" },
      { name: "text-muted", hex: "#474747" },
      { name: "on-primary", hex: "#ffffff" },
      { name: "engagement-red", hex: "#ff4060" },
      { name: "success", hex: "#b1cc29" },
      { name: "link", hex: "#3d7699" },
    ])!;
    expect(m.lead).toEqual({ name: "primary", hex: "#0096fa" });
    expect(m.groups.map((g) => [g.key, g.swatches.map((s) => s.name)])).toEqual([
      ["brand", ["primary-hover"]],
      ["surface", ["canvas", "text-muted", "on-primary"]],
      ["status", ["success"]],
      ["other", ["engagement-red", "link"]],
    ]);
    expect(m.ramps).toEqual([]);
  });

  it("draws a numbered hue as one ramp in numeric order, whatever order the keys arrive in", () => {
    const m = buildColorModel([
      { name: "blue100", hex: "#c9e2ff" },
      { name: "blue50", hex: "#e8f3ff" },
      { name: "blue900", hex: "#194aa6" },
      { name: "blue500", hex: "#3182f6" },
      { name: "red1", hex: "#ff0000" },
      { name: "red2", hex: "#ee0000" },
    ])!;
    expect(m.ramps).toEqual([
      {
        hue: "blue",
        steps: [
          { step: "50", name: "blue50", hex: "#e8f3ff" },
          { step: "100", name: "blue100", hex: "#c9e2ff" },
          { step: "500", name: "blue500", hex: "#3182f6" },
          { step: "900", name: "blue900", hex: "#194aa6" },
        ],
      },
    ]);
    // Two steps are not a scale: they stay ordinary swatches.
    expect(m.groups.flatMap((g) => g.swatches.map((s) => s.name))).toEqual(["red1", "red2"]);
  });

  it("chooses the lead only by key: primary or brand, else a named brand colour, else accent, else none", () => {
    expect(buildColorModel([{ name: "brand-red", hex: "#ff0038" }, { name: "on-brand", hex: "#ffffff" }])!.lead?.name).toBe("brand-red");
    expect(buildColorModel([{ name: "primary-hover", hex: "#111111" }, { name: "accent", hex: "#533afd" }])!.lead?.name).toBe("accent");
    const silent = buildColorModel([{ name: "canvas", hex: "#ffffff" }, { name: "ink", hex: "#000000" }])!;
    expect(silent.lead).toBeNull();
    expect(silent.groups.map((g) => g.key)).toEqual(["surface"]);
  });

  it("is absent when nothing is recorded", () => {
    expect(buildColorModel([])).toBeNull();
    expect(buildColorModel([{ name: "x", hex: "rebeccapurple" }])).toBeNull();
  });
});

describe("type scale", () => {
  it("keeps every role with a size, largest first, and shows weight only when recorded", () => {
    const steps = buildTypeScale(
      [
        { key: "body", size: 16, weight: 400, lineHeight: "24px" },
        { key: "t1", size: "30px", lineHeight: "40px" },
        { key: "h1", size: 36, weight: 700, lineHeight: "54px" },
        { key: "caption", size: 12, weight: 400 },
        { key: "broken", size: "clamp(1rem, 2vw, 2rem)" },
      ],
      none,
    );
    expect(steps.map((s) => s.name)).toEqual(["h1", "t1", "body", "caption"]);
    expect(steps[1]).toEqual({ name: "t1", size: 30, lineHeight: { css: "40px", label: "40px" } });
  });

  it("reads a bare line height above 4 as pixels and a smaller one as a ratio", () => {
    expect(lineHeightOf(40)).toEqual({ css: "40px", label: "40px" });
    expect(lineHeightOf(1.25)).toEqual({ css: "1.25", label: "1.25" });
    expect(lineHeightOf("150%")).toEqual({ css: "150%", label: "150%" });
    expect(lineHeightOf("tall")).toBeUndefined();
  });

  it("applies letter-spacing only when the reference gives a unit", () => {
    expect(trackingOf("-0.02em")).toEqual({ css: "-0.02em", label: "-0.02em" });
    expect(trackingOf(0.13)).toEqual({ label: "0.13" });
    expect(trackingOf("0")).toBeUndefined();
    expect(trackingOf(0)).toBeUndefined();
  });

  it("sets a specimen only in a face that loads, and only for a role with a recorded weight", () => {
    const face = (family: string | undefined) => (family === "Inter" ? { css: '"Inter"', text: "Aa", lang: "en" } : undefined);
    const steps = buildTypeScale(
      [
        { key: "a", size: 20, weight: 600, family: "Inter" },
        { key: "b", size: 18, family: "Inter" },
        { key: "c", size: 16, weight: 400, family: "Brand Sans" },
      ],
      face,
    );
    expect(steps.map((s) => Boolean(s.specimen))).toEqual([true, false, false]);
  });
});

describe("spacing, radius, elevation", () => {
  it("sorts spacing ascending and drops anything that is not a number", () => {
    expect(buildSpacing([{ name: "base", value: 16 }, { name: "xs", value: 4 }, { name: "section", value: 64 }, { name: "x", value: "big" }])).toEqual([
      { name: "xs", px: 4 },
      { name: "base", px: 16 },
      { name: "section", px: 64 },
    ]);
  });

  it("sorts radii by size with pills and percentages last, and never invents one", () => {
    expect(buildRadii([{ name: "full", value: "9999px" }, { name: "lg", value: "16px" }, { name: "round", value: "50%" }, { name: "sm", value: 4 }]).map((r) => [r.name, r.css])).toEqual([
      ["sm", "4px"],
      ["lg", "16px"],
      ["full", "9999px"],
      ["round", "50%"],
    ]);
    expect(buildRadii([{ name: "odd", value: "soft" }])).toEqual([]);
  });

  it("draws a shadow only when it is plain CSS; prose is kept as its label", () => {
    expect(cssShadow("0 2px 16px rgba(0,0,0,.2)")).toBe("0 2px 16px rgba(0,0,0,.2)");
    expect(cssShadow("rgba(0, 0, 0, 0.4) 0px 2px 4px 0px, inset 0 0 0 1px #23252a")).toBeDefined();
    expect(cssShadow("none")).toBe("none");
    expect(cssShadow("soft drop under cards")).toBeUndefined();
    expect(buildShadows([{ name: "soft", value: "soft drop under cards" }])).toEqual([{ name: "soft", label: "soft drop under cards" }]);
  });
});

describe("components", () => {
  it("paints a state only when its whole value is one colour literal", () => {
    expect(isColorLiteral("#0090f0")).toBe(true);
    expect(isColorLiteral("rgba(0,0,0,0.08)")).toBe(true);
    expect(isColorLiteral("fg #ff0038")).toBe(false);
    expect(isColorLiteral("#273951 text with #95a4ba border")).toBe(false);
    const s = sampleOf(
      "button",
      v("button-primary", {
        bg: "#0096fa",
        fg: "#ffffff",
        radius: "9999",
        hover: "#0090f0",
        focus: "0 0 0 1px #8ac0ff ring on :focus-visible",
        extras: { pressed: "#007ed2", states: "fill or weak; loading, disabled" },
      }),
      none,
    )!;
    expect(s.states).toEqual([
      { key: "hover", value: "#0090f0", color: "#0090f0" },
      { key: "pressed", value: "#007ed2", color: "#007ed2" },
      { key: "focus", value: "0 0 0 1px #8ac0ff ring on :focus-visible" },
    ]);
    expect(s.inventory).toBe("fill or weak; loading, disabled");
    expect(s.radius).toBe("9999px");
  });

  it("draws a variant only from its own recorded values", () => {
    // no radius
    expect(sampleOf("button", v("a", { bg: "#000000", fg: "#ffffff" }), none)).toBeNull();
    // a clear control with no outline draws nothing
    expect(sampleOf("button", v("b", { bg: "transparent", fg: "#111111", radius: "0px" }), none)).toBeNull();
    // an outline with no width draws nothing
    expect(sampleOf("button", v("c", { bg: "#ffffff", border: "0px #d4dee9", radius: "8" }), none)).toBeNull();
    // a clear control with a real outline is drawn
    expect(sampleOf("button", v("d", { bg: "transparent", fg: "#111111", border: "1px #cccccc", radius: "0px" }), none)?.borderCss).toBe("1px solid #cccccc");
  });

  it("sets a label in the face the component records only when it loads", () => {
    expect(parseFontShorthand("17px / 400 Noto Sans KR")).toEqual({ size: 17, weight: 400, family: "Noto Sans KR" });
    expect(parseFontShorthand("14px/400/20px operating-system stack")).toEqual({ size: 14, weight: 400, family: "operating-system stack" });
    const loads = (f: string | undefined) => (f === "Noto Sans KR" ? '"Noto Sans KR"' : undefined);
    const [a, b] = buildComponents(
      [
        { type: "button", variant: v("kr", { bg: "#ffffff", fg: "#999999", border: "1px solid #eeeeee", radius: "50px", font: "17px / 400 Noto Sans KR" }) },
        { type: "button", variant: v("os", { bg: "#ff9100", fg: "#ffffff", radius: "4", font: "18px/700/42px operating-system stack" }) },
      ],
      loads,
    );
    expect(a.family).toBe('"Noto Sans KR"');
    expect(b.family).toBeUndefined();
    expect(b.fontSize).toBe(18);
  });
});

describe("model", () => {
  it("has no content when nothing is recorded", () => {
    expect(hasPreviewContent(EMPTY_PREVIEW)).toBe(false);
    expect(hasPreviewContent({ ...EMPTY_PREVIEW, spacing: [{ name: "xs", px: 4 }] })).toBe(true);
  });

  it("orders entries by the author's keys and keeps unlisted ones after them", () => {
    expect(inAuthorOrder([["b", 1], ["z", 2], ["a", 3]], ["a", "b"]).map(([k]) => k)).toEqual(["a", "b", "z"]);
  });
});
