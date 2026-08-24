# Airbridge Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Airbridge (에어브릿지) is the cross-platform mobile measurement partner (MMP) built by Seoul martech company AB180 (에이비일팔공). Catalog homepage identity is `https://www.airbridge.io`. Treating the following two URLs as the named live-inspect evidence domains of this reconstruction is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. This contract covers two current first-party marketing surfaces from the 2026-06-26 live inspect: `https://www.airbridge.io/ko` and `https://www.airbridge.io/ko/pricing`.

Source token note: Dark-first martech site. primary = electric CTA blue (`#155dfc`); a lighter link blue (`#0970ff`) carries inline links on light sections. Page emits `lab()`/`oklab()` colors — converted to hex via canvas `getImageData` during live inspect. Treating that note as a register split — `#155dfc` is catalog `primary_color` and the harvested primary CTA fill, `#0970ff` is the light-section inline-link field rather than a second primary — and treating the `lab()`/`oklab()` conversion as the source of these hex values rather than a native CSS hex sheet, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

The following evidence-domain sentence is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. The source HTML comment attaches token-level claims in §1–9 to playwright `getComputedStyle` on those two URLs. `https://engineering.ab180.co` is recorded as the quotation source for scale figures, not as a token sheet for marketing chrome. `https://help.airbridge.io/en` is listed among footer Tier 1 URLs; it is not in the live-inspect list and is not a token sheet here.

The following visual-character, control-panel, light/dark-cadence, Korean-modern typographic, restraint, and soft-square readings are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification. The source reads the marketing site as a precision instrument for marketers — a dark, data-room aesthetic that signals analytical seriousness rather than playful consumer warmth. The page opens on a near-black canvas (`#0a0a0c`) with near-white text (`#fafafa`), a contemporary "control panel" register the source compares with Linear, Vercel, and developer-adjacent SaaS. A single saturated electric blue (`#155dfc`) carries every primary call-to-action ("데모 신청하기"), trained to read as the one decisive action against the dark field. As the page descends into pricing and comparison sections it inverts to light grey (`#efefef`) and white surfaces with near-black headings (`#020202`), where a slightly lighter link blue (`#0970ff`) takes over inline links ("자세히 보기"). The source calls the result a deliberate light/dark cadence: the dark hero asserts authority, the light sections deliver the legible commercial detail.

The typographic personality is read as Korean-modern: everything is set in **Pretendard Variable**, described as the de-facto Korean product font, with no display/body font split — hierarchy comes entirely from size and weight. The hero headline runs at 72px / weight 600 with tight `-1.08px` tracking and a gradient text-fill (its computed color resolves transparent because the fill is clipped from a background gradient), while section titles land at 48px / weight 700 / `-0.72px`. Pure white (`#ffffff`) appears on nav chrome and maximum-contrast labels, and a muted cool grey (`#98989f`) handles eyebrows and secondary metadata. Headlines track tight; body text sits at 16px / 1.5.

What the source treats as distinctive among generic dark SaaS is restraint and one warm note. Depth is communicated through flat tinted surfaces — a dark zinc surface (`#18181b`) for feature cards on the near-black canvas — and barely-there translucent-white washes rather than heavy drop shadows; the only real shadow is a soft blue focus ring (`rgba(21,93,252,0.15)`) around the primary button. Against the otherwise blue-and-neutral palette, a single mint-green accent (`#7eedb8`) appears in iconography and data highlights, the lone organic hue in an engineered system. Geometry is consistently soft-square: 8px on buttons, 10px on nav and segmented controls, 16px on cards — modern, calm, never pill-shaped.

Treating the following public-history and product-line facts as narrative rather than interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. Airbridge is the flagship product of AB180, founded in 2015 and led by co-founders 남성필 (Sungpil Nam) and 정훈재 (Hunjae Jung). The source founding premise: in a fragmented cross-platform world (Android, iOS, SKAdNetwork, web, PC, console), there was no trustworthy unified way to measure which marketing drove installs and revenue. Airbridge answers as an MMP: cross-platform attribution, deep-link management, ad-fraud prevention, and AI-driven LTV/funnel analysis. AB180's engineering blog is quoted as processing "10억 개 이상의 이벤트 데이터, 1억 대 이상의 디바이스, 100만 이상의 RPM" (1B+ events, 100M+ devices, 1M+ RPM in real time). The product line has since extended to Airflux (an AI monetization agent) and Airbridge DeepLink. Client-list and 600+ clients across 30+ countries figures (Nexon, Samsung Securities, Standard Chartered, KFC among them) are recorded as public company sources (`ab180.co`), not directly quoted Airbridge statements beyond the engineering-blog scale figures.

The following refusal, embrace, and precision-tool readings are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification. The source treats Airbridge as refusing loud illustration-heavy consumer-marketing chrome and hand-wavy "growth hacking" hype, and as embracing a dark, instrument-like canvas; a single decisive blue; Pretendard-set type that states capability plainly; and copy that replaces gut feel with evidence — "감이 아닌 데이터를 근거로." The brand is read as a precision tool built by engineers for marketers who think like analysts.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Treating the three live CTA strings below as the independently verified user outcomes, and not lifting tasks from source §13 fictional archetypes, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

