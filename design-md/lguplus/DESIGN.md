---
name: LG유플러스
colors:
  primary: '#e6007e'
  ink: '#000000'
  canvas: '#ffffff'
  muted: '#888888'
  soft: '#f5f5f5'
  border: '#ebebeb'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Observed public Home body
  subscription-action:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.5
    use: Observed public subscription purchase action
rounded:
  none: 0px
  row: 8px
  primary-cta: 20px
spacing:
  xs: 4
  sm: 8
  md: 12
  lg: 16
components:
  home-primary-cta:
    type: button
    backgroundColor: '#e6007e'
    textColor: '#ffffff'
    border: '0px solid #ffffff'
    rounded: 20px
    padding: 0px 30px
    height: 40px
    typography: 16px / 400 / Pretendard
    states: default captured; the capture holds no pointer-state frame for any Home element (interactionCount 0 counts dialog, menu, and tab expansions only), so no hover, focus, pressed, disabled, or error value was observed
    use: Public Home solid CTA at home::[data-omd-capture="19"]
    pressed: 'bg #730024 (:hover + :active)'
    focus: 'bg #730024, outline #ffffff dotted 1px on :focus-visible'
  subscription-information-row:
    type: listItem
    backgroundColor: transparent
    textColor: '#222222'
    border: '1px solid #ebebeb'
    rounded: 8px
    padding: 19px
    height: 65px
    typography: 14px / 500 / nskr
    use: Public subscription product information row at surface-2::[data-omd-capture="14"]
  home-section-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px
    height: 34px
    typography: 28px / 400 / Pretendard
    selected: 'fg #e6007e, 28px / 700'
    states: unselected rest and aria-selected=true variant captured; no pointer-state sample on Home
    use: Public Home recommendation tab (role=tab) at home::[data-omd-capture="42"]
  home-outline-button:
    type: button
    backgroundColor: transparent
    textColor: '#ffffff'
    border: '1px solid #bbbbbb'
    rounded: 16px
    padding: 0px 24px
    height: 32px
    typography: 14px / 400 / Pretendard
    states: default captured; no pointer-state sample on Home
    use: Public Home small outline button (.c-btn-outline-2-s) at home::[data-omd-capture="81"]
  home-arrow-link:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px
    height: 36px
    typography: 24px / 700 / Pretendard
    states: default captured; no pointer-state sample on Home
    use: Public Home section link with arrow (.c-link-arr-1) at home::[data-omd-capture="56"]
  home-recommendation-card:
    type: card
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px solid #cccccc'
    rounded: 16px
    padding: 40px
    size: 312px x 405px
    typography: 16px / 400 / Pretendard
    states: default captured; no pointer-state sample on Home
    use: 'Public Home recommendation card: a framed list item holding a full-bleed link at home::[data-omd-capture="44"]'
  subscription-gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px
    height: 24px
    typography: 16px / 700 / nskr
    hover: 'fg #e6007e'
    pressed: 'fg #e6007e'
    states: default, hover, and pressed sampled; focus not sampled
    use: Public subscription-page header navigation link at surface-2::[data-omd-capture="4"]
  subscription-utility-link:
    type: tab
    backgroundColor: transparent
    textColor: '#888888'
    rounded: 0px
    padding: 6px 0px
    height: 30px
    typography: 12px / 400 / nskr
    states: default captured; no pointer-state sample
    use: Public subscription-page utility link at surface-2::[data-omd-capture="0"]
  subscription-purchase-cta:
    type: button
    backgroundColor: '#e6007e'
    textColor: '#ffffff'
    border: '0px solid #ffffff'
    rounded: 90px
    padding: 15.5px
    height: 55px
    typography: 16px / 700 / nskr
    states: default captured; the pressed frame moved one channel unit (rgb(230, 0, 126) to rgb(229, 0, 126)), consistent with a transition frame, so no pressed value is declared
    use: Public subscription purchase CTA at surface-2::[data-omd-capture="15"]
  subscription-more-button:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #000000'
    rounded: 8px
    padding: 15.5px
    height: 57px
    typography: 16px / 700 / nskr
    states: default captured; no pointer-state sample
    use: Public subscription outline more button (.pg-button-prod_detail-more) at surface-2::[data-omd-capture="23"]
  subscription-add-control:
    type: button
    backgroundColor: '#f5f5f5'
    textColor: '#000000'
    rounded: 8px
    padding: 0px 10px
    height: 60px
    typography: 12px / 700 / nskr
    states: default captured; no pointer-state sample
    use: Public subscription compact add control (.pr-btne.add) at surface-2::[data-omd-capture="34"]
  subscription-pagination-link:
    type: button
    backgroundColor: transparent
    textColor: '#888888'
    rounded: 0px
    padding: 8px 12px
    height: 34px
    typography: 14px / 400 / nskr
    selected: 'bg #f3f3f3, fg #000000, 14px / 700, radius 4px'
    states: default and current-page variant captured; no pointer-state sample
    use: Public subscription review pagination link (.page-link) at surface-2::[data-omd-capture="81"]
  subscription-carousel-arrow:
    type: button
    backgroundColor: '#ffffff'
    textColor: transparent
    border: '1px solid #ebebeb'
    rounded: 50%
    size: 32px x 32px
    shadow: rgba(0, 0, 0, 0.08) 0px 2px 6px 0px
    states: default captured; no pointer-state sample
    use: Public subscription carousel arrow (.slick-arrow) at surface-2::[data-omd-capture="27"]; its label text is visually hidden
