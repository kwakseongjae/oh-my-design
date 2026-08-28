# Korea Credit Data provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/kcd/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | kcd |
| name | Korea Credit Data |
| display_name_kr | 한국신용데이터 (캐시노트) |
| country | KR |
| category | fintech |
| homepage | `https://kcd.co.kr` |
| primary_color | `#2d91ff` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=kcd.co.kr&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected corporate surface in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations Action Blue / the soft and outline CTAs in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. Sibling records `curl -sL` byte size 623 bytes (≥ 450 → real favicon). cashnote.kr favicon measured at 1412 bytes as a fallback candidate; kcd.co.kr chosen as the company's own canonical mark. That slug remains an identity pointer, not a KCD-hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| tokens.extracted | 2026-06-26 |
| sibling inspected | 2026-06-26 |

The source footer records the verification verbatim as **Verified:** 2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces). That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved, as the source footer states: none. Two dual writings stay side by side in the portable body rather than being resolved: the product-hero color (`#192d82` in the philosophy-layer comment and §9 prompt; `#f3faff` in the sibling raw sample on the same H2), and the "캐시노트 시작하기" geometry (YAML/§4 Soft CTA 16px / 48px / 700; sibling 12px / 40px / 600, height not promoted).

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| corporate | corporate | `https://kcd.co.kr` | 2026-06-26 |
| product | product | `https://cashnote.kr` | 2026-06-26 |

### Tier 1 (as listed in the source footer)

- https://kcd.co.kr (corporate, live computed style)
- https://cashnote.kr (CashNote product, live computed style)
- https://blog.kcd.co.kr (official company blog)
- https://github.com/koreacreditdata (official GitHub org)

### Tier 2

- getdesign.md/kcd — SPA shell only, no KCD-specific data
- styles.refero.design ?q=cashnote / ?q=korea credit — returns only the generic browse list (same UUIDs across unrelated queries), no genuine KCD entry

Tier 2 data was not used to establish any token or component value.

## Token note

The YAML `tokens.note` value is: "primary = live action blue (#2d91ff), confirmed across both kcd.co.kr corporate and cashnote.kr product surfaces; pressed/strong blue (#0257d7). Deep navy (#192d82) carries product headings; corporate ink (#1e2137). Near-shadowless flat system; separation via tinted surfaces (#f4f7f9 / #f9fbfc) + blue tints (#e2f3ff / #cae7ff)." `tokens.source` is `live-extract`. `components_harvested` is `true`. Eight component records sit in the token set: `button-soft`, `button-outline`, `button-corporate`, `input-field`, `card-surface`, `card-tint`, `badge-stat`, `nav-link`.

## Sibling handling

Sibling `web/references/kcd/.verification.md` exists. It is adopted as Proof reinforcement, not as a second token set. Issued-copy needles named as measurement targets in the sibling are kept in the portable body (A5a). Sibling-only computed extras that the source DESIGN.md does not establish as tokens stay in this ledger and are not promoted:

- corporate hero height 66px
- nav padding `0px 0px 25px`
- corporate background-frequency hit `rgb(13,23,65)` (`#0d1741`)
- corporate text-frequency hit `rgb(87,168,255)` (`#57a8ff`)
- cashnote.kr body `color: rgb(0, 0, 0)` (source Don't list refuses pure black as a text token)
- border-radius frequency `50%` ×15 (avatars) and `60px` ×2 on cashnote.kr
- sibling inspect chrome: playwright, chromium, headless, `1440×900`, ko-KR locale

Dual writings the sibling completes, already named in the source, stay in `DESIGN.md` with both sides:

- corporate hero 52px / 700 / white on "모든 과정이 쉬워지도록 돕습니다" (source §1 "52–56px"; sibling exact 52px)
- product hero color `#192d82` (philosophy comment / §9) beside `#f3faff` (sibling raw sample)
- "캐시노트 시작하기" YAML/§4 16px / 48px / 700 beside sibling `border-radius: 12px`, height 40px, `font-weight: 600` (sibling-only height; not promoted into the portable token set)
- Title use "사업자 경영관리 서비스" / "관리 거래액" (sibling complete; YAML "Stat / sub-section titles")
- Section Hero use "창업을 준비하는 사장님들을 위한 첫걸음" (sibling / philosophy comment; YAML "Section hero headlines")
- Feature Head use "매출을 확인하고 관리하는 모든 순간" (sibling / §10; YAML "Product feature heads")

## Byte-form notes

- YAML color keys are lowercase (`#2d91ff`). Source §2 roles use the same lowercase. Both stay.
- `tokens.colors.canvas` and `tokens.colors.on-primary` are the same hex `#ffffff` on two keys. Both stay named.
- YAML line heights stay unitless ratios (`1.10`, `1.21`, `1.35`, `1.27`, `1.20`, `1.50`, `1.00`).
- YAML spacing and rounded steps stay unitless integers. §5 px spellings sit beside them.
- `tokens.spacing.md: 12` is not `tokens.rounded.md: 12`. `tokens.spacing.base: 16` is not `tokens.rounded.lg: 16` and not a type-role 16. `tokens.spacing.lg: 24` is not outline padding `0 24px`. `tokens.spacing.xxl: 48` is not soft-CTA height `48px`. `tokens.rounded.full: 9999` is not written as `9999px` in the YAML key; the §5 spelling `9999px` stays beside it.
- YAML `type` is attached only to the eight records that have that key. `card-surface`, `card-tint`, and `badge-stat` keep `Primitive type` and omit kind + applicability map (C4).

## Claim ledger

| claim | surface |
|---|---|
| tokens.colors.primary / primary-deep | both (`kcd.co.kr`, `cashnote.kr`) |
| tokens.colors.navy | `cashnote.kr` product headings |
| tokens.colors.ink / ink-deep | `kcd.co.kr` corporate |
| tokens.colors.body / muted / faint | both |
| tokens.colors.canvas / surface / surface-alt / hairline / on-primary | both |
| tokens.colors.tint-blue / tint-blue-strong / pale-blue | product highlight / reversed text |
| tokens.typography.family.sans | both |
| tokens.typography.display-hero | `cashnote.kr` |
| tokens.typography.display | section heroes |
| tokens.typography.heading | `kcd.co.kr` |
| tokens.typography.subheading / title | `cashnote.kr` |
| tokens.typography.nav | `kcd.co.kr` |
| tokens.typography.body / button-lg / button | both / product CTAs |
| tokens.spacing.* | both |
| tokens.rounded.* | both |
| tokens.shadow.none | both |
| tokens.components.button-soft | `cashnote.kr` |
| tokens.components.button-outline | `cashnote.kr` |
| tokens.components.button-corporate | `kcd.co.kr` |
| tokens.components.input-field | form/search (source does not split the surface) |
| tokens.components.card-surface / card-tint / badge-stat | `cashnote.kr` |
| tokens.components.nav-link | `kcd.co.kr` |

## Proof notes

- verification_v2 schema: none in source frontmatter. Sibling method: playwright getComputedStyle on both surfaces, 2026-06-26.
- components_harvested: true
- Interaction expansions are not recorded as a count. Uncaptured hover/focus-visible treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Philosophy-layer note: founding details beyond live homepage mission text are general public knowledge, not directly quoted from a verified KCD statement in that turn. Mission phrases are verbatim from the live homepage. Interpretive claims ("one action, one color", "flat and fast as a rejection of legacy financial software chrome") are editorial readings.
- Official blog and GitHub org are brand-owned sources; they do not supply the computed interface tokens.
- §11 narrative facts landed in `DESIGN.md` Scope ¶3 and listed here for 1:1: founded **2016** by 김동호; 아이디인큐 (now 오픈서베이); 캐시노트 launched **2017** through KakaoTalk; homepage frames "사업자 경영관리" / "관리 거래액" / "캐시노트 이용 사업장"; expansion into payments, supplies purchasing, lending/credit, and consultant services; "사업의 모든 순간"; closing refuse-and-embrace sentence (legacy chrome / dark-pattern urgency refused; flat mobile-native interface, single action blue, large plain-Korean headlines, empathy-first 사장님 stance embraced). Founding details beyond live homepage mission text remain public-knowledge class, not a verified KCD quotation in that turn.

## Omission ledger

Mention (disposition pointer) is not use (fact rehost). This table names omitted classes, not the omitted strings.

| Omitted | Boundary | Reason |
|---|---|---|
| §13 personas (3 entries; name, age, city, motivation, affiliation classification) | dropped at the persona-section boundary | fictional archetypes; D2 / D2a — unidentified. Not rehosted in this file |
| `ease-enter` / `ease-exit` / `ease-standard` curve values | curve-value only | unsourced; `ease-exit` matches `spec/omd-v0.1.md` template; none in the live-inspect comment. Duration and signature motion kept |
| sibling-only frequency extras (`#0d1741`, `#57a8ff`, cashnote body `#000000`, `60px` radius, `50%` avatar computed form, nav padding `0px 0px 25px`, hero height 66px) | sibling ledger only | not established as source DESIGN.md tokens |
| `[FILL IN]` | none in source | no placeholder wrapper to store |

## §9 deletion check

§9 Agent Prompt Guide was deleted as tool-facing restatement. Each unique brand constraint it names was checked against the portable body before deletion (A2, A3):

| §9 item | Portable landing |
|---|---|
| Action / pressed / navy / ink / ink-deep / body ladder / white / surfaces / tints / hairline | Foundations Semantic color |
| Hero 72px / 700 / `#192d82` / "내 사업이 채워지는 모든 순간"; Soft CTA `#f4f7f9` / `#2d91ff` / 16px / 0 16px / 48px / 19px 700 / "앱 다운로드"; no shadow | Typography Product Hero + Components Soft CTA. `#192d82` on that hero stays beside sibling `#f3faff` |
| Feature card `#f9fbfc` / 20px / 0 24px / no shadow; title 44px / 700 / `#192d82`; body 16px / 400 / `#44546f` | Components Surface Card (A3: title / body pairing landed here) |
| Stat chip `#e2f3ff` / `#192d82` / 20px / 16px 600 / "2026년 5월 기준" | Components Stat Chip |
| Corporate nav white / 18px 700 / `#1e2137` / active `#2d91ff`; ghost 1px `#1e2137` / 6px / 15px 32px / "서비스 보기" | Components Corporate Top Nav + Corporate Ghost |
| Iteration rules (Pretendard, one action color, no shadows, blue tints, navy/ink headings, 20/16/6 radii, soft-CTA signature) | Experience Application rules + Avoid + Foundations |

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with a file-level count of `not KCD-authored or a separately published UI specification`: **36**. This table has **36** rows (E1 1:1).

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 (`DESIGN.md` 9) | Two URLs as inspected token surfaces; values stay attached; one surface's heading color or CTA geometry is not the other's |
| Experience — Scope ¶2 (`DESIGN.md` 11) | Calm data-grade / trustworthy-and-engineered / real-money-for-merchants readings |
| Experience — Scope ¶3 (`DESIGN.md` 13) | Classifying the 2016 / 김동호 / 2017 / refuse-and-embrace narrative, including the closing sentence, as context that does not supply tokens; keeping the philosophy-layer authority bound |
| Experience — Primary tasks (`DESIGN.md` 19) | Selecting the three surface tasks; refusing to take them from the source's persona section |
| Experience — Audience (`DESIGN.md` 28) | Reading the source-named groups as audience, and dropping archetype biographies rather than promoting them |
| Experience — Distinctive traits (`DESIGN.md` 32) | Grouping the eight traits as a restatement of Key Characteristics, including the groupings and the readings inside them |
| Experience — Principles (`DESIGN.md` 45) | Reading the five source principles as implementation principles; every UI implication |
| Experience — Application rules (`DESIGN.md` 55) | Grouping the eight Do-list rules, and the reasons attached to them |
| Experience — Avoid (`DESIGN.md` 68) | Grouping the seven Don't-list rules, and the reasons inside them |
| Foundations — Semantic color (`DESIGN.md` 84) | Role-to-path pairing; taking those role names from the source's own labels; heading colors stay on the surface the source attached |
| Foundations — Semantic color note (`DESIGN.md` 103) | Keeping the YAML token note as the token-set's own writing |
| Foundations — Spacing (`DESIGN.md` 120) | Keeping each numeral on its own key path |
| Foundations — Shape (`DESIGN.md` 134) | Reading the figures as the rounded keys named beside them rather than as shared numerals across spacing; keeping `full: 9999` beside `9999px` |
| Foundations — Elevation (`DESIGN.md` 147) | Shadow-philosophy clean/fast/mobile-native reading |
| Foundations — Motion spring (`DESIGN.md` 157) | Spring/overshoot avoidance as derived stance |
| Foundations — Motion gate (`DESIGN.md` 159) | Omitting three unsourced curves; keeping arriving / dismissal / two-way use names as use claims that do not restore a curve; keeping three duration rows as duration tokens; keeping the two signature motions; holding the five-kind promotion gate |
| Typography — Font evidence (`DESIGN.md` 169) | Evidence-class application readings |
| Typography — Family (`DESIGN.md` 183) | Fallback-never-substitute reading |
| Typography — Type roles (`DESIGN.md` 187) | Keeping YAML integers beside §3 px/rem; keeping unitless line heights as ratios; attaching each size to the surface that established it; taking the longer of two writings |
| Typography — Type roles sizes (`DESIGN.md` 203) | Reading type sizes as roles rather than spacing numerals |
| Typography — Corporate hero / product-hero color (`DESIGN.md` 205) | Keeping 52px on the corporate hero; keeping `#192d82` and `#f3faff` as two writings |
| Typography — Principles (`DESIGN.md` 207) | Treating the four source typography principles as the source's own list |
| Typography — Assets (`DESIGN.md` 211) | Catalog-boundary reading of the Google s2 favicon slug |
| Components — Capture record (`DESIGN.md` 233) | Preserving the source state contract rather than an unadopted catalog graph; applicability procedure; Focus-vs-focus-visible; every kind and applicability verdict and its reason; kind-omission; refusal of a complete state-coverage claim |
| Components — Soft CTA (`DESIGN.md` 247) | 16/48/700 as this control; refusing to collapse the sibling's second-label measure into this YAML row |
| Components — Outline CTA (`DESIGN.md` 272) | 16px / 0 24px / 56px as this control's geometry |
| Components — Corporate Ghost (`DESIGN.md` 296) | 6px / 15px 32px / 16px as this control's geometry |
| Components — Form field (`DESIGN.md` 320) | 12px / 0 16px as this field; observed Focus is not `focus-visible` treatment |
| Components — Surface Card (`DESIGN.md` 342) | 20px / 0 24px as this card; landing the §9 title / body pairing |
| Components — Blue-Tinted Card (`DESIGN.md` 354) | 20px as this card's radius rather than Surface Card's 20px |
| Components — Stat Chip (`DESIGN.md` 367) | 20px / 16px as this chip's geometry |
| Components — Corporate Top Nav (`DESIGN.md` 380) | Keeping YAML keys and the §4 `#ffffff` background on the same nav |
| Layout & Platforms (`DESIGN.md` 395) | Breathing-room / data-heavy-fintech characterizations |
| Layout & Platforms targets (`DESIGN.md` 407) | Reading 48 / 56 / 51 / 15×32 / 18 / 24–32 / 72 / 1024-1440 as the roles named beside them; keeping the Desktop band as the source wrote it rather than as a measurement of any one canvas |
| Content & Locales — voice (`DESIGN.md` 412) | Calling the register plain/empathetic/reassuring; refusing to treat it as a separately published microcopy guide |
| Governance — Named gaps (`DESIGN.md` 465) | Reading the list as unnamed values, not as coverage of domains the source never named |
