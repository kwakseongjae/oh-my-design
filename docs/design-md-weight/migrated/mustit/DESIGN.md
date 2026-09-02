# MUSTIT Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

MUSTIT (머스트잇) is Korea's leading luxury resale marketplace connecting 1,300+ luxury brands and millions of monthly shoppers through a mobile-first, discovery-driven experience. This contract covers the first-party public surfaces the source inspected for tokens on 2026-06-03: the consumer homepage at `https://www.mustit.co.kr`, the mobile-first Nuxt.js SPA served from `m.web.mustit.co.kr`, the CI/BI brand page at `https://corp.mustit.co.kr/brand`, the corp brand CSS at `https://corp.mustit.co.kr/lib/css/mustit-corp.css`, and the Pretendard font CSS at `https://static-ux.mustit.co.kr/ux/service/common/pretendard.css`. YAML `tokens.source` is `prose-derived`. Catalog `primary_color` `#D00000` is the same red as `tokens.colors.primary` `#d00000`; they stay two writings, not a second red. Every value stays attached to the surface that established it. The main shopping app uses `#333` as the primary CTA (near-black), while the corp site uses `#000`/`#1F1F2C` for brand backgrounds; `#D00000` is consistent across both as the accent/discount/action color. Reading those inspected URLs as this contract's surfaces, keeping the CI/BI page and corp CSS as named brand sources that do not rewrite shopping-app component geometry, keeping catalog `primary_color` `#D00000` beside `tokens.colors.primary` `#d00000` rather than as a second red, keeping `#333` on the shopping CTA off corp `#000`/`#1F1F2C`, and keeping every value attached to the surface that established it, are derived editorial implementation inferences from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

MUSTIT projects a disciplined luxury-marketplace aesthetic: a near-black (`#1F1F2C`) and white canvas that recedes so individual product photography can dominate, accented by a single assertive brand red (`#D00000`) that marks every price-cut, badge, and primary CTA. The official brand philosophy — "Smart Luxury — Make the Best Discovery" — is made tangible through high-density list grids, tight typographic hierarchy in Pretendard, and a periscope-lens symbol (M SCOPE) that signals personal curation. Shadow use is deliberately restrained (max `rgba(0,0,0,.05)`), surfaces feel flat and minimal, and the red accent creates instant visual priority in a visually busy product grid. The hex values, the philosophy line, Pretendard, M SCOPE, the shadow cap, and the grid density are the source's own. The characterizations built on them — a disciplined luxury-marketplace aesthetic; a canvas that recedes so photography can dominate; a single assertive red; personal curation; flat and minimal; instant visual priority in a busy grid — are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. MUSTIT (머스트잇) launched in 2011 as Korea's first dedicated luxury goods marketplace, solving a single friction: accessing authenticated global luxury brands without travelling abroad or paying full retail. The platform grew into a multi-sided market, adding seller tools, authentication guarantees, and eventually a price-comparison engine across 1,300+ brands and 3.7 million+ product listings (2022 figures). The company's second chapter, captured in the tagline "Smart Luxury — Make the Best Discovery," shifts emphasis from access to personalised taste-curation. Where early MUSTIT competed on price and breadth, today it competes on intelligence: surfacing the right item from an enormous catalogue for each individual shopper. The M SCOPE periscope symbol — introduced in the 2020s rebrand — encodes this shift from "shopping" to "exploration." At its core, MUSTIT positions luxury not as an exclusive club but as an everyday enrichment layer. The brand promises that even a person who has never bought a designer item before can "minimise the risk of failure" through personalised guidance — democratising taste without cheapening aspiration. The year 2011, the first-marketplace sentence, the multi-sided market with seller tools, authentication guarantees, and the price-comparison engine, the 1,300+ brands and 3.7 million+ listings (2022 figures), the tagline, the 2020s rebrand and M SCOPE, and that closing design-position paragraph are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-rebrand narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not MUSTIT-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, each naming a surface or control the source records, is a derived editorial implementation inference from the verified surfaces; it is not MUSTIT-authored or a separately published UI specification. They do not come from the source's Personas section.

