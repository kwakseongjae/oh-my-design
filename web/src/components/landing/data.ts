import { unstable_cache } from "next/cache";
import { REGISTRY, type RefEntry } from "@/data/registry.generated";
import {
  REFERENCE_QUALITY_BY_ID,
  REFERENCE_QUALITY_COUNTS,
  type ReferenceQualityStatus,
} from "@/data/reference-quality.generated";
import { counterKey, getRedis } from "@/lib/kv";
import {
  pickLabelColor,
  resolveCanvas,
  resolveForeground,
  resolveOnPrimary,
  resolvePrimaryColor,
  resolveRadius,
  resolveSurface,
  resolveUiFont,
} from "@/lib/references/brand-tokens";
import { contrastRatio } from "@/lib/contrast";

/**
 * Everything the landing renders that comes from data. Server-only: the page
 * ships the resolved, measured values, never the registry.
 */

const BY_ID = new Map(REGISTRY.map((e) => [e.id, e]));

export const TOP_LIMIT = 10;

/**
 * The `select` leaderboard read from production /api/leaderboard on 2026-10-01.
 * Shown only when the counter store is unreachable (local builds without
 * Upstash env), and then labelled with this date — a snapshot is never
 * presented as a live count.
 */
const SNAPSHOT = {
  date: "2026-10-01",
  ids: ["toss", "apple", "karrot", "baemin", "kakao", "krds", "samsung", "naver", "banksalad", "yeogiotte", "29cm", "socar"],
} as const;

/** Sample-UI label size on the preview card's brand button (px). ≥24px → 3:1 bar. */
export const PREVIEW_LABEL_PX = 24;
const LARGE_TEXT_THRESHOLD = 3;
const BODY_THRESHOLD = 4.5;

export interface BrandSwatch {
  key: string;
  hex: string;
}

export interface LandingBrand {
  id: string;
  name: string;
  displayName: string;
  country: string;
  category: string;
  status: ReferenceQualityStatus;
  primary: string;
  /** Label colour for text set on `primary` at PREVIEW_LABEL_PX, and its measured ratio. */
  label: { color: string; ratio: number; source: "on-primary" | "measured" };
  /** Brand canvas + foreground for the sample screen, only when both exist and read ≥4.5:1. */
  screen: { canvas: string; foreground: string; ratio: number } | null;
  radius: { key: string; px: number } | null;
  uiFont: string | null;
  swatches: BrandSwatch[];
}

function toBrand(e: RefEntry): LandingBrand {
  const status = REFERENCE_QUALITY_BY_ID[e.id]?.status ?? "legacy_snapshot";
  const primary = resolvePrimaryColor(e);
  const onPrimary = resolveOnPrimary(e);
  const label = pickLabelColor(primary, onPrimary, LARGE_TEXT_THRESHOLD);
  const canvas = resolveCanvas(e);
  const foreground = resolveForeground(e);
  const screenRatio = canvas && foreground ? contrastRatio(foreground, canvas) : 0;
  const swatches: BrandSwatch[] = [{ key: "primary", hex: primary }];
  if (onPrimary) swatches.push({ key: "on-primary", hex: onPrimary });
  if (canvas) swatches.push({ key: "canvas", hex: canvas });
  const surface = resolveSurface(e);
  if (surface && surface !== canvas) swatches.push({ key: "surface", hex: surface });
  if (foreground) swatches.push({ key: "foreground", hex: foreground });
  return {
    id: e.id,
    name: e.name,
    displayName: e.displayName,
    country: e.country,
    category: e.category,
    status,
    primary,
    label,
    screen: canvas && foreground && screenRatio >= BODY_THRESHOLD ? { canvas, foreground, ratio: screenRatio } : null,
    radius: resolveRadius(e),
    uiFont: resolveUiFont(e),
    swatches,
  };
}

export interface TopList {
  brands: LandingBrand[];
  /** null = live counter; a date string = the committed snapshot. */
  snapshotDate: string | null;
}

/**
 * Ranked reference ids from the `select` counter, cached for an hour.
 *
 * The Upstash client fetches with `no-store`, which would make the whole home
 * page render per request. Caching only this read keeps / and /ko static
 * (ISR, revalidate 3600) while the list still follows the live counter.
 * `unstable_cache` is the cache API for projects without Cache Components,
 * which this one is.
 */
const readTopIds = unstable_cache(
  async (limit: number): Promise<string[] | null> => {
    const redis = getRedis();
    if (!redis) return null;
    try {
      const raw = await redis.zrange<(string | number)[]>(counterKey("select"), 0, limit * 2, { rev: true });
      const ids = raw.map(String).filter((id) => BY_ID.has(id)).slice(0, limit);
      return ids.length >= Math.min(limit, 3) ? ids : null;
    } catch {
      return null;
    }
  },
  ["landing-top-select"],
  { revalidate: 3600 },
);

export async function getTopBrands(limit = TOP_LIMIT): Promise<TopList> {
  const live = await readTopIds(limit);
  if (live) return { brands: live.map((id) => toBrand(BY_ID.get(id)!)), snapshotDate: null };
  const ids = SNAPSHOT.ids.filter((id) => BY_ID.has(id)).slice(0, limit);
  return { brands: ids.map((id) => toBrand(BY_ID.get(id)!)), snapshotDate: SNAPSHOT.date };
}

export const TIER_COUNTS = {
  verified: REFERENCE_QUALITY_COUNTS.verified_v2,
  partial: REFERENCE_QUALITY_COUNTS.partial,
  legacy: REFERENCE_QUALITY_COUNTS.legacy_snapshot,
  total: REFERENCE_QUALITY_COUNTS.total,
};

export const COUNTRY_COUNT = new Set(REGISTRY.map((e) => e.country)).size;

/**
 * The one evidence example the "verified" tier links to. Toss is the most
 * selected reference and its evidence graph is complete; the numbers are read
 * from the quality manifest, so they change when the reference is re-verified.
 */
export function getEvidenceExample() {
  const id = "toss";
  const q = REFERENCE_QUALITY_BY_ID[id];
  const e = BY_ID.get(id);
  if (!q || !e || q.status !== "verified_v2") return null;
  return {
    id,
    name: e.name,
    claims: q.claimCount,
    backed: q.evidenceClaimCount,
    surfaces: q.surfaceCount,
    href: `/design-systems/${id}#evidence`,
  };
}

function hue(hex: string): { h: number; s: number; l: number } {
  const n = parseInt(hex.slice(1), 16);
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (d === 0) return { h: 0, s: 0, l };
  const s = d / (1 - Math.abs(2 * l - 1));
  let h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  h *= 60;
  if (h < 0) h += 360;
  return { h, s, l };
}

/** Verified primaries, chromatic ones by hue then the near-neutrals by lightness. */
export function getHueWall(): { id: string; name: string; hex: string }[] {
  const items = REGISTRY.filter((e) => REFERENCE_QUALITY_BY_ID[e.id]?.status === "verified_v2").map((e) => {
    const hex = resolvePrimaryColor(e).toLowerCase();
    return { id: e.id, name: e.name, hex, ...hue(hex) };
  }).filter((i) => /^#[0-9a-f]{6}$/.test(i.hex));
  const chroma = items.filter((i) => i.s >= 0.18 && i.l > 0.08 && i.l < 0.95).sort((a, b) => a.h - b.h || a.l - b.l);
  const neutral = items.filter((i) => !(i.s >= 0.18 && i.l > 0.08 && i.l < 0.95)).sort((a, b) => a.l - b.l);
  return [...chroma, ...neutral].map(({ id, name, hex }) => ({ id, name, hex }));
}
