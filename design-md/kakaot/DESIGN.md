---
id: kakaot
name: Kakao T
country: KR
category: consumer-tech
homepage: "https://www.kakaomobility.com"
primary_color: "#FEE500"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=kakaomobility.com&sz=128"
verified: "2026-05-27"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#fee500"
    primary-hover: "#f2d900"
    brand: "#fee500"
    canvas: "#ffffff"
    foreground: "#191919"
    muted: "#76787a"
    on-primary: "#191919"
    surface: "#f5f6f7"
    hairline: "#e5e6e8"
    body: "#4b4f54"
    text-strong: "#26282b"
    text-tertiary: "#a2a4a6"
    success: "#0fb882"
    info: "#3478f6"
    warning: "#ff8a00"
    error: "#f5444c"
    black: "#000000"
  typography:
    family: { sans: "Pretendard", mono: "SF Mono" }
    display-hero:   { size: 30, weight: 700, lineHeight: 1.3, use: "Marketing hero, onboarding" }
    heading-large:  { size: 22, weight: 700, lineHeight: 1.35, use: "Sheet headers" }
    heading:        { size: 18, weight: 600, lineHeight: 1.4, use: "Card titles, vehicle-class headers" }
    subtitle:       { size: 16, weight: 600, lineHeight: 1.5, use: "List headers, fare summary label" }
    body-large:     { size: 16, weight: 400, lineHeight: 1.5, use: "Descriptions, address detail" }
    body:           { size: 14, weight: 400, lineHeight: 1.5, use: "Standard reading text, trip metadata" }
    label:          { size: 16, weight: 600, lineHeight: 1.4, use: "Button labels" }
    caption:        { size: 12, weight: 400, lineHeight: 1.4, use: "Timestamps, fine print" }
    fare-display:   { size: 24, weight: 700, use: "Estimated/final fare, tabular numerals" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32 }
  rounded: { sm: 8, md: 12, lg: 16, full: 9999 }
  shadow:
    card: "0px 2px 12px rgba(0,0,0,0.08)"
    sheet: "0px -4px 16px rgba(0,0,0,0.10)"
    floating: "0px 4px 16px rgba(0,0,0,0.16)"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#fee500", fg: "#191919", radius: "12px", padding: "14px 20px", height: "52px", font: "16px / 600", states: "pressed #f2d900", disabled: "bg #f5f6f7 fg #a2a4a6", use: "Primary CTA 호출하기 / 결제하기" }
    button-dark: { type: button, bg: "#191919", fg: "#ffffff", radius: "12px", padding: "14px 20px", font: "16px / 600", use: "Strong action where yellow too loud 로그인 / 다음" }
    button-outline: { type: button, bg: "#ffffff", fg: "#26282b", border: "1px solid #d1d3d5", radius: "12px", padding: "14px 20px", font: "16px / 600", use: "Secondary action 취소" }
    button-danger: { type: button, bg: "#ffffff", fg: "#f5444c", border: "1px solid #f5444c", radius: "12px", padding: "14px 20px", font: "16px / 600", use: "Destructive 호출 취소" }
    input-search: { type: input, bg: "#f5f6f7", fg: "#26282b", radius: "12px", padding: "14px 16px", font: "16px / 400", focus: "1px border #191919", use: "어디로 갈까요? destination search" }
    input-error: { type: input, bg: "#ffffff", fg: "#26282b", border: "1px solid #f5444c", radius: "12px", padding: "14px 16px", font: "16px / 400", use: "Invalid input" }
    card-vehicle: { type: card, bg: "#ffffff", border: "1px solid #e5e6e8", radius: "12px", padding: "16px", active: "2px border #191919 + yellow icon accent", use: "Vehicle-class selection rows" }
    card-trip: { type: card, bg: "#ffffff", radius: "16px", padding: "20px", shadow: "0px 2px 12px rgba(0,0,0,0.08)", use: "Active-trip summary, ride receipt" }
    badge-status: { type: badge, bg: "#f5f6f7", fg: "#4b4f54", radius: "999px", padding: "4px 12px", font: "12px / 600", use: "Filter chips, vehicle tags" }
    badge-live: { type: badge, bg: "rgba(15,184,130,0.12)", fg: "#0fb882", radius: "999px", padding: "4px 10px", font: "12px / 700", use: "도착 / 운행 중 status pill" }
    dialog-sheet: { type: dialog, bg: "#ffffff", fg: "#191919", radius: "20px", padding: "20px", shadow: "0px -4px 16px rgba(0,0,0,0.10)", use: "Persistent bottom sheet over the map, 36x4px handle" }
    tab-bottom: { type: tab, bg: "#ffffff", fg: "#a2a4a6", border: "1px solid #e5e6e8", font: "11px / 500", active: "text/icon #191919", use: "홈 / 이용내역 / 결제 / 전체 nav" }
    toast-snackbar: { type: toast, bg: "#26282b", fg: "#ffffff", radius: "12px", padding: "12px 16px", shadow: "0px 4px 12px rgba(0,0,0,0.16)", font: "14px / 500", use: "Transient feedback, 3s auto-dismiss" }
