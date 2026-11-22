/**
 * /screens-local/<slug>/<file> — the Screens tab's stills, streamed from the
 * local folder OMD_SCREENS_DIR (lib/screens/local.server.ts). Only
 * "<width>-<key>[.full|.thumb].jpg" inside <dir>/<slug>/img (a small rendition
 * that was never made is answered with the still); everything else, and every
 * request while the gate is shut (unset, or a production build without
 * OMD_SCREENS_ALLOW=1), is a 404. These are other companies' screens whose
 * publication is not decided: nothing here is cached or indexed.
 */
import fs from "node:fs";
import { Readable } from "node:stream";
import { resolveScreenImage } from "@/lib/screens/local.server";

const notFound = () => new Response("Not found", { status: 404, headers: { "Cache-Control": "no-store" } });

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string; file: string }> }) {
  const { slug, file } = await params;
  const target = resolveScreenImage(slug, file);
  if (!target) return notFound();
  const body = Readable.toWeb(fs.createReadStream(target)) as ReadableStream<Uint8Array>;
  return new Response(body, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
