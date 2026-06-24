/**
 * Coarse device class for low-cardinality analytics splits. Client-only.
 *
 * NOTE: GA4 already collects a built-in "Device category" dimension, so the
 * bld_/ds_/act_ funnel can be broken down by device in GA4 with no custom
 * param. This helper exists for the server-side active-user split (per-device
 * DAU in the consent-independent HLL), where no GA4 default is available.
 */
export type DeviceType = "mobile" | "tablet" | "desktop";

export const DEVICE_TYPES: readonly DeviceType[] = ["mobile", "tablet", "desktop"] as const;

/** Width + pointer heuristic. <640 = mobile; <1024 with a coarse pointer =
 *  tablet; otherwise desktop (a narrow desktop window stays desktop because its
 *  pointer is fine). SSR-safe default: desktop. */
export function deviceType(): DeviceType {
  if (typeof window === "undefined") return "desktop";
  const w = window.innerWidth || document.documentElement.clientWidth || 1280;
  const coarse = typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches;
  if (w < 640) return "mobile";
  if (w < 1024 && coarse) return "tablet";
  return "desktop";
}
