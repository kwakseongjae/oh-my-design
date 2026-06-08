---
id: theverge
name: The Verge
country: US
category: marketing
homepage: "https://www.theverge.com"
primary_color: "#5200ff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=theverge.com&sz=128"
verified: "2026-06-06"
added: "2026-06-06"
omd: "0.1"
tokens:
  source: prose-derived
  extracted: "2026-06-09"
  colors:
    primary: "#5200ff"
    accent: "#3cffd0"
    canvas: "#131313"
    surface: "#2d2d2d"
    image-frame: "#313131"
    border-strong: "#c2c2c2"
    text-muted: "#e9e9e9"
    text-secondary: "#949494"
    on-primary: "#ffffff"
    link-hover: "#3860be"
    focus: "#1eaedb"
  typography:
    family: { sans: "PolySans", mono: "PolySans Mono" }
    display-mega:  { size: 107, weight: 900, lineHeight: 0.95, tracking: -0.02, use: "Hero/feature splash headlines" }
    display-lg:    { size: 72, weight: 900, lineHeight: 1.0, tracking: -0.02, use: "Section/package headlines" }
    display:       { size: 60, weight: 900, lineHeight: 1.02, tracking: -0.01, use: "Story-tile headlines" }
    headline:      { size: 32, weight: 700, lineHeight: 1.1, tracking: -0.01, use: "Sub-feature, card titles" }
    title:         { size: 24, weight: 700, lineHeight: 1.2, use: "List headlines, module titles" }
    subtitle:      { size: 18, weight: 600, lineHeight: 1.35, use: "Deks, standfirst" }
    body-lg:       { size: 18, weight: 400, lineHeight: 1.55, use: "Article body lead" }
    body:          { size: 16, weight: 400, lineHeight: 1.6, use: "Standard article reading text" }
    body-sm:       { size: 14, weight: 400, lineHeight: 1.5, use: "Secondary text, captions" }
    kicker:        { size: 12, weight: 600, lineHeight: 1.2, tracking: 0.06, use: "UPPERCASE section tags, kickers" }
    caption:       { size: 12, weight: 400, lineHeight: 1.4, use: "Bylines, timestamps, credits" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 20, xl: 24, xxl: 32 }
  rounded: { sm: 3, md: 3, lg: 3, full: 9999 }
  shadow:
    none: "none"
  components_harvested: true
  components:
    button-primary: { type: button, bg: "#5200ff", fg: "#ffffff", radius: 3, padding: "12px 20px", font: "14/600", use: "Primary CTA Subscribe, Read more" }
    button-accent: { type: button, bg: "#3cffd0", fg: "#131313", radius: 3, padding: "12px 20px", font: "14/600", use: "High-energy secondary CTA on dark canvas" }
    button-outline: { type: button, fg: "#ffffff", radius: 3, padding: "12px 20px", font: "14/600", use: "Secondary action on dark, 1px border #c2c2c2" }
    badge-pill: { type: badge, fg: "#3cffd0", radius: 9999, padding: "4px 12px", font: "12/600", use: "Section tags, topic chips, UPPERCASE mono, 1px accent border" }
    input-default: { type: input, bg: "#2d2d2d", fg: "#ffffff", radius: 3, padding: "12px 14px", font: "16/400", use: "Newsletter signup, search, comment box" }
    input-error: { type: input, bg: "#2d2d2d", fg: "#ffffff", radius: 3, padding: "12px 14px", font: "16/400", use: "Validation error, 1px border #5200ff" }
    card-tile: { type: card, bg: "#5200ff", fg: "#ffffff", radius: 3, padding: "20px", use: "Signature color-block story tile, Manuka 60/900 headline" }
    card-standard: { type: card, bg: "#131313", fg: "#ffffff", radius: 3, padding: "16px", use: "StoryStream rows, list modules, mint kicker" }
    card-inverted: { type: card, bg: "#ffffff", fg: "#131313", radius: 3, padding: "16px", use: "Sponsored / special sections on light" }
    tab-nav: { type: tab, fg: "#ffffff", use: "Top nav section list on #131313", active: "underline or #5200ff marker" }
---

# Design System Inspiration of The Verge

## 1. Visual Theme & Atmosphere

