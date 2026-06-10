---
id: microsoft
name: Microsoft
country: US
category: consumer-tech
homepage: "https://www.microsoft.com"
primary_color: "#0078d4"
logo:
  type: github
  slug: microsoft
verified: "2026-06-11"
added: "2026-06-11"
omd: "0.1"
ds:
  name: Fluent 2
  url: "https://fluent2.microsoft.design"
  type: system
  description: "Microsoft's cross-platform design system — Segoe UI type ramp, brand color ramps, motion/curve tokens, and component guidance for web, Windows, iOS, and Android."
tokens:
  source: reconciled
  extracted: "2026-06-11"
  note: "primary = live microsoft.com CTA Communication Blue (#0078d4); legacy nav-era blue (#0067b8) persists on hero chips; Fluent 2 web brand-80 (#0f6cbd) is the DS-documented brand anchor."
  colors:
    primary: "#0078d4"
    primary-legacy: "#0067b8"
    fluent-brand: "#0f6cbd"
    secondary: "#b3daf0"
    ink: "#0e1726"
    body: "#17253d"
    nav-ink: "#262626"
    muted: "#616161"
    on-dark: "#f4fafd"
    canvas: "#ffffff"
    card: "#fefefe"
    surface: "#f2f2f2"
    tint-blue: "#dceef8"
    chip-tint: "#e6effd"
    chip-ink: "#2a446f"
    accent-yellow: "#ffb900"
    on-primary: "#ffffff"
  typography:
    family: { sans: "Segoe UI Variable Text", ds: "Segoe UI" }
    display-hero: { size: 48, weight: 500, lineHeight: 1.17, tracking: -0.48, use: "Homepage hero H1/H2, medium weight" }
    title:        { size: 32, weight: 600, lineHeight: 1.25, tracking: -0.48, use: "Large section heads, support panel" }
    section:      { size: 20, weight: 600, lineHeight: 1.40, tracking: -0.48, use: "Card titles, product names" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, tracking: -0.48, use: "Standard reading text" }
    cta:          { size: 15, weight: 600, lineHeight: 1.33, use: "Button labels" }
    nav:          { size: 13, weight: 400, use: "Global header nav links" }
    footer:       { size: 11, weight: 400, use: "Footer legal links" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }
  rounded: { sm: 4, md: 8, lg: 16, xl: 24, full: 9999 }
  shadow:
    cta: "rgba(0,0,0,0.12) layered button shadow"
    card: "rgba(0,0,0,0.13) 0px 3px 7px 0px, rgba(0,0,0,0.11) 0px 1px 2px 0px"
  components:
    button-primary: { type: button, bg: "#0078d4", fg: "#ffffff", radius: "8px", padding: "8px 16px", height: "40px", font: "15px / 600 Segoe UI", use: "Primary CTA — Shop now, Learn more, Sign up now" }
    button-secondary: { type: button, bg: "#b3daf0", fg: "#0e1726", radius: "8px", padding: "12px 17px", height: "48px", font: "15px / 600 Segoe UI", use: "Hero secondary CTA on photography" }
    button-outline: { type: button, fg: "#f4fafd", border: "2px solid #b3daf0", radius: "8px", padding: "7px 12px", height: "40px", font: "15px / 600 Segoe UI", use: "Ghost action on dark/photo surfaces (No thanks)" }
    chip-suggestion: { type: badge, bg: "#e6effd", fg: "#2a446f", border: "1px solid #2a446f", radius: "16px", height: "32px", padding: "4px 12px", font: "15px / 400 Segoe UI", use: "AI/search suggestion pill chips" }
    card-product: { type: card, bg: "#fefefe", radius: "16px", use: "Product/feature card, near-white on white canvas" }
    nav-link: { type: tab, fg: "#262626", font: "13px / 400 Segoe UI", active: "text #0067b8 underline on hover/active", use: "Global header navigation" }
  components_harvested: true
---

# Design System Inspiration of Microsoft

## 1. Visual Theme & Atmosphere

Microsoft's web presence is the consumer face of Fluent 2 — a calm, photographic, blue-anchored system that has to sell laptops, game consoles, AI assistants, and cloud subscriptions in one continuous scroll without ever feeling like four different companies. The canvas is white (`#ffffff`) with near-white product cards (`#fefefe`), and almost all chrome defers to large lifestyle photography; color arrives through one disciplined channel: Communication Blue (`#0078d4`) on every primary call-to-action. Headings sit in a deep blue-black ink (`#0e1726`) and body copy in a slightly lifted navy slate (`#17253d`), so even the neutrals carry a faint cool-blue cast — the whole page reads "Microsoft blue" before a single logo appears.