- Use the 2-column product grid on the mobile-first storefront served from `m.web.mustit.co.kr`.
- Search the catalog from the search input.
- Use the bottom fixed action bar (buy / cart).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its four entries illustrative, so those biographies are dropped rather than promoted, and no label, age band, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: millions of monthly shoppers; a multi-sided market with seller tools. Dropping the illustrative biographies rather than promoting them, carrying no label, age band, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

- Near-black brand navy `#1F1F2C` / `#1f1f2c` with white canvas `#ffffff` and a single brand red `#D00000` / `#d00000`
- Shopping-app primary CTA `#333333` / `#333`, kept off corp `#000` / `#1F1F2C`
- Pretendard for all UI copy; SD Gothic Neo on legacy web; Archivo Expanded on brand marketing/corp headings
- Mobile-first Nuxt.js SPA from `m.web.mustit.co.kr`; 16px gutter; 2-column product grid with an ~8px gap
- Restrained elevation, max `rgba(0,0,0,.05)`; product-image containers square, not rounded
- M SCOPE periscope symbol; official philosophy "Smart Luxury — Make the Best Discovery"

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Discovery over search.** Every surface should surface the unexpected, not just confirm known intent. *UI implication:* Prioritise curated carousels and personalised shelf rows over pure search-result grids.
2. **Trust before conversion.** Authentication guarantees and seller ratings must be visible at the product card level, not buried in PDP fine print. *UI implication:* Show authenticity badges inline on thumbnails; never hide them behind a tap.
3. **Speed as luxury.** A slow page is a brand failure in a segment where impatience is typical. *UI implication:* Use WebP images, skeleton loading, and SSR; never show empty-state jumps on first paint.
4. **Red means action.** The brand red is a semantic signal, not a decoration. *UI implication:* Apply `#D00000` only to discount labels, CTA buttons, and active states — never to illustrative or informational copy.
5. **Mobile is the brand.** The desktop experience is secondary. *UI implication:* Design all layouts at 375px width first; use fixed px font sizes; lock zoom.

### Application rules

The source states these six as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

- Use `#D00000` exclusively for price discounts, sale badges, and primary conversion CTAs
- Keep all button radius at 4px for UI elements; use 17px+ only for pill chips/filter controls
- Use Pretendard weight 700 for all prices and product names to create scan hierarchy
- Keep section backgrounds alternating between `#ffffff` and `#fafafa` for visual rhythm
- Apply `transition: all 0.2s ease` for interactive micro-feedback (hover/active states)
- Use the 16px horizontal gutter consistently across all list and card views

### Avoid

The source states these five as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

- Don't mix the brand red `#D00000` with decorative elements — reserve it for urgency/action signals
- Don't use more than two typeface families in any single view (Pretendard + one brand face)
- Don't apply heavy shadows (`rgba >0.1`) — the luxury positioning demands minimal depth cues
- Don't round product image containers — keep them square with sharp corners to frame merchandise
- Don't use the outlet burgundy `#8c1e46` outside of the Outlet category badge context

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Role names follow the source's own labels and token-set keys. YAML writes lowercase hex; source §2 spells several of the same roles in mixed case; both forms stay on the row. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping catalog `primary_color` `#D00000` beside `tokens.colors.primary` `#d00000`, keeping `tokens.colors.canvas` `#ffffff` off `tokens.colors.on-primary` `#ffffff`, keeping shopping-app `#333` / `#333333` off `tokens.colors.brand` `#1f1f2c` / `#1F1F2C` and off corp `#000`, keeping §2 Text Tertiary `#555555` as a §2 writing that is not a YAML `tokens.colors` key, keeping success-toast `#12cf35` as a §14 writing that is not a YAML `tokens.colors` key, keeping `#aaaaaa` / `#aaa` on tab inactive and search placeholder rather than as a YAML color key, keeping `#dddddd` / `#ddd` on disabled-button and sold-out borders rather than as a YAML color key, attaching every role to the surface the source recorded, and keeping the source's own shopping-versus-corp split, are derived editorial implementation inferences from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

