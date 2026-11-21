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
