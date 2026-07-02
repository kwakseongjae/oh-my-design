---
id: moin
name: Moin
display_name_kr: 모인
country: KR
category: fintech
homepage: "https://www.themoin.com/ko"
primary_color: "#0082ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=themoin.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live currency-exchange 'Send money' CTA azure (#0082ff); a slightly deeper #007bff appears on the top-nav send button. Headings near-black navy (#1a1b22); body default #333333. Near shadowless — one soft card shadow rgba(0,0,0,0.05). 6px is the workhorse radius."
  colors:
    primary: "#0082ff"
    primary-alt: "#007bff"
    ink: "#1a1b22"
    body: "#333333"
    dark: "#242424"
    muted: "#6b6c74"
    muted-slate: "#818daa"
    grey: "#555555"
    faint: "#a9abb4"
    canvas: "#ffffff"
    surface: "#f7f7f8"
    surface-cool: "#f3f5f8"
    hairline: "#efefef"
    border: "#e0e0e0"
    border-cool: "#e9ecef"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Spoqa Han Sans", fallback: "Spoqa Han Sans JP" }
    display-hero: { size: 40, weight: 700, lineHeight: 1.2, use: "Hero H1 headline, Spoqa Han Sans Bold" }
    section-lg:   { size: 32, weight: 700, use: "Large section titles + currency amount value" }
    section:      { size: 24, weight: 700, use: "Feature section headings" }
    eyebrow:      { size: 16, weight: 700, use: "Blue accent eyebrow labels (Speed, Lower fees)" }
    body:         { size: 16, weight: 400, lineHeight: 1.5, use: "Standard body + UI text" }
    button:       { size: 16, weight: 700, use: "Primary / dark button label" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 48, section: 64 }
  rounded: { sm: 6, md: 8, lg: 16, xl: 20, full: 9999 }
  shadow:
    card: "rgba(0, 0, 0, 0.05) 0px 4px 15px 0px"
    elevated: "rgba(36, 36, 36, 0.3) 0px 10px 20px 0px"
  components:
    button-primary: { type: button, bg: "#0082ff", fg: "#ffffff", radius: "6px", height: "50px", padding: "8px 16px", border: "1px solid rgba(0,50,100,0.1)", font: "16px / 400 Spoqa Han Sans", use: "Currency-exchange 'Send money' CTA — the core product action" }
    button-nav: { type: button, bg: "#007bff", fg: "#ffffff", radius: "6px", height: "40px", padding: "8px 16px", border: "1px solid #007bff", font: "16px / 700 Spoqa Han Sans", use: "Top-nav 'Send money' button" }
    button-dark: { type: button, bg: "#333333", fg: "#ffffff", radius: "6px", height: "52px", padding: "14px 48px", font: "16px / 700 Spoqa Han Sans", use: "Secondary 'More reviews' action" }
    button-carousel: { type: button, bg: "#ffffff", fg: "#555555", border: "1px solid #e0e0e0", radius: "8px", height: "48px", use: "Review carousel prev / next arrow" }
    input-amount: { type: input, bg: "#ffffff", fg: "#242424", radius: "6px", font: "32px / 700 Spoqa Han Sans", states: "active value turns #0082ff", use: "Currency amount field on the exchange widget" }
    card-surface: { type: card, bg: "#f7f7f8", fg: "#1a1b22", radius: "16px", shadow: "rgba(0,0,0,0.05) 0px 4px 15px", use: "Tinted content / review card" }
    card-cool: { type: card, bg: "#f3f5f8", fg: "#1a1b22", border: "1px solid #efefef", radius: "16px", use: "Cool-tinted feature block" }
    eyebrow-label: { type: badge, fg: "#0082ff", font: "16px / 700 Spoqa Han Sans", use: "Blue accent eyebrow above feature headings (Speed, Easy to start, Lower fees)" }
  components_harvested: true
---

# Design System Inspiration of Moin

## 1. Visual Theme & Atmosphere

