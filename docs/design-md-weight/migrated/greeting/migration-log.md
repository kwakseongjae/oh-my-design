# greeting migration log

Source: `web/references/greeting/DESIGN.md`
Sibling read (not the migration input): `web/references/greeting/.verification.md`
Destination: `docs/design-md-weight/migrated/greeting/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/greeting/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use `grep -o … | wc -l` per file, never `grep -c`, which counts lines.

Source SHA-256 `ab09fbf2d6327b7c53b48612b8f71ea50e18897ab03b3febf4b84ff1d7da60d3` (`web/references/greeting/DESIGN.md`). Sibling SHA-256 `df60fb9a901f6ab5dc129fd12f6f678d40a7b802b8b4d60655df921b453fe4a4` (`web/references/greeting/.verification.md`). Worker-close portable DESIGN SHA-256 `371bcd332f72ab38aa221ae0624cd989737af651962ea703e1051951b84c49f6`. F3 portable DESIGN SHA-256 `e431af98a1543af89fcf48c06ccbc90b46f87e15568295e4c0f5e3336e5dc3c9`. Wave29-review portable DESIGN SHA-256 `832baf233a4cb74a9a6573b6cbb948046b2a8e7185d45de0b09e69d5c28d2712`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations + components; `display_name_kr` 옮김 → Scope + Content | Portable file has no frontmatter. H1 is `# Greeting Design System` (`DESIGN.md` 1). Identity table `provenance.md` Identity. `https://www.greetinghr.com` is dual: `DESIGN.md` Scope + `provenance.md` Identity/Surfaces (E2a). `#1890ff` is dual: `DESIGN.md` 10 + `provenance.md` 9 (`grep -oF '#1890ff'`). `그리팅` is dual: `DESIGN.md` 10 + `provenance.md` 9. The favicon slug is provenance-only (Assets says so; `DESIGN.md` Assets + `provenance.md` Logo decision). |
| YAML `omd: "0.1"`, `verified`, `added`, `tokens.source: live-extract`, `tokens.extracted`, `tokens.note`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` Identity + Freshness. The source token note is transcribed verbatim in Identity. The source footer's producer string `omd:add-reference CREATE — Tier 1 live inspect` is in Freshness. These are ledger keys with no portable slot. |
| YAML `tokens.colors` (20 keys) | 옮김 → Foundations semantic color | `DESIGN.md` Semantic color (89–125). All twenty roles kept with names and values: primary, primary-hover, primary-deep, ink, ink-soft, heading, body, muted, faint, hairline, disabled, navy, canvas, surface, surface-alt, surface-zinc, tint-blue, tint-blue-alt, success, on-primary. `grep -oF` dest counts: `#1890ff` 10 · `#2c93f2` 5 · `#0a58a1` 1 · `#0f0f0f` 9 · `#171717` 11 · `#27272a` 7 · `#3f3f46` 3 · `#71717a` 5 · `#a1a1aa` 4 · `#e4e4e7` 8 · `#d4d4d8` 2 · `#001946` 8 · `#ffffff` 11 · `#fcfcfc` 3 · `#fafafa` 10 · `#f4f4f5` 5 · `#f2f9ff` 1 · `#e4f0fc` 1 · `#4ba63d` 2. `#0a58a1`, `#f2f9ff`, and `#e4f0fc` have no other component home and stay palette roles. |
| YAML `tokens.typography.family` (`display: "Pretendard SemiBold"`, `body: "Pretendard Regular"`, `numeral: "Poppins"`) | 옮김 → Typography & Assets Family | `DESIGN.md` Family (205–211). Paths named `tokens.typography.family.display` / `body` / `numeral`. The fallback prohibition on 211 carries an adjacent complete qualifier (B2/B2a). |
| YAML `tokens.typography.hero-accent / display / section / feature / quote / card-title / label / numeral` | 옮김 → Typography & Assets Type roles | `DESIGN.md` Type roles (213–226). Unitless line heights stay ratios and are never converted to px (A1a): `1.20` dest 2 · `1.30` 1 · `1.40` 1 · `1.50` 2 · `1.00` 2. Tracking kept as ASCII hyphen bytes: `-0.6px` dest 4 · `-0.48px` 2 · `-0.36px` 2 · `-0.56px` 2 · `-0.24px` 2 · `-0.4px` 2 · `-0.16px` 3 · `-8.74px` 1. All eight YAML `use` strings restored verbatim in the Token-set use column (A1, A3). |
| YAML `tokens.spacing` (8 steps) / `tokens.rounded` (5 steps) | 옮김 → Foundations spacing + shape; also Layout | Paths kept separate (easywallet-type check): `tokens.spacing` dest 3 · `tokens.rounded` dest 3. Spacing steps on one line at `DESIGN.md` 129: `xs: 4` · `sm: 8` · `base: 12` · `md: 16` · `lg: 20` · `xl: 25` · `xxl: 48` · `section: 80`. Shape steps on one line at 137: `sm: 4` · `md: 8` · `lg: 16` · `xl: 30` · `pill: 50`. `md: 16` dest 3 is the spacing path (129/131/145). `lg: 16` dest 3 is the radius path (131/137/145). Layout restates both scales at 427–428. |
| YAML `tokens.shadow.none` / `card-inset` | 옮김 → Foundations elevation | `box-shadow: none` dest 3 / provenance 0 (fitpet-type: do not claim a provenance second home). `rgba(255,255,255,0.12)` dest 3 / provenance 2 (E2a dual). Elevation table `DESIGN.md` 147–158. |
| YAML `tokens.components` (9 records) | 옮김 → Components & States | `DESIGN.md` 249–403. Verified primitive types preserved per component, not flattened to `Kind` (A1b): `Primitive type: \`button\`` ×3 (Azure / Dark / White), `badge` ×2 (Eyebrow Pill / Feature Tag), `card` ×3 (Product / Zinc / Pricing), `tab` ×1 (Top Nav). All nine YAML `use` strings restored as `Token-set use:` lines. YAML `font` shorthands `12px / 600 Pretendard` dest 6. YAML `states` byte forms `hover #2c93f2` dest 1 and `hover #171717` dest 1. YAML `active` byte form `azure #1890ff text on active` dest 1. YAML padding `5px 8px 5px 12px` and `14px 25px` kept. Feature Tag radius `6px` kept on that component and not merged into `tokens.rounded.md: 8` (A4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–15; Key Characteristics as Distinctive traits 33–45. Atmosphere readings carry an adjacent complete qualifier at 11 (B2/B2a). Surface-boundary reading at 9. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `DESIGN.md` 89–125. The source's own group headings (Primary, Ink & CTA, Text hierarchy, Neutral & Surface, Semantic) are kept as the grouping. Role-naming readings carry the adjacent qualifier at 91 (B2/B2a). |
| §3 Typography Rules — family, hierarchy | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 194–203; family 205–211; hierarchy table 213–226. Official product-use and License rows carry adjacent complete qualifiers (B2/B2a). |
| §3 Principles — one family two weights, tracking compresses, Latin numerals, tight/technical/calm | 옮김 → Typography & Assets Typography rules | `DESIGN.md` 228–235 under the qualifier at 230 (B2/B2a). |
| §4 Component Stylings | 옮김 → Components & States | `DESIGN.md` 249–403. §4 body values and YAML `use` / `states` / `active` / `font` / padding byte forms are both kept where they differ. |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance; URL 네 개 옮김 → Experience Scope | Freshness + Surfaces + Sources in `provenance.md`. `https://www.greetinghr.com` / `/pricing` / `blog.greetinghr.com` / `doodlin.co.kr` are dual: Scope + provenance Surfaces (E2a). Conflicts unresolved: none — `provenance.md` Freshness. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | `DESIGN.md` 426–431 (centered hero, `#fafafa` card row, alternating bands, navy proof band, then spacing/shape restatements). Breathing-room / crescendo / focal-anchor readings carry the qualifier at 433 (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Four-level table `DESIGN.md` 147–155, including Inset rim `rgba(255,255,255,0.12) 0px 0px 2px 0px inset`. The Shadow Philosophy paragraph is carried as a qualified reading at 158 (B2/B2a). |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 57–70, under the grouping qualifier at 59. Not placed in Governance controlled copy. Ten items, matching the source Do list. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 72–83, under the qualifier at 74. Eight items, including the `#000000` body-text prohibition. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms; image behavior 옮김 → Typography & Assets Assets + Layout | Breakpoint table `DESIGN.md` 437–441 with the "stated at system level rather than measured across viewports" note at 435; touch targets 443; collapsing strategy 445–450; image behavior 239/452. The source's Desktop row `1024-1440px` is kept as declared width. Exact string `measures 1440px` dest 0 / provenance 0 after wave29 review (see Revision). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | 삭제 | Tool-facing copy-paste prompts and restatements; no receiving slot and no delegation. Every value §9 names was checked against the portable body before deletion and each was already present — the twenty palette hexes, the 4/8/16/30/50 radii, the 60/48/36/28/20/16/175 sizes, the 600/400 weights, the 14px 25px and 5px 8px 5px 12px paddings, the navy band, and the published Korean strings (A2, A3). |
| §10 Voice & Tone | 옮김 → Content & Locales | Published strings `DESIGN.md` 455–488; register table 459–465; voice samples 467–471; further recorded strings 473–484; forbidden register 486. The source's own English gloss of the hero is kept beside the Korean line at 457; the closing line at 488 says an English gloss never replaces the Korean line (A5). The qualifier at 457 covers the characterization and the table (B2/B2a). |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: flagship of **두들린 (Doodlin)**; Korean HR-tech; recruiting workflows scattered across email, spreadsheets, and disconnected tools; no system of record; ATS consolidation quote **"모집부터 선발까지, 수시부터 대규모 채용까지 그리팅 하나로"**; company-described Korea's #1; **10,000+** companies; footnote ***2026년 1월 그리팅 이용 고객사**; positioning **"채용 관리를 넘어 채용 성공으로"**; 다이렉트 소싱; 인재풀 구축. `grep -oF` dest: `두들린` 2 · `Doodlin` 2 · `email, spreadsheets` 1 · `모집부터 선발까지` 2 · `2026년 1월` 3 · `채용 관리를 넘어 채용 성공으로` 5 · `다이렉트 소싱` 7 · `인재풀 구축` 6. Marked there as narrative context that supplies no interface tokens. The refusal/embrace paragraph at 15 carries an adjacent complete qualifier (B2/B2a). |
| §12 Principles — 5 numbered | 옮김 → Experience principles | `DESIGN.md` 47–55 under the B2a form at 49: "These five items are a derived editorial implementation inference from the verified surfaces; they are not Greeting-authored or a separately published UI specification." No published first-party DS, so the toss-form close is used (rulebook v12 B2a 전제 주석). |
| §13 Personas — 3 entries | 삭제 | The source's own italic line labels them fictional archetypes informed by publicly observable segments, not individual people. Not promoted to Audience or to `primary-tasks`, and not re-hosted in the sidecar: no name, age, or city appears in either output (D2, D2a). Identifier strings dest 0 / provenance 0 / this log 0 as use. Audience at `DESIGN.md` 31 carries only the group-level description the source records (Korean HR/talent-acquisition teams), under an adjacent qualifier. The four `primary-tasks` at 21–24 come from labels and surfaces the source records; 26 says so and qualifies the step from label to "primary task". Scope paragraph 3 at 13 now carries its own adjacent complete qualifier for the narrative-not-token classification. |
| §14 States — 9 rows | 옮김 → Components & States State record + per-component applicability | Full nine-row body preserved at `DESIGN.md` 405–420 (A2; the catalog graph is still 0/440, so nothing is delegated), including the published strings "오류가 발생했습니다" and 필수. The applicability rule is at 245–247, whose qualifier at 247 covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | 4 interactive components × 7 states = 28 rows: 16 `applicable` and 12 `not-applicable`, the latter only with a role reason (C2 v10) — Azure Inquiry / Dark CTA / White Secondary / Top Nav each close loading/error/success together as destination or destination-tab. `loading \| not-applicable` dest 4 · `loading \| applicable` dest 0. The three cards get no `kind` and no map because the source supplies no interaction evidence — C4 at 380/391/403. The two badges declare `Kind: non-interactive` with a reason instead of a map (Core §4.4). |
| §15 Motion & Easing — durations, easing token names/roles, motion rules, reduced-motion | 옮김 → Foundations motion | `DESIGN.md` 166–170 (the three duration tokens with their uses: `motion-fast` 120ms, `motion-standard` 200ms, `motion-slow` 320ms), 172–178 (three easing token names and roles), 182–188 (functional/quiet rule, recorded hover shifts `#1890ff` → `#2c93f2` and `#0f0f0f` → `#171717`, fade-from-below, no bounce or spring, and the `prefers-reduced-motion: reduce` behavior). `120ms` dest 1 · `200ms` dest 1 · `320ms` dest 1. |
| §15 Motion & Easing — three `cubic-bezier` values | 삭제 → provenance omission ledger | No observation stands behind them: the source records a Tier 1 live inspect of color, type, geometry, and shadow and supplies no transition, animation, or easing sample. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` is byte-identical to the example table at `spec/omd-v0.1.md` line 267, the documented re-injection path. The other two (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are likewise unattributed. Ledger at `provenance.md` Omission ledger. Occurrence counts by `grep -oF cubic-bezier` → `DESIGN.md` 0, `provenance.md` 4 (three curves + the omd-v0.1 citation). B3 is held: the promotion condition at `DESIGN.md` 180 names all five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text, plus the partial-confirmation exclusion (E2c). Governance 524 restates the five kinds and the gate. |
| HTML comment OmD v0.1 Sources | 분리 → provenance | Live-inspect notes, Tier 1/2 URLs, narrative class, voice-sample attribution, and the editorial-reading admission are ledger material: `provenance.md` Evidence class + Raw samples. `document.title` is dual: Content & Locales + provenance raw samples (E2a). |

## Sibling handling (`web/references/greeting/.verification.md`)

The sibling exists — confirmed with `find web/references/greeting -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

- Its full record is transcribed at `provenance.md` Sibling verification + Raw samples and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not, or that conflict with the source: dark-CTA padding `14px 20px 14px 25px` (source `14px 25px`), numeral `174.851px` / `-8.74254px` (source `~175px` / `-8.74px`), eyebrow H1 color `#3f3f46`, band-headline white-on-navy, quote color `#d4d4d8`, frequency counts including `rgb(0,0,0)` ×880, viewport `1440×900`. Recorded at `provenance.md` Sibling-only values. Neither side of a conflict was chosen as a new token.
- Its structural classifications were likewise not promoted (B1): frequency-scan ranks and the viewport figure. The portable Desktop row keeps source `1024-1440px` (`DESIGN.md` 441) as declared width. Exact string `measures 1440px` dest 0 / provenance 0 after wave29 review (see Revision).
- Published strings that appear only in the sibling survive in provenance, not in the portable body: `원하는 인재를 빠르게 채용하고 싶은 기업에 그리팅 ATS를 추천합니다.` (D 0 / P 2 / S 1), `그리팅 블로그 | 채용 관리를 넘어, 채용 성공으로` (D 0 / P 1 / S 1). `document.title` is not sibling-only (source HTML comment 1): D 1 / P 2.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. `compared < candidates` is expected, so the A5a hand sweep is mandatory and was run.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Brand-issued Korean strings in the source (labels, CTAs, slogans, microcopy, titles) | 33 distinct | 0 | 0 | All 33 survive in `DESIGN.md` (hand list in the worker pass). |
| Brand-issued Korean strings in the sibling, any length | 2 sibling-only | 0 | 0 | Testimonial quote and blog title survive in provenance. |
| `node test-v2/tools/latin-copy-audit.mjs --brand greeting` after restore | 25 candidates | 0 reported | 0 | First run reported 2 lost (`hover #2c93f2`, `hover #171717`) — YAML `states` byte forms, not published copy. Both restored as `Token-set states:` lines (`DESIGN.md` Azure Inquiry + Dark CTA). Re-run: `clean: 1`, `lost: 0`. |

Sub-needle labels the machine check could not see were confirmed present individually in `DESIGN.md`: 그리팅, 두들린, 채용 성공, 도입 문의, 도입 문의하기, 견적 문의하기, 무료 체험하기, 서비스 소개서 다운로드, 국내 1위 채용 관리 솔루션, 다이렉트 소싱, 인재풀 구축, 소규모 팀 추천, 커뮤니케이션, 캘린더 연동, 왜 그리팅인가, 제품, 솔루션, 고객 사례, 가격, 유용한 자료, 채용 관리를 넘어 채용 성공으로, 10,000+ 기업이 그리팅과 함께합니다, 유연한 모집 전략, 데이터 기반 운영 · 최적화, 성과를 만드는 인재, 전략에 구애받지 말고 확보하세요, 모집부터 선발까지, 수시부터 대규모 채용까지 그리팅 하나로, 2026년 1월 그리팅 이용 고객사, 1:1 맞춤 상담받기, 지원자를 사로잡는 첫인상, 채용 홈페이지로부터, 채용 홈페이지 빌더, 오류가 발생했습니다, 필수, document.title.

A5 분모: latin-copy-audit 25/25 survived after restore; Korean hand sweep 33 extracted / 0 missing / 0 published-copy missing. Sibling-only published 2/2 in provenance.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand greeting --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 41, candidates: 207 }]`. Separately, `scripts/design-md-core.cjs` `inspectDesignMd` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 41 < `candidates` 207.

## Deviations recorded

- `DESIGN.md` is 6,195 words by `wc -w`, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: twenty color roles, eight type roles with dual unitless/px forms, nine declared component records with dual `use`/`font`/`states` forms, a nine-row surface state contract, a 28-row applicability matrix, marketing-vs-ATS domain splits, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- Greeting has no published first-party design system (getdesign.md no data; refero no Greeting match), so every derived-editorial close uses the toss-form "not Greeting-authored or a separately published UI specification" (rulebook v12 B2a 전제 주석). Measure `grep -oF 'not Greeting-authored or a separately published UI specification' DESIGN.md | wc -l` = 26.
- The source names four Tier 1 URLs but supplies computed evidence for only two of them. The blog and operator URLs are therefore carried as named sources with no computed design value attached, in Scope and in Recorded unresolved. There is no `Named gaps` section (DESIGN 0).

## F1 — B2a scan (mandatory final pass)

The finished `DESIGN.md` was re-read from the title through Governance. Every sentence that states a cause, a reading, a role name this contract assigned, a kind/applicability verdict, or a voice characterization was asked: is this a Greeting-issued fact, or a reading derived from the observed surfaces? The latter received an adjacent complete qualifier — "derived editorial implementation inference from the verified surfaces; … not Greeting-authored or a separately published UI specification."

Measure: `derived editorial implementation inference` dest 26 = `not Greeting-authored or a separately published UI specification` dest 26 = provenance Derived editorial inventory 26 data rows. Provenance names the clause twice in the inventory preamble; those two are not portable qualifications. F3 added Scope paragraph 3 (narrative-not-token) and Family (fallback prohibition); folded surface-attachment / hairline-separator / focal-anchor into existing adjacent qualifiers.

Source facts that were not qualified: the operator name 두들린 (Doodlin), the ATS consolidation quote, the 10,000+ / *2026년 1월 그리팅 이용 고객사 footnote, the live hex and metric values, and the published Korean strings.

## F2 — E2 대조 (mandatory final pass)

Each log row above was written only after `grep -oF` confirmed the named value in the named file. Dual destinations are claimed only where both files contain the string (`#1890ff`, homepage URL, `그리팅`, `rgba(255,255,255,0.12)`, `document.title`, blog/operator URLs). `box-shadow: none` is dest 3 / provenance 0 — this log does not invent a second home (fitpet-type). "B3 is held" is claimed because `DESIGN.md` 180 contains the five evidence kinds, the per-component gate, and the partial-confirmation exclusion in full text. "B2a 26=26" is claimed because both the portable count and the inventory row count are 26. §13 deletion is claimed as unidentified: this file and provenance name the section, the headcount, and the dropped field kinds, and do not restate the identifiers (name / age / city dest 0 / provenance 0 / this file 0 as use).

