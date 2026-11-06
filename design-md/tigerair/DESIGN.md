---
name: Tigerair Taiwan
colors:
  primary: '#faa836'
  action-hover: '#ffc233'
  foreground: '#4a4a4a'
  muted: '#8c8c8c'
  canvas: '#ffffff'
  surface: '#f4f4f4'
  divider: '#e6e7e8'
typography:
  button:
    fontSize: 14px
    fontWeight: 500
    lineHeight: 24.01px
    use: Measured search and promo-code controls; the family entry records a page-loaded face, while these controls declare Noto Sans and their actual glyph face is unresolved.
  navigation:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    use: Header navigation item and service-card label.
  map-label:
    fontSize: 16px
    fontWeight: 700
    use: Visible child label of the low-fare-map action link; its outer anchor is 14px/500.
rounded:
  none: 0px
  sm: 4px
components:
  search-flights:
    type: button
    backgroundColor: '#faa836'
    textColor: '#ffffff'
    rounded: 4px
    height: 40px
    padding: 8px 32px
    typography: 14px / 500
    hover: The visible q-focus-helper child takes a white background and opacity 0.15; its black ::before and white ::after have opacity 0.1 and 0.4. The button background and label colour stay unchanged.
    pressed: The same helper has opacity 0.22, with pseudo-element opacities 0.1 and 0.4.
    focus: Real Tab focus gives the visible helper opacity 0.22 with the same white background and pseudo-element opacities; the changes reset after blur.
    use: 搜尋, the flight-search submit button in the white booking panel; 92px wide. Only non-activating pointer states and Tab focus were measured.
  promo-code:
    type: button
    textColor: '#8c8c8c'
    rounded: 4px
    height: 24px
    padding: 0px
    typography: 14px / 500
    hover: The visible q-focus-helper child takes the grey label colour as its background and opacity 0.15; its black ::before and white ::after have opacity 0.1 and 0.4.
    pressed: The same helper has opacity 0.22, with pseudo-element opacities 0.1 and 0.4.
    focus: Real Tab focus gives the visible helper opacity 0.22; the helper changes reset after blur.
    use: 加入促銷代碼, a 120px-wide transparent secondary button on the white booking panel. The leading Material icon is separate from its 14px/500 text label.
  header-nav:
    type: button
    textColor: '#4a4a4a'
    rounded: 0px
    height: 48.8px
    padding: 16px 24px
    typography: 14px / 400
    hover: 'Visible label colour becomes #faa836.'
    pressed: 'Visible label colour remains #faa836 while pressed and hovered.'
    use: 準備出發, a 104px-wide transparent header navigation item on white. The DOM element is a focusable div with role=listitem. Its hidden, zero-size focus helper is excluded from focus tokens.
  manage-order:
    type: card
    textColor: '#4a4a4a'
    rounded: 0px
    height: 69px
    padding: 0px
    typography: 14px / 400
    hover: 'Visible child label colour becomes #ffc233.'
    pressed: 'Visible child label colour remains #ffc233 while pressed and hovered.'
    use: 管理訂單, a 233.6px-wide transparent service-card link on the pale grey page surface. Foreground describes its visible label; the anchor's own browser blue/red colours and auto focus outline are excluded.
  low-fare-map:
    type: button
    textColor: '#faa836'
    rounded: 4px
    height: 36px
    padding: 0px 8px
    typography: 16px / 700
    hover: 'Visible label and icon colour become #ffc233.'
    pressed: 'Visible label and icon colour remain #ffc233 while pressed and hovered.'
    use: 低價航點地圖, a 152.9px-wide transparent action link on a white route-exploration card. Font describes its child label; the outer anchor is 14px/500. Its hidden, zero-size focus helper is excluded.
omitted:
  - section: spacing
    reason: No verified values in current evidence.
fonts:
  roles:
    sans: Noto Sans TC
---

# Design System Inspiration of Tigerair Taiwan

## Overview

### Visual Theme & Atmosphere

Tigerair Taiwan is a Taiwanese low-cost airline whose first flight departed on 26 September 2014. Its company history records the purchase of the Tigerair brand rights in 2021. The fleet page connects the identity to Taiwan-island forms in its logo lettering and a tiger-striped tail, and describes a service culture of passion, warmth and sincerity. These are useful anchors for the brand's friendly travel imagery. [Company history](https://www.tigerairtw.com/zh-TW/about-tigerair/about-us), [fleet and identity writing](https://www.tigerairtw.com/zh-tw/about-tigerair/carrier-info). Both articles were read through the public content API; the exact requests are in the verification notes.

The homepage pairs an illustrated tiger-led campaign banner with a practical white booking panel, orange search action, grey interface copy and photographic destination cards. The measured primary orange is `#faa836`; a brighter yellow-orange, `#ffc233`, appears on service-link hover. The campaign image supplies much of the visual energy while the form remains compact and orderly. These are observations of the captured homepage, not published design principles.

