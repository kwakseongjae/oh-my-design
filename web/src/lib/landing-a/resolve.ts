/**
 * Slot resolvers for the landing's gen-UI sample screen and keycaps.
 *
 * Input: one reference's registry tokens plus its verification_v2 graph.
 * Output: claimed values only, each with provenance. A slot is reported
 * missing ONLY when no key that could fill it carries a claimed value —
 * the prototype shipped three false "not in source" bugs (Apple card,
 * freee/THSR/Linear fonts) by reading one fixed key. Every slot therefore
 * searches semantically, most specific first, and records which key won.
 * __tests__/landing-resolvers.test.ts runs this over every reference.
 *
 * Pure: no generated data is imported here, so the test and the server
 * loader share it.
 */

export type Prov = readonly [host: string, method: string, captured: string];

export interface Claimed<T = string> {
  /** Token path without the `tokens.` prefix, e.g. `colors.primary`. */
  readonly k: string;
  readonly v: T;
  readonly p: Prov | null;
}

export interface TypeSlot {
  readonly k: string;
  readonly size: number;
  readonly weight: number;
  readonly lh: number | null;
  readonly p: Prov | null;
}

export interface ButtonSlot {
  readonly k: string;
  readonly bg: string;
  readonly fg: string | null;
  readonly radius: number | null;
  /** Set when the radius came from a semantic rounded.* key, not the component. */
  readonly rk: string | null;
  readonly height: number | null;
  /** Set when the height came from an explicit "Npx tall" in the claimed `use` text. */
  readonly hk: string | null;
  readonly pad: string | null;
  readonly fs: number | null;
  readonly fw: number | null;
  readonly flh: number | null;
  readonly pressed: string | null;
  readonly hover: string | null;
  readonly focus: string | null;
  readonly p: Prov | null;
  readonly sp: { readonly pressed: Prov | null; readonly hover: Prov | null; readonly focus: Prov | null };
}

export interface ResolvedSlots {
  readonly canvas: Claimed | null;
  readonly fg: Claimed | null;
  readonly body: Claimed | null;
  readonly primary: Claimed | null;
  readonly head: TypeSlot | null;
  readonly bod: TypeSlot | null;
  readonly btn: ButtonSlot | null;
  /** Card/surface fill. */
  readonly surface: Claimed | null;
  /** Card/surface radius (px). */
  readonly sr: Claimed<number> | null;
  readonly cardBorder: Claimed | null;
  /** UI/text face and display/heading face. */
  readonly famT: Claimed | null;
  readonly famD: Claimed | null;
}

export interface VerificationLike {
  readonly surfaces: readonly { readonly id: string; readonly url: string }[];
  readonly sources: readonly { readonly id: string; readonly url: string }[];
  readonly claims: Readonly<Record<string, { readonly surface_id: string; readonly source_id: string; readonly method?: string; readonly captured: string }>>;
}

type Rec = Readonly<Record<string, unknown>>;
export interface TokensLike {
  readonly colors?: Readonly<Record<string, string>>;
  readonly typography?: Rec;
  readonly rounded?: Readonly<Record<string, number>>;
  readonly components?: Readonly<Record<string, string | Rec>>;
}

/* ---------- semantic key orders (most specific first) ---------- */

export const CANVAS_KEYS = ["canvas", "background", "bg", "surface-base", "page", "page-bg", "white"];
export const FG_KEYS = ["foreground", "ink", "text", "text-primary", "heading", "on-surface", "portal-ink", "black"];
export const BODY_KEYS = ["body", "body-text", "text-body", "text-secondary", "secondary-text", "muted", "text-muted", "secondary", "subtle-text", "text-subtle"];
export const PRIMARY_KEYS = ["primary", "brand", "brand-primary", "accent", "action", "public-action", "brand-green", "cta", "main", "key"];
export const SURFACE_COLOR_KEYS = ["surface", "surface-1", "card", "card-bg", "surface-subtle", "subtle", "utility-surface", "surface-secondary", "surface-tint", "surface-gray", "layer", "panel", "container"];
/** rounded.* keys that name a card-like container, in preference order. */
export const CARD_RADIUS_RE = /card|surface|tile|container|panel/;
export const LAST_CONTAINER_RADIUS_RE = /dialog|modal|sheet|popup|popover/;
export const BUTTON_RADIUS_RE = /button|btn|cta|action|control/;
export const TEXT_FACE_KEYS = ["ui", "text", "body", "sans", "default", "primary", "base"];
export const DISPLAY_FACE_KEYS = ["display", "heading", "headline", "title"];
/** Never a UI face. */
export const NON_UI_FACE_RE = /mono|code|icon|emoji|symbol|serif-?only|numeric|tabular|number|digit/;

