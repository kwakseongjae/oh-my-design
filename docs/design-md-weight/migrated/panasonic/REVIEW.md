# panasonic — T2-1 wave-27-form independent review (A/C/D only)

Rulebook v12. F3 (B2a·E2) not judged. Files confirmed with `find` before grep (`DESIGN.md`, `provenance.md`, `migration-log.md`, `audit-log.md`, source `web/references/panasonic/DESIGN.md`, sibling `web/references/panasonic/.verification.md`). Counts: `grep -oF -- <pat> <file> | wc -l` in bash `set +e`; empty pipeline = dest 0 (not zsh `no matches found`).

## Verdict

**PASS**

No A-series key-path loss, unique-fact drop, ungrounded surface, conflict-policy split, stale F2 list, persona-derivative promotion, C2 direction split, sibling-fragment fusion, cross-surface reassignment, or YAML-use truncation found in this pass.

## 1 A1 key paths (YAML `tokens.*` → portable DESIGN)

Every source YAML path is DESIGN dest ≥1 (easywallet trap: same number on another scale does not count).

| path | SRC | DES | PRO |
|---|---:|---:|---:|
| tokens.colors.canvas | 1 | 2 | 1 |
| tokens.colors.foreground | 1 | 3 | 3 |
| tokens.colors.muted | 1 | 2 | 1 |
| tokens.colors.navigation | 1 | 3 | 3 |
| tokens.colors.link | 1 | 2 | 2 |
| tokens.typography.family.ui | 1 | 1 | 1 |
| tokens.typography.body.size / .weight / .lineHeight / .use | 1 | 1/1/1/1 | 1/0/0/0 |
| tokens.typography.navigation.size / .weight / .lineHeight / .use | 1 | 1/1/1/1 | 1/0/0/0 |
| tokens.spacing.xs / sm / md / nav-gap | 1 | 1/1/1/2 | 2/1/1/1 |
| tokens.rounded.square / cookie-control | 1 | 1/1 | 1/2 |
| tokens.components.header-navigation-item.type / .fg / .radius / .margin / .size / .font / .use | 1 | 2/3/2/2/2/2/1 | 1/2/0/0/0/0/0 |
| tokens.components.search-toggle.type / .bg / .fg / .border / .radius / .padding / .size / .font / .states / .use | 1 | 2/2/3/2/2/2/2/2/1/1 | 1/0/2/0/0/0/0/0/0/0 |

Values on those paths (DESIGN): `#f2f2f2` 4, `#1a1a1a` 8, `#666666` 4, `#4d4d4d` 8, `#0041c0` 7, `Noto Sans` 17, `24px` 2, `22.5px` 2, `167px x 23px` 2, `16px x 16px` 3, `0px 26px 0px 0px` 3, `15px / 400 / Noto Sans` 3, `16px / 400 / Noto Sans` 3, `tokens.spacing.xs: 4` 1, `tokens.spacing.sm: 12` 1, `tokens.spacing.md: 20` 1, `tokens.spacing.nav-gap: 26` 2, `square: 0` 2, `cookie-control: 2` 2. A1a: lineHeight kept as `24px` / `22.5px` (not rewritten as ratio). A1b: `type: listItem` SRC 1 / DES 2; `Primitive type: \`listItem\`` DES 1; `type: button` SRC 1 / DES 1; `Primitive type: \`button\`` DES 1. A1c: `ds.type` is not a source field; `live-extract` DES 0 / PRO 2; `components_harvested` DES 0 / PRO 2 (sidecar).

Same-number unmerge in body: body `tokens.typography.body.size: 16` ≠ search-toggle `16px x 16px` ≠ search-toggle font `16px / 400 / Noto Sans`. Same-hex unmerge: `#1a1a1a` foreground ≠ search-toggle `fg`; `#4d4d4d` navigation ≠ header-nav `fg`; `#0041c0` `tokens.colors.link` ≠ catalog `primary_color` as a semantic product action. `tokens.rounded.cookie-control: 2` is on its own path, not absorbed into another scale's `2`.

## 2 Unique facts

