# NRISE (WIPPY) Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

NRISE (엔라이즈) is the Korean consumer-tech company behind WIPPY (위피), a No.1-positioned social-discovery app, and 콰트 (Quat), a habit-forming health product. Catalog identity is `display_name_kr`: 엔라이즈 (위피). This contract covers the two first-party web surfaces the source inspected for tokens: the corporate home at `https://www.nrise.net/` and the WIPPY product/career surface at `https://career.nrise.net/ko/wippy`. Every value stays attached to the surface that established it. Reading those two URLs as this contract's token surfaces, and keeping every value attached to the surface that established it, are a derived editorial implementation inference from the verified surfaces; they are not NRISE-authored or a separately published UI specification.

The captured web layer is a near-black-on-white system where a single saturated pink is the only chromatic event on the page. The canvas is pure white (`#ffffff`) with occasional soft-grey blocks (`#fafafa`); text and headings sit in a warm near-black ink (`#222222`) rather than pure black for display, while body copy defaults to true black (`#000000`). The typographic personality is unmistakably Korean-modern: everything is set in **Pretendard**, the de-facto Korean product sans, with headlines at weight **700**. The corporate hero and section titles land at 38px, the WIPPY product hero jumps to 48px, and section heads on the product surface sit at 36px — all bold, all tight-leading, all in the same near-black `#222222`. Small grey eyebrow labels (`#767676`) in Latin caps ("MISSION", "HISTORY", "NEWS") introduce each block at 19px / weight 400. Nav labels drop to 14px / weight 600 in a near-black nav ink (`#212429`). There is no second typeface and no light display weight — the hierarchy is carried entirely by size and the bold/regular weight split. Live inspection found `box-shadow: none` across the hero, nav, headings, and section CTAs — only a single floating scroll-to-top button carries a subtle two-layer shadow. Separation comes from flat surfaces and dark blocks: a deep-neutral ladder (`#212529`, `#212126`, `#111111`) anchors dark sections and cards, while white cards round at 10–12px. Interactive chrome splits in two: **pill CTAs** at 30px radius (the pink `#ff0056` WIPPY action and a black `#000000` twin for the second product) on the corporate home, and a sharper 8px solid black button on the WIPPY career surface. The hex values, the Pretendard face, the sizes, the radii, and `box-shadow: none` are recorded. Readings of that layer as confident, editorial, and almost aggressively monochrome; of the type as unmistakably Korean-modern; of the Latin eyebrows as a magazine-like rhythm; of the design getting out of the way so the app screenshots and the one pink CTA can do the talking; of a flat, fast, mobile-native aesthetic; and of the visual language of a young Korean app studio, not a legacy corporate site, are a derived editorial implementation inference from the verified surfaces; they are not NRISE-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. NRISE (엔라이즈) is a Korean consumer-tech studio that builds mobile products around two human needs: connection and healthy routine. Its flagship is **WIPPY (위피)**, positioned on its own surface as Korea's No.1 social-discovery service — "나를 표현하고 상대를 발견하는 공간" (a space to express yourself and discover others) and "같은 관심사를 가진 동네 친구와의 만남" (meeting neighborhood friends who share your interests). Its second product line, **콰트 (Quat)**, sits under the mission "건강한 습관을 형성하여 삶의 변화를 제공합니다" (forming healthy habits to deliver life change). Together the two products express the company's stated umbrella value: "NRISE가 세상에 전하는 가치." The company frames its work in emotional-benefit terms rather than technical ones. Where the corporate mission talks about "편안한 만남" (comfortable connection) delivering "일상의 행복" (everyday happiness), WIPPY's product surface foregrounds safety as a first-class value — "더 나은 연결을 위해 안전을 최우선의 가치로" — a deliberate stance for a social-discovery category that often carries trust concerns. A press item observed on the homepage ("콰트·위피 눈부신 활약…엔라이즈, 2년 연속 흑자 달성", dated 2026.04.08) points to a business narrative of two-consecutive-years profitability driven by both products. Company facts above beyond the live homepage/career surfaces — e.g. the exact founding year and leadership — are not asserted here; the narrative is anchored to verbatim, live-observed positioning and the dated press headline. The years in that press date, the two-product span, the verbatim positioning lines, and that non-assertion of founding year and leadership are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that positioning-and-press narrative as context that does not by itself supply interface tokens, reading the company's copy as emotional-benefit framing rather than technical framing, reading the safety line as a deliberate stance for a trust-sensitive category, and reading the dated press headline as a two-product profitability narrative, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.

