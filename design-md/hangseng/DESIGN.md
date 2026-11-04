---
name: Hang Seng Bank
colors:
  primary: '#008945'
  foreground: '#333333'
  link: '#298236'
  action-pressed: '#0d6c29'
  outline-green: '#34a344'
  background: '#ffffff'
  surface: '#f7f7f7'
  muted: '#666666'
  border: '#e5e5e5'
  card-border: '#d9d9d9'
  card-hover: '#f4faf5'
  focus-ring: '#000000'
typography:
  action:
    fontSize: 19px
    fontWeight: 500
    lineHeight: 24
    use: hero CTA label; family for its Han glyphs unresolved
  navigation:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24
    use: 優惠 header navigation label
  service-label:
    fontSize: 14px
    fontWeight: 400
    use: 外匯服務 visible p label; its anchor computes to 16px
  utility:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 20
    use: En language link; loaded Open Sans 400 normal
rounded:
  none: 0px
  action: 5px
  keyboard-focus: 3px
components:
  hero-cta:
    type: button
    backgroundColor: '#008945'
    textColor: '#ffffff'
    border: '1px solid #008945'
    rounded: 5px
    height: 44px
    padding: 9px 19px
    typography: 19px / 500
    hover: 'bg and border #298236; label remains #ffffff'
    pressed: 'bg and border #0d6c29; label remains #ffffff'
    focus: radius 3px; box-shadow rgb(0, 0, 0) 0px 0px 1px 1px inset, rgb(0, 0, 0) 0px 0px 1px 1px; outline none
    use: 了解詳情 — hero link to the steady-pay insurance page, measured 116px wide. The Latin families do not establish the rendered Han face.
  open-account:
    type: button
    textColor: '#298236'
    border: '1px solid #34a344'
    rounded: 5px
    height: 44px
    padding: 4px 11px
    typography: 19px / 500
    hover: 'bg and border #298236; fg #ffffff'
    pressed: 'bg and border #0d6c29; fg #ffffff'
    focus: radius 3px; box-shadow rgb(0, 0, 0) 0px 0px 1px 1px inset, rgb(0, 0, 0) 0px 0px 1px 1px; outline none
    use: '立即開戶 — header action link, 100px wide, transparent over #ffffff. CSS declares loaded Flama 500; Han glyph resolution remains unresolved.'
  offers-nav:
    type: button
    textColor: '#666666'
    rounded: 0px
    height: 40px
    padding: 0px 15px
    typography: 16px / 400
    hover: 'fg #0d6c29; label span::before adds 32px by 2px #298236 bar; parent bg #f7f7f7'
    pressed: 'same observed fg #0d6c29, label bar and parent background as hover'
    focus: same label and parent changes as hover; anchor radius 3px and black inset/outer shadow pair
    use: '優惠 — navigation link, 62px wide, transparent over #ffffff; parent and pseudo-element styling are separate from the anchor background.'
  search-trigger:
    type: button
    textColor: '#666666'
    rounded: 0px
    height: 36px
    padding: 8px 0px 8px 12px
    typography: 12px / 400
    hover: 'fg #298236 and background-image reference changes'
    pressed: hover values plus underline solid rgb(41, 130, 54)
    focus: 'fg #298236; underline; radius 3px; black inset/outer shadow pair; background-image remains the rest reference'
    use: '搜尋 — icon-only action link, 28px wide, transparent over #f7f7f7. This is the closed-search trigger; the hidden input was not measured.'
  fx-card:
    type: card
    textColor: '#333333'
    rounded: 0px
    height: 90px
    padding: 0px
    typography: 14px / 400
    hover: 'fg #298236; inner panel bg #f4faf5 and 1px solid #34a344 border'
    pressed: same observed fg and inner panel changes as hover
    focus: anchor radius 3px and black inset/outer shadow pair; inner panel keeps rest bg and border
    use: '外匯服務 — 152px-wide card link. Transparent anchor; its first child supplies the #ffffff panel and 1px solid #d9d9d9 border. Font records the visible p label; anchor computes to 16px/400.'
  english-link:
    type: button
    textColor: '#666666'
    rounded: 0px
    height: 36px
    padding: 8px 12px
    typography: 12px / 400
    hover: 'fg #298236; underline solid rgb(41, 130, 54)'
    pressed: same observed foreground and underline as hover
    focus: 'fg #298236; underline; radius 3px; black inset/outer shadow pair'
    use: 'En — language navigation link, 38px wide, loaded Open Sans 400; transparent over #f7f7f7.'
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    latin-utility: Open Sans
    latin-action: Flama
