# Jumpit Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

Jumpit (점핏) is the developer-only recruitment channel run by Saramin HR (사람인HR, KOSDAQ 143240) — a separate brand spun out so that engineering hiring would not share chrome with the parent's generalist job marketplace. This contract covers the two live captures the source records: `https://jumpit.saramin.co.kr/` (52 samples) and `https://jumpit.saramin.co.kr/positions?sort=popular` (60 samples). The catalog homepage field is `https://www.jumpit.co.kr`. The source records that the product later consolidated to `jumpit.saramin.co.kr`. Every value stays attached to the surface that established it. Reading those two captures as this contract’s token surfaces, keeping the catalog homepage as an identity field rather than a third computed surface, treating the consolidation note as a domain fact rather than a third token surface, and keeping every value attached to the surface that established it, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

The source records a single brand green used so sparingly that across those two surfaces and 112 live element samples it appears on chrome exactly twice (one active filter chip, one section eyebrow). Everything else is a three-stop greyscale stack on a `#FFFFFF` / `#ffffff` canvas with `#FBFBFB` / `#fbfbfb` footer relief. The global `회원가입 / 로그인` pill is `#000000` with white 15/700 type at 8px radius, not green. The signature surface is the role-filter chip row on `/positions` — twenty-two horizontally-arrayed 40px-tall pill buttons at 20px radius, single-select — with a second filter row of four 100px-radius outlined dropdowns (기술스택 / 경력 / 지역 / 태그). The source’s own “deliberate inversion,” “feels closer to a developer terminal than to an HR portal,” “intentionally closer to a terminal-prompt green,” and “green never competes with content density” wordings are source statements. The source’s own “you chose this filter” / “we want you to look at this once.” wordings are also source statements. Classifying those six wordings as source statements, and keeping `#00DD6D` / `#00dd6d` on the two recorded chrome uses rather than as a general fill, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

Brand narrative recorded by the source, kept as narrative context. Jumpit launched as Saramin HR's answer to a specific market gap: by 2019, Korea's developer-recruitment funnel had bifurcated into "premium curated" (Wanted, Programmers) and "high-volume listings" (the parent Saramin marketplace), with no Saramin-operated channel speaking directly to engineers in their own vocabulary. Saramin's challenge: how do you build credibility with developers who associate the parent brand with résumé spam and recruiter cold-outreach? The answer was operational separation — a different domain (`jumpit.co.kr`, later consolidated to `jumpit.saramin.co.kr`), a different voice (developer-vernacular, not corporate-HR), and a visual language (sharp 0px corners, terminal-prompt green, binary type weight). The source’s own wording for that signal is "this is not the same product as the parent." The colour choice itself is a positioning statement. Where Wanted owns `#0066FF` "growth blue" and Programmers leans into a clean blue-and-white code-academy aesthetic, Jumpit picked `#00DD6D` — a green that reads closer to a terminal cursor than to a brand-marketing palette — and restricted it to two appearances per surface. Most Korean services treat brand colour as something to splash; Jumpit treats it like a syntax highlight. The discipline reads as taste to engineers and as confidence to recruiters. Parent context the source marks factual, not narrative: Saramin HR (KOSDAQ 143240) is the operator. Founded 2005, headquartered in Guro-gu Seoul. Jumpit positions itself within Saramin's portfolio as the engineer-facing channel — companion brands at the parent include the generalist Saramin marketplace, the freelance platform Saramin 잡스, and the headhunter-network Saramin 서치. Specific founder/launch quotes were not located at OmD attribution fidelity in public English-language sources — flagged for future re-research if needed. The year 2019, the 2005 founding, Guro-gu Seoul, KOSDAQ 143240, the companion-brand names, the `jumpit.co.kr` → `jumpit.saramin.co.kr` consolidation, the two-appearance restriction, the résumé-spam / cold-outreach challenge sentence, the syntax-highlight / taste-confidence closing, and that founder/launch-quote sentence are the source’s own narrative facts; they do not by themselves supply interface tokens. Classifying that founding-and-channel narrative, including the challenge sentence, the syntax-highlight / taste-confidence closing, and the founder/launch-quote sentence, as context that does not by itself supply interface tokens is a derived editorial implementation inference from the verified surfaces; it is not Jumpit-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=3 lang=en -->
### Primary tasks

Selecting these three as the product’s primary tasks, each naming a surface or control the source records and not taken from the source’s persona section, is a derived editorial implementation inference from the verified surfaces; it is not Jumpit-authored or a separately published UI specification.

- Filter `/positions` with the 22-chip role row and the four outlined dropdowns (기술스택 / 경력 / 지역 / 태그).
- Scan the home hero carousel and the home section listings.
- Use the global `회원가입 / 로그인` pill recorded on those captures.
<!-- design-md:claim-end -->

### Audience

No named or demographic personas are invented. The source’s publicly observable groups, kept in the source’s own wording, are developers and engineers on a developer-only recruitment channel, and recruiters. Those are the only stakeholder groups retained here. Reading those source-named groups as this product’s audience, and keeping inferred biographies off this list, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

### Distinctive traits

The list restates values the source records. The groupings and the readings inside them are a derived editorial implementation inference from the verified surfaces — they are not Jumpit-authored or a separately published UI specification.