## YAML key-path self-check (wave 29 extra)

Every `tokens.*` key path from the source frontmatter was checked against the portable body by path, not by finding the same number in another scale.

| Path | Check |
|---|---|
| tokens.colors.* (20 hex) | Each hex is a Semantic color role row; dest ≥ 1 |
| tokens.typography.family.{display,body,numeral} | Family section names all three |
| tokens.typography.{hero-accent,display,section,feature,quote,card-title,label,numeral} | Type-roles table; unitless LH 1.20/1.30/1.40/1.50/1.00 on those rows only |
| tokens.spacing.{xs,sm,base,md,lg,xl,xxl,section} | Spacing slot `xs: 4` … `section: 80`; `md: 16` is not the radius step |
| tokens.rounded.{sm,md,lg,xl,pill} | Shape slot `sm: 4` … `pill: 50`; `lg: 16` is not the spacing step |
| tokens.shadow.{none,card-inset} | Elevation table |
| tokens.components.* type | button 3 / badge 2 / card 3 / tab 1 |

`type: button` dest 3 = source YAML button records 3. No line-height was copied from one role onto another (gogolook-type).

## Revision 2026-08-28 (wave29 review)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**. Trigger: semantic review FAIL 1, re-confirmed by the orchestrator. One defect only. Token values, component-table structure, other state rows, B2a complete qualifiers, and the derived-inventory 1:1 were not opened. Source `web/references/greeting/DESIGN.md` and sibling `.verification.md` were not modified.

