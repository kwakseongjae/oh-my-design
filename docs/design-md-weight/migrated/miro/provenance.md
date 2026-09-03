# Miro provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/miro/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | miro |
| name | Miro |
| country | US |
| category | design-tools |
| homepage | `https://miro.com` |
| primary_color | `#fde050` |
| logo.type | simpleicons |
| logo.slug | miro |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |
| ds.name | Mirotone |
| ds.url | `https://www.mirotone.xyz` |
| ds.type | system |
| ds.description | Miro's base CSS component library for applications on the Miro platform. |
| ds.og_image | `https://www.mirotone.xyz/cover.png` |

The homepage URL is dual-destination: identity metadata here, and the inspected routes `https://miro.com/ko/` / `https://miro.com/ko/pricing/` are the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / yellow promo in `DESIGN.md`. The simpleicons slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. `ds.type: system` / `ds.name: Mirotone` / `ds.url` / `ds.description` are ledger fields (A1c). Mirotone as a named official system is also in the portable Scope. `ds.og_image` is ledger-only.

**Logo decision.** The catalog field is `logo.type: simpleicons` / `logo.slug: miro`. That is an identity pointer, not a Miro-hosted file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states. YAML `verification_v2.conflicts: []`.

## Surfaces

| id | kind | url | inspected |
|---|---|---|---|
| home | public-marketing | `https://miro.com/ko/` | 2026-07-13 |
| pricing-desktop | public-pricing | `https://miro.com/ko/pricing/` | 2026-07-13 |
| pricing-repeat | public-pricing-repeat | `https://miro.com/ko/pricing/` | 2026-07-13 |

The pricing URL was captured twice; the repeat is not a third distinct route.

## Sources

| id | kind | url | captured |
|---|---|---|---|
| home-live | product-surface | `https://miro.com/ko/` | 2026-07-13 |
| pricing-live | product-surface | `https://miro.com/ko/pricing/` | 2026-07-13 |
| miro-about | official-doc | `https://miro.com/about/` | 2026-07-13 |
| miro-aura | brand-asset | `https://miro.com/aura/` | 2026-07-13 |
| miro-identity | brand-asset | `https://miro.com/blog/miro-vis/` | 2026-07-13 |
| mirotone-docs | official-doc | `https://developers.miro.com/docs/design-guidelines` | 2026-07-13 |
| roobert-foundry | brand-asset | `https://displaay.net/typeface/roobert` | 2026-07-13 |
| roobert-license | license | `https://displaay.net/help/licenses` | 2026-07-13 |

### Tier 1 (as listed in the source footer)

- `https://miro.com/ko/`
- `https://miro.com/ko/pricing/`
- `https://miro.com/about/`
- `https://miro.com/aura/`
- `https://miro.com/blog/miro-vis/`
- `https://developers.miro.com/docs/design-guidelines`
- `https://displaay.net/typeface/roobert`
- `https://displaay.net/help/licenses`

### Tier 2 (as listed in the source footer)

- `https://getdesign.md/miro/design-md` (third-party independent analysis; summary only)
- `https://styles.refero.design/?q=Miro` (attempted search; service returned an internal error)

Tier 2 data was not used to establish any token or component value.

## Token note

Source frontmatter `tokens.note`, kept here as a ledger string and also landed in the portable body as the fact it names (`DESIGN.md` Scope):

> Machine tokens are limited to supplied public marketing/pricing capture. Mirotone, Aura, and documentation establish context only; they do not supply unobserved live variants.

## Sibling handling (`web/references/miro/.verification.md`)

The sibling exists — confirmed with `find web/references/miro -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-13. Workflow: `omd:add-reference` UPDATE using only the supplied `artifacts/reference-evidence/miro.json` for live observations. No browser recapture or MCP was used.
- Sources: `https://miro.com/ko/` · `https://miro.com/ko/pricing/`. Collector: three capture records (two distinct public URLs), 53 component variants, four observed states, six dialog interactions, and coverage score 100.
- Surface-domain table in the sibling names `home` as a public marketing surface, `surface-2` / `surface-3` as public pricing (repeat of the same URL), Aura as official brand/product story, Mirotone developer guidance as official documentation chrome, and About as official company/history context.
- Font-evidence extras the source body does not write as counts: `roobertPROLocal` 298 visible uses; `Roobert PRO SemiBold` / `Roobert PRO SemiBold Italic` 3 / 3; `sans-serif` 219 uses; computed `Roobert PRO` 15 uses with no matching loaded FontFace.
- Dialog-open extra: `460px × 764px`.
- Official-context extra the source body does not name: `https://miro.com/newsroom/miro-puts-ai-where-teams-work/` (2025 AI Innovation Workspace framing); `https://miro.com/accessibility/` as a URL (the source body names the Accessibility page as a provenance without that URL).
- Tier 2 extra: getdesign identifies a third-party “Visual collaboration. Bright yellow accent, infinite canvas aesthetic” analysis and states it is independent and not affiliated with or endorsed by Miro. No values were promoted.

Sibling-only strings stay in this file. They are mention (disposition), not use as portable tokens.

