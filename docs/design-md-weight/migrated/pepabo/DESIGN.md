# GMO Pepabo (Inhouse) Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

GMO Pepabo (GMOペパボ株式会社) publishes **Inhouse**, an openly documented Japanese design system at `design.pepabo.com/inhouse/`. Catalog homepage identity is `https://pepabo.com/`. This contract covers the five first-party surfaces the source inspected live on 2026-06-17: the Inhouse documentation home at `https://design.pepabo.com/inhouse/`, the color Flavor page at `https://design.pepabo.com/inhouse/flavors/color/`, the Button component page at `https://design.pepabo.com/inhouse/components/button/`, the Textfield component page at `https://design.pepabo.com/inhouse/components/textfield/`, and the corporate site at `https://pepabo.com/`. Treating those five URLs as this reconstruction's token surfaces, and treating Flavor-swapped service UIs as the system's intended consumers rather than as captured token surfaces, is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

Inhouse is not a single visual identity — it is a generic, trend-resistant *prototype* engineered to be overwritten. The brand-swappable layer is called a **Flavor**: a collection of design tokens (Color, Sizing, Icon, Typography, Elevation) that any Pepabo service (minne, SUZURI, hosting/lolipop, color me shop) can swap in to repaint the same components in its own identity. Inhouse itself ships a base "pepper" flavor that is intentionally restrained — near-black ink (`#393c41`) on a clean white canvas (`#ffffff`), with grey scaffolding. The token architecture is **two-tier**: primitive value tokens hold raw values (`get-primitive-color($name: blue, $level: 600)` → `#1f7ccc`), and semantic tokens assign meaning by *intention* — Neutral (Pepper Gray), Informative/interactive (Pepper Blue), Positive (Pepper Green), Notice (Pepper Yellow), Negative (Pepper Red), Attention (Pepper Orange). The "Pepper" primitive ramps run from 50 to 900 in even steps. The single saturated color a designer reaches for most is **Pepper Blue 600 (`#1f7ccc`)** — the informative/interactive intention that paints links, focus rings, and primary affordances; live corporate surfaces resolve interactive text slightly deeper at `#0a62ad` / `#005bac`. The typography stack is **`YakuHanJP`, `Noto Sans JP`, `Open Sans`** — Latin set in Open Sans, Japanese in Noto Sans JP, with YakuHanJP layered on top purely to kern Japanese punctuation (約物). The scale is a tight 8-step ladder (XXS 11px → XXXL 32px) with a 16px (M) baseline, and line-heights snap to a **4px vertical grid** in three densities (comfort / normal / dense). Geometry is conservative: a 4px corner radius is the workhorse on buttons, inputs, and cards, with a 20px pill and full-round only for specific variants. Elevation is a two-level shadow scale (`rgba(0,0,0,0.12)` soft 1px lift, then a 4–6px float), with most surfaces sitting flat. The corporate `pepabo.com` site dramatizes this with a stark black hero ("人類のアウトプットを増やす" / "Increase humanity's output") and a signature mint accent (`#30f4c5`), but the underlying components are pure neutral Inhouse. The Flavor names, Sass signatures, hex values, type metrics, radii, and mission line in this paragraph are the source's own. Readings of Inhouse as deliberate neutrality, as a "convenient constraint" (便利な制約) meant to be overwritten, as a calm evenly-spaced palette rather than a few hand-picked brand hues, as unmistakably Japanese-product type, and as conservative geometry over a mostly-flat surface model, are a derived editorial implementation inference from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

GMO Pepabo, founded in **2003** in Fukuoka and headquartered in Tokyo as part of the GMO Internet Group, runs a portfolio of **creator and commerce services** — the handmade marketplace **minne**, the print-on-demand platform **SUZURI**, rental hosting (**lolipop!**, **ヘテムル**), domains (**ムームードメイン**), and the EC builder **カラーミーショップ**. Across that portfolio sat a recurring problem: every service rebuilt the same foundational UI from scratch, duplicating effort and drifting apart visually. Inhouse is Pepabo's answer. Publicly documented since **2021** (announced on the Pepabo Tech Portal, "ペパボのデザインシステムのドキュメントを公開します"), it consolidates the duplicated foundation into one shared, generalizable system — and crucially, makes it **multi-brand by construction**. Rather than impose one look, Inhouse stays a neutral prototype and exposes brand-swappable **Flavors** (Color, Sizing, Icon, Typography, Elevation) so minne and SUZURI can wear their own identities over identical, accessible components. The stated motivation is to free designers from foundational busywork so they can focus on differentiated, strategic design. What Inhouse refuses, visible in its design: a single imposed brand identity (the foundation is deliberately generic and trend-resistant), and rigid rule-enforcement (it positions itself as an *enabler*, a "convenient constraint," not a gatekeeper). What it embraces: a two-tier token system that keeps the core neutral while semantics carry meaning, Japanese-first typography (Noto Sans JP + YakuHanJP), a strict 4px grid, and "environmental honesty" — design that adapts naturally to the user's OS, browser, and media rather than fighting it. The source's closing note records the founding year and the 2021 documentation announcement as publicly documented facts rather than as statements quoted from a single verified Pepabo source in that turn. Connecting that history to the recurring duplicated-foundation problem, reading Inhouse as the answer, and carrying the refuses/embraces pairing as one unit with the rest of the paragraph, are a derived editorial implementation inference from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a captured documentation or corporate control the source records, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

