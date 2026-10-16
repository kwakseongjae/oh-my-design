import type { Metadata } from "next";
import { LandingA } from "@/components/brand-a/landing";
import { landingMetadata } from "@/components/brand-a/metadata";

/** Traditional Chinese (Taiwan) landing, under the (zh-tw) root layout (<html lang="zh-Hant-TW">). */
export const metadata: Metadata = landingMetadata("zh-tw");
export const revalidate = 3600; // ISR: the header star count refreshes at most hourly

export default function TraditionalChineseHomePage() {
  return <LandingA locale="zh-tw" />;
}
