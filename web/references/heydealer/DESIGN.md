---
id: heydealer
name: Heydealer
display_name_kr: 헤이딜러
country: KR
category: consumer-tech
homepage: "https://www.heydealer.com/"
primary_color: "#396eff"
logo:
  type: favicon
  slug: "https://www.google.com/s2/favicons?domain=heydealer.com&sz=128"
verified: "2026-07-02"
added: "2026-07-02"
omd: "0.1"
tokens:
  source: live-extract
  extracted: "2026-07-02"
  note: "primary = live product CTA blue (#396eff, rgb 57,110,255) on 바로 구매예약; secondary action is pure black (#000000). Text is near-black ink #0d0d0e, never a soft grey. Shadowless system — separation via #e9eaec hairlines + low-alpha #70727c neutral tint. Sharp 4px radius is the workhorse."
  colors:
    primary: "#396eff"
    ink: "#0d0d0e"
    ink-pure: "#000000"
    ink-navy: "#272e40"
    chip-dark: "#0f1014"
    muted: "#37383d"
    muted-alt: "#2d2e32"
    muted-grey: "#858892"
    surface: "#70727c"
    canvas: "#ffffff"
    on-dark: "#f8f8f9"
    hairline: "#e9eaec"
  typography:
    family: { sans: "spoqaHanSansNeo" }
    display:     { size: 32, weight: 700, lineHeight: 1.38, tracking: -0.32, use: "Largest section display, Spoqa Han Sans Neo Bold" }
    section:     { size: 20, weight: 700, lineHeight: 1.40, tracking: -0.32, use: "Section titles (색상, 옵션)" }
    card-head:   { size: 18, weight: 700, lineHeight: 1.44, tracking: -0.25, use: "Card / feature heads (비슷한 차)" }
    emphasis:    { size: 15, weight: 700, lineHeight: 1.47, tracking: -0.195, use: "Bold labels, button text, spec emphasis" }
    body:        { size: 16, weight: 400, lineHeight: 1.50, use: "Standard reading text, listing copy" }
    meta:        { size: 15, weight: 400, lineHeight: 1.47, tracking: -0.195, use: "Secondary / meta text (muted)" }
  spacing: { xs: 4, sm: 8, md: 12, base: 16, lg: 24, section: 48 }
  rounded: { sm: 2, md: 4, lg: 16, full: 9999 }
  shadow:
    none: "none"
  components:
    button-primary: { type: button, bg: "#396eff", fg: "#f8f8f9", radius: "4px", height: "52px", padding: "0 24px", font: "15px / 700 spoqaHanSansNeo", use: "Primary blue CTA — 바로 구매예약 (book purchase)" }
    button-secondary: { type: button, bg: "#000000", fg: "#f8f8f9", radius: "4px", height: "52px", padding: "0 24px", font: "15px / 700 spoqaHanSansNeo", use: "Black secondary action — 인증 리포트 (certified report)" }
    nav-link: { type: tab, fg: "#0d0d0e", font: "16px / 400 spoqaHanSansNeo", active: "text #0d0d0e", use: "Top nav item; inactive links drop to #37383d at 60% alpha" }
    filter-chip: { type: badge, bg: "#70727c", fg: "#0d0d0e", border: "1px solid #000000", radius: "4px", padding: "8px 12px", font: "16px / 400 spoqaHanSansNeo", use: "Selected spec filter chip on low-alpha #70727c tint" }
    card-white: { type: card, bg: "#ffffff", fg: "#0d0d0e", border: "1px solid #e9eaec", radius: "4px", use: "White listing / content card, hairline separated, no shadow" }
    card-thumb: { type: card, bg: "#70727c", radius: "4px", use: "Photo thumbnail tile, neutral #70727c surface at ~5% alpha" }
    search-input: { type: input, bg: "#000000", fg: "#f8f8f9", radius: "16px", font: "16px / 400 spoqaHanSansNeo", use: "Rounded overlay search field" }
  components_harvested: true
---

# Design System Inspiration of Heydealer

## 1. Visual Theme & Atmosphere

