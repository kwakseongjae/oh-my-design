# Modusign Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Modusign (모두싸인) is Korea's market-leading e-signature platform. Catalog homepage is `https://www.modusign.co.kr`. This contract covers the three first-party surfaces the source inspected for tokens on 2026-06-10: the homepage at `https://www.modusign.co.kr`, pricing at `https://modusign.co.kr/pricing`, and features at `https://modusign.co.kr/features`. The official blog at `https://blog.modusign.co.kr` is a named brand-owned source in the same packet (voice, PR archive); it does not supply the computed interface tokens below. Catalog `primary_color` is `#fed05f`. YAML grades the token block `tokens.source: live-extract` (`tokens.extracted` 2026-06-10). Values stay attached to the surface and the writing that established them. Treating those three URLs as this contract's token surfaces, treating the blog as a named brand-owned source that does not supply computed tokens, keeping catalog `primary_color` `#fed05f` as the identity pointer for `tokens.colors.primary`, keeping the live-extract grade as the source's own metadata, and keeping values attached to the surface and the writing that established them, are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

The source describes the captured marketing surface as a confident, conversion-tuned B2B SaaS site that has chosen warmth over corporate chill. The canvas is plain white (`#ffffff`, `tokens.colors.canvas`) with charcoal text (`#333333` body, `tokens.colors.body`; `#212121` headings, `tokens.colors.ink`). The personality lives in one decision: the primary action is always a warm egg-yolk yellow (`#fed05f`) button outlined in a deeper honey yellow (`#ffc533`, `tokens.colors.primary-border`) with black text. In a category the source names as dominated by trust-blue (DocuSign, Adobe Sign), Modusign signs its name in yellow. Typography is single-family and declarative: Pretendard everywhere, from the 68px weight-700 hero ("서명이 필요한 모든 곳에 국내 1위 전자서명 모두싸인") down to 14px footer links. Headings run at weight 700 with a 1.4 line-height and a global -0.4px letter-spacing (tightening to -1.2px on the hero). There is no display/body font split; hierarchy is carried by size (68 → 56 → 45 → 36 → 16) and the weight flip between 700 headings and 400 body. Depth is essentially absent: live inspection found `box-shadow: none` across nav, CTAs, cards, and pricing chrome on all three inspected surfaces. Separation uses hairlines on a finely-stepped grey ladder (`#f0f0f0` → `#e6e6e6` → `#dddddd` → `#cccccc`) and flat tinted panels (`#fafafa`, `#f5f5f5`, yellow-tint `#fff8e6`). The radius system is a 6/8/12px ladder — 6px compact header controls, 8px standard CTAs and cards, 12px feature panels and conversion banners — with a single 100px pill reserved for the pricing billing toggle. Text links render in unstyled browser-default blue (`#0000ee`), underlined — an artifact of the Webflow build that the source records as a de-facto part of the brand's plain, pragmatic look. The hex values, Pretendard, the 68 → 56 → 45 → 36 → 16 scale, `box-shadow: none`, the hairline ladder, the 6/8/12px radius ladder, the 100px pill, and `#0000ee` are the source's own. Readings of that captured layer as warmth over corporate chill, as egg-yolk yellow, as signing its name in yellow against trust-blue incumbents, as taller than the tight Korean-startup norm, as a charming Webflow quirk that has become oddly honest, and as a conversion-tuned marketing surface, are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

Brand narrative recorded by the source, kept separate from the interface evidence above. Modusign (모두싸인) was founded in December 2015 by CEO 이영준 (Lee Young-jun) with the mission "계약이 모두에게 더 간편하고 안전할 수 있도록 바꾼다" (change contracts to be simpler and safer for everyone) and the vision "계약의 표준이 된다" (become the standard for contracts). The name itself is the thesis — 모두(everyone) + 싸인(sign): electronic signatures shouldn't be an enterprise luxury but something every business, school, hospital, and government office can use. The founding rejection was paper-and-stamp contract culture — printing, couriering, stamping, scanning, and filing — which Korean organizations endured as a cost of doing business. A decade in, the claim "국내 1위" is carried by published numbers: over 320,000 companies and institutions, around 9.6 million users, and tens of millions of completed documents, with the founder noting the company fields acquisition offers every year (한국일보 interview, 2026-01). The product has grown from simple e-signing into contract infrastructure — web service, API integration (연동형), on-premise deployment, a government edition (GOV), and 모두싸인 캐비닛, an AI contract-management layer. Lee has framed the next chapter explicitly: "전자계약 넘어 AI 기반 CLM으로 확장할 것" — beyond e-contracts to AI-based contract lifecycle management (모두싸인 공식 블로그/전자신문, 2024-12). The design follows the mission's populism: where global e-signature incumbents dress in institutional trust-blue, Modusign chooses a warm yellow CTA on plain white — approachable over imposing. What it refuses: intimidating legal chrome, gated "request a demo" funnels (the free trial is always one yellow button away), and decorative depth. What it embraces: flat pragmatic surfaces, rank-as-fact copy, and a conversion path so consistent that the yellow button effectively *is* the brand. The founding year, the CEO name, the mission and vision strings, the name thesis, the paper-and-stamp founding rejection, the 320,000 / 9.6 million / tens of millions figures, 연동형, GOV, 모두싸인 캐비닛, the 2024-12 quote, and that closing refusal/embrace sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-to-CLM narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=4 lang=en -->
### Primary tasks

Selecting these four as the product's primary tasks, each naming a captured homepage, pricing, or features surface or control, and not taking them from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.

- Start a free trial with 무료 체험 시작 on the homepage hero, sticky header, and footer conversion banner.
- Request a consult with 도입 문의 and 맞춤 상담 받기.
- Compare plans on `https://modusign.co.kr/pricing` with 무료체험 신청, 공공기관(GOV) 도입 문의하기, and the 월 결제 / 1년 약정 billing toggle.
- Read the contract workflow on `https://modusign.co.kr/features` through 계약 준비 / 체결 / 관리.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its figures as fictional archetypes informed by publicly observable Modusign customer segments (HR/legal teams, SMB operators, public-sector administrators), not individual people, so those archetypes are dropped rather than promoted, and no name, age, city, motivation, or affiliation classification is carried into this document or its sidecar. The source's own §13 header names those customer segments in that wording; this Audience restates that header wording and does not rebuild jobs from dropped biographies. Dropping those archetypes rather than promoting them, carrying no name, age, city, motivation, or affiliation classification, and reading those source-named groups as this product's audience, are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

