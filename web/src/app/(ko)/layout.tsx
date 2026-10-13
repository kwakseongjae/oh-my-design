import { RootDocument } from "@/components/root-document";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import { geistMono, geistSans } from "../fonts";
import "../globals.css";

/**
 * Root layout for the Korean landing (/ko). It exists separately from
 * app/(en)/layout.tsx for one reason: <html lang> can only be set by a root
 * layout. Navigating between root layouts is a full page load — the
 * documented cost of multiple root layouts, acceptable for a language switch.
 *
 * Hangul is set in Wanted Sans Variable (concept A), self-hosted as unicode-
 * range slices (styles/wanted-sans-cjk.css), so no separate Korean face is
 * declared here any more.
 */
export const viewport = siteViewport;
export const metadata = siteMetadata;

export default function KoreanRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootDocument lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      {children}
    </RootDocument>
  );
}
