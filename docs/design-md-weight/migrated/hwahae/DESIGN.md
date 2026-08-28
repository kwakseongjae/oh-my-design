# Hwahae Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Hwahae (화해) is Korea's dominant cosmetics-review and ingredient-analysis platform, and this contract covers the two first-party web surfaces the source inspected for tokens on 2026-06-26: the product homepage at `https://www.hwahae.co.kr` and the official tech/design blog at `https://blog.hwahae.co.kr/`. The product-design team post at `https://blog.hwahae.co.kr/all/tech/13236` is a named brand-owned source for company and design-system construction context; it does not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading Hwahae as Korea's dominant cosmetics-review and ingredient-analysis platform, reading those two inspected pages as this contract's token surfaces, keeping values attached to the surface that established them, and treating the design-system post as a named source that does not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

The captured product-web layer is a soft neutral grey canvas (`#f7f7f7`) layered over pure white (`#ffffff`) cards, so the imagery — product shots, ranking thumbnails, brand tiles — carries all the color and the chrome stays quiet. Text sits in pure black (`#000000`) for headings and a softened near-black (`#111111`) for navigation. The brand's signature is a vivid turquoise flower mark (`#00d5ce`), echoed live on the engineering blog as `#22d3d6` and in UI accents as the deeper teal `#00a5aa`, all resting on a barely-there pale-mint tint (`#eefbfb`) that appears in hero and section backgrounds. What the source records as dominating the live product surface is amber (`#ffaa3c`) — the rating-star color. A small functional palette rounds it out: an action blue (`#467dff`) for inline links and tags, and a coral (`#ff5555`) for sale and wishlist signals. The neutrals run a long ladder — `#3d3d3d` body, `#666666` secondary, `#999999` captions, `#aaaaaa` placeholders, `#d8d8d8` dividers, `#e8e8e8` hairlines. Utility classes across the site are namespaced `hds-` (Hwahae Design System). The geometry the source records: 8px is the workhorse radius, 16px for cards, 4px for tight chips, full-round (99999px) for pills and 50% for avatars; the blog leans to a rounder 20px. Depth is a single light card shadow (`rgba(0, 0, 0, 0.08) 0px 2px 8px`) and a 1px `#e8e8e8` hairline ring. Typography is split by surface: the product web is set in **Pretendard Variable** at a dense scale (18px section heads, 16px body, 14–15px UI), while the official tech blog is set in **Spoqa Han Sans** at a larger editorial 32px / weight 700. The hex values, family names, weights, radii, and surface names in this paragraph are recorded. The characterizations built on them — imagery carrying color while chrome stays quiet; a clean, content-dense beauty index rather than a glossy brand microsite; honest, encyclopedic weight; amber training the eye to read "score / trust"; the kind of granular grey scale you only get from a real design system; soft and consistent geometry; and a deliberately app-like product scale — are a derived editorial implementation inference from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

Brand narrative recorded by the source, kept as narrative context. Hwahae (화해) launched in **2013** to solve a uniquely consumer-unfriendly problem in Korean cosmetics: severe **information asymmetry** (화장품 정보 비대칭). Shoppers could not easily see what was actually in a product or trust the marketing on the box. Hwahae's founding act was to make cosmetic **ingredients legible** — surfacing full ingredient lists, safety/grade information, and, crucially, real user **reviews** — so people could choose with evidence rather than advertising. Over its first decade the service grew from an ingredient lookup into a full beauty platform spanning makeup, inner beauty, sample experiences (샘플체험), ingredient analysis, reviews, and direct purchase, becoming the category's dominant review-and-ranking destination in Korea. (Source: Hwahae product-design team, official tech blog, *"사용 가능한 진짜 디자인 시스템을 만드는 여정"*, 2023-08-03.) That same blog post documents the maturation of Hwahae's design language. After ten years of rapid experimentation, the team found legacy screens and per-page color/layout drift accumulating as design and engineering debt — at odds with Hwahae's "experiment fast, validate" culture. In **January 2023** they committed to a proper design system (the `hds-` namespace seen across the live site = Hwahae Design System), built as a **Foundation** layer (Color, Typography, Grid, Radius, Spacing) feeding reusable **Components** and **Templates**, authored in Figma and shipped to engineers through Storybook and a TestApp QA loop. What Hwahae's design refuses, visible on the surface: the glossy, color-saturated chrome of beauty-brand marketing, and dark-pattern urgency. What it embraces: a quiet neutral canvas that lets product imagery and user data lead; a single trustworthy turquoise identity; amber rating stars as the honest trust signal; and a real, documented design system that keeps a sprawling, content-heavy product consistent. The years, founding problem, platform expansion, January 2023 design-system adoption, Foundation→Components→Templates pipeline, and the refuse/embrace pairing are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-system narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog. Each names a label or surface the source records. They do not come from the source's persona section.

