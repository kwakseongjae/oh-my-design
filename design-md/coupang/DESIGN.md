---
name: Coupang
colors:
  canvas: '#ffffff'
  foreground: '#000000'
  foreground-muted: '#555555'
  foreground-secondary: '#333333'
  foreground-account: '#212b36'
  hairline: '#e5e7eb'
typography:
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Observed default body text on the live commerce home surface; system-family only.
  search:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    use: Observed search-field text on the live commerce home surface.
  utility:
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.25
    use: Observed compact account and utility text on the live commerce home surface.
  utility-small:
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.5
    use: Observed top utility navigation text on the live commerce home surface.
rounded:
  none: 0px
spacing:
  xxs: 1
  xs: 5
  sm: 10
  md: 12
  lg: 14
  xl: 16
  xxl: 20
  account-gap: 24
components:
  header-menu-item:
    type: listItem
    textColor: '#000000'
    rounded: 0px
    padding: 0px 5px
    use: Observed default header menu list item only.
  header-account-utility:
    type: listItem
    textColor: '#212b36'
    rounded: 0px
    typography: 12/400 system
    use: Observed default account-area list item only.
  header-menu-link:
    type: tab
    backgroundColor: transparent
    textColor: '#333333'
    rounded: 0px
    padding: 0px
    height: 32px
    typography: 12px / 400 / 32px
    hover: 'fg #4285f4'
    pressed: 'fg #4285f4'
    states: rest on seventeen links (capture 16-32); hover and pressed sampled on eight of them (16-23), all recording the same value; no focus frame
    use: Home header menu link, the text link inside li.gnb-menu-item, at home::[data-omd-capture="16"]
  header-menu-control:
    type: button
    backgroundColor: '#ffffff'
    rounded: 0px
    padding: 0px 16px
    size: 32px x 32px
    states: default captured on both menu buttons (capture 15 and 33; 33 carries the gnb-menu-btn-active class and records the same values); no pointer-state sample
    use: Home header menu button (a.gnb-menu-btn) at home::[data-omd-capture="15"]; it has no text node, so no label colour is claimed
    height: 32px
    typography: 16px / 400
    pressed: no visible change (measured 2026-10-16) (:hover + :active)
  header-search-input:
    type: input
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 0px
    padding: 0px
    size: 351px x 17px
    typography: 14px / 400 / 21px
    states: default captured; no pointer, focus, or error sample
    use: Home header search field (input.headerSearchKeyword) at home::[data-omd-capture="10"]; the input itself has a 0px border, so no field frame is claimed
  search-category-select:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 10px 20px 5px 10px
    height: 37px
    typography: 12px / 400 / 18px
    states: default captured; no pointer-state sample
    use: Header search category selector (a.select--category__current) at home::[data-omd-capture="9"]
  top-utility-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px
    height: 13px
    typography: 11px / 400 / 16.5px
    states: default captured on six links (capture 2-7); no pointer-state sample
    use: Top utility navigation link at home::[data-omd-capture="2"]; capture 3 through 7 record the same values
  footer-link:
    type: tab
    backgroundColor: transparent
    textColor: '#555555'
    border: 'left 1px #888888'
    rounded: 0px
    padding: 0px 14px
    height: 12px
    typography: 12px / 400 / normal
    states: default captured on thirteen links (capture 60-72); no pointer-state sample
    use: 'Footer link row at home::[data-omd-capture="61"]; every link after the first carries the 1px #888888 left divider (capture 60 has a 0px border); the dump records border width and colour, not border style'
---

# Design System Inspiration of Coupang (쿠팡)

## Overview

### Visual Theme & Atmosphere