The Verge is Vox Media's flagship technology publication, and its 2022 in-house redesign is one of the most aggressively opinionated editorial identities on the modern web. Where most tech-news sites default to a polite white canvas with a blue accent, The Verge does the opposite: it opens on an almost-black canvas (`#131313`) and weaponizes two clashing, hyper-saturated accents — an acid "jelly mint" (`#3cffd0`) and an electric "ultraviolet" purple (`#5200ff`) — that behave like hazard tape across the page. The effect is loud, confident, and unmistakably a media brand that wants to feel more like a zine or a feed than a corporate newspaper.

The redesign was a deliberate "back to bloggy basics" move: a chronological StoryStream rail replaces the algorithmic homepage, and editorial voice is foregrounded over SEO-optimized blandness. Visually this is expressed through enormous display type, full-bleed saturated color-block tiles, and a dense, kinetic layout that rewards scrolling. Nothing about it is calm — it is engineered to feel current, irreverent, and slightly chaotic in a curated way.

Typography carries the personality. Three working typefaces anchor the system: **Mānuka** (Klim Type Foundry) for massive display headlines, **PolySans** (Gradient) for body, labels, and UI, and **FK Roman** (Florian Karsten) reserved for rare editorial/print-excerpt moments. Headlines run absurdly large — 60px to 107px — and PolySans Mono shows up in UPPERCASE for timestamps, kickers, and tags, reinforcing the "unfinished interface between present and future" concept the logo was built around.

**Key Characteristics:**
- Almost-black canvas (`#131313`) — no light mode on the homepage; dark-first by design
- Dual hazard accents: jelly mint (`#3cffd0`) + ultraviolet (`#5200ff`), used as collision, not harmony
- Mānuka display headlines at 60–107px, 900 weight — type as the primary brand asset
- PolySans for everything functional; PolySans Mono UPPERCASE for kickers/metadata
- Saturated full-bleed color-block tiles (mint, violet, yellow, pink, orange) for story cards
- Sharp geometry — small 2–4px radii on most UI, occasional large pill radii
- Editorial, irreverent, feed-like — designed to feel like a zine, not a newspaper

## 2. Color Palette & Roles

### Primary
- **Verge Ultraviolet** (`#5200ff`): The signature electric purple. Primary brand accent — logo lockups, link emphasis, color-block tiles, key CTAs. The single most "Verge" color.
- **Jelly Mint** (`#3cffd0`): The acid co-accent. Highlights, hover states, tags, decorative rails, and tiles. Paired with ultraviolet to create the signature high-tension collision.
- **Canvas Black** (`#131313`): Primary page background. Almost-black, slightly warm — never pure `#000000`.
- **Pure White** (`#ffffff`): Primary text on the dark canvas, and the fill color for inverted/light tiles.

### Tile / Block Colors
Story tiles use saturated full-bleed color blocks. The core set:
- **Mint** `#3cffd0`
- **Violet** `#5200ff`
- **White** `#ffffff` (inverted tiles — black text on white)
- Extended editorial set seen across coverage: **yellow**, **pink**, **orange** (used per-section/per-package, high-saturation)

### Surface & Neutral Scale
- **Surface Slate** (`#2d2d2d`): Elevated surfaces, secondary panels on the dark canvas.
- **Image Frame** (`#313131`): Border/frame color around media thumbnails.
- **Border Strong** (`#c2c2c2`): High-contrast dividers, outlined buttons, form borders.
- **Text Muted** (`#e9e9e9`): Near-white softened text for dense passages.
- **Text Secondary** (`#949494`): Captions, metadata, bylines, timestamps.
- **Text Inverted** (`#131313`): Text on white/mint/light tiles.

### Interactive / Semantic
- **Link Hover** (`#3860be`): Hover state for inline text links.
- **Focus Cyan** (`#1eaedb`): Focus-ring / interactive cyan accent for accessibility outlines.

### Role Summary
- Background: `#131313` (canvas), `#2d2d2d` (surface)
- Primary text: `#ffffff`; secondary `#949494`; muted `#e9e9e9`
- Brand accents: `#5200ff` (ultraviolet), `#3cffd0` (mint)
- Link hover: `#3860be`; focus: `#1eaedb`
- Borders: `#c2c2c2` (strong), `#313131` (image frame)

## 3. Typography Rules

