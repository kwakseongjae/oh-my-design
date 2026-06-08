---
id: tada
name: TADA
display_name_kr: 타다
country: KR
category: consumer-tech
homepage: "https://tadatada.com"
primary_color: "#1ec59f"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=tadatada.com&sz=128"
verified: "2026-05-27"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#1ec59f"
    primary-pressed: "#17a384"
    primary-deep: "#149378"
    mint-light: "#e6f8f3"
    canvas: "#ffffff"
    heading: "#1a1a1a"
    gray-800: "#333333"
    gray-700: "#555555"
    body: "#777777"
    gray-500: "#999999"
    gray-400: "#bbbbbb"
    border: "#e5e5e5"
    surface: "#f2f2f2"
    on-primary: "#ffffff"
    error: "#ff4452"
    warning: "#ff9f1c"
    navy: "#19254d"
  typography:
    family: { sans: "Pretendard", mono: "Pretendard" }
    display:      { size: 28, weight: 700, lineHeight: 38, tracking: -0.4, use: "Onboarding / hero moment" }
    heading-lg:   { size: 22, weight: 700, lineHeight: 30, tracking: -0.4, use: "Screen title" }
    heading:      { size: 18, weight: 700, lineHeight: 26, tracking: -0.3, use: "Section header, vehicle type title" }
    title:        { size: 16, weight: 600, lineHeight: 24, tracking: -0.3, use: "Bottom-sheet header, list header" }
    body-lg:      { size: 16, weight: 400, lineHeight: 24, tracking: -0.2, use: "Descriptions, address text" }
    body:         { size: 14, weight: 400, lineHeight: 22, tracking: -0.2, use: "Default body, list metadata" }
    caption:      { size: 13, weight: 400, lineHeight: 18, tracking: -0.2, use: "Secondary metadata, timestamps" }
    micro:        { size: 12, weight: 500, lineHeight: 16, tracking: -0.2, use: "Fine print, map labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32, section: 40 }
  rounded: { sm: 8, md: 12, lg: 16, full: 9999 }
  shadow:
    subtle: "0px 1px 3px rgba(0,0,0,0.06)"
    standard: "0px 2px 8px rgba(0,0,0,0.08)"
    floating: "0px 4px 16px rgba(0,0,0,0.12)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#1ec59f", fg: "#ffffff", radius: 12, padding: "16px 20px", font: "16/700", use: "Primary CTA, thumb-reachable bottom action" }
    button-dark: { type: button, bg: "#19254d", fg: "#ffffff", radius: 12, padding: "16px 20px", font: "16/700", use: "Marketing-surface strong CTA" }
    button-outline: { type: button, bg: "#ffffff", fg: "#1ec59f", radius: 12, padding: "16px 20px", font: "16/600", use: "Secondary CTA" }
    button-neutral: { type: button, bg: "#f2f2f2", fg: "#333333", radius: 12, padding: "14px 16px", font: "14/500", use: "Tertiary actions" }
    button-danger: { type: button, bg: "#ff4452", fg: "#ffffff", radius: 12, padding: "16px 20px", font: "16/700", use: "Destructive confirm" }
    input-default: { type: input, bg: "#ffffff", fg: "#1a1a1a", radius: 12, padding: "14px 16px", font: "16/400", use: "Default text input" }
    input-search: { type: input, bg: "#f2f2f2", fg: "#1a1a1a", radius: 12, padding: "14px 16px 14px 44px", font: "16/400", use: "Destination-entry field" }
    card-vehicle: { type: card, bg: "#ffffff", radius: 16, padding: "16px", use: "Vehicle type selection card" }
    card-trip: { type: card, bg: "#ffffff", radius: 16, padding: "20px", use: "Active-trip summary over map" }
    badge-status: { type: badge, bg: "#e6f8f3", fg: "#149378", radius: 8, padding: "4px 8px", font: "12/700", use: "Trip status" }
    badge-neutral: { type: badge, bg: "#f2f2f2", fg: "#555555", radius: 8, padding: "4px 8px", font: "12/700", use: "Metadata / feature label" }
    tab-bottom: { type: tab, fg: "#999999", use: "Bottom tab bar", active: "label #1ec59f, icon filled" }
---

# Design System Inspiration of TADA (타다)

## 1. Visual Theme & Atmosphere

