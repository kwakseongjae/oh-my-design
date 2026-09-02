# Kyobo Book Centre Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Kyobo Book Centre (교보문고) is the catalog identity (`display_name_kr`: 교보문고). Catalog homepage identity is `https://www.kyobobook.co.kr`. This contract covers four first-party web surfaces that the source inspected live: the main portal at `https://www.kyobobook.co.kr`; the commerce storefront at `https://store.kyobobook.co.kr/bestseller/online/weekly`; the published Kyobobook Design System (KDS) at `https://design.kyobobook.co.kr`; and the corporate site at `https://company.kyobobook.co.kr`. Interface tokens attach to the portal, the storefront, and KDS. The company site is a narrative source for mission and core values; it is not a token surface in the source. Every value below stays attached to the surface or evidence class that established it. Reading those four URLs as this contract's captured surfaces, keeping the company site as narrative rather than as a token surface, and keeping every value attached to the domain that established it, are derived editorial implementation inferences from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

Kyobo Book Centre is Korea's largest and oldest book retailer. The two commerce-facing layers share a near-white chassis and split their typefaces. The portal and the KDS site run **NotoSansKR**. The storefront catalog runs **Pretendard**. The source's token note states that split in those words. KDS documents the primary UI color as blue 700 `#5055b1`, labelled "UI 기본컬러" (UI base color) and Informative/Accent — the live 바로구매 (Buy Now) CTA uses that fill. Heritage green 700 `#4dac27` is the bird-and-tree mark color; KDS records it as Positive/Accent. The storefront's sale-price red `#c71e24` is a live listing color and is not the KDS error red `#ec1f2d` and not the Hottracks (핫트랙스) red `#da2128`. Geometry on the captured controls is conservative: 8px buttons and product cards, 4px segmented toggles, a 24px pill-ended search. Live inspection returned `box-shadow: none` on portal, storefront, and KDS interactive elements. The hex values, the two families, the KDS labels, the control radii, and `box-shadow: none` are recorded. Calling the chassis near-white or near-invisible, calling the split a two-color brand story, calling the geometry conservative, and reading the whole as a catalog built for scanning long lists rather than for hero-driven persuasion, are derived editorial implementation inferences from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

Kyobo Book Centre opened its flagship store beneath the Kyobo Building in Gwanghwamun, Seoul, on **June 1, 1980**, founded by **신용호 (Shin Yong-ho)** — the founder of Kyobo Life Insurance (교보생명), of which the bookstore is an affiliate. From the start it was conceived not as a profit center but as a cultural institution: the founder's instruction was that the store welcome everyone, including those who came only to read and not to buy. The company's motto is **"사람은 책을 만들고 책은 사람을 만든다"** (People make books, and books make people). **광화문글판**, the giant seasonal poetry banner on the Gwanghwamun building, has run since 1991. Over four decades Kyobo grew into Korea's largest bookstore chain — a nationwide network of stores plus the dominant online bookshop, the eBook platform, the **sam** subscription service, and the **핫트랙스 (Hot Tracks)** music/stationery sub-brand. The official KDS mission is **"사용자 경험을 가치있게, 고객의 삶을 흥미롭게"** (make the user experience valuable, make customers' lives interesting). The source's own closing note records the founding details beyond the live sites as widely documented public facts rather than as a statement quoted from a verified Kyobo source in that turn; those facts do not by themselves supply interface tokens. What the source says the design refuses is "the loud, urgency-driven chrome of discount-first commerce." What it says the design embraces, per that KDS mission, is "a content-first interface where books carry the color, the indigo action is singular and clear, and the heritage green signals trust earned over forty years." That refuses/embraces pairing, and reading the digital product as mirroring the stores (vast inventory, a culture of browsing, institutional calm), are derived editorial implementation inferences from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, classifying them as surface-or-control outcomes rather than fictional biographies, and recording that they do not come from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS). Each names a surface or control the source records.

- Search the portal catalog from the header integrated search.
- Browse storefront catalog categories (국내도서 / 외국도서 / eBook).
- Purchase with 바로구매 / 구매하기, or add to 장바구니, on the storefront.
- Read the published Kyobobook Design System at `https://design.kyobobook.co.kr` (Foundation/Color, Button, Input, Chip, Tab, Voice).
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source's persona section states in its own header, and again in its closing note, that its archetypes are fictional and that the names are illustrative; those biographies are not carried here and are not re-hosted in the sidecar. What the source independently records, in its own wording, as publicly observable Kyobo user segments is the audience at a group level: Korean book buyers, students, gift shoppers, eBook readers. Dropping the fictional biographies rather than promoting them, and reading those source-named groups as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

### Distinctive traits

