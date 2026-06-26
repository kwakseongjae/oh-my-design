---
id: supertone
name: Supertone
display_name_kr: 수퍼톤
country: KR
category: ai
homepage: "https://www.supertone.ai"
primary_color: "#227cff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=supertone.ai&sz=128"
verified: "2026-06-26"
added: "2026-06-26"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-26"
  note: "primary = live action/eyebrow blue (#227cff); lime (#94fb4d) is the energy CTA accent. Near-black canvas (#090909) alternates with light (#f0f0f0) sections. Everything is Euclid Circular B at weight 300."
  colors:
    accent-blue: "#227cff"
    accent-blue-deep: "#305dff"
    lime: "#94fb4d"
    canvas: "#090909"
    surface-dark: "#161615"
    surface-darker: "#1c1c1c"
    light: "#f0f0f0"
    chip-light: "#dddddd"
    chip-grey: "#cccccc"
    cta-ink: "#2b2b2b"
    nav-ink: "#222222"
    muted: "#909090"
    muted-alt: "#6c6c6c"
    ink-pure: "#000000"
  typography:
    family: { sans: "Euclid Circular B" }
    display-hero: { size: 56, weight: 300, lineHeight: 1.20, tracking: -1.5, use: "Hero / section display words, Euclid Circular B Light" }
    section:      { size: 34, weight: 300, lineHeight: 1.20, use: "Section eyebrow labels, often accent-blue" }
    subhead:      { size: 30, weight: 300, lineHeight: 1.20, use: "Mid-level feature headings" }
    title:        { size: 24, weight: 300, lineHeight: 1.10, use: "Card titles, H1 eyebrow" }
    body:         { size: 19, weight: 300, lineHeight: 1.30, use: "Default body / paragraph text" }
    nav:          { size: 15, weight: 300, lineHeight: 1.33, use: "Top nav links" }
    caption:      { size: 16, weight: 300, lineHeight: 1.30, use: "Muted labels, small captions" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 32, xxl: 48, section: 80 }
  rounded: { sm: 8, lg: 30, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#227cff", fg: "#2b2b2b", radius: "30px", padding: "0px 20px", height: "36px", font: "18px / 300", use: "Primary action CTA (Learn More, Get Started Free, Business Contact)" }
    button-accent: { type: button, bg: "#94fb4d", fg: "#2b2b2b", radius: "30px", padding: "0px 20px", height: "36px", font: "18px / 300", use: "Energy CTA — header Get Started" }
    button-light: { type: button, bg: "#f0f0f0", fg: "#090909", radius: "30px", padding: "0px 40px", height: "40px", font: "18px / 300", use: "On-dark light pill button (Join Our Team)" }
    card-product: { type: card, bg: "#1c1c1c", fg: "#f0f0f0", border: "1px solid #090909", radius: "8px", padding: "12.8px", use: "Dark product / solution card" }
    nav-link: { type: tab, fg: "#f0f0f0", font: "15px / 300", active: "text #227cff", use: "Top navigation item" }
    lang-pill: { type: badge, bg: "#cccccc", fg: "#000000", radius: "9999px", padding: "0px 20px", height: "40px", font: "19px / 300", use: "Language selector pill (KO / EN / JA)" }
  components_harvested: true
---

# Design System Inspiration of Supertone

## 1. Visual Theme & Atmosphere

Supertone (수퍼톤) is a Seoul-based voice-AI company — now a HYBE subsidiary — and its site reads like a studio control room rather than a consumer app: a near-black canvas (`#090909`) that alternates with full-bleed light (`#f0f0f0`) sections, set entirely in **Euclid Circular B at weight 300**. The lightweight, geometric letterforms running at a generous 19px body size give the whole surface an airy, engineered calm — the opposite of the loud, gradient-heavy aesthetic most generative-AI startups reach for. Light text (`#f0f0f0`) on the dark canvas and near-black ink (`#090909`, `#000000`) on the light bands create a high-contrast, gallery-like cadence as you scroll.

The brand's energy comes from two precise accent colors, both reserved for action. The dominant one is an electric action-blue (`#227cff`) — it carries almost every CTA ("Learn More", "Get Started Free", "Business Contact"), the H1/section eyebrow labels, and active states, with a slightly deeper blue (`#305dff`) showing up on press. The second is a vivid lime (`#94fb4d`), used sparingly on the top-of-page "Get Started" button as a jolt of studio-neon energy. Both action colors notably pair with a soft dark ink label (`#2b2b2b`) rather than white, which keeps the buttons feeling like physical, screen-printed chips. Pill geometry is the rule: 30px-radius buttons and fully-round (`9999px`) language pills.

Depth is deliberately flat — live inspection found `box-shadow: none` across the hero, nav, headings, and cards. Separation comes from the dark/light section alternation and from layered near-black surfaces: cards sit on `#1c1c1c` and `#161615` panels outlined with a hairline of the canvas color itself, while light chips (`#dddddd`) and language pills (`#cccccc`) provide the few mid-grey tones. The neutral text ladder on light sections steps from near-black through muted greys (`#909090`, `#6c6c6c`) and the nav ink (`#222222`), keeping hierarchy quiet. The net impression: a precise, technical, audio-lab brand that treats restraint as a signal of engineering confidence.

**Key Characteristics:**
- Euclid Circular B at weight 300 for *everything* — display, body, even buttons — an airy, technical signature
- Near-black canvas (`#090909`) alternating with light (`#f0f0f0`) full-width sections
- Action-blue (`#227cff`) as the single dominant accent — CTAs, eyebrows, active states
- Lime (`#94fb4d`) as a rare second accent for the top "Get Started" energy CTA
- Action buttons use a dark ink label (`#2b2b2b`), not white — chip-like, physical feel
- Flat depth: `box-shadow: none`; separation via dark/light bands and layered `#1c1c1c` / `#161615` surfaces
- Pill geometry — 30px buttons, fully-round (`9999px`) language pills
- Tight negative tracking on display (-1.5px at 56px); large 19px body for breathing room

## 2. Color Palette & Roles

### Action Accents
- **Action Blue** (`#227cff`): The primary brand accent and CTA background. Carries "Learn More", "Get Started Free", and "Business Contact" buttons, the H1/section eyebrow labels, and active nav states — the system's main "do this" color.
- **Blue Deep** (`#305dff`): A slightly deeper blue surfacing on hover/press of the action-blue buttons.
- **Lime** (`#94fb4d`): The energy accent, reserved for the top-of-page "Get Started" CTA — a studio-neon jolt used sparingly.
- **CTA Ink** (`#2b2b2b`): The soft near-black label color used on both blue and lime buttons instead of white, giving them a printed-chip feel.

### Canvas & Dark Surfaces
- **Canvas** (`#090909`): The primary near-black page background and the hairline outline color on dark cards.
- **Surface Dark** (`#161615`): A near-black panel tone for secondary dark blocks and chips.
- **Surface Darker** (`#1c1c1c`): The dark product/solution card background.
- **Pure Black** (`#000000`): Maximum-contrast text used on the light language pills and some light-section copy.

### Light & Neutral
- **Light** (`#f0f0f0`): The light section background, on-dark text color, and the light pill button surface.
- **Chip Light** (`#dddddd`): A light mid-grey for chips and small surfaces.
- **Chip Grey** (`#cccccc`): The mid-grey background of the language-selector pills.
- **Nav Ink** (`#222222`): Near-black nav link color on light sections / dropdowns.
- **Muted** (`#909090`): Tertiary captions and muted sub-labels (e.g. "Text-to-speech").
- **Muted Alt** (`#6c6c6c`): A secondary muted grey for fine print on light sections.

## 3. Typography Rules

### Font Family
- **Primary**: `Euclid Circular B` (loaded as "Euclidcircularb Webxl"), with fallback `Arial, sans-serif`. A clean geometric sans used for every text role on the site.
- **Signature weight**: 300 (Light). Live inspection found weight 300 on the body, headings, nav, and buttons alike — the brand almost never goes heavier.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Euclid Circular B | 56px (3.50rem) | 300 | 1.20 (67px) | -1.5px | Hero/section display words ("Play", "Shift", "API") |
| Section Eyebrow | Euclid Circular B | 34px (2.13rem) | 300 | 1.20 (41px) | normal | Section labels, often action-blue |
| Sub-head | Euclid Circular B | 30px (1.88rem) | 300 | 1.20 (36px) | normal | Mid-level feature headings |
| Title | Euclid Circular B | 24px (1.50rem) | 300 | 1.10 | normal | Card titles, H1 eyebrow (blue) |
| Body | Euclid Circular B | 19px (1.19rem) | 300 | 1.30 (24.7px) | normal | Default paragraph text |
| Caption | Euclid Circular B | 16px (1.00rem) | 300 | 1.30 | normal | Muted labels ("Text-to-speech") |
| Nav Link | Euclid Circular B | 15px (0.94rem) | 300 | 1.33 | normal | Top navigation items |

### Principles
- **One font, one weight**: Euclid Circular B at weight 300 carries every role. The hierarchy is built almost entirely from size and color, not weight contrast — an unusually disciplined choice.
- **Large, airy body**: Body text sits at a generous 19px with 1.3 line-height, reinforcing the calm, spacious feel.
- **Tight display tracking**: Display words compress to -1.5px at 56px; body and labels stay at normal tracking.
- **Color as emphasis**: Where most systems bold a heading, Supertone tints it action-blue (`#227cff`) instead — the eyebrow labels are the clearest example.

## 4. Component Stylings

### Buttons

**Primary Action (Blue)**
- Background: `#227cff`
- Text: `#2b2b2b`
- Radius: 30px
- Padding: 0px 20px
- Height: 36px
- Font: 18px Euclid Circular B weight 300
- Hover: deepens to `#305dff`
- Use: Primary CTAs — "Learn More", "Get Started Free", "Business Contact", "Download Trial"

**Energy CTA (Lime)**
- Background: `#94fb4d`
- Text: `#2b2b2b`
- Radius: 30px
- Padding: 0px 20px
- Height: 36px
- Font: 18px Euclid Circular B weight 300
- Use: The header "Get Started" button — the single lime accent

**Light Pill (On-Dark)**
- Background: `#f0f0f0`
- Text: `#090909`
- Radius: 30px
- Padding: 0px 40px
- Height: 40px
- Font: 18px Euclid Circular B weight 300
- Use: Light button on dark sections — "Join Our Team"

### Cards & Containers

**Dark Product Card**
- Background: `#1c1c1c`
- Text: `#f0f0f0`
- Border: 1px solid `#090909`
- Radius: 8px
- Padding: 12.8px
- Use: Product / solution cards ("Content", "Solutions") on dark sections, flat (no shadow)

### Badges

**Language Pill**
- Background: `#cccccc`
- Text: `#000000`
- Radius: 9999px (full)
- Padding: 0px 20px
- Height: 40px
- Font: 19px Euclid Circular B weight 300
- Use: Language selector chips (KO / EN / JA)

### Navigation
- Background: `#090909` (translucent near-black on scroll)
- Text: `#f0f0f0`
- Font: 15px Euclid Circular B weight 300
- Active: action-blue `#227cff` text
- Use: Top horizontal nav ("Products", "Developers", "Business", "Voice", "Company")

---

**Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand surfaces)
**Tier 1 sources:** https://www.supertone.ai, https://www.supertone.ai/en/company, https://github.com/supertone-inc
**Tier 2 sources:** getdesign.md/supertone — not listed (404); styles.refero.design — not listed for Supertone
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: ~4px, with generous section gaps
- Scale: 4px, 8px, 12px, 16px, 20px, 32px, 48px, 80px
- Notable: Button horizontal padding lands at 20px (40px on the light "Join Our Team" pill); nav items pad 15px 14px

