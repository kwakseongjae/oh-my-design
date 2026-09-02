# Mastercard Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Mastercard is a global payments-technology company — not a bank and not a lender — operating one of the world's largest payment networks across 210+ countries, connecting consumers, merchants, banks, governments, and businesses. This contract covers the first-party public surfaces the source names on `https://www.mastercard.com`. Catalog homepage is `https://www.mastercard.com`. Catalog `primary_color` is `#EB001B` (Mastercard Red). YAML `tokens.colors.primary` is `#141413` (Deep Charcoal). Those two hexes stay unmerged.

The source's visible Tier 1 line names `https://www.mastercard.com` as a live production site, verified via live DOM getComputedStyle. The same source's HTML comment records that homepage WebFetch returned HTTP 403, so live-DOM token extraction was not possible, and that neutral scale, button/card/input geometry, and elevation are editorial syntheses consistent with Mastercard's public marketing surfaces, grounded in brand-guideline color/type facts plus standard fintech-marketing layout conventions. YAML grades the token block as derived from the prose (`tokens.extracted` 2026-06-09). Brand colors `#EB001B` (red), `#FF5F00` (orange/overlap), `#F79E1B` (yellow) are the source's canonical interlocking-circles colors (2016/2019 Pentagram mark), confirmed via Mastercard Brand Center / brandcolorcode.com and the task brief. A sibling verification file records live samples that do not match this body's color and family tokens; those sibling-only samples stay in the sidecar and are not promoted as tokens. This contract does not choose between the visible Tier 1 live-DOM sentence and the HTML-comment 403 / editorial-synthesis sentence. Treating `https://www.mastercard.com` as the named surface, keeping catalog `primary_color` `#EB001B` unmerged from `tokens.colors.primary` `#141413`, keeping Brand Center / brandcolorcode.com as color-and-mark evidence rather than as a component UI specification, and refusing to choose between the live-DOM footer sentence and the HTTP 403 editorial-synthesis comment, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

Mastercard is one of the most recognized brands on earth, and its design language is built around a single, indelible asset: the two interlocking circles. Red (`#EB001B`) on the left, yellow-orange (`#F79E1B`) on the right, and a warm orange (`#FF5F00`) where they overlap. That mark — refined to its purest form in the 2016/2019 Pentagram redesign — is the entire visual thesis: two halves coming together to make a connection. The rest of the system is deliberately quiet so the symbol can carry the brand weight. The page itself reads as confident, modern, and institutional-but-warm. Surfaces are predominantly white (`#FFFFFF`) and near-white (`#F7F7F7`), with deep neutral charcoal text (`#1A1A1A` / `#141413`). The red is used sparingly and with intent — it is a brand and accent color, not a UI workhorse painted across every button. Where most fintechs lean on a single saturated brand blue for all interaction, Mastercard reserves its red for moments of emphasis and leans on black/dark CTAs and neutral surfaces for the bulk of the interface. This restraint communicates the brand's positioning: a global payments network that is trustworthy, established, and technologically serious, but human at its core ("Priceless"). The typographic voice is the custom **Mark** typeface (commercially **FF Mark**, an early-geometric sans descended from the European grotesques of the 1920s–30s). It is geometric, open, and friendly without being playful — round bowls, generous apertures, a tall x-height that reads cleanly at small sizes on a payment terminal or a banner ad. The hex values, the 2016/2019 Pentagram date, the Mark / FF Mark name, the `#1A1A1A` / `#141413` pair, and the quoted "Priceless" word are the source's own. Calling the page institutional-but-warm, calling the system deliberately quiet so the symbol can carry the brand weight, calling red not a UI workhorse painted across every button, and contrasting most fintechs' saturated brand blue with Mastercard's dark-led CTAs, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Mastercard began in 1966 as "Interbank" / "Master Charge", a cooperative of banks formed to compete with BankAmericard (later Visa). It became **Mastercard** in 1979 and went public in 2006. The interlocking circles have been the constant. The 1968 mark by Frank Aitken established the overlapping red and yellow/orange discs; the design was refined over decades and brought to its modern, flat, near-perfect form by **Pentagram (Michael Bierut)** in 2016, with a further simplification in 2019 that removed the wordmark entirely from many contexts — a confidence reserved for the most recognized symbols on earth (the brand is identified by the circles alone by ~80%+ of consumers). The two circles represent connection: two parties, two halves, coming together. The overlap — that warm orange — is the value created where they meet. The **"Priceless"** platform (launched 1997) reframed a payments brand around human emotion and experience, one of the most enduring campaigns in advertising history. It anchors the brand's warmth: Mastercard is the enabler of meaningful moments, not the transaction itself. More recently the brand has invested in **sonic branding** (the Mastercard melody/sound), accessibility (Touch Card tactile notches), and inclusive product design — extending the identity beyond the visual. The design language must therefore hold two truths simultaneously: the **institutional trust** of a trillion-dollar global network handling the world's money, and the **human warmth** of "Priceless". The system resolves this by keeping the interface calm, clean, and confident (trust) while reserving the vivid red-yellow-orange mark and emotive imagery for the moments that connect (warmth). The years, Interbank / Master Charge, BankAmericard, Frank Aitken, Pentagram (Michael Bierut), the 2019 wordmark removal, ~80%+, Priceless 1997, sonic branding, Touch Card tactile notches, and the calm-clean-confident / red-yellow-orange resolution sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-to-Priceless narrative as context that does not by itself supply interface tokens, and classifying "the overlap is the value" as the source's own narrative sentence rather than as a published Mastercard UI rule, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a CTA, search control, or confirmation the source records outside its Personas section, is a derived editorial implementation inference from the source record; it is not Mastercard-authored or a separately published UI specification. They do not come from the source's persona section.

- Start from a recorded consumer CTA ("Get started", "Find a card").
- Complete a payment confirmation ("Payment complete.").
- Search the global site/product (Search: global site/product search, leading magnifier).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its figures as fictional archetypes informed by publicly described global-payments user segments, not individual people, so those archetypes are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records at a group level, outside that Personas section, is the Brand Narrative's consumers, merchants, banks, governments, and businesses, and Principles' global, multilingual, all-ages audience on screens from terminals to billboards. Dropping those archetypes rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

