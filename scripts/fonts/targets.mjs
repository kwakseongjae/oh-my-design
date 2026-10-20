// Brand faces that need a measured substitute (spec/design-md-v3.md §6.3). A face is listed here
// only when its reference records it as the brand face and no official open-licence download
// exists (distribution none-asserted / proprietary). Open-licence brand faces (Pretendard, Noto,
// LINE Seed, Inter) need no substitute and system-stack references have no brand face to stand in
// for; both are recorded in docs/research/2026-10-20-r11/fonts/README.md instead.
//
// Each target is measured in its own first-party page, on the surface the reference cites for that
// face, with the face the page itself loaded.

export const TARGETS = {
  toss: {
    referenceId: "toss",
    family: "Toss Product Sans",
    // The reference's Typography section cites this page ("read 2026-10-13"); its evidence surfaces
    // are TDS documentation pages on the same host (tds-button = tossmini-docs …/components/button/).
    page: "https://tossmini-docs.toss.im/tds-mobile/foundation/typography/",
    crossCheckPages: ["https://tossmini-docs.toss.im/tds-mobile/components/button/"],
    kind: "sans",
    scripts: ["latin", "hangul"],
    // The weights the reference's typography roles use: body/body-small 400, h2–h4 600, h1 700.
    weights: [400, 600, 700],
    // typography.body.fontSize. Canvas applies automatic optical sizing, so every face is measured
    // at the same UI size; metrics are normalised to em.
    sizePx: 16,
    classification: {
      value: null,
      source: "https://toss.im/tossfeed/article/beginning-of-tps",
      note: "The official introduction (2021-10-08) describes the face's balance, context and form but names no type classification.",
    },
  },
  "linear.app": {
    referenceId: "linear.app",
    family: "Berkeley Mono",
    page: "https://linear.app/",
    kind: "mono",
    scripts: ["latin"],
    // typography.mono.fontWeight / fontSize.
    weights: [400],
    sizePx: 14,
    classification: {
      value: "monospace",
      source: "https://usgraphics.com/static/products/TX-02/datasheet/TX-02-datasheet.a43c0c7f8d8c.pdf",
      note: "TX-02 Berkeley Mono datasheet (DX-102-11, December 2024): \"Fixed Pitch: Yes\"; licence \"Proprietary and non-transferrable\".",
    },
  },
};
