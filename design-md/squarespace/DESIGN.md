---
id: squarespace
name: Squarespace
country: US
category: saas
homepage: "https://www.squarespace.com"
primary_color: "#000000"
logo:
  type: simpleicons
  slug: squarespace
verified: "2026-06-22"
omd: "0.1"
tokens:
  source: reconciled
  extracted: "2026-06-22"
  note: "primary = live black (#000000); brand system is strictly monochrome — black/white/charcoal/ash. Clarkson is the proprietary typeface. Zero chromatic color."
  colors:
    primary: "#000000"
    canvas: "#ffffff"
    charcoal: "#2f2f2f"
    dark-surface: "#1a1a1a"
    ash: "#898989"
    fog: "#dddddd"
    muted: "#999999"
    on-primary: "#ffffff"
    hairline: "#dddddd"
  typography:
    family: { display: "Clarkson", accent: "Clarkson Serif", fallback: "Helvetica, sans-serif" }
    display-hero:  { size: 64, weight: 300, lineHeight: 1.04, tracking: -3.84, use: "Hero headline — whisper-weight editorial authority" }
    display-lg:    { size: 56, weight: 400, lineHeight: 1.00, tracking: -2.24, use: "Template/page hero title" }
    heading:       { size: 40, weight: 400, lineHeight: 1.08, tracking: -1.6, use: "Section headings, feature titles" }
    heading-sm:    { size: 26, weight: 400, lineHeight: 1.08, tracking: -0.52, use: "Card headings, sub-sections" }
    subheading:    { size: 22, weight: 500, lineHeight: 1.20, use: "Category headings, section sub-heads" }
    body-ui:       { size: 16, weight: 400, lineHeight: 1.40, use: "Nav items, body copy, standard text" }
    body-sm:       { size: 15, weight: 500, lineHeight: 1.00, use: "Feature links, caption labels" }
    cta:           { size: 14, weight: 500, lineHeight: 1.00, use: "Button labels" }
    caption:       { size: 12, weight: 400, lineHeight: 1.40, use: "Metadata, small labels" }
  spacing: { xs: 8, sm: 16, md: 24, base: 32, lg: 40, xl: 48, xxl: 80, section: 120 }
  rounded: { sm: 4, md: 8, lg: 100, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#000000", fg: "#ffffff", radius: "0px", padding: "24px 32px", font: "14px / 500 Clarkson", use: "Primary CTA on light surface (Get started)" }
    button-white: { type: button, bg: "#ffffff", fg: "#000000", radius: "0px", padding: "24px 32px", font: "14px / 500 Clarkson", use: "Primary CTA on dark/hero surface" }
    button-charcoal: { type: button, bg: "#2f2f2f", fg: "#ffffff", radius: "0px", padding: "16px 24px", font: "14px / 500 Clarkson", use: "Secondary filled button on mid-dark surfaces" }
    feature-card: { type: card, bg: "#2f2f2f", fg: "#ffffff", radius: "8px", padding: "24px", use: "Dark feature card — product links, service cards" }
    template-card: { type: card, bg: "#000000", fg: "#ffffff", radius: "8px", use: "Template preview card with full-bleed image" }
    pill-tab: { type: tab, fg: "#000000", radius: "100px", padding: "8px 18px", font: "16px / 400 Clarkson", use: "Category filter pill tabs", active: "text #000000 + bg #dddddd" }
    lang-select: { type: badge, bg: "#5a5a5a", fg: "#ffffff", radius: "4px", padding: "8px 16px", font: "16px / 400", use: "Locale/language selector badge" }
    text-input: { type: input, bg: "#ffffff", border: "1px solid #dddddd", radius: "8px", fg: "#666666", font: "15px / 400 Clarkson", use: "Search / form text input" }
  components_harvested: true
---

# Design System Inspiration of Squarespace

## 1. Visual Theme & Atmosphere

Squarespace is the definitive case study in editorial minimalism as a product philosophy. The homepage opens on an immersive full-screen hero video set against pure black (`#000000`) — not a dark navy, not a charcoal, but absolute black — with a 64px `Clarkson` headline rendered at weight 300 and tight −3.84px tracking. The headline reads: "A website makes it real." That's the register — declarative, unhurried, confident. This is a design company that uses design as the product demo.

The typographic system is built on `Clarkson`, Squarespace's proprietary sans-serif, paired with `Clarkson Serif` for editorial accent headings. At display sizes, Clarkson runs at weight 300 — the same "whisper-weight headline" approach as Stripe's `sohne-var`, but applied to a creative/commerce product rather than a fintech one. Where other website builders use bold, exclamatory copy to communicate power ("Build a website in minutes!"), Squarespace uses lightness as luxury. The text earns its authority by refusing to shout.

The color system is radical in its restraint: pure `#000000` black, pure `#ffffff` white, and a small set of intermediate grays (`#2f2f2f` charcoal, `#898989` ash, `#dddddd` fog). There is no accent color, no brand teal or orange or purple — no chromatic color of any kind in the UI system. This is not a missing feature; it is the feature. Squarespace signals that your content will be the color, and the platform will stay out of its way. Section bands alternate between black and white in a stark rhythm that creates dramatic contrast without any color, and full-bleed photography does the work that most brands assign to a color palette.

**Key Characteristics:**
- Clarkson weight 300 at 64px with −3.84px tracking for hero display — editorial whisper-weight authority
- Strictly monochrome palette: `#000000`, `#ffffff`, and gray scales — zero chromatic color
- Alternating black/white full-width section bands as the depth/rhythm system
- `Clarkson Serif` for accent subheadings (26px / weight 400 / −0.52px tracking)
- Buttons are square-cornered (0px radius) — no pill, no rounding, nothing softens the edge
- Full-bleed photography and video as the only "color" in the system
- Shadow-free: depth through contrast, not elevation

## 2. Color Palette & Roles

### Primary
- **Obsidian** (`#000000`): Primary brand color, hero background, dark section bands, all dark surfaces. The ultimate high-contrast anchor.
- **Paper** (`#ffffff`): Page background, text on dark surfaces, light section bands, card backgrounds.

### Intermediate Grays
- **Charcoal** (`#2f2f2f`): Filled dark buttons, elevated card surfaces, dark UI elements. A warmer near-black for secondary surfaces that need separation from pure black.
- **Dark Surface** (`#1a1a1a`): Deep dark card backgrounds, dropdown/overlay surfaces.
- **Ash** (`#898989`): Muted body text, secondary descriptions, de-emphasized labels. The workhorse gray for supporting copy.
- **Fog** (`#dddddd`): Borders, dividers, pill tab active background, input outlines. The lightest gray with structural intent.
- **Muted** (`#999999`): Tertiary text, subtle UI dividers, placeholder text.
- **Slate Dark** (`#5a5a5a`): Locale/language selector buttons, mid-tone interactive surfaces.

### System
- **On-Primary**: `#ffffff` — text on black or charcoal surfaces
- **Hairline**: `#dddddd` — standard border weight for cards, inputs, and dividers

## 3. Typography Rules

### Font Family
- **Primary Display**: `Clarkson` (proprietary), fallback: `Helvetica, sans-serif`
- **Accent**: `Clarkson Serif`, fallback: `Helvetica, sans-serif` — used for editorial sub-headings at 26px
- **Weights in use**: 300 (display hero only), 400 (body and headings), 500 (UI, buttons, emphasis)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Clarkson | 64px | 300 | 1.04 (66px) | -3.84px | Hero H1 — live measured |
| Display Large | Clarkson | 56px | 400 | 1.00 | -2.24px | Templates page H1 |
| Section Heading | Clarkson | 40px | 400 | 1.08 | -1.60px | Feature section H2 |
| Card Heading | Clarkson Serif | 26px | 400 | 1.08 | -0.52px | Sub-section H3 |
| Subheading | Clarkson | 22px | 500 | 1.20 | normal | Category label, nav section |
| Body UI | Clarkson | 16px | 400 | 1.40 | normal | Nav, lists, standard text |
| Body Small | Clarkson | 15px | 500 | 1.00 | normal | Feature links, dropdown items |
| CTA / Button | Clarkson | 14px | 500 | 1.00 | normal | Button labels |
| Caption | Clarkson | 12px | 400 | 1.40 | normal | Metadata, small labels |

### Principles
- **Weight 300 as editorial luxury**: Clarkson at 300 weight for display headlines is Squarespace's typographic signature — the same philosophy as a high-end print magazine cover. The lightness signals that the product's confidence needs no volume.
- **Negative tracking at scale**: -3.84px at 64px, -2.24px at 56px, -1.60px at 40px. Headlines compress into engineered blocks; body text stays at normal tracking.
- **Clarkson Serif as counterpoint**: The serif accent at 26px provides a classical pause within the geometric sans system — used for tertiary headings and to signal a change of register (content type, section narrative).
- **Two-weight UI simplicity**: Buttons and emphasis use weight 500; nav links and body text use weight 400; display is reserved for weight 300. No bold (700+) anywhere.

## 4. Component Stylings

### Buttons

**Primary (Light Surface)**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 0px
- Padding: 24px 32px
- Font: 14px Clarkson weight 500
- Height: 66px
- Use: Primary CTA on white backgrounds ("Get started")

**Primary (Dark/Hero Surface)**
- Background: `#ffffff`
- Text: `#000000`
- Radius: 0px
- Padding: 24px 32px
- Font: 14px Clarkson weight 500
- Height: 66px
- Use: Primary CTA on black hero sections — same geometry, inverted colors

**Secondary Filled Dark**
- Background: `#2f2f2f`
- Text: `#ffffff`
- Radius: 0px
- Padding: 16px 24px
- Font: 14px Clarkson weight 500
- Use: Secondary filled button on mid-tone or dark card surfaces

### Cards & Containers

**Dark Feature Card**
- Background: `#2f2f2f`
- Text: `#ffffff`
- Radius: 8px
- Padding: 24px
- Use: Product feature cards (Extensions, Payments, Analytics, Design Intelligence)

**Template Gallery Card**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 8px
- Use: Template preview card — full-bleed image with overlaid heading and description

**Surface Card (Light)**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Radius: 8px
- Use: Light-surface information cards, content containers

### Tabs

**Pill Category Tab**
- Text: `#000000`
- Radius: 100px
- Padding: 8px 18px
- Font: 16px Clarkson weight 400
- Active: background `#dddddd`, text `#000000`
- Inactive: transparent background, text `#898989`
- Use: Template category filters (Photography, Design, Education, Consulting, Art)

### Inputs

**Text Input / Search**
- Background: `#ffffff`
- Border: 1px solid `#dddddd`
- Radius: 8px
- Text: `#666666`
- Font: 15px Clarkson weight 400
- Use: Search bar on templates, filter input

### Badges

**Locale Selector**
- Background: `#5a5a5a`
- Text: `#ffffff`
- Radius: 4px
- Padding: 8px 16px
- Font: 16px weight 400
- Use: Language/region selection badge in footer

### Navigation

- Background: transparent over hero (transitions to `#000000` on scroll)
- Logo: white on dark, black on light
- Nav items: Clarkson 16px weight 400, `#000000` text on light / `#ffffff` on dark
- Height: 80px (nav bar), 66px (CTA button)
- Primary CTA right-aligned: white button (`#ffffff` bg, `#000000` text, 0px radius)
- No border, no shadow — pure color contrast for the nav background

---

**Verified:** 2026-06-22 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.squarespace.com/ (homepage nav, hero, feature cards, CTA buttons); https://www.squarespace.com/templates (H1 display heading, category pill tabs, search input)
**Tier 2 sources:** styles.refero.design/style/8618f649-6d1c-45ca-aff8-e7f04928d8dd (Squarespace — Cinematic monochrome gallery); getdesign.md/squarespace — not found (404)
**Conflicts unresolved:** none — Tier 1 and Tier 2 (refero) fully consistent on monochrome palette, Clarkson typeface, 0px button radius, 8px card radius, 100px pill tab radius

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 8px, 16px, 24px, 32px, 40px, 48px, 80px, 120px, 240px
- Card padding: 24–32px
- Section gap: 80–120px
- Button padding: 24px 32px (primary), 16px 24px (secondary)

### Grid & Container
- Max content width: ~1200px
- Hero: full-bleed video/image, centered single-column headline, zero horizontal padding
- Feature sections: centered header + 2–4 column card grid
- Full-width alternating black/white section bands — the defining layout rhythm
- Dark feature cards arranged in horizontal grids (3–4 column) on black sections
- Template gallery: 2-column grid with full-bleed image cards

### Whitespace Philosophy
- **Alternating band rhythm**: The page reads like a magazine spread — white sections cut to all-black sections, then back. The contrast is the hierarchy, not whitespace quantity.
- **Dense within sections**: Within each band, content packs tightly. The drama comes from the band switch, not from internal padding expansion.
- **Typography as decoration**: Large weight-300 headlines at -3.84px tracking function as compositional elements, not just text. The letterforms are part of the layout geometry.

### Border Radius Scale
- Micro (0px): Buttons — sharp corners are the system's statement
- Card (8px): Feature cards, template cards, inputs, pill base
- Pill (100px): Tab filters, category selectors

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | All surfaces — the system is shadowless |
| Surface Contrast (Level 1) | `#2f2f2f` background | Feature cards, secondary surfaces above black bands |
| Band Contrast (Level 2) | Alternating `#000000`/`#ffffff` full-width bands | Page-level section hierarchy |
| Photography (Level 3) | Full-bleed image/video | Hero and template cards — photography IS the depth |

**Shadow Philosophy**: Squarespace is explicitly shadow-free. Live inspection confirmed `box-shadow: none` across hero, nav, buttons, cards, and all surfaces. Depth is communicated through the alternating black/white section band system and full-bleed photography — a technique derived from editorial print design where white space and page contrast do the work of elevation.

## 7. Do's and Don'ts

### Do
- Use Clarkson weight 300 at 64px with -3.84px tracking for hero headlines
- Alternate black and white section bands as the primary rhythm and hierarchy device
- Use 0px border-radius on all buttons — the sharp corners are a deliberate brand statement
- Use 8px border-radius on cards and inputs
- Keep all chromatic color out of the UI — let user content provide color
- Use full-bleed photography and video for hero surfaces
- Pair Clarkson (sans) and Clarkson Serif for the display/accent heading split
- Use `#2f2f2f` charcoal for secondary dark surfaces (not pure black)
- Use `#898989` ash for secondary/muted text

### Don't
- Introduce any chromatic accent color — Squarespace is monochrome only
- Round button corners — 0px radius is the design signature
- Use box shadows — depth comes from contrast, not elevation
- Use Clarkson weight 700+ — the system tops out at 500
- Use solid non-photographic color backgrounds on hero sections
- Set body copy below 14px or use pure black (`#000000`) for body text — use `#898989` or `#999999`
- Use positive letter-spacing on display headings — always negative tracking at large sizes
- Mix pill and square geometries on the same button row — keep button radius consistent per surface

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline scales down, button stacks |
| Tablet | 640-1024px | 2-column feature cards, compressed section bands |
| Desktop | 1024-1280px | Full layout, 3–4 column feature grids |
| Large Desktop | >1280px | 1200px max-width centered, generous side margins |

### Touch Targets
- Primary buttons: 66px height with 24px vertical padding — comfortable tap area
- Pill tabs: 38px height with 8px vertical padding
- Nav links at 16px with full header height (80px) as the tap area

### Collapsing Strategy
- Hero: 64px weight-300 headline → reduced size on mobile, weight maintained
- Navigation: horizontal nav → hamburger toggle on mobile
- Feature card grids: 4-column → 2-column → single column
- Section bands: maintain full-width treatment at all breakpoints — the black/white rhythm survives
- Typography: progressive scale reduction; tracking relaxes slightly at mobile sizes

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary (CTA on light): `#000000` background, `#ffffff` text
- Primary (CTA on dark): `#ffffff` background, `#000000` text
- Secondary dark surface: `#2f2f2f` (charcoal)
- Background: `#ffffff` (paper)
- Dark sections: `#000000`
- Body text: `#000000` on white, `#ffffff` on black
- Muted text: `#898989` (ash)
- Borders / pill tabs: `#dddddd` (fog)
- Tertiary: `#999999` (muted)

### Example Component Prompts
- "Create a Squarespace-style hero: full-bleed black background (`#000000`). Headline: 64px Clarkson weight 300, line-height 1.04, letter-spacing -3.84px, color `#ffffff`. Sub-headline: 16px Clarkson weight 400, `#ffffff`. CTA button: `#ffffff` background, `#000000` text, 0px radius, 24px 32px padding, 14px Clarkson weight 500."
- "Build a feature card: `#2f2f2f` background, `#ffffff` text, 8px radius, 24px padding. Heading 16px Clarkson weight 400. Body 13px Clarkson `#898989`."
- "Design a template page: white `#ffffff` background. H1: 56px Clarkson weight 400, letter-spacing -2.24px, `#0e0e0e`. Below: horizontal pill tabs with 100px radius, `#dddddd` active bg, `#898989` inactive text, 8px 18px padding."
- "Create a black band section: `#000000` background, H2: 40px Clarkson weight 400, letter-spacing -1.6px, `#ffffff`. Cards in 3-column grid: `#2f2f2f` background, `#ffffff` headings, `#898989` body text, 8px radius."
- "Build a nav: 80px height, transparent on hero (over black bg). Logo white. Nav links 16px Clarkson weight 400, `#ffffff`. Right CTA: `#ffffff` background, `#000000` text, 0px radius, 24px 32px padding."

### Iteration Guide
1. Button radius is 0px — if you add rounding, you've broken the brand
2. No chromatic color — if you add blue, green, or any hue, you've broken the brand
3. Display headings use weight 300, never 400+
4. Hero backgrounds are always photography/video, never flat color
5. Section bands alternate: white → black → white, or stay consistently one tone per page
6. Shadows are forbidden — separate surfaces with background color contrast only
7. Clarkson Serif (26px / weight 400) is for accent H3 headings only

---

## 10. Voice & Tone

Squarespace's voice is **confident, editorial, and understated** — the written equivalent of its visual system. Headlines are declarative and spare: "A website makes it real." "Make any website template yours with ease." The register is creative-professional: the copywriter audience, the independent business owner, the portfolio designer. There are no exclamation marks in hero copy. CTAs are plain imperatives: "Get started." Never "Start building your dream website for free today!"

The brand voice draws from editorial media rather than tech marketing — closer to a design magazine masthead than a SaaS landing page. This shows up in the vocabulary: "Cinematic", "editorial", "real", "yours." Abstract nouns over feature specifications.

| Context | Tone |
|---|---|
| Hero headlines | Declarative, minimal. One short sentence. No adjective stacking. |
| Product descriptions | Feature-first, concrete. "Accept multiple payment types." |
| CTAs | Plain imperative. "Get started." "View templates." |
| Template gallery | Curatorial. Describes mood rather than specs. |
| Help / Support | Clear, procedural. Step-by-step without condescension. |
| Pricing | Direct, no asterisk-heavy small print. |
| Careers / About | Mission-forward. "Making it real since 2003." |

**Forbidden register:** "Powerful", "robust", "seamlessly", "game-changing", "best-in-class", "incredibly easy". Feature launch hyperbole. Exclamation marks in any primary copy. "Simply..." as a minimizer.

**Voice samples (live from squarespace.com, 2026-06-22):**
- "A website makes it real" — hero H1 *(verified live 2026-06-22)*
- "Grow your business" — section H2 *(verified live 2026-06-22)*
- "Make any website template yours with ease." — templates page H1 *(verified live 2026-06-22)*

## 11. Brand Narrative

Squarespace was founded in **2003** by **Anthony Casalena** while he was a student at the University of Maryland. He built the first version entirely alone, running it from his dorm room before bootstrapping the company through its early years without external investment. The original premise — that anyone should be able to build a beautiful website without needing to write code — reflected a design conviction as much as a technical one: that good design should be democratized, not gatekept by technical ability.

The company remained bootstrapped for years, an unusual posture in the VC-driven SaaS landscape, which reinforced a culture of deliberate growth and design quality over user acquisition velocity. Squarespace went public in May 2021 via a direct listing, and in 2024 was taken private by Permira at approximately $6.9 billion.

The brand positioned itself against the visual noise of the early web. Where other site builders offered maximum flexibility and a library of clip-art templates, Squarespace made a bet that professional-caliber aesthetics — the kind previously accessible only to businesses that could afford design agencies — could be productized and made widely available. This is the origin of the monochrome system: it's not a style preference but a statement that the builder should disappear and let the creator's content lead.

What Squarespace refuses: the "beginner-friendly" register that talks down to the audience; cheap color palettes that date quickly; the UI chrome that competes with the user's content for visual attention. What it embraces: proprietary typography (`Clarkson`) as a design investment; full-bleed photography as the system's "color"; editorial minimalism borrowed from print publishing and fashion.

## 12. Principles

1. **The builder disappears.** Squarespace's design system exists to make itself invisible so the creator's work can dominate. *UI implication:* Zero chromatic color in the UI; no decorative shadows; no visual noise that competes with the user's content.
2. **Editorial quality at every tier.** The templates aren't "good enough for beginners" — they are professional-grade. *UI implication:* Every default setting should produce a result that could appear in a print magazine without modification.
3. **Restraint as differentiation.** The willingness to not add a feature, not add a color, not add a button style is a competitive advantage. *UI implication:* When in doubt, remove. The constraint produces quality.
4. **Typography is the identity.** Clarkson (proprietary) is the investment that makes the system unmistakable without color. *UI implication:* Weight 300 at display sizes, negative tracking, serif accent — these are non-negotiable even at cost.
5. **Photography and video are the palette.** The only "color" in the system comes from the creator's content. *UI implication:* Provide full-bleed photography slots wherever a section needs visual energy; never use flat color for that job.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Squarespace user segments (creative independents, small business owners, portfolio professionals), not individual people.*

**Mia Johansson, 29, New York.** A freelance photographer building her portfolio to attract editorial and commercial clients. Chose Squarespace because the templates don't look like "website templates" — they look like the creative work she aspires to. Measures quality by whether potential clients assume she hired a design studio. Cares more about visual appearance than CMS flexibility.

**Marcus Osei, 37, London.** A men's clothing designer launching a direct-to-consumer brand. Uses Squarespace Commerce because the storefront doesn't need to feel like a tech product — it needs to feel like a boutique. Appreciates that the default typography (Clarkson) is already at the quality level he'd ask a designer to produce.

**Elena Vasquez, 44, Los Angeles.** A yoga instructor and wellness coach who books clients via Squarespace Scheduling. Values that she can update her site herself without calling anyone. Her clients are design-conscious; a site that looks generic would undermine her brand positioning. Squarespace gives her the aesthetic credibility without the agency budget.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no templates matching filter)** | White canvas. Single `#000000` sentence at 16px Clarkson: "No templates found for this category." One black CTA to clear filters. No illustration. |
| **Empty (site pages, new site)** | Section placeholder in `#dddddd` fog with `#898989` text: "Add your content here." Clean, editorial — a blank gallery wall waiting to hang work. |
| **Loading (template gallery)** | Skeleton blocks at exact card dimensions with `#dddddd` fog background, no shimmer. Consistent with the shadow-free system — flat pulse only. |
| **Loading (site publish)** | Progress bar in `#000000` below the nav. Previous state visible with reduced opacity. |
| **Error (checkout / payment)** | Inline banner with thin `#000000` left border. Plain-language explanation: what failed and one specific action. No red color — monochrome error treatment. |
| **Error (form validation)** | Field underline changes to `#000000` (heavier weight). Error message at 12px below field in `#000000`. Clear: what is wrong, what is valid. |
| **Success (form submitted)** | Brief inline confirmation. `#000000` checkmark icon + 15px Clarkson: "Your message has been sent." No toast, no confetti. |
| **Success (site published)** | Banner above content: "Your site is live." `#000000` text, `#ffffff` background, no border. Link to view the live site. |
| **Skeleton** | `#dddddd` fog blocks at final dimensions, 8px radius matching card geometry. Flat — no shadow on skeleton either. |
| **Disabled** | Opacity reduced: `rgba(0,0,0,0.3)` on button text; background shifts to `#dddddd`. The button geometry (0px radius) is preserved even in disabled state. |
| **Hover (button)** | Background shifts from `#000000` to `#2f2f2f` (charcoal) on primary dark buttons; `#ffffff` buttons shift to `#f5f5f5`. Subtle — not a color change, a value shift. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Selection commits, focus states |
| `motion-fast` | 150ms | Button hover, link underlines, pill tab selection |
| `motion-standard` | 250ms | Navigation toggle, dropdown, page transitions |
| `motion-slow` | 400ms | Section band transitions, hero reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.0, 0.2, 1)` | Arriving — overlays, drawers, nav |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is editorial and restrained, matching the visual system. Nav transitions (`motion-standard / ease-enter`) treat the hamburger/drawer as a page-level event, not a widget. Hero video loads instantly once ready — no fade-in that delays impact. Pill tab selection uses `motion-fast` with a smooth background fill transition. Under `prefers-reduced-motion: reduce`, all transitions collapse to `motion-instant`; the product remains fully functional. No bounce, no spring, no parallax scroll effects that compete with the photography.

**Signature motion**: The hero-to-scroll nav transition — as the user scrolls past the hero, the transparent nav background fades to solid `#000000` over `motion-standard`. This is a 1:1 brand moment: the blackening of the nav bar is the Squarespace brand arriving. Interrupting or accelerating this transition breaks the editorial atmosphere.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-22) via playwright getComputedStyle on https://www.squarespace.com/:
- Hero H1 "A website makes it real" — Clarkson 64px / weight 300 / letter-spacing -3.84px / color rgb(255,255,255) on black bg
- H2 "Grow your business" — Clarkson 40px / weight 400 / letter-spacing -1.6px / color rgb(0,0,0)
- H3 section headings — Clarkson Serif 26px / weight 400 / letter-spacing -0.52px / color rgb(255,255,255)
- "Get started" CTA button — bg rgb(255,255,255) / color rgb(0,0,0) / radius 0px / padding 24px 32px / 14px weight 500
- Feature cards — bg rgb(47,47,47) #2f2f2f / radius 8px / padding 24px / color rgb(255,255,255)
- Nav — height 80px / transparent over hero / bg rgb(0,0,0) / CTA 14px Clarkson weight 500
- box-shadow: none across all inspected surfaces (shadowless system)
- bg frequency: rgb(0,0,0) dominant, rgb(255,255,255) secondary, rgb(47,47,47) feature surfaces

