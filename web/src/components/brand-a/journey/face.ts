/**
 * Which face a sample screen is set in (owner #11, AGENTS.md "Unlabelled font substitution is
 * forbidden"). Resolved on the server per (company, page language), in this order:
 *
 *  1. real — the reference's UI face is open-licence (OFL in lib/font-registry.ts), self-hosted
 *     here (journey/faces.ts) and its file carries the page language's script. Loaded for real,
 *     no label. Pretendard (KakaoBank "Pretendard Variable", Banksalad "Pretendard"; OFL-1.1,
 *     src/fonts/pretendard/OFL.txt — a KS X 1001 subset: Latin + Hangul, no kana or hanzi) and
 *     Noto Sans JP (freee; OFL, Google build through next/font: Latin + Japanese).
 *  1b. system — the reference says the UI face *is* the operating system's (Karrot "System",
 *     LINE Messenger "System"): the system UI stack is that face, not a substitute.
 *  2. substitute — a proprietary face with a measured substitute for the page's script
 *     (lib/fonts/substitutes.ts, filled by the fonts work stream). Loaded and labelled
 *     "substitute — not the brand face".
 *  3. none — nothing loadable: the page face, labelled "brand typeface not applied". `uncovered`
 *     is the same label with the reason: an open face whose file has no glyphs for the page's
 *     script (Pretendard on /ja, Noto Sans JP on /ko), so no text is set in it at all rather
 *     than a page of fallback glyphs passing for the brand face.
 *
 * LINE's display face LINESeed is the marketing and documentation display role (§3 of its
 * reference); a Messenger chat list is product UI, which §3 sets in the OS face, so it is not
 * loaded here.
 */
import { lookupFont } from "@/lib/font-registry";
import type { FontScript, FontSubstitute } from "@/lib/fonts/substitutes";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import type { Claimed } from "@/lib/landing-a/resolve";

export const PAGE_SCRIPT: Readonly<Record<SiteLocale, FontScript>> = { en: "latin", ko: "hangul", ja: "kana", "zh-tw": "han-hant" };

/** The page's own face stack per language (styles/brand-a.css): what "not applied" renders in. */
export const PAGE_STACK: Readonly<Record<SiteLocale, string>> = {
  en: "var(--sq-f-en)",
  ko: "var(--sq-f-ko)",
  ja: "var(--sq-f-ja)",
  "zh-tw": "var(--sq-f-tc)",
};

export const SYSTEM_STACK = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

/** Open faces self-hosted in journey/faces.ts, with the scripts their files actually carry. */
export const OPEN_FACES: Readonly<Record<string, { readonly cssVar: string; readonly scripts: readonly FontScript[] }>> = {
  Pretendard: { cssVar: "--font-r11-pretendard", scripts: ["latin", "hangul"] },
  "Pretendard Variable": { cssVar: "--font-r11-pretendard", scripts: ["latin", "hangul"] },
  "Noto Sans JP": { cssVar: "--font-r11-noto-jp", scripts: ["latin", "kana"] },
};

export type Face =
  | { readonly mode: "real"; readonly k: string; readonly family: string; readonly css: string }
  | { readonly mode: "system"; readonly k: string; readonly family: string; readonly css: string }
  | { readonly mode: "substitute"; readonly k: string; readonly family: string; readonly sub: string; readonly css: string; readonly href: string }
  | { readonly mode: "uncovered"; readonly k: string; readonly family: string; readonly css: string }
  | { readonly mode: "none"; readonly k: string | null; readonly family: string | null; readonly css: string };

const SYSTEM_RE = /^(system|system ui|system-ui|-apple-system)$/i;

export function faceFor(s: { readonly famT: Claimed | null; readonly famD: Claimed | null }, locale: SiteLocale, subs: readonly FontSubstitute[]): Face {
  const page = PAGE_STACK[locale];
  const fam = s.famT ?? s.famD;
  if (!fam) return { mode: "none", k: null, family: null, css: page };
  const family = fam.v.split(",")[0].replace(/['"]/g, "").trim();
  if (SYSTEM_RE.test(family)) return { mode: "system", k: fam.k, family, css: SYSTEM_STACK };
  const script = PAGE_SCRIPT[locale];
  const open = OPEN_FACES[family];
  if (open && lookupFont(family).license === "OFL") {
    return open.scripts.includes(script)
      ? { mode: "real", k: fam.k, family, css: `var(${open.cssVar}), ${page}` }
      : { mode: "uncovered", k: fam.k, family, css: page };
  }
  // proprietary (or not self-hosted): a measured substitute for this script, never one chosen by eye
  const sub = subs.find((x) => x.script === script && x.cssUrl);
  if (sub?.cssUrl) return { mode: "substitute", k: fam.k, family, sub: sub.family, css: `"${sub.family.replace(/"/g, "")}", ${page}`, href: sub.cssUrl };
  return { mode: "none", k: fam.k, family, css: page };
}
