---
name: NEC
colors:
  foreground: '#282d3c'
  nec-gray-80: '#3c4155'
  muted: '#a7b1c7'
  canvas: '#ffffff'
  primary: '#2c69ff'
  primary-hover: '#0f1ed2'
  focus-ring: '#2459e6'
  nec-sky-10: '#cadbff'
  primary-pressed: '#eaf0ff'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    use: paragraphs; 317 paragraph characters, 25.6px line height
  nav:
    fontSize: 14px
    fontWeight: 400
    use: footer navigation; 24.5px line height
  button:
    fontSize: 14px
    fontWeight: 500
    use: filled actions and header menus; 24.5px line height
  caption:
    fontSize: 12px
    fontWeight: 400
    use: footer legal links; 19.2px line height
  card-title:
    fontSize: 16px
    fontWeight: 500
    use: visible story-card title; 25.6px line height
  heading:
    fontSize: 32px
    fontWeight: 400
    use: h2/h3; 79 heading characters, 41.6px line height
  display:
    fontSize: 54px
    fontWeight: 300
    use: h1; 27 heading characters, 70.2px line height
  heading-sm:
    fontSize: 28px
    fontWeight: 400
    use: h3; 26 heading characters, 39.2px line height
  body-strong:
    fontSize: 16px
    fontWeight: 700
    use: strong inside paragraphs; 23 characters, 25.6px line height
  body-semibold:
    fontSize: 16px
    fontWeight: 600
    use: span inside paragraph; 11 characters, 24px line height
rounded:
  none: 0px
  button: 4px
  button-lg: 8px
  card: 12px
components:
  purpose:
    type: button
    backgroundColor: '#2c69ff'
    textColor: '#ffffff'
    border: '#2c69ff'
    rounded: 4px
    height: 44.5px
    padding: 9px 16px
    typography: 14px / 500
    hover: 'self bg: rgb(44, 105, 255) -> rgb(15, 30, 210); self border: 1px solid rgb(44, 105, 255) -> 1px solid rgb(15, 30, 210)'
    pressed: 'self bg: rgb(44, 105, 255) -> rgb(234, 240, 255); fg: rgb(255, 255, 255) -> rgb(15, 30, 210) (self, label, 1 descendant); self border: 1px solid rgb(44, 105, 255) -> 1px solid rgb(234, 240, 255)'
    focus: 'self outline: none -> rgb(36, 89, 230) solid 2px off 2px'
    use: NEC グループのPurpose — a link styled as a filled action on the white page.
  about:
    type: button
    backgroundColor: '#2c69ff'
    textColor: '#ffffff'
    border: '#2c69ff'
    rounded: 4px
    height: 38px
    padding: 0px 16px
    typography: 14px / 500
    hover: 'self bg: rgb(44, 105, 255) -> rgb(15, 30, 210); self border: 1px solid rgb(44, 105, 255) -> 1px solid rgb(15, 30, 210)'
    pressed: 'self bg: rgb(44, 105, 255) -> rgb(234, 240, 255); fg: rgb(255, 255, 255) -> rgb(15, 30, 210) (self, label); self border: 1px solid rgb(44, 105, 255) -> 1px solid rgb(234, 240, 255)'
    focus: 'self shadow: none -> rgb(255, 255, 255) 0px 0px 0px 2px, rgb(36, 89, 230) 0px 0px 0px 4px'
    use: About NEC — a link styled as a compact filled action in the About panel.
  nav-solutions:
    type: button
    textColor: '#282d3c'
    rounded: 4px
    height: 38px
    padding: 0px 16px
    typography: 14px / 500
    hover: '#cadbff'
    pressed: '#cadbff'
    focus: 'self outline: none -> rgb(36, 89, 230) solid 2px off 2px'
    use: ソリューション — a paragraph with button role in the white header; transparent at rest.
  search-trigger:
    type: button
    rounded: 4px
    height: 38px
    padding: 0px
    hover: '#cadbff'
    pressed: '#cadbff'
    focus: 'self outline: none -> rgb(36, 89, 230) solid 2px off 2px'
    use: 検索バーを開く — an icon button in the white header; transparent at rest; external search SVG, whose internal fill was not inspected.
  story-card:
    type: card
    textColor: '#3c4155'
    rounded: 0px
    width: 413.3px
    height: 343.4px
    padding: 0px
    typography: 16px / 500
    hover: 'fg: rgb(40, 45, 60) -> rgb(15, 30, 210) (self, 7 descendants); deco: none -> underline solid rgb(60, 65, 85) (2 descendants); descendant img@0.0.3.tf: none -> matrix(1.05, 0, 0, 1.05, 0, 0)'
    pressed: 'fg: rgb(40, 45, 60) -> rgb(15, 30, 210) (self, 7 descendants); deco: none -> underline solid rgb(60, 65, 85) (2 descendants); descendant img@0.0.3.tf: none -> matrix(1.05, 0, 0, 1.05, 0, 0)'
    focus: 'fg: rgb(40, 45, 60) -> rgb(15, 30, 210) (self, 7 descendants); self radius: 0px -> 12px; self outline: none -> rgb(36, 89, 230) solid 2px off 2px; descendant img@0.0.3.tf: none -> matrix(1.02, 0, 0, 1.02, 0, 0)'
    use: Client-zero story link on the white page; transparent at rest. Visible title remains grey while wrapper colour changes; image opacity and source changes that persisted after blur are excluded.
  carousel-next:
    type: button
    rounded: 8px
    height: 38px
    padding: 1px 6px
    focus: 'self border: 1px solid rgba(0, 0, 0, 0) -> 1px solid rgb(36, 89, 230); self outline: rgb(15, 30, 210) solid 1px off 0px -> rgb(36, 89, 230) solid 2px off 2px'
    use: Next cards — an icon button on the white page; transparent at rest, with an external forward SVG background and a blue rest outline.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans JP