- Request a product demo (`데모 신청하기` on the captured Korean marketing surface).
- Review pricing (`요금 확인하기`).
- Open supporting detail (`자세히 보기`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. Source §13 names fictional archetypes informed by publicly observable Airbridge user segments (Korean app marketers, growth/performance teams, mobile analysts at game and commerce companies), not individual people. Treating that no-individual-personas-promoted restriction, restricting Audience so those fictional archetypes are not Audience and are not primary tasks, and tying observable work only to the three primary tasks, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

### Distinctive traits

- Dark-first canvas `#0a0a0c` with near-white text `#fafafa`
- Catalog `primary_color` / electric CTA blue `#155dfc` reserved for the primary CTA
- Lighter link blue `#0970ff` for inline text links on light commercial sections
- Pretendard Variable everywhere — hierarchy by size/weight, no display/body font split
- Hero at 72px / weight 600 / `-1.08px` with gradient text-fill (computed color transparent); sections at 48px / 700 / `-0.72px`
- Light/dark cadence — near-black hero → light grey `#efefef` / white commercial detail with `#020202` headings
- Flat depth: dark zinc `#18181b` and translucent-white washes instead of heavy shadows; live inspection `box-shadow: none` on nav, headings, and feature cards
- One mint accent `#7eedb8` as the lone organic hue
- Soft-square geometry — 8px buttons, 10px nav/segmented, 16px cards; YAML `full` 9999 (`9999px`) rare, reserved for avatars/dots
- Pure white `#ffffff` on nav chrome; muted cool grey `#98989f` for eyebrows and secondary metadata

Treating `#155dfc` as the single action hue rather than a second identity color and as catalog `primary_color` plus primary CTA fill, treating `#0970ff` as the light-section inline-link field rather than a second primary, treating `#ffffff` nav chrome as unmerged from `#fafafa` ink, treating surfaces as separated by tone and wash rather than elevation, treating 16px as the card workhorse rather than a universal radius, treating mint as a sparse data accent / lone organic hue rather than a second action color, treating YAML `full` 9999 / `9999px` as rare and reserved for avatars/dots rather than a button or card radius, and treating hierarchy-by-size-weight, gradient-hero, light/dark-cadence-as-trait, and flat-depth as distinctive character rather than published UI doctrine, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

### Principles

These five items, including each *UI implication*, are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification.

1. **Evidence over gut feel.** The product exists to replace guesswork with measurement. *UI implication:* lead with concrete data, scope, and numbers; the dark "control panel" canvas frames the product as an instrument, not a billboard.
2. **One decisive action.** Electric blue (`#155dfc`) means "do this." *UI implication:* reserve the saturated blue exclusively for the primary CTA so the next step is never ambiguous against the dark field.
3. **Plain capability, no hype.** Claims are stated, not inflated. *UI implication:* outcome-framed headlines and technical feature labels; never superlatives or urgency.
4. **Flat and fast.** Modern clarity beats decorative depth. *UI implication:* no drop shadows; separate with tone and translucent washes; keep the chrome light and quick to scan.
5. **Authority then legibility.** *UI implication:* a dark hero asserts seriousness; light commercial bands deliver legible pricing/comparison detail — a deliberate light/dark cadence.

Treating the following as a capture-bound application of source §7 Do’s and live inspect is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

- Use the near-black canvas (`#0a0a0c`) with near-white text (`#fafafa`) for the primary dark register.
- Reserve electric blue (`#155dfc`) for the primary CTA — keep it the single "action" color.
- Use the lighter link blue (`#0970ff`) for inline text links on light sections.
- Set everything in Pretendard Variable; drive hierarchy with weight (400 body → 700 heading, 600 on the hero).
- Apply tight negative tracking on headlines (`-1.08px` at 72px, `-0.72px` at 48px).
- Separate surfaces with flat tone (`#18181b` on `#0a0a0c`) and translucent-white washes, not shadows.
- Keep geometry soft-square — 8px buttons, 10px nav/segmented, 16px cards.
- Use the mint accent (`#7eedb8`) sparingly, only for data highlights.

### Avoid

The following items copy source §7 Don’ts, plus one §9-only canvas-ink constraint. They are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification.

- Do not use drop shadows for elevation — Airbridge is a flat, near-shadowless system (reach for the blue ring or tone).
- Do not spread the electric blue across many elements — it dilutes the single-action signal.
- Do not use pure black for light-mode text — reserve `#020202` near-black for the light sections.
- Do not use pill/full-round geometry on buttons or cards — the system is soft-square (8-16px).
- Do not introduce a second saturated accent — blue is primary; mint is the only warm note, used minimally.
- Do not set headlines in a light weight — display is weight 600-700.
- Do not mix in a different body font — Pretendard Variable carries every role.
- Do not use positive letter-spacing at display sizes — Airbridge tracks tight.
- Source §9-only: text is `#fafafa` on dark, `#020202` on light — never pure black on the dark canvas. Treating that canvas-ink constraint as not the same as the light-mode `#020202` rule above is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The following unmerged-role readings, including the extra list characterizations (single action color against the dark canvas; darker primary would be heavy on light sections; mint used sparingly), are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification. Catalog `primary_color` `#155dfc` is the electric CTA fill and YAML `primary`; it is not Link Blue `#0970ff` and not Mint `#7eedb8`. Link Blue is the light-section inline-link field (YAML `primary-link`), not a second primary and not the harvested primary CTA fill. Near-White Ink `#fafafa` is dark-canvas text and CTA-label color; Pure White `#ffffff` is nav chrome, maximum-contrast labels, and light-section card fill — they share no merged role. Ink Dark `#020202` is light-section heading/body color, reserved for light-mode type, denser than the dark canvas itself. Canvas Black `#0a0a0c` is the hero/dark-feature page background; Surface Dark `#18181b` is the feature-card zinc; Surface Light `#efefef` is the pricing/comparison band; they stay unmerged. Mint `#7eedb8` is the data-highlight accent, not an action fill. Primary CTA ring `rgba(21,93,252,0.15) 0px 0px 0px 1px` is that control’s field, not a card elevation token. Ghost/input wash `rgba(255,255,255,0.04)` plus hairline `rgba(255,255,255,0.12)` are those controls’ fields, not Surface Dark. Mint Highlight chip fill `rgba(126,237,184,0.04)` is that chip’s field, not a page-wide mint wash.

- **Airbridge Blue / Primary** (`#155dfc`): catalog `primary_color`. YAML `primary`. Primary brand color and CTA background on "데모 신청하기" — the system's single "action" color against the dark canvas.
- **Link Blue** (`#0970ff`): YAML `primary-link`. A slightly lighter, brighter blue used for inline text links ("자세히 보기") on the light commercial sections, where the darker primary would be heavy.
- **Near-White Ink** (`#fafafa`): YAML `ink`. Primary text and CTA-label color on the dark canvas.
- **Pure White** (`#ffffff`): YAML `white`. Nav chrome text, maximum-contrast labels, and the background of light-section feature/comparison cards.
- **Ink Dark** (`#020202`): YAML `ink-dark`. Near-black heading and body color on the light (`#efefef` / white) sections.
- **Canvas Black** (`#0a0a0c`): YAML `canvas`. The near-black page background of the hero and dark feature sections.
- **Surface Dark** (`#18181b`): YAML `surface-dark`. Dark zinc surface for feature cards and panels sitting on the near-black canvas.
- **Surface Light** (`#efefef`): YAML `surface-light`. Light grey background for the pricing/comparison commercial sections.
- **Muted Grey** (`#98989f`): YAML `muted`. Eyebrow labels, inactive tabs, secondary metadata, lowest-emphasis text, and input placeholder.
- **Mint** (`#7eedb8`): YAML `accent-mint`. The single warm/organic accent — iconography and data highlights, used sparingly against the blue-and-neutral system.

Hex values above were converted from `lab()`/`oklab()` via canvas `getImageData` during the live inspect, as recorded in the source token note.

### Spacing

YAML `spacing` is unitless: xs 4, sm 8, md 12, base 16, lg 24, xl 28, xxl 32, section 64. Treating those YAML numbers as unitless token numbers rather than a claimed px scale, while keeping the §5 observed px scale as a separate observation, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

Observed scale in the body: 4px, 8px, 12px, 16px, 24px, 28px, 32px, 64px. Base unit stated in the source: 8px (nav/button padding lands on 8px and 12px multiples; section rhythm at 64px). Ghost-CTA horizontal padding lands at 28px. Treating that 28px as giving the secondary action a wider, calmer hit area than the 16px primary is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

### Shape

YAML `rounded`: sm 8, md 10, lg 16, full 9999 (`9999px` in the body).

Observed radii in the body: Small 8px (buttons, inputs); Medium 10px (nav items, segmented controls); Large 16px (feature and comparison cards — the workhorse); Full `9999px` (rare, reserved for avatars/dots).

The following local-geometry reading is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. 8px / 10px / 16px / `9999px` remain local harvested geometry, not a universal radius for every unlisted control. Calling 16px the workhorse radius, calling `9999px` rare and reserved for avatars/dots rather than a button or card radius, and calling the system soft-square rather than pill-shaped on buttons or cards, is that same derived reading.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, headings, most surfaces |
| Tone (Level 1) | Surface shift (`#18181b` on `#0a0a0c`) | Card/panel separation without elevation |
| Wash (Level 2) | `rgba(255,255,255,0.04)` fill + `rgba(255,255,255,0.12)` hairline | Ghost buttons, inputs, active segmented tab |
| Ring (Level 3) | `rgba(21,93,252,0.15) 0px 0px 0px 1px` | Primary CTA focus/emphasis ring |

YAML `tokens.shadow.ring` is `rgba(21,93,252,0.15) 0px 0px 0px 1px`. Live inspection found `box-shadow: none` across nav, headings, and feature cards.

The following tone-not-elevation and shadow-philosophy readings, including the table Use assignments (card/panel separation without elevation; ring as Primary CTA emphasis rather than a card drop shadow), are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification. Airbridge is a near-shadowless dark system. The only real elevation cue is a soft blue ring around the primary CTA. Depth and grouping are communicated through flat tonal layering — a dark zinc surface (`#18181b`) lifted off the near-black canvas (`#0a0a0c`) — and barely-there translucent-white washes. The source reads this as keeping analytics-product chrome feeling clean, fast, and modern, reaching for color (blue `#155dfc`) or tone, never heavy drop shadows, when emphasis is needed. The ring string is the Primary CTA field and YAML `shadow.ring`; it is not a card drop shadow.

### Motion

Source-stated duration roles. The source HTML comment attaches live inspect to token-level claims in §1–9; §15 sits in the philosophy layer (sections 10–15) and is not in the live-inspect list. Treating the duration table, easing names, signature nav-wash / fade-in / segmented-slide, and reduced-motion line as source-stated rather than computed CSS, and treating the "functional and restrained" / "signals steadiness and precision, not playfulness" readings as editorial, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, nav wash, focus ring |
| `motion-standard` | 200ms | Card/section reveal, segmented-tab switch, accordion |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only) | Arriving — cards, panels, accordion open |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Dismissals, accordion close |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only) | Two-way transitions, tab switches |

