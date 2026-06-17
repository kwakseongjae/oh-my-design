---
id: nintendo
name: Nintendo
country: JP
category: consumer-tech
homepage: "https://www.nintendo.com/us/"
primary_color: "#e60012"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=nintendo.com&sz=128"
verified: "2026-06-17"
added: "2026-06-17"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-06-17"
  note: "primary = Nintendo red (#e60012), the brand's near-immutable signature, used identically on US (nintendo.com/us) and JP (nintendo.com/jp) surfaces — links, primary CTAs, logo. US text ink is #484848 with Geologica Variable; JP text ink is #3c3c3c with the YakuHan/Hiragino CJK stack. Translucent overlay/shadow values appear in prose/components only."
  colors:
    primary: "#e60012"
    ink: "#484848"
    ink-jp: "#3c3c3c"
    muted: "#727272"
    muted-jp: "#8c8c8c"
    disabled: "#c8c8c8"
    on-primary: "#ffffff"
    canvas: "#ffffff"
    surface: "#f8f8f8"
    surface-alt: "#efefef"
    surface-jp: "#f2f2f2"
    hairline: "#e0e0e0"
    eshop-green: "#468254"
    accent-blue: "#4b5cce"
    accent-navy: "#27455c"
  typography:
    family: { sans: "Geologica Variable", cjk: "YakuHanJPs, Roboto, Hiragino Kaku Gothic ProN", mono: "system-ui" }
    display:      { size: 28, weight: 600, lineHeight: 1.35, use: "Section/feature headline (H2), Geologica" }
    subheading:   { size: 21, weight: 600, lineHeight: 1.40, use: "Card / panel head (H2)" }
    label:        { size: 16, weight: 600, lineHeight: 1.40, use: "Section label, nav, eyebrow" }
    body:         { size: 16, weight: 400, lineHeight: 1.40, use: "Standard reading text, US" }
    body-jp:      { size: 16, weight: 400, lineHeight: 2.00, use: "Standard reading text, JP (32px line-height)" }
    button:       { size: 18, weight: 600, lineHeight: 1.00, use: "Primary CTA label" }
    nav:          { size: 14, weight: 600, lineHeight: 1.00, use: "Top nav menu item" }
    caption:      { size: 14, weight: 400, lineHeight: 1.40, use: "Search input, small labels" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48 }
  rounded: { xs: 2, sm: 4, md: 8, lg: 12, pill: 48, full: 9999 }
  shadow:
    soft: "rgba(0,0,0,0.07) 0px 2px 8px 0px"
    card: "rgba(72,72,72,0.15) 0px 4px 16px 0px"
  components:
    button-primary: { type: button, bg: "#e60012", fg: "#ffffff", radius: "8px", height: "48px", padding: "0 24px", font: "18px / 600 Geologica", use: "Primary CTA — Log in, Learn more, Start shopping" }
    button-play: { type: button, bg: "#e60012", fg: "#ffffff", radius: "48px", height: "32px", padding: "0 16px", font: "16px / 600 Geologica", use: "Inline Play pill on media cards" }
    button-utility: { type: button, bg: "#f8f8f8", fg: "#484848", radius: "20px", height: "32px", padding: "8px 12px", font: "14px / 600 Geologica", use: "Header utility pills — Search, Wish List, Cart" }
    link-red: { type: button, fg: "#e60012", font: "16px / 600 Geologica", use: "Trending-topic / inline navigational link, red text on transparent" }
    nav-item: { type: tab, fg: "#484848", font: "14px / 600 Geologica", use: "Top nav menu trigger (Explore, Shop, Support)", active: "text #e60012" }
    card-media: { type: card, bg: "#ffffff", radius: "12px", shadow: "rgba(0,0,0,0.07) 0px 2px 8px", use: "Game/topic media tile" }
    input-search: { type: input, bg: "#ffffff", fg: "#484848", radius: "0px", font: "14px / 400 Geologica", use: "Header search field, bottom-border affordance" }
    carousel-arrow: { type: button, fg: "#dadada", radius: "8px", padding: "16px", use: "Hero carousel prev/next, rgba(0,0,0,0.3) scrim bg" }
  components_harvested: true
---

# Design System Inspiration of Nintendo

## 1. Visual Theme & Atmosphere

