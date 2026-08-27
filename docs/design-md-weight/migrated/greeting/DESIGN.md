# Greeting Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Greeting (그리팅) is Korea's self-described #1 recruitment-management SaaS — an applicant-tracking system (ATS) built by the operator 두들린 (Doodlin). This contract covers the two first-party marketing surfaces the source inspected for tokens: the homepage at `https://www.greetinghr.com` and the pricing surface at `https://www.greetinghr.com/pricing`. The official blog at `https://blog.greetinghr.com` and the operator site at `https://www.doodlin.co.kr` are named brand-owned sources; they confirm operator relationship and published titles, and they do not supply the interface tokens below. Values stay attached to the surface that established them. This contract does not treat those marketing pages as a proxy for the ATS product UI the homepage sells. Keeping values attached to the surface that established them, treating the blog and operator pages as named sources that do not supply interface tokens, and the refusal to treat those marketing pages as a proxy for the ATS product UI, are derived editorial implementation inferences from the verified surfaces; they are not Greeting-authored or a separately published UI specification.

The captured marketing layer is a white and near-white canvas (`#ffffff`, `#fcfcfc`, `#fafafa`) segmented into full-width bands. Text rides a zinc ladder — headings `#27272a`, body `#3f3f46`, supporting copy `#71717a` to `#a1a1aa`. The single saturated accent is azure `#1890ff`, recorded on the hero accent word "채용 성공" and the header 도입 문의 CTA. Primary persuasion buttons are near-black (`#0f0f0f` / `#171717`). Depth is flat: `box-shadow: none` across nav, hero, and feature cards; separation uses background shifts and `#e4e4e7` hairlines. The proof and pricing band flips to deep navy `#001946` and carries the Poppins "10,000+" numeral and 30px-radius plan cards. Reading that layer as a confident, enterprise-grade B2B product that has shed the heaviness of legacy HR software, reading the zinc ladder as a clean, modern, slightly technical temperature rather than warm or playful, reading the one blue as "the action / the promise," reading the layout as engineered and trustworthy, reading corporate restraint in the 4px-radius rectangles and the held-back azure, and reading the white-to-navy band rhythm as the signature of the page, are derived editorial implementation inferences from the verified surfaces; they are not Greeting-authored or a separately published UI specification.

Brand narrative recorded by the source, kept separate from the interface evidence above. Greeting is the flagship product of 두들린 (Doodlin), a Korean HR-tech company building software to fix a structural pain in Korean hiring: recruiting workflows scattered across email, spreadsheets, and disconnected tools, with no system of record from sourcing through selection. Greeting consolidates that workflow into a single ATS — "모집부터 선발까지, 수시부터 대규모 채용까지 그리팅 하나로" (from sourcing to selection, from rolling to large-scale hiring, all in one Greeting). The product has grown into what the company describes as Korea's #1 recruitment-management solution, with 10,000+ companies using it (homepage footnote "*2026년 1월 그리팅 이용 고객사"). Its positioning thesis — "채용 관리를 넘어 채용 성공으로" — reframes the category from passive applicant-tracking into active recruiting outcomes: not just managing who applied, but helping teams source proactively (다이렉트 소싱), build talent pools (인재풀 구축), and run structured, data-driven evaluation. Official history and the live homepage provide that narrative context; they do not by themselves supply interface tokens. Classifying that official-history narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification.

What the source says Greeting refuses, visible in its design: the heavy, dated chrome of enterprise HR legacy software (no shadow-stacked panels, no institutional gradients), and the gimmicky over-coloring of consumer apps. What it embraces: a clean white product canvas, a cool zinc type ladder, a single disciplined azure accent, and a confident navy "by the numbers" band — an enterprise tool that signals competence and trust without intimidation. That refusal/embrace reading is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

