import type { Metadata } from "next";
import { KanaRulesPage } from "@/components/kana/rules-page";
import { kanaMetadata } from "@/components/kana/metadata";

/**
 * /ko/kana/rules — the reference behind the /kana showcase: every rule with its quotes, the house choices, the font census and the sources, Korean edition. Under the (ko) root
 * layout, so the document is <html lang="ko">. Released with its twin edition (components/kana/metadata.ts).
 */
export const metadata: Metadata = kanaMetadata("ko", "rules");

export default function Page() {
  return <KanaRulesPage locale="ko" />;
}
