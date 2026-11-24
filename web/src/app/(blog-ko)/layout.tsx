import { RootDocument } from "@/components/root-document";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";
import { geistMono, geistSans } from "../fonts";
import "../globals.css";
// Hangul slices of Wanted Sans, the site's face for Korean (as in app/(ko)); the blog home is set in it.
import "../../styles/wanted-sans-cjk.css";

/**
 * Root layout for the Korean blog pages: /blog and /blog/<slug> (on the blog
 * host, / and /<slug>). <html lang> can only be set by a root layout, and these
 * pages sat under app/(en), so they were served as lang="en" and only patched
 * on the client — crawlers that do not run JS read Korean declared English.
 *
 * Not app/(ko), whose layout belongs to the Korean landing. Since the blog home's
 * redesign (2026-11-24) this one loads the same Wanted Sans Hangul slices, so
 * Korean on the blog is set in the site's face, not the platform's. The English blog (/blog/en/…) and the blog's
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
