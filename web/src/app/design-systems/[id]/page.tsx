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
import { getRelatedReferences } from "@/lib/design-systems";
import { REGISTRY, REGISTRY_BY_ID } from "@/data/registry.generated";
import { loadReference } from "@/lib/references/repository.server";
import {
  extractLegacyReferenceDetail,
  projectAstReferenceDetail,
} from "@/lib/references/detail-projection";
import { getReferenceEnglishEditorial } from "@/lib/references/editorial";

const SITE_URL = "https://oh-my-design.kr";

/** Display name for a reference id — registry first, then a title-cased id. */
function refName(id: string): string {
  return (
    REGISTRY_BY_ID[id]?.displayName ||
    REGISTRY_BY_ID[id]?.name ||
    id.replace(".app", "").replace(/^./, (c) => c.toUpperCase())
  );
}

/**
 * Answer-first extract — the 2-3 sentence summary Claude/Brave lift and cite.
 * Built from the parsed tokens so it always mirrors what the page renders.
 * Reused verbatim as the JSON-LD `description` (structured data === visible text).
 */
function buildSummary(
  name: string,
  detail: ReturnType<typeof loadDetail>,
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

function loadDetail(id: string) {
  const loaded = loadReference(id);
  if (!loaded) return null;
  const legacy = extractLegacyReferenceDetail(id, loaded.markdown);
  const projection = projectAstReferenceDetail(loaded.ast, legacy);
  return {
    ...projection.detail,
    referenceAst: projection.contract,
    entry: loaded.entry,
  };
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
  // #6 query-shaped title (matches "<brand> design system / colors / typography
  // / tokens" searches) + answer-first summary as the description (extractable,
  // and identical to the visible band + JSON-LD description).
  const title = `${name} Design System — Colors, Typography & Tokens`;
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
      languages: { en: path, "x-default": path },
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
      ...(detail.referenceAst.quality.tokensExtractedAt || detail.referenceAst.quality.verifiedAt
        ? {
            dateModified:
              detail.referenceAst.quality.tokensExtractedAt
              ?? detail.referenceAst.quality.verifiedAt
              ?? undefined,
          }
        : {}),
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "referenceQualityStatus",
          value: detail.referenceAst.quality.status,
        },
      ],
      ...(detail.referenceAst.evidence?.sources.length
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
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DetailView
        detail={detail}
        tokens={tokens}
        summary={summary}
        evidenceBoundary={editorial?.evidenceBoundary}
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
  return (
    <section className="border-t border-border/40 bg-muted/20 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          Related design systems
        </h2>
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {related.map((r) => (
            <Link
              key={r.id}
              href={`/design-systems/${r.id}`}
              className="group flex items-center gap-2.5 rounded-xl border border-border/60 bg-card/50 p-3 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold ring-1 ring-border/50"
                style={{ background: r.primaryColor + "1a", color: r.primaryColor }}
              >
                {r.name.charAt(0).toUpperCase()}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold leading-tight">
                  {r.name}
                </span>
                <span className="block truncate text-[11px] text-muted-foreground">
                  {r.category.replace(/-/g, " ")}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
