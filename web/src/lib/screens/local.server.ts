/**
 * Local screens for the item page's Screens tab — read from disk at request
 * time, never imported into the bundle, never committed.
 *
 * OMD_SCREENS_DIR names a folder laid out as
 *   <dir>/<slug>/screens.json   the walk: one record per screen key × width
 *   <dir>/<slug>/tokens.json    the reference's DESIGN.md values matched on those screens
 *   <dir>/<slug>/img/<width>-<key>.jpg and <width>-<key>.full.jpg
 * where the slug is the reference id. The screens are other companies' screens and
 * their publication is not decided, so everything here answers "nothing" unless a
 * person on this machine pointed the variable at a folder, and in a production
 * build unless OMD_SCREENS_ALLOW=1 is set as well. With nothing, the item page
 * renders exactly as it does without this feature: no tab, no request, no markup.
 *
 * The reader and the image route (app/screens-local/[slug]/[file]/route.ts) share
 * one gate, so the tab never shows where its images would 404.
 */

import fs from "node:fs";
import path from "node:path";
import type { ScreenCard, ScreenColor, ScreenStill, ScreensModel } from "./model";
import { isBlackOrWhite } from "./model";

type Env = Record<string, string | undefined>;

/** Where the image route answers. Relative, so it follows whichever host serves the page. */
export const SCREENS_ROUTE = "/screens-local";

const SLUG_RE = /^[a-z0-9][a-z0-9.-]{0,63}$/i;
const KEY_RE = /^[a-z0-9][a-z0-9-]{0,63}$/i;
const FILE_RE = /^([0-9]{2,4})-([a-z0-9][a-z0-9-]{0,63})(\.full)?\.jpg$/i;

const validSlug = (slug: string) => SLUG_RE.test(slug) && !slug.includes("..");

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
    if (!key || withheldKeys(readJson(path.join(root, slug, "screens.json"))).has(key)) return null;
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

const str = (v: unknown): string | null => (typeof v === "string" && v.trim() ? v : null);
const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);

interface WalkRecord {
  key: string;
  type: string;
  title: string;
  state: string | null;
  width: number;
  blocked: boolean;
}

/** A record the sheet marks `withheld` (a non-empty reason): a screen made mostly of users' posts, photos or reviews,
 *  never shown outside the machine that shot it. */
const isWithheld = (r: Record<string, unknown> | null | undefined) => typeof r?.withheld === "string" && r.withheld.trim() !== "";

/** The keys of a walk's withheld screens. */
function withheldKeys(walk: unknown): Set<unknown> {
  const recs = walk && typeof walk === "object" ? (walk as Record<string, unknown>).records : null;
  return new Set(Array.isArray(recs) ? (recs as Record<string, unknown>[]).filter(isWithheld).map((r) => r?.key) : []);
}

/**
 * The walk's usable records. A withheld screen is left out whole: when any of its widths is withheld, every width of
 * that key goes, so no tab, shelf, landing row or count ever includes it.
 */
function records(walk: Record<string, unknown>): { recs: WalkRecord[]; withheld: boolean } {
  if (!Array.isArray(walk.records)) return { recs: [], withheld: false };
  const all = walk.records as Record<string, unknown>[];
  const held = withheldKeys(walk);
  const out: WalkRecord[] = [];
  for (const r of all) {
    const key = str(r?.key);
    const width = num(r?.width);
    if (!key || !KEY_RE.test(key) || !width || held.has(key)) continue;
    out.push({
      key,
      width,
      type: str(r.type) ?? "",
      title: str(r.title) ?? str(r.type) ?? key,
      state: str(r.state),
      blocked: r.blocked === true,
    });
  }
  return { recs: out, withheld: held.size > 0 };
}