### Font Family
- **Display**: `"Manuka", "Mānuka", "PolySans", Helvetica, Arial, sans-serif` — Klim Type Foundry, used at 900 weight for headlines.
- **Body / UI**: `"PolySans", -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif` — Gradient, the functional workhorse.
- **Mono**: `"PolySans Mono", ui-monospace, "SF Mono", Menlo, monospace` — UPPERCASE kickers, timestamps, tags.
- **Editorial Serif**: `"FK Roman Standard", Georgia, "Times New Roman", serif` — rare pull-quotes / print excerpts only.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Mega | Mānuka | 107px | 900 | 0.95 | -0.02em | Hero/feature splash headlines |
| Display Large | Mānuka | 72px | 900 | 1.0 | -0.02em | Section/package headlines |
| Display | Mānuka | 60px | 900 | 1.02 | -0.01em | Story-tile headlines |
| Headline | PolySans | 32px | 700 | 1.1 | -0.01em | Sub-feature, card titles |
| Title | PolySans | 24px | 700 | 1.2 | normal | List headlines, module titles |
| Subtitle | PolySans | 18px | 600 | 1.35 | normal | Deks, standfirst |
| Body Large | PolySans | 18px | 400 | 1.55 | normal | Article body lead |
| Body | PolySans | 16px | 400 | 1.6 | normal | Standard article reading text |
| Body Small | PolySans | 14px | 400 | 1.5 | normal | Secondary text, captions |
| Label / Kicker | PolySans Mono | 12px | 600 | 1.2 | 0.06em | UPPERCASE section tags, kickers |
| Caption / Meta | PolySans | 12px | 400 | 1.4 | normal | Bylines, timestamps, credits |

### Principles
- **Type is the brand.** Mānuka display at 60–107px is the loudest element on any page; it is allowed to dominate.
- **Mono = metadata.** PolySans Mono appears only in UPPERCASE for kickers, tags, timestamps, and labels — never for reading text.
- **Negative tracking on display.** Big Mānuka headlines tighten letter-spacing (-0.01 to -0.02em); body PolySans stays neutral.
- **Serif is a guest.** FK Roman is reserved for occasional pull-quotes and print-evoking moments — never general body.
- **No timid sizes.** Headlines jump scale dramatically; there is little middle ground between 18px deks and 60px+ display.

## 4. Component Stylings

### Buttons

**Primary (Ultraviolet)**
- Background: `#5200ff`
- Text: `#ffffff`
- Border: none
- Radius: 3px
- Padding: 12px 20px
- Font: 14px / 600 / PolySans
- Hover: brightness +6% / subtle mint outline
- Use: Primary CTA — "Subscribe", "Read more", newsletter signup

**Accent (Mint)**
- Background: `#3cffd0`
- Text: `#131313`
- Border: none
- Radius: 3px
- Padding: 12px 20px
- Font: 14px / 600 / PolySans
- Use: High-energy secondary CTA on dark canvas; tags and pills

**Outline (on dark)**
- Background: transparent
- Text: `#ffffff`
- Border: 1px solid `#c2c2c2`
- Radius: 3px
- Padding: 12px 20px
- Font: 14px / 600 / PolySans
- Hover: border `#3cffd0`, text `#3cffd0`
- Use: Secondary action, "Comments", "Share"

**Pill / Tag (Mono)**
- Background: transparent or `#2d2d2d`
- Text: `#3cffd0` or `#ffffff`
- Border: 1px solid `#3cffd0`
- Radius: 20px
- Padding: 4px 12px
- Font: 12px / 600 / PolySans Mono, UPPERCASE, +0.06em
- Use: Section tags, topic chips, StoryStream labels

### Inputs

**Default (dark)**
- Background: `#2d2d2d`
- Text: `#ffffff`
- Border: 1px solid `#313131`
- Radius: 3px
- Padding: 12px 14px
- Font: 16px / 400 / PolySans
- Placeholder: `#949494`
- Focus: border `#1eaedb`, 2px focus ring `#1eaedb`
- Use: Newsletter signup, search, comment box

**Error**
- Background: `#2d2d2d`
- Text: `#ffffff`
- Border: 1px solid `#5200ff`
- Radius: 3px
- Padding: 12px 14px
- Font: 16px / 400 / PolySans
- Use: Validation error — paired with mono caption below

### Cards / Story Tiles

**Color-Block Tile (signature)**
- Background: full-bleed saturated color (`#5200ff`, `#3cffd0`, `#ffffff`, yellow, pink, orange)
- Text: `#ffffff` on dark tiles / `#131313` on mint & white tiles
- Border: none
- Radius: 3px (often 0 for full-bleed packages)
- Padding: 20–24px
- Headline: Mānuka 60px / 900
- Use: Hero packages, featured stories — the defining Verge surface

