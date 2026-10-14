"use client";

/**
 * Design Systems directory (the archive index) — client half, concept A,
 * restraint pass (rebrand round 4, 2026-10-14): a plain title, one search
 * field, one filter row (region · tier · collections menu) and the list.
 *
 * All catalog data arrives as props from the server page.tsx: importing the
 * registry or the quality table here would put a separate ~530 KB gz copy of
 * them into this route's client bundle (lib/client-registry-boundary.test.ts).
 *
 * What did not change: the server renders every reference as a link (the
 * Suspense fallback below — entries past the first page carry `hidden`, so
 * they stay in the HTML for crawlers), `?collection=<slug>` filters it exactly
 * as before (the old /collections/<slug> URLs 308 here), and the JSON-LD stays
 * in page.tsx. Region, tier and search are client-only refinements on top.
 *
 * Tier counts live only inside the tier filter (RESTRAINT.md R10: one place
 * per fact); the "what verified does not mean" qualifier appears when the
 * reader actually narrows to the verified tier.
 */

import { Suspense, useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { CssKeycap, type KeycapFace } from "@/components/brand-a/keycap";
import { trackCollectionOpen } from "@/lib/collections/analytics";
import { trackDetailOpen } from "@/lib/design-systems/analytics";
import type { ColorFamily } from "@/lib/color-family";
import type { DesignSystemInfo } from "@/lib/design-systems";
import "@/components/brand-a/archive.css";

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

/** A directory row: the design-system info plus its keycap face and region. */
export interface CatalogSystem extends DesignSystemInfo {
  country: string;
  /** Native-script name when it differs from `name` (searchable, shown small). */
  native: string | null;
  cap: KeycapFace | null;
}

type Region = "all" | "KR" | "JP" | "TW";
type Tier = "all" | DesignSystemInfo["qualityStatus"];

/** How many cards one page (and each "Show more") reveals. */
const PAGE = 24;

const REGIONS: { id: Region; label: string }[] = [
  { id: "all", label: "All" },
  { id: "KR", label: "Korea" },
  { id: "JP", label: "Japan" },
  { id: "TW", label: "Taiwan" },
];

const TIERS: Tier[] = ["all", "verified_v2", "partial", "legacy_snapshot"];

const TIER_LABEL: Record<DesignSystemInfo["qualityStatus"], string> = {
  verified_v2: "Verified",
  partial: "Partial",
  legacy_snapshot: "Legacy",
};

export function CatalogView({
  systems,
  collections,
  stats,
}: {
  systems: CatalogSystem[];
  collections: CatalogCollection[];
  stats: CatalogStats;
}) {
  return (
    <div className="sq-root sq-arch">
      <section className="sq-wrap sq-arch-hero">
        <h1>Design systems</h1>
        <p className="sq-arch-lede">
          All {REFERENCE_COUNT} real-company DESIGN.md references. Trust is computed from evidence, never from a
          date stamp.
        </p>
      </section>
      {/* useSearchParams needs a Suspense boundary on a prerendered page; the
          fallback (no collection) is also the SSR output. */}
      <Suspense fallback={<Archive systems={systems} collections={collections} stats={stats} slug={null} />}>
        <ArchiveFromParams systems={systems} collections={collections} stats={stats} />
      </Suspense>
    </div>
  );
}

function ArchiveFromParams(props: { systems: CatalogSystem[]; collections: CatalogCollection[]; stats: CatalogStats }) {
  const slug = useSearchParams().get("collection");
  return <Archive {...props} slug={slug} />;
}

function Archive({
  systems,
  collections,
  stats,
  slug,
}: {
  systems: CatalogSystem[];
  collections: CatalogCollection[];
  stats: CatalogStats;
  slug: string | null;
}) {
  const [region, setRegion] = useState<Region>("all");
  const [tier, setTier] = useState<Tier>("all");
  const [query, setQuery] = useState("");
  const q = useDeferredValue(query.trim().toLowerCase());

  const collection = slug ? collections.find((c) => c.slug === slug) : undefined;
  const base = useMemo(() => {
    if (!collection) return systems;
    const ids = new Set(collection.ids);
    return systems.filter((ds) => ids.has(ds.refId));
  }, [systems, collection]);

  const matchQ = (s: CatalogSystem) =>
    !q ||
    s.name.toLowerCase().includes(q) ||
    s.refId.toLowerCase().includes(q) ||
    (s.native?.toLowerCase().includes(q) ?? false) ||
    s.description.toLowerCase().includes(q);
  const matchR = (s: CatalogSystem) => region === "all" || s.country === region;
  const matchT = (s: CatalogSystem) => tier === "all" || s.qualityStatus === tier;

  // Facet counts: each filter counts what the *other* filters leave.
  const regionCount: Record<string, number> = { all: 0 };
  const tierCount: Record<string, number> = { all: 0 };
  for (const s of base) {
    if (!matchQ(s)) continue;
    if (matchT(s)) {
      regionCount.all++;
      regionCount[s.country] = (regionCount[s.country] ?? 0) + 1;
    }
    if (matchR(s)) {
      tierCount.all++;
      tierCount[s.qualityStatus] = (tierCount[s.qualityStatus] ?? 0) + 1;
    }
  }
  const shown = base.filter((s) => matchQ(s) && matchR(s) && matchT(s));

  const refined = region !== "all" || tier !== "all" || q !== "";
  const reset = () => {
    setRegion("all");
    setTier("all");
    setQuery("");
  };
  // A new filter starts again at page one.
  const sig = `${slug ?? ""}|${region}|${tier}|${q}`;
  const wholeVerified = tier === "verified_v2" && region === "all" && !q && !collection;

  return (
    <>
      <section className="sq-wrap sq-arch-tools" aria-label="Filter the archive">
        <label className="sq-arch-search">
          <span className="sq-sr">Search design systems</span>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <rect x="1.5" y="1.5" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M10.5 10.5 16.5 16.5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, id or description"
            autoComplete="off"
            spellCheck={false}
          />
        </label>

        <div className="sq-arch-filters">
          <div className="sq-seg" role="group" aria-label="Region">
            {REGIONS.map((r) => (
              <button key={r.id} type="button" aria-pressed={region === r.id} onClick={() => setRegion(r.id)}>
                {r.label} <span className="sq-n">{regionCount[r.id] ?? 0}</span>
              </button>
            ))}
          </div>
          <div className="sq-seg" role="group" aria-label="Tier">
            {TIERS.map((t) => (
              <button key={t} type="button" aria-pressed={tier === t} onClick={() => setTier(t)}>
                {t === "all" ? "Any tier" : TIER_LABEL[t]} <span className="sq-n">{tierCount[t] ?? 0}</span>
              </button>
            ))}
          </div>
          {/*
            * The former /collections/<slug> pages are this menu; their URLs 308 to
            * /design-systems?collection=<slug> (next.config.ts). Links, not a
            * <select>, so every collection URL stays crawlable.
            */}
          <CollectionMenu collections={collections} active={collection ?? null} />
        </div>
      </section>

      <section className="sq-wrap sq-arch-list">
        {collection ? (
          <div className="sq-arch-coll">
            <p>
              <b>{collection.titleEn}</b>
              {/* A plain anchor: the next/link soft navigation back to the bare path did not leave ?collection=. */}
              <a href="/design-systems">Show all</a>
            </p>
            <p className="sq-arch-coll-intro">{collection.introEn0}</p>
          </div>
        ) : null}
        <p className="sq-arch-count" role="status" aria-live="polite">
          {shown.length === base.length ? `${base.length} references` : `${shown.length} of ${base.length} references`}
          {wholeVerified
            ? ` · ${stats.verifiedInteractive} carry interactive components, ${stats.verifiedStateful} record per-state values`
            : ""}
          {refined ? (
            <button type="button" onClick={reset}>
              Clear filters
            </button>
          ) : null}
        </p>
        {shown.length > 0 ? (
          <PagedGrid key={sig} systems={shown} />
        ) : (
          <p className="sq-arch-empty">No reference matches these filters.</p>
        )}
      </section>
    </>
  );
}

function CollectionMenu({ collections, active }: { collections: CatalogCollection[]; active: CatalogCollection | null }) {
  return (
    <details className="sq-coll">
      <summary>{active ? active.titleEn : "Collections"}</summary>
      <div className="sq-coll-menu">
        {collections.map((c) => (
          <Link
            key={c.slug}
            href={`/design-systems?collection=${c.slug}`}
            scroll={false}
            aria-current={active?.slug === c.slug ? "true" : undefined}
            onClick={(e) => {
              trackCollectionOpen({ slug: c.slug, origin: "directory", colorFamily: c.colorFamily });
              e.currentTarget.closest("details")?.removeAttribute("open");
            }}
          >
            {c.titleEn}
          </Link>
        ))}
      </div>
    </details>
  );
}

/**
 * Every match is rendered as a link; those past the current page carry
 * `hidden`, so the full list stays in the HTML without 100 phone screens of
 * cards. Keyed by the filter signature, so a new filter resets to page one.
 */
function PagedGrid({ systems }: { systems: CatalogSystem[] }) {
  const [limit, setLimit] = useState(PAGE);
  const left = systems.length - limit;
  return (
    <>
      <ul className="sq-agrid">
        {systems.map((ds, i) => (
          <ArchiveCard key={ds.refId} ds={ds} hidden={i >= limit} />
        ))}
      </ul>
      {left > 0 ? (
        <div className="sq-arch-more">
          <button type="button" onClick={() => setLimit((n) => n + PAGE)}>
            Show {Math.min(PAGE, left)} more
          </button>
          <span>{left} left</span>
        </div>
      ) : null}
    </>
  );
}

function ArchiveCard({ ds, hidden }: { ds: CatalogSystem; hidden: boolean }) {
  return (
    <li className="sq-ac" hidden={hidden}>
      <Link
        href={`/design-systems/${ds.refId}`}
        className="sq-ac-link"
        onClick={() => trackDetailOpen({ reference: ds.refId, source: "directory" })}
      >
        {/* Brand colour is content, not chrome (RESTRAINT.md R7). */}
        <span className="sq-ac-cap" data-content-object="">
          {ds.cap ? <CssKeycap d={ds.cap} /> : null}
        </span>
        <span className="sq-ac-body">
          <span className="sq-ac-name">
            {ds.name}
            {ds.qualityStatus === "verified_v2" ? (
              <span className="sq-ac-v" title={ds.verifiedAt ? `Verified · checked ${ds.verifiedAt}` : "Verified"}>
                <span className="sq-sr"> (verified)</span>
              </span>
            ) : null}
          </span>
          <span className="sq-ac-desc">
            {ds.native ? <span lang={ds.cap?.gLang ?? undefined}>{ds.native} · </span> : null}
            {ds.description}
          </span>
        </span>
      </Link>
    </li>
  );
}
