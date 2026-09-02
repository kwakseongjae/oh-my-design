# LayerX Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

LayerX, Inc. is a Tokyo-based compound startup founded in August 2018. Its mission is *すべての経済活動を、デジタル化する* ("digitize all economic activity"). The Japanese line is the published mission; the English sits beside it as a reading aid and does not replace it. The flagship product family is **Bakuraku (バクラク)** — cloud back-office software for invoice processing, expense management, corporate cards, and back-office spend. The parent site is `https://layerx.co.jp`. The recruiting-facing tagline — *未来の希望を、実装しよう* ("let's implement a future full of hope") — captures the company's engineer-led, mission-forward identity.

This contract covers the surfaces the source names for tokens: the live corporate site at `https://layerx.co.jp` (mission, tagline, Bakuraku family, white-canvas corporate layout), brand-color aggregator records for primary `#534DFF`, sky `#8DBBFF`, and ink `#152632`, and the source's own component-geometry and type-scale writings. The YAML token set is drawn from that prose. LayerX and Bakuraku do not publish a public design-token spec. Exact product-UI tokens for the Bakuraku app were not independently dumped from a public spec. Brandfetch returned HTTP 403 and is not used. Every value stays attached to the surface or evidence class that established it. Reading those named corporate, aggregator, and reasoned-geometry writings as this contract's evidence classes, keeping every value attached to the class that established it, and refusing to treat an aggregator hex as a dumped Bakuraku production token, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

The source describes the captured corporate layer as a refined modern corporate site that reads like a fintech infrastructure company rather than a consumer app: a pure white canvas (`#ffffff`), near-black ink (`#152632`), and a single electric indigo (`#534DFF`). Calling that atmosphere clean, generous with whitespace, corporate-trustworthy, and quietly futuristic, calling the indigo both technological and human, calling `#152632` a desaturated "Big Stone" navy rather than pure `#000`, and reading the bilingual Inter / Noto Sans JP pairing as calm authority for a company that handles other companies' money, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification. The hex values, the mission line, the tagline, the Bakuraku name, and the white-canvas layout are recorded.

The source's brand narrative, kept as narrative context. LayerX began with a blockchain/R&D heritage and pivoted into enterprise SaaS. It is not a consumer fintech app; it is infrastructure for businesses, and the visual language must earn the trust of finance and accounting teams. The source HTML comment states that interpretive claims — for example that the vivid electric indigo (`#534DFF`) rather than the conservative navy of legacy Japanese enterprise software was chosen to signal a *modern* infrastructure company — are editorial readings of the design, not documented LayerX statements. That reading, the "energetic enough to feel like the future, sober enough to handle a corporation's money" framing, the refusal of cramped grey ActiveX-era density, cartoonish consumer playfulness, and cold sterility of pure-enterprise dashboards, and classifying that founding-and-positioning narrative as context that does not by itself supply interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification. The year 2018, the mission line, the Bakuraku suite, and the recruiting tagline are the source's own narrative facts.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification. Each names a control the source records on the corporate site.

- Reach `お問い合わせ` on `https://layerx.co.jp`.
- Download materials via `資料ダウンロード` / `資料をダウンロード`.
- Start with `無料で始める` / `無料で試す`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its entries as fictional archetypes informed by publicly described Japanese B2B SaaS user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or affiliation classification is carried into this document or its companion file. What the source independently records, in its own wording outside that section, is the audience at a group level: finance and accounting teams; businesses that use LayerX as infrastructure; and global recruiting and investor surfaces where English is secondary. Reading those source-named groups as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside them, are a derived editorial implementation inference from the verified surfaces — they are not LayerX-authored or a separately published UI specification.

- Electric indigo (`#534DFF`) as the single primary interactive accent
- Pure white (`#ffffff`) canvas with desaturated navy ink (`#152632`) for headings
- Sky-blue secondary (`#8DBBFF`) for soft backgrounds, gradients, and illustration
- Bilingual JP/Latin type system, neo-grotesque + Noto Sans JP
- Generous whitespace, wide section rhythm, mission-driven corporate tone
- Soft, low-opacity neutral shadows — depth through layering, not drama
- Moderate-to-large border radii (8–16px) for an approachable, modern-SaaS feel

### Principles

These 8 items are a derived editorial implementation inference from the verified surfaces; they are not LayerX-authored or a separately published UI specification. The source states them in its own Principles section.

1. **Whitespace is credibility.** Generous margins around headlines and CTAs signal an established infrastructure company. Reducing whitespace to fit more content is the wrong trade — add a section instead.
2. **One accent, one meaning.** `#534DFF` means "interactive." It is never a decorative fill behind text. Gradients and illustration use sky blue; actions use indigo.
3. **Ink, not black.** Headings and text use navy `#152632`; shadows use navy-tinted alpha. Pure black is too harsh for the calm corporate palette.
4. **Bilingual by default.** Every layout assumes Japanese and Latin render together. Type weights, line-heights, and tracking are tuned so neither script dominates.
5. **Numbers are infrastructure.** Financial figures use tabular numerals and align in columns. Money is never decorative — it is precise, legible, and trustworthy.
6. **Restraint communicates trust.** Single-layer shadows, three font weights, one accent. In fintech, visual noise is a credibility tax.
7. **Dense where work happens.** Marketing pages breathe at 96px rhythm; product tables compress to 8–12px rows. Match density to the user's task.
8. **Mission over features.** Copy leads with the value and the mission, not a bullet list of capabilities.

### Application rules

The source states these seven as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

- Use LayerX Indigo (`#534DFF`) for all primary interactive elements — CTAs, links, focus rings, active tabs.
- Keep the canvas white and let whitespace carry the corporate, trustworthy feel.
- Use the navy ink (`#152632`) for headings instead of pure black — softer, on-brand.
- Pair indigo with sky blue (`#8DBBFF`) only for gradients, illustration, and decorative fills.
- Use tabular numerals for invoice amounts and financial figures.
- Maintain 1.7–1.8 line-height on Japanese body text.
- Keep radii in the 8–16px band for an approachable modern-SaaS look.