- Scan `급상승 랭킹` on `https://www.hwahae.co.kr`.
- Search from the header search field.
- Open `홈`, `랭킹`, or `어워드`.
- Read rankings framed as `화해 고객들이 직접 선택한 랭킹`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable Hwahae user segments (Korean beauty shoppers comparing ingredients and reviews), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation is carried into this document or its sidecar. What the source independently records is the audience the platform serves at a group level: Korean beauty shoppers comparing ingredients and reviews. Reading that group as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

- Turquoise flower brand mark (`#00d5ce`) — quiet on chrome, loud as identity; live blog accent `#22d3d6`, deeper UI teal `#00a5aa`
- Amber (`#ffaa3c`) as the most-present accent — it is the rating-star color of a review-first product
- Pretendard Variable on the product web; Spoqa Han Sans on the engineering/design blog
- Pure black (`#000000`) headings, softened `#111111` nav — honest, index-like text
- Soft neutral `#f7f7f7` canvas with pure-white (`#ffffff`) cards carrying the imagery
- Pale-mint tint (`#eefbfb`) for hero/section backgrounds — the brand turquoise at 5% presence
- Granular grey ladder (`#3d3d3d` → `#666666` → `#999999` → `#aaaaaa`) from a real `hds-` design system
- Minimal depth: one `rgba(0, 0, 0, 0.08)` card shadow + 1px `#e8e8e8` hairline ring
- Soft radius scale — 8px workhorse, 16px cards, 4px chips, 99999px pills, 20px on the blog

### Principles

These six items are a derived editorial implementation inference from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Decode, don't sell.** Hwahae exists to make cosmetics legible — ingredients, grades, and real reviews over marketing claims. *UI implication:* lead with data (rankings, ratings, ingredients); keep chrome neutral so evidence is the loudest element.
2. **User evidence over brand voice.** Rankings are framed as "chosen by Hwahae users." *UI implication:* surface ratings (amber `#ffaa3c`) and review counts prominently; never visually privilege a brand without disclosure.
3. **Imagery carries color, chrome stays quiet.** *UI implication:* soft `#f7f7f7` canvas, white cards, restrained accents — product photography is the color layer.
4. **One identity hue.** Turquoise (`#00d5ce`) is the brand; don't dilute it. *UI implication:* reserve turquoise for identity and the primary action.
5. **Consistency at scale via a real system.** The `hds-` Foundation→Components→Templates pipeline exists so a content-heavy product stays coherent. *UI implication:* reuse tokens (the granular grey ladder, the 8/16px radius scale) rather than re-inventing per page.
6. **Flat and fast.** *UI implication:* minimal elevation — hairlines and one soft shadow — to keep dense ranking content quick to scan.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

