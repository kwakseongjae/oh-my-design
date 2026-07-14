import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COLLECTIONS, getCollectionEntries } from "@/lib/collections";
import { CollectionCard } from "./collection-card";

export const metadata: Metadata = {
  title: "DESIGN.md Collections — browse by color and use case",
  description: "Browse quality-graded real-company DESIGN.md references by primary color, workflow, region, and product category.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  const items = COLLECTIONS.map((collection) => {
    const entries = getCollectionEntries(collection.slug);
    return {
      collection,
      count: entries.length,
      samples: [...new Set(entries.map((entry) => entry.primaryColor))].slice(0, 5),
    };
  });
  const colorItems = items.filter(({ collection }) => collection.colorFamily);
  const curatedItems = items.filter(({ collection }) => !collection.colorFamily);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/design-systems" className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
        <ArrowLeft className="h-3.5 w-3.5" /> Design Systems
      </Link>

      <div className="max-w-3xl">
        <div className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">Collections</div>
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">Find a reference set that matches your intent</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Start with a verified primary-color family or browse curated product and workflow sets. Every card resolves from the canonical reference catalog.
        </p>
      </div>

      <section className="mt-12" aria-labelledby="color-collections">
        <h2 id="color-collections" className="text-2xl font-medium tracking-tight">Color concepts</h2>
        <p className="mt-1 text-sm text-muted-foreground">Nine deterministic families based on each reference&apos;s canonical primary color.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {colorItems.map(({ collection, count, samples }) => (
            <CollectionCard
              key={collection.slug}
              slug={collection.slug}
              title={collection.titleEn}
              description={collection.introEn.join(" ")}
              count={count}
              samples={samples}
              colorFamily={collection.colorFamily}
            />
          ))}
        </div>
      </section>

      <section className="mt-16" aria-labelledby="curated-collections">
        <h2 id="curated-collections" className="text-2xl font-medium tracking-tight">Curated sets</h2>
        <p className="mt-1 text-sm text-muted-foreground">Workflow, region, platform, and product-category entry points.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {curatedItems.map(({ collection, count, samples }) => (
            <CollectionCard
              key={collection.slug}
              slug={collection.slug}
              title={collection.titleEn}
              description={collection.introEn.join(" ")}
              count={count}
              samples={samples}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