### Avoid

The source states these six as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

- Don't use indigo as a decorative background fill behind body text — reserve it for interaction and brand gradients.
- Don't use pure black (`#000`) for text or pure-black shadows — use navy ink and navy-tinted shadows.
- Don't crowd Japanese text with tight leading — it looks cramped and untrustworthy.
- Don't introduce a second accent hue for CTAs; indigo is the sole interactive color.
- Don't use heavy multi-layer shadows — single-layer, low-opacity only.
- Don't mix the sky-blue secondary into button fills — it's for gradients and illustration, not actions.

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below are the source's own labels. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping aggregator-grounded `#534DFF` / `#8DBBFF` / `#152632` beside the YAML keys that carry the same hex, keeping `#3530CC` / `#C9C7F5` / `#CC3B40` / `#E6F6EF` / `#FEF3E2` / `#C77F12` / `#FCE9EA` on the prose roles that name them rather than inventing YAML keys, and keeping `tokens.colors.canvas` / `tokens.colors.on-primary` as two keys for the same `#ffffff` rather than collapsing a shared hex, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification. The hex values and recorded uses are the source's own. Primary `#534DFF` is grounded via brand-color aggregators and the `layerx.co.jp` fetch of mission/tone and white-canvas layout; secondary `#8DBBFF` and ink `#152632` are confirmed in the same brand-color record. Fetched markup contained no explicit hex. Component geometry is a documented modern-SaaS interpretation consistent with the live site's refined corporate styling; exact Bakuraku product-UI tokens were not independently dumped.

- **LayerX Indigo** (`#534DFF`): The primary brand and interactive color. Primary CTAs, links, active states, focus rings, key data highlights. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is the same hex on a second spelling.
- **Indigo Hover** (`#403AE6`): Darkened indigo for hover/pressed states on primary buttons and links. Token-set path `tokens.colors.primary-hover`.
- **Indigo Tint** (`#EEEDFF`): Pale indigo wash for informational surfaces, selected rows, subtle highlight backgrounds. Token-set path `tokens.colors.primary-tint`.
- **Pure White** (`#ffffff`): Page background, card surfaces, button text on indigo. Token-set path `tokens.colors.canvas`. `tokens.colors.on-primary` is the same hex on a second key.
- **Big Stone Ink** (`#152632`): Primary heading color and strongest text — a desaturated near-black navy. Token-set path `tokens.colors.ink`.
- **Sky Blue** (`#8DBBFF`): Secondary brand color. Gradient washes, illustration fills, decorative accents, hero background tints. Pairs with indigo in marketing gradients (`#534DFF → #8DBBFF`). Token-set path `tokens.colors.sky`.
- **Indigo Gradient End** (`#7B6CFF`): Lighter violet used as the bright end of the brand gradient on hero panels and feature cards. Token-set path `tokens.colors.gradient-end`.
- **Error Red** (`#E5484D`): Error states, destructive actions, failed validation, negative indicators. Token-set path `tokens.colors.error`.
- **Success Green** (`#1FA971`): Confirmations, completed approvals, positive financial indicators. Token-set path `tokens.colors.success`.
- **Warning Amber** (`#F5A623`): Pending approvals, attention-needed states, soft warnings. Token-set path `tokens.colors.warning`.
- **Info Blue** (`#3E63DD`): Informational banners distinct from the indigo brand accent. Token-set path `tokens.colors.info`.
- **Grey 50** (`#F7F8FA`): Lightest grey, section backgrounds, alternating zones. Token-set path `tokens.colors.grey-50`.
- **Grey 100** (`#F0F2F5`): Card fills, disabled surfaces, table header rows. Token-set path `tokens.colors.grey-100`.
- **Grey 200** (`#E3E6EB`): Default border color, dividers, input outlines. Token-set path `tokens.colors.grey-200`.
- **Grey 300** (`#CBD1D9`): Strong borders, active input outlines. Token-set path `tokens.colors.grey-300`.
- **Grey 400** (`#9AA4B2`): Placeholder text, disabled icons. Token-set path `tokens.colors.grey-400`.
- **Grey 500** (`#6B7585`): Caption text, secondary labels, metadata. Token-set path `tokens.colors.grey-500`.
- **Grey 600** (`#4A5360`): Body text, descriptions. Token-set path `tokens.colors.grey-600`.
- **Grey 700** (`#333B45`): Emphasized body, sub-headings. Token-set path `tokens.colors.grey-700`.
- **Grey 800** (`#1F2832`): Strong labels, navigation text (just above ink). Token-set path `tokens.colors.grey-800`.
- **Border Default**: `#E3E6EB` (grey200). Card borders, dividers, input borders.
- **Border Strong**: `#CBD1D9` (grey300). Emphasized/active borders.
- **Surface Raised**: `#ffffff`. Cards, dropdowns, floating panels.
- **Overlay Scrim**: `rgba(21, 38, 50, 0.55)`. Modal backdrop — navy-tinted dark, never pure black.
- **Primary Pressed** (`#3530CC`): Primary-button pressed background. No YAML color key.
- **Primary Disabled** (`#C9C7F5`): Disabled primary-button background, text `#ffffff`. No YAML color key.
- **Danger Hover** (`#CC3B40`): Destructive-button hover. No YAML color key. Soft/Danger badge text uses the same hex on that badge.

Reading indigo as the sole interactive accent rather than a decorative fill, keeping `#ffffff` on both canvas and on-primary without collapsing the two keys, and keeping `#3530CC` / `#C9C7F5` / `#CC3B40` on their prose roles rather than inventing YAML keys, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

### Evidence-domain boundary

Four evidence domains are separate here, and an observation in one never populates another's tokens:

