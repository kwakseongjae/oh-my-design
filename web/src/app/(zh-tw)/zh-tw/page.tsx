import type { Metadata } from "next";
import { LandingA } from "@/components/brand-a/landing";
import { landingMetadata } from "@/components/brand-a/metadata";

/** Traditional Chinese (Taiwan) landing, under the (zh-tw) root layout (<html lang="zh-Hant-TW">). */
export const metadata: Metadata = landingMetadata("zh-tw");

export default function TraditionalChineseHomePage() {
  return <LandingA locale="zh-tw" />;
}