Heydealer (헤이딜러) is Korea's app-first used-car platform — a reverse-auction sell-my-car service and certified buy-a-car marketplace operated by PRND — and its web surface reads like a fast, engineered product tool rather than a glossy automotive brochure. The canvas is pure white (`#ffffff`), text sits in a near-black ink (`#0d0d0e`) that is deliberately not a soft grey, and the entire interface is built on razor-sharp `4px` corners. A single saturated electric blue (`#396eff`) is reserved almost exclusively for the primary "do this" action — the `바로 구매예약` (book purchase) button — so the eye is trained to read that one hue as commitment. The result feels closer to a financial dashboard than a car dealership: dense, confident, and information-forward.

The typographic voice is unmistakably Korean-product: everything runs in **Spoqa Han Sans Neo** (`spoqaHanSansNeo`), the widely-used open-source hangul family. Emphasis and headings are set **Bold (weight 700)** with tight negative tracking (`-0.32px` at 20px, `-0.252px` at 18px, `-0.195px` at 15px), while body and listing copy stay at a quiet **weight 400 / 16px**. Button labels are Bold 15px. This bold-head / regular-body split is the system's core hierarchy signal — heydealer never leans on color or size alone; weight carries the structure. There is no oversized hero display type on the web marketplace; the largest recurring display size is a restrained 32px.

What most distinguishes Heydealer is its refusal of depth. Live inspection found `box-shadow: none` across the nav, listing cards, chips, and CTAs — this is a near-shadowless system. Separation comes entirely from thin `#e9eaec` hairlines and a low-alpha neutral tint built on `#70727c` (used around 5–8% opacity) for surface blocks and photo thumbnails. Secondary actions go pure black (`#000000`); a near-black `#0f1014` and a dark navy `#272e40` appear on immersive dark blocks, with off-white `#f8f8f9` as the text-on-dark color. The overall impression is engineered flatness — a used-car service that looks like a precise instrument, not a showroom.

**Key Characteristics:**
- Spoqa Han Sans Neo throughout — Bold (700) for heads/labels, Regular (400) for body
- Single saturated blue (`#396eff`) reserved for the primary purchase CTA — the one "action" color
- Near-black ink (`#0d0d0e`) for text instead of a soft grey — crisp, high-contrast, product-grade
- Pure black (`#000000`) for the secondary action button, distinct from the blue primary
- Shadowless system — `#e9eaec` hairlines and low-alpha `#70727c` tint do all the separating
- Sharp `4px` radius as the universal workhorse; `2px` on fine elements, `16px` on the search field, full `100px` pills on a few chips
- Tight negative tracking that scales with size (`-0.32px` → `-0.195px`)
- Muted neutral ladder (`#37383d` → `#2d2e32` → `#858892`) for de-emphasized text
- Dark blocks use near-black `#0f1014` / navy `#272e40` with off-white `#f8f8f9` text

## 2. Color Palette & Roles

### Primary
- **Heydealer Blue** (`#396eff`): Primary brand and action color. The saturated electric blue on the `바로 구매예약` purchase CTA and a heavily-used interactive/link accent — the system's single "commit" color.
- **Ink** (`#0d0d0e`): Primary text and heading color. A near-black that carries maximum legibility for dense listing data — used instead of a soft grey.
- **Pure Black** (`#000000`): The secondary action button background (e.g. `인증 리포트`) and selected-chip border; a deliberate second dark distinct from the blue primary.

### Neutral & Surface
- **Canvas White** (`#ffffff`): Page background and white card surfaces.
- **Neutral Surface** (`#70727c`): The base of the low-alpha tint (~5–8%) used for surface blocks, photo thumbnail tiles, and filter chips — the primary flat-separation device.
- **Hairline** (`#e9eaec`): Thin borders, dividers, and white-card outlines — the separation device given the shadow-free system.
- **On-Dark** (`#f8f8f9`): Off-white text/foreground used on black and dark blocks.

### Dark Blocks
- **Chip Dark** (`#0f1014`): Near-black background for immersive dark tiles and dark chips.
- **Ink Navy** (`#272e40`): Dark navy surface used on select immersive blocks and the sell-flow hero.

