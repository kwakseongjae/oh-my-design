---
name: Kaonavi
colors:
  primary: '#447fe0'
  sun: '#ffda1b'
  foreground: '#202226'
  canvas: '#ffffff'
  link: '#3f6ecc'
  sandstone: '#fbf8ee'
  surface-subtle: '#fafafc'
  surface-blue: '#edf6ff'
  surface-muted: '#f0f1f5'
  border: '#d0d1d3'
  muted-foreground: '#737378'
  secondary-foreground: '#56575b'
  papaya-400: '#ee7100'
  avocado-500: '#197f38'
typography:
  navigation:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 28.8px
  large-action:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 33.6px
    letterSpacing: 2.4px
  card-title:
    fontSize: 20px
    fontWeight: 700
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
spacing:
  large-action-inline: 8
  nav-inline: 14.25
  news-card-inset: 32
components:
  contact:
    type: button
    backgroundColor: '#447fe0'
    textColor: '#ffffff'
    border: '2px solid #447fe0'
    rounded: 4px
    height: 40px
    padding: 0px
    typography: 14px / 700
    hover: 'bg #ffda1b; fg #3f6ecc'
    pressed: 'bg #ffda1b; fg #3f6ecc'
    use: お問い合わせ — header link to /contact/?link=glonavi, 112px wide. The blue border remains on hover and press. Keyboard focus is the browser auto ring.
  resources:
    type: button
    textColor: '#3f6ecc'
    border: '2px solid #447fe0'
    rounded: 4px
    height: 40px
    padding: 0px
    typography: 14px / 700
    hover: 'bg #ffda1b'
    pressed: 'bg #ffda1b'
    use: お役立ち資料 — header link to /download/?link=glonavi, 112px wide, transparent over the white header at rest. Label and border retain their colors. Keyboard focus is the browser auto ring.
  trial:
    type: button
    backgroundColor: '#447fe0'
    textColor: '#ffffff'
    border: '2px solid #447fe0'
    rounded: 12px
    height: 96px
    padding: 0px 8px
    typography: 24px / 700
    hover: 'bg #ffda1b; fg #3f6ecc'
    pressed: 'bg #ffda1b; fg #3f6ecc'
    use: デモ・トライアルを希望 — main-content link to /more/?which=both&link=footer, 357px wide. Small introductory label changes to the same blue. Orange free badge and blue border remain. Keyboard focus is the browser auto ring.
  document:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#3f6ecc'
    border: '2px solid #447fe0'
    rounded: 12px
    height: 96px
    padding: 0px 8px
    typography: 24px / 700
    hover: 'bg #ffda1b'
    pressed: 'bg #ffda1b'
    use: 資料をダウンロード — main-content link to /document/?link=footer, 357px wide. Blue label and border remain. Keyboard focus is the browser auto ring.
  nav-features:
    type: button
    textColor: '#202226'
    rounded: 0px
    height: 88px
    padding: 0px 14.25px
    typography: 14px / 700
    hover: 'parent background #fbf8ee'
    pressed: 'parent background #fbf8ee'
    use: 機能 — navigation link to /func/index/?link=glonavi, 56.5px wide, transparent over the white header. State background belongs to its li parent; the link text remains unchanged. Keyboard focus is the browser auto ring.
  data-card:
    type: card
    backgroundColor: '#ffffff'
    textColor: '#3f6ecc'
    rounded: 12px
    height: 120px
    padding: 0px
    typography: 20px / 700
    hover: 'bg #ffda1b'
    pressed: 'bg #ffda1b'
    use: '人材情報の一元化 — card link to /scene/jyoho_ichigenka/?link=top-9box, 373.3px wide. fg and font describe its visible h3 label, which retains its color. Anchor base is 16px/400 with foreground #202226, changing to #447fe0 on hover and press; hidden description inherits that change. Keyboard focus is the browser auto ring.'
fonts:
  roles:
    heading: Noto Sans JP
    latin: Inter
---

# Design System Inspiration of Kaonavi

## Overview

### Visual Theme & Atmosphere