- The interlocking-circles mark (`#EB001B` red + `#F79E1B` yellow, `#FF5F00` overlap) as the singular brand anchor
- Mastercard Red (`#EB001B`) used as an accent and brand color, not a universal UI fill
- Custom **Mark** typeface (FF Mark / Mark Pro) — geometric, open, humanist-modern sans
- White and near-white surfaces with deep neutral charcoal text
- Dark/black primary CTAs; red reserved for emphasis and brand moments
- Generous whitespace, large editorial hero imagery, full-bleed photography
- "Priceless" warmth balanced against global-network institutional trust

### Principles

These 8 items are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification. The source's HTML comment records that interpretive claims (e.g., "the overlap is the value", "red is precious") are editorial readings of the design system, not documented Mastercard statements. The numbered stems and UI implications below are those editorial readings, kept as the source wrote them.

1. **The mark carries the brand.** The interface is deliberately quiet so the interlocking circles can be the visual hero. Don't compete with the symbol.
2. **Red is precious.** Mastercard Red is an accent and a brand moment, not a default fill. Overuse devalues it; scarcity gives it power.
3. **Connection over transaction.** The two circles mean two parties meeting. Design should express bringing things together — pairs, overlaps, bridges — not isolated steps.
4. **Trust through restraint.** Clean white surfaces, neutral shadows, confident type. Visual noise reads as risk in a payments context.
5. **Warmth at the moments that matter.** Emotive imagery and the brand gradient appear at human moments (Priceless), not on every utility screen.
6. **Clarity is non-negotiable.** This system touches a global, multilingual, all-ages audience on screens from terminals to billboards. Legibility and plain language win over cleverness.
7. **The overlap is the value.** Where red meets yellow, you get orange — the brand's literal expression that value is created in connection. Use the transition deliberately.
8. **Accessible by default.** Tactile, sonic, and visual identity work together; contrast, touch targets, and clear states are baseline, not afterthoughts.

### Application rules

The source states these as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

- Protect the interlocking-circles mark with full clear space; never crop or distort it
- Use Mastercard Red (`#EB001B`) as an accent and brand moment, not a universal button fill
- Lead with dark (`#141413`) primary CTAs; reserve red for the single hero action
- Pair red and yellow only through the official overlap orange (`#FF5F00`) in gradients
- Use the Mark typeface with its geometric, open letterforms; keep tracking near-neutral
- Use uppercase eyebrows with `0.08em` tracking for section kickers
- Keep surfaces white / near-white with deep charcoal text for institutional clarity

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

- Don't paint red across every interactive element — it dilutes the brand and hurts hierarchy
- Don't place red and yellow text/fills adjacent without the orange transition (clashes)
- Don't use heavy or colored shadows — elevation stays neutral and quiet
- Don't distort, recolor, or add effects to the circles mark
- Don't use bold (700) for body copy — reserved for headings and key numbers
- Don't crowd the logo; respect minimum clear space
- Don't mix in off-brand accent hues; the palette is red/yellow/orange + neutrals + semantics only

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, keeping catalog `primary_color` `#EB001B` unmerged from `tokens.colors.primary` `#141413`, keeping `#1A1A1A` unmerged from `#141413`, keeping `#FFFFFF` `tokens.colors.canvas` unmerged from `tokens.colors.on-primary` (same hex, two jobs), keeping `#141413` `tokens.colors.primary` unmerged from `tokens.colors.foreground` (same hex, two jobs), keeping Error Red `#EB001B` unmerged from `#D11124`, keeping Warning Amber on `#F79E1B` unmerged from Mastercard Yellow's brand job, keeping Info Blue `#1A73E8` off the brand triad, treating Gray 100 (`#F0F0F0`) as a §2 scale writing rather than as a YAML colors key, and treating the Gray 50–900 scale, hairline, border-strong, and overlay scrim as the source HTML-comment's editorial syntheses rather than as live-computed tokens, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification. The hex values and recorded uses are the source's own. Mastercard Brand Center / brandcolorcode.com is cited for the interlocking-circles colors, not as a component UI specification.

**Primary / Brand**

- **Mastercard Red** (`#EB001B`): `tokens.colors.brand`. The left circle. Primary brand color, accent emphasis, key links, brand moments, error/destructive semantics. Pantone 485 C lineage. Catalog `primary_color`.
- **Mastercard Yellow** (`#F79E1B`): `tokens.colors.accent-yellow`. The right circle. Secondary brand color, warmth, highlights, gradients. Pantone 1235 C lineage.
- **Mastercard Orange** (`#FF5F00`): `tokens.colors.accent-orange`. The overlap color where the two circles meet. Used in gradients and as a connective accent between red and yellow.
- **Pure White** (`#FFFFFF`): `tokens.colors.canvas`. Page background, primary card surface. Also `tokens.colors.on-primary`.
- **Deep Charcoal** (`#141413`): `tokens.colors.primary` / `tokens.colors.foreground`. Primary heading and high-emphasis text. Near-black, warm-neutral. Source §1 also writes `#1A1A1A` / `#141413` as the charcoal pair; both writings stay.

**Brand Gradient**

- **Red→Orange→Yellow** (`#EB001B` → `#FF5F00` → `#F79E1B`): The signature brand gradient evoking the circle overlap. Used on hero accents, decorative dividers, and data-viz highlights. Never as body-text color or large flat fills behind paragraphs.

**Semantic**

- **Error Red** (`#EB001B` / `#D11124`): `tokens.colors.error` `#EB001B`. Error states, destructive actions, negative validation. Shares the brand red — context disambiguates. `#D11124` stays on this error writing and is not merged into `tokens.colors.brand`.
- **Success Green** (`#008A00`): `tokens.colors.success`. Confirmations, positive transaction states, completed flows.
- **Warning Amber** (`#F79E1B`): Pending, attention-needed, soft warnings (reuses brand yellow). Same hex as `tokens.colors.accent-yellow`; the jobs stay unmerged.
- **Info Blue** (`#1A73E8`): `tokens.colors.info`. Informational notices, secondary links in dense product UI.

**Neutral Scale** (source HTML comment: editorial synthesis)

