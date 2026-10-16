import { describe, expect, it } from "vitest";
import { REGISTRY, REGISTRY_BY_ID } from "@/data/registry.generated";
import { capData, getLandingData } from "@/lib/landing-a/data.server";
import { getAllDesignSystems, getRelatedReferences } from "@/lib/design-systems";
import { toCardInfo } from "@/lib/collections";
import { keycapFace } from "@/lib/references/detail-loader.server";
import { HANGUL_RE, koPageName, nonKoName, siteName } from "@/lib/i18n/display-name";

/**
 * Round 10 (owner, 2026-10-16): Hangul display names (토스, 배달의민족 …, the registry
 * `displayName` from catalog.display_name_kr) show on Korean pages only. `/`, `/ja`, `/zh-tw`
 * and every English page name brands in English; a kana/hanzi native name is still allowed.
 */
const HANGUL_IDS = REGISTRY.filter((r) => HANGUL_RE.test(r.displayName)).map((r) => r.id);

describe("Korean display names are scoped to Korean pages", () => {
  it("the registry has Hangul display names to scope (the ko-detail merge)", () => {
    expect(HANGUL_IDS.length).toBeGreaterThan(100);
    expect(REGISTRY_BY_ID.toss.displayName).toBe("토스");
  });

  it("non-Korean names never contain Hangul; Korean names keep it", () => {
    for (const id of HANGUL_IDS) {
      const r = REGISTRY_BY_ID[id];
      expect(HANGUL_RE.test(nonKoName(r)), `${id}: ${nonKoName(r)}`).toBe(false);
      expect(nonKoName(r).length, id).toBeGreaterThan(0);
      expect(koPageName(r), id).toBe(r.displayName);
    }
    expect(siteName(REGISTRY_BY_ID.toss, "en")).toBe("Toss");
    expect(siteName(REGISTRY_BY_ID.baemin, "ja")).toBe("Baemin");
    expect(siteName(REGISTRY_BY_ID.toss, "ko")).toBe("토스");
    // a Hangul gloss in parentheses is dropped, the Latin name kept
    expect(nonKoName(REGISTRY_BY_ID.ably)).toBe("Ably");
    // kana / hanzi native names are not Hangul and stay where the registry records them
    expect(siteName(REGISTRY_BY_ID.thsr, "en")).toBe(REGISTRY_BY_ID.thsr.displayName);
  });

  it("landing keycaps and journey picks: English on /, /ja, /zh-tw; Hangul on /ko", () => {
    for (const locale of ["en", "ja", "zh-tw"] as const) {
      const d = getLandingData(locale);
      for (const c of d.hero) expect(HANGUL_RE.test(c.n), `${locale} cap ${c.id}: ${c.n}`).toBe(false);
      for (const g of d.gen) expect(HANGUL_RE.test(g.name), `${locale} pick ${g.id}: ${g.name}`).toBe(false);
    }
    const ko = getLandingData("ko");
    expect(ko.hero.find((c) => c.id === "toss")?.n).toBe("토스");
    expect(ko.gen.find((g) => g.id === "toss")?.name).toBe("토스");
    expect(getLandingData("en").hero.find((c) => c.id === "toss")?.n).toBe("Toss");
  });

  it("English archive, cards, related lists and item keycaps carry no Hangul name", () => {
    // an official system's own published name ("여기어때 Design Library") is its name, not a display name
    for (const ds of getAllDesignSystems().filter((d) => !REGISTRY_BY_ID[d.refId].ds)) expect(HANGUL_RE.test(ds.name), `${ds.refId}: ${ds.name}`).toBe(false);
    for (const id of HANGUL_IDS) {
      if (!REGISTRY_BY_ID[id].ds) expect(HANGUL_RE.test(toCardInfo(REGISTRY_BY_ID[id]).name), id).toBe(false);
      expect(HANGUL_RE.test(capData(id)?.n ?? ""), id).toBe(false);
      const face = keycapFace(id);
      if (face) expect(HANGUL_RE.test(face.g), `${id} glyph ${face.g}`).toBe(false);
    }
    for (const r of getRelatedReferences("toss", 24)) expect(HANGUL_RE.test(r.name), r.id).toBe(false);
    // the Korean page asks for Hangul and gets it
    expect(getRelatedReferences("toss", 24, "ko").some((r) => HANGUL_RE.test(r.name))).toBe(true);
    expect(capData("toss", "ko")?.n).toBe("토스");
  });
});