The following motion-rule readings are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification. Motion is described as functional and restrained — consistent with the flat, instrument-like aesthetic. Nav items respond to hover with a quick translucent-white wash; feature cards and report rows fade in from below at `motion-standard / ease-enter`; the pricing segmented toggle slides its active fill at `motion-standard / ease-standard`. No bounce or spring — a measurement product is read as signalling steadiness and precision, not playfulness. Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings, including the fallback-not-product-face assignment, are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | Captured Korean marketing and pricing surfaces: Pretendard Variable. Hero 72px / 600 / `-1.08px` with gradient text-fill (computed color transparent). Section H2 48px / 700 / `-0.72px` / `#fafafa`. |
| Declared fallback | Body records `Pretendard` beside `Pretendard Variable`. YAML `family.sans` is `Pretendard Variable`. `Pretendard` is the recorded fallback, not a second product face. |

The following font-use boundary is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. Do not replace Pretendard Variable with a different claimed family. Do not present the `Pretendard` fallback as a second brand face.

The following type-rule readings (one font and weight-driven hierarchy; tight tracking that scales with size; gradient hero as the single decorative typographic moment; hangul-tuned body at 16px / 1.5 for dense, data-heavy marketing copy) are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification. Pretendard Variable carries everything; the jump from weight 400 body to weight 700 headings (and 600 on the hero) is the primary hierarchy signal, not a second typeface. Tracking is `-1.08px` at 72px, `-0.72px` at 48px, `-0.39px` at 26px, `-0.27px` at 18px; body and UI text stay at normal tracking. The 72px hero headline is filled from a clipped background gradient. Body at 16px / 1.5 is recorded for dense, data-heavy marketing copy.

