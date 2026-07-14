/**
 * Per-font metadata: license, install source, and friendly notes.
 *
 * Two-stage lookup:
 *   1. Normalize the input token (strip quotes, map known variants → canonical name)
 *   2. Look up the canonical name in FONT_REGISTRY
 *
 * License labels:
 *   - "OFL"               → SIL Open Font License (Google Fonts default)
 *   - "Apache 2.0"        → Apache (Roboto, Noto)
 *   - "Proprietary"       → commercial license required (foundry source available)
 *   - "Brand-proprietary" → custom typeface, NOT publicly distributed
 *   - "System"            → pre-installed on the OS, no separate install
 */

export type FontLicense = "OFL" | "Apache 2.0" | "Proprietary" | "Brand-proprietary" | "System" | "Mixed";

export interface FontInfo {
  name: string;
  license: FontLicense;
  /** True if user can install/download this font themselves. */
  installable: boolean;
  source?: { name: string; url: string };
  notes?: string;
}

/**
 * Variant → canonical name. Lets us collapse e.g. "GeistMono", "Geist Mono" → "Geist Mono"
 * or "Inter Variable" / "Inter Placeholder" / "Inter Fallback" → "Inter".
 */
const NORMALIZE: Record<string, string> = {
  // Inter family
  "inter": "Inter",
  "Inter Variable": "Inter",
  "Inter Placeholder": "Inter",
  "Inter Fallback": "Inter",
  "NotionInter": "Notion Inter",

  // Geist
  "GeistMono": "Geist Mono",

  // Saans / Söhne / Roobert / Matter / GT family variants
  "SaansMono": "Saans Mono",
  "Söhne Mono": "Söhne Mono",
  "Söhne": "Söhne",
  "sohne-var": "Söhne",
  "Roobert PRO": "Roobert PRO",
  "Roobert PRO Medium": "Roobert PRO",
  "Roobert PRO SemiBold": "Roobert PRO",
  "Roobert PRO SemiBold Italic": "Roobert PRO",
  "Matter Regular": "Matter",
  "Matter Regular Placeholder": "Matter",
  "Matter Medium": "Matter",
  "Matter Medium Placeholder": "Matter",
  "Matter SemiBold": "Matter",
  "Matter SQ Regular": "Matter SQ",
  "Matter SQ Regular Placeholder": "Matter SQ",
  "Matter Mono Regular": "Matter Mono",
  "Matter Mono Regular Placeholder": "Matter Mono",
  "GT Walsheim Medium": "GT Walsheim",
  "GT Walsheim Framer Medium": "GT Walsheim",

  // ABC Dinamo casing variants
  "abcDiatype": "ABC Diatype",
  "abcRepro": "ABC Repro",
  "aBCFavorit": "ABC Favorit",

  // Apple
  "SFPro": "SF Pro",
  "SFMono-Regular": "SF Mono",
  "SF Pro KR": "SF Pro",
  "SF Pro Display": "SF Pro Display",
  "SF Pro Text": "SF Pro Text",
  "SF Pro Rounded": "SF Pro",
  "SF Pro Icons": "SF Pro",

  // Cal Sans variants
  "Cal Sans": "Cal Sans",
  "Cal Sans UI Variable Light": "Cal Sans",
  "Cal Sans UI Medium": "Cal Sans",

  // BMW
  "BMWTypeNextLatin": "BMWTypeNext",
  "BMWTypeNextLatin Light": "BMWTypeNext",

  // Lambo
  "LamboType": "LamboType",

  // Tesla
  "Universal Sans Display": "Universal Sans",
  "Universal Sans Text": "Universal Sans",
  "universalSans": "Universal Sans",

  // Spotify
  "SpotifyMixUITitle": "Spotify Mix",
  "SpotifyMixUI": "Spotify Mix",

  // Baemin 2.0
  "WORK": "BAEMINWORK",
  "WORK체": "BAEMINWORK",
  "Baemin Work": "BAEMINWORK",

  // Uber
  "UberMoveText": "Uber Move",
  "UberMove": "Uber Move",

  // Coinbase
  "CoinbaseDisplay": "Coinbase Display",
  "CoinbaseSans": "Coinbase Sans",
  "CoinbaseText": "Coinbase Text",
  "CoinbaseIcons": "Coinbase Icons",

  // Cohere
  "CohereText": "Cohere Text",
  "CohereMono": "Cohere Mono",
  "CohereIconDefault": "Cohere Icon",
  "Unica77 Cohere Web": "Unica77",

  // Cursor
  "CursorGothic": "Cursor Gothic",
  "CursorIcons16": "Cursor Icons",

  // Figma
  "figmaSans": "Figma Sans",
  "figmaMono": "Figma Mono",

  // Kraken
  "Kraken-Brand": "Kraken Brand",
  "Kraken-Product": "Kraken Product",

  // ElevenLabs Waldenburg variants
  "WaldenburgFH": "Waldenburg",
  "Waldenburg Fallback": "Waldenburg",
  "WaldenburgFH Fallback": "Waldenburg",
  "waldenburgNormal": "Waldenburg",

  // Sentry
  "Dammit Sans": "Dammit Sans",

  // SpaceX
  "D-DIN-Bold": "D-DIN",

  // freee
  "freee-logo'` from Google Fonts.": "freee-logo",

  // Hashicorp scrambled CSS Module class
  "__hashicorpSans_96f0ca": "HashiCorp Sans",

  // Replicate
  "rb-freigeist-neue": "Freigeist Neue",
  "basier-square": "Basier Square",

  // Resend
  "domaine": "Domaine",
  "commitMono": "Commit Mono",

  // x.ai
  "Geist Mono": "Geist Mono",

  // Cursor brand serif (jjannon = Antoine Janot's font?)
  "jjannon": "JJannon",

  // CJK fonts (system fallbacks already canonicalized)
  "ヒラギノ角ゴ ProN": "Hiragino Kaku Gothic ProN",
  "メイリオ": "Meiryo",
  "微軟正黑體": "Microsoft JhengHei",
  "黑體-繁": "Heiti TC",
};

