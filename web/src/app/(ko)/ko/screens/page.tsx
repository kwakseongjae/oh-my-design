import type { Metadata } from "next";
import { ScreensPage } from "@/components/screens/screens-page";
import { screensMetadata } from "@/components/screens/metadata";

/**
 * /ko/screens — 한국 서비스 화면 모음. Under the (ko) root layout, so the document is <html lang="ko">. Local only: a 404
 * unless OMD_SCREENS_DIR names the screens folder (and, in a production build, OMD_SCREENS_ALLOW=1). Twin: /screens.
 */
export const metadata: Metadata = screensMetadata("ko");

export default function KoreanScreensGalleryPage() {
  return <ScreensPage locale="ko" />;
}
