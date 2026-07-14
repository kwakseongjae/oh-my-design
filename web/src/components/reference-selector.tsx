"use client";

import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackReferenceSelect, trackSearch, trackCategoryFilter, trackCountryFilter, trackColorFilter, trackHotFilter, trackSortChange } from "@/lib/builder/analytics";
import { sortRefs, SORT_MODES, resolveVisitorCountry, type SortMode } from "@/lib/builder/sort-refs";
import { buildColorConceptGroups, colorFamilyForHex, type ColorFilter } from "@/lib/builder/color-family";
import { Loader2, ChevronDown, Download } from "lucide-react";
import { REFERENCE_COUNT } from "@/lib/catalog-count";

/** Inline SVG magnifier — bypasses lucide-react@1.8.0 rendering issues. */
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

import { BrandNameplateLogo } from "@/components/brand-logo";
import { isNewRef } from "@/lib/new-refs";
import { StatusBadge } from "@/components/status-badge";
import { refMatchesQuery } from "@/lib/search-aliases";
import type { RefListItem } from "@/app/builder/page";

/** Stable signature for a grid view (sort + active filters). Used to cache which
 *  views have already been computed so repeat visits swap instantly (no skeleton). */
function viewSig(sort: SortMode, cat: string | null, country: string | null, color: ColorFilter | null, hot: boolean): string {
  return `${sort}|${cat ?? ""}|${country ?? ""}|${color ?? ""}|${hot ? 1 : 0}`;
}

/** Placeholder grid shown during initial load and while a sort/filter settles —
 *  matches the real card layout so the swap doesn't shift the page. */