**Standard Story Card (dark)**
- Background: `#131313` or `#2d2d2d`
- Text: `#ffffff`
- Border: none; 1px `#313131` frame on the thumbnail
- Radius: 3px
- Padding: 16px
- Kicker: PolySans Mono 12px UPPERCASE `#3cffd0`
- Use: StoryStream rows, list modules

**Inverted Card (light)**
- Background: `#ffffff`
- Text: `#131313`
- Border: none
- Radius: 3px
- Padding: 16–20px
- Use: Sponsored / special sections breaking from the dark canvas

### StoryStream Rail
- Vertical timeline rail down the left of the feed
- Rail line: `#313131`; node dots: `#3cffd0`
- Timestamp labels: PolySans Mono 12px UPPERCASE `#949494`
- Use: The chronological "bloggy basics" backbone of the homepage

### Tags / Badges
- Background: transparent or tile color
- Text: `#3cffd0` (default) or contextual tile color
- Border: 1px solid current accent
- Radius: 20px (pill)
- Padding: 4px 12px
- Font: 12px / 600 / PolySans Mono UPPERCASE
- Use: Section labels (`TECH`, `SCIENCE`, `REVIEWS`), topic chips

### Navigation
- Background: `#131313` (sticky)
- Logo: ultraviolet/mint lockup, sharp geometric mark
- Link text: PolySans 14px / 600, `#ffffff`; hover `#3cffd0`
- Active section: underline or `#5200ff` marker
- Use: Top nav bar — dark, dense, mono-flavored section list

### Links (inline body)
- Default: `#ffffff` with `#3cffd0` underline, or ultraviolet on light surfaces
- Hover: `#3860be`
- Use: In-article links — underline persistent, color shift on hover


**Tier 1 sources:** https://www.theverge.com (live production site, verified via live DOM getComputedStyle).

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Common values: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px
- Full-bleed packages ignore content padding and run edge-to-edge
- Dense feed rhythm — tighter vertical gaps than typical editorial sites

### Grid & Container
- Wide max-width (~1200–1400px) with a prominent left StoryStream rail
- Asymmetric, modular grid — color blocks of varying spans, not a uniform column grid
- Mobile collapses to a single stacked feed with the rail flattened
- Full-bleed hero packages break the container deliberately

### Whitespace Philosophy
- **Density over calm.** The feed is intentionally packed and kinetic — it should feel alive.
- **Color blocks ARE the whitespace.** Negative space is often filled with saturated color rather than empty canvas.
- **Headlines claim space.** Mānuka display is given room to be enormous even in dense layouts.

### Border Radius Scale
- Sharp (2–3px): Default — buttons, cards, inputs, tiles
- Comfortable (4px): Slightly softened panels
- Pill (20px): Tags, mono chips
- Large (24–40px): Occasional rounded media / feature pills
- Round (50%): Avatars, node dots

## 6. Depth & Elevation

The Verge is largely **flat** — depth comes from color contrast and saturation collisions, not shadow. On a `#131313` canvas, a `#5200ff` block reads as "elevated" purely through hue, the way fluorescent ink pops on newsprint.

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow; color-block contrast only | Tiles, feed rows, canvas |
| Surface (Level 1) | `#2d2d2d` fill on `#131313` | Secondary panels, inputs |
| Frame (Level 2) | 1px `#313131` border | Media thumbnails, cards |
| Floating (Level 3) | `0 4px 16px rgba(0,0,0,0.5)` | Dropdowns, sticky nav on scroll |
| Modal (Level 4) | `0 8px 32px rgba(0,0,0,0.6)` + `#131313` scrim 0.7 | Overlays, lightbox media |

**Shadow Philosophy**: Shadows are deep and pure-black-tinted (the canvas is already dark), used sparingly and only for true overlays. The brand's "elevation" language is chromatic — a mint or ultraviolet block is the loudest thing on screen without any shadow at all.

## 7. Do's and Don'ts

### Do
- Use `#131313` as the canvas — almost-black, never pure `#000000`
- Pair ultraviolet (`#5200ff`) and mint (`#3cffd0`) as a deliberate high-tension collision
- Set headlines in Mānuka 900 at 60px+ — let type dominate
- Use PolySans Mono UPPERCASE for kickers, tags, and timestamps
- Use full-bleed saturated color blocks for featured story tiles
- Keep most radii sharp (2–3px); reserve pills (20px) for mono tags
- Use mint as the hover/active accent on dark surfaces

