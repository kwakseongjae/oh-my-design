---
id: triple
name: Triple
country: KR
category: travel
homepage: "https://triple.guide"
primary_color: "#368FFF"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=triple.guide&sz=128"
verified: "2026-05-19"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#368fff"
    primary-pressed: "#1a85e8"
    sky-accent: "#1aadf6"
    blue-tint: "#f1f7ff"
    canvas: "#ffffff"
    surface: "#f5f6f7"
    heading: "#1b1d1f"
    body: "#3a3e41"
    secondary: "#7e848a"
    tertiary: "#adb1b5"
    border: "#e8eaec"
    border-strong: "#d5d8db"
    success: "#22c55e"
    highlight-teal: "#0ecedb"
    error: "#ff3b30"
    warning: "#faad14"
  typography:
    family: { sans: "-apple-system", mono: "-apple-system" }
    hero:        { size: 32, weight: 700, lineHeight: 1.3, use: "Intro hero, feature headlines" }
    section:     { size: 22, weight: 700, lineHeight: 1.35, use: "Itinerary day headers, section titles" }
    card-title:  { size: 16, weight: 600, lineHeight: 1.4, use: "Place/itinerary card titles" }
    cta:         { size: 18, weight: 700, lineHeight: 1.4, use: "Primary buttons" }
    body:        { size: 16, weight: 400, lineHeight: 1.5, use: "Descriptions, tip copy" }
    meta:        { size: 14, weight: 400, lineHeight: 1.4, use: "Place metadata, distance, hours" }
    caption:     { size: 12, weight: 400, lineHeight: 1.4, use: "Badges, fine print" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 12, md: 12, lg: 20, full: 9999 }
  shadow:
    none: "none"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#368fff", fg: "#ffffff", radius: 9999, padding: "0 28px", font: "18/700", use: "Primary CTA, 56px pill" }
    button-outline: { type: button, bg: "#ffffff", fg: "#368fff", radius: 9999, padding: "0 28px", font: "18/700", use: "Secondary action, 1px border #368fff" }
    button-soft: { type: button, bg: "#f1f7ff", fg: "#368fff", radius: 9999, padding: "0 24px", font: "16/600", use: "Low-emphasis action" }
    button-ghost: { type: button, fg: "#3a3e41", font: "16/600", use: "Tertiary nav, 더보기" }
    input-search: { type: input, bg: "#f5f6f7", fg: "#1b1d1f", radius: 12, padding: "12px 16px", font: "16/400", use: "Destination/place search" }
    card-place: { type: card, bg: "#ffffff", radius: 20, padding: "16px", use: "Place/itinerary card, 1px border #e8eaec" }
    card-tip: { type: card, bg: "#f1f7ff", fg: "#3a3e41", radius: 20, padding: "20px", font: "16/400", use: "Travel tips, contextual info" }
    chip-filter: { type: badge, bg: "#f5f6f7", fg: "#3a3e41", radius: 9999, padding: "6px 14px", font: "13/500", use: "Place-type filters", active: "text #368fff" }
    chip-selected: { type: badge, fg: "#368fff", radius: 12, use: "Selected itinerary item, 1px border #368fff" }
    tab-nav: { type: tab, fg: "#7e848a", font: "12/500", use: "Bottom/top nav switcher", active: "icon+label #368fff" }
    toast: { type: toast, bg: "#1b1d1f", fg: "#ffffff", radius: 12, padding: "12px 16px", use: "Snackbar transient feedback" }
    sheet: { type: dialog, bg: "#ffffff", fg: "#1b1d1f", radius: 20, padding: "24px", use: "Modal / bottom sheet" }
---

# Design System Inspiration of Triple (트리플)

## 1. Visual Theme & Atmosphere

Triple is Korea's personal travel-planning app — "나를 아는 여행 앱, 트리플" (the travel app that knows me). Where most travel products are booking marketplaces, Triple's core is the *itinerary*: a friendly companion that helps you plan a trip day by day, recommends places that fit your taste, and gets richer the more you plan with friends. The interface reflects that companion role — bright, clean, approachable, with a single cheerful sky-blue carrying the entire interactive system and lots of soft, rounded, pill-shaped geometry that feels more like a chat app than a corporate OTA.

