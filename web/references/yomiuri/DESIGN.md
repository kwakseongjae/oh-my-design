---
name: Yomiuri Shimbun
colors:
  brand-purple: '#4b0082'
  cta-orange: '#ff7600'
  cta-orange-hover: '#ff8c29'
  foreground: '#4d5760'
  ink: '#1e2428'
  muted: '#8e9193'
  surface-blue: '#e4f0f6'
  surface-grey: '#f4f4f4'
  tint-lavender: '#f3e3ff'
  tint-lavender-hover: '#f5e8ff'
  border-light: '#e5e5e5'
  canvas: '#ffffff'
typography:
  headline:
    fontSize: 20px
    fontWeight: 700
    use: lead-story headline link on the home page
  nav:
    fontSize: 13px
    fontWeight: 700
    use: category bar and header links
  tag:
    fontSize: 14px
    fontWeight: 400
    use: topic-tag links under 注目ワード
rounded:
  sm: 2px
  md: 3px
  lg: 16px
components:
  button-subscribe:
    type: button
    backgroundColor: '#ff7600'
    textColor: '#ffffff'
    border: '1px solid #ff7600'
    rounded: 3px
    height: 40px
    padding: 0px 10px
    hover: 'bg and border #ff8c29'
    pressed: 'bg and border #ff8c29'
    use: 購読申込 — a link in the header; solid orange. The anchor's own font-size is 0px and its visible label 購読・試読 is painted by ::after, so no font size is recorded.
  button-register:
    type: button
    textColor: '#4b0082'
    border: '1px solid #4b0082'
    rounded: 3px
    height: 40px
    padding: 0px 10px
    typography: 13px / 700
    hover: bg rgba(75,0,130,0.1)
    pressed: bg rgba(75,0,130,0.1)
    use: 新規登録 — an outlined link in the header; sits on the white header, no fill at rest.
  button-nav:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 48px
    padding: 0px 8px
    typography: 13px / 700
    hover: 'fg #1e2428, underline, white tile'
    pressed: 'fg #1e2428, underline, white tile'
    use: '社会 — a category link on the purple #4b0082 bar; no fill at rest. Hover paints a white ::after tile with dark underlined text.'
  button-search:
    type: button
    textColor: '#1e2428'
    rounded: 0px
    height: 32px
    padding: 6px
    hover: 'icon #ff7600'
    pressed: 'icon #ff7600'
    use: 'さがす — an icon-only link (/web-search/); the magnifier is a masked ::before whose fill goes from #1e2428 to #ff7600 on hover.'
  button-topic-tag:
    type: button
    textColor: '#4b0082'
    border: '1px solid #4b0082'
    rounded: 2px
    height: 25.4px
    padding: 4px 6px
    typography: 14px / 400
    hover: 'bg #f5e8ff'
    pressed: 'bg #f5e8ff'
    use: '#箱根駅伝 — an outlined topic link under 注目ワード; no fill at rest, a lavender fill on hover.'
  card-lead-story:
    type: card
    textColor: '#1e2428'
    rounded: 0px
    height: 84px
    padding: 0px
    typography: 20px / 700
    hover: underline
    pressed: underline
    use: Lead-story headline — a link (h3 > a) with no box; only text-decoration changes.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
---

# Design System Inspiration of Yomiuri Shimbun

## Overview

### Visual Theme & Atmosphere

The group's own overview calls Yomiuri a "総合メディア集団" — a "comprehensive media group" — "１５０年の歴史がある読売新聞を中心に", built around a newspaper with 150 years of history and run under a holding company, 読売新聞グループ本社. The history page dates the paper to "１８７４年（明治７年）１１月２日", a two-page half-sheet whose title "題号は、江戸時代の「読みながら売る」かわら版の販売方式に由来します" (the name comes from the Edo-period broadsheet sold by reading it aloud), and whose first readers liked pages that glossed hard kanji in spoken-style notes. The same page says the masthead lettering used on the newspaper since 1 July 1946 was written in reisho (clerical script) by the calligrapher 印南渓龍.

The online edition is the digital face of that paper. The company's own history page dates its first website to 16 June 1995 ("国内の新聞社では初めてのホームページ"), renamed "ヨミウリ・オンライン" in January 1996, and says a new "読売新聞オンライン" service started on 1 February 2019. The digital-media page describes it as a service for readers "読売新聞の月々の購読料金＋０円でお使いいただける", usable at no extra monthly charge, with a page viewer that shows the newspaper layout as printed. The measured home page (`www.yomiuri.co.jp/`, HTML `lang="ja"`, no regional redirect) is a dense Japanese news front page, not a marketing page.

What the live page looks like, measured:

