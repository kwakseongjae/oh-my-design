/**
 * Per-reference design system showcase route.
 *
 * Server component — reads the same canonical Reference AST repository as the
 * API and primary detail route, then hands its projection to <ReferencePreview>.
 *
 * Replaces the deprecated static references/<id>/preview.html files
 * (kept on disk for backward compat but no longer the canonical preview).
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ReferencePreview } from "@/components/reference-preview";
import { extractTokens } from "@/lib/extract-tokens";
import { REGISTRY } from "@/data/registry.generated";
import { loadReference } from "@/lib/references/repository.server";
import {
  extractLegacyReferenceDetail,
  projectAstReferenceDetail,
} from "@/lib/references/detail-projection";

// Force dynamic rendering so edits to references/<id>/DESIGN.md show up
// without a full server restart. SSG caching otherwise pins the parsed token
// snapshot to whatever the file was at first build.
export const dynamic = "force-dynamic";
export const revalidate = 0;

function loadDetail(id: string) {
  const loaded = loadReference(id);
  if (!loaded) return null;
  const legacy = extractLegacyReferenceDetail(id, loaded.markdown);
  const projection = projectAstReferenceDetail(loaded.ast, legacy);
  return { ...projection.detail, referenceAst: projection.contract };
}

export async function generateStaticParams() {
  return REGISTRY.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const detail = loadDetail(id);
  if (!detail) return { title: "Reference not found" };
  const name = REGISTRY.find((entry) => entry.id === id)?.displayName
    ?? id.replace(".app", "").replace(/^./, (c) => c.toUpperCase());
  // Legacy route — kept for the internal /qa-references QA tool. Tell crawlers
  // to point all SEO authority at the canonical /design-systems/[id] URL,
  // and don't index this preview-only variant.
  return {
    title: `${name} — Design System Preview · oh-my-design`,
    description:
      detail.mood.slice(0, 160) ||
      `Design system showcase for ${name}, generated from DESIGN.md.`,
    alternates: { canonical: `/design-systems/${id}` },
    robots: { index: false, follow: true },
  };
}

export default async function ReferencePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const detail = loadDetail(id);
  if (!detail) notFound();
  const tokens = extractTokens(detail);
  return <ReferencePreview tokens={tokens} />;
}