The signature is a vivid friendly blue, observed live as `#368FFF`, used everywhere a user acts: the primary "일정 살펴보기" CTA, active states, links, and selection. It's a brighter, more optimistic blue than fintech-trust blues — closer to a clear-sky travel-day blue. It's reinforced by a very light blue tint (`#F1F7FF`) for informational cards and an even subtler `rgba(54,143,255,0.07)` wash for selected/highlighted regions, so the blue family quietly tints the whole surface without ever overwhelming the white canvas. The CTA's most distinctive trait is its **pill radius (36px)** at a tall 56px height — a soft, tappable, friendly button that signals "this is easy."

Typography rides the platform's native system sans (`-apple-system, "system-ui", "Segoe UI", Helvetica, Arial, ...`) — Triple is mobile-app-first, and the web mirrors the app's native-font feel — rendered in black-to-gray on white. Geometry is the brand's tactile language: pill buttons (36px), rounded cards (20px), and soft tinted blocks. The atmosphere is "your cheerful travel buddy with a map" — light, personal, collaborative, and a little playful.

**Key Characteristics:**
- Friendly sky-blue (`#368FFF`) as the single interactive accent — CTAs, active, links, selection
- Pill-radius CTAs (`36px` radius at 56px height) — soft, tappable, "easy" geometry
- Light blue tint family (`#F1F7FF`, `rgba(54,143,255,0.07)`) washing info/selected surfaces
- Clean white canvas with rounded cards (`20px`)
- Native system-sans type stack (mobile-app-first), black→gray on white
- Personal, collaborative, slightly playful — a travel companion, not a marketplace
- Itinerary-first: the day-by-day plan is the product

## 2. Color Palette & Roles

Colors below are extracted from live computed styles on triple.guide/intro (2026-05-19). Triple does not publish a public token layer; values are observed.

### Brand / Interactive
- **Triple Blue** (`#368FFF`): Primary interactive — CTA background, active states, links, selection. Observed `rgb(54, 143, 255)`, the most-frequent saturated color (39 occurrences). *(Brief-provided value was `#2EA6FF`; live observed `#368FFF` — use the live value.)*
- **Triple Blue Pressed** (`#1A85E8`): Hover/pressed darkening of Triple Blue.
- **Sky Accent** (`#1AADF6`): A lighter cyan-blue seen in secondary accents/illustration. Observed `rgb(26, 173, 246)`.

### Tints (Blue Family)
- **Blue Tint Card** (`#F1F7FF`): Light blue card/info-block background. Observed `rgb(241, 247, 255)`.
- **Blue Wash** (`rgba(54,143,255,0.07)`): Selected/highlighted region wash. Observed directly.

### Surfaces
- **Canvas White** (`#FFFFFF`): Page background, card surfaces.
- **Surface Gray** (`#F5F6F7`): Section bands, subtle grouping.

### Text
- **Text Primary** (`#1B1D1F`): Headings, primary labels.
- **Text Body** (`#3A3E41`): Body copy, card titles.
- **Text Secondary** (`#7E848A`): Metadata, captions, secondary labels.
- **Text Tertiary** (`#ADB1B5`): Placeholder, disabled, fine print.

### Borders & Dividers
- **Border Default** (`#E8EAEC`): Card borders, dividers, input outlines.
- **Border Strong** (`#D5D8DB`): Active/emphasized borders.

### Semantic
- **Success** (`#22C55E`): Saved, confirmed, completed.
- **Highlight Teal** (`#0ECEDB`): Special accent / map highlight. Observed `rgb(14, 206, 219)`.
- **Error** (`#FF3B30`): Errors, destructive.
- **Warning** (`#FAAD14`): Pending, attention.

## 3. Typography Rules

### Font Stack
```
-apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
```

Triple is mobile-app-first; the web mirrors the app by using the platform native sans (San Francisco / Roboto via the system stack). On Korean devices this resolves to Apple SD Gothic Neo / system Korean faces. All rendering is black-to-gray on white.

### Type Scale (observed intro + planning surfaces)

