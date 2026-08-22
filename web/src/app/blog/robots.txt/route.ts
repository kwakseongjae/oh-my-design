/**
 * /blog/robots.txt — served as the blog host's robots.txt through the proxy.
 *
 * The main site's robots.ts names oh-my-design.kr as its host and sitemap; a
 * crawler on the blog host needs the blog's own. Same open posture: everything
 * indexable, AI crawlers explicitly welcome.
 */

import { BLOG_ORIGIN, blogFeedUrl } from "@/lib/site";

export function GET() {
  const body = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${BLOG_ORIGIN}/sitemap.xml
Host: ${BLOG_ORIGIN}

# Feeds
# ${blogFeedUrl("ko")}
# ${blogFeedUrl("en")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
