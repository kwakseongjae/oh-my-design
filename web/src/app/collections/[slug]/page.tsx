/**
 * Collection page — /collections/<slug> (#5).
 *
 * RSC: collection definition + reference selection happen at build time
 * (generateStaticParams over the 8 slugs in lib/collections.ts), so the H1,
 * bilingual intro, ItemList JSON-LD, and related-collection links are all in
 * the static HTML. Client islands: <CollectionGrid> (HOT badges + card
 * analytics) and <InstallCta source="collection"> (install_copy funnel).
 */

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import {
  COLLECTIONS,
  COLLECTIONS_BY_SLUG,
  getCollectionEntries,
  toCardInfo,
} from "@/lib/collections";
import { InstallCta } from "@/components/install-cta";
import { CollectionGrid } from "./collection-grid";

const SITE_URL = "https://oh-my-design.kr";

export function generateStaticParams() {
  // Resolving entries here makes a thin filter (<6 refs) fail the build
  // instead of shipping an embarrassing half-empty collection.
  return COLLECTIONS.map((c) => {
    getCollectionEntries(c.slug);
    return { slug: c.slug };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = COLLECTIONS_BY_SLUG[slug];
  if (!c) return {};
  const count = getCollectionEntries(slug).length;
  const title = `${c.titleEn} — ${count} verified DESIGN.md references · oh-my-design`;
  const description = `${c.introEn[0]} ${count} hand-verified references, raw markdown included.`.slice(0, 300);
  return {
    title,
    description,
    alternates: { canonical: `/collections/${slug}` },
    openGraph: {
      title,
      description,
      url: `/collections/${slug}`,
      type: "article",
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = COLLECTIONS_BY_SLUG[slug];
  if (!c) notFound();

  const entries = getCollectionEntries(slug);
  const items = entries.map(toCardInfo);
  const related = c.related
    .map((s) => COLLECTIONS_BY_SLUG[s])
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.titleEn,
    description: c.introEn[0],
    url: `${SITE_URL}/collections/${slug}`,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: `${SITE_URL}/design-systems/${it.refId}`,
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl dark:border-border">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="oh-my-design" className="h-6 sm:h-8 block dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="oh-my-design" className="h-6 sm:h-8 hidden dark:block" />
          </Link>
          <nav className="flex items-center gap-4 text-xs sm:text-sm">
            <Link href="/design-systems" className="text-muted-foreground hover:text-foreground">
              Design Systems
            </Link>
            <Link href="/docs" className="text-muted-foreground hover:text-foreground">
              Docs
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-8">
        <Link
          href="/design-systems"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Design Systems
        </Link>
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
          Collection · {items.length} references
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{c.titleKr}</h1>
        <p className="mt-1.5 text-lg font-medium text-muted-foreground">{c.titleEn}</p>

        <div className="mt-5 max-w-2xl space-y-3 leading-relaxed text-foreground/90">
          <p>{c.introKr[0]}</p>
          <p>{c.introKr[1]}</p>
        </div>
        <div className="mt-4 max-w-2xl space-y-2 text-sm leading-relaxed text-muted-foreground">
          <p>{c.introEn[0]}</p>
          <p>{c.introEn[1]}</p>
        </div>

        {/* Install funnel — install_copy { source: "collection" } */}
        <div className="mt-7 max-w-2xl">
          <InstallCta source="collection" />
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-14">
        <CollectionGrid items={items} />
      </section>

      {/* Related collections — crawl depth + session hops */}
      <section className="border-t border-border/40 bg-muted/20 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-muted-foreground">
            Related collections
          </h2>
          <div className="grid gap-2.5 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/collections/${r.slug}`}
                className="group rounded-xl border border-border/60 bg-card/50 p-4 transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="text-sm font-semibold leading-tight">{r.titleKr}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{r.titleEn}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
