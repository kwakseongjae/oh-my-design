# Hana Bank Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

하나은행 (Hana Bank, KEB Hana Bank) is the flagship retail banking subsidiary of Hana Financial Group (하나금융그룹). This contract covers the two first-party web surfaces the source inspected for tokens: the retail banking homepage at `https://www.kebhana.com` and the Hana Financial Group site at `https://www.hanafn.com`. Every value below stays attached to the surface that established it. The retail bank and the group site are separate evidence domains: a kebhana.com measurement is not a hanafn.com token, and a hanafn.com token is not a kebhana.com value, except where the source itself records both and keeps them distinct. The source's own token note attributes Hana Mint `#00a39f` to the retail bank (hero carousel and nav accent) and `#009178` to the group site. Treating that two-surface split as a hard domain boundary is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification.

The source records a mature, institutional fintech aesthetic grounded in a signature **Hana Mint teal** (`#00a39f`) — a medium-dark, slightly warm teal that anchors every brand touchpoint from the homepage hero carousel to product card accents. This is not a saturated neon mint; it's a measured, financially trustworthy blue-green that reads calm and professional. The overall page character is conservative web banking with Korean financial-institution DNA: clean white canvas (`#ffffff`) with cool-grey surfaces (`#f8f8f8`), dense NotoSans body text at modest sizes, and a teal-on-white pattern used to signal primary actions and brand-tier products. Unlike digital-native Korean fintechs (Toss, Kakao Pay) that adopt bold headlines and single saturated accents, Hana Bank's web presence retains the information-dense, accessibility-conscious layout of a full-service bank serving all age groups — including legacy JSP pages and newer redesigned sections side by side. The typography is dominated by **NotoSans / NotoSans_Regular** at `12–18px` with body text in `rgb(85,85,85)` (`#555555`). The product catalog (推奨상품 surface) reveals the brand's color hierarchy most clearly: product cards with `2px solid #2dc396` teal borders, featured savings/deposits in a deep teal `#008485` block, and muted navy-grey cards (`#465e6f`) for housing finance. Hana Financial Group's investor site (hanafn.com) uses a slightly different corporate green (`#009178`) with Pretendard Variable and pill-shaped CTAs. The hex values, family names, and surface names in this paragraph are recorded. The characterizations built on them — mature, institutional, not a saturated neon mint, measured and financially trustworthy, conservative web banking, Korean financial-institution DNA, information-dense and accessibility-conscious, and the contrast with Toss and Kakao Pay — are a derived editorial implementation inference from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification.

Brand narrative recorded by the source, kept separate from the interface evidence above. 하나은행 traces its origins to 1971 when Korea Investment Finance Corporation (한국투자금융주식회사) was established. In 1991 it became Hana Bank (하나은행), growing through acquisitions to become one of Korea's "Big Four" banks. A landmark 2015 merger with Korea Exchange Bank (KEB, 한국외환은행) created KEB Hana Bank — formally **주식회사 하나은행** — the flagship retail banking subsidiary of Hana Financial Group (하나금융그룹), Korea's second-largest financial holding company by total assets. The bank's positioning centers on three pillars: full-service breadth (savings, loans, foreign exchange, funds, insurance under one roof), digital transformation leadership (the Hana1Q mobile banking platform), and genuine financial partnership ("Together, we grow"). The brand name itself — "하나" meaning "one" or "together" — encodes the mission: one bank, one place for all financial needs, one relationship that grows with you. The years, founding name, 1991 rename, 2015 KEB merger, legal name, holding-company rank, Hana1Q, and "Together, we grow" are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that official-history narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification.

The design language reflects this conservative-yet-dependable identity: a teal that signals neither the flashy fintech startup nor the stuffy legacy institution, but a mature bank that has earned its place in Korean households over fifty years. The deep institutional green family (`#008485` through `#00a39f`) is the visual embodiment of "steady and growing." Reading the teal as conservative-yet-dependable, as neither flashy nor stuffy, and as the visual embodiment of "steady and growing," is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.

