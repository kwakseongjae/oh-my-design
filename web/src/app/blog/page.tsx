/**
 * /blog — index. Server component reading src/lib/blog/posts.ts, the same
 * source the detail page and the sitemap read.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog/posts";
import { blogIndexUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — oh-my-design",
  description:
    "Notes on giving coding agents a design system they can be held to: derivation, presets, anti-slop gates, and what the measurements actually show.",
  alternates: { canonical: blogIndexUrl() },
  openGraph: {
    title: "oh-my-design — Blog",
    description: "Notes on design systems for coding agents.",
    url: blogIndexUrl(),
    type: "website",
  },
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="oh-my-design" className="block h-6 dark:hidden sm:h-7" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="oh-my-design" className="hidden h-6 dark:block sm:h-7" />
          </Link>
          <nav className="flex items-center gap-4 text-xs sm:text-sm">
            <Link href="/cli" className="text-muted-foreground hover:text-foreground">
              CLI
            </Link>
            <Link href="/docs/en" className="text-muted-foreground hover:text-foreground">
              Docs
            </Link>
            <a
              href="https://github.com/kwakseongjae/oh-my-design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-4 pt-12 pb-8 sm:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Home
        </Link>
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Blog · {posts.length} {posts.length === 1 ? "post" : "posts"}
        </div>
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          Notes from the harness
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          What we learned making a coding agent produce UI someone can defend — the
          derivation chain, the preset floor, the gates, and the measurements that did and
          did not hold up.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <ol className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-border/60 bg-card/30 p-5 transition-colors hover:border-foreground/20 hover:bg-card/60"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <time
                    dateTime={post.date}
                    className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                  >
                    {formatDate(post.date)}
                  </time>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-2 text-lg font-semibold tracking-tight">{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
