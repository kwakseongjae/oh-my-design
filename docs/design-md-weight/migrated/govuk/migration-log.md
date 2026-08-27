# GOV.UK migration log

Source: `web/references/govuk/DESIGN.md`
Sibling read (not the migration input): `web/references/govuk/.verification.md`
Destination: `docs/design-md-weight/migrated/govuk/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/govuk/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as committed in this directory. Counts use `grep -o … | wc -l` per file, never `grep -c`, which counts lines.

Source SHA-256 `59ee27200f17f3fea4d404e23f4ab7dca350886d5946b0244aa20c3ef3b203b9` (`web/references/govuk/DESIGN.md`). Sibling SHA-256 `4b766e4e54861b2d8bf0d715f91557f3ba5863e11fdcce6d3113e80d20bbb77c` (`web/references/govuk/.verification.md`). Worker-close portable DESIGN SHA-256 `bad0feb306190f48beffe31463c9041b7f90e312e10b3e017541dbac634932ca`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `primary_color` 옮김 → Scope + Foundations + components; `logo.slug` 옮김 → Typography & Assets Assets | Portable file has no frontmatter; H1 is `# GOV.UK Design System` (`DESIGN.md` 1). Identity table `provenance.md` 7–25. `https://www.gov.uk` is dual: `DESIGN.md` 9 + `provenance.md` 13/46/51 (E2a). `#1d70b8` is dual: `DESIGN.md` 9 + `provenance.md` 14/28 (E2a; body count D 13 / P 17). The favicon slug is dual: `DESIGN.md` 244 + `provenance.md` 15/93/96 (E2a; slug string P 3 — line 26 names the slug without repeating the URL). |
| YAML `omd: "0.1"`, `verified`, `tokens.source: live-extract`, `tokens.extracted`, `tokens.note`, `components_harvested: true`, `ds.name` / `ds.url` / `ds.type: system` / `ds.description` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 16–25, 33–38, 197–198. `ds.type` is provenance-only (`DESIGN.md` 0 / `provenance.md` 2). The source token note is transcribed at `provenance.md` 28. These are ledger keys with no portable slot except `ds.url`, which is also in Scope (`DESIGN.md` 9). |
| YAML `tokens.colors` (25 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 89–132. All twenty-five roles kept with their names and values: primary, primary-hover, brand, action, action-shadow, action-secondary, action-secondary-shadow, action-warning, action-warning-shadow, canvas, foreground, secondary-text, surface, surface-alt, hairline, input-border, focus, focus-text, error, success, visited, on-primary, tag-default-bg, tag-default-fg, notification-banner. Shared hexes stay attached to every key that owns them (`#1d70b8` = primary/brand/notification-banner; `#0f7a52` = action/success; `#ca3535` = action-warning/error; `#0b0c0c` = foreground/input-border/focus-text; `#f3f3f3` = action-secondary/surface-alt). `#1a65a6` (live inspect, not a YAML key) is at `DESIGN.md` 11/42/97. `#000000` (raw DOM input text) is at `DESIGN.md` 116. |
| YAML `tokens.typography.family` (`sans: "GDS Transport"`, `fallback: "arial, sans-serif"`) | 옮김 → Typography & Assets Family | `DESIGN.md` 215–217. Fallback stack is a fallback, not the brand face. |
| YAML `tokens.typography.display-hero / heading-xl / heading-l / heading-m / heading-s / body-l / body-m / caption` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 221–230. Unitless line heights stay ratios and are never converted to px (A1a): `1.1` at 223, `1.15` at 224, `1.11` at 225, `1.25` at 226/229, `1.31` at 227/228, `1.43` at 230; also `provenance.md` 122. All eight YAML `use` strings are restored verbatim on one line at `DESIGN.md` 234 (A1, A3). Heading L 36px on the DS site and 40px on gov.uk are both at 232. Heading XL 48px → 32px on mobile is at 232 and 514. |
| YAML `tokens.spacing` (8 steps) / `tokens.rounded` (4 steps) | 옮김 → Foundations spacing + shape; also Layout | Unitless steps and px forms both kept: `DESIGN.md` 138 (`xs 5 · sm 10 · md 15 · base 20 · lg 30 · xl 40 · xxl 60 · section 80` plus the px scale), 144–147 (`sm/md/lg` 0px; `full: 1` as the 1px tag step), 498 (Layout restatement). `full: 1` stays a step (`DESIGN.md` 147 / `provenance.md` 123). It is not a pill and is not `9999`. |
| YAML `tokens.shadow.button` / `button-secondary` / `button-warning` / `focus` | 옮김 → Foundations elevation | `DESIGN.md` 155–159. Focus shadow `0 -2px #ffdd00, 0 4px #0b0c0c` is a generic focus observation, not a `focus-visible` treatment (`DESIGN.md` 157/274; B1). |
| YAML `tokens.components` (9 records) | 옮김 → Components & States | `DESIGN.md` 278–493. Verified primitive types preserved per component, not flattened to `Kind` (A1b): `Primitive type: \`button\`` ×3 (281/308/333), `input` ×2 (378/406), `badge` (431), `toast` (445), `card` (465), `dialog` (478). All nine YAML `use` strings restored verbatim as `Token-set use:` lines (292/317/342/390/416/438/448/472/483). YAML `font` shorthands kept as `token-set font record` lines (`19px / 400 GDS Transport` at 288/315/340/387/415/437). YAML padding byte forms `8px 10px 7px` (285/312/337/482) and `2px 8px 3px` (435). YAML border byte forms `2px solid #0b0c0c` (382/410) and `10px solid #cecece` (469). |
| §1 Visual Theme & Atmosphere (legacy 80–96) | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–15; Key Characteristics as Distinctive traits 36–43. The atmosphere readings carry an adjacent complete qualifier at 11 (B2/B2a). The surface-boundary reading carries one at 9. |
| §2 Color Palette & Roles (legacy 98–125) | 옮김 → Foundations semantic color | `DESIGN.md` 89–132. The source's own group headings (Brand, Action, Text, Semantic, Surface & Borders) are kept as the grouping. The characterizing phrases the source attaches to roles are covered by the adjacent qualifier at 85 (B2/B2a). `govuk-functional-colour("brand")` / `("text")` / `("error")`, `template-background`, tint-80 / tint-95 / shade-50 / tint-25 are at 93–132. |
| §3 Typography Rules — family, hierarchy (legacy 127–144) | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 204–211; family 215–217; hierarchy table 221–230. The License-row reading carries an adjacent complete qualifier at 210 (B2/B2a). |
| §3 Principles — two weights, 19px default, line-height by function, no tracking, uppercase rare (legacy 146–151) | 옮김 → Typography & Assets Type rules | The observable half of the scale is stated plainly at `DESIGN.md` 238; the interpretive half sits inside the qualified sentence at 240 (B2/B2a). |
| §4 Component Stylings (legacy 153–251) | 옮김 → Components & States | `DESIGN.md` 278–493. §4 body values that YAML does not carry are kept: primary hover `#003a2e` (290/298), Start Now 24px/700 styled link (355–373), twelve named tag colour variants without hex (440), notification-banner success variant `#0f7a52` (446–450), inset left-border-only (468). |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** (legacy 255–258) | 분리 → provenance; URL 일곱 개 옮김 → Experience Scope | Freshness `provenance.md` 32–38; Tier 1 list 51–57; Tier 2 61–62. `https://design-system.service.gov.uk` is dual: `DESIGN.md` 9/564 + `provenance.md` 22/52 (E2a). Conflicts unresolved: none — `provenance.md` 40. |
| §5 Layout Principles (legacy 260–277) | 옮김 → Layout & Platforms + Foundations spacing | `DESIGN.md` 498 (960px `govuk-width-container`, two-thirds/one-third, 40em/48em/64em, gutters 15/30), 138 (spacing + `govuk-spacing($spacing)` 0–9 + 25px/20px/15px rhythm). The "document density" reading carries an adjacent complete qualifier at 500 (B2/B2a). |
| §6 Depth & Elevation (legacy 279–287) | 옮김 → Foundations elevation | Three-level table `DESIGN.md` 153–157, including token-set shadows at 159. The Shadow Philosophy paragraph is carried as a qualified reading at 161 (B2/B2a). The `#ffdd00` focus ring is deliberately not attached to any component `focus-visible` row: `focus-visible` occurs 0 times in the source, measured with `grep -o 'focus-visible' web/references/govuk/DESIGN.md \| wc -l` (B1); recorded at `provenance.md` 202. |
| §7 Do's (legacy 291–299) | 옮김 → Experience application rules | `DESIGN.md` 59–66, under the grouping qualifier at 57. Not placed in Governance controlled copy. |
| §7 Don'ts (legacy 301–309) | 옮김 → Experience avoid | `DESIGN.md` 72–79, under the qualifier at 70. The ninth invented-domain prohibition was deleted in `Revision 2026-08-28 (wave29 review)`. |
| §8 Responsive Behavior (legacy 311–330) | 옮김 → Layout & Platforms | Breakpoint table `DESIGN.md` 504–508 with the "declared behavior rather than an observation" note at 510; touch targets 512 (44px min / 38px rendered / 40px inputs / WCAG 2.5.5 / full-label checkboxes); collapsing strategy 514 (hamburger/accordion, 48px → 32px heading-xl, header band at all widths). |
| §9 Agent Prompt Guide — Quick Color Reference, Example Component Prompts, Iteration Guide (legacy 332–362) | 삭제 | Tool-facing copy-paste prompts and restatements; no receiving slot and no delegation. Every value §9 names was checked against the portable body before deletion and each was already present — the palette hexes, the 0px/1px radii, the 19px/24px/36px/64px sizes, the 400/700 weights, the `8px 10px 7px` paddings, the 2px bottom shadows, Arial-only fallback (not Helvetica, not system-ui), and visited `#54319f` (A2, A3). The check is itemised at `provenance.md` 137. |
| §10 Voice & Tone (legacy 364–378) | 옮김 → Content & Locales | Published strings `DESIGN.md` 521–539; register table 541–549; forbidden register 551. The quoted GDS principle "writing for the web as people actually read it" is at 519. The voice characterization carries an adjacent complete qualifier on that same line (B2/B2a). The qualifier at 553 covers the table and the forbidden-pattern rule (B2/B2a). |
| §11 Brand Narrative (legacy 380–386) | 옮김 → Experience Scope | `DESIGN.md` 13: launch **2012**, consolidation of 750+ government websites, **Government Digital Service (GDS)** established within the Cabinet Office, founding brief "so simple, clear, and fast", Mike Bracken "the single online shop window for government", Design System emerged in **2018**, patterns developed across hundreds of services since 2012, Public Sector Bodies Accessibility Regulations 2018, WCAG as legal requirement. Marked there as narrative context that supplies no interface tokens; the causal "led to" reading and "Nothing in the system is decorative" carry an adjacent complete qualifier in the same paragraph (B2/B2a). Also noted as narrative-not-token-source at `provenance.md` 201. |
| §12 Principles — 5 numbered (legacy 388–394) | 옮김 → Experience principles | `DESIGN.md` 49–53 under the adapted B2a form at 47: the five headings restate published GDS positions the source attributes to GDS; the *UI implication* sentences are "a derived editorial implementation inference from the verified surfaces; they are not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation." The published-DS close is required because the GOV.UK Design System is a first-party issued specification (rulebook v12 B2a 전제 주석). |
| §13 Personas — 4 entries (legacy 396–406) | 삭제 | The source's own italic line at legacy 398 labels them illustrative archetypes informed by publicly stated user-research commitments, not individual people. Not promoted to Audience or to `primary-tasks`, and not re-hosted in the sidecar: no name, age, city, occupation, or segment appears in either output (D2, D2a). Disposition at `provenance.md` 134. Audience at `DESIGN.md` 30 carries only the group-level description the two captured surfaces establish, under an adjacent qualifier. The three `primary-tasks` at 23–25 come from modules and labels the source records; 21 says so and qualifies the step from label to "primary task". |
| §14 States — 12 rows (legacy 408–423) | 옮김 → Components & States surface state contract + per-component applicability | Full twelve-row body preserved at `DESIGN.md` 255–268 (A2; the catalog graph is still 0/440, so nothing is delegated), including the published strings "Cannot start yet", "There are no results matching your search", "Loading…", "There is a problem — [N] errors.", "Enter your [field name]", "This field is required", "Sorry, the service is unavailable", "Application submitted", "Success", and Disabled treatments `opacity: 0.5` / `#f3f3f3` / `#737373`. The applicability rule is at 272–276, whose qualifier at 276 covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | 8 interactive components × 7 states = 56 rows: 48 `applicable` and 8 `not-applicable`, the latter only with a role reason (C2 v10) — Start Now 370–373 (destination link; disabled + L/E/S closed together) and Notification Banner 457–460 (page-level announcement; disabled + L/E/S closed together). Primary / Secondary / Warning buttons, Text Input, Select, and Cookie Banner keep loading/error/success `applicable` with treatments omitted or citing the surface state contract. Inset Text gets no `kind` and no map because the source supplies no interaction evidence for it — `DESIGN.md` 473 (C4). Tag declares `kind: non-interactive` with a reason instead of a map — 431 (Core §4.4). |
| §15 Motion & Easing — durations, easing token names/roles, motion rules, signature motions, reduced-motion (legacy 425–450) | 옮김 → Foundations motion | `DESIGN.md` 167–174 (the four duration tokens with their uses: `govuk-motion-instant` 0ms, `govuk-motion-fast` 100ms, `govuk-motion-standard` 200ms, `govuk-motion-slow` 300ms), 176–182 (three easing token names and roles), 186–196 (conservative mandate, `prefers-reduced-motion` → `motion-instant`, vestibular disorders / epilepsy users, four signature motions without curves). |
| §15 Motion & Easing — three `cubic-bezier` values (legacy 437–442) | 삭제 → provenance omission ledger | No observation stands behind them: the source records a Tier 1 live inspect of colour, type, geometry, border, and shadow and supplies no transition, animation, or easing sample. `ease-exit` `cubic-bezier(0.4, 0, 1, 1)` is byte-identical to the example table at `spec/omd-v0.1.md` line 262, the documented re-injection path. Ledger at `provenance.md` 131–133. Occurrence counts by `grep -o cubic-bezier <file> \| wc -l` → `DESIGN.md` 0, `provenance.md` 3. B3 is held: the promotion condition at `DESIGN.md` 184 names all five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text (E2c). |

## Sibling handling (`web/references/govuk/.verification.md`)

The sibling exists — confirmed with `find web/references/govuk -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact.

- Its full record is transcribed at `provenance.md` 66–89 and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: cookie-button label `Accept additional cookies`, live fill `#00703c`, homepage link `HMRC account: sign in…`, H2 `Popular on GOV.UK`, wordmark `30px`, notification-banner live text `rgb(0, 0, 0)`, every `rgb()` byte form, frequency counts, `/default/index.html` component-page URLs, and selectors `.govuk-button` / `.govuk-tag` / `.govuk-select`. Recorded at `provenance.md` 107–118. DESIGN.md **0** for those sibling-only strings (`Accept additional cookies` D 0 / P 2; `HMRC account: sign in` D 0 / P 2; `Popular on GOV.UK` D 0 / P 2; `#00703c` D 0 / P 3). `30px` in DESIGN is the source gutter / spacing-scale value only (D 4, all at 138/498); the sibling wordmark `30px` is not a portable type role.
- Its structural classifications were likewise not promoted (B1): the component-page URLs, the frequency-scan ranks, the `#00703c` live variant, and the sibling conflict-matrix pairing of `#1a65a6` as `DS colour spec` `link` token. The portable body keeps source `#0f7a52` as the action token and source `#1a65a6` as live inspect beside `#1d70b8` (DS specification). The fused body string is removed in `Revision 2026-08-28 (wave29 review)`.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. `compared < candidates` is expected, so the A5a hand sweep is mandatory and was run.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Brand-issued strings in the source body (labels, CTAs, headings, error/empty/success copy, founding quotations) | 38 distinct | 0 | 0 | All 38 survive in `DESIGN.md` Content & Locales and/or Components. |
| Brand-issued strings in the sibling | 6 distinct | 0 | 0 | Sibling-only labels `Accept additional cookies`, `HMRC account: sign in…`, `Popular on GOV.UK` survive in provenance. Source-shared `Save and continue` / `Find address` / `Delete account` / `Completed` / `GOV.UK` / `The best place to find government services` survive in DESIGN. |
| `node test-v2/tools/latin-copy-audit.mjs --brand govuk` after provenance | 64 candidates | 3 reported | 0 | The three are §13 fictional-persona identifiers (a status-tag example, a numbered task-list example, and a National-Insurance format example). Deleted with the personas under D2 (D2a: not restated). First run (DESIGN only) reported 10 lost; seven of those were sibling-only copy or UI-meta (selectors, getdesign phrase) and were restored into provenance, not the portable body. Re-run: lost 3, all D2. |

Sub-needle labels the machine check could not see were confirmed present individually in `DESIGN.md`: The best place to find government services, GOV.UK, Save and continue, Start now, Continue, Confirm and send, Find address, Add another, Delete account, Completed, In progress, Not started, Cannot start yet, Check your State Pension, Apply for Universal Credit, Check your eligibility, For example, 27 3 2007, Your details have been saved, Your appeal has been submitted, There are no results matching your search, Loading…, There is a problem, Enter your date of birth, Sorry, the service is unavailable, Application submitted, so simple, clear, and fast, the single online shop window for government, writing for the web as people actually read it, Please, Click here, Submit.

A5 분모: latin-copy-audit 64 candidates / 3 missing / 0 published-copy missing (the 3 are D2 deletions). Sibling published-copy 3/3 survived in provenance.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand govuk --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 0, candidates: 217, detail: "바늘 0개" }]`. Separately, `scripts/design-md-core.cjs` `inspectDesignMd` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 0 < `candidates` 217.

## Deviations recorded

- `DESIGN.md` is 8,044 words by `wc -w` at worker close, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: nine declared component records with dual `use`/`font`/`padding` forms, a twelve-row surface state contract, a 56-row applicability matrix, homepage vs Design System domain splits, the 2012/2018/GDS narrative, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- The GOV.UK Design System is a published first-party design system, so every derived-editorial close names that specification instead of copying the toss example's "not a separately published UI specification" (rulebook v12 B2a 전제 주석). Worker-close measure `grep -o 'published GOV.UK Design System documentation' DESIGN.md \| wc -l` = 24. Auditor measure after F3 = 26. Post-revision measure = 25 (Scope proxy close removed; see Revision).
- The source names seven Tier 1 URLs. Computed component values attach to the homepage and to the named component pages; the colour-page URL is a token-spec source and is named in Scope as part of the Design System surface.

## F1 B2a scan (mandatory pass 1)

Re-read the whole portable body after drafting. Every causal, interpretive, or judgment sentence — including Scope "so/because/led to" sentences, Content voice characterization, and Docs-citation character — was asked whether it is a brand-issued fact or a derived reading. Derived readings have an adjacent complete qualifier (evidence class closed through "not GOV.UK-authored or taken from a separately published UI specification, including the published GOV.UK Design System documentation"). Count: 25 complete forms at `DESIGN.md` 9, 11, 13, 21, 30, 34, 47, 57, 70, 85, 140, 149, 161, 165, 210, 211, 217, 240, 244, 253, 276, 500, 510, 519, 553. Provenance inventory 25 rows at `provenance.md` 168–192. 25 = 25. The Scope proxy close at former 15 was removed in `Revision 2026-08-28 (wave29 review)`.

GDS-authored positions (Start with needs; WCAG 2.2 AA / Public Sector Bodies Accessibility Regulations 2018; Content Design Manual reading age 9; progressive enhancement; NHS/HMRC/Home Office consistency) are attributed as the source's own, not wrapped in the derived-editorial close. The causal sentences inside those items that are not marked *UI implication*, and the *UI implication* sentences, carry the close at 47.

## F2 E2 cross-check (mandatory pass 2)

Each log row above was written only after `grep` confirmed the value in the named file and section. Dual destinations name both. Compliance claims (B3 at `DESIGN.md` 184; B2a 25=25; C1/C2/C4 as cited) are made only because the full text is present in the body.

YAML `tokens.*` key-path self-check (`grep -oF <value> DESIGN.md | wc -l`, by key path, not by shared number):

| Key path | Value | DESIGN.md count | Slot |
|---|---|---:|---|
| tokens.colors.primary / brand / notification-banner | `#1d70b8` | 13 | Semantic color Brand |
| tokens.colors.primary-hover / tag-default-fg | `#0f385c` | 3 | Semantic color Brand |
| tokens.colors.action / success | `#0f7a52` | 13 | Semantic color Action |
| tokens.colors.action-shadow | `#083d29` | 5 | Semantic color Action + Elevation |
| tokens.colors.action-secondary / surface-alt | `#f3f3f3` | 6 | Semantic color Action + Surface |
| tokens.colors.action-secondary-shadow | `#858686` | 5 | Semantic color Action + Elevation |
| tokens.colors.action-warning / error | `#ca3535` | 8 | Semantic color Action + Semantic |
| tokens.colors.action-warning-shadow | `#651b1b` | 5 | Semantic color Action + Elevation |
| tokens.colors.canvas / on-primary | `#ffffff` | 12 | Semantic color Surface + Text |
| tokens.colors.foreground / input-border / focus-text | `#0b0c0c` | 19 | Semantic color Text |
| tokens.colors.secondary-text | `#484949` | 1 | Semantic color Text |
| tokens.colors.surface | `#f4f8fb` | 1 | Semantic color Brand |
| tokens.colors.hairline | `#cecece` | 3 | Semantic color Surface |
| tokens.colors.focus | `#ffdd00` | 15 | Semantic color Semantic + Elevation + Components (Focus observation, not focus-visible rows) |
| tokens.colors.visited | `#54319f` | 4 | Semantic color Semantic |
| tokens.colors.tag-default-bg | `#d2e2f1` | 3 | Semantic color Brand + Tag |
| tokens.typography.display-hero.size | 64 | in Display Hero row 223 | Type roles, not Spacing |
| tokens.typography.heading-xl.size | 48 | in Heading XL row 224 | Type roles |
| tokens.typography.heading-l.size | 36 | in Heading L row 225 | Type roles |
| tokens.spacing.lg | 30 (unitless) / 30px | 1 unitless step at 138; 30px is spacing/gutter only at 138/498 | Spacing, not Shape |
| tokens.rounded.full | 1 | 2 (`full: 1`) | Shape, not Spacing |
| tokens.components.button-primary.height | 38px | Primary Button 286 | Components |
| tokens.components.text-input.height | 40px | Text Input 385 / Select 413 | Components |

