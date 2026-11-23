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
import { HTTPS_BASE, SCREENS_IMG_PATH } from "./published-base";
import { validManifest, type PublicManifest, type PublicService } from "./manifest";
import { buildScreensModel, str } from "./walk";

export { validManifest };
export type { PublicManifest, PublicRecord, PublicService } from "./manifest";

type Env = Record<string, string | undefined>;

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