- Single brand green `#00DD6D` / `#00dd6d` — chrome use restricted to active state + one eyebrow (2 observed instances across 112 samples)
- Pretendard Variable across 100% of UI text — no proprietary display face
- Three-stop ink ladder: `#000` heading → `#444` body → `#888` muted
- Three-pill radius scale: **8px** (primary CTA only) / **20px** (role chips) / **100px** (outlined filter dropdowns)
- Cards at `0px` radius — sharpness is the architectural default, pills are reserved for controls
- Zero `box-shadow` observed — depth is surface-tint only (`#FBFBFB` footer vs `#FFF` page)
- Binary weight policy — 400 body, 700 emphasis; no 600 in between
- Stack: Next.js (App Router) + styled-components — no public `:root` token contract

### Principles

These five items are a derived editorial implementation inference from the verified surfaces; they are not Jumpit-authored or a separately published UI specification. The source states them in its own Principles section.

1. **One brand colour, two appearances.** `#00DD6D` is reserved for the active state of single-select controls and a single eyebrow accent per surface. Audit-fail if it appears more than twice on a screen.
2. **Sharp by default, pilled by role.** Cards and surfaces are 0px-radius. Pill radii (8 / 20 / 100) are reserved for interactive controls and encode control class — never use a pill radius on a static surface.
3. **Type carries hierarchy, not colour.** Build hierarchy with weight (400 vs 700) and size (16 → 24 → 32). Don't tint a section heading green to make it pop — make it 24/700 `#222` like everything else.
4. **Depth via tint, never shadow.** `box-shadow: none` is the default. If you need to indicate "this is a different surface tier," use `#FBFBFB` against `#FFFFFF`. No card lift, no hover shadow.
5. **Speak in developer vernacular, write in fresh copy.** Section labels are one or two Korean words plus an optional English keyword inline. Avoid honorific imperatives ("선택해 주세요"). Don't lift Jumpit copy verbatim — write in the same register.

### Application rules

The source states these five as its Do list, kept as written. These rules, and the reasons attached to them, are a derived editorial implementation inference from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

- Keep `#00DD6D` to two semantic uses: active state + brand eyebrow. Two appearances per screen is the comfortable max.
- Use weight (400 → 700) and size (16 → 24 → 32) to communicate hierarchy. Skip 600.
- Maintain the three-pill radius scale: 8 (primary CTA), 20 (role chip), 100 (outlined dropdown).
- Keep cards at 0px radius — this is what makes Jumpit feel like a developer tool, not an HR app.
- Default body ink to `#444`, not `#000`. Pure black is reserved for primary CTA and the loudest hero card text.

### Avoid

The source states these as its Don’t list, including the §9 corporate-HR register prohibition. These prohibitions, and the reasons inside them, are a derived editorial implementation inference from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

- **Don't introduce a green ladder.** No `#00DD6D-tint`, no `#00DD6D-pressed-darker`. If you need a softer surface, use the `#FBFBFB` footer tint or whitespace.
- Don't put `#00DD6D` on a primary CTA — Jumpit's CTA is `#000`, that's the signature.
- Don't add `box-shadow` to cards. If you need separation, add whitespace.
- Don't reach for 600 weight. 400 or 700, commit.
- Don't add rounded corners to cards (16px / 20px / 24px). Cards = 0.
- Don't lift verbatim Jumpit voice — phrases like "요즘 폼 미친 기업s" / "#꿀 피드" are voice **shape** evidence, not adoptable copy.
- Don't slip into corporate-HR register ("귀하의 지원이 …").

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic color

These are roles on the two recorded captures. Role names below follow the source’s own token-set keys. Taking those role names from the source’s own token-set keys, pairing each hex to the token-set path named beside it, keeping `tokens.colors.canvas` `#ffffff` and `tokens.colors.inverse` `#ffffff` as two keys that happen to share a hex, keeping YAML lowercase (`#00dd6d`, `#fbfbfb`) beside the §2 uppercase spellings (`#00DD6D`, `#FBFBFB`), and keeping `tokens.colors.heading` `#000000` off `tokens.colors.heading-soft` `#222222` and off `tokens.colors.body` `#444444`, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification. The hex values and recorded uses are the source’s own.

- **Brand** (`#00dd6d` / `#00DD6D` / `rgb(0, 221, 109)`): The sole brand accent. Restricted to two chrome uses — active role-filter chip background and the 13/700 "Notice" eyebrow above the announcement card. Never on the primary CTA, never on body text, never as a hover wash. Token-set path `tokens.colors.brand`.
- **Heading** (`#000000`): Primary CTA background, h3 hero card body text. Token-set path `tokens.colors.heading`.
- **Heading-soft** (`#222222`): Section h3 titles ("테마별 모음.zip", "회원님을 위한 AI 추천 포지션을 보고싶다면?"). Token-set path `tokens.colors.heading-soft`.
- **Body** (`#444444`): Default reading ink — footer nav, filter-chip rest state, secondary body. Token-set path `tokens.colors.body`.
- **Muted** (`#888888`): "전체 보기" affordance, metadata. Token-set path `tokens.colors.muted`.
- **Inverse** (`#ffffff` / `#FFFFFF`): CTA text, hero carousel overlay titles (32/700 over photos), active filter chip text. Token-set path `tokens.colors.inverse`.
- **Canvas** (`#ffffff` / `#FFFFFF`): Page background, header, card surface. Token-set path `tokens.colors.canvas`.
- **Footer-plate** (`#fbfbfb` / `#FBFBFB`): The only surface elevation in the system — a near-imperceptible warm-grey tint that signals "you are below the content." Token-set path `tokens.colors.footer-plate`.

