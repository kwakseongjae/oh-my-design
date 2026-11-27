import type { Metadata } from "next";
import { KanaShowcase } from "@/components/kana/showcase";
import { kanaMetadata } from "@/components/kana/metadata";

/**
 * /ko/kana — the showcase for the draft /kana skill, Korean edition. Under the (ko) root
 * layout, so the document is <html lang="ko">. Released with its twin edition (components/kana/metadata.ts).
 */
export const metadata: Metadata = kanaMetadata("ko");

export default function Page() {
  return <KanaShowcase locale="ko" />;
}