| Role | Size | Weight | Line Height | Use |
|---|---|---|---|---|
| Hero | 28–36px | 700 | 1.3 | Intro hero, feature headlines |
| Section Heading | 20–22px | 700 | 1.35 | Itinerary day headers, section titles |
| Card Title | 16px | 600 | 1.4 | Place/itinerary card titles |
| CTA | 18px | 700 | 1.4 | Primary buttons (observed 18px/700 on the 56px CTA) |
| Body | 16px | 400 | 1.5 | Descriptions, tip copy (observed 16px/400) |
| Meta | 14px | 400 | 1.4 | Place metadata, distance, hours |
| Caption | 12px | 400 | 1.4 | Badges, fine print |

### Conventions
- **700 for headlines and CTAs, 600 for card titles, 400 for body** — the bold CTA weight (700) makes the friendly pill feel confident.
- **Black headline, gray meta** — `#1B1D1F` → `#3A3E41` → `#7E848A`.
- **16px base body** — comfortable reading for trip tips and place descriptions.
- **Korean-primary** — Korean is first-class; English used in place names and the app stores.

## 4. Component Stylings

### Buttons

**Primary CTA (일정 살펴보기 / 함께 일정 만들기)**
- Background: `#368FFF`
- Text: `#FFFFFF`
- Border: none
- Radius: 36px (pill)
- Padding: 0 28px
- Font: 18px / 700 / system-sans
- Hover: background `#1A85E8`
- Use: Primary action — observed 56px tall, pill-shaped friendly button

**Secondary / Outline**
- Background: `#FFFFFF`
- Text: `#368FFF`
- Border: 1px solid `#368FFF`
- Radius: 36px (pill)
- Padding: 0 28px
- Font: 18px / 700 / system-sans
- Use: Secondary action paired with the filled primary

**Soft / Tinted**
- Background: `#F1F7FF`
- Text: `#368FFF`
- Border: none
- Radius: 36px (pill)
- Padding: 0 24px
- Font: 16px / 600 / system-sans
- Use: Low-emphasis action, "다시 보기", inline suggestions

**Ghost / Text**
- Background: transparent
- Text: `#3A3E41`
- Border: none
- Font: 16px / 600 / system-sans
- Use: Tertiary nav, "더보기"

### Inputs

**Search / Text Field**
- Background: `#F5F6F7`
- Text: `#1B1D1F`
- Border: none (filled) — or 1px solid `#E8EAEC` on white
- Radius: 12px
- Padding: 12px 16px
- Font: 16px / 400 / system-sans
- Placeholder: `#ADB1B5`
- Focus: border `#368FFF`
- Use: Destination/place search

### Cards

**Place / Itinerary Card**
- Background: `#FFFFFF`
- Border: 1px solid `#E8EAEC` (or shadowless on bands)
- Radius: 20px
- Padding: 16px (text region) + image
- Use: The planning atom — place photo + name + tip/metadata

**Info / Tip Card**
- Background: `#F1F7FF`
- Border: none
- Radius: 20px
- Padding: 20px
- Font: 16px / 400 / system-sans, `#3A3E41`
- Use: Travel tips, contextual info, "랜드마크를 사랑한 여행자" style editorial blocks (observed `rgb(241,247,255)` bg, 20px radius)

### Badges / Chips

**Category / Filter Chip**
- Background: `#F5F6F7`
- Text: `#3A3E41`
- Border: none
- Radius: 999px
- Padding: 6px 14px
- Font: 13px / 500 / system-sans
- Active: bg `rgba(54,143,255,0.07)`, text `#368FFF`
- Use: Place-type filters (관광 / 맛집 / 카페 / 숙소)

**Selected Region**
- Background: `rgba(54,143,255,0.07)`
- Text: `#368FFF`
- Border: 1px solid `#368FFF`
- Radius: 12px
- Use: Selected itinerary item, chosen place on map

### Tabs / Nav

**Bottom Tab (app) / Top Nav (web)**
- Active: `#368FFF` (icon + label)
- Inactive: `#7E848A`
- Font: 12px (tab) / 14px (web nav) / 500 / system-sans
- Use: 일정 / 가이드 / 예약 / 내 여행 switcher