- Read the homepage promise "채용 관리를 넘어 채용 성공으로" and the ATS workflow the product consolidates.
- Inquire about adoption from the header 도입 문의 and the dark CTA 도입 문의하기.
- Review pricing on `/pricing` and request a quote with 견적 문의하기.
- Start a trial or take a brief via 무료 체험하기 and 서비스 소개서 다운로드.

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three named figures as fictional archetypes informed by publicly observable Greeting user segments (Korean HR/talent-acquisition teams), not individual people, so their names, ages, cities, and biographies are dropped rather than promoted, and no demographic segment list is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: Korean HR practitioners and talent-acquisition teams. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification.

### Distinctive traits

- Pretendard SemiBold for every headline and label; Pretendard Regular for body — weight and tracking carry hierarchy
- Single azure accent (`#1890ff`) reserved for the hero accent word "채용 성공" and the header 도입 문의 CTA
- Near-black CTAs (`#0f0f0f` / `#171717`) for primary persuasion buttons, azure held back
- Cool zinc neutral ladder (`#27272a` → `#3f3f46` → `#71717a` → `#a1a1aa`) for text hierarchy
- Tight 4px-radius rectangular buttons; 16px product cards; 30px pricing cards; 50px eyebrow pills
- Flat depth: `box-shadow: none`; separation by background tint and `#e4e4e7` hairlines
- Light-to-dark band rhythm — white product story → deep navy (`#001946`) proof/pricing band
- Poppins for the oversized billboard stat numeral (10,000+) at ~175px
- Negative tracking that scales with size (-0.6px at 60px down to -0.16px at 16px)

These nine traits, and the readings carried inside them — one reserved azure, held-back dark persuasion, zinc temperature, corporate-not-pill geometry, and the white-to-navy crescendo — are a derived editorial implementation inference from the verified surfaces; they are not Greeting-authored or a separately published UI specification. Each names the values it rests on.

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Greeting-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Outcome over administration.** The product is sold as 채용 성공 (recruitment success), not just management. *UI implication:* lead with outcome-framed headlines and proof metrics; keep feature lists secondary to the promise.
2. **Proof over hype.** Authority comes from "국내 1위" and "10,000+", not exclamation marks. *UI implication:* give proof numbers billboard scale (Poppins 175px on the navy band); keep copy calm and declarative.
3. **One disciplined accent.** Azure (`#1890ff`) means "the action / the promise." *UI implication:* reserve azure for the hero accent word and the inquiry CTA; use near-black for other CTAs so the blue stays meaningful.
4. **Flat and clean.** Modern enterprise clarity beats decorative depth. *UI implication:* no shadows; separate with tint and hairlines; keep the page fast and scannable.
5. **Decode the workflow.** Recruiting is broken into clearly named, approachable steps. *UI implication:* label every stage plainly (모집, 다이렉트 소싱, 인재풀, 평가, 데이터 분석) so the product feels comprehensible.

### Application rules

The source states these ten as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Greeting-authored or a separately published UI specification.

- Use Pretendard SemiBold (weight 600) for every headline and label
- Use Pretendard Regular (400) for body and dense UI text
- Reserve azure (`#1890ff`) for the hero accent word and the header inquiry CTA — keep it the single colored action
- Use near-black (`#0f0f0f` / `#171717`) for primary persuasion CTAs
- Keep text on the cool zinc ladder (`#27272a` → `#71717a` → `#a1a1aa`)
- Use tight 4px-radius rectangular buttons — corporate, not pill-y
- Separate sections with background tint (`#fafafa`) and `#e4e4e7` hairlines, not shadows
- Flip to the deep navy band (`#001946`) for the proof/pricing crescendo
- Apply tight negative tracking that scales with size (-0.6px at 60px)
- Use Poppins for oversized billboard statistic numerals

### Avoid

The source states these eight as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Greeting-authored or a separately published UI specification.

