import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsInit } from "@/components/analytics-init";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { GA_ID } from "@/lib/gtag";
import { EEA_REGION_CODES } from "@/lib/eea";
import pkg from "../../../package.json" with { type: "json" };
import { FAQ_EN } from "@/data/faq";
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
    "One DESIGN.md spec. 356 real brands extracted. Make Claude Code, Codex, OpenCode, and Cursor ship UI that actually looks like Stripe, Toss, or Linear — not slop. 18 skills · 16 sub-agents · zero AI calls during install. MIT open source.",
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
      "356 real brands extracted into one DESIGN.md spec your AI coding agent reads as ground truth before it codes. 18 skills, 16 sub-agents, zero AI calls during install.",
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
      "356 real brands extracted. 18 skills · 16 sub-agents · zero AI calls during install. Talk to Claude Code, Codex, OpenCode, or Cursor in your brand.",
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
                    "DESIGN.md as ground truth for AI coding agents. 356 real brand references, 18 skills, 16 sub-agents — installed in one npx command.",
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
                    "Skill-driven design harness for AI coding agents (Claude Code, Codex, OpenCode, Cursor). One npx command bundles 18 skills + 16 sub-agents + 356 reference DESIGN.md files. Install once, then talk to your agent in natural language.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  featureList: [
                    "18 skills: core flow (apply / init / harness / remember / learn / sync / taste) + capture/assets + v0.2 agent layer (orchestrator / kr-writer / locale-adapter / designer-review / final-qa / codex-image) + omd:feel (quantified interface-feel — apply + audit) + standalone claude-design",
                    "16 sub-agents: master orchestrator + 15 specialists with advisor/generator pairs",
                    "10-phase design pipeline (Plan → System → Make → Validate)",
                    "356 reference DESIGN.md files (Stripe, Toss, Linear, Vercel, Anthropic, Notion, etc.)",
                    "Zero AI calls during install — pure markdown copy",
                    "Supports Claude Code, Codex, OpenCode, Cursor",
                    "Brand-philosophy layer on every reference — voice, narrative, principles, personas, states, motion",
                    "v1.6.0+: natural-language auto-trigger for landing-page / prototype requests (no slash command needed)",
                    "v1.6.0+: CTX-PRIME — sub-50ms deterministic repo scan (stack, brand color, voice, surface inventory) before any question",
                    "v1.6.0+: Interview-lite — single batched picker for audience / scope / wow-moment / CTA / visual-grounding, then master skips slot-gate",
                  ],
                },
                {
                  "@type": "HowTo",
                  name: "Install oh-my-design and ship brand-aware UI",
                  description:
                    "Install oh-my-design-cli once and your AI coding agent ships UI in your brand voice — no further commands needed.",
                  totalTime: "PT2M",
                  tool: [
                    { "@type": "HowToTool", name: "Node.js (>=18)" },
                    {
                      "@type": "HowToTool",
                      name: "Claude Code, Codex, OpenCode, or Cursor",
                    },
                  ],
                  step: [
                    {
                      "@type": "HowToStep",
                      position: 1,
                      name: "Install in your project",
                      text: "Run `npx oh-my-design-cli install-skills` at your project root. Restart your AI coding agent (Cmd+Q in Claude Code) so the new skills + sub-agents load.",
                    },
                    {
                      "@type": "HowToStep",
                      position: 2,
                      name: "Bootstrap a DESIGN.md",
                      text: 'Open Claude Code / Codex / OpenCode / Cursor and say: "Set up the design system for [your project description]." The agent picks one of 356 references, proposes a hybrid DESIGN.md, asks for confirmation, writes the file plus shims (CLAUDE.md / AGENTS.md / .cursor/rules).',
                    },
                    {
                      "@type": "HowToStep",
                      position: 3,
                      name: "Talk in natural language",
                      text: 'Just describe what you want. "Make the empty-state for the search results page." "Improve the landing page." "Render a 3D water glass for the hero." The agent reads DESIGN.md as ground truth and ships brand-aware UI.',
                    },
                  ],
                },
                {
                  "@type": "FAQPage",
                  // Q&A content is single-sourced from src/data/faq.ts (the
                  // jsonLd-flagged subset) — the /docs FAQ section renders the
                  // full list from the same module (issue #28).
                  mainEntity: FAQ_EN.filter((f) => f.jsonLd).map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: f.a,
                    },
                  })),
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
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            {/* Consent Mode v2 defaults run BEFORE config (same inline script =
                guaranteed order): EEA/UK/CH denied until the banner grants;
                everywhere else granted. AnalyticsConsent flips EEA visitors to
                granted on Accept via gtag('consent','update'). */}
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}` +
                `gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',region:${JSON.stringify(EEA_REGION_CODES)},wait_for_update:500});` +
                `gtag('consent','default',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'});` +
                // url_passthrough carries utm_*/gclid across navigations cookielessly
                // when consent is denied — recovers attribution for the EU slice.
                `gtag('set','url_passthrough',true);` +
                `gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