1. **Live corporate fetch** — `https://layerx.co.jp`, recorded 2026-06-06. Supports the mission line, the recruiting tagline, the Bakuraku product family, the white-canvas corporate layout, and the optimistic mission-driven tone. Fetched markup contained no explicit hex or font.
2. **Brand-color aggregator records** — primary `#534DFF` (rgb 83,77,255), complementary `#8DBBFF`, and `#152632`. These are aggregator records, not a LayerX-published token spec.
3. **Reasoned component geometry** — radii 8/12/16, 44px button height, focus-ring rgba, shadow tokens, and the type scale. The source grades these as a brand-faithful modern-SaaS interpretation consistent with the live corporate site's styling and the verified palette, not dumped production tokens.
4. **Unused Brandfetch lookup** — HTTP 403; not used.

Calling the YAML machine-readable value set a lift from that prose rather than a separate capture, and keeping the four domains from donating tokens to one another, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 32 | `tokens.spacing.xl` |
| xxl | 48 | `tokens.spacing.xxl` |
| section | 96 | `tokens.spacing.section` |

The source also writes a base unit of `8px`, common values 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, section vertical rhythm 96px between major marketing sections and 64px on tablet, and card internal padding 24px (standard) / 32px (featured). `tokens.spacing.xs: 4` is not a radius. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8` and not a type-role 8. `tokens.spacing.md: 12` is not Caption 12 and not the standard-card `12px` radius. `tokens.spacing.base: 16` is not Subtitle 16 and not compact-card padding `16px` and not `tokens.rounded.lg: 16`. `tokens.spacing.lg: 24` is not Amount 24 and not primary-button horizontal padding `24px`. `tokens.spacing.xl: 32` is not featured-card padding `32px`. `tokens.spacing.xxl: 48` is not Display Hero 48. `tokens.spacing.section: 96` is not textarea min-height `96px`. The `64px` common-value step has no YAML spacing key; it stays as that prose common value. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 6 | `tokens.rounded.sm` |
| md | 8 | `tokens.rounded.md` |
| lg | 16 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

The source's prose radius scale is Compact (`6px`) for badges, tags, and inline chips; Standard (`8px`) for buttons, inputs, compact cards, and segmented controls; Comfortable (`12px`) for standard cards and dropdowns; Large (`16px`) for featured cards, modals, and hero panels; Pill (`9999px`) for toggles, avatar rings, and status dots. `tokens.rounded.sm: 6` is not a spacing step. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 16` is not `tokens.spacing.base: 16`. `tokens.rounded.full: 9999` is a YAML step; the toggle record writes `9999px`. The standard-card `12px` radius and the `lg` button `10px` radius have no YAML rounded key; they stay on those components. Keeping those local radii on their components, and keeping `full: 9999` on its own key path beside the toggle `9999px`, is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow, optional 1px `#E3E6EB` border | Page background, inline-bordered cards |
| Subtle (Level 1) | `0 1px 3px rgba(21,38,50,0.06)` | Standard cards, list separation. Token-set path `tokens.shadow.subtle`. |
| Standard (Level 2) | `0 4px 16px rgba(21,38,50,0.10)` | Featured cards, hover-lifted tiles. Token-set path `tokens.shadow.standard`. |
| Elevated (Level 3) | `0 8px 24px rgba(21,38,50,0.12)` | Dropdowns, popovers, drawers. Token-set path `tokens.shadow.elevated`. |
| Modal (Level 4) | `0 16px 48px rgba(21,38,50,0.20)` | Dialogs, command palettes. Token-set path `tokens.shadow.modal`. |

Toast shadow `0 4px 16px rgba(21,38,50,0.16)` is this toast's shadow; it is not `tokens.shadow.standard`'s 0.10 opacity. Drawer shadow `-8px 0 24px rgba(21,38,50,0.12)` is this drawer's shadow; it is not the elevated token written as a different offset. Segmented-tab active shadow `0 1px 2px rgba(21,38,50,0.08)` and toggle-thumb shadow `0 1px 2px rgba(21,38,50,0.20)` stay on those controls. Sticky header applies `backdrop-filter: blur(8px)` with `rgba(255,255,255,0.8)` on scroll. Modal backdrops use the navy scrim, no blur, to keep dialog content sharp.

Two readings the source attaches to that stack — that shadows are single-layer, low-opacity, and tinted with navy ink rather than pure black, and that in a fintech context restraint reads as competence while heavy shadows would feel consumer-app playful — are a derived editorial implementation inference from the verified surfaces; they are not LayerX-authored or a separately published elevation specification. The five level values themselves, the toast 0.16 opacity, the drawer offset, and the sticky-header blur are recorded.

### Motion

Durations the source records, kept as duration tokens. They are not easing curves. The source grades token-level motion values with the same reasoned-default class as component geometry; they are not dumped production tokens.

| Token | Value | Use |
|---|---|---|
| `motion-instant` | 0ms | Toggle flips, checkbox state |
| `motion-fast` | 150ms | Hover, focus ring, button press, small reveals |
| `motion-standard` | 240ms | Default — dropdowns, card hover-lift, tab switch |
| `motion-slow` | 360ms | Modals, drawers, emphasized transitions |
| `motion-page` | 320ms | Route/section transitions |

Unsourced easing curve values (`ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`, `ease-emphasis` `cubic-bezier(0.2, 0.0, 0, 1)`) are omitted at the curve-value boundary. Named easing roles the source records stay as role names without those curve values, with the Use column the source records:

| Token | Use |
|---|---|
| `ease-enter` | Appearing — modals, drawers, toasts, dropdowns |
| `ease-exit` | Leaving — dismissals, pops |
| `ease-standard` | Two-way — hover-lift, tab content, collapsibles |
| `ease-emphasis` | Hero reveals on scroll, featured-card entrances |

Signature motions the source names stay, with their duration tokens, recorded easing-role pairs, and recorded geometry; the omitted curve values are not restored as promoted tokens.