- Do not use drop shadows for elevation — Greeting is a flat, shadow-free system
- Do not spread azure across many elements — it dilutes the single-action signal
- Do not use pill-shaped (50px) radius on buttons — buttons are tight 4px rectangles
- Do not use warm or playful colors — the palette is cool zinc + azure
- Do not set headlines in a light weight — display is always SemiBold (600)
- Do not use pure black (`#000000`) for body text — text rides the zinc ladder
- Do not use positive letter-spacing at display sizes — Greeting tracks tight
- Do not use Pretendard for the giant proof numerals — those are Poppins

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

The role names below are this contract's naming of the source's recorded uses rather than published Greeting role names. Calling `#1890ff` the single action/promise color, calling `#0f0f0f` / `#171717` the held-back persuasion pair, calling the zinc set a text ladder, calling `#001946` the dramatic proof-band surface, and calling `#e4e4e7` the primary separation device of a shadowless system, are derived editorial implementation inferences from the verified surfaces; they are not Greeting-authored or a separately published UI specification. The hex values and the recorded uses beside them are live-computed.

#### Primary

- **Greeting Azure** (`#1890ff`): Primary brand accent and CTA color. The saturated blue on the hero accent word ("채용 성공") and the header 도입 문의 inquiry button — the system's single "action / promise" color. Token-set use path `tokens.colors.primary`.
- **Azure Hover** (`#2c93f2`): Slightly lighter azure observed on interactive/hover blue surfaces. Token-set use path `tokens.colors.primary-hover`.
- **Deep Azure** (`#0a58a1`): A darker blue used for stronger blue accents and deep links. Token-set use path `tokens.colors.primary-deep`.

#### Ink & CTA

- **Ink Black** (`#0f0f0f`): Near-black background for the primary dark CTA buttons (도입 문의하기, 견적 문의하기) and maximum-contrast labels. Token-set use path `tokens.colors.ink`.
- **Ink Soft** (`#171717`): Soft near-black for primary headings on dark CTAs and strong labels. Token-set use path `tokens.colors.ink-soft`.
- **Deep Navy** (`#001946`): The dramatic dark band background — carries the giant white stat numeral and the pricing plan cards. Token-set use path `tokens.colors.navy`.

#### Text hierarchy (Zinc ladder)

- **Heading** (`#27272a`): Primary feature-card and product headings. Token-set use path `tokens.colors.heading`.
- **Body** (`#3f3f46`): Secondary body copy and small headings. Token-set use path `tokens.colors.body`.
- **Muted** (`#71717a`): Tertiary text, captions, metadata. Token-set use path `tokens.colors.muted`.
- **Faint** (`#a1a1aa`): Lowest-emphasis labels, footnotes (e.g. "*2026년 1월 그리팅 이용 고객사"). Token-set use path `tokens.colors.faint`.
- **Disabled** (`#d4d4d8`): Disabled text, lowest contrast. Token-set use path `tokens.colors.disabled`.

#### Neutral & Surface

- **Pure White** (`#ffffff`): Page background, cards, text on dark/azure. Token-set use path `tokens.colors.canvas`. Also `tokens.colors.on-primary` (`#ffffff`) for text on azure.
- **Surface** (`#fcfcfc`): Near-white nav/button surface. Token-set use path `tokens.colors.surface`.
- **Surface Alt** (`#fafafa`): Warm-neutral product card background. Token-set use path `tokens.colors.surface-alt`.
- **Surface Zinc** (`#f4f4f5`): Cool light zinc list / menu surface. Token-set use path `tokens.colors.surface-zinc`.
- **Hairline** (`#e4e4e7`): Thin borders, dividers, card outlines — the primary separation device in the shadowless system. Token-set use path `tokens.colors.hairline`.
- **Tint Blue** (`#f2f9ff`): Faint blue wash for highlighted blue zones. Token-set use path `tokens.colors.tint-blue`.
- **Tint Blue Alt** (`#e4f0fc`): Slightly stronger blue tint for emphasis blocks. Token-set use path `tokens.colors.tint-blue-alt`.