### Toasts

**Snackbar**
- Background: `#1B1D1F`
- Text: `#FFFFFF`
- Radius: 12px
- Padding: 12px 16px
- Use: "일정에 추가했어요" transient feedback

### Dialogs

**Modal / Bottom Sheet**
- Background: `#FFFFFF`
- Text: `#1B1D1F`
- Radius: 20px (top corners on sheet)
- Padding: 24px
- Backdrop: `rgba(0,0,0,0.5)`
- Use: Place detail, add-to-itinerary, collaborator invite

---

**Verified:** 2026-05-19
**Tier 1 sources:** triple.guide/intro (live computed styles via Playwright — primary CTA `#368FFF` (rgb 54,143,255) / 36px pill radius / 18px·700 / 56px tall, the most-frequent saturated color (39×); info card `#F1F7FF` (rgb 241,247,255) / 20px radius; selected wash `rgba(54,143,255,0.07)` (17×); sky accent `#1AADF6` (rgb 26,173,246); highlight teal `#0ECEDB` (rgb 14,206,219); white bg; font `-apple-system, "system-ui", "Segoe UI", Helvetica, Arial, ...`).
**Tier 2 sources:** getdesign.md/triple — not checked; styles.refero.design — not checked.
**Conflicts unresolved:** Brief-provided `#2EA6FF` vs live observed `#368FFF` — live adopted as canonical primary (39 occurrences on CTAs/active). No internal conflicts.

## 5. Layout Principles

### Page Structure
- Mobile-app-first; web intro/marketing is a vertical scroll of feature sections with rounded cards.
- In-app: a day-by-day itinerary timeline with place cards, a map view, and bottom-tab navigation.

### Spacing
- Base unit 8px; common values 4 / 8 / 12 / 16 / 20 / 24 / 32.
- Card gutter ~12–16px; section vertical gap ~32px.
- Page horizontal padding ~20px mobile, ~24px desktop.

### Density
**Comfortable, companion-density.** The itinerary is meant to be glanceable — generous spacing around place cards, soft tinted info blocks, lots of rounded breathing room. Not a data-dense table; a friendly planning canvas.

### Border Radius Scale
- Standard (12px): inputs, selected regions, snackbars
- Comfortable (20px): cards, info blocks, sheets
- Pill (36px): primary/secondary CTAs
- Pill (999px): chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | no shadow | Page bg, inline, cards at rest on bands |
| Subtle | `0 1px 3px rgba(0,0,0,0.04)` | Resting place cards |
| Hover/Active | `0 4px 12px rgba(0,0,0,0.08)` | Lifted card, floating add button |
| Floating | `0 6px 20px rgba(0,0,0,0.12)` | Map pins popover, sticky CTA |
| Modal | `0 8px 24px rgba(0,0,0,0.16)` | Sheets, dialogs |

Depth is gentle and soft-edged, matching the rounded geometry. The blue-tint family does as much separating work as shadows — a `#F1F7FF` block reads as "set apart" without any elevation. The signature lift is the floating add-to-itinerary button (pill, blue, soft shadow) that follows the planning flow.

## 7. Do's and Don'ts

### Do
- Use `#368FFF` for every interactive element — it's the single accent.
- Use pill radius (36px) on primary CTAs — the soft "easy" geometry is the brand.
- Use the blue-tint family (`#F1F7FF`, `rgba(54,143,255,0.07)`) to separate info/selected surfaces.
- Use 20px rounded cards — companion-app softness.
- Keep the itinerary glanceable with generous spacing.

### Don't
- Don't introduce a second saturated accent; let blue own interaction.
- Don't use sharp or small radii on CTAs — pill is the brand signature.
- Don't pack the itinerary into a dense table; this is a friendly canvas.
- Don't fight the white canvas with heavy chrome; tints do the separating.
- Don't use a darker fintech-trust blue; Triple's blue is bright and cheerful.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|---|---|---|
| Mobile (primary) | <768px | App-native: itinerary timeline + bottom tabs + map toggle; full-width pill CTA |
| Tablet | 768–1024px | Two-pane (itinerary + map), condensed nav |
| Desktop (web) | >1024px | Centered marketing column for intro; in-app web mirrors mobile in a column |

