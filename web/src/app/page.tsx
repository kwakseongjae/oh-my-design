import type { Metadata } from "next";
import { LandingV2 } from "@/components/landing-v2/landing-page";

/**
 * Home. The landing itself is a client component, which cannot export
 * metadata, so this server wrapper carries the one field the root layout
 * cannot: the canonical (a canonical in the layout would be inherited by
 * every page). `openGraph` is deliberately not set here — setting it would
 * replace the root layout's object, share image included.
 */
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <LandingV2 />;
}
