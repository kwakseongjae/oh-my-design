/**
 * Design-system directory (/design-systems/[id]) — GA4 `ds_*` taxonomy. The
 * "use-as-is" path: view a reference page → export its canonical DESIGN.md
 * verbatim (no builder generation). See docs/funnel-analytics.md.
 *
 * PRIMARY FUNNEL
 *   ds_detail_view {channel}  open a reference page (channel = bucketed referrer)
 *   ds_export {channel}       copy/download the canonical .md as-is
 *   → act_install_copy        (activation, see lib/activation/analytics.ts)
 */
import { event, trackRef } from "@/lib/gtag";

export type DsExportChannel = "download" | "copy";
// Covers both the rendered/raw source toggle and the mobile preview/markdown
// panel toggle on the reference detail page.
export type MdView = "rendered" | "raw" | "preview" | "markdown";
/** Bucketed referrer channel — never the raw referrer URL. */
export type DsViewChannel = "direct" | "search" | "social" | "ai" | "referral" | "internal";

const SOCIAL = /(threads|instagram|t\.co|twitter|x\.com|facebook|linkedin|reddit|zep\.us)/i;
const SEARCH = /(google|bing|duckduckgo|naver|daum|yandex|baidu)/i;
const AI = /(chatgpt|openai|claude\.ai|perplexity|gemini|copilot)/i;

/** Classify document.referrer into a low-cardinality channel. */
export function referrerChannel(referrer: string, siteHost = "oh-my-design.kr"): DsViewChannel {
  if (!referrer) return "direct";
  try {
    const host = new URL(referrer).hostname;
    if (host.includes(siteHost)) return "internal";
    if (AI.test(host)) return "ai";
    if (SEARCH.test(host)) return "search";
    if (SOCIAL.test(host)) return "social";
    return "referral";
  } catch {
    return "direct";
  }
}

export function trackDetailView(args: { reference: string; referrer: string }) {
  event("ds_detail_view", { reference: args.reference, channel: referrerChannel(args.referrer) });
  trackRef("select", args.reference);
}

/** Copy/download the canonical DESIGN.md as-is. */
export function trackExport(args: { reference: string; channel: DsExportChannel }) {
  event("ds_export", { reference: args.reference, channel: args.channel });
  trackRef(args.channel, args.reference);
}

export function trackExternalClick(reference: string) {
  event("ds_external_click", { reference });
}

export function trackMdViewToggle(args: { reference: string; view: MdView }) {
  event("ds_md_view_toggle", { reference: args.reference, view: args.view });
}

/** Card → detail open (directory grid / browse modal). */
export function trackDetailOpen(args: { reference: string; source: string }) {
  event("ds_detail_open", { reference: args.reference, source: args.source });
}

export function trackOpenInBuilder(reference: string) {
  event("ds_open_in_builder", { reference });
}

export function trackRawMdOpen(reference: string) {
  event("ds_raw_md_open", { reference });
}