The eight traits below are the source's own Key Characteristics. The values in them are recorded; the groupings and the readings inside them ("two-color brand system", "content-first neutrality", "disciplined semantic reds") are a derived editorial implementation inference from the verified surfaces — they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

- Two-color brand system per KDS: indigo-blue `#5055b1` as the primary UI/action color, heritage green `#4dac27` as the positive accent
- Content-first neutrality — white `#ffffff` / grey `#f2f2f2` chassis so book covers carry the color
- Pure-black `#000000` ink over a warm grey ladder (`#292929` / `#595959` / `#767676`) for dense, legible catalog text
- Flat, near-shadowless depth — hairlines (`#eaeaea`), borders (`#d5d5d5`, `#cccccc`) and surface tint (`#f7f7f7`) do the separating
- Disciplined semantic reds — `#da2128` for Hottracks, `#ec1f2d` for error, `#c71e24` for sale price (never interchanged)
- Dual typeface system — NotoSansKR on the portal/DS, Pretendard on the storefront
- Conservative geometry — 8px buttons, 4px segmented toggles, a 24px pill-ended search bar
- One-action-per-area discipline — the indigo Buy Now is the single emphasized CTA, cart sits in neutral grey

### Principles

Items 2, 3, 5, and 6 restate published KDS rules (Button guide, Color foundation, Voice guide, accessibility). Items 1, 4, and 7, and the UI implications that connect any of the seven to a specific treatment, are a derived editorial implementation inference from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS). The seven headings and their UI implications are the source's own Principles section.

1. **Content is the hero, chrome is neutral.** *UI implication:* keep the chassis white/grey and the ink neutral so book covers and titles carry all the color.
2. **One action per area.** The KDS Button guide states a single area should drive one action. *UI implication:* the indigo `#5055b1` Buy Now is the only emphasized CTA; cart and the rest stay neutral grey.
3. **Color is semantic, never decorative.** KDS defines blue (informative/action), green (positive), and reds (Hottracks vs error). *UI implication:* never reuse a semantic color for ornament, and never confuse the three reds.
4. **Flat and dense by design.** *UI implication:* no shadows; separate with surface tint and hairlines so high-density catalog pages stay calm.
5. **Speak clearly, one fact at a time.** From the KDS Voice guide. *UI implication:* concise action-verb CTAs, one piece of information per sentence, meaningful empty states.
6. **Accessible by default.** KDS requires color cues to be paired with text/icons and contrast to meet AA. *UI implication:* state is never color-only.
7. **Trust earned over decades.** *UI implication:* the heritage green and institutional restraint signal a 40-year cultural institution, not a flash-sale shop.

### Application rules

The source's seven Do rules, kept as brand rules rather than as universal governance. The justifications inside them — why a color belongs to one role, why cart stays grey — are a derived editorial implementation inference from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS). Rules that name a KDS guide remain KDS rules.

- Use indigo `#5055b1` for the single primary action (Buy Now) — it is the KDS UI base color
- Keep the cart and secondary actions in neutral grey `#767676` so the primary stays unambiguous
- Reserve green `#4dac27` / `#278203` for positive and promotional moments only
- Use clear action-verb CTA labels (-하기, -보기) and separate two choices with a slash "/", per the KDS Voice guide
- Keep pure black `#000000` and the grey ladder for dense catalog text
- Separate sections with `#f2f2f2` / `#f7f7f7` surface tint and `#eaeaea` hairlines, not shadows
- Pair color semantics with text or icons so meaning survives for color-blind users (KDS accessibility rule)

### Avoid

The source's seven Don't rules. The reasons attached to them are a derived editorial implementation inference from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

- Don't confuse the reds — `#da2128` is Hottracks only, `#ec1f2d` is error, `#c71e24` is sale price
- Don't spread the indigo action color across many elements — one emphasized action per area
- Don't add drop shadows for elevation — the system is flat
- Don't use CTA labels longer than 12 characters (incl. spaces) or abstract wording, per KDS Voice
- Don't rely on color alone to convey state — always add a label or icon
- Don't introduce a serif or a third typeface into UI chrome
- Don't tint body text — keep it on the neutral black/grey ladder

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
Every value in this section is a recorded measurement or a published KDS token, carrying the domain it was observed in. The explanatory clauses attached to those values — why a padding is compact, what a shadow is *for*, what a color rule protects — and the qualification that Motion is separate because it rests on no computed observation, are a derived editorial implementation inference from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS). Motion is qualified separately below, because unlike the rest of this section it rests on no computed observation.

### Semantic color

**Primary** — KDS documents blue 700 as "UI 기본컬러". Live 바로구매 uses the same fill.

