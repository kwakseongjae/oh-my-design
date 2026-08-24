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
import { getPost, getPostLocales } from "./posts";
import { SITE_ORIGIN, blogIndexUrl, blogPostUrl } from "@/lib/site";

const SITE_NAME = "oh-my-design";

function ogImageUrl(slug: string, locale: PostLocale): string {
  return `${SITE_ORIGIN}/api/og/blog?slug=${encodeURIComponent(slug)}&locale=${locale}`;
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

export function blogIndexMetadata(locale: PostLocale): Metadata {
  const chrome = BLOG_CHROME[locale];
  const url = blogIndexUrl(locale);

  return {
    title: `${chrome.indexTitle} — ${SITE_NAME}`,
    description: chrome.indexIntro,
    alternates: {
      canonical: url,
      languages: languageMap([...POST_LOCALES], blogIndexUrl),
    },
    openGraph: {
      title: `${SITE_NAME} — ${chrome.indexTitle}`,
      description: chrome.indexIntro,
      url,
      type: "website",
      locale: OG_LOCALE[locale],
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
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      locale: OG_LOCALE[post.locale],
      images: [{ url: ogImageUrl(slug, post.locale), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImageUrl(slug, post.locale)],
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
    dateModified: post.date,
    inLanguage: HTML_LANG[post.locale],
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
    mainEntityOfPage: blogPostUrl(slug, post.locale),
    image: ogImageUrl(slug, post.locale),
  };
}
