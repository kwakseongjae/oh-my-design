# lemonbase migration log

Source: `web/references/lemonbase/DESIGN.md`
Sibling read (not the migration input): `web/references/lemonbase/.verification.md`
Destination: `docs/design-md-weight/migrated/lemonbase/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/lemonbase/provenance.md`
Date: 2026-08-29
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Counts use `grep -oF` / Python `str.count` per file, never `grep -c`, which counts lines.

Source SHA-256 `d46739f679e5ae5ac7c1978232b613220a15d62e47dcb36eb098a3506a81bb7c` (`web/references/lemonbase/DESIGN.md`). Sibling SHA-256 `e6c8c71a1248aeb4a23779593d4f50868720a369adb507258cd6775c06740712` (`web/references/lemonbase/.verification.md`). Worker-close portable DESIGN SHA-256 `e89c4f156404b85bf73a0c50bf2db6273e9ae1488e307384bf4f513a8de04366`. F3-auditor portable DESIGN SHA-256 `c2c81156744154dc336e44dafd660d243892ad3398ded432af3d6de66884583f`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `display_name_kr`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations + components; `display_name_kr` 옮김 → Scope + Content | Portable file has no frontmatter. H1 is `# Lemonbase Design System` (`DESIGN.md` 1). Identity table `provenance.md` Identity. `https://www.lemonbase.com` is dual: `DESIGN.md` Scope + `provenance.md` Identity/Surfaces (E2a). `#328af6` is dual: dest 13 / provenance 7. `레몬베이스` is dual: dest 2 / provenance 7. The favicon slug is provenance-only (Assets at 231 says the catalog logo entry is a Google favicon-service URL and is not presented as a brand asset, with an adjacent complete qualifier; `s2/favicons` dest 0 / provenance 1). |
| YAML `omd: "0.1"`, `verified`, `added`, `tokens.source: live-extract`, `tokens.extracted`, `tokens.note`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` Identity + Freshness. The source token note is transcribed verbatim in Identity. The source footer's producer string `omd:add-reference CREATE — Tier 1 live inspect, 2 surfaces` is in Freshness. These are ledger keys with no portable slot. `omd` dest 0. |
| YAML `tokens.colors` (16 keys) | 옮김 → Foundations semantic color | `DESIGN.md` Semantic color (86–116). All sixteen roles kept with names and values: primary, primary-tint, consult-green, accent-purple, accent-yellow, accent-pink, ink, body, muted, faint, hairline, canvas, surface, surface-alt, dark, on-primary. `grep -oF` dest counts: `#328af6` 13 · `#edf5ff` 4 · `#469f68` 6 · `#5d3dd5` 4 · `#ffd750` 4 · `#c7317b` 4 · `#1a2128` 11 · `#4c5967` 2 · `#677583` 3 · `#cfd3d8` 3 · `#e2e5e9` 7 · `#ffffff` 12 · `#f1f5f9` 12 · `#f9f9f9` 6 · `#2c2c38` 2 · `#000000` 1 (Don't: body text). `on-primary` shares `#ffffff` with canvas and is kept as a second role (A4). F3 remeasure: `#ffffff` dest **12** at 11×2/88/105×2/245/270/315/337/393/414/444; provenance **4**. `#f1f5f9` dest **12** at 11/39/66/88/106/144/151/291/405/429/434/444; provenance **3**. The extra dest vs worker-close dest 11 are the Semantic `:88` keep-apart names. |
| YAML `tokens.typography.family` (`display: "Pretendard Bold"`, `body: "Pretendard Regular"`, `accent: "Manrope"`) | 옮김 → Typography & Assets Family | `DESIGN.md` Family (197–203). Paths named `tokens.typography.family.display` / `body` / `accent`. Declared fallbacks `Pretendard Bold Fallback` dest 2 · `Pretendard Regular Fallback` dest 2. The fallback prohibition on 203 carries an adjacent complete qualifier (B2/B2a). |
| YAML `tokens.typography.display-hero / section / subsection / card-head / body / ui / caption` | 옮김 → Typography & Assets Type roles | `DESIGN.md` Type roles (205–217). The unitless-keep reading at 217 carries an adjacent complete qualifier (B2/B2a). Unitless line heights stay ratios and are never converted to px (A1a): `1.30` dest 1 · `1.40` dest 2 · `1.44` dest 1 · `1.50` dest 3. Tracking `-0.56px` dest 3. Rem forms kept: `3.00rem` dest 1 · `2.75rem` 1 · `2.25rem` 1 · `1.75rem` 1 · `1.00rem` 1 · `0.88rem` 1 · `0.75rem` 1. All seven YAML `use` strings restored verbatim in the Token-set use column (A1, A3). |
| YAML `tokens.spacing` (8 steps) / `tokens.rounded` (6 steps) | 옮김 → Foundations spacing + shape; also Layout | Paths kept separate: `tokens.spacing` dest 3 · `tokens.rounded` dest 3. Spacing steps on one line at `DESIGN.md` 120: `xs: 4` · `sm: 8` · `md: 12` · `base: 16` · `lg: 24` · `xl: 32` · `xxl: 48` · `section: 64`. Shape steps on one line at 128: `xs: 6` · `sm: 8` · `md: 12` · `lg: 16` · `xl: 24` · `pill: 36`. `sm: 8` dest 6 is both paths; 122 and 137 say they are not the same step and each carries an adjacent complete qualifier (B2/B2a). `sm: 8` provenance dest **3**. Layout restates both scales at 446–447. |
| YAML `tokens.shadow.ambient` / `soft` / `tight` | 옮김 → Foundations elevation | Ambient full form `rgba(0,0,0,0.08) 0px 8px 36px 0px` dest 3 / provenance 2 (E2a dual). YAML component shorter form `rgba(0,0,0,0.08) 0px 8px 36px` dest 6 / provenance 3 (substring-inclusive; both byte forms are named at `DESIGN.md` 149, whose keep-both reading carries an adjacent complete qualifier). Soft `rgba(0,0,0,0.04) 0px 12px 36px 0px` dest 2 / provenance 1. Tight `rgba(0,0,0,0.08) 0px 1px 24px 0px` dest 2 / provenance 1. `box-shadow: none` dest 1 / provenance 0 (no invented second home). |
| YAML `tokens.components` (7 records) | 옮김 → Components & States | `DESIGN.md` 240–407. Verified primitive types preserved per component, not flattened to `Kind` (A1b): `Primitive type: \`button\`` ×3 (Primary / Consult / Neutral), `tab` ×1 (Top Nav), `card` ×2 (Elevated / Tinted), `badge` ×1 (Accent Label Chip). All seven YAML `use` strings restored as `Token-set use:` lines. YAML `font` shorthands `14px / 700 Pretendard Bold` dest 3 · `12px / 400 Pretendard` dest 1 · `12px / 700 Pretendard Bold` dest 1. YAML `states` byte form `hover darken` dest 3. YAML `active` byte form `text #328af6` dest 1. YAML padding `0 16px` dest 2 kept beside body `0px 16px` dest 2. |
| §4 body-only: Outline CTA (소개서 신청), Tight-Shadow Panel, Carousel Controls | 옮김 → Components & States (A3) | These three have no YAML component key. Outline `DESIGN.md` 311–331 (interactive, destination). Tight-Shadow 411–419 (C4, kind withheld). Carousel 355–374 (interactive arrow). `rgba(0,0,0,0.2)` dest 1 / provenance 0. `소개서 신청` dest 5. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–15; Key Characteristics as Distinctive traits 33–44. Atmosphere readings carry an adjacent complete qualifier at 11 (B2/B2a). Surface-boundary reading at 9. Gloss `(Contact sales)` dest 1 = src 1. Quoted `"the next step."` dest 1 = src 1. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `DESIGN.md` 86–116. The source's own group headings (Primary, Secondary & Accent, Neutral & Surface, Text Hierarchy) are kept as the grouping. Role-naming readings carry the adjacent qualifier at 88 (B2/B2a). |
| §3 Typography Rules — family, hierarchy | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 186–195; family 197–203; hierarchy table 205–217. Official product-use, Declared-only, License, and Outside-these-captures rows carry adjacent complete qualifiers (B2/B2a). |
| §3 Principles — bold display/light body, tight tracking, hangul-first, two fonts two jobs | 옮김 → Typography & Assets Typography rules | `DESIGN.md` 219–226 under the qualifier at 221 (B2/B2a). |
| §4 Component Stylings | 옮김 → Components & States | `DESIGN.md` 240–419. §4 body values and YAML `use` / `font` / `states` / `active` / padding byte forms are both kept where they differ. |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance; URL 세 개 옮김 → Experience Scope | Freshness + Surfaces + Sources in `provenance.md`. `https://www.lemonbase.com` / `/pricing` / `lemonbase.com/blog/` are dual: Scope + provenance Surfaces (E2a). Conflicts unresolved: none — `provenance.md` Freshness. `Tier` dest 0. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | `DESIGN.md` 440–447 (centered hero, carousels, alternating bands, then spacing/shape restatements). Breathing-room / hairline-segmentation / rationed-blue readings carry the qualifier at 449 (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Five-level table `DESIGN.md` 141–147, including Soft `rgba(0,0,0,0.04) 0px 12px 36px 0px`. The Shadow Philosophy paragraph is carried as a qualified reading at 151 (B2/B2a). |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 57–67, under the grouping qualifier at 59. Not placed in Governance controlled copy. Eight items, matching the source Do list. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 70–80, under the qualifier at 72. Seven items. Standalone `Do not` prefix added so the Avoid heading is readable as a prohibition list; every value the source Don't names is kept. `#000000` dest 1. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms; image behavior 옮김 → Typography & Assets Assets + Layout | Breakpoint table `DESIGN.md` 453–457 with the "stated at system level rather than measured across viewports" note at 451; touch targets 459 (`40–44px` dest 1); collapsing strategy 461–466; image behavior 230/468. The source Desktop row `1024-1440px` dest 2 is kept as declared width (`as declared width` dest 1 at 468, with an adjacent complete qualifier). Exact string `measures 1440px` dest 0 / provenance 0. |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide | 삭제 | Tool-facing copy-paste prompts and restatements; no receiving slot and no delegation. Every value §9 names was checked against the portable body before deletion and each was already present — the sixteen palette hexes, the 6/8/12/16/24/36 radii, the 48/44/36/28/16/14/12 sizes, the 700/400 weights, the 0 16px / 16px paddings, and the published Korean strings (A2, A3). |
| §10 Voice & Tone | 옮김 → Content & Locales | Published strings `DESIGN.md` 471–507; register table 475–481; voice samples 483–488; further recorded strings 490–503; forbidden register 505. The source's own English gloss of the hero is kept beside the Korean line at 473; the closing line at 507 says an English gloss never replaces the Korean line (A5). The qualifier at 473 covers the characterization and the table (B2/B2a). |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: Korean HR-tech SaaS; 평가 / 목표관리 / 1:1s / 몰입관리; consulting 리더십 역량 진단 / 조직 진단 / 리더십 교육; positioning **"고성과를 위한 변화, 필요한 솔루션을 한번에"**; **"구성원이 신뢰할 수 있는 평가"**; **"어렵기만 한 성과관리, 이제는 쉽게"**; **"신뢰할 수 있는 전문가"**. `grep -oF` dest: `평가` (as product term) present · `목표관리` 2 · `1:1s` 2 · `몰입관리` 4 · `리더십 역량 진단` 2 · `조직 진단` 2 · `리더십 교육` 2 · `고성과를 위한 변화, 필요한 솔루션을 한번에` 5. Marked there as narrative context that supplies no interface tokens. The refusal/embrace paragraph at 15 carries an adjacent complete qualifier (B2/B2a). |
| §12 Principles — 6 numbered | 옮김 → Experience principles | `DESIGN.md` 46–55 under the B2a form at 48: "These six items are a derived editorial implementation inference from the verified surfaces; they are not Lemonbase-authored or a separately published UI specification." No published first-party DS, so the toss-form close is used (rulebook v12 B2a 전제 주석). |
| §13 Personas — 3 entries | 삭제 | The source's own italic line labels them fictional archetypes informed by publicly observable segments, not individual people. Not promoted to Audience or to `primary-tasks`, and not re-hosted in the sidecar: no name, age, or city appears in either output (D2, D2a). Identifier strings dest 0 / provenance 0 / this log 0 as use. Audience at `DESIGN.md` 31 carries only the group-level description the source records (Korean HR leaders, people-team managers, team leads running evaluations), under an adjacent qualifier. The four `primary-tasks` at 21–24 come from labels and surfaces the source records; 26 says so and qualifies the step from label to "primary task". |
| §14 States — 9 rows | 옮김 → Components & States State record + per-component applicability | Full nine-row body preserved at `DESIGN.md` 421–436 (A2; the catalog graph is still 0/440, so nothing is delegated), including the published strings "오류가 발생했습니다" dest 1 and 필수 dest 1. The close at 437 (non-attachment to marketing destination controls) carries an adjacent complete qualifier. The applicability rule is at 236–238, whose qualifier at 238 covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). |
| §14 → per-component applicability | 옮김 → Components & States | 6 interactive components × 7 states = 42 rows: 24 `applicable` and 18 `not-applicable`, the latter only with a role reason (C2 v10) — Primary / Consult / Neutral / Outline each close loading/error/success as destination; Top Nav as destination tab; Carousel as arrow. `loading \| not-applicable` dest 6 · `loading \| applicable` dest 0. The three cards get no `kind` and no map because the source supplies no interaction evidence — C4 at 399/409/419. The badge declares `Kind: non-interactive` with a reason instead of a map. |
| §15 Motion & Easing — durations, easing token names/roles, motion rules, reduced-motion | 옮김 → Foundations motion | `DESIGN.md` 159–163 (the three duration tokens with their uses: `motion-fast` 120ms, `motion-standard` 200ms, `motion-slow` 320ms), 165–171 (three easing token names and roles), 175–180 (functional/quiet rule, carousel slide, fade-from-below, no bounce or spring, and the `prefers-reduced-motion: reduce` behavior). `120ms` dest 1 · `200ms` dest 1 · `320ms` dest 1. |
| §15 Motion & Easing — three `cubic-bezier` values | 삭제 → provenance omission ledger | No observation stands behind them: the source records a live inspect of color, type, geometry, and shadow and supplies no transition, animation, or easing sample. `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` is byte-identical to the example table at `spec/omd-v0.1.md` line 267, the documented re-injection path. The other two (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) are likewise unattributed. Ledger at `provenance.md` Omission ledger. Occurrence counts by `str.count('cubic-bezier')` → `DESIGN.md` 0, `provenance.md` 5 (three curves + the omd-v0.1 citation + the listing sentence). B3 is held: the promotion condition at `DESIGN.md` 173 names all five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text, plus the partial-confirmation exclusion (E2c). Governance 543 restates the five kinds and the gate. `transition properties` dest 2 · `animation name` dest 2 · `reduced-motion behavior` dest 2 · `partial confirmation` dest 1. |
| HTML comment OmD v0.1 Sources | 분리 → provenance | Live-inspect notes, Tier 1/2 URLs, narrative class, voice-sample attribution, editorial-reading admission, and the blog CMS chrome `Ant Design rgb(24,144,255)` are ledger material: `provenance.md` Evidence class + Third-party strings. `Ant Design` dest 0 / provenance 1. `rgb(24,144,255)` dest 0 / provenance 1. |

