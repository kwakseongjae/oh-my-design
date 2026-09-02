# MOZE Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

MOZE (摩斯, "最美記帳 App") is Taiwan's design-forward personal-finance and expense-tracking app. This contract covers the two first-party web surfaces the source live-inspected for tokens on 2026-06-17: the homepage at `https://moze.app/` and the pricing page at `https://moze.app/pricing`. The YAML token set is `live-extract`. Every color, type, spacing, radius, shadow, and component value below stays attached to the surface or evidence class that established it. Reading those two URLs as this contract's inspected token surfaces, keeping every value attached to the surface or evidence class that established it, and calling the product design-forward, are derived editorial implementation inferences from the verified surfaces; they are not MOZE-authored or a separately published UI specification.

On those two pages the canvas is a near-black blue-tinted ink (`#0d0d12`) layered over true black (`#000000`). Against that darkness the brand stages a single, unmistakable signature: a vivid pink-to-periwinkle gradient (`#ff367c` → `#6e86ff`) that the source records on the primary download CTA, the highlighted pricing tier, and the triangular "M" app icon. Display headlines run in Poppins at 52px with tracking `-2.08px` and heading ink `rgba(255,255,255,0.87)`. Traditional-Chinese body copy is not carried by an embedded CJK webfont: the site declares a plain `sans-serif` stack and lets each platform render hanzi through its own system face (蘋方 / PingFang on Apple, 思源黑體 / Noto Sans CJK elsewhere). This is a deliberate, lightweight choice: Poppins owns the persuasive Latin display, the OS owns the dense Chinese reading text. Geometry is pills at 999px radius for CTAs and 20px-radius cards for panels. Elevation is colored glow: the primary CTA carries `rgba(255,89,0,0.7) -12px 0px 21px -3px, rgb(255,56,132) -7px 0px 10px -5px`, and the highlighted Pro card floats on `rgba(255,128,176,0.28) 0px -4px 32px 0px, rgba(87,95,255,0.25) 0px 0px 32px 0px`. The source's closing atmosphere sentence, kept as written: The result is an elegant, information-dense dark UI that looks engineered for people who find beauty in their numbers. The hex values, the two-stop gradient, the family split, the radii, and those two shadow strings are recorded. Calling the marketing site a dark, cinematic, almost-luxury product showcase rather than a utilitarian tool page, calling the canvas a high-end gadget unboxing in a dimmed room, calling the atmosphere premium-but-playful, calling the gradient a single, unmistakable signature, calling the split a Western-display / CJK-body line, calling the CJK stack a deliberate, lightweight choice, calling the system an embrace of glow over flat against a Finda-style shadowless peer, and calling the result an elegant, information-dense dark UI engineered for people who find beauty in their numbers, are derived editorial implementation inferences from the verified surfaces; they are not MOZE-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. MOZE (摩斯) is a Taiwan-made personal-finance and expense-tracking app, widely cited in the local press and App Store reviews as "最美記帳 App" — "the most beautiful bookkeeping app." The site's framing — "記帳，是理財的第一步" ("bookkeeping is the first step of financial management"; the source's voice table also glosses the same line as "bookkeeping is the first step of money management") — positions logging an expense as the entry point to a larger journey of financial control. The source records that the product matured into a full multi-currency, budget, and data-visualization platform: refined charts, flexible categories, cross-device sync (including Apple Watch, surfaced explicitly on the homepage as the feature H3 "Apple Watch"), and an AI-assisted logging tier (專業版 + AI). Those product facts — the Chinese name 摩斯, the "最美記帳 App" citation, the live headline, the tiering (基本版 / 專業版 / 專業版 + AI), multi-currency, charts, Apple Watch support, and AI logging — are stated by the source as appearing on the live homepage and pricing page; they do not by themselves supply interface tokens. The source's founding premise, that managing money should be an elegant, even pleasurable, daily ritual rather than a tedious obligation; the reading that the brand leans into a premium, dark-mode-first aesthetic because its differentiator is *beauty and data clarity* and that it competes not on being free or fast but on being the bookkeeping app you actually want to open; and the closing refusal/embrace unit — what MOZE refuses, visible in its design: the spreadsheet-grey utilitarianism of legacy expense trackers, and the cluttered ad-driven free apps that treat finance data as a commodity; what it embraces: a cinematic dark canvas, a singular neon pink-to-periwinkle gradient identity, generous glow and refined Poppins display type, and a respect for Traditional-Chinese readers by letting the platform's own type render hanzi cleanly — are editorial readings of the observed product positioning, not directly quoted MOZE corporate statements. The founding premise, the beauty-and-data-clarity differentiator, the competes-not-on-free-or-fast reading, the closing refusal/embrace unit, and classifying that founding-and-thesis narrative as context that does not by itself supply interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not MOZE-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published UI specification. Each names a surface or control the source records.

- Download the app with the primary gradient CTA "立即免費下載" / "立即下載" on `https://moze.app/`.
- Compare pricing tiers 基本版 $0 / 專業版 / 專業版 + AI on `https://moze.app/pricing`.
- Follow top-nav items 定價方案 / 教學文件 / 常見問題 / 聯繫我們, or the secondary pill "查看完整教學".
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its entries as fictional archetypes informed by publicly observable MOZE user segments, not individual people, so those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. Persona-section group labels are not re-hosted as an audience finding. What remains is surface-level: the two captured pages are the Traditional-Chinese marketing site for a personal-finance and expense-tracking product, with the download CTAs and the pricing-tier names recorded above. Reading that surface-level remainder as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces; they are not MOZE-authored or a separately published UI specification.

- Near-black blue-ink canvas (`#0d0d12`) over true black (`#000000`) — cinematic dark-mode-first
- Signature pink→periwinkle gradient (`#ff367c` → `#6e86ff`) as the single "action" identity, repeated in logo, CTA, and Pro tier
- Poppins for Latin display at 52px with extreme negative tracking (`-2.08px`); system `sans-serif` for Traditional-Chinese body (no embedded CJK webfont)
- Glow, not flat — colored ambient shadows (orange/pink CTA halo, pink/blue card glow) do the elevation
- Pill-everything geometry (999px CTAs, 20px-radius cards)
- White-at-87%-opacity ink (`rgba(255,255,255,0.87)`) for headings; grey ladder `#d0d0d0` → `#7b7c8c` for secondary text
- Multi-hue accent set (orange `#f58327`, gold `#f0c732`, green `#4dff64`, violet `#a963ff`, periwinkle `#8897e3`) reserved for charts/data-viz, never chrome

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not MOZE-authored or a separately published UI specification. The source states them in its own Principles section and flags "beauty is a feature", "one gradient, one action", and "elevate with light not weight" as editorial readings connecting the observed design to the positioning, not directly sourced MOZE statements. Every *UI implication* below is that same derived class.

1. **Beauty is a feature.** MOZE's entire premise is that a beautiful tool gets used. *UI implication:* invest in the dark canvas, the gradient, and the glow — visual craft is not decoration, it is the product's reason to exist.
2. **One gradient, one action.** The pink→periwinkle blend (`#ff367c` → `#6e86ff`) means "do this." *UI implication:* reserve the signature gradient for the primary CTA and the highlighted tier so the next step is unambiguous.
3. **Elevate with light, not weight.** *UI implication:* use colored ambient glow for emphasis on the dark canvas; avoid grey drop shadows and heavy borders.
4. **Respect the reader's language.** *UI implication:* let the system CJK face render Traditional-Chinese body cleanly; use Poppins only where Latin display earns it.
5. **Data deserves clarity and color.** *UI implication:* reserve the orange/gold/green accent set for charts and data-viz, keeping the chrome calm so the numbers can speak.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not MOZE-authored or a separately published UI specification.

- Use the near-black blue-ink canvas (`#0d0d12`) as the base — MOZE is dark-mode-first
- Reserve the pink→periwinkle gradient (`#ff367c` → `#6e86ff`) for the primary action and the highlighted tier
- Use Poppins for Latin display headlines with tight negative tracking (-2.08px at 52px)
- Let Traditional-Chinese body render in the system `sans-serif` stack (蘋方 / 思源黑體) — no forced CJK webfont
- Elevate with colored glow shadows (orange/pink CTA halo, pink/blue card glow), not grey shadow
- Use pill geometry — 999px CTAs, 20px-radius cards
- Set heading ink at `rgba(255,255,255,0.87)`, a soft near-white, not full `#ffffff`
- Use the multi-hue accents (orange `#f58327`, gold `#f0c732`, green `#4dff64`) for charts and data, not chrome

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not MOZE-authored or a separately published UI specification.

- Use a light/white page background — MOZE's identity is the dark canvas
- Spread the pink gradient across every element — it dilutes the single-action signal
- Use neutral grey drop shadows for elevation — reach for colored glow
- Force Poppins onto dense Traditional-Chinese body text — let the system face carry hanzi
- Use sharp or small-radius corners on CTAs — everything actionable is a 999px pill
- Use pure full-opacity white (`#ffffff`) for large headings — soften to `rgba(255,255,255,0.87)`
- Use the orange/gold/green accents as button or link colors — they're data-viz / chart hues
- Use heavy bold display weight — MOZE headlines stay at weight 400 and rely on size + glow

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.on-dark` `#ffffff` beside live heading ink `rgba(255,255,255,0.87)`, keeping `tokens.colors.accent-gold` `#f0c732` beside the source trailing observation `rgb(247,206,54)` `#f7ce36`, keeping YAML `plan-card-pro` border as the two-stop `#ff367c` → `#a963ff` writing beside the §4 three-stop `#ff367c` → `#a963ff` → `#6e86ff` writing, and keeping `tokens.components.cta-gradient.bg` `#ff367c` beside the live `274deg` fill `#6e86ff` → `#ff367c`, are derived editorial implementation inferences from the verified surfaces; they are not MOZE-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

**Primary and brand gradient**

- **MOZE Pink / Primary** (`tokens.colors.primary` `#ff367c`): Primary brand color and the gradient's terminus. Appears as a solid emphasis fill and the warm end of the signature CTA/Pro-card gradient. The system's single "action" hue. Catalog `primary_color` is this same hex (gradient terminus + logo).
- **Periwinkle Blue** (`tokens.colors.primary-blue` `#6e86ff`): The cool start of the signature `274deg` gradient (`#6e86ff` → `#ff367c`). Pairs with the pink to form the brand's defining two-stop blend.
- **Violet** (`tokens.colors.violet` `#a963ff`): The mid-stop seen on the Pro-tier card ring gradient (`#ff367c` → `#a963ff` → `#6e86ff`). Bridges pink and blue.

**Canvas and surface (dark)**

- **Ink Canvas** (`tokens.colors.canvas` `#0d0d12`): The dominant page background — a near-black with a faint blue cast. The base layer everything sits on.
- **Pure Black** (`tokens.colors.black` `#000000`): The deepest surface, used in radial vignettes and edge fades behind the canvas.
- **Panel** (`tokens.colors.panel` `#1a1d31`): Raised card / feature-panel background — a dark navy. Base of the highlighted Pro card and feature cards.
- **Panel Raised** (`tokens.colors.panel-raised` `#323648`): A lighter slate panel for the Free-tier pricing card and elevated containers.

**Text hierarchy**

- **On-Dark White** (`tokens.colors.on-dark` `#ffffff`): Headings and high-emphasis labels — rendered live at `rgba(255,255,255,0.87)` for a softened, premium near-white. The token carries solid `#ffffff`; the translucency is noted in prose. These are two writings of heading ink, not one value rewritten as the other.
- **Body Grey** (`tokens.colors.body` `#d0d0d0`): Secondary body copy and descriptions on the dark canvas.
- **Muted Grey** (`tokens.colors.muted` `#7b7c8c`): Tertiary text, captions, fine print, and metadata.
- **Lavender Link** (`tokens.colors.accent-lavender` `#bba2e0`): Inline text-link color (e.g. the "這裡" inline link).
- **Accent Periwinkle** (`tokens.colors.accent-periwinkle` `#8897e3`): A soft periwinkle used heavily as a secondary label / icon-text accent across the page.

**Accent and data-viz**

- **Orange** (`tokens.colors.accent-orange` `#f58327`): Warm radial-glow accent and the source of the CTA's orange halo. Chart/highlight color.
- **Gold** (`tokens.colors.accent-gold` `#f0c732`): Yellow data-visualization accent (chart series, rating stars). The source trailing observation also writes `rgb(247,206,54)` `#f7ce36`. Both writings are kept; neither is selected.
- **Green** (`tokens.colors.accent-green` `#4dff64`): Positive / income data-viz highlight (a vivid lime).

The YAML token note, kept as the facts it names: Dark editorial finance app. Canvas near-black `#0d0d12`; action = pink→periwinkle gradient (`#ff367c` → `#6e86ff`). `primary_color` = brand pink `#ff367c` (gradient terminus + logo). Display = Poppins; CJK body falls back to system sans-serif (no embedded CJK webfont — Traditional-Chinese rendered via platform 蘋方/思源 stack). White body text is `rgba(255,255,255,0.87)` live; tokens carry solid `#ffffff` (translucency noted in prose). Calling that note a "dark editorial finance app" characterization is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published UI specification.

### Spacing

YAML `tokens.spacing` as recorded, each key on its own path: `tokens.spacing.xs` 1, `tokens.spacing.sm` 2, `tokens.spacing.base` 12, `tokens.spacing.md` 20, `tokens.spacing.lg` 32, `tokens.spacing.section` 64.

The source's spacing account, kept as written: Base unit: ~4px, with a coarse jump to 12/20/32 for component padding; scale 1px, 2px, 12px, 20px, 32px, 64px. Notable: pricing cards use a uniform 32px internal padding; section rhythm runs to 64px.

`tokens.spacing.md` 20 is not `tokens.rounded.md` 20. `tokens.spacing.lg` 32 is not the 32px type size and is not the 32px card padding. `tokens.spacing.base` 12 is not the 12px nav/button type size. `tokens.spacing.xs` 1 and `tokens.spacing.sm` 2 stay on those keys. `tokens.spacing.section` 64 is the section-rhythm key, not a type size. Keeping those paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published UI specification.

### Shape

YAML `tokens.rounded` as recorded, each key on its own path:

- Small (`tokens.rounded.sm`): 8 (8px) — inner chips, small containers
- Medium (`tokens.rounded.md`): 20 (20px) — cards, feature panels, plan cards — the workhorse
- Large (`tokens.rounded.lg`): 40 (40px) — larger rounded containers / carousel controls
- Full (`tokens.rounded.full`): 999 — all CTAs and badges

Component records write the full step as `999px` and the card step as `20px`. Those are the component writings; they do not replace the YAML keys. `tokens.rounded.md` 20 is not `tokens.spacing.md` 20. `tokens.rounded.full` 999 is not a spacing step. Keeping the YAML radius keys beside the component `999px` / `20px` writings, and keeping `tokens.rounded.md` 20 off `tokens.spacing.md` 20 and `tokens.rounded.full` 999 off a spacing step, are derived editorial implementation inferences from the verified surfaces; they are not MOZE-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow on `#0d0d12` canvas | Page background, body text |
| Panel (Level 1) | `#1a1d31` / `#323648` surface shift | Card / plan separation by tone |
| Glow CTA (Level 2) | `tokens.shadow.glow-cta` `rgba(255,89,0,0.7) -12px 0px 21px -3px, rgb(255,56,132) -7px 0px 10px -5px` | Primary download pill |
| Glow Card (Level 3) | `tokens.shadow.glow-card` `rgba(255,128,176,0.28) 0px -4px 32px 0px, rgba(87,95,255,0.25) 0px 0px 32px 0px` | Highlighted Pro plan card |

Shadow philosophy as recorded: MOZE elevates with **colored light, not grey shadow**. There are no neutral drop shadows; instead, the primary CTA emits a warm orange-and-pink halo and the featured pricing card floats on a pink/blue ambient glow that echoes the brand gradient. On a near-black canvas this reads as neon signage in a dark room — depth that is simultaneously brand atmosphere. Lower-priority panels separate purely by surface tone (`#1a1d31` vs `#323648`), reserving glow exclusively for the things the user should act on. That philosophy, including the neon-signage reading, is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published UI specification. The two shadow strings and the two panel hexes are the source's own.

### Motion

Duration scale as recorded:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, pill press, focus |
| `motion-standard` | 240ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 360ms | Page-level transitions, hero reveal, glow swell |

Easing roles as recorded, with the curve values omitted:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; no MOZE-published source for the curve) | Arriving — cards, sheets, glow fade-in |
| `ease-exit` | omitted (unattributed cubic-bezier; matches the legacy spec template; name and use only) | Dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name and use only) | Two-way transitions |