What NRISE refuses, visible in its design: the busy, shadow-stacked chrome and multi-color palettes of legacy portals, and the dark-pattern urgency common to engagement-driven social apps. What it embraces: a flat, fast, monochrome canvas; a single trustworthy pink reserved for the one action that matters; bold Pretendard headlines that speak plainly; and copy that frames the product around human feeling and safety rather than metrics. That refusal/embrace reading is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, and refusing to take them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification. Each names a surface or control the source records.

- Read MISSION, HISTORY, NEWS, and "NRISE가 세상에 전하는 가치" on `https://www.nrise.net/`.
- Open WIPPY from the pink CTA "더 알아보기".
- Open the second product from the dark CTA "더 알아보기" on the corporate home.
- Open WIPPY career from "바로가기" on `https://career.nrise.net/ko/wippy`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable NRISE/WIPPY user segments, not individual people, so those biographies are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience grouping those archetypes were said to be informed by: young Korean adults seeking new connections, users building healthy routines. Dropping those fictional archetypes rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.

- Pretendard everywhere at weight 700 for headlines — no second typeface, no light display weight
- A single saturated pink (`#ff0056`) reserved for the primary WIPPY CTA — the only chromatic accent
- Warm near-black ink (`#222222`) for headings; true black (`#000000`) for body and dark CTAs
- Monochrome dark ladder — `#212529` / `#212126` / `#111111` — for dark sections, cards, and the floating action
- Near-shadow-free: separation via flat white / grey (`#fafafa`) surfaces and dark blocks, not elevation
- Latin grey eyebrow labels (`#767676`) at 19px introducing each editorial section
- Pill geometry on the corporate home (30px CTAs) vs a sharper 8px solid button on the product surface
- Quiet 14px / weight 600 nav labels in near-black nav ink (`#212429`)

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not NRISE-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **One action, one color.** Pink (`#ff0056`) means "do this." *UI implication:* reserve the saturated pink exclusively for the primary WIPPY CTA so the next step is never ambiguous on an otherwise monochrome screen.
2. **Feeling before features.** The brand sells everyday happiness and healthy habits, not specs. *UI implication:* lead sections with emotional-benefit headlines; let product screenshots carry the detail.
3. **Safety is a design value.** For a social-discovery product, trust is a feature. *UI implication:* surface safety and control copy prominently and calmly; never bury it.
4. **Flat and fast.** Mobile-native clarity beats decorative depth. *UI implication:* no shadows; separate with white, grey, and dark blocks; keep the page light and quick to scan.
5. **Bold, single-voice type.** Pretendard 700 headlines carry the whole hierarchy. *UI implication:* use size and the bold/regular split for structure — never reach for a second typeface or a light display weight.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not NRISE-authored or a separately published UI specification.

- Set every headline in Pretendard weight 700 — it's the entire display voice
- Use warm near-black ink (`#222222`) for headings and true black (`#000000`) for body
- Reserve pink (`#ff0056`) for the primary WIPPY CTA — keep it the single "action" color
- Separate sections with flat surfaces (`#ffffff` ↔ `#fafafa` ↔ dark blocks), not shadows
- Introduce sections with muted-grey (`#767676`) Latin-caps eyebrow labels at 19px
- Use pill geometry (30px) for the home CTAs and a sharper 8px solid button on the product surface
- Anchor dark sections and cards with the neutral ladder (`#212529`, `#212126`, `#111111`)
- Keep body and hero leading generous (1.5) for hangul legibility

### Avoid

The source states these eight as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not NRISE-authored or a separately published UI specification.