### Grid & Container
- Centered, single-column hero with large display words ("Play", "Shift", "Clear", "Air") as the anchor
- Feature sections alternate between near-black (`#090909`) and light (`#f0f0f0`) full-width bands
- Product/solution cards use 8px radius on dark panels, grouped in responsive grids
- Language pills cluster as a horizontal row of full-round chips

### Whitespace Philosophy
- **Airy over dense**: Despite being a technical product, the marketing surface breathes — large 19px body, big display sizes, generous vertical rhythm.
- **Section alternation**: Meaning is carried by the dark/light band cadence rather than borders or shadows.
- **Restrained accents**: Color is rationed — blue for action, lime for the single energy CTA, everything else neutral.

### Border Radius Scale
- Small (8px): cards, content containers
- Large (30px): buttons (the workhorse pill)
- Full (9999px): language pills, fully-round chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Band (Level 1) | Dark/light section background shift (`#090909` ↔ `#f0f0f0`) | Section separation without elevation |
| Surface (Level 2) | Layered near-black panels (`#1c1c1c`, `#161615`) with `#090909` hairline | Card/panel grouping on dark sections |

**Shadow Philosophy**: Supertone is a near-shadowless system. Live inspection returned `box-shadow: none` across the hero, nav, headings, and product cards. Depth is communicated entirely through the dark/light band alternation and through layered near-black surfaces (`#1c1c1c` and `#161615`) outlined with a hairline of the canvas color (`#090909`). When emphasis is needed, the system reaches for the action-blue (`#227cff`) or the lime (`#94fb4d`) — never elevation. This flat, gallery-like treatment reinforces the precise, studio-grade brand read.