- **Gray 50** (`#F7F7F7`): `tokens.colors.surface`. Lightest surface, section backgrounds, alternating rows.
- **Gray 100** (`#F0F0F0`): Card fills, disabled surfaces, subtle separation. Not a YAML color key.
- **Gray 200** (`#E0E0E0`): `tokens.colors.hairline`. Default borders, dividers, input outlines.
- **Gray 300** (`#CCCCCC`): `tokens.colors.border-strong`. Stronger borders, disabled icon fills.
- **Gray 400** (`#999999`): `tokens.colors.placeholder`. Placeholder text, tertiary labels.
- **Gray 500** (`#767676`): `tokens.colors.muted`. Caption text, secondary metadata (AA on white).
- **Gray 600** (`#5A5A5A`): `tokens.colors.body`. Body text, descriptions.
- **Gray 700** (`#333333`): `tokens.colors.primary-hover`. Emphasized body, sub-headings; also Primary (Dark) hover.
- **Gray 900** (`#141413`): Headings, strongest text, dark CTAs.

**Surface & Borders**

- **Border Default**: `#E0E0E0` (gray200). Cards, inputs, dividers.
- **Border Strong**: `#CCCCCC` (gray300). Active/emphasized outlines.
- **Surface Sunken**: `#F7F7F7` (gray50). Page section backgrounds.
- **Overlay Scrim**: `rgba(20,20,19,0.6)`. Modal/sheet backdrops — warm-neutral dark.
- **Brand hover**: `tokens.colors.brand-hover` `#C8001A`.

### Spacing

YAML `tokens.spacing` (unitless steps, kept as the source wrote them, not rewritten as a converted px sheet): `xs` 4, `sm` 8, `md` 12, `base` 16, `lg` 24, `xl` 32, `xxl` 48, `section` 64, `hero` 96.

Source §5 writes a base unit of 8px and a scale of 4, 8, 12, 16, 24, 32, 48, 64, 96px. Section vertical rhythm: 64–96px between major marketing sections. Card internal padding: 24–32px. Those px writings stay beside the unitless YAML keys and are not a replacement for them. `tokens.spacing.base: 16` is not a type size. `tokens.spacing.lg: 24` is not a radius step. `tokens.spacing.hero: 96` is not a type size. Keeping those key paths unmerged from the §5 px writings and from type/radius jobs, and treating the Gray/spacing numbers as the source HTML-comment's editorial syntheses rather than as live-computed tokens, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

### Shape

YAML `tokens.rounded`: `sm` 4, `md` 8, `lg` 16, `full` 9999.

Source §5 Border Radius Scale: Compact (4px) badges, tags-square, small chips; Standard (8px) inputs, product buttons, small cards; Comfortable (12px) standard cards; Large (16px) featured cards, modals, image cards; Pill (24px / 9999px) marketing CTAs, search, toggles, filter chips.

YAML has no `12` radius key. Comfortable 12px is a §5 / card local geometry and is not merged into `tokens.rounded.lg: 16`. YAML `full: 9999` is not merged from §4 Search `24px (pill)` or from Neutral Tag `16px (pill)`. Button radius 24px (pill) on marketing and 8px in product UI both stay; YAML `button-primary.radius` is `24px` only. Keeping `4` / `8` / `16` / `9999` on their YAML keys, keeping 12px cards and 24px marketing pills as local geometry, and keeping YAML search `9999` unmerged from body Search `24px (pill)`, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat (0) | No shadow | Page background, sunken sections |
| Subtle (1) | `0 1px 3px rgba(0,0,0,0.08)` | Standard cards, list separation. YAML `tokens.shadow.subtle`. |
| Raised (2) | `0 2px 8px rgba(0,0,0,0.08)` | Image cards, hover-lifted tiles. YAML `tokens.shadow.raised`. |
| Elevated (3) | `0 4px 16px rgba(0,0,0,0.10)` | Featured cards, dropdowns, popovers. YAML `tokens.shadow.elevated`. |
| Overlay (4) | `0 16px 48px rgba(0,0,0,0.20)` | Modals, dialogs, command menus. YAML `tokens.shadow.overlay`. |

**Shadow Philosophy**: Shadows are neutral, single-layer, low-opacity black — quiet by design. Depth communicates hierarchy without drama; the brand mark and color provide the visual energy, so elevation stays understated. Cards on marketing pages often rely on a 1px `#E0E0E0` border instead of shadow for crisp, flat modernity.

**Blur Effects**

- Sticky header gains a subtle backdrop blur (`backdrop-filter: blur(8px)`) with `rgba(255,255,255,0.85)` on scroll.
- Modal backdrops are a flat scrim, not blurred, keeping focus sharp.

The shadow strings, the 1px `#E0E0E0` border alternative, `backdrop-filter: blur(8px)`, and `rgba(255,255,255,0.85)` are the source's own. Reading that philosophy as the source HTML-comment's editorial synthesis rather than as a live-computed elevation system, and keeping modal backdrops a flat scrim, not blurred, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

### Motion

Source-stated durations. T1-3 keeps duration and signature motion; only unattributed curves are omitted as promoted tokens. Treating the duration table, easing names, Use pairings, signature motions, and reduced-motion line as source-stated rather than computed CSS, and treating the four cubic-bezier writings as unattributed rather than as live-computed tokens, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | State flips where animation adds nothing |
| `motion-fast` | 150ms | Hover, focus, button press, small reveals |
| `motion-standard` | 250ms | Default — dropdowns, card expand, tab switch |
| `motion-emphasis` | 400ms | Hero reveals, success confirmations, modal entrance |
| `motion-page` | 350ms | Route / full-screen transitions |

Source-stated easing names. Exact curves are omitted as unattributed (three match the legacy spec-template examples; `ease-brand` is source-stated but not live-computed). Names and Use writings stay:

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-enter` example `cubic-bezier(0.0, 0.0, 0.2, 1)`) | Elements appearing — modals, toasts, menus |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example `cubic-bezier(0.4, 0.0, 1, 1)`) | Elements leaving — dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-standard` example `cubic-bezier(0.4, 0.0, 0.2, 1)`) | Two-way transitions — accordions, tabs |
| `ease-brand` | omitted (unattributed cubic-bezier; source-stated name only; `cubic-bezier(0.33, 1, 0.68, 1)`) | Signature brand moments — circle reveals, gradient sweeps |