- Add drop shadows for elevation — NRISE is flat; only the floating TOP button carries one
- Spread pink across many elements — it dilutes the single-action signal
- Introduce a second typeface or a light display weight — Pretendard 700/400 is the whole system
- Use pure black (`#000000`) for headings — reserve the warm near-black `#222222`
- Mix in a second accent hue — pink is the only saturated color
- Set headlines in a regular weight — display is always 700
- Over-tint surfaces with color — the neutrals are strictly greyscale
- Bury the CTA in decoration — the one pink pill should read as the obvious next step

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, calling `#ff0056` the single "action" color, calling `#222222` softer than pure black with a premium weight, calling `#212429` a hair cooler than the heading ink, and keeping `tokens.colors.canvas` `#ffffff` unmerged from `tokens.colors.on-dark` `#ffffff`, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification. The hex values and the recorded uses beside them are live-computed.

#### Primary

- **WIPPY Pink** (`#ff0056`): The single saturated brand accent and primary CTA background. A hot magenta-pink used almost exclusively for the WIPPY product call-to-action — the system's one "action" color. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is `#ff0056`.

#### Ink & Text

- **Ink** (`#222222`): Primary heading and display color. A warm near-black used for every headline (H1/H2/H3) and most section text — softer than pure black, which gives the type a premium weight. Token-set path `tokens.colors.ink`.
- **Pure Black** (`#000000`): Body-copy default and the fill of the black pill/solid CTAs and dark sections. Maximum contrast where it counts. Token-set path `tokens.colors.ink-pure`.
- **Nav Ink** (`#212429`): The near-black used for top-nav item labels — a hair cooler than the heading ink. Token-set path `tokens.colors.ink-nav`.
- **Muted Grey** (`#767676`): Eyebrow labels ("MISSION", "HISTORY", "NEWS"), metadata, and lowest-emphasis captions. Token-set path `tokens.colors.muted`.
- **Muted Alt** (`#8c8c8c`): A lighter grey companion for secondary captions and fine print. Token-set path `tokens.colors.muted-alt`.

#### Neutral & Surface

- **Pure White** (`#ffffff`): Page background, white cards, and text on dark/pink surfaces. Token-set path `tokens.colors.canvas`.
- **Surface Grey** (`#fafafa`): Soft off-white block background for alternating sections. Token-set path `tokens.colors.surface`.
- **Neutral 900** (`#212529`): The deepest working neutral — background of the floating scroll-to-top action and dark neutral surfaces. Token-set path `tokens.colors.neutral-900`.
- **Neutral 850** (`#212126`): Near-black card background for dark product feature cards on the WIPPY surface. Token-set path `tokens.colors.neutral-850`.
- **Section Dark** (`#111111`): Very dark block background for immersive full-width dark sections. Token-set path `tokens.colors.section-dark`.

#### On-Dark

- **On Dark** (`#ffffff`): White text and icons placed on any of the dark neutral or pink surfaces. Token-set path `tokens.colors.on-dark`. Same hex as `tokens.colors.canvas`; the two keys stay unmerged.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 12 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 32 | `tokens.spacing.xl` |
| xxl | 48 | `tokens.spacing.xxl` |
| section | 64 | `tokens.spacing.section` |

The source also names a base unit of 8px and the same scale in px: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px. Notable recorded paddings: Button padding lands at 8px 16px (home pills) and 10.5px 24px (product solid button); section rhythm is generous and vertical. `tokens.spacing.xs: 4` is not `tokens.rounded.xs: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8` and not the product-surface solid button's 8px radius. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12`. `tokens.spacing.base: 16` is not the 16px type roles and not the 16px of `8px 16px` pill padding. `tokens.spacing.lg: 24` is not `tokens.rounded.xl: 24`. `tokens.spacing.xl: 32` is not the nav item height. `tokens.spacing.xxl: 48` is not `tokens.rounded.jumbo: 48` and not the 48px control heights. `tokens.spacing.section: 64` is not a type size. Keeping each number on its own key path, rather than treating a shared numeral as the same token, and reading generous vertical rhythm as editorial spacing over density, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them:

| Step | Value | Token-set path | Source use |
|---|---:|---|---|
| xs | 4 | `tokens.rounded.xs` | Extra-small (4px): nav item buttons |
| sm | 8 | `tokens.rounded.sm` | Small (8px): the product-surface solid button |
| md | 10 | `tokens.rounded.md` | Medium (10px): white news/list cards |
| lg | 12 | `tokens.rounded.lg` | Large (12px): dark feature cards |
| xl | 24 | `tokens.rounded.xl` | XL (24px): the floating scroll-to-top action |
| pill | 30 | `tokens.rounded.pill` | Pill (30px): the home-page CTA pills |
| jumbo | 48 | `tokens.rounded.jumbo` | Jumbo (48px): large pill/avatar-scale rounding |

`tokens.rounded.xs: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.sm: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.md: 10` is the news-card step and is not a spacing key. `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.xl: 24` is not `tokens.spacing.lg: 24`. `tokens.rounded.pill: 30` is the home CTA step. `tokens.rounded.jumbo: 48` is not `tokens.spacing.xxl: 48` and not the 48px solid-button or floating-top height. Reading pill geometry (30px) as the corporate-home CTA and 8px as the sharper product-surface solid button, and keeping those local control radii on their components as well as on these steps, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, headings, nav, section CTAs, cards — the default |
| Tint (Level 1) | `#fafafa` / dark block background shift | Section separation without elevation |
| Floating (Level 2) | `rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.06) 0px 8px 24px` | The single floating scroll-to-top button |

Token-set path `tokens.shadow.none`: `none`. Token-set path `tokens.shadow.floating`: `rgba(0,0,0,0.04) 0px 1px 2px 0px, rgba(0,0,0,0.06) 0px 8px 24px`. The YAML form includes the `0px` spread on the first layer; the Level 2 / component writing omits that trailing `0px`. Both writings stay; neither replaces the other.

Live inspection returned `box-shadow: none` across the hero, nav, headings, cards, and section CTAs on both surfaces — the only element carrying a shadow is the floating scroll-to-top button, which uses a soft two-layer drop. Depth and grouping are otherwise communicated entirely through flat surfaces: white (`#ffffff`), soft grey (`#fafafa`), and the dark neutral ladder (`#212529`, `#212126`, `#111111`). When emphasis is needed the system reaches for the pink `#ff0056` CTA or a dark block, never elevation. The source's token note states Near-shadowless flat surfaces. Reading that as a near-shadowless, flat system, and keeping both the YAML floating-shadow writing (with the trailing `0px` spread on the first layer) and the Level 2 / component writing (without that trailing `0px`) rather than replacing one with the other, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, and shadow on the corporate home and the WIPPY career surface. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this motion section. The durations, easing roles, signature motions, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not NRISE-authored or a separately published UI specification.

**Durations**:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to NRISE evidence, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — sheets, cards, CTAs |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and quiet — consistent with the flat, fast aesthetic.
- CTAs respond to press with a subtle scale/opacity shift; content fades in from below at `motion-standard / ease-enter`; the floating scroll-to-top eases in on scroll.
- No bounce or spring — a trust-forward social product signals steadiness, not gimmickry.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.

Treating those three curve values as untraceable and omitting them rather than promoting them as NRISE motion tokens, and requiring the five-kind per-component computed gate before any curve promotion, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The rows below sort this record's font evidence into classes. The sorting, treating Pretendard as the live computed family rather than as a NRISE-owned exclusive face, treating the fallback members as fallbacks rather than as a second brand face, and refusing to substitute a system font while calling it Pretendard, are a derived editorial implementation inference from the verified surfaces; they are not NRISE-authored or a separately published UI specification. The observation inside each row stands on its own.

| Evidence class | Resolution |
|---|---|
| Official product-use | The corporate home and the WIPPY career surface state the products and the Korean names 엔라이즈 / 위피. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification. |
| Live computed surface-use | Both captured surfaces compute visible text as Pretendard. The source records it as the single family for the entire system, from display to body. |
| Official distributed asset | No NRISE-exclusive distributed type family was verified. Pretendard is an upstream face. That "no exclusive distributed family" reading is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification. |
| Declared-only | The fallback members `-apple-system`, `system-ui`, `Apple SD Gothic Neo`, `Noto Sans KR`, and `Malgun Gothic` are declared. They are fallbacks, not a second brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification. |
| License | This record does not establish a NRISE font-license notice for Pretendard. Pretendard is an upstream face, not a NRISE-owned brand asset; that classification is a derived editorial implementation inference from the verified surfaces, and it is not NRISE-authored or a separately published UI specification. |

