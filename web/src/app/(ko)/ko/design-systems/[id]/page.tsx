/**
 * Korean item page — /ko/design-systems/<id> (growth plan P2, IA-PLAN Phase 3).
 *
 * Under the (ko) root layout, so the document is <html lang="ko">. The page itself
 * is shared with the other editions (app/(en)/design-systems/[id]/edition-page.tsx);
 * the Korean scope is every Korean reference plus every verified one
 * (lib/i18n/detail-locales.ts). Anything else 404s here.
 */

import type { Metadata } from "next";
import { editionMetadata, editionPage, editionStaticParams } from "@/app/(en)/design-systems/[id]/edition-page";

export const dynamicParams = false;

export async function generateStaticParams() {
  return editionStaticParams("ko");
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return editionMetadata("ko", id);
}

export default async function KoreanDesignSystemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return editionPage("ko", id);
}
