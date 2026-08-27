# Elastic UI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, evidence classes, and disposition evidence for the Elastic UI migration candidate. Canonical source remains `web/references/elastic/DESIGN.md` until catalog adoption.

Source `DESIGN.md` SHA-256: `4aa67cc6729e652561b0e2c5a72dbfef2adb524190140395d9ba30d90d06b384`
Canonical sibling `.verification.md` SHA-256: `822acb0a56cb18be426d0afc4e96aabbe05923914c45501774880858ae0d9fb0`
Research ledger `_research.md` SHA-256: `07064046930e9182e098a573be700595264ae17db40cb840461e62fbd30faf7d`

## Identity

| Field | Value |
|---|---|
| id | elastic |
| name | Elastic UI |
| country | US |
| category | developer-tools |
| homepage | https://eui.elastic.co/ |
| primary_color | `#0b64dd` |
| logo | type `favicon`, slug `https://www.google.com/s2/favicons?domain=eui.elastic.co&sz=128` |
| verified | 2026-07-13 |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The logo record is a third-party favicon-service capture of the EUI documentation domain, not an Elastic-distributed brand asset. The portable contract carries that boundary without the URL; the exact URL lives only in this row.

Token note from source: *“Only values observed on the supplied public EUI capture are UI tokens. Elastic corporate history, product-brand writing, EUI documentation, and declared-only fonts remain separate evidence domains.”*

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none. Structured `verification_v2.conflicts` is `[]`; the canonical footer uses the repository-standard exact value `none`.

## Verification v2

| Field | Value |
|---|---|
| schema | 2 |
| checked | 2026-07-13 |

### Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-eui-home | https://eui.elastic.co/ | 2026-07-13 |
| components | public-eui-components-docs | https://eui.elastic.co/docs/components/ | 2026-07-13 |
| card-docs | public-eui-card-docs | https://eui.elastic.co/docs/components/containers/card/index.html | 2026-07-13 |

### Sources

| id | kind | url | captured |
|---|---|---|---|
| eui-home-live | product-surface | https://eui.elastic.co/ | 2026-07-13 |
| eui-components-live | official-doc | https://eui.elastic.co/docs/components/ | 2026-07-13 |
| eui-card-live | official-doc | https://eui.elastic.co/docs/components/containers/card/index.html | 2026-07-13 |
| eui-font-settings | official-doc | https://eui.elastic.co/docs/getting-started/theming/tokens/typography/font-settings/ | 2026-07-13 |
| eui-theme-provider | official-doc | https://eui.elastic.co/docs/getting-started/theming/theme-provider/ | 2026-07-13 |
| elastic-history | brand-asset | https://www.elastic.co/about/press/elasticsearch-changes-name-to-elastic-to-reflect-wide-adoption-beyond-search | 2026-07-13 |
| elastic-design-hierarchy | brand-asset | https://www.elastic.co/blog/redesigning-product-logos-and-icons-while-building-a-design-hierarchy-at-elastic | 2026-07-13 |
| eui-elastic-license | license | https://github.com/elastic/eui/blob/main/licenses/ELASTIC-LICENSE-2.0.md | 2026-07-13 |

Additional sources named in the research ledger but not in `verification_v2.sources`:

| url | class | use / boundary |
|---|---|---|
| https://eui.elastic.co/v101.4.0/docs/getting-started/setup/ | official EUI setup documentation | Describes EUI theming and local Inter embedding guidance; not a claim that Elastic owns Inter. |
| https://github.com/elastic/eui/blob/main/licenses/SSPL-LICENSE.md | official EUI repository license | SSPL v1 is the other license named in the EUI documentation. |
| https://www.elastic.co/celebrating-lucene | company context | Elastic’s connection to Lucene contributors and the company’s early timeline; not promoted into UI metrics or component facts. |

### Tier 1

- https://eui.elastic.co/
- https://eui.elastic.co/docs/components/
- https://eui.elastic.co/docs/components/containers/card/index.html
- https://eui.elastic.co/docs/getting-started/theming/tokens/typography/font-settings/

### Tier 2 (no usable observation)

- https://getdesign.md/elastic — attempted 2026-07-13; the built-in web reader returned an internal error. No token, component, absence assertion, or conflict input.
- https://styles.refero.design/?q=Elastic — attempted 2026-07-13; the built-in web reader returned an internal error. No token, component, absence assertion, or conflict input.