### Touch & Media
- Pill CTAs are large (56px) — generous tap targets.
- Place cards swipeable; map pins tappable to popover.
- Sticky bottom add/save CTA with safe-area inset.

### Image Behavior
- Place photos 4:3 or 1:1, `object-fit: cover`, rounded 20px (matching cards).
- Maps full-bleed with rounded container and blue pins.

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary/active/link: Triple Blue `#368FFF` (pressed `#1A85E8`)
- Tints: card `#F1F7FF`; wash `rgba(54,143,255,0.07)`
- Canvas: White `#FFFFFF`; band `#F5F6F7`
- Text: `#1B1D1F` → `#3A3E41` → `#7E848A` → `#ADB1B5`
- Border: `#E8EAEC`; focus `#368FFF`
- Success `#22C55E`; highlight teal `#0ECEDB`; error `#FF3B30`

### Example Component Prompts
- "Build a Triple primary CTA: bg `#368FFF`, white text 18px weight 700, 36px pill radius, 56px tall, padding 0 28px. Hover bg `#1A85E8`."
- "Create a Triple place card: white bg, 1px border `#E8EAEC`, 20px radius. Place photo top (4:3, cover, rounded 20px top). Below: name (16px weight 600 `#1B1D1F`), tip/meta (14px `#7E848A`), category chip (bg `#F5F6F7`, 999px). Selected: bg `rgba(54,143,255,0.07)`, 1px border `#368FFF`."
- "Design a Triple info/tip card: bg `#F1F7FF`, 20px radius, 20px padding, body 16px `#3A3E41`, optional blue `#368FFF` highlight."
- "Create a Triple soft button: bg `#F1F7FF`, text `#368FFF` 16px weight 600, 36px pill radius — low-emphasis action."

### Iteration Guide
1. One blue `#368FFF` owns all interaction.
2. Pill radius (36px) on CTAs — the soft "easy" signature.
3. Blue-tint family separates info/selected surfaces.
4. 20px rounded cards; 16px base body.
5. System-sans stack first (mobile-app native feel).
6. Gentle soft-edged shadows; tints do separating work.
7. Keep the itinerary glanceable and generous, never dense.

---

## 10. Voice & Tone

Triple speaks like a cheerful travel buddy who already knows your taste — warm, light, second-person, a little playful. The register is friendly Korean with `~요`/`~어요` endings (`일정에 추가했어요`, `이런 곳은 어때요?`), the companion voice, never stiff `~습니다` except in policy. The brand line — "나를 아는 여행 앱" (the app that knows me) — sets the tone: copy is personal and anticipatory, surfacing places that fit *you* and getting more useful as you plan together. Korean is primary; place names and stores in English.

| Context | Tone |
|---|---|
| CTAs | Light Korean verb form (`일정 살펴보기`, `함께 일정 만들기`, `추가하기`, `둘러보기`). |
| Recommendations | Personal, anticipatory (`이런 곳은 어때요?`, `나를 아는 여행 앱`). |
| Success toasts | Past-tense soft ending (`일정에 추가했어요`). No emoji on chrome. |
| Error messages | Blameless, specific, one action (`정보를 불러올 수 없어요. 잠시 후 다시 시도해 주세요`). Never `오류가 발생했습니다`. |
| Empty states | Warm + one action (`아직 일정이 없어요. 첫 여행을 만들어볼까요?`). |
| Collaboration | Inviting, plural-friendly (`함께 할수록, 더 풍성해지는 여행`). |
| Legal / booking | Formal `~합니다` register — the exception. |

**Forbidden phrases.** `오류가 발생했습니다` (generic error), `죄송하지만` on non-destructive failures, pressure CTAs (`지금 예약하세요!` → `예약하기`), superlatives on UI chrome, English-first strings on Korean surfaces, emoji on system toasts (emoji belongs to user trip notes).

