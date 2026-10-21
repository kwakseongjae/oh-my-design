import type { MetadataRoute } from "next";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { REGISTRY } from "@/data/registry.generated";
import { ENGLISH_REFERENCE_IDS } from "@/lib/references/editorial";
import { DOC_LOCALES, DOC_PAGES, docsHref } from "@/lib/docs/locales";
import { getAllPosts } from "@/lib/blog/posts";
import { BLOG_ON_SUBDOMAIN, blogIndexUrl, blogPostUrl } from "@/lib/site";
import { LANDING_LANGUAGE_ALTERNATES, SITE_LOCALES, SITE_LOCALE_META } from "@/lib/i18n/site-locales";
import { hasKoDetailId } from "@/lib/i18n/ko-detail.server";
import { KO_CATALOG_PATH, koDetailPath } from "@/lib/i18n/ko-detail";
import { HANGUL_PATH } from "@/components/hangul/copy";
import { HANGUL_LANGUAGES } from "@/components/hangul/metadata";

const siteUrl = "https://oh-my-design.kr";

const LANDING_ALTERNATES_ABS: Record<string, string> = Object.fromEntries(
  Object.entries(LANDING_LANGUAGE_ALTERNATES).map(([lang, path]) => [lang, path === "/" ? siteUrl : `${siteUrl}${path}`]),
);

const ARCHIVE_ALTERNATES: Record<string, string> = {
  en: `${siteUrl}/design-systems`,
  ko: `${siteUrl}${KO_CATALOG_PATH}`,
  "x-default": `${siteUrl}/design-systems`,
};

// The /hangul launch page pair (components/hangul/metadata.ts): Korean is the default, English x-default.
const HANGUL_ALTERNATES: Record<string, string> = Object.fromEntries(
  Object.entries(HANGUL_LANGUAGES).map(([lang, path]) => [lang, `${siteUrl}${path}`]),
);

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    // The four landing locales name each other (and x-default) as hreflang
    // alternates, here as xhtml:link and in each page's <head>.
    ...SITE_LOCALES.map((l) => ({
      url: SITE_LOCALE_META[l].path === "/" ? siteUrl : `${siteUrl}${SITE_LOCALE_META[l].path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: l === "en" ? 1 : 0.95,
      alternates: { languages: LANDING_ALTERNATES_ABS },
    })),
    {
      url: `${siteUrl}/design-systems`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: { languages: ARCHIVE_ALTERNATES },
    },
    {
      url: `${siteUrl}${KO_CATALOG_PATH}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
      alternates: { languages: ARCHIVE_ALTERNATES },
    },
    ...[HANGUL_PATH.ko, HANGUL_PATH.en].map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
      alternates: { languages: HANGUL_ALTERNATES },
    })),
    {
      url: `${siteUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/what-is-design-md`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/changelog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/alternatives`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const cliDocsRoutes: MetadataRoute.Sitemap = DOC_LOCALES.flatMap((locale) =>
    DOC_PAGES.map((page) => ({
      url: `${siteUrl}${docsHref(locale, page)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: page === "overview" ? 0.94 : 0.82,
    })),
  );

  const evolutionRoutes: MetadataRoute.Sitemap = ENGLISH_REFERENCE_IDS.map((id) => ({
    url: `${siteUrl}/design-systems/${id}/evolution`,
    lastModified: REFERENCE_QUALITY_BY_ID[id]?.verifiedAt
      ? new Date(REFERENCE_QUALITY_BY_ID[id].verifiedAt!)
      : now,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  // Once the blog is on its own host it publishes its own sitemap: a sitemap
  // may only list URLs on the host that serves it. Until then the blog lives
  // here and belongs in this one.
  const blogRoutes: MetadataRoute.Sitemap = BLOG_ON_SUBDOMAIN
    ? []
    : [
        {
          url: blogIndexUrl(),
          lastModified: now,
          changeFrequency: "weekly" as const,
          priority: 0.75,
        },
        // post.locale, not the canonical default: a post with no Korean
        // version redirects from its Korean URL, and a sitemap that lists a
        // redirect is asking the crawler to discard the entry.
        ...getAllPosts().map((post) => ({
          url: blogPostUrl(post.slug, post.locale),
          lastModified: new Date(`${post.date}T00:00:00Z`),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        })),
      ];

  // Honest per-reference lastModified and priority from computed quality. A raw
  // frontmatter date cannot promote trust or crawl priority by itself.
  // A reference with a Korean page (lib/i18n/ko-detail.ts) lists both URLs, each
  // naming the pair (and x-default → English) as xhtml:link alternates, matching
  // the hreflang in both pages' <head>. Others keep a single English entry.
  const referenceRoutes: MetadataRoute.Sitemap = REGISTRY.flatMap(
    ({ id }) => {
      const quality = REFERENCE_QUALITY_BY_ID[id];
      const modified = quality?.tokensExtractedAt ?? quality?.verifiedAt;
      const priority = quality?.status === "verified_v2" ? 0.85 : quality?.status === "partial" ? 0.75 : 0.6;
      const en = `${siteUrl}/design-systems/${id}`;
      const base = {
        lastModified: modified ? new Date(modified) : now,
        changeFrequency: quality?.status === "legacy_snapshot" ? "yearly" as const : "monthly" as const,
        priority,
      };
      if (!hasKoDetailId(id)) return [{ url: en, ...base }];
      const ko = `${siteUrl}${koDetailPath(id)}`;
      const alternates = { languages: { en, ko, "x-default": en } };
      return [
        { url: en, ...base, alternates },
        { url: ko, ...base, alternates },
      ];
    },
  );

  return [
    ...staticRoutes,
    ...cliDocsRoutes,
    ...referenceRoutes,
    ...evolutionRoutes,
    ...blogRoutes,
  ];
}