`1918` SRC 2 / DES 3. `1955` 1/2. `formulated in 2022` 1/1. `Konosuke Matsushita` 2/2. `Matsushita Electric Housewares Manufacturing Works` 1/1. `Future Craft` 5/7. `Panasonic GREEN IMPACT` 2/2. `creating with care, consideration, and attention to future generations` 1/1. `509 loaded/high-confidence first-family uses` 1/1. `swiper-icons` 2/3. `Noto Sands` 2/4. `SIL Open Font License 1.1` 1/1. `speaker intended for export markets` 1/1. `enhancing quality of life worldwide` 1/1. `building lasting customer connections with consistency, transparency, and a long-term view` 1/2. `fairness and honesty` 1/1. `considerate, clear, and future-facing` 1/2. `seeking truth, and transforming the future` 1/1. Voice samples byte-exact, each SRC 1 / DES 1: `A clearer way to understand the next step.` / `Technology shaped around the life it supports.` / `Built with attention to what changes next.` Illustrative limiter `not official Panasonic copy` 3/3. `パナソニック` 2/2.

## 3 Constraints / motion

§15 `No duration scale, easing curve, transition, or interactive motion state was captured` SRC 1 / DES 1. `no Panasonic motion token is published here` 1/1. Full future-work sentence SRC 1 / DES 1. `cubic-bezier` DES 0. `ease-in` / `ease-out` DES 0. `8px` / `14px` / `18px` / `30px` / `32px` / `40px` / `48px` / `64px` / `122px` / `12.992` / `19.488` all DES 0 (and SRC 0). §6 `No canonical shadow token is promoted` 1/1. `box-shadow: none` SRC 1 / DES 2. §7 Don't `zero-interaction packet` 1/2. `fictional shared component library` 1/1. §14 ten guidance rows kept (Empty, Loading×2, Error×3, Success, Skeleton×2, Disabled), including `Never use the limited home-surface blue as an unverified error or recovery semantic` 1/1. §5 `4px, 12px, 20px, and 26px` 1/2. `The 26px value is specifically the observed right margin` 1/2. `checkout, account, or device-control patterns` 1/1. §9 Not included `consumer product sites, authenticated experiences, checkout, support flows` 1/1.

## 4 Ungrounded surface

Home-only vs three-surface split follows the source: canvas `Home body background on the supplied public Holdings surface` DES 1; link `Limited home-surface link treatment observed in the supplied packet` DES 1 and `A limited \`#0041c0\` link color on the captured home surface` (Scope/traits); body YAML use names the captured Holdings home surface; muted `all three supplied surfaces` DES 1 (source §2); navigation `public Holding surfaces` DES 1 (source typo kept). Cookie `2px` stays a cookie-control exception, not recast onto about/technology. `mobile app` SRC 0 / DES 0. `native application` 0/0. `back-office` 0/0. `1440` 0/0. `native-client` 0/0. `storefront` 0/0. `iOS` / `Android` 0/0. Named gaps restate source omissions (`native-product palette` SRC 1 / DES 2; `pill scale` 1/2), not new domains.

## 5 Conflict policy

Source `conflicts: []`. Sibling matrix all Retain Tier 1 / Unresolved none. One policy: YAML token-set over sibling extras; sibling-only metrics stay in provenance ledger. No mix of merge-one / drop-one on the same-hex dual roles.

## 6 F2 list after F3

F3 folded pale-gray canvas into `:11` and same-hex dual-role unmerge into `:75` (occurrence count 24 unchanged). Portable `derived editorial implementation inference` DES 24, `not Panasonic-authored` DES 24, `separately published UI specification` DES 24. Log `24=24` LOG 2. Dest rows F3 rewrote still match: `#1a1a1a` DES 8, `#4d4d4d` DES 8, `24px` DES 2, `22.5px` DES 2, `4px, 12px, 20px, and 26px` DES 2, `zero-interaction packet` DES 2, `lasting customer connections` DES 2, `Future Craft` DES 7 / PRO 2, `no native product UI is inferred` DES 1 / PRO 0, `visible first-family use count 10` DES 0 / PRO 1, `Noto Sans` DES 17, B3 five-kind phrase DES 1.

## 7 Deleted persona derivatives (D2 / D2a)

Source §13 three evidence-bounded archetypes (no name/age/city). Portable body does not carry those role labels or motivations. Counts below are DESIGN / provenance; this review file mentions the needles (E2d: absence is claimed of DESIGN/provenance, not of this file).