| Role | Value | Domain | Recorded use |
|---|---|---|---|
| Kyobo Blue 700 | `#5055b1` | KDS + storefront | The KDS-documented "UI 기본컬러" (UI base color) and Informative/Accent token. Primary action color — the background of the 바로구매 (Buy Now) CTA, focus rings, and active tab indicators. Token-set path `tokens.colors.primary`. Catalog identity `primary_color` is this hex. |
| Indigo Accent | `#474c98` | storefront | A deeper indigo used for emphasized text, active labels, and accent typography across the commerce surface. Token-set path `tokens.colors.accent-indigo`. |
| Indigo Tint | `#ededf7` | storefront | A pale indigo surface for selected/active chip and filter backgrounds. Token-set path `tokens.colors.indigo-tint`. |

**Brand Green (Positive)** — KDS green 700 is Positive/Accent.

| Role | Value | Domain | Recorded use |
|---|---|---|---|
| Kyobo Green 700 | `#4dac27` | KDS + portal | The heritage bird-logo green, documented in KDS as the Positive/Accent semantic — success, emphasis, and brand recall. Token-set path `tokens.colors.green`. |
| Green Dark | `#195800` | portal | A deep forest green used for bold promotional nav links (상반기결산, 주말특가). Token-set path `tokens.colors.green-dark`. |
| Green Text | `#278203` | storefront | Mid-green for positive/in-stock status text and confirmations. Token-set path `tokens.colors.green-text`. |

**Semantic Reds** — KDS warns, verbatim: "핫트랙스 red-700과 부정의 의미 red를 혼동하지 않도록 주의".

| Role | Value | Domain | Recorded use |
|---|---|---|---|
| Hottracks Red | `#da2128` | KDS | KDS "red 700" reserved exclusively for the Hottracks (핫트랙스) sub-brand — never for error. Token-set path `tokens.colors.hottracks`. |
| Negative Red | `#ec1f2d` | KDS | KDS error/negative semantic — serious errors and warnings, used sparingly. Token-set path `tokens.colors.negative`. |
| Sale Red | `#c71e24` | storefront | The storefront's discount/sale-price color on product listings. Token-set path `tokens.colors.sale`. |

**Links & Neutrals**

| Role | Value | Domain | Recorded use |
|---|---|---|---|
| Link Blue | `#314fb9` | storefront | Inline text links on commerce pages. Token-set path `tokens.colors.link`. |
| Ink | `#000000` | portal + storefront | Primary text, headings, and titles — pure black for maximum legibility. Token-set path `tokens.colors.ink`. |
| Ink Soft | `#292929` | storefront | Secondary headings and strong body emphasis. Token-set path `tokens.colors.ink-soft`. |
| Body Grey | `#595959` | portal | Standard body and utility-link text (로그인, 회원가입). Token-set path `tokens.colors.body`. |
| Muted Grey | `#767676` | storefront | Tertiary text, inactive tabs, and the neutral cart button background. Token-set path `tokens.colors.muted`. |

**Surface & Borders**

| Role | Value | Domain | Recorded use |
|---|---|---|---|
| Canvas White | `#ffffff` | all three token surfaces | Page background, card surfaces, and text on indigo/green. Token-set path `tokens.colors.canvas`. |
| Surface Grey | `#f2f2f2` | portal | The dominant tinted surface segmenting content zones. Token-set path `tokens.colors.surface`. |
| Surface Alt | `#f7f7f7` | portal + KDS | A lighter alternating surface for KDS panels and section bands. Token-set path `tokens.colors.surface-alt`. |
| Hairline | `#eaeaea` | portal + storefront | The primary divider/border color given the flat, shadowless system. Token-set path `tokens.colors.hairline`. |
| Border | `#d5d5d5` | portal | Standard mid-weight borders on inputs and containers. Token-set path `tokens.colors.border`. |
| Border Strong | `#cccccc` | storefront | Heavier borders on segmented controls and toggles. Token-set path `tokens.colors.border-strong`. |

`tokens.colors.canvas: #ffffff` is not the white text on 바로구매. `tokens.colors.muted: #767676` is not the 장바구니 fill written as a spacing step. `tokens.colors.sale: #c71e24` is not `tokens.colors.negative` and not `tokens.colors.hottracks`. Keeping each hex on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them. Source §5 also names a ~8px base and the same scale, spelled `4px, 8px, 14px, 16px, 24px, 32px, 48px`.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 4 | `tokens.spacing.xs` |
| sm | 8 | `tokens.spacing.sm` |
| md | 14 | `tokens.spacing.md` |
| base | 16 | `tokens.spacing.base` |
| lg | 24 | `tokens.spacing.lg` |
| xl | 32 | `tokens.spacing.xl` |
| xxl | 48 | `tokens.spacing.xxl` |

