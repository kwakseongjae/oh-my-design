---
id: firstory
name: Firstory
country: TW
category: saas
homepage: "https://firstory.me"
primary_color: "#fb355e"
logo:
  type: github
  slug: Firstory
verified: "2026-06-10"
added: "2026-06-10"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-10"
  note: "primary = raspberry-pink CTA (#fb355e) on a warm off-white canvas (#fbfaf9); Poppins 700 display over Open Sans body; flat shadcn/Tailwind-style system (oklch source tokens, hairline rings instead of shadows)."
  colors:
    primary: "#fb355e"
    on-primary: "#fafafa"
    ink: "#0d131c"
    ink-soft: "#242a34"
    muted: "#4f5661"
    canvas: "#fbfaf9"
    card: "#ffffff"
    surface-cool: "#edf0f6"
    pink-tint: "#ffe6e7"
    pink-deep: "#962339"
    beige: "#f6efe5"
    hairline: "#e0e3e8"
    success: "#00c950"
  typography:
    family: { display: "Poppins", body: "Open Sans" }
    display-hero: { size: 72, weight: 700, lineHeight: 1.00, tracking: -1.8, use: "Hero headline, Poppins Bold" }
    display-page: { size: 48, weight: 700, lineHeight: 1.00, tracking: -1.2, use: "Page titles (pricing hero)" }
    section:      { size: 36, weight: 700, lineHeight: 1.11, tracking: -0.9, use: "Section titles, Poppins" }
    subsection:   { size: 30, weight: 700, lineHeight: 1.20, tracking: -0.75, use: "Feature heads, CTA banner" }
    card-title:   { size: 18, weight: 600, lineHeight: 1.56, use: "Solution card titles, Poppins SemiBold" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Open Sans" }
    nav:          { size: 14, weight: 500, lineHeight: 1.43, use: "Nav items, buttons, Open Sans Medium" }
    caption:      { size: 12, weight: 600, lineHeight: 1.40, use: "Badge / pill labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 64 }
  rounded: { sm: 10, md: 12, lg: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#fb355e", fg: "#fafafa", radius: "16px", padding: "0px 32px", height: "40px", font: "16px / 500 Open Sans", use: "Hero / banner CTA — Get started today" }
    button-plan: { type: button, bg: "#fb355e", fg: "#fafafa", radius: "12px", padding: "0px 10px", height: "36px", font: "14px / 500 Open Sans", use: "Featured plan CTA — 14-Day Free Trial" }
    button-quiet: { type: button, bg: "#fbfaf9", fg: "#0d131c", radius: "12px", padding: "0px 10px", height: "36px", font: "14px / 500 Open Sans", use: "Non-featured plan CTA — Start Free" }
    nav-item: { type: button, fg: "#0d131c", radius: "10px", padding: "8px 16px", height: "36px", font: "14px / 500 Open Sans", use: "Transparent ghost nav menu item" }
    billing-toggle: { type: tab, active: "bg #fb355e + text #fafafa", bg: "#f6efe5", fg: "#242a34", radius: "9999px", padding: "8px 20px", font: "14px / 500 Open Sans", use: "Monthly / Yearly segmented billing toggle" }
    card-solution: { type: card, bg: "#ffffff", fg: "#0d131c", radius: "16px", padding: "32px", use: "Solution / feature card on warm canvas, 10% ink hairline ring" }
    card-plan-featured: { type: card, bg: "#ffffff", border: "2px solid #fb355e", radius: "16px", use: "Recommended pricing plan card" }
    badge-save: { type: badge, bg: "#ffe6e7", fg: "#962339", radius: "9999px", padding: "2px 8px", font: "12px / 600 Open Sans", use: "Save 22% pill on billing toggle" }
    badge-recommend: { type: badge, bg: "#fb355e", fg: "#fafafa", radius: "9999px", padding: "4px 16px", font: "12px / 600 Open Sans", use: "Recommend pill on featured plan card" }
    announcement-pill: { type: badge, bg: "#ffe6e7", fg: "#0d131c", border: "1px solid #ffe6e7", radius: "16px", font: "16px / 400 Open Sans", use: "Hero announcement banner pill" }
  components_harvested: true
---

# Design System Inspiration of Firstory

## 1. Visual Theme & Atmosphere

Firstory is Taiwan's leading podcast-hosting SaaS, and its marketing surface reads like a warm, creator-friendly studio rather than an enterprise audio tool. The canvas is a warm off-white (`#fbfaf9`) — paper-toned, not clinical white — with pure-white cards (`#ffffff`) floating on top and a single saturated raspberry-pink (`#fb355e`) carrying every call to action. Text sits in a deep blue-black ink (`#0d131c`) with a slate muted tone (`#4f5661`) for secondary copy, giving the page calm editorial contrast against the energetic pink.

The typographic pairing defines the personality: **Poppins Bold (700)** owns every headline — a geometric, rounded sans that lands friendly and contemporary at the 72px hero size with tight `-1.8px` tracking — while **Open Sans** carries all body, navigation, and button text at 16px/400 and 14px/500. The geometric roundness of Poppins echoes the pill-and-rounded geometry of the components, so display type and UI chrome feel cut from the same cloth. Headlines in Traditional Chinese ("用 Podcast 開啟你的媒體事業") render with the same bold weight and tight rhythm, keeping the bilingual zh-TW/EN site visually unified.

Depth is almost entirely flat: live inspection found no rendered drop shadows on the nav, hero, cards, or buttons. Separation comes from the warm-canvas-versus-white-card contrast, 10%-ink hairline rings around cards, a cool grey tint (`#edf0f6`) and pink tints (`#ffe6e7`, plus a translucent `#fb355e` at low alpha) for feature illustration zones, and the `#e0e3e8` hairline. The system is built on a modern shadcn/Tailwind stack — colors are authored in oklch and radii step through 10px, 12px, and 16px — which gives the whole site the crisp, current feel of a 2020s developer-grade SaaS wearing a creator-warm palette.

**Key Characteristics:**
- Poppins Bold (700) for all display type — geometric, rounded, friendly authority
- Open Sans 400/500 for body and UI — neutral, highly legible workhorse
- One action color: raspberry-pink `#fb355e` for CTAs, active states, and the featured plan
- Warm off-white canvas (`#fbfaf9`) with pure-white cards (`#ffffff`) — paper-like, not sterile
- Flat depth: hairline rings and surface tints instead of drop shadows
- Pill geometry for toggles and badges; 10–16px rounding for buttons, cards, and nav
- Tight negative tracking on headlines (-1.8px at 72px, -0.9px at 36px)
- Pink tint family (`#ffe6e7` surface, `#962339` deep text) for announcement and savings accents
- Green `#00c950` reserved for checkmark/success semantics in pricing tables

## 2. Color Palette & Roles

### Primary
- **Firstory Pink** (`#fb355e`): The single action color — hero CTA, featured plan border, active billing toggle, Recommend badge, link accents on pricing. A raspberry-pink that reads creative and energetic rather than corporate.
- **On-Primary** (`#fafafa`): Near-white text on pink buttons and badges.
- **Ink** (`#0d131c`): Primary text color for headlines, body, and nav — a deep blue-black that stays soft against the warm canvas.

### Surface & Neutral
- **Canvas** (`#fbfaf9`): The warm off-white page background — the system's defining surface.
- **Card White** (`#ffffff`): Solution cards, pricing plan cards, and content containers.
- **Cool Surface** (`#edf0f6`): Cool grey-blue tint for feature illustration zones and comparison-table stripes.
- **Beige** (`#f6efe5`): Warm beige for the inactive half of the billing toggle — a tactile, paper-like neutral.
- **Hairline** (`#e0e3e8`): Default border color for dividers and rings.

### Pink Tint Family
- **Pink Tint** (`#ffe6e7`): Announcement pill background, Save-percentage badge background, and decorative tinted zones (often at 80% alpha).
- **Pink Deep** (`#962339`): Dark berry text on pink-tinted badges — the accessible companion to `#ffe6e7`.

### Text Hierarchy & Semantic
- **Ink** (`#0d131c`): Headlines, primary copy, nav items.
- **Ink Soft** (`#242a34`): Inactive toggle label text.
- **Muted Slate** (`#4f5661`): Secondary body copy, footer links, captions.
- **Success Green** (`#00c950`): Feature checkmarks and positive indicators in pricing/compare tables.

## 3. Typography Rules

### Font Family
- **Display**: `Poppins` (with `Poppins Fallback`) — all h1/h2/h3 headlines, plan prices, FAQ items. Bold (700) at display sizes, SemiBold (600) at card-title sizes.
- **Body**: `Open Sans` (with `Open Sans Fallback`) — document default for body copy, nav, buttons, footer.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Poppins | 72px (4.50rem) | 700 | 1.00 (72px) | -1.8px | Homepage hero headline |
| Page Title | Poppins | 48px (3.00rem) | 700 | 1.00 (48px) | -1.2px | Pricing hero ("Simple, Transparent Pricing") |
| Section Heading | Poppins | 36px (2.25rem) | 700 | 1.11 (40px) | -0.9px | Section titles |
| Sub-section | Poppins | 30px (1.88rem) | 700 | 1.20 (36px) | -0.75px | Feature heads, CTA banner |
| Step Title | Poppins | 20px (1.25rem) | 600 | 1.40 (28px) | normal | Numbered step headings |
| Card Title | Poppins | 18px (1.13rem) | 600 | 1.56 (28px) | normal | Solution card titles, stat labels |
| FAQ Item | Poppins | 16px (1.00rem) | 500 | 1.50 | normal | Accordion triggers |
| Body | Open Sans | 16px (1.00rem) | 400 | 1.50 (24px) | normal | Standard reading text |
| Nav / Button | Open Sans | 14px (0.88rem) | 500 | 1.43 (20px) | normal | Nav items, button labels |
| Eyebrow Label | Open Sans | 14px (0.88rem) | 600 | 1.43 (20px) | normal | Small feature labels ("Distribution") |
| Badge | Open Sans | 12px (0.75rem) | 600 | 1.40 | normal | Save / Recommend pills |

### Principles
- **Poppins persuades, Open Sans informs**: the geometric display face carries every emotional beat; the neutral body face carries every explanation. They never swap roles.
- **Tracking tightens with size**: -1.8px at 72px, -1.2px at 48px, -0.9px at 36px, -0.75px at 30px; normal at 20px and below.
- **Solid 1.0 line-height on display**: hero and page titles set line-height equal to font size — dense, poster-like blocks.
- **Prices are display type**: plan prices ($0 / $84 / $180) render in Poppins 36px/700, treated as headlines rather than data.
- **Bilingual parity**: zh-TW and EN copy share identical sizes, weights, and tracking — the system is locale-agnostic.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#fb355e`
- Text: `#fafafa`
- Radius: 16px
- Padding: 0px 32px
- Height: 40px
- Font: 16px / 500 / Open Sans
- Use: Hero and banner CTAs ("Get started today", "Get Started for Free", "立即開始")

**Plan CTA (Featured)**
- Background: `#fb355e`
- Text: `#fafafa`
- Radius: 12px
- Padding: 0px 10px
- Height: 36px
- Font: 14px / 500 / Open Sans
- Use: CTA on the recommended pricing plan ("14-Day Free Trial", "免費試用 14 天")

**Plan CTA (Quiet)**
- Background: `#fbfaf9`
- Text: `#0d131c`
- Radius: 12px
- Padding: 0px 10px
- Height: 36px
- Font: 14px / 500 / Open Sans
- Use: CTA on non-featured plans ("Start Free", "免費開始")

**Nav Item (Ghost)**
- Background: transparent
- Text: `#0d131c`
- Radius: 10px
- Padding: 8px 16px
- Height: 36px
- Font: 14px / 500 / Open Sans
- Use: Top-nav menu items and links ("Features", "Pricing", "Blog")

### Tabs

**Billing Toggle (Segmented)**
- Background: `#f6efe5` (inactive segment)
- Text: `#242a34` (inactive segment)
- Active: bg `#fb355e` + text `#fafafa`
- Radius: 9999px (full pill)
- Padding: 8px 20px
- Height: 36px
- Font: 14px / 500 / Open Sans
- Use: Monthly / Yearly billing period toggle on pricing

### Cards & Containers

**Solution Card**
- Background: `#ffffff`
- Text: `#0d131c`
- Radius: 16px
- Padding: 32px
- Use: Solution / feature cards on the warm canvas ("AI Studio", "Data Analytics"), 10%-ink hairline ring, no shadow

**Pricing Plan Card**
- Background: `#ffffff`
- Radius: 16px
- Padding: 24px 0px
- Use: Standard pricing plan column

**Pricing Plan Card (Featured)**
- Background: `#ffffff`
- Border: 2px solid `#fb355e`
- Radius: 16px
- Padding: 24px 0px
- Use: Recommended plan, paired with the pink Recommend badge

### Badges

**Save Badge**
- Background: `#ffe6e7`
- Text: `#962339`
- Radius: 9999px (full)
- Padding: 2px 8px
- Font: 12px / 600 / Open Sans
- Use: "Save 22%" pill attached to the Yearly toggle

**Recommend Badge**
- Background: `#fb355e`
- Text: `#fafafa`
- Radius: 9999px (full)
- Padding: 4px 16px
- Font: 12px / 600 / Open Sans
- Use: "Recommend" pill on the featured plan card

**Announcement Pill**
- Background: `#ffe6e7` (80% alpha)
- Text: `#0d131c`
- Border: 1px solid `#ffe6e7`
- Radius: 16px
- Height: 38px
- Font: 16px / 400 / Open Sans
- Use: Hero announcement banner ("First Wave in Asia-Pacific! …")

### Navigation
- Background: transparent over `#fbfaf9` canvas
- Items: ghost buttons, 14px Open Sans weight 500, `#0d131c` text, 10px radius
- Height: 36px items in a slim top bar
- Use: Horizontal top nav (Features / Monetize / Compare / Pricing / Blog / For Advertisers) with language switcher

### FAQ Accordion
- Background: transparent
- Text: `#0d131c`
- Padding: 20px 24px
- Height: 64px (collapsed trigger)
- Font: 16px / 500 / Poppins
- Use: FAQ section triggers ("How do I get started with Firstory?")

### Footer
- Headings: `#0d131c`, 14px Open Sans weight 600 ("Product", "Resources", "Legal")
- Links: `#4f5661`, 14px Open Sans weight 400
- Use: Four-column sitemap footer with social links

---
**Verified:** 2026-06-10
**Tier 1 sources:** https://firstory.me/en (homepage, live computed-style inspect); https://firstory.me/en/pricing (pricing surface, live computed-style inspect); https://firstory.me/zh (zh-TW homepage, live copy capture); https://firstory.blog (Firstory official blog — brand-owned); https://github.com/Firstory (official GitHub org — brand-owned)
**Tier 2 sources:** none available (getdesign.md/firstory → "No designs found"; styles.refero.design ?q=firstory search returns no Firstory listing)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 64px
- Notable: solution cards use a generous 32px internal padding; nav items use compact 8px 16px; section rhythm runs at 64px+

### Grid & Container
- Centered single-column hero with the 72px Poppins headline and one pink CTA as the anchor
- Solution cards in a 3-up grid of equal white cards (193px tall) on the warm canvas
- Pricing plans in a 4-up column grid; the recommended plan is slightly larger (2px pink border + badge)
- Feature sections alternate text and product-screenshot illustration zones on tinted surfaces
- Full-width sitemap footer in four columns

### Whitespace Philosophy
- **Warm air, not empty space**: the off-white `#fbfaf9` canvas makes generous spacing feel cozy rather than stark.
- **Flat segmentation**: zones separate by surface tint (`#edf0f6` cool, `#ffe6e7` pink) and hairline rings — never by elevation.
- **One CTA per viewport**: each scroll position presents a single pink action; everything else stays ink-on-paper.

### Border Radius Scale
- Small (10px): nav ghost items
- Medium (12px): plan CTAs, compact buttons
- Large (16px): cards, hero CTA, announcement pill — the workhorse
- Full (9999px): billing toggle, badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav, text, buttons |
| Tint (Level 1) | `#edf0f6` / `#ffe6e7` background shift | Illustration zones, table stripes, announcement |
| Ring (Level 2) | 10%-ink hairline ring / `1px solid #e0e3e8` | Card outlines, dividers |
| Accent (Level 3) | `2px solid #fb355e` border | Featured plan card emphasis |

**Shadow Philosophy**: Firstory is a flat system. Live inspection found box-shadows declared only as fully transparent Tailwind ring placeholders — nothing visibly elevated on nav, hero, cards, or buttons. Hierarchy is communicated through the warm-canvas-versus-white-card value shift, tinted zones, hairline rings, and — for the single most important object on the pricing page — a 2px pink border. When the system wants attention, it reaches for the pink `#fb355e`, never for depth. This keeps the creator-facing product feeling light, fast, and contemporary.

## 7. Do's and Don'ts

### Do
- Use Poppins Bold (700) for every headline and plan price — it is the brand's display voice
- Use Open Sans 400/500 for body, nav, and button labels
- Reserve raspberry-pink (`#fb355e`) for actions, active states, and the featured plan only
- Set the page on warm off-white (`#fbfaf9`) with pure-white (`#ffffff`) cards
- Separate zones with surface tints (`#edf0f6`, `#ffe6e7`) and hairline rings, not shadows
- Use full-pill geometry for toggles and badges, 12–16px rounding for buttons and cards
- Track headlines tight (-1.8px at 72px) with 1.0 line-height
- Pair pink-tinted surfaces (`#ffe6e7`) with the deep berry text (`#962339`) for badges

### Don't
- Use drop shadows for elevation — the system is flat by design
- Introduce a second saturated accent — pink is the only action color
- Set headlines in Open Sans or body copy in Poppins — the two faces never swap roles
- Use pure black for text — ink is `#0d131c`
- Put pink text on pink tint — tinted surfaces take `#962339` deep berry text
- Use sharp corners on interactive elements — nothing renders below 10px radius
- Shout with multiple CTAs per viewport — one pink action at a time
- Use green (`#00c950`) for anything other than checkmark/success semantics

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses, nav collapses to menu |
| Tablet | 640-1024px | 2-up solution cards, stacked pricing plans |
| Desktop | 1024-1440px | Full layout, 3-up cards, 4-up pricing columns |

### Touch Targets
- Buttons at 36–40px height with generous horizontal padding
- FAQ accordion triggers at a comfortable 64px height
- Billing toggle segments at 36px with 20px horizontal padding

### Collapsing Strategy
- Hero: 72px Poppins headline scales down on mobile, weight 700 and tight tracking maintained
- Solution card grid: 3-up → 2-up → single column
- Pricing: 4 plan columns stack vertically; the featured plan keeps its 2px pink border and badge
- Footer: four columns stack into accordion-like groups

### Image Behavior
- Product screenshots sit inside tinted illustration zones with 16px rounding and no shadow
- Player and waveform illustrations reuse the pink family at reduced alpha
- Cards maintain 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / active: Firstory Pink (`#fb355e`)
- CTA text: Near-White (`#fafafa`)
- Page background: Warm Canvas (`#fbfaf9`)
- Card background: Pure White (`#ffffff`)
- Headline / body text: Ink (`#0d131c`)
- Secondary text: Muted Slate (`#4f5661`)
- Cool tint zone: `#edf0f6`
- Pink tint zone / badge bg: `#ffe6e7`
- Badge text on pink tint: Deep Berry (`#962339`)
- Toggle inactive: Beige (`#f6efe5`) with `#242a34` text
- Hairline: `#e0e3e8`
- Success check: `#00c950`

### Example Component Prompts
- "Create a hero on a warm off-white #fbfaf9 background. Headline at 72px Poppins weight 700, line-height 1.0, letter-spacing -1.8px, color #0d131c. Above it an announcement pill: #ffe6e7 background at 80% alpha, 1px solid #ffe6e7 border, 16px radius, 16px Open Sans #0d131c text. One CTA: #fb355e background, #fafafa text, 16px radius, 40px tall, 0 32px padding, 16px Open Sans weight 500."
- "Design a solution card: white #ffffff background, 16px radius, 32px padding, no shadow, subtle 10% ink hairline ring. Title 18px Poppins weight 600, #0d131c. Body 16px Open Sans weight 400, #4f5661."
- "Build a pricing section on #fbfaf9. Billing toggle: full-pill segmented control, inactive #f6efe5 with #242a34 text, active #fb355e with #fafafa text, 8px 20px padding; attach a 'Save 22%' pill (#ffe6e7 bg, #962339 text, 12px weight 600, 2px 8px padding). Plan cards: white, 16px radius; featured plan gets a 2px solid #fb355e border and a 'Recommend' pill (#fb355e bg, #fafafa text). Prices in 36px Poppins weight 700, #0d131c."
- "Create a top nav over #fbfaf9: ghost items at 14px Open Sans weight 500, #0d131c text, 10px radius, 8px 16px padding; pink #fb355e CTA right-aligned."

### Iteration Guide
1. Poppins 700 for every headline; Open Sans 400/500 for everything else
2. Pink `#fb355e` is the single action color — never spread it to decoration
3. No shadows — separate with the `#fbfaf9` vs `#ffffff` value shift, tints, and hairlines
4. Radius ladder: 10px nav, 12px compact buttons, 16px cards/CTAs, pill toggles/badges
5. Text is `#0d131c` ink and `#4f5661` muted — never pure black
6. Tight negative tracking and 1.0 line-height on display type
7. Pink tint `#ffe6e7` always pairs with `#962339` deep berry text
8. Featured emphasis = 2px pink border, not shadow or scale

---

## 10. Voice & Tone

Firstory's voice is **encouraging, practical, and creator-first** — a knowledgeable studio partner who treats podcasting as a real media business, not a hobby. The hero line "用 Podcast 開啟你的媒體事業" ("Start Your Media Business with Podcasting") sets the register: ambitious on the creator's behalf, concrete about the path. Copy stays plain and benefit-led; feature names are friendly and capability-shaped ("AI 工作室", "會員訂閱", "節目推廣"), and every CTA lowers the barrier ("免費開始", "免費試用 14 天").

| Context | Tone |
|---|---|
| Hero headlines | Ambitious for the creator, business-framed. "用 Podcast 開啟你的媒體事業." |
| Feature descriptions | Capability + benefit in one line. "在任何地方嵌入播放器." |
| CTAs | Low-barrier, friendly imperatives. "立即開始", "免費開始", "Get started today". |
| Onboarding steps | Reassuringly simple. "3 步輕鬆開始 — 註冊帳號, 上傳你的 Podcast, 發佈與成長." |
| Social proof | Concrete numbers, global framing. "受到全球創作者的信賴." |
| FAQ | Direct first-person questions answered plainly. "Firstory 要多少錢？" |

**Voice samples (verbatim from live site):**
- "用 Podcast 開啟你的媒體事業" — zh-TW hero headline (business-framed ambition). *(verified live 2026-06-10)*
- "Start Your Media Business with Podcasting" — EN hero headline. *(verified live 2026-06-10)*
- "準備好開始你的 Podcast 之旅了嗎？" — pre-footer CTA banner (journey framing). *(verified live 2026-06-10)*
- "從核心功能到強大的進階特色" — feature section heading. *(verified live 2026-06-10)*

**Forbidden register**: hype superlatives, technical audio-engineering jargon left unexplained, pressure tactics ("limited time!"), and talking down to beginners — the brand assumes every listener can become a media business.

## 11. Brand Narrative

Firstory was founded in Taipei in **2018** by three co-founders who started the company straight out of university — **于子軒 (Stanley Yu, CEO)**, **翁子皓 (CTO)**, and **劉德政 (COO)** (covered by INSIDE and Meet/Business Next startup media). The product began life as "Firstory Studio", a voice-based social app, before the team pivoted in 2019 into podcast hosting just as the Taiwanese podcast wave took off — a 180-degree turn that local tech media chronicled as one of Taiwan's defining creator-economy pivots. In October 2020 Firstory closed a seed round led by **KKBOX**, Taiwan's audio-streaming incumbent, aligning the scrappy hosting startup with the island's biggest sound platform.

The thesis stayed constant through the pivot: shorten the distance between making sound and being heard. Firstory built one-click distribution to every major podcast directory, then layered on the business stack — analytics, cross-promotion, the Flink smart-link, listener donations, member subscriptions, and an advertiser marketplace — and most recently AI tooling ("AI 工作室", AI content extraction) that turns episodes into shareable assets. The current homepage states the mission plainly: podcasting is a media business, and Firstory's job is to hand creators the whole toolkit, from hosting to monetization.

What Firstory refuses, visible in the design: enterprise-audio coldness, dashboard-grey utilitarianism, and gatekeeping complexity. What it embraces: a warm paper-like canvas, one optimistic pink, friendly geometric type, and copy that keeps telling an independent creator the same thing — you can start today, and it can become a business.

## 12. Principles

1. **Creator outcomes over platform features.** Every surface frames capability as creator benefit ("透過訂閱打造穩定收入"). *UI implication:* lead cards and sections with the benefit line; feature names stay short and human.
2. **Lower the barrier, always.** From "3 步輕鬆開始" to free-tier CTAs, the system removes friction. *UI implication:* primary actions are always visible, always one per viewport, and always phrased as free starts.
3. **One pink, one meaning.** `#fb355e` means "act" — CTA, active toggle, recommended plan. *UI implication:* never use the action pink decoratively; emphasis elsewhere uses tints and borders.
4. **Warm and flat.** The paper-toned canvas and shadowless cards keep the tool approachable. *UI implication:* separate with surface value shifts and hairlines; reach for color, not elevation.
5. **Bilingual by default.** zh-TW and EN are peer locales sharing one visual system. *UI implication:* type scale and components must hold up identically for CJK and Latin text.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Firstory user segments (independent Taiwanese podcasters, growing shows monetizing via subscriptions, advertisers), not individual people.*

**林佳穎, 27, 台北.** An office worker starting her first interview podcast on weekends. Picked Firstory because she could upload from her phone and be on Spotify and Apple Podcasts the same day. Reads the blog's beginner guides; the "免費開始" button is why she didn't postpone the first episode.

**陳威廷, 34, 台中.** Runs a finance commentary show with six-figure monthly plays. Uses member subscriptions and listener donations as core income, watches the analytics dashboard weekly, and upgraded to a paid plan for the advertiser marketplace. Wants the business tools without losing the indie feel.

**Sophie Chang, 41, 新加坡.** Marketing lead at a regional consumer brand buying podcast ads across Chinese-language shows. Enters through the "廣告主專區" surface; values transparent reach numbers and the curated network of creators in one place.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no episodes yet)** | Warm canvas (`#fbfaf9`), single Ink (`#0d131c`) line framing the start ("上傳你的 Podcast"), one pink CTA. Encouraging, not apologetic. *(illustrative, derived from system)* |
| **Empty (no analytics data)** | Muted Slate (`#4f5661`) explanation that data appears after the first published episode, with a link back to publishing. *(illustrative)* |
| **Loading (dashboard/list)** | Flat skeleton blocks in cool tint (`#edf0f6`) at final card dimensions, 16px radius — no shimmer shadows, consistent with the flat system. *(illustrative)* |
| **Loading (audio processing)** | Inline progress on the episode row; previous content stays visible. *(illustrative)* |
| **Error (upload failed)** | Inline message in Ink with plain-language cause and a retry action; never a bare error code. *(illustrative)* |
| **Error (form validation)** | Field-level message below the input; states what a valid value looks like. *(illustrative)* |
| **Success (episode published)** | Calm inline confirmation with the distribution status and a share link immediately below; check iconography in `#00c950`. *(illustrative)* |
| **Skeleton** | `#edf0f6` blocks, 16px radius, flat pulse. *(illustrative)* |
| **Disabled** | Reduced-opacity pink for primary actions (faded, not greyed) so the brand read survives; muted `#4f5661` labels elsewhere. *(illustrative)* |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, toggle press, nav item highlight |
| `motion-standard` | 200ms | Accordion expand, card reveal, dropdown |
| `motion-slow` | 300ms | Section transitions, hero entrance |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — accordions, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions (billing toggle) |

**Motion rules**: Motion stays quiet and functional, matching the flat aesthetic — the billing toggle slides its pink pill between segments at `motion-standard / ease-standard`; FAQ accordions expand without bounce; cards fade up subtly on scroll. No spring or overshoot — the product's promise is steadiness for creators' businesses. Under `prefers-reduced-motion: reduce`, transitions collapse to instant and scroll reveals render immediately. *(Motion tokens are illustrative, derived from the observed Tailwind/shadcn stack defaults and the system's flat character.)*

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-10) via playwright getComputedStyle on
https://firstory.me/en, https://firstory.me/en/pricing, and copy capture on
https://firstory.me/zh. Token-level claims (§1–9) are sourced from this live
inspection; raw samples in web/references/firstory/.verification.md.

Voice samples (§10) are verbatim from the live zh-TW and EN homepages
(hero H1, section H2, CTA banner H2).

Brand narrative (§11): Firstory founded 2018 in Taipei by 于子軒 (CEO),
翁子皓 (CTO), 劉德政 (COO); started as voice-social app "Firstory Studio",
pivoted to podcast hosting 2019; KKBOX-led seed round October 2020. These are
widely documented public facts covered by Taiwanese tech media (INSIDE
"從聲音交友 180 度變身大平台的創業物語", Meet/Business Next
"一畢業就創辦 Firstory", BusinessNext KKBOX investment coverage) — used here
for discovery; the brand's own surfaces (firstory.me, firstory.blog,
github.com/Firstory) are the cited Tier 1 sources for design claims.

Personas (§13) are fictional archetypes informed by publicly observable
Firstory user segments. Names are illustrative; they do not refer to real people.

States (§14) and motion tokens (§15) marked (illustrative) are derived from
the observed design system character, not measured app states.

Interpretive claims (e.g., "one pink, one meaning", "warm and flat as a
rejection of enterprise-audio coldness") are editorial readings connecting
Firstory's observed design to its positioning, not directly sourced statements.
-->
