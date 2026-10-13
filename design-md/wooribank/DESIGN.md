---
name: Woori Bank
colors:
  brand-deep-blue: '#0067ac'
  brand-light-blue: '#20c4f4'
  brand-blue: '#0083ca'
  canvas: '#ffffff'
  foreground: '#000000'
  foreground-secondary: '#333333'
  muted: '#7f7f7f'
typography:
  public-home-title:
    fontSize: 24px
    fontWeight: 700
    use: Observed only on the public home h1; its computed NotoSans declaration has no loaded-FontFace corroboration.
  legacy-body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: '-1px'
    use: Observed on repeated text/list samples of the two supplied legacy public service routes.
rounded:
  none: 0px
  home-login-utility: 5px
spacing:
  popup-inline-start: 3
  popup-inline-end: 7
components:
  legacy-information-text-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #cccccc'
    rounded: 0px
    padding: 2px 3px 3px
    height: 26px
    typography: 13px / 400 / 19px / computed stack beginning 맑은 고딕
    states: rest on four inputs (surface-3 capture 35-38); the bundle holds no state frame for any Woori Bank element
    use: Native text input at legacy-information::[data-omd-capture="35"] on the supplied public information route.
  legacy-gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#ffffff'
    height: 38px
    typography: 15px / 700 / 40px / computed stack beginning 맑은 고딕, tracking -1px
    selected: 'bg #ffffff, fg #008a44, border 2px #008a44 on the top edge, line-height 37px, 40px high'
    states: rest on nine legacy-service links (capture 12, 14-21) and six legacy-information links (capture 12-17); the link in li.current (legacy-service capture 13) differs from them and is recorded as selected; no state frame
    use: Legacy top navigation link (a.level1-item-a-N) at legacy-service::[data-omd-capture="12"], 92px x 38px; white labels on a bar whose fill sits on an ancestor the capture did not sample
  legacy-all-menu-button:
    type: button
    backgroundColor: '#005329'
    textColor: '#ffffff'
    padding: 10px 12px
    size: 50px x 40px
    typography: 15px / 700 / 40px / computed stack beginning 맑은 고딕, tracking -1px
    states: rest; no state frame
    use: Last item of the legacy-service navigation (a.btn-all.btn-popup.site-menu; an a element with no button role) at legacy-service::[data-omd-capture="22"]
  legacy-content-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px #cbcbcb on the parent li'
    padding: 10px 0px
    height: 38px
    typography: 14px / 700 / 18px / computed stack beginning 맑은 고딕, tracking -1px
    selected: 'fg #ffffff, padding 10px 17px; parent li border 1px #4fa528 top and bottom, 1px #cbcbcb sides; the li records a transparent background colour, so the fill behind the white label is not in the capture'
    states: rest on one tab (capture 37); the tab in li.on (capture 36) differs from it and is recorded as selected; no state frame
    use: Legacy content tab (a.js-tab-header.ui-tab-selector) in div.tab1.js-tab at legacy-service::[data-omd-capture="37"]; each parent li is 231px x 37px
  legacy-quick-link:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    padding: 50px 0px 0px
    size: 105px x 68px
    typography: 14px / 400 / 18px / computed stack beginning 맑은 고딕, tracking -2px
    states: 'rest on eight links per legacy route (legacy-service capture 27-34; legacy-information capture 21-28, where the label is #000000); no state frame'
    use: Legacy quick-menu link (a.q1 to a.q8; no button role) at legacy-service::[data-omd-capture="27"]; the label sits below 50px of top padding
  legacy-information-select:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px #d1d1d1'
    rounded: 0px
    padding: 2px 2px 2px 0px
    size: 164px x 25px
    typography: 13px / 400 / normal / computed stack beginning 맑은 고딕
    states: rest; no state frame
    use: Native select (select.sel) at legacy-information::[data-omd-capture="34"], above the four text inputs
  legacy-layer-header:
    type: dialog
    backgroundColor: '#20509f'
    textColor: '#ffffff'
    padding: 0px 0px 0px 26px
    size: 600px x 58px
    typography: 22px / 700 / 53px / computed stack beginning 맑은 고딕, tracking -1px
    states: open in the legacy-information capture; no state frame
    use: Header (h1.ly-header, which holds its own text) of a 600px-wide layer on the legacy-information route; its close link (a.close-layer.lonSaleCloseInfoPop-close, capture 53) is 29px x 29px
  footer-link:
    type: button
    backgroundColor: transparent
    textColor: '#7f7f7f'
    height: 20px
    typography: 12px / 400 / 20px
    states: rest on ten links per route (home capture 69-71, 74-80); no state frame
    use: 'Footer link (a; no button role) on all three routes at home::[data-omd-capture="69"]; two per route are #555555 at 700 (class font-bold font-c-5; home capture 72, 73); NotoSans stack on the home, stack beginning 맑은 고딕 on the legacy routes'
  footer-divided-link:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px #dddddd on the right edge'
    padding: 0px 30px 0px 0px
    height: 14px
    typography: 12px / 400 / 14px
    states: rest on four links per route (home capture 59-62); no state frame
    use: Footer link row (a.js-display-hover-trigger; no button role) on all three routes at home::[data-omd-capture="59"]; the last link (capture 62) has no divider
  home-login-link:
    type: button
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 5px
    size: 80px x 30px
    typography: 15px / 700 / 15px / NotoSans stack, tracking -1px
    states: rest; no state frame
    use: Home login utility (a.gnb-member-bt.renew_login; no button role) at home::[data-omd-capture="0"], the element behind the 5px home-login-utility radius; it records a transparent background and no border, so the corner shapes no measured fill or outline
  home-gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    height: 15px
    typography: 15px / 700 / 15px / NotoSans stack
    states: rest on ten header links (home capture 2-11), some icon-only (textLength 0); no state frame
    use: Home header link (a) at home::[data-omd-capture="2"]
  home-quick-tile:
    type: button
    backgroundColor: '#0082cd'
    textColor: '#ffffff'
    padding: 12px 42px 12px 48px
    size: 170px x 77px
    typography: 20px / 700 / 26px / NotoSans stack
    states: rest; no state frame
    use: 'Home quick-band link (a; no button role) at home::[data-omd-capture="21"]; the same 76px row holds three links with #ffffff 22px / 700 / 28px labels on a transparent fill (capture 22-24; the fill behind them is not in the capture) and a #ffffff li.q_btn tile whose link has a #000000 22px / 700 / 28px label (capture 25); #0082cd is a web fill, not the CI blue #0083ca'
  home-product-card:
    type: card
    border: '1px #d8d8d8'
    rounded: 0px
    size: 306px x 300px
    use: 'Home product card (li), three in a row, each with a #666666 14px / 400 description (p.font-14.font-c-6); its own #000000 12px / 400 is inherited page text, so no label style is claimed'
