# Wanted provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/wanted/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | wanted |
| name | Wanted |
| country | KR |
| category | productivity |
| homepage | https://www.wanted.co.kr |
| primary_color | `#0066ff` |
| logo | favicon `https://www.google.com/s2/favicons?domain=wanted.co.kr&sz=256` |
| omd format (source) | 0.1 |
| ds.name | Wanted Montage |
| ds.url | https://montage.wanted.co.kr/ |
| ds.type | system |
| ds.description | Wanted's official product-experience design system with foundations, cross-platform components, UI kits, utilities, and usage guidance. |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-12 |

Catalog `primary_color` `#0066ff` is multi-destination (E2a): this identity ledger, Distinctive interactive accent, capture-bound Reserve `#0066ff`, Foundations Primary action, header account action Text, and Scope quieter/denser (under B2a). On-primary notes the header action uses that hex on transparent rather than as a filled on-primary pair (A4 field identity). Catalog homepage `https://www.wanted.co.kr` is dual this identity ledger + portable Experience Scope home URL, and also Surfaces/Sources/Tier 1 (E2a).

Catalog logo metadata is a Google favicon lookup, not a captured first-party mark. Triple destination (E2a): this identity ledger, portable Typography & Assets boundary sentence, and Named gaps (`first-party logo mark beyond catalog Google-favicon identity`).

YAML `ds.name` is Wanted Montage (`https://montage.wanted.co.kr/`). YAML `ds.type` is `system`. YAML `ds.description`: Wanted's official product-experience design system with foundations, cross-platform components, UI kits, utilities, and usage guidance. Dual destination (E2a): this identity ledger and portable Experience Scope (name/URL; description as the official product-experience DS sentence).

Token note from source: Six-surface current capture plus official Montage docs. Pretendard Variable is the visible UI family. Wanted Sans Variable and Pretendard JP Variable were declared but had zero visible use in the capture and are not promoted as UI tokens.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-12 |
| verification_v2.checked | 2026-07-12 |
| surfaces inspected | 2026-07-12 |
| sources captured | 2026-07-12 |
| tokens.extracted | 2026-07-12 |

Conflicts unresolved: none.

Verified note from source: 2026-07-12 (omd:migrate).

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | product-home | https://www.wanted.co.kr/ | 2026-07-12 |
| jobs | product-directory | https://www.wanted.co.kr/wdlist/518 | 2026-07-12 |
| company | product-service | https://www.wanted.co.kr/company | 2026-07-12 |
| montage | official-design-system | https://montage.wanted.co.kr/ | 2026-07-12 |
| foundations | official-design-system | https://montage.wanted.co.kr/docs/foundations | 2026-07-12 |

Verification surfaces/sources and footer Tier 1 URLs are dual-destination: portable Experience Scope and this ledger (E2a).

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://www.wanted.co.kr/ | 2026-07-12 |
| jobs-live | product-surface | https://www.wanted.co.kr/wdlist/518 | 2026-07-12 |
| company-live | product-surface | https://www.wanted.co.kr/company | 2026-07-12 |
| montage-live | official-doc | https://montage.wanted.co.kr/ | 2026-07-12 |
| foundations-live | official-doc | https://montage.wanted.co.kr/docs/foundations | 2026-07-12 |
| typography-doc | official-doc | https://montage.wanted.co.kr/docs/utilities/web-utilities/typography-style | 2026-07-12 |
| text-button-doc | official-doc | https://montage.wanted.co.kr/docs/components/actions/text-button/design | 2026-07-12 |

### Tier 1

- https://www.wanted.co.kr/
- https://www.wanted.co.kr/wdlist/518
- https://www.wanted.co.kr/company
- https://montage.wanted.co.kr/
- https://montage.wanted.co.kr/docs/foundations
- https://montage.wanted.co.kr/docs/utilities/web-utilities/typography-style
- https://montage.wanted.co.kr/docs/components/actions/text-button/design

### Tier 2 (no usable record)

- https://getdesign.md/wanted (attempted; unavailable as positive evidence)
- https://styles.refero.design search (attempted; unavailable as positive evidence)

### Narrative (not interface tokens)

- Montage official product-experience design system: https://montage.wanted.co.kr/
- Montage foundations: https://montage.wanted.co.kr/docs/foundations
- Montage typography utilities: https://montage.wanted.co.kr/docs/utilities/web-utilities/typography-style
- Montage text-button design: https://montage.wanted.co.kr/docs/components/actions/text-button/design

Official Montage framing (extensibility, consistency, efficiency) and the Wanted service idea that working people should be able to work more like themselves are narrative/system context. They do not flatten product and Montage captures into one interchangeable token set.

Source §11 unique Brand-narrative propositions restored in portable Experience Scope under adjacent complete B2a (derived editorial, not first-party): “career decisions require both emotional confidence and reliable comparison”; “Typography stays neutral and highly legible so role and company evidence can lead.”

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / live-inspect / 2026-07-12; `jobs` = jobs / jobs-live / live-inspect / 2026-07-12; `montage` = montage / montage-live / live-inspect / 2026-07-12.