### Don't
- Don't default to a white/light homepage — The Verge is dark-first
- Don't use timid, mid-saturation colors — accents are hazard-bright or nothing
- Don't set body text in Mānuka — display only; reading text is PolySans
- Don't use PolySans Mono for paragraphs — it's metadata/labels only
- Don't over-round UI — heavy radii undercut the sharp, "unfinished interface" feel
- Don't rely on shadows for hierarchy — use color-block contrast
- Don't mute the brand into corporate politeness — the energy IS the identity

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Single stacked feed; rail flattened to inline timestamps; display type scales to 36–48px |
| Tablet | 600–1024px | 2-column tile grid; rail visible; headlines 48–72px |
| Desktop | >1024px | Full modular grid + left StoryStream rail; display up to 107px |
| Wide | >1400px | Max container; larger color-block spans |

### Touch Targets
- Buttons / pills: minimum 40px tall
- Nav links: 44px tap height on mobile
- Tag chips: 32px minimum with 12px h-padding

### Collapsing Strategy
- StoryStream rail collapses into inline mono timestamps on mobile
- Multi-span color blocks stack to full-width single column
- Mānuka display clamps down (`clamp()`-style) so 107px never overflows narrow screens
- Sticky nav condenses to logo + hamburger

### Image Behavior
- Thumbnails framed with 1px `#313131`
- Full-bleed package imagery runs edge-to-edge, ignoring container padding
- Aspect ratios preserved; lazy-loaded in the feed

## 9. Agent Prompt Guide

### Quick Color Reference
- Canvas background: `#131313`
- Surface: `#2d2d2d`
- Primary accent (purple): `#5200ff`
- Secondary accent (mint): `#3cffd0`
- Primary text: `#ffffff`
- Secondary text: `#949494`
- Muted text: `#e9e9e9`
- Inverted text (on light tiles): `#131313`
- Link hover: `#3860be`
- Focus ring: `#1eaedb`
- Strong border: `#c2c2c2`
- Image frame: `#313131`

### Example Component Prompts
- "Create a Verge story tile: full-bleed `#5200ff` background, no radius, 24px padding. Kicker in PolySans Mono 12px UPPERCASE `#3cffd0`, +0.06em tracking. Headline in Mānuka 60px weight 900 white, line-height 1.0, -0.01em. Byline 12px PolySans `#e9e9e9`."
- "Build a primary CTA: `#5200ff` bg, white text, 14px weight 600 PolySans, 12px 20px padding, 3px radius. Hover: mint `#3cffd0` 1px outline."
- "Design a StoryStream row: `#131313` bg, left rail line `#313131` with a `#3cffd0` node dot, mono timestamp 12px `#949494` UPPERCASE, headline PolySans 24px weight 700 white, 16px padding, 1px `#313131` frame on the thumbnail."
- "Create a section tag chip: transparent bg, 1px `#3cffd0` border, 20px radius, 4px 12px padding, text `#3cffd0` PolySans Mono 12px UPPERCASE."
- "Build a newsletter input on dark: `#2d2d2d` bg, 1px `#313131` border, 3px radius, white text 16px PolySans, placeholder `#949494`. Focus: `#1eaedb` 2px ring."

### Iteration Guide
1. Always start on the dark canvas `#131313` — never white-first
2. Primary purple is `#5200ff`; mint `#3cffd0` is its required co-accent
3. Display headlines: Mānuka 900, 60px+, tight tracking
4. Metadata/kickers/tags: PolySans Mono, UPPERCASE, mint
5. Keep radii sharp (2–3px); pills only for mono tags (20px)
6. Use saturated color blocks for emphasis instead of shadows
7. Body reading text: PolySans 16px / 400, line-height 1.6

---

## 10. Voice & Tone

The Verge writes like a sharp, plugged-in friend who knows the tech industry intimately and isn't afraid to be funny, skeptical, or blunt about it. Headlines are punchy, often playful or provocative, and frequently break the fourth wall. The voice is conversational, opinionated, and irreverent — closer to a group chat than a press release — while staying rigorous and well-sourced underneath. It assumes a smart, terminally-online reader who gets the references.

