# Pet Friends Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Pet Friends (펫프렌즈) is the catalog identity (`display_name_kr`: 펫프렌즈). Catalog homepage identity is `https://www.pet-friends.co.kr/`. This contract covers the three first-party mobile-commerce surfaces the source inspected live on 2026-07-02: the homepage at `https://www.pet-friends.co.kr/` (the `www` host redirects to `m.pet-friends.co.kr/main/tab/2`); the product-list surface at `https://m.pet-friends.co.kr/main/product/list/16982`; and the search surface at `https://m.pet-friends.co.kr/search/result`. The YAML token set is `live-extract`. The YAML token note records: primary = live vivid pink `#ff4081` (Material Pink A400) used as emphasis type + solid action fills; deeper magenta `#ea306f` for sale copy; signal red `#f33f46` for discount %; charcoal ink `#2d3035` for text; near-flat/shadowless system — separation via tint + `#e9ebec` hairlines. Every value stays attached to the surface or evidence class that established it. Treating those three URLs as this contract's token surfaces, keeping the `www` → `m.` redirect as the source recorded it, keeping the YAML token set in the `live-extract` class the source assigned it, keeping the token-note roles on those hexes rather than as a second palette, and keeping every value attached to the surface or evidence class that established it, are derived editorial implementation inferences from the verified surfaces; they are not Pet Friends-authored or a separately published UI specification.

