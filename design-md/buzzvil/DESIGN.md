---
id: buzzvil
name: Buzzvil
display_name_kr: 버즈빌
country: KR
category: marketing
homepage: "https://www.buzzvil.com"
primary_color: "#f44336"
logo:
  type: favicon
  slug: "https://www.buzzvil.com/favicon.png"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live contact-CTA coral red (#f44336, also the brandmark color); hero/dark sections sit on ink navy (#0e171f) with a dark slate card surface (#2a3f4d); the cool light surface (#f2f5f7) carries secondary buttons. Flat — box-shadow: none across the flagship surface."
  colors:
    primary: "#f44336"
    ink: "#0e171f"
    ink-pure: "#000000"
    canvas: "#ffffff"
    surface: "#f2f5f7"
    surface-dark: "#2a3f4d"
    body: "#3e5463"
    muted: "#5b7282"
    muted-alt: "#7a909e"
    faint: "#9fb1bd"
    faint-alt: "#c1ccd6"
    hairline: "#dce3e8"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    display-hero: { size: 78, weight: 800, lineHeight: 1.19, use: "Hero headline, Pretendard ExtraBold" }
    display:      { size: 56, weight: 700, use: "Large section headline" }
    section:      { size: 48, weight: 700, use: "Section title" }
    subsection:   { size: 32, weight: 700, use: "Card / feature heading" }
    title:        { size: 24, weight: 700, use: "Sub-heading" }
    lead:         { size: 24, weight: 400, lineHeight: 1.31, use: "Hero subhead / lead paragraph" }
    nav:          { size: 16, weight: 600, use: "Top nav link, Pretendard SemiBold" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    button-lg:    { size: 20, weight: 400, use: "Large CTA / filter-pill label" }
    caption:      { size: 12, weight: 500, use: "Small labels, metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 40, section: 80 }
  rounded: { sm: 4, md: 8, lg: 16, xl: 32, full: 9999 }
  shadow:
    none: "none"
  components:
    button-contact:    { type: button, bg: "#f44336", fg: "#ffffff", radius: "4px", height: "44px", padding: "12px 16px", font: "16px / 400", use: "Header 문의하기 contact CTA — coral-red primary action" }
    button-adcenter:   { type: button, bg: "#000000", fg: "#ffffff", radius: "4px", height: "44px", padding: "12px 16px", font: "16px / 400", use: "Header 광고센터 바로가기 — black high-contrast action" }
    button-outline:    { type: button, fg: "#000000", border: "1px solid #000000", radius: "4px", padding: "12px 16px", font: "16px / 400", use: "ENG / KOR language toggle" }
    button-secondary:  { type: button, bg: "#f2f5f7", fg: "#3e5463", radius: "8px", height: "55px", padding: "16px 32px", font: "20px / 400", use: "광고 상품 둘러보기 secondary explore" }
    button-ghost-dark: { type: button, fg: "#f2f5f7", border: "1px solid #f2f5f7", radius: "8px", height: "55px", padding: "16px 32px", font: "20px / 400", use: "광고 문의하기 ghost CTA over dark navy hero" }
    nav-link:          { type: tab, fg: "#5b7282", font: "16px / 600", active: "text #0e171f", use: "Top nav item (Products / Technologies / Company)" }
    filter-chip:       { type: tab, fg: "#c1ccd6", border: "1px solid #c1ccd6", radius: "9999px", height: "55px", padding: "16px", font: "20px / 400", active: "text #000000 on #ffffff fill", use: "Goal filter segmented pills (전체 / 브랜드 알리기)" }
    card-feature:      { type: card, bg: "#ffffff", fg: "#0e171f", radius: "32px", padding: "80px 40px 40px", use: "Large rounded feature / stat card, flat (no shadow)" }
    card-dark:         { type: card, bg: "#2a3f4d", fg: "#ffffff", radius: "32px", use: "Dark slate feature card on the navy hero section" }
  components_harvested: true
---

# Design System Inspiration of Buzzvil

## 1. Visual Theme & Atmosphere

Buzzvil (버즈빌) is Korea's reward-advertising and adtech platform, and its homepage reads like a confident, AI-forward product company rather than a media-buying middleman. The flagship surface (`www.buzzvil.com`) alternates two moods: bright, airy white (`#ffffff`) and cool-grey (`#f2f5f7`) bands for informational content, and immersive dark navy (`#0e171f`) sections — paired with a dark slate card surface (`#2a3f4d`) — for the persuasive, atmospheric moments. Text is set in pure black (`#000000`) and a deep near-black navy ink (`#0e171f`), never softened, which gives the marketing copy a crisp, declarative weight. The single saturated brand accent is a coral red (`#f44336`) — the exact hue of the Buzzvil brandmark — reserved almost entirely for the "문의하기" (contact) call-to-action, so the eye learns that red means "talk to us."

The typographic personality is unmistakably Korean-premium and entirely **Pretendard**, the de-facto hangul product font, carried at a wide weight range. Headlines run enormous and heavy — the hero "모두가 사랑하는 방식의 광고" ("Advertising that everyone loves") lands at **78px / weight 800 (ExtraBold)** — while section heads step down through 56px, 48px, and 32px at weight 700, and the lead subhead sits quiet at 24px / 400. Body and UI text drop to 16px / 400, with navigation labels at 16px / 600 SemiBold. There is exactly one font family doing every job; hierarchy comes from size and weight, not from a second typeface.

What distinguishes Buzzvil from heavier enterprise adtech peers is its flatness and its generous rounding. Live inspection found `box-shadow: none` across the hero, nav, cards, and buttons — depth is communicated by background color (white vs cool-grey `#f2f5f7` vs navy `#0e171f`) and by thin `#dce3e8` hairlines, never by elevation. Geometry leans soft: feature and stat cards use a large **32px** radius, segmented "goal" filter pills go fully round (9999px), and the smaller header buttons sit at a tidy 4px. The cool-slate neutral ladder — body slate `#3e5463`, nav muted `#5b7282`, then `#7a909e`, `#9fb1bd`, and the faint `#c1ccd6` used for inactive controls — gives text and UI a calm, engineered, blue-grey temperature. White CTA text (`#ffffff`) reads as `on-primary` against both the red and the navy.

**Key Characteristics:**
- Pretendard for everything — display ExtraBold (800) down to 16px body (400); hierarchy by size/weight, not by a second font
- Single saturated coral red (`#f44336`) reserved for the primary contact CTA — same hue as the brandmark
- Dual-mood layout: bright white/`#f2f5f7` info bands vs immersive dark navy (`#0e171f`) / slate (`#2a3f4d`) sections
- Pure black (`#000000`) and near-black navy (`#0e171f`) text — crisp and declarative, never grey-softened headlines
- Flat depth: `box-shadow: none`; separation by background color and `#dce3e8` hairlines
- Soft geometry: 32px rounded cards, fully-round (9999px) filter pills, 4px header buttons
- Cool blue-grey neutral ladder (`#3e5463` → `#5b7282` → `#7a909e` → `#9fb1bd` → `#c1ccd6`)

## 2. Color Palette & Roles

### Primary
- **Buzzvil Coral Red** (`#f44336`): Primary brand color and the contact-CTA background. The saturated red that matches the Buzzvil brandmark — the system's single "action" hue.
- **Ink Navy** (`#0e171f`): Near-black navy used for dark hero/immersive section backgrounds and for strong heading text. Carries warmth and weight without going pure black.
- **Pure Black** (`#000000`): Body and headline text, the black header "광고센터" CTA background, and the language-toggle outline color.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white feature cards, and `on-primary` text on red/navy/black.
- **Surface Grey** (`#f2f5f7`): Cool light-grey surface for alternating content bands and the secondary explore button.
- **Surface Dark** (`#2a3f4d`): Dark slate card surface used inside the navy sections.
- **Hairline** (`#dce3e8`): Thin borders and dividers — the primary separation device in this shadow-free system.

### Text Hierarchy
- **Pure Black** (`#000000`): Primary headings and body copy at maximum contrast.
- **Body Slate** (`#3e5463`): Secondary body text and the secondary-button label color.
- **Muted Slate** (`#5b7282`): Top-nav link color, tertiary labels.
- **Muted Alt** (`#7a909e`): Alternate muted slate for captions and metadata.
- **Faint Blue-Grey** (`#9fb1bd`): Low-emphasis labels and quiet supporting text.
- **Faint Alt** (`#c1ccd6`): Inactive control text and borders (e.g. unselected filter pills).
- **White** (`#ffffff`): Text on dark navy, slate, red, and black surfaces.

## 3. Typography Rules

### Font Family
- **Sans (all roles)**: `Pretendard` (with `sans-serif` fallback) — the single family for headlines, navigation, buttons, and body. ExtraBold (800) at the hero, 700 for section heads, 600 for nav, 400 for body.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Pretendard | 78px (4.88rem) | 800 | 1.19 (93px) | Hero headline, ExtraBold |
| Display | Pretendard | 56px (3.50rem) | 700 | — | Large section headline |
| Section | Pretendard | 48px (3.00rem) | 700 | — | Section title |
| Sub-section | Pretendard | 32px (2.00rem) | 700 | — | Card / feature heading |
| Title | Pretendard | 24px (1.50rem) | 700 | — | Sub-heading |
| Lead | Pretendard | 24px (1.50rem) | 400 | 1.31 | Hero subhead / lead paragraph |
| Nav Link | Pretendard | 16px (1.00rem) | 600 | — | Top navigation items |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 | Standard reading text |
| Button Large | Pretendard | 20px (1.25rem) | 400 | — | Large CTA / filter-pill labels |
| Caption | Pretendard | 12px (0.75rem) | 500 | — | Small labels, metadata |

### Principles
- **One family, full weight range**: Pretendard does every job; the jump from ExtraBold 800 headlines to 400 body is the system's primary hierarchy signal.
- **Headlines run large and heavy**: the hero is 78px / 800 — a declarative, brand-forward scale that compresses on smaller viewports while keeping the weight.
- **SemiBold for navigation**: nav links sit at 16px / 600, a notch heavier than 400 body so the chrome reads as interactive.
- **Hangul-first body**: 16px / 400 with 1.5 line-height keeps dense Korean marketing copy legible and breathable.

## 4. Component Stylings

### Buttons

**Contact CTA (Primary)**
- Background: `#f44336`
- Text: `#ffffff`
- Radius: 4px
- Padding: 12px 16px
- Height: 44px
- Font: 16px / 400 / Pretendard
- Use: Header "문의하기" contact call-to-action — the saturated coral-red action

**Ad-Center CTA (Black)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Padding: 12px 16px
- Height: 44px
- Font: 16px / 400 / Pretendard
- Use: Header "광고센터 바로가기" — neutral high-contrast secondary action

**Language Toggle (Outline)**
- Background: transparent
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 4px
- Padding: 12px 16px
- Height: 44px
- Font: 16px / 400 / Pretendard
- Use: ENG / KOR language switch

**Secondary Explore (Light)**
- Background: `#f2f5f7`
- Text: `#3e5463`
- Border: 1px solid `#f2f5f7`
- Radius: 8px
- Padding: 16px 32px
- Height: 55px
- Font: 20px / 400 / Pretendard
- Use: "광고 상품 둘러보기" secondary explore button

**Ghost on Dark**
- Background: transparent
- Text: `#f2f5f7`
- Border: 1px solid `#f2f5f7`
- Radius: 8px
- Padding: 16px 32px
- Height: 55px
- Font: 20px / 400 / Pretendard
- Use: "광고 문의하기" ghost CTA over the dark navy hero

### Tabs & Segmented Controls

**Top Nav Link**
- Text: `#5b7282`
- Font: 16px / 600 / Pretendard
- Active: `#0e171f` text on the selected/hover item
- Use: Top navigation (Products / Technologies / Resources / Company / Career)

**Goal Filter Pill**
- Background: transparent
- Text: `#c1ccd6`
- Border: 1px solid `#c1ccd6`
- Radius: 9999px
- Padding: 16px
- Height: 55px
- Font: 20px / 400 / Pretendard
- Active: `#000000` text on `#ffffff` fill, weight 700
- Use: Goal segmented filter ("전체", "브랜드 알리기")

### Cards & Containers

**Feature / Stat Card**
- Background: `#ffffff`
- Text: `#0e171f`
- Radius: 32px
- Padding: 80px 40px 40px
- Shadow: none
- Use: Large rounded feature/stat card (e.g. "39% 평균 클릭률", "x4 전환율", "82% 리텐션")

**Dark Slate Card**
- Background: `#2a3f4d`
- Text: `#ffffff`
- Radius: 32px
- Shadow: none
- Use: Dark feature card nested in the navy hero/immersive sections

### Navigation
- Background: `#ffffff`
- Text: `#5b7282` (active `#0e171f`)
- Font: 16px / 600 / Pretendard
- Height: 75px header row
- Use: Sticky top nav with right-aligned black "광고센터 바로가기" + red "문의하기" CTAs

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.buzzvil.com (homepage, live computed style — hero, nav, CTAs, cards, filter pills); https://tech.buzzvil.com/ (official Buzzvil Tech blog — brand-owned); https://tech.buzzvil.com/blog/design-system-at-buzzvil (official Buzzvil design-system post — brand-owned, design philosophy)
**Tier 2 sources:** getdesign.md/buzzvil — 404 (not listed); styles.refero.design ?q=buzzvil — no Buzzvil-specific entry (generic catalog results only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 40px, 80px
- Notable: card interiors use a deliberate 80px top / 40px side pad (measured 80px 40px 40px), giving the big 32px-radius stat cards an airy, gallery-like presence

### Grid & Container
- Centered single-column hero anchored by the 78px Pretendard ExtraBold headline over a dark navy (`#0e171f`) backdrop
- Goal-selector row of fully-round filter pills beneath the hero
- Content alternates full-width bands: white (`#ffffff`), cool-grey (`#f2f5f7`), and immersive navy (`#0e171f`)
- Stat/feature cards group at a 32px radius; nested dark cards use slate (`#2a3f4d`)

### Whitespace Philosophy
- **Airy over dense**: despite being a data/performance product, the marketing surface is generous with vertical rhythm and large card padding.
- **Color-band segmentation**: sections separate by background color (white vs `#f2f5f7` vs navy), not by borders or shadows.
- **Round rhythm**: the repeated 32px card radius and 9999px pills set a consistently soft horizontal cadence.

### Border Radius Scale
- Small (4px): header buttons (contact, ad-center, language toggle)
- Medium (8px): hero secondary/ghost buttons
- Large (16px): inner white cards / media tiles
- XL (32px): feature and stat cards — the workhorse rounding
- Full (9999px): goal filter pills, round chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Color band (Level 1) | Background shift (white / `#f2f5f7` / `#0e171f`) | Section separation without elevation |
| Hairline (Level 2) | `1px solid #dce3e8` border | Dividers and subtle card outlines |
| Tint card (Level 3) | Tinted surface inside dark sections (slate `#2a3f4d`) | Grouping within immersive bands |

**Shadow Philosophy**: Buzzvil is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, headings, cards, and buttons. Depth and grouping are communicated entirely through background color (white, cool-grey `#f2f5f7`, and dark navy `#0e171f`) and thin `#dce3e8` hairlines. When emphasis is needed, the system reaches for the coral red (`#f44336`) or a dark slate card (`#2a3f4d`), never elevation — keeping the adtech UI feeling clean, fast, and modern.

## 7. Do's and Don'ts

### Do
- Use Pretendard for everything — ExtraBold (800) for the hero, 700 for section heads, 600 for nav, 400 for body
- Reserve coral red (`#f44336`) for the primary contact CTA — keep it the single "action" color
- Use pure black (`#000000`) and near-black navy (`#0e171f`) for text — crisp and declarative
- Alternate white, cool-grey (`#f2f5f7`), and dark navy (`#0e171f`) full-width bands for rhythm
- Keep the system flat — separate with color bands and `#dce3e8` hairlines, never shadows
- Use large 32px rounding on feature/stat cards and full-round (9999px) filter pills
- Use the cool blue-grey neutral ladder (`#3e5463` → `#5b7282` → `#7a909e` → `#9fb1bd` → `#c1ccd6`) for text hierarchy
- Use a dark slate card (`#2a3f4d`) for grouping inside navy sections

### Don't
- Spread coral red across many elements — it dilutes the single-action signal
- Add drop shadows for elevation — Buzzvil is a flat, shadow-free system
- Introduce a second display typeface — Pretendard owns every weight and role
- Soften headlines to a light weight — display is ExtraBold (800)
- Mix in a second saturated accent hue — coral red is the only one
- Use sharp corners on big cards — large 32px rounding is the brand geometry
- Use grey for inactive-only controls when the faint slate (`#c1ccd6`) is the system's quiet state

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses from 78px, filter pills wrap/scroll |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column card bands |

### Touch Targets
- Header CTAs at 44px height with 12px 16px padding — comfortably tappable
- Hero secondary/ghost buttons at 55px height, 16px 32px padding
- Filter pills at 55px height, fully round for unmistakable targets

### Collapsing Strategy
- Hero: 78px ExtraBold headline scales down on mobile, weight 800 maintained
- Filter-pill row: horizontal wrap/scroll on narrow viewports
- Feature/stat cards: multi-column → stacked single column, 32px radius retained
- White / grey / navy bands maintain full-width treatment

### Image Behavior
- Product screenshots and illustrations carry no shadow at any size, consistent with the flat system
- Cards keep their 32px (feature) / 16px (inner) radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Buzzvil Coral Red (`#f44336`)
- Dark sections / strong text: Ink Navy (`#0e171f`)
- Body / headline text: Pure Black (`#000000`)
- Background: Pure White (`#ffffff`)
- Light surface / secondary button: Surface Grey (`#f2f5f7`)
- Dark card surface: Surface Dark (`#2a3f4d`)
- Secondary text: Body Slate (`#3e5463`)
- Nav / muted text: Muted Slate (`#5b7282`), `#7a909e`
- Faint / inactive: Faint Blue-Grey (`#9fb1bd`), `#c1ccd6`
- Hairline: `#dce3e8`
- On primary/dark: White (`#ffffff`)

### Example Component Prompts
- "Create a sticky white top nav (75px). Pretendard 16px / 600 links in `#5b7282`, active `#0e171f`. Right-aligned: black `#000000` 'ad center' CTA and coral-red `#f44336` 'contact' CTA, white text, 4px radius, 12px 16px padding, 44px height."
- "Build a dark hero: `#0e171f` background. Headline 78px Pretendard weight 800, white text. Subhead 24px / 400 in `#f2f5f7`. Two buttons at 8px radius, 16px 32px padding, 55px height: light `#f2f5f7` fill with `#3e5463` text, and a ghost with 1px `#f2f5f7` border and `#f2f5f7` text."
- "Design a stat card: white `#ffffff` background, 32px radius, no shadow, 80px 40px 40px padding. Big number in `#0e171f`, label in `#3e5463`. Place three side by side in a band."
- "Create a goal filter row of fully-round pills (9999px, 55px height, 16px padding, 20px Pretendard). Inactive: transparent with 1px `#c1ccd6` border and `#c1ccd6` text. Active: `#ffffff` fill, `#000000` text, weight 700."

### Iteration Guide
1. Pretendard everywhere — 800 hero, 700 sections, 600 nav, 400 body
2. Coral red (`#f44336`) is the single action color — don't spread it
3. No shadows — separate with white / `#f2f5f7` / `#0e171f` color bands and `#dce3e8` hairlines
4. Round geometry — 32px cards, 9999px pills, 4px header buttons
5. Text is black `#000000` / navy `#0e171f`; secondary slate `#3e5463`; muted `#5b7282`
6. Dark sections use navy `#0e171f` with slate `#2a3f4d` cards
7. White (`#ffffff`) is the on-primary text on red, navy, black, and slate

---

## 10. Voice & Tone

Buzzvil's voice is **confident, benefit-first, and friendly-technical** — an adtech company that frames advertising not as interruption but as something users genuinely welcome. The hero line "모두가 사랑하는 방식의 광고" ("Advertising that everyone loves") sets the register: optimistic, human-centered, and quietly bold. Performance is communicated through concrete numbers (CTR, CVR, retention) rather than hype adjectives, and the product story leans into "인터랙션 AI 에이전트" (interaction AI agents) as the next chapter.

| Context | Tone |
|---|---|
| Hero headlines | Optimistic, human-centered, declarative. "모두가 사랑하는 방식의 광고." |
| Product / feature copy | Benefit-first, backed by a concrete metric. "39% 평균 클릭률", "x4 전환율". |
| CTAs | Direct and low-pressure. "문의하기", "광고센터 바로가기", "광고 상품 둘러보기". |
| Goal selector | Plain, outcome-framed. "브랜드 알리기", "전체". |
| Tech / design blog | Peer-to-peer engineering voice, reflective and principled (e.g. minimalism, technical debt in design). |

**Voice samples (verbatim from live brand surfaces):**
- "모두가 사랑하는 방식의 광고" — homepage hero headline (mission-framed). *(verified live 2026-06-26)*
- "인터랙션 AI 에이전트를 기반으로, 고객에게 필요한 초개인화 된 경험을" — hero subhead (positioning). *(verified live 2026-06-26)*
- "Simplicity is key. By keeping things simple, more people will understand what you want to express." — Buzzvil design-system blog. *(verified live 2026-06-26)*

**Forbidden register**: interruption-framed ad language, fear-based or dark-pattern urgency, hollow superlatives without a metric, jargon left unexplained to non-marketers.

## 11. Brand Narrative

Buzzvil (버즈빌) was founded in **2012** by **John Gwanwoo Lee (이관우, CEO)** and co-founder **Robert Seo**, who named the company for the "buzz" they intended to create. The founding insight is famously concrete: Lee took the idea for lock-screen advertising from the platform screen doors at subway stations — an everyday surface people glance at constantly — and asked what a smartphone's first screen could become. From that came **HoneyScreen** (a reward lock-screen app) and then **BuzzScreen**, a B2B SDK that lets any partner app run a reward-advertising lock screen without shipping a separate app.

The company grew into a cross-border reward-advertising and adtech platform, acquiring the US lock-screen company **SlideJoy** in 2016 and operating offices across Korea, the US, Japan, and Taiwan. Its mission — to let advertisers and publishers engage users on the first screen in a way that rewards rather than interrupts — is captured on the homepage as "모두가 사랑하는 방식의 광고" (advertising everyone loves). The current chapter reframes the platform around "인터랙션 AI 에이전트" — interaction AI agents that deliver hyper-personalized experiences.

What Buzzvil refuses, visible in its design: the heavy, shadow-stacked chrome and interruption aesthetics of legacy adtech. What it embraces — echoed in its own design-system writing ("Simplicity is key… minimalism comes from this mindset") — is a flat, fast, Pretendard-set interface; a single trustworthy coral red; large soft rounding; and copy that backs claims with numbers.

## 12. Principles

1. **Advertising people welcome.** The brand exists to make ads rewarding, not interruptive. *UI implication:* lead with user benefit and concrete value (reward, relevance), never dark-pattern urgency.
2. **One action, one color.** Coral red (`#f44336`) means "do this / talk to us." *UI implication:* reserve the saturated red for the primary CTA so the next step is unambiguous.
3. **Simplicity by design.** Buzzvil's own design team states "simplicity is key… minimalism comes from this mindset." *UI implication:* fewer typefaces, flat depth, color-band layout; remove before adding.
4. **Prove it with numbers.** Performance claims are shown as metrics (CTR, CVR, retention). *UI implication:* pair every benefit headline with a measurable stat in a card.
5. **Soft, modern, flat.** Large rounding and shadow-free surfaces over heavy elevation. *UI implication:* 32px cards, pills, color bands and hairlines instead of drop shadows.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Buzzvil user segments (performance marketers, app publishers integrating reward ads, adtech partners), not individual people.*

**박지훈, 33, 서울.** A performance marketer at a mid-size e-commerce brand. Buys reward-ad inventory through Buzzvil and judges every channel by CTR and CVR. Trusts the homepage because the claims come with numbers, not adjectives.

**이서연, 29, 경기.** A product manager at a consumer app integrating the BuzzScreen reward SDK. Wants a clean, well-documented surface and values that Buzzvil frames ads as user reward rather than interruption.

**Daniel Kim, 41, San Francisco.** A US partnerships lead evaluating cross-border reward-ad supply. Appreciates the bilingual (ENG/KOR) surface and the calm, metric-driven positioning over hype.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no campaign / results)** | White canvas. Single near-black navy (`#0e171f`) line explaining there's nothing yet, with one coral-red (`#f44336`) CTA to start. No clutter. |
| **Empty (saved list, none yet)** | Muted slate (`#5b7282`) single line: nothing saved yet, plus a path back. Calm and honest. |
| **Loading (results fetch)** | Skeleton blocks on `#f2f5f7` tinted surface at final card dimensions, 32px radius. Flat pulse, no shadow shimmer — consistent with the shadow-free system. |
| **Loading (in-place refresh)** | Subtle inline progress; previous values stay visible. |
| **Error (request failed)** | Inline message in `#0e171f` with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". |
| **Success (inquiry submitted)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f2f5f7` blocks at final dimensions, 32px radius, flat pulse. |
| **Disabled** | Faint blue-grey (`#c1ccd6`) text on a reduced-opacity surface; red actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card/section reveal, filter switch |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, pills, panels |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, matching the flat, fast aesthetic. Filter pills respond to press with a subtle scale/opacity shift; stat and feature cards fade-in from below at `motion-standard / ease-enter`. No bounce or spring — an adtech platform signals reliability, not gimmickry. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on https://www.buzzvil.com:
- Hero H1 "모두가 사랑하는 방식의 광고" — Pretendard 78px / weight 800 / over dark navy rgb(14,23,31) #0e171f
- Hero subhead "인터랙션 AI 에이전트를 기반으로..." — 24px / 400
- Contact CTA "문의하기" — bg rgb(244,67,54) #f44336 / white text / radius 4px / 12px 16px / height 44px
- Ad-center CTA "광고센터 바로가기" — bg rgb(0,0,0) #000000 / white text / radius 4px
- Secondary "광고 상품 둘러보기" — bg rgb(242,245,247) #f2f5f7 / text rgb(62,84,99) #3e5463 / radius 8px / 16px 32px
- Nav links — color rgb(91,114,130) #5b7282 / 16px / 600
- Filter pills — radius 9999px / active #ffffff fill + #000000 text / inactive #c1ccd6 border+text
- Stat/feature cards — radius 32px / box-shadow none
- box-shadow: none across hero/nav/cards/buttons (flat system confirmed)
- document.title: "버즈빌 | 인터랙션 AI agent로 시작하는 모두가 사랑하는 방식의 광고"

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10): hero headline + subhead verbatim from the live homepage; the
"Simplicity is key…" line is verbatim from the Buzzvil design-system blog
(https://tech.buzzvil.com/blog/design-system-at-buzzvil), fetched this turn.

Brand narrative (§11): Buzzvil founded 2012 by John Gwanwoo Lee (이관우, CEO) and
Robert Seo; lock-screen idea from subway platform screen doors; HoneyScreen → BuzzScreen
SDK; SlideJoy (US) acquisition 2016; offices in KR/US/JP/TW. These are widely documented
public facts about the company gathered via web search this turn; not all are directly
quoted from a single verified Buzzvil statement.

Personas (§13) are fictional archetypes informed by publicly observable Buzzvil segments
(performance marketers, app publishers, adtech partners). Names are illustrative; they do
not refer to real people.

Interpretive claims (e.g., "one action, one color", "flat and fast as a rejection of
legacy adtech chrome") are editorial readings connecting Buzzvil's observed design and
stated design-team values to its positioning, not directly sourced Buzzvil statements.
-->