### Text Hierarchy
- **Ink** (`#0d0d0e`): Primary text, headings, labels, active nav.
- **Muted** (`#37383d`): Secondary / inactive text (rendered around 60% alpha for inactive nav items).
- **Muted Alt** (`#2d2e32`): Dark de-emphasized text (rendered around 88% alpha).
- **Muted Grey** (`#858892`): Tertiary text, captions, metadata, fine print.

## 3. Typography Rules

### Font Family
- **Sans**: `spoqaHanSansNeo` (Spoqa Han Sans Neo), with system fallbacks (`-apple-system`, `system-ui`, `sans-serif`). This single family carries display, UI, and body — there is no separate display face.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Spoqa Han Sans Neo | 32px (2.00rem) | 700 | 1.38 (44px) | -0.32px | Largest section display |
| Section Heading | Spoqa Han Sans Neo | 20px (1.25rem) | 700 | 1.40 (28px) | -0.32px | Section titles (색상, 옵션) |
| Card / Feature Head | Spoqa Han Sans Neo | 18px (1.13rem) | 700 | 1.44 (26px) | -0.252px | Card heads (비슷한 차) |
| Emphasis / Button | Spoqa Han Sans Neo | 15px (0.94rem) | 700 | 1.47 (22px) | -0.195px | Bold labels, CTA text, spec emphasis |
| Body | Spoqa Han Sans Neo | 16px (1.00rem) | 400 | 1.50 | normal | Standard reading text, listing copy |
| Meta | Spoqa Han Sans Neo | 15px (0.94rem) | 400 | 1.47 (22px) | -0.195px | Secondary / muted metadata |

### Principles
- **Weight is the hierarchy**: Bold (700) marks every heading, label, and CTA; Regular (400) carries every paragraph. The weight contrast — not size or color — is the primary signal.
- **One family, every job**: Spoqa Han Sans Neo runs display through fine print. There is no separate display font; consistency is the point.
- **Tight tracking scales with size**: -0.32px at 20px, -0.252px at 18px, -0.195px at 15px. Headings compress; body stays at normal tracking.
- **Restrained display sizes**: The web marketplace tops out around 32px — heydealer favors dense, scannable data over big hero type.

## 4. Component Stylings

### Buttons

**Primary Purchase CTA**
- Background: `#396eff`
- Text: `#f8f8f9`
- Radius: 4px
- Padding: 0px 24px
- Height: 52px
- Font: 15px Spoqa Han Sans Neo weight 700
- Use: Primary blue action — `바로 구매예약` (book purchase now), the single commit CTA

**Black Secondary**
- Background: `#000000`
- Text: `#f8f8f9`
- Radius: 4px
- Padding: 0px 24px
- Height: 52px
- Font: 15px Spoqa Han Sans Neo weight 700
- Use: Secondary action — `인증 리포트` (view certified report)

**Nav Text Button**
- Background: transparent
- Text: `#0d0d0e`
- Radius: 4px
- Padding: 8px
- Font: 15px Spoqa Han Sans Neo weight 700
- Use: Header nav actions (내차사기, 내차팔기); inactive items drop to `#37383d` at 60% alpha

### Inputs & Forms

**Overlay Search**
- Background: `#000000`
- Text: `#f8f8f9`
- Radius: 16px
- Font: 16px Spoqa Han Sans Neo weight 400
- Use: Rounded overlay search field (softer 16px corner vs the 4px workhorse)

### Cards & Containers

**White Listing Card**
- Background: `#ffffff`
- Text: `#0d0d0e`
- Border: 1px solid `#e9eaec`
- Radius: 4px
- Use: White listing / content card, hairline separated, no shadow

**Photo Thumbnail Tile**
- Background: `#70727c`
- Radius: 4px
- Use: Vehicle photo thumbnail tile — neutral `#70727c` surface at ~5% alpha (외부 / 실내 galleries)

### Badges

**Selected Filter Chip**
- Background: `#70727c`
- Text: `#0d0d0e`
- Border: 1px solid `#000000`
- Radius: 4px
- Padding: 8px 12px
- Font: 16px Spoqa Han Sans Neo weight 400
- Use: Selected spec filter chip (e.g. `2.0 가솔린`) on a low-alpha `#70727c` tint