`tokens.spacing.md: 14` is not the button padding `9px 14px` and not the tab padding `0px 14px`. `tokens.spacing.lg: 24` is not the search radius `24px` and not the heading size `24px`. `tokens.spacing.base: 16` is not the body type-role `16px`. `tokens.spacing.xxl: 48` is not the search height `48px`. Keeping each number on its own key path is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS). Source §5 also notes that button padding lands at 9px 14px and tab padding at 0 14px — those figures sit on their components.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them. Source §5 names the same four steps with their uses.

| Step | Value | Use | Token-set path |
|---|---:|---|---|
| sm | 4 | segmented toggles, badges | `tokens.rounded.sm` |
| md | 8 | buttons, product cards — the workhorse | `tokens.rounded.md` |
| lg | 24 | pill-ended search bar | `tokens.rounded.lg` |
| full | 9999 (`full: 9999` / `9999px`) | occasional fully-rounded chips | `tokens.rounded.full` |

`tokens.rounded.sm: 4` is not `tokens.spacing.xs: 4`. `tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 24` is not `tokens.spacing.lg: 24`. Component records write `4px` / `8px` / `24px` on those controls; those are control radii, not spacing steps. `tokens.rounded.full: 9999` is a YAML step; source §5 spells the same step `9999px`; no captured control writes either form. Keeping the four steps as four keys, and keeping component radii on the controls, is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, inline text, most surfaces |
| Tint (Level 1) | `#f2f2f2` / `#f7f7f7` background shift | Section / card separation without elevation |
| Hairline (Level 2) | `1px solid #eaeaea` (or `#d5d5d5` / `#cccccc`) | Card outlines, dividers, segmented controls |

YAML `tokens.shadow.none` is `"none"`. Live inspection across the portal, the storefront, and the KDS site returned `box-shadow: none` on buttons, cards, tabs, and search. Depth is communicated through surface tint (`#f2f2f2`, `#f7f7f7`) and a hairline ladder (`#eaeaea` → `#d5d5d5` → `#cccccc`). When emphasis is needed, the source says the system reaches for the indigo `#5055b1` action color or the green `#4dac27` accent — never elevation. The last two sentences read a purpose into the measurements; that reading is a derived editorial implementation inference from the verified surfaces, not Kyobo Book Centre-authored and not taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, geometry, border, and shadow on four surfaces, plus published KDS color/component/voice pages. The motion contract below sits outside that attribution: the sibling verification file records no transition, animation, duration, or easing observation on any surface. The durations, easing roles, signature motions, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus ring |
| `motion-standard` | 200ms | Tab switch, dropdown, card/section reveal |
| `motion-slow` | 320ms | Page-level transitions, rail scroll |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Kyobo evidence, so the curves are omitted here and only the roles and their uses are kept. Treating those curves as untraceable and omitting them, rather than promoting them as Kyobo motion tokens, is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

| Token | Use |
|---|---|
| `ease-enter` | Arriving — dropdowns, panels, cards |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions, tab indicator |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or specification document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and quiet, matching the flat, content-first aesthetic.
- The active tab's `#5055b1` underline slides between tabs at `motion-standard / ease-standard`; buttons respond to press with a subtle opacity/scale shift; catalog results fade in from below at `motion-standard / ease-enter`.
- No bounce or spring — a 40-year reading-room institution signals steadiness, not playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant while the storefront stays fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

The following evidence-class application readings — that KDS and the portal publish NotoSansKR as the default face; that the storefront computes Pretendard; that KDS does not by itself name Pretendard as a universal current family; that no Kyobo-exclusive distributed type family was verified; and that the system never mixes a serif into UI chrome — are a derived editorial implementation inference from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

| Evidence class | Resolution |
|---|---|
| Official product-use | KDS and the main portal run NotoSansKR as the default face. KDS is a published first-party design system; it does not by itself name Pretendard as a universal current family. |
| Live computed surface-use | Portal body computes `NotoSansKR`; storefront body computes `Pretendard`. |
| Official distributed asset | No Kyobo-exclusive distributed type family was verified. |
| Declared-only | None named in the source. |
| License | No font-license sentence is recorded in the source. |
| Outside this capture | Faces on surfaces other than the portal, storefront, and KDS are outside this capture. |

### Family

