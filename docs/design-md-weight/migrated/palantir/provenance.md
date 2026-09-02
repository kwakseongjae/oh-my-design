# Palantir Blueprint provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the Palantir Blueprint migration. Canonical source remains `web/references/palantir/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | palantir |
| name | Palantir Blueprint |
| country | US |
| category | developer-tools |
| homepage | https://blueprintjs.com/ |
| primary_color | `#2d72d2` |
| logo | `type: favicon`, `slug: https://www.google.com/s2/favicons?domain=blueprintjs.com&sz=128` |
| omd format (source) | 0.1 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-14 |
| components_harvested | true |
| ds.name | Blueprint |
| ds.url | https://blueprintjs.com/docs/ |
| ds.type | system |
| ds.description | Palantir's open-source React UI toolkit for complex, data-dense desktop web interfaces. |

Token note from the source, quoted in full:

> Machine tokens are limited to the supplied Blueprint landing and documentation capture. The operating-system stack is not a named Blueprint UI family; declared icon fonts, Palantir corporate material, and repository context remain separate evidence domains.

The logo slug is a third-party favicon-proxy URL, not a Blueprint-hosted brand file. The portable Assets section names it as a catalog pointer.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-14 |
| verification_v2.checked | 2026-07-14 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 (live surfaces); 2026-07-14 (repository, license, Palantir values) |
| tokens.extracted | 2026-07-14 |

Conflicts unresolved: none.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-product | https://blueprintjs.com/ | 2026-07-13 |
| docs | official-documentation | https://blueprintjs.com/docs/ | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://blueprintjs.com/ | 2026-07-13 |
| docs-live | official-doc | https://blueprintjs.com/docs/ | 2026-07-13 |
| blueprint-repository | official-doc | https://github.com/palantir/blueprint | 2026-07-14 |
| blueprint-license | license | https://github.com/palantir/blueprint/blob/develop/LICENSE | 2026-07-14 |
| palantir-values | official-doc | https://www.palantir.com/careers/infrastructure | 2026-07-14 |

### Tier 1

- https://blueprintjs.com/ (public landing computed styles)
- https://blueprintjs.com/docs/ (official documentation computed styles and Blueprint v6.x product context)
- https://github.com/palantir/blueprint (official repository and Apache 2.0 project-licence statement)

### Tier 2 (no usable record)

- https://getdesign.md/palantir — attempted; internal retrieval error.
- https://styles.refero.design/?q=Palantir%20Blueprint — attempted; internal retrieval error.

Those directory findings describe this catalog's coverage. They stay here. They are lookup queries, not portable copy.

### Narrative (not interface tokens)

- Palantir company context named by the sibling (corporate/company narrative only): https://www.palantir.com/offerings/energy/
- Palantir values: https://www.palantir.com/careers/infrastructure
- Official project license: https://github.com/palantir/blueprint/blob/develop/LICENSE

## Claim ledger

Claims use YAML anchors from the source: `home` = home / home-live / computed-style / 2026-07-13; `docs` = docs / docs-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.primary `#2d72d2` | home |
| tokens.colors.dark-canvas `#111418` | home |
| tokens.colors.on-primary `#ffffff` | home |
| tokens.typography.landing-title.size / weight / lineHeight / use | home |
| tokens.spacing.xs / sm / md / lg | home |
| tokens.rounded.control | home |
| tokens.colors.foreground `#1c2127` | docs |
| tokens.colors.muted `#5f6b7c` | docs |
| tokens.colors.link `#215db0` | docs |
| tokens.colors.canvas `#ffffff` | docs |
| tokens.typography.docs-title.size / weight / lineHeight / use | docs |
| tokens.typography.docs-body.size / weight / lineHeight / use | docs |
| tokens.spacing.xl | docs |
| tokens.rounded.sharp | docs |
| tokens.rounded.round | docs |
| tokens.shadow.docs-card | docs |
| tokens.components.docs-welcome-card.type / bg / fg / radius / padding / height / shadow / font / use | docs |

## Capture selectors

| Component | Pointer |
|---|---|
| Documentation card (token-set) | `surface-2::div.bp6-card.bp6-elevation-0.bp6-interactive` |
| Landing title | `home::h1` |
| Docs title | `surface-2::h1` |
| Docs body | `surface-2::p` |
| Landing 40px minimal action (not in the token set) | sibling `home::[data-omd-capture="0"]` |
| Landing 30px blue action (not in the token set) | sibling `home::[data-omd-capture="2"]` |
| Docs 30px minimal button (not in the token set) | sibling `surface-2::[data-omd-capture="21"]` |
| Docs version-selector / expanded menu (not in the token set) | sibling `surface-2::[data-omd-capture="2"]` and `surface-2::[data-omd-interaction-capture="menu-0-0"]` |

## Sibling file

`web/references/palantir/.verification.md` exists and was read in full. It is adopted as **evidence grade only**: no value in it was promoted into the portable body that the legacy `DESIGN.md` did not already establish.

