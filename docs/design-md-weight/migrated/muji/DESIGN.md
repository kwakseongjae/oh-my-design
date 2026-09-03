# MUJI Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

MUJI — *Mujirushi Ryohin* (無印良品), "no-brand quality goods" — is the catalog identity. Catalog homepage identity is `https://www.muji.com`. Catalog `primary_color` is `#7f0019`. This contract covers the first-party web chrome the source records from muji.com. Token-set path `tokens.source` is `prose-derived`. Every color, type, geometry, elevation, and component value below stays attached to the muji.com writing that established it. A regional-site footer band the source names separately is not a second catalog homepage. Treating that muji.com web chrome as this contract's token surface, keeping catalog `primary_color` `#7f0019` off YAML `tokens.colors.primary` `#333333`, keeping `prose-derived` as the token-set source class rather than as a published specification, keeping every value attached to the writing that established it, and keeping a regional-site footer band the source names separately off a second catalog homepage, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

The source records a near-white canvas (`#ffffff` / `#f7f7f7`) with quiet near-black text (`#333333`) and exactly one chromatic note in the whole system — the signature MUJI maroon (`#7f0019`), reserved almost entirely for the logo plate and a few load-bearing accents. Product photography sits on white with generous margins. Latin chrome is set in **Helvetica Neue**; Japanese chrome is a clean gothic (ゴシック). Art director **Kenya Hara** (since 2001) frames this as *emptiness* (空 / 無). The hex values, the two families, the 2001 art-direction date, and the 空 / 無 pairing are the source's own. Whitespace is not "negative space" to be filled; it is the primary design material. Readings of that layer as a well-lit empty room, as restraint taken to the level of doctrine, as typefaces chosen to vanish, as whitespace as the primary design material rather than leftover space, and as the website as the digital extension of the no-brand thesis, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. MUJI launched in **December 1980** as a 40-item private label inside the **Seiyu** supermarket chain, not as a standalone company. Japan's post-bubble consumers were beginning to ask whether they were paying for objects or for the packaging and advertising wrapped around them. MUJI's founding answer — encoded in the name *無印良品*, "no-mark quality goods" — was to strip the brand premium out entirely: remove the logo, remove the decorative packaging, simplify the production process, and pass the honesty on as both lower price and higher trust. The first slogan, *「わけあって、安い」* ("Lower priced for a reason"), made the logic explicit: cheaper *because* of deliberate choices, not despite them. The visual program matured under art director **Kenya Hara**, who joined in 2001 and articulated the concept of **emptiness** (空 / 無) as distinct from minimalism. In a 2017 conversation with *Dezeen*, Hara drew the line sharply: minimalism is a Western system for reducing elements to their essential form; emptiness is a *prior* state — a vessel open enough that the user determines what an object means. A MUJI product, like a MUJI page, does not present a finished argument; it presents an open container. This is why the design refuses to over-specify: square corners, neutral Helvetica Neue, white grounds, and a single reserved maroon are not stylistic preferences but the formal expression of *mu* — a refusal to crowd the user's own meaning out. What MUJI refuses is instructive: the status-signaling of luxury branding, the urgency theater of discount retail, the chromatic noise of mass-market e-commerce, and the "delightful" decoration of consumer apps. What it embraces is the calm of good paper, the dignity of an ordinary object well made, and the radical idea that the most confident thing a brand can do is get out of the way. The years, the Seiyu private-label origin, both English glosses of 無印良品 ("no-brand quality goods" / "no-mark quality goods"), the founding slogan, the 2017 Dezeen conversation, and that closing refuses/embraces sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-emptiness narrative as context that does not by itself supply interface tokens, keeping each source paragraph's last sentence as one unit with the paragraph it closes, and reading square corners / Helvetica Neue / white grounds / reserved maroon as the formal expression of *mu*, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, and recording that they do not come from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not MUJI-authored or a separately published UI specification.

- Browse the catalog grid (YAML `card-product` use: `Catalog grid card, photo is the card`; source: the catalog grid is the dominant surface of the site).
- Add a product to cart or proceed to checkout (`カートに入れる`, `ご購入手続きへ`).
- Search or sign in from a standard form field (YAML `input` use: `Standard form field`).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section states in its own header that the entries below it are fictional archetypes, not individual people. Those biographies — including motivations and affiliation classifications — are dropped rather than promoted, and are not re-hosted in the sidecar. What the source independently records, in its own wording, as publicly observable MUJI customer segments is the audience at a group level: design-conscious urban professionals, minimalist-lifestyle adopters, students furnishing first apartments. Dropping the fictional biographies rather than promoting them, carrying no name, age, city, motivation, or affiliation classification from those entries, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values in them are recorded; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

- MUJI Maroon (`#7f0019`) as the single brand color — logo plate and rare accents only, never a generic UI accent
- Helvetica Neue (Latin) + neutral Japanese gothic — typefaces chosen to vanish
- Near-black text (`#333333`), never pure `#000000` — softer, paper-like
- White and warm off-white surfaces (`#ffffff`, `#f7f7f7`, `#eeeeee`)
- Minimal-to-zero shadows; separation via hairline borders (`#dddddd`) and whitespace
- Small, conservative border-radius (0px–2px) — square corners are the default
- Generous whitespace and wide margins as the core compositional tool
- Product photography does the talking; chrome stays silent

### Principles

These 8 items are a derived editorial implementation inference from the verified surfaces; they are not MUJI-authored or a separately published UI specification. The numbered stems and their UI implications are the source's own Principles section. The source's closing note records interpretive claims such as "square is honest", "one color held precious", and "this will do over this is the best" as editorial readings connecting MUJI's stated no-brand / emptiness philosophy to its visual system, not directly sourced MUJI statements.

1. **Emptiness, not minimalism.** The goal is not to remove until nothing remains; it is to leave an open vessel the user completes. Whitespace invites, it doesn't merely subtract.
2. **The product speaks; the chrome is silent.** Every UI decision should recede so merchandise photography carries the page. If chrome competes with the product, the chrome is wrong.
3. **One color, held precious.** Maroon (`#7f0019`) appears only as the brand mark and rare sale accent. The moment it becomes a generic accent, it stops meaning "MUJI."
4. **Square is honest.** Corners are 0px (or barely 2px). Rounded, friendly corners editorialize; the printed-page squareness states the facts plainly.
5. **No black, no shouting.** Text is `#333333`, headings are weight 300. Authority comes from calm, not from contrast cranked to maximum.
6. **Separate with air and hairlines.** Whitespace first, a 1px `#dddddd` rule second. Shadows only where physics demands (header over scroll, modal over scrim).
7. **"This will do" over "this is the best."** Copy and design both choose modest sufficiency over aspirational excess. Restraint *is* the value proposition.
8. **Evenness as calm.** Spacing is regular and predictable. A tidy, evenly stocked shelf — never a dramatic, density-jolting layout.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

