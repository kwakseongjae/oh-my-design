/**
 * Font Playground — GA4 event taxonomy.
 *
 * Single source of truth for every tracked event. Typed helpers keep
 * parameter names consistent and make the funnel legible.
 *
 * NAMING
 *   All events are prefixed `fp_` (`fp_*`). Pattern: `fp_<surface>_<action>`.
 *   Parameter values are snake_case. Avoid high-cardinality strings
 *   (raw user queries, font IDs are fine — they're finite).
 *
 * PRIMARY FUNNEL
 *   fp_open           — user lands on /font-playground
 *   fp_hero_submit    — query submitted (input or suggestion chip)
 *   fp_match_view     — match results rendered (AI or fallback)
 *   fp_match_select   — a pick is clicked
 *   fp_customize_open — customize modal opens
 *   fp_customize_save — font saved to local storage
 *   fp_export_copy    — CSS / DESIGN.md / share copied (any surface)
 *
 *   Each step fires at most once per interaction; in GA4, explore them as
 *   a Funnel Exploration in the order above to measure drop-off.
 *
 * SECONDARY EVENTS
 *   fp_stage_enter, fp_hero_chip_click, fp_match_fallback,
 *   fp_browse_filter, fp_modal_tweak, fp_modal_similar_pick,
 *   fp_modal_reset, fp_saved_open, fp_saved_delete, fp_external_click,
 *   fp_share_land
 */

import { event } from "@/lib/gtag";
import type { FontScript } from "./types";

export type FpStage = "hero" | "match" | "browse" | "mine" | "saved";

/** How the user arrived at the Font Playground or opened an entry. */
export type FpSource = "direct" | "share" | "browse_modal" | "catalog";

/** Which surface the copy-action fired on — lets us rank the most-used
 *  export channel across the three places a user can copy from. */
export type FpExportSurface = "modal" | "guide" | "saved";

export type FpExportChannel = "css" | "designmd" | "share";

export type FpMatchKind = "ai" | "fallback";

export type FpFallbackReason =
  | "no_api_key"
  | "rate_limited"
  | "upstream_error"
  | "no_picks"
  | "network";

export type FpTweakKind =
  | "color"
  | "weight"
  | "size"
  | "spacing"
  | "lineheight"
  | "axis";

function scriptParam(scripts: FontScript[]): string {
  if (scripts.length === 0) return "any";
  return [...scripts].sort().join("+");
}

/** How long a string is without leaking the string itself. Bucketed to
 *  keep cardinality low in GA4. */
function lenBucket(n: number): string {
  if (n === 0) return "0";
  if (n <= 5) return "1-5";
  if (n <= 15) return "6-15";
  if (n <= 30) return "16-30";
  if (n <= 60) return "31-60";
  if (n <= 120) return "61-120";
  return "121+";
}

/* ─────────────────────────── primary funnel ─────────────────────────── */

export function trackOpen(source: FpSource) {
  event("fp_open", { source });
}

export function trackHeroSubmit(args: {
  queryLen: number;
  scripts: FontScript[];
  source: "input" | "chip";
}) {
  event("fp_hero_submit", {
    query_len: args.queryLen,
    query_len_bucket: lenBucket(args.queryLen),
    scripts: scriptParam(args.scripts),
    source: args.source,
  });
}

export function trackMatchView(args: {
  kind: FpMatchKind;
  pickCount: number;
  queryLen: number;
  scripts: FontScript[];
  fallbackReason?: FpFallbackReason;
}) {
  event("fp_match_view", {
    kind: args.kind,
    pick_count: args.pickCount,
    query_len_bucket: lenBucket(args.queryLen),
    scripts: scriptParam(args.scripts),
    ...(args.fallbackReason ? { fallback_reason: args.fallbackReason } : {}),
  });
}

export function trackMatchSelect(args: {
  fontId: string;
  rank: number;
  kind: FpMatchKind;
  queryLen: number;
}) {
  event("fp_match_select", {
    reference: args.fontId,
    rank: args.rank,
    kind: args.kind,
    query_len_bucket: lenBucket(args.queryLen),
  });
}

export function trackCustomizeOpen(args: {
  fontId: string;
  source: "match" | "browse" | "share" | "saved";
}) {
  event("fp_customize_open", {
    reference: args.fontId,
    source: args.source,
  });
}

export function trackCustomizeSave(args: {
  fontId: string;
  hasCustomizations: boolean;
  nameLen: number;
}) {
  event("fp_customize_save", {
    reference: args.fontId,
    has_customizations: args.hasCustomizations,
    name_len_bucket: lenBucket(args.nameLen),
  });
}

export function trackExportCopy(args: {
  channel: FpExportChannel;
  surface: FpExportSurface;
  fontId: string;
}) {
  event("fp_export_copy", {
    channel: args.channel,
    surface: args.surface,
    reference: args.fontId,
  });
}

/* ─────────────────────────── secondary events ────────────────────────── */

export function trackStageEnter(args: { to: FpStage; from: FpStage | null }) {
  event("fp_stage_enter", {
    to: args.to,
    from: args.from ?? "init",
  });
}

export function trackHeroChipClick(args: { position: number; queryLen: number }) {
  event("fp_hero_chip_click", {
    position: args.position,
    query_len_bucket: lenBucket(args.queryLen),
  });
}

export function trackMatchFallback(reason: FpFallbackReason) {
  event("fp_match_fallback", { reason });
}

export function trackBrowseFilter(args: {
  script: string;
  mood: string | null;
}) {
  event("fp_browse_filter", {
    script: args.script,
    mood: args.mood ?? "any",
  });
}

export function trackModalTweak(args: { fontId: string; kind: FpTweakKind }) {
  event("fp_modal_tweak", { reference: args.fontId, kind: args.kind });
}

export function trackModalSimilarPick(args: { from: string; to: string }) {
  event("fp_modal_similar_pick", { from: args.from, to: args.to });
}

export function trackModalReset(fontId: string) {
  event("fp_modal_reset", { reference: fontId });
}

export function trackSavedOpen(fontId: string) {
  event("fp_saved_open", { reference: fontId });
}

export function trackSavedDelete(fontId: string) {
  event("fp_saved_delete", { reference: fontId });
}

export function trackExternalClick(args: {
  destination: "get_font" | "source" | "google_fonts";
  fontId: string;
}) {
  event("fp_external_click", {
    destination: args.destination,
    reference: args.fontId,
  });
}

export function trackShareLand(fontId: string) {
  event("fp_share_land", { reference: fontId });
}

export function trackQueryRefine(args: {
  queryLen: number;
  scripts: FontScript[];
}) {
  event("fp_query_refine", {
    query_len_bucket: lenBucket(args.queryLen),
    scripts: scriptParam(args.scripts),
  });
}
