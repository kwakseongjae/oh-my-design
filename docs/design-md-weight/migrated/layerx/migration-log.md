# LayerX migration log

Rulebook: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)

Source: `web/references/layerx/DESIGN.md`
Destination: `docs/design-md-weight/migrated/layerx/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/layerx/provenance.md`
Date: 2026-08-29
Worker: grok-4.6 T2
Portable Core: pass (`scripts/design-md-core.cjs` evaluatePortableCore / inspectDesignMd). Gate result recorded below after `--gate-only`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 옮김 → Experience H1 / Scope + 분리 → provenance Identity | Portable file has no frontmatter. Name kept as H1 `LayerX Design System` (`DESIGN.md` 1) and body `LayerX` / `バクラク`. Homepage `https://layerx.co.jp` DESIGN dest **5** at 9/11/23/122/217 · P dest **5** at 13/42/48/65/119. Identity `#534DFF` DESIGN dest **24** at 11/13/15/36/49/61/86x2/88/93/123/265/274/281/283/289/316/317/396/487/513/576/577/679 · P dest **10**. YAML `tokens.colors.primary` `#534dff` DESIGN dest **0** · P dest **4** at 24/65/69/91 (same hex as identity after case fold; both spellings survive in the three files). Favicon slug DESIGN dest **1** at 257 · P dest **1** at 16. |
| YAML `omd`, `verified`, `added`, `tokens.source`, `tokens.extracted`, `components_harvested` | 분리 → provenance | 출처 원장·freshness. `prose-derived` DESIGN dest **0** · P dest **16** at 20/59/61x2/92/93/97/98/99/100/101/102/105/106/107/108. Meaning of that YAML key is restated in Scope (`The YAML token set is drawn from that prose`, `DESIGN.md` 11) without the field name (E1). `components_harvested` DESIGN dest **0** · P dest **3** at 22/59/120. Dual for harvested is provenance Identity + Token note + Proof notes, not the portable body. |
| YAML `tokens.colors` (20 keys) | 옮김 → Foundations Semantic color | Each key on its own role row. `canvas` / `on-primary` both `#ffffff`. Identity `#534DFF` and YAML `#534dff` kept as two spellings. `#3530CC` / `#C9C7F5` / `#CC3B40` / `#E6F6EF` / `#FEF3E2` / `#C77F12` / `#FCE9EA` stay on §4 prose roles with no invented YAML key. |
| YAML `tokens.typography` | 옮김 → Typography & Assets | Family sans `Inter` / mono `SF Mono`; eleven roles with unitless YAML line heights (`1.25` … `1.50`). Token-set `use` strings kept verbatim; longer §4 component uses (`お問い合わせ`, `もっと見る`, `削除`) stay beside the YAML use. Amount has no YAML `lineHeight`; prose `tight` stays. |
| YAML `tokens.spacing` (xs 4 / sm 8 / md 12 / base 16 / lg 24 / xl 32 / xxl 48 / section 96) | 옮김 → Foundations Spacing | Unitless steps in a table. Not merged with rounded or type sizes. Prose common value `64px` has no YAML key and stays prose (`DESIGN.md` 144 · P 74/156). |
| YAML `tokens.rounded` (sm 6 / md 8 / lg 16 / full 9999) | 옮김 → Foundations Shape | `full: 9999` stays unitless. Toggle `9999px` stays on the toggle record. Standard-card `12px` and `lg` button `10px` stay on those components. |
| YAML `tokens.shadow` (subtle / standard / elevated / modal) | 옮김 → Foundations Elevation | Standard `0.10` and toast `0.16` kept as two writings (same 16px blur). Drawer `-8px 0 24px` stays on the drawer. |
| YAML `tokens.components` (18 records) | 옮김 → Components & States | Each record is its own block. `Primitive type` only where YAML has `type`. `card` ×3, five badges, and `toast` omit kind + map where the source supplies no interaction evidence (C4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Product/surface range, indigo, white canvas, navy ink, sky blue, bilingual stack. Atmosphere readings carry adjacent B2a (`DESIGN.md` 13). |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | All named roles, grey scale, overlay scrim `rgba(21, 38, 50, 0.55)` (`DESIGN.md` 111). |
| §2 footer Verified / Tier 1 / Notes | 분리 → provenance Freshness / Surfaces / Proof + 옮김 → Semantic color aggregator / reasoned-geometry sentence | Dual for the live URL and getComputedStyle method: ledger Surfaces / Proof / Sibling handling (`getComputedStyle` P dest **3** at 48/65/119) and the portable evidence-domain writing. `Tier 1` process-leak label DESIGN dest **0** · P dest **0** (mention in this log only; not a portable or ledger heading). |
| §3 Typography Rules | 옮김 → Typography & Assets | Four stacks, hierarchy with YAML ratios + §3 px spellings, Japanese-first conventions. |
| §4 Component Stylings | 옮김 → Components & States | Eighteen YAML anatomies plus §4-only Text Field (error), Textarea, Soft/Warning badge, Soft/Danger badge (`not in the token set`). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations Spacing/Shape | 1200px, 12-column, 24px gutters, 8px base unit, prose radius scale, 96px / 64px section rhythm. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Five levels. Toast 0.16 and drawer offset not collapsed into YAML keys. Sticky `blur(8px)`. |
| §7 Do's | 옮김 → Experience Application rules | Brand rules. Not put into Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | Brand prohibitions. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | <768 / 768–1024 / >1024 / >1440, touch targets, collapsing, image behavior. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique geometry (feature-card 22px/700 `#152632` + 15px/400 `#4A5360` / 1.73; soft-success `#E6F6EF`; hero 96px) already in Foundations/Components/Typography (A3). 슬롯 없는 위임 없음. Provenance §9 deletion check names the portable landing for each item. |
| §10 Voice & Tone | 옮김 → Content & Locales | Register, context table, forbidden phrases, published labels kept byte-exact (`DESIGN.md` 720–734). |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶1 / ¶4 | 2018 DESIGN dest **2** at 9/15 · P dest **3** at 111/123/146. すべての経済活動を、デジタル化する DESIGN dest **2** at 9/734 · P dest **2** at 110/123. 未来の希望を、実装しよう DESIGN dest **3** at 9/729/734 · P dest **2** at 110/123. `engineer-led, mission-forward identity` DESIGN dest **1** at 9 · P dest **1** at 123. Bakuraku suite, finance-and-accounting audience, refusal pair, HTML-comment editorial. Dual: `DESIGN.md` Scope and provenance Claim ledger / Proof notes. |
| §12 Principles | 옮김 → Experience Principles | Eight principles, with B2a on the section head (`DESIGN.md` 46). |
| §13 Personas | 삭제 | 페르소나 3인(이름·나이·도시·소속 분류 포함). 승격 없음, sidecar 재수록 없음 (D2, D2a). Audience keeps only groups the source names outside that section: finance and accounting teams; businesses that use LayerX as infrastructure; global recruiting and investor surfaces. §13-header-only segment labels are not restated. |
| §14 States | 옮김 → Components & States Capture record + per-component applicability | 본문 보존: empty / loading / error / success / disabled / Focus 표 (`DESIGN.md` 269–281). 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Durations 0/150/240/360/320ms, four easing-role Use writings, four signature motions with recorded duration/easing-role pairs, reduced-motion. Four unsourced curves deleted at the curve-value boundary. `ease-enter` DESIGN dest **4** at 185 (omission sentence with curve values) / 189 (Use row) / 197 (Drawer slide pair) / 770 (Named gaps role names) · P dest **1** at 84. Curve-value strings `cubic-bezier(0.0, 0.0, 0.2, 1)` DESIGN dest **1** at 185 · P dest **1** at 84. Use: `Appearing — modals, drawers, toasts, dropdowns` DESIGN dest **1** at 189; `Leaving — dismissals, pops` DESIGN dest **1** at 190; `Two-way — hover-lift, tab content, collapsibles` DESIGN dest **1** at 191; `Hero reveals on scroll, featured-card entrances` DESIGN dest **1** at 192. Signature pairs `motion-standard / ease-standard` DESIGN dest **1** at 196; `motion-slow / ease-enter` DESIGN dest **1** at 197; `motion-fast / ease-exit` DESIGN dest **1** at 197; `motion-slow / ease-emphasis` DESIGN dest **1** at 198. B3 전문 `DESIGN.md` 204 (transition properties · animation name · duration · easing · reduced-motion behavior, per component). |
| HTML comment (sources, reasoned defaults, fictional personas, editorial indigo) | 분리 → provenance Proof / Omission + 옮김 → Scope ¶4 editorial sentence | Standalone authority limit stays in the portable body (`DESIGN.md` 15). |

## A5a hand sweep

Source quoted non-Latin runs and published labels were extracted by hand from `web/references/layerx/DESIGN.md`. Sibling `web/references/layerx/.verification.md` is present (dotfile; `find` on that exact path). Issued-copy needles (labels, CTAs, slogans, microcopy, names) were checked against the three output files. Sibling adds no issued-copy needles — it is live-computed hex/px plus a family name; UI-meta, token paths, and font stacks were not needles.

- Extracted issued-copy needles (quoted non-Latin runs ≥4): 24
- Missing from the three outputs: 0
- Dispositioned in this log: §13 biographies (no issued-copy needle among them; unidentified 3인).
- Gate `compared` 21 / `candidates` 275 (non-Latin needles only; Latin remainder is this hand sweep)

Surviving issued copy includes: すべての経済活動を、デジタル化する, 未来の希望を、実装しよう, バクラク, バクラクに、業務を。, お問い合わせ, 資料ダウンロード, 資料をダウンロード, 無料で始める, 無料で試す, もっと見る, 削除, 取り消し, NEW, おすすめ, 承認済み, 完了, 承認待ち, 却下, エラー, 月次, 週次, コピーしました, まだ請求書がありません, 条件に一致する結果がありません, フィルターをクリア, 承認しました, 金額を再度ご確認ください, ご不便をおかけして…, すごい！, です・ます, digitize all economic activity, let's implement a future full of hope, Bakuraku, LayerX.

## Key-path check (A1)

YAML `tokens.*` paths confirmed in `DESIGN.md` by string search, not by shared numerals:

- colors 20 keys → Semantic color role rows (`canvas`/`on-primary` named as two keys; identity `#534DFF` beside YAML `#534dff`)
- typography 11 roles + sans/mono → Type roles / Family
- spacing xs/sm/md/base/lg/xl/xxl/section → Spacing table
- rounded sm/md/lg/full: 9999 → Shape table (`9999` at Shape and toggle; card `12px` only on Standard Card)
- shadow subtle/standard/elevated/modal → Elevation table
- components 18 × type/bg/fg/radius/padding/font/use (and recorded hover/pressed/disabled/focus/shadow) → matching blocks

`tokens.spacing.xs: 4` ≠ a radius. `tokens.spacing.sm: 8` ≠ `tokens.rounded.md: 8`. `tokens.spacing.md: 12` ≠ card `12px` ≠ Caption 12. `tokens.spacing.base: 16` ≠ compact padding `16px` ≠ `tokens.rounded.lg: 16`. `tokens.spacing.lg: 24` ≠ Amount 24 ≠ button padding 24. `tokens.spacing.xl: 32` ≠ featured/modal padding `32px`. `tokens.spacing.xxl: 48` ≠ Display Hero 48. `tokens.spacing.section: 96` ≠ textarea `96px`. `tokens.rounded.full: 9999` ≠ a type-role 18. Standard shadow 0.10 ≠ toast 0.16.

## C2 / A1b

`Primitive type: button` 4 = YAML `type: button` 4. `input` 2 YAML + error-input `not in the token set`. `card` 3=3. `badge` 3 YAML + warning/danger `not in the token set`. `tab` 2=2. `toast` 1=1. `dialog` 2=2. `toggle` 1=1. `not in the token set` dest **4** (Text Field error, Textarea, Soft/Warning, Soft/Danger).

Primary / Secondary / Danger / Dialog L/E/S open (in-place commit). Ghost / Underline Tab / Segmented Tab / Drawer / Toggle L/E/S closed on role. Text Field / Select / Textarea / Error-input: error open, loading·success closed (field commits no operation in place). Standard / Featured / Compact cards, five badges, Toast: kind + map omitted (C4).

## D1 / D2a

`storefront` / `native-client` / `authenticated` dest 0 in `DESIGN.md` as Named-gap domains. Source wording `on mobile` / Bakuraku product UI / recruiting / investor is kept where the source names those surfaces. Audience has no persona name, age, city, or affiliation classification. Provenance Omission ledger is unidentified (3인; 이름·나이·도시·소속 분류). §13 페르소나 3인의 식별자(이름·나이·도시·소속 분류)가 본문·원장에 0회임을 확인. 이 로그는 그 식별자를 dest 0 증명용으로 재열거하지 않는다.

## B2a / B3 / E2c

`derived editorial implementation inference` dest **49** = provenance inventory **49** data rows. `not LayerX-authored` dest **49**. B3 five-kind gate is the sentence at `DESIGN.md` 204; the log's "B3 전문" claim is that sentence, not a stronger paraphrase.

## F1 / F2

F1: full-file reread of causal/interpretive sentences (Scope atmosphere and indigo-as-modern HTML-comment reading, Content voice adjectives, Docs/aggregator character, Principles in and out of that section, layout whitespace-as-trust, motion overshoot, every applicability verdict including Select / Underline Tab / Segmented Tab / field loading-success). Adjacent toss-form limit on each. F2: every dest count above was re-measured after the FAIL 3 restoration with a file-level occurrence scan (`grep -oF -e '<pattern>' | wc -l` per file, not `grep -c`). Dual destinations are both named. Compliance claims (B3, B2a count, C4 omit) match body text that actually exists. Restored-string DESIGN dest: `engineer-led, mission-forward identity` **1**; four easing Use cells **1** each; four signature `motion-* / ease-*` pairs **1** each; `ease-enter` **4**. Unchanged: `#534DFF` **24**; `prose-derived` P **16**; homepage DESIGN/P **5**; curve `cubic-bezier(0.0, 0.0, 0.2, 1)` DESIGN **1**. Line lists after the Motion Use-table insert were recrawled.

## Gate / inspect

`node test-v2/tools/migrate-reference.mjs --brand layerx --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 21, candidates: 275, detail: "인용 문자열 275개 중 21개만 비교했다 — 나머지는 라틴이라 바늘이 되지 않는다. 라틴 전수 대조는 손으로 하라." }]`. Separately, `scripts/design-md-core.cjs` `inspectDesignMd` reports `format: core-v2`, `valid: true`, `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Worker-close SHA `975b1435af05a5182ebb67929f074418aff66d71546044b4b8eb94f4b83171fd`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 21 < `candidates` 275.