---

# Design System Inspiration of Kakao T (카카오 T)

## 1. Visual Theme & Atmosphere

Kakao T is the all-in-one mobility app from Kakao Mobility — taxi, designated-driver (대리운전), parking, bike, navigation, flights, and quick-delivery, all behind one yellow "T". Its visual identity sits on a knife's edge between two registers. The brand color is the famous **Kakao yellow `#FEE500`** — the same warm, friendly, instantly-Korean yellow that KakaoTalk made a national signal — but the mobility product itself reads far more sober than that yellow alone would suggest. On the corporate Kakao Mobility surface the palette is black-and-white-dominant: deep charcoal headings, generous whitespace, restrained sans-serif type, with yellow used as a sparing accent rather than a flood. The atmosphere is "friendly infrastructure" — approachable enough that anyone hails a taxi without thinking, serious enough to be trusted with real-time location and payment.

That black-led restraint is deliberate. A mobility app is, at the moment of use, mostly a **map**: a near-full-screen view of streets, cars, and routes. Chrome must recede so the map and the live trip state dominate. Yellow then does precise, high-attention work — the primary "호출하기" (call) CTA, the active vehicle marker, the matched-driver highlight. Against a map and white sheets, `#FEE500` is a beacon, not a wallpaper. Black (`#000000` / near-black `#191919`) carries text and the secondary "dark" actions, giving the brand its grown-up, get-you-there-safely tone.

Typography follows Kakao's house direction — the custom **Kakao** typeface family (Kakao OTF / Kakao Sandoll) for branded surfaces, with **Pretendard** and the standard Korean system stack as the practical product-UI fallback. Type stays clean, sentence-case, and legible at a glance, because riders read it in motion: on a moving vehicle, at a curb, in one hand.

**Key Characteristics:**
- Kakao yellow `#FEE500` as the brand color and high-attention CTA accent (not a flood)
- Black / near-black (`#000000` / `#191919`) leading text and "dark" actions — the grown-up half of the palette
- Map-first: chrome recedes so the live map and trip state dominate
- Kakao house typeface for brand surfaces; Pretendard / Korean system stack for product UI
- Friendly-but-trustworthy "mobility infrastructure" tone, not playful-cute
- Rounded, soft component geometry (8–12px radii) keeping the yellow approachable
- Bottom-sheet-driven flows over a persistent map canvas

## 2. Color Palette & Roles

Kakao Mobility does not publish a public UI token layer. Brand yellow `#FEE500` is the well-documented Kakao corporate color; product UI grays/blacks below follow the live black-led corporate surface (kakaomobility.com, WebFetch 2026-05-27) and standard Korean app conventions. Treat product hexes as conventional, not from a documented token doc.

