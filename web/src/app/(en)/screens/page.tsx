import type { Metadata } from "next";
import { ScreensPage } from "@/components/screens/screens-page";
import { screensMetadata } from "@/components/screens/metadata";

/**
 * /screens — Korean services' screens by screen type, each beside its company's DESIGN.md colours. Local only: a 404
 * unless OMD_SCREENS_DIR names the screens folder (and, in a production build, OMD_SCREENS_ALLOW=1). Twin: /ko/screens.
 */
export const metadata: Metadata = screensMetadata("en");

export default function ScreensGalleryPage() {
  return <ScreensPage locale="en" />;
}
