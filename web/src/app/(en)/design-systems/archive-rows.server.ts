/**
 * Server half of the DESIGN.md archive (round 11, W6) and the item hero's logo.
 * Reads the registry, the quality table, the logo collection and the canonical
 * files here, so the client views receive plain rows (lib/client-registry-boundary.test.ts).
 *
 * Logos are genuine or absent (owner rule, round 11 #16):
 *   1. the official SVG in data/brand-logos.json (every variant cites its source);
 *   2. else the registry logo, only when it is the brand's own favicon
 *      (`type: "favicon"`, an absolute URL) and the 2026-10-20 probe found a real image;
 *   3. else nothing — the card is text only.
 * Never Simple Icons (`type: "simpleicons"` is community-redrawn), never a GitHub org
 * avatar (`type: "github"`: nothing records that the org is the brand's own), never a
 * keycap glyph or an initial. A record whose guideline forbids gallery or decorated use
 * (`risk_tier: "high"`: LINE, Cybozu, Loglass) shows no logo at all, as landing-a/caps.ts
 * already refuses it; its favicon is the same protected mark, so that is not shown either.
 */

import { REGISTRY, REGISTRY_BY_ID, type RefEntry } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID, type ReferenceQualityStatus } from "@/data/reference-quality.generated";
import logoCollection from "@/data/brand-logos.json";
import { CJK_RE } from "@/lib/landing-a/resolve";
import { loadDetail } from "@/lib/references/detail-loader.server";
import { SEARCH_ALIASES } from "@/lib/search-aliases";
import { hasKoDetailId, koName } from "@/lib/i18n/ko-detail.server";
import { detailHrefFor } from "@/lib/i18n/ko-detail";

/* ─────────── logos ─────────── */

export interface ArchiveLogo {
  /** Same-origin `/brand-svg/…` path or the registry's favicon URL. */
  src: string;
  kind: "svg" | "favicon";
  /** White artwork published for dark grounds (`dark_bg`): shown on an ink tile, as delivered. */
  dark?: boolean;
}

interface LogoVariant {
  ref: string;
  source?: string;
  license?: string;
  dark_bg?: boolean;
}
interface LogoRecord {
  id: string;
  risk_tier?: string;
  default_variant?: string;
  variants: Record<string, LogoVariant>;
}

const LOGO_RECORDS = (logoCollection as unknown as { records: LogoRecord[] }).records;
const LOGO_BY_ID = new Map(LOGO_RECORDS.map((r) => [r.id, r]));

/**
 * Registry favicons that are not a usable brand image, from a probe of all 396
 * favicon URLs on 2026-10-20: Google's favicon proxy answered 404 with its 16×16
 * globe (which a browser renders without firing onError), or the brand's icon was
 * under 32px. The client also hides any raster under 32px it receives, for drift.
 */
const FAVICON_UNUSABLE = new Set([
  "autopedia", "banksalad", "cashapp", "china-airlines", "ecosia", "evaair", "jal", "kakaopage",
  "megabox", "melon", "poya", "sainsburys", "serendie", "soomgo", "taishinbank", "thsr",
  "trenbe", "wconcept", "wired", "yogiyo",
]);

function svgLogo(rec: LogoRecord): ArchiveLogo | null {
  // A symbol reads at card size and does not repeat the name printed beside it.
  const order = ["symbol", rec.default_variant, ...Object.keys(rec.variants)]
    .filter((v, i, all): v is string => !!v && !!rec.variants[v] && all.indexOf(v) === i)
    .filter((v) => !!rec.variants[v].source && !!rec.variants[v].license);
  const pick = order.find((v) => !rec.variants[v].dark_bg) ?? order[0];
  if (!pick) return null;
  const v = rec.variants[pick];
  return { src: "/" + v.ref, kind: "svg", ...(v.dark_bg ? { dark: true } : {}) };
}

