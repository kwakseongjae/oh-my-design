---
id: elevenlabs
name: ElevenLabs
country: US
category: ai
homepage: "https://elevenlabs.io"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: elevenlabs
verified: "2026-05-15"
omd: "0.1"
ds:
  name: ElevenLabs Brand
  url: "https://elevenlabs.io/brand"
  type: brand
  description: ElevenLabs brand guidelines covering logo, symbol, and product sub-brands.
  og_image: "https://elevenlabs.io/cover.png"
---

# Design System Inspiration of ElevenLabs

## 1. Visual Theme & Atmosphere

ElevenLabs' website is a study in restrained elegance — a near-white canvas (`#ffffff`, `#f5f5f5`) where typography and subtle shadows do all the heavy lifting. The design feels like a premium audio product brochure: clean, spacious, and confident enough to let the content speak (literally, given ElevenLabs makes voice AI). There's an almost Apple-like quality to the whitespace strategy, but warmer — the occasional warm stone tint (`#f5f2ef`, `#777169`) prevents the purity from feeling clinical.

The typography system is built on a fascinating duality: Waldenburg at weight 300 (light) for display headings creates ethereal, whisper-thin titles that feel like sound waves rendered in type — delicate, precise, and surprisingly impactful at large sizes. This light-weight display approach is the design's signature — where most sites use bold headings to grab attention, ElevenLabs uses lightness to create intrigue. Inter handles all body and UI text with workmanlike reliability, using slight positive letter-spacing (0.14px–0.18px) that gives body text an airy, well-spaced quality. WaldenburgFH appears as a bold uppercase variant for specific button labels.

What makes ElevenLabs distinctive is its multi-layered shadow system. Rather than simple box-shadows, elements use complex stacks: inset border-shadows (`rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset`), outline shadows (`rgba(0,0,0,0.06) 0px 0px 0px 1px`), and soft elevation shadows (`rgba(0,0,0,0.04) 0px 4px 4px`) — all at remarkably low opacities. The result is a design where surfaces seem to barely exist, floating just above the page with the lightest possible touch. Pill-shaped buttons (9999px) with warm-tinted backgrounds (`rgba(245,242,239,0.8)`) and warm shadows (`rgba(78,50,23,0.04)`) add a tactile, physical quality.

**Key Characteristics:**
- Near-white canvas with warm undertones (`#f5f5f5`, `#f5f2ef`)
- Waldenburg weight 300 (light) for display — ethereal, whisper-thin headings
- Inter with positive letter-spacing (0.14–0.18px) for body — airy readability
- Multi-layered shadow stacks at sub-0.1 opacity — surfaces barely exist
- Pill buttons (9999px) with warm stone-tinted backgrounds
- WaldenburgFH bold uppercase for specific CTA labels
- Warm shadow tints: `rgba(78, 50, 23, 0.04)` — shadows have color, not just darkness
- Geist Mono / ui-monospace for code snippets

## 2. Color Palette & Roles

### Primary
- **Pure White** (`#ffffff`): Primary background, card surfaces, button backgrounds
- **Light Gray** (`#f5f5f5`): Secondary surface, subtle section differentiation
- **Warm Stone** (`#f5f2ef`): Button background (at 80% opacity) — the warm signature
- **Black** (`#000000`): Primary text, headings, dark buttons

### Neutral Scale
- **Dark Gray** (`#4e4e4e`): Secondary text, descriptions
- **Warm Gray** (`#777169`): Tertiary text, muted links, decorative underlines
- **Near White** (`#f6f6f6`): Alternate light surface

### Interactive
- **Grid Cyan** (`#7fffff`): `--grid-column-bg`, at 25% opacity — decorative grid overlay
- **Ring Blue** (`rgb(147 197 253 / 0.5)`): `--tw-ring-color`, focus ring
- **Border Light** (`#e5e5e5`): Explicit borders
- **Border Subtle** (`rgba(0, 0, 0, 0.05)`): Ultra-subtle bottom borders

