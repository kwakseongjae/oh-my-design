import type { Metadata } from "next";
import { getFacts } from "@/lib/landing-a/data.server";
import { LANDING_LANGUAGE_ALTERNATES, SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import { fmt, getCopy } from "./copy";
import { plain } from "./rich";

/** Per-locale landing metadata: native title/description, canonical, hreflang (+x-default), OG locale. */
export function landingMetadata(locale: SiteLocale): Metadata {
  const c = getCopy(locale);
  const F = getFacts();
  const title = plain(c.title);
  const description = fmt(c.desc, { total: F.total, cjk: F.cjk });
  const meta = SITE_LOCALE_META[locale];
  return {
    title,
    description,
    alternates: { canonical: meta.path, languages: { ...LANDING_LANGUAGE_ALTERNATES } },
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      alternateLocale: Object.values(SITE_LOCALE_META).filter((m) => m.ogLocale !== meta.ogLocale).map((m) => m.ogLocale),
      title,
      description,
      url: meta.path,
      siteName: "oh-my-design",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description, images: [DEFAULT_OG_IMAGE.url] },
  };
}
