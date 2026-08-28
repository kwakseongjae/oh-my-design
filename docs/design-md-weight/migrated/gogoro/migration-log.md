# Gogoro migration log

Source: `web/references/gogoro/DESIGN.md`
Sibling read (not the migration input): none — `find web/references/gogoro -type f` returned only `DESIGN.md`. A dotfile is invisible to `ls` and to a `*` glob; `find` is the measure.
Destination: `docs/design-md-weight/migrated/gogoro/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/gogoro/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2 wave 28
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination below was checked with `grep -o` against the three output files before it was written (F2). Counts use `grep -o … | wc -l` per file, never `grep -c`. Line numbers are from the files as written in this directory (DESIGN 502 lines).

Source SHA-256: `2be96a5715c757e3a89069732a72c678d907cb4abbe7935be8eb9f8447ea6806`
Destination SHA-256: `6c4ac04bc8d44fd97b409f897c2704159d8d92a3dcf0b913c3146837bbc1e94a`

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations; `logo.slug` 옮김 → Typography & Assets Assets | Portable file has no frontmatter; H1 is `# Gogoro Design System`. Identity table `provenance.md` Identity. `https://www.gogoro.com` is dual: DESIGN Scope + provenance homepage / Surfaces (E2a). `#000000` is dual: DESIGN Scope / Semantic color / Application rules + provenance `primary_color` and Tier 1 chrome (E2a). Favicon slug is dual: DESIGN Assets + provenance logo row (E2a). |
| YAML `omd: "0.1"`, `verified: "2026-05-19"`, `tokens.source: prose-derived`, `tokens.extracted: "2026-06-09"`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept (A1c): provenance Identity + Freshness. `prose-derived` and `components_harvested` are provenance-only (`grep -o` DESIGN 0 / provenance 2 each). |
| YAML `tokens.colors` (12 keys) | 옮김 → Foundations semantic color | DESIGN Semantic color. All twelve roles kept with names and values: canvas `#000000`, text `#323237`, ink `#141719`, accent `#0074ff`, cyan `#28c3ff`, cta `#2b96ed`, surface `#f6f6f6`, on-dark `#ffffff`, gray-mid `#737d82`, gray-light `#b9bcbf`, gray-faint `#888888`, border `#dee2e6`. Body also keeps `#101418` as the source's alternate ink spelling (DESIGN 2 / provenance 1) and `#888` as the Key Characteristics spelling (DESIGN 3 / provenance 2). `#ffffff` is DESIGN-only (10). |
| YAML `tokens.typography.family` (`sans: "Graphik"`, `mono: "Graphik"`) | 옮김 → Typography & Assets Family | DESIGN Family. Live stack `Graphik, "PingFang TC", "Noto Sans TC", sans-serif` is DESIGN Font evidence + Family (`PingFang TC` DESIGN 5 / provenance 0 — exact stack is portable-only; provenance Tier 1 writes "Graphik + TC stack"). Token-set `mono: "Graphik"` is on the Family token-set line. |
| YAML `tokens.typography.display / h1 / h2 / h3 / body-lg / body / caption / micro` | 옮김 → Typography & Assets Type roles | DESIGN Type roles table. Unitless line heights stay ratios (A1a): `1.05`, `1.1`, `1.2`, `1.3`, `1.5`, `1.4` — each DESIGN ≥2 / provenance 1. Token-set sizes 60 / 42 / 30 / 22 stay unitless in the table; the source never writes those four as `Npx` tokens, so a px suffix would be invention. All eight YAML `use` strings restored in the Token-set use column, including `Full-bleed hero statements, tight tracking` (DESIGN 1). The source's visible §3 range table is kept underneath as inferred, not merged into the token-set sizes. The source's §9 example `20px/600` GoStation title is restored on that inferred-range line so the live `20px` token is not lost (A3). |
| YAML `tokens.spacing` (6 steps) / `tokens.rounded` (4 steps) | 옮김 → Foundations spacing + shape; also Layout | Unitless steps and px forms both kept: DESIGN Spacing `xs 8 · sm 16 · base 24 · lg 28 · xl 48 · section 100`, Shape `sm 8` / `md 12` / `lg 16` / `full: 9999` (`full: 9999` DESIGN 1 / provenance 2; bare `9999` DESIGN 2 / provenance 2). `full: 9999` stays a step and is not given a px suffix. |
| YAML `tokens.shadow.card` | 옮김 → Foundations elevation | DESIGN Elevation: `0 2px 12px rgba(0,0,0,0.08)` (DESIGN 1 / provenance 0 — the css string is portable-only; provenance Claim ledger names the key `tokens.shadow.card`). |
| YAML `tokens.components` (6 records) | 옮김 → Components & States | DESIGN Primary Filled CTA / Marketing / Secondary Outlined / Default Input / Product Spec Card / Dark Feature Card. Verified primitive types preserved, not flattened (A1b): `Type: button` 4 (three YAML buttons + the source's Icon Button), `Type: input` 1, `Type: card` 2. All six YAML `use` strings restored as `Token-set use:` lines (each DESIGN 1). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope DESIGN 7–15; Key Characteristics as Distinctive traits 32–45. Atmosphere readings carry an adjacent complete qualifier at Scope ¶2; the trait list carries one at Distinctive traits (B2/B2a). |
| §2 Color Palette & Roles — Brand / Accent / Surface | 옮김 → Foundations semantic color | DESIGN Semantic color. `rgb()` corroborations and the 194× / 11× live counts stay with the roles. Surface veil both byte forms: `rgba(248, 248, 248, 0.8)` DESIGN 1 / provenance 1 and `rgba(248,248,248,0.8)` DESIGN 4 / provenance 1 (E2a). |
| §2 Semantic (inferred) success / warning / error | 옮김 → Foundations semantic color, not promoted as tokens | DESIGN records the source's own "inferred from category conventions, not live-verified" mark and keeps cyan-for-charge, amber-without-hex, red-without-hex. Adjacent complete qualifier on that paragraph (B2/B2a). No invented hex. |
| Footer primary-color green correction | 분리 → provenance; 서술 문장 옮김 → Foundations semantic color | Dual: DESIGN Semantic color ("That correction is ledger context, not a token") + provenance Identity / Freshness conflicts (E2a). No green hex is promoted. |
| §3 Typography Rules — stack, weights, inferred scale, conventions | 옮김 → Typography & Assets | Evidence classes DESIGN Font evidence; family 187–191; token-set table + inferred ranges Type roles; conventions as Type rules under an adjacent qualifier. |
| §4 Component Stylings | 옮김 → Components & States | DESIGN 250–405. §4 body values and YAML `use` strings are both kept where they differ — marketing inverted white/`#000000`, dark outline `1px solid rgba(255,255,255,0.4)`, icon-button 48px/58px (DESIGN `48px` 6 / `58px` 6). |
| Footer **Verified** / **Tier 1** / **Tier 2** / Conflicts | 분리 → provenance; logos + home URLs 옮김 → Experience Scope; 검사일 옮김 → Experience Scope | Freshness + Surfaces + Proof notes in provenance. Logos URL is dual: DESIGN Scope + provenance Surfaces / Tier 1 (E2a). Producer string `Verified:` is provenance-only (DESIGN 0 / provenance 1). Calendar date `2026-05-19` is dual: DESIGN Scope inspection + provenance Freshness (E2a). Wikipedia founder/stats URL is provenance Tier 2 only. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing | DESIGN Layout: full-bleed cinematic sections, ~1200–1280px container, `#f6f6f6` spec/network drop, 80–120px marketing rhythm. Density contrast carries an adjacent complete qualifier (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | DESIGN Elevation: value-step layering, card shadow, veil + blur, glow accents, z-index names without numbers. Philosophy-as-binding-rule reading is qualified (B2/B2a). |
| §7 Do's | 옮김 → Experience application rules | DESIGN Application rules, under the grouping qualifier. Not placed in Governance controlled copy. TW terms `網路` / `電池` / `里程` are dual: DESIGN Application rules + Content + provenance Claim ledger (E2a). |
| §7 Don'ts | 옮김 → Experience avoid | DESIGN Avoid, under the qualifier. One extra line restates this contract's scope boundary; the same qualifier covers it. |
| §8 Responsive Behavior — inferred breakpoints, touch, media | 옮김 → Layout & Platforms | DESIGN Layout breakpoint table with the "declared behavior rather than an observation" note. Touch 40px+ / 48–58px and `object-fit: cover` / `srcset` kept as the source states them. |
| §9 Agent Prompt Guide | 삭제 | Tool-facing copy-paste prompts and restatements; no receiving slot and no delegation. Every verified value §9 names was checked against the portable body before deletion (A2, A3). The check is itemised at provenance Omission ledger. Prompt-only `56px` is provenance-only (DESIGN 0 / provenance 3) and is not promoted. |
| §10 Voice & Tone | 옮김 → Content & Locales | Published strings DESIGN Content; register table; forbidden register including `网络` → `網路` and `电池` → `電池`. Tagline `Ride Smarter. Refuel in seconds.` is dual: DESIGN Primary tasks + Content + provenance Claim ledger / Tier 1 (E2a). `LEARN MORE` / `DISCOVER MORE` dual the same way. Illustrative `Battery available · 2 min walk` and `Swap complete. Ride on.` stay marked illustrative (DESIGN 1–2 / provenance 0). The voice reading carries an adjacent complete qualifier (B2/B2a). |
| §11 Brand Narrative | 옮김 → Experience Scope; Wikipedia URL 분리 → provenance | DESIGN Scope ¶4: 2011 Taoyuan, Horace Luke, Matt Taylor, GoStation kiosks where a rider exchanges a depleted battery for a charged one in seconds, paid for by a monthly subscription (the Gogoro Network), CES 2015, April 2021 370,000 riders / 175 million swaps / 2,000 GoStations, expanded into Asia, the Middle East, and Latin America, Yamaha / Aeon Motor / Hero MotoCorp, Nasdaq 2022, Frost & Sullivan. Homepage `524,000+` / `7 billion km` kept as a separate WebFetch figure (DESIGN `524,000` 2 / provenance 3; `7 billion km` DESIGN 4 / provenance 3) (E2a). Causal thesis→system reading is qualified (B2/B2a). Wikipedia is provenance Tier 2, marked not re-verified. The subscription / exchange-model clause and the three expansion geographies were restored in `Revision 2026-08-28 (wave28 review)` — they are source facts, not a new B2a reading. |
| §12 Principles — 6 numbered | 옮김 → Experience principles | DESIGN Principles under the fixed B2a form: "These six items are a derived editorial implementation inference from the verified surfaces; they are not Gogoro-authored or a separately published UI specification." |
| §13 Personas — 3 entries | 삭제 | The source's own italic line labels them fictional archetypes informed by publicly described user segments, not individual people. Not promoted to Audience or to `primary-tasks`, and not re-hosted in the sidecar: §13 three entries (names, ages, cities, biographies) dropped and not restated in either output (D2 / D2a). Disposition at provenance Omission ledger. Audience carries only the group-level pair the source's own header names (Taiwanese urban commuters; licensed-partner ecosystem), under an adjacent qualifier. Identifier strings from that section measure DESIGN 0 / provenance 0; this log row does not restate them. |
| §14 States — 10 rows | 옮김 → Components & States surface state contract + per-component applicability | Full ten-row body preserved at DESIGN Surface state contract (A2; the catalog graph is still 0/440, so nothing is delegated), including `Swap could not complete` and the generic "Something went wrong" avoidance. Selected/active station (cyan) is kept as its own observation rather than folded into a canonical state. The applicability rule is at How applicability is decided here, whose qualifier covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | 7 interactive components × 7 states. `loading \| applicable` DESIGN 2 (Primary Filled CTA; Default Input) — both commit an operation. `loading \| not-applicable` DESIGN 5 (Marketing CTA, Secondary Outlined, Icon Button, Global Nav Item, GoStation Station Pin) — destination, toggle/arrow, or selection; role reasons, not capture-absence (C2 v10). Product / Spec Card and Dark Feature Card get no `kind` and no map because the source supplies no interaction evidence (C4). Input Focus `#0074ff` is kept as a Focus observation and is not attached to the `focus-visible` row (B1); `focus-visible` occurs 0 times in the source. State coverage is not claimed complete (C3). |
| §15 Motion & Easing — durations, easing names/roles, spring stance, signature motions, reduced-motion | 옮김 → Foundations motion | DESIGN Motion: five duration tokens with their uses (`motion-instant` 0ms, `motion-fast` 150ms, `motion-standard` 250ms, `motion-slow` 400ms, `motion-cinematic` 600ms+), three easing token names and roles, spring-stance rule, four signature motions, `prefers-reduced-motion: reduce` with no exceptions. Adjacent complete qualifier on the subsection (B2/B2a). |
| §15 Motion & Easing — three `cubic-bezier` values | 삭제 → provenance omission ledger | No observation stands behind them. `ease-exit` `cubic-bezier(0.4, 0, 1, 1)` is the documented re-injection path (`spec/omd-v0.1.md` line 267). Occurrence counts by `grep -o cubic-bezier` → DESIGN 0, provenance 6 (three values + two template comparisons + this log will add more). B3 is held: the promotion condition at DESIGN Motion names all five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text (E2c). |

## Sibling handling

No sibling. Confirmed with `find web/references/gogoro -type f` = `web/references/gogoro/DESIGN.md` only. Recorded at provenance Sibling handling. Nothing was adopted from a sidecar, and no sibling-only value was promoted (B1).

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. `compared < candidates` is expected on a mostly-Latin source, so the A5a hand sweep is mandatory.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published CTAs / taglines / TW terms / header CTA in the source | 14 distinct | 0 | 0 | `Ride Smarter. Refuel in seconds.`, `A ride like no other.`, `Gogoro Smartscooter® — A ride like no other.`, `LEARN MORE`, `DISCOVER MORE`, `Find a GoStation`, `Work With Us`, `See Case Study`, `로그인 및 회원가입`, `網路`, `電池`, `里程`, `524,000+`, `7 billion km` all survive in DESIGN. |
| Forbidden-register pairs | 4 | 0 | 0 | `网络`, `电池`, `revolutionary`, `eco-friendly` survive in DESIGN Forbidden phrases. |
| `node test-v2/tools/latin-copy-audit.mjs --brand gogoro` | 58 candidates | 3 reported (`charged.`, `cheap.`, `refuel in seconds`) | 0 | Candidate output, not a verdict. `charged.` is the source's editorial "fully charged" gloss, not a published label; the gloss survives at DESIGN Semantic inferred / Success row. `cheap.` is a §13 fictional-persona fragment, deleted under D2 (D2a: not restated). `refuel in seconds` is a lowercase fragment of the surviving tagline `Ride Smarter. Refuel in seconds.` |

Survival is measured against `DESIGN.md` and `provenance.md`. This log quotes the three audit candidates so the disposition is visible; it does not restate the deleted persona's name, age, or city (D2a).

## F1 / F2

F1 B2a scan: DESIGN was re-read in full after the body was drafted. Every causal / interpretive / judgment sentence — Scope atmosphere and thesis readings, Content voice reading, inferred-role keep, applicability Reason cells, Docs/Wikipedia-as-narrative classification — received an adjacent complete qualifier. Measured `grep -o 'derived editorial implementation inference' DESIGN.md | wc -l` = **24**; the same 24 lines carry `not Gogoro-authored` and `separately published UI specification`. Provenance derived ledger has **24** data rows (E1 1:1).

F2 E2 contrast: each log row above was written after `grep -o` on the actual files. Dual destinations are listed only where both files contain the string. Compliance claims ("B3 is held") point at the DESIGN Motion sentence that names all five evidence kinds in full text.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand gogoro --gate-only` → `verdict: PASS`, `problems: []`.
`inspectDesignMd(...).conformance` → `portable_core: true`, `level: portable-core`, `reasons: []`.
`coverage.copy-loss compared 1 / candidates 241`. A5a hand sweep is in the table above. Not evidence of semantic adequacy (E2c).

## Revision 2026-08-28 (wave28 review)

Rulebook v12. Trigger: 의미 검토 FAIL 2, 오케스트레이터 독립 재확인. 확정 결함 2건만. 토큰 값·컴포넌트 표 구조·state 표의 다른 행·B2a 완전형 24=24·원본은 건드리지 않았다. 파일 존재는 `find docs/design-md-weight/migrated/gogoro -type f` 4파일 + `find web/references/gogoro -type f` = `DESIGN.md`만. sibling `test -f web/references/gogoro/.verification.md` exit 1. 계수는 `grep -o <패턴> <파일> | wc -l`(파일별).

**1. A1 — §11 구독 상품명·교환 모델.** 원본 `:329` — `exchanges a depleted battery for a charged one in seconds, paid for by a monthly subscription (the Gogoro Network)`. 개정 전 산출 4파일 각 0(검토자 실측). 받을 슬롯은 Experience Scope ¶4(§11 서사 착지). 원본 표현을 그 문단에 복원. 원본이 세운 연혁 사실이므로 B2a를 붙이지 않았다. `Network subscription`은 Scope ¶1 표면명(dest 2)이라 다른 문자열.

개정 후 (`find` 후 `grep -o` 파일별):

| needle | orig | DESIGN | provenance | this log | audit-log |
|---|---:|---:|---:|---:|---:|
| `monthly subscription` | 1 | 1 | 0 | 3 | 0 |
| `Gogoro Network` | 1 | 1 | 0 | 3 | 0 |
| `depleted battery` | 1 | 1 | 0 | 3 | 0 |

로그 3은 §11 처분 행 + 위 원문 인용 + 이 표.

**2. A1 — §11 확장 지리 고유명사.** 원본 `:333` — `expanded into Asia, the Middle East, and Latin America`. 개정 전 산출 4파일 각 0. 같은 Scope ¶4에 원본 절을 라이선스 3사·Nasdaq 앞에 복원. 해석이 아니라 원본 고유명사라 B2a 미추가.

| needle | orig | DESIGN | provenance | this log | audit-log |
|---|---:|---:|---:|---:|---:|
| `Asia` | 1 | 1 | 0 | 6 | 0 |
| `Middle East` | 1 | 1 | 0 | 3 | 0 |
| `Latin America` | 1 | 1 | 0 | 3 | 0 |
| `expanded into Asia` | 1 | 1 | 0 | 4 | 0 |

`Asia` 로그 6은 처분·인용·표·이 설명과, 같은 절의 더 긴 구절이 부분문자열로 잡힌 값. `expanded into Asia` 로그 4는 그 네 자리.

**줄 포인터.** DESIGN.md 502행 불변. 제자리 편집(¶4 한 줄). audit-log `DESIGN.md:134` Elevation 한정 · `:138` glow bullet, 로그 Scope 7–15 · Distinctive 32–45 · Components 250–405는 같은 절을 가리킨다. provenance derived 24행 = 본문 24.

**손대지 않은 것.** 토큰 값·컴포넌트 표·state 행. B2a 24문장. C2 (Account CTA·Input L/E/S 개방 2, Marketing/Outline/Icon/Nav/Pin 쌍닫힘 5). 원본 `web/references/gogoro/DESIGN.md`.
