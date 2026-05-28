/**
 * /changelog — index of every release. Server component, parses
 * ../CHANGELOG.md at build time. JSON-LD = single Article describing
 * the changelog itself.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getChangelog } from "@/lib/changelog";

const SITE_URL = "https://oh-my-design.kr";

export const metadata: Metadata = {
  title: "Changelog — oh-my-design",
  description:
    "Every user-facing release of oh-my-design-cli and the bundled skill/agent files. Dates, headlines, and per-version detail pages.",
  keywords: [
    "oh-my-design changelog",
    "OmD release notes",
    "oh-my-design-cli updates",
    "DESIGN.md changelog",
  ],
  alternates: { canonical: `${SITE_URL}/changelog` },
  openGraph: {
    title: "oh-my-design — Changelog",
    description: "User-facing release history.",
    url: `${SITE_URL}/changelog`,
    type: "article",
  },
};

export default function ChangelogIndexPage() {
  const entries = getChangelog();
  const latest = entries[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "oh-my-design — Changelog",
    description:
      "Every user-facing release of oh-my-design-cli and the bundled skill/agent files.",
    author: { "@type": "Organization", name: "oh-my-design" },
    publisher: { "@type": "Organization", name: "oh-my-design" },
    datePublished: latest?.date ?? "2026-04-29",
    dateModified: latest?.date ?? "2026-05-28",
    mainEntityOfPage: `${SITE_URL}/changelog`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="oh-my-design" className="h-6 sm:h-7 block dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="oh-my-design" className="h-6 sm:h-7 hidden dark:block" />
          </Link>
          <nav className="flex items-center gap-4 text-xs sm:text-sm">
            <Link href="/docs" className="text-muted-foreground hover:text-foreground">Docs</Link>
            <Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link>
            <a href="https://github.com/kwakseongjae/oh-my-design" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
        <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
          Changelog · {entries.length} releases
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          Release history
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl leading-relaxed">
          User-facing changes to <code className="font-mono text-[13px]">oh-my-design-cli</code>{" "}
          and the bundled skill / agent files. Upgrade with{" "}
          <code className="font-mono text-[13px]">npx oh-my-design-cli@latest install-skills</code>.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 pb-24">
        <ol className="space-y-3">
          {entries.map((e) => (
            <li key={e.version}>
              <Link
                href={`/changelog/${e.version}`}
                className="block rounded-xl border border-border/60 bg-card/30 p-5 transition-colors hover:bg-card/60 hover:border-foreground/20"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <div className="flex items-baseline gap-3">
                    <code className="font-mono text-[15px] font-bold text-primary">
                      {e.version}
                    </code>
                    {e.date && (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                        {e.date}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">→</span>
                </div>
                {e.headline && (
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {e.headline}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-xl border border-border/60 bg-card/20 p-5 text-sm text-muted-foreground leading-relaxed">
          Source: {" "}
          <a
            href="https://github.com/kwakseongjae/oh-my-design/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-4 text-foreground"
          >
            CHANGELOG.md <ExternalLink className="h-3 w-3" />
          </a>
          . Older releases (0.1.x) are kept for archaeology — public flow is the same as 1.x.
        </div>
      </section>
    </div>
  );
}