- **Brand Navy** (`#1f1f2c` / `#1F1F2C`): official primary brand color (CI logotype, hero backgrounds, brand header). Token-set path `tokens.colors.brand`. This is not the shopping-app primary CTA `#333` / `#333333`.
- **Brand Red** (`#d00000` / `#D00000`): primary action color; discount price labels, primary CTA button, cart badge, active filter, sale tag. Token-set path `tokens.colors.primary`. Catalog `primary_color` `#D00000` is the same red on a second writing.
- **Text Primary** (`#222222` / `#222`): body text, product titles, prices, headings. Token-set path `tokens.colors.foreground`.
- **Text Secondary** (`#888888` / `#888`): captions, secondary metadata, placeholder. Token-set path `tokens.colors.muted`.
- **Text Tertiary** (`#555555`): supporting body copy, sub-descriptions. No YAML `tokens.colors` key.
- **Text Disabled** (`#cccccc` / `#ccc`): disabled input labels, muted controls. Token-set path `tokens.colors.disabled`.
- **Info Blue** (`#3083e4`): informational tags, delivery status, link text. Token-set path `tokens.colors.accent-info`.
- **Outlet Burgundy** (`#8c1e46`): outlet badge background. Token-set path `tokens.colors.accent-outlet`.
- **Background White** (`#ffffff`): page and card backgrounds. Token-set path `tokens.colors.canvas`. Same hex as `tokens.colors.on-primary`; it stays a second key.
- **On-primary** (`#ffffff`): text on red and on the black shopping CTA. Token-set path `tokens.colors.on-primary`. Same hex as `tokens.colors.canvas`; it stays a second key.
- **Surface Light** (`#fafafa`): list section backgrounds, hot deal section. Token-set path `tokens.colors.surface`.
- **Surface Mid** (`#f5f5f5`): divider fills, skeleton base. Token-set path `tokens.colors.surface-mid`.
- **Border Default** (`#e6e6e6`): card borders, divider lines. Token-set path `tokens.colors.hairline`.
- **Border Subtle** (`#f0f0f0`): tab underlines, light dividers. Token-set path `tokens.colors.border-subtle`.

No heavy gradients in product areas; hotdeal sections may use deep purple-to-teal gradients.

Shopping-app component fields that are not YAML `tokens.colors` keys: primary black CTA fill `#333333` / `#333`; tab inactive and search placeholder `#aaaaaa` / `#aaa`; disabled-button border `#dddddd`; sold-out CTA border `#ddd`; add-to-cart check `#12cf35`.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML array recorded them: `[8, 10, 12, 16]`.

