"use client";

/**
 * Font Playground — describe-first stage machine.
 *
 *   Stage 1 "hero"      → describe what you want (text chips, no image)
 *   Stage 2 "match"     → ranked catalog candidates with reasons
 *   Stage 3 "customize" → detail modal with size slider + save
 *   Stage 4 "saved"     → usage guide (Web / Figma / DESIGN.md)
 *   Stage 5 "mine"      → list of locally saved fonts
 *   Fallback "browse"   → the old gallery, reachable from hero + match
 *
 * State lives on the view; no URL sync except a shareable `?f=` payload
 * that bootstraps Stage 3 with a preloaded selection. Event pings on
 * every stage transition so we can measure where users fall off.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FONT_CATALOG, allMoods } from "@/lib/fonts/catalog";
import type { FontEntry, FontScript } from "@/lib/fonts/types";
import type { LiveSelection } from "@/lib/fonts/tweaks";
import { countSaved, type SavedFont } from "@/lib/fonts/saved-store";
import { decodeSharedFont } from "@/lib/fonts/share-link";
import { FilterBar, type ScriptFilter } from "@/components/font-playground/filter-bar";
import { Gallery } from "@/components/font-playground/gallery";
import { DetailModal } from "@/components/font-playground/detail-modal";
import { HeroEntry } from "@/components/font-playground/hero-entry";
import { MatchResults } from "@/components/font-playground/match-results";
import { MyFonts } from "@/components/font-playground/my-fonts";
import { UsageGuide } from "@/components/font-playground/usage-guide";
import {
  trackBrowseFilter,
  trackCustomizeOpen,
  trackHeroSubmit,
  trackMatchSelect,
  trackOpen,
  trackQueryRefine,
  trackShareLand,
  trackStageEnter,
} from "@/lib/fonts/analytics";

type Stage = "hero" | "match" | "browse" | "mine" | "saved";

/** Stage 3 (customize) is a modal overlay on top of any stage — tracked
 *  separately so closing it returns the user to their previous stage
 *  rather than forcing a hero jump. */
interface CustomizeState {
  fontId: string;
  initialSelection?: LiveSelection;
  initialPreviewSize?: number;
}