Nintendo's web presence is a masterclass in disciplined brand craft: a near-shadowless, light-canvas system where a single saturated red does almost all the emotional work. The page opens on pure white (`#ffffff`) with soft cool-grey surfaces (`#f8f8f8`, `#efefef`) segmenting content, and text rendered in a warm dark grey (`#484848` on the US site, `#3c3c3c` on the Japanese site) — never pure black for body copy. Against that quiet neutral ground, the signature **Nintendo red (`#e60012`)** is reserved with surgical restraint: it is the color of every primary call-to-action, every inline navigational link, and the wordmark itself. The brand has kept this red essentially unchanged for decades, and the web treats it as sacred — the eye is trained that "red means action, red means Nintendo."

The typographic personality differs by region but shares the same calm confidence. The US store runs **Geologica Variable** — a humanist sans with subtle warmth — at a friendly 16px body and 28px feature headlines, both at weight 600 for headings and 400 for prose. The Japanese site runs the authentic CJK stack **`YakuHanJPs, Roboto, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Arial, nc3Jp, sans-serif`**, with YakuHan handling tightened half-width kana punctuation and Hiragino carrying the kanji — a deliberately legible, generously line-spaced (32px on 16px) reading rhythm that respects dense Japanese text. The split is regional, not philosophical: both surfaces feel orderly, optimistic, and family-friendly rather than hard-sell.

What distinguishes Nintendo from louder consumer-tech peers is its restraint with depth and geometry. Shadows are barely-there — a whisper of `rgba(0,0,0,0.07) 0px 2px 8px` lifts media cards, and a slightly firmer `rgba(72,72,72,0.15) 0px 4px 16px` floats featured tiles; separation otherwise comes from flat tint and a thin `#e0e0e0` hairline. Geometry is gently rounded: 12px media cards, 8px primary buttons, fully-pill (48px) inline Play affordances, and 20px utility pills in the header. On the Japanese site the radii tighten to 2-3px with circular (50%) icon chips, a subtly more compact, information-dense register. The result is an interface that feels engineered, trustworthy, and welcoming all at once — playful where it persuades, precise everywhere else.

**Key Characteristics:**
- Single signature **Nintendo red (`#e60012`)** reserved for primary CTAs, inline links, and the wordmark — the system's one "action" color, identical across US and JP
- Warm dark-grey ink instead of black — `#484848` (US, Geologica) and `#3c3c3c` (JP, CJK stack)
- **Geologica Variable** on the US store; authentic **YakuHan + Hiragino Kaku Gothic ProN** CJK stack on the Japanese site
- Light canvas with cool-grey tint surfaces (`#f8f8f8`, `#efefef`, `#f2f2f2` JP) and a single `#e0e0e0` hairline
- Near-shadowless depth — `rgba(0,0,0,0.07) 0px 2px 8px` soft lift, `rgba(72,72,72,0.15) 0px 4px 16px` for featured cards
- Gently rounded geometry: 12px cards, 8px primary buttons, 48px Play pills, 20px header pills (US); 2-3px + 50% circles (JP)
- Restrained secondary accents — eShop green (`#468254`), occasional blue (`#4b5cce`) and navy (`#27455c`) for service/section theming, never competing with red
- Muted-grey neutral ladder (`#727272` → `#c8c8c8`) for secondary and disabled text

## 2. Color Palette & Roles

### Primary
- **Nintendo Red** (`#e60012`): The brand's near-immutable signature. Primary CTA background (Log in, Learn more, Start shopping), the Play pill, all inline navigational/trending links, and the wordmark. The single saturated "action" hue, confirmed identical on both `nintendo.com/us` (rgb 230,0,18) and `nintendo.com/jp`.

### Text / Ink
- **Ink Grey (US)** (`#484848`): Primary body, heading, nav, and label color on the US store — a warm dark grey, never pure black.
- **Ink Grey (JP)** (`#3c3c3c`): Primary text color on the Japanese site — a slightly deeper warm grey paired with the CJK stack.
- **Muted Grey** (`#727272`): Secondary text, captions, metadata on the US site.
- **Muted Grey (JP)** (`#8c8c8c`): Secondary/tertiary text on the Japanese site.
- **Disabled Grey** (`#c8c8c8`): Disabled controls, placeholder, lowest-emphasis labels and carousel chrome.

