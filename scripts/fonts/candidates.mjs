// Open-licence substitute candidates (spec/design-md-v3.md §6.3, AGENTS.md "Unlabelled font
// substitution is forbidden"). Every fact here is copied from a first-party source and is stated
// with that source:
//
//   - weights / axes / licence: the family's METADATA.pb in github.com/google/fonts (Google faces),
//     or the foundry's own release (Pretendard, SUIT, LINE Seed);
//   - classification: Google Fonts' own classification tags (google/fonts tags/all/families.csv,
//     the highest-weighted /Sans/* or /Monospace/* tag); null when no first-party class exists;
//   - files: the exact font file measured. `fetch-candidates.mjs` downloads it and the measurement
//     record keeps its SHA-256, so a later run can prove it measured the same bytes.
//
// Candidates are measured, never redistributed: files live in a cache outside the repository.

const GF = "https://raw.githubusercontent.com/google/fonts/main";
const GF_TAGS = "https://github.com/google/fonts/blob/main/tags/all/families.csv";
const gfMeta = (dir) => `https://github.com/google/fonts/blob/main/ofl/${dir}/METADATA.pb`;
const gfFile = (dir, file) => `${GF}/ofl/${dir}/${encodeURIComponent(file).replace(/%2C/g, ",")}`;

/** Google Fonts css2 URL a consumer loads the face with (the same URL the journey UI uses). */
export function googleCssUrl(family, weights) {
  const fam = family.replace(/ /g, "+");
  const axis = weights.variable ? `${weights.min}..${weights.max}` : weights.list.join(";");
  return `https://fonts.googleapis.com/css2?family=${fam}:wght@${axis}&display=swap`;
}

function google(family, dir, kind, scripts, weights, files, classification) {
  return {
    family,
    provider: "google",
    kind,
    scripts,
    weights,
    files: files.map(([weight, file]) => ({ weight, file, url: gfFile(dir, file) })),
    licence: "OFL-1.1",
    licenceSource: gfMeta(dir),
    metadataSource: gfMeta(dir),
    classification: classification ? { value: classification[0], tag: classification[1], source: GF_TAGS } : null,
    cssUrl: googleCssUrl(family, weights),
  };
}

const variable = (min, max) => ({ variable: true, min, max });
const statics = (...list) => ({ variable: false, list });

/**
 * Per-script candidate pools. `scripts` is what the candidate is offered for; the measurement
 * itself confirms coverage (a candidate that does not draw a sample's glyphs is ineligible).
 */
