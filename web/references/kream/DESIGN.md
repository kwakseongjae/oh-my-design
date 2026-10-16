---
name: KREAM
colors:
  canvas: '#ffffff'
  primary: '#222222'
  foreground: '#222222'
  surface: '#f5f5f5'
  muted: '#4e4e4e'
  hairline: '#f0f0f0'
  on-primary: '#ffffff'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    use: Observed default live-commerce text on home and search.
  utility:
    fontSize: 13px
    fontWeight: 400
    use: Observed search-filter control text.
  search:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.21
    use: Observed search input text.
  tab-active:
    fontSize: 16px
    fontWeight: 700
    use: Observed active search-tab label.
rounded:
  none: 0px
  sm: 6px
  recovery: 8px
  merchandising-panel: 16px
  search-filter-pill: 30px
spacing:
  xxs: 2
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 24
components:
  filter-pill:
    type: button
    backgroundColor: '#f4f4f4'
    textColor: '#4e4e4e'
    rounded: 30px
    padding: 0px 8px
    height: 30px
    typography: 13px / 400 / Pretendard Variable
    states: default captured; the bundle holds no pointer-state frame for any KREAM element
    use: Search filter (button.filter_button.tint.shape_pill) at surface-3::[data-omd-capture="18"]; 7 instances
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
    focus: no visible change (measured 2026-10-16) on :focus-visible
  filter-outline:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#4e4e4e'
    border: '1px solid #f0f0f0'
    rounded: 6px
    padding: 0px 6px 0px 4px
    height: 30px
    typography: 13px / 400 / Pretendard Variable
    states: default captured; the bundle holds no pointer-state frame for any KREAM element
    use: Search filter (button.filter_button.line.shape_rect) at surface-3::[data-omd-capture="25"]; 9 instances
  home-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#222222'
    rounded: 0px
    padding: 13px 0px
    height: 44px
    typography: 16px / 400 / Pretendard Variable
    selected: 16px / 700, no bottom border (class active)
    states: rest and route-active variants captured; no pointer-state frame
    use: Home category tab (a.tab) at home::[data-omd-capture="13"]; 7 instances on home; the active one is home::[data-omd-capture="15"]
  search-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#222222'
    border: 2px solid transparent (bottom edge only)
    rounded: 0px
    padding: 0px
    height: 44px
    typography: 16px / 400 / Pretendard Variable
    selected: '16px / 700, 2px solid #222222 bottom border (class active)'
    states: rest and route-active variants captured; no pointer-state frame
    use: Search result-type tab at surface-3::[data-omd-capture="15"]; the active one is surface-3::[data-omd-capture="14"]
  search-input:
    type: input
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px 13px 0px 1px
    height: 29px
    typography: 24px / 700 / Pretendard Variable
    states: default captured; no focus frame
    use: Search input (input.input_search.show_placeholder_on_focus) at surface-3::[data-omd-capture="12"], 468 x 29, letter-spacing -0.36px
  product-card:
    type: card
    backgroundColor: transparent
    rounded: 6px
    padding: 0px 0px 10px
    size: 238px wide, 319px to 340px high
    states: default captured; the bundle holds no pointer-state frame for any KREAM element
    use: Search product card link (a.product_card) at surface-3::[data-omd-capture="37"]; 15 instances; its brand, name and price labels are child elements that were not sampled
  recovery-button:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: 1px solid rgba(0, 0, 0, 0.6)
    rounded: 8px
    padding: 0px
    height: 36px
    typography: 13px / 300 / Pretendard Variable
    states: default captured; the bundle holds no pointer-state frame for any KREAM element
    use: Recovery-route home button (button.button-home) at surface-2::[data-omd-capture="12"], 103 x 36; route-local, not a primary commerce CTA
  merchandising-panel:
    type: card
    backgroundColor: '#f5f5f5'
    rounded: 16px
    padding: 0px
    size: 1188px x 475px
    states: default captured; the bundle holds no pointer-state frame for any KREAM element
    use: Home merchandising panel link (a.layout_stack) at home::[data-omd-capture="21"] through "76" (56 panel links); the enclosing div.flicking-panel computes a 0px radius, so the 16px corner belongs to the link
  gnb-link:
    type: button
    backgroundColor: transparent
    textColor: '#222222'
    rounded: 0px
    padding: 0px
    height: 24px
    typography: 20px / 400 / Pretendard Variable
    states: default captured; the bundle holds no pointer-state frame for any KREAM element
    use: Header main-navigation link (a.gnb_link.badge) at home::[data-omd-capture="8"], letter-spacing -0.3px, three per route on all three routes; the enclosing li.gnb_item computes 16px, which is not the label size
  header-icon-button:
    type: button
    backgroundColor: transparent
    rounded: 0px
    padding: 0px
    size: 40px x 40px
    states: default captured; the bundle holds no pointer-state frame for any KREAM element
    use: Header search button (button.btn_search) at home::[data-omd-capture="10"] and cart link (a.header-cart-button) at "11"; icon-only (textLength 0), on all three routes
  sort-trigger:
    type: button
    backgroundColor: transparent
    textColor: rgba(0, 0, 0, 0.8)
    rounded: 0px
    padding: 0px
    height: 16px
    typography: 13px / 400 / Pretendard Variable
    states: default captured; the bundle holds no pointer-state frame for any KREAM element
    use: Search sort trigger (button.sorting_title) at surface-3::[data-omd-capture="36"], 54 x 16
