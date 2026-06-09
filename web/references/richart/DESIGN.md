---
id: richart
name: Richart
country: TW
category: fintech
homepage: "https://www.richart.tw"
primary_color: "#17b6c9"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=richart.com.tw&sz=128"
verified: "2026-06-08"
added: "2026-06-08"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-08"
  note: "primary = live Richart teal #17b6c9 (.btn-primary fill); hero accent cyan #2be0ec; tagline '最能幫年輕人存到錢的銀行' (the bank that best helps young people save). www.richart.tw bot-blocks (403 FORBIDDEN); tokens extracted from apex richart.tw HTML + v3 index.css / headerfooter.css served live."
  colors:
    primary: "#17b6c9"
    primary-hover: "#15a6b7"
    primary-soft: "#64cedb"
    accent-cyan: "#2be0ec"
    accent-bright: "#30dde8"
    accent-lime: "#dafa5f"
    canvas: "#fdfdfd"
    surface: "#f3f5f6"
    surface-alt: "#edf0f2"
    heading: "#2a3342"
    ink: "#1b2028"
    label: "#364053"
    body: "#727d8c"
    muted: "#b6bec7"
    on-primary: "#fdfdfd"
    hairline: "#dce0e5"
    border-soft: "#c7cdd4"
    teal-deep: "#001617"
    warn: "#cb904c"
    error: "#e75365"
  typography:
    family: { sans: "Noto Sans TC", display: "Montserrat" }
    display-hero: { size: 60, weight: 700, lineHeight: 1.4, tracking: -2, use: "Hero headlines, big friendly statements" }
    display-lg:   { size: 48, weight: 700, lineHeight: 1.25, tracking: 0, use: "Section hero headlines" }
    section:      { size: 34, weight: 700, lineHeight: 1.3, use: "Feature section titles" }
    subsection:   { size: 24, weight: 500, lineHeight: 1.4, use: "Sub-section heads, card titles" }
    title:        { size: 18, weight: 500, lineHeight: 1.55, use: "Block titles with teal accent bar" }
    body-lg:      { size: 18, weight: 400, lineHeight: 1.67, use: "Lead paragraphs, intro copy" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard reading text" }
    button:       { size: 20, weight: 500, lineHeight: 1.6, use: "Primary pill button label" }
    label:        { size: 14, weight: 500, lineHeight: 1.43, use: "Nav links, small labels" }
    caption:      { size: 12, weight: 400, lineHeight: 1.5, use: "Fine print, legal, metadata" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, pill: 32, full: 9999 }
  shadow:
    ambient: "0px 4px 12px rgba(72, 85, 108, 0.24)"
    standard: "2px 2px 36px 0px rgba(54, 64, 83, 0.2)"
    neumorphic: "0px 10px 44px rgba(102, 102, 102, 0.12), inset -3px -3px 10px rgba(84, 92, 101, 0.16), inset -5px -3px 12px rgba(193, 203, 221, 0.16)"
    elevated: "0px 24px 60px rgba(9, 9, 10, 0.2), inset 1px 1px 8px rgba(182, 190, 199, 0.08), inset -2px -2px 10px rgba(54, 64, 83, 0.1)"
  components:
    button-primary: { type: button, bg: "#17b6c9", fg: "#fdfdfd", radius: 9999, font: "20/500", use: "Primary CTA pill, hover #15a6b7" }
    button-primary-xl: { type: button, fg: "#fdfdfd", radius: 9999, padding: "16px 0", use: "Hero action, radial gradient #64cedb to #15a6b7, 240px wide" }
    button-secondary: { type: button, bg: "transparent", fg: "#17b6c9", radius: 9999, use: "Secondary action, 2px #17b6c9 border, hover fills teal" }
    card: { type: card, bg: "#fdfdfd", radius: 16, use: "Feature card, neumorphic inset shadow" }
    badge-teal: { type: badge, bg: "#ecf9fa", fg: "#17b6c9", radius: 9999, use: "Teal-themed tag" }
    badge-neutral: { type: badge, bg: "#f3f5f6", fg: "#727d8c", radius: 16, use: "Neutral tag" }
    input: { type: input, bg: "#fdfdfd", fg: "#1b2028", radius: 8, use: "Form input, 1px #c7cdd4 border, #17b6c9 focus, #e75365 error" }
    title-bar: { type: badge, bg: "#17b6c9", use: "4px x 24px vertical accent bar before block title" }
    badge-disabled: { type: badge, bg: "#727d8c", fg: "rgba(253,253,253,0.5)", radius: 9999, use: "Disabled button state" }
  components_harvested: true
---

# Design System Inspiration of Richart

## 1. Visual Theme & Atmosphere

Richart -- the digital-banking brand of Taiwan's Taishin International Bank (台新銀行) -- presents itself as the friendliest, most playful face of consumer finance on the Taiwanese web. Its self-declared promise, baked into the page `<title>`, is *"最能幫年輕人存到錢的銀行"* (the bank that best helps young people save). Everything about the surface serves that youth-targeted, save-with-a-smile mission: a near-white `#fdfdfd` canvas kept deliberately bright and airy, a single vivid teal (`#17b6c9`) doing nearly all of the interactive and brand work, and an illustration-led layout where rounded, characterful graphics carry as much narrative weight as the copy. Where Stripe reads as an engineer's instrument and a traditional bank reads as a marble lobby, Richart reads as a clean, optimistic mobile app that happens to have a marketing website.

The teal is the whole personality. `#17b6c9` is a bright, slightly green-leaning cyan-teal -- it looks like clear water, like a fresh start, like the "blue ocean" of saving money rather than the institutional navy of legacy banking. It anchors every primary call to action, the small vertical accent bars that introduce section titles, link hovers, and active states. A brighter sibling cyan (`#2be0ec`) and a soft tint (`#64cedb`) extend the family into hero gradients and decorative flourishes, and an unexpected electric lime (`#dafa5f`) appears as a youthful pop accent. The result is a palette that feels distinctly young, distinctly digital, and distinctly un-bank-like -- exactly the point for a product whose entire reason to exist is to make banking feel approachable to people in their twenties.

The geometry reinforces the friendliness. Primary buttons are full 100px pills, not Stripe's austere 4px corners; cards round at 16px; bottom sheets round at 24px. Nothing on the surface has a hard, aggressive edge. The typographic backbone is `Noto Sans TC` -- the open, humanist, exhaustively-glyphed Traditional-Chinese workhorse that renders Taiwanese copy cleanly at every weight -- paired with `Montserrat` for Latin display moments. Depth comes not from flat drop-shadows but from soft, neumorphic inset-and-outset shadow stacks (`0px 10px 44px rgba(102,102,102,0.12)` with inset highlights) that make surfaces feel like smooth, tactile pebbles. The overall atmosphere is bright, rounded, tactile, and warm -- a fintech that wants you to feel safe, not impressed.

**Key Characteristics:**
- A single dominant brand teal (`#17b6c9`) carrying CTAs, accents, links, and active states -- minimal color budget, maximal recognizability
- Bright near-white canvas (`#fdfdfd`) with cool gray surfaces (`#f3f5f6`) -- airy and optimistic, never heavy
- Full pill buttons (100px radius) and large 16px-24px card rounding -- soft, app-like, anti-institutional
- `Noto Sans TC` as the humanist Traditional-Chinese workhorse, `Montserrat` for Latin display
- Neumorphic inset+outset soft shadows (`rgba(102,102,102,0.12)` + inset highlights) -- tactile, pebble-like depth
- Hero cyan accent (`#2be0ec`) and electric lime (`#dafa5f`) as youthful pops against the calm teal base
- Slate-not-black text (`#2a3342` headings, `#727d8c` body) -- soft, never harsh
- Illustration-led storytelling over dense data -- a consumer app voice, not a developer console

## 2. Color Palette & Roles

### Primary
- **Richart Teal** (`#17b6c9`): The core brand color. Primary CTA fill, link hovers, active states, the 4px accent bar before section titles, secondary-button text and border. A bright, water-fresh cyan-teal that defines the brand.
- **Teal Hover** (`#15a6b7`): Darker teal for `.btn-primary:hover` and `:active` states.
- **Teal Soft** (`#64cedb`): Light teal used as the bright stop in the XL button radial gradient and decorative tints.
- **Canvas White** (`#fdfdfd`): Page background and button text on teal. An off-pure white that keeps the surface soft.

### Accent
- **Accent Cyan** (`#2be0ec`): Bright hero cyan for gradient flourishes and decorative highlights -- the energetic edge of the teal family.
- **Accent Bright** (`#30dde8`): A second vivid cyan for gradient mids and illustration accents.
- **Accent Lime** (`#dafa5f`): Electric chartreuse pop -- a youthful, unexpected highlight used sparingly for emphasis moments.

### Surfaces
- **Surface** (`#f3f5f6`): Cool light-gray section backgrounds and card fills.
- **Surface Alt** (`#edf0f2`): Slightly deeper gray for the bottom stop of subtle vertical surface gradients.
- **Ecofresh** (`#ecf9fa`): Pale teal-tinted surface for teal-themed cards and highlight panels.

### Text / Neutral Scale
- **Heading** (`#2a3342`): Primary heading slate -- a dark blue-gray, never pure black, that keeps headlines soft.
- **Ink** (`#1b2028`): Darkest text, near-black with a cool undertone, for maximum-contrast labels.
- **Label** (`#364053`): Secondary headings, strong labels, emphasized body.
- **Body** (`#727d8c`): Standard body copy, descriptions, secondary text.
- **Muted** (`#b6bec7`): Disabled text, captions, the faintest readable gray.

### Borders & Lines
- **Hairline** (`#dce0e5`): Standard divider and card-border gray.
- **Border Soft** (`#c7cdd4`): Slightly stronger border for inputs and grouped controls.

### Deep & Status
- **Teal Deep** (`#001617`): Near-black dark teal used for immersive dark moments and high-contrast type over light surfaces.
- **Warn** (`#cb904c`): Amber for caution and notice states.
- **Error** (`#e75365`): Coral-red for validation errors and destructive actions.

## 3. Typography Rules

### Font Family
- **Primary**: `'Noto Sans TC'` -- the humanist Traditional-Chinese sans that renders every Taiwanese glyph cleanly across weights. Used for ~95% of all text.
- **Display / Latin**: `'Montserrat'`, falling back to `'Noto Sans TC'` -- geometric Latin display face for English headlines, the "Richart" wordmark context, and number-forward moments.
- **Stack**: `'Noto Sans TC', sans-serif` with `font-display: swap` for resilient web-font loading.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Noto Sans TC / Montserrat | 60px | 700 | ~1.4 | Hero headline, biggest statement |
| Display Large | Noto Sans TC | 48px | 700 | 1.25 | Section hero headlines |
| Heading XL | Noto Sans TC | 40px | 700 | 1.3 | Large feature titles |
| Section | Noto Sans TC | 34px | 700 | 1.3 | Standard feature section titles |
| Heading | Noto Sans TC | 28px | 700 | 1.4 | Sub-feature heads |
| Subsection | Noto Sans TC | 24px | 500 | 1.4 | Card titles, sub-section heads |
| Lead | Noto Sans TC | 20px | 500 | 1.6 | Emphasized lead-in, button text |
| Title (accent-bar) | Noto Sans TC | 18px | 500 | 1.55 | Block titles paired with teal bar |
| Body Large | Noto Sans TC | 18px | 400 | 1.67 | Intro paragraphs |
| Body | Noto Sans TC | 16px | 400 | 1.5 | Standard reading text |
| Label | Noto Sans TC | 14px | 500 | 1.43 | Nav links, small labels |
| Caption | Noto Sans TC | 12px | 400 | 1.5 | Fine print, legal, metadata |

### Principles
- **One family, full coverage**: `Noto Sans TC` does nearly everything. The discipline of a single humanist family keeps the Traditional-Chinese typography even and warm across the whole page; `Montserrat` enters only for Latin display flavor.
- **Two working weights**: 400 (body) and 500 (labels, buttons, sub-heads), with 700 reserved for headlines. There is no ultra-light affectation here -- this is friendly, legible, mid-weight type, the opposite of Stripe's whisper-weight 300.
- **Generous line-height for CJK**: Body text runs at `line-height: 1.5`, lead copy at `1.67`. Traditional-Chinese characters are dense; the loose leading keeps long passages breathable.
- **Slate, not black**: Headlines are `#2a3342`, body is `#727d8c`. Nothing uses `#000000` -- the softness is deliberate and on-brand.
- **Accent-bar titles**: A signature device -- a 4px-wide, 24px-tall teal (`#17b6c9`) vertical bar sits before block titles, a tiny structural flourish that brands every section head.

## 4. Component Stylings

### Buttons

**Primary (pill)**
- Background: `#17b6c9`
- Text: `#fdfdfd`
- Radius: 100px (full pill)
- Font: Noto Sans TC, weight 500
- Hover / active: `#15a6b7` background
- Disabled: `#727d8c` background, `rgba(253,253,253,0.5)` text, 38px radius
- Use: Primary CTA -- "立即申辦" (apply now), "了解更多" (learn more)

**Primary XL (gradient)**
- Background: `radial-gradient(100% 256.33% at 0% 7.41%, #64cedb 0%, #15a6b7 100%)`
- Text: `#fdfdfd`
- Size: 240px wide, 16px vertical padding, 20px / line-height 32px
- Radius: 100px pill
- Hover: solid `#15a6b7` overlay fades in
- Use: Hero / headline primary action

**Secondary (outline pill)**
- Background: transparent
- Text: `#17b6c9`
- Border: `2px solid #17b6c9`
- Radius: 100px pill
- Hover: fills `#17b6c9`, text flips to `#fdfdfd`
- Use: Secondary actions alongside a primary

### Cards & Containers
- Background: `#fdfdfd` or `#f3f5f6`
- Radius: 16px (standard), 8px (compact), 24px (bottom sheets / hero panels)
- Shadow (soft): `0px 4px 12px rgba(72, 85, 108, 0.24)`
- Shadow (neumorphic): `0px 10px 44px rgba(102, 102, 102, 0.12), inset -3px -3px 10px rgba(84, 92, 101, 0.16), inset -5px -3px 12px rgba(193, 203, 221, 0.16)`
- Subtle surface gradients: `linear-gradient(180deg, #fdfdfd 0%, #eaeef0 100%)`

### Title Block (signature)
- A `4px × 24px` `#17b6c9` vertical bar (`.title .line`), then title text at 18px / weight 500 / `#2a3342`
- 8px gap between bar and text; the bar is the brand's miniature section-flag

### Badges / Tags
- Teal-themed: `#ecf9fa` background with `#17b6c9` text
- Neutral: `#f3f5f6` background with `#727d8c` text
- Radius: pill or 16px

### Inputs & Forms
- Border: `1px solid #c7cdd4`
- Radius: 8px-16px
- Focus: `#17b6c9` border / ring
- Label: `#364053`, 14px weight 500
- Text: `#1b2028`
- Placeholder: `#b6bec7`
- Error: `#e75365` border + helper text

### Navigation
- Light header on `#fdfdfd`, "Richart" wordmark left
- Links: Noto Sans TC 14px weight 500, `#364053`, hover `#17b6c9`
- Primary teal pill CTA right-aligned
- Mobile: hamburger toggle, bottom-sheet menus rounded at 24px

---

**Verified:** 2026-06-08 (omd-add-reference -- Tier 1 live CSS extract)
**Tier 1 sources:** https://www.richart.tw, https://www.taishinbank.com.tw (canonical homepage; bot-blocks 403 FORBIDDEN on direct fetch) reconciled with apex richart.tw live HTML + `/TSDIB_RichartWeb/static/revamp/css/v3/index.css` + `headerfooter.css` served live -- tokens `#17b6c9`, `Noto Sans TC`, 100px pill buttons, neumorphic shadows extracted directly from production CSS.
**Method note:** `www.richart.tw` returns 403 to automation; the apex `richart.tw` (same Taishin/Richart property, identical brand chrome) serves the full HTML and v3 stylesheets, from which all token values were measured verbatim.
**`.verification.md`:** `web/references/richart/.verification.md`

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Comfortable, even rhythm -- the spacing is generous and predictable, matching the friendly app voice rather than dense data layout

### Grid & Container
- Centered single-column hero with large illustration, teal pill CTA below the headline
- Feature sections alternate text-left / illustration-right blocks
- 2-3 column card grids for product features
- Full-bleed soft-gradient section bands (`#f3f5f6` → `#edf0f2`) to segment the page

### Whitespace Philosophy
- **Airy and optimistic**: Lots of breathing room around illustrations and headlines. The page never feels cramped -- whitespace signals calm and trust, important for a savings product.
- **Illustration as anchor**: Each section is built around a characterful illustration; copy is secondary and concise. The whitespace exists to let the illustrations breathe.
- **Soft banding**: Alternating near-white and cool-gray surface bands create gentle rhythm without hard dividers.

### Border Radius Scale
- Compact (4px-8px): inputs, small chips
- Standard (16px): cards, panels
- Large (24px): bottom sheets, hero panels (often `24px 24px 0 0` for sheets)
- Pill (32px / 100px): buttons, tags, toggles -- the dominant rounding gesture
- Circle (50%): avatars, icon buttons

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text |
| Soft (Level 1) | `0px 4px 12px rgba(72, 85, 108, 0.24)` | Buttons at rest, small cards |
| Neumorphic (Level 2) | `0px 10px 44px rgba(102, 102, 102, 0.12), inset -3px -3px 10px rgba(84, 92, 101, 0.16), inset -5px -3px 12px rgba(193, 203, 221, 0.16)` | Feature cards, pebble surfaces |
| Standard (Level 3) | `2px 2px 36px 0px rgba(54, 64, 83, 0.2)` | Floating panels, hover lift |
| Elevated (Level 4) | `0px 24px 60px rgba(9, 9, 10, 0.2), inset 1px 1px 8px rgba(182, 190, 199, 0.08), inset -2px -2px 10px rgba(54, 64, 83, 0.1)` | Modals, bottom sheets |

**Shadow Philosophy**: Richart's depth is soft and tactile rather than crisp. Its signature is the *neumorphic* shadow stack -- an outer ambient blur (`rgba(102,102,102,0.12)`) combined with multiple inset highlight/shadow layers that make surfaces look like smooth, rounded pebbles you could pick up. The shadow colors are warm-gray slate (`rgba(54,64,83,...)`, `rgba(84,92,101,...)`) tied to the text palette, not stark black. This tactile softness is the visual analogue of the brand promise: banking that feels gentle and physical, not cold and digital.

## 7. Do's and Don'ts

### Do
- Use `#17b6c9` Richart teal as the single dominant brand color for CTAs, links, and accents
- Make primary buttons full pills (100px radius) -- the rounded geometry is the brand
- Use the 4px-wide teal accent bar before section titles -- it's the signature section flag
- Use `Noto Sans TC` at weights 400/500/700 with generous line-height (1.5+) for Traditional-Chinese copy
- Keep the canvas bright (`#fdfdfd`) and surfaces cool-gray (`#f3f5f6`) -- airy and optimistic
- Use neumorphic inset+outset soft shadows for cards -- tactile, pebble-like depth
- Use slate text (`#2a3342` headings, `#727d8c` body), never pure black
- Lead with friendly illustrations; keep copy concise and youth-facing

### Don't
- Don't introduce a competing brand color -- the teal owns the system; lime/cyan are pops only
- Don't use sharp 4px corners on buttons -- Richart is pill-shaped and soft
- Don't use cold black drop-shadows -- depth is warm-gray and neumorphic
- Don't use heavy institutional navy or marble-bank aesthetics -- this is a youth app
- Don't crowd the layout -- whitespace and illustration breathing room are essential
- Don't set Traditional-Chinese body at tight line-height -- CJK density needs 1.5+
- Don't use pure `#000000` for text -- always the slate scale
- Don't make the tone formal or stiff -- the voice is warm, encouraging, peer-to-peer

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, stacked cards, bottom-sheet menus, reduced hero size |
| Tablet | 768-1024px | 2-column grids, moderate padding |
| Desktop | 1024-1280px | Full text+illustration alternating layout |
| Large | >1280px | Centered content with generous side margins |

### Touch Targets
- Pill buttons are large and finger-friendly (16px vertical padding, 240px wide for XL)
- Nav collapses to hamburger; menus open as 24px-rounded bottom sheets
- Mobile-first: Richart is fundamentally an app brand, so the mobile surface is primary

### Collapsing Strategy
- Hero: 60px headline → ~34-40px on mobile, illustration stacks above copy
- Text+illustration alternating rows → single stacked column on mobile
- Feature card grids: 3-col → 2-col → 1-col
- Section spacing: 64px → ~40px on mobile
- Bottom sheets (24px top radius) replace dropdowns on mobile

### Image Behavior
- Illustrations scale fluidly and remain the anchor of each section
- Neumorphic card shadows persist at all sizes
- Hero cyan gradient simplifies on small screens

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / brand: Richart Teal (`#17b6c9`)
- CTA Hover: Teal Hover (`#15a6b7`)
- Background: Canvas White (`#fdfdfd`)
- Surface: Cool Gray (`#f3f5f6`)
- Heading text: Slate (`#2a3342`)
- Body text: Gray-slate (`#727d8c`)
- Label text: Dark slate (`#364053`)
- Border: Hairline (`#dce0e5`)
- Accent pop: Cyan (`#2be0ec`), Lime (`#dafa5f`)
- Error: Coral (`#e75365`)

### Example Component Prompts
- "Create a hero on `#fdfdfd` background. Headline 48px Noto Sans TC weight 700, color `#2a3342`. Subtitle 18px weight 400, line-height 1.67, `#727d8c`. Primary pill CTA: `#17b6c9` background, `#fdfdfd` text, 100px radius, 20px weight 500, 16px vertical padding. Large friendly illustration to the right."
- "Design a feature card: `#fdfdfd` background, 16px radius, neumorphic shadow `0px 10px 44px rgba(102,102,102,0.12), inset -3px -3px 10px rgba(84,92,101,0.16), inset -5px -3px 12px rgba(193,203,221,0.16)`. Title 24px Noto Sans TC weight 500 `#2a3342`, body 16px weight 400 `#727d8c` line-height 1.5."
- "Build a section title: a 4px × 24px `#17b6c9` vertical bar, then title text 18px Noto Sans TC weight 500 `#2a3342`, 8px gap."
- "Create a secondary button: transparent background, `#17b6c9` text, 2px solid `#17b6c9` border, 100px pill radius. Hover fills `#17b6c9`, text becomes `#fdfdfd`."
- "Design a navigation header: `#fdfdfd` bar, 'Richart' wordmark left, links 14px Noto Sans TC weight 500 `#364053` hover `#17b6c9`, teal pill CTA right-aligned."

### Iteration Guide
1. Teal `#17b6c9` is the single brand color -- resist adding competing hues
2. Buttons are always full pills (100px) -- never sharp corners
3. Use the 4px teal accent bar to flag section titles
4. `Noto Sans TC` weights 400/500/700, line-height 1.5+ for CJK breathing room
5. Slate text scale (`#2a3342` / `#364053` / `#727d8c`), never black
6. Neumorphic soft shadows for cards; warm-gray, never black
7. Keep it airy -- whitespace and illustration are core
8. Lime (`#dafa5f`) and cyan (`#2be0ec`) are pops only, used sparingly

---

## 10. Voice & Tone

Richart's voice is warm, encouraging, and peer-to-peer -- a slightly-older friend who is good with money and genuinely wants you to save some. The tagline *"最能幫年輕人存到錢的銀行"* (the bank that best helps young people save) sets the register: it is about *you* (the young person) and a concrete, achievable benefit (saving money), not about the institution's prestige. Copy is concise, friendly, and action-oriented, written in casual Traditional Chinese that avoids the stiff formality of legacy Taiwanese banking. Where a traditional bank says "尊榮理財" (prestige wealth management), Richart says, in effect, "let's help you save".

| Context | Tone |
|---|---|
| Hero headlines | Warm, benefit-first, you-focused. Concrete promises, not prestige claims. |
| Feature copy | Concise, one idea per block, paired with an illustration that does half the explaining. |
| CTAs | Friendly imperatives -- "立即申辦" (apply now), "了解更多" (learn more). |
| Onboarding | Encouraging and reassuring, hand-holding without condescension. |
| Savings nudges | Gamified, positive reinforcement -- celebrates progress, never shames. |
| Legal / disclosure | Necessarily formal regulatory Chinese, visually de-emphasized in muted gray. |
| Errors | Plain, calm, solution-oriented -- never alarming. |

**Forbidden register.** Stiff institutional formality, prestige-banking vocabulary ("尊榮", "菁英"), fear-based or shaming money language, dense jargon. Richart never talks down to its young audience and never tries to sound like an old bank.

## 11. Brand Narrative

Richart is the digital-banking brand launched by **Taishin International Bank (台新銀行)**, one of Taiwan's major private commercial banks, as its dedicated answer to a generation of young Taiwanese who grew up on smartphones and apps rather than bank branches. Where the parent bank carries the full apparatus of traditional retail banking, Richart was conceived as a clean, mobile-first, deposit-and-save product with a deliberately youthful identity -- its own name, its own teal, its own illustrated world, distinct from the corporate Taishin chrome.

The strategic bet is explicit in the brand's own promise: be *"最能幫年輕人存到錢的銀行"* -- the bank that best helps young people save. That reframes the bank's relationship with its customer. Instead of selling prestige or loans, Richart sells a habit (saving) and a feeling (it's easy, it's friendly, you can do it). The teal, the pills, the illustrations, and the neumorphic softness all serve that reframe: this is finance that feels like a well-designed consumer app, because for a digitally-native young user, that is the only kind of finance that feels trustworthy.

What Richart refuses: the marble-lobby gravitas of legacy banking, the cold institutional navy palette, dense form-heavy interfaces, and any tone that makes a 24-year-old feel like they're being lectured. What it embraces: a single friendly brand color, rounded pill geometry, illustration-led storytelling, encouraging copy, and the visual language of a delightful mobile app.

## 12. Principles

1. **One color, total recognition.** The teal `#17b6c9` does almost all the brand work. A disciplined, near-monochrome accent strategy makes Richart instantly recognizable and prevents the visual noise that erodes trust in a money product.
2. **Soft over sharp.** Pills, 16px cards, neumorphic shadows. Every edge is rounded because rounded reads as approachable, and approachable is the entire premise.
3. **Illustration carries meaning.** Characterful graphics are not decoration; they are the primary explanatory device. Copy supports the picture, not the other way around.
4. **Save, don't sell.** The product's job is to build a saving habit. Design choices reinforce encouragement and progress, never pressure or prestige.
5. **App-first, web-second.** Richart is fundamentally a mobile app brand; the website inherits the app's softness, rounding, and bottom-sheet patterns rather than imposing a desktop-bank aesthetic.
6. **Warm neutrals, never black.** Slate text and warm-gray shadows keep even the functional layers gentle.
7. **Breathing room as trust.** Airy whitespace signals calm and confidence -- important reassurance for someone handing a bank their savings.

## 13. Personas

*Personas below are fictional archetypes informed by Richart's publicly stated target segment (young, digitally-native Taiwanese savers), not individual people.*

**陳怡君 (Chen Yi-Jun), 25, Taipei.** Just started her first full-time job. Has never set foot in a Taishin branch and never will -- she opened her Richart account entirely on her phone during a lunch break. She uses the auto-save feature to skim a little off every paycheck and feels a small hit of satisfaction every time the app celebrates her progress. She picked Richart over the bank her parents use because "it actually feels like it was made for people my age."

**林承恩 (Lin Cheng-En), 22, Taichung.** University senior with a part-time income. Money is tight, so a savings product that shames him or buries him in jargon would lose him instantly. Richart's encouraging, gamified nudges keep him saving NT$500 a week without it feeling like a chore. He'd churn the moment the tone turned preachy.

**黃詩涵 (Huang Shih-Han), 29, Kaohsiung.** Freelance designer with irregular income. She values that the interface is clean and the illustrations are charming -- as a designer she notices, and the polish signals competence. She keeps an emergency fund in Richart specifically because the smooth, app-like experience makes checking her balance feel calm rather than stressful.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no savings goal yet)** | Friendly illustration + one encouraging line in `#2a3342` 18px Noto Sans TC. One teal pill CTA: "建立目標" (set a goal). Inviting, never an error. |
| **Loading** | Soft skeleton blocks in `#f3f5f6` at final dimensions, gentle shimmer. Calm, never jarring. |
| **Error (form validation)** | Field-level. `#e75365` coral border + helper text below, plain calm language describing how to fix it. |
| **Error (network)** | Quiet inline banner, muted gray, with a single retry pill. Never alarming red full-screen. |
| **Success (goal reached / saved)** | Celebratory -- teal accents, positive illustration, encouraging copy. Gamified reward for the saving habit. |
| **Disabled** | `#727d8c` fill, `rgba(253,253,253,0.5)` text, 38px radius -- faded but still clearly a button. |
| **Active / selected** | `#17b6c9` fill or `#15a6b7` for pressed; teal accent bar or underline marks the active item. |