#### Semantic

- **Success Green** (`#4ba63d`): Positive/success accent observed on checkmarks and confirmation marks. Token-set use path `tokens.colors.success`.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them, not rewritten as a grid): `xs: 4` · `sm: 8` · `base: 12` · `md: 16` · `lg: 20` · `xl: 25` · `xxl: 48` · `section: 80`.

The source names a ~4px base unit and the same scale in px: 4px, 8px, 12px, 16px, 20px, 25px, 48px, 80px. Notable recorded paddings: CTA buttons at 14px×25px (50px tall); nav links at 18px×12px. `md: 16` is a spacing step. It is not the shape step `tokens.rounded.lg: 16`.

Reading generous vertical rhythm (≈80px) between bands as breathing room over density is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 4` · `md: 8` · `lg: 16` · `xl: 30` · `pill: 50`.

- Small (`4`): buttons — corporate, tight rectangles
- Medium (`8`): zinc list/menu surfaces, eyebrow tag chips
- Large (`16`): product feature cards
- XL (`30`): pricing plan cards
- Pill (`50`): eyebrow status pills

Reading the 4px button as corporate rather than pill-shaped, and reading 50px as reserved for eyebrow pills, are derived editorial implementation inferences from the verified surfaces; they are not Greeting-authored or a separately published UI specification. The five values themselves are live-computed. `lg: 16` is a radius step. It is not the spacing step `tokens.spacing.md: 16`.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, nav, hero, most feature cards |
| Tint (Level 1) | `#fafafa` / `#f4f4f5` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #e4e4e7` border | White card/button outlines, dividers |
| Inset rim (Level 3) | `rgba(255,255,255,0.12) 0px 0px 2px 0px inset` | Pricing plan cards on the dark navy band |

Token-set path `tokens.shadow.none`: `none`. Token-set path `tokens.shadow.card-inset`: `rgba(255,255,255,0.12) 0px 0px 2px 0px inset`.

Live inspection found `box-shadow: none` across the nav, hero, and feature cards. Depth and grouping are communicated through flat background tints (`#fafafa`, `#f4f4f5`) and thin `#e4e4e7` hairlines rather than drop shadows. The only elevation cue is a faint white inset rim on the pricing cards, which separates them from the deep navy `#001946` band without a heavy outer shadow. Reading that as a near-shadowless system that keeps the enterprise UI feeling clean, fast, and modern is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, and shadow on the homepage and `/pricing`. The motion contract below sits outside that attribution: the source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this motion section. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Greeting-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, menu |
| `motion-slow` | 320ms | Page-level transitions, band reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Greeting evidence, so the curves are omitted here and only the roles and their uses are kept:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, menus, panels |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.

Motion rules, as the source states them:

- Motion is functional and quiet — consistent with the flat, clean enterprise aesthetic.
- Buttons respond to hover with a subtle background shift (azure `#1890ff` → `#2c93f2`, dark `#0f0f0f` → `#171717`).
- Feature cards and bands fade-in from below at `motion-standard` / `ease-enter`.
- No bounce or spring — an enterprise recruiting product signals steadiness, not playfulness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The homepage and operator site state the product and the operator relationship. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification. |
| Live computed surface-use | Homepage and `/pricing` compute headlines, nav, labels, and buttons as Pretendard SemiBold at weight 600, and body as Pretendard Regular at weight 400. The oversized stat numeral computes Poppins. |
| Official distributed asset | No Greeting-exclusive distributed type family was verified. |
| Declared-only | No additional declared-only family was recorded on the inspected surfaces. |
| License | This record does not establish a Greeting font-license notice for Pretendard or Poppins. Pretendard is an upstream face, not a Greeting-owned brand asset; that classification is a derived editorial implementation inference from the verified surfaces, and it is not Greeting-authored or a separately published UI specification. |
| Outside these captures | Typography on the ATS product UI the homepage sells, and on any surface beyond the two token-inspected pages, sits outside this contract. |