- Use Pretendard Variable for the product web and Spoqa Han Sans for the blog — keep them per-surface
- Keep the brand turquoise (`#00d5ce`) for identity and the primary action; let imagery carry color elsewhere
- Use amber (`#ffaa3c`) for rating stars — it is the product's trust signal
- Set the canvas to soft grey (`#f7f7f7`) with white (`#ffffff`) cards so photography stays loudest
- Separate with `#e8e8e8` hairlines and a single soft card shadow, not heavy elevation
- Use the soft radius scale — 8px controls, 16px cards, 4px chips, full-round pills
- Use pure black (`#000000`) for headings and softened `#111111` for nav
- Reserve action blue (`#467dff`) and coral (`#ff5555`) for links and sale/wishlist signals

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

- Don't spread the turquoise across many elements — it is identity, not decoration
- Don't stack heavy drop shadows — Hwahae separates with hairlines and tint
- Don't mix Spoqa Han Sans into the product web or Pretendard into the blog
- Don't use amber for anything but ratings/scores — it would dilute the trust signal
- Don't set the canvas pure white edge-to-edge — the `#f7f7f7` grey is what frames the cards
- Don't use sharp 0px corners on cards or controls — the system is consistently softened
- Don't introduce a competing saturated accent beyond the functional amber/blue/coral set
- Don't oversize product-web headings — the scale is deliberately dense and app-native

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — identity turquoise, amber as score and trust, pale mint as the brand at minimal presence, a granular grey ladder — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

Brand

- **Hwahae Turquoise** (`#00d5ce`): The flower-mark brand color and primary identity hue. Used for the logo, brand moments, and the primary action color. Token-set key `tokens.colors.brand`.
- **Turquoise Bright** (`#22d3d6`): The live turquoise measured on the official tech blog — the same brand hue rendered slightly brighter on screen. Token-set key `tokens.colors.brand-bright`.
- **Turquoise Deep** (`#00a5aa`): A darker interactive teal used for accent text and small UI elements on the product surface. Token-set key `tokens.colors.brand-deep`.
- **Mint Tint** (`#eefbfb`): A near-white pale mint, the brand turquoise at minimal presence — hero and section backgrounds. Token-set key `tokens.colors.tint`.

Functional accents

- **Rating Amber** (`#ffaa3c`): The star-rating color — the single most-present accent on the product web, signalling score and trust. Token-set key `tokens.colors.rating`.
- **Action Blue** (`#467dff`): Inline links, info tags, and interactive accents. Token-set key `tokens.colors.info`.
- **Alert Coral** (`#ff5555`): Sale prices, wishlist/heart, and attention signals. Token-set key `tokens.colors.alert`.

Text and ink

- **Ink Black** (`#000000`): Primary headings and high-emphasis text. Token-set key `tokens.colors.ink`.
- **Ink Soft** (`#111111`): Navigation labels and strong UI text — a softened near-black. Token-set key `tokens.colors.ink-soft`.
- **Ink Blog** (`#212529`): The blog body/heading text color (Spoqa Han Sans surface). Token-set key `tokens.colors.ink-blog`.
- **Body** (`#3d3d3d`): Secondary body copy and button labels. Token-set key `tokens.colors.body`.
- **Muted** (`#666666`): Tertiary text and descriptions. Token-set key `tokens.colors.muted`.
- **Faint** (`#999999`): Captions, metadata, low-emphasis labels. Token-set key `tokens.colors.faint`.
- **Placeholder** (`#aaaaaa`): Input placeholder text. Token-set key `tokens.colors.placeholder`.

Surface and lines

- **Canvas White** (`#ffffff`): Card surfaces, text on brand/dark, and the cleanest backgrounds. Token-set key `tokens.colors.canvas`.
- **Surface Grey** (`#f7f7f7`): The page background — a soft neutral that lets imagery carry the color. Token-set key `tokens.colors.surface`.
- **Divider** (`#d8d8d8`): Heavier separators and segmented controls. Token-set key `tokens.colors.divider`.
- **Hairline** (`#e8e8e8`): Card outlines, dividers, and the 1px ring that replaces shadow. Token-set key `tokens.colors.hairline`.
- **On-Brand** (`#ffffff`): Foreground text/icons on the turquoise brand color. Token-set key `tokens.colors.on-brand`. Same hex as Canvas White; the keys stay unmerged. Keeping `tokens.colors.canvas` and `tokens.colors.on-brand` as separate keys that share a hex is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