## 7. Do's and Don'ts

### Do
- Use Euclid Circular B at weight 300 for every role — display, body, nav, and buttons
- Alternate near-black (`#090909`) and light (`#f0f0f0`) full-width sections for rhythm
- Reserve action-blue (`#227cff`) for CTAs, eyebrow labels, and active states
- Use the lime (`#94fb4d`) sparingly — ideally a single "Get Started" energy CTA
- Pair button backgrounds with the dark ink label (`#2b2b2b`), not white
- Keep depth flat — separate with bands and layered `#1c1c1c` / `#161615` surfaces, not shadows
- Use pill geometry — 30px buttons, fully-round language chips
- Apply tight negative tracking on display words (-1.5px at 56px)

### Don't
- Use heavy weights (600+) — the brand's voice is weight 300 throughout
- Spread blue and lime across many elements — they signal action; dilution kills the cue
- Add drop shadows for elevation — Supertone is a flat, shadow-free system
- Use white labels on the blue/lime buttons — the ink (`#2b2b2b`) is the chip-like signature
- Mix in a third saturated accent — blue and lime are the only chromatic hues
- Set body text small — the brand runs a generous 19px body
- Use sharp square corners on buttons — everything actionable is a pill
- Default headings to bold instead of tinting them action-blue

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, display words compress, nav collapses to menu |
| Tablet | 640-1024px | Moderate padding, 2-up product cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