### Neutral & Surface
- **Pure White** (`#ffffff`): Page background, card surfaces, and text on red/dark.
- **Surface Grey** (`#f8f8f8`): Cool-grey tint for header utility pills and segmented blocks (US).
- **Surface Alt** (`#efefef`): Slightly firmer grey for inset fields and alternating bands (US).
- **Surface Grey (JP)** (`#f2f2f2`): The Japanese site's primary tinted surface for chips and panels.
- **Hairline** (`#e0e0e0`): Thin borders, dividers, and card outlines — the primary separation device in the near-shadowless system.

### Secondary Accents (service / section theming)
- **eShop Green** (`#468254`): Commerce/store accent used sparingly on shop surfaces and availability states.
- **Accent Blue** (`#4b5cce`): Occasional section/service theming (online services), kept subordinate to red.
- **Accent Navy** (`#27455c`): Deep navy band/section background for immersive editorial moments.
- **On-Primary White** (`#ffffff`): Text/iconography on the red CTA and dark backgrounds.

## 3. Typography Rules

### Font Family
- **US (sans)**: `Geologica Variable`, with fallback `-apple-system, "system-ui", sans-serif` — used for all US-store headings, nav, body, and button labels.
- **JP (CJK)**: `YakuHanJPs, Roboto, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", Arial, nc3Jp, sans-serif` — YakuHan tightens half-width kana punctuation, Roboto covers Latin, Hiragino Kaku Gothic ProN renders kanji/kana; `nc3Jp` is Nintendo's bundled web font fallback.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Notes |
|------|------|------|--------|-------------|-------|
| Feature Headline (H2) | Geologica | 28px (1.75rem) | 600 | 1.35 (37.8px) | Section/feature titles, US |
| Panel Heading (H2) | Geologica | 21px (1.31rem) | 600 | 1.40 (29.4px) | Card / login panel heads |
| Section Label | Geologica | 16px (1.00rem) | 600 | 1.40 (22.4px) | Eyebrow labels ("Trending topics"), nav groups |
| Body | Geologica | 16px (1.00rem) | 400 | 1.40 (22.4px) | Standard reading text, US |
| Body (JP) | CJK stack | 16px (1.00rem) | 400 | 2.00 (32px) | Standard reading text, Japanese site |
| Primary Button | Geologica | 18px (1.13rem) | 600 | 1.00 | Primary CTA label |
| Nav Item | Geologica | 14px (0.88rem) | 600 | 1.00 | Top nav menu triggers |
| Nav Item (JP) | CJK stack | 14px (0.88rem) | 700 | 1.00 | Japanese top nav (heavier weight) |
| Caption / Input | Geologica | 14px (0.88rem) | 400 | 1.40 | Search field, small labels |

### Principles
- **Weight 600 carries headings; 400 carries prose.** Across US headings (28px, 21px, 16px labels) the heading weight is a consistent 600 semibold — confident but never heavy. Body sits at 400.
- **Regional font discipline.** Geologica owns the US store; the YakuHan + Hiragino CJK stack owns the Japanese site. The two never swap — each is tuned for its script's legibility.
- **Generous Japanese line-height.** JP body runs at 32px line-height on 16px text (2.0) versus 1.4 on the US site — denser scripts get more vertical air for readability.
- **No display heroics.** Headlines top out at 28px on the home surface; Nintendo leans on imagery and the red accent for impact rather than oversized type.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#e60012`
- Text: `#ffffff`
- Radius: 8px
- Padding: 0px 24px
- Height: 48px
- Font: 18px Geologica weight 600
- Use: Primary call-to-action — "Log in", "Learn more", "Start shopping", "See all news articles"

**Play Pill**
- Background: `#e60012`
- Text: `#ffffff`
- Radius: 48px
- Padding: 0px 16px
- Height: 32px
- Font: 16px Geologica weight 600
- Use: Inline "Play" affordance on media cards — fully pill-shaped

**Utility Pill**
- Background: `#f8f8f8`
- Text: `#484848`
- Radius: 20px
- Padding: 8px 12px
- Height: 32px
- Font: 14px Geologica weight 600
- Use: Header utility actions — "Search", "Wish List", "Cart"

**Red Inline Link**
- Text: `#e60012`
- Font: 16px Geologica weight 600
- Use: Trending-topic and inline navigational links ("Nintendo Direct", "Games on sale") — red text on transparent, no background