fonts:
  roles:
    home: Pretendard
    subscription: nskr
---

# Design System Inspiration of LG유플러스

## Overview

### Visual Theme & Atmosphere

LG유플러스 is a Korean telecommunications and consumer-technology company, established in 1996, with public services for mobile, home internet and IPTV, smart home, and people-centred AI as well as enterprise offerings. Its recognizable public expression combines a white, near-black service foundation with a high-visibility magenta action signal, while its current Simply. U+ direction frames the brand around reducing the complexity customers encounter in everyday telecom tasks. The supplied capture shows this in a deliberately bounded way: the public service home uses Pretendard with magenta calls to action; the public subscription-product page uses its own loaded `nskr` stack and more compact information rows; the corporate About page is context rather than a shared product-token source. The result is not a single universal LG U+ design system, nor evidence for authenticated, native-app, checkout, or support flows.

**Observed characteristics:**

- `#e6007e` is a selector-backed filled action color on both captured public service and subscription surfaces.
- `#000000` on `#ffffff` is the repeated public working base; `#f5f5f5`, `#888888`, and `#ebebeb` are scoped subscription-detail siblings.
- Loaded typography is surface-specific: Home uses Pretendard and the public subscription detail uses computed family `nskr`.
- The captured Home CTA is a 40px-high 20px-radius control; the subscription detail also has a static 65px information row with an 8px outline geometry.
- The one measured product-surface pointer state is on-brand: the public subscription page's header links turn from `#000000` to magenta `#e6007e` on hover and press, and the selected Home recommendation tab carries the same magenta at 700 weight.
- The 2025 Simply. U+ narrative is brand context only. It does not create colors, components, states, or motion tokens.

### Primary tasks

- Compare mobile plans, benefits, and device-related options
- Read a subscription product's details, then start the purchase
- Check what a home internet, IPTV, or smart-home service includes

### Brand Narrative

LG유플러스 states that it has worked to make meaningful change in customers’ lives since its 1996 establishment. Its official company presentation spans personal mobile, home internet and IPTV, smart-home, AI, and enterprise services; the common narrative is connection and practical service value rather than a single consumer product.

The current evolution is Simply. U+. In official 2025 material, LG유플러스 describes the direction as reducing customers’ complexity and discomfort, leaving the essential, and building trustworthy, easier experiences. Simple Lab is presented as a channel for customer ideas to be proposed and shared through implementation. These are corporate and campaign facts, not evidence that all legacy pages already share a new visual system.

### Principles