---

# Woori Bank — Design Reference

## Overview

### Visual Theme & Atmosphere

Woori Bank is a Korean bank whose public narrative links a long institutional history with the promise of financial innovation. Its museum identifies Daehancheonil Bank, founded in 1899, as the predecessor of today’s Woori Bank, while the current corporate site frames the bank as creating tomorrow’s value through today’s innovation. The recognizable identity is the dawn-shaped symbol: the official CI describes it as challenge and hope, with deep blue logotype and a light-blue-to-blue symbol gradient. The supplied public-web capture presents a narrower and more utilitarian picture—white canvas, black and gray text, square legacy controls, and mixed Korean system/declaration stacks. That measured web layer is not the CI palette rendered as product controls, so this reference keeps corporate brand assets, public bank pages, and declared fonts deliberately separate.

**Key characteristics:**

- Official CI: deep blue `#0067AC`, light blue `#20C4F4`, and blue `#0083CA`; these are brand-asset values, not inferred public-bank CTA tokens.
- Supplied public bank routes repeat white `#FFFFFF`, black `#000000`, secondary `#333333`, and muted `#7F7F7F` chrome.
- The measured public surfaces are compact and predominantly square: 0px radius dominates; a single home login utility has 5px corners.
- The artifact covers a public home and two public legacy service/information routes only; it does not establish native, authenticated, transactional, or mobile UI.