Motion rules as recorded: Motion is smooth and premium — consistent with the cinematic dark aesthetic. The signature gesture is a slow **glow swell**: the CTA and Pro-card ambient glow gently breathe/intensify on hover at `motion-slow`, reinforcing the "neon in a dark room" identity. Cards and chart data fade in from below at `motion-standard / ease-enter`. No bounce or spring — a finance product signals steadiness and elegance, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the glow holds steady; the product remains fully functional.

The duration values and their assignments, omitting the unattributed cubic-bezier curves while keeping the easing names and uses, the reduced-motion rule, the glow-swell signature, the no-bounce/no-spring rule, and the smooth-and-premium characterization are a derived editorial implementation inference from the verified surfaces; they are not MOZE-authored or a separately published motion specification. The inspection measured computed color, type, geometry, and shadow, and holds no motion measurement. Token-level claims in the source's §1–§9 are sourced from that live inspection; this motion section is part of the philosophy layer. Promoting an exact easing curve to a MOZE motion token requires a per-component computed observation of the transition properties, the animation name, the duration, the easing, and the reduced-motion behavior; a single named curve or duration is not that gate. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | No reviewed first-party MOZE source publishes a typography token for the captured pages. |
| Live computed surface-use | The 2026-06-17 inspection computed Poppins (with `Poppins Placeholder`) on Latin headlines, hero text, and pricing numerals, and computed a plain `sans-serif` stack on Traditional-Chinese body, with the sizes, weights, line heights, and tracking in the role table below. |
| Declared fallback | Display is `Poppins` with `Poppins Placeholder`. Body is `sans-serif` (system stack); no embedded Traditional-Chinese webfont. |
| Official distributed asset | No MOZE-distributed type family is established in this pass. |
| Declared-only / secondary Latin | `Inter` appears on a few embedded/UI fragments. No size, weight, line-height, or tracking is recorded for it. |
| License | No license text is recorded for Poppins, Inter, or the platform CJK faces. |
| Ownership boundary | Poppins and Inter are the only embedded Latin webfonts observed. Neither is established here as a MOZE-owned face. Hanzi render through the platform face (蘋方 / PingFang on Apple devices, 思源黑體 / Noto Sans CJK elsewhere). |