### Distinctive traits

The list restates the source's Key Characteristics. The values are recorded; classifying the list as that restatement, and the groupings and the readings inside it, is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.

- Signature yellow CTA system — `#fed05f` fill, `#ffc533` border, black text — the single brand accent on white
- Pretendard-only typography; weight 700 headings vs 400 body is the entire hierarchy device
- Flat, shadowless chrome — hairline greys and tinted panels do all the separating
- 6/8/12px radius ladder, with a 100px pill only on the pricing toggle
- A parallel blue system on the pricing surface — `#217aff` plan CTA, `#4b75e7` feature-check marks, `#e2e9fe` highlighted-column tint
- Black (`#000000`) used as a real button color for enterprise-grade emphasis
- Browser-default link blue (`#0000ee`) on text links — pragmatic, unpolished, oddly honest
- Dark navy `#08236d` reserved for the government (GOV) plan action

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification. The numbered stems rest on the source's own Principles section. Every *UI implication* below is the source's own editorial reading.

1. **Everyone signs.** The name is the principle — contracts for 모두, not just legal teams. *UI implication:* the free-trial CTA is permanent, yellow, and one click from every viewport; no feature is hidden behind sales gates.
2. **State rank, then lower the bar.** "국내 1위" is asserted as fact and immediately followed by a free entry point. *UI implication:* pair every leadership claim with a low-friction action (무료 체험) and verifiable numbers, never adjectives alone.
3. **End-to-end or nothing.** 시작부터 끝까지 — preparation, signing, and management live in one product. *UI implication:* show workflows as connected step cards (문서 준비 → 서명 요청 → 계약 체결 → 계약 관리), not isolated feature grids.
4. **Flat is honest.** A legal-infrastructure product shouldn't decorate. *UI implication:* no shadows or gradients; hairlines, tints, and solid color blocks carry all structure.
5. **Warmth where the law is cold.** Yellow against legal grey. *UI implication:* keep the single warm accent for action moments; let trust copy (법적 효력, 보안) stay sober charcoal-on-white.

### Application rules

The source states these as its Do list, kept as written. These rules, including the §9-only once-per-viewport sentence, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

- Reserve the yellow pair — `#fed05f` fill + `#ffc533` border — exclusively for the primary free-trial action
- Put black text on yellow CTAs; white text is for black, blue, and navy buttons only
- Pair every primary CTA with the outlined `#cccccc` secondary (도입 문의) on its left
- Keep the system flat: hairlines (`#f0f0f0`–`#cccccc`) and tints, never drop shadows
- Use Pretendard 700 for all headings with 1.4 line-height and -0.4px tracking
- Keep the 6/8/12px radius ladder; 8px is the default for buttons and cards
- Use the blue system (`#217aff`, `#4b75e7`, `#e2e9fe`) only inside pricing/plan contexts
- Use `#000000` as a legitimate button background for enterprise-grade emphasis
- Yellow (`#fed05f` + `#ffc533` border) appears exactly once per viewport — the primary action

### Avoid

The source states these as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

- Use yellow for non-primary actions — it is the single conversion signal
- Add drop shadows or gradients to cards and CTAs — the system is strictly flat
- Mix a second display font — Pretendard owns every role
- Use trust-blue as the brand primary — blue is a pricing-context accent, not the identity
- Round CTAs into pills — 100px radius belongs only to the billing-toggle track
- Set headings below weight 700 — the 700/400 flip is the entire hierarchy device
- Style body links into brand colors — the default `#0000ee` underlined link is the established pattern
- Crowd the hero — one headline, one subline, one CTA pair

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Each role below pairs a name with the value and the use the source records. Token-set keys follow the YAML paths. Pairing each hex to the token-set path named beside it, keeping `tokens.colors.primary` `#fed05f` unmerged from `tokens.colors.primary-border` `#ffc533`, `tokens.colors.primary-deep` `#ffb90a`, and `tokens.colors.primary-tint` `#fff8e6`, keeping the pricing-blue set (`plan-blue` / `check-blue` / `blue-tint` / `gov-navy`) unmerged from the yellow system and from `tokens.colors.link` `#0000ee`, keeping `tokens.colors.ink` `#212121` unmerged from `tokens.colors.ink-alt` `#222222` and from `tokens.colors.body` `#333333`, keeping `tokens.colors.canvas` `#ffffff` unmerged from `tokens.colors.surface` `#fafafa` and `tokens.colors.surface-alt` `#f5f5f5`, and unmerged from secondary-button fill, stepper fill, billing-toggle active fill, feature-sub-tab selected fill, and on-dark/plan/gov label text, keeping `tokens.colors.hairline-faint` `#f0f0f0` unmerged from `tokens.colors.hairline` `#e6e6e6`, `tokens.colors.table-line` `#dddddd`, and `tokens.colors.hairline-strong` `#cccccc`, keeping `tokens.colors.black` `#000000` as both yellow-CTA label text and the dark-emphasis button fill, keeping `#5c5c5c` as a §4 Feature Sub-tab writing rather than as a YAML color key, and reading the YAML token note as the facts it names rather than as extra keys, is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.

#### Primary (Yellow System)

- **Modusign Yellow** (`#fed05f`): `tokens.colors.primary`. The primary CTA fill — "무료 체험 시작" buttons in header, hero, and footer banner. The single saturated brand accent. Catalog identity `primary_color` is `#fed05f`.
- **Honey Border** (`#ffc533`): `tokens.colors.primary-border`. The 1px border that frames every standard yellow CTA, giving the flat button a crisp edge.
- **Deep Honey** (`#ffb90a`): `tokens.colors.primary-deep`. Border on the large footer conversion banner; also appears as small accent text.
- **Yellow Tint** (`#fff8e6`): `tokens.colors.primary-tint`. Pale warm surface for yellow-tinted info panels.