Moin (모인) is a Korean cross-border money-transfer fintech, and its site carries itself like a trustworthy utility rather than a flashy consumer app — clean, functional, and quietly confident. The canvas is pure white (`#ffffff`) broken up by soft near-white surfaces (`#f7f7f8` and the cooler `#f3f5f8`) that segment the page into calm, breathable bands. Text sits in a deep near-black navy (`#1a1b22`) for headings and a soft charcoal (`#333333`) for body copy — never a harsh pure black for the running text. The system's single signal color is a bright, optimistic azure (`#0082ff`), which the eye is trained to read as "the money moves here": it lights the currency-exchange CTA, the section eyebrow labels, and the active amount you type.

The typographic personality is unmistakably Korean-product: everything is set in **Spoqa Han Sans** (with `Spoqa Han Sans JP` as the CJK fallback), the open-source hangul workhorse, running Bold (weight 700) for hero and section headings and a comfortable weight 400 for body. The scale is deliberately compact and pragmatic — a 40px hero H1 (`#1a1b22`), 32px large section titles, 24px feature headings, and a 16px body — reflecting a product that has real numbers, fees, and exchange rates to show rather than oversized marketing poetry. The one place the type gets loud is the currency input: the amount you send renders at a big 32px / 700, and flips from a dark `#242424` to the brand azure `#0082ff` the moment it becomes the active value.

What distinguishes Moin from heavier fintech peers is its restraint with depth. The system is almost entirely flat: separation comes from tinted surfaces and thin `#efefef` hairlines rather than elevation, and the only recurring drop shadow is a single, very soft `rgba(0, 0, 0, 0.05) 0px 4px 15px` on cards. Geometry stays gentle and consistent — a **6px** corner radius is the workhorse across buttons and inputs (by far the most common radius on the page), with 8px on carousel controls and 16px on content cards. The result is a fast, mobile-native, engineered-feeling interface: a remittance tool that looks precise and safe with your money, not decorative.

**Key Characteristics:**
- Single azure signal color (`#0082ff`) reserved for the money action — CTA, eyebrows, active amount
- A slightly deeper blue (`#007bff`) on the top-nav send button — a second, near-identical blue
- Spoqa Han Sans throughout — Bold (700) for headings, 400 for body; open-source hangul-first
- Compact, pragmatic type scale: 40px hero, 32px / 24px sections, 16px body
- Near-black navy (`#1a1b22`) headings + charcoal (`#333333`) body instead of pure black
- Near-flat depth: one soft `rgba(0, 0, 0, 0.05)` card shadow; tint + `#efefef` hairlines do the separating
- 6px workhorse radius (buttons/inputs), 8px controls, 16px cards
- Cool neutral ladder (`#6b6c74` → `#818daa` → `#a9abb4`) for text hierarchy

## 2. Color Palette & Roles

### Primary
- **Moin Azure** (`#0082ff`): The primary brand and action color. Backs the currency-exchange "Send money" CTA, colors the eyebrow labels (Speed / Easy to start / Lower fees), and becomes the active amount value in the input. The system's single saturated hue.
- **Send Blue** (`#007bff`): A slightly deeper companion blue used on the top-navigation "Send money" button and its border — near-identical to the azure but rendered as a distinct token in the header chrome.

### Ink & Text
- **Ink Navy** (`#1a1b22`): Primary heading color for the hero H1 and feature section H2s — a very dark blue-black that reads as warm and trustworthy rather than stark.
- **Body Charcoal** (`#333333`): The document default text color and the fill of the dark "More reviews" button.
- **Dark** (`#242424`): The resting color of the large currency amount value before it becomes active.
- **Muted** (`#6b6c74`): Secondary text, supporting copy.
- **Muted Slate** (`#818daa`): A cool blue-grey for tertiary labels and metadata.
- **Grey** (`#555555`): Icon color for the review carousel prev/next arrows.
- **Faint** (`#a9abb4`): Lowest-emphasis text, placeholders, disabled labels.