- Use the main banking nav on kebhana.com — 조회 / 이체 / 공과금 / 외환 / 금융상품.
- Compare recommended products on the 推奨상품 surface (신용대출, 담보대출, 고단위 플러스, 부자씨 적금).
- Switch first-party destinations from the footer site-switcher (브랜드사이트, 하나네트워크, 하나은행 SNS).
- Act on the group-site CTAs 인재상 알아보기 and 채용공고 바로가기 on hanafn.com.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as fictional archetypes informed by Hana Bank's publicly observable product catalog and Korean banking demographics, not individual people, so their names, ages, cities, and biographies are dropped rather than promoted, and no demographic segment list is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: a full-service bank serving all age groups on the retail site, and institutional / investor audiences on the group site. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are measured; the groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Hana Bank-authored or a separately published UI specification.

- Hana Mint Teal (`#00a39f`) as primary brand color — measured, trustworthy blue-green
- Deep Teal (`#008485`) for featured product cards and brand-weight surfaces
- NotoSans_Regular at 12px body, 18px nav tabs — information-dense, accessibility-first
- White canvas with light grey surfaces (`#f8f8f8`, `#f2f9f9`) — flat, minimal depth
- Product cards with `2px solid #2dc396` teal accent borders and `6px` radius
- Footer buttons with `10px` rounded corners, `48px` height — comfortable Korean web standard
- Hana Financial Group site: Pretendard Variable + pill CTAs (`27px` radius) — more modern layer

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **One relationship, complete service.** Hana Bank is a full-service institution, not a niche fintech. *UI implication:* primary navigation exposes all banking verticals (조회/이체/공과금/외환/금융상품) without gatekeeping or artificial upsell architecture.
2. **Teal signals trust, not hype.** The Hana Mint is not a vivid attention-grabbing accent; it's a measured signal of brand authority. *UI implication:* reserve `#00a39f` and `#008485` for brand-tier moments — product highlights, primary CTAs — not decorative chrome.
3. **Accessible to all generations.** The bank serves everyone from the elderly to digital natives. *UI implication:* 12px body at high contrast (`#555555` on `#ffffff`), large tap targets (70px nav, 48px footer buttons), conservative radius (6px) that doesn't read as overly modern.
4. **Flat and stable.** Financial security is communicated through steadiness, not depth tricks. *UI implication:* no drop shadows; teal fills and hairline borders create hierarchy without visual noise.
5. **Product names are the brand.** The product catalog (정기예금, 적금, 대출) carries the brand promise. *UI implication:* product card typography and teal-fill treatment give each product product-level brand dignity.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification.

- Use Hana Mint (`#00a39f`) as the primary brand accent for CTAs and important highlights
- Use NotoSans at 12px for body text — the accessible Korean standard for all-audience banking
- Apply `2px solid #2dc396` teal borders to product/loan recommendation cards
- Use Deep Teal (`#008485`) for featured product card fills — maximum brand impact
- Use `#555555` as the primary body text color (softer than pure black, high contrast)
- Apply 6px radius to cards and primary buttons — a conservative, trustworthy shape
- Use pill CTAs (27px radius) only on the group-site layer targeting institutional audiences
- Maintain `48px` height for footer touch targets and site-switcher buttons

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification.

- Use pure black (`#000000`) for body text — Hana uses warm grey `#555555` / `#666666`
- Apply drop shadows on cards or nav — this is a flat, border-driven system
- Use the Corporate Group Green (`#009178`) on retail banking surfaces — it's a different brand layer
- Mix NotoSans and Pretendard on the same page section without purposeful context
- Spread the teal accent to decorative elements — it signals brand trust and action priority
- Use sharp 0px corners on interactive elements below the featured product card level
- Over-saturate with teal — the brand's restraint with color is its trustworthiness signal

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The role names below are this contract's naming of the source's recorded uses rather than published Hana Bank role names. Calling `#00a39f` a calm blue-green that signals trust, calling `#008485` the featured-product fill and saying it follows the documented mint-family name, calling `#2dc396` a fresh clickable accent, calling `#009178` the holding-company primary, calling `#f2f9f9` a subtle brand-green undertone, calling Ink a warm dark grey rather than pure black, and keeping that same hex on two token-set paths (`ink` and `dark`), are derived editorial implementation inferences from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification. The hex values and the recorded uses beside them are live-computed.

#### Primary Brand

