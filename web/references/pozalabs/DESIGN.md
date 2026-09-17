---
id: pozalabs
name: POZAlabs
display_name_kr: 포자랩스
country: KR
category: ai
homepage: "https://www.pozalabs.com/"
primary_color: "#aba1fa"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=pozalabs.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "Two-surface system. Corporate pozalabs.com is monochrome (black #000000 on white #ffffff, oversized Garet display). Product musia.ai carries the purple identity: signature periwinkle #aba1fa accent + saturated violet #6242e1, deep purple-ink surfaces (#030112 / #150e2d / #201d30 / #090719), grey inactive chips #cecdd5, big pill geometry."
  colors:
    primary: "#aba1fa"
    violet: "#6242e1"
    ink: "#030112"
    ink-deep: "#150e2d"
    surface-dark: "#201d30"
    surface-darkest: "#090719"
    black: "#000000"
    canvas: "#ffffff"
    chip-muted: "#cecdd5"
    surface-light: "#eeedf2"
    muted: "#9f9daa"
    hairline: "#eeeeee"
  typography:
    family: { display: "Garet", ui: "Inter", kr: "Pretendard", body: "Source Sans Pro", serif: "Sanchez", mono: "Hack" }
    display-hero: { size: 130, weight: 400, lineHeight: 1.22, use: "Corporate hero headline, Garet — 'Ignite your creativity'" }
    heading-lg:   { size: 24, weight: 700, use: "Product feature + CTA labels, Inter bold" }
    nav-ui:       { size: 18, weight: 400, tracking: 0.99, use: "MUSIA product nav links, Inter (uppercase, wide tracking)" }
    nav-corp:     { size: 16, weight: 400, use: "Corporate nav items, Garet" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Body / paragraph text, Source Sans Pro + Noto Sans KR" }
    caption:      { size: 12, weight: 700, tracking: 0.06, use: "Language selector / small uppercase labels, Inter" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, chip: 28, cta: 40, section: 64 }
  rounded: { sm: 8, md: 20, lg: 28, xl: 40, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: "20px", height: "72px", font: "24px / 700 Inter", use: "Primary CTA — 'TRY FOR FREE' on light hero" }
    button-invert: { type: button, bg: "#ffffff", fg: "#150e2d", radius: "20px", padding: "16px 40px", height: "68px", font: "24px / 700 Inter", use: "Inverted CTA on dark purple section" }
    chip-selected: { type: badge, bg: "#030112", fg: "#ffffff", radius: "28px", padding: "12px 28px", font: "24px / 700 Inter", use: "Selected segmented feature chip (Songwriting / Instrument / Download)" }
    chip-unselected: { type: badge, bg: "#cecdd5", fg: "#030112", radius: "28px", padding: "12px 28px", font: "24px / 700 Inter", use: "Unselected segmented feature chip" }
    lang-button: { type: button, fg: "#aba1fa", border: "3px solid #aba1fa", radius: "8px", padding: "11px 16px", height: "40px", font: "12px / 700 Inter", use: "Language selector outline button (ENGLISH)" }
    nav-link: { type: tab, fg: "#ffffff", font: "18px / 400 Inter", active: "text #ffffff (inactive links at 50% white)", use: "MUSIA product top nav (PRODUCTS / PRICING / CONTENTS / SUPPORT)" }
    input-search: { type: input, fg: "#333333", font: "14px Source Sans Pro", use: "Minimal inline text/search field — transparent, no visible chrome until focus" }
    card-canvas: { type: card, bg: "#ffffff", radius: "8px", use: "White content panel / product card" }
    card-dark: { type: card, bg: "#201d30", fg: "#ffffff", radius: "20px", use: "Dark purple feature card / immersive section block" }
    corp-nav-link: { type: listItem, fg: "#000000", font: "16px / 400 Garet", use: "Corporate site nav (About / Service / Research / Contact / Recruit)" }
  components_harvested: true
---

# Design System Inspiration of POZAlabs

## 1. Visual Theme & Atmosphere

POZAlabs (포자랩스) is Korea's leading generative-music AI company, and its design language lives in two deliberately different registers. The corporate site (`pozalabs.com`) is austere and gallery-like: a pure white canvas (`#ffffff`) carrying a single oversized Garet display headline in pure black (`#000000`) — "Ignite your creativity" set at roughly 129.6px, weight 400, with a 158px line-height that lets the words breathe like a museum wall label. Beneath it, a code-syntax tagline — `with pozalabs as technology: expand(your_creativity)` — is typeset in the Hack monospace face, signalling that this is an engineering house that treats creativity as something you can call like a function. The result reads as confident, artful, and unhurried: no gradients, no chrome, no shadow — just type, black, and white.

The product surface (`musia.ai`, the MUSIA AI-composition app) is where the brand's chromatic identity appears. Here the palette turns purple: a signature periwinkle (`#aba1fa`) is the pervasive accent — it colors links, the language selector, and every product wordmark (MUSIA ONE, MUSIA PLUGIN) — while a saturated violet (`#6242e1`) anchors accent blocks and gradients. The UI is built on deep purple-inks: near-black `#030112` for selected controls, a dark purple-ink `#150e2d` for text on inverted CTAs, and immersive dark sections in `#201d30` and `#090719`. Interactive chrome is unmistakably pill-shaped — segmented feature chips at 28px radius, primary CTAs at 20px — rendered in Inter/Pretendard at a bold 24px/700. The font stack shifts from the editorial Garet + Sanchez + Hack trio on the corporate site to a functional Inter + Pretendard + Source Sans Pro system in the app.

What unifies the two surfaces is restraint with depth. Both are essentially shadow-free — live inspection returned `box-shadow: none` across heroes, nav, and cards on both domains. Separation is achieved through flat contrast (black type on white, white chips on dark purple) and generous whitespace rather than elevation. The overall impression is of a company that is technically serious but creatively warm: the monochrome corporate face says "research lab," the periwinkle product face says "for creators," and the pill geometry keeps a professional AI tool from feeling intimidating.

**Key Characteristics:**
- Two-register system: monochrome black-on-white corporate site, periwinkle-purple MUSIA product
- Oversized Garet display headline (~130px, weight 400) as the corporate hero anchor
- Code-syntax tagline in Hack monospace — `expand(your_creativity)` — an engineering-house signature
- Signature periwinkle accent (`#aba1fa`) reserved for links, wordmarks, and the language selector
- Saturated violet (`#6242e1`) for accent blocks; deep purple-inks (`#030112`, `#150e2d`, `#201d30`, `#090719`) for surfaces
- Pill-everything product geometry — 28px feature chips, 20px CTAs, 8px small controls
- Bold Inter/Pretendard at 24px/700 for product feature labels; quiet Source Sans Pro body
- Flat, shadow-free depth on both surfaces — contrast and whitespace do the separating

## 2. Color Palette & Roles

### Primary & Brand
- **Periwinkle** (`#aba1fa`): The signature brand accent. The most pervasive color on the MUSIA product surface — links, product wordmarks, the language-selector outline, and active nav text. This is POZAlabs' "brand purple."
- **Saturated Violet** (`#6242e1`): Deeper, more saturated companion violet used for accent blocks, highlight fills, and gradient anchors.

### Ink & Dark Surfaces
- **Ink** (`#030112`): Near-black purple-tinted ink. Background of selected segmented chips and the darkest control fills; also primary body ink on the product.
- **Deep Purple-Ink** (`#150e2d`): A dark purple-black used for text on inverted (white) CTAs sitting inside dark sections.
- **Dark Surface** (`#201d30`): The workhorse dark section / feature-card background — a muted purple-charcoal.
- **Darkest** (`#090719`): The deepest immersive section background, near-black with a violet undertone.
- **Pure Black** (`#000000`): The corporate site's headline and body ink, and the fill of the light-hero primary CTA.

### Neutral & Surface
- **White** (`#ffffff`): Page background on both surfaces, text on dark/purple, and inverted-CTA fill.
- **Muted Chip Grey** (`#cecdd5`): Fill for unselected segmented chips — a cool light grey that recedes behind the ink-filled selected chip.
- **Light Surface** (`#eeedf2`): A soft off-white surface for alternating light panels and card grounds.
- **Hairline** (`#eeeeee`): Thin borders and dividers on light surfaces.
- **Muted Grey Text** (`#9f9daa`): Tertiary text, captions, and metadata on light backgrounds.

## 3. Typography Rules

### Font Family
- **Display (corporate)**: `Garet` — a geometric sans used for the oversized corporate hero headline and nav. Weight 400 even at display sizes, giving the black type an even, poster-like presence.
- **Editorial companions (corporate)**: `Sanchez` (a slab serif) and `Hack` (monospace, used for the `expand(your_creativity)` code-syntax tagline).
- **UI (product)**: `Inter` (with `Pretendard` as the Korean companion) — carries all MUSIA nav, buttons, and feature chips.
- **Body (product)**: `Source Sans Pro` with `Noto Sans KR` fallback — the document default for paragraph and reading text.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Notes |
|------|------|------|--------|-------------|----------|-------|
| Display Hero | Garet | ~130px (129.6px) | 400 | 158px (1.22) | normal | Corporate hero "Ignite your creativity" |
| Feature / CTA Label | Inter | 24px | 700 | normal | normal | Product chips + primary CTAs |
| Product Nav | Inter | 18px | 400 | 24px | 0.99px | MUSIA top nav, uppercase, wide tracking |
| Corporate Nav | Garet | 16px | 400 | 28px | normal | About / Service / Research / Contact |
| Body | Source Sans Pro | 16px | 400 | 24px (1.5) | normal | Paragraph / reading text |
| Caption / Language | Inter | 12px | 700 | normal | 0.06px | Language selector, small uppercase labels |

### Principles
- **Two type systems, two jobs**: Garet (plus Sanchez/Hack) is the editorial, brand-poster voice of the corporate site; Inter/Pretendard is the functional product voice. They never swap surfaces.
- **Display lives at weight 400**: The corporate hero does not shout with heavy weight — it uses sheer scale (~130px) and generous line-height instead. Boldness (700) is reserved for the product's 24px feature labels.
- **Uppercase + wide tracking for product nav**: MUSIA nav items are uppercase Inter at 18px with a deliberate 0.99px tracking, giving the app a crisp, technical header.
- **Monospace as a brand signal**: The Hack code-syntax tagline is a typographic statement of identity — music generation framed as a callable function.

## 4. Component Stylings

### Buttons

**Primary CTA (Light Hero)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 20px
- Height: 72px
- Font: 24px / 700 / Inter
- Use: Primary call-to-action on the light hero — "TRY FOR FREE"

**Inverted CTA (Dark Section)**
- Background: `#ffffff`
- Text: `#150e2d`
- Radius: 20px
- Padding: 16px 40px
- Height: 68px
- Font: 24px / 700 / Inter
- Use: "TRY FOR FREE" on a dark purple section — inverts to white fill

**Language Selector (Outline)**
- Text: `#aba1fa`
- Border: 3px solid `#aba1fa`
- Radius: 8px
- Padding: 11px 16px
- Height: 40px
- Font: 12px / 700 / Inter
- Use: Language toggle ("ENGLISH") — periwinkle outline button

### Inputs

**Inline Text / Search**
- Text: `#333333`
- Font: 14px Source Sans Pro
- Use: Minimal inline text/search field — transparent background, no visible chrome until focus (the marketing surface keeps form fields deliberately bare)

### Cards & Containers

**White Panel**
- Background: `#ffffff`
- Radius: 8px
- Use: White content panel / product card on light sections (shadow-free)

**Dark Feature Card**
- Background: `#201d30`
- Text: `#ffffff`
- Radius: 20px
- Use: Immersive dark purple feature card / section block

### Badges

**Selected Feature Chip**
- Background: `#030112`
- Text: `#ffffff`
- Radius: 28px
- Padding: 12px 28px
- Font: 24px / 700 / Inter
- Use: Selected segmented chip ("Songwriting", "AI Recommended Music", "Simple UI/UX")

**Unselected Feature Chip**
- Background: `#cecdd5`
- Text: `#030112`
- Radius: 28px
- Padding: 12px 28px
- Font: 24px / 700 / Inter
- Use: Unselected segmented chip in the same feature row

### Navigation

**Product Nav (MUSIA)**
- Background: transparent (over dark hero)
- Text: `#ffffff`
- Font: 18px / 400 / Inter
- Active: `#ffffff` text; inactive links at 50% white opacity
- Use: MUSIA top nav — "PRODUCTS", "PRICING", "CONTENTS", "SUPPORT"

**Corporate Nav**
- Text: `#000000`
- Font: 16px / 400 / Garet
- Use: Corporate site nav — "About", "Service", "Research", "Contact", "Recruit"

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.pozalabs.com/ (corporate, live computed style); https://musia.ai/ (MUSIA product, live computed style); https://blog.pozalabs.com/ (official brand blog)
**Tier 2 sources:** getdesign.md/pozalabs — SPA shell only, no brand tokens; styles.refero.design/?q=pozalabs — no genuine POZAlabs/MUSIA entry (search returns unrelated brands)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 28px, 40px, 64px
- Notable: Feature chips use 12px 28px padding; primary CTAs use 16px 40px — generous, tappable hit areas that keep the pill controls comfortable at 24px type

### Grid & Container
- Corporate: centered single-column, the ~130px Garet headline as the sole anchor with vast surrounding whitespace
- Product: alternating light and dark full-width bands; feature options presented as a horizontal row of segmented pill chips
- Dark immersive sections (`#201d30`, `#090719`) break up light content bands for rhythm
- Rounded section masks: the product hero uses a large bottom radius (up to 120px) to soften the transition between bands

### Whitespace Philosophy
- **Gallery over density**: the corporate site treats emptiness as content — the headline floats in negative space like a poster
- **Flat segmentation**: sections separate by background swap (white ↔ dark purple) and light-surface tint (`#eeedf2`), not by shadow
- **Pill rhythm**: the repeated 28px-radius chip creates a consistent horizontal cadence across feature/tool rows

### Border Radius Scale
- Small (8px): language selector, small white panels
- Medium (20px): primary and inverted CTAs
- Large (28px): segmented feature chips — the product workhorse
- XL (40px): larger media/cards
- Full (9999px): fully-round pills where used

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Almost everything — page bg, hero, nav, chips |
| Contrast (Level 1) | Background swap (white ↔ `#201d30` / `#090719`) | Section separation without elevation |
| Tint (Level 2) | `#eeedf2` light surface / `#eeeeee` hairline | Panel/card separation on light bands |

**Shadow Philosophy**: POZAlabs is a shadow-free system on both surfaces. Live inspection returned `box-shadow: none` across the corporate hero and nav and across the MUSIA product hero, chips, and cards. Depth is communicated entirely through flat contrast — pure black type on white, white chips on deep purple-ink (`#030112`), and immersive dark bands (`#201d30`, `#090719`) — plus generous whitespace. When emphasis is needed the system reaches for color (periwinkle `#aba1fa`, saturated violet `#6242e1`) or scale, never elevation. This keeps the AI tool feeling clean, fast, and modern rather than skeuomorphic.

## 7. Do's and Don'ts

### Do
- Keep the corporate face monochrome — black (`#000000`) type on white (`#ffffff`), no color
- Use oversized Garet at weight 400 for corporate display headlines — scale is the emphasis, not weight
- Reserve periwinkle (`#aba1fa`) as the product's signature accent — links, wordmarks, outlines
- Use pill geometry throughout the product — 28px chips, 20px CTAs, 8px small controls
- Build dark sections from the purple-ink family (`#030112`, `#201d30`, `#090719`), not neutral black
- Use bold Inter/Pretendard at 24px/700 for product feature labels
- Separate sections with flat contrast and `#eeedf2` tint, not shadows
- Keep the Hack monospace code-syntax voice for taglines — it signals the engineering identity

### Don't
- Introduce drop shadows for elevation — POZAlabs is flat on every surface
- Mix the corporate monochrome and product purple on the same surface — the registers stay separate
- Spread periwinkle across many product elements — it dilutes the single-accent signal
- Use heavy weights for the corporate display headline — Garet stays at weight 400
- Use neutral grey/black for dark sections — reach for the purple-ink family
- Use sharp square corners on product controls — chips and CTAs are pills
- Swap the font systems (Garet into the product, Inter into the corporate hero)
- Add a second saturated accent hue — violet is the only brand color

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; corporate headline scales down from ~130px; feature chips wrap/scroll |
| Tablet | 640-1024px | Moderate padding; 2-up feature layout |
| Desktop | 1024-1440px | Full layout, centered corporate hero, multi-band product page |

### Touch Targets
- Primary CTAs at 68-72px height, full pill — unmistakable targets
- Feature chips at 56px height with 12px 28px padding — comfortably tappable
- Language selector at 40px height with a 3px periwinkle outline

### Collapsing Strategy
- Corporate hero: Garet headline scales down on mobile, weight 400 maintained
- Product feature chip row: horizontal wrap/scroll on narrow viewports
- Light/dark alternating bands maintain full-width treatment
- Rounded section masks reduce their radius on smaller viewports

### Image Behavior
- Product screenshots and media sit in shadow-free cards at 8-20px radius across breakpoints
- Corporate imagery/animation carries no shadow, consistent with the flat system

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand accent: Periwinkle (`#aba1fa`)
- Saturated accent: Violet (`#6242e1`)
- Corporate ink / primary CTA: Pure Black (`#000000`)
- Product ink / selected chip: Ink (`#030112`)
- Dark section text-on-CTA: Deep Purple-Ink (`#150e2d`)
- Dark surfaces: `#201d30`, `#090719`
- Background: White (`#ffffff`)
- Light surface: `#eeedf2`
- Unselected chip: Muted Chip Grey (`#cecdd5`)
- Muted text: `#9f9daa`; Hairline: `#eeeeee`

### Example Component Prompts
- "Create a corporate hero on pure white. Single Garet headline at 130px weight 400, line-height 158px, pure black #000000: 'Ignite your creativity'. Below it a monospace (Hack) code-syntax tagline in black. Vast surrounding whitespace, no shadow."
- "Design a MUSIA feature selector: a horizontal row of pill chips at 28px radius, 12px 28px padding, 24px/700 Inter. Selected chip is #030112 background with white text; unselected chips are #cecdd5 background with #030112 text."
- "Build a primary CTA: black #000000 fill, white text, 20px radius, 24px/700 Inter, ~72px tall — 'TRY FOR FREE'. On a dark purple section, invert it: white #ffffff fill with #150e2d text, 16px 40px padding."
- "Create a dark feature section: #201d30 background, white text, 20px radius cards. Accent links and the language-selector outline in periwinkle #aba1fa (3px border, 8px radius)."

### Iteration Guide
1. Corporate = monochrome black/white + Garet; product = periwinkle purple + Inter/Pretendard. Keep them separate.
2. Periwinkle (`#aba1fa`) is the single product accent — don't spread it
3. No shadows — separate with contrast, `#eeedf2` tint, and whitespace
4. Pill geometry — 28px chips, 20px CTAs, 8px small controls
5. Dark sections come from the purple-ink family (`#030112`, `#201d30`, `#090719`), never neutral
6. Display headlines use scale (weight 400); product labels use weight 700
7. Keep the Hack monospace code-syntax voice for brand taglines

---

## 10. Voice & Tone

POZAlabs' voice is **creative, technologist, and quietly ambitious** — an engineering house that talks about music the way a developer talks about tools. The corporate headline "Ignite your creativity" and the code-syntax tagline `expand(your_creativity)` set the register: aspirational about human creativity, playful about the technology underneath, never hype-driven. On the product (MUSIA) the copy turns plain and functional — feature chips are labeled with concrete verbs and nouns ("Songwriting", "AI Recommended Music", "Simple UI/UX", "Web Based") — treating the creator as a maker who wants to get to work, not a lead to be closed.

| Context | Tone |
|---|---|
| Corporate hero | Aspirational, spare. "Ignite your creativity." Poster-like, never salesy. |
| Corporate tagline | Playful-technical code syntax: `with pozalabs as technology: expand(your_creativity)`. |
| Product feature labels | Plain and concrete. "Songwriting", "Instrument", "Download Sheet Music". |
| CTAs | Direct, low-pressure. "TRY FOR FREE", "See the Price Guide". |
| Newsroom / blog | Confident but factual — collaborations and research stated plainly, not spun. |

**Voice samples (verbatim from live surfaces):**
- "Ignite your creativity" — corporate hero headline (aspirational). *(verified live 2026-07-02, pozalabs.com)*
- "with pozalabs as technology: expand(your_creativity)" — corporate tagline in Hack monospace (technologist-playful). *(verified live 2026-07-02, pozalabs.com)*
- "TRY FOR FREE" — MUSIA primary CTA (direct, low-pressure). *(verified live 2026-07-02, musia.ai)*

**Forbidden register**: hype superlatives about "revolutionary AI", fear-of-missing-out urgency, undefined ML jargon left unexplained, exclamation-heavy marketing. The brand's confidence comes from spare type and real collaborations, not adjectives.

## 11. Brand Narrative

POZAlabs (포자랩스) was founded in **2018** in Seoul as an AI music-generation company, with **허원길 (Heo Won-gil)** as CEO. Its founding premise is captured in the homepage headline — to "ignite" and "expand" human creativity — by using generative models to make original, commercially usable music accessible to anyone, not just trained composers. The name and the code-syntax tagline (`expand(your_creativity)`) frame the mission as an engineering problem: creativity as a capability you can amplify with technology.

The company's flagship is **MUSIA** (`musia.ai`) — an AI composition platform spanning MUSIA ONE (a web app for generating royalty-free music) and MUSIA PLUGIN (a DAW plugin for producers). Around it POZAlabs runs **Poza Studio** for commercial music and sound production and **Viodio**, a background-music subscription aimed at creators and small businesses. The design system's two registers mirror this dual audience: the monochrome corporate site speaks to partners and press as a research lab, while the periwinkle MUSIA product speaks to creators as an approachable tool.

POZAlabs positions itself at the frontier of generative audio through visible, verifiable collaboration rather than marketing claims. Its official newsroom documents work with **Samsung, Google, and SM Entertainment** on aespa spatial-audio content powered by Eclipsa/IAMF audio technology at **CES 2025** (announced as a world-first application of IAMF technology to AI music generation), alongside commercial projects with partners such as Pinkfong ("Baby Shark") and major Korean construction and media brands. What the brand refuses, visible in its design: the busy, gradient-heavy chrome of typical AI startups (it stays flat and monochrome on the corporate face) and hype-driven copy (it lets scale, restraint, and real partnerships carry the message).

## 12. Principles

1. **Creativity is a capability to amplify.** The mission is to expand what people can make, not to replace them. *UI implication:* frame AI features as creator tools ("Songwriting", "Instrument"), keep the interface approachable with friendly pill controls.
2. **Two audiences, two registers.** A research lab for partners; an approachable tool for creators. *UI implication:* keep the corporate monochrome face and the periwinkle product face visually distinct — never blend them.
3. **Confidence through restraint.** Spare type and real collaborations, not superlatives. *UI implication:* oversized Garet headlines in negative space; no decorative shadow or gradient clutter.
4. **Flat and fast.** Modern, shadow-free surfaces signal a contemporary AI product. *UI implication:* separate with contrast and whitespace; reserve depth cues for color, not elevation.
5. **One accent, one signal.** Periwinkle (`#aba1fa`) means brand and action on the product. *UI implication:* reserve the accent for links, wordmarks, and key outlines so the identity reads instantly.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable POZAlabs / MUSIA user segments (indie video creators, music producers, small-business marketers, enterprise media partners), not individual people.*

**정하늘, 27, 서울.** A YouTube creator who needs royalty-free background music for weekly uploads. Uses MUSIA ONE to generate mood-matched tracks in minutes. Chose it because the pill-chip feature selector made composing feel like picking options, not learning a DAW.

**Marcus Lee, 34, Los Angeles.** An indie music producer who runs the MUSIA PLUGIN inside his DAW for quick idea starters and stems. Values that the tool feels professional and unfussy — bold labels, no gimmicks — and that outputs are commercially clearable.

**김서연, 41, 경기.** A marketing lead at a mid-size brand sourcing custom sound for campaigns through Poza Studio. Trusts POZAlabs because its newsroom shows real, named collaborations (CES, major partners) rather than vague AI promises.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no generated tracks yet)** | White canvas with a single Ink (`#030112`) line explaining nothing has been generated, and one dark primary CTA to start. No illustration clutter. |
| **Empty (saved list, none yet)** | Muted Grey (`#9f9daa`) single line: nothing saved yet, plus a path back to generation. Calm and honest. |
| **Loading (music generation)** | Inline progress within the active feature chip; the periwinkle accent (`#aba1fa`) carries the progress indicator. Previous selections stay visible. Flat pulse — no shadow shimmer. |
| **Loading (page/section)** | Skeleton blocks at final dimensions on `#eeedf2` light surface, 8-20px radius, flat pulse consistent with the shadowless system. |
| **Error (generation failed)** | Inline message in Ink (`#030112`) with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone — states the next step. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "required". |
| **Success (track generated / exported)** | Brief inline confirmation in calm tone; the result (play/download) appears immediately below. No celebratory emoji. |
| **Skeleton** | `#eeedf2` blocks at final dimensions, 8-20px radius, flat pulse. |
| **Disabled** | Muted Grey (`#9f9daa`) text on reduced-opacity surface; periwinkle actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Chip select, hover, focus |
| `motion-standard` | 220ms | Section/card reveal, band transition |
| `motion-slow` | 340ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, chips, sections |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is quiet and functional, consistent with the flat aesthetic. Segmented chips respond to selection with a subtle scale/opacity shift as the fill swaps from `#cecdd5` to `#030112`; content bands and cards fade-in from below at `motion-standard / ease-enter`. The rounded section masks (large bottom radii) reveal as bands scroll into view. No bounce or spring — a professional AI tool signals steadiness, not gimmickry. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle:
- https://www.pozalabs.com/ — corporate hero "Ignite your creativity" (Garet ~129.6px / weight 400 /
  line-height 158px / black rgb(0,0,0)); code-syntax tagline "with pozalabs as technology:
  expand(your_creativity)" (Hack monospace); nav items About/Service/Research/Contact/Recruit (Garet 16px);
  box-shadow none.