export function FontPlaygroundView() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [stage, setStage] = useState<Stage>("hero");
  const [query, setQuery] = useState("");
  const [sampleText, setSampleText] = useState("");
  /** Scripts the user wants results for. Empty = no filter (both). */
  const [matchScripts, setMatchScripts] = useState<FontScript[]>(["hangul", "latin"]);

  // Browse-stage state (preserved from the original browse-first UX)
  const [script, setScript] = useState<ScriptFilter>("all");
  const [mood, setMood] = useState<string | null>(null);

  // Stage 3 (customize) overlay
  const [customize, setCustomize] = useState<CustomizeState | null>(null);

  // Stage 4 (saved) — populated after a successful Save
  const [savedShown, setSavedShown] = useState<SavedFont | null>(null);

  const [savedCount, setSavedCount] = useState(0);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- SSR hydration flag; intentional run-once post-mount setState to reveal theme toggle without SSR mismatch.
  useEffect(() => setMounted(true), []);

  const moods = useMemo(() => allMoods(), []);

  const browseFonts = useMemo(() => {
    return FONT_CATALOG.filter((f) => {
      if (script === "hangul" && !f.scripts.includes("hangul")) return false;
      if (script === "latin" && !f.scripts.includes("latin")) return false;
      if (script === "mono" && f.family !== "mono") return false;
      if (mood && !f.tags.mood.includes(mood)) return false;
      return true;
    });
  }, [script, mood]);

  const activeScriptForSample: "hangul" | "latin" | "auto" =
    script === "hangul" ? "hangul" : script === "latin" ? "latin" : "auto";

  /** Transition helper. `source` threads through the customize_open funnel
   *  step so we can see which entry path (match / browse / share / saved)
   *  is most productive. */
  function goStage(next: Stage) {
    setStage((prev) => {
      trackStageEnter({ to: next, from: prev });
      return next;
    });
  }

  /** Last-seen match metadata — feeds into fp_match_select so we know
   *  whether the clicked pick came from AI or the deterministic fallback,
   *  without re-querying. Updated by <MatchResults /> via onResult. */
  const [lastMatchKind, setLastMatchKind] = useState<"ai" | "fallback" | null>(null);
  /** Order of pick IDs in the latest match. We read this at click time to
   *  compute the `rank` param without exposing internal state to the
   *  analytics module. */
  const lastPickIds = useRef<string[]>([]);

  function openCustomize(
    font: FontEntry,
    preset?: {
      initialSelection?: LiveSelection;
      initialPreviewSize?: number;
      source?: "match" | "browse" | "share" | "saved";
    },
  ) {
    setCustomize({
      fontId: font.id,
      initialSelection: preset?.initialSelection,
      initialPreviewSize: preset?.initialPreviewSize,
    });
    trackCustomizeOpen({
      fontId: font.id,
      source: preset?.source ?? "match",
    });
  }

  /* eslint-disable react-hooks/set-state-in-effect --
     Run-once on mount: (1) emit the fp_open funnel entry, (2) hydrate
     saved-count from localStorage, (3) hydrate sampleText + open modal
     from ?f= share link. These are textbook "sync external system
     state into React" effects and the documented pattern per
     react.dev/learn/you-might-not-need-an-effect. */
  useEffect(() => {
    trackOpen("direct");
    setSavedCount(countSaved());
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const compact = params.get("f");
    if (!compact) return;
    const shared = decodeSharedFont(compact);
    if (!shared) return;
    const font = FONT_CATALOG.find((f) => f.id === shared.fontId);
    if (!font) return;
    setSampleText(shared.sampleText);
    openCustomize(font, {
      initialSelection: shared.selection,
      initialPreviewSize: shared.previewSize,
      source: "share",
    });
    trackShareLand(shared.fontId);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  function handleQuerySubmit(
    q: string,
    scripts: FontScript[],
    source: "input" | "chip" = "input",
  ) {
    const isRefine = stage === "match";
    setQuery(q);
    setMatchScripts(scripts);
    goStage("match");
    if (isRefine) {
      trackQueryRefine({ queryLen: q.length, scripts });
    } else {
      trackHeroSubmit({ queryLen: q.length, scripts, source });
    }
  }

  function handleMatchPick(id: string) {
    const font = FONT_CATALOG.find((f) => f.id === id);
    if (!font) return;
    const idx = lastPickIds.current.indexOf(id);
    trackMatchSelect({
      fontId: id,
      rank: idx >= 0 ? idx + 1 : 0,
      kind: lastMatchKind ?? "fallback",
      queryLen: query.length,
    });
    openCustomize(font, { source: "match" });
  }

  function handleBrowseFilterChange(s: ScriptFilter) {
    setScript(s);
    trackBrowseFilter({ script: s, mood });
  }

  function handleMoodChange(m: string | null) {
    setMood(m);
    trackBrowseFilter({ script, mood: m });
  }

  function handleBrowseSelect(id: string) {
    const font = FONT_CATALOG.find((f) => f.id === id);
    if (!font) return;
    openCustomize(font, { source: "browse" });
  }

  function handleCustomizeSaved(saved: SavedFont) {
    setSavedShown(saved);
    setCustomize(null);
    setSavedCount(countSaved());
    goStage("saved");
  }

  function handleSavedDone() {
    setSavedShown(null);
    goStage("mine");
  }

  function handleMyFontsOpen(s: SavedFont) {
    const font = FONT_CATALOG.find((f) => f.id === s.fontId);
    if (!font) return;
    setSampleText(s.sampleText);
    openCustomize(font, {
      initialSelection: s.selection,
      initialPreviewSize: s.previewSize,
    });
  }

  const customizeFont = customize
    ? (FONT_CATALOG.find((f) => f.id === customize.fontId) ?? null)
    : null;

  const savedFont = savedShown
    ? (FONT_CATALOG.find((f) => f.id === savedShown.fontId) ?? null)
    : null;

  return (
    <div className="min-h-screen">
      {/* Sticky header — logo-only chrome. The Stage 2 refinement form lives
       *  in the body; saving header pixels for an uncluttered read. Logo
       *  click exits Font Playground to the site root. */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/70 backdrop-blur-xl dark:border-border">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            href="/"
            aria-label="Go to oh-my-design home"
            className="group inline-flex shrink-0 items-center gap-2 rounded-md px-1 py-1 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            {/* Raw <img> intentional: matches the /design-systems header
             *  convention (same assets, same sizes); next/image here caused
             *  a Turbopack CSS-chunking issue during dev. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="oh-my-design"
              className="block h-5 w-auto dark:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.png"
              alt="oh-my-design"
              className="hidden h-5 w-auto dark:block"
            />
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-foreground sm:inline">
              Font Playground
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-1.5">
            {stage !== "mine" && savedCount > 0 && (
              <button
                type="button"
                onClick={() => goStage("mine")}
                className="hidden sm:inline-flex h-8 items-center gap-1 rounded-full border border-border/60 bg-card/50 px-3 text-[11px] font-semibold text-muted-foreground transition-colors hover:text-foreground dark:border-border"
              >
                My saved
                <span className="rounded-full bg-foreground/10 px-1.5 text-[10px] text-foreground">
                  {savedCount}
                </span>
              </button>
            )}
            {mounted && (
              <button
                type="button"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card/50 transition-colors hover:bg-accent dark:border-border"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-3.5 w-3.5" />
                ) : (
                  <Moon className="h-3.5 w-3.5" />
                )}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Stage body */}
      {stage === "hero" && (
        <HeroEntry
          initialQuery={query}
          initialScripts={matchScripts}
          savedCount={savedCount}
          onSubmit={handleQuerySubmit}
          onBrowseCatalog={() => goStage("browse")}
          onOpenSaved={() => goStage("mine")}
        />
      )}

      {stage === "match" && (
        <MatchResults
          query={query}
          scripts={matchScripts}
          onResult={(kind, pickIds) => {
            setLastMatchKind(kind);
            lastPickIds.current = pickIds;
          }}
          onQueryChange={(q, scripts) => {
            setQuery(q);
            setMatchScripts(scripts);
            trackQueryRefine({ queryLen: q.length, scripts });
          }}
          onBack={() => goStage("hero")}
          onSelect={handleMatchPick}
          onBrowseCatalog={() => goStage("browse")}
        />
      )}

      {stage === "browse" && (
        <>
          <section className="mx-auto max-w-6xl px-4 pt-6 pb-4 sm:px-6">
            <div className="mb-1 flex items-center gap-2">
              <button
                type="button"
                onClick={() => goStage("hero")}
                className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Back to describe"
              >
                <ArrowLeft className="h-3 w-3" />
                Back to describe
              </button>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                · Browse catalog
              </span>
            </div>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              All {FONT_CATALOG.length} fonts
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground leading-relaxed">
              Filter by script or mood. Click a tile to customize. Can&apos;t
              find the vibe?{" "}
              <button
                type="button"
                onClick={() => goStage("hero")}
                className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
              >
                Describe it instead
              </button>
              .
            </p>
          </section>
          <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
            <FilterBar
              script={script}
              mood={mood}
              moods={moods}
              onScriptChange={handleBrowseFilterChange}
              onMoodChange={handleMoodChange}
            />
          </section>
          <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              {browseFonts.length} {browseFonts.length === 1 ? "font" : "fonts"}
              {mood ? ` · ${mood}` : ""}
              {script !== "all" ? ` · ${script}` : ""}
            </div>
            <Gallery
              fonts={browseFonts}
              sampleText={sampleText}
              activeScript={activeScriptForSample}
              onSelect={handleBrowseSelect}
            />
          </section>
        </>
      )}

      {stage === "mine" && (
        <MyFonts
          onBack={() => goStage("hero")}
          onOpen={handleMyFontsOpen}
          onBrowseCatalog={() => goStage("browse")}
        />
      )}

      {stage === "saved" && savedShown && savedFont && (
        <UsageGuide
          font={savedFont}
          saved={savedShown}
          onDone={handleSavedDone}
        />
      )}

      {/* Stage 3 — customize modal, overlays whichever stage is behind it */}
      <DetailModal
        font={customizeFont}
        sampleText={sampleText}
        open={customize !== null}
        onOpenChange={(o) => !o && setCustomize(null)}
        onSelectFont={(id) => {
          const next = FONT_CATALOG.find((f) => f.id === id);
          if (next) openCustomize(next);
        }}
        initialSelection={customize?.initialSelection}
        initialPreviewSize={customize?.initialPreviewSize}
        onSaved={handleCustomizeSaved}
        onSampleTextChange={setSampleText}
      />
    </div>
  );
}
