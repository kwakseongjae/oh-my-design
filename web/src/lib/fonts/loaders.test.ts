/**
 * Loader + export-CSS builder tests. These are the artefacts users copy
 * straight into their projects, so the output has to be stable —
 * regressions here would silently ship broken stylesheets.
 */

import { describe, expect, it } from "vitest";
import type { FontEntry } from "./types";
import {
  buildExportCss,
  buildGoogleFontsHref,
  buildJsdelivrCss,
  buildVariationSettings,
} from "./loaders";

function googleVariableFont(): FontEntry {
  return {
    id: "x-inter",
    name: "Inter",
    family: "sans",
    scripts: ["latin"],
    cssFamily: `"Inter", sans-serif`,
    variable: true,
    axes: [{ tag: "wght", name: "Weight", min: 100, max: 900, default: 400 }],
    license: "OFL-1.1",
    source: "https://fonts.google.com/specimen/Inter",
    description: "",
    loader: { kind: "google", family: "Inter:wght@100..900" },
    tags: { mood: [], era: [], use: [], personality: [] },
    sampleText: { latin: "Aa" },
  };
}

function jsdelivrFont(): FontEntry {
  return {
    id: "x-gmarket",
    name: "Gmarket Sans",
    family: "sans",
    scripts: ["hangul"],
    cssFamily: `"Gmarket Sans", sans-serif`,
    variable: false,
    axes: [],
    weights: [300, 500, 700],
    license: "GmarketSans Free License",
    source: "https://noonnu.cc",
    description: "",
    loader: {
      kind: "jsdelivr",
      fontFaceCss: "@font-face { font-family: 'Gmarket Sans'; src: url(...); }",
    },
    tags: { mood: [], era: [], use: [], personality: [] },
    sampleText: { hangul: "가" },
  };
}

describe("buildGoogleFontsHref", () => {
  it("returns null when no google-loader entries are present", () => {
    expect(buildGoogleFontsHref([])).toBeNull();
    expect(buildGoogleFontsHref([jsdelivrFont()])).toBeNull();
  });

  it("emits a css2 URL with display=swap", () => {
    const url = buildGoogleFontsHref([googleVariableFont()]);
    expect(url).toContain("fonts.googleapis.com/css2?");
    expect(url).toContain("display=swap");
  });

  it("sorts family segments so the URL is deterministic (cache-friendly)", () => {
    const b = { ...googleVariableFont(), id: "b", loader: { kind: "google", family: "B" } as const };
    const a = { ...googleVariableFont(), id: "a", loader: { kind: "google", family: "A" } as const };
    const out1 = buildGoogleFontsHref([a, b])!;
    const out2 = buildGoogleFontsHref([b, a])!;
    expect(out1).toBe(out2);
    // A= segment appears before B= in the final URL
    expect(out1.indexOf("family=A")).toBeLessThan(out1.indexOf("family=B"));
  });

  it("ignores jsdelivr entries when assembling the URL", () => {
    const url = buildGoogleFontsHref([googleVariableFont(), jsdelivrFont()])!;
    expect(url).toContain("Inter");
    expect(url).not.toContain("Gmarket");
  });
});

describe("buildJsdelivrCss", () => {
  it("concatenates every jsdelivr entry's @font-face block", () => {
    const css = buildJsdelivrCss([googleVariableFont(), jsdelivrFont()]);
    expect(css).toContain("@font-face");
    expect(css).toContain("Gmarket Sans");
  });

  it("returns empty string when none are present", () => {
    expect(buildJsdelivrCss([googleVariableFont()])).toBe("");
  });
});

describe("buildVariationSettings", () => {
  it("returns comma-separated tag/value pairs", () => {
    expect(buildVariationSettings({ wght: 500, CASL: 0.5 })).toBe('"wght" 500, "CASL" 0.50');
  });

  it("returns '' for empty axis map", () => {
    expect(buildVariationSettings({})).toBe("");
  });
});

describe("buildExportCss", () => {
  it("includes @import for google-hosted fonts", () => {
    const css = buildExportCss(googleVariableFont(), {
      axisValues: { wght: 500 },
      staticWeight: 500,
      letterSpacing: 0,
      lineHeight: 1.2,
    });
    expect(css).toContain("@import");
    expect(css).toContain("fonts.googleapis.com");
    expect(css).toContain(`font-family: "Inter"`);
    expect(css).toContain("font-weight: 500");
  });

  it("embeds @font-face directly for jsdelivr fonts (no @import)", () => {
    const css = buildExportCss(jsdelivrFont(), {
      axisValues: {},
      staticWeight: 500,
      letterSpacing: 0,
      lineHeight: 1.2,
    });
    expect(css).toContain("@font-face");
    expect(css).not.toMatch(/@import\s+url\("https:\/\/fonts\.googleapis/);
  });

  it("emits font-variation-settings for variable fonts", () => {
    const css = buildExportCss(googleVariableFont(), {
      axisValues: { wght: 700 },
      letterSpacing: 0,
      lineHeight: 1.2,
    });
    expect(css).toContain("font-variation-settings");
    expect(css).toContain('"wght" 700');
  });

  it("omits letter-spacing when it's 0", () => {
    const css = buildExportCss(googleVariableFont(), {
      axisValues: { wght: 400 },
      staticWeight: 400,
      letterSpacing: 0,
      lineHeight: 1.2,
    });
    expect(css).not.toContain("letter-spacing");
  });

  it("includes letter-spacing as em when non-zero", () => {
    const css = buildExportCss(googleVariableFont(), {
      axisValues: { wght: 400 },
      letterSpacing: -0.02,
      lineHeight: 1.2,
    });
    expect(css).toContain("letter-spacing: -0.020em");
  });

  it("includes line-height when provided", () => {
    const css = buildExportCss(googleVariableFont(), {
      axisValues: { wght: 400 },
      letterSpacing: 0,
      lineHeight: 1.5,
    });
    expect(css).toContain("line-height: 1.50");
  });
});
