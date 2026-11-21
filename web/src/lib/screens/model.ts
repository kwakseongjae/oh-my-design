/**
 * The item page's Screens tab — the shape the server hands the client, and the
 * pure rules the tab draws by (groups, token chips, the token filter, the
 * dialog's sequence). No fs here: the client imports this file, and the reader
 * that fills it (local.server.ts) stays on the server.
 *
 * The screens are other companies' screens whose publication is not decided, so
 * the data only ever comes from a local folder (OMD_SCREENS_DIR) and never from
 * the bundle. Groups, chips and the panel follow the owner-approved still
 * "b-item-screens" (tools/screen-archive/make-ia-mocks.mjs on the screens branch).
 */

/** One width of one screen: the first-viewport still and, when shot, the full page. */
export interface ScreenStill {
  width: number;
  still: string;
  full: string | null;
}

/** One screen of the service — every width of the same key folds into one card. */
export interface ScreenCard {
  key: string;
  /** The walk's screen type, Korean vocabulary (홈, 검색 결과, 목록 …). */
  type: string;
  title: string;
  /** "빈 상태" or null. */
  state: string | null;
  /** Every width answered with a block (403 and the like): the card shows no image. */
  blocked: boolean;
  /** Widest first. Empty when blocked. */
  stills: ScreenStill[];
}

/** A colour token of the reference's DESIGN.md and the screens it was drawn on with exactly that value. */
export interface ScreenColor {
  token: string;
  value: string;
  /** Card keys. Empty: the value is not on any screen ("보이지 않음"). */
  screens: string[];
}

export interface ScreensModel {
  slug: string;
  /** Shooting date, YYYY-MM-DD, or null when the walk does not record one. */
  shot: string | null;
  /** The walk ran with a fresh, signed-out profile. */
  signedOut: boolean;
  /** The walk's platform ("both": the service also has an app; "web": web only), or null when it does not say. */
  platform: string | null;
  /** Widths present in the walk, widest first. */
  widths: number[];
  cards: ScreenCard[];
  colors: ScreenColor[];
  /** Colours drawn / colours comparable, black and white left out; null without a token comparison. */
  colorCount: { matched: number; comparable: number } | null;
}

export type ScreenGroupId = "core" | "states" | "more";

const CORE_TYPES = new Set(["홈", "검색", "검색 결과", "목록", "상세", "로그인"]);
const STATE_TYPES = new Set(["오류", "팝업"]);

/** 핵심 화면 · 상태 · 이 서비스의 화면, by the walk's type and state (make-ia-mocks.mjs groups). */
export function groupOf(card: Pick<ScreenCard, "type" | "state">): ScreenGroupId {
  if (card.state || STATE_TYPES.has(card.type)) return "states";
  if (CORE_TYPES.has(card.type)) return "core";
  return "more";
}

const GROUP_ORDER: ScreenGroupId[] = ["core", "states", "more"];

/** The non-empty groups in their fixed order; cards keep the walk's order inside each. */
export function groupCards<T extends Pick<ScreenCard, "type" | "state">>(cards: T[]): { id: ScreenGroupId; cards: T[] }[] {
  return GROUP_ORDER.map((id) => ({ id, cards: cards.filter((c) => groupOf(c) === id) })).filter((g) => g.cards.length > 0);
}

/** Black and white say nothing about a brand: the card chips leave them out (the panel still lists them). */
export function isBlackOrWhite(value: string): boolean {
  const v = value.trim().toLowerCase();
  return ["#000", "#000000", "#000000ff", "#fff", "#ffffff", "#ffffffff"].includes(v);
}

/** Up to `max` colour tokens drawn on this screen, black and white left out, in the DESIGN.md's order. */
export function cardChips(key: string, colors: ScreenColor[], max = 4): ScreenColor[] {
  return colors.filter((c) => c.screens.includes(key) && !isBlackOrWhite(c.value)).slice(0, max);
}

/** The cards a token filter keeps: every card with no filter, else the screens the token was drawn on. */
export function filterCards<T extends Pick<ScreenCard, "key">>(cards: T[], colors: ScreenColor[], token: string | null): T[] {
  if (!token) return cards;
  const color = colors.find((c) => c.token === token);
  if (!color) return cards;
  const on = new Set(color.screens);
  return cards.filter((c) => on.has(c.key));
}

