/**
 * Round 11 (owner #11): per-company sample screens planned from claimed tokens only.
 *
 * A plan lists the elements a screen kind can draw for one reference, the tokens each consumes
 * and the CSS custom properties those tokens become. Nothing else reaches the screen's inline
 * style, so every colour and length in it is a value the reference claims
 * (__tests__/journey-screens.test.ts renders all seven and checks). An element whose required
 * token is absent is left out of the plan, and the token path is listed as omitted; no neutral
 * default stands in for it. Layout (gaps, the inner padding of a card whose reference names
 * none, list structure) is neutral and lives in journey/screens.css, the same for every company.
 */
import type { ScreenKind } from "@/lib/landing-a/picks";
import type { Claimed, Prov, TypeSlot } from "@/lib/landing-a/resolve";
import type { GenSpec } from "@/lib/landing-a/types";

/** Reveal order of the generation: 0 colours · 1 type · 2 components (button, badge) · 3 card. */
export type Step = 0 | 1 | 2 | 3;
export const STEPS: readonly Step[] = [0, 1, 2, 3];

export interface Tok {
  /** token path without `tokens.`, e.g. `colors.canvas`, `typography.h1`, `components.tds-button.radius` */
  readonly k: string;
  /** the value as the excerpt shows it */
  readonly v: string;
  readonly p: Prov | null;
  readonly step: Step;
}

export interface El {
  readonly step: Step;
  readonly toks: readonly Tok[];
}

export interface Plan {
  readonly kind: ScreenKind;
  readonly vars: Readonly<Record<string, string>>;
  readonly els: Readonly<Record<string, El>>;
  readonly omitted: readonly string[];
}

type Part = { readonly toks: readonly Tok[]; readonly vars: Readonly<Record<string, string>> } | { readonly miss: string };
const ok = (toks: (Tok | null)[], vars: Record<string, string | null | undefined>): Part => ({
  toks: toks.filter((t): t is Tok => !!t),
  vars: Object.fromEntries(Object.entries(vars).filter((e): e is [string, string] => e[1] != null && e[1] !== "")),
});
const miss = (k: string): Part => ({ miss: k });

const ratio = (x: number) => String(+x.toFixed(3));
const tyv = (t: TypeSlot) => `${t.size} / ${t.weight}${t.lh ? ` / ${ratio(t.lh)}` : ""}`;
const typePath = (t: TypeSlot) => (t.k.startsWith("components.") ? t.k : `typography.${t.k}`);