Coupang is a commerce and services company whose customer-facing Korean storefront is built around a broad catalog and a compact global header. Its verified public product surface is materially different from the company’s marketing and careers material: the captured storefront presents a white field, black text, pale gray dividers, a prominent search field, and small utility navigation rather than a published consumer design system. The company describes its broader aim as making shopping, eating, and living easier, and as building the future of commerce; its careers material frames the desired outcome as customers wondering how they lived without Coupang. Those ideas explain the dense, utilitarian register without licensing an inferred brand palette or a generic e-commerce component library. [Coupang Careers](https://www.coupang.jobs/en/why-coupang/) and the [Coupang Newsroom](https://news.coupang.com/21597-2/) are corporate/editorial sources; they are not token sources for the commerce UI.

The reference therefore preserves the verified distinction between domains. The live commerce capture covers the homepage and two product URLs, although the product URLs exposed only minimal document chrome in this collector run. Corporate media guidance governs downloadable marks and logo treatment, not the live product UI. No public source collected in this pass authorizes treating a marketing color, logo asset, or a careers-font deployment as a commerce-app token.

**Key Characteristics:**

- White commerce header and canvas with black default text
- Pale gray #e5e7eb divider/border chrome
- Search-led header with compact utility and menu controls
- Square default geometry: sampled controls and inputs have 0px radius
- System-font rendering on the captured commerce surface, separate from Coupang Sans on official corporate/careers surfaces
- One settled pointer state in the capture: the header menu links turn #4285f4 on hover and press

### Primary tasks

- Search the storefront for something to buy
- Browse the catalog from the menu in the storefront header
- Open a product page for an item in the catalog
- Reach your own account area from the storefront header

### Brand Narrative

Coupang describes itself as a technology company shaping global commerce and says it was born from an effort to make shopping, eating, and living easier. Its official careers page connects that objective with a customer-outcome test: whether people feel they could not live without the service. The company’s Newsroom separates corporate information, services, technology, and media assets into distinct editorial areas, a useful boundary when reading brand claims versus UI evidence. [Why Coupang](https://www.coupang.jobs/en/why-coupang/) · [Newsroom information](https://news.coupang.com/21597-2/)

The current public brand record also includes a purpose-built Coupang Sans family for corporate and careers use. The source describes Display and Text cuts and links the design to speed and legibility, but does not provide a license or establish the font as a loaded commerce-webfont asset. [Coupang Sans](https://news.coupang.com/archives/19962/)

### Principles

1. **Wow the customer.** Coupang says the customer is the beginning and end of decisions. *UI implication:* connect a product claim to a clear user outcome; do not claim more product behavior than the evidence records.
2. **Simplify.** The company’s published leadership principles call complexity an enemy of scale, speed, and customer experience. *UI implication:* preserve a clear default hierarchy before adding optional surface variants.
3. **Move with urgency.** Coupang describes timely action as a leadership value. *UI implication:* use concise, actionable language where official product copy is available; otherwise leave the copy unspecified.

### Personas

*No first-party persona research was collected for this reference. Do not fabricate customer archetypes or demographic facts.*

## Colors

### Observed live commerce surface

- **Canvas** (#ffffff): Observed background on the header menu control and search input.
- **Foreground** (#000000): Dominant observed text color across all three captured routes.
- **Muted foreground** (#555555): Repeated home-surface text color; the footer link row uses it (§4). No wider semantic role was observed.
- **Secondary foreground** (#333333): Repeated home-surface text color; the header menu links use it at rest (§4). No wider semantic role was observed.
- **Account foreground** (#212b36): Observed on the home account-area list item.
- **Hairline** (#e5e7eb): Repeated border color in the collector output.

### Boundary

No live computed Coupang-red fill, WOW color, or semantic status color was present in the supplied capture. Those values are omitted rather than inferred from logos, screenshots, or third-party color lists.

One pointer-state colour was captured: the header menu links change from #333333 to #4285f4 (rgb(66, 133, 244)) on hover and on press (§4, §14). It is recorded on that component and is not promoted to a palette role. Corrected 2026-09-29: the July text said the capture held no hover or pressed value.

## Typography

### Evidence classes

- **Live computed surface-use:** the captured commerce pages resolve to Apple SD Gothic Neo followed by Korean/Japanese/Chinese and common sans fallbacks. The collector classifies it as a high-confidence operating-system stack (155 uses), with no loaded FontFaceSet match or @font-face source URL. It is documented as system use, not a Coupang-owned UI font token.
- **Official product/corporate-use:** Coupang’s Newsroom says its BX team created **Coupang Sans**, applied it to the corporate homepage and careers site, and split it into Display and Text families. This is official corporate/careers use; it does not establish use on the captured commerce storefront. [Coupang Sans announcement](https://news.coupang.com/archives/19962/)
- **Official distributed asset / license:** no downloadable font file or font-license terms were found in the official material reviewed for this pass. Coupang’s media-assets license covers marks and logos, not a font license. [Media Assets Brand Guidelines](https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/)
- **Unresolved:** Times appeared eight times in the captured product URL documents but has no FontFaceSet/source corroboration and is not promoted.

### Observed hierarchy

| Role | Size | Weight | Line height | Surface boundary |
|------|------|--------|-------------|------------------|
| Default body | 16px | 400 | 24px | Observed on the commerce home surface |
| Search field | 14px | 400 | 21px | Observed on the commerce home surface |
| Utility text | 12px | 400 | 15–32px | Observed on the commerce home surface |
| Utility small | 11px | 400 | 16.5px | Observed on the commerce home surface |

Do not substitute Pretendard, Inter, or another webfont and label it as Coupang. Coupang Sans is useful brand context only until a product surface and loaded source corroborate it for that surface.

## Layout

The supplied desktop home capture is 1440px wide. Its verified layout evidence is limited to a 351px search input, compact 32px menu controls, and home-header utility spacing. Product-grid columns, responsive breakpoints, sticky behavior, and card spacing are not asserted because they were not reliably captured across the supplied routes.

### Responsive Behavior

No mobile viewport was captured. The source evidence does not support breakpoint, grid, sticky, or touch-target rules.

## Elevation & Depth

The representative captured controls have box-shadow: none. No elevated component or overlay state is retained.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.none`: `none`

## Motion & Easing

No motion duration, easing, or transition timing was captured. The hover and pressed frames in §14 record resulting colours only.

## Components

### Header controls

**Menu control — observed default**
- Background: #ffffff
- Text: #000000 as computed; the control has no text node, so this is not a visible label colour
- Radius: 0px
- Padding: 0px 16px
- Font: 16px / 400 / system stack
- Use: Home header control at home::[data-omd-capture="15"]; 32px rendered height, observed default state only.

**Search submit control — observed default**
- Text: #000000 as computed; the button has no text node, so this is not a visible label colour
- Radius: 0px
- Font: 16px / 400 / system stack
- Use: Home header submit button at home::[data-omd-capture="12"]; 20px rendered height, observed default state only.

### Search field

**Header search input — observed default**
- Background: #ffffff
- Text: #000000
- Radius: 0px
- Padding: 0px
- Font: 14px / 400 / system stack
- Use: Text input at home::[data-omd-capture="10"]; 351px rendered width and 17px rendered height in the supplied desktop capture.

### Header navigation

**Menu item — observed default**
- Text: #000000
- Radius: 0px
- Padding: 0px 5px
- Use: home::li.gnb-menu-item; observed 32px rendered height. This item was classified as a list item, not a tab. Its own computed colour, #000000, belongs to the container; the visible label is the link inside it, described under Header menu link below.

**Account utility item — observed default**
- Text: #212b36
- Radius: 0px
- Font: 12px / 400 / system stack
- Use: home::li.my-coupang; observed 59px rendered height and 0px 24px margin.

### Header menu link

**Rest / hover / pressed**
- Background: transparent
- Text: #333333
- Radius: 0px
- Padding: 0px
- Height: 32px
- Font: 12px / 400 / 32px system stack
- Hover: text #4285f4 (rgb(66, 133, 244))
- Pressed: text #4285f4
- Use: the text link inside each li.gnb-menu-item, at home::[data-omd-capture="16"] through "32", all with the same rest values. Hover and pressed frames exist for "16" through "23", and all eight record the same change.

### Top utility link

**Observed default**
- Background: transparent
- Text: #000000
- Radius: 0px
- Padding: 0px
- Height: 13px
- Font: 11px / 400 / 16.5px system stack
- Use: six top utility links at home::[data-omd-capture="2"] through "7"; no pointer-state frame.

### Search category selector

**Observed default**
- Background: transparent
- Text: #000000
- Radius: 0px
- Padding: 10px 20px 5px 10px
- Height: 37px
- Font: 12px / 400 / 18px system stack
- Use: a.select--category__current beside the search field at home::[data-omd-capture="9"]; no pointer-state frame.

### Footer link

**Observed default**
- Background: transparent
- Text: #555555
- Divider: 1px #888888 left border on every link after the first (the dump records border width and colour; border style is not in it)
- Radius: 0px
- Padding: 0px 14px
- Height: 12px
- Font: 12px / 400 / normal system stack
- Use: thirteen footer links at home::[data-omd-capture="60"] through "72"; no pointer-state frame.

The menu control, search field, search category selector, utility links, and footer links carry default values only. Hover and pressed are specified for the header menu link alone, the one control whose frames record a settled change. The capture holds no focus frame for any element, and this collector presses the mouse before it calls `.focus()`, so a focus frame from it would not be a keyboard focus-visible measurement in any case. No product card, checkout CTA, badge, selected, error, dialog, or mobile-tab variant is specified: none had selector/state provenance in the supplied capture.

---
**Verified:** 2026-07-13
**Tier 1 sources:** https://www.coupang.com/; https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=5351802654&from=home_C2&traid=home_C2&trcid=4750545; https://www.coupang.com/vp/products/7225189423?itemId=18319675609&vendorItemId=80324048129&from=home_C2&traid=home_C2&trcid=4750546; https://news.coupang.com/archives/19962/; https://news.coupang.com/coupang-media-assets-brand-guidelines-eng/; https://www.coupang.jobs/en/why-coupang/
**Tier 2 sources:** https://getdesign.md/coupang (no indexed record found); https://styles.refero.design/?q=coupang (no Coupang result found in the public search result set)
**Conflicts unresolved:** none

The live commerce capture does not corroborate legacy #E94B22 or Pretendard; these values are intentionally absent. Coupang Sans is confirmed only for corporate/careers use, not the captured commerce product surface. The capture does hold one settled pointer state, the header menu link hover and pressed colour. The menu control, search field, search category selector, header menu and utility links, and footer links are machine components with their measured defaults (added 2026-09-29 from the same bundle; the July text had left them out on the reading that the capture recorded no interaction state).

### States

Hover and pressed were captured for the header menu links; every other captured element has default values only. Corrected 2026-09-29: the July text said only default states were captured. The bundle's coverage summary reports 0 observed states because it counts state names on its component variants, and the menu links belong to no variant; their state frames sit with the page elements.

| State | Evidence |
|-------|----------|
| Hover | Header menu links, home capture 16 to 23: text #333333 → #4285f4 (rgb(66, 133, 244)); all eight frames agree |
| Pressed | The same eight links, the same value |
| Focus | No focus frame exists in this capture; not specified |

The following states require a product-specific observation before specification:

| Category | Evidence status |
|----------|-----------------|
| Empty | Not observed in the captured routes |
| Loading | Not observed in the captured routes |
| Error | Not observed in the captured routes |
| Success | Not observed in the captured routes |
| Skeleton | Not observed in the captured routes |
| Disabled | Not observed in the captured routes |

Live state probe, 2026-10-16 (`https://www.coupang.com/`), `header-menu-control`: pressed — no visible change (measured 2026-10-16).

## Do's and Don'ts

### Do

- Keep the observed commerce header canvas white with black text and pale gray hairlines when recreating this captured state.
- Treat Apple SD Gothic Neo as an operating-system stack on this surface, not a Coupang webfont.
- Keep components constrained to their recorded selector, route, and state provenance: default values everywhere, plus hover and pressed on the header menu link.
- Apply the official media-assets rules when using downloaded Coupang logos or marks.

### Don't

- Do not infer a consumer CTA color from Coupang’s logo, media assets, or third-party color directories.
- Do not use Coupang Sans as a commerce UI font without product-surface and font-source corroboration.
- Do not add focus, selected, error, or responsive variants from this evidence set, or hover and pressed values beyond the header menu link.
- Do not reuse corporate/careers or newsroom visual chrome as storefront evidence.

## Voice & Tone

Coupang’s official careers language is customer-centred, direct, and action-oriented: it describes an aim to “wow” customers, make everyday commerce easier, and build the future of commerce. That is a corporate voice source, not evidence of storefront microcopy. [Why Coupang](https://www.coupang.jobs/en/why-coupang/)

| Do | Don't |
|----|-------|
| Describe customer outcomes plainly and specifically. | Attribute unobserved commerce labels or error messages to Coupang. |
| Use the official “wow the customer” framing only with its source context. | Turn careers language into a product UI token or interaction claim. |
| Preserve the distinction between corporate and commerce copy. | Invent delivery, checkout, or membership copy. |

**Voice samples.**

- “We exist to wow our customers.” — official careers copy. <!-- verified: coupang.jobs/en/why-coupang 2026-07-13 -->
- “How did I ever live without Coupang?” — official customer-outcome framing. <!-- verified: coupang.jobs/en/why-coupang 2026-07-13 -->
- “Our mission to build the future of commerce is real.” — official careers copy. <!-- verified: coupang.jobs/en/why-coupang 2026-07-13 -->

## Agent Prompt Guide

### Verified prompt boundary

“Create only the observed Coupang desktop-header elements: a white, square-cornered search input with black 14px system-stack text; white/black square menu controls; and pale gray hairlines. The header menu links are #333333 12px text that turns #4285f4 on hover and press. Do not add a red CTA, product card, delivery badge, font substitution, or any other interaction state unless separately evidenced.”

## Governance

### Known Gaps

- **Contrast, `header-menu-link`.** Text `#333333` on `#00000000` measures 1.66:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `search-category-select`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `top-utility-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `footer-link`.** Text `#555555` on `#00000000` measures 2.82:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
