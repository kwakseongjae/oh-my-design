# Hackle Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Hackle (핵클) is a Korean developer-and-growth platform — an "올인원 AI 그로스 플랫폼" (all-in-one AI growth platform) bundling A/B testing, feature flags, CRM marketing, and product analytics into one dashboard. This contract covers the first-party web surfaces the source records as Tier 1 on 2026-06-26: the Korean marketing homepage at `https://hackle.io/ko/`, the English homepage at `https://hackle.io/en/`, the pricing page at `https://hackle.io/ko/pricing/`, and the documentation site at `https://docs.hackle.io/`. The public GitHub organization `https://github.com/hackle-io` is a named brand-owned source for official SDKs; it does not supply the interface tokens below. Every value stays attached to the surface that established it. Marketing chrome and the docs site are two recorded systems, not one. Keeping values attached to the surface that established them, and treating the GitHub organization as a named SDK source rather than a token surface, is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

The captured marketing layer reads as a confident, clean SaaS console: an off-white canvas (`#fafafa`) carrying near-black text, generous whitespace, and a single saturated blue. The source records the marketing chrome as built on Material UI — `rgba(0,0,0,0.87)` / `rgba(0,0,0,0.6)` / `rgba(0,0,0,0.3)` text emphasis and 4px-radius default action buttons in `#2962ff` — with two custom families layered on top: large 8px-radius hero CTAs in `#0065ff`, and flat 5px-radius tool chips (black `#000000` and white). Headlines render in Montserrat on the English site and Pretendard on the Korean site, both at weight 700 — 46px on the hero, 36px on section titles — while body and nav sit at 16px / weight 400 with a 24px line-height. Depth is flat: live inspection found `box-shadow: none` across the nav, hero, headings, buttons, and chips. Separation comes from background tints (`#fafafa` / `#f7f7f7` / `#f6f7f9`) rather than elevation. The docs site is a deliberately separate Inter-based system keyed on documentation blue `#0c408d`, with slate body `#1c1d1e`, muted `#6a6e75` sidebar labels, and `#d6d9df` hairlines. Reading that marketing layer as a confident, clean SaaS console, reading it as engineered-but-friendly, reading the single blue as the instrument that does almost all the persuading, reading the docs system as calmer reference material rather than pitch, and reading the page as wanting developers and growth teams to feel that "웹, 앱, 서버 상관없이 5분이면 사용 가능", is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Hackle (핵클) is a Korean (Seoul-based) developer-and-growth platform positioning itself as an "올인원 AI 그로스 플랫폼" — an all-in-one growth toolkit that unifies A/B testing, feature flags, CRM marketing (간편발송 / "Simple Send"), and product/data analysis on a single dashboard. The founding premise visible across its surfaces is consolidation: teams historically stitched experimentation, feature management, messaging, and analytics together from separate vendors; Hackle's pitch is that a growth team should get "팀 별로 필요한 모든 것을 하나의 대시보드에서" (everything each team needs in one dashboard). The product is explicitly developer-first. It ships official SDKs through a public GitHub organization (`github.com/hackle-io`) and maintains a dedicated documentation site (`docs.hackle.io`) with step-numbered guides and a "개발자 문서" (developer docs) track. The headline promise — "웹, 앱, 서버 상관없이 5분이면 사용 가능" (usable in five minutes regardless of web, app, or server) — frames integration speed as the entry point. Official history and the live surfaces provide that narrative context; they do not by themselves supply interface tokens. Classifying that narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

What the source says the design refuses, visible in its restraint: the heavy, shadow-stacked chrome of legacy enterprise software, and the multi-color dashboards that overload growth tools. What it embraces: a flat, fast, single-blue console aesthetic; Material-grade familiarity for the marketing chrome; and a separate, calmer Inter-based documentation system that reads like reference material a builder can trust. That refusal/embrace reading is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

- Read the homepage promise "AI와 데이터로 이끄는 성장" and the "올인원 AI 그로스 플랫폼" positioning.
- Explore a demo or request a consult from "데모 둘러보기" / "Explore Demo" and "상담 신청하기" / "Request a Demo".
- Search the docs with "찾으시는 기능이나 키워드를 검색해보세요".
- Enter 간편발송 or take a tool action from "간편발송 바로가기" / "Go to Simple Send" and "가이드북 다운받기".

Selecting these four as the product's primary tasks is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification. Each names a label or surface the source records. They do not come from the source's persona section.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its three named figures as fictional archetypes informed by publicly observable Hackle user segments (Korean growth teams, product managers, and engineers adopting experimentation tooling), not individual people, so their names, ages, cities, and biographies are dropped rather than promoted, and no demographic segment list is carried into this document or its sidecar. What the source independently records is the audience grouping those archetypes were said to be informed by: Korean growth teams, product managers, and engineers adopting experimentation tooling. Reading those groups as this product's audience is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

