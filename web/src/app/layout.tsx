import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { GA_ID } from "@/lib/gtag";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://oh-my-design.kr";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: "oh-my-design — DESIGN.md for AI coding agents",
  description:
    "One DESIGN.md spec. 67 real brands extracted. Make Claude Code, Codex, OpenCode, and Cursor ship UI that actually looks like Stripe, Toss, or Linear — not slop. 6 skills · 11 sub-agents · zero AI calls during install. MIT open source.",
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
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "5mZuqjPvdwYTXpJrByQX2i7xM73aQj3Vn1UcpyJhCr4",
    other: {
      "naver-site-verification": "ecee2aa716d5ed7e257dcce5f72222e03f3512d4",
    },
  },
  openGraph: {
    type: "website",
    title: "oh-my-design — DESIGN.md for AI coding agents",
    description:
      "67 real brands extracted into one DESIGN.md spec your AI coding agent reads as ground truth before it codes. 6 skills, 11 sub-agents, zero AI calls during install.",
    url: siteUrl,
    siteName: "oh-my-design",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "oh-my-design — Design System Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "oh-my-design — DESIGN.md for AI coding agents",
    description:
      "67 real brands extracted. 6 skills · 11 sub-agents · zero AI calls during install. Talk to Claude Code, Codex, OpenCode, or Cursor in your brand.",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "oh-my-design",
                  url: siteUrl,
                  description:
                    "Generate DESIGN.md from 67 real company design systems, ten with a full brand philosophy layer. Interactive A/B wizard, zero AI calls.",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteUrl}/builder`,
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "oh-my-design",
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "Web",
                  url: siteUrl,
                  description:
                    "Design system generator that creates DESIGN.md from 67 real company design systems including Stripe, Vercel, Linear, Apple, and more. Ten references ship with a full brand philosophy layer — voice, narrative, principles, personas, states, motion — sourced against public references.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  featureList: [
                    "Generate DESIGN.md from 67 real company design systems",
                    "Brand philosophy layer on 10 curated references (voice, narrative, principles, personas, states, motion)",
                    "Interactive A/B wizard for design customization",
                    "Design personality quiz with 16 types",
                    "Zero AI calls — works entirely in-browser",
                  ],
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is DESIGN.md?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "DESIGN.md is a structured markdown file that defines your project's design system — colors, typography, spacing, radius, and UI conventions. AI coding agents like Cursor, Claude Code, and Google Stitch use DESIGN.md to generate consistent, on-brand UI code automatically.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How does oh-my-design generate a design system?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "oh-my-design lets you pick from 67 real company design systems (Stripe, Vercel, Linear, Apple, etc.), customize them through an interactive A/B wizard, and export a DESIGN.md file. Ten curated references ship with a full brand philosophy layer — voice, narrative, principles, personas, states, motion — so AI coding agents like Claude Code match your brand. All without any AI API calls.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is the Design Personality Quiz?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The Design Personality Quiz is a 60-second, 12-question quiz that determines your design type across 4 axes: Temperature (Cool/Warm), Density (Dense/Open), Elevation (Flat/Layered), and Shape (Sharp/Rounded). It matches you to one of 16 design personalities and recommends matching design systems.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
