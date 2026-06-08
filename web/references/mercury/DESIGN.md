---
id: mercury
name: Mercury
country: US
category: fintech
homepage: "https://mercury.com"
primary_color: "#5266eb"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=mercury.com&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#5266eb"
    primary-hover: "#4354c8"
    primary-active: "#3442a6"
    periwinkle: "#9cb4e8"
    mist: "#cdddff"
    canvas: "#171721"
    canvas-elevated: "#1e1e2a"
    canvas-light: "#fbfcfd"
    surface: "#ededf3"
    surface-secondary: "#f4f5f9"
    surface-hover: "#dddde5"
    ink-subdued: "#c3c3cc"
    ink-disabled: "#70707d"
    on-primary: "#ffffff"
    error: "#d03275"
    hairline: "#272735"
  typography:
    family: { sans: "Arcadia", mono: "Arcadia Mono" }
    display-hero: { size: 65, weight: 360, lineHeight: 1.05, tracking: 0.42, use: "Marketing hero, Arcadia Display" }
    display-lg:   { size: 48, weight: 360, lineHeight: 1.10, tracking: 0.42, use: "Section openers" }
    heading-lg:   { size: 28, weight: 480, lineHeight: 1.25, use: "Feature titles, modal headers" }
    heading:      { size: 22, weight: 480, lineHeight: 1.30, use: "Card headings, sub-sections" }
    subtitle:     { size: 18, weight: 420, lineHeight: 1.40, use: "List headers, nav titles" }
    body-lg:      { size: 17, weight: 400, lineHeight: 1.625, use: "Lead paragraphs" }
    body:         { size: 15, weight: 400, lineHeight: 1.625, use: "Standard reading text" }
    body-sm:      { size: 13, weight: 400, lineHeight: 1.50, use: "Secondary info, dense tables" }
    caption:      { size: 12, weight: 420, lineHeight: 1.40, use: "Metadata, timestamps, labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 18, xl: 24, xxl: 28, section: 48 }
  rounded: { sm: 4, md: 4, lg: 12, full: 9999 }
  shadow:
    card: "0px 1px 2px rgba(23,23,33,0.06)"
    elevated: "0px 8px 32px rgba(0,0,0,0.4)"
    dialog: "0px 16px 48px rgba(23,23,33,0.24)"
  components:
    button-primary: { type: button, bg: "#5266eb", fg: "#ffffff", radius: 4, padding: "10px 18px", font: "15px/480", use: "Single primary action Open Account" }
    button-secondary: { type: button, bg: "#ededf3", fg: "#1e1e2a", radius: 4, padding: "10px 18px", font: "15px/480", use: "Secondary action" }
    button-ghost: { type: button, bg: "transparent", fg: "#5266eb", radius: 4, padding: "10px 14px", font: "15px/420", use: "Inline low-emphasis Learn more" }
    email-pill: { type: button, bg: "#5266eb", fg: "#ffffff", radius: 9999, padding: "0 20px", font: "15px/480", use: "Signature hero email-capture pill" }
    input: { type: input, bg: "#fbfcfd", fg: "#1e1e2a", radius: 4, padding: "10px 12px", font: "15px/400", use: "Standard dashboard field" }
    badge-neutral: { type: badge, bg: "#f4f5f9", fg: "#70707d", radius: 4, padding: "2px 8px", font: "12px/480", use: "Category/status metadata" }
    badge-accent: { type: badge, fg: "#5266eb", radius: 4, padding: "2px 8px", font: "12px/480", use: "Highlighted status New/Active" }
    card: { type: card, bg: "#ffffff", radius: 12, padding: "24px", use: "Dashboard panels, balance cards" }
    tab: { type: tab, bg: "transparent", fg: "#70707d", active: "2px bottom border #5266eb", font: "15px/480", use: "Dashboard section switching" }
    toast: { type: toast, bg: "#1e1e2a", fg: "#ededf3", radius: 12, padding: "12px 16px", use: "Transient confirmation" }
    dialog: { type: dialog, bg: "#ffffff", radius: 12, padding: "28px", use: "Confirmation/form modal" }
    toggle: { type: toggle, bg: "#5266eb", radius: 9999, use: "Boolean settings, on=indigo off=#c3c3cc" }
  components_harvested: true
---

# Design System Inspiration of Mercury

## 1. Visual Theme & Atmosphere

Mercury is banking built for startups, and its interface carries the quiet confidence of software made by people who care about craft. The brand refuses the two dominant fintech clichés at once: it is neither the cold institutional navy of legacy banks nor the candy-bright gradients of consumer neobanks. Instead, Mercury occupies a refined, almost cinematic middle ground — deep indigo-black canvases (`#171721`), soft off-white ink (`#ededf3`) that reads as luminous rather than glaring, and a single disciplined indigo (`#5266eb`) reserved for the one action that matters on each screen.

The atmosphere is editorial and spacious. Marketing surfaces lean into dark, near-black backgrounds washed with subtle periwinkle-to-mist gradients (`#9cb4e8` → `#cdddff`), giving product mockups a sense of depth and lift without ever shouting. The product dashboard itself inverts to a clean light surface (`#fbfcfd` / `#ededf3`) where money, balances, and tables live in calm, high-legibility neutrals. This light/dark duality — dramatic marketing canvas, serene product canvas — is the core tension Mercury orchestrates.

The proprietary **Arcadia** and **Arcadia Display** typefaces are the brand's signature. Arcadia is a contemporary grotesque with a custom 480 weight — calibrated to feel authoritative without heaviness, sitting deliberately between regular (400) and medium (500). Display sizes carry a positive 0.42px letter-spacing that makes large headlines feel composed and intentional. The overall effect is one of restraint and taste: Mercury looks like a product that respects your intelligence.

**Key Characteristics:**
- Indigo `#5266eb` as the sole primary action color — one filled CTA per section, never decorative
- Proprietary Arcadia / Arcadia Display type with a custom 480 weight (between 400 and 500)
- Dark editorial marketing canvas (`#171721`) inverting to a light product canvas (`#fbfcfd`)
- Soft off-white ink (`#ededf3`) instead of pure white — reduces eye strain on dark surfaces
- Tight 4px base radius (the workhorse), with 12px and 40px as secondary radii
- Refined periwinkle→mist gradient washes (`#9cb4e8` → `#cdddff`) behind product imagery
- Generous 1.625 body line-height and deliberate letter-spacing on display type

## 2. Color Palette & Roles

### Primary
- **Indigo** (`#5266eb`): Primary brand and action color. CTA fills ("Open Account"), links, active states, focus rings. One filled CTA per band — never used decoratively.
- **Indigo Hover** (`#4354c8`): Hover state for primary fills.
- **Indigo Active** (`#3442a6`): Pressed/active state for primary fills.
- **Periwinkle** (`#9cb4e8`): Accent — gradient washes, product-mockup highlights, illustrative tints. Kept off buttons.
- **Mist** (`#cdddff`): Lightest accent — gradient terminus, soft surface tints behind imagery.

### Surface
- **Canvas** (`#171721`): Indigo-black. Default dark marketing canvas — hero sections, footers, immersive bands.
- **Canvas Elevated** (`#1e1e2a`): Raised dark surface — cards and panels floating on the dark canvas.
- **Canvas Light** (`#fbfcfd`): Near-white product canvas — the dashboard background.
- **Surface Default** (`#ededf3`): Primary light surface — card fills on light, panel backgrounds.
- **Surface Secondary** (`#f4f5f9`): Secondary light fill — table zebra rows, nested panels.
- **Surface Hover** (`#dddde5`): Hover fill for light interactive rows and list items.

### Text (Ink)
- **Ink Default** (`#ededf3`): Soft off-white. Primary text on dark canvases. Deliberately not pure white.
- **Ink Emphasized** (`#1e1e2a`): Near-black. Primary heading/text on light product surfaces.
- **Ink Subdued** (`#c3c3cc`): Secondary/caption text, metadata, muted labels.
- **Ink Disabled** (`#70707d`): Disabled labels, placeholder text.
- **On Primary** (`#ffffff`): Pure white — text/icon on top of indigo fills only.

### Semantic
- **Error** (`#d03275`): Magenta-rose. Error states, destructive confirmation, negative validation. Mercury uses a rose rather than a fire-red — softer, more on-brand.
- **Success** (`#3442a6` family / contextual green in product): Positive financial indicators in the dashboard render in calm tones; success is communicated through state and copy more than saturated green.

### Borders
- **Hairline** (`#272735`): Dark-canvas dividers and 1px borders on `#171721`.
- **Hairline Subdued** (`#c3c3cc`): Light-surface dividers, table rules, input borders on light.

### Neutral Notes
Mercury's neutral ramp is intentionally narrow and slightly cool. The dark end clusters around `#171721` / `#1e1e2a` / `#272735`; the mid greys are `#70707d` / `#c3c3cc`; the light end is `#dddde5` / `#ededf3` / `#f4f5f9` / `#fbfcfd`. There is no warm grey in the system — everything carries a faint blue undertone consistent with the indigo brand.

## 3. Typography Rules

### Font Family
- **Primary**: `"Arcadia", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif`
- **Display**: `"Arcadia Display", "Arcadia", -apple-system, BlinkMacSystemFont, sans-serif`
- **Monospace (figures/code)**: `"Arcadia Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`

Arcadia is a proprietary commission. When unavailable, a clean neo-grotesque fallback (Helvetica Neue / system sans) preserves the geometry and neutrality.

### Weights
Arcadia ships in a tight custom set: **360, 400, 420, 480**. The hero of the system is **480** — a custom weight between regular (400) and medium (500), authoritative without feeling heavy. 360 is reserved for large display text where lightness reads as elegant; 400 is body; 420 is subtle emphasis; 480 is headings and labels.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Arcadia Display | 65px | 360 | 1.05 | +0.42px | Marketing hero headlines |
| Display Large | Arcadia Display | 48px | 360 | 1.1 | +0.42px | Section openers |
| Display Medium | Arcadia Display | 36px | 400 | 1.15 | +0.2px | Band titles |
| Heading Large | Arcadia | 28px | 480 | 1.25 | normal | Feature titles, modal headers |
| Heading | Arcadia | 22px | 480 | 1.3 | normal | Card headings, sub-sections |
| Subtitle | Arcadia | 18px | 420 | 1.4 | normal | List headers, nav titles |
| Body Large | Arcadia | 17px | 400 | 1.625 | normal | Lead paragraphs, descriptions |
| Body | Arcadia | 15px | 400 | 1.625 | normal | Standard reading text |
| Body Small | Arcadia | 13px | 400 | 1.5 | normal | Secondary info, dense tables |
| Caption | Arcadia | 12px | 420 | 1.4 | normal | Metadata, timestamps, labels |
| Numeric / Figures | Arcadia Mono | contextual | 400 | tight | normal | Balances, amounts — tabular figures |

### Principles
- **480 is the brand voice.** The custom 480 weight carries headings and key labels. It is the single most identifying typographic choice — neither thin nor bold, just quietly confident.
- **Display gets letter-spacing.** Large Arcadia Display headlines use +0.42px tracking; body text uses none. The wider the type, the more deliberate the spacing.
- **Generous line-height.** Body runs at 1.625 — unusually airy — because long-form marketing copy on dark surfaces needs breathing room to stay legible.
- **Off-white, not white.** Text on dark canvases is `#ededf3`, never `#ffffff`, to soften contrast and reduce strain.
- **Tabular figures for money.** Financial amounts in the dashboard use monospaced/tabular Arcadia figures so columns align.

## 4. Component Stylings

### Buttons

Mercury's button system is disciplined: typically one filled (primary) CTA per section, paired with ghost or secondary actions. Base radius is **4px** — tight and software-like, not pill-soft (the marketing email-capture pill is the exception at a larger radius).

**Primary (Fill)**
- Background: `#5266eb`
- Text: `#ffffff`
- Border: none
- Radius: 4px
- Padding: 10px 18px
- Font: 15px / 480 / Arcadia
- Height: ~40px
- Hover: `#4354c8`
- Active: `#3442a6`
- Disabled: `#70707d` bg, `#c3c3cc` text
- Use: The single primary action — "Open Account", "Apply now"

**Secondary (Subtle)**
- Background: `#ededf3` (light) / `#1e1e2a` (dark)
- Text: `#1e1e2a` (light) / `#ededf3` (dark)
- Border: none
- Radius: 4px
- Padding: 10px 18px
- Font: 15px / 480 / Arcadia
- Hover: `#dddde5` (light) / `#272735` (dark)
- Use: Secondary action beside the primary CTA

**Ghost / Tertiary**
- Background: transparent
- Text: `#5266eb` (light) / `#ededf3` (dark)
- Border: none
- Radius: 4px
- Padding: 10px 14px
- Font: 15px / 420 / Arcadia
- Hover: faint `rgba(82,102,235,0.08)` wash
- Use: Inline / low-emphasis actions, "Learn more"

**Outline**
- Background: transparent
- Text: `#ededf3` (on dark) / `#1e1e2a` (on light)
- Border: 1px solid `#272735` (dark) / `#c3c3cc` (light)
- Radius: 4px
- Padding: 10px 18px
- Font: 15px / 480 / Arcadia
- Use: Secondary CTA on hero bands where a fill would over-compete

**Email-Capture Pill (Marketing)**
- Background: `#5266eb`
- Text: `#ffffff`
- Border: none
- Radius: 40px (pill)
- Padding: 0 20px, ~32px tall
- Font: 15px / 480 / Arcadia
- Use: The signature hero email-capture / "Open Account" pill — the one place the large 40px radius appears

### Inputs

**Text Field (Light / Product)**
- Background: `#fbfcfd`
- Text: `#1e1e2a`
- Border: 1px solid `#c3c3cc`
- Radius: 4px
- Padding: 10px 12px
- Font: 15px / 400 / Arcadia
- Placeholder: `#70707d`
- Focus: 1px border `#5266eb` + 2px `rgba(82,102,235,0.2)` ring
- Use: Standard dashboard form field

**Text Field (Dark / Marketing)**
- Background: `#1e1e2a`
- Text: `#ededf3`
- Border: 1px solid `#272735`
- Radius: 4px
- Padding: 10px 12px
- Font: 15px / 400 / Arcadia
- Placeholder: `#70707d`
- Focus: border `#5266eb`
- Use: Forms on dark canvas

**Error State**
- Border: 1px solid `#d03275`
- Help text: `#d03275`, 12px / 420
- Use: Inline validation failure

### Cards

**Product Card (Light)**
- Background: `#ffffff` / `#ededf3`
- Border: 1px solid `#c3c3cc` (hairline subdued) or none
- Radius: 12px
- Padding: 24px
- Shadow: `0px 1px 2px rgba(23,23,33,0.06)`
- Use: Dashboard panels, account/balance cards

**Elevated Card (Dark)**
- Background: `#1e1e2a`
- Border: 1px solid `#272735`
- Radius: 12px
- Padding: 24px
- Shadow: `0px 8px 32px rgba(0,0,0,0.4)`
- Use: Floating panels and product mockups on the dark marketing canvas

**Compact List Row**
- Background: transparent
- Border-bottom: 1px solid `#c3c3cc` (light) / `#272735` (dark)
- Radius: 0
- Padding: 12px 16px
- Hover: `#dddde5` (light) / `#272735` (dark)
- Use: Transaction rows, account lists

### Badges

**Neutral**
- Background: `#f4f5f9` (light) / `#272735` (dark)
- Text: `#70707d` (light) / `#c3c3cc` (dark)
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 480 / Arcadia
- Use: Category/status metadata

**Accent**
- Background: `rgba(82,102,235,0.12)`
- Text: `#5266eb`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 480 / Arcadia
- Use: Highlighted status ("New", "Active")

**Error**
- Background: `rgba(208,50,117,0.12)`
- Text: `#d03275`
- Radius: 4px
- Padding: 2px 8px
- Font: 12px / 480 / Arcadia
- Use: Negative / blocking status ("Failed", "Declined")

### Tabs

**Underline Tabs**
- Background: transparent
- Text (inactive): `#70707d`
- Text (active): `#1e1e2a` (light) / `#ededf3` (dark)
- Active indicator: 2px bottom border `#5266eb`
- Font: 15px / 480 / Arcadia
- Use: Dashboard section switching

### Navigation

**Top Nav (Marketing, Dark)**
- Background: `#171721` (transparent → solid on scroll)
- Link text: `#ededf3`, 15px / 420
- Link hover: `#ffffff`
- CTA: indigo pill `#5266eb`
- Use: Inverted marketing navigation

### Toasts

**Default**
- Background: `#1e1e2a`
- Text: `#ededf3`
- Border: 1px solid `#272735`
- Radius: 12px
- Padding: 12px 16px
- Shadow: `0px 8px 24px rgba(0,0,0,0.3)`
- Font: 14px / 400 / Arcadia
- Use: Transient confirmation

### Dialogs

**Centered Modal**
- Background: `#ffffff` (light) / `#1e1e2a` (dark)
- Text: `#1e1e2a` / `#ededf3`
- Border: none
- Radius: 12px
- Padding: 28px
- Shadow: `0px 16px 48px rgba(23,23,33,0.24)`
- Scrim: `rgba(23,23,33,0.6)`
- Use: Confirmation and form modals

### Toggles

**Default**
- Track: `#5266eb` (on) / `#c3c3cc` (off, light) · `#272735` (off, dark)
- Thumb: `#ffffff` 18px circle, `0px 1px 2px rgba(0,0,0,0.2)`
- Radius: 9999px
- Use: Boolean settings


**Tier 1 sources:** https://mercury.com (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px
- Marketing bands use generous vertical rhythm — 96px+ between sections
- Product/dashboard uses tighter 16-24px panel gaps

### Grid & Container
- Marketing max-width: ~1200px centered
- 12-column grid under the hood; content typically spans 8-10 columns centered
- Generous side gutters on wide screens reinforce the editorial feel
- Dashboard uses a left sidebar + fluid content region

### Whitespace Philosophy
- **Editorial spaciousness.** Marketing surfaces are deliberately airy — large headlines, single CTAs, lots of negative space around product imagery.
- **One idea per band.** Each marketing section makes one point with one visual and at most one filled CTA.
- **Dense where it counts.** The dashboard packs financial data efficiently; spaciousness is a marketing posture, density is a product necessity.

### Border Radius Scale
- Tight (4px): The workhorse — buttons, inputs, badges, most surfaces
- Comfortable (12px): Cards, modals, toasts
- Pill (40px): Email-capture / hero CTA pill, the deliberate exception
- Circle (9999px): Toggles, avatars

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page background, inline elements, list rows |
| Subtle (1) | `0px 1px 2px rgba(23,23,33,0.06)` | Light product cards, slight lift |
| Standard (2) | `0px 4px 16px rgba(23,23,33,0.10)` | Dropdowns, popovers on light |
| Elevated (3) | `0px 8px 32px rgba(0,0,0,0.4)` | Dark-canvas floating product mockups |
| Modal (4) | `0px 16px 48px rgba(23,23,33,0.24)` | Dialogs, modals |

**Shadow Philosophy:** On light product surfaces, Mercury keeps shadows whisper-soft and cool-tinted (indigo-black `rgba(23,23,33,...)` rather than pure black). On the dark marketing canvas, depth is dramatic — large, diffuse `rgba(0,0,0,0.4)` shadows make product cards appear to float, reinforcing the cinematic feel. Depth is theatrical in marketing, restrained in product.

### Gradient & Light
- Periwinkle→mist gradient washes (`#9cb4e8` → `#cdddff`) sit behind hero product imagery as soft radial or linear glows.
- Subtle vignetting on the dark canvas focuses attention toward centered content.
- Glass/blur is used sparingly on sticky nav over imagery.

## 7. Do's and Don'ts

### Do
- Use indigo `#5266eb` for the single primary action per section — links, focus rings, the one CTA
- Use the custom 480 weight for headings and key labels
- Use `#ededf3` (off-white), never pure white, for text on dark canvases
- Keep base radius at 4px for buttons, inputs, and badges
- Reserve the 40px pill radius for the hero email-capture / "Open Account" CTA
- Apply +0.42px letter-spacing on large Arcadia Display headlines
- Use cool, indigo-tinted shadows (`rgba(23,23,33,...)`) on light surfaces
- Let marketing breathe — one idea, one visual, one CTA per band

### Don't
- Don't put accent periwinkle/mist on buttons — they belong in gradient washes and imagery only
- Don't use more than one filled CTA per section
- Don't use pure white text on dark canvases — use `#ededf3`
- Don't use warm greys — every neutral carries a faint blue undertone
- Don't over-round — 4px is the brand's tight, software-like default
- Don't use a saturated fire-red for errors — Mercury's error is rose `#d03275`
- Don't crowd marketing surfaces — density is for the dashboard, not the homepage

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked bands, hamburger nav, full-width CTAs |
| Tablet | 640-1024px | 2-column product grids, condensed sidebar |
| Desktop | 1024-1280px | Full marketing grid, persistent dashboard sidebar |
| Wide | >1280px | Centered ~1200px container, generous gutters |

### Touch Targets
- Buttons: ~40px tall minimum; pill CTA ~32-44px
- List/transaction rows: ≥44px
- Dashboard controls: comfortable 40px tap zones

### Collapsing Strategy
- Dashboard sidebar collapses to an icon rail, then to a drawer on mobile
- Multi-column marketing bands stack to single column
- Hero headlines scale down (65px → ~36px) while preserving Display weight and tracking
- Tables become horizontally scrollable or reflow to stacked rows on mobile

### Image Behavior
- Product mockups maintain aspect ratio inside gradient-washed frames
- Hero imagery scales fluidly; gradient glows resize with the viewport
- Icons render at consistent 20-24px within their contexts

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Indigo (`#5266eb`)
- CTA Hover: (`#4354c8`)
- CTA Active: (`#3442a6`)
- Dark canvas: (`#171721`)
- Dark elevated: (`#1e1e2a`)
- Light canvas: (`#fbfcfd`)
- Light surface: (`#ededf3`)
- Text on dark: (`#ededf3`)
- Text on light: (`#1e1e2a`)
- Subdued text: (`#c3c3cc`)
- Disabled/placeholder: (`#70707d`)
- Hairline (dark): (`#272735`)
- Hairline (light): (`#c3c3cc`)
- Accent wash: (`#9cb4e8` → `#cdddff`)
- Error: (`#d03275`)

### Example Component Prompts
- "Create a hero CTA pill: indigo `#5266eb` bg, white text, 15px weight 480 Arcadia, 40px radius, ~32px tall, 0 20px padding. Hover `#4354c8`. One per section."
- "Build a dark hero band: `#171721` bg, off-white `#ededf3` headline in Arcadia Display 65px weight 360 with +0.42px letter-spacing, body 17px weight 400 `#c3c3cc` at 1.625 line-height, single indigo pill CTA, soft `#9cb4e8`→`#cdddff` gradient glow behind a floating product card."
- "Design a dashboard balance card: white bg, 12px radius, 24px padding, 1px `#c3c3cc` border, shadow `0px 1px 2px rgba(23,23,33,0.06)`. Label 12px weight 480 `#70707d`. Amount in tabular Arcadia figures, 28px weight 480 `#1e1e2a`."
- "Create a text input: `#fbfcfd` bg, 1px `#c3c3cc` border, 4px radius, 10px 12px padding, 15px Arcadia. Focus: `#5266eb` border + 2px `rgba(82,102,235,0.2)` ring. Error: `#d03275` border."
- "Design a transaction row: transparent bg, 1px bottom border `#c3c3cc`, 12px 16px padding, ≥44px tall. Merchant name 15px weight 480 `#1e1e2a`, category 13px `#70707d`, amount right-aligned in tabular Arcadia figures."

### Iteration Guide
1. Default to the dark editorial canvas (`#171721`) for marketing, light (`#fbfcfd`) for product.
2. Indigo `#5266eb` is the only action color — one filled CTA per section.
3. Headings and key labels use Arcadia 480; large display uses 360 with +0.42px tracking.
4. Text on dark is `#ededf3`, never pure white; body line-height 1.625.
5. Base radius 4px everywhere; 12px for cards; 40px only for the hero pill.
6. Errors are rose `#d03275`, not fire-red. Neutrals are cool, never warm.
7. Marketing breathes (96px band rhythm); dashboard is dense (16-24px gaps).

## 10. Voice & Tone

Mercury writes like a sharp, candid operator who has run a startup and respects that you have too. The voice is precise, dry, occasionally witty, never cute. No exclamation marks, no emoji on product surfaces, no startup-bro hype. Claims are concrete and specific. Sentences are short and confident. It assumes the reader is smart and busy.

| Context | Tone |
|---|---|
| CTAs | Direct imperative — "Open Account", "Apply now", "Get started" |
| Headlines | Declarative, confident, often a single bold claim ("Banking for startups") |
| Body copy | Specific and concrete — names features, numbers, outcomes; avoids fluff |
| Success | Calm and factual — "Transfer sent", "Account approved" |
| Errors | Blameless, specific, actionable — names what went wrong and the fix |
| Empty states | One line explaining the state plus one suggested action |
| Legal / compliance | Plain-English where possible; formal only where regulation requires |

**Forbidden moves.** No "Oops", no exclamation hype, no emoji in financial/product contexts, no vague "Something went wrong", no condescending hand-holding. Mercury never talks down to founders.

## 11. Brand Narrative

Mercury is banking built for startups, founded in 2017 by **Immad Akhund**, Max Tang, and Jason Zhang and launched publicly in 2019. The founding premise is a rejection: legacy business banking was built for an analog era — branch visits, faxed forms, opaque fees, interfaces that looked like they hadn't changed since the 1990s. Mercury's thesis is that the company building your bank account should have the same taste, speed, and respect for craft as the best software you use every day.

That thesis shows up in the design. Where incumbent business banks signal trust through heavy, conservative navy and dense legalese, Mercury signals trust through restraint and refinement — a single disciplined indigo, a proprietary typeface, generous whitespace, and cinematic dark canvases that make the product feel like a premium object. The indigo `#5266eb` is deliberately not the institutional navy of legacy banks nor the playful blue of consumer apps; it sits in a considered middle, modern and software-native.

Mercury grew into a full financial stack for startups — business checking and savings, treasury, corporate cards, bill pay, invoicing, and venture debt — serving tens of thousands of companies. The design's job across all of it is the same: make managing company money feel calm, fast, and well-made. The marketing surface is theatrical and editorial; the product surface is serene and dense. The brand lives in that contrast.

What Mercury refuses: the institutional coldness of legacy business banking, the gamified brightness of consumer fintech, and the jargon-heavy condescension that assumes founders need hand-holding. It occupies a narrow, confident lane — refined, intelligent, and built by people who clearly sweat the details.

## 12. Principles

1. **One action per surface.** Each marketing band and key product view has a single filled indigo CTA. Two primary actions means two surfaces. Secondary actions go ghost or outline.
2. **Indigo is action, never decoration.** `#5266eb` appears only where the user acts — CTAs, links, focus, active states. Decoration is handled by neutral surfaces and periwinkle/mist washes.
3. **Off-white over pure white.** Text on dark is `#ededf3`; this softness is a deliberate craft choice that signals care and reduces strain.
4. **Restraint is the brand.** A tight 4px radius, a narrow cool neutral ramp, a single accent hue, one typeface family. Every removed element makes the product feel more considered.
5. **Theatrical marketing, serene product.** Dramatic dark canvases and floating mockups sell; calm light dashboards serve. The two postures are intentional and never bleed into each other.
6. **Numbers are typography.** Balances and amounts use tabular Arcadia figures with the same care as headlines — columns align, figures never inherit casual body styling.
7. **Respect the founder.** Copy and UI assume an intelligent, busy operator. No hype, no condescension, no cute mascots — just speed and clarity.
8. **Whitespace is a premium signal.** On marketing surfaces, generous negative space communicates confidence and quality more than any ornament could.

## 13. Personas

*Personas below are fictional archetypes informed by Mercury's publicly described startup-customer segments, not individual people.*

**Priya, 31, San Francisco.** Founder and CEO of a seed-stage SaaS company, four employees. Switched from a legacy big-bank business account after one too many branch visits and a wire that took three days. Opens Mercury daily to check runway, approve a corporate-card charge, and pay a contractor. Expects the dashboard to load instantly and show burn at a glance. Has impeccable taste in software and notices when a product is well-made — Mercury's craft is part of why she trusts it with the company's money.

**Marcus, 38, Austin.** Operations lead at a 25-person hardware startup. Lives in bill pay, invoicing, and approvals. Needs multi-user roles, clear audit trails, and exportable transaction data for the accountant. Values that Mercury's interface is dense and efficient where it matters — he's moving real volume and doesn't want a toy. Reads everything; trusts specific, concrete copy over marketing adjectives.

**Dana, 27, Remote.** Solo technical founder, pre-revenue, raising a pre-seed. Opened Mercury because the application was fast and didn't require a branch visit. Uses the corporate card and savings; watches every dollar. Drawn to the brand's confident, no-nonsense voice — it makes her feel like a real company. Will evangelize Mercury to other founders precisely because it looks and feels like a product made by people like her.

## 14. States

| State | Treatment |
|---|---|
| **Empty (first use)** | One line of `#70707d` body text explaining why the view is empty, plus a single suggested action as a ghost or secondary button. No illustration clutter. |
| **Empty (filtered)** | One line of `#70707d` caption ("No transactions match these filters"). No button — the user adjusts filters. |
| **Loading (first paint)** | Skeleton blocks at `#f4f5f9` (light) / `#1e1e2a` (dark) matching final layout. Financial amounts render as `—` until resolved, never as skeleton bars. |
| **Loading (refresh)** | Subtle inline indigo spinner; content stays visible with previous values. No blocking overlay. |
| **Error (inline field)** | `#d03275` 1px border on the input, help text below in `#d03275` 12px weight 420. One actionable sentence. |
| **Error (toast)** | `#1e1e2a` bg, `#ededf3` text, 12px radius, one specific sentence, auto-dismiss. |
| **Error (blocking)** | Reserved for outage. Centered single line in emphasized ink, indigo retry button below. No illustration. |
| **Success (inline)** | Brief faint indigo wash behind the updated element, ~300ms fade. Calm, never celebratory confetti. |
| **Success (transfer sent)** | Confirmation panel/screen — checkmark, exact amount in tabular figures, recipient, timestamp, single primary action. Factual, not festive. |
| **Disabled** | Button bg `#70707d`, text `#c3c3cc`. Inputs keep their `#c3c3cc` border so geometry is stable if re-enabled. |
| **Focus** | 1px `#5266eb` border plus a 2px `rgba(82,102,235,0.2)` ring on all interactive elements. Always visible for accessibility. |
| **Hover (row)** | Light `#dddde5` / dark `#272735` fill on interactive rows and list items. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox changes |
| `motion-fast` | 150ms | Hover, focus rings, button press, small reveals |
| `motion-standard` | 240ms | Default — dropdowns, popovers, tab content, card expand |
| `motion-slow` | 360ms | Emphasized transitions — modals, success confirmations |
| `motion-page` | 320ms | Route/view transitions |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Things appearing — modals, sheets, toasts (soft, refined deceleration) |
| `ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Things leaving — dismissals |
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Two-way transitions — tabs, collapsibles |
| `ease-glide` | `cubic-bezier(0.22, 0.61, 0.36, 1)` | Marketing parallax and gradient-glow drifts |

**Signature motions.**

1. **Floating product mockups.** On scroll into a marketing band, product cards rise ~24px and fade in with `motion-slow / ease-enter`, their drop-shadow deepening to reinforce the cinematic float. The gradient glow behind them drifts slowly with `ease-glide`.
2. **Refined modal entrance.** Modals scale from 0.98 → 1.0 and fade in over `motion-standard / ease-enter`, with the scrim fading `rgba(23,23,33,0)` → `rgba(23,23,33,0.6)`. Exit is faster (`motion-fast / ease-exit`) — leaving feels lighter than arriving.
3. **Money updates.** When a balance changes, figures cross-update without flicker — the new tabular value settles in over `motion-fast`. Money never bounces or springs; it resolves calmly.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`, parallax and gradient drift are disabled, and slides become fades. The product stays fully usable.

<!--
OmD v0.1 Sources

Token grounding (verified 2026-06-06 via WebSearch + WebFetch):
- Primary indigo #5266eb, accents periwinkle #9cb4e8 / mist #cdddff,
  dark canvas #171721, off-white ink #ededf3, custom Arcadia 480 weight,
  1.625 body line-height, 4px base radius, 40px hero pill — sourced from
  shadcn.io/design/mercury (Mercury Design System token export) and
  corroborating brand summaries (brandfetch.com/mercury.com,
  blakecrosley.com/guides/design/mercury).
- Arcadia / Arcadia Display proprietary typeface family confirmed across
  multiple brand-design writeups of Mercury.

Brand narrative facts (founding 2017 by Immad Akhund et al., public launch
2019, startup-banking positioning) are widely documented public information.

Personas (§13) are fictional archetypes informed by Mercury's publicly
described startup-customer segments. Any resemblance to specific individuals
is unintended.

Interpretive claims (e.g., "indigo chosen as a considered middle between
institutional navy and consumer blue") are editorial readings of the design,
not documented Mercury statements. Some token values for components, motion,
and states are reasoned extrapolations consistent with the verified core
tokens where Mercury does not publish a formal public spec.
-->
