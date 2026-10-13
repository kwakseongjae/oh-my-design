---
name: Brandi
colors:
  canvas: '#ffffff'
  ink: '#202429'
  promo-active: '#ff365d'
  action-direct: '#1e1e1e'
  action-partner: '#00c73c'
  action-on: '#ffffff'
  option-border: '#e6e6e6'
  option-border-disabled: '#e1e1e1'
  badge-surface: '#ebeef2'
  badge-text: '#808893'
typography:
  product-action:
    fontSize: 17px
    fontWeight: 500
    use: Observed direct and partner purchase links on both captured product pages.
  option:
    fontSize: 13px
    fontWeight: 400
    use: Inherited page text on the product-option trigger and expanded list containers (the page body records the same values); not a measured option-label style.
  badge:
    fontSize: 13px
    fontWeight: 700
    use: Observed product-detail badge.
rounded:
  product-action: 6px
  option: 6px
  option-menu: 6px
  badge: 6px
spacing:
  action-x: 4
  action-y: 18
  option-item: 16
  badge-x: 8
  badge-y-start: 2
  badge-y-end: 3
components:
  product-badge:
    type: badge
    backgroundColor: '#ebeef2'
    textColor: '#808893'
    rounded: 6px
    padding: 2px 8px 3px
    typography: 13px / 700 / Noto Sans KR
    use: Observed product-detail metadata badge.
  product-buy-button:
    type: button
    backgroundColor: '#1e1e1e'
    textColor: '#ffffff'
    rounded: 6px
    padding: 18px 4px
    height: 61px
    typography: 17px / 500 Noto Sans KR
    states: default on both product pages (surface-2 capture 17, surface-3 capture 16); the bundle holds no state frame for any Brandi element
    use: Direct purchase link (a.btn-buy) at surface-2::[data-omd-capture="17"], 206 x 61
  product-partner-buy-button:
    type: button
    backgroundColor: '#00c73c'
    textColor: '#ffffff'
    rounded: 6px
    padding: 18px 4px
    height: 62px
    typography: 17px / 500 Noto Sans KR
    states: default on both product pages (surface-2 capture 18, surface-3 capture 17); no state frame
    use: Adjacent partner purchase link (a.btn-n-buy) at surface-2::[data-omd-capture="18"], 206 x 62
  product-cart-button:
    type: button
    backgroundColor: '#ffffff'
    border: '1px #e3e5e8'
    rounded: 6px
    size: 62px x 62px
    states: default on two icon links per product page (capture 19, 20); no state frame
    use: Icon link (a.btn-cart-ico) beside the purchase links at surface-2::[data-omd-capture="19"]; its font size is 0px, so no label style is claimed
  product-option-select:
    type: input
    backgroundColor: '#ffffff'
    border: '1px #e6e6e6'
    rounded: 6px
    size: 560px x 50px
    states: 'rest on the first option trigger on both product pages (surface-2 capture 15, surface-3 capture 14); activating it opened the option list (expanded, menu-open); the second trigger (capture 16) is disabled and records border 1px #e1e1e1; no pointer-state frame'
    use: 'Product option trigger (span, role button, aria-haspopup listbox) at surface-2::[data-omd-capture="15"]; its own #202429 13px / 400 Spoqa Han Sans equals the inherited page text, so it is treated as a container and no label style is claimed'
  product-option-list:
    type: card
    backgroundColor: '#ffffff'
    border: '1px #e6e6e6 on the sides and bottom'
    rounded: 0px 0px 6px 6px
    padding: 0px 0px 1px
    size: 560px x 241px
    states: captured open after the option trigger was activated on both product pages (expanded, menu-open)
    use: 'Option list (ul, role listbox) at surface-2::[data-omd-interaction-capture="menu-0-0"]; its #202429 13px / 400 is the inherited page text on a container, so no label style is claimed'
  product-option-item:
    type: listItem
    backgroundColor: '#ffffff'
    border: '1px #e1e1e1 on the bottom edge of the wrapping li'
    padding: 16px
    height: 59px
    states: four option rows captured in the open list; the last wrapper has no divider; no state frame
    use: Option row (div, role option) at surface-2::[data-omd-interaction-capture="menu-0-2"], 558 x 59; inherited 13px / 400 type, so no label style is claimed
  product-detail-tab:
    type: tab
    textColor: '#9a9a9e'
    border: '4px #f2f2f2 on the bottom edge of the parent li'
    padding: 17px 4px 22px
    height: 68px
    typography: 20px / 400 Noto Sans KR
    selected: 'fg #202429, 20px / 500, parent li bottom border 4px #1e1e1e'
    states: rest on three tabs (capture 22-24); the tab whose li has class active (label capture 21) differs from them and is recorded as selected; no state frame
    use: Product-detail section tab label (a) at surface-2::[data-omd-capture="22"], 290 x 68, inside li in ul.tab
  product-text-tab:
    type: tab
    textColor: '#a4a4a8'
    padding: 0px 0px 0px 17px
    height: 32px
    typography: 22px / 400 Noto Sans KR
    selected: 'fg #1e1e1e'
    states: rest on two tabs (capture 26, 27); the link with class active (capture 25) differs from them and is recorded as selected; no state frame
    use: Product-page text tab link (a) at surface-2::[data-omd-capture="26"]
  product-pagination:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#9a9a9e'
    border: '1px #e6e6e6'
    rounded: 0px
    padding: 0px 4px
    size: 46px x 46px
    typography: 17px / 400 / 46px Noto Sans KR
    selected: 'fg #202429'
    states: rest on eight page links (capture 29-32, 42-45); the links with class page active (capture 28, 41) differ from them and are recorded as selected; no state frame
    use: Product-page pagination link (a.page) at surface-2::[data-omd-capture="29"]
  home-promo-tab:
    type: tab
    backgroundColor: '#ffffff'
    textColor: '#808893'
    border: '1px #d3d7df'
    rounded: 26px
    padding: 0px 24px
    height: 46px
    typography: 18px / 400 / 46px Spoqa Han Sans
    selected: 'bg #ff365d, border 1px #ff365d, fg #ffffff, 18px / 700'
    states: rest on one slide (li swiper-slide-next, label capture 27); the li with class active (label captures 26, 37) differs from it and is recorded as selected; no state frame
    use: 'Home promotional slider tab: an li holding the label link, label at home::[data-omd-capture="27"]; fill, border, radius, padding and height sit on the li'
  home-more-link:
    type: button
    backgroundColor: transparent
    textColor: '#5f6773'
    border: '1px #d3d7df'
    rounded: 28px
    padding: 15px
    size: 320px x 53px
    typography: 14px / 400 Spoqa Han Sans
    states: default on three links (capture 36, 46, 57); no state frame
    use: Home section more link (a) at home::[data-omd-capture="36"]