Sorting those rows as evidence-class resolutions rather than as a published MOZE type specimen is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published typography specification.

### Family

- **Display**: `Poppins` (with `Poppins Placeholder`) — all Latin headlines, hero text, pricing numerals. YAML `tokens.typography.family.display` is `Poppins`.
- **Body / CJK**: `sans-serif` (system stack). YAML `tokens.typography.family.body` is `system sans-serif (CJK fallback)`. MOZE does **not** embed a Traditional-Chinese webfont; hanzi render through the platform face (蘋方 / PingFang on Apple devices, 思源黑體 / Noto Sans CJK elsewhere). Body lead copy sits at 18px.
- **Secondary Latin**: `Inter` appears on a few embedded/UI fragments.
- Do not replace an unavailable or unobserved brand type with Poppins or with a system stack. Do not present `sans-serif`, PingFang, Noto Sans CJK, or Inter as a MOZE brand face.

The reading that Poppins owns the persuasive Latin display while the OS owns the dense Chinese reading text, that the two never swap, that headlines run at weight 400 and rely on size + white@87% contrast rather than bold weight for hierarchy, that heading ink is `rgba(255,255,255,0.87)` never `#ffffff` at full opacity, that -2.08px at 52px is the system's most distinctive typographic move, that an unavailable or unobserved brand type is not replaced with Poppins or a system stack, and that `sans-serif`, PingFang, Noto Sans CJK, and Inter are not presented as a MOZE brand face, is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published typography specification. The measured parts are the two families, the per-role sizes, weights, line heights, and tracking, and the live heading ink.