- Consult Inhouse documentation at `design.pepabo.com` through the Top App Bar / sidebar nav items (Foundation, Inhouse, Components…).
- Inspect published Flavor and component pages — color tokens via `get-primitive-color($name, $level)` / `get-semantic-color($intention, $level)`, and the Button and Textfield pages.
- Read the corporate mission on `pepabo.com` ("人類のアウトプットを増やす").
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section is dropped rather than promoted, and no name, affiliation classification, or motivation is carried into this document or its sidecar. The source's persona header names, as publicly observable Inhouse user segments, "Pepabo product designers and engineers building across multiple service brands." Use that source wording only. Dropping that persona section rather than promoting it, carrying no affiliation classification or motivation, and using only that source wording, are derived editorial implementation inferences from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

### Distinctive traits

The list restates measured values and named APIs from the source. Classifying the list as that restatement, and the groupings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

- Neutral multi-brand prototype — a "convenient constraint" meant to be overwritten by per-brand **Flavors**
- Two-tier tokens: primitive `get-primitive-color($name, $level)` → semantic `get-semantic-color($intention, $level)`
- Intention-based color: Informative `#1f7ccc`, Positive `#1dc487`, Notice `#debf43`, Negative `#cc1f24`, Attention `#db7d42`
- Japanese-first font stack: `YakuHanJP` + `Noto Sans JP` + `Open Sans`, Roboto Mono for code
- 8-step type ladder XXS 11px → XXXL 32px, 16px baseline, line-heights on a 4px grid (comfort/normal/dense)
- Near-black ink (`#393c41`) for text instead of pure black — calm, neutral, accessible
- Conservative 4px radius workhorse; 20px pill + full-round only as variants
- Two-level elevation (`rgba(0,0,0,0.12)`) over a mostly-flat surface model
- Brand mint `#30f4c5` as the pepabo flavor key accent

### Principles

These 5 items are a derived editorial paraphrase of the published Inhouse About documentation as the source records it; they are not Pepabo-authored verbatim copy of that About page. The UI implications attached to them are a derived editorial implementation inference from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

1. **Enabler, not enforcer.** Inhouse is "a convenient constraint" that frees creativity rather than policing it. *UI implication:* offer sensible defaults and tokens, but let services extend and override; never hard-block a valid brand need.
2. **A living system.** The system is continuously updated as services push new use cases back into it. *UI implication:* treat components as evolving; design for extension points, not frozen specs.
3. **Neutral prototype.** Deliberately generic and trend-resistant so any brand can customize it. *UI implication:* keep the base flavor achromatic and quiet; carry brand color only through the Flavor layer.
4. **Typography-first.** Text drives communication and accessibility. *UI implication:* invest in the type scale and 4px-grid line-heights (Japanese-first); let typography, not decoration, structure the page.
5. **Environmental honesty.** Design adapts naturally to OS, browser, and media. *UI implication:* respect platform conventions and system fonts in the fallback stack; don't override what the environment does well.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

- Treat Inhouse as a neutral prototype — layer brand identity through a Flavor, not by hacking the base
- Use the two-tier tokens: primitive `get-primitive-color($name, $level)` then semantic `get-semantic-color($intention, $level)`
- Use Pepper Blue 600 (`#1f7ccc`) for interactive/informative affordances
- Map status to intentions: Positive `#1dc487`, Notice `#debf43`, Negative `#cc1f24`, Attention `#db7d42`
- Set the font stack `YakuHanJP`, `Noto Sans JP`, `Open Sans` and load YakuHanJP for Japanese punctuation kerning
- Keep line-heights on the 4px grid; pick a density (comfort/normal/dense) per context
- Use near-black ink (`#393c41`) for text instead of pure black
- Keep the 4px radius as the default; reserve 20px pill and full-round for specific variants

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

- Bake a single brand's color into the foundation — Inhouse must stay generic so every brand can overwrite it
- Reach for raw hex in product code — go through the primitive/semantic token functions
- Use pure black (`#000000`) for body text — that fill is the neutral base meant to be re-flavored
- Break the 4px grid with off-grid line-heights or spacing
- Add heavy chromatic shadows to the base — elevation is shallow and achromatic by design
- Spread the brand mint (`#30f4c5`) across the UI — it is a per-flavor key accent, not a general surface color
- Use a Latin-only font stack for Japanese text — Noto Sans JP + YakuHanJP carry CJK
- Treat the system as a rulebook — it is an enabler ("a convenient constraint"), not an enforcer

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
Every value in this section is a recorded measurement or published Flavor token carrying the domain it was observed in. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.canvas` and `tokens.colors.on-primary` as two keys that share `#ffffff`, keeping Pepper Blue 600 / Strong / Bright / Link as four unmerged blues, and reading intention names (Neutral, Informative, Positive, Notice, Negative, Attention) as the source's two-tier semantic layer rather than as a merged house palette, is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation. Motion is qualified separately below.