- **A purple bar on a white page.** The category bar is **`#4b0082`** (the site's `theme-color` meta is the same value) with white 13px/700 links; the same purple is the outline and text colour of the 新規登録 button and of every topic tag (46 text and 46 border uses in the census).
- **One orange call to action.** The only filled button in the header is 購読申込 at **`#ff7600`** with white text, brightening to **`#ff8c29`** on hover; the same orange appears as the hover colour of the search icon.
- **Near-black ink.** Headlines and links are **`#1e2428`** (456 text elements); paragraph text is **`#4d5760`** (all 24 `<p>` elements).
- **Dense, small type.** Of 400 surveyed interactive rows, 78 are 16px/700, 100 are 13px/700, 101 are 13px/400 and 69 are 12px/400; the lead headline is 20px/700.
- **Square, almost unrounded corners.** 307 of 400 surveyed controls have 0px radius; the rest use 2px (tags), 3px (header buttons), 16px (small round carousel arrows) and 99px (pill labels).

#### Primary tasks
- Read the day's news; browse categories (トップ, 速報, 社会, 政治, 経済 …).
- Subscribe (購読申込), register (新規登録) or log in (ログイン).
- Search (さがす); open the newspaper page viewer (紙面ビューアー).

### Brand Narrative

A newspaper founded on 2 November 1874 whose name comes from a sales method, grown into a media group that includes a baseball club (founded 1934 as 大日本東京野球倶楽部), a publisher (中央公論新社) and a leisure company (よみうりランド), and whose history page lists a first newspaper website in 1995 and the 読売新聞オンライン service in 2019. Its 150th anniversary issue was published on 2 November 2024.

### Principles

- **読売信条** — "自由主義、人間主義、国際主義" (company's principles page).
- **記者行動規範** — the reporters' code of conduct, established May 2001 (company's principles page).
- No design principles are published in the sources opened; none are inferred from the interface.

### Personas

Not researched. No persona claim is made from a UI capture.

## Colors

Measured with `getComputedStyle` on the home page (5,090 elements). The root declares 50 computed custom properties: 47 are WordPress core presets (`--wp--preset--*`, excluded: framework defaults, not Yomiuri's choices) and 3 are `--svg-article-item-icon-*` icon data-URIs. **There are no first-party colour custom properties**; the colours below are rendered values counted from the page, plus the `theme-color` meta.

### Brand
- **Brand purple** `#4b0082` — category bar (bg, 20 elements), outlined button and tag text and border (46 each), `theme-color`.
- **CTA orange** `#ff7600` — 購読申込 fill and border; **CTA orange hover** `#ff8c29`.

### Text
- **Ink** `#1e2428` — most frequent text colour (456) and the nav hover colour.
- **Foreground** `#4d5760` — the `<p>` ink (24 of 24 paragraphs).
- **Muted** `#8e9193` — 93 text elements.

### Surfaces and lines
- **Surface blue** `#e4f0f6` — the most frequent background (47 elements); **surface grey** `#f4f4f4` (34).
- **Tint lavender** `#f3e3ff` — 15 backgrounds, e.g. the 地域の話題・東京２３区 and 中部発 pills; **tint lavender hover** `#f5e8ff` — the topic tag's hover fill.
- **Border light** `#e5e5e5` — 44 borders. **Canvas** `#ffffff`.

Also present in the census but not given a role: `#dddddd`, `#ffa700`, `#f9f9f9`, `#fafafa`, `#b4b4b4`, `#914fc1`, and one-off text colours.

## Typography

**Font evidence classes**

- **Official product use:** none found. No page opened names a typeface for the site.
- **Live-loaded (`document.fonts`):** none. The census lists zero loaded faces; the only `@font-face` is the carousel library's icon font `slick` (not text).
- **Official distributed assets:** none found.
- **Declared-only:** `body` and `h1` declare the system stack `-apple-system, "system-ui", Roboto, "Segoe UI", "Helvetica Neue", HelveticaNeue, "Hiragino Kaku Gothic ProN", Meiryo, sans-serif`; `button` declares `Arial`. These are generic system names, not a brand face; the browser picks what the visitor's device has.
- **Unresolved:** the masthead and the "読売新聞 オンライン" header wordmark are artwork. The history page describes the paper's masthead as reisho lettering from 1946; whether the header image is that lettering is not stated in the sources and is not claimed. Substitute: none chosen.

No `typography.family` is declared because no face was loaded or officially documented as the site face.

### Scale (measured sizes / weights)
- Lead headline link **20px / 700**; 16px/700 (78 rows), **13px / 700** for the category bar and header links, 13px/400 and 12px/400 for list and meta text, **14px / 400** for topic tags.

## Layout

From the 1440×1000 capture: a banner ad slot above the header; a header of 128px that is `position: sticky` (z-index 3040); a purple 48px category bar; 注目ワード tag row; a two-column main (headline list at left, a stock-index panel, video slider and ad at right). Page height 9,858px at capture. Only desktop was measured.

### Responsive Behavior

Not measured. Desktop 1440×1000 only.

## Elevation & Depth

Not measured as tokens. The shadows seen in the custom-property list (`--wp--preset--shadow--*`) belong to WordPress and are not Yomiuri's. The controls measured all read `box-shadow: none`.

## Motion & Easing

Computed `transition` on the controls: `all 0.3s ease 0s` (購読申込, 新規登録, #箱根駅伝) and `all 0s ease 0s` (社会, さがす, headline). The probe's longest observed transition was 300ms. No cubic-bezier curve was measured; `ease` is the keyword the browser reported.

---

**Tier 1 sources:** https://www.yomiuri.co.jp/ (live home page, 1440×1000, ja-JP, 2026-11-09); https://www.yomiuri.co.jp/zz-this-does-not-exist (nonsense-path control — HTTP 404, title ページが見つかりませんでした : 読売新聞); https://info.yomiuri.co.jp/group/about.html (group overview); https://info.yomiuri.co.jp/group/data.html (group HQ and Tokyo head-office data); https://info.yomiuri.co.jp/group/history/ (history); https://info.yomiuri.co.jp/media/digital.html (digital media); https://info.yomiuri.co.jp/rinen/ (principles); https://www.yomiuri.co.jp/policy/termsnonmember/ (terms)

## Components

Hover and press were read only where the page reported `:hover` / `:active` as true; each state waited 900ms. Transitions are `all 0.3s ease 0s` on the orange and outlined buttons and tags, and `all 0s ease 0s` on the category link, the search link and the headline.

- **購読申込** (a link in the header): 80.5×40, radius 3px, padding 0 10px, bg and 1px border `#ff7600`, white text. Hover and pressed: bg and border become `#ff8c29`. The anchor's `font-size` is 0px; the label 購読・試読 is `::after` content (58.5×14.3px), so no font size is recorded.
- **新規登録** (a link in the header): 74×40, radius 3px, padding 0 10px, 13px/700, no fill, `#4b0082` text and 1px border. Hover and pressed: bg `rgba(75, 0, 130, 0.1)`.
- **社会** (category link): 42×48, radius 0, padding 0 8px, 13px/700, white on the purple bar. Hover and pressed: text `#1e2428`, underline, and a painted white `::after` tile of 42×42 (the crop shows a white tab).
- **さがす** (search link): 32×32 icon-only link, padding 6px; the magnifier is a masked `::before` filled `#1e2428`, which turns `#ff7600` on hover and pressed. The survey's interactive rows hold no text input (its one `<input>` is a checkbox beside the すべて label); the header search is a link to `/web-search/`.
- **#箱根駅伝** (topic tag): 78.7×25.4, radius 2px, padding 4px 6px, 14px/400, `#4b0082` text and border. Hover and pressed: bg `#f5e8ff`.
- **Lead-story headline** (link inside h3): 440×84, 20px/700, `#1e2428`. Hover and pressed: underline only.

### Radius
2px tags; 3px header buttons; 0px nearly everywhere else; 16px round carousel arrows (18×18); 99px pill labels (measured on 36 rows, not tokenised).

### States

Measured on six controls with real hover, pressed and a Tab walk (summary in §4). Hover and pressed read identical on every control. **Keyboard focus:** on all six, the only change was `outline: none → rgb(0, 95, 204) auto 1px off 1px` — the browser's own ring, not a Yomiuri token, so no focus colour is recorded. Disabled states were not encountered. A terms-notice dialog (利用規約等をご確認ください, with a 次へ button) and a HubSpot overlay were open during capture; every control reported `:hover` true during its hover and pressed reads.

## Do's and Don'ts

### Do
- Keep the one filled button orange (`#ff7600`) and the secondary buttons outlined in purple (`#4b0082`).
- Use `#1e2428` for headlines and `#4d5760` for paragraph text.
- Underline headline links on hover instead of recolouring them.

### Don't
- Don't treat the WordPress presets (`--wp--preset--*`) or the carousel library's `slick` font as Yomiuri's tokens.
- Don't invent a brand typeface: none was loaded.
- Don't add a focus colour: the six controls showed only the browser's own focus ring (see §14).

## Voice & Tone

Not assessed as authored voice. The company's published principles (読売信条, revised 1 January 2000) name "自由主義、人間主義、国際主義" (liberalism, humanism, internationalism) as the basic ideals; the page says 読売行動指針 was drawn up in 2024.

## Agent Prompt Guide

### Quick Color Reference
`#4b0082` brand purple · `#ff7600` CTA orange (hover `#ff8c29`) · `#1e2428` ink · `#4d5760` paragraph · `#8e9193` muted · `#e4f0f6` surface blue · `#f4f4f4` surface grey · `#f3e3ff` lavender (hover `#f5e8ff`) · `#e5e5e5` border · `#ffffff` canvas

### Example Component Prompts
- "A 40px-high link button, 3px radius, `#ff7600` fill and border, white bold text; hover `#ff8c29`."
- "An outlined 40px button, 1px `#4b0082` border and text, no fill; hover fills `rgba(75, 0, 130, 0.1)`."
- "A topic tag: 14px, 2px radius, 1px `#4b0082` border and text, hover fill `#f5e8ff`."
- "A 48px category bar in `#4b0082` with 13px bold white links; hovered link becomes a white tab with `#1e2428` underlined text."

## Governance

### Known Gaps

- **Contrast, `button-subscribe`.** Text `#ffffff` on `#ff7600` measures 2.68:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