- Reserve MUJI Maroon (`#7f0019`) for the logo and rare brand accents — treat it as precious
- Use `#333333` for text, never pure `#000000`
- Default to square corners (0px); use 2px only on buttons, inputs, modals
- Separate elements with whitespace and hairline `#dddddd` borders, not shadows
- Set Helvetica Neue with `0.02em`–`0.04em` tracking and generous 1.7 line-height
- Use weight 300 for headings — lightness is the brand voice
- Let product photography on white be the visual focus
- Keep primary buttons near-black (`#333333`), not maroon

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

- Don't use maroon as a generic UI accent, link color, or everyday button — it is the brand mark, not a utility color
- Don't add decorative shadows or "floating card" elevation
- Don't use large border-radius or pill-shaped buttons (toggles excepted)
- Don't use bold weights to create hierarchy — use size and ink color instead
- Don't introduce additional brand colors — the palette is grayscale + one maroon
- Don't crowd content; cramped layouts contradict the emptiness doctrine
- Don't use pure black text or gradients
- Don't let chrome compete with merchandise photography

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping catalog `primary_color` `#7f0019` off `tokens.colors.primary` `#333333`, keeping `tokens.colors.primary` `#333333` unmerged from `tokens.colors.foreground` `#333333`, keeping `tokens.colors.canvas` `#ffffff` unmerged from `tokens.colors.on-primary` `#ffffff` and from footer text `#ffffff`, keeping `tokens.colors.brand` `#7f0019` unmerged from `tokens.colors.error` `#c0392b`, keeping `#000000` as `tokens.colors.primary-hover` rather than as body ink, keeping Ink, Info Ink, and Footer Ground as unmerged jobs on the same ink hex, keeping the Sale Red writing unmerged from the brand-token writing, keeping §2-only swatches (`#f4e6e9`, `#999999`, `#eeeeee`, `#e5e5e5`, footer `rgba(255,255,255,0.7)`) off invented YAML keys, and reading characterizations such as somber/traditional/Japanese, ink on uncoated paper, and maroon doubling for sale as the source's own palette notes rather than as a published color specification, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

**Primary / Brand**

- **MUJI Maroon** (`#7f0019`): YAML `tokens.colors.brand`. Catalog `primary_color`. RGB 127, 0, 25. Logo plate, the "MUJI" wordmark background, and a handful of high-priority accents (sale tags, active brand-nav markers). Deep brick-red with no orange in it — somber, traditional, Japanese. This is not `tokens.colors.primary`.
- **Maroon Deep** (`#6b0015`): YAML `tokens.colors.brand-hover`. Pressed/hover state for the rare interactive maroon element.
- **Maroon Tint** (`#f4e6e9`): Faint maroon-washed surface for sale banners or brand-themed callouts. Used sparingly. Not a YAML `tokens.colors` key.

**Text / Ink**

- **Ink** (`#333333`): YAML `tokens.colors.primary` and YAML `tokens.colors.foreground`. Primary body and heading color. A soft near-black — never pure black. Reads as ink on uncoated paper. Same hex, two keys; they stay unmerged. This is not catalog `primary_color` `#7f0019`.
- **Ink Secondary** (`#666666`): YAML `tokens.colors.muted`. Captions, metadata, secondary descriptions, price subtext.
- **Ink Tertiary** (`#999999`): Placeholder text, disabled labels, fine print, breadcrumb separators. Not a YAML `tokens.colors` key.

**Neutral / Surface Scale**

- **White** (`#ffffff`): YAML `tokens.colors.canvas`. Page background, card surfaces, product photography ground. Same hex as `tokens.colors.on-primary`; named jobs stay unmerged.
- **On-primary** (`#ffffff`): YAML `tokens.colors.on-primary`. Text on the near-black primary button. Same hex as canvas; named jobs stay unmerged.
- **Off-White** (`#f7f7f7`): YAML `tokens.colors.surface`. Section backgrounds, subtle zoning, alternating bands.
- **Mist** (`#eeeeee`): Secondary fills, input backgrounds, hover surfaces. Not a YAML `tokens.colors` key.
- **Cloud** (`#e5e5e5`): Stronger fills, segmented control track. Not a YAML `tokens.colors` key.
- **Hairline** (`#dddddd`): YAML `tokens.colors.hairline`. Default border, divider, table rule — the workhorse separator.
- **Border Strong** (`#cccccc`): YAML `tokens.colors.border-strong`. Emphasized borders, active input outlines.

**Semantic (used minimally)**