### Distinctive traits

- Material UI foundation — `rgba(0,0,0,0.87)` text ladder + 4px-radius default buttons in `#2962ff`
- Custom hero CTA layer — bright `#0065ff`, 8px radius, 18px / weight 700 labels
- Flat 5px "tool chips" — black `#000000` and white chips for secondary actions
- Single-blue persuasion: `#0065ff` / `#2962ff` carry nearly all the action color
- Montserrat (EN) / Pretendard (KO) bold headlines at weight 700; quiet 16px body
- Shadowless system — separation via `#fafafa` / `#f7f7f7` / `#f6f7f9` tints, not elevation
- Separate Inter-based docs system keyed on documentation blue `#0c408d` with `#d6d9df` hairlines
- Supporting accents: soft `#9ebaf4`, pale `#ebf4fd` tint, deep navy `#0e0437` band; `#ffffff` cards

These eight traits, and the readings carried inside them — Material foundation, custom hero layer, single-blue persuasion, shadowless tint separation, and a calmer docs system — are a derived editorial implementation inference from the verified surfaces; they are not Hackle-authored or a separately published UI specification. Each names the values it rests on.

### Principles

These six items are a derived editorial implementation inference from the verified surfaces; they are not Hackle-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **One platform, one dashboard.** Hackle's whole pitch is consolidation. *UI implication:* unify modules visually; avoid per-feature visual dialects on the marketing surface — the blue and the type system stay consistent across A/B, flags, CRM, and analytics.
2. **One action, one color.** Blue (`#0065ff` / `#2962ff`) means "do this." *UI implication:* reserve saturated blue for actions so the next step is never ambiguous.
3. **Developer-first, five-minute onboarding.** *UI implication:* lead with integration speed; keep docs peer-level, step-numbered, and code-forward.
4. **Flat and fast.** Console clarity over decorative depth. *UI implication:* no shadows; separate with tint and hairline; keep the page quick to scan.
5. **Familiar base, custom highlights.** Material UI gives a trusted foundation; custom hero CTAs and chips add brand character. *UI implication:* respect MUI defaults for standard controls, and layer brand geometry only where it earns attention.
6. **Calm docs, bold marketing.** *UI implication:* the documentation system gets its own quiet Inter + `#0c408d` identity, distinct from the louder marketing blue.

### Application rules

The source states these eight as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Hackle-authored or a separately published UI specification.

- Reserve the brand blue (`#0065ff`) for the primary action so the next step is unambiguous
- Use the Material-default `#2962ff` filled button (4px radius, 6px 16px) for standard in-page actions
- Set marketing headlines in Montserrat (EN) / Pretendard (KO) at weight 700
- Keep body and nav at 16px / weight 400 with a 24px line-height
- Separate sections with flat tints (`#fafafa`, `#f7f7f7`, `#f6f7f9`), not shadows
- Use the dark `#000000` chip and white `#151618`-text chips for secondary tool entries
- Switch to Inter + docs-blue `#0c408d` + `#d6d9df` hairlines inside the documentation system
- Use pure black (`#000000`) for marketing headlines and near-black `#151618` for chip ink

### Avoid

The source states these seven as its Don't list; they are kept as its rules, reasons included. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Hackle-authored or a separately published UI specification.

- Spread blue across many elements — it dilutes the single-action signal
- Add drop shadows for elevation — Hackle separates with tint and hairline
- Mix Montserrat and Pretendard on the same page — locale decides the display font
- Use the marketing brand blues inside the docs system — docs uses its own `#0c408d`
- Set headlines in a light weight — display is always weight 700
- Use large pill radii on the hero CTA — it stays at a controlled 8px
- Introduce a second saturated accent hue — blue is the only loud color

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Where a line also characterizes a value — confident action, Material companion, calmer docs accent, immersive band — that characterization is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

Primary

- **Hackle Blue** (`#0065ff`): The primary brand and action color — the large hero CTA ("데모 둘러보기" / "Explore Demo") and the outline-CTA accent. Token-set key `tokens.colors.primary`.
- **Brand Blue Alt** (`#2962ff`): The Material-UI default action-button blue — header CTA, pricing buttons ("문의하기", "카드 등록하고 바로 사용하기"), and inline emphasis links. Token-set key `tokens.colors.primary-alt`.
- **Docs Blue** (`#0c408d`): The documentation system's darker blue — active sidebar nav, the "수락" consent accept button, and doc-link text on `docs.hackle.io`. Token-set key `tokens.colors.docs-blue`.

