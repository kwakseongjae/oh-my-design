# Jumpit provenance

Not part of the portable `DESIGN.md`. Source ledger, freshness, raw evidence, and omission record for the T2 migration. The canonical source remains `web/references/jumpit/DESIGN.md` until catalog adoption; this file is not a catalog-adoption claim.

## Identity

| Field | Value |
|---|---|
| id | jumpit |
| name | Jumpit |
| country | KR |
| category | productivity |
| homepage | `https://www.jumpit.co.kr` |
| primary_color | `#00dd6d` |
| logo.type | favicon |
| logo.slug | `https://www.google.com/s2/favicons?domain=jumpit.co.kr&sz=256` |
| omd format (source) | 0.1 |
| verified | 2026-05-15 |
| tokens.source | prose-derived |
| tokens.extracted | 2026-06-09 |
| components_harvested | true |

The homepage URL is dual-destination: identity metadata here, and the catalog homepage field named in `DESIGN.md` §1. The two computed-token surfaces are `https://jumpit.saramin.co.kr/` and `https://jumpit.saramin.co.kr/positions?sort=popular`. The primary color is dual: identity here, and Foundations / the two recorded chrome uses in `DESIGN.md`. The Google s2 favicon slug is dual: identity here, and a portable Assets classification in `DESIGN.md` §3. There is no `ds.name` / `ds.url` / `ds.type` field in the source frontmatter (A1c: the absence is recorded, not filled).

**Logo decision.** The catalog field is `logo.type: favicon` with a Google s2 proxy URL. That is an identity pointer, not a Jumpit-hosted brand file.

## Freshness

| Event | Date |
|---|---|
| verified | 2026-05-15 |
| surfaces inspected | 2026-05-15 |
| tokens.extracted | 2026-06-09 |

The source footer records the verification verbatim as **Verified:** 2026-05-15. That producer string is ledger metadata and has no portable slot (A1c).

Conflicts unresolved: none — as the source footer states. JobCard inner spacing + hover/pressed/focus/disabled states + semantic ladder flagged for UPDATE pass.

## Surfaces and sources

| id | kind | url | inspected |
|---|---|---|---|
| home | product-surface | `https://jumpit.saramin.co.kr/` | 2026-05-15 |
| positions | product-surface | `https://jumpit.saramin.co.kr/positions?sort=popular` | 2026-05-15 |

### Tier 1 (as listed in the source footer)

- CDP `:9222` live capture on `jumpit.saramin.co.kr/` (52 samples)
- `/positions?sort=popular` (60 samples)
- `assets/_reference/.live-inspect-proof.json` (10 raw_samples retained)

### Tier 2

- `https://getdesign.md/jumpit` → "No designs found" (verified 2026-05-15)
- `https://styles.refero.design/?q=jumpit` → no result cards (verified 2026-05-15)

Tier 2 data was not used to establish any token or component value.

## Token note

The YAML `tokens.source` value is `prose-derived`. The source frontmatter has no `tokens.note` field and no `ds.type` field.

## Sibling handling

`find web/references/jumpit -type f` lists `DESIGN.md`, `_research.md`, and four files under `assets/_reference/`. There is no `.verification.md`. `_research.md` is a separate research log, not the migration input. Nothing in it was used to establish a portable body fact that the source body does not already record. Research-only strings (mention here is not portable-body use): a 2020-12 public-launch date and the tagline pattern `개발자 커리어를 위한 점핏`.

## Byte-form notes

- The source frontmatter records hero-title / section-h3 line heights as unitless `1.3` and body as unitless `1.5`. They are carried in that form in the portable type-role table. Observed `~1.3` / `~1.5` / 48px button / 84px tall-block spellings sit on the §3 prose and component records. They are not rewritten as replacements for the unitless figures (A1a).
- `tokens.spacing.xs: 8` is not `tokens.rounded.sm: 8`.
- `tokens.spacing.sm: 16` is not `tokens.typography.body.size` `16` and is not CTA padding `16px`.
- `tokens.spacing.md: 24` is not section-h3 `24`.
- `tokens.spacing.base: 32` is not hero-title `32`.
- `tokens.spacing.lg: 40` is not the 40px chip height and is not footer padding `40px 0px 30px`.
- `tokens.rounded.full: 9999` is a shape key. It is not a §4 component radius.
- `tokens.colors.canvas` and `tokens.colors.inverse` both write `#ffffff` and stay two keys.
- YAML hex is lowercase (`#00dd6d`, `#fbfbfb`). The §2 prose writes uppercase (`#00DD6D`, `#FBFBFB`). Both forms stay.
- YAML `tokens.components.chip-role-rest.bg` is `#ffffff`. §4 prose writes rest Background: transparent. Both writings stay; they are not folded.
- YAML `type` is attached only to the ten component records that have it. JobCard keeps `Primitive type: card` and omits kind / applicability (C4).

