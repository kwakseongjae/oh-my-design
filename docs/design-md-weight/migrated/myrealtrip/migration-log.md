# MyRealTrip migration log

Rulebook: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)

Source: `web/references/myrealtrip/DESIGN.md`
Destination: `docs/design-md-weight/migrated/myrealtrip/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/myrealtrip/provenance.md`
Date: 2026-09-02
Worker: grok-4.6 T2
Portable Core: pass (`scripts/design-md-core.cjs` evaluatePortableCore, `level: portable-core`, `portable_core: true`, `reasons: []`, placeholders 0). Gate: `node test-v2/tools/migrate-reference.mjs --brand myrealtrip --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 4, candidates: 102 }]`. Worker-close SHA of `DESIGN.md`: `b5a07a11c5819b8fe4fa8916881b9a1c6db94e3c03a36545ec4549934ce4720d`. Auditor SHA of `DESIGN.md` after B2a folds: `ec1bf3b7e656b556e9869f934dc9697c5d5c07a03daf1512aa5fe0f5530a60db`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 옮김 → Experience H1 / Scope + 분리 → provenance Identity | Portable file has no frontmatter. Name kept as H1 `MyRealTrip Design System` (`DESIGN.md` 1) and body `MyRealTrip` / `마이리얼트립` DESIGN dest **2** at 9/287. Homepage pattern `https://www.myrealtrip.com/` DESIGN dest **7** at 9×2/21×2/149/150/151 · P dest **7** at 51/52/61/62/69/70/86 (the pattern also matches `/hotels` and `/about/realguide` prefixes). `#2b96ed` DESIGN dest **5** at 34/74×2/85/190 · `#2B96ED` DESIGN dest **6** at 11×2/34/54/74/190. Favicon slug DESIGN dest **1** at 159 · P dest **1** at 17. Dual: Identity + portable Scope / Semantic / Assets. |
| YAML `omd`, `verified`, `tokens.source`, `tokens.extracted`, `components_harvested` | 분리 → provenance + 옮김 → Scope (`live-extract`) | 출처 원장·freshness. `live-extract` DESIGN dest **2** occurrences at 9 · P dest **5** at 20/24/149/156/189. `components_harvested` DESIGN dest **0** · P dest **3** at 22/149/188. Dual for harvested is provenance only, not the portable body. |
| YAML `tokens.colors` (8 keys) | 옮김 → Foundations Semantic color | Each key on its own role row. `canvas` / `on-primary` both `#ffffff` as two keys (DESIGN 75–76, 85). YAML lowercase beside §2 uppercase. `control-border` stays a color observation, not a harvested component (DESIGN 80). Prior deep-blue / violet / semantic / sale / success omitted as the source omitted them (DESIGN 83). |
| YAML `tokens.typography` | 옮김 → Typography & Assets | Family sans `Pretendard` (`tokens.typography.family.sans` DESIGN 137). Body size/weight/lineHeight/use at DESIGN 145/149 (`14` / `400` / `21px` / `Public hotel-listing body/list text`). Control size/weight/lineHeight/use at DESIGN 145/150 (`15` / `500` / `22.5px` / `Public hotel-search input`). Locale-tab `18.6px` is §3 only, DESIGN dest **7** at 145×2/151/155/248/255×2; YAML has no typography key for that role. |
| YAML `tokens.spacing` (`action-inline: 24`) | 옮김 → Foundations Spacing | Unitless step in the table at DESIGN 93. Not merged with padding `0px 24px` (DESIGN 95/201). |
| YAML `tokens.rounded` (`square: 0` / `action: 12` / `selected-tab: 16`) | 옮김 → Foundations Shape | Three keys in the table at DESIGN 103–105. Component radii stay on those components (DESIGN 201/227/255). |
| YAML `tokens.components` (2 records) | 옮김 → Components & States | `primary-header-action` path DESIGN 197; `selected-locale-tab` path DESIGN 249. `Primitive type: \`button\`` DESIGN dest **1** at 189 = YAML `type: button` 1. `Primitive type: \`tab\`` DESIGN dest **1** at 242 = YAML `type: tab` 1. Public search field: `Not in the token set` DESIGN dest **1** at 216. |
| YAML token note | 옮김 → Experience Scope + 분리 → provenance Identity | Exact sentences DESIGN dest **1** at 9 · P dest **1** at 26. Dual. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, Distinctive traits | Product/surface range, 2012 start, white canvas / low-chrome navigation, partner program / AI-native travel-platform context, observed character. Corporate/about kept as chrome. |
| §1 공식 URL | 분리 → provenance Surfaces / Sources + 옮김 → Scope | Dual: ledger and the portable surface sentences. |
| §2 Color Palette & Roles | 옮김 → Foundations Semantic color | Observed-role table, provenance/boundary column, “not a published MyRealTrip token library”, prior palette not retained. |
| §3 Typography Rules | 옮김 → Typography & Assets | Five evidence-class rows, Pretendard 60/36, `__pretandard_7bdbf6` 64/four CDN, OFL 1.1, declared-only faces, three measured roles including `18.6px`, public-web boundary sentence. License URL DESIGN dest **1** at 160 · P dest **1** at 65. Dual. |
| §4 Component Stylings | 옮김 → Components & States | Header action, search field, selected locale tab. Capture selectors dual: DESIGN component blocks · P Capture selectors. Search padding `0px 54px 0px 20px` DESIGN dest **1** at 222. Unselected sibling sentence DESIGN 254. |
| §4 footer Verified / Tier 1 / Tier 2 / Conflicts | 분리 → provenance Freshness / Sources / Proof | Producer strings. No Tier 2 value promoted. `https://getdesign.md/myrealtrip` DESIGN dest **0** · P dest **1** at 76. |
| §5 Layout Principles | 옮김 → Layout & Platforms | Public desktop-width documents only; 48px / 40px / 32px header; no public max-width, carousel, card-grid, booking-detail, or authenticated-flow layout rule. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | No shadow on action/search; selected tab sample `0px 1px 2px rgba(0, 0, 0, 0.15)` DESIGN dest **1** at 111 · P dest **1** at 169. Dual. Isolated header treatment does not establish a reusable elevation scale. |
| §7 Do's | 옮김 → Experience Application rules | Brand rules. Not put into Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience Avoid | Brand prohibitions. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Source’s own no-claim sentence about mobile navigation, carousel behavior, touch targets, safe-area controls, or image aspect-ratio rules kept as written. No new domain added. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. Unique geometry already on Public header action (`DESIGN.md` 187–201) and Selected locale tab (`DESIGN.md` 239–255) (A3). 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Korean-first labels `무엇을 도와드릴까요?` DESIGN dest **3** at 279/283/287, `문의하기` dest **3** at 279/284/287, `여행자와의 약속을 성실히 이행해요` dest **2** at 285/287, polite `~요`, practical explanatory register, not a comprehensive product voice system. |
| §11 Brand Narrative | 옮김 → Experience `scope` ¶3 | February 2012 DESIGN dest **2** at 13×2 · P dest **4** at 85/130/158/192. Lee Dong-geon DESIGN dest **3** at 13×2/287 · P dest **4** at 85/130/158/192. Closing sentence “Together, these sources establish a travel-marketplace origin and a current organisational direction; they do not supply an official rebrand history or a visual-design manifesto.” DESIGN dest **1** at 13. Dual: `DESIGN.md` Scope and provenance Claim ledger / Proof notes. |
| §12 Principles | 옮김 → Experience Principles | Three principles and UI implications, with B2a on the section head (`These 3 items…` DESIGN 44). |
| §13 Personas | 삭제 (미완성 슬롯) + 옮김 → Audience (source-named groups) | 페르소나 절(이름 없음; 미완성 인구통계·여정·동기 슬롯) 삭제. 승격 없음, sidecar 재수록 없음 (D2, D2a). Source-named groups dual: DESIGN dest **1** at 28 · P dest **1** at 146 (group strings as surviving Audience, not as biographies). |
| §14 States | 옮김 → Components & States Capture record + per-component applicability | 본문 보존: one selected tab observation and `interactionCount: 0` DESIGN 171; empty/loading/error/success/disabled unnamed at 176–180. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations Motion | Source no-measurement sentence and class-name inference prohibition DESIGN 115. Placeholder omitted at the value boundary. B3 전문 `DESIGN.md` 117 (`computed transition properties`, `animation name`, `duration`, `easing`, `reduced-motion behavior`, per-component computed observation). |
| HTML/YAML verification_v2 claim ledger | 분리 → provenance Claim ledger | `home` / `hotel_font` anchors. |