- https://musia.ai/ — MUSIA product. Nav PRODUCTS/PRICING/CONTENTS/SUPPORT (Inter 18px, active white,
  inactive rgba(255,255,255,0.5)); primary CTA "TRY FOR FREE" bg rgb(0,0,0) radius 20px 24px/700;
  inverted CTA bg rgb(255,255,255) text rgb(21,14,45) #150e2d 16px 40px; segmented chips selected
  bg rgb(3,1,18) #030112 / unselected bg rgb(206,205,213) #cecdd5, radius 28px, 12px 28px padding;
  language selector text+border rgb(171,161,250) #aba1fa 3px radius 8px; accent periwinkle #aba1fa 43×
  as foreground; saturated violet rgb(98,66,225) #6242e1 as bg block; dark surfaces rgb(32,29,48) #201d30,
  rgb(9,7,25) #090719; light surface rgb(238,237,242) #eeedf2; muted text rgb(159,157,170) #9f9daa;
  box-shadow none across hero/chips/cards.

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Proof block).

Voice samples (§10) are verbatim from the live surfaces (corporate hero + tagline; MUSIA CTA).

Brand narrative (§11): POZAlabs (포자랩스), founded 2018 in Seoul, AI music-generation company; CEO
허원길 (Heo Won-gil); products MUSIA ONE / MUSIA PLUGIN / Poza Studio / Viodio. The CES 2025
collaboration with Samsung, Google, and SM Entertainment on aespa spatial audio (Eclipsa/IAMF, announced
as a world-first IAMF application to AI music generation), Poza Studio launch, and Viodio are confirmed
via the official blog (blog.pozalabs.com) verified this turn. Founding year and CEO are widely documented
public facts, not directly quoted from a verified POZAlabs statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable POZAlabs/MUSIA user segments
(indie creators, producers, marketers, enterprise partners). Names are illustrative; they do not refer
to real people.

Interpretive claims (e.g., "two audiences, two registers", "confidence through restraint", "creativity as
a callable function") are editorial readings connecting POZAlabs' observed design to its positioning, not
directly sourced POZAlabs statements.
-->
