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
    const m = withAccent.match(/--accent:\s*([^;]+);/);
    expect(m).toBeTruthy();
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
  it("replaces title when any override is set", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      { ...baseOverrides, primaryColor: "#6366f1" },
    );
    expect(out).toMatch(/^# Custom Design System \(based on Vercel\)/m);
    expect(out).not.toMatch(/^# Design System Inspiration of Vercel/m);
  });

  it("replaces title when any style preference is set", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      baseOverrides, undefined, { buttonStyle: "sharp" },
    );
    expect(out).toMatch(/^# Custom Design System \(based on Vercel\)/m);
  });

  it("keeps the reference's original title for as-is export (no overrides, no prefs)", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", baseOverrides);
    // Untouched — this is the "pure original" contract used by the Use-as-is
    // button on the selector. The reference's own heading is preserved.
    expect(out).toMatch(/^# Design System Inspiration of Vercel/m);
    expect(out).not.toContain("# Custom Design System");
  });

  it("strips emoji code points", () => {
    const withEmoji = "# Test\n\nUse 🎨 for color and 🚀 for launch.";
    const out = applyOverridesToMd(withEmoji, "X", "#000000", "Inter", baseOverrides);
    expect(out).not.toMatch(/[\u{1F300}-\u{1F9FF}]/u);
  });

  it("strips ✅ and ❌ as part of the unicode emoji range strip", () => {
    // No reference DESIGN.md uses ✅/❌; references write out **DO** / **DON'T**
    // explicitly. The unicode strip removes the glyphs defensively in case a
    // future reference accidentally introduces them.
    const md = "# T\n\n✅ Good\n❌ Bad\n";
    const out = applyOverridesToMd(md, "X", "#000000", "Inter", baseOverrides);
    expect(out).not.toContain("✅");
    expect(out).not.toContain("❌");
    expect(out).toContain("Good");
    expect(out).toContain("Bad");
  });

  it("substitutes primaryColor when different from original", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      { ...baseOverrides, primaryColor: "#6366f1" },
    );
    expect(out).toContain("#6366f1");
    expect(out).not.toMatch(/#171717/i);
  });

  it("does not modify primaryColor when override matches original", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      { ...baseOverrides, primaryColor: "#171717" },
    );
    expect(out).toContain("#171717");
  });

  it("substitutes fontFamily when different from original", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      { ...baseOverrides, fontFamily: "Inter" },
    );
    const geistMentions = (out.match(/\bGeist\b/g) || []).length;
    expect(geistMentions).toBe(0);
    expect(out).toContain("Inter");
  });
});

// ── applyOverridesToMd: Color prose sanitizer ─────────────────────

