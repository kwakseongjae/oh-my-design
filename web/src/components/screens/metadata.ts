import type { Metadata } from "next";
import { screensPublished } from "@/lib/screens/source.server";
import { readServiceScreens } from "@/lib/screens/gallery.server";
import { GALLERY_COPY, SCREENS_PATH, SERVICE_SCREENS_COPY, screensServicePath, type ScreensLocale } from "./copy";

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

/**
 * /screens/<id> and /ko/screens/<id>, by the same rules as the gallery: until screens are published never indexed or
 * followed (the pages exist then only with a local folder in development); once published indexable and followed but
 * `noimageindex`, with the two languages named as each other's versions. Titles and descriptions name the service,
 * never a country.
 */
export function serviceScreensMetadata(locale: ScreensLocale, id: string, env: Env = process.env): Metadata {
  const model = readServiceScreens(locale, id, env);
  if (!model) return { robots: { index: false, follow: false } };
  const t = SERVICE_SCREENS_COPY[locale].meta;
  const name = model.service.name;
  const base = {
    title: `${t.title(name)} — oh-my-design`,
    description: t.description(name, model.service.count),
  };
  const paths = { en: screensServicePath("en", id), ko: screensServicePath("ko", id) };
  if (!screensPublished(env)) return { ...base, robots: { index: false, follow: false }, alternates: { canonical: paths[locale] } };
  return {
    ...base,
    robots: { index: true, follow: true, noimageindex: true },
    alternates: { canonical: paths[locale], languages: { en: paths.en, ko: paths.ko, "x-default": paths.en } },
  };
}