### Surface & Neutral
- **Pure White** (`#ffffff`): Page background, card surfaces, text on azure/dark.
- **Surface** (`#f7f7f8`): Warm near-white tinted surface for content and review cards.
- **Surface Cool** (`#f3f5f8`): A cooler near-white for alternating feature blocks.
- **Hairline** (`#efefef`): The dominant border color — thin dividers and card outlines in the near-shadowless system.
- **Border** (`#e0e0e0`): Slightly stronger border for interactive controls (carousel arrows).
- **Border Cool** (`#e9ecef`): A cool-toned hairline used on cool surfaces.
- **On Primary** (`#ffffff`): Text/icon color on azure and dark fills.

## 3. Typography Rules

### Font Family
- **Sans**: `Spoqa Han Sans` — used for every text element: hero, headings, body, buttons, nav.
- **Fallback**: `Spoqa Han Sans JP`, then `Helvetica`, `Arial`, `sans-serif`.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Spoqa Han Sans | 40px (2.50rem) | 700 | ~1.2 | Hero H1, `#1a1b22` |
| Section Large | Spoqa Han Sans | 32px (2.00rem) | 700 | -- | "Why so many users choose MOIN" + currency amount value |
| Feature Heading | Spoqa Han Sans | 24px (1.50rem) | 700 | -- | "Fast, direct remittances you can trust", `#1a1b22` |
| Eyebrow | Spoqa Han Sans | 16px (1.00rem) | 700 | -- | Azure accent labels (Speed / Easy to start / Lower fees), `#0082ff` |
| Body | Spoqa Han Sans | 16px (1.00rem) | 400 | 1.5 | Standard reading and UI text, `#333333` |
| Button | Spoqa Han Sans | 16px (1.00rem) | 400-700 | -- | CTA labels (700 on dark/nav, 400 on exchange CTA) |

### Principles
- **One family, weight-driven hierarchy**: Spoqa Han Sans does every job; contrast comes from weight (700 vs 400) and size, not from swapping typefaces.
- **Compact, pragmatic scale**: the hero tops out at 40px, sections at 32/24px — restrained sizing for a product that shows real fees, rates, and numbers.
- **Bold headings, plain body**: 700 carries every headline; 400 carries every paragraph.
- **The number is the loudest element**: the currency amount runs at 32px / 700 and switches to azure `#0082ff` when active — the typographic climax of the exchange widget.

## 4. Component Stylings

### Buttons

**Exchange CTA (Primary)**
- Background: `#0082ff`
- Text: `#ffffff`
- Radius: 6px
- Padding: 8px 16px
- Height: 50px
- Border: 1px solid `rgba(0,50,100,0.1)`
- Font: 16px Spoqa Han Sans weight 400
- Use: The currency-exchange "Send money" CTA — the core product action

**Nav Send (Header)**
- Background: `#007bff`
- Text: `#ffffff`
- Radius: 6px
- Padding: 8px 16px
- Height: 40px
- Border: 1px solid `#007bff`
- Font: 16px Spoqa Han Sans weight 700
- Use: Top-navigation "Send money" button

**Dark Secondary**
- Background: `#333333`
- Text: `#ffffff`
- Radius: 6px
- Padding: 14px 48px
- Height: 52px
- Font: 16px Spoqa Han Sans weight 700
- Use: Lower-emphasis actions such as "More reviews"

**Carousel Control**
- Background: `#ffffff`
- Text: `#555555`
- Border: 1px solid `#e0e0e0`
- Radius: 8px
- Height: 48px
- Use: Review carousel previous / next arrows

### Inputs & Forms

**Currency Amount**
- Background: `#ffffff`
- Text: `#242424`
- Radius: 6px
- Font: 32px Spoqa Han Sans weight 700
- Active: value color shifts to `#0082ff`
- Use: The send/receive amount field on the exchange widget

### Cards & Containers

**Tinted Surface Card**
- Background: `#f7f7f8`
- Text: `#1a1b22`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.05) 0px 4px 15px 0px`
- Use: Content and review cards

**Cool Feature Block**
- Background: `#f3f5f8`
- Text: `#1a1b22`
- Border: 1px solid `#efefef`
- Radius: 16px
- Use: Cool-tinted feature section block