## Claim ledger

Claims use YAML anchors from the source: `home` = home / eui-home-live / computed-style / 2026-07-13; `components` = components / eui-components-live / computed-style / 2026-07-13; `card-docs` = card-docs / eui-card-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.foreground | home |
| tokens.colors.foreground-strong | home |
| tokens.colors.action | home |
| tokens.colors.action-subtle | components |
| tokens.colors.canvas | home |
| tokens.colors.hairline | components |
| tokens.colors.surface-subdued | card-docs |
| tokens.typography.family.ui | home / eui-font-settings, method `computed-style-and-official-token-doc` |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.heading.size / weight / lineHeight / use | card-docs |
| tokens.typography.control.size / weight / lineHeight / use | components |
| tokens.spacing.xs / sm / md / xl | home |
| tokens.spacing.lg | components |
| tokens.spacing.xxl | card-docs |
| tokens.rounded.control | components |
| tokens.components.docs-sidebar-category.type / bg / fg / radius / padding / font / use | components |

## Exact token record (source YAML)

| Path | Value |
|---|---|
| colors.foreground | `#1d2a3e` |
| colors.foreground-strong | `#111c2c` |
| colors.action | `#0b64dd` |
| colors.action-subtle | `#d9e8ff` |
| colors.canvas | `#ffffff` |
| colors.hairline | `#cad3e2` |
| colors.surface-subdued | `#ecf1f9` |
| typography.family.ui | Inter |
| typography.body | size 14, weight 400, lineHeight 16, use “Repeated public EUI home and component-documentation text” |
| typography.heading | size 20.0004, weight 600, lineHeight 24.0002, use “Observed EUI card title on the public card documentation route” |
| typography.control | size 14, weight 450, lineHeight 20.0004, use “Observed EUI component-documentation control samples” |
| spacing | xs 4, sm 6, md 8, lg 12, xl 16, xxl 24 |
| rounded.control | 4 |
| components.docs-sidebar-category | type `listItem`, bg `transparent`, fg `#1d2a3e`, radius 0, padding `0px`, font `14px/500/16px Inter`, use “Static public component-docs sidebar category row; selector surface-2::li” |

Sizes and line heights are recorded as unitless numbers in the source YAML and as `px` figures in the source typography table; both forms are preserved. No unitless ratio line-height exists in this source, so none was converted.

## Capture selectors and raw samples (canonical sibling)

From `web/references/elastic/.verification.md`. Retained here as evidence pointers; they are not portable contract values.

| Pointer | Raw sample |
|---|---|
| `home::body` | color `rgb(29, 42, 62)`, font family `Inter, "system-ui", Helvetica, Arial, sans-serif`, 14px / 400 / 16px |
| `home::[data-omd-capture="14"]` | background `rgb(11, 100, 221)`, color `rgb(255, 255, 255)`, radius 4px, padding `0px 24px`, 14px / 450 / 24.0002px |
| `surface-2::[data-omd-capture="9"]` | background `rgb(255, 255, 255)`, border `rgb(202, 211, 226)` at 1px, radius 4px, padding `8px 7px 8px 31.5px` |
| `surface-2::li` | color `rgb(29, 42, 62)`, radius 0px, padding 0px, 14px / 500 / 16px — the promoted Sidebar Category Row; high confidence, 17 occurrences |
| `surface-3::[data-omd-capture="80"]` | background `rgb(201, 243, 227)`, color `rgb(9, 114, 77)`, radius 4px, padding `0px 12px`, height 40px, static `aria-checked=true` |
| `surface-3::[data-omd-capture="84"]` | background `rgb(236, 241, 249)`, color `rgb(121, 142, 175)`, radius 4px, padding `0px 12px`, height 40px, `disabled=true` |
| `surface-3` subdued card sample | background `rgb(236, 241, 249)`, color `rgb(121, 142, 175)`, radius 4px, padding 16px |

The `surface-3` toggle samples (`80`, `82`, `84`) record static checked, unchecked, and disabled geometry. The sibling resolution is “Retained here only; no toggle token.” They are not promoted into the portable contract, and their exact values appear only in this ledger.

## Font resolution (canonical sibling)

