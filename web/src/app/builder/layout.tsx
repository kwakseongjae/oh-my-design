import type { Metadata } from "next";

const siteUrl = "https://oh-my-design.kr";

export const metadata: Metadata = {
  title: "Design System Builder — oh-my-design",
  description:
    "Build your DESIGN.md from 67 real company design systems. Choose from Stripe, Vercel, Linear, Apple, and more. Customize colors, typography, radius, and spacing with an interactive A/B wizard — or pick one of 10 references with a full brand philosophy (voice, principles, personas) for AI coding agents.",
  alternates: {
    canonical: `${siteUrl}/builder`,
  },
  openGraph: {
    title: "Design System Builder — oh-my-design",
    description:
      "Build your DESIGN.md from 67 real company design systems, ten with a full brand philosophy. Interactive A/B wizard.",
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
      "Build your DESIGN.md from 67 real company design systems. 10 with a full brand philosophy. A/B wizard.",
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
