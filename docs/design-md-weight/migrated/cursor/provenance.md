# Cursor provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, selectors, and proof for the T2-1 Wave 18 migration candidate. Canonical source remains `web/references/cursor/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | cursor |
| name | Cursor |
| country | US |
| category | developer-tools |
| homepage | https://www.cursor.com |
| primary_color | `#26251e` |
| logo | Simple Icons slug `cursor` |
| omd format (source) | 0.1 |
| ds.name | Cursor Brand |
| ds.url | https://cursor.com/en-US/brand |
| ds.type | brand |
| ds.description | Official brand guidance for Cursor names and distributed logo, icon, and avatar assets. |
| ds.og_image | https://cursor.com/public/opengraph-image.png |
| tokens.source | live-extract |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

Conflicts unresolved: none in `verification_v2`; the Tier 2 dark/gradient summary is recorded below as rejected conflicting catalog context.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketing | https://cursor.com/ | 2026-07-13 |
| surface-2 | duplicate-public-marketing-snapshot | https://cursor.com/ | 2026-07-13 |
| surface-3 | localized-public-marketing | https://cursor.com/en-US | 2026-07-13 |

The collector labels its URLs as `product-surface`, but the URLs are public marketing pages. The bundle contains three records, two unique URLs, eight component types, 84 variants, three static state markers, coverage score 100, and `interactionCount: 0`.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| public-capture | product-surface (collector label; public-marketing boundary) | https://cursor.com/ | 2026-07-13 |
| brand-context | official-doc | https://cursor.com/en-US/brand | 2026-07-13 |
| docs-context | official-doc | https://cursor.com/docs | 2026-07-13 |
| changelog-context | official-doc | https://cursor.com/en-US/changelog/1-0 | 2026-07-13 |

Additional first-party licence boundary: `https://cursor.com/licenses`. Evidence artifact: `artifacts/reference-evidence/cursor.json`, captured `2026-07-13T12:17:47.149Z`.

### Tier 1

- https://cursor.com/
- https://cursor.com/en-US
- https://cursor.com/en-US/brand
- https://cursor.com/docs
- https://cursor.com/en-US/changelog/1-0
- supplied `artifacts/reference-evidence/cursor.json`

### Tier 2

- https://getdesign.md/cursor — directory record only; its “sleek dark interface, gradient accents” summary conflicts with current warm public evidence and supplies no value.
- https://styles.refero.design/?q=Cursor — attempted; no usable result was returned.

## Evidence-domain boundaries

| Domain | Permitted use | Boundary |
|---|---|---|
| First-party public marketing | Computed styles, FontFaceSet, components, static markup | Not an authenticated editor or dashboard. |
| Embedded marketing demos | Bounded input, tab, disabled control, and local font occurrences | Not an independently inspected product application. |
| Official documentation | Product framing, workflows, stakeholder context | No documentation-chrome token or component claim. |
| Official brand guidance | Product naming and distributed visual assets | No official token system, font package, or font licence. |
| Cursor 1.0 changelog | Product evolution | No current UI-token authority. |
| Cursor licence notice | Open-source component notices used in the IDE | Not a licence for the site-hosted font files. |

## Claim ledger

All YAML token claims point to anchor `home`: surface `home`, source `public-capture`, method `live-inspect`, captured `2026-07-13`.

| Claim group | Claims |
|---|---|
| Color | `primary`, `canvas`, `surface`, `surface-muted`, `surface-emphasis`, `surface-selected`, `accent`, `on-primary`, `gold` |
| Typography | `family.ui`; `body.size`, `body.weight`, `body.lineHeight`, `body.use`; `action-sm.size`, `action-sm.weight`, `action-sm.lineHeight`, `action-sm.tracking`, `action-sm.use` |
| Spacing | `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` |
| Rounded | `sm`, `md`, `full` |
| Component | `marketing-card.type`, `bg`, `radius`, `padding`, `font`, `use` |

## Token record

| Group | Source values |
|---|---|
| colors | primary `#26251e`; canvas `#f7f7f4`; surface `#f2f1ed`; surface-muted `#e6e5e0`; surface-emphasis `#ebeae5`; surface-selected `#e1e0db`; accent `#f54e00`; on-primary `#f7f7f4`; gold `#c08532` |
| typography.body | size `16`; weight `400`; unitless lineHeight `1.5`; use “Current public marketing body, cards, and primary actions” |
| typography.action-sm | size `14`; weight `400`; unitless lineHeight `1`; tracking `0.14`; use “Compact public actions” |
| spacing | xxs `2`; xs `3`; sm `4`; md `6`; lg `8`; xl `12`; xxl `16` |
| rounded | sm `4`; md `8`; full `9999` |
| marketing-card | type `card`; bg `#f2f1ed`; radius `4px`; padding `15.9px 17.5px 20px`; font `16px / 400 / CursorGothic`; use “Public marketing feature card” |

## Component selectors and exact observations

