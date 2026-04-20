---
omd: 0.1
brand: NVIDIA
---

# Design System Inspiration of NVIDIA

## 1. Visual Theme & Atmosphere

NVIDIA's website is a high-contrast, technology-forward experience that communicates raw computational power through design restraint. The page is built on a stark black (`#000000`) and white (`#ffffff`) foundation, punctuated by NVIDIA's signature green (`#76b900`) -- a color so specific it functions as a brand fingerprint. This is not the lush green of nature; it's the electric, lime-shifted green of GPU-rendered light, a color that sits between chartreuse and kelly green and immediately signals "NVIDIA" to anyone in technology.

The custom NVIDIA-EMEA font family (with Arial and Helvetica fallbacks) creates a clean, industrial typographic voice. Headings at 36px bold with tight 1.25 line-height create dense, authoritative blocks of text. The font lacks the geometric playfulness of Silicon Valley sans-serifs -- it's European, pragmatic, and engineering-focused. Body text runs at 15-16px, comfortable for reading but not generous, maintaining the sense that screen real estate is optimized like GPU memory.

What distinguishes NVIDIA's design from other dark-background tech sites is the disciplined use of the green accent. The `#76b900` appears in borders (`2px solid #76b900`), link underlines (`underline 2px rgb(118, 185, 0)`), and CTAs -- but never as backgrounds or large surface areas on the main content. The green is a signal, not a surface. Combined with a deep shadow system (`rgba(0, 0, 0, 0.3) 0px 0px 5px`) and minimal border radius (1-2px), the overall effect is of precision engineering hardware rendered in pixels.

**Key Characteristics:**
- NVIDIA Green (`#76b900`) as pure accent -- borders, underlines, and interactive highlights only
- Black (`#000000`) dominant background with white (`#ffffff`) text on dark sections
- NVIDIA-EMEA custom font with Arial/Helvetica fallback -- industrial, European, clean
- Tight line-heights (1.25 for headings) creating dense, authoritative text blocks
- Minimal border radius (1-2px) -- sharp, engineered corners throughout
- Green-bordered buttons (`2px solid #76b900`) as primary interactive pattern
- Font Awesome 6 Pro/Sharp icon system at weight 900 for sharp iconography
- Multi-framework architecture (PrimeReact, Fluent UI, Element Plus) enabling rich interactive components

### Do's and Don'ts

- **DO** use NVIDIA Green `#76b900` exclusively as a SIGNAL color — borders, link underlines, button outlines, focus states.
- **DON'T** use the green as a fill on large surfaces, backgrounds, or decorative gradients — that destroys its function as a fingerprint accent.
- **DO** keep the foundation black-and-white. Black `#000000` for dark sections, white `#ffffff` for content, with green pinpricks of accent.
- **DON'T** introduce mid-tone backgrounds (gray cards, tinted sections) — NVIDIA's contrast is binary by design.
- **DO** use sharp 1-2px border radius across all components — buttons, cards, inputs.
- **DON'T** use rounded or pill-shaped buttons — that reads as friendly consumer tech, not high-precision engineering hardware.
- **DO** apply tight 1.25 line-height to headings for dense, authoritative blocks of text.
- **DON'T** use generous 1.5+ line-height on display headers — it relaxes the engineered, compressed feel.
- **DO** use `2px solid #76b900` as the primary button border pattern — green-outlined CTAs are the brand's default interactive shape.
- **DON'T** use filled green buttons as the primary pattern — fills belong to consumer brands; NVIDIA reserves green for outlines and accents.
- **DO** use Font Awesome 6 Pro/Sharp at weight 900 for sharp iconography matching the engineering aesthetic.
- **DON'T** use rounded or playful icon sets — they conflict with NVIDIA's industrial precision.

## 2. Color Palette & Roles

### Primary Brand
- **NVIDIA Green** (`#76b900`): The signature -- borders, link underlines, CTA outlines, active indicators. Never used as large surface fills.
- **True Black** (`#000000`): Primary page background, text on light surfaces, dominant tone.
- **Pure White** (`#ffffff`): Text on dark backgrounds, light section backgrounds, card surfaces.

### Extended Brand Palette
- **NVIDIA Green Light** (`#bff230`): Bright lime accent for highlights and hover states.
- **Orange 400** (`#df6500`): Warm accent for alerts, featured badges, or energy-related contexts.
- **Yellow 300** (`#ef9100`): Secondary warm accent, product category highlights.
- **Yellow 050** (`#feeeb2`): Light warm surface for callout backgrounds.