#### Pricing Blue System

- **Plan Blue** (`#217aff`): `tokens.colors.plan-blue`. CTA fill on the highlighted (recommended) pricing plan, and blue accent text on pricing copy.
- **Check Blue** (`#4b75e7`): `tokens.colors.check-blue`. The feature-check marks filling the pricing comparison table — the most frequent non-neutral color on the pricing surface.
- **Blue Tint** (`#e2e9fe`): `tokens.colors.blue-tint`. Background tint of the highlighted plan column.
- **GOV Navy** (`#08236d`): `tokens.colors.gov-navy`. Dark navy fill on the 공공기관(GOV) "도입 문의하기" button.

#### Text Hierarchy

- **Ink** (`#212121`): `tokens.colors.ink`. Hero headline and strongest emphasis text.
- **Ink Alt** (`#222222`): `tokens.colors.ink-alt`. Card body and pricing table text.
- **Body Charcoal** (`#333333`): `tokens.colors.body`. The document default — body copy, most headings.
- **Secondary** (`#474747`): `tokens.colors.secondary`. Inactive tab labels, footer column links.
- **Muted** (`#707070`): `tokens.colors.muted`. Legal links, fine print.
- **Faint** (`#999999`): `tokens.colors.faint`. Inactive toggle labels, placeholder-grade text.
- **Pure Black** (`#000000`): `tokens.colors.black`. CTA label text on yellow/white buttons, and a true button background for dark emphasis CTAs.

#### Surface & Hairlines

- **Pure White** (`#ffffff`): `tokens.colors.canvas`. Page background, cards, plan CTA text.
- **Surface** (`#fafafa`): `tokens.colors.surface`. Soft grey panel and free-plan button fill.
- **Surface Alt** (`#f5f5f5`): `tokens.colors.surface-alt`. Step cards and the grey conversion-banner twin.
- **Hairline Faint** (`#f0f0f0`): `tokens.colors.hairline-faint`. Lightest border — selected toggle, grey banner.
- **Hairline** (`#e6e6e6`): `tokens.colors.hairline`. Standard card and input borders.
- **Table Line** (`#dddddd`): `tokens.colors.table-line`. Pricing comparison-table grid lines.
- **Hairline Strong** (`#cccccc`): `tokens.colors.hairline-strong`. Outlined secondary-CTA border.

#### Functional

- **Link Blue** (`#0000ee`): `tokens.colors.link`. Browser-default blue on underlined text links ("소개서 받기", "자세히 알아보기") — a site-wide Webflow quirk kept in production.
- **Error Red** (`#ff4d4f`): `tokens.colors.error`. Required-field marks and validation messaging on the 도입 문의 consult form.

YAML token note, as facts it names rather than as extra keys: primary = signature CTA yellow (`#fed05f`) with darker yellow border (`#ffc533`); pricing surface runs a parallel blue system (`#217aff` CTA, `#4b75e7` check marks, `#e2e9fe` column tint). Flat shadowless chrome, 6/8/12px radius ladder.

### Spacing

YAML `tokens.spacing` steps, recorded without a px suffix: `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 30` · `xxl: 36`. Source §5 writes the same scale with a unit: base unit 4px; measured scale 4px, 8px, 12px, 16px, 24px, 30px, 36px. Standard CTA padding is 12px 24px; the large conversion banner pads at 30px 36px. `tokens.spacing.xs: 4` is not a type size. `tokens.spacing.sm: 8` is not `tokens.rounded.md: 8` and not standard-CTA radius 8px. `tokens.spacing.md: 12` is not `tokens.rounded.lg: 12` and not banner radius 12px. `tokens.spacing.base: 16` is not body size 16px and not `tokens.rounded.xl: 16`. `tokens.spacing.lg: 24` is not the 24px tab-label size. `tokens.spacing.xl: 30` is the spacing step that the banner padding 30px 36px also uses; it is not a type size. `tokens.spacing.xxl: 36` is not subsection size 36px and not stepper/input geometry. Keeping those YAML steps unitless beside the source's own px list, not treating a spacing step as a type size, radius, or control height, and reading sticky-header 80px / standard-CTA 52px / compact-and-GOV 44px / stepper 38px as local captured geometry rather than as spacing-scale steps, is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.

Local captured geometry, not spacing-scale steps: sticky header 80px; standard CTA height 52px; header compact CTA height 44px; GOV table CTA height 44px; stepper height 38px.

### Shape

YAML `tokens.rounded` (unitless steps, kept on their own path): `sm: 6` · `md: 8` · `lg: 12` · `xl: 16` · `full: 100`.

- Small (6px): header compact CTAs, stepper inputs — YAML `tokens.rounded.sm`
- Medium (8px): standard CTAs, step cards, plan buttons — the workhorse — YAML `tokens.rounded.md`
- Large (12px): feature panels, conversion banners, feature sub-tabs — YAML `tokens.rounded.lg`
- XL (16px): occasional large media containers — YAML `tokens.rounded.xl`
- Pill (100px): pricing billing-toggle track only — YAML `tokens.rounded.full`

`tokens.rounded.md: 8` is not `tokens.spacing.sm: 8`. `tokens.rounded.lg: 12` is not `tokens.spacing.md: 12`. `tokens.rounded.xl: 16` is not `tokens.spacing.base: 16` and not body size 16px. `tokens.rounded.full: 100` is not a spacing step. Reading 6 / 8 / 12 / 16 / 100 as the source's radius ladder for those observed controls, with 8px the default for buttons and cards and 100px reserved for the billing-toggle track, is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.

### Elevation

YAML `tokens.shadow.none: "none"`.

| Level | Treatment | Use |
|---|---|---|
| Flat (Level 0) | No shadow | Everything — nav, cards, CTAs, pricing chrome |
| Tint (Level 1) | `#fafafa` / `#f5f5f5` / `#fff8e6` / `#e2e9fe` background shift | Panel and column separation |
| Hairline (Level 2) | 1px `#f0f0f0` → `#e6e6e6` → `#dddddd` → `#cccccc` | Cards, inputs, tables, outlined buttons |
| Color block (Level 3) | `#fed05f` / `#000000` / `#08236d` solid fills | CTAs and dark bands carry all the visual weight |