fonts:
  roles:
    ui: Noto Sans KR
---

# Design System Inspiration of Brandi

## Overview

### Visual Theme & Atmosphere

Brandi is an official Korean women's fashion shopping service: the public site title calls it “여성 패션 쇼핑앱 브랜디,” and its two captured item pages concentrate the available product evidence around choosing an option and proceeding to purchase. Those public commerce surfaces are predominantly white with `#202429` text. The clearest action treatment is not the legacy pink claim: the direct purchase link is `#1e1e1e` with white text, while an adjacent green `#00c73c` link is a partner purchase path. On the home route, `#ff365d` appears on an active promotional slider item; it is therefore recorded as route-local promo evidence rather than a universal Brandi action token. The capture is desktop-only and does not establish an app, marketing, documentation, or account-area system beyond these public routes.

**Key Characteristics:**
- White commerce canvas with `#202429` ink across all three captured routes
- Product-detail purchase pair: direct `#1e1e1e` and a separate green partner action
- 6px rounding on the recorded product actions, option control, listbox, and badge
- Noto Sans KR and Spoqa Han Sans are live-loaded on the captured web surfaces
- Active home promotional slider evidence is `#ff365d`, not a general CTA rule

### Primary tasks

- Shop for women's fashion on the Korean service
- Choose a product option and go through to purchase
- Buy through the adjacent partner link instead of directly

### Brand Narrative

Brandi’s public site identifies the service as “여성 패션 쇼핑앱 브랜디.” Its product pages show a public option-selection and purchase surface, while the site footer identifies Newnex as the hosting operator and describes its payment/intermediation boundary. These are product and legal-context facts, not authority for a broader origin story, market position, mission, or rebrand narrative. No first-party history, mission, or current-evolution source is available.

### Principles

No official Brandi product or design principles are available. The observed commerce constraints above are not presented as official principles.

### Personas

No first-party, source-backed stakeholder groups or research are available. No synthetic personas are included.

## Colors

### Captured commerce colors

