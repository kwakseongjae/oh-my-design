---
id: imweb
name: Imweb
display_name_kr: 아임웹
country: KR
category: saas
homepage: "https://imweb.me"
primary_color: "#00b9ff"
logo:
  type: favicon
  slug: "https://vendor-cdn.imweb.me/images/main/imweb-2309-favicon-120x120.png?v1"
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "Brand identity cyan (#00b9ff) is reserved for data viz / identity moments; interactive CTAs are near-black ink (#15181e). Magenta (#ff50da) is an editorial eyebrow accent on pricing. UI chrome uses the custom 'imweb Sans' font; content uses Pretendard."
  colors:
    primary: "#00b9ff"
    primary-bright: "#2dc5ff"
    primary-soft: "#81dcff"
    primary-pale: "#dff6ff"
    link: "#0090d4"
    accent-magenta: "#ff50da"
    ink: "#15181e"
    ink-pure: "#000000"
    body-secondary: "#4b515b"
    muted: "#717680"
    faint: "#9fa3ab"
    faint-alt: "#bcc0c6"
    hairline: "#dbdee3"
    surface: "#f8f9fb"
    canvas: "#ffffff"
  typography:
    family: { body: "Pretendard", ui: "imweb Sans" }
    display-hero: { size: 80, weight: 700, lineHeight: 1.00, use: "Hero rotating keyword (매출내기), Pretendard Bold" }
    display-lg:   { size: 48, weight: 700, lineHeight: 1.25, use: "Pricing page headline" }
    section:      { size: 36, weight: 700, lineHeight: 1.48, use: "Section titles" }
    subsection:   { size: 28, weight: 700, lineHeight: 1.48, use: "Feature card heads (디자인이 쉬워요)" }
    card-title:   { size: 24, weight: 700, lineHeight: 1.33, use: "Pricing group heads, story card titles" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Pretendard" }
    button:       { size: 16, weight: 600, lineHeight: 1.50, use: "Primary CTA label, imweb Sans" }
    button-sm:    { size: 14, weight: 600, lineHeight: 1.50, use: "Compact CTA / plan buttons, imweb Sans" }
    caption:      { size: 12, weight: 600, use: "Discount tags, fine labels" }
  spacing: { xs: 6, sm: 8, md: 12, base: 16, lg: 28, xl: 32, section: 64 }
  rounded: { sm: 4, md: 8, lg: 12, xl: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#15181e", fg: "#ffffff", radius: "8px", padding: "12px 16px", height: "48px", font: "16px / 600 imweb Sans", use: "Primary CTA (지금 무료로 시작하기) — near-black ink, not brand cyan" }
    button-secondary: { type: button, bg: "#ffffff", fg: "#4b515b", border: "1px solid #dbdee3", radius: "8px", padding: "8px 12px", height: "40px", font: "14px / 600 imweb Sans", use: "Plan-card trial CTA (14일 무료 체험 시작하기), hairline outline" }
    icon-button: { type: button, fg: "#bcc0c6", radius: "9999px", padding: "8px", height: "32px", font: "14px / 400 imweb Sans", use: "Header search icon pill, translucent grey bg rgba(113,118,128,0.05)" }
    card-faq: { type: card, bg: "#f8f9fb", fg: "#15181e", radius: "8px", padding: "28px 32px", font: "16px / 400 Pretendard", use: "FAQ accordion row on pricing page" }
    tab-feature: { type: tab, active: "text #15181e", disabled: "#717680 label", font: "16px / 400 Pretendard", use: "Pricing feature-group tabs (기본/사용자/쇼핑/예약)" }
    badge-promo: { type: badge, fg: "#0090d4", radius: "8px 8px 0 0", padding: "8px 0", font: "14px / 600 Pretendard", use: "Plan-card promo strip (PG 가입비 면제), cyan tint bg rgba(0,185,255,0.1)" }
  components_harvested: true
---

# Design System Inspiration of Imweb

## 1. Visual Theme & Atmosphere

Imweb (아임웹) is Korea's leading no-code website builder and commerce platform, and its marketing surface reads like the product promise itself: clean, friendly, and deliberately easy. The canvas is pure white (`#ffffff`) with a soft cool-grey utility surface (`#f8f9fb`) for FAQ rows and secondary panels. All text sits in a near-black ink (`#15181e`) — a slightly blue-warmed charcoal rather than pure black — set in **Pretendard**, the de-facto Korean product font, at a comfortable 16px/1.5 base. The most surprising structural choice is the CTA strategy: although the brand identity color is a vivid sky cyan (`#00b9ff`), every primary call-to-action button is rendered in the near-black ink, not the brand color. Cyan is reserved for identity and data moments — growth charts, stat callouts, tinted promo strips — so the page feels monochrome-confident with the brand blue appearing as evidence rather than decoration.

Typography is bold and unfussy. Headlines run Pretendard weight 700 at every level — an 80px rotating hero keyword ("매출내기"), 48px pricing headlines, 36px section titles, 28px feature heads — with **normal letter-spacing throughout**: no fashionable negative tracking, just big, legible, declarative hangul. A second, custom UI font called **imweb Sans** takes over inside interactive chrome (buttons, search, plan selectors), giving controls a subtly tighter, product-grade voice distinct from the editorial Pretendard around them. Body copy stays quiet at 16px weight 400.

Depth is essentially flat. Live inspection found `box-shadow: none` across nav, hero, CTAs, and cards; separation comes from the `#f8f9fb` surface tint, 1px hairlines (`#dbdee3`), and a disciplined radius system where 8px is the overwhelming workhorse (95 of ~108 rounded elements on the homepage), stretched to 12-16px for media cards and a full pill only for the small icon button. One playful wildcard keeps the system from feeling sterile: a saturated magenta (`#ff50da`) used as an editorial eyebrow accent on pricing section labels — a single splash of commerce-energy against the otherwise cyan-and-ink palette.

**Key Characteristics:**
- Pretendard weight 700 for all display sizes, normal letter-spacing — bold, plain-spoken Korean headlines
- Custom `imweb Sans` font for interactive chrome (buttons, search) — UI voice split from editorial voice
- Near-black ink (`#15181e`) primary CTAs; brand cyan (`#00b9ff`) reserved for charts, stats, and identity moments
- Magenta (`#ff50da`) as a single editorial eyebrow accent on pricing
- Flat depth: no shadows; `#f8f9fb` surface tint + `#dbdee3` hairlines do the separating
- 8px radius as the system workhorse; 12-16px for media cards; pill only on icon buttons
- Cyan tint ladder (`#2dc5ff` → `#81dcff` → `#ade8ff` → `#dff6ff`) for chart highlights and dark-section text
- Grey text ladder (`#4b515b` → `#717680` → `#9fa3ab` → `#bcc0c6`) for secondary/muted/faint hierarchy

## 2. Color Palette & Roles

### Brand
- **Imweb Cyan** (`#00b9ff`): The brand identity color. Used on growth-chart bars, stat blocks, and tinted promo surfaces (`rgba(0,185,255,0.1)`) — deliberately NOT on CTA buttons.
- **Cyan Bright** (`#2dc5ff`): Lighter cyan for emphasized text on dark or tinted sections.
- **Cyan Soft** (`#81dcff`): Stat captions on cyan blocks ("2025 누적 사이트 개설 수").
- **Cyan Mist** (`#ade8ff`): Pale cyan supporting text on saturated cyan surfaces.
- **Cyan Pale** (`#dff6ff`): The faintest cyan, fine text on brand-cyan backgrounds.
- **Link Blue** (`#0090d4`): Functional link/info color — discount percentages, promo strip text, inline links.
- **Editorial Magenta** (`#ff50da`): Pricing eyebrow headlines ("브랜드 운영에 꼭 맞는") and FAQ category heads. The single warm accent in the system.

### Ink & Text Hierarchy
- **Ink** (`#15181e`): Primary text, headings, nav, and primary CTA background. The system's near-black.
- **Pure Black** (`#000000`): Occasional maximum-contrast text and overlay scrims.
- **Body Secondary** (`#4b515b`): Secondary button labels, sub-emphasis copy.
- **Muted Grey** (`#717680`): Inactive tabs, tertiary text, de-emphasized labels.
- **Faint Grey** (`#9fa3ab`): Strikethrough prices, lowest-emphasis metadata on pricing tables.
- **Faint Alt** (`#bcc0c6`): Icon-button glyphs, placeholder-level chrome.

### Surface & Borders
- **Pure White** (`#ffffff`): Page canvas, plan cards, text on ink/cyan.
- **Surface Grey** (`#f8f9fb`): FAQ accordion rows, utility panels, alternating bands.
- **Hairline** (`#dbdee3`): 1px outline on secondary buttons and card borders — the primary separation device in a shadow-free system.

## 3. Typography Rules

### Font Family
- **Editorial/body**: `Pretendard` (with system fallbacks) — all headlines, body copy, and content text.
- **UI chrome**: `imweb Sans` (custom) — buttons, search, plan selectors, interactive labels.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Pretendard | 80px (5.00rem) | 700 | 1.00 (80px) | normal | Rotating hero keyword ("매출내기") |
| Display Large | Pretendard | 48px (3.00rem) | 700 | 1.25 (60px) | normal | Pricing page headline |
| Section Heading | Pretendard | 36px (2.25rem) | 700 | 1.36-1.48 | normal | Section titles |
| Sub-section | Pretendard | 28px (1.75rem) | 700 | 1.48 (41px) | normal | Feature heads ("디자인이 쉬워요") |
| Card Title | Pretendard | 24px (1.50rem) | 700 | 1.33 (32px) | normal | Pricing group heads, story cards |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |
| Button | imweb Sans | 16px (1.00rem) | 600 | 1.50 | normal | Primary CTA label |
| Button Small | imweb Sans | 14px (0.88rem) | 600 | 1.50 | normal | Plan-card CTAs |
| Caption | Pretendard | 12px (0.75rem) | 600 | 1.50 | normal | Discount tags ("20%") |

### Principles
- **One weight for display**: every headline is weight 700. Hierarchy comes from size (80 → 48 → 36 → 28 → 24), never from weight changes.
- **No tracking games**: letter-spacing is `normal` at every size — the system trusts Pretendard's native hangul fit.
- **Two fonts, two jobs**: Pretendard speaks (content); imweb Sans operates (controls). They never swap roles.
- **Semibold for action**: all button labels are weight 600 — distinctly heavier than 400 body text, lighter than 700 headlines.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#15181e`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Height: 48px
- Font: 16px / 600 / imweb Sans
- Use: Primary call-to-action ("지금 무료로 시작하기") — near-black ink, never brand cyan

**Plan Card Primary (Compact)**
- Background: `#15181e`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 12px
- Height: 40px
- Font: 14px / 600 / imweb Sans
- Use: Highlighted plan's trial CTA on pricing cards

**Plan Card Secondary (Outline)**
- Background: `#ffffff`
- Text: `#4b515b`
- Border: 1px solid `#dbdee3` (rendered as outline)
- Radius: 8px
- Padding: 8px 12px
- Height: 40px
- Font: 14px / 600 / imweb Sans
- Use: Non-highlighted plans' trial CTA ("14일 무료 체험 시작하기")

**Icon Button (Search)**
- Background: `rgba(113,118,128,0.05)`
- Text: `#bcc0c6`
- Radius: 999999px (full pill)
- Padding: 8px
- Height: 32px
- Font: 14px / 400 / imweb Sans
- Use: Header search trigger

### Cards & Containers

**FAQ Accordion Row**
- Background: `#f8f9fb`
- Text: `#15181e`
- Radius: 8px
- Padding: 28px 32px
- Font: 16px / 400 / Pretendard
- Use: Expandable FAQ rows on the pricing page (no shadow, no border)

**Template Showcase Card**
- Background: `#ffffff`
- Text: `#15181e`
- Radius: 12px
- Font: 16px / 400 / Pretendard
- Use: Template/customer-site gallery cards (~318px tall) in the hero carousel

### Badges & Promo Strips

**Plan Promo Strip**
- Background: `rgba(0,185,255,0.1)`
- Text: `#0090d4`
- Radius: 8px 8px 0px 0px
- Padding: 8px 0px
- Font: 14px / 600 / Pretendard
- Use: Top strip on highlighted plan card ("PG 가입비 면제 마감 임박")

**Discount Tag**
- Text: `#0090d4`
- Font: 12px / 600 / Pretendard
- Use: Yearly-billing discount percentage ("20%") next to plan prices

### Tabs

**Pricing Feature Tabs**
- Text: `#15181e` (active)
- Disabled: `#717680` (inactive label)
- Background: transparent
- Font: 16px / 400 / Pretendard
- Use: Feature-group switcher on pricing comparison ("쇼핑몰 창업 지원", "기본", "사용자", "쇼핑", "예약", "통계·분석·마케팅")

### Navigation
- Background: `#ffffff`
- Text: `#15181e`
- Font: 16px / 400 / Pretendard
- Use: Top horizontal nav ("주요기능", "템플릿", "요금", "전문가 찾기", "스토리", "고객지원") with dark primary CTA right-aligned

### Data Visualization
- Bars: `#00b9ff` solid fill
- Radius: 4px 4px 0px 0px (top-rounded bar caps)
- Use: Cumulative-sites growth chart (2021 → 2024 "80만 개"); captions on cyan in `#81dcff`

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://imweb.me (homepage, live computed-style inspect), https://imweb.me/price (pricing surface, live computed-style inspect), https://imweb.me/blog (아임웹 공식 블로그 — brand-owned, voice/tone source)
**Tier 2 sources:** none available — getdesign.md/imweb returns "No designs found"; styles.refero.design search for "imweb" and "아임웹" returned only generic catalog listings with no Imweb-specific style page
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px with a 4px sub-grid
- Observed scale: 6px, 8px, 12px, 16px, 28px, 32px, 64px
- Notable: FAQ rows carry generous 28px 32px padding, making text-heavy support content feel calm and tappable

### Grid & Container
- Centered hero with the 80px rotating keyword as the anchor and a horizontally scrolling template-card carousel beneath
- Feature trio ("디자인이 쉬워요 / 운영이 쉬워요 / 마케팅이 쉬워요") in a 3-up card row
- Pricing: plan cards in a row with the recommended plan carrying the cyan-tinted promo strip; full feature-comparison table below behind tabs
- Full-width alternating bands of white and `#f8f9fb`

### Whitespace Philosophy
- **Easy to scan, easy to start**: the layout mirrors the product pitch — generous vertical rhythm, one idea per band, nothing dense except the opt-in comparison table.
- **Flat segmentation**: bands separate by background tint, not by shadow or border weight.
- **Evidence blocks**: the cyan data-viz section is the one saturated moment; whitespace around it makes the growth numbers read as proof.

### Border Radius Scale
- Small (4px): chart bar caps (top corners)
- Medium (8px): buttons, FAQ rows, plan cards — the workhorse
- Large (12px): template/media showcase cards
- XL (16px): occasional feature containers
- Full (999999px): icon-button pill only

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, text, nav, CTAs |
| Tint (Level 1) | `#f8f9fb` background shift | FAQ rows, utility panels, alternating bands |
| Hairline (Level 2) | 1px `#dbdee3` outline | Secondary buttons, card edges |
| Brand block (Level 3) | Solid `#00b9ff` band | Data-viz / stats section — color as elevation |

**Shadow Philosophy**: Imweb is a shadow-free system. Live inspection found `box-shadow: none` on the nav, hero CTAs, plan cards, and FAQ rows. Hierarchy is communicated through surface tint, hairlines, and — uniquely — saturated brand-color blocks: when Imweb wants a section to feel important, it floods the background with cyan (`#00b9ff`) and switches text to the pale cyan ladder, rather than lifting a card with elevation. This keeps the builder-marketing surface feeling fast, flat, and modern, and leaves visual drama to the customer sites shown in the template carousel.

## 7. Do's and Don'ts

### Do
- Use Pretendard weight 700 for every headline; scale size, not weight
- Keep letter-spacing normal at all sizes — no negative tracking
- Render primary CTAs in near-black ink (`#15181e`), not brand cyan
- Reserve cyan (`#00b9ff`) for data viz, stats, and identity moments
- Use `imweb Sans` for button and control labels at weight 600
- Separate sections with `#f8f9fb` tint and `#dbdee3` hairlines — never shadows
- Hold the 8px radius as the default; 12px+ only for media cards
- Use the magenta (`#ff50da`) sparingly — a single editorial eyebrow per view

### Don't
- Put brand cyan on CTA buttons — the action color is ink
- Add drop shadows for elevation — the system is flat
- Mix multiple display weights — 700 is the only headline weight
- Apply negative letter-spacing to hangul headlines
- Use the magenta accent on more than one element per view
- Use pure black (`#000000`) where ink (`#15181e`) is established for text
- Round buttons into pills — only the small icon button is fully round
- Crowd the comparison table outside its tabbed container

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero keyword scales down, carousel becomes swipe |
| Tablet | 640-1024px | 2-up feature cards, plan cards stack or scroll |
| Desktop | 1024-1440px | Full layout, 3-up features, plan row with comparison table |

### Touch Targets
- Primary CTA at 48px height with 12px 16px padding — comfortably tappable
- Plan-card CTAs at 40px height
- FAQ rows are full-width 88px+ touch targets with 28px 32px padding
- Icon button at 32px pill with 8px padding

### Collapsing Strategy
- Hero: 80px rotating keyword compresses on mobile; weight 700 maintained
- Template carousel: horizontal swipe at all sizes
- Feature trio: 3-up → stacked single column
- Pricing comparison table: tabbed groups collapse to accordion-style disclosure
- Alternating white/`#f8f9fb` bands maintain full-width treatment

### Image Behavior
- Template showcase cards keep 12px radius and no shadow at all sizes
- Customer-site screenshots are the visual texture of the page — the chrome around them stays monochrome so the showcased designs carry the color

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand identity / data viz: Imweb Cyan (`#00b9ff`)
- Primary CTA: Ink (`#15181e`) with white text
- Background: Pure White (`#ffffff`)
- Utility surface: Surface Grey (`#f8f9fb`)
- Heading / body text: Ink (`#15181e`)
- Secondary text: Body Secondary (`#4b515b`)
- Muted / inactive: Muted Grey (`#717680`)
- Link / promo text: Link Blue (`#0090d4`)
- Editorial accent: Magenta (`#ff50da`)
- Hairline: `#dbdee3`

### Example Component Prompts
- "Create a hero on white: one giant rotating keyword at 80px Pretendard weight 700, line-height 1.0, color #15181e, normal letter-spacing. Below it a dark CTA button: #15181e background, white text, 8px radius, 12px 16px padding, 48px tall, 16px weight 600 'imweb Sans'."
- "Design a pricing plan card: white background, no shadow. Recommended plan gets a top promo strip with rgba(0,185,255,0.1) background, #0090d4 text at 14px/600, radius 8px 8px 0 0. Plan CTA: white bg, #4b515b text, 1px #dbdee3 outline, 8px radius, 40px tall, 14px/600."
- "Build a FAQ accordion: rows with #f8f9fb background, 8px radius, 28px 32px padding, #15181e 16px Pretendard text, no border, no shadow. Section eyebrow above in #ff50da at 24px weight 600."
- "Create a stats section: full-width #00b9ff background. Bar chart with white-on-cyan bars (top radius 4px), caption text in #81dcff at 24px, headline in white 36px Pretendard 700."
- "Design top navigation: white header, Pretendard 16px weight 400 links in #15181e, a full-pill icon search button (rgba(113,118,128,0.05) bg, #bcc0c6 glyph, 32px), and a dark #15181e CTA right-aligned."

### Iteration Guide
1. Headlines: Pretendard 700, size-based hierarchy (80/48/36/28/24), normal tracking
2. CTAs are ink `#15181e` — cyan never sits on a button
3. Cyan `#00b9ff` appears as blocks and bars, with the `#2dc5ff`/`#81dcff`/`#ade8ff`/`#dff6ff` ladder for on-cyan text
4. No shadows — tint with `#f8f9fb`, outline with `#dbdee3`
5. 8px radius default; 12px media cards; pill only for icon buttons
6. Button labels in `imweb Sans` 600; body in Pretendard 400
7. One magenta `#ff50da` eyebrow per view, maximum

---

## 10. Voice & Tone

Imweb's voice is **encouraging, plain-spoken, and ease-obsessed**. The entire homepage is built around one repeated promise — 쉬워요 ("it's easy") — applied to every stage of running a brand: design, operations, marketing. The hero pairs a giant rotating ambition word ("매출내기" — making revenue) with reassurance that the path there requires no developer and no designer. Copy speaks to first-time founders in warm, low-jargon Korean, framing Imweb as the partner that removes excuses ("시작이 쉬워서 성장이 쉬운" — easy to start, so easy to grow).

| Context | Tone |
|---|---|
| Hero | Ambition word + reassurance. "매출내기" at 80px, then how easy it is. |
| Feature heads | Three-beat ease refrain: "디자인이 쉬워요", "운영이 쉬워요", "마케팅이 쉬워요". |
| CTAs | Friction-removing imperatives: "지금 무료로 시작하기", "14일 무료 체험 시작하기". Free/trial always stated. |
| Social proof | Numbers as evidence: "지금 가장 빠르게 성장하는 브랜드 빌더, 아임웹" over the cumulative-sites chart. |
| Pricing | Fit-framing, not upsell: "브랜드 운영에 꼭 맞는 요금제를 선택해 보세요". |
| Blog / guides | Conversational and practical, occasionally playful ("쉬웠는데, 더 쉬워졌어요"). |

**Voice samples (verbatim from live surfaces):**
- "시작부터 성장까지 쉬워집니다" — homepage section head. *(verified live 2026-06-10)*
- "디자인이 쉬워요 / 운영이 쉬워요 / 마케팅이 쉬워요" — feature trio heads. *(verified live 2026-06-10)*
- "시작이 쉬워서 성장이 쉬운 아임웹과 함께하세요" — closing section head. *(verified live 2026-06-10)*
- "지금 가장 빠르게 성장하는 브랜드 빌더, 아임웹" — stats section head. *(verified live 2026-06-10)*
- "브랜드 운영에 꼭 맞는 요금제를 선택해 보세요" — pricing headline. *(verified live 2026-06-10)*

**Forbidden register**: technical jargon left unexplained, enterprise-procurement formality, pressure tactics that contradict the "easy and free to try" promise, hype superlatives without a number behind them.

## 11. Brand Narrative

Imweb (주식회사 아임웹) was founded in the early 2010s by **이수모 (Lee Su-mo, CEO)** in Seoul, with the stated vision **"We serve the underserved"** — bringing professional-grade web presence and commerce to the small brands, creators, and first-time founders that traditional web agencies and enterprise commerce platforms ignored. The founding bet was that a Korean-native, no-code website builder could collapse the cost of starting an online brand from "hire a developer and a designer" to "choose a template and start selling."

The product grew from a website builder into a full brand-commerce operating system — templates, hosting, payments (PG integration), bookings, communities, and marketing tools — positioning itself as a "브랜드 빌더" (brand builder) rather than a mere site builder. The growth chart on its own homepage tells the story the company wants told: cumulative sites created climbing year over year to 800,000+ by 2024, presented in brand cyan as plain evidence. Plans (Starter, Pro, Global) follow the same arc: start free, grow into commerce, expand globally.

What Imweb refuses, visible in its design: the intimidating density of enterprise commerce consoles, dark-pattern urgency, and decorative complexity that would contradict "easy." What it embraces: a flat, white, bold-type surface where the customer's own brand — shown in an endless carousel of real customer sites — is the hero, and Imweb's chrome stays deliberately monochrome around it.

## 12. Principles

1. **Easy is the brand.** Every surface must reduce perceived difficulty. *UI implication:* one idea per band, plain-language labels, trial/free always visible on CTAs.
2. **The customer's brand is the hero.** Imweb shows real customer sites as its primary imagery. *UI implication:* keep chrome monochrome (ink on white) so showcased designs carry the color; never let Imweb's accent compete with customer content.
3. **Proof over promise.** Growth claims come with charts and counts. *UI implication:* use the cyan data-viz block for evidence moments; numbers get full saturated-brand treatment, adjectives don't.
4. **One action color, and it isn't the logo color.** Ink (`#15181e`) means "act"; cyan (`#00b9ff`) means "this is us." *UI implication:* never put brand cyan on a button — the separation keeps both signals clean.
5. **Flat and friendly.** No shadows, 8px corners, generous padding. *UI implication:* separate with tint and hairline; reach for a solid color band, not elevation, when a section needs weight.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Imweb user segments (Korean small-brand founders, creators, and SMB operators), not individual people.*

**박민지, 27, 서울.** A fashion-brand founder leaving a smart-store marketplace to own her brand's look. Can't code, has strong design taste. Chose Imweb because the templates looked like the independent brands she admires, and she could swap one in without a developer.

**김도현, 34, 성남.** A YouTuber with 100K subscribers launching merch. Needs shop, bookings for fan events, and community in one place. Values that payments (PG) setup is handled inside the platform — the "PG 가입비 면제" promo on the pricing page is exactly the friction he feared.

**이은영, 41, 대구.** Runs a small academy and built her own site on a free plan years ago; upgraded as bookings grew. Trusts the platform because every step so far was self-serve, and the FAQ answered her questions in plain Korean before she had to call anyone.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new site, no content)** | White canvas with a template-first prompt — the empty state IS the template picker. One ink CTA to start; no guilt copy. |
| **Empty (no search results)** | Single Muted Grey (`#717680`) line stating no matches, with category tabs left visible for re-scoping. |
| **Loading (site list / templates)** | Flat `#f8f9fb` skeleton blocks at final card dimensions, 8-12px radius. No shadow shimmer — flat pulse consistent with the shadowless system. |
| **Loading (in-place refresh)** | Previous content stays visible; subtle inline progress. Never block the page. |
| **Error (form validation)** | Field-level plain-Korean message below the input; states what would be valid, not just "필수 입력". |
| **Error (payment / PG)** | Inline banner with the specific failure and the concrete next step (card re-registration, contact path) — pricing FAQ already models this plain, answer-first tone. |
| **Success (site published)** | Calm confirmation with the live URL immediately visible and a share path. The achievement is the user's site, not a celebration animation. |
| **Success (settings saved)** | Brief auto-dismiss toast, past tense, no exclamation. |
| **Skeleton** | `#f8f9fb` blocks, final dimensions, 8px radius, flat pulse. |
| **Disabled** | Labels drop to Faint Alt (`#bcc0c6`) on unchanged surface; ink CTAs fade rather than turning a different hue. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, tab switch, accordion icon |
| `motion-standard` | 200ms | FAQ expand, card reveal, dropdown |
| `motion-slow` | 400ms | Hero keyword rotation, carousel glide |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, panels, expanded rows |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, collapse |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is continuous but never showy. The two signature movements are ambient: the hero keyword rotation (one ambition word swapping at a relaxed cadence) and the template carousel's steady horizontal drift — both communicate "things are being built on Imweb right now." Interactive motion stays functional: FAQ rows expand at `motion-standard / ease-enter`, tabs switch instantly with a color change. No bounce or spring — approachable should not mean childish. Under `prefers-reduced-motion: reduce`, the keyword rotation and carousel pause and all transitions collapse to instant.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle on https://imweb.me and
https://imweb.me/price — all token-level claims (§1-9) come from this inspection:
- Hero rotating keyword "매출내기" — Pretendard 80px / 700 / lh 80px / #15181e
- Primary CTA "지금 무료로 시작하기" — bg #15181e / #ffffff / 8px radius / 12px 16px / 48px / 16px 600 "imweb Sans"
- Pricing headline 48px/700; eyebrow "브랜드 운영에 꼭 맞는" #ff50da 24px/700
- Plan secondary CTA — white bg, #4b515b text, outline 1px #dbdee3, 8px, 40px
- FAQ rows — #f8f9fb, 8px, 28px 32px padding
- Cyan #00b9ff chart bars (4px top radius), captions #81dcff; promo strip rgba(0,185,255,0.1) text #0090d4
- box-shadow: none across nav/CTA/cards (shadowless system)

Voice samples (§10) are verbatim from the live homepage and pricing page (listed inline).
Blog tone reference: https://imweb.me/blog (아임웹 블로그 — categories 인사이트 / 브랜드 인터뷰 /
아임웹 사용팁; sample title tone "쉬웠는데, 더 쉬워졌어요").

Brand narrative (§11): founder/CEO 이수모 (Lee Su-mo) and the vision statement
"We serve the underserved" are documented in public Korean company profiles
(THE VC thevc.kr/imweb, LinkedIn kr.linkedin.com/company/imwebcorp, Jobplanet).
Public sources disagree on the founding year (2010 per LinkedIn/THE VC registration
vs March 2013 per other profiles), so §11 states "early 2010s" rather than a single year.
The 800,000+ cumulative-sites figure is read directly from the live homepage growth
chart ("2024 80만 개", "2025 누적 사이트 개설 수").

Personas (§13) are fictional archetypes informed by publicly observable Imweb user
segments (small-brand founders, creators, SMB operators). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "one action color, and it isn't the logo color",
"the customer's brand is the hero") are editorial readings connecting Imweb's observed
design to its positioning, not directly sourced Imweb statements.
-->
