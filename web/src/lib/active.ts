/**
 * Active-user pulse — the consent-independent DAU/WAU/MAU signal.
 *
 * Generates a random first-party visitor id (localStorage, no PII) and pings
 * /api/active once per session. The server folds it into a per-day HyperLogLog
 * (see src/lib/kv.ts), so active-user counts are measured server-side —
 * independent of GA/Mixpanel consent AND ad-blockers, which under-count and
 * swing whenever dashboards/config change. This is the stable floor for the
 * DAU=1000 north-star.
 *
 * Privacy posture: the id is random (not derived from any identity), is sent
 * only first-party, and server-side feeds an aggregate cardinality sketch that
 * retains no individual ids. It carries no analytics payload (no page, no
 * referrer) — purely "a unique browser was active today".
 */
import { deviceType } from "@/lib/device";

const VID_KEY = "omd:vid";
const SESSION_FLAG = "omd:pulsed";

function getVisitorId(): string | null {
  try {
    let id = localStorage.getItem(VID_KEY);
    if (!id) {
      const raw =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      id = raw.replace(/[^A-Za-z0-9_-]/g, "").slice(0, 64);
      localStorage.setItem(VID_KEY, id);
    }
    return id && id.length >= 8 ? id : null;
  } catch {
    return null; // storage blocked (private mode / SSR) → skip silently
  }
}

/** Ping the server once per session that this browser was active today. */
export function pulseActive() {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(SESSION_FLAG)) return; // dedupe within a session
    sessionStorage.setItem(SESSION_FLAG, "1");
  } catch {
    /* sessionStorage blocked → still pulse (HLL absorbs the rare double-count) */
  }
  const vid = getVisitorId();
  if (!vid) return;
  fetch("/api/active", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vid, device: deviceType() }),
    keepalive: true,
  }).catch(() => {});
}