### Primary tasks

- Read the bank's published account of its own history.
- Look up the financial solutions offered to people and organisations.

### Brand Narrative

Woori Bank’s official history connects the present bank to Daehancheonil Bank, founded in 1899 as a modern national-capital bank. The bank’s historical material describes later firsts in overseas presence and online banking, making continuity and financial infrastructure part of its own story rather than an invented heritage claim.

Its current public vision is to create tomorrow’s value through today’s innovation, with customer, trust, expertise, and innovation named as core values. The official CI turns that narrative into a dawn symbol of challenge and hope, plus a controlled deep-blue and blue gradient palette. The public product-web evidence in this reference is much more restrained and legacy-oriented; it should not be overwritten by the corporate identity narrative.

The current ESG material adds a present-tense direction: responsible finance, social value, transparency, and long-term sustainable value. Those commitments explain the bank’s contemporary framing but do not yield unobserved product features, UX states, or quantitative service claims.

### Principles

1. **Put customers and neighbours first.** The official value statement places customers and neighbours first.
   *UI implication:* operational public copy should explain the next action or required information without decorative ambiguity.
2. **Build trust through principles.** The bank describes trust as something made through principles.
   *UI implication:* keep source boundaries, disclosures, and state uncertainty explicit; do not invent a reassuring UI pattern.
3. **Use expertise with restraint.** The official values present the bank as a financial expert that leads the market.
   *UI implication:* separate institutional/brand facts from route-local CSS observations rather than flattening them into generic fintech styling.
4. **Make innovation accountable.** The current vision and ESG material join innovation with future value, responsibility, and transparency.
   *UI implication:* a future product treatment needs direct evidence before it is promoted as a reusable token or component.

### Personas

The following are first-party stakeholder contexts, not synthetic personas or satisfaction claims.

**Individual banking customer.** The public vision and values address customers and neighbours directly. This reference preserves only the public desktop web styling available to them, not protected account or transaction experiences.

**Business or institutional customer.** The corporate site describes expertise and financial solutions for people and organisations. No enterprise application surface, dashboard, or administration UI was captured here.

**Brand, content, or service contributor.** Needs to distinguish the official dawn CI and corporate narrative from the white-and-neutral legacy public-bank chrome so a reuse does not become a false representation of the bank’s current product system.

## Colors

### Official CI asset colors

- **Woori Deep Blue** (`#0067AC`): official logotype main color (Pantone 7462 C) in the corporate CI guide.
- **Woori Light Blue** (`#20C4F4`): official symbol-mark gradient color (Pantone 2915 CP).
- **Woori Blue** (`#0083CA`): official symbol-mark gradient color (Pantone 3015 CP).

### Selector-backed public-web colors

- **Canvas** (`#FFFFFF`): repeated public-page background samples across the supplied surfaces.
- **Foreground** (`#000000`): repeated structural text and border samples across all three supplied surfaces.
- **Secondary foreground** (`#333333`): repeated utility text/border sample on the home and legacy routes.
- **Muted text** (`#7F7F7F`): repeated legacy service/information text input and utility sample.
- **Component-local colours** recorded in §4, not promoted to palette roles: the legacy navigation's `#008a44` (selected link text and top border) and `#005329` (all-menu fill); `#4fa528` and `#cbcbcb` (legacy content-tab borders); `#20509f` (legacy layer header); `#0082cd` (home quick tile, a web fill distinct from the CI blue `#0083CA`); `#d1d1d1` (legacy select border), `#d8d8d8` (home product-card border), `#dddddd` (footer link dividers), `#555555` (bold footer links), and `#666666` (product-card description). The greens are measured web values on the legacy-service route, not CI colours.

The official CI guide requires its colors to be reproduced consistently across visual media. That supports the three CI asset values above, but it does not make an unobserved blue button, gradient panel, or banking-flow state a product token.

## Typography

### Evidence classes