### Spacing

Unitless token-set steps from `tokens.spacing`: `xs 4` · `sm 8` · `md 12` · `base 16` · `lg 20` · `xl 24` · `xxl 32` · `section 48`. The source restates the same scale in px as 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, with a 4px base unit. Touch-utility buttons land at a 44px height with 10px padding; compact chips drop to 0px 8px. `tokens.spacing.xs: 4` is not `tokens.rounded.xs: 4`. `tokens.spacing.sm: 8` is not `tokens.rounded.sm: 8`. `tokens.spacing.base: 16` is not `tokens.rounded.md: 16`. `tokens.spacing.lg: 20` is not `tokens.rounded.lg: 20`. `tokens.spacing.md: 12` is a spacing step only. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

### Shape

Unitless token-set steps from `tokens.rounded`: `xs 4` · `sm 8` · `md 16` · `lg 20` · `full 99999`.

The source's named radius uses, kept on their own rows:

- Tight (4px): chips, small badges, count pills — `tokens.rounded.xs`
- Workhorse (8px): buttons, inputs, utility controls — `tokens.rounded.sm`
- Card (16px): product/ranking/brand cards — the dominant container radius — `tokens.rounded.md`
- Blog (20px): editorial cards on the tech blog — `tokens.rounded.lg`
- Full (99999px): pills — `tokens.rounded.full: 99999`
- Circle (50%): circular avatars — a body-named use, not `tokens.rounded.full: 99999`

`tokens.rounded.full: 99999` stays the unitless full step. It is not the 50% circle. `tokens.rounded.xs: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.sm: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.md: 16` is not `tokens.spacing.base: 16`. `tokens.rounded.lg: 20` is not `tokens.spacing.lg: 20`. Keeping those paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, tinted sections |
| Hairline (Level 1) | `1px solid #e8e8e8` / `rgb(232, 232, 232) 0px 0px 0px 1px` ring | White card outlines, dividers |
| Card (Level 2) | `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px` | Floating product / ranking cards |

Token-set paths: `tokens.shadow.card` `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`; `tokens.shadow.hairline-ring` `rgb(232, 232, 232) 0px 0px 0px 1px`; `tokens.shadow.none` `none`. Live inspection found the overwhelming majority of surfaces shadowless; where elevation is needed, a single soft card shadow or a 1px `#e8e8e8` hairline ring does the work. Emphasis is reached through color (amber `#ffaa3c` ratings, turquoise `#00d5ce` brand) rather than depth. Reading that as a near-flat system that keeps review/ranking content scannable and fast, and that lets product imagery — not chrome — provide visual interest, is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, radius, and shadow on the two hwahae.co.kr surfaces. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to the easing curves. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, chip press, focus |
| `motion-standard` | 200ms | Card / section reveal, carousel slide, sheet |
| `motion-slow` | 320ms | Page-level transitions |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to Hwahae-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, sheets, carousels |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and quiet — consistent with the near-flat, content-first aesthetic.
- Cards and ranking rows fade-in from below at `motion-standard / ease-enter`; carousels slide at the same timing; chips respond to press with a subtle scale/opacity shift.
- No bounce or spring — a trust-and-evidence product signals steadiness, not playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product stays fully functional.