1. **Card hover-lift.** On hover, cards rise 2px and shadow deepens Level-1 → Level-2 over `motion-standard / ease-standard`.
2. **Drawer slide.** Side panels (invoice preview, filters) slide from `x+24px` with `motion-slow / ease-enter`, backdrop fades to `rgba(21,38,50,0.55)`. Dismiss uses `motion-fast / ease-exit`.
3. **Scroll reveals.** Marketing sections fade + rise 16px on enter with `motion-slow / ease-emphasis`, staggered ~60ms per item. Used sparingly to keep the page calm.
4. **Reduce motion.** Under `prefers-reduced-motion: reduce`, all tokens collapse to `motion-instant`; slides become fades. The site stays fully usable.

The source's "subtle, never bouncy — the corporate register forbids overshoot" reading of the card hover-lift is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published motion specification.
Omitting the four unsourced curves, keeping the five duration rows as duration tokens rather than easing curves, keeping the four easing-role Use writings, keeping the four signature motions, and holding the five-kind per-component promotion gate rather than treating a single named curve as sufficient, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings are a derived editorial implementation inference from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

| Evidence class | Resolution |
|---|---|
| Official product-use | LayerX and Bakuraku do not publish a public design-token spec. No universal current typography token is published. |
| Live corporate fetch | `https://layerx.co.jp` confirms mission, tagline, Bakuraku family, and white-canvas layout. Fetched markup contained no explicit font. |
| Recorded Latin family | **Inter** is the source's recorded Latin primary. Token-set path `tokens.typography.family.sans` is `Inter`. |
| Recorded Japanese family | **Noto Sans JP** with Hiragino Kaku Gothic ProN / Hiragino Sans / Yu Gothic / Meiryo fallbacks. |
| Recorded combined stack | `"Inter", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Helvetica Neue", Arial, sans-serif` |
| Official distributed asset | No LayerX-exclusive distributed type family was verified. |
| Monospace | `"SF Mono", SFMono-Regular, Menlo, Consolas, "Roboto Mono", monospace` for figures in financial tables and invoice/amount displays. Token-set path `tokens.typography.family.mono` is `SF Mono`. |

### Family

- **Latin Primary:** `"Inter", "Helvetica Neue", Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Japanese Primary:** `"Noto Sans JP", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Yu Gothic", "Meiryo", sans-serif`
- **Combined stack (production):** `"Inter", "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic", "Helvetica Neue", Arial, sans-serif`
- **Monospace:** `"SF Mono", SFMono-Regular, Menlo, Consolas, "Roboto Mono", monospace`

Do not replace an unavailable or unobserved brand type with Inter and call the result a different claimed family. Do not present the system fallback stack as Inter. That fallback-never-substitute reading is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios. The parenthetical px figures are the source §3 spelling, not a replacement of the YAML ratio. Token-set `use` strings are kept verbatim; where §3 writes a longer use, that longer writing stays beside the YAML use. Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 px spellings on separate readings, and taking the longer of two writings when YAML and §3 differ in length, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---|---|---|
| Display Hero | Inter / Noto Sans JP | 48 (`48px`) | 700 | 1.25 (`60px`) | -0.02em | Landing hero headline |
| Display | Inter / Noto Sans JP | 36 (`36px`) | 700 | 1.33 (`48px`) | -0.02em | Section headers |
| Heading 1 | Inter / Noto Sans JP | 28 (`28px`) | 700 | 1.43 (`40px`) | -0.01em | Feature titles |
| Heading 2 | Inter / Noto Sans JP | 22 (`22px`) | 700 | 1.45 (`32px`) | -0.01em | Card/block headings |
| Heading 3 | Inter / Noto Sans JP | 18 (`18px`) | 600 | 1.56 (`28px`) | normal | Sub-sections |
| Subtitle | Inter / Noto Sans JP | 16 (`16px`) | 600 | 1.63 (`26px`) | normal | List headers, labels |
| Body Large | Inter / Noto Sans JP | 16 (`16px`) | 400 | 1.75 (`28px`) | normal | Lead paragraphs |
| Body | Inter / Noto Sans JP | 15 (`15px`) | 400 | 1.73 (`26px`) | normal | Standard reading text |
| Body Small | Inter / Noto Sans JP | 14 (`14px`) | 400 | 1.57 (`22px`) | normal | Secondary text |
| Caption | Inter / Noto Sans JP | 12 (`12px`) | 400 | 1.50 (`18px`) | 0.01em | Timestamps, fine print |
| Figure / Amount | SF Mono / Inter | 24 (`24px+`) | 600 | tight | normal | Invoice & financial figures, tabular nums |

Conventions the source records: three weights in use — 400 (body), 600 (emphasis/labels), 700 (headings); no light weights for UI; no 900. Generous line-height for Japanese — body text uses 1.7–1.8 so kanji and kana breathe. Negative tracking on display — large Latin headings tighten to `-0.02em`; Japanese display text stays near `normal`. Tabular numerals for money. Bilingual balance so Latin and Japanese share even visual density on a shared line. Calling that 1.7–1.8 leading a breath requirement, calling display tracking a Latin-only tighten, and calling the stack a bilingual density balance, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

The 48 Display Hero size is not `tokens.spacing.xxl: 48`. The 36 Display size is not a spacing step. The 28 Heading 1 size is not a spacing step. The 24 Amount size is not `tokens.spacing.lg: 24`. The 16 Subtitle / Body Large size is not `tokens.spacing.base: 16`. The 12 Caption size is not `tokens.spacing.md: 12`. The Amount role has no YAML `lineHeight`; `tight` stays as that prose writing and is not replaced with a ratio. Reading those sizes as the roles named beside them, rather than as shared numerals across spacing, is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

### Assets

