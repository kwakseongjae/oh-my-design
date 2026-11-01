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
 * /collections/<slug> URLs 308 here), and the JSON-LD stays in page.tsx.
 *
 * Round 12 (owner, 2026-11-01/02): the rows arrive in the default order, installs
 * then 30-day page views (archive-rows.server.ts `defaultOrder`). Cards load 40 at a
 * time as the reader scrolls, with no button. Filters are a region segment and one
 * scrolling row of domains, with the accent marking what is on; the number of
 * matches appears, in the accent, only while something narrows the list. Region,
 * domain, sort and search live in the URL (`history.replaceState`), and the number
 * of loaded cards plus the scroll position are kept in sessionStorage when a card
 * is opened, so Back lands on the same card. The evidence tier is internal and no
 * longer shown or filtered here.
 */

import { Suspense, useDeferredValue, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
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
  type ArchiveSortKey,
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

/** Cards revealed at first and by each scroll step (owner, 2026-11-01). */
const PAGE = 40;

const REGIONS: ArchiveRegionKey[] = ["all", "KR", "JP", "TW", "CN", "other"];
const SORTS: ArchiveSortKey[] = ["installs", "views", "updated", "name"];

/** Where an opened card leaves the list state for Back to restore. */
const RESTORE_KEY = "omd:archive:restore";
const RESTORE_MAX_AGE_MS = 30 * 60 * 1000;

/** `id` + `top`: the opened card and where it sat in the viewport, so Back puts it in the same place. */
type Restore = { path: string; sig: string; limit: number; y: number; id: string; top: number; t: number };

/** The archive state the URL carries; collection stays the server's `?collection=`. */
type Initial = { region: ArchiveRegionKey; domain: string; sort: ArchiveSortKey; q: string };
const DEFAULT_INITIAL: Initial = { region: "all", domain: "all", sort: "installs", q: "" };

function initialFrom(params: URLSearchParams | null): Initial {
  if (!params) return DEFAULT_INITIAL;
  const region = REGIONS.find((r) => r === params.get("region")) ?? "all";
  const sort = SORTS.find((s) => s === params.get("sort")) ?? "installs";
  return { region, domain: params.get("domain") || "all", sort, q: params.get("q") ?? "" };
}

export function CatalogView({
  locale,
  rows,
  collections = [],
  intro,
}: {
  locale: "en" | "ko";
  /** Every reference, already in the recommended order. */
  rows: ArchiveRow[];
  /** English page only: the former /collections pages, now a menu. */
  collections?: CatalogCollection[];
  /** The h1 + lede block, rendered by the server page. */
  intro: ReactNode;
}) {
  const copy = ARCHIVE_COPY[locale];
  const props = { rows, collections, copy };
  return (
    <div className="sq-root sq-arch">
      {intro}
      {/* useSearchParams needs a Suspense boundary on a prerendered page; the fallback (no
          collection, default filters) is also the SSR output. `?region=` comes from the landing's
          "+N more" tiles (catalog-showcase.tsx), `?collection=` from the collection links, and
          the rest from this view's own replaceState. */}
      <Suspense fallback={<Archive {...props} slug={null} initial={DEFAULT_INITIAL} live={false} />}>
        <ArchiveFromParams {...props} />
      </Suspense>
    </div>
  );
}

type ArchiveProps = { rows: ArchiveRow[]; collections: CatalogCollection[]; copy: ArchiveCopy };

function ArchiveFromParams(props: ArchiveProps) {
  const params = useSearchParams();
  const slug = props.collections.length > 0 ? params.get("collection") : null;
  // Read once: later changes to the URL are this view's own replaceState calls.
  const [initial] = useState(() => initialFrom(params));
  return <Archive {...props} slug={slug} initial={initial} live />;
}

function Archive({
  rows,
  collections,
  copy,
  slug,
  initial,
  live,
}: ArchiveProps & { slug: string | null; initial: Initial; live: boolean }) {
  const [region, setRegion] = useState<ArchiveRegionKey>(initial.region);
  const [domain, setDomain] = useState<string>(initial.domain);
  const [sort, setSort] = useState<ArchiveSortKey>(initial.sort);
  const [query, setQuery] = useState(initial.q);
  const q = useDeferredValue(query.trim().toLowerCase());

  const collection = slug ? collections.find((c) => c.slug === slug) : undefined;
  const collator = useMemo(() => new Intl.Collator(copy.numberLocale), [copy.numberLocale]);
  const base = useMemo(() => {
    const ids = collection ? new Set(collection.ids) : null;
    const list = ids ? rows.filter((r) => ids.has(r.id)) : [...rows];
    // `rows` is already the default (installs) order; the other sorts are stable on top of it.
    if (sort === "views") list.sort((a, b) => b.views - a.views);
    if (sort === "name") list.sort((a, b) => collator.compare(a.name, b.name));
    if (sort === "updated") list.sort((a, b) => b.updated.localeCompare(a.updated));
    return list;
  }, [rows, collection, sort, collator]);

  // Keep region, domain, sort and search in the address so a shared or reloaded URL
  // (and Back from an item page) shows the same list. replaceState: no history entries.
  const query_ = query.trim();
  useEffect(() => {
    if (!live) return;
    const url = new URL(window.location.href);
    const set = (k: string, v: string, dflt: string) => (v && v !== dflt ? url.searchParams.set(k, v) : url.searchParams.delete(k));
    set("region", region, "all");
    set("domain", domain, "all");
    set("sort", sort, "installs");
    set("q", query_, "");
    if (url.href !== window.location.href) window.history.replaceState(window.history.state, "", url);
  }, [live, region, domain, sort, query_]);

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

  // Facet counts: each filter counts what the *other* filters leave.
  const regionCount: Record<string, number> = { all: 0 };
  const domainCount: Record<string, number> = { all: 0 };
  for (const r of base) {
    if (!matchQ(r)) continue;
    if (matchD(r)) {
      regionCount.all++;
      regionCount[r.region] = (regionCount[r.region] ?? 0) + 1;
    }
    if (matchR(r)) {
      domainCount.all++;
      domainCount[r.domain] = (domainCount[r.domain] ?? 0) + 1;
    }
  }
  const shown = base.filter((r) => matchQ(r) && matchR(r) && matchD(r));

  const refined = region !== "all" || domain !== "all" || q !== "";
  const reset = () => {
    setRegion("all");
    setDomain("all");
    setQuery("");
  };
  // A new filter or sort starts again at the top.
  const sig = `${slug ?? ""}|${region}|${domain}|${sort}|${q}`;
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
            <SortMenu copy={copy} sort={sort} setSort={setSort} />
            {collections.length > 0 ? <CollectionMenu copy={copy} collections={collections} active={collection ?? null} /> : null}
          </div>
        </div>

        <div className="sq-arch-filters">
          <div className="sq-seg" role="group" aria-label={copy.regionLabel}>
            {REGIONS.map((r) => (
              <button
                key={r}
                type="button"
                aria-pressed={region === r}
                disabled={r !== "all" && r !== region && !regionCount[r]}
                onClick={() => setRegion(r)}
              >
                {copy.regions[r]}
              </button>
            ))}
          </div>
          <div className="sq-arch-frow" role="group" aria-label={copy.domainLabel}>
            <button type="button" className="sq-fchip" aria-pressed={domain === "all"} onClick={() => setDomain("all")}>
              {copy.allDomains}
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
                {domainLabel(copy, d)}
              </button>
            ))}
          </div>
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
        {/* The match count only while something narrows the list (owner, 2026-11-02). */}
        <p className="sq-arch-count" role="status" aria-live="polite">
          {refined || collection ? (
            <>
              <span>
                <strong>{fmt(shown.length)}</strong>
                {copy.results(shown.length)}
              </span>
              {refined ? (
                <button type="button" onClick={reset}>
                  {copy.clear}
                </button>
              ) : null}
            </>
          ) : null}
        </p>
        {shown.length > 0 ? (
          <PagedGrid key={sig} sig={sig} rows={shown} copy={copy} live={live} />
        ) : (
          <p className="sq-arch-empty">{copy.empty}</p>
        )}
      </section>
      {live ? <ToTop label={copy.toTop} /> : null}
    </>
  );
}

