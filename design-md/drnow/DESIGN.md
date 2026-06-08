---
id: drnow
name: "Dr.Now (닥터나우)"
country: KR
category: healthcare
homepage: "https://doctornow.co.kr"
primary_color: "#FF8D00"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=doctornow.co.kr&sz=256"
verified: "2026-06-03"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#FF8D00"
    primary-600: "#FD7E14"
    primary-700: "#F76707"
    primary-800: "#E8590C"
    primary-900: "#D9480F"
    primary-100: "#FFF4E6"
    primary-300: "#FFD8A8"
    surface-10: "#FBFCFD"
    surface-20: "#F7F9FA"
    surface-40: "#F1F3F6"
    border: "#DFE1E2"
    placeholder: "#A9AEB1"
    meta: "#8D9297"
    body: "#71767A"
    body-root: "#565C65"
    strong: "#3D4551"
    heading: "#1C1D1F"
    canvas: "#FFFFFF"
    info: "#228BE6"
    yellow: "#FCC419"
    error: "#FA5252"
  typography:
    family: { sans: "Pretendard Variable", mono: "Pretendard Variable" }
    h-32:    { size: 32, weight: 700, lineHeight: 1.31, use: "Large display heading" }
    h-28:    { size: 28, weight: 700, lineHeight: 1.36, use: "Heading" }
    h-24:    { size: 24, weight: 700, lineHeight: 1.33, use: "Section heading" }
    h-22:    { size: 22, weight: 700, lineHeight: 1.36, use: "Section heading" }
    h-20:    { size: 20, weight: 600, lineHeight: 1.4, use: "Subheading" }
    body-17: { size: 17, weight: 400, lineHeight: 1.41, use: "Body / button label at 600" }
    body-16: { size: 16, weight: 400, lineHeight: 1.5, use: "Body default" }
    body-15: { size: 15, weight: 400, lineHeight: 1.47, use: "Body small" }
    caption: { size: 12, weight: 600, lineHeight: 1.5, use: "Meta / timestamps" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 96 }
  rounded: { sm: 8, md: 12, lg: 32, full: 9999 }
  shadow:
    floating: "0px 2px 8px rgba(0,0,0,0.08)"
    modal: "0px 4px 8px rgba(0,0,0,0.08)"
    dropdown: "0px 8px 16px rgba(0,0,0,0.16)"
  components:
    button-primary: { type: button, bg: "#FD7E14", fg: "#FFFFFF", radius: 12, font: "17px/600", use: "Primary solid CTA" }
    button-outline: { type: button, bg: "#FFFFFF", fg: "#FD7E14", radius: 12, padding: "16px 24px", font: "16px/600", use: "Primary outline (1px #FD7E14 border)" }
    button-disabled: { type: button, bg: "#DFE1E2", fg: "#A9AEB1", radius: 12, padding: "16px 24px", font: "16px/500", use: "Ghost / disabled" }
    tag-primary: { type: badge, bg: "#FFF4E6", fg: "#F76707", radius: 9999, padding: "4px 10px", font: "12px/600", use: "Primary tag chip" }
    tag-gray: { type: badge, bg: "#F1F3F6", fg: "#71767A", radius: 9999, padding: "4px 10px", font: "12px/500", use: "Gray tag chip" }
    card: { type: card, bg: "#FFFFFF", radius: 32, padding: "24px", use: "Content card, 1px #DFE1E2 border" }
    section-card: { type: card, bg: "#F1F3F6", radius: 32, use: "Section background card" }
    nav-item: { type: tab, bg: "transparent", fg: "#DFE1E2", radius: 8, padding: "0px 12px", font: "16px/400", active: "text #FD7E14, weight 700", use: "Navigation item" }
  components_harvested: true
---

# Dr.Now (닥터나우)

Korea's #1 telemedicine platform — making medical care instantly accessible, any hour of the day.

## 1. Visual Theme & Atmosphere

Dr.Now (닥터나우) is built around a single emotional promise: "아플 땐 닥터나우" — when you're sick, Dr.Now is there. The interface translates this into a warm, energetic orange language set against a clean off-white and neutral gray canvas. Where most Korean healthcare apps reach for clinical blues or sterile whites to signal trust, Dr.Now deliberately chose vibrant orange — a color that radiates urgency, warmth, and approachability without the coldness of institutional medicine. The result feels closer to a sympathetic neighbor than a hospital waiting room.

