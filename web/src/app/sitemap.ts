import type { MetadataRoute } from "next";
import { DESIGN_TYPES } from "@/lib/survey/types";

const siteUrl = "https://oh-my-design.kr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/builder`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/curation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const resultRoutes: MetadataRoute.Sitemap = Object.keys(DESIGN_TYPES).map(
    (code) => ({
      url: `${siteUrl}/result/${code}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...resultRoutes];
}