The source also writes a 16px horizontal gutter, an ~8px gap between product cards, a 10px gray divider strip (`#f5f5f5`), search-input padding `0 12px`, and primary-button padding `0 16px`. `tokens.spacing` `8` is not the ~8px card gap as a replacement. `tokens.spacing` `10` is not the 10px divider strip as a replacement. `tokens.spacing` `12` is not the search padding `12px` as a replacement. `tokens.spacing` `16` is not the 16px gutter, not the primary-button padding `16px`, not Body L `16`, and not Tab `16px`. Keeping those unitless array steps on their own path rather than rewriting them as a grid, and keeping those writings of `8`, `10`, `12`, and `16` on their own records, are derived editorial implementation inferences from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 2` · `md: 4` · `lg: 8` · `full: 9999`.

- Small (`2` / `2px`): outlet and info-tag badge radius. Token-set key `tokens.rounded.sm`.
- Control (`4` / `4px`): button radius for UI elements; search-input radius. Token-set key `tokens.rounded.md`.
- Modal (`8` / `8px`): modals/alerts use `border-radius: 8px`. Token-set key `tokens.rounded.lg`. This `8` is not `tokens.spacing` `8`.
- Full (`9999`): YAML step `tokens.rounded.full`. It is not the filter-chip radius `17px`.

Local geometry that is not a YAML rounded step: filter-chip radius `17px`; Bottom sheets use `border-radius: 15px 15px 0 0`; active-filter badge-counter `border-radius: 9px`; product-image containers and product-card shells at `0` (square, sharp corners). Cards: no radius. `tokens.rounded.full: 9999` stays the YAML step. The chip `17px` stays the chip's geometry. Neither was chosen over the other as a replacement. Keeping `2`, `4`, `8`, and `9999` as four keys, and keeping those local radii off the YAML map, are derived editorial implementation inferences from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

### Elevation

Surfaces are intentionally flat. Elevation is expressed through subtle shadows, not strong drop shadows. Reading that stack as restrained shopping-app depth rather than a lift scale for every MUSTIT surface, and keeping the `rgba(0,0,0,.05)` cap on decorative shadow, are derived editorial implementation inferences from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

| Level | Treatment | Use |
|---|---|---|
| Level 0 — flat | no shadow | content sections, list items |
| Level 1 | `box-shadow: 0 2px 4px 0 rgba(0,0,0,.03)` | product cards, filter chips. Token-set path `tokens.shadow.level1`. |
| Level 2 | `box-shadow: 0 2px 8px 0 rgba(0,0,0,.05)` | bottom sheets, filter buttons. Token-set path `tokens.shadow.level2`. |
| Overlay | `background: rgba(0,0,0,.5)` | modal/sheet backdrop |
| Dark scrim | `rgba(0,0,0,.03)` | pseudo-overlay on product thumbnails |

Keep all decorative shadow under `rgba(0,0,0,.05)`. Do not apply heavy shadows (`rgba >0.1`).

### Motion

Durations, CSS easing keywords, two cubic-bezier values, named tokens, and the source's motion rules stay. They are the shopping-app records in source §15 and the `transition: all 0.2s ease` Do rule. Treating those records as a motion contract for the inspected shopping surfaces, rather than as a separately published MUSTIT motion specification, is a derived editorial implementation inference from the verified surfaces; it is not MUSTIT-authored or a separately published UI specification.

| Token | Duration | Easing | Usage |
|---|---|---|---|
| Micro | 150ms | `ease-out` | Icon rotation (dropdown arrow), tap highlight |
| Fast | 200ms | `ease` | Slide-up toast entry, top/bottom position change |
| Standard | 250ms | `ease-out` | Fade in/out, bottom-sheet slide up/down |
| Medium | 400ms | `cubic-bezier(.25,.46,.45,.94)` | Sheet slide + opacity composite |
| Spring | 400ms | `cubic-bezier(.47,1.64,.41,.8)` | Toast bounce-in |
| Slow | 500ms | `ease` | Pagination indicator slide, banner swipe |
| Wish | 400ms | `ease-in` | Wishlist heart animation (on/off) |

`transition: all 0.2s ease` is the Do-list micro-feedback writing for hover/active states. It is the Fast duration `200ms` with CSS `ease`, not a replacement of Fast's usage line. Reading that Do-list writing as the Fast duration with CSS `ease`, and keeping it from replacing Fast's usage line, is a derived editorial implementation inference from the verified surfaces; it is not MUSTIT-authored or a separately published UI specification.

Rules, as the source states them:

- Enter animations use `ease-out`; exit animations use `ease-in`
- Never animate product image loads — swap instantly to avoid layout shift
- Sheet overlays fade backdrop at 250ms separate from content slide
- All interaction animations ≤ 500ms total; prefer ≤ 250ms for taps

An exact additional curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate for a further curve, refusing a partial confirmation, and keeping the seven named rows including the two cubic-bezier values the source already recorded, are derived editorial implementation inferences from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | Primary typeface **Pretendard** (all UI copy). Font CSS at `https://static-ux.mustit.co.kr/ux/service/common/pretendard.css`. |
| Secondary / legacy web | **SD Gothic Neo** (legacy web). |
| Display / brand marketing | **Archivo Expanded** (brand marketing/corp headings). |
| YAML family keys | `tokens.typography.family.sans`: Pretendard. `tokens.typography.family.mono`: Pretendard. The mono key is Pretendard on a second YAML path; it is not a monospace specimen. |
| Official distributed asset | No MUSTIT-exclusive distributed type family was verified. Pretendard is an upstream face. |
| License | This record does not establish a MUSTIT font-license notice for Pretendard. Pretendard is a font asset, not a MUSTIT brand asset. |

