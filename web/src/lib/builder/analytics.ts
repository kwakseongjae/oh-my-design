/**
 * Builder (/builder) — GA4 event taxonomy. Single source of truth; typed
 * helpers keep parameter names + the funnel legible. See
 * docs/funnel-analytics.md. Namespace `bld_*`; ID param is always `reference`.
 *
 * PRIMARY FUNNEL
 *   bld_open              land on /builder
 *   bld_reference_select  a reference is picked
 *   bld_generate {mode}   DESIGN.md generated = preview reached (as_is|customize)
 *   bld_export {channel}  the .md is actually grabbed (download|copy)
 *   → act_install_copy    (activation, see lib/activation/analytics.ts)
 */
import { event, trackRef } from "@/lib/gtag";

export type BuildMode = "as_is" | "customize";
export type ExportChannel = "download" | "copy";
export type MdView = "rendered" | "raw";
/** Which style facet was changed in the (demoted) customize wizard. */
export type CustomizeToken = "color" | "font" | "weight" | "radius" | "dark" | "components" | "philosophy" | string;

/** Low-cardinality length bucket — never leak the raw string. */
function lenBucket(n: number): string {
  if (n === 0) return "0";
  if (n <= 5) return "1-5";
  if (n <= 15) return "6-15";
  if (n <= 30) return "16-30";
  if (n <= 60) return "31-60";
  if (n <= 120) return "61-120";
  return "121+";
}

export function trackBuilderOpen() {
  event("bld_open");
}

export function trackReferenceSelect(args: { reference: string; category: string }) {
  event("bld_reference_select", { reference: args.reference, category: args.category });
  trackRef("select", args.reference);
}

/** DESIGN.md generated = preview reached. `mode` splits as-is vs customize. */
export function trackGenerate(args: { reference: string; mode: BuildMode }) {
  event("bld_generate", { reference: args.reference, mode: args.mode });
  trackRef("generate", args.reference);
}

/** The actual export action — download/copy the generated DESIGN.md. */
export function trackExport(args: { reference: string; channel: ExportChannel }) {
  event("bld_export", { reference: args.reference, channel: args.channel });
  trackRef(args.channel, args.reference);
}

export function trackCustomizeOpen(reference: string) {
  event("bld_customize_open", { reference });
}

export function trackCustomizeChange(args: { reference: string; token: CustomizeToken }) {
  event("bld_customize_change", { reference: args.reference, token: args.token });
}

/** Search within the builder — bucketed length, never the raw query. */
export function trackSearch(args: { queryLen: number; hasResults: boolean }) {
  event("bld_search", { query_len_bucket: lenBucket(args.queryLen), has_results: args.hasResults });
}

export function trackCategoryFilter(category: string) {
  event("bld_category_filter", { category });
}

/** Reference grid sort mode changed (recommend|popular|az|new). */
export function trackSortChange(mode: string) {
  event("bld_sort_change", { mode });
}

export function trackCountryFilter(country: string) {
  event("bld_country_filter", { country });
}

export function trackHotFilter(on: boolean) {
  event("bld_hot_filter", { on });
}

export function trackMdViewToggle(args: { reference: string; view: MdView }) {
  event("bld_md_view_toggle", { reference: args.reference, view: args.view });
}

export function trackPhilosophyToggle(args: { reference: string; on: boolean }) {
  event("bld_philosophy_toggle", { reference: args.reference, on: args.on });
}

/** Outbound click to the brand's official DS from the preview header. */
export function trackDsClick(args: { reference: string; location: string }) {
  event("bld_ds_click", { reference: args.reference, location: args.location });
}

export function trackRawMdOpen(reference: string) {
  event("bld_raw_md_open", { reference });
}

export function trackApiError(endpoint: "references" | "reference_detail") {
  event("bld_api_error", { endpoint });
}