fonts:
  roles:
    ui: Pretendard Variable
---

# Design System Inspiration of KREAM

## Overview

### Visual Theme & Atmosphere

KREAM is a Korean limited-edition marketplace where members can buy immediately at the lowest available sell offer or place a bid; when a match is made, the seller sends the item to KREAM for authentication before delivery. Its official FAQ also describes warehouse-held, authenticated inventory as eligible for rapid shipping. That transaction model gives the public commerce surface a particular character: a quiet white and charcoal information field that makes product imagery, price, filters, and rankings do the work rather than relying on a broad brand-color system. The current home route is a merchandising surface with campaign modules and product discovery, while the search route is the strongest evidence for the marketplace controls themselves. [Buying FAQ](https://kream.co.kr/faq?category=buying&page=0) · [Authentication standards](https://kream.co.kr/auth_policy)

The supplied live capture shows a tightly neutral interface: `#222222` is the recurring text and border ink, `#ffffff` the canvas, `#f5f5f5` a home-surface fill, and a small search-control layer in `#4e4e4e`/`#f0f0f0`. Corners are not globally rounded: the evidence ranges from square tabs and inputs to 6px product/filter geometry, one 8px recovery action, 16px home merchandising panels, and 30px filter pills. The practical distinction is surface-specific, not a universal component kit. Marketing campaign content visible on the home route is not used as documentation or product-state evidence; the separate FAQ and authentication pages provide service context only, not UI tokens.

**Key Characteristics:**

- Live commerce use of `Pretendard Variable`, verified by computed-family usage plus a loaded FontFaceSet match and 92 KREAM-hosted subset source URLs
- White canvas and charcoal `#222222` chrome across home, recovery, and search captures
- Search-route filters distinguish pill fill (`#f4f4f4`, 30px) from outlined rectangular controls (`#ffffff`, 6px)
- Active search-result tabs retain the charcoal ink and use a 2px bottom border with 700 weight; active home category tabs change weight only
- The capture holds no hover, pressed, or focus frame for any element, and no dialog, toast, loading, or responsive state

### Primary tasks

- Buy a limited-edition item at the lowest sell offer
- Place a bid instead of buying immediately
- Search for a product and narrow it with filters
- Check the authentication standards for a product category
- Get an authenticated warehouse-held item shipped quickly

### Brand Narrative

KREAM describes its service as a way to buy and trade limited-edition goods that are otherwise difficult to obtain, with expert inspection intended to make the exchange safe and quick. Its official buying guidance distinguishes immediate purchase, bid-based purchase, inspection, storage, and delivery rather than reducing the marketplace to a conventional retailer. [KREAM FAQ](https://kream.co.kr/faq?list=true&page=2) · [Buying FAQ](https://kream.co.kr/faq?category=buying&page=0)

The current public surface reflects that service model through discovery, search filtering, product cards, and route-local recovery controls. The reference does not claim a separate KREAM brand history, rebrand, owned typeface, or public design-system program because no first-party evidence for those claims was collected in this pass.

### Principles

1. **Make the transaction path legible.** Official guidance distinguishes immediate purchase and bidding before inspection and delivery. *UI implication:* maintain clear labels for the observed route and step; do not invent transactional states.
2. **Keep authentication explicit.** KREAM publishes product-category authentication standards and assigns responsibility for inspection/guarantees within its policy boundary. *UI implication:* distinguish an inspection statement from a generic marketing assurance.
3. **Keep control evidence local.** Search filters, tabs, and recovery controls appear on different captured contexts. *UI implication:* reuse only the field values and state that were actually observed for that context.

### Personas

*No first-party persona research was collected for this reference. Do not fabricate customer archetypes or demographic facts.*

## Colors

### Observed live commerce surfaces

- **Canvas** `#ffffff` — repeated background across home and search.
- **Primary / foreground** `#222222` — repeated text and border ink across all supplied routes.
- **Home merchandising surface** `#f5f5f5` — observed background of the 56 home merchandising panel links (`a.layout_stack`, 16px radius); not a universal card fill.
- **Search-control muted ink** `#4e4e4e` — observed on both default filter-control styles.
- **Search-control hairline** `#f0f0f0` — observed 1px border on the outlined search filter control.
- **On-primary / inverse** `#ffffff` — observed text and border value in the live capture; no semantic CTA role was established.

The collector also saw product-content colors such as `#00cc44` and `#f15746` on the search route. It does not establish a semantic price, status, gain, or loss role, so these values are deliberately absent from machine tokens. No official public design-system page was found in this pass.

## Typography

### Evidence classes

- **Live computed surface-use and loaded webfont:** visible text on all three supplied KREAM routes resolves first to **Pretendard Variable**. The collector records 1,026 visible uses across headings, body text, buttons, cards, inputs, list items, tabs, and badges; it also records a loaded FontFace match and 92 KREAM-hosted `woff2` subset URLs. `Pretendard Variable` is therefore the sole KREAM UI-family machine token.
- **Official font documentation and license:** Pretendard’s own documentation describes it as a cross-platform, multilingual neo-grotesque family with variable-font support. Its repository distributes the family under SIL Open Font License 1.1; that license permits commercial use, modification, and redistribution subject to its terms. This is font-author evidence, not KREAM brand-asset evidence. [Pretendard documentation](https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md) · [License](https://github.com/orioncactus/pretendard/blob/main/LICENSE)
- **Declared-only assets:** the bundle declares `HelveticaNeue`, `HelveticaNeueBold`, `NotoSansCJKkr` (including Light and Bold), `Roboto-Bold`, and `Roboto-Light`/`Roboto-Medium`, with legacy KREAM-hosted source URLs but zero visible observed usage. They remain declared-only and are not rendered as KREAM UI families.
- **System / unresolved:** `Roboto` is classified as a system-stack entry with zero visible uses. No substitution is authorized for any declared-only or system entry.

### Measured hierarchy

| Role | Size | Weight | Line height | Surface boundary |
| --- | --- | --- | --- | --- |
| Default live text | 16px | 400 | normal | Repeated across home and search |
| Search filter control | 13px | 400 | normal | Search route only |
| Search input | 24px | 700 | 29px | Search route only |
| Active search tab | 16px | 700 | normal | Search route only |
| Header navigation link | 20px | 400 | normal | All three routes |
| Recovery home button | 13px | 300 | 26px | Recovery route only |

## Layout

Only route-local dimensions are retained: the home collector found a 1188px-wide, 475px-high merchandising panel and the search collector found 238px-wide product-card shells with variable observed heights. The search input was 468px wide in this desktop sample. No responsive breakpoint, grid-column count, sticky behavior, or global container width is asserted from one desktop capture.

### Responsive Behavior

The supplied collector evidence is desktop-only. No breakpoint, mobile layout, touch target, or adaptive navigation behavior is specified.

## Elevation & Depth

Representative components in the supplied capture report `box-shadow: none`. No elevated card, overlay, modal, or menu elevation token is established.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

No motion, transition, or interaction state was captured.

## Components

### Search filters

**Pill filter button — observed default**
- Background: #f4f4f4
- Text: #4e4e4e
- Radius: 30px
- Padding: 0px 8px
- Font: 13px / 400 / Pretendard Variable
- Height: 30px
- Use: Search-route default filter at `surface-3::[data-omd-capture="18"]` (`filter_button tint shape_pill`); 7 occurrences, no observed state transition.

**Outlined filter button — observed default**
- Background: #ffffff
- Text: #4e4e4e
- Border: 1px solid #f0f0f0
- Radius: 6px
- Padding: 0px 6px 0px 4px
- Font: 13px / 400 / Pretendard Variable
- Height: 30px
- Use: Search-route default filter at `surface-3::[data-omd-capture="25"]` (`filter_button line shape_rect`); 9 occurrences, no observed state transition.

### Tabs

**Home category tab — observed default**
- Text: #222222
- Radius: 0px
- Padding: 13px 0px
- Font: 16px / 400 / Pretendard Variable
- Height: 44px
- Use: Home tab links (`a.tab`), 7 instances; representative `home::[data-omd-capture="13"]`.

**Home category tab — observed active**
- Text: #222222
- Radius: 0px
- Padding: 13px 0px
- Font: 16px / 700 / Pretendard Variable
- Height: 44px
- Use: Active home tab at `home::[data-omd-capture="15"]` (`router-link-active router-link-exact-active tab active`). Weight is the only difference from the default; the home tabs have no bottom border.

**Search result tab — observed default**
- Text: #222222
- Border: 2px on the bottom edge, transparent
- Radius: 0px
- Padding: 0px
- Font: 16px / 400 / Pretendard Variable
- Height: 44px
- Use: Search-route tab at `surface-3::[data-omd-capture="15"]` (`router-link-active router-link-exact-active tab`, without `active`).

**Search result tab — observed active**
- Text: #222222
- Border: 2px solid #222222 on the bottom edge
- Radius: 0px
- Font: 16px / 700 / Pretendard Variable
- Height: 44px
- Use: Active search tab at `surface-3::[data-omd-capture="14"]` (`router-link-active router-link-exact-active tab active`). This is an observed route state, not a hover or pressed variant.

The July text described one "search tab" whose default was the home tab (`home::[data-omd-capture="13"]`, 13px 0px padding, no border) and whose active state was the search-result tab. They are different controls: the 2px charcoal underline belongs to the search-result tabs only, whose default carries a transparent 2px bottom border in the same slot and 0px padding.

### Search input

**Search text input — observed default**
- Text: #000000
- Radius: 0px
- Padding: 0px 13px 0px 1px
- Font: 24px / 700 / Pretendard Variable, letter-spacing -0.36px
- Height: 29px
- Use: Search input at `surface-3::[data-omd-capture="12"]` (`input_search show_placeholder_on_focus`). No focus state was captured.

### Product discovery card

**Search product-card shell — observed default**
- Radius: 6px
- Padding: 0px 0px 10px
- Width: 238px
- Use: Search-route linked card at `surface-3::[data-omd-capture="37"]` (`product_card`), 15 instances; captured heights vary from 319px to 340px, so no fixed-height token is asserted. The card link's own computed text values (#222222, 16px / 400) are inherited defaults: its brand, name, and price labels are child elements that were not sampled, so no label style is recorded. The July text listed those values as the card's text and font.

### Recovery action

**Home recovery button — observed default**
- Text: #000000
- Border: 1px solid rgba(0,0,0,0.6)
- Radius: 8px
- Font: 13px / 300 / Pretendard Variable
- Height: 36px
- Use: Recovery route action at `surface-2::[data-omd-capture="12"]` (`button-home`). Its route-local recovery context must not be generalized as a primary commerce CTA.

### Merchandising panel

**Home merchandising panel link — observed default**
- Background: #f5f5f5
- Radius: 16px
- Padding: 0px
- Size: 1188px × 475px
- Use: `a.layout_stack` at `home::[data-omd-capture="21"]` through `"76"` (56 panel links). The enclosing `div.flicking-panel` computes a 0px radius, so the 16px corner and the fill belong to the link; the campaign content inside it is not claimed.

### Header

**Main navigation link — observed default**
- Text: #222222
- Radius: 0px
- Padding: 0px
- Font: 20px / 400 / Pretendard Variable, letter-spacing -0.3px
- Height: 24px
- Use: `a.gnb_link` at `home::[data-omd-capture="8"]`; three per route on all three routes. The enclosing `li.gnb_item` computes 16px, which is not the label size.

**Header icon button — observed default**
- Background: transparent
- Radius: 0px
- Size: 40px × 40px
- Use: search button (`button.btn_search`) at `home::[data-omd-capture="10"]` and cart link (`a.header-cart-button`) at `"11"`, on all three routes. Both are icon-only (textLength 0); the icons are not part of the computed style.

### Search results controls

**Sort trigger — observed default**
- Text: rgba(0, 0, 0, 0.8)
- Radius: 0px
- Padding: 0px
- Font: 13px / 400 / Pretendard Variable
- Height: 16px
- Use: `button.sorting_title` at `surface-3::[data-omd-capture="36"]`, 54 × 16.

No hover, focus, pressed, disabled, dialog, menu, toast, error-form, responsive, or unobserved selected component variant is specified. The bundle holds no `::state-hover`, `::state-pressed`, or `::state-focus` frame for any KREAM element, and the collector expanded no dialog, menu, or tab. Focus in particular is not declared from bundle evidence.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://kream.co.kr/; https://kream.co.kr/shop; https://kream.co.kr/search?keyword=nike; https://kream.co.kr/faq?category=buying&page=0; https://kream.co.kr/auth_policy; https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md; https://github.com/orioncactus/pretendard/blob/main/LICENSE
**Tier 2 sources:** https://getdesign.md/kream (attempted; no indexed KREAM record returned); https://styles.refero.design/?q=kream (attempted; no KREAM result returned in the public search result set)
**Conflicts unresolved:** none

### States

Only component defaults and the route-selected tabs (home category and search result) were captured; the bundle holds no pointer-state frame. The following require a product-specific observation before specification:

| Category | Evidence status |
| --- | --- |
| Empty | Not observed in the captured routes |
| Loading | Not observed in the captured routes |
| Error | Recovery-route component only; no error treatment captured |
| Success | Not observed in the captured routes |
| Skeleton | Not observed in the captured routes |
| Disabled | Not observed in the captured routes |

Live state probe, 2026-10-16 (`https://kream.co.kr/search?keyword=nike`), `filter-pill`: pressed — no visible change (measured 2026-10-16); focus — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do

- Use `Pretendard Variable` only where the recorded KREAM-loaded webfont evidence applies.
- Keep the observed commerce chrome white and charcoal, with search filter controls constrained to their recorded geometry and route.
- Preserve selector, surface, and state provenance when recreating an observed component.
- Treat KREAM’s official FAQ and authentication policy as service-context sources, not a design-token system.

### Don't

- Do not replace declared-only Helvetica Neue, Noto Sans, or Roboto entries with a look-alike and label it as KREAM.
- Do not turn product-content green or red samples into semantic status tokens.
- Do not generalize the recovery-route button into a primary CTA.
- Do not add hover, focus, pressed, disabled, loading, dialog, or mobile variants without a corresponding captured surface and state.

## Voice & Tone

KREAM’s official service explanations are operational and sequential: search or select an item, buy immediately or bid, then move the matched item through inspection and delivery. The same material describes authenticated warehouse inventory as eligible for rapid shipping. This is official service language, not a complete catalog of public UI microcopy. [Buying FAQ](https://kream.co.kr/faq?category=buying&page=0)

| Do | Don't |
| --- | --- |
| State the transaction step and condition clearly. | Attribute unobserved checkout or error copy to KREAM. |
| Separate immediate purchase from a bid. | Treat campaign headlines as a system-wide voice rule. |
| Explain inspection and delivery as distinct stages. | Convert service-policy language into a color or component token. |

**Voice samples.**

- “즉시 구매 혹은 구매 입찰” — official buying-flow label. <!-- verified: kream.co.kr/faq?category=buying&page=0 2026-07-13 -->
- “검수를 진행” — official buying-flow stage. <!-- verified: kream.co.kr/faq?category=buying&page=0 2026-07-13 -->
- “당일 출고” — official rapid-shipping outcome for qualifying stored inventory. <!-- verified: kream.co.kr/faq?category=buying&page=0 2026-07-13 -->

## Agent Prompt Guide

### Verified prompt boundary

“Create only the observed KREAM commerce elements: a white/charcoal desktop search route with Pretendard Variable; 30px `#f4f4f4` pill filters; 6px white outlined filters; a 24px/700 search input; and 44px search-result tabs whose active state uses 700 weight plus a 2px charcoal bottom border (home category tabs change weight only). Do not add a branded CTA color, a substituted font, a modal/menu state, or a responsive variant.”

## Governance

### Known Gaps

- **Contrast, `home-tab`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-tab`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-input`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `recovery-button`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-link`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `sort-trigger`.** Text `#000000cc` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