### Family

- **Sans**: `Pretendard` — Token-set path `tokens.typography.family.sans`. The single family for the entire system, from display to body.
- **Fallback:** `-apple-system`, `system-ui`, `Apple SD Gothic Neo`, `Noto Sans KR`, `Malgun Gothic`.

A fallback member of a stack is never presented as the brand face. Do not replace Pretendard with a system substitute. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.

### Type roles

Line heights stay in the form the source verified them: YAML unitless `1.50` / `1.35` / `1.33` beside the source's own px writings where both exist. Keeping those YAML unitless ratios beside the source's own px and rem writings, and keeping each YAML `use` string beside the hierarchy-table note without replacing either, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Token-set use | Notes |
|---|---|---:|---:|---:|---|---|
| WIPPY Hero | Pretendard | 48px (3.00rem) | 700 | 1.50 (72px) | WIPPY hero headline, Pretendard Bold | Product hero headline on the career surface. Token-set path `tokens.typography.display-hero`. |
| Corporate Section | Pretendard | 38px (2.38rem) | 700 | 1.35 (51.3px) | Corporate section titles (NRISE가 세상에 전하는 가치) | Corporate section titles. Token-set path `tokens.typography.section`. |
| Product Section | Pretendard | 36px (2.25rem) | 700 | 1.33 | Product section titles on the career/WIPPY surface | Section titles on the WIPPY surface. Token-set path `tokens.typography.section-sm`. |
| Sub-heading | Pretendard | 23px (1.44rem) | 700 | 1.35 (31px) | Card / feature subheads | Card / feature subheads. Token-set path `tokens.typography.subheading`. |
| Logotype | Pretendard | 20px (1.25rem) | 700 | 1.50 (30px) | Corporate logotype in the nav | Corporate logotype in the nav. Token-set path `tokens.typography.logo`. |
| Eyebrow | Pretendard | 19px (1.19rem) | 400 | 1.50 (28.5px) | Section eyebrow labels (MISSION, HISTORY, NEWS) | Latin caps section labels, muted grey. Token-set path `tokens.typography.eyebrow`. |
| Body | Pretendard | 16px (1.00rem) | 400 | 1.50 (24px) | Body copy, news items, CTA labels | Body copy, news items, button labels. Token-set path `tokens.typography.body`. |
| Nav Link | Pretendard | 14px (0.88rem) | 600 | 1.50 (21px) | Top-nav item labels | Top-nav item labels. Token-set path `tokens.typography.nav`. |

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.

- **One font, two weights**: Pretendard carries everything. Weight 700 is display/heading; weight 400 is body and eyebrow; nav sits at 600. There is no third typeface and no light display weight.
- **Weight is the hierarchy**: With a single family, the bold/regular contrast (and size) does all the hierarchy work — headlines are always 700, body always 400.
- **Comfortable leading**: Body and hero run at a generous 1.5 line-height for hangul legibility; section titles tighten only slightly (~1.33–1.35).
- **Latin eyebrows over hangul body**: Uppercase Latin labels ("MISSION", "HISTORY") in muted grey introduce hangul content blocks — a deliberate editorial device.

### Assets

- Catalog identity points at `logo.type: favicon`, slug `https://opening-attachments.greetinghr.com/20230601/02c9543a-74ed-4592-853f-17b2adc07c5d/nrise_logo_launchericon2.png`. The sibling records that URL as a brand launcher icon referenced as a preload image on nrise.net, hosted on greetinghr.com. Treating it as the catalog's selected launcher-icon pointer rather than as a NRISE-hosted brand file is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.
- App screenshots and product illustrations carry no shadow at any size, consistent with the flat system. Do not replace them with invented brand-color decoration. That no-shadow recording, and the prohibition on replacing those screenshots with invented brand-color decoration, are a derived editorial implementation inference from the verified surfaces; they are not NRISE-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `card`, `badge`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA or nav item that commits no operation in place, a scroll-to-top control with no commit, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided.

