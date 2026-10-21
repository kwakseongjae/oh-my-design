import type { Metadata } from "next";
import { HangulPage } from "@/components/hangul/hangul-page";
import { hangulMetadata } from "@/components/hangul/metadata";

/**
 * /hangul — the /hangul skill's launch page in English (x-default). The Korean page, /ko/hangul,
 * is the default for the launch (owner, 2026-10-21); both name each other as hreflang alternates.
 */
export const metadata: Metadata = hangulMetadata("en");

export default function HangulLaunchPage() {
  return <HangulPage locale="en" />;
}
