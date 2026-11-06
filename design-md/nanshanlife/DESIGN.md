---
name: Nan Shan Life
colors:
  primary: '#006fbc'
  primary-deep: '#003b64'
  secondary: '#2e8aca'
  foreground: '#333333'
  utility: '#4d4d4d'
  canvas: '#ffffff'
  service-yellow: '#f3af00'
  service-green: '#7fbe26'
  border: '#e3e3e6'
  border-hover: '#89bfe5'
  utility-pressed: '#f3f3f3'
typography:
  action:
    fontSize: 18px
    fontWeight: 700
    use: Visible label of the 更多消息 link; live measurement
  search:
    fontSize: 18px
    fontWeight: 500
    use: Main help search input; live measurement
  utility:
    fontSize: 14px
    fontWeight: 500
    use: 公平待客 utility navigation link; live measurement
rounded:
  none: 0px
  utility: 12px
  compact: 17px
  action: 36px
spacing:
  card-inset: 24
  utility-inline: 12
components:
  online-cta:
    type: button
    backgroundColor: '#006fbc'
    textColor: '#ffffff'
    height: 44px
    rounded: 36px
    padding: 10px 20px 11px
    typography: 16px / 700
    hover: 'An inner layer becomes opaque: linear-gradient(235.59deg, rgb(0, 111, 188) 5.89%, rgb(0, 59, 100) 93.09%)'
    pressed: 'Hover layer opacity returns to 0; #003b64 active layer opacity becomes 1'
    use: 網路投保 — a header link. Colors, dimensions, label and states are computed; 36px face radius and face padding are declarations in the opened live HTML CSS. Outer anchor has radius 0 and padding 0.
  news-cta:
    type: button
    backgroundColor: '#006fbc'
    textColor: '#ffffff'
    height: 56px
    rounded: 36px
    padding: 16px 24px
    typography: 18px / 700
    hover: Gradient layer opacity 0 to 1; arrow transform matrix(1, 0, 0, 1, 12, 0)
    pressed: '#003b64 active layer replaces the hover layer; arrow remains translated 12px'
    use: 更多消息 — a link with a 196px wide painted face and rgba(62, 114, 151, 0.12) 8px 8px 32px 0px shadow. Face radius and padding are live HTML CSS declarations; outer anchor has radius 0 and padding 0.
  help-link:
    type: button
    backgroundColor: rgba(202, 220, 233, 0.2)
    textColor: '#2e8aca'
    height: 34.4px
    rounded: 17px
    padding: 7px 20px 5px
    typography: 14px / 500
    hover: 'bg rgba(202, 220, 233, 0.5); fg #006fbc'
    pressed: 'bg rgba(202, 220, 233, 0.5); fg #006fbc'
    use: 常見問題 — a link painted by an inner button-fourth face on a white service panel. Face radius and padding are live HTML CSS declarations; outer anchor has radius 0 and padding 0.
  nav-fair:
    type: button
    textColor: '#4d4d4d'
    height: 22.4px
    rounded: 12px
    padding: 0px 12px
    typography: 14px / 500
    hover: 'fg #333333'
    pressed: 'bg #f3f3f3; fg #333333'
    use: 公平待客 — a transparent utility navigation link on the homepage's light neutral header. Measured in the second states call at page top.
  help-search:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#333333'
    border: '#e3e3e6'
    height: 72px
    rounded: 999px
    padding: 20.5px 99px 20.5px 31px
    typography: 18px / 500
    hover: 'border 1px solid #89bfe5'
    pressed: 'border 1px solid #2e8aca; box-shadow rgba(5, 94, 156, 0.05) 0px 0px 0px 4px'
    focus: 'border 1px solid #2e8aca; box-shadow rgba(5, 94, 156, 0.05) 0px 0px 0px 4px'
    use: Main help search input, placeholder 請輸入您的問題或關鍵字; 418px wide at the measured desktop viewport. Focus border and shadow disappear after blur.
  club-card:
    type: card
    backgroundColor: '#f3af00'
    textColor: '#ffffff'
    height: 101.9px
    rounded: 0px
    padding: 24px
    typography: 18px / 700
    hover: Gradient before layer opacity 0 to 1; arrow transform matrix(1, 0, 0, 1, 3, 0)
    pressed: Same gradient layer opacity and 3px arrow translation as hover
    use: 南山聚樂部 查看點數兌換好禮 — a 256px wide card link. Font is the measured title; the outer link is 16px/400. Subtitle opacity is 0.7.