### Family

- **Display / UI:** `Pretendard SemiBold` — used for all headlines, nav, labels, and button text at weight 600. Token-set path `tokens.typography.family.display`.
- **Body:** `Pretendard Regular` — body copy and dense UI text at weight 400. Token-set path `tokens.typography.family.body`.
- **Numeral:** `Poppins` — reserved for the oversized billboard statistic numeral (10,000+). Token-set path `tokens.typography.family.numeral`.

A fallback member of a stack is never presented as the brand face. Do not replace Pretendard or Poppins with a system substitute. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification. Do not put Pretendard on the giant proof numerals — that last rule is the source Don't list.

### Type roles

| Role | Font | Size | Weight | Line height | Tracking | Token-set use |
|---|---|---:|---:|---:|---:|---|
| Hero Accent | Pretendard SemiBold | 60px | 600 | 1.20 (72px) | -0.6px | Hero accent word 채용 성공, Pretendard SemiBold, azure |
| Display | Pretendard SemiBold | 48px | 600 | 1.30 (62.4px) | -0.48px | Primary section headline, Pretendard SemiBold |
| Section | Pretendard SemiBold | 36px | 600 | 1.20 (43.2px) | -0.36px | Band headline, Pretendard SemiBold |
| Feature | Pretendard SemiBold | 28px | 600 | 1.40 (39.2px) | -0.56px | Feature card heading, Pretendard SemiBold |
| Quote | Pretendard SemiBold | 24px | 600 | 1.50 (36px) | -0.24px | Testimonial quote, Pretendard SemiBold |
| Card Title | Pretendard SemiBold | 20px | 600 | 1.50 (30px) | -0.4px | Product card title, Pretendard SemiBold |
| Label / Eyebrow | Pretendard SemiBold | 16px | 600 | 1.00 (16px) | -0.16px | Eyebrow / badge H1-H2 labels, Pretendard SemiBold |
| Big Numeral | Poppins | ~175px | 400 | 1.00 | -8.74px | Big stat numeral 10,000+, Poppins |

Line heights are kept in the form the source verified them: unitless ratios, with the px equivalents the source itself spelled out shown beside them. Token-set paths: `tokens.typography.hero-accent` · `display` · `section` · `feature` · `quote` · `card-title` · `label` · `numeral`.

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification.

- **One family, two weights:** Pretendard SemiBold (600) carries every headline and label; Pretendard Regular (400) carries body. The weight contrast is the primary hierarchy signal.
- **Tracking compresses with size:** -0.6px at 60px, -0.48px at 48px, -0.36px at 36px, narrowing toward -0.16px at 16px. Display compresses; small text relaxes. Feature tracking is -0.56px at 28px; quote -0.24px at 24px; card title -0.4px at 20px.
- **Latin numerals get Poppins:** big proof statistics switch to Poppins for a confident billboard read, while Korean copy stays Pretendard.
- **Tight, technical, calm:** negative tracking + cool zinc color give the type an engineered, enterprise-trustworthy feel rather than a warm consumer one.

### Assets

- Product screenshots on the marketing surface carry no shadow at any size, consistent with the flat system. Cards maintain 16px radius across the breakpoints the source declares. Treating those screenshots as first-party product imagery, and the instruction not to replace them with invented brand-color decoration, are a derived editorial implementation inference from the verified surfaces; they are not Greeting-authored or a separately published UI specification.
- The catalog's logo entry for this reference is a Google favicon-service URL rather than a Greeting-hosted file. The source's own sibling excludes that service from the KR brand-owned count, so the URL is recorded in the provenance ledger and is not presented here as a Greeting brand asset.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `badge`, `card`, `tab`) and a value set. Those types are preserved per component. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. The source's live inspection recorded computed default styling, and the state treatments in the State record below are stated at system level rather than measured per control. Every kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification. This is not a claim that state coverage is finished.

