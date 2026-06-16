// Client-only Mixpanel wrapper. Lazy-loads mixpanel-browser via dynamic import
// so it stays out of the initial bundle and never evaluates on the server.
//
// Region = US (project default endpoints — see memory project-analytics-stack).
// Autocapture is OFF on purpose: all ~87 product events are dual-fired by name
// through src/lib/gtag.ts `event()`, so autocapture would double-count clicks
// and inflate event volume. Pageviews are tracked manually on App Router route
// changes (see components/analytics-consent.tsx).
//
// The SDK is initialized opted-OUT by default; nothing is sent until the consent
// layer calls mpOptIn() (immediately for non-EU visitors, on Accept for EU).
import type { OverridedMixpanel } from "mixpanel-browser";

export const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ?? "";

let instance: OverridedMixpanel | null = null;
let loading: Promise<OverridedMixpanel | null> | null = null;

export async function loadMixpanel(): Promise<OverridedMixpanel | null> {
  if (typeof window === "undefined" || !MIXPANEL_TOKEN) return null;
  if (instance) return instance;
  if (!loading) {
    loading = import("mixpanel-browser")
      .then((mod) => {
        const mp = mod.default;
        mp.init(MIXPANEL_TOKEN, {
          autocapture: false,
          persistence: "localStorage",
          opt_out_tracking_by_default: true,
          ip: false,
          record_sessions_percent: 0,
        });
        instance = mp;
        return mp;
      })
      .catch(() => null);
  }
  return loading;
}

// Events that fire before the consent decision resolves would otherwise be
// dropped (opt_out_tracking_by_default). Buffer them (bounded) and replay ONLY
// if the user opts in — so the earliest events of a session (mount-effect
// views, the first pageview) aren't lost, while declined/EU users are never
// replayed.
type Buffered = { name: string; params?: Record<string, unknown> };
const preOptInBuffer: Buffered[] = [];
const BUFFER_CAP = 50;

/** Fire-and-forget event mirror. Buffers until opt-in, no-ops after opt-out. */
export function mpTrack(name: string, params?: Record<string, unknown>) {
  loadMixpanel()
    .then((mp) => {
      if (!mp) return;
      if (mp.has_opted_in_tracking()) mp.track(name, params);
      else if (preOptInBuffer.length < BUFFER_CAP) preOptInBuffer.push({ name, params });
    })
    .catch(() => {});
}

/** Manual SPA pageview (autocapture is off). No-ops unless opted in. */
export function mpPageview() {
  loadMixpanel()
    .then((mp) => {
      if (mp && mp.has_opted_in_tracking()) mp.track_pageview();
    })
    .catch(() => {});
}

export async function mpOptIn() {
  const mp = await loadMixpanel();
  if (!mp) return;
  mp.opt_in_tracking();
  // Replay events captured before consent resolved (then clear the buffer).
  const pending = preOptInBuffer.splice(0, preOptInBuffer.length);
  for (const e of pending) mp.track(e.name, e.params);
}

export async function mpOptOut() {
  preOptInBuffer.length = 0; // never replay for declined / withdrawn users
  const mp = await loadMixpanel();
  mp?.opt_out_tracking();
}
