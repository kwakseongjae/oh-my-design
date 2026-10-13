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

export interface GenSpec extends ResolvedSlots {
  readonly id: string;
  readonly cc: string;
  readonly name: string;
  readonly nLang: string;
  readonly alt: string;
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
  readonly hero: readonly CapData[];
  readonly regions: Readonly<Record<RegionCC, readonly CapData[]>>;
  readonly gen: readonly GenSpec[];
}

export interface SearchEntry {
  readonly i: string;
  readonly n: string;
  readonly c: string;
  readonly s: "v" | "p" | "l";
  readonly d?: string;
}
