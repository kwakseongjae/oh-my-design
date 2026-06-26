---
id: makinarocks
name: MakinaRocks
display_name_kr: 마키나락스
country: KR
category: ai
homepage: "https://www.makinarocks.ai"
primary_color: "#2b2b3b"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=makinarocks.ai&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = signature dark indigo (#2b2b3b) used for product headings, blog headings and dark industry tiles across both surfaces. UI is otherwise monochrome black (#000000) on white (#ffffff); accent blue (#006aff) appears on the blog, periwinkle (#6a77d7) as a secondary accent. The lime-green crystal logo mark is delivered as an image asset, not a computed UI color."
  colors:
    primary: "#2b2b3b"
    ink: "#000000"
    near-black: "#1a1a1a"
    canvas: "#ffffff"
    muted: "#8d8da5"
    slate: "#5a5a72"
    accent: "#006aff"
    periwinkle: "#6a77d7"
    surface: "#f1f3fb"
    surface-alt: "#efeff5"
    hairline: "#e3e2eb"
    chip: "#c4c4d4"
  typography:
    family: { display: "KmrApparat", body: "Pretendard" }
    display-hero: { size: 64, weight: 700, lineHeight: 1.30, tracking: -1.6, use: "Hero headline, KmrApparat Bold" }
    display-alt:  { size: 52, weight: 500, lineHeight: 1.30, tracking: -0.16, use: "Secondary hero band, KmrApparat Medium" }
    product:      { size: 48, weight: 500, lineHeight: 1.60, tracking: -0.16, use: "Product name heads (Runway, DrawX)" }
    section:      { size: 40, weight: 500, lineHeight: 1.60, tracking: -0.16, use: "Section titles" }
    card-title:   { size: 24, weight: 700, lineHeight: 1.60, tracking: -0.16, use: "Industry tile titles" }
    list-title:   { size: 20, weight: 500, lineHeight: 1.30, tracking: -0.16, use: "Blog / news list item titles" }
    body:         { size: 16, weight: 400, lineHeight: 1.60, use: "Standard reading text, Pretendard" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 30, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 12, lg: 16, round: 28, pill: 50, full: 9999 }
  shadow:
    card: "rgba(0,0,0,0.05) 0px 10px 20px 0px"
    drop: "rgba(0,0,0,0.25) 0px 4px 4px 0px"
  components:
    button-outline: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #000000", radius: "19px", padding: "5px 30px", font: "16px / 400 Pretendard", use: "Header contact CTA — 문의하기" }
    button-pill: { type: button, fg: "#1a1a1a", border: "1px solid #1a1a1a", radius: "50px", padding: "9px 24px", font: "16px / 500 KmrApparat", states: "on dark hero: #ffffff text + #ffffff border", use: "Section CTA — Get started / Learn more" }
    product-card: { type: card, bg: "#ffffff", fg: "#2b2b3b", radius: "12px", shadow: "rgba(0,0,0,0.05) 0px 10px 20px", use: "Product showcase card (Runway, DrawX)" }
    industry-tile: { type: card, bg: "#2b2b3b", fg: "#ffffff", radius: "12px", padding: "12px 16px", font: "24px / 700 KmrApparat", use: "Dark industry tile (자동차, 국방, 제조)" }
    nav-item: { type: listItem, bg: "#ffffff", fg: "#000000", radius: "12px", padding: "12px 16px", height: "44px", font: "16px / 400 KmrApparat", use: "Mega-menu dropdown item" }
    carousel-nav: { type: button, bg: "#c4c4d4", fg: "#000000", radius: "28px", font: "13px / 400 Pretendard", use: "Carousel Prev/Next round control" }
    surface-panel: { type: card, bg: "#f1f3fb", fg: "#2b2b3b", radius: "16px", use: "Tinted lavender content panel" }
    category-label: { type: badge, fg: "#2b2b3b", radius: "0px", font: "16px / 400 Pretendard", use: "Blog category tag (Insight / Product)" }
  components_harvested: true
---

# Design System Inspiration of MakinaRocks

## 1. Visual Theme & Atmosphere

MakinaRocks (마키나락스) is Korea's industrial-AI ("Physical AI") company, and its website reads like an engineering instrument panel rendered with editorial restraint — confident, almost monochrome, and built to signal precision rather than consumer flash. The canvas is pure white (`#ffffff`) carrying near-pure black text (`#000000`), and the single most defining brand color is a dark blue-tinged indigo (`#2b2b3b`) that does the heavy lifting: it colors the product headings (Runway, DrawX), every blog title, and the dark industry tiles. That indigo is the system's identity — not pure black, but a deep, slightly cool graphite that gives the page a serious, instrument-grade weight. Where most AI startups reach for gradient-heavy neon, MakinaRocks reaches for grayscale discipline punctuated by one or two restrained accents.

The typographic personality is split between two purposeful voices. Display headlines run in **KmrApparat** — a custom MakinaRocks wordmark typeface (an Apparat-family grotesk) — at large sizes: the hero "Transforming Industries with Specialized AI" sits at 64px / weight 700 with a tight `-1.6px` tracking, projecting machined, geometric authority. Body and dense UI text drop to **Pretendard** at 16px / weight 400 with a generous 1.6 line-height, the de-facto Korean product font tuned for hangul legibility. This split — engineered KmrApparat display over calm Pretendard body — is the core tension: mechanical where it brands, readable where it explains.

Depth is deliberately minimal. Most surfaces are flat; separation comes from the indigo-on-white contrast, thin hairlines (`#e3e2eb`), and tinted lavender-grey panels (`#f1f3fb`, `#efeff5`) rather than heavy elevation. When the system does lift a card it uses a whisper-soft shadow (`rgba(0,0,0,0.05) 0px 10px 20px`). Geometry leans on a 12px card radius as the workhorse, 16px for blog cards, and fully rounded 50px pill CTAs ("Get started", "Learn more"). Color accents are rationed: an accent blue (`#006aff`) anchors interactive links on the blog, a periwinkle (`#6a77d7`) appears as a secondary highlight, muted slate text steps down through `#8d8da5` and `#5a5a72`, and translucent periwinkle-grey (`#c4c4d4`) backs the carousel controls. The lime-green crystal logo mark — introduced in MakinaRocks' recent rebrand — is the one chromatic spark, but it lives in the wordmark and favicon rather than the UI chrome.

**Key Characteristics:**
- Dark indigo (`#2b2b3b`) as the signature brand color — product names, blog titles, dark industry tiles
- Near-monochrome system: black (`#000000`) text on white (`#ffffff`), accents rationed
- KmrApparat custom display typeface at weight 700/500 with tight negative tracking (-1.6px at 64px)
- Pretendard at 16px / 400 / 1.6 line-height for all body and dense UI text
- Flat depth: hairlines (`#e3e2eb`) and tinted lavender panels (`#f1f3fb`, `#efeff5`) over heavy shadow
- Pill-and-radius geometry — 12px cards, 16px blog cards, 50px pill CTAs, 28px round carousel controls
- Restrained accents: blog accent blue (`#006aff`), periwinkle highlight (`#6a77d7`)
- Cool-grey neutral ladder (`#5a5a72` → `#8d8da5` → `#c4c4d4`) for text and control hierarchy
- Lime-green crystal logo mark as the sole chromatic brand spark, kept out of the UI chrome

## 2. Color Palette & Roles

### Primary
- **MakinaRocks Indigo** (`#2b2b3b`): The signature brand color. A deep blue-tinged graphite used for product headings (Runway, DrawX), all blog titles, and the dark industry tiles. The system's identity color — used instead of flat black where the brand wants weight.
- **Ink Black** (`#000000`): Primary body and UI text, default heading color on white sections, nav labels.
- **Near-Black** (`#1a1a1a`): Secondary dark used for the "Deploying AI, Delivering Reality" hero line and the outline of pill CTAs — a softer black than pure ink.
- **Pure White** (`#ffffff`): Page background, card surfaces, and text on indigo/dark sections.

### Accent
- **Accent Blue** (`#006aff`): Interactive accent on the blog — links and inline CTAs. The system's most saturated hue, used sparingly.
- **Periwinkle** (`#6a77d7`): Secondary accent / highlight appearing on both the homepage and the blog for emphasis touches.

### Neutral & Surface
- **Surface Lavender** (`#f1f3fb`): Cool lavender-grey tinted surface for content panels and segmented sections.
- **Surface Alt** (`#efeff5`): A secondary light grey surface for alternating blocks on the blog.
- **Hairline** (`#e3e2eb`): Thin borders, dividers, and card outlines — the primary separation device in a flat system.
- **Chip Grey** (`#c4c4d4`): Translucent periwinkle-grey backing the carousel Prev/Next round controls (used at ~0.5 alpha).

### Text Hierarchy
- **Ink Black** (`#000000`): Primary text and strong labels.
- **Indigo** (`#2b2b3b`): Heading text and titles.
- **Slate** (`#5a5a72`): Secondary body copy and descriptions.
- **Muted Slate** (`#8d8da5`): Tertiary text, captions, metadata, lowest-emphasis labels.

## 3. Typography Rules

### Font Family
- **Display**: `KmrApparat` (with `sans-serif` fallback) — the custom MakinaRocks wordmark typeface, an Apparat-family grotesk. Used for hero headlines, section titles, product names, and nav labels. Weight 700 at the hero, 500 for most section heads.
- **Body**: `Pretendard` (with `sans-serif` fallback) — the document default, used for body copy, dense UI text, and the contact CTA at weight 400.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | KmrApparat | 64px (4.00rem) | 700 | 1.30 (83.2px) | -1.6px | "Transforming Industries with Specialized AI" |
| Secondary Hero | KmrApparat | 52px (3.25rem) | 500 | 1.30 (67.6px) | -0.16px | Closing hero band |
| Product Head | KmrApparat | 48px (3.00rem) | 500 | 1.60 (76.8px) | -0.16px | Runway / DrawX |
| Section Heading | KmrApparat | 40px (2.50rem) | 500 | 1.60 (64px) | -0.16px | "Our Products", section titles |
| Industry Tile | KmrApparat | 24px (1.50rem) | 700 | 1.60 (38.4px) | -0.16px | 자동차 / 국방 / 제조, white on indigo |
| List Title | KmrApparat | 20px (1.25rem) | 500 | 1.30 | -0.16px | Blog / news list item titles |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.60 (25.6px) | normal | Standard reading text |

### Principles
- **Two typefaces, two jobs**: KmrApparat is the branded display voice; Pretendard is the functional reading voice. They never swap roles — every headline is KmrApparat, every paragraph is Pretendard.
- **Tight display tracking**: the hero compresses to -1.6px; section and product heads settle at a consistent -0.16px. Body text stays at normal tracking.
- **Weight as hierarchy**: 700 marks the loudest moments (hero, industry tiles); 500 carries most section and product heads; 400 is body. There is no light-weight display register.
- **Generous body leading**: Pretendard body runs at 1.6 line-height (25.6px on 16px) for comfortable hangul reading in information-dense layouts.

## 4. Component Stylings

### Buttons

**Contact Outline (문의하기)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#000000`
- Radius: 19px
- Padding: 5px 30px
- Font: 16px Pretendard weight 400
- Height: 38px
- Use: Header contact CTA — "문의하기"

**Pill CTA (Get started / Learn more)**
- Text: `#1a1a1a`
- Border: 1px solid `#1a1a1a`
- Radius: 50px
- Padding: 9px 24px
- Font: 16px KmrApparat weight 500
- Height: 46px
- Hover: subtle darkening of border/text
- States: on dark hero sections the variant inverts to `#ffffff` text + `#ffffff` border
- Use: Primary section CTA — "Get started", "Learn more"

**Carousel Round Control**
- Background: `#c4c4d4`
- Text: `#000000`
- Radius: 28px
- Font: 13px Pretendard weight 400
- Height: 40px
- Use: Carousel Prev / Next round buttons (used at ~0.5 alpha)

### Cards & Containers

**Product Card**
- Background: `#ffffff`
- Text: `#2b2b3b`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.05) 0px 10px 20px`
- Use: Product showcase card (Runway, DrawX)

**Industry Tile**
- Background: `#2b2b3b`
- Text: `#ffffff`
- Radius: 12px
- Padding: 12px 16px
- Font: 24px KmrApparat weight 700
- Use: Dark industry tile (자동차, 국방, 중공업, 제조)

