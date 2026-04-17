/**
 * Per-font metadata: license, install source, and friendly notes.
 *
 * Looked up by canonical font name (the FIRST font in a CSS font-family stack
 * after stripping quotes). Falls back to a "Generic" entry if not found.
 *
 * License labels:
 *   - "OFL"            → SIL Open Font License (Google Fonts default)
 *   - "Apache 2.0"     → Apache (Roboto, Noto)
 *   - "Proprietary"    → commercial license required
 *   - "System"         → pre-installed on the OS, no separate install
 */

export type FontLicense = "OFL" | "Apache 2.0" | "Proprietary" | "System" | "Mixed";

export interface FontInfo {
  name: string;
  license: FontLicense;
  /** True if user can install (download) this font themselves. False for system-only or fully proprietary. */
  installable: boolean;
  source?: { name: string; url: string };
  notes?: string;
}

const FONT_REGISTRY: Record<string, FontInfo> = {
  // ── System / Apple ──
  "-apple-system": { name: "Apple System", license: "System", installable: false, notes: "macOS/iOS default — uses SF Pro automatically." },
  BlinkMacSystemFont: { name: "Apple System (Blink)", license: "System", installable: false, notes: "Chrome alias for Apple system font on macOS." },
  "system-ui": { name: "System UI", license: "System", installable: false, notes: "Generic OS-default font keyword." },
  "SF Pro": { name: "SF Pro", license: "Proprietary", installable: true, source: { name: "Apple Developer", url: "https://developer.apple.com/fonts/" }, notes: "Free for Apple-platform apps; restricted commercial use elsewhere." },
  SFPro: { name: "SF Pro", license: "Proprietary", installable: true, source: { name: "Apple Developer", url: "https://developer.apple.com/fonts/" }, notes: "Free for Apple-platform apps; restricted commercial use elsewhere." },
  "SF Pro Display": { name: "SF Pro Display", license: "Proprietary", installable: true, source: { name: "Apple Developer", url: "https://developer.apple.com/fonts/" } },
  "SF Pro Text": { name: "SF Pro Text", license: "Proprietary", installable: true, source: { name: "Apple Developer", url: "https://developer.apple.com/fonts/" } },
  "Helvetica Neue": { name: "Helvetica Neue", license: "Proprietary", installable: false, source: { name: "Linotype / Monotype", url: "https://www.linotype.com/2090/helvetica-neue-family.html" }, notes: "Pre-installed on macOS/iOS. Commercial license required for redistribution." },
  Helvetica: { name: "Helvetica", license: "Proprietary", installable: false, source: { name: "Linotype / Monotype", url: "https://www.linotype.com/1308/helvetica-family.html" }, notes: "System font on macOS/iOS." },
  Arial: { name: "Arial", license: "Proprietary", installable: false, notes: "Pre-installed on Windows/macOS via Microsoft." },
  Verdana: { name: "Verdana", license: "Proprietary", installable: false, notes: "Microsoft system font." },

  // ── Apple CJK ──
  "PingFang TC": { name: "PingFang TC", license: "System", installable: false, notes: "Apple system font for Traditional Chinese (macOS/iOS)." },
  "PingFang SC": { name: "PingFang SC", license: "System", installable: false, notes: "Apple system font for Simplified Chinese (macOS/iOS)." },
  "Hiragino Kaku Gothic ProN": { name: "Hiragino Kaku Gothic ProN", license: "System", installable: false, notes: "Apple system font for Japanese (macOS/iOS)." },
  "Hiragino Sans": { name: "Hiragino Sans", license: "System", installable: false, notes: "Apple system font for Japanese." },
  "ヒラギノ角ゴ ProN": { name: "Hiragino Kaku Gothic ProN", license: "System", installable: false, notes: "Apple system font for Japanese (macOS/iOS)." },
  "Apple LiGothic Medium": { name: "Apple LiGothic Medium", license: "System", installable: false, notes: "Legacy Apple Traditional Chinese font." },
  "Heiti TC": { name: "Heiti TC", license: "System", installable: false, notes: "Apple legacy Traditional Chinese system font." },
  "Heiti SC": { name: "Heiti SC", license: "System", installable: false, notes: "Apple legacy Simplified Chinese system font." },

  // ── Microsoft CJK ──
  "Microsoft JhengHei": { name: "Microsoft JhengHei", license: "System", installable: false, notes: "Windows system font for Traditional Chinese." },
  "Microsoft YaHei": { name: "Microsoft YaHei", license: "System", installable: false, notes: "Windows system font for Simplified Chinese." },
  Meiryo: { name: "Meiryo", license: "System", installable: false, notes: "Windows system font for Japanese." },
  "メイリオ": { name: "Meiryo", license: "System", installable: false, notes: "Windows system font for Japanese." },
  "微軟正黑體": { name: "Microsoft JhengHei", license: "System", installable: false, notes: "Windows system font for Traditional Chinese." },
  "黑體-繁": { name: "Heiti TC", license: "System", installable: false, notes: "Apple legacy Traditional Chinese." },

  // ── Google Fonts (open-source) ──
  Inter: { name: "Inter", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Inter" }, notes: "Designed by Rasmus Andersson — also at rsms.me/inter." },
  Roboto: { name: "Roboto", license: "Apache 2.0", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Roboto" } },
  "Roboto Mono": { name: "Roboto Mono", license: "Apache 2.0", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Roboto+Mono" } },
  Geist: { name: "Geist", license: "OFL", installable: true, source: { name: "Vercel", url: "https://vercel.com/font" }, notes: "Vercel's open-source typeface family." },
  "Geist Mono": { name: "Geist Mono", license: "OFL", installable: true, source: { name: "Vercel", url: "https://vercel.com/font" } },
  "Noto Sans JP": { name: "Noto Sans JP", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+JP" }, notes: "Comprehensive Japanese coverage; pairs with Latin Noto Sans." },
  "Noto Sans KR": { name: "Noto Sans KR", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+KR" } },
  "Noto Sans TC": { name: "Noto Sans TC", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+TC" } },
  "Noto Sans SC": { name: "Noto Sans SC", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+SC" } },
  "Noto Sans Thai": { name: "Noto Sans Thai", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+Thai" } },
  "Source Code Pro": { name: "Source Code Pro", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Source+Code+Pro" } },
  SourceCodePro: { name: "Source Code Pro", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Source+Code+Pro" } },
  "JetBrains Mono": { name: "JetBrains Mono", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/JetBrains+Mono" } },
  "Playfair Display": { name: "Playfair Display", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Playfair+Display" } },
  "Work Sans": { name: "Work Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Work+Sans" } },
  Manrope: { name: "Manrope", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Manrope" } },
  Plus_Jakarta_Sans: { name: "Plus Jakarta Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Plus+Jakarta+Sans" } },
  "Plus Jakarta Sans": { name: "Plus Jakarta Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Plus+Jakarta+Sans" } },
  "DM Sans": { name: "DM Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/DM+Sans" } },
  "DM Mono": { name: "DM Mono", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/DM+Mono" } },
  "IBM Plex Sans": { name: "IBM Plex Sans", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/IBM+Plex+Sans" } },
  "IBM Plex Mono": { name: "IBM Plex Mono", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/IBM+Plex+Mono" } },
  "Noto Sans CJK JP": { name: "Noto Sans CJK JP", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+JP" } },

  // ── Brand-proprietary (Klim, Klingspor, etc.) ──
  "sohne-var": { name: "Söhne", license: "Proprietary", installable: false, source: { name: "Klim Type Foundry", url: "https://klim.co.nz/retail-fonts/soehne/" }, notes: "Stripe's brand typeface. Commercial license required." },
  "Söhne": { name: "Söhne", license: "Proprietary", installable: false, source: { name: "Klim Type Foundry", url: "https://klim.co.nz/retail-fonts/soehne/" }, notes: "Used by Stripe, Vercel marketing, OpenAI." },
  "Söhne Mono": { name: "Söhne Mono", license: "Proprietary", installable: false, source: { name: "Klim Type Foundry", url: "https://klim.co.nz/retail-fonts/soehne/" } },
  "Inter Display": { name: "Inter Display", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Inter" } },
  "Tiempos Text": { name: "Tiempos Text", license: "Proprietary", installable: false, source: { name: "Klim Type Foundry", url: "https://klim.co.nz/retail-fonts/tiempos-text/" } },
  "freee-logo": { name: "freee-logo (Noto Sans CJK JP Medium)", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/noto/specimen/Noto+Sans+JP" }, notes: "freee's brand wordmark uses Noto Sans CJK JP Medium loaded explicitly." },

  // ── Open-source community fonts ──
  "Pretendard Variable": { name: "Pretendard Variable", license: "OFL", installable: true, source: { name: "GitHub · orioncactus/pretendard", url: "https://github.com/orioncactus/pretendard" }, notes: "Modern Korean variable font with full Latin coverage. Used by Karrot." },
  Pretendard: { name: "Pretendard", license: "OFL", installable: true, source: { name: "GitHub · orioncactus/pretendard", url: "https://github.com/orioncactus/pretendard" } },
  "Space Mono": { name: "Space Mono", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Space+Mono" } },
  "Azeret Mono": { name: "Azeret Mono", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Azeret+Mono" } },
  commitMono: { name: "Commit Mono", license: "OFL", installable: true, source: { name: "commitmono.com", url: "https://commitmono.com/" }, notes: "Free, open-source mono designed for code." },
  "Commit Mono": { name: "Commit Mono", license: "OFL", installable: true, source: { name: "commitmono.com", url: "https://commitmono.com/" } },

  // ── Apple monospace ──
  "SF Mono": { name: "SF Mono", license: "Proprietary", installable: true, source: { name: "Apple Developer", url: "https://developer.apple.com/fonts/" }, notes: "Apple system mono. Free for Apple platforms." },
  Monaco: { name: "Monaco", license: "System", installable: false, notes: "macOS pre-installed monospace font." },
  Menlo: { name: "Menlo", license: "System", installable: false, notes: "macOS pre-installed monospace font." },
  "ui-monospace": { name: "UI Monospace", license: "System", installable: false, notes: "CSS keyword — falls back to the OS default monospace (SF Mono on macOS, Consolas on Windows, etc.)." },

  // ── Commercial brand typefaces (foundry-licensed) ──
  Roobert: { name: "Roobert", license: "Proprietary", installable: false, source: { name: "Displaay Type Foundry", url: "https://displaay.net/typeface/roobert/" }, notes: "Commercial. Used by Clay." },
  abcDiatype: { name: "ABC Diatype", license: "Proprietary", installable: false, source: { name: "ABC Dinamo", url: "https://abcdinamo.com/typefaces/diatype" }, notes: "Commercial. Used by Composio and many crypto/AI brands." },
  "ABC Diatype": { name: "ABC Diatype", license: "Proprietary", installable: false, source: { name: "ABC Dinamo", url: "https://abcdinamo.com/typefaces/diatype" } },
  Saans: { name: "Saans", license: "Proprietary", installable: false, source: { name: "Displaay Type Foundry", url: "https://displaay.net/typeface/saans/" }, notes: "Commercial. Used by Intercom." },
  SaansMono: { name: "Saans Mono", license: "Proprietary", installable: false, source: { name: "Displaay Type Foundry", url: "https://displaay.net/typeface/saans/" } },
  "Saans Mono": { name: "Saans Mono", license: "Proprietary", installable: false, source: { name: "Displaay Type Foundry", url: "https://displaay.net/typeface/saans/" } },
  "Berkeley Mono": { name: "Berkeley Mono", license: "Proprietary", installable: false, source: { name: "Berkeley Graphics", url: "https://berkeleygraphics.com/typefaces/berkeley-mono/" }, notes: "Commercial. Used by Linear." },
  Circular: { name: "Circular", license: "Proprietary", installable: false, source: { name: "Lineto", url: "https://lineto.com/typefaces/circular" }, notes: "Commercial. Used by Spotify, Supabase. License via Lineto." },
  Haas: { name: "Haas Grot Display", license: "Proprietary", installable: false, source: { name: "Commercial Type", url: "https://commercialtype.com/catalog/neue_haas_grotesk" }, notes: "Commercial. Used by Airtable." },
  "abcRepro": { name: "ABC Repro", license: "Proprietary", installable: false, source: { name: "ABC Dinamo", url: "https://abcdinamo.com/typefaces/repro" } },

  // ── Brand-proprietary (no public license) ──
  "Airbnb Cereal VF": { name: "Airbnb Cereal VF", license: "Proprietary", installable: false, notes: "Airbnb internal typeface — not publicly distributed. Use Inter as the closest open-source substitute." },
  figmaSans: { name: "Figma Sans", license: "Proprietary", installable: false, notes: "Figma's custom typeface — not publicly distributed. Use Inter as a substitute." },
  "Figma Sans": { name: "Figma Sans", license: "Proprietary", installable: false, notes: "Figma's custom typeface — not publicly distributed." },
  NotionInter: { name: "Notion Inter (modified)", license: "OFL", installable: true, source: { name: "Google Fonts (use Inter)", url: "https://fonts.google.com/specimen/Inter" }, notes: "Notion's slightly customized Inter — install standard Inter from Google Fonts as a near-perfect match." },
  "NVIDIA-EMEA": { name: "NVIDIA Sans (EMEA)", license: "Proprietary", installable: false, notes: "NVIDIA's brand typeface — not publicly distributed." },
  "Pin Sans": { name: "Pin Sans", license: "Proprietary", installable: false, notes: "Pinterest's custom typeface — not publicly distributed." },
  "Toss Product Sans": { name: "Toss Product Sans", license: "Proprietary", installable: true, source: { name: "Toss Brand", url: "https://toss.im/tossface" }, notes: "Toss's brand typeface. Restricted use — check Toss brand guidelines." },
  "Camera Plain Variable": { name: "Camera Plain Variable", license: "Proprietary", installable: false, notes: "Lovable's brand typeface — not publicly distributed." },
  "The Future": { name: "The Future", license: "Proprietary", installable: false, notes: "Together.ai brand typeface — restricted distribution." },
  "Inter Variable": { name: "Inter Variable", license: "OFL", installable: true, source: { name: "Google Fonts", url: "https://fonts.google.com/specimen/Inter" }, notes: "The variable-weight version of Inter (single file covers all weights)." },
  GeistMono: { name: "Geist Mono", license: "OFL", installable: true, source: { name: "Vercel", url: "https://vercel.com/font" } },

  // ── Generic fallbacks ──
  "sans-serif": { name: "Generic sans-serif", license: "System", installable: false, notes: "CSS keyword — falls back to the OS default sans-serif." },
  "serif": { name: "Generic serif", license: "System", installable: false },
  "monospace": { name: "Generic monospace", license: "System", installable: false },
};

/** Strip quotes and CSS keywords from a font-family token. */
function normalize(token: string): string {
  return token.replace(/['"]/g, "").trim();
}

/** Look up a font in the registry. Returns a "Generic" fallback if not found. */
export function lookupFont(token: string): FontInfo {
  const key = normalize(token);
  return (
    FONT_REGISTRY[key] ?? {
      name: key,
      license: "Proprietary",
      installable: false,
      notes: "Not in the OMD font registry. Check the brand's own design site for the source.",
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
