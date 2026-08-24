# Toss provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the T2 migration. Canonical source remains `web/references/toss/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | toss |
| name | Toss |
| country | KR |
| category | fintech |
| homepage | https://toss.im |
| primary_color | `#0064ff` |
| logo | favicon `https://static.toss.im/icons/png/4x/icon-toss-logo.png` |
| omd format (source) | 0.1 |
| ds.name | TDS Mobile |
| ds.url | https://tossmini-docs.toss.im/tds-mobile/ |
| ds.type | system |
| ds.description | Toss's public mobile design-system documentation. |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-11 |

Token note from source: TDS Mobile product tokens and toss.im marketing variants are intentionally separate. The catalog `primary_color` `#0064ff` is identity metadata; it is not a substitute for the verified UI primary `#3182f6`.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-11 |
| verification_v2.checked | 2026-07-11 |
| surfaces inspected | 2026-07-11 |
| sources captured | 2026-07-11 |
| tokens.extracted | 2026-07-11 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| marketing-home | marketing | https://toss.im/ | 2026-07-11 |
| marketing-story | marketing | https://toss.im/docs/10290 | 2026-07-11 |
| tds-button | design-system | https://tossmini-docs.toss.im/tds-mobile/components/button/ | 2026-07-11 |
| tds-agreement-v3 | design-system | https://tossmini-docs.toss.im/tds-mobile/components/Agreement/v3/ | 2026-07-11 |
| tds-agreement-v4 | design-system | https://tossmini-docs.toss.im/tds-mobile/components/Agreement/v4/ | 2026-07-11 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| toss-live | product-surface | https://toss.im/ | 2026-07-11 |
| tds-button-live | official-doc | https://tossmini-docs.toss.im/tds-mobile/components/button/ | 2026-07-11 |
| tds-text-field | official-doc | https://tossmini-docs.toss.im/tds-mobile/components/TextField/text-field/ | 2026-07-11 |
| tds-badge | official-doc | https://tossmini-docs.toss.im/tds-mobile/components/badge/ | 2026-07-11 |
| tds-agreement | official-doc | https://tossmini-docs.toss.im/tds-mobile/components/Agreement/v4/ | 2026-07-11 |

### Tier 1

- https://toss.im/
- https://toss.im/docs/10290
- https://tossmini-docs.toss.im/tds-mobile/components/button/
- https://tossmini-docs.toss.im/tds-mobile/components/TextField/text-field/
- https://tossmini-docs.toss.im/tds-mobile/components/badge/

### Tier 2 (no usable record)

- https://getdesign.md/toss produced no importable Toss record
- https://styles.refero.design/?q=Toss produced no importable result through the available fetch path

## Claim ledger

Claims use YAML anchors from the source: `tds_button` = tds-button / tds-button-live / computed-style-and-official-doc / 2026-07-11; `toss_live` = marketing-home / toss-live / computed-style / 2026-07-11; `tds_field` = tds-button / tds-text-field / official-doc / 2026-07-11; `tds_badge_claim` = tds-button / tds-badge / official-doc / 2026-07-11; `tds_agreement_claim` = tds-agreement-v4 / tds-agreement / computed-style-and-official-doc / 2026-07-11.

| claim | surface |
|---|---|
| tokens.colors.primary | tds-button |
| tokens.colors.primary-hover | tds-button |
| tokens.colors.canvas | marketing-home |
| tokens.colors.foreground | marketing-home |
| tokens.colors.body | marketing-home |
| tokens.colors.muted | marketing-home |
| tokens.colors.surface | marketing-home |
| tokens.colors.border | marketing-home |
| tokens.colors.on-primary | tds-button |
| tokens.colors.weak-background | marketing-home |
| tokens.colors.weak-foreground | marketing-home |
| tokens.colors.danger | tds-button |
| tokens.typography.family.sans | tds-button |
| tokens.typography.h1.size / weight / lineHeight | tds-button |
| tokens.typography.h2.size / weight / lineHeight | tds-button |
| tokens.typography.h3.size / weight / lineHeight | tds-button |
| tokens.typography.h4.size / weight / lineHeight | tds-button |
| tokens.typography.body.size / weight / lineHeight | tds-button |
| tokens.typography.body-small.size / weight / lineHeight | tds-button |
| tokens.spacing.xs / sm / md / lg / xl / xxl | tds-button |
| tokens.rounded.sm / md | tds-button |
| tokens.rounded.button-small / button-medium / button-large / button-xlarge | tds-button |
| tokens.components.tds-button.* | tds-button |
| tokens.components.text-field.* | tds-button (source_id tds-text-field) |
| tokens.components.badge.* | tds-button (source_id tds-badge) |
| tokens.components.agreement.* | tds-agreement-v4 |
| tokens.components.marketing-primary.* | marketing-home |
| tokens.components.marketing-dark.* | marketing-home |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- Surface split: TDS Mobile xlarge uses 56px height and 16px radius; `toss.im` marketing actions observed here use 40–46px height and 7px radius.
- Uncaptured marketing-CTA hover treatments are omitted. Capture absence is not a `not-applicable` reason. Hover on both marketing CTAs remains `applicable` with treatment omitted. Loading, error, and success on those CTAs are `not-applicable` by navigation-action meaning, not because hover was unclaimed. State coverage is not claimed complete.
- Generic `focus` on the TDS text field is an additional observed named state, not a `focus-visible` treatment. TDS button keyboard focus is documented without a captured visual treatment and is not assigned as a `focus-visible` color.
- TDS Mobile Badge has no interactive-kind evidence in the sense of an action control; kind is `non-interactive` and a state-applicability map was omitted.
- TDS Button error/success follow product role: danger is a semantic color variant, not an error state of the action control; success is not a distinct button state. Loading and disabled remain documented applicable states.
- TDS Text Field loading/success follow product role (text entry with help or error text). Error and disabled remain documented applicable states.
- TDS Agreement loading/error/success follow terms-selection meaning (checked versus unchecked), not primitive-toggle bulk assignment.
- Source §13 labeled three first-party product contexts, not invented demographic personas. They were absorbed as primary-tasks, not as named personas. No fictional demographic segments were recorded here and none were moved to a persona sidecar.
- Official product-design writing (`Easy to answer`, `Value first, cost later`) is voice and narrative context in the portable file; it is not a motion or color token source.
- No canonical motion duration or easing is promoted. Any exact curve or duration remains a local extension until verified from an official component source.