## Sibling handling (`web/references/lemonbase/.verification.md`)

The sibling exists — confirmed with `find web/references/lemonbase -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

- Its full record is transcribed at `provenance.md` Sibling verification + Raw samples and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: body `rgb(0, 0, 0)` / 12px, h1 two-line `129px`, `rgba(50,138,246,0.12)` / purple and green 12% washes, frequency counts, favicon fetch `818 bytes`, simpleicons 404, `https://guide.lemonbase.com/`. Recorded at `provenance.md` Sibling-only values. Neither side of a conflict was chosen as a new token.
- `https://guide.lemonbase.com/` is absent from the source `DESIGN.md` (`guide.lemonbase.com` src 0 / dest 0 / provenance 2). It is not used to invent a portable surface or an unresolved-domain row (D1).
- Published strings that appear only in the sibling survive in provenance, not in the portable body: document.title home `레몬베이스 - 고성과를 위한 변화, 필요한 솔루션을 한번에`; document.title pricing `가격 안내 - 레몬베이스`. The hero line without the title wrapper is not sibling-only (source body): dest 5.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. Gate coverage after this file existed: `compared` 26 < `candidates` 185, so the A5a hand sweep is mandatory and was run.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Brand-issued Korean strings in the source (labels, CTAs, slogans, microcopy, titles) | 28 distinct (persona identifiers excluded) | 0 | 0 | All 28 survive in `DESIGN.md`. |
| Brand-issued Korean strings in the sibling, any length | 2 sibling-only document.title lines | 0 | 0 | Both survive in provenance. |
| `node test-v2/tools/latin-copy-audit.mjs --brand lemonbase` after restore | 19 candidates | 0 reported | 0 | First run reported 1 lost (`the next step.`). Restored as the quoted source form at `DESIGN.md` 11, with `(Contact sales)` restored beside 도입 문의. Re-run: `clean: 1`, `lost: 0`. |

