# onestore — F3 separate-session audit

Scope: **B2·B2a** and **E1·E2·E2a–c** (plus the extra measurement duties named in the audit brief). No other clause was acted on.
Auditor input: `docs/design-md-weight/migrated/onestore/{DESIGN.md, provenance.md, migration-log.md}` and the source `web/references/onestore/DESIGN.md`, plus the sibling `web/references/onestore/.verification.md` (dotfile — path written out directly; confirmed with `find`; invisible to `ls` and to a `*` glob). The migration worker's report was **not** an input.

Not touched, per the audit contract: token values, the component tables, state applicability, document structure.

Counting rule used throughout: `grep -oF -- <pattern> <file> | wc -l`, per file. `grep -c` was not used. A shell `no matches found` / `No such file` would have been treated as *unmeasured*, not as zero; file existence was confirmed with `find` first. Mention in `audit-log.md` or `migration-log.md` is not use in the portable body.

One Store has no separately published UI specification, so the B2a example form (`derived editorial implementation inference` + `not One Store-authored or a separately published UI specification`) is the correct evidence class.

---

## Sentence classification (portable `DESIGN.md`)

Every sentence was read as **brand-issued fact / recorded observation / editorial reading**. Complete adjacent qualifications already stood at lines 9, 11, 13, 19, 28, 32, 43, 52, 59, 63, 70, 78, 96, 100, 104, 108, 116, 132, 144, 148, 170, 192, 222, 260, 294. Governance Core-contract sentences (268, 274–277, 283, 289) are system-contract, not brand editorial.

Two editorial readings had no adjacent complete qualification whose **scope** reached them.

---

## B2a — readings that stood without an adjacent complete qualification

### Fix 1 — `DESIGN.md` line 150, Typography & Assets → Assets

Line 149 ends “Not a verified storefront webfont.” Line 150 ends “it does not supply the marketplace palette or component tokens below.” Both are editorial classifications.

The favicon hedge at 148 names only the catalog-pointer reading of the Google s2 URL. Adjacency without coverage is not coverage (the 148 close does not reach 149–150). The Font-evidence hedge at 116 lives in another subsection.

Appended, on line 150 so line numbers already recorded in the ledgers still resolve:

> Reading the official distributed type in the preceding bullet as not a verified storefront webfont, and reading that gallery as a named brand-asset source that does not supply the marketplace palette or component tokens below, is a derived editorial implementation inference from the verified surfaces; it is not One Store-authored or a separately published UI specification.

### Fix 2 — `DESIGN.md` line 241, Layout & Platforms

Line 237’s “does not establish a single cross-domain layout system” and line 239’s “The mobile hostname in the storefront URL is not itself evidence for a responsive implementation rule” are editorial readings. The qualifier at 241 named only the 1440×900-as-capture-size and 180×50px / 153×21px-as-individual-controls readings. Scope-limited adjacency is not coverage.

Expanded in place (same line):

> Reading that capture as not a single cross-domain layout system, reading the storefront URL's mobile hostname as not itself a responsive-implementation rule, reading 1440×900 as the supplied capture size rather than as a breakpoint system, and reading 180×50px and 153×21px as individual control measurements rather than as a consumer-marketplace grid, are derived editorial implementation inferences from the verified surfaces; they are not One Store-authored or a separately published UI specification.

### Checked and left

- Principles 45–48 UI implications — line 43 names them as the source’s own editorial reading and qualifies the four items.
- Semantic color 80–86, including `#0000EE` “not promoted” — line 78 explicitly includes that reading.
- Spacing 90 parenthetical — line 96 covers unmerged keys / not a consumer-marketplace scale.
- Type roles 136 — line 144 names those keepings.
- State-applicability Reason cells — line 170 covers every verdict and reason; out of edit scope.

After the two body edits: `grep -oF -- 'derived editorial' DESIGN.md | wc -l` = **27**, `grep -oF -- 'not One Store-authored' DESIGN.md | wc -l` = **27**, on twenty-seven distinct lines — 9, 11, 13, 19, 28, 32, 43, 52, 59, 63, 70, 78, 96, 100, 104, 108, 116, 132, 144, 148, **150**, 170, 192, 222, **241**, 260, 294.

---

## E1 — provenance derived scope vs body

Before the audit the inventory had **26** data rows against **26** body qualifications — 1:1 at that moment. Fix 1 adds a body qualification, so the ledger would have been **narrower than reality** (the fastcampus failure mode).

### Fix 3 — `provenance.md` Derived editorial inventory

- Added row `Assets :150` for the official-type / brand-gallery readings.
- Expanded row `Layout :241` so its qualified-reading cell matches the expanded body close.
- Closing sentence: 26 → **27** complete qualifications / **27** data rows.

Measured after the edit: inventory data rows = 27 (provenance.md 161–187). Body complete qualifications = 27. 1:1.

### Fix 4 — `provenance.md` Proof notes, same-hex role splits

