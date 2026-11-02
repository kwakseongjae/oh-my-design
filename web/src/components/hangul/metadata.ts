import type { Metadata } from "next";
import { SITE_LOCALE_META } from "@/lib/i18n/site-locales";
import { HANGUL_COPY, HANGUL_PATH, type HangulLocale } from "./copy";

/** The pair each page names as hreflang alternates; x-default is the English page. */
export const HANGUL_LANGUAGES: Readonly<Record<string, string>> = {
  en: HANGUL_PATH.en,
  ko: HANGUL_PATH.ko,
  "x-default": HANGUL_PATH.en,
};

/** Static share cards, 1200×630, rendered from the page's own faces
 *  (docs/research/2026-10-21-hangul/page/og/). Under /hangul/, never /api/ (robots.txt). */
export const HANGUL_OG: Readonly<Record<HangulLocale, string>> = {
  ko: "/hangul/og-ko.png",
  en: "/hangul/og-en.png",
};

export function hangulMetadata(locale: HangulLocale): Metadata {
  const t = HANGUL_COPY[locale];
  const path = HANGUL_PATH[locale];
  const other: HangulLocale = locale === "ko" ? "en" : "ko";
  const image = { url: HANGUL_OG[locale], width: 1200, height: 630, alt: t.meta.ogAlt };
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { canonical: path, languages: { ...HANGUL_LANGUAGES } },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE_META[locale].ogLocale,
      alternateLocale: [SITE_LOCALE_META[other].ogLocale],
      title: t.meta.title,
      description: t.meta.description,
      url: path,
      siteName: "oh-my-design",
      images: [image],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description, images: [image.url] },
  };
}