- **Sale Red** (`#7f0019`): MUJI does not introduce a separate "error red" — the brand maroon doubles for sale pricing and critical emphasis. Same hex as `tokens.colors.brand`; the sale job stays on this writing.
- **Error** (`#c0392b`): YAML `tokens.colors.error`. Reserved, slightly brighter red for true form-validation errors only (distinguished from brand maroon so errors don't read as branding).
- **Success** (`#4a7c59`): YAML `tokens.colors.success`. Muted sage-green for confirmation states. Desaturated to fit the palette.
- **Info Ink** (`#333333`): MUJI conveys information through ink + weight, not color. Same hex as Ink; the info job stays on this writing.

**Dark Footer**

- **Footer Ground** (`#333333`): Footer / global navigation dark band on some regional sites. Same hex as Ink; the footer-ground job stays on this writing.
- **Footer Text** (`#ffffff` / `rgba(255,255,255,0.7)`): Footer links and muted secondary footer text. `#ffffff` here is footer text, not canvas.

### Spacing

YAML `tokens.spacing` (unitless array, kept as the source wrote it): `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64`, `96`. Source §5 writes the same steps with a px suffix: `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px`. Both writings stay. Base unit: 8px. Section vertical rhythm is large: 64px–96px between major bands. Product grids use tight internal gutters (8px–16px) but wide outer margins. Keeping those unitless steps on their own path rather than rewriting them as a converted px sheet, keeping `tokens.spacing` `16` unmerged from body size `16` and from button padding `14px 24px`, keeping `tokens.spacing` `8` unmerged from product-card text-block padding `8px 0` and from `backdrop-filter: blur(8px)`, keeping `tokens.spacing` `12` unmerged from caption size `12` and from toast padding `12px 16px`, keeping `tokens.spacing` `24` unmerged from primary horizontal padding `24px`, keeping `tokens.spacing` `32` unmerged from dialog padding `32px` and from banner-card padding `32px`, and keeping `tokens.spacing` `4` unmerged from `tokens.rounded.sm` `2`, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

### Shape

YAML `tokens.rounded`: `sm` 2, `md` 2, `lg` 2, `full` 9999. Source §5 names three uses: Square (`0px`) for product cards, tags, image frames, banners — the default; Hairline (`2px`) for buttons, inputs, modals, content cards — barely softened; Pill (`9999px`) for toggle switches only. YAML has no `0` key; `0px` stays a component-local writing. **No large radii.** Nothing rounder than 2px except the toggle. Square corners are intrinsic to the printed, no-nonsense MUJI feel. Keeping YAML `2` on three keys rather than collapsing them, keeping YAML `full` `9999` unmerged from those `2` keys and from body `0px`, keeping body `0px` off an invented `rounded.none` key, and reading "no large radii" / "square is the default" as the source's own radius rule rather than as a universal radius scale, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, product cards, most surfaces — the default |
| Hairline (Level 1) | 1px solid `#dddddd` border | Separation without shadow — the primary "elevation" device |
| Subtle (Level 2) | `0 2px 8px rgba(0,0,0,0.08)` | Sticky header on scroll, toast. YAML `tokens.shadow.subtle` |
| Modal (Level 3) | `0 4px 24px rgba(0,0,0,0.16)` | Dialogs, dropdown menus. YAML `tokens.shadow.modal` |

YAML `tokens.shadow.subtle` is `0 2px 8px rgba(0,0,0,0.08)`. YAML `tokens.shadow.modal` is `0 4px 24px rgba(0,0,0,0.16)`. Source §4 toast writes `0 2px 8px rgba(0,0,0,0.12)` (the rare allowed shadow). Source §14 Success (added to cart) writes `0 2px 8px rgba(0,0,0,0.08)`. Both toast writings stay; `0.12` is not `tokens.shadow.subtle`. Dialog overlay: `rgba(0,0,0,0.4)`. Sticky header may apply a light `backdrop-filter: blur(8px)` with a translucent white background on scroll. Otherwise blur is avoided — clarity over effect. MUJI's depth system is, by design, almost no depth at all. Where most e-commerce leans on cards-with-shadows to create hierarchy, MUJI separates elements with whitespace and hairline borders (`#dddddd`). Shadows are pure neutral black at low opacity and appear only where physically necessary — a header floating over scrolling content, a modal over a scrim. There are no colored shadows, no multi-layer elevation, no "lifted" decorative cards. Flatness is the brand statement: a printed page does not cast shadows, and MUJI's digital surfaces aspire to the calm of good paper. Reading that shadow philosophy as the source's own elevation rule rather than as a published depth specification, keeping toast `0.12` unmerged from YAML `subtle` `0.08`, and keeping `blur(8px)` as a sticky-header observation rather than as a spacing step, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

### Motion

Source §15 durations, easing-role names, signature motions, avoided-motion rules, and reduced-motion behavior, preserved. Treating the duration table and easing names as source-stated rather than computed CSS, treating the three cubic-bezier values as unattributed template-matching curves and omitting them rather than promoting them, and treating the spring/bounce/overshoot prohibition and the "calm-paper" register as a derived editorial implementation inference from the verified surfaces, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox/toggle state commits, focus borders |
| `motion-fast` | 150ms | Hover tints, button press, small fades |
| `motion-standard` | 250ms | Dropdown, drawer, modal, image crossfade |
| `motion-slow` | 400ms | Page-level transitions, hero reveals |

Source-stated easing names (uncomputed cubic-bezier omitted):

| Token | Curve | Use |
|---|---|---|
| `ease-enter` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-enter` example) | Arriving — drawers, modals, fades-in |
| `ease-exit` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-exit` example) | Leaving — dismissals |
| `ease-standard` | omitted (unattributed cubic-bezier; source-stated name only; matches the legacy spec-template `ease-standard` example) | Two-way transitions — tabs, accordions |

**Explicitly avoided.** No spring, no bounce, no overshoot. Playful or kinetic motion contradicts the calm-paper register — a MUJI surface should never feel "delightful" in the consumer-app sense. Motion exists to soften transitions, not to entertain. No `cubic-bezier` with a control value above `1.0` anywhere.

**Signature motions.**

1. **Image crossfade.** Product-gallery thumbnails crossfade the main image over `motion-standard / ease-standard`. Never a slide or zoom — the photograph simply replaces itself, calmly.
2. **Drawer / hamburger nav.** The mobile nav panel slides in from the side over `motion-standard / ease-enter` with a synchronized `rgba(0,0,0,0.4)` scrim fade. Dismissal uses `motion-fast / ease-exit` — leaving is lighter than arriving.
3. **Hover tint, not lift.** Cards and buttons respond to hover with a `motion-fast` background tint (`#f7f7f7`) or border darken — never a shadow or translate. Elements do not "lift"; flatness is preserved.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Crossfades become instant swaps. The site stays fully usable; nothing is lost but the easing.

Do not promote an easing curve, animation name, transition property, or a duration beyond the tables above until a later pass has recorded computed evidence of all five kinds per component: transition properties, animation name, duration, easing, and reduced-motion behavior. Official documentation of a single curve or duration is not that gate. Any exact animation curve remains a local extension until that per-component computed observation exists.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live surface-use (source) | Source footer: muji.com live brand chrome — Helvetica Neue type stack. YAML `tokens.typography.family.sans` `Helvetica Neue`. YAML `tokens.typography.family.mono` is also `Helvetica Neue`; it stays a second key, not a separate monospace face. |
| Official product-use | Art director Kenya Hara (since 2001). Source Tier 2: fontalternatives.com records Helvetica Neue as MUJI's Latin typeface under Kenya Hara. No MUJI-exclusive distributed type family is named as a downloadable brand asset. |
| Declared Japanese chrome | Neutral gothic, no decorative mincho on chrome. Stack: `"ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif`. |
| Numerals | Helvetica Neue figures for prices; no custom tabular font — alignment via layout, not a special numeral set |
| Official distributed asset | No MUJI-exclusive distributed type family was verified. Helvetica Neue is the named Latin role, not a MUJI-owned brand-font file. |

