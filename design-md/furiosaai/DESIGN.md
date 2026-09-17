---
id: furiosaai
name: FuriosaAI
display_name_kr: 퓨리오사AI
country: KR
category: ai
homepage: "https://furiosa.ai"
primary_color: "#e21500"
logo:
  type: favicon
  slug: "https://cdn.prod.website-files.com/69289524195a1f9e06ade49b/6980d60efe980f28a29f0ade_Furiosa_Webclip.png"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live Renegade Red CTA (#e21500); display type is ABC Favorit / ABC Favorit Mono. High-contrast black (#000000) hero sections alternate with white (#ffffff). Accent chips: mint (#70e697) News, yellow (#fffa82) Technical Updates, lavender (#cdbbff) on dark."
  colors:
    primary: "#e21500"
    canvas: "#ffffff"
    black: "#000000"
    ink: "#151515"
    ink-soft: "#111111"
    maroon: "#440a07"
    mint: "#70e697"
    yellow: "#fffa82"
    lavender: "#cdbbff"
    grey: "#7f7f7f"
    grey-light: "#d4d4d4"
    form-ink: "#30343b"
    form-border: "#c0d0de"
  typography:
    family: { sans: "ABC Favorit", mono: "ABC Favorit Mono" }
    display-xl:  { size: 84, weight: 400, lineHeight: 1.00, tracking: -2.1, use: "Oversized uppercase statement headlines, ABC Favorit" }
    display:     { size: 72, weight: 400, lineHeight: 1.10, use: "Hero / section headlines, ABC Favorit" }
    heading:     { size: 48, weight: 500, lineHeight: 1.20, use: "Mid-section emphasis headings" }
    section:     { size: 36, weight: 400, lineHeight: 1.30, use: "Section titles, newsroom heads" }
    card-title:  { size: 24, weight: 400, lineHeight: 1.17, use: "Blog / news card titles" }
    body:        { size: 16, weight: 400, lineHeight: 1.60, use: "Body copy, ABC Favorit" }
    nav:         { size: 16, weight: 500, lineHeight: 1.50, use: "Top nav links, ABC Favorit" }
    button:      { size: 16, weight: 400, lineHeight: 1.00, use: "Button label, ABC Favorit Mono" }
    caption:     { size: 12, weight: 500, lineHeight: 1.00, use: "Skip link / small labels" }
  spacing: { xs: 4, sm: 8, base: 12, md: 15, lg: 24, xl: 48, section: 96 }
  rounded: { sm: 5, base: 6, md: 8, lg: 10, xl: 12 }
  shadow:
    none: "none"
    card: "rgba(0,0,0,0.18) 0px 18px 50px"
  components:
    button-primary: { type: button, bg: "#e21500", fg: "#ffffff", radius: "6px", padding: "14px 24px", height: "50px", font: "16px / 400 ABC Favorit Mono", use: "Primary CTA — Watch the sessions, Get started" }
    button-close: { type: button, bg: "#e21500", fg: "#ffffff", radius: "10px", padding: "10px 12px", font: "12px / 600 ABC Favorit", use: "Modal / popup close button" }
    button-skip: { type: button, bg: "#e21500", fg: "#ffffff", radius: "8px", padding: "9.6px 18px", font: "12px / 500 ABC Favorit", use: "Skip-to-content accessibility link" }
    input-text: { type: input, bg: "#ffffff", fg: "#30343b", border: "1px solid #c0d0de", radius: "5px", padding: "0 15px", height: "56px", font: "16px ABC Favorit", use: "Furiosa Access Program form field" }
    card-blog: { type: card, bg: "#ffffff", radius: "8px", use: "Blog / news card on white" }
    card-featured: { type: card, bg: "#ffffff", radius: "12px", shadow: "rgba(0,0,0,0.18) 0px 18px 50px", use: "Featured / elevated card" }
    badge-news: { type: badge, bg: "#70e697", fg: "#151515", radius: "5px", padding: "4px 12px", font: "14px ABC Favorit", use: "News category label" }
    badge-technical: { type: badge, bg: "#fffa82", fg: "#151515", radius: "5px", padding: "4px 12px", font: "14px ABC Favorit", use: "Technical Updates category label" }
    nav-link: { type: tab, fg: "#ffffff", font: "16px / 500 ABC Favorit", padding: "14px 12px", active: "#151515 on light scrolled header", use: "Top navigation item on dark hero" }
  components_harvested: true
---

# Design System Inspiration of FuriosaAI

## 1. Visual Theme & Atmosphere

FuriosaAI (퓨리오사AI) is the Seoul-based AI-chip company behind the RNGD inference accelerator, and its site reads like a hardware company that hired a type foundry: industrial, high-contrast, and confident without a single gradient-soaked cliche of the GPU era. The page is built on a dramatic light/dark cadence — full-bleed black (`#000000`) hero and product sections, where 72px–84px headlines in `#ffffff` carry the weight, alternating with calm white (`#ffffff`) editorial bands where body copy sits in a near-black ink (`#151515`, with a softer `#111111` for occasional minor text). There is no navy, no enterprise blue; the single saturated brand accent is a fierce **Renegade Red** (`#e21500`) reserved almost exclusively for the call-to-action, so the eye is trained to read that one red as "the action."

The typographic personality is unmistakable: everything is set in **ABC Favorit**, a grotesque sans with a precise, slightly mechanical character, paired with its monospace companion **ABC Favorit Mono** for every button label — a deliberate engineering tell that frames each CTA as a command line. Display headlines run at weight 400 (72px hero, scaling up to an oversized 84px with tight `-2.1px` tracking for uppercase manifesto lines like "INFERENCE WITHOUT CONSTRAINTS"), while body copy stays at a quiet 16px / weight 400 with a generous 1.6 line-height. The restraint of a single near-regular weight across enormous sizes is the system's core move: the message is loud, the typography is calm.

Where the system permits itself color, it does so in sharp, flat chips rather than decoration. Blog and newsroom cards carry candy-bright category labels — mint (`#70e697`) for "News", electric yellow (`#fffa82`) for "Technical Updates" — and dark sections occasionally lift a heading into a soft lavender (`#cdbbff`). A deep maroon (`#440a07`) anchors one immersive blog band. Depth is mostly flat: most surfaces are shadowless, with a single elevated card shadow (`rgba(0,0,0,0.18) 0px 18px 50px`) reserved for the featured story. Muted greys (`#7f7f7f`, `#d4d4d4`) handle secondary text and hairlines, and form fields use a calm `#30343b` ink on a `#c0d0de` border. The result is a brand that looks like silicon: precise, fast, monochrome with one red warning light.

**Key Characteristics:**
- ABC Favorit (sans) for all display + body; ABC Favorit Mono for every button label — an engineering signature
- Weight 400 across huge display sizes (72px–84px) — loud message, calm type
- Single saturated Renegade Red (`#e21500`) reserved for the primary CTA
- High-contrast light/dark cadence — black (`#000000`) hero bands vs white (`#ffffff`) editorial bands
- Near-black ink (`#151515`) for body text instead of pure black; `#111111` for minor text
- Flat depth — mostly shadowless; one elevated card shadow (`rgba(0,0,0,0.18) 0px 18px 50px`) for the featured story
- Candy-flat category chips — mint (`#70e697`), yellow (`#fffa82`) — and lavender (`#cdbbff`) accents on dark
- Tight negative tracking on oversized statement headlines (`-2.1px` at 84px)

## 2. Color Palette & Roles

### Primary
- **Renegade Red** (`#e21500`): The single brand accent and primary action color. Used on every CTA button, the skip-to-content link, and modal close buttons — the system's one saturated hue.
- **Pure White** (`#ffffff`): Light section background, card surface, and the color of headline text on black hero bands.
- **Pure Black** (`#000000`): The dramatic dark-section background for hero and product bands. Half the page lives on black.

### Text & Ink
- **Ink** (`#151515`): Primary body text and headings on light surfaces. A near-black that carries warmth without the harshness of pure black.
- **Ink Soft** (`#111111`): Occasional minor text — a marginally lighter near-black used in dense supporting copy.
- **Grey** (`#7f7f7f`): Muted secondary text, captions, and thin dividers.
- **Grey Light** (`#d4d4d4`): Low-emphasis text on dark backgrounds and hairline borders.

### Accent
- **Mint** (`#70e697`): Flat category-label chip background for "News" — a bright, confident green.
- **Yellow** (`#fffa82`): Flat category-label chip background for "Technical Updates" — electric highlight.
- **Lavender** (`#cdbbff`): Soft accent for headings and tertiary links lifted onto dark sections (e.g. the "Blog" heading, "See all posts").
- **Maroon** (`#440a07`): A deep oxblood that anchors one immersive blog section band.

### Form
- **Form Ink** (`#30343b`): Text color inside form inputs on the Access Program surface.
- **Form Border** (`#c0d0de`): Cool-grey 1px border around text inputs.

## 3. Typography Rules

### Font Family
- **Display & Body**: `ABC Favorit` (with `Arial, sans-serif` fallback) — used for headlines, body, and nav. A precise grotesque with a slightly mechanical character.
- **Mono / Buttons**: `ABC Favorit Mono` (with `Arial, sans-serif` fallback) — reserved for every button label and inline command-style CTA, framing actions as code.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display XL | ABC Favorit | 84px (5.25rem) | 400 | 1.00 (84px) | -2.1px | Oversized uppercase statement lines |
| Display / Hero | ABC Favorit | 72px (4.50rem) | 400 | 1.10 (79.2px) | normal | Hero + section headlines |
| Heading | ABC Favorit | 48px (3.00rem) | 500 | 1.20 (57.6px) | normal | Mid-section emphasis heads |
| Section | ABC Favorit | 36px (2.25rem) | 400 | 1.30 (46.8px) | normal | Section titles, newsroom heads |
| Card Title | ABC Favorit | 24px (1.50rem) | 400 | 1.17 (28px) | normal | Blog / news card titles |
| Body | ABC Favorit | 16px (1.00rem) | 400 | 1.60 (25.6px) | normal | Standard reading text |
| Nav Link | ABC Favorit | 16px (1.00rem) | 500 | 1.50 | normal | Top navigation items |
| Button | ABC Favorit Mono | 16px (1.00rem) | 400 | 1.00 | normal | Button labels |
| Caption | ABC Favorit | 12px (0.75rem) | 500 | 1.00 | normal | Skip link, small labels |

### Principles
- **One typeface, many voices**: ABC Favorit carries display, body, and nav; the only role-swap is ABC Favorit Mono for buttons. The monospace label is the engineering signature.
- **Near-regular at every size**: Weight 400 runs from 16px body up to the 84px statement headline. Emphasis comes from size and contrast, not from heavy weights — 500 appears only on nav and a few mid headings.
- **Tracking tightens at scale**: Oversized uppercase statements pull to `-2.1px` at 84px; everything 72px and below sits at normal tracking.
- **Loud message, calm type**: The page makes bold claims in restrained typography — the discipline is the brand.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#e21500`
- Text: `#ffffff`
- Radius: 6px
- Padding: 14px 24px
- Height: 50px
- Font: 16px ABC Favorit Mono weight 400
- Use: Primary call-to-action ("Watch the sessions", "Get started", "Get started with Furiosa Access")

**Modal Close**
- Background: `#e21500`
- Text: `#ffffff`
- Radius: 10px
- Padding: 10px 12px
- Height: 39px
- Font: 12px ABC Favorit weight 600
- Use: Close control on popups / overlays

**Skip-to-Content**
- Background: `#e21500`
- Text: `#ffffff`
- Radius: 8px
- Padding: 9.6px 18px
- Height: 36px
- Font: 12px ABC Favorit weight 500
- Use: Accessibility skip link revealed on keyboard focus

**Tertiary Link (on dark)**
- Background: transparent
- Text: `#cdbbff`
- Padding: 14px 24px
- Font: 16px ABC Favorit Mono weight 400
- Use: Low-emphasis inline CTA on dark sections ("See all posts")

### Inputs

**Text Field**
- Background: `#ffffff`
- Text: `#30343b`
- Border: 1px solid `#c0d0de`
- Radius: 5px
- Padding: 0px 15px
- Height: 56px
- Font: 16px ABC Favorit
- Use: Furiosa Access Program form fields (name, email, company)

### Cards & Containers

**Blog Card**
- Background: `#ffffff`
- Radius: 8px
- Use: Standard blog / news card on white bands (no border, no shadow)

**Featured Card**
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.18) 0px 18px 50px`
- Use: The single elevated featured-story card — the only place the system uses a drop shadow

**Subtle Tile**
- Background: `rgba(0,0,0,0.02)`
- Border: 1px solid `rgba(0,0,0,0.08)`
- Radius: 10px
- Use: Quiet supporting tile on light surfaces

### Badges

**News (Mint)**
- Background: `#70e697`
- Text: `#151515`
- Radius: 5px
- Padding: 4px 12px
- Font: 14px ABC Favorit
- Use: "News" category label on cards