Green is a binary signal, not a colour ladder. The source states that Jumpit does not ship `#00DD6D-light` / `#00DD6D-dark` / `#00DD6D-tint` derivatives. When attention is needed without choice-selection semantics, the source says to use weight (700) and size (24/32px) — not a green tint. The home + positions surfaces did not expose an error/success/warning ladder this pass. Job-status badges (마감 / D-day / 신규) and form-validation states require an UPDATE capture on a saved-job or application-form surface. The source’s downstream instruction is to adopt a Toss-family semantic palette rather than re-tinting `#00DD6D`. That instruction is not a Jumpit token set; the Toss-family hexes named beside it stay off this palette. Reading “binary signal, not a colour ladder” as a source discipline rather than a published token family, and keeping the Toss-family instruction off the role rows, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

### Spacing

Token-set path `tokens.spacing` (unitless steps, kept as the source wrote them, not rewritten as a scale): `xs: 8` · `sm: 16` · `md: 24` · `base: 32` · `lg: 40`.

`tokens.spacing.xs: 8` is a spacing step. It is not `tokens.rounded.sm: 8`. `tokens.spacing.sm: 16` is a spacing step. It is not `tokens.typography.body.size` `16`, and it is not the CTA padding `16px`. `tokens.spacing.md: 24` is a spacing step. It is not section-h3 `24`. `tokens.spacing.base: 32` is a spacing step. It is not hero-title `32`. `tokens.spacing.lg: 40` is a spacing step. It is not the 40px chip height, and it is not the footer padding `40px 0px 30px`. Section vertical rhythm uses ~24/32/40px steps (inferred from sampling, not measured). Keeping the five unitless spacing steps on their own keys rather than rewriting them as a grid, keeping those writings of `8`, `16`, `24`, `32`, and `40` on their own records, and keeping the ~24/32/40px section rhythm as an inferred observation rather than a spacing token, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

### Shape

Token-set path `tokens.rounded` (unitless steps, kept on their own path): `sm: 8` · `md: 20` · `lg: 100` · `full: 9999`.

- sm (`8` / `8px`): primary CTA only. Token-set key `tokens.rounded.sm`.
- md (`20` / `20px`): role chips. Token-set key `tokens.rounded.md`.
- lg (`100` / `100px`): outlined filter dropdowns. Token-set key `tokens.rounded.lg`.
- full (`9999`): token-set key `tokens.rounded.full: 9999`. The source token set writes this key. It is not a component radius in §4.

Cards stay at `0px`. `tokens.rounded.sm: 8` is a radius step. It is not `tokens.spacing.xs: 8`. `tokens.rounded.md: 20` is a radius step. It is not a spacing step. `tokens.rounded.lg: 100` is a radius step. It is not `tokens.rounded.full: 9999`. Keeping `8`, `20`, `100`, and `9999` as four keys, and keeping card `0px` on the card records rather than inventing `tokens.rounded.card`, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

### Elevation

Token-set path `tokens.shadow.none`: `none`. Across 112 raw samples every `box-shadow: none`. Depth is communicated by surface tint: `#FBFBFB` footer plate against `#FFFFFF` page is the single elevation tier. Cards on photo carousels rely on the photo itself + a black-on-photo overlay text contrast, not on shadow stacking. Borders, where present, are hairline tints rather than `1px solid black` — but the dominant pattern is "no border, no shadow, content separated by whitespace alone." The source’s own “by withholding depth tokens, the system signals "we are a terminal, not a banking app."” wording is a source statement. Classifying that wording as a source statement, and reading `box-shadow: none` as the recorded elevation token rather than as permission to invent a lift scale, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

### Motion

Motion tokens were not captured this pass (single static page-load CDP inspection). Observable behaviours the source records:

- Hero carousel auto-rotates 3-up promotion cards (timing not measured).
- Filter-chip selection transition is instant or very short (`<150ms` inferred from styled-components default behaviour).
- No page-load fade / hero parallax / scroll-triggered reveal observed in the rendered snapshot.

No motion token, easing curve, or reduced-motion behavior is promoted from the recommended downstream table. A future motion pass may promote a value only after per-component computed observation of all five evidence kinds: transition properties, animation name, duration, easing, and reduced-motion behavior. That five-kind gate, keeping the `<150ms` figure as an inferred observation rather than a production token, and the refusal to invent a motion system from this capture, are a derived editorial implementation inference from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Font evidence