The typography is Pretendard Variable, the gold-standard Korean system font — its clean geometric letterforms balance medical authority with consumer-app readability. The neutral gray scale runs from the near-white surface `#FBFCFD` (G10) through rich charcoal `#1C1D1F` (G900), creating quiet, clean backdrops that let the orange CTAs and primary actions demand attention without visual noise. Card surfaces use `#FFFFFF` with `1px solid #DFE1E2` borders and 32px radii for a friendly, rounded feel.

Motion is purposefully gentle — slide-up sheets and fade-in transitions at 300ms reinforce that Dr.Now is reliable and steady, not frantic. The interface hierarchy is clear: orange acts, gray informs, white breathes.

## 2. Color Palette & Roles

### Primary (Orange Scale — official CSS vars --P100 to --P900)
- **Primary 500:** `#FF8D00` — brand anchor orange; used in timeline markers, accent text, key stats
- **Primary 600:** `#FD7E14` — CTA button fills, active nav link text, featured badge backgrounds
- **Primary 700:** `#F76707` — hover on orange elements, pressed states, high-emphasis text
- **Primary 800:** `#E8590C` — deep hover, secondary destructive-adjacent accents
- **Primary 900:** `#D9480F` — CTA gradient start, deepest brand orange
- **Primary 100:** `#FFF4E6` — tinted surfaces, pill tag backgrounds, info banners
- **Primary 300:** `#FFD8A8` — divider gradient, warm illustration fill

### Neutral (Gray Scale — official CSS vars --G10 to --G900)
- **Surface 10:** `#FBFCFD` — page background variant (G10)
- **Surface 20:** `#F7F9FA` — secondary page background, tag fills (G20)
- **Surface 40:** `#F1F3F6` — review section background, card dividers (G40)
- **Gray 100:** `#DFE1E2` — default border, card outline, separator lines (G100)
- **Gray 300:** `#A9AEB1` — placeholder text, disabled borders (G300)
- **Gray 400:** `#8D9297` — secondary labels, metadata text (G400)
- **Gray 500:** `#71767A` — body text default (G500)
- **Gray 600:** `#565C65` — body color root default (G600)
- **Gray 700:** `#3D4551` — secondary headings, strong body (G700)
- **Gray 900:** `#1C1D1F` — primary headings, dark emphasis (G900)

### Accent & System
- **White:** `#FFFFFF` — card surface, modal background, CTA text
- **Blue 600:** `#228BE6` — information chips, system links, secondary action text
- **Yellow 500:** `#FCC419` — star rating, highlight badge
- **Error Red:** `#FA5252` — destructive action, form error state

## 3. Typography Rules

Dr.Now uses **Pretendard Variable** exclusively — defined in both the main CSS bundle (`userweb-static.doctornow.co.kr`) and the official brand CSS (`file.doctornow.co.kr/official/css/default.css`). The font is also specified as `Pretendard Variable, Pretendard` with a full Korean system font fallback chain.

**Type Scale (from CSS typography utility classes):**

| Class suffix | Size | Line-height | Weights available |
|---|---|---|---|
| `-32b/sb` | 32px | 42px | 700 / 600 |
| `-28b` | 28px | 38px | 700 |
| `-24b/sb` | 24px | 32px | 700 / 600 |
| `-22b/sb` | 22px | 30px | 700 / 600 |
| `-20b/sb` | 20px | 28px | 700 / 600 |
| `-18b/sb/m` | 18px | 26px | 700 / 600 / 500 |
| `-17b/sb/m/r` | 17px | 24px | 700 / 600 / 500 / 400 |
| `-16b/sb/m/r` | 16px | 24px | 700 / 600 / 500 / 400 |
| `-15b/sb/m/r` | 15px | 22px | 700 / 600 / 500 / 400 |
| `-14b/sb/m/r` | 14px | 20px | 700 / 600 / 500 / 400 |
| `-12sb` | 12px | 18px | 600 |

