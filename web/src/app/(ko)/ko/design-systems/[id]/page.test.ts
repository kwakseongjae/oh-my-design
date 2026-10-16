import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import Page, { generateMetadata, generateStaticParams } from "./page";
import { generateMetadata as generateEnMetadata } from "@/app/(en)/design-systems/[id]/page";
import { REGISTRY, REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { KO_DETAIL_IDS, koName } from "@/lib/i18n/ko-detail.server";
import { detailHrefFor, hasKoDetailShort } from "@/lib/i18n/ko-detail";
import { loadDetail } from "@/lib/references/detail-loader.server";
import { koSummary } from "./ko-summary";

const HANGUL = /[가-힣]/;
const params = (id: string) => ({ params: Promise.resolve({ id }) });

async function render(id: string): Promise<string> {
  return renderToStaticMarkup(await Page(params(id)));
}

describe("Korean item page scope", () => {
  it("covers every Korean reference plus every verified one, and nothing else", async () => {
    const expected = REGISTRY.filter(
      (r) => r.country === "KR" || REFERENCE_QUALITY_BY_ID[r.id]?.status === "verified_v2",
    ).map((r) => r.id);
    expect([...KO_DETAIL_IDS]).toEqual(expected);
    expect((await generateStaticParams()).map((p) => p.id)).toEqual(expected);
    expect(KO_DETAIL_IDS).toContain("stripe");
    expect(KO_DETAIL_IDS).toContain("baemin");
  });

  it("links from /ko to the Korean page only where one exists", () => {
    expect(detailHrefFor("ko", "toss", true)).toBe("/ko/design-systems/toss");
    expect(detailHrefFor("ko", "x", hasKoDetailShort("US", "l"))).toBe("/design-systems/x");
    expect(detailHrefFor("en", "toss", true)).toBe("/design-systems/toss");
  });
});

describe("Korean item page metadata", () => {
  it("titles toss with its Korean displayName, taken from the H1 of its own DESIGN.md", async () => {
    const m = await generateMetadata(params("toss"));
    expect(REGISTRY_BY_ID.toss.displayName).toBe("토스");
    expect(m.title).toBe("토스 디자인 시스템 — DESIGN.md, 색상·타이포그래피");
  });

  it("titles with the registry name when the registry has no Korean displayName", async () => {
    // banksalad: no Hangul brand name anywhere in its DESIGN.md, so none is recorded.
    expect(REGISTRY_BY_ID.banksalad.displayName).toBe(REGISTRY_BY_ID.banksalad.name);
    const m = await generateMetadata(params("banksalad"));
    expect(m.title).toBe(`${REGISTRY_BY_ID.banksalad.name} 디자인 시스템 — DESIGN.md, 색상·타이포그래피`);
  });

  it("titles with the Korean displayName when the registry has one", async () => {
    // tossbank: name "Toss Bank", displayName "토스뱅크".
    const m = await generateMetadata(params("tossbank"));
    expect(m.title).toBe("토스뱅크 디자인 시스템 — DESIGN.md, 색상·타이포그래피");
  });

  it("is canonical to itself and pairs with the English page (x-default → English) on both sides", async () => {
    for (const id of ["toss", "kakaobank", "baemin", "stripe"]) {
      const ko = await generateMetadata(params(id));
      expect(ko.alternates?.canonical).toBe(`/ko/design-systems/${id}`);
      expect(ko.alternates?.languages).toEqual({
        ko: `/ko/design-systems/${id}`,
        en: `/design-systems/${id}`,
        "x-default": `/design-systems/${id}`,
      });
      const en = await generateEnMetadata(params(id));
      expect(en.alternates?.languages).toMatchObject({ ko: `/ko/design-systems/${id}` });
      expect(ko.openGraph && "locale" in ko.openGraph ? ko.openGraph.locale : null).toBe("ko_KR");
      expect(String(ko.description)).toMatch(HANGUL);
    }
  });
});

describe("Korean display names", () => {
  it("never invents a Korean name: Hangul appears only where the registry displayName has it", () => {
    for (const r of REGISTRY) {
      const n = koName(r.id);
      if (HANGUL.test(n)) expect(n).toBe(r.displayName);
      else expect(n).toBe(r.name || r.displayName);
    }
  });
});

describe("Korean summary", () => {
  it("is built only from recorded values and omits a missing one", () => {
    const s = koSummary("A", { primary: "#000000", radius: "", fontFamily: "Inter", claimCount: 10, evidenceClaimCount: 9 });
    expect(s).toBe("A DESIGN.md에는 대표 색상(#000000), 글꼴(Inter)이 기록돼 있어요. 값 10개 중 9개에 출처가 붙어 있어요.");
    expect(koSummary("A", { claimCount: 0, evidenceClaimCount: 0 })).toBe("");
    expect(koSummary("A", { radius: "6px", claimCount: 5, evidenceClaimCount: 5 })).toBe(
      "A DESIGN.md에는 모서리 반경(6px)이 기록돼 있어요. 값 5개 모두에 출처가 붙어 있어요.",
    );
  });
});

describe("Korean item page body", () => {
  it("copies the canonical DESIGN.md byte for byte", () => {
    for (const id of ["toss", "kakaobank", "baemin", "stripe"]) {
      const file = readFileSync(join(process.cwd(), "references", id, "DESIGN.md"), "utf8");
      expect(loadDetail(id)?.designMd).toBe(file);
    }
  });

  it("server-renders exactly one h1, '{표시명} 디자인 시스템', with Korean chrome and parseable JSON-LD", async () => {
    for (const [id, name] of [["toss", "토스"], ["tossbank", "토스뱅크"], ["stripe", "Stripe"]] as const) {
      const html = await render(id);
      const h1s = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g) ?? [];
      expect(h1s).toHaveLength(1);
      expect(h1s[0]!.replace(/<[^>]+>/g, "")).toBe(`${name} 디자인 시스템`);
      expect(html).toContain('id="use"');
      expect(html).toContain("DESIGN.md 복사");
      expect(html).toContain("스킬 설치");
      const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      expect(blocks.length).toBeGreaterThan(0);
      const ld = blocks.flatMap((b) => JSON.parse(b[1]));
      const crumb = ld.find((x: { "@type": string }) => x["@type"] === "BreadcrumbList");
      expect(crumb.itemListElement.map((i: { name: string }) => i.name)).toEqual(["홈", "디자인 시스템", name]);
      expect(crumb.itemListElement[2].item).toBe(`https://oh-my-design.kr/ko/design-systems/${id}`);
    }
  });

  it("keeps related links among Korean pages", async () => {
    const html = await render("toss");
    const related = (html.split('id="related-heading"')[1] ?? "").split("</section>")[0];
    const hrefs = [...related.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    expect(hrefs.length).toBeGreaterThan(0);
    for (const h of hrefs) expect(h.startsWith("/ko/design-systems/")).toBe(true);
  });
});
