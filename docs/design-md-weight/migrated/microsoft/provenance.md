# Microsoft provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/microsoft/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | microsoft |
| name | Microsoft |
| country | US |
| category | consumer-tech |
| homepage | `https://www.microsoft.com` |
| primary_color | `#0078d4` |
| logo.type | github |
| logo.slug | microsoft |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| added | 2026-06-11 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | Fluent 2 |
| ds.url | `https://fluent2.microsoft.design` |
| ds.type | system |
| ds.description | Microsoft's cross-platform design system, with platform-aware typography, tokens, component guidance, and accessibility guidance. |

The homepage URL is dual-destination: identity metadata here, and the inspected home route `https://www.microsoft.com/ko-kr` is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / home CTAs in `DESIGN.md`. The github slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. `ds.type: system` / `ds.name: Fluent 2` / `ds.url` / `ds.description` are ledger fields (A1c). Fluent 2 as a named official system is also in the portable Scope.

**Logo decision.** The catalog field is `logo.type: github` / `logo.slug: microsoft`. That is an identity pointer, not a Microsoft-hosted file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| added | 2026-06-11 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states. YAML `verification_v2.conflicts: []`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketing | `https://www.microsoft.com/ko-kr` | 2026-07-13 |
| fluent-docs | documentation-chrome | `https://fluent2.microsoft.design/` | 2026-07-13 |
| microsoft-365 | public-marketing | `https://www.microsoft.com/en-us/microsoft-365` | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://www.microsoft.com/ko-kr` | 2026-07-13 |
| fluent-docs-live | official-doc | `https://fluent2.microsoft.design/` | 2026-07-13 |
| microsoft-365-live | product-surface | `https://www.microsoft.com/en-us/microsoft-365` | 2026-07-13 |
| fluent-typography | official-doc | `https://fluent2.microsoft.design/typography` | 2026-07-13 |
| segoue-font | official-doc | `https://learn.microsoft.com/en-us/typography/font-list/segoe-ui` | 2026-07-13 |
| segoue-license | license | `https://learn.microsoft.com/en-us/typography/fonts/font-faq` | 2026-07-13 |

YAML source ids `segoue-font` and `segoue-license` are transcribed byte-exact from the source frontmatter.

### Tier 1 (as listed in the source footer)

- supplied collector evidence for `https://www.microsoft.com/ko-kr` and `https://www.microsoft.com/en-us/microsoft-365`
- `https://fluent2.microsoft.design/typography`
- `https://fluent2.microsoft.design/shapes`
- `https://fluent2.microsoft.design/design-tokens`
- `https://learn.microsoft.com/en-us/typography/font-list/segoe-ui`
- `https://learn.microsoft.com/en-us/typography/fonts/font-faq`
- `https://www.microsoft.com/en-us/about`

### Tier 2 (as listed in the source footer)

- `https://getdesign.md/microsoft` (attempted; safe-open error and no search record)
- `https://styles.refero.design/?q=microsoft` (attempted; safe-open error)
- `https://styles.refero.design/style/5f39e778-d204-42a9-8b8b-a1519dbd3971`
- `https://styles.refero.design/style/c70a9990-bc4b-4a64-a69b-aeb7b344fb74`

Tier 2 data was not used to establish any token or component value.

## Token note

Source frontmatter `tokens.note`, kept here as a ledger string and also landed in the portable body as the fact it names (`DESIGN.md` Scope):

> Marketing tokens below are observed only on microsoft.com home and Microsoft 365 public marketing. Fluent documentation is a separate source domain; its product-system tokens are not inferred from marketing.

## Sibling handling (`web/references/microsoft/.verification.md`)

