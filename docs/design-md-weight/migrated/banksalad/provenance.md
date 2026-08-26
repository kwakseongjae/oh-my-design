# Banksalad provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/banksalad/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | banksalad |
| name | Banksalad |
| country | KR |
| category | fintech |
| homepage | https://www.banksalad.com |
| primary_color | `#13bd7e` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=banksalad.com&sz=256` |
| omd format (source) | 0.1 |
| ds.name | Banksalad GitHub |
| ds.url | https://github.com/banksalad |
| ds.type | brand |
| ds.description | Banksalad's public GitHub org including styleguide repos and BPL (Banksalad Product Library) reference material. |
| ds.og_image | https://avatars.githubusercontent.com/u/71009899?s=280&v=4 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |
| components_harvested | true |

Token note from source: `Five current first-party web surfaces. Pretendard is loaded and used; swiper-icons is declared-only. Legacy #04c584, BM JUA, 2px-default components, inputs, charts, and modal claims were not promoted.` Dual destination (E2a): this ledger and portable Experience Scope (same note plus the adjacent register-split / derived editorial implementation inference / not-Banksalad-authored or a separately published UI specification limiter).

Catalog logo type `favicon` / Google s2 slug URL `https://www.google.com/s2/favicons?domain=banksalad.com&sz=256` is this identity ledger only. Portable Typography & Assets states the identity-boundary without the URL. It is not a captured first-party mark. No portable Named-gaps row was invented for a first-party logo-file absence.

Homepage `https://www.banksalad.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a). The five product URLs and two BPL article URLs are dual Scope + this surfaces/Tier 1 ledger (E2a). `ds.type: brand`, `ds.url` `https://github.com/banksalad`, and the YAML `ds.description` BPL/styleguide sentence are dual Scope + this ledger (E2a). `ds.name` and `ds.og_image` are this ledger only (A1c).

Catalog `primary_color` `#13bd7e` is identity metadata + portable Scope token-note 13 + Scope atmosphere 17 + Distinctive limiter/bullet 40/43 + capture-bound limiter/bullet 64/68 + Semantic unmerged-role 89 + Foundations Current accent 91 + Primary Loan Action field note (as not Current accent) 214 + Content Filter Chip Text 232 + Filter Chip field note 239 (E2a). Avoid 75–81 does not contain the `#13bd7e` hex; it names `#04c584` / `#10df99` as not-current. It is not loan-action `#06a96c`.

`tokens.source: reconciled` and `components_harvested: true` are this ledger only (A1c). YAML `primary-action.states` and `filter-chip.states` `"default captured; no safe active interaction expansion"` are this claim ledger + portable component `states` fields (A1c); they are not merged into Use.

## Freshness

| Event | Date |
|---|---|
| verified (YAML) | 2026-07-12 |
| verification_v2.checked | 2026-07-12 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 |
| tokens.extracted | 2026-07-12 |
| footer Verified | 2026-07-12 (omd:migrate) |
| HTML-comment philosophy-layer fetch | 2026-05-13 |

Conflicts unresolved: none (source footer). Preserved value pairs inside the reconstruction: `#13bd7e` current accent vs `#06a96c` loan action vs superseded `#04c584` / `#10df99`; Foreground `#111111` vs Secondary `#555c68` vs Neutral `#606874` vs Muted `#9fa4b0`; YAML Caption 14px / `1.43` vs body-table Caption 12px; YAML Heading 20px / `1.4` vs Supporting Heading 18px; YAML `rounded` 6 / 16 / 24 / 9999 vs disclosure `0px`; YAML line-height ratios `1.4` / `1.5` / `1.625` / `1.43` vs body-table 28px / 24px / 26px / 20px; YAML tracking `0` / `-0.08` / `-0.07` vs body `normal` / `-0.08px` / `-0.07px` / `-0.09px` / `-0.06px`. Both sides of each pair stay in portable Foundations, Typography, or Components. Neither is chosen.

