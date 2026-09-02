# OPENPOINT migration log

Rulebook: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)

Source: `web/references/openpoint/DESIGN.md`
Sibling read (not the migration input): `web/references/openpoint/.verification.md`
Destination: `docs/design-md-weight/migrated/openpoint/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/openpoint/provenance.md`
Date: 2026-09-02
Worker: grok-4.6 T2
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use `grep -oF` per file, never a remembered count.

Source SHA-256 `ab86af73ea838996c4cffdcd76d1b22138cf700dc6bf118c1e9819c39e9bbf4a` (`web/references/openpoint/DESIGN.md`). Sibling SHA-256 `0a436d0d9dbd59ba70246fc55bba01609c28237a1c92c0162dab7322d6588495` (`web/references/openpoint/.verification.md`). Worker-close portable DESIGN SHA-256 `07844cdf75fc8314961319e90fa69e3416214612924d54bd59d94b10cb5bbedc`. Auditor-close portable DESIGN SHA-256 `1e11d69e078801f316f6abccc007bfc721731aa0a3627f833f3d359a2f6c90dd` (B2a qualifications appended on existing lines; `wc -l` 625 unchanged). Wave 45 Role-split portable DESIGN SHA-256 `a29b489f5d70fb5d08944b5da5ed5472feae8620a920f6211b4ce8cadcf974a1` (`wc -l` 625 unchanged; Event Card / Default Input Role restored to source §4 Use). Wave 45 A1 sibling-demote portable DESIGN SHA-256 `efbed5a7eb722a2667b7143668ab25620ba513d66bfe5b58dfb7078a28d7a816` (`wc -l` 625 unchanged; Dropdown Sub-Item drops sibling computed fill; restores source §9 `#8081ff background`). Gate: `PASS` / `problems []` (`node test-v2/tools/migrate-reference.mjs --brand openpoint --gate-only`). Portable Core: `portable_core: true`, placeholders 0 (`scripts/design-md-core.cjs` evaluatePortableCore).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 옮김 → Experience H1 / Scope + Assets; 분리 → provenance Identity | Portable file has no frontmatter. H1 `OPENPOINT Design System` (`DESIGN.md` 1). Homepage `https://www.openpoint.com.tw` DESIGN dest **4** · P dest **10** (Scope, Primary tasks, Identity, Surfaces — E2a). `#8081ff` DESIGN dest **23** · P dest **12**. Favicon slug DESIGN dest **1** at 224 · P dest **1** at 16 (E2a). Exact `logo.type: favicon` DESIGN 224 · P dest **1** at 26 (Logo decision). Table split `logo.type` / `favicon` is P 15. |
| YAML `omd: "0.1"`, `verified`, `added`, `tokens.source: live-extract`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 17–22, 32–35. `live-extract` DESIGN dest **2** at 9×2 · P dest **3** at 20/160/200 (dual: Scope names the YAML class; exact table key is provenance 20; inventory mention 160; Proof 200). `components_harvested` DESIGN dest **0** · P dest **2** at 22/199. Ledger keys with no portable slot stay in provenance. |
| YAML `tokens.note` | 옮김 → Experience Scope + Foundations; 분리 → provenance | Full note transcribed at `provenance.md` Token note. Facts it names (`#8081ff` CTAs/links/borders; `#0abbb5` dates; `#cf7ffa` premium gradient; `#e60012` cookie/alert; `#ffffff` canvas; `#f3f3f3` card text) land in `DESIGN.md` Semantic color. Dual (E2a). |
| YAML `tokens.colors` (14 keys) | 옮김 → Foundations Semantic color | `DESIGN.md` 83–108. Each key on its own role row with token-set path: primary `#8081ff`, teal `#0abbb5`, lavender `#cf7ffa`, lavender-mid `#a77bca`, muted-purple `#9696ad`, dark-navy `#48484e`, error-red `#e60012`, canvas `#ffffff`, surface `#f3f3f3`, surface-light `#eeeef5`, surface-lavender `#f5f2ff`, on-primary `#ffffff`, ink `#000000`, placeholder `#cccccc`. Canvas and on-primary stay two `#ffffff` keys (`DESIGN.md` 99–100, 108). |
| YAML `tokens.typography.family.display` / `family.body` | 옮김 → Typography & Assets Family | Family `DESIGN.md` 193–194. YAML short `Noto Sans TC` beside the complete interactive stack; body `微軟正黑體, 新細明體, 蘋果儷黑體, Arial, Helvetica`. |
| YAML `tokens.typography.h1 / h2 / h3 / body / label / small` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 204–209. Unitless line heights stay ratios (A1a): `1.5` on h1/h2/h3/body; `1` on label. `small` has no YAML `lineHeight` (`DESIGN.md` 209, 622). All six YAML `use` strings restored verbatim. §3 Notes (Hero section headings / Event category titles / Fine print, legal) kept beside them. H1 `1.8em` / H2 `1.4em` / H3 `1.2em` kept. H2 white on bg-image title-bar kept on the H2 row, not as a general H2 color. |
| YAML `tokens.spacing` (xs 8 / sm 16 / md 24 / base 16 / lg 40 / xl 48 / section 64) | 옮김 → Foundations Spacing | Unitless table `DESIGN.md` 114–122. `sm: 16` is not `base: 16`. `xs: 8` is not radius 8. Carousel `0px 150px` is local geometry. |
| YAML `tokens.rounded` (sm 0 / md 8 / lg 50 / full 9999) | 옮김 → Foundations Shape | `DESIGN.md` 131–137. `full: 9999` stays unitless (`DESIGN.md` dest **4** at 135 / 137×2 / 508 — Shape table, Shape prose, Layout restatement; E2a). Prose `50px+` stays beside YAML `lg: 50`. |
| YAML `tokens.shadow.card` / `card-hover` | 옮김 → Foundations Elevation | `DESIGN.md` 148. YAML `rgba(0, 0, 0, 0.16) 2px 2px 5px 0px` and `rgba(0, 0, 0, 0.2) 4px 4px 8px 0px` kept beside table short forms and hover `0.20`. |
| YAML `tokens.components` (9 records) | 옮김 → Components & States | Nine blocks. `Primitive type` only where YAML has `type` (A1b): `button` ×2 (`DESIGN.md` 241/265 = YAML button-primary + button-cta), `card` ×2, `badge` ×2, `tab` ×1, `listItem` ×1, `input` ×1. All nine YAML `use` strings restored as `Token-set use`. Event Card / Default Input Role dest **1** at 307 / 351 is the source §4 Use, not a fusion with YAML `use`. Token-set paths `tokens.components.*` on those nine. Gradient Button / Member Form Surface / Muted Badge / Mobile nav (m-btn) are §4/§8-only and labelled `not in the token set` (`DESIGN.md` dest **6** at 232×2 / 289 / 344 / 400 / 453). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 32–41. Atmosphere readings carry adjacent complete B2a at 11. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | `DESIGN.md` 83–108. Quarantined-red / teal-counterpoint readings at 108. |
| §2/§4 footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness / Surfaces; URL 옮김 → Experience Scope | Freshness `provenance.md` 32–35; **Verified:** producer string 37; Conflicts unresolved: none — `provenance.md` 39. Tier 1 heading 48, URLs 50–51; Tier 2 heading 53, rows 55–56. Homepage and style.css are dual (E2a). |
| §3 Typography Rules | 옮김 → Typography & Assets | Evidence 181–189; family 193–196; roles 204–209; principles 211–218; type-role-not-spacing restatement B2a at 220; photography-not-decoration B2a at 225. |
| §4 Component Stylings | 옮김 → Components & States | Anatomy + YAML `use` / font / radius / height. 38px / 33px / 247px / 48% height kept on the matching controls. Event Card Role = source §4 Use `Promotion/event listing cards; image fills 48% height, text area below` DESIGN dest **1** at 307; YAML `use` stays Token-set use at 315 (`Promotion/event listing card` DESIGN dest **2** at 307/315 because Role `cards` contains that substring). Default Input Role = source §4 Use `Member center login/register forms` DESIGN dest **1** at 351; YAML `use` stays Token-set use `Member center form fields` DESIGN dest **1** at 359. Role and Token-set use stay two writings (A1 items 9·11). Event See-More geometry keep-apart B2a at 274; Dropdown unmerge B2a at 438 (source §9 `#8081ff background` DESIGN dest **1** at 438 · P dest **1** at 186; YAML omits `bg`; sibling dropdown `background-color: rgba(0, 0, 0, 0)` DESIGN dest **0**). Observed Focus on the input stays generic Focus, not a `focus-visible` row (B1). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Shape | `DESIGN.md` 489–504. Max-width 1200px, slick-slider, 0.3 opacity, 3-column ≥1200px, footer 147px, header 100px, `padding: 0px 150px`. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | `DESIGN.md` 139–148. Four levels; loading overlay `rgba(0,0,0,0.9)`; magazine-like / warm-neutral readings under B2a at 148. |
| §7 Do's | 옮김 → Experience Application rules | `DESIGN.md` 55–62. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | `DESIGN.md` 67–75. Source prohibitions only. No invented domain. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `DESIGN.md` 512–529: Mobile `<1199.98px` / Desktop `≥1200px`; touch 38px / 33px / 247px; m-btn collapsing. System-level-not-cross-viewport reading at 512. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique §9 values moved first (A3): event-card title 2-line ellipsis (`DESIGN.md` dest **1**); dropdown 4px gap (`DESIGN.md` dest **1**); `#8081ff background` (`DESIGN.md` dest **1** at 438 · P dest **1** at 186); gradient-badge weight 700 and 「OPENPOINT優惠」 labels. Color/radius/card rules already in Experience/Foundations/Components. 슬롯 없는 위임 없음. Check itemised at `provenance.md` §9 deletion check. |
| §10 Voice & Tone | 옮김 → Content & Locales | Voice samples `DESIGN.md` 546–548; issued-copy list 552–580 under B2a at 550; 「OPENPOINT點數說明」 582; tone table 536–542; forbidden register 584. Byte-exact / gloss-beside at 586 (A5). |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶3 | `DESIGN.md` 13: President Chain Store Corporation / 統一超商股份有限公司, over 6,800 7-ELEVEN locations (`DESIGN.md` dest **2** at 13×2 · P dest **1** at 202), icash and icash Pay, Japan's Ponta / the Philippines' CLiQQ / Thailand's ALL member, OPEN! mascot, orange-and-green physical identity, purple digital surface, and the closing dense-hierarchy / promotions-first sentence as one unit. Dual: `DESIGN.md` Scope and provenance Proof notes. Classifying that narrative as context carries adjacent complete B2a in the same paragraph. |
| §12 Principles | 옮김 → Experience Principles | `DESIGN.md` 45–51 under the B2a form at 45: "These five items are a derived editorial implementation inference from the verified surfaces; they are not OPENPOINT-authored or a separately published UI specification." No separately published OPENPOINT UI specification is named, so the close uses the toss-form (rulebook v12 B2a 전제 주석). Portable derived-editorial inventory: `provenance.md` 160–194, **35** data rows matching **35** complete body qualifications (worker-close 29; auditor 152/220/225/274/438/550). |
| §13 Personas | 삭제 | 페르소나 3인(이름·나이·도시·동기·소속 분류 포함). 승격 없음, sidecar 재수록 없음 (D2, D2a). Audience keeps only the source-named group from §11: Taiwan's mobile-first consumer who shops at 7-ELEVEN multiple times per week (`DESIGN.md` 28). Primary tasks come from labels and surfaces (`DESIGN.md` 19–23). |
| §14 States | 옮김 → Components & States State record + per-component applicability | Ten-row body at `DESIGN.md` 473–482 (A2; catalog graph still 0/440). Applicability rule at 228–236. Non-observation is never a `not-applicable` reason (C1). Read-only `#ebebе4` / `rgb(235,235,228)` kept with the source's Cyrillic-е spelling. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Interactive controls declare the seven canonical states. Destination nav/CTA/link roles close loading/error/success with a role reason (C2). Event Card loading stays applicable (section-data image placeholder). Date Badge / Gradient Accent Badge / Muted Badge declare `Kind: non-interactive`. Event Text Area and Member Form Surface omit kind + map (C4). `loading \| applicable` is not used as a blanket on destination buttons. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Durations 150/250/300/2000ms (`DESIGN.md` 156–159), duration-not-curve B2a at 152, `ease-out`, source-recorded `cubic-bezier(0.23, 1, 0.32, 1)` (`DESIGN.md` dest **1** at 166 · P dest **1** at 152), implicit loading fade, scale(1.2), reduced-motion. Template `ease-enter` / `ease-exit` / `ease-standard` / `ease-spring` curves are not in this source. B3 전문 is in the portable body: `DESIGN.md` 173 names transition properties, animation name, duration, easing, reduced-motion behavior, and the per-component gate; restated at 625 (E2c). |
| HTML comment philosophy layer | 분리 → provenance Proof / Capture selectors; 서사 한정 옮김 → Scope ¶3 | Header 100px and footer copyright land in Layout / Content because they are in the source file. Personas comment is disposition, not a rehost of names. |
| Sibling `.verification.md` | 분리 → provenance Sibling handling; 발행 라벨 1건 옮김 → Content | 「OPENPOINT點數說明」 DESIGN dest **1** · P dest **2**. `index.css` URL and H1 computed `line-height: 60px` stay sibling writings in provenance; YAML h1 `lineHeight: 1.5` is not replaced. Nav dropdown computed `background-color: rgba(0, 0, 0, 0)` DESIGN dest **0** · P dest **2** at 74/78. `rgba(0, 0, 0, 0)` DESIGN dest **0** · P dest **2**. `transparent` DESIGN dest **0** · P dest **1** at 74 (body page bg only). `live transparent background` DESIGN dest **0** · P dest **0**. |

