# JANDI provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/jandi/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | jandi |
| name | JANDI |
| country | KR |
| category | productivity |
| homepage | `https://www.jandi.com` |
| primary_color | `#00c473` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=www.jandi.com&sz=128` |
| omd format (source) | 0.1 |
| verified | 2026-07-13 |
| tokens.source | reconciled |
| tokens.extracted | 2026-07-13 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the inspected landing route `https://www.jandi.com/landing/kr` is the portable scope record in `DESIGN.md` §1. The primary color is dual: identity here, and Foundations / the public global navigation action in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a JANDI-hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-07-13 |
| verification_v2.checked | 2026-07-13 |
| surfaces inspected | 2026-07-13 |
| sources captured | 2026-07-13 |
| tokens.extracted | 2026-07-13 |

The source footer records the verification verbatim as **Verified:** 2026-07-13. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | marketing | `https://www.jandi.com/landing/kr` | 2026-07-13 |
| surface-2 | marketing | `https://www.jandi.com/landing/kr` | 2026-07-13 |
| surface-3 | marketing-feature | `https://www.jandi.com/landing/kr/features/collaboration` | 2026-07-13 |
| surface-4 | marketing-feature | `https://www.jandi.com/landing/kr/features/member` | 2026-07-13 |
| surface-5 | marketing-security | `https://www.jandi.com/landing/kr/security` | 2026-07-13 |
| surface-6 | marketing-ai | `https://www.jandi.com/landing/kr/jandi-ai` | 2026-07-13 |

YAML `verification_v2.sources` also names `surface-home` through `surface-surface-6` as product-surface captures on those same URLs, plus:

| id | kind | url | captured |
|---|---|---|---|
| company-context | official-doc | `https://finalpick.jandi.com/landing/en/company` | 2026-07-13 |
| project-context | official-doc | `https://blog.jandi.com/ko/2026/06/08/pr-project-2-0/` | 2026-07-13 |
| docs-chrome | official-doc | `https://support.jandi.com/en/articles/Changing-themes-bf4edc58` | 2026-07-13 |
| noto-license | license | `https://notofonts.github.io/noto-docs/website/use/` | 2026-07-13 |

### Tier 1 (as listed in the source footer)

- `https://www.jandi.com/landing/kr` (public marketing; two capture records)
- `https://www.jandi.com/landing/kr/features/collaboration`
- `https://www.jandi.com/landing/kr/features/member`
- `https://www.jandi.com/landing/kr/security`
- `https://www.jandi.com/landing/kr/jandi-ai`
- `https://finalpick.jandi.com/landing/en/company` (first-party context)
- `https://blog.jandi.com/ko/2026/06/08/pr-project-2-0/` (first-party context)
- `https://support.jandi.com/en/articles/Changing-themes-bf4edc58` (documentation-domain classification only)
- `https://notofonts.github.io/noto-docs/website/use/` (Noto licence boundary only)

### Tier 2

- `https://getdesign.md/jandi` — attempted; built-in-web open returned an internal error / no usable JANDI record
- `https://styles.refero.design/?q=jandi` — attempted; built-in-web open returned an internal error / no usable JANDI record
- Built-in web search for both catalogs — no usable JANDI design record returned

Tier 2 data was not used to establish any token or component value.

## Token note

The source frontmatter has no `tokens.note` field. The YAML `tokens.source` value is `reconciled`.

## Sibling handling (`web/references/jandi/.verification.md`)