**Carousel Arrow**
- Background: `rgba(0,0,0,0.3)`
- Text: `#dadada`
- Radius: 8px
- Padding: 16px
- Use: Hero/product carousel previous & next controls — dark scrim chip over imagery

### Inputs & Forms

**Header Search**
- Background: `#ffffff`
- Text: `#484848`
- Radius: 0px
- Font: 14px Geologica weight 400
- Use: Header search field ("Search games, hardware, news, etc") — bottom-border affordance, no fill

### Cards & Containers

**Media Tile**
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(0,0,0,0.07) 0px 2px 8px`
- Use: Game / topic / news media tile — the workhorse content card

**Featured Card**
- Background: `#ffffff`
- Radius: 12px
- Shadow: `rgba(72,72,72,0.15) 0px 4px 16px`
- Use: Elevated featured/promoted tile — firmer lift than the standard media tile

### Badges

**Red Status Pill**
- Background: `#e60012`
- Text: `#ffffff`
- Radius: 48px
- Font: 14px Geologica weight 600
- Use: Emphasis / status pill (e.g. "New", availability) — the red action color in compact form

### Navigation
- Background: `#ffffff`
- Text: `#484848`
- Font: 14px Geologica weight 600
- Height: 48px nav row (US) / 72px header (JP)
- Active: red `#e60012` text/indicator on active item
- Use: Top horizontal nav ("Explore", "Shop", "Support" on US; "本体・グッズ", "ゲームソフト", "トピックス", "サポート" on JP)

---

**Verified:** 2026-06-17 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces US + JP)
**Tier 1 sources:** https://www.nintendo.com/us/ (US store — nav, hero CTAs, media cards, utility pills, live DOM), https://www.nintendo.com/jp/ (Japanese site — CJK font stack, nav, red accent confirmation, live DOM)
**Tier 2 sources:** getdesign.md/nintendo — 0 DESIGN.md files (no match); styles.refero.design/?q=nintendo — no Nintendo-specific style page (generic catalog returned)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 8px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px
- Notable: Primary CTAs use 24px horizontal padding with zero vertical padding (height-driven at 48px); utility pills use a compact 8px/12px

### Grid & Container
- Centered, generous-margin content column with full-width hero/carousel banners at the top
- Trending-topics and feature sections arranged as horizontal media-tile rows / carousels
- Feature bands alternate white (`#ffffff`) with subtle grey tint, separated by `#e0e0e0` hairlines
- Media tiles use 12px radius and group games, news, and topics

### Whitespace Philosophy
- **Calm, breathable rhythm**: despite being a content- and commerce-dense product, the home surface is airy with generous vertical spacing between sections.
- **Flat segmentation**: sections separate by background tint and hairline, rarely by heavy elevation.
- **Imagery does the heavy lifting**: large key-art banners carry visual energy so the chrome can stay quiet and orderly.

### Border Radius Scale
- Extra-small (2px): JP chips, fine inset elements
- Small (4px): small containers, inline chips
- Medium (8px): primary buttons, carousel-arrow chips
- Large (12px): media/feature cards — the workhorse
- Pill (20px): header utility pills
- Full (48px / 9999px): Play affordance and status pills; 50% circular icon chips on JP

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f8f8f8` / `#f2f2f2` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e0e0e0` border | Card outlines, dividers |
| Soft (Level 3) | `rgba(0,0,0,0.07) 0px 2px 8px` | Standard media tiles, subtle lift |
| Card (Level 4) | `rgba(72,72,72,0.15) 0px 4px 16px` | Featured / promoted tiles |

**Shadow Philosophy**: Nintendo runs a near-shadowless, light system. Live inspection found the strongest standard elevation to be a whisper-soft `rgba(0,0,0,0.07) 0px 2px 8px` on media cards, with featured tiles reaching only `rgba(72,72,72,0.15) 0px 4px 16px` — itself a brand-warm grey shadow rather than pure black. Most separation is done flat, through `#f8f8f8` tint and `#e0e0e0` hairlines. The Japanese site is flatter still (tighter 2-3px radii, minimal shadow). This restraint keeps the interface feeling clean, fast, and approachable — emphasis is reached for with the red accent (`#e60012`), never with heavy drop shadows.

## 7. Do's and Don'ts