- **Primary / Portal & DS:** `NotoSansKR` — Token-set path `tokens.typography.family.primary`. The main `www.kyobobook.co.kr` portal and the design-system site default.
- **Commerce / Storefront:** `Pretendard` — Token-set path `tokens.typography.family.commerce`. The `store.kyobobook.co.kr` catalog and product surfaces.
- Both are hangul-optimized sans-serifs; the system never mixes a serif into UI chrome.
- Do not substitute a system face for NotoSansKR or Pretendard and present it as the brand type. Do not mix the two families inside one surface. That fallback prohibition, and keeping the two families on their surfaces, are derived editorial implementation inferences from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

### Type roles

Token-set `use` strings are kept verbatim. The longer §3 spellings sit beside them; neither was chosen as a replacement. YAML `lineHeight` stays the unitless ratio the YAML recorded; parenthetical rem figures are the source §3 spelling. YAML `body-sm` weight is `400`; the §3 table writes `400-500`. Both are kept. Keeping the YAML `use` strings verbatim, keeping the YAML singles and the §3 longer spellings on separate readings, and refusing to flatten a unitless ratio into a px, are derived editorial implementation inferences from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

| Role | Font | Size | Weight | Line height | Token-set use | §3 notes |
|---|---|---:|---:|---:|---|---|
| Display | NotoSansKR | 40px (2.50rem) | 900 | 1.2 | Design-system / marketing display headline (Kyobobook Design System) | DS / marketing display ("Kyobobook Design System") |
| Section Heading | NotoSansKR / Pretendard | 24px (1.50rem) | 700 | 1.4 | Section headings (오늘의 선택, 온라인 주간 베스트) | Section titles (오늘의 선택, 온라인 주간 베스트) |
| Sub-section | NotoSansKR | 20px (1.25rem) | 700 | 1.3 | Sub-section heads, DS nav labels | DS nav labels, sub-heads |
| Promo Nav | NotoSansKR | 16px (1.00rem) | 700 | 1.5 | Promo nav links in dark green (상반기결산, 주말특가) | Highlighted promo nav in dark green |
| Body | NotoSansKR / Pretendard | 16px (1.00rem) | 400 | 1.5 | Standard reading text | Standard reading text |
| Body Small | Pretendard | 14px (0.88rem) | 400-500 | 1.5 | Dense UI text, nav, button labels | Dense UI text, nav, button labels |
| Caption | NotoSansKR | 12px (0.75rem) | 400 | 1.5 | Metadata, utility links (로그인, 회원가입) | Utility links, metadata |

### Typography rules

The four rules below are the source's own. Their reasoning — what a weight or a family split is *for* — is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

- **Two fonts, two surfaces**: NotoSansKR owns the portal and design system; Pretendard owns the storefront. Within a surface the typeface is consistent.
- **Weight, not color, signals hierarchy**: 700/900 for headings against 400 body; the neutral ink ladder handles the rest.
- **Dense by design**: a 16px body with 14px UI text supports long, scannable catalog lists — the core reading-room use case.
- **Color reserved for meaning**: green for promos/positive, red for sale/error, indigo for action — body text stays neutral.

### Assets

- Storefront favicon: `https://contents.kyobobook.co.kr/resources/fo/images/common/ink/favicon/favicon_256x256.png` (YAML `logo.type: favicon`).
- Book covers are the primary imagery. Source §8 records that they carry no shadow at any size, consistent with the flat system.

Reading the favicon URL as an identity pointer, reading book covers as first-party catalog content rather than as a substitutable decoration, and reading "no shadow at any size" as consistent with the flat system, are derived editorial implementation inferences from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `tab`, `input`, `card`, `badge`) and a value set; those types are preserved per component. Applicability below is judged by each control's role in this product, never by whether a visual treatment for that state happens to be recorded: where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. `not-applicable` is used only where the control's role makes the state meaningless — a catalog tab or view toggle that selects a grouping and commits no operation in place, or a display element with no action at all — and the reason given is always that semantic one.

One evidence boundary matters here. The source records a `Focus: blue #5055b1` ring on the integrated search. That is a generic focus observation, which is a different evidence type from a `focus-visible` treatment; the observation is kept on the input's own record and no `focus-visible` row in this section carries a treatment value.

Every interactive-kind verdict, every applicability verdict, and the reason given for either — and treating the recorded search ring as a generic focus observation, a different evidence type from a `focus-visible` treatment — is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS). This is not a complete state-coverage claim.

### State record

The source's state contract, preserved with its values and copy:

