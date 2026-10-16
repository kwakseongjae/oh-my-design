import { Noto_Sans_TC } from "next/font/google";
import { RootDocument } from "@/components/root-document";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import "../globals.css";

/**
 * Root layout for the Traditional Chinese (Taiwan) landing (/zh-tw) — the
 * only place that can say <html lang="zh-Hant-TW">. Noto Sans TC (SIL OFL
 * 1.1), self-hosted by next/font as unicode-range slices, preload off, so
 * only the slices this page's text uses are fetched, and only on this route.
 */
const notoTC = Noto_Sans_TC({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-noto-tc",
  // round 7: "optional" — a slow first load keeps the platform face for that view instead of
  // swapping mid-read (the swap pushed the hero keyboard down: CLS 0.27-0.35 at 390px)
  display: "optional",
  preload: false,
});

export const viewport = siteViewport;
export const metadata = siteMetadata;

export default function TraditionalChineseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootDocument lang="zh-Hant-TW" className={notoTC.variable}>
      {children}
    </RootDocument>
  );
}