**Technical Updates (Yellow)**
- Background: `#fffa82`
- Text: `#151515`
- Radius: 5px
- Padding: 4px 12px
- Font: 14px ABC Favorit
- Use: "Technical Updates" category label on cards

### Navigation
- Background: transparent over black hero (`#000000`)
- Text: `#ffffff`
- Font: 16px ABC Favorit weight 500
- Padding: 14px 12px per item
- Active: switches to `#151515` on the light scrolled header
- Use: Top horizontal nav ("Architecture", "Products", "Software", "Blog", "Newsroom", "About", "Careers", "Contact")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 5 brand surfaces)
**Tier 1 sources:** https://furiosa.ai, https://furiosa.ai/rngd, https://developer.furiosa.ai/latest/en/, https://lp.furiosa.ai/furiosa-access-program, https://github.com/furiosa-ai
**Tier 2 sources:** getdesign.md/furiosaai — not listed (SPA shell, no FuriosaAI entry); styles.refero.design — not listed (KR AI-hardware brand not catalogued)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px / 8px rhythm
- Scale: 4px, 8px, 12px, 15px, 24px, 48px, 96px
- Notable: Full-bleed sections use a generous 96px vertical padding; button padding lands at 14px 24px, form fields at 0px 15px horizontal within a tall 56px field