Sub-needle labels the machine check could not see were confirmed present individually in `DESIGN.md`: 레몬베이스, 도입 문의, 상담 문의, 소개서 신청, 더 알아보기, 로그인, 가격 안내, 성과관리, 몰입관리, 가격, 리더십 진단, 고성과를 위한 변화, 필요한 솔루션을 한번에, 구성원이 신뢰할 수 있는 평가, 어렵기만 한 성과관리, 이제는 쉽게, 신뢰할 수 있는 전문가와 함께 더 나은 성과를 만드세요, 레몬베이스와 함께 더 높은 성과를 만들어가는 고객사, 신뢰할 수 있는 전문가, 리더십 역량 진단, 조직 진단, 리더십 교육, 목표관리, 평가, 오류가 발생했습니다, 필수, AI TRENDS, Contact sales, the next step., Change for high performance — every solution you need, in one place, evaluation employees can trust, performance management that was only ever hard — now made easy, trusted experts.

Persona-section identifiers are not brand-published copy and are not in this denominator. They are dest 0 / provenance 0 / this file 0 as use.

A5 분모: latin-copy-audit 19/19 survived after restore; Korean hand sweep 28 extracted / 0 missing / 0 published-copy missing. Sibling-only published 2/2 in provenance.

## Named gaps / unresolved check (D1a)

