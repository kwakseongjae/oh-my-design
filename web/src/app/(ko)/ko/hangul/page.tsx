import type { Metadata } from "next";
import { HangulPage } from "@/components/hangul/hangul-page";
import { hangulMetadata } from "@/components/hangul/metadata";

/**
 * /ko/hangul — the /hangul skill's launch page in Korean, the default (owner, 2026-10-21). Under the
 * (ko) root layout, so the document is <html lang="ko"> and Hangul is set in the site's Wanted Sans.
 * Its English twin is /hangul (x-default).
 */
export const metadata: Metadata = hangulMetadata("ko");

export default function KoreanHangulPage() {
  return <HangulPage locale="ko" />;
}
