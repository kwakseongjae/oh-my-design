/**
 * Design Systems directory — server half. Reads the registry, the quality
 * table and the collection filters here and hands the client view only the
 * slice it renders.
 *
 * Until 2026-10-01 this whole page was a client component that imported the
 * registry directly. Each client entry that did so (this page, the detail
 * view, the builder) got its own ~530 KB gz copy of the 521-reference
 * registry, so browsing directory → detail → builder downloaded it up to
 * three times. Keep registry / quality imports on this side of the boundary.
 */

import { getAllDesignSystems } from "@/lib/design-systems";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { SITE_ORIGIN } from "@/lib/site";
import { COLLECTIONS, getCollectionEntries } from "@/lib/collections";
import { REFERENCE_QUALITY, REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import { CatalogView, type CatalogCollection, type CatalogStats } from "./catalog-view";

/**
 * Depth *within the verified tier*, which is where the claim needs qualifying.
 *
 * Catalog-wide the numbers read reassuringly — 404 of 440 have an interactive
 * component — and that is exactly why they are the wrong ones to print here: they
 * bury the thing a reader is being misled about. All 36 references with no
 * interactive component sit in `verified_v2`; there are none in `partial` and none
 * in `legacy_snapshot`.
 *
 * That is not a coincidence, it is how the tier is defined. `verified_v2` asks for
 * a complete evidence graph, and a document that claims less has less to ground:
 * the 36 average 35 claims against 62 for the rest, both at 100% coverage. Claiming
 * less is the cheaper route to the badge, so the badge cannot be read as depth.
 */
const VERIFIED = REFERENCE_QUALITY.filter((entry) => entry.status === "verified_v2");

const STATS: CatalogStats = {
  verified: REFERENCE_QUALITY_COUNTS.verified_v2,
  partial: REFERENCE_QUALITY_COUNTS.partial,
  legacy: REFERENCE_QUALITY_COUNTS.legacy_snapshot,
  verifiedInteractive: VERIFIED.filter((entry) => entry.interactiveComponentCount > 0).length,
  verifiedStateful: VERIFIED.filter((entry) => entry.statedComponentCount > 0).length,
};

export default function DesignSystemsPage() {
  const systems = getAllDesignSystems();
  const collections: CatalogCollection[] = COLLECTIONS.map((c) => ({
    slug: c.slug,
    titleEn: c.titleEn,
    introEn0: c.introEn[0],
    ...(c.colorFamily ? { colorFamily: c.colorFamily } : {}),
    ids: getCollectionEntries(c.slug).map((entry) => entry.id),
  }));

  // CollectionPage + ItemList mirroring the grid the server renders: every
  // reference, in grid order, named as its detail page names it (registry
  // `name` first). Built here so the client view never sees the registry.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Design systems",
    url: `${SITE_ORIGIN}/design-systems`,
    isPartOf: { "@type": "WebSite", name: "oh-my-design", url: SITE_ORIGIN },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: systems.length,
      itemListElement: systems.map((ds, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: REGISTRY_BY_ID[ds.refId]?.name || REGISTRY_BY_ID[ds.refId]?.displayName || ds.name,
        url: `${SITE_ORIGIN}/design-systems/${ds.refId}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CatalogView systems={systems} collections={collections} stats={STATS} />
    </>
  );
}