| Evidence class | Family and boundary |
|---|---|
| Official product-use | No first-party material reviewed states that a named font is required for the captured public bank UI. |
| Live computed surface-use | The public home exposes `NotoSans, "Noto Sans KR", sans-serif` on its h1 and navigation samples; the two legacy routes repeatedly expose a stack beginning `맑은 고딕` / `Malgun Gothic`. Neither computed family has a matching loaded FontFace in the supplied artifact, so neither is a Woori Bank UI-family token. |
| Official distributed brand asset | No official Woori Bank font download or licence document was found in the reviewed first-party material. |
| Declared-only | `Noto Sans CJK KR` is declared from `simg.wooribank.com` and `Noto Sans KR` from Google Fonts, both with zero visible uses in the artifact. They remain declared-only. |
| System / unresolved | `Roboto` is classified system with zero visible uses; `돋움`, `dotum`, and `Arial` are not Woori Bank brand-font evidence. |

### Captured hierarchy

| Role | Family boundary | Size | Weight | Line height | Evidence boundary |
|---|---|---:|---:|---:|---|
| Public-home title | Computed `NotoSans` declaration; unresolved | 24px | 700 | normal | `home::h1` only |
| Legacy public body | Computed stack beginning 맑은 고딕; unresolved | 14px | 400 | 20px | repeated legacy service/information list and text samples |
| Legacy utility action | Computed stack beginning 돋움; unresolved | 12px | 400 | 23px | `surface-2::[data-omd-capture="25"]` only |

Do not render a fallback as a verified Woori Bank typeface. The declaration and local/system stacks are useful audit context, but not a licence or a branded family token.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.public-home-title.lineHeight`: `normal`

## Layout

The supplied capture is desktop-only at `1440×900`. It records a 24px public-home title and compact legacy utility chrome, but not a reusable grid, container width, responsive breakpoint, authenticated layout, or transaction journey. Treat the measured public routes as route-local legacy web evidence rather than a general banking layout contract.

### Responsive Behavior

No mobile viewport or responsive transition was captured. The public web routes may adapt at smaller widths, but the supplied evidence supports no breakpoint, collapsed navigation, touch-target, or reflow specification.

## Elevation & Depth

The promoted public samples have `box-shadow: none`; `flat: none` is recorded as a selector-backed token. This establishes flatness for the measured home/legacy utility examples only. No card, modal, notification, elevated panel, or layered navigation shadow scale was captured.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

No motion duration, easing curve, transition property, or reduced-motion behavior was measured. Omit motion tokens rather than inventing a Woori Bank motion system.

## Components

### Legacy information text input

**Default**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px `#cccccc`
- Radius: 0px
- Padding: 2px 3px 3px
- Height: 26px
- Font: 13px / 400 / computed stack beginning 맑은 고딕
- States: rest on four inputs (`surface-3::[data-omd-capture="35"]` to `"38"`). The bundle holds no hover, pressed, or focus frame for any element, so none is declared.
- Use: Native text input `surface-3::[data-omd-capture="35"]`; medium-confidence, one public information-route sample only.

Corrected 2026-09-30: this paragraph read `interactionCount: 0` as the reason no states exist and kept this input as the sole component. That counter covers opened dialogs, tabs, and menus; states are absent because the bundle holds no `::state-*` sample for any of its 458 elements. The components below come from the same bundle. Their `type` records the visual role the catalog renders; each `use` names the element, so links (`a`, no button role) stay distinguishable from native controls. Each belongs to one evidence domain: the public home or one of the two legacy routes.

### Legacy navigation

**Rest** (`legacy-gnb-link`): label `#ffffff`, 15px / 700 / 40px, tracking -1px, stack beginning 맑은 고딕, 38px high; nine links on the legacy-service route (`surface-2::[data-omd-capture="12"]`, `"14"` to `"21"`, `a.level1-item-a-N`) and six on the legacy-information route (`surface-3` `"12"` to `"17"`). The bar's fill sits on an ancestor the capture did not sample.

