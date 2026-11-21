import type { Metadata } from "next";
import { GALLERY_COPY, SCREENS_PATH, type ScreensLocale } from "./copy";

/**
 * /screens and /ko/screens: other companies' screens whose publication is not decided. Never indexed, never followed,
 * in no sitemap and linked from no header or footer; the pages themselves 404 unless the local folder is configured.
 */
export function screensMetadata(locale: ScreensLocale): Metadata {
  const t = GALLERY_COPY[locale].meta;
  return {
    title: `${t.title} — oh-my-design`,
    description: t.description,
    robots: { index: false, follow: false },
    alternates: { canonical: SCREENS_PATH[locale] },
  };
}
