import { readGallery } from "@/lib/screens/gallery.server";
import { stillAt, teaserRow } from "@/lib/screens/model";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { SCREENS_PATH, landingScreensCopy } from "./copy";
import { ScreensLandingRowSlot } from "./landing-row-slot";
import type { StripTile } from "./landing-row";

const STRIP_WIDTH = 390;

/**
 * The landing's screens strip, mounted inside the catalog showcase between the logo rows and the archive button
 * (brand-a/catalog-showcase.tsx, `screens` slot), so it reads as part of the references, not as a chapter of its own.
 * Owner, 2026-11-22: "그냥 화면들도 캐러셀이나 그리드 형태로 … 심플하게": a one-word label, a "see all" text link to the
 * gallery, and one sideways row of every service's home screen at phone width, each named and opening that service's
 * item page at #screens. No heading sentence, chips, colour dots or button.
 * English and Korean landings only. Renders nothing at all while there are no screens to read (nothing published and
 * no local folder: lib/screens/source.server.ts), so the landing is then exactly as before.
 * Synchronous on purpose: the landing's tests render it with renderToStaticMarkup.
 */
export function ScreensLandingSection({ locale }: { locale: SiteLocale }) {
  if (locale !== "en" && locale !== "ko") return null;
  const model = readGallery(locale);
  if (!model) return null;
  const names = new Map(model.services.map((s) => [s.slug, s]));
  const t = landingScreensCopy(locale);
  const tiles: StripTile[] = teaserRow(model.shots, model.services.map((s) => s.slug), STRIP_WIDTH, "home", Infinity).map((shot) => {
    const svc = names.get(shot.slug)!;
    return { slug: shot.slug, name: svc.name, label: t.tile(svc.name), href: `${svc.href}#screens`, still: stillAt(shot, STRIP_WIDTH)!.still };
  });
  if (tiles.length === 0) return null;
  return <ScreensLandingRowSlot label={t.label} all={t.all} allHref={SCREENS_PATH[locale]} tiles={tiles} />;
}
