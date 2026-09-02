# Ollama provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, and proof for the ollama migration. Canonical source remains `web/references/ollama/DESIGN.md` until catalog adoption.

## Identity

| Field | Value |
|---|---|
| id | ollama |
| name | Ollama |
| country | US |
| category | ai |
| homepage | https://ollama.com |
| primary_color | `#000000` |
| logo | `type: simpleicons`, `slug: ollama` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | false |

The logo record is a third-party icon-set slug, not an Ollama-published asset file, so it is recorded here and is presented in the portable body only as an identity pointer, not as a brand file.

Token note from source YAML: `tokens.components` is `{}`. `components_harvested: false`. Component anatomy in the source body is selector-backed prose, not a harvested token set.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| tokens.extracted | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |

Conflicts unresolved: none (source footer, verbatim: "**Conflicts unresolved:** none").

Source footer also records, verbatim: "Tier 2 supplied no conflicting measured values. SF Pro Rounded remains unresolved (computed-only, no FontFaceSet/source corroboration), rather than a Tier 2 conflict."

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | https://ollama.com/ | 2026-07-13 |
| surface-2 | marketing | https://ollama.com/pricing | 2026-07-13 |
| surface-3 | documentation | https://docs.ollama.com/ | 2026-07-13 |

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | https://ollama.com/ | 2026-07-13 |
| pricing-live | product-surface | https://ollama.com/pricing | 2026-07-13 |
| docs-live | official-doc | https://docs.ollama.com/ | 2026-07-13 |
| repository | official-doc | https://github.com/ollama/ollama | 2026-07-13 |

### Tier 1

- https://ollama.com/ (marketing product surface; raw collector `home`)
- https://ollama.com/pricing (marketing product surface; raw collector `surface-2`)
- https://docs.ollama.com/ (documentation chrome only; raw collector `surface-3`)
- https://ollama.com/blog/all-aboard-open-models (Ollama’s official open-model narrative)
- https://github.com/ollama/ollama (official repository)
- https://developer.apple.com/fonts/ (Apple SF font documentation)

### Tier 2 (no usable measured record)

- https://getdesign.md/ollama lists one community design
- https://styles.refero.design/?q=Ollama was attempted but did not return a fetchable result in this run (source footer wording)

## Canonical proof — sibling verification file

**Adopted.** Checked with `ls -a` and `find web/references/ollama -name '.verification.md'`.

| Field | Value |
|---|---|
| sibling | `web/references/ollama/.verification.md` |
| SHA-256 | `83a61fd4f88259b94154e32d3e84fd2ed8d622e76edcfdf1bdb2dbc90d6ba5c8` |
| heading | `# Ollama — Verification Notes (2026-07-13)` |
| pipeline | `spec/verification-pipeline.md` · Skill: `omd:add-reference` UPDATE mode |
| raw bundle | `artifacts/reference-evidence/ollama.json` |
| grade | `## Proof — Tier 1 live inspect` |
| inspected | 2026-07-13 (supplied deterministic collector bundle) |

**Why it is adopted.** The date, the three surface URLs, and the product-versus-docs split agree with the source `DESIGN.md` frontmatter and footer. The sibling corroborates the source rather than widening the portable contract.

The sibling reports the collector as `surfaceCount: 3`, `score: 71`, `componentTypes: 4`, `componentVariants: 23`, `interactionCount: 0`, and `interactionKinds: 0`, and states: "It is raw evidence, not canonical tokens. No browser capture or MCP was run for this update."

## Sibling-only values, recorded here and not promoted

A value that exists only in the sibling is a ledger entry and never a portable token. The portable contract reconstructs the source `DESIGN.md`.