### Family

- **Current visible UI family:** `Pretendard Variable` (with `Pretendard` fallback) — YAML `family.sans`

### Type roles

Verified YAML line-height values are the unitless ratios `1.0`, `1.33`, `1.54`, `1.5`, and `1.43`. The following ratio-versus-size-local reading, including treating YAML-omitted tracking on Eyebrow / Body / CTA / Nav as not invented, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. The unitless ratios scale with font size and are not fixed px. The body table’s `24px` beside Body `1.5` is a size-local observation at 16px, not a replacement for the ratio. YAML tracking `-1.08` / `-0.72` / `-0.39` / `-0.27` is the same pair written `-1.08px` / `-0.72px` / `-0.39px` / `-0.27px` in the body. Eyebrow, Body, CTA, and Nav / Link record `normal` tracking in the body table; YAML omits tracking on those four roles — none is invented.

YAML font names on harvested controls say `Pretendard`; the type-role table uses `Pretendard Variable`. Treating those strings as unmerged, and not converting one into the other, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height (YAML) | Body-table observation | Tracking | Use (YAML) |
|---|---|---:|---:|---:|---|---|---|
| Hero | Pretendard Variable | 72px (4.50rem) | 600 | 1.0 | (none extra) | -1.08px | Hero headline, gradient text-fill |
| Section | Pretendard Variable | 48px (3.00rem) | 700 | 1.33 | (none extra) | -0.72px | Section titles |
| Feature | Pretendard Variable | 26px (1.63rem) | 700 | 1.54 | (none extra) | -0.39px | Feature/tab headings |
| Card Title | Pretendard Variable | 18px (1.13rem) | 700 | 1.5 | (none extra) | -0.27px | Card / plan titles |
| Eyebrow | Pretendard Variable | 14px (0.88rem) | 700 | 1.43 | (none extra) | normal | Section eyebrow label, muted |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.5 | 24px at this size | normal | Standard reading text |
| CTA | Pretendard Variable | 15px (0.94rem) | 500 | 1.0 | (none extra) | normal | Primary CTA label |
| Nav / Link | Pretendard Variable | 14px (0.88rem) | 500 | 1.0 | (none extra) | normal | Nav links, buttons, inline links |

