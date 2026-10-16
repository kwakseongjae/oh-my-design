---
name: Upbit
colors:
  accent: '#0062df'
  accent-deep: '#003597'
  rise: '#dd3c44'
  fall: '#1375ec'
  ink: '#1a2434'
  body: '#333333'
  muted: '#565d6a'
  border: '#d6d8db'
  surface: '#ffffff'
  canvas: '#e9ecf1'
  control: '#f4f5f7'
  disabled: '#8e929b'
typography:
  body:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    use: Observed public home/list body text
  dense:
    fontSize: 12px
    fontWeight: 400
    use: Observed exchange labels and quick-fill control text
rounded:
  square: 0px
  control: 4px
spacing:
  control-inline: 8
components:
  quick-fill:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1a2434'
    border: '1px solid #d6d8db'
    rounded: 4px
    padding: 0px 8px 1px
    height: 28px
    typography: 12px / 400
    states: default captured; the capture holds no state frame for this element
    use: Exchange percentage quick-fill link; surface-2::[data-omd-capture="139"]
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
  home-header-link:
    type: tab
    backgroundColor: transparent
    textColor: '#1a2434'
    rounded: 0px
    padding: 0px
    height: 22px
    typography: 15px / 400 / 22px
    hover: font 15px / 500
    pressed: font 15px / 500
    states: 'rest, hover, and pressed sampled on the home header links (capture 1-5; 1-4 carry text, 5 is an 84 x 24 link without text). Every hover and pressed frame records weight 500 against rest 400, and weight is the only dumped property that moves; the siblings agree. Focus is not declared from the bundle: the collector presses before it focuses, which suppresses :focus-visible'
    use: Public home header navigation link (a.css-h3yhvr) at home::[data-omd-capture="1"]
  dark-header-link:
    type: tab
    backgroundColor: transparent
    textColor: rgba(255, 255, 255, 0.6)
    rounded: 0px
    padding: 0px
    height: 22px
    typography: 15px / 400 / 22px
    hover: font 15px / 500
    pressed: font 15px / 500
    states: 'same class as the home header link; rest, hover, and pressed sampled on the exchange header (capture 2-5) and the notice header (surface-3 capture 1-5). Every hover and pressed frame records weight 500 against rest 400, the only dumped property that moves; the siblings agree. Focus is not declared from the bundle: the collector presses before it focuses, which suppresses :focus-visible'
    use: Exchange and service-centre header navigation link (a.css-h3yhvr) at surface-2::[data-omd-capture="2"]; white at 60% alpha implies a dark header bar, whose fill was not sampled on this element
  exchange-panel-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#333333'
    border: '0px 0px 1px #dddddd'
    rounded: 0px
    padding: 0px
    height: 45px
    typography: 16px / 500 / 45px
    selected: 'fg #0062df, border 0px 0px 3px #0062df, 16px / 700'
    states: rest (capture 16) and the active tab (capture 15, class tab__item__link--active) captured; the capture holds no pointer-state frame for either
    use: Exchange panel tab (a.tab__item__link) at surface-2::[data-omd-capture="16"]; the border is bottom-only
  order-side-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#333333'
    border: '0px 0px 1px #d4d6dc'
    rounded: 0px
    padding: 0px
    height: 45px
    typography: 16px / 500 / 42px
    selected: 'fg #dd3c44, border 0px 0px 3px #dd3c44, 16px / 700'
    states: rest (capture 132) and the selected buy side (capture 131, inside li.tabB__buy.on) captured; only the buy side was captured selected, so no selected colour is recorded for the other side; no pointer-state frame
    use: Exchange order-form side tab (a.tabB__button) at surface-2::[data-omd-capture="132"]; the border is bottom-only
  notice-page-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#1a2434'
    border: '1px #d6d8db'
    rounded: 0px
    padding: 0px
    size: 28px x 28px
    typography: 12px / 400
    selected: 'bg #0062df, fg #ffffff, border 1px #0062df'
    states: rest on the page buttons (button.css-10yd3aw, 11 occurrences) and the current page (capture 48, button.css-1arrn0x) captured; no pointer-state frame
    use: Service-centre notice pagination button at surface-3::[data-omd-capture="49"]
  notice-search-input:
    type: input
    backgroundColor: transparent
    textColor: '#1a2434'
    rounded: 0px
    padding: 0px
    height: 42px
    typography: 14px / 400 / Arial
    states: default captured; no state frame
    use: Service-centre notice search field (input.css-1sxigs) at surface-3::[data-omd-capture="24"]; transparent and borderless, its wrapper was not sampled, and it resolves to the system family Arial rather than the Roboto stack
  order-form-input:
    type: input
    backgroundColor: transparent
    textColor: '#1a2434'
    rounded: 0px
    padding: 0px
    height: 38px
    typography: 14px / 400 / Arial
    states: default captured; no state frame
    use: Exchange order-form text field (input[type=text].css-1r6ulzr, three occurrences) at surface-2::[data-omd-capture="135"]; transparent and borderless, its wrapper was not sampled, and it resolves to the system family Arial
  notice-panel:
    type: card
    backgroundColor: '#ffffff'
    rounded: 0px
    padding: 60px 45px 45px
    shadow: rgb(222, 225, 231) 2px 2px 4px 0px
    states: non-interactive container
    use: Service-centre notice panel (article.css-mzy1sz) at surface-3::article
  exchange-panel:
    type: card
    backgroundColor: '#ffffff'
    rounded: 0px
    padding: 0px
    shadow: none
    states: non-interactive container
    use: Exchange white data panel (article) at surface-2::article; six article panels, 400 to 990px wide, compute the same fill, radius, padding, and shadow