Modusign is a fully flat system — live inspection returned `box-shadow: none` on every nav, button, heading, card, and pricing element across the homepage, pricing, and features surfaces. Elevation is replaced by a four-step hairline ladder and tinted panels; when the design needs emphasis it reaches for a solid color block (yellow CTA, black button, dark customer band) rather than depth. This keeps the page light and print-like, and makes the yellow primary read even louder against the unshadowed white. Reading those four levels as the source's elevation record rather than as a drop-shadow scale, and the print-like / yellow-louder reading, are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

### Motion

The source attributes its token-level claims to a live inspection of computed color, type, spacing, radius, and shadow on the homepage, pricing, and features surfaces. The motion contract below sits outside that attribution: the source's own evidence note assigns the disabled-state and motion specifications as editorial readings extending the observed design system, not directly sourced Modusign statements, and names the §15 motion tokens as illustrative conventions consistent with the observed flat system. The durations, easing roles, and motion rules below are therefore a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

Durations:

| Token | Value | Use |
|---|---|---|
| `motion-fast` | 120ms | Hover, toggle, tab switch |
| `motion-standard` | 200ms | Card reveal, accordion, dropdown |
| `motion-slow` | 320ms | Section transitions, step-flow advance |

Easing roles — three roles with declared uses. The specific curve values the source lists are not traceable to Modusign evidence, so the curves are omitted here and only the roles and their uses are kept. Omitting those unattributed curve values as promoted numbers, and keeping only the easing role names and their uses, is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.

| Token | Use |
|---|---|
| `ease-enter` | Arriving — cards, panels, toasts |
| `ease-exit` | Dismissals |
| `ease-standard` | Two-way transitions (tabs, toggles) |

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition. Naming those five evidence kinds as the promotion gate, and refusing a partial confirmation, are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

Motion rules, as the source states them:

- Motion is utilitarian and sparse, matching the flat visual system — tab switches and the billing toggle slide at `motion-fast` / `ease-standard`; how-it-works step cards advance with a quiet fade at `motion-standard`.
- Nothing bounces: a legal-infrastructure product signals steadiness, not playfulness.
- The one permitted emphasis is the yellow CTA's hover, a brief background deepen toward `#ffc533` at `motion-fast`.
- Under `prefers-reduced-motion: reduce`, all transitions collapse to instant and the product remains fully functional.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The homepage, pricing, features, and official blog state the product and the brand. They do not publish a universal current typography token or a separately issued type specimen. |
| Live computed surface-use | Homepage, pricing, and features compute visible text as Pretendard. Body is Pretendard 16px / 400 / 1.60 on `#333333`. The 68px hero, 56px page H1, 45px H2, and 36px H3 compute Pretendard 700. |
| Official distributed asset | No Modusign-exclusive distributed type family was verified. |
| Declared-only | No additional declared-only family was recorded on the inspected surfaces. |
| License | This record does not establish a Modusign font-license notice for Pretendard. Pretendard is an upstream face, not a Modusign-owned brand asset. |

Reading those evidence-class rows as the source's resolution table rather than as a published Modusign type specimen, treating Pretendard as an upstream face rather than a Modusign-owned brand asset, keeping the "no published type token" reading, recording no exclusive distributed family, recording no additional declared-only family, and recording no Modusign font-license notice, are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

### Family

- **Single family:** `Pretendard` (with sans-serif fallback) for every role — display, body, UI, footer. No secondary or display font. Token-set path `tokens.typography.family.sans`.
- A fallback member of a stack is never presented as the brand face. Do not replace Pretendard with a system substitute.

Keeping Pretendard as the sole UI-family token on the three captured routes, treating the sans-serif fallback as a fallback rather than as the brand face, and refusing to mix a second display font, are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

### Type roles

YAML writes unitless sizes and (where present) unitless line heights, with `use` strings. Source §3 writes the same roles with px, rem, px line-height equivalents, and a longer Notes column. Both writings stay. Unitless ratios stay ratios and are never converted to a replacement px (A1a). Pairing each role to the token-set path named beside it, keeping YAML `use` strings verbatim in the Token-set use column, keeping the longer §3 Notes beside them, keeping Caption weight as YAML `400` beside §3 `400–500`, keeping Tab Label weight as YAML `700` beside §3 `700 active / 400 inactive`, and keeping `tokens.typography.display-hero.size` `68`, `tokens.typography.display.size` `56`, `tokens.typography.section.size` `45`, `tokens.typography.subsection.size` `36`, `tokens.typography.tab-label.size` `24`, `tokens.typography.sub-tab.size` `18`, `tokens.typography.body.size` `16`, `tokens.typography.button.size` `16`, `tokens.typography.button-sm.size` `14`, and `tokens.typography.caption.size` `14` off spacing and radius steps, is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Letter spacing | Token-set use | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Pretendard | 68 (68px / 4.25rem) | 700 | 1.40 (95.2px) | -1.2 / -1.2px | Homepage hero headline | Homepage hero only |
| Display | Pretendard | 56 (56px / 3.50rem) | 700 | 1.40 (78.4px) | -0.4 / -0.4px | Page/section H1 | Page/section H1 |
| Section | Pretendard | 45 (45px / 2.81rem) | 700 | 1.40 (63px) | -0.4 / -0.4px | Section H2 | Section H2 |
| Sub-section | Pretendard | 36 (36px / 2.25rem) | 700 | 1.40 (50.4px) | -0.4 / -0.4px | Feature block H3 | Feature block H3 |
| Tab Label | Pretendard | 24 (24px / 1.50rem) | 700 (YAML) / 700 active / 400 inactive (§3) | — | -0.4 / -0.4px | Industry/department section tabs | 산업별/부서별 tabs |
| Sub-tab | Pretendard | 18 (18px / 1.13rem) | 500 (YAML) / 500/400 (§3) | — | -0.4 / -0.4px | Feature sub-tabs | Feature sub-tabs |
| Body | Pretendard | 16 (16px / 1.00rem) | 400 | 1.60 (25.6px) | -0.4 / -0.4px | Standard reading text | Standard reading text |
| Button | Pretendard | 16 (16px / 1.00rem) | 700 | — | -0.4 / -0.4px | Hero/section CTA label | Hero/section CTA |
| Button Small | Pretendard | 14 (14px / 0.88rem) | 700 | — | -0.4 / -0.4px | Header compact CTA label | Header compact CTA |
| Caption | Pretendard | 14 (14px / 0.88rem) | 400 (YAML) / 400–500 (§3) | — | -0.4 / -0.4px | Footer links, fine print | Footer links, fine print |