- **Hana Mint** (`#00a39f`): The signature Hana brand teal. Used as primary accent on hero sections, nav highlights, and brand-tier CTAs. Observed at 6× frequency in homepage bg scan. Token-set path `tokens.colors.primary`.
- **Hana Deep Teal** (`#008485`): A darker teal used for featured product card backgrounds ("고단위 플러스", "부자씨 적금"). Appears with white text for maximum brand-on-card impact. The established `#008485` follows the brand's documented "하나 민트색" family. Token-set path `tokens.colors.primary-deep`.
- **Hana Accent Green** (`#2dc396`): Lighter, more vibrant teal-green used for product card borders (`2px solid #2dc396`) — creating a fresh, clickable accent on white cards. Token-set path `tokens.colors.primary-light`.

#### Corporate & Group

- **Hana Group Green** (`#009178`): Used on hanafn.com (Hana Financial Group) as the corporate primary — a slightly warmer, greener teal distinguishing the holding company surface from the retail bank. Token-set path `tokens.colors.primary-group`.
- **Surface Tint** (`#f2f9f9`): Very light mint tint surface observed on group site cards — a subtle brand-green undertone for the information canvas. Token-set path `tokens.colors.surface-tint`.

#### Neutral & Surface

- **Canvas** (`#ffffff`): Page background, card surfaces, nav background. Token-set path `tokens.colors.canvas`.
- **Surface** (`#f8f8f8`): Standard light grey background for alternating content sections. Token-set path `tokens.colors.surface`.
- **Ink** (`#333333`): Primary dark text and heavy headings — warm dark grey, not pure black. Token-set path `tokens.colors.ink`. Also `tokens.colors.dark` (`#333333`) for the near-dark surface used as Dark Chip for secondary actions.
- **Body** (`#555555`): Most frequent text color (highest frequency in fgFreq scan). Standard body copy and nav labels. Token-set path `tokens.colors.body`.
- **Muted** (`#666666`): Secondary text, metadata, captions. Token-set path `tokens.colors.muted`.
- **Muted Alt** (`#999999`): Very muted text. Token-set path `tokens.colors.muted-alt`. The surface state contract also uses this as disabled text.
- **Hairline** (`#dbdbdb`): Border for footer select buttons, dividers. Token-set path `tokens.colors.hairline`.
- **Housing finance card** (`#465e6f`): Muted navy-grey cards for housing finance on the 推奨상품 surface. Recorded in the source body; not a YAML color key.

#### Error & Contrast

- **On-Primary** (`#ffffff`): Text on teal primary backgrounds. Token-set path `tokens.colors.on-primary`.
- **Dark Chip** (`#333333`): Near-dark surface for secondary actions. Same hex as Ink; kept on the `tokens.colors.dark` path.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them, not rewritten as a grid): `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 20` · `xl: 24` · `xxl: 40` · `section: 48`.

The source names a 4px base unit and the same scale in px: 4px, 8px, 12px, 16px, 20px, 24px, 40px, 48px. Notable recorded paddings: nav tabs at 0px 40px; product cards at 20px; featured product cards at 25px 15px 25px 30px. `base: 16` is a spacing step. It is not a radius step — `tokens.rounded` has no 16.

Keeping the unitless spacing steps as written rather than rewriting them as a grid, reading the spacing base step as a spacing step and not a radius step, and reading 0px 40px nav padding as generous, tappable 112–144px wide tab zones, are derived editorial implementation inferences from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 6` · `md: 10` · `lg: 20` · `full: 9999`.

- Small (`6`): Product cards, primary buttons — conservative, professional
- Medium (`10`): Footer selectors, secondary buttons
- Large (`20`): Pill-adjacent elements on newer UI sections
- Full (`9999` / `9999px`): Group site pill CTAs, future-direction rounding

The group-site pill CTAs also record a component radius of `27px`. That `27px` sits on the component, not on `tokens.rounded.full: 9999`. The teal status badge records a local `4px` radius; that `4px` sits on the badge, not on this scale. Featured product cards and standard surface cards record `0px`. Reading the 6px card/button as conservative and trustworthy, reading 20px as pill-adjacent on newer UI sections and the unitless full step as future-direction rounding, reading 27px as reserved for the group-site layer, and keeping the group-pill, badge, and featured radii on those components rather than merging them into the rounded scale, are derived editorial implementation inferences from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Base page, nav, most surfaces |
| Tint (Level 1) | `#f8f8f8` / `#f2f9f9` background | Section separation, card grouping |
| Hairline (Level 2) | `1px–2px solid #dbdbdb` or `#2dc396` | Card borders, dividers |
| Teal Fill | `#008485` background | Featured product emphasis |

