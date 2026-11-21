import { readGallery } from "@/lib/screens/gallery.server";
import { stillAt, teaserRow, type FixedShelfId } from "@/lib/screens/model";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { SCREENS_PATH, landingScreensCopy } from "./copy";
import { ScreensLandingRowSlot } from "./landing-row-slot";
import type { TeaserRow } from "./landing-row";

/** The chips of the landing row, in this order (g-landing). */
const TEASER_SHELVES: FixedShelfId[] = ["home", "results", "list", "detail", "login"];
const TEASER_WIDTH = 390;
const TEASER_TILES = 7;

/**
 * The landing's way to /screens, after the catalog showcase: a label, a heading, two lines, screen-type chips that
 * switch one row of seven phone-width tiles (one per service), and the button to the gallery with the screen count.
 * English and Korean landings only. Renders nothing at all, and reads nothing from disk, while the local screens
 * folder is not configured (lib/screens/local.server.ts screensRoot()), so the landing is then exactly as before.
 * Synchronous on purpose: the landing's tests render it with renderToStaticMarkup.
 */
export function ScreensLandingSection({ locale }: { locale: SiteLocale }) {
  if (locale !== "en" && locale !== "ko") return null;
  const model = readGallery(locale);
  if (!model) return null;
  const order = model.services.map((s) => s.slug);
  const names = new Map(model.services.map((s) => [s.slug, s]));
  const rows: TeaserRow[] = TEASER_SHELVES.map((id) => ({
    id,
    tiles: teaserRow(model.shots, order, TEASER_WIDTH, id, TEASER_TILES).map((shot) => {
      const svc = names.get(shot.slug)!;
      return { slug: shot.slug, key: shot.key, name: svc.name, href: `${svc.href}#screens`, title: shot.title, still: stillAt(shot, TEASER_WIDTH)!.still, dots: shot.dots };
    }),
  })).filter((r) => r.tiles.length > 0);
  if (rows.length === 0) return null;
  const t = landingScreensCopy(locale, model.services.length, model.shots.length);
  return (
    <section className="sq-gal-land" aria-labelledby="h-screens">
      <div className="sq-wrap">
        <span className="sq-gal-land-k">{t.kicker}</span>
        <h2 id="h-screens">{t.h2}</h2>
        <p className="sq-gal-land-p">{t.lede}</p>
        <ScreensLandingRowSlot locale={locale} rows={rows} chipsLabel={t.chips} cta={t.cta} ctaHref={SCREENS_PATH[locale]} />
      </div>
    </section>
  );
}