- **Inspected:** 2026-07-13
- **Checked:** 2026-07-14
- **Method (verbatim):** `omd:add-reference` CREATE, constrained to the supplied `artifacts/reference-evidence/palantir.json` for all raw computed-style, font, component, and interaction evidence. No browser recapture, MCP collection, or computed-style rerun was used.

Values that exist in the sibling and not in the source `DESIGN.md` stay in this ledger. They are not portable tokens. Mention here is disposition of the sibling, not use as a portable value.

Sibling-only observations recorded here:

- Collector metadata: two distinct public URLs; 12 detected component variants; one menu interaction; two observed interaction-state labels; coverage score 63.
- RGB writings beside hexes the source already carries: `rgb(17, 20, 24)` = `#111418`; `rgb(255, 255, 255)` = `#ffffff`; `rgb(45, 114, 210)` = `#2d72d2`; `rgb(28, 33, 39)` = `#1c2127`; `rgb(33, 93, 176)` = `#215db0`.
- `home::body` additional sample the source does not tokenize: text `rgb(28, 33, 39)`; 0px radius; 14px / 400 / 18.0013px operating-system-first stack. Source `18.0013px` is the Docs card font, not this landing-body row.
- `home::[data-omd-capture="0"]` extras the source does not record: transparent background; text `rgba(255, 255, 255, 0.7)`; 16px / 400. Source records 40px height, `4px 16px` padding, 4px radius.
- `home::[data-omd-capture="2"]` extra: 14px / 400 on the filled landing action. Source records 30px height, `4px 8px` padding, 4px radius, `#2d72d2`.
- Expanded version menu `surface-2::[data-omd-interaction-capture="menu-0-0"]`: background `#ffffff`; text `#1c2127`; 4px radius; 4px padding; 187px height. Source §14 retains `expanded` and `menu-open` only and does not establish a reusable menu-state contract.
- Target row `menu-0-2` as a `menuitem` link/list item. Source §5 already names the captured menu row a `menuitem`/list-item observation.
- Palantir values quoted by the sibling beyond the source's one sample: “Own The Outcome,” “Focus on the Mission.” Source §10 quotes only “The Best Idea Wins.” and paraphrases the rest as ownership of outcomes and mission focus. Those two additional slogans stay here.
- Official repository package list named by the sibling: core components, icons, datetime, select, and table. Not a computed-style source.
- Sibling corporate URL https://www.palantir.com/offerings/energy/ (2003 / civil-liberties / data-decisions-operations narrative). Source records the facts without that URL.
- Sibling surface note: the landing “is not a Palantir corporate site or an authenticated Palantir platform.” The adjective `authenticated Palantir platform` is sibling wording; the source already names `authenticated-application layout` as unmeasured. The sibling adjective is not copied into the portable body as a new domain.

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: true
- tokens.source: reconciled
- ds.type: system (Blueprint). The published Blueprint documentation at `https://blueprintjs.com/docs/` is a first-party developer/documentation surface; machine tokens remain limited to the supplied landing and documentation capture. Portable B2a closes use the adapted form that names that documentation, not the unmodified example that would deny a published specification.
- Interaction expansions: one Docs version-menu expansion (`expanded` / `menu-open`). Uncaptured hover/disabled/loading/error/success treatments are omitted. They are not `not-applicable` solely for that reason. Applicability follows control meaning. The static Docs card declares Kind: non-interactive and has no applicability map. State coverage is not claimed complete.
- Official history, Apache 2.0 project licence, and Palantir values are narrative or licence context, not Blueprint interface-token sources, except where the source DESIGN.md itself records a computed value.
- Same-hex role splits in the portable body, kept unmerged: `#ffffff` is `tokens.colors.on-primary` (landing action and headline) and, separately, `tokens.colors.canvas` (expanded Docs version menu); `#215db0` is `tokens.colors.link` and, separately, `tokens.components.docs-welcome-card.fg`; the card background is `oklch(1 0 257.113)`, not Docs canvas `#ffffff`. Same-number splits: `tokens.spacing.lg` `16` is not `tokens.typography.docs-body.size` `16` and not padding `4px 16px`; `tokens.rounded.round` `30` is menu-trigger rounding, not the 30px landing blue-action height or the 30px Docs minimal-button height; `tokens.spacing.xl` `20` is not card padding `20px`.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Two inspected routes as this contract's surfaces; `ds.type: system` as the published Blueprint documentation rather than as a blanket token sheet for every Blueprint application; machine tokens limited to the supplied landing and documentation capture |
| Experience Scope `:11` | Characterizations (public face as unusually direct for a design-system site; dark wireframe field with sparse white type and restrained actions; Docs as a light compact reading environment; split as purposeful rather than a universal palette; card as measured utility rather than promotional elevation) as source readings, not a published UI specification; hex values, 122px / 20px / 4px card geometry, landing-versus-Docs split, and the documentation sentence beside them are the source's own |
| Experience Scope `:13` | Founding-and-library narrative (originated as a Palantir project; v6.x; migration guidance; 2003; civil liberties; data/decisions/operations; Blueprint is not evidence for proprietary-platform visual design; packet limits visual facts to the supplied captures) as brand context that does not by itself supply interface tokens; versioned migration as part of the present expression |
| Primary tasks `:19` | Selecting the two primary tasks from captured public surfaces; not from the source's persona section |
| Audience `:27` | Dropping the persona section rather than promoting it; carrying no affiliation classification or motivation |
| Distinctive traits `:31` | Classifying the list as a restatement of measured values, and the groupings inside it |
| Principles `:43` | Four items; numbered stems resting on first-party documentation and culture sentences; every *UI implication* as the source's own editorial reading, not taken from the published Blueprint documentation as a token sheet for every Blueprint application |
| Application rules `:56` | Four Do rules and the reasons attached to them |
| Application rules `:63` | Keeping the Agent Prompt Guide unique constraint on this page rather than as a tool prompt |
| Avoid `:67` | Four Don'ts and the reasons inside them |
| Avoid `:74` | Keeping the Agent Prompt Guide unique prohibition here rather than as a tool prompt |
| Semantic color `:82` | Pairing each hex to its token-set path; landing and Docs as separate captured product domains; `tokens.colors.on-primary` `#ffffff` unmerged from `tokens.colors.canvas` `#ffffff`; card `oklch(1 0 257.113)` unmerged from Docs canvas; per-swatch scope clauses (canonical primary only for this captured Blueprint scope; dark canvas not evidence for every Blueprint application) |
| Spacing `:102` | Five YAML spacing keys unmerged; `lg: 16` not docs-body size `16` and not padding `4px 16px`; `xl: 20` not card padding `20px` |
| Shape `:112` | Three rounded keys as that split; `round: 30` as menu-trigger rounding, not landing 30px height or Docs 30px height; `control: 4` not spacing `xs: 4` |
| Elevation `:116` | Shadow string as a crisp containment edge with a very small ambient lift; landing-action inset/low sample off a general elevation scale |
| Motion `:120` | Five-kind promotion gate; a match against the published Blueprint documentation is not that gate |
| Font evidence `:136` | Evidence-class sorting; operating-system stack off `tokens.typography.family`; three declared-only icon fonts off a text-family token |
| Family `:143` | No-substitution rule; operating-system stack as computed surface-use only, not as `tokens.typography.family` |
| Type roles `:147` | Three roles unmerged; YAML `use` verbatim; body `16` off spacing `16`; `33.6` and `24` not rewritten as ratios; card font `14px / 400 / 18.0013px operating-system stack` kept on `tokens.components.docs-welcome-card.font`, not as a type-role row |
| Assets `:165` | Google s2 favicon as a catalog identity pointer rather than as a Blueprint-hosted brand file; three icon fonts off the UI-family token |
| Capture record `:185` | Limiting the machine token to the static Docs card; Primitive type `card` only on that token-set component; measured actions `not in the token set`; Kind: non-interactive on the card with the source's static-card reason and no applicability map; observed menu interaction not authorization for a general menu component token; not a complete state-coverage claim |
| Measured but non-tokenized controls `:213` | Measured actions as raw evidence rather than general button tokens; captured menu row off a general-purpose button |
| Layout `:218` | Sparse introduction versus application canvases; Docs as the denser reference; list-row versus button; unmeasured groups left absent rather than filled from an adjacent Palantir product |
| Layout `:220` | Two routes as 1440×900 captures rather than a responsive system; “not mobile-first” as product-positioning rather than as a measured responsive specification |
| Content `:225` | Three voice adjectives; Palantir culture materials as context for prose, not as a component-copy source; byte-exact rule for the three source-grounded samples |
| Named gaps `:273` | List as named values, not permissions to invent; naming from the source's own unresolved fields rather than adding surfaces the source did not name |

Portable `DESIGN.md` carries 26 complete B2a qualifications. This table is 26 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Palantir-authored or taken from a separately published UI specification, including the published Blueprint documentation."

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 personas, 2 slots (role labels and motivations; no name, age, or city existed) | Deleted. Not promoted as individuals, tasks, or Audience groups. Affiliation classification and motivation are not re-hosted. Portable Audience names the two captured surfaces only. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Unique constraints (dark `#111418` landing only for a sparse entry; light Docs-like `#1c2127` / `#5f6b7c` / `#215db0`; 4/8/12/16/20px spacing and 0/4px corners; 30px rounding for the observed menu trigger; static card `oklch(1 0 257.113)` / 20px / 4px / low double shadow; do not claim a proprietary UI font, broad button-state system, mobile pattern, modal, toast, error, or motion rule without new evidence) already live in Experience / Foundations / Components. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. The no-token constraint and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling file | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