Token-set path `tokens.shadow.card`: `0px 2px 8px rgba(0,0,0,0.08)`.

The retail banking site (kebhana.com) is predominantly flat — shadows were not observed in the computed-style scan across nav, header, buttons, or product cards. Depth is communicated through background tint shifts and the `2px solid #2dc396` teal border accent on product cards. The financial group site is similarly flat, using soft `rgba` overlays only for modal-like layers. The YAML `tokens.shadow.card` value is kept on its own path; it is not merged into the observed flat treatment. Reading that as a flat, border-driven system whose hierarchy comes from tint and teal rather than drop shadows, and keeping the YAML shadow on its own path rather than folding it into the observed flat treatment, are derived editorial implementation inferences from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, and shadow on kebhana.com and hanafn.com. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this motion section. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 100ms | Tab switch, button press feedback |
| `motion-standard` | 200ms | Card hover, dropdown reveal, modal entry |
| `motion-slow` | 300ms | Page-level transition, hero carousel slide |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Hana Bank evidence, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Content arriving — cards, panels |
| `ease-exit` | Dismissals, collapsing menus |
| `ease-standard` | Standard two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is institutional-conservative — it confirms user action without distracting from the financial task.
- The homepage hero runs a carousel at a gentle `motion-slow` pace.
- Modals and bottom sheets enter with `ease-enter` for trustworthy arrival.
- No spring physics, no bounce — a bank interface signals stability in every motion.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant while the interface remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The retail homepage and the group site state the bank and the holding-company relationship. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification. |
| Live computed surface-use | kebhana.com computes nav, body, buttons, and headings as NotoSans / NotoSans_Regular. hanafn.com computes body and CTAs as Pretendard Variable. |
| Official distributed asset | No Hana-exclusive distributed type family was verified. |
| Declared-only | The group-site fallback stack is declared: `"Pretendard Variable", "Pretendard JP Variable", -apple-system, "system-ui", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif`. Those fallback members are not the brand face. Classing those fallback members as not the brand face is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification. |
| License | This record does not establish a Hana Bank font-license notice for NotoSans or Pretendard. Pretendard is an upstream face, not a Hana-owned brand asset; that classification is a derived editorial implementation inference from the verified surfaces, and it is not Hana Bank-authored or a separately published UI specification. |
| Outside these captures | Typography on surfaces beyond the two token-inspected pages sits outside this contract. Reading that typography as outside this contract is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification. |

### Family

- **Primary / retail:** `NotoSans` — Token-set path `tokens.typography.family.primary`.
- **Body / retail:** `NotoSans_Regular` — used for all nav labels, body text, buttons, and headings on www.kebhana.com. Token-set path `tokens.typography.family.body`.
- **Group:** `Pretendard Variable` — used on www.hanafn.com. Token-set path `tokens.typography.family.group`.

A fallback member of a stack is never presented as the brand face. Do not replace NotoSans or Pretendard Variable with a system substitute. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification. Do not mix NotoSans and Pretendard on the same page section without purposeful context — that last rule is the source Don't list.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---|---|
| Page H1 / Logo | NotoSans | 24px | 700 | — | Page headings, nav logo text |
| Main Nav Tab | NotoSans | 18px | 400 | 1.56 | Main nav tab labels (조회/이체/공과금/외환/금융상품) |
| Body / Labels | NotoSans | 12px | 400 | 1.5 | Standard body and label text |
| Footer / Legal | NotoSans | 12px | 400 | — | Footer navigation and legal text |
| Group Body | Pretendard Variable | 14px | 400 | 1.4 (`19.6px`) | Hana Financial Group site body text |
| Group CTA | Pretendard Variable | 16px | 700 | — | Group site CTA buttons |
| Group Secondary Button | Pretendard Variable | 14px | 600 | — | 40px height, 20px radius |

Line heights are kept in the form the source verified them: unitless ratios `1.56`, `1.5`, and `1.4`. The group-body row also keeps the source's own `line-height: 19.6px` (1.4) spelling. Token-set paths: `tokens.typography.heading` · `nav` · `body` · `footer` · `group-body` · `group-cta`. The Group Secondary Button row is from the source's hanafn.com hierarchy table; it is not a YAML typography key.

