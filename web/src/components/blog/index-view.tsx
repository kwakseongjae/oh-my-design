/**
 * Blog home, rendered once per locale (direction B, owner 2026-11-23/24): the shared site header, the
 * field banner, the blog's name and one line on what it writes about, the topic chips, and a grid of
 * post cards with each post's cover. web/public/design.md: Asset: the blog field, Asset: blog covers,
 * Component: topic chips, Component: post card.
 *
 * A post that has no version in this locale still gets a card, carrying a badge and linking to the
 * locale it does exist in, rather than disappearing from the list.
 *
 * No back link to the main site above the title (owner, 2026-11-23): the blog reads as a site of
 * its own. The way back is the shared header's logo and nav and the footer's links.
 */

import Link from "next/link";
import { BlogField } from "./blog-field";
import { BlogFooter } from "./blog-footer";
import { BlogHeader } from "./blog-header";
import { TopicGrid } from "./topic-grid";
import { BLOG_CHROME, formatPostDate } from "@/lib/blog/i18n";
import { OTHER_LOCALE, type PostLocale } from "@/lib/blog/locales";
import { listPosts } from "@/lib/blog/posts";
import { TOPICS, topicsOf } from "@/lib/blog/topics";
import { blogIndexHref, blogPostHref } from "@/lib/site";
import "./blog-home.css";

export function BlogIndexView({ locale }: { locale: PostLocale }) {
  const posts = listPosts(locale).map((post) => ({ post, topics: topicsOf(post.tags) }));
  const chrome = BLOG_CHROME[locale];
  const other = OTHER_LOCALE[locale];
  const chips = TOPICS.map((topic) => ({
    id: topic.id,
    label: topic.label[locale],
    count: posts.filter((p) => p.topics.includes(topic)).length,
  })).filter((chip) => chip.count > 0);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <BlogHeader locale={locale} switchTo={blogIndexHref(other)} />

      <main id="main" className="bh" lang={locale}>
        <section className="bh-banner" aria-hidden="true">
          <BlogField />
        </section>
        <div className="bh-head">
          <h1 className="bh-title">{chrome.indexTitle}</h1>
          <p className="bh-lede">{chrome.indexIntro}</p>
        </div>

        <TopicGrid label={chrome.topicsLabel} all={chrome.allTopics} total={posts.length} topics={chips}>
          {posts.map(({ post, topics }, i) => (
            <li key={post.slug} data-topics={topics.map((t) => t.id).join(" ")}>
              <Link href={blogPostHref(post.slug, post.locale)} className="bh-card" lang={post.locale}>
                <div className="bh-cover">
                  {post.cover && (
                    // eslint-disable-next-line @next/next/no-img-element -- a fixed 1200x630 PNG, already small; the same file is the og:image
                    <img
                      src={post.cover}
                      alt=""
                      width={1200}
                      height={630}
                      loading={i < 3 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={i === 0 ? "high" : undefined}
                    />
                  )}
                </div>
                <div className="bh-cap">
                  <div className="bh-topics">
                    {post.locale !== locale && <span className="bh-badge">{chrome.otherLanguageBadge}</span>}
                    {topics.map((topic) => (
                      <span key={topic.id}>{topic.label[locale]}</span>
                    ))}
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <time dateTime={post.date}>{formatPostDate(post.date, locale)}</time>
                </div>
              </Link>
            </li>
          ))}
        </TopicGrid>
      </main>

      <div className="mt-auto">
        <BlogFooter locale={locale} />
      </div>
    </div>
  );
}