### Semantic color

**Primary / Interactive (Pepper Blue — Informative)**

| Role | Value | Token-set path | Recorded use |
|---|---|---|---|
| Pepper Blue 600 | `#1f7ccc` | `tokens.colors.primary` | Primary interactive color and the system's informative intention — links, focus, primary affordances. Catalog `primary_color` is `#1f7ccc`. |
| Pepper Blue Strong | `#0a62ad` | `tokens.colors.primary-strong` | Deeper interactive blue used for nav links and hovered states on live surfaces. |
| Pepper Blue Bright | `#3e93de` | `tokens.colors.primary-bright` | Lighter blue (Pepper Blue 500) for accents, illustration, and hover backgrounds. |
| Link | `#005bac` | `tokens.colors.link` | The resolved anchor color on the corporate site — a slightly desaturated interactive blue. |

**Neutral Ink & Surface (Pepper Gray)**

| Role | Value | Token-set path | Recorded use |
|---|---|---|---|
| Ink | `#393c41` | `tokens.colors.ink` | Pepper Gray 800 — primary text and heading color across all live surfaces. Near-black, never pure black. |
| Ink Strong | `#1f2124` | `tokens.colors.ink-strong` | Pepper Gray 900 — maximum-contrast text. |
| Body | `#585c63` | `tokens.colors.body` | Pepper Gray 700 — secondary text, nav labels, outlined-button text. |
| Muted | `#767b85` | `tokens.colors.muted` | Pepper Gray 600 — captions, metadata, tertiary text. |
| Faint | `#9297a1` | `tokens.colors.faint` | Pepper Gray 500 — disabled / lowest-emphasis labels. |
| Hairline | `#dee0e3` | `tokens.colors.hairline` | Pepper Gray 300 — borders, dividers, card outlines. |
| Surface | `#edeef0` | `tokens.colors.surface` | Pepper Gray 200 — filled inputs, tinted blocks. |
| Surface Soft | `#f7f8fa` | `tokens.colors.surface-soft` | Pepper Gray 100 — the softest section tint. |
| Canvas | `#ffffff` | `tokens.colors.canvas` | Page background, white cards, text on color/dark. |
| Ink Black | `#000000` | `tokens.colors.ink-black` | The neutral pepper button fill and the corporate hero canvas — a deliberate full-black, designed to be overwritten by a brand Flavor. |
| On Primary | `#ffffff` | `tokens.colors.on-primary` | Text/icons on filled color and black buttons. |

`tokens.colors.canvas` and `tokens.colors.on-primary` stay two keys that share `#ffffff`. `tokens.colors.body` `#585c63` stays the body/nav/outline-label role; it is also the outlined-button `fg` and is not merged into a single ink step.

**Semantic Intentions**

| Role | Value | Token-set path | Recorded use |
|---|---|---|---|
| Positive | `#1dc487` | `tokens.colors.positive` | Pepper Green 600 — success states, confirmations. |
| Notice | `#debf43` | `tokens.colors.notice` | Pepper Yellow 500 — warnings, caution. |
| Negative | `#cc1f24` | `tokens.colors.negative` | Pepper Red 600 — errors, destructive intent. |
| Negative Strong | `#b50b11` | `tokens.colors.negative-strong` | Pepper Red 700 — pressed/emphasized negative. |
| Attention | `#db7d42` | `tokens.colors.attention` | Pepper Orange 500 — attention/highlight intent. |

**Brand Accent (pepabo Flavor)**

| Role | Value | Token-set path | Recorded use |
|---|---|---|---|
| Brand Mint | `#30f4c5` | `tokens.colors.brand-mint` | The pepabo flavor key accent — the bright mint on brand badges and highlight chips (e.g. the "無料診断中" pill). |
| Brand Mint Deep | `#0e7365` | `tokens.colors.brand-mint-deep` | The deep teal companion used for mint-on-light text and emphasis. |

YAML token note, kept as the facts it names: Inhouse is a neutral multi-brand prototype; components render on the 'pepper' base flavor (black/grey, brand-swappable); primary = Pepper Blue 600 `#1f7ccc` (informative/interactive intention); interactive link on live sites is `#0a62ad` / `#005bac`; brand mint `#30f4c5` is the pepabo flavor key accent; component bg `#000000` / text `#393c41` are the neutral pepper defaults, designed to be overwritten per brand Flavor.

### Spacing

