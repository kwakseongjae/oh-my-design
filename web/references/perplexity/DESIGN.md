---
id: perplexity
name: Perplexity
country: US
category: ai
homepage: "https://www.perplexity.ai"
primary_color: "#20808D"
logo:
  type: simpleicons
  slug: "perplexity"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#20808d"
    primary-hover: "#1a6873"
    primary-deep: "#13343b"
    primary-tint: "#e5f2f2"
    teal-on-dark: "#34b4c4"
    ink: "#091717"
    canvas: "#fbfaf4"
    surface: "#fcfcf9"
    surface-white: "#ffffff"
    body: "#2e3a3a"
    muted: "#5c6a6a"
    placeholder: "#8a9494"
    hairline: "#e4e4dc"
    hairline-soft: "#efefe9"
    dark-canvas: "#0d1117"
    dark-surface: "#161b22"
    dark-line: "#2a2f37"
    ink-inverse: "#f2f2ed"
    success: "#1f9d6b"
    error: "#e0524a"
    warning: "#d9923a"
    on-primary: "#ffffff"
  typography:
    family: { sans: "FK Grotesk", mono: "Berkeley Mono" }
    display-hero: { size: 48, weight: 500, lineHeight: 1.08, tracking: -0.02, use: "Landing hero" }
    display:      { size: 36, weight: 500, lineHeight: 1.17, tracking: -0.02, use: "Marketing section headers" }
    heading-lg:   { size: 28, weight: 600, lineHeight: 1.29, tracking: -0.01, use: "Thread title, page headers" }
    heading:      { size: 22, weight: 600, lineHeight: 1.36, tracking: -0.01, use: "Answer section headers, modal titles" }
    subtitle:     { size: 18, weight: 600, lineHeight: 1.44, use: "Source group labels, card headings" }
    answer-body:  { size: 16, weight: 400, lineHeight: 1.63, use: "Generated answer text, reading-first leading" }
    body:         { size: 15, weight: 400, lineHeight: 1.60, use: "UI descriptions, settings" }
    label:        { size: 14, weight: 500, lineHeight: 1.43, use: "Buttons, tabs, chips" }
    caption:      { size: 13, weight: 400, lineHeight: 1.38, use: "Metadata, source domains, timestamps" }
    mono:         { size: 13, weight: 400, lineHeight: 1.54, use: "Code, model IDs" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 6, md: 10, lg: 16, full: 9999 }
  shadow:
    ambient: "rgba(9,23,23,0.06) 0px 1px 3px"
    standard: "rgba(9,23,23,0.08) 0px 2px 8px"
    elevated: "rgba(9,23,23,0.20) 0px 16px 48px"
  components:
    button-primary: { type: button, bg: "#20808d", fg: "#ffffff", radius: 10, padding: "0 18px", font: "14px / 500", use: "Ask / submit primary CTA" }
    button-secondary: { type: button, bg: "#fcfcf9", fg: "#091717", radius: 10, padding: "0 18px", font: "14px / 500", use: "Secondary action, 1px #e4e4dc border" }
    button-ghost: { type: button, bg: "#efefe9", fg: "#5c6a6a", radius: 8, padding: "0 12px", font: "14px / 500", use: "Toolbar actions (Share, Sources, More)" }
    pill: { type: badge, bg: "#ffffff", fg: "#2e3a3a", radius: 9999, padding: "6px 14px", font: "13px / 500", use: "Focus mode / filter selector", active: "#20808d border, #13343b text, #e5f2f2 bg" }
    composer: { type: input, bg: "#ffffff", fg: "#091717", radius: 16, padding: "16px 18px", font: "16px / 400", use: "The Ask box, 1px #e4e4dc border, focus #20808d ring" }
    text-field: { type: input, bg: "#ffffff", fg: "#091717", radius: 10, padding: "10px 14px", font: "15px / 400", use: "Standard text field, 1px #e4e4dc border" }
    answer-card: { type: card, bg: "#fcfcf9", radius: 12, padding: "20px 24px", use: "Generated answer block, 1px #efefe9 border, editorial flat" }
    source-card: { type: card, bg: "#ffffff", radius: 10, padding: "12px 14px", use: "Cited source card, 1px #e4e4dc border" }
    citation-chip: { type: badge, bg: "#e5f2f2", fg: "#13343b", radius: 6, padding: "1px 6px", font: "11px / 600", use: "Inline source reference" }
    badge-pro: { type: badge, bg: "#13343b", fg: "#ffffff", radius: 6, padding: "2px 8px", font: "11px / 600", use: "PRO / model labels" }
    badge-status: { type: badge, bg: "#e5f2f2", fg: "#20808d", radius: 6, padding: "2px 8px", font: "11px / 600", use: "New / Beta / focus-mode labels" }
    tab: { type: tab, fg: "#5c6a6a", font: "14px / 500", use: "Home / Discover / Spaces / Library", active: "#091717 text, 2px bottom border #20808d" }
    toast: { type: toast, bg: "#091717", fg: "#f2f2ed", radius: 10, padding: "12px 16px", font: "14px / 400", use: "Copied / Shared transient confirmations" }
    dialog: { type: dialog, bg: "#fbfaf4", fg: "#091717", radius: 16, padding: "28px", use: "Sign-in, settings, share, upgrade modal" }
    toggle: { type: toggle, bg: "#20808d", radius: 9999, use: "Settings switch, #ffffff thumb" }
  components_harvested: true