Sorting those rows as evidence classes rather than as a published MUJI type specimen, keeping YAML `sans` and YAML `mono` as two keys on the same family name, and keeping the Japanese gothic stack unmerged from Helvetica Neue, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

### Family

- **Primary (Latin):** `"Helvetica Neue", Helvetica, Arial, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif` — YAML `tokens.typography.family.sans` is `Helvetica Neue`.
- **Japanese:** `"ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif` — neutral gothic, no decorative mincho on chrome
- **YAML `tokens.typography.family.mono`:** `Helvetica Neue` (same family name; not a second face)

Do not present Helvetica, Arial, ヒラギノ角ゴ ProN, Hiragino Kaku Gothic ProN, メイリオ, Meiryo, Yu Gothic, or Noto Sans JP as a substitute for the named Helvetica Neue Latin role. Do not present the Japanese gothic stack as Helvetica Neue. That fallback-and-surface boundary is a derived editorial implementation inference from the verified surfaces; it is not MUJI-authored or a separately published UI specification.

### Type roles

YAML sizes are the unitless numbers 28, 22, 18, 16, 14, 13, 12. Source §3 writes `28px`, `22px`, `18px`, `16px`, `14px`, `13px`, `12px`, plus two §3-only rows (Price Large `20px`, Nav Link `13px`). YAML line-height values are the unitless ratios `1.4`, `1.5`, `1.7`, `1.6`, `1.3`, `1.0`. They scale with font size and are not fixed px. YAML tracking is `0.02` / `0.04`; source §3 writes `0.02em` / `0.04em` / `0`. YAML `price` has no tracking key; §3 writes `0`. YAML `page-title` use is `Quiet authority page title`; §3 notes `Light weight signals quiet authority`. YAML `price` use is `Product price`; §3 writes `Product price, never bolded loud`. Both writings stay. Keeping YAML unitless sizes beside §3 px, keeping unitless line-heights as ratios, keeping YAML `use` verbatim beside the longer §3 notes, keeping Price Large and Nav Link as §3-only rows, keeping `tokens.typography.page-title.size` `28` unmerged from a spacing step, keeping `tokens.typography.body.size` `14` unmerged from `tokens.spacing` `16` and from button padding, keeping `tokens.typography.lead.size` `16` unmerged from `tokens.typography.price.size` `16` and from `tokens.spacing` `16`, keeping YAML `section` weight `400` unmerged from the §9 section-prompt weight `300`, and keeping caption tracking `0.04` unmerged from body tracking `0.02`, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use / §3 note |
|---|---|---|---|---|---|---|
| Page Title | Helvetica Neue | YAML 28 / §3 28px | 300 (Light) | 1.4 | YAML 0.02 / §3 0.02em | YAML `Quiet authority page title`. §3: Light weight signals quiet authority |
| Section Heading | Helvetica Neue | YAML 22 / §3 22px | YAML 400 / §9 prompt 300 | 1.4 | YAML 0.02 / §3 0.02em | YAML `Category / section titles` |
| Sub-heading | Helvetica Neue | YAML 18 / §3 18px | 400 | 1.5 | YAML 0.02 / §3 0.02em | YAML `Card titles, group labels` |
| Lead / Intro | Helvetica Neue | YAML 16 / §3 16px | 300 | 1.7 | YAML 0.02 / §3 0.02em | YAML `Editorial intro paragraphs` |
| Body | Helvetica Neue | YAML 14 / §3 14px | 400 | 1.7 | YAML 0.02 / §3 0.02em | YAML `Standard reading text` |
| Body Small | Helvetica Neue | YAML 13 / §3 13px | 400 | 1.6 | YAML 0.02 / §3 0.02em | YAML `Product descriptions, dense copy` |
| Caption | Helvetica Neue | YAML 12 / §3 12px | 400 | 1.5 | YAML 0.04 / §3 0.04em | YAML `Metadata, legal, breadcrumbs` |
| Price | Helvetica Neue | YAML 16 / §3 16px | 400 | 1.3 | §3 `0` (no YAML tracking key) | YAML `Product price`. §3: Product price, never bolded loud |
| Price Large | Helvetica Neue | 20px | 400 | 1.3 | 0 | §3 only: PDP primary price |
| Nav Link | Helvetica Neue | 13px | 400 | 1.4 | 0.04em | §3 only: Global nav, restrained tracking |
| Button Label | Helvetica Neue | YAML 14 / §3 14px | 400 | 1.0 | YAML 0.04 / §3 0.04em | YAML `Add to cart, primary actions` |

Token-set paths: `tokens.typography.page-title` · `tokens.typography.section` · `tokens.typography.subheading` · `tokens.typography.lead` · `tokens.typography.body` · `tokens.typography.body-small` · `tokens.typography.caption` · `tokens.typography.price` · `tokens.typography.button`. Price Large and Nav Link are §3 writings only.

**Typography rules** (source §3 Principles). Treating light-weight-as-register, generous-line-height as emptiness, subtle positive tracking, no-bold-for-hierarchy, and two-scripts-one-neutrality as the source's own type rules rather than as a separately published type specification, is a derived editorial implementation inference from the verified surfaces; it is not MUJI-authored or a separately published UI specification.

- **Light weight as register**: Headings often run at weight 300 (Light). Where most retailers shout in bold, MUJI whispers — the lightness is the authority.
- **Generous line-height**: Body copy runs 1.7 line-height. Air between lines is part of the "emptiness" — text never crowds.
- **Subtle positive tracking**: A small `0.02em`–`0.04em` letter-spacing opens the text up. Helvetica Neue set slightly loose reads calmer than default.
- **No bold for hierarchy**: Hierarchy comes from size and color (Ink → Ink Secondary), not from heavy weights. Bold (700) is rare and reserved for an active price or a single emphasized word.
- **Two scripts, one neutrality**: Latin Helvetica Neue and Japanese gothic are weighted to sit calmly together; neither dominates. No decorative serif/mincho enters the chrome.

### Assets