### Shadows
- **Inset Border** (`rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset`): Internal edge definition
- **Inset Dark** (`rgba(0,0,0,0.1) 0px 0px 0px 0.5px inset`): Stronger inset variant
- **Outline Ring** (`rgba(0,0,0,0.06) 0px 0px 0px 1px`): Shadow-as-border
- **Soft Elevation** (`rgba(0,0,0,0.04) 0px 4px 4px`): Gentle lift
- **Card Shadow** (`rgba(0,0,0,0.4) 0px 0px 1px, rgba(0,0,0,0.04) 0px 4px 4px`): Button/card elevation
- **Warm Shadow** (`rgba(78,50,23,0.04) 0px 6px 16px`): Warm-tinted button shadow
- **Edge Shadow** (`rgba(0,0,0,0.08) 0px 0px 0px 0.5px`): Subtle edge definition
- **Inset Ring** (`rgba(0,0,0,0.1) 0px 0px 0px 1px inset`): Strong inset border

## 3. Typography Rules

### Font Families
- **Display**: `Waldenburg`, fallback: `Waldenburg Fallback`
- **Display Bold**: `WaldenburgFH`, fallback: `WaldenburgFH Fallback`
- **Body / UI**: `Inter`, fallback: `Inter Fallback`
- **Monospace**: `Geist Mono` or `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Waldenburg | 48px (3.00rem) | 300 | 1.08 (tight) | -0.96px | Whisper-thin, ethereal |
| Section Heading | Waldenburg | 36px (2.25rem) | 300 | 1.17 (tight) | normal | Light display |
| Card Heading | Waldenburg | 32px (2.00rem) | 300 | 1.13 (tight) | normal | Light card titles |
| Body Large | Inter | 20px (1.25rem) | 400 | 1.35 | normal | Introductions |
| Body | Inter | 18px (1.13rem) | 400 | 1.44–1.60 | 0.18px | Standard reading text |
| Body Standard | Inter | 16px (1.00rem) | 400 | 1.50 | 0.16px | UI text |
| Body Medium | Inter | 16px (1.00rem) | 500 | 1.50 | 0.16px | Emphasized body |
| Nav / UI | Inter | 15px (0.94rem) | 500 | 1.33–1.47 | 0.15px | Navigation links |
| Button | Inter | 15px (0.94rem) | 500 | 1.47 | normal | Button labels |
| Button Uppercase | WaldenburgFH | 14px (0.88rem) | 700 | 1.10 (tight) | 0.7px | `text-transform: uppercase` |
| Caption | Inter | 14px (0.88rem) | 400–500 | 1.43–1.50 | 0.14px | Metadata |
| Small | Inter | 13px (0.81rem) | 500 | 1.38 | normal | Tags, badges |
| Code | Geist Mono | 13px (0.81rem) | 400 | 1.85 (relaxed) | normal | Code blocks |
| Micro | Inter | 12px (0.75rem) | 500 | 1.33 | normal | Tiny labels |
| Tiny | Inter | 10px (0.63rem) | 400 | 1.60 (relaxed) | normal | Fine print |

### Principles
- **Light as the hero weight**: Waldenburg at 300 is the defining typographic choice. Where other design systems use bold for impact, ElevenLabs uses lightness — thin strokes that feel like audio waveforms, creating intrigue through restraint.
- **Positive letter-spacing on body**: Inter uses +0.14px to +0.18px tracking across body text, creating an airy, well-spaced reading rhythm that contrasts with the tight display tracking (-0.96px).
- **WaldenburgFH for emphasis**: A bold (700) uppercase variant of Waldenburg appears only in specific CTA button labels with 0.7px letter-spacing — the one place where the type system gets loud.
- **Monospace as ambient**: Geist Mono at relaxed line-height (1.85) for code blocks feels unhurried and readable.

## 4. Component Stylings

### Buttons

**Primary Black Pill**
- Background: `#000000`
- Text: `#ffffff`
- Padding: 0px 14px
- Radius: 9999px (full pill)
- Use: Primary CTA

**White Pill (Shadow-bordered)**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 9999px
- Shadow: `rgba(0,0,0,0.4) 0px 0px 1px, rgba(0,0,0,0.04) 0px 4px 4px`
- Use: Secondary CTA on white

**Warm Stone Pill**
- Background: `rgba(245, 242, 239, 0.8)` (warm translucent)
- Text: `#000000`
- Padding: 12px 20px 12px 14px (asymmetric)
- Radius: 30px
- Shadow: `rgba(78, 50, 23, 0.04) 0px 6px 16px` (warm-tinted)
- Use: Featured CTA, hero action — the signature warm button

