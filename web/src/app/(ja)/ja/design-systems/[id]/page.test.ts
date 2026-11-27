import { readFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import Page, { generateMetadata, generateStaticParams } from "./page";
import { generateMetadata as generateEnMetadata } from "@/app/(en)/design-systems/[id]/page";
import { generateMetadata as generateKoMetadata } from "@/app/(ko)/ko/design-systems/[id]/page";
import { REGISTRY, REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { DETAIL_IDS, detailName, hasDetailId } from "@/lib/i18n/detail-locales.server";
import { detailHrefFor, hasDetail, hasDetailShort } from "@/lib/i18n/detail-locales";
import { detailSummary } from "@/lib/i18n/detail-summary";
import { loadDetail } from "@/lib/references/detail-loader.server";
import { showcaseFor } from "@/components/brand-a/catalog-showcase";
import { getHeroChats } from "@/lib/landing-a/chat-data.server";
import { getLandingData } from "@/lib/landing-a/data.server";
import { makeScreensFixture } from "@/lib/screens/test-fixture";

const KANA_KANJI = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u;
const params = (id: string) => ({ params: Promise.resolve({ id }) });

// Hermetic: a local screens folder exported in the shell must not change what these assertions see.
beforeEach(() => vi.stubEnv("OMD_SCREENS_DIR", ""));
afterEach(() => vi.unstubAllEnvs());

async function render(id: string): Promise<string> {
  return renderToStaticMarkup(await Page(params(id)));
}

const JA_PAGE = /\/ja\/design-systems\/([^/?#"]+)/;

describe("Japanese item page scope", () => {
  it("covers exactly the verified Japanese references", async () => {
    const expected = REGISTRY.filter(
      (r) => r.country === "JP" && REFERENCE_QUALITY_BY_ID[r.id]?.status === "verified_v2",
    ).map((r) => r.id);
    expect([...DETAIL_IDS.ja]).toEqual(expected);
    expect((await generateStaticParams()).map((p) => p.id)).toEqual(expected);
    expect(DETAIL_IDS.ja).toContain("mercari");
    expect(DETAIL_IDS.ja).not.toContain("toss");
    expect(DETAIL_IDS.ja).not.toContain("stripe");
  });

  it("links from /ja to the Japanese page only where one exists", () => {
    expect(detailHrefFor("ja", "mercari", hasDetailShort("ja", "JP", "v"))).toBe("/ja/design-systems/mercari");
    expect(detailHrefFor("ja", "x", hasDetailShort("ja", "JP", "p"))).toBe("/design-systems/x");
    expect(detailHrefFor("ja", "toss", hasDetail("ja", "KR", "verified_v2"))).toBe("/design-systems/toss");
    // the Korean predicate is untouched by the Japanese one
    expect(detailHrefFor("ko", "mercari", hasDetail("ko", "JP", "verified_v2"))).toBe("/ko/design-systems/mercari");
    expect(detailHrefFor("en", "mercari", hasDetail("en", "JP", "verified_v2"))).toBe("/design-systems/mercari");
  });

  it("never links the /ja landing to a Japanese page that does not exist", () => {
    const rows = showcaseFor("ja").flatMap((g) => g.items.map((i) => i.href));
    const { chats } = getHeroChats("ja", getLandingData("ja").hero);
    const hrefs = [...rows, ...Object.values(chats).map((c) => c.href)];
    const ja = hrefs.filter((h) => JA_PAGE.test(h));
    expect(ja.length).toBeGreaterThan(0);
    for (const h of ja) expect(hasDetailId("ja", decodeURIComponent(h.match(JA_PAGE)![1])), h).toBe(true);
    // and a verified Japanese reference on the landing is never sent to its English page
    for (const h of hrefs.filter((x) => !JA_PAGE.test(x))) {
      const id = decodeURIComponent(h.split("/").pop()!);
      expect(hasDetailId("ja", id), h).toBe(false);
    }
  });

  it("keeps the other landings' links as they were", () => {
    for (const l of ["en", "zh-tw"] as const) {
      for (const g of showcaseFor(l)) for (const i of g.items) expect(i.href.startsWith("/design-systems/"), i.href).toBe(true);
    }
    for (const g of showcaseFor("ko")) for (const i of g.items) expect(JA_PAGE.test(i.href), i.href).toBe(false);
  });
});

describe("Japanese item page metadata", () => {
  it("titles a kana-named brand with its registry displayName", async () => {
    expect(REGISTRY_BY_ID.mynavi.displayName).toBe("マイナビ");
    const m = await generateMetadata(params("mynavi"));
    expect(m.title).toBe("マイナビのデザインシステム（DESIGN.md）");
  });

  it("titles a Latin-named brand with its registry name", async () => {
    const m = await generateMetadata(params("mercari"));
    expect(m.title).toBe("Mercariのデザインシステム（DESIGN.md）");
  });

  it("names ja + en + ko + x-default on all three editions, reciprocally", async () => {
    for (const id of ["mercari", "mynavi", "pixiv", "tokyo", "tokyo-metropolitan"]) {
      const set = {
        ja: `/ja/design-systems/${id}`,
        en: `/design-systems/${id}`,
        ko: `/ko/design-systems/${id}`,
        "x-default": `/design-systems/${id}`,
      };
      const ja = await generateMetadata(params(id));
      expect(ja.alternates?.canonical).toBe(`/ja/design-systems/${id}`);
      expect(ja.alternates?.languages).toEqual(set);
      expect((await generateEnMetadata(params(id))).alternates?.languages).toEqual(set);
      expect((await generateKoMetadata(params(id))).alternates?.languages).toEqual(set);
      expect(ja.openGraph && "locale" in ja.openGraph ? ja.openGraph.locale : null).toBe("ja_JP");
      expect(String(ja.description)).toMatch(KANA_KANJI);
      const og = JSON.stringify([ja.openGraph, ja.twitter]);
      expect(og, id).toContain(`/og/reference?id=${id}&lang=ja`);
    }
  });

  it("declares no Japanese twin for a reference without a Japanese page", async () => {
    for (const id of ["toss", "stripe"]) {
      expect((await generateEnMetadata(params(id))).alternates?.languages).not.toHaveProperty("ja");
      expect((await generateKoMetadata(params(id))).alternates?.languages).not.toHaveProperty("ja");
    }
  });

  it("404s outside the Japanese set", async () => {
    expect((await generateMetadata(params("toss"))).title).toBe("リファレンスが見つかりません");
    await expect(Page(params("toss"))).rejects.toThrow();
  });
});

describe("Japanese display names", () => {
  it("never invents a Japanese name: kana or kanji only where the registry displayName has them", () => {
    for (const id of DETAIL_IDS.ja) {
      const r = REGISTRY_BY_ID[id];
      const n = detailName("ja", id);
      if (KANA_KANJI.test(n)) expect(n).toBe(r.displayName);
      else expect(n).toBe(r.name || r.displayName);
    }
    // nine of the 76 record a kana or kanji name today
    expect(DETAIL_IDS.ja.filter((id) => KANA_KANJI.test(detailName("ja", id)))).toHaveLength(9);
  });
});

describe("Japanese summary", () => {
  it("is built only from recorded values and omits a missing one", () => {
    expect(detailSummary("ja", "A", { primary: "#000000", radius: "", fontFamily: "Inter" })).toBe(
      "AのDESIGN.mdには、代表色（#000000）、書体（Inter）が記録されています。",
    );
    expect(detailSummary("ja", "A", {})).toBe("");
    expect(detailSummary("ja", "A", { radius: "6px" })).toBe("AのDESIGN.mdには、角丸（6px）が記録されています。");
  });
});

describe("Japanese item page body", () => {
  it("copies the canonical DESIGN.md byte for byte", () => {
    for (const id of ["mercari", "mynavi"]) {
      const file = readFileSync(join(process.cwd(), "references", id, "DESIGN.md"), "utf8");
      expect(loadDetail(id)?.designMd).toBe(file);
    }
  });

  it("server-renders one h1 '{社名} DESIGN.md', Japanese chrome, the English body and parseable JSON-LD", async () => {
    for (const [id, name] of [["mynavi", "マイナビ"], ["mercari", "Mercari"]] as const) {
      const html = await render(id);
      const h1s = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/g) ?? [];
      expect(h1s).toHaveLength(1);
      expect(h1s[0]!.replace(/<[^>]+>/g, "")).toBe(`${name} DESIGN.md`);
      expect(html.match(/id="use"/g)).toHaveLength(1);
      expect(html).toContain("DESIGN.mdをコピー");
      expect(html).toContain("ダウンロード");
      expect(html).toContain('class="sq-md-body" lang="en"');
      // no Japanese archive yet: nothing points at /ja/design-systems itself
      expect(html).not.toMatch(/\/ja\/design-systems["?#]/);
      const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((b) => JSON.parse(b[1]));
      expect(ld.map((x: { "@type": string }) => x["@type"])).toEqual(["Article", "BreadcrumbList"]);
      expect(ld[0].inLanguage).toBe("ja");
      expect(ld[0].isPartOf.url).toBe("https://oh-my-design.kr/design-systems");
      const crumb = ld[1];
      expect(crumb.itemListElement.map((i: { name: string }) => i.name)).toEqual(["ホーム", "アーカイブ", `${name} DESIGN.md`]);
      expect(crumb.itemListElement.map((i: { item: string }) => i.item)).toEqual([
        "https://oh-my-design.kr/ja",
        "https://oh-my-design.kr/design-systems",
        `https://oh-my-design.kr/ja/design-systems/${id}`,
      ]);
      // the summary is the JSON-LD description, not printed on the page
      expect(ld[0].description).toContain("記録されています");
      expect(html.replace(/<script[\s\S]*?<\/script>/g, "")).not.toContain("記録されています");
    }
  });

  it("offers the Japanese, English and Korean pages in the language switch", async () => {
    const html = await render("mercari");
    for (const href of ["/design-systems/mercari", "/ko/design-systems/mercari", "/ja/design-systems/mercari"]) {
      expect(html).toContain(`href="${href}"`);
    }
  });

  it("labels the preview in Japanese and keeps the reference's values as written", async () => {
    const html = await render("pixiv");
    for (const heading of ["色", "ブランド", "タイポグラフィ", "余白と形", "角丸", "コンポーネント"]) {
      expect(html, heading).toContain(`>${heading}</`);
    }
    expect(html).toContain("#0096fa");
  });

  it("links related references only among Japanese pages, named by the same rule", async () => {
    const html = await render("mercari");
    const related = (html.split('id="related-heading"')[1] ?? "").split("</section>")[0];
    const hrefs = [...related.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
    expect(hrefs).toHaveLength(6);
    for (const h of hrefs) expect(hasDetailId("ja", h.replace("/ja/design-systems/", "")), h).toBe(true);
  });

  it("shows no Screens tab, even with a local screens folder", async () => {
    const fx = makeScreensFixture("mercari");
    try {
      vi.stubEnv("OMD_SCREENS_DIR", fx.root);
      vi.stubEnv("NODE_ENV", "development");
      // the same folder gives the Korean page its tab, so the fixture is live
      const { default: KoPage } = await import("@/app/(ko)/ko/design-systems/[id]/page");
      expect(renderToStaticMarkup(await KoPage(params("mercari")))).toContain("sq-tabs-d");
      const html = await render("mercari");
      expect(html).not.toMatch(/sq-tabs-d|role="tablist"/);
    } finally {
      fx.cleanup();
    }
  });
});