Catalog logo: type `favicon`, slug `https://www.google.com/s2/favicons?domain=muji.com&sz=128`. Reading that Google favicon-service slug as catalog identity metadata rather than as a MUJI-hosted brand file, reading product photography on white as first-party catalog content rather than as a complete image specification, and not replacing product photography with invented brand-color decoration, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification. Product photography does the talking; chrome stays silent. Do not replace product photography with invented brand-color decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Source §14, preserved while the catalog graph is not adopted. Preserving that state contract here rather than delegating it, declaring Core §4.4 applicability by control meaning rather than by capture completeness, attaching a primitive type only when YAML records one, omitting kind plus a state-applicability map where interactive-kind is unconfirmed, treating named Focus as not `focus-visible` evidence, treating YAML `button-disabled` and YAML `input-error` as treatment recipes rather than extra interactive components with their own maps, keeping each control's padding, radius, shadow, and hex on that control rather than as a spacing-scale or color-token rewrite, keeping YAML `states` / `active` beside the prose hover and checked writings, keeping toast shadow `0.12` on the toast, keeping notice YAML `border` beside §4 `Border-left`, keeping product-card `0px` off YAML `tokens.rounded`, treating Outline Tag / Filled (subtle) / Banner Card as §4-only records, and recording that this is not a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Single line in Ink (`#333333`) 14px: "該当する商品はありません". One quiet outline CTA to clear filters. No illustration. |
| **Empty (empty cart)** | Centered single line `#666666`: "カートに商品がありません". One near-black button "お買い物を続ける". Calm, never cute. |
| **Loading (grid first paint)** | Skeleton blocks in `#eeeeee` at exact product-cell dimensions. Subtle 1.2s shimmer. No spinners on the main grid. |
| **Loading (action in progress)** | Button label swaps to a small neutral spinner; button keeps its width and `#333333` fill. No color change. |
| **Error (form validation)** | Field border becomes `#c0392b` (distinct from brand maroon), 12px help text below in the same red. Specific and blameless: states what to fix. |
| **Error (page-level)** | Inline notice: `#f7f7f7` background, 2px `#7f0019` left border, `#333333` text. One sentence, one action. |
| **Success (added to cart)** | `#333333` toast, white text, 2px radius, brief `0 2px 8px rgba(0,0,0,0.08)` shadow, 3s auto-dismiss: "カートに追加しました". No emoji. |
| **Success (order placed)** | Dedicated confirmation page, not a toast. Quiet `#4a7c59` confirmation mark, order summary in plain Ink type, single "続けてお買い物" button. |
| **Skeleton** | `#eeeeee` blocks at final dimensions, square corners matching the cards. Shimmer is neutral, no brand tint. |
| **Disabled** | `#eeeeee` background, `#999999` text. Used for out-of-stock add-to-cart. Geometry unchanged so re-enabling is stable. |
| **Out of stock** | Product card stays; price replaced by `#999999` "在庫切れ" label; add-to-cart disabled. No alarming red. |

Declared interactive components still declare Core §4.4 applicability by control meaning. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless the source records that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. YAML `input` records `focus: "border #333333, no glow"`; that named Focus is not `focus-visible` treatment evidence and is not copied onto a `focus-visible` row as a colour. This is not a complete state-coverage claim.

### Primary (Add to Cart / Checkout)

- Role: The single primary action on a screen (`カートに入れる`, `ご購入手続きへ`)
- Kind: interactive
- Primitive type: `button` (`tokens.components.button-primary.type`)
- Anatomy: label
- Background: `#333333`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: `14px 24px`
- Font: `14px / 400` / Helvetica Neue, `0.04em` tracking
- Hover: `#000000`
- YAML `states`: `hover #000000`
- Use: YAML `Single primary action (add to cart / checkout)`
- YAML `tokens.components.button-primary`
- Field note: `#333333` is this control's fill and YAML `tokens.colors.primary`. It is not catalog `primary_color` `#7f0019` and not `tokens.colors.brand`. `#ffffff` is this control's on-fill label (`tokens.colors.on-primary`), not canvas. Hover `#000000` is `tokens.colors.primary-hover`, not body ink. Padding `14px 24px` is this control's geometry, not `tokens.spacing` `16` / `24`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 primary add-to-cart / checkout |
| hover | applicable | Pointer-web button; source hover `#000000` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | YAML `button-disabled` + §14 Disabled / Out of stock; recipe below |
| loading | applicable | Add-to-cart / checkout commits; §14 Loading (action in progress) is a paint on this button |
| error | applicable | A checkout commit can fail; field/page errors sit on input and inline notice; visual treatment omitted on this button |
| success | applicable | A cart commit has an outcome; §14 records "カートに追加しました" as a toast, not a paint on this button; visual treatment omitted on this button |

**Disabled recipe** (YAML `tokens.components.button-disabled`; not a fifth interactive component with its own map)

- Primitive type: `button` (`tokens.components.button-disabled.type`)
- Background: `#eeeeee`
- Text: `#999999`
- Border: none
- Radius: 2px
- Use: YAML `Out-of-stock, unavailable`
- Geometry unchanged so re-enabling is stable

Treating YAML `button-disabled` as the disabled treatment recipe for this control rather than a fifth interactive component with its own map, including Primitive type `button` preserved on that recipe, is a derived editorial implementation inference from the verified surfaces; it is not MUJI-authored or a separately published UI specification.

### Secondary (Outline)

- Role: Secondary actions — `お気に入り`, `続けて見る`
- Kind: interactive
- Primitive type: `button` (`tokens.components.button-secondary.type`)
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #333333`
- Radius: 2px
- Padding: `13px 24px`
- Font: `14px / 400` / Helvetica Neue
- Hover: background `#f7f7f7`
- YAML `states`: `hover bg #f7f7f7`
- Use: YAML `Secondary actions`
- YAML `tokens.components.button-secondary`
- Field note: Padding `13px 24px` is this control's geometry, not Primary `14px 24px` and not `tokens.spacing` `12` / `24`. Fill `#ffffff` is this control's fill, not canvas as a second token.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 secondary actions |
| hover | applicable | Pointer-web button; source hover background `#f7f7f7` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A secondary action can be unavailable; visual treatment omitted |
| loading | applicable | `お気に入り` commits a save; visual treatment omitted beyond §14 action-in-progress |
| error | applicable | A save commit can fail; visual treatment omitted |
| success | applicable | A save commit has an outcome; visual treatment omitted |

### Tertiary (Quiet)