Eyebrow color in the body table is `#98989f`. Hero computed text color is transparent (gradient fill).

### Assets

Treating catalog logo metadata as a Google favicon lookup, not a captured first-party mark, and not promoting it as a portable mark file, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

The following imagery-boundary reading, including no-shadow-at-any-size and consistent-with-the-flat-system, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. Dashboard/product screenshots sit on the dark canvas with no shadow at any size, consistent with the flat system. Do not replace verified product screenshots with invented brand-color decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Preserving the source state contract here while the catalog graph is not adopted is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. Hex values and geometry in the harvested components remain source-stated.

The following classification of the source §14 table as philosophy-layer implementation guidance (sections 10–15), not live-inspect marketing-chrome paints, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. The source HTML comment attaches live inspect to token-level claims in §1–9. These rows describe empty/loading/error/success/skeleton/disabled treatments for a measurement-product surface. They are not copied onto harvested marketing CTAs as computed paints.

| State | Treatment |
|---|---|
| **Empty (no measurement data yet)** | Near-black canvas (`#0a0a0c`). Single near-white (`#fafafa`) line explaining no events have been received, with one blue (`#155dfc`) CTA to connect a source. No illustration clutter. |
| **Empty (report, zero rows)** | Muted Grey (`#98989f`) single line stating nothing matches the current filter; filter summary stays visible so scope can be adjusted. Honest, never "No data found". |
| **Loading (dashboard first paint)** | Skeleton blocks at final dimensions in dark zinc (`#18181b`), flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (in-place refresh)** | Subtle blue (`#155dfc`) progress indicator; previous values stay visible. Never blank the panel during refresh. |
| **Error (data fetch failed)** | Inline message in near-white (`#fafafa`) with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone — states what to do next. |
| **Error (form validation)** | Field-level message below the input describing what is valid, not just "필수". |
| **Success (source connected)** | Brief inline confirmation in calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | Dark zinc (`#18181b`) blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Muted Grey (`#98989f`) label on reduced-opacity surface; blue actions fade rather than turn grey to preserve the brand action read. |

Characterizations in that table such as “No illustration clutter”, “Honest, never No data found”, “no shadow shimmer, consistent with the shadowless system”, “Never blank the panel”, “No generic 오류가 발생했습니다”, “not just 필수”, “No celebratory emoji”, and “preserving the brand action read” are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. The source records a generic Primary CTA Focus ring. That appearance is generic Focus, not `focus-visible` treatment evidence. The `focus-visible` row does not carry a colour. A later generic Focus observation would not be `focus-visible` evidence. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control’s product role, not its primitive kind. Where exact selector/label/request/outcome mapping is unresolved, those three applicability fields are omitted at this boundary rather than closed from the §14 rows. This is not a complete state-coverage claim.

Dark Feature Card and Light Comparison Card have YAML `type: card` and no interactive-kind confirmation for a §4.4 map, so kind and a state-applicability map are omitted. Mint Highlight has no YAML type and no interactive-kind confirmation; Type, kind, and a state-applicability map are omitted. Compact Primary and Default Input are body §4 only (not YAML `tokens.components`); Type is not invented for them.

### Primary CTA

- Role: primary call-to-action on the dark canvas
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `#155dfc`
- Text: `#fafafa`
- Radius: 8px
- Padding: YAML `0 16px`; body `0px 16px`
- Height: 48px
- Font: YAML `15px / 500 Pretendard`; body 15px Pretendard weight 500
- Shadow: soft blue focus ring `rgba(21,93,252,0.15) 0px 0px 0px 1px`
- Use: YAML `Primary CTA 데모 신청하기, soft blue focus ring`
- Observed: default, plus named Focus ring
- Field note: The following unmerged-field reading, including treating the named Focus ring as generic Focus rather than `focus-visible` treatment, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.
- Field note (fills): The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. `#155dfc` is this control’s fill and catalog `primary_color`. `#fafafa` is this control’s label and Near-White Ink.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the primary CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A primary action can be unavailable; visual treatment omitted. Source §14 Disabled says blue actions fade rather than turning grey; that row is not copied here as a computed paint |

Loading, error, and success applicability are omitted. Source names this control as a primary demo CTA; exact selector/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed from the §14 rows.

Additional observed named state: Focus `rgba(21,93,252,0.15) 0px 0px 0px 1px`. That appearance is a captured generic Focus, not an observed `focus-visible` treatment.

### Ghost / Outline (on dark)

- Role: secondary CTA on the dark canvas
- Kind: interactive
- Type: button
- Anatomy: label
- Background: `rgba(255,255,255,0.04)`
- Text: `#fafafa`
- Border: 1px solid `rgba(255,255,255,0.12)`
- Radius: 8px
- Padding: YAML `0 28px`; body `0px 28px`
- Height: 48px
- Font: YAML `15px / 500 Pretendard`; body 15px Pretendard weight 500
- Use: YAML `Secondary CTA 요금 확인하기 on dark`; body also names "자세히 보기" as a ghost on dark
- Observed: default only
- Field note: The following unmerged-role reading is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. Ghost "자세히 보기" on dark is this control’s use string, not Inline Link `#0970ff` on light sections. `rgba(255,255,255,0.04)` fill and `rgba(255,255,255,0.12)` hairline are this control’s fields, not Surface Dark.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the ghost CTA |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a secondary pricing/detail CTA on dark; exact selector/destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Compact Primary