**Rules:**
- CTA button labels: 17px / 600 (SemiBold)
- Body default: 15px–16px / 400–500
- Section headings: 22px–32px / 700
- Meta / timestamps: 12px–14px / 400
- All text: `-webkit-font-smoothing: antialiased` applied globally
- No italic in UI text; `font-style: normal` enforced in typography utility classes

## 4. Component Stylings

### Primary CTA Button

**Brand Gradient CTA (`.btn-now`)**
- Background: `linear-gradient(90deg, #D9480F 0%, #F3463B 100%)`
- Text: `#FFFFFF`
- Radius: 12px
- Padding: 16px 54px
- Font: 17px / 600

**Primary Solid (`.bg-primary-600`)**
- Background: `#FD7E14`
- Text: `#FFFFFF`
- Radius: 12px
- Font: 17px / 600

**Primary Outline**
- Background: `#FFFFFF`
- Text: `#FD7E14`
- Border: 1px solid `#FD7E14`
- Radius: 12px
- Padding: 16px 24px
- Font: 16px / 600

**Ghost / Disabled**
- Background: `#DFE1E2`
- Text: `#A9AEB1`
- Radius: 12px
- Padding: 16px 24px
- Font: 16px / 500

### Tag / Badge Chip

**Primary Tag**
- Background: `#FFF4E6`
- Text: `#F76707`
- Radius: 99px
- Padding: 4px 10px
- Font: 12px / 600

**Gray Tag**
- Background: `#F1F3F6`
- Text: `#71767A`
- Radius: 99px
- Padding: 4px 10px
- Font: 12px / 500

### Card / Review Slide

**Content Card**
- Background: `#FFFFFF`
- Border: 1px solid `#DFE1E2`
- Radius: 32px
- Padding: 24px

**Section Background Card**
- Background: `#F1F3F6`
- Radius: 32px

### Navigation Item

**Active Nav Link**
- Background: transparent
- Text: `#FD7E14`
- Radius: 8px
- Height: 40px
- Padding: 0px 12px
- Font: 16px / 700

**Default Nav Link**
- Background: transparent
- Text: `#DFE1E2`
- Radius: 8px
- Height: 40px
- Padding: 0px 12px
- Font: 16px / 400

---
**Verified:** 2026-06-03
**Tier 1 sources:** https://doctornow.co.kr (HTML + styled-components), https://userweb-static.doctornow.co.kr/20260602-2002-38d1546d91/_next/static/css/72c28a0cfb28f079.css (Tailwind + SC bundle), https://file.doctornow.co.kr/official/css/style.css (official brand CSS with --P/--G token :root), https://file.doctornow.co.kr/official/css/default.css (Pretendard font import + reset), https://company.doctornow.co.kr/company (brand CSS served from file.doctornow.co.kr)
**Tier 2 sources:** getdesign.md/drnow — NOT LISTED (no data). refero ?q=닥터나우 — no result found for this brand.
**Conflicts unresolved:** The hero banner gradient uses `#FF7501` (slightly warmer than token --P500 `#FF8D00`); the official :root token system treats `#FF8D00` as P500 canonical. Both are genuine observed values. The `.btn-now` CTA uses a deep `#D9480F → #F3463B` gradient while the web app uses `#FD7E14` solid for most buttons — two surface contexts maintained separately.

## 5. Layout Principles

Dr.Now uses a **max-width 1050px centered content container** (`width: 92%; max-width: 1050px`) for all landing and company pages, with generous vertical section padding of 96px–128px. The mobile breakpoint is at 768px, where multi-column grids collapse to single-column vertical stacks.

- **Web app (doctornow.co.kr):** Tailwind-based, responsive grid, max-width 1064px for some breakpoints
- **Company pages:** Fixed-width centered layout, 92% container, generous whitespace
- **Spacing system:** 8px base unit; common values are 4, 8, 12, 16, 24, 32, 40, 48, 64, 96px
- **Card grid:** Items arranged in 2–3 columns on desktop, stacking to 1 on mobile
- **Navigation:** Fixed 64px top bar; content offset by `padding-top: 64px`

## 6. Depth & Elevation

Dr.Now employs a restrained shadow system — surfaces are differentiated primarily through background color rather than heavy drop shadows.

