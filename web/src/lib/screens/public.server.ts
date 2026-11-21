/**
 * The published screens: the manifest web/scripts/publish-screens.mjs writes after it uploads the stills to the image
 * store (src/data/screens-public.generated.json). The repository holds the manifest only, never an image: the
 * repository is public and a committed image would outlive a takedown in its history.
 *
 * An empty manifest (no services, or no https base) is the shut state, and it is what is committed until the owner
 * publishes. This file answers the one question every published-only surface asks (the header link, the sitemap
 * entry, the gallery's robots, the rights and takedown lines): screensPublished().
 *
 * Outside production, OMD_SCREENS_MANIFEST may name another manifest file (a dry run's) to preview the published
 * state on this machine; its base may then be a path on this host (the local image route). A production build
 * never reads it.
 */

import fs from "node:fs";
import committed from "@/data/screens-public.generated.json";
import type { ScreensModel } from "./model";
import { buildScreensModel, str, validSlug } from "./walk";

type Env = Record<string, string | undefined>;

/** One shown record: one screen at one width, with nothing but what the pages draw. */
export interface PublicRecord {
  key: string;
  type: string;
  title: string;
  state: string | null;
  width: number;
  /** People's names or uploaded pictures were replaced before the still was taken. */
  masked: boolean;
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
  /** The image store's origin and path prefix; a still is `${base}/<slug>/<width>-<key>.jpg`. */
  base: string;
  services: PublicService[];
}

const HTTPS_BASE = /^https:\/\/[a-z0-9.-]+(?::\d+)?(?:\/[A-Za-z0-9._~-]+)*$/i;
const LOCAL_BASE = /^(?:\/[A-Za-z0-9._~-]+)+$/;

/** The manifest path a person on this machine named to preview the published state, or null (always in production). */
export function manifestOverride(env: Env = process.env): string | null {
  if (env.NODE_ENV === "production") return null;
  return env.OMD_SCREENS_MANIFEST?.trim() || null;
}

/** The manifest pages read, or null when it lists nothing: the shut state. */
export function publicManifest(env: Env = process.env): PublicManifest | null {
  const override = manifestOverride(env);
  let raw: unknown = committed;
  if (override) {
    try {
      raw = JSON.parse(fs.readFileSync(override, "utf8"));
    } catch {
      return null;
    }
  }
  return validManifest(raw, override !== null);
}

/** Are screens published? Every published-only surface asks this and nothing else. */
export function screensPublished(env: Env = process.env): boolean {
  return publicManifest(env) !== null;
}

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
 *  blocked (the script never writes one) is dropped all the same. */
export function publicModel(service: PublicService, base: string): ScreensModel | null {
  const records = service.records.filter((r) => r && !("withheld" in r) && (r as { blocked?: unknown }).blocked !== true);
  return buildScreensModel(
    service.slug,
    {
      shot: str(service.shot),
      signedOut: service.signedOut === true,
      platform: str(service.platform),
      records,
      tokens: { colors: (Array.isArray(service.colors) ? service.colors : []).map((c) => ({ ...c, comparable: true })) },
    },
    (width, key) => (Number.isInteger(width) && width > 0 && width < 10000 ? { still: `${base}/${service.slug}/${width}-${key}.jpg`, full: null } : null),
  );
}