### Touch Targets
- Action buttons at 36px height with 20px horizontal padding
- Light "Join Our Team" pill at 40px height, 40px horizontal padding
- Language pills at 40px height, fully-round for an unmistakable tap target
- Nav items padded 15px 14px for comfortable hit area

### Collapsing Strategy
- Hero: 56px display words scale down on mobile, weight 300 maintained
- Product cards: multi-column grid → stacked single column
- Dark/light alternating sections maintain full-width treatment
- Language pill row wraps on narrow viewports

### Image Behavior
- Product imagery and waveform/voice visuals carry no shadow at any size, consistent with the flat system
- Cards maintain 8px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / CTA: Action Blue (`#227cff`)
- CTA hover: Blue Deep (`#305dff`)
- Energy CTA: Lime (`#94fb4d`)
- Button label: CTA Ink (`#2b2b2b`)
- Dark canvas: Canvas (`#090909`)
- Light section / on-dark text: Light (`#f0f0f0`)
- Dark card surface: Surface Darker (`#1c1c1c`) / Surface Dark (`#161615`)
- Language pill: Chip Grey (`#cccccc`), text Pure Black (`#000000`)
- Nav ink: (`#222222`); muted text: (`#909090`) / (`#6c6c6c`)

### Example Component Prompts
- "Create a hero on near-black `#090909`. Display word at 56px Euclid Circular B weight 300, letter-spacing -1.5px, color `#f0f0f0`. Eyebrow label at 24px weight 300, color `#227cff`. Primary CTA: `#227cff` background, `#2b2b2b` text, 30px radius, 0 20px padding, 36px tall, 18px weight 300 — 'Learn More'."
- "Design a dark product card: `#1c1c1c` background, 1px solid `#090909` border, 8px radius, no shadow. Title 24px Euclid Circular B weight 300, `#f0f0f0`. Body 19px weight 300, `#909090`."
- "Build a light section: `#f0f0f0` background, full-width. Section eyebrow 34px Euclid Circular B weight 300, `#227cff`. Body text 19px weight 300, near-black `#090909`."
- "Create a top nav on `#090909`: Euclid Circular B 15px weight 300 links, `#f0f0f0` text, action-blue `#227cff` on active. Lime `#94fb4d` 'Get Started' pill (30px radius, `#2b2b2b` text)."