Token-set paths: `tokens.typography.display-hero` · `display` · `section` · `subsection` · `tab-label` · `sub-tab` · `body` · `button` · `button-sm` · `caption`. `tokens.typography.subsection.size` `36` is not `tokens.spacing.xxl: 36`. `tokens.typography.body.size` `16` is not `tokens.spacing.base: 16` and not `tokens.rounded.xl: 16`. `tokens.typography.tab-label.size` `24` is not `tokens.spacing.lg: 24`. YAML tab-label and sub-tab and button and button-sm and caption have no lineHeight key; that absence is kept.

### Typography rules

The source states these four as its typography principles. Reading the measured metrics as those four source-stated principles — one family two weights, generous 1.4, global -0.4px tracking, size does the talking — is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.

- **One family, two weights**: Pretendard 700 for everything that asserts, 400 for everything that explains. 500 appears only on minor UI labels.
- **Generous 1.4 heading line-height**: multi-line Korean headlines breathe — taller than the compressed look common in KR fintech.
- **Global -0.4px tracking**: applied site-wide; only the 68px hero tightens further to -1.2px.
- **Size does the talking**: a steep 68 → 56 → 45 → 36 → 16 scale carries hierarchy without color or family changes.

### Assets

- Catalog identity points at `logo.type: favicon`, slug `https://www.google.com/s2/favicons?domain=modusign.co.kr&sz=128`. That pointer is a Google favicon-service URL, not a first-party file on `modusign.co.kr`. Treating it as identity metadata rather than as a Modusign-hosted mark is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.
- Product screenshots sit flat (no shadow) inside 8–12px-radius containers. The dark customer band keeps full-bleed treatment at all sizes. Keeping those screenshot and band treatments as the source's image-behavior writing, rather than as a separately published asset specification, is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source's state contract, preserved with its values and copy. The source's own evidence note assigns a source to its voice samples, its brand narrative, and its personas, and assigns the disabled-state and motion specifications as editorial readings extending the observed design system. The treatments below are stated at system level rather than measured per control.

| State | Treatment |
|---|---|
| **Empty (no documents yet)** | White canvas, one charcoal (`#333333`) sentence stating no contracts yet, and a single yellow `#fed05f` CTA to send the first signature request. No illustration noise. |
| **Empty (no search/filter results)** | Faint (`#999999`) single line with the active filter summary visible so the user can widen scope. |
| **Loading (dashboard/list)** | Flat skeleton bars on `#f5f5f5` at final row dimensions, 8px radius. No shimmer-shadow — flat pulse consistent with the shadowless system. |
| **Loading (pricing calculator)** | Inline recalculation; previous totals remain visible, never a blanked panel. |
| **Error (signature request failed)** | Inline `#ff4d4f` message naming the failed step and a plain-language fix, plus retry. Never a bare "오류가 발생했습니다". |
| **Error (form validation)** | Field-level `#ff4d4f` required marks and a message describing what a valid value is — matches the live 도입 문의 form pattern. |
| **Success (contract completed)** | Calm inline confirmation; the document row itself shows the completed status, with the audit-trail link immediately available. No confetti. |
| **Success (request sent)** | Brief toast, sentence case, past tense ("서명 요청을 보냈습니다"), auto-dismiss. |
| **Skeleton** | `#f5f5f5` blocks with `#e6e6e6` hairline edges at final dimensions, 8px radius. |
| **Disabled** | Labels drop to `#999999` on unchanged flat surfaces; the yellow CTA desaturates toward `#fff8e6` rather than turning grey, preserving the brand read. |

These rows stay as recorded treatments for the states they name. They are not attached as visual treatments to every marketing destination control below. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. The source records no `focus-visible` capture; no `focus-visible` row carries a treatment. Every kind verdict, every applicability verdict, and the reason given for either — including stating the §14 treatments at system level rather than measuring them per control, reading YAML `disabled` as an inactive label rather than as a disabled-state paint, attaching a `Primitive type` line only when the source YAML records that type on that component, refusing a §4-only component a borrowed type, treating 무료 체험 시작 / 도입 문의 / 고급 기능 문의 / 무료체험 신청 / 도입 문의하기 as destinations, treating 월 결제 / 1년 약정 as a billing toggle, treating 산업별 / 부서별 as tabs, treating the count stepper as a form field, and withholding kind and a map on YAML cards that supply no interaction evidence — is a derived editorial implementation inference from the verified surfaces; it is not Modusign-authored or a separately published UI specification. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component. The ten token-set records are `button-primary`, `button-secondary`, `button-dark`, `button-plan-blue`, `button-gov-navy`, `input-stepper`, `card-step`, `banner-cta`, `toggle-billing`, and `tab-industry`. Token-set paths: `tokens.components.button-primary` · `tokens.components.button-secondary` · `tokens.components.button-dark` · `tokens.components.button-plan-blue` · `tokens.components.button-gov-navy` · `tokens.components.input-stepper` · `tokens.components.card-step` · `tokens.components.banner-cta` · `tokens.components.toggle-billing` · `tokens.components.tab-industry`. Primary Compact, Free Plan, Feature Sub-tab, Navigation, and Text Links are §4 writings not in that token set.

### Primary (무료 체험 시작)

