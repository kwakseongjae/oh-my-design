---
id: payco
name: "PAYCO"
country: KR
category: fintech
homepage: "https://www.payco.com"
primary_color: "#FF2233"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=payco.com&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#FF2233"
    primary-legacy: "#ff1414"
    heading: "#2d2d2d"
    body: "#2a303a"
    muted: "#666666"
    placeholder: "#999999"
    secondary: "#565960"
    surface: "#f4f6fa"
    divider: "#ededed"
    border: "#d4d4d4"
    disabled-bg: "#dadada"
    disabled-text: "#aaacae"
    canvas: "#ffffff"
    on-primary: "#ffffff"
  typography:
    family: { sans: "NotoSans", mono: "monospace" }
    hero:        { size: 52, weight: 700, tracking: -0.56, use: "Hero / section titles" }
    section-sub: { size: 32, weight: 400, lineHeight: 1.56, use: "Section subtitles" }
    nav:         { size: 24, weight: 300, use: "Navigation links" }
    subtext:     { size: 24, weight: 300, lineHeight: 1.33, use: "Hero subtext" }
    button-lg:   { size: 18, weight: 700, use: "Large button label" }
    body:        { size: 16, weight: 400, lineHeight: 1.27, tracking: -1, use: "Standard body text" }
    button-md:   { size: 13, weight: 700, use: "Medium button label" }
    input:       { size: 12, weight: 400, use: "Input value text" }
  spacing: { xs: 10, sm: 20, md: 25, base: 32, lg: 48, xl: 115, section: 159 }
  rounded: { sm: 8, md: 20, lg: 100, full: 9999 }
  shadow:
    panel: "0 1px 0 rgba(0,0,0,0.1)"
  components:
    button-primary: { type: button, bg: "#FF2233", fg: "#ffffff", padding: "0 0", font: "18px / 700", use: "Primary page-level CTA, 48px height" }
    button-secondary: { type: button, bg: "#565960", fg: "#ffffff", font: "18px / 700", use: "Dark secondary action, 48px height" }
    button-ghost: { type: button, bg: "#ffffff", fg: "#2d2d2d", font: "18px / 700", use: "Ghost / secondary action with grey border" }
    button-disabled: { type: button, bg: "#dadada", fg: "#aaacae", use: "Inactive button state" }
    button-cta-modern: { type: button, bg: "#FF2233", fg: "#ffffff", radius: "8px", padding: "16px 10px", font: "14px / 400", use: "Modern CTA link button, 51px height" }
    input-standard: { type: input, bg: "#ffffff", fg: "#666666", radius: "0px", padding: "0 0 0 20px", font: "12px / 400", use: "Standard form input, 32px height, #d4d4d4 border" }
  components_harvested: true
---

# PAYCO

South Korea's everyday fintech super-app — combining payment, points, financial services, and document storage in one red-branded platform operated by NHN PAYCO.

## 1. Visual Theme & Atmosphere

PAYCO's digital product language is built on a high-contrast red-and-white foundation that projects urgency, confidence, and accessibility. The vivid brand red (#FF2233) anchors every primary action — sidebar headers, CTA buttons, active navigation underlines — against a clean white canvas, creating an energetic rhythm without visual clutter. Dark charcoal (#2a303a) carries all body copy, keeping legibility sharp on white surfaces. Secondary UI chrome falls into neutral greys and off-whites, so the brand red always reads as a call to action. The overall atmosphere is functional and trustworthy: nothing extraneous competes with the moment of payment or redemption, yet the red signals that speed and benefit are always one tap away.

## 2. Color Palette & Roles

- **Brand Red:** `#FF2233` — primary brand color; buttons, active nav, sidebar headers, emphasis text (CSS custom property `--brand-color`)
- **Legacy Red:** `#ff1414` — GNB bottom border, hover states, point figures; retained alongside brand red for legacy components
- **Body Dark:** `#2a303a` — primary text, body copy, nav link default
- **Off-Black:** `#2d2d2d` — secondary headings, dense data text
- **Mid Grey:** `#666666` — secondary body text, input value text
- **Placeholder Grey:** `#999999` — input placeholder, tertiary labels
- **Light Neutral:** `#f4f6fa` — surface background for cards and section washes
- **Divider:** `#ededed` — table borders, section dividers
- **Input Border:** `#d4d4d4` — form field outlines at rest
- **Disabled Surface:** `#dadada` — disabled button background
- **Disabled Text:** `#aaacae` — disabled button label
- **White:** `#ffffff` — page background, card fill, button fill (ghost/secondary)

