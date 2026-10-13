---
name: Ohouse
colors:
  action: '#00a1ff'
  foreground: '#2f3438'
  body: '#424242'
  muted: '#828c94'
  canvas: '#ffffff'
  hairline: '#e0e0e0'
typography:
  display:
    fontSize: 30px
    fontWeight: 400
    lineHeight: 30
    letterSpacing: '-0.3px'
    use: Observed h1 on the consumer home
  body:
    fontSize: 15px
    fontWeight: 400
    lineHeight: 15
    letterSpacing: '-0.3px'
    use: Observed list, card, and text content on the consumer home
  body-lg:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24
    letterSpacing: '-0.3px'
    use: Observed body content on the consumer home
  action:
    fontSize: 16px
    fontWeight: 700
    lineHeight: 20
    letterSpacing: '-0.3px'
    use: Observed text action on the consumer home
  compact-action:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 18
    letterSpacing: '-0.3px'
    use: Observed compact blue action
rounded:
  square: 0px
  sm: 4px
  full: 24px
spacing:
  xs: 6
  sm: 12
  md: 16
  lg: 20
components:
  product-list-article:
    type: card
    backgroundColor: transparent
    textColor: '#424242'
    rounded: 0px
    padding: 0px
    typography: 15px / 400 / Pretendard Variable
    hover: no change in the compared scope (the overlay link a.today-deal-item__overlay, its ::before/::after, 0 descendants, 3 ancestor levels; the card image and text are siblings of the link and were not compared) — measured 2026-09-29
    pressed: no change in the compared scope (same scope as hover) — measured 2026-09-29
    focus: 'shadow #69c3fd 0 0 0 4px ring and radius 0px → 2px on the overlay link (authored, no outline) — measured 2026-09-29'
    states: default captured 2026-07-13 on the outer article; hover, pressed and keyboard focus measured 2026-09-29 on the empty overlay link inside the first today-deal card (269px x 404px, Tab 88)
    use: Observed outer product-list article shell on the consumer home
  compact-blue-action:
    type: button
    backgroundColor: '#00a1ff'
    textColor: '#ffffff'
    rounded: 4px
    padding: 0px 16px
    size: 91px x 40px
    typography: 14px / 400 / Pretendard Variable
    hover: 'bg #0497ef'
    pressed: 'bg #0497ef'
    focus: 'shadow #ddf3ff 0 0 0 3px (authored ring, no outline); bg #0497ef — measured 2026-09-29'
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 글쓰기 (Tab 14), logged out and never activated; hover equals pressed
    use: Header 글쓰기 action at home::[data-omd-capture="9"]; one captured occurrence
  circular-floating-control:
    type: button
    backgroundColor: '#ffffff'
    textColor: '#ffffff'
    rounded: 24px
    padding: 0px
    size: 48px x 48px
    typography: 16px / 700 / Pretendard Variable
    shadow: 0px 2px 5px rgba(63, 71, 77, 0.15)
    hover: 'bg #f7f9fa'
    pressed: 'bg #f7f9fa'
    focus: 'bg #f7f9fa (background tint only, no ring or outline) — measured 2026-09-29'
    states: default captured 2026-07-13 (seven occurrences, no text content); hover, pressed and keyboard focus measured 2026-09-29 on the first 집사진 carousel 다음 arrow (Tab 59); focus equals hover
    use: Circular carousel arrow at home::[data-omd-capture="20"]
  outlined-utility-control:
    type: button
    backgroundColor: transparent
    textColor: '#2f3438'
    border: '1px solid #e0e0e0'
    rounded: 4px
    padding: 0px 8px
    size: 182px x 32px
    typography: 14px / 400 / Pretendard Variable
    states: default captured 2026-07-13 only (an 80px link at capture 128 shares the class); absent from the home page on 2026-09-29 at 1440x1000, so no state was measured
    use: Utility control near the foot of home at home::[data-omd-capture="127"]
  text-action:
    type: button
    backgroundColor: transparent
    textColor: '#00a1ff'
    rounded: 0px
    padding: 0px
    size: 41px x 20px
    typography: 16px / 700 / Pretendard Variable
    hover: opacity 1 → 0.5
    pressed: opacity 1 → 0.5
    focus: no focus indication in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    states: default captured 2026-07-13 (six occurrences); hover, pressed and keyboard focus measured 2026-09-29 on the first 더보기 (Tab 37); the label is the button itself
    use: Blue 더보기 text action at home::[data-omd-capture="32"]
  top-nav-search-input:
    type: input
    backgroundColor: transparent
    textColor: '#141414'
    rounded: 0px
    padding: 0px
    size: 255px x 20px
    typography: 14px / 400 / Pretendard Variable
    hover: no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    pressed: no change in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    focus: no focus indication in the compared scope (self, its ::before/::after, 0 descendants, 3 ancestor levels) — measured 2026-09-29
    states: default captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 통합검색 (Tab 9); nothing was typed; any search dropdown lies outside the compared scope
    use: Header 통합검색 input at home::[data-omd-capture="4"]
  primary-nav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#2f3438'
    rounded: 0px
    padding: 21px 5px
    size: 41px x 60px
    typography: 18px / 700 / Pretendard Variable
    selected: 'fg #00a1ff (the current section, 집구경)'
    hover: 'fg #00a1ff'
    pressed: 'fg #00a1ff'
    focus: 'fg #00a1ff; shadow #ddf3ff 0 0 0 3px on the label span (authored ring, no outline) — measured 2026-09-29'
    states: default and selected captured 2026-07-13; hover, pressed and keyboard focus measured 2026-09-29 on 쇼핑 (Tab 7), label span.css-1w2ex0u; hover equals pressed
    use: Header section link (집구경, 쇼핑, 인테리어/생활) at home::[data-omd-capture="1"] to [data-omd-capture="3"]
  header-subnav-link:
    type: tab
    backgroundColor: transparent
    textColor: '#424242'
    rounded: 0px
    padding: 12px 6px
    height: 51px
    typography: 15px / 400 / Pretendard Variable
    states: default captured 2026-07-13 on six links; not probed
    use: Second header row of text links at home::[data-omd-capture="10"] to [data-omd-capture="15"]
  header-utility-link:
    type: tab
    backgroundColor: transparent
    textColor: '#2f3438'
    rounded: 0px
    padding: 0px 10px
    height: 18px
    typography: 14px / 400 / Pretendard Variable
    states: 'default captured 2026-07-13; 회원가입 and 고객센터 carry a 1px #eaedef left border that divides the three; not probed'
    use: Header 로그인 / 회원가입 / 고객센터 links at home::[data-omd-capture="6"] to [data-omd-capture="8"]
  scrap-toggle:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0px
    size: 36px x 36px
    states: default captured 2026-07-13 (14 occurrences, no text node; the icon is an SVG whose paint was not captured); not probed
    use: Scrap toggle on home content cards at home::[data-omd-capture="33"]