Typography is pure Segoe: the live site renders in **Segoe UI Variable Text**, the optically-tuned evolution of Segoe UI, which Microsoft's own typography documentation describes as "a clear, readable sans serif typeface with an open, neutral look" and which has been the company's default UI font since Windows Vista (2007). Hero headlines run 48px at weight 500 — deliberately medium, not bold — with a uniform `-0.48px` letter-spacing that is applied across the entire page, headlines and body alike. Section and card titles drop to 20px semibold (600), the workhorse weight of the Fluent 2 type ramp. The result is an even, low-drama typographic texture: friendly, legible, and corporate in the best sense.

The geometry is Fluent 2's soft-rectangle language. Buttons take an 8px radius, cards and suggestion chips 16px, larger media containers 24px — a clean doubling scale that matches Fluent's documented `borderRadiusXLarge`/`borderRadius3XLarge`/`borderRadius4XLarge` tokens. Depth is shallow and pragmatic: CTAs carry a barely-there layered `rgba(0,0,0,0.12)` shadow and product cards a soft two-layer lift; most separation comes from the photography itself and from quiet tinted bands of ice blue (`#dceef8`). It is a system engineered for trust at planetary scale — nothing experimental, everything familiar, "unmistakably Microsoft."

**Key Characteristics:**
- One action color: Communication Blue (`#0078d4`) on virtually every primary CTA, white text, 8px radius
- Segoe UI Variable Text everywhere — weight 500 heroes, 600 section heads, 400 body
- Uniform `-0.48px` letter-spacing across the whole marketing surface
- Blue-cast neutrals: ink `#0e1726`, body `#17253d` — never pure black for reading text
- Soft-rectangle radius doubling: 8px buttons → 16px cards/chips → 24px media
- Photography-first layout; UI chrome stays white/near-white and recedes
- Light-blue secondary system (`#b3daf0` fills, 2px outlines) for paired CTAs on imagery
- Legacy blue `#0067b8` still alive on nav links and hero chip buttons — two blues coexisting

## 2. Color Palette & Roles

### Primary
- **Communication Blue** (`#0078d4`): The primary action color. Background of every "Shop now" / "Learn more" / "Sign up now" CTA across home and store surfaces, with white text. The single most recognizable Microsoft UI color.
- **Legacy Microsoft Blue** (`#0067b8`): The previous-generation web blue. Survives on global nav link states and the hero suggestion chip buttons ("Which PC is right for me?"). Slightly deeper than Communication Blue.
- **Fluent Brand 80** (`#0f6cbd`): The Fluent 2 design system's documented web brand anchor (`brandWeb[80]` in the official `microsoft/fluentui` tokens package). Used across Fluent-built product UI rather than the marketing site.