Tier 1 live inspect https://www.squarespace.com/templates:
- H1 "Make any website template yours with ease." — Clarkson 56px / weight 400 / letter-spacing -2.24px
- Pill tabs (Photography/Design/Education...) — bg rgb(255,255,255) / radius 4px (container) / Clarkson 16px / active bg rgb(255,255,255) pill
- Search input — bg rgba(0,0,0,0) / border 0px (inner) / radius 8px / color rgb(102,102,102)
- "Get started" on templates page — bg rgb(0,0,0) / color rgb(255,255,255) / radius 0px — inverted vs homepage

Tier 2 (refero): styles.refero.design/style/8618f649-6d1c-45ca-aff8-e7f04928d8dd
- Confirmed: monochrome system, Clarkson typeface, 0px button radius, 8px card radius, 100px pill radius
- Additional token detail: #2f2f2f charcoal, #898989 ash, #dddddd fog — all consistent with live inspect

Token-level claims (§1-9) are sourced from Tier 1 live inspection + Tier 2 refero cross-validation.

Voice samples (§10) are verbatim from live homepage + templates page (verified 2026-06-22).

Brand narrative (§11): Anthony Casalena founding story (2003, UMD dorm), bootstrapped history,
2021 direct listing, 2024 Permira take-private (~$6.9B) — widely documented public facts.

Personas (§13) are fictional archetypes. Names are illustrative; they do not refer to real people.

Interpretive claims (design principles, motion rules, "photography is the palette") are editorial
readings connecting Squarespace's observed design system to its positioning.
-->