Earlier mistakes reverted (source footer; dual portable Avoid/Scope + this ledger): `#04c584` canonical primary, `#10df99` hover, BM JUA current usage, 2px default radius, and uncaptured input/chart/modal/state claims.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing-product | https://www.banksalad.com/ | 2026-07-12 |
| contents | product-directory | https://www.banksalad.com/contents | 2026-07-12 |
| loan | product-flow | https://www.banksalad.com/loan/interest-rate-cut | 2026-07-12 |
| safety | support-product | https://www.banksalad.com/customer-safety | 2026-07-12 |
| card | product-detail | https://www.banksalad.com/product/cards/CARD002319 | 2026-07-12 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.banksalad.com/ | 2026-07-12 |
| contents-live | product-surface | https://www.banksalad.com/contents | 2026-07-12 |
| loan-live | product-surface | https://www.banksalad.com/loan/interest-rate-cut | 2026-07-12 |
| safety-live | product-surface | https://www.banksalad.com/customer-safety | 2026-07-12 |
| card-live | product-surface | https://www.banksalad.com/product/cards/CARD002319 | 2026-07-12 |
| bpl-design | official-doc | https://blog.banksalad.com/tech/banksalad-product-language-design/ | 2026-07-12 |
| bpl-engineering | official-doc | https://blog.banksalad.com/tech/banksalad-product-language-ios/ | 2026-07-12 |

### Tier 1

- https://www.banksalad.com/ — home / marketing-product
- https://www.banksalad.com/contents — contents directory
- https://www.banksalad.com/loan/interest-rate-cut — public loan interest-rate flow
- https://www.banksalad.com/customer-safety — customer-safety
- https://www.banksalad.com/product/cards/CARD002319 — public card-product detail
- https://blog.banksalad.com/tech/banksalad-product-language-design/ — official BPL design article
- https://blog.banksalad.com/tech/banksalad-product-language-ios/ — official BPL implementation article (quote “Communication cost is most expensive. Code and Show first, argue after that.”)

The five product URLs and two BPL URLs are dual-destination with portable Experience Scope (E2a). Observed voice-sample URLs are also dual Content parentheticals + this ledger (E2a).

### Tier 2 (no usable record)

- https://getdesign.md/banksalad (no brand record found in exact search)
- https://styles.refero.design/?q=banksalad (attempted; browser-harness unavailable and indexed search returned no brand result)

Tier 2 status: unavailable.

### Narrative (not interface tokens)

- Current first-party web presence: product comparison, credit and loan guidance, financial content, customer safety, health-asset direction; home comparison inventory and recommendation engine. Dual portable Scope + this ledger (E2a).
- BPL process history (Figma, versioned libraries, sample applications, “Code and Show first…”) is official-doc narrative, not a 2020 token sheet. Dual portable Scope/Principles + this ledger (E2a).
- HTML-comment 2026-05-13 third-party press (Hankyung 2019-03-12, Korea Herald 2019-02-22 / 2019-08-28, PitchBook) and the founder-mission quote are recorded in the source comment and are not promoted as current product narrative. The founder-mission quote is retained byte-exact (A5): “정보 비대칭성을 해소해 누구나 똑똑해지는 세상을 만들겠다”. The source attributes it to Kim Tae-hoon via Korean press summaries and renders its sense in English as “resolve information asymmetry”; that English rendering sits beside the Korean, never in place of it. The visible §11 says this reference does not rely on third-party founder mythology, funding figures, or fabricated competitive comparisons. Those press URLs and that quote stay on this ledger and are not copied into portable Experience as tokens (D2). No fictional persona names from the HTML comment are copied here (D2).

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-12; `contents` = contents / contents-live; `loan` = loan / loan-live; `safety` = safety / safety-live; `card` = card / card-live.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.action | loan |
| tokens.colors.canvas | home |
| tokens.colors.foreground | home |
| tokens.colors.secondary | home |
| tokens.colors.muted | card |
| tokens.colors.line | safety |
| tokens.typography.family.sans | home |
| tokens.typography.heading.size / weight / lineHeight / tracking / use | loan |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.label.size / weight / lineHeight / tracking / use | home |
| tokens.typography.caption.size / weight / lineHeight / tracking / use | card |
| tokens.spacing.sm / md / base | home |
| tokens.spacing.lg | safety |
| tokens.rounded.chip | contents |
| tokens.rounded.action | loan |
| tokens.rounded.card | safety |
| tokens.rounded.full | home |
| tokens.shadow.flat | home |
| tokens.components.primary-action.* | loan |
| tokens.components.filter-chip.* | contents |
| tokens.components.safety-card.* | safety |
| tokens.components.disclosure-row.* | card |

YAML `primary-action.states` / `filter-chip.states` `"default captured; no safe active interaction expansion"` is YAML metadata + portable component `states` fields (not Use).

`#606874` Neutral is body §2 only (loan and customer-safety explanatory copy), not a YAML color. Supporting Heading 18px / `-0.09px` and body-table Caption 12px / `-0.06px` are body §3 only.