YAML `tokens.spacing`: `xxs: 4` · `xs: 8` · `sm: 12` · `base: 16` · `md: 24` · `lg: 32` · `xl: 48` · `xxl: 64`. Expressed as 4px, 8px, 12px, 16px, 24px, 32px, 48px, and 64px. Base unit: 4px (sizing tokens are 4px-grid aligned). Input/button padding lands on 8px/16px; line-heights snap to the same 4px grid for type-to-layout alignment.

Keeping those eight keys unmerged from type sizes, radii, and component heights that share a number — `tokens.spacing.xxs: 4` off `tokens.rounded.sm: 4`; `tokens.spacing.base: 16` off type M 16px and button font 16px; `tokens.spacing.md: 24` off Small button height 24px; `tokens.spacing.lg: 32` off XXXL 32px, pill height 32px, and Textfield Small height 32px; `tokens.spacing.xl: 48` off Textfield Large height 48px — is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

### Shape

YAML `tokens.rounded`: `sm: 4` · `pill: 20` · `full: 9999`.

- Small (4px): buttons, inputs, cards — the workhorse
- Pill (20px): rounded pill button variant
- Full (9999px): avatars, full-round chips

4px corners on buttons, inputs, and cards, the 20px pill, and full-round 9999 are named steps, not a universal radius scale for every Flavor. Reading those three keys as that split is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

### Elevation

| Level | Treatment | Token-set path | Use |
|---|---|---|---|
| Flat (Level 0) | `none` | `tokens.shadow.flat` | Most surfaces, inline content |
| Level 1 | `rgba(0,0,0,0.12) 0px -0.1px 1px 0px, rgba(0,0,0,0.12) 0px 1px 2px 0px` | `tokens.shadow.level1` | Buttons, resting cards — soft 1px lift. Accessed as `get-elevation-box-shadow($level)`. |
| Level 2 | `rgba(0,0,0,0.12) 0px 0px 4px 0px, rgba(0,0,0,0.12) 0px 4px 6px -2px` | `tokens.shadow.level2` | Raised cards, menus, popovers |

Inhouse keeps elevation deliberately shallow. The elevation flavor exposes a small set of `get-elevation-box-shadow($level)` tokens built on a uniform `rgba(0,0,0,0.12)` tint. A faint `-0.1px` top offset on level 1 gives buttons a barely-there top edge. Because the system is brand-neutral, shadows stay achromatic (pure black at low alpha) — any chromatic depth is a brand Flavor's choice, never baked into the foundation. Most surfaces sit flat; elevation is reserved for genuinely floating UI. Readings of that scale as a gentle neutral lift rather than dramatic depth, of the `-0.1px` offset as a barely-there top edge, and of achromatic shadows as a brand-neutral choice ("elevation stays achromatic by design"), are a derived editorial implementation inference from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation. The verified facts are the two box-shadow strings, `none`, and the Sass accessor.

### Motion

The source's closing note classes the §15 duration and easing tokens as illustrative conventions consistent with the system's shallow-elevation, neutral aesthetic: the public docs expose elevation tokens but not a published duration/easing scale, so those values are editorial defaults, not directly sourced Inhouse motion tokens. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, focus, button press |
| `motion-standard` | 200ms | Menu, popover, card/section reveal |
| `motion-slow` | 320ms | Page-level transitions |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to published Inhouse evidence, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — menus, sheets, cards |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or specification document, including the published Inhouse documentation — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and restrained, matching the shallow-elevation, neutral aesthetic — a system meant to disappear behind each brand's identity should not impose a strong motion personality.
- Elevation changes (level 1 → 2) pair with a brief `motion-standard / ease-enter` lift; interactive controls respond to press with a subtle opacity/scale shift.
- No bounce or spring in the pepper base — any expressive motion is a brand Flavor's choice. The source states this as a foundation motion rule.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the UI stays fully functional (environmental honesty).
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating Open Sans / Noto Sans JP / YakuHanJP as the live stack rather than as a substitute for an unobserved exclusive Pepabo family, treating the declared fallback stack as a fallback and not the brand face, and refusing to present a Latin-only stack as Japanese UI type, are derived editorial implementation inferences from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | Published Inhouse Flavor documentation names the type accessors `get-font-size($level)` / `get-line-height($level, $density)` and a `text()` mixin, and names sizes XXS–XXXL rather than "Heading 1". |
| Live computed surface-use | Inhouse docs compute the stack `"Open Sans", "Noto Sans JP", apple-system, "system-ui", Roboto, "Lucida Grande", Helvetica, Arial, sans-serif` (YakuHanJP prepended where punctuation kerning is enabled). Live H1 on the documentation home is 21px/700. |
| Kerning layer | `YakuHanJP` is loaded specifically to kern Japanese punctuation (約物), stacked ahead of Noto Sans JP. |
| Monospace | `Roboto Mono` — code and technical labels. |
| Official distributed asset | No Pepabo-exclusive distributed type family was verified. Open Sans, Noto Sans JP, YakuHanJP, and Roboto Mono are the named faces. |
| Declared fallback | `apple-system`, `"system-ui"`, Roboto, `"Lucida Grande"`, Helvetica, Arial, sans-serif sit behind the named faces. They are a fallback stack, not the brand face, and must not be presented as one. |