## Claim ledger

Claims use YAML anchors from the source: `home_live` = home / home-live / computed-style / 2026-07-13; `pricing_live` = pricing-desktop / pricing-live / computed-style / 2026-07-13; `font_live` = home / home-live / computed-style-fontfaceset-and-source-url / 2026-07-13; `toggle` = pricing-desktop / pricing-live / computed-style-and-observed-state / 2026-07-13.

| claim | surface |
|---|---|
| tokens.colors.brand-yellow | home |
| tokens.colors.action-blue | pricing-desktop |
| tokens.colors.action-blue-border | pricing-desktop |
| tokens.colors.ink | home |
| tokens.colors.canvas | pricing-desktop |
| tokens.colors.border-input | home |
| tokens.colors.border-control | pricing-desktop |
| tokens.colors.border-subtle | pricing-desktop |
| tokens.colors.muted | pricing-desktop |
| tokens.typography.family.ui | home |
| tokens.typography.family.display | home |
| tokens.typography.display-hero.size / weight / lineHeight / tracking / use | home |
| tokens.typography.display-section.size / weight / lineHeight / tracking / use | home |
| tokens.typography.body.size / weight / lineHeight / use | pricing-desktop |
| tokens.typography.action.size / weight / lineHeight / use | pricing-desktop |
| tokens.spacing.xs / sm / md / lg / xl / xxl | home |
| tokens.rounded.control | pricing-desktop |
| tokens.rounded.segmented | pricing-desktop |
| tokens.components.pricing-period-toggle.type / radius / height / padding / states / use | pricing-desktop |

## Capture selectors

These pointers are dual-destination with the portable component Use lines (E2a).

| Component | Pointer |
|---|---|
| Yellow promo action | `home::[data-omd-capture="0"]`; repeated `surface-2::[data-omd-capture="76"]` |
| Blue pricing action | `surface-2::[data-omd-capture="136"]`; repeated on `surface-3` |
| Outlined pricing action | `surface-2::[data-omd-capture="137"]`; repeated on `surface-3` |
| Email input | `home::[data-omd-capture="82"]` |
| Pricing-period toggle checked | `surface-2::[data-omd-capture="86"]` |
| Pricing-period toggle unchecked | `surface-2::[data-omd-capture="85"]` |
| Pricing dialog | `surface-2::[data-omd-interaction-capture="dialog-0-8"]` |
| Disabled circular home control (§14 only) | `home::[data-omd-capture="100"]` |
| Public display hero | `home::h1` |
| Public section heading | `home::h2` |
| Pricing control/list text | `surface-2::[data-omd-capture="89"]` |

## Proof notes

- verification_v2 schema 2; conflicts: []
- `components_harvested: true`; one component record in the source token set (`pricing-period-toggle`, `type: toggle`)
- The source records no `focus-visible` string. Uncaptured hover, pressed, focus, error, loading, toast, and animation treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Miro has a published first-party design system (Mirotone, `ds.type: system`). Derived-editorial qualifications therefore close by naming that specification: not Miro-authored or taken from a separately published UI specification, including the published Mirotone documentation (rulebook v12 B2a 전제 주석).
- About, Aura, 2023 identity work, and Mirotone documentation are source-stated narrative/library context. They stay in Experience Scope as context, not as interface tokens for unobserved live variants.
- The disabled 36px circular home control is retained in the portable Capture record only; it is not generalized into a component token.

## Derived editorial inventory