**Voice samples.**
- `일정 살펴보기` — primary CTA, observed live on the `#368FFF` pill button. <!-- verified: triple.guide/intro via Playwright 2026-05-19 -->
- `나를 아는 여행 앱, 트리플` — brand line (page title `나를 아는 여행 앱, 트리플`). <!-- verified: page title via Playwright 2026-05-19 -->
- `함께 할수록, 더 풍성해지는 여행` — collaboration headline, observed live. <!-- verified: triple.guide/intro via WebFetch 2026-05-19 -->
- `이런 곳은 어때요?` — illustrative recommendation line, soft `~요`. <!-- illustrative: not verified verbatim -->

## 11. Brand Narrative

Triple (트리플) is a Korean travel-planning app operated by **Triple Corporation**, which became part of the **Interpark Triple** group (and the broader Yanolja ecosystem after consolidation in the Korean travel-tech sector). Its founding insight was the opposite of the OTA marketplace: most travel products help you *book*, but few help you *plan* — and planning is where the anxiety and the joy of a trip actually live. Triple built an app around the **day-by-day itinerary**: pick a destination, get taste-fit recommendations, drag places onto a timeline, see them on a map, and plan together with the people you're traveling with. The tagline — "나를 아는 여행 앱" — promises a planner that learns your preferences and anticipates them. ([triple.guide](https://triple.guide/) — product; [triple.guide/intro](https://triple.guide/intro))

The design is the form of "companion, not marketplace." The cheerful sky-blue, the soft pill CTAs, the rounded tinted cards, and the light personal copy all push toward a feeling of *planning with a friend* rather than *transacting with a vendor*. Collaboration is first-class — "함께 할수록, 더 풍성해지는 여행" — so the app is built to be shared, and the warm, anticipatory tone scales naturally to a group planning a trip together.