### Type roles

YAML `use` and the longer §3 notes are both kept. Unitless line-height ratios stay ratios (`1.4`, `1.3`, `1.5`); the §3 table's `~` markers stay. YAML `tracking: -2.08` is the same display-hero field the §3 table writes as `-2.08px`. Pairing each role to its token-set path, keeping those two writings of tracking, keeping rem beside px, and keeping display-hero size `52` off spacing and off the plan-price use of the same 52px Poppins, are derived editorial implementation inferences from the verified surfaces; they are not MOZE-authored or a separately published typography specification.

| Role | Font | Size | Weight | Line height | Letter spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero (`tokens.typography.display-hero`) | Poppins | 52px (3.25rem) | 400 | ~1.4 (YAML `lineHeight: 1.4`) | -2.08px (YAML `tracking: -2.08`) | YAML use: "Hero / section headlines, Poppins". §3 notes: Hero + section H2, white@87%. The source trailing observation also writes plan H2 prices at 52px Poppins `-2.08px` tracking; §9 restates "price 52px Poppins, white@87%". Those are the same display-hero metrics on prices, not a second type token. |
| Sub-section (`tokens.typography.section`) | Poppins | 32px (2.00rem) | 400 | ~1.4 (YAML `lineHeight: 1.4`) | normal | YAML use: "Sub-section heads (H3), Poppins". §3 notes: Feature H3 ("螢幕快照", "Apple Watch"). |
| Plan Name (`tokens.typography.plan-name`) | Poppins | 24px (1.50rem) | 400 | ~1.3 (YAML `lineHeight: 1.3`) | normal | YAML use: "Pricing plan title (H4), Poppins". |
| Body Lead (`tokens.typography.body`) | system sans | 18px (1.13rem) | 400 | 1.5 | normal | YAML use: "Lead / inline body copy, system sans". §3 notes: Inline lead copy, links. |
| Nav Link (`tokens.typography.nav`) | system sans | 12px (0.75rem) | 400 | ~1.3 (YAML `lineHeight: 1.3`) | normal | YAML use: "Top-nav link, system sans". |
| Button (`tokens.typography.button`) | system sans | 12px (0.75rem) | 400 | ~1.3 (YAML `lineHeight: 1.3`) | normal | YAML use: "Pill CTA label, system sans". |

