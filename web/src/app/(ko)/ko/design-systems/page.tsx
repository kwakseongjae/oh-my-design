/**
 * /ko/design-systems — the Korean DESIGN.md archive. Lists exactly the
 * references that have a Korean item page (lib/i18n/ko-detail.ts): Korean
 * references first, then verified foreign ones. The rest of the catalog is one
 * link away in the English archive. Every count is computed, never typed.
 *
 * Same client view as the English archive (round 11): logo cards, region and
 * domain filters, install counts read server-side with ISR (hourly).
 */

import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY } from "@/data/reference-quality.generated";
import { KO_DETAIL_IDS } from "@/lib/i18n/ko-detail.server";
import { KO_CATALOG_PATH } from "@/lib/i18n/ko-detail";
import { getInstallCounts } from "@/lib/install-counts.server";
import { getViewCounts } from "@/lib/view-counts.server";
import { ARCHIVE_COPY } from "@/components/brand-a/copy/r11-archive";
import { archiveRow, recommendedOrder, type ArchiveRow } from "@/app/(en)/design-systems/archive-rows.server";
import { CatalogView } from "@/app/(en)/design-systems/catalog-view";

export const revalidate = 3600;

const SITE_URL = "https://oh-my-design.kr";
const COPY = ARCHIVE_COPY.ko;

/** Evidence tier is internal (owner, 2026-11-01): it only breaks ties in the base order. */
const VERIFIED_IDS: ReadonlySet<string> = new Set(REFERENCE_QUALITY.filter((e) => e.status === "verified_v2").map((e) => e.id));

function rows(installs: Record<string, number>): ArchiveRow[] {
  const all = KO_DETAIL_IDS.map((id) => REGISTRY_BY_ID[id])
    .filter((r) => !!r)
    .map((r) => archiveRow(r, "ko", installs));
  // Base order under the recommended sort: Korean references first, verified before the rest, then by name.
  return all.sort(
    (a, b) =>
      Number(b.country === "KR") - Number(a.country === "KR") ||
      Number(VERIFIED_IDS.has(b.id)) - Number(VERIFIED_IDS.has(a.id)) ||
      a.name.localeCompare(b.name, "ko"),
  );
}

// The page's set and its counts do not depend on KV, so the head is static.
const STATIC_ROWS = rows({});
const KR = STATIC_ROWS.filter((r) => r.country === "KR").length;
const INTL = STATIC_ROWS.length - KR;
const REST = REFERENCE_COUNT - STATIC_ROWS.length;

const TITLE = COPY.meta.title(STATIC_ROWS.length);
const DESCRIPTION = COPY.meta.description(STATIC_ROWS.length);

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
  const list = recommendedOrder(rows(installs), views);
  const lede = COPY.ledeKo!(KR, INTL, REST);
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
              <p className="sq-arch-lede">
                {lede.before}
                <Link href="/design-systems" prefetch={false} hrefLang="en">
                  {lede.link}
                </Link>
                {lede.after}
              </p>
            </section>
          }
        />
      </div>
      <SiteFooterA locale="ko" current="ko" />
    </>
  );
}