The source's live inspection recorded computed default styling. No `focus-visible` capture is recorded; no `focus-visible` row carries a treatment. Hover is not recorded on these controls except as a duration use in the motion table; pointer-web hover stays applicable and the visual treatment is omitted.

Every interactive-kind verdict, every applicability verdict, and the reason given for either — including keeping each YAML `use` string as a Token-set use row beside the §4 writing, keeping YAML font / padding / radius / height / active byte forms beside the §4 writings, treating the pink and dark pills and the career solid button as destination CTAs, treating nav items as destination items, treating the floating TOP control as a scroll action, and omitting kind and a state-applicability map where the source supplies no interaction evidence for a container — is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification. This is not a complete state-coverage claim.

### WIPPY CTA (Primary)

- Role: WIPPY product call-to-action ("더 알아보기") — the system's single saturated action
- Token-set use: WIPPY product CTA (더 알아보기) — the single signature pink action
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled pill
- Background: `#ff0056`
- Text: `#ffffff`
- Radius: 30px
- Padding: 8px 16px
- Height: 40px
- Font: 16px Pretendard weight 700. YAML font: `16px / 700`
- Domain: corporate home (`https://www.nrise.net/`)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; the system declares that the pink action fades rather than turning grey, and no opacity value is given |
| loading | not-applicable | This control takes the reader to a WIPPY destination; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; it does not commit an operation whose outcome it could report. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Dark Pill CTA

- Role: Second-product CTA ("더 알아보기") on the corporate home — a monochrome twin of the pink pill
- Token-set use: Second-product CTA (더 알아보기) on the corporate home
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled pill
- Background: `#000000`
- Text: `#ffffff`
- Radius: 30px
- Padding: 8px 16px
- Height: 40px
- Font: 16px Pretendard weight 700. YAML font: `16px / 700`
- Domain: corporate home (`https://www.nrise.net/`)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control takes the reader to a second-product destination; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; it does not commit an operation whose outcome it could report. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Solid Button (Product surface)

- Role: WIPPY career primary button ("바로가기") — sharper geometry than the home pills
- Token-set use: WIPPY career primary button (바로가기)
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled rectangle
- Background: `#000000`
- Text: `#ffffff`
- Radius: 8px
- Padding: 10.5px 24px
- Height: 48px
- Font: 16px Pretendard weight 400. YAML font: `16px / 400`
- Domain: WIPPY career surface (`https://career.nrise.net/ko/wippy`)
- The 8px radius is this control's radius and the `tokens.rounded.sm: 8` step. It is not `tokens.spacing.sm: 8`. The 48px height is this control's height; it is not `tokens.rounded.jumbo: 48` and not `tokens.spacing.xxl: 48`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web CTA; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control takes the reader to a WIPPY career destination; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; it does not commit an operation whose outcome it could report. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Nav Item

- Role: Top-nav item (HOME / PRODUCT / CULTURE / CAREER); the active item fills dark
- Token-set use: Top-nav item; active item fills dark
- Token-set active: `bg #222222 fg #ffffff`
- Primitive type: `button` · Kind: interactive
- Anatomy: labelled nav item
- Background: `#ffffff`
- Text: `#212429`
- Radius: 4px
- Padding: 5.5px 12px
- Height: 32px
- Font: 14px Pretendard weight 600. YAML font: `14px / 600`
- Active: background `#222222`, text `#ffffff`
- Domain: corporate home
- The 4px radius is this control's radius and the `tokens.rounded.xs: 4` step. It is not `tokens.spacing.xs: 4`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination control (HOME / PRODUCT / CULTURE / CAREER); it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | Destination item; the destination, not the item, reports failure. |
| success | not-applicable | Same role reason: reaching a nav destination is not an operation with a success result. |

### Floating Top Button