| Context | Tone |
|---|---|
| Headlines | Punchy, witty, sometimes provocative. Active voice. May be a complete sentence or a wry fragment. |
| Kickers / tags | Terse, UPPERCASE, categorical (`TECH`, `EXCLUSIVE`, `REVIEW`). |
| Body | Conversational but reported — opinion grounded in facts and sources. |
| CTAs | Direct, low-friction (`Read more`, `Subscribe`, `Sign up`). |
| Reviews | Verdict-forward, scored, unafraid to pan a product. |
| Newsletter / promo | Friendly, a little self-aware, never corporate-salesy. |

**Avoid**: PR-speak, breathless hype without skepticism, both-sides hedging that dodges a verdict, and stiff AP-wire neutrality. The Verge has a point of view and states it.

## 11. Brand Narrative

The Verge launched in 2011 under Vox Media as a technology, science, and culture publication, quickly becoming a defining voice in consumer-tech journalism. Its 2022 redesign — developed entirely in-house by Vox Media's design team — was a statement against the homogenized, SEO-flattened, algorithm-fed web. The team described going "back to bloggy basics": a chronological StoryStream homepage that surfaces the staff's actual reading and linking, reasserting editorial judgment over machine ranking.

The visual identity was built around the idea of "an unfinished interface between the present and the future" — hence the sharp logo, the hazard-tape collision of ultraviolet and mint, and the aggressively current dark aesthetic. The redesign was widely covered (Nieman Lab, TypeRoom, Brand New, Fonts In Use) as a rare case of a major publication making its design louder and more opinionated rather than safer.

What The Verge refuses: the calm white-canvas neutrality of legacy news sites, the personality-free uniformity of algorithmic feeds, and the muted "trustworthy" palettes of corporate media. It bets that a strong, even abrasive, identity builds more loyalty than inoffensive blandness — that a tech audience wants a publication with taste and a point of view, rendered in type loud enough to match.

## 12. Principles

1. **Dark-first, always.** The canvas is `#131313`. Light is the exception (sponsored/inverted tiles), never the default. The brand lives in the dark.
2. **Collision over harmony.** Ultraviolet and mint are meant to clash like hazard tape. The tension is the point; don't soften it into a tasteful gradient.
3. **Type is the loudest voice.** Mānuka display at 60–107px dominates intentionally. If a headline isn't commanding the page, it's too small.
4. **Metadata speaks in mono.** Kickers, tags, and timestamps wear PolySans Mono UPPERCASE — a consistent signal that says "this is the interface talking."
5. **Color is structure.** Saturated blocks organize the page and create hierarchy; shadows are nearly absent. Contrast does the work.
6. **Editorial judgment over algorithm.** The StoryStream rail is chronological and human-curated by design — the layout itself argues for taste over ranking.
7. **Sharp, not soft.** Small radii and hard edges reinforce the "unfinished future interface" concept. Over-rounding is off-brand.
8. **Loud, but legible.** Energy never sacrifices readability — body stays PolySans 16px at comfortable line-height on high-contrast surfaces.

## 13. Personas

*Personas below are fictional archetypes informed by The Verge's publicly described tech-media audience, not individual people.*

**Marcus, 29, Brooklyn.** Product designer at a startup, perpetually online. Reads The Verge multiple times a day on mobile during commutes and breaks. He's there for the take as much as the news — he wants the witty headline and the verdict, not a neutral wire summary. Loves the chronological feed because it feels like following smart people's bookmarks. Notices and appreciates the typography; the redesign is part of why he trusts the brand's taste.

**Priya, 41, Austin.** Engineering manager who follows hardware reviews and AI coverage closely before making purchase and team-tooling decisions. Reads on desktop, scans the StoryStream for what's moving, and clicks through to full reviews for the scored verdict. Values that The Verge will actually pan a bad product. The bold visual identity reads to her as confidence, not gimmick.

**Devon, 23, Chicago.** CS student and gadget enthusiast. Came for the YouTube and TikTok content, stayed for the site. Treats The Verge like a feed — fast scrolling, color-block tiles catching his eye, tapping kicker tags to dive into a topic. The mint-and-purple aesthetic feels native to how he already consumes media; a polite gray news site would feel old to him.

## 14. States