**Signature motions** (source-stated; easing-name pairings kept even where the curve value is omitted):

1. **Circle convergence.** The brand's hero animation: the two circles slide toward each other and overlap, the orange intersection blooming as they meet (`motion-emphasis / ease-brand`). It literally animates "connection". Reserved for brand/loading moments, never decorative UI chrome.
2. **Gradient sweep.** On key reveals and progress, a subtle red→orange→yellow gradient sweep animates across a divider or bar (`motion-standard`). Used sparingly as a brand accent.
3. **Confirmation bloom.** Success checkmarks draw on over `motion-emphasis` with `ease-brand`, a confident but unfussy settle. Money moved is a clear screen state, calmly delivered.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; the circle convergence and gradient sweeps are replaced by static end-states. The product stays fully usable.

Exact cubic-bezier curves are unattributed and remain omitted rather than promoted. Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded, per component, computed evidence of all five kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Mastercard commissioned a customized cut of FF Mark as its corporate typeface ("Mastercard Mark"). Referenced in brand guidelines as the corporate type. FF Mark is an early-geometric sans (Hannes von Döhren / Christoph Koeberlin, 2013) chosen for its open, geometric warmth — circular `o`, `e`, `c` echoing the brand's circular mark. |
| Live computed surface-use | The source's visible Tier 1 line claims live DOM getComputedStyle on `https://www.mastercard.com`. The HTML comment records homepage WebFetch returned HTTP 403, so live-DOM token extraction was not possible. This row does not choose between those two sentences. |
| Sibling live samples | Held in the sidecar. Not promoted as the UI family or canvas here. |
| Official distributed asset | No Mastercard-exclusive publicly redistributable type family was verified in the source. Keep the family metadata. |
| Fallback / system stack | `"Helvetica Neue", Helvetica, Arial, sans-serif` and `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif` are fallbacks, not the brand face. |
| Monospace | `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace` for data/code. YAML `tokens.typography.family.mono`: `SF Mono`. |
| License | FF Mark / Mark Pro is a commercial typeface. Do not present a system font as Mark. |

Reading those rows as this record's evidence-class table rather than as a published Mastercard type specimen, keeping Brand Center as color-and-mark evidence rather than as a loadable Mark file, and refusing to present Helvetica Neue or a system stack as Mark, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

### Family

- **Primary:** `"Mark", "FF Mark", "MarkPro", "Helvetica Neue", Helvetica, Arial, sans-serif`. YAML `tokens.typography.family.sans`: `Mark`.
- **Fallback system stack:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Monospace** (data/code): `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`

Do not replace Mark with a different claimed family, and do not present a system or fallback stack as Mark. Keeping Mark / FF Mark / MarkPro as the named UI family, keeping the two fallback stacks as fallbacks, and keeping SF Mono on data/code rather than on UI copy, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

### Type roles

YAML writes unitless `lineHeight` `1.14`, `1.20`, `1.25`, `1.33`, `1.40`, `1.44`, `1.63`, `1.57`, `1.50`, `1.0`. Source §3 writes the matching px line heights `64px (1.14)`, `48px (1.20)`, `40px (1.25)`, `32px (1.33)`, `28px (1.40)`, `26px (1.44)`, `26px (1.63)`, `22px (1.57)`, `18px (1.50)`, `16px (1.33)`, and button `1.0`. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px. YAML tracking `-0.02`, `-0.01`, `0.01`, `0.08` stays beside §3 `-0.02em`, `-0.01em`, `0.01em`, `0.08em`. YAML sizes are recorded without a required px suffix; §3 writes `56px` and so on. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping unitless YAML line heights unconverted, keeping YAML `heading-2` size `24` off `tokens.spacing.lg: 24`, keeping YAML `body-large` size `16` off `tokens.spacing.base: 16`, keeping Display Hero `56` off a spacing step, and keeping the §9 hero eyebrow in `#EB001B` on this eyebrow role as a §9-only value rather than as a YAML color key, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---|---|---|
| Display Hero | Mark | 56 / 56px | 700 | 1.14 / 64px (1.14) | -0.02 / -0.02em | Marketing hero headlines |
| Display Large | Mark | 40 / 40px | 700 | 1.20 / 48px (1.20) | -0.01 / -0.01em | Page titles, key statements |
| Heading 1 | Mark | 32 / 32px | 700 | 1.25 / 40px (1.25) | -0.01 / -0.01em | Section headers |
| Heading 2 | Mark | 24 / 24px | 600 | 1.33 / 32px (1.33) | normal | Sub-sections, card headers |
| Heading 3 | Mark | 20 / 20px | 600 | 1.40 / 28px (1.40) | normal | Feature titles, list headers |
| Subtitle | Mark | 18 / 18px | 500 | 1.44 / 26px (1.44) | normal | Lead paragraphs, intros |
| Body Large | Mark | 16 / 16px | 400 | 1.63 / 26px (1.63) | normal | Primary reading text |
| Body | Mark | 14 / 14px | 400 | 1.57 / 22px (1.57) | normal | Standard UI text |
| Caption | Mark | 12 / 12px | 400 | 1.50 / 18px (1.50) | 0.01 / 0.01em | Legal, fine print, metadata |
| Button Label | Mark | 16 / 16px | 600 | 1.0 | 0.01 / 0.01em | CTA labels |
| Eyebrow / Overline | Mark | 12 / 12px | 700 | 1.33 / 16px (1.33) | 0.08 / 0.08em | UPPERCASE section kickers |

§9 example component prompt records a hero eyebrow in `#EB001B` (12px/700 uppercase `0.08em`). That color is a §9-only value and is kept on this eyebrow role; it is not a YAML color key.

**Type principles** (source §3). Geometric clarity — Mark's circular forms echo the brand mark. Keep tracking near-neutral; only tighten large display sizes. Three working weights: 400 (body), 600 (emphasis/buttons), 700 (headings). Use 500 sparingly for lead paragraphs. Uppercase eyebrows: section kickers and overlines are uppercase with generous `0.08em` tracking — a recurring Mastercard editorial device. Restraint with size jumps: large, confident display sizes on marketing; tighter, denser scale in product/dashboard UI. Number legibility: transaction amounts and data render at 600+ weight; tabular figures preferred in tables and statements. Treating geometric-clarity / three-working-weights / uppercase-eyebrows / restraint-with-size-jumps / number-legibility as source-stated type rules rather than as a published Mastercard type specification is a derived editorial implementation inference from the source record; it is not Mastercard-authored or a separately published UI specification.

