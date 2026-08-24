# Alipay provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/alipay/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | alipay |
| name | Alipay |
| country | CN |
| category | fintech |
| homepage | https://www.alipay.com |
| primary_color | `#1890FF` |
| logo | favicon `https://www.google.com/s2/favicons?domain=alipay.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| ds.name | Ant Design |
| ds.url | https://ant.design/docs/spec/introduce/ |
| ds.type | system |
| ds.description | Ant Group's open enterprise design language; it is design context, not a substitute for the observed Alipay Open Platform surface. |

Catalog `primary_color` `#1890FF` is multi-destination (E2a). Literal hex: this identity ledger; Scope Ant-class (DESIGN 17); Distinctive (41); Distinctive extra reading (46); capture-bound Do (59); Semantic unmerged-role (79); Foundations Primary (85); Foundations Ant Design docs contrast (95); Capture-record prior-reference (176); Developer action Background (188); Developer action field note (197). Field-role without treating it as Ant Design `#1677FF`: Semantic unmerged-role (79); Avoid (68); Developer action field note (197); Named gaps (354). `#1677FF` literal also Distinctive extra (46) and Semantic unmerged-role (79), not only Avoid/Named-gaps. Catalog homepage `https://www.alipay.com` is this identity ledger + portable Experience Scope 9 (exact literal). Surfaces/Sources/Tier 1 hold the three Open Platform URLs, not that exact homepage literal (E2a).

Catalog logo metadata is a Google favicon lookup, not a captured first-party mark. The literal URL `https://www.google.com/s2/favicons?domain=alipay.com&sz=128` is this identity ledger only (provenance-only). Portable Typography & Assets holds a URL-free Google-favicon capture-method / not-a-portable-mark sentence, not the URL string (E2a: URL destination and URL-free boundary destinations are separate). Named gaps has no first-party-mark sentence.

YAML `tokens.source` is `live-extract` (A1c) — provenance-only type/source field. YAML `ds.type` is `system` (A1c) — provenance-only. `ds.name` / `ds.url` / `ds.description` are this identity ledger; unique Ant Design context facts from those pages are in portable Experience Scope (E2a: facts dual, official-doc URLs provenance-only).

Token note from source: Only supplied deterministic capture values for Alipay Open Platform are tokens. Ant Design defaults remain separately documented official design-system context. Dual destination (E2a): this identity note and portable Foundations Semantic evidence-domain (DESIGN 81).

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none.

Verified note from source footer: 2026-07-13. The source footer does not contain `(omd:migrate)`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | developer-platform | https://open.alipay.com/?mobile=2 | 2026-07-13 |
| web-app | developer-platform-product | https://open.alipay.com/module/webApp | 2026-07-13 |
| tools | developer-platform-tools | https://open.alipay.com/tool | 2026-07-13 |

Verification product URLs (`https://open.alipay.com/?mobile=2`, `https://open.alipay.com/module/webApp`, `https://open.alipay.com/tool`) are dual-destination: portable Experience Scope 11 and this ledger (E2a). `https://open.alipay.com/module/webApp` is also Primary tasks 28. `https://open.alipay.com/tool` is also Primary tasks 29. Packet date `2026-07-13` in Scope 11 is also this freshness ledger (E2a: packet identifier in portable Scope; verified date in this ledger). Official-doc / license URLs are provenance-only in Sources/Tier 1/Narrative; unique first-party narrative propositions from those pages are in portable Experience Scope (E2a: facts dual, URLs provenance-only).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://open.alipay.com/?mobile=2 | 2026-07-13 |
| web-app-live | product-surface | https://open.alipay.com/module/webApp | 2026-07-13 |
| tools-live | product-surface | https://open.alipay.com/tool | 2026-07-13 |
| ant-context | official-doc | https://ant.design/docs/spec/introduce/ | 2026-07-13 |
| ant-font | official-doc | https://ant.design/docs/spec/font-cn/ | 2026-07-13 |
| ant-values | official-doc | https://ant.design/docs/spec/values/ | 2026-07-13 |
| ant-license | license | https://github.com/ant-design/ant-design/blob/master/LICENSE | 2026-07-13 |
| antgroup-context | official-doc | https://www.antgroup.com/en/home | 2026-07-13 |