/** The still at the leading width, else the first one there is. */
export function leadStill(card: ScreenCard, lead: number): ScreenStill | null {
  return card.stills.find((s) => s.width === lead) ?? card.stills[0] ?? null;
}

/** The still the other width shows beside the lead, or null when the screen has one width. */
export function insetStill(card: ScreenCard, lead: number): ScreenStill | null {
  const main = leadStill(card, lead);
  return card.stills.find((s) => s !== main) ?? null;
}

/** The cards the dialog walks with previous / next: on screen now, in display order, not blocked. */
export function dialogSequence(cards: ScreenCard[]): ScreenCard[] {
  return groupCards(cards).flatMap((g) => g.cards).filter((c) => !c.blocked && c.stills.length > 0);
}

// ---- the /screens gallery and the landing section that leads to it ----------------------------------------------
// Shelves by screen type, from the stills drawn on 2026-11-21 (tools/screen-archive/make-gallery-mocks.mjs on the
// screens branch): the same kind of screen across services side by side, each tile with the service's DESIGN.md
// colours drawn on it, and the state screens (empty state, not found) as shelves of their own.

/** A DESIGN.md colour drawn on a screen: one tile dot. */
export interface ShotDot {
  token: string;
  value: string;
}

/** One screen of one service as the gallery draws it. Only screens with a still: blocked ones never get here. */
export interface GalleryShot {
  slug: string;
  key: string;
  type: string;
  title: string;
  state: string | null;
  /** Widest first; a screen shot at one width only has one. */
  stills: ScreenStill[];
  /** Up to three, see shotDots. Empty when the service has no tokens.json. */
  dots: ShotDot[];
}

export interface GalleryService {
  slug: string;
  /** The registry's name (English page) or displayName (Korean page). */
  name: string;
  /** Its DESIGN.md page on this locale; the same URL + "#screens" opens its Screens tab. */
  href: string;
  /** Screens with a still, any width. */
  count: number;
}

export interface GalleryModel {
  /** In gallery order (orderServices). */
  services: GalleryService[];
  /** Service by service in that order, each in its walk's order. */
  shots: GalleryShot[];
  /** Shooting dates, earliest and latest (the same day when every walk ran on one), or null. */
  shot: { from: string; to: string } | null;
  /** Every walk ran signed out. */
  signedOut: boolean;
  /** Widths present, widest first. */
  widths: number[];
}

/** max − min of the RGB channels of a #rrggbb value: 0 for greys, higher for a stronger hue; 0 when not a hex colour. */
export function chroma(value: string): number {
  const m = /^#([0-9a-f]{6})/i.exec(value.trim());
  if (!m) return 0;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16));
  return Math.max(r, g, b) - Math.min(r, g, b);
}

/** A tile's dots: the DESIGN.md colours drawn on this screen, black and white left out, the ones with a hue first
 *  (stable: equal chroma keeps the DESIGN.md's order), at most `max`. */
export function shotDots(key: string, colors: ScreenColor[], max = 3): ShotDot[] {
  return colors
    .filter((c) => c.screens.includes(key) && !isBlackOrWhite(c.value))
    .map((c, i) => ({ c, i, k: chroma(c.value) }))
    .sort((a, b) => b.k - a.k || a.i - b.i)
    .slice(0, max)
    .map(({ c }) => ({ token: c.token, value: c.value }));
}

/** The services in gallery order: those with an app as well as the web first, then by name in the page's language. */
export function orderServices<T extends { name: string; platform: string | null }>(services: T[], locale: string): T[] {
  const coll = new Intl.Collator(locale);
  const rank = (s: T) => (s.platform === "both" ? 0 : 1);
  return [...services].sort((a, b) => rank(a) - rank(b) || coll.compare(a.name, b.name));
}

/** The shelves that always come first, in this order, when they have screens. */
export const FIXED_SHELVES = ["home", "results", "list", "detail", "login", "empty", "notfound"] as const;
export type FixedShelfId = (typeof FIXED_SHELVES)[number];

const TYPE_SHELF: Record<string, FixedShelfId> = { 홈: "home", "검색 결과": "results", 목록: "list", 상세: "detail", 로그인: "login" };

