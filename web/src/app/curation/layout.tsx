import type { Metadata } from "next";

const siteUrl = "https://oh-my-design.kr";

export const metadata: Metadata = {
  title: "Design Personality Quiz — oh-my-design",
  description:
    "Find your design personality type in 60 seconds. 12 questions, 16 design types across 4 axes. Discover if you're The Engineer, The Romantic, The Architect, or one of 13 other types — then get matched to real company design systems.",
  alternates: {
    canonical: `${siteUrl}/curation`,
  },
  openGraph: {
    title: "Design Personality Quiz — oh-my-design",
    description:
      "Find your design personality type in 60 seconds. 16 types, matched to real company design systems.",
    type: "website",
    url: `${siteUrl}/curation`,
    siteName: "oh-my-design",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "oh-my-design — Design Personality Quiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Personality Quiz — oh-my-design",
    description:
      "Find your design personality type in 60 seconds. 16 types, matched to real design systems.",
    images: ["/og-image.png"],
  },
};

export default function CurationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