## 15. Motion & Easing

**Durations** (extracted from live CSS):

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 150ms | Quick hovers, small state flips |
| `motion-standard` | 300ms | Buttons, links, card hovers, most transitions |
| `motion-slow` | 500ms | Background/color fills, larger reveals |

**Easings** (extracted from live CSS):

| Token | Curve | Use |
|---|---|---|
| `ease-out` | `ease-out` | The default everywhere -- arriving softly |
| `ease-emphatic` | `cubic-bezier(0.77, 0.2, 0.05, 1)` | Expressive reveals, sheet transitions |
| `ease-glide` | `cubic-bezier(0, 1, 0.5, 1)` | Smooth decelerating slides |

**Signature motions.**
1. **Button fill.** Primary buttons transition `background 0.5s` from `#17b6c9` to `#15a6b7` on hover -- a slow, smooth color fill that feels gentle rather than snappy.
2. **Secondary fill.** Outline buttons fill from transparent to teal over 0.5s, text flipping to white -- a satisfying, watery wash.
3. **Soft arrivals.** `transition: all 0.3s ease-out` is the page-wide default; elements settle in softly, matching the rounded, calm aesthetic.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, transitions collapse to instant; the product stays fully usable with no loss of function.

## 16. Do's and Don'ts

### Do
- Anchor everything on Richart teal `#17b6c9`; keep the color budget tight
- Use full pill buttons and 16px+ card rounding -- softness is the brand
- Reach for neumorphic warm-gray shadows for tactile depth
- Write warm, encouraging, you-focused Traditional-Chinese copy
- Lead with friendly illustrations and keep the layout airy
- Use the 4px teal accent bar as the section-title signature
- Celebrate saving progress; gamify positively