const HEX = /^#[0-9a-f]{6}$/i;
const host = (u: string) => {
  try {
    return new URL(u).hostname;
  } catch {
    return u;
  }
};
export const num = (x: unknown): number | null =>
  typeof x === "number" ? x : typeof x === "string" && /^-?[\d.]+(px)?$/.test(x.trim()) ? parseFloat(x) : null;

export function resolveSlots(tokens: TokensLike | undefined, ver: VerificationLike | undefined, opts: { preferButton?: string } = {}): ResolvedSlots {
  const t = tokens ?? {};
  const cl = ver?.claims ?? {};
  const surf = Object.fromEntries((ver?.surfaces ?? []).map((s) => [s.id, s.url]));
  const srcs = Object.fromEntries((ver?.sources ?? []).map((s) => [s.id, s.url]));
  const prov = (path: string): Prov | null => {
    const c = cl[path];
    if (!c) return null;
    return [host(srcs[c.source_id] || surf[c.surface_id] || ""), c.method ?? "", (c.captured ?? "").slice(0, 10)];
  };
  const claimed = (path: string) => path in cl;

  /* colours */
  const C = t.colors ?? {};
  const hasC = (k: string) => typeof C[k] === "string" && claimed(`tokens.colors.${k}`);
  const pickC = (keys: readonly string[]): Claimed | null => {
    for (const k of keys) if (hasC(k)) return { k: `colors.${k}`, v: C[k].trim().toLowerCase(), p: prov(`tokens.colors.${k}`) };
    return null;
  };
  const canvas = pickC(CANVAS_KEYS);
  const fg = pickC(FG_KEYS);
  const body = pickC(BODY_KEYS);
  // Named roles first; then the first claimed brand-* colour, then any *-action colour
  // (not on-*), in the reference's own key order. The key is always shown with the value.
  const ordered = (re: RegExp) => Object.keys(C).filter((k) => re.test(k) && !/^on-/.test(k) && HEX.test(String(C[k]).trim()));
  const primary = pickC(PRIMARY_KEYS) ?? pickC(ordered(/^brand-/)) ?? pickC(ordered(/-action$/));

  /* typography tiers */
  const T = (t.typography ?? {}) as Record<string, unknown>;
  const tc = (k: string, f: string) => claimed(`tokens.typography.${k}.${f}`);
  const tiers = Object.entries(T).filter(([k, o]) => {
    if (k === "family" || !o || typeof o !== "object") return false;
    const r = o as Rec;
    return num(r.size) != null && num(r.weight) != null && tc(k, "size") && tc(k, "weight");
  }) as [string, Rec][];
  const lhOf = (k: string, o: Rec): number | null => {
    if (!tc(k, "lineHeight")) return null;
    const x = o.lineHeight, size = num(o.size)!;
    if (typeof x === "number") return x > 4 ? x / size : x;
    if (typeof x === "string" && /px$/.test(x)) return parseFloat(x) / size;
    if (typeof x === "string" && /^[\d.]+$/.test(x)) return parseFloat(x);
    return null;
  };
  const toType = (e: [string, Rec] | undefined | null): TypeSlot | null =>
    e ? { k: e[0], size: num(e[1].size)!, weight: num(e[1].weight)!, lh: lhOf(e[0], e[1]), p: prov(`tokens.typography.${e[0]}.size`) } : null;
  const HEAD_RE = /h1|h2|h3|heading|headline|title|display|section|subhead/;
  const heads = tiers.filter(([k]) => HEAD_RE.test(k)).sort((a, b) => num(b[1].size)! - num(a[1].size)!);
  // Largest heading that fits a phone screen; if every heading is display-sized, the smallest one.
  const headPreferred = heads.filter(([k]) => !/marketing|hero|banner|cover/.test(k));
  const head =
    headPreferred.find(([, o]) => num(o.size)! <= 40) ??
    heads.find(([, o]) => num(o.size)! <= 40) ??
    (heads.length ? heads[heads.length - 1] : null);
  const bod =
    tiers.find(([k]) => /^body(-1|-md|-medium|-m|-base|-regular)?$/.test(k)) ??
    tiers.find(([k]) => /^body/.test(k)) ??
    tiers.find(([k]) => /paragraph|^p$|^text(-md|-base)?$|copy|^base$/.test(k)) ??
    null;

  /* button */
  const comps = Object.entries(t.components ?? {}).filter(([, o]) => o && typeof o === "object") as [string, Rec][];
  const cc = (k: string, f: string) => claimed(`tokens.components.${k}.${f}`);
  const buttons = comps.filter(([k, o]) => o.type === "button" && typeof o.bg === "string" && HEX.test(String(o.bg).trim()) && cc(k, "bg"));
  const rankBtn = (k: string) => (opts.preferButton === k ? 3 : /primary|cta|main|solid|fill/.test(k) ? 2 : /secondary|ghost|outline|text|link|tertiary/.test(k) ? 0 : 1);
  buttons.sort((a, b) => rankBtn(b[0]) - rankBtn(a[0]));
  let btn: ButtonSlot | null = null;
  if (buttons.length) {
    const [k, o] = buttons[0];
    const f = (x: string) => (cc(k, x) ? o[x] : undefined);
    const r = f("radius"), h = f("height"), pad = f("padding"), font = f("font"), use = f("use");
    const fm = typeof font === "string" ? font.match(/(\d+(?:\.\d+)?)px\s*\/\s*(\d{3})(?:\s*\/\s*([\d.]+)px)?/) : null;
    let radius = r != null ? num(r) : null;
    if (radius == null && typeof r === "string" && /9999|pill|full/.test(r)) radius = 9999;
    let rk: string | null = null;
    if (radius == null) {
      const RD = t.rounded ?? {};
      const k2 = Object.keys(RD).find((x) => BUTTON_RADIUS_RE.test(x) && typeof RD[x] === "number" && claimed(`tokens.rounded.${x}`));
      if (k2) {
        radius = RD[k2];
        rk = `rounded.${k2}`;
      }
    }
    let height = h != null ? num(h) : null;
    let hk: string | null = null;
    if (height == null && typeof use === "string") {
      const m = use.match(/(\d+)px tall/);
      if (m) {
        height = +m[1];
        hk = `use: "${m[0]}"`;
      }
    }
    const str = (x: unknown) => (typeof x === "string" && x.trim() ? x.trim() : null);
    btn = {
      k,
      bg: String(o.bg).trim().toLowerCase(),
      fg: str(f("fg")),
      radius,
      rk,
      height,
      hk,
      pad: typeof pad === "string" && /px/.test(pad) ? pad : typeof pad === "number" ? `0 ${pad}px` : null,
      fs: fm ? +fm[1] : null,
      fw: fm ? +fm[2] : null,
      flh: fm && fm[3] ? +fm[3] : null,
      pressed: str(f("pressed")),
      hover: str(f("hover")),
      focus: str(f("focus")),
      p: prov(`tokens.components.${k}.bg`),
      sp: {
        pressed: prov(`tokens.components.${k}.pressed`),
        hover: prov(`tokens.components.${k}.hover`),
        focus: prov(`tokens.components.${k}.focus`),
      },
    };
  }

  /* card / surface: 1) a claimed components.* with type card  2) card-like rounded.*  3) rounded.md
     4) dialog/modal/sheet as a last container radius  5) truly missing */
  const RD = t.rounded ?? {};
  let sr: Claimed<number> | null = null;
  let cardBg: Claimed | null = null;
  let cardBorder: Claimed | null = null;
  const cards = comps.filter(([k, o]) => o.type === "card" && (cc(k, "radius") || cc(k, "bg")));
  cards.sort((a, b) => {
    const s = (x: [string, Rec]) => (cc(x[0], "radius") && num(x[1].radius) != null ? 2 : 0) + (HEX.test(String(x[1].bg ?? "").trim()) ? 1 : 0);
    return s(b) - s(a);
  });
  for (const [k, o] of cards) {
    const rv = cc(k, "radius") ? num(o.radius) : null;
    if (!sr && rv != null) sr = { k: `components.${k}.radius`, v: rv, p: prov(`tokens.components.${k}.radius`) };
    if (!cardBg && typeof o.bg === "string" && cc(k, "bg")) cardBg = { k: `components.${k}.bg`, v: o.bg.trim().toLowerCase(), p: prov(`tokens.components.${k}.bg`) };
    if (!cardBorder && o.border && cc(k, "border")) {
      const m = String(o.border).match(/#[0-9a-f]{6}/i);
      if (m) cardBorder = { k: `components.${k}.border`, v: m[0].toLowerCase(), p: prov(`tokens.components.${k}.border`) };
    }
  }
  if (!sr) {
    const keys = Object.keys(RD).filter((k) => typeof RD[k] === "number" && claimed(`tokens.rounded.${k}`));
    const k = keys.find((x) => CARD_RADIUS_RE.test(x)) ?? keys.find((x) => x === "md") ?? keys.find((x) => LAST_CONTAINER_RADIUS_RE.test(x)) ?? null;
    if (k) sr = { k: `rounded.${k}`, v: RD[k], p: prov(`tokens.rounded.${k}`) };
  }
  const surface = cardBg ?? pickC(SURFACE_COLOR_KEYS);

  /* font family: semantic text keys first, display/heading for headings; then any other
     claimed non-mono family as a last resort (named by its key). None only if no key is claimed. */
  const FM = (T.family ?? {}) as Record<string, unknown>;
  const famKeys = Object.keys(FM).filter((k) => typeof FM[k] === "string" && (FM[k] as string).trim() && claimed(`tokens.typography.family.${k}`));
  const fk = (keys: readonly string[]): Claimed | null => {
    for (const k of keys) if (famKeys.includes(k)) return { k: `typography.family.${k}`, v: (FM[k] as string).trim(), p: prov(`tokens.typography.family.${k}`) };
    return null;
  };
  let famT = fk(TEXT_FACE_KEYS);
  const famD = fk(DISPLAY_FACE_KEYS);
  if (!famT && !famD) {
    const other = famKeys.find((k) => !NON_UI_FACE_RE.test(k));
    if (other) famT = fk([other]);
  }

  return { canvas, fg, body, primary, head: toType(head), bod: toType(bod), btn, surface, sr, cardBorder, famT, famD };
}

/* ---------- keycap character (hero + region keys) ---------- */

export const KEYCAP_ROLE_ORDER = [
  "primary", "brand", "brand-primary", "brand-green", "brand-link", "brand-surface", "brand-deep-blue",
  "accent", "action", "public-action", "login", "green-panel", "header-accent", "corporate-heading", "link",
];

export interface KeycapTraits {
  readonly role: string | null;
  readonly hex: string | null;
  /** rounded key + px; null when no rounded token is claimed. */
  readonly rk: string | null;
  readonly rv: number | null;
  /** heaviest claimed typography weight and its tier key. */
  readonly w: number | null;
  readonly wk: string | null;
}

export function keycapTraits(tokens: TokensLike | undefined, ver: VerificationLike | undefined): KeycapTraits {
  const t = tokens ?? {};
  const cl = ver?.claims ?? {};
  const C = t.colors ?? {};
  let role: string | null = null, hex: string | null = null;
  for (const r of KEYCAP_ROLE_ORDER) {
    if (typeof C[r] === "string" && HEX.test(C[r].trim()) && `tokens.colors.${r}` in cl) {
      role = r;
      hex = C[r].trim().toLowerCase();
      break;
    }
  }
  const RD = t.rounded ?? {};
  const keys = Object.keys(RD).filter((k) => `tokens.rounded.${k}` in cl && typeof RD[k] === "number");
  const rk =
    keys.find((k) => BUTTON_RADIUS_RE.test(k)) ?? keys.find((k) => k === "md") ?? keys.find((k) => k === "sm") ??
    keys.find((k) => /compact|default|card|tab/.test(k)) ?? keys.find((k) => /square|none/.test(k)) ?? keys.find((k) => RD[k] > 0) ?? null;
  let w: number | null = null, wk: string | null = null;
  for (const [k, v] of Object.entries((t.typography ?? {}) as Record<string, unknown>)) {
    if (k === "family" || !v || typeof v !== "object") continue;
    const wt = num((v as Rec).weight);
    if (wt != null && `tokens.typography.${k}.weight` in cl && (w === null || wt > w)) {
      w = wt;
      wk = k;
    }
  }
  return { role, hex, rk, rv: rk ? RD[rk] : null, w, wk };
}

/* ---------- names and glyphs ---------- */

export const CJK_RE = /[぀-ヿ㐀-鿿가-힣]/;

/** The native name only where the registry has one (name or displayName); else the registry name. */
export function nativeName(name: string, displayName: string): string {
  return [name, displayName].find((s) => s && CJK_RE.test(s)) ?? name;
}

/** First CJK glyph of the native name, or leading digits ("104"), else the first Latin letter. */
export function glyphOf(n: string): string {
  const d = n.match(/^\d+/);
  if (d) return d[0].slice(0, 3);
  const m = n.match(CJK_RE);
  return m ? m[0] : n.trim()[0] ?? "?";
}
