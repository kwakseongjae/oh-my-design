import { buildFeed, FEED_HEADERS } from "@/lib/blog/feed";

/** /blog/en/feed.xml — English feed. On the blog host: /en/feed.xml */
export function GET() {
  return new Response(buildFeed("en"), { headers: FEED_HEADERS });
}
