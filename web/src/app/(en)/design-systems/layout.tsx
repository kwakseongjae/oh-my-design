import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { REFERENCE_COUNT } from "@/lib/catalog-count";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import { ARCHIVE_COPY } from "@/components/brand-a/copy/r11-archive";

// Archive wording (round 11, #19), "design systems" kept in the title for the
// queries that already land here. The count is the generated literal, never typed by hand.
const TITLE = ARCHIVE_COPY.en.meta.title(REFERENCE_COUNT);
const DESCRIPTION = ARCHIVE_COPY.en.meta.description(REFERENCE_COUNT);

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // The Korean archive (/ko/design-systems) is this page's twin. Item and
  // evolution pages set their own alternates, so this applies to the index only.
  alternates: {
    canonical: "/design-systems",
    languages: { en: "/design-systems", ko: "/ko/design-systems", "x-default": "/design-systems" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
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
      {/* twins: the item page's hreflang pair (en <-> ko) drives the language switch */}
      <SiteHeaderA twins />
      <div id="main">{children}</div>
      <SiteFooterA />
    </>
  );
}