## A5a hand sweep

Source quoted Korean runs and published labels were extracted by hand from `web/references/myrealtrip/DESIGN.md` and `web/references/myrealtrip/.verification.md`. Issued-copy needles (labels, CTAs, slogans, microcopy, names) were checked against the three output files. UI-meta, token paths, and font stacks were not needles.

- Extracted issued-copy needles: 8
- Missing from the three outputs: 0
- Dispositioned in this log: §13 had no named issued-copy needle; §9 prompts are tool-facing restatement
- Surviving issued copy: MyRealTrip, 마이리얼트립, Lee Dong-geon, Real Partner, `무엇을 도와드릴까요?`, `문의하기`, `여행자와의 약속을 성실히 이행해요`, AI-native travel platform
- Gate `compared` 4 / `candidates` 102 (non-Latin needles 4; Latin remainder is this hand sweep). A5a was mandatory because `compared` 4 < `candidates` 102.

## Key-path check (A1)

YAML `tokens.*` paths confirmed in `DESIGN.md` by string search, not by shared numerals:

- colors 8 keys → Semantic color role rows
- typography family.sans + body.size/weight/lineHeight/use + control.size/weight/lineHeight/use → Family / Type roles
- spacing action-inline 24 → Spacing table (`tokens.spacing.action-inline` at 93/95/201)
- rounded square/action/selected-tab → Shape table
- components 2 × type/bg/fg/radius/padding/height/font/use (and recorded states/active) → matching blocks

