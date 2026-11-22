/**
 * GA4 events of the screens pages (/screens/<id>): downloads. The same typed helper as the item page's DESIGN.md
 * download (lib/design-systems/analytics.ts, `event` from lib/gtag.ts) and the same `reference` parameter, but its
 * own event name and nothing else: a screens download is not a DESIGN.md export, so it never calls trackRef or
 * trackHandoff (those counters measure DESIGN.md hand-offs).
 *
 *   screens_download {reference, scope, device}
 *     scope: "screen" (one still), "type" (one type's zip), "all" (the whole set)
 *     device: "mobile" | "desktop" | "both"
 */

import { event } from "@/lib/gtag";
import type { Device } from "./model";

export type ScreensDownloadScope = "screen" | "type" | "all";

export function trackScreensDownload(args: { reference: string; scope: ScreensDownloadScope; device: Device | "both" }) {
  event("screens_download", { reference: args.reference, scope: args.scope, device: args.device });
}