### Assets

Catalog identity points at `logo.type: simpleicons`, `slug: mastercard`. That pointer is a third-party icon-set entry, not a Mastercard-distributed mark file. The interlocking-circles mark (`#EB001B` left, `#F79E1B` right, `#FF5F00` overlap) is the singular brand anchor. Protect it with full clear space; minimum clear space = height of one circle on all sides. Never crop, distort, recolor, or add effects to the circles mark. Treating the simpleicons slug as identity metadata rather than a portable first-party asset file is a derived editorial implementation inference from the source record; it is not Mastercard-authored or a separately published UI specification.

Hero photography is full-bleed, art-directed per breakpoint. Partner/bank/card-art logos sized consistently (24–40px) within rows. The circles mark scales but never below its legibility minimum; clear space preserved.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Source §14 state treatments, preserved in this same file (catalog graph is not adopted; nothing is delegated). Declared interactive components still declare Core §4.4 applicability by control meaning. `default` and `focus-visible` apply. Pointer-web hover applies wherever a pointer control exists. Loading, error, and success follow the control's product role, not its primitive kind: a control that commits an operation can be pending, can fail, and can confirm, while a destination action, tab, or toggle reports none of those itself. Where a state applies by role, the visual treatment from the table below is used when the source recorded it; otherwise the state stays applicable and only its visual treatment is omitted. Absence of an observation is never a `not-applicable` reason. Source §14 Focus (keyboard) is recorded in the capture table below (`2px #141413` outline + 2px offset ring; meets visible-focus accessibility; on brand surfaces, focus ring is `#EB001B`). That is a generic keyboard-focus capture. `focus-visible` stays applicable by control meaning; visual treatment on `focus-visible` rows is omitted because the source never names `focus-visible` as a state token (B1). Every interactive-kind verdict, every applicability verdict, and the omission of kind and a state-applicability map for non-interactive badges, the stat card, and the alert container, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification. This is not a complete state-coverage claim.

| State | Treatment |
|---|---|
| **Empty (no data)** | Centered single line of `#5A5A5A` body text explaining why, plus one primary action (dark CTA). Optional small line-art icon, never a heavy illustration. |
| **Loading (first paint)** | Skeleton blocks at `#F0F0F0` matching final layout. Optional subtle brand-gradient shimmer sweep. Amounts render as `—` until resolved. |
| **Loading (action)** | Inline spinner in the button replacing the label; button width preserved; prevents double-submit. Spinner in `#FFFFFF` on dark CTA. |
| **Error (inline field)** | 2px `#EB001B` border on the field, `#EB001B` 12px helper text below, one specific actionable sentence. |
| **Error (page/alert)** | Inline alert: `rgba(235,0,27,0.08)` bg, 4px left border `#EB001B`, leading icon, 14px `#333333` text, optional retry CTA. |
| **Success (confirmation)** | `#008A00` check, brief affirmative copy ("Payment complete"), exact amount in 40px/700 `#141413`, single dark CTA to continue. |
| **Success (inline flash)** | Brief `rgba(0,138,0,0.10)` background flash behind the updated element, ~300ms fade. |
| **Warning / pending** | Amber `#F79E1B` accent, `rgba(247,158,27,0.12)` bg alert, clear "what happens next" copy. |
| **Disabled** | `#CCCCCC` bg, `#767676` text on buttons; inputs keep `#CCCCCC` border at reduced opacity. Geometry stable. |
| **Focus (keyboard)** | 2px `#141413` outline + 2px offset ring; meets visible-focus accessibility. On brand surfaces, focus ring is `#EB001B`. |
| **Hover (card)** | Lift to `0 2px 8px rgba(0,0,0,0.08)` + 1px translate-up; cursor pointer; link color deepens to `#C8001A`. |

Mastercard's CTA system leads with a **dark (near-black) primary** and reserves red for brand-accent moments. Default height 48px; pill or lightly-rounded geometry depending on surface.

### Primary (Dark)

- Role: Primary CTA across most surfaces ("Get started", "Learn more")
- Primitive type: `button`
- Kind: interactive
- Token-set path: `tokens.components.button-primary`
- Background: `#141413` (token-set `bg`)
- Text: `#FFFFFF` (token-set `fg`)
- Border: none
- Radius: token-set `24px`; source §4 also records 24px (pill) on marketing; 8px in product UI. Both stay.
- Height: `48px`
- Padding: `0 28px`
- Font: `16px / 600` (token-set `font`); Mark
- Hover: `#333333`
- Active/Pressed: `#000000`
- Disabled: `#CCCCCC` bg, `#767676` text (token-set `disabled`: `#CCCCCC bg, #767676 text`)
- Token-set use: `Primary CTA across most surfaces`

**Button on Dark Surface** (source §4 variant, not a YAML component): Background `#FFFFFF`; Text `#141413`; Radius 24px / 8px; Use: CTA placed over photography or dark hero blocks.

Size scale (height · font · padding · radius): `small` 36px · 14px · 0 20px · 18px; `medium` 44px · 15px · 0 24px · 22px; `large` (default) 48px · 16px · 0 28px · 24px; `xlarge` 56px · 18px · 0 36px · 28px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the dark primary CTA |
| hover | applicable | Pointer-web button; treatment `#333333` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; treatment `#CCCCCC` bg, `#767676` text |
| loading | applicable | Source records Loading (action) on the dark CTA: inline spinner replacing the label; button width preserved; prevents double-submit; spinner `#FFFFFF` on dark CTA |
| error | applicable | A committing CTA can fail; paint-on-button omitted (page/alert treatment is recorded separately) |
| success | applicable | A committing CTA can confirm; paint-on-button omitted (page confirmation is recorded separately) |

### Primary (Red / Brand)

