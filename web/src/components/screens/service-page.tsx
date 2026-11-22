import { notFound } from "next/navigation";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { readServiceScreens, screenServiceIds } from "@/lib/screens/gallery.server";
import { SITE_ORIGIN } from "@/lib/site";
import { SCREENS_PATH, screensServicePath, type ScreensLocale } from "./copy";
import { ServiceScreens } from "./service-screens";

/** The ids /screens/[id] and /ko/screens/[id] prerender: every service with screens, none in the shut state. */
export function serviceScreensParams(): { id: string }[] {
  return screenServiceIds().map((id) => ({ id }));
}

/**
 * The page behind /screens/<id> and /ko/screens/<id>. Not found for an id with no screens to read (nothing published
 * and no local folder, or a service that has none): lib/screens/gallery.server.ts decides. Korean for every service
 * with screens; only its DESIGN.md link depends on whether a Korean item page exists.
 */
export function ServiceScreensPage({ locale, id }: { locale: ScreensLocale; id: string }) {
  const model = readServiceScreens(locale, id);
  if (!model) notFound();
  const paths = { en: screensServicePath("en", id), ko: screensServicePath("ko", id) };
  return (
    <div className="sq-root sq-root-page" lang={locale}>
      <SiteHeaderA locale={locale} current={locale} localeHrefs={paths} />
      <main id="main" className="sq-wrap">
        <ServiceScreens
          model={model}
          locale={locale}
          urls={{ en: `${SITE_ORIGIN}${paths.en}`, ko: `${SITE_ORIGIN}${paths.ko}` }}
          galleryHref={SCREENS_PATH[locale]}
        />
      </main>
      <SiteFooterA locale={locale} current={locale} />
    </div>
  );
}