The "steadiness, not playfulness" reading is the source's own motion rule; treating it as a current-surface instruction is already covered by the motion-section qualifier above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The two inspected surfaces and the product-design team post describe the product and the design-system construction. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog. |
| Live computed surface-use | The product homepage computes visible text as `Pretendard Variable`. The official tech blog computes visible text as `Spoqa Han Sans`. |
| Official distributed asset | No Hwahae-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog. |
| Declared-only | The source records `-apple-system`, `Apple SD Gothic Neo`, `Noto Sans KR`, and `Roboto` as fallbacks after Pretendard Variable on the product web, and `Roboto` and `Malgun Gothic` as fallbacks after Spoqa Han Sans on the blog. They are fallbacks, not a second brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog. |
| License | The source records Pretendard Variable as the de-facto Korean product font and Spoqa Han Sans as the blog face. This record does not establish a Hwahae-issued font-license notice. That upstream-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog. |
| Outside these captures | Typography on surfaces the source did not inspect stays outside these two captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog. |

### Family

- **Current visible product-web family:** `Pretendard Variable`, with system fallbacks (`-apple-system`, `Apple SD Gothic Neo`, `Noto Sans KR`, `Roboto`). Token-set path `tokens.typography.family.product`.
- **Current visible blog family:** `Spoqa Han Sans`, with fallbacks (`Roboto`, `Malgun Gothic`). Token-set path `tokens.typography.family.blog`.
- Two surfaces, two fonts: Pretendard Variable owns the product web; Spoqa Han Sans owns the blog. They never mix on one surface.
- Do not replace Pretendard Variable or Spoqa Han Sans with a system substitute. A fallback member of either stack is never presented as the brand face. The two-surfaces-never-mix restatement and that fallback prohibition are a derived editorial implementation inference from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Blog Display | Spoqa Han Sans | 32px (2.00rem) | 700 | 1.44 (46px) | -1.0px | Blog section heads, Spoqa Han Sans Bold |
| Section Title | Pretendard Variable | 18px (1.13rem) | 600 | 1.33 | -0.2px | Product section titles, Pretendard SemiBold |
| Nav Link | Pretendard Variable | 15px (0.94rem) | 600 / 400 | 1.5 | normal | Top nav item (active 600 / inactive 400) |
| Card Title | Pretendard Variable | 14px (0.88rem) | 600 | 1.5 (21px) | normal | Card / category labels, Pretendard SemiBold |
| Body | Pretendard Variable | 16px (1.00rem) | 400 | 1.5 (24px) | normal | Standard body text, Pretendard |
| Label | Pretendard Variable | 14px (0.88rem) | 400 | 1.5 | normal | Search / dense UI text, Pretendard |
| Caption | Pretendard Variable | 12px (0.75rem) | 400 | 1.5 | normal | Button labels, metadata |

Unitless line heights stay ratios: `1.44` on Blog Display; `1.33` on Section Title; `1.5` on Nav Link, Card Title, Body, Label, and Caption. The parenthetical px figures are the source table's conversions, not a replacement of the ratio. YAML tracking `tokens.typography.blog-display.tracking: -1.0` and `tokens.typography.section.tracking: -0.2` stay unitless beside the visible-section forms `-1.0px` / `-0.2px`. Keeping the ratios and the parenthetical conversions on separate readings, rather than replacing one with the other, is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

Type rules the source states:

- **Two surfaces, two fonts**: Pretendard Variable owns the product web (dense, app-like); Spoqa Han Sans owns the blog (editorial, larger). They never mix on one surface.
- **Dense product scale**: The product web tops out at an 18px section head with a 16px body — a deliberately app-native, information-rich scale rather than a marketing-hero scale.
- **Weight as hierarchy**: SemiBold (600) carries titles and active nav; Regular (400) carries body, inactive nav, and captions. Bold (700) is reserved for blog display.
- **Tight tracking on heads**: Headings carry slight negative tracking (-0.2px product, -1.0px blog); body stays at normal tracking for hangul legibility.

