// Brand-face facts written into `fonts.faces` (spec/design-md-v3.md §6.2) for the round-11 landing
// references. Every field is sourced:
//   - evidence: lifted from the reference's own evidence table, never upgraded;
//   - source / licence / distribution: the face's first-party or foundry source, checked 2026-10-20
//     (licence texts: orioncactus/pretendard LICENSE, notofonts/noto-cjk Sans/LICENSE,
//     rsms/inter LICENSE.txt, seed.line.me "LINE Seed Licensing", U.S. Graphics TX-02 datasheet);
//   - note: one qualifier the reference body or a byte comparison supports
//     (docs/research/2026-10-20-r11/fonts/README.md records the SHA-256 comparisons).
// The key is the family as the reference's `fonts.roles` names it, so a role resolves to its face.
// `substitutes` are not written here: they come only from a measurement's choice record.

const PRETENDARD = "https://github.com/orioncactus/pretendard";
const NOTO_CJK = "https://github.com/notofonts/noto-cjk";

export const FACES = {
  kakaobank: {
    "Pretendard Variable": {
      scripts: ["hangul", "latin"],
      evidence: ["official-product-use", "live-surface-use"],
      source: PRETENDARD,
      licence: "OFL-1.1",
      distribution: "public",
      note: "KakaoBank serves the public Pretendard v1.3.9 variable file unmodified.",
    },
  },
  banksalad: {
    Pretendard: {
      scripts: ["hangul", "latin"],
      evidence: ["live-surface-use"],
      source: PRETENDARD,
      licence: "OFL-1.1",
      distribution: "public",
      note: "Banksalad serves its own subsets of the static Pretendard weights.",
    },
  },
  freee: {
    "Noto Sans JP": {
      evidence: ["live-surface-use"],
      source: NOTO_CJK,
      licence: "OFL-1.1",
      distribution: "public",
      note: "freee self-hosts Regular, Medium and Bold OTF files.",
    },
  },
  pixiv: {
    "Noto Sans CJK JP": {
      evidence: ["declared-only"],
      source: NOTO_CJK,
      licence: "OFL-1.1",
      distribution: "public",
      note: "Charcoal's sans token names it; Charcoal component stories compute Noto Sans JP and pixiv.net body text resolves to the OS UI font.",
    },
  },
  line: {
    LINESeed: {
      name: "LINE Seed",
      evidence: ["live-surface-use", "official-distributed-asset"],
      surface: "marketing and design-system documentation display roles",
      source: "https://seed.line.me/index_en.html",
      licence: "OFL-1.1",
      distribution: "public",
      note: "Messenger product UI uses each platform's system font instead.",
    },
  },
  "linear.app": {
    Inter: {
      scripts: ["latin"],
      evidence: ["official-product-use", "live-surface-use"],
      source: "https://rsms.me/inter/",
      licence: "OFL-1.1",
      distribution: "public",
      note: "Captured as Inter Variable; Linear serves the public Inter 4.1 file unmodified.",
    },
    "Berkeley Mono": {
      scripts: ["latin"],
      evidence: ["official-product-use", "live-surface-use"],
      source: "https://usgraphics.com/static/products/TX-02/datasheet/TX-02-datasheet.a43c0c7f8d8c.pdf",
      licence: "Proprietary and non-transferrable",
      distribution: "none-asserted",
      note: "U.S. Graphics TX-02; linear.app loads a variable build (Berkeley Mono Variable).",
    },
  },
};

/** Measured substitutes: reference id → { face family → choice record target id }. */
export const MEASURED = {
  toss: { "Toss Product Sans": "toss" },
  "linear.app": { "Berkeley Mono": "linear.app" },
};

/**
 * §6.4 stacks: only roles that already carry exactly `from` are rewritten (no role gains a family it
 * did not have). apply.mjs builds the new stack from the choice records — brand face, the Latin
 * substitute, then the other scripts' substitutes, then the generic keyword. Latin goes first because
 * every Hangul candidate also carries Latin glyphs and would otherwise draw the Latin text too.
 */
export const STACKS = {
  toss: { face: "Toss Product Sans", from: "Toss Product Sans, sans-serif", generic: "sans-serif" },
};