### Grid & Container
- Full-width alternating bands — black (`#000000`) hero/product sections against white (`#ffffff`) editorial sections
- Centered single-column hero anchored by a 72px–84px ABC Favorit headline
- Blog/newsroom uses a multi-column card grid (≈384px–420px card widths)
- Product pages stack large statement headlines with spec/feature blocks beneath

### Whitespace Philosophy
- **Contrast over clutter**: the dominant device is the light/dark band switch, not borders or shadows
- **Big type, big air**: oversized headlines are given room; supporting copy stays compact at 16px
- **Flat by default**: separation comes from background color (`#000000` vs `#ffffff`) and the maroon (`#440a07`) accent band, not from elevation

### Border Radius Scale
- Small (5px): inputs, category chips
- Base (6px): primary CTA buttons
- Medium (8px): blog cards, skip link
- Large (10px): close buttons, subtle tiles
- XL (12px): featured card

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, hero, nav, most cards |
| Band (Level 1) | Background color switch (`#000000` / `#ffffff` / `#440a07`) | Section separation without elevation |
| Elevated (Level 2) | `rgba(0,0,0,0.18) 0px 18px 50px` | The single featured-story card |

**Shadow Philosophy**: FuriosaAI is a near-flat system. Live inspection found `box-shadow: none` across the hero, nav, CTAs, and the majority of cards; depth is communicated by the dramatic black/white band cadence rather than by elevation. The one exception is the featured-story card, which lifts off the page with a soft `rgba(0,0,0,0.18) 0px 18px 50px` shadow. This restraint keeps the UI reading as industrial and fast — closer to a hardware spec sheet than a consumer app — while reserving elevation as a deliberate signal of "this one matters."