1. **Remove customer complexity.** *UI implication:* Put the immediate outcome and the required action together; do not add unmeasured interaction patterns.
2. **Keep what is essential.** *UI implication:* Prefer the observed white/ink foundation and purpose-specific magenta CTA over decorative color expansion.
3. **Make service choices understandable.** *UI implication:* Preserve surface-specific type and row geometry where it carries practical subscription information.
4. **Listen through customer participation.** *UI implication:* A feedback flow must be evidenced before it is treated as a reusable component pattern.

### Personas

These are service-domain archetypes inferred from LG U+’s own public service categories, not surveyed personas, demographics, or observed product-flow behavior.

- **Mobile service customer:** compares plans, benefits, or device-related options on public service pages. No authenticated account behavior is claimed.
- **Home and family service customer:** evaluates internet, IPTV, or smart-home information. The capture does not establish household-management UI.
- **Enterprise service evaluator:** reviews AI, infrastructure, or security service information. No enterprise console pattern is inferred.

## Colors

### Observed public-surface foundation

- **Primary** — `#e6007e`: measured fill on the public Home solid CTA and the public subscription purchase CTA, and the measured text colour of the selected Home recommendation tab and of the subscription header links in their hover and pressed frames.
- **Ink** — `#000000`: measured Home body ink and repeated public-surface text baseline.
- **Canvas** — `#ffffff`: measured Home canvas and CTA text color.
- **Muted** — `#888888`: measured public subscription-detail supporting-link text only.
- **Soft** — `#f5f5f5`: measured fill on the compact public subscription `pr-btne add` control only.
- **Border** — `#ebebeb`: measured 1px outline on the public subscription information row and the subscription carousel arrow.

The product-detail row’s text is `#222222`; it is retained in that component’s measured fields rather than promoted as a general foreground token. Corporate About ink values and low-frequency page-specific colors remain useful raw evidence but are not merged into this product-scoped palette.

Component-scoped neutrals stay in their components rather than becoming palette roles: `#bbbbbb` is the border of the Home small outline button, `#86868b` the text and border of its medium variant, `#cccccc` the Home recommendation-card frame, `#a7a7a7` the small arrow link, and `#f3f3f3` the current-page fill in the subscription review pagination.

## Typography

### Font evidence classes

| Evidence class | Resolution |
|---|---|
| Official product-use | No first-party announcement reviewed here names one type family for every LG U+ product. |
| Live computed surface-use | Home has loaded Pretendard with 231 observed uses. The public subscription product has loaded `nskr` with 162 observed uses; its delivered filenames identify NotoSansKR assets. |
| Official distributed brand asset | The supplied runtime bundle delivers LG U+-hosted Pretendard and NotoSansKR font files. This proves delivery on the captured web surfaces, not ownership of a proprietary LG U+ typeface. |
| Declared-only | Geist, Geist Fallback, slick, and swiper-icons have no visible use in the supplied bundle and are omitted from tokens. |
| License | Pretendard’s upstream repository states SIL Open Font License 1.1. This license concerns Pretendard, not an LG U+ trademark or cross-product font policy. |

### Captured hierarchy

| Surface and role | Computed family | Size | Weight | Line height | Boundary |
|---|---|---:|---:|---:|---|
| Public Home body | Pretendard | 16px | 400 | 24px | `home::body`; not a universal product scale |
| Public Home primary CTA | Pretendard | 16px | 400 | 24px | `home::[data-omd-capture="19"]` |
| Public subscription purchase CTA | `nskr` | 16px | 700 | 24px | `surface-2::[data-omd-capture="15"]` |
| Public subscription information row | `nskr` | 14px | 500 | 21px | `surface-2::[data-omd-capture="14"]` |

Do not substitute an unavailable system font and call it Pretendard or `nskr`; do not extend either family from these two captured domains to uninspected LG U+ surfaces.

## Layout

- The supplied desktop observations repeatedly include 4px, 8px, 12px, and 16px spacing values. Treat this as a measured local cluster, not a complete grid declaration.
- Preserve the named component geometry rather than averaging it: the Home CTA is 40px high with 20px corners, whereas the subscription row is 65px high with 8px corners.
- The capture establishes no canonical column count, maximum container width, or authenticated checkout layout.

