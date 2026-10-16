import { describe, expect, it } from "vitest";
import { capData, getHeroCaps, getLandingData } from "@/lib/landing-a/data.server";
import { capFills, chipLogo, logoOf, paleOf, svgText } from "@/lib/landing-a/caps";
import edges from "@/data/brand-svg-edges.json";
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

  it("ja / zh-tw keep the nine KR logo caps and add three verified caps from that region", () => {
    const kr = getHeroCaps("en").map((c) => c.id);
    for (const [loc, cc] of [["ja", "JP"], ["zh-tw", "TW"]] as const) {
      const caps = getHeroCaps(loc);
      expect(kr.every((id) => caps.find((c) => c.id === id)?.kind === "logo"), loc).toBe(true);
      const local = caps.filter((c) => !kr.includes(c.id));
      expect(local.length, loc).toBe(3);
      for (const g of local) {
        expect(REGISTRY_BY_ID[g.id].country, g.id).toBe(cc);
        expect(REFERENCE_QUALITY_BY_ID[g.id].status, g.id).toBe("verified_v2");
        expect(g.row >= 0, `${g.id} shown on desktop`).toBe(true);
      }
      const glyphs = local.filter((c) => c.kind === "glyph");
      for (const g of glyphs) expect(/[぀-ヿ㐀-鿿]/.test(g.g), `${g.id} native glyph ${g.g}`).toBe(true);
      expect(new Set(glyphs.map((g) => g.g)).size, `${loc} distinct glyphs`).toBe(glyphs.length);
      expect(local.filter((g) => g.mrow >= 0).length, `${loc} local caps on phone`).toBeGreaterThanOrEqual(2);
    }
  });

  it("/ja: freee's official logo reads on its pale cap", () => {
    const ja = getHeroCaps("ja");
    expect(ja.find((c) => c.id === "freee")?.kind).toBe("logo");
  });

  it("every manifest variant has measured silhouette colours (run scripts/logo-edges.mjs after adding a logo)", () => {
    const logos = (edges as { logos: Record<string, unknown> }).logos;
    for (const r of manifest.records) for (const v of Object.values(r.variants)) expect(logos["/" + (v as { ref: string }).ref], (v as { ref: string }).ref).toBeTruthy();
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
      for (const f of capFills(c.src, svgText(c.src)!)) expect(contrast(f, c.hex), `${c.id} ${f} on ${c.hex}`).toBeGreaterThanOrEqual(3);
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
    expect(logos).toEqual(["toss", "karrot", "kakaobank", "banksalad", "line"]);
    for (const g of gen.filter((x) => x.logo)) expect(svgText(g.logo!), g.id).toBeTruthy();
  });

  it("a high-risk logo (LINE: no effects, no 3D, no modification) reaches the flat chip only, never a keycap", () => {
    const rec = manifest.records.find((r) => r.id === "line") as { risk_tier: string; landing_use?: string } | undefined;
    expect(rec?.risk_tier).toBe("high");
    expect(rec?.landing_use).toBe("flat-chip");
    expect(logoOf("line")).toBeNull();
    expect(logoOf("line", undefined, true)?.src).toBe("/brand-svg/line/combined.svg");
    expect(chipLogo("line")).toBe("/brand-svg/line/combined.svg");
    for (const loc of LOCALES) expect(getHeroCaps(loc).find((c) => c.id === "line")?.kind ?? "absent", loc).not.toBe("logo");
    // every other high-risk record stays out of the chip too
    for (const r of manifest.records as { id: string; risk_tier?: string; landing_use?: string }[])
      if (r.risk_tier === "high" && r.landing_use !== "flat-chip") expect(chipLogo(r.id), r.id).toBeNull();
  });
});