Typography principles as recorded, covered by the Family qualification above:

- **Poppins for Latin, system for hanzi**: the display font owns numerals and English headline grid; Traditional-Chinese reading text defers to the OS face. Never force a Latin display font onto dense CJK body.
- **Extreme negative tracking on display**: -2.08px at 52px tightens headlines into compact, engineered blocks — the system's most distinctive typographic move.
- **Single display weight**: headlines run at weight 400 (regular) and rely on size + white@87% contrast rather than bold weight for hierarchy.
- **Soft white, not pure white**: heading ink is `rgba(255,255,255,0.87)`, never `#ffffff` at full opacity — a premium, low-glare near-white on the dark canvas.

### Assets

- Catalog logo entry: type `favicon`, slug `https://framerusercontent.com/images/DoQvcMSfFqFHJHne39zr96KczM.png`. The source records the triangular "M" logo as a vector-like PNG mark.
- App screenshots and device mockups sit inside 20px-radius panels on the dark canvas, as the source's image-behavior note records.
- Do not replace first-party product imagery or the triangular "M" mark with invented brand-color decoration.

Classing that URL as the catalog identity pointer rather than as a published MOZE illustration specification, and refusing to replace first-party product imagery or the triangular "M" mark with invented brand-color decoration, are derived editorial implementation inferences from the verified surfaces; they are not MOZE-authored or a separately published asset specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The 2026-06-17 inspection recorded computed styles on two desktop routes — `https://moze.app/` and `https://moze.app/pricing` — and harvested the eight components below. Its observation list holds default appearances. It holds no interaction event and no hover, press, or focus treatment.