- Role: in-card / nav-corner primary action
- Kind: interactive
- Anatomy: label
- Background: `#155dfc`
- Text: `#fafafa`
- Radius: 8px
- Padding: 8px 16px
- Height: 36px
- Font: 14px Pretendard weight 500
- Use: In-card / nav-corner primary action
- Observed: default only
- YAML `tokens.components` does not record this control; values are body §4 only. Type is not invented.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. `#155dfc` is this control’s fill and Primary. Height 36px is this compact control, not Nav Item 36px and not Primary CTA 48px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named in-card / nav-corner primary action |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A compact primary action can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as an in-card / nav-corner primary action; exact selector/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

### Default Input (on dark)

- Role: form field on the dark canvas
- Kind: interactive
- Anatomy: value field
- Background: `rgba(255,255,255,0.04)`
- Border: 1px solid `rgba(255,255,255,0.12)`
- Radius: 8px
- Text: `#fafafa`
- Placeholder: `#98989f`
- Use: Form field on the dark canvas (matches the ghost-button surface language)
- Observed: default only
- YAML `tokens.components` does not record this control; values are body §4 only. Type is not invented.
- Field note: The following application reading is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. Matching the ghost-button surface language is a source use note, not a merge of this field into Ghost / Outline. `#98989f` placeholder is this field’s placeholder, not a license to set body copy in Muted Grey.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Named form field on the dark canvas |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An input can be unavailable; visual treatment omitted |
| error | applicable | Form field; visual treatment omitted. Source §14 names a field-level message below the input; that row is not copied here as a computed paint |

Loading and success applicability are omitted. Source records default geometry plus placeholder `#98989f`. Exact loading/success mapping for this field is unresolved, so those two fields stay omitted at this boundary rather than closed from the §14 rows.

### Dark Feature Card

- Role: feature/solution card on the near-black canvas
- Type: card
- Anatomy: surface
- Background: `#18181b`
- Text: `#fafafa`
- Radius: 16px
- Use: YAML `Feature card on near-black canvas`; body Feature/solution card sitting on the near-black canvas
- Observed: default only
- Field note: The following unmerged-role and mixed-anatomy readings are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification. `#18181b` is this card’s fill and Surface Dark. YAML `fg` `#fafafa` is this component’s token field. Source §9-only mixed anatomy is a 26px / 700 / `-0.39px` / `#fafafa` title with 16px / 400 / 1.5 / `#98989f` body on the same card; that mixed title/body is not the same as painting the whole card copy `#fafafa`.

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Light Comparison Card

- Role: pricing / comparison card on the light grey section
- Type: card
- Anatomy: surface
- Background: `#ffffff`
- Text: `#020202`
- Radius: 16px
- Use: YAML `Light-section feature / comparison card`; body Pricing / comparison card on the light grey (`#efefef`) section
- Observed: default only
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. `#ffffff` is this card’s fill and Pure White, not Canvas Black. `#020202` is this card’s text and Ink Dark, not Near-White Ink.

No interactive-kind evidence is given for this surface. Kind and a state-applicability map are omitted.

### Mint Highlight

- Role: data-highlight chip / positive metric accent
- Anatomy: label
- Background: `rgba(126,237,184,0.04)`
- Text: `#7eedb8`
- Radius: 8px
- Use: Data-highlight chip / positive metric accent — the lone warm hue
- Observed: default only
- YAML `tokens.components` does not record this control; values are body §4 only. Type is not invented.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. `#7eedb8` and `rgba(126,237,184,0.04)` are this chip’s fields, not a page-wide mint and not Primary `#155dfc`.

No interactive-kind confirmation is given for a §4.4 map. Kind and a state-applicability map are omitted.

### Segmented Toggle

- Role: pricing plan toggle
- Kind: interactive
- Type: tab
- Anatomy: label
- Active: text `#fafafa` on `rgba(255,255,255,0.04)` with 1px `rgba(255,255,255,0.12)` border
- Inactive: `#98989f` label, transparent background
- YAML `disabled`: `#98989f` label
- Radius: 10px
- Padding: 4px 24px
- Height: 29px (body §8)
- Font: YAML `14px / 500 Pretendard`; body 14px Pretendard weight 500
- Use: YAML `Pricing plan toggle (MMP / 딥링크)`; body "MMP 플랜" / "딥링크 플랜"
- Observed: static inactive and static active appearances. Treating the active appearance as a captured variant, not an observed click transition, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. YAML `disabled` `#98989f` label and the inactive `#98989f` appearance share a hex and stay unmerged as named fields. Height 29px is body §8, not YAML.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Static inactive appearance captured on the pricing plan toggle |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | YAML records disabled as `#98989f` label; that named appearance is this field, not a computed paint invented for other controls |
| loading | not-applicable | A pricing-plan toggle selects a grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the tab |
| success | not-applicable | Tab meaning is selection, not action-outcome confirmation |