export const CANDIDATES = [
  // ── Latin sans (Google Fonts) ──────────────────────────────────────────────────────────────
  google("Inter", "inter", "sans", ["latin"], variable(100, 900), [["100 900", "Inter[opsz,wght].ttf"]], ["neo-grotesk", "/Sans/Neo Grotesque"]),
  google("Roboto", "roboto", "sans", ["latin"], variable(100, 900), [["100 900", "Roboto[wdth,wght].ttf"]], ["neo-grotesk", "/Sans/Neo Grotesque"]),
  google("Noto Sans", "notosans", "sans", ["latin"], variable(100, 900), [["100 900", "NotoSans[wdth,wght].ttf"]], ["humanist", "/Sans/Humanist"]),
  google("IBM Plex Sans", "ibmplexsans", "sans", ["latin"], variable(100, 700), [["100 700", "IBMPlexSans[wdth,wght].ttf"]], ["neo-grotesk", "/Sans/Neo Grotesque"]),
  google("DM Sans", "dmsans", "sans", ["latin"], variable(100, 1000), [["100 1000", "DMSans[opsz,wght].ttf"]], ["geometric", "/Sans/Geometric"]),
  google("Manrope", "manrope", "sans", ["latin"], variable(200, 800), [["200 800", "Manrope[wght].ttf"]], ["neo-grotesk", "/Sans/Neo Grotesque"]),
  google("Figtree", "figtree", "sans", ["latin"], variable(300, 900), [["300 900", "Figtree[wght].ttf"]], ["geometric", "/Sans/Geometric"]),
  google("Geist", "geist", "sans", ["latin"], variable(100, 900), [["100 900", "Geist[wght].ttf"]], ["neo-grotesk", "/Sans/Neo Grotesque"]),
  google("Public Sans", "publicsans", "sans", ["latin"], variable(100, 900), [["100 900", "PublicSans[wght].ttf"]], ["grotesk", "/Sans/Grotesque"]),
  google("Work Sans", "worksans", "sans", ["latin"], variable(100, 900), [["100 900", "WorkSans[wght].ttf"]], ["neo-grotesk", "/Sans/Neo Grotesque"]),

  // ── Hangul (Google Fonts). Each also carries Latin glyphs, so it is a Latin candidate too. ──
  google("Noto Sans KR", "notosanskr", "sans", ["hangul", "latin"], variable(100, 900), [["100 900", "NotoSansKR[wght].ttf"]], ["humanist", "/Sans/Humanist"]),
  google("IBM Plex Sans KR", "ibmplexsanskr", "sans", ["hangul", "latin"], statics(100, 200, 300, 400, 500, 600, 700),
    [[400, "IBMPlexSansKR-Regular.ttf"], [600, "IBMPlexSansKR-SemiBold.ttf"], [700, "IBMPlexSansKR-Bold.ttf"]], ["neo-grotesk", "/Sans/Neo Grotesque"]),
  google("Gothic A1", "gothica1", "sans", ["hangul", "latin"], statics(100, 200, 300, 400, 500, 600, 700, 800, 900),
    [[400, "GothicA1-Regular.ttf"], [600, "GothicA1-SemiBold.ttf"], [700, "GothicA1-Bold.ttf"]], ["humanist", "/Sans/Humanist"]),
  google("Nanum Gothic", "nanumgothic", "sans", ["hangul", "latin"], statics(400, 700, 800),
    [[400, "NanumGothic-Regular.ttf"], [700, "NanumGothic-Bold.ttf"], [800, "NanumGothic-ExtraBold.ttf"]], null /* tagged Humanist 50 / Rounded 50: no single class */),

  // ── Latin monospace (Google Fonts) — the pool for a monospaced brand face. Not in the
  //    round-11 brief's sans list; added because a proportional face is no measurement of a
  //    monospaced one. Each is tagged /Monospace/Monospace 100 by Google Fonts. ───────────────
  google("JetBrains Mono", "jetbrainsmono", "mono", ["latin"], variable(100, 800), [["100 800", "JetBrainsMono[wght].ttf"]], ["monospace", "/Monospace/Monospace"]),
  google("IBM Plex Mono", "ibmplexmono", "mono", ["latin"], statics(100, 200, 300, 400, 500, 600, 700),
    [[400, "IBMPlexMono-Regular.ttf"], [600, "IBMPlexMono-SemiBold.ttf"], [700, "IBMPlexMono-Bold.ttf"]], ["monospace", "/Monospace/Monospace"]),
  google("Roboto Mono", "robotomono", "mono", ["latin"], variable(100, 700), [["100 700", "RobotoMono[wght].ttf"]], ["monospace", "/Monospace/Monospace"]),
  google("Source Code Pro", "sourcecodepro", "mono", ["latin"], variable(200, 900), [["200 900", "SourceCodePro[wght].ttf"]], ["monospace", "/Monospace/Monospace"]),
  google("Fira Code", "firacode", "mono", ["latin"], variable(300, 700), [["300 700", "FiraCode[wght].ttf"]], ["monospace", "/Monospace/Monospace"]),
  google("DM Mono", "dmmono", "mono", ["latin"], statics(300, 400, 500), [[400, "DMMono-Regular.ttf"], [500, "DMMono-Medium.ttf"]], ["monospace", "/Monospace/Monospace"]),
  google("Geist Mono", "geistmono", "mono", ["latin"], variable(100, 900), [["100 900", "GeistMono[wght].ttf"]], ["monospace", "/Monospace/Monospace"]),

  // ── Non-Google open-licence faces (provider: other) ─────────────────────────────────────────
  {
    // The stylesheet below registers the family as 'Pretendard Variable' with font-weight 45 920
    // (the file's own fvar axis runs 45–930; the stylesheet's declaration is what a consumer gets).
    family: "Pretendard Variable",
    provider: "other",
    kind: "sans",
    scripts: ["hangul", "latin"],
    weights: variable(45, 920),
    files: [{ weight: "45 920", file: "PretendardVariable.ttf", url: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/variable/PretendardVariable.ttf" }],
    licence: "OFL-1.1",
    licenceSource: "https://github.com/orioncactus/pretendard/blob/main/LICENSE",
    metadataSource: "https://github.com/orioncactus/pretendard/releases/tag/v1.3.9",
    classification: null,
    cssUrl: "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css",
  },
  {
    // The stylesheet below registers the family as 'SUIT Variable' with font-weight 100 900.
    family: "SUIT Variable",
    provider: "other",
    kind: "sans",
    scripts: ["hangul", "latin"],
    weights: variable(100, 900),
    files: [{ weight: "100 900", file: "SUIT-Variable.ttf", url: "https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@v2.0.5/fonts/variable/ttf/SUIT-Variable.ttf" }],
    licence: "OFL-1.1",
    licenceSource: "https://github.com/sun-typeface/SUIT/blob/main/LICENSE",
    metadataSource: "https://github.com/sun-typeface/SUIT/releases/tag/v2.0.5",
    classification: null,
    cssUrl: "https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@v2.0.5/fonts/variable/woff2/SUIT-Variable.css",
  },
  {
    family: "LINE Seed Sans KR",
    provider: "other",
    kind: "sans",
    scripts: ["hangul", "latin"],
    weights: statics(100, 400, 700),
    files: [
      { weight: 400, file: "LINESeedKR-Rg.ttf", url: "https://seed.line.me/src/images/fonts/LINE_Seed_Sans_KR.zip", zipPath: "LINE_SeedKR_2023.09.06/TTF/LINESeedKR-Rg.ttf" },
      { weight: 700, file: "LINESeedKR-Bd.ttf", url: "https://seed.line.me/src/images/fonts/LINE_Seed_Sans_KR.zip", zipPath: "LINE_SeedKR_2023.09.06/TTF/LINESeedKR-Bd.ttf" },
    ],
    licence: "OFL-1.1",
    licenceSource: "https://seed.line.me/index_en.html",
    metadataSource: "https://seed.line.me/index_en.html",
    classification: null,
  },
  {
    family: "LINE Seed Sans",
    provider: "other",
    kind: "sans",
    scripts: ["latin"],
    weights: statics(100, 400, 700, 800, 900),
    files: [
      { weight: 400, file: "LINESeedSans_A_Rg.ttf", url: "https://seed.line.me/src/images/fonts/LINE_Seed_Sans_EN.zip", zipPath: "LINE_Seed_Sans_V1.003/App/TTF/LINESeedSans_A_Rg.ttf" },
      { weight: 700, file: "LINESeedSans_A_Bd.ttf", url: "https://seed.line.me/src/images/fonts/LINE_Seed_Sans_EN.zip", zipPath: "LINE_Seed_Sans_V1.003/App/TTF/LINESeedSans_A_Bd.ttf" },
      { weight: 800, file: "LINESeedSans_A_XBd.ttf", url: "https://seed.line.me/src/images/fonts/LINE_Seed_Sans_EN.zip", zipPath: "LINE_Seed_Sans_V1.003/App/TTF/LINESeedSans_A_XBd.ttf" },
    ],
    licence: "OFL-1.1",
    licenceSource: "https://seed.line.me/index_en.html",
    metadataSource: "https://seed.line.me/index_en.html",
    classification: null,
  },
];

/**
 * Pools the brief lists that no round-11 brand face needs (no proprietary face on the landing
 * renders kana or Traditional Han). Kept so a later run measures against the same list.
 */
export const UNMEASURED_POOLS = {
  kana: ["Noto Sans JP", "M PLUS 1p", "M PLUS 2", "Zen Kaku Gothic New", "BIZ UDPGothic"],
  "han-hant": ["Noto Sans TC"],
};

/** Candidates offered for a script and kind (sans | mono). */
export function poolFor(script, kind) {
  return CANDIDATES.filter((c) => c.kind === kind && c.scripts.includes(script));
}

/** Weights a candidate can render without synthesis. */
export function availableWeights(c) {
  return c.weights.variable ? { min: c.weights.min, max: c.weights.max } : { list: c.weights.list };
}

export function coversWeight(c, w) {
  return c.weights.variable ? w >= c.weights.min && w <= c.weights.max : c.weights.list.includes(w);
}
