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
 * time as the reader scrolls, with no button. Region and domain are two menus beside
 * the search, not rows of chips (owner: "나열하지 말고"); a menu that narrows the
 * list turns the accent, and the number of matches appears, in the accent, only
 * while something narrows the list. Region,
 * domain, sort and search live in the URL (`history.replaceState`), and the number
 * of loaded cards plus the scroll position are kept in sessionStorage when a card
 * is opened, so Back lands on the same card. The evidence tier is internal and no
 * longer shown or filtered here.
 */

import { Suspense, useDeferredValue, useEffect, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
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
  // Shown under the empty search field: the three most installed names, then the two largest domains.
  const suggestions = useMemo(
    () => [...rows.slice(0, 3).map((r) => r.name), ...domains.slice(0, 2).map((d) => domainLabel(copy, d))],
    [rows, domains, copy],
  );

  // Menus close on a click outside them and on Escape (owner, 2026-11-02); opening one closes the others.
  useEffect(() => {
    const closeAll = (keep?: Element | null) =>
      document.querySelectorAll<HTMLDetailsElement>("details.sq-fmenu[open]").forEach((d) => d !== keep && d.removeAttribute("open"));
    const onDown = (e: PointerEvent) => closeAll((e.target as Element | null)?.closest?.("details.sq-fmenu"));
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const open = document.querySelector<HTMLDetailsElement>("details.sq-fmenu[open]");
      if (!open) return;
      open.removeAttribute("open");
      open.querySelector("summary")?.focus();
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <section className="sq-wrap sq-arch-tools" aria-label={copy.search.label}>
        <div className="sq-arch-searchrow">
          <SearchBox
            copy={copy}
            query={query}
            setQuery={setQuery}
            preview={shown.slice(0, 6)}
            total={shown.length}
            suggestions={suggestions}
          />
          <div className="sq-arch-menus">
            <PickMenu
              icon={ICON.region}
              label={copy.regionLabel}
              value={region}
              options={REGIONS.map((r) => ({ key: r, label: r === "all" ? copy.regions.all : copy.regions[r], off: r !== "all" && r !== region && !regionCount[r] }))}
              onPick={(r) => setRegion(r as ArchiveRegionKey)}
            />
            <PickMenu
              icon={ICON.domain}
              label={copy.domainLabel}
              value={domain}
              options={[
                { key: "all", label: copy.allDomains, off: false },
                ...domains.map((d) => ({ key: d, label: domainLabel(copy, d), off: d !== domain && !domainCount[d] })),
              ]}
              onPick={setDomain}
            />
            <SortMenu copy={copy} sort={sort} setSort={setSort} />
            {collections.length > 0 ? <CollectionMenu copy={copy} collections={collections} active={collection ?? null} /> : null}
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

/**
 * A filter as one menu (region, domain). Closed it reads as the dimension ("지역")
 * until a value is picked, then as that value in the accent.
 */
/**
 * The search field with a live preview (owner, 2026-11-02): while typing, the first
 * six matches under the current filters and sort, each a link to its item page, and
 * a last row that closes the preview over the filtered list. Empty and focused, a
 * few example searches. Arrow keys move through the preview, Enter opens the active
 * match, Escape or a click outside closes it. The list below filters as before.
 */
function SearchBox({
  copy,
  query,
  setQuery,
  preview,
  total,
  suggestions,
}: {
  copy: ArchiveCopy;
  query: string;
  setQuery: (q: string) => void;
  preview: ArchiveRow[];
  total: number;
  suggestions: string[];
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const wrap = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const q = query.trim();
  const items = q ? preview : [];

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  const go = (r: ArchiveRow) => {
    setOpen(false);
    trackDetailOpen({ reference: r.id, source: "search-preview" });
    router.push(r.href);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") return setOpen(false);
    if (e.key === "Enter") {
      if (open && active >= 0 && items[active]) {
        e.preventDefault();
        go(items[active]);
      } else setOpen(false);
      return;
    }
    if (!items.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((i) => Math.min(i + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, -1));
    }
  };
  const showPanel = open && (q ? true : suggestions.length > 0);

  return (
    <div className="sq-arch-searchbox" ref={wrap}>
      <label className="sq-arch-search">
        <span className="sq-sr">{copy.search.label}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className="sq-arch-search-i">
          <circle cx="8.75" cy="8.75" r="5.75" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="m13.1 13.1 4.4 4.4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          ref={input}
          type="search"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls="sq-sp"
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 && items[active] ? `sq-sp-${items[active].id}` : undefined}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(-1);
            setOpen(true);
          }}
          onFocus={() => {
            setActive(-1);
            setOpen(true);
          }}
          onKeyDown={onKeyDown}
          placeholder={copy.search.placeholder}
          autoComplete="off"
          spellCheck={false}
        />
        {query ? (
          <button
            type="button"
            className="sq-arch-search-x"
            onClick={() => {
              setQuery("");
              input.current?.focus();
            }}
            aria-label={copy.search.clear}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="m3 3 8 8M11 3l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        ) : null}
      </label>
      {showPanel ? (
        <div className="sq-sp" id="sq-sp">
          {q ? (
            items.length > 0 ? (
              <>
                <ul role="listbox" aria-label={copy.search.label}>
                  {items.map((r, i) => (
                    <li key={r.id} id={`sq-sp-${r.id}`} role="option" aria-selected={i === active}>
                      <Link
                        href={r.href}
                        className="sq-sp-row"
                        tabIndex={-1}
                        onMouseEnter={() => setActive(i)}
                        onClick={() => {
                          setOpen(false);
                          trackDetailOpen({ reference: r.id, source: "search-preview" });
                        }}
                      >
                        {r.logo ? (
                          <BrandLogo logo={r.logo} className="sq-sp-logo" />
                        ) : (
                          <span className="sq-sp-dot" style={{ background: r.palette[0] }} aria-hidden="true" />
                        )}
                        <span className="sq-sp-name">
                          <b lang={r.nameLang}>{r.name}</b>
                          <span>{domainLabel(copy, r.domain)}</span>
                        </span>
                        {r.installs > 0 ? <span className="sq-sp-n">{copy.installs(r.installs)}</span> : null}
                      </Link>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="sq-sp-all"
                  onClick={() => {
                    setOpen(false);
                    input.current?.blur();
                  }}
                >
                  {copy.search.seeAll(total, q)}
                </button>
              </>
            ) : (
              <p className="sq-sp-empty">{copy.empty}</p>
            )
          ) : (
            <div className="sq-sp-suggest">
              <p>{copy.search.suggest}</p>
              <div>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setQuery(s);
                      input.current?.focus();
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

const ICON = {
  region: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.75 8h12.5M8 1.75c1.7 1.8 2.5 3.9 2.5 6.25S9.7 12.45 8 14.25C6.3 12.45 5.5 10.35 5.5 8S6.3 3.55 8 1.75Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  domain: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2" y="2" width="5" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="2" width="5" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2" y="9" width="5" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="9" width="5" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  sort: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M5 2.5v11M2.5 11 5 13.5 7.5 11M11 13.5v-11M8.5 5 11 2.5 13.5 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="sq-fmenu-check">
      <path d="m3.5 8.5 3 3 6-6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

function PickMenu({
  icon,
  label,
  value,
  options,
  onPick,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  options: { key: string; label: string; off: boolean }[];
  onPick: (key: string) => void;
}) {
  const on = value !== "all";
  const current = options.find((o) => o.key === value)?.label ?? label;
  return (
    <details className={on ? "sq-fmenu sq-fmenu-on" : "sq-fmenu"}>
      <summary aria-label={`${label}: ${current}`}>
        <span className="sq-fmenu-i">{icon}</span>
        {on ? current : label}
      </summary>
      <div className="sq-fmenu-list" role="group" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.key}
            type="button"
            aria-pressed={value === o.key}
            disabled={o.off}
            onClick={(e) => {
              onPick(o.key);
              e.currentTarget.closest("details")?.removeAttribute("open");
            }}
          >
            <span>{o.label}</span>
            {value === o.key ? ICON.check : null}
          </button>
        ))}
      </div>
    </details>
  );
}

function SortMenu({ copy, sort, setSort }: { copy: ArchiveCopy; sort: ArchiveSortKey; setSort: (s: ArchiveSortKey) => void }) {
  return (
    <details className="sq-fmenu">
      <summary aria-label={`${copy.sortLabel}: ${copy.sorts[sort]}`}>
        <span className="sq-fmenu-i">{ICON.sort}</span>
        {copy.sorts[sort]}
      </summary>
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
            {sort === s ? ICON.check : null}
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
          <BrandLogo logo={r.logo} className="sq-card-logo" fallback />
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
        <span className="sq-card-foot">
          {/* The reference's own colour tokens (archive-rows.server.ts paletteOf). */}
          {r.palette.length > 0 ? (
            <span className="sq-card-pal" aria-hidden="true">
              {r.palette.map((c) => (
                <i key={c} style={{ background: c }} />
              ))}
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
        </span>
      </Link>
    </li>
  );
}