`find` confirmed the six files before any count: dest `DESIGN.md` / `provenance.md` / `migration-log.md` / `audit-log.md`, source `DESIGN.md`, sibling `.verification.md`. Counts below are `grep -oF '<needle>' <file> | wc -l`, file by file. A file that exists and prints no match is 0 for that file.

**1. D1 — delete the invented measurement denial.** Source §8 Desktop row is `1024-1440px` with no measurement verb. Sibling method records `1440×900` only. The portable image-behavior close and the provenance sibling/boundary notes had added `does not say that anything measures 1440px`. That measurement frame is not in the source or the sibling; writing the silence as a no is D1. The denial clause is removed. The source Desktop range stays as declared width (table `DESIGN.md` 441 + image-behavior close 452). No negative claim of the form "does not measure 1440px" was written in its place. Wave 27 gaudiy approved the same pattern: Desktop range only, `measures 1440px` dest 0.

| needle | orig | sib | dest after | provenance after |
|---|---:|---:|---:|---:|
| `measures 1440px` | 0 | 0 | 0 | 0 |
| `does not say that anything measures 1440px` | 0 | 0 | 0 | 0 |
| `1024-1440px` | 1 | 0 | 2 | 2 |
| `1440×900` | 0 | 1 | 0 | 3 |

The earlier F3 / log claims that `measures 1440px` dest 1 / provenance 2 (denial sentences) are **SUPERSEDED** by this revision. Historical `audit-log.md` still mentions the old clause; those mentions are the defect record, not a body fact. This file's §8 and sibling-handling rows were updated to dest 0 / provenance 0.

Line count of `DESIGN.md` stays 528 (in-place clause deletion). F2 pointers re-checked against the current file: 1 · 9 · 13 · 31 · 129 · 137 · 180 · 239 · 247 · 435 · 437–441 · 443 · 445–450 · 452 · 455 · 457 · 488 · 524. B2a `derived editorial implementation inference` dest 26 = provenance inventory 26 data rows. gate `PASS` / `problems []`. `inspectDesignMd` `portable_core: true` / `level: portable-core` / `reasons: []`. SHA-256 `832baf233a4cb74a9a6573b6cbb948046b2a8e7185d45de0b09e69d5c28d2712`.