### Brand
- **Kakao Yellow** (`#FEE500`): The signature color. Primary CTA (호출하기), active vehicle marker, matched-driver highlight, logo lockup. High-attention accent — used sparingly, never as a full background flood.
- **Kakao Yellow Pressed** (`#F2D900`): Slightly deeper yellow for pressed/hover on the primary CTA.

### Text / Dark
- **Kakao Black** (`#000000`): Logo "T", strongest brand text, "dark" primary action backgrounds.
- **Near Black** (`#191919`): Primary headings and labels — the warm near-black of the corporate surface.
- **Text Strong** (`#26282B`): Strong body labels, list titles.
- **Text Body** (`#4B4F54`): Body text, descriptions, trip metadata.
- **Text Secondary** (`#76787A`): Secondary labels, captions, timestamps.
- **Text Tertiary** (`#A2A4A6`): Placeholder, disabled labels, low-emphasis fine print.

### Surfaces
- **Pure White** (`#FFFFFF`): Bottom sheets, cards, the chrome over the map.
- **Surface Gray** (`#F5F6F7`): Section backgrounds, inactive segmented backgrounds, skeleton blocks.
- **Surface Gray Strong** (`#EBECED`): Dividers' surface variant, secondary fills.

### Borders
- **Divider** (`#E5E6E8`): Hairline row separators, card borders.
- **Border Strong** (`#D1D3D5`): Active input outlines, emphasized edges.

### Semantic
- **Success** (`#0FB882`): Trip-complete, payment-confirmed, on-the-way green.
- **Info / In-progress** (`#3478F6`): En-route status, ETA accent, map route line.
- **Warning** (`#FF8A00`): Surge / wait advisories, attention states.
- **Error** (`#F5444C`): Cancellation, payment failure, destructive actions.

## 3. Typography Rules

### Font Family
- **Brand**: `"Kakao", "Kakao OTF", ...` — the Kakao house typeface for branded / marketing surfaces
- **Product UI**: `Pretendard, "Apple SD Gothic Neo", "Malgun Gothic", -apple-system, BlinkMacSystemFont, "Noto Sans KR", sans-serif`
- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace` (fare/ETA tabular contexts)

### Hierarchy

| Role | Size | Weight | Line Height | Use |
|------|------|--------|-------------|-----|
| Display Hero | 28–32px | 700 | 1.3 | Marketing hero, onboarding |
| Heading Large | 22px | 700 | 1.35 | Sheet headers, "어디로 갈까요?" |
| Heading | 18px | 600 | 1.4 | Card titles, vehicle-class headers |
| Subtitle | 16px | 600 | 1.5 | List headers, fare summary label |
| Body Large | 16px | 400 | 1.5 | Descriptions, address detail |
| Body | 14px | 400 | 1.5 | Standard reading text, trip metadata |
| Label / CTA | 16px | 600 | 1.4 | Button labels (호출하기) |
| Caption | 12px | 400 | 1.4 | Timestamps, fine print, ETA sublabels |
| Fare Display | 24px+ | 700 | tight | Estimated/final fare — tabular numerals |

### Conventions
- **Three weights**: 700 for headings + fares, 600 for CTAs/emphasis, 400 for body.
- **Tabular numerals for money + time**: fares, ETAs, distances use fixed-width digits so they don't jitter as they update live.
- **Sentence-case, no all-caps**: Korean and Latin both stay sentence-case — riders read in motion.
- **Glanceable hierarchy**: trip state (ETA, fare, status) is always the highest-contrast text on screen.

## 4. Component Stylings

Kakao Mobility publishes no public component spec; geometry below reflects the live corporate surface and standard Kakao/Korean app conventions. Treat as conventional.

### Buttons

**Primary (호출 / Yellow)**
- Background: `#FEE500`
- Text: `#191919`
- Border: none
- Radius: 12px
- Padding: 14px 20px
- Font: 16px / 600 / Pretendard
- Pressed: background `#F2D900`
- Disabled: background `#F5F6F7`, text `#A2A4A6`
- Use: The primary call-to-action — 호출하기, 결제하기. Black text on yellow for contrast. ~52px tall.