### Azure Inquiry CTA

- Role: Header 도입 문의 azure call-to-action — the system's single colored action
- Primitive type: `button` · Kind: interactive
- Background: `#1890ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 5px 8px 5px 12px
- Height: 36px
- Font: 12px / 600 Pretendard
- Token-set use: Header 도입 문의 azure CTA
- Token-set states: hover #2c93f2
- Observed hover: `#2c93f2`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Recorded hover fill `#2c93f2` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | The system declares that azure actions fade rather than turn grey; no opacity value is given |
| loading | not-applicable | This control takes the reader to an inquiry destination; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | This control takes the reader to a destination; it does not commit an operation whose outcome it could report. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

### Dark CTA

- Role: Primary persuasion buttons (도입 문의하기, 견적 문의하기)
- Primitive type: `button` · Kind: interactive
- Background: `#0f0f0f`
- Text: `#ffffff`
- Radius: 4px
- Padding: 14px 25px
- Height: 50px
- Font: 12px / 600 Pretendard
- Token-set use: Primary dark CTA 도입 문의하기 / 견적 문의하기
- Token-set states: hover #171717
- Observed hover: `#171717`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Recorded hover fill `#171717` |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; the system's reduced-opacity surface applies and no opacity value is given |
| loading | not-applicable | This control sends the reader to inquiry or quote; reaching that destination is not a commit whose in-progress state the button reports. |
| error | not-applicable | This control sends the reader to a destination; the destination, not the button, reports whether that request failed. |
| success | not-applicable | Same role reason: navigating to inquiry or quote is not an operation that commits and reports success. |

### White Secondary CTA

- Role: Secondary actions (무료 체험하기, 서비스 소개서 다운로드)
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#171717`
- Border: 1px solid `#e4e4e7`
- Radius: 4px
- Padding: 14px 25px
- Height: 50px
- Font: 12px / 600 Pretendard
- Token-set use: Secondary CTA 무료 체험하기 / 서비스 소개서 다운로드

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control opens a trial path or a brief download; it does not commit an in-page operation whose in-progress state the button reports. |
| error | not-applicable | Destination / download role; the destination, not this button, reports failure. |
| success | not-applicable | Same role reason: reaching a trial or a file is not an operation this button reports as success. |

### Top Nav Item

- Role: Top horizontal nav (왜 그리팅인가, 제품, 솔루션, 고객 사례, 가격, 유용한 자료)
- Primitive type: `tab` · Kind: interactive
- Background: `#ffffff`
- Text: `#171717`
- Font: 12px / 600 Pretendard
- Radius: 4px (hover surface)
- Padding: 18px 12px
- Active: azure `#1890ff` text on active item
- Token-set active: azure #1890ff text on active
- Token-set use: Top nav item 제품/솔루션/가격

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | The source records a 4px hover surface; no fill value is given |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This item is a destination tab/link; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | Destination tab/link; the destination, not the item, reports failure. |
| success | not-applicable | Same role reason: reaching a nav destination is not an operation with a success result. |

### Eyebrow Pill

- Role: Eyebrow pill ("국내 1위 채용 관리 솔루션")
- Primitive type: `badge`
- Kind: non-interactive — a positioning label, not a control
- Background: `#ffffff`
- Text: `#0f0f0f`
- Radius: 50px
- Padding: 8px 20px
- Height: 32px
- Font: 12px / 600 Pretendard
- Token-set use: 국내 1위 채용 관리 솔루션 eyebrow pill

### Feature Tag

- Role: Pricing feature tags (소규모 팀 추천, 커뮤니케이션, 캘린더 연동)
- Primitive type: `badge`
- Kind: non-interactive — a feature label, not a control
- Background: `#ffffff`
- Text: `#0f0f0f`
- Border: 1px solid `#e4e4e7`
- Radius: 6px
- Padding: 8px 10px
- Height: 30px
- Font: 12px / 600 Pretendard
- Token-set use: Pricing feature tag 소규모 팀 추천 / 커뮤니케이션