- Catalog identity pointer: `logo.type: favicon`, `logo.slug: https://www.google.com/s2/favicons?domain=layerx.co.jp&sz=128`. That slug is an identity pointer, not a LayerX-hosted brand file. Reading it as an identity pointer rather than hosted brand artwork is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.
- Product screenshots: full-width within container, 12px radius, subtle Level-1 shadow. Illustrations use the indigo→sky-blue gradient palette, scale fluidly, maintain aspect ratio. Logos in customer-logo strips: greyscale `#9AA4B2` at rest, full-color on hover (marketing trust strip). Refusing to replace those recorded screenshot, illustration, and customer-logo spots with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source footer records that primary `#534DFF` is grounded via brand-color aggregators and the `layerx.co.jp` fetch, that secondary `#8DBBFF` and ink `#152632` are confirmed in the same brand-color record, and that component geometry (radii 8/12/16, 44px buttons, focus-ring tokens) is a documented modern-SaaS interpretation consistent with the live site's refined corporate styling; exact product-UI tokens for the Bakuraku app were not independently dumped from a public spec and are reasoned, brand-faithful values.

The source state contract, preserved here in full:

| State | Treatment |
|---|---|
| **Empty (first use)** | Centered single line of `#6B7585` body text explaining what will appear (`まだ請求書がありません`), plus one primary CTA to add the first item. Optional light-line illustration in indigo/sky-blue, never a heavy graphic. |
| **Empty (filtered)** | Single `#9AA4B2` caption (`条件に一致する結果がありません`) with a "フィルターをクリア" ghost button. |
| **Loading (first paint)** | Skeleton blocks at `#F0F2F5` matching final layout. Shimmer 1.2s, 8% white highlight. Financial figures render as `—` until resolved, never as skeleton bars. |
| **Loading (action)** | Inline spinner in `#534DFF` inside the pressed button; label hidden, button width preserved to prevent double-submit. |
| **Error (inline field)** | 1px `#E5484D` border + 3px `rgba(229,72,77,0.15)` ring, red 12px help text below with one actionable sentence. |
| **Error (toast)** | `#152632` surface, white 14px text, red leading icon, 4s auto-dismiss, bottom-right with 24px inset. |
| **Error (page)** | Reserved for outages. Centered navy headline 18px/600, body in `#6B7585`, indigo retry button. No heavy illustration. |
| **Success (toast)** | `#152632` surface, green `#1FA971` icon, single past-tense sentence (`承認しました`). |
| **Success (status change)** | Row badge flips to Soft Success (`#E6F6EF` / `#1FA971`) with a 200ms tint fade. |
| **Disabled** | Button bg `#C9C7F5`; inputs keep `#E3E6EB` border at 0.6 opacity, cursor `not-allowed`. Geometry unchanged so re-enable is stable. |
| **Focus** | 3px `rgba(83,77,255,0.15)` ring + `#534DFF` border on all interactive elements. Always visible for keyboard users — never `outline: none` without a replacement. |

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. A generic Focus capture is not `focus-visible` treatment evidence; the text field's observed focus border `#534DFF` plus `0 0 0 3px rgba(83,77,255,0.15)` ring is recorded as that observed Focus, and it is not a color assigned to the `focus-visible` row. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted unless captured as that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow the control's product role, not its primitive kind. `not-applicable` is used only where the control's role makes the state meaningless — a destination tab, a ghost nav action, a drawer panel, or a toggle that commits no in-place operation in the loading/error/success sense — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a row at all, its kind and applicability map are omitted rather than decided. Preserving the source state contract here in full, the role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary

- Role: Primary CTA (`お問い合わせ`, `資料ダウンロード`, `無料で始める`)
- Primitive type: `button` · Kind: interactive
- Background: `#534DFF`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 0 24px
- Font: 15px / 600 / Inter+Noto Sans JP
- Height: 44px
- Token-set use: `Primary CTA, 44px height`
- Observed: Hover background `#403AE6`; Pressed background `#3530CC`; Disabled background `#C9C7F5`, text `#ffffff`
- Size scale (height · font · padding · radius): `sm` 36px · 14px · 0 16px · 8px; `md` (default) 44px · 15px · 0 24px · 8px; `lg` 52px · 16px · 0 32px · 10px. Full-width modifier stretches to container with the same height.
- The `0 24px` padding is this control's padding. The 8px radius is `tokens.components.button-primary.radius`; it is not `tokens.spacing.sm: 8`. The `lg` 10px radius stays on the large size and is not a YAML rounded step. Reading those figures as this control's geometry rather than a spacing step, and taking the longer §4 use that names `お問い合わせ` / `資料ダウンロード` / `無料で始める` beside the YAML use, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web commit control; hover `#403AE6` is recorded |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | Disabled treatment captured above |
| loading | applicable | `お問い合わせ` / `資料ダウンロード` / `無料で始める` is an in-place commit; visual treatment omitted |
| error | applicable | A failed contact, download, or start can be reported on this control; visual treatment omitted |
| success | applicable | A completed contact, download, or start can be reported on this control; visual treatment omitted |

### Secondary

- Role: Secondary action paired with a primary CTA
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#534DFF`
- Border: 1px solid `#534DFF`
- Radius: 8px
- Padding: 0 24px
- Font: 15px / 600
- Height: 44px
- Token-set use: `Secondary paired action, 1px indigo border`
- Observed: Hover background `#EEEDFF`
- The longer §4 pairing stays beside the YAML use. Reading that pairing as this control's role, including a download or contact that can commit in place, is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; hover `#EEEDFF` is recorded |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A secondary action can be gated; visual treatment omitted |
| loading | applicable | A paired CTA can commit in place; visual treatment omitted |
| error | applicable | A failed paired action can be reported on this control; visual treatment omitted |
| success | applicable | A completed paired action can be reported on this control; visual treatment omitted |

### Ghost / Tertiary

- Role: Low-emphasis nav actions, "もっと見る", inline links-as-buttons
- Primitive type: `button` · Kind: interactive
- Background: transparent
- Text: `#333B45`
- Border: none
- Radius: 8px
- Padding: 0 16px
- Font: 15px / 600
- Token-set use: `Low-emphasis nav actions`
- Observed: Hover background `#F0F2F5`
- The longer §4 use that names `もっと見る` stays beside the YAML use. Reading that nav / `もっと見る` role as a destination action rather than an in-place commit is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; hover `#F0F2F5` is recorded |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A nav action can be gated; visual treatment omitted |
| loading | not-applicable | Nav / `もっと見る` / inline link-as-button; it commits no operation in place |
| error | not-applicable | Nav / `もっと見る` / inline link-as-button; it commits no operation in place |
| success | not-applicable | Nav / `もっと見る` / inline link-as-button; it commits no operation in place |