**Blue Info Strip**
- Text: `#0d0d0e`
- Radius: 4px
- Padding: 12px
- Use: Reassurance strip on a `#396eff` tint at ~4% alpha (`모든 차량 1년 무료 보증`, `단순 변심도 무료 환불 가능`)

### Navigation
- Background: `#ffffff`
- Text: `#0d0d0e`
- Font: 16px Spoqa Han Sans Neo weight 400
- Active: `#0d0d0e` ink on the active item
- Inactive: `#37383d` at 60% alpha
- Use: Top horizontal nav (헤이딜러 홈, 내차사기, 내차팔기, 폐차 견적받기, 중고차 숨은 이력)

---

**Verified:** 2026-07-02 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)
**Tier 1 sources:** https://www.heydealer.com/ , https://www.heydealer.com/market/cars/gQ60AKy0 , https://www.heydealer.com/sell , https://medium.com/prnd
**Tier 2 sources:** getdesign.md/heydealer (0 DESIGN.md files — not listed); styles.refero.design/?q=heydealer (no heydealer style — generic browse grid only)
**Conflicts unresolved:** none

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 24px, 48px
- Notable: Button horizontal padding lands at 24px; chip padding at 8px 12px — compact, data-dense hit areas suited to a marketplace grid

### Grid & Container
- Dense listing/marketplace grid is the dominant pattern — vehicle cards tiled with hairline separation
- Car detail pages stack a photo gallery (thumbnail tiles) over spec sections and a sticky purchase CTA
- Sections separate by white (`#ffffff`) vs low-alpha `#70727c` tint bands rather than by borders or elevation
- Cards use the sharp 4px radius and group related specs/listings

### Whitespace Philosophy
- **Dense but breathable**: a data-heavy marketplace kept scannable through consistent 4px-grid rhythm and hairline separation, not padding bloat.
- **Flat segmentation**: blocks separate by background tint and `#e9eaec` hairlines, never by shadow.
- **Action anchored**: the blue CTA is spatially isolated (often sticky) so the next step is unambiguous amid dense listings.

### Border Radius Scale
- Fine (2px): fine-grained inner elements
- Standard (4px): buttons, cards, chips, tiles — the universal workhorse
- Soft (16px): the overlay search field
- Pill (100px): a few rounded chips/badges
- Circle (50%): avatars and circular controls

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | Low-alpha `#70727c` background shift | Card/section/thumbnail separation without elevation |
| Hairline (Level 2) | `1px solid #e9eaec` border | White card outlines, dividers |

**Shadow Philosophy**: Heydealer is a near-shadowless system. Live inspection found `box-shadow: none` across the nav, listing cards, filter chips, and CTAs. Depth and grouping are communicated entirely through flat low-alpha `#70727c` tints and thin `#e9eaec` hairlines. This is a deliberate modern-flat choice that keeps a data-dense used-car marketplace feeling fast and app-native, avoiding the heavy card-stack look of legacy classified sites. When emphasis is needed, the system reaches for color (blue `#396eff`) or a dark block (`#0f1014` / `#272e40`), never elevation.

## 7. Do's and Don'ts

### Do
- Use Spoqa Han Sans Neo throughout — Bold (700) for heads/labels/CTAs, Regular (400) for body
- Reserve blue (`#396eff`) for the primary purchase CTA — keep it the single "action" color
- Use pure black (`#000000`) for the secondary action button, distinct from the blue primary
- Use near-black ink (`#0d0d0e`) for text instead of a soft grey
- Separate sections with low-alpha `#70727c` tint and `#e9eaec` hairlines, not shadows
- Keep the sharp 4px radius as the default on buttons, cards, chips, and tiles
- Apply tight negative tracking on headings (-0.32px at 20px)
- Use off-white `#f8f8f9` text on black/dark blocks (`#0f1014`, `#272e40`)

