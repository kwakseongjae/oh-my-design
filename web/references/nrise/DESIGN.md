---
id: nrise
name: NRISE (WIPPY)
display_name_kr: 엔라이즈 (위피)
country: KR
category: consumer-tech
homepage: "https://www.nrise.net/"
primary_color: "#ff0056"
logo:
  type: favicon
  slug: "https://opening-attachments.greetinghr.com/20230601/02c9543a-74ed-4592-853f-17b2adc07c5d/nrise_logo_launchericon2.png"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live WIPPY product CTA pink (#ff0056); the system is otherwise monochrome — a dark ink ladder (#222222 headings, #000000 pure black, #212529/#212126 deep neutrals) on white (#ffffff). Near-shadowless flat surfaces."
  colors:
    primary: "#ff0056"
    ink: "#222222"
    ink-pure: "#000000"
    ink-nav: "#212429"
    neutral-900: "#212529"
    neutral-850: "#212126"
    section-dark: "#111111"
    canvas: "#ffffff"
    surface: "#fafafa"
    muted: "#767676"
    muted-alt: "#8c8c8c"
    on-dark: "#ffffff"
  typography:
    family: { sans: "Pretendard" }
    display-hero: { size: 48, weight: 700, lineHeight: 1.50, use: "WIPPY hero headline, Pretendard Bold" }
    section:      { size: 38, weight: 700, lineHeight: 1.35, use: "Corporate section titles (NRISE가 세상에 전하는 가치)" }
    section-sm:   { size: 36, weight: 700, lineHeight: 1.33, use: "Product section titles on the career/WIPPY surface" }
    subheading:   { size: 23, weight: 700, lineHeight: 1.35, use: "Card / feature subheads" }
    logo:         { size: 20, weight: 700, lineHeight: 1.50, use: "Corporate logotype in the nav" }
    eyebrow:      { size: 19, weight: 400, lineHeight: 1.50, use: "Section eyebrow labels (MISSION, HISTORY, NEWS)" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Body copy, news items, CTA labels" }
    nav:          { size: 14, weight: 600, lineHeight: 1.50, use: "Top-nav item labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { xs: 4, sm: 8, md: 10, lg: 12, xl: 24, pill: 30, jumbo: 48 }
  shadow:
    none: "none"
    floating: "rgba(0,0,0,0.04) 0px 1px 2px 0px, rgba(0,0,0,0.06) 0px 8px 24px"
  components:
    cta-wippy:    { type: button, bg: "#ff0056", fg: "#ffffff", radius: "30px", padding: "8px 16px", height: "40px", font: "16px / 700", use: "WIPPY product CTA (더 알아보기) — the single signature pink action" }
    cta-dark-pill: { type: button, bg: "#000000", fg: "#ffffff", radius: "30px", padding: "8px 16px", height: "40px", font: "16px / 700", use: "Second-product CTA (더 알아보기) on the corporate home" }
    cta-solid:    { type: button, bg: "#000000", fg: "#ffffff", radius: "8px", padding: "10.5px 24px", height: "48px", font: "16px / 400", use: "WIPPY career primary button (바로가기)" }
    nav-item:     { type: button, bg: "#ffffff", fg: "#212429", radius: "4px", padding: "5.5px 12px", height: "32px", font: "14px / 600", active: "bg #222222 fg #ffffff", use: "Top-nav item; active item fills dark" }
    floating-top: { type: button, bg: "#212529", fg: "#ffffff", radius: "24px", height: "48px", shadow: "rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.06) 0px 8px 24px", use: "Scroll-to-top floating action button" }
    news-card:    { type: card, bg: "#ffffff", radius: "10px", use: "News/press list card on white canvas" }
    dark-card:    { type: card, bg: "#212126", fg: "#ffffff", radius: "12px", use: "Dark product feature card on the WIPPY surface" }
    eyebrow-tag:  { type: badge, fg: "#767676", font: "19px / 400", use: "Section eyebrow label (MISSION, HISTORY, NEWS)" }
  components_harvested: true
---

# Design System Inspiration of NRISE (WIPPY)

## 1. Visual Theme & Atmosphere

NRISE (엔라이즈) is the Korean consumer-tech company behind WIPPY (위피), a No.1-positioned social-discovery app, and 콰트 (Quat), a habit-forming health product. Its web surfaces read as confident, editorial, and almost aggressively monochrome — a near-black-on-white system where a single saturated pink is the only chromatic event on the page. The canvas is pure white (`#ffffff`) with occasional soft-grey blocks (`#fafafa`); text and headings sit in a warm near-black ink (`#222222`) rather than pure black for display, while body copy defaults to true black (`#000000`). The effect is clean, high-contrast, and product-forward: the design gets out of the way so the app screenshots and the one pink CTA can do the talking.

The typographic personality is unmistakably Korean-modern: everything is set in **Pretendard**, the de-facto Korean product sans, with headlines running at a heavy **weight 700**. The corporate hero and section titles land at 38px, the WIPPY product hero jumps to 48px, and section heads on the product surface sit at 36px — all bold, all tight-leading, all in the same near-black `#222222`. Small grey eyebrow labels (`#767676`) in Latin caps ("MISSION", "HISTORY", "NEWS") introduce each block at 19px / weight 400, giving the layout a magazine-like rhythm. Nav labels drop to a quiet 14px / weight 600 in a near-black nav ink (`#212429`). There is no second typeface and no light display weight — the hierarchy is carried entirely by size and the bold/regular weight split.

What distinguishes NRISE from its consumer-app peers is its restraint with depth and color. The system is essentially **shadow-free**: live inspection found `box-shadow: none` across the hero, nav, headings, and section CTAs — only a single floating scroll-to-top button carries a subtle two-layer shadow. Separation comes from flat surfaces and dark blocks instead of elevation: a deep-neutral ladder of near-blacks (`#212529`, `#212126`, `#111111`) anchors dark sections and cards, while white cards round at 10–12px. Interactive chrome splits cleanly in two: **pill CTAs** at 30px radius (the pink `#ff0056` WIPPY action and a black `#000000` twin for the second product) on the corporate home, and a sharper 8px solid black button on the WIPPY career surface. The result is a flat, fast, mobile-native aesthetic — the visual language of a young Korean app studio, not a legacy corporate site.

**Key Characteristics:**
- Pretendard everywhere at weight 700 for headlines — no second typeface, no light display weight
- A single saturated pink (`#ff0056`) reserved for the primary WIPPY CTA — the only chromatic accent
- Warm near-black ink (`#222222`) for headings; true black (`#000000`) for body and dark CTAs
- Monochrome dark ladder — `#212529` / `#212126` / `#111111` — for dark sections, cards, and the floating action
- Near-shadow-free: separation via flat white / grey (`#fafafa`) surfaces and dark blocks, not elevation
- Latin grey eyebrow labels (`#767676`) at 19px introducing each editorial section
- Pill geometry on the corporate home (30px CTAs) vs a sharper 8px solid button on the product surface
- Quiet 14px / weight 600 nav labels in near-black nav ink (`#212429`)

## 2. Color Palette & Roles

### Primary
- **WIPPY Pink** (`#ff0056`): The single saturated brand accent and primary CTA background. A hot magenta-pink used almost exclusively for the WIPPY product call-to-action — the system's one "action" color.

### Ink & Text
- **Ink** (`#222222`): Primary heading and display color. A warm near-black used for every headline (H1/H2/H3) and most section text — softer than pure black, which gives the type a premium weight.
- **Pure Black** (`#000000`): Body-copy default and the fill of the black pill/solid CTAs and dark sections. Maximum contrast where it counts.
- **Nav Ink** (`#212429`): The near-black used for top-nav item labels — a hair cooler than the heading ink.
- **Muted Grey** (`#767676`): Eyebrow labels ("MISSION", "HISTORY", "NEWS"), metadata, and lowest-emphasis captions.
- **Muted Alt** (`#8c8c8c`): A lighter grey companion for secondary captions and fine print.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, white cards, and text on dark/pink surfaces.
- **Surface Grey** (`#fafafa`): Soft off-white block background for alternating sections.
- **Neutral 900** (`#212529`): The deepest working neutral — background of the floating scroll-to-top action and dark neutral surfaces.
- **Neutral 850** (`#212126`): Near-black card background for dark product feature cards on the WIPPY surface.
- **Section Dark** (`#111111`): Very dark block background for immersive full-width dark sections.

### On-Dark
- **On Dark** (`#ffffff`): White text and icons placed on any of the dark neutral or pink surfaces.

## 3. Typography Rules

### Font Family
- **Sans**: `Pretendard` (with `-apple-system`, `system-ui`, `Apple SD Gothic Neo`, `Noto Sans KR`, `Malgun Gothic` fallbacks) — the single family for the entire system, from display to body.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| WIPPY Hero | Pretendard | 48px (3.00rem) | 700 | 1.50 (72px) | Product hero headline on the career surface |
| Corporate Section | Pretendard | 38px (2.38rem) | 700 | 1.35 (51.3px) | Corporate section titles |
| Product Section | Pretendard | 36px (2.25rem) | 700 | 1.33 | Section titles on the WIPPY surface |
| Sub-heading | Pretendard | 23px (1.44rem) | 700 | 1.35 (31px) | Card / feature subheads |
| Logotype | Pretendard | 20px (1.25rem) | 700 | 1.50 (30px) | Corporate logotype in the nav |
| Eyebrow | Pretendard | 19px (1.19rem) | 400 | 1.50 (28.5px) | Latin caps section labels, muted grey |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | Body copy, news items, button labels |
| Nav Link | Pretendard | 14px (0.88rem) | 600 | 1.50 (21px) | Top-nav item labels |

### Principles
- **One font, two weights**: Pretendard carries everything. Weight 700 is display/heading; weight 400 is body and eyebrow; nav sits at 600. There is no third typeface and no light display weight.
- **Weight is the hierarchy**: With a single family, the bold/regular contrast (and size) does all the hierarchy work — headlines are always 700, body always 400.
- **Comfortable leading**: Body and hero run at a generous 1.5 line-height for hangul legibility; section titles tighten only slightly (~1.33–1.35).
- **Latin eyebrows over hangul body**: Uppercase Latin labels ("MISSION", "HISTORY") in muted grey introduce hangul content blocks — a deliberate editorial device.

## 4. Component Stylings

### Buttons

**WIPPY CTA (Primary)**
- Background: `#ff0056`
- Text: `#ffffff`
- Radius: 30px
- Padding: 8px 16px
- Height: 40px
- Font: 16px Pretendard weight 700
- Use: WIPPY product call-to-action ("더 알아보기") — the system's single saturated action

**Dark Pill CTA**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 30px
- Padding: 8px 16px
- Height: 40px
- Font: 16px Pretendard weight 700
- Use: Second-product CTA ("더 알아보기") on the corporate home — a monochrome twin of the pink pill

**Solid Button (Product surface)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 8px
- Padding: 10.5px 24px
- Height: 48px
- Font: 16px Pretendard weight 400
- Use: WIPPY career primary button ("바로가기") — sharper geometry than the home pills

**Nav Item**
- Background: `#ffffff`
- Text: `#212429`
- Radius: 4px
- Padding: 5.5px 12px
- Height: 32px
- Font: 14px Pretendard weight 600
- Active: background `#222222`, text `#ffffff`
- Use: Top-nav item (HOME / PRODUCT / CULTURE / CAREER); the active item fills dark

**Floating Top Button**
- Background: `#212529`
- Text: `#ffffff`
- Radius: 24px
- Height: 48px
- Shadow: `rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.06) 0px 8px 24px`
- Use: Scroll-to-top floating action — the one place the flat system uses elevation

### Cards & Containers

**News Card (White)**
- Background: `#ffffff`
- Radius: 10px
- Use: News/press list card on the white canvas (no shadow)

**Dark Feature Card**
- Background: `#212126`
- Text: `#ffffff`
- Radius: 12px
- Use: Dark product feature card on the WIPPY surface

### Badges

**Eyebrow Label**
- Text: `#767676`
- Font: 19px Pretendard weight 400
- Use: Latin-caps section eyebrow ("MISSION", "HISTORY", "NEWS")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.nrise.net/ ; https://career.nrise.net/ko/wippy ; https://github.com/nrise ; https://nrise.github.io/
**Tier 2 sources:** getdesign.md/nrise (0 files — not covered) ; styles.refero.design/?q=nrise & ?q=wippy (generic grid only — no brand-specific match)
**Conflicts unresolved:** none (Tier 2 empty for this KR brand; all values Tier 1 live-inspected)

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Notable: Button padding lands at 8px 16px (home pills) and 10.5px 24px (product solid button); section rhythm is generous and vertical

### Grid & Container
- Centered single-column marketing layout with an editorial eyebrow → headline → content cadence per section
- Corporate home alternates white (`#ffffff`) and soft-grey (`#fafafa`) full-width bands; the WIPPY surface introduces full-width dark blocks
- News/press items sit in a list of white cards at 10px radius
- Feature content on the product surface uses dark cards (`#212126`) at 12px radius

### Whitespace Philosophy
- **Editorial spacing over density**: generous vertical rhythm between sections; each block breathes around its eyebrow-and-headline pair.
- **Flat segmentation**: sections separate by background shift (white ↔ `#fafafa` ↔ dark blocks), not by shadow or heavy borders.
- **Single-accent focus**: with only one saturated color, the pink CTA is the visual anchor of any screen it appears on.

### Border Radius Scale
- Extra-small (4px): nav item buttons
- Small (8px): the product-surface solid button
- Medium (10px): white news/list cards
- Large (12px): dark feature cards
- XL (24px): the floating scroll-to-top action
- Pill (30px): the home-page CTA pills
- Jumbo (48px): large pill/avatar-scale rounding

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, headings, nav, section CTAs, cards — the default |
| Tint (Level 1) | `#fafafa` / dark block background shift | Section separation without elevation |
| Floating (Level 2) | `rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.06) 0px 8px 24px` | The single floating scroll-to-top button |

**Shadow Philosophy**: NRISE is a near-shadowless, flat system. Live inspection returned `box-shadow: none` across the hero, nav, headings, cards, and section CTAs on both surfaces — the only element carrying a shadow is the floating scroll-to-top button, which uses a soft two-layer drop. Depth and grouping are otherwise communicated entirely through flat surfaces: white (`#ffffff`), soft grey (`#fafafa`), and the dark neutral ladder (`#212529`, `#212126`, `#111111`). When emphasis is needed the system reaches for the pink `#ff0056` CTA or a dark block, never elevation.

## 7. Do's and Don'ts

### Do
- Set every headline in Pretendard weight 700 — it's the entire display voice
- Use warm near-black ink (`#222222`) for headings and true black (`#000000`) for body
- Reserve pink (`#ff0056`) for the primary WIPPY CTA — keep it the single "action" color
- Separate sections with flat surfaces (`#ffffff` ↔ `#fafafa` ↔ dark blocks), not shadows
- Introduce sections with muted-grey (`#767676`) Latin-caps eyebrow labels at 19px
- Use pill geometry (30px) for the home CTAs and a sharper 8px solid button on the product surface
- Anchor dark sections and cards with the neutral ladder (`#212529`, `#212126`, `#111111`)
- Keep body and hero leading generous (1.5) for hangul legibility

### Don't
- Add drop shadows for elevation — NRISE is flat; only the floating TOP button carries one
- Spread pink across many elements — it dilutes the single-action signal
- Introduce a second typeface or a light display weight — Pretendard 700/400 is the whole system
- Use pure black (`#000000`) for headings — reserve the warm near-black `#222222`
- Mix in a second accent hue — pink is the only saturated color
- Set headlines in a regular weight — display is always 700
- Over-tint surfaces with color — the neutrals are strictly greyscale
- Bury the CTA in decoration — the one pink pill should read as the obvious next step

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, CTAs full-width |
| Tablet | 640-1024px | Moderate padding, 2-up feature blocks |
| Desktop | 1024-1440px | Full layout, centered editorial columns, dark feature bands |

### Touch Targets
- Home CTA pills at 40px height, full pill for an unmistakable tap target
- Product solid button at 48px height with 24px horizontal padding
- Nav items at 32px height, spaced within the header
- Floating scroll-to-top at 48px, comfortably tappable

### Collapsing Strategy
- Hero: 48px WIPPY / 38px corporate headlines scale down on mobile, weight 700 maintained
- Feature bands: multi-column → stacked single column
- White ↔ grey ↔ dark alternating sections maintain full-width treatment
- Eyebrow → headline → content stacks vertically at all sizes

### Image Behavior
- App screenshots and product illustrations carry no shadow at any size, consistent with the flat system
- Cards maintain 10–12px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: WIPPY Pink (`#ff0056`)
- Heading ink: Near-black (`#222222`)
- Body text: Pure black (`#000000`)
- Nav labels: Nav ink (`#212429`)
- Background: Pure white (`#ffffff`)
- Soft surface: Grey (`#fafafa`)
- Dark neutrals: `#212529`, `#212126`, `#111111`
- Muted labels: Grey (`#767676`), Grey alt (`#8c8c8c`)
- On dark/pink: White (`#ffffff`)

### Example Component Prompts
- "Create a hero on white background. Headline at 48px Pretendard weight 700, line-height 1.5, color #222222. Below it a pink CTA: #ff0056 background, white text, 30px radius, 8px 16px padding, 40px height, 16px Pretendard weight 700 — '더 알아보기'."
- "Design an editorial section: muted-grey (#767676) eyebrow label 'MISSION' at 19px Pretendard weight 400, then a 38px weight-700 #222222 title, then body at 16px weight 400 #000000. No shadow — separate the next block with a #fafafa background."
- "Build a dark feature card: #212126 background, white text, 12px radius, no shadow. Title 23px Pretendard weight 700 #ffffff, body 16px weight 400."
- "Create top nav: white header. Pretendard 14px weight 600 items in #212429; active item fills #222222 with white text at 4px radius. WIPPY pink CTA optional on the right."

### Iteration Guide
1. Pretendard weight 700 for every headline; weight 400 for body and eyebrows; 600 for nav
2. Pink (`#ff0056`) is the single action color — don't spread it
3. No shadows — separate with white / `#fafafa` / dark blocks; only the floating TOP button lifts
4. Heading ink is `#222222` (warm near-black), body is `#000000` (true black)
5. Home CTAs are 30px pills; the product solid button is 8px
6. Dark surfaces use the neutral ladder `#212529` / `#212126` / `#111111`
7. Lead sections with a muted-grey Latin-caps eyebrow at 19px

---

## 10. Voice & Tone

NRISE's voice is **warm, human, and reassuring** — a Korean consumer brand that frames technology in terms of everyday feeling rather than features. The corporate mission lines speak in the register of emotional benefit: comfortable connection and healthy habits, not KPIs. WIPPY's product copy is confident and safety-forward, positioning the app as a trustworthy space to be yourself. Copy is plain, declarative Korean, low on jargon and free of hype punctuation.

| Context | Tone |
|---|---|
| Corporate mission | Emotional-benefit framing. "편안한 만남을 통해 일상의 행복을 전달합니다." Warm, human. |
| Product headlines (WIPPY) | Confident, category-leading. "위피, 소셜 디스커버리 1위 서비스." Direct, not boastful. |
| Feature descriptions | Benefit-first, plain. Explains what the user gets, not the mechanism. |
| Trust / safety copy | Calm, principled. "더 나은 연결을 위해 안전을 최우선의 가치로." States the value plainly. |
| Press / news | Factual, understated. Chronological headlines with dates. |

**Voice samples (verbatim from live surfaces):**
- "편안한 만남을 통해 일상의 행복을 전달합니다" — corporate mission (comfortable connection → everyday happiness). *(verified live 2026-07-02)*
- "위피, 소셜 디스커버리 1위 서비스" — WIPPY product hero (category-leading positioning). *(verified live 2026-07-02)*
- "더 나은 연결을 위해 안전을 최우선의 가치로" — WIPPY safety value (safety as the top priority for better connection). *(verified live 2026-07-02)*

**Forbidden register**: hype punctuation and superlative stacking, fear- or urgency-based dark patterns, undefined jargon, anything that frames a social app as a numbers game rather than human connection.

## 11. Brand Narrative

NRISE (엔라이즈) is a Korean consumer-tech studio that builds mobile products around two human needs: connection and healthy routine. Its flagship is **WIPPY (위피)**, positioned on its own surface as Korea's No.1 social-discovery service — "나를 표현하고 상대를 발견하는 공간" (a space to express yourself and discover others) and "같은 관심사를 가진 동네 친구와의 만남" (meeting neighborhood friends who share your interests). Its second product line, **콰트 (Quat)**, sits under the mission "건강한 습관을 형성하여 삶의 변화를 제공합니다" (forming healthy habits to deliver life change). Together the two products express the company's stated umbrella value: "NRISE가 세상에 전하는 가치."

The company frames its work in emotional-benefit terms rather than technical ones. Where the corporate mission talks about "편안한 만남" (comfortable connection) delivering "일상의 행복" (everyday happiness), WIPPY's product surface foregrounds safety as a first-class value — "더 나은 연결을 위해 안전을 최우선의 가치로" — a deliberate stance for a social-discovery category that often carries trust concerns. A press item observed on the homepage ("콰트·위피 눈부신 활약…엔라이즈, 2년 연속 흑자 달성", dated 2026.04.08) points to a business narrative of two-consecutive-years profitability driven by both products.

What NRISE refuses, visible in its design: the busy, shadow-stacked chrome and multi-color palettes of legacy portals, and the dark-pattern urgency common to engagement-driven social apps. What it embraces: a flat, fast, monochrome canvas; a single trustworthy pink reserved for the one action that matters; bold Pretendard headlines that speak plainly; and copy that frames the product around human feeling and safety rather than metrics.

*(Company facts above beyond the live homepage/career surfaces — e.g. the exact founding year and leadership — are not asserted here; the narrative is anchored to verbatim, live-observed positioning and the dated press headline.)*

## 12. Principles

1. **One action, one color.** Pink (`#ff0056`) means "do this." *UI implication:* reserve the saturated pink exclusively for the primary WIPPY CTA so the next step is never ambiguous on an otherwise monochrome screen.
2. **Feeling before features.** The brand sells everyday happiness and healthy habits, not specs. *UI implication:* lead sections with emotional-benefit headlines; let product screenshots carry the detail.
3. **Safety is a design value.** For a social-discovery product, trust is a feature. *UI implication:* surface safety and control copy prominently and calmly; never bury it.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with white, grey, and dark blocks; keep the page light and quick to scan.
5. **Bold, single-voice type.** Pretendard 700 headlines carry the whole hierarchy. *UI implication:* use size and the bold/regular split for structure — never reach for a second typeface or a light display weight.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable NRISE/WIPPY user segments (young Korean adults seeking new connections, users building healthy routines), not individual people.*

**김하늘, 26, 서울.** A young professional new to a neighborhood who uses WIPPY to meet people with shared interests. Values that the app feels safe and expressive rather than transactional. Chose WIPPY because it presented itself as a space to "express and discover," not a numbers game.

**정우진, 31, 경기.** A user who came for social discovery and stayed for the studio's habit product, 콰트. Appreciates the plain, warm tone and the single clear CTA on every screen — he always knows what the next step is.

**이서연, 24, 부산.** Safety-conscious first-time user of a social-discovery app. Reassured by WIPPY's explicit "안전을 최우선의 가치로" messaging and the calm, non-pushy interface. Distrusts apps that feel urgent or cluttered.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no matches / no results)** | White canvas. A single near-black (`#222222`) line explaining there's nothing yet, with one pink (`#ff0056`) CTA to take the next step. No clutter. |
| **Empty (saved/list, none yet)** | Muted grey (`#767676`) single line: nothing saved yet, plus a calm path back. Honest, low-pressure. |
| **Loading (content fetch)** | Skeleton blocks at final card dimensions on `#ffffff` / `#fafafa`, 10–12px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (action in progress)** | Inline progress on the button; the pink CTA keeps its color while disabled-pending, previous content stays visible. |
| **Error (fetch failed)** | Inline message in near-black (`#222222`) with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#fafafa` blocks at final dimensions, 10–12px radius, flat pulse. |
| **Disabled** | Muted grey (`#8c8c8c`) text on a reduced-opacity surface; the pink action fades rather than turning grey, to preserve the brand read. |

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
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, CTAs |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast aesthetic. CTAs respond to press with a subtle scale/opacity shift; content fades in from below at `motion-standard / ease-enter`; the floating scroll-to-top eases in on scroll. No bounce or spring — a trust-forward social product signals steadiness, not gimmickry. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on two surfaces:
- https://www.nrise.net/ — corporate home: nav, mission/history/news sections, pink & dark CTAs
- https://career.nrise.net/ko/wippy — WIPPY product/career surface: hero, feature sections, primary button, floating TOP action

Token-level claims (§1-9) are sourced from this live inspection (see web/references/nrise/.verification.md Proof block for raw computed-style samples).

Voice samples (§10) are verbatim from the live surfaces (corporate mission line, WIPPY hero, WIPPY safety value).

Brand narrative (§11): NRISE (엔라이즈) operates WIPPY (위피, social discovery) and 콰트 (Quat, healthy-habit).
Positioning quotes are verbatim from the live homepage/career surfaces; the profitability note references the
dated press headline observed on the homepage ("엔라이즈, 2년 연속 흑자 달성", 2026.04.08). Founding year and
leadership are deliberately NOT asserted — not verified from a first-party statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable WIPPY/NRISE user segments. Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one color", "flat and fast as a rejection of legacy portal chrome") are
editorial readings connecting NRISE's observed design to its positioning, not directly sourced NRISE statements.
-->
