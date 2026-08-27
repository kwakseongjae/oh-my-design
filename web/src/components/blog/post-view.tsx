/**
 * Post detail, rendered once per locale.
 */

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Markdown } from "@/components/markdown";
import { BlogFooter } from "./blog-footer";
import { BlogHeader } from "./blog-header";
import { BlogHtmlLang } from "./blog-lang";
import { BLOG_CHROME, formatPostDate } from "@/lib/blog/i18n";
import { OTHER_LOCALE, type PostLocale } from "@/lib/blog/locales";
import type { BlogPost } from "@/lib/blog/posts";
import { blogIndexHref, blogPostHref, siteHref } from "@/lib/site";

export function BlogPostView({
  post,
  locale,
  availableLocales,
}: {
  post: BlogPost;
  /** The locale of the *route* — may differ from the post's own locale. */
  locale: PostLocale;
  availableLocales: PostLocale[];
}) {
  const chrome = BLOG_CHROME[locale];
  const other = OTHER_LOCALE[locale];
  const switchTo = availableLocales.includes(other)
    ? blogPostHref(post.slug, other)
    : undefined;

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <BlogHtmlLang locale={post.locale} />
      <BlogHeader locale={locale} switchTo={switchTo} />

      <article className="mx-auto max-w-3xl px-4 pt-12 pb-24 sm:px-6" lang={post.locale}>
        <Link
          href={blogIndexHref(locale)}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {chrome.allPosts}
        </Link>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <time
            dateTime={post.date}
            className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
          >
            {formatPostDate(post.date, locale)}
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
          <p className="text-sm font-semibold">{chrome.ctaTitle}</p>
          <pre className="mt-3 overflow-x-auto rounded-lg bg-foreground/[0.04] p-4 font-mono text-[13px]">
            npx oh-my-design-cli@latest
          </pre>
          <Link
            href={siteHref("/cli")}
            className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
          >
            {chrome.ctaLink}
          </Link>
        </div>
      </article>

      <div className="mt-auto">
        <BlogFooter locale={locale} />
      </div>
    </div>
  );
}
