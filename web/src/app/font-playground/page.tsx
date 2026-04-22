/**
 * /font-playground route shell.
 *
 * Server component — injects the single Google Fonts css2 URL that loads
 * every Google-hosted catalog entry in one request, plus any jsdelivr
 * @import rules for noonnu-only families. Client orchestration lives in
 * <FontPlaygroundView>.
 */

import type { Metadata } from "next";
import { FONT_CATALOG } from "@/lib/fonts/catalog";
import { buildGoogleFontsHref, buildJsdelivrCss } from "@/lib/fonts/loaders";
import { FontPlaygroundView } from "./font-playground-view";

export const metadata: Metadata = {
  title: "Font Playground — oh-my-design",
  description:
    "분위기를 묘사하면 60개 큐레이션 카탈로그에서 가장 가까운 폰트 3개를 찾아드립니다. Korean + Latin, OFL·free-commercial-use curation, CSS·DESIGN.md export.",
  openGraph: {
    title: "Font Playground — oh-my-design",
    description:
      "분위기를 묘사하면 60개 큐레이션 카탈로그에서 가장 가까운 폰트 3개를 찾아드립니다.",
  },
};

export default function FontPlaygroundPage() {
  const googleHref = buildGoogleFontsHref(FONT_CATALOG);
  const jsdelivrCss = buildJsdelivrCss(FONT_CATALOG);
  return (
    <>
      {googleHref && <link rel="stylesheet" href={googleHref} />}
      {jsdelivrCss && (
        <style
          // Inline @import rules for noonnu/self-hosted families not on Google Fonts.
          dangerouslySetInnerHTML={{ __html: jsdelivrCss }}
        />
      )}
      <FontPlaygroundView />
    </>
  );
}
