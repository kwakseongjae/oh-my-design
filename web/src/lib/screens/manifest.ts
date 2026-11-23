/**
 * The published manifest's shape and the one rule for accepting it. Pure — no fs — so the image route
 * (app/screens-img) can read the committed manifest without pulling the readers' file access into its bundle.
 * lib/screens/public.server.ts re-exports everything here, and the MCP screen tools (lib/mcp/screens.ts) read it for
 * the same reason.
 */

import type { ScreensModel } from "./model";
import { HTTPS_BASE, SCREENS_IMG_PATH } from "./published-base";
import { buildScreensModel, str, validSlug } from "./walk";

/** One shown record: one screen at one width, with nothing but what the pages draw. */
export interface PublicRecord {
  key: string;
  type: string;
  title: string;
  state: string | null;
  width: number;
  /** People's names or uploaded pictures were replaced before the still was taken. */
  masked: boolean;
  /** The store also holds the small rendition, `<width>-<key>.thumb.jpg` (absent in a manifest written before them). */
  thumb?: boolean;
}

export interface PublicService {
  slug: string;
  /** YYYY-MM-DD or null. */
  shot: string | null;
  signedOut: boolean;
  platform: string | null;
  records: PublicRecord[];
  /** The comparable DESIGN.md colours and the listed screens they were drawn on with exactly that value. */
  colors: { token: string; value: string; screens: string[] }[];
}

export interface PublicManifest {
  generated: string;
  /** The image store's origin and path prefix; a still is `${base}/<slug>/<width>-<key>.jpg`, its small rendition
   *  `<width>-<key>.thumb.jpg` beside it. */
  base: string;
  services: PublicService[];
}

const LOCAL_BASE = /^(?:\/[A-Za-z0-9._~-]+)+$/;

/** The manifest, or null when it lists no service or its base is not an https URL (or, previewing, a path here). */
export function validManifest(raw: unknown, allowLocalBase: boolean): PublicManifest | null {
  if (!raw || typeof raw !== "object") return null;
  const m = raw as Record<string, unknown>;
  const base = str(m.base)?.replace(/\/+$/, "") ?? "";
  if (!HTTPS_BASE.test(base) && !(allowLocalBase && LOCAL_BASE.test(base))) return null;
  if (!Array.isArray(m.services)) return null;
  const services = (m.services as Record<string, unknown>[]).filter(
    (s) => s && typeof s === "object" && typeof s.slug === "string" && validSlug(s.slug) && Array.isArray(s.records),
  ) as unknown as PublicService[];
  return services.length ? { generated: str(m.generated) ?? "", base, services } : null;
}

/** One published service as the Screens tab's model. Stills only, no full page; a record that says withheld or
 *  blocked (the script never writes one) is dropped all the same. With the store's https base the pages print our own
 *  path (published-base.ts SCREENS_IMG_PATH, answered by app/screens-img, which fetches from the store), never the store's address; a
 *  preview's local base (/screens-local) is printed as it is. */
export function publicModel(service: PublicService, base: string): ScreensModel | null {
  const prefix = HTTPS_BASE.test(base) ? SCREENS_IMG_PATH : base;
  const records = service.records.filter((r) => r && !("withheld" in r) && (r as { blocked?: unknown }).blocked !== true);
  const thumbs = new Set(records.filter((r) => r.thumb === true).map((r) => `${r.width}-${r.key}`));
  return buildScreensModel(
    service.slug,
    {
      shot: str(service.shot),
      signedOut: service.signedOut === true,
      platform: str(service.platform),
      records,
      tokens: { colors: (Array.isArray(service.colors) ? service.colors : []).map((c) => ({ ...c, comparable: true })) },
    },
    (width, key) => {
      if (!Number.isInteger(width) || width <= 0 || width >= 10000) return null;
      const at = `${prefix}/${service.slug}/${width}-${key}`;
      return { still: `${at}.jpg`, thumb: thumbs.has(`${width}-${key}`) ? `${at}.thumb.jpg` : null, full: null };
    },
  );
}