- Role: Low-priority actions, filters, `もっと見る`
- Kind: interactive
- Primitive type: `button` (`tokens.components.button-tertiary.type`)
- Background: transparent
- Text: `#666666`
- Border: `1px solid #dddddd`
- Radius: 2px
- Padding: `10px 16px`
- Font: `13px / 400` / Helvetica Neue
- Use: YAML `Low-priority actions, filters`
- YAML `tokens.components.button-tertiary`
- Field note: Padding `10px 16px` is this control's geometry, not `tokens.spacing` `16`. Font `13px / 400` is this control's font, not YAML `body-small` as a rewritten role.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 low-priority actions, filters, `もっと見る` |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A quiet action can be unavailable; visual treatment omitted |
| loading | applicable | `もっと見る` loads more catalog; visual treatment omitted |
| error | not-applicable | A filter / `もっと見る` control is not a form field; field errors sit on input |
| success | not-applicable | Loading more, or applying a filter, is not an action-outcome confirmation on this control |

### Brand (rare)

- Role: Reserved for sale / campaign CTAs only — never the everyday add-to-cart
- Kind: interactive
- Primitive type: `button` (`tokens.components.button-brand.type`)
- Background: `#7f0019`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: `14px 24px`
- Font: `14px / 400` / Helvetica Neue
- Hover: `#6b0015`
- YAML `states`: `hover #6b0015`
- Use: YAML `Sale / campaign CTAs only`
- YAML `tokens.components.button-brand`
- Field note: Fill `#7f0019` is this control's fill and `tokens.colors.brand`, not `tokens.colors.primary` `#333333`. Hover `#6b0015` is `tokens.colors.brand-hover`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 sale / campaign CTA |
| hover | applicable | Pointer-web button; source hover `#6b0015` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A campaign CTA can be unavailable; visual treatment omitted |
| loading | applicable | A campaign CTA commits; visual treatment omitted |
| error | applicable | A campaign commit can fail; visual treatment omitted |
| success | applicable | A campaign commit has an outcome; visual treatment omitted |

### Input (Default)

- Role: Standard form field, search, login
- Kind: interactive
- Primitive type: `input` (`tokens.components.input.type`)
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #cccccc`
- Radius: 2px
- Padding: `12px 14px`
- Font: `14px / 400` / Helvetica Neue
- Placeholder: `#999999`
- Focus (named source-state, not `focus-visible` evidence): border `#333333` (no glow, no colored ring — a darkened hairline)
- Use: YAML `Standard form field`
- YAML `tokens.components.input`
- Field note: Named Focus `border #333333, no glow` is an additional named-source-state, not `focus-visible` treatment evidence and not copied onto that row as a colour. Padding `12px 14px` is this field's geometry, not `tokens.spacing` `12` / `16` and not body size `14`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 standard form field |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A form field can be unavailable; visual treatment omitted |
| loading | applicable | Search / login can wait on a request; visual treatment omitted |
| error | applicable | Form field; YAML `input-error` + §14 Error (form validation) |
| success | applicable | Login / search can complete; visual treatment omitted |

**Error recipe** (YAML `tokens.components.input-error`; not a second input with its own map)

- Primitive type: `input` (`tokens.components.input-error.type`)
- Background: `#ffffff`
- Border: `1px solid #c0392b`
- Radius: 2px
- Help text below in `#c0392b`, 12px
- Use: YAML `Validation failure, help text #c0392b`

**Filled (subtle)** — source §4 only; primitive type not in the token set

- Background: `#f7f7f7`
- Text: `#333333`
- Border: `1px solid transparent`
- Radius: 2px
- Padding: `12px 14px`
- Focus: border `#cccccc`
- Use: Search bars inside light chrome

Treating named Focus as not `focus-visible` evidence, treating YAML `input-error` as the error recipe for this field rather than a second interactive component with its own map, and treating Filled (subtle) as a §4-only variant with primitive type not in the token set, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

### Product Card

- Role: The catalog grid — the dominant surface of the site
- Kind: interactive
- Primitive type: `card` (`tokens.components.card-product.type`)
- Anatomy: photograph is the card; title and price below
- Background: `#ffffff`
- Border: none (or 1px `#eeeeee` on dense grids)
- Radius: `0px`
- Padding: `0` (image flush), text block padded `8px 0`
- Shadow: none
- Image: square or 3:4, on `#ffffff` or `#f7f7f7` ground
- Title: 13px / 400 / `#333333`
- Price: 14px / 400 / `#333333` (sale price in `#7f0019`)
- Hover (source §9 / §15): subtle `#f7f7f7` background tint; no hover lift
- Use: YAML `Catalog grid card, photo is the card`
- YAML `tokens.components.card-product`
- Field note: Radius `0px` is this card's geometry; YAML `tokens.rounded` has no `0` key. Title 13px is this card's title, not YAML `body-small` rewritten. Price 14px is this card's price, not YAML `price` size `16`. Source §8: full tappable cell; tap targets never smaller than the photo.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 catalog grid card |
| hover | applicable | Pointer-web tappable cell; source hover tint `#f7f7f7` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | not-applicable | §14 Out of stock: the product card stays; add-to-cart is disabled. The card itself is not disabled |
| loading | not-applicable | Destination catalog cell; grid first-paint skeleton is a page-level treatment, not a request on the card |
| error | not-applicable | The card is not a form field; out-of-stock is a `#999999` "在庫切れ" label, not an error state of the card |
| success | not-applicable | Opening a product is not an action-outcome confirmation on the card |

### Content / Editorial Card

- Role: "MUJI passport" callouts, story modules, info panels
- Primitive type: `card` (`tokens.components.card-editorial.type`)
- Background: `#ffffff`
- Border: `1px solid #eeeeee`
- Radius: 2px
- Padding: `20px`
- Shadow: none
- Use: YAML `Story modules, info panels`
- YAML `tokens.components.card-editorial`
- Kind and a state-applicability map are omitted (YAML `type: card`; no interactive-kind confirmation).

### Banner Card

- Role: Full-bleed campaign / seasonal bands
- Background: `#f7f7f7`
- Border: none
- Radius: `0px`
- Padding: `32px`
- Use: Full-bleed campaign / seasonal bands
- Primitive type: not in the token set
- Kind and a state-applicability map are omitted (source §4 only; no interactive-kind confirmation).

### Sale Tag

- Role: `期間限定価格` / sale indicator
- Kind: non-interactive
- Primitive type: `badge` (`tokens.components.tag-sale.type`)
- Background: `#7f0019`
- Text: `#ffffff`
- Border: none
- Radius: `0px` (square — a printed-label feel)
- Padding: `2px 8px`
- Font: `11px / 400` / Helvetica Neue, `0.04em`
- Use: YAML `Sale indicator, printed-label feel`
- YAML `tokens.components.tag-sale`
- A state-applicability map is omitted.

