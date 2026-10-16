/**
 * Korean item page — /ko/design-systems/<id> (growth plan P2, IA-PLAN Phase 3).
 *
 * Under the (ko) root layout, so the document is <html lang="ko">. It renders the
 * same DetailView as /design-systems/<id> with Korean chrome: the DESIGN.md body
 * is the canonical English file, byte for byte (shared loader), and the summary
 * is a Korean sentence over values the page shows (ko-summary.ts), never a
 * translation of the English body or editorial.
 *
 * Scope: every Korean reference plus every verified one (lib/i18n/ko-detail.ts).
 * Anything else 404s here (dynamicParams = false) and its English page declares
 * no Korean twin.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
// Chrome before the item view, so the item's CSS wins ties (see ../layout.tsx).
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { DetailView } from "@/app/(en)/design-systems/[id]/detail-view";
import { ITEM_KO } from "@/components/brand-a/copy/item";
import { extractTokens } from "@/lib/extract-tokens";
import { getDesignSystem, getRelatedReferences } from "@/lib/design-systems";
import { getLogoRef } from "@/lib/logos";
import { getReferenceEnglishEditorial } from "@/lib/references/editorial";
import { keycapFace, loadDetail } from "@/lib/references/detail-loader.server";
import { KO_DETAIL_IDS, hasKoDetailId, koName } from "@/lib/i18n/ko-detail.server";
import { KO_CATALOG_PATH, enDetailPath, koDetailPath } from "@/lib/i18n/ko-detail";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { koDescription, koDetailTitle, koSummary } from "./ko-summary";

const SITE_URL = "https://oh-my-design.kr";

export const dynamicParams = false;

export async function generateStaticParams() {
  return KO_DETAIL_IDS.map((id) => ({ id }));
}

function load(id: string) {
  if (!hasKoDetailId(id)) return null;
  const detail = loadDetail(id);
  if (!detail) return null;
  const name = koName(id);
  const q = detail.referenceQuality;
  const summary = koSummary(name, {
    primary: detail.primary,
    fontFamily: detail.fontFamily,
    mono: detail.mono,
    radius: detail.radius,
    claimCount: q.claimCount,
    evidenceClaimCount: q.evidenceClaimCount,
  });
  return { detail, name, summary };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const page = load(id);
  if (!page) return { title: "레퍼런스를 찾을 수 없어요" };
  const { name, summary } = page;
  const path = koDetailPath(id);
  const en = enDetailPath(id);
  const title = koDetailTitle(name);
  const description = koDescription(name, summary);
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { ko: path, en, "x-default": en },
      types: { "text/markdown": `/${id}/design.md` },
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
      locale: "ko_KR",
      // The reference card is language-neutral (name, colour, tokens); there is no Korean variant.
      images: [`/api/og/reference?id=${id}`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og/reference?id=${id}`],
    },
  };
}

export default async function KoreanDesignSystemPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const page = load(id);
  if (!page) notFound();
  const { detail, name, summary } = page;
  const tokens = extractTokens(detail);
  const editorial = getReferenceEnglishEditorial(id);
  const pageUrl = `${SITE_URL}${koDetailPath(id)}`;
  const enName = REGISTRY_BY_ID[id]?.name;
  // Related references that have a Korean page, so Korean pages link among themselves.
  const related = getRelatedReferences(id, 24).filter((r) => hasKoDetailId(r.id)).slice(0, 6);

  const faq = [
    detail.primary ? { q: `${name}의 대표 UI 색상은 무엇인가요?`, a: detail.primary } : null,
    detail.fontFamily
      ? { q: `${name}의 글꼴은 무엇인가요?`, a: detail.mono ? `UI·본문: ${detail.fontFamily} · 코드: ${detail.mono}` : detail.fontFamily }
      : null,
    detail.radius ? { q: `${name} 디자인 시스템의 모서리 반경은 얼마인가요?`, a: detail.radius } : null,
  ].filter((x): x is { q: string; a: string } => !!x);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      inLanguage: "ko",
      headline: ITEM_KO.h1(name),
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
      isPartOf: { "@type": "Collection", name: "oh-my-design 디자인 시스템 레퍼런스", url: `${SITE_URL}${KO_CATALOG_PATH}` },
    },
    ...(faq.length
      ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "ko",
          mainEntity: faq.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
        }]
      : []),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/ko` },
        { "@type": "ListItem", position: 2, name: "디자인 시스템", item: `${SITE_URL}${KO_CATALOG_PATH}` },
        { "@type": "ListItem", position: 3, name, item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <SiteHeaderA locale="ko" current="ko" localeHrefs={{ en: enDetailPath(id), ko: koDetailPath(id) }} />
      <div id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <DetailView
          locale="ko"
          sharePath={koDetailPath(id)}
          name={name}
          detail={detail}
          tokens={tokens}
          summary={summary}
          evidenceBoundary={editorial?.evidenceBoundary}
          ds={getDesignSystem(detail.id)}
          logo={getLogoRef(detail.id)}
          cap={keycapFace(detail.id)}
        />
        {related.length > 0 ? (
          <section className="sq-root sq-rel" aria-labelledby="related-heading">
            <div className="sq-wrap">
              <h2 id="related-heading">{ITEM_KO.related}</h2>
              <ul>
                {related.map((r) => (
                  <li key={r.id}>
                    <Link href={koDetailPath(r.id)}>
                      <span className="sq-rel-sw" style={{ background: r.primaryColor }} aria-hidden="true" />
                      <span className="sq-rel-t">
                        <b>{koName(r.id)}</b>
                        <span lang="en">{r.category.replace(/-/g, " ")}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}
      </div>
      <SiteFooterA locale="ko" current="ko" />
    </>
  );
}
