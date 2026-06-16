import { describe, it, expect } from "vitest";
// shared deterministic core behind the absorb/verify/receipt scripts + `omd validate` (#37)
import { dE, deltaE2000, rgbToLab, validateDesignMd, parseDesignMd, COMPONENT_TYPES } from "../scripts/lib/omd-core.mjs";

const VALID = `---
omd: 0.1
brand: Test
tokens:
  colors: { primary: "#5358ee" }
  components:
    btn: { type: button, bg: "#5358ee", fg: "#ffffff", radius: "10px" }
---
# Test
## 1. Visual Theme & Atmosphere
Quiet violet-anchored surface.
## 2. Color Palette & Roles
- Indigo Primary (\`#5358ee\`)
## 3. Typography Rules
Geist.
## 4. Component Stylings
### Buttons
**Primary**
- Background: \`#5358ee\`
- Text: \`#ffffff\`
- Radius: 10px
## 5. Layout Principles
12-col grid.
`;

describe("CIEDE2000", () => {
  it("identical colors → ΔE 0", () => {
    expect(dE([83, 88, 238], [83, 88, 238])).toBeCloseTo(0, 5);
  });
  it("very different colors → large ΔE", () => {
    expect(dE([83, 88, 238], [29, 29, 31])).toBeGreaterThan(30);
  });
  it("just-noticeable pair → small ΔE", () => {
    // #5358ee vs a 1-step neighbour stays well under the JND-ish range
    expect(deltaE2000(rgbToLab([83, 88, 238]), rgbToLab([85, 90, 238]))).toBeLessThan(2);
  });
});

describe("validateDesignMd", () => {
  it("a well-formed DESIGN.md passes with 0 errors", () => {
    const r = validateDesignMd(VALID);
    expect(r.ok).toBe(true);
    expect(r.errors).toBe(0);
  });

  it("flags the §4 slash-multifield anti-pattern (KRDS regression)", () => {
    const bad = VALID.replace("- Text: `#ffffff`", "- On: `#20808D` track / off: `#D6D6CC` track");
    const r = validateDesignMd(bad);
    expect(r.ok).toBe(false);
    expect(r.findings.some((f) => f.rule === "section4.slash-multifield")).toBe(true);
  });

  it("does NOT flag the legitimate `font: size / weight / family` sub-syntax", () => {
    const ok = VALID.replace("- Radius: 10px", "- Radius: 10px\n- Font: 16px / 600 / Geist");
    const r = validateDesignMd(ok);
    expect(r.findings.some((f) => f.rule === "section4.slash-multifield")).toBe(false);
  });

  it("rejects a component type outside the enum", () => {
    const bad = VALID.replace("type: button", "type: hyperbutton");
    const r = validateDesignMd(bad);
    expect(r.ok).toBe(false);
    expect(r.findings.some((f) => f.rule === "component.type-enum")).toBe(true);
  });

  it("errors when a required section is missing", () => {
    const bad = VALID.replace(/## 5\. Layout Principles[\s\S]*$/, "");
    const r = validateDesignMd(bad);
    expect(r.ok).toBe(false);
    expect(r.findings.some((f) => f.rule === "section.missing" && /§5/.test(f.msg))).toBe(true);
  });

  it("counts [FILL IN] placeholders as info, not error", () => {
    const withFill = VALID + "\n## 11. Brand Narrative\n[FILL IN: founding story]\n";
    const r = validateDesignMd(withFill);
    expect(r.ok).toBe(true);
    expect(r.findings.some((f) => f.rule === "philosophy.fill-in")).toBe(true);
  });
});

describe("Hermes loop (#38) — maturity must climb ONLY via cited fills", () => {
  const base = `---\nomd: 0.1\n---\n# T\n## 10. Voice & Tone\n`;
  const uncited = base + `Calm and technical. We speak plainly.\n`;
  const cited = base + "Calm and technical (per `CLAUDE.md` voice rule).\n";

  it("an UNCITED §10-15 fill does NOT raise maturity (anti-fabrication teeth)", async () => {
    const { philosophyMaturity } = await import("../scripts/lib/omd-core.mjs");
    const u = philosophyMaturity(uncited);
    expect(u.filled).toBe(1);       // it IS filled
    expect(u.citedFilled).toBe(0);  // but not cited
    expect(u.maturity).toBe(0);     // so the meter does NOT move
  });
  it("a CITED fill raises maturity", async () => {
    const { philosophyMaturity, groundedMaturity } = await import("../scripts/lib/omd-core.mjs");
    expect(philosophyMaturity(cited).maturity).toBe(17); // 1/6
    expect(groundedMaturity(cited)).toBe(17);
  });
  it("maturityRatchet keeps a monotonic high-water floor", async () => {
    const { maturityRatchet } = await import("../scripts/lib/omd-core.mjs");
    let s = maturityRatchet(null, uncited);
    expect(s.maturity_high).toBe(0);
    s = maturityRatchet(s, cited);
    expect(s.maturity_high).toBe(17);
    s = maturityRatchet(s, uncited); // regress current
    expect(s.maturity).toBe(0);
    expect(s.maturity_high).toBe(17); // floor holds
  });
  it("enrichmentTargets ranks a [FILL IN] slot ready ONLY when a cited pref maps to it", async () => {
    const { enrichmentTargets } = await import("../scripts/lib/omd-core.mjs");
    const doc = `---\nomd: 0.1\n---\n# T\n## 10. Voice & Tone\n[FILL IN: project voice]\n## 12. Principles\n[FILL IN: 3-5 principles]\n`;
    const prefs = [
      { scope: "voice", status: "pending", body: "CTAs never uppercase (per `src/ui/Button.tsx:40`)" }, // cited → counts
      { scope: "voice", status: "pending", body: "warm tone" }, // uncited → ignored
    ];
    const t = enrichmentTargets(doc, prefs);
    expect(t.find((x) => x.n === 10)!.readySignals).toBe(1);
    expect(t.find((x) => x.n === 12)!.readySignals).toBe(0);
  });
  it("reconcile flags an uncited fill", async () => {
    const { reconcile } = await import("../scripts/lib/omd-core.mjs");
    const alerts = reconcile({ fill_in: 6, maturity_high: 0 }, uncited);
    expect(alerts.some((a: { kind: string }) => a.kind === "uncited-fill")).toBe(true);
  });
});

describe("parseDesignMd + enum", () => {
  it("splits §1-15 sections and frontmatter", () => {
    const p = parseDesignMd(VALID);
    expect(p.data.omd).toBe(0.1);
    expect(p.sections[1]).toContain("violet-anchored");
    expect(p.sections[4]).toContain("Primary");
  });
  it("COMPONENT_TYPES is the canonical 10-type enum", () => {
    expect(COMPONENT_TYPES).toContain("button");
    expect(COMPONENT_TYPES).toContain("listItem");
    expect(COMPONENT_TYPES).toHaveLength(10);
  });
});
