import type { Metadata } from "next";

const siteUrl = "https://oh-my-design.kr";

export const metadata: Metadata = {
  title: "Design System Builder — oh-my-design",
  description:
    "Project a quality-graded company reference into DESIGN.md Core v2. Evidence remains reference material until you add project context, validate it, and explicitly adopt it.",
  alternates: {
    canonical: `${siteUrl}/builder`,
  },
  openGraph: {
    title: "Design System Builder — oh-my-design",
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
        alt: "oh-my-design — Design System Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design System Builder — oh-my-design",
    description:
      "Preview and export an evidence-backed DESIGN.md Core v2 reference projection, then validate it before project adoption.",
    images: ["/og-image.png"],
  },
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