**Dark (Secondary primary)**
- Background: `#191919`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 14px 20px
- Font: 16px / 600 / Pretendard
- Use: Strong action where yellow would be too loud (로그인, 다음). The grown-up half of the palette.

**Outline / Ghost**
- Background: `#FFFFFF`
- Text: `#26282B`
- Border: 1px solid `#D1D3D5`
- Radius: 12px
- Padding: 14px 20px
- Font: 16px / 600 / Pretendard
- Use: Secondary action paired with a primary (취소, 다른 차량 보기)

**Danger**
- Background: `#FFFFFF`
- Text: `#F5444C`
- Border: 1px solid `#F5444C`
- Radius: 12px
- Padding: 14px 20px
- Font: 16px / 600 / Pretendard
- Use: Destructive (호출 취소)

### Inputs

**Search / Address Field**
- Background: `#F5F6F7`
- Text: `#26282B`
- Border: none (filled)
- Radius: 12px
- Padding: 14px 16px
- Font: 16px / 400 / Pretendard
- Placeholder: `#A2A4A6`
- Focus: 1px border `#191919`
- Use: "어디로 갈까요?" destination search — the entry point of every trip

**Error**
- Background: `#FFFFFF`
- Text: `#26282B`
- Border: 1px solid `#F5444C`
- Radius: 12px
- Padding: 14px 16px
- Font: 16px / 400 / Pretendard
- Use: Invalid input, paired with `#F5444C` caption

### Cards

**Vehicle-Class Card**
- Background: `#FFFFFF`
- Border: 1px solid `#E5E6E8`
- Radius: 12px
- Padding: 16px
- Shadow: none (border-defined)
- Selected: 2px border `#191919` + subtle `#FEE500` accent on the class icon
- Use: 일반 / 블루 / 모범 / 벤티 selection rows in the call sheet

**Trip / Receipt Card**
- Background: `#FFFFFF`
- Border: none
- Radius: 16px
- Padding: 20px
- Shadow: `0px 2px 12px rgba(0,0,0,0.08)`
- Use: Active-trip summary, ride receipt — fare 24px/700 tabular

### Badges / Chips

**Status Chip**
- Background: `#F5F6F7`
- Text: `#4B4F54`
- Border: none
- Radius: 999px
- Padding: 4px 12px
- Font: 12px / 600 / Pretendard
- Use: Filter chips, vehicle tags (예약, 추천)

**Live Status Badge**
- Background: `rgba(15,184,130,0.12)` (success) / `rgba(52,120,246,0.12)` (en-route)
- Text: `#0FB882` / `#3478F6`
- Border: none
- Radius: 999px
- Padding: 4px 10px
- Font: 12px / 700 / Pretendard
- Use: 도착 / 운행 중 status pill on the trip card

### Bottom Sheet (signature surface)

**Trip Sheet**
- Background: `#FFFFFF`
- Text: `#191919`
- Border: none
- Radius: 20px (top corners only)
- Padding: 20px
- Shadow: `0px -4px 16px rgba(0,0,0,0.10)`
- Handle: 36px × 4px `#E5E6E8` pill, centered top
- Use: The persistent sheet riding over the map — destination, vehicle pick, matched-driver, en-route ETA. The core mobility interaction surface.

### Tabs / Nav

**Bottom Tab (Active)**
- Background: `#FFFFFF`
- Active text/icon: `#191919`
- Inactive: `#A2A4A6`
- Border: 1px solid `#E5E6E8` (top only)
- Font: 11px / 500 / Pretendard
- Use: 홈 / 이용내역 / 결제 / 전체 navigation

### Toasts