Accent and tint

- **Soft Blue** (`#9ebaf4`): A light periwinkle accent used in illustration/decoration and supporting surfaces. Token-set key `tokens.colors.accent-blue`.
- **Pale Blue Tint** (`#ebf4fd`): A very light blue wash for highlighted/info blocks and tinted callouts. Token-set key `tokens.colors.tint-blue`.
- **Deep Navy** (`#0e0437`): An occasional dark immersive section background — near-black indigo for contrast bands. Token-set key `tokens.colors.navy-deep`.

Text and ink

- **Heading Black** (`#000000`): Pure black for marketing headlines (hero H1, section H2/H3). Token-set key `tokens.colors.heading`.
- **Ink** (`#151618`): Near-black ink for tool-chip labels and high-contrast UI text. Token-set key `tokens.colors.ink`.
- **Body Slate** (`#1c1d1e`): The docs-system body text color (Inter). Token-set key `tokens.colors.body`.
- **Muted Slate** (`#6a6e75`): Secondary/muted text — docs sidebar inactive items, captions, metadata. Token-set key `tokens.colors.muted`. Marketing body additionally uses Material's `rgba(0,0,0,0.87)` / `rgba(0,0,0,0.6)` emphasis levels.

Surface and border

- **Canvas** (`#fafafa`): The default page background — a soft off-white. Token-set key `tokens.colors.canvas`.
- **Surface** (`#f7f7f7`): A pure neutral surface for alternating bands and cards on the marketing site. Token-set key `tokens.colors.surface`.
- **Docs Surface** (`#f6f7f9`): The docs system's cool-grey surface block (e.g. the "거부" reject button background). Token-set key `tokens.colors.surface-alt`.
- **Hairline** (`#d6d9df`): Thin borders and dividers on the docs system (search field, copy/consent buttons). Token-set key `tokens.colors.hairline`.
- **Pure White** (`#ffffff`): Card surfaces, white tool chips, and text on blue/dark. Token-set key `tokens.colors.white`.

### Spacing

Token-set steps, unitless: `xs 6 · sm 10 · md 12 · base 16 · lg 20 · xl 24 · xxl 32 · section 64`. Visible sections also write 6px, 10px, 12px, 16px, 20px, 24px, 32px, and 64px where those strings already appear. Token-set key `tokens.spacing.md: 12` is a spacing step. It is not `tokens.rounded.lg: 12`. Token-set key `tokens.spacing.xl: 24` is a spacing step. It is not a radius. Token-set key `tokens.spacing.base: 16` is a spacing step. It is not the 16px body size. Token-set key `tokens.spacing.section: 64` is a spacing step for section bands. The source also writes a base unit of ~4-8px as the rhythm those steps sit on. Keeping those keys on separate paths is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

### Shape

Token-set steps, unitless: `xs 4 · sm 5 · md 8 · lg 12 · full 9999`. Named uses the source records:

- XS (4px): MUI default action buttons, emphasis pills. Token-set key `tokens.rounded.xs`.
- Small (5px): flat tool chips. Token-set key `tokens.rounded.sm`.
- Medium (8px): hero CTAs, cards, search field — the workhorse. Token-set key `tokens.rounded.md`.
- Large (12px): docs consent buttons, docs language selector. Token-set key `tokens.rounded.lg`.
- Full (9999px): rare full-round elements. Token-set key `tokens.rounded.full`.

`tokens.rounded.lg: 12` is a radius step. It is not `tokens.spacing.md: 12`. `tokens.rounded.md: 8` is a radius step. It is not a spacing key. `tokens.rounded.xs: 4` is a radius step. `tokens.rounded.full: 9999` has no spacing counterpart.

Calling 8px the workhorse, reading 4px as the Material default, and keeping `tokens.rounded` steps off the spacing keys that share a number, is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

### Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Page background, headings, most surfaces |
| Tint (Level 1) | `#f7f7f7` / `#f6f7f9` background shift | Card/section separation without elevation |
| Hairline (Level 2) | `1px solid #d6d9df` border | Docs search field, copy/consent buttons, dividers |
| Color (Level 3) | Brand blue `#0065ff` / dark `#000000` chip | Emphasis through hue, not shadow |

