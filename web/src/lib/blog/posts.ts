/**
 * Blog post loader.
 *
 * Posts live as markdown files on disk — `src/content/blog/<slug>/<locale>.md`
 * — rather than as string literals in this file. The writing pipeline
 * (omd:kr-writer → omd:humanize → omd:locale-adapter) emits markdown, so files
 * are the seam where a generated draft becomes a published post without anyone
 * re-escaping a template literal by hand.
 *
 * Read at build time (server only), the same shape as lib/changelog.ts. The
 * index, the detail page and the sitemap all call this one loader, so a post
 * cannot exist in one surface and not another. Like the changelog, the cache is
 * process-wide: a dev server needs a restart to pick up an edited post.
 *
 * Korean is canonical (CANONICAL_LOCALE) and English accompanies it. A post
 * with only one locale is legal — callers fall back to whatever exists — which
 * is what lets the English v2.0.0 post keep working before its Korean twin is
 * written.
 */

import { readdirSync, readFileSync, statSync } from "fs";
import { join } from "path";
import { parseFrontmatter } from "./frontmatter";

export const POST_LOCALES = ["ko", "en"] as const;
export type PostLocale = (typeof POST_LOCALES)[number];

/** The locale a post is written in first; the other is an adaptation of it. */
export const CANONICAL_LOCALE: PostLocale = "ko";

export interface BlogPost {
  slug: string;
  locale: PostLocale;
  title: string;
  description: string;
  /** ISO date, publication day. */
  date: string;
  tags: string[];
  /** Markdown body, frontmatter removed. */
  body: string;
}

const CONTENT_DIR = join(process.cwd(), "src", "content", "blog");
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

type PostsBySlug = Map<string, Partial<Record<PostLocale, BlogPost>>>;

let _cache: PostsBySlug | null = null;

function isLocale(value: string): value is PostLocale {
  return (POST_LOCALES as readonly string[]).includes(value);
}

function loadPosts(): PostsBySlug {
  if (_cache) return _cache;

  const posts: PostsBySlug = new Map();

  for (const slug of readdirSync(CONTENT_DIR).sort()) {
    const dir = join(CONTENT_DIR, slug);
    if (!statSync(dir).isDirectory()) continue;
    if (!SLUG_RE.test(slug)) {
      throw new Error(`blog: "${slug}" is not a valid slug — lowercase kebab-case only`);
    }

    const byLocale: Partial<Record<PostLocale, BlogPost>> = {};
    for (const file of readdirSync(dir)) {
      if (!file.endsWith(".md")) continue;
      const locale = file.slice(0, -".md".length);
      if (!isLocale(locale)) {
        throw new Error(
          `blog: ${slug}/${file} — locale must be one of ${POST_LOCALES.join(", ")}`,
        );
      }
      const source = `blog/${slug}/${file}`;
      const { data, body } = parseFrontmatter(readFileSync(join(dir, file), "utf-8"), source);
      if (!body) throw new Error(`${source}: post has no body`);
      byLocale[locale] = { slug, locale, ...data, body };
    }

    if (Object.keys(byLocale).length === 0) {
      throw new Error(`blog: ${slug}/ has no <locale>.md file`);
    }
    posts.set(slug, byLocale);
  }

  _cache = posts;
  return posts;
}

/** Canonical first, then any other locale that exists. */
function pick(
  byLocale: Partial<Record<PostLocale, BlogPost>>,
  locale?: PostLocale,
): BlogPost | undefined {
  if (locale) return byLocale[locale];
  return byLocale[CANONICAL_LOCALE] ?? POST_LOCALES.map((l) => byLocale[l]).find(Boolean);
}

/**
 * Newest first. With no locale, returns one entry per post in its canonical
 * locale (falling back to a translation); with a locale, only posts that exist
 * in that locale.
 */
export function getAllPosts(locale?: PostLocale): BlogPost[] {
  return [...loadPosts().values()]
    .map((byLocale) => pick(byLocale, locale))
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string, locale?: PostLocale): BlogPost | undefined {
  const byLocale = loadPosts().get(slug);
  return byLocale ? pick(byLocale, locale) : undefined;
}

/** Which locales a post exists in — the input for hreflang links. */
export function getPostLocales(slug: string): PostLocale[] {
  const byLocale = loadPosts().get(slug);
  return byLocale ? POST_LOCALES.filter((locale) => byLocale[locale]) : [];
}
