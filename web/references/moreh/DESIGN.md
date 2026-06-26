---
id: moreh
name: Moreh
display_name_kr: 모레
country: KR
category: backend-devops
homepage: "https://moreh.io"
primary_color: "#ff5700"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=moreh.io&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live Request-Demo CTA orange (#ff5700, Tailwind token bg-accent); lighter orange-400 (#ff793e) is the hover/secondary callout; darker burnt-orange (#dd4300) is the AA-safe inline link color on light. Ink is warm near-black (#050403); cream (#f8f7f4) is the sunken-section surface and the on-dark text. Footer is neutral-800 (#1c1a18)."
  colors:
    primary: "#ff5700"
    primary-hover: "#ff793e"
    link: "#dd4300"
    ink: "#050403"
    cream: "#f8f7f4"
    muted: "#65635f"
    faint: "#a09e9a"
    hairline: "#dfdeda"
    hairline-dashed: "#d2d1cd"
    dark: "#1c1a18"
    dark-border: "#2a2926"
    canvas: "#ffffff"
  typography:
    family: { sans: "Inter" }
    display-hero: { size: 94, weight: 600, lineHeight: 1.00, tracking: -3.74, use: "Hero headline, Inter SemiBold, fluid clamp" }
    display:      { size: 72, weight: 600, lineHeight: 1.05, tracking: -2.52, use: "Page title (Blog), Inter SemiBold" }
    section:      { size: 40, weight: 600, lineHeight: 1.12, tracking: -1.0, use: "Section titles (H2), Inter SemiBold" }
    subsection:   { size: 18, weight: 600, lineHeight: 1.30, tracking: -0.18, use: "Card / feature heads (H3)" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Inter" }
    nav:          { size: 14, weight: 400, lineHeight: 1.50, use: "Top nav links" }
    button:       { size: 14, weight: 500, lineHeight: 1.50, use: "CTA button label, Inter Medium" }
    small:        { size: 13, weight: 500, lineHeight: 1.55, use: "Inline accent links, dropdown items" }
    micro:        { size: 11, weight: 400, tracking: 1.32, use: "Footer legal pill, wide-tracked" }
  spacing: { xs: 6, sm: 8, md: 12, base: 16, lg: 20, xl: 24, section: 96 }
  rounded: { sm: 6, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#ff5700", fg: "#ffffff", radius: "6px", padding: "0px 18px", height: "40px", font: "14px / 500 Inter", states: "hover #ff793e", use: "Hero / nav primary CTA — Request Demo" }
    button-ghost: { type: button, fg: "#f8f7f4", radius: "6px", padding: "0px 18px", height: "40px", border: "1px solid rgba(255,255,255,0.25)", font: "14px / 500 Inter", use: "Secondary CTA on the dark hero — View Benchmarks" }
    text-link: { type: button, fg: "#dd4300", font: "13px / 500 Inter", use: "Inline accent link with arrow — Learn more, AMD GPU" }
    nav-item: { type: tab, fg: "#050403", font: "14px / 400 Inter", active: "text #dd4300 + bg #f8f7f4", use: "Top-nav dropdown trigger / current item" }
    callout-accent: { type: card, bg: "#ff5700", fg: "#ffffff", radius: "6px", padding: "20px 24px", use: "Orange highlight callout block in comparison rows" }
    callout-inverse: { type: card, bg: "#050403", fg: "#f8f7f4", radius: "6px", padding: "20px 24px", use: "Dark inverse callout block" }
    dropdown-menu: { type: dialog, bg: "#ffffff", radius: "6px", border: "1px solid #dfdeda", padding: "12px 0px", use: "Nav mega-dropdown panel (Products / Solutions)" }
    footer-pill: { type: badge, fg: "#a09e9a", radius: "6px", border: "1px solid #2a2926", padding: "6px 12px", font: "11px / 400 Inter", use: "Legal pill on dark footer — Privacy Policy, Terms" }
  components_harvested: true
---

# Design System Inspiration of Moreh

## 1. Visual Theme & Atmosphere

Moreh (모레) builds inference software that frees large language models from a single GPU vendor, and its homepage carries that same posture of disciplined, vendor-neutral engineering. The system is built on a warm near-black ink (`#050403`) rather than pure black, set on a pure-white canvas (`#ffffff`) and broken up by sunken cream bands (`#f8f7f4`). Against that quiet, almost editorial neutral field, a single saturated safety-orange (`#ff5700`) does all the persuading — it is the only chromatic color in the system, reserved for the primary "Request Demo" CTA and a handful of accent callouts. The effect is industrial and confident: this reads like infrastructure tooling that respects your attention, not a consumer app fighting for it.

The typographic voice is **Inter throughout**, run at SemiBold (weight 600) for display and dropping to 400/500 for everything functional — there is no second typeface and no light weight anywhere. What makes the system feel premium is the scale and the tracking: the hero headline "Optimal LLM Inference on Every Accelerator" lands at roughly 94px with a dramatic `-3.74px` negative letter-spacing and a 1.0 line-height, compressing the words into a single dense, engineered block. The cream hero type (`#f8f7f4`) sits on a `hero-dark` band of warm near-black (`#050403`), so the page opens dark and serious before resolving into bright white documentation-style sections below. Section titles (H2) run at 40px / 600 with `-1px` tracking; feature heads (H3) at 18px / 600.

Depth is deliberately suppressed. Live inspection found `box-shadow: none` across the hero, nav, headings, and cards — separation is done entirely with flat surfaces and thin `1px` hairlines in `#dfdeda` (or a `#d2d1cd` dashed variant for placeholder blocks), plus the alternation of white, cream (`#f8f7f4`), and dark (`#1c1a18`) full-width bands. Geometry is uniformly restrained: a single `6px` corner radius (`rounded-sm`) on every button, card, dropdown, and pill — never a sharp square, never a full pill. The footer drops to a neutral-800 charcoal (`#1c1a18`) with faint `#a09e9a` links and hairline `#2a2926` borders. Secondary text steps down through a warm-grey ladder — `#65635f` for muted body, `#a09e9a` for the faintest labels — and inline links use a darker burnt-orange (`#dd4300`) so they stay AA-legible on light surfaces while the brighter `#ff5700` and its `#ff793e` hover stay on solid CTA chrome.

**Key Characteristics:**
- Single saturated safety-orange (`#ff5700`) reserved for the primary CTA — the system's only chromatic color
- Warm near-black ink (`#050403`) instead of pure black; cream (`#f8f7f4`) sunken surfaces
- Inter everywhere at weight 600 display / 400-500 functional — one typeface, no light weight
- Dramatic negative tracking on display (`-3.74px` at 94px, `-1px` at 40px) compressing headlines into dense blocks
- Dark-to-light cadence: a near-black `hero-dark` (`#050403`) band opening into bright white + cream sections
- Flat, shadow-free depth — `1px #dfdeda` hairlines (and `#d2d1cd` dashed) do the separating
- Uniform `6px` radius on every interactive surface — no sharp squares, no full pills
- Two oranges by job: bright `#ff5700` / hover `#ff793e` on chrome, AA-safe `#dd4300` for inline links
- Charcoal `#1c1a18` footer with faint `#a09e9a` text and `#2a2926` hairline borders

## 2. Color Palette & Roles

### Primary
- **Moreh Orange** (`#ff5700`): The primary brand color and CTA background (Tailwind token `bg-accent`). A saturated safety-orange — the single "action" color across the whole system, used on the "Request Demo" button and accent callout blocks.
- **Orange Hover** (`#ff793e`): The lighter orange-400 (`bg-o-400`) used for hover states and softer accent callout rows.
- **Burnt-Orange Link** (`#dd4300`): The darker, AA-safe orange used for inline text links with arrows ("Learn more →", "AMD GPU →") and active nav items on light surfaces.

### Ink & Surface
- **Ink** (`#050403`): Primary text and heading color, and the `hero-dark` / inverse-callout background. A warm near-black — never pure black for body copy.
- **Cream** (`#f8f7f4`): The sunken-section surface (`section-sunken`) and the on-dark text color in the hero. A warm off-white that softens the alternating bands.
- **Pure White** (`#ffffff`): The default page canvas, white cards, and the dropdown-menu surface.

### Text Hierarchy
- **Ink** (`#050403`): Headings, nav, strong body text.
- **Muted Warm-Grey** (`#65635f`): Secondary body copy, descriptions, the language switcher label.
- **Faint Warm-Grey** (`#a09e9a`): Tertiary text, footer links, lowest-emphasis labels.

### Lines & Dark Surfaces
- **Hairline** (`#dfdeda`): The primary `1px` border for cards, dropdowns, and section dividers — the main separation device in a shadow-free system.
- **Dashed Hairline** (`#d2d1cd`): A `1px` dashed border for placeholder / drop-zone style blocks.
- **Footer Charcoal** (`#1c1a18`): The neutral-800 (`bg-n-800`) dark footer background.
- **Dark Border** (`#2a2926`): The hairline border on dark surfaces (footer legal pills).

## 3. Typography Rules

### Font Family
- **All text**: `Inter` (with the system sans fallback stack). There is one typeface — Inter carries display, body, nav, and UI. No serif, no monospace display, no second family.
- **Weights in use**: 600 (SemiBold) for all display/headings, 500 (Medium) for buttons and inline links, 400 (Regular) for body and nav. No light (300) and no heavy (700+) weights appear.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Inter | 94px (fluid) | 600 | 1.00 | -3.74px | Hero headline, cream on dark |
| Display | Inter | 72px | 600 | 1.05 | -2.52px | Page title (Blog) |
| Section Heading | Inter | 40px | 600 | 1.12 | -1px | Section titles (H2) |
| Sub-section | Inter | 18px | 600 | 1.30 | -0.18px | Card / feature heads (H3) |
| Body | Inter | 16px | 400 | 1.50 | normal | Standard reading text |
| Nav Link | Inter | 14px | 400 | 1.50 | normal | Top nav items |
| Button | Inter | 14px | 500 | 1.50 | normal | CTA button labels |
| Small / Link | Inter | 13px | 500 | 1.55 | normal | Inline accent links, dropdown items |
| Micro | Inter | 11px | 400 | 1.50 | 1.32px | Footer legal pill, wide-tracked |

### Principles
- **One typeface, weight does the work**: Inter at 600 for everything that headlines, 400/500 for everything that informs. Hierarchy comes from size and weight, never from a font swap.
- **Tracking tightens with size**: display compresses hard (`-3.74px` at 94px, `-2.52px` at 72px, `-1px` at 40px); body stays at normal tracking. The only positive tracking is the wide-set `1.32px` on the tiny footer legal pills.
- **No light weight**: unlike the whisper-weight headline trend, Moreh keeps display at a solid SemiBold 600 — engineered and legible, not ethereal.
- **Dense, technical body**: body sits at 16px / 1.5 in warm ink for long-form technical reading (the blog is research-report dense).

## 4. Component Stylings

### Buttons

**Request Demo (Primary)**
- Background: `#ff5700`
- Text: `#ffffff`
- Radius: 6px
- Padding: 0px 18px
- Height: 40px
- Font: 14px / 500 Inter
- Hover: `#ff793e` background
- Use: The single primary CTA — hero and nav "Request Demo"

**View Benchmarks (Ghost on Dark)**
- Background: transparent
- Text: `#f8f7f4`
- Radius: 6px
- Padding: 0px 18px
- Height: 40px
- Border: 1px solid rgba(255,255,255,0.25)
- Font: 14px / 500 Inter
- Use: Secondary CTA on the dark hero band

**Inline Accent Link**
- Text: `#dd4300`
- Font: 13px / 500 Inter
- Use: Arrow text links ("Learn more →", "AMD GPU →", "View all →")

### Inputs & Forms

**Search / Text Field**
- Background: `#ffffff`
- Border: 1px solid `#dfdeda`
- Radius: 6px
- Text: `#050403`
- Placeholder: `#a09e9a`
- Use: Docs/blog search and contact fields (hairline outline, no shadow)

### Cards & Containers

**Accent Callout**
- Background: `#ff5700`
- Text: `#ffffff`
- Radius: 6px
- Padding: 20px 24px
- Use: Orange highlight callout block in comparison/benchmark rows

**Inverse Callout**
- Background: `#050403`
- Text: `#f8f7f4`
- Radius: 6px
- Padding: 20px 24px
- Use: Dark inverse callout block

**Dashed Placeholder Card**
- Background: `#ffffff`
- Border: 1px dashed `#d2d1cd`
- Radius: 6px
- Padding: 20px 16px
- Use: Placeholder / empty comparison cell

### Badges

**Footer Legal Pill**
- Background: transparent
- Text: `#a09e9a`
- Border: 1px solid `#2a2926`
- Radius: 6px
- Padding: 6px 12px
- Font: 11px / 400 Inter
- Use: Legal links on the dark footer ("Privacy Policy", "Terms of Use"), wide 1.32px tracking

### Dropdown / Overlay

**Nav Mega-Dropdown**
- Background: `#ffffff`
- Border: 1px solid `#dfdeda`
- Radius: 6px
- Padding: 12px 0px
- Use: Products / Solutions / Resources / Company nav panels (near-flat, faint shadow only)

### Navigation
- Background: `#ffffff`
- Text: `#050403`
- Font: 14px / 400 Inter
- Active: burnt-orange `#dd4300` text on a `#f8f7f4` tinted item
- Use: Top horizontal nav (Products, Solutions, Performance, Resources, Careers, Company)

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://moreh.io, https://moreh.io/blog, https://github.com/moreh-dev
**Tier 2 sources:** getdesign.md/moreh — not listed (404 "No designs found"); styles.refero.design — no Moreh-specific entry
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px (6/8/12/16/20/24 ladder)
- Scale: 6px, 8px, 12px, 16px, 18px, 20px, 24px, 96px
- Notable: section vertical rhythm is generous (`96px` top/bottom padding on sunken bands); button horizontal padding is a tight `18px` for a compact, dense CTA

### Grid & Container
- Centered max-width content column with a dark `hero-dark` band (`#050403`) anchoring the top
- Feature grids: 2-3 column cards under "From Kernels to Clusters" and "Why Moreh"
- Full-width band alternation: dark hero → white → cream (`#f8f7f4`) sunken sections → charcoal footer
- Blog/news lists are single-column, hairline-divided rows (research-report density)

### Whitespace Philosophy
- **Editorial calm over density**: despite being deeply technical, the marketing surface breathes — generous 96px section rhythm.
- **Band cadence**: meaning is signaled by background band (dark / white / cream) rather than by boxes and shadows.
- **Hairline economy**: a single `1px #dfdeda` line replaces what other systems do with elevation.

### Border Radius Scale
- Small (6px): every button, card, dropdown, pill — the single workhorse radius (`rounded-sm`)
- Full (9999px): reserved only for circular avatars/dots, never for buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most cards |
| Band (Level 1) | Background shift — white ↔ cream `#f8f7f4` ↔ dark `#050403`/`#1c1a18` | Section separation without elevation |
| Hairline (Level 2) | `1px solid #dfdeda` (or `#d2d1cd` dashed) border | Card outlines, dropdown edges, dividers |
| Overlay (Level 3) | White dropdown with `1px #dfdeda` + a very faint shadow | Nav mega-dropdown panels only |

**Shadow Philosophy**: Moreh is a near-shadowless system. Live inspection found `box-shadow: none` across the hero, nav, section headings, and feature cards; the only elevation is a barely-there shadow on the nav dropdown. Depth is communicated through flat band contrast (dark `#050403` / white / cream `#f8f7f4` / charcoal `#1c1a18`) and thin `#dfdeda` hairlines. This is a deliberate engineering-grade flatness — it keeps an infrastructure product feeling precise and fast rather than decorative. When emphasis is needed, the system reaches for the orange (`#ff5700`) or an inverse dark block, never a drop shadow.

## 7. Do's and Don'ts

### Do
- Reserve orange (`#ff5700`) for the single primary CTA — keep it the only chromatic color
- Use warm near-black ink (`#050403`) for text and dark bands instead of pure black
- Set all display in Inter SemiBold (600) with tight negative tracking (`-3.74px` at hero)
- Separate sections with flat band contrast (white / cream `#f8f7f4` / dark) and `#dfdeda` hairlines, not shadows
- Keep a uniform `6px` radius on every button, card, dropdown, and pill
- Use the AA-safe burnt-orange (`#dd4300`) for inline text links on light surfaces
- Open the page on the dark `hero-dark` (`#050403`) band with cream (`#f8f7f4`) headline type
- Step secondary text down the warm-grey ladder (`#65635f` → `#a09e9a`)

### Don't
- Don't spread orange across many elements — it dilutes the single-action signal
- Don't use drop shadows for elevation — Moreh is a flat, hairline-separated system
- Don't use pure black (`#000000`) for body text — reserve warm ink `#050403`
- Don't use sharp squares or full pills on interactive elements — everything is `6px`
- Don't introduce a second typeface or a light weight — Inter 600/500/400 only
- Don't put the bright `#ff5700` on small inline links — use `#dd4300` for legibility
- Don't use positive letter-spacing on display — Moreh tracks tight (positive tracking only on the tiny footer pills)
- Don't add a second accent hue — orange is the only saturated color

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses sharply, nav collapses to a menu |
| Tablet | 640-1024px | 2-up feature cards, moderate padding |
| Desktop | 1024-1440px | Full layout, centered content, 3-column feature grids |

### Touch Targets
- Primary CTA at 40px height with 18px horizontal padding — compact but tappable
- Nav items at 36-37px with comfortable hit areas; dropdown rows at 75px
- Footer legal pills at ~31px height with 12px padding

### Collapsing Strategy
- Hero: the ~94px fluid headline scales down on mobile, weight 600 maintained
- Feature grids: 3-column → 2-column → stacked single column
- Band alternation (dark / white / cream) maintained full-width across breakpoints
- Nav mega-dropdowns collapse into an accordion menu

### Image Behavior
- Benchmark charts and diagrams sit on cream (`#f8f7f4`) or white cards with hairline borders, no shadow at any size
- Cards maintain the `6px` radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Moreh Orange (`#ff5700`)
- CTA hover / soft accent: Orange Hover (`#ff793e`)
- Inline link: Burnt-Orange (`#dd4300`)
- Ink / heading text: Warm Near-Black (`#050403`)
- On-dark text / cream surface: Cream (`#f8f7f4`)
- Canvas: Pure White (`#ffffff`)
- Muted text: Warm-Grey (`#65635f`)
- Faint / footer text: Faint Warm-Grey (`#a09e9a`)
- Hairline: `#dfdeda` (dashed `#d2d1cd`)
- Dark footer: `#1c1a18` (border `#2a2926`)

### Example Component Prompts
- "Create a dark hero on `#050403` background. Headline at ~94px Inter weight 600, line-height 1.0, letter-spacing -3.74px, color `#f8f7f4`. Two CTAs: a solid orange button (`#ff5700` bg, white text, 6px radius, 0px 18px padding, 40px height, 14px/500) and a ghost button (transparent, 1px solid rgba(255,255,255,0.25), `#f8f7f4` text, 6px radius)."
- "Design a feature card: white `#ffffff` background, 1px solid `#dfdeda` border, 6px radius, no shadow. Title 18px Inter weight 600, letter-spacing -0.18px, `#050403`. Body 16px weight 400, `#65635f`. Inline link in `#dd4300`, 13px/500, with a → arrow."
- "Build a sunken section: `#f8f7f4` background, 96px vertical padding, 1px top border `#dfdeda`. Section title 40px Inter weight 600, letter-spacing -1px, `#050403`."
- "Create a dark footer: `#1c1a18` background, faint `#a09e9a` links, legal pills with 1px solid `#2a2926` border, 6px radius, 6px 12px padding, 11px Inter with 1.32px tracking."

### Iteration Guide
1. Inter at weight 600 for every headline; 400/500 for everything else — one typeface only
2. Orange (`#ff5700`) is the single action color — don't spread it; `#dd4300` for inline links
3. No shadows — separate with band contrast and `#dfdeda` hairlines
4. Uniform `6px` radius everywhere; full-round only for avatars
5. Text is warm ink `#050403`, never pure black for body
6. Tight negative tracking on display, normal on body
7. Open dark (`#050403`), resolve into white + cream (`#f8f7f4`) sections, close on charcoal (`#1c1a18`)

---

## 10. Voice & Tone

Moreh's voice is **precise, technical, and quietly ambitious** — the register of systems engineers who would rather show a benchmark than make a claim. The hero line "Optimal LLM Inference on Every Accelerator" sets the tone: a concrete capability promise, no hype, no exclamation. Copy assumes a sophisticated reader (ML infra engineers, platform leads) and speaks peer-to-peer — section titles like "From Kernels to Clusters" telegraph the full stack in five words, and the blog is dense, citation-style "Technical Report" writing, not marketing fluff.

| Context | Tone |
|---|---|
| Hero headlines | Declarative capability statements. "Optimal LLM Inference on Every Accelerator." No superlatives. |
| Section titles | Compressed, technical. "From Kernels to Clusters", "Why Moreh", "Ecosystem & Open Source". |
| CTAs | Direct, low-pressure imperatives. "Request Demo", "View Benchmarks", "Learn more". |
| Product names | Systematic, prefixed. "MoAI Inference Framework", "MoAI Performance Gateway", "MoAI Fabric". |
| Blog / technical reports | Dense, evidence-first, engineer-to-engineer. Performance numbers precede prose. |

**Voice samples (verbatim from live surfaces):**
- "Optimal LLM Inference on Every Accelerator" — hero headline. *(verified live 2026-06-26)*
- "Inference Software for Every Chip" — page title meta. *(verified live 2026-06-26)*
- "From Kernels to Clusters" — section heading. *(verified live 2026-06-26)*
- "Request Demo" / "View Benchmarks" — hero CTA labels. *(verified live 2026-06-26)*

**Forbidden register**: hype superlatives ("revolutionary", "game-changing"), exclamation-heavy marketing, vague AI buzzwords without a concrete mechanism, claims unbacked by a benchmark.

## 11. Brand Narrative

Moreh (모레) is a Korean AI-infrastructure software company founded in **September 2020** by **Gangwon Jo (조강원, CEO)** and **Jaejin Lee (이재진)** — a lineage rooted in Seoul National University's high-performance and parallel-computing research. The founding premise is a direct response to a structural problem in the AI industry: training and inference are effectively locked to a single GPU vendor's software stack (CUDA), which concentrates cost and supply risk. Moreh's answer is a software layer — branded **MoAI** — that turns *heterogeneous* accelerators (AMD Instinct GPUs, Tenstorrent, and more) into unified, high-performance clusters, so an organization can "run frontier models on the hardware they already have."

That thesis is visible across the product line: the **MoAI Inference Framework** (end-to-end inference), **MoAI Performance Gateway** (intelligent workload routing), **MoAI Fabric** (software-defined, cross-vendor interconnect), and drop-in **Moreh vLLM** replacements for AMD and Tenstorrent. The company's positioning — "Infrastructure software for hyperscale AI" / "Optimal LLM Inference on Every Accelerator" — frames Moreh as the vendor-neutral layer beneath the model, solving the hard, unglamorous problems: parallelization, disaggregation, cluster scheduling, and hardware-level optimization.

What Moreh refuses, visible in its design: the loud, gradient-heavy aesthetic of consumer AI marketing, and the institutional blandness of legacy enterprise infra. What it embraces: a flat, engineering-grade interface; a single confident orange used sparingly as a signal; dark-to-light editorial bands; and benchmark-first, evidence-led communication. The restraint is the message — this is a company that would rather be trusted by infrastructure engineers than admired by a broad audience.

## 12. Principles

1. **Vendor neutrality is the product.** Moreh exists to break single-vendor lock-in. *UI implication:* never visually privilege one hardware vendor; present AMD, Tenstorrent, and others as peers on equal cards.
2. **Evidence over claims.** The product is sold on benchmarks, not adjectives. *UI implication:* lead with numbers and charts; the "View Benchmarks" CTA sits beside "Request Demo".
3. **One signal color.** Orange (`#ff5700`) means "act." *UI implication:* reserve the saturated orange for the primary CTA so the next step is never ambiguous; everything else stays neutral.
4. **Flat and engineered.** Precision beats decoration. *UI implication:* no shadows; separate with band contrast and hairlines; one `6px` radius everywhere.
5. **Density where it informs, calm where it persuades.** *UI implication:* research-dense blog rows and benchmark tables; airy, 96px-spaced marketing sections with one headline and one action.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Moreh user segments (ML-infrastructure engineers, platform leads at GPU-cost-sensitive orgs, sovereign-AI / non-NVIDIA adopters), not individual people.*

**정현우, 34, 서울.** A platform engineer at a Korean cloud provider standing up an AMD Instinct cluster. Distrusts marketing decks; reads the "Technical Report" blog posts line by line and re-runs the published benchmarks before trusting a number. Chose Moreh because it let him serve vLLM workloads on non-NVIDIA hardware without rewriting the stack.

**Aarti Desai, 29, Bangalore.** An MLOps lead at a startup squeezed by GPU supply and cost. Cares about tokens-per-dollar more than peak FLOPs. Uses the "Inference Cost Optimization" path; appreciates that Moreh frames the win in concrete economic terms rather than abstract "acceleration."

**Daniel Kim, 41, Santa Clara.** An infra architect at an enterprise evaluating a multi-vendor accelerator strategy to de-risk supply. Values the heterogeneous-cluster story and the software-defined fabric. Trusts the brand's restraint — the absence of hype reads, to him, as engineering seriousness.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no benchmark results)** | White canvas. Single Ink (`#050403`) line explaining no results yet, with one orange (`#ff5700`) CTA to run/request a benchmark. Dashed `#d2d1cd` placeholder card, no clutter. |
| **Empty (blog filter, none)** | Muted Warm-Grey (`#65635f`) single line: nothing matches this filter, with a path back. Calm and honest. |
| **Loading (results fetch)** | Skeleton rows on `#f8f7f4` cream surface at final dimensions, 6px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place table refresh)** | Subtle orange (`#ff5700`) progress affordance; previous values stay visible. |
| **Error (request failed)** | Inline message in Ink (`#050403`) with a plain explanation and a retry. No generic "Something went wrong" alone — states the next step. |
| **Error (form validation)** | Field-level message below the input; describes what is valid, not just "Required". |
| **Success (demo requested)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f8f7f4` blocks at final dimensions, 6px radius, flat pulse. |
| **Disabled** | Faint Warm-Grey (`#a09e9a`) text on reduced-opacity surface; orange actions fade rather than turn grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus, nav-dropdown reveal |
| `motion-standard` | 200ms | Card / section reveal, dropdown panel, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — dropdowns, cards, sections |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, engineered aesthetic. Nav mega-dropdowns fade/translate in at `motion-fast / ease-enter`; section content fades up from below at `motion-standard`. There is no bounce or spring — an infrastructure product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on https://moreh.io and https://moreh.io/blog:
- Hero H1 "Optimal LLM Inference on Every Accelerator" — Inter 93.6px / weight 600 / -3.744px / line-height 93.6px / color #f8f7f4 on hero-dark #050403
- Primary CTA "Request Demo" — bg #ff5700 / white text / 6px radius / 0px 18px padding / 40px height / 14px/500
- Ghost CTA "View Benchmarks" — transparent / #f8f7f4 text / 6px radius / 1px rgba(255,255,255,0.25) border
- Section H2 "From Kernels to Clusters" / "Why Moreh" — Inter 40px / 600 / -1px / #050403
- Inline links "Learn more →" / "AMD GPU →" — #dd4300 / 13px / 500
- Footer (bg-n-800) #1c1a18 with #a09e9a links and #2a2926 hairline pill borders
- box-shadow: none across hero/nav/headings/cards (shadowless system confirmed)
- Page title meta: "Moreh — Inference Software for Every Chip"

Token-level claims (§1-9) are sourced from this live inspection (semantic Tailwind classes observed: bg-accent #ff5700, bg-o-400 #ff793e, bg-inverse/text-on-inverse #050403, bg-n-800 #1c1a18, section-sunken #f8f7f4, rounded-sm 6px).

Voice samples (§10) are verbatim from live surfaces (hero H1, page title meta, section H2, CTA labels).

Brand narrative (§11): Moreh (모레) founded September 2020; CEO Gangwon Jo (조강원), co-founder Jaejin Lee (이재진); MoAI product line and vendor-neutral / non-NVIDIA inference positioning are confirmed from moreh.io and moreh.io/about (WebFetch 2026-06-26). Specific founding/biographical details beyond the site are widely documented public knowledge, not directly quoted from a verified Moreh statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Moreh user segments (ML-infrastructure engineers, GPU-cost-sensitive platform teams, non-NVIDIA adopters). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "vendor neutrality is the product", "the restraint is the message") are editorial readings connecting Moreh's observed design to its positioning, not directly sourced Moreh statements.
-->
