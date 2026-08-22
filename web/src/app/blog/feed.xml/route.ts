import { buildFeed, FEED_HEADERS } from "@/lib/blog/feed";

/** /blog/feed.xml — Korean feed. On the blog host: /feed.xml */
export function GET() {
  return new Response(buildFeed("ko"), { headers: FEED_HEADERS });
}