### Family

- **Latin:** `Open Sans` — YAML `tokens.typography.family.sans`
- **Japanese:** `Noto Sans JP` — YAML `tokens.typography.family.cjk`
- **Kerning layer:** `YakuHanJP` — YAML `tokens.typography.family.kerning`
- **Monospace:** `Roboto Mono` — YAML `tokens.typography.family.mono`
- **Full stack (live):** `"Open Sans", "Noto Sans JP", apple-system, "system-ui", Roboto, "Lucida Grande", Helvetica, Arial, sans-serif` (YakuHanJP prepended where punctuation kerning is enabled)

Treating that four-face split plus the live fallback stack as the current UI family on these captures, and refusing a Latin-only substitute for Japanese text, is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

### Type roles

Keeping those eight roles unmerged, keeping YAML `use` verbatim, keeping unitless line-heights as ratios beside the §3 px writings, and keeping M 16 / L 21 / XXXL 32 off spacing and radius steps that share a number, is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

**Sass functions, not named roles**: type is accessed via `get-font-size($level)` / `get-line-height($level, $density)` and a `text()` mixin — the system names sizes XXS–XXXL, never "Heading 1". Every line-height resolves to a multiple of 4px, in three densities (comfort / normal / dense). **16px baseline**: M = 16px is the document default and the reading size; headings step up to 700 weight, body stays 400. At M, densities are 28/24/20px. **Japanese-first kerning**: YakuHanJP is layered solely to tighten Japanese punctuation; the system treats Japanese legibility as a first-class concern (typography-first is a stated principle).

| Role | Font | Size | Weight | Line height (normal) | Token-set use | Notes |
|---|---|---:|---:|---:|---|---|
| XXXL | Open Sans / Noto Sans JP | 32px | 700 | 40px (1.25) | Largest display heading (XXXL) | YAML `tokens.typography.xxxl` |
| XXL | Open Sans / Noto Sans JP | 28px | 700 | 36px (1.29) | Page / section heading (XXL) | YAML `tokens.typography.xxl` |
| XL | Open Sans / Noto Sans JP | 24px | 700 | 32px (1.33) | Subsection heading (XL) | YAML `tokens.typography.xl` |
| L | Open Sans / Noto Sans JP | 21px | 700 | 24px (1.14) | Card / brand title (L) | YAML `tokens.typography.l`; live H1 = 21px/700 |
| M (baseline) | Open Sans / Noto Sans JP | 16px | 400 | 24px (1.50) | Body baseline (M), normal density 24px | YAML `tokens.typography.m`; densities 28/24/20px |
| S | Open Sans / Noto Sans JP | 14px | 400 | 20px (1.43) | Dense UI text / small button (S) | YAML `tokens.typography.s` |
| XS | Open Sans / Noto Sans JP | 12px | 400 | 16px (1.33) | Caption, small button label (XS) | YAML `tokens.typography.xs` |
| XXS | Open Sans / Noto Sans JP | 11px | 400 | 16px (1.45) | Fine print, smallest label (XXS) | YAML `tokens.typography.xxs` |

Unitless line-heights `1.25` / `1.29` / `1.33` / `1.14` / `1.50` / `1.43` / `1.33` / `1.45` stay ratios. The §3 px writings 40px / 36px / 32px / 24px / 24px / 20px / 16px / 16px sit beside them and do not replace them.

### Assets

- Catalog logo entry: favicon `https://www.google.com/s2/favicons?domain=pepabo.com&sz=128`. Reading that URL as a catalog identity pointer rather than as a Pepabo-hosted brand file is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.
- Icons come from the Icon flavor (swappable per brand), rendered as inline SVG.
- Avatars stay circular (9999px) at all sizes.
- Corporate hero uses the mission line "人類のアウトプットを増やす" white on the ink-black canvas.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source records default treatments for the token-set components below, plus a Focus ring on the default Textfield, a hover-target radius on nav items, and a surface-level state contract in its States section. A `Focus: #1f7ccc` interactive-blue ring on the default Textfield is a generic Focus observation, which is a different evidence type from a `focus-visible` treatment; the observation is kept on the Textfield's own record and no `focus-visible` row in this section carries a treatment value. Classifying that ring as a generic Focus observation rather than a focus-visible treatment, and keeping the observation on the Textfield record rather than on a focus-visible row, is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a YAML `Primitive type` only when the token set records that type on that component, labelling Hairline Card `not in the token set`, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component.

### Surface state contract

The source's state contract, preserved with its values and copy:

| State | Treatment |
|---|---|
| **Empty (list / collection)** | White canvas, single near-black `#393c41` line explaining there is nothing yet, with one interactive `#1f7ccc` action. Calm, no clutter. |
| **Empty (search, no results)** | Muted `#767b85` single line stating no matches; the query/filters stay visible above so the user can adjust scope. |
| **Loading (content fetch)** | Skeleton blocks on `#edeef0` surface at final dimensions, 4px radius. Shallow/flat pulse consistent with the low-elevation system. |
| **Loading (in-place refresh)** | Thin `#1f7ccc` interactive-blue progress indicator; previous content stays visible. |
| **Error (request failed)** | Negative intention: `#cc1f24` accent with a plain-language explanation and a retry — states what to do next, not just that something broke. |
| **Error (form validation)** | Field-level message below the Textfield in the negative tone; describes what is valid, not only "必須". |
| **Success (saved / submitted)** | Positive intention `#1dc487`; brief inline confirmation, next-step detail linked below. No celebratory emoji. |
| **Skeleton** | `#edeef0` blocks at final dimensions, 4px radius, flat pulse (shallow elevation). |
| **Disabled** | Faint `#9297a1` text on a reduced-emphasis surface; interactive controls fade rather than change hue, preserving the token read. |

### Primary (neutral pepper)

- Role: Neutral pepper primary action
- Primitive type: `button` · YAML `tokens.components.button-primary.type: button` · Kind: interactive
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Height: 40px
- Font: 16px / 400 Open Sans
- Shadow: `level1` — `rgba(0,0,0,0.12) 0px -0.1px 1px 0px, rgba(0,0,0,0.12) 0px 1px 2px 0px`
- Token-set use: Neutral pepper primary action (保存); brand flavor overwrites bg
- Size scale (height / font), kept on this control family rather than as extra token-set records: Small 24px / 12px · Medium 32px / 14px · Large 40px / 16px. The medium (S) size is 32px height / 14px.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried, see the evidence boundary above |
| disabled | applicable | Declared surface treatment: faint `#9297a1` text on a reduced-emphasis surface; controls fade rather than change hue |
| loading | applicable | The control commits an action (保存); the surface contract declares an in-progress treatment |
| error | applicable | The control commits an action; the surface contract declares a request-failed treatment with retry |
| success | applicable | The control commits an action; the surface contract declares a saved/submitted confirmation in Positive `#1dc487` |

### Outlined / Secondary

- Role: Secondary/outlined action on the neutral flavor
- Primitive type: `button` · YAML `tokens.components.button-outline.type: button` · Kind: interactive
- Background: `#ffffff`
- Text: `#585c63`
- Border: 1px solid #585c63
- Radius: 4px
- Height: 40px
- Font: 16px / 400 Open Sans
- Token-set use: Secondary/outlined action on neutral flavor
- A heavier variant uses a 2px border

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | Button control; declared faint `#9297a1` disabled treatment |
| loading | applicable | The control commits a secondary action; the surface contract declares an in-progress treatment |
| error | applicable | The control commits an action; the surface contract declares a request-failed treatment |
| success | applicable | The control commits an action; the surface contract declares a saved/submitted confirmation |

### Pill

- Role: Rounded pill button (compact / icon-led actions, e.g. corporate-site SNS chips)
- Primitive type: `button` · YAML `tokens.components.button-pill.type: button` · Kind: interactive
- Background: `#000000`
- Text: `#ffffff`
- Radius: 20px
- Height: 32px
- Font: 16px / 400 Open Sans
- Token-set use: Rounded pill button variant (icon / compact)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | Button control; declared faint `#9297a1` disabled treatment |
| loading | applicable | Compact/icon-led actions can commit in place; the surface contract declares an in-progress treatment |
| error | applicable | Compact/icon-led actions can commit in place; the surface contract declares a request-failed treatment |
| success | applicable | Compact/icon-led actions can commit in place; the surface contract declares a saved/submitted confirmation |

### Small (XS size)

- Role: Smallest button size
- Primitive type: `button` · YAML `tokens.components.button-small.type: button` · Kind: interactive
- Background: `#000000`
- Text: `#ffffff`
- Radius: 4px
- Height: 24px
- Font: 12px / 400 Open Sans
- Token-set use: Small (XS) button size

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | Button control; declared faint `#9297a1` disabled treatment |
| loading | applicable | The control commits an action; the surface contract declares an in-progress treatment |
| error | applicable | The control commits an action; the surface contract declares a request-failed treatment |
| success | applicable | The control commits an action; the surface contract declares a saved/submitted confirmation |

### Textfield (default)