**Selected**: the link in `li.current` (`surface-2` `"13"`) carries its own background `#ffffff`, label `#008a44`, a 2px `#008a44` top border, and line-height 37px, 85px × 40px.

**All-menu item** (`legacy-all-menu-button`): background `#005329`, label `#ffffff`, padding 10px 12px, 50px × 40px, 15px / 700 / 40px, tracking -1px; `surface-2` `"22"` (`a.btn-all.btn-popup.site-menu`), the last navigation item.

### Legacy content tab

**Rest** (`legacy-content-tab`): label `#000000`, 14px / 700 / 18px, tracking -1px, padding 10px 0px, 38px high; `surface-2::[data-omd-capture="37"]` (`a.js-tab-header.ui-tab-selector`); its parent `li` (231px × 37px) has a 1px `#cbcbcb` border.

**Selected**: the tab in `li.on` (`"36"`) has a `#ffffff` label and padding 10px 17px; its `li` border is 1px `#4fa528` top and bottom with `#cbcbcb` sides. The `li` records a transparent background colour, so the fill behind the white label is not in the capture.

### Legacy quick-menu link

**Rest** (`legacy-quick-link`): label `#333333`, 14px / 400 / 18px, tracking -2px, padding 50px 0px 0px, 105px × 68px; eight per legacy route (`surface-2::[data-omd-capture="27"]` to `"34"`, `a.q1` to `a.q8`; on `surface-3`, `"21"` to `"28"`, the label is `#000000`). The label sits below 50px of top padding.

### Legacy information select

**Rest** (`legacy-information-select`): background `#ffffff`, text `#000000`, border 1px `#d1d1d1`, radius 0px, padding 2px 2px 2px 0px, 164px × 25px, 13px / 400 / normal; `surface-3::[data-omd-capture="34"]` (`select.sel`), above the four text inputs.

### Legacy layer header

**Open** (`legacy-layer-header`): background `#20509f`, text `#ffffff`, 22px / 700 / 53px, tracking -1px, padding-left 26px, 600px × 58px; `surface-3::h1.ly-header`, the header of a layer open in the legacy-information capture. The `h1` holds its own text. The layer's close link (`a.close-layer.lonSaleCloseInfoPop-close`, `"53"`) is 29px × 29px.

### Footer links

**Policy link** (`footer-link`): text `#7f7f7f`, 12px / 400 / 20px; ten per route on all three routes (`home::[data-omd-capture="69"]` to `"71"`, `"74"` to `"80"`); two per route are `#555555` at 700 (`a.font-bold.font-c-5`, `"72"`, `"73"`), bold by utility class rather than by state. NotoSans stack on the home, stack beginning 맑은 고딕 on the legacy routes.

**Divided link** (`footer-divided-link`): text `#000000`, 12px / 400 / 14px, padding 0px 30px 0px 0px, a 1px `#dddddd` right border; four per route (`home` `"59"` to `"62"`, `a.js-display-hover-trigger`); the last (`"62"`) has no divider.

### Home header and quick band

**Login utility** (`home-login-link`): label `#333333`, 15px / 700 / 15px, tracking -1px, radius 5px, 80px × 30px; `home::[data-omd-capture="0"]` (`a.gnb-member-bt.renew_login`), the element behind the 5px `home-login-utility` radius. It records a transparent background and no border, so the corner shapes no measured fill or outline.

**Header link** (`home-gnb-link`): label `#000000`, 15px / 700 / 15px, 15px high; ten links (`home` `"2"` to `"11"`), some icon-only (textLength 0).

**Quick tile** (`home-quick-tile`): background `#0082cd`, label `#ffffff`, 20px / 700 / 26px, padding 12px 42px 12px 48px, 170px × 77px; `home::[data-omd-capture="21"]`. The same 76px row holds three links with `#ffffff` 22px / 700 / 28px labels on a transparent fill (`"22"` to `"24"`; the fill behind them is not in the capture) and a `#ffffff` `li.q_btn` tile whose link has a `#000000` 22px / 700 / 28px label (`"25"`). `#0082cd` is a web fill, not the CI blue `#0083CA`.

### Home product card