`tokens.spacing.action-inline: 24` ≠ header-action padding `0px 24px`. `tokens.rounded.square: 0` ≠ search `Border: 0px`. `tokens.rounded.action: 12` ≠ only the button radius. `tokens.rounded.selected-tab: 16` ≠ only the tab radius. `tokens.colors.canvas` / `on-primary` both `#ffffff` as two keys. `tokens.typography.body.size` `14` ≠ header-action `14px / 600`. `tokens.typography.control.size` `15` ≠ locale-tab `15px / 700`.

## C2 / A1b

`Primitive type: \`button\`` DESIGN dest **1** at 189 = YAML `type: button` 1. `Primitive type: \`tab\`` DESIGN dest **1** at 242 = YAML `type: tab` 1. `not in the token set` DESIGN dest **2** at 184/227. `Not in the token set` DESIGN dest **1** at 216.

Public header action L/E/S closed on role (header destination; commits no operation in place). Selected locale tab L/E/S closed on role (tab). Public search field loading/success closed; error open as a form field. Kind + map present on the search field because the source records it as a public keyword search control; primitive type omitted because it is not in the token set.

## D1 / D2a

`native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` / `does not say` dest **0** in `DESIGN.md`. Audience has no persona name. Provenance Omission ledger is unidentified (이름 없음; 미완성 슬롯 종류만).

## Pass 1 (B2a)

`DESIGN.md` re-read end-to-end. Every causal / interpretive / judgment sentence (Scope so/because, Principles, Content voice, Docs-citation character) was asked: brand-issued fact or observation-derived reading. Derived readings carry an adjacent complete-form close (`derived editorial implementation inference` + `not MyRealTrip-authored or a separately published UI specification`). Count **28** = provenance inventory **28**. Auditor folded three unnamed readings into existing closes (Distinctive traits palette grouping; Family FontFace causal; Layout cross-viewport) without adding occurrences; Principles inventory narrowed to the three items (UI implications remain the source’s own editorial reading).

## Pass 2 (E2)

Each log row was written after a file search for the named value. Dual destinations are both named. Compliance claims (`B3 유지`) are made only where the full five-kind gate sentence is in `DESIGN.md` 117. Auditor remeasured dest counts with `grep -o` / `str.count` (not unique lines): homepage **7**/**7**, `#2b96ed` **5**, `#2B96ED` **6**, February 2012 **2**, Lee Dong-geon **3**, `18.6px` **7**, token note P **26**, `not in the token set` **2** at 184/227.

## Unique-phrase sweep (wave 43)

Expressions pulled from source §1–§15 (years, proper names, quotes, causal §11/§1 sentences, value qualifiers, §15/§5 constraint sentences): **101**. Zero-in-output then restored: **3** (YAML token-note sentence 1, YAML token-note sentence 2, Primary tasks rewritten onto source-greppable strings `public home and hotel-listing surfaces` / `public keyword search` / `repeated public header action`).
