# Melon migration log

Source: `web/references/melon/DESIGN.md`
Sibling read (not the migration input): `web/references/melon/.verification.md`
Destination: `docs/design-md-weight/migrated/melon/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/melon/provenance.md`
Date: 2026-09-02
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination count below was checked with a Python substring scan / `grep -oF --` against the three output files before it was written (F2). Counts use per-file match lists, never a remembered count. `grep -c` was not used.

Source SHA-256 `d7ed3b075364e5542807ee7dfc286255dfd45aa944d2d9d6beb5fc2eee6d9092` (`web/references/melon/DESIGN.md`). Sibling SHA-256 `7b99a916586e623969f195fde2a97ffa42c3507da3b0a1d722d80d545736f39e` (`web/references/melon/.verification.md`).

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; catalog `primary_color` 옮김 → Semantic color; `logo.type` / `slug` 옮김 → Typography & Assets | Portable file has no frontmatter. H1 is `# Melon Design System`. Identity table `provenance.md`. YAML homepage `https://www.melon.com` DESIGN dest 1 / provenance dest 5 (E2a). Catalog `#00CD3C` DESIGN dest 9 / provenance dest 4 (E2a). YAML lowercase `#00cd3c` DESIGN dest 2 / provenance dest 3 (E2a). Favicon URL `https://www.google.com/s2/favicons?domain=melon.com&sz=128` DESIGN dest 1 / provenance dest 1 (E2a). |
| YAML `omd: "0.1"`, `verified`, `tokens.source: prose-derived`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c). Exact `prose-derived` DESIGN dest 0 / provenance dest 2. `components_harvested` DESIGN dest 0 / provenance dest 2. Conflicts unresolved: none — provenance Freshness. |
| YAML `tokens.colors` (8 keys) | 옮김 → Foundations semantic color · 분리 → provenance claim ledger | YAML lowercase kept beside prose uppercase. `signature-green` `#00cd3c` DESIGN dest 2 / P dest 3. `green-dark` `#00b523` DESIGN dest 1 / P dest 3. `green-login` `#00d344` DESIGN dest 4 / P dest 3. `text-primary` `#1a1a1a` DESIGN dest 3 / P dest 4. `text-body` `#666666` DESIGN dest 11 / P dest 5. `text-muted` `#999999` DESIGN dest 10 / P dest 7. `red-accent` `#df2607` DESIGN dest 2 / P dest 3. `canvas` `#ffffff` DESIGN dest 7 / P dest 7. Prose `#00CD3C` DESIGN dest 9 / P dest 4. Same-hex keys not merged. Four `#ffffff` / `#FFFFFF` roles (canvas, login `fg`, search-input YAML `bg`, list-row `bg`) stay separate in the claim ledger and in provenance byte-form notes. |
| YAML `tokens.typography.family.sans` / `mono` | 옮김 → Typography Family | `Pretendard` DESIGN dest 12 / P dest 8. Sans and mono kept as two keys with the same family, not resolved into a separate monospace face. |
| YAML `tokens.typography.heading` / `control` / `body` metrics + `use` | 옮김 → Type roles table | YAML numbers kept beside §3 px (A1a): heading YAML `14` off control YAML `13` off login-button `14px`. YAML `use` verbatim dual dest: `Headings/primary text, near-black #1a1a1a` DESIGN dest 1 / P dest 1; `Interactive controls and inputs` DESIGN dest 1 / P dest 1; `Dense list rows and metadata, muted gray` DESIGN dest 1 / P dest 1 (E2a). §3 Controls purpose `sit slightly larger than body for tap targets` DESIGN dest 1 / P dest 0 (Type roles Notes, restored in `Revision 2026-09-02 (wave45 review)`; YAML short use stays dest 1). Body §3 expansion already in Notes. |
| YAML `tokens.spacing` (`xs: 2` … `section: 48`) | 옮김 → Foundations Spacing | Exact `xs: 2` DESIGN dest 1 / P dest 1. Exact `section: 48` DESIGN dest 1 / P dest 1. Unitless steps kept unitless; not rewritten as replacement px. |
| YAML `tokens.rounded` (`sm: 0` / `md: 0` / `lg: 0` / `full: 9999`) | 옮김 → Foundations Shape | Exact `full: 9999` DESIGN dest 5 / P dest 3. Captured buttons and inputs stay 0px. No use invented for `full`. |
| YAML `tokens.shadow.none` `"none"` | 옮김 → Foundations Elevation | Exact `tokens.shadow.none` DESIGN dest 1 / P dest 1. Source §6 "no measured shadow or elevation token" DESIGN dest 1. |
| YAML `tokens.components.login-button` `type: button` | 옮김 → Components Login Button | Exact `type: button` DESIGN dest 1 / P dest 1 (A1b). YAML `bg` `#00d344` beside §4 `#00D344`. YAML `font` `14px/400` DESIGN dest 2 / P dest 5 beside §4 `14px / 400`. Use `Primary login, sharp-cornered green` DESIGN dest 1 / P dest 1. Height 42px is §4-only and stays on the component. |
| YAML `tokens.components.search-input` `type: input` | 옮김 → Components Search Input | Exact `type: input` DESIGN dest 1 / P dest 1 (A1b). YAML `bg` `#ffffff` kept beside §4 `Background: transparent` DESIGN dest 1; neither selected. YAML `tokens.components.search-input.fg` DESIGN dest 1 / P dest 0 (Text row; key path restored on the Search Input block). Use `Search field, light-gray text` DESIGN dest 1 / P dest 1. YAML `font` `13px/400` DESIGN dest 1 / P dest 5. Height 40px is §4-only. |
| YAML `tokens.components.list-row` `type: listItem` | 옮김 → Components Body / List Text | Exact `type: listItem` DESIGN dest 1 / P dest 1 (A1b). Kind omitted — no interactive-kind evidence (C4). YAML `tokens.components.list-row.fg` DESIGN dest 1 / P dest 0 (Text row; key path restored on the Body / List Text block). Use `Dense chart/list row text` DESIGN dest 1 / P dest 1. YAML `font` `12px/400` DESIGN dest 1 / P dest 2. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience Scope + Distinctive traits | Scope atmosphere paragraph keeps `wears that scale on its sleeve`, `dense, white, content-first surface`, `tightly ruled spreadsheet of songs`, `soft consumer app`, `#00CD3C in the source CSS`, `near-twin #00D344`, `rationed carefully`, `lets the green do all the signaling`, `unmistakably brand-green-on-white`, `scan, tap, and keep listening`. Adjacent complete qualifier on that paragraph (B2/B2a). Token-surface bound qualified on the opening paragraph. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `appears ~11x in the live CSS` DESIGN dest 1. Exact `live body renders rgb(102,102,102)` DESIGN dest 2 / P dest 0. `rgb(102,102,102)` DESIGN dest 2 / P dest 2 (E2a; provenance writes `body text computed rgb(102,102,102)`, not the live-body-renders phrasing). `only saturated color allowed to carry meaning` DESIGN dest 2. `disciplined grayscale ladder` DESIGN dest 2. Qualified at Semantic color. Component-local keep of login-button green and search-input YAML background qualified on the same subsection. |
| §3 Typography Rules | 옮김 → Typography & Assets | Family Pretendard with 맑은 고딕 (Malgun Gothic) fallback. `맑은 고딕` DESIGN dest 7 / P dest 3 (E2a). `Malgun Gothic` DESIGN dest 4 / P dest 0 (gloss sits beside the Hangul in the portable body; A5 keeps the original, does not replace it). `Color, not size, does most of the hierarchy work` DESIGN dest 1. §3 Controls purpose `sit slightly larger than body for tap targets` DESIGN dest 1 / P dest 0 (Type roles Notes; YAML `Interactive controls and inputs` dest 1 stays). Qualified at Font evidence, Family, Type roles, Type hierarchy. |
| §4 Component Stylings | 옮김 → Components & States | Login / Search / List Text as above. `the sharp-cornered green button that anchors account entry` DESIGN dest 1. `placeholder and text both render in light gray #999999` DESIGN dest 1. `workhorse text style across the streaming grid` DESIGN dest 1. `uniformly square (0px radius)` DESIGN dest 1, with an adjacent complete qualifier on that restatement. |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** / **Proof** | 분리 → provenance; 세 URL 옮김 → Experience Scope + Typography Font evidence | Freshness provenance. `https://tech.kakaoent.com` DESIGN dest 2 / P dest 3 (E2a). `https://www.kakaocorp.com/page/service/service/Melon` DESIGN dest 2 / P dest 3 (E2a). `Kakao Entertainment tech, Melon's operator` DESIGN dest 1 / P dest 1. `Kakao Corp official Melon service page` DESIGN dest 1 / P dest 1. `getdesign.md/melon` DESIGN dest 0 / P dest 1 (lookup, not portable copy). `NOT LISTED` DESIGN dest 0 / P dest 1. |
| §5 Layout Principles | 옮김 → Layout & Platforms | `built around density` DESIGN dest 1. `ruled cells rather than floating cards` DESIGN dest 2. `wayfinding rides on color, not on heavy chrome` DESIGN dest 1. `maximize the number of songs and controls in view` DESIGN dest 1. Qualified at Layout. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `flat by design` DESIGN dest 1. `no measured shadow or elevation token` DESIGN dest 1. `single tightly organized sheet` DESIGN dest 2. `near-black #1A1A1A and the signature green #00CD3C advancing against the white field` DESIGN dest 1. Qualified at Elevation. |
| §7 Do's | 옮김 → Experience application rules | Five Do lines kept as written. Qualified at Application rules. Not placed in Governance controlled copy. |
| §7 Don'ts | 옮김 → Experience avoid | Four Don't lines kept as written, including `signaling power` DESIGN dest 1 and `the density depends on small 12-14px text` DESIGN dest 1. Qualified at Avoid. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | `desktop web surface of melon.com` DESIGN dest 2. `No mobile breakpoint measurements` DESIGN dest 1. `density-first philosophy` DESIGN dest 2. `any narrower layout would be expected to preserve the small type scale and the rationed green rather than redesign around them` DESIGN dest 1. `40-42px range` DESIGN dest 1. `search input 40px, login button 42px` DESIGN dest 1. `comfortable tap targets even within the dense frame` DESIGN dest 1. `desktop-capture measurements` DESIGN dest 2 / P dest 1 (E2a). |
| §9 Agent Prompt Guide | 삭제; unique constraints already in Experience/Foundations/Typography/Components | Tool-facing prompt. Every value §9 names was checked against the portable body before deletion (A2, A3). The check is itemised at provenance Omission ledger. No skill/adapter delegation. |
| §10 Voice & Tone | 옮김 → Content & Locales | `utilitarian and unfussy` DESIGN dest 1. `brief, functional, and direct` DESIGN dest 1. `through the green, not through chatty copy` DESIGN dest 2 / P dest 1 (E2a). `you came to listen, not to read` DESIGN dest 2. Qualified at Content. No synthetic voice samples invented. |
| §11 Brand Narrative | 옮김 → Experience Scope | Closing sentence kept: `streaming is a daily utility` DESIGN dest 1 / P dest 1; `fast, dense, and unmistakably green-on-white` DESIGN dest 1 / P dest 1. `utility at scale` DESIGN dest 1. `operated by Kakao Entertainment` DESIGN dest 3. Qualified as brand-context-not-tokens. |
| §12 Principles — 6 items | 옮김 → Experience principles | Six stems under the B2a form: `Density over decoration`, `Green is precious`, `Sharp corners`, `Color-driven hierarchy`, `White ground always`, `Content first`. `chrome stays out of the way` DESIGN dest 1. |
| §13 Personas — three entries | 삭제 | Not independently verified audience records. Not promoted to Audience or to `primary-tasks`, and not re-hosted in the sidecar (D2). No name, age, or city was present to delete (D2a). Role-label strings named only on this deletion row for copy-loss disposition: `The daily listener`, `The chart watcher`, `The quick searcher`. DESIGN dest 0 / provenance dest 0 for each label. Primary tasks come from recorded modules and controls, not from persona motives. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Full six-row body preserved, including `Hover, pressed, focus, and disabled state values were not captured` DESIGN dest 1 and `intentionally left undocumented rather than invented` DESIGN dest 1. `Active / selected (nav, tabs, player)` DESIGN dest 2 kept as a surface-level named appearance; no nav/tab/player component invented. Graph not used (A2). |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Two interactive controls declare the seven canonical states. Login Button (`type: button`) keeps loading/error/success `applicable` because sign-in is a committed operation (C2). Search Input (`type: input`) keeps loading/error/success `applicable` because a search runs and can fail or resolve (C2). List-row gets no kind and no map (C4). Non-observation is never used as a `not-applicable` reason (C1). `not-applicable` as a table verdict DESIGN dest 0 (the word appears only in the capture-record rule that forbids using absence as that reason). B1: no focus-visible row carries a hex. This is not a complete state-coverage claim. Capture-record qualifier present. |
| §15 Motion & Easing | 옮김 → Foundations motion | `No motion, transition, or easing values were captured` DESIGN dest 1. `static and efficiency-driven` DESIGN dest 1. `restrained, functional motion (if any) rather than expressive animation` DESIGN dest 1. `stay subtle and quick` DESIGN dest 2. `no specific durations or curves are claimed because none were measured` DESIGN dest 2. No unattributed cubic-bezier in the source; nothing to delete. B3 is held: Foundations Motion names computed transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component gate and the partial-confirmation clause, in full text (E2c). `transition properties` dest 1. `animation name` dest 1. `reduced-motion behavior` dest 1. The five-kind gate itself carries an adjacent complete B2a close on the same line. |