The body already splits `#ffffff` / `#FFFFFF` as canvas and LoginField fill (recorded). It also splits `#000000` as `tokens.colors.foreground` (storefront text and border), GeneralButton `fg` and `border`, and LoginField `fg`, and `#efefef` / `#EFEFEF` as developer-surface and GeneralButton fill. Those last two splits were not in the Proof notes. E1 requires the ledger to match the body; the splits were added there. Token values themselves were not changed.

---

## E2 — migration-log destinations vs grep

Each claimed needle was re-counted with `grep -oF --` against `DESIGN.md` and `provenance.md` after the body/ledger edits. Mention in the log is not use. Dual destinations that the log claimed were checked in both files; second-destination claims with DESIGN dest 0 were not present for published copy (the fitpet failure mode).

Mismatches found and corrected **in the log**, not in the body:

### Fix 5 — `migration-log.md` YAML `tokens.colors` row

- `tokens.colors.foreground` claimed P dest 1; measured P dest **2** (claim ledger + Proof notes split). Log updated.
- `#000000` claimed P dest 0; measured P dest **1** after Fix 4. Log updated to DESIGN dest 10 / P dest 1 (E2a).

### Fix 6 — `migration-log.md` YAML `tokens.spacing` row

The log wrote short `developer-input-y` dest 3 / P dest 3 and `developer-input-x` dest 3 / P dest 1. Measured short forms: `developer-input-y` DESIGN dest **5** / P dest **3**; `developer-input-x` DESIGN dest **5** / P dest **3**. The dest-3 figures match the **full** keys `tokens.spacing.developer-input-y` (D 3 / P 3) and `tokens.spacing.developer-input-x` (D 3 / P 1). Log now names the exact full keys and records the short-form counts beside them.

### Fix 7 — `migration-log.md` GeneralButton type dest

Claimed `type: button` DESIGN dest 2. Measured exact `tokens.components.developer-basic-button.type: button` DESIGN dest **1**; path `tokens.components.developer-basic-button.type` DESIGN dest **2**. Log now splits exact vs path. Quoted selector needle written out: `surface-5::[data-omd-capture="10"]` DESIGN dest 1 / P dest 1.

### Fix 8 — `migration-log.md` LoginField type dest

Claimed exact `tokens.components.developer-login-input.type: input` DESIGN dest 2. Measured DESIGN dest **1**; path dest **2**. Log now splits exact vs path. Quoted selector `surface-5::[data-omd-capture="12"]` DESIGN dest 1 / P dest 1.

### Fix 9 — `migration-log.md` §3 / §5 / §12 dest notes

- §3 now records Assets destinations and the 148 / 150 qualifiers.
- §5 now records the expanded 241 coverage (layout-system and hostname readings). `five 1440×900 routes` DESIGN dest 1; `1440×900` DESIGN dest 3 / P dest 1 — unchanged by the 241 paraphrase.
- §12 inventory “26 data rows” → **27**.

### Fix 10 — `migration-log.md` F1 close

“26 complete adjacent qualifications / Inventory rows = 26” → **27** / **27**, matching the remeasured body and inventory.

B3 유지 remains: Foundations Motion `:108` still carries transition properties (dest 1), animation name (dest 2), duration (dest 4), easing (dest 4), reduced-motion behavior (dest 2), the per-component gate (dest 2), and the partial-confirmation clause (`partial confirmation` dest 1) in full text (E2c).

---

## E2 / D2a boundary on deletion rows (wave 41)

### Fix 11 — `provenance.md` Omission ledger and `migration-log.md` §13

Deletion rows named “role labels” without the labels. Wave 41: archetype labels belong on the deletion row so copy-loss can see the disposition; identifiers do not. Source §13 labels `Consumer of mobile content` / `Creator or developer` were added to both deletion rows. No name, age, city, or bio string was introduced. Measured after the edit: those two labels DESIGN dest **0** / provenance dest **1** / migration-log dest **1** (mention = disposition, not portable use).

---

## A1 key-path check (wave 33 — this audit’s duty)

Source YAML `tokens.components.developer-basic-button.{type,bg,fg,border,radius,padding,height,font,states,use}` and `tokens.components.developer-login-input.{type,bg,fg,border,radius,padding,height,font,states,use}` were checked **inside the matching component block**, not by whole-file value grep.

Every field path is a row (or the YAML-fields / Token-set use / YAML states row) in its own block. Values sit on those rows (`#efefef` / `#EFEFEF`, `#ffffff` / `#FFFFFF`, `2px solid #000000`, `2px solid #767676`, `0px 20px`, `1px 2px`, `50px`, `21px`, both font writings). No field was restored. icook-style “hex present in another block, missing as a row here” did not occur.

---

## 범위 밖 관찰

