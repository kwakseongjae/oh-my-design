# kintone Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

kintone (キントーン) is Cybozu's no-code/low-code work platform — the tool a non-engineer reaches for when they want to turn a messy spreadsheet and an email thread into a real business application. This contract covers the surfaces the source names for tokens: the live marketing site at `https://kintone.cybozu.co.jp` (white canvas, KIN Red CTAs, **みんな、つくれる** tagline), the official Kintone Brand Guidelines PDF at `https://kintone.com/en-us/files/Brand-Guidelines.pdf` (KIN Red `#ef3f24` Pantone 485 and the four named secondary hues), and the live kintone product UI the source uses for derived neutrals and component geometry. The YAML token set is `prose-derived`. kintone Help theme/header color docs record the default red header theme and admin re-theming. Every value stays attached to the surface or evidence class that established it. Reading those named marketing, Brand Guidelines, product-UI, and Help surfaces as this contract's evidence classes, keeping every value attached to the surface or evidence class that established it, and refusing to treat Brand Guidelines named hues as a substitute for product-UI geometry, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification.

The marketing site opens on a generous white canvas (`#ffffff`) with near-black text (`#333333`) and a single, unmistakable accent: **KIN Red** (`#ef3f24`), a warm vermilion. The whole atmosphere says "everyone can build this" — the literal tagline is **みんな、つくれる** ("Everyone can create"). Red is paired with a playful secondary palette of four named hues that color-code app categories, illustration spots, and the famous round-cornered "app icon" tiles. Typographically, the product UI ships with **Meiryo** as the default face, falling back through Hiragino Kaku Gothic and Noto Sans JP. The hex values, the tagline, the four named hues, the app-tile motif, and the Meiryo stack are recorded. Calling the atmosphere approachable and unintimidating, calling the red closer to Japanese-flag red than to alarm red, calling the secondary palette cheerful and modular like a box of building blocks, and reading the stack as Japanese-first screen-optimized legibility rather than an exotic custom typeface, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. kintone is the flagship work platform of **Cybozu, Inc. (サイボウズ株式会社)**, a Tokyo-based software company founded in **1997** that built its name on Japanese groupware — Cybozu Office and Garoon — before launching kintone in **2011** as a no-code/low-code platform for building business applications. Cybozu's corporate mission is **"チームワークあふれる社会を創る"** ("Create a society overflowing with teamwork"), and kintone is the product expression of that mission: give every team — not just engineers — the power to turn their own messy, spreadsheet-and-email workflows into real, shared applications. The founding insight behind kintone is a rejection of the idea that building software must be the exclusive territory of IT departments and vendors. In a Japanese business culture historically dependent on Excel attachments emailed around an office and SIer (system integrator) contracts for any custom tool, kintone's pitch was radical: **みんな、つくれる** — the sales lead, the HR coordinator, the factory floor manager can each assemble the app they need by dragging fields onto a form. No code, no procurement cycle, no waiting on IT. That democratizing thesis is why the brand looks the way it does. The warm KIN Red is approachable and energetic, not the cold institutional blue of legacy enterprise IT. The playful secondary palette and rounded app-tile motif make software construction feel like assembling building blocks. The friendly mascot and the plain, jargon-free voice all reinforce a single message: this is for everyone, and you can do it. kintone has grown into a platform used by tens of thousands of organizations across Japan and internationally (Cybozu operates kintone in the US and Southeast Asia as well), spanning local governments, manufacturers, retailers, and small businesses. What kintone refuses: the gatekept, IT-only aesthetic of legacy enterprise software; the cold blue palette that signals "for engineers"; dense, intimidating interfaces that assume technical literacy. What it embraces: warmth, modularity, plain language, and the conviction that the people closest to the work are the ones who should be able to build the tools for it. The year 1997, the 2011 launch, Cybozu Office and Garoon, the mission line, the Excel-and-SIer founding insight, the US and Southeast Asia span, the refusal pair, and that closing embrace sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-thesis narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification. Each names a surface or control the source records.

- Start from `無料ではじめる` on the marketing site at `https://kintone.cybozu.co.jp`.
- Assemble an app from fields on the launcher tile grid (`アプリを作る`).
- Save a record (`保存`) and scan the record list view.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its four entries as fictional archetypes informed by publicly described kintone user segments, not individual people, so those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording outside that section, is the audience at a group level: a non-engineer; a sales team, a city government office, or a manufacturing floor; every team — not just engineers; and local governments, manufacturers, retailers, and small businesses. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not kintone-authored or a separately published UI specification.

- KIN Red (`#ef3f24`) as the singular brand primary — warm vermilion, not corporate blue
- Friendly four-color secondary palette: Shamrock green, Cerulean, Aloe teal, Sunshine yellow
- Meiryo / Hiragino / Noto Sans JP gothic stack — Japanese-first, screen-optimized legibility
- White canvas, near-black `#333333` body text, soft gray dividers
- Rounded, tile-like "app icon" motif — modular, block-by-block construction
- Generous whitespace and large friendly CTAs — "anyone can do this" reassurance
- Restrained, mostly flat depth — light cards over heavy shadows

### Principles

These eight items are a derived editorial implementation inference from the verified surfaces; they are not kintone-authored or a separately published UI specification. The source states them in its own Principles section.

