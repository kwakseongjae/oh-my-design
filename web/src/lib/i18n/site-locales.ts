/**
 * The four landing locales (rebrand concept A, 2026-10-13).
 *
 * Routing design: English stays unprefixed at `/`; the other three are
 * `/ko`, `/ja` and `/zh-tw`, each under its own root layout
 * (app/(ko), app/(ja), app/(zh-tw)) because a root layout is the only place
 * that can set `<html lang>`. The Next guide's `app/[lang]` pattern would put
 * every route under a locale segment, but the catalog, docs and blog are
 * English and unprefixed, so the site keeps the multiple-root-layout pattern
 * it already used for /ko. The segment is lower-case like `/docs/zh-tw`;
 * `/zh-TW` and friends redirect to it in src/proxy.ts.
 *
 * Client-safe: no generated data is imported here.
 */

export const SITE_LOCALES = ["en", "ko", "ja", "zh-tw"] as const;
export type SiteLocale = (typeof SITE_LOCALES)[number];

export interface SiteLocaleMeta {
  /** Landing path. */
  readonly path: string;
  /** `<html lang>` — script-qualified for Traditional Chinese. */
  readonly htmlLang: string;
  /** hreflang value (Google: language-region). */
  readonly hreflang: string;
  /** Native label for the switcher. */
  readonly label: string;
  /** Docs home for this locale (all four exist in lib/docs/locales.ts). */
  readonly docs: string;
  readonly ogLocale: string;
}

export const SITE_LOCALE_META: Readonly<Record<SiteLocale, SiteLocaleMeta>> = {
  en: { path: "/", htmlLang: "en", hreflang: "en", label: "English", docs: "/docs/en", ogLocale: "en_US" },
  ko: { path: "/ko", htmlLang: "ko", hreflang: "ko", label: "한국어", docs: "/docs/ko", ogLocale: "ko_KR" },
  ja: { path: "/ja", htmlLang: "ja", hreflang: "ja", label: "日本語", docs: "/docs/ja", ogLocale: "ja_JP" },
  "zh-tw": { path: "/zh-tw", htmlLang: "zh-Hant-TW", hreflang: "zh-TW", label: "繁體中文", docs: "/docs/zh-tw", ogLocale: "zh_TW" },
};

/** hreflang → path, plus x-default. Shared by page metadata and the sitemap. */
export const LANDING_LANGUAGE_ALTERNATES: Readonly<Record<string, string>> = {
  ...Object.fromEntries(SITE_LOCALES.map((l) => [SITE_LOCALE_META[l].hreflang, SITE_LOCALE_META[l].path])),
  "x-default": "/",
};

/** Cookie holding an explicit locale choice from the switcher. */
export const LOCALE_COOKIE = "omd-lang";

export function isSiteLocale(v: string | null | undefined): v is SiteLocale {
  return !!v && (SITE_LOCALES as readonly string[]).includes(v);
}

/**
 * Paths that are alternate spellings of a locale landing. Exact, case-sensitive
 * compare in the proxy (a config redirect would be case-insensitive and loop
 * /zh-tw onto itself).
 */
export const LOCALE_PATH_ALIASES: Readonly<Record<string, string>> = {
  "/en": "/",
  "/zh-TW": "/zh-tw",
  "/zh-Hant": "/zh-tw",
  "/zh-hant": "/zh-tw",
  "/zh-Hant-TW": "/zh-tw",
  "/zh-hant-tw": "/zh-tw",
  "/tw": "/zh-tw",
  "/jp": "/ja",
  "/kr": "/ko",
};

/**
 * Where a request for `/` goes when the visitor previously chose a locale.
 * Only an explicit cookie counts — Accept-Language never redirects, so
 * crawlers and first visits always get the x-default page.
 */
export function landingRedirectFor(pathname: string, cookie: string | undefined): string | null {
  if (pathname !== "/") return null;
  if (!isSiteLocale(cookie) || cookie === "en") return null;
  return SITE_LOCALE_META[cookie].path;
}
