import brandLogos from "@/data/brand-logos.json";
import { lookupFont } from "@/lib/font-registry";
import { OPEN_FACES, PAGE_SCRIPT, PAGE_STACK } from "@/components/brand-a/journey/face";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { getR11Hero, withName, type CardText, type HeroKind } from "@/components/brand-a/copy/r11-hero";
import { detailHrefFor, hasKoDetail, type QualityStatus } from "@/lib/i18n/ko-detail";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { contrast } from "./contrast";
import { capData } from "./data.server";
import { GEN_UI_PREFERRED_BUTTON } from "./picks";
import { getProp } from "./props";
import { num, resolveSlots, type ButtonSlot, type Claimed, type ResolvedSlots, type TokensLike, type TypeSlot } from "./resolve";

/**
 * Round 11 hero chat + CLI apply step (docs/REDESIGN_R11_PLAN_2026-10-20.md W1 #2 #6 #7, W3).
 *
 * Each locale's chat is about that locale's representative company and ends in an example card
 * drawn only from the company's verified tokens: every colour, size, weight, radius, height and
 * padding below is a claimed value read through the landing's resolver (resolve.ts, read-only
 * here) or by its exact token path, and an unclaimed value is simply not set (unknown = absent).
 * Layout (flex, gaps, alignment) is OmD's and lives in classes; it carries no brand value.
 *
 * Server only: reads the generated registry. Client islands receive the serialisable ChatCard.
 *
 * Which company (owner decision 4, 2026-10-20): KR Toss and JP pixiv are fixed; EN and TW are
 * measured. cardCoverage() counts the 14 slots the example card needs, colour slots only when
 * they are a hex fill, and pickCompany() breaks a tie by an official logo in brand-logos.json,
 * then by a claimed primary action. Measured 2026-10-20 (__tests__/r11-hero.test.ts prints it):
 *   EN  linear.app 13/14 (surface is "transparent", not a fill) · stripe 13/14 (no UI face)
 *       → tie; no official logo for either → Linear's button is `primary-action` (the get-started
 *       pill), Stripe's only claimed buttons are Docs controls (`docs-search-prompt`) → Linear.
 *   TW  104 13/14 (no UI face) · eslite 7/14 (no heading tier, no button) → 104.
 *
 * Round 12 (owner 2026-10-21): a keycap picks the chat's company. Every company on the locale's
 * keyboard (data/hero-caps.json) gets a card, built here for the locale's caps plus its opening
 * company and handed to the client chat (getHeroChats). The card kind follows what the company's
 * product is (KIND). Toss, pixiv, Linear and 104 keep their round-11 cards unchanged; the other
 * companies are drawn by generic builders that fill each part of the card from a role ladder over
 * the company's own claimed tokens (titleType, textType, smallType, boxOf, legible), so a part
 * whose role no claimed token fills is left unset, never borrowed from another company or from
 * OmD. Coverage of the 14 card slots, measured 2026-10-21 (the test prints it):
 *
 *   company          kind      slots  missing
 *   toss             transfer  14/14  —
 *   kakaobank        transfer  14/14  —
 *   upbit            transfer  12/14  heading type, UI face
 *   socar            booking   14/14  —
 *   freee            task      14/14  —
 *   pixiv            artwork   13/14  card radius
 *   channeltalk      task      13/14  body type
 *   kream            product   13/14  heading type
 *   yanolja          booking   13/14  surface
 *   linear.app       issue     13/14  surface
 *   104              job       13/14  UI face
 *   china-airlines   booking   12/14  surface, UI face
 *   udn              article   12/14  surface, card radius
 *   kurly            product   11/14  surface, heading type, body type
 *   caddi            task      11/14  card radius, heading type, body type
 *   chatwork         task      11/14  surface, heading type, body type
 *   poya             product   11/14  body text, surface, card radius
 *   booth            product   10/14  surface, card radius, heading type, UI face
 *   class101         product    8/14  surface, no button (5 slots)
 *   eslite           product    7/14  heading type, no button (5 slots), UI face
 *   toyota           booking    6/14  body text, surface, card radius, no button (5 slots)
 *   familymart-tw    product    6/14  body text, card radius, no button (5 slots), UI face
 *   evaair           booking    5/14  body text, card radius, heading type, no button (5 slots), UI face
 *
 * "heading type" / "body type" count the resolver's tiers (a claimed size and weight); chatwork and
 * caddi claim sizes without weights, which the cards set as a size alone. The last five draw no
 * button: none of them claims a button with a solid fill.
 */

/** One claimed token as rendered: token path (no `tokens.` prefix), the registry value, its CSS. */
export interface Tok {
  readonly k: string;
  readonly v: string | number;
  readonly css: string;
}

export type CssProp = "color" | "background" | "borderColor" | "borderRadius" | "fontSize" | "fontWeight" | "lineHeight" | "height" | "padding" | "fontFamily";

export interface CardNode {
  readonly tag: "div" | "p" | "h3" | "span" | "ul" | "li";
  /** OmD layout class (sq-ex-*): flex, gaps, alignment. Never a brand value. */
  readonly cls?: string;
  readonly css?: Partial<Record<CssProp, Tok>>;
  readonly text?: string;
  readonly icon?: "check" | "heart";
  /** an OmD-made prop (lib/landing-a/props.ts) — present only when the props manifest has it */
  readonly img?: { readonly src: string; readonly width: number; readonly height: number; readonly alt: string };
  readonly kids?: readonly CardNode[];
  /** stream-in order while the Write step runs (1-based); absent = with its parent */
  readonly part?: number;
}