Reading those evidence-class rows as the source's resolution table rather than as a published MUSTIT type specimen, keeping sans and mono as two YAML keys that share Pretendard, keeping SD Gothic Neo and Archivo Expanded off the YAML `family.sans` token, recording that no MUSTIT-exclusive distributed type family was verified, reading Pretendard as an upstream face and as a font asset rather than a MUSTIT brand asset, and recording that this packet does not establish a MUSTIT font-license notice, are derived editorial implementation inferences from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

### Family

- **Current visible UI family:** Pretendard — Token-set path `tokens.typography.family.sans`.
- **YAML mono path:** Pretendard — Token-set path `tokens.typography.family.mono`.
- **Legacy web:** SD Gothic Neo.
- **Brand marketing/corp headings:** Archivo Expanded.

Do not replace Pretendard with a system substitute. Do not present SD Gothic Neo or Archivo Expanded as the UI family. Do not use more than two typeface families in any single view (Pretendard + one brand face). That fallback-and-pairing reading is a derived editorial implementation inference from the verified surfaces; it is not MUSTIT-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). YAML sizes are unitless `28` · `24` · `20` · `18` · `16` · `15` · `14` · `13` · `12` · `11` · `10`; source §3 writes the same roles as `28px` · `24px` · `20px` · `18px` · `16px` · `15px` · `14px` · `13px` · `12px` · `11px` · `10px`. Both writings stay. YAML `use` strings are kept verbatim. Pairing each YAML role to the token-set path named beside it, keeping YAML `use` strings verbatim, keeping unitless line heights as ratios, keeping YAML unitless sizes beside the §3 `px` spellings, and keeping Body L `16` off `tokens.spacing` `16`, Caption S `12` off search padding `12px`, and Label `11` off a spacing step, are derived editorial implementation inferences from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

| Role | Family | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---|---|
| Display | Pretendard | 28 (`28px`) | 700 | 1.35 | Section hero titles |
| Title L | Pretendard | 24 (`24px`) | 700 | 1.33 | Modal, page headers |
| Title M | Pretendard | 20 (`20px`) | 700 | 1.35 | Section headers |
| Title S | Pretendard | 18 (`18px`) | 600 | 1.5 | Card group titles |
| Body L | Pretendard | 16 (`16px`) | 500 | 1.5 | Navigation links |
| Body M | Pretendard | 15 (`15px`) | 600 | 1.47 | Button labels, product name |
| Body S | Pretendard | 14 (`14px`) | 700 | 1.43 | Product price, form labels |
| Caption L | Pretendard | 13 (`13px`) | 700 | 1.38 | Search keyword, chips |
| Caption S | Pretendard | 12 (`12px`) | 700 | 1.33 | Metadata, sizes |
| Label | Pretendard | 11 (`11px`) | 700 | 1.45 | Badges, micro-copy |
| Fine | Pretendard | 10 (`10px`) | 400 | 1.6 | Legal, cart count |

Token-set paths: `tokens.typography.display` · `title-l` · `title-m` · `title-s` · `body-l` · `body-m` · `body-s` · `caption-l` · `caption-s` · `label` · `fine`. Use Pretendard weight 700 for all prices and product names. Font sizes do not scale with viewport — they are fixed px values throughout.

### Assets

- Catalog favicon: `https://static-ux.mustit.co.kr/img/front/favicon.ico`. Frontmatter records `logo.type: favicon`. That URL is a first-party identity pointer. Reading it as identity metadata rather than as a UI token is a derived editorial implementation inference from the verified surfaces; it is not MUSTIT-authored or a separately published UI specification.
- Periscope-lens symbol (M SCOPE).
- Product photography dominates the canvas; do not replace it with invented brand-color decoration. Refusing to replace that photography with invented brand-color decoration is a derived editorial implementation inference from the verified surfaces; it is not MUSTIT-authored or a separately published UI specification. Do not round product image containers.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source state contract, preserved here in full:

- **Empty — search no results:** White background, centered illustration, heading "검색 결과가 없어요" in `#222`, subtitle in `#888`; height fills viewport minus nav
- **Loading — product grid:** 2-column skeleton grid; each card shows a `#f5f5f5` rectangle (image placeholder) and two `#f5f5f5` text lines at 14px and 12px height; no shimmer animation measured
- **Error — network failure:** Toast-style slide-up notification in `#333` background, white text, 0.4s cubic-bezier spring entry
- **Error — sold-out PDP:** Primary CTA replaced with a disabled-styled gray button (`#ddd` border, `#888` text); "품절" (sold out) label in `#D00000`
- **Success — add to cart:** Slide-up toast message confirms addition; green check in `#12cf35`; auto-dismiss at 2–3 s
- **Skeleton — product card:** `border-radius: 0` image block + two placeholder lines in `#f5f5f5` rendered before data arrives
- **Disabled — form field:** `background: #fafafa`, `border: 1px solid #f0f0f0`, label text `#ccc`
- **Active filter chip:** `border: 1px solid #D00000`; badge counter circle `background: #D00000`, `color: #fff`, `border-radius: 9px`

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, labelling YAML components with the primitive type the token set records, labelling the §9 product-card shell `not in the token set`, refusing to treat this as a complete state-coverage claim, and refusing to copy the §14 form-field disabled treatment onto the search input as if it were observed there, are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of an observation is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. A generic `focus` observation is not present in the source and is not invented as `focus-visible` treatment. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. The YAML token set records `button-primary`, `button-confirm`, `button-outline`, `button-disabled`, `tab`, `badge-outlet`, `badge-info`, `chip`, and `input-search`. The product-card shell is a §9 writing and is labelled `not in the token set`.

### Button

Four YAML records. Primitive type: `button` · Kind: interactive. Token-set paths: `tokens.components.button-primary` · `button-confirm` · `button-outline` · `button-disabled`.

**Primary (Black)** — Token-set use: `Primary black CTA`

- Background: `#333333` / `#333`
- Text: `#ffffff` / `#fff`
- Radius: 4px
- Height: 48px
- Font: 15px / 600
- Padding: 0 16px

**Primary (Red / Confirm)** — Token-set use: `Red confirm CTA`

- Background: `#D00000` / `#d00000`
- Text: `#ffffff`
- Border: 1px solid `#D00000` / `#d00000`
- Radius: 4px
- Height: 48px
- Font: 18px / 500

**Outline (Secondary)** — Token-set use: `Secondary action`

- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#333333`
- Radius: 4px
- Height: 32px
- Font: 13px / 600

**Disabled** — Token-set use: `Disabled action`

- Background: `#ffffff`
- Text: `#888888`
- Border: 1px solid `#dddddd`
- Radius: 4px

The 4px radius is `tokens.rounded.md`. It is not `tokens.spacing` `4` (no such spacing step). Padding `16px` is this control's padding, not `tokens.spacing` `16` as a replacement. `#333333` is this shopping CTA fill, not `tokens.colors.brand`. Those keep-apart pairings are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatments above |
| hover | applicable | Pointer-web button; visual treatment omitted (`transition: all 0.2s ease` is duration/easing, not a hover fill) |
| focus-visible | applicable | Keyboard-reachable commit control; visual treatment omitted |
| disabled | applicable | YAML `button-disabled` plus sold-out gray replacement (`#ddd` border, `#888` text) |
| loading | applicable | Buy / cart and confirm are in-place commits; visual treatment omitted |
| error | applicable | A failed confirm can be reported on this control; visual treatment omitted |
| success | applicable | Add-to-cart is a commit outcome; the success toast is a §14 writing, not a button fill |

### Tab

- Role: section tabs
- Primitive type: `tab` · Kind: interactive
- Token-set path: `tokens.components.tab`
- Token-set use: `Section tabs`
- Inactive text: `#aaaaaa` / `#aaa`
- Inactive font: 16px / 500
- Active text: `#222222` / `#222`
- Active font: 16px / 700
- Active border-bottom: 2px solid `#222222` / `#222`
- Token-set active: `2px solid #222222 bottom border, fg #222222, 16px / 700`