## Capture selectors

The source does not record `data-omd-capture` selectors. None are invented here.

## Omitted unattributed curves

Exact cubic-bezier values from source §15 superseded synthetic table, omitted from portable Foundations (the one live accordion curve is kept):

- `ease-enter` `cubic-bezier(0.0, 0.0, 0.2, 1)`
- `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` — matches `spec/omd-v0.1.md` template example `ease-exit`
- `ease-standard` `cubic-bezier(0.4, 0.0, 0.2, 1)`
- `ease-data` `cubic-bezier(0.25, 0.46, 0.45, 0.94)`

These sit in a source `<details>` block marked “not verified product facts.” Duration names from that same block (`motion-instant` 0ms, `motion-fast` 150ms, `motion-standard` 250ms, `motion-slow` 400ms, `motion-data` 600ms), signature-motion proposals (score count-up, chart series draw-in, recommendation card `translateY(4px)`, `prefers-reduced-motion: reduce` collapsing all `motion-*` to `motion-instant`), and “no spring overshoot” editorial are this omission ledger, not portable Motion. Portable Motion keeps the live accordion `350ms` height/opacity / `cubic-bezier(0.25, 0.1, 0.25, 1)` observation and the B3 five-kind per-component computed gate. Named gaps lists the omitted extra motion without enumerating the five evidence kinds; the B3 full text is Foundations Motion only.

## Omitted §9 construction prompts

§9 Agent Prompt Guide Quick Color Reference, Example Component Prompts, and numbered Iteration Guide are deleted from the portable body (no adapter slot). Hexes and geometry in that guide belong to the superseded 2026-05 snapshot and are kept in the snapshot token ledger below, not promoted as current Foundations. Unique current values were already in YAML / §1–§4. Slot-free delegation to `omd-apply` was not used.

## Placeholder omission ledger

No `[FILL IN]` placeholders exist in the source; none are emitted.

## Superseded 2026-05 CSS-bundle snapshot (omission ledger)

Source `<details>` blocks and footer-reverted 2026-05 CSS-bundle values remain this omission ledger. They are not a wholesale classification of current portable §5–§9. Current portable §5/§8 (Layout 295–341; Spacing 107; Shape 115–123) keep: 4px-through-64px ladder, 20px/24px card padding, 12px table-row, grid/container, grouping-gap, density-as-brand whitespace, `#ffffff`/`#fbfbfb` section-rhythm, 4px / 8px / 10–12px / 30–41px / 50% radius roles unmerged from YAML harvested 6/16/24/9999/`0px`, breakpoints, collapsing including Hero 52px → 36px, 24–40px logo framing, and 28–32px filter-pill heights as a §8 touch-target record. Footer reverted only `#04c584` / `#10df99` / BM JUA / 2px default radius / uncaptured input/chart/modal/state. Density-as-brand, section-rhythm, and those extra radius roles are portable current body, not this omission ledger.

**Footer-reverted / snapshot hexes (not portable current tokens):** `#04c584`, `#10df99`, `#434444`, `#e1e1e1`, `#2b2b2b`, `#fe493d`, `#f3fdfa`, `#f5f5f5`, `#7b7b7b`, `#34464b`, `#5c818a`, `#1c6c73`, `#a7c7cf`, `#fd8700`, `#f56200`, `#999999`, `#acacac`, `#000000`, `#0099ff`, `#d8dfe6`. `#fbfbfb` is source §5 section-rhythm (with canvas `#ffffff`) and is not footer-reverted; it is portable Layout whitespace 316 / limiter 295, not a snapshot hex in the same class as `#04c584` and not a second YAML canvas token.

