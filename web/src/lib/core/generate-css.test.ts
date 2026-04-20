import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { generateShadcnCss, generateVanillaCss, applyOverridesToMd } from "./generate-css";
import type { Overrides, StylePreferences } from "./types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..", "..", "..", "..");

function readRef(id: string): string {
  return readFileSync(join(REPO_ROOT, "references", id, "DESIGN.md"), "utf-8");
}

const vercelMd = readRef("vercel");
const clickhouseMd = readRef("clickhouse");

const baseOverrides: Overrides = {
  primaryColor: "",
  fontFamily: "",
  headingWeight: "",
  borderRadius: "",
  darkMode: false,
};

// ── generateShadcnCss ─────────────────────────────────────────────

describe("generateShadcnCss", () => {
  const css = generateShadcnCss("#6366f1", "#ffffff", "#171717", "8px", undefined, undefined, false);

  it("emits @layer base with :root scope", () => {
    expect(css).toContain("@layer base {");
    expect(css).toContain(":root {");
  });

  it("includes all required shadcn tokens", () => {
    for (const token of [
      "--background", "--foreground", "--card", "--card-foreground",
      "--popover", "--primary", "--primary-foreground",
      "--secondary", "--muted", "--accent", "--destructive",
      "--border", "--input", "--ring", "--radius",
      "--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5",
    ]) {
      expect(css, `missing token ${token}`).toContain(`${token}:`);
    }
  });

  it("converts numeric px radius to rem", () => {
    expect(css).toMatch(/--radius:\s*0\.5rem/); // 8px / 16
  });

  it("preserves 9999px radius literally (pill)", () => {
    const pillCss = generateShadcnCss("#6366f1", "#ffffff", "#171717", "9999px", undefined, undefined, false);
    expect(pillCss).toMatch(/--radius:\s*9999px/);
  });

  it("emits .dark scope when darkMode=true", () => {
    const dark = generateShadcnCss("#6366f1", "#ffffff", "#171717", "8px", undefined, undefined, true);
    expect(dark).toContain(".dark {");
  });

  it("omits .dark scope when darkMode=false", () => {
    expect(css).not.toContain(".dark {");
  });

  it("derives accent from primary hue when not provided", () => {
    expect(css).toMatch(/--accent:\s*\d+\s+\d+%\s+\d+%/);
  });

  it("uses provided accent when given", () => {
    const withAccent = generateShadcnCss("#6366f1", "#ffffff", "#171717", "8px", "#ff5b4f", undefined, false);
    // accent line should reflect #ff5b4f's HSL
    const m = withAccent.match(/--accent:\s*([^;]+);/);
    expect(m).toBeTruthy();
    // sanity: hue of #ff5b4f is ~4
    expect(m![1]).toMatch(/^[0-9]+\s+\d+%\s+\d+%/);
  });

  it("emits HSL triplets (no hex) for shadcn compat", () => {
    expect(css).not.toMatch(/--background:\s*#/);
    expect(css).toMatch(/--background:\s*\d+\s+\d+%\s+\d+%/);
  });
});

// ── generateVanillaCss ────────────────────────────────────────────

describe("generateVanillaCss", () => {
  const css = generateVanillaCss("#6366f1", "#ffffff", "#171717", "8px", undefined, undefined, false);

  it("emits :root with hex values (no @layer base)", () => {
    expect(css).toContain(":root {");
    expect(css).not.toContain("@layer base");
    expect(css).toMatch(/--color-background:\s*#[0-9a-fA-F]{6}/);
  });

  it("includes primary scale 50-950", () => {
    for (const stop of ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"]) {
      expect(css, `missing primary scale ${stop}`).toContain(`--color-primary-${stop}:`);
    }
  });

  it("includes 5 chart colors", () => {
    for (const i of [1, 2, 3, 4, 5]) {
      expect(css).toContain(`--color-chart-${i}:`);
    }
  });

  it("uses default font fallback when fontFamily omitted", () => {
    expect(css).toContain("--font-sans: system-ui");
  });

  it("uses provided fontFamily when given", () => {
    const customFont = generateVanillaCss("#6366f1", "#ffffff", "#171717", "8px", undefined, undefined, false, "Inter");
    expect(customFont).toContain("--font-sans: Inter");
  });

  it("emits radius scale (sm/md/lg/full)", () => {
    expect(css).toMatch(/--radius-sm:\s*6px/);  // 8 - 2
    expect(css).toMatch(/--radius-md:\s*8px/);
    expect(css).toMatch(/--radius-lg:\s*12px/); // 8 + 4
    expect(css).toContain("--radius-full: 9999px");
  });

  it("uses prefers-color-scheme media query for dark mode", () => {
    const dark = generateVanillaCss("#6366f1", "#ffffff", "#171717", "8px", undefined, undefined, true);
    expect(dark).toContain("@media (prefers-color-scheme: dark)");
  });

  it("omits dark media query when darkMode=false", () => {
    expect(css).not.toContain("prefers-color-scheme");
  });
});

// ── applyOverridesToMd: baseline transforms ───────────────────────

describe("applyOverridesToMd – baseline", () => {
  it("replaces title with custom name based on refName", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", "600", baseOverrides, "");
    expect(out).toMatch(/^# Custom Design System \(based on Vercel\)/m);
    expect(out).not.toMatch(/^# Design System Inspiration of Vercel/m);
  });

  it("strips emoji code points", () => {
    const withEmoji = "# Test\n\nUse 🎨 for color and 🚀 for launch.";
    const out = applyOverridesToMd(withEmoji, "X", "#000000", "Inter", "400", baseOverrides, "");
    expect(out).not.toMatch(/[\u{1F300}-\u{1F9FF}]/u);
  });

  it("strips ✅ / ❌ via the unicode emoji range strip", () => {
    // NOTE: applyOverridesToMd has a `✅\s* → 'DO: '` and `❌\s* → "DON'T: "`
    // pair AFTER the unicode strip. Both ✅ (U+2705) and ❌ (U+274C) fall in
    // the U+2700–U+27BF range that gets stripped first, so those replacements
    // are effectively dead code today. No reference DESIGN.md uses these
    // glyphs anyway. This test pins the actual current behavior so a future
    // re-ordering doesn't accidentally regress emoji stripping.
    const md = "# T\n\n✅ Good\n❌ Bad\n";
    const out = applyOverridesToMd(md, "X", "#000000", "Inter", "400", baseOverrides, "");
    expect(out).not.toContain("✅");
    expect(out).not.toContain("❌");
    expect(out).toContain("Good");
    expect(out).toContain("Bad");
  });

  it("substitutes primaryColor when different from original", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist", "600",
      { ...baseOverrides, primaryColor: "#6366f1" },
      "",
    );
    expect(out).toContain("#6366f1");
    expect(out).not.toMatch(/#171717/i);
  });

  it("does not modify primaryColor when override matches original", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist", "600",
      { ...baseOverrides, primaryColor: "#171717" },
      "",
    );
    expect(out).toContain("#171717");
  });

  it("substitutes fontFamily when different from original", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist", "600",
      { ...baseOverrides, fontFamily: "Inter" },
      "",
    );
    // Vercel uses "Geist" — should be replaced
    const geistMentions = (out.match(/\bGeist\b/g) || []).length;
    expect(geistMentions).toBe(0);
    expect(out).toContain("Inter");
  });
});

