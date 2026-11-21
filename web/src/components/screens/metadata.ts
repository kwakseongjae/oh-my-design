import type { Metadata } from "next";
import { screensPublished } from "@/lib/screens/source.server";
import { GALLERY_COPY, SCREENS_PATH, type ScreensLocale } from "./copy";

type Env = Record<string, string | undefined>;

/**
 * /screens and /ko/screens. Until screens are published (lib/screens/public.server.ts screensPublished): never indexed,
 * never followed, in no sitemap and linked from no header; the pages themselves 404 unless a local folder is
 * configured. Once published: indexable and followed, but `noimageindex` — the stills are other companies' screens
 * and are kept out of image search — with the two pages named as each other's language versions.
 */
export function screensMetadata(locale: ScreensLocale, env: Env = process.env): Metadata {
  const t = GALLERY_COPY[locale].meta;
  if (!screensPublished(env)) {
    return {
      title: `${t.title} — oh-my-design`,
      description: t.description,
      robots: { index: false, follow: false },
      alternates: { canonical: SCREENS_PATH[locale] },
    };
  }
  return {
    title: `${t.title} — oh-my-design`,
    description: t.description,
    robots: { index: true, follow: true, noimageindex: true },
    alternates: { canonical: SCREENS_PATH[locale], languages: { en: SCREENS_PATH.en, ko: SCREENS_PATH.ko, "x-default": SCREENS_PATH.en } },
  };
}
