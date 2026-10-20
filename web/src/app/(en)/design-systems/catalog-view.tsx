"use client";

/**
 * The DESIGN.md archive — client half, shared by /design-systems (en) and
 * /ko/design-systems (ko). Round 11 (W6): logo cards, region + domain filters,
 * a redrawn search field, install counts.
 *
 * All data arrives as rows from the server pages (archive-rows.server.ts):
 * importing the registry or the quality table here would put a separate ~530 KB
 * gz copy of them into this route's client bundle (lib/client-registry-boundary.test.ts).
 *
 * Unchanged from round 4: the server renders every reference as a link (rows
 * past the current page carry `hidden`, so crawlers reach all of them),
 * `?collection=<slug>` filters exactly as before on the English page (the old
 * /collections/<slug> URLs 308 here), and the JSON-LD stays in page.tsx. Region,
 * domain, tier and search are client-only refinements on top. Tier counts live
 * only inside the tier menu (RESTRAINT.md R10: one place per fact).
 */

import { Suspense, useDeferredValue, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { BrandLogo } from "@/components/brand-logo";
import { trackCollectionOpen } from "@/lib/collections/analytics";
import { trackDetailOpen } from "@/lib/design-systems/analytics";
import {
  ARCHIVE_COPY,
  domainLabel,
  type ArchiveCopy,
  type ArchiveRegionKey,
  type ArchiveTierKey,
} from "@/components/brand-a/copy/r11-archive";
import type { ColorFamily } from "@/lib/color-family";
import type { ArchiveRow } from "./archive-rows.server";
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
  verifiedInteractive: number;
  verifiedStateful: number;
}

/** How many cards one page (and each "Show more") reveals. */
const PAGE = 24;

const REGIONS: ArchiveRegionKey[] = ["all", "KR", "JP", "TW", "CN", "other"];
const TIERS: ArchiveTierKey[] = ["all", "verified_v2", "partial", "legacy_snapshot"];

export function CatalogView({
  locale,
  rows,
  collections = [],
  stats,
  intro,
}: {
  locale: "en" | "ko";
  rows: ArchiveRow[];
  /** English page only: the former /collections pages, now a menu. */
  collections?: CatalogCollection[];
  stats: CatalogStats;
  /** The h1 + lede block, rendered by the server page. */
  intro: ReactNode;
}) {
  const copy = ARCHIVE_COPY[locale];
  const props = { rows, collections, stats, copy };
  return (
    <div className="sq-root sq-arch">
      {intro}
      {collections.length > 0 ? (
        // useSearchParams needs a Suspense boundary on a prerendered page; the
        // fallback (no collection) is also the SSR output.
        <Suspense fallback={<Archive {...props} slug={null} />}>
          <ArchiveFromParams {...props} />
        </Suspense>
      ) : (
        <Archive {...props} slug={null} />
      )}
    </div>
  );
}

type ArchiveProps = { rows: ArchiveRow[]; collections: CatalogCollection[]; stats: CatalogStats; copy: ArchiveCopy };

function ArchiveFromParams(props: ArchiveProps) {
  const slug = useSearchParams().get("collection");
  return <Archive {...props} slug={slug} />;
}