### Responsive Behavior

The supplied evidence was captured at 1440×900. It supports only the listed desktop geometry. No mobile breakpoint, touch-target rule, safe-area behavior, or responsive reflow is promoted.

## Motion & Easing

No duration scale, easing curve, transition, carousel behavior, or motion-reduction rule is verified by the supplied static capture. Do not introduce a named LG U+ motion token from this reference. If motion is added to a new implementation, treat it as a local extension and document it separately from these verified tokens.

## Components

### Button

**Home primary CTA**
- Background: `#e6007e`
- Text: `#ffffff`
- Border: `0px solid #ffffff`
- Radius: 20px
- Padding: 0px 30px
- Height: 40px
- Font: 16px / 400 / Pretendard
- Observed-state summary: Default captured. The capture holds no pointer-state frame for any Home element (`interactionCount: 0` counts dialog, menu, and tab expansions only), so no hover, focus, pressed, disabled, or error value was observed.
- Use: Public Home solid CTA at `home::[data-omd-capture="19"]`. Five instances (`"19"` through `"23"`) share these values; `home::[data-omd-capture="52"]` uses the same `.c-btn-solid-1-m` class with 0px 40px padding.

**Home small outline button**
- Background: transparent
- Text: `#ffffff`
- Border: `1px solid #bbbbbb`
- Radius: 16px
- Padding: 0px 24px
- Height: 32px
- Font: 14px / 400 / Pretendard, letter-spacing -0.32px
- Observed-state summary: Default captured; no pointer-state frame on Home.
- Use: `.c-btn-outline-2-s` at `home::[data-omd-capture="81"]` and `"82"`. White text on a transparent fill means it sits on a dark band; that band's fill is not claimed. A medium variant, `.c-btn-outline-2-m` at `home::[data-omd-capture="95"]`, is transparent with `#86868b` text and a 1px `#86868b` border, 20px radius, 0px 40px padding, and 30px height.

**Subscription purchase CTA**
- Background: `#e6007e`
- Text: `#ffffff`
- Border: `0px solid #ffffff`
- Radius: 90px
- Padding: 15.5px
- Height: 55px
- Font: 16px / 700 / nskr, letter-spacing -0.48px
- Observed-state summary: Default captured. The pressed frame moved one channel unit (`rgb(230, 0, 126)` to `rgb(229, 0, 126)`), consistent with a transition frame, so no pressed value is declared.
- Use: `.pg-button-prod_detail-cart_add` at `surface-2::[data-omd-capture="15"]`.

**Subscription outline more button**
- Background: `#ffffff`
- Text: `#000000`
- Border: `1px solid #000000`
- Radius: 8px
- Padding: 15.5px
- Height: 57px
- Font: 16px / 700 / nskr
- Observed-state summary: Default captured; no pointer-state frame.
- Use: `.pg-button-prod_detail-more` at `surface-2::[data-omd-capture="23"]` and `"24"`.

**Subscription compact add control**
- Background: `#f5f5f5`
- Text: `#000000`
- Radius: 8px
- Padding: 0px 10px
- Height: 60px
- Font: 12px / 700 / nskr, letter-spacing -0.36px
- Observed-state summary: Default captured; no pointer-state frame.
- Use: `.pr-btne.add` at `surface-2::[data-omd-capture="34"]`; ten instances share these values.

**Subscription review pagination link**
- Background: transparent
- Text: `#888888`
- Radius: 0px
- Padding: 8px 12px
- Height: 34px
- Font: 14px / 400 / nskr
- Current page: fill `#f3f3f3`, text `#000000`, 14px / 700, 4px radius
- Observed-state summary: Default and current-page variants captured; no pointer-state frame.
- Use: `.page-link` at `surface-2::[data-omd-capture="81"]`; current page at `surface-2::[data-omd-capture="80"]`.