function SortMenu({ copy, sort, setSort }: { copy: ArchiveCopy; sort: ArchiveSortKey; setSort: (s: ArchiveSortKey) => void }) {
  return (
    <details className="sq-fmenu">
      <summary aria-label={`${copy.sortLabel}: ${copy.sorts[sort]}`}>{copy.sorts[sort]}</summary>
      <div className="sq-fmenu-list" role="group" aria-label={copy.sortLabel}>
        {SORTS.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={sort === s}
            onClick={(e) => {
              setSort(s);
              e.currentTarget.closest("details")?.removeAttribute("open");
            }}
          >
            <span>{copy.sorts[s]}</span>
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
    <details className="sq-fmenu">
      <summary>{active ? active.titleEn : copy.collections}</summary>
      {/*
        * The former /collections/<slug> pages are this menu; their URLs 308 to
        * /design-systems?collection=<slug> (next.config.ts). Links, not a
        * <select>, so every collection URL stays crawlable.
        */}
      <div className="sq-fmenu-list">
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

function readRestore(): Restore | null {
  try {
    const saved = JSON.parse(sessionStorage.getItem(RESTORE_KEY) ?? "null") as Restore | null;
    sessionStorage.removeItem(RESTORE_KEY);
    if (!saved || Date.now() - saved.t > RESTORE_MAX_AGE_MS) return null;
    return saved.path === window.location.pathname + window.location.search ? saved : null;
  } catch {
    return null;
  }
}

/**
 * Every match is rendered as a link; those past the loaded count carry `hidden`,
 * so the full list stays in the HTML without 100 phone screens of cards. A
 * sentinel after the list loads the next 40 before the reader reaches the end.
 * Keyed by the filter signature, so a new filter or sort starts at the top.
 */
function PagedGrid({ sig, rows, copy, live }: { sig: string; rows: ArchiveRow[]; copy: ArchiveCopy; live: boolean }) {
  const [limit, setLimit] = useState(PAGE);
  const sentinel = useRef<HTMLDivElement>(null);
  const pendingScroll = useRef<{ limit: number; y: number; id: string; top: number } | null>(null);

  // Back from an item page: reveal as many cards as were loaded, then return to the
  // same scroll position once they are laid out.
  useLayoutEffect(() => {
    if (!live) return;
    const saved = readRestore();
    if (!saved || saved.sig !== sig) return;
    const target = Math.min(Math.max(saved.limit, PAGE), rows.length);
    pendingScroll.current = { limit: target, y: saved.y, id: saved.id, top: saved.top };
    if (target > PAGE) setLimit(target);
    // mount only: a restore applies to the list as it was left
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const pending = pendingScroll.current;
    if (!pending || limit < pending.limit) return;
    pendingScroll.current = null;
    // Align on the opened card rather than a pixel offset: logos and fonts that load
    // after the first frame change the heights above it. Once now, once after they settle.
    const align = () => {
      const card = document.querySelector<HTMLElement>(`.sq-cards > [data-ref="${CSS.escape(pending.id)}"]`);
      const y = card ? card.getBoundingClientRect().top + window.scrollY - pending.top : pending.y;
      if (Math.abs(window.scrollY - y) > 4) window.scrollTo(0, y);
    };
    requestAnimationFrame(align);
    const late = window.setTimeout(align, 350);
    return () => window.clearTimeout(late);
  }, [limit]);

  useEffect(() => {
    const el = sentinel.current;
    if (!el || limit >= rows.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setLimit((n) => Math.min(n + PAGE, rows.length));
      },
      { rootMargin: "0px 0px 800px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [limit, rows.length]);

  const remember = (id: string, top: number) => {
    try {
      const saved: Restore = { path: window.location.pathname + window.location.search, sig, limit, y: window.scrollY, id, top, t: Date.now() };
      sessionStorage.setItem(RESTORE_KEY, JSON.stringify(saved));
    } catch {
      // storage unavailable: Back simply starts at the top
    }
  };

  return (
    <>
      {/* Without JavaScript nothing loads more, so show every card. */}
      <noscript>
        <style>{".sq-cards>.sq-card[hidden]{display:block}"}</style>
      </noscript>
      <ul className="sq-cards">
        {rows.map((r, i) => (
          <ArchiveCard key={r.id} r={r} copy={copy} hidden={i >= limit} onOpen={remember} />
        ))}
      </ul>
      {limit < rows.length ? <div ref={sentinel} className="sq-arch-sentinel" aria-hidden="true" /> : null}
    </>
  );
}

/** Appears after the reader has scrolled a few screens; returns to the search field. */
function ToTop({ label }: { label: string }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 1600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!shown) return null;
  return (
    <button
      type="button"
      className="sq-arch-top"
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </button>
  );
}

function ArchiveCard({
  r,
  copy,
  hidden,
  onOpen,
}: {
  r: ArchiveRow;
  copy: ArchiveCopy;
  hidden: boolean;
  onOpen: (id: string, top: number) => void;
}) {
  const [logo, setLogo] = useState(!!r.logo);
  return (
    <li className="sq-card" hidden={hidden} data-ref={r.id}>
      <Link
        href={r.href}
        className="sq-card-a"
        onClick={(e) => {
          onOpen(r.id, e.currentTarget.getBoundingClientRect().top);
          trackDetailOpen({ reference: r.id, source: "directory" });
        }}
      >
        {/* Domain and installs carry the card (owner, 2026-11-02); the country is a filter, not card text. */}
        <span className="sq-card-top">
          {logo ? <BrandLogo logo={r.logo} className="sq-card-logo" onMissing={() => setLogo(false)} /> : null}
          <span className="sq-card-tag">{domainLabel(copy, r.domain)}</span>
        </span>
        <span className="sq-card-name">
          <span lang={r.nameLang}>{r.name}</span>
        </span>
        {r.summary ? (
          <span className="sq-card-sum" lang={r.summaryLang}>
            {r.summary}
          </span>
        ) : null}
        {r.installs > 0 ? (
          <span className="sq-card-n" title={copy.installsTitle}>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 2.5v7.5M4.5 6.5 8 10l3.5-3.5M3 13.5h10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {copy.installs(r.installs)}
          </span>
        ) : null}
      </Link>
    </li>
  );
}