/** "20261121" or an ISO date → "2026-11-21". */
function shotDate(v: unknown): string | null {
  const s = str(v);
  const m = s?.match(/^(\d{4})-?(\d{2})-?(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

/**
 * The Screens tab's model for one reference, or null when the gate is shut or
 * the reference has no walk. tokens.json is optional: without it the cards stand
 * alone and the panel is left out (unknown means absent).
 */
export function readScreens(id: string, env: Env = process.env): ScreensModel | null {
  const root = screensRoot(env);
  if (!root || !validSlug(id)) return null;
  const dir = path.join(root, id);
  const walk = readJson(path.join(dir, "screens.json"));
  if (!walk || typeof walk !== "object") return null;
  const w = walk as Record<string, unknown>;
  const { recs, withheld } = records(w);
  if (recs.length === 0) return null;

  const imgDir = path.join(dir, "img");
  let files: Set<string>;
  try {
    files = new Set(fs.readdirSync(imgDir));
  } catch {
    files = new Set();
  }
  const url = (name: string) => `${SCREENS_ROUTE}/${encodeURIComponent(id)}/${name}`;

  const byKey = new Map<string, WalkRecord[]>();
  for (const r of recs) byKey.set(r.key, [...(byKey.get(r.key) ?? []), r]);

  const cards: ScreenCard[] = [];
  for (const [key, rs] of byKey) {
    rs.sort((a, b) => b.width - a.width);
    const head = rs[0];
    const blocked = rs.every((r) => r.blocked);
    const stills: ScreenStill[] = [];
    if (!blocked) {
      for (const r of rs) {
        if (r.blocked || stills.some((s) => s.width === r.width)) continue;
        const still = `${r.width}-${key}.jpg`;
        const full = `${r.width}-${key}.full.jpg`;
        if (!files.has(still)) continue;
        stills.push({ width: r.width, still: url(still), full: files.has(full) ? url(full) : null });
      }
      // A screen with no still on disk is not shown: there is nothing to draw.
      if (stills.length === 0) continue;
    }
    cards.push({ key, type: head.type, title: head.title, state: head.state, blocked, stills });
  }
  if (cards.length === 0) return null;

  const keys = new Set(cards.filter((c) => !c.blocked).map((c) => c.key));
  const tokens = readJson(path.join(dir, "tokens.json")) as Record<string, unknown> | null;
  const colors: ScreenColor[] = [];
  if (tokens && Array.isArray(tokens.colors)) {
    for (const c of tokens.colors as Record<string, unknown>[]) {
      const token = str(c?.token);
      const value = str(c?.value);
      if (!token || !value || c.comparable !== true) continue;
      const on = Array.isArray(c.screens) ? (c.screens as unknown[]).filter((k): k is string => typeof k === "string" && keys.has(k)) : [];
      colors.push({ token, value, screens: [...new Set(on)] });
    }
  }
  const summary = (tokens?.summary as Record<string, Record<string, unknown>> | undefined)?.colors;
  const matched = num(summary?.matchedBeyondBlackWhite);
  const comparable = num(summary?.comparableBeyondBlackWhite);
  // The sheet's summary counts every screen it matched, withheld ones too: with anything withheld, count again here.
  const colorCount =
    !withheld && matched !== null && comparable !== null
      ? { matched, comparable }
      : colors.length
        ? {
            matched: colors.filter((c) => !isBlackOrWhite(c.value) && c.screens.length > 0).length,
            comparable: colors.filter((c) => !isBlackOrWhite(c.value)).length,
          }
        : null;

  const widths = [...new Set(cards.flatMap((c) => c.stills.map((s) => s.width)))].sort((a, b) => b - a);
  return {
    slug: id,
    shot: shotDate(w.shot),
    signedOut: /signed out/i.test(str(w.browser) ?? ""),
    platform: str(w.platform),
    widths,
    cards,
    colors,
    colorCount,
  };
}

/**
 * Every service with a walk in the local screens folder, by folder name, each read as readScreens reads it — or null
 * when the gate is shut (checked before anything touches the disk) or no folder holds a walk. For the /screens
 * gallery and the landing section that leads to it.
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