### Don't
- Use drop shadows for elevation — heydealer is a flat, shadow-free system
- Spread blue across many elements — it dilutes the single-action signal
- Use a soft grey for body text — reserve the crisp near-black `#0d0d0e`
- Use large pill radii on primary buttons — the CTA is a sharp 4px, not a pill
- Set body copy in Bold — Bold (700) is reserved for heads, labels, and CTAs
- Introduce a second saturated accent hue — blue is the only vivid color
- Use positive letter-spacing on headings — heydealer tracks tight
- Rely on color alone for hierarchy — weight (700 vs 400) does the structural work

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single-column listing feed, sticky bottom CTA, chips wrap/scroll |
| Tablet | 640-1024px | 2-up card grid, moderate padding |
| Desktop | 1024-1440px | Multi-column marketplace grid, side spec panels on detail pages |

### Touch Targets
- Primary CTA at 52px height, full-width sticky on mobile — an unmistakable target
- Secondary black button at 52px height with 24px horizontal padding
- Filter chips at ~36px height with 8px 12px padding — compact but tappable

### Collapsing Strategy
- Marketplace grid: multi-column → single-column feed on mobile
- Car detail: side-by-side gallery + spec panel → stacked, with the purchase CTA pinned to the bottom
- Filter chip rows wrap/scroll horizontally on narrow viewports
- Tint/white alternating bands maintain full-width treatment

### Image Behavior
- Vehicle photos sit in 4px-radius tiles on the neutral `#70727c` tint with no shadow at any size
- Thumbnail galleries (외부/실내) maintain the sharp 4px radius across breakpoints

## 9. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Heydealer Blue (`#396eff`)
- Secondary button: Pure Black (`#000000`)
- Background: Canvas White (`#ffffff`)
- Neutral surface tint: `#70727c` (used at ~5–8% alpha)
- Heading / body text: Ink (`#0d0d0e`)
- Secondary text: Muted (`#37383d`)
- Metadata text: Muted Grey (`#858892`)
- Text on dark: On-Dark (`#f8f8f9`)
- Dark blocks: Chip Dark (`#0f1014`), Ink Navy (`#272e40`)
- Hairline: `#e9eaec`

### Example Component Prompts
- "Create a purchase CTA: #396eff background, #f8f8f9 text, 4px radius, 0 24px padding, 52px height, 15px Spoqa Han Sans Neo weight 700. Next to it a black secondary button: #000000 background, #f8f8f9 text, same geometry."
- "Design a white listing card: #ffffff background, 1px solid #e9eaec border, 4px radius, no shadow. Title 18px Spoqa Han Sans Neo weight 700, -0.252px tracking, #0d0d0e. Meta 15px weight 400, #858892."
- "Build a spec filter chip: low-alpha #70727c tint, #0d0d0e text, 4px radius, 8px 12px padding, 16px weight 400; when selected add a 1px solid #000000 border."
- "Create top nav: white background, 16px Spoqa Han Sans Neo weight 400 links, #0d0d0e for the active item and #37383d at 60% for inactive. No shadow — separate with a #e9eaec hairline."

### Iteration Guide
1. Spoqa Han Sans Neo everywhere; Bold (700) for heads/labels/CTAs, Regular (400) for body
2. Blue (`#396eff`) is the single action color — don't spread it
3. Secondary action goes pure black (`#000000`), not a second blue
4. No shadows — separate with `#70727c` tint and `#e9eaec` hairlines
5. Sharp 4px radius is the default; 16px only on the search field
6. Text is `#0d0d0e` near-black ink, never a soft grey
7. Tight negative tracking on headings, normal on body
8. Off-white `#f8f8f9` for text on `#0f1014` / `#272e40` dark blocks

---

## 10. Voice & Tone

Heydealer's voice is **plain, reassuring, and pro-consumer** — a service that takes an anxiety-heavy transaction (selling or buying a used car) and makes it feel controlled and fair. Copy is direct and functional Korean, action-first, and stripped of dealership sales-speak. The register treats the user as someone who deserves transparency and protection, not a mark to be worked. Reassurance is stated as concrete guarantees ("모든 차량 1년 무료 보증", "단순 변심도 무료 환불 가능") rather than adjectives.