describe("applyOverridesToMd – color prose sanitizer", () => {
  const stripeMd = readRef("stripe");

  it("rewrites 'Stripe Purple' to 'Brand <NewFamily>' when user swaps to green", () => {
    const out = applyOverridesToMd(
      stripeMd, "Stripe", "#533afd", "sohne-var",
      { ...baseOverrides, primaryColor: "#22c55e" },
    );
    expect(out).not.toContain("Stripe Purple");
    expect(out).toMatch(/Brand\s+Green/);
  });

  it("rewrites 'signature purple' color nouns in §1 to the new family", () => {
    const out = applyOverridesToMd(
      stripeMd, "Stripe", "#533afd", "sohne-var",
      { ...baseOverrides, primaryColor: "#22c55e" },
    );
    const sec1 = out.match(/## 1\. Visual Theme & Atmosphere[\s\S]*?(?=\n## 2\.)/)?.[0] ?? "";
    // No violet-family nouns should remain in §1 when user picked green.
    expect(sec1).not.toMatch(/\b(purple|violet|indigo|lavender)\b/i);
  });

  it("rotates blue-tinted shadow rgba to the new primary hue", () => {
    const out = applyOverridesToMd(
      stripeMd, "Stripe", "#533afd", "sohne-var",
      { ...baseOverrides, primaryColor: "#22c55e" },
    );
    // Stripe's signature shadow rgba(50,50,93,0.25) — blue-purple tinted — must
    // not survive verbatim after the primary is swapped to green.
    expect(out).not.toContain("rgba(50,50,93,0.25)");
    expect(out).not.toContain("rgba(50, 50, 93");
  });

  it("leaves neutral shadows (rgba(0,0,0,...)) untouched", () => {
    const out = applyOverridesToMd(
      stripeMd, "Stripe", "#533afd", "sohne-var",
      { ...baseOverrides, primaryColor: "#22c55e" },
    );
    // Pure-neutral shadow layers in Stripe should stay — they're not tinted
    // and therefore not derived from the primary.
    expect(out).toContain("rgba(0,0,0,0.1)");
  });

  it("is a no-op when the override equals the original primary", () => {
    const out = applyOverridesToMd(
      stripeMd, "Stripe", "#533afd", "sohne-var",
      { ...baseOverrides, primaryColor: "#533afd" },
    );
    // Nothing in the sanitizer path fires; prose stays identical to the ref.
    expect(out).toContain("Stripe Purple");
    expect(out).toContain("rgba(50,50,93,0.25)");
  });

  it("is a no-op when old and new primary share the same color family", () => {
    // Both #533afd (violet h=249) and #7c3aed (violet h=262) are violet family.
    // Prose describing "violet" remains correct; sanitizer must not fire.
    const out = applyOverridesToMd(
      stripeMd, "Stripe", "#533afd", "sohne-var",
      { ...baseOverrides, primaryColor: "#7c3aed" },
    );
    expect(out).toContain("Stripe Purple"); // brand-qualified name preserved
    const sec1 = out.match(/## 1\. Visual Theme & Atmosphere[\s\S]*?(?=\n## 2\.)/)?.[0] ?? "";
    expect(sec1).toMatch(/\b(violet|purple)\b/i);
  });

  it("doesn't touch accent/non-primary palette entries (Ruby, Magenta)", () => {
    // Stripe has Ruby (#ea2261) and Magenta (#f96bee) as separate accents.
    // Swapping the violet primary must not rewrite these unrelated entries.
    const out = applyOverridesToMd(
      stripeMd, "Stripe", "#533afd", "sohne-var",
      { ...baseOverrides, primaryColor: "#22c55e" },
    );
    // These accent entries live in §2; sanitizer only sweeps §1 free-form prose
    // plus brand-name patterns. Ruby and Magenta should still be named as such.
    expect(out).toMatch(/\*\*Ruby\*\*/);
    expect(out).toMatch(/\*\*Magenta\*\*/);
  });
});

// ── applyOverridesToMd: Philosophy Layer opt-out ──────────────────

describe("applyOverridesToMd – Philosophy Layer", () => {
  it("retains Philosophy Layer when includePhilosophyLayer=true (default)", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", baseOverrides);
    expect(out).toContain("## 10. Voice & Tone");
  });

  it("strips sections 10-15 + Sources comment when includePhilosophyLayer=false", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      baseOverrides, undefined, undefined, false,
    );
    expect(out).not.toContain("## 10. Voice & Tone");
    expect(out).not.toContain("OmD v0.1 Sources");
  });

  it("is a no-op for refs without Philosophy Layer", () => {
    expect(clickhouseMd).not.toContain("## 10. Voice & Tone");
    const out = applyOverridesToMd(
      clickhouseMd, "ClickHouse", "#000000", "Inter",
      { ...baseOverrides, primaryColor: "#123456" },
      undefined, undefined, false,
    );
    // With an override set, the customized title applies; strip did nothing
    // because this ref has no Philosophy Layer to remove.
    expect(out).toMatch(/^# Custom Design System \(based on ClickHouse\)/m);
  });
});

// ── applyOverridesToMd: inline subsection rewrites ────────────────