| State | Treatment |
|---|---|
| **Empty (no search results)** | White canvas, a concise plain-language line stating the situation, and a clear CTA to a meaningful next path (KDS Empty Page rule). No clutter. |
| **Empty (cart / wishlist)** | Neutral grey `#767676` line explaining the empty state plus a path back to browsing. Calm, honest. |
| **Loading (catalog fetch)** | Skeleton rows/cards at final dimensions on `#f2f2f2` surface, 8px radius, flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Input — Focused** | Border shifts to indigo `#5055b1` (KDS Input Focused state). |
| **Input — Error** | Field-level message in negative red `#ec1f2d` describing what is invalid (KDS Error state); never color alone. |
| **Input — Success** | Positive cue in green `#278203` confirming valid format (KDS Success state). |
| **Sale / discount** | Price shown in sale red `#c71e24` with the discount rate; the original price struck through in muted grey. |
| **Disabled** | Reduced-opacity surface with muted `#767676` label; the indigo action fades rather than switching hue. |
| **Positive / in-stock** | Green `#278203` status text or pill, paired with a label so the meaning is not color-only. |

### Buy Now (Primary)

- Role: primary purchase CTA (바로구매 / 구매하기)
- Primitive type: `button` · Kind: interactive
- Domain: storefront
- Background: `#5055b1`
- Text: `#ffffff`
- Radius: 8px
- Padding: 9px 14px
- Height: 38px
- Font: 14px Pretendard weight 500
- Token-set use: `Primary purchase CTA (바로구매/구매하기); KDS Primary button, blue 700 UI base`
- Recorded use: Primary purchase CTA (바로구매 / 구매하기) — KDS Primary button, one per content area
- The 38px height is this control's geometry. The `8px` radius is this control's radius; it is not `tokens.spacing.sm: 8` and not `tokens.rounded.md: 8` written as a spacing step. The `9px 14px` padding is this control's padding; it is not `tokens.spacing.md: 14`. Reading those figures as this control's geometry rather than those YAML steps is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web purchase button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried, see the evidence boundary above |
| disabled | applicable | The control commits a purchase, so it can be gated; the state contract records reduced-opacity with a muted `#767676` label and the indigo action fading rather than switching hue |
| loading | applicable | The control commits a purchase in place, so it can report in-progress; treatment omitted |
| error | applicable | The control commits a purchase, so a failed purchase can be reported on it; treatment omitted |
| success | applicable | The control commits a purchase, so completion can be confirmed on it; treatment omitted |

### Add to Cart (Secondary)

- Role: secondary action (장바구니)
- Primitive type: `button` · Kind: interactive
- Domain: storefront
- Background: `#767676`
- Text: `#ffffff`
- Radius: 8px
- Padding: 9px 14px
- Height: 38px
- Font: 14px Pretendard weight 500
- Token-set use: `Secondary action (장바구니/add-to-cart); KDS Secondary, neutral grey`
- Recorded use: Secondary action (장바구니) — KDS Secondary button, neutral grey to defer to the primary
- The 38px height and `9px 14px` padding are this control's geometry, shared with Buy Now so action rows align. `#767676` is this control's fill and also `tokens.colors.muted`; it is not transferred onto another component as that other component's default. Reading those figures as this paired secondary's geometry, and reading the shared 38px / `9px 14px` as alignment with Buy Now rather than as a spacing step, is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web cart button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; no treatment carried |
| disabled | applicable | The control commits an add-to-cart, so it can be gated; treatment omitted |
| loading | applicable | The control commits an add-to-cart in place, so it can report in-progress; treatment omitted |
| error | applicable | The control commits an add-to-cart, so a failed add can be reported on it; treatment omitted |
| success | applicable | The control commits an add-to-cart, so completion can be confirmed on it; treatment omitted |

### Integrated Search

- Role: header integrated search bar — pill-ended, the portal's most prominent input
- Primitive type: `input` · Kind: interactive
- Domain: portal
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#eaeaea`
- Radius: 24px
- Padding: 13px 16px
- Height: 48px
- Observed focus treatment: the source records a blue `#5055b1` focus ring on this field (KDS Input Focused: border shifts to indigo `#5055b1`). It is recorded here as the generic focus observation it is, and is not carried into the `focus-visible` row.
- Token-set use: `Header integrated search, pill-ended; focus blue #5055b1`
- The 48px height is this control's geometry; it is not `tokens.spacing.xxl: 48`. The `24px` radius is this control's radius; it is not `tokens.spacing.lg: 24` and not `tokens.rounded.lg: 24` written as a spacing step. Reading those figures as this search record is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web field; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; treatment omitted because the recorded ring is a generic focus observation, a different evidence type |
| disabled | applicable | A search field can be gated while its value may not be edited; treatment omitted |
| loading | not-applicable | The field accepts a query; catalog fetch in-progress is the page-level skeleton in the state record, not a treatment on the field |
| error | applicable | Declared: field-level message in negative red `#ec1f2d` describing what is invalid (KDS Error state); never color alone |
| success | applicable | Declared: positive cue in green `#278203` confirming valid format (KDS Success state) |

### Category Tab