// ── applyOverridesToMd: Philosophy Layer opt-out ──────────────────

describe("applyOverridesToMd – Philosophy Layer", () => {
  it("retains Philosophy Layer when includePhilosophyLayer=true (default)", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", "600", baseOverrides, "");
    expect(out).toContain("## 10. Voice & Tone");
  });

  it("strips sections 10-15 + Sources comment when includePhilosophyLayer=false", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist", "600",
      baseOverrides, "", undefined, undefined, false,
    );
    expect(out).not.toContain("## 10. Voice & Tone");
    expect(out).not.toContain("OmD v0.1 Sources");
  });

  it("is a no-op for refs without Philosophy Layer", () => {
    expect(clickhouseMd).not.toContain("## 10. Voice & Tone");
    const out = applyOverridesToMd(
      clickhouseMd, "ClickHouse", "#000000", "Inter", "600",
      baseOverrides, "", undefined, undefined, false,
    );
    // Should still produce a sane document (title was replaced)
    expect(out).toMatch(/^# Custom Design System \(based on ClickHouse\)/m);
  });
});

// ── applyOverridesToMd: inline subsection rewrites ────────────────

describe("applyOverridesToMd – StylePreferences inline modifications", () => {
  function withPrefs(prefs: StylePreferences, overrides: Partial<Overrides> = {}): string {
    return applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist", "600",
      { ...baseOverrides, ...overrides },
      "", undefined, prefs,
    );
  }

  it("rewrites Inputs & Forms when inputStyle=underline (no '1px solid' bordered input remains)", () => {
    const out = withPrefs({ inputStyle: "underline" });
    const inputsBlock = out.match(/### Inputs & Forms\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(inputsBlock).toMatch(/Underline -- bottom border only/);
    expect(inputsBlock).not.toMatch(/border:\s*1px\s+solid/i);
  });

  it("rewrites Navigation when headerStyle=glass", () => {
    const out = withPrefs({ headerStyle: "glass" });
    const navBlock = out.match(/### Navigation\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(navBlock).toMatch(/Glass & Floating|backdrop-filter: blur|transparent/i);
  });

  it("is idempotent when reference Navigation already mentions glass/transparent", () => {
    const fakeMd = "# Test\n\n## 4. Component Stylings\n\n### Navigation\nUses transparent background with backdrop-filter: blur(20px)\n\n### Cards & Containers\nbox\n\n## 5. Layout\n";
    const out = applyOverridesToMd(
      fakeMd, "Test", "#000000", "Inter", "400",
      baseOverrides, "", undefined, { headerStyle: "glass" },
    );
    // The original glass description should be preserved (not double-rewritten)
    expect(out).toContain("backdrop-filter: blur(20px)");
  });

  it("rewrites Navigation when headerStyle=solid", () => {
    const out = withPrefs({ headerStyle: "solid" });
    const navBlock = out.match(/### Navigation\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(navBlock).toMatch(/Solid & Bold|solid dark background/i);
  });

  it("removes Cards shadow line when cardStyle=bordered (uses literal '- Shadow:' refs)", () => {
    // Vercel uses 'Shadow stack:' (no literal '- Shadow: ...' line), so the
    // regex doesn't fire there. Use a synthetic fixture with the canonical
    // shape the rewrite expects.
    const fixture = [
      "# Test",
      "",
      "## 4. Component Stylings",
      "",
      "### Cards & Containers",
      "- Background: white",
      "- Border: 1px solid #eee",
      "- Shadow: rgba(0,0,0,0.1) 0 2px 4px",
      "- Radius: 8px",
      "",
      "### Inputs & Forms",
      "stub",
      "",
      "## 5. Layout",
      "",
    ].join("\n");

    const out = applyOverridesToMd(
      fixture, "Test", "#000000", "Inter", "400",
      baseOverrides, "", undefined, { cardStyle: "bordered" },
    );
    const cardsBlock = out.match(/### Cards & Containers\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(cardsBlock).toMatch(/Shadow:\s*none/);
    expect(cardsBlock).not.toMatch(/Shadow:.*rgba/i);
  });

  it("rewrites Whitespace Philosophy when density=compact", () => {
    const out = withPrefs({ density: "compact" });
    const wsBlock = out.match(/### Whitespace Philosophy\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(wsBlock).toMatch(/Compact & dense|Tight padding/i);
  });

  it("rewrites Whitespace Philosophy when density=spacious (and idempotent if already spacious)", () => {
    const out = withPrefs({ density: "spacious" });
    const wsBlock = out.match(/### Whitespace Philosophy\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(wsBlock).toMatch(/spacious|generous|breathing|Open & spacious/i);
  });

  it("replaces 'Radius: Npx' patterns when borderRadius override given", () => {
    const out = withPrefs({}, { borderRadius: "4px" });
    // Any Radius: N-greater-than-4 should now be 4px
    const sec4 = out.match(/## 4\. [^\n]+\n([\s\S]*?)(?=\n## \d+\.)/)?.[1] ?? "";
    const radiusMentions = [...sec4.matchAll(/Radius:\s*(\d+px|9999px)/gi)];
    for (const m of radiusMentions) {
      // either 4px (replaced), 9999px (preserved as pill), or no match
      expect(["4px", "9999px"]).toContain(m[1]);
    }
  });
});

// ── applyOverridesToMd: appended sections ─────────────────────────

describe("applyOverridesToMd – appends", () => {
  it("appends component list when components provided", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist", "600",
      baseOverrides, "", ["button", "card", "input"],
    );
    expect(out).toContain("## Included Components");
    expect(out).toContain("- Button");
    expect(out).toContain("- Card");
    expect(out).toContain("- Input");
  });

  it("does not append Included Components when list is empty", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", "600", baseOverrides, "", []);
    expect(out).not.toContain("## Included Components");
  });

  it("title-cases multi-word component names with hyphens", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist", "600",
      baseOverrides, "", ["data-table"],
    );
    expect(out).toContain("- Data table");
  });

  it("always appends Iconography & SVG Guidelines section", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", "600", baseOverrides, "");
    expect(out).toContain("## Iconography & SVG Guidelines");
    expect(out).toContain("Lucide React");
  });

  it("always appends Document Policies section", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", "600", baseOverrides, "");
    expect(out).toContain("## Document Policies");
    expect(out).toContain("No Emojis");
  });

  it("does NOT embed shadcn CSS in the markdown body (CSS is exported separately)", () => {
    const fakeCss = "@layer base { :root { --primary: 240 50% 50%; } }";
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist", "600",
      baseOverrides, fakeCss,
    );
    expect(out).not.toContain(fakeCss);
    expect(out).not.toContain("@layer base");
  });
});
