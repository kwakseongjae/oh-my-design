/**
 * /changelog/[version] — single release page. Server component, body
 * rendered via react-markdown (already a project dep). JSON-LD =
 * Article with datePublished.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getChangelog, getChangelogEntry } from "@/lib/changelog";

const SITE_URL = "https://oh-my-design.kr";

export function generateStaticParams() {
  return getChangelog().map((e) => ({ version: e.version }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string }>;
}): Promise<Metadata> {
  const { version } = await params;
  const entry = getChangelogEntry(version);
  if (!entry) return {};
  const title = `oh-my-design v${entry.version}${entry.date ? ` (${entry.date})` : ""}`;
  const description = entry.headline
    ? entry.headline.slice(0, 200)
    : `Release notes for oh-my-design-cli v${entry.version}.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/changelog/${version}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/changelog/${version}`,
      type: "article",
      publishedTime: entry.date,
    },
  };
}

export default async function ChangelogVersionPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  const entry = getChangelogEntry(version);
  if (!entry) notFound();

  const all = getChangelog();
  const idx = all.findIndex((e) => e.version === version);
  const prev = idx >= 0 ? all[idx + 1] : null; // older
  const next = idx > 0 ? all[idx - 1] : null; // newer

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `oh-my-design v${entry.version}`,
    description: entry.headline || `Release notes for v${entry.version}.`,
    author: { "@type": "Organization", name: "oh-my-design" },
    publisher: { "@type": "Organization", name: "oh-my-design" },
    datePublished: entry.date ?? "2026-04-29",
    dateModified: entry.date ?? "2026-04-29",
    mainEntityOfPage: `${SITE_URL}/changelog/${entry.version}`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="oh-my-design" className="h-6 sm:h-7 block dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="oh-my-design" className="h-6 sm:h-7 hidden dark:block" />
          </Link>
          <nav className="flex items-center gap-4 text-xs sm:text-sm">
            <Link href="/changelog" className="text-muted-foreground hover:text-foreground">All releases</Link>
            <Link href="/docs" className="text-muted-foreground hover:text-foreground">Docs</Link>
            <a href="https://github.com/kwakseongjae/oh-my-design" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">GitHub</a>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-24">
        <Link
          href="/changelog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All releases
        </Link>

        <div className="flex flex-wrap items-baseline gap-3 mb-3">
          <code className="font-mono text-2xl font-bold text-primary">
            v{entry.version}
          </code>
          {entry.date && (
            <span className="text-[12px] font-mono uppercase tracking-wider text-muted-foreground">
              {entry.date}
            </span>
          )}
        </div>
        {entry.headline && (
          <h1
            className="text-2xl sm:text-3xl font-bold tracking-tight leading-snug"
            style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
          >
            {entry.headline}
          </h1>
        )}

        <div className="prose prose-sm sm:prose-base dark:prose-invert mt-8 max-w-none
          prose-headings:font-semibold prose-headings:tracking-tight
          prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3
          prose-p:leading-relaxed prose-p:text-muted-foreground
          prose-li:text-muted-foreground prose-li:leading-relaxed
          prose-strong:text-foreground
          prose-code:text-[0.9em] prose-code:font-mono prose-code:text-primary prose-code:before:content-none prose-code:after:content-none prose-code:bg-foreground/[0.05] prose-code:rounded prose-code:px-1 prose-code:py-0.5
          prose-pre:rounded-xl prose-pre:border prose-pre:border-border/60
          prose-a:text-foreground prose-a:underline prose-a:underline-offset-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.body}</ReactMarkdown>
        </div>

        <nav className="mt-14 flex items-center justify-between border-t border-border/40 pt-6 text-sm">
          {prev ? (
            <Link
              href={`/changelog/${prev.version}`}
              className="text-muted-foreground hover:text-foreground"
            >
              ← v{prev.version}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/changelog/${next.version}`}
              className="text-muted-foreground hover:text-foreground"
            >
              v{next.version} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </div>
  );
}
