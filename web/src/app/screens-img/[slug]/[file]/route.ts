/**
 * /screens-img/<slug>/<file> — a published still, fetched from the image store and answered by this site.
 *
 * The pages never print the store's address; they print this path (lib/screens/published-base.ts). Answering here,
 * instead of rewriting to the store, means two things hold in every runtime and can be tested:
 *   - each still goes out with `X-Robots-Tag: noindex, noimageindex` (a header rule on an external rewrite was not
 *     applied by `next start`, checked 2026-11-23, and could not be checked on a protected Vercel preview);
 *   - only a file the committed manifest lists is answered: `<width>-<key>.jpg` of a listed record, and its
 *     `.thumb.jpg` when the manifest says the store holds one. Anything else in the store, and every request while
 *     the manifest is empty (the shut state) or names a local preview base, is a 404, and the store is not asked.
 *
 * A still may be kept for an hour by a browser and by the CDN (the same hour the store sends); a new deployment
 * starts with an empty CDN cache, so a takedown (scripts/publish-screens.mjs --remove, then deploy) stops here at once.
 */
import { publicManifest } from "@/lib/screens/public.server";
import { HTTPS_BASE } from "@/lib/screens/published-base";

export const runtime = "nodejs";

/** Seconds a browser and the CDN may keep a still; the publishing script sets the same on the store. */
const CACHE_SECONDS = 3600;
const ROBOTS = "noindex, noimageindex";

const notFound = () =>
  new Response("Not found", { status: 404, headers: { "Cache-Control": "no-store", "X-Robots-Tag": ROBOTS } });

/** The file names the manifest lists for a service: each record's still, and its small rendition when it has one. */
function listedFiles(records: { key: string; width: number; thumb?: boolean }[]): Set<string> {
  const files = new Set<string>();
  for (const r of records) {
    if (!r || typeof r.key !== "string" || !Number.isInteger(r.width)) continue;
    files.add(`${r.width}-${r.key}.jpg`);
    if (r.thumb === true) files.add(`${r.width}-${r.key}.thumb.jpg`);
  }
  return files;
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string; file: string }> }) {
  const { slug, file } = await params;
  const manifest = publicManifest();
  if (!manifest || !HTTPS_BASE.test(manifest.base)) return notFound();
  const service = manifest.services.find((s) => s.slug === slug);
  if (!service || !listedFiles(service.records).has(file)) return notFound();

  let upstream: Response;
  try {
    upstream = await fetch(`${manifest.base}/${encodeURIComponent(slug)}/${encodeURIComponent(file)}`);
  } catch {
    return notFound();
  }
  if (!upstream.ok || !upstream.body) return notFound();
  return new Response(upstream.body, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": `public, max-age=${CACHE_SECONDS}, s-maxage=${CACHE_SECONDS}`,
      "X-Robots-Tag": ROBOTS,
      "X-Content-Type-Options": "nosniff",
    },
  });
}