A declared interactive component still closes Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A missing observation omits the visual treatment only; it is never a `not-applicable` reason. Where a canonical state carries no meaning for a control's role, it is marked `not-applicable` with that semantic reason. Loading, error, and success follow product role, not primitive kind. `Primitive type` is attached only when the source YAML records that type. YAML `active` on the nav item is a named appearance, not `focus-visible` evidence. State coverage is not complete here. Every interactive-kind verdict, every applicability verdict, and the reason for either, together with that not-complete claim, the rule that Primitive type is attached only when the source YAML records that type, and the active-versus-focus-visible split, are a derived editorial implementation inference from the verified surfaces; they are not MOZE-authored or a separately published UI specification.

### Source state contract

The state contract as recorded, preserved in full. None of the nine rows carries a verification marker and no observation in the live inspect backs one; they are a derived editorial implementation inference from the verified surfaces, describing how those states would be built in this system. They are not MOZE-authored, not observed on the two marketing pages, and not a separately published state specification. The financial situations they name — no transactions yet, no budget set, chart/data fetch, sync across devices, sync failed, input validation, entry saved — are editorial scenarios written into this contract, not statements about MOZE's actual logging, budgeting, or sync behavior.

| State | Treatment |
|---|---|
| **Empty (no transactions yet)** | Dark `#0d0d12` canvas. Single white@87% line inviting the first entry, with one pink-gradient CTA. No clutter — the emptiness feels intentional, like a fresh ledger. |
| **Empty (no budget set)** | Muted Grey (`#7b7c8c`) single line explaining no budget yet, plus a path to create one. Calm, non-judgmental. |
| **Loading (chart/data fetch)** | Skeleton blocks on `#1a1d31` panels at final dimensions, 20px radius. Subtle gradient shimmer consistent with the glow language. |
| **Loading (sync across devices)** | Inline progress with previous values visible; the dark canvas keeps focus on existing data. |
| **Error (sync failed)** | Inline message in white@87% with a plain-language explanation and retry. No generic alert dump — states the next step. |
| **Error (input validation)** | Field-level message below the input in a warm accent tone; describes what's valid, not just "必填". |
| **Success (entry saved)** | Brief inline confirmation in calm tone; the new row appears immediately. No celebratory emoji — the data updating is the confirmation. |
| **Skeleton** | `#1a1d31` blocks at final dimensions, 20px radius, soft glow-tinted pulse. |
| **Disabled** | Muted Grey (`#7b7c8c`) text on reduced-opacity surface; gradient actions fade rather than turn flat-grey, preserving the brand read. |

### Primary Gradient CTA

- Role: Primary download CTA on the captured homepage
- Kind: interactive
- Primitive type: `button`
- Background: `#ff367c` (YAML `bg`); live fill is the `274deg` `#6e86ff` → `#ff367c` gradient
- Text: `#ffffff`
- Radius: 999px
- Padding: 12px 20px
- Height: 41px
- Font: 12px system sans weight 400
- Shadow: `rgba(255,89,0,0.7) -12px 0px 21px -3px, rgb(255,56,132) -7px 0px 10px -5px`
- YAML states: "pink→periwinkle gradient 274deg `#6e86ff`→`#ff367c`; orange/pink glow shadow"
- YAML use: "Primary download CTA (立即免費下載 / 立即下載)"
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured on the homepage as the primary download pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | The state contract names a disabled treatment for gradient actions: they fade rather than turn flat-grey |
| loading | not-applicable | The control hands off to the app download; it runs no operation in place that could be pending |
| error | not-applicable | Nothing resolves on this control — it hands off — so no failure outcome can render on it |
| success | not-applicable | Handing off to a download is not an action-outcome confirmation on the control |

### Outline / Ghost Pill