| Sibling-only value | Treatment |
|---|---|
| Collector `score: 71`, `componentTypes: 4`, `componentVariants: 23`, `interactionKinds: 0` | Not promoted. Portable body keeps source `interactionCount: 0`. |
| `surface-2::h1` `letterSpacing: -1.2px` | Not promoted. Source records `SF Pro Rounded` 48px/600/48px without tracking. |
| Docs card `lineHeight: 28px` | Not promoted. Source Font for the docs link card is `16px / 400 / ui-sans-serif` with no line-height field. |
| Product input `backgroundColor: rgba(0, 0, 0, 0)` | Not promoted. Source pill input records text, `0px solid #6b7280` border, radius, padding, and font; it does not record a transparent fill token. |
| Font-use counts: `ui-sans-serif` 227, `system-ui` 14, `ui-monospace` 7, `SF Pro Rounded` 10 | Counts not promoted. The families and their evidence class are in the source. |
| Declared-source counts: Inter 14 `docs.ollama.com/mintlify-assets`, paperMono 1 Mintlify, `CMU Typewriter Text` 1 `fonts.cdnfonts.com`, `Latin Modern` 12 `cdn.jsdelivr.net` | Host and count detail not promoted. Source names the four faces as declared-only with zero visible usage. |
| getdesign.md community line “Terminal-first, monochrome simplicity.” | Community directory; source footer says it lists one community design. The community description is not adopted as Ollama copy. |
| Refero “internal error” | Source footer: did not return a fetchable result. Sibling detail stays here. |
| Official repository `LICENSE` is MIT | Software-license/product evidence in the sibling; not a license for third-party font assets; not a portable UI token. |
| Full computed stack on `surface-2::h1`: `"SF Pro Rounded", system-ui, -apple-system, ...` | Source records unresolved `SF Pro Rounded` without promoting the fallback stack as a family token. |

## Where the sibling and the source diverge

None of these is repaired by choosing a side; the values in the portable body follow the source `DESIGN.md`.

1. **Pricing capture 12.** Sibling raw sample labels `home::[data-omd-capture="12"]` “white pricing CTA” and records a `#d4d4d4` border. Source names that selector **Pricing outlined CTA** and keeps a separate **Pricing white CTA** at `home::[data-omd-capture="13"]` without that border. Portable body keeps both source components unmerged.
2. **Product input fill.** Sibling records transparent `rgba(0, 0, 0, 0)`. Source records `0px solid #6b7280` and no fill token. Portable body keeps the source border string.
3. **SF Pro Rounded tracking.** Sibling records `-1.2px` on the pricing h1. Source does not. Not promoted.
4. **Docs card line-height.** Sibling 28px. Source does not record it on that control. Not promoted.
5. **Refero wording.** Sibling: internal error. Source: did not return a fetchable result. Portable body does not restate the sibling’s error string.

What the sibling **does** corroborate: `#262626` header download and hero CTA; `rgba(0, 0, 0, 0.05)` sign-in; `9999px` product controls; header padding `6px 16px` and hero `12px 32px`; pricing outlined `8px 24px` with `#d4d4d4`; product input `10px 12px` and 14px; docs search `12px` / `0px 12px 0px 14px`; docs card `16px` radius; `interactionCount: 0`; `SF Pro Rounded` unresolved (no FontFaceSet/source match); declared docs faces with zero visible usage.

## Claim ledger

Claims use YAML anchors from the source. `home` = home / home-live / computed-style / 2026-07-13; `surface-2` = surface-2 / pricing-live / computed-style / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.ink | home |
| tokens.colors.action | home |
| tokens.colors.canvas | home |
| tokens.colors.muted | home |
| tokens.colors.hairline | home |
| tokens.colors.outline | home |
| tokens.typography.family.sans | home |
| tokens.typography.family.mono | home |
| tokens.typography.body-sm.size / weight / lineHeight / use | home |
| tokens.typography.body.size / weight / lineHeight / use | home |
| tokens.typography.nav.size / weight / lineHeight / use | home |
| tokens.typography.section.size / weight / lineHeight / use | surface-2 |
| tokens.spacing.xxs / xs / sm / md / lg / xl / 2xl | home |
| tokens.rounded.full | home |
| tokens.shadow.none | home |

Voice samples (3, §10) and the homepage line “Start local. Scale with cloud.” are verbatim live copy on the product-marketing surfaces. The July 2026 company post at `https://ollama.com/blog/all-aboard-open-models` is official narrative, not visual-token evidence.

