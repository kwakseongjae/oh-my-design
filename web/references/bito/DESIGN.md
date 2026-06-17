---
id: bito
name: Bito
country: TW
category: design-tools
homepage: "https://bito.tv/"
primary_color: "#f92c16"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=bito.tv&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "Studio-as-reference (motion-design / branding studio, like Goodpatch). Stark editorial portfolio: pure black ink (#000000) on white canvas (#ffffff), 0px-radius everywhere, no shadows. Signature warm accent = Bito red-orange family (#f92c16 / #ff5529 / #e74118) used as full-bleed project-tile backgrounds; electric blue (#4419fe) as secondary accent. Type = neue-haas-unica (Latin) + Noto Sans TC (Traditional Chinese)."
  colors:
    primary: "#f92c16"
    accent-orange: "#ff5529"
    accent-deep: "#e74118"
    accent-red: "#ff2700"
    accent-blue: "#4419fe"
    accent-cobalt: "#126dff"
    accent-magenta: "#fb76ff"
    accent-green: "#166b22"
    ink: "#000000"
    canvas: "#ffffff"
    muted: "#707070"
    faint: "#bebebe"
    hairline: "#e2e2e2"
    on-accent: "#ffffff"
  typography:
    family: { latin: "neue-haas-unica", cjk: "Noto Sans TC" }
    page-title:   { size: 28, weight: 500, lineHeight: 1.50, use: "Project page H3 title, Neue Haas Unica medium" }
    label-lg:     { size: 24, weight: 500, lineHeight: 1.20, use: "Filter / section labels (Genre, Service, Sector, Credits)" }
    nav:          { size: 16, weight: 400, lineHeight: 1.20, use: "Top nav links (Work, News, About, Bitween)" }
    body:         { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, Neue Haas Unica regular" }
    meta:         { size: 16, weight: 400, lineHeight: 1.20, use: "Faint metadata / tag chips (#bebebe)" }
  spacing: { xs: 4, sm: 8, md: 16, base: 24, lg: 32, xl: 40, section: 96 }
  rounded: { sm: 0, md: 0, lg: 0, full: 0 }
  shadow:
    none: "none"
  components:
    nav-link: { type: tab, fg: "#000000", font: "16px / 400 neue-haas-unica", use: "Top nav item (Work/News/About/Bitween)", active: "ink #000000 label, no underline indicator" }
    lang-toggle: { type: tab, fg: "#000000", font: "16px / 400 neue-haas-unica", use: "EN / 中 language switch in header" }
    project-tile: { type: card, bg: "#f92c16", fg: "#ffffff", radius: "0px", use: "Full-bleed warm project thumbnail in the Work grid (also #ff5529 / #e74118 variants)" }
    project-tile-dark: { type: card, bg: "#000000", fg: "#ffffff", radius: "0px", use: "Black project tile / cover, sharp-cornered" }
    filter-label: { type: badge, fg: "#000000", radius: "0px", font: "24px / 500 neue-haas-unica", use: "Genre / Service / Sector filter heading" }
    tag-chip: { type: badge, fg: "#bebebe", radius: "0px", font: "16px / 400 neue-haas-unica", use: "Inactive genre/service tag (Live Action, Event, Branding…)" }
    footer-link: { type: listItem, fg: "#000000", font: "16px / 400 neue-haas-unica", use: "Footer contact / social link (Facebook, Instagram, info@bito.tv)" }
  components_harvested: true
---

# Design System Inspiration of Bito

## 1. Visual Theme & Atmosphere

Bito (滿滿大平台) is a leading Taiwanese motion-design and creative-branding studio out of Taipei, and its portfolio site is a master-class in restraint as a frame for maximalist work. The site itself is almost monastically plain: a pure white canvas (`#ffffff`), pure black ink (`#000000`) for nearly all type, and absolutely no rounding — every corner is a hard `0px`. There are no drop shadows anywhere; separation comes from raw whitespace and full-bleed image tiles, never elevation. This is the classic agency move: the chrome disappears so the work can shout. Bito is a studio-as-reference (in the spirit of Goodpatch) — the interest is not in a product UI but in how a world-class motion/branding house presents craft.

The studio's personality erupts through its imagery, and the one place that energy leaks into the system tokens is color. Bito's signature is a vivid red-orange — a family running from `#f92c16` through `#ff5529` and `#e74118` — that appears as full-bleed backgrounds behind project thumbnails and the contact block, turning entire viewport-sized tiles into blocks of saturated warmth. Around it orbit other electric accents lifted straight from project art: an electric blue (`#4419fe`), a cobalt (`#126dff`), a hot magenta (`#fb76ff`), and a deep green (`#166b22`). None of these are buttons or links — they are the work itself, used architecturally as full-screen color fields.

Typography is the other half of the identity. Latin text is set in **Neue Haas Unica** — a precise, neutral grotesque in the Helvetica lineage — paired with **Noto Sans TC** for Traditional Chinese, the bilingual reality of a Taipei studio. Weights stay disciplined: 400 for nav, body, and tags; 500 for labels and project titles. There is no heavy display weight and no italics — the type stays quiet and even, letting the kinetic imagery carry the drama. The result is editorial and confident: a gallery wall painted white, hung with loud, brilliant work.

**Key Characteristics:**
- Pure black ink (`#000000`) on pure white canvas (`#ffffff`) — stark editorial gallery
- Zero border-radius everywhere (`0px`) — hard, sharp, architectural corners
- No shadows at all — separation by whitespace and full-bleed tiles, never elevation
- Signature red-orange accent family (`#f92c16` / `#ff5529` / `#e74118`) as full-bleed tile backgrounds
- Secondary electric accents from project art: blue (`#4419fe`), cobalt (`#126dff`), magenta (`#fb76ff`), green (`#166b22`)
- Neue Haas Unica (Latin) + Noto Sans TC (Traditional Chinese) bilingual type stack
- Restrained weights — 400 for nav/body/tags, 500 for labels/titles; no heavy display
- Faint grey (`#bebebe`) for inactive tags, mid grey (`#707070`) for secondary meta, `#e2e2e2` hairlines

## 2. Color Palette & Roles

### Primary Accent (Bito Red-Orange)
- **Bito Red-Orange** (`#f92c16`): The signature accent — saturated red-orange used as full-bleed background behind project thumbnails and contact blocks. The studio's "hot" color.
- **Accent Orange** (`#ff5529`): Brighter orange variant of the same family, used on alternate full-bleed tiles.
- **Accent Deep** (`#e74118`): Deeper red-orange variant, seen on the contact/social full-bleed block.
- **Accent Red** (`#ff2700`): Pure-red end of the warm family for the most intense tiles.

### Secondary Accents (from project art)
- **Electric Blue** (`#4419fe`): Vivid cobalt-violet blue pulled from project covers — used as a full-screen color field, never as a link.
- **Cobalt** (`#126dff`): Brighter blue accent on other project tiles.
- **Hot Magenta** (`#fb76ff`): Saturated pink-magenta decorative accent.
- **Deep Green** (`#166b22`): A grounded forest green accent for contrast tiles.

### Ink & Canvas
- **Ink Black** (`#000000`): Primary text, nav, headings, labels — pure black, true to the high-contrast editorial system.
- **Canvas White** (`#ffffff`): Page background, card surfaces, and text reversed out over the warm/dark tiles.

### Neutral Scale
- **Mid Grey** (`#707070`): Secondary metadata and muted captions.
- **Faint Grey** (`#bebebe`): Inactive filter tags (genre/service labels), lowest-emphasis text.
- **Hairline** (`#e2e2e2`): Thin dividers and subtle separators in the otherwise shadow-free layout.

## 3. Typography Rules

### Font Family
- **Latin**: `neue-haas-unica` (with `Noto Sans TC` and system fallbacks) — a neutral, precise grotesque used for all Latin nav, titles, body, and tags.
- **Traditional Chinese**: `Noto Sans TC` — the bilingual companion for the studio's Taiwanese (Traditional Chinese) content.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Project Title | Neue Haas Unica | 28px (1.75rem) | 500 | 1.50 (42px) | Project page H3 ("The 60th Golden Horse Awards Branding") |
| Section / Filter Label | Neue Haas Unica | 24px (1.50rem) | 500 | 1.20 (28.8px) | Genre / Service / Sector / Credits headings |
| Nav Link | Neue Haas Unica | 16px (1.00rem) | 400 | 1.20 (19.2px) | Work / News / About / Bitween |
| Body | Neue Haas Unica | 16px (1.00rem) | 400 | 1.50 (24px) | Standard reading text |
| Tag / Meta | Neue Haas Unica | 16px (1.00rem) | 400 | 1.20 (19.2px) | Inactive genre/service tags, faint `#bebebe` |

### Principles
- **Neutral grotesque, not display**: Neue Haas Unica is chosen for its evenness — the type recedes so the motion/branding imagery dominates. No serif, no italic, no heavy display weight.
- **Two weights only**: 400 carries nav, body, and tags; 500 carries section labels and project titles. The hierarchy is built from size and color, not weight extremes.
- **Bilingual by default**: Every text style falls back to `Noto Sans TC`, reflecting the Taipei studio's Traditional-Chinese-and-English reality.
- **Normal tracking**: Letter-spacing stays `normal` across the system — the grotesque is left to its native metrics.

## 4. Component Stylings

### Navigation

**Top Nav Link**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Font: 16px Neue Haas Unica weight 400
- Active: ink `#000000` label, no underline indicator
- Use: Header nav items (Work, News, About, Bitween)

**Language Toggle**
- Background: transparent
- Text: `#000000`
- Radius: 0px
- Font: 16px Neue Haas Unica weight 400
- Use: EN / 中 language switch in the header

### Cards & Containers

**Warm Project Tile**
- Background: `#f92c16`
- Text: `#ffffff`
- Radius: 0px
- Use: Full-bleed warm project thumbnail in the Work grid (also `#ff5529` and `#e74118` variants)

**Dark Project Tile**
- Background: `#000000`
- Text: `#ffffff`
- Radius: 0px
- Use: Black project cover tile, sharp-cornered, no shadow

### Badges & Tags

**Filter Label**
- Text: `#000000`
- Radius: 0px
- Font: 24px Neue Haas Unica weight 500
- Use: Genre / Service / Sector filter heading

**Tag Chip (Inactive)**
- Text: `#bebebe`
- Radius: 0px
- Font: 16px Neue Haas Unica weight 400
- Use: Inactive genre/service tag (Live Action, Event, Ceremony, Branding…)

### Footer

**Footer Link**
- Text: `#000000`
- Font: 16px Neue Haas Unica weight 400
- Use: Footer contact / social link (Facebook, Instagram, Behance, info@bito.tv)

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 brand-owned surfaces)
**Tier 1 sources:** https://bito.tv/ (home — nav, Work grid, project tiles, footer) | https://bito.tv/work/148/The-60th-Golden-Horse-Awards-Branding (project page — H3 title, Credits label, accent tiles)
**Tier 2 sources:** getdesign.md/bito — not listed (studio, not in catalog) | styles.refero.design ?q=bito — no matching style page
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Header padding measured at 32px 40px (vertical / horizontal) on the 96px-tall top bar
- Scale: 4px, 8px, 16px, 24px, 32px, 40px, 96px (section)
- Notable: Generous whitespace is the primary layout device — sections breathe, and full-bleed image tiles butt edge-to-edge with no gutter