export type CardKind = HeroKind | "home";

export interface ChatCard {
  readonly id: string;
  readonly kind: CardKind;
  /** the file the Write step creates */
  readonly file: string;
  /** the path the Read step shows */
  readonly read: string;
  readonly root: CardNode;
  /** how many stream-in parts the card has */
  readonly parts: number;
  /** the TSX the Write step stands for, printed from `root` */
  readonly source: string;
  /** +N of the Write step's diff summary: the line count of `source` (a new file, so −0) */
  readonly lines: number;
  /** distinct claimed tokens the card renders */
  readonly tokens: number;
  /**
   * The claimed UI face, and whether the card is set in it (else it is in the page's own face).
   * `sub` is never set since round 13 (no substitute faces in the chat); it stays optional in the
   * type only so an older reader (cli-steps.tsx) keeps compiling.
   */
  readonly face: { readonly name: string | null; readonly shown: boolean; readonly sub?: string };
}

/** A card as the client chat gets it: the printed source stays on the server (only its line count is shown). */
export type ClientCard = Omit<ChatCard, "source">;

/** One company's chat on the hero (round 12): its card, the request in the page language, and its item page. */
export interface HeroChat {
  readonly card: ClientCard;
  readonly prompt: string;
  /** the chat's accessible name */
  readonly label: string;
  readonly think: string;
  /** the company as its keycap shows it (Hangul only on /ko) */
  readonly name: string;
  readonly nLang: string;
  /** the company's item page (lib/i18n/ko-detail.ts) */
  readonly href: string;
}

/** Owner decision 4 (KR, JP) and the measured picks below (EN, TW). */
export const CHAT_COMPANY: Readonly<Record<SiteLocale, string>> = { ko: "toss", ja: "pixiv", en: "linear.app", "zh-tw": "104" };
export const CHAT_CANDIDATES = { en: ["stripe", "linear.app"], "zh-tw": ["104", "eslite"] } as const;

/**
 * The card each company's chat ends in, by what its product is (round 12). Fintech (Toss, KakaoBank,
 * Upbit's digital-asset exchange) → a transfer receipt; commerce, retail and marketplaces → a product
 * card; mobility, travel, airlines and stays (Toyota's test drive too) → a booking confirmation; news
 * → an article; B2B SaaS (Channel Talk's team inbox, Chatwork's tasks, CADDi's quotes, freee's
 * approvals) → a task card; and the round-11 artwork (pixiv), issue (Linear) and job (104) cards.
 */
export const KIND: Readonly<Record<string, HeroKind>> = {
  toss: "transfer", kakaobank: "transfer", upbit: "transfer",
  pixiv: "artwork",
  "linear.app": "issue",
  "104": "job",
  kream: "product", kurly: "product", class101: "product", booth: "product", eslite: "product", poya: "product", "familymart-tw": "product",
  socar: "booking", yanolja: "booking", toyota: "booking", "china-airlines": "booking", evaair: "booking",
  udn: "article",
  channeltalk: "task", chatwork: "task", caddi: "task", freee: "task",
};

/**
 * Where the button the resolver ranks first is not the one a card should carry: Yanolja's top-ranked
 * `utility-button` is a white fill whose edge is a shadow the tokens don't carry, so on its white
 * canvas it would read as bare text; its `outlined-action` is the full-width action of its hotel and
 * leisure pages (1px #1b1c1f edge).
 */
const CHAT_PREFERRED_BUTTON: Readonly<Record<string, string>> = { yanolja: "outlined-action" };

/**
 * Tiers a generic card takes by name where the role ladders below would pick another. Toss's card
 * title is its h3 (round 11). CADDi publishes an unnamed size scale (12–48px, sizes without weights)
 * whose §3 says 16px leads and 14px follows; its 20px step titles the card.
 */
const PIN: Readonly<Record<string, { readonly title?: string; readonly text?: string; readonly small?: string }>> = {
  toss: { title: "h3" },
  caddi: { title: "l", text: "m", small: "s" },
};

/* ---------- coverage ---------- */

const HEX = /^#[0-9a-f]{6}$/i;
export const CARD_SLOTS = [
  "primary", "canvas", "text", "body text", "surface", "card radius", "heading type", "body type",
  "button fill", "button text", "button radius", "button height", "button label type", "UI face",
] as const;
export type CardSlot = (typeof CARD_SLOTS)[number];

const slotsOf = (id: string): ResolvedSlots | null => {
  const r = REGISTRY_BY_ID[id];
  if (!r) return null;
  return resolveSlots(r.tokens as TokensLike, REFERENCE_VERIFICATION_BY_ID[id], { preferButton: CHAT_PREFERRED_BUTTON[id] ?? GEN_UI_PREFERRED_BUTTON[id] });
};

/** The button reads as the primary action: the resolver's own top rank (preferred component or a primary/cta name). */
const isPrimaryAction = (id: string, b: ButtonSlot | null) => !!b && (GEN_UI_PREFERRED_BUTTON[id] === b.k || /primary|cta|main|solid|fill/.test(b.k));

export function hasOfficialLogo(id: string): boolean {
  return (brandLogos as { records: { id: string; status?: string }[] }).records.some((r) => r.id === id && r.status === "available");
}

export interface Coverage {
  readonly id: string;
  readonly verified: boolean;
  readonly have: number;
  readonly of: number;
  readonly missing: readonly CardSlot[];
  readonly logo: boolean;
  readonly primaryAction: string | null;
}

