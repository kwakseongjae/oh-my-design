import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getHeroLogos } from "@/lib/landing-a/data.server";
import { HERO_LOGOS } from "@/lib/landing-a/picks";
import { contrast } from "@/components/brand-a/keycap";
import manifest from "@/data/brand-svg.json";

/**
 * Hero logo keycaps (round 4): genuine logos only, never recoloured, legible on the cap.
 * Every solid fill in each SVG must reach 3:1 (WCAG non-text) against the colour the cap
 * reads as. Gradient fills (url(#…)) are the brand's own artwork and are not checked.
 */
const PUBLIC = path.join(process.cwd(), "public");
const solidFills = (svg: string) => {
  const out = new Set<string>();
  for (const m of svg.matchAll(/fill(?:="|:)\s*(#[0-9a-f]{3,6})\b/gi)) {
    let h = m[1].toLowerCase();
    if (h.length === 4) h = "#" + [...h.slice(1)].map((c) => c + c).join("");
    out.add(h);
  }
  return [...out];
};

describe("hero logo keycaps", () => {
  const caps = getHeroLogos();

  it("every pick resolves (verified, claimed colour, stored logo)", () => {
    expect(caps.map((c) => c.id)).toEqual(HERO_LOGOS.map((p) => p.id));
    expect(caps.filter((c) => c.row >= 0).length).toBeGreaterThanOrEqual(8);
    expect(caps.filter((c) => c.mrow >= 0).length).toBeGreaterThanOrEqual(5);
  });

  it("every logo carries its manifest provenance", () => {
    for (const c of caps) {
      const rec = manifest.records.find((r) => r.id === c.id);
      expect(rec, c.id).toBeTruthy();
      const v = Object.values(rec!.variants)[0] as { ref: string; source: string; license: string };
      expect("/" + v.ref).toBe(c.src);
      expect(v.source && v.license, c.id).toBeTruthy();
      expect(rec!.risk_tier, c.id).not.toBe("high");
    }
  });

  it("every solid logo fill reads at 3:1 on its cap", () => {
    for (const c of caps) {
      const svg = fs.readFileSync(path.join(PUBLIC, c.src), "utf8");
      for (const f of solidFills(svg)) {
        expect(contrast(f, c.hex), `${c.id} ${f} on ${c.hex}`).toBeGreaterThanOrEqual(3);
      }
    }
  });
});