Hackle is effectively a shadowless system on its public surfaces. Live inspection returned `box-shadow: none` across the nav, hero, headings, buttons, and tool chips. Token-set key `tokens.shadow.none: none`. Grouping and hierarchy come from flat background tints (`#fafafa` canvas, `#f7f7f7` / `#f6f7f9` surfaces) and thin `#d6d9df` hairlines on the docs system. When the page needs to elevate attention it reaches for color — the bright blue `#0065ff`, the dark `#000000` chip, or a deep navy `#0e0437` band — never a drop shadow. Reading that stack as a flat, tint-and-hairline elevation system is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification. The measurements themselves are recorded values.

### Motion

Durations the source attributes to named tokens:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, button/chip press, focus |
| `motion-standard` | 200ms | Card/section reveal, dropdown, sheet |
| `motion-slow` | 320ms | Page-level transitions, hero reveal |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Hackle evidence, so the curves are omitted here and only the roles and their uses are kept. Classing those curves as untraceable to Hackle evidence, and omitting them on that ground, is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification:

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, sheets, dropdowns |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions |

A future motion pass may promote an omitted curve only after recording, per component, the computed transition properties, the animation name, the duration, the easing, and the reduced-motion behavior on the live surface; confirming a single curve, or citing an official source for one, does not satisfy that condition. That condition is set by this document, not by Hackle.

Motion rules, as the source states them:

- Motion is functional and restrained, matching the flat, fast console aesthetic.
- The primary CTA responds to hover with a subtle opacity dim (the live hero CTA shifts to ~90% opacity on hover) rather than a shadow or scale leap.
- Buttons and chips press with a quiet opacity/scale shift; content reveals fade in from below at `motion-standard / ease-enter`.
- No bounce or spring — a growth/analytics platform signals steadiness.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant; the product remains fully functional.

Reading those motion rules as matching a flat, fast console, and reading the no-bounce stance as a steadiness signal, is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The marketing and docs surfaces state the product and ship live type. They do not publish a universal current typography token or a separately issued type specimen. That "no published type token" reading is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification. |
| Live computed surface-use | English marketing headlines compute Montserrat at weight 700. Korean marketing headlines and UI compute Pretendard. The docs system computes Inter. |
| FontFaceSet and source corroboration | Montserrat (with Montserrat Fallback) on the English site; Pretendard (with Pretendard Fallback) on the Korean site, with body defaults falling back through `ui-sans-serif, system-ui`; Inter (with Inter Fallback) on `docs.hackle.io`. |
| Official distributed asset | No Hackle-exclusive distributed type family was verified. Montserrat, Pretendard, and Inter are the observed faces. |
| Declared-only | No additional declared-only family was recorded on the inspected surfaces. |
| License | This record does not establish a Hackle font-license notice for Montserrat, Pretendard, or Inter. Treating those faces as upstream faces used by Hackle, not Hackle-owned brand assets, is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification. |
| Outside these captures | Type on surfaces beyond the four token-inspected pages sits outside this contract. That outside-this-contract boundary is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification. |

### Family

- **Display (EN):** `Montserrat` (with `Montserrat Fallback`) — marketing headlines on the English site at weight 700. Token-set path `tokens.typography.family.display`.
- **Body / Display (KO):** `Pretendard` (with `Pretendard Fallback`) — the Korean site's headline and UI font. Token-set path `tokens.typography.family.body`.
- **Docs:** `Inter` (with `Inter Fallback`) — the entire `docs.hackle.io` system, body and nav. Token-set path `tokens.typography.family.docs`.

A fallback member of a stack is never presented as the brand face. Do not replace Montserrat, Pretendard, or Inter with a system substitute. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification. Montserrat and Pretendard never appear together on one page — locale decides.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set use |
|---|---|---:|---:|---:|---|
| Display Hero | Montserrat / Pretendard | 46px (2.88rem) | 700 | 1.0 | Hero headline (Montserrat EN / Pretendard KO) |
| Section Heading | Montserrat / Pretendard | 36px (2.25rem) | 700 | 1.2 | Section titles |
| Sub-section | Pretendard | 26px (1.63rem) | 600 | 1.2 | Feature sub-heads |
| Body / Nav | Pretendard / system | 16px (1.00rem) | 400 | 1.5 (24px) | Body / nav text, 24px line-height |
| Hero CTA | Montserrat / Pretendard | 18px (1.13rem) | 700 | 1.0 | Hero CTA label |
| Button / Chip | Pretendard | 14px (0.88rem) | 500 | 1.0 | MUI action button / tool chip label |
| Docs Body / Nav | Inter | 14px (0.88rem) | 400 | 1.5 | Docs body / sidebar nav (Inter) |

