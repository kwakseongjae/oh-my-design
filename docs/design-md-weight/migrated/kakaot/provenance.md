# Kakao T provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kakaot/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kakaot |
| name | Kakao T |
| country | KR |
| category | consumer-tech |
| homepage | `https://www.kakaomobility.com` |
| primary_color | `#FEE500` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kakaomobility.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-05-27 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected corporate surface in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations Kakao Yellow / the primary CTA in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a Kakao T-hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-05-27 |
| tokens.extracted | 2026-06-09 |

The source footer records the verification verbatim as **Verified:** 2026-05-27. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer states: Brand yellow `#FEE500` (high-attention accent) vs. black-led product/corporate surface — resolved in the source as a documented two-register palette (yellow = beacon CTA, black = body + dark actions), consistent with the live corporate page where yellow is sparing. The portable body keeps both registers (`DESIGN.md` Semantic color).

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| corporate | corporate | `https://www.kakaomobility.com` | 2026-05-27 |

The source names no `verification_v2.sources` block. The inspected surface is the corporate WebFetch named in the source footer.

### Tier 1 (as listed in the source footer)

- kakaomobility.com (live WebFetch 2026-05-27 — black-dominant corporate surface, generous whitespace, minimal text-link CTAs `자세히 보기`, Korean hero `우리의 기술로 생활을 움직입니다`, yellow `#FEE500` notably reserved/sparing on the corporate page). Kakao yellow `#FEE500` is the widely-documented Kakao corporate brand color.

### Tier 2

- getdesign.md/kakaot — not checked
- styles.refero.design — not checked
- Kakao house typeface (Kakao OTF / Sandoll) referenced from SandollCloud listing; product-UI Pretendard fallback is a convention, not a verified token

Tier 2 data was not used to establish any token or component value.

## Token note

The YAML `tokens.source` value is `prose-derived`. `components_harvested` is `true`. Thirteen component records sit in the token set: `button-primary`, `button-dark`, `button-outline`, `button-danger`, `input-search`, `input-error`, `card-vehicle`, `card-trip`, `badge-status`, `badge-live`, `dialog-sheet`, `tab-bottom`, `toast-snackbar`.

## Sibling handling

`find web/references/kakaot -type f` returns only `DESIGN.md`. There is no `.verification.md` sibling. No sibling-only value was available to adopt or to withhold.

## Byte-form notes

- YAML color keys are lowercase (`#fee500`). Source §2 roles use uppercase (`#FEE500`). The portable body keeps both writings on the named roles.
- `tokens.colors.primary` and `tokens.colors.brand` are the same hex on two keys. `tokens.colors.foreground` and `tokens.colors.on-primary` are the same hex on two keys. Both pairs stay named.
- `#EBECED` and `#D1D3D5` are source §2 roles with no YAML color key. They stay on those prose roles.
- YAML line heights stay unitless ratios (`1.3`, `1.35`, `1.4`, `1.5`). Display Hero YAML size is `30` beside the §3 band `28–32px`. Fare Display YAML has no lineHeight; the §3 spelling `tight` stays (A1a).
- `tokens.spacing.md: 12` is not `tokens.rounded.md: 12`. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and not a type-role 16. `tokens.spacing.lg: 20` is not `tokens.components.dialog-sheet.radius: 20px`. `tokens.spacing.xxl: 32` is not the Display Hero `28–32px` band.
- `tokens.rounded.full: 9999` is not the component `999px` pill and is not written as `9999px`.
- `tokens.shadow.floating` is `0px 4px 16px rgba(0,0,0,0.16)`. `tokens.components.toast-snackbar.shadow` is `0px 4px 12px rgba(0,0,0,0.16)`. Both writings stay.
- YAML `type` is attached only to the thirteen records that have that key. `card-trip`, `badge-live`, and `toast-snackbar` keep `Primitive type` and omit kind + applicability map (C4).

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 fictional archetypes | whole fictional-biography class | The source labels its three entries as fictional archetypes, not individual people. They are not promoted to Audience or to `primary-tasks`, and they are not re-hosted here: no name, motivation, or affiliation classification is restated as an item (D2, D2a). Audience in the portable body keeps only the group-level wording the source records independently of that section: anyone who hails a taxi without thinking; riders who read in motion; Koreans who tap the single yellow icon to get from anywhere to anywhere. |
| Unsourced motion curves | value boundary | Four catalog-template curves omitted at the curve-value boundary: `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)`, `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`, `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)`, `ease-emphasized` `cubic-bezier(0.2, 0.0, 0, 1)`. Durations 0ms / 150ms / 250ms / 400ms / 300ms, the 90% default-motion use claim, the four signature motions, and the reduced-motion contract stay in Foundations. |

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `brand` `#fee500` | corporate WebFetch + documented Kakao corporate color |
| `tokens.colors.primary-hover` `#f2d900` | prose-derived product CTA |
| `tokens.colors.canvas` `#ffffff` | prose-derived product chrome |
| `tokens.colors.foreground` / `on-primary` `#191919` | corporate surface + product text on yellow |
| `tokens.colors.muted` `#76787a` | prose-derived |
| `tokens.colors.surface` `#f5f6f7` | prose-derived |
| `tokens.colors.hairline` `#e5e6e8` | prose-derived |
| `tokens.colors.body` `#4b4f54` | prose-derived |
| `tokens.colors.text-strong` `#26282b` | prose-derived |
| `tokens.colors.text-tertiary` `#a2a4a6` | prose-derived |
| `tokens.colors.success` `#0fb882` | prose-derived |
| `tokens.colors.info` `#3478f6` | prose-derived |
| `tokens.colors.warning` `#ff8a00` | prose-derived |
| `tokens.colors.error` `#f5444c` | prose-derived |
| `tokens.colors.black` `#000000` | corporate + product |
| `tokens.typography.family.sans` Pretendard | convention, not a verified token |
| `tokens.typography.family.mono` SF Mono | fare/ETA tabular contexts |
| `tokens.typography.display-hero` through `fare-display` (size, weight, lineHeight, use) | prose-derived type roles |
| `tokens.spacing.xs` through `xxl` | prose-derived |
| `tokens.rounded.sm` / `md` / `lg` / `full` | prose-derived |
| `tokens.shadow.card` / `sheet` / `floating` | prose-derived |
| `tokens.components.button-primary` through `toast-snackbar` (type and recorded fields) | prose-derived conventional geometry |
| Published strings 카카오 T / 호출하기 / 결제하기 / 자세히 보기 / 우리의 기술로 생활을 움직입니다 | source §1 / §4 / §10 / §11 |
| Illustrative, not verified verbatim: 기사님을 찾고 있어요 / 차량이 도착했어요 / 결제가 완료되었어요 | source §10 |
| 2017 launch / T = transportation / Kakao Taxi 2015 / Kakao Driver / Kakao Parking / seven-service span / design thesis friendly infrastructure / refusal pair / closing warm-middle sentence | source §11 narrative |