| Family / claim | Computed surface use | FontFaceSet / source corroboration | Resolution |
|---|---|---|---|
| Inter | 810 visible uses across all three supplied routes; high confidence | Loaded; 7 `fonts.gstatic.com` source URLs in the packet. EUI’s official font-settings page defines the UI stack beginning with Inter. | Promoted as `tokens.typography.family.ui`. |
| Roboto Mono | Zero visible uses | Declared through 12 source URLs; medium confidence, but no visible role. | Declared-only; omitted from tokens. |
| system-ui, Helvetica, Arial | Fallbacks in the Inter computed stack | No separately loaded brand-family claim. | Fallback chain only; never substituted for Inter. |

## Narrative and specification evidence (not interface tokens)

| Source | Evidence class | Facts used | Boundary |
|---|---|---|---|
| https://www.elastic.co/about/press/elasticsearch-changes-name-to-elastic-to-reflect-wide-adoption-beyond-search | Official company history | Elasticsearch launched in 2010; Elastic was founded in 2012; the company renamed from Elasticsearch to Elastic in 2015 as its scope broadened. | Narrative context only; supplies no EUI UI token. |
| https://www.elastic.co/blog/redesigning-product-logos-and-icons-while-building-a-design-hierarchy-at-elastic | Official design writing | Elastic describes an iterative, hierarchical redesign for a multi-product environment. | Brand/design context only; marketing logo/color treatment is not copied into EUI tokens. |
| https://eui.elastic.co/docs/getting-started/theming/tokens/typography/font-settings/ | Official EUI documentation | `euiTheme.font.family` begins with Inter and applies to the UI base family. | Supports the EUI font-family fact alongside the supplied live capture; does not make EUI a record of Elastic corporate typography. |
| https://eui.elastic.co/docs/getting-started/theming/theme-provider/ | Official EUI documentation | The current Theme Provider documentation identifies `EUI_THEME_BOREALIS` as the default theme. | Framework-evolution context only; the name does not authorize an unobserved token set. |
| https://github.com/elastic/eui/blob/main/licenses/ELASTIC-LICENSE-2.0.md | Official repository license | Elastic License 2.0 text for the EUI repository. | Applies to EUI software licensing; it is not an Inter font license. |

## Proof notes

- Evidence packet: `artifacts/reference-evidence/elastic.json`. Packet scope: 3 public EUI surfaces, coverage 93, 94 component variants, 3 static observed states, and 0 interaction events.
- `interactionCount: 0`. No hover, focus, pressed, active, disabled, transition, or motion value is published for any component.
- Uncaptured interaction treatments are omitted values. They are not `not-applicable`; applicability follows control meaning, and state coverage is not claimed complete.
- The Sidebar Category Row is promoted as `listItem`, not `button`, because the evidence is an observed `li` row and does not establish button semantics. No interactive kind and no seven-state applicability map is asserted for it in the portable contract; that question is left open rather than decided.
- Both required Tier 2 routes were attempted and returned internal errors. Neither supplies a competing value, so the conflict matrix is empty.
- Public EUI framework/docs, Elastic corporate history, brand/design writing, and declared-only font data are retained in their own domains.
- No fictional persona, demographic, biography, or satisfaction claim exists in the source, and none is introduced here or in the portable contract.
- Derived scope: the portable contract's editorial-inference qualifiers cover the operational-character reading, the contract-boundary choice, the separation of published EUI specification from live computed observation, the treatment of corporate marketing, EUI documentation, and the captured component surfaces as separate evidence domains, the framework/documentation positioning of EUI, the primary-task selection, the identification of the three stakeholder groups and the needs stated for each, the four principles and their UI implications, the application rules and prohibitions, the color role labels, the reading of the cluster mark and product-logo hierarchy as a brand-asset domain apart from the UI values, the spacing/shape/elevation readings including the depth-method and no-shadow-token causality, the motion promotion gate, the font evidence-class split, the condition that Inter is promoted only where the published specification and the live capture agree, the software-versus-font licensing split, the logo record read as an identity pointer and the product logos and functional icons held in the brand-asset domain, the component retention and toggle causality, the component kind judgment, the refusal to generalize the three static observations into tokens, the layout rhythm reading, the documentation-tone reading, and the placement of Elastic marketing, Kibana product UI, and authenticated Elastic-product surfaces outside the contract's scope rather than inside its unresolved list. Everything outside those qualifiers is a measured value, a published Elastic/EUI statement, or a source-recorded boundary.
