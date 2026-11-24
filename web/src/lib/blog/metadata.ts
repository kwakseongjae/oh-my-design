/**
 * Metadata builders shared by the four blog routes (index and post, ko and en).
 *
 * hreflang lists only the locales a post actually has: advertising a Korean
 * alternate that 404s is worse than advertising none. x-default points at the
 * canonical locale when it exists, and at the only version otherwise.
 */

import type { Metadata } from "next";
import { BLOG_CHROME } from "./i18n";
import {
  CANONICAL_LOCALE,
  HTML_LANG,
  OG_LOCALE,
  POST_LOCALES,
  type PostLocale,
} from "./locales";
import { existsSync } from "fs";
import { join } from "path";
import { getPost, getPostLocales, lastModified, type BlogPost } from "./posts";
import { DEFAULT_OG_IMAGE, SITE_ORIGIN, blogFeedUrl, blogIndexUrl, blogPostUrl } from "@/lib/site";

const SITE_NAME = "oh-my-design";

/**
 * A post's share image: its cover (scripts/blog-covers) when one exists, otherwise the drawn card at
 * /og/blog, which stays as the fallback for a post published before its cover is made.
 */
function ogImageUrl(post: BlogPost): string {
  if (post.cover) return `${SITE_ORIGIN}${post.cover}`;
  return `${SITE_ORIGIN}/og/blog?slug=${encodeURIComponent(post.slug)}&locale=${post.locale}`;
}

/** The blog home's own cover (scripts/blog-covers/covers/_home.mjs), or the site's default card. */
function indexImage(locale: PostLocale) {
  const path = `/blog-assets/cover-home-${locale}.png`;
  if (!existsSync(join(process.cwd(), "public", path))) return DEFAULT_OG_IMAGE;
  return { url: `${SITE_ORIGIN}${path}`, width: 1200, height: 630, alt: BLOG_CHROME[locale].indexTitle };
}

function languageMap(
  locales: PostLocale[],
  url: (locale: PostLocale) => string,
): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[HTML_LANG[locale]] = url(locale);
  const fallback = locales.includes(CANONICAL_LOCALE) ? CANONICAL_LOCALE : locales[0];
  if (fallback) languages["x-default"] = url(fallback);
  return languages;
}

/** RSS autodiscovery: each page points at the feed of its own locale. */
function feedAlternate(locale: PostLocale): Record<string, string> {
  return { "application/rss+xml": blogFeedUrl(locale) };
}

export function blogIndexMetadata(locale: PostLocale): Metadata {
  const chrome = BLOG_CHROME[locale];
  const url = blogIndexUrl(locale);
  // The index title already carries the site's name ("oh-my-design 블로그").
  const shareTitle = chrome.indexTitle;
  const image = indexImage(locale);

  // Both share blocks are set in full: a page's openGraph/twitter replaces the
  // root layout's, and anything left out would fall back to the main site's
  // English defaults.
  return {
    title: { absolute: chrome.indexTitle },
    description: chrome.indexIntro,
    alternates: {
      canonical: url,
      languages: languageMap([...POST_LOCALES], blogIndexUrl),
      types: feedAlternate(locale),
    },
    openGraph: {
      title: shareTitle,
      description: chrome.indexIntro,
      url,
      type: "website",
      locale: OG_LOCALE[locale],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: chrome.indexIntro,
      images: [image.url],
    },
  };
}

export function blogPostMetadata(slug: string, locale: PostLocale): Metadata {
  const post = getPost(slug, locale) ?? getPost(slug);
  if (!post) return { title: `Not found — ${SITE_NAME}` };

  const locales = getPostLocales(slug);
  const url = blogPostUrl(slug, post.locale);

  return {
    title: `${post.title} — ${SITE_NAME}`,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: url,
      languages: languageMap(locales, (l) => blogPostUrl(slug, l)),
      types: feedAlternate(post.locale),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: lastModified(post),
      locale: OG_LOCALE[post.locale],
      images: [{ url: ogImageUrl(post), width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImageUrl(post)],
    },
  };
}

/** schema.org BlogPosting for the post detail routes. */
export function blogPostJsonLd(slug: string, locale: PostLocale) {
  const post = getPost(slug, locale) ?? getPost(slug);
  if (!post) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: lastModified(post),
    inLanguage: HTML_LANG[post.locale],
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: blogPostUrl(slug, post.locale),
    image: ogImageUrl(post),
  };
}