## Capture selectors

The source records no collector selectors. Component geometry is conventional prose, not a computed-style capture.

## Proof notes

- One named Tier 1 source, recorded 2026-05-27. The corporate page is the inspected surface. Product-UI hexes and component geometry are conventional.
- `components_harvested: true`; thirteen component records in the source token set.
- The source records no `focus-visible` string. The search field's `1px` border `#191919` is observed Focus, not a color assigned to the `focus-visible` row. Uncaptured hover, pressed, focus, disabled, error, and success treatments are omitted as values unless the source writes them on that same control; they are not turned into `not-applicable` for that reason. Applicability follows control role. State coverage is not claimed complete.
- Kakao T has no published first-party UI specification in the source. Derived-editorial qualifications therefore close with the toss-form example: not Kakao T-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- 2017 launch, the expansion of "T", Kakao Taxi from 2015, Kakao Driver, Kakao Parking, the seven-service span, the KakaoTalk yellow-as-national-signal sentence, the design thesis *friendly infrastructure*, the refusal of gamified maximalism and cold utilitarian gray, and the source §11 closing sentence — "It occupies the warm middle — yellow when it counts, calm everywhere else." — are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| Primary CTA `#FEE500` / `#191919` 16px/600, 12px radius, 14px 20px padding, ~52px, pressed `#F2D900`, disabled `#F5F6F7` / `#A2A4A6` | Components Primary (`DESIGN.md`) |
| Trip sheet 20px top-corner radius, sheet shadow, 36×4px `#E5E6E8` handle, matched-driver name 18px/600, ETA 24px/700, fare 24px/700, `운행 중` in `#3478F6` on `rgba(52,120,246,0.12)` | Components Trip Sheet + Capture record Success (matched) |
| Vehicle-class card 1px `#E5E6E8`, 12px radius, 16px padding, selected 2px `#191919` + yellow accent, class name 16px/600 `#26282B`, est. fare 14px/400 `#76787A` tabular | Components Vehicle-Class Card (A3: class-name / est-fare pairing landed here) |
| Destination search `#F5F6F7`, 12px radius, 14px 16px, 16px/400, placeholder `어디로 갈까요?` in `#A2A4A6` | Components Search / Address Field |
| Yellow = primary CTA + live markers only; map dominates; Pretendard product stack; tabular fares/ETAs; radius 12 / 16 / 20; dark `#191919` button | Experience Application rules + Foundations + Typography |

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with a file-level count of `derived editorial implementation inference`: **35**. This table has **35** rows (E1 1:1). The same 35 lines also carry `not Kakao T-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 (`DESIGN.md` 9) | Corporate URL as inspected token surface; product hexes stay conventional; every value stays attached to the surface or evidence class that established it; corporate page is not a computed extract of an unobserved trip screen |
| Experience — Scope ¶2 (`DESIGN.md` 11) | Knife's-edge / more-sober / deliberate-restraint / beacon-not-wallpaper readings |
| Experience — Scope ¶3 (`DESIGN.md` 13) | Classifying the 2017 / T / 2015 / thesis / refusal / warm-middle narrative, including the closing sentence, as context that does not supply tokens |
| Experience — Primary tasks (`DESIGN.md` 19) | Selecting the three surface tasks; refusing to take them from the source's persona section |
| Experience — Audience (`DESIGN.md` 28) | Reading the source-named groups as audience, and dropping archetype biographies rather than promoting them |
| Experience — Distinctive traits (`DESIGN.md` 32) | Grouping the seven traits as a restatement of Key Characteristics |
| Experience — Principles (`DESIGN.md` 44) | Reading the six source principles as implementation principles; every UI implication |
| Experience — Application rules (`DESIGN.md` 55) | Grouping the five Do-list rules |
| Experience — Avoid (`DESIGN.md` 65) | Grouping the five Don’t-list rules |
| Foundations — Semantic color (`DESIGN.md` 79) | Role-to-path pairing; `#EBECED` / `#D1D3D5` stay on prose roles; product hexes stay conventional |
| Foundations — Semantic color conflict (`DESIGN.md` 99) | Keeping both yellow and black-led registers rather than collapsing them |
| Foundations — Spacing (`DESIGN.md` 115) | Keeping each numeral on its own key path |
| Foundations — Shape (`DESIGN.md` 128) | Keeping `full: 9999` beside `999px`; sheet `20px` stays on the dialog record |
| Foundations — Elevation (`DESIGN.md` 139) | Map-over-chrome elevation reading; toast 12px blur beside floating 16px blur |
| Foundations — Motion spring (`DESIGN.md` 155) | Spring/overshoot avoidance as derived stance |
| Foundations — Motion gate (`DESIGN.md` 157) | Omitting four unsourced curves; keeping the five duration rows as duration tokens rather than easing curves; keeping the 90% default-motion use claim as a use claim that does not restore a curve; holding the five-kind promotion gate |
| Typography — Font evidence (`DESIGN.md` 167) | Evidence-class application readings |
| Typography — Family (`DESIGN.md` 184) | Fallback-never-substitute reading |
| Typography — Type roles (`DESIGN.md` 188) | Keeping YAML ratios and §3 px spellings; refusing to rewrite `tight` as a ratio |
| Typography — Type roles sizes (`DESIGN.md` 204) | Reading type sizes as roles rather than spacing numerals |
| Typography — Assets (`DESIGN.md` 208) | Catalog-boundary reading of the Google s2 favicon slug |
| Components — Capture record (`DESIGN.md` 232) | Applicability procedure, Focus-vs-focus-visible, and kind-omission |
| Components — Primary (`DESIGN.md` 247) | 52px / 14px 20px / 12px as this CTA's geometry rather than a spacing step |
| Components — Search (`DESIGN.md` 338) | `14px 16px` as this field's padding rather than `tokens.spacing.base: 16`; observed Focus is not `focus-visible` treatment |
| Components — Vehicle-Class Card (`DESIGN.md` 384) | 16px padding / 12px radius as this card's geometry; landing the source Agent Prompt Guide's class-name / est-fare pairing on this card rather than dropping it |
| Components — Trip / Receipt Card (`DESIGN.md` 406) | 16px radius / 20px padding as this card's geometry |
| Components — Status Chip (`DESIGN.md` 420) | `999px` as this chip's pill rather than `full: 9999` |
| Components — Live Status Badge (`DESIGN.md` 443) | Keeping success green and en-route blue on the same pill role |
| Components — Trip Sheet (`DESIGN.md` 458) | 20px radius / 20px padding as this sheet's geometry |
| Components — Snackbar (`DESIGN.md` 503) | 12px blur as this toast's shadow rather than `tokens.shadow.floating` |
| Layout & Platforms (`DESIGN.md` 509) | Reading the source layout list as the contract rather than a surface-to-surface measurement transfer |
| Layout & Platforms targets (`DESIGN.md` 519) | Reading 52 / 56 / 44–48 / 40–48 / 36×4 / ~1200 as the roles named beside them |
| Content & Locales — voice (`DESIGN.md` 524) | Calling the register a calm dispatcher; refusing to treat it as a separately published microcopy guide |
| Content & Locales — samples (`DESIGN.md` 544) | Classifying the last two lines as illustrative; keeping the corporate mission and `자세히 보기` on kakaomobility.com |
| Governance — Named gaps (`DESIGN.md` 580) | Reading the list as unnamed values, not as coverage of domains the source never named |