There is no `Named gaps` section (`Named gaps` dest 0). Governance → Recorded unresolved names only domains the source itself establishes:

| Unresolved item | Source basis |
|---|---|
| Exact easing curves | §15 lists three curves; the live-inspect comment assigns no source to §15 |
| Disabled opacity value | §14 Disabled: "reduced-opacity surface" with no opacity number |
| Skeleton pulse | §14 Skeleton: "soft pulse" with no duration or opacity range |
| Primary-CTA hover fill | §4 "Hover: blue darkens"; YAML `hover darken`; no hex |
| Product UI beyond the system-level state record | §11 product span + §14 evaluation/survey/form treatments |
| Blog as a token source | Source footer and HTML comment name `https://lemonbase.com/blog/` as a separate CMS template, not a token source |

**No domain the source leaves unmentioned is listed.** In particular the list names no native-client, parity, authenticated, storefront, or `guide.lemonbase.com` domain. Measured in the source: `native-client` = 0, `parity` = 0, `authenticated` = 0, `guide.lemonbase.com` = 0. D1 trigger phrases in the body (`not captured` / `were not` / `없었다` / `않았다` / `미기록`) dest 0.

## C2 — state applicability by role

Ten records are declared: six interactive with a full seven-state map, one non-interactive with a reason and no map, three cards with type but no kind and no map. Measured: state tables = **6**, `Kind: interactive` = **6**, `Kind: non-interactive` = **1**, `state-applicability map are both withheld` = **3**, `not-applicable` = 18 (18 table cells).

