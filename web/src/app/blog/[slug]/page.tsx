/**
 * /blog/[slug] — post detail. Statically generated from src/lib/blog/posts.ts.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { getAllPosts, getPost } from "@/lib/blog/posts";

const SITE_URL = "https://oh-my-design.kr";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found — oh-my-design" };

  return {
    title: `${post.title} — oh-my-design`,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "oh-my-design" },
    publisher: { "@type": "Organization", name: "oh-my-design" },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            <Link href="/blog" className="text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="/docs/en" className="text-muted-foreground hover:text-foreground">
              Docs
            </Link>
          </nav>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 pt-12 pb-24 sm:px-6">
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All posts
        </Link>

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

        <h1
          className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{post.description}</p>

        <hr className="my-8 border-border/60" />

        <Markdown content={post.body} />

        <div className="mt-12 rounded-xl border border-border/60 bg-card/30 p-5">
          <p className="text-sm font-semibold">Try it</p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-foreground/[0.04] p-4 font-mono text-[13px]">
            npx oh-my-design-cli@latest
          </pre>
          <Link href="/cli" className="mt-3 inline-block text-sm font-medium text-primary hover:underline">
            What the CLI gives your agent →
          </Link>
        </div>
      </article>
    </div>
  );
}