The brand's travel offering is also expanding. Its 1 October 2026 announcement introduced the Dohop-powered **虎里轉 tigerhop** booking platform; the measured homepage places 虎里轉 beside 航班, 樂虎卡 and 虎加酒 in the booking panel. [Tigerhop announcement, read through its public content API](https://api-cms.tigerairtw.com/api/strapi-cacheable/articles?slug=261001&type%5B%5D=news&locale=zh-Hant-TW).

The measured homepage is the Traditional Chinese edition at `www.tigerairtw.com/zh-TW/index`, with HTML `lang="zh-TW"`, captured at 1440×1000.

### Brand Narrative

The official company history links the airline's 2014 start to its 2021 acquisition of the Tigerair brand rights. The fleet article gives the identity a physical expression in logo lettering, striped tails and collaborative aircraft liveries. The 2026 tigerhop announcement extends that travel offer to connecting itineraries. The homepage brings these strands together through a mascot-led campaign, destination photography and a shared booking panel. [Company](https://api-cms.tigerairtw.com/api/strapi-cacheable/articles?slug=about-us&type%5B%5D=page&type%5B%5D=event&locale=zh-Hant-TW), [fleet](https://api-cms.tigerairtw.com/api/strapi-cacheable/articles?slug=carrier-info&type%5B%5D=page&type%5B%5D=event&locale=zh-Hant-TW), [tigerhop](https://api-cms.tigerairtw.com/api/strapi-cacheable/articles?slug=261001&type%5B%5D=news&locale=zh-Hant-TW).

### Principles

The fleet article explicitly names passion, warmth and sincerity under “Safety First.” For a homepage implementation, the captured UI suggests three practical principles: keep the booking task prominent, express the tiger identity in imagery and service names, and reserve vivid interface colour for actions and interaction feedback. The latter three are design inferences from this surface.

### Personas

User personas were not researched.

## Colors

The census recorded 18 computed root custom properties and 26 distinct declared properties. Quasar names carry the site's configured palette, while animation, layout mechanics and Swiper defaults are kept separate. Only colours tied to the captured product surface are promoted here.

| Role | Value | Direct evidence |
|---|---|---|
| Primary | `#faa836` | `--q-primary: rgb(250, 168, 54)`; search-button fill and low-fare-map link |
| Action hover | `#ffc233` | `--q-warning: rgb(255, 194, 51)`; visible service-card and map-link hover/press text |
| Foreground | `#4a4a4a` | `--q-dark`; header and service-card labels |
| Muted | `#8c8c8c` | Promo-code text and the rendered text census |
| Canvas | `#ffffff` | Booking/card surfaces and the search-button label |
| Surface | `#f4f4f4` | Rendered background census and pale homepage surface |
| Divider | `#e6e7e8` | Booking-tab bottom border and service-row separator |

Here `foreground` describes measured interface labels. The paragraph-ink census was empty, so a distinct paragraph/body-copy colour remains unresolved. The root variable named `warning` is demonstrably also used for these interactive hover colours; this observation does not establish a complete warning-message treatment.

## Typography

**Official product use:** no opened official typography guideline identifies a product text face.

**Live-loaded:** `document.fonts` reports **Noto Sans TC**, normal, weights **400, 500 and 700**. The first-party stylesheet imports a Google Fonts stylesheet requesting these weights. The family token records this loaded page face; it does not identify the actual glyph font of every control. Exact imported font-file URLs were not enumerated in the census.

**Official distributed assets:** the first-party stylesheet declares locally served **Material Icons Outlined** and **Material Icons Round**, weight 400; both loaded. **Phosphor** and **Phosphor-Fill** also loaded, and the stylesheet imports their regular/fill CSS from unpkg. These are icon fonts and are excluded from text-family tokens. No first-party distributed text-font binary or text-font licence was verified.

**Declared-only:** the six measured controls declare **Noto Sans**, which is absent from the loaded-face list. The census body declares `Roboto, -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif`; the census button stack also names Microsoft JhengHei, Microsoft YaHei and Heiti TC. These named faces were not reported loaded. Noto Sans TC also occurs in that button stack and retains its separate live-loaded classification above. The stylesheet requests Noto Sans Mono, Noto Sans JP, Noto Sans KR and Noto Sans Thai, but none appears in the loaded list. The unloaded faces receive no specimens and are not promoted to family tokens.

**Unresolved:** the actual glyph face used by each control, full text-font asset provenance and licensing. **Substitute: none chosen.**

Measured metrics remain useful independently of that family uncertainty: search and promo-code controls are **14px/500**, with **24.01px** line-height; header navigation is **14px/400**, with **21px** line-height. The map action's visible child label is **16px/700**, although its outer anchor is 14px/500.

## Layout

At the measured desktop width, a fixed **58px-high** white header sits above a full-width illustrated campaign carousel. A white booking panel overlaps the banner's lower edge. Below it are five service shortcuts, a three-column fare row, a route-map promotion, a four-column promotion grid, dated news rows and five footer link groups. These arrangements are visible in the survey's full-page screenshot.

