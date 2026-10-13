---
name: Samsung
colors:
  primary: '#000000'
  canvas: '#ffffff'
  surface: '#f7f7f7'
  foreground: '#000000'
  muted: '#707070'
  border: '#dddddd'
  carousel-arrow: '#007aff'
  one-ui-primary: '#0381fe'
  gnb-active: '#006bea'
typography:
  display:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 32
    use: Observed product-card heading on the AI products surface
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 21.2798
    use: Observed product-card body on the AI products surface
  action:
    fontSize: 14px
    fontWeight: 700
    lineHeight: 19
    use: Observed contained CTA label on the Samsung Korea homepage
rounded:
  sharp: 0px
  pill: 20px
  chip: 40px
spacing:
  nav-inline: 12
  action-inline: 24
  card-inset: 32
components:
  ai-product-tabs:
    type: tab
    textColor: '#000000'
    rounded: 0px
    padding: 4px 0px
    typography: 18px/700 SamsungOneKorean
    states: selected / tab-selected observed
    use: AI products `tab__item-title`; selector surface-2::[data-omd-capture="25"]
  contained-cta:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    border: '1px solid #000000'
    rounded: 20px
    padding: 10px 24px 9px
    height: 40px
    typography: 14px / 700 / SamsungOneKorean
    focus: 'outline 2px dotted #000000'
    states: 'default captured 2026-07-13 (36 homepage occurrences); on 2026-09-29 hover and pressed matched :hover and :active and left fill, border and label at rest (transition: all 0s), so no hover or pressed value is declared; the probed first instance sits in a product tile''s 구매하기 row, which stays at opacity 0 until the tile is hovered, pressed or focused (see product-tile), so its visibility is the tile''s reveal, not a state of the pill; keyboard focus (Tab, :focus-visible matched) draws an authored 2px dotted #000000 outline at 0px offset'
    use: Samsung Korea homepage contained CTA (button.cta.cta-ntrns-fild, 구매하기)
  outlined-cta:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px solid #000000'
    rounded: 20px
    padding: 10px 24px 9px
    height: 40px
    typography: 14px / 700 / SamsungOneKorean
    hover: 'bg #000000, fg #ffffff'
    pressed: 'bg #000000, fg #ffffff'
    focus: 'outline 2px dotted #000000'
    states: 'default captured 2026-07-13 (six homepage occurrences); hover and pressed measured 2026-09-29 with :hover and :active matched: the button inverts to bg #000000 and fg #ffffff (transition: background-color, border-color, color 0.2s linear, read after it ended); keyboard focus draws an authored 2px dotted #000000 outline at 0px offset and keeps the transparent fill'
    use: Samsung Korea homepage outlined CTA (button.cta.cta-outl)
  underlined-cta:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    padding: 0px 0px 2px
    height: 21px
    typography: 14px / 700 / SamsungOneKorean
    pressed: fg rgba(0, 0, 0, 0.7)
    focus: 'outline 2px dotted #000000, 1px offset'
    states: 'default captured 2026-07-13; the underline is a 1px #000000 ::after bar, not text-decoration; pressed fg rgba(0, 0, 0, 0.7) in the 2026-07-13 capture (home::[data-omd-capture="23"]::state-pressed) and again on 2026-09-29 with :active matched, while the bar stays #000000; hover matched :hover on 2026-09-29 and left every compared property at rest, so no hover value is declared; keyboard focus draws an authored 2px dotted #000000 outline at 1px offset'
    use: Samsung Korea homepage text CTA (a.cta.cta-undr, 더 알아보기)
  gnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    padding: 14px 12px
    height: 47px
    typography: 16px / 700 / SamsungOneKorean
    hover: 'fg #006bea, 2px #006bea bar via ::before'
    pressed: 'fg #006bea, 2px #006bea bar via ::before'
    focus: 'fg #006bea, 2px #006bea bar, outline 2px dotted #000000 at 1px offset'
    states: 'default captured 2026-07-13 on all three surfaces; pressed fg #006bea on every sampled navigation link in that capture (11 main and 3 utility links on each surface; hover was not sampled then); hover and pressed measured 2026-09-29 with :hover and :active matched: fg #006bea and a 2px #006bea ::before bar going from opacity 0 to 1, and they also open the white mega-menu panel (an ancestor pseudo, the menu list''s ::after, from 1440 x 0 at opacity 0 to 1440 x 406 at opacity 1); keyboard focus (Tab stop 5) shows the same blue text and bar plus an authored 2px dotted #000000 outline at 1px offset and does not open the panel; the blue text and bar stayed after focus moved to the next item, which suggests a script-applied current-item state (a lead, not a finding)'
    use: Samsung Korea global navigation link (a.nv00-gnb-v4__l0-menu-link, e.g. 모바일)
  search-trigger:
    type: button
    backgroundColor: '#f7f7f7'
    border: '1px solid #f7f7f7'
    rounded: 40px
    padding: 9px
    size: 36px x 36px
    hover: bg rgba(247, 247, 247, 0.3), border 1px rgba(0, 0, 0, 0.3)
    pressed: bg rgba(247, 247, 247, 0.3), border 1px rgba(0, 0, 0, 0.3)
    focus: 'outline 2px dotted #000000'
    states: 'rest as read on the homepage with the header scrolled (2026-09-29) and as captured 2026-07-13 on the AI-products and brand-identity pages; at the homepage page top the same button reads bg rgba(247, 247, 247, 0.3) with a 1px rgba(0, 0, 0, 0.2) border; hover and pressed measured 2026-09-29 on the scrolled header with :hover and :active matched (border-color transition 0.5s, read after it ended), and the inner keyword text turns from #757575 to #000000; keyboard focus draws an authored 2px dotted #000000 outline at 0px offset; the 2026-07-13 pressed frames on the AI-products and brand-identity pages kept bg #f7f7f7, so no pressed value is asserted for those pages'
    use: Samsung Korea header search trigger (button.search__btn); the search input opens in a fixed layer behind a click and was not measured
  product-tile:
    type: card
    backgroundColor: transparent
    textColor: '#000000'
    size: 342px x 342px
    typography: 24px / 700
    hover: image scale(1.05); opacity 0→1 on the 구매하기 CTA row
    pressed: image scale(1.05); opacity 0→1 on the 구매하기 CTA row
    focus: 'outline 2px dotted #000000 at 1px offset; image scale(1.05); opacity 0→1 on the 구매하기 CTA row'
    states: 'default captured 2026-07-13 (home captures 25, 27 and 29, each 342 x 342); hover, pressed and keyboard focus measured 2026-09-29 with :hover, :active and :focus-visible matched: the tile image scales to 1.05 and the tile''s 구매하기 CTA row (div.cta-line, 366 x 40) fades from opacity 0 to 1, so the contained CTA inside it stays invisible until the tile is hovered or focused; nothing recolours; focus adds an authored 2px dotted #000000 outline at 1px offset; fg and font are the h2 title label, not the anchor (16px / 400 / SamsungOneKorean)'
    use: Samsung Korea homepage product tile link (a.clickable, e.g. Galaxy S26 Ultra)
  product-media-card:
    type: card
    backgroundColor: '#ffffff'
    rounded: 20px
    size: 330px x 330px
    states: default captured 2026-07-13 (12 occurrences on the AI-products page; a 684px-square variant also occurs); no pointer-state sample
    use: AI-products media wrapper (div.showcase-card-tab-card__img-wrap); not a general commerce-card template
  white-contained-cta:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#000000'
    rounded: 20px
    padding: 10px 24px 11px
    height: 40px
    typography: 14px / 700 / SamsungOneKorean
    states: default captured 2026-07-13 on four brand-identity CTAs; no pointer-state sample
    use: Brand-identity page white contained CTA (a.cta.cta--contained.cta--white), tracking -0.28px
  icon-label-cta:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 10px 0px 11px
    height: 40px
    typography: 14px / 700 / SamsungOneKorean
    states: default captured 2026-07-13 on six AI-products CTAs; no pointer-state sample
    use: AI-products black label CTA with an icon (a.cta.cta--icon.cta--label.cta--black)
  brand-lnb-link:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    padding: 0px 32px
    height: 46px
    typography: 14px / 400 / SamsungOneKorean
    states: 'default captured 2026-07-13; one link (surface-3::[data-omd-capture="20"]) has hover, pressed and focus frames at fg #555555, but no sibling link has a state frame and #555555 occurs nowhere at rest, so no state value is declared'
    use: Brand-identity page local navigation link (a.explore-lnb__link), tracking -0.28px
