import type { Metadata } from "next";
import { LandingA } from "@/components/brand-a/landing";
import { landingMetadata } from "@/components/brand-a/metadata";

/** Japanese landing, under the (ja) root layout (<html lang="ja">). */
export const metadata: Metadata = landingMetadata("ja");
export const revalidate = 3600; // ISR: the header star count refreshes at most hourly

export default function JapaneseHomePage() {
  return <LandingA locale="ja" />;
}
