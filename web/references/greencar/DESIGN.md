---
id: greencar
name: Greencar
display_name_kr: 그린카
country: KR
category: automotive
homepage: "https://www.greencar.co.kr"
primary_color: "#00c88c"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=greencar.co.kr&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = signature brand green (#00c88c rgb 0,200,140) used as hero-panel fill and accent links; brighter green (#00dc9a) fills full-bleed hero bands. Action buttons are dark solid (#222222) + outline; green is the identity color, dark is the action color. Outfit (latin display) + Pretendard (hangul body). Flat system — single soft card shadow."
  colors:
    primary: "#00c88c"
    primary-bright: "#00dc9a"
    ink: "#222222"
    ink-pure: "#000000"
    active: "#171717"
    teal: "#133b55"
    nav-muted: "#777777"
    body: "#303030"
    muted: "#5e5e5e"
    faint: "#b4b4b4"
    hairline: "#dddddd"
    surface: "#f6f6f6"
    canvas: "#ffffff"
  typography:
    family: { display: "Outfit", body: "Pretendard" }
    hero-en:  { size: 64, weight: 500, lineHeight: 1.50, use: "English hero tagline 'Create a Better Life', Outfit, teal #133b55" }
    section:  { size: 36, weight: 700, lineHeight: 1.50, use: "Section headlines, ink #222222" }
    logo:     { size: 32, weight: 700, lineHeight: 1.50, use: "H1 wordmark 그린카" }
    nav:      { size: 18, weight: 600, lineHeight: 1.50, use: "Top nav items, Outfit" }
    button:   { size: 16, weight: 700, lineHeight: 1.50, use: "Button / CTA label" }
    body:     { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Pretendard" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 32, xxl: 48 }
  rounded: { sm: 6, md: 8, base: 12, lg: 16, xl: 20, full: 9999 }
  shadow:
    card: "rgba(0,0,0,0.08) 0px 4px 8px"
    none: "none"
  components:
    button-solid:   { type: button, bg: "#222222", fg: "#ffffff", radius: "8px", height: "52px", padding: "14px 20px", font: "16px / 700", use: "Primary dark CTA — 채용 바로가기" }
    button-outline: { type: button, fg: "#222222", border: "1px solid #222222", radius: "8px", height: "52px", padding: "14px 20px", font: "16px / 700", use: "Secondary outline CTA on light — 더 많은 뉴스 보기" }
    button-outline-invert: { type: button, fg: "#ffffff", border: "1px solid #ffffff", radius: "8px", height: "52px", padding: "14px 20px", font: "16px / 700", use: "Outline CTA on green/dark hero — 더 알아보기" }
    card-news:      { type: card, bg: "#ffffff", border: "1px solid #dddddd", radius: "12px", padding: "8px", shadow: "rgba(0,0,0,0.08) 0px 4px 8px", use: "News / mobility line-up card" }
    brand-panel:    { type: card, bg: "#00c88c", fg: "#000000", use: "Full-bleed green brand / hero panel" }
    nav-link:       { type: tab, fg: "#777777", font: "18px / 600", active: "text #171717", use: "Top nav item, Outfit" }
    accent-link:    { type: listItem, fg: "#00c88c", font: "16px / 700", use: "Green accent / footer policy link" }
  components_harvested: true
---

# Design System Inspiration of Greencar

## 1. Visual Theme & Atmosphere

Greencar (그린카) is Korea's pioneer car-sharing service — now a Lotte Rental brand — and its official site reads like a calm, editorial corporate-mobility surface rather than a transactional booking app. The canvas is pure white (`#ffffff`) broken by full-bleed bands of the signature brand green (`#00c88c` and the brighter `#00dc9a`), which carry the identity rather than decorate it. Body and heading text sit in pure black (`#000000`) and a softer dark chrome ink (`#222222`), giving the page a confident, grounded weight. The green is treated as the brand's "who we are" color — it floods hero panels and tints accent links — while the actual buttons are deliberately neutral, so the eye reads green as identity and dark as action.

The typographic personality pairs two fonts with two jobs. Latin display runs in **Outfit** — a geometric, rounded-terminal sans that gives the English hero tagline "Create a Better Life" an open, optimistic feel at 64px / weight 500 in a deep teal-navy (`#133b55`). Korean headlines and body run in **Pretendard**, the de-facto Korean product font, optimized for dense hangul legibility at 16px / weight 400. Section headlines step up to 36px / weight 700 in the dark ink (`#222222`), and the wordmark H1 그린카 sits at 32px / 700. The split — Outfit for the aspirational latin voice, Pretendard for the functional Korean reading layer — is the core tension of the system.

What distinguishes Greencar from heavier automotive and rental sites is its restraint with depth. The system is nearly flat: a single soft card shadow (`rgba(0,0,0,0.08) 0px 4px 8px`) lifts white news cards, and almost everything else separates through flat color bands and thin `#dddddd` hairlines on a light `#f6f6f6` surface. Interactive chrome leans on the 8px-radius rectangle — solid dark buttons (`#222222`) and matching outline buttons (transparent with a 1px dark or white border), all at 52px height with 14px 20px padding. Cards round more generously at 12-20px. The neutral text ladder steps from black through `#303030`, `#5e5e5e`, the muted nav grey `#777777`, down to a faint `#b4b4b4`. The result is a clean, modern, mobility-forward aesthetic: green where it signals the brand, dark where it asks for a tap, and quiet everywhere else.

**Key Characteristics:**
- Signature brand green (`#00c88c`) as identity — floods hero panels and tints accent links, not buttons
- Brighter green (`#00dc9a`) for full-bleed hero bands
- Outfit (latin display) + Pretendard (hangul body) — two fonts, two jobs
- Dark ink (`#222222`) and pure black (`#000000`) as the action + text colors
- Deep teal-navy (`#133b55`) for the English hero tagline "Create a Better Life"
- 8px-radius rectangular buttons; 12-20px radius cards — no pills on actions
- Near-flat depth: one soft `rgba(0,0,0,0.08) 0px 4px 8px` card shadow + `#dddddd` hairlines
- Cool neutral ladder (`#303030` → `#5e5e5e` → `#777777` → `#b4b4b4`) on `#f6f6f6` surface

## 2. Color Palette & Roles

### Primary
- **Greencar Green** (`#00c88c`): The signature brand color. Fills hero/brand panels and tints accent links — the system's identity color, used to say "this is Greencar" rather than "do this."
- **Bright Green** (`#00dc9a`): A more saturated companion green used for full-bleed hero bands and large brand surfaces.

### Ink & Action
- **Chrome Ink** (`#222222`): The dark action color. Solid CTA backgrounds, outline-button borders, and section-headline text.
- **Pure Black** (`#000000`): Primary body and heading text, and text placed on green panels.
- **Active Ink** (`#171717`): Near-black used for active/selected nav items.
- **Teal Navy** (`#133b55`): A deep blue-teal reserved for the English hero tagline ("Create a Better Life").

### Text Hierarchy
- **Body** (`#303030`): Secondary body copy and descriptions.
- **Muted** (`#5e5e5e`): Tertiary text, captions, metadata.
- **Nav Muted** (`#777777`): Inactive top-nav link color.
- **Faint** (`#b4b4b4`): Disabled text, lowest-emphasis labels.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white card surfaces, text on green/dark.
- **Surface Grey** (`#f6f6f6`): Light grey tinted surface for alternating sections and tool blocks.
- **Hairline** (`#dddddd`): Thin borders, card outlines, and dividers — the primary separation device in this near-flat system.

## 3. Typography Rules

### Font Family
- **Display (latin)**: `Outfit` — geometric rounded sans for the latin/English voice (hero tagline, wordmark, nav). Falls back through `Pretendard`, `sans-serif`.
- **Body (hangul)**: `Pretendard` — the document default for Korean headlines and body copy at weight 400.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Color | Notes |
|------|------|------|--------|-------------|-------|-------|
| Hero Tagline (EN) | Outfit | 64px (4.00rem) | 500 | 1.50 (96px) | `#133b55` | "Create a Better Life" |
| Section Heading | Outfit/Pretendard | 36px (2.25rem) | 700 | 1.50 (54px) | `#222222` | Section titles |
| Wordmark H1 | Outfit | 32px (2.00rem) | 700 | 1.50 (48px) | `#000000` | 그린카 logotype |
| Nav Item | Outfit | 18px (1.13rem) | 600 | 1.50 | `#777777` | Inactive nav; active `#171717` |
| Button | Outfit/Pretendard | 16px (1.00rem) | 700 | 1.50 | varies | CTA labels |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | `#000000` | Standard reading text |

### Principles
- **Two fonts, two jobs**: Outfit carries the aspirational latin voice (hero, wordmark, nav); Pretendard carries the functional Korean reading layer. They never swap roles.
- **Heavy section heads, light body**: Section headlines run weight 700 at 36px; body drops to weight 400 at 16px. The weight contrast is the primary hierarchy signal.
- **Consistent 1.5 line-height**: Hero, section, body, and nav all sit at a 1.5 line ratio — generous and even, which keeps dense hangul readable.
- **Teal for the tagline only**: The deep teal-navy (`#133b55`) is reserved for the English hero tagline; everything else is black or chrome ink.

## 4. Component Stylings

### Buttons

**Solid Dark (Primary)**
- Background: `#222222`
- Text: `#ffffff`
- Radius: 8px
- Padding: 14px 20px
- Height: 52px
- Font: 16px Outfit weight 700
- Use: Primary action CTA ("채용 바로가기")

**Outline Dark (Secondary)**
- Background: transparent
- Text: `#222222`
- Border: 1px solid `#222222`
- Radius: 8px
- Padding: 14px 20px
- Height: 52px
- Font: 16px weight 700
- Use: Secondary CTA on light backgrounds ("더 많은 뉴스 보기")

**Outline Invert (On Green/Dark)**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 8px
- Padding: 14px 20px
- Height: 52px
- Font: 16px weight 700
- Use: Outline CTA over green/dark hero panels ("더 알아보기")

### Cards & Containers

**News / Line-up Card**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Radius: 12px
- Padding: 8px
- Shadow: `rgba(0,0,0,0.08) 0px 4px 8px`
- Use: News items and mobility line-up cards on the homepage

**Green Brand Panel**
- Background: `#00c88c`
- Text: `#000000`
- Use: Full-bleed green brand/hero band (also `#00dc9a` brighter variant)

### Badges

**Green Accent Link**
- Text: `#00c88c`
- Font: 16px weight 700
- Use: Green accent / footer policy links ("개인정보 처리방침", "위치기반 서비스 이용약관")

### Navigation
- Background: `#ffffff`
- Text: `#777777` (inactive)
- Active: `#171717`
- Font: 18px Outfit weight 600
- Use: Top horizontal nav ("회사소개", "서비스", "인재채용")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.greencar.co.kr, https://www.greencar-gcar.co.kr
**Tier 2 sources:** getdesign.md/greencar — not listed (KR brand); styles.refero.design/?q=greencar — not listed
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 32px, 48px
- Notable: Buttons use 14px 20px padding for a comfortable 52px hit area; cards pad tight at 8px around media

### Grid & Container
- Centered single-column hero anchored by the 64px Outfit "Create a Better Life" tagline
- Full-bleed green (`#00c88c` / `#00dc9a`) brand bands alternate with white content sections
- News and mobility line-up arranged as a row of 12px-radius white cards with hairline borders
- Light grey (`#f6f6f6`) tinted bands segment secondary content

### Whitespace Philosophy
- **Brand bands over decoration**: large color separates content into zones — the green is the section device, not an icon or illustration
- **Flat segmentation**: sections separate by background color and `#dddddd` hairlines, not heavy elevation
- **Generous vertical rhythm**: airy spacing between corporate sections keeps the page calm and editorial

### Border Radius Scale
- Small (6px): inner controls
- Medium (8px): buttons — the action workhorse
- Base (12px): cards
- Large (16-20px): larger cards and media containers
- Full (9999px): occasional circular avatars/marks

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, brand bands, most surfaces |
| Tint (Level 1) | `#f6f6f6` background shift | Section separation without elevation |
| Hairline (Level 2) | `1px solid #dddddd` border | Card outlines, dividers |
| Card (Level 3) | `rgba(0,0,0,0.08) 0px 4px 8px` | News / line-up cards |

**Shadow Philosophy**: Greencar is a near-flat system. Live inspection found a single soft card shadow (`rgba(0,0,0,0.08) 0px 4px 8px`) on white news cards and `box-shadow: none` across hero bands, nav, and headings. Depth and grouping are communicated through flat color bands (green `#00c88c` / grey `#f6f6f6`) and thin `#dddddd` hairlines rather than stacked elevation. When emphasis is needed the system reaches for color (the green band) or the dark ink (`#222222`), not a heavier shadow.

## 7. Do's and Don'ts

### Do
- Use the brand green (`#00c88c`) as an identity color — hero panels and accent links, not buttons
- Use the dark ink (`#222222`) as the action color for solid and outline CTAs
- Pair Outfit (latin display) with Pretendard (hangul body) — keep their roles separate
- Use the deep teal-navy (`#133b55`) for the English hero tagline
- Keep buttons rectangular at 8px radius, 52px height, 14px 20px padding
- Separate sections with flat color bands and `#dddddd` hairlines, not heavy shadows
- Use the single soft card shadow (`rgba(0,0,0,0.08) 0px 4px 8px`) for white cards only
- Use pure black (`#000000`) for body and heading text

### Don't
- Spread the green across buttons and small controls — it dilutes the identity signal
- Use pill shapes on action buttons — Greencar buttons are 8px rectangles
- Add heavy or layered drop shadows — the system is near-flat
- Mix in a second saturated accent hue — green is the only brand color
- Set Korean display copy in Outfit or latin copy in Pretendard — keep the two fonts in their lanes
- Use the teal-navy (`#133b55`) for body text — it is reserved for the hero tagline
- Replace hairline `#dddddd` separators with thick borders or color blocks

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero tagline compresses, cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up card rows |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column card rows |

### Touch Targets
- Buttons at 52px height with 14px 20px padding — comfortably tappable
- Nav items at 18px with generous vertical padding
- Cards sized for full-width tap on mobile

### Collapsing Strategy
- Hero: 64px Outfit tagline scales down on mobile; weight 500 maintained
- Card rows: multi-column → 2-up → stacked single column
- Green brand bands maintain full-width treatment, reduce internal padding
- Top nav collapses to a hamburger toggle within the dark chrome header

### Image Behavior
- News/line-up card media maintains 12px radius across breakpoints
- Hero brand-band imagery scales full-bleed; the green fill persists at all sizes
- Cards keep the soft `rgba(0,0,0,0.08)` shadow on all viewports

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand identity / hero panel: Greencar Green (`#00c88c`), bright `#00dc9a`
- Action (buttons): Chrome Ink (`#222222`)
- Heading / body text: Pure Black (`#000000`)
- Active nav: `#171717`
- Hero tagline: Teal Navy (`#133b55`)
- Secondary text: Body (`#303030`), Muted (`#5e5e5e`)
- Inactive nav: `#777777`
- Faint / disabled: `#b4b4b4`
- Surface: `#f6f6f6`
- Hairline: `#dddddd`
- Background: Pure White (`#ffffff`)

### Example Component Prompts
- "Create a hero on white. English tagline 'Create a Better Life' at 64px Outfit weight 500, line-height 1.5, color #133b55. Below it a full-bleed green band (#00c88c) with black (#000000) text and a white-outline CTA: transparent bg, 1px solid #ffffff border, 8px radius, 14px 20px padding, 16px weight 700 — '더 알아보기'."
- "Design a news card: white #ffffff background, 1px solid #dddddd border, 12px radius, 8px padding, shadow rgba(0,0,0,0.08) 0px 4px 8px. Title 36px Outfit weight 700, #222222. Body 16px Pretendard weight 400, #303030."
- "Build a primary CTA: solid #222222 background, white #ffffff text, 8px radius, 14px 20px padding, 52px height, 16px weight 700 — '채용 바로가기'. Secondary variant: transparent bg, #222222 text, 1px solid #222222 border, same geometry."
- "Create top nav: white header. Outfit 18px weight 600 links, #777777 inactive, #171717 active. Green accent (#00c88c) for footer policy links at 16px weight 700."

### Iteration Guide
1. Green (`#00c88c`) is identity, dark ink (`#222222`) is action — never swap their roles
2. Outfit for latin, Pretendard for hangul — keep the lanes separate
3. Buttons are 8px rectangles at 52px height — no pills
4. One soft card shadow only; everything else is flat with `#dddddd` hairlines
5. Teal-navy (`#133b55`) is the hero tagline color, nothing else
6. Text is pure black (`#000000`); step down through `#303030` / `#5e5e5e` / `#777777` / `#b4b4b4`
7. Use grey `#f6f6f6` bands and green `#00c88c` bands to segment, not shadows

---

## 10. Voice & Tone

Greencar's voice is **warm, forward-looking, and human-centered** — a mobility brand that frames car-sharing as a way to expand life, not just rent a car. The English hero tagline "Create a Better Life" sets the aspirational register, while the Korean copy keeps it grounded and inclusive ("더 나은 모빌리티 경험을 함께 만들어 갈 여러분"). Copy treats mobility as a shared, human experience — connecting people, time, and space — rather than a transaction.

| Context | Tone |
|---|---|
| Hero tagline (EN) | Aspirational, open. "Create a Better Life." Optimistic, never hype. |
| Section headlines | Mission-framed, inclusive. "그린카는 고객 중심의 모빌리티 풀 라인업을 열어갑니다." |
| Recruit copy | Warm, invitational. "더 나은 모빌리티 경험을 함께 만들어 갈 여러분을 기다립니다." |
| CTAs | Direct, low-pressure. "더 알아보기", "더 많은 뉴스 보기", "채용 바로가기". |
| Brand statement | Connective. Mobility framed as linking people and space. |

**Voice samples (verbatim from live homepage):**
- "Create a Better Life" — hero tagline, Outfit 64px (aspirational brand statement). *(verified live 2026-06-26)*
- "그린카는 고객 중심의 모빌리티 풀 라인업을 열어갑니다." — section heading (customer-centered mobility). *(verified live 2026-06-26)*
- "더 나은 모빌리티 경험을 함께 만들어 갈 여러분을 기다립니다." — recruit section (invitational). *(verified live 2026-06-26)*
- "이동을 넘어 사람과 공간을 연결하는 그린카." — meta description (connective brand promise). *(verified live 2026-06-26)*

**Forbidden register**: aggressive sales urgency, discount-driven hard sell, undefined jargon, exclamation-heavy hype. Greencar speaks about mobility as a human experience, calmly and confidently.

## 11. Brand Narrative

Greencar (그린카) is one of Korea's pioneering car-sharing services, established in **2011** as the country began adopting on-demand short-term vehicle rental. In **2015** it became a subsidiary of **Lotte Rental (롯데렌탈)**, Korea's largest car-rental group, and today positions itself — in its own words on the homepage — as a "프리미엄 카셰어링 서비스" operated "롯데렌탈과 함께" (together with Lotte Rental). The brand's stated promise is to go "이동을 넘어 사람과 공간을 연결하는" — beyond movement, connecting people and space — designing "사용자 중심의 새로운 이동 경험" (a user-centered new mobility experience).

The product matured from round-trip car-sharing into a full mobility line-up: G car (round-trip and one-way car-sharing, G car zone, G car Pass, G car M, G car Biz), Movus, and Clingwash car-care. The corporate brand frames this expansion as "고객 중심의 모빌리티 풀 라인업" — a customer-centered, full mobility line-up — rather than a fleet catalog.

What Greencar refuses, visible in its design: the heavy, discount-driven chrome of legacy rental sites (no aggressive deal banners, no cluttered price tables on the brand surface) and the cold institutional palette of automotive incumbents. What it embraces: a calm editorial corporate surface, a single confident brand green, the aspirational latin voice of Outfit over the functional Korean clarity of Pretendard, and a near-flat layout that lets the green identity and the human copy carry the page.

## 12. Principles

1. **Green is identity, dark is action.** *UI implication:* reserve the brand green (`#00c88c`) for hero panels and accent links; keep buttons in neutral dark ink (`#222222`) so the next step is unambiguous.
2. **Mobility as a human experience.** Greencar frames car-sharing as connecting people and space. *UI implication:* lead with aspirational, inclusive copy; avoid transactional, price-first layouts on the brand surface.
3. **Two fonts, two voices.** *UI implication:* Outfit carries the aspirational latin voice; Pretendard carries the functional Korean reading layer — never blur the two.
4. **Flat and calm.** *UI implication:* separate with color bands and hairlines, not stacked shadows; keep the page editorial and quick to scan.
5. **One brand color.** *UI implication:* green is the only saturated hue — don't introduce a competing accent that would dilute the identity signal.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Greencar user segments (Korean urban car-sharing users, weekend renters, corporate mobility customers), not individual people.*

**김도윤, 28, 서울.** A city dweller without his own car who books a G car round-trip for weekend trips. Values that the brand feels modern and human rather than like a transactional rental counter. Chose Greencar partly because it is backed by Lotte Rental and feels trustworthy.

**이서연, 34, 경기.** A working parent who uses one-way G car and G car zone for errands and commuting. Appreciates the calm, uncluttered interface and clear CTAs that don't pressure her with deal banners.

**박준호, 41, 부산.** A small-business owner exploring G car Biz for corporate mobility. Wants a brand that signals reliability and scale; reads the "프리미엄 카셰어링" and Lotte Rental backing as reassurance.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no reservations)** | White canvas. Single Pure Black (`#000000`) line explaining nothing booked yet, with one dark CTA (`#222222`) to start. No clutter. |
| **Empty (saved list)** | Muted (`#5e5e5e`) single line: nothing saved yet, plus a path back. Calm, honest. |
| **Loading (list fetch)** | Skeleton cards on `#f6f6f6` tinted surface at final 12px-radius dimensions; flat pulse consistent with the near-flat system. |
| **Loading (in-place refresh)** | Subtle progress on the dark chrome (`#222222`); previous content stays visible. |
| **Error (request failed)** | Inline message in Pure Black with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f6f6f6` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | Faint (`#b4b4b4`) text on reduced-opacity surface; dark actions fade rather than change hue. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the calm, near-flat aesthetic. Cards and sections fade-in from below at `motion-standard / ease-enter`; buttons respond to press with a subtle opacity/scale shift. No bounce or spring — a mobility brand backed by a large rental group signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on https://www.greencar.co.kr
and https://www.greencar-gcar.co.kr:
- Hero EN tagline "Create a Better Life" — Outfit 64px / weight 500 / line-height 96px / color rgb(19,59,85) #133b55
- Section H3 "그린카는 고객 중심의 모빌리티 풀 라인업을 열어갑니다." — 36px / 700 / lh 54px / color rgb(34,34,34) #222222
- Wordmark H1 "그린카" — Outfit 32px / 700 / lh 48px / color rgb(0,0,0)
- Green brand bands — bg rgb(0,200,140) #00c88c and rgb(0,220,154) #00dc9a, black text
- Solid CTA "채용 바로가기" — bg rgb(34,34,34) #222222 / white text / 8px radius / 14px 20px / 52px height / 16px / 700
- Outline CTA "더 많은 뉴스 보기" — transparent / text #222222 / 1px solid #222222 / 8px radius / 52px
- News card — bg #ffffff / 1px solid rgb(221,221,221) #dddddd / 12px radius / shadow rgba(0,0,0,0.08) 0px 4px 8px
- Nav links — rgb(119,119,119) #777777 inactive, rgb(23,23,23) #171717 active, Outfit 18px / 600
- Green accent links "개인정보 처리방침" — color rgb(0,200,140) #00c88c / 16px / 700
- Fonts: "Outfit, Pretendard, sans-serif" body; Pretendard for hangul
- Page meta: title "그린카(Greencar) 공식사이트"; description "이동을 넘어 사람과 공간을 연결하는 그린카. 롯데렌탈과 함께하는 프리미엄 카셰어링 서비스로 사용자 중심의 새로운 이동 경험을 설계합니다."

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage (hero tagline, section heading, recruit section, meta description).

Brand narrative (§11): Greencar (그린카) is a Korean pioneer car-sharing service established 2011,
became a Lotte Rental (롯데렌탈) subsidiary in 2015. The "프리미엄 카셰어링", "롯데렌탈과 함께",
and "이동을 넘어 사람과 공간을 연결하는" framing are verbatim from the live homepage meta description.
Broader founding/acquisition details are widely documented public facts, not directly quoted from a
verified Greencar statement beyond the homepage.

Personas (§13) are fictional archetypes informed by publicly observable Greencar user segments
(Korean urban car-sharing users, corporate mobility customers). Names are illustrative; they do not
refer to real people.

Interpretive claims (e.g., "green is identity, dark is action", "flat and calm as a rejection of
discount-driven rental chrome") are editorial readings connecting Greencar's observed design to its
positioning, not directly sourced Greencar statements.
-->