fonts:
  roles:
    display: Samsung Sharp Sans
    ui: SamsungOneKorean
---

# Design System Inspiration of Samsung

## Overview

### Visual Theme & Atmosphere

Samsung Electronics presents consumer devices, services, and its Galaxy ecosystem across a broad public web estate. Its Korean public commerce and AI-product pages use a quiet product frame: white or pale-gray surfaces, black typography, contained black calls to action, and large device imagery. Samsung’s official brand story frames this product work within human-driven innovation and describes its expression as bold, genuine, contemporary, and playful; the captured commerce treatment is one restrained application of that wider identity rather than a substitute for it. The official One UI system is a separate platform domain, designed for comfortable and responsive experiences across Galaxy devices. This reference therefore preserves the observed public-web grammar while keeping One UI’s documented blue and component guidance separate from web-commerce claims. [Samsung brand story](https://www.samsung.com/sec/about-us/brand-identity/brand-story/) · [One UI overview](https://developer.samsung.com/one-ui/index.html)

The supplied 2026-07-13 evidence covers a Korean homepage, an AI-products page, and the Korean brand-identity page at one desktop viewport. The homepage provides the measured contained and outlined CTA patterns; the AI page provides the product-card and selected-tab patterns; the brand-identity page is retained as an official brand/documentation surface. It does not cover checkout, sign-in, native Galaxy apps, or a general Samsung component library. A targeted live probe of the homepage on 2026-09-29 added hover, pressed and keyboard-focus readings for six controls, and they show that Samsung draws its own focus indicator, a 2px dotted black outline, on every one of them.

**Key characteristics:**
- Black `#000000` contained CTA and primary text on the captured Korean public web surfaces
- White `#ffffff` canvas and `#f7f7f7` product/search surface, with no representative box shadow
- Samsung Sharp Sans for observed display headings and SamsungOneKorean for observed Korean UI/body text
- 20px contained-CTA and AI-product media-card corners; 0px selected-tab title treatment
- One UI blue `#0381fe` is an official mobile-system token, not a substitute for the captured commerce CTA
- Keyboard focus is an authored `outline: 2px dotted #000000` on every probed control (2026-09-29), not the browser's ring
- Navigation blue `#006bea` appears only as the global-navigation hover, press and focus colour

### Primary tasks

- Browse consumer devices and services across the public site
- See what each AI product does by moving between their tabs

### Brand Narrative

Samsung’s official Korean brand story dates the company’s story to 1969 and states a purpose of creating human-driven innovations that overcome barriers for a better world. It also describes people and their concerns as central to what Samsung creates, and names values around people, excellence, change, integrity, and co-prosperity. This provides context for the consumer-device and service ecosystem; it does not prove a specific public-web token. [Samsung brand story](https://www.samsung.com/sec/about-us/brand-identity/brand-story/)

The current design expression spans more than the captured commerce pages. Samsung’s brand material treats color, typography, logo, and sound as distinct visual/experiential assets, while One UI documents a platform system for phones, tablets, wearables, earbuds, and PCs. This reference retains those domains separately so a marketplace CTA is not presented as a native One UI control. [Brand identity](https://www.samsung.com/sec/about-us/brand-identity/) · [One UI overview](https://developer.samsung.com/one-ui/index.html)

### Principles

1. **Put people and tasks first.** Samsung’s brand story and One UI guidance both center human experience and focused tasks. *UI implication:* state the action clearly and avoid decorative flow interruptions.
2. **Use a connected typographic voice.** Samsung positions SamsungOne as a localized, universal family. *UI implication:* preserve the observed SamsungOneKorean UI role; do not substitute a system face as if it were SamsungOne.
3. **Keep surface domains distinct.** The public Korean web and One UI are both official but have different evidence and component contexts. *UI implication:* use `#0381fe` only when implementing the documented One UI platform context, not as a generic Samsung-commerce action color.
4. **Retain observed component boundaries.** The 2026-07-13 capture and the 2026-09-29 probe have exact evidence for the CTA, navigation, search-trigger, product-tile, media-card, and selected-tab treatments only. *UI implication:* leave unobserved variants absent instead of filling them from a generic Samsung pattern.

### Personas

No first-party audience research suitable for named personas was collected in this packet. Do not invent demographic personas.

Samsung Korea public-web and Galaxy platform audiences may be added only with a Samsung first-party audience or product-research source.

## Colors

### Captured Korean public web surfaces
- **Primary action and foreground** (`#000000`): observed on the homepage contained CTA and across the AI-product card/title treatments.
- **Canvas** (`#ffffff`): observed homepage and product-card background.
- **Product/search surface** (`#f7f7f7`): observed on the AI page’s pressed search control and on official/commerce surface treatments.
- **Muted text** (`#707070`): repeated computed text color in the supplied capture; retain for secondary content only.
- **Border** (`#dddddd`): observed on homepage carousel-control chrome; not promoted as a universal product-card border.
- **Carousel arrow** (`#007aff`): the icon colour of the two homepage carousel arrows (`button.swiper-button-prev` / `-next`, 40px circles on `#ffffff` with a 1px `#dddddd` border), the only captured elements that carry it. No text link carries it, so it is not a link colour (corrected 2026-09-29; the key was `link`). Whether it is the Swiper library's default theme colour rather than a Samsung choice is a lead, not a finding.
- **Navigation active** (`#006bea`): global-navigation text and 2px bar on hover, press and keyboard focus. The 2026-07-13 capture shows it on the pressed frame of every sampled navigation link on all three surfaces; the 2026-09-29 probe shows it on hover, press and focus. It is never a rest colour, and it is neither the One UI blue nor the carousel-arrow blue.

### One UI documentation boundary
- **One UI primary** (`#0381fe`): Samsung’s official One UI color guidance assigns it to floating action buttons and sliders. It belongs to the platform design-system source, not to the captured Korean commerce CTA. [Color system and usage](https://developer.samsung.com/one-ui/color/system.html)

## Typography

### Evidence classes

**Official product-use and brand context.** Samsung’s design-system font page describes SamsungOne as the family that gives its products a consistent voice, with localized fonts supporting a universal Samsung experience. Samsung’s official brand-identity typography page separately identifies Samsung Sharp Sans Bold and Medium as brand type specimens. Those pages establish family and brand context; they do not turn every official face into a public-web UI token. [Samsung fonts](https://developer.samsung.com/design-system/font) · [Samsung Sharp Sans specimens](https://www.samsung.com/bd/about-us/brand-identity/color-and-typo/)

**Live computed surface-use.** The supplied capture records `SamsungOneKorean` as loaded/high with 1,297 visible uses across body, button, menu, tab, card, and heading roles, with `@font-face` sources on Samsung domains. `SamsungSharpSans` is likewise loaded/high with 76 visible heading/text uses and Samsung-hosted FontFace sources. On the AI-products page, a repeated heading is 24px/700/32px Samsung Sharp Sans; a repeated product-card body is approximately 16px/400/21.2798px SamsungOneKorean. The homepage contained CTA is 14px/700/19px SamsungOneKorean.

**Official distributed brand asset / license boundary.** Samsung Design publishes SamsungOne specimens and a PDF download, but the first-party sources reviewed here do not provide a transferable public font-license grant. Keep official specimen and history material as context; do not infer permission to redistribute the webfont files or substitute a system font. [SamsungOne](https://design.samsung.com/global/contents/samsungone/index.html)

**Declared-only.** The artifact found Samsung Korea Sans, SamsungOne, SamsungSharpGraphic, SamsungSSBody, SamsungSSHead, Samsung Sharp Sans mixed/normal, NanumBarunBold, and several icon faces declared with `@font-face` but without visible computed use. They remain declared assets, not UI-family tokens.

**System/unresolved.** Dotum, Apple SD Gothic Neo, Arial, and `sans-serif` occur only as fallbacks in the captured computed stacks. No runtime availability authorizes their use as Samsung substitutes. Additional locales, native One UI font behavior, and all uncaptured pages remain unresolved.

## Layout

The one captured desktop viewport repeatedly exposes 12px navigation insets, 24px horizontal CTA padding, and a 32px product-card text inset. Treat these as local, observed spacing values rather than a complete Samsung grid scale. The capture does not compare breakpoints, measure a checkout layout, or establish a universal product-listing grid.

### Responsive Behavior

No viewport comparison was included in the supplied artifact. The values above describe the captured desktop surfaces only; no Samsung-specific mobile navigation, grid collapse, touch target, or breakpoint geometry is asserted.

## Elevation & Depth

Representative contained CTAs, AI-product cards, tabs, and menu structures in the artifact report `box-shadow: none`. Hierarchy in these observed surfaces comes from product imagery, white versus `#f7f7f7` planes, typography, and borders. No modal, tooltip, or floating-panel elevation is claimed.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.flat`: `none`

## Motion & Easing

The artifact records state and interaction kinds, not timing curves or transition durations. One UI documentation includes a separate motion section, but no motion token is promoted here without a matching captured surface/value. Preserve reduced-motion and accessibility requirements in an implementation without presenting them as measured Samsung commerce motion.

The 2026-09-29 probe read the computed transitions of six homepage controls: the outlined CTA animates `background-color, border-color, color` over 0.2s linear, the search trigger animates `border-color` over 0.5s `cubic-bezier(0.35, 0, 0.36, 1)`, and the other four switch instantly (`transition: all 0s`). These are observed values, not a motion token.

## Components

### Homepage calls to action

**Contained CTA — Korean homepage**
- Background: `#000000`
- Text: `#ffffff`
- Border: 1px solid `#000000`
- Radius: 20px
- Padding: 10px 24px 9px
- Height: 40px
- Font: 14px / 700 / SamsungOneKorean
- Use: `home::[data-omd-capture="26"]`, class `cta cta-ntrns-fild`; 36 occurrences on the captured homepage.
- Pointer states: on 2026-09-29 hover and pressed both matched (`:hover`, `:active`) and the fill, border and label stayed as at rest (`transition: all 0s`): the black pill does not respond to the pointer. The probed instance sits in a product tile's 구매하기 row, which stays at opacity 0 until the tile is hovered, pressed or focused; that reveal belongs to the tile (see Product tile).
- Focus: authored `outline: 2px dotted #000000`, 0px offset (keyboard Tab, `:focus-visible` matched, 2026-09-29).

**Outlined CTA — Korean homepage**
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 20px
- Padding: 10px 24px 9px
- Height: 40px
- Font: 14px / 700 / SamsungOneKorean
- Use: `home::[data-omd-capture="20"]`, class `cta cta-outl`; six homepage occurrences. Its computed background is transparent, so no white fill is asserted.
- Hover and pressed: the button inverts to bg `#000000` and fg `#ffffff` over `background-color, border-color, color 0.2s linear` (2026-09-29, `:hover` and `:active` matched).
- Focus: authored `outline: 2px dotted #000000`, 0px offset; the fill stays transparent.

**Underlined text CTA — Korean homepage**
- Text: `#000000`, 14px / 700 / SamsungOneKorean
- Underline: a 1px `#000000` `::after` bar, not `text-decoration`
- Padding: 0 0 2px; height 21px
- Pressed: fg `rgba(0, 0, 0, 0.7)` while the bar stays `#000000` (the 2026-07-13 capture and the 2026-09-29 probe agree)
- Hover: on 2026-09-29 `:hover` matched and every compared property stayed as at rest
- Focus: authored `outline: 2px dotted #000000`, 1px offset
- Use: `home::[data-omd-capture="23"]`, class `cta cta-undr` (더 알아보기)

**Product tile — Korean homepage**
- Size: a 342 × 342px link (`a.clickable`); title `h2` in `#000000`, 24px / 700
- Hover, pressed and keyboard focus: the tile image scales to 1.05 and the tile's 구매하기 row (`div.cta-line`, 366 × 40px) fades in from opacity 0 to 1; nothing recolours. The contained CTA in that row is invisible until the tile is hovered or focused (2026-09-29)
- Focus: also draws the authored `outline: 2px dotted #000000`, 1px offset
- Use: `home::[data-omd-capture="25"]`, `"27"` and `"29"`

### Header

**Global navigation link**
- Background: transparent
- Text: `#000000`, 16px / 700 / SamsungOneKorean
- Padding: 14px 12px; height 47px
- Hover and pressed: fg `#006bea` and a 2px `#006bea` bar drawn by `::before` (opacity 0 to 1); they also open the white mega-menu panel, drawn by the menu list's `::after` (from 1440 × 0 at opacity 0 to 1440 × 406px at opacity 1)
- Focus: the same blue text and bar plus the authored `outline: 2px dotted #000000`, 1px offset; keyboard focus does not open the mega-menu panel. The blue stayed after focus moved to the next item, probably a script-applied current-item state; recorded as a lead.
- Use: `a.nv00-gnb-v4__l0-menu-link` (e.g. 모바일). The 2026-07-13 capture shows the pressed blue on every sampled link of all three surfaces, including the 14px / 700 utility row with 4px 8px padding.

**Search trigger**
- Rest with the header scrolled: bg `#f7f7f7`, border 1px solid `#f7f7f7`, radius 40px, 36 × 36px, padding 9px; the keyword text inside reads `#757575`
- Rest at the homepage page top: bg `rgba(247, 247, 247, 0.3)`, border 1px solid `rgba(0, 0, 0, 0.2)`
- Hover and pressed (scrolled header, 2026-09-29): bg `rgba(247, 247, 247, 0.3)`, border 1px `rgba(0, 0, 0, 0.3)`, keyword text `#000000`; `transition: border-color 0.5s cubic-bezier(0.35, 0, 0.36, 1)`
- Focus: authored `outline: 2px dotted #000000`, 0px offset
- Boundary: the 2026-07-13 pressed frames on the AI-products and brand-identity pages kept `#f7f7f7`; the search input opens in a fixed layer behind a click and was not measured

### AI-product content

**Product media card — AI products**
- Background: `#ffffff`
- Radius: 20px
- Use: `surface-2::div`, class `showcase-card-tab-card__img-wrap`; a 330px-square observed media wrapper. The surrounding card is not asserted as a universal commerce-card pattern.

**Selected product tab title — AI products**
- Text: `#000000`
- Radius: 0px
- Padding: 4px 0px
- Font: 18px / 700 / SamsungOneKorean
- Use: `surface-2::[data-omd-capture="25"]`, class `tab__item-title`.
- Selected: `selected` and `tab-selected` were observed by three collector tab interactions. No selected underline, panel geometry, or unmeasured color is inferred.

**Icon label CTA — AI products**
- Background: transparent
- Text: `#000000`, 14px / 700 / SamsungOneKorean
- Radius: 0px; padding 10px 0 11px; height 40px
- Use: `surface-2::[data-omd-capture="46"]`, class `cta cta--icon cta--label cta--black`; six occurrences; default only

### Brand-identity page

**White contained CTA**
- Background: `#ffffff`
- Text: `#000000`, 14px / 700 / SamsungOneKorean, tracking -0.28px
- Radius: 20px; padding 10px 24px 11px; height 40px; no border
- Use: `surface-3::[data-omd-capture="28"]`, class `cta cta--contained cta--white`; four occurrences; default only

**Local navigation link**
- Text: `#000000`, 14px / 400 / SamsungOneKorean, tracking -0.28px
- Padding: 0 32px; height 46px
- Use: `a.explore-lnb__link`. One link has hover, pressed and focus frames at `#555555` in the 2026-07-13 capture, but no sibling has any and `#555555` appears nowhere at rest, so no state is declared.

### Observed state boundaries

The 2026-07-13 capture records the pressed underlined CTA and pressed global-navigation links on the homepage, pressed search controls on the AI and brand-identity surfaces, disabled carousel arrows on the homepage, three selected-tab interactions on the AI-products surface, and an expanded/menu-open brand-identity menu. The 2026-09-29 homepage probe (real pointer hover, mouse-down and a keyboard Tab walk, each confirmed by `:hover`, `:active` or `:focus-visible`) measured six controls: the contained, outlined and underlined CTAs, the navigation link, the search trigger and the product tile. **Keyboard focus is authored on all six: `outline: 2px dotted #000000`**, at 0px offset on the two CTA buttons and the search trigger and 1px on the text link, the navigation link and the tile. No error, dialog, toast, or checkout state is asserted.

---
**Verified:** 2026-07-13 · states re-measured 2026-09-29 (live homepage probe)
**Tier 1 sources:** https://www.samsung.com/sec/, https://www.samsung.com/sec/ai-products/, https://www.samsung.com/sec/about-us/brand-identity/, https://developer.samsung.com/one-ui/color/system.html, https://developer.samsung.com/design-system/font
**Tier 2 sources:** https://getdesign.md/samsung and https://styles.refero.design/?q=samsung were both attempted through built-in web retrieval; both returned an internal error, so neither supplied a value or an absence determination.
**Resolution note:** The prior universal e-commerce filter/input/card/shadow/state rules were removed because this packet did not observe their matching current component provenance. One UI blue remains documentation-only rather than a commerce CTA token.
**Conflicts unresolved:** none

### Published component roster (8 published, none measured here)

Samsung's One UI design guidance publishes **8 components**, read from its own navigation at
`https://developer.samsung.com/one-ui/` on 2026-09-19 — the pages filed under `comp/`:

App bar, Bottom bar, Bottom navigation, Buttons, Dialog, Lists, Search, Toasts

Eight is the real number and not a shortfall in the reading. One UI's published guidance is
mostly foundations rather than a component library: the same navigation carries structure,
layout, colour, iconography, motion, sound and haptics, writing, accessibility, and large-screen
and foldable guidance, and only these eight pages document components.

### What this reference measured

§4 carries eleven measured components from the Samsung Korea web: homepage CTAs, navigation,
search trigger and product tiles; AI-products tabs, CTAs and media wrappers; brand-identity CTAs
and navigation. Their classes (`tab__item-title`, `cta-outl`, `nv00-gnb-v4__l0-menu-link` and so
on) are samsung.com's own, not One UI component classes. The `one-ui-` strings elsewhere in this
file are a source id and a token name, not classes on a capture. None of the eight One UI
components above carries a measured value here. (Corrected 2026-09-29: this paragraph said the
tab was captured on a Samsung developer page; it was captured on `https://www.samsung.com/sec/ai-products/`.)

### States

| State | Captured evidence boundary |
|---|---|
| Selected tab | AI-products `tab__item-title` records `selected` and `tab-selected`; color/padding/type are retained in §4. |
| Keyboard focus | Authored `outline: 2px dotted #000000` on all six controls probed on 2026-09-29 (0px offset on the CTA buttons and the search trigger, 1px on the links and the tile); the navigation link also turns `#006bea`, and the product tile also fades in its 구매하기 row. |
| Hover / pressed | The outlined CTA inverts to `#000000` / `#ffffff`; the navigation link turns `#006bea` with a 2px bar and opens the white mega-menu panel; the search trigger turns bg `rgba(247, 247, 247, 0.3)` with a 1px `rgba(0, 0, 0, 0.3)` border; the product-tile image scales to 1.05 and its 구매하기 row fades in (opacity 0 → 1); the contained CTA itself does not respond. |
| Pressed text CTA | The underlined CTA goes to fg `rgba(0, 0, 0, 0.7)` (2026-07-13 and 2026-09-29); hover leaves it at rest. |
| Pressed search control | AI-products and brand-identity search controls record `pressed` in 2026-07-13 frames that kept `#f7f7f7`; no pressed value is asserted for those pages. |
| Disabled carousel arrow | Homepage carousel arrows record `disabled`; no opacity or disabled-button rule is asserted. |
| Expanded menu | Brand-identity navigation records `expanded` / `menu-open`; panel geometry and shadow were not promoted. |

No current capture evidence supports universal loading, empty, form-error, success, skeleton, or modal-state rules.

## Do's and Don'ts

### Do
- Use the contained homepage CTA only with the measured black/white, 20px-corner, 40px-high treatment.
- Keep SamsungOneKorean and Samsung Sharp Sans tied to their recorded live-use roles and loaded FontFace evidence.
- Treat the AI-product selected tab as its own 18px/700, 0px-radius pattern with the observed selected state.
- Keep One UI documentation values visibly separate from Korean public-commerce measurements.
- Draw keyboard focus the way the site does: a 2px dotted `#000000` outline, not the browser's ring.

### Don't
- Do not promote declared-only faces or system fallbacks as loaded Samsung UI fonts.
- Do not apply One UI `#0381fe` as a replacement for the captured black public-web CTA.
- Do not infer a product-card shadow, checkout field, generic filter control, or error state from unobserved variants.
- Do not treat the brand-identity documentation page as native Galaxy-app evidence.
- Do not use navigation blue `#006bea` as a rest or fill colour; it marks hover, press and focus on navigation only.

## Voice & Tone

Samsung’s official brand story calls its expression bold, genuine, contemporary, and playful. On the captured Korean public surfaces, that broader tone becomes direct category and action language rather than a claim about every channel or locale. Use concise, specific labels that name the product or action; do not invent marketing superlatives, price claims, or product benefits. [Samsung brand story](https://www.samsung.com/sec/about-us/brand-identity/brand-story/)

## Agent Prompt Guide

### Quick reference
- Homepage contained CTA: `#000000` background, `#ffffff` text, 1px black border, 20px radius, 10px 24px 9px padding, 40px height, SamsungOneKorean 14px/700.
- AI-product selected tab: black 18px/700 SamsungOneKorean text, 4px 0px padding, sharp corners; selected/tab-selected is observed.
- AI-product media wrapper: white, 20px radius, no observed shadow.
- Outlined CTA: transparent, 1px black border, 20px radius; hover and press invert it to black with white text.
- Keyboard focus: `outline: 2px dotted #000000` on CTAs, navigation and tiles.

### Boundary-aware prompt
- "Create a Korean public-web CTA using Samsung’s captured homepage treatment: black background, white text, 20px radius, 40px height, 10px 24px 9px padding, and SamsungOneKorean 14px/700. Do not use One UI blue. The contained CTA does not change on hover; draw keyboard focus as a 2px dotted black outline."

## Governance

### Known Gaps

- **Contrast, `outlined-cta`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `underlined-cta`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `gnb-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `product-tile`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `icon-label-cta`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `brand-lnb-link`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