- Role: Scroll-to-top floating action — the one place the flat system uses elevation
- Token-set use: Scroll-to-top floating action button
- Primitive type: `button` · Kind: interactive
- Anatomy: floating action
- Background: `#212529`
- Text: `#ffffff`
- Radius: 24px
- Height: 48px
- Shadow: `rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.06) 0px 8px 24px`
- Token-set shadow: `rgba(0,0,0,0.04) 0px 1px 2px 0px, rgba(0,0,0,0.06) 0px 8px 24px`
- Domain: WIPPY career surface
- The 24px radius is this control's radius and the `tokens.rounded.xl: 24` step. It is not `tokens.spacing.lg: 24`. The 48px height is this control's height; it is not `tokens.rounded.jumbo: 48`.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A scroll control whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control scrolls the page; it commits no operation in place. |
| error | not-applicable | The scroll action commits no operation whose outcome this control would report. |
| success | not-applicable | Same role reason: scrolling is not an operation with a success result. |

### News Card (White)

- Role: News/press list card on the white canvas (no shadow)
- Token-set use: News/press list card on white canvas
- Primitive type: `card`
- Background: `#ffffff`
- Radius: 10px
- Domain: corporate home
- The 10px radius is this card's radius and the `tokens.rounded.md: 10` step.

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Dark Feature Card

- Role: Dark product feature card on the WIPPY surface
- Token-set use: Dark product feature card on the WIPPY surface
- Primitive type: `card`
- Background: `#212126`
- Text: `#ffffff`
- Radius: 12px
- Domain: WIPPY career surface
- The 12px radius is this card's radius and the `tokens.rounded.lg: 12` step. It is not `tokens.spacing.md: 12`.

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Eyebrow Label

- Role: Latin-caps section eyebrow ("MISSION", "HISTORY", "NEWS")
- Token-set use: Section eyebrow label (MISSION, HISTORY, NEWS)
- Primitive type: `badge`
- Kind: non-interactive — a section eyebrow label, not a control
- Text: `#767676`
- Font: 19px Pretendard weight 400. YAML font: `19px / 400`

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not NRISE-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no matches / no results)** | White canvas. A single near-black (`#222222`) line explaining there's nothing yet, with one pink (`#ff0056`) CTA to take the next step. No clutter. |
| **Empty (saved/list, none yet)** | Muted grey (`#767676`) single line: nothing saved yet, plus a calm path back. Honest, low-pressure. |
| **Loading (content fetch)** | Skeleton blocks at final card dimensions on `#ffffff` / `#fafafa`, 10–12px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Loading (action in progress)** | Inline progress on the button; the pink CTA keeps its color while disabled-pending, previous content stays visible. |
| **Error (fetch failed)** | Inline message in near-black (`#222222`) with a plain-language explanation and a retry. No bare "오류가 발생했습니다" — states what to do next. |
| **Error (form validation)** | Field-level message below the input; describes what's valid, not just "필수". |
| **Success (action complete)** | Brief inline confirmation in a calm tone; next-step detail linked immediately below. No celebratory emoji. |
| **Skeleton** | `#fafafa` blocks at final dimensions, 10–12px radius, flat pulse. |
| **Disabled** | Muted grey (`#8c8c8c`) text on a reduced-opacity surface; the pink action fades rather than turning grey, to preserve the brand read. |

These rows describe empty/loading/error/success treatments the source wrote at system level. They are not attached as visual treatments to the marketing destination controls above.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered single-column marketing layout with an editorial eyebrow → headline → content cadence per section
- Corporate home alternates white (`#ffffff`) and soft-grey (`#fafafa`) full-width bands; the WIPPY surface introduces full-width dark blocks
- News/press items sit in a list of white cards at 10px radius
- Feature content on the product surface uses dark cards (`#212126`) at 12px radius
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64
- Shape restated from `tokens.rounded`: nav 4 · product solid 8 · news cards 10 · dark cards 12 · floating TOP 24 · home pills 30 · jumbo 48

Whitespace philosophy, as the source states it:

- **Editorial spacing over density**: generous vertical rhythm between sections; each block breathes around its eyebrow-and-headline pair.
- **Flat segmentation**: sections separate by background shift (white ↔ `#fafafa` ↔ dark blocks), not by shadow or heavy borders.
- **Single-accent focus**: with only one saturated color, the pink CTA is the visual anchor of any screen it appears on.