The sibling exists — confirmed with `find web/references/jandi -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record.

Its own record, transcribed here:

- Inspected 2026-07-13. Method: supplied deterministic collector evidence (`artifacts/reference-evidence/jandi.json`) plus first-party and Tier 2 built-in-web checks. No browser capture was rerun and no MCP was used. Artifact captured `2026-07-13T12:47:47.679Z`. Six surface records for five distinct public URLs, coverage score `71`, 27 component fingerprints, and zero observed states, interaction kinds, and interaction events.
- `home::[data-omd-capture="10"]` — `background-color: rgb(0, 196, 115)`; `color: rgb(255, 255, 255)`; `border: 1px solid rgb(0, 196, 115)`; `border-radius: 6px`; `padding: 7px 14px`; `font: 14px / 500 / "Noto Sans", sans-serif`.
- `home::h1` — `color: rgb(255, 255, 255)`; `font-size: 56px`; `font-weight: 700`; `line-height: 80px`.
- `home::h2` — `color: rgb(0, 0, 0)`; `font-size: 42px`; `font-weight: 700`; `line-height: 60px`.
- `home::[data-omd-capture="19"]` — `background-color: rgb(255, 255, 255)`; `color: rgb(4, 25, 17)`; `border-radius: 6px`; `padding: 12px 30px`; `font: 15px / 500 / "Noto Sans", sans-serif`.
- `surface-3::[data-omd-capture="11"]` — `role: button`; `background-color: rgba(0, 0, 0, 0)`; `border-radius: 10px`; `padding: 12px`; `font: 16px / 400 / "Noto Sans", sans-serif`; class `floatingNavButton Collaboration_icon1__cFiWm`.
- `surface-4::[data-omd-capture="11"]` — same geometry; class `floatingNavButton Member_icon1__MIU61`.
- `surface-5::li.Security_securityEnvironmentList__3CRP0` — `background-color: rgb(255, 255, 255)`; `border-radius: 16px`; `box-shadow: rgba(0, 18, 47, 0.08) 0px 14px 24px 0px`; `padding: 40px 32px 54px`.
- `surface-6::li.JandiAi_aiEnvironmentList__2ng2t` — same padding/radius; `box-shadow: rgba(0, 18, 47, 0.16) 0px 14px 24px 0px`.
- FontFaceSet: `Noto Sans` loaded/high; seven `NotoSans-{Thin,DemiLight,Light,Regular,Medium,Bold,Black}` OTF URLs under `https://cdn.jandi.com/landing/_next/static/media/`. `icomoon` (four JANDI-CDN sources) and `swiper-icons` (one embedded WOFF) declared-only.

Sibling-only items (transcribed as sibling records; mention here is not portable-body use):

- RGB spellings of hex values already in the source (`rgb(0, 196, 115)`, `rgb(4, 25, 17)`, `rgb(255, 255, 255)`, `rgb(0, 0, 0)`)
- `home::h1` computed as white text (the source names `#000000` as observed body and heading ink and does not assign a hero-ink token)
- Card `box-shadow` values `rgba(0, 18, 47, 0.08) 0px 14px 24px 0px` and `rgba(0, 18, 47, 0.16) 0px 14px 24px 0px` — the sibling itself says a shadow is retained only in this record’s raw samples and is not elevated to a token
- Floating-nav `background-color: rgba(0, 0, 0, 0)` and class `floatingNavButton`
- Collector totals coverage `71` / 27 fingerprints / artifact timestamp `2026-07-13T12:47:47.679Z`
- CDN path `https://cdn.jandi.com/landing/_next/static/media/` and the seven `NotoSans-*` filenames
- Toss Lab **2014** founding and company-page principles about ownership, sharing work records, and teamwork (the source body dates the JANDI launch to 2015 and does not name 2014)

## Byte-form notes

