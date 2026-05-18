/**
 * Blog loader — reads markdown files from <repo-root>/content/posts/*.md.
 *
 * Frontmatter shape (per file):
 *   slug:            kebab url-safe id (used in /blog/<slug>)
 *   title:           main headline
 *   subtitle:        subheadline
 *   date:            ISO YYYY-MM-DD (sort key, newest first)
 *   brand:           reference id from registry (optional — links the post
 *                    to /design-systems/<brand>)
 *   country:         KR / US / JP / ...
 *   reading_time:    minutes (integer)
 *   mcp_install:     npm package name to advertise (optional)
 *   canonical_url:   optional external canonical
 *
 * No dynamic content. Pure static read at build time.
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import matter from "gray-matter";

const POSTS_DIR = resolve(process.cwd(), "..", "content", "posts");

export interface PostFrontmatter {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  brand?: string;
  country?: string;
  reading_time?: number;
  mcp_install?: string;
  canonical_url?: string;
}

export interface PostSummary extends PostFrontmatter {}

export interface Post extends PostFrontmatter {
  content: string;
}

function normalizeFrontmatter(data: Record<string, unknown>): PostSummary {
  // gray-matter parses ISO date strings into Date objects. Re-stringify to
  // keep the frontmatter shape stable and JSON-safe across server/client.
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? "");
  return { ...(data as unknown as PostSummary), date };
}

/** All posts, sorted newest first by date. */
export function listPosts(): PostSummary[] {
  if (!existsSync(POSTS_DIR)) return [];
  const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts: PostSummary[] = files.map((file) => {
    const raw = readFileSync(join(POSTS_DIR, file), "utf-8");
    const { data } = matter(raw);
    return normalizeFrontmatter(data);
  });
  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

/** Slugs for generateStaticParams. */
export function listSlugs(): string[] {
  return listPosts().map((p) => p.slug);
}

/** Load one post by slug. */
export function getPost(slug: string): Post | null {
  if (!existsSync(POSTS_DIR)) return null;
  const files = readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    const raw = readFileSync(join(POSTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const fm = normalizeFrontmatter(data);
    if (fm.slug === slug) {
      return { ...fm, content };
    }
  }
  return null;
}
