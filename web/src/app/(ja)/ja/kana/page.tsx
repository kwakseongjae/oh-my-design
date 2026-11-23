import type { Metadata } from "next";
import { KanaPage } from "@/components/kana/kana-page";
import { kanaMetadata } from "@/components/kana/metadata";

/**
 * /ja/kana — the Japanese edition of /ko/kana (2026-11-23). Under the (ja) root layout, so the document is
 * <html lang="ja"> and Japanese is set in the layout's Noto Sans JP. The rules are the sources' own Japanese; the chrome
 * is composed (copy-ja.ts) and the page says so at the top. noindex and in no sitemap, like the Korean page.
 */
export const metadata: Metadata = kanaMetadata("ja");

export default function JapaneseKanaPage() {
  return <KanaPage locale="ja" />;
}
