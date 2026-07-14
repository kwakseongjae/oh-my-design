import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Download, ShieldCheck } from "lucide-react";
import { ENGLISH_REFERENCE_IDS, getReferenceEnglishEditorial } from "@/lib/references/editorial";
import { loadReference } from "@/lib/references/repository.server";
import { ReferenceShareButton } from "@/components/reference-share-button";
import { canonicalBuilderPreviewPath } from "@/lib/builder/preview-path";

const SITE_URL = "https://oh-my-design.kr";

export function generateStaticParams() {
  return ENGLISH_REFERENCE_IDS.map((id) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const editorial = getReferenceEnglishEditorial(id);
  if (!editorial) return { title: "Reference evolution not found" };
  const path = `/design-systems/${id}/evolution`;
  const title = `${editorial.name} DESIGN.md — Before vs Verified v2`;
  const description = `${editorial.name} reference corrections backed by canonical evidence, with previous snapshot and Verified v2 claims shown side by side.`;
  return {
    title,
    description,
    alternates: { canonical: path, languages: { en: path, "x-default": path } },
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
      locale: "en_US",
      images: [`/api/og/reference?id=${id}&artifact=evolution`],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/api/og/reference?id=${id}&artifact=evolution`],
    },
  };
}

export default async function ReferenceEvolutionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const editorial = getReferenceEnglishEditorial(id);
  const loaded = loadReference(id);
  if (!editorial || !loaded || loaded.quality.status !== "verified_v2") notFound();

  const checked = loaded.ast.evidence?.checkedAt ?? loaded.quality.verifiedAt;
  const builderPath = canonicalBuilderPreviewPath(id);
  const pageUrl = `${SITE_URL}/design-systems/${id}/evolution`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${editorial.name} DESIGN.md — Before vs Verified v2`,
    description: editorial.canonicalSummary,
    inLanguage: "en",
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    dateModified: checked ?? undefined,
    citation: loaded.ast.evidence?.sources.map((source) => source.url) ?? [],
    author: { "@type": "Organization", name: "oh-my-design", url: SITE_URL },
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href={`/design-systems/${id}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-3.5 w-3.5" /> {editorial.name} reference
          </Link>
          <div className="flex items-center gap-2">
            <ReferenceShareButton reference={id} location="evolution" />
            <a
              href={`/api/reference-evolution/${id}`}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/50 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Download className="h-3.5 w-3.5" /> Download .md
            </a>
          </div>
        </div>

        <header className="mt-10 max-w-4xl">
          <div className="mb-3 flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-primary">
            <ShieldCheck className="h-4 w-4" /> Verified reference evolution
          </div>
          <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">{editorial.name}: previous snapshot → Verified v2</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">{editorial.canonicalSummary}</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground">
            <span className="font-medium">Evidence boundary:</span> {editorial.evidenceBoundary}
          </p>
        </header>

        <dl className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {[
            ["Checked", checked ?? "Absent"],
            ["Claims", `${loaded.quality.evidenceClaimCount}/${loaded.quality.claimCount}`],
            ["Sources", String(loaded.quality.sourceCount)],
            ["Surfaces", String(loaded.quality.surfaceCount)],
            ["Conflicts", String(loaded.quality.conflictCount)],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
              <dt className="text-xs text-muted-foreground">{label}</dt>
              <dd className="mt-1 font-mono text-sm font-medium text-foreground">{value}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-12" aria-labelledby="recorded-changes">
          <div className="mb-5">
            <h2 id="recorded-changes" className="text-2xl font-medium tracking-tight">Recorded changes</h2>
            <p className="mt-1 text-sm text-muted-foreground">Only repository-recorded changes are shown. Unknown history remains absent.</p>
          </div>
          <div className="space-y-4">
            {editorial.evolution.map((change) => (
              <article key={change.claim} className="rounded-xl bg-card p-4 ring-1 ring-foreground/10 sm:p-5">
                <div className="font-mono text-xs font-medium text-primary">{change.claim}</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <div className="rounded-lg bg-muted/50 p-3">
                    <div className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">Previous snapshot</div>
                    <div className="mt-1.5 font-mono text-sm text-foreground">{change.before}</div>
                  </div>
                  <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" />
                  <div className="rounded-lg bg-primary/10 p-3 ring-1 ring-primary/20">
                    <div className="text-[11px] font-medium uppercase tracking-wide text-primary">Verified v2</div>
                    <div className="mt-1.5 font-mono text-sm text-foreground">{change.after}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{change.reason}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 flex flex-col gap-4 rounded-xl bg-muted/30 p-5 ring-1 ring-foreground/10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-medium">Use the current verified reference</h2>
            <p className="mt-1 text-sm text-muted-foreground">Open the builder with {editorial.name} selected, then preview or export the canonical DESIGN.md.</p>
          </div>
          <Link href={builderPath} className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
            Open in builder <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </main>
  );
}