### Grid & Container
- The Work index is a dense, edge-to-edge grid of full-bleed project tiles — many at full viewport width (1440px) or half (668px)
- Project pages stack large media with a centered title (28px) and a Credits / Genre / Service / Sector metadata block
- No max-width "reading column" chrome — the layout is gallery-first, image-led
- Header is a 96px transparent bar with nav left/center and language + socials right

### Whitespace Philosophy
- **Negative space as frame**: The white canvas is the matte around the work; restraint is the point.
- **Edge-to-edge tiles**: Project thumbnails extend full-bleed, color fields with no rounding or border, abutting directly.
- **No decorative chrome**: No cards-with-shadows, no rounded containers — the system trusts whitespace and full-bleed color.

### Border Radius Scale
- The entire system is `0px` — there is no radius scale. Every tile, label, and container is hard-cornered. This sharpness is a deliberate editorial signature.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Everything — nav, tiles, footer, project pages |
| Color field (Level 1) | Full-bleed accent background (`#f92c16` / `#4419fe` …) | Project tiles read as "raised" purely through saturated color, not shadow |

**Shadow Philosophy**: Bito is a fully shadowless system. Live inspection found `box-shadow: none` across the nav, Work grid, project tiles, and footer. Depth is not simulated — the studio relies on raw figure-ground contrast: a brilliant full-bleed color field (the Bito red-orange `#f92c16`, or electric blue `#4419fe`) reads as foreground against the white canvas, and black tiles (`#000000`) recede or advance by tonal weight alone. This is the agency aesthetic in its purest form: no skeuomorphic elevation, just flat planes of color and type.