1. **Everyone can create.** The entire design exists to make a non-engineer feel capable. If a screen would intimidate a first-time builder, it is wrong. Plain verbs, visible next steps, no jargon.
2. **Red is welcome, not alarm.** KIN Red is the friendly, energetic brand hero — used for primary actions and brand moments. Error/destructive states are deliberately a different, cooler red so the brand color never feels like a scolding.
3. **Modularity is the metaphor.** Apps are built from fields; the launcher is a grid of tiles; categories are color-coded blocks. The visual language mirrors the product's "assemble it yourself" reality.
4. **Borders before shadows.** Structure comes from `#dddddd` rules and color blocks, not heavy elevation. The product is flat and calm because it is a daily work surface, not a demo.
5. **Open chrome, dense work.** Marketing and onboarding are spacious and reassuring; record lists and tables are tight and scannable. Density follows commitment — beginners get room, power users get data.
6. **Japanese-first legibility.** Typography, line-height, and font stacks assume kanji/kana render first. Generous 1.7 line-height for body is non-negotiable. Latin is a co-citizen, never the default.
7. **Two weights, plain faces.** 400 and 700 in a humanist gothic stack. No exotic display type — legibility for long field labels and dense records wins over branded letterforms.
8. **Warmth without hype.** The mascot, the soft red, the encouraging copy add warmth; superlatives and revolution-talk are banned. Confidence is shown by being easy, not by shouting.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not kintone-authored or a separately published UI specification.

- Use KIN Red (`#ef3f24`) for the primary CTA and brand moments — it is the one hero color
- Pair red with the named secondary hues (Shamrock, Cerulean, Aloe, Sunshine) for category color-coding
- Use the Meiryo → Hiragino → Noto Sans JP stack for Japanese-first legibility
- Keep body line-height generous (1.7) for dense Japanese text
- Use bold (700) labels above regular (400) field values — the record rhythm
- Use 4px radius on inputs/buttons, 6-8px on cards/tiles
- Rely on `#dddddd` borders for structure; keep shadows subtle
- Use the rounded app-tile motif for launcher and category grids

### Avoid

The source states these seven as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not kintone-authored or a separately published UI specification.

- Don't treat the brand red as an error red — destructive states lean slightly darker/cooler (`#e74c3c`/`#d63b22`)
- Don't default to corporate blue as the primary — kintone's identity is red
- Don't tighten Japanese body line-height below 1.6 — kanji needs the air
- Don't use heavy or multi-layer colored shadows — kintone is flat and neutral
- Don't use thin or extra-bold font weights — only 400 and 700 render cleanly in the stack
- Don't crowd the marketing CTAs — openness is the "anyone can build this" signal
- Don't use all four secondary hues at once on a single surface — pick one or two for color-coding

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping Brand Guidelines named hues beside the YAML keys that carry the same hex, keeping `#bbbbbb` / `#e8e8e8` / `#fafafa` on the prose roles that name them rather than inventing YAML keys, and keeping the two-key same-hex pairs `tokens.colors.primary` / `tokens.colors.brand`, `tokens.colors.canvas` / `tokens.colors.on-primary`, `tokens.colors.accent-green` / `tokens.colors.success`, `tokens.colors.accent-cerulean` / `tokens.colors.info`, and `tokens.colors.accent-sunshine` / `tokens.colors.warning` as two keys each rather than collapsing a shared hex, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification. The hex values and recorded uses are the source's own. Named brand hues and primary red are sourced directly from the official Brand Guidelines; the source footer records that the neutral gray scale and component geometry are derived from the live kintone product UI and marketing site.

- **KIN Red** (`#ef3f24`): The brand primary. Pantone 485, CMYK 0/100/95/0, RGB 239/63/36. Logo, primary CTAs, key links, brand moments, the default app header theme. Warm vermilion — energetic and friendly, never an "error red." Token-set path `tokens.colors.primary`. `tokens.colors.brand` is the same hex on a second key.
- **KIN Red Hover** (`#d63b22`): Darkened ~8% for primary hover. Token-set path `tokens.colors.primary-hover`. The source also writes `#d63b22` as the darker/cooler destructive-emphasis reading of Error / Danger; that second use stays on the Error role and on Danger hover. It is not a collapse of hover and danger into one key.
- **Pure White** (`#ffffff`): Page background, card surfaces, content canvas. Token-set path `tokens.colors.canvas`. `tokens.colors.on-primary` is the same hex on a second key (text on KIN Red).
- **Near Black** (`#333333`): Primary heading and body text. A soft, warm dark gray rather than pure `#000000`. Token-set path `tokens.colors.foreground`.
- **KIN Shamrock** (`#3fa862`): Green. Success, "create/add" affordances, green-themed app icons and illustration spots. Token-set path `tokens.colors.accent-green`. `tokens.colors.success` is the same hex on a second key.
- **KIN Cerulean** (`#00afec`): Bright sky blue. Informational accents, links in product chrome, blue-themed app tiles. Token-set path `tokens.colors.accent-cerulean`. `tokens.colors.info` is the same hex on a second key.
- **KIN Aloe** (`#00afaa`): Teal. Alternative categorization, secondary highlights, teal-themed tiles. Token-set path `tokens.colors.accent-aloe`.
- **KIN Sunshine** (`#ffba00`): Warm yellow. Attention, highlights, pinned/featured states, yellow-themed tiles. Token-set path `tokens.colors.accent-sunshine`. `tokens.colors.warning` is the same hex on a second key.
- **Error / Danger** (`#e74c3c` → use `#d63b22` for destructive emphasis): Validation errors, delete confirmations. Kept distinct in tone from the friendly brand red by leaning slightly darker/cooler. Token-set path `tokens.colors.error`.
- **Gray 700 / Body** (`#555555`): Body text, descriptions. Token-set path `tokens.colors.body`.
- **Gray 600 / Muted** (`#666666`): Secondary labels, field captions. Token-set path `tokens.colors.muted`.
- **Gray 500 / Placeholder** (`#999999`): Placeholder text, disabled labels, metadata. Token-set path `tokens.colors.placeholder`.
- **Gray 400 / Border Strong** (`#bbbbbb`): Disabled icons, faint borders; emphasized borders, focused container edges. No YAML color key.
- **Gray 300 / Hairline** (`#dddddd`): Default borders, dividers, table rules, card borders, input outlines. Token-set path `tokens.colors.hairline`.
- **Gray 200** (`#e8e8e8`): Input outlines, row hover separators. No YAML color key.
- **Gray 100 / Surface** (`#f5f5f5`): Secondary backgrounds, table header fills, hovered rows, form section backgrounds, list zebra rows. Token-set path `tokens.colors.surface`.
- **Gray 50** (`#fafafa`): App canvas tint, subtle zebra striping, table row hover. No YAML color key.
- **Header Surface**: `#ef3f24` (default theme) — the product header bar; admins may re-theme.
- **Overlay Scrim**: `rgba(0,0,0,0.5)`. Modal/dialog backdrops.