| Component | Pointer | Observation summary |
|---|---|---|
| Public filled primary action | `home::[data-omd-capture="64"]` | fg `rgb(247, 247, 244)`; bg `rgb(38, 37, 30)`; 1px border; radius `3.35544e+07px`; padding `12.48px 21.6px 12.8px`; 16px/400 |
| Compact filled action | `home::[data-omd-capture="8"]` | fg `rgb(247, 247, 244)`; bg `rgb(38, 37, 30)`; 1px border; radius `3.35544e+07px`; padding `5.6px 10.5px 5.88px`; 14px/400 |
| Compact secondary action | `home::[data-omd-capture="101"]` | fg `rgb(38, 37, 30)`; bg `rgb(230, 229, 224)`; border `oklab(0.263084 -0.00230259 0.0124794 / 0.025)`; full pill; padding `5.6px 10.5px 5.88px`; 14px/400 |
| Compact ghost action | `home::[data-omd-capture="7"]` | transparent; `#26251e`; border `oklab(0.263084 -0.00230259 0.0124794 / 0.2)`; full pill; padding `5.6px 10.5px 5.88px`; 14px/400 |
| Tertiary text action | `home::[data-omd-capture="18"]` | transparent; `#f54e00`; radius `0px`; 16px/400 CursorGothic |
| Feature card | `home::[data-omd-capture="53"]` | fg `rgb(38, 37, 30)`; bg `rgb(242, 241, 237)`; radius `4px`; padding `15.9px 17.5px 20px`; 16px/400 |
| Large feature card | `home::[data-omd-capture="9"]` | bg `#f2f1ed`; radius `4px`; padding `17.5px`; 16px/400 CursorGothic |
| Embedded selected tab | `home::[data-omd-capture="11"]` | fg `rgb(38, 37, 30)`; bg `rgb(247, 247, 244)`; border `0px 1px 0px 0px`; padding `0px 8px 1px 12px`; 14px/400; static selected marker |
| Embedded prompt input | `home::[data-omd-capture="14"]` | fg `rgb(38, 37, 30)`; bg `rgba(0, 0, 0, 0)`; padding `8px 8px 6px`; 13px/400/system-ui |
| Embedded disabled compact control | `home::[data-omd-capture="17"]` | bg `#e1e0db`; text `oklab(0.263084 -0.00230259 0.0124794 / 0.6)`; radius `3.35544e+07px`; static disabled marker |

Body sample: `home::body` uses `rgb(38, 37, 30)` on `rgb(247, 247, 244)`, padding `52px 0px 0px`, and 16px / 400 / CursorGothic at the 1440×900 capture viewport.

## Font proof

| Family / claim | Computed use | Source corroboration | Disposition |
|---|---:|---|---|
| CursorGothic | 643 | loaded/high; four Cursor-hosted WOFF2 URLs | General public UI/content family; no redistribution claim. |
| Lato | 24 | loaded/high; 20 source URLs | Embedded-demo only. |
| EB Garamond | 19 | loaded/high; 14 source URLs | Embedded-demo only. |
| berkeleyMono | 1 | loaded/medium; two WOFF2 URLs | Isolated embedded occurrence only. |
| system-ui | 117 | system classification | Operating-system stack, not a substitute. |
| -apple-system | 6 | system classification | Operating-system stack, not a substitute. |
| CursorGothic Fallback / CursorIcons16 / KaTeX / Lato Fallback | 0 | declared-only | Not promoted. |
| jjannon | 0 current evidence | no current FontFace support | Unresolved legacy claim; omitted at the family field boundary. |

## Proof notes

- Canonical sibling proof used: `web/references/cursor/.verification.md`.
- verification_v2 schema: 2; conflicts: `[]`.
- No browser capture was rerun and no MCP was used by that verification record.
- Static `selected`, `unchecked`, and `disabled` labels coexist with an empty top-level interactions array; they are not measured interaction variants.
- Class strings naming hover/focus/active/transition utilities are not measured before/after evidence.
- Official brand, documentation, changelog, enterprise, security, and licence material supplies only the narrative or boundary described above.

## Derived editorial range (portable)

Exact source URLs and ledger metadata remain in this provenance file; portable text retains the narrative propositions needed for standalone use and places a complete authority boundary adjacent to every derived editorial implementation inference. Current portable range after the F3 scan: Scope reconstruction/source-authority boundaries, changelog/token-authority disposition, and visual characterization (`DESIGN.md:9`, `:11`, `:13`); Primary-task selection (`:19`); Audience role grouping (`:28`); Distinctive-trait grouping (`:32`); official brand-asset use and authority boundary (`:43`); four implementation principles (`:47`); Avoid (`:56`); semantic-color role/bounded-use readings (`:69`, `:82`); spacing and shape non-merge readings (`:95`, `:103`); elevation tonal/non-promotion reading (`:107`); motion class-string/non-promotion reading (`:111`); font promotion, bounding, substitution, licence, and omission dispositions (`:121`); type-role grouping and boundaries (`:135`); Assets authority boundary (`:148`); Components state-coverage boundary, primitive/kind omissions, applicability assignments, and reason statements (`:157`, `:161`, `:172`, `:183`, `:194`, `:214`, `:229`, `:239`, `:259`, `:282`, `:296`); captured-desktop-local layout reading (`:308`); and Content voice characterization, directions, and coverage boundary (`:318`). The reconstruction boundary in Governance is not used as a substitute for those adjacent qualifications.
