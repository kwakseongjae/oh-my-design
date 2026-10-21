/**
 * Design-system detail route — /design-systems/<id>.
 *
 * Server component. Reads the canonical Reference AST repository and hands
 * its legacy-compatible projection to <DetailView>, a client component that
 * presents the DESIGN.md markdown alongside a live <ReferencePreview>.
 *
 * Why RSC here: the data is static-at-request-time (markdown file on
 * disk, parsed with regex), so disk-read + SSG cover every reference at
 * build time via generateStaticParams. Zero client JS for the loader.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { DetailView } from "./detail-view";
import { evidencedPreviewTokens } from "./preview-tokens.server";
import { firstSentence, logoFor } from "../archive-rows.server";
import { extractTokens } from "@/lib/extract-tokens";
import { getDesignSystem, getRelatedReferences } from "@/lib/design-systems";
import { REGISTRY, REGISTRY_BY_ID } from "@/data/registry.generated";
import { getReferenceEnglishEditorial } from "@/lib/references/editorial";
import { loadDetail, type LoadedDetail } from "@/lib/references/detail-loader.server";
import { hasKoDetailId } from "@/lib/i18n/ko-detail.server";
import { koDetailPath } from "@/lib/i18n/ko-detail";
import { ARCHIVE_COPY } from "@/components/brand-a/copy/r11-archive";
import { ITEM_EN } from "@/components/brand-a/copy/item";

const SITE_URL = "https://oh-my-design.kr";

/**
 * Display name for a reference id on this English page — the registry `name`
 * first, then `displayName`, then a title-cased id.
 *
 * `name` leads because 170 references carry a native-script `displayName`
 * ("토스뱅크", "삼쩜삼") that read as mixed script inside an English title and
 * H1. The title, H1, breadcrumb and JSON-LD all read this one function so they
 * cannot name the brand differently.
 */
function refName(id: string): string {
  return (
    REGISTRY_BY_ID[id]?.name ||
    REGISTRY_BY_ID[id]?.displayName ||
    id.replace(".app", "").replace(/^./, (c) => c.toUpperCase())
  );
}

/**
 * "{Name} DESIGN.md — Colors, Typography, Components" (owner decision 3,
 * 2026-10-20: the title and the h1 both say "{Name} DESIGN.md"; URLs unchanged).
 * The suffix steps down so the title stays within 60 characters where it can.
 */
function detailTitle(name: string): string {
  const head = `${name} DESIGN.md`;
  for (const tail of [" — Colors, Typography, Components", " — Colors & Typography"]) {
    if ((head + tail).length <= 60) return head + tail;
  }
  return head;
}

/**
 * Answer-first extract — the 2-3 sentence summary Claude/Brave lift and cite.
 * Built from the parsed tokens so it always mirrors what the page renders.
 * Reused verbatim as the JSON-LD `description` (structured data === visible text).
 */
function buildSummary(
  name: string,
  detail: LoadedDetail | null,
): string {
  if (!detail) return "";
  const editorial = getReferenceEnglishEditorial(detail.id);
  if (editorial) return editorial.canonicalSummary;
  const facts = [
    detail.primary ? `${detail.primary} as a documented primary color` : null,
    detail.fontFamily ? `${detail.fontFamily} for typography${detail.mono ? ` and ${detail.mono} for code` : ""}` : null,
    detail.radius ? `${detail.radius} corner radius` : null,
  ].filter(Boolean);
  const factsSentence = facts.length > 0
    ? `${name}'s reference documents ${facts.join(", ")}.`
    : "";
  const moodSentence = firstSentence(detail.mood).slice(0, 220).trim();
  return [factsSentence, moodSentence].filter(Boolean).join(" ");
}