- **Level 0 — Page surface:** `#FBFCFD` or `#F7F9FA` — no shadow
- **Level 1 — Default card:** `#FFFFFF` with `1px solid #DFE1E2` — flat border elevation
- **Level 2 — Floating card:** `box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08)` — light lift
- **Level 3 — Modal / Bottom sheet:** `box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08)` — medium elevation
- **Level 4 — Tooltip / Dropdown:** `box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.16)` — prominent float
- **Level 5 — Overlay scrim:** `background-color: rgba(0, 0, 0, 0.06)` to `rgba(0, 0, 0, 0.12)` — modal backdrop
- **Inset surface accent:** `inset 0px 0px 32px rgba(0, 0, 0, 0.04)` — used on section review blocks

## 7. Do's and Don'ts

### Do
- Use `#FF8D00` (P500) or `#FD7E14` (P600) as the primary brand orange for all key CTAs and active states
- Apply 12px radius to primary buttons and 32px radius to cards and content panels
- Use Pretendard Variable with the full Korean fallback chain for all UI text
- Keep neutral grays for secondary content — body copy defaults to `#71767A` (G500) against `#FBFCFD` backgrounds
- Apply `ease-out` transitions at 200–300ms for all enter/exit micro-interactions
- Use the full gray scale (G10–G900) for nuanced text and surface hierarchy
- Maintain 64px of top breathing room for the fixed navigation bar

### Don't
- Use blue as a primary brand color — Dr.Now's identity is orange; blue is reserved for informational chips only
- Apply the deep gradient (`#D9480F → #F3463B`) outside the hero/brand marketing context — it reads as urgent; web app CTAs use flat `#FD7E14`
- Use font weights below 400 or above 700 — the type scale uses Regular (400), Medium (500), SemiBold (600), Bold (700) only
- Mix heavy drop shadows with the card system — Dr.Now elevation is purposefully flat with border-based differentiation
- Place orange text on orange-tinted backgrounds (P700 on P100 may fail contrast at small sizes)
- Use border-radius values that aren't in the established scale (4 / 6 / 8 / 12 / 16 / 32 / 99px)

## 8. Responsive Behavior

- **Breakpoint:** 768px (mobile) and 1064px (large desktop cap for web app)
- **Navigation:** Desktop horizontal nav collapses to a hamburger button at ≤768px
- **Section padding:** Reduces from 96–128px to 48–64px on mobile
- **Typography:** Large display sizes (32–56px) reduce by 1–2 steps on mobile
- **Grid:** 2–3 column layouts collapse to single column at 768px
- **Cards:** Full-width card pattern on mobile, with reduced padding (8px gap instead of 12px)
- **Max widths:** Content capped at 1050px for company pages; web app has flexible grid to 1064px

## 9. Agent Prompt Guide

To generate UI consistent with Dr.Now's design language:

```
Use Pretendard Variable (Korean system font fallback: Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic).
Primary brand color: #FF8D00 (orange). CTA button background: #FD7E14 with white text, 12px radius.
Surface hierarchy: page background #F7F9FA → card #FFFFFF with 1px solid #DFE1E2 border → elevated card with box-shadow 0 2px 8px rgba(0,0,0,0.08).
Neutral text: headings #1C1D1F (G900), body #71767A (G500), meta #8D9297 (G400).
Transitions: 200–300ms ease-out for all state changes.
Card radius: 32px for large content panels, 12px for interactive components, 99px for badge/chip.
Typography scale: 15–16px body (400–500), 17px button (600), 22–32px headings (700).
Avoid clinical blue as primary; blue is used only for informational contexts (#228BE6).
```

## 10. Voice & Tone

**Three-word fingerprint:** Warm, Accessible, Trustworthy

Dr.Now's voice is empathetic without being overly clinical — it speaks to patients at vulnerable moments with directness and warmth. The brand avoids medical jargon in favor of plain Korean that anyone can understand at any hour of the night when they're sick and anxious.

| Dimension | Do | Don't |
|---|---|---|
| Sentence length | Short, declarative — "아플 땐 닥터나우" | Long subordinate clauses |
| Vocabulary | Plain Korean, patient-centric ("당신이 아픈 순간") | Medical jargon, formal hospital language |
| Tone | Warm, reassuring, slightly energetic | Clinical cold, alarmist |
| Perspective | "We're here for you" — 1st person plural | Institutional 3rd person |
| Urgency | Gentle accessibility ("언제든지") | Pushy scarcity tactics |

