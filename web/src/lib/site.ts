/**
 * Canonical origins for the site and the blog.
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
 */

export const SITE_ORIGIN = "https://oh-my-design.kr";

export const BLOG_HOST = "blog.oh-my-design.kr";
export const BLOG_ORIGIN = `https://${BLOG_HOST}`;

/** True once the blog subdomain is live and canonical. Set per deployment. */
export const BLOG_ON_SUBDOMAIN = process.env.NEXT_PUBLIC_BLOG_SUBDOMAIN === "1";

/** Absolute URL of the blog index, on whichever host currently owns it. */
export function blogIndexUrl(): string {
  return BLOG_ON_SUBDOMAIN ? BLOG_ORIGIN : `${SITE_ORIGIN}/blog`;
}

/** Absolute URL of one post, on whichever host currently owns it. */
export function blogPostUrl(slug: string): string {
  return BLOG_ON_SUBDOMAIN ? `${BLOG_ORIGIN}/${slug}` : `${SITE_ORIGIN}/blog/${slug}`;
}
