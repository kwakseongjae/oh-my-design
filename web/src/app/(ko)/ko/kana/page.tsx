import type { Metadata } from "next";
import { KanaPage } from "@/components/kana/kana-page";
import { kanaMetadata } from "@/components/kana/metadata";

/**
 * /ko/kana — the research behind the /kana skill (a draft), in Korean. Under the (ko) root layout, so the document is
 * <html lang="ko">; the quoted Japanese carries lang="ja". Its Japanese edition is /ja/kana; no English one.
 */
export const metadata: Metadata = kanaMetadata();

export default function KoreanKanaPage() {
  return <KanaPage />;
}