The `16px` is this tab's type size, not `tokens.spacing` `16`. `#aaaaaa` is this tab's inactive ink, not a YAML `tokens.colors` key. Those keep-apart pairings are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Inactive treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; visual treatment omitted |
| disabled | applicable | A tab can be gated; visual treatment omitted |
| loading | not-applicable | A section tab selects a panel; it commits no operation in place |
| error | not-applicable | A section tab does not report a failed request on itself |
| success | not-applicable | Selecting a section is not an operation this control reports as success |

### Badge Outlet

- Role: Outlet category badge
- Primitive type: `badge`
- Kind: non-interactive — a category mark, not a control
- Token-set path: `tokens.components.badge-outlet`
- Token-set use: `Outlet badge`
- Background: `#8c1e46`
- Text: `#ffffff`
- Radius: 2px
- Height: 22px
- Padding: 0 8px
- Font: 11px / 700

The 2px radius is `tokens.rounded.sm`. Pairing that local radius to `tokens.rounded.sm` is a derived editorial implementation inference from the verified surfaces; it is not MUSTIT-authored or a separately published UI specification. Do not use `#8c1e46` outside of the Outlet category badge context.

### Badge Info Tag

- Role: informational tag
- Primitive type: `badge`
- Kind: non-interactive — a status tag, not a control
- Token-set path: `tokens.components.badge-info`
- Token-set use: `Info tag`
- Text: `#3083e4`
- Border: 1px solid `#3083e4`
- Radius: 2px
- Height: 24px
- Font: 12px / 400

### Filter Chip

- Role: filter chip
- Primitive type: `badge` · Kind: interactive
- Token-set path: `tokens.components.chip`
- Token-set use: `Filter chip`
- Default border: 1px solid `#cccccc` / `#ccc`
- Default radius: 17px
- Default height: 34px
- Active border: 1px solid `#D00000` / `#d00000`
- Token-set active: `1px solid #d00000`
- Active radius: 17px
- Active badge counter: `background: #D00000`, `color: #fff`, `border-radius: 9px`

The 17px radius is this chip's local geometry. It is not `tokens.rounded.full: 9999` and not `tokens.rounded.md: 4`. The 9px counter radius is this chip's counter geometry, not a YAML rounded step. Those keep-apart pairings are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Default treatment above |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable filter; visual treatment omitted |
| disabled | applicable | A filter option can be gated; visual treatment omitted |
| loading | not-applicable | A filter chip selects a facet; it commits no operation in place |
| error | not-applicable | A filter chip does not report a failed request on itself |
| success | not-applicable | Selecting a facet is not an operation this control reports as success |

### Search Input

- Role: search input
- Primitive type: `input` · Kind: interactive
- Token-set path: `tokens.components.input-search`
- Token-set use: `Search input, placeholder #aaaaaa`
- Background: `#ffffff`
- Text: `#222222`
- Radius: 4px
- Height: 40px
- Padding: 0 12px
- Font: 15px / 600
- Placeholder text: `#aaaaaa` / `#aaa`
- Placeholder font: 15px / 400

YAML `use` records `placeholder #aaaaaa`. Source §4 also records placeholder font `15px / 400`. Both writings stay. Padding `12px` is this control's padding, not `tokens.spacing` `12` as a replacement. The §14 disabled form-field treatment (`background: #fafafa`, `border: 1px solid #f0f0f0`, label text `#ccc`) stays a form-field writing; it is not copied onto this search input as an observed search-input disabled paint. Keeping both placeholder writings, keeping padding `12px` off `tokens.spacing` `12`, and refusing to copy the form-field disabled paint onto this search input, are derived editorial implementation inferences from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field can be gated; visual treatment omitted |
| loading | not-applicable | The field holds a query; it does not commit a transaction |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | The field does not complete an operation on itself |

### Product card

- Role: listing card shell from the §9 construction notes
- Primitive type: not in the token set
- Background: white
- Radius: none (`0`)
- Border: 1px `#f0f0f0`
- Shadow: `box-shadow: 0 2px 4px 0 rgba(0,0,0,.03)` (`tokens.shadow.level1`)
- Kind and applicability map omitted — the source supplies no interaction evidence for the container (C4).

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