---

# Upbit — Design Reference

## Overview

### Visual Theme & Atmosphere

Upbit is a digital-asset service operated by Dunamu. Its public web surface makes market information the visual priority: the reverified exchange page exposes trading-oriented controls and dense data regions, while the home and service-center notice pages retain the same light, low-radius treatment around them. The current Developer Center describes APIs for prices, order books, trading, balances, deposits, withdrawals, and real-time streaming; that public product framing helps explain why compact numeric controls and restrained surface colors dominate the captured pages. The observable identity is not a universal visual system: it is a disciplined public-web layer in which blue is used for actions and down-market data, red for up-market data, and white panels sit on a pale gray canvas. This record keeps that exchange, marketing, support, documentation, and authenticated-product boundary explicit.

- **Public-source boundary:** the supplied capture contains `https://www.upbit.com/home`, the public exchange URL, and `https://www.upbit.com/service_center/notice`. It contains no authenticated application screen and no Developer Center chrome.
- **Geometry:** the repeated raw radii are 0px and 4px. Every retained component except the 4px quick-fill control computes a 0px radius (§4).
- **State evidence:** the bundle's `interactions[]` record is empty (no dialog, tab, menu, or form-error record), but the bundle does hold pointer-state frames: the header navigation links record weight 500 on hover and on press on all three surfaces (§4). No other element has a state frame. Focus, disabled, validation, menu, modal, toast, and transition claims are omitted. Corrected 2026-09-29: the July text read `interactionCount: 0` as the absence of any state evidence.

### Primary tasks

- Follow market prices and data on the exchange page.
- Set up a trade from the exchange's dense controls.
- Fill an order amount by tapping a percentage shortcut.
- Tell a rising market from a falling one by colour.
- Check announcements on the service centre notice page.

### Imagery & illustration

The supplied evidence is a computed-style/component capture and does not establish a reusable image, illustration, crop, overlay, or asset-licence rule. The public marketing surface remains separate from the exchange UI; neither is used to infer an authenticated-product image system.

### Iconography

No named icon family, stroke specification, icon-size scale, or reusable icon component is established in the retained evidence. Coin symbols, glyphs, and asset files are intentionally not promoted from incidental page content.

### Brand Narrative

The official Developer Center identifies Upbit as a Dunamu service and presents market-data, exchange, and real-time APIs for strategic trading. Its Korean reference footer identifies Dunamu and a registered virtual-asset-business number. A 2022 Dunamu/Upbit conference report records the then-current statement that Upbit would focus on regulation compliance and investor protections; it is retained as dated corporate context, not as proof of a present visual token or product workflow.

No first-party history, rebrand, or public brand-system source was found in the supplied collector evidence. This reference therefore does not create an origin story or infer a private product strategy.

### Principles

The following are evidence-bounded reference implications, not quoted Upbit principles.