---

# Design System Inspiration of NEC

## Overview

### Visual Theme & Atmosphere

NEC is the public-facing name of Japan's 日本電気株式会社 (NEC Corporation), founded on 17 July 1899 and headquartered in Tokyo. Its 2026 integrated report presents IT services and social infrastructure as its business areas. The current direction centres AI implementation and security, expressed on the homepage through the paired headline “Empower Humanity” and “世界に革新と安心を届ける”.

The design organisation describes its ambition as “共感を創り、伝える” — creating and communicating empathy — and turning technology into experiential value. On the measured surface, a light 54px headline, broad white space, human video imagery and small blue action links give that ambition a concrete visual expression. Dark grey text does most of the work; saturated blue identifies actions.

The measured homepage is the Japanese edition at `group.nec/global/ja/`, reached by redirect from `jpn.nec.com/`; its HTML language is `ja`.

#### Primary tasks

Explore NEC's Purpose, BluStellar, security and AI; browse corporate information and story cards; open search and navigation.

### Brand Narrative

NEC's design philosophy connects technology to experience and empathy. Its 2026 report describes social value creation through AI implementation and security technology implementation. The homepage gives this direction a human headline and imagery alongside links into named technology and business areas.

### Principles

The design philosophy names three capabilities: discovering underlying issues and needs through one's own questions; pursuing the essence through repeated visualisation and refinement; and attending to detail to create emotional appeal. These are the organisation's stated design ideas; the measured component recipes above are observations of its website.

### Personas

No verified persona research was opened.

## Colors

The rendered palette is a restrained subset of the CSS palette. The primary below identifies the measured action fill, rather than asserting an official corporate colour specification.

