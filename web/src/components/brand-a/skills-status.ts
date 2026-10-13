/**
 * Second skills row: what shipped most recently and what is still coming.
 * Status is checked against main at build time of this branch:
 *  - omd-cjk-type-shader shipped in 2.0.3 (main 6fd57dc2) → published, linked.
 *  - /hangul is still untracked on main (not in the npm package) → "coming", NOT linked.
 *  - JA (JLREQ) / zh-TW (CLREQ) typesetting exist only as plans → "planned", not linked.
 * Unlinked cards have no href because those folders would 404 on GitHub.
 */
export type UpcomingKey = "shader" | "hangul" | "ja" | "tc";
export interface UpcomingSkill {
  readonly key: UpcomingKey;
  readonly status: "pub" | "soon" | "plan";
  readonly glyph: string;
  readonly glyphLang: string;
  /** Name renders as code (a real folder / command). */
  readonly code: boolean;
  readonly href: string | null;
}

export const UPCOMING_SKILLS: readonly UpcomingSkill[] = [
  { key: "shader", status: "pub", glyph: "墨", glyphLang: "zh-Hant", code: true, href: "https://github.com/kwakseongjae/oh-my-design/tree/main/skills/omd-cjk-type-shader" },
  { key: "hangul", status: "soon", glyph: "한", glyphLang: "ko", code: true, href: null },
  { key: "ja", status: "plan", glyph: "組", glyphLang: "zh-Hant", code: false, href: null },
  { key: "tc", status: "plan", glyph: "排", glyphLang: "zh-Hant", code: false, href: null },
];
