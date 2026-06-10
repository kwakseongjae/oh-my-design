import type { MetadataRoute } from "next";
import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { DESIGN_TYPES } from "@/lib/survey/types";
import { getChangelog } from "@/lib/changelog";
import { COLLECTIONS } from "@/lib/collections";
import { REGISTRY_BY_ID } from "@/data/registry.generated";

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

  // Curated collections (#5). Raw .md twins (/design-systems/<id>.md) are
  // intentionally NOT listed — the HTML detail pages stay canonical.
  const collectionRoutes: MetadataRoute.Sitemap = COLLECTIONS.map((c) => ({
    url: `${siteUrl}/collections/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const changelogRoutes: MetadataRoute.Sitemap = getChangelog().map((e) => ({
    url: `${siteUrl}/changelog/${e.version}`,
    lastModified: e.date ? new Date(e.date) : now,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  // Honest per-reference lastModified — the DESIGN.md "verified" date from the
  // registry, not build-time now() (which trains crawlers to discount our
  // timestamps). Mirrors the changelog routes' real-date pattern above.
  const referenceRoutes: MetadataRoute.Sitemap = listReferenceIds().map(
    (id) => {
      const verified = REGISTRY_BY_ID[id]?.verified;
      return {
        url: `${siteUrl}/design-systems/${id}`,
        lastModified: verified ? new Date(verified) : now,
        changeFrequency: "monthly" as const,
        priority: 0.75,
      };
    },
  );

  const resultRoutes: MetadataRoute.Sitemap = Object.keys(DESIGN_TYPES).map(
    (code) => ({
      url: `${siteUrl}/result/${code}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }),
  );

  return [
    ...staticRoutes,
    ...collectionRoutes,
    ...referenceRoutes,
    ...resultRoutes,
    ...changelogRoutes,
  ];
}