- Role: The yellow free-trial CTA — hero, section closers, footer banner
- Token-set use: 무료 체험 시작 — the signature yellow primary CTA
- Token-set path: `tokens.components.button-primary`
- Primitive type: `button` · Kind: interactive
- Background: `#fed05f`
- Text: `#000000`
- Border: 1px solid `#ffc533`
- Radius: 8px. YAML radius: `8px`
- Padding: 12px 24px. YAML padding: `12px 24px`
- Height: 52px. YAML height: `52px`
- Font: 16px / 700 / Pretendard. YAML font: `16px / 700 Pretendard`
- Observed: default on hero, section closers, footer banner
- Recorded hover (motion section, editorial): brief background deepen toward `#ffc533` at `motion-fast`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; recorded deepen toward `#ffc533` is the motion-section writing, not a computed hover harvest |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; recorded system-level treatment: yellow CTA desaturates toward `#fff8e6` rather than turning grey |
| loading | not-applicable | This control presents a free-trial destination; it does not commit an in-page operation whose in-progress state this button would report. |
| error | not-applicable | Same role reason: reaching that destination is not an operation with an error result this button would report. |
| success | not-applicable | Same role reason: reaching a trial destination is not an operation this button reports as success. |

### Secondary Outline (도입 문의)

- Role: Consult/sales CTA, always paired to the left of the yellow primary
- Token-set use: 도입 문의 — outlined secondary CTA, always paired with primary
- Token-set path: `tokens.components.button-secondary`
- Primitive type: `button` · Kind: interactive
- Background: `#ffffff`
- Text: `#000000`
- Border: 1px solid `#cccccc`
- Radius: 8px. YAML radius: `8px`
- Padding: 12px 24px. YAML padding: `12px 24px`
- Height: 52px. YAML height: `52px`
- Font: 16px / 700 / Pretendard. YAML font: `16px / 700 Pretendard`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry point whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control takes the reader to a consult destination; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | Destination role; the destination, not this button, reports failure. |
| success | not-applicable | Same role reason: reaching a consult destination is not an operation with a success result. |

### Dark Emphasis

- Role: Enterprise plan CTA, 고급 기능 문의
- Token-set use: Enterprise plan / 고급 기능 문의 emphasis CTA
- Token-set path: `tokens.components.button-dark`
- Primitive type: `button` · Kind: interactive
- Background: `#000000`
- Text: `#ffffff`
- Radius: 8px. YAML radius: `8px`
- Padding: 12px 24px. YAML padding: `12px 24px`
- Height: 52px. YAML height: `52px`
- Font: 16px / 700 / Pretendard. YAML font: `16px / 700 Pretendard`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | This control takes the reader to an enterprise or 고급 기능 문의 destination; it does not commit an in-page operation whose pending result this button would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this button would report. |
| success | not-applicable | Same role reason: reaching that destination is not an operation with a success result. |

### Plan Blue (pricing highlight)

- Role: 무료체험 신청 on the recommended plan card (column tinted `#e2e9fe`)
- Token-set use: Highlighted pricing plan CTA (무료체험 신청)
- Token-set path: `tokens.components.button-plan-blue`
- Primitive type: `button` · Kind: interactive
- Background: `#217aff`
- Text: `#ffffff`
- Radius: 8px. YAML radius: `8px`
- Padding: 12px 24px. YAML padding: `12px 24px`
- Height: 52px. YAML height: `52px`
- Font: 16px / 700 / Pretendard. YAML font: `16px / 700 Pretendard`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | This control presents a highlighted-plan trial destination; it does not commit an in-page operation whose in-progress state this button would report. |
| error | not-applicable | Same role reason: reaching that destination is not an operation with an error result this button would report. |
| success | not-applicable | Same role reason: reaching that destination is not an operation with a success result. |

### GOV Navy

- Role: 행정·공공기관 요금제 "도입 문의하기" in the comparison table
- Token-set use: 공공기관(GOV) 도입 문의하기 in comparison table
- Token-set path: `tokens.components.button-gov-navy`
- Primitive type: `button` · Kind: interactive
- Background: `#08236d`
- Text: `#ffffff`
- Radius: 8px. YAML radius: `8px`
- Padding: 8px 24px. YAML padding: `8px 24px`
- Height: 44px. YAML height: `44px`
- Font: 16px / 700 / Pretendard. YAML font: `16px / 700 Pretendard`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | This control takes the reader to a GOV 도입 문의하기 destination; it does not commit an in-page operation whose pending result this button would report. |
| error | not-applicable | Same role reason: choosing that destination is not an operation with an error result this button would report. |
| success | not-applicable | Same role reason: reaching that destination is not an operation with a success result. |

### Count Stepper (pricing)

- Role: Seat/document count input on the pricing calculator
- Token-set use: Pricing seat/document count input
- Token-set path: `tokens.components.input-stepper`
- Primitive type: `input` · Kind: interactive
- Background: `#ffffff`
- Text: `#222222`
- Border: 1px solid `#e6e6e6`
- Radius: 6px. YAML radius: `6px`
- Height: 38px. YAML height: `38px`
- Font: 16px / 400 / Pretendard. YAML font: `16px / 400 Pretendard`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Input control; visual treatment omitted |
| loading | not-applicable | This field holds a seat/document count. Inline recalculation is the pricing calculator's recorded loading treatment, not a pending commit this input reports. |
| error | applicable | Form field; recorded system-level treatment matches the live 도입 문의 form pattern at `#ff4d4f`. No per-control paint is given for this stepper. |
| success | not-applicable | A count field does not commit an operation whose success this input would report. |

### Step Card (active)

- Role: How-it-works step cards (문서 준비 → 서명 요청 → 계약 체결 → 계약 관리); inactive sibling is `#ffffff` with a white border
- Token-set use: How-it-works step card (active); inactive twin is #ffffff
- Token-set path: `tokens.components.card-step`
- Primitive type: `card`
- Background: `#f5f5f5`
- Text: `#222222`
- Border: 1px solid `#e6e6e6`
- Radius: 8px. YAML radius: `8px`
- Padding: 24px 24px 36px. YAML padding: `24px 24px 36px`

The source supplies no interaction evidence for this card, so kind and a state-applicability map are both withheld.

### Conversion Banner (yellow)

