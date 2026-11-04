---
name: Bithumb
colors:
  primary: '#1c2028'
  brand: '#ff6c00'
  canvas: '#ffffff'
  foreground: '#3d414b'
  on-primary: '#ffffff'
  hero-cta: '#543e35'
  cta-text: '#4f3327'
  cta-surface-text: '#f8f9fa'
  hairline: '#b6aba1'
  muted: '#707882'
  muted-2: '#93989e'
  surface-text: '#f8f9fa'
  price-up: '#e15241'
  price-down: '#4880ee'
  gray-03: '#5d6570'
  gray-06: '#acb0b4'
  gray-07: '#bec1c5'
  gray-08: '#dadde1'
  surface-03: '#f6f7f8'
  surface-04: '#f2f3f4'
  surface-05: '#edeef0'
  surface-06: '#e2e4e7'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    use: Default link style in survey; paragraph size was not separately collected
  control:
    fontSize: 13px
    fontWeight: 500
    use: Header signup link; inactive filters instead use weight 400
  chip-active:
    fontSize: 13px
    fontWeight: 600
    use: Selected 전체 filter, rest only
  cta:
    fontSize: 18px
    fontWeight: 500
    use: Both hero links, with 56px line-height
  nav:
    fontSize: 16px
    fontWeight: 500
    use: Header 거래소 link
  input:
    fontSize: 14px
    fontWeight: 500
    use: Market search input, 22px line-height
  market-tab:
    fontSize: 24px
    fontWeight: 500
    use: Survey market buttons, 31px line-height
rounded:
  none: 0px
  sm: 4px
  md: 8px
spacing:
  sm: 8
  md: 16
components:
  cta-filled:
    type: button
    backgroundColor: '#543e35'
    textColor: '#f8f9fa'
    rounded: 4px
    height: 56px
    padding: 0px
    typography: 18px / 500
    hover: '::after background rgba(218, 224, 255, 0.12), 240px by 56px; base bg and fg unchanged'
    pressed: '::after background rgba(218, 224, 255, 0.12), same as hover'
    use: 거래소 바로가기 — a 240px-wide link to /react/trade/order/BTC-KRW on the light hero; browser auto focus outline only
  cta-outline:
    type: button
    textColor: '#4f3327'
    border: '1px solid #b6aba1'
    rounded: 4px
    height: 58px
    padding: 0px
    typography: 18px / 500
    hover: '::after background rgba(182, 171, 161, 0.15), 240px by 56px; base fg and border unchanged'
    pressed: '::after background rgba(182, 171, 161, 0.15), same as hover'
    use: 법인 서비스 바로가기 — a transparent link to /react/biz/intro on the light hero; outer 242px by 58px includes the border, line-height 56px; browser auto focus outline only
  nav-trade:
    type: button
    textColor: '#1c2028'
    rounded: 0px
    height: 45px
    padding: 21px 16px 0px
    typography: 16px / 500
    hover: 'fg #ff6c00; a 12px by 12px ::before indicator becomes painted'
    pressed: 'fg #ff6c00; same ::before indicator as hover'
    use: 거래소 — a transparent header navigation link to /react/trade/order/BTC-KRW over white; browser auto focus outline only
  asset-search:
    type: input
    textColor: '#1c2028'
    rounded: 0px
    height: 38px
    padding: 0px
    typography: 14px / 500
    hover: width 154px compared with 83px at rest; height 38px and colours unchanged
    pressed: width 154px, same as hover; height 38px and colours unchanged
    focus: width 154px under Tab; returns to 83px after blur; outline none
    use: 가상자산 또는 심볼명 검색 — the transparent inner text input on white, not the surrounding search box; no text entered or form submitted
fonts:
  roles:
    sans: Bithumb Trading Sans
---

# Design System Inspiration of Bithumb

## Overview

### Visual Theme & Atmosphere