TADA is the Korean mobility brand that built its identity around a single, calming idea: that getting in a car should feel like a small relief, not a transaction. Its visual signature is a fresh mint-teal (`#1ec59f`) -- a color almost no incumbent transport service used, chosen the way Toss chose cerulean: to be *not* the aggressive yellow of a taxi nor the corporate navy of a logistics firm, but something that reads as clean, modern, and quietly premium. The mint is the brand. It anchors the wordmark, the primary "차량 호출" CTA, the active map pin, and the trip-in-progress state, against generous white space and a calm near-black type system.

The atmosphere TADA cultivates is *space*. The product's original differentiator was the roomy van interior, and the design language echoes that physical promise: airy layouts, soft rounded corners, comfortable type, and minimal chrome so the map and the single next action dominate. A ride-hailing app lives or dies on one-glance clarity -- where is my car, how long until it arrives, what do I tap next -- so TADA's screens resolve to one primary action at a time, the mint CTA pinned to a thumb-reachable bottom bar over a clean map canvas. The brand voice is reassuring and unhurried: the trip is handled, you can relax.

What defines TADA visually is the discipline of one signature hue against neutral calm. The mint is interaction and brand; everything else is white, soft gray surfaces, and a warm near-black for text. The result feels closer to a wellness or fintech app than to a legacy transport service -- a deliberate repositioning of "calling a car" from a stressful errand into a moment of ease.

**Key Characteristics:**
- TADA Mint (`#1ec59f`) as the signature brand + primary interactive color
- Calm near-black type on white, with soft gray surface fills
- Pretendard / system sans stack for Korean-Latin co-equal rendering
- Map-first, one-action-per-screen layouts — the mint CTA on a thumb-reachable bottom bar
- Soft rounded corners (8-16px) — airy, reassuring, never sharp or aggressive
- Generous whitespace echoing the brand's roomy-interior physical promise
- Minimal shadow — calm comes from clarity, not depth
- Reassuring, unhurried voice — "the trip is handled"

## 2. Color Palette & Roles

### Primary
- **TADA Mint** (`#1ec59f`): The signature brand color and primary interactive accent — wordmark, "호출하기" CTA, active map pin, trip-in-progress, links.
- **Mint Pressed** (`#17a384`): Pressed / hover state for mint CTAs.
- **Mint Light** (`#e6f8f3`): Subtle mint-tinted informational backgrounds, selected-state fills.
- **Pure White** (`#ffffff`): Page / map canvas, card surfaces, button text on mint.
- **Calm Near-Black** (`#1a1a1a`): Primary heading and strong text. Warm dark, softer than pure black.

### Neutral Scale
- **Gray 800** (`#333333`): Strong labels, navigation text.
- **Gray 700** (`#555555`): Emphasized body text.
- **Gray 600** (`#777777`): Body text, descriptions, ETA secondary labels.
- **Gray 500** (`#999999`): Caption text, secondary metadata.
- **Gray 400** (`#bbbbbb`): Placeholder text, disabled icons.
- **Gray 200** (`#e5e5e5`): Default border, dividers, input outlines.
- **Gray 100** (`#f2f2f2`): Secondary background, card fill, disabled surface.
- **Gray 50** (`#f7f7f7`): Lightest surface fill.

### Semantic
- **Success Mint** (`#1ec59f`): Trip-confirmed / arrived-state — the brand color doubles as success.
- **Error Red** (`#ff4452`): Error states, cancellation, destructive actions.
- **Warning Amber** (`#ff9f1c`): Surge / wait-time warnings, pending states.
- **Info Navy** (`#19254d`): Dark marketing / brand surface (current marketing site uses this deep navy as a contrast field; see footer note).

### Surface & Overlays
- **Map Scrim**: `rgba(0,0,0,0.3)`. Gradient veil for legibility of controls over the map.
- **Bottom Sheet Surface**: `#ffffff`. Trip detail, vehicle selection.

## 3. Typography Rules

### Font Family
- **Primary**: `"Pretendard", "Apple SD Gothic Neo", -apple-system, BlinkMacSystemFont, "Noto Sans KR", "Malgun Gothic", Roboto, sans-serif`
- **Design Principle**: No bespoke wordmark webfont on product surfaces. The system relies on Pretendard's clean geometric Korean glyphs and a warm near-black for a calm, modern read. Korean and Latin render co-equally. Map labels and ETA numbers favor tabular figures for stable alignment.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Pretendard | 28px | 700 | 38px | -0.4px | Onboarding / hero moment |
| Heading Large | Pretendard | 22px | 700 | 30px | -0.4px | Screen title, "어디로 갈까요?" |
| Heading | Pretendard | 18px | 700 | 26px | -0.3px | Section header, vehicle type title |
| Title | Pretendard | 16px | 600 | 24px | -0.3px | Bottom-sheet header, list header |
| Body Large | Pretendard | 16px | 400 | 24px | -0.2px | Descriptions, address text |
| Body | Pretendard | 14px | 400 | 22px | -0.2px | Default body, list metadata |
| ETA / Number | Pretendard | 22px+ | 700 | tight | -0.2px | Arrival minutes, fare — tabular numerals |
| Caption | Pretendard | 13px | 400 | 18px | -0.2px | Secondary metadata, timestamps |
| Caption Bold | Pretendard | 13px | 700 | 18px | -0.2px | Tag / status labels |
| Micro | Pretendard | 12px | 500 | 16px | -0.2px | Fine print, map labels |

