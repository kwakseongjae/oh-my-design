# MOZE migration log

Source: `web/references/moze/DESIGN.md`
Destination: `docs/design-md-weight/migrated/moze/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/moze/provenance.md`
Date: 2026-09-02
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**

## A5 — brand-published strings

The catalog `name` is the Latin `MOZE`, so the H1 is `# MOZE Design System`. The Chinese name `摩斯` is carried byte-for-byte into Experience → Scope at first mention (`MOZE (摩斯, "最美記帳 App")`), beside the Latin form rather than replaced by it.

Every published run the source records is present in the portable body byte-for-byte. Counts are occurrences, measured per string with `grep -oF -- '<string>' DESIGN.md | wc -l`.

| String | Body count | Note |
|---|---:|---|
| `摩斯` | 4 | |
| `最美記帳 App` | 4 | |
| `用最優雅的方式簡化你的財務旅程` | 2 | |
| `記帳，是理財的第一步` | 2 | |
| `投資你的財務健康` | 2 | |
| `跨越裝置的財務掌控` | 1 | |
| `全面的記帳體驗，持續進化中` | 1 | |
| `真實用戶，真心推薦` | 1 | |
| `立即免費下載` | 4 | |
| `立即下載` | 3 | |
| `查看完整教學` | 5 | |
| `定價方案` | 4 | |
| `教學文件` | 4 | |
| `常見問題` | 4 | |
| `聯繫我們` | 4 | YAML nav `use` names three items; §4 Navigation also names this fourth. Both writings kept. |
| `這裡` | 4 | |
| `基本版 $0` | 3 | |
| `專業版 + AI` | 6 | |
| `螢幕快照` | 2 | |
| `Apple Watch` | 5 | |
| `必填` | 1 | |
| `Simplify your financial journey in the most elegant way` | 1 | source gloss, beside the Chinese |
| `the most beautiful bookkeeping app` | 1 | source gloss, beside `最美記帳 App` |
| `bookkeeping is the first step of money management` | 2 | §10 gloss |
| `bookkeeping is the first step of financial management` | 2 | §11 gloss; both kept |
| `invest in your financial health` | 1 | |
| `real users, sincere recommendations` | 1 | |

No published string is replaced by a translation. English glosses sit beside the Chinese.

### A5a hand sweep

Gate `copy-loss` compared=21 / candidates=200 (`verdict: PASS` is that 21-needle subset, not Latin completeness). Latin glosses and labels were swept by hand from the source body, the source trailing comment, and `web/references/moze/.verification.md`. Brand-published copy (labels, CTAs, slogans, microcopy, the Chinese name) plus source-supplied English glosses: extracted 27, unsurvived 0. Sibling-only `$1.99` and document.title `MOZE － 最美記帳` stay in provenance; `最美記帳` survives in the portable body inside `最美記帳 App`. Denominator: gate compared/candidates 21/200; hand sweep extracted 27 / unsurvived 0.