- Role: High-emphasis brand-forward CTA, campaign moments, single hero action
- Primitive type: `button`
- Kind: interactive
- Token-set path: `tokens.components.button-red`
- Background: `#EB001B` (token-set `bg`)
- Text: `#FFFFFF` (token-set `fg`)
- Border: none
- Radius: token-set `24px`; source §4 `24px / 8px`
- Height: `48px`
- Padding: `0 28px`
- Font: `16px / 600`
- Hover: `#C8001A`
- Active: `#A30016`
- Token-set use: `High-emphasis brand-forward CTA, hero action`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the red brand CTA |
| hover | applicable | Pointer-web button; treatment `#C8001A` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted on this variant (disabled recipe is recorded on the dark primary) |
| loading | applicable | A single hero action can commit; spinner treatment is recorded for the dark CTA, not copied onto red |
| error | applicable | A committing CTA can fail; paint-on-button omitted |
| success | applicable | A committing CTA can confirm; paint-on-button omitted |

### Secondary (Outline)

- Role: Secondary action paired with a primary CTA
- Primitive type: `button`
- Kind: interactive
- Token-set path: `tokens.components.button-secondary`
- Background: transparent (token-set `bg`)
- Text: `#141413` (token-set `fg`)
- Border: `1.5px solid #141413`
- Radius: token-set `24px`; source §4 `24px / 8px`
- Height: `48px`
- Padding: `0 28px`
- Font: `16px / 600`
- Hover: bg `#F7F7F7` (token-set `hover`: `#F7F7F7 bg`)
- Token-set use: `Secondary action paired with primary`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the outline secondary |
| hover | applicable | Pointer-web button; treatment bg `#F7F7F7` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted on this variant |
| loading | applicable | A paired action can commit; visual treatment omitted |
| error | applicable | A paired action can fail; paint-on-button omitted |
| success | applicable | A paired action can confirm; paint-on-button omitted |

### Tertiary (Text / Link)

- Role: Inline navigation, "Read more", low-emphasis actions
- Primitive type: `button`
- Kind: interactive
- Token-set path: `tokens.components.button-tertiary`
- Background: none (token-set `bg`)
- Text: `#EB001B` (token-set `fg`)
- Border: none
- Font: `16px / 600` / Mark, often with trailing chevron `›`
- Hover: underline + `#C8001A` (token-set `hover`: `underline + #C8001A`)
- Token-set use: `Inline navigation, Read more, low-emphasis`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the tertiary text link |
| hover | applicable | Pointer-web link; treatment underline + `#C8001A` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A text action can be unavailable; visual treatment omitted |
| loading | not-applicable | Inline navigation / "Read more" is a destination link; it commits no operation of its own that could be pending |
| error | not-applicable | The same destination role; a destination that fails to open reports that on the destination, not on this control |
| success | not-applicable | The same destination role; arriving at the destination is the outcome itself |

### Text Field

- Role: Standard form input
- Primitive type: `input`
- Kind: interactive
- Token-set path: `tokens.components.input`
- Background: `#FFFFFF` (token-set `bg`)
- Text: `#141413` (token-set `fg`)
- Border: `1px solid #CCCCCC`
- Radius: `8px`
- Padding: `14px 16px`
- Font: `16px / 400` / Mark
- Placeholder: `#999999`
- Label: 14px / 600 / `#333333`, above the field
- Focus: border 2px `#141413` (or `#EB001B` on brand surfaces) + subtle outer ring (token-set `focus`: `2px #141413 border + outer ring`)
- Token-set use: `Standard form input`

**Text Field (error)** — YAML `tokens.components.input-error` (primitive type `input`), kept as this field's error record and not merged into a generic Ink role: Border `2px solid #EB001B`; Helper text `#EB001B` 12px below field (token-set `font`: `12px / 400 #EB001B helper`); Use: Validation failure — paired with specific, actionable message (token-set use: `Validation failure`).

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the standard form input |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; `#CCCCCC` border at reduced opacity; geometry stable |
| loading | applicable | A form field can wait on async validation; visual treatment omitted |
| error | applicable | Form field; treatment from input-error / Error (inline field) |
| success | applicable | A form field can confirm validation; visual treatment omitted |

### Select / Dropdown

- Role: Country/currency selectors, filters
- Kind: interactive
- Anatomy: same base as text field, trailing chevron `#5A5A5A`
- Radius: 8px, 48px height
- Not a YAML component; source §4 only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as Select / Dropdown |
| hover | applicable | Pointer-web select; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A selector can be unavailable; visual treatment omitted |
| loading | applicable | Options can load asynchronously; visual treatment omitted |
| error | applicable | A required selector can fail validation; visual treatment omitted |
| success | not-applicable | A choice control confirms no separate completion of its own |

### Search

- Role: Global site/product search, leading magnifier
- Primitive type: `input`
- Kind: interactive
- Token-set path: `tokens.components.search`
- Background: `#F7F7F7` (token-set `bg`)
- Border: token-set `1px solid transparent`; focus `#CCCCCC` border. Source §4: Border 1px solid transparent (border `#CCCCCC` on focus). Token-set `focus`: `#CCCCCC border`
- Radius: token-set `9999px`; source §4 `24px (pill)`. Both stay unmerged.
- Leading magnifier icon `#767676`
- Token-set use: `Global site/product search, leading magnifier`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as global site/product search |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A search field can be unavailable; visual treatment omitted |
| loading | applicable | Search can be pending; visual treatment omitted |
| error | applicable | Search can fail; visual treatment omitted |
| success | not-applicable | Returning results is the outcome itself; this field confirms no separate completion |

### Standard Card

- Role: Content modules, feature tiles, product cards
- Primitive type: `card`
- Kind: interactive
- Token-set path: `tokens.components.card`
- Background: `#FFFFFF` (token-set `bg`)
- Border: `1px solid #E0E0E0`
- Radius: `12px`
- Padding: `24px`
- Shadow: `0 1px 3px rgba(0,0,0,0.08)`
- Token-set use: `Content modules, feature tiles`
- Hover: Lift to `0 2px 8px rgba(0,0,0,0.08)` + 1px translate-up; cursor pointer; link color deepens to `#C8001A`

