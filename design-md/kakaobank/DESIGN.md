---
name: KakaoBank
colors:
  primary: '#ffe300'
  canvas: '#ffffff'
  foreground: '#000000'
  secondary: '#888888'
  body: '#444444'
  surface: '#f7f7f7'
  divider: '#e6e6e6'
typography:
  hero:
    fontSize: 90px
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: '-0.9px'
    use: Current corporate home hero
  display:
    fontSize: 42px
    fontWeight: 700
    lineHeight: 1.24
    letterSpacing: '-0.84px'
    use: Current service page title
  section:
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.36
    letterSpacing: '-0.64px'
    use: Current public service section heading
  card-title:
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.44
    letterSpacing: '-0.48px'
    use: Current public service and brand-resource card heading
  body:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    use: Current public body and list text
  navigation:
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: '-0.14px'
    use: Current top navigation
rounded:
  action: 6px
  section: 16px
  full: 9999px
spacing:
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 40
components:
  top-navigation:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 0px
    padding: 0 20px
    height: 62px
    typography: 14px / 600
    hover: 'fg #444444'
    active: 'fg #444444'
    pressed: 'fg #444444 (same as hover)'
    focus: 'outline 2px solid #007bff, offset 2px (authored ring; fg and bg unchanged)'
    states: hover, pressed and keyboard focus measured 2026-09-29 (real :hover, :active, and Tab to :focus-visible); the colour settles after a 0.4s ease-in-out transition, and the near-black values captured 2026-07-12 were early frames of it
    use: Current corporate top navigation item
  service-tab:
    type: button
    backgroundColor: transparent
    textColor: '#000000'
    border: '0 0 1px #e6e6e6'
    rounded: 0px
    padding: 16px 0
    height: 62px
    typography: 20px / 700 (label h5; the button's own font is 16px / 400)
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: no change among the compared properties (measured 2026-09-29)
    focus: 'outline 2px solid #007bff, offset 2px (authored ring)'
    states: default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29; an accordion trigger (aria-expanded, no role=tab) whose expanded state was not opened
    use: Current public service-category accordion trigger (저축 …)
  black-action:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 6px
    padding: 9.5px 18px
    height: 42px
    typography: 15px / 600
    hover: 'bg #444444'
    pressed: 'bg #444444 (same as hover)'
    focus: 'outline 2px solid #007bff, offset 2px (authored ring)'
    states: default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29; the fill settles after a 0.35s ease transition
    use: Current corporate high-emphasis action
  resource-download:
    type: button
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 6px
    padding: 10px 16px 10px 20px
    height: 43px
    typography: 15px / 600 (label span; the anchor's own font is 16px / 400)
    hover: 'bg #444444'
    pressed: 'bg #444444 (same as hover)'
    focus: 'outline 2px solid #007bff, offset 2px (authored ring)'
    states: default captured 2026-07-12; hover, pressed and keyboard focus measured 2026-09-29
    use: Current official brand-resource download action
  brand-spec-row:
    type: listItem
    backgroundColor: transparent
    textColor: '#000000'
    border: '1px 0 0 #e6e6e6'
    rounded: 0px
    padding: 10px 0
    typography: 16px / 400 / 24px
    use: Current official brand specification row
  link-row:
    type: card
    backgroundColor: '#f7f7f7'
    textColor: '#000000'
    rounded: 16px
    padding: 22px 24px
    height: 72px
    typography: 16px / 600 (label h6; the anchor's own font is 16px / 400)
    hover: 'fg #444444 (label); bg stays #f7f7f7'
    pressed: 'fg #444444 (same as hover)'
    focus: 'outline 2px solid #007bff, offset 2px (authored ring)'
    states: default captured 2026-07-12 (six rows, 672px wide); hover, pressed and keyboard focus measured 2026-09-29 on 금융기술연구소; the change is instant (transition 0s)
    use: Home related-service link row (금융기술연구소 …), opens in a new window
  service-pill-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#222222'
    rounded: 50px
    padding: 10px 22px
    height: 38px
    typography: 16px / 600 / -0.16px tracking
    hover: no change among the compared properties (measured 2026-09-29)
    pressed: no change among the compared properties (measured 2026-09-29)
    focus: 'outline 2px solid #007bff, offset 2px (authored ring)'
    states: 'default captured 2026-07-12 (four unselected pills); the selected pill reads fg #ffffff on a transparent own background, its fill painted by another element that was not identified; hover, pressed and keyboard focus measured 2026-09-29 on 청소년'
    use: Sticky in-page category pill on the service page (청소년 …)
  brand-section-tab:
    type: tab
    backgroundColor: transparent
    textColor: '#000000'
    rounded: 30px
    padding: 8px 17px
    height: 40px
    typography: 16px / 600 / -0.16px tracking
    selected: 'bg #000000 fg #ffffff'
    states: default and selected captured 2026-07-12; the 2026-09-29 survey reads the same four pills; no pointer-state sample
    use: Brand-resource section pill (로고, 앱 아이콘, 색상, 미디어 패키지)
  footer-link:
    type: tab
    backgroundColor: transparent
    textColor: '#888888'
    height: 16px
    typography: 14px / 500
    states: default captured 2026-07-12 (18 links on each captured page); no pointer-state sample
    use: Footer related-service and channel link (카카오뱅크 AD, 금융기술연구소, 기술블로그, 인스타그램 …)
  top-scroll-button:
    type: button
    backgroundColor: '#e6e6e6'
    rounded: 50%
    size: 52px x 52px
    states: default captured 2026-07-12 on all three captured pages; no pointer-state sample
    use: Floating back-to-top button (맨 위로 이동), icon only
fonts:
  roles:
    ui: Pretendard Variable
---

# Design System Inspiration of KakaoBank (카카오뱅크)

## Overview

### Visual Theme & Atmosphere

KakaoBank is an internet bank that presents financial services as part of ordinary mobile life. Its public story spans deposits, savings, loans, investment, foreign exchange, cards, business banking, youth products, and newer AI-led service exploration. The corporate site expresses that breadth with unusually little banking ornament: a white canvas, black type, pale-gray sections, very large Korean headings, and only selective use of the protected KakaoBank Yellow. The result feels digitally accessible while retaining the clarity and restraint expected from a regulated financial institution.

That restraint is the distinctive system. The official brand resource defines KakaoBank Yellow as `#FFE300`, alongside black, white, and a narrow neutral palette, and warns against nearby substitute yellows. Yet the current public corporate surface is mostly monochrome. Yellow identifies KakaoBank; it is not proof that every banking CTA, card, success state, or app control uses yellow. The current product page organizes the catalog through large editorial sections and simple service tabs, while the brand-resource page explains the symbol, wordmark, and color system as protected identity assets.

Pretendard Variable carries all visible public UI and editorial roles. It loaded from KakaoBank's own domain and appeared across 645 elements, from the 90px home hero to 14px navigation and 16px body text. Brand character comes from scale, disciplined yellow, and product imagery rather than a proprietary display face.

**Key Characteristics:**
- Official single-yellow identity: `#FFE300`, not neighboring Kakao-family yellows
- White and pale-gray corporate canvas with black-first typography
- Pretendard Variable loaded across every observed text role
- 90px/800 home hero and 42px/700 service-page title
- Flat public components with 0px navigation/tab geometry and 6px black actions
- Explicit separation between public corporate evidence and native banking-product UI

### Primary tasks

- Compare everyday banking services across deposits, loans, and cards
- Browse the service catalog one category tab at a time
- Look into products for youth, business, or investment needs
- Find official company, ESG, or investor information about the bank

### Brand Narrative

KakaoBank positions banking as a digital product embedded in everyday routines. The official symbol explains a bank centered on the individual, while the service catalog shows continuous expansion from basic accounts into youth, business, investment, global, and AI-related offerings. The visual identity balances Kakao-family recognition with the restraint expected of a bank: one unmistakable yellow, then a large field of neutral structure. This system allows the company to speak both as a consumer product and as a financial institution. Large Korean headings make service categories approachable; monochrome navigation and pale-gray sections keep attention on information rather than decoration. The protected wordmark and exact yellow establish ownership, but they do not dictate the geometry of native transfers, account cards, or compliance flows. Those product layers require their own evidence.

### Principles

1. **Put the individual at the center.** Organize information around the user's task, not the bank's internal structure.
2. **Use yellow with discipline.** Exact brand recognition is stronger than broad decorative use.
3. **Make finance readable.** Strong Korean typography and generous rhythm should reduce cognitive load.
4. **Do not confuse brand with product evidence.** A CI guide cannot authorize native transfer controls.

### Personas

First-party material establishes task contexts only:
- An individual comparing everyday banking services.
- A young user or guardian exploring KakaoBank mini.
- A business owner reviewing business banking options.
- A visitor seeking official company, ESG, investor, or brand information.

Project-specific names, ages, balances, credit profiles, income, risk tolerance, and success metrics are intentionally unspecified and must come from the product brief.

## Colors

- **KakaoBank Yellow** (`#ffe300`): official primary identity color and protected brand specification.
- **Canvas** (`#ffffff`) and **foreground** (`#000000`): dominant current public pairing.
- **Secondary** (`#888888`): repeated supporting navigation and footer text.
- **Body gray** (`#444444`): service and brand-resource explanatory text.
- **Section surface** (`#f7f7f7`): current quiet public section fill.
- **Divider** (`#e6e6e6`): public service and brand-spec boundaries.

Earlier `#E02000`, `#0FBE6C`, `#FF9800`, input, placeholder, and native state roles are not retained. The live public site exposed `#007AFF` on small web controls, but its semantic product role was not clear enough to promote.

The keyboard focus ring is a different blue, `#007bff` (`rgb(0, 123, 255)`), drawn as a 2px solid outline on every control probed on 2026-09-29 (§14). It is recorded in each component's focus state, not as a palette role: it is neither KakaoBank Yellow nor part of the official brand resource.

## Typography

### Font evidence boundary

| Evidence class | Resolution |
|---|---|
| Official product-use | KakaoBank's current public home, service, and brand-resource pages establish Pretendard Variable. |
| Live surface-use | Pretendard Variable loaded/high across 645 visible elements from KakaoBank's first-party WOFF2. |
| Official distributed asset | The public webfont is first-party delivered; the KakaoBank wordmark remains a protected identity asset rather than a font. |
| Declared-only | `swiper-icons` was declared with zero visible text use. |
| Unresolved | Native iOS/Android banking flows and device-specific typography remain unresolved. |

| Role | Size | Weight | Line height | Tracking |
|---|---:|---:|---:|---:|
| Corporate hero | 90px | 800 | 117px | -0.9px |
| Service display | 42px | 700 | 52.08px | -0.84px |
| Section heading | 32px | 700 | 43.52px | -0.64px |
| Card heading | 24px | 700 | 34.56px | -0.48px |
| Body/list | 16px | 400 | 24px | normal |
| Top navigation | 14px | 600 | 21px | -0.14px |

## Layout

- Use large type and generous vertical rhythm to explain complex financial categories.
- Keep public navigation and tabs geometrically flat; hierarchy comes from placement and weight.
- Use `#f7f7f7` for section-level grouping instead of elevated cards.
- Apply KakaoBank Yellow at verified identity moments, not as ambient chrome.
- Keep official brand-resource layouts separate from banking-task layouts.

### Responsive Behavior

The public routes preserve their typographic hierarchy and section grouping while content reflows. Exact mobile-app navigation, banking-task breakpoints, device safe areas, and native keyboard behavior remain unresolved.

## Elevation & Depth

The promoted public system is shadow-free. Separation comes from white/pale-gray surfaces, `#e6e6e6` rules, and typographic scale. No sheet, card, or focus shadow is promoted for native banking UI. On the public site, keyboard focus is an outline, not a shadow (§14).

## Motion & Easing

No reusable duration or easing curve is promoted. Public interaction capture establishes state presence, not native banking motion behavior. Per-control transitions read on 2026-09-29: the top navigation link `all 0.4s ease-in-out`, the two black buttons `all 0.35s ease`, the service category pills `all 0.5s ease`; the link rows and the accordion trigger change instantly (`0s`). These are individual observations, not a duration scale.

---

**Verified:** 2026-07-12 (omd:migrate) · states re-measured 2026-09-29 (live probe of the home, service and brand-resource pages)
**Tier 1 sources:** https://www.kakaobank.com/ ; https://www.kakaobank.com/view/service ; https://www.kakaobank.com/view/about/brand/resource ; https://www.kakaobank.com/static/etc/logo/KakaoBank_BrandIdentityGuidelines_V2.0.pdf
**Tier 2 attempts:** getdesign.md/kakaobank returned no design record; Refero had no reliable KakaoBank match
**Conflicts unresolved:** none

## Components

### Current public components

Rest values come from the 2026-07-12 capture unless marked. Hover, pressed and keyboard focus come from a live probe on 2026-09-29 (real `:hover`, `:active`, and Tab to `:focus-visible`). Every control probed draws the same authored keyboard ring, `outline: 2px solid #007bff` with a 2px offset.

#### Top navigation
- Transparent / black, 0px radius, 62px height, `0 20px`
- Pretendard Variable 14px/600
- Hover and pressed: the text settles at `#444444` after a 0.4s `ease-in-out` colour transition; pressed equals hover
- Focus: outline 2px solid `#007bff`, offset 2px; text and background unchanged
- The July capture's near-black hover, pressed and focus samples were early frames of that transition, not states (§14)

#### Service-category accordion trigger
- Transparent / black, 1px `#e6e6e6` bottom rule
- 0px radius, 62px height, `16px 0`
- Label: a 20px/700 heading inside the button (measured 2026-09-29); the button's own computed font is 16px/400
- A `button` with `aria-expanded` and no `role=tab`: it opens a category panel. It was typed as a tab until 2026-09-29; the token name `service-tab` is kept
- Hover and pressed: no change among the compared properties (measured 2026-09-29)
- Focus: outline 2px solid `#007bff`, offset 2px
- The expanded state was not opened

#### Corporate black action
- Black / white, 6px radius, 42px height, `9.5px 18px`
- Pretendard Variable 15px/600
- Hover and pressed: the fill settles at `#444444` after a 0.35s transition; pressed equals hover
- Focus: outline 2px solid `#007bff`, offset 2px

#### Brand-resource download
- Black / white, 6px radius, 43px height, `10px 16px 10px 20px`
- Label: 15px/600 (the visible span, measured 2026-09-29); the anchor's own computed font is 16px/400
- Hover and pressed: the fill settles at `#444444`; pressed equals hover
- Focus: outline 2px solid `#007bff`, offset 2px

#### Brand specification row
- Transparent / black, 1px `#e6e6e6` top rule
- `10px 0`, 16px/400/24px
- Not interactive; not probed

### Link rows, pills and page furniture (captured 2026-07-12; states measured 2026-09-29 where noted)

#### Link row
- `#f7f7f7` fill, 16px radius, `22px 24px`, 72px tall; six rows, 672px wide, on the home page
- Label: `#000000`, a 16px/600 heading (measured 2026-09-29); the anchor's own computed font is 16px/400
- Hover and pressed: the label turns `#444444`; the fill stays `#f7f7f7`, with no lift or shadow
- Focus: outline 2px solid `#007bff`, offset 2px
- Use: 금융기술연구소 and the other related-service rows; opens in a new window

#### Service category pill
- Transparent, text `#222222`, 50px radius, `10px 22px`, 38px tall, 16px/600, -0.16px tracking
- The selected pill reads text `#ffffff` on a transparent background of its own; the black fill behind it is painted by another element that was not identified, so no selected fill is declared
- Hover and pressed: no change among the compared properties (measured 2026-09-29)
- Focus: outline 2px solid `#007bff`, offset 2px
- Use: sticky in-page pills on the service page (청소년 …)

#### Brand section pill
- Transparent, text `#000000`, 30px radius, `8px 17px`, 40px tall, 16px/600, -0.16px tracking
- Selected: fill `#000000`, text `#ffffff`
- No pointer-state sample
- Use: brand-resource section pills (로고, 앱 아이콘, 색상, 미디어 패키지); the 2026-09-29 survey reads the same four

#### Footer link
- Text `#888888`, 14px/500, 16px tall, no fill
- No pointer-state sample
- Use: footer related-service and channel links (카카오뱅크 AD, 금융기술연구소, 기술블로그, 인스타그램 …), 18 on each captured page

#### Back-to-top button
- `#e6e6e6` fill, 50% radius, 52px × 52px, icon only
- No pointer-state sample
- Use: the floating 맨 위로 이동 button on all three captured pages

Yellow native CTAs, account cards, transfer inputs, status badges, notifications, bottom sheets, and app tabs are intentionally absent until a current inspectable native-product path establishes them.

### States

A live probe on 2026-09-29 measured hover, pressed and keyboard focus on six controls across the home, service and brand-resource pages (real `:hover`, `:active`, and Tab to `:focus-visible`).

- Keyboard focus: all six draw the same authored ring, `outline: 2px solid #007bff`, offset 2px, and nothing else changes. `outline-style` is `solid`, not the browser's `auto`. The value matches a common framework default, but the site's stylesheet was not read, so the ring is recorded per component and not promoted to a token.
- Hover and pressed: the top navigation text and the link-row label settle at `#444444`; the two black buttons' fill settles at `#444444`. Pressed equals hover on all four.
- The accordion trigger and the service category pill: no change among the compared properties on hover or press (measured 2026-09-29).

Correction (2026-09-29): this section previously said the top navigation exposed focus, hover and pressed states, and the reference declared pressed `#141414` and focus `#131313` from the 2026-07-12 capture. The link has a `0.4s ease-in-out` colour transition from `#000000` to `#444444`. A frame sample during a live hover passes `#141414` at 363 ms, and both July values lie on the grey line between rest and the settled colour (the July hover sample read `#141414` as well). They were early transition frames, not states; the settled values are above.

One current service control exposed a disabled state in the July capture, but its semantic role was insufficient for promotion. Native loading, empty, transfer success, transfer failure, identity verification, and destructive states remain absent.

## Do's and Don'ts

### Do
- Use exact `#FFE300` when the role is an official KakaoBank identity role.
- Preserve Pretendard Variable's observed Korean-first metrics and tracking.
- Keep the corporate web surface restrained and largely monochrome.
- Distinguish official identity, public service marketing, and native banking evidence.

### Don't
- Do not substitute `#FEE500`, `#FAE100`, or another Kakao-family yellow.
- Do not infer a Yellow CTA or transfer component from a brand swatch.
- Do not fabricate app error, success, account, badge, or sheet components.
- Do not turn the public corporate site into a Kakao Friends-heavy app mockup.

## Voice & Tone

KakaoBank's public voice makes finance feel ordinary and useful. It favors direct Korean nouns and verbs, names the service category clearly, and explains benefits without institutional ceremony. Service descriptions should state who a product is for, what financial task it supports, and what the visitor can learn next. Corporate and brand material may be more declarative, while compliance or Help content must stay precise and unambiguous. Avoid playful copy where money movement, identity, or risk is involved. Do not invent rates, user counts, or performance claims.

## Agent Prompt Guide

> Build a restrained Korean financial information surface with a white canvas, black-first type, pale `#f7f7f7` section fills, Pretendard Variable, very large bold headings, flat navigation, and 6px black public actions. Use `#FFE300` only for verified KakaoBank identity roles and omit unverified native banking components.

## Governance

### Known Gaps

- **Contrast, `top-navigation`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `service-tab`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `brand-spec-row`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `service-pill-tab`.** Text `#222222` on `#00000000` measures 1.32:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
- **Contrast, `brand-section-tab`.** Text `#000000` on `#00000000` measures 1.00:1, below the WCAG AA 4.5:1 minimum for normal-size text. Recorded as measured, not adjusted.