function Archive({ rows, collections, stats, copy, slug }: ArchiveProps & { slug: string | null }) {
  const [region, setRegion] = useState<ArchiveRegionKey>("all");
  const [domain, setDomain] = useState<string>("all");
  const [tier, setTier] = useState<ArchiveTierKey>("all");
  const [query, setQuery] = useState("");
  const q = useDeferredValue(query.trim().toLowerCase());

  const collection = slug ? collections.find((c) => c.slug === slug) : undefined;
  const base = useMemo(() => {
    if (!collection) return rows;
    const ids = new Set(collection.ids);
    return rows.filter((r) => ids.has(r.id));
  }, [rows, collection]);

  // Domains present in the list, largest first (registry `category`).
  const domains = useMemo(() => {
    const n = new Map<string, number>();
    for (const r of rows) n.set(r.domain, (n.get(r.domain) ?? 0) + 1);
    return [...n.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([d]) => d);
  }, [rows]);

  const matchQ = (r: ArchiveRow) =>
    !q ||
    r.name.toLowerCase().includes(q) ||
    r.id.includes(q) ||
    r.terms.some((t) => t.toLowerCase().includes(q)) ||
    r.summary.toLowerCase().includes(q) ||
    domainLabel(copy, r.domain).toLowerCase().includes(q);
  const matchR = (r: ArchiveRow) => region === "all" || r.region === region;
  const matchD = (r: ArchiveRow) => domain === "all" || r.domain === domain;
  const matchT = (r: ArchiveRow) => tier === "all" || r.tier === tier;

  // Facet counts: each filter counts what the *other* filters leave.
  const regionCount: Record<string, number> = { all: 0 };
  const domainCount: Record<string, number> = { all: 0 };
  const tierCount: Record<string, number> = { all: 0 };
  for (const r of base) {
    if (!matchQ(r)) continue;
    if (matchD(r) && matchT(r)) {
      regionCount.all++;
      regionCount[r.region] = (regionCount[r.region] ?? 0) + 1;
    }
    if (matchR(r) && matchT(r)) {
      domainCount.all++;
      domainCount[r.domain] = (domainCount[r.domain] ?? 0) + 1;
    }
    if (matchR(r) && matchD(r)) {
      tierCount.all++;
      tierCount[r.tier] = (tierCount[r.tier] ?? 0) + 1;
    }
  }
  const shown = base.filter((r) => matchQ(r) && matchR(r) && matchD(r) && matchT(r));

  const refined = region !== "all" || domain !== "all" || tier !== "all" || q !== "";
  const reset = () => {
    setRegion("all");
    setDomain("all");
    setTier("all");
    setQuery("");
  };
  // A new filter starts again at page one.
  const sig = `${slug ?? ""}|${region}|${domain}|${tier}|${q}`;
  const wholeVerified = tier === "verified_v2" && region === "all" && domain === "all" && !q && !collection;
  const fmt = (n: number) => n.toLocaleString(copy.numberLocale);

  return (
    <>
      <section className="sq-wrap sq-arch-tools" aria-label={copy.search.label}>
        <div className="sq-arch-searchrow">
          <label className="sq-arch-search">
            <span className="sq-sr">{copy.search.label}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="sq-arch-search-i">
              <circle cx="8.75" cy="8.75" r="5.75" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="m13.1 13.1 4.4 4.4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={copy.search.placeholder}
              autoComplete="off"
              spellCheck={false}
            />
            {query ? (
              <button type="button" className="sq-arch-search-x" onClick={() => setQuery("")} aria-label={copy.search.clear}>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="m3 3 8 8M11 3l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            ) : null}
          </label>
          <div className="sq-arch-menus">
            <TierMenu copy={copy} tier={tier} setTier={setTier} counts={tierCount} fmt={fmt} />
            {collections.length > 0 ? <CollectionMenu copy={copy} collections={collections} active={collection ?? null} /> : null}
          </div>
        </div>

        <div className="sq-arch-frow" role="group" aria-label={copy.regionLabel}>
          {REGIONS.map((r) => (
            <button
              key={r}
              type="button"
              className="sq-fchip"
              aria-pressed={region === r}
              disabled={r !== "all" && r !== region && !regionCount[r]}
              onClick={() => setRegion(r)}
            >
              {copy.regions[r]} <span className="sq-n">{fmt(regionCount[r] ?? 0)}</span>
            </button>
          ))}
        </div>
        <div className="sq-arch-frow sq-arch-frow-d" role="group" aria-label={copy.domainLabel}>
          <button type="button" className="sq-fchip" aria-pressed={domain === "all"} onClick={() => setDomain("all")}>
            {copy.allDomains} <span className="sq-n">{fmt(domainCount.all ?? 0)}</span>
          </button>
          {domains.map((d) => (
            <button
              key={d}
              type="button"
              className="sq-fchip"
              aria-pressed={domain === d}
              disabled={d !== domain && !domainCount[d]}
              onClick={() => setDomain(d)}
            >
              {domainLabel(copy, d)} <span className="sq-n">{fmt(domainCount[d] ?? 0)}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="sq-wrap sq-arch-list">
        {collection ? (
          <div className="sq-arch-coll">
            <p>
              <b>{collection.titleEn}</b>
              {/* A plain anchor: the next/link soft navigation back to the bare path did not leave ?collection=. */}
              <a href="/design-systems">{copy.showAll}</a>
            </p>
            <p className="sq-arch-coll-intro">{collection.introEn0}</p>
          </div>
        ) : null}
        <p className="sq-arch-count" role="status" aria-live="polite">
          {copy.count(shown.length, base.length)}
          {wholeVerified ? ` · ${copy.verifiedQualifier(stats.verifiedInteractive, stats.verifiedStateful)}` : ""}
          {refined ? (
            <button type="button" onClick={reset}>
              {copy.clear}
            </button>
          ) : null}
        </p>
        {shown.length > 0 ? (
          <PagedGrid key={sig} rows={shown} copy={copy} />
        ) : (
          <p className="sq-arch-empty">{copy.empty}</p>
        )}
      </section>
    </>
  );
}

function TierMenu({
  copy,
  tier,
  setTier,
  counts,
  fmt,
}: {
  copy: ArchiveCopy;
  tier: ArchiveTierKey;
  setTier: (t: ArchiveTierKey) => void;
  counts: Record<string, number>;
  fmt: (n: number) => string;
}) {
  return (
    <details className="sq-menu">
      <summary aria-label={`${copy.tierLabel}: ${copy.tiers[tier]}`}>{copy.tiers[tier]}</summary>
      <div className="sq-menu-list" role="group" aria-label={copy.tierLabel}>
        {TIERS.map((t) => (
          <button
            key={t}
            type="button"
            aria-pressed={tier === t}
            onClick={(e) => {
              setTier(t);
              e.currentTarget.closest("details")?.removeAttribute("open");
            }}
          >
            <span>{copy.tiers[t]}</span>
            <span className="sq-n">{fmt(counts[t] ?? 0)}</span>
          </button>
        ))}
      </div>
    </details>
  );
}

function CollectionMenu({
  copy,
  collections,
  active,
}: {
  copy: ArchiveCopy;
  collections: CatalogCollection[];
  active: CatalogCollection | null;
}) {
  return (
    <details className="sq-menu">
      <summary>{active ? active.titleEn : copy.collections}</summary>
      {/*
        * The former /collections/<slug> pages are this menu; their URLs 308 to
        * /design-systems?collection=<slug> (next.config.ts). Links, not a
        * <select>, so every collection URL stays crawlable.
        */}
      <div className="sq-menu-list">
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
function PagedGrid({ rows, copy }: { rows: ArchiveRow[]; copy: ArchiveCopy }) {
  const [limit, setLimit] = useState(PAGE);
  const left = rows.length - limit;
  return (
    <>
      <ul className="sq-cards">
        {rows.map((r, i) => (
          <ArchiveCard key={r.id} r={r} copy={copy} hidden={i >= limit} />
        ))}
      </ul>
      {left > 0 ? (
        <div className="sq-arch-more">
          <button type="button" onClick={() => setLimit((n) => n + PAGE)}>
            {copy.more(Math.min(PAGE, left))}
          </button>
          <span>{copy.left(left)}</span>
        </div>
      ) : null}
    </>
  );
}

function ArchiveCard({ r, copy, hidden }: { r: ArchiveRow; copy: ArchiveCopy; hidden: boolean }) {
  const [logo, setLogo] = useState(!!r.logo);
  return (
    <li className="sq-card" hidden={hidden}>
      <Link
        href={r.href}
        className="sq-card-a"
        onClick={() => trackDetailOpen({ reference: r.id, source: "directory" })}
      >
        {logo ? <BrandLogo logo={r.logo} className="sq-card-logo" onMissing={() => setLogo(false)} /> : null}
        <span className="sq-card-name">
          <span lang={r.nameLang}>{r.name}</span>
          {r.tier === "verified_v2" ? (
            <span className="sq-card-v" title={r.verifiedAt ? `${copy.verified} · ${r.verifiedAt}` : copy.verified}>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="8" fill="currentColor" />
                <path d="m4.6 8.2 2.2 2.2 4.6-4.7" fill="none" stroke="var(--sq-paper)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sq-sr">{copy.verified}</span>
            </span>
          ) : null}
        </span>
        {r.summary ? (
          <span className="sq-card-sum" lang={r.summaryLang}>
            {r.summary}
          </span>
        ) : null}
        <span className="sq-card-meta">
          <span className="sq-card-tag">{domainLabel(copy, r.domain)}</span>
          <span>{r.countryLabel}</span>
          {r.installs > 0 ? (
            <span className="sq-card-n" title={copy.installsTitle}>
              {copy.installs(r.installs)}
            </span>
          ) : null}
        </span>
      </Link>
    </li>
  );
}