- The source frontmatter records hero / section / nav-action line heights as unitless `1.43`. They are carried in that form in the portable type-role table. Observed px spellings `80px` / `60px` / `66px` sit on the §2 / Type-roles prose. They are not rewritten as replacements for `1.43` (A1a).
- `tokens.spacing.nav-action-x: 14` is not `tokens.typography.nav-action.size` `14`.
- `tokens.spacing.landing-action-x: 30` is not a radius.
- `tokens.rounded.security-card: 16` is not the 16px / 400 type on the cards and is not `tokens.components.ai-environment-card.radius` `16px`.
- `tokens.colors.canvas` and `tokens.colors.on-dark` both write `#ffffff` and stay two keys.
- YAML `tokens.components.security-environment-card.type: card` and `tokens.components.ai-environment-card.type: card` are attached only to those two cards. Global navigation action, landing action, and feature floating navigation are not in the token set.
- YAML hex is lowercase. The portable body keeps that form.

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 named or demographic personas | whole fictional-biography class | The source invented none. First-party stakeholder groups (individual contributors, team managers, teams) are retained in Audience in the source’s own wording. No name, age, city, or invented affiliation is restated here (D2, D2a). |
| Agent-prompt / tool-command section | absent from this source | This 16-section source has no §9 Agent Prompt Guide. §9 is Content & Voice and is mapped, not deleted. |

No `cubic-bezier` from the `spec/omd-v0.1.md` example table appears in the source. The source lists no duration, easing, animation, or reduced-motion value.

## Claim ledger

Claims use the YAML anchors from the source: `*home` = home / surface-home / computed-style / 2026-07-13; `*collaboration` = surface-3 / surface-surface-3; `*security` = surface-5 / surface-surface-5; `*ai` = surface-6 / surface-surface-6.

| Claim | Surface |
|---|---|
| `tokens.colors.primary` / `canvas` / `on-dark` / `ink` / `ink-muted` / `muted` / `action-ink` | home live |
| `tokens.typography.family.ui` Noto Sans | home live |
| `tokens.typography.hero` (size, weight, lineHeight, use) | home live |
| `tokens.typography.section` (size, weight, lineHeight, use) | home live |
| `tokens.typography.nav-action` (size, weight, lineHeight, use) | home live |
| `tokens.spacing.nav-action-y` / `nav-action-x` / `landing-action-y` / `landing-action-x` | home live |
| `tokens.rounded.action` | home live |
| `tokens.rounded.floating-nav` | surface-3 live |
| `tokens.rounded.security-card` | surface-5 live |
| `tokens.components.security-environment-card` (type, bg, radius, padding, use) | surface-5 live |
| `tokens.components.ai-environment-card` (type, bg, radius, padding, use) | surface-6 live |
| Published strings JANDI / 잔디 / Toss Lab / Project 2.0 / Noto Sans / SIL Open Font License / icomoon / swiper-icons | source §1 / §3 / §10 / §11 |
| 2015 JANDI launch / June 2026 Project 2.0 / messenger-integrated project-management / contributor and manager visibility / closing sentence that this reference keeps that product evolution separate from the measured public-marketing styles | source §1 / §11 narrative |

## Capture selectors

| Component | Pointer |
|---|---|
| Global navigation action | `home::[data-omd-capture="10"]` and the corresponding selector on `surface-2` through `surface-6` |
| Landing action | `home::[data-omd-capture="19"]` and `surface-2::[data-omd-capture="19"]` |
| Feature floating navigation | `surface-3::[data-omd-capture="11"]` (`Collaboration_icon1__cFiWm`); `surface-4::[data-omd-capture="11"]` (`Member_icon1__MIU61`) |
| Security environment card | `surface-5::li.Security_securityEnvironmentList__3CRP0` |
| AI environment card | `surface-6::li.JandiAi_aiEnvironmentList__2ng2t` |

## Proof notes