1. **Keep market data local to its surface.** The red `#DD3C44` and blue `#1375EC` observations come from the exchange only. *UI implication:* do not reuse them as universal marketing, error, or success tokens.
2. **Keep controls compact only where measured.** The retained quick-fill control is 28px high with a 4px radius. *UI implication:* do not extrapolate that geometry into navigation, forms, or authenticated trading flows.
3. **Keep domains separate.** Marketing home, exchange, support notice, Developer Center, SDK licence, and unobserved authenticated product each have different evidence roles. *UI implication:* do not combine them into a fictional public design system.

### Personas

No first-party user research, audience segmentation, or persona material was collected for this update. No fictional names, demographics, jobs, or motivations are supplied.

## Colors

### Color & surface roles

The following values are live computed observations, not a published Upbit token set.

| Observed role | Value | Evidence boundary |
|---|---:|---|
| Action/accent | `#0062DF` | visible text, border, and background on captured public surfaces; not assigned a universal semantic role |
| Deeper public-blue fill | `#003597` | background on home and exchange; no reusable CTA component is inferred |
| Rise market value | `#DD3C44` | exchange-only visible text/border observation |
| Fall market value | `#1375EC` | exchange-only visible text/border observation |
| Primary ink | `#1A2434` | public controls and text |
| Body / muted text | `#333333` / `#565D6A` | repeated public text observations |
| Hairline control border | `#D6D8DB` | quick-fill and service-center controls |
| White surface / pale canvas | `#FFFFFF` / `#E9ECF1` | repeated public panel and page surfaces |
| Control fill / disabled text | `#F4F5F7` / `#8E929B` | observed public values; neither establishes a behavior state |

The exchange-only red/blue pair is documented as a local market display observation. It is not generalized into an accessibility, locale, or cross-market rule without a first-party specification.

## Typography

### Typography & font evidence

#### Evidence classes

- **Live computed system use:** visible public text resolves most often to `Roboto, "Noto Sans KR", sans-serif, AppleSDGothicNeo-Regular, "Malgun Gothic", Dotum, sans-serif`; the collector classifies `Roboto` as a **system** family with high confidence and 744 visible uses. Its `FontFaceSet` record also lists Google-hosted Roboto sources. This verifies a current resolved public runtime family, not an Upbit-owned brand typeface, so no `tokens.typography.family` is promoted.
- **Declared-only assets:** `Noto Sans KR` has 128 listed source URLs but zero visible uses in the supplied bundle; `Droid Sans`, `Roboto Condensed`, and the TradingView-bundled `EuclidCircular` are likewise declared with zero visible uses. They are not UI-family tokens and must not be substituted into specimens.
- **Other system results:** `Arial` and `Helvetica` occur only a handful of times and are classified system; neither is a brand claim.
- **Official font/licence context:** the Google Fonts Roboto repository carries Apache License 2.0; Noto’s official documentation says Noto fonts use SIL OFL 1.1. These third-party font licences do not grant rights to Upbit marks, UI assets, or an Upbit brand font.
- **Upbit licence boundary:** the Upbit Developer SDK licence applies to the SDK materials, says it is not an open-source licence, and expressly does not grant rights to Dunamu trademarks, logos, names, or brands. It is not a font licence or a public design-system specification.

#### Measured public text roles

| Role | Resolved family | Size | Weight | Line height | Surface |
|---|---|---:|---:|---:|---|
| Public list body | Roboto system stack | 14px | 400 | 21px | home, exchange, notice |
| Dense exchange/control text | Roboto system stack | 12px | 400 | normal | exchange |

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `typography.dense.lineHeight`: `normal`

## Elevation & Depth

### Elevation

The retained exchange quick-fill sample and the exchange data panels compute `box-shadow: none`; the service-centre notice panel carries `rgb(222, 225, 231) 2px 2px 4px 0px` (`#DEE1E7`, §4). No general elevation scale is claimed from one shadowed container.

## Motion & Easing

### Motion

No duration, easing, transition, data-update animation, scroll behavior, or interactive sequence was captured. Static CSS classes and one rendered default do not establish a motion contract.

No motion or easing values were captured. Preserve this absence instead of assigning default durations or curves.

## Components

### Exchange quick-fill control

