/**
 * Raw DESIGN.md twin — serves references/<id>/DESIGN.md as text/markdown.
 *
 * Public URL: /<id>/design.md (rewritten here via next.config.ts — the handler
 * lives at /r/<id> and the pretty URL is an afterFiles rewrite). The previous
 * /design-systems/<id>.md shape 301-redirects to it. Launch copy and llms.txt
 * advertise the /<id>/design.md form.
 *
 * Why a raw twin at all: agents/LLMs consume clean markdown far better than
 * JS-rendered HTML (the Context7 mechanism). The HTML detail page stays
 * canonical — these URLs are intentionally NOT in sitemap.ts.
 *
 * Same disk-read + generateStaticParams pattern as
 * /design-systems/[id]/page.tsx so every reference is SSG'd at build.
 */

import { readFileSync, existsSync, readdirSync } from "fs";
import { join } from "path";
import { REFERENCE_ID_RE } from "@/lib/kv";
import { REFERENCE_COUNT } from "@/lib/catalog-count";

const REFS_DIR = join(process.cwd(), "references");
const SITE_URL = "https://oh-my-design.kr";

export async function generateStaticParams() {
  if (!existsSync(REFS_DIR)) return [];
  return readdirSync(REFS_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(REFS_DIR, d.name, "DESIGN.md")))
    .map((d) => ({ id: d.name }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  // Mirror the /api/track id discipline — also blocks path traversal.
  if (!REFERENCE_ID_RE.test(id)) {
    return new Response("Not found", { status: 404 });
  }
  const mdPath = join(REFS_DIR, id, "DESIGN.md");
  if (!existsSync(mdPath)) {
    return new Response("Not found", { status: 404 });
  }
  const md = readFileSync(mdPath, "utf-8");
  const footer =
    `\n\n---\n` +
    `Source: ${SITE_URL}/design-systems/${id} · Raw twin of references/${id}/DESIGN.md\n` +
    `Install ${REFERENCE_COUNT} quality-graded references for your AI coding agent: npx oh-my-design-cli@latest\n`;
  return new Response(md + footer, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // HTML page is canonical — keep the raw twin out of indexes without
      // blocking agent fetches.
      "X-Robots-Tag": "noindex",
    },
  });
}