- Role: catalog category tabs (국내도서 / 외국도서 / eBook / sam / 핫트랙스)
- Primitive type: `tab` · Kind: interactive
- Domain: storefront
- Text (inactive): `#767676`
- Active (an additional recorded variant, outside the seven canonical states): `#000000` text + 2px bottom border `#5055b1`
- Font: 16px weight 400
- Padding: 0px 14px
- Height: 42px
- Token-set use: `Catalog category tabs (국내도서/외국도서/eBook)`
- Treating this catalog category tab as a grouping-select control, so loading, error, and success are not-applicable on the tab itself, is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable tab; no treatment carried |
| disabled | applicable | A category tab can be unavailable; visual treatment omitted |
| loading | not-applicable | A tab selects a catalog grouping; the tab itself does not enter a loading state |
| error | not-applicable | Tab selection is not a validation or request-failure state on the tab |
| success | not-applicable | Selecting a tab is not an action-outcome confirmation on the tab |

### View Toggle (Segmented)

- Role: List / thumbnail view switch on listing pages
- Primitive type: `tab` · Kind: interactive
- Domain: storefront
- Background: `#ffffff`
- Border: 1px solid `#cccccc`
- Radius: 4px
- Height: 38px
- Active (an additional recorded variant, outside the seven canonical states): border `#5055b1`
- Token-set use: `List / thumbnail view segmented toggle`
- Treating this view toggle as a grouping-select control, so loading, error, and success are not-applicable on the toggle itself, is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web toggle; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable toggle; no treatment carried |
| disabled | applicable | A view mode can be unavailable; visual treatment omitted |
| loading | not-applicable | A toggle selects list versus thumbnail; the toggle itself does not enter a loading state |
| error | not-applicable | View selection is not a validation or request-failure state on the toggle |
| success | not-applicable | Selecting a view is not an action-outcome confirmation on the toggle |

### Product Card

- Role: Book / product card on grid and list views
- Primitive type: `card`
- Domain: storefront
- Background: `#ffffff`
- Border: 1px solid `#eaeaea`
- Radius: 8px
- Token-set use: `Book / product card; flat, hairline-separated`
- Recorded use: Book / product card on grid and list views — flat, hairline-separated, no shadow
- §9-only local recipe, moved here (A3): title 16px Pretendard weight 400 in `#000000`, price in `#c71e24` 12px weight 700
- No interactive kind and no state-applicability map is declared for this card: the source declares it as a container and names no control, action, or state on the card itself. Treating this card as having no interactive-kind evidence for a §4.4 map, so kind and a state-applicability map are omitted rather than invented, is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

### Sale Price badge

- Role: Discount-rate / sale-price label on product listings
- Primitive type: `badge` · Kind: non-interactive
- Domain: storefront
- Text: `#c71e24`
- Radius: 4px
- Font: 12px weight 700
- Token-set use: `Sale / discount-rate price label`
- Kind reason: a badge displays a price status. The source names no action, control, or state on the badge itself, so it declares no state-applicability map. Treating this sale-price badge as a status marker rather than a control is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

### Positive Status badge

- Role: Positive / in-stock status pill
- Primitive type: `badge` · Kind: non-interactive
- Domain: storefront
- Text: `#278203`
- Radius: 4px
- Font: 12px weight 500
- Token-set use: `Positive / in-stock status; green 700 family`
- Kind reason: a badge displays a stock status. The source names no action, control, or state on the badge itself, so it declares no state-applicability map. Treating this positive-status badge as a status marker rather than a control is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS).

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Grid and container

- Wide centered content area with a fixed top header (logo + integrated search + utility links)
- Catalog pages use multi-column product grids with a list/thumbnail toggle
- Sections separate by a `#f2f2f2` / `#f7f7f7` surface shift and `#eaeaea` hairlines rather than elevation
- Promotional and best-seller rails sit as horizontally scannable bands

### Whitespace

- **Content over chrome**: whitespace exists to let dense book metadata breathe, not for dramatic emptiness
- **Flat segmentation**: tinted surfaces and hairlines do the structural work; the system is near-shadowless
- **Scan-first rhythm**: consistent card and row dimensions keep long lists predictable

The Grid contrast that sections separate by surface tint and hairlines rather than elevation, and the three Whitespace readings above, name a purpose for each measurement. They are a derived editorial implementation inference from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS). The measurements themselves — the surface tints, the hairline, the card radius — are recorded values.

### Responsive behavior