### Status & Semantic
- **Red 500** (`#e52020`): Error states, destructive actions, critical alerts.
- **Red 800** (`#650b0b`): Deep red for severe warning backgrounds.
- **Green 500** (`#3f8500`): Success states, positive indicators (darker than brand green).
- **Blue 700** (`#0046a4`): Informational accents, link hover alternative.

### Decorative
- **Purple 800** (`#4d1368`): Deep purple for gradient ends, premium/AI contexts.
- **Purple 100** (`#f9d4ff`): Light purple surface tint.
- **Fuchsia 700** (`#8c1c55`): Rich accent for special promotions or featured content.

### Neutral Scale
- **Gray 300** (`#a7a7a7`): Muted text, disabled labels.
- **Gray 400** (`#898989`): Secondary text, metadata.
- **Gray 500** (`#757575`): Tertiary text, placeholders, footers.
- **Gray Border** (`#5e5e5e`): Subtle borders, divider lines.
- **Near Black** (`#1a1a1a`): Dark surfaces, card backgrounds on black pages.

### Interactive States
- **Link Default (dark bg)** (`#ffffff`): White links on dark backgrounds.
- **Link Default (light bg)** (`#000000`): Black links with green underline on light backgrounds.
- **Link Hover** (`#3860be`): Blue shift on hover across all link variants.
- **Button Hover** (`#1eaedb`): Teal highlight for button hover states.
- **Button Active** (`#007fff`): Bright blue for active/pressed button states.
- **Focus Ring** (`#000000 solid 2px`): Black outline for keyboard focus.

### Shadows & Depth
- **Card Shadow** (`rgba(0, 0, 0, 0.3) 0px 0px 5px 0px`): Subtle ambient shadow for elevated cards.

## 3. Typography Rules

### Font Family
- **Primary**: `NVIDIA-EMEA`, with fallbacks: `Arial, Helvetica, sans-serif`
- **Icon Font**: `Font Awesome 6 Pro` (weight 900 for solid icons, 700 for regular)
- **Icon Sharp**: `Font Awesome 6 Sharp` (weight 300 for light icons, 400 for regular)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | NVIDIA-EMEA | 36px (2.25rem) | 700 | 1.25 (tight) | normal | Maximum impact headlines |
| Section Heading | NVIDIA-EMEA | 24px (1.50rem) | 700 | 1.25 (tight) | normal | Section titles, card headings |
| Sub-heading | NVIDIA-EMEA | 22px (1.38rem) | 400 | 1.75 (relaxed) | normal | Feature descriptions, subtitles |
| Card Title | NVIDIA-EMEA | 20px (1.25rem) | 700 | 1.25 (tight) | normal | Card and module headings |
| Body Large | NVIDIA-EMEA | 18px (1.13rem) | 700 | 1.67 (relaxed) | normal | Emphasized body, lead paragraphs |
| Body | NVIDIA-EMEA | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text |
| Body Bold | NVIDIA-EMEA | 16px (1.00rem) | 700 | 1.50 | normal | Strong labels, nav items |
| Body Small | NVIDIA-EMEA | 15px (0.94rem) | 400 | 1.67 (relaxed) | normal | Secondary content, descriptions |
| Body Small Bold | NVIDIA-EMEA | 15px (0.94rem) | 700 | 1.50 | normal | Emphasized secondary content |
| Button Large | NVIDIA-EMEA | 18px (1.13rem) | 700 | 1.25 (tight) | normal | Primary CTA buttons |
| Button | NVIDIA-EMEA | 16px (1.00rem) | 700 | 1.25 (tight) | normal | Standard buttons |
| Button Compact | NVIDIA-EMEA | 14.4px (0.90rem) | 700 | 1.00 (tight) | 0.144px | Small/compact buttons |
| Link | NVIDIA-EMEA | 14px (0.88rem) | 700 | 1.43 | normal | Navigation links |
| Link Uppercase | NVIDIA-EMEA | 14px (0.88rem) | 700 | 1.43 | normal | `text-transform: uppercase`, nav labels |
| Caption | NVIDIA-EMEA | 14px (0.88rem) | 600 | 1.50 | normal | Metadata, timestamps |
| Caption Small | NVIDIA-EMEA | 12px (0.75rem) | 400 | 1.25 (tight) | normal | Fine print, legal |
| Micro Label | NVIDIA-EMEA | 10px (0.63rem) | 700 | 1.50 | normal | `text-transform: uppercase`, tiny badges |
| Micro | NVIDIA-EMEA | 11px (0.69rem) | 700 | 1.00 (tight) | normal | Smallest UI text |