The sibling exists — confirmed with `find web/references/microsoft -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-13. Method: supplied deterministic Playwright collector evidence; no browser capture rerun and no MCP use. Artifact `artifacts/reference-evidence/microsoft.json`.
- Three public sources with different evidentiary roles: `home` Microsoft public marketing and global chrome; `surface-3` Microsoft 365 public marketing; `surface-2` Fluent 2 documentation chrome and official design-system context.
- The reference retains only selector-level active-tab values from the Fluent form-error and Microsoft 365 dialog/tab interaction records and does not infer generalized state or behavior contracts.

Sibling-only items (transcribed as sibling records; mention here is not portable-body use):

- Collector totals `surfaceCount: 3`, `score: 100`, `componentTypes: 8`, `componentVariants: 117`, `observedStates: 8`, `interactionKinds: 3`, `interactionCount: 5`
- RGB spellings of hex values already in the source (`rgb(14, 23, 38)`, `rgb(0, 120, 212)`, `rgb(255, 255, 255)`, `rgb(38, 38, 38)`, `rgb(97, 97, 97)`, `rgb(9, 31, 44)`, `rgb(5, 17, 24)`, `rgb(6, 22, 31)`)
- Selectors `home::h1` and `home::h2`
- Tab line-height spelling `16px / 600 / 24px`
- Outline-CTA wording `transparent background`
- Fluent docs menu toggle `surface-2::[data-omd-capture="7"]::state-pressed` background `rgb(250, 233, 236)` / `#fae9ec`, text `rgb(27, 26, 25)` / `#1b1a19`, radius `8px`, padding `8px 14px`, `14px / 600`
- Microsoft-hosted WOFF2 path `https://www.microsoft.com/echo/etc.clientlibs/store/clientlibs/clientlib-reimagine/page/base/resources/fonts/segoe-sans/west-european/latest.woff2`
- Segoe UI source prefix `https://c.s-microsoft.com/static/fonts/segoe-ui/west-european/`
- Phrase `five Microsoft-hosted Segoe Sans source families`
- Sibling domain-boundary names Store checkout and Azure portal
- Refero gloss that one page denies a display face; older `#0067b8`, 2px-radius, 0px-card retail snapshot
- Conflict-matrix resolution rows (Tier 1 retained; older blue remains only as an observed text-link color, not CTA token)

## Byte-form notes

- The source frontmatter records display / section / card-title / body / cta line heights as `1.17`, `1.25`, `1.4`, `1.5`, `1.47`. They are carried in that form in the portable token-set table and as `56px` / `40px` / `28px` / `24px` / `22px` in the observed-hierarchy table. They are not rewritten as a single replacement (A1a).
- YAML tracking `-1.2` / `-0.8` / `-0.5` / `-0.48` / `-0.3` is not the observed `-1.2px` / `-0.8px` / `-0.5px` / `-0.48px` / `-0.3px`.
- `tokens.spacing.base: 16` is not `tokens.typography.body.size` `16`.
- YAML `tokens.rounded.pill: 200` is not the body `200px` spelling and not YAML component `radius: 200px` chosen as a replacement.
- YAML `tokens.components.m365-tab-active.type: tab` is attached only to Active pill tab. The other seven §4 records are not in the token set.
- `#0078d4` and `#0067b8` stay two color-token keys. `#091f2c` / `#06161f` / `#051118` stay unmerged. `#0e1726` / `#17253d` / `#262626` stay unmerged. `#ffffff` / `#fefefe` / `#f2f2f2` stay unmerged.
- `#ffffff` is `tokens.colors.canvas` (source: observed marketing and action foreground) and also component Text / `fg` on home CTAs, Microsoft 365 dark CTAs, and Active pill tab. `#091f2c` is `tokens.colors.primary-dark` (Microsoft 365 CTA background) and also Outline CTA border. Same hex, source-stated uses, not a merged token.
- YAML hex is lowercase. The portable body keeps that form.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| §13 Personas | whole section. The source recorded no validated research defining product-specific personas and used a `[FILL IN]` placeholder. Fictional personas are neither promoted to verified tasks nor re-hosted in a sidecar. The section is dropped and is deliberately not restated here as names, ages, cities, occupations, or affiliations (D2, D2a). |
| §9 Agent Prompt Guide | whole section. Tool-facing copy-paste prompts and restatements of rules stated elsewhere. Checked value by value before deletion: see the next paragraph. |
| §14 `[FILL IN]` wrapper | Placeholder omitted (A1). The surrounding evidence sentence is preserved in the portable Capture record. The wrapper is stored here as an omitted placeholder (E2b). |
| §15 `[FILL IN]` wrapper | Placeholder omitted (A1). The surrounding Fluent-tokenized / no Microsoft-wide duration-or-easing-table sentence is preserved in Foundations Motion. The wrapper is stored here as an omitted placeholder (E2b). |

