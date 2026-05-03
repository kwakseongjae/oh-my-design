import type { MetadataRoute } from "next";
import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { DESIGN_TYPES } from "@/lib/survey/types";

const siteUrl = "https://oh-my-design.kr";
const REFS_DIR = join(process.cwd(), "references");

/** Mirrors generateStaticParams in /design-systems/[id]/page.tsx —
 *  every directory under references/ that has a DESIGN.md is a public route. */
function listReferenceIds(): string[] {
  if (!existsSync(REFS_DIR)) return [];
  return readdirSync(REFS_DIR, { withFileTypes: true })
    .filter(
      (d) =>
        d.isDirectory() && existsSync(join(REFS_DIR, d.name, "DESIGN.md")),
    )
    .map((d) => d.name);
}

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
      url: `${siteUrl}/font-playground`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteUrl}/curation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const referenceRoutes: MetadataRoute.Sitemap = listReferenceIds().map(
    (id) => ({
      url: `${siteUrl}/design-systems/${id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }),
  );

  const resultRoutes: MetadataRoute.Sitemap = Object.keys(DESIGN_TYPES).map(
    (code) => ({
      url: `${siteUrl}/result/${code}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }),
  );

  return [...staticRoutes, ...referenceRoutes, ...resultRoutes];
}