§9 feature-card prompt records Title 20px/600 `#141413`, body 14px/400 `#5A5A5A`, tertiary link in `#EB001B` 16px/600 with trailing chevron. Those values sit on this card as §9-only copy and already-declared type roles. Keeping those §9-only feature-card writings on this card rather than dropping them or merging them into a YAML color key is a derived editorial implementation inference from the source record; it is not Mastercard-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the standard card |
| hover | applicable | Pointer-web tile; treatment from Hover (card) |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tile can be unavailable; visual treatment omitted |
| loading | not-applicable | Feature tiles / product cards are destination modules; they commit no operation of their own that could be pending |
| error | not-applicable | The same destination role |
| success | not-applicable | The same destination role |

### Elevated / Featured Card

- Role: Promotional / hero cards, key offers
- Primitive type: `card`
- Kind: interactive
- Token-set path: `tokens.components.card-elevated`
- Background: `#FFFFFF` (token-set `bg`)
- Border: none
- Radius: `16px`
- Padding: `32px`
- Shadow: `0 4px 16px rgba(0,0,0,0.10)`
- Token-set use: `Promotional / hero cards`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the elevated / featured card |
| hover | applicable | Pointer-web tile; treatment from Hover (card) |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A promotional tile can be unavailable; visual treatment omitted |
| loading | not-applicable | Promotional / hero cards are destination modules; they commit no operation of their own |
| error | not-applicable | The same destination role |
| success | not-applicable | The same destination role |

### Image Card

- Role: Editorial / story cards with full-bleed top imagery
- Kind: interactive
- Background: `#FFFFFF`
- Border: none
- Radius: 16px (image fills top, content below)
- Shadow: `0 2px 8px rgba(0,0,0,0.08)`
- Not a YAML component; source §4 only

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the image / story card |
| hover | applicable | Pointer-web tile; treatment from Hover (card) |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A story tile can be unavailable; visual treatment omitted |
| loading | not-applicable | Editorial / story cards are destination modules; they commit no operation of their own |
| error | not-applicable | The same destination role |
| success | not-applicable | The same destination role |

### Stat / Data Card

- Role: Metrics, data highlights — large number 40px / 700
- Primitive type: `card`
- Kind: non-interactive
- Reason: Displays metrics; the source records no control role, so kind and a state-applicability map are omitted rather than invented
- Token-set path: `tokens.components.card-stat`
- Background: `#F7F7F7` (token-set `bg`)
- Border: none
- Radius: `12px`
- Padding: `24px`
- Accent: brand-gradient top bar (`#EB001B`→`#FF5F00`→`#F79E1B`) or red figure
- Token-set use: `Metrics, data highlights — number 40px / 700, brand-gradient top bar`
- §9 stat-card prompt also records label 14px/400 `#767676` uppercase eyebrow above

### Brand Badge

- Role: "NEW", "FEATURED"
- Primitive type: `badge`
- Kind: non-interactive
- Reason: Status label; the source records no control role
- Token-set path: `tokens.components.badge-brand`
- Background: `#EB001B` (token-set `bg`)
- Text: `#FFFFFF` (token-set `fg`)
- Radius: `4px`
- Padding: `4px 8px`
- Font: `12px / 700` / Mark, uppercase, `0.04em` tracking
- Token-set use: `NEW, FEATURED uppercase 0.04em`

### Neutral Tag

- Role: Category, filter chips
- Primitive type: `badge`
- Kind: interactive
- Token-set path: `tokens.components.badge-neutral`
- Background: `#F0F0F0` (token-set `bg`)
- Text: `#333333` (token-set `fg`)
- Radius: token-set `9999px`; source §4 `16px (pill)`. Both stay unmerged.
- Padding: `4px 12px`
- Font: `13px / 500` / Mark
- Token-set use: `Category, filter chips`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as category / filter chips |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter chip can be unavailable; visual treatment omitted |
| loading | not-applicable | A filter chip toggles a facet; it commits no async operation of its own that could be pending |
| error | not-applicable | The same toggle-facet role |
| success | not-applicable | The same toggle-facet role |

### Success Badge

- Role: "Approved", "Completed"
- Primitive type: `badge`
- Kind: non-interactive
- Reason: Status label; the source records no control role
- Token-set path: `tokens.components.badge-success`
- Background: `rgba(0,138,0,0.12)` (token-set `bg`)
- Text: `#008A00` (token-set `fg`)
- Radius: `4px`
- Font: `12px / 700` / Mark
- Token-set use: `Approved, Completed`

### Underline Tabs

- Role: Section navigation within a page
- Primitive type: `tab`
- Kind: interactive
- Token-set path: `tokens.components.tab`
- Container border-bottom: 1px `#E0E0E0`
- Inactive: `#5A5A5A`, 16px / 500 (token-set `fg` / `font`)
- Active: `#141413`, 16px / 600, 3px underline in `#EB001B` (token-set `active`: `#141413 16px / 600, 3px bottom border #EB001B`)
- Token-set use: `Section navigation within a page`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as underline tabs |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects a panel; it commits no operation of its own that could be pending |
| error | not-applicable | The same panel-select role |
| success | not-applicable | The same panel-select role |

### Inline Alert

- Role: Form-level and page-level messaging
- Primitive type: `toast`
- Kind: non-interactive
- Reason: Messaging container; a nested retry CTA is a button, not this container
- Token-set path: `tokens.components.alert`
- Background: token-set `#F7F7F7`; source §4 also `rgba(235,0,27,0.08)` (error) / `rgba(0,138,0,0.10)` (success)
- Leading icon in semantic color, left border 4px in semantic color (token-set `border`: `4px left semantic color`)
- Radius: `8px`
- Padding: `16px`
- Font: `14px / 400 #333333`
- Token-set use: `Form-level and page-level messaging`

### Modal