| Token | Value | Observed role |
|---|---|---|
| foreground | `#282d3c` | Header menu ink and paragraph ink (19 paragraphs; tied with the card-text grey). |
| nec-gray-80 | `#3c4155` | Visible story-card title and description ink; also its hover underline. |
| muted | `#a7b1c7` | Footer links (survey rows 33–51). |
| canvas | `#ffffff` | White page canvas and the ink on blue action links. |
| primary | `#2c69ff` | Purpose and About action fill and border at rest. |
| primary-hover | `#0f1ed2` | Purpose and About hover fill/border and pressed ink; carousel-next rest outline. |
| focus-ring | `#2459e6` | Authored keyboard outline, About outer shadow and carousel-next focus border. |
| nec-sky-10 | `#cadbff` | Header menu and search-trigger hover/pressed backgrounds. |
| primary-pressed | `#eaf0ff` | Purpose and About pressed fill/border. |

The two leading paragraph inks are tied at 19 elements each. `foreground` preserves the compiler's name for the first, while `nec-gray-80` identifies the visible card text. White serves both canvas and on-action ink; a second colour token is unnecessary.

### Declared in the site's CSS, not seen painted

These NEC-prefixed root custom-property colours were not found on surveyed elements or measured control fields by the compiler. This list is not exported as tokens. It records CSS declarations, not a demonstrated state palette.

| CSS property | Value |
|---|---|
| `--nec-blue-05` | `#f0f2ff` |
| `--nec-blue-10` | `#e1e5ff` |
| `--nec-blue-20` | `#c3cbff` |
| `--nec-blue-30` | `#9aa8ff` |
| `--nec-blue-40` | `#6b7eff` |
| `--nec-blue-60` | `#0d1ab8` |
| `--nec-blue-70` | `#0b179f` |
| `--nec-blue-80` | `#091485` |
| `--nec-blue-90` | `#07116b` |
| `--nec-gray-05` | `#fbfcfd` |
| `--nec-gray-20` | `#d9dfe9` |
| `--nec-gray-50` | `#8f98ac` |
| `--nec-gray-60` | `#6b7387` |
| `--nec-gray-70` | `#515869` |
| `--nec-sky-20` | `#8bacff` |
| `--nec-sky-30` | `#6b9bff` |
| `--nec-sky-40` | `#4d86ff` |
| `--nec-sky-70` | `#2152d4` |
| `--nec-sky-80` | `#183bb3` |
| `--nec-sky-90` | `#122c99` |

## Typography

### Evidence classes

- **Official product use:** no opened first-party prose specifies a product typeface.
- **Live-loaded:** `Noto Sans JP` weights 300, 400, 500, 600 and 700; CSS serves them as relative WOFF2 slice URLs such as `../fonts/noto-sans-jp/slices/notosansjp-400-0.woff2`. This is the sole exported family. The loaded list also contains the site's local alias `Noto Sans Fallback normal normal`; the alias is not a separately identified brand face or specimen.
- **Official distributed assets:** no font distribution or licence page was verified. CSS font URLs establish delivery on this surface, not redistribution rights.
- **Declared-only:** `Noto Sans`, `Noto Sans SC`, `Noto Sans KR` and `Noto Sans JP Fallback`. The last is a local fallback alias. They receive no specimen and no family token.
- **Unresolved:** which local face satisfies the loaded fallback alias. Substitute: none chosen.

### Measured scale

Body is 16px/400 with 25.6px line height (317 paragraph characters). The h1 is 54px/300 with 70.2px line height. Section h2/h3 text is 32px/400 with 41.6px line height; smaller h3 text is 28px/400 with 39.2px line height. Filled actions and header menu controls use 14px/500 with 24.5px line height. Footer navigation uses 14px/400; legal links use 12px/400 with 19.2px line height. The story title is 16px/500. Paragraph emphasis includes 16px/700 strong text and a 16px/600 span with 24px line height.

## Layout

At 1440px viewport width, the page uses 80px side margins and a 1280px main content span. The survey places the header at 87px high, fixed, with a sticky 48px breadcrumb region. The main video region measures 1280×720px. Story links form a horizontal row with 413.3px widths; their x positions advance by about 433px. The first-party grid properties declare a 20px gutter and twelve desktop columns.

### Responsive Behavior