- **A5a.** No `--gate-only` `coverage.compared` / `candidates` artifact is in the three output files. The log’s hand sweep claims 20/20, unsurvived 0. Spot-check of brand-issued strings (원스토어, 쏠쏠하게 앱하다 / 더 쏠쏠하게 앱하다, 슬기로운 게임생활을 만듭니다, mission statement, T Store, SK Planet, Naver App Store, Digital Turbine, One store Co., Ltd., Mobile Gothic Body/Title/POP, 맑은 고딕, Apple SD Gothic Neo, Malgun Gothic, both control class names, “closer, more open, and more fun”): all survive in DESIGN.md or, for YAML identity `원스토어`, DESIGN dest 2 + provenance dest 2 (E2a). `원스토어` source dest 3 is YAML name + H1 + Scope; the YAML slot is provenance, not copy-loss. No Latin issued-copy loss to report. `verdict: PASS` was not treated as “copy preserved.”
- **B1 / sibling promotion.** Sibling-only strings measured DESIGN dest 0: `playwright_cli`, `score 76`, `110 uses`, `12 uses`, `112 computed uses`, `privacy principles`, `rgb(42, 31, 96)`, `BI, CI`, `system / high`. No sibling-only structural classification (`portal H2` dest 0 everywhere) was promoted as a body fact. `high-confidence operating-system` is in the source body, not sibling-only.
- **D2a remainder.** No name / age / city in DESIGN.md. Persona motivations (`browsing, payment, and retention`, `tool needs and workflow`) DESIGN dest 0. No new affiliation classification (hubspot `Solutions Partner agencies` pattern; dest 0). `[FILL IN` DESIGN dest 0.
- **E2d.** Absence sentences name DESIGN dest 0 or “the source body does not record,” and do not assert three-file absence in the same sentence that reprints the dropped string. Sibling dest-0 claims in the log are portable-body counts; the log’s own mention is not the denominator.
- **Wave 39 / 40.** No motion curve/duration values to resurrect (source §15 has none; B3 gate kept; kmong-style omission is correct). Same-hex role splits now sit in Proof notes (Fix 4). Source color/component tables have no token-name column that was stripped (krds pattern absent). No intra-document conflict-policy split.
- **Official DS.** None. The B2a example form was not demanded as a cargo-cult; it matches this brand’s evidence class.

AUDIT_DONE fixes=11

## 개정 — 의미 검토 FAIL 1 (A4 표면 이전)

대상: `docs/design-md-weight/migrated/onestore/{DESIGN.md,provenance.md,migration-log.md}`. 원본·sibling 미수정. 토큰 값·컴포넌트 표 구조·상태 applicability 미수정. 한정·원장 행 추가 없음 (27=27, 161–187).

### 결함 1 — `tokens.rounded.square`를 개발 컨트롤 반지름으로 이전 (A4 · 항목 4·10)

YAML claims `:52`는 `tokens.rounded.square`를 `*store_home` (store-home / selector `home::body`)에 묶는다. 원본 본문은 이 키를 GeneralButton·LoginField에 붙이지 않는다. §4 Radius `0px`는 `tokens.components.developer-basic-button.radius` · `developer-login-input.radius` (`*developer` / `*developer_input`).

산출 Shape `:100`이 그 키를 「those samples」의 square geometry로 읽었고, Radius 행 `:181`·`:211`에 `/ tokens.rounded.square 0`을 붙였다. 융합 문구를 제거하고, Shape에 YAML claim 표면만 남기며, 컴포넌트 Radius는 각 `tokens.components.*.radius` `0px`만 둔다. sibling `:19` `home::body` `border-radius 0px`는 본문에 넣지 않았다.

| 문자열 | SRC | SIB | DESIGN | P |
|---|---:|---:|---:|---:|
| `tokens.rounded.square` | 1 | 0 | **1** | 2 |
| `store-home` | 8 | 3 | **1** | **11** |
| `home::body` | 1 | 1 | **1** | **6** |
| `Both retained developer controls` | 0 | 0 | **0** | 0 |
| `square geometry of those samples` | 0 | 0 | **0** | **0** |
| `tokens.components.developer-basic-button.radius` | 1 | 0 | **3** | 0 |
| `tokens.components.developer-login-input.radius` | 1 | 0 | **3** | 0 |

`node scripts/check-limiter-ledger.mjs onestore` → 본문 27 = 원장 27 (161–187).
`node scripts/check-yaml-use-landing.mjs onestore` → use 4/4, 미착지 0.
`node test-v2/tools/migrate-reference.mjs --brand onestore --gate-only` → PASS.

### 갱신한 dest 행 (`grep -oF -e` 실측)

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| YAML `tokens.rounded.square` | `tokens.rounded.square` DESIGN / P | 3 / 2 | **1** / **2** |
| YAML `tokens.rounded.square` | `store-home` DESIGN / P | 0 / 10 | **1** / **11** |
| YAML `tokens.rounded.square` | `home::body` DESIGN / P | 0 / 5 | **1** / **6** |
| YAML `tokens.rounded.square` | `Both retained developer controls` DESIGN | 1 | **0** |
| YAML `tokens.rounded.square` | `square geometry of those samples` DESIGN / P | 1 / 1 | **0** / **0** |
| YAML `tokens.rounded.square` | `tokens.components.developer-basic-button.radius` DESIGN | 2 | **3** |
| YAML `tokens.rounded.square` | `tokens.components.developer-login-input.radius` DESIGN | 2 | **3** |

FIX_DONE onestore fixed=1 logdest=7