const FONT_REGISTRY: Record<string, FontInfo> = {
  // ─────────── System / Apple ───────────
  "Apple System": { name: "Apple System", license: "System", installable: false, notes: "macOS/iOS default — uses SF Pro automatically." },
  "-apple-system": { name: "Apple System", license: "System", installable: false, notes: "macOS/iOS default — uses SF Pro automatically." },
  "BlinkMacSystemFont": { name: "Apple System (Blink)", license: "System", installable: false, notes: "Chrome alias for Apple system font on macOS." },
  "System": { name: "System UI stack", license: "System", installable: false, notes: "OS-native font stack (San Francisco on Apple, Segoe UI on Windows, Roboto on Android). No web font is loaded — the OS supplies the face." },
  "system-ui": { name: "System UI", license: "System", installable: false, notes: "Generic OS-default font keyword." },
  "ui-sans-serif": { name: "UI Sans Serif", license: "System", installable: false, notes: "CSS keyword — OS default sans (San Francisco / Segoe UI / etc.)." },
  "ui-monospace": { name: "UI Monospace", license: "System", installable: false, notes: "CSS keyword — OS default mono (SF Mono / Consolas / etc.)." },
  "sans-serif": { name: "Generic sans-serif", license: "System", installable: false },
  "serif": { name: "Generic serif", license: "System", installable: false },
  "monospace": { name: "Generic monospace", license: "System", installable: false },

  "SF Pro": { name: "SF Pro", license: "Proprietary", installable: true, source: { name: "Apple Developer", url: "https://developer.apple.com/fonts/" }, notes: "Apple's system font. Free for Apple platforms." },
  "SF Pro Display": { name: "SF Pro Display", license: "Proprietary", installable: true, source: { name: "Apple Developer", url: "https://developer.apple.com/fonts/" } },
  "SF Pro Text": { name: "SF Pro Text", license: "Proprietary", installable: true, source: { name: "Apple Developer", url: "https://developer.apple.com/fonts/" } },
  "SF Mono": { name: "SF Mono", license: "Proprietary", installable: true, source: { name: "Apple Developer", url: "https://developer.apple.com/fonts/" }, notes: "Apple's monospace. Free for Apple platforms." },
  "Helvetica Neue": { name: "Helvetica Neue", license: "Proprietary", installable: false, source: { name: "Linotype", url: "https://www.myfonts.com/collections/neue-helvetica-font-linotype" }, notes: "Pre-installed on macOS/iOS. Commercial license required for redistribution." },
  "Helvetica": { name: "Helvetica", license: "Proprietary", installable: false, source: { name: "Linotype", url: "https://www.myfonts.com/collections/helvetica-font-linotype" }, notes: "Pre-installed on macOS/iOS." },
  "Arial": { name: "Arial", license: "System", installable: false, notes: "Pre-installed on Windows/macOS; no webfont download is needed." },
  "Verdana": { name: "Verdana", license: "Proprietary", installable: false, notes: "Microsoft system font." },
  "Times": { name: "Times", license: "Proprietary", installable: false, notes: "Pre-installed on macOS/Windows." },
  "Times New Roman": { name: "Times New Roman", license: "Proprietary", installable: false, notes: "Pre-installed on macOS/Windows." },
  "Georgia": { name: "Georgia", license: "Proprietary", installable: false, notes: "Pre-installed on macOS/Windows." },
  "Courier New": { name: "Courier New", license: "Proprietary", installable: false, notes: "Pre-installed on macOS/Windows." },
  "Monaco": { name: "Monaco", license: "System", installable: false, notes: "macOS pre-installed monospace." },
  "Menlo": { name: "Menlo", license: "System", installable: false, notes: "macOS pre-installed monospace." },
  "Consolas": { name: "Consolas", license: "Proprietary", installable: false, notes: "Microsoft system monospace (Windows)." },
  "Liberation Mono": { name: "Liberation Mono", license: "OFL", installable: true, source: { name: "GitHub · liberationfonts", url: "https://github.com/liberationfonts/liberation-fonts" }, notes: "Open-source metric-compatible alternative to Courier New." },

  // ─────────── Apple CJK ───────────
  "PingFang TC": { name: "PingFang TC", license: "System", installable: false, notes: "Apple system font for Traditional Chinese." },
  "PingFang SC": { name: "PingFang SC", license: "System", installable: false, notes: "Apple system font for Simplified Chinese." },
  "Hiragino Kaku Gothic ProN": { name: "Hiragino Kaku Gothic ProN", license: "System", installable: false, notes: "Apple system font for Japanese." },
  "Hiragino Sans": { name: "Hiragino Sans", license: "System", installable: false },
  "Apple LiGothic Medium": { name: "Apple LiGothic Medium", license: "System", installable: false, notes: "Legacy Apple Traditional Chinese font." },
  "Heiti TC": { name: "Heiti TC", license: "System", installable: false, notes: "Apple legacy Traditional Chinese." },
  "Heiti SC": { name: "Heiti SC", license: "System", installable: false, notes: "Apple legacy Simplified Chinese." },
  "Apple SD Gothic Neo": { name: "Apple SD Gothic Neo", license: "System", installable: false, notes: "Apple system font for Korean." },

  // ─────────── Microsoft CJK ───────────
  "Microsoft JhengHei": { name: "Microsoft JhengHei", license: "System", installable: false, notes: "Windows Traditional Chinese." },
  "Microsoft YaHei": { name: "Microsoft YaHei", license: "System", installable: false, notes: "Windows Simplified Chinese." },
  "Meiryo": { name: "Meiryo", license: "System", installable: false, notes: "Windows Japanese." },

  // ─────────── Google Fonts (OFL/Apache) ───────────
  "Inter": { name: "Inter", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Inter" }, notes: "Designed by Rasmus Andersson. Variable font with full weight range." },
  "Roboto": { name: "Roboto", license: "Apache 2.0", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Roboto" } },
  "Roboto Mono": { name: "Roboto Mono", license: "Apache 2.0", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Roboto+Mono" } },
  "Geist": { name: "Geist", license: "OFL", installable: true, source: { name: "Vercel", url: "https://vercel.com/font" }, notes: "Vercel's open-source typeface family." },
  "Geist Mono": { name: "Geist Mono", license: "OFL", installable: true, source: { name: "Vercel", url: "https://vercel.com/font" } },
  "Noto Sans": { name: "Noto Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans" } },
  "Noto Sans JP": { name: "Noto Sans JP", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+JP" } },
  "Noto Sans KR": { name: "Noto Sans KR", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+KR" } },
  "Noto Sans TC": { name: "Noto Sans TC", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+TC" } },
  "Noto Sans SC": { name: "Noto Sans SC", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+SC" } },
  "Noto Sans Thai": { name: "Noto Sans Thai", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+Thai" } },
  "Source Code Pro": { name: "Source Code Pro", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Source+Code+Pro" } },
  "SourceCodePro": { name: "Source Code Pro", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Source+Code+Pro" } },
  "JetBrains Mono": { name: "JetBrains Mono", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/JetBrains+Mono" } },
  "Playfair Display": { name: "Playfair Display", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Playfair+Display" } },
  "Work Sans": { name: "Work Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Work+Sans" } },
  "Manrope": { name: "Manrope", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Manrope" } },
  "Plus Jakarta Sans": { name: "Plus Jakarta Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Plus+Jakarta+Sans" } },
  "DM Sans": { name: "DM Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/DM+Sans" } },
  "DM Mono": { name: "DM Mono", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/DM+Mono" } },
  "IBM Plex Sans": { name: "IBM Plex Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/IBM+Plex+Sans" } },
  "IBM Plex Sans Variable": { name: "IBM Plex Sans Variable", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/IBM+Plex+Sans" }, notes: "Variable-axis version of IBM Plex Sans." },
  "IBM Plex Mono": { name: "IBM Plex Mono", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/IBM+Plex+Mono" } },
  "IBM Plex Serif": { name: "IBM Plex Serif", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/IBM+Plex+Serif" } },
  "Open Sans": { name: "Open Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Open+Sans" } },
  "Outfit": { name: "Outfit", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Outfit" } },
  "Poppins": { name: "Poppins", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Poppins" } },
  "Rubik": { name: "Rubik", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Rubik" } },
  "Inconsolata": { name: "Inconsolata", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Inconsolata" } },
  "Mona Sans": { name: "Mona Sans", license: "OFL", installable: true, source: { name: "GitHub", url: "https://github.com/github/mona-sans" }, notes: "GitHub's variable font, free and open." },
  "Open Runde": { name: "Open Runde", license: "OFL", installable: true, source: { name: "GitHub · raphaelbastide", url: "https://github.com/lauridskern/open-runde" }, notes: "Open-source rounded geometric sans." },
  "Space Mono": { name: "Space Mono", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Space+Mono" } },
  "Azeret Mono": { name: "Azeret Mono", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Azeret+Mono" } },
  "Commit Mono": { name: "Commit Mono", license: "OFL", installable: true, source: { name: "commitmono.com", url: "https://commitmono.com/" }, notes: "Free, open-source mono designed for code." },
  "Pretendard Variable": { name: "Pretendard Variable", license: "OFL", installable: true, source: { name: "GitHub · orioncactus/pretendard", url: "https://github.com/orioncactus/pretendard" }, notes: "Modern Korean variable font with full Latin coverage." },
  "Pretendard": { name: "Pretendard", license: "OFL", installable: true, source: { name: "GitHub · orioncactus/pretendard", url: "https://github.com/orioncactus/pretendard" } },
  "BAEMINWORK": { name: "BAEMINWORK", license: "Brand-proprietary", installable: false, source: { name: "Official Baemin 2.0 announcement", url: "https://www.woowahan.com/report/detail/975?page=1" }, notes: "Current Baemin app typeface (WORK), officially introduced in July 2025. Metadata is shown without a substitute live specimen." },
  "Cal Sans": { name: "Cal Sans", license: "OFL", installable: true, source: { name: "GitHub · calcom/font", url: "https://github.com/calcom/font" }, notes: "Cal.com's open-source display font." },
  "D-DIN": { name: "D-DIN", license: "OFL", installable: true, source: { name: "GitHub · datto", url: "https://github.com/datto/d-din" }, notes: "Open-source DIN clone, used by SpaceX." },
  "Tossface": { name: "Tossface", license: "OFL", installable: true, source: { name: "toss.im/tossface", url: "https://toss.im/tossface" }, notes: "Toss's open-source emoji font (3,500+ emojis). Source on GitHub: toss/tossface." },
  "Dammit Sans": { name: "Dammit Sans", license: "OFL", installable: true, source: { name: "GitHub · getsentry", url: "https://github.com/getsentry/dammit" }, notes: "Sentry's open-source brand font." },

  // ─────────── Brand-typeface (Vercel/Klim/Displaay/Dinamo etc., commercial license) ───────────
  "Söhne": { name: "Söhne", license: "Proprietary", installable: false, source: { name: "Klim Type Foundry", url: "https://klim.co.nz/retail-fonts/soehne/" }, notes: "Klim's flagship grotesk. Used by Stripe, Vercel, OpenAI." },
  "Söhne Mono": { name: "Söhne Mono", license: "Proprietary", installable: false, source: { name: "Klim Type Foundry", url: "https://klim.co.nz/retail-fonts/soehne-mono/" } },
  "Tiempos Text": { name: "Tiempos Text", license: "Proprietary", installable: false, source: { name: "Klim Type Foundry", url: "https://klim.co.nz/retail-fonts/tiempos-text/" } },
  "Domaine": { name: "Domaine", license: "Proprietary", installable: false, source: { name: "Klim Type Foundry", url: "https://klim.co.nz/retail-fonts/domaine-text/" } },
  "Roobert": { name: "Roobert", license: "Proprietary", installable: false, source: { name: "Displaay Type", url: "https://displaay.net/typeface/roobert/" }, notes: "Used by Clay." },
  "Roobert PRO": { name: "Roobert PRO", license: "Proprietary", installable: false, source: { name: "Displaay Type", url: "https://displaay.net/typeface/roobert/" }, notes: "Used by Miro. Displaay folded PRO into the main Roobert family page." },
  "Saans": { name: "Saans", license: "Proprietary", installable: false, source: { name: "Displaay Type", url: "https://displaay.net/typeface/saans/" }, notes: "Used by Intercom." },
  "Saans Mono": { name: "Saans Mono", license: "Proprietary", installable: false, source: { name: "Displaay Type", url: "https://displaay.net/typeface/saans/" } },
  "Matter": { name: "Matter", license: "Proprietary", installable: false, source: { name: "Displaay Type", url: "https://displaay.net/typeface/matter/" }, notes: "Used by Cal.com, Warp." },
  "Matter Mono": { name: "Matter Mono", license: "Proprietary", installable: false, source: { name: "Displaay Type", url: "https://displaay.net/typeface/matter/" } },
  "Matter SQ": { name: "Matter SQ", license: "Proprietary", installable: false, source: { name: "Displaay Type", url: "https://displaay.net/typeface/matter/" } },
  "GT Walsheim": { name: "GT Walsheim", license: "Proprietary", installable: false, source: { name: "Grilli Type", url: "https://www.grillitype.com/typeface/gt-walsheim" }, notes: "Used by Framer." },
  "GT Alpina": { name: "GT Alpina", license: "Proprietary", installable: false, source: { name: "Grilli Type", url: "https://www.grillitype.com/typeface/gt-alpina" }, notes: "Used by Zapier." },
  "Berkeley Mono": { name: "Berkeley Mono", license: "Proprietary", installable: false, source: { name: "US Graphics", url: "https://usgraphics.com/products/berkeley-mono" }, notes: "Used by Linear, OpenCode. Foundry moved from berkeleygraphics.com to usgraphics.com." },
  "Circular": { name: "Circular", license: "Proprietary", installable: false, source: { name: "Lineto", url: "https://lineto.com/typefaces/circular" }, notes: "Used by Spotify, Supabase." },
  "Aeonik Pro": { name: "Aeonik Pro", license: "Proprietary", installable: false, source: { name: "CoType Foundry", url: "https://www.cotypefoundry.com/font-family/aeonik" }, notes: "Used by Revolut." },
  "Degular Display": { name: "Degular Display", license: "Proprietary", installable: false, source: { name: "OHno Type", url: "https://ohnotype.co/fonts/degular/" }, notes: "Used by Zapier." },
  "Universal Sans": { name: "Universal Sans", license: "Proprietary", installable: false, notes: "Variable typeface system by Universal Thirst. Used by Tesla, x.ai. Foundry catalog page has moved — search 'Universal Sans Universal Thirst' for the current listing." },
  "Euclid Circular A": { name: "Euclid Circular A", license: "Proprietary", installable: false, source: { name: "Swiss Typefaces", url: "https://www.swisstypefaces.com/fonts/euclid/" } },
  "Akzidenz-Grotesk Std": { name: "Akzidenz-Grotesk Std", license: "Proprietary", installable: false, source: { name: "Berthold Types", url: "https://www.bertholdtypes.com/font/akzidenz-grotesk-be/" } },
  "PP Neue Montreal Mono": { name: "PP Neue Montreal Mono", license: "Proprietary", installable: false, source: { name: "Pangram Pangram", url: "https://pangrampangram.com/products/neue-montreal-mono" }, notes: "Used by Together AI." },
  "Haas": { name: "Haas Grot Display", license: "Proprietary", installable: false, source: { name: "Commercial Type", url: "https://commercialtype.com/catalog/neue_haas_grotesk" }, notes: "Used by Airtable." },
  "Haas Groot Disp": { name: "Haas Grot Display", license: "Proprietary", installable: false, source: { name: "Commercial Type", url: "https://commercialtype.com/catalog/neue_haas_grotesk" } },
  "ABC Diatype": { name: "ABC Diatype", license: "Proprietary", installable: false, source: { name: "ABC Dinamo", url: "https://abcdinamo.com/typefaces/diatype" }, notes: "Used by Composio and many crypto/AI brands." },
  "ABC Repro": { name: "ABC Repro", license: "Proprietary", installable: false, source: { name: "ABC Dinamo", url: "https://abcdinamo.com/typefaces/repro" } },
  "ABC Favorit": { name: "ABC Favorit", license: "Proprietary", installable: false, source: { name: "ABC Dinamo", url: "https://abcdinamo.com/typefaces/favorit" }, notes: "Used by Resend." },
  "Basier": { name: "Basier", license: "Proprietary", installable: false, source: { name: "Atipo Foundry", url: "https://www.atipofoundry.com/" }, notes: "Used by ClickHouse. Browse the Atipo Foundry catalog for Basier's current listing." },
  "Basier Square": { name: "Basier Square", license: "Proprietary", installable: false, source: { name: "Atipo Foundry", url: "https://www.atipofoundry.com/" }, notes: "Browse the Atipo Foundry catalog for the Basier family." },
  "Freigeist Neue": { name: "Freigeist Neue", license: "Proprietary", installable: false, source: { name: "TypeMates", url: "https://typemates.com/" }, notes: "Used by Replicate. Browse the TypeMates catalog for Freigeist's current listing." },
  "Unica77": { name: "Unica77", license: "Proprietary", installable: false, source: { name: "Lineto", url: "https://lineto.com/typefaces/unica77" }, notes: "Used by Cohere as a base for their custom variant." },
  "Messina Sans": { name: "Messina Sans", license: "Proprietary", installable: false, source: { name: "Luzi Type", url: "https://luzi-type.ch/messina-sans" }, notes: "Used by Superhuman. Mono subfamily ships inside Messina Sans." },
  "Messina Serif": { name: "Messina Serif", license: "Proprietary", installable: false, source: { name: "Luzi Type", url: "https://luzi-type.ch/messina-serif" } },
  "Messina Mono": { name: "Messina Mono", license: "Proprietary", installable: false, source: { name: "Luzi Type", url: "https://luzi-type.ch/messina-sans" }, notes: "Mono weights are part of the Messina Sans family." },
  "JJannon": { name: "JJannon", license: "Proprietary", installable: false, notes: "Used by Cursor as a serif accent. Foundry catalog page is not currently available — check Production Type's current catalog for availability." },

  // ─────────── Brand-proprietary (NOT publicly distributed) ───────────
  "Airbnb Cereal VF": { name: "Airbnb Cereal VF", license: "Brand-proprietary", installable: false, notes: "Airbnb's internal typeface. Not publicly distributed; do not render or label a substitute as Airbnb Cereal." },
  "Pin Sans": { name: "Pin Sans", license: "Brand-proprietary", installable: false, notes: "Pinterest's custom typeface. Not publicly distributed." },
  "NVIDIA-EMEA": { name: "NVIDIA Sans (EMEA)", license: "Brand-proprietary", installable: false, notes: "NVIDIA's brand typeface. Not publicly distributed." },
  "Notion Inter": { name: "Notion Inter (modified)", license: "OFL", installable: true, source: { name: "Use Inter (Google Fonts)", url: "https://fonts.google.com/specimen/Inter" }, notes: "Notion uses a slightly customized Inter — install standard Inter as a near-perfect match." },
  "Toss Product Sans": { name: "Toss Product Sans", license: "Brand-proprietary", installable: false, notes: "Toss's brand typeface. Not publicly distributed — internal use only per Toss's brand system." },
  "Camera Plain Variable": { name: "Camera Plain Variable", license: "Brand-proprietary", installable: false, notes: "Lovable's brand typeface. Not publicly distributed." },
  "The Future": { name: "The Future", license: "Brand-proprietary", installable: false, notes: "Together AI's brand typeface. Not publicly distributed." },
  "freee-logo": { name: "freee-logo (Noto Sans CJK JP Medium)", license: "OFL", installable: true, source: { name: "Use Noto Sans JP", url: "https://fonts.google.com/noto/specimen/Noto+Sans+JP" }, notes: "freee's brand wordmark uses Noto Sans CJK JP Medium loaded explicitly." },

  "Coinbase Display": { name: "Coinbase Display", license: "Brand-proprietary", installable: false, notes: "Coinbase's custom typeface. Not publicly distributed." },
  "Coinbase Sans": { name: "Coinbase Sans", license: "Brand-proprietary", installable: false, notes: "Coinbase's custom typeface. Not publicly distributed." },
  "Coinbase Text": { name: "Coinbase Text", license: "Brand-proprietary", installable: false, notes: "Coinbase's custom typeface. Not publicly distributed." },
  "Coinbase Icons": { name: "Coinbase Icons", license: "Brand-proprietary", installable: false, notes: "Internal icon font." },

  "Cohere Text": { name: "Cohere Text", license: "Brand-proprietary", installable: false, notes: "Cohere's custom typeface (built on Unica77). Not publicly distributed." },
  "Cohere Mono": { name: "Cohere Mono", license: "Brand-proprietary", installable: false },
  "Cohere Icon": { name: "Cohere Icon", license: "Brand-proprietary", installable: false, notes: "Internal icon font." },

  "Cursor Gothic": { name: "Cursor Gothic", license: "Brand-proprietary", installable: false, notes: "Cursor's custom display typeface. Not publicly distributed." },
  "Cursor Icons": { name: "Cursor Icons", license: "Brand-proprietary", installable: false, notes: "Internal icon font." },

  "Waldenburg": { name: "Waldenburg", license: "Proprietary", installable: false, source: { name: "Lineto", url: "https://lineto.com/typefaces/waldenburg" }, notes: "Used by ElevenLabs and Sanity." },

  "Figma Sans": { name: "Figma Sans", license: "Brand-proprietary", installable: false, notes: "Figma's custom typeface. Not publicly distributed." },
  "Figma Mono": { name: "Figma Mono", license: "Brand-proprietary", installable: false },

  "HashiCorp Sans": { name: "HashiCorp Sans", license: "Brand-proprietary", installable: false, notes: "HashiCorp's brand sans. Not publicly distributed." },

  "Anthropic Sans": { name: "Anthropic Sans", license: "Brand-proprietary", installable: false, notes: "Anthropic's brand typeface. Not publicly distributed." },
  "Anthropic Serif": { name: "Anthropic Serif", license: "Brand-proprietary", installable: false },
  "Anthropic Mono": { name: "Anthropic Mono", license: "Brand-proprietary", installable: false },

  "Kraken Brand": { name: "Kraken Brand", license: "Brand-proprietary", installable: false, notes: "Kraken's custom display typeface. Not publicly distributed." },
  "Kraken Product": { name: "Kraken Product", license: "Brand-proprietary", installable: false, notes: "Kraken's custom UI typeface. Not publicly distributed." },

  "MongoDB Value Serif": { name: "MongoDB Value Serif", license: "Brand-proprietary", installable: false, notes: "MongoDB's custom serif. Not publicly distributed." },

  "BMWTypeNext": { name: "BMW TypeNext", license: "Brand-proprietary", installable: false, notes: "BMW's brand typeface. Not publicly distributed." },
  "LamboType": { name: "LamboType", license: "Brand-proprietary", installable: false, notes: "Lamborghini's brand typeface. Not publicly distributed." },

  "Spotify Mix": { name: "Spotify Mix", license: "Brand-proprietary", installable: false, notes: "Spotify's brand UI typeface. Not publicly distributed." },
  "Uber Move": { name: "Uber Move", license: "Brand-proprietary", installable: false, notes: "Uber's brand typeface. Not publicly distributed." },
  "Wise Sans": { name: "Wise Sans", license: "Brand-proprietary", installable: false, notes: "Wise's brand typeface. Not publicly distributed." },
  "Super Sans VF": { name: "Super Sans VF", license: "Brand-proprietary", installable: false, notes: "Superhuman's brand typeface. Not publicly distributed." },

  "Font Awesome 6 Pro": { name: "Font Awesome 6 Pro", license: "Proprietary", installable: true, source: { name: "Font Awesome", url: "https://fontawesome.com/" }, notes: "Commercial icon font (subscription required)." },
  "Font Awesome 6 Sharp": { name: "Font Awesome 6 Sharp", license: "Proprietary", installable: true, source: { name: "Font Awesome", url: "https://fontawesome.com/" } },

  "WF Visual Sans Variable": { name: "WF Visual Sans Variable", license: "Brand-proprietary", installable: false, notes: "Webflow's brand typeface. Not publicly distributed." },
};

/** Strip quotes / CSS keywords; collapse to canonical name via NORMALIZE map. */
function normalize(token: string): string {
  const cleaned = token.replace(/['"]/g, "").replace(/[;].*/, "").trim();
  return NORMALIZE[cleaned] ?? cleaned;
}

/** Look up a font in the registry. Returns a "Generic" fallback if not found. */
export function lookupFont(token: string): FontInfo {
  const key = normalize(token);
  return (
    FONT_REGISTRY[key] ?? {
      name: key,
      license: "Brand-proprietary",
      installable: false,
      notes: "Not in the OMD font registry. Likely a brand-proprietary typeface — check the brand's own design site for source/availability.",
    }
  );
}

/** Parse a CSS font-family stack and return the canonical fonts in order, deduped. */
export function parseFontStack(stack: string): FontInfo[] {
  const tokens = stack.split(",").map(normalize).filter(Boolean);
  const seen = new Set<string>();
  const result: FontInfo[] = [];
  for (const t of tokens) {
    const info = lookupFont(t);
    if (seen.has(info.name)) continue;
    seen.add(info.name);
    result.push(info);
    if (result.length >= 6) break;
  }
  return result;
}

/** Return whether a normalized font name is registered (vs. defaulting to "not found"). */
export function isRegistered(token: string): boolean {
  return Boolean(FONT_REGISTRY[normalize(token)]);
}

/** Public canonicalization: map a raw font token to its canonical registry name
 *  (e.g. "SFMono-Regular" → "SF Mono"). Used by extract-tokens.ts to dedupe
 *  font mentions AFTER canonicalization so a single font stack that lists both
 *  a variant and its canonical name ("SF Mono, SFMono-Regular, …") doesn't
 *  render two identical cards. */
export function canonicalFontName(token: string): string {
  return normalize(token);
}

/* ─────────── Font resolution (frontmatter → prose → honest fallback) ─────────── */

const HEX_RE = /^#[0-9a-f]{3,8}$/i;
const KEYWORD_RE = /^(serif|sans-serif|monospace|var|inherit|system-ui|ui-sans-serif|ui-monospace|ui-serif|none)$/i;
/** Tokens that, when leading a stack, mark it as an OS-native (system) stack. */
const SYSTEM_STACK_LEADERS = /^(?:-apple-system|system-ui|BlinkMacSystemFont|ui-sans-serif|ui-monospace|ui-serif)$/i;
/** Korean/JP/legacy system faces that lead a native OS stack (baemin, naver, …). */
const SYSTEM_CJK_LEADERS = /^(?:Apple SD Gothic Neo|Malgun Gothic|Helvetica Neue)$/i;

function isValidFontName(s: string): boolean {
  if (!s || s.length > 50) return false;
  if (HEX_RE.test(s)) return false;
  if (KEYWORD_RE.test(s)) return false;
  return true;
}

function stackTokens(stack: string): string[] {
  return stack.split(",").map((t) => t.replace(/['"`]/g, "").trim()).filter(Boolean);
}

/** True when a CSS font stack is an OS-native (system) stack rather than a
 *  brand/web font — e.g. "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic
 *  Neo', 'Noto Sans KR', sans-serif". Detected so the UI can render a
 *  "System UI stack" card instead of confidently misattributing a web font. */
export function isSystemFontStack(stack: string): boolean {
  const tokens = stackTokens(stack);
  if (!tokens.length) return false;
  const lead = tokens[0];
  if (SYSTEM_STACK_LEADERS.test(lead)) return true;
  // A CJK-led stack counts as "system" only when it's chained with a system
  // keyword (so "Noto Sans KR, sans-serif" alone — a real webfont — doesn't
  // get swallowed, but "Apple SD Gothic Neo, -apple-system, …" does).
  if (SYSTEM_CJK_LEADERS.test(lead) && tokens.some((t) => SYSTEM_STACK_LEADERS.test(t))) return true;
  return false;
}

/** First non-generic font token in a stack, quotes stripped. Falls back to the
 *  literal first token when every entry is a generic keyword. */
function firstFontToken(stack: string): string {
  const tokens = stackTokens(stack);
  for (const t of tokens) {
    if (!KEYWORD_RE.test(t)) return t;
  }
  return tokens[0] ?? "";
}

/** Resolve a family stack to a display value: "System" for OS stacks, else the
 *  first real font name. Never returns a blind 'Inter'. */
function resolveFamilyValue(stack: string): string | null {
  if (isSystemFontStack(stack)) return "System";
  const tok = firstFontToken(stack);
  return isValidFontName(tok) ? tok : null;
}

/** Split a YAML flow-object body on top-level commas, honoring both single and
 *  double quotes (a value may itself contain commas inside quotes). */
function splitFlowCommas(s: string): string[] {
  const out: string[] = [];
  let quote = "";
  let cur = "";
  for (const ch of s) {
    if (quote) { cur += ch; if (ch === quote) quote = ""; continue; }
    if (ch === '"' || ch === "'") { quote = ch; cur += ch; continue; }
    if (ch === ",") { out.push(cur); cur = ""; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out;
}

/** Parse the `tokens.typography.family` inline object from DESIGN.md YAML
 *  frontmatter into a { key: value } map (ui / sans / body / mono / brand /
 *  display / playful / …). Returns null when there's no frontmatter family
 *  block. Hand-parsed (no YAML dep) to match how componentsFromTokens reads
 *  the flow-style tokens block. */
function parseFrontmatterFamily(md: string): Record<string, string> | null {
  if (!md.startsWith("---")) return null;
  const fmEnd = md.indexOf("\n---", 3);
  if (fmEnd === -1) return null;
  const fm = md.slice(0, fmEnd);
  const m = fm.match(/^\s*family:\s*\{([^}]*)\}/m);
  if (!m) return null;
  const obj: Record<string, string> = {};
  for (const pair of splitFlowCommas(m[1])) {
    const i = pair.indexOf(":");
    if (i === -1) continue;
    const k = pair.slice(0, i).trim().replace(/['"]/g, "");
    const v = pair.slice(i + 1).trim().replace(/^['"]|['"]$/g, "");
    if (k && v) obj[k] = v;
  }
  return Object.keys(obj).length ? obj : null;
}

function sec3Of(md: string): string {
  return md.match(/## 3\. Typography[\s\S]*?(?=## 4\.)/i)?.[0] ?? md;
}

/** §3-prose primary-font fallback. Mirrors the historical route.ts patterns but
 *  (a) recognizes system stacks → "System", and (b) NEVER returns a blind
 *  'Inter' — an unresolved doc yields the honest "System" (OS default) sentinel
 *  instead of misattributing Rasmus Andersson's Inter. Legit Inter written in
 *  prose (e.g. "**Primary**: `Inter`") still resolves to Inter. */
function primaryFromProse(md: string): string {
  const sec3 = sec3Of(md);

  // 1. **… Primary …** label (tolerates a qualifier: "**UI Primary**")
  const primary = sec3.match(/\*\*([^*]*\bPrimary[^*]*)\*\*:?\s*`([^`]+)`/i);
  if (primary) { const r = resolveFamilyValue(primary[2]); if (r) return r; }

  // 2. **Display** / **Sans** / **Heading** / **Body** label
  const display = sec3.match(/\*\*([^*]*\b(?:Display|Sans|Heading|Body)[^*]*)\*\*:?\s*`([^`]+)`/i);
  if (display) { const r = resolveFamilyValue(display[2]); if (r) return r; }

  // 3. font-family declaration
  for (const m of sec3.matchAll(/font-family:\s*([^;\n]+)/gi)) {
    const r = resolveFamilyValue(m[1]);
    if (r) return r;
  }

  // 4. First capitalized backticked font name (heuristic)
  for (const m of sec3.matchAll(/`([A-Z][A-Za-z][\w\s\-]{2,40})`/g)) {
    const name = m[1].trim();
    if (name.length > 35) continue;
    if (/^(?:Display|Heading|Body|Caption|Small|Large|Medium|Regular|Bold|Light|Italic|Mono|Sans|Serif|Variable|Pro|UI|Inter Placeholder|Inter Fallback|Fallback|XS|S|M|L|XL|XXL|SemiBold|ExtraBold|Black|Thin)$/i.test(name)) continue;
    if (/^[0-9]/.test(name)) continue;
    if (isValidFontName(name)) return name;
  }

  // Honest fallback — the OS default. Never 'Inter'.
  return "System";
}

function monoFromProse(md: string): string | undefined {
  const sec3 = sec3Of(md);
  const m = sec3.match(/\*\*([^*]*\bMono(?:space)?[^*]*)\*\*:?\s*`([^`]+)`/i);
  if (m) { const tok = firstFontToken(m[2]); if (isValidFontName(tok)) return tok; }
  return undefined;
}

function brandFromProse(md: string): string | undefined {
  const sec3 = sec3Of(md);
  const m = sec3.match(/\*\*([^*]*\b(?:Brand|Display)[^*]*)\*\*:?\s*`([^`]+)`/i);
  if (m && !isSystemFontStack(m[2])) { const tok = firstFontToken(m[2]); if (isValidFontName(tok)) return tok; }
  return undefined;
}

export interface ResolvedFonts {
  /** Primary/UI family. "System" for OS-native stacks; a real font name
   *  otherwise. Never a blind 'Inter' guess. */
  family: string;
  /** Monospace family, when the ref declares one. */
  mono?: string;
  /** Brand / display / playful family (e.g. "BMHANNA Pro"), when distinct from
   *  the UI family. Surfaced so the UI can show a dedicated brand-font card. */
  brand?: string;
}

/** Single source of truth for resolving a reference's fonts from its DESIGN.md.
 *  Resolution order:
 *    1. YAML frontmatter `tokens.typography.family` (machine-readable truth)
 *    2. §3 Typography prose patterns (legacy fallback)
 *    3. Honest "System" sentinel — NEVER a blind 'Inter'.
 *  Used by the reference API route and the SSR showcase pages so every surface
 *  agrees and no path silently invents Inter. */
export function resolveFontsFromDesignMd(md: string): ResolvedFonts {
  const fam = parseFrontmatterFamily(md);
  let family: string | undefined;
  let mono: string | undefined;
  let brand: string | undefined;

  if (fam) {
    const uiRaw = fam.ui ?? fam.sans ?? fam.body ?? fam.primary ?? fam.text ?? fam.default ?? fam.base;
    if (uiRaw) family = resolveFamilyValue(uiRaw) ?? undefined;
    if (fam.mono) { const t = firstFontToken(fam.mono); if (isValidFontName(t)) mono = t; }
    const brandRaw = fam.brand ?? fam.display ?? fam.playful ?? fam.heading;
    if (brandRaw && !isSystemFontStack(brandRaw)) { const t = firstFontToken(brandRaw); if (isValidFontName(t)) brand = t; }
    // If frontmatter had no UI family but did name a display/brand face, fall
    // back to it as the family so we don't drop to the prose scan needlessly.
    if (!family && brand) family = brand;
  }

  if (!family) family = primaryFromProse(md);
  if (!mono) mono = monoFromProse(md);
  if (!brand) brand = brandFromProse(md);
  // Never surface the brand as a duplicate of the resolved family.
  if (brand && (brand === family || canonicalFontName(brand) === canonicalFontName(family))) brand = undefined;

  return { family, mono, brand };
}