## 7. Do's and Don'ts

### Do
- Keep the canvas pure white (`#ffffff`) and ink pure black (`#000000`) — maximum editorial contrast
- Use `0px` radius on every element — the hard corner is the brand's signature sharpness
- Reserve the Bito red-orange family (`#f92c16` / `#ff5529` / `#e74118`) for full-bleed project/contact tiles
- Use the secondary accents (`#4419fe` blue, `#fb76ff` magenta, `#166b22` green) as full-screen color fields, not as buttons or links
- Set Latin type in Neue Haas Unica and Traditional Chinese in Noto Sans TC
- Stay within weights 400 (nav/body/tags) and 500 (labels/titles)
- Let whitespace and full-bleed tiles do all the separating
- Use faint grey (`#bebebe`) for inactive tags and mid grey (`#707070`) for muted meta

### Don't
- Use drop shadows for elevation — Bito is a flat, shadow-free system
- Round any corner — the entire system is `0px` radius
- Turn the accent colors into buttons or links — they are architectural color fields, not interactive chrome
- Introduce a heavy display weight or italics — type stays even at 400/500
- Add gutters between project tiles — they butt edge-to-edge, full-bleed
- Use a serif or a non-grotesque Latin face — Neue Haas Unica owns the Latin voice
- Spread the red-orange thinly across small UI — it lives only on large saturated tiles
- Add decorative cards-with-shadows chrome — the white canvas is the only frame

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column full-bleed tile stack, hamburger nav, 28px title compresses |
| Tablet | 640-1024px | 2-up tile grid, header padding tightens |
| Desktop | 1024-1440px | Multi-column full-bleed Work grid, 96px header bar |

