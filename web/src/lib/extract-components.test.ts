import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { extractTokens } from "./extract-tokens";

const REFS_DIR = join(process.cwd(), "..", "references");

function loadRef(id: string) {
  const md = readFileSync(join(REFS_DIR, id, "DESIGN.md"), "utf8");
  return extractTokens({
    id,
    designMd: md,
    primary: "#000000",
    background: "#ffffff",
    foreground: "#0a0a0a",
    fontFamily: "Inter",
    headingWeight: "600",
    radius: "8px",
    mood: "test",
  });
}

describe("extractComponentSpecs against canonical-schema refs", () => {
  // Toss is the pilot — its §4 was rewritten to the canonical Variant-block
  // shape (see spec/components-schema.md). All required component types must
  // be parsed and at least the minimum fields populated.
  it("Toss — extracts all 8 subsections with valid variants", () => {
    const tokens = loadRef("toss");
    const blocks = tokens.components;

    const types = blocks.map((b) => b.type);
    expect(types).toContain("button");
    expect(types).toContain("input");
    expect(types).toContain("card");
    expect(types).toContain("badge");
    expect(types).toContain("tab");
    expect(types).toContain("toast");
    expect(types).toContain("dialog");
    expect(types).toContain("toggle");
  });

  it("Toss — Buttons reflect TDS Mobile 2-axis (variant × color) shape with all 8 variants", () => {
    const tokens = loadRef("toss");
    const buttons = tokens.components.find((b) => b.type === "button");
    expect(buttons).toBeDefined();
    expect(buttons!.variants.length).toBe(8);
    const fillPrimary = buttons!.variants.find((v) => v.name === "Fill / Primary");
    expect(fillPrimary).toBeDefined();
    expect(fillPrimary!.bg).toContain("#3182f6");
    expect(fillPrimary!.fg).toContain("#ffffff");
    expect(fillPrimary!.radius).toBe("16px");
    expect(fillPrimary!.font).toContain("17px");
    expect(fillPrimary!.font).toContain("Toss Product Sans");
    expect(fillPrimary!.use).toContain("CTA");
    // Dark color is #4e5968 (grey700) per TDS — NOT #191f28 (grey900)
    const fillDark = buttons!.variants.find((v) => v.name === "Fill / Dark");
    expect(fillDark!.bg).toContain("#4e5968");
    // Weak Primary uses translucent layer on top of page bg
    const weakPrimary = buttons!.variants.find((v) => v.name === "Weak / Primary");
    expect(weakPrimary!.bg).toContain("rgba(100, 168, 255, 0.15)");
    expect(weakPrimary!.fg).toContain("#2272eb");
  });

  it("Toss — Inputs has TDS variants box / line / big / hero (per TextField docs)", () => {
    const tokens = loadRef("toss");
    const inputs = tokens.components.find((b) => b.type === "input");
    expect(inputs).toBeDefined();
    const names = inputs!.variants.map((v) => v.name.toLowerCase());
    // TDS TextField has 4 variants — box (default) is the workhorse.
    expect(names.some((n) => n.includes("box"))).toBe(true);
    expect(names.some((n) => n.includes("line"))).toBe(true);
    expect(names.some((n) => n.includes("big"))).toBe(true);
    expect(names.some((n) => n.includes("hero"))).toBe(true);
  });

  it("Toss — Cards has Standard + Featured + Compact", () => {
    const tokens = loadRef("toss");
    const cards = tokens.components.find((b) => b.type === "card");
    expect(cards).toBeDefined();
    expect(cards!.variants.length).toBeGreaterThanOrEqual(3);
  });

  it("Toss — Badges reflect TDS 2-axis fill/weak × color shape", () => {
    const tokens = loadRef("toss");
    const badges = tokens.components.find((b) => b.type === "badge");
    expect(badges).toBeDefined();
    // We list 8 representative variants: 4 fills + 4 weaks (out of 6 colors).
    expect(badges!.variants.length).toBeGreaterThanOrEqual(6);
    const names = badges!.variants.map((v) => v.name.toLowerCase());
    expect(names.some((n) => n.includes("fill"))).toBe(true);
    expect(names.some((n) => n.includes("weak"))).toBe(true);
  });

  // ── Batch 1: Kakao / Apple / Airbnb / Spotify ──────────────────────
  // For each batch-1 ref, the four required component types (button / input /
  // card / badge) must parse with at least one variant. We don't enforce
  // exact variant counts here — the exact list is brand-specific — but the
  // pipeline guarantee is "every brand has all four."

  const REQUIRED_TYPES = ["button", "input", "card", "badge"] as const;

  for (const ref of ["kakao", "apple", "airbnb", "spotify"]) {
    it(`${ref} — has all 4 required component types with ≥1 variant each`, () => {
      const tokens = loadRef(ref);
      for (const t of REQUIRED_TYPES) {
        const block = tokens.components.find((b) => b.type === t);
        expect(block, `${ref} missing ${t} block`).toBeDefined();
        expect(block!.variants.length, `${ref} ${t} has 0 variants`).toBeGreaterThan(0);
      }
    });

    it(`${ref} — every Button variant has bg + fg + radius`, () => {
      const tokens = loadRef(ref);
      const buttons = tokens.components.find((b) => b.type === "button");
      for (const v of buttons!.variants) {
        expect(v.bg, `${ref} button "${v.name}" missing bg`).toBeTruthy();
        expect(v.fg, `${ref} button "${v.name}" missing fg`).toBeTruthy();
        expect(v.radius, `${ref} button "${v.name}" missing radius`).toBeTruthy();
      }
    });
  }
});
