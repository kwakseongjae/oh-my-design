import { RootDocument } from "@/components/root-document";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import { geistMono, geistSans } from "../fonts";
import "../globals.css";

/**
 * Root layout for every English page. The Korean landing has its own root
 * layout in app/(ko) so it can render <html lang="ko">; both render the same
 * RootDocument and metadata.
 */
export const viewport = siteViewport;
export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootDocument lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      {children}
    </RootDocument>
  );
}