Line heights are unitless ratios in the source token set (`1.0` on display-hero, button-lg, and button; `1.2` on section and subsection; `1.5` on body and docs) and stay ratios here. They are not converted to a single px form. The source itself spells the body line-height as both `1.5` and `24px`; both forms stay. Token-set paths: `tokens.typography.display-hero` · `section` · `subsection` · `body` · `button-lg` · `button` · `docs`.

Token-set `use` strings, verbatim: Display Hero `Hero headline (Montserrat EN / Pretendard KO)`; Section `Section titles`; Sub-section `Feature sub-heads`; Body `Body / nav text, 24px line-height`; Hero CTA `Hero CTA label`; Button / Chip `MUI action button / tool chip label`; Docs `Docs body / sidebar nav (Inter)`.

### Type rules

The source states these four as its typography principles. Reading the measured metrics as those principles is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

- **Bold display, quiet body**: Headlines run at weight 700; body and nav stay at weight 400. The weight jump is the primary hierarchy signal — there is little use of mid-weights on the marketing surface.
- **Two display fonts, locale-split**: Montserrat owns the English marketing voice; Pretendard owns the Korean voice. They never appear together on one page — locale decides.
- **Inter for documentation**: The docs system deliberately switches to Inter at 14px / 400 with a 1.5 line-height — calmer and denser than the marketing type, signalling "reference material, not pitch."
- **Material body metrics**: The marketing body inherits MUI defaults (16px, 24px line-height, `rgba(0,0,0,0.87)`), giving the site a familiar console-grade legibility.

### Assets

- The catalog's logo entry for this reference is a Google favicon-service URL (`https://www.google.com/s2/favicons?domain=hackle.io&sz=128`) rather than a Hackle-hosted file. The source's own sibling excludes that service from the KR brand-owned count, so the URL is recorded here as a favicon-service pointer and in the provenance ledger, and is not presented as a Hackle-hosted brand asset. Classing that entry as a third-party favicon service is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.
- Product/dashboard screenshots and illustrations carry no shadow at any size, consistent with the flat system. Cards maintain 8px radius across the breakpoints the source declares. Reading that shadowless image behavior as consistent with the flat system is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### How to read this section

The source declares each component with a primitive type (`button`, `input`, `tab`, `card`, `badge`) and a value set. Those types are preserved per component. Applicability below is judged by each control's role in this product, not by whether a visual treatment for that state was recorded; where the source supplies no treatment for an applicable state, the value is omitted and the state stays applicable. The source's live inspection recorded computed default styling, and the state treatments in the State record below are stated at system level rather than measured per control. Every kind verdict, every applicability verdict, and the reason given for either is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification. This is not a claim that state coverage is finished.

The source records no `focus-visible` treatment. Generic focus is not invented. `focus-visible` stays applicable on interactive controls; the visual treatment is omitted.

### Hero Primary CTA

- Role: dominant page action — 데모 둘러보기 / Explore Demo
- Primitive type: `button` · Kind: interactive
- Domain: Marketing (`hackle.io/ko/`, `hackle.io/en/`)
- Background: `#0065ff`
- Text: `#ffffff`
- Radius: 8px
- Padding: 12px 32px
- Height: 53px
- Font: 18px / 700
- Token-set font record: `18px / 700`
- Token-set use: `Hero primary CTA — 데모 둘러보기 / Explore Demo`
- Token-set states: hover `#0065ff` @ 90% opacity
- Observed hover: same blue dimmed to ~90% opacity

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Recorded hover dim to ~90% opacity |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The system declares that blue actions fade rather than turn grey; no opacity value is given |
| loading | not-applicable | This control takes the reader to a demo destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | This control takes the reader to a destination; it does not commit an operation whose outcome it could report |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result |

### MUI Filled Action

- Role: Material-default in-page action — 문의하기, 카드 등록하고 바로 사용하기, header 데모 둘러보기
- Primitive type: `button` · Kind: interactive
- Domain: Marketing / pricing
- Background: `#2962ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 6px 16px
- Height: 39px
- Font: 14px / 500
- Token-set font record: `14px / 500`
- Token-set use: `MUI default action button — 문의하기 / 카드 등록하고 바로 사용하기`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | The system declares that blue actions fade rather than turn grey; no opacity value is given |
| loading | not-applicable | This control sends the reader to inquiry, card-registration, or demo; reaching that destination is not a commit whose in-progress state the button reports |
| error | not-applicable | Destination role; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching inquiry, registration, or demo is not an operation this button reports as success |

### Outline CTA

- Role: secondary hero action — 상담 신청하기 / Request a Demo
- Primitive type: `button` · Kind: interactive
- Domain: Marketing
- Background: `#ffffff`
- Text: `#0065ff`
- Border: 1px solid `#0065ff`
- Radius: 8px
- Padding: 12px 32px
- Height: 53px
- Font: 18px / 700
- Token-set font record: `18px / 700`
- Token-set use: `Secondary CTA — 상담 신청하기 / Request a Demo`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; treatment omitted |
| loading | not-applicable | This control takes the reader to a consult destination; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination role; the destination, not this button, reports failure |
| success | not-applicable | Same role reason: reaching a consult destination is not an operation with a success result |

