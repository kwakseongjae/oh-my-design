/**
 * The item page's Screens tab — the shape the server hands the client, and the
 * pure rules the tab draws by (groups, the dialog's sequence). No fs here: the
 * client imports this file, and the reader that fills it (local.server.ts) stays
 * on the server. The /screens gallery and the landing wall have theirs in gallery.ts.
 *
 * The data comes from the published manifest (public.server.ts) or, to preview a
 * walk, a local folder (local.server.ts); source.server.ts picks. Groups, chips and the panel follow the owner-approved still
 * "b-item-screens" (tools/screen-archive/make-ia-mocks.mjs on the screens branch).
 */

/** One width of one screen: the first-viewport still, its small rendition when one was made (the gallery cards and
 *  the landing wall show it; the large view keeps the still), and, when shot, the full page. */
export interface ScreenStill {
  width: number;
  still: string;
  thumb: string | null;
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
  /** People's names or uploaded pictures were replaced before the still was taken. */
  masked: boolean;
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
  /** The site publishes screens (source.server.ts screensPublished): the tab adds its rights and takedown lines. */
  published: boolean;
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

/** Mobile stills are shot at a 390 viewport, desktop stills at 1440; anything under 1024 is a mobile width. Every page
 *  names the two by these words only (모바일 / 데스크톱, Mobile / Desktop), never by a number; URLs say `device=desktop`. */
export type Device = "mobile" | "desktop";
export const DEVICES: readonly Device[] = ["mobile", "desktop"];
export const deviceOf = (width: number): Device => (width < 1024 ? "mobile" : "desktop");

/** The still on this device, or null: a mobile view never borrows a desktop still, nor the other way round. */
export function stillOn(card: Pick<ScreenCard, "stills">, device: Device): ScreenStill | null {
  return card.stills.find((s) => deviceOf(s.width) === device) ?? null;
}

/** The devices a set of screens has stills on, mobile first. */
export function devicesOf(cards: Pick<ScreenCard, "stills">[]): Device[] {
  const present = new Set(cards.flatMap((c) => c.stills.map((s) => deviceOf(s.width))));
  return DEVICES.filter((d) => present.has(d));
}

/** What one device shows: every screen with a still on it, and the blocked ones (which say so on either device). */
export function cardsOn<T extends Pick<ScreenCard, "stills" | "blocked">>(cards: T[], device: Device): T[] {
  return cards.filter((c) => c.blocked || stillOn(c, device) !== null);
}

/** The cards the dialog walks with previous / next: on screen now, in display order, not blocked. */
export function dialogSequence(cards: ScreenCard[]): ScreenCard[] {
  return groupCards(cards).flatMap((g) => g.cards).filter((c) => !c.blocked && c.stills.length > 0);
}
