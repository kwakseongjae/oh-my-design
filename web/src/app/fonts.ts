import { Geist, Geist_Mono } from "next/font/google";

/**
 * Site-wide web fonts. One declaration each; next/font self-hosts them at build
 * time (no runtime request to Google).
 *
 * Font map (one strategy, all next/font):
 *  - Geist / Geist Mono — product UI (builder, catalog, docs). Applied by both
 *    root layouts. Until 2026-10 the old landing loaded a second copy of Geist
 *    under its own variable; that copy went with it.
 *  - Schibsted Grotesk — proof-sheet display/text face, declared in
 *    components/landing/fonts.ts so only the landing pages pull it in.
 *  - Pretendard — Korean, self-hosted file in src/fonts, declared in
 *    app/(ko)/pretendard.ts so only the Korean root layout pulls it in.
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