## Section-by-section disposition

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity `id` / `name` / `country` / `category` | 분리 → provenance Identity | Portable file has no frontmatter. `name` `MOZE` is dual (E2a): the ledger + the H1 and the portable prose. `摩斯` is dual: the ledger + Scope and Content & Locales. Verified by `grep -oF 'MOZE' DESIGN.md` and `grep -oF '摩斯' DESIGN.md`. |
| YAML `homepage` `https://moze.app/` | 옮김 → Experience Scope + Primary tasks + Capture record; 분리 → provenance Identity / Surfaces / Sources | Multi-destination (E2a). `grep -oF 'https://moze.app/' DESIGN.md \| wc -l` = 6 (prefix-inclusive: also matches `https://moze.app/pricing`). Also in provenance. |
| YAML `primary_color` `#ff367c` | 옮김 → Scope ¶2, Distinctive traits, Principles item 2, Application rules, Foundations Semantic color, token-note paragraph, Primary Gradient CTA, Pro Tier Card ring writings, Accent Pill; 분리 → provenance Identity | Multi-destination (E2a). `grep -oF '#ff367c' DESIGN.md \| wc -l` = 20. Avoid names the pink gradient without this hex (Avoid dest 0 for the hex). |
| YAML `logo` slug | 옮김 → Typography & Assets → Assets; 분리 → provenance Identity | Dual (E2a). `grep -oF 'framerusercontent.com/images/DoQvcMSfFqFHJHne39zr96KczM.png' DESIGN.md \| wc -l` = 1. |
| YAML `omd` / `verified` / `added` / `tokens.source` / `tokens.extracted` / `tokens.note` | 분리 → provenance Identity / Freshness. `live-extract` and the token-note facts also 옮김 → Scope + Foundations token-note paragraph | Dual for `live-extract` and the note's operative facts (E2a). `grep -oF 'live-extract' DESIGN.md \| wc -l` = 1. `omd: "0.1"` is ledger-only. |
| YAML `components_harvested: true` | 분리 → provenance Identity / Proof notes | Field name is ledger-only. `grep -oF 'components_harvested' DESIGN.md \| wc -l` = 0. |
| YAML `tokens.colors.*` (15 keys) | 옮김 → Foundations Semantic color | Each key path named: `tokens.colors.primary` `#ff367c`, `primary-blue` `#6e86ff`, `violet` `#a963ff`, `accent-periwinkle` `#8897e3`, `accent-orange` `#f58327`, `accent-gold` `#f0c732`, `accent-green` `#4dff64`, `accent-lavender` `#bba2e0`, `canvas` `#0d0d12`, `black` `#000000`, `panel` `#1a1d31`, `panel-raised` `#323648`, `on-dark` `#ffffff`, `body` `#d0d0d0`, `muted` `#7b7c8c`. Gold's second writing `#f7ce36` from the trailing comment is kept beside it. |
| YAML `tokens.typography.*` | 옮김 → Typography & Assets Type roles + Family | Family display `Poppins`, body `system sans-serif (CJK fallback)`. Roles display-hero 52 / 400 / 1.4 / -2.08, section 32 / 400 / 1.4, plan-name 24 / 400 / 1.3, body 18 / 400 / 1.5, nav 12 / 400 / 1.3, button 12 / 400 / 1.3. Unitless line-heights kept as ratios (A1a). §3 rem, `~` markers, and longer notes kept beside YAML `use`. |
| YAML `tokens.spacing` `xs: 1` `sm: 2` `base: 12` `md: 20` `lg: 32` `section: 64` | 옮김 → Foundations Spacing | Key paths unmerged from rounded/type/padding that share a numeral. `grep -oF 'tokens.spacing.section' DESIGN.md \| wc -l` = 2. |
| YAML `tokens.rounded` `sm: 8` `md: 20` `lg: 40` `full: 999` | 옮김 → Foundations Shape | Key paths kept. `tokens.rounded.full` 999 beside component `999px`. `tokens.rounded.md` 20 is not `tokens.spacing.md` 20. |
| YAML `tokens.shadow.glow-cta` / `glow-card` | 옮김 → Experience Scope ¶2 + Foundations Elevation + the two CTA/card component records | Exact strings. Triple with Scope / Elevation / component (E2a). `grep -oF 'rgba(255,89,0,0.7) -12px 0px 21px -3px, rgb(255,56,132) -7px 0px 10px -5px' DESIGN.md \| wc -l` = 3 (Scope `:11`, Elevation `:140`, Primary Gradient CTA `:258`). glow-card dest 3 (Scope `:11`, Elevation `:141`, Pro Tier Card `:345`). |
| YAML `tokens.components.cta-gradient` | 옮김 → Components Primary Gradient CTA | Primitive type `button` (YAML `type: button`). bg `#ff367c`, fg `#ffffff`, radius 999px, padding 12px 20px, height 41px, font 12px / 400 system-sans, 274deg gradient, glow, labels 立即免費下載 / 立即下載. |
| YAML `tokens.components.cta-outline` | 옮김 → Components Outline / Ghost Pill | Primitive type `button`. fg `#ffffff`, radius 999px, padding 1px, height 43px, orange `#f58327` radial ring, label 查看完整教學. §4 longer use "thin gradient-ringed pill with transparent interior" kept. |
| YAML `tokens.components.nav-link` | 옮김 → Components Top-nav item | Primitive type `tab`. fg `#ffffff`, font 12px / 400, padding 2px 0px, height 30px, YAML use 定價方案 / 教學文件 / 常見問題, §4 also 聯繫我們, active white `#ffffff` on dark. |
| YAML `tokens.components.plan-card-free` | 옮김 → Components Free Tier Card | Primitive type `card`. Kind omitted (no interactive-kind evidence). bg `#323648`, radius 20px, padding 32px, 基本版 $0. |
| YAML `tokens.components.plan-card-pro` | 옮김 → Components Pro Tier Card | Primitive type `card`. Kind omitted. bg `#1a1d31`, radius 20px, padding 32px, YAML two-stop ring kept beside §4 three-stop and trailing-comment `150deg`. Shadow glow-card. 專業版 + AI. |
| YAML `tokens.components.feature-card` | 옮김 → Components Feature Card | Primitive type `card`. Kind omitted. bg `#1a1d31`, radius 20px, padding 32px. Sibling radial-gradient stays in provenance. |
| YAML `tokens.components.badge-accent` | 옮김 → Components Accent Pill | Primitive type `badge`. Kind non-interactive. bg `#ff367c`, fg `#ffffff`, radius 999px, font 12px / 400. |
| YAML `tokens.components.inline-link` | 옮김 → Components Inline Link | Primitive type `listItem`. fg `#bba2e0`, font 18px / 400, 這裡. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Product/surface range, measured layer, closing atmosphere sentence "engineered for people who find beauty in their numbers", Key Characteristics. Atmosphere readings carry adjacent B2a. |
| §1 공식 히스토리 없음; 분위기 문장 | 옮김 → Scope ¶2 with B2a | cinematic / gadget unboxing / premium-but-playful / glow over flat / Finda-style / information-dense closing sentence. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | All 15 YAML colors plus live `rgba(255,255,255,0.87)` and gold's `#f7ce36` writing. |
| §3 Typography Rules | 옮김 → Typography & Assets | Family split, Poppins Placeholder, Inter fragments, 蘋方 / PingFang / 思源黑體 / Noto Sans CJK, six roles with rem and `~` line-heights, four typography principles including **Extreme negative tracking on display**. |
| §4 Component Stylings | 옮김 → Components & States | Eight harvested components. Capture selectors and sibling-only computed extras stay in provenance. |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness / Sources | Dual with portable inspection dates (E2a). |
| §5 Layout Principles | 옮김 → Foundations Spacing/Shape + Layout & Platforms | Base unit: ~4px, scale 1/2/12/20/32/64, ~377-379px plan cards, whitespace philosophy, radius scale including carousel controls at 40. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Four-level table, two glow strings, colored-light philosophy. |
| §7 Do's | 옮김 → Experience Application rules | Eight Do rules. Not in Governance. |
| §7 Don'ts | 옮김 → Experience Avoid | Eight Don't rules. Source Don'ts only; no invented native-app domain. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoints Mobile <640 / Tablet 640-1024 / Desktop 1024-1440, touch 41/43/30, collapsing, image behavior, triangular "M" PNG. Qualified as desktop-inspect + source-stated table. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Color/type/component values they restated already live in Foundations/Components. Price 52px Poppins from the pricing-row prompt lands on Type roles Display Hero notes (A3). No skill/adapter 위임. |
| §10 Voice & Tone | 옮김 → Content & Locales | Voice samples verbatim, both English glosses of 記帳，是理財的第一步, tone table, forbidden register `guilt-based budgeting pressure`. |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶3 | Taiwan-made, 最美記帳 App, 記帳，是理財的第一步, multi-currency / charts / Apple Watch / 專業版 + AI, founding premise, beauty and data clarity, competes not on free or fast, and the closing refusal/embrace unit through hanzi rendered by the platform face. Editorial parts carry B2a. Trailing-comment URLs none; product facts stay as source-stated live-page facts. |
| §12 Principles | 옮김 → Experience Principles | Five items + UI implications, with the toss-form B2a head. |
| §13 Personas | 삭제 | Fictional archetypes. Not promoted to Audience or primary-tasks. No name, age, city, motivation, or affiliation classification in DESIGN.md, provenance.md, or this log (D2, D2a). Persona-section group labels are not re-hosted as Audience. `grep` for those biographies across the three output files is 0. |
| §14 States | 옮김 → Components Source state contract + per-component applicability | Nine-row table preserved in full (empty transactions/budget, loading chart/sync, error sync/validation, success entry saved, skeleton, disabled). Philosophy-layer, B2a adjacent. Declared interactive components close Core §4.4 by role; capture absence is not `not-applicable`. Graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion (durations, named easings, glow swell, reduced-motion, no bounce). 곡선 값 분리 → provenance Omission ledger | Durations 120ms / 240ms / 360ms kept. Signature glow swell kept. `prefers-reduced-motion: reduce` kept. Three cubic-bezier values omitted as unattributed; `ease-exit` matches `spec/omd-v0.1.md`. B3 five-kind gate is in the Motion paragraph (`grep -oF 'transition properties' DESIGN.md` hits). `grep -oF 'cubic-bezier(0.4, 0.0, 1, 1)' DESIGN.md \| wc -l` = 0; the value is in provenance Omission ledger. |
| Trailing HTML comment (philosophy layer / live samples) | 분리 → provenance Observation ledger; 본문에 필요한 증거 종류 한정은 유지 | Gold `#f7ce36`, plan-price 52px, 150deg ring, evidence-class quotes. `$1.99` and frequency counts are sibling-only. |

