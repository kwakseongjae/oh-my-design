import type { Metadata } from "next";
import { LandingA } from "@/components/brand-a/landing";
import { landingMetadata } from "@/components/brand-a/metadata";

/** Korean landing, under the (ko) root layout so the document says <html lang="ko">. */
export const metadata: Metadata = landingMetadata("ko");
export const revalidate = 3600; // ISR: the header star count refreshes at most hourly

export default function KoreanHomePage() {
  return <LandingA locale="ko" />;
}
