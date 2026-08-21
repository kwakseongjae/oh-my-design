/**
 * RSS 2.0 feed for the blog, one per locale.
 *
 * Built from the same loader as the pages, so a post cannot be in the feed and
 * not on the site. Posts appear in the feed of the locale they exist in — a
 * Korean subscriber is not served an English body under a Korean feed.
 */

import { BLOG_CHROME } from "./i18n";
import { HTML_LANG, type PostLocale } from "./locales";
import { getAllPosts } from "./posts";
import { blogFeedUrl, blogIndexUrl, blogPostUrl } from "@/lib/site";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** RFC 822, which is what RSS pubDate requires. */
function rfc822(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toUTCString();
}

export function buildFeed(locale: PostLocale): string {
  const chrome = BLOG_CHROME[locale];
  const posts = getAllPosts(locale);
  const self = blogFeedUrl(locale);

  const items = posts
    .map((post) => {
      const url = blogPostUrl(post.slug, locale);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <description>${escapeXml(post.description)}</description>
${post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(chrome.indexTitle)} — oh-my-design</title>
    <link>${blogIndexUrl(locale)}</link>
    <description>${escapeXml(chrome.indexIntro)}</description>
    <language>${HTML_LANG[locale]}</language>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
}

export const FEED_HEADERS = {
  "Content-Type": "application/rss+xml; charset=utf-8",
  "Cache-Control": "public, max-age=0, s-maxage=3600",
};