### Do
- Reserve Nintendo red (`#e60012`) for primary CTAs, inline links, and the wordmark — keep it the single "action" color
- Use warm dark grey for text (`#484848` US, `#3c3c3c` JP) instead of pure black
- Use Geologica Variable on Western/US surfaces and the YakuHan + Hiragino CJK stack on Japanese surfaces
- Separate sections with flat `#f8f8f8`/`#f2f2f2` tint and `#e0e0e0` hairlines rather than heavy shadows
- Keep elevation whisper-soft — `rgba(0,0,0,0.07) 0px 2px 8px` for standard cards
- Use 12px radius for media cards, 8px for primary buttons, 48px pills for inline Play affordances
- Let large key-art imagery carry visual energy so the UI chrome stays calm
- Use weight 600 for headings and 400 for body

### Don't
- Spread red across many elements — it dilutes the single-action signal
- Use pure black (`#000000`) for body text — reserve warm grey
- Swap the regional fonts — Geologica stays Western, the CJK stack stays Japanese
- Reach for heavy drop shadows or hard elevation — the system is flat and light
- Introduce a competing saturated accent — eShop green, blue, and navy stay subordinate to red
- Set oversized display headlines — the home surface tops out around 28px and leans on imagery
- Use sharp square corners on cards or pills — geometry is gently rounded
- Tighten Japanese body line-height below its generous 2.0 rhythm

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, condensed nav (hamburger), carousels become swipe rows |
| Tablet | 640-1024px | 2-up media tiles, moderate padding |
| Desktop | 1024-1440px | Full layout, multi-column feature rows, centered content with margins |

### Touch Targets
- Primary CTAs at 48px height for a comfortable, unmistakable tap target
- Header utility pills at 32px height with 8px/12px padding
- Nav items spaced within the 48px (US) / 72px (JP) header
- Carousel arrows padded at 16px for easy reach over imagery

### Collapsing Strategy
- Hero/carousel banners maintain full-width treatment, reduce internal padding on mobile
- Feature media-tile rows: multi-column → 2-up → single-column swipe
- Top nav: horizontal menu → hamburger toggle
- Tinted/white alternating bands maintain full-width treatment

### Image Behavior
- Key-art banners and media tiles maintain 12px radius across breakpoints
- Card shadows stay whisper-soft at all sizes, consistent with the flat system
- Game/box-art imagery scales to fit tile aspect ratios without added borders

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / link / brand: Nintendo Red (`#e60012`)
- Heading / body text (US): Ink Grey (`#484848`)
- Heading / body text (JP): Ink Grey (`#3c3c3c`)
- Secondary text: Muted Grey (`#727272`)
- Disabled: Disabled Grey (`#c8c8c8`)
- Background: Pure White (`#ffffff`)
- Tinted surface: Surface Grey (`#f8f8f8`) / `#f2f2f2` (JP)
- Hairline: `#e0e0e0`
- Secondary accents: eShop Green (`#468254`), Blue (`#4b5cce`), Navy (`#27455c`)

### Example Component Prompts
- "Create a Nintendo-style hero on white background with a full-width key-art banner. Section label at 16px Geologica weight 600, color #484848. One primary red CTA: #e60012 background, white text, 8px radius, 0 24px padding, 48px height, 18px Geologica weight 600 — 'Learn more'. Carousel arrows as rgba(0,0,0,0.3) chips with 8px radius."
- "Design a media tile: white background, 12px radius, soft shadow rgba(0,0,0,0.07) 0px 2px 8px. Title 21px Geologica weight 600, #484848. An inline red Play pill: #e60012 background, white text, 48px radius, 32px height."
- "Build a header: white nav, 48px row. Utility pills (Search, Wish List, Cart) at #f8f8f8 background, #484848 text, 20px radius, 32px height, 14px Geologica weight 600. Nav items 14px weight 600, red #e60012 on active."
- "Create a Japanese-locale layout using font-family: YakuHanJPs, Roboto, 'Hiragino Kaku Gothic ProN', sans-serif. Body 16px weight 400 with 32px line-height, color #3c3c3c. Red accent #e60012 for links and CTAs."

### Iteration Guide
1. Nintendo red (`#e60012`) is the single action color — don't spread it
2. Geologica Variable for US/Western; YakuHan + Hiragino Kaku Gothic ProN for Japanese
3. Text is warm grey (`#484848` US / `#3c3c3c` JP), never pure black
4. Keep elevation whisper-soft (`rgba(0,0,0,0.07) 0px 2px 8px`); separate with tint + `#e0e0e0` hairline
5. Geometry: 12px cards, 8px primary buttons, 48px Play pills, 20px header pills
6. Headings at weight 600, body at 400; home headlines top out around 28px
7. Let key-art imagery carry the energy; keep chrome calm

