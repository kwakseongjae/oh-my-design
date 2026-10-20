import localFont from "next/font/local";
import { IBM_Plex_Sans, Noto_Sans_JP } from "next/font/google";

/**
 * The open brand faces the journey loads for real (journey/face.ts, rule 1). Declared once here and
 * imported only by journey-section.tsx, which puts the two CSS variables on the section. preload is
 * off and the files carry unicode ranges or are fetched on first use, so a face downloads only when a
 * sample screen sets text in it. adjustFontFallback is off: next/font's metric-adjusted Arial would
 * otherwise stand in, unlabelled, while the face loads; the screen's own stack (the page face) does
 * instead, and the scan masks the load.
 *
 *  - Pretendard Variable, OFL-1.1 (src/fonts/pretendard/OFL.txt): the KS X 1001 subset already in
 *    the repo (web/scripts/subset-pretendard.py) — Basic Latin, Latin-1 punctuation, Hangul.
 *  - Noto Sans JP, OFL: the Google build, self-hosted by next/font at build time (no request to
 *    Google from the browser). The /ja layout declares its own copy for page text with
 *    display "optional"; this one is "swap" because it only ever appears inside the sample screen.
 */
export const pretendard = localFont({
  src: "../../../fonts/pretendard/PretendardVariable-ksx1001.woff2",
  weight: "400 800",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  variable: "--font-r11-pretendard",
});

export const notoSansJP = Noto_Sans_JP({
  weight: "variable",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  variable: "--font-r11-noto-jp",
});

/**
 * IBM Plex Sans, OFL: Toss Product Sans's measured Latin substitute (journey/face.ts SUB_FACES,
 * docs/research/2026-10-20-r11/fonts/toss.md). Self-hosted by next/font like Noto Sans JP, and only
 * ever set with the "substitute — not the brand face" label.
 */
export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  variable: "--font-r11-plex",
});