### Typography rules

The source states these three as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification.

- **Conservative sizing for legibility**: Body at 12px reflects the bank's commitment to serving all age groups with high-contrast, accessible text.
- **NotoSans as the accessible Korean anchor**: Comprehensive hangul coverage without rendering quirks on older browsers — a deliberate legacy-friendly choice.
- **Pretendard for the newer layer**: The financial group site signals modernity with Pretendard, previewing the direction of future Hana Bank digital redesigns.

### Assets

- The catalog's logo entry for this reference is a Google favicon-service URL rather than a Hana-hosted file. The source's own sibling excludes that service from the KR brand-owned count, so the URL is recorded in the provenance ledger and is not presented here as a Hana brand asset. Classing that entry as a third-party favicon service is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification.
- Product photography and product names on the 推奨상품 surface are first-party catalog content; do not replace them with invented brand-color decoration. Treating those product cards as first-party catalog content, and the instruction not to replace them with invented decoration, are a derived editorial implementation inference from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `card`, `badge`, `tab`) and a value set. Those types are preserved per component. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. The source's live inspection recorded computed default styling, and the state treatments in the State record below are stated at system level rather than measured per control. Every kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Primary Teal CTA

- Role: Brand-tier primary actions and highlighted CTAs
- Primitive type: `button` · Kind: interactive
- Background: `#00a39f`
- Text: `#ffffff`
- Radius: 6px
- Font: 12px / 400 NotoSans
- Token-set font record: `12px / 400 NotoSans`
- Token-set use: Primary CTA and brand-tinted action buttons

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The surface contract sets `#999999` text and desaturates teal fills to `#c8d4d4` |
| loading | applicable | The source names this a primary action button; the surface state contract records product-list and FX-rate loading at system level. Visual treatment at this control is omitted. |
| error | applicable | The control can commit a banking action; the surface state contract records server-error and form-validation treatments at system level. Visual treatment at this control is omitted. |
| success | applicable | The control can commit a banking action; the surface state contract records transfer-complete at system level. Visual treatment at this control is omitted. |

### Dark Secondary Pill

- Role: Dark secondary pill button (하나소비자세상 pattern)
- Primitive type: `button` · Kind: interactive
- Background: `#333333`
- Text: `#ffffff`
- Token-set radius: `20px`
- Token-set padding: `0px 24px`
- Token-set font record: `14px / 400 NotoSans`
- Body-observed radius: `10px`
- Body-observed height: `48px`
- Body-observed use: Footer brand-site link, secondary navigation launchers
- Token-set use: Dark secondary pill button (하나소비자세상 pattern)

The YAML radius `20px` and the body radius `10px` are both kept. Neither value was chosen over the other as a new token.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; the surface contract uses `#999999` text |
| loading | not-applicable | This control launches a brand-site or secondary-navigation destination; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Outline Footer Select

- Role: Footer select switcher (브랜드사이트/하나네트워크)
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#555555`
- Border: 1px solid `#dbdbdb`
- Token-set border record: `1px solid #dbdbdb`
- Radius: 10px
- Font: 12px / 400 NotoSans
- Token-set font record: `12px / 400 NotoSans`
- Body-observed height: `48px`
- Body-observed padding: `0px 16px`
- Use: Footer site-switcher buttons (브랜드사이트, 하나네트워크, 하나은행 SNS)
- Token-set use: Footer select switcher (브랜드사이트/하나네트워크)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination switcher whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control switches the reader to a named destination; it does not commit an in-page operation whose in-progress state the button reports. |
| error | not-applicable | Destination switcher; the destination, not this button, reports failure. |
| success | not-applicable | Same role reason: reaching 브랜드사이트, 하나네트워크, or 하나은행 SNS is not an operation this button reports as success. |

### Group Site White Pill

- Role: Group site white ghost pill CTA (인재상 알아보기)
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#222222`
- Radius: 27px
- Padding: 0px 48px 0px 24px
- Font: 16px / 700 Pretendard
- Token-set font record: `16px / 700 Pretendard`
- Body-observed height: `54px`
- Token-set use: Group site white ghost pill CTA (인재상 알아보기)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control takes the reader to 인재상 알아보기; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; it does not commit an operation whose outcome it could report. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Group Site Dark Pill

