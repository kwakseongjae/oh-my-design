# laftel migration log

Source: `web/references/laftel/DESIGN.md`
Sibling read (not the migration input): `web/references/laftel/.verification.md`
Destination: `docs/design-md-weight/migrated/laftel/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/laftel/provenance.md`
Date: 2026-08-29
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Counts use `grep -oF … | wc -l` per file, never `grep -c`, which counts lines.

Source SHA-256 `6c837662e2023172dd56d56bdb0bb6587cf5bb3c1b49c7e1b8a6506b4ae30333` (`web/references/laftel/DESIGN.md`). Sibling SHA-256 `285e885f9c200163f1f582205ab9d356fb6c1a61c65657aa1caac287775b67f4` (`web/references/laftel/.verification.md`). Worker-close portable DESIGN SHA-256 `805ebcc58cda3ec33d93eb99647dd0de1037c9f49d4a951d5803c1cfa85b56a7`. Auditor-close portable DESIGN SHA-256 `47f42e108de3b145af916009dd324eb267adad5c1a6b401613d667a16e2e9acd`. A1 unique-fact restore portable DESIGN SHA-256 `f60be69518c026f7cdacd3b9f7143d8bb70f1d62d8a5fd0326ca3cd18844f8b0`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations + Primary CTA; `logo.type` / favicon slug 옮김 → Typography & Assets Assets | Portable file has no frontmatter. H1 is `# Laftel Design System` (`DESIGN.md` 1). Identity table `provenance.md` Identity. Catalog homepage `https://laftel.net` is dual: DESIGN dest **3** + provenance dest **7** (`E2a`). `#816BFF` is dual: DESIGN dest **14** + provenance dest **5** (`E2a`). YAML lowercase `#816bff` DESIGN dest **3**. The Google s2 favicon slug is dual: DESIGN dest **1** + provenance Identity (`E2a`). 라프텔 DESIGN dest **5**. |
| YAML `omd: "0.1"`, `verified`, `tokens.source: prose-derived`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` Identity + Freshness. `prose-derived` DESIGN dest **0** / provenance dest **4**. `2026-06-03` DESIGN dest **0** / provenance dest **10**. `components_harvested` DESIGN dest **0** / provenance dest **2**. `ds.type` is absent from the source and is not invented. |
| YAML `tokens.colors` (11 keys) | 옮김 → Foundations semantic color | Paths named in `DESIGN.md` Semantic color: `tokens.colors.primary` dest **3** · `tokens.colors.brand` dest **2** · `tokens.colors.primary-hover` dest **1** · `tokens.colors.canvas` dest **3** · `tokens.colors.foreground` dest **3** · `tokens.colors.muted` dest **2** · `tokens.colors.surface` dest **1** · `tokens.colors.hairline` dest **3** · `tokens.colors.accent-wash` dest **1** · `tokens.colors.error` dest **1** · `tokens.colors.on-primary` dest **2**. primary/brand stay two keys that share `#816bff`. canvas/on-primary stay two keys that share `#ffffff`. YAML `#121212` as `foreground` stays unmerged from body dark canvas `#121212`. |
| YAML `tokens.typography.family` (`sans: Pretendard` / `mono: Pretendard`) | 옮김 → Typography & Assets Family | `tokens.typography.family.sans` dest **1** · `tokens.typography.family.mono` dest **1**. The two keys stay two keys (`DESIGN.md` 194 B2a). Pretendard DESIGN dest **13**. |
| YAML `tokens.typography` 10 roles | 옮김 → Typography & Assets Type roles | Unitless `1.5` stays a ratio (A1a): DESIGN dest **20**. Source §3 px spellings split (not one grouped dest): `40px` dest **5** · `32px` dest **3** · `28px` dest **1** · `13px` dest **1**, kept beside the unitless YAML sizes. All ten YAML `use` strings restored verbatim: Largest display title / Section title / Sub-section title / Card / block title / Small title / Large body / button label / Default body / Nav link, toast, small label / Metadata / Fine print dest **1** each. Paths `tokens.typography.title-xxl` … `text-xxs` dest **1** each. |
| YAML `tokens.spacing` (`xs: 4` / `sm: 8` / `md: 12` / `base: 16` / `lg: 24` / `xl: 32` / `xxl: 48`) | 옮김 → Foundations spacing | `tokens.spacing.xs` dest **3** · `sm` dest **3** · `md` dest **2** · `base` dest **2** · `lg` dest **2** · `xl` dest **1** · `xxl` dest **1**. `tokens.spacing.md: 12` is not a rem step. `40px` (2.5rem margin) is the layout note, not a YAML key: DESIGN dest **5**. |
| YAML `tokens.rounded` (`sm: 4` / `md: 4` / `lg: 8` / `full: 9999`) | 옮김 → Foundations shape | `tokens.rounded.sm` dest **3** · `md` dest **2** · `lg` dest **3** · `full` dest **1**. `9999px` DESIGN dest **4**. Body badge `50%` DESIGN dest **10**. Three writings kept. |
| YAML `tokens.shadow.none` | 옮김 → Foundations elevation | `tokens.shadow.none` DESIGN dest **1** + provenance dest **1** (`E2a`). Not flattened over §6 shadows. `box-shadow: none` DESIGN dest **0** / provenance dest **0** (source never wrote that string). |
| YAML `tokens.components` (7 records) | 옮김 → Components & States | Verified primitive types preserved (A1b): `Primitive type: \`button\`` dest **4** = source YAML `type: button` **4**. `Primitive type: \`tab\`` dest **1** = `type: tab` **1**. `Primitive type: \`badge\`` dest **1** = `type: badge` **1**. `Primitive type: \`toast\`` dest **1** = `type: toast` **1**. All seven YAML `use` strings restored verbatim: Primary CTA (md) dest **2** · Primary CTA (sm) dest **2** · Secondary action dest **1** · Disabled action dest **5** · Desktop nav — active/hover link purple dest **1** · Notification count badge dest **1** · Default toast (#000000 light / #242537 dark) dest **1**. `link color #816bff` dest **1**. `hover #6e58ff` dest **1**. `hover #d9d3ff` dest **1**. `10px / 700` dest **1**. `14px / 400` dest **1**. YAML disabled fg `#8a8a8a` dest **4** kept beside body `#D0D0D0` dest **5**. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 32–38. Atmosphere readings carry the adjacent qualifier at 11 (B2/B2a). Dual-mode hexes `#121212` dest **9** · `#000000` dest **6** · `#816BFF` dest **14** · `#FFFFFF` dest **9** · `#F7F7F7` dest **2**. |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** | 분리 → provenance; URL 옮김 → Experience Scope | Freshness + Surfaces + Sources in `provenance.md`. Conflicts unresolved: none — DESIGN does not invent a conflict. getdesign / refero stay as Named gaps of unnamed records at `DESIGN.md` 494. `No designs found for` DESIGN dest **0** / provenance dest **1**. App Store URL DESIGN dest **1** + provenance dest **2** (`E2a`). Chunk `b3ccd441-eef37a2225571c0d.js` DESIGN dest **1** + provenance dest **2** (`E2a`). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | Role names from the source (Purple 500 / Purple 50 / Purple 100 / Purple Gray 800 / 900 / Background 1–3 / Foreground 1–3 / Border 1 / Red 300 / Red 500). `#191B2A` dest **1**. `#D9D3FF` dest **4**. `#6E58FF` dest **4**. `#F16361` dest **2**. `#FF1010` dest **1**. `#505050` dest **1**. `#E2E2E2` dest **1**. `#8A8A8A` dest **3**. `#ABABAB` dest **1**. `#323232` dest **2**. `#EEEEEE` dest **6**. Pairing/keep-both qualifier at `DESIGN.md` 77. |
| §3 Typography Rules — family, scale, weight, line-height, letter-spacing, smoothing | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 179–188; family 191–195; roles 199–213. Fallback stack `-apple-system` dest **2** · `BlinkMacSystemFont` dest **2** · `Noto Sans KR` dest **2**. `cdn.jsdelivr.net/gh/orioncactus/pretendard` dest **3**. `antialiased` dest **1**. YAML 400 on text-m/xs/xxs kept beside the 700-only component-CSS note. |
| §4 Component Stylings | 옮김 → Components & States | Primary md/sm, Slight, Disabled, Desktop Nav, Notification Badge, Default Toast at `DESIGN.md` 241–408. `.ksUJkh` dest **2** + provenance dest **2** (`E2a`). Toast `opacity 0.2s ease` dest **2**. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | `DESIGN.md` 413–419. `tabletVertical` dest **1**. `mobileLandscape` dest **1**. 50px dest **4**. 1920px dest **3**. 40px dest **5**. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Hairline `box-shadow: 0 1px 0 0` dest **1**. `rgba(0,0,0,0.25)` dest **1**. `rgba(0,0,0,0.5)` dest **3**. `rgba(0,0,0,0.16)` dest **1**. `rgba(0,0,0,0.6)` dest **1**. `rgba(0,0,0,0.7)` dest **1**. Skeleton gradient + 1.5s dest **5**. YAML `"none"` kept on its own key (`DESIGN.md` 136 B2a). |
| §7 Do's | 옮김 → Experience application rules | `DESIGN.md` 52–58, under the grouping qualifier at 52. Not placed in Governance controlled copy. Six items, matching the source Do list. `--foreground-1` / `--background-1` kept. |
| §7 Don'ts | 옮김 → Experience avoid | `DESIGN.md` 63–69, under the qualifier at 63. Five Don’t-list items. No invented domain (`native-app` dest **0** · `mobile app` dest **0** · `back-office` dest **0** · `authenticated` dest **0** · `help-center` dest **0**). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Desktop `>1280px` kept beside §5 `≤1280px` (`DESIGN.md` 428 B2a). `51.375em` dest **2**. `calc(16vw / 360 * 100)` dest **1**. `2-column` dest **2**. `maximum-scale=1` dest **1**. `touch-action: pan-y` dest **1**. `-webkit-tap-highlight-color` dest **1**. |
| §9 Agent Prompt Guide | 삭제 | Tool-facing copy-paste prompts and restatements; no receiving slot and no delegation. Every value §9 names was checked against the portable body before deletion and each was already present or moved (A2, A3). The check is itemised at `provenance.md` §9 deletion check. |
| §10 Voice & Tone | 옮김 → Content & Locales | Three adjectives Fan-fluent dest **1** · warm-direct dest **2** · quietly authoritative dest **2**. Tone table; three illustrative samples byte-for-byte; §14 product copy. Qualifier at `DESIGN.md` 435 and sample-gloss qualifier at 450. |
| §11 Brand Narrative | 옮김 → Experience Scope | `DESIGN.md` 13: October 2014 dest **1** + provenance dest **1** (`E2a`); Kim Beom-jun dest **1**; Yonsei dest **1**; `마지막 화까지 봤다` dest **1** + provenance dest **1** (`E2a`); `I watched all the way to the last episode` dest **1**; `enshrining the complete, satisfying anime experience in the brand itself` DESIGN dest **1** + provenance dest **1** (`E2a`); May 2017 DESIGN dest **1** + provenance dest **1** (`E2a`); Ridi DESIGN dest **2** + provenance dest **1** (`E2a`); `Korea's leading digital content platform` DESIGN dest **1** + provenance dest **1** (`E2a`); `bringing engineering scale and content licensing resources` DESIGN dest **1** + provenance dest **1** (`E2a`); Aniplus DESIGN dest **2** + provenance dest **2** (`E2a`); `Korea’s largest anime broadcaster` DESIGN dest **1** + provenance dest **1** (`E2a`); Keistone Partners dest **1**; `87.75` dest **2** + provenance dest **1** (`E2a`); `deeper ties to broadcast rights` DESIGN dest **1** + provenance dest **1** (`E2a`); `simulcast programming` DESIGN dest **1** + provenance dest **1** (`E2a`); SVOD DESIGN dest **1** + provenance dest **1** (`E2a`); TVOD DESIGN dest **1** + provenance dest **1** (`E2a`); AVOD DESIGN dest **1** + provenance dest **1** (`E2a`); `Laftel Store` DESIGN dest **3**; `original productions` DESIGN dest **2**; `webtoon adaptations` DESIGN dest **1**; `anime merchandise` DESIGN dest **1** + provenance dest **1** (`E2a`); Super Secret dest **2**; `ambitions beyond licensing` DESIGN dest **1** + provenance dest **1** (`E2a`). Dual with `provenance.md` Proof notes (`E2a`). Marked as narrative context that supplies no interface tokens; the classification carries an adjacent complete qualifier in the same paragraph (B2/B2a). |
| §12 Principles — 5 numbered | 옮김 → Experience principles | `DESIGN.md` 42–48 under the B2a form at 42. Source-stated principle names stay; UI implications are the qualified derived layer. `덕후` dest **5**. `staff pick` dest **1**. `Recommended for you` dest **1**. `Popular` dest **1**. Laftel has no published first-party design system, so the toss-form close is used (rulebook v12 B2a 전제 주석). |
| §13 Personas | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. 가상 원형 3인. 원형 라벨 `클래식 덕후` · `분기 팔로워` · `굿즈 덕후`를 **삭제 처분으로** 명명한다 — 게이트 copy-loss가 발행 한국어 문자열의 조용한 소실과 기록된 삭제를 구분하는 근거가 이 행이다. D2a가 금하는 이름·나이·도시·전기 문구는 네 산출물 전부에서 0회다. Audience는 캡처 표면이 세우는 그룹만. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Full source body preserved at `DESIGN.md` 227–237 (A2; the catalog graph is still 0/440, so nothing is delegated), including Empty / Loading spinner / Skeleton / Error — Network / Error — Unlicensed / Success — Subscription / Disabled / Offline. Copy: `어떤 애니를 좋아하세요? 취향 테스트로 시작해요` dest **3** · `잠시 후 다시 시도해 주세요` dest **2** · `이 작품은 현재 지역 서비스 불가` dest **2**. Spinner `32×32` dest **2**. `stroke-dasharray` dest **1**. The applicability rule, Kind:non-interactive on badge and toast, and nav L/E/S closures are at 239. Non-observation is never used as a `not-applicable` reason (C1). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Committing CTAs (primary md/sm, slight retry) keep loading / error / success `applicable` (`loading \| applicable` dest **3**). Desktop nav is destination selection so L/E/S close (`loading \| not-applicable` dest **2** at disabled + nav). Disabled hover is `not-applicable` because the source writes “no hover effect”. Badge and toast declare `Kind: non-interactive` dest **2** with a reason and no map (C4). `default \| applicable` dest **5**. `focus-visible \| applicable` dest **5**. Hover captured treatments (`#6E58FF`, `#D9D3FF`, nav `#816BFF`) are recorded as values, not omitted. |
| §15 Motion & Easing | 옮김 → Foundations motion | `DESIGN.md` 140–171: Micro 200ms / Short 400ms / Medium 1400ms–1500ms. Recorded CSS `transition:color 0.4s` dest **1** · `0.2s ease` dest **8** · spinner 1.4s dest **4** · skeleton 1.5s dest **5**. Named easing `ease` with the source’s CSS expansion `cubic-bezier(0.25, 0.1, 0.25, 1)` dest **1** (this is the CSS `ease` keyword, not the template ease-exit curve). `background-size: 200%` dest **2**. B3 is held: the promotion condition at `DESIGN.md` 171 names all five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text, plus the partial-confirmation exclusion (`E2c`). `transition properties` dest **1**. Reduced-motion dest **2** (omission + gate; not a Named-gap domain). Section-head qualifier at 140. |
| Opening product sentence (legacy title + §1) | 옮김 → Experience Scope | `DESIGN.md` 9: Korea's largest anime streaming platform; dual-mode; vivid purple; fan-curated discovery; legal access to Japan's animation catalog. |

## Sibling handling (`web/references/laftel/.verification.md`)

The sibling exists — confirmed with `find web/references/laftel -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at `provenance.md` Sibling handling and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: PURPLE200 `#C0B5FF` / PURPLE300 `#A797FF` / PURPLE400 `#9481FF` / PURPLE600 `#7963FF` / PURPLE800 `#644EFF` / PURPLE900 `#513CFF`; animation names `ganiTH` / `hpaRNO`; HTML title `라프텔 - 애니 추천 · 애니 스트리밍 · 애니 굿즈`; `og:image`; `html lang="ko"`; Pretendard `@v1.3.6`; fuller stack `Helvetica Neue` / `Segoe UI` / `Apple SD Gothic Neo`; NavBar computed `color:#FFFFFF`; homepage byte counts `67 501`.
- Measured `DESIGN.md` 0 for those sibling-only strings: `#C0B5FF` 0 · `#A797FF` 0 · `ganiTH` 0 · `hpaRNO` 0 · `라프텔 - 애니 추천` 0 · `Helvetica Neue` 0 · `v1.3.6` 0 · `67 501` 0. Each is provenance dest **1**.

## A5 / A5a verification

The gate’s `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. Laftel is Korean-and-English, so `compared < candidates` is expected and the A5a hand sweep is mandatory.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published Korean labels in the source body | 9 distinct | 0 | 0 | 라프텔 / 마지막 화까지 봤다 / 덕후 / 세상 모든 애니를 라프텔에서 :D / 추억의 애니부터 분기별 신작까지, 무제한 스트리밍 가능한 곳은 오직 라프텔. / 뭘 볼지 모를 땐, 덕후가 직접 엄선한 애니 명작들을 시청! / 어떤 애니를 좋아하세요? 취향 테스트로 시작해요 / 잠시 후 다시 시도해 주세요 / 이 작품은 현재 지역 서비스 불가 |
| Published English / YAML `use` | 18 distinct | 0 | 0 | Laftel / Super Secret / staff pick / Recommended for you / Popular / I watched all the way to the last episode / only Laftel / Largest display title / Section title / Sub-section title / Card / block title / Small title / Large body / button label / Default body / Nav link, toast, small label / Metadata / Fine print / Primary CTA (md) / Primary CTA (sm) / Secondary action / Disabled action / Desktop nav — active/hover link purple / Notification count badge / Default toast (#000000 light / #242537 dark) |
| Sibling published strings | 1 sibling-only title | 0 from portable body (kept in provenance as inspect context) | 0 portable-body loss | `라프텔 - 애니 추천 · 애니 스트리밍 · 애니 굿즈` is the inspected HTML title. It is sibling inspect context, not a chrome label in the source body. Mention in provenance Sibling handling is inspect context, not portable-body use. |

Sub-needle labels confirmed present individually in `DESIGN.md`: 라프텔, 마지막 화까지 봤다, 덕후, 세상 모든 애니를 라프텔에서 :D, 어떤 애니를 좋아하세요? 취향 테스트로 시작해요, 잠시 후 다시 시도해 주세요, 이 작품은 현재 지역 서비스 불가, Super Secret, staff pick, October 2014, 87.75.

A5 분모: gate `copy-loss` compared/candidates recorded below; hand sweep of source published labels 9 Korean + 18 English/use extracted / 0 missing.

Persona identifiers were not extracted as needles: they are illustrative biographies, not brand-issued copy, and they are deleted (D2/D2a), not lost copy.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand laftel --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 10, candidates: 186, detail: "인용 문자열 186개 중 10개만 비교했다 — 나머지는 라틴이라 바늘이 되지 않는다. 라틴 전수 대조는 손으로 하라." }]`. Separately, `scripts/design-md-core.cjs` `inspectDesignMd` / `evaluatePortableCore` reports `format: core-v2`, `valid: true`, `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. `scripts/check-limiter-ledger.mjs laftel` → 본문 23 / 원장 23 (165–187) 1:1 OK. All are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 10 < `candidates` 186.

## Deviations recorded

- `DESIGN.md` is above the spec’s 600–1,800-word SHOULD budget (`wc -w` 5608; auditor-close was 5541). The budget yielded to A1: eleven YAML color keys plus the body dual-mode pairs, ten type roles with dual YAML/`use` forms, seven declared component records with dual YAML/body fields, seven-state applicability matrices on five interactive controls, `tokens.spacing` unmerged from `tokens.rounded`, the full §11 founding narrative, the full §14 state list, recorded CSS motion, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- Laftel has no published first-party design system, so every derived-editorial close uses the toss-form example (rulebook v12 B2a 전제 주석). Auditor-close measure: `grep -o 'derived editorial implementation inference' DESIGN.md | wc -l` = **23** = `not Laftel-authored` 23 = `separately published UI specification` 23. Provenance B2a ledger **23** rows (165–187) (E1 1:1). Worker-close portable DESIGN SHA-256 `805ebcc58cda3ec33d93eb99647dd0de1037c9f49d4a951d5803c1cfa85b56a7`. Auditor-close portable DESIGN SHA-256 `47f42e108de3b145af916009dd324eb267adad5c1a6b401613d667a16e2e9acd`. A1 unique-fact restore portable DESIGN SHA-256 `f60be69518c026f7cdacd3b9f7143d8bb70f1d62d8a5fd0326ca3cd18844f8b0`.
- Scope writes “inline stylesheet custom properties” rather than the source footer’s `inline <style>` spelling, because a raw `<style>` substring triggers Core `activeTopLevelMarkdown` to blank the rest of the file (unclosed style-element rule). The homepage HTML custom-property capture is the same fact.

## F1 B2a rescan (mandatory final pass)

Re-read the portable body from H1 through Governance. Every causal, interpretive, or classificatory sentence was asked whether it is a Laftel-issued fact or a derived reading. Scope token-surface boundary, atmosphere characterizations, narrative-as-context, primary-task selection (including not taking tasks from the persona section), audience grouping and biography-drop, trait restatement and grouping, Principles / Do / Don’t headers (rules and reasons), Semantic keep-both (shared hexes, YAML vs body disabled text, Purple 100 / Purple Gray 900 / Red 500 not YAML colors keys, Background 2 unmerged from light toast), spacing/shape key-path separation, elevation YAML-none vs §6 treatments, motion five-kind gate plus CSS `ease` bezier expansion, font evidence class readings, family two-keys and fallback prohibition, type-role non-merge and unitless-ratio keep, favicon-as-pointer, applicability procedure plus Kind:non-interactive on badge and toast, YAML `use` beside Role, YAML disabled foreground vs body text, layout ≤1280px / >1280px keep-both plus breakpoints as source rules, voice characterization, sample-gloss classification, and Named-gaps classification each carry an adjacent complete toss-form qualifier. Source facts (dates, hexes, YAML keys, published strings, recorded geometry, §14 treatments, CSS durations) were left unqualified.

Interpretive sentences checked and left as source facts, not newly qualified: the five principle names and the sentences that attribute them to the source (`DESIGN.md` 44–48); the §14 body at 227–237; the §15 rules at 163–167; the layout bullets at 415–419 and 423–426. No “does not cover native-app” denial was written (D1). Named gaps do not list `authenticated` or an invented product domain. Reduced-motion is omitted in Motion with the five-kind gate; it is not listed as a Named-gap domain.

Complete-form lines (all three fragments on one line): `DESIGN.md` 9, 11, 13, 19, 28, 32, 42, 52, 63, 77, 113, 123, 136, 140, 179, 194, 199, 221, 239, 428, 435, 450, 492. Count **23**.

## F2 E2 check (mandatory final pass)

Each log row above was written only after `grep -oF --` on the destination file named in that row (file-level, never `grep -c`). Dual destinations (homepage host, `#816BFF`, favicon slug, `마지막 화까지 봤다`, October 2014, May 2017, Ridi, Aniplus, `87.75`, SVOD, TVOD, AVOD, App Store URL, JS chunk, `.ksUJkh`, `tokens.shadow.none`, App Store tagline, `enshrining the complete, satisfying anime experience in the brand itself`, `Korea's leading digital content platform`, `bringing engineering scale and content licensing resources`, `Korea’s largest anime broadcaster`, `deeper ties to broadcast rights`, `simulcast programming`, `anime merchandise`, `ambitions beyond licensing`) list both files (`E2a`). Compliance claims are no stronger than the body: “B3 is held” is used only because `DESIGN.md` 171 names all five evidence kinds and the per-component gate in full text (`E2c`). Pretendard DESIGN dest **13** (Font evidence expansion named the live family). `tokens.spacing.xs` dest **3** · `sm` **3** · `md` **2** · `base` **2** · `lg` **2**. `transition:color 0.4s` dest **1**. Omission of §13 names the source section and field kinds only; identifier strings dest **0** in DESIGN and provenance (D2a, E2d).

## 개정 — 의미 검토 FAIL 1 (2026-08-29)

의미 검토가 지목한 A1 고유 사실 소실만 고침. 토큰 값·컴포넌트 표·상태 applicability·구조·원본 미수정. 한정·원장 행 추가 없음 (23=23 유지).

### 결함 1 — §11 고유 명제 복원 (A1)

받을 슬롯: Experience Scope 서사 (`DESIGN.md` 13). provenance Proof notes 색인에도 같은 여덟 구. 원본 §11 `:237`–`:241`이 세운 수식어·효과·스토어 기능이다. 날짜·고유명사·지분·3티어는 이미 그 문단에 있었고, 잘린 것은 그 명제다. 사실 인용이므로 한정 없이 복원.

`grep -oF -e` 실측 (DESIGN / provenance):

| 문자열 | 원본 | DESIGN | provenance |
|---|---:|---:|---:|
| `enshrining the complete, satisfying anime experience in the brand itself` | 1 | 1 | 1 |
| `Korea's leading digital content platform` | 1 | 1 | 1 |
| `bringing engineering scale and content licensing resources` | 1 | 1 | 1 |
| `Korea’s largest anime broadcaster` | 1 | 1 | 1 |
| `deeper ties to broadcast rights` | 1 | 1 | 1 |
| `simulcast programming` | 1 | 1 | 1 |
| `anime merchandise` | 1 | 1 | 1 |
| `ambitions beyond licensing` | 1 | 1 | 1 |
| `Laftel Store` | 2 | 3 | 0 |
| `Super Secret` | 1 | 2 | 0 |
| `original productions` | 1 | 2 | 0 |
| `webtoon adaptations` | 1 | 1 | 0 |

Scope ¶1의 `names the Laftel Store and original productions (including the webtoon adaptation "Super Secret") as brand extensions`는 제품 범위 분류로 유지(keep-both with the original Store sentence in ¶3). `webtoon adaptation` DESIGN dest **2**는 그 단수 표기와 원문 복수 `webtoon adaptations`의 접두 일치.

### 갱신한 dest 행

| 행 | 바늘 | 옛 dest | 새 dest |
|---|---|---|---|
| §11 Brand Narrative | 여덟 고유 구 DESIGN / P | (없음 / 0) | 1 / 1 each |
| §11 Brand Narrative | `Super Secret` DESIGN | 1 | 2 |
| §11 Brand Narrative | `Laftel Store` DESIGN | (표에 없음; 본문 2) | 3 |
| §11 Brand Narrative | `original productions` DESIGN | (표에 없음; 본문 1) | 2 |
| §11 Brand Narrative | `webtoon adaptations` DESIGN | (없음) | 1 |
| Deviations | `wc -w` DESIGN | 5541 | 5608 |
| Identity / Deviations / header | A1 restore SHA | (없음) | `f60be69518c026f7cdacd3b9f7143d8bb70f1d62d8a5fd0326ca3cd18844f8b0` |

`scripts/check-limiter-ledger.mjs laftel` → 본문 23 / 원장 23 (165–187) 1:1 OK. `node test-v2/tools/migrate-reference.mjs --brand laftel --gate-only` → `verdict: PASS`, `problems: []`. Pretendard DESIGN dest **13** · `tokens.spacing.xs` dest **3** · `transition:color 0.4s` dest **1** (불변).
