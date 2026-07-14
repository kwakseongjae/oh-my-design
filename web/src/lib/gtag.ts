import { mpTrack } from "./mixpanel";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const ANALYTICS_TAXONOMY_VERSION = "v2-2026-07-10";

type AnalyticsValue = string | number | boolean;
type AnalyticsParams = Record<string, AnalyticsValue>;

// GA4 treats these names as acquisition/campaign fields. Product events used
// `source` for internal UI origins, which polluted session attribution with
// values such as directory, builder, chip, and _next/static. Keep old call
// sites safe during the cutover by moving every reserved key under event_*.
const RESERVED_ACQUISITION_PARAMS = new Set([
  "source",
  "medium",
  "campaign",
  "campaign_id",
  "term",
  "content",
  "source_platform",
  "creative_format",
  "marketing_tactic",
]);

export function normalizeEventParams(params: AnalyticsParams = {}): AnalyticsParams {
  const normalized: AnalyticsParams = { taxonomy_version: ANALYTICS_TAXONOMY_VERSION };
  for (const [key, value] of Object.entries(params)) {
    const target = RESERVED_ACQUISITION_PARAMS.has(key) ? `event_${key}` : key;
    if (!(target in normalized)) normalized[target] = value;
  }
  return normalized;
}

// Diagnostic / engagement signals stay in GA only. Mirroring them to Mixpanel
// inflates event volume (scroll_depth fires up to 4×/session — the largest
// free-tier consumer) and bloats property cardinality (js_error carries
// unbounded message/source strings). The product funnel doesn't need them.
const MP_SKIP = new Set(["scroll_depth", "js_error"]);

export function event(name: string, params?: AnalyticsParams) {
  const normalized = normalizeEventParams(params);
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, normalized);
  }
  // Dual-fire the same named event to Mixpanel (no-ops/buffers until opt-in).
  // Single source of truth: every call site already routes through here, so the
  // whole product taxonomy is mirrored with zero per-call-site changes.
  if (!MP_SKIP.has(name)) mpTrack(name, normalized);
}

export type RefTrackEvent = "select" | "generate" | "download" | "copy" | "install";

/** Increment a server-side counter for a reference. Fire-and-forget alongside GA event(). */
export function trackRef(eventName: RefTrackEvent, reference: string) {
  if (typeof window === "undefined") return;
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event: eventName, reference }),
    keepalive: true,
  }).catch(() => {});
}

/** Track unhandled JS errors */
export function initErrorLogging() {
  if (typeof window === "undefined") return;

  window.addEventListener("error", (e) => {
    event("js_error", {
      message: e.message || "unknown",
      error_origin: classifyErrorOrigin(e.filename),
      line: e.lineno || 0,
    });
  });

  window.addEventListener("unhandledrejection", (e) => {
    event("js_error", {
      message: String(e.reason?.message || e.reason || "unhandled_promise"),
      error_origin: "promise",
    });
  });
}

/** Low-cardinality replacement for raw JS filenames. */
export function classifyErrorOrigin(filename: string): "next_static" | "first_party" | "third_party" | "unknown" {
  if (!filename) return "unknown";
  if (filename.includes("/_next/static/")) return "next_static";
  try {
    const url = new URL(filename, typeof window !== "undefined" ? window.location.origin : "https://oh-my-design.kr");
    if (url.hostname === "oh-my-design.kr" || url.hostname === "localhost" || url.hostname === "127.0.0.1") return "first_party";
    return "third_party";
  } catch {
    return "unknown";
  }
}

/** Track landing page scroll depth at 25/50/75/100% thresholds */
export function initScrollDepth() {
  if (typeof window === "undefined") return;

  const fired = new Set<number>();
  const thresholds = [25, 50, 75, 100];

  function check() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    const pct = Math.round((scrollTop / docHeight) * 100);

    for (const t of thresholds) {
      if (pct >= t && !fired.has(t)) {
        fired.add(t);
        event("scroll_depth", { percent: t, page: window.location.pathname });
      }
    }
  }

  window.addEventListener("scroll", check, { passive: true });
}