Kaonavi is a Japanese cloud talent-management service for bringing personnel information together and supporting decisions about people. Its company was established on 27 May 2008; the service business began on 16 April 2012. The current product introduction connects usable, regularly updated personnel data with AI-assisted decisions across management, HR and employees. [Company overview](https://corp.kaonavi.jp/company/), [product introduction](https://www.kaonavi.jp/about/).

The brand combines sunny yellow with blue, rounded controls and a human subject. Its June 2022 refresh changed the logo's emphasis from matching faces and names to understanding individual personality. Circles represent people, triangles their fields of vision, and the overlap represents understanding another person's possibilities. The announcement associates yellow with playfulness, blue with sincerity, and their green overlap with warmth and reassurance. [Official rebrand announcement](https://www.kaonavi.jp/news/press-release/detail/pr20220512/).

The current evolution is toward “Talent intelligence”: the company announced that vision in October 2025 and an AI agent, KTi, on 1 October 2026. The live homepage makes this visible through a KTi announcement strip and promotion beside task links. Yellow also works as interaction feedback: filled blue actions turn yellow with blue lettering. [Vision announcement](https://www.kaonavi.jp/news/detail/pr20251021/), [KTi announcement](https://www.kaonavi.jp/news/detail/pr20261001/), [measured homepage](https://www.kaonavi.jp/).

Kaonavi separately documents its product design system, **sugao**, around understandable interfaces and reusable components. The values below describe the public service homepage; authenticated product screens were not measured. [Official sugao page](https://brand.kaonavi.jp/sugao).

### Brand Narrative

The 2022 identity frames understanding a person as something deeper than matching a face to a name. Today's product introduction extends the people-data story toward AI-assisted action and decision support. The resulting visual reference is human-facing and bright: yellow highlights, blue actions, rounded cards and visible illustrations. The historical rationale comes from the company; the last sentence describes the measured homepage. [Rebrand announcement](https://www.kaonavi.jp/news/press-release/detail/pr20220512/), [product introduction](https://www.kaonavi.jp/about/), [homepage](https://www.kaonavi.jp/).

### Principles

The official sugao page states two connected aims: make the brand's individuality clear while providing an understandable user experience, and provide reusable components for developers and designers. It describes interfaces that help users enter data and obtain appropriate information. These are documented product-system intentions; the homepage measurements supply the concrete styles in this reference. [Sugao](https://brand.kaonavi.jp/sugao).

### Personas

No formal persona document was verified; the product introduction explicitly discusses management, HR and employees as decision-making contexts. [Product introduction](https://www.kaonavi.jp/about/).

## Colors

The homepage exposes 58 first-party root properties alongside 47 WordPress presets. Its own palette uses natural names and color collections. These are live values, not an inferred ramp. [Homepage](https://www.kaonavi.jp/).

| Role in this reference | Value | Evidence |
|---|---|---|
| Primary/action fill: kaonavi water | `#447fe0` | `--water`; contact and trial rest states, including their borders |
| Sun: highlighted surfaces and action feedback | `#ffda1b` | `--sun`; all four action links' hover and pressed states |
| Foreground | `#202226` | `--night`; paragraph ink, 27 sampled paragraphs |
| Canvas | `#ffffff` | `--cloud`; most frequent sampled background, 53 elements |
| Link and visible card-title ink | `#3f6ecc` | `--pu-400`; measured labels |
| Sandstone; nav parent hover surface | `#fbf8ee` | `--sa-50`; parent of the 機能 link |
| Subtle surface | `#fafafc` | `--gr-50`; 16 sampled backgrounds |
| Pale blue surface | `#edf6ff` | `--pu-50`; 15 sampled backgrounds |
| Muted surface | `#f0f1f5` | `--gr-100`; 7 sampled backgrounds |
| Border | `#d0d1d3` | `--gr-250`; 25 sampled borders |
| Muted foreground | `#737378` | `--gr-500`; 7 sampled paragraphs |
| Secondary foreground | `#56575b` | `--gr-600`; 14 sampled text elements |
| Papaya 400 | `#ee7100` | `--pa-400`; trial action's 無料 pseudo-element badge |
| Avocado 500 | `#197f38` | `--av-500`; 9 sampled backgrounds |

The official Color guide calls **kaonavi sun** and **kaonavi water** the primary pair, with the same hex values. It says not to use sun as text color. Use blue labels on yellow feedback surfaces, as measured. [Brand Deck: Color](https://brand.kaonavi.jp/guidelines/color).

Framework and embed colors do not enter this palette. In particular, the shadow-root `--brand-color-*` properties are part of the embedded styling and are not Kaonavi's root palette.

## Typography

**Official product use:** no product-specific font prescription was verified. The official Brand Deck's communication typography is a separate evidence domain.

**Official brand documentation:** the Typography guide designates **たづがね角ゴシック** as its primary typeface. It describes a refined, natural appearance with warmth and suitability for mixed Japanese and Latin text. The guide names **Noto Sans JP** for Japanese and **Inter** for Latin as its secondary alternatives when the primary face cannot be used. These are the company's documented alternatives. [Brand Deck: Typography](https://brand.kaonavi.jp/guidelines/typography).

**Live-loaded on the homepage:** `document.fonts` reports YakuHanJP normal/bold, Noto Sans JP 400/700 and Inter 400/700, plus five additional entries whose roles are unresolved. The homepage's declared h1 family is Noto Sans JP. Google Fonts supplies the linked Inter/Noto Sans JP stylesheet; the census records YakuHanJP sources on jsDelivr. The two structured family roles are therefore `heading: Noto Sans JP` and `latin: Inter`; neither asserts the family of every control. [Homepage](https://www.kaonavi.jp/).

**Official distributed assets:** the guide links to Google Fonts pages for its secondary alternatives. No font binary or license was downloaded or reviewed.

**Declared-only:** body and button CSS list YakuHanJP followed by a local Japanese stack beginning `游ゴシック体, YuGothic, "Yu Gothic M"`. The local `Yu Gothic M` aliases are declared with `local(...)`; the loaded-face census does not confirm them. A first-family string in a computed stack is not per-glyph font verification.

**Unresolved:** たづがね角ゴシック is documented but absent from the homepage's loaded-face list; retain its name and guidance without a specimen. The extra loaded faces and the exact local face painting Japanese glyphs remain unresolved. **Substitute: none chosen.**

Measured type metrics: header navigation and small actions are **14px/700**, line-height **28.8px**; the large document/trial labels are **24px/700**, line-height **33.6px**, tracking **2.4px**. The personnel-data card's visible h3 is **20px/700**; its anchor's base style is **16px/400**. These metrics do not assign the declared local stack to an unverified font face.

## Layout

At the measured 1440×1000 viewport, the header's announcement strip is 40px high and the main navigation links are 88px high. The screenshot shows the logo and navigation on one horizontal row, with action links at the right. [Homepage](https://www.kaonavi.jp/).

The scene-card survey records three columns at x≈133, 526 and 919px, with cards about 373.3px wide and 120px high. The news and seminar links form two 560×120px cards at x=133 and 733px, each with 32px padding. The large closing action pair is 357px wide per link. Preserve these distinct content densities when building a desktop composition; they are observations at one viewport, not a verified breakpoint system.

### Responsive Behavior

Mobile, alternate breakpoints and touch states were not measured; the reference describes desktop 1440×1000.

## Elevation & Depth

The measured large action pair and personnel-data card share this computed shadow:

```css
box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
            rgba(0, 0, 0, 0.14) 0px 6px 10px -2px,
            rgba(0, 0, 0, 0.2) 0px 1px 5px 0px;
```

Their hover and pressed snapshots retain it. The two small header actions and nav link have `box-shadow: none`. The homepage also declares four `--elevation-*` properties using night-colored rgba values; their application to these measured controls was not established. [Homepage](https://www.kaonavi.jp/).

## Motion & Easing

Computed transition strings are `all 0.2s ease 0s` on the small header actions and nav link, and `all 0s ease 0s` on the large actions and scene card. Hover and pressed samples settled after 900ms; the header-action records report a longest transition of 200ms. These are control-level observations, not a general motion scale. Carousel timing, scrolling behavior and reduced-motion behavior were not measured.

---

**First-party sources:** [homepage](https://www.kaonavi.jp/); [company overview](https://corp.kaonavi.jp/company/); [history](https://corp.kaonavi.jp/company/history/); [privacy/legal identity disclosure](https://corp.kaonavi.jp/privacypolicy/); [product introduction](https://www.kaonavi.jp/about/); [2022 rebrand](https://www.kaonavi.jp/news/press-release/detail/pr20220512/); [2025 vision announcement](https://www.kaonavi.jp/news/detail/pr20251021/); [2026 KTi announcement](https://www.kaonavi.jp/news/detail/pr20261001/); [Color guide](https://brand.kaonavi.jp/guidelines/color); [Typography guide](https://brand.kaonavi.jp/guidelines/typography); [sugao](https://brand.kaonavi.jp/sugao). Captured 2026-11-03; raw values, controls, source quotes and host controls are recorded in the accompanying verification notes.

## Components

All six controls are links. The header actions have 2px `#447fe0` borders; the large action pair retains the same border color through hover and press. [Measured homepage](https://www.kaonavi.jp/).

| Key and exact target | Geometry | Rest appearance | Hover and pressed |
|---|---|---|---|
| `contact` — お問い合わせ, `/contact/?link=glonavi` | 112×40px; radius 4px; padding 0; 14px/700 | `#447fe0` / `#ffffff` | `#ffda1b` / `#3f6ecc` |
| `resources` — お役立ち資料, `/download/?link=glonavi` | 112×40px; radius 4px; padding 0; 14px/700 | Transparent over white; `#3f6ecc` label | Yellow `#ffda1b` fill; label unchanged |
| `trial` — デモ・トライアルを希望, `/more/?which=both&link=footer` | 357×96px; radius 12px; padding 0 8px; 24px/700 | `#447fe0` / `#ffffff` | `#ffda1b` / `#3f6ecc`, including the introductory label |
| `document` — 資料をダウンロード, `/document/?link=footer` | 357×96px; radius 12px; padding 0 8px; 24px/700 | `#ffffff` / `#3f6ecc` | Yellow fill; label unchanged |
| `nav-features` — 機能, `/func/index/?link=glonavi` | 56.5×88px; radius 0; padding 0 14.25px; 14px/700 | Transparent over white; `#202226` | Parent li fills `#fbf8ee`; label unchanged |
| `data-card` — 人材情報の一元化, `/scene/jyoho_ichigenka/?link=top-9box` | 373.3×120px; radius 12px; anchor padding 0 | White; visible title `#3f6ecc`, 20px/700 | Yellow fill; visible title retains its color |

The data card's anchor foreground changes from `#202226` to `#447fe0`; this includes inherited colors on its hidden description and other descendants. The visible h3 remains `#3f6ecc`. The component's foreground and font describe that visible label.

Radius is context-dependent: 0 for the nav link, 4px for small actions, 12px for the large actions and scene card. The survey also records 8px news/seminar cards with 32px padding, and compact scene links with a 32px radius. Those additional links were not state-probed.

### States

Hover and pressed were measured with matching `:hover` and `:active`. The four action links and the scene card fill yellow; the filled actions also change their white labels to blue. The nav link changes its parent surface to sandstone. Pressed snapshots add no difference beyond hover within the probe's compared scope. Card pressed evidence comes from the second call; the first call's pressed result was UNMEASURED and was not interpreted as unchanged.

Real Tab focus reaches all six controls. Each gets `rgb(68, 127, 224) auto 1px off 1px`; the ring disappears after blur and is classified as the browser's default ring. No brand focus token is declared. Disabled, loading, validation and selected states were not measured.

## Do's and Don'ts

- Build around the official sun/water pair; use sun as a surface or highlight rather than text. [Color guide](https://brand.kaonavi.jp/guidelines/color).
- Distinguish action-fill blue `#447fe0` from label blue `#3f6ecc`.
- Give the small header actions 4px corners and the large actions 12px corners.
- Preserve the visible card title's own color instead of applying the anchor's inherited foreground to it.
- Retain the documented primary font's identity without rendering an unverified specimen.
- Keep WordPress presets, Joy UI, Tailwind and embedded-widget properties outside the brand palette.

## Voice & Tone

Observed action copy separates a short benefit line from a direct request: `3分でわかるカオナビ` above `資料をダウンロード`, and `実際の画面を見られる・触れる` above `デモ・トライアルを希望`. The current product introduction uses “next move” and decision-support language around AI. This is a description of the opened copy, not a verified corporate voice manual. [Homepage](https://www.kaonavi.jp/), [product introduction](https://www.kaonavi.jp/about/).

## Agent Prompt Guide

“Build a Kaonavi-style desktop action pair: 357×96px links, 12px corners, 2px water-blue borders, 24px/700 labels with 2.4px tracking. Use blue/white for the trial link and white/label-blue for the document link. Both fill sun-yellow on hover and while pressed; the trial label becomes label-blue. Match the measured three-layer shadow. Preserve the separate browser focus behavior.”

“Build a 373.3×120px personnel-data card link with 12px corners, a white surface, blue 20px/700 h3 and supporting illustration. Hover and press fill the surface yellow while the visible title keeps its blue.”

These prompts reuse measured geometry and states. They do not choose a font substitute.

## Governance

### Known Gaps

- **Contrast, `contact`.** Text `#ffffff` on `#447fe0` measures 3.92:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `trial`.** Text `#ffffff` on `#447fe0` measures 3.92:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