- Role: Default text input
- Primitive type: `input` · YAML `tokens.components.textfield.type: input` · Kind: interactive
- Background: `#ffffff`
- Text: `#393c41`
- Radius: 4px
- Padding: 8px 16px
- Height: 40px
- Font: 16px / 400 Open Sans
- Observed Focus (generic Focus, not a `focus-visible` treatment): `#1f7ccc` interactive blue ring. Classifying this ring as a generic Focus observation rather than a focus-visible treatment is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.
- Hairline rendered via inset border on `#dee0e3`
- Token-set use: Default Textfield; border drawn via inset, focus blue #1f7ccc
- Size scale (height / font / padding), kept on this control family: Small 32px / 14px / 4px 12px · Medium 40px / 16px / 8px 16px · Large 48px / 18px / 10px 24px

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; no treatment carried |
| disabled | applicable | Input control; declared faint `#9297a1` disabled treatment |
| loading | applicable | A field can wait on an in-place refresh; the surface contract declares a thin `#1f7ccc` progress indicator with previous content visible |
| error | applicable | Declared field-level message below the Textfield in the negative tone; describes what is valid, not only "必須" |
| success | applicable | Form field; visual treatment omitted |

### Textfield (filled / underline)

- Role: Filled variant with a bottom-underline affordance
- Primitive type: `input` · YAML `tokens.components.textfield-filled.type: input` · Kind: interactive
- Background: `#edeef0`
- Text: `#393c41`
- Radius: `4px 4px 0px 0px`
- Padding: 8px 16px
- Height: 40px
- Font: 16px / 400 Open Sans
- Token-set use: Filled / underline Textfield variant

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; no `focus-visible` treatment carried |
| disabled | applicable | Input control; declared faint `#9297a1` disabled treatment |
| loading | applicable | A field can wait on an in-place refresh; treatment omitted |
| error | applicable | Form field; the surface contract declares field-level validation on Textfield |
| success | applicable | Form field; visual treatment omitted |

### Elevated Card

- Role: Standard content card at elevation level 1
- Primitive type: `card` · YAML `tokens.components.card.type: card`
- Background: `#ffffff`
- Radius: 4px
- Shadow: `level1` — `rgba(0,0,0,0.12) 0px -0.1px 1px 0px, rgba(0,0,0,0.12) 0px 1px 2px 0px`
- Token-set use: Elevated content card, 1px #dee0e3 hairline option
- Kind and applicability map omitted — the source supplies no interaction evidence for the container.

### Hairline Card

- Role: Flat card separated by a hairline rather than elevation
- Primitive type: not in the token set
- Background: `#ffffff`
- Border: 1px solid `#dee0e3`
- Radius: 4px
- Kind and applicability map omitted — the source supplies no interaction evidence for the container. Withholding kind and a map because the source supplies no interaction evidence, and labelling this record `not in the token set`, is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

### Brand Mint Pill

- Role: pepabo-flavor highlight pill
- Primitive type: `badge` · YAML `tokens.components.badge-positive.type: badge`
- Kind: non-interactive — a status pill, not a control
- Background: `#30f4c5`
- Text: `#0e7365`
- Radius: 4px
- Font: 14px / 400 Open Sans
- Token-set use: Brand mint status pill (e.g. 無料診断中)
- Use: pepabo-flavor highlight pill (e.g. "無料診断中")

### Negative Badge

- Role: Error / negative-intention status badge
- Primitive type: `badge` · YAML `tokens.components.badge-negative.type: badge`
- Kind: non-interactive — a status mark, not a control
- Background: `#cc1f24`
- Text: `#ffffff`
- Radius: 4px
- Font: 12px / 400 Open Sans
- Token-set use: Negative / error intention badge

### Navigation (App Bar)

- Role: Top App Bar / sidebar nav item
- Primitive type: `tab` · YAML `tokens.components.nav-link.type: tab` · Kind: interactive
- Background: `#ffffff`
- Text: `#585c63`
- Active: `#393c41` text at weight 700 — YAML `active: "text #393c41 weight 700"`
- Font: 16px / 400 Open Sans
- Radius: 4px on hover target
- Token-set use: Top App Bar / sidebar nav item
- Use: Top App Bar / sidebar nav items (Foundation, Inhouse, Components…)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web nav item; 4px radius on the hover target is recorded; no distinct hover color is promoted |
| focus-visible | applicable | Keyboard-reachable nav item; no treatment carried |
| disabled | applicable | A nav item can be gated; declared faint `#9297a1` disabled treatment |
| loading | not-applicable | A Top App Bar / sidebar nav item selects a documentation destination; it commits no operation in place |
| error | not-applicable | The same nav-item role has no in-place operation whose failure can be reported on the control |
| success | not-applicable | The same nav-item role has no in-place operation whose completion can be confirmed on the control |

### Avatar

- Role: Circular user avatar
- Primitive type: `avatar` · YAML `tokens.components.avatar.type: avatar`
- Kind: non-interactive — a user image, not a control
- Radius: 9999px (circular)
- Token-set use: Circular user avatar (Avatar component)

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Spacing system

