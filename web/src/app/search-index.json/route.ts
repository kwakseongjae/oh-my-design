/**
 * Landing typeahead index: {i: id, n: name, d?: displayName, c: country, s: tier}
 * for every reference, built from the generated registry at build time and
 * served as a static file. The landing's search box fetches it on first
 * focus, so the index never weighs on first paint.
 */
import { getSearchIndex } from "@/lib/landing-a/data.server";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getSearchIndex(), {
    headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
