---
name: Kakuyomu
colors:
  primary: '#4baae0'
  primary-hover: '#0990cc'
  link: '#0081c2'
  background: '#ffffff'
  surface: '#f2f1f0'
  surface-hover: '#eae9e8'
  hero-surface: '#e9f5fb'
  foreground: '#222222'
  muted: '#666666'
  border: '#dddddd'
  input-foreground: '#000000'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    use: Measured genre-card base; --fontSize-m is declared as 14px. Family unresolved.
  work-title:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 18.2px
    use: Measured featured work title link.
  navigation:
    fontSize: 12.6px
    fontWeight: 400
    lineHeight: 22.68px
    use: Measured header exploration link.
  cta:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 14px
    letterSpacing: 0.5px
    use: Measured visual span inside the hero signup link.
  search:
    fontSize: 11.9px
    fontWeight: 400
    lineHeight: 13.685px
    use: Measured header search input.
rounded:
  square: 0px
  m: 3px
  1l: 4px
spacing:
  margin-5s: 2
  margin-4s: 4
  margin-3s: 6
  margin-2s: 8
  margin-1s: 10
  margin-m: 16
  margin-1l: 20
  margin-2l: 24
  margin-3l: 28
  margin-4l: 32
  margin-5l: 40
  margin-6l: 45
  margin-7l: 64
components:
  signup:
    type: button
    backgroundColor: '#4baae0'
    textColor: '#ffffff'
    border: '1px solid #0990cc'
    rounded: 3px
    height: 36px
    padding: 10px
    typography: 14px / 700
    hover: 'Visual span: bg #0990cc; border 1px solid #0081c2.'
    pressed: 'Visual span: bg #0990cc; border 1px solid #0081c2; no further measured change from hover.'
    focus: 'Link: 1px dotted #222222 outline, offset -1px. Visual span: bg #0990cc; border 1px solid #0081c2; shadow 0px 0px 5px 0px #0990cc.'
    use: '無料で新規ユーザー登録 is a link on hero #e9f5fb. These geometry and paint values describe its visual child span; the interactive anchor itself is 380x16px, radius 0, padding 0, transparent, with computed 14px/400. Its visible label is 14px/700. Focus was measured on that anchor, not on the non-focusable span.'
  slider-next:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#222222'
    border: '1px solid #dddddd'
    height: 50px
    padding: 0px
    typography: 14px / 400
    hover: 'Descendant SVG arrow colour and stroke change to #4baae0.'
    pressed: 'Descendant SVG arrow colour and stroke change to #4baae0; no further measured change from hover.'
    focus: 'Descendant SVG arrow becomes #4baae0; self outline 1px dotted #222222, offset 0px.'
    use: 'Carousel next button, 50x50px, circular 50% radius. The button''s own foreground stays #222222 while its SVG arrow changes. No text label or aria-label was present in the measured identity.'
  nav-explore:
    type: button
    textColor: '#222222'
    rounded: 0px
    height: 50px
    padding: 0px 0px 0px 12.6px
    typography: 12.6px / 400
    hover: 'Label span top border becomes 4px solid #4baae0.'
    pressed: 'Label span top border becomes 4px solid #4baae0; no further measured change from hover.'
    focus: 'Label span top border becomes 4px solid #4baae0; link outline 1px dotted #222222, offset -1px.'
    use: '小説を探す is a transparent link on the white #ffffff header. Its label stays #222222; the blue indicator is the child span''s top border.'
  header-search:
    type: input
    backgroundColor: '#f2f1f0'
    textColor: '#000000'
    rounded: 0px
    height: 32px
    padding: 1px 2px 1px 0px
    typography: 11.9px / 400
    hover: 'Background becomes #eae9e8.'
    pressed: 'Background #eae9e8; top, right and bottom borders 2px solid #4baae0; left border none. This pointer state also has focus.'
    focus: 'Top, right and bottom borders 2px solid #4baae0; left border none; background remains #f2f1f0.'
    use: Header text input with placeholder 小説・ユーザーを検索…, width 269.9px. Rest borders are transparent 2px on top/right/bottom, none on left. The separate search-submit button is outside this component's compared scope.
  work-title:
    type: card
    textColor: '#222222'
    rounded: 0px
    height: 35.2px
    padding: 0px
    typography: 14px / 700
    hover: 'Foreground #0081c2 and solid underline.'
    pressed: 'Foreground #0081c2 and solid underline; no further measured change from hover.'
    focus: 'Foreground #0081c2 and solid underline; 1px dotted #0081c2 outline, offset -1px.'
    use: 'Title link within the first featured work card, transparent on #ffffff; measured title 私、蜘蛛なモンスターをテイムしたので、スパイダーシルクで裁縫を頑張ります！, /works/16817330657705436671. Width 373.1px and height 35.2px are this title''s wrapped inline geometry, not a fixed card size.'
  genre-card:
    type: card
    backgroundColor: '#f2f1f0'
    textColor: '#222222'
    border: '1px solid #f2f1f0'
    rounded: 4px
    height: 75.6px
    padding: 16px
    typography: 14px / 400
    hover: 'Background and 1px border become #eae9e8.'
    pressed: 'Background and 1px border become #eae9e8; no further measured change from hover.'
    focus: 'Background and 1px border become #eae9e8; 1px dotted #222222 outline, offset -1px.'
    use: 異世界ファンタジー is a genre-search link to /search?genre_name=FANTASY, 256.3px wide. Its visible genre label is 14px/700; the base is 14px/400. The measured count is content, not a design token.