### Touch Targets
- Nav links sit in the generous 96px header with comfortable spacing
- Full-bleed project tiles are themselves the tap target — the entire image is interactive
- Language toggle (EN / 中) and social links grouped at the header right

### Collapsing Strategy
- Work grid: multi-column full-bleed → 2-up → single-column stacked, always edge-to-edge
- Project pages: large media remains full-width; the title + Credits/Genre/Service block stacks
- Header: full nav row → hamburger toggle on narrow viewports
- Type scale compresses: 28px titles and 24px labels step down on mobile, weights preserved

### Image Behavior
- Project thumbnails and covers carry no shadow and no radius at any size — flat full-bleed
- Motion/video work plays edge-to-edge; the white canvas only reappears between sections
- Color-field tiles maintain their saturated accent backgrounds across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary accent (warm tile): Bito Red-Orange (`#f92c16`)
- Warm variants: Orange (`#ff5529`), Deep (`#e74118`), Red (`#ff2700`)
- Secondary accents: Electric Blue (`#4419fe`), Cobalt (`#126dff`), Magenta (`#fb76ff`), Green (`#166b22`)
- Ink / text: Black (`#000000`)
- Background: White (`#ffffff`)
- Muted meta: Mid Grey (`#707070`)
- Inactive tag: Faint Grey (`#bebebe`)
- Hairline: `#e2e2e2`

### Example Component Prompts
- "Create a portfolio grid: pure white (`#ffffff`) canvas, full-bleed project tiles with `0px` radius and no gutter. One tile uses Bito red-orange (`#f92c16`) background with white (`#ffffff`) overlay text; another uses electric blue (`#4419fe`); another pure black (`#000000`). No shadows anywhere."
- "Design a top nav: 96px transparent bar, Neue Haas Unica 16px weight 400 links in black (`#000000`) — Work / News / About / Bitween — with an EN / 中 language toggle and social links right-aligned. No background, no shadow."
- "Build a project page header: centered title 28px Neue Haas Unica weight 500 in black (`#000000`), line-height 1.50. Below it a Credits / Genre / Service / Sector block with 24px weight-500 labels and faint-grey (`#bebebe`) 16px tag chips. Full-bleed media above, no radius."
- "Make a contact footer block: full-bleed deep red-orange (`#e74118`) background, white (`#ffffff`) Neue Haas Unica 16px links — Facebook, Instagram, Behance, info@bito.tv — sharp corners, no shadow."

### Iteration Guide
1. Everything is `0px` radius — never round a corner
2. No shadows — separate with whitespace and full-bleed color tiles
3. Bito red-orange (`#f92c16`) and the warm family live only on large saturated tiles, not small UI
4. Type is Neue Haas Unica (Latin) + Noto Sans TC (Traditional Chinese), weights 400/500 only
5. Ink is pure black (`#000000`), canvas is pure white (`#ffffff`) — maximum contrast
6. Accent colors (`#4419fe`, `#fb76ff`, `#166b22`) are architectural color fields, never buttons
7. Faint grey (`#bebebe`) for inactive tags; mid grey (`#707070`) for muted meta