---

# Design System Inspiration of Hang Seng Bank

## Overview

### Visual Theme & Atmosphere

Hang Seng is a Hong Kong bank founded in 1933, serving individuals and businesses with banking, investment and wealth management. Its [bank profile](https://www.hangseng.com/about-us/corporate-information/bank-profile/) connects its mobile app and physical service network as one customer experience. The [official history](https://www.hangseng.com/about-us/corporate-information/major-milestones/) traces its start to a small money-changing shop in Sheung Wan.

The expression combines a red emblem and bilingual wordmark with a predominantly white interface, green actions, pale service icons and domestic lifestyle photography. In the captured homepage, an insurance promotion sits beside a white text panel; below it, compact service tiles lead into larger photographic offer cards.

The January 2026 [brand campaign](https://cms.hangseng.com/cms/ccd/eng/PDF/120126e.pdf), **“Deeply Rooted. Ever Evolving”**, develops the bank's heritage through its spade-coin emblem, presented as an entrance to the future. Children portraying bank staff express connections across generations.

The measured homepage is the Hong Kong Traditional Chinese edition (`www.hangseng.com/zh-hk/home/`, HTML `lang="zh-Hant"`), reached from the requested `/zh-hk/` address.

Primary tasks visible here are account opening, access to banking, finding everyday financial services, and exploring offers.

### Brand Narrative

The bank's [2020 anniversary account](https://www.hangseng.com/cms/fin/fld/statement/annual-report-2020/88-Years-and-Ever-growing-eng.html) explains its name as **ever-growing**, linking growth to its relationship with Hong Kong. The 2026 campaign carries that continuity forward through the historic emblem and imagery of younger generations. This supports a design direction that pairs familiar identity with approachable, contemporary scenes.

### Principles

The [bank profile](https://www.hangseng.com/about-us/corporate-information/bank-profile/) describes its services as reliable, friendly and centred on customers. As implementation guidance drawn from this homepage: make task entry points easy to scan, distinguish filled and outlined actions, and retain the measured keyboard indication. The latter are design observations, not published corporate principles.

### Personas

No researched personas were verified.

## Colors

These role names describe measured values; the census exposed no first-party custom-property palette. All 28 captured root variables belong to bundled Bootstrap defaults and are excluded.

| Role | Measured value | Evidence on the live page |
|---|---|---|
| Primary action | `#008945` | Hero CTA background and border at rest |
| Foreground | `#333333` | Most frequent paragraph ink: 17 `<p>` elements |
| Link / CTA hover | `#298236` | Outlined action ink; hero hover fill and border |
| Pressed action | `#0d6c29` | Hero and account-action pressed fill; offers navigation emphasis |
| Green outline | `#34a344` | Account-action rest border; service-panel hover border |
| Background | `#ffffff` | White canvas and service-panel rest fill |
| Surface | `#f7f7f7` | Utility navigation background; offers-link highlighted parent |
| Muted | `#666666` | Utility/navigation rest ink; 13 paragraph elements |
| Divider | `#e5e5e5` | Census border colour and header ancestor divider |
| Service-panel border | `#d9d9d9` | FX tile's first child at rest |
| Service-panel hover | `#f4faf5` | FX tile's first child on hover and press |
| Keyboard ring | `#000000` | Authored inset and outer box shadows |

The service anchor itself is transparent: `rgba(0, 0, 0, 0)`. Its child supplies the white panel. Keep that distinction when implementing the card. The red logo colour was not sampled and has no token here.

## Typography

**Official product-use documentation:** no opened source identifies an official product typeface.

**Live-loaded:** the census lists only **Flama 500 normal** and **Open Sans 400 normal**. The `En` utility link declares Open Sans and measures 12px/400 with 20px line height. The account-opening anchor declares Flama and measures 19px/500 with 22px line height. These observations do not identify which face draws Chinese glyphs.

**First-party font references:** the [site's common CSS](https://www.hangseng.com/etc.clientlibs/hase/clientlibs/pws/common/clientlib-rwd-common.min.60b1af2c8ab175a7176991ecc27a921d.css) declares local names followed by relative TrueType URLs, including `rwd-assets/resources/fonts/flama/Flama-Medium.ttf` and `rwd-assets/resources/fonts/open-sans/OpenSans-Regular.ttf`. The capture does not distinguish a local match from a font network response. No separate font distribution package or reuse licence was verified.

**Declared-only:** body, h1 and button share this computed stack, which is not proof that any named face rendered:

```text
"Microsoft JhengHei", 微軟正黑體, "PingFang HK", "Noto Sans CJK TC", Arial, "Helvetica Neue", "Noto Sans", Helvetica, "sans-serif", -apple-system, system-ui
```

The remaining declared `@font-face` variants were not loaded: Flama normal 300/400/600/700 and italic 300/400/500/600/700; Open Sans normal 600/700 and italic 400/600/700. They have no specimen here.

**Unresolved:** the rendered Han face, font licensing and any official type hierarchy. Substitute: none chosen.

Measured metrics remain useful independently of family resolution: hero action 19px/500, line height 24px; offers navigation 16px/400, line height 24px; FX tile's visible paragraph label 14px/400. Its anchor computes to 16px/400, so use the child label's metric for the visible text. A heading size scale was not measured.

## Layout

At the captured 1440×1000 viewport, the six service links run from x=227 to x=1199: a 972px row of 152px tiles with 12px gaps, derived from survey geometry. A three-level header separates utility links, identity/actions and product navigation. The hero spans beyond the content column; its white copy panel sits over the left side of the photographic area.

The full-page capture shows three-column photographic promotions, another three-column editorial row on a pale background, three information cards, help links and a grey footer. Use these distinct content densities when translating the reference into a page.

### Responsive Behavior

Only the 1440×1000 desktop surface was measured; mobile layout and authored breakpoints are unverified.

## Elevation & Depth

The six controls use no rest shadow. Hierarchy comes from white and pale surfaces, thin panel borders, photography and the keyboard-focus shadow. No general elevation scale was measured.

## Motion & Easing

All six controls report the raw computed transition **`all 0s ease 0s`**. Their state snapshots therefore support no nonzero transition duration or brand easing curve. Other page motion was not measured.

---

First-party narrative and legal sources: [bank profile](https://www.hangseng.com/about-us/corporate-information/bank-profile/), [milestones](https://www.hangseng.com/about-us/corporate-information/major-milestones/), [2026 campaign release](https://cms.hangseng.com/cms/ccd/eng/PDF/120126e.pdf), [anniversary account](https://www.hangseng.com/cms/fin/fld/statement/annual-report-2020/88-Years-and-Ever-growing-eng.html), [online notices](https://www.hangseng.com/en-hk/resources/important-message/), [registered-office terms](https://develop.hangseng.com/terms-and-conditions). The legal entity is Hang Seng Bank Limited; the registered-office terms locate it at 83 Des Voeux Road Central, Hong Kong. The notices footer states membership of HSBC Group. Live measurements were captured on 2026-11-03.

## Components

Six product controls were sampled with matched hover, held pointer press and a real Tab walk. The cookie notice was closed using its `關閉` button. No control was activated to navigate, open an account or submit a form. Pointer-state values were read successfully, but their later screenshot crops lost the matching pseudo-state; keyboard-focus crops are valid.

| Control | Rest geometry and appearance | Hover | Pressed |
|---|---|---|---|
| Hero `了解詳情` link | 116×44px; radius 5px; padding 9px 19px; 19px/500; `#008945` fill/border, `#ffffff` ink | Fill/border `#298236` | Fill/border `#0d6c29` |
| Header `立即開戶` action link | 100×44px; radius 5px; padding 4px 11px; 19px/500; transparent on white; `#298236` ink, 1px `#34a344` border | `#298236` fill/border, `#ffffff` ink | `#0d6c29` fill/border, white ink |
| `優惠` navigation link | 62×40px; radius 0; padding 0px 15px; 16px/400; transparent on white; `#666666` ink | `#0d6c29` label; 32×2px `#298236` pseudo-element bar; parent `#f7f7f7` | Same observed changes |
| `搜尋` trigger link | 28×36px; radius 0; padding 8px 0px 8px 12px; 12px/400; transparent on `#f7f7f7`; `#666666` computed ink | Ink `#298236`; background-image reference changes | Same plus computed underline |
| `外匯服務` card link | 152×90px; anchor radius 0, padding 0px; label 14px/400; `#333333` ink; white child panel with 1px `#d9d9d9` border | Label `#298236`; child fill `#f4faf5`, border `#34a344` | Same observed changes |
| `En` language link | 38×36px; radius 0; padding 8px 12px; 12px/400 Open Sans; transparent on `#f7f7f7`; `#666666` ink | `#298236` ink and underline | Same observed changes |

All sampled anchors have `box-shadow: none` at rest. Search-input styling remains unmeasured because its input was hidden in the survey.

### States

Every sampled control receives an authored keyboard indication with `outline-style: none`, a 3px anchor radius and this exact computed shadow:

```css
box-shadow: rgb(0, 0, 0) 0px 0px 1px 1px inset, rgb(0, 0, 0) 0px 0px 1px 1px;
```

This is a site-authored shadow rather than an `auto` outline. The CTA and account link change from 5px to 3px; the other four anchors change from 0px to 3px. All recorded focus changes clear after blur. The offers link also uses its highlighted label, bar and parent surface on focus; the utility language and search links gain green computed ink and underline. The search image reference stays at its rest value during keyboard focus. The FX card keeps its child panel's rest colours during keyboard focus.

Hover and held-press changes are in §4. No disabled, validation, loading or success state was measured.

## Do's and Don'ts

- Use the measured green sequence for filled actions: rest `#008945`, hover `#298236`, pressed `#0d6c29`.
- Keep outlined actions transparent over their measured surface until interaction fills them.
- Style the service card's child panel separately from its focusable anchor.
- Preserve the authored keyboard ring and its 3px focus radius.
- Keep the Han font unresolved; do not turn a CSS fallback name into a verified brand face.
- Exclude Bootstrap defaults from the brand palette.

## Voice & Tone

The live interface uses concise Traditional Chinese action labels such as `立即開戶` and `了解詳情`. Its service heading asks `有甚麼可以幫到你？`, while promotional copy shares space with eligibility and risk text. These are surface observations; no editorial voice manual was verified.

## Agent Prompt Guide

Build a white banking page with a utility strip, bilingual identity row, product navigation, a photographic hero and compact service tiles. Use `#333333` for paragraph ink, `#666666` for muted navigation and `#298236` for links. Follow the observed green CTA states and the 5px action radius. For keyboard focus, change the anchor to a 3px radius and apply the measured black shadow pair. Keep Chinese font selection unresolved.

For a service tile, make the anchor 152×90px and place a white, thin-bordered panel inside it. On hover or press, change that child to `#f4faf5` with a `#34a344` border and `#298236` label. Use the measured 14px/400 visible label metric.
