# jumpit migration log

Source: `web/references/jumpit/DESIGN.md`
Sibling: none (`find web/references/jumpit -type f` — no `.verification.md`)
Destination: `docs/design-md-weight/migrated/jumpit/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/jumpit/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use `grep -oF … | wc -l` per file, never `grep -c`, which counts lines.

Source SHA-256 `89470096ca10e40366ee673df96ec91e643c70a3c5f9c1b9d604d3b136011194` (`web/references/jumpit/DESIGN.md`).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Foundations Brand; `logo.type` / `slug` 옮김 → Typography & Assets Assets | Portable file has no frontmatter; H1 is `# Jumpit Design System` (`DESIGN.md` 1). Identity table `provenance.md` 9–16. YAML `homepage` `https://www.jumpit.co.kr` is dual: `DESIGN.md` 9 + `provenance.md` 13 (E2a). Inspected token surfaces `https://jumpit.saramin.co.kr/` and `/positions?sort=popular` are dual in the portable body: `DESIGN.md` 9 + 182 (E2a). `#00dd6d` is dual: `DESIGN.md` dest 8 at 11/34/81/83/237/249/355/359 + `provenance.md` 14 (E2a). Favicon slug is dual: `DESIGN.md` 171 + `provenance.md` 16 (E2a). |
| YAML `omd: "0.1"`, `verified`, `tokens.source: prose-derived`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 17–21, 31–33. The source footer's **Verified:** 2026-05-15 producer string is at `provenance.md` 35 and `DESIGN.md` 182. `prose-derived` DESIGN 0 / provenance 2 (`provenance.md` 19 / Token note). `components_harvested` DESIGN 0 / provenance 2 (`provenance.md` 21 / Proof notes). No `ds.type` field exists in the source; that absence is recorded at `provenance.md` 23, not filled. |
| YAML `tokens.colors` (8 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 83–90. All eight roles kept with names, values, and token-set keys: brand `#00dd6d` / `#00DD6D`, heading `#000000`, heading-soft `#222222`, body `#444444`, muted `#888888`, inverse `#ffffff`, canvas `#ffffff`, footer-plate `#fbfbfb` / `#FBFBFB`. Canvas and inverse stay two keys (`tokens.colors.canvas` dest 2 at 81/89 · `tokens.colors.inverse` dest 2 at 81/88) and are not folded (A4). Pairing qualifier at 81. |
| YAML `tokens.typography.family.sans` / `family.mono` (`Pretendard Variable`) | 옮김 → Typography & Assets Family | Family `DESIGN.md` 144 (`tokens.typography.family.sans`) and 145 (`tokens.typography.family.mono`). Live computed stack at 146. `Pretendard Variable` dest 23. |
| YAML `tokens.typography.hero-title` / `section-h3` / `cta` / `body` / `chip-active` / `footer-link` / `eyebrow` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 155–161. Unitless line heights stay unitless and are never converted to a replacement px (A1a): `1.3` dest 6 at 155/156/163×2/167×2; `1.5` dest 5 at 158/163×2/167×2. All seven YAML `use` strings restored verbatim in the Token-set use column (A1, A3). Body `16` is disambiguated from `tokens.spacing.sm: 16` at 98/167 (A4). |
| YAML `tokens.spacing` (5 steps) / `tokens.rounded` (4 steps) / `tokens.shadow.none` | 옮김 → Foundations spacing + shape + elevation | Unitless spacing: `DESIGN.md` 96 (`xs: 8` · `sm: 16` · `md: 24` · `base: 32` · `lg: 40`). Shape: `DESIGN.md` 102 (`sm: 8` · `md: 20` · `lg: 100` · `full: 9999`). `tokens.spacing.xs: 8` dest 2 at 98/109. `tokens.spacing.sm: 16` dest 2 at 98/167. `tokens.rounded.sm: 8` dest 3 at 98/109/221. `tokens.rounded.md: 20` dest 2 at 109/262. `tokens.rounded.lg: 100` dest 2 at 109/295. `tokens.rounded.full: 9999` dest 2 at 107/109. `tokens.shadow.none` dest 1 at 113. |
| YAML `tokens.components` (10 records) | 옮김 → Components & States | `DESIGN.md` 203–421. Verified primitive types preserved, not flattened to `Kind` (A1b): `Primitive type: \`button\`` dest 1 = YAML `type: button` 1 · `badge` dest 3 (chip + eyebrow + heading; two chip YAML keys share one block) · `tab` dest 1 = 1 · `card` dest 2 = 2 · `listItem` dest 2 = 2. YAML `use` restored verbatim on each Token-set use row (220/254/261/294/322/347/361/374/389/411). JobCard omits kind / map (C4) at 349. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 34–41. 112 samples, two chrome uses of green, 22-chip row, four outlined dropdowns, Next.js + styled-components. Atmosphere readings carry adjacent complete qualifiers at 9 and 11 (B2/B2a). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | Color `DESIGN.md` 83–92. Discipline rule at 92. Toss-family hexes are not role-row tokens; `#F04452` appears only as an inferred placeholder that is not promoted (`DESIGN.md` 197). |
| §3 Typography Rules | 옮김 → Typography & Assets | Evidence classes 131–138; family 144–147; type roles 155–161. 112/112 dest 2 (134/147). SIL OFL 1.1 dest 1 at 135; SIL Open Font License dest 2 at 137/140. No-`<h1>` and `#888` WCAG note at 165. Official product-use / live computed / licence readings carry adjacent complete qualifiers at 140, 149, and 167 (B2/B2a). |
| §4 Component Stylings | 옮김 → Components & States | `DESIGN.md` 203–421. Ten declared records. Chip rest keeps YAML `#ffffff` beside §4 transparent (238). Dropdown border colour stays uncaptured (281). Hero keeps YAML `#ffffff` bg beside photographic full-bleed (310). |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance; 표면 URL 옮김 → Experience Scope | Freshness `provenance.md` 31–33; producer string 35. Tier 1 list 47–49; Tier 2 53–55. Conflicts unresolved: none — `provenance.md` 37. Capture-record restatement `DESIGN.md` 182. |
| §5 Layout Principles | 옮김 → Layout & Platforms | `DESIGN.md` 426–430. Single-canvas, filter-row fingerprint, sticky 121px header, 363px footer `40px 0px 30px`, 8-up / n-up, no `<h1>`. Desktop-sample qualifier at 430 (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `DESIGN.md` 113. `box-shadow: none` dest 3 at 50/113×2. Terminal-not-banking wording classified as a source statement in the same paragraph. |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 57–61 (five Do rules), under the grouping qualifier at 55. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 67–73, under the qualifier at 65. The Don’t-list prohibitions are the source’s own list, including `귀하의 지원이` dest 2. No invented domain is added. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `DESIGN.md` 428–430. 1280×720 dest 4 at 138/140/428/430. Source’s own “mobile app” / “native app” sentence dest 1 at 428 (source wording, not a new domain list). `native application` dest 0 · `product application` dest 0 · `back-office` dest 0 · `measures 1440px` dest 0. |
| §9 Agent Prompt Guide | 삭제; 고유 제약은 옮김 | Tool-command / audit-before-shipping workflow deleted. Constraints already in Principles / Foundations / Components. Unique notes moved: skip 500 except footnotes / micro-meta (`DESIGN.md` 165); `#888` below WCAG AA at 14px (`DESIGN.md` 165); add a semantic h1 (`DESIGN.md` 165). Toss-family instruction stays as a non-token discipline at 92 (A3). |
| §10 Voice & Tone | 옮김 → Content & Locales | `DESIGN.md` 435–502. Voice adjectives, Do / Don’t table, and three OmD-original samples kept byte-exact. Published-string list 462–500. Qualifiers at 458 (voice-sample shape) and 502 (B2/B2a). |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: 2019 dest 2 (13×2) · 2005 dest 2 · Guro-gu dest 2 · KOSDAQ 143240 dest 3 · `jumpit.co.kr` consolidation · Saramin 잡스 dest 2 · Saramin 서치 dest 2 · `résumé spam` / `recruiter cold-outreach` dest 1 · `syntax highlight` dest 1 · `taste to engineers` dest 1 · closing sentence `Specific founder/launch quotes were not located at OmD attribution fidelity in public English-language sources` dest 1 at 13 (restated as a named unresolved at 545). Marked there as narrative context that supplies no interface tokens; founding-and-channel reading carries an adjacent complete qualifier in the same paragraph (B2/B2a). |
| §12 Principles — 5 numbered | 옮김 → Experience principles | `DESIGN.md` 47–51 under the B2a form at 45: "These five items are a derived editorial implementation inference from the verified surfaces; they are not Jumpit-authored or a separately published UI specification." Jumpit has no published first-party UI specification in the source, so the toss-form close is used (rulebook v12 B2a 전제 주석). Portable derived-editorial inventory: `provenance.md` derived-scope table (26 rows). |
| §13 Personas — 4 inferred entries | 삭제 | Virtual biographies are not promoted and are not re-hosted (D2, D2a). Audience keeps only the source’s own publicly observable groups at `DESIGN.md` 28 (developers / engineers; recruiters). Disposition at `provenance.md` Omission ledger — unidentified class, no name / age / city / motivation / affiliation restated. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Body preserved at `DESIGN.md` 180–197 (A2; the catalog graph is still 0/440, so nothing is delegated), including the Observed / Notes table. Inferred treatments are named as not promoted at 197. The applicability rule is at 199–201. Non-observation is never used as a `not-applicable` reason (C1). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Interactive controls declare the seven canonical states. Auth CTA, chips, dropdown, hero card, and two links are destination / selection / trigger roles, so loading/error/success close with a role reason (C2 v10): `loading \| not-applicable` dest 6 · `error \| not-applicable` dest 6 · `success \| not-applicable` dest 6 · `loading \| applicable` dest 0. Hover and disabled stay applicable; visual treatments omitted. Eyebrow and Section H3 are `Kind: non-interactive` and carry no state map. JobCard omits kind / map (C4). |
| §15 Motion & Easing | 옮김 → Foundations motion; 무출처 커브 삭제 | Observable behaviours at `DESIGN.md` 117–121. Three unattributed `cubic-bezier` values deleted (T1-3 제약 5). `cubic-bezier` DESIGN dest 0. B3 is held: the promotion condition at `DESIGN.md` 123 names all five evidence kinds — transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text (E2c). The same five kinds are restated at `DESIGN.md` 543. |

## Sibling handling

No `.verification.md`. Confirmed with `find web/references/jumpit -type f`. `_research.md` was not used as a token source. Research-only 2020-12 launch date and `개발자 커리어를 위한 점핏` are mention-only in `provenance.md` Sibling handling and are dest 0 in `DESIGN.md`.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. Jumpit’s issued strings include Korean labels, so a hand sweep of published names is mandatory even when the needle set is small.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published names in the source body | 36 distinct | 0 | 0 | 점핏 / 사람인HR / 회원가입 / 로그인 / 요즘 폼 미친 기업s / #꿀 피드 / .zip / 테마별 모음.zip / 회원님을 위한 AI 추천 포지션을 보고싶다면? / 전체 보기 / Notice / 개발자 채용 / 이력서 / 개발자 인터뷰 / 기업 서비스 / 이번주 인기 포지션 / 내 연봉 앞자리가 바뀌는 포지션 / 신입 개발자를 위한 더.루키 포지션 / 기술스택 / 경력 / 지역 / 태그 / 서버/백엔드 / 프론트엔드 / 웹 풀스택 / 안드로이드 / 정보보안 / 개발PM / HW·임베디드 / 블록체인 / 마감 / 사람인이 우리 들으면 좀 의외다 / Saramin 잡스 / Saramin 서치 / 금주 추천 채용공고를 확인하세요 / 원하시는 기술 스택을 선택해 주세요. |
| YAML `use` strings | 10 | 0 | 0 | All ten restored verbatim as Token-set use. |
| `node test-v2/tools/latin-copy-audit.mjs --brand jumpit` | 3 lost / 33 scanned | 3 | 0 | Lost samples: `Animation.enable` / `transitionstart` (§15 CDP follow-up commands, not issued copy); `what's that company actually like` (§13 persona, D2a — not restated). |
| Sibling published strings | 0 | 0 | 0 | No sibling file. |

Sub-needle names confirmed present individually in `DESIGN.md`: 점핏, 사람인HR, 회원가입 / 로그인, 요즘 폼 미친 기업s, #꿀 피드, 테마별 모음.zip, 전체 보기, 더.루키, 2019, 2005.

A5 분모: hand sweep of source published names 36 extracted / 0 missing; latin-copy-audit 3 lost / 33 scanned (lost = tool commands + persona, published copy 0); gate `copy-loss` compared 28 / candidates 211.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand jumpit --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 28, candidates: 211 }]`. Separately, `evaluatePortableCoreClaims` with `structurallyValid` / `cleanTop` / `projectionLocale: en` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 28 < `candidates` 211.

Worker-close portable DESIGN SHA-256 `db70dc30a9fc5d106ee522f962d0c3216c3b9da610d8da4b05e6229901382aa9`. Auditor SHA `f6e249c2924e96edacdfc0cc889fc4d218c4c680268757f350556c2f4fb8be3c`.

## Deviations recorded

- `DESIGN.md` is above the spec's 600–1,800-word SHOULD budget (`wc -w` 6990 / 545 lines). The budget yielded to A1: ten component records, a seven-state applicability matrix on six interactive controls, JobCard C4, the full §11 narrative including the last sentence, keep-both hex case, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- Jumpit has no published first-party UI specification in the source, so every derived-editorial close uses the toss-form example (rulebook v12 B2a 전제 주석). Auditor measure: `grep -o 'derived editorial implementation inference' DESIGN.md | wc -l` = 26 = `not Jumpit-authored` 26 = `separately published UI specification` 26. Provenance derived ledger 26 rows (E1 1:1). Worker-close was 24=24.
- F1 B2a scan was re-run on the finished `DESIGN.md` before submission. Every causal or interpretive sentence in Scope, Principles, Content, Docs-domain classification, and state-role verdicts was checked for evidence class; derived readings carry an adjacent complete qualifier that names the judgment. Auditor F1 added adjacent completes at 274 (Active ≠ seventh canonical row) and 458 (voice-sample shape), and named surface-attachment / persona-off / inferred rhythm / §3 binary-emphasis / light-mode-only on existing forms.
- F2: each log destination was re-grepped in the written files. Dual destinations name both files. Compliance claims (B3 held; C2 pair-closed; `loading \| applicable` dest 0) are made only where the body text exists. Auditor F2 corrected inspected-surface dual 9+182, components 203–421, spacing 96 / shape 102, §9 notes 165 / Toss-family 92, and inventory 26.

## Mandatory passes

- F1 B2a scan: done on the finished `DESIGN.md` before submission.
- F2 E2 contrast: done; destinations above were grepped, not recalled.
