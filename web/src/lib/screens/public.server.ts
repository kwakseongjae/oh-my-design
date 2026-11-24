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
import { publicModel, validManifest, type PublicManifest } from "./manifest";

export { publicModel, validManifest };
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