## A5a hand sweep

Source quoted non-Latin runs and published labels were extracted by hand from `web/references/openpoint/DESIGN.md` and from sibling `web/references/openpoint/.verification.md` (A5a: sibling-named issued copy counts). Issued-copy needles (labels, CTAs, slogans, microcopy, names) were checked against the three output files. UI-meta, token paths, and font stacks were not needles. Fictional-archetype biographies were not needles.

- Extracted issued-copy needles: 34
- Missing from the three outputs: 0
- Dispositioned in this log: §13 biographies (no issued-copy needle among them)
- Gate `copy-loss` compared 20 / candidates 184 (non-Latin needles only; Latin remainder is this hand sweep)
- latin-copy-audit lost issued copy: 0

Surviving issued copy includes: OPENPOINT, 統一超商紅利點數平台, 統一超商紅利點數, 統一超商股份有限公司, President Chain Store, President Chain Store Corporation, 7-ELEVEN, OPENPOINT優惠活動, OPENPOINT推薦, 累積點數, 兌換點數, 查看更多優惠, 優惠活動, 點數交換, 旅遊集點護照, 登入, OPENPOINT為統一超商股份有限公司發行之紅利點數業務, 活動時間：2026/01/01–06/30, OPENPOINT優惠, OPENPOINT點數說明, icash, icash Pay, Ponta, CLiQQ, ALL member, OPEN!, 繁體中文, 微軟正黑體, 新細明體, 蘋果儷黑體, Noto Sans TC, See more promotions, Login, © 2026 UNI-President Chain Store Corporation. All rights reserved.

