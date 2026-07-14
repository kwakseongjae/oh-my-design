"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackCollectionOpen, type CollectionOrigin } from "@/lib/collections/analytics";

export function CollectionCard({
  slug,
  title,
  description,
  count,
  samples,
  colorFamily,
  origin = "index",
}: {
  slug: string;
  title: string;
  description: string;
  count: number;
  samples: readonly string[];
  colorFamily?: string;
  origin?: CollectionOrigin;
}) {
  return (
    <Link
      href={`/collections/${slug}`}
      onClick={() => trackCollectionOpen({ slug, origin, colorFamily })}
      className="group flex min-h-48 flex-col rounded-xl bg-card p-4 ring-1 ring-foreground/10 transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {samples.length > 0 ? (
        <div className="mb-5 flex h-16 gap-1.5" aria-hidden="true">
          {samples.map((sample) => (
            <span
              key={sample}
              className="flex-1 rounded-lg border border-foreground/10"
              style={{ backgroundColor: sample }}
            />
          ))}
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-base font-medium text-foreground">{title}</h2>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">{count}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-medium text-primary">
        View collection
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