**Snapshot px not used as current harvested geometry:** Status Pill radius 41px; Amount Input font 22px; Table Header Row 13px / 700; Warning badge copy 13px; the 22px / 700 right-aligned amount-input recipe (Amount Input height 56px itself is current loan-action height in portable Components 209 + Layout 293/295); Sign-in CTA 6px 14px padding on a 16px-radius auth pill from the old nav snapshot; Data Card padding 20px 24px with `0 2px 5px rgba(0, 0, 0, 0.12)` / `0 2px 5px rgba(0,0,0,.12)` as a snapshot card recipe (portable current card padding 20px / 24px is Layout 301); Card — Soft Variant 8px radius / `0 2px 8px rgba(0, 0, 0, 0.1)` (portable 8px is the source §5 soft-marketing radius role at Shape 120 / Layout 321, not this snapshot card); Text Input height 48px as an uncaptured input (Layout 339 records input 48px / amount-input 56px as a §8 touch-target record, not as captured input components); Primary CTA height 42px from the snapshot control. **Current portable, not this snapshot:** §5 scale 4px through 64px including 32px (Spacing 107 / Layout 300); Hero 52px → 36px collapsing (Layout 335); logos 24–40px (Layout 337); filter-pill 28–32px as a §8 touch-target record (Layout 339); density-as-brand (Layout 315); `#ffffff`/`#fbfbfb` section-rhythm (Layout 316); 4px / 8px / 10–12px / 30–41px / 50% radius roles (Shape 119–123 / Layout 320–324). Snapshot-only remainder still here: Modal shadow `0 17px 50px`; Halo `0 0 2px rgba(0,0,0,.26)`; Pressed inset `inset 0 1px 1px rgba(0,0,0,.12)` plus ~5% darker; Skeleton `#f5f5f5`; Table header uppercase letter-spacing 0.05em. Snapshot Status Pill 41px stays unmerged from portable 30–41px filter-pill / tag / avatar radius role.

**Superseded ms:** 0ms, 150ms, 250ms, 400ms, 600ms (synthetic duration table). Portable Motion keeps 350ms only.

**Pct remainder:** 50% avatar / icon-backdrop radius is portable current Shape 123 / Layout 324, unmerged from YAML `full` 9999; it is not this omission ledger. Remaining pct remainder: 8% (skeleton shimmer white highlight); 5% (pressed background shift).

**Superseded components (audit history, not canonical):** Primary CTA (Salad Green) `#04c584` / 2px / 12px 24px / 42px; Primary CTA — Large Display 16px 32px / 56px / 18px / `-1px` / hover `#10df99`; Primary CTA — Hover-Inverted (Retry) `#10df99` resting → `#04c584`; Ghost / Outlined `#f3fdfa` hover; Neutral / Cancel `#f5f5f5` / `#434444` / hover `#e1e1e1`; Disabled `#e1e1e1` / `#acacac`; Link Button underline hover; Data Card / Soft Variant / Highlight `#f3fdfa` + `#10df99` border; Text Input placeholder `#999999` / filled `#434444` / Focus `#f3fdfa` + `#10df99` / Error `#fe493d`; Amount Input `#2b2b2b` / 2px `#f5f5f5` border; Status Pill 41px; Warning `#f56200` / `#fd8700`; Negative `#fe493d`; Table Header `#f5f5f5` / `#7b7b7b`; Table Body amounts `#2b2b2b` or `#fe493d`; Chart series `#34464b` / `#5c818a` / `#1c6c73` / `#a7c7cf` / highlight `#04c584`; Axis 10–12px `#7b7b7b`; Gridline 1px dashed `#e1e1e1`; Header border `#f5f5f5`; Nav links `#434444` hover `#04c584`; Sign-in `#2b2b2b` / `#d8dfe6` / 16px radius. **Snapshot `Use:` labels, byte-exact (A5):** Primary CTA (Salad Green) `내 카드 추천 받기` / `신청하기`; Primary CTA — Large Display `앱 다운로드` / `지금 시작하기`; Primary CTA — Hover-Inverted (Retry) `다시 시도`; Neutral / Cancel `취소`; Link Button `자세히 보기`; Status Pill (Brand) filter chips `연회비 없음` / `주유 할인`. These are the 2026-05 snapshot’s own usage examples, retained here in Korean as published; the 2026-07-12 portable components carry their own source-stated roles instead of these labels.

**Stale §7 Do/Don’t (contradicts current capture; not portable Avoid as a current rule set):** “Use `#04c584` for every interactive moment”; “Use `#10df99` for hover”; “Keep border-radius at 2px”; “Don’t use weight 400 for body — Banksalad's body weight is 500”; “Don’t use BM JUA inside the app”; “Don’t use `#0099ff` info-blue for default links”; “Don’t use `#000000`” / use `#2b2b2b`/`#434444`; teal-slate chart family; right-align amounts; comma-separated won `12,400,000원`, with “Don’t approximate currency amounts (`약 120만원`) on primary financial surfaces — bare numerals with commas only” named there as the rejected approximation form. Current YAML body is 400, current accent is `#13bd7e`, current loan action is `#06a96c`, current radii are role-specific 6/16/24/9999/0. Those stale commands stay here.