/** The parts a screen is built from. Each returns the tokens it consumes and the variables they set, or what is missing. */
export function parts(s: GenSpec) {
  const color = (x: Claimed | null, name: string, role: string, fallback?: Claimed | null) => (): Part => {
    const c = x ?? fallback ?? null;
    return c ? ok([{ k: c.k, v: c.v, p: c.p, step: 0 }], { [name]: c.v }) : miss(`colors.${role}`);
  };
  const tier = (x: TypeSlot | null, pre: string, label: string, ...fallbacks: (TypeSlot | null)[]) => (): Part => {
    const t = x ?? fallbacks.find((f) => !!f) ?? null;
    if (!t) return miss(`typography.${label}`);
    return ok([{ k: typePath(t), v: tyv(t), p: t.p, step: 1 }], { [`--${pre}-fs`]: `${t.size}px`, [`--${pre}-fw`]: String(t.weight), [`--${pre}-lh`]: t.lh ? ratio(t.lh) : null });
  };
  const b = s.btn;
  return {
    canvas: color(s.canvas, "--canvas", "canvas"),
    fg: color(s.fg, "--fg", "foreground"),
    body: color(s.body, "--body", "body"),
    /** the most muted text role; a reference with one secondary role uses it for both */
    meta: color(s.meta, "--meta", "muted", s.body),
    line: color(s.line, "--line", "border"),
    link: color(s.link, "--link", "link"),
    head: tier(s.head, "h", "heading"),
    bod: tier(s.bod, "p", "body"),
    /** secondary text: the reference's small tier, else its body tier */
    small: tier(s.small, "s", "small", s.bod),
    /** list titles: label tier, else body */
    label: tier(s.label, "l", "label", s.bod),
    /** text inside the card: the card component's own font, else the label tier, else body */
    cardText: (): Part => {
      const t = s.cardFont ?? s.label ?? s.bod;
      if (!t) return miss("typography.body");
      const fg = s.cardFg;
      return ok(
        [{ k: typePath(t), v: tyv(t), p: t.p, step: t === s.cardFont ? 3 : 1 }, fg ? { k: fg.k, v: fg.v, p: fg.p, step: 3 } : null],
        { "--cf-fs": `${t.size}px`, "--cf-fw": String(t.weight), "--cf-lh": t.lh ? ratio(t.lh) : null, "--cf-fg": fg?.v },
      );
    },
    /** a card: the claimed fill and/or radius (a transparent 0px card is still the claimed card) */
    card: (): Part => {
      if (!s.surface && !s.sr) return miss("components.card");
      return ok(
        [
          s.surface ? { k: s.surface.k, v: s.surface.v, p: s.surface.p, step: 3 } : null,
          s.sr ? { k: s.sr.k, v: `${s.sr.v}px`, p: s.sr.p, step: 3 } : null,
          s.cardBorder ? { k: s.cardBorder.k, v: s.cardBorder.v, p: s.cardBorder.p, step: 3 } : null,
          s.cardPad ? { k: s.cardPad.k, v: s.cardPad.v, p: s.cardPad.p, step: 3 } : null,
        ],
        { "--c-bg": s.surface?.v, "--c-r": s.sr ? `${Math.min(s.sr.v, 999)}px` : null, "--c-bd": s.cardBorder?.v, "--c-pad": s.cardPad?.v },
      );
    },
    /** the primary button: drawn only with its claimed fill, text colour, font and a height or padding */
    button: (): Part => {
      if (!b) return miss("components.button");
      const k = `components.${b.k}`;
      if (!b.fg) return miss(`${k}.fg`);
      if (!b.fs) return miss(`${k}.font`);
      if (b.height == null && !b.pad) return miss(`${k}.padding`);
      const t = (f: string, v: string | null): Tok | null => (v == null ? null : { k: `${k}.${f}`, v, p: b.p, step: 2 });
      return ok(
        [
          t("bg", b.bg),
          t("fg", b.fg),
          b.radius != null ? { k: b.rk ?? `${k}.radius`, v: `${b.radius}px`, p: b.p, step: 2 } : null,
          t("height", b.height != null ? `${b.height}px` : null),
          t("padding", b.pad),
          t("font", `${b.fs}px / ${b.fw}${b.flh ? ` / ${b.flh}px` : ""}`),
        ],
        {
          "--b-bg": b.bg,
          "--b-fg": b.fg,
          "--b-r": b.radius != null ? `${Math.min(b.radius, 999)}px` : null,
          "--b-h": b.height != null ? `${b.height}px` : null,
          "--b-pad": b.pad,
          "--b-fs": `${b.fs}px`,
          "--b-fw": String(b.fw),
          "--b-lh": b.flh ? `${b.flh}px` : null,
        },
      );
    },
    badge: (): Part => {
      const g = s.badge;
      if (!g) return miss("components.badge");
      if (!g.fg) return miss(`components.${g.k}.fg`);
      return ok(
        [
          { k: `components.${g.k}.bg`, v: g.bg, p: g.p, step: 2 },
          { k: `components.${g.k}.fg`, v: g.fg, p: g.p, step: 2 },
          g.radius != null ? { k: `components.${g.k}.radius`, v: `${g.radius}px`, p: g.p, step: 2 } : null,
        ],
        { "--g-bg": g.bg, "--g-fg": g.fg, "--g-r": g.radius != null ? `${Math.min(g.radius, 999)}px` : null },
      );
    },
  };
}

export type PartName = keyof ReturnType<typeof parts>;