### Danger

- Role: Destructive confirmation (`削除`, `取り消し`)
- Primitive type: `button` · Kind: interactive
- Background: `#E5484D`
- Text: `#ffffff`
- Border: none
- Radius: 8px
- Padding: 0 24px
- Font: 15px / 600
- Token-set use: `Destructive confirmation`
- Observed: Hover background `#CC3B40`
- The longer §4 use that names `削除` and `取り消し` stays beside the YAML use. Reading hover `#CC3B40` as this control's treatment rather than a YAML color key is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; hover `#CC3B40` is recorded |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | A destructive action can be gated; visual treatment omitted |
| loading | applicable | `削除` / `取り消し` is an in-place commit; visual treatment omitted |
| error | applicable | A failed delete or cancel can be reported on this control; visual treatment omitted |
| success | applicable | A completed delete or cancel can be reported on this control; visual treatment omitted |

### Text Field (default)

- Role: Standard form field
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#1F2832`
- Border: 1px solid `#E3E6EB`
- Radius: 8px
- Padding: 11px 14px
- Font: 15px / 400
- Placeholder: `#9AA4B2`
- Token-set use: `Standard form field`
- Observed Focus: border `#534DFF` + ring `0 0 0 3px rgba(83,77,255,0.15)`. That observed Focus is not a `focus-visible` treatment.
- The `11px 14px` padding is this field's padding. Reading that padding as this field's geometry rather than a spacing step, recording the observed Focus as that observed Focus rather than as `focus-visible` treatment, and reading the standard form field as committing no operation in place so loading and success stay not-applicable while error stays applicable, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | Disabled treatment in the source state contract |
| loading | not-applicable | Standard form field; it commits no operation in place |
| error | applicable | Form field; inline error is a separate record |
| success | not-applicable | Standard form field; it commits no operation in place |

### Text Field (error)

- Role: Validation failure — paired with red help text below
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#1F2832`
- Border: 1px solid `#E5484D`
- Radius: 8px
- Padding: 11px 14px
- Focus ring: `0 0 0 3px rgba(229,72,77,0.15)`
- Token-set use: not in the token set
- The §4 writing that names the red help text stays on this error-input record. Reading those extras as this error-input record rather than as a new YAML key, and reading the invalid-input variant as committing no operation in place so loading and success stay not-applicable, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | This record is the invalid-input treatment |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | An invalid field can be gated; visual treatment omitted |
| loading | not-applicable | Invalid-input variant; it commits no operation in place |
| error | applicable | This record is the error treatment |
| success | not-applicable | Invalid-input variant; it commits no operation in place |

### Select / Dropdown

- Role: Single choice from a list; menu surface uses Surface Raised + Level 3 shadow
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Border: 1px solid `#E3E6EB`
- Radius: 8px
- Padding: 11px 14px
- Chevron: `#6B7585`
- Token-set use: `Single choice from list`
- Reading this select as a single-choice field that commits no operation in place, so loading and success stay not-applicable while error stays applicable, is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web select; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable select; visual treatment omitted |
| disabled | applicable | A select can be gated; visual treatment omitted |
| loading | not-applicable | Single-choice field; it commits no operation in place |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | Single-choice field; it commits no operation in place |

### Textarea

- Role: Multi-line field; reuses the default field geometry with min-height 96px and 1.7 line-height
- Primitive type: not in the token set · Kind: interactive
- The `96px` min-height is this field's min-height. It is not `tokens.spacing.section: 96`. Reading that 96px as this field's min-height rather than the section spacing step, and reading the multi-line field as committing no operation in place so loading and success stay not-applicable while error stays applicable, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A multi-line field can be gated; visual treatment omitted |
| loading | not-applicable | Multi-line field; it commits no operation in place |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | Multi-line field; it commits no operation in place |

### Standard Card

- Role: Feature blocks, content panels, dashboard tiles
- Primitive type: `card`
- Background: `#ffffff`
- Border: 1px solid `#E3E6EB`
- Radius: 12px
- Padding: 24px
- Shadow: `0 1px 3px rgba(21,38,50,0.06)`
- Token-set use: `Feature blocks, content panels`
- The `12px` radius is `tokens.components.card-standard.radius`. It is not `tokens.spacing.md: 12` and not a YAML rounded step. The `24px` padding is this card's padding; it is not `tokens.spacing.lg: 24`. Reading those figures as this card's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Featured / Promo Card

- Role: Hero/marketing cards, pricing highlight, case-study spotlight
- Primitive type: `card`
- Background: `#ffffff` (or gradient `#534DFF → #7B6CFF` for hero promos)
- Border: none
- Radius: 16px
- Padding: 32px
- Shadow: `0 4px 16px rgba(21,38,50,0.10)`
- Token-set use: `Hero/marketing cards, pricing highlight`
- YAML records `bg: "#ffffff"`; the longer §4 writing that also names the indigo→`#7B6CFF` gradient stays beside that YAML key. The `16px` radius is `tokens.components.card-featured.radius`. It is not `tokens.rounded.lg: 16` written as this card. The `32px` padding is this card's padding; it is not `tokens.spacing.xl: 32`. Reading those figures as this card's geometry, and keeping both background writings, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Compact / List Card

- Role: List rows, dense table-adjacent cards
- Primitive type: `card`
- Background: `#ffffff`
- Border: 1px solid `#E3E6EB`
- Radius: 8px
- Padding: 16px
- Shadow: none
- Token-set use: `List rows, dense cards`
- The `8px` radius is `tokens.components.card-compact.radius`. It is not `tokens.spacing.sm: 8`. The `16px` padding is this card's padding; it is not `tokens.spacing.base: 16`. Reading those figures as this card's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Solid / Brand Badge