Reading KIN Red as never an error red, keeping `#d63b22` on both primary-hover and destructive emphasis without collapsing the two roles, and keeping Gray 400 / Gray 200 / Gray 50 on their prose roles rather than inventing YAML keys, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 20 | `tokens.spacing.lg` |
| xl | 24 | `tokens.spacing.xl` |
| xxl | 32 | `tokens.spacing.xxl` |
| section | 64 | `tokens.spacing.section` |

The source also writes a base unit of `4px` (UI) with `8px` scaling for layout, common values 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 64px, form field vertical rhythm 16px between fields and 24px between sections, and marketing section padding 64px+ top/bottom on desktop. `tokens.spacing.xs: 4` is not `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.lg: 8` and not the 8px cell padding. `tokens.spacing.md: 12` is not a type-role 12. `tokens.spacing.base: 16` is not a type-role 16 and not card-tile padding `16px`. `tokens.spacing.lg: 20` is not Standard Card padding `20px` and not Heading 2 `20`. `tokens.spacing.xl: 24` is not dialog padding `24px` and not Heading 1 `24`. `tokens.spacing.xxl: 32` is not Display Large `32`. `tokens.spacing.section: 64` is not a type-role size. The `40px` common-value step has no YAML spacing key; it stays as that prose common value. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 4 | `tokens.rounded.sm` |
| md | 6 | `tokens.rounded.md` |
| lg | 8 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

The source's prose radius scale is Compact (`4px`) for buttons, inputs, pills-base, and flat sections; Standard (`6px`) for cards, panels, and dialogs base; Comfortable (`8px`) for app tiles, modals, and featured containers; Pill (`9999px`) for toggles, status pills, and avatar chips. `tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.md: 6` is not a spacing step. `tokens.rounded.lg: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.full: 9999` is a YAML step; it is not a component `9999px` written as `9999px`, and it is not the status-pill `12px` radius. Status pills in the component record are `12px`; the scale's Pill `9999px` writing stays on the scale and on the toggle. Keeping those local radii on their components, and keeping `full: 9999` on its own key path beside the pill `12px`, is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, form sections, table rows |
| Subtle (Level 1) | `0 1px 3px rgba(0,0,0,0.08)` | Cards, app tiles at rest, widgets. Token-set path `tokens.shadow.subtle`. |
| Raised (Level 2) | `0 4px 12px rgba(0,0,0,0.12)` | Hovered tiles, dropdowns, popovers. Token-set path `tokens.shadow.raised`. |
| Elevated (Level 3) | `0 4px 12px rgba(0,0,0,0.18)` | Toasts, floating action panels. Token-set path `tokens.shadow.elevated`. |
| Modal (Level 4) | `0 8px 24px rgba(0,0,0,0.20)` | Dialogs, full modals. Token-set path `tokens.shadow.modal`. |

kintone stays mostly flat. Shadows exist to signal "this is liftable/clickable" (tiles, dropdowns) or "this is on top" (modals, toasts), never for decoration. All shadows are neutral black at low opacity; there are no colored or multi-layer atmospheric shadows. The strongest depth cue in the product is actually the header color block and border lines, not elevation. Borders (`#dddddd`) do most of the structural work that shadows do elsewhere. Modal backdrops use a flat `rgba(0,0,0,0.5)` scrim, not a blur. The product header stays opaque; no scroll-triggered translucency. `tokens.shadow.raised` is `0 4px 12px rgba(0,0,0,0.12)`. `tokens.shadow.elevated` is `0 4px 12px rgba(0,0,0,0.18)`. Same blur, different opacity; they are two keys. Reading that stack as work-tool elevation rather than decorative lift, and keeping raised and elevated as two keys, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification.

### Motion

Durations the source records, kept as duration tokens. They are not easing curves.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Checkbox/toggle state commit, selection ticks |
| `motion-fast` | 150ms | Hover, focus, button press, tooltip reveal |
| `motion-standard` | 250ms | The default — dropdown open, dialog fade-in, tab switch |
| `motion-slow` | 350ms | Modal entrance, page-level panel transitions |

Unsourced easing curves from the catalog template (`ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`) are omitted at the curve-value boundary. Signature motions the source names stay, with their duration tokens and recorded geometry; the omitted curve names are not restored as promoted values. **App tile lift.** On hover, a launcher tile raises its shadow from `0 1px 3px rgba(0,0,0,0.08)` to `0 4px 12px rgba(0,0,0,0.12)` over `motion-fast` with a 1-2px translateY. **Dialog entrance.** Modals fade and scale from 98% over `motion-slow`, with the backdrop scrim fading `rgba(0,0,0,0)` → `rgba(0,0,0,0.5)` in sync. Dismissal uses `motion-fast` — leaving is quicker than arriving. **Toast slide.** Confirmation toasts slide up from `y+12px` and fade in over `motion-standard`, hold, then fade out. No bounce — kintone's motion is calm and unfussy, matching a work tool. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all `motion-*` tokens collapse to `motion-instant`. Slides and scales become instant fades. The product stays fully usable; nothing depends on animation to be understood.