### Neutral Tag

- Role: NEW, category labels, attribute chips
- Kind: non-interactive
- Primitive type: `badge` (`tokens.components.tag-neutral.type`)
- Background: `#eeeeee`
- Text: `#666666`
- Border: none
- Radius: `0px`
- Padding: `2px 8px`
- Font: `11px / 400`
- Use: YAML `NEW, category labels`
- YAML `tokens.components.tag-neutral`
- A state-applicability map is omitted.

### Outline Tag

- Role: Filter chips, selectable attributes
- Kind: interactive
- Primitive type: not in the token set
- Background: transparent
- Text: `#666666`
- Border: `1px solid #dddddd`
- Radius: `0px`
- Padding: `1px 7px`
- Use: Filter chips, selectable attributes

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Source §4 filter chips, selectable attributes |
| hover | applicable | Pointer-web selectable chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter chip can be unavailable; visual treatment omitted |
| loading | not-applicable | Selecting an attribute does not submit a request on the chip |
| error | not-applicable | The chip is not a form field |
| success | not-applicable | Selecting an attribute is not an action-outcome confirmation on the chip |

### Underline Tabs

- Role: PDP detail tabs (`商品詳細` / `レビュー`), category switching
- Kind: interactive
- Primitive type: `tab` (`tokens.components.tab.type`)
- Background: transparent
- Text: `#333333` (active) / `#999999` (inactive)
- Border: `2px solid #333333` (bottom, active only)
- Font: `14px / 400` / Helvetica Neue
- Use: YAML `PDP detail tabs, category switching`
- YAML `tokens.components.tab`
- YAML `active`: `text #333333, 2px bottom border #333333`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 PDP detail tabs, category switching |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A PDP / category tab selects a panel; the tab itself does not submit a request |
| error | not-applicable | The tab is not a form field |
| success | not-applicable | Selecting a tab is not an action-outcome confirmation on the tab |

### Segmented

- Role: View toggles, sort modes
- Kind: interactive
- Primitive type: `tab` (`tokens.components.segmented.type`)
- Track: `#eeeeee`
- Active: `#ffffff` background + `#333333` text
- Border: none
- Radius: 2px
- Font: `13px / 400`
- Use: YAML `View toggles, sort modes`
- YAML `tokens.components.segmented`
- YAML `active`: `bg #ffffff, text #333333`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 view toggles, sort modes |
| hover | applicable | Pointer-web segmented control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A sort / view mode can be unavailable; visual treatment omitted |
| loading | not-applicable | A view / sort toggle selects a mode; it does not submit a request on the control |
| error | not-applicable | The toggle is not a form field |
| success | not-applicable | Switching sort / view is not an action-outcome confirmation on the control |

### Toast

- Role: Transient confirmation (`カートに追加しました`)
- Kind: non-interactive
- Primitive type: `toast` (`tokens.components.toast.type`)
- Background: `#333333`
- Text: `#ffffff`
- Border: none
- Radius: 2px
- Padding: `12px 16px`
- Shadow: `0 2px 8px rgba(0,0,0,0.12)` (the rare allowed shadow; YAML `tokens.components.toast.shadow`)
- Font: `13px / 400`
- Use: YAML `Transient confirmation`
- YAML `tokens.components.toast`
- Field note: Toast shadow `0.12` is this component's field. YAML `tokens.shadow.subtle` and §14 Success toast write `0.08`. Both writings stay. A state-applicability map is omitted.

### Inline Notice

- Role: Shipping info, stock notices, page-level messages
- Kind: non-interactive
- Primitive type: `card` (`tokens.components.notice-inline.type`)
- Background: `#f7f7f7`
- Text: `#333333`
- YAML `border`: `2px solid #7f0019`. Source §4: `Border-left: 2px solid #7f0019`. Both writings stay.
- Radius: `0px`
- Padding: `12px 16px`
- Use: YAML `Shipping info, stock notices`
- YAML `tokens.components.notice-inline`
- A state-applicability map is omitted.

### Centered Modal

- Role: Confirmation, size guide, login prompt
- Kind: interactive
- Primitive type: `dialog` (`tokens.components.dialog.type`)
- Background: `#ffffff`
- Text: `#333333`
- Border: none
- Radius: 2px
- Padding: `32px`
- Shadow: `0 4px 24px rgba(0,0,0,0.16)` (YAML `tokens.shadow.modal`)
- Overlay: `rgba(0,0,0,0.4)`
- Use: YAML `Confirmation, size guide, login`
- YAML `tokens.components.dialog`
- Field note: Padding `32px` is this dialog's geometry, not `tokens.spacing` `32` rewritten. Overlay `rgba(0,0,0,0.4)` is also the drawer scrim in signature motion 2.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 confirmation, size guide, login |
| hover | applicable | Pointer-web dialog; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A dialog action can be unavailable; visual treatment omitted |
| loading | applicable | Confirmation and login commit; visual treatment omitted |
| error | applicable | Login / confirmation can fail; visual treatment omitted |
| success | applicable | Login / confirmation can complete; visual treatment omitted |

### Checkbox

- Role: Filters, terms agreement — square, never circular
- Kind: interactive
- Primitive type: `toggle` (`tokens.components.checkbox.type`)
- Border: `1px solid #cccccc`
- Radius: 2px (square)
- Checked: `#333333` fill, white check
- YAML `active`: `#333333 fill, white check`
- Use: YAML `Filters, terms agreement, square`
- YAML `tokens.components.checkbox`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 filters, terms agreement |
| hover | applicable | Pointer-web checkbox; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter / terms checkbox can be unavailable; visual treatment omitted |
| loading | not-applicable | Source `motion-instant`: checkbox state commits locally; the control does not run a request |
| error | applicable | Terms agreement can fail validation; visual treatment omitted beyond field error |
| success | not-applicable | Checking a box is not an action-outcome confirmation on the checkbox |

### Toggle