export function cardCoverage(id: string): Coverage {
  const s = slotsOf(id);
  const hex = (c: Claimed | null) => !!c && HEX.test(c.v);
  const b = s?.btn ?? null;
  const got: Record<CardSlot, boolean> = {
    primary: hex(s?.primary ?? null),
    canvas: hex(s?.canvas ?? null),
    text: hex(s?.fg ?? null),
    "body text": hex(s?.body ?? null),
    surface: hex(s?.surface ?? null),
    "card radius": s?.sr != null,
    "heading type": s?.head != null,
    "body type": s?.bod != null,
    "button fill": !!b && HEX.test(b.bg),
    "button text": !!b?.fg && HEX.test(b.fg),
    "button radius": b?.radius != null,
    "button height": b?.height != null,
    "button label type": b?.fs != null && b?.fw != null,
    "UI face": s?.famT != null,
  };
  const missing = CARD_SLOTS.filter((k) => !got[k]);
  return {
    id,
    verified: REFERENCE_QUALITY_BY_ID[id]?.status === "verified_v2",
    have: CARD_SLOTS.length - missing.length,
    of: CARD_SLOTS.length,
    missing,
    logo: hasOfficialLogo(id),
    primaryAction: b && isPrimaryAction(id, b) ? b.k : null,
  };
}

/** Most card slots first; a tie goes to an official logo, then to a claimed primary action. */
export function pickCompany(ids: readonly string[]): string {
  const rank = ids.map(cardCoverage).filter((c) => c.verified);
  rank.sort((a, b) => b.have - a.have || +b.logo - +a.logo || +!!b.primaryAction - +!!a.primaryAction);
  return rank[0]?.id ?? ids[0];
}

/* ---------- claimed values as tokens ---------- */

function claimedAt(id: string, path: string): unknown {
  if (!(`tokens.${path}` in (REFERENCE_VERIFICATION_BY_ID[id]?.claims ?? {}))) return undefined;
  let cur: unknown = REGISTRY_BY_ID[id]?.tokens;
  for (const seg of path.split(".")) cur = cur && typeof cur === "object" ? (cur as Record<string, unknown>)[seg] : undefined;
  return cur;
}

const px = (n: number) => `${n}px`;

function colorTok(id: string, key: string): Tok | null {
  const v = claimedAt(id, `colors.${key}`);
  return typeof v === "string" && HEX.test(v.trim()) ? { k: `colors.${key}`, v, css: v.trim().toLowerCase() } : null;
}
/** A resolved colour slot as a token: the registry's own value (its case kept), the resolver's lower-cased hex as CSS. */
const slotColor = (id: string, c: Claimed | null): Tok | null => (c && HEX.test(c.v) ? { k: c.k, v: (claimedAt(id, c.k) as string | undefined) ?? c.v, css: c.v } : null);

/** A type tier as CSS. `fontWeight` is absent only for a tier that claims a size without a weight. */
type TypeToks = { fontSize: Tok; fontWeight?: Tok; lineHeight?: Tok };
function lineTok(id: string, key: string): Tok | null {
  const lh = claimedAt(id, `typography.${key}.lineHeight`);
  if (typeof lh === "number") return { k: `typography.${key}.lineHeight`, v: lh, css: lh > 4 ? px(lh) : String(lh) };
  if (typeof lh === "string" && /^[\d.]+(px)?$/.test(lh.trim())) return { k: `typography.${key}.lineHeight`, v: lh, css: lh.trim() };
  return null;
}
function tierToks(id: string, key: string): TypeToks | null {
  const size = claimedAt(id, `typography.${key}.size`), weight = claimedAt(id, `typography.${key}.weight`);
  const sz = num(size), wt = num(weight);
  if (sz == null || wt == null) return null;
  const out: TypeToks = {
    fontSize: { k: `typography.${key}.size`, v: size as string | number, css: px(sz) },
    fontWeight: { k: `typography.${key}.weight`, v: weight as string | number, css: String(wt) },
  };
  const lh = lineTok(id, key);
  if (lh) out.lineHeight = lh;
  return out;
}
const slotType = (id: string, t: TypeSlot | null) => (t ? tierToks(id, t.k) : null);

type BtnToks = Partial<Record<"background" | "color" | "borderRadius" | "height" | "fontSize" | "fontWeight" | "padding", Tok>>;
function buttonToks(id: string, b: ButtonSlot | null): BtnToks | null {
  if (!b) return null;
  const at = (f: string) => claimedAt(id, `components.${b.k}.${f}`);
  const out: BtnToks = { background: { k: `components.${b.k}.bg`, v: at("bg") as string, css: b.bg } };
  if (b.fg && HEX.test(b.fg)) out.color = { k: `components.${b.k}.fg`, v: at("fg") as string, css: b.fg.toLowerCase() };
  if (b.radius != null) {
    const k = b.rk ?? `components.${b.k}.radius`;
    out.borderRadius = { k, v: (b.rk ? claimedAt(id, b.rk) : at("radius")) as string | number, css: px(b.radius) };
  }
  if (b.height != null) {
    const k = b.hk ? `components.${b.k}.use` : `components.${b.k}.height`;
    out.height = { k, v: claimedAt(id, k) as string | number, css: px(b.height) };
  }
  if (b.fs != null && b.fw != null) {
    const font = at("font") as string;
    out.fontSize = { k: `components.${b.k}.font`, v: font, css: px(b.fs) };
    out.fontWeight = { k: `components.${b.k}.font`, v: font, css: String(b.fw) };
  }
  if (b.pad) out.padding = { k: `components.${b.k}.padding`, v: at("padding") as string, css: b.pad };
  return out;
}

