"use client";

/**
 * Design Systems directory (the archive index) — client half, concept A
 * (rebrand round 2): manuscript-grid hero, keycap brand chips, region keycaps,
 * tier filter, search, and the collection filter.
 *
 * All catalog data arrives as props from the server page.tsx: importing the
 * registry or the quality table here would put a separate ~530 KB gz copy of
 * them into this route's client bundle (lib/client-registry-boundary.test.ts).
 *
 * What did not change: the server renders the complete, unfiltered list (the
 * Suspense fallback below), `?collection=<slug>` filters it exactly as before
 * (the old /collections/<slug> URLs 308 here), and the JSON-LD stays in
 * page.tsx. Region, tier and search are client-only refinements on top.
 */

import { Suspense, useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useHotRefs } from "@/lib/hot-refs";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { isNewAdded } from "@/lib/new-refs";
import { StatusBadge } from "@/components/status-badge";
import { CssKeycap, type KeycapFace } from "@/components/brand-a/keycap";
import { trackCollectionOpen } from "@/lib/collections/analytics";
import { trackDetailOpen, trackExternalClick } from "@/lib/design-systems/analytics";
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

/** Input-method legends, as on the landing's region keys: 한 (Hangul), あ (kana), ㄅ (Zhuyin). */
const REGIONS: { id: Region; g: string; lang: string; label: string }[] = [
  { id: "all", g: "All", lang: "en", label: "All regions" },
  { id: "KR", g: "한", lang: "ko", label: "Korea" },
  { id: "JP", g: "あ", lang: "ja", label: "Japan" },
  { id: "TW", g: "ㄅ", lang: "zh-Hant", label: "Taiwan" },
];

