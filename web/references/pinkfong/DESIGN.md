---
id: pinkfong
name: The Pinkfong Company
display_name_kr: 더핑크퐁컴퍼니
country: KR
category: consumer-tech
homepage: "https://www.thepinkfongcompany.com"
primary_color: "#ff66af"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pinkfong.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = signature Pinkfong pink (#ff66af), cross-surface (corporate recruit CTA + consumer D-day badge + eyebrow label). Consumer product face = Pretendard on ink #191f28; corporate face = Spoqa Han Sans Neo. Per-IP vivid character palette is the brand's color language. Near-flat (box-shadow none) except faint pink-tinted corporate CTA shadow."
  colors:
    primary: "#ff66af"
    primary-soft: "#ffe0ef"
    coral: "#ff4b78"
    ink: "#191f28"
    body: "#4e5968"
    muted: "#8b95a1"
    faint: "#b0b8c1"
    canvas: "#ffffff"
    surface: "#f0f2f5"
    hairline: "#e5e8eb"
    on-primary: "#ffffff"
    link-blue: "#1677ff"
    char-sky: "#75ddff"
    char-blue: "#003c7d"
    char-cream: "#fff1aa"
    char-gold: "#f0bd64"
    char-mint: "#9deff8"
    char-purple: "#a262f3"
  typography:
    family: { display: "Pretendard", corporate: "Spoqa Han Sans Neo" }
    display-hero: { size: 64, weight: 700, lineHeight: 1.2, use: "Consumer hero headline, Pretendard Bold" }
    eyebrow:      { size: 20, weight: 700, use: "Section eyebrow label, often in pink #ff66af" }
    nav:          { size: 16, weight: 600, lineHeight: 1.5, use: "Top nav menu buttons, Pretendard SemiBold" }
    button:       { size: 16, weight: 600, lineHeight: 1.5, use: "Pill CTA label" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text, Pretendard" }
    badge:        { size: 14, weight: 500, use: "D-day / status badge label" }
    caption:      { size: 14, weight: 600, use: "Header chip label (한국어 / 로그인)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 48, xxl: 96 }
  rounded: { sm: 12, md: 24, lg: 32, full: 999 }
  shadow:
    none: "none"
    pink-cta: "rgba(255, 5, 88, 0.06) 0px 2px 0px 0px"
  components:
    cta-recruit:   { type: button, bg: "#ff66af", fg: "#ffffff", radius: "32px", padding: "32px 15px", font: "24px / 400 Spoqa Han Sans Neo", shadow: "rgba(255,5,88,0.06) 0px 2px 0px 0px", use: "Corporate recruit CTA — signature pink pill" }
    pill-outline:  { type: button, bg: "#ffffff", fg: "#4e5968", radius: "999px", padding: "0px 24px", height: "56px", border: "1px solid #e5e8eb", font: "16px / 600 Pretendard", use: "Consumer pill CTA (캐릭터 소개 보기 / 더보기)" }
    chip-header:   { type: button, bg: "#ffffff", fg: "#4e5968", radius: "999px", padding: "0px 12px", height: "40px", border: "1px solid #e5e8eb", font: "14px / 600 Pretendard", use: "Header utility chip (한국어 / 로그인)" }
    nav-button:    { type: tab, fg: "#4e5968", radius: "12px", padding: "8px", font: "16px / 600 Pretendard", active: "text #191f28", use: "Top nav menu item (CHARACTERS / WATCH / STORE)" }
    badge-dday:    { type: badge, bg: "#ff66af", fg: "#ffffff", radius: "999px", padding: "0px 12px", height: "28px", font: "14px / 500 Pretendard", use: "D-day / status badge (종료까지 D-198)" }
    card-soft:     { type: card, bg: "#ffe0ef", radius: "24px", padding: "96px 0px", use: "Soft-pink feature section block, flat (no shadow)" }
    card-character: { type: card, bg: "#75ddff", fg: "#191f28", radius: "0px", padding: "48px", use: "Vivid per-IP character panel (palette swaps per character)" }
  components_harvested: true
---

# Design System Inspiration of The Pinkfong Company

## 1. Visual Theme & Atmosphere

The Pinkfong Company (더핑크퐁컴퍼니) is the Seoul-based kids-entertainment studio behind Pinkfong, Baby Shark, and Bebefinn — and its digital surfaces read exactly as you'd hope a global children's-IP house would: bright, friendly, and confidently playful, but built on a calm, modern product chassis rather than chaotic cartoon clutter. The consumer site (`pinkfong.com`) opens on a clean white canvas (`#ffffff`) with deep ink text (`#191f28`) and a single signature accent — a warm bubblegum pink (`#ff66af`) — that ties the whole franchise together. This pink is the connective tissue: it appears as the recruit CTA on the corporate site, as the "종료까지 D-198" D-day badges on the consumer site, and as oversized watermark display type. One color, applied with discipline, reads as "this is Pinkfong."

What gives the system its energy is the **per-IP character palette**. Each franchise gets its own vivid, high-saturation color world rendered in full-bleed panels: Baby Shark lives in sky `#75ddff` over deep ocean blue `#003c7d`; Bebefinn in coral `#ff4b78` over buttery cream `#fff1aa`; the dino series in warm gold `#f0bd64`; and newer IPs in electric purple `#a262f3` and mint `#9deff8`. These are not pastel — they are saturated, joyful, almost candy-bright, exactly calibrated for a preschool audience and the parents browsing alongside them. The character panels are the loudest moments; the surrounding chrome stays quiet so the IP color can sing.

The geometry is soft and rounded everywhere — the brand never shows a sharp corner on an interactive element. Header utility chips and content CTAs are full pills (`999px` radius); the corporate recruit button is a `32px` pill; nav menu buttons round at `12px`; feature blocks at `24px`. Depth is almost entirely flat: live inspection found `box-shadow: none` across the nav, character cards, and pill CTAs — separation comes from the soft-pink (`#ffe0ef`) and cool-grey (`#f0f2f5`) tinted surfaces plus a single hairline (`#e5e8eb`). The one shadow in the system is a faint pink-tinted lift (`rgba(255,5,88,0.06)`) under the corporate CTA — even the elevation is on-brand pink. The consumer face runs on **Pretendard**, the de-facto Korean product font, while the corporate site uses **Spoqa Han Sans Neo**; both are clean, friendly hangul sans-serifs that keep the tone approachable rather than cute-to-a-fault.

**Key Characteristics:**
- Signature bubblegum pink (`#ff66af`) as the single cross-surface brand accent — CTA, badge, watermark
- Per-IP vivid character palette (sky `#75ddff`, coral `#ff4b78`, gold `#f0bd64`, purple `#a262f3`, cream `#fff1aa`, mint `#9deff8`) — high-saturation, child-friendly
- Deep ink text (`#191f28`) on white (`#ffffff`) — readable, warm, never harsh black for body
- Pill-everything geometry — 999px chips/CTAs, 32px corporate button, 12px nav, 24px feature blocks
- Near-flat depth — `box-shadow: none` everywhere except a faint pink-tinted (`rgba(255,5,88,0.06)`) corporate CTA lift
- Pretendard (consumer/product) + Spoqa Han Sans Neo (corporate) — friendly hangul sans-serifs
- Tinted surfaces (`#ffe0ef`, `#f0f2f5`) + single hairline (`#e5e8eb`) carry all separation
- Cool-grey neutral ladder (`#4e5968` → `#8b95a1` → `#b0b8c1`) for text hierarchy

## 2. Color Palette & Roles

### Primary
- **Pinkfong Pink** (`#ff66af`): The signature brand color. Appears as the corporate recruit CTA background, consumer D-day badge background, and the eyebrow/watermark accent — the system's single "this is Pinkfong" color.
- **Soft Pink** (`#ffe0ef`): Tinted pink surface for feature section blocks. A gentle, low-saturation companion to the primary that warms a section without shouting.
- **Coral** (`#ff4b78`): A hotter pink-red used in character panels (Bebefinn) and energetic accents — the saturated sibling of the brand pink.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on pink/character panels.
- **Surface Grey** (`#f0f2f5`): Cool-grey tinted surface for alternating sections (corporate site).
- **Hairline** (`#e5e8eb`): The single border/divider color across the system — pill outlines, dividers, card edges.

### Text Hierarchy
- **Ink** (`#191f28`): Primary text, headings, active nav, strong labels — a near-black navy that carries warmth over pure black.
- **Body Slate** (`#4e5968`): Secondary body copy, default nav labels, and pill CTA text.
- **Muted Slate** (`#8b95a1`): Tertiary text, captions, metadata.
- **Faint Blue-Grey** (`#b0b8c1`): Disabled text, placeholders, lowest-emphasis labels.

### Character IP Palette (high-saturation, per-franchise)
- **Sky** (`#75ddff`): Baby Shark sky/water world.
- **Ocean Blue** (`#003c7d`): Baby Shark deep-blue panel background.
- **Cream** (`#fff1aa`): Bebefinn warm-cream backdrop.
- **Gold** (`#f0bd64`): Dino-series warm gold panel.
- **Mint** (`#9deff8`): Newer-IP fresh mint accent.
- **Purple** (`#a262f3`): Electric purple character panel (키키팝팝).

### Utility
- **Link Blue** (`#1677ff`): Default anchor color on bare links (corporate site, Ant Design base) — not a brand accent, used only for raw text links.
- **On-Primary** (`#ffffff`): Text/iconography on pink and character backgrounds.

## 3. Typography Rules

### Font Family
- **Consumer / Product**: `Pretendard` (with `Pretendard Fallback`) — the document default on `pinkfong.com`. Used for hero headlines, nav, buttons, and body at weights 400/500/600/700.
- **Corporate**: `Spoqa Han Sans Neo` — the document default on `thepinkfongcompany.com`. A clean, slightly geometric Korean sans used for corporate chrome and the recruit CTA.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Pretendard | 64px (4.00rem) | 700 | 1.2 | Consumer hero headline |
| Eyebrow Label | Pretendard | 20px (1.25rem) | 700 | normal | Section eyebrow, often pink `#ff66af` ("MEET & PLAY") |
| Nav Menu | Pretendard | 16px (1.00rem) | 600 | 1.5 | Top nav buttons (CHARACTERS / WATCH / STORE) |
| Button / CTA | Pretendard | 16px (1.00rem) | 600 | 1.5 | Pill CTA label (캐릭터 소개 보기 / 더보기) |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.5 | Standard reading text |
| Badge | Pretendard | 14px (0.88rem) | 500 | normal | D-day / status badge (종료까지 D-198) |
| Caption / Chip | Pretendard | 14px (0.88rem) | 600 | normal | Header utility chip (한국어 / 로그인) |
| Corporate CTA | Spoqa Han Sans Neo | 24px (1.50rem) | 400 | normal | Recruit pill button on corporate site |

### Principles
- **Friendly, not cute**: Pretendard and Spoqa Han Sans Neo are clean, modern hangul sans-serifs — the warmth comes from color and roundness, not from a novelty typeface.
- **Weight for hierarchy**: 700 anchors hero/eyebrow, 600 carries nav and CTAs, 400 carries body. The contrast in weight (not size alone) signals importance.
- **Display can go big and playful**: oversized watermark display (120px `NEW` / `CONTENTS` in translucent pink) treats type as decoration — a playful, editorial flourish unique to the IP brand.
- **Two faces, two contexts**: Pretendard is the consumer/product voice; Spoqa Han Sans Neo is the corporate voice. They never swap surfaces.

## 4. Component Stylings

### Buttons

**Recruit CTA (Corporate Primary)**
- Background: `#ff66af`
- Text: `#ffffff`
- Radius: 32px
- Padding: 32px 15px
- Font: 24px / 400 / Spoqa Han Sans Neo
- Height: 64px
- Shadow: `rgba(255,5,88,0.06) 0px 2px 0px 0px`
- Use: Corporate recruit call-to-action ("인재영입 페이지 바로가기") — the signature pink pill

**Pill Outline (Consumer CTA)**
- Background: `#ffffff`
- Text: `#4e5968`
- Radius: 999px
- Padding: 0px 24px
- Border: 1px solid `#e5e8eb`
- Font: 16px / 600 / Pretendard
- Height: 56px
- Use: Consumer content CTA ("캐릭터 소개 보기", "더보기") — outline pill on white

**Header Utility Chip**
- Background: `#ffffff`
- Text: `#4e5968`
- Radius: 999px
- Padding: 0px 12px
- Border: 1px solid `#e5e8eb`
- Font: 14px / 600 / Pretendard
- Height: 40px
- Use: Header utility chips ("한국어", "로그인")

### Inputs & Forms
- Background: `#ffffff`
- Border: 1px solid `#e5e8eb`
- Radius: 999px (chip/search) or 12px (field)
- Text: `#191f28`
- Placeholder: `#b0b8c1`
- Use: Search / login fields — pill or soft-rounded, hairline border, no shadow

### Cards & Containers

**Soft-Pink Feature Block**
- Background: `#ffe0ef`
- Radius: 24px
- Padding: 96px 0px
- Use: Soft-pink feature section block (flat, no shadow)

**Character Panel**
- Background: `#75ddff` (swaps per IP: `#003c7d`, `#ff4b78`, `#f0bd64`, `#a262f3`, `#fff1aa`)
- Text: `#191f28`
- Padding: 48px
- Use: Full-bleed vivid per-character IP panel — the brand's loudest color moment

### Badges

**D-day / Status Badge**
- Background: `#ff66af`
- Text: `#ffffff`
- Radius: 999px
- Padding: 0px 12px
- Font: 14px / 500 / Pretendard
- Height: 28px
- Use: Event/D-day status pill ("종료까지 D-198")

### Navigation
- Background: `#ffffff`
- Text: `#4e5968`
- Radius: 12px (per-item button)
- Padding: 8px
- Font: 16px / 600 / Pretendard
- Active: `#191f28` ink text
- Use: Top horizontal nav (CHARACTERS / BUSINESS / MEET & PLAY / WATCH / STORE / NEWS)

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, two brand-owned surfaces)
**Tier 1 sources:** https://www.thepinkfongcompany.com (corporate — recruit CTA, family-site pill, brand chrome); https://www.pinkfong.com/ko (consumer — character IP panels, content carousel, D-day badges, pill CTAs)
**Tier 2 sources:** getdesign.md/pinkfong — 0 DESIGN.md files (not covered); styles.refero.design/?q=pinkfong — no pinkfong entry (returns unrelated trending cards, first result "Agence Foudre" verified ≠ Pinkfong)
**Conflicts unresolved:** none (Tier 2 has no coverage for this KR entertainment-IP brand; Tier 1 two brand-owned surfaces carry the proof)

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 48px, 96px
- Notable: Feature blocks use generous 96px vertical padding for an airy, breathable kids-content rhythm; character panels use 48px internal padding

### Grid & Container
- Centered single-column hero with a 64px Pretendard headline as the anchor
- Character IP panels presented as full-bleed split panels (504×378 / 396×378 measured) — vivid color background + character art + tag copy
- Content carousels (NEW / CONTENTS sections) with oversized translucent-pink watermark display type behind cards
- Feature sections alternate between white (`#ffffff`) and tinted blocks (soft-pink `#ffe0ef` / cool-grey `#f0f2f5`)

### Whitespace Philosophy
- **Breathing room over density**: despite a content-rich franchise catalog, sections are airy with generous vertical rhythm (96px block padding)
- **Flat segmentation**: sections separate by background tint (`#ffe0ef`, `#f0f2f5`) and the single hairline (`#e5e8eb`), not by shadow
- **Color as the loud layer, layout as the calm layer**: vivid IP panels provide the energy; the surrounding grid stays quiet and orderly

### Border Radius Scale
- Small (12px): nav buttons, soft-rounded fields
- Medium (24px): feature section blocks, content cards
- Large (32px): corporate recruit CTA
- Full (999px): header chips, consumer pill CTAs, D-day badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav, character panels, pill CTAs, section cards |
| Tint (Level 1) | `#ffe0ef` / `#f0f2f5` background shift | Section/card separation without elevation |
| Hairline (Level 2) | `1px solid #e5e8eb` border | Pill outlines, dividers, card edges |
| Pink Lift (Level 3) | `rgba(255,5,88,0.06) 0px 2px 0px 0px` | The single shadow — faint pink-tinted lift under the corporate recruit CTA |

**Shadow Philosophy**: Pinkfong is a near-flat system. Live inspection found `box-shadow: none` across the consumer nav, character panels, pill CTAs, and feature blocks. Depth and grouping are communicated entirely through tinted surfaces (`#ffe0ef`, `#f0f2f5`) and the single hairline (`#e5e8eb`). The one exception is a faint pink-tinted lift (`rgba(255,5,88,0.06)`) under the corporate recruit CTA — even the rare shadow stays on-brand. When emphasis is needed the system reaches for the signature pink (`#ff66af`) or a vivid character color, never for elevation. This keeps the UI feeling modern, fast, and friendly rather than heavy.

## 7. Do's and Don'ts

### Do
- Use the signature pink (`#ff66af`) as the single brand accent — CTA, D-day badge, eyebrow label
- Give each character IP its own vivid, high-saturation panel color (sky `#75ddff`, coral `#ff4b78`, gold `#f0bd64`, purple `#a262f3`)
- Use ink (`#191f28`) for text and headings instead of pure black
- Keep geometry rounded — 999px pills, 32px / 24px / 12px radii, never a sharp interactive corner
- Separate sections with tinted surfaces (`#ffe0ef`, `#f0f2f5`) and the `#e5e8eb` hairline, not shadows
- Set hero headlines in Pretendard 700 at large sizes for a friendly, confident voice
- Let the character panels be the loud color moment; keep surrounding chrome calm
- Reserve oversized translucent-pink watermark display type for playful editorial accents

### Don't
- Spread the signature pink across many elements — it dilutes the single-action signal
- Use drop shadows for elevation — Pinkfong is a near-flat system (only the faint pink CTA lift exists)
- Use pure black (`#000000`) for body text — use ink navy `#191f28`
- Use sharp or square corners on buttons, chips, or badges — everything rounds
- Dull the character palette into pastels — the IP colors are deliberately saturated and joyful
- Use the default link blue (`#1677ff`) as a brand accent — it is a bare-link fallback, not brand
- Set headlines in a light weight — display is bold (700)
- Crowd the layout — keep generous vertical rhythm so the bright colors have room to breathe

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, character panels stack, nav collapses |
| Tablet | 640-1024px | 2-up character/content cards, moderate padding |
| Desktop | 1024-1440px | Full layout, centered hero, full-bleed split character panels |

### Touch Targets
- Consumer pill CTAs at 56px height with 24px horizontal padding — comfortably tappable
- Header chips at 40px height, full pill
- D-day badges at 28px (informational, not interactive)
- Nav buttons at 38px with rounded 12px hit area

### Collapsing Strategy
- Hero: 64px Pretendard headline scales down on mobile, weight 700 maintained
- Character IP panels: split panels stack to single-column on narrow viewports
- Content carousels: horizontal scroll on mobile; watermark display type shrinks
- Tinted/white alternating sections maintain full-width treatment

### Image Behavior
- Character art and content thumbnails carry no shadow at any size, consistent with the flat system
- Cards maintain 24px radius across breakpoints
- Vivid panel backgrounds remain full-bleed across sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent / CTA: Pinkfong Pink (`#ff66af`)
- Soft pink surface: (`#ffe0ef`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f0f2f5`)
- Heading / ink text: (`#191f28`)
- Body / nav text: Body Slate (`#4e5968`)
- Muted text: (`#8b95a1`)
- Faint / disabled: (`#b0b8c1`)
- Hairline: (`#e5e8eb`)
- Character palette: sky `#75ddff`, ocean `#003c7d`, coral `#ff4b78`, cream `#fff1aa`, gold `#f0bd64`, mint `#9deff8`, purple `#a262f3`

### Example Component Prompts
- "Create a kids-IP hero on white background. Headline at 64px Pretendard weight 700, color #191f28. Below it an outline pill CTA: #ffffff background, 1px solid #e5e8eb border, #4e5968 text, 999px radius, 0 24px padding, 16px Pretendard weight 600 — '캐릭터 소개 보기'."
- "Design a full-bleed character panel: #75ddff sky background (swap to #ff4b78 coral or #a262f3 purple per character), #191f28 text, 48px padding, no shadow. Include a pink D-day badge: #ff66af background, white text, 999px radius, 0 12px padding, 14px weight 500."
- "Build a soft-pink feature block: #ffe0ef background, 24px radius, 96px vertical padding, no shadow. Eyebrow label 20px Pretendard weight 700 in #ff66af, then body 16px weight 400 in #4e5968."
- "Create a corporate recruit CTA: #ff66af background, white text, 32px radius, 32px 15px padding, 24px Spoqa Han Sans Neo. Add a faint pink lift shadow rgba(255,5,88,0.06) 0px 2px 0px 0px."

### Iteration Guide
1. Pink (`#ff66af`) is the single brand accent — don't spread it
2. Each character IP gets its own saturated panel color — keep them vivid, not pastel
3. No shadows — separate with `#ffe0ef` / `#f0f2f5` tint and the `#e5e8eb` hairline
4. Pill geometry throughout — 999px chips/CTAs, 32px corporate, 24px blocks, 12px nav
5. Text color is `#191f28` ink, never pure black for body
6. Pretendard for consumer/product surfaces; Spoqa Han Sans Neo for corporate
7. Headlines are bold (700); body is 400 — weight carries hierarchy

---

## 10. Voice & Tone

The Pinkfong Company's voice is **warm, joyful, and family-inclusive** — playful enough to delight a preschooler yet clear and trustworthy enough to reassure the parent browsing alongside. The consumer hero line "전 세계가 사랑하는 온 가족이 함께 즐기는 패밀리 IP" ("A family IP loved worldwide, enjoyed by the whole family") sets the register: globally proud, family-framed, inclusive — it sells togetherness, not just cartoons. Copy speaks to "온 가족" (the whole family) and frames content as something to share. Functional labels (CHARACTERS, WATCH, STORE, MEET & PLAY) stay short and bright; the warmth lives in the color and roundness, not in baby-talk.

| Context | Tone |
|---|---|
| Hero headlines | Globally proud, family-framed. "전 세계가 사랑하는 온 가족이 함께 즐기는 패밀리 IP." Warm, inclusive. |
| Nav labels | Short, bright, English-forward. "CHARACTERS", "WATCH", "STORE", "MEET & PLAY". |
| CTAs | Direct, low-pressure, inviting. "캐릭터 소개 보기", "더보기". |
| Character tags | Playful hashtag-style descriptors. "#무한긍정 #모험심 #호기심" (aging shark), "#애교부자 #호기심 #성장 #패밀리" (Bebefinn). |
| News / D-day | Concrete, time-bound, celebratory. "종료까지 D-198", global partnership announcements. |
| Corporate | Confident, mission-led, recruiting-forward. "인재영입 페이지 바로가기". |

**Voice samples (verbatim from live surfaces):**
- "전 세계가 사랑하는  온 가족이 함께 즐기는 패밀리 IP" — consumer hero H2 (global + family framing). *(verified live 2026-06-17)*
- "#무한긍정#모험심#호기심" — Baby Shark character tags (playful, positive). *(verified live 2026-06-17)*
- "종료까지 D-198" — event D-day badge (time-bound, celebratory). *(verified live 2026-06-17)*

**Forbidden register**: condescending baby-talk, fear/pressure marketing aimed at parents, dense jargon, exclamation-heavy hype that undercuts the calm-confident chassis.

## 11. Brand Narrative

The Pinkfong Company (더핑크퐁컴퍼니, formerly SmartStudy) is a Seoul-based family-entertainment company best known for **Pinkfong** and the global phenomenon **"Baby Shark"** — the most-viewed video in YouTube history. Founded in **2010**, the company built its identity around educational, sing-along content for young children, then turned a single catchy song into a worldwide multimedia franchise spanning video, music, apps, live shows, licensing, and merchandise.

The brand's positioning, stated plainly on its consumer site, is a "전 세계가 사랑하는 패밀리 IP" — a family IP loved around the world. That framing matters: Pinkfong is not marketed as a children's-only product but as shared family entertainment, content that parents and kids enjoy together. The company has expanded the original Pinkfong/Baby Shark universe into a portfolio of distinct character IPs — Bebefinn (베베핀), the Dino series (다이노링스), and newer properties — each given its own vivid color world and personality.

What the design refuses, visible in its system: the chaotic, over-decorated clutter of much children's media (no rainbow-vomit gradients, no clashing comic chrome), and the cold institutionalism of corporate entertainment. What it embraces: one disciplined signature pink that means "Pinkfong," a calm modern product chassis (clean Pretendard type, flat surfaces, generous whitespace), and per-character saturated color as the place where joy is allowed to be loud. The result is a system that scales across a growing IP portfolio while staying unmistakably, friendly-confidently Pinkfong.

## 12. Principles

1. **One pink, many worlds.** The signature pink (`#ff66af`) is the constant that ties the franchise together; each character IP gets its own vivid palette. *UI implication:* reserve `#ff66af` for the brand-level accent (CTA, badge, eyebrow) and let character panels own the saturated color.
2. **Joy is loud, chrome is calm.** Energy belongs to the IP color; structure stays quiet. *UI implication:* vivid full-bleed character panels against clean white chrome with generous whitespace — never both loud at once.
3. **Family-inclusive, never condescending.** Content is for "온 가족," not just kids. *UI implication:* clean, readable type and grown-up product patterns; warmth comes from color and roundness, not baby-talk.
4. **Soft geometry everywhere.** No sharp corner on an interactive element. *UI implication:* pills (999px), rounded blocks (24px), rounded nav (12px) — roundness signals friendliness.
5. **Flat and fast.** Modern product clarity beats decorative depth. *UI implication:* no shadows; separate with tint (`#ffe0ef`, `#f0f2f5`) and the `#e5e8eb` hairline; keep the page light and quick to scan.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Pinkfong audiences (parents of preschoolers, the children themselves, and IP/licensing partners), not individual people.*

**김서연, 34, 서울.** Mother of a 3-year-old who watches Baby Shark daily. Browses the Pinkfong site to find new content and merchandise. Trusts the brand because it feels safe, friendly, and consistent — the same pink and the same calm layout everywhere reassures her it's a real, careful company.

**Ethan, 5, London.** Knows Pinkfong by its colors and characters, not its words. The vivid per-character panels (sky-blue shark, coral Bebefinn) are how he navigates — he points at the color world he wants before he can read the label.

**박지훈, 41, 경기.** A licensing/partnerships manager evaluating Pinkfong for a co-branded product. Reads the corporate site (`thepinkfongcompany.com`) for credibility. Values that the brand presents as a modern, global IP house — confident pink chrome, clear recruit and business surfaces — rather than a one-hit cartoon.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no content results)** | White canvas. Single ink (`#191f28`) line at body size explaining nothing matches, with one outline pill CTA to browse all. Friendly, uncluttered. |
| **Empty (saved/favorites, none yet)** | Muted Slate (`#8b95a1`) single line inviting the user to explore characters; a character-color illustration may anchor it. Warm, never scolding. |
| **Loading (content fetch)** | Skeleton cards at final dimensions, 24px radius, on `#f0f2f5` tint. Flat pulse — no shadow shimmer, consistent with the flat system. |
| **Loading (carousel)** | Inline placeholder cards keep the row's rhythm; previous content stays visible during refresh. |
| **Error (fetch failed)** | Inline message in ink (`#191f28`) with a plain, friendly explanation and a retry pill. No bare "오류가 발생했습니다" — say what to do next. |
| **Error (form validation)** | Field-level message below the input in a warm tone; describes what's valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation in calm tone; a pink (`#ff66af`) accent or check marks the moment. Celebratory but not noisy. |
| **Skeleton** | `#f0f2f5` blocks at final dimensions, 24px radius, flat pulse. |
| **Disabled** | Faint Blue-Grey (`#b0b8c1`) text on reduced-opacity surface; pink actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 240ms | Card/panel reveal, carousel slide, sheet |
| `motion-playful` | 360ms | Character panel entrance, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.7, 0.3, 1)` | Arriving — cards, panels, carousels (gentle overshoot-free settle) |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-playful` | `cubic-bezier(0.34, 1.3, 0.6, 1)` | Reserved character-panel pops — a touch of bounce where joy is allowed |

**Motion rules**: Motion is friendly and light — consistent with the bright, flat aesthetic. Pill CTAs and chips respond to press with a subtle scale/opacity shift; content cards and character panels fade-and-rise in at `motion-standard / ease-enter`. A small, controlled bounce (`ease-playful`) is permitted only on character-panel entrances — the one place the brand lets motion be as joyful as the color. Chrome (nav, CTAs) stays steady and overshoot-free so the product feels trustworthy to parents. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the playful bounce is removed; the product stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://www.pinkfong.com/ko (consumer): body Pretendard / color rgb(25,31,40) #191f28 / 16px;
  hero H2 "전 세계가 사랑하는 온 가족이 함께 즐기는 패밀리 IP" 64px/700/white;
  nav buttons rgb(78,89,104) #4e5968 / 16px / 600 / radius 12px;
  header chips white / rgb(78,89,104) / radius 999px / 1px solid rgb(229,232,235) #e5e8eb;
  pill CTA "캐릭터 소개 보기"/"더보기" white / #4e5968 / 999px / 0 24px / 56px;
  D-day badge "종료까지 D-198" bg rgb(255,102,175) #ff66af / white / 999px / 0 12px / 28px;
  eyebrow "MEET & PLAY" rgb(255,102,175) / 20px / 700; watermark NEW/CONTENTS rgba(255,102,175,.15/.4) / 120px;
  character panels — bg rgb(117,221,255) #75ddff, rgb(0,60,125) #003c7d, rgb(255,75,120) #ff4b78,
  rgb(255,241,170) #fff1aa, rgb(240,189,100) #f0bd64, rgb(157,239,248) #9deff8, rgb(162,98,243) #a262f3;
  soft-pink block bg rgb(255,224,239) #ffe0ef / radius 24px / padding 96px; box-shadow none across nav/cards/CTAs.
- https://www.thepinkfongcompany.com (corporate): body Spoqa Han Sans Neo / black;
  recruit CTA bg rgb(255,102,175) #ff66af / white / radius 32px / padding 32px 15px / 24px /
  box-shadow rgba(255,5,88,0.06) 0px 2px 0px 0px; "패밀리 사이트" pill white/radius 32px;
  default anchor rgb(22,119,255) #1677ff; surface rgb(240,242,245) #f0f2f5.

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Raw samples).

Voice samples (§10) are verbatim from the live consumer homepage (hero H2, character tags, D-day badge).

Brand narrative (§11): The Pinkfong Company (formerly SmartStudy), Seoul-based family-entertainment
company behind Pinkfong and "Baby Shark" (most-viewed YouTube video); founded 2010. These are widely
documented public facts about the company; the "전 세계가 사랑하는 패밀리 IP" framing is verbatim from
the live consumer site. Specific corporate-history details beyond the live surfaces are general public
knowledge, not directly quoted from a verified company statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Pinkfong audiences (parents of
preschoolers, children, IP/licensing partners). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one pink, many worlds", "joy is loud, chrome is calm" as a rejection of
over-decorated children's media) are editorial readings connecting Pinkfong's observed design to its
positioning, not directly sourced company statements.
-->
