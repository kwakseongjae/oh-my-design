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
    expect(m.title).toBe("토스 DESIGN.md — 색상·타이포그래피·컴포넌트");
  });

  it("titles with the registry name when the registry has no Korean displayName", async () => {
    // banksalad: no Hangul brand name anywhere in its DESIGN.md, so none is recorded.
    expect(REGISTRY_BY_ID.banksalad.displayName).toBe(REGISTRY_BY_ID.banksalad.name);
    const m = await generateMetadata(params("banksalad"));
    expect(m.title).toBe(`${REGISTRY_BY_ID.banksalad.name} DESIGN.md — 색상·타이포그래피·컴포넌트`);
  });

  it("titles with the Korean displayName when the registry has one", async () => {
    // tossbank: name "Toss Bank", displayName "토스뱅크".
    const m = await generateMetadata(params("tossbank"));
    expect(m.title).toBe("토스뱅크 DESIGN.md — 색상·타이포그래피·컴포넌트");
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
  it("is built only from recorded values, omits a missing one, and no longer counts sourced values", () => {
    expect(koSummary("A", { primary: "#000000", radius: "", fontFamily: "Inter" })).toBe(
      "A DESIGN.md에는 대표 색상(#000000), 글꼴(Inter)이 기록돼 있어요.",
    );
    expect(koSummary("A", {})).toBe("");
    expect(koSummary("A", { radius: "6px" })).toBe("A DESIGN.md에는 모서리 반경(6px)이 기록돼 있어요.");
  });
});

describe("Korean item page body", () => {
  it("copies the canonical DESIGN.md byte for byte", () => {
    for (const id of ["toss", "kakaobank", "baemin", "stripe"]) {
      const file = readFileSync(join(process.cwd(), "references", id, "DESIGN.md"), "utf8");
      expect(loadDetail(id)?.designMd).toBe(file);
    }
  });

  it("server-renders exactly one h1, '{표시명} DESIGN.md', with Korean chrome and parseable JSON-LD", async () => {
    for (const [id, name] of [["toss", "토스"], ["tossbank", "토스뱅크"], ["stripe", "Stripe"]] as const) {
      const html = await render(id);
      const h1s = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g) ?? [];
      expect(h1s).toHaveLength(1);
      expect(h1s[0]!.replace(/<[^>]+>/g, "")).toBe(`${name} DESIGN.md`);
      expect(html.match(/id="use"/g)).toHaveLength(1);
      expect(html).toContain("DESIGN.md 복사");
      expect(html).toContain("내려받기");
      // Removed in round 11 (#20, #22, #26): the tier badge, the how-to-use section, the sourced-values line, the body note.
      expect(html).not.toContain("검증 v2");
      expect(html).not.toContain("쓰는 법");
      expect(html).not.toContain("출처가 붙어 있어요");
      expect(html).not.toContain("영어 원문 그대로예요");
      const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
      expect(blocks.length).toBeGreaterThan(0);
      const ld = blocks.flatMap((b) => JSON.parse(b[1]));
      // No FAQPage: its answers are no longer shown on the page as answers.
      expect(ld.map((x: { "@type": string }) => x["@type"])).toEqual(["Article", "BreadcrumbList"]);
      const crumb = ld.find((x: { "@type": string }) => x["@type"] === "BreadcrumbList");
      expect(crumb.itemListElement.map((i: { name: string }) => i.name)).toEqual(["홈", "아카이브", `${name} DESIGN.md`]);
      expect(crumb.itemListElement[2].item).toBe(`https://oh-my-design.kr/ko/design-systems/${id}`);
    }
  });

  it("drops the summary line (round 13); the Korean sentence stays only in the JSON-LD and meta description", async () => {
    const html = await render("pixiv");
    expect(html).not.toContain('class="sq-item-sum"');
    const body = html.replace(/<script[\s\S]*?<\/script>/g, "");
    expect(body).not.toContain("기록돼 있어요");
    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((b) => JSON.parse(b[1]));
    expect(ld[0].description).toContain("기록돼 있어요");
  });

  it("labels the preview in Korean and keeps the reference's values as written", async () => {
    const html = await render("pixiv");
    for (const heading of ["색상", "브랜드", "면과 글자", "상태", "타이포그래피", "타입 스케일", "여백과 모양", "여백", "모서리 반경", "컴포넌트"]) {
      expect(html, heading).toContain(`>${heading}</`);
    }
    expect(html).toContain("11개 모두 보기");
    expect(html).toContain("#0096fa");
    expect(html).not.toContain("웹 글꼴 출처 기록 없음");
  });

  it("gives a Korean legacy page (prose-derived tokens) no empty 미리보기 pane and no toggle", async () => {
    const legacy = KO_DETAIL_IDS.find((id) => REGISTRY_BY_ID[id]?.tokens?.source === "prose-derived");
    expect(legacy).toBeDefined();
    const html = await render(legacy!);
    expect(html).toContain("sq-item-solo");
    expect(html).not.toContain('class="sq-item-pv');
    expect(html).not.toContain("sq-panes-m");
  });

  it("keeps related links among Korean pages", async () => {
    const html = await render("toss");
    const related = (html.split('id="related-heading"')[1] ?? "").split("</section>")[0];
    const hrefs = [...related.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    expect(hrefs.length).toBeGreaterThan(0);
    for (const h of hrefs) expect(h.startsWith("/ko/design-systems/")).toBe(true);
  });
});