| State | Treatment |
|---|---|
| **Empty (feed/search)** | Single line of `#949494` PolySans body explaining the absence, plus a mint `#3cffd0` text link to browse all sections. No illustration. |
| **Loading (first paint)** | Skeleton blocks at `#2d2d2d` on the `#131313` canvas, matching tile dimensions. Subtle shimmer. Headlines render last. |
| **Loading (more stories)** | Mint `#3cffd0` spinner or "Loading…" in PolySans Mono UPPERCASE at the foot of the StoryStream. Content stays in place. |
| **Error (inline field)** | 1px `#5200ff` border on the input, error text below in PolySans Mono UPPERCASE 12px `#5200ff`. One actionable line. |
| **Error (page)** | Centered Mānuka headline (e.g., "404 — Lost in the future"), `#949494` subtext, mint link back home. On-brand and a little playful. |
| **Hover (link)** | Inline link shifts to `#3860be`; underline persists. On dark UI, interactive elements shift toward mint `#3cffd0`. |
| **Hover (tile)** | Color block brightens slightly / gains a mint outline; headline underline appears. |
| **Focus (a11y)** | 2px `#1eaedb` focus ring on all interactive elements. Always visible — never suppressed. |
| **Active (nav section)** | Section label gains `#5200ff` underline marker; mono tag fills mint. |
| **Disabled** | Element drops to ~40% opacity; border stays `#313131` so geometry is stable. |
| **Success (newsletter signup)** | Inline confirmation in mint `#3cffd0`, PolySans 14px, with a brief check mark. No modal for routine confirmations. |

## 15. Motion & Easing

**Durations** (named):

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Reduced-motion fallback, instant state flips |
| `motion-fast` | 150ms | Hover, focus, link color shifts, tag fills |
| `motion-standard` | 250ms | The default — tile hovers, dropdowns, nav reveals |
| `motion-slow` | 400ms | Emphasized — package transitions, hero reveals |
| `motion-feed` | 300ms | StoryStream item entrance as new stories load in |

**Easings:**

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Things appearing — feed items, dropdowns, overlays |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals, pops |
| `ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Two-way — tile hover lifts, tab content |
| `ease-snap` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Snappy, slightly punchy hover/active — matches the brand's energetic feel |

**Signature motions.**

1. **Feed entrance.** As new StoryStream items load, they fade-and-rise from `y+12px` over `motion-feed / ease-enter`, with the mint node dot scaling in. Reinforces the live, chronological feel.
2. **Tile hover.** Color-block tiles brighten and gain a 1px mint outline over `motion-fast / ease-snap`; the headline underline draws left-to-right. Snappy, not floaty.
3. **Accent collision.** Hover/active states on dark UI transition white → mint (`#3cffd0`) over `motion-fast`. The color shift is the primary feedback, not movement.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; entrances become simple opacity changes, no translate. Fully usable, just static.

<!--
OmD v0.1 Sources — The Verge

Token-level claims (sections 1–9) grounded in:
- The Verge Design System token reference (shadcn.io/design/theverge): canvas #131313,
  surface #2d2d2d, jelly mint #3cffd0, ultraviolet #5200ff, text #ffffff/#949494/#e9e9e9,
  link hover #3860be, focus #1eaedb, border #c2c2c2, image frame #313131, base radius 3px,
  Mānuka 900 display 60–107px, PolySans body, PolySans Mono UPPERCASE, FK Roman editorial.
- Fonts In Use (fontsinuse.com/uses/48536) — confirms Mānuka (Klim), PolySans (Gradient),
  FK Roman (Florian Karsten) as the 2022 redesign typefaces.
- WebSearch (June 2026): TypeRoom, Nieman Lab, Brand New (UnderConsideration) — confirm
  in-house Vox Media redesign, "back to bloggy basics," StoryStream, dark hazard-tape
  palette, "unfinished interface between present and future" logo concept.

Note: brandpalettes.com "Verge" entry (#4CC2F1) refers to the Verge CRYPTOCURRENCY,
NOT The Verge media brand — excluded as a false match.

Direct WebFetch of theverge.com was blocked in this environment; live-DOM token
verification was not possible. Tokens above rely on the design-system reference and
corroborating redesign coverage.

Philosophy layer (sections 10–15): voice/tone and narrative are editorial readings of
The Verge's publicly documented 2022 redesign and editorial positioning. Personas (§13)
are fictional archetypes informed by the publication's described tech-media audience.
Motion tokens are conventions consistent with the brand's energetic, feed-first aesthetic,
not published Verge values.
-->
