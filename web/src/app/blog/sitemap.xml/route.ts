/**
 * /blog/sitemap.xml — the blog's own sitemap. On the blog host: /sitemap.xml
 *
 * Separate from the site sitemap because, once the blog has its own host, a
 * sitemap may only list URLs on the host that serves it. Each entry carries its
 * hreflang alternates so the two locales are declared as one page in two
 * languages rather than as duplicates.
 */

import { blogIndexUrl, blogPostUrl } from "@/lib/site";
import { HTML_LANG, POST_LOCALES, type PostLocale } from "@/lib/blog/locales";
import { getAllPosts, getPostLocales } from "@/lib/blog/posts";

interface Entry {
  url: string;
  lastModified: string;
  alternates: Array<{ locale: PostLocale; url: string }>;
}

function renderEntry({ url, lastModified, alternates }: Entry): string {
  const links = alternates
    .map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${HTML_LANG[alt.locale]}" href="${alt.url}" />`,
    )
    .join("\n");
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
${links}
  </url>`;
}

export function GET() {
  const today = new Date().toISOString().slice(0, 10);

  const indexAlternates = POST_LOCALES.map((locale) => ({
    locale,
    url: blogIndexUrl(locale),
  }));

  const entries: Entry[] = POST_LOCALES.map((locale) => ({
    url: blogIndexUrl(locale),
    lastModified: today,
    alternates: indexAlternates,
  }));

  for (const post of getAllPosts()) {
    const locales = getPostLocales(post.slug);
    const alternates = locales.map((locale) => ({
      locale,
      url: blogPostUrl(post.slug, locale),
    }));
    for (const locale of locales) {
      entries.push({
        url: blogPostUrl(post.slug, locale),
        lastModified: post.date,
        alternates,
      });
    }
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(renderEntry).join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