---

# Design System Inspiration of Kakuyomu

## Overview

### Visual Theme & Atmosphere

Kakuyomu (カクヨム) is a web-fiction service built around writing, reading and sharing stories. It opened on 29 February 2016: Hatena's launch announcement identifies KADOKAWA as operator and Hatena as the service-planning and system-development partner. The current guide describes a place where anyone can write in their own style, read stories and recommend favourites. [Launch announcement](https://hatena.co.jp/press/release/entry/2016/02/29/153000), [Kakuyomu guide](https://kakuyomu.jp/guide).

The measured homepage gives this proposition a blue hero, a horizontal strip of illustrated announcements, and compact text-led discovery lists. The line “書ける、読める、伝えられる” introduces a pale-blue `#e9f5fb` area and a blue `#4baae0` registration action. Below it, white `#ffffff` reading areas, dark `#222222` titles and grey `#666666` metadata support editorial picks and a weekly ranking. Individual story catchphrases use additional colours; these content colours are not treated as the interface palette. These are observations of the live homepage and its screenshots, rather than published brand principles.

The product has widened its reading model. The March 2024 UI notice describes adding Kakuyomu Next showcases to the homepage, rankings and search while excluding Next works from ranking totals. The January 2026 greeting records the 2025 merger with 魔法のiらんど and the service's tenth anniversary in 2026. [UI update](https://kakuyomu.jp/info/entry/ui_update_for_next), [2026 greeting](https://kakuyomu.jp/info/entry/new_year_2026).

The measured surface is the Japanese desktop homepage at `kakuyomu.jp/`, HTML `lang="ja"`, captured at 1440×1000; it did not redirect to another edition.

### Brand Narrative

