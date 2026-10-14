import type { ResolvedSlots } from "./resolve";

export type RegionCC = "KR" | "JP" | "TW";

export interface LandingFacts {
  readonly total: number;
  readonly countries: number;
  readonly cnt: Readonly<Record<string, number>>;
  readonly ver: Readonly<Record<string, number>>;
  readonly tiers: { readonly v: number; readonly p: number; readonly l: number };
  readonly cjk: number;
  readonly cjkPct: number;
  readonly skills: number;
  readonly legacyProse: number;
  readonly tossChk: string;
  readonly tossNext: string;
}

/** One company as a keycap. Colour/radius/weight are claimed values or null. */
export interface CapData {
  readonly id: string;
  /** Native name where the registry has one, else the registry name. */
  readonly n: string;
  readonly nLang: string;
  readonly alt: string | null;
  readonly g: string;
  readonly gLang: string;
  readonly c: string;
  readonly s: "v" | "p" | "l";
  readonly role: string | null;
  readonly hex: string | null;
  readonly chk: string | null;
  readonly sf: number;
  readonly rk: string | null;
  readonly rv: number | null;
  readonly w: number | null;
  readonly wk: string | null;
}

/**
 * A hero cap (data/hero-caps.json, resolved in caps.ts): engraved with the genuine logo
 * when brand-svg.json has a legible one, else with the native first glyph.
 */
export interface LogoCap {
  readonly id: string;
  readonly kind: "logo" | "glyph";
  /** Display name (native where the registry has one). */
  readonly n: string;
  readonly nLang: string;
  /** /brand-svg/<id>/<variant>.svg (logo caps; "" for glyph caps) */
  readonly src: string;
  /** glyph legend, its language, legend colour and claimed weight (glyph caps) */
  readonly g: string;
  readonly gLang: string;
  readonly on: string;
  readonly w: number | null;
  /** viewBox width / height */
  readonly ratio: number;
  /** wide (2u) cap for a wordmark */
  readonly wide: boolean;
  /** the colour the cap reads as: claimed primary, or its pale tint */
  readonly hex: string;
  /** claimed radius token px (cap softness), or null */
  readonly rv: number | null;
  /** keyboard row on desktop / phone (-1 = not shown on phone) */
  readonly row: number;
  readonly mrow: number;
}

export interface GenSpec extends ResolvedSlots {
  readonly id: string;
  readonly cc: string;
  readonly name: string;
  readonly nLang: string;
  readonly alt: string;
  /** genuine logo for the picker chip (brand-svg.json, symbol preferred), or null → glyph chip */
  readonly logo: string | null;
  readonly stats: {
    readonly claims: string;
    readonly sf: number;
    readonly src: number;
    readonly t1: number;
    readonly chk: string;
    readonly next: string;
  };
}

export interface LandingData {
  readonly facts: LandingFacts;
  readonly hero: readonly LogoCap[];
  readonly gen: readonly GenSpec[];
}

export interface SearchEntry {
  readonly i: string;
  readonly n: string;
  readonly c: string;
  readonly s: "v" | "p" | "l";
  readonly d?: string;
}
