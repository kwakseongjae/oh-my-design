---
id: neosapience
name: Neosapience
display_name_kr: 네오사피엔스
country: KR
category: ai
homepage: "https://neosapience.com"
primary_color: "#fe7e43"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=neosapience.com&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "Two-surface system. Corporate (neosapience.com): minimal flat Pretendard, deep-navy #09162d headings, orange accent #fe7e43, gray-900 #111827 body, no shadows. Product (typecast.ai): playful Plus Jakarta Sans display + Roboto UI, orange #f97316 pill CTAs, peach tints, large radii. primary = corporate brand orange #fe7e43."
  colors:
    primary: "#fe7e43"
    product-cta: "#f97316"
    amber: "#f7b500"
    ink: "#09162d"
    ink-product: "#262626"
    body: "#111827"
    nav: "#1f2937"
    body-product: "#404040"
    muted: "#4b5563"
    muted-alt: "#6b7280"
    canvas: "#ffffff"
    surface: "#f4f4f4"
    surface-alt: "#f9fafb"
    peach: "#ffe7d4"
    tab-active: "#ffc98f"
    tab-border: "#e5e5e5"
    ink-pure: "#000000"
  typography:
    family: { corporate: "Pretendard", product-display: "Plus Jakarta Sans", product-ui: "Roboto", product-fallback: "Spoqa Han Sans" }
    display-hero:    { size: 66, weight: 600, lineHeight: 1.06, use: "Typecast product hero, Plus Jakarta Sans" }
    section-product: { size: 48, weight: 700, lineHeight: 1.2, use: "Typecast section heads, Plus Jakarta Sans" }
    heading:         { size: 36, weight: 700, lineHeight: 1.25, use: "Corporate H1 / section heads, Pretendard" }
    lead:            { size: 18, weight: 500, lineHeight: 1.55, use: "Corporate hero lead paragraph, Pretendard" }
    nav:             { size: 16, weight: 500, lineHeight: 1.5, use: "Corporate nav links, Pretendard" }
    body:            { size: 16, weight: 400, lineHeight: 1.5, use: "Body copy, Pretendard" }
    button:          { size: 18, weight: 700, lineHeight: 1.0, use: "Typecast primary CTA label, Roboto" }
    caption:         { size: 14, weight: 400, lineHeight: 1.5, use: "Chip labels, metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 30, s40: 40, s48: 48, section: 64 }
  rounded: { nav: 6, tab: 8, card: 12, lg: 16, xl: 24, card-product: 30, full: 9999 }
  shadow:
    none: "none"
    product-soft: "rgba(0,0,0,0.06) 0px 4px 16px"
  components:
    cta-primary: { type: button, bg: "#f97316", fg: "#ffffff", radius: "9999px", padding: "10px 30px", height: "60px", font: "18px / 700 Roboto", use: "Typecast primary CTA — TRY FOR FREE" }
    cta-inline: { type: button, bg: "#f97316", fg: "#ffffff", radius: "9999px", padding: "10px 20px", height: "44px", font: "16px / 700 Roboto", use: "Inline product CTA — Try me" }
    nav-link: { type: tab, fg: "#1f2937", radius: "6px", padding: "8px 16px", font: "16px / 500 Pretendard", active: "orange #fe7e43 text", use: "Corporate top-nav item (About, Mission, Careers)" }
    feature-tab: { type: tab, fg: "#404040", radius: "8px", border: "2px solid #ffc98f", active: "text #404040 + 2px border #ffc98f", disabled: "#e5e5e5 border", use: "Typecast feature segmented control (Text-to-Speech / Voice Cloning)" }
    emotion-chip: { type: badge, bg: "#ffffff", fg: "#262626", radius: "9999px", padding: "0px 20px 0px 12px", height: "40px", font: "16px / 400 Roboto", use: "Emotion preset pill (Happy, Sad, Angry, Whisper)" }
    usecase-card: { type: card, bg: "#ffffff", radius: "30px", padding: "20px 30px", height: "64px", use: "Typecast use-case selector card with product-soft shadow" }
    corporate-card: { type: card, bg: "#f4f4f4", fg: "#111827", radius: "12px", use: "Corporate content card, flat (no shadow)" }
    research-item: { type: listItem, fg: "#111827", border: "1px solid #000000", height: "62px", use: "Research paper list row, sharp-edge outline" }
  components_harvested: true
---

# Design System Inspiration of Neosapience

## 1. Visual Theme & Atmosphere

Neosapience (네오사피엔스) is the Korean generative-AI lab behind Typecast — emotionally expressive text-to-speech, voice cloning, and AI-avatar synthesis. Its identity lives across two deliberately different surfaces, and the split is the whole story. The corporate site (`neosapience.com`) is a calm, research-grade white room: a pure white canvas (`#ffffff`) with deep-navy headings (`#09162d`), Tailwind gray-900 body text (`#111827`), and a single warm orange accent (`#fe7e43`) used sparingly. There are essentially no shadows — separation comes from soft grey surfaces (`#f4f4f4`, `#f9fafb`) and the occasional thin outline. The register is academic and trustworthy: this is the face the company shows to investors, researchers, and recruits, and it reads like a well-typeset paper.

The product surface (`typecast.ai`) is the opposite mood — playful, consumer, and saturated. The hero runs **Plus Jakarta Sans** at 66px weight 600 in near-black (`#262626`), CTAs are full-pill orange (`#f97316`) in **Roboto** weight 700, and the page is dotted with emotion-preset chips, peach tints (`#ffe7d4`), and a gold-amber secondary accent (`#f7b500`). Body copy drops to a softer grey (`#404040`). Where the corporate site whispers, the product shouts a friendly invitation to "TRY FOR FREE." Both surfaces share **Pretendard** as the underlying body font (with `Spoqa Han Sans` fallback on the product), which keeps Korean and Latin text cohesive across the two worlds.

What unifies the two systems is a shared warm-orange spine and a hangul-first typographic discipline. The corporate orange (`#fe7e43`) and the product CTA orange (`#f97316`) are siblings — both signal "the action / the brand" — and they keep an otherwise neutral palette (navy `#09162d`, nav grey `#1f2937`, muted `#4b5563` and `#6b7280`, pure black `#000000` for the sharp-edged research list, tab border `#e5e5e5`, active tab `#ffc98f`) feeling human rather than clinical. The result is a brand that can be both a serious AI research house and an approachable creator tool without either voice undermining the other.

**Key Characteristics:**
- Two-surface split: minimal-flat corporate (`neosapience.com`) vs. playful-saturated product (`typecast.ai`)
- Shared warm-orange spine — corporate `#fe7e43`, product CTA `#f97316`
- Pretendard as the cross-surface body font; Plus Jakarta Sans (display) + Roboto (UI) on the product
- Deep-navy `#09162d` corporate headings; near-black `#262626` product headings — never pure black for headings
- Flat corporate depth: no shadows, grey surfaces (`#f4f4f4`, `#f9fafb`) and outlines do the separating
- Full-pill geometry on product CTAs (9999px) and emotion chips; conservative 6–12px radii on corporate chrome
- Peach (`#ffe7d4`) and amber (`#f7b500`) tints add warmth on the product surface only

## 2. Color Palette & Roles

### Brand & Accent
- **Neosapience Orange** (`#fe7e43`): The corporate brand accent and `primary_color`. Used sparingly on `neosapience.com` for highlights and active states — the single warm hue in an otherwise neutral research palette.
- **Typecast CTA Orange** (`#f97316`): The product's primary action color — every "TRY FOR FREE" / "Try me" pill on `typecast.ai`. A sibling of the corporate orange, slightly more saturated.
- **Amber Gold** (`#f7b500`): Secondary accent on the product surface — highlight ticks, decorative emphasis.
- **Peach Tint** (`#ffe7d4`): Soft warm background wash behind product feature blocks and chips.

### Ink & Text
- **Ink Navy** (`#09162d`): Corporate heading color — a deep blue-black for H1/section heads, carrying research-grade weight without harshness.
- **Product Ink** (`#262626`): Near-black for Typecast product headings and chip labels.
- **Body Gray** (`#111827`): Tailwind gray-900, the corporate body / default text color.
- **Nav Gray** (`#1f2937`): Tailwind gray-800, used for corporate nav links.
- **Product Body** (`#404040`): Softer grey for Typecast product body copy.
- **Muted** (`#4b5563`): Tailwind gray-600, secondary text and captions.
- **Muted Alt** (`#6b7280`): Tailwind gray-500, lowest-emphasis labels and metadata.
- **Pure Black** (`#000000`): Maximum-contrast outline on the sharp-edged research-paper list rows.

### Surface & Border
- **Pure White** (`#ffffff`): Page background and card surfaces on both sites.
- **Surface Grey** (`#f4f4f4`): Corporate content-card / panel background.
- **Surface Alt** (`#f9fafb`): Tailwind gray-50, alternating section background.
- **Tab Active** (`#ffc98f`): The 2px border on the active Typecast feature tab — a peach-orange outline.
- **Tab Border** (`#e5e5e5`): The 2px border on inactive Typecast feature tabs.

## 3. Typography Rules

### Font Family
- **Corporate**: `Pretendard` (with `Pretendard Fallback`) — all corporate headings, nav, and body on `neosapience.com`.
- **Product Display**: `Plus Jakarta Sans` — Typecast hero and section headlines.
- **Product UI**: `Roboto` — Typecast buttons, chips, and interactive labels.
- **Product Body / Fallback**: `Pretendard`, then `Spoqa Han Sans` — Typecast paragraph text and the Korean fallback.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Surface | Notes |
|------|------|------|--------|-------------|---------|-------|
| Product Hero | Plus Jakarta Sans | 66px (4.13rem) | 600 | 1.06 | typecast.ai | "The world's most expressive AI voice" |
| Product Section | Plus Jakarta Sans | 48px (3.00rem) | 700 | 1.2 | typecast.ai | "What are you making?" |
| Corporate Heading | Pretendard | 36px (2.25rem) | 700 | 1.25 | neosapience.com | H1 / section heads |
| Corporate Lead | Pretendard | 18px (1.13rem) | 500 | 1.55 | neosapience.com | Hero lead paragraph |
| Nav Link | Pretendard | 16px (1.00rem) | 500 | 1.5 | neosapience.com | Top-nav items |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.5 | both | Standard reading text |
| Button | Roboto | 18px (1.13rem) | 700 | 1.0 | typecast.ai | Primary CTA label |
| Caption / Chip | Roboto / Pretendard | 14–16px | 400 | 1.5 | both | Chip labels, metadata |

### Principles
- **One font per job, per surface**: Pretendard owns the corporate voice; Plus Jakarta Sans persuades and Roboto operates on the product. They never swap roles across surfaces.
- **Heavy display, light body**: Headlines run 600–700; body and nav sit at 400–500. The weight jump is the primary hierarchy signal.
- **Hangul-first sizing**: Body sits at a deliberate 16px / line-height 1.5 — generous for hangul legibility while staying dense enough for information-rich research and product layouts.
- **Headings are never pure black**: corporate uses navy `#09162d`, product uses near-black `#262626` — warmth over absolute contrast.

## 4. Component Stylings

### Buttons

**Typecast Primary CTA (TRY FOR FREE)**
- Background: `#f97316`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 10px 30px
- Height: 60px
- Font: 18px Roboto weight 700
- Use: Product primary action — "TRY FOR FREE" in the Typecast hero

**Typecast Inline CTA (Try me)**
- Background: `#f97316`
- Text: `#ffffff`
- Radius: 9999px
- Padding: 10px 20px
- Height: 44px
- Font: 16px Roboto weight 700
- Use: Inline "Try me" CTAs beside product demos

### Inputs & Controls

**Feature Tab (segmented)**
- Text: `#404040`
- Radius: 8px
- Border: 2px solid `#ffc98f`
- Padding: 4px 20px 4px 16px
- Height: 40px
- Font: 16px Roboto weight 500
- Active: 2px solid `#ffc98f` border
- Disabled: 2px solid `#e5e5e5` border (inactive)
- Use: Typecast feature switcher ("Text-to-Speech", "Smart Emotion", "Voice Cloning")

### Cards & Containers

**Use-case Card**
- Background: `#ffffff`
- Radius: 30px
- Padding: 20px 30px
- Height: 64px
- Shadow: `rgba(0,0,0,0.06) 0px 4px 16px`
- Use: Typecast use-case selector cards ("Kid", "TikTok")

**Corporate Content Card**
- Background: `#f4f4f4`
- Text: `#111827`
- Radius: 12px
- Use: Corporate panel / content card on neosapience.com — flat, no shadow

### Badges

**Emotion Preset Chip**
- Background: `#ffffff`
- Text: `#262626`
- Radius: 9999px
- Padding: 0px 20px 0px 12px
- Height: 40px
- Font: 16px Roboto weight 400
- Use: Emotion-preset pills on the Typecast hero ("Happy · Paige", "Sad · Nia", "Angry · Riley", "Whisper · Chad")

### List Items

**Research Paper Row**
- Text: `#111827`
- Border: 1px solid `#000000`
- Height: 62px
- Padding: 16px
- Radius: 0px (sharp-edged)
- Use: Publication list rows on neosapience.com — date + paper title, distinct sharp-cornered outline

### Navigation
- Background: `#ffffff`
- Text: `#1f2937`
- Font: 16px Pretendard weight 500
- Radius: 6px (hover pill)
- Padding: 8px 16px
- Active: orange `#fe7e43` text
- Use: Corporate top nav ("About", "Mission", "Our tech", "Research", "Careers")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://neosapience.com, https://company.typecast.ai/ko/, https://typecast.ai/
**Tier 2 sources:** getdesign.md/neosapience — not listed; getdesign.md/typecast — not listed; styles.refero.design — no brand-specific entry for neosapience/typecast (default browse only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 30px, 40px, 48px, 64px
- Notable: corporate hero blocks use large 32–40px vertical padding; product CTA pills use 10px vertical / 20–30px horizontal padding

### Grid & Container
- Corporate: centered single-column with a 36px Pretendard headline anchor; max content ~1050px; large grey panels (`#f4f4f4`, 12px radius) frame media
- Product: multi-section marketing flow — hero with pill CTA, feature segmented tabs, emotion-chip row, use-case card grid
- Research: vertical list of sharp-edged outlined rows (date + title)

### Whitespace Philosophy
- **Corporate calm**: generous vertical rhythm, airy white space, minimal chrome — a research-paper cadence
- **Product energy**: denser, chip-and-card rich, warm tints fill negative space to feel inviting
- **Flat corporate segmentation**: sections separate by grey surface (`#f4f4f4` / `#f9fafb`) rather than elevation

### Border Radius Scale
- Nav hover (6px): corporate nav pills
- Tab (8px): product feature segmented control
- Card (12px): corporate content panels
- Large (16–24px): product media blocks
- Product card (30px): use-case selector cards
- Full (9999px): product CTAs and emotion chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Corporate surfaces, headings, most chrome |
| Tint (Level 1) | `#f4f4f4` / `#f9fafb` background shift | Corporate card/section separation without elevation |
| Soft (Level 2) | `rgba(0,0,0,0.06) 0px 4px 16px` | Product use-case cards on typecast.ai |

**Shadow Philosophy**: The corporate surface is essentially shadowless — live inspection found `box-shadow: none` across the hero, nav, headings, and content panels, with depth conveyed entirely through flat grey surfaces and outlines. This keeps the research face clean and serious. The product surface introduces a single soft shadow on its rounded use-case cards to make them feel tappable and friendly, but never the heavy stacked-card look of legacy apps. Emphasis, when needed, comes from the orange accent (`#fe7e43` / `#f97316`) or warm tints (`#ffe7d4`), not elevation.

## 7. Do's and Don'ts

### Do
- Keep the corporate surface flat and minimal — Pretendard, navy `#09162d` headings, white canvas, no shadows
- Reserve orange (`#fe7e43` corporate, `#f97316` product) for brand accents and primary actions
- Use Plus Jakarta Sans for product display headlines and Roboto weight 700 for product CTA labels
- Use full-pill geometry (9999px) for product CTAs and emotion chips
- Separate corporate sections with grey surfaces (`#f4f4f4`, `#f9fafb`) and thin outlines, not shadows
- Use near-black headings (navy `#09162d` corporate, `#262626` product) instead of pure black
- Let the product surface carry the warmth — peach (`#ffe7d4`) and amber (`#f7b500`) tints belong on typecast.ai
- Use Pretendard as the shared body font so Korean and Latin text stays cohesive across surfaces

### Don't
- Don't bring product saturation (peach tints, big pills) onto the calm corporate research surface
- Don't spread orange across many elements — it should mark the brand / the action, not decorate everything
- Don't use heavy drop shadows on the corporate surface — it is a flat, outline-based system
- Don't set product CTAs in anything but the orange pill — `#f97316`, 9999px radius, Roboto 700
- Don't use pure black (`#000000`) for headings or body — reserve it for the sharp-edged research list outline
- Don't mix Plus Jakarta Sans into the corporate surface — Pretendard owns the corporate voice
- Don't add a second saturated hue beyond the orange family — amber (`#f7b500`) is a tint accent, not a competing brand color
- Don't use sharp square corners on product chrome — product geometry is pills and large radii

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; corporate headline compresses; product chips wrap/scroll |
| Tablet | 640–1024px | Moderate padding; 2-up product feature cards |
| Desktop | 1024–1440px | Full layout; centered corporate hero; multi-column product sections |

### Touch Targets
- Product primary CTA at 60px height, full pill — an unmistakable target
- Inline "Try me" CTAs at 44px height — meets the comfortable tap minimum
- Emotion chips and feature tabs at 40px height with generous horizontal padding

### Collapsing Strategy
- Corporate hero: 36px Pretendard headline scales down on mobile, weight 700 maintained
- Product hero: 66px Plus Jakarta Sans compresses on smaller viewports
- Emotion-chip row and feature tabs: horizontal wrap/scroll on narrow screens
- Research list: full-width sharp-edged rows stack vertically

### Image Behavior
- Corporate media sits inside flat grey panels (`#f4f4f4`, 12px radius), no shadow at any size
- Product use-case cards keep their 30px radius and soft shadow across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Corporate accent: Neosapience Orange (`#fe7e43`)
- Product CTA: Typecast Orange (`#f97316`)
- Amber accent: (`#f7b500`)
- Corporate heading: Ink Navy (`#09162d`)
- Product heading: Product Ink (`#262626`)
- Body text: Gray-900 (`#111827`) corporate / `#404040` product
- Nav text: Gray-800 (`#1f2937`)
- Muted text: (`#4b5563`), (`#6b7280`)
- Canvas: Pure White (`#ffffff`)
- Surfaces: (`#f4f4f4`), (`#f9fafb`)
- Tints: Peach (`#ffe7d4`)

### Example Component Prompts
- "Create a corporate research hero on white. Headline 36px Pretendard weight 700, color #09162d. Lead paragraph 18px Pretendard weight 500. Nav links 16px Pretendard weight 500, #1f2937, orange #fe7e43 on active. No shadows."
- "Build a Typecast product hero. Headline 66px Plus Jakarta Sans weight 600, color #262626. Primary CTA: #f97316 background, white text, 9999px radius, 10px 30px padding, 18px Roboto weight 700 — 'TRY FOR FREE'."
- "Design an emotion-chip row: white pills, #262626 text, 9999px radius, 0px 20px 0px 12px padding, 40px height, 16px Roboto — 'Happy · Paige', 'Sad · Nia', 'Angry · Riley'."
- "Make a feature segmented control: #404040 text, 8px radius, 2px solid #ffc98f border on active / #e5e5e5 on inactive, 4px 20px 4px 16px padding — 'Text-to-Speech', 'Voice Cloning'."
- "Create a corporate content card: #f4f4f4 background, 12px radius, no shadow, #111827 text."

### Iteration Guide
1. Decide the surface first — calm corporate (Pretendard, flat, navy) vs. playful product (Plus Jakarta Sans + Roboto, pills, orange)
2. Orange is the action / brand color — `#fe7e43` corporate, `#f97316` product; don't spread it
3. No shadows on corporate; one soft shadow on product cards
4. Pills (9999px) for product CTAs and chips; 6–12px radii for corporate chrome
5. Headings are navy `#09162d` or near-black `#262626`, never pure black
6. Pretendard carries body on both surfaces for Korean/Latin cohesion
7. Peach `#ffe7d4` and amber `#f7b500` warmth stays on the product surface

---

## 10. Voice & Tone

Neosapience speaks in two registers that mirror its two surfaces. The corporate voice is **measured, research-forward, and mission-driven** — the homepage hero reads "We invent the future of creativity with AI" and the about copy positions the company as "an AI startup at the forefront" of generative voice and avatar synthesis. The product voice (Typecast) is **warm, inviting, and creator-friendly** — "The world's most expressive AI voice," "What are you making? Let's bring it to life," "TRY FOR FREE." The shared thread is confidence without hype: the corporate side earns trust through research credibility (a long, dated list of published papers), and the product side earns it through an immediate, low-friction invitation to try.

| Context | Tone |
|---|---|
| Corporate hero | Mission-framed, declarative. "We invent the future of creativity with AI." |
| Corporate about | Research-forward, credible. Positions the company at the AI frontier. |
| Research list | Factual, dated, technical. Paper titles stated plainly with publication dates. |
| Product hero | Confident, expressive. "The world's most expressive AI voice." |
| Product CTAs | Direct, inviting, low-pressure. "TRY FOR FREE", "Try me". |
| Product feature copy | Benefit-first, creator-centric. "What are you making? Let's bring it to life." |

**Voice samples (verbatim from live surfaces):**
- "We invent the future of creativity with AI" — neosapience.com section heading *(verified live 2026-06-26)*
- "The world's most expressive AI voice" — typecast.ai hero H1 *(verified live 2026-06-26)*
- "What are you making? Let's bring it to life" — typecast.ai section H2 *(verified live 2026-06-26)*
- "TRY FOR FREE" — typecast.ai primary CTA *(verified live 2026-06-26)*

**Forbidden register**: aggressive sales urgency, fear-based pitches, undefined hype superlatives on the corporate surface, and any tone that makes the research face feel like a sales funnel.

## 11. Brand Narrative

Neosapience (네오사피엔스) is a Korean generative-AI company founded in **2017** by **김태수 (Taesu Kim, CEO)**, an engineer-researcher who set out to give synthetic speech genuine emotion — not just intelligible words, but the expressive prosody that makes a voice feel human. The company's research lineage is visible directly on its homepage: a long, dated publication list stretching back to 2018 covering emotional TTS, voice cloning, diffusion-based speech synthesis (Diff-TTS, EdiTTS), singing synthesis (MLP Singer), and face reenactment — the building blocks of expressive multimodal content generation.

That research matured into **Typecast**, the company's flagship product: a content-creation platform where creators type text and get emotionally expressive AI voiceovers and AI-avatar video. The product's underlying model, **Typecast SSFM** ("controllable speech/video synthesis"), is the commercial expression of the lab's papers on cross-speaker emotion transfer and prompt-controllable expressive TTS. The two-surface brand — austere research house, friendly creator tool — is intentional: the corporate site speaks to investors, researchers, and recruits; Typecast speaks to millions of creators.

What Neosapience refuses, visible in its design: the cold, clinical aesthetic of enterprise AI (no dark-mode-terminal posturing, no generic blue-gradient "AI" clichés) on the corporate side, and the intimidating complexity of pro audio tools on the product side. What it embraces: a warm orange spine that humanizes the technology, a research-grade calm that signals rigor, and a product surface that makes a deeply technical capability feel as simple as picking an emotion and pressing "Try me."

## 12. Principles

1. **Emotion is the product.** The company's reason to exist is expressive, emotional synthetic voice — not merely intelligible TTS. *UI implication:* the product surfaces emotion presets (Happy, Sad, Angry, Whisper) as first-class, tappable chips.
2. **Research credibility, plainly shown.** A dated publication list is a design element, not a hidden CV. *UI implication:* the corporate research list is sharp-edged and factual — dates and titles, no decoration.
3. **Two faces, one spine.** The serious research house and the friendly creator tool are different moods unified by the warm orange. *UI implication:* keep surfaces tonally distinct but always carry the orange action/brand color.
4. **Warm, not clinical.** AI does not have to look cold. *UI implication:* orange accents, peach tints, and near-black (not pure black) headings keep the technology human.
5. **Low-friction invitation.** The path from "curious" to "trying it" is one pill. *UI implication:* the product primary CTA is unmistakable — a 60px orange pill that says "TRY FOR FREE".

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Neosapience / Typecast user and stakeholder segments (creators using AI voice, ML researchers, and recruits), not individual people.*

**박지호, 28, 서울.** A YouTube creator who uses Typecast to generate emotionally expressive narration without hiring voice actors. Picks an emotion preset, types his script, and presses "Try me". Values that the tool feels playful and immediate rather than like pro audio software.

**Elena Marquez, 34, Madrid.** An e-learning producer localizing courses into multiple languages. Relies on Typecast's voice cloning and smart-emotion controls to keep a consistent narrator across modules. Trusts the product because the company's research credentials are public and dated.

**김태현, 31, 대전.** A speech-ML researcher evaluating whether to join Neosapience. Reads the publication list on neosapience.com end to end — the dated papers on diffusion TTS and cross-speaker emotion transfer are what convince him the lab is serious. Responds to the calm, research-grade corporate surface, not marketing gloss.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no projects yet, product)** | White canvas. Single near-black (`#262626`) line inviting the first project, with one orange (`#f97316`) pill CTA. No clutter. |
| **Empty (no search results)** | Muted (`#6b7280`) single line; a path back to browse. Calm, honest. |
| **Loading (voice synthesis)** | Inline progress within the active control; emotion chips stay visible. No blocking overlay. |
| **Loading (page first paint)** | Skeleton blocks at final dimensions on grey surface (`#f4f4f4`); corporate side stays shadow-free. |
| **Error (synthesis failed)** | Inline message in body color with a plain-language explanation and retry — never a bare generic error. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "required". |
| **Success (export ready)** | Brief inline confirmation in calm tone; download/next-step linked immediately below. No celebratory emoji. |
| **Disabled** | Muted (`#6b7280`) text on reduced-opacity surface; orange actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, tab switch, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, chips, sheets |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet on the corporate surface and slightly more playful on the product. Emotion chips and feature tabs respond to press with a subtle scale/opacity shift; product cards and sections fade-in from below at `motion-standard / ease-enter`. The corporate research surface keeps motion to near-instant functional transitions, consistent with its flat, calm aesthetic. No bounce or heavy spring — an AI research company signals steadiness, and the product stays inviting without being gimmicky. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; both surfaces remain fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle:
- https://neosapience.com (corporate, EN) — body Pretendard rgb(17,24,39) #111827; H1/section 36px/700 rgb(9,22,45) #09162d; nav links rgb(31,41,55) #1f2937 16px/500 radius 6px; research list rows border 1px solid #000000 padding 16px h62; orange accent rgb(254,126,67) #fe7e43; surfaces #f4f4f4 / #f9fafb; box-shadow none; corporate card bg #f4f4f4 radius 12px.
- https://company.typecast.ai/ko/ (corporate, KO mirror) — identical system; title "네오사피엔스 - 자연스러운 감정이 담긴 음성 인공지능 기술과 가상인간를 통한 생성형 AI 콘텐츠 제작 플랫폼"; H1 "네오사피엔스 소개".
- https://typecast.ai/ (product) — hero H1 66px/600 Plus Jakarta Sans rgb(38,38,38) #262626; primary CTA "TRY FOR FREE" bg rgb(249,115,22) #f97316 radius 9999px padding 10px 30px h60 18px/700 Roboto; emotion chips radius 9999px #262626; feature tabs border 2px #ffc98f active / #e5e5e5 inactive radius 8px; use-case cards radius 30px white with soft shadow; tints #ffe7d4, amber #f7b500; body #404040.

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live surfaces (corporate section heading, product hero H1/H2, product CTA).

Brand narrative (§11): Neosapience (네오사피엔스), Korean generative-AI company, founder/CEO
김태수 (Taesu Kim), product Typecast; founding ~2017. The dated research-paper list is
observed live on neosapience.com. Specific founding details beyond the homepage are
widely documented public knowledge, not directly quoted from a verified company statement
in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Typecast/Neosapience
user and stakeholder segments. Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "two faces, one spine", "warm, not clinical") are editorial
readings connecting Neosapience's observed two-surface design to its positioning, not
directly sourced company statements.
-->