Reading that cadence as editorial spacing over density, reading sections as flat segmentation by background shift rather than by shadow or heavy borders, and reading the pink CTA as the visual anchor of any screen it appears on, is a derived editorial implementation inference from the verified surfaces; it is not NRISE-authored or a separately published UI specification.

### Responsive behavior

The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not NRISE-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, CTAs full-width |
| Tablet | 640-1024px | Moderate padding, 2-up feature blocks |
| Desktop | 1024-1440px | Full layout, centered editorial columns, dark feature bands |

Touch targets the source records:

- Home CTA pills at 40px height, full pill for an unmistakable tap target
- Product solid button at 48px height with 24px horizontal padding
- Nav items at 32px height, spaced within the header
- Floating scroll-to-top at 48px, comfortably tappable

Collapsing strategy, as the source states it:

- Hero: 48px WIPPY / 38px corporate headlines scale down on mobile, weight 700 maintained
- Feature bands: multi-column → stacked single column
- White ↔ grey ↔ dark alternating sections maintain full-width treatment
- Eyebrow → headline → content stacks vertically at all sizes

Image behavior: App screenshots and product illustrations carry no shadow at any size, consistent with the flat system. Cards maintain 10–12px radius across breakpoints. The Desktop row keeps the source body's `1024-1440px` range.

<!-- design-md:section content-locales -->
## 6. Content & Locales

NRISE's voice is **warm, human, and reassuring** — a Korean consumer brand that frames technology in terms of everyday feeling rather than features. The corporate mission lines speak in the register of emotional benefit: comfortable connection and healthy habits, not KPIs. WIPPY's product copy is confident and safety-forward, positioning the app as a trustworthy space to be yourself. Copy is plain, declarative Korean, low on jargon and free of hype punctuation. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not NRISE-authored or a separately published UI specification. The Korean lines themselves are live-surface copy.

| Context | Tone |
|---|---|
| Corporate mission | Emotional-benefit framing. "편안한 만남을 통해 일상의 행복을 전달합니다." Warm, human. |
| Product headlines (WIPPY) | Confident, category-leading. "위피, 소셜 디스커버리 1위 서비스." Direct, not boastful. |
| Feature descriptions | Benefit-first, plain. Explains what the user gets, not the mechanism. |
| Trust / safety copy | Calm, principled. "더 나은 연결을 위해 안전을 최우선의 가치로." States the value plainly. |
| Press / news | Factual, understated. Chronological headlines with dates. |

**Voice samples (verbatim from live surfaces):**

- "편안한 만남을 통해 일상의 행복을 전달합니다" — corporate mission (comfortable connection → everyday happiness). *(verified live 2026-07-02)*
- "위피, 소셜 디스커버리 1위 서비스" — WIPPY product hero (category-leading positioning). *(verified live 2026-07-02)*
- "더 나은 연결을 위해 안전을 최우선의 가치로" — WIPPY safety value (safety as the top priority for better connection). *(verified live 2026-07-02)*

Further published strings the source records on the inspected surfaces, kept byte-exact:

- "NRISE가 세상에 전하는 가치"
- "나를 표현하고 상대를 발견하는 공간"
- "같은 관심사를 가진 동네 친구와의 만남"
- "건강한 습관을 형성하여 삶의 변화를 제공합니다"
- "콰트·위피 눈부신 활약…엔라이즈, 2년 연속 흑자 달성"
- date "2026.04.08"
- Nav: HOME / PRODUCT / CULTURE / CAREER
- Eyebrows: MISSION, HISTORY, NEWS
- Pink and dark CTAs: 더 알아보기
- Career primary: 바로가기

**Forbidden register**: hype punctuation and superlative stacking, fear- or urgency-based dark patterns, undefined jargon, anything that frames a social app as a numbers game rather than human connection.

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line.

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

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to NRISE evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Founding year and leadership.** The source states these are not asserted; the narrative is anchored to verbatim, live-observed positioning and the dated press headline.
- **The disabled opacity value.** The system states a reduced-opacity surface and a pink action that fades rather than turning grey, without naming the opacity.
- **The skeleton pulse.** The system declares flat blocks at final dimensions with a 10–12px radius and a flat pulse, without naming the pulse's duration or opacity range.
- Hover and `focus-visible` visual treatments on the declared controls