**HTML-comment 2026-05-13 CSS bundle (not a current token source):** `https://webview-cdn.banksalad.com/banksalad-web/static/dist/v2.5c10981711a65fe446400c6ecec36a221b1c3e9e.bundle.css` (865 KB). Comment claims `#04c584`, 2px dominant radius, Pretendard fallback stack, 700 default weight, `0 2px 5px rgba(0,0,0,.12)`, input focus `#10df99` / `#f3fdfa`, and BM JUA preload. The 2026-07-12 pass reverted those promotions.

**Superseded synthetic §14 treatments (not verified product facts):** Empty/loading/error/success/skeleton/disabled/pressed recipes using `#434444`, `#04c584`, `#7b7b7b`, `#f5f5f5`, `--원`, 1s shimmer, 8% white highlight, `#fe493d`, `#10df99` retry, `#fd8700` stale-data bar, `#f3fdfa` success, 22px / 700 `#2b2b2b` figure, 3s toast `#2b2b2b` background, Disabled `#e1e1e1` / `#acacac`, pressed inset + ~5% darker. **State copy from that table, byte-exact (A5; §14 body retention under A2):** Empty (no linked accounts) `아직 연동된 카드가 없어요. 카드를 연동하면 자동으로 지출 분석이 시작돼요.`; Empty (filter cleared) `조건에 맞는 결과가 없어요. 필터를 조정해주세요.`; Empty (no transactions this period) `선택한 기간에 거래 내역이 없어요. 다른 기간을 선택하거나 카드 연동을 확인해보세요.`; Error (inline field) `주민등록번호가 일치하지 않아요. 다시 확인해주세요.`; Error (recommendation fetch failed) retry button label `다시 시도하기`; Loading / Skeleton amount placeholder `--원`. The source heads this whole table “Superseded synthetic state proposals — not verified product facts”, so the strings are held here as published bytes and are not written into the portable per-component state tables. Portable Capture record keeps only the current default-only paragraph, and no applicability verdict is derived from these strings.

**Superseded voice-hypothesis table (every quoted string byte-exact, A5):** CTAs `내 카드 찾기` / `대출 한도 확인하기` / `신청하기`, with `시작하기 →` named there as the rejected arrow-flourish form; headlines `이번 달 지출 분석`, with `이번 달, 얼마나 썼는지 보러 갈까요?` named as the rejected hook; recommendations `연 30만원 이상 절약될 수 있어요`; figures `1,240,000원`, with the approximation `약 124만원` named as forbidden on primary surfaces; success `신용점수가 855점으로 올랐어요.`; error `주민등록번호가 일치하지 않아요. 다시 확인해주세요.`, with the generic `오류가 발생했습니다` named as rejected; empty `아직 연동된 카드가 없어요. 카드를 연동하면 자동으로 지출 분석이 시작돼요.`; health-asset `이번 검사로 18가지 항목을 확인할 수 있어요`. Source labels this a historical hypothesis, not official writing standard. Not rehosted as a portable voice guide. The rejected forms are quoted as the table quoted them; they are not promoted as Banksalad copy in either direction.

## Proof notes