- **Canvas** (`#ffffff`): observed page/control background on the home and product routes.
- **Ink** (`#202429`): observed product-option, menu, and general text color.
- **Direct purchase** (`#1e1e1e`): background of `.btn-buy` on both captured product pages.
- **Partner purchase** (`#00c73c`): background of the adjacent `.btn-n-buy`; this is a route-local partner action, not a universal Brandi color.
- **On action** (`#ffffff`): observed text on both recorded purchase links.
- **Promo active** (`#ff365d`): observed only on active home slider list items.
- **Option border** (`#e6e6e6`): default product-option selector border.
- **Disabled option border** (`#e1e1e1`): observed disabled selector border.
- **Badge surface / text** (`#ebeef2` / `#808893`): product-detail badge pair.
- **Component-local colours** recorded in §4, not promoted to palette roles: `#9a9a9e` (unselected product-tab and pagination text), `#f2f2f2` (unselected product-tab underline), `#a4a4a8` (unselected product text tab), `#5f6773` with a 1px `#d3d7df` border (home more link; the same border outlines the unselected promotional tab), and `#e3e5e8` (icon link border beside the purchase links).

No `#ff204b` live use was recorded by the supplied 2026-07-13 capture, so it is not retained as a current token.

## Typography

### Font evidence classes