**Uppercase Waldenburg Button**
- Font: WaldenburgFH 14px weight 700
- Text-transform: uppercase
- Letter-spacing: 0.7px
- Use: Specific bold CTA labels

### Cards & Containers
- Background: `#ffffff`
- Border: `1px solid #e5e5e5` or shadow-as-border
- Radius: 16px–24px
- Shadow: multi-layer stack (inset + outline + elevation)
- Content: product screenshots, code examples, audio waveform previews

### Inputs & Forms
- Textarea: padding 12px 20px, transparent text at default
- Select: white background, standard styling
- Radio: standard with tw-ring focus
- Focus: `var(--tw-ring-offset-shadow)` ring system

### Navigation
- Clean white sticky header
- Inter 15px weight 500 for nav links
- Pill CTAs right-aligned (black primary, white secondary)
- Mobile: hamburger collapse at 1024px

### Image Treatment
- Product screenshots and audio waveform visualizations
- Warm gradient backgrounds in feature sections
- 20px–24px radius on image containers
- Full-width sections alternating white and light gray

### Distinctive Components

**Audio Waveform Sections**
- Colorful gradient backgrounds showcasing voice AI capabilities
- Warm amber, blue, and green gradients behind product demos
- Screenshots of the ElevenLabs product interface

**Warm Stone CTA Block**
- `rgba(245,242,239,0.8)` background with warm shadow
- Asymmetric padding (more right padding)
- Creates a physical, tactile quality unique to ElevenLabs

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 1px, 3px, 4px, 8px, 9px, 10px, 11px, 12px, 16px, 18px, 20px, 24px, 28px, 32px, 40px

### Grid & Container
- Centered content with generous max-width
- Single-column hero, expanding to feature grids
- Full-width gradient sections for product showcases
- White card grids on light gray backgrounds

### Whitespace Philosophy
- **Apple-like generosity**: Massive vertical spacing between sections creates a premium, unhurried pace. Each section is an exhibit.
- **Warm emptiness**: The whitespace isn't cold — the warm stone undertones and warm shadows give empty space a tactile, physical quality.
- **Typography-led rhythm**: The light-weight Waldenburg headings create visual "whispers" that draw the eye through vast white space.

### Border Radius Scale
- Minimal (2px): Small links, inline elements
- Subtle (4px): Nav items, tab panels, tags
- Standard (8px): Small containers
- Comfortable (10px–12px): Medium cards, dropdowns
- Card (16px): Standard cards, articles
- Large (18px–20px): Featured cards, code panels
- Section (24px): Large panels, section containers
- Warm Button (30px): Warm stone CTA
- Pill (9999px): Primary buttons, navigation pills

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, text blocks |
| Inset Edge (Level 0.5) | `rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset, #fff 0px 0px 0px 0px inset` | Internal border definition |
| Outline Ring (Level 1) | `rgba(0,0,0,0.06) 0px 0px 0px 1px` + `rgba(0,0,0,0.04) 0px 1px 2px` + `rgba(0,0,0,0.04) 0px 2px 4px` | Shadow-as-border for cards |
| Card (Level 2) | `rgba(0,0,0,0.4) 0px 0px 1px, rgba(0,0,0,0.04) 0px 4px 4px` | Button elevation, prominent cards |
| Warm Lift (Level 3) | `rgba(78,50,23,0.04) 0px 6px 16px` | Featured CTAs — warm-tinted |
| Focus (Accessibility) | `var(--tw-ring-offset-shadow)` blue ring | Keyboard focus |

**Shadow Philosophy**: ElevenLabs uses the most refined shadow system of any design system analyzed. Every shadow is at sub-0.1 opacity, many include both outward cast AND inward inset components, and the warm CTA shadows use an actual warm color (`rgba(78,50,23,...)`) rather than neutral black. The inset half-pixel borders (`0px 0px 0px 0.5px inset`) create edges so subtle they're felt rather than seen — surfaces define themselves through the lightest possible touch.

## 7. Do's and Don'ts