No `cubic-bezier` from the `spec/omd-v0.1.md` example table appears in the source. The source lists no duration, easing, animation, or reduced-motion value.

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Home primary CTA `#0078d4` on `#ffffff`, 8px radius — Standard CTA / Hero CTA / Semantic color. Microsoft 365 captured dark CTA `#091f2c` on `#ffffff`, 8px radius — Dark CTA / Compact dark CTA. Microsoft 365 captured active pill `#06161f` on `#ffffff`, 200px radius — Active pill tab. Marketing heading/body `#0e1726` / `#17253d` — Semantic color. Global chrome/footer `#262626` / `#616161` on `#ffffff` / `#f2f2f2` — Semantic color / Header link / Footer link. The three example component prompts restate Standard CTA, Active pill tab, and the Fluent-versus-home-page boundary already in Scope / Capture record.

## Claim ledger

Claims use YAML anchors from the source: `*home` = home / home-live / computed-style / 2026-07-13; `*m365` = microsoft-365 / microsoft-365-live / computed-style / 2026-07-13.

| Claim | Surface |
|---|---|
| `tokens.colors.primary` | home live |
| `tokens.colors.ink` / `body` / `nav-ink` / `muted` / `link` / `canvas` / `footer` | home live |
| `tokens.colors.primary-dark` / `card` | microsoft-365 live |
| `tokens.typography.family.ui` / `display` / `chrome` | home live |
| `tokens.typography.display` (size, weight, lineHeight, tracking, use) | home live |
| `tokens.typography.section` (size, weight, lineHeight, tracking, use) | home live |
| `tokens.typography.card-title` (size, weight, lineHeight, tracking, use) | home live |
| `tokens.typography.body` (size, weight, lineHeight, tracking, use) | home live |
| `tokens.typography.cta` (size, weight, lineHeight, tracking, use) | home live |
| `tokens.typography.nav` (size, weight, use) | home live |
| `tokens.spacing.xs` / `sm` / `md` / `base` / `lg` / `xl` / `xxl` | home live |
| `tokens.rounded.sm` / `md` / `lg` / `xl` | home live |
| `tokens.rounded.pill` | microsoft-365 live |
| `tokens.components.m365-tab-active` (type, bg, fg, radius, padding, height, font, active, use) | microsoft-365 live |
| Published strings Microsoft / Fluent 2 / Communication Blue / Segoe UI / Segoe UI Variable Text / Segoe UI Variable Display / Segoe UI Variable Small / SegoeUI / Cascadia Code / Copilot / Microsoft 365 / Monotype | source §1 / §3 / §10 / §11 |
| Mission “empower every person and every organization on the planet to achieve more” / About expanding opportunity, earning trust, protecting fundamental rights, and advancing sustainability / complementary—not interchangeable | source §1 / §11 narrative |

## Capture selectors

| Component | Pointer |
|---|---|
| Standard CTA — home | `home::[data-omd-capture="17"]`–`"25"` |
| Hero CTA — home | `home::[data-omd-capture="14"]` / `"16"` |
| Dark CTA — Microsoft 365 | `surface-3::[data-omd-interaction-capture="tab-2-10"]` |
| Compact dark CTA — Microsoft 365 | `surface-3::[data-omd-interaction-capture="tab-2-25"]` |
| Outline CTA — Microsoft 365 | `surface-3::[data-omd-interaction-capture="tab-2-53"]` |
| Active pill tab — Microsoft 365 | `surface-3::[data-omd-interaction-capture="tab-2-0"]` |
| Header link — home | `home::.uhf-nav-item.uhf-nav-link` |
| Footer link — home | `home::.uhf-footer-link` |

These pointers are dual-destination with the portable component Use lines (E2a).

## Proof notes