/** Drop the properties that resolved to nothing, so an unknown value is never set. */
function css(o: Partial<Record<CssProp, Tok | null | undefined>>): Partial<Record<CssProp, Tok>> {
  return Object.fromEntries(Object.entries(o).filter(([, t]) => !!t)) as Partial<Record<CssProp, Tok>>;
}
const typeCss = (t: TypeToks | null, color: Tok | null) => css({ color, ...(t ?? {}) });

function el(tag: CardNode["tag"], o: Omit<CardNode, "tag" | "kids"> = {}, kids?: (CardNode | null)[]): CardNode {
  const k = kids?.filter((x): x is CardNode => !!x);
  return { tag, ...o, ...(k?.length ? { kids: k } : {}) };
}
const button = (b: BtnToks | null, label: string, part: number) => (b ? el("span", { cls: "sq-ex-btn", css: css(b), text: label, part }) : null);

/* ---------- round 12: role ladders for the generic cards ---------- */

interface Tier { readonly k: string; readonly size: number; readonly weight: number | null }

/** Every type tier with a claimed size (`leading` is a line-height scale, not a tier). */
function tiersOf(id: string): Tier[] {
  const T = ((REGISTRY_BY_ID[id]?.tokens as TokensLike | undefined)?.typography ?? {}) as Record<string, unknown>;
  const out: Tier[] = [];
  for (const k of Object.keys(T)) {
    if (k === "family" || k === "leading") continue;
    const size = num(claimedAt(id, `typography.${k}.size`));
    if (size != null) out.push({ k, size, weight: num(claimedAt(id, `typography.${k}.weight`)) });
  }
  return out;
}

/** A tier's claimed size, with its weight and line height where those are claimed too. */
function tierType(id: string, key: string): TypeToks | null {
  const strict = tierToks(id, key);
  if (strict) return strict;
  const size = claimedAt(id, `typography.${key}.size`), sz = num(size);
  if (sz == null) return null;
  const out: TypeToks = { fontSize: { k: `typography.${key}.size`, v: size as string | number, css: px(sz) } };
  const lh = lineTok(id, key);
  if (lh) out.lineHeight = lh;
  return out;
}

/** The size and weight a claimed card component's `font` declares (e.g. Kurly's product-list article, 14px / 400). */
function compFont(id: string, t: TypeSlot | null): TypeToks | null {
  if (!t || !t.k.startsWith("components.")) return null;
  const v = claimedAt(id, t.k) as string;
  return { fontSize: { k: t.k, v, css: px(t.size) }, fontWeight: { k: t.k, v, css: String(t.weight) } };
}

const largest = (xs: readonly Tier[]): Tier | undefined => [...xs].sort((a, b) => b.size - a.size)[0];
const HEAD_KEY = /h[1-6]|heading|headline|title|display|section|subhead|subtitle/;
const PAGE_HEAD = /marketing|hero|banner|cover/;
const INPUT_KEY = /search|input|field|placeholder|code|mono/;

/**
 * A card title: the tier the reference names for a card, else its largest heading that fits a card
 * (18–28px, then up to 32px), else its largest emphasised tier (weight ≥ 600, 16–28px), else any
 * tier of 18–32px, else a heading that claims only a size, else — every heading being larger — its
 * smallest heading, as resolve.ts does (China Airlines' 40px section heading). Page-scale headings
 * (marketing, hero) and input text are never a card title. Nothing fits → no size is set.
 */
function titleType(id: string): TypeToks | null {
  const pin = PIN[id]?.title;
  if (pin) return tierType(id, pin);
  const all = tiersOf(id).filter((t) => !INPUT_KEY.test(t.k));
  const heads = all.filter((t) => HEAD_KEY.test(t.k) && !PAGE_HEAD.test(t.k));
  const weighed = (t: Tier) => t.weight != null;
  const pick =
    heads.find((t) => /card/.test(t.k) && weighed(t)) ??
    largest(heads.filter((t) => weighed(t) && t.size >= 18 && t.size <= 28)) ??
    largest(heads.filter((t) => weighed(t) && t.size >= 16 && t.size <= 32)) ??
    largest(all.filter((t) => weighed(t) && t.weight! >= 600 && t.size >= 16 && t.size <= 28)) ??
    largest(all.filter((t) => weighed(t) && t.size >= 18 && t.size <= 32)) ??
    largest(heads.filter((t) => !weighed(t) && t.size >= 18 && t.size <= 28)) ??
    [...heads].filter(weighed).sort((a, b) => a.size - b.size)[0];
  return pick ? tierType(id, pick.k) : null;
}

function firstTier(id: string, res: readonly RegExp[]): TypeToks | null {
  const all = tiersOf(id);
  for (const re of res) {
    const hit = all.find((t) => re.test(t.k));
    if (hit) return tierType(id, hit.k);
  }
  return null;
}

/** Running text: the resolver's body tier, else the card component's own font, else a body-named tier. */
function textType(id: string, s: ResolvedSlots): TypeToks | null {
  const pin = PIN[id]?.text;
  if (pin) return tierType(id, pin);
  return slotType(id, s.bod) ?? compFont(id, s.cardFont) ?? firstTier(id, [/^(body-?1|body|text|paragraph|copy)$/, /-body$/]);
}