The source records the captured interface as a friendly, high-energy commerce app built for anxious-but-loving pet parents (집사님). The canvas is pure white (`#ffffff`) broken up by soft grey product surfaces (`#f8f8f8`) and warm pink tints (`#fff1f5`). Text sits in a soft charcoal (`#2d3035`) — never a harsh pure black for reading copy. The signature move the source names is color as emotion: a single vivid pink (`#ff4081`, Material's Pink A400) carries the brand's affection and doubles as the "do this" action color. Section headlines run in the brand's custom **Lific** typeface at 18px / weight 700 with tight `-0.2px` tracking, and the persuasive word in each headline jumps to **weight 900 in pink** (`#ff4081`) — e.g. "재구매율 **89%**", "최저가 **도전 사료 모음!**", "집사님을 위한 **오늘 특가!**". Body and product-name text drop to Lific / **Noto Sans KR** at 13–14px weight 400. This heavy-pink-emphasis-over-quiet-grey-body split is the core tension of the system: shout the deal, whisper the detail. Interactive chrome leans into the pill and the rounded rectangle: category chips at 36px radius on a pink tint (`#fff1f5`), soft-pink search-keyword pills (`#ffaac7`) at ~19px radius, product cards at 16px, and circular avatars. Live inspection returned `box-shadow: none` on chips, inputs, and headings — separation comes from tinted surfaces, thin `#e9ebec` hairlines, and a near-black image overlay (`#1c1e21`), not from elevation. Price urgency gets its own dedicated signal red (`#f33f46`) for discount percentages and a deeper magenta (`#ea306f`) for sale copy. A periwinkle accent-blue (`#6078e4`) and alternate light surface (`#fafafa`) show up on promotional landing bands. The hex values, the Lific / Noto Sans KR pairing, the 18px / 700 / `-0.2px` headings, the weight-900 pink emphasis, the 13–14px / 400 body, the 36px / ~19px / 16px / circular geometry, `box-shadow: none`, and the commerce-signal split are recorded. The characterizations built on them — friendly, high-energy commerce; anxious-but-loving pet parents; bright and merchandising-forward rather than clinical; never a harsh pure black for reading copy; color as emotion; the heavy-pink-emphasis-over-quiet-grey-body split as the core tension of the system; shout the deal, whisper the detail; friendly geometry; near-flat / shadowless; keeping the primary pink from being diluted by commerce noise — are a derived editorial implementation inference from the verified surfaces; they are not Pet Friends-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Pet Friends (펫프렌즈) launched in **2015** and grew into Korea's leading pet-commerce platform, positioning itself plainly on every surface as the "반려동물 1등 쇼핑몰" (No.1 pet shopping mall). Its founding premise addressed a specific Korean pain point: pet owners buying food and supplies across fragmented offline shops and generic marketplaces, with little curation and slow delivery. Pet Friends reframed the category around fast (same-day / dawn) delivery of pet essentials, data-driven product curation, and a community of owners who trust each other's reviews. The product's identity is built around the emotional relationship between owner and pet — the recurring "집사님" (butler) and "내새꾸" (my baby) language treats customers as devoted caregivers rather than shoppers. Merchandising leans on social proof ("재구매율 89%", "심쿵 체험단" trial squads) and price confidence ("최저가 도전"), reflecting a business that competes on trust, speed, and value at once. What Pet Friends refuses, visible in its design: the cold, shadow-heavy chrome of a generic logistics marketplace, and the guilt-driven marketing sometimes used in the pet category. What it embraces: a bright, near-flat mobile-first interface; a single affectionate pink; playful, punny copy; and a relentless, number-backed focus on the deal — all in service of making caring for a pet feel joyful and effortless. The source's own closing note records the 2015 launch and the broader founding/company details beyond the on-site "반려동물 1등 쇼핑몰" positioning as general public knowledge not independently re-verified from a first-party Pet Friends statement in that turn; those facts do not by themselves supply interface tokens. The year 2015, the founding-premise sentence, same-day / dawn delivery, data-driven curation, the community-of-owners sentence, the 집사님 / 내새꾸 caregiver language, 재구매율 89% / 심쿵 체험단 / 최저가 도전, the competes-on-trust-speed-and-value sentence, and that closing refuses/embraces paragraph through "joyful and effortless" are the source's own narrative facts. Classifying that founding-to-design narrative, including the closing sentence, as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

- Search the catalog from the main product search field — placeholder "어떤 상품을 찾으시나요?".
- Browse from the sticky header chips (category "강아지", delivery-address "배송지 입력") and merchandising bands ("최저가 도전 사료 모음!").
- Add to cart / buy with the solid pink `#ff4081` primary action.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its entries as fictional archetypes informed by publicly observable Pet Friends user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, as publicly observable Pet Friends user segments is the audience at a group level: Korean dog and cat owners buying food and supplies online. Reading that source-named group as this product's audience, and dropping the source's archetype biographies rather than promoting them, is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

- Custom **Lific** typeface with **Noto Sans KR** fallback — one warm family across display and body
- Single vivid pink (`#ff4081`) as both emotional brand color and primary action fill
- Heading emphasis in weight 900 pink; quiet 13–14px weight-400 grey body (`#2d3035`)
- Friendly geometry — 36px chips, ~19px keyword pills, 16px cards, circular avatars
- Near-flat / shadowless: tint surfaces (`#f8f8f8`, `#fff1f5`) + `#e9ebec` hairlines do the separating
- Dedicated commerce signals: signal red (`#f33f46`) for discount %, deeper magenta (`#ea306f`) for sale copy
- Near-black overlay (`#1c1e21`) for image counters instead of drop shadows
- Muted grey ladder (`#9ca1aa`) for secondary/metadata text

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Pet Friends-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each. The source's closing note flags interpretive claims such as "pink means love and action" and "flat and fast as a rejection of cold marketplace chrome" as editorial readings connecting the observed design to the brand's positioning, not directly sourced Pet Friends statements.

1. **Pink means love and action.** The vivid pink (`#ff4081`) is both the brand's warmth and its call-to-action. *UI implication:* reserve pink for emphasis words and the primary action so affection and "do this" read as the same gesture.
2. **Owner as devoted caregiver.** Customers are 집사 raising 내새꾸, not buyers. *UI implication:* copy and empty states speak with warmth and play (the 개 pun), never cold transaction language.
3. **Prove the promise.** Trust is earned with numbers — 재구매율 89%, 최저가, 체험단. *UI implication:* pair every persuasive headline with a concrete figure in red or bold.
4. **Flat and fast.** A mobile-native commerce app should feel bright and quick. *UI implication:* no shadows; separate with tint and `#e9ebec` hairlines; keep cards clean and rounded.
5. **Friendly geometry.** Rounded chips, pills, and cards make a data-dense store feel approachable. *UI implication:* use 36px chips, 16px cards, and circular frames; avoid sharp corners.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Pet Friends-authored or a separately published UI specification.

- Use the custom Lific typeface (with Noto Sans KR fallback) across headings and body
- Reserve the vivid pink (`#ff4081`) for emphasis words and the primary action — keep it the single "do this" color
- Put the persuasive word of a headline in weight 900 pink; keep the rest quiet grey
- Use signal red (`#f33f46`) only for discount percentages, and deeper magenta (`#ea306f`) for sale copy
- Use soft charcoal (`#2d3035`) for reading text instead of pure black
- Separate sections with flat tints (`#f8f8f8`, `#fff1f5`) and `#e9ebec` hairlines, not shadows
- Use friendly geometry — 36px chips, 16px product cards, circular avatars
- Apply the `#1c1e21` overlay for counters/scrims on top of product imagery

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Pet Friends-authored or a separately published UI specification.

- Spread the pink across many elements — it dilutes the single-action signal
- Use drop shadows for elevation — Pet Friends is a flat, shadow-free system
- Use signal red (`#f33f46`) for anything other than price/discount urgency
- Set headline emphasis in a light weight — the persuasive word is always weight 900
- Use pure black (`#000000`) for long-form body text — reserve charcoal `#2d3035`
- Introduce a competing display typeface — Lific owns the voice
- Use sharp square corners on chips, cards, or pills — everything is rounded
- Let the periwinkle accent-blue (`#6078e4`) compete with pink as a primary action

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping `tokens.colors.canvas` `#ffffff` off `tokens.colors.on-primary` `#ffffff`, keeping chip-label `#000000` off ink `#2d3035`, keeping overlay `#1c1e21` off ink-pure `#000000`, and keeping every role attached to the use the source recorded, are derived editorial implementation inferences from the verified surfaces; they are not Pet Friends-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Primary

- **Pet Friends Pink** (`#ff4081`): The brand's signature vivid pink (Material Pink A400). Used for weight-900 emphasis words in headlines, solid primary-action button/badge fills, and brand accents. The system's single "do this" color. Token-set path `tokens.colors.primary`. Catalog `primary_color` is the same hex.
- **Deep Magenta** (`#ea306f`): A deeper pink-magenta for sale copy and secondary emphasis text where the primary pink would be too light. Token-set path `tokens.colors.primary-deep`.

Text

- **Ink Charcoal** (`#2d3035`): Primary text, headings, product names, labels. A soft near-black used instead of pure black for reading comfort in dense grids. Token-set path `tokens.colors.ink`.
- **Pure Black** (`#000000`): Maximum-contrast text used on some hero headings and chip labels. Token-set path `tokens.colors.ink-pure`. This is not long-form body text and is not overlay `#1c1e21`.
- **Muted Grey** (`#9ca1aa`): Tertiary text, captions, metadata, disabled labels. Token-set path `tokens.colors.muted`.

Commerce Signals

- **Signal Red** (`#f33f46`): The discount-percentage color — used almost exclusively on the bold "17%", "50%", "36%" markdown that drives conversion. Token-set path `tokens.colors.discount`.

Surface & Neutral

- **Pure White** (`#ffffff`): Page background, card surfaces, and text on pink/dark fills. Token-set path `tokens.colors.canvas`. `tokens.colors.on-primary` is the same hex on a second key (text and iconography on pink, magenta, and dark overlay fills).
- **Product Grey** (`#f8f8f8`): The light-grey image surface behind product photography in cards and carousels. Token-set path `tokens.colors.surface`.
- **Alt Surface** (`#fafafa`): A slightly warmer alternate light surface for promotional landing bands. Token-set path `tokens.colors.surface-alt`.
- **Surface Pink** (`#fff1f5`): A pale pink tint used as the background of header category / delivery chips. Token-set path `tokens.colors.surface-pink`.
- **Soft Pink** (`#ffaac7`): The soft pink of the trending search-keyword pills (rendered at 0.5 alpha over the hero imagery). Token-set path `tokens.colors.pink-soft`.
- **Hairline** (`#e9ebec`): Thin borders, input outlines, and dividers — the primary separation device given the shadow-free system. Token-set path `tokens.colors.hairline`.
- **Overlay Ink** (`#1c1e21`): A near-black used (at ~0.6 alpha) for image overlays and carousel index counters. Token-set path `tokens.colors.overlay`.

Accent

- **Accent Blue** (`#6078e4`): A periwinkle blue used sparingly on promotional / event landing bands as a secondary accent to the pink. Token-set path `tokens.colors.accent-blue`.
- **On-Primary White** (`#ffffff`): Text and iconography on pink, magenta, and dark overlay fills. Token-set path `tokens.colors.on-primary`. Same hex as `tokens.colors.canvas`; they are two keys.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 15 | `tokens.spacing.base` |
| lg | 16 | `tokens.spacing.lg` |
| gutter | 44 | `tokens.spacing.gutter` |

Source §5 also writes the measured list as 4px, 8px, 12px, 15px, 16px, 44px. Chip padding lands at an asymmetric `4px 8px 4px 12px` (room for a trailing chevron icon); the search field reserves a 44px right gutter for its search/clear icon. `tokens.spacing.lg: 16` is not `tokens.rounded.lg: 16` and is not the 16px discount type role. `tokens.spacing.base: 15` is not a radius. `tokens.spacing.gutter: 44` is the search-field right gutter, not a page margin. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8`. `tokens.spacing.md: 12` is not the chip's 12px trailing padding written as a second key. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path | Source §5 spelling |
|---|---:|---|---|
| sm | 6 | `tokens.rounded.sm` | Small (6px): search input |
| md | 8 | `tokens.rounded.md` | Medium (8px): icon buttons, small controls |
| lg | 16 | `tokens.rounded.lg` | Large (16px): product cards, content containers — the workhorse |
| pill | 36 | `tokens.rounded.pill` | Pill (36px): category / delivery chips |
| full | 9999 | `tokens.rounded.full` | Full (9999px / 50%): keyword pills, avatars, circular frames |

`tokens.rounded.lg: 16` is not `tokens.spacing.lg: 16`. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.full: 9999` is a YAML step; keyword-pill `radius: 19px` (~19px in §1, 19px in §4, `18.5px` in the source closing comment) is the component record. Source §5 also lists keyword pills under Full (9999px / 50%). Both writings stay; they are not collapsed. Avatars are `9999px` (border-radius 50%). Keeping those local radii on their components, and keeping `full: 9999` on its own key path beside `19px`, `50%`, and the source-closing-comment `18.5px` as a third writing rather than collapsing them, is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, chips, inputs, headings |
| Tint (Level 1) | `#f8f8f8` / `#fff1f5` / `#fafafa` background shift | Card & section separation without elevation |
| Hairline (Level 2) | `1px solid #e9ebec` border | Input outlines, dividers |
| Overlay (Level 3) | `#1c1e21` at ~0.6 alpha | Image-on-media counters and scrims |

YAML `tokens.shadow.none` is `"none"`. Live inspection returned `box-shadow: none` across the header chips, search input, and headings. Depth and grouping come from flat tinted surfaces (`#f8f8f8`, `#fff1f5`), thin `#e9ebec` hairlines, and — where content sits on photography — a near-black `#1c1e21` overlay rather than a cast shadow. When emphasis is needed the system reaches for color (pink `#ff4081`, red `#f33f46`), never elevation. The treatments, the `box-shadow: none` observation, and the color-not-elevation rule are the source's own. Reading that flatness as keeping the commerce UI feeling fast, bright, and mobile-native is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims (§1–9) to a live inspection of computed color, type, spacing, radius, border, and shadow. The motion contract below sits outside that attribution. Reading its durations and rules as a system-level statement rather than as per-component measured values is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Chip / pill press, hover, focus |
| `motion-standard` | 220ms | Card & sheet reveal, carousel slide, dropdown |
| `motion-slow` | 320ms | Page-level transitions, promotional reveals |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Pet Friends evidence, so the curves are omitted and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — sheets, cards, carousels |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

Treating those three curve values as untraceable and omitting them rather than promoting them as Pet Friends motion tokens is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element — does not satisfy that condition.

Motion rules: The six rules below, including the causal readings (friendly but quick; consistent with the bright, fast commerce feel; no heavy bounce that would slow browsing), are a derived editorial implementation inference from the verified surfaces; they are not Pet Friends-authored or a separately published UI specification. Durations, the `motion-standard / ease-enter` pairing, and `prefers-reduced-motion: reduce` inside them are recorded.

- Motion is friendly but quick — consistent with the bright, fast commerce feel.
- Pill chips respond to press with a subtle scale/opacity shift. The exact scale and opacity values are unresolved.
- Product carousels slide at `motion-standard / ease-enter`.
- Add-to-cart confirmations pop briefly in the pink tone.
- No heavy bounce that would slow browsing.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the store remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | The inspected mobile-commerce surfaces compute body as `Lific, "Noto Sans KR", sans-serif`. Section H2, emphasis `<b>`, product H3, discount `<strong>`, and the "배송지 입력" label compute Lific. |
| Brand / fallback split | **Brand**: `Lific` — Pet Friends' custom typeface, used across headings, UI, and body. **Fallback**: `Noto Sans KR` — the hangul fallback that carries dense product-listing and body copy. A fallback stack is never presented as the brand face. |
| Official distributed asset | The source records no Pet Friends-exclusive distributed type family; the two families it names are the ones the captured surfaces use. |

Sorting those rows as evidence classes, and refusing to present Noto Sans KR as the brand face, is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

### Family

- **Brand:** `Lific` — custom typeface across headings, UI, and body.
- **Fallback:** `Noto Sans KR` — hangul fallback for dense product-listing and body copy.
- Do not replace Lific with a system substitute. Noto Sans KR is the recorded fallback, not a second display face. That prohibition, and refusing a system substitute for Lific, is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

### Type roles

YAML `use` and source §3 notes are both kept. Sizes keep the YAML unitless number beside the §3 `px` / `rem` spelling. Line heights keep the YAML unitless ratio beside the §3 `px` spelling where both exist.

Token-set use: Emphasized phrase inside a heading, pink #ff4081
Token-set use: Discount percentage, signal red #f33f46

| Role | Font | Size | Weight | Line height | Tracking | Use |
|---|---|---|---:|---|---|---|
| Section Heading | Lific | 18 (`18px` / `1.13rem`) | 700 | `1.30` (~1.30) | -0.2 (`-0.2px`) | Section headings (H2), Lific Bold. H2 section titles ("맘마값 부담 DOWN…") |
| Emphasis | Lific | 18 (`18px` / `1.13rem`) | 900 | normal | -0.2 (`-0.2px`) | Emphasized phrase inside a heading, pink `#ff4081`. Emphasized phrase in a heading, pink `#ff4081` |
| Discount | Lific | 16 (`16px` / `1.00rem`) | 700 | `1.38` (`22px`) | -0.32 (`-0.32px`) | Discount percentage, signal red `#f33f46` |
| Label | Lific | 14 (`14px` / `0.88rem`) | 700 | ~1.48 | -0.2 (`-0.2px`) | Bold UI labels (delivery address, tabs). Bold UI labels (배송지 입력, tabs) |
| Body | Noto Sans KR | 14 (`14px` / `0.88rem`) | 400 | normal | normal | Standard reading text, Noto Sans KR fallback |
| Product Title | Lific | 13 (`13px` / `0.81rem`) | 400 | `1.38` (`18px`) | -0.2 (`-0.2px`) | Product names in cards |

The 20px / 500 Lific search-field font is the search component record. It is not a type-role row. `tokens.typography.discount.size: 16` is not `tokens.spacing.lg: 16` and not `tokens.rounded.lg: 16`. Keeping YAML `use` beside the longer §3 spelling, keeping unitless `1.30` / `1.38` as ratios, and keeping the 20px search font off this table, is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

- **Bold pink emphasis, quiet grey body**: Headlines carry a weight-900 pink phrase for the persuasive beat; product names and body drop to weight 400 charcoal. The weight-and-color jump is the primary hierarchy signal.
- **Tight negative tracking on headings**: -0.2px on titles, -0.32px on discount figures. Body stays at normal tracking.
- **Hangul-first sizing**: Product titles sit at a deliberate 13px, body at 14px — dense enough for merchandising grids, legible for hangul.
- **One warm family**: Lific covers display and UI; Noto Sans KR is the reading/fallback voice. There is no second display typeface competing for attention.

### Assets

The source's only logo record is a third-party favicon-service URL (`https://www.google.com/s2/favicons?domain=pet-friends.co.kr&sz=128`) rather than a Pet Friends-hosted asset file. Treating that record as an identity pointer rather than as a brand asset, leaving it out of this contract, and the rule that product photography on `#f8f8f8` must not be replaced with invented brand-color decoration, are a derived editorial implementation inference from the verified surfaces; they are not Pet Friends-authored or a separately published UI specification. Product photography sits on `#f8f8f8` card surfaces; do not replace it with invented brand-color decoration.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `badge`, `input`, `card`, `avatar`) and a value set. Those types are preserved per component, and only where the token set records them. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. Absence of a capture is not a `not-applicable` reason. Every interactive-kind verdict, every applicability verdict, the reason given for either, preserving the §14 table as the source state contract rather than as per-component computed observations, treating a missing action/target/state as an open question rather than as a finding that the control is inert, keeping chip YAML `#000000` beside the live label specimen `#2d3035`, keeping the 20px search font on the search field rather than as a type-role row, keeping keyword-pill `19px` beside `tokens.rounded.full: 9999` / 50%, and keeping overlay `20px` as a component radius rather than a YAML `tokens.rounded` step, are a derived editorial implementation inference from the verified surfaces; they are not Pet Friends-authored or a separately published UI specification. This is not a claim that state coverage is finished.

The source's closing note places token-level claims in §1–9 (live inspect) and the state table in the philosophy layer (§10–15). The §14 treatments are preserved below as the source state contract, not as per-component computed observations.

### Category / Delivery Chip

- Role: header category / delivery-address selector chip ("강아지", "배송지 입력")
- Primitive type: `button` · Kind: interactive
- Background: `#fff1f5`
- Text: `#000000`
- Radius: 36px (`tokens.rounded.pill`)
- Padding: 4px 8px 4px 12px
- Height: 32px
- Use: Header category / delivery-address selector chip
- The delivery-address label specimen "배송지 입력" is the Label type role (14px / 700 / Lific / tracking `-0.2px`). Source §2 / YAML put chip text at `#000000`; the live label specimen computes `#2d3035`. Both writings stay.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web selector; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A category or address selector can be unavailable; the system's disabled treatment applies |
| loading | not-applicable | This chip selects a category or opens address selection; it does not commit an operation whose outcome it would report |
| error | not-applicable | Same role reason: a selector is not a commit control that reports failure |
| success | not-applicable | Same role reason: selection is not an operation with a success result |

### Primary Action (Pink)

- Role: primary brand action — solid vivid-pink fill used for add-to-cart / buy and headline CTAs
- Primitive type: `button` · Kind: interactive
- Background: `#ff4081`
- Text: `#ffffff`
- Font: 16px / 700 Lific
- Use: Primary brand action — solid pink fill (add-to-cart / buy)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system declares a disabled treatment — muted grey `#9ca1aa` text on a reduced-opacity surface, with pink actions fading rather than turning grey |
| loading | applicable | Commits add-to-cart / buy; the system reports loading on the product grid and as a confirmation path |
| error | applicable | The system declares an inline failure message with a retry rather than an in-button treatment |
| success | applicable | The system declares Success (added to cart) — brief confirmation in the pink brand tone; quick path to cart |

### Search Field

- Role: main product search field
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#2d3035`
- Border: 1px solid `#e9ebec`
- Radius: 6px (`tokens.rounded.sm`)
- Padding: 15px 44px 15px 16px
- Height: 52px
- Font: 20px / 500 Lific
- Use: Main product search field, placeholder 어떤 상품을 찾으시나요?
- The 20px / 500 font is this control's record. It is not a type-role row. `tokens.spacing.base: 15` is the vertical padding; `tokens.spacing.gutter: 44` is the right gutter for the search/clear icon.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | applicable | The system declares Loading (search): inline spinner in the 52px field; previous results stay visible where possible |
| error | applicable | Form field; the system declares a field-level message below the input describing what is valid, not just "필수" |
| success | not-applicable | Query results appear in the listing, not as a success treatment on the field |

### Search-Keyword Pill

- Role: trending search-keyword pill on the hero (rendered at 0.5 alpha)
- Primitive type: `badge`
- Background: `#ffaac7`
- Text: `#ffffff`
- Radius: 19px
- Padding: 3px 15px
- Height: 30px
- Use: Trending search-keyword pill (rendered at 0.5 alpha over hero)
- 19px is this component's radius. It is not `tokens.rounded.full: 9999` and not `tokens.rounded.pill: 36`. Source §5 also lists keyword pills under Full (9999px / 50%); both writings stay.

The source attaches no action, target, or state to the pill itself, so neither an interactive kind nor a state-applicability map is declared for it here. Treat that as an open question, not as a finding that the pill is inert.

### Product Card

- Role: product image card surface in grids / carousels
- Primitive type: `card`
- Background: `#f8f8f8`
- Radius: 16px (`tokens.rounded.lg`)
- Use: Product image card surface in grids / carousels
- Source §9 also writes the card's title/price pairing: product title 13px Lific weight 400, `#2d3035`; discount percentage 16px weight 700 in signal red `#f33f46`. 16px radius is `tokens.rounded.lg`, not `tokens.spacing.lg: 16`.

The source attaches no action, target, or state to the card itself, so neither an interactive kind nor a state-applicability map is declared for it here. Treat that as an open question, not as a finding that the card is inert.

### Image Counter Overlay

- Role: carousel index / image counter ("2/14"), rendered at ~0.6 alpha over media
- Primitive type: `badge` · Kind: non-interactive — it displays an index over media, and the source attaches no action, target, or interactive treatment to it. No state-applicability map is declared.
- Background: `#1c1e21`
- Text: `#ffffff`
- Radius: 20px
- Padding: 5px 8px
- Use: Carousel index / image counter (rendered at 0.6 alpha)
- 20px is this component's radius. It is not a YAML `tokens.rounded` step.

### Circular Avatar

- Role: circular avatar / icon frame in list and community surfaces
- Primitive type: `avatar` · Kind: non-interactive — it is a frame, and the source attaches no action, target, or interactive treatment to it. No state-applicability map is declared.
- Radius: 9999px (border-radius 50%)
- Use: Circular avatar / icon frame (border-radius 50%)
- `9999px` is `tokens.rounded.full`.

### State record

The source's state contract, preserved with its values and copy. The source places this table in the philosophy layer, not in the live-inspect token claims:

| State | Treatment |
|---|---|
| **Empty (search, no results)** | White canvas. Charcoal (`#2d3035`) line explaining no matching products, with a pink (`#ff4081`) suggestion to browse categories. Playful, never a dead end. |
| **Empty (cart)** | Charcoal single line plus a pink CTA back to shopping. Warm, low-pressure tone. |
| **Loading (product grid)** | Skeleton cards on `#f8f8f8` at final 16px-radius dimensions. Flat pulse, no shadow shimmer — consistent with the shadowless system. |
| **Loading (search)** | Inline spinner in the 52px field; previous results stay visible where possible. |
| **Error (fetch failed)** | Inline message in charcoal with a plain-language explanation and a retry. No bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input in a warm tone; describes what's valid, not just "필수". |
| **Success (added to cart)** | Brief confirmation in the pink brand tone; quick path to cart. No guilt, no clutter. |
| **Skeleton** | `#f8f8f8` blocks at final dimensions, 16px radius, flat pulse. |
| **Disabled** | Muted grey (`#9ca1aa`) text on reduced-opacity surface; pink actions fade rather than turn grey to preserve brand read. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- **Mobile-first, single-column app shell** (the desktop `www` host redirects to the `m.` mobile commerce surface)
- Sticky header: category + delivery chips over a full-width search field
- Trending-keyword pill row directly beneath search
- Product merchandising in horizontally scrolling carousels and 2-up grids, each product on a `#f8f8f8` card at 16px radius
- Section headlines ("최저가 도전 사료 모음!") anchor each merchandising band

Whitespace the source records:

- **Merchandising density with breathing room**: product grids are information-rich, but each card gets a clean grey surface and generous rounding so the page never feels cramped.
- **Flat segmentation**: sections separate by background tint (`#f8f8f8` grey, `#fff1f5` pink, `#fafafa` alt) and `#e9ebec` hairlines, not shadow.
- **Pill rhythm**: repeated rounded chips and pills create a consistent, friendly horizontal cadence.

The source characterizes that density, flat segmentation, and pill rhythm in those words. That characterization is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

Responsive behavior the source states:

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Primary target — single column app shell, chips + search header, carousels |
| Tablet | 640-1024px | Wider grids, 2–3-up product cards |
| Desktop | >1024px | `www` host redirects to the `m.` mobile commerce experience; layout stays app-width and centered |

- **Touch targets:** Category / delivery chips at 32px height with asymmetric padding — comfortably tappable. Search field at 52px height, full-width. Keyword pills at 30px height, 3px 15px padding.
- **Collapsing:** Header: category + delivery chips stay pinned above the search field. Product carousels scroll horizontally on narrow viewports. Merchandising bands stack vertically, each keeping its tinted background. Product cards maintain 16px radius across breakpoints.
- **Imagery:** Product photography sits on `#f8f8f8` card surfaces at all sizes, no shadow. Media carousels carry the `#1c1e21` overlay counter regardless of viewport. Cards maintain consistent 16px radius.

Treating that breakpoint table, collapsing strategy, image behavior, and the touch-target reading "comfortably tappable" as source-stated intended behavior rather than as a captured cross-viewport pass is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The product language is Korean. Hangul product strings are the strings; English beside a line is a reading aid, not the label.

The source characterizes the voice as **warm, playful, and reassuring** — it speaks to owners as fellow "집사" (butlers/servants of their pets) raising "내새꾸" (my babies), turning the transactional act of buying pet food into a caring, community-flavored ritual. The register is upbeat and benefit-first, unafraid of a pun: the search placeholder reads "어떤 상품을 찾고 있개?" — swapping 개 (dog) into "찾고 있어?" for a smile. Copy leads with the deal and the emotional payoff, then backs it with hard numbers (재구매율 89%, 최저가). The Hangul-vs-English reading-aid rule, that characterization, and the tone table below, are a derived editorial implementation inference from the verified surfaces; they are not Pet Friends-authored or a separately published UI specification.

The YAML search-field placeholder is "어떤 상품을 찾으시나요?". The pun "어떤 상품을 찾고 있개?" is a second search-surface string the source records in Voice samples and in its closing comment. Keeping those two strings as two writings, rather than rewriting the pun onto the 52px field, is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

| Context | Tone |
|---|---|
| Section headlines | Upbeat, benefit-first, one emphasized phrase in pink. "집사님을 위한 오늘 특가!" |
| Product titles | Plain, descriptive, brand + spec. Quiet grey, no hype. |
| Discount / price | Numeric and confident. Big red "%", "최저가 도전". |
| Search / empty prompts | Playful, pet-punny. "어떤 상품을 찾고 있개?" |
| Trust / community copy | Warm, proof-backed. "써봐야 아니까! 심쿵 체험단", "재구매율 89%". |

Voice samples (verbatim from live surfaces):

- "반려동물 1등 쇼핑몰, 펫프렌즈" — page title / positioning.
- "내새꾸 친구들에게 재구매율 89%를 보이는 영양/기능" — merchandising headline (proof-backed care).
- "육아비는 펫프랑 나눠요
집사님을 위한 오늘 특가!" — section headline (community + deal).
- "어떤 상품을 찾고 있개?" — search placeholder (pet pun).

**Forbidden register**: cold marketplace/logistics jargon, guilt-based pet-parent pressure, undefined promotional fine print, hype that isn't backed by a concrete number. That prohibition list is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

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

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict between its own values. Listing them as unnamed values rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not Pet Friends-authored or a separately published UI specification.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Pet Friends evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Press scale / opacity.** The system states that pill chips respond to press with a subtle scale/opacity shift but attaches no scale or opacity value.
- **Search-keyword pill and product card interaction.** Both are declared with a primitive type and no action, target, or state attached, so their interactive kind stays open rather than settled in either direction.
