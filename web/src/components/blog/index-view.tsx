/**
 * Blog index, rendered once per locale. A post that has no version in this
 * locale still gets a card — carrying a badge and linking to the locale it does
 * exist in — rather than disappearing from the list.
 */

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogFooter } from "./blog-footer";
import { BlogHeader } from "./blog-header";
import { BlogHtmlLang } from "./blog-lang";
import { BLOG_CHROME, formatPostDate } from "@/lib/blog/i18n";
import { OTHER_LOCALE, type PostLocale } from "@/lib/blog/locales";
import { listPosts } from "@/lib/blog/posts";
import { blogIndexHref, blogPostHref, siteHref } from "@/lib/site";

export function BlogIndexView({ locale }: { locale: PostLocale }) {
  const posts = listPosts(locale);
  const chrome = BLOG_CHROME[locale];
  const other = OTHER_LOCALE[locale];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <BlogHtmlLang locale={locale} />
      <BlogHeader locale={locale} switchTo={blogIndexHref(other)} />

      <section className="mx-auto max-w-3xl px-4 pt-12 pb-8 sm:px-6">
        <Link
          href={siteHref("/")}
          className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {chrome.mainSite}
        </Link>
        <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          {chrome.postCount(posts.length)}
        </div>
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        >
          {chrome.indexTitle}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{chrome.indexIntro}</p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
        <ol className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={blogPostHref(post.slug, post.locale)}
                className="block rounded-xl border border-border/60 bg-card/30 p-5 transition-colors hover:border-foreground/20 hover:bg-card/60"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <time
                    dateTime={post.date}
                    className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
                  >
                    {formatPostDate(post.date, locale)}
                  </time>
                  {post.locale !== locale && (
                    <span className="rounded-full border border-primary/40 px-2 py-0.5 text-[10px] font-medium text-primary">
                      {chrome.otherLanguageBadge}
                    </span>
                  )}
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
                  {chrome.read} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-auto">
        <BlogFooter locale={locale} />
      </div>
    </div>
  );
}
