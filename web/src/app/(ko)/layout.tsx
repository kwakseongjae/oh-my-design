import { RootDocument } from "@/components/root-document";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import { geistMono, geistSans } from "../fonts";
import { pretendard } from "./pretendard";
import "../globals.css";

/**
 * Root layout for the Korean landing (/ko). It exists separately from
 * app/(en)/layout.tsx for one reason: <html lang> can only be set by a root
 * layout, and this route must say lang="ko" while every English page keeps
 * lang="en". Navigating between the two groups is a full page load — the
 * documented cost of multiple root layouts, acceptable for a language switch.
 *
 * Pretendard is applied here only, so English pages never download it.
 */
export const viewport = siteViewport;
export const metadata = siteMetadata;

export default function KoreanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootDocument
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} ${pretendard.variable}`}
    >
      {children}
    </RootDocument>
  );
}