The four rule titles and the dense / editorial / hierarchy / hangul-legibility readings are a derived editorial implementation inference from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog. The sizes, weights, ratios, and tracking values are recorded.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://www.google.com/s2/favicons?domain=hwahae.co.kr&sz=128`. That slug is an identity pointer through a third-party favicon service, not a Hwahae-hosted brand file URL.
- Official OG image the source records: `https://static.hwahae.co.kr/og/OG_1200.png` — turquoise flower mark sampled `#00d5ce` with black "hwahae" wordmark on pale-mint background.
- Product photography, ranking thumbnails, and brand tiles are first-party catalog content; do not replace them with invented brand-color decoration.

Reading the favicon-service URL as an identity pointer rather than a hosted brand file, and reading product photography as first-party catalog content that must not be replaced with invented decoration, is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `tab`, `card`, `input`, `badge`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination CTA that commits no operation in place, a tab that only selects, a language/icon toggle, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog. This is not a complete state-coverage claim.

### Primary Brand Turquoise

- Role: destination control that carries the identity color into app-install and key CTAs
- Primitive type: `button` · Kind: interactive
- Domain: `https://www.hwahae.co.kr`
- Background: `#00d5ce`
- Text: `#ffffff`
- Radius: 8px
- Font: 16px Pretendard Variable weight 600
- Token-set font record: `16px / 600`
- Token-set use: `Brand turquoise primary action — app-install / key CTA`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades the turquoise action rather than turning it grey, so the brand read is preserved |
| loading | not-applicable | This control launches app-install or a key CTA destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed |
| success | not-applicable | Same role reason: reaching the install or key-CTA destination is not an operation with a success result on this button |

### Secondary Chip Outline

- Role: compact destination chip that opens login
- Primitive type: `button` · Kind: interactive
- Domain: homepage header
- Background: `#ffffff`
- Text: `#3d3d3d`
- Border: 1px solid `#e8e8e8`
- Radius: 4px
- Padding: 0px 8px (YAML `0 8px`)
- Height: 24px
- Font: 12px Pretendard Variable weight 400
- Token-set font record: `12px / 400`
- Token-set use: `Secondary chip (로그인) — white with hairline`
- Published label: `로그인`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination chip whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens `로그인`; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this chip, reports failure |
| success | not-applicable | Same role reason: reaching `로그인` is not an operation this chip reports as success |

### Language / Icon Button

- Role: header utility toggle (`한국어`, icon toggles)
- Kind: interactive
- Domain: homepage header
- Background: transparent
- Text: `#111111`
- Radius: 8px
- Padding: 10px
- Height: 44px
- Use: Header utility buttons (`한국어`, icon toggles) — 44px touch target
- This §4 record is not in the token set.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A utility toggle whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control toggles language or an icon utility; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | A toggle reports no failed request of its own |
| success | not-applicable | Same role reason: switching language or an icon utility is not an operation with a success result on this button |

### Header Search

- Role: top search field
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Border: 1px solid `#e8e8e8`
- Radius: 8px
- Text: `#000000`
- Placeholder: `#aaaaaa`
- Font: 14px Pretendard Variable weight 400
- Token-set use: `Header search — #aaaaaa placeholder`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit a fetch whose in-progress state it reports on itself |
| error | applicable | The surface contract records field-level validation below the input |
| success | not-applicable | The field does not complete a review submission or save on itself |

### Product / Ranking Card

- Role: product, ranking, and brand tile
- Primitive type: `card`
- Background: `#ffffff`
- Radius: 16px
- Shadow: `rgba(0, 0, 0, 0.08) 0px 2px 8px`
- Border: 1px solid `#e8e8e8` (hairline ring on shadowless variants)
- Token-set use: `Product / ranking card — 1px #e8e8e8 hairline ring`
- Use: Product, ranking, and brand tiles — imagery carries the color

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Mint Tint Card

- Role: pale-mint brand-tinted section / feature card
- Primitive type: `card`
- Background: `#eefbfb`
- Text: `#000000`
- Radius: 16px
- Token-set use: `Pale-mint brand tint section / card`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Rating Star Amber

