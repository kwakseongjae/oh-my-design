import { describe, expect, it } from "vitest";
import { capData, getHeroCaps, getLandingData } from "@/lib/landing-a/data.server";
import { paleOf, solidFills, svgText } from "@/lib/landing-a/caps";
import { contrast } from "@/lib/landing-a/contrast";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import manifest from "@/data/brand-svg.json";
import heroCaps from "@/data/hero-caps.json";

/**
 * Hero keycaps (round 5): the cap set is data (data/hero-caps.json); a cap is a logo cap
 * only when brand-svg.json holds a genuine logo that reads at 3:1 on it, else a glyph cap.
 * Logos are never recoloured; glyph caps carry the native first glyph on the claimed colour.
 */
const LOCALES = ["en", "ko", "ja", "zh-tw"] as const;

describe("hero keycaps", () => {
  it("en/ko keep r4's nine logo caps with the same cap colours", () => {
    const caps = getHeroCaps("en");
    expect(caps.every((c) => c.kind === "logo")).toBe(true);
    const cap = (id: string) => caps.find((c) => c.id === id)!;
    expect(caps.map((c) => c.id).sort()).toEqual(["channeltalk", "class101", "kakaobank", "kream", "kurly", "socar", "toss", "upbit", "yanolja"]);
    // r4 hand-assigned brand/pale; the computed rule must reproduce it
    for (const id of ["kakaobank", "toss", "class101", "yanolja"]) expect(cap(id).hex, id).toBe(capData(id)!.hex);
    for (const id of ["kurly", "kream", "channeltalk", "upbit", "socar"]) expect(cap(id).hex, id).toBe(paleOf(capData(id)!.hex!));
    expect(getHeroCaps("ko").map((c) => c.id)).toEqual(caps.map((c) => c.id));
  });

  it("ja / zh-tw add 2–3 native glyph caps of verified refs from that region, and keep the logo caps", () => {
    for (const [loc, cc] of [["ja", "JP"], ["zh-tw", "TW"]] as const) {
      const caps = getHeroCaps(loc);
      const glyphs = caps.filter((c) => c.kind === "glyph");
      expect(glyphs.length, loc).toBeGreaterThanOrEqual(2);
      expect(glyphs.length, loc).toBeLessThanOrEqual(3);
      expect(caps.filter((c) => c.kind === "logo").length, loc).toBe(9);
      for (const g of glyphs) {
        expect(REGISTRY_BY_ID[g.id].country, g.id).toBe(cc);
        expect(REFERENCE_QUALITY_BY_ID[g.id].status, g.id).toBe("verified_v2");
        expect(/[぀-ヿ㐀-鿿]/.test(g.g), `${g.id} native glyph ${g.g}`).toBe(true);
        expect(g.row >= 0, `${g.id} shown on desktop`).toBe(true);
      }
      expect(glyphs.filter((g) => g.mrow >= 0).length, `${loc} glyph caps on phone`).toBeGreaterThanOrEqual(2);
      expect(new Set(glyphs.map((g) => g.g)).size, `${loc} distinct glyphs`).toBe(glyphs.length);
    }
  });

  it("every locale shows ≥ 8 caps on desktop and ≥ 5 on phone; every id in the data resolves", () => {
    for (const loc of LOCALES) {
      const caps = getHeroCaps(loc);
      expect(caps.filter((c) => c.row >= 0).length, loc).toBeGreaterThanOrEqual(8);
      expect(caps.filter((c) => c.mrow >= 0).length, loc).toBeGreaterThanOrEqual(5);
    }
    const ids = new Set(Object.values(heroCaps.sets).flatMap((s) => [...s.wide.flat(), ...s.narrow.flat()]));
    const resolved = new Set(LOCALES.flatMap((l) => getHeroCaps(l).map((c) => c.id)));
    expect([...ids].filter((i) => !resolved.has(i))).toEqual([]);
  });

  it("every logo carries its manifest provenance and reads at 3:1 on its cap", () => {
    for (const loc of LOCALES) for (const c of getHeroCaps(loc).filter((x) => x.kind === "logo")) {
      const rec = manifest.records.find((r) => r.id === c.id)!;
      expect(rec, c.id).toBeTruthy();
      const v = Object.values(rec.variants).find((x) => "/" + x.ref === c.src) as { source: string; license: string } | undefined;
      expect(v?.source && v.license, c.id).toBeTruthy();
      expect(rec.risk_tier, c.id).not.toBe("high");
      for (const f of solidFills(svgText(c.src)!)) expect(contrast(f, c.hex), `${c.id} ${f} on ${c.hex}`).toBeGreaterThanOrEqual(3);
    }
  });

  it("a glyph cap's legend reads at 3:1 on its claimed colour", () => {
    for (const loc of LOCALES) for (const c of getHeroCaps(loc).filter((x) => x.kind === "glyph")) {
      expect(contrast(c.on, c.hex), `${c.id} ${c.on} on ${c.hex}`).toBeGreaterThanOrEqual(3);
    }
  });

  it("paleOf tints toward white", () => {
    expect(paleOf("#000000")).toBe("#d6d6d6");
  });

  it("picker chips: genuine logo where stored, else glyph", () => {
    const gen = getLandingData("en").gen;
    const logos = gen.filter((g) => g.logo).map((g) => g.id);
    expect(logos).toEqual(["toss", "karrot", "kakaobank", "banksalad"]);
    for (const g of gen.filter((x) => x.logo)) expect(svgText(g.logo!), g.id).toBeTruthy();
  });
});