describe("applyOverridesToMd – StylePreferences inline modifications", () => {
  function withPrefs(prefs: StylePreferences, overrides: Partial<Overrides> = {}): string {
    return applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      { ...baseOverrides, ...overrides },
      undefined, prefs,
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
      fakeMd, "Test", "#000000", "Inter",
      baseOverrides, undefined, { headerStyle: "glass" },
    );
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
      fixture, "Test", "#000000", "Inter",
      baseOverrides, undefined, { cardStyle: "bordered" },
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

  it("rewrites Whitespace Philosophy when density=spacious (against a non-spacious source)", () => {
    // Vercel's original Whitespace Philosophy already contains "generous",
    // which triggers the idempotence early-return inside the rewrite. To
    // actually exercise the rewrite path we need a fixture whose original
    // text doesn't contain generous/spacious/breathing.
    const fixture = [
      "# T",
      "",
      "## 5. Layout Principles",
      "",
      "### Whitespace Philosophy",
      "- **Tight columns**: 12px padding, 4px gap.",
      "- **High density**: Maximize information per viewport.",
      "",
      "### Border Radius",
      "stub",
      "",
      "## 6. Depth",
      "",
    ].join("\n");
    const out = applyOverridesToMd(
      fixture, "T", "#000000", "Inter",
      baseOverrides, undefined, { density: "spacious" },
    );
    const wsBlock = out.match(/### Whitespace Philosophy\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(wsBlock).toMatch(/Open & spacious/);
    expect(wsBlock).not.toContain("Tight columns");
  });

  it("density=spacious is idempotent when the original already mentions generous/breathing", () => {
    // Vercel's original block contains "generous" — the rewrite must no-op,
    // preserving the original copy verbatim.
    const out = withPrefs({ density: "spacious" });
    const wsBlock = out.match(/### Whitespace Philosophy\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(wsBlock).toContain("Gallery emptiness"); // Vercel-original text preserved
    expect(wsBlock).not.toContain("Open & spacious"); // rewrite did not fire
  });

  it("rewrites Buttons subsection to 'Sharp & Precise' when buttonStyle=sharp", () => {
    const out = withPrefs({ buttonStyle: "sharp" });
    const buttonBlock = out.match(/### Buttons\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(buttonBlock).toMatch(/Sharp & Precise|minimal rounding/);
    expect(buttonBlock).not.toMatch(/pill-shaped|9999px/i);
  });

  it("rewrites Buttons subsection to 'Rounded & Friendly' when buttonStyle=rounded", () => {
    const out = withPrefs({ buttonStyle: "rounded" });
    const buttonBlock = out.match(/### Buttons\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(buttonBlock).toMatch(/Rounded & Friendly|pill/i);
    expect(buttonBlock).toContain("9999px");
  });

  it("inserts an explicit 'Style: Bordered Box' marker when inputStyle=bordered", () => {
    // Fixture with no existing Style: line — rewrite must inject one.
    const fixture = [
      "# T",
      "",
      "## 4. Component Stylings",
      "",
      "### Inputs & Forms",
      "- Border: 1px solid #e5e7eb",
      "- Radius: 6px",
      "",
      "### Navigation",
      "stub",
      "",
      "## 5. Layout",
      "",
    ].join("\n");
    const out = applyOverridesToMd(
      fixture, "T", "#000000", "Inter",
      baseOverrides, undefined, { inputStyle: "bordered" },
    );
    const inputBlock = out.match(/### Inputs & Forms\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(inputBlock).toMatch(/Style:\s*Bordered Box/);
    expect(inputBlock).toContain("1px solid #e5e7eb"); // preserves ref detail
  });

  it("is idempotent when inputStyle=bordered and source already has a Style: line", () => {
    const fixture = [
      "# T",
      "",
      "## 4. Component Stylings",
      "",
      "### Inputs & Forms",
      "- Style: Minimal outlined field",
      "- Border: 1px solid #ddd",
      "",
      "### Navigation",
      "stub",
      "",
      "## 5. Layout",
      "",
    ].join("\n");
    const out = applyOverridesToMd(
      fixture, "T", "#000000", "Inter",
      baseOverrides, undefined, { inputStyle: "bordered" },
    );
    expect(out).toContain("Style: Minimal outlined field");
    expect(out).not.toContain("Style: Bordered Box");
  });

  it("appends a Shadow: line when cardStyle=elevated and source lacks one", () => {
    // Stripe's Cards block uses 'Shadow (standard):' / 'Shadow (ambient):' — no
    // canonical '- Shadow:' bullet. Use a fixture that mirrors this pattern.
    const fixture = [
      "# T",
      "",
      "## 4. Component Stylings",
      "",
      "### Cards & Containers",
      "- Background: #ffffff",
      "- Border: 1px solid #eee",
      "- Radius: 8px",
      "- Shadow stack: layered recipe described in prose",
      "",
      "### Inputs & Forms",
      "stub",
      "",
      "## 5. Layout",
      "",
    ].join("\n");
    const out = applyOverridesToMd(
      fixture, "T", "#000000", "Inter",
      baseOverrides, undefined, { cardStyle: "elevated" },
    );
    const cardsBlock = out.match(/### Cards & Containers\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(cardsBlock).toMatch(/^[-*]\s*Shadow:\s*multi-layer elevation/m);
  });

  it("is idempotent when cardStyle=elevated and source already has '- Shadow:' bullet", () => {
    const fixture = [
      "# T",
      "",
      "## 4. Component Stylings",
      "",
      "### Cards & Containers",
      "- Background: #ffffff",
      "- Shadow: rgba(0,0,0,0.1) 0 2px 4px",
      "",
      "### Inputs & Forms",
      "stub",
      "",
      "## 5. Layout",
      "",
    ].join("\n");
    const out = applyOverridesToMd(
      fixture, "T", "#000000", "Inter",
      baseOverrides, undefined, { cardStyle: "elevated" },
    );
    expect(out).toContain("Shadow: rgba(0,0,0,0.1)");
    expect(out).not.toContain("multi-layer elevation");
  });

  it("replaces 'Radius: Npx' patterns when borderRadius override given", () => {
    const out = withPrefs({}, { borderRadius: "4px" });
    const sec4 = out.match(/## 4\. [^\n]+\n([\s\S]*?)(?=\n## \d+\.)/)?.[1] ?? "";
    const radiusMentions = [...sec4.matchAll(/Radius:\s*(\d+px|9999px)/gi)];
    for (const m of radiusMentions) {
      expect(["4px", "9999px"]).toContain(m[1]);
    }
  });
});

// ── applyOverridesToMd: appended sections + invariants ────────────

describe("applyOverridesToMd – appends", () => {
  it("appends component list when components provided", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      baseOverrides, ["button", "card", "input"],
    );
    expect(out).toContain("## Included Components");
    expect(out).toContain("- Button");
    expect(out).toContain("- Card");
    expect(out).toContain("- Input");
  });

  it("does not append Included Components when list is empty", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", baseOverrides, []);
    expect(out).not.toContain("## Included Components");
  });

  it("title-cases multi-word component names with hyphens", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      baseOverrides, ["data-table"],
    );
    expect(out).toContain("- Data table");
  });

  it("always appends Iconography & SVG Guidelines section", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", baseOverrides);
    expect(out).toContain("## Iconography & SVG Guidelines");
    expect(out).toContain("Lucide React");
  });

  it("always appends Document Policies section", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", baseOverrides);
    expect(out).toContain("## Document Policies");
    expect(out).toContain("No Emojis");
  });

  it("appends Dark Mode Tokens section when darkMode=true", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      { ...baseOverrides, darkMode: true },
    );
    expect(out).toContain("## Dark Mode Tokens");
    expect(out).toMatch(/Dark mode is enabled for this design system/);
    expect(out).toMatch(/\.dark\b/); // references the shadcn/Tailwind convention
  });

  it("does not append Dark Mode Tokens section when darkMode=false", () => {
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", baseOverrides);
    expect(out).not.toContain("## Dark Mode Tokens");
  });

  it("places Dark Mode Tokens before Iconography & SVG Guidelines", () => {
    const out = applyOverridesToMd(
      vercelMd, "Vercel", "#171717", "Geist",
      { ...baseOverrides, darkMode: true },
    );
    const darkIdx = out.indexOf("## Dark Mode Tokens");
    const iconIdx = out.indexOf("## Iconography & SVG Guidelines");
    expect(darkIdx).toBeGreaterThan(0);
    expect(iconIdx).toBeGreaterThan(darkIdx);
  });

  it("does NOT embed shadcn CSS in the markdown body (CSS is exported separately)", () => {
    // Tokens/CSS export is a separate code path (generateShadcnCss returns
    // the CSS; consumers download or copy it independently). The DESIGN.md
    // body must never contain @layer/:root/--var blocks.
    const out = applyOverridesToMd(vercelMd, "Vercel", "#171717", "Geist", baseOverrides);
    expect(out).not.toContain("@layer base");
    expect(out).not.toMatch(/^\s*:root\s*\{/m);
    expect(out).not.toMatch(/^\s*--background:/m);
  });
});

