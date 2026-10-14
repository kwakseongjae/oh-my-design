import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

// Library wording in the title, the head keyword ("design systems") first.
// The count is the generated literal, never typed by hand.
const TITLE = `Design Systems Library — ${REFERENCE_COUNT} Company DESIGN.md References`;

export const metadata: Metadata = {
  title: TITLE,
  description:
    `Browse all ${REFERENCE_COUNT} quality-graded company DESIGN.md references. Evidence status, source links, and exports for AI coding agents.`,
  // The Korean archive (/ko/design-systems) is this page's twin. Item and
  // evolution pages set their own alternates, so this applies to the index only.
  alternates: {
    canonical: "/design-systems",
    languages: { en: "/design-systems", ko: "/ko/design-systems", "x-default": "/design-systems" },
  },
  openGraph: {
    title: TITLE,
    description:
      `${REFERENCE_COUNT} real-company DESIGN.md references with computed quality tiers, live previews, and source links.`,
    url: "/design-systems",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function DesignSystemsLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Site chrome (concept A). The page bodies keep their own styling in this pass.
  return (
    <>
      <SiteHeaderA />
      <div id="main">{children}</div>
      <SiteFooterA />
    </>
  );
}