### Tier 1

- https://open.alipay.com/?mobile=2
- https://open.alipay.com/module/webApp
- https://open.alipay.com/tool
- https://www.antgroup.com/en/home
- https://ant.design/docs/spec/introduce/
- https://ant.design/docs/spec/values/
- https://ant.design/docs/spec/font-cn/
- https://github.com/ant-design/ant-design/blob/master/LICENSE

### Tier 2 (no usable record)

- https://getdesign.md/alipay (attempted via built-in web; no indexed Alipay record returned)
- https://styles.refero.design/?q=alipay (attempted via built-in web; no Alipay style record returned)

### Narrative (not interface tokens)

- Ant Group home: https://www.antgroup.com/en/home
- Ant Design introduction: https://ant.design/docs/spec/introduce/
- Ant Design values: https://ant.design/docs/spec/values/
- Ant Design font: https://ant.design/docs/spec/font-cn/
- Ant Design license: https://github.com/ant-design/ant-design/blob/master/LICENSE

Official 2004 establishment after Taobao escrow, one-stop digital daily-life platform, partner work across payments / public services / local life are first-party narrative in portable Experience Scope 9. Captured-page APIs and tools offering payment and marketing capabilities are source-stated in portable Experience Scope 21. Reading the Open Platform as one public developer-facing expression of the Alipay ecosystem is derived editorial implementation inference in that same Scope 21 paragraph (adjacent complete B2a; not first-party). Ant Design introduction (Ant User-Experience Design Team; Natural, Certain, Meaningful, Growing) is first-party Ant Design language in Scope 17. Those URLs stay provenance-only.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-13; `web-app` = web-app / web-app-live / live-inspect / 2026-07-13; `tools` = tools / tools-live / live-inspect / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary | web-app |
| tokens.colors.canvas | home |
| tokens.colors.surface | web-app |
| tokens.colors.foreground | home |
| tokens.colors.nav | home |
| tokens.colors.muted | home |
| tokens.colors.input-border | web-app |
| tokens.typography.family.sans | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.nav-active.size / weight / lineHeight / use | home |
| tokens.typography.cta.size / weight / lineHeight / use | web-app |
| tokens.rounded.card | tools |
| tokens.rounded.input | web-app |
| tokens.shadow.cta | web-app |
| tokens.components.tool-card.type / bg / radius / padding / font / use | tools |

## Capture selectors

| Component | Pointer |
|---|---|
| Developer action | `surface-2::[data-omd-capture="10"]`, class `ant-btn ant-btn-primary bannerBtn___ON0Mn` |
| Search input | `surface-2::[data-omd-capture="7"]`, class `ant-input alipay-open-search-header-input` |
| Developer tool card | `surface-3::div`, class `contentCard___nkyvg` |
| Top navigation item | `home::li`, class `menuItem currentMenu`; active type metrics also `home::[data-omd-capture="1"]` |
| Footer link row | `home::li`, class `alipay-open-footer-li`; observed across all three surfaces |
| Page canvas / body | `home::body` |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: live-extract
- ds.type: system
- Interaction snapshots: none. Only one collector state label: Search input marked `focus`, with raw values transparent background, 0px border width, and no shadow. Dual: portable Capture record 174 + Search input Observed 220 + additional observed 232 + this Proof note (E2a).
- Uncaptured hover/pressed/disabled/loading/error/success/toast/dialog/payment-processing treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- Developer action / Search input / Top navigation item / Footer link row loading/error/success applicability is omitted: exact destination/request/outcome unresolved (C2). Capture selectors remain known (Use 195 / 219 / 260 / 283 + this Capture selectors table). `data-omd-capture="10"` is Use 195 + Type-roles 158 + Semantic 85 + C2 206; `data-omd-capture="7"` is Use 219 + Type-roles 159 + C2 230; `data-omd-capture="1"` is Type-roles 157 + this table, not Top navigation Use 260. Those selectors are not in the unresolved set.
- Developer tool card has no interactive-kind evidence; kind and state-applicability maps are omitted (C4). `Type: card` is kept (237).
- YAML `tokens.source: live-extract` and `ds.type: system` are identity metadata (A1c)
- §13 names stakeholder groups named or implied by first-party sources, not fictional user profiles. Those groups are Audience only. Independently verified surface work is the three primary tasks. No fictional demographics are re-hosted here (D2)
- Catalog `primary_color` `#1890FF` literal hex destinations are listed under Identity (E2a)
- Catalog Google favicon literal URL is provenance identity only. URL-free capture-method / not-a-portable-mark sentence is portable Assets only (E2a). Named gaps has no first-party-mark sentence.
- Token note is dual this identity note + portable Foundations Semantic evidence-domain 81 (E2a)
- Ant Design / Ant Group / license URLs are provenance Sources/Tier 1/Narrative; MIT-license-boundary prose is portable Font evidence 137 (E2a: URL vs URL-free license sentence)
- YAML unitless lineHeight `1.5715` / `3.3333` / `2.5` and body-table 22px / 60px / 40px remain unmerged (A1a). Dual Type roles 150 / 156–159
- YAML primitive types preserved per component: button (Developer action 186), input (Search input 212), card (Developer tool card 237). Top navigation item and Footer link row have no YAML type; Type is not invented (A1b, Use 260 / 283)

