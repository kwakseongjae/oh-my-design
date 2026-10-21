# /hangul r15 — concept board

2026-10-21. These are quick HTML mocks built with the real faces (Wanted Sans, Pretendard, Song Myung), so the line breaks shown are the real ones. Each was captured as a 1440×900 or 390×844 first screen. The board is `board.webp`, and each frame is also saved as its own file.

Owner brief (2026-10-21): make the page feel more like 훈민정음 and 한글, and have the hero width demo move on its own so people see it can be dragged.

## The pick: A, 해례본 한 장 (one leaf of the Haerye)

| | |
|---|---|
| Frame | The hero demo is set as a woodblock leaf. A double 광곽 (a thick outer rule and a thin inner one) surrounds it. A 판심 runs down the middle with inward-facing black 어미 at top and bottom. In the fold is a 판심제 set in `writing-mode: vertical-rl`. "Without the skill" is the left half-leaf and "/hangul" the right. On phones the 판심 turns into a horizontal band. |
| Contrast | The white phone screen inside keeps the eval page's own CSS. A modern screen set inside an old page format is the idea. |
| Break map | The 111 widths are drawn as 계선 (column rules). Widths where a word breaks are vermilion; the rest are pale rules. The thumb runs on a rail under the rules, so it never hides a width. |
| Accent | Vermilion (주색 `#b8391f`) is the only accent. It marks broken words, like a proofreader's red ink, and appears on one seal. The seal carries the 천지인 marks (ㆍ ㅡ ㅣ) as shapes, not glyphs. The install button and the thumb are ink. Iris stays in the site header only. |
| Type | Headings are set in Song Myung (OFL 1.1, JIKJI). Body text stays in the site's sans. |
| First screen | At 1440×900 the view reaches the slider and its "직접 밀어 보세요" chip. At 390×844 both results are visible. |

Why A:
- It is the only option where the art direction carries the product's point: a printed page is where a broken word would be marked in red ink.
- The demo stays the single focal point.
- It works the same in English.

## Not picked

- **B, 상형 plates.** ㄱ ㄴ ㅁ ㅅ ㅇ with articulator drawings fill the first screen and push the demo below it. That breaks the owner's v4 rule that both results show in the first screen. It also splits the focal point. Captions for the plates would need quotes from the Haerye and sources.
- **C, a 세로쓰기 title column.** It is the most striking, but a long sentence is hard to read vertically, Latin like "AI" lies on its side, and the demo gets narrower. The English page can't use the same layout. `render-check.mjs` also reads vertically stacked syllables as broken words.

## Display face

| Face | Weights | Syllables | Missing | Read |
|---|---|---|---|---|
| **Song Myung** (chosen) | 400 | 2,350 (KS X 1001) | `−` U+2212, `→` | Strongest old-print character: brush entry strokes, and ㆍ prints as a brush dot |
| Hahmlet | 100–900 | 2,788 | — | Crisp and geometric, but modern |
| Gowun Batang | 400, 700 | 11,172 | — | Soft contemporary 바탕 |
| Nanum Myeongjo | 400, 700, 800 | 11,172 | `−` | Standard newspaper 명조 |

None of the four ships conjoining jamo, so the 서문 cannot be quoted in its original spelling. The page doesn't quote it. Song Myung ships one weight, so every display selector sets `font-weight: 400` (HG-12). `−` and `→` never go into display-face text.

## Palette (contrast on 한지 `#f6f1e7`)

| Token | Hex | Ratio |
|---|---|---|
| 먹 (ink) | `#1c1a16` | 15.4:1 |
| 옅은 먹 (ink-2) | `#5c564b` | 6.5:1 |
| 주색 (vermilion) | `#b8391f` | 5.1:1 on 한지; white on it 5.8:1 |
| 괘선 (rule) | `#cfc4ae` | decoration only |