| claim | surface |
|---|---|
| tokens.colors.primary | home |
| tokens.colors.canvas | home |
| tokens.colors.heading | home |
| tokens.colors.body | home |
| tokens.colors.secondary | jobs |
| tokens.colors.subtle-surface | home |
| tokens.colors.hairline | jobs |
| tokens.colors.on-primary | home |
| tokens.typography.family.ui | home |
| tokens.typography.heading.size / weight / lineHeight / tracking / use | jobs |
| tokens.typography.subtitle.size / weight / lineHeight / tracking / use | jobs |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.caption.size / weight / lineHeight / tracking / use | jobs |
| tokens.spacing.xs | jobs |
| tokens.spacing.sm | home |
| tokens.spacing.md | jobs |
| tokens.spacing.lg | home |
| tokens.spacing.xl | home |
| tokens.rounded.control | home |
| tokens.rounded.card | jobs |
| tokens.rounded.menu | montage |
| tokens.rounded.full | home |
| tokens.shadow.menu | montage |
| tokens.components.header-action.* | home |
| tokens.components.filter-button.* | jobs |
| tokens.components.mini-job-card.* | home |
| tokens.components.job-card.* | jobs |
| tokens.components.search-dialog.* | home |
| tokens.components.montage-menu.* | montage |

## Capture selectors

The source does not record `data-omd-capture` pointers. None are invented.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Default product buttons and filters captured without a safe hover/focus expansion
- Search dialog `dialog-open` captured on four product surfaces; Montage menu `dialog-open` captured on Montage pages
- Uncaptured hover/focus/disabled/loading/error/success/empty/application-completion treatments are omitted. They are not `not-applicable`; applicability follows control meaning. State coverage is not claimed complete
- Header account loading/error/success applicability is omitted: source names the control only as current product header account action; exact selector/label/destination/request/outcome is unresolved (C2). Search-dialog error applicability is omitted: exact query-validation semantics are unresolved; source unobserved/unpromoted error is not a `not-applicable` reason (C1). Search-dialog loading/success remain role-based on query-entry (the field takes a query; completing a search is not a success confirmation on the input)
- Mini job card and directory job card have no interactive-kind evidence; kind and state-applicability maps are omitted (C4)
- Montage menu C4: `Type: dialog` and verified geometry/shadow/use/dialog-open are kept; `Kind` and the state-applicability map are omitted. Dialog internals being interactive is not evidence that the dialog surface itself has hover, disabled, or loading
- YAML `ds.type: system` is identity metadata for Wanted Montage
- §13 names public task contexts, not biographical personas. Those contexts are absorbed as Experience primary tasks. No fictional demographics are re-hosted here
- Catalog `primary_color` `#0066ff` is identity + Distinctive + capture-bound + Foundations Primary + header account Text + Scope quieter/denser (E2a)
- Catalog Google favicon is triple provenance identity + portable Typography & Assets boundary sentence + Named gaps first-party logo (E2a)
- YAML `ds` name/url/description is dual provenance identity + portable Experience Scope (E2a)
- Verification surfaces/sources and footer Tier 1 URLs are dual portable Experience Scope + this ledger (E2a)
- Campaign-only Wanted Sans and native-app overrides remain source **Unresolved claim**, not a capture-range relabel to `Outside this capture`

## Derived inventory

Interpretive claims retained in portable body, each with adjacent complete B2a (`derived editorial implementation inference` / `not Wanted-authored or a separately published UI specification`):

- Scope capture-bound coverage (not a proxy for native-app / campaign-only type / uncaptured apply, form-validation, or toast)
- Scope quieter/denser and signature-unit reading
- Scope Montage→product evidence-boundary / not interchangeable evidence
- Scope Brand-narrative paragraph (career decisions require both emotional confidence and reliable comparison; Typography stays neutral and highly legible so role and company evidence can lead)
- Audience no-invented-personas / observable-work (D2 source task-context sentences stay unqualified)
- Principles 1–4 (the whole numbered list; not 1–2 first-party)
- capture-bound application list
- Avoid
- Semantic color unpromoted-role (old marketing orange/pink/sky/violet, semantic error/success/warning, `#f7f7f8`)
- Spacing not-a-strict-mathematical-scale
- Shape not-a-universal-radius / keep local geometry distinct
- Elevation no generic modal shadow promoted
- Font evidence Official-distributed-asset license-check
- Family font-use boundary
- Type-role Montage scale as system context not machine tokens
- Assets Google-favicon identity not a first-party mark
- Capture-record omitted-rather-than-synthesized / no filled apply CTA, segmented control, form validation, toast, or native navigation without a matching sample
- Layout application (grid/flat card, 12px vs 8px vs 16px, dense metadata, product≠Montage)
- Layout desktop-capture measurements not cross-viewport specifications
- Content application (product copy / search-filter-job-detail / employer documentation / direct labels / no synthetic voice samples)

Left unqualified as first-party or observed-technical, not as a reconstruction-boundary exemption: Wanted service idea that working people should be able to work more like themselves; surface/source URLs including Wanted Montage name/URL and YAML `ds.description` as official DS fact; Montage is official product-experience DS; Pretendard Variable 1,575 uses; declared-only Wanted Sans Variable / Pretendard JP Variable existence; YAML `ds.type: system`; token measurements and component anatomy; B3 five-kind gate; Core C1/C2/C3 capture-record policy and per-control C2 omission / C4 kind-omission notes; job-filter loading/error/success role map; Governance; Named gaps inventory.