const TIER_LABEL: Record<DesignSystemInfo["qualityStatus"], string> = {
  verified_v2: "Verified v2",
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
  const hotRefs = useHotRefs(5);
  const [region, setRegion] = useState<Region>("all");
  const [tier, setTier] = useState<Tier>("all");
  const [query, setQuery] = useState("");
  const q = useDeferredValue(query.trim().toLowerCase());

  const regionCount = useMemo(() => {
    const out: Record<string, number> = { all: systems.length };
    for (const s of systems) out[s.country] = (out[s.country] ?? 0) + 1;
    return out;
  }, [systems]);

  const refine = useMemo(() => {
    return (list: CatalogSystem[]) =>
      list.filter(
        (s) =>
          (region === "all" || s.country === region) &&
          (tier === "all" || s.qualityStatus === tier) &&
          (!q ||
            s.name.toLowerCase().includes(q) ||
            s.refId.toLowerCase().includes(q) ||
            (s.native?.toLowerCase().includes(q) ?? false) ||
            s.description.toLowerCase().includes(q)),
      );
  }, [region, tier, q]);

  const refined = region !== "all" || tier !== "all" || q !== "";
  const reset = () => {
    setRegion("all");
    setTier("all");
    setQuery("");
  };

  return (
    <div className="sq-root sq-arch">
      <section className="sq-arch-hero">
        <div className="sq-wrap">
          <p className="sq-kick">Archive</p>
          <h1>Design Systems</h1>
          <p className="sq-arch-lede">
            Browse all {REFERENCE_COUNT} real-company DESIGN.md references. Trust is computed from evidence,
            freshness, and conflicts — never inferred from a date stamp.
          </p>
          <dl className="sq-arch-stats">
            <div className="sq-v">
              <dt>Verified v2</dt>
              <dd>{stats.verified}</dd>
            </div>
            <div>
              <dt>Partial</dt>
              <dd>{stats.partial}</dd>
            </div>
            <div>
              <dt>Legacy snapshots</dt>
              <dd>{stats.legacy}</dd>
            </div>
          </dl>
          {/*
            * Qualifying the counts above, because "Verified v2" does not mean what a
            * reader reasonably hears. It means the evidence graph is complete — not
            * that there is a button documented. Same register, so it reads as a
            * qualification of the tier, not a new metric.
            */}
          <p className="sq-arch-note">
            of the verified: {stats.verifiedInteractive} carry interactive components ·{" "}
            {stats.verifiedStateful} record per-state values
          </p>
        </div>
      </section>

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

        <div className="sq-arch-row">
          <span className="sq-arch-lab" id="arch-region">Region</span>
          <div className="sq-rchips" role="group" aria-labelledby="arch-region">
            {REGIONS.map((r) => (
              <button
                key={r.id}
                type="button"
                className="sq-rchip"
                aria-pressed={region === r.id}
                aria-label={`${r.label} (${regionCount[r.id] ?? 0})`}
                onClick={() => setRegion(r.id)}
              >
                <span className="sq-rchip-cap" aria-hidden="true">
                  <span className={r.id === "all" ? "sq-lat" : undefined} lang={r.lang}>{r.g}</span>
                </span>
                <span className="sq-rchip-n" aria-hidden="true">{regionCount[r.id] ?? 0}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="sq-arch-row">
          <span className="sq-arch-lab" id="arch-tier">Tier</span>
          <div className="sq-seg" role="group" aria-labelledby="arch-tier">
            {(["all", "verified_v2", "partial", "legacy_snapshot"] as Tier[]).map((t) => (
              <button key={t} type="button" aria-pressed={tier === t} onClick={() => setTier(t)}>
                {t === "all" ? "All" : TIER_LABEL[t]}
              </button>
            ))}
          </div>
        </div>

        <div className="sq-arch-row sq-arch-cols">
          <span className="sq-arch-lab">Collections</span>
          {/*
            * The former /collections/<slug> pages are now this filter; their
            * URLs 308 to /design-systems?collection=<slug> (next.config.ts).
            */}
          <Suspense fallback={<CollectionChips collections={collections} active={null} />}>
            <ActiveCollectionChips collections={collections} />
          </Suspense>
        </div>
      </section>

      <section className="sq-wrap sq-arch-list">
        {/* useSearchParams needs a Suspense boundary on a prerendered page;
            the fallback is the unfiltered grid, which is also the SSR output. */}
        <Suspense fallback={<SystemGrid systems={refine(systems)} hotRefs={hotRefs} />}>
          <CollectionFilteredGrid
            systems={systems}
            collections={collections}
            hotRefs={hotRefs}
            refine={refine}
            refined={refined}
            onReset={reset}
          />
        </Suspense>
      </section>
    </div>
  );
}

function ActiveCollectionChips({ collections }: { collections: CatalogCollection[] }) {
  const active = useSearchParams().get("collection");
  return <CollectionChips collections={collections} active={active} />;
}

function CollectionChips({ collections, active }: { collections: CatalogCollection[]; active: string | null }) {
  return (
    <div className="sq-cchips">
      {collections.map((c) => (
        <Link
          key={c.slug}
          href={`/design-systems?collection=${c.slug}`}
          scroll={false}
          aria-current={active === c.slug ? "true" : undefined}
          onClick={() => trackCollectionOpen({ slug: c.slug, origin: "directory", colorFamily: c.colorFamily })}
        >
          {c.titleEn}
        </Link>
      ))}
    </div>
  );
}

function SystemGrid({ systems, hotRefs }: { systems: CatalogSystem[]; hotRefs: Set<string> }) {
  return (
    <ul className="sq-agrid">
      {systems.map((ds) => (
        <ArchiveCard key={ds.refId} ds={ds} hot={hotRefs.has(ds.refId)} />
      ))}
    </ul>
  );
}

function ArchiveCard({ ds, hot }: { ds: CatalogSystem; hot: boolean }) {
  const typeLabel = ds.type === "system" ? "Design System" : ds.type === "brand" ? "Brand Guide" : "Reference";
  const tierClass = ds.qualityStatus === "verified_v2" ? "sq-t-v" : ds.qualityStatus === "partial" ? "sq-t-p" : "sq-t-l";
  return (
    <li className="sq-ac">
      <Link
        href={`/design-systems/${ds.refId}`}
        className="sq-ac-link"
        onClick={() => trackDetailOpen({ reference: ds.refId, source: "directory" })}
      >
        <span className="sq-ac-cap">
          {ds.cap ? <CssKeycap d={ds.cap} /> : null}
        </span>
        <span className="sq-ac-body">
          <span className="sq-ac-top">
            <span className={`sq-tier ${tierClass}`} title={ds.verifiedAt ? `Last checked ${ds.verifiedAt}` : "No checked date"}>
              {TIER_LABEL[ds.qualityStatus]}
            </span>
            {hot && <StatusBadge kind="hot" />}
            {isNewAdded(ds.added) && <StatusBadge kind="new" />}
          </span>
          <span className="sq-ac-name">{ds.name}</span>
          <span className="sq-ac-meta">
            {ds.native ? <span lang={ds.cap?.gLang ?? undefined}>{ds.native} · </span> : null}
            {typeLabel} · <span className="sq-mono">{ds.refId}</span>
          </span>
          <span className="sq-ac-desc">{ds.description}</span>
        </span>
      </Link>
      <a
        className="sq-ac-ext"
        href={ds.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackExternalClick(ds.refId)}
        aria-label={`${ds.name} ${ds.type === "reference" ? "brand" : "official"} site (opens in a new tab)`}
      >
        {ds.type === "reference" ? "Brand site" : "Official site"} ↗
      </a>
    </li>
  );
}

function CollectionFilteredGrid({
  systems,
  collections,
  hotRefs,
  refine,
  refined,
  onReset,
}: {
  systems: CatalogSystem[];
  collections: CatalogCollection[];
  hotRefs: Set<string>;
  refine: (list: CatalogSystem[]) => CatalogSystem[];
  refined: boolean;
  onReset: () => void;
}) {
  const slug = useSearchParams().get("collection");
  const collection = slug ? collections.find((c) => c.slug === slug) : undefined;
  const base = collection ? systems.filter((ds) => new Set(collection.ids).has(ds.refId)) : systems;
  const shown = refine(base);

  return (
    <>
      {collection ? (
        <div className="sq-arch-coll">
          <p>
            <b>{collection.titleEn}</b>
            <span className="sq-mono">{base.length} references</span>
            <Link href="/design-systems" scroll={false}>× Show all</Link>
          </p>
          <p className="sq-arch-coll-intro">{collection.introEn0}</p>
        </div>
      ) : null}
      <p className="sq-arch-count" role="status" aria-live="polite">
        {shown.length === base.length ? `${base.length} references` : `${shown.length} of ${base.length} references`}
        {refined ? (
          <button type="button" onClick={onReset}>Clear filters</button>
        ) : null}
      </p>
      {shown.length > 0 ? (
        <SystemGrid systems={shown} hotRefs={hotRefs} />
      ) : (
        <p className="sq-arch-empty">No reference matches these filters.</p>
      )}
    </>
  );
}
