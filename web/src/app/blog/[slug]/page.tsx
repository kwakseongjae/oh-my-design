import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost, listSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return listSlugs().map((slug) => ({ slug }));
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
    description: post.subtitle ?? post.title,
    alternates: {
      canonical: post.canonical_url ?? `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.subtitle ?? post.title,
      type: "article",
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle ?? post.title,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl dark:border-border">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All posts
          </Link>
          {post.brand && (
            <Link
              href={`/design-systems/${post.brand}`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View {post.brand} system
              <ExternalLink className="h-3 w-3" />
            </Link>
          )}
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-12 pb-20">
        <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
          <time dateTime={post.date}>{post.date}</time>
          {post.country && (
            <>
              <span>·</span>
              <span>{post.country}</span>
            </>
          )}
          {post.reading_time && (
            <>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.reading_time} min
              </span>
            </>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
            {post.subtitle}
          </p>
        )}

        <div className="prose prose-neutral dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-xl prose-p:leading-relaxed prose-p:text-foreground/90 prose-li:leading-relaxed prose-li:text-foreground/90 prose-strong:text-foreground prose-strong:font-semibold prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.875em] prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/50 prose-a:text-primary prose-a:underline-offset-4 hover:prose-a:underline prose-table:text-sm prose-th:font-semibold prose-blockquote:border-l-primary prose-blockquote:text-foreground/80 max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        <hr className="my-12 border-border/40" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>
          {post.brand && (
            <Link
              href={`/design-systems/${post.brand}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Explore {post.brand}&apos;s DESIGN.md
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </article>
    </div>
  );
}
