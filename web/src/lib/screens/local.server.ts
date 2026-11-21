/**
 * Local screens for the item page's Screens tab — read from disk at request
 * time, never imported into the bundle, never committed.
 *
 * OMD_SCREENS_DIR names a folder laid out as
 *   <dir>/<slug>/screens.json   the walk: one record per screen key × width
 *   <dir>/<slug>/tokens.json    the reference's DESIGN.md values matched on those screens
 *   <dir>/<slug>/img/<width>-<key>.jpg and <width>-<key>.full.jpg
 * where the slug is the reference id. Everything here answers "nothing" unless a
 * person on this machine pointed the variable at a folder, and in a production
 * build unless OMD_SCREENS_ALLOW=1 is set as well.
 *
 * This is the working copy, for previewing a walk; what the public site shows is
 * the published manifest (public.server.ts). source.server.ts decides which one a
 * page reads. The reader and the image route (app/screens-local/[slug]/[file]/route.ts)
 * share one gate, so the tab never shows where its images would 404.
 */

import fs from "node:fs";
import path from "node:path";
import type { ScreensModel } from "./model";
import { buildScreensModel, shotDate, signedOutOf, str, validSlug, withheldKeys } from "./walk";

type Env = Record<string, string | undefined>;

/** Where the image route answers. Relative, so it follows whichever host serves the page. */
export const SCREENS_ROUTE = "/screens-local";

const FILE_RE = /^([0-9]{2,4})-([a-z0-9][a-z0-9-]{0,63})(\.full)?\.jpg$/i;

/** The local screens folder, or null: unset, missing, or a production build without OMD_SCREENS_ALLOW=1. */
export function screensRoot(env: Env = process.env): string | null {
  const dir = env.OMD_SCREENS_DIR?.trim();
  if (!dir) return null;
  if (env.NODE_ENV === "production" && env.OMD_SCREENS_ALLOW !== "1") return null;
  try {
    const real = fs.realpathSync(dir);
    return fs.statSync(real).isDirectory() ? real : null;
  } catch {
    return null;
  }
}

/**
 * The file on disk for /screens-local/<slug>/<file>, or null. Only
 * "<width>-<key>[.full].jpg" names, only inside <root>/<slug>/img after every
 * symlink is resolved, only regular files, and never a still of a screen the
 * walk marks withheld (asked for by URL, it is a 404 like any other).
 */
export function resolveScreenImage(slug: string, file: string, env: Env = process.env): string | null {
  const root = screensRoot(env);
  if (!root || !validSlug(slug) || !FILE_RE.test(file)) return null;
  try {
    const base = fs.realpathSync(path.join(root, slug, "img"));
    if (!base.startsWith(root + path.sep)) return null;
    const target = fs.realpathSync(path.join(base, file));
    if (path.dirname(target) !== base) return null;
    const key = FILE_RE.exec(file)?.[2];
    const walk = readJson(path.join(root, slug, "screens.json")) as Record<string, unknown> | null;
    if (!key || withheldKeys(walk?.records).has(key)) return null;
    return fs.statSync(target).isFile() ? target : null;
  } catch {
    return null;
  }
}

function readJson(file: string): unknown {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return null;
  }
}

/**
 * The Screens tab's model for one reference from the local folder, or null when
 * the gate is shut or the reference has no walk. tokens.json is optional: without
 * it the cards stand alone and the panel is left out (unknown means absent).
 */
export function readScreens(id: string, env: Env = process.env): ScreensModel | null {
  const root = screensRoot(env);
  if (!root || !validSlug(id)) return null;
  const dir = path.join(root, id);
  const walk = readJson(path.join(dir, "screens.json"));
  if (!walk || typeof walk !== "object") return null;
  const w = walk as Record<string, unknown>;

  let files: Set<string>;
  try {
    files = new Set(fs.readdirSync(path.join(dir, "img")));
  } catch {
    files = new Set();
  }
  const url = (name: string) => `${SCREENS_ROUTE}/${encodeURIComponent(id)}/${name}`;

  return buildScreensModel(
    id,
    { shot: shotDate(w.shot), signedOut: signedOutOf(w.browser), platform: str(w.platform), records: w.records, tokens: readJson(path.join(dir, "tokens.json")) },
    (width, key) => {
      const still = `${width}-${key}.jpg`;
      const full = `${width}-${key}.full.jpg`;
      return files.has(still) ? { still: url(still), full: files.has(full) ? url(full) : null } : null;
    },
  );
}

/**
 * Every service with a walk in the local screens folder, by folder name, each read as readScreens reads it — or null
 * when the gate is shut (checked before anything touches the disk) or no folder holds a walk.
 */
export function listScreens(env: Env = process.env): ScreensModel[] | null {
  const root = screensRoot(env);
  if (!root) return null;
  let names: string[];
  try {
    names = fs
      .readdirSync(root, { withFileTypes: true })
      .filter((d) => d.isDirectory() && validSlug(d.name))
      .map((d) => d.name)
      .sort();
  } catch {
    return null;
  }
  const out = names.map((n) => readScreens(n, env)).filter((m): m is ScreensModel => m !== null);
  return out.length ? out : null;
}