| Component | Kind | loading | error | success | Basis |
|---|---|---|---|---|---|
| Primary CTA (도입 문의) | interactive | not-applicable | not-applicable | not-applicable | Destination inquiry; YAML `type: button` |
| Consult CTA (상담 문의) | interactive | not-applicable | not-applicable | not-applicable | Destination consult on pricing |
| Neutral Button (로그인) | interactive | not-applicable | not-applicable | not-applicable | Header hand-off to login |
| Outline CTA (소개서 신청) | interactive | not-applicable | not-applicable | not-applicable | Brief-request destination; body-only record |
| Top Nav Item | interactive | not-applicable | not-applicable | not-applicable | YAML `type: tab`; destination items 성과관리 / 몰입관리 / 가격 / 리더십 진단 |
| Carousel Controls | interactive | not-applicable | not-applicable | not-applicable | Previous/Next arrow; no committing operation (C2) |
| Accent Label Chip | non-interactive | — | — | — | No map. YAML `type: badge`; a label chip |
| Elevated Feature Card | — | — | — | — | YAML `type: card`; no interaction evidence (C4) |
| Tinted Container | — | — | — | — | YAML `type: card`; no interaction evidence (C4) |
| Tight-Shadow Panel | — | — | — | — | Body-only panel; no interaction evidence (C4) |