---

# Design System Inspiration of Perplexity

## 1. Visual Theme & Atmosphere

Perplexity is an AI answer engine, and its design is built around a single idea: get out of the way of the answer. Where most AI products lean on neon gradients, glassmorphism, and a cold sci-fi chrome, Perplexity went the opposite direction — a calm, editorial, almost Scandinavian aesthetic where the interface dissolves and the text takes the stage. The brand was crafted by studio **Smith & Diction**, who described the brief as "creating an invisible brand": the product is a reading experience, so the chrome should feel like good paper and good ink, not a dashboard.

The atmosphere is quiet and literary. Surfaces are warm off-white and bone-paper tones (`#FBFAF4`, `#FCFCF9`) rather than clinical pure white, paired with a deep near-black ink (`#091717`) that reads like printed type. The one expressive move is the signature **Peacock / True Turquoise teal** (`#20808D`) — a muted, slightly grayed teal that nods to terminal phosphor and to the Perplexity "answer cursor" without tipping into the saturated cyan that every other AI startup uses. It is confident but never loud.

Typographically the brand runs on **FK Grotesk** and **FK Display** (Florian Karsten's grotesque family), a choice that gives the UI a precise, subway-signage neutrality with just enough idiosyncratic character (the alternates, the display weight) to feel authored rather than defaulted. Body copy frequently uses **FK Grotesk Neue** for legibility at small sizes. The result is an interface that feels like a well-set magazine that happens to think.

**Key Characteristics:**
- Peacock teal (`#20808D`) as the single brand accent — muted, terminal-adjacent, never neon
- Warm paper backgrounds (`#FBFAF4` / `#FCFCF9`), not pure white — an editorial, low-glare reading surface
- Deep teal-black ink (`#091717`) for type — reads like print, not `#000`
- FK Grotesk / FK Display / FK Grotesk Neue — neutral grotesque with quiet character
- "Invisible brand" philosophy: the answer is the hero, the chrome recedes
- First-class dark mode built on the same teal, on a near-black `#0D1117`-family canvas
- Generous radii (8–12px) and soft, low-contrast borders for a paper-soft feel

## 2. Color Palette & Roles

### Primary
- **True Turquoise / Peacock** (`#20808D`): The brand teal. Primary interactive accent — the submit/answer button, active links, focus rings, source highlights, the answer cursor. The single hue allowed to carry brand voice.
- **Teal Hover** (`#1A6873`): Darkened Peacock for hover/pressed states on teal surfaces.
- **Teal Deep** (`#13343B`): Inky teal for emphasis on light surfaces, selected-source rails, and quiet brand washes.
- **Teal Tint** (`#E5F2F2`): Pale teal wash for informational backgrounds, hovered list rows, citation chips on light surfaces.

### Ink & Paper (Neutrals — light mode)
- **Offblack Ink** (`#091717`): Primary text. A teal-tinted near-black that reads like printed ink, never harsh `#000000`.
- **Paper** (`#FBFAF4`): Primary page background — warm bone-white, the editorial reading surface.
- **Paper Raised** (`#FCFCF9`): Card and panel surface, fractionally lighter/cooler than the page.
- **Pure White** (`#FFFFFF`): Reserved for input wells and elevated overlays that need to pop off Paper.
- **Ink 700** (`#2E3A3A`): Strong body text, sub-headings.
- **Ink 500** (`#5C6A6A`): Secondary text, metadata, captions.
- **Ink 400** (`#8A9494`): Placeholder text, disabled labels, timestamps.
- **Line 200** (`#E4E4DC`): Default borders and dividers on Paper — soft, warm, low-contrast.
- **Line 100** (`#EFEFE9`): Hairline separators inside grouped lists.

### Dark Mode (the canonical reading mode for many users)
- **Canvas** (`#0D1117`): Primary dark page background — near-black with a cool cast.
- **Surface** (`#161B22`): Cards, the composer well, source panels.
- **Surface Raised** (`#1C2128`): Hovered rows, popovers, menus.
- **Ink Inverse** (`#F2F2ED`): Primary text on dark — warm off-white, matching the Paper temperature.
- **Ink Inverse 500** (`#9BA1A6`): Secondary text on dark.
- **Line Dark** (`#2A2F37`): Borders and dividers on dark surfaces.
- **Teal on Dark** (`#34B4C4`): A brightened Peacock used as the accent on dark canvas so the teal keeps its contrast.

### Semantic
- **Success** (`#1F9D6B`): Confirmations, copied-to-clipboard, completed runs.
- **Error** (`#E0524A`): Failed queries, destructive actions, rate-limit notices.
- **Warning** (`#D9923A`): Soft cautions, "this answer may be outdated" flags.
- **Info** (`#20808D`): Informational notes reuse the brand teal — info and brand are the same voice here.

### Source / Citation Accents
Citation chips and source pills cycle through a restrained set so users can distinguish references at a glance without a rainbow:
- **Source Teal** (`#20808D`), **Source Slate** (`#4B5A66`), **Source Plum** (`#6E5A86`), **Source Clay** (`#A86A4B`). All muted, all sitting quietly under the text.

## 3. Typography Rules

### Font Family
- **Display / Wordmark**: `"FK Display", "FK Grotesk", Georgia, serif-fallback` — used for the logotype and the largest hero moments only.
- **Primary UI / Headings**: `"FK Grotesk", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Body / Answer text**: `"FK Grotesk Neue", "FK Grotesk", "Inter", sans-serif` — the Neue cut is optimized for small-size legibility, used for answer bodies and dense reading.
- **Monospace**: `"Berkeley Mono", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace` — code blocks, model names, API snippets.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | FK Display | 48px | 500 | 52px (1.08) | -0.02em | Landing hero, "Where knowledge begins" |
| Display | FK Display | 36px | 500 | 42px (1.17) | -0.02em | Marketing section headers |
| Heading Large | FK Grotesk | 28px | 600 | 36px (1.29) | -0.01em | Thread title, page headers |
| Heading | FK Grotesk | 22px | 600 | 30px (1.36) | -0.01em | Answer section headers, modal titles |
| Subtitle | FK Grotesk | 18px | 600 | 26px (1.44) | normal | Source group labels, card headings |
| Answer Body | FK Grotesk Neue | 16px | 400 | 26px (1.63) | normal | The hero — generated answer text, generous leading for reading |
| Body | FK Grotesk Neue | 15px | 400 | 24px (1.60) | normal | UI descriptions, settings |
| Label | FK Grotesk | 14px | 500 | 20px (1.43) | normal | Buttons, tabs, chips |
| Caption | FK Grotesk Neue | 13px | 400 | 18px (1.38) | normal | Metadata, source domains, timestamps |
| Mono | Berkeley Mono | 13px | 400 | 20px (1.54) | normal | Code, model IDs (`sonar-pro`) |

### Principles
- **Reading-first leading**: Answer body uses ~1.6 line-height — well above typical UI. The product is text, so the text breathes like a magazine column, not a form.
- **Display is rare**: FK Display appears only in the wordmark and the largest marketing moments. The UI itself is almost entirely FK Grotesk / Neue. Restraint keeps the display weight special.
- **Negative tracking on big type**: Headings and display tighten slightly (-0.01 to -0.02em) for an editorial, set-by-hand feel. Body and small sizes stay at normal tracking for legibility.
- **Three weights**: 400 (body), 500 (labels/display), 600 (headings). No black, no thin — the grotesque carries authority at mid-weights.
- **Inline citations are typographic**: Source numbers `[1]` render as superscript teal tokens inside the answer flow, part of the type system rather than separate UI.

## 4. Component Stylings

### Buttons

**Primary (Submit / Ask)**
- Background: `#20808D`
- Text: `#FFFFFF`
- Border: none
- Radius: 10px
- Padding: 0 18px (height 44px)
- Font: 14px / 500 / FK Grotesk
- Hover: `#1A6873`
- Pressed: `#13343B`
- Disabled: `#20808D` at 40% opacity
- Use: The ask/submit action, primary CTA on marketing pages

**Secondary (Outline)**
- Background: transparent
- Text: `#091717`
- Border: 1px solid `#E4E4DC`
- Radius: 10px
- Padding: 0 18px (height 44px)
- Font: 14px / 500 / FK Grotesk
- Hover: background `#FCFCF9`, border `#D6D6CC`
- Use: Secondary actions next to a primary (e.g. "Rewrite", "Copy")

**Ghost / Quiet**
- Background: transparent
- Text: `#5C6A6A`
- Border: none
- Radius: 8px
- Padding: 0 12px (height 36px)
- Font: 14px / 500 / FK Grotesk
- Hover: background `#EFEFE9`, text `#091717`
- Use: Toolbar actions, icon+label buttons in the thread (Share, Sources, More)

**Pill (Focus mode / Filter)**
- Background: `#FFFFFF`
- Text: `#2E3A3A`
- Border: 1px solid `#E4E4DC`
- Radius: 9999px
- Padding: 6px 14px (height 34px)
- Font: 13px / 500 / FK Grotesk
- Active: border `#20808D`, text `#13343B`, background `#E5F2F2`
- Use: Search-focus selectors (Web, Academic, Writing), source filters

### Composer (the Ask box)

The composer is the signature surface — a large rounded well where the user types.
- Background: `#FFFFFF` (light) / `#161B22` (dark)
- Text: `#091717` / `#F2F2ED`
- Border: 1px solid `#E4E4DC` / `#2A2F37`
- Radius: 16px
- Padding: 16px 18px
- Font: 16px / 400 / FK Grotesk Neue
- Placeholder: `#8A9494` ("Ask anything…")
- Focus: border `#20808D`, soft ring `0 0 0 3px rgba(32,128,141,0.12)`
- Shadow: `0 1px 3px rgba(9,23,23,0.06)`
- Inner toolbar: focus-mode pills left, attach/voice/submit icons right; submit is the teal Primary button

### Inputs (standard)

**Text Field**
- Background: `#FFFFFF`
- Text: `#091717`
- Border: 1px solid `#E4E4DC`
- Radius: 10px
- Padding: 10px 14px
- Font: 15px / 400 / FK Grotesk Neue
- Placeholder: `#8A9494`
- Focus: border `#20808D`, ring `0 0 0 3px rgba(32,128,141,0.12)`
- Error: border `#E0524A`, ring `rgba(224,82,74,0.12)`

### Cards

**Answer Card**
- Background: `#FCFCF9`
- Border: 1px solid `#EFEFE9`
- Radius: 12px
- Padding: 20px 24px
- Shadow: none (separation via warm border, editorial flat)
- Use: The container for a generated answer block in a thread

**Source Card**
- Background: `#FFFFFF`
- Border: 1px solid `#E4E4DC`
- Radius: 10px
- Padding: 12px 14px
- Shadow: `0 1px 2px rgba(9,23,23,0.05)`
- Hover: border `#20808D`, lift to `0 2px 8px rgba(9,23,23,0.08)`
- Content: favicon 16px + domain (13px `#5C6A6A`) + title (14px `#091717`), 2-line clamp
- Use: Horizontal scroll rail of cited sources above an answer

**Discover / Feed Card**
- Background: `#FCFCF9`
- Border: 1px solid `#EFEFE9`
- Radius: 12px
- Padding: 0 (image top, 16px text)
- Use: Discover-tab editorial story cards

### Citation Chips

- Background: `#E5F2F2` (light) / `rgba(52,180,196,0.16)` (dark)
- Text: `#13343B` / `#34B4C4`
- Border: none
- Radius: 6px
- Padding: 1px 6px
- Font: 11px / 600 / FK Grotesk (or superscript `[1]` inline)
- Use: Inline source references inside answer text; hover reveals a source popover

### Badges

**Pro / Model Badge**
- Background: `#13343B`
- Text: `#FFFFFF`
- Border: none
- Radius: 6px
- Padding: 2px 8px
- Font: 11px / 600 / FK Grotesk
- Use: "PRO", model labels (`Sonar`, `GPT-5`, `Claude`)

**Status Badge (Weak)**
- Background: `#E5F2F2`
- Text: `#20808D`
- Border: none
- Radius: 6px
- Padding: 2px 8px
- Font: 11px / 600 / FK Grotesk
- Use: "New", "Beta", focus-mode labels

### Tabs

**Top Nav Tab**
- Inactive: text `#5C6A6A`, transparent
- Active: text `#091717`, 2px bottom border `#20808D`
- Font: 14px / 500 / FK Grotesk
- Use: Home / Discover / Spaces / Library navigation

### Toasts

**Default**
- Background: `#091717`
- Text: `#F2F2ED`
- Border: none
- Radius: 10px
- Padding: 12px 16px
- Shadow: `0 4px 16px rgba(9,23,23,0.18)`
- Font: 14px / 400 / FK Grotesk Neue
- Use: "Copied", "Shared", transient confirmations — bottom-center, 3s dismiss

### Dialogs

**Centered Modal**
- Background: `#FBFAF4`
- Text: `#091717`
- Border: none
- Radius: 16px
- Padding: 28px
- Shadow: `0 16px 48px rgba(9,23,23,0.20)`
- Backdrop: `rgba(9,23,23,0.40)`
- Use: Sign-in, settings, share, upgrade prompts

### Toggles

**Switch**
- On: `#20808D` track / off: `#D6D6CC` track
- Thumb: `#FFFFFF` 18px circle, `0 1px 2px rgba(9,23,23,0.20)`
- Radius: 9999px
- Use: Settings (e.g. AI Profile, dark mode, auto-suggestions)


**Tier 1 sources:** https://www.perplexity.ai (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Common values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px
- Reading column gets generous vertical rhythm (24–32px between answer blocks)

### Grid & Container
- Centered single reading column, max-width ~768px for answer/thread content (a magazine measure)
- Marketing pages: 1200px max container with 24px gutters
- Three-zone app shell: collapsible left rail (nav/library), centered content column, optional right rail (sources/related)
- Discover feed: responsive 1–3 column masonry of story cards

### Whitespace Philosophy
- **The answer breathes**: Generated text gets a constrained measure (~68ch) and ~1.6 leading so it reads like an article, never a wall.
- **Quiet chrome**: Toolbars and nav sit in muted ink grays so they recede; only the teal and the answer text earn the user's eye.
- **Source rails are calm**: Citations live in a horizontal scroll above or beside the answer, never crowding the prose.

### Border Radius Scale
- Small (6px): chips, citation tokens, badges
- Standard (10px): buttons, inputs, source cards
- Comfortable (12px): answer/feed cards
- Large (16px): composer well, modals
- Pill (9999px): focus-mode pills, toggles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow, warm border only | Answer cards, page surfaces — the editorial default |
| Subtle (1) | `0 1px 2px rgba(9,23,23,0.05)` | Source cards, inputs at rest |
| Standard (2) | `0 2px 8px rgba(9,23,23,0.08)` | Hovered source cards, popovers |
| Elevated (3) | `0 4px 16px rgba(9,23,23,0.12)` | Dropdowns, menus, toasts |
| Modal (4) | `0 16px 48px rgba(9,23,23,0.20)` | Dialogs, command palette |

**Shadow Philosophy**: Perplexity is paper-flat by default. Most separation comes from warm, low-contrast borders and the temperature shift between Paper (`#FBFAF4`) and Paper Raised (`#FCFCF9`), not from drop shadows. Shadows are reserved for genuinely floating layers, and they're tinted with the ink color (`rgba(9,23,23,…)`) rather than pure black, keeping the whole surface warm. The brand's restraint is the point — depth is a tool, not decoration.

### Blur Effects
- Source popovers and the command palette use a light backdrop blur (`blur(8px)`) over a translucent scrim
- The sticky composer applies a subtle blur as content scrolls beneath it

## 7. Do's and Don'ts

### Do
- Use Peacock teal (`#20808D`) as the single accent — buttons, links, focus rings, active states
- Background with warm paper tones (`#FBFAF4` / `#FCFCF9`), not pure white
- Use teal-tinted ink (`#091717`) for text, never `#000000`
- Set answer body in FK Grotesk Neue at ~1.6 line-height for a reading experience
- Constrain the answer column to a ~68ch measure
- Keep chrome quiet (`#5C6A6A` ink grays) so the answer is the hero
- Render inline citations as small teal `[1]` tokens in the type flow
- Provide a first-class dark mode on `#0D1117` with brightened teal `#34B4C4`

### Don't
- Don't use saturated neon cyan or AI-startup gradients — the teal is muted on purpose
- Don't put the answer in pure white boxes with heavy shadows — stay paper-flat
- Don't crowd the reading column with dense toolbars or rails
- Don't use bright multi-color accents for sources — keep the muted source palette
- Don't set body text below 15px or above 16px in the answer flow
- Don't use `#000000` text or `#FFFFFF` page backgrounds in light mode
- Don't let the brand teal decorate non-interactive elements — it signals action and citation

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, left rail becomes a drawer, composer docks to bottom |
| Tablet | 640–1024px | Reading column + collapsible left rail, source rail moves above answer |
| Desktop | 1024–1440px | Three-zone shell, source rail can sit right |
| Wide | >1440px | Centered content caps at ~768px reading width, rails widen |

### Touch Targets
- Buttons: 44px primary, 36px ghost — comfortable thumb targets on mobile
- Composer submit: 40px circular/rounded target, always reachable
- Source cards: full-width tappable rows on mobile

### Collapsing Strategy
- Left navigation rail collapses to icon-only, then to a hamburger drawer on mobile
- Source rail: right-side on desktop → horizontal scroll strip above the answer on mobile
- Related questions: sidebar list on desktop → stacked chips below the answer on mobile
- Composer: inline on desktop, sticky-bottom with safe-area inset on mobile

### Image Behavior
- Source favicons: fixed 16px
- Discover story images: 16:9, full-bleed card tops, lazy-loaded
- Generated/answer images: responsive, max content-width, rounded 10px

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent: Peacock Teal (`#20808D`)
- Teal Hover: (`#1A6873`)
- Page background: Paper (`#FBFAF4`)
- Card surface: Paper Raised (`#FCFCF9`)
- Input/overlay surface: White (`#FFFFFF`)
- Heading/body ink: Offblack (`#091717`)
- Secondary text: Ink 500 (`#5C6A6A`)
- Placeholder: Ink 400 (`#8A9494`)
- Border: Line 200 (`#E4E4DC`)
- Teal tint bg: (`#E5F2F2`)
- Dark canvas: (`#0D1117`), dark teal accent (`#34B4C4`)
- Success (`#1F9D6B`) · Error (`#E0524A`) · Warning (`#D9923A`)

### Example Component Prompts
- "Build the Ask composer: white well, 16px radius, 1px `#E4E4DC` border, 16/18 padding. Placeholder 'Ask anything…' in `#8A9494`, 16px FK Grotesk Neue. Focus: `#20808D` border + 3px `rgba(32,128,141,0.12)` ring. Bottom toolbar: focus-mode pills left, teal submit button right."
- "Create a primary button: `#20808D` bg, white text, 14px/500 FK Grotesk, 44px tall, 10px radius, 18px h-padding. Hover `#1A6873`, pressed `#13343B`."
- "Design a source card: white bg, 10px radius, 1px `#E4E4DC` border. 16px favicon + domain (13px `#5C6A6A`) + title (14px `#091717`, 2-line clamp). Hover: teal border, `0 2px 8px rgba(9,23,23,0.08)` lift."
- "Lay out an answer block: `#FCFCF9` card, 12px radius, 1px `#EFEFE9` border, no shadow, 20/24 padding. Body in FK Grotesk Neue 16px, line-height 1.63, color `#091717`, max-width 68ch. Inline `[1]` citations as `#13343B` superscript on `#E5F2F2`."
- "Make a focus-mode pill row: white pills, 9999px radius, 1px `#E4E4DC` border, 13px/500 FK Grotesk, 6/14 padding. Active pill: `#E5F2F2` bg, `#20808D` border, `#13343B` text."

### Iteration Guide
1. Page = warm Paper (`#FBFAF4`), never pure white. Ink = `#091717`, never `#000`.
2. Teal `#20808D` is the only accent and signals action or citation — use it sparingly.
3. Answer text is the hero: FK Grotesk Neue, 16px, ~1.6 leading, ~68ch measure.
4. Paper-flat by default — separate surfaces with warm borders, not shadows.
5. Radii: 6px chips, 10px buttons/inputs, 12px cards, 16px composer/modals.
6. Provide dark mode on `#0D1117` with brightened teal `#34B4C4`.
7. Keep chrome quiet (`#5C6A6A`) so it recedes behind the answer.

---

## 10. Voice & Tone

Perplexity speaks like a sharp, well-read research assistant: direct, neutral, citation-obsessed, and allergic to hype. The product's core promise is trust, so the copy never overclaims — it answers, then shows its sources. Sentences are clean and declarative. There's a quiet curiosity to the brand voice (the tagline lineage is literally "Where knowledge begins"), but it stays understated; Perplexity would rather be right than clever.

| Context | Tone |
|---|---|
| Composer placeholder | Open invitation: `Ask anything…` |
| CTAs | Plain verbs: `Ask`, `Search`, `Sources`, `Rewrite`, `Share` |
| Answers | Neutral, structured, citation-backed. Confident but hedged when evidence is thin (`Based on available sources…`). |
| Empty states | Curious and inviting, never apologetic (`Start a thread to see it here.`). |
| Errors | Plain and actionable (`Couldn't reach that source. Try again.`). No `Oops`, no cute mascots. |
| Marketing | Editorial, restrained, idea-led. Lets whitespace and the wordmark carry weight. |
| Upgrade prompts | Value-first, low-pressure (`Pro gives you more sources and stronger models.`). |

**Forbidden phrases.** No `Oops`, no `magic`, no `revolutionary`, no exclamation-stacked hype, no emoji in answers. Never present a synthesized claim without a path to its source — unsourced confidence is the one thing the brand will not do.

## 11. Brand Narrative

Perplexity AI was founded in **2022** by Aravind Srinivas, Denis Yarats, Johnny Ho, and Andy Konwinski as an "answer engine" — a search product that responds in synthesized, cited prose instead of ten blue links. The thesis was that the future of search is a conversation that always shows its work. That single conviction — **answers with citations** — drives every design decision.

When the brand identity needed to mature past a developer prototype, Perplexity worked with Philadelphia studio **Smith & Diction**, who framed the work as building "an invisible brand." The logic: Perplexity is a reading and thinking tool, so the most respectful design recedes. They reached for an editorial, Scandinavian-leaning system — warm paper grounds, a precise grotesque type family (**FK Grotesk / FK Display**), and a single muted teal (`#20808D`) chosen specifically because it was *not* the saturated cyan of the AI gold rush. The teal reads a little like terminal phosphor and a little like a peacock — technical and natural at once.

What Perplexity refuses is instructive: no gradient meshes, no glassmorphic dashboards, no neon "AI" sheen, no mascot. In a category sprinting toward maximal sci-fi spectacle, Perplexity bet on the opposite — calm, literacy, and trust. The interface should feel like the best version of reading a really good article, where the answer is the design and the chrome is just good paper and good ink.

## 12. Principles

1. **The answer is the hero.** Every pixel of chrome exists to deliver the user to the text faster and then disappear. If a UI element competes with the answer for attention, it's wrong.
2. **Always show your work.** No claim without a path to its source. Citations are a first-class, typographic part of the answer, not an afterthought panel.
3. **Calm over spectacle.** Warm paper, muted teal, quiet grays. The brand earns trust by *not* shouting in a category that shouts.
4. **One accent, used with discipline.** Teal `#20808D` means action or citation. It never decorates. Restraint makes the teal legible as a signal.
5. **Read like print.** Answer text gets a constrained measure and generous leading. The product is text; it should typeset like a magazine, not a form.
6. **Paper-flat depth.** Separation comes from warm borders and surface temperature, not drop shadows. Elevation is reserved for things that truly float.
7. **Dark mode is not an afterthought.** Many users read at night; the dark theme is designed in parallel with the same teal logic, not bolted on.
8. **Invisible brand.** The strongest identity here is the one you stop noticing — the brand succeeds when the user only remembers the answer.

## 13. Personas

*Personas below are fictional archetypes informed by publicly described knowledge-worker and researcher segments, not individual people.*

**Maya, 29, San Francisco.** Product manager who replaced her default search engine with Perplexity six months ago. Uses it 15+ times a day for quick fact-finding, competitive research, and drafting. She trusts it specifically *because* every answer shows sources — she clicks through to verify the ones that matter. Reads in dark mode all day. Gets irritated by any AI tool that sounds confident without proof.

**Daniel, 44, Boston.** Academic researcher in public health. Uses Perplexity's Academic focus to scan literature and find primary sources fast, then follows citations into the actual papers. Values the muted, distraction-free reading surface — it lets him stay in long research sessions without eye strain. Skeptical of "AI magic" language; the citation rail is what keeps him on the product.

**Priya, 23, London.** Graduate student and heavy Discover-feed reader. Treats Perplexity as both a research tool and a morning news habit. Loves the editorial card layout and the clean type — says it "feels like a magazine that answers back." Switches between web, academic, and writing focus modes constantly. Shares answer threads with classmates.

## 14. States

| State | Treatment |
|---|---|
| **Empty (new thread)** | Centered composer on Paper, "Ask anything…" placeholder, a few suggested-prompt pills below in `#FCFCF9` with `#E4E4DC` borders. Inviting, never apologetic. |
| **Empty (library)** | Single line of `#5C6A6A` body (`Start a thread to see it here.`) — no illustration. |
| **Loading (generating answer)** | Teal `#20808D` shimmer cursor pulses where text will appear; source cards fade in first, then the answer streams token-by-token. Skeleton lines in `#EFEFE9`. |
| **Streaming** | Answer text writes in left-to-right; a teal block cursor (`#20808D`) trails the last token. Citations pop in as their sources resolve. |
| **Error (query failed)** | Inline notice card: `#E0524A` left border, `Couldn't complete that. Try again.` in `#091717`, a teal retry button. No mascot, no `Oops`. |
| **Error (source unreachable)** | Source card dims to 50% with a `#8A9494` "Unavailable" label; the answer continues with remaining sources. |
| **Success (copied/shared)** | Dark toast (`#091717` bg, `#F2F2ED` text) bottom-center, 3s, `Copied to clipboard`. |
| **Focus mode active** | Selected pill flips to `#E5F2F2` bg / `#20808D` border / `#13343B` text; others stay quiet white. |
| **Skeleton** | `#EFEFE9` (light) / `#1C2128` (dark) blocks at final dimensions, 1.2s shimmer with low-opacity highlight, rounded to component radius. |
| **Disabled** | Buttons drop to 40% opacity; inputs keep `#E4E4DC` border and `#8A9494` text so geometry stays stable. |
| **Hover (source card)** | Border shifts to `#20808D`, card lifts to `0 2px 8px rgba(9,23,23,0.08)`. |

## 15. Motion & Easing

**Durations:**

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, focus-pill selection |
| `motion-fast` | 120ms | Hover, focus rings, button press |
| `motion-standard` | 220ms | Card hover-lift, popover open, tab switch |
| `motion-slow` | 360ms | Modal/dialog entrance, drawer slide |
| `motion-stream` | per-token | Answer streaming cadence — tokens appear as generated, the brand's signature motion |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — popovers, toasts, source cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, leaving elements |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way transitions — hover lifts, tab content |
| `ease-cursor` | `steps / linear` | The teal answer cursor blink — mechanical, terminal-like, intentional |

**Signature motions.**

1. **Answer streaming.** The defining motion. Generated text appears token-by-token in reading order, trailed by a teal block cursor (`#20808D`). Sources resolve and fade in slightly ahead of the text that cites them, so citations are "ready" by the time you read past them. Never reveal a full answer in one flash — the streaming *is* the brand telling you it's thinking and sourcing in real time.
2. **Source-card lift.** On hover, a source card raises with `motion-standard / ease-standard`, its border warming from `#E4E4DC` to teal `#20808D`. A quiet, confident invitation to click through.
3. **Citation popover.** Hovering an inline `[1]` opens a source preview with `motion-fast / ease-enter` and a light backdrop blur — fast, so it feels like the source was always there.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, streaming collapses to a single fade-in of the completed answer, the cursor blink stops, and all `motion-*` tokens drop to `motion-instant`. The product stays fully usable — just static.
