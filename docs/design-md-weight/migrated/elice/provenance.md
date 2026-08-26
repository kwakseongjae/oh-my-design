# Elice provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration of `web/references/elice/DESIGN.md`. The canonical source remains that file until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | elice |
| name | Elice |
| display_name_kr | 엘리스 |
| country | KR |
| category | education |
| homepage | https://elice.io |
| primary_color | `#7353ea` |
| logo | favicon `https://www.google.com/s2/favicons?domain=elice.io&sz=128` (third-party favicon proxy, not a brand-published asset) |
| omd format (source) | 0.1 |
| tokens.source | live-extract |
| tokens.extracted | 2026-06-26 |
| components_harvested | true |

Token note from source, verbatim: "Two-surface system. Corporate elice.io runs a monochrome marketing chrome (dark #212121 primary CTA on white, Elice DX Neolli display font) with a violet→blue→magenta gradient accent set. The product surface 엘카데미/academy.elice.io uses brand violet #7353ea as the primary action. primary = brand violet #7353ea (product primary action + corporate accent + logo); #524fa1 is the classic deep-indigo brand mark."

## Freshness

| Event | Date |
|---|---|
| verified | 2026-06-26 |
| added | 2026-06-26 |
| surfaces inspected | 2026-06-26 |
| tokens.extracted | 2026-06-26 |

Conflicts unresolved: none (stated by the source footer).

Verified footer, verbatim: "2026-06-26 (omd:add-reference CREATE — Tier 1 live inspect, 3 surfaces)".

## Surfaces and sources

### Tier 1 (live inspect, 2026-06-26, playwright getComputedStyle)

| url | kind | what it established |
|---|---|---|
| https://elice.io/en | corporate marketing | body Pretendard Variable rgb(25,31,40) #191f28 16px/24px; hero/section/stat H3 in "Elice DX Neolli" 40px / weight 500 / line-height 48px / letter-spacing -2.4%; primary CTA "Try Free Trial" bg rgb(33,33,33) #212121 / white / radius 8px / 8px 16px / 14px 600 / 40px; outline "Contact" border 1px solid rgba(33,33,33,0.5); feature card white + 1px #e9ebf0 + 24px radius; tinted card rgba(102,113,126,0.04) 16px radius 32px padding; recruiting badge bg rgb(223,235,224) #dfebe0 text rgb(27,94,32) #1b5e20 4px/11px; box-shadow none across surfaces |
| https://academy.elice.io | product (엘카데미 LXP) | body Pretendard rgb(34,34,34) #222222 on rgb(240,241,243) #f0f1f3; primary "로그인" bg rgb(115,83,234) #7353ea / white / 8px radius / 40px; soft "회원가입" bg rgb(233,235,240) #e9ebf0 / #222222; active nav "탐색" bg rgba(115,83,234,0.08) 4px radius; link rgb(115,83,234) #7353ea; deep-indigo text rgb(82,79,161) #524fa1 (dominant accent); success rgb(0,171,83) #00ab53; coral rgb(250,70,106) #fa466a; light violet rgb(120,117,200) #7875c8 |
| https://accounts.elice.io | account | underline auth inputs Email/Password, color rgb(25,31,40) #191f28, padding 16px 12px, 14px, height 52px |
| https://github.com/elicer | official org | brand-owned GitHub organization; avatar fetched 1558B. No token data |

### Tier 2 (no usable record)

- getdesign.md/elice — SPA shell, no token data returned
- styles.refero.design/?q=elice — search query echoed, no Elice style listed

## Evidence classes recorded by the source

| Layer | Class the source assigns it |
|---|---|
| §1–§9 token, type, component, shadow values | Tier 1 live inspect, 2026-06-26, via `getComputedStyle` |
| §10 voice samples (three) | verbatim from the live surfaces (corporate hero, section heading, product page title) |
| §11 brand narrative — 엘리스그룹 (Elice Group), AI Full Stack positioning across 엘카데미 (LXP), Elice AX, Elice Cloud | "widely documented public facts and claims observed on the live corporate site (\"AI Full Stack Company\" page title, \"Learn, build, and execute\" hero)" |
| §11 founding detail — founded ~2015, KAIST roots | "general public knowledge, not directly quoted from a verified Elice statement in this turn" — weaker authority, carried in the portable Scope with that qualification attached |
| §12 interpretive claims — "one continuum: learn, build, execute", "calm corporate / energetic product as a two-surface color split" | "editorial readings connecting Elice's observed design to its positioning, not directly sourced Elice statements" |
| §13 personas | "fictional archetypes"; names "illustrative; they do not refer to real people" |
| §14 states, §15 motion | no capture or publication attribution given in the source ledger |

## Derived-editorial scope carried in the portable body

The table above records only the classes the **source** assigns. The portable body qualifies a
wider set than that as derived editorial implementation inference, each qualifier adjacent to the
passage it covers, and this ledger records the full extent so the two files agree:

| Portable location | Qualified as derived editorial |
|---|---|
| §1 Scope | the "calm corporate, energetic product" reading of the two captured chromes |
| §1 Audience | naming learners / Elice AX / Elice Cloud as the three audience groups |
| §1 Distinctive traits | every trait that describes how a value is used rather than what it is |
| §1 Principles | all 5 items |
| §1 Avoid | all 10 items (8 restate the source's Don'ts, 2 are evidence boundaries) |
| §2 Semantic color | the corporate-fill / product-fill non-interchangeability rule |
| §2 Elevation | reading the shadowless treatment as an intentional "clean, modern, fast" signal |
| §2 Motion | the duration table, the easing role assignments, and the motion + reduced-motion rules |
| §3 Type roles | the four typographic readings |
| §4 Product state contract | all 9 rows |
| §5 Layout & Platforms | the "breathing room over density" reading, and the whole breakpoint / collapsing / touch-target set |
| §6 Content & Locales | the voice characterization, the tone table, and the forbidden register |

Of these, only the §12 pair, the §13 persona label and the §14/§15 attribution absence are the
source's own labelling (rows above). The rest is this migration's evidence-class judgement, which
is why the qualifier is written into the portable body rather than held only here.

## Claim ledger

Every value below is attributed to the surface that established it. `corporate` = https://elice.io/en; `product` = https://academy.elice.io; `account` = https://accounts.elice.io. All 2026-06-26, `live-extract`.

| claim | surface |
|---|---|
| tokens.colors.primary `#7353ea` | product (action fill), corporate (accent/logo) |
| tokens.colors.primary-deep `#524fa1` | product |
| tokens.colors.primary-light `#7875c8` | product |
| tokens.colors.ink `#191f28` | corporate, account |
| tokens.colors.ink-strong `#212121` | corporate |
| tokens.colors.body `#222222` | product |
| tokens.colors.slate `#343e4b` | corporate |
| tokens.colors.muted `#66717e` | corporate |
| tokens.colors.accent-blue `#2f5efb` / accent-sky `#00a6ff` / accent-magenta `#b853ea` | source palette (gradient family; no per-element selector recorded) |
| tokens.colors.success `#00ab53` | product |
| tokens.colors.success-deep `#1b5e20` / success-tint `#dfebe0` | corporate (recruiting badge) |
| tokens.colors.danger `#fa466a` | product |
| tokens.colors.canvas `#ffffff` | corporate |
| tokens.colors.surface `#f0f1f3` | product |
| tokens.colors.hairline `#e9ebf0` | corporate, product, account |
| tokens.typography.family.display / body | corporate (display + body), product (body) |
| tokens.typography.display-hero size/weight/lineHeight/tracking/use | corporate |
| tokens.typography.body size/weight/lineHeight/use | corporate |
| tokens.typography.nav size/weight/lineHeight/use | corporate |
| tokens.typography.nav-alt size/weight/lineHeight/use | product |
| tokens.typography.badge size/weight/use | corporate |
| tokens.spacing xs/sm/md/base/lg/xl/section | source scale (4, 8, 12, 16, 24, 32, 48) |
| tokens.rounded sm/md/lg/xl/pill | source scale (4, 8, 16, 24, 500) |
| tokens.shadow.none | corporate, product (`box-shadow: none`) |
| tokens.components.button-cta-dark.* | corporate |
| tokens.components.button-cta-violet.* | product |
| tokens.components.button-outline.* | corporate |
| tokens.components.button-soft.* | product |
| tokens.components.nav-tab.* | product |
| tokens.components.card-feature.* | corporate |
| tokens.components.card-tinted.* | corporate |
| tokens.components.input-underline.* | account |
| tokens.components.badge-recruiting.* | corporate |

## Omission ledger

| Item | Disposition |
|---|---|
| §13 personas (three named archetypes with ages and cities) | Deleted. The source labels them fictional archetypes with illustrative names. Not promoted to primary tasks or Audience, and not rehosted here — no name, age, city, or segment list is reproduced in either output file. |
| §15 `ease-enter` / `ease-exit` / `ease-standard` curve values | Deleted from the portable body. The source attributes them to no Elice publication and to no 2026-06-26 observation. The role names and their uses survive in Foundations, and the exact curves are named as a gap in Governance. The values as the source carried them: `cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`. |
| §9 Agent Prompt Guide — quick color reference, four example component prompts, seven-step iteration guide | Deleted. Tool-shaped restatement of values that Foundations, Typography, and Components already carry. No slot-less delegation. |
| `[FILL IN]` placeholders | The source carries none; none is emitted. |

## Proof notes

- Source `tokens.source: live-extract`, `components_harvested: true`, three surfaces plus one official org URL.
- Interaction expansions: none recorded. Only default computed styles are promoted per component, with one exception: the product nav item's active treatment (`rgba(115,83,234,0.08)` tint, `#7353ea` label) was computed and is kept.
- Uncaptured hover, press, and focus treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete.
- The `not-applicable` entries in the portable file appear only on the product nav item, and their stated grounds are that control's role, not any absence of observation.
- The catalog logo pointer is a Google favicon proxy URL. It is recorded in both this ledger and the portable Assets section, in both places as a catalog pointer rather than an Elice-published asset.
- Official history, positioning, and the founding detail are narrative context, not token sources.