/** The fixed shelf a screen belongs to, or null. A state wins over the type: a search with no results is an empty
 *  state, not a search result; the walk's 오류 screens are the addresses that do not exist. */
export function fixedShelfOf(shot: Pick<GalleryShot, "type" | "state">): FixedShelfId | null {
  if (shot.state === "빈 상태") return "empty";
  if (shot.type === "오류") return "notfound";
  return TYPE_SHELF[shot.type] ?? null;
}

/** The still at exactly this width, or null: a phone shelf never borrows a desktop still. */
export function stillAt(shot: Pick<GalleryShot, "stills">, width: number): ScreenStill | null {
  return shot.stills.find((s) => s.width === width) ?? null;
}

export interface Shelf<T> {
  /** For anchors: a fixed id, "type-<type>" or "more". */
  id: string;
  kind: "fixed" | "type" | "more";
  /** The fixed shelf, or null. */
  fixed: FixedShelfId | null;
  /** The walk's type of a "type" shelf, or null. */
  type: string | null;
  shots: T[];
}

/** Each service's first screen comes first, so a shelf opens on as many services as it has; the rest follow in the
 *  same service order. Inside a service the walk's order holds. */
export function firstPerService<T extends Pick<GalleryShot, "slug">>(shots: T[], order: string[]): T[] {
  const per = order.map((slug) => shots.filter((s) => s.slug === slug));
  return [...per.flatMap((x) => x.slice(0, 1)), ...per.flatMap((x) => x.slice(1))];
}

/** A screen-type id fit for an anchor: "type-" and the walk's type with its spaces as dashes. */
export const typeShelfId = (type: string) => "type-" + type.trim().replace(/\s+/g, "-");

/**
 * The shelves "by screen type" at one width: the fixed shelves in their order, then every other type with at least
 * `minOther` screens by count (ties by name), then one last shelf for the rest. Only screens with a still at that
 * width, so the shelves and their counts follow the width switch. Empty shelves are left out.
 */
export function typeShelves<T extends Pick<GalleryShot, "slug" | "type" | "state" | "stills">>(
  shots: T[],
  order: string[],
  width: number,
  minOther = 3,
): Shelf<T>[] {
  const here = shots.filter((s) => stillAt(s, width));
  const out: Shelf<T>[] = [];
  for (const id of FIXED_SHELVES) {
    const xs = here.filter((s) => fixedShelfOf(s) === id);
    if (xs.length) out.push({ id, kind: "fixed", fixed: id, type: null, shots: firstPerService(xs, order) });
  }
  const others = here.filter((s) => fixedShelfOf(s) === null);
  const byType = new Map<string, T[]>();
  for (const s of others) byType.set(s.type, [...(byType.get(s.type) ?? []), s]);
  const coll = new Intl.Collator("ko");
  const big = [...byType].filter(([, xs]) => xs.length >= minOther).sort((a, b) => b[1].length - a[1].length || coll.compare(a[0], b[0]));
  for (const [type, xs] of big) out.push({ id: typeShelfId(type), kind: "type", fixed: null, type, shots: firstPerService(xs, order) });
  const bigTypes = new Set(big.map(([type]) => type));
  const rest = others.filter((s) => !bigTypes.has(s.type));
  if (rest.length) out.push({ id: "more", kind: "more", fixed: null, type: null, shots: firstPerService(rest, order) });
  return out;
}

/** The shelves "by service" at one width: one per service in gallery order, its screens in the walk's order. */
export function serviceShelves<T extends Pick<GalleryShot, "slug" | "stills">>(shots: T[], order: string[], width: number): { slug: string; shots: T[] }[] {
  return order.map((slug) => ({ slug, shots: shots.filter((s) => s.slug === slug && stillAt(s, width)) })).filter((x) => x.shots.length > 0);
}

/** The landing's row for one fixed shelf: each service's first screen of it at that width, in service order, at most `n`. */
export function teaserRow<T extends Pick<GalleryShot, "slug" | "type" | "state" | "stills">>(shots: T[], order: string[], width: number, shelf: FixedShelfId, n = 7): T[] {
  const out: T[] = [];
  for (const slug of order) {
    const first = shots.find((s) => s.slug === slug && fixedShelfOf(s) === shelf && stillAt(s, width));
    if (first) out.push(first);
    if (out.length === n) break;
  }
  return out;
}
