/**
 * Blog locales — a leaf module with no filesystem or React imports.
 *
 * Both the post loader (which reads files) and lib/site.ts (which the edge
 * proxy pulls in) need these. Keeping them here is what stops `fs` from being
 * dragged into the edge bundle through the URL helpers.
 */

export const POST_LOCALES = ["ko", "en"] as const;
export type PostLocale = (typeof POST_LOCALES)[number];

/** The locale a post is written in first; the other is an adaptation of it. */
export const CANONICAL_LOCALE: PostLocale = "ko";

/** The other locale — used for the "read this in …" switch. */
export const OTHER_LOCALE: Record<PostLocale, PostLocale> = { ko: "en", en: "ko" };

/** URL segment a locale occupies under the blog root. Canonical owns the root. */
export function localeSegment(locale: PostLocale): string {
  return locale === CANONICAL_LOCALE ? "" : `/${locale}`;
}

export function isPostLocale(value: string): value is PostLocale {
  return (POST_LOCALES as readonly string[]).includes(value);
}

/** hreflang value for <link rel=alternate> and OpenGraph. */
export const HTML_LANG: Record<PostLocale, string> = { ko: "ko", en: "en" };
export const OG_LOCALE: Record<PostLocale, string> = { ko: "ko_KR", en: "en_US" };
