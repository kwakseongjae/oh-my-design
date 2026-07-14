import type { MetadataRoute } from "next";
import { getChangelog } from "@/lib/changelog";
import { COLLECTIONS } from "@/lib/collections";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { REGISTRY } from "@/data/registry.generated";
import { ENGLISH_REFERENCE_IDS } from "@/lib/references/editorial";

const siteUrl = "https://oh-my-design.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${siteUrl}/docs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/builder`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/design-systems`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/collections`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/font-playground`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
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
      url: `${siteUrl}/alternatives/shadcn`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/alternatives/v0`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/alternatives/anima`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/alternatives/locofy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/alternatives/getdesign-md`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Curated collections (#5). Raw .md twins (/<id>/design.md) are
  // intentionally NOT listed — the HTML detail pages stay canonical.
  const collectionRoutes: MetadataRoute.Sitemap = COLLECTIONS.map((c) => ({
    url: `${siteUrl}/collections/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const evolutionRoutes: MetadataRoute.Sitemap = ENGLISH_REFERENCE_IDS.map((id) => ({
    url: `${siteUrl}/design-systems/${id}/evolution`,
    lastModified: REFERENCE_QUALITY_BY_ID[id]?.verifiedAt
      ? new Date(REFERENCE_QUALITY_BY_ID[id].verifiedAt!)
      : now,
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  const changelogRoutes: MetadataRoute.Sitemap = getChangelog().map((e) => ({
    url: `${siteUrl}/changelog/${e.version}`,
    lastModified: e.date ? new Date(e.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  // Honest per-reference lastModified and priority from computed quality. A raw
  // frontmatter date cannot promote trust or crawl priority by itself.
  const referenceRoutes: MetadataRoute.Sitemap = REGISTRY.map(
    ({ id }) => {
      const quality = REFERENCE_QUALITY_BY_ID[id];
      const modified = quality?.tokensExtractedAt ?? quality?.verifiedAt;
      const priority = quality?.status === "verified_v2" ? 0.85 : quality?.status === "partial" ? 0.75 : 0.6;
      return {
        url: `${siteUrl}/design-systems/${id}`,
        lastModified: modified ? new Date(modified) : now,
        changeFrequency: quality?.status === "legacy_snapshot" ? "yearly" as const : "monthly" as const,
        priority,
      };
    },
  );

  return [
    ...staticRoutes,
    ...collectionRoutes,
    ...referenceRoutes,
    ...evolutionRoutes,
    ...changelogRoutes,
  ];
}