| Evidence class | Resolution |
|---|---|
| Official product-use | The source records no published Jumpit typography token. `getdesign.md/jumpit` returned "No designs found"; `styles.refero.design/?q=jumpit` returned no result cards (both verified 2026-05-15). |
| Live computed surface-use | `"Pretendard Variable", Pretendard, -apple-system, system-ui, sans-serif` — verified on 100% (112/112) of sampled elements. |
| Official distributed asset | SIL OFL 1.1 (open-source). Self-hosted via Next.js static assets. This describes the font asset, not a Jumpit brand asset. |
| Declared-only | No `Wanted Sans`-style brand display face is layered over body. Token-set `tokens.typography.family.mono` also writes `Pretendard Variable`. |
| License | Pretendard’s upstream project publishes it under SIL Open Font License 1.1. |
| Outside these captures | The source records Home + positions both inspected at 1280×720 desktop. Mobile viewport not captured this pass. |

Calling Official product-use an absent published token rather than a live family, calling Live computed the only machine UI-family reading, calling the SIL Open Font License a licence boundary rather than a Jumpit product-font claim, calling `family.mono` a second key that happens to share `Pretendard Variable`, and calling 1280×720 a capture viewport rather than a type contract, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

### Family

- **Current visible UI family:** `Pretendard Variable` — token-set path `tokens.typography.family.sans`
- **Token-set mono key:** `Pretendard Variable` — token-set path `tokens.typography.family.mono`
- **Computed stack recorded on the captures:** `"Pretendard Variable", Pretendard, -apple-system, system-ui, sans-serif`
- Do not replace unavailable or unobserved brand type with Pretendard Variable. It is canonical here only because computed visible use on 112/112 sampled elements agrees. Do not present a `Wanted Sans`-style display face as a Jumpit UI family.

That no-substitution rule is a derived editorial implementation inference from the verified surfaces; it is not Jumpit-authored or a separately published UI specification.

### Type roles

| Role | Font | Size | Weight | Line height | Token-set path | Token-set use |
|---|---|---:|---:|---:|---|---|
| Hero card title (over photo) | Pretendard Variable | 32 | 700 | 1.3 | `tokens.typography.hero-title` | Hero carousel card title over photo, white |
| Section h3 | Pretendard Variable | 24 | 700 | 1.3 | `tokens.typography.section-h3` | Section heading titles |
| Primary CTA | Pretendard Variable | 15 | 700 | — | `tokens.typography.cta` | Primary auth CTA label |
| Body / link / chip rest | Pretendard Variable | 16 | 400 | 1.5 | `tokens.typography.body` | Body, link, chip rest state |
| Filter chip active | Pretendard Variable | 16 | 700 | — | `tokens.typography.chip-active` | Active filter chip label |
| Footer link | Pretendard Variable | 14 | 400 | — | `tokens.typography.footer-link` | Footer nav link |
| Brand eyebrow ("Notice") | Pretendard Variable | 13 | 700 | — | `tokens.typography.eyebrow` | Brand Notice eyebrow, always green |

Line-height values stay unitless, as the token-set wrote them (`1.3`, `1.5`). The §3 prose also writes `~1.3`, `~1.5`, a 48px button height, and an 84px tall hero-title block. Those px spellings sit on the observed-hierarchy and component records. They do not replace the unitless token-set figures.

One family, three weights: 400 (body), 500 (sparing — ~12% of samples), 700 (heading + active + CTA). No 600. Emphasis is binary, not graduated. Either you are content (400) or you are an instruction / heading / active state (700). The skipped 600 weight is intentional — it forces interface labels to commit. Skip 500 unless you have a justified reason (footnotes, micro-meta). Type does the brand work, not colour. Because `#00DD6D` is restricted, hierarchy must come from size and weight alone. 32/700 white-over-photo card titles are the loudest typographic moment. No `<h1>` on the home page. Observed and flagged — the global header's logo image and the hero carousel use h3 directly. Anyone porting this pattern should add a semantic h1 to the announcement section. Audit colour contrast on `#888` body text (it is below WCAG AA at 14px).

Keeping the unitless `1.3` and `1.5` beside the `~1.3` / `~1.5` / 48px / 84px spellings, keeping body `16` off `tokens.spacing.sm: 16`, keeping the no-`<h1>` and `#888` contrast notes as source a11y flags rather than as invented type tokens, and reading binary emphasis, the skipped 600, and “type does the brand work” as source §3 principles rather than as invented type tokens, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

### Assets

- Catalog favicon: `https://www.google.com/s2/favicons?domain=jumpit.co.kr&sz=256`
- Hero carousel cards use full-bleed photographic images. The source does not establish a crop rule, overlay system, or reusable screenshot frame beyond the recorded overlay title and eyebrow.
- Proof file named by the source footer: `assets/_reference/.live-inspect-proof.json` (10 raw_samples retained).

Reading the Google s2 favicon URL as a catalog identity pointer rather than a Jumpit-hosted brand file, and reading the imagery absences as omitted fields rather than as a missing illustration system, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

<!-- design-md:section components-states -->
## 4. Components & States

### Capture record

The source footer records: **Verified:** 2026-05-15. Tier 1 sources: CDP `:9222` live capture on `jumpit.saramin.co.kr/` (52 samples) + `/positions?sort=popular` (60 samples); `assets/_reference/.live-inspect-proof.json` (10 raw_samples retained). Conflicts unresolved: none. JobCard inner spacing + hover/pressed/focus/disabled states + semantic ladder flagged for UPDATE pass.