Additional observed named state: static active appearance (`#fafafa` on `rgba(255,255,255,0.04)` with 1px `rgba(255,255,255,0.12)` border). Treating that appearance as a captured variant, not an observed click transition, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

### Nav Item

- Role: top navigation item
- Kind: interactive
- Type: tab
- Anatomy: label
- Text: `#ffffff`
- Radius: 10px (hover wash)
- Padding: 8px 12px
- Height: 36px (body §8, within the sticky header)
- Font: YAML `14px / 500 Pretendard`; body 14px Pretendard weight 500
- Active: YAML `text #ffffff on translucent white wash`; body translucent white wash behind the label
- Inactive: `#98989f` for de-emphasized items
- YAML `disabled`: `#98989f` label
- Use: YAML `Top nav item`; body "기능 소개", "솔루션", "인사이트", "가격"
- Observed: default, plus named active wash and inactive/de-emphasized label
- Field note: The following unmerged-field reading, including treating the named hover wash as a name without a computed colour rather than a hex on the hover row, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. `#ffffff` is this control’s label and Pure White, not Near-White Ink `#fafafa`. Named hover wash and named active wash are not merged. YAML `disabled` `#98989f` and inactive `#98989f` share a hex and stay unmerged as named fields. Height 36px is this nav item (body §8), not Compact Primary 36px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the top nav item |
| hover | applicable | Pointer-web tab; visual treatment omitted. Source names a hover wash without a computed colour; that name is not copied onto this row as a hex |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | YAML records disabled as `#98989f` label |
| loading | not-applicable | A nav item selects a destination grouping; the item itself does not enter a loading state |
| error | not-applicable | Tab meaning is selected versus resting, not a request or validation failure on the item |
| success | not-applicable | Tab meaning is navigation selection, not action-outcome confirmation |

Additional observed named state: static active appearance (translucent white wash behind `#ffffff`). Treating that appearance as a captured variant, not an observed click transition, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

### Inline Link

- Role: inline text link on light sections
- Kind: interactive
- Type: button
- Anatomy: label
- Text: `#0970ff`
- Font: YAML `14px / 500 Pretendard`; body 14px Pretendard weight 500
- Padding: 16px 0px 0px (top-spaced from card body)
- Use: YAML `자세히 보기 inline text link on light sections`
- Observed: default only
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. `#0970ff` is this control’s field and Link Blue, not Primary `#155dfc`. Type `button` is the YAML primitive; it is not a merge with Primary CTA.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the light-section inline link |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An inline link can be unavailable; visual treatment omitted |

Loading, error, and success applicability are omitted. Source names this control as a light-section text link; exact destination/request/outcome mapping is unresolved, so those three fields stay omitted at this boundary rather than closed.

### FAQ Accordion

- Role: pricing-page FAQ row
- Kind: interactive
- Type: listItem
- Anatomy: label
- Text: `#fafafa`
- Font: YAML `18px / 500 Pretendard`; body 18px Pretendard weight 500
- Padding: YAML `24px 0`; body `24px 0px` (vertical)
- Use: YAML `FAQ accordion row on dark`; body Pricing-page FAQ rows ("MAU(월간 활성 유저)란 무엇인가요?")
- Observed: default only
- Field note: The following unmerged-field reading is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification. `#fafafa` is this row’s label and Near-White Ink. Type `listItem` is the YAML primitive.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Harvested as the FAQ accordion row |
| hover | applicable | Pointer-web disclosure row; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An FAQ row can be unavailable; visual treatment omitted |
| loading | not-applicable | An FAQ row discloses an answer; the row itself does not issue a request |
| error | not-applicable | Accordion meaning is expanded versus collapsed, not a validation failure on the row |
| success | not-applicable | Accordion meaning is disclosure, not action-outcome confirmation |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

YAML spacing is xs 4, sm 8, md 12, base 16, lg 24, xl 28, xxl 32, section 64. Body layout repeats 4px, 8px, 12px, 16px, 24px, 28px, 32px, 64px with an 8px base unit and 64px section rhythm. Ghost-CTA horizontal padding is 28px versus primary 16px. Primary and Ghost CTAs are 48px high. Compact Primary is 36px high. Nav items are 36px high with 8px 12px padding within the sticky header. Segmented-toggle items are 29px high with 24px horizontal padding. Cards use 16px radius.

The “breathing room over density”, “light/dark cadence”, “flat segmentation”, centered-hero, sticky-nav, and 2-3-column feature-grid readings in this section are derived editorial implementation inferences from the verified surfaces; they are not Airbridge-authored or a separately published UI specification.

Recorded layout:

- Centered single-column hero anchored by the 72px gradient headline and a primary/secondary CTA pair
- Feature sections use repeating dark cards (`#18181b`) in 2-3 column grids on the near-black canvas
- Pricing/comparison sections invert to a light grey (`#efefef`) band with white comparison cards
- A persistent dark sticky nav with translucent-white hover washes on items
- Breathing room over density: generous vertical rhythm (64px section spacing) between bands
- Light/dark cadence: near-black hero/feature bands alternate with light grey commercial bands
- Flat segmentation: sections separate by background tone (canvas `#0a0a0c` vs surface `#18181b` vs light `#efefef`) and translucent washes, not by heavy borders or shadows