## Key-path check (A1)

YAML `tokens.*` paths confirmed in `DESIGN.md` by string search, not by shared numerals:

- colors 14 keys → Semantic color role rows (`tokens.colors.primary` dest **4** at 9×2 / 83 / 87)
- typography 6 roles + display/body family → Type roles / Family
- spacing xs/sm/md/base/lg/xl/section → Spacing table
- rounded sm/md/lg/full: 9999 → Shape table + Layout restatement (`9999` dest **4** at 135 / 137×2 / 508; not rewritten as `9999px`)
- shadow card/card-hover → Elevation
- components 9 × type/bg/fg/radius/padding/font/use (and recorded states) → matching blocks

`tokens.spacing.sm: 16` ≠ `tokens.spacing.base: 16` ≠ type-role 16 ≠ event-card padding 16px. `tokens.spacing.xs: 8` ≠ `tokens.rounded.md: 8`. `tokens.spacing.md: 24` ≠ event-btn `8px 24px`. `tokens.rounded.lg: 50` ≠ a spacing step. `tokens.rounded.full: 9999` is not a component radius.

## C2 / A1b

`Primitive type: button` 2 = YAML `type: button` 2. `card` 2=2. `badge` 2=2. `tab` 1=1. `listItem` 1=1. `input` 1=1. `not in the token set` dest **6** at 232×2 / 289 / 344 / 400 / 453.

