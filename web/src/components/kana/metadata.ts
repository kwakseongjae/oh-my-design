import type { Metadata } from "next";
import data from "@/data/kana-rules.generated.json";
import { SITE_LOCALE_META } from "@/lib/i18n/site-locales";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import { KANA_COPY, KANA_PATH } from "./copy";

/**
 * /ko/kana has no twin yet: the Japanese page waits for a native review and no English page is planned in this run,
 * so the only hreflang alternate is the page itself. noindex until the owner releases it, and in no sitemap.
 */
export function kanaMetadata(): Metadata {
  const title = KANA_COPY.meta.title;
  const description = KANA_COPY.meta.description(data.rules.length, data.houseChoices.length);
  return {
    title,
    description,
    robots: { index: false, follow: true },
    alternates: { canonical: KANA_PATH, languages: { ko: KANA_PATH } },
    openGraph: {
      type: "website",
      locale: SITE_LOCALE_META.ko.ogLocale,
      title,
      description,
      url: KANA_PATH,
      siteName: "oh-my-design",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE.url] },
  };
}
