import { RootDocument } from "@/components/root-document";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import { geistMono, geistSans } from "../fonts";
import "../globals.css";

/**
 * Root layout for the Korean blog pages: /blog and /blog/<slug> (on the blog
 * host, / and /<slug>). <html lang> can only be set by a root layout, and these
 * pages sat under app/(en), so they were served as lang="en" and only patched
 * on the client — crawlers that do not run JS read Korean declared English.
 *
 * Not app/(ko): that layout also loads the Wanted Sans Hangul slices, which the
 * blog has never used. This one matches app/(en) in everything but lang, so the
 * pages render exactly as before. The English blog (/blog/en/…) and the blog's
 * route handlers (feeds, sitemap, robots) stay under app/(en); handlers render
 * no layout. Moving between this layout and (en) is a full page load — only the
 * ko ↔ en switch and links out to the main site cross it.
 */
export const viewport = siteViewport;
export const metadata = siteMetadata;

export default function KoreanBlogRootLayout({
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