Only desktop 1440×1000 was measured. CSS declares mobile/tablet/desktop grid columns of 4/8/12 and carousel padding of 20/40/80px; these are declarations, not viewport tests.

## Elevation & Depth

All six controls have `box-shadow: none` at rest. About NEC's keyboard focus uses two shadow rings: white at a 2px spread and `#2459e6` at a 4px spread. The video pause control has the measured translucent background `rgba(41, 46, 61, 0.5)`; this alpha colour remains prose.

## Motion & Easing

Purpose computes `all 0.3s ease-out 0s`; Search computes `background-color 0.3s ease-out 0s`; Next cards computes `filter 0.3s ease-out 0s`. Solutions computes `all 0s ease 0s`. The story link itself computes `none 0s ease 0s`, while its descendant image has measured transforms of `matrix(1.05, 0, 0, 1.05, 0, 0)` on hover/press and `matrix(1.02, 0, 0, 1.02, 0, 0)` on focus. These observations do not specify a site-wide motion system.

## Components

The Purpose link measures 200.7×44.5px, radius 4px, padding 9px 16px, 14px/500. About NEC is a compact 111.5×38px action with radius 4px and padding 0px 16px. Both begin with `#2c69ff` fill/border and `#ffffff` ink, hover to `#0f1ed2`, and press to `#eaf0ff` with `#0f1ed2` ink.

The Solutions menu control is a `<p role="button">`, 134.6×38px, radius 4px, padding 0px 16px, 14px/500. Search is a 38×38px button, radius 4px, zero padding, computed 16px/500. Their rest background is transparent on white; hover and press paint `#cadbff`. Search uses an external SVG image; its internal fill is outside the inspection scope.

The story link measures 413.3×343.4px, zero padding and rest radius 0px. Its wrapper is 16px/400 in `#282d3c`, but its visible title is 16px/500 in `#3c4155`. Hover and press underline the title and scale its image to 1.05. Focus gives the link a 12px radius and scales the image to 1.02.

The Next cards button measures 38×38px, radius 8px, padding 1px 6px, computed 16px/400 and `#000000` foreground. It has a transparent fill, an external forward-arrow background image and a 1px `#0f1ed2` rest outline. Its authored focus changes establish it as a component even though hover and press have no measured changes.

### States

Purpose focus uses a 2px solid `#2459e6` outline with 2px offset; About uses the two shadow rings described under Depth & Elevation. Solutions and Search use the same solid outline. Story-card focus changes its radius from 0px to 12px and adds that outline; its visible label stays grey. The image's persistent lazy-load opacity/source changes are excluded from the authored focus recipe. Next cards gains a `#2459e6` border and changes its 1px rest outline to a 2px outline with 2px offset.

Carousel-next hover and press show no change within the probe's computed-style/DOM comparison scope. No disabled control state was measured. External SVG internals, video pixels and sibling effects are outside that scope.

## Do's and Don'ts

Use generous white space, dark grey text, small blue actions and light display type. Preserve the pale pressed fill and the authored keyboard focus treatment. Keep visible card-title colour separate from the wrapper's inherited colour. Use the measured 4px action corners and 8px carousel-button corners rather than applying a single radius everywhere. Avoid turning the unpainted semantic ramps into demonstrated feedback states.

## Voice & Tone

The observed headline pairs an English aspiration, “Empower Humanity”, with the Japanese phrase “世界に革新と安心を届ける”. The action labels are concise destinations such as “BluStellar”, “AI” and “About NEC”. These are homepage observations, not a published writing guide.

## Agent Prompt Guide

Build a white corporate page with 16px/400 Noto Sans JP body text, a light 54px/300 headline, dark `#282d3c` ink and 80px desktop side margins. Use a 4px-radius blue action link: `#2c69ff` at rest, `#0f1ed2` on hover, then `#eaf0ff` with blue ink while pressed. Give keyboard users the measured `#2459e6` ring. In story cards, underline the grey title and scale the image on hover.