## 7. Do's and Don'ts

### Do
- Set every headline in ABC Favorit at weight 400 — let size and contrast carry emphasis
- Use ABC Favorit Mono for every button label — the monospace is the engineering signature
- Reserve Renegade Red (`#e21500`) for the primary CTA and critical controls — keep it the single action color
- Alternate full-bleed black (`#000000`) and white (`#ffffff`) bands for section rhythm
- Use near-black ink (`#151515`) for body text on white, not pure black
- Keep depth flat — separate with color bands, reserve the one card shadow for the featured story
- Use flat category chips (mint `#70e697`, yellow `#fffa82`) for taxonomy labels
- Apply tight negative tracking (`-2.1px`) only on oversized uppercase statement headlines

### Don't
- Spread Renegade Red across many elements — it dilutes the single-action signal
- Use heavy display weights (700+) — the brand speaks loudly in near-regular type
- Add drop shadows to ordinary cards — only the featured card is elevated
- Introduce a second saturated brand hue — red is the one action color; mint/yellow are taxonomy chips only
- Use a serif or a humanist sans for headlines — ABC Favorit owns the voice
- Mix the mono into body copy — ABC Favorit Mono is for button labels only
- Use enterprise navy or GPU-era gradients — the brand is monochrome with one red

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, nav collapses to toggle |
| Tablet | 640-1024px | 2-up card grids, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column blog/newsroom grid, oversized hero type |

