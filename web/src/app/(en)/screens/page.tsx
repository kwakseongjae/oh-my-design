import type { Metadata } from "next";
import { ScreensPage } from "@/components/screens/screens-page";
import { screensMetadata } from "@/components/screens/metadata";

/**
 * /screens — Korean services' screens by screen type, each beside its company's DESIGN.md colours. A 404 until screens
 * are published (lib/screens/public.server.ts) or a local folder is configured. Twin: /ko/screens.
 */
export const metadata: Metadata = screensMetadata("en");

export default function ScreensGalleryPage() {
  return <ScreensPage locale="en" />;
}
