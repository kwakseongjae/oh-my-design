import type { Metadata } from "next";
import { LandingA } from "@/components/brand-a/landing";
import { landingMetadata } from "@/components/brand-a/metadata";

/**
 * Home (English, x-default). Its twins are /ko, /ja and /zh-tw; all four name
 * each other as hreflang alternates (src/lib/i18n/site-locales.ts). Every
 * number on the page is resolved from generated data at build time.
 */
export const metadata: Metadata = landingMetadata("en");
export const revalidate = 3600; // ISR: the header star count refreshes at most hourly

export default function HomePage() {
  return <LandingA locale="en" />;
}