### Touch Targets
- Primary CTA at 50px height with 14px 24px padding — comfortably tappable
- Form fields at a tall 56px height
- Nav items with 14px 12px padding inside the header

### Collapsing Strategy
- Hero: 84px/72px statement type scales down on mobile, weight 400 maintained
- Black/white alternating bands maintain full-width treatment
- Blog/newsroom card grid: multi-column → 2-up → single column
- Category chips wrap above card titles

### Image Behavior
- Product renders and chip photography sit on black bands at full contrast
- Featured card retains its `rgba(0,0,0,0.18)` shadow across sizes
- Cards maintain their radius scale (8px / 12px) across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Renegade Red (`#e21500`)
- Light background: Pure White (`#ffffff`)
- Dark background: Pure Black (`#000000`)
- Body / heading text: Ink (`#151515`); minor text Ink Soft (`#111111`)
- Muted text: Grey (`#7f7f7f`); on dark Grey Light (`#d4d4d4`)
- News chip: Mint (`#70e697`); Technical Updates chip: Yellow (`#fffa82`)
- Dark accent text: Lavender (`#cdbbff`); accent band: Maroon (`#440a07`)
- Form ink: `#30343b`; form border: `#c0d0de`

### Example Component Prompts
- "Create a black hero (`#000000`). Headline at 72px ABC Favorit weight 400, line-height 1.1, white (`#ffffff`). One Renegade Red CTA: `#e21500` background, white text, 6px radius, 14px 24px padding, 16px ABC Favorit Mono — 'Watch the sessions'."
- "Build a blog card on white: `#ffffff` background, 8px radius, no shadow. A mint category chip (`#70e697` background, `#151515` text, 5px radius, 4px 12px padding, 14px ABC Favorit) reading 'News' above a 24px ABC Favorit title."
- "Design an Access Program form field: white background, 1px solid `#c0d0de` border, 5px radius, 56px height, 0px 15px padding, 16px ABC Favorit, text color `#30343b`."
- "Make an oversized statement band: black background, headline at 84px ABC Favorit weight 400, letter-spacing -2.1px, uppercase, white — 'INFERENCE WITHOUT CONSTRAINTS'."