Omitting the three unsourced curves, keeping the four duration rows as duration tokens rather than easing curves, keeping the four signature motions, and holding the five-kind per-component promotion gate rather than treating a single official curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not kintone-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | The official Brand Guidelines PDF publishes KIN Red and the four named hues. It does not publish a universal current typography token. |
| Live marketing surface-use | The source names `https://kintone.cybozu.co.jp` as the live marketing site for the white canvas, KIN Red CTAs, and **みんな、つくれる**. It does not publish a universal current typography token. |
| Product-UI family | **Meiryo** is the source's recorded default product-UI face, with Hiragino Kaku Gothic and Noto Sans JP fallbacks (Tier 2 community font references). Token-set path `tokens.typography.family.sans` is `Meiryo`. |
| Official distributed asset | No kintone-exclusive distributed type family was verified. |
| Declared-only | Latin / marketing stack `"Helvetica Neue", Arial, "Noto Sans JP", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif` remains declared for marketing surfaces. |
| Monospace | `"SFMono-Regular", Consolas, "Courier New", monospace` for code fields and formula display. Token-set path `tokens.typography.family.mono`. |
| Sibling live computed | The sibling inspect of kintone.cybozu.co.jp records sibling-only family and color writings on that marketing pass. Those sibling-only writings are not promoted here. |

### Family

- **Primary (JP UI):** `"メイリオ", Meiryo, "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Noto Sans JP", sans-serif`. Token-set path `tokens.typography.family.sans` is `Meiryo`.
- **Latin / Marketing:** `"Helvetica Neue", Arial, "Noto Sans JP", "Hiragino Kaku Gothic ProN", Meiryo, sans-serif`
- **Monospace:** `"SFMono-Regular", Consolas, "Courier New", monospace` (code fields, formula display)

Do not replace an unavailable or unobserved brand type with Meiryo and call the result a different claimed family. Do not present the sibling Roboto reading as the product-UI face. That fallback-never-substitute reading is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). The parenthetical px figures are the source §3 spelling, not a replacement of the YAML ratio. Token-set `use` strings are kept verbatim; where §3 writes a longer use, that longer writing stays beside the YAML use. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 px spellings on separate readings, and taking the longer of two writings when YAML and §3 differ in length, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---|---|---|
| Display Hero | Meiryo stack | 40 (`40px`) | 700 | 1.3 | 0.02em | Marketing hero みんな、つくれる |
| Display Large | Meiryo stack | 32 (`32px`) | 700 | 1.35 | 0.02em | Section titles, landing headers |
| Heading 1 | Meiryo stack | 24 (`24px`) | 700 | 1.4 | normal | Page titles, app names |
| Heading 2 | Meiryo stack | 20 (`20px`) | 700 | 1.45 | normal | Card headers, form section titles |
| Heading 3 | Meiryo stack | 18 (`18px`) | 700 | 1.5 | normal | Sub-sections, field group labels |
| Subtitle | Meiryo stack | 16 (`16px`) | 700 | 1.5 | normal | List headers, dialog titles |
| Body Large | Meiryo stack | 16 (`16px`) | 400 | 1.7 | normal | Intro copy, descriptions |
| Body | Meiryo stack | 14 (`14px`) | 400 | 1.7 | normal | Standard UI text, record fields |
| Body Small | Meiryo stack | 13 (`13px`) | 400 | 1.65 | normal | Secondary info, table cells |
| Caption | Meiryo stack | 12 (`12px`) | 400 | 1.6 | normal | Field hints, timestamps, fine print |
| Label | Meiryo stack | 13 (`13px`) | 700 | 1.5 | normal | Form field labels above inputs |
| Button | Meiryo stack | 14 (`14px`) | 700 | 1.0 | 0.02em | CTA and action button text |

Conventions the source records: Japanese-first legibility — line-height runs generous (1.7 for body) because dense kanji at small sizes needs vertical air; never tighten below 1.6 for Japanese body text; two weights — 400 (regular) for reading, 700 (bold) for headings, labels, and buttons; mild positive tracking `0.02em` on large display text; labels are bold, fields are regular — form field labels are 13px/700, the values entered into them are 14px/400; no all-caps for Japanese — Latin UI labels may use sentence case; Japanese never uses letter-spacing tricks meant for Latin.

The 16px Subtitle / Body Large size is not `tokens.spacing.base: 16`. The 14px Body / Button size is not a spacing step. The 12px Caption size is not `tokens.spacing.md: 12`. The 20 Heading 2 size is not `tokens.spacing.lg: 20`. The 24 Heading 1 size is not `tokens.spacing.xl: 24`. The 32 Display Large size is not `tokens.spacing.xxl: 32`. The 40 Display Hero size is not the prose `40px` common-value step written as a type role. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing, is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=kintone.cybozu.co.jp&sz=128`. That slug is an identity pointer, not a kintone-hosted brand file. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.
- Official Brand Guidelines PDF: `https://kintone.com/en-us/files/Brand-Guidelines.pdf` — KIN Red and the four named hues. That file is a brand-guidelines source, not a published UI specification. Reading the PDF as a brand-guidelines source for named hues rather than as a published UI specification is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.
- Mascot / illustration spots and customer logos are first-party marketing content the source records; do not replace them with invented brand-color decoration. Refusing to replace those recorded mascot, illustration, and customer-logo spots with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source footer records that named brand hues and primary red are sourced directly from the official Brand Guidelines, and that the neutral gray scale and component geometry (radii, padding, shadows) are derived from the live kintone product UI and marketing site.

The source state contract, preserved here while the catalog graph is not adopted:

| State | Treatment |
|---|---|
| Empty (no records yet) | Friendly single line in `#666666` body text explaining the app is empty, plus one encouraging primary action ("レコードを追加" — Add a record) as a red CTA. Beginner-oriented, never a bare "No data". Often a light illustration/mascot spot. |
| Empty (filtered, zero results) | Single `#999999` caption ("条件に一致するレコードがありません" — No records match). No CTA; user adjusts the filter. Filter summary stays visible above. |
| Loading (first paint) | Neutral skeleton blocks at `#f5f5f5` matching the final table/form layout. Subtle 1.2s shimmer. No spinner overlay blocking the page. |
| Loading (in-place refresh) | Small inline spinner near the action; existing content stays visible with previous values. The record list never blanks during a refresh. |
| Error (field validation) | `#e74c3c` 1px border on the input, error text below in `#e74c3c` 12px. One actionable sentence describing what to fix (必須項目です → 〜を入力してください). |
| Error (save failed) | Inline banner above the form: `#fdeeee` background, `#e74c3c` left border, plain-language cause + retry. Never a generic "エラーが発生しました" alone. |
| Success (saved) | Brief `#333333` toast ("保存しました"), 3s auto-dismiss, no emoji. For persistent confirmation, a `#e7f5ed` / `#3fa862` inline banner. |
| Success (workflow advanced) | Status pill updates to the next process color (e.g. info `#00afec` → success `#3fa862`), with a notification to the next assignee. |
| Skeleton | `#f5f5f5` blocks at exact final dimensions, component radius preserved (4px fields, 6px cards). Gentle shimmer. |
| Disabled | Buttons drop to a faded tint (primary → `#f5b3aa`); inputs go `#f5f5f5` bg with `#999999` text but keep their `#dddddd` border so geometry is stable when re-enabled. |
| Permission-restricted | Field or app appears greyed with a `#999999` lock note explaining access is limited — never a silent disappearance, so the user understands the rule. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic Focus capture is not `focus-visible` treatment evidence; the text field's observed focus border `#00afec` plus `0 0 0 2px rgba(0,175,236,0.15)` ring is recorded as that observed Focus, and it is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination tab, a cancel/close control, an inline link-style action, a launcher tile, or a toggle that commits no in-place operation in the loading/error/success sense — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. Preserving the source state contract here rather than delegating it to an unadopted catalog graph, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary

- Role: Primary CTA — 無料ではじめる ("Start free"), 保存 ("Save"), アプリを作る ("Create app")
- Primitive type: `button` · Kind: interactive
- Background: `#ef3f24`
- Text: `#ffffff`
- Border: none
- Radius: `4px`
- Padding: `10px 24px`
- Font: `14px / 700` / Meiryo stack
- Token-set use: `Primary CTA 無料ではじめる / 保存`
- Observed: Hover `#d63b22` (darkened ~8%); Active `#c0341e`; Disabled `#f5b3aa` bg, `#ffffff` text
- The `10px 24px` padding is this control's padding. The 14px font size is not a spacing step. The `4px` radius is `tokens.components.button-primary.radius`; it is not `tokens.spacing.xs: 4` written as a radius. Reading those figures as this control's geometry rather than a spacing step, and taking the longer §4 use that names `アプリを作る` beside the YAML use, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; hover `#d63b22` is recorded |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Disabled treatment captured above |
| loading | applicable | `保存` / `アプリを作る` / `無料ではじめる` is an in-place commit; visual treatment omitted |
| error | applicable | A failed save or start can be reported on this control; visual treatment omitted |
| success | applicable | A completed save or start can be reported on this control; visual treatment omitted |

### Secondary / Outline

- Role: Secondary action paired with a primary CTA (詳しく見る, キャンセル alternative)
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#ef3f24`
- Border: `1px solid #ef3f24`
- Radius: `4px`
- Padding: `10px 24px`
- Font: `14px / 700` / Meiryo stack
- Token-set use: `Secondary action paired with primary`
- Observed: Hover `#fff0ee` background tint
- The longer §4 use that names `詳しく見る` and the キャンセル alternative stays beside the YAML use. Reading that pairing as this control's role rather than as a primary commit, is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; hover `#fff0ee` is recorded |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary action can be gated; visual treatment omitted |
| loading | not-applicable | Secondary pairing (`詳しく見る`, キャンセル alternative); it commits no operation in place |
| error | not-applicable | Secondary pairing; it commits no operation in place |
| success | not-applicable | Secondary pairing; it commits no operation in place |

### Neutral / Default

- Role: Cancel, close, back — neutral in-app actions (キャンセル, 閉じる)
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#555555`
- Border: `1px solid #dddddd`
- Radius: `4px`
- Padding: `10px 20px`
- Font: `14px / 700` / Meiryo stack
- Token-set use: `Cancel, close, back キャンセル`
- Observed: Hover `#f5f5f5` background, `#bbbbbb` border
- The `10px 20px` padding is this control's padding. It is not `tokens.spacing.lg: 20` and not Heading 2 `20`. The longer §4 use that names `閉じる` stays beside the YAML use. Reading those figures as this control's geometry rather than a spacing or type step is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; hover `#f5f5f5` / `#bbbbbb` is recorded |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A cancel/close action can be gated; visual treatment omitted |
| loading | not-applicable | Cancel, close, back; it commits no operation in place |
| error | not-applicable | Cancel, close, back; it commits no operation in place |
| success | not-applicable | Cancel, close, back; it commits no operation in place |

### Subtle / Text

- Role: Inline link-style actions inside dense tables and toolbars
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#00afec`
- Border: none
- Radius: `4px`
- Padding: `8px 12px`
- Font: `14px / 700` / Meiryo stack
- Token-set use: `Inline link-style actions in tables/toolbars`
- Observed: Hover underline + `#f5f5f5` background

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; underline + `#f5f5f5` is recorded |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An inline action can be gated; visual treatment omitted |
| loading | not-applicable | Inline link-style action; it commits no operation in place |
| error | not-applicable | Inline link-style action; it commits no operation in place |
| success | not-applicable | Inline link-style action; it commits no operation in place |

### Danger