| Location in DESIGN.md | Qualified reading |
|---|---|
| Experience Scope ¶1 | Two public marketing/pricing URLs as this contract's token surfaces; Mirotone, Aura, and documentation as context that does not supply unobserved live variants; every value kept on the surface that established it |
| Experience Scope ¶2 | Yellow as a signal / canvas before chrome / Workroom energy readings of the captured layer |
| Experience Scope ¶3 | Founding-and-identity narrative as context that does not by itself supply interface tokens; last-sentence split as this capture's evidence-domain split rather than as a Mirotone token rule |
| Experience Primary tasks | Selecting the three captured public marketing or pricing controls as primary tasks; they do not come from the persona section |
| Experience Audience | Reading the source-named first-party stakeholder groups as this product's audience; not turning their descriptions into primary tasks |
| Experience Distinctive traits | Classifying the list as a restatement of the source's recorded public layer, and the groupings and the readings inside it |
| Experience Principles | Four numbered stems and their UI implications as the source's own Principles section, grouped as this reconstruction's principles |
| Experience Application rules | The four Do-list rules and the reasons attached to them |
| Experience Avoid | The four Don't-list prohibitions and the reasons inside them |
| Foundations Semantic color | Palette-role slotting; yellow off action-blue off action-blue-border; canvas off dialog `oklch(1 0 0)` and off outlined transparent; canvas fill off Blue pricing action text off Email input background even where they share a hex; three borders unmerged; Aura named accents as narrative rather than machine tokens |
| Foundations Spacing | YAML unitless steps kept on their own path; px cluster as the source's own writing; `lg: 16` off action size `16` and off email padding `16px`; `sm: 8` off `rounded.control` `8`; `xl: 24` off action lineHeight `24` and off dialog padding; `xs: 4` off a type size |
| Foundations Shape | `control: 8` off `segmented: 40`; YAML beside px; segmented `40` off yellow promo height `40px`; local `50%` off both YAML keys |
| Foundations Elevation | Local dialog two-part shadow rather than a depth system; public buttons largely flat |
| Foundations Motion | Five-kind promotion gate; reduced motion as a behavioral boundary rather than a duration table; no duration or easing value promoted |
| Typography Font evidence | Aura as official product-use rather than a Mirotone type ramp; Displaay as foundry licence boundary rather than a Miro redistribution grant; declared-only faces not UI tokens; `sans-serif` / unresolved `Roobert PRO` not substitutes |
| Typography Family | No-substitution rule; loaded families canonical only where computed use and loaded sources agree; `roobertPROLocal` as an alias rather than a separately named UI family token |
| Typography Type roles | YAML unitless line heights and tracking kept off observed px; YAML Display off the yellow-promo 900 row; action `16` off spacing `16` |
| Typography Type roles after tables | Display-hero `lineHeight` `56` is not a replacement for display-hero `size` `56`; two keys that share a numeral |
| Typography Assets | simpleicons slug as an identity pointer, not a hosted brand file |
| Components Capture record ¶1 | Attaching YAML primitive type only to Pricing-period toggle; treating the other §4 records as outside the token set |
| Components Capture record | Role-based applicability procedure; interactive-kind and not-applicable verdicts; YAML `type: toggle` attached only to Pricing-period toggle; kind and map omitted on the pricing dialog; disabled circular control retained in the record only; generic Focus not treated as a focus-visible treatment |
| Components Pricing dialog | Omitting interactive kind and a state-applicability map on the captured dialog (C4 restatement at the dialog) |
| Layout & Platforms | Measurements as local captured geometry rather than a complete grid or breakpoint system; `1440x900` as the collector's capture size rather than as a layout token |
| Content & Locales | First-party language as a narrative and content boundary rather than a complete product-microcopy guide; quoted strings required byte-exact |
| Governance Named gaps | Naming the list from the source's own unresolved fields rather than adding surfaces the source did not name |

## Omission ledger

Mention (disposition) is not use (re-hosting). This table names what was dropped and where the drop is recorded. It does not re-list fictional demographics, and it does not assert portable-body absence in the same sentence that reprints a dropped string as if it were a surviving token.

| Item | Disposition |
|---|---|
| Source §13 Personas — three first-party stakeholder groups | Not treated as fictional individuals. Group wordings stay in Experience Audience. No name, age, or city was present to delete (D2, D2a). Motivations are not rewritten as Primary tasks. |
| Source §9 Agent Prompt Guide | Deleted as tool-facing prompt. Brand constraints already live in Foundations, Typography, Components, Experience application rules, and Avoid. Checked value by value before deletion: see the next paragraph. |
| Unattributed cubic-bezier curves | None in the source. Nothing to delete. Duration and signature-motion statements were not deleted because the source names none to keep; the no-token constraint, the reduced-motion behavioral boundary, and the B3 promotion gate stay in portable Motion. |
| Sibling-only computed values listed under Sibling handling | Ledger only |
| Tier 2 getdesign / Refero lookup detail | Ledger only |
| YAML `ds.og_image` | Ledger only (`https://www.mirotone.xyz/cover.png`) |
| Legacy H1 `# Design System Inspiration of Miro` | Replaced by the Core v2 identity line `# Miro Design System`. |
| Legacy footer `**Verified:** … / Tier 1 / Tier 2 / Conflicts unresolved` | Moved to Freshness and Sources above. |

§9 deletion check (A3). Every value §9 names was confirmed present elsewhere in the portable body before the section was dropped. Public pricing CTA `#3859ff` fill, white text, `#7a90fe` 1px border, 8px radius, `11px 15px` padding, 48px height — Blue pricing action. Miro Yellow `#fde050` compact public promo action with `#1c1c1e` text, 8px radius, `8px 12px` padding, 40px height — Yellow promo action. Functional body/UI text in Noto Sans; FontFaceSet-backed Roobert display for short public headings — Typography Family / Type roles. Pricing-period selector checked and unchecked treatments only — Pricing-period toggle. No §9-only value was dropped.

## Notes on evidence separation

- Public marketing home and public pricing are the token surfaces. Mirotone, Aura, and documentation are context; they do not supply unobserved live variants. Every value in the portable body carries its domain.
- Mirotone is a published first-party component library for applications on the Miro platform, so its existence is recorded. That does not make the migration's own state-applicability and kind verdicts part of that documentation; the portable body says so at the head of Components & States.
- The sibling's RGB spellings, dialog `460px × 764px`, `roobertPROLocal` 298-use count, SemiBold sparse faces, 2025 newsroom URL, and collector totals stayed in this file. None of them became a structural fact in the portable body.
- Motion has no computed duration or easing in this capture. Reduced motion is a behavioral boundary from the official Accessibility page. The five-kind gate stays in portable Motion.