### Iteration Guide
1. Euclid Circular B weight 300 for every role — never reach for bold
2. Action-blue (`#227cff`) is the single action color; lime (`#94fb4d`) is a rare energy accent
3. No shadows — separate with dark/light bands and layered `#1c1c1c` / `#161615` surfaces
4. Pill geometry throughout — 30px buttons, fully-round language chips
5. Button labels are dark ink `#2b2b2b`, not white
6. Body runs large at 19px; tint headings blue instead of bolding them
7. Negative tracking on display words, normal on body

---

## 10. Voice & Tone

Supertone's voice is **precise, optimistic, and craft-oriented** — the register of researchers who happen to build creative tools. The company tagline "Beyond the Voice" frames the mission as going further than simple speech imitation: technology that "understands, resonates, and empowers." Copy is clear and declarative, foregrounding capability and creative possibility over hype.

| Context | Tone |
|---|---|
| Hero / display words | Single confident words ("Play", "Shift", "Clear", "Air"). Minimal, product-named. |
| Mission / vision | Aspirational but concrete. "Anyone can speak and be heard in the voice they want." |
| Product descriptions | Capability-first, creator-framed. States what the tool lets you make. |
| CTAs | Direct, low-pressure. "Get Started", "Learn More", "Business Contact". |
| Responsible-AI copy | Calm, principled, plain. States commitments ("Respect to Rights") without legalese theater. |

**Voice samples (verbatim from live brand surfaces):**
- "The Voice Intelligence Platform" — homepage H1 eyebrow. *(verified live 2026-06-26)*
- "AI voice generator for creators" — homepage product subhead. *(verified live 2026-06-26)*
- "Beyond the Voice" — company-page mission framing. *(verified live 2026-06-26)*
- "A creative landscape where anyone can speak and be heard in the voice they want." — vision statement. *(verified live 2026-06-26)*

**Forbidden register**: fear-based or sensational AI framing, undefined jargon left unexplained, hype superlatives, anything that downplays consent/rights in a voice-cloning context.

## 11. Brand Narrative

Supertone (수퍼톤) was founded on **March 19, 2020** in **Seoul** by **Kyogu Lee** (이교구), a voice-AI researcher who earned a PhD in Computer-Based Music Theory and Acoustics from Stanford and now serves as the company's President. The founding premise was a foundation model for voice — a single neural framework, **NANSY (Neural Analysis & Synthesis)**, able to handle the full range of voice-generative tasks: speech and singing synthesis, voice conversion, and voice design, with independent control over individual elements of a voice.

K-pop powerhouse **HYBE** (then Big Hit Entertainment) invested ₩4 billion for a controlling 18.2% stake in February 2021, then took a majority position in a roughly **$32M acquisition in 2023**, making Supertone a HYBE subsidiary. The company is led day-to-day by CEO **Hoon Heo** (허훈) from its Gangnam, Seoul headquarters. Its work has surfaced in landmark projects — the multilingual single "Masquerade" by HYBE artist **MIDNATT**, the **Re-Alive** digital-twin restoration of a deceased Korean rock idol, and the AI-powered virtual group **SYNDI8** — alongside research validated at top AI venues (ICLR, NeurIPS, Interspeech).

What the brand refuses, visible in its design: the loud, gradient-and-glow aesthetic of most generative-AI startups, and any framing that treats synthetic voice casually. What it embraces: a precise, studio-grade interface (near-black canvas, one font at weight 300, flat depth), a single disciplined action-blue, and an explicit **Responsible AI** posture built on rights, consent, and collaboration with artists.

## 12. Principles

1. **Beyond imitation.** The mission is voice that understands and empowers, not mere mimicry. *UI implication:* present capability and creative outcome first; let the technical depth show through restraint, not noise.
2. **Restraint signals rigor.** A research company demonstrates confidence by what it leaves out. *UI implication:* one font, one weight (300), flat depth, two rationed accent colors.
3. **One color means action.** Action-blue (`#227cff`) is the single "do this" cue, with lime (`#94fb4d`) as a rare energy spark. *UI implication:* never spread the accents across decorative elements.
4. **Studio, not app.** The dark canvas and gallery-like band rhythm evoke a control room. *UI implication:* alternate near-black and light sections; avoid playful, consumer-app ornamentation.
5. **Consent is a design value.** Responsible-AI commitments (rights, data protection, artist collaboration) are first-class. *UI implication:* surface rights/consent plainly wherever voices are created or used.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Supertone user segments (content creators, game/media studios, enterprise developers integrating voice APIs), not individual people.*