- Role: Destructive confirmation (削除する, レコードを削除)
- Primitive type: `button` · Kind: interactive
- Background: `#e74c3c`
- Text: `#ffffff`
- Border: none
- Radius: `4px`
- Padding: `10px 24px`
- Font: `14px / 700` / Meiryo stack
- Token-set use: `Destructive confirmation 削除する`
- Observed: Hover `#d63b22`
- The longer §4 use that names `レコードを削除` stays beside the YAML use. Hover `#d63b22` is this control's hover; it is not a collapse of `tokens.colors.primary-hover` into this button. Reading that hover as this control's treatment rather than as the primary key is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web destructive control; hover `#d63b22` is recorded |
| focus-visible | applicable | Keyboard-reachable destructive control; visual treatment omitted |
| disabled | applicable | A destructive action can be gated; visual treatment omitted |
| loading | applicable | `削除する` is an in-place destructive commit; visual treatment omitted |
| error | applicable | A failed delete can be reported on this control; visual treatment omitted |
| success | applicable | A completed delete can be reported on this control; visual treatment omitted |

### Text Field (default)

- Role: Single-line record fields, search boxes
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#333333`
- Border: `1px solid #dddddd`
- Radius: `4px`
- Padding: `8px 10px`
- Font: `14px / 400` / Meiryo stack
- Placeholder: `#999999`
- Token-set use: `Single-line record fields, search`
- Observed: Focus border `#00afec`, subtle `0 0 0 2px rgba(0,175,236,0.15)` ring. That observed Focus is not a `focus-visible` treatment. Disabled `#f5f5f5` bg, `#999999` text
- The `8px 10px` padding is this field's padding. It is not `tokens.spacing.sm: 8`. Reading that padding as this field's geometry rather than a spacing step, and recording the observed Focus as that observed Focus rather than as `focus-visible` treatment, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | Disabled treatment captured above |
| loading | not-applicable | Record / search field; it commits no operation in place |
| error | applicable | Form field; inline error is a separate token-set record |
| success | not-applicable | Record / search field; it commits no operation in place |

### Error input

- Role: Validation failure — paired with inline message
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff` (or `#fdeeee` tint for emphasis)
- Text: `#333333`
- Border: `1px solid #e74c3c`
- Radius: `4px`
- Token-set use: `Validation failure with inline message`
- Help text below: `#e74c3c` 12px / 400
- The longer §4 writing that names the `#fdeeee` tint and the 12px help text stays beside the YAML record. Reading those extras as this error-input record rather than as a new component is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | This record is the invalid-input treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | An invalid field can be gated; visual treatment omitted |
| loading | not-applicable | Invalid-input variant; it commits no operation in place |
| error | applicable | This record is the error treatment |
| success | not-applicable | Invalid-input variant; it commits no operation in place |

### Standard Card

- Role: Record cards, dashboard widgets, settings panels
- Primitive type: `card`
- Background: `#ffffff`
- Border: `1px solid #dddddd`
- Radius: `6px`
- Padding: `20px`
- Shadow: `0 1px 3px rgba(0,0,0,0.08)`
- Token-set use: `Record cards, dashboard widgets, settings panels`
- The `6px` radius is `tokens.components.card.radius`. It is not a spacing step. The `20px` padding is this card's padding; it is not `tokens.spacing.lg: 20`. Reading those figures as this card's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### App Tile (signature)

- Role: The app launcher grid — kintone's most recognizable surface
- Primitive type: `card` · Kind: interactive
- Background: one of the named hues or `#ffffff`
- Border: none (color-block) or 1px `#dddddd` (white)
- Radius: `8px`
- Padding: `16px`
- Icon: rounded-square glyph, white or colored
- App name: `14px` / 700 / `#333333` — that pairing sat only in the source Agent Prompt Guide and is landed here (A3)
- Shadow: `0 1px 3px rgba(0,0,0,0.08)`, lifts to `0 4px 12px rgba(0,0,0,0.12)` on hover
- Token-set use: `Signature app launcher tile`
- The `8px` radius is `tokens.components.card-tile.radius`. It is not `tokens.spacing.sm: 8` and not `tokens.rounded.lg: 8` written as this tile. The `16px` padding is this tile's padding; it is not `tokens.spacing.base: 16`. YAML records `bg: "#ffffff"`; the longer §4 writing that also names the named-hue color-block stays beside that YAML key. Reading those figures as this tile's geometry, landing the Agent Prompt Guide's app-name pairing here, and keeping both background writings, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web launcher tile; hover lift is recorded |
| focus-visible | applicable | Keyboard-reachable launcher tile; visual treatment omitted |
| disabled | applicable | A launcher tile can be gated; visual treatment omitted |
| loading | not-applicable | App launcher tile; it commits no operation in place |
| error | not-applicable | App launcher tile; it commits no operation in place |
| success | not-applicable | App launcher tile; it commits no operation in place |

### Neutral status / category tag

- Role: Neutral status / category tag
- Primitive type: `badge`
- Background: `#f5f5f5`
- Text: `#555555`
- Border: `1px solid #dddddd`
- Radius: `12px`
- Padding: `2px 10px`
- Font: `12px / 700` / Meiryo stack
- Token-set use: `Neutral status / category tag`
- The `12px` radius is this pill's radius. It is not `tokens.spacing.md: 12` and not `tokens.rounded.full: 9999`. Reading that `12px` as this pill's radius rather than the YAML `full` step is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Success status pill

- Role: Success status pill
- Primitive type: `badge`
- Background: `#e7f5ed`
- Text: `#3fa862`
- Radius: `12px`
- Padding: `2px 10px`
- Font: `12px / 700`
- Token-set use: `Success status pill`
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Info status pill

- Role: Info status pill
- Primitive type: `badge`
- Background: `#e6f7fd`
- Text: `#00afec`
- Radius: `12px`
- Padding: `2px 10px`
- Font: `12px / 700`
- Token-set use: `Info status pill`
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Danger status pill

- Role: Danger status pill
- Primitive type: `badge`
- Background: `#fdeeee`
- Text: `#e74c3c`
- Radius: `12px`
- Padding: `2px 10px`
- Font: `12px / 700`
- Token-set use: `Danger status pill`
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Underline Tabs

