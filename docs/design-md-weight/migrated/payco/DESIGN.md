# PAYCO Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

PAYCO is South Korea's everyday fintech super-app — combining payment, points, financial services, and document storage in one red-branded platform operated by NHN PAYCO. This contract covers the first-party homepage HTML at `https://www.payco.com` and the production CSS bundle at `https://www.payco.com/share/css/common.css?1778564615926` (full CSS bundle, 398 KB), inspected 2026-06-03. YAML `tokens.source` is `prose-derived`. Every value stays attached to the surface or section that established it. Reading those two inspected files as this contract's token surfaces, keeping values attached to the surface or section that established them, and treating `tokens.source: prose-derived` as the source's extraction class rather than as a published PAYCO token sheet, are derived editorial implementation inferences from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

The captured interface layer is a high-contrast red-and-white foundation. The vivid brand red (`#FF2233`, CSS custom property `--brand-color`) anchors every primary action — sidebar headers, CTA buttons, active navigation underlines — against a clean white canvas (`#ffffff`). Dark charcoal (`#2a303a`) carries all body copy, keeping legibility sharp on white surfaces. Secondary UI chrome falls into neutral greys and off-whites, so the brand red always reads as a call to action. The hex values, the custom-property name, and the sidebar / CTA / underline uses are recorded. Calling that foundation a projection of urgency, confidence, and accessibility; calling the red-on-white pairing an energetic rhythm without visual clutter; calling the atmosphere functional and trustworthy; reading that nothing extraneous competes with the moment of payment or redemption; and reading the red as a signal that speed and benefit are always one tap away, are derived editorial implementation inferences from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. PAYCO launched in 2015 under NHN (formerly NHN Entertainment, the company behind Hangame and NAVER's early gaming arm), aiming to consolidate the fragmented Korean payment landscape into a single mobile wallet. Rather than targeting power users, the service centred on the mass consumer's everyday inconveniences — small purchases, loyalty point management, transit payments — and built trust by linking to users' existing bank accounts without requiring a new card. The brand's current mission is captured in the homepage OG description: "실속있는 포인트, 편리한 결제, 간편한 금융, 안전한 전자문서함" — practical points, convenient payment, simple finance, secure digital document storage. This four-part mission reflects PAYCO's evolution from a pure payments app into a life-services super-app: the 페이코 라이프 (PAYCO Life) positioning introduced on the homepage signals that the brand sees itself as a utility layer across employment (office meal vouchers, campus IDs), commerce, and government-facing document exchange. NHN PAYCO operates the service as a subsidiary of NHN, and the product's visual language — dominated by the vivid brand red, clean white surfaces, and tight typographic scale — deliberately contrasts with the clutter of legacy Korean fintech apps. The tagline "일상의 빈틈을 채우다" (Fill the gaps in your daily life) positions PAYCO as a background enabler: always available, never intrusive, and genuinely useful in the uncovered corners of everyday life. The year 2015, the NHN / NHN Entertainment / Hangame / NAVER early-gaming-arm line, the single-mobile-wallet aim, the mass-consumer sentence and its closing bank-account clause, the OG four-part mission, the 페이코 라이프 positioning and the employment / commerce / government-facing clause, the NHN PAYCO subsidiary sentence, the contrast with legacy Korean fintech clutter, and that closing tagline sentence are the source's own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-mission narrative as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product's primary tasks, and taking them from the inspected homepage and CSS controls rather than from the source's persona section, is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification. Each names a surface or control the source records. They do not come from the source's persona section.

- Read the homepage OG line “실속있는 포인트, 편리한 결제, 간편한 금융, 안전한 전자문서함” on `https://www.payco.com`.
- Use the primary page-level CTA (`.bn_big`, 198×48px, 18px / 700) on that homepage.
- Use the Standard Input (inp) (32px height, padding-left 20px, border 1px solid `#d4d4d4`) on that homepage.
<!-- design-md:claim-end -->

### Audience

No individual personas are promoted. The source labels its named figures as illustrative archetypes synthesised from PAYCO's stated service areas and public product positioning, so those biographies are dropped rather than promoted, and no name, motivation, or affiliation classification is carried into this document or its sidecar. What the source independently records, in its own wording, is the audience at a group level: the mass consumer rather than power users. Refusing to promote individual personas, and reading that source-named group as this product's audience, are derived editorial implementation inferences from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

- Brand red `#FF2233` (`--brand-color`) as the canonical primary, retained beside legacy red `#ff1414`
- White canvas `#ffffff` with body copy in `#2a303a`
- NotoSans (NotoSans KR) for promotional and section heading copy; `'Pretendard Variable'` for newer refund and transaction screens; legacy `'Apple SD Gothic Neo', NanumGothic, ng, dotum, Helvetica, sans-serif` for body, inputs, buttons
- Desktop content width 1026px centred (`.wrap { width: 1026px; margin: 0 auto }`)
- Flat surfaces; the measured panel shadow is `0 1px 0 rgba(0,0,0,0.1)` / `0 1px 0 rgba(0,0,0,.1)` on `.ly_panel_cont`
- Active GNB bottom underline 4px solid `#ff1414`

### Principles

These 5 items are a derived editorial implementation inference from the verified surfaces; they are not PAYCO-authored or a separately published UI specification. The source states them in its own Principles section together with the UI implication it draws from each.

1. **Simplicity over completeness.** Every flow should reduce friction to its minimum. *UI implication:* Prefer single-action screens; hide advanced options behind progressive disclosure rather than exposing all settings upfront.
2. **Trust through transparency.** Users are handling money and documents; every state must be communicated clearly. *UI implication:* Show explicit confirmation dialogs, unambiguous success screens, and honest error messages with recovery paths.
3. **Reliability at every touchpoint.** PAYCO must work first time, every time, for every demographic. *UI implication:* Design for the lowest-common-denominator device; never depend on hover states for critical information.
4. **Everyday relevance.** Benefits and points should feel attainable, not aspirational. *UI implication:* Surface accumulated points and savings prominently in personalised dashboards; use concrete numbers rather than percentages.
5. **Brand clarity under load.** In dense data screens (transaction lists, coupon grids), brand red must remain a signal, not decoration. *UI implication:* Reserve `#FF2233` for primary CTAs and alert states only; use neutral greys for all listing chrome.

### Application rules

The source states these six as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

- Use `#FF2233` exclusively for primary CTAs, active states, and brand emphasis to maintain hierarchy
- Set body text in `#2a303a` on white for maximum legibility
- Use NotoSans (KR) for promotional and section heading copy; use Pretendard Variable for newer transactional screens
- Apply the 1px solid `#d4d4d4` border on all inputs at rest state
- Use the `bn_big` sizing (198×48px, 18px/700) for primary page-level call-to-action buttons
- Keep content within the 1026px centred wrapper on desktop

### Avoid

The source states these five as its Don't list. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

- Don't introduce additional brand colours outside the measured palette without alignment
- Don't use the brand red `#FF2233` for body text or non-actionable elements — it triggers urgency
- Don't omit the disabled state styling (`#dadada` / `#aaacae`) when rendering inactive buttons
- Don't mix Pretendard Variable and legacy `'Apple SD Gothic Neo'` stacks in the same component context
- Don't override the 4px GNB bottom border or the sidebar red header — these are structural brand anchors

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

Role names below follow the source's §2 labels and YAML keys. Pairing each hex to the token-set path named beside it, taking those role names from the source's own labels, keeping `tokens.colors.canvas` `#ffffff` off `tokens.colors.on-primary` `#ffffff`, keeping `#FF2233` as `tokens.colors.primary` and as `--brand-color` rather than as `tokens.colors.primary-legacy` `#ff1414`, keeping `#2d2d2d` (`tokens.colors.heading`) off `#2a303a` (`tokens.colors.body`), keeping YAML `#666666` beside body `#666` / `#666666`, keeping YAML `#999999` beside body `#999` / `#999999`, recording `#f4f4f4` as the §9 info-panel writing rather than as a YAML `tokens.colors.*` key, and attaching every role to the homepage/CSS observation rather than relabeling a homepage value as a token for every PAYCO surface, are derived editorial implementation inferences from the verified surfaces; they are not PAYCO-authored or a separately published UI specification. The hex values and recorded uses are the source's own. `#FF2233` (CSS `:root --brand-color`) and `#ff1414` (legacy GNB border) coexist; `#FF2233` is the canonical brand red per the custom property declaration.

- **Brand Red** (`#FF2233`): primary brand color; buttons, active nav, sidebar headers, emphasis text (CSS custom property `--brand-color`). Token-set path `tokens.colors.primary`. Catalog `primary_color` is this same hex.
- **Legacy Red** (`#ff1414`): GNB bottom border, hover states, point figures; retained alongside brand red for legacy components. Token-set path `tokens.colors.primary-legacy`.
- **Body Dark** (`#2a303a`): primary text, body copy, nav link default. Token-set path `tokens.colors.body`.
- **Off-Black** (`#2d2d2d`): secondary headings, dense data text. Token-set path `tokens.colors.heading`.
- **Mid Grey** (`#666666` / `#666`): secondary body text, input value text. Token-set path `tokens.colors.muted`.
- **Placeholder Grey** (`#999999` / `#999`): input placeholder, tertiary labels. Token-set path `tokens.colors.placeholder`.
- **Secondary** (`#565960`): YAML `tokens.colors.secondary`; Dark Secondary Button fill; page-level error heading.
- **Light Neutral** (`#f4f6fa`): surface background for cards and section washes. Token-set path `tokens.colors.surface`.
- **Divider** (`#ededed`): table borders, section dividers. Token-set path `tokens.colors.divider`.
- **Input Border** (`#d4d4d4`): form field outlines at rest. Token-set path `tokens.colors.border`.
- **Disabled Surface** (`#dadada`): disabled button background. Token-set path `tokens.colors.disabled-bg`.
- **Disabled Text** (`#aaacae`): disabled button label. Token-set path `tokens.colors.disabled-text`.
- **White / Canvas** (`#ffffff` / `#fff`): page background, card fill, button fill (ghost/secondary). Token-set path `tokens.colors.canvas`.
- **On-primary** (`#ffffff`): YAML `tokens.colors.on-primary`; primary-button label. This key is not `tokens.colors.canvas`.

§9 also records info panels as `#f4f4f4`. That writing is not a YAML `tokens.colors.*` key.

Nav-link color `#191919` is a §3 body writing; it is not a YAML `tokens.colors.*` key. Ghost-button §4 text `#191a1c` is not YAML `tokens.components.button-ghost.fg` `#2d2d2d`. Keeping nav-link `#191919` off the YAML color keys, and keeping ghost-button §4 `#191a1c` beside YAML `button-ghost.fg` `#2d2d2d` rather than collapsing the two writings, are derived editorial implementation inferences from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| xs | 10 | `tokens.spacing.xs` |
| sm | 20 | `tokens.spacing.sm` |
| md | 25 | `tokens.spacing.md` |
| base | 32 | `tokens.spacing.base` |
| lg | 48 | `tokens.spacing.lg` |
| xl | 115 | `tokens.spacing.xl` |
| section | 159 | `tokens.spacing.section` |

`tokens.spacing.xs: 10` is not the `10px` in modern-CTA padding `16px 10px`. `tokens.spacing.sm: 20` is not the input `padding-left: 20px` / YAML `0 0 0 20px`. `tokens.spacing.md: 25` is not the service-tab `25px` spacing between items, even though both writings use 25. `tokens.spacing.base: 32` is not the input height `32px` and not hero-subtext line-height `32px`. `tokens.spacing.lg: 48` is not the `.bn_big` height `48px` and not large-button line-height `48px`. `tokens.spacing.xl: 115` is not the subsequent-section `115px` padding, even though both writings use 115. `tokens.spacing.section: 159` is not the first-section `159px` top padding, even though both writings use 159. Keeping each number on its own key path, rather than treating a shared numeral as the same token, is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded`, unitless steps as the YAML recorded them.

| Step | Value | Token-set path |
|---|---:|---|
| sm | 8 | `tokens.rounded.sm` |
| md | 20 | `tokens.rounded.md` |
| lg | 100 | `tokens.rounded.lg` |
| full | 9999 | `tokens.rounded.full` |

§9 records the same steps as uses: 8px for modern CTAs; 20px–100px for pill badges/tags; flat (0) for legacy button variants. `tokens.rounded.sm: 8` is not `tokens.components.button-cta-modern.radius: 8px` written as a spacing step; both writings stay. `tokens.rounded.md: 20` is not `tokens.spacing.sm: 20`. `tokens.rounded.lg: 100` is not a spacing step. `tokens.rounded.full: 9999` is a YAML rounded key; the source does not attach a component radius to it. YAML `tokens.components.input-standard.radius` is `0px`; that 0 is the input's radius, not a YAML `tokens.rounded.*` key. Keeping those local radii on their components, keeping each YAML step on its own key path, and keeping the §9 pill / legacy-flat uses beside the YAML steps, is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification.

### Elevation

Flat surfaces dominate: cards and panels use 1px border or background colour shift rather than drop shadows. Panel dropdowns use subtle shadow: YAML `tokens.shadow.panel` `0 1px 0 rgba(0,0,0,0.1)` and §6 `box-shadow: 0 1px 0 rgba(0,0,0,.1)` (`.ly_panel_cont`). Modal overlay uses full-screen dimmed layer: `background: #000; opacity: .7` (`.dimmed`). z-index layering: skip link 120, sticky nav 99, date picker 100, modal 100+. Active GNB bottom underline: 4px solid `#ff1414` — the heaviest border accent in the system. Reading that stack as flat observed layering plus one panel shadow, one dimmed overlay, the z-index list, and the GNB underline, rather than as a general elevation ladder, is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification.

### Motion

- **Navigation indicator:** `transition: width 0.5s` — the `fp_nav` active underline expands from 0 to 100% width; easing unspecified (browser default ease).
- **Transform usage:** `transform: translate(-50%, -50%)` for absolute centring of hero image and modals; `transform: translateY(-50%)` for vertically centred inline elements — all used for layout, not animation.
- **Page scroll:** `fp_nav` transitions between absolute and fixed positioning on scroll; no explicit scroll-animation timing defined.
- **General rule:** Transitions are minimal and functional; the brand does not use decorative motion. Duration scale: 0.5s for page-level indicator; shorter interactions implied by browser defaults.
- **Easing intent:** Flat ease (browser default) for all measured transitions; no cubic-bezier custom curves found in the CSS bundle.

The 0.5s duration, the `width` transition property, the layout-only transform sentences, and the no-cubic-bezier sentence are the source's own. Treating those as the measured motion record rather than as a default curve, and requiring the five-kind gate below before promoting any exact curve, are derived editorial implementation inferences from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

An exact curve may be promoted for a component only after that component's own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed. A partial confirmation — one curve read off one element, or a match against an official framework or vendor document — does not satisfy that condition.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Live computed surface-use | **NotoSans** (NotoSans KR), weights 100–700, used in service sections, navigation, and promotional copy. **`'Pretendard Variable'`**, weights 400/500/700, used in modern refund and transaction screens. |
| Declared / legacy base stack | `'Apple SD Gothic Neo', NanumGothic, ng, dotum, Helvetica, sans-serif`; applies to body, inputs, buttons. YAML `tokens.typography.family.sans` is `NotoSans`. YAML `tokens.typography.family.mono` is `monospace`. |

Reading NotoSans as the promotional/section family, reading `'Pretendard Variable'` as the newer-flow family rather than as `tokens.typography.family.sans`, reading the Apple SD Gothic Neo stack as the legacy base rather than as a substitute for NotoSans or Pretendard, and keeping `monospace` on `tokens.typography.family.mono`, are derived editorial implementation inferences from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

### Family

- **sans:** `NotoSans` — Token-set path `tokens.typography.family.sans`. Source also writes NotoSans KR, weights 100–700.
- **Newer flows:** `'Pretendard Variable'`, weights 400/500/700. This is a §3 family, not a YAML `tokens.typography.family.*` key.
- **Base stack (legacy):** `'Apple SD Gothic Neo', NanumGothic, ng, dotum, Helvetica, sans-serif`.
- **mono:** `monospace` — Token-set path `tokens.typography.family.mono`.

Do not replace NotoSans or `'Pretendard Variable'` with a system substitute, and do not present the legacy stack as NotoSans or Pretendard. Don't mix Pretendard Variable and legacy `'Apple SD Gothic Neo'` stacks in the same component context. That fallback prohibition is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification.

### Type roles

YAML unitless line heights stay ratios (A1a). The parenthetical px figures are the source §3 spelling, not a replacement of the YAML ratio. Token-set `use` strings are kept verbatim. YAML `hero` `use` is `Hero / section titles`; §3 splits that key into `.kv_heading` (`#fff`, tracking −0.56px) and `.main_title` (`#000`). Keeping YAML line heights as unitless ratios, keeping the YAML singles and the §3 px / color / selector spellings on separate readings, and keeping `tokens.typography.body.size` `16` off `tokens.spacing` and off input height `32px`, are derived editorial implementation inferences from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

| Role | Font | Size | Weight | Line height | Tracking | Token-set use | §3 spelling |
|---|---|---:|---:|---|---|---|---|
| Hero / section titles | NotoSans | 52 | 700 | — | `-0.56` | Hero / section titles | `.kv_heading` 52px / 700 / color `#fff` / letter-spacing −0.56px; `.main_title` 52px / 700 / color `#000` |
| Section subtitles | NotoSans | 32 | 400 | 1.56 (50px) | — | Section subtitles | `.sub_title` 32px / 400 / color `#000` / line-height 50px |
| Navigation links | NotoSans | 24 | 300 | — | — | Navigation links | 24px / 300 / NotoSans / color `#191919` |
| Hero subtext | NotoSans | 24 | 300 | 1.33 (32px) | — | Hero subtext | `.kv_text` 24px / 300 / color `#fff` / line-height 32px |
| Large button label | — | 18 | 700 | — | — | Large button label | `.bn_big *` 18px / 700 / line-height 48px |
| Standard body text | legacy stack | 16 | 400 | 1.27 | `-1` / −1px | Standard body text | Base size 16px; line-height 1.27; letter-spacing −1px (body) |
| Medium button label | — | 13 | 700 | — | — | Medium button label | `.bn_l *` 13px / 700 / line-height 39px |
| Input value text | — | 12 | 400 | — | — | Input value text | 12px |

`tokens.typography.hero.size` `52` is not a spacing step. `tokens.typography.section-sub.size` `32` is not `tokens.spacing.base: 32`. `tokens.typography.nav.size` `24` is not `tokens.typography.subtext.size` `24` — two YAML keys share 24. `tokens.typography.button-lg.size` `18` is not a spacing step. `tokens.typography.body.size` `16` is not a spacing step. `tokens.typography.button-md.size` `13` is not the page-level error body `13px`. `tokens.typography.input.size` `12` is not the inline-error `12px`. Keeping each YAML type-role size on its own key path — `hero` 52 and `button-lg` 18 off spacing, `section-sub` 32 off `tokens.spacing.base`, `nav` 24 off `subtext` 24, `button-md` 13 off the page-level error body 13px, and `input` 12 off the inline-error 12px — is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification.

### Assets

- Catalog logo entry: favicon `https://www.google.com/s2/favicons?domain=payco.com&sz=256`. Reading that URL as a catalog identity pointer rather than as an NHN PAYCO-hosted brand file is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

Source §14, preserved while the catalog graph is not adopted — that preservation, rather than treating the capture as incomplete until a catalog graph exists, is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification:

- **Empty:** Grey centre-aligned text `#999` with a descriptive label; no brand-red elements to avoid false urgency in zero-data screens
- **Loading (spinner):** 22×22px animated sprite (`.sp_load`) absolutely centred on the container; background image from CDN; grey tones to avoid distraction
- **Loading (image):** 30×30px animated gif (`.img_loading`) centred in column headers or card panels; separate assets for dark and light panel backgrounds
- **Error (page-level):** Full-width white overlay with centred error illustration, 24px `#565960` heading, 13px `#666` body text, and a single recovery CTA button; brand-red used only in the recovery link (`.error .desc a`)
- **Error (inline):** `#FF2233` caution text (`.caution`, `.confirm`) at 12px directly below the affected field
- **Success:** Implicit via forward navigation; no dedicated success-screen pattern found in CSS — completion is signalled by routing to next step
- **Skeleton:** No explicit skeleton-loading CSS found; loading spinners serve this role
- **Disabled:** Background `#dadada`, border `#d2d2d2`, text `#aaacae`; cursor:default implied; interactive events suppressed

The following applicability note, every interactive-kind verdict, every applicability verdict, the reason given for either, attaching a YAML `Primitive type` only when the token set records that type on that component, treating YAML `button-disabled` as a disabled treatment recipe rather than a fifth interactive component with its own map, keeping each control's padding, radius, height, and hex on that control rather than as a spacing-scale rewrite, keeping YAML `fg` / `padding` / `font` / `use` beside the longer §4 border and text writings, and the refusal to treat this as a complete state-coverage claim are a derived editorial implementation inference from the verified surfaces; they are not PAYCO-authored or a separately published UI specification. Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted where this packet holds no value for that same canonical state. Absence of a capture is not a `not-applicable` reason. Loading, error, and success follow each control's product role rather than its primitive kind. This is not a complete state-coverage claim.

A `Primitive type` line is attached only when the source YAML records that type on that component.

### Primary Brand Button (bn_big + brand color)

- Role: Primary page-level CTA
- Primitive type: `button` · YAML `tokens.components.button-primary.type: button` · Kind: interactive
- Background: `#FF2233`
- Text: `#ffffff`
- Border: 1px solid `#FF2233` (§4). YAML does not record a border field on this key.
- Height: 48px
- Padding: YAML `0 0`
- Font: YAML `18px / 700` · §4 18px / 700 · `.bn_big *` line-height 48px
- Token-set use: `Primary page-level CTA, 48px height`
- YAML fields: `type`, `bg`, `fg`, `padding`, `font`, `use`
- The 48px height is this control's geometry, not `tokens.spacing.lg: 48`. The YAML padding `0 0` is this control's padding. The `bn_big` sizing 198×48px is the §7 / §9 writing, not a YAML spacing key.

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted. Source `#ff1414` hover states are the legacy-red role, not this button's hover paint |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | YAML `button-disabled` plus §14 Disabled; recipe below |
| loading | not-applicable | A public page-level CTA on the inspected homepage; it commits no in-place operation whose progress this control reports. Container loading is `.sp_load` / `.img_loading` |
| error | not-applicable | Page-level error is the white overlay; inline caution sits on the field, not on this button |
| success | not-applicable | Completion is signalled by routing to the next step; no success paint is named on this button |

### Dark Secondary Button (bn_bk)

- Role: Dark secondary action
- Primitive type: `button` · YAML `tokens.components.button-secondary.type: button` · Kind: interactive
- Background: `#565960` · YAML `tokens.components.button-secondary.bg` / `tokens.colors.secondary`
- Text: `#ffffff`
- Border: 1px solid `#4a4f56` (§4). YAML does not record a border field on this key.
- Height: 48px
- Font: YAML `18px / 700`
- Token-set use: `Dark secondary action, 48px height`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A secondary action can be gated; recipe below |
| loading | not-applicable | Dark secondary action on the inspected homepage; it commits no in-place operation whose progress this control reports |
| error | not-applicable | The same secondary-action role has no in-place failure paint on this button |
| success | not-applicable | The same secondary-action role has no in-place completion paint on this button |

### Ghost Button (bn_gy)

- Role: Ghost / secondary action with grey border
- Primitive type: `button` · YAML `tokens.components.button-ghost.type: button` · Kind: interactive
- Background: `#ffffff`
- Text: YAML `tokens.components.button-ghost.fg` `#2d2d2d` · §4 Text `#191a1c`. Both writings stay.
- Border: 1px solid `#bfbfbf` (§4)
- Font: YAML `18px / 700`
- Token-set use: `Ghost / secondary action with grey border`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable button; visual treatment omitted |
| disabled | applicable | A ghost action can be gated; recipe below |
| loading | not-applicable | Ghost / secondary pairing; it commits no operation in place |
| error | not-applicable | Ghost / secondary pairing; it commits no operation in place |
| success | not-applicable | Ghost / secondary pairing; it commits no operation in place |

### Modern CTA Link Button (halt_apply)

- Role: Modern CTA link button
- Primitive type: `button` · YAML `tokens.components.button-cta-modern.type: button` · Kind: interactive
- Background: `#FF2233`
- Text: `#ffffff`
- Radius: `8px` · YAML `tokens.components.button-cta-modern.radius` · this is not `tokens.rounded.sm: 8` written as a component radius, and both writings stay
- Height: 51px
- Padding: `16px 10px`
- Font: YAML `14px / 400`
- Token-set use: `Modern CTA link button, 51px height`
- Source heading: Modern CTA Link Button (halt_apply)

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web link button; visual treatment omitted |
| focus-visible | applicable | Keyboard-reachable link button; visual treatment omitted |
| disabled | applicable | A CTA link can be gated; recipe below |
| loading | not-applicable | This control is a Modern CTA *link* button (halt_apply); it opens a destination rather than committing an in-place operation |
| error | not-applicable | Destination link; the destination, not this control, reports failure |
| success | not-applicable | Reaching the destination is not an operation with a success result on this link |

### Standard Input (inp)

- Role: Standard form input
- Primitive type: `input` · YAML `tokens.components.input-standard.type: input` · Kind: interactive
- Background: `#ffffff`
- Text: YAML `tokens.components.input-standard.fg` `#666666` · §4 Text `#666666`
- Radius: YAML `0px`
- Border: 1px solid `#d4d4d4`
- Height: 32px — this control's height, not `tokens.spacing.base: 32`
- Padding: YAML `0 0 0 20px` · §4 `0 0 0 20px` · padding-left 20px. The 20px is this control's padding, not `tokens.spacing.sm: 20`
- Font: YAML `12px / 400` · §4 12px
- Token-set use: `Standard form input, 32px height, #d4d4d4 border`
- **Placeholder:** Text `#999999` / `#999`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Declared treatment above |
| hover | applicable | Pointer-web input; visual treatment omitted |
| focus-visible | applicable | Form field; visual treatment omitted |
| disabled | applicable | An input can be gated; visual treatment omitted |
| loading | not-applicable | A value field does not commit an operation whose in-progress state it reports; container loading is `.sp_load` / `.img_loading` |
| error | applicable | §14 Error (inline): `#FF2233` caution text (`.caution`, `.confirm`) at 12px directly below the affected field |
| success | not-applicable | Completion is signalled by routing to the next step; no field-level success paint is named |

**Disabled recipe** (Disabled Button (bn_disabled); YAML `tokens.components.button-disabled`; not a fifth interactive component with its own map)

- Primitive type: `button` (`tokens.components.button-disabled.type`)
- Background: `#dadada`
- Text: `#aaacae`
- Border: 1px solid `#d2d2d2` (§4 / §14). YAML does not record a border field on this key.
- Token-set use: `Inactive button state`
- YAML fields: `type`, `bg`, `fg`, `use`

Treating YAML `button-disabled` as the disabled treatment recipe for the button controls rather than a fifth interactive component with its own map, including Primitive type `button` preserved on that recipe, is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

- Desktop content width: 1026px centered (`.wrap { width: 1026px; margin: 0 auto }`)
- Full-width hero image with centred overlay text at 1600px minimum width for large screens
- Sidebar navigation (`.snb_header_wrap`) uses brand red background at 184px height
- Service sections stack vertically with generous vertical padding (159px top on first section, 115px on subsequent)
- Service tab navigation is inline with 25px spacing between items
- Footer uses narrower 760px content width with 180px left padding for address block
- Desktop first layout; breakpoints defined at max-width 1280px and max-width 1100px (narrow content adjustments)
- At min-width 1600px: full-width hero image scales to cover with absolute centred positioning
- Hero image uses `transform: translate(-50%, -50%)` for centred cover on all viewport sizes
- Sticky navigation (`fp_nav`) transitions from absolute to fixed at 69px from top of viewport when user scrolls
- Footer and sidebar widths do not adapt below 1100px; mobile experience served by native apps

The 1026px / 1600px / 184px / 159px / 115px / 25px / 760px / 180px / 1280px / 1100px / 69px figures, the `.wrap` rule, the `.snb_header_wrap` red header, the `fp_nav` sticky offset, and the source sentence that footer and sidebar widths do not adapt below 1100px and that mobile experience is served by native apps are the source's own. Reading those as this homepage/CSS layout record rather than as a universal PAYCO grid, keeping 159 / 115 / 25 on the layout sentences rather than as replacements of `tokens.spacing.section` / `xl` / `md`, and keeping 1600px as the source's min-width writing rather than as a second identity width, are derived editorial implementation inferences from the verified surfaces; they are not PAYCO-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

**Adjectives:** Practical, reassuring, familiar

| Dimension | Do | Don't |
|-----------|-----|-------|
| Register | Friendly and direct; speak like a trusted neighbour | Formal or distant — avoid corporate stiffness |
| Sentences | Short to mid-length; action-led | Long conditional clauses that delay the point |
| Vocabulary | Everyday Korean consumer language; minimal jargon | Finance-heavy terminology without explanation |

Voice samples (illustrative):

- "결제가 필요한 모든 순간, PAYCO 하세요." (Every moment you need to pay, PAYCO it.) — short, verb-forward, brand name as a verb
- "실속있는 포인트, 편리한 결제, 간편한 금융." (Practical points, convenient payment, simple finance.) — three-beat rhythm, benefit-first
- "일상의 빈틈을 채우다" (Fill the gaps in your daily life.) — poetic but grounded, positions PAYCO as an everyday companion

The adjectives, the Do/Don't table, the three quoted lines, and the source's own annotations on those samples (short, verb-forward, brand name as a verb; three-beat rhythm, benefit-first; poetic but grounded, everyday companion) are the source's own. Reading the table as register guidance rather than a complete product-microcopy guide is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification.

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

These decisions are unnamed values, not permissions to invent. Reading the list as unnamed values the source already named, rather than as coverage of domains the source never named, is a derived editorial implementation inference from the verified surfaces; it is not PAYCO-authored or a separately published UI specification.

- dedicated success-screen pattern (source: no dedicated success-screen pattern found in CSS)
- skeleton-loading CSS (source: no explicit skeleton-loading CSS found)
- custom cubic-bezier curves (source: no cubic-bezier custom curves found in the CSS bundle)