## Omission ledger

| Omitted | Boundary | Reason |
|---|---|---|
| §13 inferred personas | whole fictional-biography class (four entries) | The source marks them as inferred from positioning, not a published research artefact. No name, age, city, motivation, or affiliation class is restated here (D2, D2a). Audience keeps only the source’s own publicly observable groups (developers / engineers; recruiters). |
| Recommended downstream motion table | three unattributed `cubic-bezier` values | Source §15 labels them inferred placeholders / Toss style-ref. Durations `0ms` / `120ms` / `200ms` / `400ms` in that table are the same inferred set. Observable carousel auto-rotate and the `<150ms` inferred chip note stay in Foundations with a qualifier. |
| Toss-family semantic hexes | `#F04452` / `#1FA463` / `#FFA940` as Jumpit tokens | Source §2 / §14 name them as a downstream recommendation, not a captured Jumpit ladder. The portable body keeps the “rather than re-tinting `#00DD6D`” instruction and records `#F04452` only as an inferred placeholder that is not promoted. |
| Inferred hover / disabled treatments | `#222` tint / `#F5F5F5` plate / `#444` 50% alpha | Source §14 marks them inferred / flagged. Visual treatments omitted. |
| Inferred dropdown hairline | `likely #E5E5E5` | Source §4 flags the border colour as not captured cleanly. The likely hex is not promoted. |

Agent-prompt / tool-command sentences in source §9 are deleted as tool workflow. Brand constraints that already have Experience / Foundations / Components slots stay there. The unique §9 notes (skip 500 except footnotes / micro-meta; `#888` below WCAG AA at 14px; add a semantic h1) land in Typography.

## Claim ledger

| Claim | Surface |
|---|---|
| `tokens.colors.brand` / `heading` / `heading-soft` / `body` / `muted` / `inverse` / `canvas` / `footer-plate` | home + positions live |
| `tokens.typography.family.sans` / `family.mono` Pretendard Variable | home + positions live (112/112) |
| `tokens.typography.hero-title` / `section-h3` / `cta` / `body` / `chip-active` / `footer-link` / `eyebrow` | home + positions live |
| `tokens.spacing.xs` / `sm` / `md` / `base` / `lg` | home + positions live |
| `tokens.rounded.sm` / `md` / `lg` / `full` | home + positions live |
| `tokens.shadow.none` | home + positions live (112 samples) |
| `tokens.components.button-primary` | home chrome |
| `tokens.components.chip-role-active` / `chip-role-rest` / `dropdown-filter` | positions live |
| `tokens.components.card-hero` / `eyebrow-brand` / `heading-section` / `link-viewall` | home live |
| `tokens.components.card-job` | positions live |
| `tokens.components.link-footer` | home footer |
| Published strings 점핏 / 사람인HR / 회원가입 / 로그인 / 요즘 폼 미친 기업s / #꿀 피드 / 테마별 모음.zip / 전체 보기 / 더.루키 / 기술스택 / 경력 / 지역 / 태그 | source §1 / §4 / §10 |
| 2019 market gap / Saramin's challenge / résumé spam / recruiter cold-outreach / 2005 founding / Guro-gu Seoul / KOSDAQ 143240 / `jumpit.co.kr` → `jumpit.saramin.co.kr` / companion brands / syntax highlight / taste to engineers / closing founder/launch-quote sentence | source §11 narrative |

## Proof notes

- Two named Tier 1 captures, recorded 2026-05-15. 52 + 60 = 112 live element samples. `components_harvested: true`; ten component records in the source token set.
- The source records no `focus-visible` string. Uncaptured hover, pressed, focus, disabled, empty, loading, error, success, and skeleton treatments are omitted as values; they are not turned into `not-applicable`. Applicability follows control role. State coverage is not claimed complete.
- Jumpit has no published first-party UI specification in the source (`getdesign.md/jumpit` → "No designs found"). Derived-editorial qualifications therefore close with the toss-form example: not Jumpit-authored or a separately published UI specification (rulebook v12 B2a 전제 주석).
- 2019 market gap, Saramin's challenge / résumé spam / recruiter cold-outreach, 2005 Saramin founding, Guro-gu Seoul, KOSDAQ 143240, companion brands, domain consolidation, the two-appearance restriction, the syntax-highlight / taste-confidence closing, and the source §11 founder/launch-quote sentence are source-stated narrative. They stay in Experience Scope as narrative context, not as interface tokens.

## Portable derived-editorial scope

Every passage in the portable `DESIGN.md` that carries the derived-editorial qualification. The qualification itself stays in the body; this table is an index, not its home. Measured against `DESIGN.md` with `grep -o 'derived editorial implementation inference' … | wc -l` (file-level, not `grep -c`): **26**. This table has **26** rows (E1 1:1). The same 26 lines also carry `not Jumpit-authored` and `separately published UI specification`.