### Dark Tool Chip

- Role: black entry chip — 간편발송 바로가기 / Go to Simple Send
- Primitive type: `button` · Kind: interactive
- Domain: Marketing
- Background: `#000000`
- Text: `#ffffff`
- Radius: 5px
- Padding: 0px 24px
- Height: 44px
- Font: 14px / 500
- Token-set font record: `14px / 500`
- Token-set use: `Dark CTA chip — 간편발송 바로가기 / Go to Simple Send`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; treatment omitted |
| loading | not-applicable | This chip sends the reader to 간편발송; it commits no operation in place |
| error | not-applicable | Destination role; the destination, not this chip, reports failure |
| success | not-applicable | Same role reason: reaching 간편발송 is not an operation this chip reports as success |

### White Tool Chip

- Role: flat secondary chip — 가이드북 다운받기, 템플릿으로 바로 만들기, View Guides
- Primitive type: `button` · Kind: interactive
- Domain: Marketing
- Background: `#ffffff`
- Text: `#151618`
- Radius: 5px
- Padding: 10px 20px
- Height: 44px
- Font: 14px / 500
- Token-set font record: `14px / 500`
- Token-set use: `White tool chip — 가이드북 다운받기 / 템플릿으로 바로 만들기`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web control; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A destination control can be gated; treatment omitted |
| loading | not-applicable | This chip opens a guide or a template path; it does not commit an in-page operation whose in-progress state it reports |
| error | not-applicable | Destination / download role; the destination, not this chip, reports failure |
| success | not-applicable | Same role reason: reaching a guide or a template is not an operation this chip reports as success |

### Docs Consent Accept

- Role: docs cookie/consent accept — 수락
- Primitive type: `button` · Kind: interactive
- Domain: Docs (`docs.hackle.io`)
- Background: `#0c408d`
- Text: `#ffffff`
- Border: 1px solid `#0c408d`
- Radius: 12px
- Padding: 6px 12px
- Height: 35px
- Font: 14px / 400
- Token-set font record: `14px / 400`
- Token-set use: `Docs consent accept (수락)`
- The reject ("거부") variant uses `#f6f7f9` background with `#6a6e75` text and a `#d6d9df` border, also at 12px radius.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable action control; visual treatment omitted |
| disabled | applicable | A consent action can be gated; treatment omitted |
| loading | applicable | The control commits consent, which can be pending |
| error | applicable | The control commits an operation that can fail |
| success | applicable | The control commits an operation that can complete |

### Docs Search Field

- Role: docs search field
- Primitive type: `input` · Kind: interactive
- Domain: Docs
- Background: `#ffffff`
- Text: `#1c1d1e`
- Border: 1px solid `#d6d9df`
- Radius: 8px
- Padding: 8px
- Height: 40px
- Font: 16px
- Token-set font record: `16px`
- Token-set use: `Docs search field — 찾으시는 기능이나 키워드를 검색해보세요`
- Placeholder: `검색…`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable field; visual treatment omitted |
| disabled | applicable | A search field can be gated; treatment omitted |
| loading | not-applicable | The field holds a query; it does not commit an operation whose in-progress state it reports on itself |
| error | applicable | Form field; visual treatment omitted |
| success | not-applicable | The field does not commit an operation whose completion it reports on itself |

### Top Marketing Nav

- Role: top marketing nav item — 서비스 소개, 가이드, 가격 안내, 블로그, 로그인
- Primitive type: `tab` · Kind: interactive
- Domain: Marketing
- Background: `#ffffff`
- Text: `#000000`
- Font: 16px / 400
- Active: text `#0065ff`
- Token-set use: `Top marketing nav item — 서비스 소개 / 가이드 / 가격 안내`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A nav item can be gated; treatment omitted |
| loading | not-applicable | This item is a destination tab/link; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab/link; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching a nav destination is not an operation with a success result |

### Docs Sidebar Nav