Destination nav/CTA/link roles close L/E/S on role. Event Card `loading | applicable` for the source section-data image placeholder. Date/gradient/muted badges: non-interactive. Event Text Area / Member Form Surface: kind + map omitted (C4).

## D1 / D2a

`native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `does not say` dest **0** in `DESIGN.md`. Audience has no persona name, motivation, or affiliation classification. Provenance Omission ledger is unidentified (3인; 이름·나이·도시·동기·소속 분류). `uniopen` / `PRIMA` dest **0**.

## Unique-phrase contrast (wave 43)

Extracted 92 source-unique expressions from §1–§15 and the HTML comment (years and proper nouns, §11 causal/closing sentences, value qualifiers such as `(30, bg)`-class attachments and `intentionally +1px`-class modifiers, §7/§15 constraint sentences). `grep -oF` against `DESIGN.md`: dest 0 after the first write = 0 among those 92 (YAML syntax `type: listItem` is carried as `Primitive type: \`listItem\``; persona-only strings were D2 deletions, not dest-0 restorations). Restored 0 in that pass. Wave 45 independent review restored 2 source §4 Use strings as Role: Event Card DESIGN dest **1** at 307; Default Input DESIGN dest **1** at 351. YAML Token-set use dest unchanged. Wave 45 A1 sibling review restored source §9 `#8081ff background` DESIGN dest **1** at 438; sibling dropdown `background-color: rgba(0, 0, 0, 0)` / `live transparent background` DESIGN dest **0**.

## Pass 1 / Pass 2

Pass 1 (B2a): full-file reread. Worker-close 29 complete qualifications / 29 inventory rows. Auditor 35 complete qualifications in the portable body (lines 9, 11, 13, 19, 28, 32, 45, 55, 67, 83, 108, 124, 137, 148, 152, 171, 181, 196, 200, 218, 220, 224, 225, 236, 250, 274, 438, 484, 489, 512, 534, 550, 584, 586, 620); inventory table 35 data rows at `provenance.md` 160–194 (1:1). Pass 2 (E2): each log row grepped after the audit with `grep -o` per file; dual destinations listed; B3 claimed only because `DESIGN.md` 173 names the five kinds plus the per-component gate and the partial-confirmation refusal, restated at 625.

개정 (의미 검토 FAIL 1): Dropdown Sub-Item `:438` drops sibling-only `background-color: rgba(0, 0, 0, 0)` / `live transparent background`. Source pair stays §9 dark overlay + Items as `<a>` with `#8081ff background` beside YAML `bg` omission. Sibling transcription remains `provenance.md` 74/78, marked not promoted. Dest rows above recounted with `grep -oF -e`.
