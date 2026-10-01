"use client";

/**
 * Design Systems directory — the complete reference catalog, with official DS
 * and brand-guide links highlighted when available. Each card uses the site's
 * og:image as the thumbnail (harvested via scripts/fetch-og-images.mjs),
 * falling back to a gradient-logo thumbnail when the site doesn't publish
 * an OG image.
 *
 * Client half of the directory. All catalog data arrives as props from the
 * server page.tsx: importing the registry or the quality table here would put
 * a separate ~530 KB gz copy of them into this route's client bundle.
 */

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Moon, Sun, X } from "lucide-react";
import { useHotRefs } from "@/lib/hot-refs";
import { useTheme } from "next-themes";
import { useMounted } from "@/lib/use-mounted";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { DSCard } from "@/components/ds-card";
import { GithubStarButton } from "@/components/github-star-button";
import { trackCollectionOpen } from "@/lib/collections/analytics";
import type { ColorFamily } from "@/lib/builder/color-family";
import type { DesignSystemInfo } from "@/lib/design-systems";

/** The serializable slice of a Collection the directory renders. */
export interface CatalogCollection {
  slug: string;
  titleEn: string;
  introEn0: string;
  colorFamily?: ColorFamily;
  /** Reference ids the collection selects (server-evaluated). */
  ids: string[];
}

export interface CatalogStats {
  verified: number;
  partial: number;
  legacy: number;
  verifiedInteractive: number;
  verifiedStateful: number;
}

export function CatalogView({
  systems,
  collections,
  stats,
}: {
  systems: DesignSystemInfo[];
  collections: CatalogCollection[];
  stats: CatalogStats;
}) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  const hotRefs = useHotRefs(5);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl dark:border-border">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="oh-my-design" className="h-6 sm:h-8 block dark:hidden" />
            <img src="/logo-white.png" alt="oh-my-design" className="h-6 sm:h-8 hidden dark:block" />
          </Link>
          <div className="flex items-center gap-2">
            <GithubStarButton className="hidden sm:inline-flex" />
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border/60 bg-card/50 transition-colors hover:bg-accent dark:border-border dark:bg-card/60"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
          Directory
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Design Systems</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          Browse all {REFERENCE_COUNT} real-company DESIGN.md references. Trust is computed from evidence,
          freshness, and conflicts — never inferred from a date stamp.
        </p>
        <p className="mt-3 font-mono text-xs text-muted-foreground">
          {stats.verified} Verified v2 · {stats.partial} Partial ·{" "}
          {stats.legacy} Legacy snapshots
        </p>
        {/*
          * Qualifying the line above, because "Verified v2" does not mean what a
          * reader reasonably hears. It means the evidence graph is complete — not
          * that there is a button documented. Printed second and in the same
          * register so it reads as a qualification of the tier, not a new metric.
          */}
        <p className="mt-1 font-mono text-xs text-muted-foreground">
          of the verified: {stats.verifiedInteractive} carry interactive components ·{" "}
          {stats.verifiedStateful} record per-state values
        </p>

        {/* Curated collections — intent-keyword entry points (#5) */}
        <div className="mt-6">
          <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            Collections
          </div>
          {/*
            * The former /collections/<slug> pages are now this filter; their
            * URLs 308 to /design-systems?collection=<slug> (next.config.ts).
            */}
          <div className="flex flex-wrap gap-2">
            {collections.map((c) => (
              <Link
                key={c.slug}
                href={`/design-systems?collection=${c.slug}`}
                scroll={false}
                onClick={() => trackCollectionOpen({ slug: c.slug, origin: "directory", colorFamily: c.colorFamily })}
                className="rounded-full border border-border/60 bg-card/50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
              >
                {c.titleEn}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        {/* useSearchParams needs a Suspense boundary on a prerendered page;
            the fallback is the unfiltered grid, which is also the SSR output. */}
        <Suspense fallback={<SystemGrid systems={systems} hotRefs={hotRefs} />}>
          <CollectionFilteredGrid systems={systems} collections={collections} hotRefs={hotRefs} />
        </Suspense>
      </section>
    </div>
  );
}

function SystemGrid({ systems, hotRefs }: { systems: DesignSystemInfo[]; hotRefs: Set<string> }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {systems.map((ds) => (
        <DSCard key={ds.refId} ds={ds} hot={hotRefs.has(ds.refId)} />
      ))}
    </div>
  );
}

function CollectionFilteredGrid({
  systems,
  collections,
  hotRefs,
}: {
  systems: DesignSystemInfo[];
  collections: CatalogCollection[];
  hotRefs: Set<string>;
}) {
  const slug = useSearchParams().get("collection");
  const collection = slug ? collections.find((c) => c.slug === slug) : undefined;
  if (!collection) return <SystemGrid systems={systems} hotRefs={hotRefs} />;

  const ids = new Set(collection.ids);
  const filtered = systems.filter((ds) => ids.has(ds.refId));

  return (
    <>
      <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
        <span className="font-medium">{collection.titleEn}</span>
        <span className="font-mono text-xs text-muted-foreground">{filtered.length} references</span>
        <Link
          href="/design-systems"
          scroll={false}
          className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline hover:underline-offset-2"
        >
          <X className="h-3 w-3" /> Show all
        </Link>
      </div>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">{collection.introEn0}</p>
      <SystemGrid systems={filtered} hotRefs={hotRefs} />
    </>
  );
}