- Role: Record detail tabs, settings navigation
- Primitive type: `tab` · Kind: interactive
- Inactive: `#666666` text, `14px / 700`, transparent underline
- Active: `#ef3f24` text + 2px `#ef3f24` underline
- Hover: `#333333` text
- Container border-bottom: `1px solid #dddddd`
- Padding: `10px 16px`
- Token-set use: `Record detail tabs, settings nav`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; hover `#333333` is recorded |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | Record-detail / settings tab; it commits no operation in place |
| error | not-applicable | Record-detail / settings tab; it commits no operation in place |
| success | not-applicable | Record-detail / settings tab; it commits no operation in place |

### Default Toast

- Role: Auto-dismissing confirmation (保存しました)
- Primitive type: `toast`
- Background: `#333333`
- Text: `#ffffff`
- Radius: `4px`
- Padding: `12px 16px`
- Shadow: `0 4px 12px rgba(0,0,0,0.18)`
- Font: `13px / 400` / Meiryo stack
- Token-set use: `Auto-dismissing confirmation 保存しました`
- The 12px blur at 0.18 opacity is `tokens.components.toast.shadow` and `tokens.shadow.elevated`. It is not `tokens.shadow.raised`'s 0.12 opacity. Reading that 0.18 opacity as this toast's shadow rather than the raised token is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Centered Modal

- Role: Confirmation dialogs, app/field settings, delete confirmation
- Primitive type: `dialog` · Kind: interactive
- Background: `#ffffff`
- Radius: `8px`
- Padding: `24px`
- Shadow: `0 8px 24px rgba(0,0,0,0.20)`
- Header: `20px / 700` `#333333`
- Backdrop: `rgba(0,0,0,0.5)`
- Token-set use: `Confirmation dialogs, settings, backdrop rgba(0,0,0,0.5)`
- The `8px` radius is `tokens.components.dialog.radius`. It is not `tokens.spacing.sm: 8`. The `24px` padding is this dialog's padding; it is not `tokens.spacing.xl: 24`. The header `20px / 700` and the backdrop are the longer §4 writing; they stay on this dialog. Reading those figures as this dialog's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web dialog; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable dialog; visual treatment omitted |
| disabled | applicable | A dialog can be gated; visual treatment omitted |
| loading | applicable | Confirmation / settings / delete dialog can commit in place; visual treatment omitted |
| error | applicable | A failed confirmation can be reported on this dialog; visual treatment omitted |
| success | applicable | A completed confirmation can be reported on this dialog; visual treatment omitted |

### Toggle Switch

- Role: Enable/disable settings (通知をオン)
- Primitive type: `toggle` · Kind: interactive
- Off: `#dddddd` track, white thumb
- On: `#3fa862` track, white thumb
- Radius: `9999px`
- Token-set use: `Enable/disable settings 通知をオン`
- The `9999px` radius is `tokens.components.toggle.radius`. It is not written as `9999px` on a different control, and it is not the status-pill `12px`. Reading that `9999px` as this toggle's radius rather than a status-pill radius is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable toggle; visual treatment omitted |
| disabled | applicable | A settings toggle can be gated; visual treatment omitted |
| loading | not-applicable | Enable/disable settings toggle; it commits no in-place loading/error/success operation |
| error | not-applicable | Enable/disable settings toggle; it commits no in-place loading/error/success operation |
| success | not-applicable | Enable/disable settings toggle; it commits no in-place loading/error/success operation |

### Textarea / Multi-line

- Role: Multi-line text fields, comments, notes
- not in the token set
- Same as text field; min-height 80px, line-height 1.7
- Kind: interactive

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Same as the text field |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A multi-line field can be gated; visual treatment omitted |
| loading | not-applicable | Multi-line field; it commits no operation in place |
| error | applicable | Form field; validation failure is meaningful |
| success | not-applicable | Multi-line field; it commits no operation in place |

### Select / Dropdown

- Role: Drop-down field, status pickers
- not in the token set
- Background: `#ffffff`
- Border: `1px solid #dddddd`
- Radius: `4px`
- Padding: `8px 32px 8px 10px` (room for chevron)
- Chevron: `#999999`
- Kind: interactive

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A picker can be gated; visual treatment omitted |
| loading | not-applicable | Drop-down field / status picker; it commits no operation in place |
| error | applicable | Form field; validation failure is meaningful |
| success | not-applicable | Drop-down field / status picker; it commits no operation in place |

### Flat Section

- Role: Form section groupings inside the record editor
- not in the token set
- Background: `#f5f5f5`
- Border: none
- Radius: `4px`
- Padding: `16px`
- Kind and applicability map omitted — non-interactive grouping (C4).

### Data Table

- Role: Record list view — the workhorse surface of every kintone app
- not in the token set
- Header: `#f5f5f5` background, `#555555` 13px / 700 text
- Row border: 1px solid `#dddddd` (horizontal rules only)
- Row hover: `#fafafa`
- Cell padding: `8px 12px`
- Font: `13px / 400` / Meiryo stack, `#333333`
- Zebra (optional): even rows `#fafafa`
- Kind and applicability map omitted — the source supplies no interaction evidence that would make the table itself a commit control (C4).

### Warning status pill

- Role: Process-management status, record state — Warning
- not in the token set
- Background: `#fff6e0`
- Text: `#b37e00`
- Radius: `12px`
- Padding: `2px 10px`
- Font: `12px / 700`
- YAML has Success / Info / Danger pills; this Warning pair is the longer §4 writing on the colored-pill role. It is not moved onto a YAML pill. Kind and applicability map omitted (C4). Keeping the Warning pair on this §4-only row rather than moving it onto a YAML pill is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

### Success Banner (inline)

- Role: Persistent success/confirmation in-page
- not in the token set
- Background: `#e7f5ed`
- Text: `#2e7d4f`
- Border-left: `4px solid #3fa862`
- Radius: `4px`
- Padding: `12px 16px`
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Checkbox