- Role: Group site dark pill CTA (채용공고 바로가기)
- Primitive type: `button` · Kind: interactive
- Background: `#292f35`
- Text: `#ffffff`
- Radius: 27px
- Padding: 0px 48px 0px 24px
- Font: 16px / 700 Pretendard
- Token-set font record: `16px / 700 Pretendard`
- Body-observed height: `54px`
- Token-set use: Group site dark pill CTA (채용공고 바로가기)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control takes the reader to 채용공고 바로가기; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; it does not commit an operation whose outcome it could report. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Product Card (Teal Border)

- Role: Product/loan recommendation card with teal accent border
- Primitive type: `card`
- Background: `#ffffff`
- Text: `#555555`
- Border: 2px solid `#2dc396`
- Radius: 6px
- Padding: 20px
- Body-observed height: `234px`
- Use: Loan/mortgage product recommendation cards (신용대출, 담보대출)
- Token-set use: Product/loan recommendation card with teal accent border

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Featured Product Card (Teal Fill)

- Role: Featured product card (고단위 플러스, 부자씨 적금) — teal brand fill
- Primitive type: `card`
- Background: `#008485`
- Text: `#ffffff`
- Radius: 0px
- Padding: 25px 15px 25px 30px
- Body-observed height: `245px`
- Token-set use: Featured product card (고단위 플러스, 부자씨 적금) — teal brand fill

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Standard Surface Card

- Role: Standard light grey card surface for product listings
- Primitive type: `card`
- Background: `#f8f8f8`
- Text: `#555555`
- Radius: 0px
- Body-observed padding: `20px`
- Token-set use: Standard light grey card surface for product listings

The source supplies no interaction evidence for this surface, so kind and a state-applicability map are both withheld.

### Teal Status Badge

- Role: Category or status tag in Hana Mint teal
- Primitive type: `badge`
- Kind: non-interactive — a category or status label, not a control
- Background: `#00a39f`
- Text: `#ffffff`
- Radius: 4px
- Body-observed font: 12px NotoSans weight 400
- Token-set use: Category or status tag in Hana Mint teal

### Main Banking Tab

- Role: Main banking nav tabs (조회/이체/공과금/외환/금융상품)
- Primitive type: `tab` · Kind: interactive
- Background: `#ffffff`
- Text: `#000000`
- Font: 18px / 400 NotoSans
- Token-set font record: `18px / 400 NotoSans`
- Padding: 0px 40px
- Height: 70px
- Token-set active: text #000000 on #ffffff, 70px height
- Selected tab (surface record): Active banking tab: bold `#000000` text with no additional border — implicit via content visibility
- Token-set use: Main banking nav tabs (조회/이체/공과금/외환/금융상품)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | Destination tab; the destination, not the item, reports failure. |
| success | not-applicable | Same role reason: reaching 조회, 이체, 공과금, 외환, or 금융상품 is not an operation with a success result. |

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Hana Bank-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no products found)** | White canvas. Body grey `#555555` single message with calm tone explaining the filter mismatch. One teal `#00a39f` link to reset criteria. |
| **Empty (account — no transactions)** | Muted `#666666` text explaining no recent transactions. Teal accent link to first action (이체하기). |
| **Loading (product list fetch)** | Skeleton card rows on `#f8f8f8` surface at final card height (234px). Consistent with flat system — no shimmer glow. |
| **Loading (FX rate lookup)** | Inline spinner inside the rate cell; surrounding content stays visible. |
| **Error (server error)** | "페이지 요청 오류" inline state with `#1, 128, 133`-tinted border, plain Korean explanation and retry link. |
| **Error (form validation)** | Field-level red underline (or `rgb(255,0,0)` observed in page). Plain-language message: what value is expected. |
| **Success (transfer complete)** | Brief confirmation message in body text; next-step prompt (print/share receipt). Calm, no excessive celebration. |
| **Skeleton** | `#f8f8f8` blocks at final dimensions, no radius variation from card (6px). |
| **Disabled** | `#999999` text; teal fills desaturate to `#c8d4d4` variant. |
| **Selected tab** | Active banking tab: bold `#000000` text with no additional border — implicit via content visibility. |

