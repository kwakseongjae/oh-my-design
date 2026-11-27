/**
 * The /screens gallery's and the landing wall's model for one page language, from the screens a page reads
 * (source.server.ts: the published manifest, or a local folder) and the registry. Null when there are none: the pages
 * call notFound() and the landing leaves its section out.
 *
 * A folder is a service only when its name is a reference id: the gallery's point is the screen beside that
 * company's DESIGN.md, so a walk with no reference behind it is left out rather than named from the walk.
 * Names, countries and categories are the registry's (name on the English page, displayName on the Korean one;
 * category names as the archive writes them), never the walk's, and the logo is the archive's square mark (markFor).
 */

import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { markFor } from "@/app/(en)/design-systems/archive-rows.server";
import { ARCHIVE_COPY } from "@/components/brand-a/copy/r11-archive";
import { detailHrefFor, hasDetail } from "@/lib/i18n/detail-locales";
import { screensServicePath } from "@/components/screens/copy";
import { allScreens, screensOf } from "./source.server";
import { byCount, orderServices, similarServices, type GalleryModel, type GalleryShot, type ServiceScreensModel } from "./gallery";
import { devicesOf } from "./model";

type Env = Record<string, string | undefined>;
export type GalleryLocale = "en" | "ko";

/** A country's name in the page's language: the archive's word for the four it names, else Intl's. */
function countryName(code: string, locale: GalleryLocale): string {
  const archive = ARCHIVE_COPY[locale].regions as Record<string, string>;
  if (code !== "all" && code !== "other" && archive[code]) return archive[code];
  try {
    return new Intl.DisplayNames([locale], { type: "region" }).of(code === "UK" ? "GB" : code) ?? code;
  } catch {
    return code;
  }
}

export function readGallery(locale: GalleryLocale, env: Env = process.env): GalleryModel | null {
  const all = allScreens(env);
  if (!all) return null;
  const domains = ARCHIVE_COPY[locale].domains;
  const known = all.flatMap((m) => {
    const ref = REGISTRY_BY_ID[m.slug];
    if (!ref) return [];
    const name = locale === "ko" ? ref.displayName || ref.name : ref.name;
    const href = detailHrefFor(locale, m.slug, hasDetail(locale, ref.country, REFERENCE_QUALITY_BY_ID[m.slug]?.status));
    const shots: GalleryShot[] = m.cards
      .filter((c) => !c.blocked && c.stills.length > 0)
      .map((c) => ({ slug: m.slug, key: c.key, type: c.type, title: c.title, state: c.state, stills: c.stills }));
    const category = ref.category || null;
    return shots.length
      ? [
          {
            model: m,
            name,
            platform: m.platform,
            service: {
              slug: m.slug,
              name,
              href,
              screensHref: screensServicePath(locale, m.slug),
              country: ref.country || null,
              category,
              // unknown means absent: a category the archive has no name for is not shown
              categoryName: category ? (domains[category] ?? null) : null,
              logo: markFor(m.slug),
              count: shots.length,
              devices: devicesOf(shots),
            },
            shots,
          },
        ]
      : [];
  });
  if (known.length === 0) return null;
  const ordered = orderServices(known, locale);
  const services = ordered.map((s) => s.service);
  const shots = ordered.flatMap((s) => s.shots);
  const dates = ordered.map((s) => s.model.shot).filter((d): d is string => d !== null).sort();
  return {
    services,
    shots,
    shot: dates.length ? { from: dates[0], to: dates[dates.length - 1] } : null,
    signedOut: ordered.every((s) => s.model.signedOut),
    devices: devicesOf(shots),
    countries: byCount(services.map((s) => s.country)).map((value) => ({ value, label: countryName(value, locale) })),
    categories: byCount(services.filter((s) => s.categoryName).map((s) => s.category)).map((value) => ({ value, label: domains[value] })),
    published: ordered.some((s) => s.model.published),
  };
}

/** The ids that have a screens page (/screens/<id>, /ko/screens/<id>): the gallery's services. Empty in the shut
 *  state, so the pages' generateStaticParams list nothing and every id is a 404. */
export function screenServiceIds(env: Env = process.env): string[] {
  return readGallery("en", env)?.services.map((s) => s.slug) ?? [];
}

/** How many suggestions the server hands over: enough that the page can still show three on either device. */
const SIMILAR_CANDIDATES = 8;

export function readServiceScreens(locale: GalleryLocale, id: string, env: Env = process.env): ServiceScreensModel | null {
  const gallery = readGallery(locale, env);
  const service = gallery?.services.find((s) => s.slug === id);
  const model = service ? screensOf(id, env) : null;
  if (!gallery || !service || !model) return null;
  const ref = REGISTRY_BY_ID[id];
  return {
    service,
    names: { en: ref.name, ko: ref.displayName || ref.name },
    cards: model.cards,
    shot: model.shot,
    signedOut: model.signedOut,
    published: model.published,
    similar: similarServices(gallery, id)
      .slice(0, SIMILAR_CANDIDATES)
      .map((s) => ({ service: s, shots: gallery.shots.filter((x) => x.slug === s.slug) })),
  };
}
