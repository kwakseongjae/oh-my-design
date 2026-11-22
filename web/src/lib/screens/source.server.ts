/**
 * Which screens a page reads, decided in one place:
 *   1. outside production, a manifest file named by OMD_SCREENS_MANIFEST (to preview the published state here);
 *   2. the local sheets folder (OMD_SCREENS_DIR; in a production build only with OMD_SCREENS_ALLOW=1), so a new walk
 *      can be previewed even when screens are published;
 *   3. the committed public manifest, when it lists services;
 *   4. nothing: the tab, the gallery and the landing section render exactly as they do without this feature.
 * The models carry screensPublished() as `published`, which turns on the rights and takedown lines.
 */

import type { ScreensModel } from "./model";
import { listScreens as listLocal, readScreens as readLocal, screensRoot } from "./local.server";
import { manifestOverride, publicManifest, publicModel, screensPublished } from "./public.server";
import { validSlug } from "./walk";

type Env = Record<string, string | undefined>;

export { screensPublished };

function fromLocal(env: Env): boolean {
  return manifestOverride(env) === null && screensRoot(env) !== null;
}

/** The Screens tab's model for one reference, or null. */
export function screensOf(id: string, env: Env = process.env): ScreensModel | null {
  if (!validSlug(id)) return null;
  const published = screensPublished(env);
  if (fromLocal(env)) {
    const m = readLocal(id, env);
    return m ? { ...m, published } : null;
  }
  const manifest = publicManifest(env);
  const service = manifest?.services.find((s) => s.slug === id);
  const m = manifest && service ? publicModel(service, manifest.base) : null;
  return m ? { ...m, published } : null;
}

/** Every service with screens, by slug, or null. */
export function allScreens(env: Env = process.env): ScreensModel[] | null {
  const published = screensPublished(env);
  if (fromLocal(env)) return listLocal(env)?.map((m) => ({ ...m, published })) ?? null;
  const manifest = publicManifest(env);
  if (!manifest) return null;
  const out = [...manifest.services]
    .sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0))
    .map((s) => publicModel(s, manifest.base))
    .filter((m): m is ScreensModel => m !== null)
    .map((m) => ({ ...m, published }));
  return out.length ? out : null;
}
