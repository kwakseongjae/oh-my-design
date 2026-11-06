---
name: SEGA
colors:
  primary: '#0082ca'
  foreground: '#333333'
  canvas: '#ffffff'
  promotion-surface: '#f3f3f3'
  corporate-navy: '#001560'
  notice: '#cf110f'
  sale-panel: '#991b1b'
  input-ink: '#000000'
typography:
  action:
    fontSize: 29px
    fontWeight: 700
    lineHeight: 40.6px
    use: Topics and important-notice action links; family unresolved beyond the declared stack.
  navigation:
    fontSize: 22.5px
    fontWeight: 700
    lineHeight: 36.5625px
    use: Game navigation link; family unresolved beyond the declared stack.
  search:
    fontSize: 28px
    fontWeight: 400
    lineHeight: 45.5px
    use: Game-search input; family unresolved beyond the declared stack.
  card-base:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 26px
    use: Promotion link base; not a paragraph-wide body scale.
  utility:
    fontSize: 16.5px
    fontWeight: 400
    lineHeight: 26.8125px
    use: Corporate header link.
rounded:
  square: 0px
  action: 5px
  promotion: 7.5px
components:
  topics-cta:
    type: button
    backgroundColor: '#0082ca'
    textColor: '#ffffff'
    rounded: 5px
    height: 84.6px
    padding: 21px 58.6667px
    typography: 29px / 700
    hover: opacity 0.6
    pressed: opacity 0.6
    use: トピックス一覧を見る — a link to /topics/, 465px wide, with a right chevron. Hover and held press reduce the whole link opacity from 1 to 0.6; computed colors stay unchanged. No focus token verified.
  important-link:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#cf110f'
    border: '#cf110f'
    rounded: 5px
    height: 84.6px
    padding: 21px 58.6667px
    typography: 29px / 700
    hover: opacity 0.6
    pressed: opacity 0.6
    use: 重要なお知らせ — a link to /important_infos/, 465px wide, with a 1px solid red border and right chevron. Hover and held press reduce the whole link opacity to 0.6.
  game-nav:
    type: button
    textColor: '#ffffff'
    rounded: 0px
    height: 74.1px
    padding: 18.75px 30px
    typography: 22.5px / 700
    hover: opacity 0.6
    pressed: opacity 0.6
    use: 'ゲーム — a navigation link to /game/, 174.2px wide, transparent on the #0082ca header. Hover and held press reduce the whole link opacity to 0.6.'
  sale-card:
    type: card
    backgroundColor: '#f3f3f3'
    textColor: '#333333'
    rounded: 7.5px
    height: 320.1px
    padding: 5px
    typography: 16px / 400
    hover: opacity 0.6
    pressed: opacity 0.6
    use: 'Black Friday Sale Part1 — a promotion card link to /special/sale/, 460px wide. Its title is #ffffff on a #991b1b panel; the caption is #333333. The 16px metric is the link base; the measured title is 27.75px/700. Hover and held press fade the whole link to 0.6.'
  company-link:
    type: button
    backgroundColor: '#001560'
    textColor: '#ffffff'
    height: 84.3px
    padding: 17px 20px
    typography: 16.5px / 400
    hover: opacity 0.6
    pressed: opacity 0.6
    use: '企業・採用 — a link to https://www.sega.co.jp/, 160.5px wide. Exact border-radius is 0px 0px 0px 12px: only the lower-left corner is rounded. Hover and held press fade the whole link to 0.6.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    loaded: M PLUS 1p
---

# Design System Inspiration of SEGA

## Overview

### Visual Theme & Atmosphere