- Role: Primary emphasis ("NEW", "おすすめ")
- Primitive type: `badge`
- Background: `#534DFF`
- Text: `#ffffff`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600
- Token-set use: `Primary emphasis NEW`
- The longer §4 use that names `おすすめ` stays beside the YAML use. The `6px` radius is `tokens.components.badge-brand.radius`. It is not a spacing step. Reading that `6px` as this badge's radius, and keeping `NEW` / `おすすめ` on this badge, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Soft / Brand Badge

- Role: Subtle category/status tag
- Primitive type: `badge`
- Background: `#EEEDFF`
- Text: `#403AE6`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600
- Token-set use: `Subtle category/status tag`
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Soft / Success Badge

- Role: Approved / completed (`承認済み`, `完了`)
- Primitive type: `badge`
- Background: `#E6F6EF`
- Text: `#1FA971`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600
- Token-set use: `Approved/completed`
- YAML records `fg` only; the longer §4 writing that names background `#E6F6EF` and `承認済み` / `完了` stays beside that YAML key. Reading those extras as this badge rather than a new YAML color key is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Soft / Warning Badge

- Role: Pending approval (`承認待ち`)
- Primitive type: `badge`
- Background: `#FEF3E2`
- Text: `#C77F12`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600
- Token-set use: not in the token set
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Soft / Danger Badge

- Role: Rejected / error (`却下`, `エラー`)
- Primitive type: `badge`
- Background: `#FCE9EA`
- Text: `#CC3B40`
- Radius: 6px
- Padding: 2px 8px
- Font: 12px / 600
- Token-set use: not in the token set
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Underline Tab

- Role: Section navigation within a page or dashboard
- Primitive type: `tab` · Kind: interactive
- Background: transparent
- Active text: `#534DFF`
- Indicator: 2px bottom border `#534DFF`
- Inactive text: `#6B7585`
- Font: 15px / 600
- Padding: 12px 16px
- Token-set use: `Section navigation`
- Reading this underline tab as section navigation that commits no operation in place is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | Section-navigation tab; it commits no operation in place |
| error | not-applicable | Section-navigation tab; it commits no operation in place |
| success | not-applicable | Section-navigation tab; it commits no operation in place |

### Pill / Segmented Tab

- Role: View switching (`月次` / `週次`, table / card)
- Primitive type: `tab` · Kind: interactive
- Container background: `#F0F2F5`
- Active: `#ffffff` bg + `#152632` text + `0 1px 2px rgba(21,38,50,0.08)` shadow
- Inactive text: `#6B7585`
- Radius: 8px (container), padding 8px 16px per segment
- Font: 14px / 600
- Token-set use: `View switching`
- Reading this segmented tab as view switching that commits no operation in place is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A view switch can be gated; visual treatment omitted |
| loading | not-applicable | View-switching tab; it commits no operation in place |
| error | not-applicable | View-switching tab; it commits no operation in place |
| success | not-applicable | View-switching tab; it commits no operation in place |

### Default Toast

- Role: Transient auto-dismiss notification (`コピーしました`)
- Primitive type: `toast`
- Background: `#152632`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 16px
- Shadow: `0 4px 16px rgba(21,38,50,0.16)`
- Font: 14px / 500
- Token-set use: `Transient auto-dismiss notification`
- Success / Error variants add a 16px leading icon and tint the icon (`#1FA971` / `#E5484D`); the surface stays navy `#152632`.
- The 0.16 opacity is this toast's shadow. It is not `tokens.shadow.standard`'s 0.10 opacity. Reading that 0.16 opacity as this toast's shadow rather than the standard token, and keeping `コピーしました` on this toast, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.
- Kind and applicability map omitted — the source supplies no interaction evidence for the row (C4).

### Centered Modal

- Role: Confirmation, forms, detail overlays
- Primitive type: `dialog` · Kind: interactive
- Background: `#ffffff`
- Text: `#152632`
- Radius: 16px
- Padding: 32px
- Shadow: `0 16px 48px rgba(21,38,50,0.20)`
- Backdrop: `rgba(21,38,50,0.55)`
- Token-set use: `Confirmation, forms, detail overlays`
- The `16px` radius is `tokens.components.dialog-modal.radius`. It is not `tokens.rounded.lg: 16` written as this dialog. The `32px` padding is this dialog's padding; it is not `tokens.spacing.xl: 32`. Reading those figures as this dialog's geometry rather than a spacing step is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web dialog; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable dialog; visual treatment omitted |
| disabled | applicable | A dialog can be gated; visual treatment omitted |
| loading | applicable | Confirmation / form dialog can commit in place; visual treatment omitted |
| error | applicable | A failed confirmation can be reported on this dialog; visual treatment omitted |
| success | applicable | A completed confirmation can be reported on this dialog; visual treatment omitted |

### Side Panel / Drawer

- Role: Detail view, filters, invoice preview in the Bakuraku product UI
- Primitive type: `dialog` · Kind: interactive
- Background: `#ffffff`
- Radius: 0 (full-height right-attached)
- Padding: 24px
- Shadow: `-8px 0 24px rgba(21,38,50,0.12)`
- Token-set use: `Side panel, detail view, filters`
- The drawer offset shadow stays on this panel. It is not `tokens.shadow.elevated` written as a different offset. Reading that offset as this drawer's geometry, and reading the panel as a detail/filter surface rather than an in-place commit control, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web panel; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable panel; visual treatment omitted |
| disabled | applicable | A panel can be gated; visual treatment omitted |
| loading | not-applicable | Detail / filter / invoice-preview panel; it commits no operation in place |
| error | not-applicable | Detail / filter / invoice-preview panel; it commits no operation in place |
| success | not-applicable | Detail / filter / invoice-preview panel; it commits no operation in place |

### Toggle

