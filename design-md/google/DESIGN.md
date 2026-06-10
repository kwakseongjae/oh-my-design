---
id: google
name: Google
country: US
category: consumer-tech
homepage: "https://www.google.com"
primary_color: "#1a73e8"
logo:
  type: simpleicons
  slug: google
verified: "2026-06-11"
added: "2026-06-11"
omd: "0.1"
ds:
  name: Material Design 3
  url: "https://m3.material.io"
  type: system
  description: "Google's open-source design system — color roles, type scale, shape and motion tokens used across Android and Google products."
tokens:
  source: reconciled
  extracted: "2026-06-11"
  note: "primary = Google Blue 600 (#1a73e8), the deployed marketing/interactive blue on about.google; #0b57d0 is the newer GM3 sign-in pill blue live on google.com. M3 baseline tokens (#6750a4 family) come from the official material-tokens repo; m3.material.io site itself runs an expressive purple (#6442d6)."
  colors:
    primary: "#1a73e8"
    primary-hover: "#1967d2"
    primary-gm3: "#0b57d0"
    primary-tint: "#e8f0fe"
    ink: "#202124"
    ink-search: "#1f1f1f"
    graphite: "#3c4043"
    muted: "#5f6368"
    muted-alt: "#70757a"
    faint: "#9aa0a6"
    canvas: "#ffffff"
    surface: "#f8f9fa"
    hairline: "#dadce0"
    serp-link: "#1a0dab"
    on-primary: "#ffffff"
    success: "#188038"
    m3-primary: "#6750a4"
    m3-primary-container: "#eaddff"
    m3-on-surface: "#1c1b1f"
    m3-surface: "#fffbfe"
    m3-outline: "#79747e"
    m3-error: "#b3261e"
    m3-site-primary: "#6442d6"
    m3-site-surface: "#f8f1f6"
  typography:
    family: { display: "Google Sans", body: "Google Sans Text", search: "Arial", m3-default: "Roboto" }
    display-hero: { size: 60, weight: 400, lineHeight: 1.20, use: "about.google display headlines, Google Sans" }
    display:      { size: 48, weight: 400, lineHeight: 1.17, use: "Secondary display headlines, Google Sans" }
    headline:     { size: 36, weight: 400, lineHeight: 1.22, use: "Sub-section heads, Google Sans" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Google Sans Text" }
    body-compact: { size: 14, weight: 400, use: "google.com utilitarian UI, Arial" }
    button:       { size: 16, weight: 500, use: "Marketing CTA pill label, Google Sans" }
    button-compact: { size: 14, weight: 500, use: "google.com sign-in pill / search key buttons" }
    label-m3:     { size: 14, weight: 500, lineHeight: 1.43, tracking: 0.1, use: "M3 label-large — buttons, tabs (Roboto baseline)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { xs: 4, sm: 8, md: 12, lg: 16, xl: 28, full: 9999 }
  shadow:
    level1: "rgba(0,0,0,0.3) 0px 1px 2px 0px, rgba(0,0,0,0.15) 0px 1px 3px 1px"
  components:
    button-primary: { type: button, bg: "#1a73e8", fg: "#ffffff", radius: "48px", padding: "12px 24px", height: "50px", font: "16px / 500 Google Sans", hover: "#1967d2", use: "Marketing primary CTA pill (about.google)" }
    button-gm3-signin: { type: button, bg: "#0b57d0", fg: "#ffffff", radius: "100px", padding: "10px 12px", height: "40px", font: "14px / 500 Google Sans Text", use: "google.com sign-in pill — newer GM3 blue" }
    button-tonal: { type: button, bg: "#e8f0fe", fg: "#1967d2", radius: "48px", padding: "12px 24px", height: "50px", font: "16px / 500 Google Sans", use: "Tonal secondary pill (Subscribe)" }
    button-search-key: { type: button, bg: "#f8f9fa", fg: "#3c4043", radius: "8px", height: "36px", padding: "0 16px", border: "1px solid #f8f9fa", font: "14px / 500 Arial", use: "Google Search / I'm Feeling Lucky keys" }
    card-feature: { type: card, bg: "#ffffff", fg: "#202124", radius: "8px", use: "about.google feature/story card, flat on #f8f9fa band" }
    card-m3-doc: { type: card, bg: "#f8f1f6", fg: "#1c1b1f", radius: "24px", use: "m3.material.io tonal doc card — M3 expressive shape" }
    nav-link: { type: tab, fg: "#5f6368", active: "text #202124", font: "16px / 500 Google Sans", use: "about.google top nav item, 48px row" }
    footer-link: { type: listItem, bg: "#f8f9fa", fg: "#5f6368", font: "16px / 500 Google Sans", use: "Footer resource link on tonal surface" }
  components_harvested: true
---

# Design System Inspiration of Google

## 1. Visual Theme & Atmosphere

Google's visual language is the most widely deployed design system on earth — Material Design 3 operating at brand scale — yet its flagship surface remains radically empty: a pure white (`#ffffff`) canvas, a four-color logotype, one search bar, and almost nothing else. That emptiness is the brand. Where competitors decorate, Google subtracts, trusting the utility of the product to carry the visual experience. Text sits in soft near-blacks (`#202124` on marketing surfaces, `#1f1f1f` on Search) rather than pure black, and a single confident hue — Google Blue (`#1a73e8`) — does all the interactive talking.

The typographic system is a three-font hierarchy with clear jobs: **Google Sans** (a geometric sans derived from the Product Sans logo lineage) owns display headlines and buttons, rendered at an unusually calm weight 400 even at 60px; **Google Sans Text** carries body copy at 16px/24px; and on the Search homepage, plain **Arial** persists as a deliberate utilitarian fossil — the fastest-rendering font for the fastest page on the web. Material 3's baseline type scale (Roboto) underpins product UI. Headlines never shout with weight; hierarchy comes from size and space, which gives Google's marketing pages a friendly, almost academic calm.

Geometry is where the personality lives. Interactive elements are pills — the about.google CTA runs a 48px radius, the google.com sign-in button a full 100px pill in the newer GM3 blue (`#0b57d0`) — while containers stay gently rounded (8px cards on marketing, 24px tonal cards on the M3 docs site, following the M3 shape scale of 4/8/12/16/28px). Depth is nearly absent: marketing surfaces use flat tonal shifts (white against `#f8f9fa`) and `#dadce0` hairlines instead of shadows, reserving M3's tinted elevation for product UI. The result is a system that feels effortless, optimistic, and engineered — color used sparingly, geometry friendly, and whitespace doing the work of luxury.

**Key Characteristics:**
- Radical emptiness on the flagship surface — white canvas, one search bar, utility as brand
- Google Blue (`#1a73e8`) as the single interactive hue; newer GM3 surfaces shift to `#0b57d0`
- Pill geometry for every action — 48px-100px radii on buttons, full-round chips
- Google Sans display at weight 400 — large, calm headlines that never use bold to shout
- Flat tonal layering: `#ffffff` against `#f8f9fa` with `#dadce0` hairlines, almost no shadow
- Soft near-black text (`#202124`) instead of pure black
- Material Design 3 as the public, open-source token vocabulary (color roles, type scale, shape, motion)
- The four-color logotype (blue, red, yellow, green) as the only place the brand is loud

## 2. Color Palette & Roles

### Primary
- **Google Blue** (`#1a73e8`): The canonical interactive blue — primary CTA pills, links, icons, and tab indicators across about.google and most marketing surfaces. Google Blue 600 in the legacy GM palette.
- **Blue Hover** (`#1967d2`): Blue 700 — hover/pressed states for primary actions, and text color on tonal blue surfaces.
- **GM3 Blue** (`#0b57d0`): The newer Material 3 era Google Blue, live on the google.com sign-in pill. A generational evolution of `#1a73e8`, not a competitor.
- **Blue Tint** (`#e8f0fe`): Tonal container blue — secondary/tonal button backgrounds (e.g. the about.google "Subscribe" pill).

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, text on blue. The dominant color of the brand.
- **Tonal Surface** (`#f8f9fa`): The signature Google grey — footer bands, section backgrounds, search key buttons. Separation without shadow.
- **Hairline** (`#dadce0`): Borders, dividers, input strokes.
- **Ink** (`#202124`): Primary text on marketing surfaces — a soft near-black.
- **Search Ink** (`#1f1f1f`): Body text on the google.com homepage (GM3 neutral).
- **Graphite** (`#3c4043`): Strong secondary text; the label color of the search key buttons.
- **Muted** (`#5f6368`): Secondary body text, nav links, footer links.
- **Muted Alt** (`#70757a`): Quieter metadata text on Search surfaces.
- **Faint** (`#9aa0a6`): Lowest-emphasis labels, placeholder-grade grey.

### Semantic & Heritage
- **Success Green** (`#188038`): Green 700 — success states and the Classroom brand mark (Tier 2 verified).
- **SERP Link Blue** (`#1a0dab`): The classic search-results link blue, still live on google.com — a 25-year-old fossil token and one of the most recognizable colors on the web.

### Material 3 Baseline (official DS tokens)
- **M3 Primary** (`#6750a4`): The baseline seed purple of Material 3 — `md.sys.color.primary` in the public token set. The default theme of the system Google ships to the world, distinct from Google's own deployed blue.
- **M3 Primary Container** (`#eaddff`): Tonal container for the baseline primary.
- **M3 On-Surface** (`#1c1b1f`): Baseline text color (neutral10).
- **M3 Surface** (`#fffbfe`): Baseline surface (neutral99) — warm-tinted white.
- **M3 Outline** (`#79747e`): Baseline outline (neutral-variant50).
- **M3 Error** (`#b3261e`): Baseline error red (error40).
- **M3 Site Purple** (`#6442d6`): The expressive primary used by m3.material.io itself — hero CTA and link color on the DS docs site.
- **M3 Site Surface** (`#f8f1f6`): The tonal card background on m3.material.io, at 24px radius.

## 3. Typography Rules

### Font Family
- **Display / UI**: `Google Sans` — headlines, nav, buttons. Descended from Product Sans (the logo face); geometric, friendly, only ever 400-500 weight on marketing surfaces.
- **Body**: `Google Sans Text` — reading text at 16px/24px; tuned for small sizes.
- **Search utility**: `Arial` — the google.com homepage body and search UI run plain Arial, a deliberate speed-first choice.
- **Product baseline**: `Roboto` — the Material 3 baseline type scale; `Google Sans Flex` (variable) and `Google Sans Display` appear on newer surfaces such as store.google.com.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Display Hero | Google Sans | 60px (3.75rem) | 400 | 1.20 (72px) | about.google section displays |
| Display | Google Sans | 48px (3.00rem) | 400 | 1.17 (56px) | Secondary displays |
| Headline | Google Sans | 36px (2.25rem) | 400 | 1.22 (44px) | Sub-section heads |
| Title | Google Sans Text | 16px (1.00rem) | 500 | 1.50 (24px) | Footer column heads, card titles |
| Body | Google Sans Text | 16px (1.00rem) | 400 | 1.50 (24px) | Standard reading text |
| Body Compact | Arial | 14px (0.88rem) | 400 | normal | google.com utilitarian UI |
| Button | Google Sans | 16px (1.00rem) | 500 | 1.00 | Marketing CTA pills |
| Button Compact | Google Sans Text | 14px (0.88rem) | 500 | 1.00 | Sign-in pill, search keys |

### M3 Baseline Type Scale (official tokens, Roboto)
Display-large 57/64/400 (-0.25 tracking), display-medium 45/52/400, display-small 36/44/400; headline 32/28/24px at 400; title-large 22/28/400, title-medium 16/24/500; body-large 16/24/400 (0.5 tracking), body-medium 14/20/400; label-large 14/20/500 (0.1 tracking), label-medium 12/16/500, label-small 11/16/500.

### Principles
- **Weight 400 at display sizes**: Google headlines are big, not bold. Hierarchy comes from size and whitespace, giving marketing pages a calm, unhurried register.
- **Three fonts, three jobs**: Google Sans persuades, Google Sans Text informs, Arial (on Search) performs. Roboto remains the M3 product baseline.
- **Positive tracking at small sizes**: M3's body and label tokens add tracking (0.25-0.5px) for legibility — the opposite of fashion-brand tightness.
- **Type as token**: every size/weight/line-height pair is a named `md.sys.typescale` token, not an ad-hoc choice.

## 4. Component Stylings

### Buttons

**Filled Pill (Primary)**
- Background: `#1a73e8`
- Text: `#ffffff`
- Radius: 48px
- Padding: 12px 24px
- Height: 50px
- Font: 16px / 500 / Google Sans
- Hover: `#1967d2` background
- Use: Marketing primary CTA on about.google ("See what's new", "Explore", "Check it out")

**GM3 Sign-in Pill**
- Background: `#0b57d0`
- Text: `#ffffff`
- Radius: 100px
- Padding: 10px 12px
- Height: 40px
- Font: 14px / 500 / Google Sans Text
- Use: google.com header sign-in — the newer Material 3 era Google Blue

**Tonal Pill (Secondary)**
- Background: `#e8f0fe`
- Text: `#1967d2`
- Radius: 48px
- Padding: 12px 24px
- Height: 50px
- Font: 16px / 500 / Google Sans
- Use: Secondary CTA ("Subscribe") — M3 tonal-button pattern, blue-on-blue

**Search Key Button**
- Background: `#f8f9fa`
- Text: `#3c4043`
- Border: 1px solid `#f8f9fa`
- Radius: 8px
- Padding: 0px 16px
- Height: 36px
- Font: 14px / 500 / Arial
- Use: "Google Search" / "I'm Feeling Lucky" keys on the homepage

### Cards & Containers

**Feature Card (Marketing)**
- Background: `#ffffff`
- Text: `#202124`
- Radius: 8px
- Use: about.google product/story cards sitting flat on the `#f8f9fa` band — no shadow

**M3 Tonal Doc Card**
- Background: `#f8f1f6`
- Text: `#1c1b1f`
- Radius: 24px
- Use: m3.material.io content cards — the expressive M3 shape scale in practice

### Navigation

**Top Nav Link**
- Text: `#5f6368`
- Active: `#202124` text on `#ffffff`
- Radius: 4px
- Padding: 0px 12px
- Height: 48px
- Font: 16px / 500 / Google Sans
- Use: about.google header ("About", "Products", "Company Info", "News")

### Inputs

**Search Field Text**
- Text: 16px / 400 / Arial
- Padding: 14px 0px 0px
- Use: The google.com search textarea — the single most-used input on the web; container draws the pill chrome

### Footer

**Footer Resource Link**
- Background: `#f8f9fa`
- Text: `#5f6368`
- Radius: 4px
- Font: 16px / 500 / Google Sans
- Use: about.google footer columns ("Blog", "Careers", "Brand Resource Center")

---
**Verified:** 2026-06-11
**Tier 1 sources:** https://m3.material.io (official DS, live inspect), https://www.google.com (live inspect), https://about.google (live inspect), https://store.google.com (live inspect, region-gate surface), https://github.com/material-foundation/material-tokens (official M3 color/typography tokens), https://github.com/material-components/material-web (official M3 shape/motion tokens)
**Tier 2 sources:** getdesign.md/google — 404 (not listed); styles.refero.design/style/c57ba3f8-1d76-4660-8ba4-48ddce26e759 (Google for Education)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px (M3 grid)
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- Measured: CTA padding 12px 24px; search keys 0 16px; nav items 0 12px; google.com link padding 5-8px

### Grid & Container
- google.com: a single centered column — logo, search bar, two keys. The grid is the absence of a grid.
- about.google: full-width hero media, then alternating white and `#f8f9fa` bands with 2-3 column card grids
- m3.material.io: generous tonal cards in a 2-3 column masonry, 24px radii
- Footer: multi-column link lists on the `#f8f9fa` tonal surface

### Whitespace Philosophy
- **Emptiness as trust**: the homepage's restraint signals speed and focus; whitespace is the product's promise that it will not waste your time.
- **Tonal banding over borders**: sections alternate white/`#f8f9fa` instead of drawing lines.
- **Air around actions**: pill CTAs always float in generous space — never stacked tightly, rarely more than one filled pill per viewport.

### Border Radius Scale (M3 shape tokens)
- Extra-small (4px): links, inline focus targets
- Small (8px): cards, search key buttons, nav containers
- Medium (12px): larger containers
- Large (16px): prominent containers
- Extra-large (28px): hero sheets, large M3 surfaces (docs cards run 24px)
- Full (9999px / 48-200px computed): every button pill, chips, avatar circles

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Marketing pages, search homepage, cards on tonal bands |
| Tonal (Level 1) | `#f8f9fa` background shift | Section/footer separation without elevation |
| Hairline | `1px solid #dadce0` | Input strokes, dividers |
| M3 Elevation 1 | `rgba(0,0,0,0.3) 0px 1px 2px 0px, rgba(0,0,0,0.15) 0px 1px 3px 1px` | Floating controls in product UI (measured on m3.material.io media button) |

**Shadow Philosophy**: Google's marketing and search surfaces are essentially shadowless — live inspection found `box-shadow: none` across about.google CTAs, cards, nav, and the google.com chrome. Separation is tonal (`#ffffff` vs `#f8f9fa`) and linear (`#dadce0` hairlines). Real elevation belongs to Material 3's product layer, where shadows are paired with tonal color shifts and kept physically plausible — soft, short, and layered. In M3, elevation is as much a *color* concept (surface tint) as a shadow concept; on the open web Google barely uses either.

## 7. Do's and Don'ts

### Do
- Use Google Blue (`#1a73e8`) as the single interactive hue; shift to `#0b57d0` for GM3-era surfaces
- Make every action a pill — 48px+ radius on buttons, full-round chips
- Set display headlines in Google Sans at weight 400 — big, never bold
- Separate sections with tonal bands (`#ffffff` / `#f8f9fa`) and `#dadce0` hairlines, not shadows
- Use soft near-black (`#202124`) for text
- Use the tonal blue pair (`#e8f0fe` bg + `#1967d2` text) for secondary actions
- Follow the M3 shape scale: 4 / 8 / 12 / 16 / 28px, full for pills
- Treat whitespace as the primary luxury — one filled CTA per viewport

### Don't
- Use multiple saturated hues for interaction — blue is the only action color; red/yellow/green live in the logo and semantic states
- Use bold (700) display headlines on marketing surfaces — weight 400 is the voice
- Add drop shadows to marketing cards — tonal separation only
- Use pure black `#000000` for body text
- Square off buttons — sharp-cornered actions read as foreign to the system
- Invent ad-hoc type sizes — every step should map to a typescale token
- Crowd the canvas — density is for product UI (Gmail, Drive), never for marketing or Search
- Replace Arial on the Search homepage with a brand font — utility surfaces optimize for speed, not flair

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Compact | <600px | Single column, nav collapses to drawer/hamburger, display drops to ~36-40px |
| Medium | 600-905px | 2-column card grids, moderate margins |
| Expanded | 905-1240px | Full layout, 3-column grids |
| Large | >1240px | Centered content, max-width containers, generous margins |

M3 defines canonical window size classes (compact/medium/expanded) that Google's web surfaces follow loosely.

### Touch Targets
- Minimum 48x48dp interactive targets (M3 accessibility baseline) — nav rows measure 48px, CTA pills 50px
- Search keys at 36px height are a desktop-only exception
- Pill geometry inherently signals tappability

### Collapsing Strategy
- about.google: 60px displays compress, weight 400 maintained; card grids stack to single column
- google.com: already minimal — the layout barely changes, the search bar simply narrows
- Footer link columns stack vertically on compact widths
- Tonal bands stay full-width at every size

### Image Behavior
- Marketing media uses large rounded containers (8-28px radius) without shadows
- Product screenshots sit flat on tonal bands
- The four-color logo never distorts; it scales or swaps to the "G" mark

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Google Blue (`#1a73e8`), hover Blue 700 (`#1967d2`)
- GM3-era CTA: `#0b57d0`
- Tonal secondary: `#e8f0fe` bg + `#1967d2` text
- Background: Pure White (`#ffffff`)
- Tonal surface: `#f8f9fa`
- Text: Ink (`#202124`); secondary `#5f6368`; faint `#9aa0a6`
- Hairline: `#dadce0`
- Success: `#188038`; Error (M3): `#b3261e`
- M3 baseline seed: `#6750a4` with container `#eaddff`

### Example Component Prompts
- "Create a hero on white background. Headline at 60px Google Sans weight 400, line-height 1.2, color #202124. Sub-copy 16px Google Sans Text, #5f6368, line-height 1.5. One filled pill CTA: #1a73e8 background, white text, 48px radius, 12px 24px padding, 16px Google Sans weight 500; hover #1967d2."
- "Design a feature card row on a #f8f9fa band: white #ffffff cards, 8px radius, no shadow. Card title 16px Google Sans Text weight 500 #202124, body 16px weight 400 #5f6368, link 'Learn more' in #1a73e8."
- "Build the google.com search page: white canvas, centered logo, pill search bar with #dadce0 hairline, two grey keys (#f8f9fa bg, #3c4043 text, 8px radius, 36px height, 14px Arial weight 500), sign-in pill top-right (#0b57d0, white text, 100px radius, 40px height)."
- "Create a tonal secondary button: #e8f0fe background, #1967d2 text, 48px radius pill, 12px 24px padding, 16px Google Sans weight 500."
- "Design an M3 doc card: #f8f1f6 background, 24px radius, #1c1b1f text, 16px Google Sans Text; headline in Google Sans weight 475 if variable, else 500."

### Iteration Guide
1. Blue (`#1a73e8`) is the only interactive color — semantic colors stay in states, the rainbow stays in the logo
2. Every button is a pill; every card is gently rounded (8-28px)
3. Display type is large and weight 400 — increase size, never weight
4. Separate with tonal bands and hairlines, never shadows, on marketing surfaces
5. Map all radii to the M3 shape scale (4/8/12/16/28/full)
6. Body text is `#202124` on white, `#5f6368` for secondary — never pure black
7. Keep one filled CTA per viewport; secondary actions go tonal (`#e8f0fe`)
8. For product-UI density, switch to the M3 baseline tokens (Roboto typescale, `#6750a4` seed or brand-blue theme)

---

## 10. Voice & Tone

Google's voice is **helpful, plain, and optimistic** — a brilliant engineer who explains things simply and never talks down. The founding register was set by "Ten things we know to be true" ("Focus on the user and all else will follow", "Fast is better than slow", "You can be serious without a suit") and it still governs the copy: short declarative sentences, user benefit first, technology second. Even at planetary scale the voice stays first-person-plural and concrete; the quirkiest the brand gets is a single button — "I'm Feeling Lucky" — left on the most valuable page on the internet as a 25-year wink.

| Context | Tone |
|---|---|
| Search homepage | Nearly silent. Two buttons, no marketing copy at all. |
| Marketing headlines | Benefit-led, plain verbs. "Explore our products and features across Search, Google Workspace and more." |
| CTAs | Short imperatives: "Learn more", "Explore", "See what's new", "Subscribe". |
| Product UI | Functional, terse, sentence case. Helpful defaults over explanations. |
| Mission/company copy | Earnest and global: organize, access, useful — economist nouns, no hype. |
| Error/help text | Plain-language cause + next step; apologetic only when Google is at fault. |

**Voice samples (verbatim, verified 2026-06-11):**
- "Our mission is to organize the world's information and make it universally accessible and useful" — about.google company info.
- "Focus on the user and all else will follow." — Ten things we know to be true, #1.
- "Fast is better than slow." — Ten things we know to be true, #3.
- "I'm Feeling Lucky" — google.com homepage button, live.
- "Explore our products and features across Search, Google Workspace and more" — about.google homepage card.

**Forbidden register**: hype superlatives ("revolutionary", "game-changing"), exclamation-heavy enthusiasm, jargon without explanation, fear-based urgency, and any copy that makes the user feel stupid.

## 11. Brand Narrative

Google was founded in **1998** by **Larry Page and Sergey Brin**, two Stanford PhD students whose PageRank algorithm reframed search as a citation problem. The product's first interface decision became the brand's permanent one: while portals of the era (Yahoo, AOL) packed every pixel with links and banners, Google shipped a white page with a logo and a box. Speed and focus were the marketing. The famous homepage stayed empty because, as the company's stated philosophy puts it, "Focus on the user and all else will follow" — and the user came to search, not to browse.

The design language matured in public: the 2014 launch of **Material Design** turned Google's internal visual grammar into an open-source system, and **Material Design 3** (2021, with the 2025-26 "Expressive" wave) extended it into dynamic color, tonal surfaces, and a full token vocabulary — color roles, a typescale, shape and motion tokens — that any developer can adopt. Alphabet-era Google thus runs a two-layer identity: the **brand layer** (four-color logo, Google Sans, Google Blue `#1a73e8`, pill buttons, white space) and the **system layer** (M3's baseline `#6750a4` seed, Roboto typescale, 4-28px shape scale) that powers Android and a million third-party apps. The mission — "to organize the world's information and make it universally accessible and useful" — is visible in the design system itself: it is documented, tokenized, and given away.

What Google refuses: visual noise on utility surfaces, bold-weight shouting, decorative shadows, and gating function behind marketing. What it embraces: emptiness as respect for the user's time, one blue for every action, friendly geometry, and a belief that "great just isn't good enough" — the system keeps shipping new waves (dynamic color, variable Google Sans Flex, expressive motion physics) rather than freezing.

## 12. Principles

1. **Focus on the user and all else will follow.** (Stated philosophy, #1.) *UI implication:* the interface ships only what the task needs — the search page has two buttons; marketing pages get one filled CTA per viewport.
2. **Fast is better than slow.** (Stated philosophy, #3.) *UI implication:* Arial on the homepage, near-zero imagery on utility surfaces, flat rendering without shadows — every visual choice defers to load time and scanability.
3. **Tokens over taste.** Material 3 turns every design decision into a named token (`md.sys.color.primary`, `md.sys.typescale.body-large`, `corner-extra-large`). *UI implication:* never hard-code an ad-hoc value; map choices to the published scale so themes (dynamic color, dark) derive automatically.
4. **One hue acts, the rainbow identifies.** The four-color logo is the only polychrome element; interaction is monogamously blue. *UI implication:* reserve `#1a73e8` for actionable elements; semantic red/green appear only as states, never decoration.
5. **Calm scale, friendly shape.** Hierarchy by size at weight 400; warmth by pill and rounded-corner geometry. *UI implication:* when something needs more emphasis, make it bigger or rounder — not bolder or louder.
6. **You can be serious without a suit.** (Stated philosophy, #9.) *UI implication:* room for play — a doodle on the logo, "I'm Feeling Lucky" — inside an otherwise rigorous system.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Google user segments, not individual people.*

**Maya Chen, 34, Seattle.** Android developer at a mid-size startup. Builds her app's UI entirely from M3 tokens because dynamic color and dark theme come free. Reads m3.material.io the way she reads API docs and trusts a component more when its spec page shows the exact dp values.

**Tunde Adeyemi, 22, Lagos.** Student on a low-end Android phone and patchy data. Google's emptiness is not an aesthetic to him — it is the only search page that loads instantly on 3G. Judges every product by how fast it answers.

**Hannah Park, 41, Toronto.** Workspace admin for a 900-person company. Lives in dense product UI (Admin console, Gmail, Drive) all day; values that the same blue, the same typescale, and the same patterns repeat across every Google product so her training docs stay short.

**Diego Ramírez, 58, Madrid.** Searches in Spanish, navigates by voice, needs large tap targets. The 48dp touch minimums and plain-language UI mean he never feels the product was built for someone younger.

## 14. States

| State | Treatment |
|---|---|
| **Empty (Drive/Photos-style, no items)** | White canvas, friendly line illustration, one sentence in `#5f6368` ("A place for all of your files" pattern), single blue action. Empty states teach, never scold. |
| **Empty (search, no results)** | Plain text: what was searched, why nothing matched, suggestions to broaden. No illustration on Search — speed surface stays lean. |
| **Loading (product UI)** | M3 circular progress indicator in primary blue, or linear bar under the app bar. Motion uses standard easing, never bouncy. |
| **Loading (content)** | Skeleton blocks in `#f8f9fa`/`#dadce0` at final dimensions; shimmer subtle and brief. |
| **Error (form validation)** | M3 pattern: `#b3261e` error text + outlined field switches to error color; message says what is wrong and what valid looks like. |
| **Error (page-level, 404/offline)** | Plain-language heading, short explanation, a path back. Famously playful artifacts (the offline Dino game) keep failure human. |
| **Success (action saved)** | Quiet snackbar bottom-left, sentence case, past tense ("Saved"), auto-dismiss; optional single action ("Undo"). Never a modal celebration. |
| **Success (semantic)** | Green `#188038` icon/text inline; reserved strictly for genuine success, not decoration. |
| **Skeleton** | Tonal grey blocks, M3 shape radii preserved (8-16px), no white-on-white flashes. |
| **Disabled** | M3 spec: content at 38% opacity, container at 12% — elements dim as a whole, color identity preserved rather than swapped to grey. |

## 15. Motion & Easing

**Durations (official `md.sys.motion.duration` tokens):**

| Token | Value | Use |
|---|---|---|
| `short1-short4` | 50 / 100 / 150 / 200ms | Hover, focus, selection ticks, small component changes |
| `medium1-medium4` | 250 / 300 / 350 / 400ms | Dialogs, sheets, card expansion |
| `long1-long4` | 450 / 500 / 550 / 600ms | Large surface transitions, container transforms |
| `extra-long1-4` | 700 / 800 / 900 / 1000ms | Full-screen and choreographed transitions |

**Easings (official `md.sys.motion.easing` tokens):**

| Token | Curve | Use |
|---|---|---|
| `emphasized` | cubic-bezier(0.2, 0, 0, 1) | Default for most transitions — expressive deceleration |
| `emphasized-decelerate` | cubic-bezier(0.05, 0.7, 0.1, 1) | Elements entering the screen |
| `emphasized-accelerate` | cubic-bezier(0.3, 0, 0.8, 0.15) | Elements leaving the screen |
| `standard` | cubic-bezier(0.2, 0, 0, 1) | Utility transitions, simple state changes |
| `standard-decelerate` | cubic-bezier(0, 0, 0, 1) | Simple entries |
| `standard-accelerate` | cubic-bezier(0.3, 0, 1, 1) | Simple exits |
| `legacy` | cubic-bezier(0.4, 0, 0.2, 1) | Material 2 compatibility |

**Motion rules**: M3 motion is physical and asymmetric — entries decelerate longer than exits accelerate, so arriving content feels placed rather than thrown. Container-transform is the signature pattern: a card morphs into the page it opens, preserving spatial continuity. The 2026 "Expressive" wave adds spring-based motion physics for product UI, but marketing surfaces stay almost motionless — a fade and a scroll. Under `prefers-reduced-motion: reduce`, transitions collapse to simple fades; nothing essential is conveyed by motion alone.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-11) via playwright getComputedStyle on
https://www.google.com, https://about.google, https://store.google.com,
https://m3.material.io — see web/references/google/.verification.md for raw samples.

Official token sources fetched 2026-06-11:
- material-foundation/material-tokens (GitHub): md-ref-palette values — primary40
  #6750a4, primary90 #eaddff, neutral10 #1c1b1f, neutral99 #fffbfe,
  neutral-variant50 #79747e, error40 #b3261e; sys-color mapping (light).
- material-components/material-web (GitHub) tokens/versions/v0_192:
  md-sys-shape corner tokens (4/8/12/16/28/9999px) and md-sys-motion durations
  (50-1000ms) + easings (emphasized cubic-bezier(0.2,0,0,1) etc) — quoted verbatim in §15.
- material-tokens css/typography.css: full Roboto baseline typescale in §3.

Verified verbatim via WebFetch (2026-06-11):
- https://about.google/company-info/ — mission statement: "Our mission is to
  organize the world's information and make it universally accessible and useful".
- https://about.google/company-info/philosophy/ — "Ten things we know to be true"
  headlines, quoted in §10/§12 ("Focus on the user and all else will follow",
  "Fast is better than slow", "You can be serious without a suit",
  "Great just isn't good enough").
- https://about.google/ — marketing copy samples in §10.

Not independently verified this turn — widely documented public facts:
- Founding (1998, Larry Page and Sergey Brin, Stanford, PageRank).
- Material Design launch 2014; Material 3 announced 2021; "Expressive" wave 2025-26
  (the m3.material.io homepage live this turn shows "M3 Expressive: Design with
  emotion" and Google I/O 2026 content, supporting the latter).
- Google Sans' lineage from Product Sans.
- M3 disabled-state opacity spec (38%/12%) and container-transform pattern are
  cited from Material guidelines as general knowledge, not fetched this turn.

Personas (§13) are fictional archetypes informed by publicly observable Google
user segments (Android developers, low-bandwidth mobile users, Workspace admins,
accessibility-dependent users). Names are illustrative; they do not refer to
real people.

Interpretive claims (e.g., "emptiness as trust", "one hue acts, the rainbow
identifies", Arial as a deliberate speed fossil) are editorial readings
connecting Google's stated philosophy to its observed design, not directly
sourced Google statements.
-->