/** Secondary text (labels, captions, times): a small or caption tier, else running text. */
function smallType(id: string, s: ResolvedSlots): TypeToks | null {
  const pin = PIN[id]?.small;
  if (pin) return tierType(id, pin);
  return slotType(id, s.small) ?? firstTier(id, [/^(body-?small|small|body-?2|text-?small)$/, /^(caption|utility|dense|compact-control|meta|footnote|helper)/]) ?? textType(id, s);
}

/** Text colour on a fill: the first candidate that reads at 4.5:1 there. */
const AA = 4.5;
function legible(fill: string | null, ...cands: (Tok | null)[]): Tok | null {
  const bg = fill && HEX.test(fill) ? fill : "#ffffff";
  return cands.find((t) => !!t && HEX.test(t.css) && contrast(t.css, bg) >= AA) ?? null;
}

/**
 * The container a generic card's group sits in. When the radius or fill comes from a claimed card
 * component, that component alone supplies the fill, edge, padding and text colour (never mixed
 * across components, as in resolve.ts); otherwise the company's surface colour and card radius.
 */
interface Box { readonly bg: Tok | null; readonly edge: Tok | null; readonly radius: Tok | null; readonly pad: Tok | null; readonly fg: Tok | null }
function boxOf(id: string, s: ResolvedSlots): Box {
  const srTok: Tok | null = s.sr ? { k: s.sr.k, v: claimedAt(id, s.sr.k) as string | number, css: px(s.sr.v) } : null;
  const comp = [s.sr?.k, s.surface?.k].find((k) => k?.startsWith("components."))?.replace(/\.[^.]+$/, "") ?? null;
  if (!comp) return { bg: slotColor(id, s.surface), edge: null, radius: srTok, pad: null, fg: null };
  const mine = (c: { k: string } | null) => !!c && c.k.startsWith(`${comp}.`);
  const pad = mine(s.cardPad) && !/^0(px)?(\s+0(px)?)*$/.test(s.cardPad!.v) ? { k: s.cardPad!.k, v: claimedAt(id, s.cardPad!.k) as string, css: s.cardPad!.v } : null;
  return {
    bg: mine(s.surface) ? slotColor(id, s.surface) : null,
    edge: mine(s.cardBorder) ? { k: s.cardBorder!.k, v: claimedAt(id, s.cardBorder!.k) as string, css: s.cardBorder!.v } : null,
    radius: mine(s.sr) ? srTok : null,
    pad,
    fg: mine(s.cardFg) ? slotColor(id, s.cardFg) : null,
  };
}

