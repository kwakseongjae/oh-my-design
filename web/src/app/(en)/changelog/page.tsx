/**
 * /changelog — every release on one page. Server component, parses
 * ../CHANGELOG.md at build time. JSON-LD = single Article describing
 * the changelog itself.
 *
 * The per-version pages (/changelog/<version>) were merged here on
 * 2026-10-01 (R4). Each entry carries id="v<version>" and the old URLs
 * 308 to /changelog#v<version> (next.config.ts).
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getChangelog } from "@/lib/changelog";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

const SITE_URL = "https://oh-my-design.kr";

export const metadata: Metadata = {
  title: "Changelog — oh-my-design",
  description:
    "Every user-facing release of oh-my-design-cli and the bundled skill/agent files, with dates and full release notes on one page.",
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
    images: [DEFAULT_OG_IMAGE],
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
            <Link href="/docs/en" className="text-muted-foreground hover:text-foreground">Docs</Link>
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
        <nav aria-label="Releases" className="mb-12 flex flex-wrap gap-2">
          {entries.map((e) => (
            <a
              key={e.version}
              href={`#v${e.version}`}
              className="rounded-full border border-border/60 px-2.5 py-1 font-mono text-[12px] text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
            >
              {e.version}
            </a>
          ))}
        </nav>

        <ol className="space-y-14">
          {entries.map((e) => (
            <li key={e.version} id={`v${e.version}`} className="scroll-mt-20">
              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="font-mono text-xl font-bold text-primary">
                  <a href={`#v${e.version}`} className="hover:underline hover:underline-offset-4">
                    v{e.version}
                  </a>
                </h2>
                {e.date && (
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                    {e.date}
                  </span>
                )}
              </div>
              {e.headline && (
                <p className="mt-2 text-lg font-semibold tracking-tight leading-snug">{e.headline}</p>
              )}
              <div className="prose prose-sm dark:prose-invert mt-5 max-w-none
                prose-headings:font-semibold prose-headings:tracking-tight
                prose-h3:text-base prose-h3:mt-6 prose-h3:mb-3
                prose-p:leading-relaxed prose-p:text-muted-foreground
                prose-li:text-muted-foreground prose-li:leading-relaxed
                prose-strong:text-foreground
                prose-code:text-[0.9em] prose-code:font-mono prose-code:text-primary prose-code:before:content-none prose-code:after:content-none prose-code:bg-foreground/[0.05] prose-code:rounded prose-code:px-1 prose-code:py-0.5
                prose-pre:rounded-xl prose-pre:border prose-pre:border-border/60
                prose-a:text-foreground prose-a:underline prose-a:underline-offset-4">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{e.body}</ReactMarkdown>
              </div>
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