Same-hex jobs kept unmerged in the portable body: `#000000` is YAML `tokens.colors.ink` (primary text and white pricing-action text) and catalog `primary_color`; `#ffffff` is YAML `tokens.colors.canvas` (page surface and inverted pricing CTA), charcoal Download/Hero CTA text, and, separately, docs-search / docs-card background; `#262626` is YAML `tokens.colors.action` on both the header download CTA and the hero CTA, which keep different padding and weight.

## Capture selectors

| Component | Pointer |
|---|---|
| Sign-in ghost | `home::[data-omd-capture="5"]` |
| Download charcoal CTA | `home::[data-omd-capture="6"]` |
| Hero charcoal CTA | `home::[data-omd-capture="10"]` |
| Pricing outlined CTA | `home::[data-omd-capture="12"]` |
| Pricing white CTA | `home::[data-omd-capture="13"]` |
| Pill input | `home::[data-omd-capture="4"]`; also observed on pricing |
| Docs search control | `surface-3::[data-omd-capture="5"]` |
| Docs link card | `surface-3::[data-omd-capture="34"]` and related selectors |

## Evidence-class boundaries carried into the body

- July 2026 company post, Jeff and Michael, Kitematic, and Docker Desktop are first-party narrative in the source. They do not by themselves supply interface tokens.
- `SF Pro Rounded` is computed-only with no FontFaceSet/source corroboration. Apple SF documentation identifies an Apple platform font; it does not establish an Ollama-distributed webfont.
- Documentation chrome (`docs.ollama.com`) is a separate evidence domain from product-marketing tokens.
- Derived editorial readings across Scope, tasks, Audience, traits, Principles, Application rules, Avoid, Foundations, Typography, Components, Layout, Content, and Named gaps are qualified adjacently in the body; the inventory below is the 1:1 list.
- Token-level color, type, spacing, radius, and shadow claims are sourced from the live inspection named in the YAML claims table.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope `:9` | Three inspected routes as this contract's surfaces; product-marketing values kept off documentation chrome and documentation-chrome values kept off product-marketing tokens |
| Experience Scope `:13` | Readings of the marketing surface as deliberately direct; of the local-first promise as paired with optional cloud rather than replacing the local workflow; of that evolution as echoed in the pricing surface; of the expression as restrained neutral contrast rather than an independently named color system or decorative campaign treatment; of terminal and command language as product content rather than ornament; the closing causal sentence that the story makes the quiet, command-led public surface coherent; narrative facts as not themselves interface tokens |
| Primary tasks `:19` | Selecting the three primary tasks from captured surfaces, controls, and labels; not from the source's persona section |
| Audience `:28` | Dropping the persona section rather than promoting it; carrying no affiliation classification or motivation; using only the source wording that developers should be able to run open models on their own machine |
| Distinctive traits `:32` | Classifying the list as a restatement of the source's Key characteristics, and the groupings inside it |
| Principles `:42` | Four items and every UI implication as the source's own editorial reading, not a published Ollama UI specification |
| Application rules `:55` | Five Do rules and the reasons attached to them |
| Avoid `:65` | Five Don'ts and the reasons inside them |
| Semantic color `:81` | Pairing each hex to its token-set path; `#ffffff` unmerged as page canvas and inverted pricing CTA; `#000000` unmerged as primary text and white pricing-action text; catalog `primary_color` `#000000` unmerged from Ink; `#262626` as header-download and hero-CTA background rather than general ink; `#d4d4d4` as the white-CTA border rather than a general hairline; pill-input `0px solid #6b7280` on that control rather than as a palette token; documentation-chrome colors not promoted as product-marketing tokens |
| Documentation chrome `:94` | Docs-chrome colors and docs-search `#6f6f6f` / docs-card oklab border kept on those docs-only controls; no gradient token asserted from this evidence |
| Spacing `:102` | YAML named steps unmerged from coincidental same numbers on type or padding; `10px 12px` as product-input padding rather than a named spacing step; 4–32px cluster as observed values rather than a published Ollama spacing scale |
| Shape `:110` | `9999` / `9999px` as observed product-control geometry rather than a universal radius scale; 12px docs-search and 16px docs-card radii kept off the product marketing surface |
| Elevation `:118` | Sampled `box-shadow: none` as insufficient grounds for a universal product shadow rule; docs-card transparent ring kept off any product-card elevation token |
| Motion `:124` | Five-kind, per-component promotion gate; official documentation of a single curve or duration is not that gate |
| Font evidence `:132` | Sorting the evidence-class table; promotion decisions for `ui-sans-serif`, `ui-monospace`, `system-ui`, unresolved `SF Pro Rounded`, and declared docs faces; docs surface as therefore not evidence for homepage/pricing typography; Apple SF material as not a license for an Ollama-hosted face |
| Family `:151` | `ui-sans-serif` as the product UI family because it is the high-confidence visible system stack; `ui-monospace` retained only for product command-related UI; `SF Pro Rounded` and declared docs faces refused as family tokens |
| Type roles `:167` | YAML `body-sm` / `body` / `nav` / `section` unmerged; YAML unitless line-height ratios and §3 pixel line-heights as both writings of the same roles rather than converted into each other; unresolved `SF Pro Rounded` metrics off the system-stack family; product-command `14px / 400 / 22.75px` unmerged from body-sm `14px / 400 / 20px`; docs fonts off the homepage/pricing system |
| Assets `:177` | simpleicons slug as an identity pointer rather than as an Ollama-distributed brand file; terminal and command language as product content rather than ornament |
| Capture record `:190` | Applicability-by-meaning note; every interactive-kind and applicability verdict and the reason for either; no `Primitive type` because YAML `tokens.components` is `{}`; not a complete state-coverage claim |
| Layout `:408` | Homepage install-command lead and five named entry points as a narrow captured marketing composition; 4–32px cluster as observed values rather than a published Ollama spacing scale; cloud proposition as following the local starting point instead of displacing it; 12px and 16px radii confined to documentation chrome; documentation chrome not dictating product-marketing layout; 1440×900 as the supplied capture size rather than as a breakpoint system |
| Content Voice samples `:415` | Grouping the three verified strings as voice samples of the captured marketing surfaces |
| Content Voice and tone `:433` | Concise / action-first register; July 2026 post's language as direct developer language; Do / Don't table kept as the source's own voice contract |
| Named gaps `:467` | List as unnamed values rather than as coverage of domains the source never named |

