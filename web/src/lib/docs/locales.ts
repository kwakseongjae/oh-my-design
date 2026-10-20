export const DOC_LOCALES = ["en", "ko", "ja", "zh-cn", "zh-tw"] as const;

export type DocsLocale = (typeof DOC_LOCALES)[number];

/**
 * Every docs page, in reading order (the left nav and the previous/next links
 * follow it). Round 11 (2026-10-20, owner review item 28) removed "showcase",
 * "troubleshooting" and "ai"; their old URLs 308 in next.config.ts
 * (DELETED_DOCS_PAGES below is the list the redirect test checks).
 */
export const DOC_PAGES = [
  "overview",
  "getting-started",
  "workflows",
  "demo",
  "skills",
  "anti-slop",
] as const;

export type DocsPage = (typeof DOC_PAGES)[number];

/** Left-nav sections, Next.js-docs style: each page sits in exactly one group. */
export const DOC_NAV_GROUPS = [
  { id: "start", pages: ["overview", "getting-started"] },
  { id: "guides", pages: ["workflows", "demo"] },
  { id: "reference", pages: ["skills", "anti-slop"] },
] as const satisfies ReadonlyArray<{ id: string; pages: readonly DocsPage[] }>;

export type DocsNavGroup = (typeof DOC_NAV_GROUPS)[number]["id"];

/**
 * Pages removed in round 11 and where each one's URL now lands, in the same locale
 * (308s in next.config.ts; __tests__/docs-redirects.test.ts holds them to this table).
 * `hash` is the getting-started section that took over the removed page's job.
 */
export const DELETED_DOCS_PAGES = {
  showcase: { page: "overview" },
  troubleshooting: { page: "getting-started" },
  ai: { page: "getting-started", hash: "without-cli" },
} as const satisfies Record<string, { page: DocsPage; hash?: string }>;

export const DEFAULT_DOCS_LOCALE: DocsLocale = "en";

export const DOC_LOCALE_LABELS: Record<DocsLocale, string> = {
  en: "English",
  ko: "한국어",
  ja: "日本語",
  "zh-cn": "简体中文",
  "zh-tw": "繁體中文（台灣）",
};

export const DOC_HTML_LANG: Record<DocsLocale, string> = {
  en: "en",
  ko: "ko",
  ja: "ja",
  "zh-cn": "zh-CN",
  "zh-tw": "zh-TW",
};

export const DOC_OG_LOCALE: Record<DocsLocale, string> = {
  en: "en_US",
  ko: "ko_KR",
  ja: "ja_JP",
  "zh-cn": "zh_CN",
  "zh-tw": "zh_TW",
};

export function isDocsLocale(value: string): value is DocsLocale {
  return DOC_LOCALES.includes(value as DocsLocale);
}

export function isDocsPage(value: string): value is DocsPage {
  return DOC_PAGES.includes(value as DocsPage);
}

export function docsHref(locale: DocsLocale, page: DocsPage = "overview"): string {
  return page === "overview" ? `/docs/${locale}` : `/docs/${locale}/${page}`;
}

export function docsLlmsHref(locale: DocsLocale): string {
  return locale === "en" ? "/llms.txt" : `/llms.${locale}.txt`;
}

export function docsMarkdownHref(locale: DocsLocale, page: DocsPage): string {
  return `/docs-md/${locale}/${page}.md`;
}

/**
 * Site (landing) locale whose chrome copy a docs locale reads. zh-cn has no
 * landing, so it reads the English header and footer.
 */
export const DOCS_SITE_LOCALE = {
  en: "en",
  ko: "ko",
  ja: "ja",
  "zh-tw": "zh-tw",
  "zh-cn": "en",
} as const satisfies Record<DocsLocale, "en" | "ko" | "ja" | "zh-tw">;

export function docsAlternates(page: DocsPage): Record<string, string> {
  return Object.fromEntries(
    DOC_LOCALES.map((locale) => [DOC_HTML_LANG[locale], docsHref(locale, page)]),
  );
}