fonts:
  roles:
    sans: Lexend Deca
    cjk: Noto Sans TC
---

# Design System Inspiration of Nan Shan Life

## Overview

### Visual Theme & Atmosphere

Nan Shan Life (南山人壽) is a Taiwanese insurer founded in July 1963. Its company introduction pairs the vision of building a better future with the brand promise **「未來 有備而來」**: preparing people for the changes and risks ahead. The homepage makes that practical through insurance categories, policy service shortcuts, a member club and help search. [Company introduction](https://www.nanshanlife.com.tw/nanshanlife/about-company/)

Its identity combines a blue mountain mark with yellow and green. The chairman's statement describes adding the colors of sunshine and green land to bring warmth, vitality and a connection to sustainability. It also connects the renewed identity to customer service center renovations beginning in 2023 and to inclusive service design. On the measured homepage, blue action pills, yellow and green service tiles, rounded white panels and illustrated people express that warmer direction. The screen observations describe this website; the service center statement concerns physical spaces and service processes. [Chairman's statement](https://www.nanshanlife.com.tw/nanshanlife/about-fairtreatment-chairman/)

The May 2026 policyholder newsletter develops the future-facing promise through longevity: a forum about longer lives and a brand film showing real people taking up new pursuits later in life. This gives the site's insurance and health content a context of continuing possibility and preparation. [May 2026 newsletter](https://www.nanshanlife.com.tw/public_promotion/subject/edm/202605/event.html)

The measured homepage is the Traditional Chinese edition at `www.nanshanlife.com.tw/nanshanlife/`, with HTML `lang="zh-TW"`; the requested root URL redirects there.

### Brand Narrative

The story connects an insurer founded in 1963 to an expanded idea of preparation: practical insurance service, health information and the opportunities of a longer life. The chairman's account of a warmer, more vital identity and the 2026 newsletter's real-life stories provide that continuity. The website translates it visually through blue actions, sun-yellow and green destinations, and illustrated people alongside service information. [Company](https://www.nanshanlife.com.tw/nanshanlife/about-company/), [identity context](https://www.nanshanlife.com.tw/nanshanlife/about-fairtreatment-chairman/), [2026 development](https://www.nanshanlife.com.tw/public_promotion/subject/edm/202605/event.html)

### Principles

The company's stated values include integrity and service, altruistic intent, warm professionalism and the courage to pioneer. The following building guidance is inferred from the captured surface: give everyday policy tasks prominent entry points, distinguish destinations with color, and keep interaction feedback local to the control. The chairman explicitly discusses inclusive design for customer service spaces and processes; no claim of website-wide accessibility conformance is made here.

### Personas

No independently researched personas or behavioral profiles were verified.

## Colors

These reference role names map to measured homepage colors. No first-party custom property palette was found: the census's two root variables and five distinct declared variables all belong to Swiper and are excluded.

| Role | Value | Observed use |
|---|---|---|
| Primary | `#006fbc` | Painted faces of 網路投保 and 更多消息 |
| Primary deep | `#003b64` | CTA active layers and dark endpoint of their hover gradients |
| Secondary | `#2e8aca` | 常見問題 at rest; search focus border |
| Foreground | `#333333` | Paragraph ink: 16 of the 17 paragraphs counted |
| Utility | `#4d4d4d` | 公平待客 utility link at rest |
| Canvas | `#ffffff` | White action labels, search field and panels |
| Service yellow | `#f3af00` | 南山聚樂部 card link at rest |
| Service green | `#7fbe26` | Homepage background census, two occurrences; green service tiles visible in the capture |
| Border | `#e3e3e6` | Search field's 1px rest border |
| Border hover | `#89bfe5` | Search field's 1px hover border |
| Utility pressed | `#f3f3f3` | 公平待客 pressed background |

The small help link uses a translucent fill, `rgba(202, 220, 233, 0.2)`, raised to `rgba(202, 220, 233, 0.5)` on hover and press. Keep its white supporting panel when reproducing that appearance.

## Typography

**Official product use:** no opened brand document identifies an official product typeface.

**Live-loaded:** the census reports **Lexend Deca** and **Noto Sans TC**, each at normal 400, 500 and 700. Body, the sampled h1 and the sampled button declare the same stack, beginning with Lexend Deca and Noto Sans TC. These two loaded families are the only families in the machine tokens. This is evidence of use on the captured homepage, without a claim about other Nan Shan applications or individual glyph selection.

Both are served through first-party `@font-face` WOFF2 URLs under `/nanshanlife/assets/font/`. Lexend Deca's filenames are `lexend-deca-latin-400-normal.woff2`, `lexend-deca-latin-500-normal.woff2` and `lexend-deca-latin-700-normal.woff2`. Noto Sans TC uses the three hashed WOFF2 sources transcribed in the verification notes.

**Official distributed assets:** no separate font kit or distribution/license document was verified. The serving URLs above were observed in CSS and were not separately downloaded.

**Declared-only:** the remaining named fallbacks are Microsoft JhengHei, 微软雅黑, メイリオ and 맑은 고딕, followed by generic sans-serif. None appears in the census's loaded faces. They receive no specimen and are excluded from the family tokens. The declared Swiper icon face is also absent from the loaded list and is excluded as a library asset.

**Unresolved:** official type ownership, licensing, any custom brand face and exact per-script glyph rendering. **Substitute: none chosen.**

| Measured element | Size / weight | Other measured metrics |
|---|---|---|
| 網路投保 visible label | 16px / 700 | Outer link is 16px / 400 |
| 更多消息 visible label | 18px / 700 | Outer link is 16px / 400 |
| 常見問題 visible label | 14px / 500 | Outer link is 16px / 400 |
| 公平待客 | 14px / 500 | 22.4px line height; 0.28px tracking |
| Main search input | 18px / 500 | 28.8px line height; 0.36px tracking |
| 南山聚樂部 card title | 18px / 700 | Subtitle opacity 0.7; outer link is 16px / 400 |

## Layout

At the measured 1440 × 1000 desktop viewport, the hero carousel's visible card is 1200px wide with its left edge at x=120. It combines a text area and an image area. A wide service panel below it places policy task shortcuts beside the yellow, green and blue destination cards.

The full-page capture continues through a two-column insurance category panel, a life-stage planning strip, illustrated dementia-care entry cards, and a news panel beside help search. A broad blue footer gathers navigation and legal information. These are observations of the captured desktop composition, rather than a prescribed grid for other viewports.

### Responsive Behavior

Only the 1440 × 1000 desktop surface was measured; mobile layout, touch states and responsive transitions were not measured.

## Elevation & Depth

White panels sit on a pale neutral field, with large soft shadows providing separation. The measured ancestor `.common-function-diversion` has `rgba(172, 172, 172, 0.24) 8px 20px 96px 24px`. The 更多消息 painted face has `rgba(62, 114, 151, 0.12) 8px 8px 32px 0px` at rest.

Search focus is a distinct small treatment: `rgba(5, 94, 156, 0.05) 0px 0px 0px 4px`, paired with its blue border. Its outline style remains `none`; this authored shadow is the measured focus indicator.

## Motion & Easing

The observed motion uses short lateral arrow travel: 12px on 更多消息 and 3px on the yellow club card. Their link shells report `all 0s ease 0s`; that string does not describe the duration of their animated children.

The help input's raw computed transition is `border-color, box-shadow 0.3s, 0.3s ease-out, ease-out 0s, 0s`. The utility link's is `color, background-color 0.3s, 0.3s ease-out, ease-out 0s, 0s`. These unusual serializations are retained exactly; no global duration or easing token is inferred.

---

**First-party sources:** [live homepage](https://www.nanshanlife.com.tw/), [company introduction](https://www.nanshanlife.com.tw/nanshanlife/about-company/), [chairman's identity and service statement](https://www.nanshanlife.com.tw/nanshanlife/about-fairtreatment-chairman/), [May 2026 policyholder newsletter](https://www.nanshanlife.com.tw/public_promotion/subject/edm/202605/event.html), [website terms](https://www.nanshanlife.com.tw/nanshanlife/declare/), [statutory disclosure](https://www.nanshanlife.com.tw/nanshanlife/about-public-info/). Captured 2026-11-06. Detailed measurements, font serving declarations, controls, source quotes and the two nonsense-path results are in the accompanying verification notes.

## Components

All five actions below are **links**; the search field is an input. For the first three links, a transparent, square anchor wraps the painted face. The computed anchor has 0px radius and 0px padding. Colors, visible label metrics, heights and states below are computed measurements across that anchor and its descendants. Painted-face radii and padding for those three are **CSS declarations from the opened live homepage HTML**, recorded separately from computed geometry.

| Control | Painted appearance and geometry | State behavior |
|---|---|---|
| 網路投保, header | 118 × 44px; `#006fbc` / `#ffffff`; face radius 36px, padding 10px 20px 11px declared in CSS | Hover reveals a gradient layer; pressing replaces it with `#003b64` |
| 更多消息 | 196 × 56px; `#006fbc` / `#ffffff`; face radius 36px, padding 16px 24px declared in CSS | Hover reveals the gradient and translates the arrow 12px right; press retains the arrow position and reveals the dark active layer |
| 常見問題 | 97.1 × 34.4px; translucent blue-grey fill and `#2e8aca` label; face radius 17px, padding 7px 20px 5px declared in CSS | Hover and press raise fill alpha from 0.2 to 0.5 and change label to `#006fbc` |
| 公平待客 | 81.1 × 22.4px; 12px radius; padding 0px 12px; transparent rest fill and `#4d4d4d` label | Hover label `#333333`; pressed fill `#f3f3f3` and same dark label |
| Main help search | 418 × 72px; white fill; `#333333` text; computed radius 999px; padding 20.5px 99px 20.5px 31px | Hover border `#89bfe5`; press and keyboard focus border `#2e8aca` plus a 4px translucent shadow |
| 南山聚樂部 card | 256 × 101.9px; `#f3af00` / `#ffffff`; 0px radius; 24px padding | Hover and press reveal the `::before` gradient and move its arrow 3px right |

The two blue action hover layers contain the computed gradient `linear-gradient(235.59deg, rgb(0, 111, 188) 5.89%, rgb(0, 59, 100) 93.09%)`. Hover opacity changes from 0 to 1. Press returns that layer to opacity 0 and sets the solid dark layer to opacity 1.

The card's live CSS declares `linear-gradient(98.78deg, #f3af00, #f8dc94 100.06%)`; the state probe confirms the pseudo-element opacity change, while its serialized gradient string is shortened. Its full endpoint is therefore CSS-source evidence, not a reconstructed computed string.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| 網路投保 | Gradient layer becomes opaque | Dark active layer replaces gradient | No computed style change within the compared scope |
| 更多消息 | Gradient layer becomes opaque; arrow +12px | Dark active layer; arrow remains +12px | No computed style change within the compared scope |
| 常見問題 | Fill alpha 0.5; label primary blue | Same painted appearance as hover | No computed style change within the compared scope |
| 公平待客 | Darker label | Darker label with light neutral fill | No computed style change within the compared scope |
| Main help search | Lighter blue border | Stronger blue border and 4px shadow | Same border and shadow; both disappear after blur |
| 南山聚樂部 | Gradient pseudo-layer becomes opaque; arrow +3px | Same appearance as hover | No computed style change within the compared scope |

The probe confirmed actual `:hover`, `:active` and keyboard focus matches. Its comparison covers each control and its pseudo-elements, 0–9 descendants including empty layers and their pseudo-elements, and three ancestor levels; the property list and exact counts are in the verification notes. These “no change” results concern that computed-style/DOM scope. Disabled product states were not exercised and are absent from the component tokens.

## Do's and Don'ts

- Use the measured blue faces, white labels and dark active layer for the primary action pattern.
- Pair the compact translucent help link with a white panel and retain its separate label color.
- Use the loaded families and measured label weights; keep large action labels at 700.
- Preserve the distinction between a link's interaction shell and its painted child when implementing the pill.
- Do not promote Swiper defaults into the palette, the unpainted anchor's browser blue/red into label tokens, or unverified fonts into the type system.

## Voice & Tone

The company introduction speaks of preparation, mutual support and a better future. The May 2026 newsletter's later-life stories frame new pursuits as possible at any age. Homepage labels are concrete tasks and destinations: policy claims, policy payments, help, online insurance and member services. This supports a reassuring, practical writing direction; it is an interpretation of those opened texts, not a published voice manual.

## Agent Prompt Guide

“Build a Nan Shan Life homepage-style service panel using white surfaces, blue action links and adjacent yellow and green destination cards. Use the live-loaded Lexend Deca and Noto Sans TC families. A primary action has a 56px painted face, white 18px/700 label, a blue-to-deep-blue hover layer and a 12px arrow translation; its 36px face radius and 16px 24px padding come from the live CSS declarations.”

"Use the measured help input: 72px high, white, 1px neutral border and 18px/500 text. On keyboard focus, use the measured blue border and 4px shadow from §6. Reserve the field's right-hand space for the search action; submission behavior was not exercised."

## Governance

### Known Gaps

- **Contrast, `help-link`.** Text `#2e8aca` on `#cadce933` measures 2.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `club-card`.** Text `#ffffff` on `#f3af00` measures 1.92:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
