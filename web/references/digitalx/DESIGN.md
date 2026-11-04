---
name: Digital X
colors:
  primary: '#ff5400'
  primary-hover-declared: '#e64b00'
  background: '#ffffff'
  foreground: '#808791'
  heading: '#212530'
  content: '#41454f'
  muted: '#9fa5b0'
  surface: '#f3f4f9'
  control-surface: '#edeff6'
  control-hover: '#e1e4ee'
  ui-strong: '#171b26'
  black: '#000000'
  exchange-red: '#ff383c'
  exchange-blue: '#0088ff'
typography:
  button-compact:
    fontSize: 14px
    fontWeight: 600
  button-hero:
    fontSize: 17px
    fontWeight: 600
  navigation:
    fontSize: 17px
    fontWeight: 500
rounded:
  r2: 2px
  r4: 4px
  r8: 8px
  r16: 16px
spacing:
  s4: 4
  s6: 6
  s8: 8
  s10: 10
  s12: 12
  s16: 16
  s20: 20
  s24: 24
  s28: 28
  s32: 32
  s40: 40
components:
  app-download:
    type: button
    backgroundColor: '#edeff6'
    textColor: '#171b26'
    rounded: 100px
    height: 40px
    padding: 0 16px
    typography: 14px / 600
    hover: '#e1e4ee'
    pressed: '#e1e4ee'
    use: 앱 다운로드 — header button; computed radius 100px gives a pill. Hover and pointer press change only its background. Observed with fixed overlays hidden during the pointer pass.
  nav-events:
    type: button
    textColor: '#212530'
    rounded: 0px
    height: 68px
    padding: 0 24px
    typography: 17px / 500
    hover: 'fg #000000'
    pressed: 'fg #000000'
    use: 이벤트 — link to /events/ in the light header; transparent background. Foreground and state values describe the visible child span. Observed with fixed overlays hidden during the pointer pass.
fonts:
  roles:
    ui: Pretendard Variable
---

# Design System Inspiration of Digital X

## Overview

### Visual Theme & Atmosphere

