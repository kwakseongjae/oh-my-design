---
id: adobe
name: Adobe
country: US
category: design-tools
homepage: "https://www.adobe.com"
primary_color: "#eb1000"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128"
verified: "2026-06-11"
added: "2026-06-11"
omd: "0.1"
ds:
  name: Spectrum
  url: "https://spectrum.adobe.com"
  type: system
  description: "Adobe's design system. Spectrum 2 (s2.spectrum.adobe.com) is the current generation — blue-900 #3b63fb accent, 16px pill geometry, Adobe Clean Spectrum VF."
tokens:
  source: reconciled
  extracted: "2026-06-11"
  note: "primary = Adobe brand red (#eb1000, logo + marketing). Product/commerce interactive accent = Spectrum 2 blue-900 (#3b63fb, live Buy-now CTA + official @adobe/spectrum-tokens v14). Legacy Spectrum 1 accent #0265dc still renders on spectrum.adobe.com docs."
  colors:
    primary: "#eb1000"
    accent: "#3b63fb"
    accent-link: "#274dea"
    accent-legacy-s1: "#0265dc"
    ink: "#131313"
    heading: "#000000"
    gray-800: "#292929"
    body: "#2c2c2c"
    muted: "#686868"
    canvas: "#ffffff"
    surface: "#f8f8f8"
    surface-tile: "#f3f3f3"
    hairline: "#dadada"
    promo-yellow: "#f5c700"
    success: "#05834e"
    error: "#d73220"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Adobe Clean", display: "Adobe Clean Display", spectrum: "Adobe Clean Spectrum VF", serif: "Adobe Clean Serif", code: "Source Code Pro" }
    display-hero: { size: 80, weight: 900, use: "Homepage hero headlines, Adobe Clean Display Black on dark imagery" }
    display-section: { size: 48, weight: 900, use: "Section headlines and customer-quote pull text" }
    page-title: { size: 36, weight: 700, use: "Commerce page H1 (plans & pricing)" }
    card-heading: { size: 24, weight: 900, use: "Feature/product card heads, Adobe Clean Display Black" }
    tab: { size: 18, weight: 600, use: "Audience tabs on pricing" }
    body-lg: { size: 18, weight: 400, lineHeight: 1.5, use: "Commerce body copy" }
    body: { size: 16, weight: 400, lineHeight: 1.25, use: "Homepage body and card copy" }
    button: { size: 14, weight: 700, use: "Buttons and global nav labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, full: 999 }
  shadow:
    subtle: "rgba(0,0,0,0.06) 0px 4px 12px"
    inset-hairline: "rgba(255,255,255,0.11) 0px 0px 0px 1px inset"
  components:
    button-accent: { type: button, bg: "#3b63fb", fg: "#ffffff", border: "2px solid #3b63fb", radius: "16px", height: "30px", padding: "3px 16px 4px", font: "15px / 700", use: "Buy now — Spectrum 2 accent CTA on commerce surfaces" }
    button-pill-inverse: { type: button, bg: "#ffffff", fg: "#000000", border: "1px solid #ffffff", radius: "75px", height: "40px", padding: "0 24px", font: "14px / 700", use: "Free trial pill on dark hero imagery" }
    button-outline: { type: button, fg: "#292929", border: "2px solid #dadada", radius: "16px", height: "32px", padding: "6px 16px 8px", font: "14px / 700", use: "Sign in — secondary action on light chrome" }
    tab-audience: { type: tab, active: "text #131313 + bg #f8f8f8", disabled: "#686868 label", radius: "4px 4px 0px 0px", padding: "24px 32px 18px", font: "18px / 600", use: "Individuals / Business audience switcher on pricing" }
    card-tile: { type: card, bg: "#f3f3f3", fg: "#000000", radius: "16px", use: "Product category tile on homepage" }
    nav-link: { type: listItem, fg: "#ffffff", font: "14px / 700", use: "Global nav item on dark header" }
  components_harvested: true
---

# Design System Inspiration of Adobe

## 1. Visual Theme & Atmosphere

Adobe's web presence is a study in letting the work shout while the chrome whispers. The homepage is an almost monochrome frame — pure white (`#ffffff`) canvas, black (`#000000`) text, white-on-dark navigation — wrapped around enormous, saturated creative imagery and video. The single loudest brand element is the logo itself: the Adobe red A (`#eb1000`) sits in the corner like a signature, while the page's working accent colors stay neutral. Headlines land at a thunderous 80px in Adobe Clean Display Black (weight 900), the heaviest display cut of the company's proprietary typeface, declaring "Create at the highest level." over full-bleed artwork. The contrast strategy is binary: maximum-weight type, minimum-color UI.

Underneath the marketing layer runs Spectrum, Adobe's design system — now in its second generation. Spectrum 2 ("Rational. Human. Focused. Collaborative.") shows up live on commerce surfaces: the Creative Cloud pricing page renders its Buy-now CTAs in Spectrum 2's blue-900 accent (`#3b63fb`) as fully rounded 16px pills, with links in blue-1000 (`#274dea`) and a neutral gray ladder (`#131313` ink, `#292929` strong labels, `#686868` muted) pulled straight from the official `@adobe/spectrum-tokens` palette. The older Spectrum 1 accent blue (`#0265dc`) still renders on the spectrum.adobe.com documentation site — a visible artifact of a design system mid-migration, and a useful reminder that Adobe runs marketing chrome (red + black + white) and product chrome (Spectrum blue) as two coordinated but distinct registers.

The geometry is friendlier than you'd expect from a 40-year-old enterprise: pills everywhere (75px and 999px radii on marketing CTAs, 16px full-round on Spectrum 2 buttons), 16px-radius cards on soft gray tiles (`#f3f3f3`), and translucent glass quick-link cards floating over hero video. Shadows are nearly absent — separation comes from background tint shifts and hairlines (`#dadada`), with only a whisper of elevation (rgba(0,0,0,0.06)) on floating helpers. The total effect is confident, editorial, and deliberately unobtrusive: infrastructure for other people's creativity.

**Key Characteristics:**
- Adobe Clean as the single corporate typeface family — Display Black (900) for headlines, regular cuts for UI, Adobe Clean Serif on Spectrum docs, Source Code Pro for code
- Weight 900 at 80px as the marketing voice — the heaviest hero typography of any major design-tools brand
- Brand red (`#eb1000`) reserved for identity; interactive accents are Spectrum blue (`#3b63fb`)
- Two-register system: black/white marketing chrome vs. Spectrum-tokenized product chrome
- Pill geometry on all CTAs — 75px/999px marketing pills, 16px Spectrum 2 rounds
- Near-shadowless: tint shifts (`#f8f8f8`, `#f3f3f3`) and `#dadada` hairlines do the separating
- Full-bleed creative imagery and video as the actual "color palette" of every page
- Spectrum 2 tokens published openly as `@adobe/spectrum-tokens` on npm/GitHub

## 2. Color Palette & Roles

### Brand
- **Adobe Red** (`#eb1000`): The brand mark. Logo fill (`.cls-1{fill: #eb1000}` in the live SVG) and recurring marketing badge color — 15 background occurrences on the live homepage. Identity, not interaction: it is not used for buttons or links.
- **Black** (`#000000`): Primary heading and body text on marketing surfaces; also the text color on white pill CTAs.
- **Pure White** (`#ffffff`): Page canvas, nav text on dark headers, CTA pill fills, text on accent blue.

### Spectrum 2 Accent (product/commerce interactive)
- **Accent Blue / blue-900** (`#3b63fb`): The Spectrum 2 accent. Live "Buy now" CTA background on the Creative Cloud plans page (35 occurrences) and the official `blue-900` light value — rgb(59, 99, 251) — in `@adobe/spectrum-tokens` v14.
- **Link Blue / blue-1000** (`#274dea`): Hyperlinks and text buttons on commerce surfaces ("See terms."), matching official `blue-1000` rgb(39, 77, 234).
- **Legacy Spectrum 1 Blue** (`#0265dc`): The previous-generation accent (blue-800/900 in Spectrum 1), still rendering on spectrum.adobe.com component docs. Use only when reproducing classic Spectrum 1 product UI.

### Neutral Ladder (Spectrum gray, light theme)
- **Ink / gray-900** (`#131313`): Primary text on commerce surfaces, active tab labels.
- **Strong Label / gray-800** (`#292929`): Secondary button text, strong UI labels.
- **Body Slate** (`#2c2c2c`): Commerce body copy (live computed body color on plans page).
- **Muted / inactive** (`#686868`): Inactive tab labels, tertiary text.
- **Surface / gray-50** (`#f8f8f8`): Active tab fill, subtle panel backgrounds.
- **Surface Tile** (`#f3f3f3`): Homepage product-category tile background.
- **Hairline / gray-300** (`#dadada`): 2px outline-button borders, dividers — matches official `gray-300` rgb(218, 218, 218).

### Semantic & Promo
- **Promo Yellow / yellow-400** (`#f5c700`): "Best value" promotional flags on pricing cards — matches official `yellow-400` rgb(245, 199, 0).
- **Success / green-900** (`#05834e`): Positive semantic color from the official Spectrum 2 palette (rgb(5, 131, 78)).
- **Error / red-900** (`#d73220`): Negative semantic color from the official Spectrum 2 palette (rgb(215, 50, 32)) — deliberately distinct from brand red `#eb1000`.

## 3. Typography Rules

### Font Family
- **Marketing/UI**: `"Adobe Clean", adobe-clean, "Trebuchet MS", sans-serif` (live computed stack)
- **Display**: `Adobe Clean Display Black` for 900-weight headlines
- **Spectrum 2 token family**: `Adobe Clean Spectrum VF` (variable font, official `sans-serif-font-family` token); `Adobe Clean Serif` for docs display; `Source Code Pro` as the official `code-font-family`
- **CJK extension**: `adobe-clean-han-japanese` / "Adobe Clean Han" on international docs surfaces

### Hierarchy

| Role | Font | Size | Weight | Notes |
|------|------|------|--------|-------|
| Display Hero | Adobe Clean Display Black | 80px | 900 | Homepage hero H2s over imagery ("Create at the highest level.") |
| Display Section | Adobe Clean Display Black | 48px | 900 | Section heads, customer-quote pull text |
| Page Title | Adobe Clean | 36px | 700 | Commerce H1 ("Plans and pricing…") |
| Card Heading | Adobe Clean Display Black | 24px | 900 | Feature/product card heads ("Firefly") |
| Tab Label | Adobe Clean | 18px | 600 | Pricing audience tabs |
| Body Large | Adobe Clean | 18px | 400 / lh 27px | Commerce body copy |
| Body | Adobe Clean | 16px | 400 / lh 20px | Homepage body, card copy |
| Section Label | Adobe Clean | 16px | 700 | Eyebrow labels ("Adobe News") |
| Button / Nav | Adobe Clean | 14px | 700 | All CTAs and global nav links |
| Docs Display | adobe-clean-serif | 58px | 800 | Spectrum docs page titles |

### Principles
- **One family, total coverage**: Adobe Clean spans 900-weight display to 14px UI labels, plus Serif, Han, and variable (Spectrum VF) cuts. No second typeface ever appears.
- **Weight 900 is the marketing voice**: hero and section headlines always use Display Black. The brand shouts with weight, not color.
- **700 for everything interactive**: buttons, nav links, and eyebrows all sit at bold 14-16px — interaction is signaled by weight before color.
- **Commerce reads bigger**: body text steps up from 16px (marketing) to 18px/27 (pricing) where comprehension of terms matters.
- **Docs go serif**: Spectrum documentation uses adobe-clean-serif at 58px/800 for page titles — an editorial register reserved for the design system's own voice.

## 4. Component Stylings

### Buttons

**Spectrum 2 Accent (Buy now)**
- Background: `#3b63fb`
- Text: `#ffffff`
- Border: 2px solid `#3b63fb`
- Radius: 16px
- Padding: 3px 16px 4px
- Height: 30px
- Font: 15px / 700 / Adobe Clean
- Use: Primary purchase CTA on commerce surfaces (Creative Cloud plans)

**Inverse Pill (Free trial)**
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#ffffff`
- Radius: 75px
- Padding: 0px 24px
- Height: 40px
- Font: 14px / 700 / Adobe Clean
- Use: Hero CTAs on dark imagery ("Free trial", "Create with Firefly"); header "Sign in" uses the same white pill at 999px radius with 6px 16px 8px padding

**Ghost Pill (on dark)**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 75px
- Padding: 0px 24px
- Height: 40px
- Font: 14px / 700 / Adobe Clean
- Use: Secondary CTA over imagery ("See all products")

**Outline Secondary (Sign in, commerce)**
- Background: transparent
- Text: `#292929`
- Border: 2px solid `#dadada`
- Radius: 16px
- Padding: 6px 16px 8px
- Height: 32px
- Font: 14px / 700 / Adobe Clean
- Use: Secondary action on light commerce chrome

### Tabs

**Audience Tab (Pricing)**
- Active: text `#131313` + background `#f8f8f8`
- Inactive: text `#686868` on transparent
- Radius: 4px 4px 0px 0px
- Padding: 24px 32px 18px
- Font: 18px / 600 / Adobe Clean
- Use: Individuals / Business / Students & teachers switcher on the plans page — folder-tab metaphor, active tab fuses with the panel below

### Cards & Containers

**Category Tile**
- Background: `#f3f3f3`
- Text: `#000000`
- Radius: 16px
- Use: Large product-category tiles on the homepage ("Creativity and design", "Everything you need to make anything.")

**Glass Quick-Link Card**
- Background: rgba(0, 0, 0, 0.44)
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 12px 16px
- Shadow: rgba(255, 255, 255, 0.11) 0px 0px 0px 1px inset
- Use: Translucent quick-link cards floating over the hero video (the inset white hairline replaces a border)

### Badges

**Promo Flag (Best value)**
- Background: `#f5c700`
- Use: Yellow promotional flags on pricing cards (official Spectrum `yellow-400`)

### Navigation
- Dark translucent header over hero imagery; links and menu triggers in `#ffffff` at 14px / 700 Adobe Clean
- Commerce pages flip to light chrome: same 14px / 700 labels in `#292929`/`#131313` on white
- "App switcher" grid trigger at 5px radius, 32px square
- Floating assistant button ("Ask a question"): rgba(250,250,250,0.85) fill, 24px radius, 48px height, rgba(0,0,0,0.06) 0px 4px 12px shadow — one of the only shadows on the page

---
**Verified:** 2026-06-11
**Tier 1 sources:** https://www.adobe.com/ (live computed-style inspect); https://www.adobe.com/creativecloud/plans.html (live inspect, commerce surface); https://spectrum.adobe.com/page/button/ + https://spectrum.adobe.com/page/principles/ (official DS docs, live); https://s2.spectrum.adobe.com/ (Spectrum 2 announcement site, live); @adobe/spectrum-tokens v14.13.0 (official npm token package, color-palette/typography/layout JSON)
**Tier 2 sources:** none available (getdesign.md/adobe and getdesign.md/spectrum both return "No designs found"; styles.refero.design searched ?q=adobe, ?q=adobe.com, ?q=photoshop — Adobe not listed)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px/8px rhythm
- Observed scale: 4px, 8px, 12px, 16px, 24px, 32px, 64px
- Card internal padding: 12px 12px 16px (quick-links); tab padding 24px 32px 18px — generous top-loading for the folder-tab metaphor

### Grid & Container
- Full-bleed hero blocks: edge-to-edge video/imagery with headline + CTA overlaid bottom-left
- Homepage alternates full-bleed dark sections with white sections holding 16px-radius tile grids
- Pricing: centered single column, H1 at 36px, tabbed plan matrix beneath
- Quick-link card row floats over the hero — a glass dock of entry points (Creativity and design / Content creation / PDF and document essentials)

### Whitespace Philosophy
- **Imagery is the layout**: sections are sized by their artwork, not by text. Copy occupies a disciplined corner of each full-bleed canvas.
- **Two densities**: marketing surfaces are vast and cinematic; commerce surfaces (plans matrix) are dense, tabular, and 18px-readable.
- **Separation by tint, not line**: white → `#f3f3f3` → `#f8f8f8` shifts segment content; hairlines appear only inside components (outline buttons, dividers).

### Border Radius Scale
- Small (4px): folder-tab tops (4px 4px 0px 0px), legacy Spectrum 1 components
- Medium (8px): glass quick-link cards
- Large (16px): tiles, Spectrum 2 buttons (full-round at component height), modals
- Pill (75px / 999px): every marketing CTA and header button

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Nearly everything: heroes, tiles, tabs, buttons |
| Tint (Level 1) | `#f8f8f8` / `#f3f3f3` background shift | Section and panel separation |
| Hairline (Level 2) | 2px solid `#dadada`; inset rgba(255,255,255,0.11) ring on glass | Outline buttons; glass-card edge |
| Float (Level 3) | rgba(0,0,0,0.06) 0px 4px 12px | Floating assistant button, sticky helpers |

**Shadow Philosophy**: Adobe's marketing system is effectively shadowless — live inspection found `box-shadow: none` on virtually every button, card, and headline. Depth is communicated by photographic imagery itself (the artwork has its own depth of field) and by translucency: the glass quick-link dock (rgba(0,0,0,0.44) over video) reads as a floating layer without a single drop shadow. The one genuine elevation — a soft rgba(0,0,0,0.06) blur on the floating "Ask a question" pill — is reserved for UI that must visibly sit above scrolling content. The discipline mirrors Spectrum's "Focused" principle: no unnecessary decoration.

## 7. Do's and Don'ts

### Do
- Use Adobe Clean for everything; reach for Display Black (900) on headlines
- Reserve Adobe red (`#eb1000`) for the brand mark and identity moments only
- Use Spectrum 2 blue (`#3b63fb`) for primary interactive accents in product/commerce UI
- Use white pill CTAs (75px+ radius, 14px/700) over dark imagery
- Separate sections with tint shifts (`#f3f3f3`, `#f8f8f8`) and `#dadada` hairlines, not shadows
- Let full-bleed imagery and video carry the color; keep UI chrome black/white/gray
- Use the official Spectrum gray ladder (`#131313`, `#292929`, `#686868`) for text hierarchy
- Round Spectrum 2 components fully (16px at standard heights)

### Don't
- Use Adobe red as a button or link color — interaction is Spectrum blue, identity is red
- Mix Spectrum 1 (`#0265dc`, 4px corners) and Spectrum 2 (`#3b63fb`, 16px pills) values in one surface
- Add drop shadows to cards or buttons — the system separates with tint and translucency
- Set headlines below weight 900 on marketing surfaces — Display Black is the voice
- Introduce a second typeface — Adobe Clean covers display, body, serif, code-adjacent and CJK
- Use error red (`#d73220`) and brand red (`#eb1000`) interchangeably — they are different tokens with different jobs
- Crowd the hero with copy — one headline, one line of support text, one or two pill CTAs

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Single column; hero type compresses; Spectrum mobile type scale (fonts step up ~1.25×: 14→17px, 16→19px per official tokens) |
| Tablet | 600-1024px | 2-up tile grids, condensed nav |
| Desktop | 1024px+ | Full-bleed heroes, multi-column tile and pricing grids |

### Touch Targets
- Marketing pills at 40px height with 24px horizontal padding
- Tabs carry oversized 24px top padding — comfortably tappable
- Spectrum tokens define a dedicated mobile scale (larger type, larger hit areas) rather than scaling desktop down

### Collapsing Strategy
- Hero: 80px Display Black steps down; weight 900 is maintained at all sizes
- Quick-link glass dock: horizontal row → stacked/scrollable cards
- Pricing tabs: horizontal scroll with edge arrows ("Scroll tabs to left" affordance is in the live DOM)
- Plan cards: multi-column matrix → stacked cards with persistent Buy-now pills

### Image Behavior
- Full-bleed video/imagery crops rather than letterboxes; copy stays anchored to its corner
- Tiles keep 16px radius at all sizes
- Glass cards maintain translucency over moving video on every breakpoint

## 9. Agent Prompt Guide

### Quick Color Reference
- Brand mark: Adobe Red (`#eb1000`) — identity only
- Primary product CTA: Spectrum 2 Blue (`#3b63fb`)
- Link: Blue-1000 (`#274dea`)
- Canvas: White (`#ffffff`)
- Heading: Black (`#000000`) / Ink (`#131313`)
- Body: Slate (`#2c2c2c`)
- Muted: (`#686868`)
- Surfaces: (`#f8f8f8`, `#f3f3f3`)
- Hairline: (`#dadada`)
- Promo: Yellow (`#f5c700`); Success (`#05834e`); Error (`#d73220`)

### Example Component Prompts
- "Create a full-bleed dark hero: background photo/video, headline 80px Adobe Clean Display Black weight 900 in #ffffff, bottom-left aligned. Two pill CTAs: solid white (#ffffff bg, #000000 text, 75px radius, 40px height, 14px/700) and ghost (transparent, 1px solid #ffffff border, white text, same geometry)."
- "Design a Spectrum 2 primary button: #3b63fb background, #ffffff text, 16px radius (full round at 30px height), 3px 16px 4px padding, 15px/700 Adobe Clean. Secondary: transparent with 2px solid #dadada border, #292929 text, 16px radius."
- "Build a pricing tab bar: folder tabs with 4px 4px 0 0 radius, 24px 32px 18px padding, 18px/600. Active tab: #131313 text on #f8f8f8. Inactive: #686868 on transparent."
- "Create a homepage product tile: #f3f3f3 background, 16px radius, no shadow, no border. Card heading 24px Adobe Clean Display Black 900 in #000000, body 16px/400, bold 14px/700 text link."
- "Design a glass quick-link card over imagery: rgba(0,0,0,0.44) background, 8px radius, 12px 12px 16px padding, white 16px text, inset 1px rgba(255,255,255,0.11) ring instead of a border."

### Iteration Guide
1. Adobe Clean everywhere; Display Black (900) for any headline
2. Red `#eb1000` = logo; blue `#3b63fb` = action; never swap them
3. Marketing buttons are pills (75px+); Spectrum 2 product buttons are 16px full-rounds
4. No shadows — tint shifts and hairlines separate; translucency floats
5. Gray ladder from official tokens: `#131313` → `#292929` → `#686868` → `#dadada` → `#f8f8f8`
6. Imagery is the decoration; UI chrome stays monochrome
7. Pricing/commerce body at 18px; marketing body at 16px

---

## 10. Voice & Tone

Adobe's marketing voice is short, declarative, and aspirational — headline sentences of four to seven words that put the user's creative output (not the software) in the subject position. "Create at the highest level." It avoids feature-speak in heroes entirely, pushing specifics down into card copy. The register is confident without being technical, warm without being cute; punctuation is full sentences with periods, even in CTAs' supporting text. Product names (Photoshop, Firefly, Express, Acrobat) do the concrete work while the surrounding language stays about possibility.

| Context | Tone |
|---|---|
| Hero headlines | Imperative or superlative-adjacent declarations. "Create at the highest level." Period always included. |
| Product cards | Name + plain capability. "Firefly — Create and enhance images, videos…" |
| CTAs | Two-word imperatives: "Free trial", "Buy now", "Create with Firefly", "See all products". |
| Pricing/legal | Sober, complete sentences; "See terms." links everywhere a price appears. |
| Spectrum docs | Peer-to-peer, principle-led, plain. "No unnecessary decoration or irrelevant content." |
| About/corporate | Mission-forward, inclusive. "Empowering everyone to create." |

**Voice samples (verbatim, live 2026-06-11):**
- "Create at the highest level." — homepage hero H2 *(live inspect 2026-06-11)*
- "All the best models, all in one place." — homepage Firefly hero H2 *(live inspect 2026-06-11)*
- "Everything you need to make anything." — homepage section H2 *(live inspect 2026-06-11)*
- "Empowering everyone to create." — about-adobe.html headline *(live 2026-06-11)*

**Forbidden register**: jargon-led heroes ("industry-leading AI-powered solutions" as a headline), exclamation marks, hedging ("we think you might like"), and tech-spec language on marketing surfaces.

## 11. Brand Narrative

Adobe was founded in **December 1982** by **John Warnock** and **Charles Geschke**, two Xerox PARC scientists who left to commercialize PostScript — the page-description language that made the desktop-publishing revolution physically printable — and named the company after Adobe Creek, which ran behind Warnock's home in Los Altos. Four decades later the through-line is unchanged: Adobe builds the substrate other people create on. PostScript begat PDF, Illustrator and Photoshop begat Creative Cloud, and the current era adds Firefly generative AI — with the company stating it trains Firefly "on data that allows us to offer customers a solution designed to be commercially safe" (about-adobe.html, live 2026-06-11).

The stated mission today: "Adobe empowers everyone, everywhere to imagine, create, and bring any digital experience to life" — compressed on the about page to the three-word register of the design itself, "Empowering everyone to create." The company organizes its world into three clouds (Creative, Document, Experience) plus Adobe Express, and measures itself in creator-scale numbers: 29 billion+ Firefly images generated, 700 million+ Adobe Stock assets, 50 million+ Behance members.

The design system carries the philosophy explicitly. Spectrum's stated principles — Rational, Human, Focused — were extended in Spectrum 2 with a fourth, Collaborative: "The future is built collectively." The Spectrum 2 site frames the redesign in human terms rather than visual ones: "more modern, more friendly, more accessible, and more enjoyable to use," and most tellingly, "The biggest change in Spectrum is... all of the little things." What Adobe refuses, visibly: decoration for its own sake (shadowless UI, monochrome chrome), and using its own brand color where the user's content should dominate. What it embraces: typographic confidence, open tokens (`@adobe/spectrum-tokens` published on npm), and a system explicitly designed to "belong to everyone."

## 12. Principles

1. **Rational.** "Spectrum is based on real-world situations. Every component, pattern, and principle is informed by research and thoughtful testing." (spectrum.adobe.com/page/principles, live 2026-06-11). *UI implication:* no speculative variants — every component spec ships with a use case, and values come from tokens, not eyeballing.
2. **Human.** "Spectrum places customer needs first. It's deeply committed to a high standard of accessibility, honesty, and respect for user attention." *UI implication:* WCAG-compliant contrast on every pairing, visible focus states, a dedicated mobile type scale (14→17px) rather than shrunken desktop UI, and a reduce-motion toggle (present on s2.spectrum.adobe.com itself).
3. **Focused.** "Spectrum strives to deliver what's needed, when it's needed. No unnecessary decoration or irrelevant content." *UI implication:* shadowless surfaces, monochrome chrome, one accent color per register; imagery carries the emotion so the UI doesn't have to.
4. **Collaborative (Spectrum 2).** "The future is built collectively… it belongs to everyone." *UI implication:* design with tokens, not hardcodes — the system is consumed by hundreds of Adobe products and published openly; an interface styled with `@adobe/spectrum-tokens` values stays upgrade-compatible.
5. **Brand recedes, work leads.** Adobe red appears exactly once per page — the logo. *UI implication:* never use `#eb1000` for interactive elements; let user content and product imagery be the loudest pixels on screen.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Adobe user segments (creative professionals, freelance designers, students on Express, enterprise product teams building on Spectrum), not individual people.*

**Renata Oliveira, 34, São Paulo.** Senior brand designer at an agency, fifteen years in Photoshop and Illustrator. Lives in Creative Cloud daily and evaluates every Adobe redesign by one test: does it stay out of the way of her canvas. Appreciates that the new Spectrum 2 chrome got friendlier without getting louder.

**Dae-ho Im, 21, Daejeon.** University student making club posters and reels in Adobe Express on a student plan. Never read a manual; expects the pricing page tabs (Individuals / Students) to get him to the right plan in two clicks and the yellow "best value" flag to be honest.

**Priya Raghavan, 41, Bengaluru.** Principal engineer on an enterprise team that builds internal tools on React Spectrum. Consumes `@adobe/spectrum-tokens` directly, tracks the S2 migration timeline, and cares that blue-900 means the same thing in design files and production CSS.

**Marcus Feld, 52, Berlin.** Marketing operations lead standardizing his company on Acrobat and Experience Cloud. Doesn't think about design systems at all — he thinks the pricing matrix is scannable and the "See terms." links mean legal won't be surprised. That is the design working.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no files/projects)** | White canvas, one Ink (`#131313`) sentence naming the next action, one accent (`#3b63fb`) pill CTA. The tone mirrors hero copy: what you can make, not what is missing. |
| **Empty (search, no results)** | Muted (`#686868`) single line with the query echoed back and a path to broaden; no illustration noise. |
| **Loading (page/panel)** | Skeleton blocks in `#f3f3f3`/`#f8f8f8` at final dimensions, 16px radius, flat pulse — no shimmer gradients on a shadowless system. |
| **Loading (in-place action)** | Button label swaps to progress indicator inside the same pill; geometry never changes. |
| **Error (form/field)** | Field-level message in error red (`#d73220` — the Spectrum token, never brand `#eb1000`), 2px border on the offending input, text stating what would be valid. |
| **Error (system/page)** | Inline panel on `#f8f8f8` with a plain-language sentence and one retry action; no stack traces, no "Something went wrong" alone. |
| **Success (purchase/save)** | Inline confirmation with success green (`#05834e`) icon + sentence-case past-tense copy; next step linked immediately ("Open in Photoshop"). |
| **Skeleton** | Tint blocks at final size; text skeletons match the heavy display proportions so 900-weight headlines don't reflow on arrival. |
| **Disabled** | Label and surface fade together toward the gray ladder (`#686868` text); accent pills lose saturation but stay blue — never turn gray entirely, preserving the action's identity. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus ring, pill press |
| `motion-standard` | 200ms | Tab switch, card reveal, dropdown |
| `motion-slow` | 320ms | Hero media crossfade, section transitions |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving panels, cards |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion at Adobe is carried by content, not chrome — heroes autoplay video (with an explicit "Pause" control in the live DOM, an accessibility commitment), while UI transitions stay quick and unobtrusive. Carousels page with simple horizontal slides; tabs swap panels with a fade, never a bounce. The Spectrum 2 site ships a first-class "Reduce motion" toggle (observed live), and `prefers-reduced-motion: reduce` collapses transitions to instant and halts autoplaying media. No spring or overshoot anywhere: tools for professionals signal steadiness. (Token names and curves above are illustrative defaults consistent with observed behavior; Spectrum's internal motion token values are not publicly documented on the inspected pages.)

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspection (2026-06-11), playwright getComputedStyle + innerText:
- https://www.adobe.com/ — hero H2s ("Create at the highest level.", "All the best
  models, all in one place.", "Get work done. Faster.", "Everything you need to make
  anything."), Adobe Clean stack, 80px/900 display, pill CTAs, #eb1000 logo fill.
- https://www.adobe.com/creativecloud/plans.html — Spectrum 2 commerce chrome
  (#3b63fb Buy now, #274dea links, #131313/#2c2c2c/#686868 grays, tabs, #f5c700 flags).
- https://spectrum.adobe.com/page/principles/ — verbatim principles: "Rational",
  "Human", "Focused" with full supporting sentences quoted in §12.
- https://s2.spectrum.adobe.com/ — Spectrum 2 confirmation: "Rational. Human. Focused.
  Collaborative.", "The future is built collectively", "more modern, more friendly,
  more accessible, and more enjoyable to use", "The biggest change in Spectrum is...
  all of the little things", reduce-motion toggle.
- https://www.adobe.com/about-adobe.html — "Empowering everyone to create.",
  mission sentence "Adobe empowers everyone, everywhere to imagine, create, and bring
  any digital experience to life.", Firefly "commercially safe" statement, scale
  numbers (29B+ Firefly images, 700M+ Stock assets, 50M+ Behance members).
- @adobe/spectrum-tokens v14.13.0 (npm) — official token values: blue-900
  rgb(59,99,251), blue-1000 rgb(39,77,234), gray ladder, red-900 rgb(215,50,32),
  green-900 rgb(5,131,78), yellow-400 rgb(245,199,0), corner-radius scale (4–16px),
  "Adobe Clean Spectrum VF" / "Adobe Clean Serif" / "Source Code Pro" families,
  desktop/mobile font-size sets.

Widely documented public facts used without same-turn verification: founding (1982,
John Warnock, Charles Geschke, ex-Xerox PARC, PostScript, named after Adobe Creek).

Personas (§13) are fictional archetypes; names do not refer to real people.
Motion token values (§15) are illustrative defaults, marked as such inline.
Interpretive claims (e.g., "brand recedes, work leads", "two-register system") are
editorial readings connecting observed design to stated principles.
-->