**Snackbar**
- Background: `#26282B`
- Text: `#FFFFFF`
- Border: none
- Radius: 12px
- Padding: 12px 16px
- Shadow: `0px 4px 12px rgba(0,0,0,0.16)`
- Font: 14px / 500 / Pretendard
- Use: "호출이 취소되었어요" transient feedback, 3s auto-dismiss

---

**Verified:** 2026-05-27
**Tier 1 sources:** kakaomobility.com (live WebFetch 2026-05-27 — black-dominant corporate surface, generous whitespace, minimal text-link CTAs `자세히 보기`, Korean hero `우리의 기술로 생활을 움직입니다`, yellow `#FEE500` notably reserved/sparing on the corporate page). Kakao yellow `#FEE500` is the widely-documented Kakao corporate brand color.
**Tier 2 sources:** getdesign.md/kakaot — not checked. styles.refero.design — not checked. Kakao house typeface (Kakao OTF / Sandoll) referenced from SandollCloud listing; product-UI Pretendard fallback is a convention, not a verified token.
**Conflicts unresolved:** Brand yellow `#FEE500` (high-attention accent) vs. black-led product/corporate surface — resolved as a documented two-register palette (yellow = beacon CTA, black = body + dark actions), consistent with the live corporate page where yellow is sparing.

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4, 8, 12, 16, 20, 24, 32
- Sheet padding: 20px; map chrome insets: 16px

### Grid & Container
- Map-canvas-first: a near-full-screen map with a draggable bottom sheet over it
- Sheet content: single-column, full-width with 20px h-padding
- Marketing/web: centered column, max ~1200px

### Whitespace Philosophy
- **The map is the page.** Chrome recedes; the live map and trip state get the screen.
- **Sheet states stack.** Each trip step (destination → vehicle → matching → en-route) is its own sheet height; the sheet grows/shrinks rather than navigating pages.
- **Glance density.** Trip-critical info (ETA, fare, status) is large and high-contrast; everything else recedes.

### Border Radius Scale
- Compact (8px): chips' inner, small controls
- Comfortable (12px): buttons, inputs, vehicle cards
- Large (16px): trip/receipt cards
- Sheet (20px): bottom-sheet top corners
- Pill (999px): status chips, handle

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, border-defined | Cards on white, list rows |
| Sheet (1) | `0px -4px 16px rgba(0,0,0,0.10)` | Bottom sheet over the map |
| Card (2) | `0px 2px 12px rgba(0,0,0,0.08)` | Trip / receipt cards |
| Floating (3) | `0px 4px 16px rgba(0,0,0,0.16)` | Toasts, floating map buttons (현재 위치) |

**Shadow philosophy.** Elevation matters most where chrome floats over the map — the bottom sheet and floating map controls cast soft, neutral, single-layer shadows so they read as "above the map." On flat white surfaces, depth is border-defined to keep the look calm. No colored shadows.

## 7. Do's and Don'ts

### Do
- Use `#FEE500` for the single primary CTA and live active markers — high-attention, sparing
- Put black `#191919` text on yellow buttons for contrast (never white on yellow)
- Let the map dominate; keep chrome to the bottom sheet and minimal top controls
- Use tabular numerals for fares, ETAs, and distances
- Use the dark `#191919` button for strong actions where yellow would be too loud

### Don't
- Don't flood backgrounds with yellow — it's a beacon, not a wallpaper
- Don't use white text on the yellow CTA (fails contrast; black is correct)
- Don't crowd the map with chrome — trip state lives in the sheet
- Don't introduce a second saturated brand hue competing with yellow
- Don't make the tone cute/playful — mobility is friendly infrastructure, trusted with location + payment

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (Primary) | <768px | Full-screen map + draggable bottom sheet; the canonical experience |
| Tablet | 768–1024px | Map + side panel for trip flow |
| Desktop (Web) | >1024px | Marketing/corporate layout, centered ~1200px column |

### Touch Targets
- Primary CTA: ~52px tall
- Vehicle-class rows: minimum 56px
- Floating map controls: 44–48px circular targets
- Sheet handle: large drag affordance