### Iteration Guide
1. ABC Favorit weight 400 for all headlines; ABC Favorit Mono for every button label
2. Renegade Red (`#e21500`) is the single action color — don't spread it
3. Alternate black (`#000000`) and white (`#ffffff`) bands for rhythm; flat depth otherwise
4. Body text is `#151515` ink, never pure black
5. Category chips are flat (mint `#70e697`, yellow `#fffa82`) with `#151515` text
6. Reserve the one card shadow (`rgba(0,0,0,0.18) 0px 18px 50px`) for the featured story
7. Tight `-2.1px` tracking only on oversized uppercase statements

---

## 10. Voice & Tone

FuriosaAI's voice is **technical, declarative, and quietly defiant** — the register of engineers who built an AI accelerator from scratch and would rather show a benchmark than make a promise. The product is literally named RNGD ("Renegade"), and the copy lives up to it: headlines state capabilities as facts ("Tensor Contraction Processor", "Inference without constraints"), not as marketing superlatives. The tone treats the reader as a peer engineer who can read a spec sheet — performance and efficiency numbers are the persuasion, not adjectives.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, technical. "Tensor Contraction Processor", "Inference without constraints." |
| Product / spec copy | Benchmark-first. States throughput, efficiency, and comparisons plainly. |
| CTAs | Terse imperatives in monospace. "Get started", "Watch the sessions", "See the specs". |
| Blog / newsroom | Engineer-to-engineer. Release notes, partnership news, benchmark write-ups. |
| Developer docs | Dense, precise, example-led — quick-start over narrative. |

**Voice samples (verbatim from live surfaces):**
- "Tensor Contraction Processor" — homepage section headline (architecture, stated as fact). *(verified live 2026-06-26)*
- "Inference without constraints" — oversized statement headline. *(verified live 2026-06-26)*
- "Powerfully efficient AI inference" — RNGD product page H1. *(verified live 2026-06-26)*

**Forbidden register**: GPU-era hype superlatives ("revolutionary", "game-changing"), vague AGI grandiosity untethered from a benchmark, exclamation-driven marketing, and stacked adjectives where a number would do.

## 11. Brand Narrative

FuriosaAI (퓨리오사AI) is a South Korean fabless semiconductor company founded in **2017** by **June Paik (백준호, CEO)** and co-founders, headquartered in Seoul. The company's premise is a direct challenge to the GPU-dominated AI-accelerator market: that inference for large models can be done far more power-efficiently with a purpose-built architecture. Its first-generation chip, **Warboy**, targeted vision workloads; its second-generation flagship, **RNGD** ("Renegade"), is a Tensor Contraction Processor built for LLM and multimodal inference — the product the current site is organized around.

The brand identity mirrors the engineering thesis. Where the incumbent narrative is about ever-bigger training clusters, FuriosaAI's site foregrounds **efficiency** and **inference without constraints** — performance-per-watt as the headline metric. The visual system reinforces this: industrial monochrome (black and white bands), a single warning-light red, monospace command-style buttons, and benchmark numbers rather than stock imagery. The 2026 "Renegade" summit branding makes the posture explicit — this is a company positioning itself as the renegade alternative to the GPU establishment.

What FuriosaAI refuses, visible in its design: GPU-era gradient spectacle, enterprise navy-and-grey blandness, and hype-driven AGI marketing. What it embraces: a hardware-spec aesthetic, a precise grotesque typeface (ABC Favorit) with a monospace engineering tell, and a high-contrast palette that reads like silicon — fast, exact, and unmistakably its own.

## 12. Principles

1. **Efficiency is the headline.** The thesis is performance-per-watt, not raw size. *UI implication:* lead with benchmark numbers and efficiency claims; let data persuade.
2. **One red means action.** Renegade Red (`#e21500`) is the single saturated hue. *UI implication:* reserve it for CTAs and critical controls so the next step is unambiguous.
3. **Engineer to engineer.** The reader is treated as a peer who reads spec sheets. *UI implication:* monospace button labels, dense technical copy, examples over narrative.
4. **Industrial, not decorative.** The look is silicon, not consumer app. *UI implication:* high-contrast black/white bands, flat depth, no gradient spectacle.
5. **Loud message, calm type.** Bold claims in restrained near-regular ABC Favorit. *UI implication:* emphasis comes from size and contrast, never from heavy weights or color noise.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable FuriosaAI audiences (ML infrastructure engineers, data-center architects, Korean deep-tech investors and recruits), not individual people.*

