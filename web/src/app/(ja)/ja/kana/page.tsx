import type { Metadata } from "next";
import { KanaShowcase } from "@/components/kana/showcase";
import { kanaMetadata } from "@/components/kana/metadata";

/**
 * /ja/kana — the showcase for the draft /kana skill, Japanese edition. Under the (ja) root
 * layout, so the document is <html lang="ja">. Released with its twin edition (components/kana/metadata.ts).
 */
export const metadata: Metadata = kanaMetadata("ja");

export default function Page() {
  return <KanaShowcase locale="ja" />;
}