### Collapsing Strategy
- The bottom sheet is the responsive unit — it expands to fill on small screens, becomes a fixed side panel on large
- Map stays full-bleed behind the sheet at all sizes

### Image / Map Behavior
- Map tiles full-bleed; vehicle markers scale with zoom
- Vehicle-class icons: consistent 40–48px, yellow accent on selected

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Kakao Yellow `#FEE500`, black `#191919` text (pressed `#F2D900`)
- Dark action: `#191919` bg, white text
- Heading: `#191919`; body `#4B4F54`; secondary `#76787A`
- Surface: white `#FFFFFF`; gray `#F5F6F7`; divider `#E5E6E8`
- En-route: `#3478F6`; success `#0FB882`; error `#F5444C`

### Example Component Prompts
- "Build a Kakao T call button: bg `#FEE500`, text `#191919` 16px/600, 12px radius, 14px 20px padding, ~52px tall, full-width. Pressed: bg `#F2D900`. Disabled: bg `#F5F6F7`, text `#A2A4A6`."
- "Create a Kakao T trip bottom sheet: white bg, 20px top-corner radius, `0px -4px 16px rgba(0,0,0,0.10)` shadow, 36×4px `#E5E6E8` handle centered top. Inside: matched-driver name 18px/600, ETA 24px/700 tabular, fare 24px/700 tabular, status pill `운행 중` in `#3478F6` on `rgba(52,120,246,0.12)`."
- "Design a vehicle-class card: white bg, 1px `#E5E6E8` border, 12px radius, 16px padding. Selected: 2px `#191919` border + yellow accent on the class icon. Class name 16px/600 `#26282B`, est. fare 14px/400 `#76787A` tabular."
- "Create a destination search field: bg `#F5F6F7`, no border, 12px radius, 14px 16px padding, 16px/400 text, placeholder `어디로 갈까요?` in `#A2A4A6`."

### Iteration Guide
1. Yellow `#FEE500` = primary CTA + live markers only; black text on it
2. Map dominates; chrome lives in the bottom sheet
3. Pretendard product stack with Korean fallbacks
4. Fares/ETAs/distances = tabular numerals, high contrast
5. Radius: 12px buttons/cards, 16px trip cards, 20px sheet
6. Dark `#191919` button for strong non-yellow actions

---

## 10. Voice & Tone

Kakao T speaks like a calm, capable dispatcher who's already on it — friendly, brief, and reassuring, never chatty. The default register is soft-polite `해요체` (`잠시만 기다려 주세요`, `기사님을 찾고 있어요`), warm but trustworthy. Korean is the unquestioned primary voice. Copy is action-and-status-oriented because the user is mid-task and often in motion: tell them what's happening and what's next in as few words as possible. No exclamation-mark pressure, no marketing superlatives on trip surfaces.

| Context | Tone |
|---|---|
| CTAs | Short Korean verb (`호출하기`, `결제하기`, `호출 취소`). |
| Status updates | Present-progressive, reassuring (`기사님을 찾고 있어요`, `차량이 도착했어요`). |
| Success toasts | Past-tense single sentence (`결제가 완료되었어요`). No emoji on system surfaces. |
| Error messages | Blameless, specific, one action (`주변에 차량이 없어요. 잠시 후 다시 시도해 주세요`). Never `오류가 발생했습니다`. |
| Empty states | Warm + one action (`최근 이용 내역이 없어요`). |
| Safety / legal | Formal `합니다` register — the single exception (location, payment, 안심 disclosures). |

**Forbidden phrases.** `오류가 발생했습니다` (generic error), exclamation-as-pressure on CTAs, marketing superlatives (`최고의`, `역대급`) on trip chrome, English-first strings on Korean surfaces, emoji on system-generated trip toasts.