**Voice samples (illustrative — modeled on brand copy):**

- *"늦은 밤에도, 주말에도 — 당신 곁에 있습니다."* (Late at night, on weekends — we're by your side.) — Illustrative, modeled on brand positioning.
- *"약 처방부터 배송까지, 집에서 끝내세요."* (From prescription to delivery, finish it all at home.) — Illustrative, modeled on feature communication style.
- *"병원까지의 거리가 걱정되지 않게."* (So the distance to the hospital is no longer a worry.) — Illustrative, reflecting brand manifesto language.

## 11. Brand Narrative

Dr.Now (닥터나우) was founded in 2019 in Seoul with a single observation: Koreans were enduring pain, delaying care, or going without medical help not because they didn't want it, but because accessing it was inconvenient — hospitals closed at night, wait times were long, and the psychological barrier to seeking care was higher than it needed to be. The founding team set out to dissolve that barrier, beginning with a medication delivery service and evolving rapidly into Korea's first scaled telemedicine platform.

By 2026 the platform counts more than 4 million consultations, 5,500+ partner medical institutions, and has passed an 8 million+ download milestone. The brand mission crystallized into a three-pillar commitment: solve the healthcare inconveniences people have accepted as normal, shift the medical market from provider-driven to patient-driven by making symptom-based hospital selection and transparent pricing standard, and be available "늦은 밤에도, 주말에도" — late nights and weekends, whenever patients need care most. The tagline "의료를 더욱 가깝게, 닥터나우" (Healthcare closer with Dr.Now) captures this positioning in four words.

The brand's choice of orange as its primary color is not accidental. Orange refuses the clinical associations of hospital blue and the cold sterility of medical white — it is warm, accessible, and slightly urgent in the best sense, the color of someone who picks up when you call at midnight. Combined with the approachable Pretendard typeface and a conversational voice, Dr.Now has built a brand that feels like a trusted friend who happens to connect you to doctors — not an institution that processes you.

## 12. Principles

1. **Accessibility at Every Hour**
   Healthcare shouldn't depend on whether it's a weekday at 3pm. The product must work flawlessly for a parent at 2am with a sick child. *UI implication:* Emergency-feel hierarchy — the primary CTA must be immediately findable without scrolling; orange ensures it commands attention without noise.

2. **Patient-Centered, Not Provider-Centered**
   Patients search by symptom, not by medical specialty. Navigation should mirror how people think about illness, not how hospitals organize themselves. *UI implication:* Symptom-based entry points and specialty discovery that hides complexity; surface the most accessible path first.

3. **Transparency as Trust**
   Showing consultation prices before booking is a core brand differentiator. Surfacing this information early — without making it feel transactional — builds the trust that drives repeat use. *UI implication:* Price information surfaces at the consultation card level, not buried in a separate screen; use neutral G700 not warning orange for pricing labels.

4. **Warm Urgency Without Alarm**
   Orange signals "act now" without inducing anxiety. The brand's energy must feel helpful-urgent, not panic-inducing. *UI implication:* Reserve the deep gradient (`#D9480F → #F3463B`) for hero marketing contexts only; use flat `#FD7E14` for in-app CTAs to keep urgency calibrated.

5. **Own the Moment of Illness**
   The product meets users at a vulnerable moment — sick, worried, often alone. Every touchpoint should feel like a calm, competent presence. *UI implication:* Loading states use gentle skeleton shimmer (1.5s ease-in-out), not spinning indicators; empty states use empathetic copy, never sterile error codes.

## 13. Personas

*Illustrative — not derived from published Dr.Now research; modeled on the brand's stated use cases.*

**지민 (Ji-min), 32 — The Midnight Parent**
A working parent in Seoul whose toddler spikes a fever at 11pm on Sunday. Her neighborhood clinic is closed; the ER seems excessive for a fever. She opens Dr.Now, finds a pediatrician available in minutes, gets a prescription, and schedules home delivery. *Design implication:* The fastest possible path from symptom to consultation must require ≤3 taps; the specialty "소아과" (pediatrics) card must be prominently featured.

**준혁 (Jun-hyuk), 27 — The Busy Professional**
A startup employee who gets a cough mid-project sprint and can't spend 90 minutes at a clinic. He uses Dr.Now's phone consultation during a coffee break, gets prescribed and picked up at the nearest partner pharmacy on his way home. *Design implication:* Session brevity matters; consultation duration, wait time estimates, and pharmacy proximity are key information hierarchy elements.

**은지 (Eun-ji), 45 — The Price-Conscious Patient**
A freelancer without employer health insurance who worries about non-covered drug costs. She uses Dr.Now's "최저가 약국 찾기" (lowest-price pharmacy finder) to compare prescription costs before confirming. *Design implication:* Price transparency surfaces early in the flow; comparison UI must be scannable (not a data table).

**민준 (Min-jun), 58 — The Condition Manager**
A patient with a chronic dermatology issue who needs monthly prescription refills. He's moved Dr.Now into his monthly routine, using the dermatology prescription repeat feature. *Design implication:* Repeat-prescription flows must surface in the home dashboard for logged-in users; history-aware CTAs ("마지막 처방 반복하기") reduce friction.

## 14. States

- **Empty — No results:** Search returns nothing: show a sympathetic icon and "검색 결과가 없어요" with a suggestion to try a broader keyword or browse by specialty — never a blank white screen
- **Loading — Initial fetch:** Full-page skeleton using `.animate-skeleton-shimmer` (1.5s ease-in-out infinite) — gray placeholder rectangles match expected content geometry
- **Loading — In-consultation:** Pulsing "의사를 연결 중이에요" copy with a circular spinner at 0.8s linear infinite — conveys activity without panic
- **Error — Network fail:** Toast notification with `#FA5252` border-left accent, human copy "연결이 끊겼어요. 다시 시도해 주세요", retry CTA in `#FD7E14`
- **Error — Prescription unavailable:** Inline card state with `#FFF4E6` background and `#F76707` icon — explains limitation and surfaces an alternative action (find an open pharmacy)
- **Success — Consultation complete:** Bottom sheet slides up (300ms ease-out) with green checkmark and "진료가 완료되었어요" — prescription delivery CTA follows immediately
- **Skeleton — Doctor card:** Rectangular placeholder with shimmer animation matching the doctor card's height (approximately 96px) and radius (16px)
- **Disabled — Unavailable specialty:** Chip or button with `#DFE1E2` background, `#A9AEB1` text — still shows the specialty label so users know it exists but is unavailable

## 15. Motion & Easing

Dr.Now uses a focused animation vocabulary: enter/exit, slide, and shimmer. Motion reinforces the product's calm-urgency balance — fast enough to feel responsive, smooth enough to feel reassuring.

**Duration Scale:**
- `100ms` — micro-interactions (focus ring, checkbox check)
- `200ms` — button hover/press state transitions
- `300ms` — panel enter/exit, toast appear, slide-up sheets (primary UI motion)
- `500ms` — page-level fade transitions
- `1500ms` — skeleton shimmer loop
- `15000ms` — marquee / scroll animations (brand testimonial carousels)

**Easing:**
- `ease-out` (`cubic-bezier(0, 0, 0.2, 1)`) — default for all enter transitions; elements decelerate into rest
- `ease-in` — exit transitions; elements accelerate out cleanly
- `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style standard for screen-level transitions (`screen-slide-in`)
- `linear` — spinner rotation, marquee scrolls
- `ease-in-out` — skeleton shimmer, shake animations (periodic/looping)

**Motion Rules:**
- Bottom sheet: slide up `0.3s ease-out` from `translateY(100%)` to `translateY(0)`
- Page enter: fade+slide — `opacity 500ms ease-out, transform 500ms ease-out` from `translateY(20px)`
- Screen navigation: `screen-slide-in 0.32s cubic-bezier(0.4,0,0.2,1)` from opacity 0
- Skeleton: `skeleton-shimmer 1.5s ease-in-out infinite` — translateX -100% to +100%
- Accordion: `0.2s ease-out` open/close — height from 0 to content height
- Never animate layout-affecting properties; prefer `transform` and `opacity` for 60fps compositing