- Role: Footer "무료 체험 시작" banner; sits beside a grey twin (`#f5f5f5` bg, 1px `#f0f0f0` border)
- Token-set use: Footer conversion banner — yellow + grey twin pair
- Token-set path: `tokens.components.banner-cta`
- Primitive type: `card`
- Background: `#fed05f`
- Text: `#212121`
- Border: 1px solid `#ffb90a`
- Radius: 12px. YAML radius: `12px`
- Padding: 30px 36px. YAML padding: `30px 36px`

The source supplies no interaction evidence for this banner as a control, so kind and a state-applicability map are both withheld.

### Billing Toggle (pricing)

- Role: 월 결제 / 1년 약정(~50% 할인) billing switch
- Token-set use: Pricing 월 결제 / 1년 약정 billing toggle
- Token-set path: `tokens.components.toggle-billing`
- Primitive type: `tab` · Kind: interactive
- Active: white `#ffffff` bg, `#333333` text, 700 weight, 8px radius, 1px solid `#f0f0f0`. YAML active: `bg #ffffff + text #333333 700 + 1px #f0f0f0 border, 8px radius`
- Inactive: transparent on a 100px pill track, `#999999` text, 400 weight. YAML disabled (inactive label): `#999999 inactive label on 100px pill`
- Font: 16px / Pretendard
- YAML `disabled` names the inactive label on the 100px pill; it is not a disabled-state paint for the control.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared active/inactive treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A billing switch whose availability can lapse; visual treatment omitted. The YAML inactive label is not this row. |
| loading | not-applicable | This control switches 월 결제 / 1년 약정; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | Tab/toggle role; choosing a billing period is not an operation with an error result this control would report. |
| success | not-applicable | Same role reason: switching billing period is not an operation with a success result. |

### Industry Tabs (dark band)

- Role: 산업별 / 부서별 customer-case tabs on the dark section
- Token-set use: 산업별/부서별 tabs on dark customer band
- Token-set path: `tokens.components.tab-industry`
- Primitive type: `tab` · Kind: interactive
- Active: `#ffffff` text, 700 weight. YAML active: `text #ffffff + 700 weight`
- Inactive: `#474747` text, 400 weight. YAML disabled (inactive label): `#474747 inactive label`
- Radius: 8px
- Font: 24px / Pretendard
- YAML `disabled` names the inactive label; it is not a disabled-state paint for the control.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared active/inactive treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination tab whose availability can lapse; visual treatment omitted. The YAML inactive label is not this row. |
| loading | not-applicable | This item is a destination tab; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | Destination tab; the destination, not the item, reports failure. |
| success | not-applicable | Same role reason: reaching a tab destination is not an operation with a success result. |

### Primary Compact (header)

- Role: Sticky-header CTA pair, right-aligned. Not in the token set.
- Background: `#fed05f`
- Text: `#000000`
- Border: 1px solid `#ffc533`
- Radius: 6px
- Padding: 8px 16px
- Height: 44px
- Font: 14px / 700 / Pretendard
- Kind: interactive

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; recorded system-level yellow desaturation toward `#fff8e6` applies at system level; no compact-specific paint is given |
| loading | not-applicable | Header 무료 체험 시작 is a free-trial destination; it does not commit an in-page operation whose in-progress state this button would report. |
| error | not-applicable | Same role reason: reaching that destination is not an operation with an error result this button would report. |
| success | not-applicable | Same role reason: reaching a trial destination is not an operation this button reports as success. |

### Free Plan

- Role: Free-tier plan CTA. Not in the token set.
- Background: `#fafafa`
- Text: `#212121`
- Border: 1px solid `#999999`
- Radius: 8px
- Padding: 12px 24px
- Height: 52px
- Font: 16px / 700 / Pretendard
- Kind: interactive

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | This control presents a free-tier destination; it does not commit an in-page operation whose in-progress state this button would report. |
| error | not-applicable | Same role reason: reaching that destination is not an operation with an error result this button would report. |
| success | not-applicable | Same role reason: reaching that destination is not an operation with a success result. |

### Feature Sub-tab

- Role: 계약 준비 / 체결 / 관리 feature switcher on /features. Not in the token set.
- Background: `#ffffff` (selected card)
- Text: `#5c5c5c`
- Radius: 12px
- Padding: 16px
- Font: 18px / Pretendard
- Kind: interactive

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web tab; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A feature switcher whose availability can lapse; visual treatment omitted |
| loading | not-applicable | This control switches 계약 준비 / 체결 / 관리; it does not commit an operation whose in-progress state it could report. |
| error | not-applicable | Tab role; choosing a feature panel is not an operation with an error result this control would report. |
| success | not-applicable | Same role reason: switching a feature panel is not an operation with a success result. |

### Navigation

- Role: White sticky header, 80px tall, no shadow. Not in the token set.
- Links: Pretendard 16px / 400, `#000000` text, 8px 16px padding
- CTA pair right-aligned: outlined 도입 문의 + yellow 무료 체험 시작 (compact 6px-radius variants)
- Kind: interactive (header links)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination item whose availability can lapse; visual treatment omitted |
| loading | not-applicable | Header links are destination links; they do not commit an operation whose in-progress state they could report. |
| error | not-applicable | Destination link; the destination, not the item, reports failure. |
| success | not-applicable | Same role reason: reaching a nav destination is not an operation with a success result. |

### Text Links

- Role: Inline "자세히 알아보기", "소개서 받기", GOV plan links — kept unstyled site-wide. Not in the token set.
- Color: `#0000ee` (browser-default blue), underlined
- Kind: interactive

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | These are destination links; they do not commit an operation whose in-progress state they could report. |
| error | not-applicable | Destination link; the destination, not the link, reports failure. |
| success | not-applicable | Same role reason: reaching a destination is not an operation with a success result. |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Centered single-column hero with the 68px headline and a paired CTA row beneath
- How-it-works flows as a 4-step horizontal card row (8px-radius cards, active step tinted grey)
- Customer-case section runs as a dark full-width band with white-text tabs
- Pricing is a classic plan-card row over a long hairline comparison table (`#dddddd` grid lines), with the recommended column tinted `#e2e9fe`
- Footer conversion area is a side-by-side banner pair: grey consult banner + yellow trial banner
- Spacing restated from `tokens.spacing`: 4 / 8 / 12 / 16 / 24 / 30 / 36
- Shape restated from `tokens.rounded`: compact 6 · workhorse 8 · panels 12 · media 16 · billing-toggle pill 100

