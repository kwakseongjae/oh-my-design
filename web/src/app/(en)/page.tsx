import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/landing-page";

/**
 * Home (English). The Korean twin is /ko; each names the other as an
 * hreflang alternate. `openGraph` is deliberately not set here — setting it
 * would replace the root layout's object, share image included.
 */
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { en: "/", ko: "/ko", "x-default": "/" },
  },
};

// The "most selected" list reads the live select counter; re-render hourly.
export const revalidate = 3600;

export default function HomePage() {
  return <LandingPage locale="en" />;
}