### Principles
- **Calm warm dark**: Headings and body use warm near-black `#1a1a1a` for a reassuring rather than clinical read.
- **Numbers are typography**: ETA minutes and fares use 700 weight with tabular numerals — they're the most-glanced data and must align stably as they update.
- **Three weights**: 400 (body), 600 (titles), 700 (headings / numbers). Light is avoided on Korean glyphs.
- **One-glance hierarchy**: On the map screen, the next action and the ETA are the two largest elements; everything else recedes.
- **Tight Korean tracking**: `-0.2px` to `-0.4px` letter-spacing for clean compactness.

## 4. Component Stylings

### Buttons

**Primary (TADA Mint)**
- Background: `#1ec59f`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 16px 20px
- Font: 16px / 700 / Pretendard
- Hover: `#17a384`
- Pressed: `#149378`
- Disabled: `#bbbbbb` background, `#ffffff` text
- Use: Primary CTA — `호출하기`, `이대로 호출`, `결제하기`. The thumb-reachable bottom action.

**Dark (Navy Solid)**
- Background: `#19254d`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 16px 20px
- Font: 16px / 700 / Pretendard
- Use: Marketing-surface CTA / strong action where mint would feel too soft (`회원가입 없이 바로 타다 부르기` on the marketing site).

**Outline (Mint Border)**
- Background: `#ffffff`
- Text: `#1ec59f`
- Border: 1px solid `#1ec59f`
- Radius: 12px
- Padding: 16px 20px
- Font: 16px / 600 / Pretendard
- Hover: `#e6f8f3` background
- Use: Secondary CTA — `예약하기`, `경로 변경`

**Neutral (Gray Fill)**
- Background: `#f2f2f2`
- Text: `#333333`
- Border: none
- Radius: 12px
- Padding: 14px 16px
- Font: 14px / 500 / Pretendard
- Hover: `#e5e5e5` background
- Use: Tertiary actions — cancel, edit, more options

**Danger (Red)**
- Background: `#ff4452`
- Text: `#ffffff`
- Border: none
- Radius: 12px
- Padding: 16px 20px
- Font: 16px / 700 / Pretendard
- Use: Destructive confirm — `호출 취소`

### Inputs

**Default**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#e5e5e5`
- Radius: 12px
- Padding: 14px 16px
- Font: 16px / 400 / Pretendard
- Placeholder: `#bbbbbb`
- Focus: 1px solid `#1ec59f`
- Use: Default text input — phone, payment, settings forms

**Destination Search**
- Background: `#f2f2f2`
- Text: `#1a1a1a`
- Border: none
- Radius: 12px
- Padding: 14px 16px 14px 44px (left-pad for inline location icon)
- Font: 16px / 400 / Pretendard
- Placeholder: `#999999` ("어디로 갈까요?")
- Focus: `#ffffff` background, 1px solid `#1ec59f` border
- Use: The signature destination-entry field at the top of the home screen

**Error**
- Background: `#ffffff`
- Text: `#1a1a1a`
- Border: 1px solid `#ff4452`
- Radius: 12px
- Padding: 14px 16px
- Font: 16px / 400 / Pretendard
- Use: Form validation failure — helper text 13px/400 `#ff4452` below

### Cards

**Vehicle Option Card**
- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Radius: 16px
- Padding: 16px
- Shadow: none (selected gets mint border + `#e6f8f3` fill)
- Selected: 1.5px solid `#1ec59f`, `#e6f8f3` background
- Use: Vehicle type selection (타다 라이트 / 플러스 / 넥스트) with fare estimate

**Trip Card**
- Background: `#ffffff`
- Border: none
- Radius: 16px
- Padding: 20px
- Shadow: `0px 2px 8px rgba(0,0,0,0.08)`
- Use: Active-trip summary, driver + vehicle + ETA on the map screen