Bithumb is a Korean virtual-asset exchange whose corporate introduction dates its service opening to 2014. Its stated direction is to develop from an exchange into a digital financial platform connecting people across the world. The measured homepage is the Korean edition at `bithumb.com/react/`, with HTML `lang="ko"`. [Company introduction](https://www.bithumbcorp.com/ko/company/aboutus.php)

The homepage combines a light, spacious promotional opening with a dense market table farther down. A white header carries the orange symbol and English wordmark; the hero pairs a large dark Korean headline with a dimensional trophy illustration, a brown `#543e35` exchange link and a brown outline companion. Near-black `#1c2028` supplies strong ink, the signup surface and selected filters. It is the structural primary, while the canvas is white `#ffffff`. These are observations of the captured homepage, not a claim about every trading screen.

Bithumb's own identity guide names orange `#ff6c00` and Bithumb Black `#282828`, and explains the symbol as the initial “b” combined with a thumb. The corporate black is distinct from the product's measured near-black. Its October 2024 announcement introduced a Korean BI alongside the change of company name from Bithumb Korea to Bithumb. The measured desktop header still displays the English wordmark. [CI·BI guide](https://www.bithumbcorp.com/ko/promotion/bi.php), [2024 announcement](https://feed.bithumb.com/press/1645174)

The March 2026 web/mobile update introduced Bithumb Trading Sans with equal-width digits, revised contrast, shared trading-layout guidance and a consistent graphics library to improve information clarity. [Product update](https://feed.bithumb.com/press/1652418)

#### Primary tasks

- Find the exchange, asset overview, deposits and withdrawals through the header.
- Follow the exchange or corporate-service hero link; find login and signup.
- Read market prices and signed percentage changes; choose a market or category filter; search by asset or symbol.

### Brand Narrative

The company describes a trajectory from the service launched in 2014 toward a wider digital financial platform. Its 2024 corporate-name change brought the operator's name into line with the exchange brand; the accompanying Korean BI was introduced to improve readability and familiarity. [Company introduction](https://www.bithumbcorp.com/ko/company/aboutus.php), [Name and BI announcement](https://feed.bithumb.com/press/1645174)

The 2026 update connects equal-width digits to steadier changing prices. The live homepage places compact market data below promotional illustration and warmer hero colours; that observed combination remains distinct from the official logo palette. [Product update](https://feed.bithumb.com/press/1652418)

### Principles

Bithumb's published company values are trust, putting customers first, innovation and pursuing the best. They are corporate values, not names for inferred CSS principles. [Vision and mission](https://www.bithumbcorp.com/ko/company/vision.php)

For implementation, the 2026 update supports distinguishable numbers, contrast, consistent layouts and coherent graphics. The capture supplies concrete category controls, active filters, price colours and layered hero hover treatments. [Product update](https://feed.bithumb.com/press/1652418)

### Personas

No official personas were verified; trader, newcomer and market-user profiles are not inferred from the capture.

## Colors

The live census contains 122 first-party `--G-bithumb-new-*` properties, present both as computed root values and stylesheet declarations. The following palette combines those variables with the separately measured hero colours. Swiper's properties are excluded.

| Role | Value | Live basis |
|---|---|---|
| Structural primary | `#1c2028` | `gray_01`, `btn_primary`; signup background and selected filter |
| Brand orange | `#ff6c00` | `keycolor_orange`; navigation hover and press; also the official identity orange |
| Canvas / on-primary | `#ffffff` | `surface_01`, `surface_card`, `btn_primary_onsolid`; light page, white signup label |
| Foreground | `#3d414b` | `gray_02`; paragraph ink in 30 sampled `<p>` elements |
| Muted | `#707882` | `gray_04`; inactive filter labels and footer links |
| Muted secondary | `#93989e` | `gray_05`; secondary text and inactive market tabs |
| Hero CTA | `#543e35` | Exchange link's computed background, not a global CSS brand variable |
| Outline CTA ink | `#4f3327` | Corporate-service link's computed label colour |
| Warm hairline | `#b6aba1` | Corporate-service link's 1px border |
| CTA surface text | `#f8f9fa` | Exchange label; also `surface_02`. The retained `cta-surface-text` and `surface-text` keys refer to this measured label colour |
| Positive market change | `#e15241` | `trade_buy_01`; red positive changes in the captured table |
| Negative market change | `#4880ee` | `trade_sell_01`; blue negative changes in the captured table |

The remaining measured neutral ramp is `#5d6570`, `#acb0b4`, `#bec1c5`, `#dadde1`; light surfaces continue through `#f6f7f8`, `#f2f3f4`, `#edeef0`, `#e2e4e7`. These are computed theme values, not evidence that every shade is a large page surface. The most frequent paragraph colour is actually `#acb0b4` (31 elements), closely followed by `#3d414b` (30); the muted paragraph count must not turn all body copy into pale grey.

Alpha separators remain alpha: `line_02` is `#1c20281a`, measured on filter borders as `rgba(28, 32, 40, 0.1)`. Neither it nor a transparent control is a solid black surface. The red and blue are also named by `btn_buy` and `btn_sell`, so an exclusive price-change-only role is not established. Orange appears in navigation states as well.

## Typography

**Official product use:** The 2026 update explicitly names **Bithumb Trading Sans**. Its fixed-width claim concerns digits, not the entire alphabet. [Product update](https://feed.bithumb.com/press/1652418)

**Live-loaded:** `document.fonts` reports Bithumb Trading Sans at 400, 500, 600 and 700, all normal. Body, H1 and button declarations put this family first. Its `@font-face` rules specify local names followed by first-party WOFF2 URLs under `content.bithumb.com/resources/fonts/bts/`, with `BithumbTradingSansPC-Regular`, `-Medium`, `-Semibold` and `-Bold` filenames. The census establishes loaded faces and declared serving paths; it does not distinguish a local-font hit from a network hit.

**Official distributed assets:** The separate **빗썸고딕 / Bithumb Gothic** page describes a title face in Original and Basic styles, a 2,450-character set, and OTF/TTF packages. Original uses an inclined, filled-square construction; Basic is upright. The page states SIL Open Font License 1.1. This is brand-display context, not proof that Gothic is the homepage's UI family. No package was downloaded and no Gothic specimen is supplied here. [Official font page](https://www.bithumbcorp.com/ko/promotion/font.php)

**Declared-only:** The homepage also has `@font-face` declarations for Spoqa Han Sans Neo (200/300/400/500/700), DMSans (700), Gmarket Sans (700) and Bithumb Gothic (700). None is in the loaded-face list. A relationship between the declared Gothic file and both distributed Gothic styles was not established.

**Unresolved:** No public distribution or licence for Trading Sans was verified. Substitute: none chosen.

| Measured role | Size / weight | Line-height / scope |
|---|---|---|
| Default link style | 14px / 400 | Survey link styles; a separate paragraph size was not collected |
| Header signup | 13px / 500 | 20px |
| Selected filter | 13px / 600 | 21px; inactive filters are 13px / 400 |
| Both hero links | 18px / 500 | 56px |
| Header navigation | 16px / 500 | 24px |
| Market search input | 14px / 500 | 22px |
| Market-tab button | 24px / 500 | 31px |

Use the compact sizes for their measured roles; the homepage also has large section headings, so this is not an all-purpose 12–14px type scale. No verified 12px micro-label rule is supplied.

## Layout

At 1440×1000 the sticky header is 65px high. The market-table links span 1,200px from x=113 to x=1313. The first hero link starts at x=153; the second at x=401, leaving an 8px gap after the first link's 240px width. Header action padding supplies a measured 16px horizontal inset. These local 8px and 16px measurements are not a complete global spacing scale.

The full-page capture runs from the hero through notices, a three-card service carousel, market tabs and category filters, price rows, an app banner, customer support and the footer. The market section has its own sticky region. Keep the distinction between generous promotional sections and the denser tabular area: their typography, targets and amount of open space differ visibly.

Buttons and hero links use 4px corners; filters use 8px; navigation and the inner search input use 0px. Market-row link boxes are 88px high in the survey. These are component-specific measurements, not a rule to round every surface identically.

### Responsive Behavior

No mobile viewport or breakpoint was measured; the official 2026 update documents shared web/mobile UX guidance, without numeric breakpoints for this reference. [Product update](https://feed.bithumb.com/press/1652418)

## Elevation & Depth

The measured action links have no box-shadow, but the page is not shadow-free. The service-card link's immediate wrapper has `box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 20px 0px`. The theme also declares `--G-bithumb-new-shadow_01: drop-shadow(0px 8px 32px #acb0b457)`; that is a filter value, not a measured box-shadow on the hero buttons.

The outline CTA uses a 1px `#b6aba1` border and category filters use a 1px alpha separator. Retain these strokes for those controls, alongside the card's measured soft shadow. The hero's dimensional trophy is part of the captured artwork, not a CSS elevation token.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.service-card-wrapper`: `rgba(0, 0, 0, 0.08) 0px 6px 20px 0px`
- `shadow.declared-filter`: `drop-shadow(0px 8px 32px #acb0b457)`

## Motion & Easing

At rest identity capture, every matched control's computed self transition is `all 0s ease 0s`. This is not a site-wide motion policy. The card's carousel ancestor changed during pointer sampling, so that transform is not promoted to a hover-motion token. No verified authored easing curve is supplied.

---

**Verified:** 2026-11-03. Desktop captures, selectors, raw census, state deltas, narrative excerpts and prior-content dispositions are documented in `verification.md` and `report.md`.

## Components

### Hero exchange link

`거래소 바로가기` points to `/react/trade/order/BTC-KRW`. Its outer box is 240×56px, radius 4px, padding 0px, font 18px/500 and line-height 56px. Rest is `#543e35` with `#f8f9fa` text, no border and no box-shadow. Hover paints a 240×56px `::after` with `rgba(218, 224, 255, 0.12)`; the base background stays brown. Pressed retains that same layer, with no additional delta from hover.

### Hero corporate-service link

`법인 서비스 바로가기` points to `/react/biz/intro`. Its transparent outer box is **242×58px**, radius 4px, padding 0px, with 18px/500 text and a 56px line-height. The `#4f3327` label and 1px solid `#b6aba1` border sit over the light hero. Hover and pressed paint a 240×56px inner `::after` at `rgba(182, 171, 161, 0.15)`; the base label and border do not change. The 58px outer height includes the border.

### Header actions

The `회원가입` link is 79.8×32px, radius 4px, padding 6px 16px, 13px/500 at 20px line-height, `#1c2028` with `#ffffff` text and no border or shadow. Real hover and pressed reads found no change within the comparison scope in §14. Keyboard focus adds only the browser's `auto` outline. Its verified rest values remain useful here; it has no authored state token in `components`.

The `거래소` navigation link is 76.2×45px, square, padding 21px 16px 0px, 16px/500 at 24px line-height, transparent over the white header with `#1c2028` text. Hover and pressed change the text to `#ff6c00` and paint a 12×12px `::before` indicator. Focus alone keeps the dark text and draws the browser's `auto` outline.

### Market search

The inner input with placeholder `가상자산 또는 심볼명 검색` is 83×38px at rest, square, padding 0px, 14px/500 at 22px line-height, transparent with `#1c2028` text. Its width is 154px during hover, pressed and real Tab focus. After keyboard blur it returns to 83px; height, colours, border and outline stay unchanged in the recorded scope. These dimensions belong to the input, not the complete search box.

### Filters and service card

The selected `전체` filter is 36px high with an 8px radius, padding 7px 15px 6px, 13px/600 text, `#1c2028` fill and `#ffffff` label. It **does** retain a 1px `rgba(28, 32, 40, 0.1)` border. Unselected filters have the same measured geometry and border, transparent fill, `#707882` text and weight 400. These are rest/selected observations; their hover, pressed and focus states were not probed, so no interactive chip component is declared.

The portfolio-service card's link hit area is 280×360px, square and transparent with zero padding. Its computed 14px/400 black label belongs to a 1×1px `span.blind`, not the visible card title. Hover and pressed report an underline on the link and a carousel-ancestor transform change; the visible card artwork/title are outside that link subtree. Those reads do not establish a visible card-state recipe, so the card remains prose evidence.

### States

| Control | Hover | Pressed | Keyboard focus |
|---|---|---|---|
| Exchange hero link | `::after` adds `rgba(218, 224, 255, 0.12)` | Same layer; no added change from hover | Browser `auto` outline only |
| Corporate-service hero link | `::after` adds `rgba(182, 171, 161, 0.15)` | Same layer; no added change from hover | Browser `auto` outline only |
| Header signup link | No measured change in comparison scope | No measured change in comparison scope | Browser `auto` outline only; omitted from component tokens |
| Header exchange nav | Text becomes `#ff6c00`; `::before` appears | Same as hover | Browser `auto` outline only |
| Inner market search | Width 83→154px | 154px, same as hover | 154px; back to 83px after blur; no outline |
| Portfolio card link | Raw underline and carousel-ancestor transform change | Same raw deltas | Browser `auto` outline only; no visible title-state claim |

All six had `measured: true` for these three states. Pointer samples had `:hover` true, with `:active` also true for pressed. Keyboard samples had `:focus-visible` true. The signup no-change result compares self, both pseudos and three ancestor levels including their pseudos; there are no descendants in that control. The same comparison applies to the other childless controls. The card additionally has one descendant, its visually hidden label. The property set includes colour, background, border, drawn outline, shadow, opacity, transform, filter, visibility, size, decoration, background and mask details, and supported image/SVG attributes. It does not compare siblings, canvas/video pixels or closed/cross-origin content.

Selected and unselected filter rest values are in §4; their interaction states and all disabled interactions are unmeasured. Browser `auto` outlines are not exported as focus tokens. No consent rejection was reported by the collector; no consent banner or reject control was visible in the captured viewport or listed interactions.

## Do's and Don'ts

### Do

- Use white and pale neutral page sections, with dark ink and compact table controls.
- Keep the brown hero CTA and its translucent hover layer as separate layers.
- Preserve the 56px filled CTA versus 58px bordered companion, and the 32px header signup target.
- Use red for the positive changes and blue for the negative changes shown on this Korean market surface.
- Keep orange navigation hover distinct from the brown promotional CTA.
- Use the verified Trading Sans family for the UI roles in §3. Substitute: none chosen.

### Don't

- Turn the homepage into a uniformly near-black terminal.
- Reclassify the brown hero treatment as an officially documented brown rebrand.
- Convert transparent controls into solid black backgrounds or promote browser focus rings to brand tokens.
- Assign the hidden card-link label's black colour to the visible card title.
- Describe the font's equal-width digits as proof that all its characters are monospaced.
- Rebuild the signature logo from typeset text: the official identity guide prohibits altering its proportions, colours, type or prescribed symbol/logotype combination. [CI·BI guide](https://www.bithumbcorp.com/ko/promotion/bi.php)

## Voice & Tone

The hero calls Bithumb `당신의 안전한 금융 파트너, 빗썸`; service and market sections use conversational invitations such as `오늘의 시세를 확인해 보세요`. Actions name their destinations directly: `거래소 바로가기` and `법인 서비스 바로가기`. For this homepage, pair a safety-led promise with clear task labels and explanatory Korean section headings. This observed voice is more approachable than a uniformly austere professional-terminal description.

## Agent Prompt Guide

“Build a Korean Bithumb homepage-style surface with white and pale neutral sections, `#1c2028` structural ink and `#3d414b` paragraph foreground. Separate a spacious promotional hero from a dense market table. Use verified Bithumb Trading Sans for the measured UI roles. Pair a 240×56px brown `#543e35` exchange link with `#f8f9fa` text and a transparent 242×58px corporate-service link with `#4f3327` text and a 1px `#b6aba1` border; both have 4px corners. Add the exact hover overlay from §4 to each. Use `#ff6c00` for header navigation hover, `#e15241` for positive market changes and `#4880ee` for negative changes. Selected filters are 36px high, 8px radius, 13px/600; unselected ones use 13px/400. Preserve the measured soft card-wrapper shadow. Substitute: none chosen.”

This is an implementation brief derived from the captured surface, not an additional company statement. Use the original logo assets and preserve the distinction between the link hit area and artwork inside a service card.