- Role: Secondary pill CTA
- Kind: interactive
- Primitive type: `button`
- Text: `#ffffff`
- Radius: 999px
- Padding: 1px
- Height: 43px
- Border: 1px gradient ring (orange `#f58327` radial)
- YAML use: "Secondary pill CTA (查看完整教學)"
- Use as recorded: a thin gradient-ringed pill with transparent interior
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the secondary pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | The control opens 查看完整教學; it runs no operation in place that could be pending |
| error | not-applicable | Nothing resolves on this control, so no failure outcome can render on it |
| success | not-applicable | Following a tutorial CTA is a navigation action, not an action-outcome confirmation |

### Top-nav item

- Role: Top horizontal nav on the dark canvas
- Kind: interactive
- Primitive type: `tab`
- Text: `#ffffff`
- Font: 12px system sans weight 400
- Padding: 2px 0px
- Height: 30px
- YAML use: "Top-nav item (定價方案 / 教學文件 / 常見問題)"
- §4 Navigation also names "聯繫我們". Both writings are kept; the four labels are 定價方案, 教學文件, 常見問題, 聯繫我們.
- YAML active: "white `#ffffff` on dark"
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured in the top nav |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | A navigation destination can be unavailable; visual treatment omitted |
| loading | not-applicable | A nav item selects a destination; the item itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional named state: active, white `#ffffff` on dark. That is a named appearance rather than an observed transition, and it is not `focus-visible` evidence.

### Free Tier Card

- Role: Free pricing tier card
- Primitive type: `card`
- Kind: omitted. The source records this as a pricing-tier container with no interactive-kind evidence, so no Core §4.4 state-applicability map is declared and it is not recast as a control.
- Background: `#323648`
- Radius: 20px
- Padding: 32px
- YAML use: "Free pricing tier card (基本版 $0)"
- §5 records three equal-width plan cards (~377-379px) in a row; the middle "Pro + AI" card is the elevated one. That width range is a layout measurement, not this card's interactive kind.

### Pro Tier Card (Highlighted)

- Role: Highlighted pro tier card
- Primitive type: `card`
- Kind: omitted, on the same grounds as the Free tier card — a container with no interactive-kind evidence.
- Background: `#1a1d31`
- Radius: 20px
- Padding: 32px
- YAML border: "1px gradient ring (pink `#ff367c` → violet `#a963ff`)"
- §4 border: 1px gradient ring (pink `#ff367c` → violet `#a963ff` → blue `#6e86ff`)
- The source trailing observation also writes `linear-gradient(150deg, rgb(255,54,124) → rgb(169,99,255))` and `274deg` `#6e86ff`→`#ff367c` on this card. All three writings are kept; none replaces another.
- Shadow: `rgba(255,128,176,0.28) 0px -4px 32px 0px, rgba(87,95,255,0.25) 0px 0px 32px 0px`
- YAML use: "Highlighted pro tier card (專業版 + AI), pink/blue glow shadow"

### Feature Card

- Role: Feature / screenshot panel on canvas
- Primitive type: `card`
- Kind: omitted, on the same grounds — a container with no interactive-kind evidence.
- Background: `#1a1d31`
- Radius: 20px
- Padding: 32px
- YAML use: "Feature / screenshot panel on canvas"

### Accent Pill

- Role: Highlight / emphasis pill
- Primitive type: `badge`
- Kind: non-interactive — the source records it as a solid-pink emphasis / highlight pill rather than a control, so it declares no state-applicability map.
- Background: `#ff367c`
- Text: `#ffffff`
- Radius: 999px
- Font: 12px system sans weight 400
- YAML use: "Highlight / emphasis pill (solid pink)"

### Inline Link

- Role: Inline lavender text link
- Kind: interactive
- Primitive type: `listItem`
- Text: `#bba2e0`
- Font: 18px system sans weight 400
- YAML use: "Inline lavender text link (這裡)"
- Observed: default only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the inline "這裡" link |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-focusable control; visual treatment omitted |
| disabled | applicable | A destination link can be unavailable; visual treatment omitted |
| loading | not-applicable | The link hands off to its destination; it runs no operation in place |
| error | not-applicable | Nothing resolves on this link, so no failure outcome can render on it |
| success | not-applicable | Link meaning is the destination, not an action-outcome confirmation |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing and grid

YAML spacing keys as in Foundations. The source's layout account: centered single-column hero anchored by the 52px Poppins headline; pricing as three equal-width plan cards (~377-379px) in a row, 20px radius, the middle "Pro + AI" card visually elevated with a gradient ring + glow; feature sections alternate full-width dark bands with centered screenshot/feature cards; generous dark negative space between sections — the canvas does the separating.

### Whitespace

Whitespace philosophy as recorded: **Dark room, spotlit content** — the near-black canvas (`#0d0d12`) lets a single glowing CTA or card command attention. **Glow as grouping** — related emphasis (Pro card, primary CTA) is grouped by colored ambient light rather than borders. **Pill rhythm** — every interactive affordance is a 999px pill, creating a consistent rounded cadence. That account is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published layout specification. The measured parts are the canvas hex, the two glow shadows, the 999px CTA radius, and the 20px card radius.

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, hero headline compresses, plan cards stack vertically |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, 3-up pricing row, centered hero |