## Dual destinations (E2a) — grep-verified

| Value | DESIGN.md | provenance.md |
|---|---|---|
| `MOZE` (name) | H1 + prose | Identity |
| `摩斯` | Scope + Content | Identity |
| `#ff367c` | Scope ¶2 + Distinctive traits + Principles + Application rules + Semantic color + token note + Primary Gradient CTA + Pro Tier Card + Accent Pill; dest 20. Avoid dest 0 for this hex. | Identity `primary_color` |
| `https://moze.app/` | Scope + Primary tasks + Capture record; dest 6 prefix-inclusive | Identity / Surfaces / Sources |
| logo slug | Assets | Identity |
| `2026-06-17` | Scope, Font evidence, Capture record, Brand-published lines; dest 6 | Freshness |
| `live-extract` | Scope; dest 1 | Identity |
| glow-cta string | Scope ¶2 + Elevation + Primary Gradient CTA; dest 3 | Observation ledger |
| glow-card string | Scope ¶2 + Elevation + Pro Tier Card; dest 3 | Observation ledger |
| `rgba(255,255,255,0.87)` | Scope, Foundations, Type, States; dest 9 | Observation ledger |
| `#f0c732` and `#f7ce36` | Foundations gold role; dest 4 / dest 2 | Observation ledger / Freshness conflict note |

