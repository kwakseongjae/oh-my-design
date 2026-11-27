import type { Metadata } from "next";
import { KanaRulesPage } from "@/components/kana/rules-page";
import { kanaMetadata } from "@/components/kana/metadata";

/**
 * /ja/kana/rules — the reference behind the /kana showcase: every rule with its quotes, the house choices, the font census and the sources, Japanese edition. Under the (ja) root
 * layout, so the document is <html lang="ja">. Released with its twin edition (components/kana/metadata.ts).
 */
export const metadata: Metadata = kanaMetadata("ja", "rules");

export default function Page() {
  return <KanaRulesPage locale="ja" />;
}