**Subscription carousel arrow**
- Background: `#ffffff`
- Text: transparent (the label is visually hidden at 1px)
- Border: `1px solid #ebebeb`
- Radius: 50%
- Size: 32px x 32px
- Shadow: `rgba(0, 0, 0, 0.08) 0px 2px 6px 0px`
- Observed-state summary: Default captured; no pointer-state frame. The arrow glyph is not part of the computed style and is not claimed.
- Use: `.slick-arrow` at `surface-2::[data-omd-capture="27"]` and `"71"`.

### List item

**Subscription information row**
- Background: transparent
- Text: `#222222`
- Border: `1px solid #ebebeb`
- Radius: 8px
- Padding: 19px
- Height: 65px
- Font: 14px / 500 / nskr
- Use: Public subscription product information row at `surface-2::[data-omd-capture="14"]`; it is an observed link/row and is classified as `listItem`, not as a button.

### Link

**Home section link with arrow**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 0px
- Height: 36px
- Font: 24px / 700 / Pretendard, 36px line height
- Observed-state summary: Default captured; no pointer-state frame on Home.
- Use: `.c-link-arr-1` at `home::[data-omd-capture="56"]` through `"59"`. The same class appears at 26px / 500 (`home::[data-omd-capture="48"]`) and as a small `.c-link-arr-1-s` at 12px / 500 in `#a7a7a7` (`home::[data-omd-capture="71"]`); the arrow glyph itself is not claimed.

**Subscription header navigation link**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 0px
- Height: 24px
- Font: 16px / 700 / nskr, letter-spacing -0.32px
- Hover: text `#e6007e`
- Pressed: text `#e6007e`
- Use: header links at `surface-2::[data-omd-capture="4"]` through `"8"`; the icon-sized link `"3"` records the same change. Focus was not sampled for these links.

**Subscription utility link**
- Background: transparent
- Text: `#888888`
- Radius: 0px
- Padding: 6px 0px
- Height: 30px
- Font: 12px / 400 / nskr
- Observed-state summary: Default captured; no pointer-state frame.
- Use: `.link` at `surface-2::[data-omd-capture="0"]`, `"1"`, and `"2"`, the utility row at the top of the page.

### Tab

**Home recommendation tab**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Padding: 0px
- Height: 34px
- Font: 28px / 400 / Pretendard, 28px line height, letter-spacing -1.68px
- Selected: text `#e6007e` at 28px / 700 (`aria-selected="true"`)
- Observed-state summary: Unselected and selected variants captured; no pointer-state frame on Home.
- Use: `role=tab` links at `home::[data-omd-capture="42"]` and `"43"`; selected tab at `home::[data-omd-capture="41"]`.

### Card

**Home recommendation card**
- Background: transparent
- Text: `#000000`
- Border: `1px solid #cccccc`
- Radius: 16px
- Padding: 40px
- Size: 312px x 405px
- Font: 16px / 400 / Pretendard
- Observed-state summary: Default captured; no pointer-state frame on Home.
- Use: the frame (border, radius, size) is the list item the bundle records as `home::li` at 312 × 405 (top 2144); the padding and text come from the full-bleed link inside it, `home::[data-omd-capture="44"]` (310 × 403). Four cards (`"44"` through `"47"`) share these values.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.lguplus.com/ ; https://www.lguplus.com/pogg/product/%EC%9C%A0%ED%8A%9C%EB%B8%8C-%ED%94%84%EB%A6%AC%EB%AF%B8%EC%97%84-%EC%9C%A0%EB%8F%85pick-2?utm_campaign=o25o25udok04pfm&utm_source=uplusapp&utm_medium=main_eventbanner_empty_empty&utm_content=notsetpick2_6&utm_term=notsetnone ; https://www.lguplus.com/about/ko
**Tier 2 sources:** https://getdesign.md/lguplus (attempted) ; https://styles.refero.design/?q=lguplus (attempted)
**Conflicts unresolved:** none

### States