Source breakpoint table:

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero compresses from 72px, cards stack |
| Tablet | 640-1024px | 2-up feature cards, moderate padding |
| Desktop | 1024-1440px | Full layout, centered hero, 2-3 column feature/comparison grids |

Collapsing strategy recorded in the source: hero 72px gradient headline scales down on mobile, weight 600 maintained; feature cards 3-column → 2-column → stacked single column; light/dark bands maintain full-width treatment across breakpoints; pricing comparison side-by-side cards → stacked on narrow viewports. Image behavior: dashboard/product screenshots sit on the dark canvas with no shadow at any size; cards maintain 16px radius across breakpoints.

Touch-target record: Primary CTA at 48px height; Ghost CTA at 48px height with 28px horizontal padding; nav items at 36px height with 8px 12px padding within the sticky header; segmented-toggle items at 29px height with 24px horizontal padding.

Treating that table as a recorded span of named widths, not a complete specification of every unlisted control, treating the collapsing strategy and image-behavior lines (screenshots with no shadow at any size, consistent with the flat system; 16px radius across breakpoints) as recorded application rather than a complete layout specification, treating the 48px / 36px / 29px / 16px / 72px figures as surface measurements in this packet rather than universal layout tokens, and treating the touch-target record as a purpose reading of those measurements rather than a complete target-size specification, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Observed (live surfaces, 2026-06-26)

The live strings below are source-stated. Treating the parenthetical characterizations (outcome-framed capability / anti-guesswork positioning / scope/credibility / page title meta) as citation-character of those live strings is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

- "광고 성과 측정, AI로 완성하세요" — hero headline (outcome-framed capability). *(verified live 2026-06-26, airbridge.io/ko)*
- "감이 아닌 데이터를 근거로 의사결정하세요" — section heading (anti-guesswork positioning). *(verified live 2026-06-26)*
- "글로벌 스탠다드에 부합하는 MMP" — eyebrow claim (scope/credibility). *(verified live 2026-06-26)*
- "크로스 플랫폼 성과 측정도 AI로 완성하세요 | Airbridge" — page title meta. *(verified live 2026-06-26)*
- Source HTML comment also records section H2 "사각지대 없는 데이터로 성과를 측정하세요" at 48px / 700 / `-0.72px` / `#fafafa`.
- Control strings from harvested components: "데모 신청하기"; "요금 확인하기"; "자세히 보기"; nav "기능 소개", "솔루션", "인사이트", "가격"; segmented "MMP 플랜" / "딥링크 플랜"; FAQ "MAU(월간 활성 유저)란 무엇인가요?"

Treating the §14 empty/loading/error/success strings as part of the state contract, not extra Observed voice samples, is a derived editorial implementation inference from the verified surfaces; it is not Airbridge-authored or a separately published UI specification.

### Derived editorial voice

The following voice reading, context table, and forbidden-register list are a derived editorial implementation inference from the verified surfaces; they are not Airbridge-authored or a separately published UI specification. They are not the Observed strings above.

The source describes Airbridge's voice as **precise, evidence-driven, and quietly confident** — a measurement product that speaks to marketers as analysts, not as targets for hype. The hero line is read as setting the register: capability stated plainly, outcome-framed, no superlatives. Copy is read as framing value as removing uncertainty, positioning the product as the antidote to guesswork.

| Context | Tone |
|---|---|
| Hero headlines | Outcome-framed, declarative. "광고 성과 측정, AI로 완성하세요." Capable, never hype. |
| Feature labels | Plain and technical. "통합 성과측정", "웹투앱 어트리뷰션", "유저 생애 가치 예측". |
| CTAs | Direct, low-pressure. "데모 신청하기", "요금 확인하기", "자세히 보기". |
| Value claims | Evidence-first, scope-stated. "글로벌 스탠다드에 부합하는 MMP". |
| Pricing / FAQ | Calm and explanatory; decodes jargon. "MAU(월간 활성 유저)란 무엇인가요?". |

**Forbidden register** (source): hype superlatives, fear-based marketing urgency, undefined martech jargon left unexplained, exclamation-heavy promotion. Numbers and scope claims are stated concretely (events, devices, RPM) rather than vaguely.

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

These decisions are unnamed values, not permissions to invent:

- `ease-enter` / `ease-exit` / `ease-standard` cubic-bezier curves
- hover, pressed, and `focus-visible` visual treatments (Primary CTA named Focus ring remains generic Focus, not `focus-visible`)
- loading, error, and success visual treatments on the harvested marketing controls, and the omitted loading/error/success applicability fields on Primary CTA, Ghost / Outline, Compact Primary, and Inline Link; omitted loading/success on Default Input
- Type for Compact Primary, Default Input, and Mint Highlight
- interactive kind and state-applicability map for Dark Feature Card, Light Comparison Card, and Mint Highlight
- motion animation names, transition properties, and any duration beyond the three source tokens — promote only after per-component computed capture of all five kinds; a single named duration is not that gate