- Role: docs sidebar nav item
- Primitive type: `tab` · Kind: interactive
- Domain: Docs
- Text: `#6a6e75`
- Font: 14px / 400 Inter
- Active: text `#0c408d` weight 600
- Token-set use: `Docs sidebar nav item (Inter)`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web nav item; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable control; visual treatment omitted |
| disabled | applicable | A nav item can be gated; treatment omitted |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination tab; the destination, not the item, reports failure |
| success | not-applicable | Same role reason: reaching a docs destination is not an operation with a success result |

### Docs Surface Block

- Role: cool-grey surface block on the docs system (e.g. inactive/reject surfaces)
- Primitive type: `card`
- Domain: Docs
- Background: `#f6f7f9`
- Text: `#1c1d1e`
- Radius: 8px
- Token-set use: `Docs surface block / reject-button surface`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Blue Info Callout

- Role: highlighted/info block — pale-blue tinted callout
- Primitive type: `card`
- Domain: Docs
- Background: `#ebf4fd`
- Text: `#0c408d`
- Radius: 8px
- Token-set use: `Highlighted info callout / tinted block`
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Marketing Feature Card

- Role: white feature card on the `#fafafa` canvas
- Primitive type: `card`
- Domain: Marketing
- Background: `#ffffff`
- Radius: 8px
- Flat, shadowless, separated by surface tint
- No kind and no applicability map: the source supplies no interaction evidence for this container, so neither is decided here.

### Blue Emphasis Pill

- Role: inline emphasis / status pill
- Primitive type: `badge` · Kind: non-interactive
- Domain: Marketing
- Background: `#0065ff`
- Text: `#ffffff`
- Radius: 4px
- Padding: 6px 16px
- Font: 14px / 500
- Token-set use: `Inline emphasis / status pill`
- Kind is non-interactive because the source types it `badge` and records it as a display pill, not as a control that commits. No applicability map.

### State record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns none to this state section; the treatments below are therefore a derived editorial implementation inference from the verified surfaces rather than measured per-control observations or treatments attached to the marketing destination controls, and they are not Hackle-authored or a separately published UI specification.

| State | Treatment |
|---|---|
| **Empty (no experiments / no data yet)** | `#fafafa` canvas. Single near-black line explaining nothing's been created, with one `#0065ff` CTA to start. No clutter. |
| **Empty (search, no results)** | Muted `#6a6e75` single line on the docs system; the search field (`#d6d9df` border, 8px radius) stays focused for a retry. |
| **Loading (dashboard / results)** | Skeleton blocks on `#f7f7f7` / `#f6f7f9` tinted surfaces at final dimensions, 8px radius. Flat pulse — no shadow shimmer, consistent with the shadowless system. |
| **Error (action failed)** | Inline message in near-black with a plain-language explanation and a retry. No generic "오류가 발생했습니다" alone. |
| **Error (form validation)** | Field-level message below the input; the `#d6d9df` border signals the field; describes what's valid, not just "필수". |
| **Success (saved / submitted)** | Brief inline confirmation in a calm tone; next-step detail linked immediately. No celebratory emoji. |
| **Consent (docs cookie banner)** | Accept ("수락") uses `#0c408d` filled; reject ("거부") uses `#f6f7f9` surface with `#6a6e75` text — both 12px radius. |
| **Disabled** | Material emphasis: text drops to `rgba(0,0,0,0.3)`; blue actions fade rather than turn grey to preserve brand read. |

These rows describe empty/loading/error/success treatments the source wrote at system level. They are not attached as visual treatments to the marketing destination controls above.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered single-column hero with the 46px headline as the anchor, primary + outline CTA pair beneath
- Logo wall ("앞서가는 기업들은 이미 핵클의 고객사입니다.") and feature bands alternate across full-width sections
- Team/dashboard feature section ("팀 별로 필요한 모든 것을 하나의 대시보드에서") groups product modules
- Cards use 8px radius and sit on the `#fafafa` canvas separated by `#f7f7f7` surface tints
- Spacing restated from `tokens.spacing`: 6 / 10 / 12 / 16 / 20 / 24 / 32 / 64
- Shape restated from `tokens.rounded`: MUI buttons 4 · chips 5 · hero/cards/search 8 · docs consent 12 · full 9999

Reading the page as console-grade calm, reading bands as tint-not-elevate segmentation, and reading blue as rationed to actions so the next step is always obvious, is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

Whitespace the source states:

- **Console-grade calm**: generous vertical rhythm between sections; the page never feels crowded despite being feature-dense.
- **Tint, don't elevate**: bands separate by background color (`#fafafa` vs `#f7f7f7` vs `#f6f7f9`), not by shadow stacks.
- **One loud color**: blue is rationed to actions so the next step is always obvious.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Hackle-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero headline compresses, CTA pair stacks |
| Tablet | 640-1024px | Moderate padding, 2-up feature cards |
| Desktop | 1024-1440px | Full layout, centered hero, multi-column feature bands |