### Principles
- **Bold as the default voice**: NVIDIA leans heavily on weight 700 for headings, buttons, links, and labels. The 400 weight is reserved for body text and descriptions -- everything else is bold, projecting confidence and authority.
- **Tight headings, relaxed body**: Heading line-height is consistently 1.25 (tight), while body text relaxes to 1.50-1.67. This contrast creates visual density at the top of content blocks and comfortable readability in paragraphs.
- **Uppercase for navigation**: Link labels use `text-transform: uppercase` with weight 700, creating a navigation voice that reads like hardware specification labels.
- **No decorative tracking**: Letter-spacing is normal throughout, except for compact buttons (0.144px). The font itself carries the industrial character without manipulation.

## 4. Component Stylings

### Buttons

**Primary (Green Border)**
- Background: `transparent`
- Text: `#000000`
- Padding: 11px 13px
- Border: `2px solid #76b900`
- Radius: 2px
- Font: 16px weight 700
- Hover: background `#1eaedb`, text `#ffffff`
- Active: background `#007fff`, text `#ffffff`, border `1px solid #003eff`, scale(1)
- Focus: background `#1eaedb`, text `#ffffff`, outline `#000000 solid 2px`, opacity 0.9
- Use: Primary CTA ("Learn More", "Explore Solutions")

**Secondary (Green Border Thin)**
- Background: transparent
- Border: `1px solid #76b900`
- Radius: 2px
- Use: Secondary actions, alternative CTAs

**Compact / Inline**
- Font: 14.4px weight 700
- Letter-spacing: 0.144px
- Line-height: 1.00
- Use: Inline CTAs, compact navigation

### Cards & Containers
- Background: `#ffffff` (light) or `#1a1a1a` (dark sections)
- Border: none (clean edges) or `1px solid #5e5e5e`
- Radius: 2px
- Shadow: `rgba(0, 0, 0, 0.3) 0px 0px 5px 0px` for elevated cards
- Hover: shadow intensification
- Padding: 16-24px internal

### Links
- **On Dark Background**: `#ffffff`, no underline, hover shifts to `#3860be`
- **On Light Background**: `#000000` or `#1a1a1a`, underline `2px solid #76b900`, hover shifts to `#3860be`, underline removed
- **Green Links**: `#76b900`, hover shifts to `#3860be`
- **Muted Links**: `#666666`, hover shifts to `#3860be`

### Navigation
- Dark black background (`#000000`)
- Logo left-aligned, prominent NVIDIA wordmark
- Links: NVIDIA-EMEA 14px weight 700 uppercase, `#ffffff`
- Hover: color shift, no underline change
- Mega-menu dropdowns for product categories
- Sticky on scroll with backdrop

### Image Treatment
- Product/GPU renders as hero images, often full-width
- Screenshot images with subtle shadow for depth
- Green gradient overlays on dark hero sections
- Circular avatar containers with 50% radius

### Distinctive Components

**Product Cards**
- Clean white or dark card with minimal radius (2px)
- Green accent border or underline on title
- Bold heading + lighter description pattern
- CTA with green border at bottom

**Tech Spec Tables**
- Industrial grid layouts
- Alternating row backgrounds (subtle gray shift)
- Bold labels, regular values
- Green highlights for key metrics

**Cookie/Consent Banner**
- Fixed bottom positioning
- Rounded buttons (2px radius)
- Gray border treatments

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 2px, 3px, 4px, 5px, 6px, 7px, 8px, 9px, 10px, 11px, 12px, 13px, 15px
- Primary padding values: 8px, 11px, 13px, 16px, 24px, 32px
- Section spacing: 48-80px vertical padding

### Grid & Container
- Max content width: approximately 1200px (contained)
- Full-width hero sections with contained text
- Feature sections: 2-3 column grids for product cards
- Single-column for article/blog content
- Sidebar layouts for documentation

### Whitespace Philosophy
- **Purposeful density**: NVIDIA uses tighter spacing than typical SaaS sites, reflecting the density of technical content. White space exists to separate concepts, not to create luxury emptiness.
- **Section rhythm**: Dark sections alternate with white sections, using background color (not just spacing) to separate content blocks.
- **Card density**: Product cards sit close together with 16-20px gaps, creating a catalog feel rather than a gallery feel.

### Border Radius Scale
- Micro (1px): Inline spans, tiny elements
- Standard (2px): Buttons, cards, containers, inputs -- the default for nearly everything
- Circle (50%): Avatar images, circular tab indicators

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page backgrounds, inline text |
| Subtle (Level 1) | `rgba(0,0,0,0.3) 0px 0px 5px 0px` | Standard cards, modals |
| Border (Level 1b) | `1px solid #5e5e5e` | Content dividers, section borders |
| Green accent (Level 2) | `2px solid #76b900` | Active elements, CTAs, selected items |
| Focus (Accessibility) | `2px solid #000000` outline | Keyboard focus ring |