These rows describe retail-banking product, account, FX, and form treatments the source wrote at system level. They are not attached as visual treatments to the destination controls above. That non-attachment reading is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Traditional multi-column Korean banking layout: full-width header, tabbed main nav, content below
- Product recommendation grid: 4-up cards (recommended) with consistent 234–245px card height
- Featured product pairs: 2-up side-by-side panels with prominent brand-color fills
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 20 / 24 / 40 / 48
- Shape restated from `tokens.rounded`: cards/primary 6 · footer selectors 10 · newer pill-adjacent 20 · group pills 27 / `full: 9999`

Reading scale as an accessibility-density balance denser than digital-native fintechs, reading section separation as color shifts (`#f8f8f8` vs `#ffffff`) rather than drop shadows, and reading `#00a39f` / `#008485` as a spatial teal anchor, are derived editorial implementation inferences from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, and the source's reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Hana Bank-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <768px | Stacked layout, collapsed nav, simplified banking shortcuts |
| Tablet | 768–1024px | Partial grid, 2-up product cards |
| Desktop | 1024px+ | Full-width header, 4–5 nav tabs, multi-column product grid |

Touch targets the source records: banking nav tabs 70px height at 1440px; footer site-switcher 48px height; product card links 234–245px full-card hit area.

Collapsing strategy, as the source states it:

- Main nav tabs collapse to a hamburger or collapsed icon menu on mobile
- Product cards reflow from 4-up to 2-up to 1-up
- Featured product pair stacks vertically
- Teal fills maintain full-width impact at all breakpoints

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes 하나은행's voice as trustworthy, approachable, and nationally rooted — the voice of Korea's largest financial holding group presented through a retail banking lens that serves students opening their first accounts, middle-class families managing mortgages, and business clients handling foreign exchange. The brand positioning is grounded in the phrase "the bank that is one" (하나 = one), emphasizing unity, reliability, and full-service breadth. That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Hana Bank-authored or a separately published UI specification. The Korean lines themselves are live homepage copy.

| Context | Tone |
|---|---|
| Product headlines | Clear, benefit-first. "하나의 정기예금" — simple noun-form product branding. |
| Nav labels | Functional, minimal. "조회 / 이체 / 공과금 / 외환 / 금융상품" — plain category labels. |
| CTA labels | Inviting, non-urgent. "자세히보기" — calm "view details" rather than aggressive "apply now". |
| Financial product names | Conservative, compound. "고단위 플러스", "부자씨 적금", "급여하나 월복리적금". |
| Trust / certification | Credential-forward. ISMS, ISO marks visible in footer. |

**Voice samples (from live homepage):**

- "조회 / 이체 / 공과금 / 외환 / 금융상품" — main nav labels.
- "하나의 정기예금" — flagship deposit product name.
- "급여하나 월복리 적금" — flagship savings product with compound-rate promise.

Further published strings the source records on the inspected surfaces, kept byte-exact:

- 조회 / 이체 / 공과금 / 외환 / 금융상품
- 브랜드사이트, 하나네트워크, 하나은행 SNS
- 인재상 알아보기, 채용공고 바로가기
- 고단위 플러스, 부자씨 적금
- 신용대출, 담보대출
- 하나의 정기예금
- 급여하나 월복리적금
- 급여하나 월복리 적금
- 자세히보기
- 이체하기
- 페이지 요청 오류
- 하나소비자세상
- 정기예금, 적금, 대출
- "Together, we grow"
- 하나 민트색

**Forbidden register**: alarming credit-risk language, hard-sell urgency, complex jargon left unexplained, overly casual slang inconsistent with institutional trust.

Reproduce the Korean strings above byte-exact rather than translating or re-casing them. An English gloss may sit beside a Korean line; it never replaces the line. That byte-exact / gloss-beside rule is a derived editorial implementation inference from the verified surfaces; it is not Hana Bank-authored or a separately published UI specification.

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

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values; differences between kebhana.com and hanafn.com are two brand surfaces.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Hana Bank evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Dark Secondary Pill radius.** The token set records `20px`; the body records `10px` and `48px` height. Both figures are kept. Neither was chosen as a replacement.
- **Group site and retail site stay separate.** `#009178` and Pretendard Variable belong to hanafn.com; `#00a39f` and NotoSans belong to kebhana.com.