The supplied evidence reports `interactionCount: 0`: no dialog, menu, or tab was expanded. Pointer-state frames were still sampled for some controls, and the only product-surface control with a settled change is the subscription header link. Focus frames followed a mouse press in the collector, so none is a keyboard `:focus-visible` measurement. No message or animation specification is available. The categories below preserve those boundaries rather than inventing brand facts.

| Category | Verified boundary |
|---|---|
| Empty | No captured empty-state treatment. |
| Loading | No captured loading treatment. |
| Error — validation | No captured validation-error treatment. |
| Error — service | No captured service-error treatment. |
| Success | No captured success treatment. |
| Skeleton | No captured skeleton treatment. |
| Disabled | No captured disabled treatment. |
| Hover | Subscription header links: text `#000000` → `#e6007e`. No Home element has a hover frame. |
| Pressed | Subscription header links: text `#000000` → `#e6007e`. The purchase CTA's pressed frame moved one channel unit (`rgb(230, 0, 126)` → `rgb(229, 0, 126)`), a transition frame, so no pressed value is declared. |
| Selected | Home recommendation tab: `#000000` at 28px / 400 → `#e6007e` at 28px / 700 (`aria-selected="true"`). Review pagination current page: `#f3f3f3` fill with `#000000` text at 14px / 700. |
| Focus | Not keyboard-measured; no focus value is declared. |

Live state probe, 2026-10-16 (`https://www.lguplus.com/`), `home-primary-cta`: pressed — bg #730024; focus — bg #730024, outline #ffffff dotted 1px.

## Do's and Don'ts

### Do

- Keep Home and public subscription values explicitly scoped to their observed surfaces.
- Use `#e6007e` with white text for the measured action variants.
- Use the actual loaded family only where the relevant captured surface is being recreated.
- Preserve the static row as `listItem` geometry rather than changing the observed link/row into button semantics.

### Don't

- Treat declared-only fonts as visible LG U+ type families.
- Substitute a system font and label it Pretendard or `nskr`.
- Invent hover, focus, pressed, disabled, error, toast, dialog, or motion values beyond the measured subscription header-link hover and pressed colour; the capture expanded no dialog, menu, or tab.
- Merge corporate About styling into the product-token namespace without a product-surface observation.

## Voice & Tone

The official Simply. U+ material describes a customer-centred effort to remove complexity, retain what is essential, and make telecom tasks easier to understand. The cues below are bounded implementation guidance derived from that stated direction, not an approved LG U+ copy manual: **plain**, **reassuring**, and **next-step oriented**.

| Do | Don't |
|---|---|
| Put the service outcome and next action close together. | Make a customer decode a technical term before learning its consequence. |
| Use everyday Korean service language for a practical task. | Hide conditions behind celebratory language. |
| Explain a choice in one clear step before adding detail. | Turn a routine telecom task into a dense multi-step instruction. |

Illustrative, not LG U+ copy: “요금제 확인하기”; “내게 맞는 혜택 보기”; “필요한 정보부터 확인하세요.”

## Governance

### Reference Implementation Notes

Use only the frontmatter tokens that have a matching `verification_v2.claims` path. The promoted components preserve measured default geometry, each with a truthful state summary: only the subscription header link carries pointer-state values, the Home recommendation tab and the review pagination carry a measured selected variant, and the static subscription link/row preserves its measured default fields without fabricated interactive states. Corporate About controls were sampled with hover and pressed frames but stay outside these product tokens (see §9).

### Verification Scope

Raw UI proof comes only from `artifacts/reference-evidence/lguplus.json`: Home, one public subscription product detail, and corporate About. Product, corporate, newsroom, font-license, and Tier 2 evidence are retained in separate domains in `.verification.md` and `_research.md`. The official company and current-brand narrative provides context; it does not create UI tokens. The bundle also holds pointer-state frames (`<selector>::state-hover|pressed|focus`) for subscription-page and corporate About controls, none for Home. The 2026-09-29 deepening transcribed the product-surface ones and recorded the corporate ones in `.verification.md` as out-of-domain evidence.

### Known Gaps

- **Contrast, `subscription-information-row`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-section-tab`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-arrow-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `home-recommendation-card`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `subscription-gnb-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