/** The logo for a reference, or null (text only). */
export function logoFor(id: string): ArchiveLogo | null {
  const rec = LOGO_BY_ID.get(id);
  if (rec?.risk_tier === "high") return null;
  if (rec) {
    const svg = svgLogo(rec);
    if (svg) return svg;
  }
  const entry = REGISTRY_BY_ID[id];
  if (!entry || entry.logo.type !== "favicon") return null;
  if (!/^https:\/\//.test(entry.logo.slug) || FAVICON_UNUSABLE.has(id)) return null;
  return { src: entry.logo.slug, kind: "favicon" };
}

/** Which bucket a reference's logo falls in — the coverage line in reports and tests. */
export function logoCoverage(): { svg: number; favicon: number; none: number } {
  const out = { svg: 0, favicon: 0, none: 0 };
  for (const r of REGISTRY) {
    const l = logoFor(r.id);
    if (!l) out.none++;
    else out[l.kind]++;
  }
  return out;
}

/** Logo file paths the collection points at (tests check each exists under public/). */
export function logoFilePaths(): string[] {
  return LOGO_RECORDS.flatMap((r) => Object.values(r.variants).map((v) => v.ref));
}

/* ─────────── regions, names, summaries ─────────── */

export type ArchiveRegion = "KR" | "JP" | "TW" | "CN" | "other";

/** The region filter (owner decision 1, 2026-10-20): registry country = parent HQ. */
export function archiveRegion(country: string): ArchiveRegion {
  return country === "KR" || country === "JP" || country === "TW" || country === "CN" ? country : "other";
}

const CC_LANG: Record<string, string> = { KR: "ko", JP: "ja", TW: "zh-Hant", CN: "zh-Hans" };
const HANGUL = /[가-힣]/g;
const KANA = /[぀-ヿ]/g;
const HAN = /[㐀-鿿]/g;
const LATIN = /[A-Za-z]/g;

/** `lang` for a CJK name, from the brand's country; Latin names are English. */
function nameLang(name: string, country: string): string {
  return CJK_RE.test(name) ? (CC_LANG[country] ?? "en") : "en";
}

/** Dominant script of a sentence → a `lang` value (krds writes its summary in Korean). */
export function textLang(s: string, country: string): string {
  const n = (re: RegExp) => s.match(re)?.length ?? 0;
  const latin = n(LATIN);
  if (n(HANGUL) > latin) return "ko";
  if (n(KANA) > latin / 2 && n(KANA) > 0) return "ja";
  if (n(HAN) > latin) return country === "CN" ? "zh-Hans" : country === "JP" ? "ja" : "zh-Hant";
  return "en";
}

function stripMd(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

/** The first sentence of the reference's own opening paragraph (the item page's lead), or "". */
export function firstSentence(mood: string): string {
  let flat = stripMd(mood);
  if (!flat) return "";
  // Ten references open on the brand's own quoted tagline ("Spend smarter with
  // Spendesk."). The sentence that says what the company is comes after it.
  const tagline = /^["“][^"”]{1,320}["”]\s+(?=[A-Z0-9぀-鿿가-힣])/.exec(flat);
  if (tagline && flat.length - tagline[0].length > 20) flat = flat.slice(tagline[0].length);
  const cjkStop = flat.search(/[。！？]/);
  const end = /[.!?]["'”’)]?\s+(?=\S)/g;
  for (let m = end.exec(flat); m; m = end.exec(flat)) {
    if (cjkStop >= 0 && cjkStop < m.index) break;
    const head = flat.slice(0, m.index + m[0].trimEnd().length);
    if (/[a-z]/.test(flat[m.index + m[0].length] ?? "") || ABBREVIATION.test(head)) continue;
    return head.trim();
  }
  return cjkStop >= 0 ? flat.slice(0, cjkStop + 1).trim() : flat;
}

/** "Corp." / "Inc." / "e.g." / "U.S." end a word, not a sentence. */
const ABBREVIATION = /(?:\b(?:Corp|Inc|Co|Ltd|Mr|Mrs|Ms|Dr|St|Jr|Sr|vs|etc|e\.g|i\.e|approx|Bros|Dept|Intl|Mt)|\b[A-Za-z])\.$/;

let SUMMARIES: Map<string, string> | null = null;

/**
 * One-line summary per reference: the first sentence the canonical DESIGN.md
 * opens with. Read once per server process (≈0.6s for all 521 on a laptop) — the
 * archive revalidates hourly, and the canonical files are traced into the route.
 */
export function summaryOf(id: string): string {
  if (!SUMMARIES) {
    SUMMARIES = new Map();
    for (const r of REGISTRY) SUMMARIES.set(r.id, firstSentence(loadDetail(r.id)?.mood ?? ""));
  }
  return SUMMARIES.get(id) ?? "";
}

/* ─────────── rows ─────────── */

export type ArchiveLocale = "en" | "ko";

/** One archive card. Serializable: it crosses into the client view as a prop. */
export interface ArchiveRow {
  id: string;
  name: string;
  nameLang: string;
  /** Other names the search matches (registry name/displayName, aliases). Never displayed. */
  terms: string[];
  href: string;
  summary: string;
  summaryLang: string;
  /** Registry category slug; the label comes from copy/r11-archive.ts. */
  domain: string;
  country: string;
  countryLabel: string;
  region: ArchiveRegion;
  tier: ReferenceQualityStatus;
  verifiedAt: string | null;
  logo: ArchiveLogo | null;
  /** copy + download + install counters; 0 = unknown or none, hidden. */
  installs: number;
}

/** Country name in the page language. The registry writes UK where ISO writes GB. */
function countryLabel(code: string, locale: ArchiveLocale): string {
  try {
    return new Intl.DisplayNames([locale], { type: "region" }).of(code === "UK" ? "GB" : code) ?? code;
  } catch {
    return code;
  }
}

/** The English page's brand name — the same function as the item page's title and h1. */
export function enName(r: RefEntry): string {
  return r.name || r.displayName || r.id.replace(/\.(app|ai)$/, "").replace(/^./, (c) => c.toUpperCase());
}

export function archiveRow(r: RefEntry, locale: ArchiveLocale, installs: Record<string, number>): ArchiveRow {
  const q = REFERENCE_QUALITY_BY_ID[r.id];
  const name = locale === "ko" ? koName(r.id) : enName(r);
  const summary = summaryOf(r.id);
  return {
    id: r.id,
    name,
    nameLang: nameLang(name, r.country),
    terms: [r.name, r.displayName, ...(SEARCH_ALIASES[r.id] ?? [])].filter((s, i, all) => !!s && s !== name && all.indexOf(s) === i),
    href: detailHrefFor(locale, r.id, hasKoDetailId(r.id)),
    summary,
    summaryLang: textLang(summary, r.country),
    domain: r.category,
    country: r.country,
    countryLabel: countryLabel(r.country, locale),
    region: archiveRegion(r.country),
    tier: q?.status ?? "legacy_snapshot",
    verifiedAt: q?.verifiedAt ?? null,
    logo: logoFor(r.id),
    installs: installs[r.id] ?? 0,
  };
}