Base unit: 4px. Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. Input/button padding lands on 8px/16px; line-heights snap to the same 4px grid for type-to-layout alignment. **Calm neutrality**: the base flavor is intentionally quiet so brands can layer identity on top — whitespace carries structure, not decoration. **Grid-locked rhythm**: 4px sizing grid + 4px-multiple line-heights keep vertical rhythm consistent across densities. **Density options**: comfort / normal / dense line-heights let the same component breathe or compact depending on context. Readings of whitespace as carrying structure, not decoration, and of the 4px pair as grid-locked rhythm, are a derived editorial implementation inference from the verified surfaces; they are not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

### Grid & container

- Documentation chrome: a fixed left sidebar nav (App Bar) + centered prose column on `design.pepabo.com`
- Components demonstrated in neutral cards on a white canvas so the base flavor never competes with content
- Corporate `pepabo.com`: full-bleed black hero band, then white content sections with the mint accent

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column, sidebar nav collapses to a top App Bar / drawer |
| Tablet | 768-1024px | Moderate padding, 2-up component grids |
| Desktop | >1024px | Fixed left sidebar + centered content column |

### Touch targets

- Medium controls at 40px height (button / textfield) meet comfortable tap sizing
- Small (24px) and S (32px) sizes reserved for dense, pointer-led contexts
- App Bar items at ~40–48px row height

### Collapsing strategy

- Documentation sidebar (Foundation / Inhouse / Components) collapses into a drawer on mobile
- Component demos reflow from multi-column grids to single column
- Type scale steps down with viewport but stays on the 4px grid
- Corporate black hero maintains full-bleed treatment, reduces internal padding

### Image behavior

- Icons come from the Icon flavor (swappable per brand), rendered as inline SVG
- Avatars stay circular (9999px) at all sizes
- Cards keep the 4px radius across breakpoints

The breakpoint table, the touch-target sizes, and the collapsing rules are the source's own responsive contract, stated as intended behavior at each width. The token values elsewhere in this document come from one live inspection rather than from a separate capture at each breakpoint. Stating those behaviors as the source wrote them, rather than as a measured cross-viewport specification from this migration, is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Inhouse's voice — visible in its own documentation and engineering writing — is **collegial, pragmatic, and quietly principled**. It frames the design system as a teammate's tool, not a corporate mandate: the foundation is described as "a convenient constraint" (便利な制約) and an *enabler, not an enforcer*. Copy is plain, technical when it needs to be (Sass function signatures shown inline), and humble about trade-offs. The corporate mission line "人類のアウトプットを増やす" ("Increase humanity's output") sets the register: ambitious in scope, plainly stated, never hyped. Naming that register and tying it to the mission line is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation. The tone table below is the source's own, and its characterizations share that class. The samples after it are the verbatim strings the whole reading is built on.

| Context | Tone |
|---|---|
| Design-system docs | Collegial and instructive. Explains the *why* (neutral prototype) before the *how* (token functions). |
| Engineering blog (tech.pepabo.com) | Peer-to-peer, candid about trade-offs and iteration; shares reasoning openly. |
| Component reference | Terse, factual: token name, value, usage. No marketing. |
| Corporate / mission | Declarative and broad. "人類のアウトプットを増やす." Confident, not boastful. |
| Brand surfaces (minne/SUZURI) | Warm, maker-friendly, creator-celebrating — the flavor layer carries this, not Inhouse itself. |

**Voice samples (verbatim from live surfaces):**

- "人類のアウトプットを増やす" — corporate mission, pepabo.com hero.
- "Inhouse" / "Foundation" / "Flavors" / "Components" — the documentation's own structural vocabulary.
- "get-primitive-color($name, $level)" / "get-semantic-color($intention, $level)" — the token API shown inline as the canonical access pattern.

**Forbidden register**: rigid rule-enforcement language, hype/superlatives, brand-specific color baked into neutral foundation copy, jargon left unexplained to non-designers on the engineering blog.

The captured documentation and corporate surfaces are Japanese-first with Latin companions. Locale claims beyond that Japanese-first stack, the YakuHanJP punctuation layer, and the verbatim samples above are omitted. Omitting locale claims beyond that Japanese-first stack, the YakuHanJP punctuation layer, and those verbatim samples is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

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

These decisions are unnamed values, not permissions to invent. The list names only fields the source itself left unresolved. Reading the list as a catalog of those unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Pepabo-authored or taken from a separately published UI specification, including the published Inhouse documentation.

- the exact easing curves behind `ease-enter`, `ease-exit`, and `ease-standard`, and the per-component motion evidence that the Foundations promotion condition requires before any curve is promoted
- hover visual treatments on controls other than the color-role note that Pepper Blue Strong `#0a62ad` is used for hovered states on live surfaces, and the 4px hover-target radius on nav items
- the `focus-visible` treatment of all controls; the Textfield `#1f7ccc` ring is a generic Focus observation
- Hairline Card's token-set type, which the source lists in §4 without a YAML type
- getdesign.md / styles.refero.design records (the source names both lookups as no usable record)