fonts:
  roles:
    ui: Pretendard Variable
---

# Design System Inspiration of Ohouse (오늘의집)

## Overview

### Visual Theme & Atmosphere

Ohouse is Bucketplace’s lifestyle service for taking an envisioned life into a real space. Its official account joins user-made home content, a community, commerce, and home-related O2O services; the consumer site snapshot shows the corresponding product expression: image-led commerce and a relatively quiet text-and-control layer. The captured desktop home uses a white canvas, dark neutral copy, a bright blue action color, and compact controls rather than a published visual system. The current corporate story also extends the service beyond online discovery to purchase, installation, offline showrooms, and renovation consultation. This reference therefore records a live product snapshot rather than treating the corporate site or a historic app icon as a token export. ([Bucketplace About](https://www.bucketplace.com/en/))

**Evidence boundary.** Three consumer URLs were captured, but only the home yielded a populated UI tree; `/experts` and `/customer_center` are recorded as product-surface attempts, not a basis for generalising their chrome. No official public design-system or brand-token export was found in this run.

**Observed characteristics:**

- White `#ffffff` control surfaces and dark `#424242` / `#2f3438` body text dominate the populated home capture.
- `#00a1ff` appears as a compact filled action and as a text-action color; it is an observed action role, not an asserted immutable brand color.
- The loaded UI face is `Pretendard Variable`; the home’s computed stack includes declared fallbacks but only the first family is loaded and visibly used.
- The representative product-list articles are visually unframed at their outer element: transparent background, zero radius, and zero padding. Their child composition was not separately measured.
- Captured radii are mostly `0px`, with observed `4px` utility/action corners and a `24px` circular control.
- Keyboard focus is drawn with box-shadow, never an outline (2026-09-29 probe): a 3px `#ddf3ff` ring on the 글쓰기 action and the header section label, a 4px `#69c3fd` ring on the deal card. Hover and press are one-property steps, identical to each other.

### Primary tasks

- Browse real homes other people have posted for ideas
- Buy products for a space and have them delivered
- Arrange a home service such as remodeling, moving, or cleaning
- Connect with other people through the home community

### Brand Narrative

Bucketplace was incorporated in 2014 and launched Ohouse Store in 2016. Its current first-party account frames Ohouse as an integrated lifestyle service: people encounter real-user content, connect through a community, discover products, and can continue into home-remodeling, moving, cleaning, installation, and consultation services. The company’s own timeline records expansion from the store to O2O remodeling, its original brand Ohouse layer, the Ohouse Bukchon showroom, Ohouse Kitchen, and the Ohouse Interior Pangyo Lounge. ([Bucketplace About](https://www.bucketplace.com/en/))

The visual reference should therefore keep its claims at two distinct levels: the product snapshot above is live consumer-web evidence, while the service arc and mission are corporate context. The corporate presentation does not publish a corresponding public component library, token set, or interaction specification.

### Principles

1. **Connect inspiration to action.** Ohouse says it connects inspiring user content and community to commerce so people can bring ideas to life. *UI implication:* Preserve the relationship between discovered content and the next practical action; do not claim a particular card or interaction pattern unless observed. ([About](https://www.bucketplace.com/en/))
2. **Serve the whole space journey.** The official service description includes purchase, installation, renovation, moving, cleaning, and consultation. *UI implication:* Treat these as distinct service contexts rather than collapsing them into an unsupported marketplace-only UI. ([About](https://www.bucketplace.com/en/))
3. **Aim for a meaningful customer change.** The team-culture page defines the “O! Moment” as a positive, meaningful change in a customer’s life. *UI implication:* This is a product principle, not evidence for a specific color, animation, or copy treatment. ([Team culture](https://www.bucketplace.com/en/team-culture/))

### Personas

The first-party material identifies stakeholder groups rather than individual user personas:

- **People sharing a home or everyday-life story:** official user content is described as a source of inspiration for others.
- **People discovering and purchasing products for a space:** commerce is described as connecting product discovery, shopping, and delivery.
- **People undertaking a space-related service:** official scope includes remodeling, moving, cleaning, installation, and consultation.

No age, location, frequency, preference, or conversion behavior is assigned to these groups without product research.

## Colors

The values below are representative computed values from the populated consumer-home capture. They are not a public Ohouse palette and should not be expanded into semantic states without new evidence.

### Observed action and surfaces

- **Action blue** (`#00a1ff`): Filled compact action background; text-action and border color on separate home controls.
- **Canvas white** (`#ffffff`): Filled compact action text and circular control background.
- **Foreground** (`#2f3438`): Outlined utility-control text.
- **Body neutral** (`#424242`): Repeated list, card, badge, and text color.
- **Muted neutral** (`#828c94`): Repeated text color in the home capture.
- **Hairline** (`#e0e0e0`): Observed 1px outline on a utility control.

### Unresolved roles

- No published sale, error, success, disabled, or overlay color was collected.
- Hover, pressed and keyboard focus were measured on 2026-09-29 and are recorded per component in §4, not promoted as palette roles: `#0497ef` (글쓰기 hover, press and focus), `#f7f9fa` (carousel-arrow hover, press and focus), and two box-shadow focus rings, `#ddf3ff` (3px) and `#69c3fd` (4px). The current header section rests in `#00a1ff`, the value the other section links take on hover.
- `#35c5f0` is not retained as a current token: it was not present in the supplied computed-style evidence, and no first-party token source was found.

## Typography

### Font evidence classes

- **Live computed and loaded product UI:** `Pretendard Variable`. It is the first computed family on 286 captured home elements across headings, body text, cards, buttons, badges, and input; the collector also matched it in `document.fonts` and recorded 92 Ohouse-hosted dynamic-subset sources under `assets.ohou.se`.
- **Official font distribution and license:** Pretendard’s maintainer documents `Pretendard Variable` dynamic subsets and its SIL Open Font License 1.1 terms. This is font-project evidence, not an assertion that Ohouse commissioned or owns the face. ([Pretendard documentation](https://github.com/orioncactus/pretendard/blob/main/packages/pretendard/docs/en/README.md), [license](https://github.com/orioncactus/pretendard/blob/main/LICENSE))
- **Declared-only fallbacks/assets:** `Noto Sans KR`, `Open Sans`, `FontAwesome`, and `OhouseIcon` have `@font-face` declarations but no visible matched usage in the capture. They are not UI-family tokens.
- **Unresolved:** `Times` appeared on two text elements without a matching loaded FontFace or system mapping; it is not a UI-family token.

### Observed hierarchy

| Role | Family | Size | Weight | Line height | Tracking | Capture scope |
|------|--------|------|--------|-------------|----------|---------------|
| Home h1 | Pretendard Variable | 30px | 400 | 30px | -0.3px | 10 elements, home |
| Body/list/card | Pretendard Variable | 15px | 400 | 15px | -0.3px | 113 combined elements, home |
| Body large | Pretendard Variable | 16px | 400 | 24px | -0.3px | 7 elements, home |
| Body large emphasis | Pretendard Variable | 16px | 700 | 24px | -0.3px | 7 elements, home |
| Text action | Pretendard Variable | 16px | 700 | 20px | -0.3px | 6 elements, home |
| Compact action | Pretendard Variable | 14px | 400 | 18px | -0.3px | 1 element, home |

## Layout

The populated home capture provides spacing clusters rather than a documented layout scale: 6px (39 occurrences), 12px (27), 20px (24), 5px (13), and 9px (11). The representative content articles are 269px wide in this 1440×900 desktop capture. No mobile, breakpoint, container, grid, or global-gutter rule is asserted from these data.

### Responsive Behavior

No responsive sweep was included in the supplied collector evidence. The only measured viewport is 1440×900; responsive behavior is unresolved.

## Elevation & Depth

One repeated floating-control shadow was observed: `0px 2px 5px rgba(63, 71, 77, 0.15)`. The outer product-list article has no shadow. No elevation scale, modal shadow, or hover-lift rule was captured. Keyboard focus rings are box-shadows too (`#ddf3ff` 3px, `#69c3fd` 4px); they are recorded per component, not as an elevation level.

### Values kept in prose

Measured values the DESIGN.md token grammar cannot carry, kept verbatim:

- `shadow.floating`: `0 2px 5px rgba(63, 71, 77, 0.15)`

## Motion & Easing

No timing, easing, reduced-motion behavior, or animated-state evidence was collected. On 2026-09-29 none of the six probed controls declared a transition on the element itself. Motion guidance is unresolved.

---

**Verified:** 2026-07-13
**Tier 1 sources:** `https://ohou.se/` (populated consumer product surface, supplied collector); `https://ohou.se/experts` and `https://ohou.se/customer_center` (product-surface attempts, no populated UI tree); `https://www.bucketplace.com/en/` (official company/service context); `https://www.bucketplace.com/en/team-culture/` (official principles/culture); `https://github.com/orioncactus/pretendard/` (official font documentation and license).
**Tier 2 sources:** `https://getdesign.md/ohouse` and `https://styles.refero.design/?q=ohouse` were both attempted on 2026-07-13; the built-in fetch returned an internal error for each, so neither supplied a cross-check record.
The earlier `#35c5f0` and inferred semantic, state, layout, and motion claims were resolved by removing them because the supplied evidence did not corroborate them.

**Conflicts unresolved:** none

## Components

These are the representative controls preserved by the July collector, plus the header links. Rest values are the July 2026-07-13 capture unless marked. Hover, pressed and keyboard focus were measured on 2026-09-29 with the fixed live state probe (logged out, keyboard walk first, nothing activated); "no change" means no computed change across the control, its ::before/::after, every descendant and 3 ancestor levels, and nothing wider.

### Buttons

**Compact blue action**
- Background: `#00a1ff`
- Text: `#ffffff`
- Border: `0px`
- Radius: `4px`
- Padding: `0px 16px`
- Font: `14px / 400 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="9"]`, `button[role="button"]`, 91×40px; one captured occurrence.
- Hover and pressed: background `#0497ef`.
- Keyboard focus: background `#0497ef` plus a 3px `#ddf3ff` box-shadow ring; no outline.

**Circular floating control**
- Background: `#ffffff`
- Text: `#ffffff`
- Border: `0px`
- Radius: `24px`
- Padding: `0px`
- Shadow: `0px 2px 5px rgba(63, 71, 77, 0.15)`
- Font: `16px / 700 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="20"]`, `button`, 48×48px; seven captured occurrences. The captured control has no text content.
- Hover, pressed and keyboard focus: background `#f7f9fa` only; focus draws no ring.

**Outlined utility control**
- Background: `transparent`
- Text: `#2f3438`
- Border: `1px solid #e0e0e0`
- Radius: `4px`
- Padding: `0px 8px`
- Font: `14px / 400 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="127"]`, `button`, 182×32px; the 80×32px link at `[data-omd-capture="128"]` shares its class and values.
- Not on the home page on 2026-09-29 (1440×1000): no surveyed element had its size or a `#e0e0e0` border. These are July values; no state was measured.

**Text action**
- Background: `transparent`
- Text: `#00a1ff`
- Border: `0px`
- Radius: `0px`
- Font: `16px / 700 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="32"]`, `button`, 41×20px; six captured occurrences.
- Hover and pressed: opacity 1 → 0.5.
- Keyboard focus: no change within scope (0 descendants). It has no focus indication.

### Inputs

**Top-navigation text input**
- Background: `transparent`
- Text: `#141414`
- Border: `0px`
- Radius: `0px`
- Font: `14px / 400 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="4"]`, `input[type="text"]`, 255×20px; one captured occurrence.
- Hover, pressed and keyboard focus: no change within scope (0 descendants). No focus indication; a search dropdown, if one opens, is outside the scope.

### Content shells

**Product-list article shell**
- Background: `transparent`
- Text: `#424242`
- Border: `0px`
- Radius: `0px`
- Padding: `0px`
- Font: `15px / 400 / Pretendard Variable`
- Use: Home `home::article.today-deal-item`, representative 269px-wide articles; 4+ captured occurrences. This describes the outer article only, not unmeasured child image, price, badge, or metadata styles.
- States (2026-09-29, on the empty overlay link `a.today-deal-item__overlay` inside the first card, 269×404px): hover and pressed, no change within scope; keyboard focus, a 4px `#69c3fd` box-shadow ring and a 2px radius. The card image, price and title are siblings of that link, outside the scope, so a hover change on them is not ruled out.

### Header navigation

**Primary section link** (집구경, 쇼핑, 인테리어/생활)
- Background: transparent
- Text: `#2f3438`; the current section (집구경) rests in `#00a1ff`
- Radius: `0px`
- Padding: `21px 5px`
- Font: `18px / 700 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="1"]` to `[data-omd-capture="3"]`, 41×60px on 쇼핑.
- Hover and pressed (measured on 쇼핑): text `#00a1ff`.
- Keyboard focus: text `#00a1ff` and a 3px `#ddf3ff` box-shadow ring on the label span; no outline.

**Second-row link**
- Background: transparent
- Text: `#424242`
- Padding: `12px 6px`, 51px tall
- Font: `15px / 400 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="10"]` to `[data-omd-capture="15"]`, six links. Default only; not probed.

**Utility link** (로그인 / 회원가입 / 고객센터)
- Background: transparent
- Text: `#2f3438`
- Padding: `0px 10px`, 18px tall
- Font: `14px / 400 / Pretendard Variable`
- Use: Home `home::[data-omd-capture="6"]` to `[data-omd-capture="8"]`; 회원가입 and 고객센터 carry a 1px `#eaedef` left border that divides the three. Default only; not probed.

### Card controls

**Scrap toggle**
- Background: transparent; computed text `#000000` (the icon is an SVG whose paint was not captured)
- Radius: `0px`; padding `0px`; 36×36px
- Use: Home `home::[data-omd-capture="33"]`, 14 captured occurrences. Default only; not probed.

### Not observed

- No disabled, validation, dialog, menu, toast, or responsive component state was captured. Hover, pressed and keyboard focus are recorded on each component above (2026-09-29); the second-row links, utility links, scrap toggle and outlined utility control were not probed.
- Badge class names were present, but a standalone badge fill/text treatment was not measured with sufficient provenance; no badge variant is specified.

### States

The July collector recorded no interaction expansions or state transitions (`interactionKinds: 0`, `interactionCount: 0`). The 2026-09-29 live state probe then measured hover, pressed and keyboard focus on six home controls. Hover equals pressed on every one: 글쓰기 `#00a1ff` → `#0497ef`; the carousel arrow `#ffffff` → `#f7f9fa`; 더보기 opacity 1 → 0.5; 쇼핑 `#2f3438` → `#00a1ff`; no change within scope on the search input and the deal-card link. Keyboard focus is a box-shadow ring — `#ddf3ff` 3px on 글쓰기 and the 쇼핑 label, `#69c3fd` 4px on the deal card — or a background tint on the carousel arrow, and nothing within scope on 더보기 and the search input. Empty, loading, error, success, disabled, and validation treatments remain unresolved and are intentionally omitted rather than reconstructed from generic commerce patterns.

## Do's and Don'ts

### Do

- Keep the observed action blue (`#00a1ff`) scoped to action treatments unless new product evidence establishes broader use.
- Use `Pretendard Variable` only when its supplied Ohouse-hosted product source can be loaded; do not silently substitute it.
- Preserve the measured outer-card boundary when adapting the home product-list article: transparent, square, and padding-free.

### Don't

- Don't resurrect `#35c5f0` as a current Ohouse token from historic or secondary descriptions.
- Don't convert declared-only font faces into visible UI-family claims.
- Don't invent disabled, error or validation variants, badge treatments, price styles, or mobile chrome from the static home capture.
- Don't add an outline focus ring: the measured controls draw focus with box-shadow, and two of them (더보기, the search input) show none within scope.

## Voice & Tone

Bucketplace describes Ohouse in practical, aspirational language: it helps people make the everyday life they envision real within a space, through content, community, commerce, and related services. The official team-culture page pairs that customer outcome with “Customer’s O! Moment,” growth, excellence, and long-term ownership. These are company statements; they do not establish UI microcopy samples or a formal content-style guide. ([About](https://www.bucketplace.com/en/), [Team culture](https://www.bucketplace.com/en/team-culture/))

## Agent Prompt Guide

Use a prompt bounded to the evidence, for example: “Create a desktop Ohouse-inspired home-section control using `Pretendard Variable`, white canvas, `#424242` body text, and one 91×40px `#00a1ff` action with 4px radius. Hover and press turn it `#0497ef`; keyboard focus adds a 3px `#ddf3ff` ring. Do not infer mobile behavior.” Do not request a complete Ohouse design system from this snapshot.

## Governance

### Known Gaps

- **Contrast, `product-list-article`.** Text `#424242` on `#00000000` measures 2.09:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `compact-blue-action`.** Text `#ffffff` on `#00a1ff` measures 2.78:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `circular-floating-control`.** Text `#ffffff` on `#ffffff` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `outlined-utility-control`.** Text `#2f3438` on `#00000000` measures 1.67:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `top-nav-search-input`.** Text `#141414` on `#00000000` measures 1.14:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `primary-nav-link`.** Text `#2f3438` on `#00000000` measures 1.67:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-subnav-link`.** Text `#424242` on `#00000000` measures 2.09:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `header-utility-link`.** Text `#2f3438` on `#00000000` measures 1.67:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `scrap-toggle`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