Treating source §8 Mobile `<768px` / Tablet `768-1024px` / Desktop `1024-1440px` as source-stated layout rules (including the KDS MO/PC tab-row counts) rather than a captured cross-viewport pass, treating 38px / 48px / 42px as desktop-named control heights rather than proven touch-target tokens from a mobile capture, treating hamburger / tab-row compression / grid collapse as source §8 collapsing strategy rather than observed interaction expansion, and reading book covers that carry no shadow at any size as consistent with the flat system, is a derived editorial implementation inference from the verified surfaces; it is not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS). The breakpoint table, the touch-target sizes, the collapsing rules, and the image-behavior bullets are the source's own responsive contract, stated as intended behavior at each width.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Single column, hamburger nav, search collapses, tab rows limit to 3-4 (KDS MO rule) |
| Tablet | 768-1024px | 2-3 column product grids, condensed header |
| Desktop | 1024-1440px | Full multi-column catalog, persistent search, tab rows 3-6 (KDS PC rule) |

Touch targets:

- Buy Now / cart buttons at 38px height with 9px 14px padding
- Search bar at 48px height — the largest, most tappable input
- Category tabs at 42px height with comfortable horizontal padding

Collapsing strategy:

- Header: full nav + search → hamburger + icon search on mobile
- Tabs: 3-6 per row on PC compress to 3-4 per row on mobile (KDS-documented)
- Product grids: multi-column → 2-up → single column
- Surface tint and hairline separation persist across breakpoints

Image behavior:

- Book covers are the primary imagery and carry no shadow at any size, consistent with the flat system
- Product cards maintain an 8px radius across breakpoints

<!-- design-md:section content-locales -->
## 6. Content & Locales

Kyobo's voice is documented first-hand in the KDS Voice guide: a consistent, single-person voice that speaks in Korean **구어체 (해요체)** — a soft, friendly, uniformly respectful colloquial register — switching to a more formal 문어체 only for policy and disclaimers to convey stability and trust. The KDS states five basic principles for the voice: **간결하고 명확한** (concise and clear), **책임감 있는** (responsible), **공감하는** (empathetic), **존중하는** (respectful), and **동기부여하는** (motivating). The guiding rule **"한 문장에 한 가지 정보만"** (one piece of information per sentence) keeps a dense catalog readable. Naming that English characterization of 해요체, reading 문어체 as used to convey stability and trust, and tying the one-fact-per-sentence rule to catalog density, are derived editorial implementation inferences from the verified surfaces; they are not Kyobo Book Centre-authored or taken from a separately published UI specification, including the published Kyobobook Design System (KDS). The Korean terms, the five principles, the CTA rules, and the Empty Page rule are KDS-authored. The tone table below is the source's own, and its characterizations share the editorial class except where they restate those KDS rules.

| Context | Tone |
|---|---|
| CTA buttons | Action verbs (-하기, -보기); two options separated by a slash "/"; max 12 characters incl. spaces (KDS rule) |
| Product / catalog copy | Concise and clear — one fact per line; official product and service names only |
| Empty states | State the situation plainly and offer a meaningful next path with a clear CTA (KDS Empty Page rule) |
| Policy / disclaimers | Formal 문어체 for stability and trust |
| Promotional rails | Warmer, motivating register — sparks curiosity and repeat visits |

**Tone attributes** (KDS): 위트있는 (witty), 고객을 잘 아는 (knows the customer), 정돈된 (organized), 다양한 (diverse), 지혜로운 (wise), 포용적인 (inclusive), 영감이 가득한 (inspiring), 고급스러운 (premium).

**Voice samples (verbatim from captured surfaces):**

- 바로구매 — storefront primary purchase CTA
- 장바구니 — storefront secondary cart CTA
- 오늘의 선택 — portal section heading
- 상반기결산 / 주말특가 — portal promo nav
- 로그인 / 회원가입 — portal utility links
- 국내도서 / 외국도서 / eBook — storefront category tabs
- "사람은 책을 만들고 책은 사람을 만든다" — company motto
- "사용자 경험을 가치있게, 고객의 삶을 흥미롭게" — KDS mission

**Forbidden register**: abstract CTAs with no clear action, unofficial/ad-hoc product names, CTA labels over 12 characters, messages that don't reveal the next path, and color-only state cues without text.

The captured product surfaces are Korean. This contract establishes no per-locale behavior beyond the KDS Voice register (구어체 해요체 for product voice; 문어체 for policy).

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

These are named values without a resolved treatment, not permissions to invent:

- the exact easing curves behind `ease-enter`, `ease-exit`, and `ease-standard`, and the per-component motion evidence that the Foundations promotion condition requires before any curve is promoted
- the hover and pressed visual treatments of every declared control
- the `focus-visible` treatment of all controls; the recorded search ring is a generic focus observation
- the in-progress, error, and success visual treatments of 바로구매 and 장바구니, which remain applicable by role
