import type { SiteLocale } from "@/lib/i18n/site-locales";
import { EN, type BrandCopy } from "./en";
import { JA } from "./ja";
import { KO } from "./ko";
import { ZH_TW } from "./zh-tw";

export type { BrandCopy };

const BY: Record<SiteLocale, BrandCopy> = { en: EN, ko: KO, ja: JA, "zh-tw": ZH_TW };

export function getCopy(locale: SiteLocale): BrandCopy {
  return BY[locale];
}

/** Fill `{placeholders}`; unknown keys stay as written so a gap is visible, not silently blank. */
export function fmt(s: string, vars: Readonly<Record<string, string | number>>): string {
  return s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}