| Family | Captured use | FontFaceSet / source corroboration | Resolution |
|------|--------------|------------------------------------|------------|
| `Noto Sans KR` | 257 visible uses across home and both product pages, including headings, controls, badges, and purchase links | `loaded`, high confidence, with 124 `fonts.gstatic.com` source URLs | **Verified live webfont.** It is the sole `tokens.typography.family.ui` family. The [Noto documentation](https://notofonts.github.io/noto-docs/website/use/) describes the collection’s OFL use boundary; that licence context does not make it a Brandi-owned font. |
| `Spoqa Han Sans` | 124 visible uses across body, menu, button, badge, and list-item roles | `loaded`, high confidence, backed by the captured FontFaceSet; the artifact lists no exact source URL for this family | **Verified live surface use**, preserved as route-local typographic evidence rather than an additional UI-family token. The [Spoqa project](https://github.com/spoqa/spoqa-han-sans) distributes its family under SIL OFL and documents webfont use; do not rename the exact captured family to a newer upstream alias. |
| `Pretendard` | No visible use | 18 CDN `@font-face` sources but no computed use | **Declared-only.** It is not a Brandi UI token and is not substituted into examples. |
| `Arial` | Seven utility-button uses | System classification; no webfont source | **System-only.** Not a Brandi font claim. |

### Observed hierarchy

| Role | Font | Size | Weight | Line Height | Provenance |
|------|------|------|--------|-------------|------------|
| Product purchase link | Noto Sans KR | 17px | 500 | normal | `.btn-buy` and `.btn-n-buy` on both product pages |
| Product option / expanded menu | Spoqa Han Sans | 13px | 400 | normal | option trigger and listbox on both product pages |
| Product badge | Noto Sans KR | 13px | 700 | normal | `.badge` on both product pages |

Corrected 2026-09-30: the frontmatter recorded `lineHeight: 1.0` for these three roles where the capture records `normal`; the tokens now read `normal`. The option row is the page's inherited body text (the body element records the same `#202429`, 13px / 400 Spoqa Han Sans) on the trigger and list containers, not a measured option-label style.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.product-action.lineHeight`: `normal`
- `typography.option.lineHeight`: `normal`
- `typography.badge.lineHeight`: `normal`

## Layout

The supplied evidence is a 1440×900 desktop capture. It supports only the recorded product-action spacing (`18px 4px`), option-listbox item padding (16px on the representative option wrapper), and compact badge padding. No product grid, page container, sticky bar, mobile layout, or checkout funnel rule is retained without a representative captured selector.

### Responsive Behavior

No mobile viewport was supplied. The public evidence does not establish breakpoints, touch-target requirements, sticky behavior, product-grid columns, or mobile navigation rules.

## Elevation & Depth

The representative purchase links, select trigger, listbox, and badge all have `box-shadow: none`. No shadow scale or image overlay system is established by this capture.

## Motion & Easing

No motion duration, easing curve, transition, or reduced-motion behavior was captured. None is specified.

## Components

### Product purchase action

**Direct purchase — observed default**
- Background: `#1e1e1e`
- Text: `#ffffff`
- Radius: `6px`
- Padding: `18px 4px`
- Font: `17px / 500 / Noto Sans KR`
- Use: `surface-2::[data-omd-capture="17"]` / `.btn-buy` (`product-buy-button`), also observed on surface-3; direct product purchase link, 206px × 61px.

**Partner purchase — observed default**
- Background: `#00c73c`
- Text: `#ffffff`
- Radius: `6px`
- Padding: `18px 4px`
- Font: `17px / 500 / Noto Sans KR`
- Use: `surface-2::[data-omd-capture="18"]` / `.btn-n-buy` (`product-partner-buy-button`), also observed on surface-3; adjacent green partner purchase link, 206px × 62px.

### Product option select

**Default and observed states**
- Background: `#ffffff`
- Text and type on the trigger element: `#202429`, `13px / 400 / Spoqa Han Sans`. Corrected 2026-09-30: these equal the page's inherited body text, so they describe the container, not a measured label; the label sits in a child the capture did not sample.
- Border: `1px solid #e6e6e6`
- Radius: `6px`
- Size: 560px × 50px
- Expanded: The trigger at `surface-2::[data-omd-capture="15"]` opened the recorded listbox on both product routes.
- Disabled: The disabled trigger at `surface-2::[data-omd-capture="16"]` retained white background and `#202429` text with `1px solid #e1e1e1` border.
- Use: Product-option selector (`product-option-select`). The bundle holds no hover, focus, or pressed frame for any Brandi element, so none is specified; validation and selected-option styling are not specified either.

### Product option listbox

**Expanded — observed interaction state**
- Background: `#ffffff`
- Text: `#202429`
- Border: `0px 1px 1px #e6e6e6`
- Radius: `0px 0px 6px 6px`
- Padding: `0px 0px 1px`
- Font: `13px / 400 / Spoqa Han Sans`
- Expanded: `surface-2::[data-omd-interaction-capture="menu-0-0"]` / `.ui-menu` appeared after the option-trigger interaction; a 16px-padded option wrapper was observed inside it.
- Use: Product-option listbox on product pages only (`product-option-list`). Its option rows (`product-option-item`, `surface-2::[data-omd-interaction-capture="menu-0-2"]`) record background `#ffffff`, `16px` padding and 558px × 59px, each wrapping `li` divided by a 1px `#e1e1e1` bottom border except the last. Corrected 2026-09-30: the listbox's `#202429` and `13px / 400` are the inherited page text on a container, not a label style.

### Product detail badge

**Default — observed product metadata badge**
- Background: `#ebeef2`
- Text: `#808893`
- Radius: `6px`
- Padding: `2px 8px 3px`
- Font: `13px / 700 / Noto Sans KR`
- Use: `surface-2::span` / `.badge` (`product-badge`), also observed on surface-3.

### Product-page icon link

**Default** (`product-cart-button`): background `#ffffff`, border 1px `#e3e5e8`, `6px` radius, 62px × 62px; `surface-2::[data-omd-capture="19"]` and `"20"` (`a.btn-cart-ico`), beside the purchase links on both product pages. Its font size is 0px, so no label style is claimed.

### Product-detail section tab

**Default** (`product-detail-tab`): text `#9a9a9e`, `20px / 400 Noto Sans KR`, `17px 4px 22px` padding, 290px × 68px; the parent `li` carries a 4px `#f2f2f2` bottom border. `surface-2::[data-omd-capture="22"]` through `"24"`, inside `ul.tab`.

**Selected**: the tab whose `li` has class `active` (label `surface-2::[data-omd-capture="21"]`) records text `#202429` at 500, and its `li` a 4px `#1e1e1e` bottom border.

### Product-page text tab

**Default** (`product-text-tab`): text `#a4a4a8`, `22px / 400 Noto Sans KR`, 17px left padding, 32px high; `surface-2::[data-omd-capture="26"]` and `"27"`. **Selected**: the link with class `active` (`surface-2::[data-omd-capture="25"]`) records text `#1e1e1e`.

### Product-page pagination

**Default** (`product-pagination`): background `#ffffff`, text `#9a9a9e`, border 1px `#e6e6e6`, square corners, `0px 4px`, 46px × 46px, `17px / 400 / 46px Noto Sans KR`; `surface-2::[data-omd-capture="29"]` (eight links). **Selected**: the links with class `page active` (captures 28 and 41) record text `#202429`.

### Home promotional tab

**Default** (`home-promo-tab`): the `li` has background `#ffffff`, border 1px `#d3d7df`, `26px` radius, `0px 24px` padding and a 46px height; its label link (`home::[data-omd-capture="27"]`) records `#808893` at `18px / 400 / 46px Spoqa Han Sans`.

**Selected**: the `li` with class `active` records background `#ff365d` and border 1px `#ff365d`; its label links (captures 26 and 37) record `#ffffff` at 700.

### Home more link

**Default** (`home-more-link`): transparent, text `#5f6773`, border 1px `#d3d7df`, `28px` radius, `15px` padding, 320px × 53px, `14px / 400 Spoqa Han Sans`; `home::[data-omd-capture="36"]`, `"46"` and `"57"`.

The bundle holds no hover, pressed, or focus frame for any Brandi element (zero `::state-*` samples), so no pointer state is declared anywhere in this reference. Each selected value above rests on a semantic class (`active`, `page active`) together with a measured difference from the unselected siblings; the option trigger's disabled border and its expanded list are the other recorded states.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.brandi.co.kr/; https://www.brandi.co.kr/products/106329458; https://www.brandi.co.kr/products/125381184; https://github.com/spoqa/spoqa-han-sans; https://notofonts.github.io/noto-docs/website/use/
**Tier 2 sources:** https://getdesign.md/brandi (no indexed Brandi record found); https://styles.refero.design/?q=brandi (no Brandi result found in the public search result set)
**Conflicts unresolved:** none

### States

Observed states: the product-option expanded list, the disabled option border (1px `#e1e1e1`), and four selected treatments, each marked by a semantic class and a measured difference from its siblings: the product-detail tab (text `#202429` at 500 over a 4px `#1e1e1e` underline), the product text tab (`#1e1e1e`), the pagination link (`#202429`), and the home promotional tab (`#ff365d` fill, white 700 label). The bundle holds no hover, pressed, or focus frame. Empty, loading, error, success, cart, wish, sold-out, and validation treatments are not specified.

## Do's and Don'ts

### Do

- Keep the direct product purchase link black `#1e1e1e` with white text when reproducing the captured product-page state.
- Keep the green `#00c73c` purchase link scoped to the observed adjacent partner action.
- Use the measured 6px corners and 13px Spoqa Han Sans option text only for the recorded product-option controls.
- Preserve the observed option listbox and disabled border as distinct states with their route/selector provenance.
- Treat Noto Sans KR and Spoqa Han Sans as live font evidence; keep Pretendard declared-only.

### Don't

- Do not restore the legacy pink `#ff204b` CTA, sale badge, wish-toggle, or card system from this evidence set.
- Do not turn the home slider’s `#ff365d` into a universal product action token.
- Do not infer hover, focus, pressed, error, checkout, responsive, or app-native variants from the two recorded menu expansions.
- Do not use the green partner action as evidence of a Brandi-owned brand palette.
- Do not substitute a system font or declared-only Pretendard for the captured loaded families.

### Do's and Don'ts (Summary)

#### Do

- Reuse only values tied to a captured Brandi route and selector.
- Keep font, component, and interaction provenance separate by surface and state.

#### Don't

- Promote declared-only assets or old token values into the current product system.
- Invent checkout, account, marketing, documentation, or mobile components from these three public routes.

## Voice & Tone

The supplied capture establishes the service name and commerce labels only; it does not provide a first-party editorial voice guide or enough verified copy to derive one. No official voice principles or source-backed microcopy are available.

## Agent Prompt Guide

### Verified prompt boundary

“Recreate only the captured Brandi product-detail controls: a `#1e1e1e` direct purchase link and adjacent `#00c73c` partner link, both white 17px/500 Noto Sans KR with 6px radius and `18px 4px` padding; a white 6px product-option select with `#e6e6e6` border and 13px Spoqa Han Sans; and its observed white expanded listbox. Do not add pink CTAs, product cards, heart toggles, hover/focus/error states, grid rules, or a mobile treatment.”

## Governance

### Known Gaps

- **Contrast, `product-badge`.** Text `#808893` on `#ebeef2` measures 3.08:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `product-partner-buy-button`.** Text `#ffffff` on `#00c73c` measures 2.27:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `product-pagination`.** Text `#9a9a9e` on `#ffffff` measures 2.80:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-promo-tab`.** Text `#808893` on `#ffffff` measures 3.58:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-more-link`.** Text `#5f6773` on `#00000000` measures 3.67:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
