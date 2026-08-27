/**
 * Canonical origins for the site and the blog, and every URL that crosses
 * between them.
 *
 * Why this module exists: the blog is moving to its own host
 * (blog.oh-my-design.kr) while staying inside this app. Canonical URLs, OG
 * urls, JSON-LD and the sitemap all have to name the *same* host the page is
 * actually served from — otherwise the page tells crawlers its real address is
 * somewhere else. Those strings used to be a `const SITE_URL` copy-pasted into
 * each blog file, which is exactly how that drift happens.
 *
 * The switch is a runtime flag, not a code edit, so the cutover is atomic with
 * the DNS: the subdomain only becomes canonical once NEXT_PUBLIC_BLOG_SUBDOMAIN
 * is set in the deployment. Until then this ships inert — every URL keeps
 * pointing at oh-my-design.kr/blog, so merging ahead of the domain is safe.
 *
 * NEXT_PUBLIC_ prefix is deliberate: a client component that imports these
 * helpers must resolve the same flag the server did. A server-only var would
 * read `undefined` in the browser and silently emit the other host's URLs.
 *
 * Two families here, and the difference matters:
 *   *Url()  — absolute. Canonical, OG, JSON-LD, sitemap, feeds, and links from
 *             the main site into the blog.
 *   *Href() — relative to whichever host is rendering. Links *within* the blog.
 */

import { CANONICAL_LOCALE, localeSegment, type PostLocale } from "@/lib/blog/locales";

export const SITE_ORIGIN = "https://oh-my-design.kr";

export const BLOG_HOST = "blog.oh-my-design.kr";
export const BLOG_ORIGIN = `https://${BLOG_HOST}`;

/** True once the blog subdomain is live and canonical. Set per deployment. */
export const BLOG_ON_SUBDOMAIN = process.env.NEXT_PUBLIC_BLOG_SUBDOMAIN === "1";

/** Where the blog lives, absolute: its own origin, or a path on the main site. */
function blogRoot(): string {
  return BLOG_ON_SUBDOMAIN ? BLOG_ORIGIN : `${SITE_ORIGIN}/blog`;
}

/** Absolute URL of the blog index in one locale. */
export function blogIndexUrl(locale: PostLocale = CANONICAL_LOCALE): string {
  return `${blogRoot()}${localeSegment(locale)}`;
}

/** Absolute URL of one post in one locale. */
export function blogPostUrl(slug: string, locale: PostLocale = CANONICAL_LOCALE): string {
  return `${blogRoot()}${localeSegment(locale)}/${slug}`;
}

/** Absolute URL of a blog feed in one locale. */
export function blogFeedUrl(locale: PostLocale = CANONICAL_LOCALE): string {
  return `${blogRoot()}${localeSegment(locale)}/feed.xml`;
}

/** Path prefix the blog occupies on the host currently rendering it. */
function blogBasePath(): string {
  return BLOG_ON_SUBDOMAIN ? "" : "/blog";
}

/** In-blog link to the index. Relative, so navigation stays client-side. */
export function blogIndexHref(locale: PostLocale = CANONICAL_LOCALE): string {
  return `${blogBasePath()}${localeSegment(locale)}` || "/";
}

/** In-blog link to a post. Relative, so navigation stays client-side. */
export function blogPostHref(slug: string, locale: PostLocale = CANONICAL_LOCALE): string {
  return `${blogBasePath()}${localeSegment(locale)}/${slug}`;
}

/** In-blog link to the RSS feed. Relative, same host as the page. */
export function blogFeedHref(locale: PostLocale = CANONICAL_LOCALE): string {
  return `${blogBasePath()}${localeSegment(locale)}/feed.xml`;
}

/**
 * Link from a blog page back to the main site.
 *
 * Once the blog has its own host these must be absolute: a bare "/cli" on
 * blog.oh-my-design.kr resolves against the blog host, where the proxy would
 * map it into /blog/cli and 404. Before the cutover they stay relative so
 * client-side navigation is preserved.
 */
export function siteHref(path: string): string {
  return BLOG_ON_SUBDOMAIN ? `${SITE_ORIGIN}${path}` : path;
}