| Category | Observed | Notes |
|---|---|---|
| **Empty** | inferred | Empty-state visuals (no filtered results / empty 이력서) not captured this pass. Likely follows the same `#FFF` / `#444` 14/400 typography rule with no illustration — flagged for UPDATE. |
| **Loading** | inferred | No skeleton screens captured. Likely uses Next.js streaming SSR — flagged for UPDATE. |
| **Error (form)** | not captured | No form errors triggered. |
| **Error (page)** | not captured | 404 / 500 page chrome not inspected. |
| **Success** | not captured | Application-submitted state pending UPDATE pass. |
| **Skeleton** | not captured | — |
| **Disabled (button)** | not captured | Flagged. |
| **Active (filter chip)** | ✓ captured | `#00DD6D` bg + `#FFF` text + 16/700 — the canonical active-state token in the system. |
| **Hover** | not captured | No mouse-interaction simulated. Flagged. |
| **Focus (a11y)** | not captured | Keyboard focus-ring colour and width pending — important UPDATE candidate. |

The inferred `#222` tint / `#F5F5F5` plate / `#444` 50% alpha / Toss-family `#F04452` treatments named beside those rows in the source are inferred placeholders. They are not promoted. Treating those inferred treatments as omitted values rather than as published state tokens, and keeping the table’s Observed / Notes cells as the source wrote them, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

Declared interactive components still declare Core §4.4 applicability by control meaning, not by capture completeness. `default` and `focus-visible` apply. Pointer-web hover, and other canonical states that are meaningful for the control, remain applicable; their visual treatments are omitted. Absence of a capture is not a `not-applicable` reason. The role-filter chips, the outlined dropdown trigger, the hero carousel card, and the two destination links commit no in-place operation, so loading / error / success are `not-applicable` on those controls for a role reason. The primary auth CTA is a destination chrome pill into the auth funnel; it also commits no in-place operation on the captured pages, so loading / error / success are `not-applicable` for a role reason. JobCard has no interactive-kind evidence beyond `type: card`, so kind and the applicability map are omitted. This is not a complete state-coverage claim.

The role-based decision procedure above, every interactive-kind verdict, every applicability verdict, the reason given for either, and the refusal to treat this as a complete state-coverage claim are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

### Primary (Auth CTA)

- Role: 회원가입 / 로그인 — the single 8px-radius pill in the chrome. Auth-funnel exclusive.
- Primitive type: `button` · Kind: interactive
- Background: `#000000`
- Text: `#FFFFFF` / `#ffffff`
- Border: none
- Radius: 8px
- Height: 48px
- Padding: `0px 16px`
- Font: 15px / 700 / Pretendard Variable
- Token-set type: `tokens.components.button-primary.type` `button`
- Token-set bg: `tokens.components.button-primary.bg` `#000000`
- Token-set fg: `tokens.components.button-primary.fg` `#ffffff`
- Token-set radius: `tokens.components.button-primary.radius` `8px`
- Token-set padding: `tokens.components.button-primary.padding` `0px 16px`
- Token-set font: `tokens.components.button-primary.font` `15px / 700`
- Token-set use: `회원가입/로그인 auth CTA — black, never green`
- Token-set shape: `tokens.rounded.sm: 8`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the global auth pill |
| hover | applicable | Pointer-web button; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | Button control; visual treatment omitted |
| loading | not-applicable | Destination chrome pill into the auth funnel; it does not commit an in-place operation whose in-progress state it could report |
| error | not-applicable | Destination action; the destination, not this pill, reports failure |
| success | not-applicable | Same role reason: reaching the auth funnel is not an operation with a success result on this pill |

### Role Filter Chip

- Role: single-selected job-role filter chip in `/positions`
- Primitive type: `badge` · Kind: interactive
- Active background: `#00DD6D` / `#00dd6d`
- Active text: `#FFFFFF` / `#ffffff`
- Rest background: token-set `tokens.components.chip-role-rest.bg` `#ffffff`; §4 prose Background: transparent
- Rest text: `#444444`
- Border: none
- Radius: 20px
- Height: 40px
- Padding: `7px 16px`
- Active font: 16px / 700 / Pretendard Variable
- Rest font: 16px / 400 / Pretendard Variable
- Use: Single-select in the 22-chip filter row (전체 / 서버/백엔드 / 프론트엔드 / 웹 풀스택 / 안드로이드 / iOS / DBA / 빅데이터 / AI·ML / DevOps / 정보보안 / QA / 개발PM / HW·임베디드 / 블록체인 / …)
- Token-set type (active): `tokens.components.chip-role-active.type` `badge`
- Token-set bg (active): `tokens.components.chip-role-active.bg` `#00dd6d`
- Token-set fg (active): `tokens.components.chip-role-active.fg` `#ffffff`
- Token-set radius (active): `tokens.components.chip-role-active.radius` `20px`
- Token-set padding (active): `tokens.components.chip-role-active.padding` `7px 16px`
- Token-set font (active): `tokens.components.chip-role-active.font` `16px / 700`
- Token-set use (active): `Single-selected job-role filter chip`
- Token-set type (rest): `tokens.components.chip-role-rest.type` `badge`
- Token-set bg (rest): `tokens.components.chip-role-rest.bg` `#ffffff`
- Token-set fg (rest): `tokens.components.chip-role-rest.fg` `#444444`
- Token-set radius (rest): `tokens.components.chip-role-rest.radius` `20px`
- Token-set padding (rest): `tokens.components.chip-role-rest.padding` `7px 16px`
- Token-set font (rest): `tokens.components.chip-role-rest.font` `16px / 400`
- Token-set use (rest): `Unselected role chips in 22-chip filter row`
- Token-set shape: `tokens.rounded.md: 20`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Rest state captured on the 22-chip row |
| hover | applicable | Pointer-web chip; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter chip whose availability can lapse; visual treatment omitted |
| loading | not-applicable | Single-select filter chip; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Selection chip; the result grid, not this chip, reports failure |
| success | not-applicable | Same role reason: choosing a role filter is not an operation with a success result on this chip |