### Badges

**Azure Eyebrow**
- Text: `#0082ff`
- Font: 16px Spoqa Han Sans weight 700
- Use: Accent eyebrow label above feature headings ("Speed", "Easy to start", "Lower fees")

### Navigation
- Background: `#ffffff`
- Text: `#333333`
- Font: 16px Spoqa Han Sans
- Right-aligned azure/`#007bff` "Send money" CTA at 6px radius
- Use: Top horizontal navigation

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect)
**Tier 1 sources:** https://www.themoin.com/ko , https://themoin.github.io/
**Tier 2 sources:** getdesign.md/moin (no result — "No designs found for 'moin'") ; styles.refero.design/?q=moin (not listed — 96 fuzzy substring hits, none the Moin fintech)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 48px, 64px
- Notable: buttons pad at 8px 16px (exchange CTA) up to 14px 48px (dark "More reviews" pill), giving secondary actions a generous, tappable footprint

### Grid & Container
- Centered single-column marketing flow anchored by the 40px hero H1
- The currency-exchange widget (amount input + azure CTA) sits high on the page as the primary interactive object
- Feature sections alternate white (`#ffffff`) and tinted (`#f7f7f8` / `#f3f5f8`) full-width bands
- Review content lives in a horizontal carousel with `#e0e0e0`-bordered arrow controls

### Whitespace Philosophy
- **Calm, functional breathing room**: generous vertical rhythm between sections keeps a numbers-heavy product feeling unhurried
- **Flat segmentation**: bands separate by background tint and `#efefef` hairlines rather than heavy borders or shadow
- **Numbers get room**: the exchange widget is given space and scale so the amount is the clear focal point

### Border Radius Scale
- Small (6px): buttons, inputs — the workhorse radius
- Medium (8px): carousel controls, small containers
- Large (16px): content and feature cards
- Extra (20px): larger rounded containers
- Full (9999px / 50%): circular avatars and icon chips

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, most surfaces, inline text |
| Tint (Level 1) | `#f7f7f8` / `#f3f5f8` background shift | Card/section separation without elevation |
| Hairline (Level 2) | 1px solid `#efefef` (or cool `#e9ecef`) border | Card outlines, dividers |
| Card (Level 3) | `rgba(0, 0, 0, 0.05) 0px 4px 15px 0px` | Soft lift on content/review cards |
| Elevated (Level 4) | `rgba(36, 36, 36, 0.3) 0px 10px 20px 0px` | Rare emphasis on floating/hover elements |

**Shadow Philosophy**: Moin is a near-flat system. Live inspection found `box-shadow: none` across the hero, nav, and most sections, with a single soft `rgba(0, 0, 0, 0.05) 0px 4px 15px` recurring on cards and one deeper `rgba(36, 36, 36, 0.3)` reserved for emphasis. Depth is communicated primarily through flat tinted surfaces (`#f7f7f8`, `#f3f5f8`) and thin `#efefef` hairlines. This restraint keeps the remittance UI feeling fast, clean, and mobile-native rather than heavy — when the system needs to draw attention, it reaches for the azure `#0082ff`, not elevation.

## 7. Do's and Don'ts

### Do
- Set every text element in Spoqa Han Sans — Bold (700) for headings, 400 for body
- Reserve azure (`#0082ff`) for the money action — CTA, eyebrows, active amount
- Use near-black navy (`#1a1b22`) for headings and charcoal (`#333333`) for body text
- Keep the type scale compact — 40px hero, 32/24px sections, 16px body
- Separate sections with flat tint (`#f7f7f8` / `#f3f5f8`) and `#efefef` hairlines, not heavy shadow
- Use a 6px radius on buttons and inputs, 16px on cards
- Let the currency amount be the loudest element (32px / 700) and flip it to azure when active
- Keep depth to the single soft `rgba(0, 0, 0, 0.05)` card shadow