**Tinted Surface Panel**
- Background: `#f1f3fb`
- Text: `#2b2b3b`
- Radius: 16px
- Use: Lavender-grey content panel on the blog and feature bands

### Navigation

**Mega-Menu Item**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 12px
- Padding: 12px 16px
- Font: 16px KmrApparat weight 400
- Height: 44px
- Use: Dropdown item in the products/resources mega-menu

### Badges

**Category Label**
- Text: `#2b2b3b`
- Radius: 0px
- Font: 16px Pretendard weight 400
- Use: Blog category tag ("Insight", "Product") — text-only label, no fill

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand surfaces)
**Tier 1 sources:** https://www.makinarocks.ai, https://www.makinarocks.ai/en/blog/, https://www.makinarocks.ai/en/about/, https://github.com/makinarocks
**Tier 2 sources:** getdesign.md/makinarocks — NO MAKINAROCKS DATA (directory page, KR brand uncovered); styles.refero.design/?q=makinarocks — not listed (only unrelated fuzzy matches returned)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 24px, 30px, 48px, 64px
- Notable: nav/menu items use 12px 16px padding at 44px height; the pill CTAs use an asymmetric 9px 24px; the contact outline uses 5px 30px for a slim, wide tap target

### Grid & Container
- Centered hero with the 64px KmrApparat headline as the anchor, white on a dark hero band
- "Our Products" presented as side-by-side white product cards (Runway, DrawX) at 12px radius
- Industry coverage shown as a row of dark indigo (`#2b2b3b`) tiles with white 24px titles
- Blog/news presented as a card grid at 16px radius with category labels and list titles
- Feature bands alternate white (`#ffffff`) with tinted lavender (`#f1f3fb`) and dark indigo sections