---

## 10. Voice & Tone

Nintendo's voice is **warm, inviting, and family-friendly** — playful where it persuades, plain and orderly where it informs. Copy is welcoming and benefit-first ("Experience The World's Game like never before", "Get up and move with friends and family") without slipping into hype or pressure. Calls-to-action are gentle imperatives — "Learn more", "Start shopping", "Pre-order now!" — and the rare exclamation reads as genuine enthusiasm rather than urgency-marketing. The brand speaks to a broad audience (kids, parents, lifelong fans) at once, so the register stays clear, optimistic, and never condescending or jargon-heavy.

| Context | Tone |
|---|---|
| Hero / feature headlines | Inviting, experiential. "Experience The World's Game like never before." Enthusiastic, never hard-sell. |
| CTAs | Gentle imperatives. "Learn more", "Start shopping", "See all news articles". |
| Trending topics / links | Plain and direct. "Nintendo Direct", "Games on sale", "Online services". |
| Product / availability | Benefit-first, friendly. "Pre-order now! Blast off on a high…", "Available now!". |
| Support / account | Calm, reassuring, helpful. Plain instructions over marketing language. |

**Voice samples (verbatim from live homepage 2026-06-17):**
- "Experience The World's Game like never before" — feature headline (experiential invitation). *(verified live)*
- "Get up and move with friends and family" — feature headline (inclusive, family-first). *(verified live)*
- "Trending topics" — section label (plain, orderly navigation). *(verified live)*

**Forbidden register**: fear-based or urgency-manipulation marketing, dense industry jargon left unexplained, edgy/exclusionary humor, condescension toward younger players, exclamation-stacked hype.

## 11. Brand Narrative

Nintendo Co., Ltd. (任天堂) is a **Kyoto, Japan**-headquartered video-game and consumer-hardware company, originally founded in **1889** as a maker of *hanafuda* playing cards before transforming, across the late 20th century, into one of the most recognizable entertainment brands in the world. Its design identity is defined less by trend-chasing than by an unusual constancy: the **Nintendo red (`#e60012`)** and the wordmark have remained essentially unchanged for decades, and the brand treats that consistency as an asset rather than a constraint.

That discipline carries into the digital product. Where many consumer-tech sites chase maximal contrast, heavy gradients, and aggressive conversion chrome, Nintendo's web surfaces stay deliberately calm: a light canvas, a single sacred accent color, gently rounded geometry, and imagery-forward storytelling. The product is fun; the chrome around it is composed. This restraint signals trust to a famously broad audience — Nintendo sells to children, parents, and adults who grew up with the brand simultaneously, and the design has to feel safe, legible, and joyful for all of them at once.

What Nintendo refuses, visible in its design: the cold, high-contrast aesthetic of enterprise tech; dark-pattern urgency in commerce; and the dilution of its red into a decorative palette. What it embraces: a near-immutable brand red used with restraint, region-tuned typography (Geologica in the West, the YakuHan + Hiragino CJK stack in Japan), flat-and-light depth, and a warm, family-first voice — craft in service of play.

## 12. Principles

1. **One sacred red.** Nintendo red (`#e60012`) is the single action color and brand signature. *UI implication:* reserve it for primary CTAs, inline links, and the wordmark — never let a competing saturated hue dilute it.
2. **Constancy is the brand.** The wordmark and red have barely changed in decades. *UI implication:* favor durable, classic choices over trend-driven styling; the 8-12px radius and warm grey ink should age gracefully.
3. **Calm chrome, playful content.** The product is fun; the interface around it is composed. *UI implication:* keep elevation whisper-soft and layouts orderly so imagery and play carry the energy.
4. **Region-tuned legibility.** Each script gets a font and rhythm tuned for it. *UI implication:* Geologica for Western surfaces; YakuHan + Hiragino with generous 2.0 line-height for Japanese.
5. **Welcoming to everyone.** Kids, parents, and lifelong fans share the same surface. *UI implication:* clear hierarchy, plain copy, friendly geometry, and high legibility over cleverness.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Nintendo audience segments (families, lifelong fans, new players), not individual people.*

