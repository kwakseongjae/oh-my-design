import type { Metadata } from "next";

const siteUrl = "https://oh-my-design.kr";

export const metadata: Metadata = {
  title: "Customize a DESIGN.md — oh-my-design",
  description:
    "Project a quality-graded company reference into DESIGN.md Core v2. Evidence remains reference material until you add project context, validate it, and explicitly adopt it.",
  alternates: {
    canonical: `${siteUrl}/builder`,
  },
  openGraph: {
    title: "Customize a DESIGN.md — oh-my-design",
    description:
      "Project a quality-graded company reference into DESIGN.md Core v2. Confirmed evidence stays visible; unresolved fields stay absent.",
    type: "website",
    url: `${siteUrl}/builder`,
    siteName: "oh-my-design",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "oh-my-design — Customize a DESIGN.md",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customize a DESIGN.md — oh-my-design",
    description:
      "Preview and export an evidence-backed DESIGN.md Core v2 reference projection, then validate it before project adoption.",
    images: ["/og-image.png"],
  },
};

/**
 * The builder page is a client component, so its server HTML carries no
 * heading of its own. The layout supplies the page's one <h1> and a line of
 * description on the server. Both are screen-reader-only so the builder looks
 * exactly as it did; the user-facing name of this tool is "Customize"
 * (IA decision D3, 2026-10-01), while the URL stays /builder.
 */
export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="sr-only">Customize a DESIGN.md</h1>
      <p className="sr-only">
        Start from a company reference, change its colors, typography, radius and components with a
        live preview, then copy the DESIGN.md and the first prompt for your coding agent.
      </p>
      {children}
    </>
  );
}