Touch targets the source records: hero CTAs at 53px height with 12px/32px padding; MUI action buttons at ~39px height; tool chips at 44px height; nav items spaced within a tall (~72px) header row.

Collapsing strategy, as the source states it:

- Hero: 46px headline scales down on mobile, weight 700 maintained
- CTA pair (primary + outline) stacks vertically on narrow viewports
- Feature bands: multi-column → stacked single column
- Tinted/white alternating sections keep full-width treatment
- Docs: sidebar nav collapses to a drawer; content column stays Inter 14px

Image behavior: product/dashboard screenshots and illustrations carry no shadow at any size, consistent with the flat system. Cards maintain 8px radius across breakpoints. The Desktop row keeps the source body's `1024-1440px` range. Reading that image behavior as consistent with the flat system is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Hackle's voice as practical, data-confident, and developer-respecting — it speaks to growth teams and engineers who want measurable outcomes, not hype. The Korean positioning "올인원 AI 그로스 플랫폼" and the English "All-in-One Business Optimization Solution" set the register: comprehensive, outcome-framed, plainspoken. Copy leads with capability and speed ("웹, 앱, 서버 상관없이 5분이면 사용 가능") and with proof ("앞서가는 기업들은 이미 핵클의 고객사입니다." / "Leading brands are already using Hackle."). That characterization, that register reading, and the tone table below are a derived editorial implementation inference from the verified surfaces; they are not Hackle-authored or a separately published UI specification. The Korean and English lines themselves are live surface copy.

| Context | Tone |
|---|---|
| Hero headlines | Outcome-framed, confident. "AI와 데이터로 이끄는 성장" / "AI-powered growth". |
| Feature sections | Capability-first, plain. "팀 별로 필요한 모든 것을 하나의 대시보드에서". |
| CTAs | Direct, low-pressure. "데모 둘러보기", "상담 신청하기", "Explore Demo". |
| Proof / social | Concrete, credibility-led. "앞서가는 기업들은 이미 핵클의 고객사입니다." |
| Docs | Calm, instructional, step-numbered ("Step 1. 이탈 사용자 찾아보기"). Respects the reader as a builder. |

**Voice samples (verbatim from live surfaces):**

- "AI와 데이터로 이끄는 성장 올인원 AI 그로스 플랫폼 핵클" — KO hero headline.
- "앞서가는 기업들은 이미 핵클의 고객사입니다." — KO social-proof section.
- "웹, 앱, 서버 상관없이 5분이면 사용 가능" — KO speed claim.
- "Hackle | All-in-One Business Optimization Solution" — EN page title.

Further published strings the source records on the inspected surfaces, kept byte-exact:

- 핵클
- 올인원 AI 그로스 플랫폼
- 데모 둘러보기 / Explore Demo
- 상담 신청하기 / Request a Demo
- 문의하기
- 카드 등록하고 바로 사용하기
- 간편발송 바로가기 / Go to Simple Send
- 가이드북 다운받기
- 템플릿으로 바로 만들기
- View Guides
- 수락
- 거부
- 찾으시는 기능이나 키워드를 검색해보세요
- 검색…
- 서비스 소개
- 가이드
- 가격 안내
- 블로그
- 로그인
- 개발자 문서
- Step 1. 이탈 사용자 찾아보기
- 오류가 발생했습니다
- 필수
- 간편발송 / Simple Send
- 팀 별로 필요한 모든 것을 하나의 대시보드에서

**Forbidden register:** fear-based urgency, undefined buzzwords with no measurable claim, exclamation-heavy hype, and treating developers as non-technical buyers (the docs voice is peer-to-peer, never condescending). The source states that forbidden list; the characterization of the docs voice as peer-to-peer is a derived editorial implementation inference from the verified surfaces; it is not Hackle-authored or a separately published UI specification.

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

These are named values the source already opened, not permissions to invent, and not a list of domains the source never established:

- Exact easing curves. Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Hackle evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- focus-visible visual treatments on the declared controls
- hover visual treatments other than the hero CTA's recorded ~90% opacity dim
- The disabled fade value. The system states that blue actions fade rather than turn grey, and that text drops to `rgba(0,0,0,0.3)`, without naming a fade opacity for the blue actions.
- GitHub as a token source. `https://github.com/hackle-io` is a named brand-owned source for official SDKs. It does not contribute computed interface tokens.