**Voice samples.**
- `우리의 기술로 생활을 움직입니다` — corporate mission line. <!-- verified: kakaomobility.com via WebFetch 2026-05-27 -->
- `자세히 보기` — corporate CTA pattern. <!-- verified: kakaomobility.com via WebFetch 2026-05-27 -->
- `기사님을 찾고 있어요` — illustrative matching-status copy. <!-- illustrative: follows Kakao T's matching flow; not verified verbatim -->
- `차량이 도착했어요` — illustrative arrival notification. <!-- illustrative: not verified as live copy -->

## 11. Brand Narrative

Kakao T (카카오 T) is the mobility super-app of **Kakao Mobility Corp.**, the transportation arm of the Kakao group. It launched in 2017 — the "T" stands for *transportation* — consolidating what had been separate Kakao services (Kakao Taxi from 2015, Kakao Driver, Kakao Parking) into one app. Today it spans taxi, designated-driver (대리운전), parking, bike, navigation, flights, and quick-delivery: the single yellow icon Koreans tap to get from anywhere to anywhere.

The brand inherits Kakao's most powerful asset — the yellow. KakaoTalk made `#FEE500` a national signal of "the friendly app everyone uses," and Kakao T trades on that familiarity to make hailing a taxi feel as ordinary as sending a message. But mobility carries higher stakes than chat — real-time location, payment, a stranger's car — so the product dials the playfulness down: the corporate and product surfaces are black-led and sober, with yellow reserved for the moments that matter (the call button, the matched car). The design thesis is *friendly infrastructure*: approachable enough to use without thinking, serious enough to trust with your route home.

What Kakao T refuses: the loud, gamified maximalism of some consumer apps (the map and trip state must stay legible), and the cold, utilitarian gray of legacy transit interfaces. It occupies the warm middle — yellow when it counts, calm everywhere else.

## 12. Principles

1. **The map is the product.** At the moment of use the app is mostly a live map; chrome must recede. *UI implication:* trip state lives in a bottom sheet over a full-bleed map, not in stacked full-screen pages.
2. **Yellow is a beacon, not a wallpaper.** `#FEE500` marks the single most important action and the live state. *UI implication:* one yellow CTA per screen; backgrounds stay white/black; black text on yellow for contrast.
3. **Black is the grown-up half.** The sober black-led palette is what lets a playful yellow be trusted with location and payment. *UI implication:* strong non-yellow actions and all body text use `#191919`.
4. **Glance, don't read.** Riders use the app in motion. *UI implication:* trip-critical info (ETA, fare, status) is the highest-contrast, largest text; everything else recedes.
5. **State over navigation.** Each trip step grows the sheet rather than pushing a new page. *UI implication:* model flows as sheet heights and live status, not screen stacks.
6. **Reassure, don't pressure.** Mobility copy is calm status, never urgency marketing. *UI implication:* present-progressive `해요체` status lines; no exclamation pressure on CTAs.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Korean mobility-app user segments, not individual people.*

**진우 (Jin-woo), 33, Seoul.** Office worker who takes a Kakao T taxi home after late nights. Wants one tap to call, a clear ETA, and auto-payment so he never fumbles cash. Trusts the matched-driver screen and the live map; ignores everything else.

**박부장 (Mr. Park), 49, Seongnam.** Frequent business traveler. Uses 모범/벤티 classes and 예약 for airport runs, and 대리운전 after dinners. Values reliability and a clear fare estimate over playfulness — the sober black UI is exactly why he trusts it.