- Role: Multi-select fields, settings flags
- not in the token set
- Unchecked: `#ffffff` bg, 1px `#bbbbbb` border, 4px radius
- Checked: `#ef3f24` bg, white check glyph
- Kind: interactive

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web checkbox; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable checkbox; visual treatment omitted |
| disabled | applicable | A checkbox can be gated; visual treatment omitted |
| loading | not-applicable | Multi-select / settings flag; it commits no in-place loading/error/success operation |
| error | not-applicable | Multi-select / settings flag; it commits no in-place loading/error/success operation |
| success | not-applicable | Multi-select / settings flag; it commits no in-place loading/error/success operation |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The source's layout list, kept on the surfaces it names. Marketing max content width is ~1080px, centered. Product app view is fluid full-width with a fixed top header bar (default `#ef3f24`). App launcher is a responsive tile grid, ~4-6 columns desktop collapsing to 2 on mobile. Record editor is a single-column form, optional 2-column field groups on wide screens. Tables are full-width, horizontal scroll when columns exceed viewport. Reading those figures as the roles named beside them — marketing column, product header, launcher grid, record editor, tables — rather than transferring a marketing width onto the product header or a product tile count onto the marketing column, is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

Whitespace the source records: marketing site leaves large margins around CTAs and illustrations — the "anyone can do this" promise reads as visual calm, not density. Inside the product, record lists and tables tighten up (8px cell padding) because power users scan hundreds of rows; the chrome around them stays roomy. Form sections are separated by 24px gaps and light `#f5f5f5` section fills so a 40-field app still parses as discrete blocks. Calling marketing openness reassuring and product density a power-user scan, and keeping the 8px cell padding on the table rather than as `tokens.spacing.sm: 8`, are derived editorial implementation inferences from the verified surfaces; they are not kintone-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <600px | Single column, 2-col tile grid, stacked CTAs, collapsed nav |
| Tablet | 600-960px | 3-4 col tile grid, 2-col form groups, side margins |
| Desktop | 960-1280px | Full layout, 4-6 col launcher, fixed header |
| Large Desktop | >1280px | Centered ~1080px marketing content with wide margins |

Touch targets the source records: buttons minimum 40px tall (10px vertical padding + 14px text); table row tap targets minimum 44px on mobile; app tiles large square targets, ~88px+ on mobile; form inputs 36-40px height.

Collapsing the source records: marketing 3-column feature grids → 2 → single column stacked; app launcher tiles reflow from 6 columns to 2; record editor 2-column field groups collapse to single column; data tables gain horizontal scroll rather than hiding columns; top header bar shrinks; secondary nav moves into a hamburger menu; hero type scales 40px → 28px on mobile, weight 700 retained.

Image behavior the source records: mascot/illustration spots scale down and may drop on mobile to save vertical space; customer logos render in a responsive wrapping row, grayscale at rest; app icons keep their rounded-square frame at all sizes (24px in lists, 48px+ in launcher).

The 40px button minimum, 44px table-row tap, ~88px+ tiles, 36-40px inputs, 28px mobile hero, 24px list icons, and 48px+ launcher icons are the source's own writings on the roles named beside them. The 40px button minimum is not the prose common-value `40px` spacing step and not Display Hero `40`. The 28px mobile hero is a collapse value; it is not a YAML type-role size. Reading those figures as those roles rather than as a single cross-viewport specification is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

kintone speaks like an encouraging colleague who genuinely believes you can build the thing yourself — warm, plain-spoken, and free of engineering jargon. The flagship tagline **みんな、つくれる** ("Everyone can create") sets the entire register: empowering, inclusive, never condescending. Japanese is the primary voice (kintone is a Cybozu domestic-first product); English strings on global surfaces are clean translations, not the source. Sentences are short. Buttons use plain verbs (つくる "create", はじめる "start", 保存 "save"). There is gentle warmth — a friendly mascot, soft exclamation — but never hype. Reading that register as this contract's voice, rather than as a separately published kintone microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Marketing hero | Empowering, inclusive — みんな、つくれる. One idea, large and calm. |
| CTAs | Plain imperative verbs (無料ではじめる, アプリを作る, 試してみる). |
| Success messages | Brief past-tense confirmation (保存しました, 更新しました). No emoji. |
| Error messages | Specific, blameless, actionable. Tell the user what to fix, not "an error occurred". |
| Onboarding / empty states | Encouraging — explain the next step a beginner should take, one action. |
| Field hints / help | Concrete and example-driven; assumes a non-engineer reader. |
| Enterprise / IR pages | More formal Japanese business register (です・ます), same calm warmth. |

**Forbidden phrases.** Heavy engineering jargon on user-facing surfaces (the whole point is no-code). Hype superlatives ("革命的", "revolutionary"). Blame-shifting error copy ("操作が正しくありません" without guidance). English-first phrasing that ignores the Japanese primary. Treating the brand red as a scolding/error color in copy or UI.

Published names and labels the source records, kept byte-exact: kintone, キントーン, サイボウズ株式会社, チームワークあふれる社会を創る, みんな、つくれる, 無料ではじめる, 保存, アプリを作る, 詳しく見る, キャンセル, 閉じる, 削除する, レコードを削除, 保存しました, 更新しました, 試してみる, つくる, はじめる, 通知をオン, レコードを追加, 条件に一致するレコードがありません, 必須項目です, 〜を入力してください, エラーが発生しました, 革命的, 操作が正しくありません, です・ます.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not kintone-authored or a separately published UI specification.

- unsourced easing curve values (`ease-enter`, `ease-exit`, `ease-standard`)
- `focus-visible` visual treatments
- reusable hover values on controls the source did not record a hover for
- a published UI specification (Brand Guidelines publish named hues, not component geometry)
- sibling live-computed marketing family and color writings as token-set values
