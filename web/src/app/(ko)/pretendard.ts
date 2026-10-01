import localFont from "next/font/local";

/**
 * Pretendard, self-hosted (no CDN). One static file: the 2,350 KS X 1001 Hangul
 * syllables + Latin/punctuation, weight axis 400–800, ~324 KB woff2. Made by
 * web/scripts/subset-pretendard.py from the `pretendard` npm package v1.3.9;
 * licence (OFL-1.1) beside the file. Syllables outside the subset fall back to
 * the platform Korean face named in --font-kr.
 */
export const pretendard = localFont({
  src: "../../fonts/pretendard/PretendardVariable-ksx1001.woff2",
  variable: "--font-pretendard",
  weight: "400 800",
  display: "swap",
  // Not preloaded. With preload on, the build emitted a <link rel=preload> for
  // this file on every route (measured 2026-10-01: /, /builder and
  // /design-systems/toss all fetched the 324 KB file), even though only this
  // layout applies the face. Unpreloaded, the browser fetches it only where
  // --font-pretendard is set and Korean glyphs are on screen, i.e. on /ko.
  preload: false,
});
