---
id: scatterlab
name: Scatter Lab
display_name_kr: 스캐터랩
country: KR
category: ai
homepage: "https://www.scatterlab.co.kr/"
primary_color: "#212529"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=scatterlab.co.kr&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "Monochrome, typography-forward identity. Primary = near-black charcoal (#212529) carrying the homepage's dark filled action; the blog surface pushes to pure black (#000000). No saturated brand hue — restraint is the signal. Two type stacks: Pretendard (marketing site, styled-components) + IBM Plex Sans (blog, Tailwind zinc/gray)."
  colors:
    primary: "#212529"
    ink: "#000000"
    ink-alt: "#09090b"
    heading: "#222222"
    heading-blog: "#292929"
    body: "#242424"
    nav: "#212429"
    muted: "#71717a"
    muted-warm: "#8c8c8c"
    muted-deep: "#595959"
    tag-text: "#4b5563"
    faint: "#a1a1aa"
    canvas: "#ffffff"
    surface: "#f3f4f6"
    surface-alt: "#fafafa"
    band: "#ebebeb"
    chip: "#e5e7eb"
    hairline: "#e4e4e7"
  typography:
    family: { sans: "Pretendard", blog: "IBM Plex Sans", var: "Pretendard Variable" }
    display-hero:  { size: 52, weight: 700, use: "Homepage hero headline, Pretendard Bold" }
    section:       { size: 23, weight: 700, use: "Homepage section / feature headings" }
    headline-blog: { size: 44, weight: 600, lineHeight: 1.30, use: "Blog article H1, IBM Plex Sans SemiBold" }
    subhead-blog:  { size: 24, weight: 600, use: "Blog section H3" }
    body-blog:     { size: 19, weight: 400, use: "Blog article paragraph" }
    body:          { size: 16, weight: 400, lineHeight: 1.50, use: "Base body, nav, UI text" }
    caption:       { size: 14, weight: 400, use: "Category chips, meta labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32 }
  rounded: { sm: 4, md: 6, lg: 24, full: 9999 }
  shadow:
    none: "none"
    soft: "rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.06) 0px 8px 16px"
  components:
    button-primary:    { type: button, bg: "#000000", fg: "#ffffff", radius: "6px", height: "36px", padding: "8px 16px", font: "16px / 500 IBM Plex Sans", use: "Primary black CTA on blog (e.g. 채용공고)" }
    button-nav:        { type: button, bg: "#ffffff", fg: "#212429", radius: "4px", height: "32px", padding: "5.5px 12px", font: "16px / 400 Pretendard", use: "Header nav menu item (homepage)" }
    button-scroll-top: { type: button, bg: "#212529", fg: "#ffffff", radius: "24px", height: "48px", shadow: "rgba(0,0,0,0.04) 0px 1px 2px · rgba(0,0,0,0.06) 0px 8px 16px", use: "Floating circular scroll-to-top action" }
    category-chip:     { type: badge, bg: "#e5e7eb", fg: "#4b5563", radius: "6px", height: "26px", padding: "3px 12px", font: "14px / 400", use: "Blog post category chip — Product / Business" }
    card-white:        { type: card, bg: "#ffffff", border: "1px solid #e4e4e7", radius: "6px", use: "White content/list card, thin hairline, no shadow" }
    card-band:         { type: card, bg: "#f3f4f6", radius: "6px", use: "Tinted grey band segmenting sections" }
  components_harvested: true
---

# Design System Inspiration of Scatter Lab

## 1. Visual Theme & Atmosphere

Scatter Lab (스캐터랩) is the Korean AI company behind Zeta (제타), and its web presence reads less like a consumer product and more like a serious research house presenting its work. The identity is aggressively monochrome — pure white canvas (`#ffffff`), near-black text, and not a single saturated brand hue anywhere on either the marketing site or the engineering blog. That restraint is itself the statement: a company that builds AI people spend hours talking to chooses to describe itself in black-and-white, letting the typography and the numbers do the persuading.

The homepage (Pretendard, styled-components) is built around big declarative headlines — a 52px weight-700 hero ("zeta: 엔터테인먼트의 새로운 패러다임") over 23px weight-700 section heads, all set in a warm near-black (`#222222`) rather than pure black. Interactive chrome is deliberately quiet: ghost nav buttons on white with a tiny 4px radius, and a single dark charcoal (`#212529`) circular scroll-to-top button that is the only filled action in the default viewport. The engineering blog (IBM Plex Sans + Pretendard Variable, Tailwind zinc/gray) shifts register slightly toward editorial long-form: a 44px weight-600 article H1 (`#292929`), 19px reading paragraphs (`#242424`), grey category chips, and a single pure-black (`#000000`) CTA. Two surfaces, two type stacks, one shared conviction — that seriousness looks like restraint.

What distinguishes Scatter Lab is its near-total rejection of decoration. Depth is essentially flat: box-shadow is `none` across headers, headings, cards, and chips, and the only measured shadow is a two-layer soft lift (`rgba(0,0,0,0.04) 0px 1px 2px`) on the floating scroll-top button. Separation comes from tinted grey surfaces (`#f3f4f6`, `#fafafa`, `#ebebeb`) and hairline borders (`#e4e4e7`), never from elevation. The neutral ladder is deep and carefully graded — from `#09090b` and `#242424` for text down through `#595959`, `#71717a`, `#8c8c8c`, and `#a1a1aa` for progressively quieter meta — giving the pages a precise, editorial greyscale that feels engineered rather than styled.

**Key Characteristics:**
- Monochrome by conviction — no saturated brand hue on either surface; black, near-black, greys, white only
- Near-black charcoal (`#212529`) as the homepage's single filled-action color; pure black (`#000000`) as the blog CTA
- Warm near-black headings (`#222222` homepage, `#292929`/`#09090b` blog) instead of pure black for body-scale reading text
- Two type stacks by surface: Pretendard weight-700 display on the marketing site, IBM Plex Sans weight-600 on the blog
- Flat depth — `box-shadow: none` almost everywhere; separation via `#f3f4f6` tint and `#e4e4e7` hairlines
- Tiny, conservative radii — 4px nav buttons, 6px blog buttons/chips/cards, 24px only on the circular scroll-top
- A long, precisely graded neutral ladder (`#242424` → `#595959` → `#71717a` → `#8c8c8c` → `#a1a1aa`) for text hierarchy
- Metric-forward, editorial copy ("하루 2시간 40분", "매월 80만 명") — numbers as persuasion, not superlatives

## 2. Color Palette & Roles

### Primary / Action
- **Charcoal** (`#212529`): The homepage's single filled-action color — the circular scroll-to-top button and dark chrome. The system's `primary_color`, a near-black with a faint cool undertone.
- **Pure Black** (`#000000`): The blog's primary CTA fill (e.g. the "채용공고" recruitment button) and maximum-contrast accents.
- **Nav Charcoal** (`#212429`): Text color of the homepage's ghost nav menu buttons — a hair warmer than the primary charcoal.

### Ink / Text
- **Ink** (`#09090b`): Blog body and heading ink (Tailwind zinc-950) — the darkest reading color, near-black with a cool cast.
- **Heading (Home)** (`#222222`): Homepage headline color — a warm near-black used for the 52px/23px weight-700 heads.
- **Heading (Blog)** (`#292929`): Blog article H1 color at 44px weight-600.
- **Body** (`#242424`): Blog reading paragraph color at 19px.
- **Muted** (`#71717a`): Blog secondary/meta text (zinc-500).
- **Muted Warm** (`#8c8c8c`): Homepage muted labels and captions.
- **Muted Deep** (`#595959`): Alternate mid-grey for secondary blog text.
- **Tag Text** (`#4b5563`): Category chip label color (gray-600).
- **Faint** (`#a1a1aa`): Lowest-emphasis labels, timestamps, disabled text (zinc-400).

### Surface / Neutral
- **Canvas** (`#ffffff`): Page background, card surfaces, text on dark actions.
- **Surface** (`#f3f4f6`): Cool-grey tinted band for section separation (blog gray-100).
- **Surface Alt** (`#fafafa`): Lightest homepage grey for subtle alternating blocks.
- **Band** (`#ebebeb`): Homepage grey band / divider surface.
- **Chip** (`#e5e7eb`): Category-chip background (gray-200).
- **Hairline** (`#e4e4e7`): Thin card outlines and dividers (zinc-200) — the primary separation device in a shadow-free system.

## 3. Typography Rules

### Font Family
- **Marketing site**: `Pretendard` (with `-apple-system`, `Apple SD Gothic Neo`, `Noto Sans KR` fallbacks) — the de-facto Korean product font. Display headlines run at weight 700.
- **Blog**: `IBM Plex Sans` with `Pretendard Variable` / `Pretendard` companions — an editorial, engineering-flavored stack for long-form article reading. Headlines run at weight 600.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Pretendard | 52px (3.25rem) | 700 | ~1.35 | Homepage hero headline |
| Section Head | Pretendard | 23px (1.44rem) | 700 | ~1.35 | Homepage feature/section titles |
| Blog H1 | IBM Plex Sans | 44px (2.75rem) | 600 | 1.30 | Article headline |
| Blog H3 | IBM Plex Sans | 24px (1.50rem) | 600 | 1.50 | Article section heads |
| Blog Body | IBM Plex Sans | 19px (1.19rem) | 400 | ~1.70 | Article reading paragraph |
| Base / Nav | Pretendard | 16px (1.00rem) | 400 | 1.50 | Nav items, base UI text |
| Caption / Tag | IBM Plex Sans | 14px (0.88rem) | 400 | 1.50 | Category chips, meta labels |

### Principles
- **Weight, not color, is the hierarchy signal.** With the palette locked to greyscale, emphasis is carried entirely by size and weight (700 display / 600 blog heads / 400 body) plus the deep-to-faint neutral ladder.
- **Two stacks, two jobs.** Pretendard owns the persuasive marketing surface; IBM Plex Sans owns the editorial blog. They never swap roles across a surface.
- **Near-black, never pure black, for reading text.** Body and headings sit at `#222222` / `#242424` / `#09090b` — warm near-blacks that soften the greyscale without introducing hue.
- **Generous body sizing for long-form.** The blog reads at a deliberate 19px — larger than typical UI body — signaling that the writing is the product.

## 4. Component Stylings

### Buttons

**Primary (Black CTA)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 6px
- Padding: 8px 16px
- Height: 36px
- Font: 16px / 500 / IBM Plex Sans
- Use: Primary call-to-action on the blog surface (e.g. "채용공고")

**Nav Menu Item (Ghost)**
- Background: `#ffffff`
- Text: `#212429`
- Radius: 4px
- Padding: 5.5px 12px
- Height: 32px
- Font: 16px / 400 / Pretendard
- Use: Homepage header navigation items (제타 소개, 문화, 블로그, 채용, AI 윤리)

**Scroll-to-Top (Dark Circle)**
- Background: `#212529`
- Text: `#ffffff`
- Radius: 24px
- Height: 48px
- Shadow: `rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.06) 0px 8px 16px`
- Use: Floating circular scroll-to-top button — the only shadowed element measured

### Cards & Containers

**White Content Card**
- Background: `#ffffff`
- Border: 1px solid `#e4e4e7`
- Radius: 6px
- Use: White article/list card outlined by a thin hairline (no shadow)

**Tinted Section Band**
- Background: `#f3f4f6`
- Radius: 6px
- Use: Cool-grey band that segments content sections without elevation

### Badges / Tags

**Category Chip**
- Background: `#e5e7eb`
- Text: `#4b5563`
- Radius: 6px
- Padding: 3px 12px
- Height: 26px
- Font: 14px / 400
- Use: Blog post category chips ("Product", "Business")

### Navigation
- Background: `#ffffff`
- Text: `#212429`
- Font: 16px / 400 / Pretendard
- Height: 32px per item
- Use: Top horizontal nav (제타 소개, 문화, 블로그, 채용, AI 윤리, English, 日本語)

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.scatterlab.co.kr/ ; https://blog.scatterlab.co.kr/zeta-intro-2506
**Tier 2 sources:** getdesign.md/scatterlab — "0 DESIGN.md files" (not listed); styles.refero.design/?q=scatterlab — no Scatter Lab entry (generic browse results only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px
- Notable: Button padding lands tight (8px 16px on the blog CTA, 5.5px 12px on ghost nav items); chips at 3px 12px — compact, editorial density rather than roomy consumer padding

### Grid & Container
- Homepage: centered single-column with the 52px Pretendard hero as anchor, then stacked feature/section blocks
- Blog: a narrow, editorial single-column measure (long-form reading width) with the 44px H1, category chips above, and generous vertical rhythm between paragraphs
- Sections separate by grey tint (`#f3f4f6`, `#fafafa`, `#ebebeb`) full-width bands rather than boxed cards

### Whitespace Philosophy
- **Editorial breathing room**: despite being content-dense, both surfaces are airy, with large vertical gaps between sections and paragraphs.
- **Flat segmentation**: sections separate by background tint and `#e4e4e7` hairlines, never by shadow or heavy borders.
- **Numbers get room**: metric statements ("하루 2시간 40분", "매월 80만 명") are given their own headline-scale lines rather than buried in prose.

### Border Radius Scale
- Small (4px): homepage ghost nav buttons — barely rounded
- Standard (6px): blog buttons, category chips, content cards — the workhorse
- Circle (24px): the floating scroll-to-top button (only fully-round element)
- Full (9999px): reserved; not used on the marketing/blog surfaces

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | `box-shadow: none` | Page background, headings, nav, cards, chips — nearly everything |
| Tint (Level 1) | `#f3f4f6` / `#fafafa` / `#ebebeb` background shift | Section/band separation without elevation |
| Hairline (Level 2) | `1px solid #e4e4e7` border | White card outlines, dividers |
| Soft Lift (Level 3) | `rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.06) 0px 8px 16px` | The single floating scroll-to-top button |

**Shadow Philosophy**: Scatter Lab is a near-shadowless system. Live inspection found `box-shadow: none` across the homepage hero, nav, headings, and the blog's cards and chips. Depth and grouping are communicated through flat tinted surfaces (`#f3f4f6`) and thin `#e4e4e7` hairlines. The only measured elevation is a soft two-layer lift on the floating scroll-to-top control — an affordance, not decoration. When emphasis is needed, the system reaches for weight, size, and the dark action fills (`#212529` / `#000000`), never for a drop shadow.

## 7. Do's and Don'ts

### Do
- Keep the palette monochrome — black, near-black, greys, and white; let type and layout carry the design
- Use near-black (`#222222`, `#242424`, `#09090b`) for reading text instead of pure black
- Reserve the dark fills (`#212529` charcoal on the homepage, `#000000` on the blog) for the single primary action
- Carry hierarchy with weight and size (700 display / 600 blog heads / 400 body), not color
- Separate sections with grey tint (`#f3f4f6`, `#fafafa`, `#ebebeb`) and `#e4e4e7` hairlines
- Keep depth flat — `box-shadow: none` by default; only the floating control lifts
- Keep radii tiny (4px nav, 6px blog components); reserve the 24px round only for the circular scroll-top
- Set marketing headlines in Pretendard weight 700 and blog headlines in IBM Plex Sans weight 600
- Give metrics headline-scale room ("하루 2시간 40분") — numbers persuade

### Don't
- Introduce a saturated brand hue — the monochrome restraint is the identity
- Use pure black (`#000000`) for large bodies of reading text — near-blacks are warmer
- Spread the dark action fill across many elements — it dilutes the single-action signal
- Add drop shadows for elevation — this is a flat, tint-and-hairline system
- Use large or pill radii on buttons and cards — geometry stays conservative (4–6px)
- Mix the two type stacks within a single surface — Pretendard for marketing, IBM Plex Sans for blog
- Lean on exclamation-heavy hype — copy is measured, metric-backed, and editorial
- Use color to signal hierarchy — weight and size do that job

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; hero headline compresses; nav collapses to a toggle |
| Tablet | 640-1024px | Moderate padding; blog measure stays narrow for readability |
| Desktop | 1024-1440px | Full layout; centered hero; full-width tinted section bands |

### Touch Targets
- Blog primary CTA at 36px height with 8px 16px padding — comfortably tappable
- Homepage ghost nav items at 32px height
- Floating scroll-to-top at 48px circular — an unmistakable target

### Collapsing Strategy
- Homepage hero: 52px Pretendard headline scales down on mobile, weight 700 maintained
- Blog: 44px H1 compresses; the single-column reading measure holds
- Feature/section bands: multi-block → stacked single column
- Tinted/white alternating sections maintain full-width treatment

### Image Behavior
- Product/feature imagery carries no shadow at any size, consistent with the flat system
- Cards keep their 6px radius and `#e4e4e7` hairline across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action (home): Charcoal (`#212529`)
- Primary action (blog): Pure Black (`#000000`)
- Nav text: Nav Charcoal (`#212429`)
- Heading (home / blog): `#222222` / `#292929`
- Blog ink / body: `#09090b` / `#242424`
- Muted text: `#71717a`, `#8c8c8c`, `#595959`
- Faint / disabled: `#a1a1aa`
- Tag text: `#4b5563`
- Background: White (`#ffffff`)
- Tinted surfaces: `#f3f4f6`, `#fafafa`, `#ebebeb`
- Chip: `#e5e7eb`
- Hairline: `#e4e4e7`

### Example Component Prompts
- "Create a homepage hero on white. Headline at 52px Pretendard weight 700, color #222222. Below it a section head at 23px weight 700. Ghost nav buttons on white: #212429 text, 4px radius, 5.5px 12px padding, 16px Pretendard. One floating circular scroll-to-top: #212529 background, white icon, 24px radius, 48px, soft two-layer shadow."
- "Design a blog article header: IBM Plex Sans H1 at 44px weight 600, color #292929, line-height 1.3. Category chips above: #e5e7eb background, #4b5563 text, 6px radius, 3px 12px padding, 14px. Body paragraphs at 19px weight 400, #242424. One black CTA: #000000 background, white text, 6px radius, 8px 16px padding."
- "Build a white content card: #ffffff background, 1px solid #e4e4e7 border, 6px radius, no shadow. Place it on a #f3f4f6 tinted band. Title 24px IBM Plex Sans weight 600, #09090b; meta text 14px #71717a."
- "Create top nav: white header. Pretendard 16px weight 400 ghost items, #212429 text, 4px radius on hover. Items: 제타 소개, 문화, 블로그, 채용, AI 윤리, plus English / 日本語 language links."

### Iteration Guide
1. Stay monochrome — never add a saturated accent; hierarchy comes from weight and size
2. Dark fills (`#212529` home, `#000000` blog) are the single action color — don't spread them
3. No shadows by default — separate with `#f3f4f6` tint and `#e4e4e7` hairlines; only the scroll-top lifts
4. Radii stay tiny — 4px nav, 6px blog components, 24px only on the circle
5. Reading text is near-black (`#222222` / `#242424` / `#09090b`), never pure black
6. Pretendard weight 700 for marketing headlines; IBM Plex Sans weight 600 for blog headlines
7. Give numbers headline-scale room — Scatter Lab persuades with metrics

---

## 10. Voice & Tone

Scatter Lab's voice is **earnest, research-grounded, and metric-backed** — a company that talks about a playful entertainment product ("보는 엔터테인먼트를 넘어 함께하는 엔터테인먼트로") in the measured register of a lab reporting results. Copy leans on concrete numbers rather than adjectives: the hero and blog foreground usage metrics ("하루 2시간 40분", "매월 80만 명이 넘는 사용자") as the argument itself. The nav's dedicated "AI 윤리" (AI ethics) item signals a company that treats responsibility as a first-class topic, not a footnote. The tone is confident but never hype-driven — it reads as a serious team explaining a new paradigm, not a startup shouting about one.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, paradigm-framed. "zeta: 엔터테인먼트의 새로운 패러다임." Confident, not superlative. |
| Metric statements | Concrete and numeric. "일주일에 12시간을 사용하는 AI 엔터테인먼트 서비스." Numbers carry the claim. |
| Blog / editorial | Explanatory, long-form, first-person where it earns trust. Explains the "why" before the "what". |
| Culture / careers | Warm and candid. "스캐터랩 에토스: 우리가 일하는 방식", "티타임 신청하기." Invites, doesn't pitch. |
| AI ethics | Plain, responsible, unhedged. Treated as a named part of the brand, not a disclaimer. |

**Voice samples (verbatim from live surfaces):**
- "zeta: 엔터테인먼트의 새로운 패러다임" — homepage hero headline (paradigm framing). *(verified live 2026-07-02)*
- "일주일에 12시간을 사용하는 AI 엔터테인먼트 서비스" — homepage subhead (metric as proof). *(verified live 2026-07-02)*
- "제타의 특별함은 '사용 시간'으로 드러납니다." — blog article (metric-first argument). *(verified live 2026-07-02)*
- "스캐터랩 에토스: 우리가 일하는 방식" — homepage culture section (candid, inviting). *(verified live 2026-07-02)*

**Forbidden register**: exclamation-heavy hype, superlative stacking, vague "revolutionary/game-changing" claims, and — given the company's history — any register that treats AI ethics or user trust as marketing garnish rather than substance.

## 11. Brand Narrative

Scatter Lab (스캐터랩) was founded in **2011** by **김종윤 (Kim Jong-yoon, CEO)** and co-founders, beginning with relationship-analytics services (텍스트앳, then 연애의 과학 / "Science of Love") that mined conversational data to help people understand their relationships. That early work — building machines that read the texture of human conversation — set the company's north star: AI that people form genuine relationships with, not merely query. *(Founding year and founder are widely documented public facts; the framing here is an editorial reading of the company's stated direction.)*

The company's defining chapter was **Luda (이루다)**, a Korean conversational AI released in 2020 that drew enormous engagement — and then a serious 2021 controversy over privacy and offensive outputs that led to Luda 1.0 being taken down. Scatter Lab's response reshaped the brand: a public, sustained investment in **AI ethics** (now a standing "AI 윤리" section of the site), a relaunched, safer Luda, and eventually **Zeta (제타)**, an AI-character entertainment platform launched **April 1, 2024** that the company frames as "a new entertainment paradigm" — moving from *watching* content to *co-creating* it with AI characters.

What Scatter Lab refuses, visible in its design: the loud, saturated, consumer-hype aesthetic that a viral AI-companion app might reach for. What it embraces instead: a monochrome, typography-forward presentation; metric-backed, editorial copy; and an explicit, front-of-house treatment of ethics. The restraint is not timidity — it is a company that has been through a public reckoning choosing to look like it takes itself, and its responsibilities, seriously.

## 12. Principles

1. **Restraint signals seriousness.** A monochrome palette on an entertainment product is a deliberate choice. *UI implication:* keep the palette greyscale; never introduce a saturated accent to chase attention.
2. **Metrics over adjectives.** The product's value is argued with numbers ("하루 2시간 40분"), not superlatives. *UI implication:* give metrics headline-scale typographic room; treat data as a first-class content type.
3. **Ethics is front-of-house.** After the Luda reckoning, AI ethics became a named part of the brand. *UI implication:* surface responsibility and transparency as primary navigation, never as a buried disclaimer.
4. **One action, one dark fill.** Emphasis is scarce and intentional. *UI implication:* reserve the dark fill (`#212529` / `#000000`) for the single primary action so the next step is unambiguous.
5. **Flat and editorial.** Depth is nearly absent; the writing is the product. *UI implication:* no shadows; separate with tint and hairlines; size body text generously for long-form reading.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Scatter Lab / Zeta user and stakeholder segments (Korean AI-entertainment users, AI engineers, ethics-conscious observers), not individual people.*

**이서연, 22, 서울.** A university student and heavy Zeta user who plays out story scenarios with AI characters daily. Values that the experience feels co-created rather than consumed, and that the brand talks about safety openly rather than hiding it.

**김도현, 34, 판교.** An ML engineer evaluating Scatter Lab's careers page. Reads the engineering blog for the substance — model and product reasoning — and reads the "AI 윤리" section as a signal of whether the team is serious about responsible deployment.

**박지은, 41, 서울.** A policy-minded observer who followed the Luda controversy and now checks how Korean AI companies handle ethics. Trusts Scatter Lab more for putting ethics in the nav and speaking about it plainly, in the same restrained tone as the rest of the site.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no content / results)** | White canvas. Single near-black (`#242424`) line explaining the empty state, with one dark CTA to take the next step. No illustration clutter. |
| **Empty (saved / history, none yet)** | Muted (`#71717a`) single line: nothing here yet, plus a calm path forward. Honest, low-key. |
| **Loading (content fetch)** | Skeleton blocks on `#f3f4f6` tinted surface at final dimensions, 6px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Previous content stays visible; a subtle progress indicator rather than a blocking spinner. |
| **Error (request failed)** | Inline message in near-black with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation in a calm, non-celebratory tone; next-step detail linked immediately below. |
| **Skeleton** | `#f3f4f6` blocks at final dimensions, 6px radius, flat pulse, `#e4e4e7` hairlines preserved. |
| **Disabled** | Faint (`#a1a1aa`) text on reduced-opacity surface; dark actions fade rather than switch hue, preserving the monochrome read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, button press |
| `motion-standard` | 200ms | Card/section reveal, dropdown, scroll-top appear |
| `motion-slow` | 320ms | Page-level transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, floating scroll-top |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, editorial aesthetic. The floating scroll-to-top button fades/rises in at `motion-standard / ease-enter` once the user scrolls; hover states are subtle opacity/weight shifts. No bounce, no spring — a company presenting AI research and ethics signals steadiness, not playful delight. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle:
- https://www.scatterlab.co.kr/ — hero H1 "zeta: 엔터테인먼트의 새로운 패러다임" Pretendard 52px/700 rgb(34,34,34) #222222; section H3 23px/700; ghost nav buttons white bg / rgb(33,36,41) #212429 text / 4px radius / 5.5px 12px padding / 32px; scroll-top button rgb(33,37,41) #212529 / white / 24px radius / 48px / two-layer soft shadow; grey surfaces #ebebeb #fafafa; muted #8c8c8c #767676; box-shadow none across chrome.
- https://blog.scatterlab.co.kr/zeta-intro-2506 — IBM Plex Sans + Pretendard Variable; body rgb(9,9,11) #09090b / 16px; H1 44px/600 rgb(41,41,41) #292929 leading 1.3; H3 24px/600 #09090b; paragraph 19px/400 rgb(36,36,36) #242424; primary CTA "채용공고" rgb(0,0,0) #000000 / white / 6px radius / 8px 16px / 36px / weight 500; category chips bg rgba(229,231,235,0.6) (gray-200) #e5e7eb / rgb(75,85,99) #4b5563 / 6px radius / 3px 12px; muted #71717a #595959 #a1a1aa; hairline rgb(228,228,231) #e4e4e7; surfaces #f3f4f6 #f6f6f6.

