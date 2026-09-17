---
id: wrtn
name: Wrtn
display_name_kr: 뤼튼
country: KR
category: ai
homepage: "https://wrtn.ai"
primary_color: "#f54211"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=wrtn.ai&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = brand 'Inspire Red' (#f54211, rgb(245,66,17)) — the interaction-accent color from the BX system; product chrome is near-monochrome on near-black ink (#262626). Corporate surface (wrtn.io) uses a warmer editorial ink (#333333 / #1a1a1a). 'Open Space' pastel tints (blue #dcf5ff, pink #fee2ec, peach #fff5ec) color-code the product menus."
  colors:
    primary: "#f54211"
    ink: "#262626"
    ink-corp: "#333333"
    ink-dark: "#1a1a1a"
    chip-border-dark: "#171717"
    muted: "#656565"
    muted-soft: "#8a8a8a"
    faint: "#c5c5c5"
    canvas: "#ffffff"
    surface: "#f7f7f7"
    surface-alt: "#f1f1f1"
    hairline: "#d3d3d3"
    open-blue: "#dcf5ff"
    open-pink: "#fee2ec"
    open-peach: "#fff5ec"
    on-primary: "#ffffff"
  typography:
    family: { body: "Pretendard", display: "Manrope", mono: "IBMPlexMono" }
    display-num:  { size: 160, weight: 700, use: "Oversized section numerals/labels on corporate site, Manrope" }
    section:      { size: 38, weight: 600, lineHeight: 1.34, use: "Corporate section titles ('주요 소식'), Pretendard" }
    headline:     { size: 34, weight: 700, lineHeight: 1.41, use: "Service / product names, Pretendard" }
    card-title:   { size: 20, weight: 600, lineHeight: 1.40, use: "News card headlines, Pretendard" }
    body:         { size: 16, weight: 400, lineHeight: 1.60, use: "Standard reading text, Pretendard" }
    nav:          { size: 16, weight: 500, lineHeight: 1.50, use: "Top nav items, Pretendard" }
    button:       { size: 16, weight: 600, lineHeight: 1.50, use: "Corporate CTA label, Pretendard" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 50, section: 64 }
  rounded: { sm: 8, md: 20, lg: 24, pill: 36, full: 9999 }
  shadow:
    soft: "rgba(0,0,0,0.1) 0px 0px 15px 0px"
    none: "none"
  components:
    button-login: { type: button, bg: "#262626", fg: "#ffffff", radius: "36px", padding: "0px 20px", height: "36px", font: "16px / 400 Pretendard", border: "1px solid #262626", use: "Header login pill — solid dark primary action" }
    button-signup: { type: button, bg: "#ffffff", fg: "#262626", radius: "36px", padding: "0px 20px", height: "36px", border: "1px solid #d3d3d3", font: "16px / 400 Pretendard", use: "Header '무료로 회원가입' — outlined secondary pill" }
    button-cta-corp: { type: button, bg: "#ffffff", fg: "#333333", radius: "40px", padding: "16px 50px", height: "56px", font: "16px / 600 Pretendard", use: "Corporate '채용공고 보러가기' CTA over dark hero" }
    chip-role: { type: badge, bg: "#ffffff", fg: "#262626", radius: "999px", padding: "4px 6px 4px 8px", height: "32px", border: "1px solid #f1f1f1", font: "16px / 400 Pretendard", use: "Product '역할' selector pill in composer" }
    chip-tool: { type: badge, bg: "#ffffff", fg: "#262626", radius: "300px", height: "34px", border: "1px solid #171717", font: "16px / 400 Pretendard", use: "Tool / suggestion pill on home composer" }
    accent-dot: { type: badge, bg: "#f54211", fg: "#ffffff", radius: "12px", padding: "3px", use: "Inspire Red accent badge/notification dot on interaction" }
    composer-card: { type: card, bg: "#ffffff", radius: "20px", padding: "12px 16px", border: "1px solid #d3d3d3", shadow: "rgba(0,0,0,0.1) 0px 0px 15px 0px", use: "Home chat composer ('무엇이든 물어보세요')" }
    news-card: { type: card, bg: "#f7f7f7", fg: "#333333", radius: "24px", padding: "20px 24px 24px", use: "Corporate news / press card" }
    input-chat: { type: input, bg: "#ffffff", fg: "#262626", font: "16px Pretendard", use: "Composer textarea, transparent inside composer-card, placeholder '무엇이든 물어보세요'" }
  components_harvested: true
---

# Design System Inspiration of Wrtn

## 1. Visual Theme & Atmosphere

Wrtn (뤼튼) is Korea's most-used consumer AI super app — "500만명이 선택한 대한민국 대표 AI 서비스" (the AI service chosen by 5 million people) — and its design reads as a calm, near-monochrome canvas punctuated by a single hot accent. The product surface at `wrtn.ai` opens on pure white (`#ffffff`) with a warm soft-grey surface ladder (`#f7f7f7` → `#f1f1f1`) and near-black ink text (`#262626`, never pure black). Against this restrained ground, Wrtn's brand "Inspire Red" (`#f54211`) — a vivid orange-red — appears only at moments of interaction: an accent dot, a highlight, a notification. This is the visual translation of Wrtn's stated BX philosophy, the "Inspiration Economy": the interface stays quiet so that the spark of inspiration (the red, the circle motif) reads as the one thing that matters.

The typographic personality is Korean-product-standard with an editorial twist. Body and UI run in **Pretendard** at 16px — the de-facto hangul product font — at a relaxed 1.6 line-height that gives the dense AI-chat surface room to breathe. The corporate site (`wrtn.io`, 뤼튼테크놀로지스) layers a second voice on top: heavy **Pretendard 600–700** section titles (38px "주요 소식", 34px service names) and oversized **Manrope 700** display numerals running up to 160px ("ConsumerServices") that turn the company narrative into a confident editorial spread. Display goes big and bold; functional UI stays small and quiet.

What distinguishes Wrtn is its geometry and its "Open Space" color-coding. Interactive chrome leans hard into the pill — login and signup are 36px-radius pills, tool/role chips run at 300–999px full-round, corporate CTAs at 40px. Cards are generously rounded: the home composer at 20px with a soft ambient glow (`rgba(0,0,0,0.1) 0px 0px 15px`), corporate news cards at 24px and flat. And each product menu carries its own pastel "Open Space" tint — open-blue (`#dcf5ff`), open-pink (`#fee2ec`), open-peach (`#fff5ec`) — derived from the circle-in-space brand motif, so navigation itself is color-coded by mood rather than by a single dominant hue.

**Key Characteristics:**
- Near-monochrome product chrome — near-black ink (`#262626`) on white (`#ffffff`), warm grey surfaces (`#f7f7f7`/`#f1f1f1`)
- Single hot accent "Inspire Red" (`#f54211`) reserved for interaction moments (dots, highlights) — the "spark"
- Pretendard 16px at 1.6 line-height for body/UI; bold Pretendard 600–700 + Manrope 700 for display
- Oversized Manrope display numerals (up to 160px) on the corporate editorial surface
- Pill-everything geometry — 36px header pills, 300–999px tool/role chips, 40px corporate CTA
- "Open Space" pastel color-coding — open-blue (`#dcf5ff`), open-pink (`#fee2ec`), open-peach (`#fff5ec`) per menu
- Soft single-glow card shadow (`rgba(0,0,0,0.1) 0px 0px 15px`) on the composer; flat elsewhere
- Rounded cards — 20px composer, 24px news cards

## 2. Color Palette & Roles

### Primary
- **Inspire Red** (`#f54211`): The brand's signature color and primary accent, `rgb(245, 66, 17)`. A vivid orange-red reserved for interaction moments — accent dots, highlights, the circle motif on hover. It is the "spark" of the Inspiration Economy, not a flood color.
- **Ink** (`#262626`): Primary product text and the solid login button, `rgb(38, 38, 38)`. A near-black that carries warmth without the harshness of pure black.
- **Pure White** (`#ffffff`): Page background, card surfaces, text on dark/red.

### Corporate Ink
- **Corporate Ink** (`#333333`): Body and heading text on the corporate site (`wrtn.io`), `rgb(51, 51, 51)` — a slightly warmer, more editorial grey-black.
- **Dark Ink** (`#1a1a1a`): Maximum-contrast service names on the corporate site, `rgb(26, 26, 26)`.
- **Chip Border Dark** (`#171717`): The near-black 1px outline on home tool chips, `rgb(23, 23, 23)`.

### Open Space Tints
- **Open Blue** (`#dcf5ff`): Pastel menu-coding tint, `rgb(220, 245, 255)` — applied per main menu from the circle-in-space motif.
- **Open Pink** (`#fee2ec`): Pastel menu-coding tint, `rgb(254, 226, 236)`.
- **Open Peach** (`#fff5ec`): Pastel menu-coding tint, `rgb(255, 245, 236)`.

### Neutral & Surface
- **Surface Grey** (`#f7f7f7`): Cool-warm grey surface for cards and segmented sections, `rgb(247, 247, 247)`.
- **Surface Alt** (`#f1f1f1`): Secondary grey for chip backgrounds and dividers, `rgb(241, 241, 241)`.
- **Hairline** (`#d3d3d3`): Thin borders and outlined-pill strokes, `rgb(211, 211, 211)`.

### Text Hierarchy
- **Ink** (`#262626`): Primary text, headings, strong labels.
- **Muted** (`#656565`): Secondary text and metadata, `rgb(101, 101, 101)`.
- **Muted Soft** (`#8a8a8a`): Tertiary text, `rgb(138, 138, 138)`.
- **Faint** (`#c5c5c5`): Disabled text, placeholder, lowest-emphasis labels, `rgb(197, 197, 197)`.

## 3. Typography Rules

### Font Family
- **Body / UI**: `Pretendard` (with `Apple SD Gothic Neo` fallback) — the document default for all product body and UI text at weight 400–500.
- **Display (corporate)**: `Manrope` — used for oversized editorial display numerals/labels (e.g. 160px "ConsumerServices") on `wrtn.io`.
- **Mono**: `IBMPlexMono` — appears in the body font stack for code/technical fragments.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Numeral | Manrope | 160px | 700 | tight | Oversized section labels (corporate) |
| Section Heading | Pretendard | 38px | 600 | 1.34 (51px) | Corporate section titles ("주요 소식") |
| Headline | Pretendard | 34px | 700 | 1.41 (48px) | Service / product names |
| Card Title | Pretendard | 20px | 600 | 1.40 | News card headlines |
| Nav Link | Pretendard | 16px | 500 | 1.50 | Top navigation items |
| Button | Pretendard | 16px | 600 | 1.50 | Corporate CTA label |
| Body | Pretendard | 16px | 400 | 1.60 (25.6px) | Standard reading text |

### Principles
- **Quiet body, bold display**: Pretendard 400 carries every paragraph at a roomy 1.6 line-height; weight jumps to 600–700 only for headlines. The weight contrast is the primary hierarchy signal.
- **Manrope for scale moments**: When the corporate narrative wants drama it switches to Manrope at extreme sizes (160px) — display typography as editorial statement, not as body.
- **Relaxed hangul leading**: Body sits at 16px / 1.6 — generous for hangul legibility on an information-dense AI surface.
- **Two surfaces, two inks**: product text is `#262626`, corporate text is the warmer `#333333` — a deliberate tonal split between the app and the company story.

## 4. Component Stylings

### Buttons

**Login (Primary, dark pill)**
- Background: `#262626`
- Text: `#ffffff`
- Radius: 36px
- Padding: 0px 20px
- Height: 36px
- Border: 1px solid `#262626`
- Font: 16px Pretendard weight 400
- Use: Header "로그인" — the solid dark primary action

**Sign-up (Secondary, outlined pill)**
- Background: `#ffffff`
- Text: `#262626`
- Radius: 36px
- Padding: 0px 20px
- Height: 36px
- Border: 1px solid `#d3d3d3`
- Font: 16px Pretendard weight 400
- Use: Header "무료로 회원가입" — outlined low-emphasis pill

**Corporate CTA**
- Background: `#ffffff`
- Text: `#333333`
- Radius: 40px
- Padding: 16px 50px
- Height: 56px
- Font: 16px Pretendard weight 600
- Use: "채용공고 보러가기" CTA over the dark careers hero on wrtn.io

### Inputs & Forms

**Chat Composer (textarea)**
- Background: `#ffffff`
- Text: `#262626`
- Font: 16px Pretendard
- Use: Home composer textarea, placeholder "무엇이든 물어보세요" — transparent inside the composer card

### Cards & Containers

**Composer Card**
- Background: `#ffffff`
- Radius: 20px
- Padding: 12px 16px
- Border: 1px solid `#d3d3d3`
- Shadow: `rgba(0,0,0,0.1) 0px 0px 15px 0px`
- Use: Home chat composer container — the one place a soft glow appears

**News Card (corporate)**
- Background: `#f7f7f7`
- Text: `#333333`
- Radius: 24px
- Padding: 20px 24px 24px
- Use: Corporate press/news card on wrtn.io, flat (no shadow)

### Badges

**Role Chip**
- Background: `#ffffff`
- Text: `#262626`
- Radius: 999px
- Padding: 4px 6px 4px 8px
- Height: 32px
- Border: 1px solid `#f1f1f1`
- Font: 16px Pretendard weight 400
- Use: "역할" selector pill in the composer

**Tool Chip**
- Background: `#ffffff`
- Text: `#262626`
- Radius: 300px
- Height: 34px
- Border: 1px solid `#171717`
- Font: 16px Pretendard weight 400
- Use: Tool / suggestion pill on the home composer

**Inspire Red Accent Dot**
- Background: `#f54211`
- Text: `#ffffff`
- Radius: 12px
- Padding: 3px
- Use: Interaction accent / notification dot — the single saturated brand moment

### Navigation
- Background: `#ffffff`
- Text: `#262626` (product) / `#333333` (corporate)
- Font: 16px Pretendard weight 400 (product) / 500 (corporate)
- Height: ~58px product nav
- Use: Top horizontal nav ("홈", "도구", "혜택", "저장됨" on product; "Company", "Service", "News", "Careers" on corporate)

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://wrtn.ai (product super-app surface — composer, nav, chips, Inspire Red accent, live computed style); https://wrtn.io (뤼튼테크놀로지스 corporate surface — editorial display type, news cards, careers CTA, live computed style)
**Tier 2 sources:** getdesign.md/wrtn — "No designs found for 'wrtn'" (not covered); styles.refero.design/?q=wrtn — not listed (search returned only generic featured styles, no Wrtn entry)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~8px (4 / 8 / 12 / 16 / 20 / 24 / 50 / 64)
- Notable: corporate news cards use a 20/24/24 asymmetric padding; composer card uses a tight 12px 16px

### Grid & Container
- Product: centered single-column composer ("무엇이든 물어보세요") as the anchor, with tool/role chips arranged in a horizontal pill row
- Corporate: full-bleed editorial bands — a horizontal news-card row, an oversized Manrope numeral section ("Consumer Services 01/02/03"), and a dark careers hero
- Cards group related content at 20–24px radius

### Whitespace Philosophy
- **Quiet over busy**: the product surface is deliberately restrained so the chat composer and the Inspire Red accent are the focal points
- **Editorial drama on corporate**: the company site spends whitespace lavishly around 160px display numerals — scale itself is the layout device
- **Pill rhythm**: repeated full-round chips create a consistent horizontal cadence across tool/role entry points

### Border Radius Scale
- Small (8px): inner elements, small icon buttons
- Medium (20px): composer card — the product workhorse
- Large (24px): corporate news cards
- Pill (36px / 40px): header buttons, corporate CTA
- Full (300px / 999px): tool/role chips, accent geometry

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Most surfaces, corporate cards, nav |
| Tint (Level 1) | `#f7f7f7` / Open-Space pastel background shift | Card/section separation, menu color-coding |
| Hairline (Level 2) | `1px solid #d3d3d3` border | Outlined pills, composer outline |
| Soft Glow (Level 3) | `rgba(0,0,0,0.1) 0px 0px 15px 0px` | Home composer card only |

**Shadow Philosophy**: Wrtn is a near-flat system. Live inspection found `box-shadow: none` across the corporate cards, nav, and most product chrome; the one deliberate exception is the home chat composer, which carries a soft ambient glow (`rgba(0,0,0,0.1) 0px 0px 15px 0px`) to lift the single most important input off the page. Depth otherwise comes from flat grey surfaces (`#f7f7f7` / `#f1f1f1`), the "Open Space" pastel tints, and thin `#d3d3d3` hairlines. When emphasis is needed the system reaches for the Inspire Red accent or a dark pill, never heavy elevation.

## 7. Do's and Don'ts

### Do
- Keep the product canvas near-monochrome — `#262626` ink on `#ffffff`, with `#f7f7f7`/`#f1f1f1` grey surfaces
- Reserve Inspire Red (`#f54211`) for interaction moments — accent dots, highlights, the circle motif — never as a flood color
- Use Pretendard 16px at 1.6 line-height for body and UI text
- Use bold Pretendard (600–700) or Manrope for display/headline moments only
- Use pill geometry — 36px header buttons, 300–999px tool/role chips, 40px corporate CTA
- Color-code menus with the "Open Space" pastels (`#dcf5ff` / `#fee2ec` / `#fff5ec`)
- Keep cards flat — reserve the soft glow (`rgba(0,0,0,0.1) 0px 0px 15px`) for the composer only
- Use near-black `#262626` (product) or `#333333` (corporate) for text instead of pure black

### Don't
- Flood the UI with Inspire Red — it is a spark, not a background
- Use heavy drop shadows for elevation — Wrtn is near-flat
- Use pure black (`#000000`) for body text — reserve near-black ink
- Use sharp/square corners on interactive elements — buttons and chips are pills
- Mix display fonts into body — Pretendard 400 owns reading text
- Set the product chrome in loud colors — quiet ground makes the accent legible
- Use a second saturated accent alongside Inspire Red — one spark only
- Crowd the corporate display numerals — their drama depends on whitespace

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, composer full-width, chips wrap/scroll, display numerals shrink |
| Tablet | 640-1024px | Moderate padding, 2-up news cards |
| Desktop | 1024-1440px | Full layout, centered composer, multi-column editorial bands |

### Touch Targets
- Header pills at 36px height, full pill for an unmistakable target
- Tool/role chips at 32–34px height with generous horizontal padding
- Corporate CTA at 56px height with 16px 50px padding — comfortably tappable

### Collapsing Strategy
- Product: composer stays centered and full-width; tool/role chip row wraps or scrolls horizontally
- Corporate: 160px Manrope numerals scale down sharply; news-card row → stacked single column
- Editorial bands maintain full-width treatment, reduce internal padding

### Image Behavior
- Product illustrations and the circle motif carry no shadow, consistent with the flat system
- Cards maintain 20–24px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent / interaction: Inspire Red (`#f54211`)
- Product text / dark button: Ink (`#262626`)
- Corporate text: Corporate Ink (`#333333`)
- Background: Pure White (`#ffffff`)
- Surface: Surface Grey (`#f7f7f7`), Surface Alt (`#f1f1f1`)
- Hairline / outline: `#d3d3d3`
- Open Space tints: Open Blue (`#dcf5ff`), Open Pink (`#fee2ec`), Open Peach (`#fff5ec`)
- Muted text: `#656565`; Faint / disabled: `#c5c5c5`

### Example Component Prompts
- "Create a home chat composer: white background, 1px solid #d3d3d3 border, 20px radius, soft glow rgba(0,0,0,0.1) 0px 0px 15px. Transparent textarea inside, placeholder '무엇이든 물어보세요', 16px Pretendard, #262626 text. Below it a row of pill tool chips: white background, 1px solid #171717 border, 300px radius, 34px height."
- "Design a header: white nav. Pretendard 16px links, #262626. Right-aligned an outlined signup pill (#ffffff, 1px solid #d3d3d3, 36px radius, #262626 text) and a solid login pill (#262626 bg, white text, 36px radius)."
- "Build a corporate news card: #f7f7f7 background, 24px radius, 20px 24px 24px padding, no shadow. Title 20px Pretendard weight 600, #333333. Use Manrope 700 for any oversized section numeral."
- "Add an Inspire Red accent: #f54211 dot/badge, 12px radius, only at interaction moments. Color-code a menu surface with an Open Space tint (#dcf5ff blue, #fee2ec pink, or #fff5ec peach)."

### Iteration Guide
1. Keep the product canvas quiet — `#262626` on `#ffffff`, grey surfaces; Inspire Red (`#f54211`) is the only saturated hue and only at interaction
2. Pretendard 16px / 1.6 for body; jump to 600–700 (or Manrope) for display
3. Pill geometry throughout — 36px header, 300–999px chips, 40px corporate CTA, 20–24px cards
4. Near-flat — soft glow only on the composer; separate with `#f7f7f7` tint, Open-Space pastels, and `#d3d3d3` hairlines
5. Text is `#262626` (product) / `#333333` (corporate), never pure black for body
6. Use the Open-Space pastels to color-code menus, not to fill large surfaces

---

## 10. Voice & Tone

Wrtn's voice is **encouraging, plain-spoken, and inspiration-forward** — an AI "guide that helps people experience joy and inspiration" rather than a cold productivity tool. The product positions itself as everyone's everyday AI ("전세계 최신 AI를 무료로" — the world's latest AI, free), and the copy invites rather than instructs: the composer simply asks "무엇이든 물어보세요" ("Ask anything"). The corporate register adds confident scale-claims ("500만명이 선택한 대한민국 대표 AI 서비스") delivered plainly, without hype adjectives.

| Context | Tone |
|---|---|
| Product composer | Open and inviting. "무엇이든 물어보세요." Low-pressure, conversational. |
| Tool / menu labels | Plain and functional. "도구", "혜택", "저장됨", "역할". |
| CTAs | Direct, friction-free. "무료로 회원가입", "로그인", "채용공고 보러가기". |
| Corporate positioning | Confident, scale-framed, factual. "500만명이 선택한 대한민국 대표 AI 서비스." |
| Mission / philosophy | Humanistic, aspirational. Inspiration as the core value. |

**Voice samples (verbatim from live surfaces):**
- "무엇이든 물어보세요" — product composer placeholder (open invitation). *(verified live 2026-06-17, wrtn.ai)*
- "500만명이 선택한 대한민국 대표 AI 서비스" — corporate product line (scale claim, stated plainly). *(verified live 2026-06-17, wrtn.io)*
- "AI 시대를 함께 선도할 인재를 찾습니다." — careers hero (collaborative, forward-looking). *(verified live 2026-06-17, wrtn.io)*

**Forbidden register**: fear-of-missing-out pressure, jargon-heavy AI hype, cold/technical instruction tone, exclamation-stacked marketing. The brand frames AI as familiar and joyful, not intimidating.

## 11. Brand Narrative

Wrtn (뤼튼) was founded in **2021** by CEO **이세영 (Lee Se-young)** and a small founding team (around seven people who had worked together on academic conferences). The product began as an AI **writing** assistant — the name is the past participle "written" with the vowels removed — built by connecting to Naver's HyperCLOVA large Korean language model. The founding premise was to expand human creativity through technology and help people's thoughts find expression in writing ([테크42 interview](https://www.tech42.co.kr/), [StartupToday](https://www.startuptoday.kr/news/articleView.html?idxno=46486)).

The product matured from a single writing tool into a full generative-AI **super app** — "500만명이 선택한 대한민국 대표 AI 서비스" (the AI service chosen by 5 million people) — and the parent company, 뤼튼테크놀로지스 (Wrtn Technologies), expanded into a family of products: the flagship 뤼튼 consumer app, 크랙, 캬라푸, the enterprise 뤼튼 AX, 뤼튼 Labs, and 뤼튼 Edu, with offices in Seoul (서초 BLOCK77) and Tokyo (Toranomon). The company reported 2025 revenue of 471억원, a 15× year-over-year jump ([wrtn.io, live 2026-06-17](https://wrtn.io)).

The brand's design philosophy is the **"Inspiration Economy"**, expressed through **"The Open Space"** — the circle, a fundamental geometric form, animated through three-dimensional space to convey the infinite possibilities of humans and AI creating together. On interaction, the main color **Inspire Red** and the circle motif are emphasized so that Wrtn feels like "a guide that helps people experience joy and inspiration" ([BAT brand work](https://batcrew.co.kr/ko/post/work/wrtn-2/), [Manual Graphics](https://manualgraphics.com/projects/wrtn-technologies-official-website/)). What the design refuses: the cold, technical chrome of developer-facing AI tools, and a hype-saturated palette. What it embraces: a quiet near-monochrome canvas, a single warm-red spark, humanistic colors, and the circle as a symbol of open possibility.

## 12. Principles

1. **Inspiration is the product.** The "Inspiration Economy" frames AI as a spark for human creativity, not a replacement for it. *UI implication:* keep the canvas quiet so the moment of inspiration — the Inspire Red accent, the circle motif — is the focal point.
2. **One spark, not a flood.** Inspire Red (`#f54211`) means "something is happening here." *UI implication:* reserve the saturated red for interaction moments; never fill large surfaces with it.
3. **Familiar, not intimidating.** AI should feel approachable to the general public. *UI implication:* plain Korean labels, an inviting composer ("무엇이든 물어보세요"), pill geometry, and soft pastels rather than technical chrome.
4. **The circle opens space.** "The Open Space" makes the circle a symbol of infinite possibility. *UI implication:* round geometry throughout — pills, 20–24px cards — and per-menu pastel color-coding from the circle-in-space motif.
5. **Quiet UI, bold story.** *UI implication:* product chrome stays small and monochrome; the corporate narrative goes large with Manrope display numerals. The two registers never blur.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Wrtn user segments (Korean students, marketers, and knowledge workers using a free consumer AI app), not individual people.*

**김민서, 22, 서울.** A university student who uses Wrtn for essay drafts, summaries, and study help. Chose it because it's free, in Korean, and feels friendly rather than technical. Values the inviting "무엇이든 물어보세요" prompt — it never makes her feel she needs to know the "right" way to ask.

**이준호, 34, 판교.** A marketer who uses Wrtn's tools for copy, ideation, and content drafts. Appreciates that the interface stays out of the way — a quiet canvas with one clear action — so he can move fast without visual noise.

**박지은, 41, 부산.** A small-business owner exploring AI for the first time. Trusts Wrtn because it positions itself as Korea's representative AI service ("500만명이 선택한") and because the design feels calm and consumer-friendly, not like enterprise developer software.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no chat history, "저장됨" empty)** | White canvas. Single Ink (`#262626`) line explaining nothing saved yet, with a path back to the composer. No clutter — the quiet canvas is the default. |
| **Empty (no tool results)** | Muted (`#656565`) single line; the composer stays available so the user can re-ask. Calm, honest. |
| **Loading (AI response streaming)** | Inline within the composer card; the Inspire Red accent / circle motif animates to signal activity. Previous content stays visible. |
| **Loading (page/section)** | Skeleton blocks at final dimensions on `#f7f7f7` surface, 20px radius. Flat pulse consistent with the near-shadowless system. |
| **Error (request failed)** | Inline message in Ink with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form / input invalid)** | Field-level message below the input; describes what's valid, not just "필수". |
| **Success (saved / submitted)** | Brief inline confirmation in a calm tone; the Inspire Red accent may flash once. No celebratory emoji. |
| **Skeleton** | `#f7f7f7` blocks at final dimensions, 20px radius, flat pulse. |
| **Disabled** | Faint (`#c5c5c5`) text on a reduced-opacity surface; the dark pill fades rather than switching color, preserving the chrome read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 240ms | Card/section reveal, composer expand, menu transition |
| `motion-slow` | 360ms | Page-level transitions, hero / circle-motif reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, chips, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is the one place the brand allows itself to be expressive — "The Open Space" concept lives in motion. The circle motif moves and changes form through three-dimensional space on hero sections and across pages, and on interaction the Inspire Red and the circle are emphasized to feel like a guide sparking inspiration. UI motion otherwise stays functional and quiet: pill chips respond to press with a subtle scale/opacity shift; cards fade-in from below at `motion-standard / ease-enter`. No harsh bounce on functional UI. Under `prefers-reduced-motion: reduce`, the circle motif freezes and all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://wrtn.ai (product super-app): body Pretendard 16px / color rgb(38,38,38) #262626 / bg #ffffff;
  composer textarea placeholder "무엇이든 물어보세요"; login pill bg rgb(38,38,38) #262626 radius 36px;
  signup pill 1px rgb(211,211,211) #d3d3d3 radius 36px; tool chip 1px rgb(23,23,23) #171717 radius 300px;
  Inspire Red accent rgb(245,66,17) #f54211 radius 12px; composer card radius 20px shadow rgba(0,0,0,0.1) 0px 0px 15px;
  Open Space tints rgb(220,245,255) #dcf5ff / rgb(254,226,236) #fee2ec / rgb(255,245,236) #fff5ec;
  meta description "AI 글쓰기, AI 이미지 생성 등 전세계 최신 AI를 무료로"; title "뤼튼".
- https://wrtn.io (뤼튼테크놀로지스 corporate): body Pretendard/Noto Sans JP 16px / color rgb(51,51,51) #333333;
  section H2 38px/600; service H3 34px/700 rgb(26,26,26) #1a1a1a; display numeral Manrope 160px/700;
  news card bg rgb(245,245,245)~#f7f7f7 radius 24px; careers CTA radius 40px padding 16px 50px / 600;
  copy "500만명이 선택한 대한민국 대표 AI 서비스", "AI 시대를 함께 선도할 인재를 찾습니다.", "채용공고 보러가기";
  footer "(주)뤼튼테크놀로지스 ... 대표 이세영 ... © 2026 Wrtn Technologies".

Token-level claims (§1-9) are sourced from this live inspection of two brand-owned surfaces.

Voice samples (§10) are verbatim from the live surfaces (composer placeholder, corporate product line, careers hero).

Brand narrative (§11): founded 2021 by CEO 이세영 (Lee Se-young); name from "written"; built on Naver HyperCLOVA;
grew from AI writing tool into a generative-AI super app; 2025 revenue 471억원 (per wrtn.io live news, 2026-06-17).
Founding/team details from public interviews (테크42, StartupToday); brand philosophy "Inspiration Economy" /
"The Open Space" circle motif / "Inspire Red" main color from the agency case studies (BAT batcrew.co.kr,
Manual Graphics) describing Wrtn's BX renewal. These are publicly documented; specific phrasings are paraphrased
except where quoted.

Personas (§13) are fictional archetypes informed by publicly observable Wrtn user segments (Korean students,
marketers, first-time AI users). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one spark, not a flood", "quiet UI, bold story") are editorial readings connecting
Wrtn's observed design to its stated "Inspiration Economy" philosophy, not directly sourced Wrtn statements.
-->