| needle | SRC | DES | PRO | LOG |
|---|---:|---:|---:|---:|
| Household or individual | 1 | 0 | 0 | 1 |
| Business customer or partner | 1 | 0 | 0 | 1 |
| Society-facing | 1 | 0 | 0 | 1 |
| People looking for products and services | 1 | 0 | 0 | 0 |
| intelligible route | 1 | 0 | 0 | 0 |
| Organizations need to understand Panasonic | 1 | 0 | 0 | 0 |
| operating-company | 1 | 0 | 0 | 0 |
| Employees, customers, business partners, shareholders | 1 | 0 | 0 | 0 |
| generic green styling | 1 | 0 | 0 | 0 |
| purchase or account flow | 1 | 0 | 0 | 0 |

Primary tasks name the three captured Holdings URLs and the two YAML controls, not those needs. Audience uses source §11 `building lasting customer connections` (DES 2) and the source's own drop disclaimer `evidence-bounded stakeholder archetypes` (DES 1). Principle 4 `customers, partners, and stakeholders` is source §12, not §13.

## 8 C2

Header Navigation Item is read as a destination list item. Search Toggle is read as a search-open toggle. Both close loading and error (and success). `| loading | applicable |` DES 0. `| error | applicable |` DES 0. `| loading | not-applicable |` DES 2. `| error | not-applicable |` DES 2. `commits no operation in place` DES 2. `not captured` as a not-applicable reason DES 0. YAML `type: button` kept on the search control (A1b); the toggle reading is the C2 role, not a primitive rewrite. `Interactive control` DES 1 is the header `focus-visible` reason, not a bulk L/E/S open.

## 9 Sibling fusion

`14px radius with 16px padding` SRC 0 / SIB 0 / DES 0. `measures 1440px` all 0. `2px radius with` all 0. `16px / 400 / 24px` SRC 0 / SIB 2 / DES 0 (sibling search-toggle extra line-height; YAML font stays `16px / 400 / Noto Sans` DES 3). `15px / 400 / 22.5px` SRC 0 / SIB 2 / DES 0. `12.992` SRC 0 / SIB 1 / DES 0 / PRO 1. `19.488px` 0/1/0/1. `122px x 40px` 0/1/0/1. `12px 30px` 0/1/0/1. `rgb(204, 204, 204)` 0/1/0/1. `4px 12px 0px 0px` 0/1/0/1. `18px` 0/1/0/1. `ambient solutions` 0/1/0/1. `Basic Management Objective` 0/1/0/1. `coverage 71` 0/1/0/1. `40 component variants` 0/1/0/1. Portable promotion of those fragments: 0.

## 10 Surface transfer

Link `#0041c0` stays home-surface. Canvas `#f2f2f2` stays home body. Body 16/400/24px stays the captured home surface (YAML long use). Header 15/400/22.5px stays "across the supplied public surfaces" (source YAML use). Muted `#666666` stays "all three supplied surfaces" (source §2). Cookie `2px` is not moved onto about.html or technology.html. About/technology language in Layout is the source's own rhythm sentence, not a reassignment of home captures.

## 11 YAML use ↔ § table use

Long YAML `use` and short § table boundary both kept.

| record | SRC | DES |
|---|---:|---:|
| Observed default body treatment on the captured Panasonic Holdings home surface | 1 | 1 |
| observed default body treatment on the public home surface | 1 | 1 |
| Observed top-level header navigation treatment across the supplied public surfaces | 1 | 1 |
| observed top-level header navigation across the supplied surfaces | 1 | 1 |
| Public Holdings header .holdings-header__nav__list__item.l2 row | 1 | 1 |
| Public Holdings header .holdings-header__search__tglbtn button | 1 | 1 |
| Default static baseline observed; no interactive state was captured. | 2 | 2 |

No kakaot-style cut to the shorter record.

## Notes (not FAIL)

- Source §1 closer `Those are verified corporate and design narratives` SRC 1 / DES 0 became `These are…` DES 1. Source evidence-class prose, not brand-issued copy (A5 needle list is the nine issued strings above, all DES ≥1).
- Evidence-class cell `Unresolved` is written `Unresolved in this pass` (logged; `Noto Sands` exclusion unchanged).
- §8 prompt-only phrasing (`Do not invent state styling`, `16px square search trigger`) DES 0; hex/type/gap values already live in Foundations/Components (A3).

REVIEW_DONE panasonic PASS