**Static** (`home-product-card`): 1px `#d8d8d8` border, 0px radius, 306px × 300px; three `li` cards on the home, each with a `#666666` 14px / 400 description (`p.font-14.font-c-6`). The card's own `#000000` 12px / 400 is the inherited page text.

---
**Verified:** 2026-07-14
**Tier 1 sources:** https://www.wooribank.com/ ; https://spot.wooribank.com/pot/Dream?withyou=PODEP0001 ; https://spot.wooribank.com/pot/Dream?withyou=ln ; https://spot.wooribank.com/pot/Dream?withyou=BPBKI0056 ; https://spot.wooribank.com/pot/Dream?withyou=BPBKI0049
**Tier 2 sources:** https://getdesign.md/wooribank (attempted; no usable Woori Bank record) ; https://styles.refero.design/?q=wooribank (attempted; no usable Woori Bank record)
**Conflicts unresolved:** none

### States

Observed: two class-marked selected navigation treatments on the legacy-service route — the link in `li.current` (`#ffffff` fill, `#008a44` label, 2px `#008a44` top border) and the content tab in `li.on` (`#ffffff` label, 1px `#4fa528` top and bottom border; the fill behind the label is not in the capture) — and a layer open on the legacy-information route. The bundle holds no hover, pressed, or focus frame for any element (0 of 458), so none is declared. Empty, loading, error, success, skeleton, and disabled treatments are absent rather than filled with generic banking conventions.

## Do's and Don'ts

### Do

- Use the official CI blue family only for brand identification or where a future product surface explicitly observes it.
- Keep the captured public legacy utility treatment square and compact when reproducing the same route-local context.
- Keep the public home and legacy surface typography as unresolved computed stacks until a loaded family and its source are corroborated.
- Preserve the distinction between a 1899-rooted corporate story and a specific public web component claim.

### Don't

- Don't turn the official dawn-gradient symbol colors into an inferred universal online-banking CTA or background gradient.
- Don't substitute Noto Sans KR, Malgun Gothic, Roboto, or a system fallback as a verified Woori Bank font.
- Don't invent a responsive grid, native-app shell, authenticated form, error state, dialog, toast, or interaction animation from this static desktop packet.
- Don't give links button semantics they do not have; §4 records link components by visual role and names the `a` element in each `use` (updated 2026-09-30; the July line called the native text input the only harvest).

## Voice & Tone

The official value system provides a useful but bounded public voice: customer-first, trustworthy, expert, and innovative. The current corporate story joins that language to a future-facing innovation claim, while the ESG material speaks of responsibility, inclusion, and transparent disclosure. These official statements guide high-level public communications; they do not prescribe regulated transaction copy, eligibility notices, or errors.

| Context | Supported direction |
|---|---|
| Corporate public message | Ground innovation in a concrete customer or societal value. |
| Trust-sensitive information | Be direct about principles, responsibilities, and what is being disclosed. |
| Service navigation | Use short, literal labels; the captured legacy web chrome is operational rather than campaign-led. |

### Supported copy samples

- “오늘의 혁신으로 내일의 가치를 만드는 은행” is the bank’s published vision statement.
- “우리 마음속 첫번째 금융” is the published slogan associated with the bank’s heritage and trust aspiration.
- “Good Finance for the Next” appears with the official ESG vision.

## Agent Prompt Guide

For a route-local Woori Bank public-web reference, use a white `#FFFFFF` canvas with `#000000` and `#333333` text, a compact 14px legacy body sample where that exact legacy context is intended, square utility controls, and no shadow. Harvested components are listed in §4, each tied to the home or one legacy route; treat `#0067AC`, `#20C4F4`, and `#0083CA` as official CI asset colors—not automatic UI fills. Do not name a font specimen, create an authenticated bank flow, or add interaction states without a new selector-backed and font/state-correlated capture.

## Governance

### Known Gaps

- **Contrast, `legacy-content-tab`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `legacy-quick-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-divided-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-login-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-gnb-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-quick-tile`.** Text `#ffffff` on `#0082cd` measures 4.14:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