- Role: Boolean settings, feature flags (off `#CBD1D9`)
- Primitive type: `toggle` · Kind: interactive
- Background: `#534DFF` (on) / `#CBD1D9` (off)
- Radius: 9999px
- Thumb: `#ffffff` 18px circle, shadow `0 1px 2px rgba(21,38,50,0.20)`
- Token-set use: `Boolean settings, feature flags (off #cbd1d9)`
- The `9999px` radius is `tokens.components.toggle-default.radius`. It is not written as `9999px` on a different control. The 18px thumb is this control's thumb; it is not Caption `18px` line-height. Reading those figures as this toggle's geometry rather than a type-role size, and reading the boolean settings / feature-flag toggle as committing no in-place loading/error/success operation, are derived editorial implementation inferences from the verified surfaces; they are not LayerX-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable toggle; visual treatment omitted |
| disabled | applicable | A settings toggle can be gated; visual treatment omitted |
| loading | not-applicable | Boolean settings / feature-flag toggle; it commits no in-place loading/error/success operation |
| error | not-applicable | Boolean settings / feature-flag toggle; it commits no in-place loading/error/success operation |
| success | not-applicable | Boolean settings / feature-flag toggle; it commits no in-place loading/error/success operation |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

The source's layout list, kept on the surfaces it names. Max content width is 1200px, centered. Marketing layout is a 12-column grid, 24px gutters. Horizontal page padding is 24px mobile, 40px tablet, auto-center desktop. Product (Bakuraku) UI: left nav + fluid content area, data tables at full content width. Reading those figures as the roles named beside them — marketing column, product left nav, data tables — rather than transferring a marketing width onto the Bakuraku table or a table density onto the marketing column, is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

Whitespace the source records: generous margins around headlines and CTAs; each full-width section carries a single message — headline, supporting copy, one visual, one CTA — separated by 96px; marketing pages are spacious; the product's invoice/expense tables are deliberately dense and tabular, with 8–12px row padding. Calling whitespace a trust signal and product density a work-surface scan is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single column, stacked sections, 24px padding, hamburger nav |
| Tablet | 768–1024px | 2-column feature grids, 40px padding, condensed nav |
| Desktop | >1024px | Full 12-column grid, 1200px max-width centered, full nav bar |
| Wide | >1440px | Content stays 1200px; extra space becomes margin |

Touch targets the source records: buttons minimum 44px height (md), 36px (sm) reserved for desktop-dense UI only; nav links and list rows minimum 44px tappable height on mobile; toggles and checkboxes 24px control with 44px hit area.

Collapsing the source records: desktop multi-column feature grids collapse to a single stacked column on mobile; top nav collapses to a hamburger drawer below 768px; CTA stays visible as a sticky bottom or pinned header button; product (Bakuraku) left nav collapses to an icon rail, then to a drawer on mobile; data tables become stacked key–value cards on narrow screens.

Image behavior the source records: product screenshots full-width within container, 12px radius, subtle Level-1 shadow; illustrations use the indigo→sky-blue gradient palette, scale fluidly, maintain aspect ratio; logos in customer-logo strips greyscale `#9AA4B2` at rest, full-color on hover.

The 44px button minimum, 36px sm reservation, 24px toggle control, 44px hit area, 40px tablet padding, and 12px screenshot radius are the source's own writings on the roles named beside them. The 44px button minimum is not Amount 24 and not a type-role size. Reading those figures as those roles rather than as a single cross-viewport specification is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

LayerX speaks with the calm confidence of an infrastructure company that businesses entrust with their money and back-office operations. Japanese is the primary voice; English exists for global recruiting and investor surfaces but is secondary. The tone is **mission-driven, optimistic, and precise** — declarative statements about digitizing economic activity, never hype-y or jokey. Copy favors clear value ("バクラクに、業務を。") over feature lists, and treats the reader as a competent professional, not a novice. Reading that register as this contract's voice, rather than as a separately published LayerX microcopy guide, is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| CTAs | Concise imperative (`お問い合わせ`, `資料をダウンロード`, `無料で試す`) |
| Section headlines | Declarative mission/value statements — short, confident |
| Body copy | Polite-plain (です・ます) professional register, no slang |
| Success messages | Single past-tense confirmation (`承認しました`), no emoji |
| Error messages | Specific, blameless, actionable (`金額を再度ご確認ください`) |
| Recruiting / culture | Warmer, forward-looking ("未来の希望を、実装しよう") |
| Legal / compliance | Formal Japanese business register, full です・ます with full disclosure |

**Forbidden moves.** No exclamatory hype ("すごい！"), no emoji in product/financial surfaces, no vague apologies ("ご不便をおかけして…") without a concrete next step, no casual-spoken endings on transactional copy. English strings stay corporate-neutral; avoid startup slang.

Published names and labels the source records, kept byte-exact: LayerX, Bakuraku, バクラク, すべての経済活動を、デジタル化する, 未来の希望を、実装しよう, バクラクに、業務を。, お問い合わせ, 資料ダウンロード, 資料をダウンロード, 無料で始める, 無料で試す, もっと見る, 削除, 取り消し, NEW, おすすめ, 承認済み, 完了, 承認待ち, 却下, エラー, 月次, 週次, コピーしました, まだ請求書がありません, 条件に一致する結果がありません, フィルターをクリア, 承認しました, 金額を再度ご確認ください, ご不便をおかけして…, すごい！, です・ます.

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

These decisions are unnamed values, not permissions to invent. Calling this list a set of named gaps rather than a domain inventory, and treating the items as unnamed values rather than permissions to invent, is a derived editorial implementation inference from the verified surfaces; it is not LayerX-authored or a separately published UI specification.

- unsourced easing curve values (`ease-enter`, `ease-exit`, `ease-standard`, `ease-emphasis`)
- `focus-visible` visual treatments
- a published UI specification (LayerX/Bakuraku do not publish a public design-token spec)
- dumped Bakuraku production tokens
- explicit hex or font family in the fetched `layerx.co.jp` markup