- verification_v2 schema 2; conflicts: []
- `components_harvested: true`; one component record in the source token set (`m365-tab-active`, `type: tab`)
- The source records no `focus-visible` string. Uncaptured hover, disabled, loading, error, and success treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Microsoft has a published first-party design system (Fluent 2, `ds.type: system`). Derived-editorial qualifications therefore close by naming that specification: not Microsoft-authored or taken from a separately published UI specification, including the published Fluent 2 documentation (rulebook v12 B2a 전제 주석).
- About mission and commitments, Fluent 2 global-and-alias token description, and the source §11 complementary—not interchangeable sentence are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Two public marketing URLs as this contract's token surfaces; Fluent 2 documentation as a separate official system domain that does not automatically supply marketing tokens; every value kept on the surface that established it |
| Experience Scope ¶2 | Generous white space / product imagery / blue calls to action / familiar Segoe typographic voice used to make that breadth feel coherent rather than experimental; visual system supporting the mission with clear hierarchy and deliberately familiar controls |
| Experience Scope ¶3 | About narrative as context that does not by itself supply interface tokens; public marketing capture and Fluent documentation kept complementary—not interchangeable rather than one merged token set |
| Experience Primary tasks | Selecting the three label-and-surface tasks; they do not come from the persona section |
| Experience Audience | Restricting Audience to the mission-named group level; refusing to invent product-specific personas |
| Experience Distinctive traits | Classifying the list as a restatement of source Key Characteristics, and the groupings and the readings inside it |
| Experience Principles | Four numbered stems on Microsoft-authored mission/About language (1–2) and Fluent 2 documentation (3–4); UI implication notes and grouping those four as this reconstruction's principles |
| Experience Application rules | The four Do-list rules and the reasons attached to them |
| Experience Avoid | The four Don't-list prohibitions and the reasons inside them |
| Foundations Semantic color | Palette-role slotting; `#0078d4` off `#0067b8` off `#091f2c` off `#06161f` off `#051118`; heading/body/nav inks unmerged; canvas/card/footer whites unmerged |
| Foundations Spacing | YAML unitless steps kept on their own path; px cluster as the source's own writing rather than a replacement; observed public-web rhythm rather than a universal layout scale for authenticated apps |
| Foundations Shape | Five YAML keys kept; `pill: 200` beside `200px`; CTA `8px` on `lg: 8`; chrome `0px` on link records rather than an invented YAML sharp key |
| Foundations Elevation | Flat treatment for observed public-marketing actions and containers rather than a depth system; Fluent elevation left in the Fluent design-system domain |
| Foundations Motion | Five-kind promotion gate; no Microsoft-wide duration or easing table promoted from this capture or from Fluent documentation |
| Typography Font evidence | Fluent context not proof that every product uses the web stack; FAQ as licence boundary; Small not a general UI-family token; Cascadia Code and icon/localized/fallback faces declared-only |
| Typography Family | No-substitution rule; loaded families canonical only where computed use and loaded sources agree; captured Microsoft-hosted files not reusable project assets |
| Typography Type roles | YAML unitless line heights and tracking kept off observed px; YAML Display off the Text / Display observed row; footer `11px` off YAML keys; Fluent 10px/14px and 68px/92px ramp off marketing roles |
| Typography Type roles (body 16 vs spacing 16) | Body size `16` kept off `tokens.spacing.base` `16` rather than collapsing the two keys |
| Typography Assets | github slug as an identity pointer, not a hosted brand file |
| Components Capture record | Role-based applicability procedure; interactive-kind and not-applicable verdicts; YAML `type: tab` attached only to Active pill tab; generic Focus capture not treated as a focus-visible treatment |
| Layout & Platforms | Two marketing surfaces as 1440×900 desktop captures rather than a responsive system; Fluent documentation geometry not used to fill marketing gaps; no authenticated-app layout inferred |
| Content & Locales | Byte-exact / gloss-beside rule; voice table and Copilot companion language as a narrative and content boundary rather than an observed rule for every product team or a complete product-microcopy guide |
| Governance Named gaps | Naming the list from the source's own unresolved fields rather than adding surfaces the source did not name |
