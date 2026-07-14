"use client";

/**
 * Design Systems directory — the complete reference catalog, with official DS
 * and brand-guide links highlighted when available. Each card uses the site's
 * og:image as the thumbnail (harvested via scripts/fetch-og-images.mjs),
 * falling back to a gradient-logo thumbnail when the site doesn't publish
 * an OG image.
 */

import Link from "next/link";
import { ArrowLeft, ArrowRight, Moon, Sun } from "lucide-react";
import { useHotRefs } from "@/lib/hot-refs";
import { useTheme } from "next-themes";
import { getAllDesignSystems } from "@/lib/design-systems";
import { useMounted } from "@/lib/use-mounted";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { DSCard } from "@/components/ds-card";
import { GithubStarButton } from "@/components/github-star-button";
import { COLLECTIONS } from "@/lib/collections";
import { REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import { CollectionInlineLink } from "@/app/collections/collection-inline-link";

export default function DesignSystemsPage() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  const systems = getAllDesignSystems();
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
          {REFERENCE_QUALITY_COUNTS.verified_v2} Verified v2 · {REFERENCE_QUALITY_COUNTS.partial} Partial ·{" "}
          {REFERENCE_QUALITY_COUNTS.legacy_snapshot} Legacy snapshots
        </p>

        {/* Curated collections — intent-keyword entry points (#5) */}
        <div className="mt-6">
          <div className="mb-2.5 flex items-center justify-between gap-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              Collections
            </div>
            <Link href="/collections" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline hover:underline-offset-2">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {COLLECTIONS.map((c) => (
              <CollectionInlineLink
                key={c.slug}
                slug={c.slug}
                origin="directory"
                colorFamily={c.colorFamily}
                className="rounded-full border border-border/60 bg-card/50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-accent dark:border-border"
              >
                {c.titleEn}
              </CollectionInlineLink>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((ds) => (
            <DSCard key={ds.refId} ds={ds} hot={hotRefs.has(ds.refId)} />
          ))}
        </div>
      </section>
    </div>
  );
}