- Role: Confirmations, focused tasks
- Primitive type: `dialog`
- Kind: interactive
- Token-set path: `tokens.components.dialog`
- Background: `#FFFFFF` (token-set `bg`)
- Radius: `16px`
- Padding: `32px`
- Shadow: `0 16px 48px rgba(0,0,0,0.20)`
- Backdrop: `rgba(20,20,19,0.6)` (token-set `use` also names this backdrop)
- Title 24px / 700, body 16px / 400, actions right-aligned
- Token-set use: `Confirmations, focused tasks; backdrop rgba(20,20,19,0.6)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the modal |
| hover | applicable | Pointer-web dialog; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A confirmation can be unavailable; visual treatment omitted |
| loading | applicable | Confirmations and focused tasks can be pending; visual treatment omitted |
| error | applicable | A confirmation can fail; visual treatment omitted |
| success | applicable | A confirmation can complete; visual treatment omitted |

### Switch

- Role: Settings, preferences
- Primitive type: `toggle`
- Kind: interactive
- Token-set path: `tokens.components.toggle`
- On: `#141413` track (or `#008A00` for active/enabled semantics). Token-set `bg`: `#CCCCCC track off, #141413 track on`
- Off: `#CCCCCC` track
- Thumb: `#FFFFFF` 20px circle, `0 1px 2px rgba(0,0,0,0.2)`
- Radius: pill (token-set `9999px`)
- Token-set use: `Settings, preferences; thumb #FFFFFF 20px`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Recorded as the switch |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A setting can be unavailable; visual treatment omitted |
| loading | not-applicable | A switch toggles a preference; it commits no separate async operation of its own that this control would report as pending |
| error | not-applicable | The same preference-toggle role |
| success | not-applicable | The same preference-toggle role |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The source states these layout rules. Treating the max-width, 12-column grid, marketing full-bleed, mark clear-space, editorial-versus-product-density split, and the breakpoint table as source-stated rather than as a live-computed responsive harvest, are a derived editorial implementation inference from the source record; they are not Mastercard-authored or a separately published UI specification.

### Spacing System

- Base unit: 8px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Section vertical rhythm: 64–96px between major marketing sections
- Card internal padding: 24–32px

### Grid & Container

- Max content width: 1280px, centered
- 12-column grid, 24px gutters on desktop
- Horizontal page margin: 24px mobile, 48px+ desktop
- Marketing sections frequently full-bleed with inner constrained content

### Whitespace Philosophy

- **Let the mark breathe**: The logo and brand moments are surrounded by generous clear space (minimum clear space = height of one circle on all sides).
- **Editorial generosity**: Marketing pages use large hero whitespace and confident imagery — premium, uncluttered.
- **Product density**: Dashboards and statements tighten to 8–16px gaps for scannable data.

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, 24px margins, stacked CTAs, hamburger nav |
| Tablet | 640–1024px | 2-column grids, condensed nav |
| Desktop | 1024–1280px | Full 12-col grid, mega-menu nav |
| Wide | >1280px | Centered 1280px container, expanded hero imagery |

### Touch Targets

- Buttons: minimum 44px height on touch
- Nav/list rows: minimum 48px
- Icon buttons: 44×44px hit area

### Collapsing Strategy

- Desktop mega-menu collapses to a full-screen mobile drawer
- Multi-column card grids reflow 3 → 2 → 1
- Side-by-side hero (text + image) stacks vertically on mobile
- Sticky bottom CTA bar on key conversion flows (mobile)

### Image Behavior

- Hero photography is full-bleed, art-directed per breakpoint
- Partner/bank/card-art logos sized consistently (24–40px) within rows
- The circles mark scales but never below its legibility minimum; clear space preserved

<!-- design-md:section content-locales -->
## 6. Content & Locales

Mastercard's voice is confident, human, and optimistic — the "Priceless" sensibility. It speaks to a global audience as a trusted enabler of connection and commerce, never as a faceless processor. Sentences are clear and active; jargon ("interchange", "tokenization") is reserved for B2B/developer contexts and explained when used. Marketing leans aspirational and emotive; product UI is precise and reassuring. The quoted campaign lines, CTA verbs, and forbidden-pattern words are the source's own issued strings, kept byte-exact. Treating the voice table and the forbidden-pattern paragraph as source-stated register rather than as a published Mastercard microcopy specification is a derived editorial implementation inference from the source record; it is not Mastercard-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Hero / campaign | Aspirational, human, short. "Start something priceless." "There are some things money can't buy." |
| CTAs | Action-forward, plain verbs. "Get started", "Learn more", "Find a card", "Contact us". |
| Product / dashboard | Precise, calm, reassuring. States outcomes plainly. |
| Success messages | Affirmative, brief. "Payment complete." "You're all set." |
| Error messages | Specific, blameless, actionable. Never just "Something went wrong." |
| Security / trust | Confident and concrete — Mastercard leans on its network scale and protection guarantees. |
| Legal / disclosure | Formal, plain-English regulatory tone. |

**Forbidden patterns.** Avoid hype clichés ("revolutionary", "game-changing"), fear-based security messaging, and cold processor-speak in consumer contexts. The brand sells connection and possibility, not anxiety.

Principle 6 records a global, multilingual, all-ages audience. No locale-specific number, date, address, or script contract is named beyond that, so none is invented. Leaving those locale rules unnamed rather than synthesizing a number/date/address/script contract is a derived editorial implementation inference from the source record; it is not Mastercard-authored or a separately published UI specification.

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

- exact cubic-bezier values for `ease-enter` / `ease-exit` / `ease-standard` / `ease-brand` (unattributed; names and Use writings kept; source writings `cubic-bezier(0.0, 0.0, 0.2, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.4, 0.0, 0.2, 1)`, `cubic-bezier(0.33, 1, 0.68, 1)`)
- live-DOM computed harvest of `https://www.mastercard.com` as a closed token sheet (visible Tier 1 live-DOM sentence and HTML-comment HTTP 403 / editorial-synthesis sentence remain in conflict)
- `focus-visible` visual treatments (source §14 Focus (keyboard) is a generic keyboard-focus capture, not that evidence)
- paint-on-button error/success treatments for Primary (Dark), Primary (Red), and Secondary
- loading visual treatment on Primary (Red) (spinner recipe is recorded for the dark CTA)
- Select / Search / Text Field loading and Text Field success visual treatments
- Neutral Tag hover/disabled visual treatments
- Modal loading/error/success visual treatments
- Switch hover/disabled visual treatments
- a public redistribution license for Mark / FF Mark
- motion promotion beyond the duration table, easing names, signature motions, and reduced-motion line — promote only after per-component computed capture of all five kinds: transition properties, animation name, duration, easing, and reduced-motion behavior; official documentation of a single curve or duration is not that gate
