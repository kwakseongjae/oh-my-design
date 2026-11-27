/**
 * The non-English item pages — /ko/design-systems/<id>, /ja/design-systems/<id>
 * (growth plan P2, IA-PLAN Phase 3; Japanese 2026-11-27).
 *
 * Each sits under its language's root layout, so the document's <html lang> is that
 * language. It renders the same DetailView as /design-systems/<id> with that
 * language's chrome: the DESIGN.md body is the canonical English file, byte for byte
 * (shared loader), and the summary (the meta / OG / JSON-LD description; not
 * printed on the page since round 13) is a sentence over values the page shows
 * (lib/i18n/detail-summary.ts), never a translation of the English body or editorial.
 *
 * Scope: lib/i18n/detail-locales.ts. Anything else 404s (each page.tsx sets
 * dynamicParams = false) and its English page declares no twin in that language.
 * The page files stay thin: each states its segment config and calls these.
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
// Chrome before the item view, so the item's CSS wins ties (see the editions' layout.tsx).
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { DetailView } from "./detail-view";
import { buildPreviewModel } from "./preview-tokens.server";
import { logoFor } from "../archive-rows.server";
import { RelatedReferences } from "../related-references";
import { ITEM_CHROME } from "@/components/brand-a/copy/item";
import { ARCHIVE_COPY } from "@/components/brand-a/copy/r11-archive";
import { getDesignSystem, getRelatedReferences, type RelatedRef } from "@/lib/design-systems";
import { loadDetail } from "@/lib/references/detail-loader.server";
import { catalogPathFor, detailPath, type DetailLocale } from "@/lib/i18n/detail-locales";
import { DETAIL_IDS, detailAlternates, detailLocaleHrefs, detailName, hasDetailId } from "@/lib/i18n/detail-locales.server";
import { detailDescription, detailNotFoundTitle, detailSummary, detailTitle } from "@/lib/i18n/detail-summary";
import { SITE_LOCALE_META } from "@/lib/i18n/site-locales";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { screensOf } from "@/lib/screens/source.server";

const SITE_URL = "https://oh-my-design.kr";

interface Edition {
  /** The breadcrumb's first item. */
  home: string;
  /** Related references: only ones with a page in this edition, so its pages link among themselves. */
  related: (id: string) => RelatedRef[];
}

const EDITION: Readonly<Record<DetailLocale, Edition>> = {
  ko: {
    home: "홈",
    related: (id) => getRelatedReferences(id, 24, "ko").filter((r) => hasDetailId("ko", r.id)).slice(0, 6),
  },
  // Ranked within the Japanese set: 76 pages, so a top-24 window of the whole registry
  // would often leave few or none.
  ja: {
    home: "ホーム",
    related: (id) => getRelatedReferences(id, 6, "ja", (rid) => hasDetailId("ja", rid)),
  },
};

export function editionStaticParams(locale: DetailLocale): { id: string }[] {
  return DETAIL_IDS[locale].map((id) => ({ id }));
}

function load(locale: DetailLocale, id: string) {
  if (!hasDetailId(locale, id)) return null;
  const detail = loadDetail(id);
  if (!detail) return null;
  const name = detailName(locale, id);
  const summary = detailSummary(locale, name, {
    primary: detail.primary,
    fontFamily: detail.fontFamily,
    mono: detail.mono,
    radius: detail.radius,
  });
  return { detail, name, summary };
}

export function editionMetadata(locale: DetailLocale, id: string): Metadata {
  const page = load(locale, id);
  if (!page) return { title: detailNotFoundTitle(locale) };
  const { name, summary } = page;
  const path = detailPath(locale, id);
  const title = detailTitle(locale, name);
  const description = detailDescription(locale, name, summary);
  // The reference card is language-neutral (name, colour, tokens); `lang` picks only the name.
  const card = `/og/reference?id=${id}&lang=${locale}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
      // this edition first, then the shared set (the Korean page's order since 2026-10-14)
      languages: { [locale]: path, ...detailAlternates(id) },
      types: { "text/markdown": `/${id}/design.md` },
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
      locale: SITE_LOCALE_META[locale].ogLocale,
      images: [card],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [card],
    },
  };
}

export async function editionPage(locale: DetailLocale, id: string) {
  const page = load(locale, id);
  if (!page) notFound();
  const { detail, name, summary } = page;
  const t = ITEM_CHROME[locale];
  const preview = buildPreviewModel(detail);
  const pageUrl = `${SITE_URL}${detailPath(locale, id)}`;
  const catalogUrl = `${SITE_URL}${catalogPathFor(locale)}`;
  const enName = REGISTRY_BY_ID[id]?.name;
  const related = EDITION[locale].related(id);

  // Article + BreadcrumbList, as on the English page. The FAQPage went with the
  // evidence panel (round 11, #24): its answers are no longer shown as answers.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      inLanguage: locale,
      headline: t.h1(name),
      description: summary,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      about: { "@type": "Brand", name, ...(enName && enName !== name ? { alternateName: enName } : {}) },
      ...(detail.referenceQuality.tokensExtractedAt || detail.referenceQuality.verifiedAt
        ? { dateModified: detail.referenceQuality.tokensExtractedAt ?? detail.referenceQuality.verifiedAt ?? undefined }
        : {}),
      ...(detail.referenceAst?.evidence?.sources.length
        ? { citation: detail.referenceAst.evidence.sources.map((source) => source.url) }
        : {}),
      author: { "@type": "Organization", name: "oh-my-design", url: SITE_URL },
      publisher: { "@type": "Organization", name: "oh-my-design", url: SITE_URL },
      isPartOf: { "@type": "Collection", name: `oh-my-design ${ARCHIVE_COPY[locale].h1}`, url: catalogUrl },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: EDITION[locale].home, item: `${SITE_URL}${SITE_LOCALE_META[locale].path}` },
        { "@type": "ListItem", position: 2, name: t.crumb, item: catalogUrl },
        { "@type": "ListItem", position: 3, name: t.h1(name), item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <SiteHeaderA locale={locale} current={locale} localeHrefs={detailLocaleHrefs(id)} />
      <div id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <DetailView
          locale={locale}
          sharePath={detailPath(locale, id)}
          name={name}
          detail={{ id: detail.id, designMd: detail.designMd }}
          preview={preview}
          official={getDesignSystem(detail.id)?.url ?? null}
          logo={logoFor(detail.id)}
          screens={screensOf(detail.id)}
        />
        <RelatedReferences
          locale={locale}
          heading={t.related}
          items={related.map((r) => ({ id: r.id, name: detailName(locale, r.id), href: detailPath(locale, r.id) }))}
        />
      </div>
      <SiteFooterA locale={locale} current={locale} />
    </>
  );
}