**Observed default**
- Background: `#FFFFFF`
- Text: `#1A2434`
- Border: `1px solid #D6D8DB`
- Radius: 4px
- Padding: 0px 8px 1px
- Height: 28px
- Font: 12px / 400 / resolved Roboto system stack
- Use: percentage quick-fill link on the public exchange; evidence `surface-2::[data-omd-capture="139"]`, class `percentage-button css-1vvi88j`

The collector reports this as five medium-confidence occurrences on the exchange page. The capture holds no state frame for this element, so only its default is documented. Corrected 2026-09-29: the July text tied this to the empty interaction record, and the July token typed the control as a badge; the collector classes it as a button.

The components below were transcribed on 2026-09-29 from the same 2026-07-13 bundle; nothing was re-measured.

### Header navigation link — light (home)

**Rest and pointer states**
- Background: transparent
- Text: `#1A2434`
- Radius: 0px · Padding: 0px · Height: 22px
- Font: 15px / 400 / 22px, resolved Roboto system stack
- Hover: weight 500 (400 at rest)
- Pressed: weight 500
- States: sampled on the home header links, `home::[data-omd-capture="1"]` to `"5"` (1–4 carry text; 5 is an 84 × 24 link without text). Every hover and pressed frame records weight 500, and weight is the only dumped property that moves. All the siblings agree, so the value is read as settled rather than mid-transition. Focus is not declared: the collector presses before it focuses, which suppresses `:focus-visible`.
- Use: public home header navigation link, class `css-h3yhvr`.

### Header navigation link — dark (exchange, notice)

**Rest and pointer states**
- Background: transparent
- Text: `rgba(255, 255, 255, 0.6)`
- Radius: 0px · Padding: 0px · Height: 22px
- Font: 15px / 400 / 22px
- Hover: weight 500
- Pressed: weight 500
- States: the same class as the light link, sampled on the exchange header (`surface-2::[data-omd-capture="2"]` to `"5"`) and the notice header (`surface-3::[data-omd-capture="1"]` to `"5"`). Every hover and pressed frame records weight 500, the only dumped property that moves. Focus is not declared.
- Use: white text at 60% alpha implies a dark header bar; its fill was not sampled on this element.

### Exchange panel tab

- Background: transparent
- Text: `#333333`
- Border: bottom only, 1px `#DDDDDD`
- Radius: 0px · Padding: 0px · Height: 45px
- Font: 16px / 500 / 45px
- Selected: text `#0062DF`, bottom border 3px `#0062DF`, weight 700 (`surface-2::[data-omd-capture="15"]`, class `tab__item__link--active`)
- States: rest and the active variant only; the capture holds no pointer-state frame for either.
- Use: exchange panel tab, `surface-2::[data-omd-capture="16"]`, class `tab__item__link`.

### Order-form side tab

- Background: transparent
- Text: `#333333`
- Border: bottom only, 1px `#D4D6DC`
- Radius: 0px · Padding: 0px · Height: 45px
- Font: 16px / 500 / 42px
- Selected: text `#DD3C44`, bottom border 3px `#DD3C44`, weight 700, on the buy side (`surface-2::[data-omd-capture="131"]`, inside `li.tabB__buy.on`). Only the buy side was captured selected, so no selected colour is recorded for the other side.
- States: no pointer-state frame.
- Use: exchange order-form side tab, `surface-2::[data-omd-capture="132"]`, class `tabB__button`.

### Notice pagination button

- Background: `#FFFFFF`
- Text: `#1A2434`
- Border: 1px `#D6D8DB`
- Radius: 0px · Padding: 0px · Size: 28px × 28px
- Font: 12px / 400
- Selected (current page): background `#0062DF`, text `#FFFFFF`, border 1px `#0062DF` (`surface-3::[data-omd-capture="48"]`, class `css-1arrn0x`)
- States: no pointer-state frame.
- Use: service-centre notice pagination, `surface-3::[data-omd-capture="49"]`, class `css-10yd3aw` (11 occurrences).

### Text fields

- **Notice search field**: `surface-3::[data-omd-capture="24"]`, `input.css-1sxigs`. Transparent, borderless, text `#1A2434`, 42px high, 14px / 400.
- **Order-form field**: `surface-2::[data-omd-capture="135"]`, `input[type=text].css-1r6ulzr` (three occurrences). Transparent, borderless, text `#1A2434`, 38px high, 14px / 400.
- Both fields resolve to `Arial`, one of the system families in §3, not to the Roboto stack. Their wrappers were not sampled, so no field border or fill is declared, and neither field has a state frame.

