---
id: squeezebits
name: SqueezeBits
display_name_kr: 스퀴즈비츠
country: KR
category: ai
homepage: "https://www.squeezebits.com/"
primary_color: "#cc5a16"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=squeezebits.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "Two-surface system. primary = flagship marketing brand orange (#cc5a16 — banner / wordmark / View-more); primary-bright = brighter blog CTA-fill orange (#ee781f). Homepage is a dark immersive surface (Pretendard, near-black #060211/#050311/#000000). Blog is a light zinc surface (IBM Plex Sans headings, #09090b ink). Flat, shadowless."
  colors:
    primary: "#cc5a16"
    primary-bright: "#ee781f"
    ink: "#09090b"
    ink-strong: "#020a0f"
    slate: "#1f2937"
    nav: "#2c2925"
    body: "#52525b"
    muted: "#71717a"
    tab-muted: "#646470"
    faint: "#d9d9d9"
    canvas: "#ffffff"
    surface: "#f4f4f5"
    surface-warm: "#f8f6f1"
    surface-gray: "#f9fafb"
    hairline: "#e4e4e7"
    black: "#000000"
    night: "#060211"
    night-alt: "#050311"
  typography:
    family: { display: "Pretendard", heading: "IBM Plex Sans", body: "Pretendard" }
    hero:       { size: 92, weight: 400, use: "Homepage hero headline (Unlock the Potential of AI), Pretendard" }
    section:    { size: 56, weight: 600, use: "Homepage section titles (Squeeze / Benchmark / Why SqueezeBits?), Pretendard" }
    subhead:    { size: 32, weight: 600, use: "Homepage benefit subheads (Maximize Inference Speed), Pretendard" }
    blog-hero:  { size: 48, weight: 600, lineHeight: 1.0, use: "Blog hero H1, IBM Plex Sans" }
    blog-h2:    { size: 32, weight: 600, lineHeight: 1.25, use: "Blog featured post title, IBM Plex Sans" }
    card-title: { size: 22, weight: 600, lineHeight: 1.375, use: "Blog post card title, IBM Plex Sans" }
    nav:        { size: 15, weight: 560, use: "Blog product nav links, IBM Plex Sans" }
    button:     { size: 16, weight: 500, use: "Subscribe button label" }
    caption:    { size: 14, weight: 500, use: "Category tabs, metadata" }
    body:       { size: 16, weight: 400, use: "Body reading text, Pretendard" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { sm: 6, md: 8, lg: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-subscribe: { type: button, bg: "#ee781f", fg: "#ffffff", radius: "6px", padding: "8px 16px", font: "16px / 500 IBM Plex Sans", use: "Blog primary CTA (Subscribe)" }
    button-viewmore: { type: button, fg: "#cc5a16", font: "18px / 600 Pretendard", use: "Homepage inline View-more link CTA, 4px underline gap" }
    announcement-banner: { type: card, bg: "#cc5a16", fg: "#000000", padding: "0px 16px", height: "48px", use: "Top full-width announcement bar" }
    article-card: { type: card, bg: "#ffffff", border: "1px solid #e4e4e7", radius: "6px", use: "Blog post card, flat (no shadow)" }
    category-tab: { type: tab, fg: "#646470", active: "text #09090b", use: "Blog category filter tabs (Tech Insight / Product)" }
    search-input: { type: input, bg: "#ffffff", border: "1px solid #e4e4e7", radius: "6px", padding: "4px 12px", font: "14px / 400", use: "Blog search input" }
    seeall-pill: { type: badge, bg: "#f4f4f5", fg: "#020a0f", radius: "6px", padding: "6px 14px", font: "14px / 600", use: "See-All / more-link pill" }
  components_harvested: true
---

# Design System Inspiration of SqueezeBits

## 1. Visual Theme & Atmosphere

SqueezeBits (스퀴즈비츠) is a Korean deep-tech AI company whose product is efficiency itself — model quantization, compression, and inference optimization (OwLite, Fits on Chips, Yetter, RoBoost). Its design language runs on two deliberately different surfaces. The flagship marketing homepage is a dark, immersive stage: near-black indigo sections (`#060211`, `#050311`) and pure black (`#000000`) backdrops carry an enormous 92px Pretendard hero ("Unlock the Potential of AI") in white (`#ffffff`), while a single saturated brand orange (`#cc5a16`) burns through as the one accent — the top announcement banner fill, the word "SqueezeBits" set in orange inside section titles, and every "View more" link. The effect is a GPU-in-a-dark-datacenter mood: quiet, technical, and confident, with orange as the heat signature.

The second surface — the official Tech blog (`blog.squeezebits.com`) — flips to light. It is a clean, editorial, engineer-to-engineer reading environment on a white (`#ffffff`) canvas with a zinc neutral ladder (ink `#09090b`, body `#52525b`, muted `#71717a`) and a warm-grey nav (`#2c2925`). Here the display face switches from Pretendard to **IBM Plex Sans** at weight 600 — a monospace-adjacent humanist sans that reads as research-grade and code-literate, exactly right for posts about vLLM, Intel Gaudi, and quantization-aware training. The brand orange returns as a slightly brighter fill (`#ee781f`) on the primary Subscribe button, tying the two surfaces together.

What unifies both surfaces is restraint with depth: live inspection found `box-shadow: none` across heroes, nav, cards, buttons, and inputs on both domains. Separation comes from flat tint (`#f4f4f5` zinc surface, `#f8f6f1` warm cream, `#f9fafb` on the homepage's light bands) and thin `#e4e4e7` hairlines rather than elevation. Interactive chrome is small-radius (6px on the blog, 8px on the homepage menu) and orderly. The system reads like the company: performance-obsessed, precise, and allergic to decoration that costs cycles.

**Key Characteristics:**
- Two-surface split — dark immersive homepage (Pretendard) + light editorial blog (IBM Plex Sans headings)
- A single saturated brand orange as the only accent: `#cc5a16` on the homepage, brighter `#ee781f` as the blog CTA fill
- Near-black indigo homepage stage (`#060211`, `#050311`, `#000000`) with white (`#ffffff`) display type
- Zinc neutral ladder on the blog: ink `#09090b`, near-black `#020a0f`, body `#52525b`, muted `#71717a`, tab-muted `#646470`
- Warm-grey blog nav text (`#2c2925`) at IBM Plex Sans weight 560 — a variable-weight fingerprint
- Flat, shadow-free system — separation via tint (`#f4f4f5`, `#f8f6f1`, `#f9fafb`) and `#e4e4e7` hairlines
- Slate section heads on light homepage bands (`#1f2937`); faint grey (`#d9d9d9`) for muted copy on the dark stage
- Small, orderly radii — 6px blog chrome, 8px homepage controls; no pills, no heavy rounding

## 2. Color Palette & Roles

### Brand
- **Brand Orange** (`#cc5a16`): The flagship brand accent on the homepage — announcement-banner fill, the orange "SqueezeBits" wordmark inside section titles, and every "View more" inline CTA. The system's single "heat" color and the `primary_color`.
- **Bright Orange** (`#ee781f`): A brighter tint of the brand orange used as the blog's primary button fill (Subscribe). Same identity, lighter surface.

### Homepage (Dark Stage)
- **Night Indigo** (`#060211`): Primary near-black indigo backdrop for immersive hero sections.
- **Night Indigo Alt** (`#050311`): Companion near-black indigo for the tallest hero band.
- **Pure Black** (`#000000`): Maximum-contrast hero background and banner text color.
- **Slate** (`#1f2937`): Section titles on the homepage's light bands and the mobile menu icon.
- **Faint Grey** (`#d9d9d9`): Muted/secondary copy on the dark stage where white would be too loud.
- **Surface Grey** (`#f9fafb`): Light section-band background on the homepage.

### Blog (Light Surface) — Ink & Neutrals
- **Ink** (`#09090b`): Primary heading and body ink on the blog — a near-black zinc.
- **Ink Strong** (`#020a0f`): The darkest text, used on pill labels and the search field.
- **Nav Warm** (`#2c2925`): Warm-grey product-nav link color (Yetter / OwLite / Fits on Chips).
- **Body Slate** (`#52525b`): Zinc-600 secondary body copy.
- **Muted** (`#71717a`): Zinc-500 tertiary text, metadata, descriptions.
- **Tab Muted** (`#646470`): Inactive category-filter tab text.

### Surface & Borders
- **Canvas** (`#ffffff`): White page background on the blog, card surfaces, and text on dark/orange.
- **Surface** (`#f4f4f5`): Zinc-100 tinted surface — "See All" pills, quiet chips, card fills.
- **Surface Warm** (`#f8f6f1`): Warm cream surface for occasional soft blocks on the blog.
- **Hairline** (`#e4e4e7`): Zinc-200 thin borders, dividers, card outlines, and input strokes — the primary separation device given the shadow-free system.

## 3. Typography Rules

### Font Family
- **Display (homepage)**: `Pretendard` (with `Pretendard Fallback`) — drives the 92px hero and the 56px section titles, and is the document default / body font on the homepage.
- **Heading (blog)**: `IBM Plex Sans` (with `Pretendard` fallback) — drives every blog headline at weight 600, giving posts a research-grade, code-literate voice.
- **Body**: `Pretendard` for reading text; blog body flows in the same zinc ink.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Homepage Hero | Pretendard | 92px | 400 | normal | "Unlock the Potential of AI" — white on dark stage |
| Homepage Section | Pretendard | 56px | 600 | normal | "Squeeze", "Benchmark", "Why SqueezeBits?" |
| Homepage Subhead | Pretendard | 32px | 600 | normal | Benefit heads ("Maximize Inference Speed") |
| Blog Hero | IBM Plex Sans | 48px | 600 | 1.0 (48px) | Blog H1 on dark hero |
| Blog Featured H2 | IBM Plex Sans | 32px | 600 | 1.25 (40px) | Featured / recap post title |
| Blog Card Title | IBM Plex Sans | 22px | 600 | 1.375 (30.25px) | Post-card headline |
| Blog Nav | IBM Plex Sans | 15px | 560 | normal | Product nav links (variable weight) |
| Button | IBM Plex Sans | 16px | 500 | normal | Subscribe CTA label |
| Caption | IBM Plex Sans | 14px | 500 | normal | Category tabs, metadata |
| Body | Pretendard | 16px | 400 | normal | Standard reading text |

### Principles
- **Two faces, two jobs**: Pretendard owns the immersive homepage display and all body reading; IBM Plex Sans owns the blog headlines. They never swap roles — Plex signals engineering rigor, Pretendard signals Korean-premium clarity.
- **Weight 600 is the headline weight**: Every blog headline and homepage section title runs at 600 — assertive but never black-heavy. The homepage hero is the one exception, running lighter at 400 so the 92px scale carries the presence.
- **Variable-weight fingerprint**: Blog nav lands at an unusual 560, language toggles at 540 — the system leans on IBM Plex Sans's variable axis for fine-grained UI weight rather than jumping between named weights.
- **Normal tracking**: Unlike letter-spaced display systems, SqueezeBits keeps tracking at normal across sizes; scale and weight do the hierarchy work.

## 4. Component Stylings

### Buttons

**Subscribe (Primary)**
- Background: `#ee781f`
- Text: `#ffffff`
- Radius: 6px
- Padding: 8px 16px
- Font: 16px / 500 / IBM Plex Sans
- Height: 36px
- Use: Blog primary call-to-action ("Subscribe") — the one filled button

**View More (Inline Link)**
- Text: `#cc5a16`
- Font: 18px / 600 / Pretendard
- Padding: 0px 0px 4px
- Use: Homepage inline "View more" CTA under each product block — an underline-gap text link, not a filled button

### Inputs

**Search**
- Background: `#ffffff`
- Border: 1px solid `#e4e4e7`
- Radius: 6px
- Padding: 4px 12px
- Font: 14px / 400
- Height: 36px
- Use: Blog "Search posts" field

### Cards & Containers

**Article Card**
- Background: `#ffffff`
- Border: 1px solid `#e4e4e7`
- Radius: 6px
- Use: Blog post card — flat, hairline-outlined, no shadow

**Announcement Banner**
- Background: `#cc5a16`
- Text: `#000000`
- Padding: 0px 16px
- Height: 48px
- Use: Top full-width announcement bar ("SqueezeBits is joining Rebellions!")

### Badges

**See-All Pill**
- Background: `#f4f4f5`
- Text: `#020a0f`
- Radius: 6px
- Padding: 6px 14px
- Font: 14px / 600
- Use: "See All" / more-link pill on the blog

### Tabs

**Category Filter**
- Text: `#646470`
- Padding: 6px 14px
- Font: 14px / 500
- Active: text `#09090b`
- Use: Blog category filters ("Tech Insight", "Product")

### Navigation
- Background: `#ffffff`
- Text: `#2c2925`
- Font: 15px / 560 / IBM Plex Sans
- Radius: 6px
- Padding: 0px 10px
- Height: 38px
- Use: Blog product nav ("Yetter", "OwLite", "Fits on Chips", "SqueezeBits")

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces)
**Tier 1 sources:** https://www.squeezebits.com/ (dark marketing homepage, live DOM); https://blog.squeezebits.com/ (official Tech blog, live DOM); https://github.com/SqueezeBits (official GitHub org)
**Tier 2 sources:** getdesign.md/squeezebits — 0 DESIGN.md files (not listed); styles.refero.design/?q=squeezebits — not listed (generic/trending results only)
**Conflicts unresolved:** none (two-surface orange split `#cc5a16` homepage / `#ee781f` blog documented as intentional in `.verification.md` conflict matrix)

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Notable: Blog chrome uses tight paddings (8px 16px buttons, 6px 14px pills, 4px 12px inputs); the homepage breathes with tall full-viewport hero bands (700–1060px)

### Grid & Container
- Homepage: full-bleed vertical scroll of alternating dark (`#060211`/`#050311`/`#000000`) and light (`#f9fafb`) product bands, each anchored by a 56px section title and a "View more" link
- Blog: centered content column with a sticky top nav, a category-tab row, a featured hero post, then a responsive grid of hairline-outlined article cards
- Trusted-by logo strip and product blocks (Yetter / RoBoost / OwLite / Fits on Chips) stack vertically down the homepage

### Whitespace Philosophy
- **Immersive dark, editorial light**: the homepage uses large empty dark space to make the orange accent and white hero pop; the blog uses calm white space for long-form reading.
- **Flat segmentation**: sections separate by background (dark band vs `#f9fafb` light band on the homepage; `#ffffff` vs `#f4f4f5` on the blog) and `#e4e4e7` hairlines — never by shadow.

### Border Radius Scale
- Small (6px): blog buttons, inputs, pills, cards, nav items — the workhorse
- Medium (8px): homepage menu / control buttons
- Large (16px): larger containers when used
- Full (9999px): reserved for the rare avatar / circular control

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page backgrounds, hero, nav, most surfaces |
| Tint (Level 1) | `#f4f4f5` / `#f8f6f1` / `#f9fafb` background shift | Card / section separation without elevation |
| Hairline (Level 2) | `1px solid #e4e4e7` border | Blog card outlines, dividers, input strokes |
| Contrast (Level 3) | Dark stage (`#060211` / `#050311` / `#000000`) vs light | Homepage section depth by background inversion |

**Shadow Philosophy**: SqueezeBits is a shadow-free system on both surfaces — live inspection returned `box-shadow: none` across heroes, nav, article cards, buttons, and inputs. Depth is communicated by background inversion (the near-black homepage stage against light bands) and by flat tint plus `#e4e4e7` hairlines on the blog. When emphasis is needed the system reaches for the orange accent (`#cc5a16` / `#ee781f`) or the dark stage, never elevation — a clean, fast, engineered look that matches a company selling efficiency.

## 7. Do's and Don'ts

### Do
- Use a single brand orange as the only accent — `#cc5a16` on dark marketing surfaces, `#ee781f` as the blog CTA fill
- Set the homepage on a near-black indigo stage (`#060211` / `#050311` / `#000000`) with white (`#ffffff`) display type
- Use Pretendard for the immersive homepage display and all body; use IBM Plex Sans weight 600 for blog headlines
- Keep depth flat — separate with tint (`#f4f4f5`, `#f8f6f1`, `#f9fafb`) and `#e4e4e7` hairlines, never drop shadows
- Use the zinc ink ladder on the blog: `#09090b` for headings, `#52525b` body, `#71717a` muted
- Keep radii small and orderly — 6px blog chrome, 8px homepage controls
- Render "View more" as an orange (`#cc5a16`) inline underline-gap link, not a filled button

### Don't
- Add a second accent hue — orange is the only saturated color; everything else is neutral
- Use drop shadows for elevation — the system is flat on both surfaces
- Swap the type roles — never set blog headlines in Pretendard or the homepage hero in IBM Plex Sans
- Use pure black (`#000000`) for blog body text — reserve near-black zinc `#09090b` / `#020a0f`
- Apply pill or heavy rounding to buttons and cards — keep the 6px / 8px small-radius rhythm
- Spread the orange across many elements — it marks the single next action or the brand word only
- Letter-space the display type — SqueezeBits tracks at normal and lets weight/scale do the work

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Homepage hero scales down from 92px; blog grid collapses to a single column; nav becomes a hamburger (8px-radius menu button) |
| Tablet | 640–1024px | 2-up article cards on the blog; moderate homepage band padding |
| Desktop | 1024–1440px | Full layout; multi-column blog card grid; full-viewport homepage bands |

### Touch Targets
- Subscribe button at 36px height with 8px 16px padding
- Nav items at 38px height with 0px 10px padding
- Category tabs and pills sized with 6px 14px padding for comfortable tapping

### Collapsing Strategy
- Homepage: 92px hero compresses on mobile; alternating dark/light bands maintain full-width treatment
- Blog: featured hero post stays full-width; the article grid reflows multi-column → single column
- Sticky nav condenses product links into a menu on narrow viewports

### Image Behavior
- Blog post-card thumbnails sit inside 6px-radius, hairline-outlined cards with no shadow at any size
- Homepage product visuals sit directly on the dark stage without framing chrome

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand accent (marketing): Brand Orange (`#cc5a16`)
- Brand accent (blog CTA): Bright Orange (`#ee781f`)
- Homepage stage: Night Indigo (`#060211`), Night Indigo Alt (`#050311`), Pure Black (`#000000`)
- Homepage light band: Surface Grey (`#f9fafb`)
- Blog canvas: White (`#ffffff`)
- Blog ink: `#09090b` (headings), `#020a0f` (strongest), `#52525b` (body), `#71717a` (muted)
- Blog nav text: Nav Warm (`#2c2925`)
- Inactive tab: Tab Muted (`#646470`)
- Muted on dark: Faint Grey (`#d9d9d9`)
- Surface / hairline: `#f4f4f5`, `#f8f6f1`, `#e4e4e7`
- Slate section head: `#1f2937`

### Example Component Prompts
- "Create a dark hero: near-black indigo `#060211` background, full viewport. Headline at 92px Pretendard weight 400, white `#ffffff`, 'Unlock the Potential of AI'. One orange inline link 'View more' at 18px Pretendard weight 600, color `#cc5a16`, with a 4px underline gap. No shadow."
- "Design a blog post card: white `#ffffff` background, 1px solid `#e4e4e7` border, 6px radius, no shadow. Title 22px IBM Plex Sans weight 600, line-height 1.375, color `#09090b`. Meta 14px, color `#71717a`."
- "Build a primary button: `#ee781f` background, white `#ffffff` text, 6px radius, 8px 16px padding, 16px IBM Plex Sans weight 500 — 'Subscribe'."
- "Create a category-tab row: inactive tabs 14px weight 500 in `#646470`, active tab text `#09090b`, 6px 14px padding, no underline. Beside it a 'See All' pill: `#f4f4f5` background, `#020a0f` text, 6px radius, 6px 14px padding, 14px weight 600."
- "Top announcement banner: full-width `#cc5a16` background, black `#000000` text, 48px height, 0px 16px padding."

### Iteration Guide
1. One orange only — `#cc5a16` on dark surfaces, `#ee781f` as the blog fill; everything else neutral
2. Pretendard for homepage display + body; IBM Plex Sans weight 600 for blog headlines — never swap
3. No shadows — separate with `#f4f4f5` / `#f8f6f1` / `#f9fafb` tint and `#e4e4e7` hairlines
4. Blog ink is zinc `#09090b`, never pure black for body
5. Small radii — 6px blog chrome, 8px homepage controls
6. Dark homepage stage is `#060211` / `#050311` / `#000000`, not neutral grey
7. "View more" is an orange inline link, not a filled button

---

## 10. Voice & Tone

SqueezeBits speaks like a systems engineer who measures everything — precise, benefit-first, and quietly confident about performance numbers. The homepage register is direct and technical: "Deploy your AI with maximal efficiency on CPU, GPU, or NPU," "Do you need optimization?", "Maximize Inference Speed." Copy leads with a concrete capability or a measurable outcome (3.1× faster inference, 70% cost reduction) rather than adjectives. The blog voice is even more peer-to-peer — reference-implementation-grade write-ups on vLLM, Intel Gaudi, Qualcomm NPU, and quantization-aware training, addressed to ML engineers as equals.

| Context | Tone |
|---|---|
| Homepage hero | Declarative, aspirational-but-technical. "Unlock the Potential of AI." |
| Product blocks | Question + capability. "Do you need optimization?" then a precise one-liner on what the product does. |
| Benefit callouts | Numbers-first. "3.1× faster inference", "70% cost reduction", "near-original accuracy via QAT". |
| Blog posts | Engineer-to-engineer. Benchmarks, architecture, hardware specifics; examples precede conclusions. |
| CTAs | Plain and low-pressure. "View more", "Subscribe". |
| Announcements | Factual, unhyped. "SqueezeBits is joining Rebellions! Read more." |

**Voice samples (verbatim from live surfaces):**
- "Deploy your AI with maximal efficiency on CPU, GPU, or NPU" — homepage hero subline (capability, hardware-specific). *(verified live 2026-07-02)*
- "OwLite is SqueezeBits' core AI model optimization solution. Centered around industry-leading Quantization technology..." — homepage product copy (technical, precise). *(verified live 2026-07-02)*
- "SqueezeBits is joining Rebellions! Read more" — top announcement banner (factual, unhyped). *(verified live 2026-07-02)*

**Forbidden register**: vague hype ("revolutionary", "game-changing"), marketing superlatives untethered from a number, consumer-app exclamation stacking, and undefined jargon presented without a concrete benefit. If a claim can carry a measured figure, it should.

## 11. Brand Narrative

SqueezeBits (스퀴즈비츠) is a Korean AI systems company built around a single thesis: the potential of AI is unlocked not by bigger models but by running them efficiently. Its name is the thesis — squeezing bits, i.e. quantization and compression, so that large models "fit on chips." The product line makes the mission literal: **OwLite** (quantization-centered model optimization with QAT to restore near-original accuracy), **Fits on Chips** (a serving-framework research tool that tunes lightweight models to specific GPU/NPU hardware), **Yetter** (an integrated full-stack inference engine and GenAI API service combining OwLite and Fits on Chips), and **RoBoost** (a Physical-AI synthetic-data generation platform for robotics and autonomous driving).

The company's stated promise on its homepage — "Deploy your AI with maximal efficiency on CPU, GPU, or NPU" — positions it at the systems layer between models and silicon. Its engineering blog reinforces the identity: deep, reproducible write-ups on vLLM, SGLang, Intel Gaudi, Qualcomm NPUs, disaggregated inference, and techniques like GraLoRA and vocabulary trimming. This is a company that publishes benchmarks, not brochures.

In 2026 SqueezeBits announced it is **joining Rebellions**, the Korean NPU/AI-accelerator company — a natural pairing of a model-efficiency team with a chip maker, and the reason the site's top banner reads "SqueezeBits is joining Rebellions!" What the design refuses is telling: no institutional-SaaS gloss, no shadow-stacked cards, no second accent color competing with the orange heat signature. What it embraces is a dark, instrument-panel homepage and a light, research-grade blog — both flat, both fast, both engineered.

## 12. Principles

1. **Efficiency is the product — and the aesthetic.** The brand sells fewer wasted cycles; the UI wastes none either. *UI implication:* flat, shadow-free surfaces, small orderly radii, one accent color — nothing renders that doesn't inform.
2. **Numbers over adjectives.** Trust is earned with measured outcomes (3.1× faster, 70% cheaper), not superlatives. *UI implication:* lead callouts and benefit heads with figures; reserve prose for the mechanism.
3. **One accent, marking the action.** The orange (`#cc5a16` / `#ee781f`) is the single heat signature. *UI implication:* use orange only for the brand word, the next action, or a live banner — never as decoration.
4. **Two surfaces, one discipline.** A dark immersive marketing stage and a light editorial blog can differ in mood but share the same flat, precise grammar. *UI implication:* keep type roles fixed (Pretendard display / IBM Plex Sans headlines) and depth flat across both.
5. **Engineer as first-class reader.** The blog treats ML engineers as peers with reproducible benchmarks. *UI implication:* long-form legibility, IBM Plex Sans headings, zinc ink, generous reading width — documentation is a design surface.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable SqueezeBits audiences (ML systems engineers, inference-infra teams, hardware/NPU partners), not individual people.*

**민준, 34, 서울.** An inference-infrastructure engineer at a Korean AI startup deciding how to cut serving cost on B200 GPUs. Reads the SqueezeBits blog for reproducible vLLM/quantization benchmarks and trusts the brand because it publishes numbers, not slogans.

**Aisha, 29, Toronto.** An ML engineer evaluating quantization toolchains. Cares that OwLite's QAT restores accuracy to near-original and that the docs show the accuracy/latency trade curve. Would dismiss a vendor whose site was all adjectives and no figures.

**Dr. Park, 45, 대전.** A hardware partner at an NPU company assessing full-stack optimization fit. Values that Fits on Chips models the hardware's cost-performance curve explicitly, and reads the "joining Rebellions" news as strategic alignment.

**Leo, 38, Berlin.** A robotics lead exploring synthetic training data. Interested in RoBoost's physics-grounded validation and the promise of higher usable-data yield per GPU-hour; skims the blog's Physical-AI posts before booking a call.

## 14. States

| State | Treatment |
|---|---|
| **Empty (blog search, no results)** | White (`#ffffff`) canvas. Single Ink (`#09090b`) line at body size explaining no posts match, with a path back to all categories. No illustration. |
| **Empty (category, none yet)** | Muted (`#71717a`) single line stating the category is empty, plus a link to "See All". Calm, factual. |
| **Loading (blog list fetch)** | Skeleton cards on the white canvas at final dimensions, 6px radius, `#e4e4e7` hairline. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (homepage section reveal)** | Content fades in on scroll into the dark stage; the orange accent appears last so the eye lands on it. |
| **Error (fetch failed)** | Inline message in Ink (`#09090b`) with a plain-language explanation and a retry — never a bare "오류가 발생했습니다". States what to do next. |
| **Error (subscribe / form validation)** | Field-level message below the input in a clear tone; describes what is valid, not just "required". |
| **Success (subscribed)** | Brief inline confirmation in a calm tone near the Subscribe button; no celebratory emoji. |
| **Skeleton** | `#f4f4f5` blocks at final dimensions, 6px radius, flat pulse. |
| **Disabled** | Faint Grey (`#d9d9d9`) text on reduced-opacity surface; the orange action fades rather than switching to grey, to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, link/tab press, focus |
| `motion-standard` | 220ms | Card / section reveal, dropdown, sheet |
| `motion-slow` | 360ms | Homepage scroll-triggered hero and band reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sections, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and restrained, matching the flat, engineered aesthetic. The homepage uses scroll-triggered reveals as content enters the dark stage (`motion-slow / ease-enter`), with the orange accent settling last as the focal point. Blog interactions are quiet — hover and tab changes at `motion-fast`, card and section reveals at `motion-standard / ease-enter`. No bounce or spring: a company selling deterministic efficiency signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the scroll reveals resolve immediately; the site remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on two surfaces:
- https://www.squeezebits.com/ — dark marketing homepage: Pretendard hero 92px/400 white;
  56px/600 section titles; brand orange #cc5a16 on banner/wordmark/"View more"; near-black
  indigo stage #060211/#050311/#000000; light band #f9fafb; slate section head #1f2937;
  box-shadow none throughout.
- https://blog.squeezebits.com/ — official Tech blog: IBM Plex Sans headlines 48/32/22px @600;
  zinc ink #09090b, #52525b, #71717a; #ee781f Subscribe button; #f4f4f5 pill; #e4e4e7 hairline;
  #2c2925 nav @560; box-shadow none.

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Raw samples).

Voice samples (§10) are verbatim from the live homepage (hero subline, product copy, announcement banner).

Brand narrative (§11): product line (OwLite, Fits on Chips, Yetter, RoBoost) and mission
("Deploy your AI with maximal efficiency on CPU, GPU, or NPU") are quoted/paraphrased from the
live homepage; the "joining Rebellions" fact is from the live top-banner announcement. SqueezeBits
is a Korean AI model-optimization/quantization company; broader company details are general public
knowledge, not directly quoted from a verified SqueezeBits statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable SqueezeBits audiences
(ML systems engineers, inference-infra teams, hardware/NPU partners). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "efficiency is the product and the aesthetic", "one accent as heat
signature") are editorial readings connecting SqueezeBits' observed design to its positioning,
not directly sourced SqueezeBits statements.
-->