### Don't
- Don't add a second strong brand color or use cold institutional navy
- Don't use sharp corners, black shadows, or dense form-heavy layouts
- Don't write stiff, prestige-banking, or shaming money copy
- Don't crowd the page -- whitespace is part of the trust signal
- Don't use pure black text -- always the slate scale
- Don't tighten CJK line-height below ~1.5
- Don't make errors alarming -- keep them calm and solution-first

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Token-level claims (§1–9) extracted via live CSS on 2026-06-08:
- richart.tw served HTML + /TSDIB_RichartWeb/static/revamp/css/v3/index.css and
  headerfooter.css (www.richart.tw returns 403 FORBIDDEN to automation).
- Brand teal #17b6c9 (.btn-primary fill), hover #15a6b7, soft #64cedb confirmed
  verbatim in .btn-primary / .btn-secondary / .btn-primary-xl rules.
- font-family 'Noto Sans TC' (55 occurrences) primary, 'Montserrat' Latin display.
- 100px pill radius on buttons; 16px/24px card rounding; neumorphic box-shadow stacks
  (0px 10px 44px rgba(102,102,102,0.12) + inset highlights) measured verbatim.
- Title accent bar: .title .line { width:4px; height:24px; background-color:#17B6C9 }.
- Tagline "最能幫年輕人存到錢的銀行" from the live <title> tag.

Brand narrative (§11): Richart is the digital-banking brand of Taishin International
Bank (台新銀行), Taiwan. Youth-targeted, save-focused positioning is taken directly
from the brand's own stated promise in the page title and homepage marketing.

Personas (§13) are fictional archetypes informed by Richart's publicly stated target
segment (young, digitally-native Taiwanese savers). Names are illustrative.

Interpretive claims (neumorphic-as-tactile-trust, one-color discipline, save-don't-sell)
are editorial readings connecting the live design tokens to the brand's stated mission.
-->