**소연 (So-yeon), 26, Busan.** Mixes bike, taxi, and navigation depending on the trip. Hails late at night and relies on the 안심 (safety) features — sharing her route, the driver info. Reads the status line at a glance, on the move, one-handed.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no ride history)** | Single `#76787A` line (`최근 이용 내역이 없어요`) + one yellow CTA (`택시 호출하기`). No clutter. |
| **Empty (no nearby vehicles)** | `#76787A` line (`주변에 차량이 없어요`) + retry; map stays visible. |
| **Loading (matching driver)** | Pulsing radar/ring animation over the map in `#FEE500`; sheet shows `기사님을 찾고 있어요` with a subtle progress shimmer. |
| **Loading (sheet first paint)** | Skeleton blocks at `#F5F6F7` matching the sheet layout. Fares render as `--` until resolved. |
| **Error (call failed)** | Snackbar `#26282B` white text (`호출에 실패했어요. 다시 시도해 주세요`), 3s. Map unaffected. |
| **Error (inline field)** | Input border `#F5444C`, caption below in `#F5444C` 12px, one actionable sentence. |
| **Success (matched)** | Sheet transitions to matched-driver card — name, vehicle, plate, ETA 24px/700, live status pill `운행 중` in `#3478F6`. |
| **Success (payment)** | Receipt card with `#0FB882` checkmark, final fare 24px/700 tabular, single `확인`. |
| **Skeleton** | `#F5F6F7` blocks at exact dimensions, ~1.2s shimmer, component-radius rounding. Never on live fares (show `--`). |
| **Disabled (CTA)** | Yellow button → bg `#F5F6F7`, text `#A2A4A6`. Geometry unchanged. |

## 15. Motion & Easing

Kakao T's motion is purposeful and reassuring — the sheet glides, the map pans smoothly, and live status updates feel calm rather than jumpy.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, chip select |
| `motion-fast` | 150ms | Hover, press, small reveals |
| `motion-standard` | 250ms | Sheet snap, card expand, tab switch |
| `motion-slow` | 400ms | Map fly-to, matched-driver reveal |
| `motion-sheet` | 300ms | Bottom-sheet height transitions between trip steps |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default — 90% of motion |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, toasts appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-emphasized` | `cubic-bezier(0.2, 0.0, 0, 1)` | Sheet step transitions, map fly-to |

**Spring stance.** Spring/overshoot is avoided on trip surfaces — bouncy motion would undercut the reassurance a mobility app needs. A gentle settle, not a bounce.

**Signature motions.**
1. **Sheet step transition.** As the trip advances (destination → vehicle → matching → en-route), the bottom sheet animates its height with `motion-sheet / ease-emphasized` while content cross-fades. The sheet *grows*, it never navigates.
2. **Driver-matching radar.** While matching, a yellow `#FEE500` radar/ring pulses outward from the pickup pin over the map — the one place the brand yellow becomes kinetic, signaling "we're finding your car."
3. **Map fly-to.** On pickup/destination set, the map pans-and-zooms over `motion-slow / ease-emphasized` to frame the route.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, the radar becomes a static indicator, sheet transitions become instant opacity changes, and map fly-to snaps. No exceptions.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 (UI tokens, §1–9): kakaomobility.com live WebFetch 2026-05-27 —
black-dominant corporate surface, generous whitespace, minimal text-link CTAs
(`자세히 보기`), Korean mission `우리의 기술로 생활을 움직입니다`, yellow
`#FEE500` reserved/sparing. Kakao yellow `#FEE500` is the widely-documented
Kakao corporate color. Kakao house typeface (Kakao OTF / Sandoll) per
SandollCloud listing; Pretendard product-UI fallback and product-UI hexes are
CONVENTIONAL (no public Kakao Mobility token doc), not verified tokens.

Tier 2 (founding/narrative): Kakao T launched 2017 under Kakao Mobility Corp.,
"T" = transportation, consolidating Kakao Taxi (2015) / Driver / Parking.
Service scope (taxi/대리/parking/bike/nav/flights/quick) per Kakao corporate
and app-store listings. General industry knowledge for the rest.

Voice samples: `우리의 기술로 생활을 움직입니다`, `자세히 보기` verified live.
`기사님을 찾고 있어요`, `차량이 도착했어요`, `결제가 완료되었어요` are
ILLUSTRATIVE patterns following Kakao T's matching/trip flow and `해요체`
register; not confirmed verbatim.

Personas (§13) are fictional archetypes. Any resemblance to specific users is
unintended.
-->