| Context | Tone |
|---|---|
| Primary CTAs | Direct, low-pressure imperatives. "바로 구매예약", "내차팔기". |
| Nav / section labels | Plain and functional. "내차사기", "폐차 견적받기", "중고차 숨은 이력". |
| Trust / warranty copy | Concrete guarantees, stated plainly. "모든 차량 1년 무료 보증", "인증 리포트". |
| Spec / listing data | Neutral, dense, factual. Year, trim, fuel — no embellishment. |
| Reassurance strips | Benefit-first, protection-framed. "단순 변심도 무료 환불 가능". |

**Voice samples (verbatim from live surfaces):**
- "바로 구매예약" — primary purchase CTA on a car detail page (direct, low-pressure). *(verified live 2026-07-02)*
- "모든 차량 1년 무료 보증" — warranty reassurance strip (concrete guarantee). *(verified live 2026-07-02)*
- "헤이딜러 – 인증중고차, 내차팔기, [번호판]시세" — homepage title meta (scope: certified cars, sell-my-car, plate valuation). *(verified live 2026-07-02)*

**Forbidden register**: high-pressure dealership urgency, vague hype adjectives ("최고의", "혁신적인") in place of concrete terms, undefined jargon, exclamation-heavy marketing, anything that hides fees or conditions.

## 11. Brand Narrative

Heydealer (헤이딜러) is a Korean used-car platform operated by **PRND** (피알앤디컴퍼니), launched around **2015**. Its founding premise reframed 내차팔기 (selling your car) from an opaque, dealer-favoring process into a transparent **reverse auction**: an owner registers a vehicle once, verified dealers compete with bids, and the owner picks the best offer — the market working for the seller rather than against them.

Heydealer became a defining Korean startup story in **2016**, when a proposed amendment to the automobile-management law (popularly nicknamed the "헤이딜러 방지법" / "anti-Heydealer law") would have effectively banned online-only used-car dealers by requiring large physical premises. Public backlash over a regulation that seemed to punish a consumer-friendly innovation led to the rule being reconsidered — a widely-cited case study in Korean tech about regulation lagging digital business models. The service survived, then expanded from sell-my-car into a certified **buy-a-car marketplace** (내차사기) with 1-year free warranty, return-on-change-of-mind, and inspection reports, plus adjacent tools like scrap-car quotes (폐차) and hidden-history checks.

What Heydealer refuses, visible in its design: the heavy chrome, stock photography, and hard-sell urgency of legacy classified and dealership sites. What it embraces: a flat, fast, app-native interface; a single trustworthy blue; crisp near-black data; and copy that states guarantees plainly instead of selling with adjectives.

## 12. Principles

1. **The market should work for the owner.** The reverse-auction model exists to make dealers compete for the seller. *UI implication:* surface competing offers clearly and neutrally; never visually privilege one bid without disclosure.
2. **Protection stated as fact, not adjective.** Trust is built with concrete guarantees. *UI implication:* render warranty/refund promises as plain reassurance strips (1년 무료 보증, 무료 환불), not decorative badges.
3. **One action, one color.** Blue (`#396eff`) means "commit." *UI implication:* reserve the saturated blue for the primary purchase/sell CTA so the next step is never ambiguous.
4. **Flat and fast.** App-native clarity beats decorative depth. *UI implication:* no shadows; separate with `#70727c` tint and `#e9eaec` hairlines; keep the grid quick to scan.
5. **Weight carries the structure.** *UI implication:* use Spoqa Han Sans Neo Bold (700) for what matters and Regular (400) for everything else; don't lean on size or color alone.

## 13. Personas

*Personas below are fictional archetypes informed by publicly observable Heydealer user segments (Korean owners selling used cars, budget-conscious used-car buyers), not individual people.*

**김민재, 33, 서울.** Selling his first car before an upgrade. Distrusts walking into a dealership and haggling; values registering once and letting dealers bid. Chose Heydealer because the reverse auction felt like the market working for him.

**이서연, 41, 경기.** Buying a certified used car for the family. Reads the 인증 리포트 and cares most about the 1-year warranty and free-return policy. Trusts the calm, guarantee-first copy over showroom sales talk.