/** A button's 1px edge colour when the component claims one (Kurly's and Upbit's white controls are drawn by it). */
function buttonEdge(id: string, b: ButtonSlot | null): Tok | null {
  if (!b) return null;
  const v = claimedAt(id, `components.${b.k}.border`);
  const m = typeof v === "string" ? v.match(/^\s*1px\b[^#]*?(#[0-9a-f]{6})\b/i) : null;
  return m ? { k: `components.${b.k}.border`, v: v as string, css: m[1].toLowerCase() } : null;
}
const buttonG = (b: BtnToks | null, edge: Tok | null, label: string, part: number) =>
  b ? el("span", { cls: `sq-ex-btn${edge ? " sq-ex-edge" : ""}`, css: css({ ...b, borderColor: edge }), text: label, part }) : null;

/* ---------- faces ---------- */

type Faces = Readonly<Record<string, string>>;

/** Open faces the landing root loads for real (landing.tsx puts --font-r11-pretendard on .sq-root). */
const ROOT_FACES: readonly string[] = ["Pretendard", "Pretendard Variable"];

/**
 * The face a card is set in (AGENTS.md, G3), per (company, page language):
 *  1. a face this page loads for the claimed one (hero-section.tsx FACES: Inter on /, Noto Sans JP
 *     and Noto Sans CJK JP on /ja, Noto Sans TC on /zh-tw) — the brand face, shown;
 *  2. an open face the landing root self-hosts (Pretendard), OFL, whose file carries the page
 *     language's script (Latin + Hangul only: never on /ja or /zh-tw) — shown;
 *  3. else no face is set: the card is in the page's own face (inherited), not a stand-in.
 *
 * Round 13 (owner 2026-10-21): no font notes in the chat. The measured-substitute step is gone from
 * these cards — a substitute may only be rendered with its label, and the chat no longer carries
 * one — so a proprietary face (Toss Product Sans, toyotatext_rg …) leaves the card in the page face.
 * The journey's labelled substitutes (journey/face.ts) are untouched.
 */
function faceOf(s: ResolvedSlots, faces: Faces, locale: SiteLocale): { name: string | null; shown: boolean; tok: Tok | null } {
  const name = s.famT?.v ?? null;
  if (!name) return { name, shown: false, tok: null };
  const loaded = faces[name];
  if (loaded) return { name, shown: true, tok: { k: s.famT!.k, v: name, css: loaded } };
  const open = OPEN_FACES[name];
  if (open && ROOT_FACES.includes(name) && lookupFont(name).license === "OFL" && open.scripts.includes(PAGE_SCRIPT[locale])) {
    return { name, shown: true, tok: { k: s.famT!.k, v: name, css: `var(${open.cssVar}), ${PAGE_STACK[locale]}` } };
  }
  return { name, shown: false, tok: null };
}

/* ---------- the cards ---------- */

function buildRoot(id: string, kind: CardKind, t: CardText, faces: Faces, locale: SiteLocale): { root: CardNode; face: ChatCard["face"] } {
  const s = slotsOf(id)!;
  const f = faceOf(s, faces, locale);
  const canvas = slotColor(id, s.canvas), fg = slotColor(id, s.fg), body = slotColor(id, s.body), primary = slotColor(id, s.primary);
  const btn = buttonToks(id, s.btn);
  const head = slotType(id, s.head), bod = slotType(id, s.bod);
  const srTok: Tok | null = s.sr ? { k: s.sr.k, v: claimedAt(id, s.sr.k) as string | number, css: px(s.sr.v) } : null;
  const rootCss = css({ background: canvas, color: fg, fontFamily: f.tok });
  const page = canvas?.css ?? null;
  let root: CardNode;

  if (kind === "transfer" || kind === "home") {
    // A centred success card (transfer) or a list screen (home, the CLI's Toss screen): rows on the
    // company's surface. Toss is round 11's card, unchanged: its title is pinned to h3, its rows take
    // body-small, and its row labels take its body grey (its muted grey on the surface is 2.8:1).
    // The check takes the primary colour only where it reads at 3:1 on the canvas (KakaoBank's
    // yellow #ffe300 doesn't, so its receipt has no mark).
    const box = boxOf(id, s);
    const fill = box.bg?.css ?? page;
    const title = titleType(id) ?? head, small = smallType(id, s), text = textType(id, s);
    const ink = legible(fill, box.fg, fg), soft = legible(fill, body, box.fg, fg);
    const rows = (a: number) =>
      el("div", { cls: "sq-ex-rows", css: css({ background: box.bg, borderRadius: box.radius }), part: a },
        t.rows.map(([k, v]) => el("div", { cls: "sq-ex-row" }, [el("span", { css: typeCss(small, soft), text: k }), el("span", { css: typeCss(kind === "home" ? text : small, ink), text: v })])));
    const mark = primary && page && contrast(primary.css, page) >= 3 ? primary : null;
    root = kind === "transfer"
      ? el("div", { cls: "sq-ex-col", css: rootCss }, [
          mark ? el("span", { cls: "sq-ex-ic", css: css({ color: mark }), icon: "check", part: 1 }) : null,
          el("h3", { css: typeCss(title, legible(page, fg)), text: t.title, part: 2 }),
          el("p", { css: typeCss(text, legible(page, body, fg)), text: t.sub, part: 2 }),
          rows(3),
          buttonG(btn, buttonEdge(id, s.btn), t.cta, 4),
        ])
      : el("div", { cls: "sq-ex-col sq-ex-start", css: rootCss }, [
          el("h3", { css: typeCss(title, legible(page, fg)), text: t.title, part: 1 }),
          el("p", { css: typeCss(small, legible(page, body, fg)), text: t.sub, part: 1 }),
          rows(2),
          button(btn, t.cta, 3),
        ]);
  } else if (kind === "artwork") {
    // pixiv: artwork card — the card/panel heading tier, the metadata caption, likes in the engagement
    // colour. Counts take text-muted, not text-tertiary (3.7:1 on the canvas).
    const title = tierToks(id, "heading-m") ?? head, cap = tierToks(id, "caption-s"), tagT = tierToks(id, "caption-m") ?? bod;
    const red = colorTok(id, "engagement-red"), link = colorTok(id, "link");
    const prop = getProp("palette");
    root = el("div", { cls: "sq-ex-col sq-ex-start", css: rootCss }, [
      prop ? el("div", { cls: "sq-ex-prop", img: { src: prop.src, width: prop.width, height: prop.height, alt: "" }, part: 1 }) : null,
      el("h3", { css: typeCss(title, fg), text: t.title, part: 1 }),
      el("p", { css: typeCss(bod, body), text: t.sub, part: 2 }),
      el("div", { cls: "sq-ex-stats", part: 3 }, [
        red ? el("span", { cls: "sq-ex-ic-s", css: css({ color: red }), icon: "heart" }) : null,
        ...t.rows.map(([k, v]) => el("span", { css: typeCss(cap, body), text: `${k} ${v}` })),
      ]),
      t.tags.length ? el("p", { cls: "sq-ex-tags", css: typeCss(tagT, link), text: t.tags.join("　"), part: 3 }) : null,
      button(btn, t.cta, 4),
    ]);
  } else if (kind === "issue") {
    // Linear: an issue card on the dark canvas — hairline edge, the card radius and padding of its customer card
    const nav = tierToks(id, "navigation") ?? bod, secondary = colorTok(id, "secondary") ?? body, hairline = colorTok(id, "hairline");
    const card = (s.sr?.k ?? "").replace(/\.radius$/, "");
    const pad = card.startsWith("components.") ? claimedAt(id, `${card}.padding`) : undefined;
    const padTok: Tok | null = typeof pad === "string" && /px/.test(pad) ? { k: `${card}.padding`, v: pad, css: pad } : null;
    root = el("div", { cls: "sq-ex-pad", css: rootCss }, [
      el("div", { cls: "sq-ex-card sq-ex-edge", css: css({ borderColor: hairline, borderRadius: srTok, padding: padTok }) }, [
        t.tags.length ? el("p", { css: typeCss(nav, body), text: t.tags.join(" · "), part: 1 }) : null,
        el("h3", { css: typeCss(head, fg), text: t.title, part: 2 }),
        el("p", { css: typeCss(bod, secondary), text: t.sub, part: 3 }),
        button(btn, t.cta, 4),
      ]),
    ]);
  } else if (kind === "job") {
    // 104: a job card in its company-card container (fill, 1px edge colour, radius, padding). Its one
    // secondary grey (muted) is 4.06:1 on the canvas, so secondary text is the foreground at body weight.
    const label = tierToks(id, "label") ?? bod;
    const cardKey = (s.sr?.k ?? "").replace(/\.radius$/, "");
    const cardBg = s.surface && s.surface.k.startsWith(cardKey) ? slotColor(id, s.surface) : null;
    const edge: Tok | null = s.cardBorder ? { k: s.cardBorder.k, v: claimedAt(id, s.cardBorder.k) as string, css: s.cardBorder.v } : null;
    const pad = cardKey ? claimedAt(id, `${cardKey}.padding`) : undefined;
    const padTok: Tok | null = typeof pad === "string" && /px/.test(pad) ? { k: `${cardKey}.padding`, v: pad, css: pad } : null;
    root = el("div", { cls: "sq-ex-pad", css: rootCss }, [
      el("div", { cls: `sq-ex-card${edge ? " sq-ex-edge" : ""}`, css: css({ background: cardBg, borderColor: edge, borderRadius: srTok, padding: padTok }) }, [
        el("h3", { css: typeCss(head, fg), text: t.title, part: 1 }),
        el("p", { css: typeCss(bod, fg), text: t.sub, part: 2 }),
        el("div", { cls: "sq-ex-kv", part: 3 },
          t.rows.map(([k, v]) => el("p", { cls: "sq-ex-row" }, [el("span", { css: typeCss(bod, fg), text: k }), el("span", { css: typeCss(label, fg), text: v })]))),
        button(btn, t.cta, 4),
      ]),
    ]);
  } else if (kind === "product") {
    // Commerce: a list item — the OmD shopping-bag prop on the company's product tile (its surface
    // and card radius, from one component when a card component supplies them) beside the item and
    // one line, then price and delivery rows and the buy button. A row, not a stacked tile, so the
    // card fits the hero's fixed-height column on every locale.
    const box = boxOf(id, s);
    const title = titleType(id), text = textType(id, s), small = smallType(id, s);
    const ink = legible(page, fg), soft = legible(page, body, fg);
    const prop = getProp("shopping-bag");
    root = el("div", { cls: "sq-ex-col sq-ex-start", css: rootCss }, [
      el("div", { cls: "sq-ex-item" }, [
        prop ? el("div", { cls: "sq-ex-media", css: css({ background: box.bg, borderRadius: box.radius }), part: 1 }, [
          el("div", { cls: "sq-ex-prop", img: { src: prop.src, width: prop.width, height: prop.height, alt: "" } }),
        ]) : null,
        el("div", { cls: "sq-ex-itxt" }, [
          el("h3", { css: typeCss(title, ink), text: t.title, part: 1 }),
          el("p", { css: typeCss(text, soft), text: t.sub, part: 2 }),
        ]),
      ]),
      el("div", { cls: "sq-ex-kv", part: 3 },
        t.rows.map(([k, v]) => el("p", { cls: "sq-ex-row" }, [el("span", { css: typeCss(small, soft), text: k }), el("span", { css: typeCss(text, ink), text: v })]))),
      buttonG(btn, buttonEdge(id, s.btn), t.cta, 4),
    ]);
  } else {
    // booking / task / article: one group in the company's card container when it claims one — a
    // card component's own fill, edge, padding and text colour, or its surface colour (whose inner
    // padding is OmD's, as round 11's rows panel) — else straight on the canvas.
    const box = boxOf(id, s);
    const framed = !!(box.bg && box.bg.css !== page) || !!box.edge;
    const fill = (framed ? box.bg?.css : null) ?? page;
    const ink = legible(fill, box.fg, fg), soft = legible(fill, body, box.fg, fg), meta = legible(fill, slotColor(id, s.meta), body, box.fg, fg);
    const title = titleType(id), text = textType(id, s), small = smallType(id, s);
    const strong = slotType(id, s.label) ?? text;
    const boxCss = framed ? css({ background: box.bg, borderColor: box.edge, borderRadius: box.radius, padding: box.pad }) : {};
    const cls = `sq-ex-card${framed && box.edge ? " sq-ex-edge" : ""}${framed && !box.pad ? " sq-ex-inset" : ""}`;
    const cta = buttonG(btn, buttonEdge(id, s.btn), t.cta, 4);
    const kids: (CardNode | null)[] = kind === "booking"
      ? [
          el("h3", { css: typeCss(title, ink), text: t.title, part: 1 }),
          el("p", { css: typeCss(text, soft), text: t.sub, part: 2 }),
          el("div", { cls: "sq-ex-kv", part: 3 },
            t.rows.map(([k, v]) => el("p", { cls: "sq-ex-row" }, [el("span", { css: typeCss(small, soft), text: k }), el("span", { css: typeCss(strong, ink), text: v })]))),
          cta,
        ]
      : [
          t.tags.length ? el("p", { css: typeCss(small, meta), text: t.tags.join(" · "), part: 1 }) : null,
          el("h3", { css: typeCss(title, ink), text: t.title, part: 2 }),
          el("p", { css: typeCss(text, soft), text: t.sub, part: 3 }),
          cta,
        ];
    root = el("div", { cls: "sq-ex-pad", css: rootCss }, [el("div", { cls, css: boxCss }, kids)]);
  }
  return { root, face: { name: f.name, shown: f.shown } };
}

/* ---------- the source the Write step stands for ---------- */

const jsx = (s: string) => s.replace(/[{}<>]/g, (c) => `{"${c}"}`);

/** Print a card tree as the TSX an agent would write; its line count is the Write step's +N. */
export function printSource(file: string, root: CardNode): string {
  const name = file.replace(/\.tsx$/, "");
  const icons = new Set<string>();
  const out: string[] = [];
  const attrs = (n: CardNode) => {
    const st = n.css ? Object.entries(n.css).map(([p, t]) => `${p}: ${JSON.stringify(t!.css)}`).join(", ") : "";
    const cls = n.cls ? n.cls.split(" ").map((c) => c.replace(/^sq-ex-/, "")).join(" ") : "";
    return (cls ? ` className="${cls}"` : "") + (st ? ` style={{ ${st} }}` : "");
  };
  const walk = (n: CardNode, d: number) => {
    const pad = "  ".repeat(d);
    if (n.icon) {
      const I = n.icon === "check" ? "CheckIcon" : "HeartIcon";
      icons.add(I);
      out.push(`${pad}<span${attrs(n)}><${I} aria-hidden /></span>`);
      return;
    }
    if (n.img) {
      out.push(`${pad}<img${attrs(n)} src="${n.img.src}" alt="" width={${n.img.width}} height={${n.img.height}} />`);
      return;
    }
    const tag = n.tag === "h3" ? "h2" : n.tag;
    if (!n.kids?.length) {
      out.push(`${pad}<${tag}${attrs(n)}>${jsx(n.text ?? "")}</${tag}>`);
      return;
    }
    out.push(`${pad}<${tag}${attrs(n)}>`);
    for (const k of n.kids) walk(k, d + 1);
    out.push(`${pad}</${tag}>`);
  };
  walk(root, 2);
  const head = icons.size ? [`import { ${[...icons].sort().join(", ")} } from "./icons";`, ""] : [];
  return [...head, `export function ${name}() {`, "  return (", ...out, "  );", "}"].join("\n");
}

function parts(n: CardNode): number {
  return Math.max(n.part ?? 0, ...(n.kids ?? []).map(parts));
}
function tokCount(n: CardNode, seen = new Set<string>()): number {
  for (const t of Object.values(n.css ?? {})) if (t) seen.add(`${t.k}=${t.css}`);
  for (const k of n.kids ?? []) tokCount(k, seen);
  return seen.size;
}

function finish(id: string, kind: CardKind, file: string, read: string, t: CardText, faces: Faces, locale: SiteLocale): ChatCard {
  const { root, face } = buildRoot(id, kind, t, faces, locale);
  const source = printSource(file, root);
  return { id, kind, file, read, root, parts: parts(root), source, lines: source.split("\n").length, tokens: tokCount(root), face };
}

/** The installed catalog copy the Read step opens. */
const readPath = (id: string) => `.claude/data/references/${id}/DESIGN.md`;

/**
 * One company's card in a locale's chat. `faces` maps a claimed UI face to the CSS family the page
 * loads for it (hero-section.tsx): a face the page doesn't load is left unset (the page face shows).
 */
export function getCompanyCard(locale: SiteLocale, id: string, faces: Faces = {}): ChatCard {
  const k = getR11Hero(locale).chat.kinds[KIND[id]];
  return finish(id, KIND[id], k.file, readPath(id), k.card, faces, locale);
}

/** The card a locale's chat opens on (its representative company). */
export function getChatCard(locale: SiteLocale, faces: Faces = {}): ChatCard {
  return getCompanyCard(locale, CHAT_COMPANY[locale], faces);
}

/** The companies a locale's chat can show: its opening company, then its keyboard's (verified, with a card kind). */
export function chatIds(locale: SiteLocale, capIds: readonly string[]): string[] {
  return [...new Set([CHAT_COMPANY[locale], ...capIds])].filter((id) => !!KIND[id] && REFERENCE_QUALITY_BY_ID[id]?.status === "verified_v2");
}

/**
 * Every chat the hero can show on a locale (round 12): the opening company and each keycap's,
 * named as its keycap names it (`caps`; the opening company, when it has no cap, by the same rule,
 * data.server.ts capData), with its item-page link.
 */
export function getHeroChats(
  locale: SiteLocale,
  caps: readonly { readonly id: string; readonly n: string; readonly nLang: string }[],
  faces: Faces = {},
): { initial: string; chats: Record<string, HeroChat> } {
  const copy = getR11Hero(locale).chat;
  const named = new Map(caps.map((c) => [c.id, c]));
  const chats: Record<string, HeroChat> = {};
  for (const id of chatIds(locale, caps.map((c) => c.id))) {
    const nm = named.get(id) ?? capData(id, locale);
    if (!nm) continue;
    const k = copy.kinds[KIND[id]];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- the printed source stays on the server
    const { source, ...card } = finish(id, KIND[id], k.file, readPath(id), k.card, faces, locale);
    const r = REGISTRY_BY_ID[id];
    chats[id] = {
      card,
      prompt: withName(k.prompt, nm.n, locale),
      label: withName(k.label, nm.n, locale),
      think: withName(k.think, nm.n, locale),
      name: nm.n,
      nLang: nm.nLang,
      href: detailHrefFor(locale, id, hasKoDetail(r.country, REFERENCE_QUALITY_BY_ID[id]?.status as QualityStatus | undefined)),
    };
  }
  return { initial: CHAT_COMPANY[locale], chats };
}

/** The CLI apply step's screen: the CLI's own next step on a Toss-inspired project, in every locale. */
export const CLI_APPLY_COMPANY = "toss";
export function getCliScreen(locale: SiteLocale): ChatCard {
  const t = getR11Hero(locale).cli;
  return finish(CLI_APPLY_COMPANY, "home", t.file, "DESIGN.md", t.screen, {}, locale);
}