/** Element recipes per screen kind: [id, step, required parts, optional parts]. */
type Recipe = readonly (readonly [id: string, step: Step, need: readonly PartName[], opt?: readonly PartName[]])[];

export const RECIPES: Readonly<Record<ScreenKind, Recipe>> = {
  // toss: this month's spending, three recent entries on the claimed surface, the TDS button
  transfer: [
    ["frame", 0, ["canvas", "fg"]],
    ["label", 1, ["small", "body"]],
    ["amount", 1, ["head"]],
    ["card", 3, ["card"]],
    ["rows", 1, ["bod", "small", "meta"]],
    ["cta", 2, ["button"]],
  ],
  // karrot: the heading and header CTA over the web feed's listing cards (title in the card's own font)
  listing: [
    ["frame", 0, ["canvas", "fg"]],
    ["title", 1, ["head"]],
    ["cta", 2, ["button"]],
    ["items", 1, ["cardText", "bod", "small", "meta"], ["card", "line"]],
  ],
  // kakaobank: balance, the corporate black action, two link rows
  account: [
    ["frame", 0, ["canvas", "fg"]],
    ["name", 1, ["bod", "body"]],
    ["balance", 1, ["head"]],
    ["cta", 2, ["button"]],
    ["rows", 1, ["cardText", "bod"], ["card"]],
  ],
  // banksalad: net worth on the safety card, three asset rows divided by the claimed line colour, the full-width action
  assets: [
    ["frame", 0, ["canvas", "fg"]],
    ["card", 3, ["card"]],
    ["caption", 1, ["small", "body"]],
    ["total", 1, ["head"]],
    ["rows", 1, ["bod"], ["line"]],
    ["cta", 2, ["button"]],
  ],
  // freee: the heading, dated entries divided by the claimed border colour, the header action
  ledger: [
    ["frame", 0, ["canvas", "fg"]],
    ["title", 1, ["head"]],
    ["rows", 1, ["bod", "meta"], ["line"]],
    ["cta", 2, ["button"]],
  ],
  // 104: the heading, two postings on the company card with the employer in the link colour, the search action
  job: [
    ["frame", 0, ["canvas", "fg"]],
    ["title", 1, ["head"]],
    ["jobs", 1, ["label", "bod", "meta"], ["card", "link"]],
    ["cta", 2, ["button"]],
  ],
  // LINE: the Messenger heading and chat rows with the notification badge; no card, no avatar (none claimed)
  chats: [
    ["frame", 0, ["canvas", "fg"]],
    ["title", 1, ["head"]],
    ["rows", 1, ["label", "small", "body", "meta"]],
    ["badge", 2, ["badge", "small"]],
  ],
};

export function planScreen(kind: ScreenKind, s: GenSpec): Plan {
  const P = parts(s);
  const vars: Record<string, string> = {};
  const els: Record<string, El> = {};
  const omitted = new Set<string>();
  for (const [id, step, need, opt = []] of RECIPES[kind]) {
    const got = need.map((n) => P[n]());
    const missing = got.filter((g): g is { miss: string } => "miss" in g);
    if (missing.length) {
      for (const m of missing) omitted.add(m.miss);
      continue;
    }
    const toks: Tok[] = [];
    for (const g of [...got, ...opt.map((n) => P[n]())]) {
      if ("miss" in g) {
        omitted.add(g.miss);
        continue;
      }
      toks.push(...g.toks);
      Object.assign(vars, g.vars);
    }
    // an element appears when the last of its tokens has been read (a card's own font arrives with the card)
    els[id] = { step: Math.max(step, ...toks.map((t) => t.step)) as Step, toks };
  }
  return { kind, vars, els, omitted: [...omitted] };
}

/** Every token the screen consumes, once, in reveal order (the DESIGN.md excerpt and the count). */
export function planTokens(p: Plan): Tok[] {
  const seen = new Map<string, Tok>();
  for (const el of Object.values(p.els)) for (const t of el.toks) if (!seen.has(t.k)) seen.set(t.k, t);
  return [...seen.values()].sort((a, b) => a.step - b.step);
}
