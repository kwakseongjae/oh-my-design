import { readGallery } from "@/lib/screens/gallery.server";
import { wallRows } from "@/lib/screens/gallery";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { LANDING_SCREENS_COPY, SCREENS_PATH } from "./copy";
import { ScreensWallSlot } from "./landing-wall-slot";

/**
 * The landing's screens section, right after the DESIGN.md-to-screen journey (brand-a/landing.tsx), from the still the
 * owner chose on 2026-11-22 (la-wall, tools/screen-archive/make-browse-mocks.mjs on the screens branch): a heading, a
 * sentence with the counts, a wall of stills in two rows that run past both edges of the page, and one action to the
 * gallery. English and Korean landings only.
 * Renders nothing at all while there are no screens to read (nothing published and no local folder:
 * lib/screens/source.server.ts), so the landing is then exactly as before. The section's markup and stylesheet are
 * their own chunk (./landing-wall-slot.tsx), so a landing without screens never downloads either.
 * Synchronous on purpose: the landing's tests render it with renderToStaticMarkup.
 */
export function ScreensLandingSection({ locale }: { locale: SiteLocale }) {
  if (locale !== "en" && locale !== "ko") return null;
  const model = readGallery(locale);
  if (!model) return null;
  const [a, b] = wallRows(model);
  if (a.length === 0) return null;
  const t = LANDING_SCREENS_COPY[locale];
  const label = (tiles: typeof a) => tiles.map((x) => ({ ...x, label: t.tile(x.name, x.title) }));
  return (
    <ScreensWallSlot
      h2={t.h2}
      intro={t.intro(model.services.length, model.shots.length)}
      cta={t.cta}
      ctaHref={SCREENS_PATH[locale]}
      rows={[label(a), label(b)]}
    />
  );
}
