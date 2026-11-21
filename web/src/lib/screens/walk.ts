/**
 * The one way a walk becomes the Screens tab's model, whatever it was read from: the local sheets folder
 * (local.server.ts) or the public manifest (public.server.ts). Pure — no fs — so both readers, and the tests that
 * hold them to the same rules, share it.
 *
 * The rules: a key the sheet marks withheld on any width is left out whole; an unsafe key is left out; widths fold
 * into one card per key; a screen with no still is not shown; colours are the comparable DESIGN.md tokens with the
 * shown screens they were drawn on.
 */

import type { ScreenCard, ScreenColor, ScreenStill, ScreensModel } from "./model";
import { isBlackOrWhite } from "./model";

export const SLUG_RE = /^[a-z0-9][a-z0-9.-]{0,63}$/i;
export const KEY_RE = /^[a-z0-9][a-z0-9-]{0,63}$/i;

export const validSlug = (slug: string) => SLUG_RE.test(slug) && !slug.includes("..");

export const str = (v: unknown): string | null => (typeof v === "string" && v.trim() ? v : null);
export const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);

/** A record the sheet marks `withheld` (a non-empty reason): a screen made mostly of users' posts, photos or reviews,
 *  never shown outside the machine that shot it. */
export const isWithheld = (r: Record<string, unknown> | null | undefined) => typeof r?.withheld === "string" && r.withheld.trim() !== "";

/** The keys of a walk's withheld screens. */
export function withheldKeys(records: unknown): Set<unknown> {
  return new Set(Array.isArray(records) ? (records as Record<string, unknown>[]).filter(isWithheld).map((r) => r?.key) : []);
}

/** People's names or uploaded pictures were replaced on this record before the still was taken: the sheet's
 *  `masked` object with names or images above zero, or the manifest's boolean. */
export function isMasked(r: Record<string, unknown> | null | undefined): boolean {
  const m = r?.masked;
  if (m === true) return true;
  if (!m || typeof m !== "object") return false;
  const o = m as Record<string, unknown>;
  return (num(o.names) ?? 0) > 0 || (num(o.images) ?? 0) > 0;
}

/** "20261121" or an ISO date → "2026-11-21". */
export function shotDate(v: unknown): string | null {
  const s = str(v);
  const m = s?.match(/^(\d{4})-?(\d{2})-?(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

/** The walk's browser line says it ran signed out. */
export const signedOutOf = (browser: unknown) => /signed out/i.test(str(browser) ?? "");

/** A walk as either reader hands it over: the header already read, the records and the token comparison as stored. */
export interface WalkInput {
  shot: string | null;
  signedOut: boolean;
  platform: string | null;
  records: unknown;
  /** tokens.json's shape: { colors: [{ token, value, comparable, screens }], summary? }, or null. */
  tokens: unknown;
}

interface WalkRecord {
  key: string;
  type: string;
  title: string;
  state: string | null;
  width: number;
  blocked: boolean;
  masked: boolean;
}

function records(raw: unknown): { recs: WalkRecord[]; withheld: boolean } {
  if (!Array.isArray(raw)) return { recs: [], withheld: false };
  const held = withheldKeys(raw);
  const out: WalkRecord[] = [];
  for (const r of raw as Record<string, unknown>[]) {
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
      masked: isMasked(r),
    });
  }
  return { recs: out, withheld: held.size > 0 };
}

/**
 * The Screens tab's model, or null when nothing is left to show. `stillOf` answers where the still (and the full
 * page, when there is one) of a width and key is, or null when there is none to draw.
 */
export function buildScreensModel(
  slug: string,
  walk: WalkInput,
  stillOf: (width: number, key: string) => Omit<ScreenStill, "width"> | null,
): ScreensModel | null {
  const { recs, withheld } = records(walk.records);
  if (recs.length === 0) return null;

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
        const at = stillOf(r.width, key);
        if (at) stills.push({ width: r.width, ...at });
      }
      // A screen with no still is not shown: there is nothing to draw.
      if (stills.length === 0) continue;
    }
    const masked = !blocked && rs.some((r) => !r.blocked && r.masked);
    cards.push({ key, type: head.type, title: head.title, state: head.state, blocked, masked, stills });
  }
  if (cards.length === 0) return null;

  const keys = new Set(cards.filter((c) => !c.blocked).map((c) => c.key));
  const tokens = walk.tokens && typeof walk.tokens === "object" ? (walk.tokens as Record<string, unknown>) : null;
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
  // The sheet's summary counts every screen it matched, withheld ones too: with anything withheld, or no summary
  // (the public manifest carries none), count again here.
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
  return { slug, shot: walk.shot, signedOut: walk.signedOut, platform: walk.platform, published: false, widths, cards, colors, colorCount };
}
