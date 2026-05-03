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
  // Canonical is intentionally NOT set at the root layout — Next.js App Router
  // shallow-merges metadata, so a string canonical here would be inherited
  // verbatim by every child page (declaring every URL as the homepage). Each
  // child layout/page sets its own canonical (or none — Google falls back to
  // the request URL).
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
                    "DESIGN.md as ground truth for AI coding agents. 67 real brand references, 6 skills, 11 sub-agents — installed in one npx command.",
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
                  softwareVersion: "1.0.0",
                  license: "https://opensource.org/licenses/MIT",
                  description:
                    "Skill-driven design harness for AI coding agents (Claude Code, Codex, OpenCode, Cursor). One npx command bundles 6 skills + 11 sub-agents + 67 reference DESIGN.md files. Install once, then talk to your agent in natural language.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  featureList: [
                    "6 skills: omd-apply, omd-init, omd-harness, omd-remember, omd-learn, omd-sync",
                    "11 sub-agents: master orchestrator + 10 specialists with advisor/generator pairs",
                    "10-phase design pipeline (Plan → System → Make → Validate)",
                    "67 reference DESIGN.md files (Stripe, Toss, Linear, Vercel, Anthropic, Notion, etc.)",
                    "Zero AI calls during install — pure markdown copy",
                    "Supports Claude Code, Codex, OpenCode, Cursor",
                    "Brand-philosophy layer on 20 references — voice, narrative, principles, personas, states, motion",
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
                      text: 'Open Claude Code / Codex / OpenCode / Cursor and say: "Set up the design system for [your project description]." The agent picks one of 67 references, proposes a hybrid DESIGN.md, asks for confirmation, writes the file plus shims (CLAUDE.md / AGENTS.md / .cursor/rules).',
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
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is DESIGN.md?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "DESIGN.md is a structured markdown file that defines your project's brand spec — tokens (colors, typography, spacing, radius), voice, narrative, principles, personas, states, and motion. AI coding agents (Claude Code, Codex, OpenCode, Cursor) read it as authoritative context before generating any UI, so the output looks like your brand instead of generic 'modern minimalist' slop.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How does oh-my-design work?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Run `npx oh-my-design-cli install-skills` once in your project. It installs 6 skills (apply, init, harness, remember, learn, sync), 11 sub-agents (master orchestrator + 10 specialists), 4 hooks, and 67 reference DESIGN.md files. After restarting your AI coding agent, you just talk in natural language — skills route to the right sub-agents automatically.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Does it call any AI provider during install?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No. The install is a pure markdown copy — zero API calls, zero data leaves your machine. Your AI coding agent (Claude Code, Codex, OpenCode, or Cursor) is the inference layer; install just teaches it where to look.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Which AI coding agents are supported?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Claude Code, Codex, OpenCode, and Cursor (via .cursor/rules). The skill markdown files are agent-agnostic; hooks ship for Claude Code specifically.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What is the design harness?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "The omd-harness skill runs a 10-phase design pipeline (Discovery → Research → IA → Wireframes → Design system → Components → Asset sourcing → Microcopy → Validation → Handoff). It dispatches sub-agents in parallel where independent, asks 3 mandatory user checkpoints, and emits a v0/Cursor-ready package. Trigger it by saying things like 'design the entire onboarding from scratch' or '/omd-harness <task>'.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is it free?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes — MIT licensed, open source, no signup, no API key, no paid tier. The references in the bundle belong to their respective companies and are reproduced for educational reference only.",
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