### Whitespace Philosophy
- **Instrument-grade calm**: despite being a dense enterprise-AI product, the marketing surface is airy with generous vertical rhythm between sections.
- **Contrast over decoration**: separation comes from indigo-on-white contrast, `#e3e2eb` hairlines, and tinted `#f1f3fb` panels rather than borders-everywhere or heavy shadow.
- **Rationed color**: white and indigo dominate; blue (`#006aff`) and periwinkle (`#6a77d7`) appear only at interactive or emphasis moments.

### Border Radius Scale
- Small (4px): inner elements, small chips
- Medium (12px): product cards, nav/menu items — the workhorse
- Large (16px): blog cards, tinted panels
- Round (28px): carousel Prev/Next controls
- Pill (50px): primary section CTAs
- Full (9999px): fully-rounded accents

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f1f3fb` / `#efeff5` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e3e2eb` border | Card outlines, dividers |
| Soft Card (Level 3) | `rgba(0,0,0,0.05) 0px 10px 20px 0px` | Lifted product / content cards |
| Drop (Level 4) | `rgba(0,0,0,0.25) 0px 4px 4px 0px` | Floating controls, stronger emphasis |

**Shadow Philosophy**: MakinaRocks is a near-flat system. Live inspection found most surfaces carrying `box-shadow: none`, with depth communicated through the indigo-on-white contrast, `#e3e2eb` hairlines, and tinted lavender panels. When the system does elevate, it uses a whisper-soft `rgba(0,0,0,0.05) 0px 10px 20px` on cards — barely-there lift — reserving the firmer `rgba(0,0,0,0.25) 0px 4px 4px` only for floating controls. The restraint keeps the UI reading as precise and engineered rather than decorative.