**박준호, 28, 부산.** Comparison-shops trims and prices in the marketplace grid. Appreciates the dense, scannable listing layout and that specs are stated factually without embellishment.

## 14. States

| State | Treatment |
|---|---|
| **Empty (no listings match filters)** | White canvas. Single Ink (`#0d0d0e`) line explaining no matching cars, with a path to relax filters. No illustration clutter. |
| **Empty (no saved cars yet)** | Muted Grey (`#858892`) single line: nothing saved yet, plus a link back to the marketplace. Calm and honest. |
| **Loading (listing fetch)** | Skeleton tiles on the low-alpha `#70727c` tint at final card dimensions, 4px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (bid/quote compute)** | Inline progress within the action area; previously loaded listings stay visible. |
| **Error (fetch failed)** | Inline message in Ink (`#0d0d0e`) with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "필수". |
| **Success (purchase reserved / car registered)** | Brief inline confirmation in calm tone; next-step detail (delivery, dealer contact) linked immediately below. No celebratory emoji. |
| **Skeleton** | `#70727c`-tint blocks at final dimensions, 4px radius, flat pulse. |
| **Disabled** | Muted Grey (`#858892`) text on a reduced-opacity surface; the blue CTA fades rather than turning grey to preserve brand read. |

## 15. Motion & Easing

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip/press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, gallery open |

**Easings**:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | `cubic-bezier(0.2, 0.6, 0.25, 1)` | Arriving — sheets, cards, chips |
| `ease-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | Dismissals |
| `ease-standard` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Two-way transitions |

**Motion rules**: Motion is functional and quiet — consistent with the flat, fast, data-dense aesthetic. Listing cards and spec sheets fade-in from below at `motion-standard / ease-enter`; chips respond to press with a subtle scale/opacity shift. No bounce or spring — a used-car transaction platform signals steadiness and trust, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the marketplace remains fully functional.

<!--
OmD v0.1 Sources — Philosophy Layer (sections 10–15)

Tier 1 live inspect (2026-07-02) via playwright getComputedStyle on 3 heydealer.com surfaces
(homepage, /market/cars/gQ60AKy0 car detail, /sell):
- Primary CTA "바로 구매예약": bg rgb(57,110,255) #396eff / color rgb(248,248,249) #f8f8f9 / radius 4px / padding 0 24px / height 52px / 15px weight 700
- Secondary "인증 리포트": bg rgb(0,0,0) #000000 / color #f8f8f9 / radius 4px / height 52px / 15px/700
- Body font: spoqaHanSansNeo / rgb(13,13,14) #0d0d0e / 16px
- Section head 32px/700 lh44 -0.32px; sub-head 20px/700 -0.32px; card head 18px/700 -0.252px; emphasis 15px/700 -0.195px
- Filter chip "2.0 가솔린": bg rgba(112,114,124,0.08) #70727c / 1px solid #000000 / radius 4px / padding 8px 12px
- Reassurance strips ("모든 차량 1년 무료 보증"): bg rgba(57,110,255,0.04) blue tint
- box-shadow: none across nav/cards/chips/CTAs (shadowless system confirmed)
- document.title (homepage): "헤이딜러 – 인증중고차, 내차팔기, [번호판]시세"

Token-level claims (§1-9) are sourced from this live inspection (see .verification.md Proof block).

Voice samples (§10) are verbatim from live surfaces (car detail CTA, reassurance strip, homepage title meta).

Brand narrative (§11): Heydealer (헤이딜러) operated by PRND (피알앤디컴퍼니), launched ~2015 as a
Korean reverse-auction used-car sell platform; the 2016 "헤이딜러 방지법" regulatory episode and the
later certified buy-a-car marketplace expansion are widely documented public facts about the company,
not directly quoted from a verified Heydealer statement in this turn.

Personas (§13) are fictional archetypes informed by publicly observable Heydealer user segments
(Korean used-car sellers and buyers). Names are illustrative; they do not refer to real people.

Interpretive claims (e.g., "one action, one color", "flat and fast as a rejection of legacy classified
chrome") are editorial readings connecting Heydealer's observed design to its positioning, not directly
sourced Heydealer statements.
-->
</content>
</invoke>