**Receipt Card**
- Background: `#ffffff`
- Border: 1px solid `#e5e5e5`
- Radius: 12px
- Padding: 16px
- Use: Trip history / fare breakdown

### Badges

**Status (Mint)**
- Background: `#e6f8f3`
- Text: `#149378`
- Border: none
- Radius: 8px
- Padding: 4px 8px
- Font: 12px / 700 / Pretendard
- Use: "배차 완료", "운행 중" status

**Promotion (Amber)**
- Background: `#fff3e0`
- Text: `#cc7a00`
- Border: none
- Radius: 8px
- Padding: 4px 8px
- Font: 12px / 700 / Pretendard
- Use: Surge / wait-time notice, scarce promotional flag

**Neutral**
- Background: `#f2f2f2`
- Text: `#555555`
- Border: none
- Radius: 8px
- Padding: 4px 8px
- Font: 12px / 700 / Pretendard
- Use: Metadata tag, vehicle-feature label

### Map Controls

**Floating Pin**
- Color: `#1ec59f` (origin/active) / `#1a1a1a` (destination)
- Use: Map markers — the active/origin pin carries the mint

**Bottom Action Bar**
- Background: `#ffffff`
- Border: 1px top `#e5e5e5` (or shadow `0px -2px 12px rgba(0,0,0,0.08)`)
- Radius: 16px (top corners) when raised as a sheet
- Use: Sticky container for the primary mint CTA + fare/ETA summary

### Navigation
- Top bar: transparent over map or `#ffffff`, ~56px, back/menu icon left, profile right.
- Bottom tab bar (mobile): `홈`, `이용 내역`, `더보기`. Active label `#1ec59f` / icon filled, inactive `#999999`. Mint marks the active tab.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px
- Global gutter (mobile): 16-20px each side
- Bottom action bar: 16px inset + safe-area
- Card internal padding: 16-20px (generous, echoing the roomy-interior promise)

### Grid & Container
- Mobile-first, single-column over a full-bleed map canvas
- The map fills the screen; controls float as cards / bottom sheet
- Detail / history: single-column list, 16px gutter
- Marketing web (tadatada.com): full-width sections, centered content, navy contrast fields

### Whitespace Philosophy
- **Space is the product**: TADA's physical differentiator was room; the UI echoes it with airy layouts and generous card padding.
- **One action, lots of air**: The primary CTA sits alone at the bottom with breathing room around it — no competing buttons.
- **Map dominates**: Chrome is minimal so the map and the next action own the screen.

### Border Radius Scale
- Subtle (8px): Badges, small tags
- Comfortable (12px): Buttons, inputs, receipt cards
- Soft (16px): Vehicle cards, trip cards, bottom-sheet top corners
- Note: TADA is a *soft-corner* system — sharpness reads as aggressive / transactional, the opposite of the calm brand.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Map canvas, default surfaces |
| Subtle (Level 1) | `0px 1px 3px rgba(0,0,0,0.06)` | List separation, slight lift |
| Standard (Level 2) | `0px 2px 8px rgba(0,0,0,0.08)` | Trip cards, floating controls over map |
| Floating (Level 3) | `0px 4px 16px rgba(0,0,0,0.12)` | Bottom sheets, dialogs |
| Action Bar | `0px -2px 12px rgba(0,0,0,0.08)` | Sticky bottom CTA container |

**Shadow Philosophy**: TADA keeps shadows soft and neutral. The calm of a mobility app comes from clarity — knowing where your car is — not from dramatic depth. Floating controls over the map get just enough shadow to detach from the map texture. No brand-tinted shadows; the mint lives in fills and borders, not in elevation.

## 7. Do's and Don'ts

### Do
- Use TADA Mint (`#1ec59f`) for the primary CTA, active pin, and trip-in-progress state
- Keep warm near-black `#1a1a1a` for headings and body
- Pin the single mint CTA to a thumb-reachable bottom action bar over the map
- Use tabular numerals at 700 weight for ETA minutes and fares
- Keep corners soft (12-16px) — the brand is calm, not aggressive
- Give cards and the action bar generous padding — echo the roomy interior
- Use `#e6f8f3` mint-light for selected vehicle cards and informational fills