The 2019 Hatena Design Group article documents a reading-focused redesign of the iOS/Android Kakuyomu Viewer. It describes improving discovery and bringing app backgrounds, text, typography and icons closer to the web version where possible. This is historical product-design context; its app interactions and styling are not used as current web tokens. [Design article](https://design.hatenastaff.com/entry/2019/01/24/170836).

The 2024 Next integration and the official 2026 account of the 魔法のiらんど merger extend the service's mix of writing and reading communities. The measured homepage's genre discovery, editorial selections and prominent Next area are the current surface observations supporting that broader product context. [UI update](https://kakuyomu.jp/info/entry/ui_update_for_next), [2026 greeting](https://kakuyomu.jp/info/entry/new_year_2026).

### Principles

The guide explicitly supports both reading and writing. The 2024 UI notice says it will take care not to substantially affect user-submitted works' exposure when adding Next showcases. Translate those documented product priorities into clear paths for both audiences and a visible distinction between ranked works and promoted Next works. No separate official web-design principles document was verified. [Guide](https://kakuyomu.jp/guide), [UI update](https://kakuyomu.jp/info/entry/ui_update_for_next).

### Personas

No research-backed personas were verified; the official guide addresses readers and writers.

## Colors

The live census contains 283 computed root custom properties and 349 unique stylesheet-declared property names. The following roles retain values from that extraction and from the measured controls; the names on the left are reference roles, with the site's raw names shown alongside them.

| Reference role | Value | First-party token or measured use |
|---|---|---|
| Primary | `#4baae0` | `--color-light-primary`, `--color-blue-40`; signup face and navigation indicator |
| Primary hover | `#0990cc` | `--color-blue-50`, `--background-mediumBlue`; signup hover fill and focus glow |
| Link | `#0081c2` | `--linkColor-blue`, `--color-blue-60`; work-title hover ink |
| Background | `#ffffff` | `--color-light-surface`; reading surface and carousel button |
| Surface | `#f2f1f0` | `--color-light-surface-container`; search and genre-card rest fill |
| Surface hover | `#eae9e8` | `--color-light-surface-container-high`; search and genre-card hover fill |
| Hero surface | `#e9f5fb` | Hero ancestor's computed background; also `--background-paleBlue` |
| Foreground | `#222222` | `--color-light-on-surface`; measured work title and nav label |
| Muted | `#666666` | `--color-light-on-surface-variant`; genre-count descendant and metadata |
| Border | `#dddddd` | `--borderColor-default`; carousel-button border |
| Input foreground | `#000000` | Header search's computed text colour |

The paragraph-ink census is blue `#0081c2` ×7, grey `#666666` ×6 and dark `#222222` ×5. The `foreground` role follows the named on-surface token and the dark measured titles; the most frequent paragraph colour is not promoted to the universal body colour. The separate text census is led by `#666666` ×278 and `#222222` ×139. Among opaque backgrounds, `#f2f1f0` appears 43 times, white 5 times and primary blue 3 times.

## Typography

Font evidence is separated by what it establishes:

| Evidence class | Verified result |
|---|---|
| Official product use | No product font-family statement was verified in the official pages opened for this reference. |
| Live-loaded | `document.fonts` reports only `dcsymbols normal normal`. Its CSS source is `/font/dcsymbols-regular.woff`, with `/font/dcsymbols-regular.otf` also declared, on the product origin. |
| Official distributed assets | The live first-party `@font-face` lists those WOFF and OTF asset paths. The files, glyph coverage and licence were not inspected. No separate distribution or licensing document was verified. |
| Declared-only | After `dcsymbols`, body, h1 and button CSS name Helvetica Neue, Helvetica, Arial, ヒラギノ角ゴ Pr6N / Hiragino Kaku Gothic Pr6N, ヒラギノ角ゴ ProN / Hiragino Kaku Gothic ProN, ヒラギノ角ゴ StdN / Hiragino Kaku Gothic StdN, Segoe UI, Verdana, メイリオ / Meiryo, and a generic sans-serif fallback. These names are declarations, not loaded-face evidence. |
| Unresolved | The census does not establish which installed face supplied the rendered Japanese text or whether `dcsymbols` covers that text. No body-family token or font specimen is emitted. Substitute: none chosen. |

Preserve the verified metrics independently of that unresolved family. The work-title link is 14px/700 with 18.2px line height; navigation is 12.6px/400 with 22.68px line height; header search is 11.9px/400 with 13.685px line height. The signup's visible span is 14px/700, 14px line height and 0.5px letter spacing. The genre card has a 14px/400 base and a 14px/700 visible genre label.

The stylesheet declares `--fontSize-3s` 10px, `-2s` 11.5px, `-1s` 12.6px, `-m` 14px, `-1l` 18px, `-2l` 20px, `-3l` 24px and `-4l` 35px on the product's Root classes. These are declared scale values; they do not establish the size of every heading on the page.

## Layout

At the measured desktop width, a fixed 50px header carries navigation and search. The hero carousel and registration action precede a main editorial area with a weekly-ranking column to its right. Featured works begin two across. Lower on the page, the genre-search links form three columns; a measured card is 256.3px wide. These arrangements are visible in the survey screenshots and interactive-element coordinates.

The stylesheet's Root classes declare a 135px column unit and 30px column space. Root width tokens include `--width-sidebar: 300px` and `--width-1l: 800px`; these declarations are not a measurement of every rendered container.

The declared margin scale is `--margin-5s` 2px, `-4s` 4px, `-3s` 6px, `-2s` 8px, `-1s` 10px, `-m` 16px, `-1l` 20px, `-2l` 24px, `-3l` 28px, `-4l` 32px, `-5l` 40px, `-6l` 45px and `-7l` 64px. These names are retained in the spacing tokens. The measured genre card uses 16px padding; the signup face uses 10px.

### Responsive Behavior

Mobile layout and responsive transitions were not measured; the live evidence here is desktop 1440×1000 only.

## Elevation & Depth

All six controls have `box-shadow: none` at rest, including the signup face. Keyboard focus adds a blue `0px 0px 5px 0px #0990cc` shadow to that face. Treat it as focus feedback rather than a permanent raised-button shadow. White, pale blue and warm grey distinguish the observed surfaces.

## Motion & Easing

The signup face's raw computed transition is `all 0.1s linear 0s`; the header search's is `background 0.1s linear 0s`. Their measured transitions are 100ms and linear. The interactive signup anchor, carousel next, nav link, work-title link and genre card each report `all 0s ease 0s` on the target itself. These zero-duration target values do not describe carousel slide motion or every descendant.

The probe waited at least 900ms for each measured state, beyond the 100ms transitions. No carousel slide duration, reduced-motion behaviour or animated illustration behaviour was measured.

---

Live source: [Kakuyomu homepage](https://kakuyomu.jp/), captured 2026-11-03. Company identification: [特定商取引法に基づく表示](https://kakuyomu.jp/legal/tokuteisho_torihikiho) names “株式会社KADOKAWA” at “〒102-8177 東京都千代田区富士見2-13-3”; [company profile](https://group.kadokawa.co.jp/company/outline.html) independently lists the Tokyo registered location. The measurement paths, raw values, controls and narrative excerpts are recorded in `report.md` and `verification.md` beside this draft.

## Components

All six product controls below have measured hover, pointer-pressed and real Tab-focus states. The painted signup face was additionally targeted to resolve its geometry; it is part of the same link.

| Control | Measured rest identity | Hover and pressed | Keyboard focus |
|---|---|---|---|
| Hero signup link | Visual span 380×36px, radius 3px, padding 10px, 14px/700; `#4baae0` fill, `#ffffff` ink, 1px `#0990cc` border | Fill `#0990cc`, border `#0081c2` | Same fill/border plus `0px 0px 5px 0px #0990cc` glow; anchor has a 1px dotted `#222222` outline at -1px offset |
| Carousel next button | 50×50px, radius 50%, padding 0, 14px/400; `#ffffff` fill, `#222222` arrow, 1px `#dddddd` border | Descendant arrow colour and stroke become `#4baae0` | Blue arrow plus 1px dotted `#222222` outline at 0px offset |
| 小説を探す nav link | 75.6×50px, radius 0, left padding 12.6px, 12.6px/400; transparent on white, `#222222` ink | Child label's transparent 4px **top** border becomes `#4baae0` | Same top indicator plus 1px dotted `#222222` outline at -1px offset |
| Header search | 269.9×32px, radius 0, padding 1px 2px 1px 0, 11.9px/400; `#f2f1f0` fill and `#000000` text | Hover fill `#eae9e8`; pressed also paints top/right/bottom 2px `#4baae0` borders | Top/right/bottom 2px `#4baae0` borders; left remains none; fill remains `#f2f1f0` |
| Featured work title link | 373.1×35.2px in the captured wrapping, radius 0, padding 0, 14px/700; transparent on white, `#222222` ink | `#0081c2` ink and solid underline | Same ink/underline plus 1px dotted `#0081c2` outline at -1px offset |
| 異世界ファンタジー genre card link | 256.3×75.6px, radius 4px, padding 16px; 14px/400 base, 14px/700 label; `#f2f1f0` fill/border, `#222222` label | Fill and 1px border become `#eae9e8` | Same fill/border plus 1px dotted `#222222` outline at -1px offset |

The signup anchor itself is an inline 380×16px box with radius 0, padding 0, transparent background and computed 14px/400. Its child supplies the 36px painted face and bold white label. Keep that distinction when recreating its appearance or checking the measurements. The inner span is not reached by Tab; its independent focus is UNMEASURED. The link's focus is measured.

The work-title example is “私、蜘蛛なモンスターをテイムしたので、スパイダーシルクで裁縫を頑張ります！” at `/works/16817330657705436671`. Its captured line wrapping is content-dependent. The genre card links to `/search?genre_name=FANTASY`; its count is content, not a token.

### States

All six measured controls change on hover, pressed and keyboard focus. For signup, carousel next, nav exploration, work title and genre card, pressed adds no further computed change beyond the measured hover appearance. Header search adds the blue three-sided border while pressed; that pointer state also has focus, so the result does not isolate an `:active`-only style.

Keyboard focus was reached at Tab #3 for nav, #6 for search, #17 for carousel next, #18 for signup, #20 for the featured title and #212 for the genre card in this capture. The five dotted outlines are measured with `outline-style: dotted`, not `auto`; the search uses a border change. Every control's focus-only changes disappeared after blur. No disabled or validation-error state was measured.

The comparison covers each target, its descendants, their `::before`/`::after`, and three ancestor levels. Descendant counts are 1 for signup, 2 for carousel next (SVG and path), 1 for nav, 0 for search, 0 for the work title and 6 for the genre card. A claim of no further pressed change is limited to that computed-style and DOM scope, which excludes siblings and cross-origin iframe contents.

## Do's and Don'ts

These are build recommendations derived from the measurements:

- Use the darker `#0081c2` for the measured work-link interaction, while keeping `#4baae0` for the signup face and nav indicator.
- Keep featured work titles bold and compact, with quieter metadata below them.
- Preserve the nav's top indicator and the search input's three measured focus borders.
- Keep the 3px signup corners, 4px genre-card corners and circular carousel control distinct.
- Do not turn colourful story catchphrases into global semantic tokens, fix title-link wrapping as a universal card height, or assign a declared-only font as the product face.

## Voice & Tone

The product leads with the three parallel verbs “書ける、読める、伝えられる”. The guide explains concrete reader and writer actions; the measured signup says “無料で新規ユーザー登録” and the navigation says “小説を探す”. For similar flows, use direct Japanese task labels and state the free-registration offer explicitly where that offer applies. [Guide](https://kakuyomu.jp/guide), live homepage.

## Agent Prompt Guide

“Build a Kakuyomu-style discovery area with white reading surfaces, `#222222` work titles at 14px/700 and `#666666` metadata. A work-title link becomes `#0081c2` with an underline on hover and press, and adds a 1px dotted outline at -1px on keyboard focus. Leave the font family unresolved.”

“Build the measured hero signup appearance: a 380×36px face, 3px corners, 10px padding, 14px/700 label, `#4baae0` fill, white ink and 1px `#0990cc` border. Hover and press darken the fill to `#0990cc` and border to `#0081c2`; keyboard focus also adds the 5px blue glow and the link's inset dotted outline.”

## Governance

### Known Gaps

- **Contrast, `signup`.** Text `#ffffff` on `#4baae0` measures 2.58:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