## Derived editorial inventory (portable body, adjacent complete B2a)

These portable sentences are derived editorial implementation inference from the verified surfaces; they are not Alipay-authored or a separately published UI specification:

- Experience Scope named-evidence-domain grouping of the three Open Platform URLs (11)
- Experience Scope coverage (three pages are not native consumer wallet and not a universal Alipay app theme) (13)
- Experience Scope visual-character (practical rather than promotional; system-font stack chosen by the browser) (15)
- Experience Scope Ant-class / default-separation (`#1890FF` retained; `#1677FF` is Ant Design docs, not a live Open Platform token) (17)
- Experience Scope related-but-distinct (Ant Design lineage; unmodified Ant Design theming on other Alipay pages remains unproven) (19)
- Experience Audience: no-invented-personas / stakeholder-group / not-an-official-classification / observable-work / no-inferred-workflow (34)
- Distinctive extra readings (Compact / Small visual-character of recorded 14px body and 2px search/action geometry; developer-platform layer rather than consumer-wallet theme; `#1890FF` not `#1677FF`; 2px vs 8px as distinct recorded surfaces) (46)
- Scope ecosystem-expression (Open Platform as one public developer-facing expression of the Alipay ecosystem) (21)
- numbered Principles 1–4 including *UI implication* notes (50)
- capture-bound grouping of source §7 Do’s and harvested geometry (57)
- Avoid list (66)
- Semantic unmerged-role (79)
- Semantic token-note / evidence-domain register split (81)
- Spacing no-invented-scale / measurements-stay-with-components (99)
- Shape local-geometry (108)
- Elevation not-a-general-ladder (114)
- Motion Ant-motion-not-evidence (120)
- Font evidence-class application (130)
- Family font-use boundary (146)
- Type-role ratio-versus-size-local / not-converted-into-a-different-unit (152)
- Assets Google-favicon identity-not-captured (165)
- Capture-record graph-not-adopted preservation (172)
- Capture-record unresolved-rather-than-imported (174)
- Capture-record prior-reference / machine-component readings (176)
- Developer action unmerged-field (197)
- Search input no-focus-ring-inferred (220)
- Search input unmerged-field / generic Focus not `focus-visible` (221)
- Developer tool card unmerged-field (248)
- Top navigation item Use not-a-tab (260)
- Top navigation item field-note not-a-tab / unmerged-field (262)
- Top navigation item captured-variant additional observed (273)
- Footer link row Use type-not-invented (283)
- Footer link row unmerged-field (285)
- Layout measurement-boundary / limited-to / not-generalized (301)
- Content developer-oriented (306)
- Content citation-character / voice-application / context table (310)
- Content no-synthetic-sample (318)