`default`, `hover`, `focus-visible`, and `disabled` are `applicable` on all six declared maps, with visual treatments omitted except Primary hover (recorded as "blue darkens" without a hex). **Every `not-applicable` cell gives a semantic role reason and none cites absence of observation** — measured: rows matching a `not-applicable` cell followed by a non-observation reason = **0**. No `focus-visible` row carries a colour value (B1). `focus-visible` dest 6.

The C2 v10 reading was applied in both directions. The six interactive controls were **not** opened to loading/error/success just because they are controls; each was judged by its recorded role. The three cards were **not** closed by primitive shape either.

## E1 process-leak check

`node test-v2/tools/process-leak-check.mjs` → **lemonbase absent from `detail`, 0 hits**. Grep-verified at 0 occurrences in `DESIGN.md`: `Tier`, `provenance`, `source ledger`, `sidecar`, `golden`, `migration-log`, `catalog graph`, `omd-apply`, `Conflicts unresolved`, `Pipeline`, `Catalog position`, `reconciled`, `verification_v2`, `live-inspect`, `data-omd-capture`, `YAML`. The brand's own URLs — `lemonbase.com` — are brand facts and stay in the body.

## Deviations recorded

- `DESIGN.md` is 6,928 words by Python `split` and 6,963 by `wc -w` (the two counters are not equal; F3 does not treat them as one measure), above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: sixteen color roles, seven type roles with dual unitless/rem forms, seven YAML component records plus three body-only records with dual `use`/`font`/`states` forms, a nine-row surface state contract, a 42-row applicability matrix, marketing-vs-product domain splits, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- Lemonbase has no published first-party design system (getdesign.md "No designs found"; refero not indexed), so every derived-editorial close uses the toss-form "not Lemonbase-authored or a separately published UI specification" (rulebook v12 B2a 전제 주석). Measure `grep -oF | wc -l` = **35** = `not Lemonbase-authored or a separately published UI specification` dest **35**.
- The source names three URLs as Tier 1 in its footer but supplies computed evidence for only two of them. The blog URL is therefore carried as a named source with no computed design value attached, in Scope and in Recorded unresolved.

## F1 — B2a scan (mandatory final pass)

The finished `DESIGN.md` was re-read from the title through Governance. Every sentence that states a cause, a reading, a role name this contract assigned, a kind/applicability verdict, or a voice characterization was asked: is this a Lemonbase-issued fact, or a reading derived from the observed surfaces? The latter received an adjacent complete qualifier — "derived editorial implementation inference from the verified surfaces; … not Lemonbase-authored or a separately published UI specification".

Corrections made during the scan, before submission:

| # | Location | Was | Now |
|---|---|---|---|
| 1 | Scope ¶2 | "The separation device is the hairline" and "The single saturated brand action color" stated as facts | Recorded separators and recorded blue uses first; hairline-as-separator, single-action, cool/warmer temperatures, and `"the next step."` named inside the adjacent qualifier |
| 2 | Scope ¶3 | "built around performance management as a continuous practice" and "frames the company as the single place…" stated as facts | Product span and quoted Korean lines stated as recorded copy; continuous-practice / one-place / trust-and-ease readings moved into the adjacent qualifier |
| 3 | Avoid | Source Don't verbs standing alone (`Spread blue…`) | `Do not` prefixed so the prohibition is readable outside the Don't heading; values unchanged |
| 4 | Spacing | "sections breathe with 48–64px" | "sections use 48–64px"; the breathing-room reading stays in the qualified sentence at 124 |
| 5 | Assets logo sentence | Causal `so` tying the Google favicon URL to the non-asset decision | Two sentences, no `so` |
| 6 | Components / Elevation | "YAML token set" | "source token set" / "source token-set" |