### Do
- Use Waldenburg weight 300 for all display headings — the lightness IS the brand
- Apply multi-layer shadows (inset + outline + elevation) at sub-0.1 opacity
- Use warm stone tints (`#f5f2ef`, `rgba(245,242,239,0.8)`) for featured elements
- Apply positive letter-spacing (+0.14px to +0.18px) on Inter body text
- Use 9999px radius for primary buttons — pill shape is standard
- Use warm-tinted shadows (`rgba(78,50,23,0.04)`) on featured CTAs
- Keep the page predominantly white with subtle gray section differentiation
- Use WaldenburgFH bold uppercase ONLY for specific CTA button labels

### Don't
- Don't use bold (700) Waldenburg for headings — weight 300 is non-negotiable
- Don't use heavy shadows (>0.1 opacity) — the ethereal quality requires whisper-level depth
- Don't use cool gray borders — the system is warm-tinted throughout
- Don't skip the inset shadow component — half-pixel inset borders define edges
- Don't apply negative letter-spacing to body text — Inter uses positive tracking
- Don't use sharp corners (<8px) on cards — the generous radius is structural
- Don't introduce brand colors — the palette is intentionally achromatic with warm undertones
- Don't make buttons opaque and heavy — the warm translucent stone treatment is the signature

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <1024px | Single column, hamburger nav, stacked sections |
| Desktop | >1024px | Full layout, horizontal nav, multi-column grids |

### Touch Targets
- Pill buttons with generous padding (12px–20px)
- Navigation links at 15px with adequate spacing
- Select dropdowns maintain comfortable sizing

### Collapsing Strategy
- Navigation: horizontal → hamburger at 1024px
- Feature grids: multi-column → stacked
- Hero: maintains centered layout, font scales proportionally
- Gradient sections: full-width maintained, content stacks
- Spacing compresses proportionally

### Image Behavior
- Product screenshots scale responsively
- Gradient backgrounds simplify on mobile
- Audio waveform previews maintain aspect ratio
- Rounded corners maintained across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Background: Pure White (`#ffffff`) or Light Gray (`#f5f5f5`)
- Text: Black (`#000000`)
- Secondary text: Dark Gray (`#4e4e4e`)
- Muted text: Warm Gray (`#777169`)
- Warm surface: Warm Stone (`rgba(245, 242, 239, 0.8)`)
- Border: `#e5e5e5` or `rgba(0,0,0,0.05)`

### Example Component Prompts
- "Create a hero on white background. Headline at 48px Waldenburg weight 300, line-height 1.08, letter-spacing -0.96px, black text. Subtitle at 18px Inter weight 400, line-height 1.60, letter-spacing 0.18px, #4e4e4e text. Two pill buttons: black (9999px, 0px 14px padding) and warm stone (rgba(245,242,239,0.8), 30px radius, 12px 20px padding, warm shadow rgba(78,50,23,0.04) 0px 6px 16px)."
- "Design a card: white background, 20px radius. Shadow: rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px. Title at 32px Waldenburg weight 300, body at 16px Inter weight 400 letter-spacing 0.16px, #4e4e4e."
- "Build a white pill button: white bg, 9999px radius. Shadow: rgba(0,0,0,0.4) 0px 0px 1px, rgba(0,0,0,0.04) 0px 4px 4px. Text at 15px Inter weight 500."
- "Create an uppercase CTA label: 14px WaldenburgFH weight 700, text-transform uppercase, letter-spacing 0.7px."
- "Design navigation: white sticky header. Inter 15px weight 500. Black pill CTA right-aligned. Border-bottom: rgba(0,0,0,0.05)."

### Iteration Guide
1. Start with white — the warm undertone comes from shadows and stone surfaces, not backgrounds
2. Waldenburg 300 for headings — never bold, the lightness is the identity
3. Multi-layer shadows: always include inset + outline + elevation at sub-0.1 opacity
4. Positive letter-spacing on Inter body (+0.14px to +0.18px) — the airy reading quality
5. Warm stone CTA is the signature — `rgba(245,242,239,0.8)` with `rgba(78,50,23,0.04)` shadow
6. Pill (9999px) for buttons, generous radius (16px–24px) for cards

## 10. Voice & Tone