### Product Feature Card

- Role: Hero product feature cards (채용 홈페이지 빌더, 다이렉트 소싱, 인재풀 구축)
- Primitive type: `card`
- Background: `#fafafa`
- Text: `#27272a`
- Radius: 16px
- Padding: 16px
- Token-set use: Hero product feature card 채용 홈페이지/다이렉트 소싱

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Zinc List Surface

- Role: Light zinc list / menu surface and grouped tiles
- Primitive type: `card`
- Background: `#f4f4f5`
- Text: `#27272a`
- Radius: 8px
- Token-set use: Light zinc list / menu surface

The source supplies no interaction evidence for this surface, so kind and a state-applicability map are both withheld.

### Pricing Plan Card

- Role: Pricing plan cards on the deep navy proof band
- Primitive type: `card`
- Background: `#001946`
- Text: `#ffffff`
- Radius: 30px
- Shadow: `rgba(255,255,255,0.12) 0px 0px 2px 0px inset`
- Token-set use: Pricing plan card on deep navy band

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations, and they are not Greeting-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| Empty (no candidates yet) | White canvas. Single Heading (`#27272a`) line explaining no applicants yet, with one azure CTA to post a job or import. No illustration clutter. |
| Empty (no talent pool) | Muted (`#71717a`) single line: nothing in the pool yet, plus a path to 인재풀 구축. Honest, calm. |
| Loading (list fetch) | Skeleton rows on `#fafafa` surface at final card dimensions, 16px radius. Flat pulse, no shadow shimmer — consistent with the shadowless system. |
| Loading (action submit) | Inline spinner within the dark CTA; previous state stays visible. |
| Error (load failed) | Inline message in Heading color with a plain-language explanation and a retry. Never a bare "오류가 발생했습니다" — states the next step. |
| Error (form validation) | Field-level message below the input describing what's valid, not just "필수". |
| Success (action complete) | Brief inline confirmation, optionally with the `#4ba63d` success mark; next-step linked immediately below. No celebratory excess. |
| Skeleton | `#f4f4f5` / `#fafafa` blocks at final dimensions, 16px radius, flat pulse. |
| Disabled | Disabled text (`#d4d4d8`) on reduced-opacity surface; azure actions fade rather than turn grey to preserve brand read. |

These rows describe ATS product and form treatments the source wrote at system level. They are not attached as visual treatments to the marketing destination controls above.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered single-column hero with the azure accent word as the focal anchor
- Product features arranged as a row of `#fafafa` cards (16px radius)
- Sections alternate white (`#ffffff` / `#fcfcfc` / `#fafafa`) full-width bands
- The proof/pricing section flips to a deep navy (`#001946`) band carrying the giant Poppins numeral and 30px-radius plan cards
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 20 / 25 / 48 / 80
- Shape restated from `tokens.rounded`: buttons 4 · zinc/menu 8 · product cards 16 · pricing 30 · eyebrow pills 50

Reading the azure accent word as the focal anchor, reading scale as breathing room over density, reading bands as flat segmentation by tint and hairline, and reading the navy band as a light-to-dark crescendo, are derived editorial implementation inferences from the verified surfaces; they are not Greeting-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the source's "comfortably tappable" reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Greeting-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, feature cards stack |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature/pricing bands |

Touch targets the source records: primary CTAs at 50px height; header inquiry CTA at 36px height; nav links with 18px×12px padding within the header.

Collapsing strategy, as the source states it:

- Hero: 60px accent word + 48px headline scale down on mobile, weight 600 maintained
- Feature card row: multi-column → stacked single column
- Pricing plan cards: side-by-side → stacked, 30px radius maintained
- Deep navy proof band: full-width treatment with the big numeral scaling down