The booking controls use compact spacing: the search action has **8px vertical / 32px horizontal** padding; navigation items have **16px / 24px**; the map action has **8px horizontal** padding. Preserve these component measurements without assuming a universal spacing scale.

### Responsive Behavior

Only desktop 1440×1000 was measured; mobile layouts and breakpoint behaviour were not verified.

## Elevation & Depth

All six measured control roots have `box-shadow: none`. The action wrapper immediately above the low-fare-map link has this measured shadow:

`rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px`.

Keep elevation attached to the observed wrapper rather than assigning it to the link itself.

## Motion & Easing

The header navigation item's computed root transition is `color 0.3s ease 0s`. The other five measured control roots report `all 0s ease 0s`. These root strings do not describe every descendant layer's timing; no additional motion curve is promoted.

## Components

These observations use real hover, held-pointer press and a Tab walk. The cookie banner remained open: its only surveyed action was 接受. The probe was given `hideOverlays: true`, but no control records an overlay actually hidden. Product controls were measured without activating them.

| Key and visible control | Identity: height / radius / padding | Rest appearance | Measured state treatment |
|---|---|---|---|
| `search-flights` — 搜尋 | 40px / 4px / 8px 32px; width 92px | `#faa836` fill, `#ffffff` label; 14px/500 | Visible helper opacity 0 → 0.15 on hover; 0.22 on press and Tab focus |
| `promo-code` — 加入促銷代碼 | 24px / 4px / 0px; width 120px | Transparent on white; `#8c8c8c` label; 14px/500 | Visible grey helper opacity 0 → 0.15 on hover; 0.22 on press and Tab focus |
| `header-nav` — 準備出發 | 48.8px / 0px / 16px 24px; width 104px | Transparent on white; `#4a4a4a`; 14px/400 | Visible text becomes `#faa836` on hover and held press |
| `manage-order` — 管理訂單 | 69px / 0px / 0px; width 233.6px | Transparent on `#f4f4f4`; visible label `#4a4a4a`; 14px/400 | Visible label becomes `#ffc233` on hover and held press |
| `low-fare-map` — 低價航點地圖 | 36px / 4px / 0px 8px; width 152.9px | Transparent on white; `#faa836`; child label 16px/700 | Visible label and icon become `#ffc233` on hover and held press |

The search and promo-code treatments are layered: `.q-focus-helper` gains a background in its current text colour, while its black `::before` and white `::after` change opacity from 0 to **0.1** and **0.4**. The helper's own opacity is **0.15** for hover and **0.22** for press/focus. These are measured layer values, not a single flattened replacement background.

The origin airport input was also inspected: **167.6×24px**, radius **0px**, padding **0px**, **14px/400**, transparent on white, ink `rgba(0, 0, 0, 0.87)`. Its containing field is **203.609×56px**. Keyboard focus paints an orange 2px ancestor border, but blur leaves a persistent red border. Its later pointer states therefore come from a changed baseline; this input remains a prose observation and is absent from component tokens.

### States

The two form actions have visible layered hover, press and keyboard-focus feedback that resets after blur. The header item changes its visible text to orange for hover/press; its focus helper stays hidden at 0×0. The service-card label changes to yellow-orange for hover/press; its measured keyboard outline has `outline-style: auto`, so no brand focus token is published. The map link changes visible text/icon colour for hover/press, while its focus helper also stays hidden at 0×0.

The input's focus and after-blur observations are retained only in prose because the baseline changes after blur. Disabled states were not measured. No absence-of-change claim is made beyond the probe's recorded DOM/style scope.

## Do's and Don'ts

- Use orange for the search action and navigation hover; use the measured yellow-orange for the service and map-link hover treatments.
- Pair the lively campaign imagery with restrained grey text, white form surfaces and small 4px button corners.
- Preserve the difference between an outer link's computed colour and its visible child label.
- Keep text-family uncertainty explicit. Use the loaded-face evidence without converting declared-only faces into brand specimens.
- Omit focus styling inferred only from hidden helpers or a browser `auto` outline.

## Voice & Tone

The homepage's labels combine direct task language—搜尋 and 管理訂單—with tiger-themed service names such as 虎加酒 and 虎里轉. A useful implementation keeps booking instructions concise and lets branded travel names and illustrations provide the playfulness. This is an inference from the captured copy, not an official editorial guide.

## Agent Prompt Guide

“Build a Traditional Chinese flight-search homepage with a tiger-themed illustrated travel campaign, a white overlapping booking panel, `#f4f4f4` page surface and `#4a4a4a` interface labels. Make the search action 92×40px with `#faa836` fill, white 14px/500 text, 4px corners and 8px 32px padding. Use the measured helper-layer states. Add a transparent 69px-high service-card link whose visible text changes to `#ffc233` on hover. Keep the control glyph font unresolved until it is verified.”

## Governance

### Known Gaps

- **Contrast, `search-flights`.** Text `#ffffff` on `#faa836` measures 1.96:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