- Role: star-rating score value
- Primitive type: `badge`
- Kind: non-interactive — a score label, not a commit control
- Background: `#ffffff`
- Text: `#ffaa3c`
- Radius: 4px
- Font: 12px Pretendard Variable weight 600
- Token-set font record: `12px / 600`
- Token-set use: `Amber star-rating value`

### Info Chip Blue

- Role: inline accent / info tag
- Primitive type: `badge`
- Kind: non-interactive — an info label, not a commit control
- Background: `#ffffff`
- Text: `#467dff`
- Radius: 4px
- Font: 12px Pretendard Variable weight 600
- Token-set font record: `12px / 600`
- Token-set use: `Blue inline accent / info tag`

### Image Count Pill

- Role: image counter overlay on carousels
- Kind: non-interactive — a count overlay, not a commit control
- Background: `rgba(0, 0, 0, 0.4)`
- Text: `#ffffff`
- Radius: 4px
- Padding: 4px 8px
- Published label: `1/10`
- This §4 record is not in the token set.

### Top Nav

- Role: top horizontal nav item
- Primitive type: `tab` · Kind: interactive
- Domain: homepage
- Background: `#ffffff`
- Text: `#111111`
- Font: 15px Pretendard Variable weight 400
- Token-set font record: `15px / 400`
- Token-set active: `text #111111 weight 600`
- Active: weight 600, `#111111`
- Token-set use: `Top nav (홈 / 랭킹 / 어워드)`
- Published labels: `홈`, `랭킹`, `어워드`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching `홈`, `랭킹`, or `어워드` is not an operation with a success result |

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

| State | Treatment |
|---|---|
| **Empty (no ranking / search results)** | Soft `#f7f7f7` canvas. A single Ink (`#000000`) line explaining no matching products, with a quiet path to broaden filters. No illustration clutter. |
| **Empty (saved / wishlist none yet)** | Faint (`#999999`) single line: nothing saved yet, plus a route back to rankings. Calm and honest. |
| **Loading (ranking fetch)** | Skeleton cards on white `#ffffff` at final 16px-radius dimensions, soft pulse — no heavy shimmer, consistent with the near-flat system. |
| **Loading (image carousel)** | Image-count pill (`rgba(0, 0, 0, 0.4)`, white text) holds position while the next image loads. |
| **Error (load failed)** | Inline message in Ink (`#000000`) with a plain-language explanation and a retry — never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input describing what's valid, not just "필수". |
| **Success (review submitted / saved)** | Brief inline confirmation in a calm tone; next-step detail linked below. No celebratory emoji. |
| **Skeleton** | White `#ffffff` blocks at final dimensions, 16px radius, soft pulse. |
| **Disabled** | Faint (`#999999`) text on reduced-opacity surface; turquoise actions fade rather than turn grey, to preserve the brand read. |

These rows describe ranking, search, wishlist, carousel, review-submit, and form treatments the source wrote at system level. They are not attached as visual treatments to the destination controls above. That non-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered, content-first layout: ranking and product cards arranged in horizontally scrolling rows and responsive grids
- Section bands stack vertically with quiet section titles (18px) introducing each ranking/recommendation block
- White (`#ffffff`) cards float on the soft `#f7f7f7` canvas; pale-mint (`#eefbfb`) tints mark hero/feature zones
- Cards use 16px radius and cluster related products, rankings, and brands
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48
- Shape restated from `tokens.rounded`: tight 4 · workhorse 8 · card 16 · blog 20 · `full: 99999`; body-named circle 50% stays on that use

Reading the page as imagery carrying color while chrome stays quiet, reading the density as dense but breathable through generous card radii and consistent gutters, and reading sections as flat separation by background tint (`#f7f7f7` vs `#ffffff`) and `#e8e8e8` hairlines more than by elevation, are derived editorial implementation inferences from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