- tokens.source: `reconciled`; `components_harvested: true` preserved (A1c)
- `ds.type: brand` dual Scope + this ledger (A1c)
- Catalog Google favicon URL is this identity ledger only; portable Assets is URL-free identity-boundary (E2a). No Named-gaps first-party-logo-file negative was kept
- Homepage `https://www.banksalad.com` is dual-destination: Experience Scope + this identity/surfaces ledger (E2a)
- Five product URLs + two BPL URLs are dual Scope + this surfaces/Tier 1 ledger (E2a)
- `primary_color` `#13bd7e` destinations: identity 14/32 + Scope token-note 13 + Scope atmosphere 17 + Distinctive 40/43 + capture-bound 64/68 + Semantic unmerged-role 89 + Foundations Current accent 91 + Loan Action field note 214 (as not Current accent) + Filter Chip Text 232 + Filter Chip field note 239 (E2a). Avoid is not an `#13bd7e` hex destination.
- Token note is dual-destination: Experience Scope + this ledger (E2a)
- YAML `primary-action.states` / `filter-chip.states` are dual: this ledger + portable `states` fields (A1c)
- Observed 2026-07-12 voice strings and URLs are dual-destination: portable Content & Locales + this freshness/narrative ledger. “내 대출금리 조회” is Content Observed 352 only; it is not bound to the Primary-tasks reduction-request job (E2a). The full home tagline “뱅크샐러드 | 금융을 넘어 건강 자산까지” from the source’s 2026-05-13 verification note is dual-destination too: portable Content Observed 350 + this ledger, byte-exact including the Korean brand name `뱅크샐러드` (E2a, A5). The 2026-07-12 Observed string “금융을 넘어 건강 자산까지” stays its own source-stated positioning line on that same Content Observed 350
- YAML typography `use` fields restored on Type roles (A1)
- YAML unitless `lineHeight` 1.4 / 1.5 / 1.625 / 1.43 preserved as ratios (A1a)
- Verified primitive types preserved per component: button×2 + card + listItem (A1b)
- No generic Focus / `focus-visible` colour treatment; focus-visible rows carry no hex (B1)
- Uncaptured visual treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Primary Loan Action and Product Disclosure Row omit loading/error/success fields (C2). Content Filter Chip loading/error/success are category-selection role-based. Customer Safety Card omits kind/map (C4)
- Source §13 current body is observable jobs, not invented people. HTML-comment fictional archetypes are not copied here (D2). Primary tasks restate those jobs without binding the `/contents` string `내 대출금리 조회` to the reduction-request job
- Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Banksalad-authored or a separately published UI specification`): Scope five-URL evidence-domain + BPL-as-official-doc-not-extra-capture + BPL-explains-collaboration-not-current-web-tokens (11); Scope token-note register-split (13); Scope evidence-domain stay-attached / home-not-loan-proxy / BPL-not-current-web-token / 2026-05-not-2026-07-12 (15); Scope informational-rather-than-decorative / dense-but-readable / comparison-and-next-steps-visible / role-specific-geometry / most-repeated-accent / consequential-loan-action-deeper-green (17); Scope two-evidence-layer / not-native-app-substitute / verified-process-principles-not-2020-tokens / present-implementation-from-white-pretendard-green-explicit-copy-role-geometry (19); Scope live-home-narrative / not-third-party-mythology (21); Audience no-individual-personas / observable-work-follows-five-tasks / names-ages-quotes-income-frequency-authenticated-habits-not-Audience (36); Distinctive unmerged-role / local-geometry / Pretendard-603-live-not-BPL-font / recurring-useful-spacing / unpromoted-inputs-charts-dialogs-authenticated (40); five numbered items including each stem and each *UI implication* (51); the exact BPL quote remains first-party; capture-bound named token-role rules (64); Avoid capture-bound grouping named Don’ts (75); Avoid last-bullet one-surface-not-native-or-unlisted-authenticated (81); Semantic unmerged-role extra characterizations (89); Semantic omitted-rather-than-mapped-to-plausible-greens-reds-or-teals (101); Spacing local-spacing / YAML-scale-vs-§5-current-ladder (107); Shape local-geometry / 2px-legacy-not-promoted / extra-radius-roles-unmerged (115); Elevation border-not-elevation / not-a-general-ladder / stale-shadow-ladder-not-current (129); Motion accordion-not-universal / superseded-table classification (135); Font evidence-class application BPL-not-universal-font-token / Captured-scope-unresolved native-app (145); Family font-use boundary / fallback-not-product-face (163); Typography 400/700 / subtle-tracking / surface-evidence-local (165); Type roles ratio-versus-size-local / unmerged Caption and Supporting Heading (169); Assets Google-favicon identity-only (182); Assets imagery-not-invented-decoration (184); Capture-record graph-not-adopted / current-paragraph vs superseded-table (191); Primary Loan Action field-note unmerged-role (214); Content Filter Chip field-note unmerged-role (239); Customer Safety Card field-note unmerged-role (262); Product Disclosure Row field-note unmerged-role / not-the-loan-accordion-350ms (279); Layout §5/§8 current-body / density-as-brand / section-rhythm / extra-radius-roles / footer-reverted-2px-only / desktop-capture-not-cross-viewport (295); Content Observed citation-character (348); Content superseded-hypothesis-not-Observed (355); Content derived voice factual-Korean / not-invented-notification-validation-authenticated-copy (359). Fallback-not-product-face is Family 163, not Font evidence 145. Two-evidence-layer is Scope 19, not the informational paragraph 17. Primary Loan Action field-note 214 is portable derived, not Filter-Chip/Safety/Disclosure only.
- The five Principles stems and *UI implication* notes are derived editorial (51). The exact BPL quote is first-party.
- Footer `(omd:migrate)` is this freshness ledger only
- HTML-comment bundle.css URL is this superseded ledger only