| Portable location | Qualified material |
|---|---|
| Experience — Scope ¶1 (`DESIGN.md` 9) | Two captures as token surfaces; catalog homepage as identity, not a third computed surface; consolidation as a domain fact; every value stays attached to the surface that established it |
| Experience — Scope ¶2 (`DESIGN.md` 11) | Classifying the six atmosphere wordings as source statements; keeping `#00DD6D` / `#00dd6d` on the two recorded chrome uses |
| Experience — Scope ¶3 (`DESIGN.md` 13) | Classifying the 2019 / 2005 / consolidation / companion-brand narrative, including the résumé-spam challenge sentence, the syntax-highlight / taste-confidence closing, and the founder/launch-quote sentence, as context that does not supply tokens |
| Experience — Primary tasks (`DESIGN.md` 19) | Selecting the three surface-and-control tasks, each naming a recorded surface or control; not taken from the persona section |
| Experience — Audience (`DESIGN.md` 28) | Reading the source-named groups as audience; keeping inferred biographies off the list |
| Experience — Distinctive traits (`DESIGN.md` 32) | Grouping the eight traits |
| Experience — Principles (`DESIGN.md` 45) | The five source principles |
| Experience — Application rules (`DESIGN.md` 55) | The five Do-list rules and the reasons attached to them |
| Experience — Avoid (`DESIGN.md` 65) | The Don’t-list prohibitions, including the §9 corporate-HR register line |
| Foundations — Semantic color (`DESIGN.md` 81) | Role names taken from the source token-set keys; palette-role slotting; canvas / inverse stay two `#ffffff` keys; keep-both hex case; heading / heading-soft / body stay separate |
| Foundations — Semantic discipline (`DESIGN.md` 92) | “Binary signal, not a colour ladder” as source discipline; Toss-family instruction off the role rows |
| Foundations — Spacing (`DESIGN.md` 98) | Five unitless steps, not a grid; `8` / `16` / `24` / `32` / `40` stay on their own records; ~24/32/40px section rhythm stays an inferred observation, not a spacing token |
| Foundations — Shape (`DESIGN.md` 109) | Keeping `sm: 8` / `md: 20` / `lg: 100` / `full: 9999` / card `0px` on their own paths |
| Foundations — Elevation (`DESIGN.md` 113) | Classifying the terminal-not-banking wording as a source statement; `box-shadow: none` as the recorded elevation token |
| Foundations — Motion (`DESIGN.md` 123) | Five-kind promotion gate; `<150ms` as inferred observation; no motion token promoted from the downstream table |
| Typography — Font evidence (`DESIGN.md` 140) | Official product-use as an absent published token; live computed as the only machine UI-family; OFL as licence boundary; `family.mono` as a second shared-name key; 1280×720 as a capture viewport |
| Typography — Family (`DESIGN.md` 149) | No-substitution rule; Pretendard Variable canonical only where 112/112 computed use agrees |
| Typography — Type roles (`DESIGN.md` 167) | Unitless `1.3` / `1.5` kept beside `~` / 48px / 84px spellings; body `16` stays off spacing `16`; no-`<h1>` and `#888` notes as source a11y flags; binary emphasis / skipped 600 / type-does-the-brand-work as source §3 principles |
| Typography — Assets (`DESIGN.md` 175) | Google s2 favicon as an identity pointer, not a hosted brand file; imagery absences as omitted fields |
| Components — Capture record (`DESIGN.md` 197) | Inferred `#222` / `#F5F5F5` / `#444` 50% / `#F04452` treatments as omitted values, not published state tokens |
| Components — Applicability (`DESIGN.md` 201) | Role-based decision procedure; interactive-kind and not-applicable verdicts; refusal to treat the map as a complete state-coverage claim |
| Components — Role Filter Chip (`DESIGN.md` 274) | Captured Active as the source’s canonical active-state token, not a seventh canonical-state row |
| Layout (`DESIGN.md` 430) | Desktop samples rather than a responsive contract; native-app sentence as a recorded footer-CTA fact; UPDATE-flagged mobile viewport left unnamed as a new domain list; light-mode-only as a capture observation, not a published color-scheme contract |
| Content — Voice samples (`DESIGN.md` 458) | Three OmD-original samples as illustrative shape evidence rather than lifted Jumpit copy |
| Content (`DESIGN.md` 502) | Byte-exact / gloss-beside rule; voice adjectives and recruiter comparison as a public-voice observation; OmD-original samples as illustrative shape evidence |
| Governance — Recorded unresolved (`DESIGN.md` 536) | Named values rather than permissions to invent; naming the list from the source’s own unresolved fields |