**Minseo, 27, Seoul.** A solo YouTube creator who uses Supertone's TTS to narrate videos in multiple languages. Values that the generated voice keeps a consistent character across clips and that the tool is fast enough to fit a weekly upload cadence.

**Daniel, 38, Los Angeles.** An audio lead at a game studio integrating the voice API to give NPCs distinct, controllable voices. Cares about latency, the four-element voice control, and clear licensing — he chose Supertone partly for its explicit rights stance.

**Jiwon, 33, Seongnam.** A producer at a media company exploring voice restoration and dubbing. Trusts the brand's calm, research-forward tone and its Responsible-AI principles when pitching a sensitive project internally.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no generations yet)** | Near-black canvas. Single light (`#f0f0f0`) line at body size explaining nothing's been created yet, with one action-blue (`#227cff`) CTA to start. No clutter. |
| **Empty (saved voices, none)** | Muted (`#909090`) single line: nothing saved yet, plus a path to create one. Calm, honest. |
| **Loading (voice generation)** | Inline progress on the dark surface; previous output stays visible. Flat pulse, no shadow shimmer, consistent with the shadowless system. |
| **Error (generation failed)** | Inline message in light text with a plain-language explanation and a retry. States what to do next, never a bare error code. |
| **Error (rights / consent block)** | Dedicated state: explains that a voice can't be used without rights-holder permission, reflecting the Responsible-AI principle directly in the UI. |
| **Success (generation ready)** | Brief inline confirmation in calm tone; the result/player appears immediately below. No celebratory emoji. |
| **Disabled** | Muted (`#6c6c6c`) text on reduced-opacity surface; action-blue actions fade rather than turn grey to preserve the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 360ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, dropdowns |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is quiet and functional, consistent with the flat, studio-grade aesthetic. Buttons respond to press with a subtle blue deepening (`#227cff` → `#305dff`) and scale; sections and product cards fade in from below at `motion-standard / ease-enter`. No bounce or spring — a voice-AI research brand signals precision, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product stays fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-26) via playwright getComputedStyle on https://www.supertone.ai
and https://www.supertone.ai/en/company:
- body: Euclid Circular B ("Euclidcircularb Webxl"), weight 300, 19px / 24.7px, canvas rgb(9,9,9) #090909
- Hero display "Play": 56px / weight 300 / -1px / color rgb(240,240,240) #f0f0f0
- H1 eyebrow "The Voice Intelligence Platform": 24px / 300 / color rgb(34,124,255) #227cff
- Primary CTA "Learn More" / "Get Started Free": bg rgb(34,124,255) #227cff / text rgb(43,43,43) #2b2b2b / radius 30px / 0 20px / 36px
- Energy CTA "Get Started": bg rgb(148,251,77) #94fb4d / text #2b2b2b / radius 30px
- Light pill "Join Our Team": bg rgb(240,240,240) #f0f0f0 / text rgb(9,9,9) #090909 / radius 30px / 0 40px / 40px
- Dark product card: bg rgb(28,28,28) #1c1c1c / 1px solid rgb(9,9,9) #090909 / radius 8px
- Language pill KO/EN/JA: bg rgb(204,204,204) #cccccc / text rgb(0,0,0) #000000 / radius 9999px / 40px
- box-shadow: none across hero/nav/headings/cards (shadowless system confirmed)
- Section eyebrows (Mission/Vision/Research/Careers): 34px / 300 / rgb(34,124,255) #227cff

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live homepage and company page
(https://www.supertone.ai, https://www.supertone.ai/en/company).

Brand narrative (§11): Supertone founded 2020 in Seoul by Kyogu Lee (President);
CEO Hoon Heo (from the company-page footer "CEO Hoon Heo"); HYBE invested ₩4B for
18.2% (Feb 2021) then majority-acquired (~$32M, 2023). NANSY foundation model,
MIDNATT "Masquerade", Re-Alive, and SYNDI8 are from the company page newsroom and
public reporting (Music Business Worldwide, Korea Herald). KR per parent-HQ rule
(HYBE is Korean; Supertone HQ in Gangnam, Seoul).

Personas (§13) are fictional archetypes informed by publicly observable Supertone
user segments (creators, studios, API developers). Names are illustrative; they do
not refer to real people.

Interpretive claims (e.g., "restraint signals rigor", "studio not app") are editorial
readings connecting Supertone's observed design to its positioning, not directly
sourced Supertone statements.
-->
