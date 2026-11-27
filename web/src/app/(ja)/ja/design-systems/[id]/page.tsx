/**
 * Japanese item page — /ja/design-systems/<id> (2026-11-27), the entry page for
 * 「<社名> デザインシステム」 searches.
 *
 * Under the (ja) root layout, so the document is <html lang="ja">. The page itself
 * is shared with the other editions (app/(en)/design-systems/[id]/edition-page.tsx):
 * the canonical English DESIGN.md under Japanese chrome. Scope: the verified
 * Japanese references (lib/i18n/detail-locales.ts). Anything else 404s here.
 *
 * There is no Japanese archive yet, so the breadcrumb and the JSON-LD Collection
 * point at the English one (/design-systems).
 */

import type { Metadata } from "next";
import { editionMetadata, editionPage, editionStaticParams } from "@/app/(en)/design-systems/[id]/edition-page";

export const dynamicParams = false;

export async function generateStaticParams() {
  return editionStaticParams("ja");
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return editionMetadata("ja", id);
}

export default async function JapaneseDesignSystemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return editionPage("ja", id);
}