- Nine named Tier 1 sources, recorded 2026-07-13. The five distinct public-marketing URLs (six capture records) are the computed-token surfaces. The company page, Project 2.0 announcement, support-centre theme article, and Noto licence page are brand or licence sources, not computed-token surfaces for the live palette.
- `components_harvested: true`; two component records in the source token set (`security-environment-card`, `ai-environment-card`).
- The source records no `focus-visible` string. Uncaptured hover, pressed, focus, disabled, error, dialog, menu, and responsive treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- JANDI has no published first-party UI specification in the source. Derived-editorial qualifications therefore close with the toss-form example: not JANDI-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- 2015 JANDI launch, June 2026 Project 2.0, messenger-integrated project-management, contributor and manager visibility redesign, and the source §11 closing sentence (this reference keeps that product evolution separate from the measured public-marketing styles) are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **23**. This table has **23** rows (E1 1:1). The same 23 lines also carry `not JANDI-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 (`DESIGN.md` 9) | Six marketing records / five URLs as token surfaces; company, Project 2.0, support-centre, and Noto licence pages do not supply computed tokens |
| Experience — Scope ¶2 (`DESIGN.md` 11) | Classifying the four atmosphere wordings as source statements; keeping recorded public-marketing values on the six capture records rather than as an authenticated-product design system |
| Experience — Scope ¶3 (`DESIGN.md` 13) | Classifying the 2015 / Project 2.0 narrative, including the closing separate-from-measured-styles sentence, as context that does not supply tokens |
| Experience — Primary tasks (`DESIGN.md` 19) | Selecting the three surface-and-control tasks, each naming a recorded surface or control; they do not come from the persona section |
| Experience — Audience (`DESIGN.md` 28) | Reading the source-named groups as audience; keeping announced-experience descriptions off the primary-task list |
| Experience — Distinctive traits (`DESIGN.md` 32) | Grouping the six traits |
| Experience — Principles (`DESIGN.md` 43) | The four source principles |
| Experience — Application rules (`DESIGN.md` 52) | The four Do-list rules and the reasons attached to them |
| Experience — Avoid (`DESIGN.md` 61) | The four Don’t-list prohibitions |
| Foundations — Semantic color (`DESIGN.md` 74) | Role names taken from the source token-set keys; palette-role slotting; `canvas` and `on-dark` stay two `#ffffff` keys; ink / action-ink and ink-muted / muted stay separate |
| Foundations — Spacing (`DESIGN.md` 88) | Four unitless steps, not a grid; `nav-action-x: 14` stays off type `14`; `landing-action-x: 30` stays off radius |
| Foundations — Shape (`DESIGN.md` 98) | Keeping `action: 6` / `floating-nav: 10` / `security-card: 16` / AI-card `16px` on their own paths |
| Foundations — Elevation (`DESIGN.md` 102) | Reading the removed universal card-shadow as a token-set boundary rather than as a live elevation token |
| Foundations — Motion (`DESIGN.md` 108) | Five-kind promotion gate; no motion token promoted from this capture |
| Typography — Font evidence (`DESIGN.md` 125) | Official product-use as evolution account; live computed as the only machine UI-family; OFL as licence boundary; declared-only faces not UI tokens; measured hierarchy not a full product type scale; support-centre as domain classification |
| Typography — Family (`DESIGN.md` 133) | No-substitution rule; Noto Sans canonical only where computed use, FontFaceSet, and JANDI-CDN OTF URLs agree |
| Typography — Type roles (`DESIGN.md` 145) | Unitless `1.43` kept beside §2 px spellings; landing-action `15` stays off nav-action `14` |
| Typography — Assets (`DESIGN.md` 153) | Google s2 favicon as an identity pointer, not a hosted brand file; imagery and icon absences as omitted fields |
| Components — Capture record (`DESIGN.md` 160) | Zero observed states as omitted treatments, not a published state token; focus-indicator sentence as implementation inference |
| Components — Applicability (`DESIGN.md` 164) | Role-based decision procedure; interactive-kind and not-applicable verdicts; refusal to treat the map as a complete state-coverage claim |
| Layout (`DESIGN.md` 274) | Desktop public-marketing samples rather than a responsive contract; page container / breakpoint / logged-in application shell / universal grid left unnamed |
| Content (`DESIGN.md` 300) | Byte-exact / gloss-beside rule; “correspondingly concise…” as a public-voice observation rather than a complete product-microcopy guide |
| Governance — Recorded unresolved (`DESIGN.md` 334) | Named values rather than permissions to invent; naming the list from the source’s own unresolved fields |