## 7. Do's and Don'ts

### Do
- Use the dark indigo (`#2b2b3b`) as the signature color for headings, product names, and dark tiles
- Keep the system near-monochrome — black (`#000000`) text on white (`#ffffff`)
- Use KmrApparat for every headline and Pretendard for every paragraph
- Apply tight negative tracking on display headlines (-1.6px at 64px)
- Ration the accents — reserve blue (`#006aff`) and periwinkle (`#6a77d7`) for interactive/emphasis moments
- Separate sections with `#e3e2eb` hairlines and tinted `#f1f3fb` panels rather than heavy shadow
- Use the 12px card radius as the workhorse and 50px pills for primary CTAs
- Step text down through the slate ladder (`#5a5a72` → `#8d8da5`) for hierarchy

### Don't
- Don't reach for gradient-heavy neon — MakinaRocks signals precision through grayscale discipline
- Don't use pure black for the brand-weight moments — the indigo `#2b2b3b` carries identity
- Don't spread the accent blue across many elements — it dilutes the interactive signal
- Don't set headlines in Pretendard — KmrApparat owns display
- Don't lean on heavy drop shadows — keep elevation whisper-soft and rare
- Don't use sharp corners on CTAs — primary actions are 50px pills
- Don't mix in a second saturated hue beyond the blue/periwinkle accents
- Don't use positive letter-spacing at display sizes — the system tracks tight

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, product cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up product/blog cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature/blog bands |