Responsive behavior. The source's live inspection was run as a computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, ranking rows scroll horizontally, cards full-bleed |
| Tablet | 640-1024px | 2-up product grids, moderate gutters |
| Desktop | 1024-1440px | Centered content, multi-column ranking/recommendation bands |

Touch targets the source records: header utility buttons at 44px height (10px padding); compact chips (`로그인`) at 24px height for dense desktop chrome; ranking cards sized for thumb-scroll on mobile, click on desktop.

Collapsing strategy, as the source states it:

- Section bands maintain their quiet 18px titles; card grids reflow multi-column → single column
- Horizontal ranking rows convert to swipe-scroll on narrow viewports
- White/tinted (`#ffffff` / `#eefbfb`) section treatment is preserved across breakpoints

Image behavior, as the source states it: product and ranking thumbnails keep 16px radius across sizes; cards retain the soft `rgba(0, 0, 0, 0.08)` shadow or `#e8e8e8` hairline at all breakpoints; carousels show an image-count pill overlay (`rgba(0, 0, 0, 0.4)`, white text).

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Hwahae's voice as **trustworthy, plain-spoken, and evidence-first** — a beauty guide that turns an opaque, marketing-heavy category (cosmetics) into transparent ingredients, real reviews, and honest rankings. The product name itself, 화해 ("화장품을 해석하다" — "decoding cosmetics"), sets the register: explanatory, on the user's side, never a sales funnel. Copy leans on real, user-generated data — rankings "화해 고객들이 직접 선택한" (chosen directly by Hwahae users), "급상승 랭킹" (rising ranking), and skin-type and age-tailored recommendations — rather than brand superlatives. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog. The Korean lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Section titles | Plain, functional, data-framed. "급상승 랭킹", "내 피부에 꼭 맞는 제품 랭킹", "나이대별 추천". |
| Rankings / labels | Neutral and concrete. Category, skin-type, and age labels; amber score values. |
| CTAs | Low-pressure, helpful. "화해 앱에서 더 편리하게", "검색 페이지로 이동". |
| Blog (engineering/design) | Reflective, first-person, craft-oriented. "사용 가능한 진짜 디자인 시스템을 만드는 여정". |
| Trust / data copy | Calm and specific — leans on user-generated rankings and ingredient analysis, not hype. |

**Voice samples (verbatim from live surfaces):**

- "화장품 정보는 화해 — 화장품 성분과 정보, 리뷰 확인하고 구매 하세요" — homepage title (decoding/ingredient-first).
- "화해 고객들이 직접 선택한 랭킹" — homepage section (user-evidence framing).
- "사용 가능한 진짜 디자인 시스템을 만드는 여정" — official tech blog (craft, candor).

Further published strings the source records on the inspected surfaces, kept byte-exact:

- 화해
- 화장품을 해석하다
- 화해 고객들이 직접 선택한
- 급상승 랭킹
- 내 피부에 꼭 맞는 제품 랭킹
- 나이대별 추천
- 화해 앱에서 더 편리하게
- 검색 페이지로 이동
- 사용 가능한 진짜 디자인 시스템을 만드는 여정
- 화장품 정보는 화해 — 화장품 성분과 정보, 리뷰 확인하고 구매 하세요
- 로그인
- 홈
- 랭킹
- 어워드
- 한국어
- 1/10
- Tech
- 추천 아티클
- 오류가 발생했습니다
- 필수
- 샘플체험
- 화장품 정보 비대칭

**Forbidden register**: cosmetic-marketing superlatives, unverifiable efficacy claims, fear-based "your skin is failing" pitches, and undefined jargon left unexplained. Hwahae's whole premise is decoding, so copy explains rather than dazzles. That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not Hwahae-authored or taken from a separately published UI specification, including the Hwahae Design System (`hds-`) construction documented on the official tech blog.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Hwahae-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Full radius step.** `tokens.rounded.full: 99999` is the unitless full step. The body-named 50% circle stays on that use.
- **Hover and focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