**Maya Thompson, 38, Seattle.** A parent buying a console and games for her two kids. Values that the store feels safe, legible, and unintimidating — clear prices, gentle CTAs, no dark-pattern urgency. Trusts the brand because the experience matches the family-friendly reputation.

**Kenji Sato, 27, Osaka.** A lifelong fan who reads トピックス and Nintendo Direct recaps on the Japanese site. Appreciates the generous line-height and authentic typography that make dense Japanese announcements easy to read. Notices and values that the red and wordmark never change.

**Diego Ramirez, 19, Mexico City.** A new Switch owner browsing games on sale. Finds the red "Learn more" and "Start shopping" buttons obvious and frictionless. Likes that the site is calm and image-forward rather than a wall of conversion pop-ups.

## 14. States

| State | Treatment |
|---|---|
| **Empty (wish list / cart, none yet)** | White canvas. Single Ink Grey (`#484848`) line explaining nothing is saved yet, with one red CTA to browse games. No clutter, friendly tone. |
| **Empty (search, no results)** | Muted Grey (`#727272`) single line stating no matches, with suggestions or a path to browse. Calm, never a dead-end error. |
| **Loading (storefront fetch)** | Skeleton media tiles at final 12px-radius dimensions on `#f8f8f8` tint, flat soft pulse consistent with the near-shadowless system. |
| **Loading (in-place refresh)** | Previous content stays visible; a subtle red `#e60012` progress affordance signals activity without blocking the view. |
| **Error (page/network failure)** | Friendly Ink Grey message with plain-language explanation and a retry. No raw error codes; states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what's valid, in a warm tone — not just "Required". |
| **Success (purchase / pre-order placed)** | Brief calm confirmation with order/next-step detail linked immediately below. Enthusiastic but not gimmicky. |
| **Skeleton** | `#f8f8f8` blocks at final dimensions, 12px radius, flat soft pulse — no shadow shimmer. |
| **Disabled** | Disabled Grey (`#c8c8c8`) text on reduced-opacity surface; red actions fade rather than turn a foreign grey, preserving brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 220ms | Card/section reveal, carousel slide, dropdown |
| `motion-slow` | 360ms | Page-level transitions, hero/banner reveals |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — cards, sheets, carousel slides |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is friendly but composed — consistent with the calm, image-forward aesthetic. Carousels slide at `motion-standard / ease-enter`; cards lift subtly on hover with the soft shadow deepening slightly. A gentle, tasteful bounce is acceptable on playful interactive moments (it's a games brand), but core navigation and commerce flows stay steady and predictable. Under `prefers-reduced-motion: reduce`, carousels and reveals collapse to instant; the experience remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-06-17) via global playwright getComputedStyle on two surfaces:
- https://www.nintendo.com/us/ — US store: Geologica Variable, ink #484848, brand red #e60012
  (rgb 230,0,18) on primary CTAs/links/wordmark, utility pills #f8f8f8, media-card 12px radius,
  soft shadow rgba(0,0,0,0.07) 0px 2px 8px, featured-card shadow rgba(72,72,72,0.15) 0px 4px 16px.
- https://www.nintendo.com/jp/ — Japanese site: CJK stack
  "YakuHanJPs, Roboto, Hiragino Kaku Gothic ProN, ヒラギノ角ゴ ProN W3, Arial, nc3Jp, sans-serif",
  ink #3c3c3c, body line-height 32px on 16px, red #e60012 confirmed dominant, surface #f2f2f2,
  tighter 2-3px radii + 50% circular icon chips.

Token-level claims (§1-9) are sourced from these two live inspections.

Voice samples (§10) are verbatim from the live US homepage (feature headlines, "Trending topics" label).

Brand narrative (§11): Nintendo Co., Ltd. (任天堂), Kyoto-headquartered, founded 1889 as a
hanafuda card maker, later a global video-game/hardware company. These are widely documented
public facts; specific claims beyond the homepage are general public knowledge, not directly
quoted from a verified Nintendo statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Nintendo audience
segments (families, lifelong fans, new players). Names are illustrative; they do not refer to
real people.

Interpretive claims (e.g., "one sacred red", "calm chrome, playful content", "constancy is the
brand") are editorial readings connecting Nintendo's observed design to its positioning, not
directly sourced Nintendo statements.
-->