// ── Wizard fidelity matrix ───────────────────────────────────────
//
// End-to-end guard: every wizard dimension must leave an observable
// signature in the generated DESIGN.md. Uses a synthetic fixture with
// every subsection so tests don't drift with reference updates. If a
// future change drops a dimension's effect, the matching case fails.
//
// Source of truth for wizard inputs:
//   components/design-wizard.tsx → overrides (primaryColor, borderRadius,
//   darkMode) + preferences (buttonStyle, inputStyle, headerStyle,
//   cardStyle, density).
describe("applyOverridesToMd – wizard fidelity matrix", () => {
  const fixture = [
    "# Design System Inspiration of T",
    "",
    "## 1. Visual Theme & Atmosphere",
    "A calm, technical aesthetic anchored in blue.",
    "",
    "## 2. Color Palette & Roles",
    "- Primary: #6366f1",
    "- Accent: #ef4444",
    "",
    "## 3. Typography Rules",
    "- Primary: Inter",
    "",
    "## 4. Component Stylings",
    "",
    "### Buttons",
    "- Style: default outlined",
    "- Radius: 6px across variants",
    "- Padding: 8px 16px",
    "",
    "### Inputs & Forms",
    "- Border: 1px solid #e5e7eb",
    "- Radius: 6px",
    "",
    "### Navigation",
    "- Header sits on solid white with a bottom border.",
    "",
    "### Cards & Containers",
    "- Background: #ffffff",
    "- Border: 1px solid #eee",
    "- Radius: 8px",
    "",
    "## 5. Layout Principles",
    "",
    "### Whitespace Philosophy",
    "- Tight columns, 12px padding.",
    "",
    "## 6. Depth & Elevation",
    "",
    "## 7. Do's and Don'ts",
    "",
    "## 8. Responsive Behavior",
    "",
    "## 9. Agent Prompt Guide",
    "",
  ].join("\n");

  function run(
    overrides: Partial<Overrides> = {},
    prefs: StylePreferences = {},
    originalPrimary = "#6366f1",
  ): string {
    return applyOverridesToMd(
      fixture, "T", originalPrimary, "Inter",
      { ...baseOverrides, ...overrides },
      undefined, prefs,
    );
  }

  // Each row: one wizard dimension with one value. The signature must
  // survive downstream passes (radius sweep, etc.).
  const preferenceCases: Array<{
    name: string;
    prefs: StylePreferences;
    signature: RegExp;
  }> = [
    { name: "buttonStyle=sharp",   prefs: { buttonStyle: "sharp" },   signature: /Sharp & Precise/ },
    { name: "buttonStyle=rounded", prefs: { buttonStyle: "rounded" }, signature: /Rounded & Friendly/ },
    { name: "inputStyle=bordered", prefs: { inputStyle: "bordered" }, signature: /Style:\s*Bordered Box/ },
    { name: "inputStyle=underline",prefs: { inputStyle: "underline" },signature: /Underline -- bottom border/ },
    { name: "headerStyle=glass",   prefs: { headerStyle: "glass" },   signature: /Glass & Floating/ },
    { name: "headerStyle=solid",   prefs: { headerStyle: "solid" },   signature: /Solid & Bold/ },
    { name: "cardStyle=bordered",  prefs: { cardStyle: "bordered" },  signature: /Shadow:\s*none/ },
    { name: "cardStyle=elevated",  prefs: { cardStyle: "elevated" },  signature: /multi-layer elevation/ },
    { name: "density=compact",     prefs: { density: "compact" },     signature: /Compact & dense/ },
    { name: "density=spacious",    prefs: { density: "spacious" },    signature: /Open & spacious/ },
  ];
  for (const c of preferenceCases) {
    it(`${c.name} leaves a signature in DESIGN.md`, () => {
      const out = run({}, c.prefs);
      expect(out).toMatch(c.signature);
    });
  }

  it("primaryColor override swaps the hex and rewrites brand color prose", () => {
    const out = run({ primaryColor: "#22c55e" });
    expect(out).not.toContain("#6366f1");
    expect(out).toContain("#22c55e");
  });

  it("borderRadius override rewrites '- Radius: Npx' bullets across §4", () => {
    const out = run({ borderRadius: "12px" });
    const sec4 = out.match(/## 4\.[\s\S]*?(?=## 5\.)/)?.[0] ?? "";
    const bullets = [...sec4.matchAll(/^[-*]\s*Radius:\s*(\S+)/gim)];
    expect(bullets.length).toBeGreaterThan(0);
    for (const m of bullets) {
      // Accept the user's value or the deliberate pill sentinel (9999px).
      expect(["12px", "9999px"]).toContain(m[1]);
    }
  });

  it("darkMode=true appends the Dark Mode Tokens section", () => {
    const out = run({ darkMode: true });
    expect(out).toContain("## Dark Mode Tokens");
  });

  // ── Conflict resolution guards ───────────────────────────────────
  // These used to silently lose to the trailing radius sweep before the
  // fix in generate-css.ts (sweep hoisted above the buttonStyle rewrite).

  it("buttonStyle=rounded + borderRadius=8px keeps the pill radius (9999px)", () => {
    const out = run({ borderRadius: "8px" }, { buttonStyle: "rounded" });
    const btn = out.match(/### Buttons\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(btn).toContain("9999px");
    expect(btn).not.toMatch(/Radius:\s*8px/);
  });

  it("buttonStyle=sharp + borderRadius=12px caps buttons at 4px despite the sweep", () => {
    const out = run({ borderRadius: "12px" }, { buttonStyle: "sharp" });
    const btn = out.match(/### Buttons\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(btn).toMatch(/Radius:\s*4px/);
    expect(btn).not.toMatch(/Radius:\s*12px/);
  });

  // Ensure the radius sweep still fires in non-wizard paths (no prefs).
  it("borderRadius alone (no stylePreferences) still rewrites §4 radius bullets", () => {
    const out = applyOverridesToMd(
      fixture, "T", "#6366f1", "Inter",
      { ...baseOverrides, borderRadius: "2px" },
      undefined, undefined,
    );
    expect(out).toMatch(/- Radius:\s*2px/);
  });

  it("cardStyle=bordered injects a Shadow: none line even when source has no Shadow bullet", () => {
    // Our fixture's Cards block lists Background/Border/Radius but no Shadow
    // bullet — exactly the case the old replace-only branch silently dropped.
    const out = run({}, { cardStyle: "bordered" });
    const cards = out.match(/### Cards & Containers\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(cards).toMatch(/^[-*]\s*Shadow:\s*none/m);
  });

  // Combined: every dimension at once must leave every signature.
  it("all wizard dimensions combined each leave their signature", () => {
    const out = run(
      { primaryColor: "#22c55e", borderRadius: "10px", darkMode: true },
      {
        buttonStyle: "rounded",
        inputStyle: "underline",
        headerStyle: "solid",
        cardStyle: "elevated",
        density: "compact",
      },
    );
    expect(out).toMatch(/Rounded & Friendly/);
    expect(out).toMatch(/Underline -- bottom border/);
    expect(out).toMatch(/Solid & Bold/);
    expect(out).toMatch(/multi-layer elevation/);
    expect(out).toMatch(/Compact & dense/);
    expect(out).toContain("#22c55e");
    expect(out).toContain("## Dark Mode Tokens");
    // pill wins for buttons — the 10px sweep does not clobber
    const btn = out.match(/### Buttons\n[\s\S]*?(?=###|\n## \d+\.)/)?.[0] ?? "";
    expect(btn).toContain("9999px");
  });
});