easywallet-type false pass is avoided: `16` as Body M size (229) is not treated as preserving a missing spacing-16; this token set has no 16 spacing step. `1` as `rounded.full` is not treated as preserved by an unrelated count of the digit 1.

## Revision 2026-08-28 (wave29 review)

규칙집 v12. 확정 FAIL 3만 수정. 존재 여부 재논쟁 없음. 파일은 `find`로 확인한 뒤 `grep -oF <패턴> <파일> | wc -l`로 파일별 실측. Avoid 1행 삭제로 산출 DESIGN.md 600→599. 그 줄 이후 원장·로그 포인터는 전수 재검증해 갱신. B2a 완전형 26→**25** / 원장 26→**25**(1:1). Scope proxy 한정과 그 원장 행을 같이 지움 — 발명 도메인을 한정으로 덮는 것이 아니라 문장 자체를 지운다.

**1. A1 사실 소실 — §15 `vestibular disorders` / `epilepsy`.** `prefers-reduced-motion` → `motion-instant` 규칙은 이미 Motion `:188`에 있었다. 빠진 것은 원본 §15:444가 그 규칙 옆에 둔 고유명사다. 같은 불릿에 원문 복원: `The system's users include people with vestibular disorders, epilepsy, and cognitive disabilities for whom unexpected motion is a barrier.` 원본 사실이라 새 B2a·원장 행 없음.