Digital X is Mirae Asset's digital-asset investment platform, formerly Korbit; korbit.co.kr now presents it. Its homepage's organization metadata gives 2013 as the founding year. The official company timeline records joining Mirae Asset in July 2026, changing the corporate name in August, rebranding the exchange in September, and redesigning the mobile app and launching an AI agent in October. The company describes connecting traditional and digital assets and serving both individuals and businesses. [Company and history](https://digitalx.miraeasset.com/company/).

The measured surface is the Korean-language Digital X homepage (`digitalx.miraeasset.com/`), reached by redirect from `korbit.co.kr/`. Its expression pairs a large Korean fee message and warm orange hero imagery with a dense market table, restrained blue-grey neutrals, and compact notice rows. Orange `#ff5400` identifies the trading action; the visible price table also uses exchange red and blue. Rounded action buttons sit beside comparatively square navigation and data rows.

Visible tasks include opening the exchange or corporate service, comparing market figures, reading notices and finding support. The footer identifies the operator as **디지털엑스 주식회사**.

### Brand Narrative

The official timeline presents the current identity as a progression from group affiliation and a new corporate name to an exchange rebrand and app/AI development. The homepage expresses that progression through Digital X naming, orange actions and market information. The reference therefore describes the current surface reached from Korbit's domain. [Company timeline](https://digitalx.miraeasset.com/company/).

### Principles

The company's stated themes concern trust supported by internal controls and risk management, connections between traditional and digital assets, and easier investment experiences through AI. These are company positioning statements; no public design-principles document was verified. [Company positioning](https://digitalx.miraeasset.com/company/).

### Personas

No persona research was opened; no personas are inferred from the interface.

## Colors

The following values come from the rendered homepage census, its root custom properties and the measured controls. The census includes the cookie banner and promotional layer.

| Reference role | Value | Evidence and use |
|---|---|---|
| Primary | `#ff5400` | `--color-primary_orange`; hero trading-button background |
| Declared primary hover | `#e64b00` | `--color-button_main_hover`; declaration only for this reference, since the sampled hero button did not change to it |
| Background | `#ffffff` | `--color-bg_white`; census and notice-row background |
| Foreground | `#808791` | Dominant paragraph ink: 9 sampled `<p>` elements; also `--color-text_sub_body` |
| Content | `#41454f` | `--color-text_main_body`; most frequent census text colour, 66 elements |
| Heading | `#212530` | `--color-text_headline`; visible events navigation label at rest |
| Muted | `#9fa5b0` | `--color-text_muted`; inactive market filter |
| Surface | `#f3f4f9` | `--color-bg_gray`; notice-rail divider also uses this colour |
| Control surface | `#edeff6` | Header app-download button at rest; `--color-gray_40` |
| Control hover | `#e1e4ee` | App-download hover and pointer press; `--color-gray_60` |
| Strong UI ink | `#171b26` | App-download label and notice title child; `--color-gray900` |
| Black | `#000000` | Hero secondary-button text and border; events label on hover and press |
| Exchange red | `#ff383c` | `--color-ex_red`; also named by `--color-button_bt_buy` |
| Exchange blue | `#0088ff` | `--color-ex_blue`; also named by `--color-button_bt_sell` |

The paragraph role reflects the sampled `<p>` elements; it is not a universal colour for every text node. Semantic alpha declarations include `--color-overlay_pressed_default: rgba(33,37,48,0.10)` and `--color-overlay_dim: rgba(0,0,0,0.70)`. Their names alone do not establish a measured control state.

## Typography

**Official product-use statement:** no opened brand or company writing names the product's typeface. No such narrative endorsement is claimed.

**Live-loaded:** the homepage census reports **Pretendard Variable** on `body`, `h1` and `button`. Loaded faces are `Pretendard Variable 400 normal`, `Pretendard Variable 500 normal` and `Pretendard Variable 600 700 normal`. The family token refers to this measured public web surface.

**Official served assets:** the same-origin [font stylesheet](https://digitalx.miraeasset.com/_next/static/css/b843c45c2f5afdaf.css) maps weight 400 to `/font/Pretendard-Regular.subset.woff2`, 500 to `/font/Pretendard-Medium.subset.woff2`, and the declared range `600 700` to `/font/Pretendard-SemiBold.subset.woff2`, each with a corresponding WOFF source. These are observed website font declarations, not a verified public font-distribution kit or redistribution licence. The name “Variable” does not independently prove a variable-font axis in these files.

**Declared-only:** `swiper-icons` 400 normal has an embedded data-URL `@font-face` but is absent from loaded faces. It is an icon face, excluded from UI typography and specimens. The generic fallback in CSS is not a second verified brand family.

**Unresolved:** a separate mobile-app font, glyph-by-glyph font selection, font-file axes and redistribution rights were not established. **Substitute: none chosen.**

| Measured text | Size / weight | Line height | Tracking |
|---|---|---|---|
| Hero action buttons | 17px / 600 | 24px | -0.3px |
| Header app-download | 14px / 600 | 20px | -0.3px |
| Events navigation label | 17px / 500 | 24px | -0.3px |
| Inactive market filter | 14px / 500 | 20px | -0.3px |
| Notice category badge | 13px / 600 | Not independently captured on the badge | Not independently captured on the badge |

The notice button's wrapper computes to 10px/400; its visible category badge and title are child elements. Do not use that wrapper metric as the notice-title size. The opened homepage stylesheet separately declares the title child `.bmaw0g9` as 16px/500 with a 22px line height; this is CSS declaration evidence. The root HTML style declares `font-variant-numeric: tabular-nums`.

## Layout

At 1440 × 1000, the sampled market controls begin at x=120px. Notice rows begin at x=903px and are 417px wide, ending at x=1320px. These observed edges span 1200px; they are not a claim about every breakpoint. The fixed header is 68px high, and the paired hero actions start at y=412px.

A narrow 1px `#f3f4f9` left border separates the notice rail in the sampled ancestor styles. The composition places market comparison alongside notices and news, with support and app promotion below, then a dark footer.

The root spacing properties are `--space-s4`, `s6`, `s8`, `s10`, `s12`, `s16`, `s20`, `s24`, `s28`, `s32`, and `s40`: respectively **4, 6, 8, 10, 12, 16, 20, 24, 28, 32 and 40px**. The sampled buttons use 16px or 24px horizontal padding; this does not imply that every control uses the same inset.

### Responsive Behavior

Only the 1440 × 1000 desktop surface was rendered; mobile behaviour and breakpoint transitions were not measured.

## Elevation & Depth

All six sampled controls have `box-shadow: none` at rest, with no measured shadow change. The interface separates controls through fill, border and alignment. `--color-shadow_default: rgba(0,0,0,0.10)` is a root declaration, without a verified product elevation recipe in this capture.

## Motion & Easing

Each sampled control element reports the raw computed transition **`all 0s ease 0s`**. The navigation comparison detected a longer transition somewhere in its compared scope, but the descendant's raw transition string was not serialized. No shared brand duration or easing curve is assigned from that incomplete evidence.

## Components

The two state-bearing component records are the header app-download button and events navigation link. Measurements used real pointer hover/press and keyboard Tab focus. Fixed overlays were hidden during the pointer pass; the cookie banner was not accepted, and the attempted promotional close selector found no visible match.

| Control | Geometry and rest appearance | Measured change |
|---|---|---|
| App-download, “앱 다운로드” | 94 × 40px; computed radius 100px; padding 0 16px; 14px/600; `#edeff6` background, `#171b26` label; no border or shadow | Hover and press: background `#e1e4ee`; Tab focus: no compared style change |
| Events navigation, “이벤트” | Link to `/events/`; 91.2 × 68px; radius 0; padding 0 24px; 17px/500; transparent on the light header; visible child label `#212530`; no border or shadow | Hover and press: visible label `#000000`; Tab focus: no compared style change |

Other measured forms remain useful as visual references:

- Hero trading button, “거래소 바로가기”: 152.5 × 56px; radius 100px; padding 0 24px; 17px/600; `#ff5400` with white text; border and shadow none.
- Hero corporate button, “법인서비스 바로가기”: 183.3 × 56px; radius 100px; padding 0 24px; 17px/600; transparent fill with `#000000` text and a 1px black border; shadow none.
- Inactive “급상승” filter: 63.4 × 32px; radius 8px; padding 6px 14px; 14px/500; transparent over `#edeff6`, with `#9fa5b0` text; border and shadow none.
- First notice row: 417 × 50px; radius 0; padding 12px 0; white fill; wrapper ink black, visible title child `#171b26`, category and date `#808791`; shadow none.

Those four controls had no compared style change in the measured hover, press or focus states, so they are described here without interactive component records. The root radius vocabulary is 2, 4, 8 and 16px, plus `--radius-full: 9999px`; sampled action buttons independently compute to 100px, producing pills.

### States

App-download hover and pointer press both replace `#edeff6` with `#e1e4ee`; the label stays `#171b26`. Events navigation changes its visible child span from `#212530` to `#000000` for both states. The underlying anchor's browser-default blue and active red are not the visible label colours and are excluded from brand tokens.

All six controls received Tab focus with `focusVisible: true`, no compared style change and `outline-style: none`. No focus token is published. None of the focus differences persisted after blur. Disabled states were not measured.

“No change” here covers each control, its pseudo-elements, descendants and their pseudo-elements, and three ancestor levels and their pseudo-elements. The notice row includes 12 descendants; the events link includes one. Cross-origin iframe contents, closed shadow roots, siblings and pixel-only animation remain outside that comparison.

## Do's and Don'ts

When building from the measured homepage:

- Use orange for the prominent trading action, blue-grey surfaces for quieter controls and the measured neutral text roles.
- Pair rounded actions with compact, aligned market and notice rows.
- Use the visible child label when reproducing navigation colours.
- Keep declared palette values separate from observed interaction behaviour; the hero CTA's measured hover preserves its orange fill.
- Preserve the type metrics independently of font availability. Substitute: none chosen.

## Voice & Tone

The homepage leads with a direct fee claim and action labels for opening the exchange or corporate service. The company page pairs ease of entry with expanded possibilities. This is an observation of the opened Korean copy, not a documented editorial style guide.

## Agent Prompt Guide

“Build a Digital X-style desktop market overview: warm orange trading action, a white market canvas, blue-grey control fills, dense aligned figures and a right-hand notice rail. Use the live-loaded Pretendard Variable face with 17px/600 hero buttons and 14px/600 compact actions. Make the app-download button 40px high with 16px horizontal padding and a computed 100px radius; change its background from `#edeff6` to `#e1e4ee` on hover and pointer press. Use the measured events-link label colours for navigation.”