- Role: Newsletter / setting switches
- Kind: interactive
- Primitive type: `toggle` (`tokens.components.toggle.type`)
- Track: `#cccccc` (off) / `#333333` (on)
- Thumb: `#ffffff` circle
- YAML `active`: `track #333333, white thumb`
- Radius: `9999px` (the one pill in the system; YAML `tokens.rounded.full`)
- Use: YAML `Newsletter / setting switches`
- YAML `tokens.components.toggle`
- Field note: Radius `9999px` is this control's geometry and YAML `tokens.rounded.full`. It is not YAML `sm`/`md`/`lg` `2`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | YAML/§4 newsletter / setting switches |
| hover | applicable | Pointer-web switch; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A setting switch can be unavailable; visual treatment omitted |
| loading | not-applicable | Source `motion-instant`: toggle state commits locally; the control does not run a request |
| error | not-applicable | The switch is not a form field; field errors sit on input |
| success | not-applicable | On-state fill is the setting, not an action-outcome confirmation on the switch |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Source §5 layout principles and source §8 responsive behavior, preserved. Treating the breakpoint table as source-stated intended behavior rather than a live computed cross-viewport capture, treating `~1180px` / `~720px` as the source's own content measures rather than as a spacing-scale step, treating the source §9 section local recipe as section-internal padding and section-body ink unmerged from between-band rhythm, from the unitless spacing step, and from Type-role Body ink, and treating emptiness-as-material / let-the-product-speak / even-calm-rhythm / wide-margins-as-luxury as the source's own whitespace notes rather than as a separately published layout specification, are derived editorial implementation inferences from the verified surfaces; they are not MUJI-authored or a separately published UI specification.

YAML spacing is the unitless array `4, 8, 12, 16, 24, 32, 48, 64, 96`, recorded without a required px suffix. Source §5 also writes those steps in px. Base unit: 8px. Section vertical rhythm is large: 64px–96px between major bands. Product grids use tight internal gutters (8px–16px) but wide outer margins.

**Grid & container**

- Max content width: ~1180px, centered
- Wide page gutters — content rarely touches the viewport edge except for full-bleed campaign imagery
- Product catalog: 4–5 column grid on desktop, even gutters, square cells
- Editorial: single centered column ~720px for readable measure
- Full-bleed hero/campaign bands alternate with constrained content columns

### Section (local recipe)

Source §9 section: `#f7f7f7` background, 64px vertical padding, centered content ~1180px, body 14px line-height 1.7 `#666666`.

**Whitespace philosophy** (source §5)

- **Emptiness is the material.** Whitespace is not leftover space; it is the primary compositional element. A product floating in white communicates quality more than any frame could.
- **Let the product speak.** Chrome recedes so merchandise photography carries the page. Reducing UI ornament is a feature, not a constraint.
- **Even, calm rhythm.** Spacing is regular and predictable — no dramatic density shifts. The page should feel like a tidy shelf, evenly stocked.
- **Wide margins as luxury.** Generous outer margins signal confidence; cramming signals discount-bin urgency, which MUJI refuses.

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single/2-column product grid, hamburger nav, full-width buttons |
| Tablet | 768–1024px | 3-column grid, condensed nav |
| Desktop | 1024–1280px | 4-column grid, full global nav |
| Large | >1280px | 5-column grid, centered ~1180px content with wide margins |

### Touch targets

- Buttons: minimum 44px tall on mobile
- Product cards: full tappable cell; tap targets never smaller than the photo
- Nav items and filters: comfortable 44px rows in the mobile drawer

### Collapsing strategy

- Global nav collapses to a hamburger drawer with full-height white panel
- Product grid: 5→4→3→2 columns down the breakpoints
- Primary buttons become full-width on mobile
- Editorial column stays centered, padding reduces from 32px to 16px
- Sticky add-to-cart bar appears on mobile PDP, white with hairline top border

### Image behavior

- Product photography maintains square/3:4 ratio across breakpoints
- Full-bleed campaign imagery scales edge-to-edge; text overlays reflow below image on mobile
- Images stay on white/off-white ground — never cropped tightly or framed with shadow

<!-- design-md:section content-locales -->
## 6. Content & Locales

MUJI's voice is plain, unhurried, and quietly declarative — the verbal equivalent of an unbranded paper bag. It describes, it does not sell. The brand's own founding register is captured in its 1980 slogan *「わけあって、安い」* ("Lower priced for a reason") and the recurring *「これがいい」ではなく「これでいい」* framing — not "this is *the best*," but "this *will do*," a deliberately modest contentment over assertive desire. Copy explains the material, the process, and the reason a thing is the way it is. There are no superlatives, no urgency theater, no exclamation points on routine surfaces. Treating that voice characterization, including unbranded-paper-bag, describes-it-does-not-sell, and modest-contentment-over-assertive-desire, as a derived editorial implementation inference from the verified surfaces rather than as a separately published microcopy specification, is a derived editorial implementation inference from the verified surfaces; it is not MUJI-authored or a separately published UI specification. The slogan strings and the Japanese samples are the source's own.

| Context | Tone |
|---|---|
| Product descriptions | Factual, material-first. "オーガニックコットン100%。" States what it is and why. Never "amazing" or "luxurious". |
| CTAs | Plain imperative. "カートに入れる", "ご購入手続きへ", "もっと見る". No hype verbs. |
| Sale messaging | Reason-given, never panicked. "わけあって、安い。" Explains the why; no countdown urgency. |
| Confirmation | Calm past-tense. "カートに追加しました". No emoji, no celebration. |
| Editorial / story | Reflective, essayistic — the "emptiness" voice. Talks about everyday life, not features. |
| Empty states | Honest and brief. "該当する商品はありません". Offers a quiet next step. |
| Error messages | Plain and blameless. States what to fix, no apology theater. |

**Forbidden register.** No superlatives ("最高", "革命的", "amazing", "luxury"), no urgency manipulation ("今だけ!急いで!"), no exclamation marks on routine CTAs, no emoji on product or checkout surfaces. MUJI never claims to be the best — claiming superiority contradicts the no-brand premise. The voice is "this will do," stated with calm conviction. Treating that forbidden-register list, including claiming-superiority-contradicts-the-no-brand-premise and the-voice-is-this-will-do, as source-stated §10 rather than as a separately published microcopy specification, is a derived editorial implementation inference from the verified surfaces; it is not MUJI-authored or a separately published UI specification.

Japanese labels stay byte-exact. English beside a Japanese string is a reading aid, not a replacement.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not MUJI-authored or a separately published UI specification.

- exact cubic-bezier values for `ease-enter` / `ease-exit` / `ease-standard` (unattributed; names kept)
- `focus-visible` visual treatments (named Focus `border #333333, no glow` on input is not that evidence)
- hover visual treatments beyond the recorded pairings (primary `#000000`, secondary `#f7f7f7`, brand `#6b0015`, product-card `#f7f7f7` tint)
