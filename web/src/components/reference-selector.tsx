"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { event, trackRef } from "@/lib/gtag";
import { Loader2, ArrowRight, ChevronDown } from "lucide-react";

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

/** Logo with 3-step fallback chain: primary URL → favicon → initial letter. */
function RefLogo({ refId, refName, primaryUrl, isGh, isLightBg }: { refId: string; refName: string; primaryUrl: string | null; isGh: boolean; isLightBg: boolean }) {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const fallback = getLogoFallbackUrl(refId);
  const src = stage === 0 ? primaryUrl : stage === 1 ? fallback : null;

  if (!src) {
    // Final fallback: initial letter on a tinted ring
    return (
      <div
        className={`flex items-center justify-center rounded-full text-base font-bold ${isGh ? "h-10 w-10" : "h-8 w-8"}`}
        style={{ background: isLightBg ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.18)", color: isLightBg ? "#1e1e1e" : "#ffffff" }}
      >
        {refName.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={refName}
      onError={() => setStage((s) => (s < 2 ? ((s + 1) as 0 | 1 | 2) : 2))}
      className={`object-contain opacity-90 transition-all group-hover:opacity-100 group-hover:scale-110 ${
        isGh || stage > 0 ? "h-10 w-10 rounded-full ring-2 ring-white/20 bg-white/10 p-1" : "h-8 w-8"
      }`}
      loading="lazy"
    />
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

/**
 * Star — the quality mark for Philosophy references. Sits in a
 * monochrome circular badge on the reference card, and decorates the
 * Philosophy filter chip. Rendered in yellow to read as an editorial
 * "highlight / included in the curated set" mark.
 */
function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/**
 * Philosophy — curated reference set with a complete brand philosophy
 * (voice, narrative, principles, personas, states, motion) written
 * against public sources. Surfaces as a small monochrome eye badge
 * on the reference card and a "Philosophy" filter in the selector —
 * same term as the "Include brand philosophy" toggle in the Export
 * step, for vocabulary continuity across the product.
 *
 * When adding an entry here, make sure the reference's DESIGN.md carries
 * the philosophy-layer sections AND a Sources block at the bottom
 * (see spec/omd-v0.1.md for the contract).
 */
// References with a full OmD v0.1 Philosophy Layer — i.e., whose DESIGN.md
// carries "## 10. Voice & Tone" onward. Kept as a static allowlist so the
// builder chip count stays in sync without a runtime scan of the MD files.
// When a new philosophy layer lands in references/*, add the id here.
const PHILOSOPHY_IDS = new Set<string>([
  "airbnb",
  "apple",
  "baemin",
  "claude",
  "dcard",
  "figma",
  "freee",
  "kakao",
  "karrot",
  "line",
  "linear.app",
  "mercari",
  "notion",
  "nvidia",
  "pinkoi",
  "spacex",
  "stripe",
  "tesla",
  "toss",
  "vercel",
]);
import { isLight } from "@/lib/core/color";
import { getLogoUrl, getLogoFallbackUrl, isGitHubLogo } from "@/lib/logos";
import type { RefListItem } from "@/app/builder/page";

export function ReferenceSelector({
  refs,
  onSelect,
  onSelectAsIs,
  loading,
  initialLoading = false,
}: {
  refs: RefListItem[];
  /** Standard click path: go to the customization wizard (step 2). */
  onSelect: (id: string) => void;
  /** Skip-wizard path: go directly to step 3 (preview) with a pure,
   *  unmodified DESIGN.md. No overrides, no stylePreferences applied. */
  onSelectAsIs: (id: string) => void;
  loading: boolean;
  initialLoading?: boolean;
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
  // Mobile chip limits — tuned so the category and country rows each fit on
  // a single line at a ~390 px viewport after the uppercase label, the
  // "All" chip, and the trailing "More ▾" trigger. Empirically 3 chips + All
  // + More wraps ("Backend & DevOps" or "United States" labels are wide),
  // so 2 is the safe single-line upper bound. Long-tail categories and the
  // remaining countries collapse into each row's "More" dropdown.
  const MOBILE_CATEGORY_LIMIT = 2;
  const MOBILE_COUNTRY_LIMIT = 2;
  const primaryCategories = categories.slice(0, MOBILE_CATEGORY_LIMIT);
  const overflowCategories = categories.slice(MOBILE_CATEGORY_LIMIT);

  // Country list: sort by reference count so the densest filter buckets land
  // in the primary chip row on mobile. Matches the category treatment — if we
  // kept the previous "non-US-first alphabetical" sort, the mobile top-3
  // would surface France/Germany/Italy (the least-populated buckets) and push
  // Korea/Japan into the overflow menu, which is the opposite of useful.
  const countryCounts = refs.reduce<Record<string, number>>((acc, r) => {
    if (r.country) acc[r.country] = (acc[r.country] ?? 0) + 1;
    return acc;
  }, {});
  const countries = [...new Set(refs.map((r) => r.country))]
    .filter(Boolean)
    .sort((a, b) => (countryCounts[b] ?? 0) - (countryCounts[a] ?? 0));
  const primaryCountries = countries.slice(0, MOBILE_COUNTRY_LIMIT);
  const overflowCountries = countries.slice(MOBILE_COUNTRY_LIMIT);

  const [filter, setFilter] = useState("");
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [philosophyOnly, setPhilosophyOnly] = useState(false);
  // Skip-wizard mode: when on, clicking a card bypasses customize and jumps
  // to step 3 with the reference's original DESIGN.md untouched.
  const [skipWizard, setSkipWizard] = useState(false);
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
        event("search_reference", { query: value });
      }, 800);
    }
  }, []);

  const filtered = refs.filter((r) => {
    if (philosophyOnly && !PHILOSOPHY_IDS.has(r.id)) return false;
    if (selectedCat && r.category !== selectedCat) return false;
    if (selectedCountry && r.country !== selectedCountry) return false;
    if (filter && !r.name.toLowerCase().includes(filter.toLowerCase())) return false;
    return true;
  });

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
            {refs.length} design systems from real companies.{" "}
            {skipWizard
              ? "Picking one jumps straight to the original DESIGN.md — no customization."
              : "Pick one to start."}
          </p>
        </div>

        <a
          href="/curation"
          onClick={() => event("cta_click", { location: "builder_curation" })}
          className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-border/60 bg-card/50 dark:border-white/10 dark:bg-white/[0.03] px-4 py-3 backdrop-blur transition-all hover:border-primary/40 hover:bg-card dark:hover:bg-white/[0.06] hover:shadow-lg hover:shadow-primary/10 sm:flex-shrink-0"
        >
          {/* Subtle gradient glow on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100 bg-gradient-to-r from-primary/5 via-transparent to-transparent" />

          <div className="relative flex items-center justify-center flex-shrink-0">
            <img src="/logo.png" alt="omd" className="h-6 object-contain block dark:hidden" />
            <img src="/logo-white.png" alt="omd" className="h-6 object-contain hidden dark:block" />
          </div>
          <div className="relative text-left">
            <div className="text-sm font-semibold tracking-tight">Get a personal curation</div>
            <div className="text-xs text-muted-foreground mt-0.5">60 seconds · 12 questions · matched references</div>
          </div>
          <ArrowRight className="relative h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary flex-shrink-0" />
        </a>
      </motion.div>

      {/* Mode selector — compact sliding toggle, modeled on the theme
          switcher rather than a button group. Neutral foreground fill on
          the active pill keeps it visually distinct from the primary-tinted
          category filters below (which use bg-primary). The primary color
          survives only as a tiny dot accent on the "Use as-is" label so the
          brand still reads without stealing the "Active filter" language.
          No helper paragraph: the header description above already swaps
          based on the selected mode, making a second copy redundant.

          Mobile placement (decided 2026-04-22): kept centered in the normal
          flow rather than hoisted into the header or shrunk into an icon.
          Rationale: Use-as-is is a flow-level commitment ("skip the wizard
          entirely"), not a peripheral preference. Burying it behind an icon
          would undo the discoverability work (sliding pill, primary-dot
          accent, description swap). The real mobile chrome wins come from
          CTA/category reduction (research patterns C + D), not from
          shrinking this toggle further. Vertical margin tightened to mb-4
          on mobile to claw back a small amount of space without touching
          the pill geometry. */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mb-4 sm:mb-6 flex justify-center"
      >
        <div
          role="radiogroup"
          aria-label="Pick a builder mode"
          className="relative inline-flex items-center gap-0.5 rounded-full border border-border/50 dark:border-white/10 bg-card/50 dark:bg-white/[0.04] p-1 backdrop-blur-xl shadow-sm"
        >
          {[
            { value: false, label: "Customize" },
            { value: true,  label: "Use as-is" },
          ].map((opt) => {
            const active = skipWizard === opt.value;
            return (
              <button
                key={String(opt.value)}
                role="radio"
                aria-checked={active}
                onClick={() => {
                  if (active) return;
                  setSkipWizard(opt.value);
                  event("skip_wizard_toggle", { on: opt.value });
                }}
                className="relative z-10 rounded-full px-4 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                {active && (
                  <motion.span
                    layoutId="mode-pill"
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", duration: 0.4, bounce: 0.18 }}
                  />
                )}
                <span
                  className={`relative inline-flex items-center gap-1.5 ${
                    active ? "text-background" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt.value && (
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${active ? "bg-primary" : "bg-primary/60"}`}
                    />
                  )}
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Search + Filters */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6 space-y-3"
      >
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={filter}
              onChange={(e) => handleSearch(e.target.value)}
              className="h-10 w-64 rounded-lg border border-border/60 bg-card pl-10 pr-9 text-sm outline-none transition-colors focus:border-foreground/30"
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
          {/* Category chip row.
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
              onClick={() => setSelectedCat(null)}
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
                onClick={() => { const next = selectedCat === cat ? null : cat; setSelectedCat(next); if (next) event("category_filter", { category: next }); }}
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
                onClick={() => { const next = selectedCat === cat ? null : cat; setSelectedCat(next); if (next) event("category_filter", { category: next }); }}
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
                              if (next) event("category_filter", { category: next });
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
        </div>

        {/* Philosophy filter — curated references with a full brand philosophy.
            Row structure mirrors the Country row: prefix label + chip.
            Chip label reads "Included" — these are the refs that include
            the brand-philosophy layer.

            TODO (mobile chrome reduction, ~2026-05-06): after ~2 weeks of
            GA4 data, if `philosophy_filter` + `country_filter` sessions stay
            below ~5% of select sessions, collapse both rows into a single
            "Filter" button that opens a 2-tab bottom sheet (Airbnb-style,
            research pattern B). Keep rows visible in the meantime so we can
            measure real engagement before hiding. */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/70 mr-2">
            Philosophy
          </span>
          <button
            onClick={() => {
              const next = !philosophyOnly;
              setPhilosophyOnly(next);
              event("philosophy_filter", { on: next });
            }}
            aria-pressed={philosophyOnly}
            title="Show only references whose brand philosophy (voice, principles, personas, states) is included and sourced against public references"
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all flex items-center gap-1.5 ${
              philosophyOnly
                ? "bg-foreground/10 text-foreground"
                : "border border-border/30 text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            <StarIcon className="h-3 w-3 text-yellow-400" />
            <span>Included</span>
            <span
              className={`ml-0.5 rounded-full px-1.5 py-px text-[10px] tabular-nums ${
                philosophyOnly ? "bg-foreground/15" : "bg-muted"
              }`}
            >
              {PHILOSOPHY_IDS.size}
            </span>
          </button>
        </div>

        {/* Country filter row — same pattern as the category row.
            - Desktop (sm+): full list visible, wraps if needed.
            - Mobile (<sm): primary top-N flag chips + "More ▾" dropdown.
            Overflow dropdown includes counts so users can tell which
            country buckets are populated before committing to filter. */}
        <div className="relative flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/70 mr-2">
            Country
          </span>
          <button
            onClick={() => setSelectedCountry(null)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
              !selectedCountry
                ? "bg-foreground/10 text-foreground"
                : "border border-border/30 text-muted-foreground hover:text-foreground hover:border-border"
            }`}
          >
            All
          </button>
          {/* Always-visible primary country chips. */}
          {primaryCountries.map((c) => (
            <button
              key={c}
              onClick={() => { const next = selectedCountry === c ? null : c; setSelectedCountry(next); if (next) event("country_filter", { country: next }); }}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedCountry === c
                  ? "bg-foreground/10 text-foreground"
                  : "border border-border/30 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <span aria-hidden>{COUNTRY_FLAGS[c] ?? "🏳️"}</span>
              <span>{shortCountry(c)}</span>
            </button>
          ))}
          {/* Overflow chips — hidden on mobile, visible inline on sm+. */}
          {overflowCountries.map((c) => (
            <button
              key={c}
              onClick={() => { const next = selectedCountry === c ? null : c; setSelectedCountry(next); if (next) event("country_filter", { country: next }); }}
              className={`hidden sm:inline-flex rounded-full px-3 py-1 text-xs font-medium transition-all items-center gap-1.5 ${
                selectedCountry === c
                  ? "bg-foreground/10 text-foreground"
                  : "border border-border/30 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <span aria-hidden>{COUNTRY_FLAGS[c] ?? "🏳️"}</span>
              <span>{shortCountry(c)}</span>
            </button>
          ))}
          {/* Mobile-only "More" dropdown for overflow countries. */}
          {overflowCountries.length > 0 && (
            <div ref={countryMoreRef} className="relative sm:hidden">
              <button
                onClick={() => setCountryMoreOpen((v) => !v)}
                aria-expanded={countryMoreOpen}
                aria-haspopup="menu"
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all inline-flex items-center gap-1 ${
                  selectedCountry && overflowCountries.includes(selectedCountry)
                    ? "bg-foreground/10 text-foreground"
                    : "border border-border/30 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {selectedCountry && overflowCountries.includes(selectedCountry) ? (
                  <>
                    <span aria-hidden>{COUNTRY_FLAGS[selectedCountry] ?? "🏳️"}</span>
                    <span>{shortCountry(selectedCountry)}</span>
                  </>
                ) : (
                  <span>More</span>
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
                    className="absolute right-0 top-full z-20 mt-1 min-w-[180px] overflow-hidden rounded-lg border border-border/60 dark:border-border bg-card shadow-lg backdrop-blur"
                  >
                    {overflowCountries.map((c) => {
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
                            if (next) event("country_filter", { country: next });
                          }}
                          className={`flex w-full items-center gap-2 px-3 py-2 text-left text-xs font-medium transition-colors ${
                            active ? "bg-foreground/10 text-foreground" : "text-foreground hover:bg-muted"
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
          )}
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

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((ref, i) => {
            const logoUrl = getLogoUrl(ref.id, isLight(ref.primaryColor) ? "000000" : "ffffff");
            return (
              <motion.button
                key={ref.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: Math.min(i * 0.02, 0.3) }}
                onClick={() => {
                  event("reference_select", { reference: ref.id, category: ref.category, mode: skipWizard ? "as_is" : "customize" });
                  trackRef("select", ref.id);
                  if (skipWizard) onSelectAsIs(ref.id);
                  else onSelect(ref.id);
                }}
                disabled={loading}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/40 bg-card/30 text-left backdrop-blur transition-all hover:bg-card/80 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 dark:border-white/10 dark:bg-card/50 dark:hover:border-white/20 dark:hover:shadow-white/5 disabled:opacity-50"
              >
                {/* Color area with logo */}
                <div
                  className="relative flex h-24 items-center justify-center border-b border-transparent dark:border-white/10"
                  style={{ background: ref.primaryColor }}
                >
                  <RefLogo
                    refId={ref.id}
                    refName={ref.name}
                    primaryUrl={logoUrl}
                    isGh={isGitHubLogo(ref.id)}
                    isLightBg={isLight(ref.primaryColor)}
                  />
                  {/* Hex badge */}
                  <span className="absolute bottom-2 left-2 rounded bg-black/20 px-1.5 py-0.5 font-mono text-[9px] text-white/80 backdrop-blur-sm">
                    {ref.primaryColor}
                  </span>
                  {/* Philosophy mark — always visible on qualifying cards.
                      Glassmorphism: heavy backdrop blur + light tint, no border.
                      Floats over any swatch color with a soft floating shadow. */}
                  {PHILOSOPHY_IDS.has(ref.id) && (
                    <span
                      className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-black/15 backdrop-blur-xl shadow-[0_4px_12px_rgba(0,0,0,0.18)]"
                      title="Philosophy — brand philosophy sourced against public references"
                      aria-label="Philosophy"
                    >
                      <StarIcon className="h-3 w-3 text-yellow-400" />
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

      {/* Loading skeleton */}
      {initialLoading && refs.length === 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-border/40 dark:border-border overflow-hidden animate-pulse">
              <div className="h-24 bg-muted/50" />
              <div className="px-3 py-2.5">
                <div className="h-3.5 w-20 bg-muted/50 rounded mb-1.5" />
                <div className="h-2.5 w-14 bg-muted/30 rounded" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* True empty state (after loading, with filter applied) */}
      {filtered.length === 0 && !loading && !initialLoading && (
        <div className="flex flex-col items-center py-20 text-center">
          <SearchIcon className="h-10 w-10 text-muted-foreground/30 mb-3" />
          <div className="text-muted-foreground">No references found</div>
        </div>
      )}
    </div>
  );
}