## 3. Typography Rules

- **Korean primary:** `NotoSans` (NotoSans KR), weights 100–700; used in service sections, navigation, and promotional copy
- **Newer flows:** `'Pretendard Variable'`, weights 400/500/700; used in modern refund and transaction screens
- **Base stack (legacy):** `'Apple SD Gothic Neo', NanumGothic, ng, dotum, Helvetica, sans-serif`; applies to body, inputs, buttons
- **Base size:** 16px; line-height 1.27; letter-spacing −1px (body)
- **Hero heading:** 52px / 700 / color `#fff` / letter-spacing −0.56px (`.kv_heading`)
- **Hero subtext:** 24px / 300 / color `#fff` / line-height 32px (`.kv_text`)
- **Section title:** 52px / 700 / color `#000` (`.main_title`)
- **Section subtitle:** 32px / 400 / color `#000` / line-height 50px (`.sub_title`)
- **Nav links:** 24px / 300 / NotoSans / color `#191919`
- **Large button label:** 18px / 700 / line-height 48px (`.bn_big *`)
- **Medium button label:** 13px / 700 / line-height 39px (`.bn_l *`)

## 4. Component Stylings

### Buttons

**Primary Brand Button (bn_big + brand color)**
- Background: `#FF2233`
- Text: `#ffffff`
- Border: 1px solid `#FF2233`
- Height: 48px
- Font: 18px / 700

**Dark Secondary Button (bn_bk)**
- Background: `#565960`
- Text: `#ffffff`
- Border: 1px solid `#4a4f56`
- Height: 48px
- Font: 18px / 700

**Ghost Button (bn_gy)**
- Background: `#ffffff`
- Text: `#191a1c`
- Border: 1px solid `#bfbfbf`

**Disabled Button (bn_disabled)**
- Background: `#dadada`
- Text: `#aaacae`
- Border: 1px solid `#d2d2d2`

**Modern CTA Link Button (halt_apply)**
- Background: `#FF2233`
- Text: `#ffffff`
- Radius: 8px
- Height: 51px
- Padding: 16px 10px
- Font: 14px / 400

### Form Inputs

**Standard Input (inp)**
- Background: `#ffffff`
- Text: `#666666`
- Border: 1px solid `#d4d4d4`
- Height: 32px
- Padding: 0 0 0 20px
- Font: 12px

**Placeholder**
- Text: `#999999`

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://www.payco.com (homepage HTML), https://www.payco.com/share/css/common.css?1778564615926 (full CSS bundle, 398 KB)
**Tier 2 sources:** getdesign.md/payco — NOT LISTED (no data). refero ?q=PAYCO — no KR result.
**Conflicts unresolved:** #FF2233 (CSS :root --brand-color) and #ff1414 (legacy GNB border) coexist; #FF2233 is the canonical brand red per the custom property declaration.

## 5. Layout Principles

- Desktop content width: 1026px centered (`.wrap { width: 1026px; margin: 0 auto }`)
- Full-width hero image with centred overlay text at 1600px minimum width for large screens
- Sidebar navigation (`.snb_header_wrap`) uses brand red background at 184px height
- Service sections stack vertically with generous vertical padding (159px top on first section, 115px on subsequent)
- Service tab navigation is inline with 25px spacing between items
- Footer uses narrower 760px content width with 180px left padding for address block

## 6. Depth & Elevation

- Flat surfaces dominate: cards and panels use 1px border or background colour shift rather than drop shadows
- Panel dropdowns use subtle shadow: `box-shadow: 0 1px 0 rgba(0,0,0,.1)` (`.ly_panel_cont`)
- Modal overlay uses full-screen dimmed layer: `background: #000; opacity: .7` (`.dimmed`)
- z-index layering: skip link 120, sticky nav 99, date picker 100, modal 100+
- Active GNB bottom underline: 4px solid `#ff1414` — the heaviest border accent in the system

## 7. Do's and Don'ts