### Secondary & Accent
- **Powder Blue** (`#b3daf0`): Secondary CTA fill on hero photography ("Shop now" beside a primary), and the 2px outline of ghost buttons on dark imagery.
- **Ice Tint** (`#dceef8`): Pale blue tinted band backgrounds that section the page without borders.
- **Chip Tint** (`#e6effd`): Background of suggestion pill chips on the store surface.
- **Chip Navy** (`#2a446f`): Text and 1px border of those suggestion chips — a muted slate-navy.
- **Microsoft Yellow** (`#ffb900`): The heritage four-square yellow, appearing sparingly as a rating/accent color. (The logo's red, green, blue, yellow quartet stays in the logo — it never becomes UI chrome.)

### Text & Ink
- **Heading Ink** (`#0e1726`): H1/H2 headings — a deep blue-black, not pure black.
- **Body Navy** (`#17253d`): Default body text (16px/24px). The most frequent text color on the page.
- **Nav Graphite** (`#262626`): Global header nav links at 13px.
- **Muted Gray** (`#616161`): Footer links and secondary metadata.
- **On-Dark White** (`#f4fafd`): Text color on photographic/dark hero panels — a faintly blue-tinted white rather than pure white.

### Surfaces
- **Canvas White** (`#ffffff`): Page background, button text on blue.
- **Card White** (`#fefefe`): Near-white product card surface — the most frequent non-transparent background on the homepage.
- **Footer Gray** (`#f2f2f2`): Footer and utility band background, with `#616161` link text.

## 3. Typography Rules

### Font Family
- **Live site**: `"Segoe UI Variable Text", "SegoeUI Fallback", -apple-system, ...` — the variable-font evolution of Segoe UI.
- **Design system / docs**: `"Segoe UI", "Segoe UI Web (West European)", ...` — Fluent 2 specifies Segoe UI on web, Segoe UI Variable on Windows, SF Pro on Apple platforms, Roboto on Android ("natural on every platform").
- **Provenance**: Segoe was designed by Steve Matteson "to be a friendly, readable sans serif typeface for all corporate applications" and became Microsoft's default UI font with Windows Vista in 2007 (learn.microsoft.com typography docs). Twelve styles ship, from Light to Black.

### Hierarchy (live microsoft.com, measured)

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Segoe UI Variable Text | 48px | 500 | 56px (1.17) | -0.48px | Hero H1/H2 — medium, not bold |
| Title | Segoe UI Variable Text | 32px | 600 | 40px (1.25) | -0.48px | Large section heads ("Hi there. How can we help?") |
| Store Title | Segoe UI Variable Text | 32px | 700 | — | — | Store page H1 only |
| Section / Card Title | Segoe UI Variable Text | 20px | 600 | 28px (1.40) | -0.48px | Product card headings |
| Body | Segoe UI Variable Text | 16px | 400 | 24px (1.50) | -0.48px | Standard reading text |
| CTA Label | Segoe UI Variable Text | 15px | 600 | 20px | — | All button labels |
| Chip Label | Segoe UI Variable Text | 15px | 400 | — | — | Suggestion chips |
| Nav Link | Segoe UI Variable Text | 13px | 400 | — | — | Global header |
| Footer Link | Segoe UI Variable Text | 11px | 400 | — | — | Footer legal/utility |

### Fluent 2 web type ramp (official DS reference)

| Token | Size / Line height | Weight |
|---|---|---|
| Caption 1 | 12px / 16px | Regular |
| Body 1 | 14px / 20px | Regular |
| Subtitle 2 | 16px / 22px | Semibold |
| Subtitle 1 | 20px / 26px | Semibold |
| Title 3 | 24px / 32px | Semibold |
| Title 1 | 32px / 40px | Semibold |
| Large Title | 40px / 52px | Semibold |
| Display | 68px / 92px | Semibold |

### Principles
- **Medium-weight heroes**: 48px at weight 500 — Microsoft reserves 600 for smaller heads and rarely uses 700 outside the store H1. Authority through evenness, not weight.
- **One tracking value**: `-0.48px` is applied globally rather than scaled per size — an unusually uniform choice that flattens the typographic texture.
- **Semibold is the system bold**: Per the Fluent ramp, emphasis is Semibold (600) everywhere; true Bold appears only in legacy store chrome.
- **Two-font reality**: marketing runs Segoe UI Variable Text; Fluent product UI runs Segoe UI/Segoe UI Variable per platform. Same family, one voice.

## 4. Component Stylings

### Buttons

**Primary (Communication Blue)**
- Background: `#0078d4`
- Text: `#ffffff`
- Radius: 8px
- Padding: 8px 16px
- Height: 40px
- Font: 15px / 600 / Segoe UI Variable Text
- Shadow: layered `rgba(0,0,0,0.12)`
- Use: Every primary CTA — "Shop now", "Learn more", "Get started with Azure", "Download Visual Studio"

**Hero Primary (large)**
- Background: `#0078d4`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 17px
- Height: 48px
- Font: 15px / 600 / Segoe UI Variable Text
- Use: Hero banner CTAs ("See offer") — same recipe, one size up

**Secondary (Powder Blue)**
- Background: `#b3daf0`
- Text: `#0e1726`
- Radius: 8px
- Padding: 12px 17px
- Height: 48px
- Font: 15px / 600 / Segoe UI Variable Text
- Use: Paired secondary CTA on hero photography ("Shop now" beside primary, "Chat now")

**Outline on Dark**
- Background: transparent
- Text: `#f4fafd`
- Border: 2px solid `#b3daf0`
- Radius: 8px
- Padding: 7px 12px
- Height: 40px
- Font: 15px / 600 / Segoe UI Variable Text
- Use: Ghost/decline action on photographic panels ("No thanks")

**Legacy Blue Chip**
- Background: `#0067b8`
- Text: `#ffffff`
- Border: 1px solid `#ffffff`
- Radius: 16px
- Padding: 4px 12px
- Height: 32px
- Font: 15px / 400 / Segoe UI Variable Text
- Use: Conversational prompt chips on home hero ("Which PC is right for me?", "How can AI help my business?")

### Badges & Chips

**Suggestion Chip (Store)**
- Background: `#e6effd`
- Text: `#2a446f`
- Border: 1px solid `#2a446f`
- Radius: 16px
- Padding: 4px 12px
- Height: 32px
- Font: 15px / 400 / Segoe UI Variable Text
- Use: Query suggestion pills ("Consoles under $500", "Trade-in offers")

### Cards & Containers

**Product Card**
- Background: `#fefefe`
- Radius: 16px
- Shadow: `rgba(0,0,0,0.13) 0px 3px 7px 0px, rgba(0,0,0,0.11) 0px 1px 2px 0px`
- Use: Product/feature cards — 20px/600 title, 16px/400 body, blue CTA bottom-left

**Media Container**
- Radius: 24px
- Use: Large hero/photography containers and immersive panels

### Inputs

**Support Search**
- Background: transparent on panel
- Text: `#17253d`
- Font: 16px / 400 / Segoe UI Variable Text
- Use: "Ask a question" support input on home and store surfaces

### Navigation

**Global Header Link**
- Text: `#262626`
- Font: 13px / 400 / Segoe UI Variable Text
- Padding: 0px 8px
- Height: 54px row
- Hover: underline, `#0067b8` accent
- Use: Top utility nav ("Microsoft 365", "Azure", "Copilot", "Windows", "Surface", "XBOX")

### Footer

**Footer Link**
- Background: `#f2f2f2` band
- Text: `#616161`
- Font: 11px / 400 / Segoe UI Variable Text
- Use: Legal/utility footer navigation

---
**Verified:** 2026-06-11
**Tier 1 sources:** https://www.microsoft.com/en-us/ (live inspect), https://www.microsoft.com/en-us/store/b/sale (live inspect, second surface), https://fluent2.microsoft.design (Fluent 2 DS docs — typography ramp, color system, design principles; live inspected), https://github.com/microsoft/fluentui (official tokens package — brand ramps, radius, duration/curve tokens), https://learn.microsoft.com/en-us/typography/font-list/segoe-ui (official Segoe UI typography doc)
**Tier 2 sources:** getdesign.md/microsoft — no entry ("No designs found"); styles.refero.design/style/c70a9990-bc4b-4a64-a69b-aeb7b344fb74 (Microsoft retail catalog snapshot)
**Conflicts unresolved:** none — refero's `#0067b8` / 2px-radius / 0px-card spec is a legacy-era snapshot; live 2026-06-11 inspect shows `#0078d4` / 8px buttons / 16px cards and wins per Tier-1-priority rule (matrix in `.verification.md`)

## 5. Layout Principles

### Spacing System
- Base unit: 8px (Fluent 2 documented base)
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px
- CTA padding lands on 8px 16px (standard) and 12px 17px (hero) — the 17px is a measured live quirk of the hero size

### Grid & Container
- Full-bleed hero banners with photography; content constrained to a centered max-width (~1200px on legacy store chrome, wider on the current home)
- Product cards in 3–4 column responsive grids, each card self-contained: image, 20px/600 title, 16px body, blue CTA
- Alternating full-width bands: white canvas → photographic panel → ice-blue `#dceef8` tinted band
- Global header is a slim 54px utility bar; commerce ("cart") and identity ("ME" avatar) live on the right

### Whitespace Philosophy
- **Photography carries the weight**: layout chrome is minimal so lifestyle imagery can sell; whitespace frames photos rather than replacing them.
- **Card-internal density**: cards are compact and information-complete; the grid gap, not card padding, provides air.
- **Band rhythm**: the page scrolls as a sequence of self-contained promotional bands — each one hero-image + headline + CTA — rather than one continuous narrative.

### Border Radius Scale
- Small (4px): minor UI elements
- Standard (8px): all buttons — the workhorse
- Large (16px): cards, suggestion chips, prompt chips
- XLarge (24px): media containers, immersive panels
- Circular: avatar button (50%), pill elements
- Matches Fluent 2's documented scale (`borderRadiusMedium` 4px → `borderRadiusXLarge` 8px → `borderRadius3XLarge` 16px → `borderRadius4XLarge` 24px → `borderRadiusCircular`)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, nav, text, tinted bands |
| CTA (Level 1) | layered `rgba(0,0,0,0.12)` | Primary/secondary buttons — barely perceptible lift |
| Card (Level 2) | `rgba(0,0,0,0.13) 0px 3px 7px 0px, rgba(0,0,0,0.11) 0px 1px 2px 0px` | Product cards |
| Photographic | Imagery contrast | Hero panels create depth through photo lighting, not shadow |

**Shadow Philosophy**: Microsoft's marketing surface uses shadow as punctuation, not architecture. The two-layer card shadow (a Fluent signature: one tight 1px-offset layer + one diffuse 3px layer) is the deepest elevation on the page; everything else is flat or relies on the photography itself for spatial depth. Fluent 2's elevation guidance reserves stronger shadows for product UI layers (dialogs, flyouts) — on the consumer web they are intentionally quiet so the hardware photography stays the hero. Tinted bands (`#dceef8`) and the near-white card surface (`#fefefe` on `#ffffff`) do most of the separation work at almost zero contrast cost.

## 7. Do's and Don'ts

### Do
- Use Communication Blue (`#0078d4`) for every primary CTA — one action color, white text, 8px radius
- Set headlines in Segoe UI (Variable) at weight 500–600 — semibold is the system's maximum emphasis
- Apply the uniform `-0.48px` letter-spacing across headings and body
- Use blue-cast neutrals: `#0e1726` headings, `#17253d` body — never pure black for reading text
- Follow the radius doubling: 8px buttons, 16px cards/chips, 24px media containers
- Pair a powder-blue secondary (`#b3daf0`, ink text) with the primary on photographic heroes
- Keep card shadows to the quiet two-layer Fluent recipe
- Let photography carry the page; keep UI chrome white and recessive

### Don't
- Introduce a second saturated action color — blue is the only imperative
- Use the logo's red/green/yellow quartet as UI chrome — it stays in the logo (yellow `#ffb900` appears only as a rating accent)
- Bold heroes to 700 — display weight is 500, emphasis is 600
- Use sharp 2px-radius buttons — that is the legacy store look the current system replaced
- Stack heavy drop shadows — elevation stays at the two quiet levels
- Use pure white text on photos — on-dark text is the blue-tinted `#f4fafd`
- Track headlines tighter or looser per size — the system uses one global tracking value
- Mix fonts — Segoe is the only typeface on every Microsoft surface

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero photography crops vertically, cards stack |
| Tablet | 640-1024px | 2-column card grids, condensed nav |
| Desktop | 1024-1440px | 3–4 column grids, full hero banners |
| Wide | >1440px | Content max-width centers, photography extends full-bleed |

### Touch Targets
- Primary CTAs at 40–48px height — comfortably tappable
- Suggestion chips at 32px height with 12px horizontal padding
- Global nav row at 54px with 8px-padded link targets
- Fluent 2 accessibility baseline: 4.5:1 contrast for standard text, 3:1 for large text

### Collapsing Strategy
- Hero: 48px/500 headline scales down, photography re-crops, CTAs stack vertically full-width
- Global nav: full link row → "All Microsoft" hamburger menu
- Card grids: 4 → 2 → 1 column, card recipe unchanged
- Tinted bands and footer maintain full-width treatment

### Image Behavior
- Lifestyle photography is the primary layout material at every breakpoint
- Media containers keep 24px radius on desktop, may go edge-to-edge (0px) on mobile
- Product renders sit on near-white `#fefefe` cards with consistent 16px radius

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Communication Blue (`#0078d4`)
- Legacy blue (nav/chips): `#0067b8`
- Fluent DS brand anchor: `#0f6cbd`
- Secondary CTA: Powder Blue (`#b3daf0`) with ink text
- Background: White (`#ffffff`), cards `#fefefe`, footer `#f2f2f2`
- Tinted band: Ice (`#dceef8`)
- Heading text: `#0e1726`
- Body text: `#17253d`
- Nav text: `#262626`, muted `#616161`
- On-photo text: `#f4fafd`
- Chips: `#e6effd` bg / `#2a446f` text+border

### Example Component Prompts
- "Create a hero banner: full-bleed lifestyle photo. Headline 48px Segoe UI weight 500, line-height 56px, letter-spacing -0.48px, color #0e1726 (or #f4fafd on dark photo). One primary CTA: #0078d4 background, white text, 8px radius, 12px 17px padding, 15px/600. One secondary: #b3daf0 background, #0e1726 text, same geometry."
- "Design a product card: #fefefe background, 16px radius, shadow rgba(0,0,0,0.13) 0px 3px 7px + rgba(0,0,0,0.11) 0px 1px 2px. Image top, title 20px Segoe UI 600 #0e1726, body 16px/24px 400 #17253d, letter-spacing -0.48px, blue Learn-more CTA (#0078d4, 8px radius, 8px 16px padding)."
- "Build a suggestion chip row: pills with #e6effd background, #2a446f text, 1px solid #2a446f border, 16px radius, 32px height, 4px 12px padding, 15px Segoe UI 400."
- "Create a global header: white 54px bar. Links 13px Segoe UI 400, #262626, 8px horizontal padding, underline + #0067b8 on hover. Right side: cart icon, circular avatar button (50% radius, 1px #262626 border)."
- "Design a footer: #f2f2f2 background, link columns at 11px Segoe UI 400, #616161 text."

### Iteration Guide
1. Blue `#0078d4` is the only imperative color — every "do this" is that blue at 8px radius
2. Segoe UI everywhere; weights cap at 600 for emphasis, heroes at 500
3. Apply `-0.48px` tracking globally — it's the system's quiet signature
4. Radius doubles: 8 → 16 → 24
5. Neutrals are blue-cast (`#0e1726`, `#17253d`), never pure black
6. Shadows stay at the two quiet Fluent levels
7. When pairing CTAs on photos: primary blue + powder-blue secondary, or powder fill + 2px powder outline ghost
8. For product-UI (not marketing) fidelity, anchor on Fluent brand `#0f6cbd` and the Fluent type ramp instead

---

## 10. Voice & Tone

Microsoft's consumer voice is **empowering, plainspoken, and warm-professional** — a trillion-dollar company writing like a helpful store associate. The register is set by the mission sentence itself ("empower every person and every organization on the planet to achieve more"): benefit-first, inclusive, and never clever at the user's expense. Headlines are short benefit statements or rhythmic fragments ("Sleek. Light. Fast."); support copy is conversational ("Hi there. How can we help?"); CTAs are unadorned imperatives ("Shop now", "Learn more", "See offer").

| Context | Tone |
|---|---|
| Hero headlines | Benefit-led, compact. "Get the ultimate college bundle." No hype adjectives. |
| Product blurbs | One capability + one outcome. "Your productivity, supercharged." |
| Hardware copy | Staccato sensory fragments. "Sleek. Light. Fast." |
| Support surfaces | Warm, first-person-plural. "Hi there. How can we help?" |
| CTAs | Two-word imperatives. "Shop now", "Learn more", "Join now". |
| AI/Copilot copy | Companion framing — "your everyday AI companion" — helpful, never autonomous-sounding. |
| Legal/footer | Quiet, complete, 11px — present but unobtrusive. |

**Voice samples (verbatim from live surfaces):**
- "Get the ultimate college bundle" — homepage hero H1. *(verified live 2026-06-11)*
- "Sleek. Light. Fast." — Surface Laptop card H2. *(verified live 2026-06-11)*
- "Hi there. How can we help?" — support panel H2. *(verified live 2026-06-11)*
- "Your productivity, supercharged" — Microsoft 365 card H2. *(verified live 2026-06-11)*

**Forbidden register**: jargon-first enterprise speak on consumer surfaces, exclamation-mark urgency, superlative stacking ("revolutionary", "game-changing"), and any voice that talks down to non-technical users.

## 11. Brand Narrative

Microsoft was founded in **1975 by Bill Gates and Paul Allen** with the era-defining ambition of "a computer on every desk and in every home" — a mission so thoroughly accomplished it had to be replaced. Under **Satya Nadella (CEO since 2014)** the company reframed itself around its current mission, stated verbatim on microsoft.com/about: **"to empower every person and every organization on the planet to achieve more."** The company's published values — Respect, Integrity, Accountability — read less like marketing and more like the operating manual of a company that has survived five platform shifts: PC, web, mobile (painfully), cloud (triumphantly), and now AI, where Copilot is positioned as "your everyday AI companion."

The design lineage mirrors the corporate one. The flat, typography-driven Metro language of Windows Phone became Fluent, and Fluent became **Fluent 2** — a cross-platform system whose four published principles are *"Natural on every platform"*, *"Built for focus"*, *"One for all, all for one"*, and *"Unmistakably Microsoft"* ("Your experiences should feel like one Microsoft. One moment, one product, one experience at a time."). The system's stated grounding is empowerment language again: principles "rooted in our beliefs about what empowers people to achieve more."

What Microsoft refuses on its consumer surface: visual experimentation that would fragment the "one Microsoft" feel, dark-pattern urgency, and aesthetic exclusivity — this is a design system that must work for a gamer, a CFO, a third-grader, and a government agency simultaneously. What it embraces: one disciplined blue, one typeface with three decades of equity, photography of real people using real devices, and a softness (8–24px radii, gentle shadows) that makes planetary-scale infrastructure feel approachable.

## 12. Principles

1. **Natural on every platform.** Fluent 2's first principle — experiences "should adapt to the device you're on and build off the familiar." *UI implication:* use the platform's native type (Segoe on Windows/web, SF Pro on Apple, Roboto on Android) and native interaction patterns; never force one platform's chrome onto another.
2. **Built for focus.** "Your experiences should inspire action, drawing you forward, simply and seamlessly." *UI implication:* one blue CTA per band; suggestion chips and secondary actions visually subordinate; no competing saturated colors.
3. **One for all, all for one.** Experiences "should consider, learn, and reflect a range of perspectives and abilities for the benefit of all." *UI implication:* 4.5:1 minimum text contrast, generous 40px+ touch targets, full keyboard/screen-reader parity — accessibility is a token-level requirement, not a retrofit.
4. **Unmistakably Microsoft.** "Your experiences should feel like one Microsoft." *UI implication:* Segoe + Communication Blue + soft-rectangle geometry on every surface, from Xbox to Azure; product-specific brand ramps (Teams violet, Office orange) stay inside their products.
5. **Empowerment over impressiveness.** The mission is "achieve more" — the user achieves, not the brand. *UI implication:* copy leads with the user's outcome; design recedes behind photography of people doing things; the system never showboats.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Microsoft customer segments (students, families, IT decision-makers, developers), not individual people.*

**Maya Thompson, 19, Columbus.** College freshman buying her first laptop with her own money. Lands on microsoft.com from a "college bundle" ad, compares Surface models on her phone, and trusts the clean store layout because it looks like the Windows she grew up with. Wants the price, the trade-in math, and zero pressure.

**David Park, 41, Seattle.** IT director at a 2,000-person logistics firm. Lives in Microsoft 365 admin and Azure portals all day; visits the consumer site to evaluate Surface for Business bundles. Expects the marketing surface and the product UI to feel like the same company — and notices that they do.

**Rosa Jiménez, 34, San Antonio.** Parent managing a family Microsoft 365 subscription and an Xbox-obsessed household. Values the support surface ("Hi there. How can we help?") actually helping, and the fact that one account page handles subscriptions, storage, and parental controls.

**Sam Okafor, 27, London.** Full-stack developer who downloads Visual Studio, reads Fluent 2 docs for a work project, and games on Xbox at night. Judges Microsoft by docs quality and dark-mode fidelity; appreciates that Fluent tokens are open source on GitHub.

## 14. States

| State | Treatment |
|---|---|
| **Empty (cart, no items)** | White canvas, single ink (`#0e1726`) line stating the cart is empty, one Communication Blue CTA to start shopping. No illustration overload. |
| **Empty (search, no results)** | Body navy (`#17253d`) explanation plus suggestion chips (`#e6effd`) offering adjacent queries — the system always proposes a next step. |
| **Loading (page/band)** | Skeleton blocks at final card dimensions in footer gray (`#f2f2f2`), soft shimmer; photography placeholders hold aspect ratio to prevent layout shift. |
| **Loading (in-card)** | Quiet inline spinner in Communication Blue; card chrome stays in place. |
| **Error (form validation)** | Field-level message below the input; describes what is invalid and what valid looks like, in the same plainspoken voice — never just "Invalid input". |
| **Error (service/availability)** | Inline band-level message with apology + concrete retry path ("Try again" blue CTA). Fluent semantic red is reserved for true errors only. |
| **Success (purchase/subscription)** | Confirmation surface restates what was bought and what happens next; calm declarative sentence, order detail linked immediately. No confetti on the consumer store. |
| **Success (settings saved)** | Brief inline confirmation with Fluent semantic green accent; auto-dismisses without blocking. |
| **Skeleton** | `#f2f2f2` blocks, 16px radius matching final cards, shimmer respecting reduced-motion. |
| **Disabled** | Reduced-opacity fill with label and surface dimming together; blue actions fade toward powder blue (`#b3daf0`) rather than switching to gray, preserving the brand read. |

## 15. Motion & Easing

**Durations** (official Fluent 2 tokens, `microsoft/fluentui` package):

| Token | Value | Use |
|---|---|---|
| `durationUltraFast` | 50ms | State ticks, instant feedback |
| `durationFaster` | 100ms | Hover/press feedback |
| `durationFast` | 150ms | Small component transitions |
| `durationNormal` | 200ms | Standard transitions — flyouts, fades |
| `durationGentle` | 250ms | Larger component movement |
| `durationSlow` | 300ms | Panel/dialog entrances |
| `durationSlower` | 400ms | Large surface transitions |
| `durationUltraSlow` | 500ms | Page-level/immersive transitions |

**Easings** (official Fluent 2 curve tokens):

| Token | Curve | Use |
|---|---|---|
| `curveDecelerateMax` | `cubic-bezier(0.1,0.9,0.2,1)` | Entrances — fast start, soft landing |
| `curveDecelerateMid` | `cubic-bezier(0,0,0,1)` | Standard entering elements |
| `curveAccelerateMid` | `cubic-bezier(1,0,1,1)` | Exits/dismissals |
| `curveEasyEase` | `cubic-bezier(0.33,0,0.67,1)` | Two-way/utility transitions |
| `curveLinear` | `cubic-bezier(0,0,1,1)` | Progress indicators only |

**Motion rules**: Fluent motion is directional and physical — entering surfaces decelerate into place (strong-out curves), exiting ones accelerate away. On the consumer site, motion is nearly invisible: carousel slides, hover lifts on cards, and fade-ins at `durationNormal`; nothing bounces. Spring/overshoot curves are absent from the official token set entirely — steadiness is the brand. Under `prefers-reduced-motion: reduce`, transitions collapse to opacity-only or instant, and carousels stop auto-advancing.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 verification (2026-06-11):
- https://www.microsoft.com/en-us/ — live playwright getComputedStyle inspect; voice
  samples §10 are verbatim live headings ("Get the ultimate college bundle",
  "Sleek. Light. Fast.", "Hi there. How can we help?", "Your productivity, supercharged").
- https://www.microsoft.com/en-us/about — WebFetch; mission verbatim: "Microsoft's
  mission is to empower every person and every organization on the planet to achieve
  more." Values verbatim: Respect / Integrity / Accountability (with their one-line
  definitions). Copilot positioning "Your everyday AI companion".
