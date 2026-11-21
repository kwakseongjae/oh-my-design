import { notFound } from "next/navigation";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { readGallery } from "@/lib/screens/gallery.server";
import { SCREENS_PATH, type ScreensLocale } from "./copy";
import { ScreensGallery } from "./screens-gallery";

/**
 * The page behind /screens and /ko/screens. Not found while there are no screens to read: nothing published
 * (lib/screens/public.server.ts) and no local folder configured. lib/screens/source.server.ts decides.
 */
export function ScreensPage({ locale }: { locale: ScreensLocale }) {
  const model = readGallery(locale);
  if (!model) notFound();
  return (
    <div className="sq-root sq-root-page" lang={locale}>
      <SiteHeaderA locale={locale} current={locale} localeHrefs={{ en: SCREENS_PATH.en, ko: SCREENS_PATH.ko }} />
      <main id="main" className="sq-wrap">
        <ScreensGallery model={model} locale={locale} />
      </main>
      <SiteFooterA locale={locale} current={locale} />
    </div>
  );
}