### Do
- Use `#FF2233` exclusively for primary CTAs, active states, and brand emphasis to maintain hierarchy
- Set body text in `#2a303a` on white for maximum legibility
- Use NotoSans (KR) for promotional and section heading copy; use Pretendard Variable for newer transactional screens
- Apply the 1px solid `#d4d4d4` border on all inputs at rest state
- Use the `bn_big` sizing (198×48px, 18px/700) for primary page-level call-to-action buttons
- Keep content within the 1026px centred wrapper on desktop

### Don't
- Don't introduce additional brand colours outside the measured palette without alignment
- Don't use the brand red `#FF2233` for body text or non-actionable elements — it triggers urgency
- Don't omit the disabled state styling (`#dadada` / `#aaacae`) when rendering inactive buttons
- Don't mix Pretendard Variable and legacy `'Apple SD Gothic Neo'` stacks in the same component context
- Don't override the 4px GNB bottom border or the sidebar red header — these are structural brand anchors

## 8. Responsive Behavior

- Desktop first layout; breakpoints defined at max-width 1280px and max-width 1100px (narrow content adjustments)
- At min-width 1600px: full-width hero image scales to cover with absolute centred positioning
- Hero image uses `transform: translate(-50%, -50%)` for centred cover on all viewport sizes
- Sticky navigation (`fp_nav`) transitions from absolute to fixed at 69px from top of viewport when user scrolls
- Footer and sidebar widths do not adapt below 1100px; mobile experience served by native apps

## 9. Agent Prompt Guide

Use these conventions when generating PAYCO-branded UI:

- Primary brand hex is `#FF2233`; use it for primary buttons, active nav items, and emphasis spans
- Body text hex is `#2a303a`; secondary text is `#666`; placeholder is `#999`
- Surface backgrounds: `#fff` (cards, page), `#f4f6fa` (section wash), `#f4f4f4` (info panels)
- Button large: 198×48px, border 1px solid matching background, text 18px/700, white text on brand red
- Input: height 32px, padding-left 20px, border 1px solid `#d4d4d4`, font 12px, text `#666`
- Disabled: background `#dadada`, border `#d2d2d2`, text `#aaacae`
- Corner radius: 8px for modern CTAs; 20px–100px for pill badges/tags; flat (0) for legacy button variants
- Font: NotoSans KR for headings/promo; Pretendard Variable for transactional screens; fall back to Apple SD Gothic Neo
- Transitions on nav indicator: `width 0.5s` ease

## 10. Voice & Tone

**Adjectives:** Practical, reassuring, familiar

| Dimension | Do | Don't |
|-----------|-----|-------|
| Register | Friendly and direct; speak like a trusted neighbour | Formal or distant — avoid corporate stiffness |
| Sentences | Short to mid-length; action-led | Long conditional clauses that delay the point |
| Vocabulary | Everyday Korean consumer language; minimal jargon | Finance-heavy terminology without explanation |

Voice samples (illustrative):
- "결제가 필요한 모든 순간, PAYCO 하세요." (Every moment you need to pay, PAYCO it.) — short, verb-forward, brand name as a verb
- "실속있는 포인트, 편리한 결제, 간편한 금융." (Practical points, convenient payment, simple finance.) — three-beat rhythm, benefit-first
- "일상의 빈틈을 채우다" (Fill the gaps in your daily life.) — poetic but grounded, positions PAYCO as an everyday companion

## 11. Brand Narrative