### Don't
- Don't use the mint as decoration — reserve it for interactive / brand / active states
- Don't put two primary buttons on one screen — one action at a time
- Don't sharpen corners to 0-4px — soft corners are the calm brand signal
- Don't crowd the map with chrome — controls float, the map dominates
- Don't use heavy or tinted shadows — calm comes from clarity, not depth
- Don't use red for anything but errors / cancellation
- Don't shout in copy — the voice is reassuring and unhurried

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <480px | Full map canvas, floating controls, bottom action bar |
| Tablet | 480-768px | Wider cards, optional side panel for trip detail |
| Desktop (Web) | >768px | Marketing site — centered sections, navy contrast fields; app mirrors mobile in a centered column |

### Touch Targets
- Primary CTA: ~52-56px height
- Vehicle cards: minimum 64px tap height
- Bottom tab items: 56px height
- Map pins / floating controls: large, thumb-friendly

### Collapsing Strategy
- Bottom sheet → centered modal on larger screens
- Sticky bottom CTA bar with safe-area insets on all devices
- Map stays full-bleed; controls reflow into a side panel on tablet+

### Image Behavior
- Vehicle illustrations: clean line/flat art, consistent sizing
- Driver photos: circular, 40-48px on the trip card
- Map tiles: full-bleed, controls layered above with scrim where needed

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: TADA Mint (`#1ec59f`)
- CTA Pressed: Mint Dark (`#17a384`)
- Background: Pure White (`#ffffff`)
- Surface fill: Gray 100 (`#f2f2f2`)
- Heading text: Calm Near-Black (`#1a1a1a`)
- Body text: Gray 600 (`#777777`)
- Caption: Gray 500 (`#999999`)
- Placeholder: Gray 400 (`#bbbbbb`)
- Border: Gray 200 (`#e5e5e5`)
- Mint light (selected/info): (`#e6f8f3`)
- Error: Red (`#ff4452`)
- Marketing dark field: Navy (`#19254d`)

### Example Component Prompts
- "Create a TADA destination search field: #f2f2f2 bg, no border, 12px radius, 14px 16px 14px 44px padding (left location icon), placeholder '어디로 갈까요?' in 16px/400 #999999. Focus: #ffffff bg, 1px solid #1ec59f."
- "Build a primary CTA: #1ec59f bg, white text, 16px weight 700 Pretendard, padding 16px 20px, 12px radius, full-width, pinned to bottom action bar. Pressed #17a384. Label '호출하기'."
- "Design a vehicle option card: white bg, 1px #e5e5e5 border, 16px radius, 16px padding. Title 16px/600 #1a1a1a, fare estimate 16px/700 tabular #1a1a1a right-aligned. Selected: 1.5px #1ec59f border, #e6f8f3 fill."
- "Create a trip card over the map: white bg, no border, 16px radius, 20px padding, 0px 2px 8px rgba(0,0,0,0.08) shadow. Driver circular photo 44px, ETA in 22px/700 tabular #1a1a1a, status badge #e6f8f3 bg / #149378 / 8px radius '배차 완료'."
- "Design a status badge: #e6f8f3 bg, #149378 text, 12px/700 Pretendard, 4px 8px padding, 8px radius, '운행 중'."

### Iteration Guide
1. TADA mint `#1ec59f` is the brand + interactive accent — CTA, active pin, trip state
2. Headings and body are warm `#1a1a1a`, never pure `#000`
3. One primary action per screen, pinned to a thumb-reachable bottom bar
4. ETA / fare numbers: 700 weight, tabular numerals
5. Soft corners: 8px badges, 12px buttons/inputs, 16px cards/sheets
6. Shadows soft and neutral — calm from clarity, not depth
7. The map dominates; chrome floats and recedes

---

## 10. Voice & Tone

TADA speaks like a calm, reliable driver who has everything handled — reassuring, unhurried, never salesy. The voice exists to reduce the small anxieties of getting somewhere: where is the car, how long, what's the fare. Korean copy uses warm, clear endings (`-요`, `-해요`) and direct imperatives (`호출하기`, `타러 가기`) over institutional `-ㅂ니다`. The brand's whole thesis is captured in its positioning that better movement makes for better living — that a ride should feel like ease, not a chore.

| Context | Tone |
|---|---|
| CTAs | Clear Korean imperatives (`호출하기`, `이대로 호출`, `결제하기`, `타러 가기`) |
| Status updates | Reassuring present-tense (`기사님이 배차되었어요`, `곧 도착해요`). |
| ETA / fare | Bare facts, exact numbers (`3분 후 도착`, `예상 요금 8,400원`). No vague "약". |
| Empty states | Gentle + next step (`최근 이용 내역이 없어요` + `호출하러 가기`). Never `데이터가 없습니다`. |
| Error messages | Blameless + actionable (`주변에 차량이 없어요. 잠시 후 다시 시도해 주세요`). No `오류가 발생했습니다`. |
| Cancellation | Clear, no guilt (`호출을 취소했어요`). |
| Onboarding | One idea per screen, calm and welcoming. |