SEGA develops and sells game content for consoles, PCs and smart devices. Its company outline dates its establishment to 3 June 1960; its history records the arrival of Sonic the Hedgehog in 1991. The Japanese product portal brings that catalog together through game artwork, release information, news and search. [Company outline](https://www.sega.co.jp/company/outline/index.html), [history](https://www.sega.co.jp/company/history/).

On the measured homepage, the distinctive visual combination is a bright blue header, a white outlined SEGA wordmark, large game imagery and angular stripes around section headings. Small rounded corners soften the rectangular actions and promotion cards.

SEGA's official corporate-identity page calls its concept “Amazing Sega” and explains that players' eye responses were translated into sound and visuals. Its 2026 anniversary-shop announcement extends the brand into art and fashion: five artist groups reinterpreted the “GA” portion of the logo. An implementation principle inferred from this surface and brand context is to keep the shared blue interface recognizable while giving each game's imagery room to carry its own character. [Corporate identity](https://www.sega.co.jp/en/group/ci/index.html), [2026 artist collaboration](https://www.sega.co.jp/release/260427_3.html).

The measured homepage is the Japanese edition at `www.sega.jp/`, with HTML `lang="ja"`; the capture did not redirect to another regional edition.

### Brand Narrative

SEGA's documented history spans its 1960 establishment and the 1991 debut of Sonic. Its CI writing connects the brand to emotional player responses; the 2026 anniversary collaboration brings artists' interpretations into merchandise and physical space. Viewed as a design reference, the homepage expresses a shared publisher identity around multiple games' individual imagery. [History](https://www.sega.co.jp/company/history/), [CI](https://www.sega.co.jp/en/group/ci/index.html), [anniversary collaboration](https://www.sega.co.jp/release/260427_3.html).

### Principles

The official CI page emphasizes new experiences and surprise. For implementation, the measured homepage suggests a consistent publisher-colored frame, destination-led action labels and prominent game artwork. Those implementation principles are inferred from the capture. [Official CI](https://www.sega.co.jp/en/group/ci/index.html).

### Personas

No user research or personas were verified.

## Colors

These role names describe measured homepage values; they are not claimed to be SEGA's official token names.

| Role | Value | Measured use |
|---|---|---|
| Primary | `#0082ca` | Topics CTA background; background behind the transparent game-nav link |
| Foreground | `#333333` | Paragraph ink: 65 `<p>` elements; sale-card caption |
| Canvas | `#ffffff` | Important-notice link and search input; text on the blue CTA |
| Promotion surface | `#f3f3f3` | Sale-card link background |
| Corporate navy | `#001560` | Corporate header link background |
| Notice | `#cf110f` | Important-notice text and its 1px border |
| Sale panel | `#991b1b` | Sale-card text panel and triangular corner decoration |
| Input ink | `#000000` | Search input's computed text color; placeholder ink was not separately measured |

The census recorded four computed root custom properties and eight distinct stylesheet-declared properties. Three declared `--swiper-*` properties belong to the carousel library and are excluded from the brand palette. Application-scoped color declarations are not evidence of a global semantic color scale.

## Typography

**Official product use:** the opened first-party company and CI pages did not establish an official UI typeface.

**Live-loaded:** `document.fonts` contained **M PLUS 1p**, normal weights **500** and **800**, plus the **icons** face at **400**. The page includes the Google Fonts stylesheet `https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@500;800&display=swap`. That cross-origin sheet was unreadable to the stylesheet walk, so exact M PLUS font-file URLs were not captured. The `family.loaded` token records loaded-face evidence only; it does not assign this face to the body or to the six measured controls.

The `icons` face has a declared relative source in `../../assets/fonts/iconfont/`, with WOFF and TTF alternatives. It is iconography, not a text specimen.

**Official distributed assets:** no text-font distribution or license was verified from the opened SEGA pages.

**Declared-only:** body, h1 and button declare `メイリオ, Meiryo, "ヒラギノ角ゴ Pro", "Hiragino Kaku Gothic Pro", Verdana, Arial, sans-serif, "ＭＳ Ｐゴシック"`. None of these named text faces appears in the census's loaded-face list. Their actual per-glyph rendering is unresolved; no specimen is supplied for them. `swiper-icons` is also declared, but absent from the loaded list and excluded as a framework face.

**Unresolved:** primary product face, script-level font selection and exact M PLUS element assignments. **Substitute: none chosen.**

Verified metrics survive the unresolved family assignment:

| Element | Size / weight | Line height |
|---|---|---|
| Topics and important-notice links | 29px / 700 | 40.6px |
| Game navigation link | 22.5px / 700 | 36.5625px |
| Search input | 28px / 400 | 45.5px |
| Promotion link base | 16px / 400 | 26px |
| Sale-panel title | 27.75px / 700 | Not captured separately |
| Corporate header link | 16.5px / 400 | 26.8125px |

## Layout

The desktop capture places a large game carousel beside two stacked promotion cards. The carousel's surveyed links measure 960×540px; the sale promotion link measures 460×320.1px. Below are a four-column topics grid, a horizontal release strip, game search, program cards, social links and a tag-filled footer. These are observed arrangements at this viewport, not inferred responsive rules.

The blue topics CTA is centered at x=488px with width 465px. The search input begins at x=123px. The stylesheet declares `--gap: 20px` on `.grid`; a complete spacing scale was not verified.

### Responsive Behavior

Only the 1440×1000 desktop viewport was measured; mobile behavior and breakpoints remain unverified.

## Elevation & Depth

All six measured controls have `box-shadow: none`. Contrast, borders, imagery and angular decorations provide separation in the inspected controls. The sale-card wrapper, one level above the link, has a 1.5px solid `#666666` border and a white background. This wrapper treatment is separate from the link's own border-free rest style.

## Motion & Easing

The topics CTA, important-notice link and search input each compute `transition: all 0.4s ease 0s`. The game-nav link, sale-card link and corporate link each compute `transition: opacity 0.4s ease 0s`. The five links settle at opacity 0.6 on hover and held press. The input has the transition declaration but no measured style change. No separate easing curve or carousel timing is specified.

## Components

All measurements are desktop observations at 1440×1000. The five published components are links with a confirmed opacity response. Font metrics below do not establish a loaded family for these controls.

| Control | Geometry and rest treatment |
|---|---|
| `topics-cta`: トピックス一覧を見る | Link to `/topics/`; 465×84.6px; radius 5px; padding 21px 58.6667px; 29px/700; `#0082ca` background and `#ffffff` text; 1px transparent border; no shadow |
| `important-link`: 重要なお知らせ | Link to `/important_infos/`; 465×84.6px; radius 5px; padding 21px 58.6667px; 29px/700; `#ffffff` background, `#cf110f` text and 1px solid border; no shadow |
| `game-nav`: ゲーム | Link to `/game/`; 174.2×74.1px; radius 0; padding 18.75px 30px; 22.5px/700; transparent background on `#0082ca`, `#ffffff` text; no border or shadow |
| `sale-card`: Black Friday Sale Part1 | Link to `/special/sale/`; 460×320.1px; radius 7.5px; padding 5px; base 16px/400; `#f3f3f3` background and `#333333` caption; no link border or shadow |
| `company-link`: 企業・採用 | Link to `https://www.sega.co.jp/`; 160.5×84.3px; radius `0px 0px 0px 12px`; padding 17px 20px; 16.5px/400; `#001560` background and `#ffffff` label; no border or shadow |

The sale card separates its colored offer panel from the image: each is 225×225px inside a 450×225px header. Its title is white on the sale-red panel; the caption below is dark. A 60×60px `::before` decoration uses `clip-path: polygon(100% 0px, 100% 100%, 0px 100%)` to form the lower-right triangle. This is campaign-specific card styling.

The `game-search` input is documented in prose only: 1084×100px, radius 0, padding 0px 20px, 28px/400, `#ffffff` background and `#000000` computed text. Its borders are 10px solid `#0082ca` at top and bottom, no right border, and 8px solid `#0082ca` at left. Hover, held press and keyboard focus produced no computed-style change in the probe's comparison scope, so it is omitted from the interactive component registry.

### States

For `topics-cta`, `important-link`, `game-nav`, `sale-card` and `company-link`, hover and held press change the link's own opacity from 1 to 0.6. Pressed snapshots have both `:hover` and `:active` true; their `changedVsHover` lists are empty, so no additional press-only effect was measured. Background and foreground CSS values stay unchanged.

Keyboard focus reached all six controls through Tab, with `focusVisible: true`. Each produced an empty style-change list and `outline-style: none`; no focus token is published. This statement covers the control, its pseudo-elements, its inspected descendants and three ancestors with pseudo-elements. The sale card includes nine descendants, one empty, and one image; the corporate link includes one descendant; the other four controls have none. Sibling menus, caret rendering, external content and pixel-only effects are outside that computed-style conclusion. The input focus crop contains a caret.

Disabled states were not measured. No disabled appearance is specified.

## Do's and Don'ts

Guidance inferred from the measured surface:

- Use the measured blue for broad navigation and filled action links, with white labels.
- Keep the 5px action radius distinct from the sale card's 7.5px radius and the corporate link's single rounded corner.
- Preserve campaign artwork and its local colors as campaign content.
- Reproduce the whole-link opacity fade for the measured links; the raw CSS colors remain constant.
- Keep unverified typography roles and font substitutions absent.

## Voice & Tone

The measured labels name the destination directly: `トピックス一覧を見る`, `発売スケジュールを見る`, `重要なお知らせ` and `ゲーム検索`. Use concise Japanese task labels when following this observed pattern; no official tone manual was verified.

## Agent Prompt Guide

“Build a Japanese game-catalog portal using a bright blue header, white icon-and-text navigation, large game artwork, and a side rail of rounded promotion cards. Use the measured component dimensions above. For the topics action link, use a 465×84.6px rectangle, 5px radius, 29px/700 metrics, blue fill and white label; fade the entire link to opacity 0.6 on hover and held press. Preserve the unresolved family assignment.”

This is an adaptation prompt derived from the inspected homepage, not official SEGA guidance.

## Governance

### Known Gaps

- **Contrast, `topics-cta`.** Text `#ffffff` on `#0082ca` measures 4.16:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