F3 remeasure: `derived editorial implementation inference` dest **35** = `not Lemonbase-authored or a separately published UI specification` dest **35** = provenance Derived editorial inventory **35** data rows (181–215). Provenance names the clause in the inventory preamble; that occurrence is not a portable qualification. Worker-close 26=26 was numerically matched but jointly narrow (fastcampus). F3 added 9 complete hedges (Spacing keep-apart 122, Elevation keep-both 149, Motion curve omission 165, Declared-only 193, Outside-captures 195, Type-roles unitless 217, Assets logo 231, State-record close 437, Desktop declared-width 468) and folded five existing hedges (Primary tasks 26, Audience 31, Semantic 88, Shape 137, How-to-read 238).

Source facts that were not qualified: the product name 레몬베이스, the live hex and metric values, the published Korean strings, `(Contact sales)`, and the recorded component fields.

## F2 — E2 대조 (mandatory final pass)

Each log row above was written only after `str.count` / `grep -oF` confirmed the named value in the named file. Dual destinations are claimed only where both files contain the string (`#328af6`, homepage URL, `레몬베이스`, `rgba(0,0,0,0.08) 0px 8px 36px 0px`, blog URL). `box-shadow: none` is dest 1 / provenance 0 — this log does not invent a second home. `rgba(0,0,0,0.2)` is dest 1 / provenance 0. "B3 is held" is claimed because `DESIGN.md` 173 contains the five evidence kinds, the per-component gate, and the partial-confirmation exclusion in full text (`transition properties` dest 2 · `animation name` dest 2 · `reduced-motion behavior` dest 2 · `partial confirmation` dest 1). "B2a 35=35" is claimed because both the portable count and the inventory row count are 35 after F3. §13 deletion is claimed as unidentified: this file and provenance name the section, the headcount, and the dropped field kinds, and do not restate the identifiers (name / age / city dest 0 / provenance 0 / this file 0 as use). The one `\b34\b` hit in provenance is the sibling frequency `radius 24px ×34`, not a persona field.

## YAML key-path self-check

Every `tokens.*` key path from the source frontmatter was checked against the portable body by path, not by finding the same number in another scale.

| Path | Check |
|---|---|
| tokens.colors.* (16 hex) | Each hex is a Semantic color role row; dest ≥ 1 |
| tokens.typography.family.{display,body,accent} | Family section names all three |
| tokens.typography.{display-hero,section,subsection,card-head,body,ui,caption} | Type-roles table; unitless LH 1.30/1.40/1.44/1.50 on those rows only |
| tokens.spacing.{xs,sm,md,base,lg,xl,xxl,section} | Spacing slot `xs: 4` … `section: 64`; `sm: 8` is not only the radius step |
| tokens.rounded.{xs,sm,md,lg,xl,pill} | Shape slot `xs: 6` … `pill: 36`; `sm: 8` is not only the spacing step |
| tokens.shadow.{ambient,soft,tight} | Elevation table |
| tokens.components.* type | button 3 / tab 1 / card 2 / badge 1 |

`type: button` dest 3 = source YAML button records 3. No line-height was copied from one role onto another.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand lemonbase --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 26, candidates: 185 }]`. Separately, `scripts/design-md-core.cjs` `inspectDesignMd` reports `level: portable-core`, `portable_core: true`, `reasons: []`, `cleanTop: true`, `projectionLocale: en`, and 0 `[FILL IN]`. `node test-v2/tools/latin-copy-audit.mjs --brand lemonbase` → `clean: 1`, `lost: 0`. `node test-v2/tools/process-leak-check.mjs` → lemonbase absent from `detail`.

Both the gate and `inspectDesignMd` are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 26 < `candidates` 185.