## Sibling handling (`web/references/melon/.verification.md`)

The sibling exists — confirmed with `find web/references/melon -type f`, since a dotfile is invisible to `ls` and to a `*` glob. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at provenance Sibling handling and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: CSS file URL `https://static.melon.co.kr/static/web/resource/style/w1/jw/x/vcztjn3yp.css`; method `playwright getComputedStyle (live DOM) + raw source-file fetch`; short hex `#666` / `#999`; login-button `rgb(0,211,68)`; country-source gloss that the three pages are Korean; `>= 2 non-Western`. Measured `DESIGN.md` 0 for those sibling-only strings: `static.melon.co.kr` 0 · `playwright getComputedStyle` 0 · `rgb(0,211,68)` 0.
- Hexes, `~11x`, `rgb(102,102,102)`, Pretendard, 12px body, login 42px / 0px / 14px/400, search 40px / 13px/400 / `#999999` / `transparent`, and the three Tier 1 URLs also stand in the source body and are corroboration.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. `맑은 고딕` is the one Hangul published string; it appears quoted as a fallback name. A hand sweep of published copy is mandatory when `compared < candidates`.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Hangul runs in the source, any length | 1 distinct (`맑은 고딕`) | 0 | 0 | Portable + provenance |
| YAML `use` strings | 6 | 0 | 0 | All six land verbatim in Type roles / component Token-set use |
| Brand-issued Latin labels / CTAs | 0 distinct issued CTAs | 0 | 0 | Source records no product microcopy labels |
| Sibling published strings | 0 sibling-only issued labels that the source body lacked | 0 | 0 | Sibling adds collector method, CSS URL, `rgb()` forms, and short hex, not new brand-issued copy |