### Touch Targets
- Mega-menu items at 44px height with 12px 16px padding — comfortably tappable
- Pill CTAs at 46px height, full 50px radius for an unmistakable target
- Carousel controls at 40px round (28px radius) for thumb reach

### Collapsing Strategy
- Hero: 64px KmrApparat headline scales down on mobile, weight 700 maintained
- Product cards: side-by-side → stacked single column
- Industry tiles: row → wrap/grid on narrow viewports
- Tinted/white/indigo bands maintain full-width treatment

### Image Behavior
- Product and illustration imagery sits inside 12px-radius cards across breakpoints
- Blog cards maintain 16px radius
- Cards carry the soft `rgba(0,0,0,0.05)` shadow consistently or stay flat

## 9. Agent Prompt Guide

### Quick Color Reference
- Signature / headings: Indigo (`#2b2b3b`)
- Body text: Ink Black (`#000000`)
- Soft hero line / pill outline: Near-Black (`#1a1a1a`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Lavender (`#f1f3fb`), Surface Alt (`#efeff5`)
- Hairline: `#e3e2eb`
- Secondary text: Slate (`#5a5a72`)
- Muted text: Muted Slate (`#8d8da5`)
- Accent (links): Accent Blue (`#006aff`)
- Highlight: Periwinkle (`#6a77d7`)
- Control bg: Chip Grey (`#c4c4d4`)

### Example Component Prompts
- "Create a dark hero band: indigo-to-black background, white text. Headline at 64px KmrApparat weight 700, line-height 1.30, letter-spacing -1.6px, color #ffffff. One pill CTA: transparent background, 1px solid #ffffff, white text, 50px radius, 9px 24px padding, 16px KmrApparat weight 500 — 'Get started'."
- "Design a product card: white #ffffff background, 12px radius, soft shadow rgba(0,0,0,0.05) 0px 10px 20px. Title 48px KmrApparat weight 500, color #2b2b3b. Body 16px Pretendard weight 400, #5a5a72."
- "Build an industry tile: dark indigo #2b2b3b background, 12px radius, 12px 16px padding. Title 24px KmrApparat weight 700, white #ffffff text — '자동차'."
- "Create top nav: white header, KmrApparat 16px weight 400 labels in #000000. Mega-menu dropdown items at 44px height, 12px radius, 12px 16px padding. Contact CTA right-aligned: white bg, 1px solid #000000, 19px radius, 5px 30px padding — '문의하기'."

### Iteration Guide
1. KmrApparat for every headline; Pretendard 400 for every paragraph
2. Indigo (`#2b2b3b`) carries brand weight; black (`#000000`) is plain text
3. Near-monochrome — ration blue (`#006aff`) and periwinkle (`#6a77d7`) to interactive/emphasis
4. 12px card radius is the workhorse; 50px pills for primary CTAs
5. Separate with `#e3e2eb` hairlines and `#f1f3fb` tinted panels, not heavy shadow
6. Keep elevation whisper-soft (`rgba(0,0,0,0.05)`) and rare
7. Tight negative tracking on display (-1.6px at 64px), normal on body

---

## 10. Voice & Tone

MakinaRocks' voice is **expert, grounded, and quietly assured** — the register of senior industrial engineers who have actually stood on a factory floor, not marketers describing one. English headlines are declarative and outcome-framed ("Transforming Industries with Specialized AI", "Deploying AI, Delivering Reality"); Korean copy speaks plainly about real industrial work ("산업 현장의 지능화"). The brand is notably anti-hype for an AI company — it even runs content questioning AI overreach ("마키나락스는 왜 AI 하지 말라고 광고할까?") — positioning itself as the realist that makes AI actually work in harsh operational environments.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, outcome-framed. "Deploying AI, Delivering Reality." Confident, not hype. |
| Product names | Short, technical, English (Runway, DrawX). Tools, not slogans. |
| Industry labels | Plain Korean nouns. "자동차", "국방", "중공업", "제조". |
| Blog / insight | Honest and counter-narrative. Willing to say AI fails ("Why 95% of Companies Fail at AI"). |
| CTAs | Direct, low-pressure. "Get started", "Learn more", "문의하기". |
| Korean closing | Partnership-framed. "산업 지능화의 시작, 마키나락스와 함께 하세요." |

**Voice samples (verbatim from live surfaces):**
- "Transforming Industries with Specialized AI" — hero headline. *(verified live 2026-06-26, www.makinarocks.ai)*
- "Deploying AI, Delivering Reality" — secondary hero line. *(verified live 2026-06-26, www.makinarocks.ai)*
- "산업 현장의 지능화, 마키나락스와 시작하세요." — section heading. *(verified live 2026-06-26, www.makinarocks.ai)*
- "마키나락스는 왜 AI 하지 말라고 광고할까?" — blog post title (anti-hype register). *(verified live 2026-06-26, www.makinarocks.ai)*

**Forbidden register**: gradient-neon AI hype, "revolutionary/disruptive" superlatives, vague magic-AI promises divorced from operational outcomes, exclamation-heavy marketing.

## 11. Brand Narrative

MakinaRocks (마키나락스) was founded in **December 2017** by **CEO 윤성호 (Yoon Sung-ho)** — a Physics PhD (MIT) who had worked at Samsung Electronics and SK Telecom before starting the company — alongside co-founders drawn from industrial-AI research ([SK Telecom Newsroom interview with CEO Yoon Sung-ho](https://news.sktelecom.com/208490)). The founding premise addressed a uniquely manufacturing-heavy Korean problem: the country's factories, plants, and heavy industry generate vast operational data, but generic AI tools fail in the "harsh operational environments" of the real field. MakinaRocks set out to build AI specialized for those conditions.

The company describes itself as "The Physical AI Leader — Built for the Field, Powered by Enterprise AI OS," with a stated mission to "build AI for harsh operational environments and develop Physical AI that operates where it matters most" (makinarocks.ai/en/about). Its product line reflects that: **Runway**, an AI OS that turns AI into a managed enterprise asset, and **DrawX**, an AI agent for engineering-drawing decisions. By its own reporting the company runs a 70%+ engineering workforce, has deployed thousands of industrial AI models across roughly 40 global customers, and serves automotive, semiconductor, battery, chemical, defense/public-sector, and heavy-industry domains.

What MakinaRocks refuses, visible in both its design and its voice: the gradient-neon hype aesthetic of consumer AI and the magic-box promises that don't survive a factory floor. What it embraces: grayscale discipline anchored by a serious indigo, a custom KmrApparat display type that reads as machined and precise, and an honest, counter-narrative tone willing to publish "why most companies fail at AI." The brand positions itself as the realist that makes industrial AI actually operate.

## 12. Principles

1. **Built for the field, not the demo.** AI must survive harsh, real operational environments. *UI implication:* favor instrument-grade clarity and grayscale discipline over decorative flourish; every element should read as engineered.
2. **One color carries the brand.** The indigo `#2b2b3b` is the identity; everything else is rationed. *UI implication:* use indigo for headings, product names, and dark tiles; keep blue/periwinkle accents to interactive moments only.
3. **Honest over hyped.** The brand will openly discuss AI's failures. *UI implication:* copy states concrete outcomes; avoid superlatives and magic-AI promises.
4. **Two voices, two jobs.** KmrApparat brands; Pretendard explains. *UI implication:* never set body in the display face or headlines in the body face — the split is the hierarchy.
5. **Flat and precise.** Depth is contrast and hairlines, not heavy shadow. *UI implication:* separate with `#e3e2eb` hairlines and `#f1f3fb` tints; keep elevation whisper-soft and rare.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable MakinaRocks customer segments (industrial AI buyers, plant engineers, manufacturing data teams), not individual people.*

**한지훈, 41, 울산.** A smart-factory lead at an automotive plant evaluating predictive-maintenance AI. Distrusts polished AI demos that ignore line realities; values that MakinaRocks talks about harsh operational environments and deployed model counts rather than slogans.

**Seojin Park, 34, Seoul.** An ML engineer on an enterprise AI platform team adopting Runway as the AI OS for managing models in production. Appreciates the instrument-grade, no-nonsense interface and the honest engineering-blog tone.

**김도영, 47, 대전.** A defense/public-sector R&D director exploring industrial AI for mission-critical operations. Wants a vendor that signals seriousness and security; reads the indigo, grayscale design as trustworthy rather than flashy.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results / no models)** | White canvas. Single Indigo (`#2b2b3b`) line at body size explaining nothing is here yet, with one pill CTA to take the next step. No illustration clutter. |
| **Empty (saved / list none yet)** | Muted Slate (`#8d8da5`) single line: nothing yet, plus a path back. Calm and honest. |
| **Loading (content / list fetch)** | Skeleton cards on `#f1f3fb` tinted surface at final 12px/16px-radius dimensions. Flat pulse consistent with the near-shadowless system. |
| **Loading (in-place refresh)** | Subtle progress indicator; previous content stays visible with previous values. |
| **Error (request failed)** | Inline message in Indigo with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone — states what to do next. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "필수". |
| **Success (submitted / 문의 sent)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f1f3fb` blocks at final dimensions, 12px/16px radius, flat pulse. |
| **Disabled** | Muted Slate (`#8d8da5`) text on reduced-opacity surface; outline CTAs fade rather than switch to a foreign gray. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 200ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, dropdowns, carousel |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained — consistent with the flat, precise aesthetic. Pill CTAs and carousel controls respond to press with a subtle scale/opacity shift; product and content cards fade-in from below at `motion-standard / ease-enter`. The product carousel advances on the round Prev/Next controls with a steady slide. No bounce or spring — an industrial-AI product signals reliability, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on https://www.makinarocks.ai and https://www.makinarocks.ai/en/blog/:
- Hero H1 "Transforming Industries with Specialized AI" — KmrApparat 64px / weight 700 / -1.6px / color rgb(255,255,255)
- Hero H1 "Deploying AI, Delivering Reality" — KmrApparat 64px / 700 / color rgb(26,26,26) (#1a1a1a)
- Section H2 "Our Products" / "산업 현장의 지능화, 마키나락스와 시작하세요." — KmrApparat 40px / 500 / -0.16px / rgb(0,0,0)
- Product H3 "Runway" / "DrawX" — KmrApparat 48px / 500 / color rgb(43,43,59) (#2b2b3b)
- Industry tile H3 "자동차"/"국방"/"제조" — KmrApparat 24px / 700 / white rgb(255,255,255)
- Contact CTA "문의하기" — bg rgb(255,255,255) / 1px solid rgb(0,0,0) / radius 19px / Pretendard 16px
- Pill CTA "Get started"/"Learn more" — transparent / 1px solid rgb(26,26,26) / radius 50px / KmrApparat 16px/500
- Carousel Prev/Next — bg rgba(196,196,212,0.5) (#c4c4d4) / radius 28px
- Blog H1 "Blog" — Pretendard 64px / 600 / rgb(43,43,59); blog accent bg rgb(0,106,255) (#006aff)
- Body — Pretendard 16px / 400 / line-height 25.6px / rgb(0,0,0)
- Soft card shadow rgba(0,0,0,0.05) 0px 10px 20px; most surfaces box-shadow none
- document.title: "Transforming Industries with Specialized AI | MakinaRocks"

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Proof block).

Voice samples (§10) are verbatim from the live homepage and blog (hero H1, section H2, blog post title).

Brand narrative (§11): MakinaRocks (마키나락스) founded December 2017; CEO 윤성호 (Yoon Sung-ho),
MIT Physics PhD, ex-Samsung Electronics / ex-SK Telecom. Sourced from the SK Telecom Newsroom
interview (news.sktelecom.com/208490), makinarocks.ai/en/about (mission, Physical AI positioning,
70%+ engineering workforce, ~40 customers, thousands of deployed models), and WebSearch of public
company records. Specific figures are as reported by the company and press; treat as company-stated.

Personas (§13) are fictional archetypes informed by publicly observable MakinaRocks customer
segments (industrial AI buyers, plant engineers, manufacturing/defense R&D). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "built for the field, not the demo", "grayscale discipline as a rejection
of consumer-AI hype") are editorial readings connecting MakinaRocks' observed design and stated
positioning, not directly sourced MakinaRocks statements.
-->
