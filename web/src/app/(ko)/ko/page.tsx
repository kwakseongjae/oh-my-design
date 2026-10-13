import type { Metadata } from "next";
import { LandingA } from "@/components/brand-a/landing";
import { landingMetadata } from "@/components/brand-a/metadata";

/** Korean landing, under the (ko) root layout so the document says <html lang="ko">. */
export const metadata: Metadata = landingMetadata("ko");

export default function KoreanHomePage() {
  return <LandingA locale="ko" />;
}