Image behavior: product screenshots carry no shadow at any size; cards maintain 16px radius across breakpoints. The Desktop row keeps the source body's `1024-1440px` range.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Greeting's voice as confident, professional, and outcome-oriented — an enterprise HR guide that frames recruiting not as administrative drudgery but as a strategic path to "채용 성공" (recruitment success). The hero line "채용 관리를 넘어 채용 성공으로" ("Beyond recruitment management, toward recruitment success") sets the register: it positions the product above mere tooling, promising an outcome. Copy speaks to HR practitioners and talent teams as capable professionals, leaning on proof ("국내 1위", "10,000+ 기업") rather than hype, and decoding the recruiting workflow into clear, named steps (모집 → 선발, 다이렉트 소싱, 인재풀 구축). That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Greeting-authored or a separately published UI specification. The Korean lines themselves are live homepage copy.

| Context | Tone |
|---|---|
| Hero headline | Outcome-framed, confident. "채용 관리를 넘어 채용 성공으로." Promise over feature. |
| Proof / stats | Quietly authoritative. "국내 1위 채용 관리 솔루션", "10,000+ 기업이 그리팅과 함께합니다." |
| Feature labels | Plain and functional. "다이렉트 소싱", "인재풀 구축", "채용 홈페이지 빌더". |
| CTAs | Direct, low-pressure. "무료 체험하기", "도입 문의하기", "1:1 맞춤 상담받기". |
| Section titles | Strategy-framed. "유연한 모집 전략", "데이터 기반 운영 · 최적화". |

**Voice samples (verbatim from live homepage):**

- "채용 관리를 넘어 채용 성공으로" — hero headline (outcome-framed promise).
- "국내 1위 채용 관리 솔루션" — eyebrow / positioning claim.
- "성과를 만드는 인재, 전략에 구애받지 말고 확보하세요" — section headline (strategic empowerment).

Further published strings the source records on the inspected surfaces, kept byte-exact:

- document.title: "그리팅 | 채용 성공을 위한, 국내 1위 채용 관리 솔루션"
- "모집부터 선발까지, 수시부터 대규모 채용까지 그리팅 하나로"
- "*2026년 1월 그리팅 이용 고객사"
- Feature H3: "지원자를 사로잡는 첫인상, 채용 홈페이지로부터"
- Nav: 왜 그리팅인가, 제품, 솔루션, 고객 사례, 가격, 유용한 자료
- Header CTA: 도입 문의
- Dark CTAs: 도입 문의하기, 견적 문의하기
- Secondary: 무료 체험하기, 서비스 소개서 다운로드
- Feature tags: 소규모 팀 추천, 커뮤니케이션, 캘린더 연동
- Product cards: 채용 홈페이지 빌더, 다이렉트 소싱, 인재풀 구축

**Forbidden register:** aggressive sales urgency, exclamation-heavy hype, undefined HR jargon left unexplained, casual/cutesy consumer tone that undercuts enterprise trust. The source states that copy leans on proof rather than hype — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Greeting-authored or a separately published UI specification.

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

### Recorded unresolved decisions

These are named values, not permissions to invent. The source records no conflict among its own Tier 1 values.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Greeting evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **The disabled opacity value.** The system states a reduced-opacity surface and an azure action that fades rather than turning grey, without naming the opacity.
- **The skeleton pulse.** The system declares flat blocks at final dimensions with a 16px radius and a flat pulse, without naming the pulse's duration or opacity range.
- **ATS product UI beyond the system-level state record.** The source sells an ATS and writes empty/loading/error/success treatments for candidates, talent pools, and forms. This contract does not invent component anatomy for that product UI.
- **Blog and operator surfaces as token sources.** `https://blog.greetinghr.com` and `https://www.doodlin.co.kr` are named brand-owned sources. They confirm titles and the operator relationship. They do not contribute computed interface tokens.