**Shadow Philosophy**: NVIDIA's depth system is minimal and utilitarian. There is essentially one shadow value -- a 5px ambient blur at 30% opacity -- used sparingly for cards and modals. The primary depth signal is not shadow but _color contrast_: black backgrounds next to white sections, green borders on black surfaces. This creates hardware-like visual layering where depth comes from material difference, not simulated light.

### Decorative Depth
- Green gradient washes behind hero content
- Dark-to-darker gradients (black to near-black) for section transitions
- No glassmorphism or blur effects -- clarity over atmosphere

## 7. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <375px | Compact single column, reduced padding |
| Mobile | 375-425px | Standard mobile layout |
| Mobile Large | 425-600px | Wider mobile, some 2-col hints |
| Tablet Small | 600-768px | 2-column grids begin |
| Tablet | 768-1024px | Full card grids, expanded nav |
| Desktop | 1024-1350px | Standard desktop layout |
| Large Desktop | >1350px | Maximum content width, generous margins |

### Touch Targets
- Buttons use 11px 13px padding for comfortable tap targets
- Navigation links at 14px uppercase with adequate spacing
- Green-bordered buttons provide high-contrast touch targets on dark backgrounds
- Mobile: hamburger menu collapse with full-screen overlay

### Collapsing Strategy
- Hero: 36px heading scales down proportionally
- Navigation: full horizontal nav collapses to hamburger menu at ~1024px
- Product cards: 3-column to 2-column to single column stacked
- Footer: multi-column grid collapses to single stacked column
- Section spacing: 64-80px reduces to 32-48px on mobile
- Images: maintain aspect ratio, scale to container width

### Image Behavior
- GPU/product renders maintain high resolution at all sizes
- Hero images scale proportionally with viewport
- Card images use consistent aspect ratios
- Full-bleed dark sections maintain edge-to-edge treatment

## 8. Responsive Behavior (Extended)

### Typography Scaling
- Display 36px scales to ~24px on mobile
- Section headings 24px scale to ~20px on mobile
- Body text maintains 15-16px across all breakpoints
- Button text maintains 16px for consistent tap targets

### Dark/Light Section Strategy
- Dark sections (black bg, white text) alternate with light sections (white bg, black text)
- The green accent remains consistent across both surface types
- On dark: links are white, underlines are green
- On light: links are black, underlines are green
- This alternation creates natural scroll rhythm and content grouping

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent: NVIDIA Green (`#76b900`)
- Background dark: True Black (`#000000`)
- Background light: Pure White (`#ffffff`)
- Heading text (dark bg): White (`#ffffff`)
- Heading text (light bg): Black (`#000000`)
- Body text (light bg): Black (`#000000`) or Near Black (`#1a1a1a`)
- Body text (dark bg): White (`#ffffff`) or Gray 300 (`#a7a7a7`)
- Link hover: Blue (`#3860be`)
- Border accent: `2px solid #76b900`
- Button hover: Teal (`#1eaedb`)

### Example Component Prompts
- "Create a hero section on black background. Headline at 36px NVIDIA-EMEA weight 700, line-height 1.25, color #ffffff. Subtitle at 18px weight 400, line-height 1.67, color #a7a7a7. CTA button with transparent background, 2px solid #76b900 border, 2px radius, 11px 13px padding, text #ffffff. Hover: background #1eaedb, text white."
- "Design a product card: white background, 2px border-radius, box-shadow rgba(0,0,0,0.3) 0px 0px 5px. Title at 20px NVIDIA-EMEA weight 700, line-height 1.25, color #000000. Body at 15px weight 400, line-height 1.67, color #757575. Green underline accent on title: border-bottom 2px solid #76b900."
- "Build a navigation bar: #000000 background, sticky top. NVIDIA logo left-aligned. Links at 14px NVIDIA-EMEA weight 700 uppercase, color #ffffff. Hover: color #3860be. Green-bordered CTA button right-aligned."
- "Create a dark feature section: #000000 background. Section label at 14px weight 700 uppercase, color #76b900. Heading at 24px weight 700, color #ffffff. Description at 16px weight 400, color #a7a7a7. Three product cards in a row with 20px gap."
- "Design a footer: #000000 background. Multi-column layout with link groups. Links at 14px weight 400, color #a7a7a7. Hover: color #76b900. Bottom bar with legal text at 12px, color #757575."

