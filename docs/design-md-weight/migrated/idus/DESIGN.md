# idus (Backpackr) Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

idus (아이디어스), operated by Backpackr (백패커), is Korea's largest handmade-goods marketplace — a place where independent 작가 (makers) sell handcrafted rings, ceramics, candles, baked goods and classes. This contract covers the two first-party web surfaces the source inspected for tokens on 2026-07-02: the homepage at `https://www.idus.com` and the product-detail route at `https://www.idus.com/v2/product/`. The Backpackr official GitHub org at `https://github.com/backpackr` is a named brand-owned source for company context; it does not supply the computed interface tokens below. Every value stays attached to the surface that established it. Reading idus as Korea's largest handmade-goods marketplace, reading those two inspected pages as this contract's token surfaces, keeping values attached to the surface that established them, and treating the GitHub org as a named source that does not supply computed interface tokens, are derived editorial implementation inferences from the verified surfaces; they are not idus-authored or a separately published UI specification.

The captured web surface reads like a warm, high-density Korean commerce app rather than a minimalist boutique: a pure white canvas (`#ffffff`) packed with product thumbnails, ranking flags and social-proof, all organised by a quiet grey text ladder and punctuated by one confident brand color — a carrot orange (`#ef7014`). That orange is disciplined: it appears almost exclusively on the things that mean "act" — the `구매하기` (purchase) CTA, brand-outline buttons, ranking number flags, and the "recently purchased" pills — so the eye is trained to read orange as commitment. The typographic personality is deliberately system-native. idus does not ship a bespoke brand webfont; body and UI text render in the platform system stack (`system-ui` → Apple SD Gothic Neo / Malgun Gothic on Korean devices), tuned for dense hangul legibility. Hierarchy is carried by weight and size rather than typeface: the primary purchase CTA runs at 18px / weight 700, category tabs at 16px / 400, body and button labels settle at a workmanlike 14px, and utility chrome (top nav, icon labels) drops to 12px and 11px. Live inspection found `box-shadow: none` and `0px` borders across most of the chrome — separation comes from flat hairlines (`#d9d9d9`), a light border on secondary buttons (`#acacac`), and tinted wash surfaces (`#fff7f2` orange, `#fff2f4` pink) rather than elevation. Geometry is mostly tight and square: 2px-radius action buttons, 4px dark caption chips, 12px product-image cards, and a single dramatic exception — the fully-rounded 100px social-proof pill. A small warm accent set rounds out the palette: coral (`#ff4b50`) marks sale and discount prices, gold (`#ffaf00`) draws rating stars, and event yellow (`#ffea2c`) flags promotions. Dark near-black (`#111111`) anchors the curation caption chips. The hex values, sizes, weights, radii, and surface names in this paragraph are recorded. The characterizations built on them — warm high-density commerce rather than a minimalist boutique; orange as commitment; system-native typographic personality; hierarchy carried by weight and size rather than typeface; engineered for scanning hundreds of handmade listings quickly, not for editorial pause; and restraint with depth — are a derived editorial implementation inference from the verified surfaces; they are not idus-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. idus (아이디어스) was founded in **2014** by **Backpackr (백패커)**, led by CEO **김동환 (Kim Dong-hwan)**, to solve a specific gap in Korean commerce: talented independent makers of handmade goods — ceramics, jewelry, candles, baked goods, leather craft — had no dedicated, trusted marketplace to reach buyers who valued craft over mass production. The name reads as "idea + us / ideas," and the founding premise reframed a handmade purchase as a relationship with a 작가 (maker) rather than a transaction with a store. The platform matured into Korea's largest handmade marketplace, expanding from physical goods into handmade classes (클래스) and gifting, and Backpackr later broadened its creator-economy footprint (including the crowdfunding platform 텀블벅 / Tumblbug). The homepage's own vocabulary — 작가 (maker), 작품 (work), 작가홈 (maker's home), 팔로우 (follow) — encodes the thesis: idus is a place to follow and support people who make things by hand. What idus refuses, visible in its design: the glossy, shadow-stacked chrome of a mass DTC store and the hard-sell scarcity tactics of discount commerce. What it embraces: a warm single accent (carrot orange), a flat and dense but scannable grid, social proof framed as encouragement rather than pressure, and a maker-first vocabulary throughout the interface. The year, the Backpackr / 백패커 name, the CEO name, the founding gap, the name reading, the 클래스 / 텀블벅 expansion, the homepage vocabulary, the thesis sentence, and the refuse/embrace pairing are the source's own narrative facts; they do not by themselves supply interface tokens. The source's own comment records founding attribution and platform history as widely documented public facts, and specific interpretive readings of the design as editorial. Classifying that founding-and-maker narrative as context that does not by itself supply interface tokens, and treating the refuse/embrace pairing as that editorial reading, are derived editorial implementation inferences from the verified surfaces; they are not idus-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Search makers and works from the header field `찾으시는 작가, 작품이 있나요?` on `https://www.idus.com`.
- Open a home category tab (`선물추천`, `할인`, `베스트`, `취향발견`, `실시간`, `최신작품`, `커뮤니티`).
- Purchase, add to cart, or gift from the product-detail action rail (`구매하기`, `장바구니`, `선물하기`) on `https://www.idus.com/v2/product/`.
- Follow a maker (`팔로우`) or open `작품문의`.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by publicly observable idus user segments (gift-shoppers seeking something personal, supporters of independent makers, hobbyists browsing handmade classes), not individual people, so those biographies are dropped rather than promoted, and no name, age, city, or occupation classification is carried into this document or its sidecar. What the source independently records is the audience at a group level: gift-shoppers seeking something personal, supporters of independent makers, hobbyists browsing handmade classes. Reading those source-named groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not idus-authored or a separately published UI specification.

- Single brand action color — carrot orange (`#ef7014`) — reserved for CTAs, brand-outline buttons, rank flags and social-proof pills
- System font stack (`system-ui` / Apple SD Gothic Neo / Malgun Gothic) — hierarchy carried by weight (700 CTA vs 400 body) and size, not a bespoke typeface
- Flat, near-shadowless commerce UI: `box-shadow: none`, separation via `#d9d9d9` hairlines and `#acacac` button outlines
- Tight square geometry — 2px buttons, 4px chips, 12px product cards — with one 100px full-pill exception for social-proof
- Warm accent trio: coral sale price (`#ff4b50`), gold rating stars (`#ffaf00`), event yellow (`#ffea2c`)
- Near-black (`#111111`) dark caption chips over curation imagery
- Cool-neutral text ladder: `#333333` primary → `#666666` secondary → `#999999` tertiary/faint
- Tinted wash surfaces (`#fff7f2`, `#fff2f4`) instead of shadows for gentle section emphasis
- White (`#ffffff`) canvas and white text (`#ffffff`) on the orange primary

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not idus-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Makers, not sellers.** The interface names people (작가, 작가홈, 팔로우), not shops. *UI implication:* surface the maker identity on cards and detail pages; make "follow the maker" a first-class action.
2. **One color means act.** Carrot orange (`#ef7014`) is the only saturated action color. *UI implication:* reserve orange for CTA, outline buttons, rank flags and social-proof; keep everything else neutral so the next step is unambiguous.
3. **Encourage, don't pressure.** Social proof is framed as warm momentum ("recently purchased"), never fear-based scarcity. *UI implication:* use positive, count-based reassurance pills; avoid countdown timers and "last chance" urgency.
4. **Dense but scannable.** The catalog is huge, so density is a feature. *UI implication:* separate with hairlines and tint washes, keep body at 14px, and let the single orange accent guide the eye through a crowded grid.
5. **Flat and warm.** Handmade goods deserve a light, human surface, not heavy banking chrome. *UI implication:* no drop shadows; lean on `#d9d9d9` hairlines, warm tint surfaces, and rounded product imagery.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not idus-authored or a separately published UI specification.

- Reserve carrot orange (`#ef7014`) for actions and proof — CTA, brand-outline buttons, rank flags, social-proof pills
- Use weight 700 on action labels and 400 on body/nav — let weight carry hierarchy under a system font
- Separate sections with `#d9d9d9` hairlines and `#acacac` outlines, not shadows
- Keep action geometry tight (2px radius) and reserve the 100px full-pill only for social-proof momentum
- Use `#333333` for primary text, never pure black
- Use coral (`#ff4b50`) for sale/discount prices and gold (`#ffaf00`) for rating stars
- Overlay dark near-black (`#111111`) caption chips on curation imagery
- Keep body and buttons at a dense 14px for fast scanning of large product grids

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not idus-authored or a separately published UI specification.

- Spread orange across decorative elements — it dilutes the single-action signal
- Use drop shadows for elevation — idus is a flat, hairline-separated system
- Use pure black (`#000000`) for body text — the ladder is `#333333` → `#666666` → `#999999`
- Introduce a bespoke display webfont — the system stack is intentional for hangul density
- Round action buttons heavily — they stay at a tight 2px (the 100px pill is only for social-proof)
- Reuse the sale coral (`#ff4b50`) or rating gold (`#ffaf00`) as a primary action color — carrot is the only CTA color
- Add large empty margins that break the dense, scannable grid rhythm
- Set a light font weight on CTAs — action labels are always 700

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — carrot as the single action color, "if it is orange, it means act," text as a soft near-black never pure `#000000`, hairlines as the primary separation device — that characterization is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification. The hex values and recorded uses are the source's own.

Primary

- **idus Carrot** (`#ef7014`): The single brand action color. Live-measured as the `구매하기` purchase CTA background, the brand-outline button text/border, the ranking number flag, and the "recently purchased" social-proof pill. Token-set key `tokens.colors.primary`.
- **Carrot Tint** (`#fff7f2`): A barely-there orange wash surface for gentle emphasis blocks and orange-themed sections. Token-set key `tokens.colors.primary-tint`.
- **On-Primary White** (`#ffffff`): Text and icons on the carrot CTA and on dark chips. Token-set key `tokens.colors.on-primary`.

Accents

- **Sale Coral** (`#ff4b50`): Discount / sale price emphasis and favorite (heart) marks — the second most frequent foreground color on the page after the neutral text ladder. Token-set key `tokens.colors.sale`.
- **Sale Tint** (`#fff2f4`): Light pink wash surface for discount and event blocks. Token-set key `tokens.colors.sale-tint`.
- **Rating Gold** (`#ffaf00`): Rating stars and review scores. Token-set key `tokens.colors.rating`.
- **Highlight Yellow** (`#ffea2c`): Event / promotion highlight flags. Token-set key `tokens.colors.highlight`.

Neutral and ink

- **Ink** (`#111111`): Near-black background for the dark caption chips overlaid on curation banners; also strong emphasis text. Token-set key `tokens.colors.ink`.
- **Text** (`#333333`): Primary text and heading color — the dominant foreground across the whole surface. A soft near-black, never pure `#000000`. Token-set key `tokens.colors.text`.
- **Text Muted** (`#666666`): Secondary text — top-nav utility links, descriptions, metadata. Token-set key `tokens.colors.text-muted`.
- **Text Faint** (`#999999`): Tertiary / lowest-emphasis text, timestamps, disabled labels. Token-set key `tokens.colors.text-faint`.

Surface and borders

- **Canvas** (`#ffffff`): Page background and all card surfaces. Token-set key `tokens.colors.canvas`.
- **Border** (`#d9d9d9`): Hairline dividers and light borders — the primary separation device in the shadow-free system. Token-set key `tokens.colors.border`.
- **Border Strong** (`#acacac`): The 1px outline on secondary white buttons (`장바구니`, `선물하기`), a touch heavier than the divider hairline. Token-set key `tokens.colors.border-strong`.

`tokens.colors.canvas: #ffffff` is the page-and-card role. `tokens.colors.on-primary: #ffffff` is the on-carrot / on-chip foreground. They share a hex and stay unmerged. Keeping those two keys on separate paths is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

### Spacing

Unitless token-set steps from `tokens.spacing`: `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.base: 14` · `tokens.spacing.md: 16` · `tokens.spacing.lg: 20` · `tokens.spacing.xl: 24`. The source restates the same scale in px as 4px, 8px, 14px, 16px, 20px, 24px, with a 4px-step rhythm. Measured paddings land at 0×8px (utility), 6×8px (chips), 0×14px (pills), 0×16px (primary buttons). Action buttons use 48px height with 16px horizontal padding; social-proof pills use 14px horizontal padding. `tokens.spacing.xs: 4` is not `tokens.rounded.md: 4`. `tokens.spacing.base: 14` is a spacing step only — it is not the pill's 14px horizontal padding and not the 14px type size. `tokens.spacing.md: 16` is not the button's `0 16px` / `0px 16px` padding. `tokens.spacing.sm: 8` is a spacing step only. `tokens.spacing.lg: 20` and `tokens.spacing.xl: 24` are spacing steps only. Keeping those key paths unmerged is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

### Shape

Unitless token-set steps from `tokens.rounded`: `sm 2` · `md 4` · `lg 12` · `full 100`.

The source's named radius uses, kept on their own rows:

- Sharp (2px): action buttons, search field — the workhorse — `tokens.rounded.sm`
- Small (4px): dark caption chips — `tokens.rounded.md`
- Medium (12px): product-image cards — `tokens.rounded.lg`
- Full (100px): social-proof pills — `tokens.rounded.full: 100`
- Rank-flag corners: `0px 0px 6px 6px` (YAML `0 0 6px 6px`) — a body-named use, not a token-set step

`tokens.rounded.full: 100` stays the unitless full step. `tokens.rounded.sm: 2` is not a spacing step. `tokens.rounded.md: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.lg: 12` is a shape step only. Keeping those paths unmerged, and reading Sharp 2px as the workhorse among the named radius uses, is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, most surfaces, product cards |
| Hairline (Level 1) | `1px solid #d9d9d9` | Dividers, light card outlines |
| Outline (Level 2) | `1px solid #acacac` | Secondary white button borders |
| Tint (Level 3) | `#fff7f2` / `#fff2f4` wash | Gentle section emphasis without elevation |

Token-set path: `tokens.shadow.none` `none`. Live inspection returned `box-shadow: none` and `0px solid` borders across the header, category tabs, product cards and action buttons. Depth is communicated by flat hairlines (`#d9d9d9`), a slightly heavier outline (`#acacac`) on secondary buttons, and low-saturation tint washes (`#fff7f2` orange, `#fff2f4` pink). When something needs to pop, the system reaches for the carrot orange (`#ef7014`) or the near-black ink (`#111111`) chip — never a drop shadow. Reading that as a near-shadowless system that keeps a dense commerce grid feeling fast and flat rather than heavy is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, radius, and shadow on the two idus.com surfaces. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to the easing curves. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not idus-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, follow toggle |
| `motion-standard` | 200ms | Card/grid reveal, sheet, dropdown |
| `motion-slow` | 320ms | Page-level transitions, banner carousel |

Easing roles — three roles with declared uses. The specific curve values the source lists (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are not traceable to idus-computed samples, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, sheets, pills |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and quiet — consistent with the flat, dense commerce aesthetic.
- Product cards fade-in from below as grids load at `motion-standard / ease-enter`; the carrot CTA and follow toggle respond to press with a subtle opacity/scale shift; curation banners cross-fade on a slow carousel.
- No bounce or spring — a marketplace signals steadiness and trust, not gimmickry.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the banner carousel freezes; the catalog remains fully functional.

The "steadiness and trust, not gimmickry" reading is the source's own motion rule; treating it as a current-surface instruction is already covered by the motion-section qualifier above.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The two inspected surfaces describe the marketplace and use a platform system stack. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification. |
| Live computed surface-use | Both inspected surfaces compute visible text on the platform system stack. The source names `system-ui`, `-apple-system`, with `Apple SD Gothic Neo` / `Malgun Gothic` as the Korean fallbacks. |
| Official distributed asset | No idus-exclusive downloadable font package was verified in the source. That absence-of-exclusive-package reading is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification. |
| Declared-only | The source records `system-ui`, `-apple-system`, `Apple SD Gothic Neo`, and `Malgun Gothic` as the stack that does the work. They are the live stack, not a second claimed brand face sitting unused. Classing those members as the system stack rather than a bespoke brand face is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification. |
| License | The source records the stack as platform-native. This record does not establish an idus-issued font-license notice. That platform-versus-grant reading is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces the source did not inspect stays outside these two captures. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification. |

### Family

- **Current visible UI / body family:** `system-ui`, with `-apple-system` and `Apple SD Gothic Neo` / `Malgun Gothic` as the Korean fallbacks. Token-set path `tokens.typography.family.sans` is `system-ui`. Token-set path `tokens.typography.family.kr` is `Apple SD Gothic Neo / Malgun Gothic (system stack)`.
- idus does not load a bespoke brand webfont on web; the OS hangul font does the work.
- Do not replace this stack with a different claimed family, and do not present a fallback member as a separately shipped brand face. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Purchase CTA | system stack | 18px | 700 | 1.4 | — | Primary purchase button label (구매하기) |
| Category Tab | system stack | 16px | 400 | 1.5 | — | Category navigation tabs (선물추천, 할인, 베스트) |
| Button Strong | system stack | 14px | 700 | 1.5 | — | Outlined brand-action button labels (작품문의, 팔로우) |
| Body | system stack | 14px | 400 | 1.5 | — | Standard reading text, search field |
| Caption | system stack | 12px | 400 | 1.5 | — | Top utility nav links, social-proof pills |
| Micro | system stack | 11px | 400 | 1.4 | — | Icon labels (관심, 내 정보, 장바구니) |

Unitless line heights stay ratios: `1.4` on Purchase CTA and Micro; `1.5` on Category Tab, Button Strong, Body, and Caption. They are never converted to a replacement px (A1a). Token-set paths: `tokens.typography.cta` · `tokens.typography.section-tab` · `tokens.typography.button-strong` · `tokens.typography.body` · `tokens.typography.caption` · `tokens.typography.micro`. Keeping the ratios as ratios, and keeping each YAML `use` string on its own row, is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

Type rules the source states:

- **Weight over typeface**: with a system font, idus signals importance by jumping to weight 700 (CTAs, flags) against a 400 body — never by swapping fonts.
- **Dense, scannable sizing**: body and buttons sit at 14px, utility chrome at 11–12px, so a grid of hundreds of handmade listings stays legible without scrolling fatigue.
- **Bold is for action and proof**: 700 is reserved for things the shopper acts on (purchase, follow) or trusts (ranking, "recently purchased"), reinforcing the orange = act signal.
- **No pure black**: text is `#333333`, not `#000000` — a softer near-black that keeps the busy commerce surface from feeling harsh.

The four rule titles and the weight-over-typeface / dense-scannable / bold-for-action / no-pure-black readings are a derived editorial implementation inference from the verified surfaces; they are not idus-authored or a separately published UI specification. The sizes, weights, and ratios are recorded.

### Assets

- Logo treatment the source frontmatter records: `logo.type: favicon` and `logo.slug` `https://www.google.com/s2/favicons?domain=idus.com&sz=128`. That slug is an identity pointer through a third-party favicon service, not an idus-hosted brand file URL.
- Product photography and curation banners are first-party catalog content; do not replace them with invented brand-color decoration.

Reading the favicon-service URL as an identity pointer rather than a hosted brand file, and reading product photography as first-party catalog content that must not be replaced with invented decoration, is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How applicability is decided here

The source declares each token-set component with a primitive type (`button`, `badge`, `input`, `tab`, `card`) and a value set; those types are preserved per component. Applicability below is judged by each control's role, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a destination link that commits no operation in place, a tab that only selects, a tertiary inquiry or follow that does not submit purchase or cart, or a display element with no action at all — and the reason given is always that semantic one. Where the source supplies no interaction evidence for a container at all, its kind and applicability map are omitted rather than decided. A `Primitive type` line is attached only when the source YAML records that type on that component.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; they are not idus-authored or a separately published UI specification. This is not a complete state-coverage claim.

### Primary Purchase CTA

- Role: in-place purchase commit on a product-detail page
- Primitive type: `button` · Kind: interactive
- Domain: `https://www.idus.com/v2/product/`
- Background: `#ef7014`
- Text: `#ffffff`
- Radius: 2px
- Padding: 0px 16px (YAML `0 16px`)
- Height: 48px
- Font: 18px system stack weight 700
- Token-set font record: `18px / 700`
- Token-set use: `Primary purchase CTA (구매하기)`
- Published label: `구매하기`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The surface contract fades carrot actions rather than turning them grey, so the brand read is preserved |
| loading | applicable | The source names this the purchase commit; the surface state contract records an inline spinner within the `#ef7014` CTA |
| error | applicable | The control can commit a purchase; the surface state contract records network/fetch-failed treatment at system level. Visual treatment at this control is omitted |
| success | applicable | The control can commit a purchase; the surface state contract records purchased confirmation at system level. Visual treatment at this control is omitted |

### Secondary Cart / Gift

- Role: in-place add-to-cart and gift commits sitting beside the primary CTA
- Primitive type: `button` · Kind: interactive
- Domain: `https://www.idus.com/v2/product/`
- Background: `#ffffff`
- Text: `#333333`
- Border: 1px solid `#acacac`
- Radius: 2px
- Padding: 0px 16px (YAML `0 16px`)
- Height: 48px
- Font: 18px system stack weight 700
- Token-set font record: `18px / 700`
- Token-set use: `Secondary actions (장바구니, 선물하기)`
- Published labels: `장바구니`, `선물하기`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A cart or gift action whose availability can lapse; visual treatment omitted |
| loading | applicable | The source names these add-to-cart and gift commits; in-progress treatment at this control is omitted |
| error | applicable | The control can commit cart or gift; the surface state contract records fetch-failed treatment at system level. Visual treatment at this control is omitted |
| success | applicable | The surface state contract records added-to-cart / purchased confirmation at system level. Visual treatment at this control is omitted |

### Brand Outline

- Role: tertiary brand-tinted actions (inquiry, follow-maker)
- Primitive type: `button` · Kind: interactive
- Domain: product detail
- Background: `#ffffff`
- Text: `#ef7014`
- Border: 1px solid `#ef7014`
- Radius: 2px
- Padding: 0px 16px (YAML `0 16px`)
- Height: 40px
- Font: 14px system stack weight 700
- Token-set font record: `14px / 700`
- Token-set use: `Tertiary brand-outline actions (작품문의, 팔로우)`
- Published labels: `작품문의`, `팔로우`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | An inquiry or follow action whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens `작품문의` or toggles `팔로우`; it does not submit the purchase or cart operation the surface contract names on the carrot CTA |
| error | not-applicable | Inquiry and follow do not report a failed purchase or cart request on this button |
| success | not-applicable | Same role reason: reaching inquiry or completing follow is not the purchased / added-to-cart result the surface contract names |

### Top Utility

- Role: header utility links
- Kind: interactive
- Domain: homepage header
- Background: transparent
- Text: `#666666`
- Padding: 0px 8px
- Height: 30px
- Font: 12px system stack weight 400
- Use: Header utility links
- Published labels: `로그인`, `회원가입`, `고객센터`
- This §4 record is not in the token set.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens `로그인`, `회원가입`, or `고객센터`; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this link, reports failure |
| success | not-applicable | Same role reason: reaching those destinations is not an operation this link reports as success |

### Global Search

- Role: header search field
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#333333`
- Border: none
- Radius: 2px
- Font: 14px system stack weight 400
- Token-set font record: `14px / 400`
- Token-set use: `Global search field (찾으시는 작가, 작품이 있나요?)`
- Published placeholder: `찾으시는 작가, 작품이 있나요?`
- Borderless; sits on a hairline row rather than a boxed field

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field whose availability can lapse; visual treatment omitted |
| loading | not-applicable | The field accepts a query; it does not commit a fetch whose in-progress state it reports on itself |
| error | applicable | The surface contract records field-level validation below the input |
| success | not-applicable | The field does not complete a purchase or cart commit on itself |

### Product Card

- Role: product thumbnail card in curation grids
- Primitive type: `card`
- Background: `#ffffff`
- Radius: 12px
- Token-set use: `Product thumbnail card in curation grids`
- Use: Product thumbnail card in curation grids — image corners rounded, flat (no shadow)

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Social-Proof Pill

- Role: purchase-momentum pill on product cards
- Primitive type: `badge`
- Kind: non-interactive — a social-proof label, not a commit control
- Background: `#ef7014`
- Text: `#ffffff`
- Radius: 100px
- Padding: 0px 14px (YAML `0 14px`)
- Height: 33px
- Font: 14px system stack weight 700
- Token-set font record: `14px / 700`
- Token-set use: `Social-proof pill (최근 N건 더 많이 구매되었어요)`
- Published sample: `최근 573건 더 많이 구매되었어요`

### Ranking Flag

- Role: rank number flag on best-seller cards
- Primitive type: `badge`
- Kind: non-interactive — a rank label, not a commit control
- Background: `#ef7014`
- Text: `#ffffff`
- Radius: 0px 0px 6px 6px (YAML `0 0 6px 6px`)
- Font: 16px system stack weight 700
- Token-set font record: `16px / 700`
- Token-set use: `Ranking number flag on best-seller cards`
- Use: Rank number (1, 2, 3) flag on best-seller ranking cards

### Dark Caption Chip

- Role: overlay caption label on curation banner imagery
- Kind: non-interactive — a caption overlay, not a commit control
- Background: `#111111`
- Text: `#ffffff`
- Radius: 4px
- Padding: 6px 8px
- Use: Overlay caption label on curation banner imagery
- This §4 record is not in the token set.

### Category Tab

- Role: home category navigation
- Primitive type: `tab` · Kind: interactive
- Domain: homepage
- Text: `#666666`
- Font: 16px system stack weight 400
- Token-set font record: `16px / 400`
- Token-set active: `text #333333`
- Active: `#333333` text
- Token-set use: `Category navigation tabs`
- Published labels: `선물추천`, `할인`, `베스트`, `취향발견`, `실시간`, `최신작품`, `커뮤니티`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable item; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching a category tab is not an operation with a success result |

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not idus-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas. Single `#333333` line explaining no matching 작가/작품 were found, with a muted `#666666` suggestion to adjust the query. One carrot (`#ef7014`) CTA to browse categories. No clutter. |
| **Empty (empty cart / wishlist)** | `#666666` single line ("아직 담은 작품이 없어요"), with a carrot CTA back into discovery ("작품 둘러보기"). Warm, not scolding. |
| **Loading (grid fetch)** | Flat skeleton cards at final product-card dimensions, 12px radius, `#d9d9d9`-tinted blocks. No shadow shimmer — a flat pulse consistent with the shadowless system. |
| **Loading (purchase submit)** | Inline spinner within the `#ef7014` CTA; button label swaps to a progress state, previous page content stays visible. |
| **Error (network / fetch failed)** | Inline `#333333` message with a plain-language explanation and a retry, never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level message below the input in a coral (`#ff4b50`) tone; describes what's valid, not just "필수". |
| **Success (added to cart / purchased)** | Brief inline confirmation in a calm tone; next-step (장바구니 / 주문내역) linked immediately below. No celebratory emoji spam. |
| **Skeleton** | `#d9d9d9` blocks at final dimensions, 12px radius, flat pulse. |
| **Disabled** | `#999999` faint text on reduced-opacity surface; carrot actions fade rather than turn grey to preserve brand read. |

These rows describe search, cart, grid-fetch, purchase-submit, and form treatments the source wrote at system level. They are not attached as visual treatments to the destination tabs or utility links above. That non-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Dense multi-column product-thumbnail grids are the dominant layout unit
- A horizontal category tab row (선물추천 / 할인 / 베스트 …) anchors the top of the home feed
- Product detail pages stack a media column with a sticky action rail (장바구니 / 선물하기 / 구매하기)
- Curation banners layer dark caption chips (`#111111`) over full-bleed imagery
- Spacing restated from `tokens.spacing`: `tokens.spacing.xs: 4` · `tokens.spacing.sm: 8` · `tokens.spacing.base: 14` · `tokens.spacing.md: 16` · `tokens.spacing.lg: 20` · `tokens.spacing.xl: 24`
- Shape restated from `tokens.rounded`: sharp 2 · small 4 · medium 12 · `full: 100`; rank-flag `0px 0px 6px 6px` stays on that use

**Density with breathing hairlines**: idus is intentionally information-rich; separation comes from `#d9d9d9` hairlines and white gutters rather than large empty margins. **Flat segmentation**: sections separate by hairline and tint wash (`#fff7f2`, `#fff2f4`), not by shadow stacks. **Action clarity in a busy field**: within a crowded grid, the orange CTA and pills are the only saturated elements, so the next action always stands out. Reading those three source titles as current-surface layout instruction is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not idus-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single/2-up product grid, sticky bottom action bar, category tabs scroll horizontally |
| Tablet | 640-1024px | 3-4 column product grids, moderate gutters |
| Desktop | 1024-1440px | 4-6 column dense grids, full category tab row, product detail media + sticky action rail |

Touch targets the source records: primary action buttons at 48px height with 16px horizontal padding; social-proof pills at 33px height, full 100px radius; icon utility buttons (관심 / 내 정보 / 장바구니) at ~67px stacked icon+label hit areas.

Collapsing strategy the source records:

- Product grids reflow from 4-6 columns down to 2-up / single column
- Category tab row switches to horizontal scroll on narrow viewports
- Product detail action rail (장바구니 / 선물하기 / 구매하기) becomes a sticky bottom bar on mobile
- Curation banners maintain full-bleed treatment with the dark caption chip repositioned

Image behavior the source records:

- Product thumbnails keep 12px rounded corners across breakpoints
- Curation imagery stays full-bleed; dark `#111111` caption chips overlay at all sizes
- No shadows on imagery at any size, consistent with the flat system. Reading that no-shadow-on-imagery rule as consistent with the flat system is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes idus's voice as **warm, encouraging, and maker-centric** — it speaks about handmade 작품 (works) and the 작가 (makers) behind them, not "products" and "sellers." The register is friendly Korean commerce: it invites discovery ("취향발견" / discover-your-taste), reassures with social proof ("최근 573건 더 많이 구매되었어요" / "573 more purchased recently"), and asks rather than commands ("찾으시는 작가, 작품이 있나요?" / "Is there a maker or work you're looking for?"). Actions are plain and functional (`구매하기`, `장바구니`, `선물하기`, `작품문의`), never hype-driven. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not idus-authored or a separately published UI specification. The Korean lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Search prompt | Inviting, question-framed. "찾으시는 작가, 작품이 있나요?" |
| Category nav | Playful discovery labels. "취향발견", "선물추천", "베스트". |
| CTAs | Plain, functional imperatives. "구매하기", "선물하기", "작품문의". |
| Social proof | Warm, momentum-framed. "최근 N건 더 많이 구매되었어요". |
| Maker relationship | Respectful of the artisan. "작가홈", "팔로우" — you follow a person, not a shop. |

**Voice samples (verbatim from live surfaces):**

- "찾으시는 작가, 작품이 있나요?" — search placeholder (invites discovery, maker-first).
- "최근 573건 더 많이 구매되었어요" — social-proof pill (warm momentum, no pressure).
- "취향발견" — category tab (discovery-framed, taste-centric). The parenthetical glosses on these three samples — invites discovery, maker-first; warm momentum, no pressure; discovery-framed, taste-centric — are a derived editorial implementation inference from the verified surfaces; they are not idus-authored or a separately published UI specification.

Further published strings the source records on the inspected surfaces, kept byte-exact:

- 아이디어스
- 백패커
- 작가
- 작품
- 클래스
- 텀블벅
- 김동환
- 작가홈
- 팔로우
- 구매하기
- 장바구니
- 선물하기
- 작품문의
- 선물추천
- 할인
- 베스트
- 취향발견
- 실시간
- 최신작품
- 커뮤니티
- 찾으시는 작가, 작품이 있나요?
- 최근 573건 더 많이 구매되었어요
- 최근 N건 더 많이 구매되었어요
- 로그인
- 회원가입
- 고객센터
- 관심
- 내 정보
- 아직 담은 작품이 없어요
- 작품 둘러보기
- 오류가 발생했습니다
- 필수
- 주문내역

**Forbidden register**: aggressive scarcity/urgency ("지금 아니면 끝!"), treating makers as anonymous "sellers", undefined marketing jargon, exclamation-heavy hype. The tone stays warm and human because the goods are handmade and personal. That premise-to-register causal is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values. Treating the list as named unresolved values rather than a license to invent is a derived editorial implementation inference from the verified surfaces; it is not idus-authored or a separately published UI specification.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to idus-computed samples. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Full radius step.** `tokens.rounded.full: 100` is the unitless full step.
- **Hover and focus-visible treatments.** Those visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning.