A5 분모: hand sweep Hangul 1/0; YAML use 6/0; brand-issued CTA 0; sibling published 0 additional issued labels. `verdict: PASS` is recorded below as a gate run result only.

## State applicability (C2)

Judged by role meaning, not by primitive name and not by capture completeness.

| Component | loading / error / success | Reason class |
|---|---|---|
| Login Button | applicable | Sign-in is an operation that runs to completion; treatments omitted |
| Search Input | applicable | A search runs and can fail or resolve; treatments omitted |
| Body / List Text | map omitted | No interactive-kind evidence (C4) |

Absence of an observation is not a `not-applicable` reason. This is not a complete state-coverage claim.

## B2a

Portable body: `derived editorial implementation inference` **26** · `not Melon-authored or a separately published UI specification` **26**. Inventory is provenance `## Derived editorial inventory` (26 data rows, lines 133–158). No published first-party UI specification; the example form is used as-is.

Pass 1 (F1) re-read the finished body from the title down. Causal/interpretive sentences outside Principles (Scope token-surface bound, captured-layer characterizations, narrative-as-context, Primary-task selection, Audience grouping, Distinctive-traits restatement, Do/Don't grouping, color characterizations, component-local color keep, spacing/shape keep-both, elevation color-and-contrast reading, motion qualitative plus B3 gate, font-class sorting, Family density reading plus sans=mono keep, type-role keep-both, color-not-size hierarchy, favicon pointer, capture/applicability including surface-level named appearance, Components uniformly-square restatement, layout density/wayfinding plus desktop-capture bound, voice through-the-green, Named gaps) each have an adjacent full-form bound. Operator/service URLs, hex values, YAML keys, and the six YAML `use` strings are source recordings and were not qualified as derived.

## D1 / D2

- `native-client` DESIGN dest 0 / P dest 0. `storefront` 0 / 0. `mobile app` 0 / 0. `authenticated` 0 / 0. `back-office` 0 / 0. `200%` 0 / 0.
- Named gaps list only fields the source left unnamed: hover/pressed/focus/disabled treatments, motion/transition/easing values, mobile breakpoint measurements, a use for `full: 9999`, and the search-input background conflict.
- Three persona entries dropped. Role labels named only on the §13 deletion row above. DESIGN dest 0 / provenance dest 0 for each label. No name, age, or city was present.

## 고유 표현 대조

뽑은 151 / 0이었다가 복원한 5. First pass missed `Background: transparent` (written as §4 `transparent` without the source label), YAML key-path `section: 48` (written as `section 48`), and YAML primitive types `type: button` / `type: input` / `type: listItem` (written as Primitive type backticks only). Three first-pass DESIGN zeros were correctly provenance-only and were not restored into the portable body: `prose-derived`, `getdesign.md/melon`, `NOT LISTED`. Post-restore `grep -oF` counts on DESIGN.md are ≥1 for every portable unique phrase in the 151, except those three ledger-only strings.

## Deviations recorded

- `DESIGN.md` is 4,300 words by Python `split()`, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: eight color keys with case keep-both, three type roles with YAML/px keep-both, three declared components with YAML `type` plus seven-state applicability on the two interactive controls, the full §1/§11 narrative, the full §14 sentence, the full §15 qualitative character, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- Melon publishes no first-party UI component specification, so every derived-editorial close uses the toss-form `not Melon-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석).

## Gate run

- `inspectDesignMd` on the migrated `DESIGN.md` → `conformance.portable_core: true`, `level: portable-core`, `reasons: []`, `structurally_valid: true`, `cleanTop: true`, placeholders 0
- `node scripts/check-limiter-ledger.mjs melon` → 본문 26 = 원장 26 (133–158)
- `node scripts/check-yaml-use-landing.mjs melon` → use 6/6 (100%) OK
- `node test-v2/tools/latin-copy-audit.mjs --brand melon` → `withLoss: 0`
- `node test-v2/tools/migrate-reference.mjs --brand melon --gate-only` → **PASS**, `problems: []`, copy-loss `compared` 2 / `candidates` 51

All are run results only. A5a was mandatory because `compared` 2 < `candidates` 51. The hand-sweep denominator is in the A5 / A5a table above.

## Hashes

| File | SHA-256 |
|---|---|
| `web/references/melon/DESIGN.md` (source, unmodified) | `d7ed3b075364e5542807ee7dfc286255dfd45aa944d2d9d6beb5fc2eee6d9092` |
| `web/references/melon/.verification.md` (sibling, unmodified) | `7b99a916586e623969f195fde2a97ffa42c3507da3b0a1d722d80d545736f39e` |
| `docs/design-md-weight/migrated/melon/DESIGN.md` | `6ba7f160ffbae2f73f7b0744a1e0faa733afa58d6190f04037e1293190307ee7` |
| `docs/design-md-weight/migrated/melon/provenance.md` | `766d5b22b8450f47df830b714dbef2d563541cc816a4c15198936a97ad7669e6` |

Worker-close (pre-audit) DESIGN `e387b4ae80d9473385946fbc6f3f77831d80e2792b8f1edf9f63cb7e33399eb9` / provenance `5ead06e9e8cb2367d863f109bb0af40de561219b9ee27937c95c7fbe213fc417`. Auditor DESIGN `82d363aa47ef26278afe6630926472b8dccbb51411acb90bc4254d752d461f20` / provenance `766d5b22b8450f47df830b714dbef2d563541cc816a4c15198936a97ad7669e6` (post B2a/A1/E1). Current DESIGN after `Revision 2026-09-02 (wave45 review)` `6ba7f160ffbae2f73f7b0744a1e0faa733afa58d6190f04037e1293190307ee7`; provenance unchanged.

## Revision 2026-09-02 (wave45 review)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**. Trigger: semantic review FAIL 1. One defect only. Token values, component-table structure, state applicability, B2a complete qualifiers, and the derived-inventory 1:1 were not opened. Source `web/references/melon/DESIGN.md` was not modified. Sibling `web/references/melon/.verification.md` exists (`test -f`). Provenance inventory 26 rows unchanged.

**1. A1 · item 11 — §3 Controls purpose clause.** Source §3 `:64` writes Controls as `13-14px — interactive controls and inputs sit slightly larger than body for tap targets.` YAML `use` is the shorter `Interactive controls and inputs`. Type roles Token-set use kept the YAML short form; Notes had weight and login `14px / 400` only. Body's matching §3 expansion already sat in Notes (`The dense default for list rows and metadata; renders in muted gray #666666`). Restored the source purpose clause into Controls Notes, beside YAML use. No new derived sentence, no new B2a qualifier, no new provenance inventory row — this is a source-value restore into an existing table slot.

실측 (`grep -oF -e` | `wc -l`, 파일별; `grep -c` 미사용):

| needle | orig | sib | dest after | provenance after |
|---|---|---|---|---|
| `sit slightly larger than body for tap targets` | 1 | 0 | **1** | 0 |
| `slightly larger` | 1 | 0 | **1** | 0 |
| `for tap targets` | 1 | 0 | **1** | 0 |
| `Interactive controls and inputs` | 1 | 0 | **1** | 1 |
| `interactive controls and inputs` | 1 | 0 | **1** | 0 |

`sit slightly larger than body for tap targets` dest **1** = Type roles Controls Notes. YAML `Interactive controls and inputs` dest **1** unchanged (Token-set use; case-distinct from the §3 clause). `tap targets` dest **3** is Notes plus two Layout `comfortable tap targets` readings; those two are not the 13–14px purpose clause. provenance **0** for the purpose clause — the claim ledger already names type-role `use` as a class. Mentions in this revision section and the updated YAML / §3 rows are this file's denominator (E2d).

B2a `derived editorial implementation inference` dest **26** = provenance inventory **26** data rows (133–158).

**안 건드린 것.** 토큰 값 · 컴포넌트 표 구조 · 상태 applicability · B2a 26=원장 26 · 원본 `web/references/melon/**` · sibling · provenance 본문.
