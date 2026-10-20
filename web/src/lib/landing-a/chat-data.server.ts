import brandLogos from "@/data/brand-logos.json";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { getR11Hero, type CardText } from "@/components/brand-a/copy/r11-hero";
import type { SiteLocale } from "@/lib/i18n/site-locales";
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

export type CardKind = "transfer" | "artwork" | "issue" | "job" | "home";

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
  /** the claimed UI face, and whether the card is set in it; when a named face isn't shown the trace says so */
  readonly face: { readonly name: string | null; readonly shown: boolean };
}

/** Owner decision 4 (KR, JP) and the measured picks below (EN, TW). */
export const CHAT_COMPANY: Readonly<Record<SiteLocale, string>> = { ko: "toss", ja: "pixiv", en: "linear.app", "zh-tw": "104" };
export const CHAT_CANDIDATES = { en: ["stripe", "linear.app"], "zh-tw": ["104", "eslite"] } as const;
const KIND: Readonly<Record<string, CardKind>> = { toss: "transfer", pixiv: "artwork", "linear.app": "issue", "104": "job" };

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
  return resolveSlots(r.tokens as TokensLike, REFERENCE_VERIFICATION_BY_ID[id], { preferButton: GEN_UI_PREFERRED_BUTTON[id] });
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
const slotColor = (c: Claimed | null): Tok | null => (c && HEX.test(c.v) ? { k: c.k, v: c.v, css: c.v } : null);

type TypeToks = { fontSize: Tok; fontWeight: Tok; lineHeight?: Tok };
function tierToks(id: string, key: string): TypeToks | null {
  const size = claimedAt(id, `typography.${key}.size`), weight = claimedAt(id, `typography.${key}.weight`);
  const sz = num(size), wt = num(weight);
  if (sz == null || wt == null) return null;
  const out: TypeToks = {
    fontSize: { k: `typography.${key}.size`, v: size as string | number, css: px(sz) },
    fontWeight: { k: `typography.${key}.weight`, v: weight as string | number, css: String(wt) },
  };
  const lh = claimedAt(id, `typography.${key}.lineHeight`);
  if (typeof lh === "number") out.lineHeight = { k: `typography.${key}.lineHeight`, v: lh, css: lh > 4 ? px(lh) : String(lh) };
  else if (typeof lh === "string" && /^[\d.]+(px)?$/.test(lh.trim())) out.lineHeight = { k: `typography.${key}.lineHeight`, v: lh, css: lh.trim() };
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

/* ---------- the cards ---------- */

type Faces = Readonly<Record<string, string>>;

function faceOf(id: string, s: ResolvedSlots, faces: Faces) {
  const name = s.famT?.v ?? null;
  const loaded = name ? faces[name] : undefined;
  const tok: Tok | null = name && loaded ? { k: s.famT!.k, v: name, css: loaded } : null;
  return { name, shown: !!tok, tok };
}

function buildRoot(id: string, kind: CardKind, t: CardText, faces: Faces): { root: CardNode; face: { name: string | null; shown: boolean } } {
  const s = slotsOf(id)!;
  const f = faceOf(id, s, faces);
  const canvas = slotColor(s.canvas), fg = slotColor(s.fg), body = slotColor(s.body), primary = slotColor(s.primary);
  const btn = buttonToks(id, s.btn);
  const head = slotType(id, s.head), bod = slotType(id, s.bod);
  const srTok: Tok | null = s.sr ? { k: s.sr.k, v: claimedAt(id, s.sr.k) as string | number, css: px(s.sr.v) } : null;
  const rootCss = css({ background: canvas, color: fg, fontFamily: f.tok });
  let root: CardNode;

  if (kind === "transfer" || kind === "home") {
    // Toss: a centred success card (transfer) or a list screen (home), product button tds-button.
    // Row labels take Toss's body grey, not its muted grey: muted on the surface is 2.8:1.
    const surface = slotColor(s.surface);
    const title = tierToks(id, "h3") ?? head, small = tierToks(id, "body-small") ?? bod;
    const rows = (a: number) =>
      el("div", { cls: "sq-ex-rows", css: css({ background: surface, borderRadius: srTok }), part: a },
        t.rows.map(([k, v]) => el("div", { cls: "sq-ex-row" }, [el("span", { css: typeCss(small, body), text: k }), el("span", { css: typeCss(kind === "home" ? bod : small, fg), text: v })])));
    root = kind === "transfer"
      ? el("div", { cls: "sq-ex-col", css: rootCss }, [
          primary ? el("span", { cls: "sq-ex-ic", css: css({ color: primary }), icon: "check", part: 1 }) : null,
          el("h3", { css: typeCss(title, fg), text: t.title, part: 2 }),
          el("p", { css: typeCss(bod, body), text: t.sub, part: 2 }),
          rows(3),
          button(btn, t.cta, 4),
        ])
      : el("div", { cls: "sq-ex-col sq-ex-start", css: rootCss }, [
          el("h3", { css: typeCss(title, fg), text: t.title, part: 1 }),
          el("p", { css: typeCss(small, body), text: t.sub, part: 1 }),
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
  } else {
    // 104: a job card in its company-card container (fill, 1px edge colour, radius, padding). Its one
    // secondary grey (muted) is 4.06:1 on the canvas, so secondary text is the foreground at body weight.
    const label = tierToks(id, "label") ?? bod;
    const cardKey = (s.sr?.k ?? "").replace(/\.radius$/, "");
    const cardBg = s.surface && s.surface.k.startsWith(cardKey) ? slotColor(s.surface) : null;
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

function finish(id: string, kind: CardKind, file: string, read: string, t: CardText, faces: Faces): ChatCard {
  const { root, face } = buildRoot(id, kind, t, faces);
  const source = printSource(file, root);
  return { id, kind, file, read, root, parts: parts(root), source, lines: source.split("\n").length, tokens: tokCount(root), face };
}

/**
 * The hero chat's card for a locale. `faces` maps a claimed UI face to the CSS family the page
 * loads for it (hero-section.tsx): a face the page doesn't load is left unset and named in the trace.
 */
export function getChatCard(locale: SiteLocale, faces: Faces = {}): ChatCard {
  const id = CHAT_COMPANY[locale];
  const t = getR11Hero(locale).chat;
  return finish(id, KIND[id], t.file, `.claude/data/references/${id}/DESIGN.md`, t.card, faces);
}

/** The CLI apply step's screen: the CLI's own next step on a Toss-inspired project, in every locale. */
export const CLI_APPLY_COMPANY = "toss";
export function getCliScreen(locale: SiteLocale): ChatCard {
  const t = getR11Hero(locale).cli;
  return finish(CLI_APPLY_COMPANY, "home", t.file, "DESIGN.md", t.screen, {});
}