Token-level claims (§1–9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage (hero H1, subhead H3, culture section H3) and the live Zeta-intro blog post.

Brand narrative (§11): Scatter Lab (스캐터랩) founded 2011 by CEO 김종윤 (Kim Jong-yoon); early products 텍스트앳 / 연애의 과학; Luda (이루다) conversational AI (2020) and its 2021 privacy/ethics controversy; Zeta (제타) AI-character entertainment platform launched 2024-04-01 (date stated verbatim on the blog: "2024년 4월 1일 세상에 첫선을 보인 제타"). Founding year/founder and the Luda controversy are widely documented public facts; the editorial framing connecting them to the design is interpretation, not a directly quoted Scatter Lab statement.

Personas (§13) are fictional archetypes informed by publicly observable Scatter Lab / Zeta user and stakeholder segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "restraint signals seriousness", "ethics front-of-house as a response to the Luda reckoning") are editorial readings connecting Scatter Lab's observed design and history to its positioning, not directly sourced Scatter Lab statements.

Tier 2: getdesign.md/scatterlab returned "scatterlab — 0 DESIGN.md files / No designs found"; styles.refero.design/?q=scatterlab returned only generic browse results (no Scatter Lab entry). KR brand — Tier 1 (two brand-owned surfaces) carries the proof per spec/regional-sources.yaml.
-->