### Iteration Guide
1. Always use `#76b900` as accent, never as a background fill -- it's a signal color for borders, underlines, and highlights
2. Buttons are transparent with green borders by default -- filled backgrounds appear only on hover/active states
3. Weight 700 is the dominant voice for all interactive and heading elements; 400 is only for body paragraphs
4. Border radius is 2px for everything -- this sharp, minimal rounding is core to the industrial aesthetic
5. Dark sections use white text; light sections use black text -- green accent works identically on both
6. Link hover is always `#3860be` (blue) regardless of the link's default color
7. Line-height 1.25 for headings, 1.50-1.67 for body text -- maintain this contrast for visual hierarchy
8. Navigation uses uppercase 14px bold -- this hardware-label typography is part of the brand voice

---

## 10. Voice & Tone

NVIDIA speaks like the engineering team that built the silicon it is selling — declarative, technically exact, and quietly certain that the platform matters. Claims are stated rather than argued, because the benchmarks are expected to do the arguing. Marketing copy and developer documentation share the same register: short, capability-first sentences, concrete metrics when available, and a refusal to soften specifications into adjectives. Superlatives are reserved for things that are literally the fastest or the most; everything else gets named precisely or not at all. The overall effect is closer to a datasheet with a headline than a consumer product page.

| Context | Tone |
|---|---|
| Headlines | Product-name + capability claim, no mood-setting. "NVIDIA Delivers the Lowest Token Cost" — noun, verb, metric. |
| Product CTAs | Verb + noun, two words when possible. "Learn More", "Register Now", "Watch On Demand", "Read Blog". |
| Developer docs | Direct imperative. "Deploy more secure, always-on AI assistants with a single command." API names appear inline, unhedged. |
| Keynote / founder voice | First-person plural, declarative-missional. "We are a learning machine. The mission is boss." — no qualifier, no softening. |
| Research page | Discovery-framed, outcome-neutral. "Passionate about developing the technology and finding the breakthroughs that bring positive change to the world." |
| Benchmark / performance claims | Metric-first, unit-precise. "Cost per token is the key metric for inference TCO, and NVIDIA Blackwell leads on the metric that matters." |
| Error (technical / runtime) | CUDA-style: error code + one-line cause + one-line recovery. No apology, no emoji. |
| Legal / compliance surfaces | Formal, unadorned. Export control and licensing language reads like the regulation it is quoting. |
| Community / developer forum replies | Peer-engineer register. Acknowledges the bug, names the fix version, moves on. |

**Forbidden phrases.** "Revolutionary", "game-changing", "unleash" (unless literal), "cutting-edge" as a modifier, "just", "simply", "easy peasy", exclamation marks on specification claims, emoji in product announcements, performance hype words ("blazing-fast", "lightning-quick") without a number attached, and any sentence that names a competitor to diminish it. Avoid generic AI-era tropes ("AI-powered X", "the future of Y") unless the specific AI architecture is named in the same sentence. Do not use gaming-marketing adjectives ("epic", "insane", "beast") in enterprise or research surfaces.

**Voice samples.**

- "Learn More" <!-- verified: https://www.nvidia.com/en-us/, 2026-04 -->
- "Register Now" <!-- verified: https://www.nvidia.com/en-us/, 2026-04 -->
- "Watch On Demand" <!-- verified: https://www.nvidia.com/en-us/, 2026-04 -->
- "Out Now" <!-- verified: https://www.nvidia.com/en-us/, 2026-04 -->
- "Deploy more secure, always-on AI assistants with a single command." <!-- verified: https://developer.nvidia.com/, 2026-04 -->
- "Cost per token is the key metric for inference TCO, and NVIDIA Blackwell leads on the metric that matters." <!-- verified: https://www.nvidia.com/en-us/, 2026-04 -->
- "NVIDIA pioneered accelerated computing to tackle challenges no one else can solve." <!-- cited: https://www.nvidia.com/en-us/about-nvidia/ -->
- "We are a learning machine. The mission is boss. Everyone has a voice." <!-- cited: Jensen Huang, https://www.nvidia.com/en-us/about-nvidia/ -->
- Error (runtime example): "CUDA error 700: an illegal memory access was encountered. Check kernel launch configuration." <!-- illustrative: not verified as live NVIDIA copy -->
- Empty state (developer portal): "No results for `<query>`. Browse by topic or try a broader term." <!-- illustrative: not verified as live NVIDIA copy -->

## 11. Brand Narrative

NVIDIA was founded on April 5, 1993, at a Denny's in San Jose by Jensen Huang, Chris Malachowsky, and Curtis Priem, with an initial mission to "bring 3D graphics to the gaming and multimedia markets" ([nvidia.com/en-us/about-nvidia/corporate-timeline](https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/)). The founding bet was that a dedicated parallel processor for graphics would, over a long enough time horizon, matter more than faster general-purpose CPUs. In 1999 the company shipped what it called the first GPU; in 2006 it opened that parallel architecture to general computation with CUDA; and in 2012 a GPU-trained neural network (AlexNet) won ImageNet by a margin large enough that the modern AI era is effectively dated to that result. The thread is visible only in retrospect — graphics was the training ground, CUDA was the pivot, AI was the payoff — but none of it was accidental.

