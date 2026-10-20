/**
 * The DESIGN.md archive (/design-systems) — server half. Reads the registry, the
 * quality table, the collection filters and the install counters here and hands
 * the client view only the rows it renders.
 *
 * Until 2026-10-01 this whole page was a client component that imported the
 * registry directly. Each client entry that did so (this page, the detail
 * view, the builder) got its own ~530 KB gz copy of the 521-reference
 * registry, so browsing directory → detail → builder downloaded it up to
 * three times. Keep registry / quality imports on this side of the boundary.
 *
 * Static with ISR (round 11): the install counts on the cards come from KV and
 * refresh hourly. A build without KV credentials renders no counts.
 */

import { getAllDesignSystems } from "@/lib/design-systems";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { SITE_ORIGIN } from "@/lib/site";
import { COLLECTIONS, getCollectionEntries } from "@/lib/collections";
import { REFERENCE_QUALITY } from "@/data/reference-quality.generated";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { getInstallCounts } from "@/lib/install-counts.server";
import { ARCHIVE_COPY } from "@/components/brand-a/copy/r11-archive";
import { archiveRow, enName } from "./archive-rows.server";
import { CatalogView, type CatalogCollection, type CatalogStats } from "./catalog-view";

export const revalidate = 3600;

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
  verifiedInteractive: VERIFIED.filter((entry) => entry.interactiveComponentCount > 0).length,
  verifiedStateful: VERIFIED.filter((entry) => entry.statedComponentCount > 0).length,
};

const COPY = ARCHIVE_COPY.en;

export default async function DesignSystemsPage() {
  const installs = await getInstallCounts();
  // Grid order as before: official systems, then brand guides, then the rest, by name.
  const rows = getAllDesignSystems()
    .map((ds) => REGISTRY_BY_ID[ds.refId])
    .filter((r) => !!r)
    .map((r) => archiveRow(r, "en", installs));
  const collections: CatalogCollection[] = COLLECTIONS.map((c) => ({
    slug: c.slug,
    titleEn: c.titleEn,
    introEn0: c.introEn[0],
    ...(c.colorFamily ? { colorFamily: c.colorFamily } : {}),
    ids: getCollectionEntries(c.slug).map((entry) => entry.id),
  }));

  // CollectionPage + ItemList mirroring the grid the server renders: every
  // reference, in grid order, named as its card and its item page name it.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: COPY.h1,
    url: `${SITE_ORIGIN}/design-systems`,
    isPartOf: { "@type": "WebSite", name: "oh-my-design", url: SITE_ORIGIN },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: rows.length,
      itemListElement: rows.map((r, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: enName(REGISTRY_BY_ID[r.id]),
        url: `${SITE_ORIGIN}/design-systems/${r.id}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CatalogView
        locale="en"
        rows={rows}
        collections={collections}
        stats={STATS}
        intro={
          <section className="sq-wrap sq-arch-hero">
            <h1>{COPY.h1}</h1>
            <p className="sq-arch-lede">{COPY.lede(REFERENCE_COUNT)}</p>
          </section>
        }
      />
    </>
  );
}
