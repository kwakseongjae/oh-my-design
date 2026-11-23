import type { Metadata } from "next";
import data from "@/data/kana-rules.generated.json";
import { SITE_LOCALE_META } from "@/lib/i18n/site-locales";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import type { KanaLocale } from "./copy";
import { KANA_KIT } from "./locale";

/**
 * /ko/kana and /ja/kana: both noindex until the owner releases them, and in no sitemap. Neither names the other as an
 * hreflang alternate: an unreleased page declares no twin (the Korean page kept its self-only alternate when the
 * Japanese edition came, 2026-11-23), so each page's only alternate is itself. The header's language switch still
 * links the Japanese page to the Korean one (kana-page.tsx).
 */
export function kanaMetadata(locale: KanaLocale = "ko"): Metadata {
  const { t, path } = KANA_KIT[locale];
  const title = t.meta.title;
  const description = t.meta.description(data.rules.length, data.houseChoices.length);
  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: path, languages: { [SITE_LOCALE_META[locale].hreflang]: path } },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE_META[locale].ogLocale,
      title,
      description,
      url: path,
      siteName: "oh-my-design",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE.url] },
  };
}