Portable `DESIGN.md` carries 23 complete B2a qualifications. This table is 23 data rows. Preamble sentences on this page are not portable qualifications. Complete form used: "a derived editorial implementation inference from the verified surfaces; it is not Ollama-authored or a separately published UI specification." No published first-party UI specification; the example form is used as-is.

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13, 3 product-surface archetype slots (source says they are not research personas) | Deleted. Not promoted as individuals, tasks, or Audience groups. Archetype labels recorded here as copy-loss disposition, not identifiers: `Local-model developer`, `Integration builder`, `Cloud-scale team member`. Affiliation classification and motivation are not re-hosted. Portable Audience uses only source wording the official homepage / repository / July 2026 post already use. Mention of those labels is disposition, not use. |
| Source §9 Agent Prompt Guide remaining after color/type/component constraints were moved | Deleted as tool-facing prompt. Unique constraints (white canvas, `#000000` text, `#262626` full-pill primary CTA, system sans, local workflow explicit, do not claim or substitute SF Pro Rounded, do not import documentation-site cards or declared docs fonts) already live in Experience / Foundations / Components / Typography. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. The no-token constraint and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling-only values | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |

## Proof notes

- verification_v2 schema 2; conflicts: []
- components_harvested: false
- Interaction expansions: 0; only default component observations promoted
- Uncaptured hover/focus/pressed/disabled/error/dialog/toast/tab/menu treatments are omitted. They are not `not-applicable` solely for that reason. Applicability follows control meaning. State coverage is not claimed complete.
- Loading, error, and success are closed as `not-applicable` on Sign-in ghost, Pricing outlined CTA, Pricing white CTA, and Docs link card for role reasons — destination or pricing-path navigation, never for absence of observation. Docs search success is closed because completing a search presents results elsewhere. Download charcoal CTA, Hero charcoal CTA, and Pill input keep those three states applicable.
- Official history (July 2026 post, Kitematic / Docker Desktop) and Apple SF font documentation are narrative or third-party font-identity context, not product-token sources.
- YAML `tokens.components` is empty, so no portable component carries a `Primitive type` field.