**Forbidden phrases.** `지금 안 부르면 손해`, `초특가 호출!!!`, `데이터가 없습니다`, `오류가 발생했습니다`, `불편을 드려 죄송합니다`, vague fare approximations (`약 ~원`) on the confirm screen. The brand sells calm; urgency and hype are off-brand. Emoji avoided in trip-status and fare contexts.

**Voice samples.**

- `회원가입 없이 바로 타다 부르기` — frictionless-entry CTA on the marketing site. <!-- cited: live tadatada.com, 2026-05 -->
- `어디로 갈까요?` — destination-field placeholder, the home-screen greeting. <!-- illustrative: standard mobility destination-entry pattern -->
- `기사님이 배차되었어요` — driver-assigned status. <!-- illustrative: standard TADA trip-status pattern -->
- `곧 도착해요` — arrival-imminent status. <!-- illustrative: standard TADA trip-status pattern -->
- `호출하기` — primary call-a-car CTA. <!-- illustrative: standard TADA CTA pattern -->

## 11. Brand Narrative

TADA (타다) launched on **October 8, 2018**, built by **VCNC** — a startup best known for the couples app Between, which was acquired by car-sharing company **SOCAR** and redirected at mobility ([namu.wiki — 타다(서비스)](https://namu.wiki/w/%ED%83%80%EB%8B%A4(%EC%84%9C%EB%B9%84%EC%8A%A4)), [ko.wikipedia.org — 타다 플랫폼](https://ko.wikipedia.org/wiki/%ED%83%80%EB%8B%A4_(%ED%94%8C%EB%9E%AB%ED%8F%BC))). Its original product — roomy 11-seat vans summoned on demand with a driver — was a deliberate repositioning of "calling a car" away from the stress of hailing a taxi toward something clean, spacious, and premium. The mint-teal brand color, the airy interface, and the reassuring voice all served that single promise: *better movement, better living.*

TADA's early trajectory is also a famous chapter in Korean tech-regulation history — its rapid growth collided with the taxi industry and led to the so-called "타다 금지법," forcing a pivot of the original van service. The brand survived and continued under the VCNC / SOCAR umbrella, evolving into a franchise-based premium-taxi and reservation-mobility platform (airport transfers, premium taxi, business shuttles) while keeping the calm, space-forward design identity ([thevc.kr — VCNC](https://thevc.kr/VCNC), [mydailybyte.com — about TADA](https://mydailybyte.com/about_tada/)).

What TADA refuses: the aggressive yellow-and-meter aesthetic of legacy taxis, the surge-shaming red urgency of some global ride apps, and chrome-heavy interfaces that bury the map. Its design treats the act of moving through the city as something that can feel calm — a roomy seat, a clear ETA, one mint button, and the quiet confidence that the trip is handled.

*Note on color: the current public marketing site (tadatada.com) leans on a deep navy (`#19254d`) as its contrast field, reflecting the post-relaunch premium-taxi positioning. The mint-teal documented here as `primary_color` is TADA's signature brand identity established at launch and associated with the brand across its app and marketing; the navy is retained as the dark marketing surface (§2 Semantic / Info Navy).*

## 12. Principles

1. **Space is the brand.** TADA's physical promise was room; the UI echoes it with airy layouts and generous padding. *UI implication:* never compress cards or the action bar to fit more — the breathing room is the brand signal.
2. **One mint, one action.** The mint marks the single next thing to tap; each screen resolves to one primary action. *UI implication:* two primary buttons on a screen means it's two screens; mint never decorates.
3. **The map dominates, chrome floats.** A mobility app is judged on one-glance clarity. *UI implication:* controls float as cards / a bottom sheet over a full-bleed map; chrome stays minimal.
4. **Calm over urgency.** The brand sells ease, not pressure. *UI implication:* no surge-shaming red, no hype; status copy is reassuring and present-tense.
5. **Numbers are typography.** ETA and fare are the most-glanced data. *UI implication:* render them at 700 weight with tabular numerals so they stay stable as they update.
6. **Soft corners signal calm.** 12-16px radii throughout. *UI implication:* sharp 0-4px corners read as transactional / aggressive and should be softened.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Korean premium-mobility user segments, not individual people.*

**수민 (Sumin), 34, Seoul.** Consultant who takes late client meetings in 강남. Calls TADA when she wants a clean, predictable ride home without the variability of hailing a taxi. Glances at the ETA and fare, taps the mint button once, and relaxes. Values that the app never makes her think.

**준호 (Junho), 41, Seoul.** Frequent flyer, books TADA airport transfers the night before a 6am flight. Needs the reservation flow to be unambiguous — pickup time, vehicle, fare locked in. Distrusts surge pricing; appreciates that TADA shows an exact estimate, not a vague range.

**예린 (Yerin), 29, Seongnam.** Marketing manager who uses TADA Business for client pickups. Treats the calm interface as a reflection of professionalism — a chaotic app would embarrass her in front of a client in the back seat.

**민철 (Mincheol), 52, Seoul.** Less app-fluent; his daughter set up TADA for him. Relies on the single large mint CTA and the clear "곧 도착해요" status. Would abandon a screen that asked him to make more than one decision at a time.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no trip history)** | Single gentle line (`최근 이용 내역이 없어요`) in 14px/400 `#777777`, 12px gap, primary-mint CTA `호출하러 가기`. No harsh empty illustration. |
| **Empty (no cars nearby)** | One line `주변에 차량이 없어요` in 16px/600 `#1a1a1a`, subline `잠시 후 다시 시도해 주세요` 14px/400 `#777777`, retry button in mint. |
| **Empty (search no results)** | `'{검색어}'에 대한 장소를 찾지 못했어요` 14px/400 `#777777`, recent destinations below. |
| **Loading (matching driver)** | Mint pulsing ring animation over the map with `기사님을 찾고 있어요` 16px/600 `#1a1a1a`. No blocking spinner overlay. |
| **Loading (map / ETA)** | ETA renders as `--분` until resolved; never a skeleton block that looks like a real value. Map tiles fade in. |
| **Loading (call action)** | Mint button text swaps to a 24px `#ffffff` spinner — geometry unchanged for frame-stability. Prevents double-call. |
| **Error (inline form)** | Input border `#ff4452` 1px, helper text 13px/400 `#ff4452` below. One actionable sentence. |
| **Error (toast)** | `#1a1a1a` background, white 14px/500 text, 12px radius, 3s auto-dismiss. Above the bottom action bar. One sentence, no icon. |
| **Error (network / blocking)** | Centered: 16px/700 `#1a1a1a` headline (`연결이 불안정해요`), 14px/400 `#777777` subline, mint retry button. No illustration. |
| **Success (driver assigned)** | Trip card slides up: mint `배차 완료` status badge, driver photo + name + vehicle, ETA in 22px/700 tabular. Not a toast — a dedicated card. |
| **Success (trip complete)** | Dedicated receipt screen: `이용해 주셔서 감사해요` 22px/700 `#1a1a1a`, fare breakdown card, rating prompt, mint `확인` CTA. |
| **Skeleton** | `#f2f2f2` blocks at exact card dimensions, shimmer 1.2s. ETA / fare slots show `--`, never inferred placeholders. |
| **Disabled** | Button bg drops to `#bbbbbb`, text stays `#ffffff`. No outline tricks. |

## 15. Motion & Easing

**Durations** (named, not raw milliseconds):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox states |
| `motion-fast` | 150ms | Hover, focus, button press dim, small reveals |
| `motion-standard` | 250ms | Default — sheet opens, card expands, tab switches |
| `motion-slow` | 400ms | Emphasized — driver-assigned confirmation, success entry |
| `motion-page` | 320ms | Route push/pop |
| `motion-pulse` | 1400ms | Matching-driver pulse-ring loop |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, cards, route entries |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, sheet close |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions, map control reflow |
| `ease-gentle-spring` | `cubic-bezier(0.34, 1.3, 0.64, 1)` | Reserved — driver-assigned trip-card rise. Gentle reassurance, never bouncy. |

**Signature motions.**

1. **Matching pulse.** While finding a driver, a soft mint ring pulses outward from the user's map pin on `motion-pulse` loop — calm, breathing, never frantic. The opposite of a frantic loading spinner.
2. **Trip-card rise.** When a driver is assigned, the trip card rises from the bottom (`motion-slow / ease-gentle-spring`) with a gentle settle — the one place spring is licensed, signalling reassurance that the trip is handled.
3. **ETA tick.** When the ETA updates, the old number fades out and the new slides up 8px (`motion-fast / ease-enter`). Never cross-fade a number — a flickering ETA reads as a bug.
4. **Bottom-sheet presentation.** Sheets rise from `y+40px` (`motion-standard / ease-enter`) with a synchronized backdrop fade `rgba(0,0,0,0)` → `rgba(0,0,0,0.3)`. Dismissal `motion-fast / ease-exit`.
5. **Reduce motion.** Under `prefers-reduced-motion: reduce`, the matching pulse becomes a static ring, all `motion-*` collapse to `motion-instant`, cross-fades replace slides. The app stays fully usable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 — Direct verification (MCP playwright, 2026-05-27):
- https://www.tadatada.com/ (live marketing site, redirected from
  tadatada.com). Confirmed: body bg #ffffff, body color rgb(0,0,0),
  Pretendard/system sans; dominant brand/contrast field is a deep navy
  rgb(25,37,77) = #19254d (~84+ occurrences) on hero CTA banners
  ("UPDATE 회원가입 없이 바로 타다 부르기"); secondary deep navy
  rgb(56,79,133); light-blue accent rgb(128,202,255); card radius 4px on
  some marketing tiles. The current marketing site does NOT prominently
  display the mint as the dominant color — see assumed-vs-verified note.

