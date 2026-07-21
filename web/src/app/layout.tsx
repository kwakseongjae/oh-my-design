import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsInit } from "@/components/analytics-init";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { GA_ID } from "@/lib/gtag";
import { EEA_REGION_CODES } from "@/lib/eea";
import pkg from "../../../package.json" with { type: "json" };
import "./globals.css";

// Single source of truth for displayed CLI version. Pulled from the root
// package.json so schema.org / featureList never drift from the published
// npm artifact. Bump pkg.version → schema follows automatically.
const CLI_VERSION: string = pkg.version;

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
    "One DESIGN.md spec. 440 quality-graded brand references: 141 verified_v2, 159 partial, and 140 legacy snapshots. The bundle ships 20 skills and 18 specialist definitions; Cursor receives a project rule and catalog. MIT open source.",
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
  // Canonical is intentionally NOT set at the root layout — Next.js App Router
  // shallow-merges metadata, so a string canonical here would be inherited
  // verbatim by every child page (declaring every URL as the homepage). Each
  // child layout/page sets its own canonical (or none — Google falls back to
  // the request URL).
  verification: {
    google: "5mZuqjPvdwYTXpJrByQX2i7xM73aQj3Vn1UcpyJhCr4",
    other: {
      // Two tokens: the legacy www.oh-my-design.kr property and the apex
      // oh-my-design.kr property (apex is the canonical 200 host crawlers see;
      // www 308-redirects to it). Next renders one <meta> per array entry, so
      // both Search Advisor properties verify off the same deployment.
      "naver-site-verification": [
        "ecee2aa716d5ed7e257dcce5f72222e03f3512d4",
        "a2e4997db92c96180459be3eca9d4daeb4d14152",
      ],
    },
  },
  openGraph: {
    type: "website",
    title: "oh-my-design — DESIGN.md for AI coding agents",
    description:
      "440 quality-graded references: 141 verified_v2, 159 partial, 140 legacy snapshots. Channel-compatible skills and roles for Claude Code, Codex, and OpenCode; a project rule and catalog for Cursor.",
    // og:url intentionally omitted — same inheritance reason as canonical.
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
      "440 quality-graded references: 141 verified_v2, 159 partial, 140 legacy. 20 shipped skills · 18 specialist definitions · channel-aware install.",
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
      lang="en"
      data-scroll-behavior="smooth"
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
                  "@type": "Organization",
                  name: "oh-my-design",
                  url: siteUrl,
                  logo: `${siteUrl}/logo.png`,
                  sameAs: [
                    "https://github.com/kwakseongjae/oh-my-design",
                    "https://www.npmjs.com/package/oh-my-design-cli",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "oh-my-design",
                  url: siteUrl,
                  description:
                    "DESIGN.md as ground truth for AI coding agents. 440 quality-graded references: 141 verified_v2, 159 partial, and 140 legacy snapshots.",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteUrl}/design-systems?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "oh-my-design-cli",
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "macOS, Linux, Windows",
                  url: siteUrl,
                  downloadUrl:
                    "https://www.npmjs.com/package/oh-my-design-cli",
                  softwareVersion: CLI_VERSION,
                  license: "https://opensource.org/licenses/MIT",
                  description:
                    "Skill-driven design workflows for Claude Code, Codex, OpenCode, and Cursor. One npx command installs compatible skills, specialist roles, and an offline catalog of 440 quality-graded DESIGN.md references.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  featureList: [
                    "20 product skills and 18 specialist agent definitions",
                    "Native project installs for Claude Code, Codex, and OpenCode; Cursor receives a project rule shim",
                    "440 quality-graded references: 141 verified_v2, 159 partial, and 140 legacy snapshots",
                    "verified_v2 references recommended for public demos",
                    "Channel-aware doctor diagnostics and deterministic installation checks",
                    "Zero AI calls during install",
                    "DESIGN.md-driven implementation, review, preference capture, and final QA workflows",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
        <AnalyticsInit />
        <AnalyticsConsent />
        {GA_ID && (
          <>
            {/* Consent Mode v2 defaults run BEFORE config (same inline script =
                guaranteed order): EEA/UK/CH denied until the banner grants;
                everywhere else granted. AnalyticsConsent flips EEA visitors to
                granted on Accept via gtag('consent','update'). */}
            {/* beforeInteractive defines the queue before client mount effects.
                Without it, first-load events such as bld_open can fire before
                window.gtag exists and are silently lost. */}
            <Script id="gtag-init" strategy="beforeInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
                `gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:${JSON.stringify(EEA_REGION_CODES)},wait_for_update:500});` +
                `gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});` +
                // url_passthrough carries utm_*/gclid across navigations cookielessly
                // when consent is denied — recovers attribution for the EU slice.
                `gtag('set','url_passthrough',true);` +
                `gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          </>
        )}
      </body>
    </html>
  );
}