---

## 10. Voice & Tone

Bito's verbal voice is **spare, bilingual, and craft-forward** — the words get out of the way so the work can speak. The site's vocabulary is almost entirely functional English nav (Work, News, About, Bitween) over Traditional-Chinese project context, with no marketing superlatives and no taglines shouting from the homepage. The studio lets the portfolio carry the persuasion; copy is reduced to labels, credits, and contact lines.

| Context | Tone |
|---|---|
| Navigation | Single-word, functional. "Work", "News", "About", "Bitween". |
| Project metadata | Structured and neutral. "Genre", "Service", "Sector", "Credits" as plain labels. |
| Project titles | Descriptive, proper-noun-led. "The 60th Golden Horse Awards Branding", "TAIWAN Tourism Rebranding". |
| Contact / footer | Plain and direct. "© Bito 2026 — Taipei, Taiwan", "info@bito.tv". |
| Genre tags | Terse, categorical. "Live Action", "Event", "Ceremony", "Branding", "Typography". |

**Voice samples (verbatim from live site):**
- "Work / News / About / Bitween" — the entire primary nav, single-word functional labels. *(verified live 2026-06-17, https://bito.tv/)*
- "The 60th Golden Horse Awards Branding" — project title, descriptive and proper-noun-led. *(verified live 2026-06-17, /work/148)*
- "© Bito 2026 — Taipei, Taiwan · info@bito.tv" — footer contact line, plain and direct. *(verified live 2026-06-17, https://bito.tv/)*

**Forbidden register**: marketing hype, superlatives ("award-winning", "world-class") in body chrome, exclamation-heavy copy, or any verbal flourish that competes with the imagery. The work wins the argument; the words only label it.

## 11. Brand Narrative

Bito (滿滿大平台) is a creative studio based in **Taipei, Taiwan**, working at the intersection of motion design, branding, and live-experience visual systems. Its reputation was built on high-visibility national and cultural commissions — most famously the visual identity and title sequences for the **Golden Horse Awards** (Taiwan's premier film awards) across multiple editions, alongside Taiwan Lantern Festival identities, Taipei Metro brand films, tourism rebrandings, and government/cultural campaigns. The portfolio reads as a record of Taiwan's contemporary public visual culture.

The studio's positioning is craft-first: it does not sell a product or a SaaS, it sells creative direction and execution at the highest tier. That posture is exactly why its own site is so restrained — a motion studio whose reels are saturated, kinetic, and maximal needs a presentation frame that is the opposite: silent, white, sharp-cornered, and shadow-free, so nothing on the page competes with the work being shown.

What Bito's design refuses, visible in every pixel of the site: decorative UI chrome, rounded "friendly" product geometry, drop shadows, and marketing superlatives. What it embraces: a pure black-on-white editorial canvas, hard `0px` corners, full-bleed saturated color fields lifted straight from the work, and a neutral bilingual grotesque (Neue Haas Unica + Noto Sans TC) that lets Taipei's creative output, not the website, be the headline.

## 12. Principles

1. **The work is the interface.** The site exists to display reels and case studies, not to be admired itself. *UI implication:* keep chrome to near-zero — transparent nav, no cards, no shadows — so full-bleed project media dominates every viewport.
2. **Sharp, not soft.** Hard `0px` corners everywhere signal precision and editorial seriousness. *UI implication:* never round a corner; let tiles butt edge-to-edge as flat planes.
3. **Color belongs to the work.** The saturated accents (`#f92c16`, `#4419fe`) are project art used architecturally, never decoration applied to UI. *UI implication:* reserve accent color for large full-bleed fields; keep functional UI strictly black and white.
4. **Bilingual by default.** A Taipei studio speaks Traditional Chinese and English in the same breath. *UI implication:* every type style must fall back to `Noto Sans TC`; the language toggle (EN / 中) is first-class.
5. **Restraint amplifies craft.** A loud reel needs a quiet room. *UI implication:* use whitespace and neutral grotesque type as the matte; resist every urge to add visual flourish to the frame.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Bito audiences (cultural-event organizers, brand directors, motion-design talent, agency peers), not individual people.*

**陳怡君 (Chen Yi-chun), 38, Taipei.** A festival programming director sourcing a studio for a national awards ceremony's visual identity. Scans Bito's Work grid for scale and ambition; trusts the studio precisely because the site gets out of the way and lets the Golden Horse and Lantern Festival reels speak.

**Marcus Lin, 29, Taipei.** A motion designer evaluating Bito as a place to work. Reads the case studies for craft depth and the Bitween sub-brand for the studio's culture. Values the unflinching black-on-white presentation as a signal of taste and rigor.

**Sophie Tan, 34, Singapore.** A regional brand lead commissioning a rebrand and a launch film. Wants a studio fluent in both Traditional-Chinese cultural nuance and international design language; reads Bito's bilingual, restrained site as proof of exactly that range.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no projects match filter)** | White canvas, single black (`#000000`) Neue Haas Unica line stating no matching work, with the filter labels (Genre/Service/Sector) still visible to adjust. No illustration. |
| **Empty (news, none yet)** | Faint-grey (`#bebebe`) single line indicating nothing posted; calm and minimal, consistent with the editorial tone. |
| **Loading (Work grid)** | Full-bleed tile placeholders in flat neutral fields — no shimmer, no shadow, consistent with the shadowless system; tiles fill with media as it loads. |
| **Loading (project media)** | Media area holds its full-bleed dimensions in a flat neutral block; surrounding title/credits text stays visible. |
| **Error (media failed to load)** | Black (`#000000`) plain-language line within the tile's footprint, no generic error chrome; a retry affordance in functional copy. |
| **Error (form / contact)** | Field-level black text below the input describing what is invalid; no decorative error styling, in keeping with the stark canvas. |
| **Success (contact sent)** | Brief inline black confirmation line in functional copy; no celebratory emoji or color burst. |
| **Skeleton** | Flat neutral blocks at final full-bleed dimensions, `0px` radius, no shimmer — a quiet flat pulse at most. |
| **Disabled** | Reduced-emphasis faint grey (`#bebebe`) on the label; the element stays sharp-cornered and flat. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Nav hover, tag selection, language toggle |
| `motion-standard` | 240ms | Tile hover reveal, project media transitions |
| `motion-slow` | 400ms | Full-bleed section crossfades, hero reel reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Tile and media arriving |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, tile hover-out |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: As a motion-design studio, Bito's most expressive motion lives inside the embedded reels and project films, not the site chrome — the UI framing stays deliberately calm so it never competes with the work. Tile hovers reveal project titles with a quick `motion-standard / ease-enter` fade; full-bleed sections crossfade at `motion-slow`. There is no bounce or spring on the chrome — the steadiness of the frame is what lets the kinetic content feel loud. Under `prefers-reduced-motion: reduce`, all chrome transitions collapse to instant and autoplaying reels respect the preference; the portfolio remains fully navigable.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via playwright getComputedStyle:
- https://bito.tv/ — nav (Work/News/About/Bitween, Neue Haas Unica 16px/400, black),
  Work grid full-bleed tiles (#f92c16 / #ff5529 / #e74118 / #4419fe / #000000),
  filter labels Genre/Service/Sector 24px/500, faint-grey #bebebe tags,
  footer "© Bito 2026 — Taipei, Taiwan · info@bito.tv", box-shadow: none, 0px radius.
- https://bito.tv/work/148/The-60th-Golden-Horse-Awards-Branding — project H3 title
  28px/500, "Credits" label 24px/500, accent tiles #f92c16 / #e74118 / #4419fe.

Token-level claims (§1-9) are sourced from this live inspection.

Voice samples (§10) are verbatim from the live site (primary nav, project title, footer).

Brand narrative (§11): Bito is a Taipei, Taiwan motion-design / branding studio known
for the Golden Horse Awards identity, Taiwan Lantern Festival, and public/cultural
commissions — confirmed by the live Work index project titles. Broader studio history
is general public knowledge, not quoted from a verified Bito statement this turn.

Personas (§13) are fictional archetypes informed by publicly observable Bito audiences
(cultural-event organizers, brand directors, motion designers, agency peers). Names are
illustrative; they do not refer to real people.

Interpretive claims (e.g., "the work is the interface", "restraint amplifies craft as a
deliberate frame for maximal motion work") are editorial readings connecting Bito's
observed, restrained site design to its studio positioning, not directly sourced Bito
statements.
-->
