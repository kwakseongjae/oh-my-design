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
import { extractTokens } from "@/lib/extract-tokens";
import { getDesignSystem, getRelatedReferences } from "@/lib/design-systems";
import { getLogoRef } from "@/lib/logos";
import { REGISTRY, REGISTRY_BY_ID } from "@/data/registry.generated";
import { getReferenceEnglishEditorial } from "@/lib/references/editorial";
import { keycapFace, loadDetail, type LoadedDetail } from "@/lib/references/detail-loader.server";
import { hasKoDetailId } from "@/lib/i18n/ko-detail.server";
import { koDetailPath } from "@/lib/i18n/ko-detail";

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

/** "{Name} Design System — DESIGN.md, Colors & Typography" (IA plan, Phase 1). */
function detailTitle(name: string): string {
  return `${name} Design System — DESIGN.md, Colors & Typography`;
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
  const moodSentence = detail.mood
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s/)[0]
    ?.slice(0, 220)
    .trim();
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
  // Query-shaped title: matches "<brand> design system", "<brand> DESIGN.md"
  // and "<brand> colors / typography" searches. No site suffix, as before —
  // the brand and the file name are the part a result needs to show.
  // The answer-first summary is the description (extractable, and identical to
  // the visible band + JSON-LD description).
  const title = detailTitle(name);
  const desc =
    buildSummary(name, detail) ||
    `${name} design system — DESIGN.md, live preview, and token reference.`;
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
      images: [`/api/og/reference?id=${id}`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [`/api/og/reference?id=${id}`],
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
  const tokens = extractTokens(detail);
  const related = getRelatedReferences(id, 6);

  const name = refName(id);
  const summary = buildSummary(name, detail);
  const editorial = getReferenceEnglishEditorial(id);
  const pageUrl = `${SITE_URL}/design-systems/${id}`;

  // #4 structured data — Article (so the summary is an extractable description
  // + dateModified feeds Claude's page_age freshness signal) plus a FAQPage
  // whose answers are all visibly rendered in the answer-first band below
  // (Google requires FAQ markup to mirror visible content).
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      inLanguage: "en",
      headline: `${name} Design System`,
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
        name: "oh-my-design design systems catalog",
        url: `${SITE_URL}/design-systems`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: `What is ${name}'s primary UI color?`,
          acceptedAnswer: { "@type": "Answer", text: detail.primary },
        },
        {
          "@type": "Question",
          name: `What typeface does ${name} use?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: detail.mono
              ? `${detail.fontFamily} for UI and prose, ${detail.mono} for code.`
              : detail.fontFamily,
          },
        },
        {
          "@type": "Question",
          name: `What corner radius does ${name}'s design system use?`,
          acceptedAnswer: { "@type": "Answer", text: detail.radius },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Design systems", item: `${SITE_URL}/design-systems` },
        { "@type": "ListItem", position: 3, name, item: pageUrl },
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
        detail={detail}
        tokens={tokens}
        summary={summary}
        evidenceBoundary={editorial?.evidenceBoundary}
        ds={getDesignSystem(detail.id)}
        logo={getLogoRef(detail.id)}
        cap={keycapFace(detail.id)}
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
