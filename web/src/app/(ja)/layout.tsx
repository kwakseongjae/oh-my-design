import { Noto_Sans_JP } from "next/font/google";
import { RootDocument } from "@/components/root-document";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import "../globals.css";

/**
 * Root layout for the Japanese landing (/ja) — the only place that can say
 * <html lang="ja">. Noto Sans JP (SIL OFL 1.1) is chosen over Zen Kaku Gothic
 * New because its Google build keeps `palt` (measured in the prototype:
 * "デザインシステムを、" 598 → 533px at 60px). next/font self-hosts it at
 * build time as unicode-range slices; preload is off so the browser fetches
 * only the slices the page's text uses, and only on this route.
 */
const notoJP = Noto_Sans_JP({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-noto-jp",
  display: "swap",
  preload: false,
});

export const viewport = siteViewport;
export const metadata = siteMetadata;

export default function JapaneseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootDocument lang="ja" className={notoJP.variable}>
      {children}
    </RootDocument>
  );
}
