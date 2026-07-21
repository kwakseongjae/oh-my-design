export const DOC_LOCALES = ["en", "ko", "ja", "zh-cn", "zh-tw"] as const;

export type DocsLocale = (typeof DOC_LOCALES)[number];

export const DOC_PAGES = [
  "overview",
  "getting-started",
  "demo",
  "workflows",
  "skills",
  "anti-slop",
  "showcase",
  "troubleshooting",
  "ai",
] as const;

export type DocsPage = (typeof DOC_PAGES)[number];

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

export function docsAlternates(page: DocsPage): Record<string, string> {
  return Object.fromEntries(
    DOC_LOCALES.map((locale) => [DOC_HTML_LANG[locale], docsHref(locale, page)]),
  );
}