Active is the captured selected treatment (`#00DD6D` bg + `#FFF` text + 16/700). It is the source’s canonical active-state token. It is not a seventh canonical-state row. Classifying that captured Active as the source’s canonical active-state token, and keeping it off a seventh canonical-state row, is a derived editorial implementation inference from the verified surfaces; it is not Jumpit-authored or a separately published UI specification.

### Outlined Filter Dropdown

- Role: outlined multi-select filter dropdown trigger
- Primitive type: `tab` · Kind: interactive
- Background: `#FFFFFF` / `#ffffff`
- Text: `#000000`
- Border: 1px solid (border colour not captured cleanly — flagged for UPDATE)
- Radius: 100px
- Height: 40px
- Padding: `8px 30px 8px 12px` (asymmetric — right padding holds the caret)
- Font: 16px / 400 / Pretendard Variable
- Use: 기술스택 / 경력 / 지역 / 태그 multi-select dropdown triggers — the second filter class.
- Token-set type: `tokens.components.dropdown-filter.type` `tab`
- Token-set bg: `tokens.components.dropdown-filter.bg` `#ffffff`
- Token-set fg: `tokens.components.dropdown-filter.fg` `#000000`
- Token-set radius: `tokens.components.dropdown-filter.radius` `100px`
- Token-set padding: `tokens.components.dropdown-filter.padding` `8px 30px 8px 12px`
- Token-set font: `tokens.components.dropdown-filter.font` `16px / 400`
- Token-set use: `Outlined multi-select filter dropdown trigger`
- Token-set shape: `tokens.rounded.lg: 100`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured as the four outlined triggers |
| hover | applicable | Pointer-web trigger; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A filter trigger whose availability can lapse; visual treatment omitted |
| loading | not-applicable | Dropdown trigger; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Trigger; the opened list, not this trigger, reports failure |
| success | not-applicable | Same role reason: opening a multi-select is not an operation with a success result on this trigger |

### Hero Carousel Card

- Role: sliding 3-up promotion row on home — company-page entry points. Inferred — outer chrome captured, inner spacing pending.
- Primitive type: `card` · Kind: interactive
- Background: photographic image (full-bleed). Token-set `tokens.components.card-hero.bg` `#ffffff`
- Overlay title text: `#FFFFFF`, 32px / 700, 84px tall block
- Eyebrow text inside card: `#000000`, 16px / 400
- Radius: 0px
- Box shadow: none
- Height: 340px
- Token-set type: `tokens.components.card-hero.type` `card`
- Token-set bg: `tokens.components.card-hero.bg` `#ffffff`
- Token-set fg: `tokens.components.card-hero.fg` `#ffffff`
- Token-set radius: `tokens.components.card-hero.radius` `0px`
- Token-set font: `tokens.components.card-hero.font` `32px / 700`
- Token-set use: `Hero carousel promo card, full-bleed photo, no shadow, 340px tall`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Outer chrome captured on home |
| hover | applicable | Pointer-web entry card; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | An entry card whose availability can lapse; visual treatment omitted |
| loading | not-applicable | Destination entry card; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination card; the destination, not this card, reports failure |
| success | not-applicable | Same role reason: reaching a company page is not an operation with a success result on this card |

### JobCard

- Role: result-grid card on `/positions`. Inferred — needs UPDATE pass.
- Primitive type: `card`
- Background: `#FFFFFF` / `#ffffff`
- Radius: 0px (consistent with no-rounded-card discipline observed)
- Box shadow: none
- Border: hairline tint (exact value pending capture)
- Use: Result-grid card on `/positions`. Inner anatomy (thumbnail / position title / company / location / D-day) requires a focused capture pass.
- Token-set type: `tokens.components.card-job.type` `card`
- Token-set bg: `tokens.components.card-job.bg` `#ffffff`
- Token-set fg: `tokens.components.card-job.fg` `#444444`
- Token-set radius: `tokens.components.card-job.radius` `0px`
- Token-set use: `Result-grid JobCard on /positions, no shadow, hairline border`

No interactive-kind evidence beyond the token-set `type: card`. Kind and the applicability map are omitted.

### Brand Eyebrow ("Notice")