Tier 2 — Press / secondary (WebSearch, 2026-05):
- https://namu.wiki/w/타다(서비스) — launch 2018-10-08, VCNC build,
  SOCAR acquisition of VCNC, "타다 금지법" regulatory history, pivot
  to franchise premium-taxi / reservation mobility.
- https://ko.wikipedia.org/wiki/타다_(플랫폼) — platform overview,
  van-hailing origin, regulatory pivot.
- https://thevc.kr/VCNC — VCNC company / investment profile.
- https://mydailybyte.com/about_tada/ — TADA as a comprehensive mobility
  brand presenting a new movement standard.

ASSUMED-VS-VERIFIED NOTE: The task brief assumed mint/teal #1EC59F as
primary. The CURRENT live marketing site (tadatada.com) is dominated by
deep navy #19254d, NOT mint. The mint-teal #1EC59F is TADA's well-known
signature brand identity established at the 2018 launch and associated
with the brand across its app history. This DESIGN.md documents the mint
as primary_color (the brand's identity) AND documents the live navy
#19254d as the dark marketing surface (§2 Semantic, §11 note). The exact
mint hex #1EC59F is the assumed brand value, NOT re-confirmed by a live
token grab on the current marketing site — flagged honestly.

Personas (§13) are fictional archetypes informed by publicly described
Korean premium-mobility user segments. Any resemblance to specific
individuals is unintended.

Interpretive claims (editorial, not documented TADA statements):
- "Space is the brand" / calm-positioning framing (§1, §11, §12) —
  editorial reading of the roomy-interior product origin and brand voice.
- The 6 numbered principles (§12) — synthesized from the mobility-app
  pattern + brand posture; not a published design-principles list.
- All §4 component geometry (mint button radius/padding, card radii,
  badge values) is reconciled from the calm soft-corner brand posture +
  mobility-UX conventions, NOT from a live app token grab (the app is
  native, not web-inspectable here). Re-verify against the live app /
  an official DS before treating as authoritative specs.
- The spring stance and signature motions (§15) — derived from the calm
  brand posture, not documented TADA motion rules.
-->

---

**Verified:** 2026-05-27 (omd:add-reference initial create — Tier 1 marketing-site inspect / Tier 2 press confirmed)
**Tier 1 sources:** www.tadatada.com (live playwright inspect — body `#000` on `#fff`, Pretendard/system sans; dominant marketing field navy `#19254d`; light-blue accent `#80caff`). Note: live marketing site is navy-led, not mint-led.
**Tier 2 sources:** getdesign.md/tada — not checked. styles.refero.design — not checked. Namu Wiki + Korean Wikipedia + THE VC + mydailybyte (2018 launch, VCNC/SOCAR, 타다 금지법 regulatory pivot, premium-mobility repositioning).
**Style ref:** `toss` (KR calm product-tone scaffolding).
**Conflicts unresolved:** Assumed primary mint `#1ec59f` is TADA's signature brand identity but the CURRENT marketing site is navy-led (`#19254d`). Documented mint as `primary_color` (brand identity) with navy retained as the dark marketing surface. The exact mint hex is the assumed brand value, NOT re-confirmed by live token grab on the current site. Native app not web-inspectable; §4 component geometry reconciled from brand posture + mobility-UX conventions. Re-verify against the live app or an official DS.