export async function generateStaticParams() {
  return REGISTRY.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const detail = loadDetail(id);
  if (!detail) return { title: "Reference not found" };
  const name = refName(id);
  const path = `/design-systems/${id}`;
  const editorial = getReferenceEnglishEditorial(id);
  // "{Name} DESIGN.md" + a short suffix; no site suffix, as before — the brand
  // and the file name are the part a result needs to show. The answer-first
  // summary is the description (extractable, and identical to the visible lead
  // and the JSON-LD description).
  const title = detailTitle(name);
  const desc =
    buildSummary(name, detail) ||
    `${name} DESIGN.md — colors, typography and components for your coding agent.`;
  return {
    title,
    description: desc,
    // canonical = HTML page; expose the raw-markdown twin as an alternate so
    // agents/crawlers can discover /<id>/design.md (handler: /r/[id]).
    alternates: {
      canonical: path,
      // The Korean twin is named only where it exists (lib/i18n/ko-detail.ts);
      // the Korean page names this one back, with x-default here.
      languages: hasKoDetailId(id)
        ? { en: path, ko: koDetailPath(id), "x-default": path }
        : { en: path, "x-default": path },
      types: { "text/markdown": `/${id}/design.md` },
    },
    ...(editorial ? { keywords: [...editorial.keywords] } : {}),
    openGraph: {
      title,
      description: desc,
      url: path,
      type: "article",
      locale: "en_US",
      images: [`/og/reference?id=${id}`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [`/og/reference?id=${id}`],
    },
  };
}

export default async function DesignSystemDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const detail = loadDetail(id);
  if (!detail) notFound();
  const tokens = evidencedPreviewTokens(detail, extractTokens(detail));
  const related = getRelatedReferences(id, 6);

  const name = refName(id);
  const summary = buildSummary(name, detail);
  const pageUrl = `${SITE_URL}/design-systems/${id}`;

  // Structured data mirrors what the page shows: Article (the summary is its
  // description; dateModified feeds freshness) and BreadcrumbList. The FAQPage
  // left with the evidence panel (round 11, #24) — its three answers are no
  // longer shown as answers on the page, and FAQ markup must mirror visible Q&A.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      inLanguage: "en",
      headline: ITEM_EN.h1(name),
      description: summary,
      mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
      about: { "@type": "Brand", name },
      ...(detail.referenceQuality.tokensExtractedAt || detail.referenceQuality.verifiedAt
        ? {
            dateModified:
              detail.referenceQuality.tokensExtractedAt
              ?? detail.referenceQuality.verifiedAt
              ?? undefined,
          }
        : {}),
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "referenceQualityStatus",
          value: detail.referenceQuality.status,
        },
      ],
      ...(detail.referenceAst?.evidence?.sources.length
        ? { citation: detail.referenceAst.evidence.sources.map((source) => source.url) }
        : {}),
      author: { "@type": "Organization", name: "oh-my-design", url: SITE_URL },
      publisher: { "@type": "Organization", name: "oh-my-design", url: SITE_URL },
      isPartOf: {
        "@type": "Collection",
        name: `oh-my-design ${ARCHIVE_COPY.en.h1}`,
        url: `${SITE_URL}/design-systems`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: ITEM_EN.crumb, item: `${SITE_URL}/design-systems` },
        { "@type": "ListItem", position: 3, name: ITEM_EN.h1(name), item: pageUrl },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DetailView
        name={name}
        detail={{ id: detail.id, designMd: detail.designMd }}
        tokens={tokens}
        summary={summary}
        official={getDesignSystem(detail.id)?.url ?? null}
        logo={logoFor(detail.id)}
      />
      <RelatedReferences related={related} />
    </>
  );
}

/**
 * Server-rendered "Related design systems" block — real <Link>s so crawlers
 * follow detail→detail and readers hop deeper into the wedge. Colored-initial
 * tiles (no external logo fetch) keep it robust in the static HTML.
 */
function RelatedReferences({
  related,
}: {
  related: ReturnType<typeof getRelatedReferences>;
}) {
  if (related.length === 0) return null;
  // Concept A (rebrand round 2): manuscript cells; the swatch is the
  // reference's documented primary, nothing else is coloured.
  return (
    <section className="sq-root sq-rel" aria-labelledby="related-heading">
      <div className="sq-wrap">
        <h2 id="related-heading">Related design systems</h2>
        <ul>
          {related.map((r) => (
            <li key={r.id}>
              <Link href={`/design-systems/${r.id}`}>
                <span className="sq-rel-sw" style={{ background: r.primaryColor }} aria-hidden="true" />
                <span className="sq-rel-t">
                  <b>{r.name}</b>
                  <span>{r.category.replace(/-/g, " ")}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