- Role: 18px-tall label above the home Notice announcement card — the only 13px-size and the second authorised brand-green chrome use.
- Primitive type: `badge` · Kind: non-interactive — eyebrow label; no in-page commit
- Text: `#00DD6D` / `#00dd6d`
- Font: 13px / 700 / Pretendard Variable
- Token-set type: `tokens.components.eyebrow-brand.type` `badge`
- Token-set bg: `tokens.components.eyebrow-brand.bg` `#ffffff`
- Token-set fg: `tokens.components.eyebrow-brand.fg` `#00dd6d`
- Token-set font: `tokens.components.eyebrow-brand.font` `13px / 700`
- Token-set use: `Notice eyebrow above announcement card`

### Section H3 Title

- Role: all home section heads — sit on `#FFF` canvas.
- Primitive type: `badge` · Kind: non-interactive — section title; no in-page commit
- Text: `#222222`
- Font: 24px / 700 / Pretendard Variable
- Padding: 0px (or 0px 10px on "이번주 인기 포지션" variant)
- Token-set type: `tokens.components.heading-section.type` `badge`
- Token-set bg: `tokens.components.heading-section.bg` `#ffffff`
- Token-set fg: `tokens.components.heading-section.fg` `#222222`
- Token-set font: `tokens.components.heading-section.font` `24px / 700`
- Token-set use: `Section H3 title on canvas`

### Footer Link (Default)

- Role: 14-link footer nav grid
- Primitive type: `listItem` · Kind: interactive
- Text: `#444444`
- Font: 14px / 400 / Pretendard Variable
- Border: none
- Radius: 0
- Token-set type: `tokens.components.link-footer.type` `listItem`
- Token-set bg: `tokens.components.link-footer.bg` `#ffffff`
- Token-set fg: `tokens.components.link-footer.fg` `#444444`
- Token-set radius: `tokens.components.link-footer.radius` `0px`
- Token-set font: `tokens.components.link-footer.font` `14px / 400`
- Token-set use: `Footer nav link`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured in the footer nav grid |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | Destination link; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination link; the destination, not this link, reports failure |
| success | not-applicable | Same role reason: reaching a footer destination is not an operation with a success result on this link |

### Section "View all" Affordance

- Role: "전체 보기" inline link at the right edge of section headers
- Primitive type: `listItem` · Kind: interactive
- Text: `#888888`
- Font: 16px / 400 / Pretendard Variable
- Token-set type: `tokens.components.link-viewall.type` `listItem`
- Token-set bg: `tokens.components.link-viewall.bg` `#ffffff`
- Token-set fg: `tokens.components.link-viewall.fg` `#888888`
- Token-set font: `tokens.components.link-viewall.font` `16px / 400`
- Token-set use: `전체 보기 inline affordance at section header edge`

| State | Applicability | Reason |
|---|---|---|
| default | applicable | Captured at section-header edges |
| hover | applicable | Pointer-web link; visual treatment omitted |
| focus-visible | applicable | Interactive control; visual treatment omitted |
| disabled | applicable | A destination link whose availability can lapse; visual treatment omitted |
| loading | not-applicable | Destination link; it does not commit an operation whose in-progress state it could report |
| error | not-applicable | Destination link; the destination, not this link, reports failure |
| success | not-applicable | Same role reason: reaching a section listing is not an operation with a success result on this link |

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