What Triple refuses: the banner-heavy, discount-shouting density of booking OTAs (Triple is calm and glanceable), the impersonal inventory feed (every surface centers *your* taste and *your* plan), and the corporate-trust blue of fintech (Triple's blue is a clear-sky travel blue, optimistic and light). Triple is a travel buddy with a map — personal, collaborative, and gently delightful.

## 12. Principles

1. **Plan, don't just book.** The itinerary is the product; booking serves the plan. *UI implication:* The day-by-day timeline is primary; recommendations and bookings flow into it. Don't bury planning under a storefront.

2. **One cheerful blue owns interaction.** `#368FFF` is everywhere a user acts; nothing else competes. *UI implication:* No second saturated accent. The blue-tint family extends it for info/selected states.

3. **Soft is the signature.** Pill CTAs (36px) and 20px cards make planning feel easy and friendly. *UI implication:* Don't use sharp/small radii on actions. Roundness is brand identity, not decoration.

4. **It knows you, so it speaks to you.** Copy is personal and anticipatory. *UI implication:* `이런 곳은 어때요?`, `나를 아는 여행 앱` — second person, taste-fit framing. Lead with the traveler.

5. **Better together.** Collaboration is built in, and the tone scales to a group. *UI implication:* Invite, share, and co-edit affordances are first-class; plural-friendly copy (`함께`) throughout.

## 13. Personas

*Personas are fictional archetypes informed by publicly described Triple user segments (Korean leisure travelers and trip-planners), not individual people.*

**유진 (Yu-jin), 28, Seoul.** Plans every trip in detail. Uses Triple to build a day-by-day itinerary before departure, dragging recommended places onto the timeline and checking them on the map. Loves that the app learns her taste (cafes, viewpoints) and pre-fills suggestions.

**민서 (Min-seo), 25, Suwon.** Travels with friends. Triple's collaboration is why she uses it — the whole group edits one shared itinerary, so nobody's left out of planning. Picks places by the friendly recommendation cards and group votes.

**태현 (Tae-hyun), 35, Daejeon.** Family trips. Wants a low-stress, glanceable plan — what to do each day, how far apart places are. Distrusts dense booking apps; Triple's calm, rounded, companion feel keeps him in it. Books hotels and tickets directly from the plan.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no itinerary)** | Warm line `#7E848A` (`아직 일정이 없어요`) + blue pill CTA (`첫 여행 만들기`). |
| **Empty (search no results)** | `#7E848A` caption (`검색 결과가 없어요. 다른 장소를 찾아보세요`) + suggested places. |
| **Loading (feed/itinerary first paint)** | Card-shaped skeletons at `#F5F6F7` matching layout, subtle shimmer. |
| **Loading (place detail)** | Inline ring spinner in `#368FFF`; content stays. |
| **Error (inline field)** | Input border `#FF3B30`, caption below in red, one actionable sentence. |
| **Error (toast)** | `#1B1D1F` bg, white 14px text, 3s dismiss, one sentence, no icon. |
| **Error (data load)** | Centered line `#1B1D1F` + retry pill `#368FFF`. Never blames the user. |
| **Success (added to itinerary)** | Snackbar `#1B1D1F` + white text (`일정에 추가했어요`), 3s dismiss; the place card gets a blue check. |
| **Success (trip saved/shared)** | Inline confirmation — green `#22C55E` check + share link affordance. |
| **Skeleton** | `#F5F6F7` blocks at exact card dimensions, 20px radius, ~1.2s shimmer. |
| **Disabled (button)** | Pill drops to `rgba(54,143,255,0.4)`, white text; geometry stable. |

## 15. Motion & Easing

Triple's motion is light and friendly — gentle slides, soft pops, map-pin reveals. Playful at small moments, calm overall.

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle/checkbox, chip select |
| `motion-fast` | 150ms | Hover, press, add-to-itinerary check |
| `motion-standard` | 250ms | Card lift, sheet open, tab switch, map pin drop |
| `motion-slow` | 350ms | Page-to-detail, itinerary reorder settle |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default — most motion |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Sheets, modals, toasts, map pins appearing |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Add-to-itinerary pop, map-pin drop |

**Spring stance.** Spring is licensed for the small delight moments that make planning fun — the add-to-itinerary pop and the map-pin drop. Navigation and sheets use standard easing. The companion should feel playful when you add a place, calm when you move around.

**Signature motions.**
1. **Add to itinerary.** On tap, the place chip pops to ~1.15 and the item slides into the timeline over `motion-fast / ease-spring`, with a snackbar confirm. The signature delight.
2. **Map-pin drop.** Pins drop onto the map with a brief overshoot `motion-standard / ease-spring`, sequenced ~40ms apart for multiple places.
3. **Itinerary reorder.** Dragging a place reflows the timeline with `motion-standard / ease-standard`; the dropped item settles softly.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, pops/drops/slides collapse to instant opacity; skeletons go static `#F5F6F7`. No exceptions.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 (UI tokens, §1–9): triple.guide/intro live computed styles via
Playwright MCP, 2026-05-19. Confirmed: primary CTA `#368FFF` (rgb 54,143,255)
36px pill radius 18px·700 56px tall, the most-frequent saturated color (39×);
info card `#F1F7FF` (rgb 241,247,255) 20px radius; selected wash
`rgba(54,143,255,0.07)` (17×); sky accent `#1AADF6` (rgb 26,173,246); highlight
teal `#0ECEDB` (rgb 14,206,219); white bg; system-sans font stack
`-apple-system, "system-ui", "Segoe UI", Helvetica, Arial, ...`. Page title
`나를 아는 여행 앱, 트리플`.

Brief `#2EA6FF` vs live `#368FFF` — live adopted (verified on CTAs/active).

Tier 2 (narrative): triple.guide / triple.guide/intro for product positioning
(itinerary-first, collaboration). Corporate ownership (Triple Corporation /
Interpark Triple / Yanolja ecosystem) is general industry knowledge from
Korean travel-tech consolidation; not re-verified against primary press in
this pass — treat ownership detail as background, not load-bearing.

Voice samples: `일정 살펴보기`, `함께 할수록, 더 풍성해지는 여행`, and
`나를 아는 여행 앱, 트리플` verified live (button / headline / page title).
`이런 곳은 어때요?`, `일정에 추가했어요`, empty/error copy are ILLUSTRATIVE
patterns following Triple's light `~요` companion register; not verbatim.

Personas (§13) are fictional archetypes. Any resemblance to specific users is
unintended.
-->