MUSTIT is built mobile-first as a Nuxt.js SPA served from `m.web.mustit.co.kr`. The standard content gutter is 16px on each side. Product grids use a 2-column layout with an ~8px gap between cards. Sections are separated by a 10px gray divider strip (`#f5f5f5`) or a 1px border line (`#f0f0f0`). The bottom fixed action bar (buy / cart) sits above the native safe-area inset. Maximum content width on desktop is 360–420px, centered with a white card. Sticky top navigation height is 44–56px.

The primary product is a mobile web app (max-width ~360–428px). A second writing of that mobile max-width is 428px. The viewport is locked: `user-scalable=no, initial-scale=1.0`. At wider breakpoints the layout centers in a white card against a neutral background. The product grid collapses from a 2-column to a 1-column detail view on PDP. Images use Cloudflare `/_dims_/format/webp/autorotate/on` for adaptive delivery. Font sizes do not scale with viewport — they are fixed px values throughout. Design all layouts at 375px width first; use fixed px font sizes; lock zoom.

The 16px gutter is this layout's gutter, not `tokens.spacing` `16` as a replacement of the YAML array step. The ~8px card gap is this grid's gap, not `tokens.spacing` `8` as a replacement. The 10px divider strip is this section separator, not `tokens.spacing` `10` as a replacement. The 360–420px desktop maximum, the ~360–428px mobile max-width, the 428px mobile max-width, and the 375px first-layout width stay four writings; none replaces the others. Stating those layout behaviors as the source wrote them, rather than as a measured cross-viewport specification from this migration, is a derived editorial implementation inference from the verified surfaces; it is not MUSTIT-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

**Three adjectives:** Direct, Discovery-forward, Confident. That adjective set, the Do/Don't table, and the classification of the three voice samples as illustrative rather than as captured product copy, are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification. The Korean lines themselves are kept byte-exact.

| Do | Don't |
|----|-------|
| Use active, action-oriented verbs ("발견하세요", "탐험하세요") | Use passive constructions or vague luxury puffery |
| Keep copy concise — product names and discount percentages speak | Over-explain or add unnecessary adjectives |
| Lead with the deal / discovery hook | Lead with brand philosophy in transactional flows |
| Mix Korean and brand/product names naturally | Force awkward Konglish or all-Korean transliterations |

**Published UI strings** the source records, kept byte-exact:

- "검색 결과가 없어요"
- "품절"
- "발견하세요"
- "탐험하세요"
- "Smart Luxury — Make the Best Discovery"
- M SCOPE
- 머스트잇

**Illustrative voice samples:** the source labels these three *Illustrative*, not as captured product copy. Keeping them under that source label, reading them as register examples rather than as MUSTIT-issued microcopy, reproducing the Korean strings byte-exact, and letting an English gloss sit beside a Korean line without replacing it, are a derived editorial implementation inference from the verified surfaces; they are not MUSTIT-authored or a separately published UI specification.

- *Illustrative:* "세상 모든 럭셔리 취향을 탐험하세요." — broad, aspirational, discovery-forward
- *Illustrative:* "정품 200% 보장. 오늘 핫딜 특가를 놓치지 마세요." — direct, urgency-led, trust-anchored
- *Illustrative:* "1,300개 해외명품 브랜드. 매일 달라지는 특가." — data-led, no fluff, scan-friendly

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

These are named values the source already set, not permissions to invent. Reading the list as a catalog of those named unresolved writings rather than as coverage of domains the source never named is a derived editorial implementation inference from the verified surfaces; it is not MUSTIT-authored or a separately published UI specification.

- **Shopping CTA `#333` versus corp `#000`/`#1F1F2C`.** Both stay. `#333` is the shopping-app primary CTA; `#000`/`#1F1F2C` are corp brand backgrounds; `#D00000` is consistent across both as the accent/discount/action color.
- **No shimmer animation measured** on the product-grid skeleton.
- **getdesign.md/mustit — NOT LISTED** (no data returned). **refero** — KR/TW brand, no result expected.
- **Hover / active fill, focus-visible chrome.** `transition: all 0.2s ease` is recorded for hover/active micro-feedback; a hover fill and a focus-visible treatment are not. Promote a further curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
