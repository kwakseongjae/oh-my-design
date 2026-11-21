/**
 * The /screens gallery's model for one page language, from the local screens folder (local.server.ts) and the
 * registry. Null whenever the gate is shut: the pages call notFound() and the landing leaves its section out.
 *
 * A folder is a service only when its name is a reference id: the gallery's point is the screen beside that
 * company's DESIGN.md, so a walk with no reference behind it is left out rather than named from the walk.
 * Names are the registry's (name on the English page, displayName on the Korean one), never the walk's.
 */

import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { detailHrefFor, hasKoDetail } from "@/lib/i18n/ko-detail";
import { listScreens } from "./local.server";
import { orderServices, shotDots, type GalleryModel, type GalleryShot } from "./model";

type Env = Record<string, string | undefined>;
export type GalleryLocale = "en" | "ko";

export function readGallery(locale: GalleryLocale, env: Env = process.env): GalleryModel | null {
  const all = listScreens(env);
  if (!all) return null;
  const known = all.flatMap((m) => {
    const ref = REGISTRY_BY_ID[m.slug];
    if (!ref) return [];
    const name = locale === "ko" ? ref.displayName || ref.name : ref.name;
    const href = detailHrefFor(locale, m.slug, hasKoDetail(ref.country, REFERENCE_QUALITY_BY_ID[m.slug]?.status));
    const shots: GalleryShot[] = m.cards
      .filter((c) => !c.blocked && c.stills.length > 0)
      .map((c) => ({ slug: m.slug, key: c.key, type: c.type, title: c.title, state: c.state, stills: c.stills, dots: shotDots(c.key, m.colors) }));
    return shots.length ? [{ model: m, name, platform: m.platform, href, shots }] : [];
  });
  if (known.length === 0) return null;
  const ordered = orderServices(known, locale);
  const dates = ordered.map((s) => s.model.shot).filter((d): d is string => d !== null).sort();
  return {
    services: ordered.map((s) => ({ slug: s.model.slug, name: s.name, href: s.href, count: s.shots.length })),
    shots: ordered.flatMap((s) => s.shots),
    shot: dates.length ? { from: dates[0], to: dates[dates.length - 1] } : null,
    signedOut: ordered.every((s) => s.model.signedOut),
    widths: [...new Set(ordered.flatMap((s) => s.shots.flatMap((x) => x.stills.map((st) => st.width))))].sort((a, b) => b - a),
  };
}