**2. 항목4·9·5 융합 — `:97` `DS colour spec` / `link token`.** `:11`·`:42`는 원본 쌍(`#1a65a6` live inspect / `#1d70b8` DS specification)을 유지했다. `:97`만 sibling `.verification.md`:57의 `DS link token`과 원본 live inspect를 `DS colour spec \`link\` token and live-inspect link colour on the Design System colour page`로 합쳤다. 그 문자열은 원본 0 / sibling 0. 역할명을 `Link (live inspect)`로 되돌리고 Recorded use를 원본 §1:95 표현으로 복원. sibling의 `DS colour spec` `link` token 분류는 provenance 전사·conflict matrix에만 남김.

**3. D1 — 발명 도메인 `native application` / `back-office`.** Scope 옛 `:15` 첫 문장+한정, Avoid 옛 `:80` 9항이 원본·sibling에 없는 도메인을 범위 밖으로 세웠다. 원본 `native`는 `native <select>`·`browser native page transitions`뿐이고 `backoffice`는 삭제된 §13 1회뿐이다. 세 문장을 지움(부정 claim으로 닫지 않음). NHS/HMRC/Home Office를 토큰 출처로 쓰지 않는다는 원본 문장만 Scope `:15`에 남김. Avoid는 원본 8항. 절 머리의 「9번째는 이관이 추가한 경계」도 같이 지움. Font evidence Outside-captures(`department services`)는 이 두 문자열을 안 써서 유지.