The current self-description collapses that history into one line: NVIDIA *"pioneered accelerated computing to tackle challenges no one else can solve"* ([nvidia.com/en-us/about-nvidia](https://www.nvidia.com/en-us/about-nvidia/)). The framing is deliberate. "Accelerated computing" is a category claim, not a product claim — the argument is that the industry's default (CPU-only, general-purpose) has stopped scaling, and that parallel processors plus domain-specific software stacks (CUDA, cuDNN, TensorRT, Omniverse) are *the only path forward*. Jensen Huang puts the sustainability case plainly: *"Figuring out how to do more while using less power is the key to driving flexibility, scalability and sustainability. Given this, every data center in the world should be accelerated."* ([blogs.nvidia.com](https://blogs.nvidia.com/blog/what-is-accelerated-computing/)).

What NVIDIA refuses: soft differentiation, consumer-brand warmth in enterprise contexts, and "AI" as a marketing wrapper divorced from the underlying compute. What it embraces: metric-first claims, platform-over-product thinking, long research horizons ("positive change to the world" framing on the Research page — [nvidia.com/en-us/research](https://www.nvidia.com/en-us/research/)), and the conviction — stated at GTC keynotes and repeated across the brand — that accelerated computing is not a performance upgrade but a generational re-architecture.

<!-- Over 4 million developers and ~40,000 companies on NVIDIA AI source: base DESIGN.md §1 context + nvidia.com/en-us/about-nvidia/corporate-timeline, not re-verified for this Philosophy layer. -->

## 12. Principles

1. **Metric over adjective.** If a capability can be measured, ship the measurement; if it can't, don't ship the claim. "Lowest token cost" beats "world-class performance" because one number is falsifiable and one adjective is boilerplate. *UI implication:* Every hero claim carries an inline metric, a benchmark link, or a named model; adjective-only headlines fail review.
2. **The green is a signal, not a surface.** NVIDIA Green (`#76b900`) is the brand's fingerprint — used as border, underline, and focal accent. Treating it as a surface fill destroys the signal, because the eye loses the ability to find it. *UI implication:* Green appears only on 1–2px borders, 2px underlines, focus rings, and single-element highlights. Never as a button fill, card background, or gradient base.
3. **Black and white are binary by design.** The contrast system is intentionally bimodal — `#000000` sections and `#ffffff` sections, alternating. Mid-tone gray surfaces dilute the engineering clarity and push the brand toward generic SaaS. *UI implication:* No tinted-gray cards or soft-surface backgrounds; section backgrounds are black, white, or `#1a1a1a` with a clearly separating border.
4. **Sharp corners match the hardware.** 1–2px border radius across buttons, cards, and inputs is not a stylistic choice; it's a category signal. Consumer brands use pills; engineering hardware uses rectangles. *UI implication:* `border-radius: 2px` is the default for every component. Pills and fully rounded (≥16px) shapes are reserved for avatars or explicitly playful surfaces.
5. **Bold weight is the default voice.** Weight 700 carries headlines, buttons, labels, and navigation; weight 400 is reserved for reading prose. This weight distribution projects authority at every scan level. *UI implication:* All interactive and structural text is bold. Regular weight appears only in paragraph body, descriptions, and long-form reading contexts.
6. **Uppercase navigation, declarative CTAs.** Uppercase 14px links at the top of the page read as hardware-specification labels, not lifestyle taglines. CTAs are verb + noun (or single verb), two words when possible. *UI implication:* Nav labels use `text-transform: uppercase`; CTAs follow the "Learn More / Register Now / Read Blog" pattern — no sentences, no punctuation, no "Discover your..." openings.
7. **Platform thinking, not product thinking.** Every NVIDIA product (RTX, CUDA, TensorRT, Omniverse, NIM) is presented as a layer in a stack, not a standalone feature. The page architecture reflects the stack: silicon → system software → libraries → applications. *UI implication:* Product landing pages show the layer directly above and below; "See the full stack" is a default navigation affordance.
8. **Long time horizons over hype cycles.** The GPU-to-AI pivot took roughly fifteen years (1999 GPU → 2006 CUDA → 2012 AlexNet). Copy and roadmaps should honor that timescale — capabilities ship when the silicon, software, and developer ecosystem align, not when the news cycle wants them. *UI implication:* Release announcements reference prior generations by name and version; "introducing for the first time" claims require a specific prior-art delta.
9. **Research is public or it is not research.** NVIDIA Research publishes papers, releases libraries (Kaolin, Sionna, Imaginaire, CUDA-X), and runs Inception for startups. Research surfaces treat openness as a deliverable, not a side effect. *UI implication:* Every research page links to the paper, the code repository, and the redistribution license in the same surface — not buried in a footer.

## 13. Personas

*Personas are fictional archetypes informed by publicly described NVIDIA user segments, not individual people.*

**Priya Venkatesan, 34, Santa Clara.** ML infrastructure engineer at a foundation-model startup. Uses CUDA, TensorRT-LLM, and NIM microservices daily; reads new GPU whitepapers the day they drop. Judges NVIDIA marketing copy by whether the per-token cost numbers reconcile with her own benchmark runs.

**Dr. Ken Nakamura, 46, Tokyo.** Research scientist at a robotics lab. Runs Isaac Sim and Omniverse for synthetic data generation, cites NVIDIA Research papers in grant proposals. Trusts the brand because the libraries ship with the paper and the numbers reproduce.

**Marco Bianchi, 29, Milan.** Technical director at a mid-size game studio. Works in DLSS, RTX, and Unreal pipelines. Will defend NVIDIA's driver cadence in forums but expects any consumer-facing claim ("4× faster with DLSS 4.5") to carry a benchmark footnote.

**Sarah Whitfield, 41, Austin.** VP of AI infrastructure at a Fortune 500 enterprise. Evaluates NVIDIA DGX and HGX platforms against cloud-only alternatives. Reads keynotes for roadmap signals, but signs contracts based on the datasheet and the support SLA.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | One NVIDIA-EMEA 16px sentence on white or `#1a1a1a` background, no illustration: "No results yet. Browse by topic or try a broader term." Green accent reserved for the "Browse by topic" link. |
| **Empty (search, no matches)** | Caption-size gray text at 14px `#757575`: the query echoed verbatim, followed by two suggested refinements. Never an emoji, never a shrug illustration. |
| **Loading (data fetch / API)** | Thin green (`#76b900`) progress bar at the top of the viewport, 2px tall. No spinner in body content. For >2s operations, an inline "Loading…" text label in Gray 400. |
| **Loading (skeleton)** | Border-Cream-free — instead, `#1a1a1a` blocks on black surfaces and `#f5f5f5` blocks on white, at exact final dimensions. No shimmer gradient with mid-tones; the pulse is opacity-only (0.6 ↔ 1.0). |
| **Error (runtime / API)** | Red 500 (`#e52020`) left border 2px, Near-Black text, inline code block showing the error code verbatim. "CUDA error 700: an illegal memory access was encountered. Check kernel launch configuration." No retry animation — retry is a button labeled "Retry". |
| **Error (form / input)** | Red 500 border on the invalid field, 14px Red 500 caption directly beneath, exact requirement stated: "License key is 24 characters; yours is 22." |
| **Error (permission / licensing)** | Warm Sand banner — Orange 400 (`#df6500`) accent bar, black text, cites the export-control or license clause by section number. |
| **Success (operation complete)** | Green 500 (`#3f8500`) — not brand green — 2px left border, past-tense sentence. "Model downloaded." Auto-dismiss at 4s. Brand green is reserved for interactive accents, not confirmation states. |
| **Success (multi-step, e.g., training run)** | Final state shows metric summary in a table — elapsed time, tokens/sec, final loss — rather than a celebratory toast. The data is the success signal. |
| **Benchmark / metric rendering** | Numeric-first typography: the number at Display-Hero scale (36px bold), unit inline at Body-Large, source footnote at Caption Small. NVIDIA-authentic state — performance numbers are a visual category in their own right. |
| **Skeleton** | `#2a2a2a` blocks (dark-surface default) at exact final dimensions — product tiles, benchmark rows, spec-table cells. Shimmer 1.4s with a subtle NVIDIA-green tint at 4% opacity as the highlight, not pure white, so the loading state itself reads as brand-on. Benchmark numbers render as unit placeholders (`— TFLOPS`, `— tokens/sec`) until resolved, never `0`, which would misrepresent performance. |
| **Disabled** | Opacity 0.45 on text and surface together; green border shifts to Gray-400 (`#898989`). Geometry stable — 2px radius preserved, padding unchanged. |
| **Pressed / active** | Background shifts to `#007fff` with a 1px `#003eff` border. `transform: scale(1)` — no depression animation. The color change is the tactile signal. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Focus ring, active-state color commit, toggle snap |
| `motion-fast` | 140ms | Hover color shifts, button underline, link color transition |
| `motion-standard` | 240ms | Dropdown mega-menus, accordion expand, tab switch |
| `motion-slow` | 380ms | Section crossfades, full-width hero image transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions, menu open/close, card reveal |
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Incoming panels, modal entry |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1.0, 1)` | Dismissals, menu collapse, toast auto-removal |

**Spring / overshoot stance — forbidden on product UI.** No `cubic-bezier(0.34, 1.56, 0.64, 1)` or any spring/overshoot curve in interface motion. Rationale: NVIDIA's brand equity is engineering precision — benchmarks, tolerances, thermal envelopes. Bounce reads as consumer-toy animation, which undermines the datasheet register that the rest of the system earns. The one environment where NVIDIA tolerates theatrical motion is the GTC keynote stage — large-scale product reveals, orchestral score, stage pyrotechnics — but that is a broadcast surface, not a UI surface, and its motion vocabulary does not propagate into the website or developer portal. For product UI, motion is linear-to-standard-ease at most; arrival is considered, never springy.

**Signature motions.**

1. **Green-edge reveal.** Section transitions on marketing surfaces use a 380ms crossfade where the green accent border (`2px #76b900`) is the last element to land — the content appears at `motion-standard`, the green underline draws in at `motion-slow`, completing slightly after. This gives the brand green its fingerprint behavior: it is what the eye lands on last.
2. **Metric counter.** On benchmark pages, large numeric claims animate via count-up over `motion-slow` (380ms), linear easing, only on first viewport entry. The count-up is a direct signal that the number is real and freshly rendered, not a screenshot. It runs once per session; re-scroll does not re-trigger.
3. **Mega-menu expand.** Top-nav dropdowns expand at `motion-standard` using `ease-standard`, with the green underline on the active parent link animating in simultaneously. No stagger, no nested animations — the menu is a single coordinated surface.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Metric counters render at their final value without animation. Green-edge reveals materialize the accent with the content, not after. No spinner, no shimmer, no parallax at any time.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Direct verification via WebFetch (2026-04-20):

- https://www.nvidia.com/en-us/ — verified homepage microcopy: "Learn More",
  "Register Now", "Watch On Demand", "Out Now", "Read Blog",
  "NVIDIA Delivers the Lowest Token Cost",
  "Cost per token is the key metric for inference TCO, and NVIDIA Blackwell leads
  on the metric that matters." Used in §10 voice samples and tone table.
- https://developer.nvidia.com/ — verified developer microcopy:
  "Deploy more secure, always-on AI assistants with a single command.",
  "Explore Curriculum", "Read More", "Browse by Topic". Used in §10 voice
  samples.
- https://www.nvidia.com/en-us/about-nvidia/ — verified company self-description
  ("pioneered accelerated computing to tackle challenges no one else can solve")
  and Jensen Huang quote ("We are a learning machine. The mission is boss.
  Everyone has a voice."). Used in §10 and §11.
- https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/ — verified
  founding date (April 5, 1993), founders (Jensen Huang, Chris Malachowsky,
  Curtis Priem), and milestones (1999 GPU, 2006 CUDA, 2012 AlexNet, 2018 RTX).
  Used in §11.
- https://blogs.nvidia.com/blog/what-is-accelerated-computing/ — verified
  Jensen Huang sustainability quote ("every data center in the world should
  be accelerated"). Used in §11.
- https://www.nvidia.com/en-us/research/ — verified research mission phrasing
  ("developing the technology and finding the breakthroughs that bring
  positive change to the world"). Used in §10 tone table and §12 principle 9.

Base-carried from DESIGN.md sections 1–9 (not re-verified this pass):

- NVIDIA Green `#76b900` as fingerprint accent (§12 principle 2).
- Black-and-white binary contrast, no mid-tone grays (§12 principle 3).
- 1–2px border radius across components (§12 principle 4).
- Weight 700 as default voice (§12 principle 5).
- Uppercase navigation, NVIDIA-EMEA font stack (§12 principle 6).
- Deep-green accent on interactive elements only — never surface fill.

Interpretive claims (editorial readings of the design system, not documented
NVIDIA statements):

- The GTC keynote is the only surface where NVIDIA tolerates theatrical
  motion (§15). Inferred from public keynote recordings vs product-UI motion
  observation; not a documented brand-team statement.
- Sharp corners as a "hardware category signal" vs consumer-brand pills
  (§12 principle 4). Editorial reading.
- Persona archetypes (§13) are fictional composites informed by publicly
  described NVIDIA user segments (ML engineers, research scientists, game
  developers, enterprise AI buyers). Names are illustrative; they do not
  refer to real people.

Numerical claims in §11 ("over 4 million developers", "~40,000 companies")
are carried from base DESIGN.md context and the corporate timeline page
excerpts; not independently re-verified for this Philosophy layer.
-->