PAYCO launched in 2015 under NHN (formerly NHN Entertainment, the company behind Hangame and NAVER's early gaming arm), aiming to consolidate the fragmented Korean payment landscape into a single mobile wallet. Rather than targeting power users, the service centred on the mass consumer's everyday inconveniences — small purchases, loyalty point management, transit payments — and built trust by linking to users' existing bank accounts without requiring a new card.

The brand's current mission is captured in the homepage OG description: "실속있는 포인트, 편리한 결제, 간편한 금융, 안전한 전자문서함" — practical points, convenient payment, simple finance, secure digital document storage. This four-part mission reflects PAYCO's evolution from a pure payments app into a life-services super-app: the 페이코 라이프 (PAYCO Life) positioning introduced on the homepage signals that the brand sees itself as a utility layer across employment (office meal vouchers, campus IDs), commerce, and government-facing document exchange.

NHN PAYCO operates the service as a subsidiary of NHN, and the product's visual language — dominated by the vivid brand red, clean white surfaces, and tight typographic scale — deliberately contrasts with the clutter of legacy Korean fintech apps. The tagline "일상의 빈틈을 채우다" (Fill the gaps in your daily life) positions PAYCO as a background enabler: always available, never intrusive, and genuinely useful in the uncovered corners of everyday life.

## 12. Principles

1. **Simplicity over completeness.** Every flow should reduce friction to its minimum. *UI implication:* Prefer single-action screens; hide advanced options behind progressive disclosure rather than exposing all settings upfront.

2. **Trust through transparency.** Users are handling money and documents; every state must be communicated clearly. *UI implication:* Show explicit confirmation dialogs, unambiguous success screens, and honest error messages with recovery paths.

3. **Reliability at every touchpoint.** PAYCO must work first time, every time, for every demographic. *UI implication:* Design for the lowest-common-denominator device; never depend on hover states for critical information.

4. **Everyday relevance.** Benefits and points should feel attainable, not aspirational. *UI implication:* Surface accumulated points and savings prominently in personalised dashboards; use concrete numbers rather than percentages.

5. **Brand clarity under load.** In dense data screens (transaction lists, coupon grids), brand red must remain a signal, not decoration. *UI implication:* Reserve `#FF2233` for primary CTAs and alert states only; use neutral greys for all listing chrome.

## 13. Personas

*Illustrative — these are representative archetypes synthesised from PAYCO's stated service areas and public product positioning.*

*Illustrative Office Worker (지민, 28):* Uses PAYCO daily for the company meal-voucher (식권) at the office canteen, accumulates points on convenience-store runs, and occasionally pays transit fares. Values speed over discovery — expects the payment barcode to appear in under two taps.

*Illustrative University Student (소연, 22):* Relies on the campus PAYCO card (캠퍼스) for student ID and library access, uses the app to send small remittances to family, and redeems coupon notifications between lectures. Sensitive to data charges; expects the app to be fast on mid-range Android.

*Illustrative Self-Employed Merchant (영호, 45):* Accepts PAYCO at his neighbourhood bakery via QR code terminal; checks settlement summaries weekly. Values clear revenue totals and simple dispute resolution over any loyalty features.

*Illustrative Document-Conscious Parent (혜진, 38):* Stores electronic documents (전자문서) — insurance policies, government notices — in PAYCO's digital wallet. Cares about security assurances and needs to find documents quickly when contacted by an insurer.

## 14. States

- **Empty:** Grey centre-aligned text `#999` with a descriptive label; no brand-red elements to avoid false urgency in zero-data screens
- **Loading (spinner):** 22×22px animated sprite (`.sp_load`) absolutely centred on the container; background image from CDN; grey tones to avoid distraction
- **Loading (image):** 30×30px animated gif (`.img_loading`) centred in column headers or card panels; separate assets for dark and light panel backgrounds
- **Error (page-level):** Full-width white overlay with centred error illustration, 24px `#565960` heading, 13px `#666` body text, and a single recovery CTA button; brand-red used only in the recovery link (`.error .desc a`)
- **Error (inline):** `#FF2233` caution text (`.caution`, `.confirm`) at 12px directly below the affected field
- **Success:** Implicit via forward navigation; no dedicated success-screen pattern found in CSS — completion is signalled by routing to next step
- **Skeleton:** No explicit skeleton-loading CSS found; loading spinners serve this role
- **Disabled:** Background `#dadada`, border `#d2d2d2`, text `#aaacae`; cursor:default implied; interactive events suppressed

## 15. Motion & Easing

- **Navigation indicator:** `transition: width 0.5s` — the `fp_nav` active underline expands from 0 to 100% width; easing unspecified (browser default ease)
- **Transform usage:** `transform: translate(-50%, -50%)` for absolute centring of hero image and modals; `transform: translateY(-50%)` for vertically centred inline elements — all used for layout, not animation
- **Page scroll:** `fp_nav` transitions between absolute and fixed positioning on scroll; no explicit scroll-animation timing defined
- **General rule:** Transitions are minimal and functional; the brand does not use decorative motion. Duration scale: 0.5s for page-level indicator; shorter interactions implied by browser defaults
- **Easing intent:** Flat ease (browser default) for all measured transitions; no cubic-bezier custom curves found in the CSS bundle