function SkeletonGrid({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-border/40 animate-pulse dark:border-border">
          <div className="h-24 bg-muted/50" />
          <div className="px-3 py-2.5">
            <div className="mb-1.5 h-3.5 w-20 rounded bg-muted/50" />
            <div className="h-2.5 w-14 rounded bg-muted/30" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ReferenceSelector({
  refs,
  onSelect,
  loading,
  initialLoading = false,
  selectedColor,
  onColorChange,
}: {
  refs: RefListItem[];
  /** Picking a reference generates it as-is and jumps to the preview/export
   *  step. Customize is a demoted, opt-in tweak reached from there. */
  onSelect: (id: string) => void;
  loading: boolean;
  initialLoading?: boolean;
  selectedColor: ColorFilter | null;
  onColorChange: (color: ColorFilter | null) => void;
}) {
  // Sort categories by reference count (most-populated first) so the visible
  // short list on mobile surfaces the highest-value chips. Long-tail
  // categories fall into the "More" overflow menu. Desktop still renders
  // the full list on a single row, so sort order equally benefits that path
  // (users scan left-to-right and hit the densest buckets first).
  const categoryCounts = refs.reduce<Record<string, number>>((acc, r) => {
    acc[r.category] = (acc[r.category] ?? 0) + 1;
    return acc;
  }, {});
  const categories = [...new Set(refs.map((r) => r.category))]
    .sort((a, b) => (categoryCounts[b] ?? 0) - (categoryCounts[a] ?? 0));
  // Mobile chip limit for categories — kept at 2 inline chips so the row
  // fits a single line at ~390 px after "All" + the "More ▾" trigger.
  // Country no longer needs an analogous limit; it's a single dropdown
  // button across all viewports.
  const MOBILE_CATEGORY_LIMIT = 2;
  const primaryCategories = categories.slice(0, MOBILE_CATEGORY_LIMIT);
  const overflowCategories = categories.slice(MOBILE_CATEGORY_LIMIT);

  // Country list — sorted by reference count desc so the densest buckets
  // surface first inside the dropdown. Country no longer renders inline
  // chips on either viewport (one peer dropdown across desktop + mobile),
  // so the previous primary/overflow split is gone.
  const countryCounts = refs.reduce<Record<string, number>>((acc, r) => {
    if (r.country) acc[r.country] = (acc[r.country] ?? 0) + 1;
    return acc;
  }, {});
  const countries = [...new Set(refs.map((r) => r.country))]
    .filter(Boolean)
    .sort((a, b) => (countryCounts[b] ?? 0) - (countryCounts[a] ?? 0));

  const [filter, setFilter] = useState("");
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [hotOnly, setHotOnly] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("recommend");
  // Visitor region for the locale-aware "Recommended" sort. Seed from the
  // browser language immediately (no flash), then refine via /api/geo (IP).
  const [visitorCountry, setVisitorCountry] = useState<string>(() =>
    resolveVisitorCountry(null, typeof navigator !== "undefined" ? navigator.language : undefined),
  );
  useEffect(() => {
    let alive = true;
    fetch("/api/geo")
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (alive && j?.country) setVisitorCountry(resolveVisitorCountry(j.country, navigator.language));
      })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  // Sort/filter changes re-order the grid. Rather than animate cards flying to
  // new positions (chaotic), briefly show a skeleton then render the settled
  // order — BUT only the FIRST time a given view is shown. Repeat visits to a
  // view we've already computed swap instantly (cached). Fired explicitly from
  // the discrete sort + chip-filter handlers — NOT on live search (no
  // per-keystroke flash) and NOT on the async geo resolve.
  const [recomputing, setRecomputing] = useState(false);
  const recomputeTimer = useRef<ReturnType<typeof setTimeout>>(null);
  // Seed with the initial view so returning to it never re-skeletons.
  const seenViews = useRef<Set<string>>(new Set([viewSig("recommend", null, null, null, false)]));
  const flagRecompute = useCallback((sig: string) => {
    if (seenViews.current.has(sig)) return; // already computed → instant swap
    seenViews.current.add(sig);
    setRecomputing(true);
    if (recomputeTimer.current) clearTimeout(recomputeTimer.current);
    recomputeTimer.current = setTimeout(() => setRecomputing(false), 260);
  }, []);
  // HOT is resolved server-side and arrives on each ref as `ref.hot`, so the
  // grid is already hot-first + badged on first paint — no async reflow.
  const hasHot = refs.some((r) => r.hot);
  // Controls the mobile overflow dropdowns. Two independent menus — one for
  // the category "More ▾" trigger, one for the country "More ▾" trigger.
  const [catMoreOpen, setCatMoreOpen] = useState(false);
  const [countryMoreOpen, setCountryMoreOpen] = useState(false);
  const catMoreRef = useRef<HTMLDivElement>(null);
  const countryMoreRef = useRef<HTMLDivElement>(null);
  const searchTimer = useRef<ReturnType<typeof setTimeout>>(null);

  // Dismiss the overflow dropdowns on outside click so the chip rows don't
  // leave a stray open menu when the user taps elsewhere.
  useEffect(() => {
    if (!catMoreOpen && !countryMoreOpen) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (catMoreOpen && catMoreRef.current && !catMoreRef.current.contains(t)) {
        setCatMoreOpen(false);
      }
      if (countryMoreOpen && countryMoreRef.current && !countryMoreRef.current.contains(t)) {
        setCountryMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [catMoreOpen, countryMoreOpen]);

  const COUNTRY_FLAGS: Record<string, string> = {
    "United States": "🇺🇸",
    Korea: "🇰🇷",
    Taiwan: "🇹🇼",
    Japan: "🇯🇵",
    France: "🇫🇷",
    Italy: "🇮🇹",
    Germany: "🇩🇪",
    UK: "🇬🇧",
  };

  // Short labels for chips. Most country names are already short enough; only
  // "United States" is long enough to push the chip row past a 390 px line on
  // mobile, so abbreviate it to "US" (matching the existing "UK" key). Full
  // names still appear in the overflow dropdown for disambiguation.
  const COUNTRY_SHORT: Record<string, string> = {
    "United States": "US",
  };
  const shortCountry = (c: string) => COUNTRY_SHORT[c] ?? c;
  // `countries` above is already sorted by reference count desc, which is the
  // mobile primary/overflow split we want. Desktop renders the full list in
  // that same count order — densest filter buckets first, consistent with the
  // category row.

  const handleSearch = useCallback((value: string) => {
    setFilter(value);
    if (searchTimer.current) clearTimeout(searchTimer.current);
    if (value.length >= 2) {
      searchTimer.current = setTimeout(() => {
        trackSearch({ queryLen: value.length, hasResults: refs.some((r) => refMatchesQuery(r, value)) });
      }, 800);
    }
  }, [refs]);

  const colorConcepts = useMemo(
    () => buildColorConceptGroups(refs.map((ref) => ref.primaryColor)),
    [refs],
  );
  const selectedColorFamilies = useMemo(
    () => colorConcepts.find((concept) => concept.key === selectedColor)?.families
      ?? (selectedColor && selectedColor !== "etc" ? [selectedColor] : []),
    [colorConcepts, selectedColor],
  );

  // Filter, then sort by the chosen mode + visitor locale. Sorting is
  // client-side because "Recommended" is locale-aware (see lib/builder/sort-refs).
  const filtered = sortRefs(
    refs.filter((r) => {
      if (hotOnly && !r.hot) return false;
      if (selectedCat && r.category !== selectedCat) return false;
      if (selectedCountry && r.country !== selectedCountry) return false;
      if (selectedColor) {
        const family = colorFamilyForHex(r.primaryColor);
        if (!family || !selectedColorFamilies.includes(family)) return false;
      }
      if (filter && !refMatchesQuery(r, filter)) return false;
      return true;
    }),
    sortMode,
    visitorCountry,
  );

  const handleSortChange = (mode: SortMode) => {
    setSortMode(mode);
    trackSortChange(mode);
    flagRecompute(viewSig(mode, selectedCat, selectedCountry, selectedColor, hotOnly));
  };

  return (
    <div>
      {/* Header with quiz CTA */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Choose a reference</h2>
          <p className="mt-2 text-muted-foreground">
            {REFERENCE_COUNT} design systems from real companies. Picking one
            jumps straight to the original DESIGN.md.
          </p>
        </div>
      </motion.div>

      {/* Mode selector — compact sliding toggle, modeled on the theme
          switcher rather than a button group. Neutral foreground fill on
          the active pill keeps it visually distinct from the primary-tinted
          category filters below (which use bg-primary). The primary color
          survives only as a tiny dot accent on the "Use as-is" label so the
          brand still reads without stealing the "Active filter" language.
          No helper paragraph: the header description above already swaps
          based on the selected mode, making a second copy redundant.

          Layout (2026-05-07): mode toggle was previously a centered
          standalone row taking full width — visually heavy for what is a
          binary preference. Moved inline with the search input on the same
          row (search left, toggle right via justify-between). On mobile
          the row wraps and the toggle drops below the search, preserving
          discoverability without the dedicated row. Geometry of the pill
          itself is unchanged (still bg-foreground active fill + primary
          dot accent on Use-as-is). */}

      {/* Search + Filters
          Restructured 2026-05-07: previously search shared a row with the
          category chips and made the input feel small, while Philosophy and
          Country sat on their own labeled rows ("PHILOSOPHY" / "COUNTRY"
          uppercase prefixes) which created a two-tier hierarchy that looked
          disjointed (Dribbble pattern). New layout — research patterns
          B+D hybrid (see Awwwards / GitHub Issues filter bar):
            Row 1: Search input + mode toggle on opposite ends of the row.
            Row 2: All filter chips at one peer level — categories inline,
                   then Philosophy toggle, then Country as a single dropdown
                   button (collapsing 8 country chips into one trigger).
          Active state for every filter chip is unified to bg-primary so
          they speak one visual language; mode toggle keeps its neutral
          bg-foreground so it stays distinct from filter selection. */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 space-y-3"
      >
        {/* Row 1 — Search (left, anchors the row) + mode toggle (right). */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="relative w-full max-w-md flex-1 min-w-[260px]">
            <input
              type="text"
              placeholder="Search references..."
              value={filter}
              onChange={(e) => handleSearch(e.target.value)}
              className="h-11 w-full rounded-lg border border-border/60 bg-card pl-10 pr-9 text-sm outline-none transition-colors focus:border-foreground/30"
            />
            <SearchIcon className="pointer-events-none absolute left-3 top-1/2 z-10 h-[18px] w-[18px] -translate-y-1/2 text-foreground/80" />
            {filter && (
              <button
                type="button"
                onClick={() => setFilter("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 z-10 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <XIcon className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Sort mode — Recommended (locale-aware) is default. Swift-style
              segmented control: a single glass pill slides between options via
              framer-motion shared layout (`layoutId`). Glassmorphism container +
              primary pill. */}
          <div
            className="relative flex shrink-0 items-center gap-0.5 rounded-xl border border-white/20 bg-white/10 p-1 shadow-sm ring-1 ring-inset ring-white/10 backdrop-blur-xl backdrop-saturate-150 dark:border-white/10 dark:bg-white/5"
            role="group"
            aria-label="Sort references"
          >
            {SORT_MODES.map(({ mode, label }) => {
              const active = sortMode === mode;
              return (
                <button
                  key={mode}
                  type="button"
                  onClick={() => handleSortChange(mode)}
                  aria-pressed={active}
                  className={`relative rounded-lg px-3 py-1.5 text-xs font-medium transition-colors duration-200 ${
                    active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="sortPill"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      className="absolute inset-0 rounded-lg bg-primary shadow-md shadow-primary/25 ring-1 ring-inset ring-white/25"
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 2 — Unified facet bar: categories + philosophy + country.
            All chips share rounded-full / px-3 / py-1.5 / bg-primary-active. */}
        <div className="flex flex-wrap items-center gap-1.5">
          {/* Category sub-group.
              - Desktop (sm+): full list is visible with `flex-wrap`, same
                as before.
              - Mobile (<sm): only the top-5 chips render inline and the
                long-tail collapses into a "More ▾" dropdown to keep the
                chip row to a single line (see MOBILE_CATEGORY_LIMIT).
              The "All" chip is always rendered first, regardless of size.
              If the current selection is inside the overflow bucket on
              mobile, the "More" trigger shows that selected category's
              label instead of "More" so the state stays legible. */}
          <div className="relative flex flex-wrap gap-1.5">
            <button
              onClick={() => { setSelectedCat(null); flagRecompute(viewSig(sortMode, null, selectedCountry, selectedColor, hotOnly)); }}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                !selectedCat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              All
            </button>
            {/* Always-visible primary chips. */}
            {primaryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { const next = selectedCat === cat ? null : cat; setSelectedCat(next); if (next) trackCategoryFilter(next); flagRecompute(viewSig(sortMode, next, selectedCountry, selectedColor, hotOnly)); }}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedCat === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {cat}
              </button>
            ))}
            {/* Overflow chips — hidden on mobile (dropdown below handles them),
                visible inline on sm+. */}
            {overflowCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { const next = selectedCat === cat ? null : cat; setSelectedCat(next); if (next) trackCategoryFilter(next); flagRecompute(viewSig(sortMode, next, selectedCountry, selectedColor, hotOnly)); }}
                className={`hidden sm:inline-flex rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedCat === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {cat}
              </button>
            ))}
            {/* Mobile-only "More" dropdown for overflow categories. */}
            {overflowCategories.length > 0 && (
              <div ref={catMoreRef} className="relative sm:hidden">
                <button
                  onClick={() => setCatMoreOpen((v) => !v)}
                  aria-expanded={catMoreOpen}
                  aria-haspopup="menu"
                  className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all inline-flex items-center gap-1 ${
                    selectedCat && overflowCategories.includes(selectedCat)
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
                  }`}
                >
                  {selectedCat && overflowCategories.includes(selectedCat) ? selectedCat : "More"}
                  <ChevronDown className={`h-3 w-3 transition-transform ${catMoreOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {catMoreOpen && (
                    <motion.div
                      role="menu"
                      initial={{ opacity: 0, y: -4, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.98 }}
                      transition={{ duration: 0.12 }}
                      // Anchored to the trigger's right edge so the menu opens
                      // inward (toward the viewport center). `left-0` would
                      // push the menu off the right edge of the screen because
                      // the "More" chip sits at the tail of the row on mobile.
                      className="absolute right-0 top-full z-20 mt-1 min-w-[160px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg border border-border/60 dark:border-border bg-card shadow-lg backdrop-blur"
                    >
                      {overflowCategories.map((cat) => {
                        const active = selectedCat === cat;
                        return (
                          <button
                            key={cat}
                            role="menuitemradio"
                            aria-checked={active}
                            onClick={() => {
                              const next = active ? null : cat;
                              setSelectedCat(next);
                              setCatMoreOpen(false);
                              if (next) trackCategoryFilter(next);
                              flagRecompute(viewSig(sortMode, next, selectedCountry, selectedColor, hotOnly));
                            }}
                            className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs font-medium transition-colors ${
                              active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                            }`}
                          >
                            <span className="flex-1">{cat}</span>
                            <span className="text-[10px] text-muted-foreground tabular-nums">
                              {categoryCounts[cat] ?? 0}
                            </span>
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Vertical separator — visually splits categories from country
              filter. Hidden when the row wraps so the divider doesn't
              strand at the start of a new line. */}
          <span aria-hidden className="hidden sm:inline-block h-5 w-px bg-border/60 mx-1" />

          {/* Country + Hot grouped into one non-wrapping flex unit so HOT
              always sits beside Country and the pair wraps together. HOT used
              to be a separate flex item at the tail of the facet row, so on
              mobile it stranded alone on its own wrapped line and read as
              "missing"; keeping it next to Country fixes that. */}
          <div className="flex items-center gap-1.5">
          {/* Country — collapsed from a row of 8 inline flag chips into a
              single dropdown trigger, peer-shaped with the other filter
              chips. Was previously an entire labeled row ("COUNTRY ...");
              that row plus the prefix label is what created the broken
              hierarchy the user flagged. The dropdown now serves all
              viewports (no more sm:hidden split) and lists every country
              with its count so users can scan density before filtering. */}
          <div ref={countryMoreRef} className="relative">
            <button
              onClick={() => setCountryMoreOpen((v) => !v)}
              aria-expanded={countryMoreOpen}
              aria-haspopup="menu"
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all inline-flex items-center gap-1.5 ${
                selectedCountry
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {selectedCountry ? (
                <>
                  <span aria-hidden>{COUNTRY_FLAGS[selectedCountry] ?? "🏳️"}</span>
                  <span>{shortCountry(selectedCountry)}</span>
                </>
              ) : (
                <span>Country</span>
              )}
              <ChevronDown className={`h-3 w-3 transition-transform ${countryMoreOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {countryMoreOpen && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -4, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4, scale: 0.98 }}
                  transition={{ duration: 0.12 }}
                  className="absolute left-0 top-full z-20 mt-1 min-w-[200px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-lg border border-border/60 dark:border-border bg-card shadow-lg backdrop-blur"
                >
                  {/* "All" reset row */}
                  <button
                    role="menuitemradio"
                    aria-checked={!selectedCountry}
                    onClick={() => {
                      setSelectedCountry(null);
                      setCountryMoreOpen(false);
                      flagRecompute(viewSig(sortMode, selectedCat, null, selectedColor, hotOnly));
                    }}
                    className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs font-medium transition-colors ${
                      !selectedCountry ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                    }`}
                  >
                    <span className="flex-1">All countries</span>
                  </button>
                  {countries.map((c) => {
                    const active = selectedCountry === c;
                    return (
                      <button
                        key={c}
                        role="menuitemradio"
                        aria-checked={active}
                        onClick={() => {
                          const next = active ? null : c;
                          setSelectedCountry(next);
                          setCountryMoreOpen(false);
                          if (next) trackCountryFilter(next);
                          flagRecompute(viewSig(sortMode, selectedCat, next, selectedColor, hotOnly));
                        }}
                        className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs font-medium transition-colors ${
                          active ? "bg-primary/10 text-primary" : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <span aria-hidden>{COUNTRY_FLAGS[c] ?? "🏳️"}</span>
                        <span className="flex-1">{c}</span>
                        <span className="text-[10px] text-muted-foreground tabular-nums">
                          {countryCounts[c] ?? 0}
                        </span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* HOT toggle — collect just the most-selected references. Warm
              ember fill when active so it reads as "Hot" rather than borrowing
              the primary filter language used by category/country. Only shown
              when the response carries at least one hot ref. */}
          {hasHot && (
            <button
              onClick={() => { const next = !hotOnly; setHotOnly(next); trackHotFilter(next); flagRecompute(viewSig(sortMode, selectedCat, selectedCountry, selectedColor, next)); }}
              aria-pressed={hotOnly}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                hotOnly
                  ? "text-white shadow-sm"
                  : "border border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
              style={
                hotOnly
                  ? { background: "linear-gradient(135deg, #fb923c, #f43f5e)", border: "1px solid transparent" }
                  : undefined
              }
            >
              <svg viewBox="0 0 20 20" width="13" height="13" aria-hidden="true"
                fill={hotOnly ? "currentColor" : "#f43f5e"}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.989 5.989 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"
                />
              </svg>
              Hot
            </button>
          )}
          </div>
        </div>

        <div className="space-y-2 pt-1" aria-label="Filter references by primary color family">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium text-foreground">Color concept</span>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1" role="radiogroup" aria-label="Color concept">
            <button
              type="button"
              role="radio"
              aria-checked={!selectedColor}
              onClick={() => {
                onColorChange(null);
                flagRecompute(viewSig(sortMode, selectedCat, selectedCountry, null, hotOnly));
              }}
              className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                !selectedColor
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border/40 text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              All colors
            </button>
            {colorConcepts.map((group) => {
              const active = selectedColor === group.key;
              return (
                <button
                  key={group.key}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => {
                    const next = active ? null : group.key;
                    onColorChange(next);
                    if (next) trackColorFilter(next);
                    flagRecompute(viewSig(sortMode, selectedCat, selectedCountry, next, hotOnly));
                  }}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border/40 text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  <span className="flex -space-x-1" aria-hidden="true">
                    {group.samples.map((sample) => (
                      <span
                        key={sample}
                        className="h-3 w-3 rounded-full border border-background/70"
                        style={{ backgroundColor: sample }}
                      />
                    ))}
                  </span>
                  <span>{group.label}</span>
                  <span className={active ? "text-primary-foreground/70" : "text-muted-foreground/70"}>{group.count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/60 backdrop-blur-sm">
          <div className="flex items-center gap-3 rounded-xl border bg-card px-6 py-4 shadow-lg">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            <span className="text-sm font-medium">Loading design system...</span>
          </div>
        </div>
      )}

      {/* Grid — show a skeleton during initial load OR while a sort/filter
          settles, then render the cards. We swap via skeleton instead of
          animating cards to new positions (the old `layout` FLIP looked chaotic). */}
      {(initialLoading && refs.length === 0) || recomputing ? (
        // Size the skeleton to the result count so its height matches the cards
        // it replaces — no layout shift / page push during the swap.
        <SkeletonGrid count={initialLoading ? 12 : filtered.length || 12} />
      ) : (
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((ref, i) => {
            return (
              <motion.button
                key={ref.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: Math.min(i * 0.02, 0.3) }}
                onClick={() => {
                  trackReferenceSelect({ reference: ref.id, category: ref.category });
                  onSelect(ref.id);
                }}
                disabled={loading}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/40 bg-card/30 text-left backdrop-blur transition-all hover:bg-card/80 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 dark:border-white/10 dark:bg-card/50 dark:hover:border-white/20 dark:hover:shadow-white/5 disabled:opacity-50"
              >
                {/* Color area with logo */}
                <div
                  className="relative flex h-24 items-center justify-center border-b border-transparent dark:border-white/10"
                  style={{ background: ref.primaryColor }}
                >
                  {/* Neutral nameplate (shared with the directory cards) so the
                      logo stays legible even when it matches ref.primaryColor —
                      e.g. Toss's blue favicon on its blue tile (issue #19). */}
                  <BrandNameplateLogo
                    refId={ref.id}
                    name={ref.name}
                    surface="brand"
                    size="lg"
                    className="transition-transform duration-200 group-hover:scale-105"
                  />
                  {/* Hover overlay — picking a card generates the reference
                      as-is and jumps straight to export; surface that intent. */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/55 opacity-0 backdrop-blur-[2px] transition-opacity group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-black shadow-sm">
                      <Download className="h-3 w-3" />
                      Export
                    </span>
                  </div>
                  {/* Hex badge */}
                  <span className="absolute bottom-2 left-2 rounded bg-black/20 px-1.5 py-0.5 font-mono text-[9px] text-white/80 backdrop-blur-sm">
                    {ref.primaryColor}
                  </span>
                  {/* NEW (7-day window) + HOT (top-5 by select) — glass badges,
                      top-right of the brand color header. */}
                  {(ref.hot || isNewRef(ref.id)) && (
                    <span className="absolute right-2 top-2 flex items-center gap-1">
                      {ref.hot && <StatusBadge kind="hot" />}
                      {isNewRef(ref.id) && <StatusBadge kind="new" />}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="px-3 py-2.5">
                  <div className="text-sm font-medium leading-tight truncate">{ref.name}</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">{ref.category}</div>
                </div>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
      )}

      {/* True empty state (after loading, with filter applied) */}
      {filtered.length === 0 && !loading && !initialLoading && !recomputing && (
        <div className="flex flex-col items-center py-20 text-center">
          <SearchIcon className="h-10 w-10 text-muted-foreground/30 mb-3" />
          <div className="text-muted-foreground">No references found</div>
        </div>
      )}
    </div>
  );
}
