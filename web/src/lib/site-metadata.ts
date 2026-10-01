import type { Metadata, Viewport } from "next";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { DEFAULT_OG_IMAGE, SITE_ORIGIN } from "@/lib/site";

/**
 * Metadata shared by both root layouts — app/(en)/layout.tsx and
 * app/(ko)/layout.tsx. They exist separately only so each can render its own
 * <html lang>; everything else must stay identical, so it lives here.
 */

// Plain language on purpose: this is what a search result shows to someone who
// has never heard of the project. Tier names (verified_v2 …) and role counts
// belong on the pages that explain them, not in the snippet.
export const SITE_DESCRIPTION =
  `Real design systems from ${REFERENCE_COUNT} companies, written as DESIGN.md files your AI coding agent can follow. Pick a brand, adjust it, and download. Free and open source.`;

export const SITE_TITLE = "oh-my-design — DESIGN.md for AI coding agents";

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const siteMetadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "design system",
    "DESIGN.md",
    "design system generator",
    "brand philosophy",
    "Claude Code",
    "tailwind",
    "design tokens",
    "AI coding agent",
    "Google Stitch",
    "design personality",
    "디자인 시스템",
    "디자인 시스템 생성기",
    "브랜드 철학",
  ],
  authors: [{ name: "oh-my-design" }],
  metadataBase: new URL(SITE_ORIGIN),
  // Canonical is intentionally NOT set at the root layout — Next.js App Router
  // shallow-merges metadata, so a string canonical here would be inherited
  // verbatim by every child page (declaring every URL as the homepage). Each
  // child layout/page sets its own canonical (or none — Google falls back to
  // the request URL).
  verification: {
    google: "5mZuqjPvdwYTXpJrByQX2i7xM73aQj3Vn1UcpyJhCr4",
    other: {
      // Three tokens, one per Search Advisor property: the legacy
      // www.oh-my-design.kr, the apex oh-my-design.kr (the canonical 200 host
      // crawlers see; www 308-redirects to it), and blog.oh-my-design.kr —
      // Naver registers each subdomain as its own site. One deployment serves
      // every host, and Next renders one <meta> per array entry, so all three
      // properties verify off the same page head.
      "naver-site-verification": [
        "ecee2aa716d5ed7e257dcce5f72222e03f3512d4",
        "a2e4997db92c96180459be3eca9d4daeb4d14152",
        "5ef2baec69d5697ae04ffcc6a9750578316a4197",
      ],
    },
  },
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // og:url intentionally omitted — same inheritance reason as canonical.
    siteName: "oh-my-design",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};
