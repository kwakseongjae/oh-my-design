import localFont from "next/font/local";

/**
 * The /hangul launch pages' display face: Song Myung (송명, designer JIKJI), a 명조 with the
 * brush-entry strokes of old printed books. Source: google/fonts `ofl/songmyung`, Version 1.00,
 * "Copyright 2018 The Song Myung Project Authors". Licence: SIL Open Font License 1.1, copied
 * next to the file as fonts/OFL.txt.
 *
 * Set only on elements with the class `hg-d` (the h1, the h2s, the eval figures, the 판심제 in the
 * hero demo); body text stays in the site's sans. The file is a subset (fonts/subset.mjs) holding
 * exactly the syllables those strings use plus Basic Latin, about 18 KB, so it is preloaded on the
 * two hangul routes and set with display "block": the few headings wait for it instead of drawing in
 * a fallback face and re-wrapping when it lands. The face ships one weight, so every `hg-d` is set
 * at 400 with font synthesis off (HG-12). It has no − (U+2212) or →; neither is set in it.
 * adjustFontFallback is off: next/font's metric-adjusted Times would only cover Latin.
 */
export const songMyung = localFont({
  src: "./fonts/SongMyung-display.woff2",
  weight: "400",
  style: "normal",
  display: "block",
  preload: true,
  adjustFontFallback: false,
  variable: "--font-hg-display",
});
