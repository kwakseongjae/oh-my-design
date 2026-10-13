/**
 * Pure helpers that turn a resolved spec into CSS variables, excerpt lines and
 * state chips for the gen-UI sample screen (port of the prototype's
 * genui5-render.js). Nothing is invented: a missing token becomes a `miss`
 * flag (neutral default + dashed "not in source" tag), never a brand value.
 */
import type { ButtonSlot, Prov } from "@/lib/landing-a/resolve";
import type { GenSpec } from "@/lib/landing-a/types";

const HEX = /^#[0-9a-f]{6}$/i;

export interface StateChip {
  readonly k: "pressed" | "hover" | "focus";
  readonly css: Record<string, string> | null;
  readonly sw?: string;
  readonly raw: string;
}

/** States render only when the claim is directly renderable (hex, scale(x), explicit 0 0 0 shadow). */
export function states(b: ButtonSlot | null): StateChip[] {
  const out: StateChip[] = [];
  if (!b) return out;
  for (const [k, v] of [["pressed", b.pressed], ["hover", b.hover], ["focus", b.focus]] as const) {
    if (!v) continue;
    const h = HEX.test(v.trim()) ? v.trim() : null;
    const sc = /scale\(([\d.]+)\)/.exec(v);
    const sh = /(0 0 0 \d+px #[0-9a-f]{6}(?:,\s*0 0 0 \d+px #[0-9a-f]{6})?)/i.exec(v);
    if (k === "focus" && sh) out.push({ k, css: { boxShadow: sh[1] }, raw: sh[1] });
    else if (h) out.push({ k, css: k === "focus" ? null : { background: h }, sw: h, raw: h });
    else if (sc) out.push({ k, css: { transform: `scale(${sc[1]})` }, raw: `scale(${sc[1]})` });
    else out.push({ k, css: null, raw: v.length > 44 ? `${v.slice(0, 43)}…` : v });
  }
  return out;
}

export type MissFlag = "canvas" | "fg" | "body" | "primary" | "head" | "bod" | "btn" | "bfg" | "br" | "bh" | "bpad" | "bfont" | "sbg" | "sr";

export function vars(s: GenSpec): { v: Record<string, string>; miss: Set<MissFlag> } {
  const v: Record<string, string> = {};
  const miss = new Set<MissFlag>();
  const set = (k: string, val: string | null | undefined, m: MissFlag) => {
    if (val != null && val !== "") v[k] = val;
    else miss.add(m);
  };
  set("--canvas", s.canvas?.v, "canvas");
  set("--fg", s.fg?.v, "fg");
  set("--body", s.body?.v, "body");
  set("--pri", s.primary?.v, "primary");
  if (s.head) {
    v["--h-fs"] = `${s.head.size}px`;
    v["--h-fw"] = String(s.head.weight);
    if (s.head.lh) v["--h-lh"] = s.head.lh.toFixed(3);
  } else miss.add("head");
  if (s.bod) {
    v["--p-fs"] = `${s.bod.size}px`;
    v["--p-fw"] = String(s.bod.weight);
    if (s.bod.lh) v["--p-lh"] = s.bod.lh.toFixed(3);
  } else miss.add("bod");
  const b = s.btn;
  if (b) {
    v["--b-bg"] = b.bg;
    set("--b-fg", b.fg, "bfg");
    set("--b-r", b.radius != null ? `${Math.min(b.radius, 999)}px` : null, "br");
    set("--b-h", b.height != null ? `${b.height}px` : null, "bh");
    set("--b-pad", b.pad, "bpad");
    if (b.fs) {
      v["--b-fs"] = `${b.fs}px`;
      v["--b-fw"] = String(b.fw);
    } else miss.add("bfont");
    if (b.flh) v["--b-lh"] = `${b.flh}px`;
  } else miss.add("btn");
  set("--s-bg", s.surface?.v, "sbg");
  set("--s-r", s.sr ? `${s.sr.v}px` : null, "sr");
  if (s.cardBorder) v["--s-bd"] = s.cardBorder.v;
  return { v, miss };
}

export interface Line {
  readonly t: string;
  /** Reveal step that consumes it: 0 canvas · 1 type · 2 button · 3 surface · 4 states. */
  readonly s: number;
  readonly miss: boolean;
}

/** Excerpt: parsed token lines labelled with their DESIGN.md token path, grouped by step. */
export function lines(s: GenSpec, absent: string): Line[] {
  const L: Line[] = [];
  const b = s.btn;
  const pad = (k: string) => (k.length >= 25 ? `${k}  ` : k.padEnd(26, " "));
  const add = (k: string, val: string | null | undefined, step: number) => L.push({ t: pad(k) + (val != null ? val : `— ${absent}`), s: step, miss: val == null });
  const tyv = (x: GenSpec["head"]) => (x ? `${x.size} / ${x.weight}${x.lh ? ` / ${x.lh.toFixed(2)}` : ""}` : null);
  add(s.canvas?.k ?? "colors.canvas", s.canvas?.v, 0);
  add(s.fg?.k ?? "colors.foreground", s.fg?.v, 0);
  add(s.body?.k ?? "colors.body", s.body?.v, 1);
  add(`typography.${s.head?.k ?? "heading"}`, tyv(s.head), 1);
  add(`typography.${s.bod?.k ?? "body"}`, tyv(s.bod), 1);
  if (s.famT) add(s.famT.k, s.famT.v, 1);
  if (s.famD && (!s.famT || s.famD.v !== s.famT.v)) add(s.famD.k, s.famD.v, 1);
  add(s.primary?.k ?? "colors.primary", s.primary?.v, 2);
  if (b) {
    add(`components.${b.k}.bg`, b.bg, 2);
    add(`  .radius${b.rk ? ` ← ${b.rk}` : ""}`, b.radius != null ? `${b.radius}px` : null, 2);
    add(`  .height${b.hk ? " ← use" : ""}`, b.height != null ? `${b.height}px` : null, 2);
    add("  .padding", b.pad, 2);
    add("  .font", b.fs ? `${b.fs}px / ${b.fw}${b.flh ? ` / ${b.flh}px` : ""}` : null, 2);
  } else add("components.button", null, 2);
  add(s.surface?.k ?? "colors.surface", s.surface?.v, 3);
  add(s.sr?.k ?? "rounded.card", s.sr ? `${s.sr.v}px` : null, 3);
  if (s.cardBorder) add(s.cardBorder.k, s.cardBorder.v, 3);
  const st = states(b);
  if (st.length) for (const x of st) add(`  .${x.k}`, x.raw, 4);
  else add("  .states", null, 4);
  return L;
}

/** Missing-token chip labels for the summary (button sub-keys get the component name). */
export function missingLabels(s: GenSpec, ls: Line[]): string[] {
  return ls.filter((l) => l.miss).map((l) => {
    const k = l.t.trim().split(/\s+/)[0];
    return k.startsWith(".") ? `${s.btn ? s.btn.k : "button"}${k}` : k;
  });
}

export type MethodKey = "css" | "both" | "doc" | "live";
export function methodKey(m: string): MethodKey {
  return /official/.test(m) ? (/computed/.test(m) ? "both" : "doc") : /computed/.test(m) ? "css" : "live";
}

export interface TipRow {
  readonly k: string;
  readonly v: string | null;
  readonly p: Prov | null;
  /** Source host differs from the button's. */
  readonly other: boolean;
}

/** Provenance rows per screen element (by step). */
export function tips(s: GenSpec): Record<number, TipRow[]> {
  const b = s.btn;
  const bh = b?.p ? b.p[0] : null;
  const row = (k: string, v: string | number | null | undefined, p?: Prov | null): TipRow => ({ k, v: v != null ? String(v) : null, p: p ?? null, other: !!(p && bh && p[0] !== bh) });
  const t: Record<number, TipRow[]> = {};
  t[0] = [row("canvas", s.canvas?.v, s.canvas?.p), row("foreground", s.fg?.v, s.fg?.p)];
  t[1] = [
    row(s.head?.k ?? "heading", s.head ? `${s.head.size}/${s.head.weight}` : null, s.head?.p),
    row(s.bod?.k ?? "body", s.bod ? `${s.bod.size}/${s.bod.weight}` : null, s.bod?.p),
    row("color", s.body?.v, s.body?.p),
    ...(s.famT ? [row(s.famT.k, s.famT.v, s.famT.p)] : []),
    ...(s.famD && (!s.famT || s.famD.v !== s.famT.v) ? [row(s.famD.k, s.famD.v, s.famD.p)] : []),
  ];
  t[2] = b
    ? [
        row(b.k, `${b.bg}${b.radius != null ? ` · r${b.radius}` : ""}${b.height != null ? ` · ${b.height}px` : ""}`, b.p),
        ...(b.pad ? [] : [row("padding", null)]),
        ...(b.height != null ? [] : [row("height", null)]),
        ...(b.fs ? [] : [row("font", null)]),
      ]
    : [row("button", null)];
  t[3] = [
    row(s.surface?.k ?? "surface", s.surface?.v, s.surface?.p),
    row(s.sr?.k ?? "radius", s.sr ? `${s.sr.v}px` : null, s.sr?.p),
    ...(s.cardBorder ? [row(s.cardBorder.k, s.cardBorder.v, s.cardBorder.p)] : []),
  ];
  const st = states(b);
  t[4] = st.length ? st.map((x) => row(x.k, x.raw, b?.sp[x.k])) : [row("states", null)];
  return t;
}

export function glyph(n: string) {
  const d = n.match(/^\d+/);
  if (d) return d[0];
  const m = n.match(/[぀-ヿ㐀-鿿가-힣]/);
  return m ? m[0] : n.trim()[0];
}