### Don't
- Introduce a second saturated accent color — azure is the only signal hue
- Use pure black (`#000000`) for body text — reserve navy `#1a1b22` and charcoal `#333333`
- Stack heavy drop shadows for elevation — Moin is near-flat
- Oversize marketing headlines beyond the 40px hero — the scale is deliberately pragmatic
- Spread azure across decorative elements — it dilutes the "this is the action" signal
- Swap in a display typeface for headings — Spoqa Han Sans owns every role
- Use sharp 0px corners on interactive controls — 6px is the baseline
- Use faint grey (`#a9abb4`) for primary content — it is for disabled/placeholder only

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero compresses, exchange widget full-width |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full centered layout, multi-column feature bands, carousel |

### Touch Targets
- Exchange CTA at 50px height, full-width on mobile — an unmistakable primary target
- Dark secondary buttons at 52px with 14px 48px padding — comfortably tappable
- Carousel arrow controls at 48px square with `#e0e0e0` border

### Collapsing Strategy
- Hero: 40px headline scales down on mobile, weight 700 maintained
- Exchange widget: amount input + azure CTA stack vertically on narrow viewports
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections keep full-width treatment
- Review carousel: reduces visible cards, arrows remain

### Image Behavior
- App screenshots and illustrations sit on flat tinted surfaces, carrying at most the soft `rgba(0, 0, 0, 0.05)` card shadow
- Cards maintain 16px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary action / azure: Moin Azure (`#0082ff`)
- Nav send button: Send Blue (`#007bff`)
- Heading text: Ink Navy (`#1a1b22`)
- Body text: Charcoal (`#333333`)
- Amount (resting): Dark (`#242424`)
- Secondary text: Muted (`#6b6c74`)
- Tertiary label: Muted Slate (`#818daa`)
- Carousel icon: Grey (`#555555`)
- Faint / disabled: Faint (`#a9abb4`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface (`#f7f7f8`), Surface Cool (`#f3f5f8`)
- Hairline: `#efefef` (cool: `#e9ecef`), stronger border `#e0e0e0`

### Example Component Prompts
- "Create a remittance hero on white. Headline at 40px Spoqa Han Sans weight 700, color #1a1b22. Below it a currency-exchange widget: amount input at 32px weight 700 (#242424, turning #0082ff when active) and an azure CTA — #0082ff background, white text, 6px radius, 8px 16px padding, 50px tall."
- "Design a feature block: #f3f5f8 background, 1px solid #efefef border, 16px radius, no heavy shadow. Azure eyebrow label at 16px Spoqa Han Sans weight 700 (#0082ff), then a 24px weight-700 heading in #1a1b22, body 16px weight 400 #333333."
- "Build a review card: #f7f7f8 background, 16px radius, soft shadow rgba(0,0,0,0.05) 0px 4px 15px. Carousel arrows as 48px white squares with 1px solid #e0e0e0 border, #555555 icon, 8px radius."
- "Create a top nav: white header, #333333 links in Spoqa Han Sans, right-aligned #007bff 'Send money' button at 6px radius."

### Iteration Guide
1. Spoqa Han Sans everywhere; 700 for headings, 400 for body
2. Azure (`#0082ff`) is the single action color — don't spread it
3. Near-flat: use `#f7f7f8` / `#f3f5f8` tint and `#efefef` hairlines; one soft card shadow only
4. 6px radius on buttons/inputs, 16px on cards
5. Headings `#1a1b22`, body `#333333` — never pure black
6. Compact type scale: 40 / 32 / 24 / 16
7. Make the currency amount the focal point and flip it to azure when active

---

## 10. Voice & Tone

Moin's voice is **plain, reassuring, and efficient** — a cross-border money service that treats sending money abroad as something that should be fast, cheap, and unintimidating. The English hero line *"Complex international remittances, now made simple with MOIN!"* sets the register: it names a real pain (remittance is complicated and expensive) and answers it directly, without jargon or hype. Copy speaks to migrant workers, students, and anyone sending money home as a competent adult who wants speed, low fees, and certainty — not a target for financial upsell.

| Context | Tone |
|---|---|
| Hero headlines | Problem → simple answer. "Complex international remittances, now made simple with MOIN!" Direct, benefit-first. |
| Feature eyebrows | One-word plain claims. "Speed", "Easy to start", "Lower fees". |
| Feature headings | Concrete promise. "Fast, direct remittances you can trust", "Done in five minutes, right in the app". |
| CTAs | Action-first, low-pressure. "Send money", "More reviews". |
| Trust / savings copy | Concrete and quantified. Fee-savings framed as real numbers, not vague "best rates". |

**Voice samples (verbatim from live homepage):**
- "Complex international remittances, now made simple with MOIN!" — hero headline (problem → simple answer). *(verified live 2026-07-02)*
- "Fast, direct remittances you can trust" — feature heading (speed + trust). *(verified live 2026-07-02)*
- "Done in five minutes, right in the app" — feature heading (concrete time promise). *(verified live 2026-07-02)*

**Forbidden register**: fear-based or urgency-driven sales pressure, undefined financial/FX jargon left unexplained, hype superlatives on routine actions, exclamation-stacked marketing beyond the single friendly hero line.

## 11. Brand Narrative

Moin (모인) is a Korean fintech built around a single, concrete frustration: sending money across borders from Korea was slow, opaque, and expensive, buried in bank fees and hidden exchange-rate margins. Moin, operated by **Moin Inc.**, positioned itself as a licensed small-sum overseas-remittance provider under Korea's amended Foreign Exchange Transactions Act — one of the early independent players allowed to move money internationally outside the incumbent banks. Its founding premise, echoed by the homepage line *"Complex international remittances, now made simple"*, was to strip a historically bank-controlled process down to something a person could finish in about five minutes on their phone.

The product matured into a direct, lower-fee remittance service that competes on the two things that actually matter to someone wiring money home — how fast it arrives and how much it costs — surfacing both plainly rather than hiding them behind an application funnel. The brand positions itself as the sender's advocate inside a system historically tilted toward banks and their margins.

What Moin refuses, visible in its design: the heavy, intimidating chrome of legacy banking (no shadow-stacked cards, no institutional navy-and-gold ornamentation) and the dark-pattern urgency of aggressive financial marketing. What it embraces: a flat, fast, mobile-native interface; a single trustworthy azure; a compact, honest type scale; and a currency widget that puts the real number — the amount and the fee — front and center.

## 12. Principles

1. **The number is the product.** A remittance user is deciding based on amount received and fee paid. *UI implication:* give the currency amount the largest, boldest type on the page and light it azure when active — never bury the figure.
2. **Simple beats feature-rich.** Sending money should feel like five minutes, not a bank application. *UI implication:* keep the primary flow to one obvious azure CTA; resist adding competing calls to action.
3. **One action, one color.** Azure (`#0082ff`) means "move the money." *UI implication:* reserve the saturated azure exclusively for the send action and its accents so the next step is never ambiguous.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* separate with tint and `#efefef` hairlines; keep to the single soft card shadow.
5. **Trust through concreteness.** Fees, speed, and rates are stated plainly, not spun. *UI implication:* show real numbers and quantified savings; avoid vague superlatives in copy and UI labels.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Moin user segments (migrant workers, international students, and Koreans sending money abroad), not individual people.*

**응웬 반 (Nguyen Van), 32, 안산.** A worker sending part of his monthly pay home to Vietnam. Cares about two numbers only — the fee and how fast it lands. Chose Moin after comparing the received amount against his bank and seeing it was both cheaper and faster.

**김서연, 24, 서울.** A student wiring tuition and living costs to a sibling studying overseas. Values that the whole transfer finishes in a few minutes in the app and that the exchange rate is shown up front, not after she commits.

**David Park, 41, 판교.** A Korean professional making occasional overseas payments to family. Distrusts remittance services that feel like a hard sell; trusts Moin's calm, plain interface and the fact that it states its fees as concrete figures rather than "great rates".

## 14. States

| State | Treatment |
|---|---|
| **Empty (no transfer history)** | White canvas. Single Ink Navy (`#1a1b22`) line explaining no transfers yet, with one azure `#0082ff` CTA to start a transfer. No illustration clutter. |
| **Empty (saved recipients, none yet)** | Muted (`#6b6c74`) single line: nothing saved yet, plus a path to add a recipient. Calm and honest. |
| **Loading (rate fetch)** | Inline azure activity within the exchange widget; the previous amount stays visible. Flat pulse consistent with the near-shadowless system. |
| **Loading (transfer submitting)** | Skeleton rows on `#f7f7f8` tinted surface at final dimensions, 16px radius — no heavy shimmer. |
| **Error (rate/transfer failed)** | Inline message in Ink Navy with a plain-language explanation and a retry. Never a bare generic error — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "required"; input border tightens rather than shouting. |
| **Success (transfer submitted)** | Brief inline confirmation in calm tone with the received amount and arrival estimate linked immediately below. No celebratory emoji. |
| **Skeleton** | `#f7f7f8` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Faint (`#a9abb4`) text on reduced-opacity surface; azure actions fade rather than turn grey, preserving the brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus, input value color flip |
| `motion-standard` | 200ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, carousel items |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet, consistent with the flat, fast aesthetic. The currency amount transitions its color to azure `#0082ff` on becoming active at `motion-fast`; review cards slide within the carousel at `motion-standard / ease-enter`; buttons respond with a subtle opacity/scale shift on press. No bounce or spring — a money-transfer product signals steadiness, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on https://www.themoin.com/ko:
- Hero H1 "Complex international remittances, now made simple with MOIN!" — Spoqa Han Sans 40px / weight 700 / color rgb(26,27,34) #1a1b22
- Section H2 "Why so many users choose MOIN" — 32px / 700 / rgb(51,51,51)
- Feature H2 "Fast, direct remittances you can trust" / "Done in five minutes, right in the app" — 24px / 700 / rgb(26,27,34) #1a1b22
- Feature eyebrow H3 "Speed" / "Easy to start" / "Lower fees" — 16px / 700 / rgb(0,130,255) #0082ff
- Exchange CTA "Send money" — bg rgb(0,130,255) #0082ff / radius 6px / 50px tall / border rgba(0,50,100,0.1)
- Nav "Send money" — bg rgb(0,123,255) #007bff / radius 6px / 40px / 700
- Dark "More reviews" — bg rgb(51,51,51) #333333 / white text / radius 6px / padding 14px 48px / 52px
- Carousel arrows — bg #ffffff / color rgb(85,85,85) #555555 / border rgb(224,224,224) #e0e0e0 / radius 8px / 48px
- body default color rgb(51,51,51) #333333, font "Spoqa Han Sans","Spoqa Han Sans JP"
- top card shadow rgba(0,0,0,0.05) 0px 4px 15px (×10); box-shadow none across hero/nav/headings

Second surface — https://themoin.github.io/ (MOIN 모인 기술 블로그, official engineering blog,
"© 2026 ALL RIGHTS RESERVED MOIN Inc."): brand-owned, confirms company identity; runs a
generic Montserrat blog theme, so product tokens (§1-9) are sourced from themoin.com, not the blog.

Voice samples (§10) are verbatim from the live homepage (hero H1, feature H2 headings).

Brand narrative (§11): Moin (모인) is a Korean cross-border remittance fintech operated by Moin Inc.,
a licensed small-sum overseas remittance provider under Korea's Foreign Exchange Transactions Act.
These are widely documented public facts about the company; specific corporate details beyond the
homepage were not directly quoted from a verified Moin statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Moin user segments
(migrant workers, international students, Koreans sending money abroad). Names are illustrative;
they do not refer to real people.

Interpretive claims (e.g., "the number is the product", "flat and fast as a rejection of legacy
banking chrome") are editorial readings connecting Moin's observed design to its positioning,
not directly sourced Moin statements.
-->
