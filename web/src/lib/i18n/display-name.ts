/**
 * Which name a page shows for a brand (rebrand round 10, owner 2026-10-16).
 *
 * Since the ko-detail merge, 170 registry entries carry a Hangul `displayName`
 * (catalog.display_name_kr: 토스, 배달의민족 …). Hangul display names belong to the
 * Korean pages only (/ko, /ko/design-systems/…). Every other locale, and every English
 * page, shows the brand's English name; a Japanese or Traditional Chinese native name
 * (メルカリ, 台灣高鐵) is still preferred where the registry records one, as before.
 *
 * Pure: no registry import, so client and server code can both use it.
 */
import { CJK_RE } from "@/lib/landing-a/resolve";

export const HANGUL_RE = /[ᄀ-ᇿ㄰-㆏가-힯]/;

type Named = { readonly id: string; readonly name: string; readonly displayName?: string };

/** "Ably (에이블리)" → "Ably"; a parenthetical holding Hangul is the Korean gloss. */
const stripHangulGloss = (s: string) => s.replace(/\s*[(（][^)）]*[㄰-㆏가-힯][^)）]*[)）]/g, "").trim();

const titleId = (id: string) => id.replace(/\.(app|ai)$/, "").replace(/^./, (c) => c.toUpperCase());

/**
 * The name on a non-Korean page: no Hangul. A CJK native name (kana / hanzi) wins when
 * the registry has one, as the landing's nativeName() did; else the English name.
 */
export function nonKoName(r: Named): string {
  const c = [r.name, r.displayName ?? ""].map(stripHangulGloss).filter((s) => s && !HANGUL_RE.test(s));
  return c.find((s) => CJK_RE.test(s)) ?? c[0] ?? titleId(r.id);
}

/**
 * The name on a Korean page: the Hangul display name where the reference records one,
 * else the native (CJK) name, else the registry name.
 */
export function koPageName(r: Named): string {
  if (r.displayName && HANGUL_RE.test(r.displayName)) return r.displayName;
  return [r.name, r.displayName ?? ""].find((s) => s && CJK_RE.test(s)) ?? r.name ?? titleId(r.id);
}

/** The brand name for a page in `locale` ("ko" pages get Hangul; everything else does not). */
export function siteName(r: Named, locale: string | undefined): string {
  return locale === "ko" ? koPageName(r) : nonKoName(r);
}
