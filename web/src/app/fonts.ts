import { Geist, Geist_Mono } from "next/font/google";

/**
 * Site-wide web fonts. One declaration each; next/font self-hosts them at build
 * time (no runtime request to Google).
 *
 * Font map (one strategy, all next/font):
 *  - Geist / Geist Mono — product UI (builder, catalog, docs). Applied by both
 *    root layouts. Until 2026-10 the old landing loaded a second copy of Geist
 *    under its own variable; that copy went with it.
 *  - Wanted Sans Variable — the concept-A brand face (Latin + Hangul), self-
 *    hosted unicode-range slices in public/fonts/wanted-sans: Latin slices via
 *    styles/brand-a.css (site-wide), Hangul/CJK slices via
 *    styles/wanted-sans-cjk.css (landing pages only).
 *  - Noto Sans JP / Noto Sans TC — declared in app/(ja)/layout.tsx and
 *    app/(zh-tw)/layout.tsx so only those root layouts pull them in.
 *
 * Each face lives in the module of the route that applies it because next/font
 * preloads by import graph: a face declared here would be preloaded on every
 * page.
 */
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
