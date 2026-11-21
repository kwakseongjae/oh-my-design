import type { Metadata } from "next";
import { ScreensPage } from "@/components/screens/screens-page";
import { screensMetadata } from "@/components/screens/metadata";

/**
 * /ko/screens — 한국 서비스 화면 모음. Under the (ko) root layout, so the document is <html lang="ko">. A 404 until
 * screens are published (lib/screens/public.server.ts) or a local folder is configured. Twin: /screens.
 */
export const metadata: Metadata = screensMetadata("ko");

export default function KoreanScreensGalleryPage() {
  return <ScreensPage locale="ko" />;
}
