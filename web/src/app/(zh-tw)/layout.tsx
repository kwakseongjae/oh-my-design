import { Noto_Sans_TC } from "next/font/google";
import { RootDocument } from "@/components/root-document";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import { geistMono, geistSans } from "../fonts";
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
  display: "swap",
  preload: false,
});

export const viewport = siteViewport;
export const metadata = siteMetadata;

export default function TraditionalChineseRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <RootDocument lang="zh-Hant-TW" className={`${geistSans.variable} ${geistMono.variable} ${notoTC.variable}`}>
      {children}
    </RootDocument>
  );
}