ElevenLabs writes like the audio it generates: **measured, precise, and built for clarity.** Marketing copy is closer to research summary than ad copy — the company describes itself as "an AI research and product company transforming how we interact with technology" (own About page). UI surfaces echo this register: short labels, technical-but-readable, never breathless.

| Context | Tone |
|---|---|
| CTA / button | Single verb or verb-noun. "Try it now", "Sign up", "Contact sales". Lowercase or sentence-case |
| Product names | Pascal-case prefix `Eleven`. ElevenAgents, ElevenCreative, ElevenAPI |
| Onboarding | Technical specifics over emotion. "Generate speech in 32 languages with one model" |
| Error (model unavailable) | State the cause. "This voice is unavailable in your region. Try a different voice." |
| Empty (no projects) | Direct invitation. "Create your first project to start generating audio." |
| Documentation / API | Imperative, code-block-heavy, example-first |
| Safety / policy | Formal but not legalese |

**Voice samples**
- Marketing CTA: *"Try it now"* <!-- verified: elevenlabs.io homepage hero (2026-05) -->
- Three-platform tagline: *"ElevenAgents, ElevenCreative, ElevenAPI"* <!-- verified: elevenlabs.io top nav (2026-05) -->
- Safety statement opener: *"AI safety is inseparable from innovation at ElevenLabs."* <!-- verified: elevenlabs.io About / safety -->

**Forbidden phrases.** "Revolutionary", "lifelike". "Unlock the power of...". Apology theatre. Emoji in product chrome.

## 11. Brand Narrative