### Touch targets and collapsing

- Primary CTA pill at 41px height, full 999px radius — an unmistakable tap target
- Outline CTA at 43px height
- Nav items at 30px height with generous spacing on the dark bar
- Hero: 52px Poppins headline scales down on mobile, weight 400 maintained
- Pricing: three-card row → stacked single column, the Pro card retains its gradient ring + glow
- Feature bands: multi-column → stacked, screenshots scale within 20px-radius cards
- Dark canvas treatment is preserved at every breakpoint

### Image behavior

- App screenshots and device mockups sit inside 20px-radius panels on the dark canvas
- Brand gradient glows simplify but persist on mobile
- The triangular "M" logo scales cleanly as a vector-like PNG mark

The inspection covers computed styles on two desktop routes. The breakpoint table, the collapsing strategy, the image behavior, and the tap-comfort reading of the 41px / 43px / 30px heights are a derived editorial implementation inference from the verified surfaces; they are not MOZE-authored or a separately published responsive specification. Those three heights are desktop measurements of the named elements. The Desktop row's `1024-1440px` is the source's own breakpoint name and width.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Brand-published lines

Voice samples, verbatim from live surfaces:

- "用最優雅的方式簡化你的財務旅程" — hero headline (elegance + journey framing). English beside it, not instead of it: "Simplify your financial journey in the most elegant way". *(verified live 2026-06-17, moze.app)*
- "記帳，是理財的第一步" — section headline. The source's voice table glosses this as "bookkeeping is the first step of money management"; the source's brand narrative glosses the same line as "bookkeeping is the first step of financial management". Both glosses sit beside the Chinese; neither replaces it. *(verified live 2026-06-17, moze.app)*
- "投資你的財務健康" — pricing page headline ("invest in your financial health"). *(verified live 2026-06-17, moze.app/pricing)*

The parenthetical role notes beside those three lines, and the choice to keep both English glosses of the second line, are a derived editorial implementation inference from the verified surfaces; they are not MOZE-authored or a separately published voice specification. The published strings and their live markers are the source's own.

### Voice

MOZE's voice is **elegant, aspirational, and quietly confident** — it frames bookkeeping (記帳) not as a chore but as the graceful first step toward financial well-being. The hero line sets the register: refined, journey-framed, never gimmicky or guilt-driven. Copy treats the user as someone with taste who wants their money tools to be as beautiful as the rest of their device. That characterization, including the tone table below and the forbidden-register authoring rule that follows it, is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published microcopy guide.

| Context | Tone |
|---|---|
| Hero headlines | Aspirational, elegance-framed. "用最優雅的方式簡化你的財務旅程." Confident, never hype. |
| Feature heads | Calm and descriptive. "跨越裝置的財務掌控", "全面的記帳體驗，持續進化中". |
| Pricing | Plain and honest. "投資你的財務健康" framing tiers as 基本版 / 專業版 / 專業版 + AI. |
| CTAs | Direct, low-pressure. "立即免費下載", "查看完整教學". |
| Testimonials | Warm, human. "真實用戶，真心推薦" (real users, sincere recommendations). |

**Forbidden register**: guilt-based budgeting pressure, aggressive sales urgency, jargon-heavy finance-speak left undefined, exclamation-heavy hype. The same editorial reading as Voice above; an authoring rule for writing in this style, not a MOZE-published policy.

### Labels recorded on the captured surfaces

立即免費下載, 立即下載, 查看完整教學, 定價方案, 教學文件, 常見問題, 聯繫我們, 這裡, 基本版 $0, 專業版, 專業版 + AI, 螢幕快照, Apple Watch, 最美記帳 App, 摩斯.

### Locale

The captured pages are Traditional-Chinese. Hanzi render through the platform face; Poppins carries Latin display and numerals. 18px is the recorded body-lead size. Reading 18px as the size that lets the system face carry dense Chinese reading text is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published locale specification.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=evidence-backed-reconstruction lang=en -->
### Authority

This document is an evidence-backed reconstruction, not authority for an unrelated target project.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Named gaps

These decisions are unnamed values, not permissions to invent. Listing them as a catalog of source-unnamed values, rather than as coverage of domains the source never named, is a derived editorial implementation inference from the verified surfaces; it is not MOZE-authored or a separately published UI specification.

- exact cubic-bezier curves for `ease-enter` / `ease-exit` / `ease-standard` (unattributed; names and uses kept)
- hover, pressed, and focus-visible visual treatments on the harvested components
- Inter size, weight, line-height, and tracking (family named on embedded/UI fragments; metrics unnamed)