실측 (`find`로 산출 4파일·원본·sibling 존재 확인 후 `grep -oF` | `wc -l`, 파일별):

| 패턴 | 원본 | sibling | DESIGN.md | provenance.md |
|---|---:|---:|---:|---:|
| `vestibular disorders` | 1 | 0 | **1** | 0 |
| `epilepsy` | 1 | 0 | **1** | 0 |
| `cognitive disabilities` | 1 | 0 | **1** | 0 |
| `DS colour spec` | 0 | 1 | **0** | 1 |
| `link token` | 0 | 1 | **0** | 1 |
| `DS specification` | 1 | 0 | 3 | 0 |
| `#1a65a6` | 1 | 4 | 4 | 4 |
| `native application` | 0 | 0 | **0** | 0 |
| `back-office` | 0 | 0 | **0** | 0 |

`#1a65a6` DESIGN 4 = Scope `:11` + Distinctive `:42` + Semantic `:97` 값칸 + `:97` 원본 쌍 문장. 검토 당시 3은 `:98` 융합 문장이 hex를 반복하지 않았기 때문. `DS specification` DESIGN 3은 같은 원본 쌍이 `:11`·`:42`·`:97`에 착지한 횟수. provenance `DS colour spec`/`link token` 각 1은 sibling 전사이지 본문 승격이 아니다. 이 절과 로그 본문이 같은 패턴을 다시 세면 그 횟수는 이 파일의 분모다(E2d).

**줄 포인터.** DESIGN.md 600→599. B2a 25줄 = 원장 25행(`provenance.md` 168–192): 9, 11, 13, 21, 30, 34, 47, 57, 70, 85, 140, 149, 161, 165, 210, 211, 217, 240, 244, 253, 276, 500, 510, 519, 553. B3 `DESIGN.md` 184. `#1a65a6` 11/42/97. 전수 재검증, stale 0. audit-log의 `:15`·`:212`는 F3 당시 기록으로 보존.

**안 건드린 것.** 토큰 값 · 컴포넌트 표 구조 · state 표의 다른 행 · 남은 B2a 완전형 25문장 · 원본 `web/references/govuk/**`.

`--gate-only` `verdict: PASS`, `problems: []`. `portable_core: true`. F2 `#1d70b8` 13 · `#0f7a52` 13 · `full: 1` 2.

Post-revision DESIGN.md SHA-256: `8fd7048f7728d38654fcca911013f73442973666cd010e96a872357d2b708163`. provenance.md SHA-256: `214bd02166d3907f42dffdac23083aa6b4cdf8182186d316e957950b9bdf6d88`.