ElevenLabs was founded **2022** by **Mati Staniszewski (CEO)** and **Piotr Dąbkowski (CTO)** — both Polish, **best friends since the Copernicus International Baccalaureate program in Warsaw** ([ElevenLabs — Wikipedia](https://en.wikipedia.org/wiki/ElevenLabs)). Staniszewski studied **mathematics at Imperial College London**, then **Opera Software → BlackRock (Aladdin Wealth) → Palantir** as Deployment Strategist. Dąbkowski studied **engineering at Oxford → MPhil Cambridge (2017, NeurIPS-published thesis on AI image detection)**, then **Google ML engineer → Tessian**. The founding observation was that text-to-speech in 2022 still sounded robotic on every consumer surface — both founders, growing up dubbing English-language films into Polish, knew firsthand that machine voiceover was a bottleneck for global content. Funding trajectory: **$2M pre-seed (Jan 2023)** → **$19M Series A (Jun 2023)** at **$100M** → **$80M Series B (Jan 22 2024)** at **$1.1B unicorn** → **$180M Series C (Jan 30 2025)** at **$3.3B** co-led **a16z + ICONIQ Growth** with NEA/WiL/Valor/Endeavor Catalyst/Lunate → **$500M (Feb 4 2026)** at **$11B** co-led **a16z + Nat Friedman + Daniel Gross** ahead of potential IPO ([CNBC — VC bet on ElevenLabs](https://www.cnbc.com/2025/10/25/vc-bet-on-3-billion-ai-firm-elevenlabs-after-one-meeting-with-founder.html), [Yahoo Finance — Staniszewski $200M+ revenue](https://finance.yahoo.com/news/elevenlabs-ceo-mati-staniszewski-reveals-134611632.html)). $500M+ ARR reported 2025.

The brand voice — clinical-precise, research-first, three-platform vocabulary (`Eleven` + Agents/Creative/API) — reflects the founders' technical orientation. Public communication stays close to research output: model card releases, latency benchmarks, voice cloning safety policies. Founder interviews consistently emphasize **dual-use awareness**: voice cloning is dangerous if misused, and the company has built multi-layered abuse detection from day one — *"AI safety is inseparable from innovation at ElevenLabs"* is verbatim from their About page.

What ElevenLabs refuses: hyperbolic adjectives about voice realism (the demo speaks for itself), celebrity voice cloning without explicit consent, generic emotion-coded marketing imagery (their visuals stay tech-product, not lifestyle).

## 12. Principles

1. **The model output is the marketing.** Audio demos beat any descriptive copy. *UI implication:* hero modules contain a real audio sample that plays on hover/tap.
2. **Three-platform vocabulary, one identity.** `Eleven` prefix on every product. *UI implication:* product nav uses literal `ElevenAgents`/`ElevenCreative`/`ElevenAPI` strings.
3. **Safety as feature, not disclaimer.** Voice-clone consent flow surfaced as product capability. *UI implication:* safety controls have first-class menu placement.
4. **Warm stone, not cold black.** Palette uses warm beige tones to signal "human-feeling AI." *UI implication:* default canvas warm off-white; pure white reserved for content-detail surfaces.
5. **Inter with positive letter-spacing.** Body text +0.14–0.18px tracking creates airy reading rhythm. *UI implication:* don't tighten Inter at body sizes.

## 13. Personas

*Personas are fictional archetypes informed by publicly described ElevenLabs user segments (developers, content creators, accessibility advocates, enterprise customers), not individual people.*

**Sasha Volkov, 32, Berlin.** Senior engineer at a podcast tooling startup. Integrates the ElevenAPI for studio-quality voiceover generation. Reads the model release notes the same week they ship.

**Adaeze Okafor, 28, Lagos.** Independent YouTuber dubbing English videos into Yoruba and Igbo with ElevenCreative. The 32-language coverage and voice cloning consent flow are why she's on the platform — competing services don't support West African languages.

**Dr. Yuki Sato, 45, Tokyo.** Accessibility researcher using ElevenLabs through The ElevenLabs Impact program (free licenses for accessibility needs). Builds reading-aid software for visually impaired Japanese readers.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no generated audio)** | Centered Inter 24px text "Generate your first audio" + warm-stone Primary CTA pill |
| **Empty (no projects)** | "Create a project to get started." 16px copy, single CTA, optional secondary "Browse templates" |
| **Loading (audio generating)** | Linear progress with elapsed time + ETA. Pause/cancel button always visible. Long jobs show waveform animation |
| **Loading (model loading)** | Skeleton player UI + "Loading voice model" copy with explicit wait expectation |
| **Error (generation failed)** | Inline below input. "Couldn't generate audio. <reason>." Retry button + Documentation link |
| **Error (rate limit)** | "You've reached your daily limit (100 credits). Upgrade or wait until tomorrow." |
| **Success (audio generated)** | Inline player appears below input. Auto-plays once if "Auto-preview" enabled. Download / Share / Copy-link visible |
| **Success (voice cloned)** | Confirmation + safety reminder. "Voice cloned. Remember to only use voices you have permission to clone." |
| **Skeleton** | Warm-stone `rgba(245,242,239,0.4)` blocks at exact dimensions. No shimmer |
| **Disabled** | 0.4 opacity. Disabled CTAs explain why on hover ("Add credits to enable") |
| **Loading (batch generation)** | Persistent progress notification, per-file status. Navigation continues |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection commits |
| `motion-fast` | 150ms | Hover, button feedback |
| `motion-standard` | 250ms | Modal, dropdown |
| `motion-audio` | continuous | Waveform during generation |

**Easings**: `ease-enter cubic-bezier(0.2, 0.6, 0.25, 1)` for modals, `ease-exit cubic-bezier(0.4, 0.0, 1, 1)` for dismiss, no bounce.

**Motion rules.**
1. Audio waveform is THE signature motion — stylized model activity, not random animation
2. No bounce, no overshoot — register is precise
3. Hover transitions 150ms (faster than DS standard) — keyboard-driven research-tool feel
4. `prefers-reduced-motion: reduce` removes waveform (→ progress bar), removes hover scale, keeps focus transitions

---

**Verified:** 2026-05-08 (omd:migrate run 22 — Apple-tier)
**Tier 1 sources (§4):** elevenlabs.io home + /pricing (live DOM via playwright — Primary `#000000` 9999px three-tier {hero 48px / mid 40px / header 28px} 0×{20/16/12} / 14-16px·400; Inverse `#ffffff` 9999px same geometry)
**Tier 2 sources (§4):** styles.refero.design — no specific ElevenLabs style match. getdesign.md/elevenlabs — directory only.
**Tier 2 (Founders/Funding):** Wikipedia (ElevenLabs), CNBC (2025-10 a16z bet), Yahoo Finance (Staniszewski $200M+ revenue + $11B Feb 2026), Endeavor Catalyst.
**Style ref:** `claude` (research-tech precision tone)
**Conflicts unresolved:** none.