### Panels

- **Notice panel**: `surface-3::article`, class `css-mzy1sz`. Background `#FFFFFF`, 0px radius, padding `60px 45px 45px`, shadow `rgb(222, 225, 231) 2px 2px 4px 0px` (`#DEE1E7`).
- **Exchange data panel**: `surface-2::article`. Background `#FFFFFF`, 0px radius, no padding, `box-shadow: none`; six article panels, 400–990px wide, compute the same values.
- Both are non-interactive containers.

---
**Verified:** 2026-07-13
**Tier 1 sources:** `https://www.upbit.com/home` (public marketing), `https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-BTC` (public exchange), `https://www.upbit.com/service_center/notice` (public support/notice), `https://global-docs.upbit.com/` (official Developer Center), `https://docs.upbit.com/kr/page/upbit_developer_sdk_license` (official SDK licence)
**Tier 2 sources:** `https://getdesign.md/upbit` (attempted; built-in web open returned an internal/safe-open failure), `https://styles.refero.design/?q=upbit` (attempted; built-in web open returned an internal/safe-open failure); no Upbit record was returned by built-in web search for either catalog.
**Conflicts unresolved:** none

The prior prose-derived token block, 2025 date stamp, broad navigation/hero/table component inventory, motion timings, contrast results, persona profiles, and behavioral state catalogue were not supported by the supplied 2026 collector and are removed rather than refreshed by assumption.

### States

Pointer states are documented only for the header navigation links: hover and pressed both record weight 500 against 400 at rest, on all three surfaces (§4). The selected exchange tab, the selected buy tab, and the current notice page are DOM variants captured at rest. No loading, empty, success, error, disabled, focus, validation, menu, dialog, toast, or tab-transition state is documented; focus is not declared from the bundle because the collector presses before it focuses. Corrected 2026-09-29: the July text treated the empty `interactions[]` record as the absence of every state sample.

Live state probe, 2026-10-16 (`https://www.upbit.com/exchange?code=CRIX.UPBIT.KRW-BTC`), `quick-fill`: pressed — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do

- Use the observed public exchange quick-fill treatment only with its recorded `#FFFFFF`, `#1A2434`, `#D6D8DB`, 4px-radius, and 28px-height provenance.
- Keep `#DD3C44` and `#1375EC` bounded to their captured exchange-market context.
- Treat Roboto as an observed system-resolved runtime family, not an Upbit-owned brand font.
- Keep marketing, exchange, support, Developer Center, and unobserved authenticated-product claims separated.
- Declare a state only where the bundle holds a settled state frame (the header links' weight 500); record defaults elsewhere.

### Don't

- Reintroduce the former prose-derived semantic palette or unsupported broad component inventory as current evidence.
- Render Noto Sans KR, EuclidCircular, Droid Sans, Roboto Condensed, Arial, or Helvetica as a verified Upbit UI-family substitute.
- Invent hover, focus, pressed, disabled, validation, menu, dialog, toast, state-transition, motion, or accessibility behavior from static markup.
- Treat the Upbit Developer SDK licence as a licence for UI assets, fonts, logos, or brand use.
- Infer a documented public design system from the absence of a discovered design-system URL.

## Voice & Tone

No first-party voice or editorial guideline was collected. The public Korean product, support, and Developer Center surfaces show different functional registers, but this evidence is insufficient to prescribe a reusable brand voice. Avoid inventing customer promises, urgency claims, or copied copy under the Upbit name.

## Governance

### Accessibility & locale

- The public capture supplies color and geometry values, not an accessibility audit; contrast, keyboard support, focus indication, and target-size conformance are not claimed here.
- The current public text stack includes Korean-capable fallback families, but the capture does not establish a locale typography policy or cross-market color convention.
- Implementations should provide accessible states without presenting those states as observed Upbit behavior.

### Known Gaps

- **Contrast, `home-header-link`.** Text `#1a2434` on `#00000000` measures 1.35:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `exchange-panel-tab`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `order-side-tab`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `notice-search-input`.** Text `#1a2434` on `#00000000` measures 1.35:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `order-form-input`.** Text `#1a2434` on `#00000000` measures 1.35:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