- https://fluent2.microsoft.design/design-principles — WebFetch; four principles
  verbatim: "Natural on every platform", "Built for focus", "One for all, all for one",
  "Unmistakably Microsoft" + grounding quote "rooted in our beliefs about what empowers
  people to achieve more."
- https://fluent2.microsoft.design/typography — WebFetch; web type ramp table in §3.
- https://learn.microsoft.com/en-us/typography/font-list/segoe-ui — WebFetch; Segoe
  provenance quotes (Steve Matteson, Windows Vista 2007 default, "friendly, readable
  sans serif typeface for all corporate applications").
- https://raw.githubusercontent.com/microsoft/fluentui (packages/tokens/src/global/
  brandColors.ts, durations.ts, curves.ts, borderRadius.ts, fonts.ts) — official token
  values quoted in frontmatter tokens, §5 radius scale, and §15 tables.

Not independently verified this turn — widely documented public facts: founded 1975 by
Bill Gates and Paul Allen; "a computer on every desk and in every home" as the original
ambition; Satya Nadella CEO since 2014; Metro → Fluent → Fluent 2 design lineage.

Personas (§13) are fictional archetypes informed by publicly observable Microsoft
customer segments. Names are illustrative; they do not refer to real people.

States (§14): empty/loading/error/success treatments are editorial extrapolations from
the observed live system (colors, chips, voice) and Fluent 2 component conventions, not
verbatim Microsoft documentation.

Interpretive claims (e.g., "blue-cast neutrals read as Microsoft before the logo
appears", "empowerment over impressiveness") are editorial readings connecting
Microsoft's stated mission/principles to its observed design system.
-->