Single-canvas page model. `#FFFFFF` from header to last section, then `#FBFBFB` for the footer plate. No alternating section backgrounds, no coloured banners, no full-bleed brand-green strips. Filter-row pattern is the layout fingerprint. On `/positions`, two stacked filter rows (22 role chips + 4 outlined dropdowns) precede the result grid — a horizontal-scrolling chip row above a `flex-wrap` dropdown row. The visual contract: pill class signals taxonomy class. Sticky 121px header on home — global nav (개발자 채용 / 이력서 / #꿀 피드 / 개발자 인터뷰) on the left, secondary auth (회원가입/로그인) and 기업 서비스 on the right. Section vertical rhythm uses ~24/32/40px steps (inferred from sampling, not measured). Card grids appear at 8-up on home, n-up on positions. No `<h1>` on home. The semantic heading tree starts at h2 (`Notice`) → h3 (section titles + 12 carousel-card titles). Footer = 363px tall, padding `40px 0px 30px`, 14/400 `#444` links arranged in 6-7 columns.

Home + positions both inspected at 1280×720 desktop. Mobile viewport not captured this pass. The 22-chip role-filter row on `/positions` is wider than 1280px content area → horizontal scroll is the inferred behaviour (CSS `overflow-x: auto` typical for this pattern, not validated by this capture). Hero carousel sliding cards retain 340px height at desktop; mobile breakpoint behaviour pending. Footer 6-7 column nav grid is expected to collapse to 2-3 cols at mobile (standard pattern, not validated). No `prefers-color-scheme: dark` support detected — Jumpit ships light-mode only on web. Saramin parent ships a separate mobile app for Jumpit (App Store / Google Play CTAs present in the footer area) — design system for the native app is out of scope for this reference.

The 121px header, 363px footer, 340px hero height, 40px chip/dropdown height, 48px auth pill, and 1280×720 inspection are desktop-capture measurements, not cross-viewport specifications. Reading those measurements as desktop samples rather than a responsive contract, keeping the source’s own native-app sentence as a recorded footer-CTA fact rather than as a new domain list, leaving a validated chip-row scroll, a mobile filter sheet, and a 390×844 viewport unnamed because the source flags them for UPDATE, and reading light-mode-only as a capture observation rather than a published color-scheme contract, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

<!-- design-md:section content-locales -->
## 6. Content & Locales

Jumpit speaks **developer-to-developer in casual recruiter-vernacular Korean**, with English keyword inlining for technical signals. The register is "사람인이 우리 들으면 좀 의외다" — playful, slightly self-aware, never corporate-HR. Compare to Wanted's polished "growth blue" voice or Saramin's neutral marketplace tone — Jumpit deliberately sounds like a Slack message from a tech recruiter who codes on the weekend.

### Voice adjectives

1. **Vernacular** — casual contractions, trailing 's' for English-style plurals on Korean nouns, hashtag-style section names.
2. **Tech-fluent** — assumes the reader knows what DevOps, QA, K-유니콘, 부트캠프, AI School mean without unpacking.
3. **Slightly playful** — emoji-adjacent without using emoji; ".zip" / "꿀" / "T다" / "MZ" idiom adjacent to factual labels.

### Do / Don't

| Do | Don't |
|----|-------|
| "이번주 인기 포지션" | "금주 추천 채용공고를 확인하세요" (corporate-HR) |
| "내 연봉 앞자리가 바뀌는 포지션" | "고연봉 채용 정보 확인" (generic-marketplace) |
| "신입 개발자를 위한 더.루키 포지션" | "신입 개발자 대상 채용" (formal) |
| "기술스택 / 경력 / 지역 / 태그" filter labels (single-word, comma-aligned) | "원하시는 기술 스택을 선택해 주세요" (formal-imperative) |

### Voice samples *(OmD-original characterisations in the same register — not lifted from Jumpit)*

1. "이번주 가장 떡상하는 포지션 모음"
2. "프론트인데 백엔드도 좀 보고싶다면"
3. "팀 분위기 좋다 소문난 회사들"

All three are illustrative — derived from the *shape* of Jumpit voice (English-keyword inlining + trailing slang + section-as-curation framing), but no observed Jumpit phrasing was reproduced verbatim. Reading those three samples as illustrative shape evidence rather than lifted Jumpit copy is a derived editorial implementation inference from the verified surfaces; it is not Jumpit-authored or a separately published UI specification.

Published strings the source records, kept byte-exact:

- 점핏
- 사람인HR
- 회원가입 / 로그인
- 요즘 폼 미친 기업s
- #꿀 피드
- .zip
- 테마별 모음.zip
- 회원님을 위한 AI 추천 포지션을 보고싶다면?
- 전체 보기
- Notice
- 개발자 채용
- 이력서
- 개발자 인터뷰
- 기업 서비스
- 이번주 인기 포지션
- 내 연봉 앞자리가 바뀌는 포지션
- 신입 개발자를 위한 더.루키 포지션
- 기술스택 / 경력 / 지역 / 태그
- 서버/백엔드
- 프론트엔드
- 웹 풀스택
- 안드로이드
- iOS
- DBA
- 빅데이터
- AI·ML
- DevOps
- 정보보안
- QA
- 개발PM
- HW·임베디드
- 블록체인
- 마감
- D-day
- 신규
- 사람인이 우리 들으면 좀 의외다
- 귀하의 지원이
- Saramin 잡스
- Saramin 서치

Reproduce those strings byte-exact rather than translating or re-casing them. An English gloss may sit beside a non-English line; it never replaces the line. That byte-exact / gloss-beside rule, reading the three voice adjectives and the “Slack message from a tech recruiter” comparison as a public-voice observation rather than a complete product-microcopy guide, and reading the three OmD-original samples as illustrative shape evidence rather than lifted Jumpit copy, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

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

These are named values, not permissions to invent. Treating the list as named values rather than permissions to invent, and naming the list from the source’s own unresolved fields rather than adding surfaces the source did not name, are derived editorial implementation inferences from the verified surfaces; they are not Jumpit-authored or a separately published UI specification.

- **Hover, pressed, focus, disabled, empty, loading, error, success, and skeleton visual treatments.** Source §14 leaves those visual treatments unspecified except the captured filter-chip active. They are not `not-applicable`; applicability follows control meaning.
- **JobCard inner anatomy** (thumbnail / position title / company / location / D-day) and JobCard inner spacing. Flagged for UPDATE.
- **Outlined dropdown border colour.** Not captured cleanly.
- **Error/success/warning ladder on home + positions.** Job-status badges (마감 / D-day / 신규) and form-validation states require an UPDATE capture on a saved-job or application-form surface.
- **Keyboard focus-ring colour and width.**
- **Motion duration, easing, transition, and reduced-motion.** No motion token is promoted. Promote a value only after a component’s own computed transition properties, animation name, duration, easing, and reduced-motion behavior have been observed.
- **Mobile viewport, chip-row scroll affordance, and mobile filter sheet.** Source flags a 390×844 iPhone viewport with iOS UA for UPDATE.
- **Specific founder/launch quotes.** Not located at OmD attribution fidelity in public English-language sources.
