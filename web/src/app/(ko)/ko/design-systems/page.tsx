/**
 * /ko/design-systems — the Korean DESIGN.md archive. Since 2026-11-02 (owner:
 * "해외 150여개도 저기에 필터를 걸어서 볼 수 있게 해. 왜 차별해.") it lists the whole
 * catalog: a reference with a Korean item page (lib/i18n/ko-detail.ts) links
 * there, the rest link to their English page. Every count is computed, never typed.
 *
 * Same client view as the English archive: logo cards, region and domain filters,
 * install counts and GA4 views read server-side with ISR (hourly).
 */

import type { Metadata } from "next";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import { REGISTRY } from "@/data/registry.generated";
import { REFERENCE_QUALITY } from "@/data/reference-quality.generated";
import { KO_DETAIL_IDS } from "@/lib/i18n/ko-detail.server";
import { KO_CATALOG_PATH } from "@/lib/i18n/ko-detail";
import { getInstallCounts } from "@/lib/install-counts.server";
import { getViewCounts } from "@/lib/view-counts.server";
import { ARCHIVE_COPY } from "@/components/brand-a/copy/r11-archive";
import { archiveRow, defaultOrder, type ArchiveRow } from "@/app/(en)/design-systems/archive-rows.server";
import { CatalogView } from "@/app/(en)/design-systems/catalog-view";

export const revalidate = 3600;

const SITE_URL = "https://oh-my-design.kr";
const COPY = ARCHIVE_COPY.ko;

/** Evidence tier is internal (owner, 2026-11-01): it only breaks ties in the base order. */
const VERIFIED_IDS: ReadonlySet<string> = new Set(REFERENCE_QUALITY.filter((e) => e.status === "verified_v2").map((e) => e.id));

const KO_PAGE: ReadonlySet<string> = new Set(KO_DETAIL_IDS);

function rows(installs: Record<string, number>, views: Record<string, number>): ArchiveRow[] {
  const all = REGISTRY.map((r) => archiveRow(r, "ko", installs, views));
  // Tie-break under the default (installs) order: Korean references, then those with a
  // Korean page, then verified, then by name.
  return all.sort(
    (a, b) =>
      Number(b.country === "KR") - Number(a.country === "KR") ||
      Number(KO_PAGE.has(b.id)) - Number(KO_PAGE.has(a.id)) ||
      Number(VERIFIED_IDS.has(b.id)) - Number(VERIFIED_IDS.has(a.id)) ||
      a.name.localeCompare(b.name, "ko"),
  );
}

const TITLE = COPY.meta.title(REFERENCE_COUNT);
const DESCRIPTION = COPY.meta.description(REFERENCE_COUNT);

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

export default async function KoreanDesignSystemsPage() {
  const [installs, views] = await Promise.all([getInstallCounts(), getViewCounts()]);
  const list = defaultOrder(rows(installs, views));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      inLanguage: "ko",
      name: COPY.h1,
      url: `${SITE_URL}${KO_CATALOG_PATH}`,
      isPartOf: { "@type": "WebSite", name: "oh-my-design", url: SITE_URL },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: list.length,
        itemListElement: list.map((r, i) => ({
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
        { "@type": "ListItem", position: 2, name: COPY.h1, item: `${SITE_URL}${KO_CATALOG_PATH}` },
      ],
    },
  ];

  return (
    <>
      <SiteHeaderA locale="ko" current="ko" localeHrefs={{ en: "/design-systems", ko: KO_CATALOG_PATH }} />
      <div id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <CatalogView
          locale="ko"
          rows={list}
          intro={
            <section className="sq-wrap sq-arch-hero">
              <h1>{COPY.h1}</h1>
              <p className="sq-arch-lede">{COPY.lede(REFERENCE_COUNT)}</p>
            </section>
          }
        />
      </div>
      <SiteFooterA locale="ko" current="ko" />
    </>
  );
}
