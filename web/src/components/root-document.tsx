import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsInit } from "@/components/analytics-init";
import { AnalyticsConsent } from "@/components/analytics-consent";
import { GA_ID } from "@/lib/gtag";
import { EEA_REGION_CODES } from "@/lib/eea";
import { SITE_ORIGIN } from "@/lib/site";
import { REFERENCE_COUNT, SKILL_COUNT, SUBAGENT_COUNT } from "@/lib/catalog-count";
import { REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import pkg from "../../../package.json" with { type: "json" };

/**
 * The <html> document both root layouts render. The site has two root layouts
 * — app/(en) and app/(ko) — only because a root layout is the one place that
 * can set <html lang>. Theme, analytics, consent and the site JSON-LD live
 * here so the two cannot drift.
 */

// Single source of truth for displayed CLI version. Pulled from the root
// package.json so schema.org / featureList never drift from the published
// npm artifact. Bump pkg.version → schema follows automatically.
const CLI_VERSION: string = pkg.version;

const siteUrl = SITE_ORIGIN;

// Every count below is a generated constant. The hand-typed skill and agent
// counts this replaced had fallen five and one behind what the package ships.
// Server-only module, so the quality table never reaches a client bundle.
const TIERS =
  `${REFERENCE_COUNT} quality-graded references: ${REFERENCE_QUALITY_COUNTS.verified_v2} verified_v2, `
  + `${REFERENCE_QUALITY_COUNTS.partial} partial, and ${REFERENCE_QUALITY_COUNTS.legacy_snapshot} legacy snapshots`;

const SITE_JSON_LD = {
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
      description: `DESIGN.md as ground truth for AI coding agents. ${TIERS}.`,
      // No SearchAction: /design-systems has no ?q= search to point it at, and
      // Google retired the sitelinks search box it fed in November 2024.
    },
    {
      "@type": "SoftwareApplication",
      name: "oh-my-design-cli",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "macOS, Linux, Windows",
      url: siteUrl,
      downloadUrl: "https://www.npmjs.com/package/oh-my-design-cli",
      softwareVersion: CLI_VERSION,
      license: "https://opensource.org/licenses/MIT",
      description:
        `Skill-driven design workflows for Claude Code, Codex, OpenCode, and Cursor. One npx command installs compatible skills, specialist roles, and an offline catalog of ${REFERENCE_COUNT} quality-graded DESIGN.md references.`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        `${SKILL_COUNT} product skills and ${SUBAGENT_COUNT} specialist agent definitions`,
        "Native project skills for Claude Code, Codex, OpenCode, and Cursor 2.4+",
        TIERS,
        "verified_v2 references recommended for public demos",
        "Channel-aware doctor diagnostics and deterministic installation checks",
        "Zero AI calls during install",
        "DESIGN.md-driven implementation, review, preference capture, and final QA workflows",
      ],
    },
  ],
};

export function RootDocument({
  lang,
  className,
  children,
}: Readonly<{
  lang: "en" | "ko";
  className: string;
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${className} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_JSON_LD) }}
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
