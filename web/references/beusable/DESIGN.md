---
id: beusable
name: Beusable
display_name_kr: 뷰저블 (포그리트 4Grit)
country: KR
category: marketing
homepage: "https://www.beusable.net/"
primary_color: "#ec0047"
logo:
  type: favicon
  slug: "https://dream-cdn.beusable.net/home/images/favicon.ico"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live Get Started CTA rose (#ec0047); brighter #ff1553 on hover/emphasis. Cyan (#00b7ff) is the highlight/link accent; teal (#13a5bf/#16b5d2) + heatmap yellow (#f6e136) are the data-viz hues. Dark hero band #181818 over white content; pure-black (#000000) body text."
  colors:
    primary: "#ec0047"
    primary-hover: "#ff1553"
    accent: "#00b7ff"
    teal: "#13a5bf"
    teal-alt: "#16b5d2"
    data-yellow: "#f6e136"
    ink: "#000000"
    heading: "#2f2f2f"
    heading-strong: "#222222"
    body: "#444444"
    border-strong: "#666666"
    muted: "#777777"
    muted-alt: "#999999"
    faint: "#b1b1b1"
    faint-alt: "#cccccc"
    canvas: "#ffffff"
    surface-dark: "#181818"
    tint-cyan: "#e0f6fa"
    hairline: "#ebebeb"
    hairline-alt: "#d9d9d9"
  typography:
    family: { display: "NewRubrik", body: "Pretendard Variable" }
    display-hero: { size: 65, weight: 700, lineHeight: 1.00, tracking: -1.5, use: "English display H1, NewRubrik" }
    section:      { size: 55, weight: 700, lineHeight: 1.31, tracking: -1.0, use: "Korean section headline, Pretendard" }
    nav:          { size: 14, weight: 500, lineHeight: 1.40, use: "Top nav links, Pretendard" }
    button:       { size: 14, weight: 700, lineHeight: 1.00, use: "CTA / Get Started label" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text" }
    caption:      { size: 14, weight: 400, lineHeight: 1.40, use: "Sub-nav / dropdown menu labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 18, xl: 28, xxl: 32 }
  rounded: { sm: 4, md: 5, lg: 21, full: 9999 }
  shadow:
    none: "none"
    floating: "rgba(0,0,0,0.05) 0px 9px 11px -5px"
  components:
    cta-primary: { type: button, bg: "#ec0047", fg: "#ffffff", radius: "9999px", padding: "8px 16px", height: "38px", font: "14px / 700 Pretendard Variable", states: "hover #ff1553", use: "Primary Get Started CTA, full pill" }
    button-outline-light: { type: button, fg: "#222222", border: "1px solid #666666", radius: "21px", padding: "10px 18px", height: "38px", font: "14px / 700 Pretendard Variable", use: "Sign In / secondary action on white surface" }
    hero-glass-pill: { type: button, fg: "#00b7ff", radius: "9999px", padding: "0 28px", height: "60px", font: "16px / 400 Pretendard Variable", use: "Hero glass CTA on dark band, translucent bg + white hairline border" }
    filter-tag: { type: badge, fg: "#ec0047", border: "1px solid #ec0047", radius: "5px", padding: "4px 10px", font: "14px / 500 Pretendard Variable", use: "Feature filter / section tag" }
    nav-menu-item: { type: listItem, bg: "#ffffff", fg: "#444444", radius: "4px", padding: "6px 10px", font: "14px / 400 Pretendard Variable", states: "active #ec0047", use: "Feature dropdown menu row" }
    tinted-card: { type: card, bg: "#e0f6fa", fg: "#222222", radius: "20px", use: "Soft cyan-tinted feature card" }
    back-fab: { type: button, bg: "#ffffff", fg: "#00b7ff", radius: "20px", padding: "9px 15px", shadow: "rgba(0,0,0,0.05) 0px 9px 11px -5px", font: "16px / 400 Pretendard Variable", use: "Floating back button on feature pages" }
    data-marker: { type: badge, bg: "#f6e136", fg: "#000000", radius: "9999px", use: "Heatmap warm-zone data marker" }
  components_harvested: true
---

# Design System Inspiration of Beusable

## 1. Visual Theme & Atmosphere

Beusable (뷰저블), built by the Korean analytics company 4Grit (포그리트), is a CX-data and UX-heatmap SaaS whose marketing site pairs a cinematic dark hero with crisp, high-contrast white product sections. The homepage opens on a near-black band (`#181818`) where a saturated rose CTA (`#ec0047`) and an electric cyan highlight (`#00b7ff`) do all the signalling, then drops into bright white (`#ffffff`) content zones where text sits in pure black (`#000000`) and a graphite heading grey (`#2f2f2f`). The effect is confident and data-forward: the dark stage frames the product's visualizations, and the light body keeps dense analytics copy legible.

The typographic personality is a deliberate two-voice split. English display headlines run in the custom **NewRubrik** face at large sizes — 65px / weight 700 with tight `-1.5px` tracking on the feature hero H1 ("UX Heatmap") — while Korean headlines and all UI text run in **Pretendard Variable** (with Noto Sans KR and AppleSDGothicNeo fallbacks), including 55px / 700 Korean section headlines at `-1px` tracking. Body and navigation drop to a quiet 14–16px / 400–500. This gives the brand a globalized, product-marketing cadence: bold Latin display for impact, Pretendard for dense hangul readability.

Geometry leans hard into the pill. Primary CTAs and hero buttons carry effectively-full radii (700px–999px on the dark hero, a tamer 21px on inner feature pages), while dropdown menu rows and filter tags stay tight at 4–5px. Depth is mostly flat — most surfaces show `box-shadow: none`, separated instead by the dark/light band contrast, `#ebebeb` hairlines, and soft cyan-tinted cards (`#e0f6fa`). The one recurring elevation is a floating "back" control that uses a soft `rgba(0,0,0,0.05) 0px 9px 11px -5px` shadow. Color-coded data hues — teal (`#13a5bf`, `#16b5d2`) and a heatmap-warm yellow (`#f6e136`) — surface where the product shows its heatmap and journey-map visualizations.

**Key Characteristics:**
- Dark cinematic hero (`#181818`) over bright white (`#ffffff`) product sections
- Single saturated rose (`#ec0047`) as the primary action color, brightening to `#ff1553` on hover/emphasis
- Electric cyan (`#00b7ff`) as the highlight/link accent, distinct from the action rose
- Two-voice type: NewRubrik for English display, Pretendard Variable for Korean + all UI
- Pill-everything CTAs (700px–999px on hero, 21px inner) with tight 4–5px menu/tag radii
- Flat depth — mostly shadowless, separated by band contrast and `#ebebeb` hairlines
- Data-viz palette — teal (`#13a5bf`/`#16b5d2`) and heatmap yellow (`#f6e136`) for visualizations
- Pure-black (`#000000`) body text with a graphite heading ladder (`#2f2f2f` → `#222222`)

## 2. Color Palette & Roles

### Primary & Action
- **Beusable Rose** (`#ec0047`): Primary brand and action color — the Get Started CTA background, inline action buttons, active nav state, and filter-tag outline. The system's single "do this" color.
- **Rose Bright** (`#ff1553`): A brighter rose used for hover and emphasis states on the primary action.

### Accent & Data
- **Cyan Accent** (`#00b7ff`): The highlight/link color — hero highlight text, inline links, and the floating back control. Deliberately separate from the action rose so "highlight" never reads as "action."
- **Teal** (`#13a5bf`): Secondary data-visualization hue for charts and journey-map surfaces.
- **Teal Alt** (`#16b5d2`): A lighter teal companion for gradient and data accents.
- **Heatmap Yellow** (`#f6e136`): Warm heatmap-zone marker — the hot end of the product's data visualization scale.

### Text & Ink
- **Ink Black** (`#000000`): Pure black — the dominant body-text color across white sections.
- **Heading Graphite** (`#2f2f2f`): Display H1 heading color on light surfaces.
- **Heading Strong** (`#222222`): Strong Korean section-headline and secondary-button text color.
- **Body Grey** (`#444444`): Nav links and standard body copy on white.
- **Border Strong** (`#666666`): 1px outline color for the Sign In / secondary button on white.
- **Muted** (`#777777`): Tertiary text, captions, metadata.
- **Muted Alt** (`#999999`): Lower-emphasis labels and helper text.
- **Faint** (`#b1b1b1`): Faint labels, disabled-adjacent text.
- **Faint Alt** (`#cccccc`): Lowest-emphasis text, placeholder-level greys.

### Surface & Hairline
- **Pure White** (`#ffffff`): Page background, cards, nav, and text on rose/dark.
- **Surface Dark** (`#181818`): The cinematic dark hero band and dark feature strips.
- **Cyan Tint** (`#e0f6fa`): Soft cyan-tinted card/section surface for grouped feature blocks.
- **Hairline** (`#ebebeb`): Primary thin border/divider given the near-shadowless system.
- **Hairline Alt** (`#d9d9d9`): Slightly stronger divider for secondary separation.

## 3. Typography Rules

### Font Family
- **Display (English)**: `NewRubrik` — the custom Latin display face used for English hero headlines (e.g. "UX Heatmap") at weight 700 with tight negative tracking.
- **Body & Korean**: `Pretendard Variable` (with `Noto Sans KR`, `AppleSDGothicNeo` fallbacks) — Korean headlines and all UI/body text.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero (EN) | NewRubrik | 65px (4.06rem) | 700 | 1.00 (65px) | -1.5px | English feature H1 |
| Section Heading (KR) | Pretendard Variable | 55px (3.44rem) | 700 | 1.31 (72px) | -1.0px | Korean section headline |
| Nav Link | Pretendard Variable | 14px (0.88rem) | 500 | 1.40 | normal | Top navigation items |
| Button | Pretendard Variable | 14px (0.88rem) | 700 | 1.00 | normal | Get Started / CTA labels |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Caption / Menu | Pretendard Variable | 14px (0.88rem) | 400 | 1.40 | normal | Dropdown menu / sub-nav labels |

### Principles
- **Two voices, two scripts**: NewRubrik owns English display impact; Pretendard Variable owns Korean headlines and every functional UI string. They never swap roles.
- **Tight display tracking**: -1.5px on the 65px English H1, -1px on the 55px Korean section heading. Headlines compress; body stays at normal tracking.
- **Heavy display, light body**: weight 700 for headlines and CTAs, 400–500 for reading and navigation — the weight jump is the primary hierarchy signal.
- **Hangul-first body sizing**: body sits at 14–16px with 1.5 line-height for dense, legible Korean analytics copy.

## 4. Component Stylings

### Buttons

**Get Started (Primary)**
- Background: `#ec0047`
- Text: `#ffffff`
- Radius: 9999px (full pill on hero; 21px on inner feature pages)
- Padding: 8px 16px
- Height: 38px
- Font: 14px Pretendard Variable weight 700
- Hover: `#ff1553`
- Use: Primary conversion CTA in header and hero — the single primary action

**Sign In (Outline, Light)**
- Background: transparent
- Text: `#222222`
- Border: 1px solid `#666666`
- Radius: 21px
- Padding: 10px 18px
- Height: 38px
- Font: 14px Pretendard Variable weight 700
- Use: Secondary action on white surfaces

**Hero Glass Pill**
- Text: `#00b7ff`
- Border: 1px solid rgba(255,255,255,0.24)
- Radius: 9999px
- Padding: 0px 28px
- Height: 60px
- Font: 16px Pretendard Variable weight 400
- Use: Translucent hero CTA on the dark band ("9,000개 기업이 발견한 것")

**Floating Back**
- Background: `#ffffff`
- Text: `#00b7ff`
- Radius: 20px
- Padding: 9px 15px
- Shadow: `rgba(0,0,0,0.05) 0px 9px 11px -5px`
- Font: 16px Pretendard Variable weight 400
- Use: Floating "뒤로" back control on feature pages

### Cards & Containers

**Cyan-Tinted Card**
- Background: `#e0f6fa`
- Text: `#222222`
- Radius: 20px
- Use: Soft cyan-tinted feature/grouping card

**White Feature Card**
- Background: `#ffffff`
- Border: 1px solid `#ebebeb`
- Radius: 20px
- Use: White feature card separated by hairline, no shadow

### Badges

**Filter Tag**
- Background: transparent
- Text: `#ec0047`
- Border: 1px solid `#ec0047`
- Radius: 5px
- Padding: 4px 10px
- Font: 14px Pretendard Variable weight 500
- Use: Feature filter / section tag

**Heatmap Data Marker**
- Background: `#f6e136`
- Text: `#000000`
- Radius: 9999px
- Use: Warm-zone marker in heatmap visualizations

### List Items

**Feature Dropdown Row**
- Background: `#ffffff`
- Text: `#444444`
- Radius: 4px
- Padding: 6px 10px
- Font: 14px Pretendard Variable weight 400
- Active: `#ec0047`
- Use: Feature dropdown menu row (Features / Pricing / UX Heatmaps…)

### Navigation
- Background: `#181818` (dark home) / `#ffffff` (inner pages)
- Text: `#ffffff` (dark) / `#444444` (light)
- Font: 14px Pretendard Variable weight 500
- Active: rose `#ec0047` text
- Use: Top horizontal nav ("UX 히트맵", "CX 저니맵", "대화형 BI", "생성형 GEO", "맞춤형 AI")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.beusable.net/ ; https://www.beusable.net/features/heatmaps ; https://www.beusable.net/blog ; https://www.4grit.com/company-english/
**Tier 2 sources:** getdesign.md/beusable (SPA shell, no beusable record) ; styles.refero.design/?q=beusable (not listed — only generic trending styles returned)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 6px, 8px, 10px, 11px, 12px, 14px, 16px, 18px, 28px, 32px
- Notable: hero pill CTAs carry generous 28–32px horizontal padding for a large, tappable target; inner nav/menu rows stay tight at 6–10px

### Grid & Container
- Centered single-column dark hero anchored by the CTA and highlight text
- White product sections alternate as full-width bands beneath the hero
- Feature pages use a left sub-nav of feature rows plus a large display H1
- Cards group related visualizations at a 20px radius

### Whitespace Philosophy
- **Band contrast over borders**: the dark hero (`#181818`) versus white (`#ffffff`) sections is the primary structural divide, not heavy rules
- **Flat separation**: within white zones, `#ebebeb` and `#d9d9d9` hairlines and cyan-tinted (`#e0f6fa`) cards separate content without elevation
- **Pill rhythm**: repeated full-radius CTAs create a consistent, friendly cadence across conversion points

### Border Radius Scale
- Small (4px): dropdown menu rows
- Tag (5px): filter/section tags
- Inner CTA (20–21px): buttons and floating controls on feature pages
- Full (700–999px / 9999px): hero CTAs, glass pills, data markers

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Most surfaces — hero, nav, headings, cards |
| Band (Level 1) | Dark `#181818` vs white `#ffffff` contrast | Primary section separation |
| Hairline (Level 2) | 1px solid `#ebebeb` / `#d9d9d9` | White card outlines, dividers |
| Floating (Level 3) | `rgba(0,0,0,0.05) 0px 9px 11px -5px` | Floating back control on feature pages |

**Shadow Philosophy**: Beusable is a near-flat system. Live inspection found `box-shadow: none` across the hero, nav, headings, and most cards; depth comes from the dark/light band contrast and thin `#ebebeb` hairlines rather than elevation. The single recurring shadow is a soft, wide, negative-spread lift (`rgba(0,0,0,0.05) 0px 9px 11px -5px`) reserved for the floating back control. When the product needs emphasis it reaches for color — the rose `#ec0047` action or the cyan `#00b7ff` highlight — not a heavier shadow.

## 7. Do's and Don'ts

### Do
- Use the rose (`#ec0047`) as the single primary action color; brighten to `#ff1553` on hover
- Keep cyan (`#00b7ff`) for highlights and links, distinct from the action rose
- Set English display headlines in NewRubrik at weight 700 with tight negative tracking
- Set Korean headlines and all UI text in Pretendard Variable
- Frame product visualizations against the dark `#181818` hero band
- Use full-pill radii on hero CTAs and tight 4–5px radii on menu rows and tags
- Separate white sections with `#ebebeb` hairlines and cyan-tinted (`#e0f6fa`) cards, not shadows
- Reserve teal (`#13a5bf`/`#16b5d2`) and heatmap yellow (`#f6e136`) for data visualization

### Don't
- Spread the rose across many elements — it dilutes the single-action signal
- Use cyan (`#00b7ff`) as an action color — it means "highlight," not "do this"
- Set Korean headlines in NewRubrik — it owns English display only
- Add heavy drop shadows for elevation — the system separates with band contrast and hairlines
- Use pure black (`#000000`) backgrounds for content sections — reserve `#181818` for the hero band
- Mix additional saturated accent hues beyond rose, cyan, and the data teals/yellow
- Set display headlines in a light weight — display is always 700
- Use sharp square corners on CTAs — hero actions are full pills

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, nav collapses to menu |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards, sub-nav wraps |
| Desktop | 1024-1440px | Full layout, centered dark hero, multi-column product bands |

### Touch Targets
- Hero glass pills at 56–60px height with 28–32px horizontal padding — large, unmistakable targets
- Get Started CTA at 36–38px height, full pill
- Nav links and dropdown rows spaced for touch within the header

### Collapsing Strategy
- Hero: 65px English / 55px Korean display compresses on mobile; weight 700 maintained
- Feature sub-nav: left rail of feature rows wraps/scrolls on narrow viewports
- Product bands: multi-column → stacked single column
- Dark hero and white sections keep full-width treatment, reduce internal padding

### Image Behavior
- Heatmap and journey-map visualizations sit on the dark hero band or white cards at 20px radius
- Data markers keep the heatmap yellow (`#f6e136`) at all sizes
- Cards maintain 20px radius across breakpoints, no shadow

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action: Beusable Rose (`#ec0047`)
- Action hover: Rose Bright (`#ff1553`)
- Highlight / link: Cyan Accent (`#00b7ff`)
- Data viz: Teal (`#13a5bf`), Teal Alt (`#16b5d2`), Heatmap Yellow (`#f6e136`)
- Background (light): Pure White (`#ffffff`)
- Background (hero): Surface Dark (`#181818`)
- Tinted card: Cyan Tint (`#e0f6fa`)
- Body text: Ink Black (`#000000`)
- Heading: Graphite (`#2f2f2f`), Strong (`#222222`)
- Body / nav: Body Grey (`#444444`)
- Muted: `#777777`, `#999999`
- Hairline: `#ebebeb`, `#d9d9d9`

### Example Component Prompts
- "Create a dark hero on `#181818`. English H1 in NewRubrik 65px weight 700, line-height 1.0, letter-spacing -1.5px, color `#ffffff`. A glass CTA pill: translucent dark background, `#00b7ff` text, 1px solid rgba(255,255,255,0.24) border, full radius, 0px 28px padding, 60px height. A solid rose CTA: `#ec0047` background, white text, full pill, 8px 16px, 14px Pretendard weight 700 — hover `#ff1553`."
- "Design a white feature card: `#ffffff` background, 1px solid `#ebebeb` border, 20px radius, no shadow. Title in Pretendard Variable weight 700, color `#222222`. Body 16px weight 400, `#000000`."
- "Build a cyan-tinted section card: `#e0f6fa` background, 20px radius. Heading `#222222`, body `#444444`. Include a filter tag: transparent background, `#ec0047` text, 1px solid `#ec0047` border, 5px radius, 4px 10px padding, 14px weight 500."
- "Create a light-page nav: white header, Pretendard 14px weight 500 links in `#444444`, active item rose `#ec0047`. Get Started CTA right-aligned as a `#ec0047` pill, white text, 21px radius."

### Iteration Guide
1. Rose (`#ec0047`) is the single action color — don't spread it; hover goes to `#ff1553`
2. Cyan (`#00b7ff`) is highlight/link only, never an action
3. NewRubrik for English display; Pretendard Variable for Korean + all UI
4. Frame product visuals on the dark `#181818` band; keep body sections white
5. Full-pill hero CTAs, tight 4–5px menu/tag radii
6. Separate with `#ebebeb` hairlines and `#e0f6fa` tinted cards, not shadows
7. Reserve teal (`#13a5bf`/`#16b5d2`) and yellow (`#f6e136`) for data visualization

---

## 10. Voice & Tone

Beusable's voice is **plain, curiosity-driven, and outcome-focused** — it turns web/app analytics from an intimidating numbers game into a "see why" invitation. The homepage frames the product as "가장 쉬운 CX데이터 분석" ("the easiest CX-data analysis"), and social proof is stated as a discovery, not a boast: "9,000개 기업이 발견한 것" ("what 9,000 companies discovered"). CTAs are conversational and question-led ("왜인지 알아보기" / "find out why", "직접 물어보기" / "ask directly"), positioning the product as a way to interrogate user behavior rather than a dashboard to admire.

| Context | Tone |
|---|---|
| Hero headline | Plain-benefit, curiosity-framed. "가장 쉬운 CX데이터 분석." |
| Social proof | Stated as discovery, not bragging. "9,000개 기업이 발견한 것." |
| Feature nav | Functional, product-named. "UX 히트맵", "CX 저니맵", "대화형 BI". |
| CTAs | Conversational, question-led. "왜인지 알아보기", "직접 물어보기". |
| Feature copy | Explains the analytics concept in user language, heatmap over raw numbers. |

**Voice samples (verbatim from live surfaces):**
- "가장 쉬운 CX데이터 분석" — homepage title/positioning (easiest CX-data analysis). *(verified live 2026-07-02)*
- "9,000개 기업이 발견한 것" — hero glass CTA (social proof as discovery). *(verified live 2026-07-02)*
- "사용자의 의도와 요구, 과정 그리고 실패를 한눈에 확인할 수 있습니다." — UX Heatmap feature H2 (see intent, needs, journey, failure at a glance). *(verified live 2026-07-02)*

**Forbidden register**: intimidating statistics-speak with no plain-language framing, hype superlatives, fear-based conversion pressure, jargon left undecoded.

## 11. Brand Narrative

Beusable (뷰저블) is the CX-data analytics product of **4Grit (포그리트)**, a Korean analytics company, and its core promise is to make understanding user behavior "the easiest" it can be. Where legacy web analytics reduces behavior to tables of numbers, Beusable's founding idea is visual: heatmaps, journey maps, funnels, and session analysis that let a team *see* where users hesitate, scroll, click, and drop off. The product's own framing — "숫자 대신 히트맵" (heatmaps instead of numbers) — is the whole thesis in four words.

The company states broad reach on its homepage — "9,000개 기업이 발견한 것" (what 9,000 companies discovered) — positioning Beusable as a widely-adopted Korean CX-analytics platform rather than a niche tool. Its product surface spans UX Heatmaps, RealTime Heatmap, Path Plot, Reporting & User Analytics, A/B Testing, Funnels, and Session Report, and the current site shows a clear move into AI: "대화형 BI" (conversational BI), "생성형 GEO" (generative GEO), and "맞춤형 AI" (custom AI) now sit alongside the classic heatmap features.

What Beusable rejects, visible in its design: the cold, table-heavy chrome of traditional analytics suites and the intimidation that keeps non-analysts away. What it embraces: a cinematic dark stage that puts visualizations center-frame, a single decisive rose action color, curiosity-led copy that asks "왜인지 알아보기" (find out why), and heatmap-warm data hues that make the data itself feel legible and human.

*(Company/parent facts — Beusable is a product of 4Grit / 포그리트 — are drawn from the brand's own site and company page; specific figures such as "9,000 companies" are the brand's own homepage claim, quoted as stated, not independently audited.)*

## 12. Principles

1. **See it, don't tabulate it.** Behavior is shown as heatmaps and journeys, not rows of numbers. *UI implication:* lead with visualization surfaces; keep raw tables secondary and on demand.
2. **One decisive action.** The rose (`#ec0047`) means "do this" and nothing else does. *UI implication:* reserve the saturated rose exclusively for the primary CTA; use cyan for highlights so the next step is never ambiguous.
3. **Curiosity over intimidation.** Copy asks "왜인지 알아보기" rather than presenting a wall of metrics. *UI implication:* frame entry points as questions and discoveries, decode analytics jargon into plain benefit.
4. **Stage the product.** The dark hero band exists to frame the visualizations. *UI implication:* use `#181818` as a cinematic stage for product imagery; keep reading content on white.
5. **Flat and fast.** Clarity beats decorative depth. *UI implication:* separate with band contrast and `#ebebeb` hairlines; reserve shadow for the one floating control.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Beusable user segments (Korean growth marketers, UX researchers, e-commerce product owners), not individual people.*

**정민지, 30, 서울.** A growth marketer at a mid-size e-commerce brand. Uses heatmaps and funnels to find where checkout drop-off happens before an A/B test. Chose Beusable because "왜인지 알아보기" matched exactly how she thinks — she wants the why, not just the conversion number.

**한도윤, 34, 판교.** A UX researcher who reads Path Plot and Session Report to validate design changes. Values that the product shows intent and failure "한눈에" (at a glance) instead of making him assemble it from raw event tables.

**오세라, 41, 부산.** A product owner at a services company evaluating the new conversational BI and custom-AI features. Wants analytics her non-analyst teammates can actually read; trusts the plain, curiosity-led tone over enterprise dashboard jargon.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no data collected yet)** | White canvas. Single Ink Black (`#000000`) line explaining no sessions are collected yet, plus one rose (`#ec0047`) CTA to install/start tracking. No clutter. |
| **Empty (report, zero results)** | Muted (`#777777`) single line stating nothing matched the filter, with the filter summary visible above to adjust scope. |
| **Loading (heatmap render)** | Skeleton blocks at final dimensions on white with a flat pulse — consistent with the near-shadowless system. Cyan (`#00b7ff`) progress accent where a determinate bar applies. |
| **Loading (dashboard fetch)** | Previous values stay visible; a subtle cyan progress indicator rather than a full-screen block. |
| **Error (data fetch failed)** | Inline message in Ink Black with a plain-language explanation and a retry — states what to do next, never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (tracking installed / report saved)** | Brief inline confirmation in a calm tone with next-step detail linked below. No celebratory emoji. |
| **Skeleton** | Neutral blocks at final dimensions, 20px radius on cards, flat pulse. |
| **Disabled** | Faint (`#b1b1b1`) / Faint Alt (`#cccccc`) text on reduced-opacity surface; rose actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 340ms | Page-level transitions, hero reveal, heatmap paint-in |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, floating back control |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and data-forward. Heatmap and journey visualizations paint in progressively at `motion-slow / ease-enter` so the reveal reads as data arriving, not decoration. Pill CTAs respond to press with a subtle scale/opacity shift and hover shifts rose `#ec0047` → `#ff1553`. The floating back control eases in with its soft shadow. No bounce or spring — an analytics product signals steadiness and precision. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and visualizations render in their final state immediately; the product stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle:
- https://www.beusable.net/ (homepage, dark hero) — document.title "뷰저블 - 가장 쉬운 CX데이터 분석｜Beusable"
- https://www.beusable.net/features/heatmaps (UX Heatmap feature page) — document.title "UX Heatmap｜Beusable"

Token-level claims (§1-9) are sourced from this live inspection:
- Get Started CTA — bg rgb(236,0,71) #ec0047 / white text / full pill / 14px Pretendard weight 700
- Rose bright accent rgb(255,21,83) #ff1553 seen in fg frequency scan
- Cyan accent rgb(0,183,255) #00b7ff — hero highlight text, links, floating back control
- Teal rgb(19,165,191) #13a5bf and rgb(22,181,210) #16b5d2 — data-viz hues
- Heatmap yellow rgb(246,225,54) #f6e136 — warm data marker on heatmaps page
- Dark hero band rgb(24,24,24) #181818; body text pure black rgb(0,0,0)
- Heading graphite rgb(47,47,47) #2f2f2f (H1) / strong rgb(34,34,34) #222222 (H2)
- H1 "UX Heatmap" NewRubrik 65px/700 -1.5px; H2 Korean 55px/700 -1px, Pretendard Variable
- Floating "뒤로" button — bg #ffffff / #00b7ff text / shadow rgba(0,0,0,0.05) 0px 9px 11px -5px

Voice samples (§10) are verbatim from the live homepage and feature H2.

Brand narrative (§11): Beusable (뷰저블) is a CX-data analytics / UX-heatmap product of 4Grit
(포그리트). Company/parent facts are from the brand's own site and the 4Grit company page
(https://www.4grit.com/company-english/). The "9,000 companies" figure is the brand's own
homepage claim, quoted as stated, not independently audited.

Personas (§13) are fictional archetypes informed by publicly observable Beusable user
segments (Korean growth marketers, UX researchers, e-commerce product owners). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "see it, don't tabulate it", "stage the product") are editorial
readings connecting Beusable's observed design to its positioning, not directly sourced
Beusable statements.
-->