**Daniel Cho, 34, Seoul.** ML infrastructure engineer at a Korean cloud provider evaluating inference accelerators. Cares about tokens-per-second-per-watt more than peak FLOPS. Reads the developer docs quick-start before anything else; trusts a vendor that ships real benchmarks against an RTX comparison.

**Hannah Weber, 41, Munich.** Data-center architect at a European enterprise exploring alternatives to GPU clusters for LLM serving. Drawn to the efficiency framing and the Broadcom partnership news. Wants a clear path from spec sheet to a pilot via the Access Program form.

**지민 박, 28, 대전.** A new-grad chip engineer considering FuriosaAI careers. Reads the company as the "renegade" challenger and finds the industrial, benchmark-first brand more credible than hype-heavy competitors.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no results / no posts)** | White canvas. Single Ink (`#151515`) line at body size explaining nothing is here yet, with one Renegade Red CTA to navigate onward. No clutter. |
| **Loading (page / data fetch)** | Flat skeleton blocks at final dimensions on the active band (white or black); no shadow shimmer, consistent with the flat system. |
| **Form (Access Program, default)** | `#ffffff` field, 1px `#c0d0de` border, 5px radius, `#30343b` text. Calm and legible. |
| **Form (focus)** | Border intensifies toward Renegade Red (`#e21500`) accent; field stays white. |
| **Form (error)** | Field-level message below the input in Renegade Red tone; describes what is valid, not just "required". |
| **Success (form submitted)** | Brief inline confirmation in calm tone; next step linked immediately below. No celebratory emoji. |
| **Disabled** | Muted Grey (`#7f7f7f`) text on reduced-opacity surface; red actions fade rather than turn grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, dropdown, overlay |
| `motion-slow` | 360ms | Page-level band transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sections, cards, overlays |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and precise — consistent with the industrial, hardware-spec aesthetic. Sections fade/reveal on scroll at `motion-standard / ease-enter`; CTAs respond to press with a subtle scale/opacity shift. No bounce or spring — an AI-silicon company signals exactness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the site remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on 5 brand-owned surfaces:
- https://furiosa.ai (homepage)
- https://furiosa.ai/rngd (RNGD product page)
- https://furiosa.ai/about (about)
- https://furiosa.ai/blog (blog listing — category chips + cards)
- https://lp.furiosa.ai/furiosa-access-program (Access Program form inputs)
- https://developer.furiosa.ai/latest/en/ (developer docs — brand-owned, stock Sphinx theme)

Token-level claims (§1-9) are sourced from this live inspection: Renegade Red #e21500 CTA,
ABC Favorit / ABC Favorit Mono type, black/white band cadence, mint #70e697 + yellow #fffa82
category chips, lavender #cdbbff on dark, maroon #440a07 band, form input #30343b on #c0d0de.

Voice samples (§10) are verbatim from the live homepage and RNGD product page.

Brand narrative (§11): FuriosaAI is a South Korean fabless AI-chip company founded 2017 in Seoul,
CEO June Paik (백준호); products Warboy (Gen 1, vision) and RNGD ("Renegade", Gen 2, LLM/multimodal
inference, a Tensor Contraction Processor). These are widely documented public facts; specific
details beyond the live site are general public knowledge, not directly quoted from a verified
FuriosaAI statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable FuriosaAI audiences
(ML infra engineers, data-center architects, Korean deep-tech recruits). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "one red means action", "industrial not decorative as a rejection of
GPU-era spectacle") are editorial readings connecting FuriosaAI's observed design to its
positioning, not directly sourced FuriosaAI statements.
-->
