/**
 * /ko/design-systems — the Korean archive index. Lists exactly the references
 * that have a Korean item page (lib/i18n/ko-detail.ts): Korean references first,
 * then verified foreign ones. The rest of the catalog is one link away in the
 * English archive. Every count is computed, never typed.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { getAllDesignSystems } from "@/lib/design-systems";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { SEARCH_ALIASES } from "@/lib/search-aliases";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { keycapFace } from "@/lib/references/detail-loader.server";
import { hasKoDetailId, koName } from "@/lib/i18n/ko-detail.server";
import { KO_CATALOG_PATH, koDetailPath } from "@/lib/i18n/ko-detail";
import { KoIndexView, type KoRow } from "./ko-index-view";

const SITE_URL = "https://oh-my-design.kr";

function rows(): KoRow[] {
  const all = getAllDesignSystems()
    .filter((ds) => hasKoDetailId(ds.refId))
    .map((ds) => {
      const r = REGISTRY_BY_ID[ds.refId];
      const name = koName(ds.refId);
      return {
        id: ds.refId,
        name,
        en: r?.name && r.name !== name ? r.name : null,
        aliases: SEARCH_ALIASES[ds.refId] ?? [],
        kr: r?.country === "KR",
        verified: REFERENCE_QUALITY_BY_ID[ds.refId]?.status === "verified_v2",
        desc: ds.description,
        href: koDetailPath(ds.refId),
        cap: keycapFace(ds.refId, "ko"),
      };
    });
  // Korean references first, verified before the rest, then by name.
  return all.sort((a, b) => Number(b.kr) - Number(a.kr) || Number(b.verified) - Number(a.verified) || a.name.localeCompare(b.name, "ko"));
}

const ROWS = rows();
const KR = ROWS.filter((r) => r.kr).length;
const INTL = ROWS.length - KR;
const REST = REFERENCE_COUNT - ROWS.length;

const TITLE = `디자인 시스템 레퍼런스 — 기업 ${ROWS.length}곳 DESIGN.md`;
const DESCRIPTION = `한국 기업 ${KR}곳과 검증된 해외 기업 ${INTL}곳의 DESIGN.md를 한국어로 둘러보세요. 값마다 출처가 붙어 있고, 코딩 에이전트에 바로 건넬 수 있어요.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: KO_CATALOG_PATH,
    languages: { ko: KO_CATALOG_PATH, en: "/design-systems", "x-default": "/design-systems" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: KO_CATALOG_PATH,
    type: "website",
    locale: "ko_KR",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function KoreanDesignSystemsPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      inLanguage: "ko",
      name: "디자인 시스템 레퍼런스",
      url: `${SITE_URL}${KO_CATALOG_PATH}`,
      isPartOf: { "@type": "WebSite", name: "oh-my-design", url: SITE_URL },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: ROWS.length,
        itemListElement: ROWS.map((r, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: r.name,
          url: `${SITE_URL}${r.href}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/ko` },
        { "@type": "ListItem", position: 2, name: "디자인 시스템", item: `${SITE_URL}${KO_CATALOG_PATH}` },
      ],
    },
  ];

  return (
    <>
      <SiteHeaderA locale="ko" current="ko" localeHrefs={{ en: "/design-systems", ko: KO_CATALOG_PATH }} />
      <div id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <div className="sq-root sq-arch">
          <section className="sq-wrap sq-arch-hero">
            <h1>디자인 시스템 레퍼런스</h1>
            <p className="sq-arch-lede">
              한국 기업 {KR}곳과 검증된 해외 기업 {INTL}곳의 DESIGN.md예요. 나머지 {REST}곳은{" "}
              <Link href="/design-systems" prefetch={false} hrefLang="en">영문 아카이브</Link>에서 볼 수 있어요.
            </p>
          </section>
          <KoIndexView rows={ROWS} />
        </div>
      </div>
      <SiteFooterA locale="ko" current="ko" />
    </>
  );
}
