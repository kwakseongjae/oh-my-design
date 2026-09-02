# kintone migration log

Rulebook: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)

Source: `web/references/kintone/DESIGN.md`
Destination: `docs/design-md-weight/migrated/kintone/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/kintone/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2 wave 38
Portable Core: pass (`scripts/design-md-core.cjs` evaluatePortableCore, `portable_core: true`, placeholders 0). Gate PASS / `problems []`. Worker-close SHA `c603874ce640b05ca12855159c1cd6e562081b7e5f067486bc0b15a794d10ced`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 옮김 → Experience H1 / Scope + 분리 → provenance Identity | Portable file has no frontmatter. Name kept as H1 `kintone Design System` (`DESIGN.md` 1) and body `キントーン` DESIGN dest **2** at 9/719. Homepage `https://kintone.cybozu.co.jp` DESIGN dest **3** at 9/21/180 · P dest **4** at 13/42/51/66. `#ef3f24` DESIGN dest **13** at 9/11/34/59/88/105/253/278/279/507×2/667/683 · P dest **5** at 14/50/79/99/141. Favicon slug DESIGN dest **1** at 220 · P dest **1** at 16. |
| YAML `omd`, `verified`, `added`, `tokens.source`, `tokens.extracted`, `components_harvested` | 분리 → provenance | 출처 원장·freshness. `prose-derived` DESIGN dest **1** at 9 (`The YAML token set is \`prose-derived\``) · P dest **14**. Exact `tokens.source: prose-derived` DESIGN dest **0** / P dest **0** (table form `tokens.source` + `prose-derived` at P 20 is not the colon string). `components_harvested` DESIGN dest **0** · P dest **3** at 22/62/130. Dual for harvested is provenance Identity + Token note + Proof notes, not the portable body. |
| YAML `tokens.colors` (19 keys) | 옮김 → Foundations Semantic color | Each key on its own role row. `primary`/`brand` both `#ef3f24`. `canvas`/`on-primary` both `#ffffff`. `accent-green`/`success` both `#3fa862`. `accent-cerulean`/`info` both `#00afec`. `accent-sunshine`/`warning` both `#ffba00`. `#bbbbbb` / `#e8e8e8` / `#fafafa` stay on §2 prose roles with no invented YAML key. |
| YAML `tokens.typography` | 옮김 → Typography & Assets | Family sans `Meiryo` / mono `SFMono-Regular`; twelve roles with unitless YAML line heights. Token-set `use` strings kept verbatim; longer §4 component uses (`アプリを作る`, `詳しく見る`, `閉じる`, `レコードを削除`) stay beside the YAML use. |
| YAML `tokens.spacing` (xs 4 / sm 8 / md 12 / base 16 / lg 20 / xl 24 / xxl 32 / section 64) | 옮김 → Foundations Spacing | Unitless steps in a table. Not merged with rounded or type sizes. Prose common value `40px` has no YAML key and stays prose. |
| YAML `tokens.rounded` (sm 4 / md 6 / lg 8 / full 9999) | 옮김 → Foundations Shape | `full: 9999` stays unitless. Status-pill `12px` stays on those pills. Toggle `9999px` stays on the toggle record. |
| YAML `tokens.shadow` (subtle / raised / elevated / modal) | 옮김 → Foundations Elevation | Raised `0.12` and elevated `0.18` kept as two keys (same 12px blur). |
| YAML `tokens.components` (17 records) | 옮김 → Components & States | Each record is its own block. `Primitive type` only where YAML has `type`. `card`, four badges, and `toast` omit kind + map where the source supplies no interaction evidence (C4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Product/surface range, KIN Red, four named hues, Meiryo stack, app-tile motif. Atmosphere readings carry adjacent B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | All named roles, Pantone 485, semantic/neutral/surface writings, overlay scrim. |
| §2 footer Verified / Tier 1 / Tier 2 / Notes | 분리 → provenance Freshness / Surfaces / Proof + 옮김 → Semantic color Brand Guidelines sentence | Dual: ledger and the portable Brand Guidelines / derived-geometry writing. |
| §3 Typography Rules | 옮김 → Typography & Assets | Three stacks, hierarchy, Japanese-first conventions, two-weight / bold-label rhythm. |
| §4 Component Stylings | 옮김 → Components & States | Seventeen YAML anatomies plus §4-only Textarea, Select, Flat Section, Data Table, Warning pill, Success Banner, Checkbox (`not in the token set`). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Shape | ~1080px, fluid product header, 4–6 / 2 tile grid, 4px base unit, prose radius scale. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Five levels. Raised and elevated not collapsed. Flat scrim, opaque header. |
| §7 Do's | 옮김 → Experience Application rules | Brand rules. Not put into Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | Brand prohibitions. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | <600 / 600–960 / 960–1280 / >1280, touch targets, collapsing, image behavior, 40px → 28px hero. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique geometry (app name 14px/700 `#333333`) landed on App Tile (A3). Color/radius/label rules already in Experience/Foundations/Components. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Register, context table, forbidden phrases, published labels kept byte-exact. |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶3 | 1997 DESIGN dest **2** at 13×2 · P dest **3** at 121/133/156. 2011 DESIGN dest **2** at 13×2 · P dest **3** at 121/133/156. サイボウズ株式会社 DESIGN dest **2** at 13/719 · P dest **1** at 121. チームワークあふれる社会を創る DESIGN dest **2** at 13/719 · P dest **2** at 121/133. Excel-and-SIer insight, US and Southeast Asia, refusal pair, and the closing embrace sentence. Dual: `DESIGN.md` Scope and provenance Claim ledger / Proof notes. |
| §12 Principles | 옮김 → Experience Principles | Eight principles, with B2a on the section head. |
| §13 Personas | 삭제 | 페르소나 4인(이름·나이·도시·동기·소속 분류 포함). 승격 없음, sidecar 재수록 없음 (D2, D2a). Audience keeps only groups the source names outside that section: a non-engineer; a sales team, a city government office, or a manufacturing floor; every team — not just engineers; local governments, manufacturers, retailers, and small businesses. §13-header-only segment labels are not restated. |
| §14 States | 옮김 → Components & States Capture record + per-component applicability | 본문 보존: empty / loading / error / success / skeleton / disabled / permission-restricted 표. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Durations 0/150/250/350ms, four signature motions, reduced-motion. Three unsourced curves deleted at the curve-value boundary (provenance Omission ledger). B3 전문 `DESIGN.md` 167. |

## A5a hand sweep

Source quoted non-Latin runs and published labels were extracted by hand from `web/references/kintone/DESIGN.md` and sibling `.verification.md`. Issued-copy needles (labels, CTAs, slogans, microcopy, names) were checked against the three output files. UI-meta, token paths, and font stacks were not needles. Sibling inspect has no issued-copy needles (hex/px/family measurements only).

- Extracted issued-copy needles: 28
- Missing from the three outputs: 0
- Dispositioned in this log: §13 biographies (no issued-copy needle among them). latin-copy-audit `everyone can create` (lowercase) is that section's quote only; the published gloss `"Everyone can create"` dest **3** at 11/46/705.
- Gate `compared` 26 / `candidates` 248 (non-Latin needles only; Latin remainder is this hand sweep)
- latin-copy-audit lost issued copy: 0 (8 medium hits are YAML compact token strings and the §13-only lowercase gloss)

Surviving issued copy includes: キントーン, サイボウズ株式会社, チームワークあふれる社会を創る, みんな、つくれる, 無料ではじめる, 保存, アプリを作る, 詳しく見る, キャンセル, 閉じる, 削除する, レコードを削除, 保存しました, 更新しました, 試してみる, つくる, はじめる, 通知をオン, レコードを追加, 条件に一致するレコードがありません, 必須項目です, 〜を入力してください, エラーが発生しました, 革命的, 操作が正しくありません, です・ます, メイリオ, ヒラギノ角ゴ ProN W3.

## Key-path check (A1)

YAML `tokens.*` paths confirmed in `DESIGN.md` by string search, not by shared numerals:

- colors 19 keys → Semantic color role rows (`primary`/`brand`, `canvas`/`on-primary`, `accent-green`/`success`, `accent-cerulean`/`info`, `accent-sunshine`/`warning` each named as two keys)
- typography 12 roles + sans/mono → Type roles / Family
- spacing xs/sm/md/base/lg/xl/xxl/section → Spacing table
- rounded sm/md/lg/full: 9999 → Shape table (`9999` at Shape and toggle; pill `12px` only on badges)
- shadow subtle/raised/elevated/modal → Elevation table
- components 17 × type/bg/fg/radius/padding/font/use (and recorded hover/active/disabled/focus/shadow) → matching blocks

`tokens.spacing.xs: 4` ≠ `tokens.rounded.sm: 4`. `tokens.spacing.sm: 8` ≠ `tokens.rounded.lg: 8` ≠ table cell `8px`. `tokens.spacing.md: 12` ≠ pill `12px` ≠ Caption 12. `tokens.spacing.base: 16` ≠ card-tile padding `16px` ≠ type 16. `tokens.spacing.lg: 20` ≠ Standard Card padding `20px` ≠ Heading 2 `20`. `tokens.spacing.xl: 24` ≠ dialog padding `24px`. `tokens.spacing.xxl: 32` ≠ Display Large `32`. `tokens.rounded.full: 9999` ≠ status-pill `12px`. Raised `0.12` ≠ elevated `0.18`.

## C2 / A1b

`Primitive type: button` 5 = YAML `type: button` 5. `input` 2=2. `card` 2=2. `badge` 4=4. `tab` 1=1. `toast` 1=1. `dialog` 1=1. `toggle` 1=1. `not in the token set` dest **7** (Textarea, Select, Flat Section, Data Table, Warning pill, Success Banner, Checkbox).

Primary / Danger / Dialog L/E/S open (in-place commit). `loading | applicable` DESIGN dest **3** at 269/364/556. Outline / Neutral / Text / Text Field loading·success / Error-input loading·success / App Tile / Tab / Toggle / Textarea loading·success / Select loading·success / Checkbox L/E/S closed on role. Standard Card / four badges / Toast / Flat Section / Data Table / Warning pill / Success Banner: kind + map omitted (C4) except Flat/Data/Warning/Success which are `not in the token set`.

## D1 / D2a

`native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `does not say` dest 0 in `DESIGN.md`. Source wording `on mobile` in the launcher-grid and breakpoint rows is kept. Audience has no persona name, motivation, or affiliation classification. Provenance Omission ledger is unidentified (4인; 이름·나이·도시·동기·소속 분류).

## Gate / inspect

`node test-v2/tools/migrate-reference.mjs --brand kintone --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 26, candidates: 248, detail: "인용 문자열 248개 중 26개만 비교했다 — 나머지는 라틴이라 바늘이 되지 않는다. 라틴 전수 대조는 손으로 하라." }]`. First run blocked on `outputs: migration-log.md missing`. Second run blocked on `token-invention: hex:#231200` — sibling-only hex had been named in Font evidence and Named gaps; moved to provenance Sibling handling only (B1). Separately, `scripts/design-md-core.cjs` `inspectDesignMd` reports `format: core-v2`, `valid: true`, `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 26 < `candidates` 248.

B2a `derived editorial implementation inference` dest **41** = provenance inventory **41** data rows. Worker-close SHA `c603874ce640b05ca12855159c1cd6e562081b7e5f067486bc0b15a794d10ced`. Auditor SHA `be741e05efc0d908122fa13d1814e400aeec0cbc38de21931fad9f8e35967557`.
