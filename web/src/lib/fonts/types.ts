/**
 * Font Playground — catalog types.
 *
 * Each FontEntry is a curated OFL / libre-licensed font family. The catalog
 * is hand-maintained (not auto-scraped) so tag quality stays high for
 * reference-based discovery.
 */

export type FontScript = "latin" | "hangul" | "japanese" | "chinese";
export type FontFamily =
  | "sans"
  | "serif"
  | "mono"
  | "display"
  | "handwritten";
/** Free-form license tag. Displayed verbatim in the UI. Common values:
 *  "OFL-1.1", "Apache-2.0", "UFL-1.0", or foundry-specific free licenses
 *  (e.g., "BM — free for commercial use", "YG — 상업적 사용 허용"). The
 *  playground curates and points at source; no redistribution, so permissive
 *  free-use licenses are all acceptable. */
export type FontLicense = string;

/** Registered or custom axis of a variable font. */
export interface FontAxis {
  /** OpenType tag, e.g. "wght", "wdth", "CASL". */
  tag: string;
  /** Display name, e.g. "Weight". */
  name: string;
  min: number;
  max: number;
  /** Value used as the tile-preview default. */
  default: number;
}

/** How the font is loaded into the page. */
export type FontLoader =
  | {
      kind: "google";
      /** Full Google Fonts css2 `family=` segment (URL-encoded, keeps axis specs).
       *  Example: `Inter:wght@100..900` or `Fraunces:ital,opsz,wght@0..1,9..144,100..900`. */
      family: string;
    }
  | {
      kind: "jsdelivr";
      /** Raw @font-face CSS to inject. Used for fonts not on Google Fonts
       *  (Gmarket Sans, Galmuri, etc.) — pulled from jsdelivr / unpkg. */
      fontFaceCss: string;
    };

export interface FontEntry {
  id: string;
  name: string;
  family: FontFamily;
  scripts: FontScript[];
  /** CSS `font-family` value (quoted string). */
  cssFamily: string;
  /** True if the font has variable axes. */
  variable: boolean;
  /** Defined axes for variable fonts. Empty when variable=false. */
  axes: FontAxis[];
  /** Static weights available when variable=false. */
  weights?: number[];
  license: FontLicense;
  /** Upstream repo / canonical page. */
  source: string;
  /** One-sentence editorial description. */
  description: string;
  /** How to load the font at runtime. */
  loader: FontLoader;
  /** Tags drive filtering + Phase 3 reference matching. */
  tags: {
    /** Register — playful/warm/sharp/luxurious/editorial/technical/etc. */
    mood: string[];
    /** Era — 2020s, 1970s, timeless, retro. Phase 3 uses this heavily. */
    era: string[];
    /** Intended use — ui, body, display, heading, logo, code, caption. */
    use: string[];
    /** Personality — professional, approachable, quirky, serious, friendly. */
    personality: string[];
  };
  /** Sample copy shown on the tile per script. */
  sampleText: Partial<Record<FontScript, string>>;
  /** Designer / foundry attribution shown in detail view. */
  designer?: string;
}

/** Runtime selection state for a single font (axis values, etc.). */
export interface FontSelection {
  fontId: string;
  /** Axis tag → value. Empty for static fonts. */
  axisValues: Record<string, number>;
  /** Static-font weight choice (only used when variable=false). */
  staticWeight?: number;
  /** Sample text the user typed. */
  sampleText: string;
}