## Phrase self-check (wave 43)

Unique source expressions pulled from §1/§3/§4/§5/§6/§11/§14/§15 (years/proper nouns/quotes, causal closers, value modifiers, constraint sentences): 48. First portable grep found 11 at count 0; those 11 were restored before submit (`guilt-based budgeting pressure`, `people who find beauty in their numbers`, `information-dense dark UI`, `engineered for people`, `single, unmistakable signature`, `deliberate, lightweight choice`, `transparent interior`, `Base unit: ~4px`, `Extreme negative tracking`, `Single display weight`, `Soft white, not pure white`). Post-restore `grep -oF` on each is ≥ 1 in DESIGN.md.

Phrase self-check: pulled 48 / restored-from-0 11.

## Pass record

- Pass 1 (B2a): DESIGN.md re-read. 27 complete-form qualifications (`grep -o 'derived editorial' DESIGN.md \| wc -l` = 27 and `grep -o 'not MOZE-authored' DESIGN.md \| wc -l` = 27). Forbidden-register is named in the Voice complete form at `:441`. Provenance Derived editorial inventory is 27 data rows, header `| Location in DESIGN.md | Qualified reading |`.
- Pass 2 (E2): each disposition row above was written after `grep -oF` on the named value in DESIGN.md and/or provenance.md. Dual destinations list both; glow-cta/glow-card also land in Scope ¶2; `https://moze.app/` dest 6 including Capture record; `#ff367c` Avoid dest 0. B3 is claimed only because Foundations Motion names transition properties, animation name, duration, easing, reduced-motion behavior, and the per-component computed-observation gate.
- YAML key-path check: `tokens.spacing.md` 20 kept off `tokens.rounded.md` 20; `tokens.spacing.lg` 32 kept off type 32px and padding 32px; `tokens.rounded.full` 999 kept off component `999px`; `tokens.colors.on-dark` `#ffffff` kept off live `rgba(255,255,255,0.87)`.
- Audience / Primary tasks: each item grepped against the source; persona biographies and persona-section group labels are not in the three outputs.
- Gate: `node test-v2/tools/migrate-reference.mjs --brand moze --gate-only` → `verdict: PASS`. Mechanical token-loss was red once (`px:8px`, `px:40px`); those §5 writings were restored beside YAML `tokens.rounded.sm` 8 and `tokens.rounded.lg` 40, then the gate passed. `portable_core: true` via `inspectDesignMd`.