Whitespace philosophy, as the source states it:

- **Conversion-first rhythm**: every scroll-depth ends in a CTA pair; whitespace exists to frame the next yellow button.
- **Flat segmentation**: sections alternate white, soft grey (`#fafafa`), and dark bands; no shadows anywhere — separation is tint and hairline.
- **Dense where it sells, airy where it persuades**: the pricing comparison table is tightly gridded while marketing sections keep generous 1.4 line-height headlines and wide gaps.

Reading the hero as conversion-first, reading bands as flat segmentation by tint and hairline, and reading pricing as dense-where-it-sells, are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification.

Responsive behavior. The source's live inspection was run as a desktop computed-style pass, and its own evidence note attributes token-level claims to that inspection; the breakpoints, collapsing strategy, image behavior, and the source's "comfortably tappable" reading of the recorded target sizes are stated by the source at system level rather than measured across viewports, so they are a derived editorial implementation inference from the verified surfaces and are not Modusign-authored or a separately published UI specification.

| Name | Width | Key Changes |
|---|---|---|
| Mobile | <640px | Single column, hero scales down, CTA pair stacks |
| Tablet | 640–1024px | 2-up step cards, condensed nav |
| Desktop | 1024–1440px | Full layout, 4-step card row, side-by-side banners |

Touch targets the source records: standard CTAs at 52px height with 12px 24px padding; header compact CTAs at 44px height; pricing table CTAs at 44px height with 8px 24px padding.

Collapsing strategy, as the source states it:

- Hero: 68px headline compresses on mobile, weight 700 and dark ink maintained
- Step cards: 4-across → stacked vertical flow
- Pricing comparison table: horizontal scroll on narrow viewports
- Footer banner pair: side-by-side → stacked, yellow banner last (closest to thumb)

Image behavior: product screenshots sit flat (no shadow) inside 8–12px-radius containers. The dark customer band keeps full-bleed treatment at all sizes.

<!-- design-md:section content-locales -->
## 6. Content & Locales

The source characterizes Modusign's voice as **direct, rank-claiming, and reassuring** — a market leader that states its position as plain fact ("국내 1위 전자서명") and then immediately lowers the barrier to entry ("무료 체험 시작"). Copy is short, declarative Korean with almost no English loanword decoration; the product explains contracts, a stressful legal domain, in the language of completion and relief: 시작부터 끝까지, 한번에. There is no exclamation-mark hype — confidence is carried by superlatives that are verifiable claims (업계 최다 고객) rather than adjectives. That characterization, that register reading, the tone table below, and the forbidden-register paragraph are a derived editorial implementation inference from the verified surfaces; they are not Modusign-authored or a separately published UI specification. The Korean lines themselves are live homepage and features copy.

| Context | Tone |
|---|---|
| Hero headlines | Rank-as-fact + universal scope. "서명이 필요한 모든 곳에 국내 1위 전자서명 모두싸인." |
| Feature copy | Completion-framed, end-to-end. "계약의 시작부터 끝까지, 모두싸인으로." |
| CTAs | Low-friction imperatives. "무료 체험 시작", "도입 문의", "맞춤 상담 받기". |
| Trust/legal copy | Sober and concrete. "법적 효력 및 강력한 보안" — states the guarantee, no drama. |
| Blog/guides | Practical advisor voice — HR/legal how-tos, case studies, checklists. |
| Customer proof | Numbers do the talking: industries, departments, customer counts. |

**Voice samples (verbatim from live site, 2026-06-10):**

- "서명이 필요한 모든 곳에 국내 1위 전자서명 모두싸인" — homepage hero H1 (rank-as-fact + universal scope).
- "계약의 시작부터 끝까지, 모두싸인으로" — features page H1 (end-to-end completion promise).
- "계약 준비, 체결, 관리를 한번에" — features H2 (workflow compression into one tool).
- "모든 산업 및 부서에서 이용하고 있습니다" — homepage section H1 (ubiquity as social proof).

Further published strings the source records on the inspected surfaces, kept byte-exact:

- 무료 체험 시작
- 도입 문의
- 맞춤 상담 받기
- 고급 기능 문의
- 무료체험 신청
- 도입 문의하기
- 행정·공공기관 요금제
- 소개서 받기
- 자세히 알아보기
- 월 결제
- 1년 약정(~50% 할인)
- 산업별
- 부서별
- 계약 준비 / 체결 / 관리
- 문서 준비 → 서명 요청 → 계약 체결 → 계약 관리
- 서명 요청을 보냈습니다
- 법적 효력 및 강력한 보안
- 국내 1위
- 업계 최다 고객
- 모두싸인 캐비닛
- 연동형
- "계약이 모두에게 더 간편하고 안전할 수 있도록 바꾼다"
- "계약의 표준이 된다"
- "전자계약 넘어 AI 기반 CLM으로 확장할 것"

**Forbidden register**: exclamation-heavy urgency, fear-based legal threats ("계약서 잘못 쓰면 큰일 납니다"), untranslated legalese left unexplained, discount-mall promotion tone on the core product. Never a bare "오류가 발생했습니다".

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

These are unnamed values, not permissions to invent. The source records no conflict among its own Tier 1 values.

- **Exact easing curves.** Three easing roles and their uses are established; the curve values are omitted because they are not traceable to Modusign evidence. Promote a curve for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **focus-visible visual treatments.** Interactive controls keep `focus-visible` applicable; no paint is given.
- **The disabled yellow mix.** The system states that the yellow CTA desaturates toward `#fff8e6` rather than turning grey, without naming an opacity or mix ratio.
- **The skeleton pulse.** The system declares `#f5f5f5` blocks with `#e6e6e6` hairline edges at final dimensions and 8px radius, with a flat pulse, without naming the pulse's duration or opacity range.
