# kbank migration log

Source: `web/references/kbank/DESIGN.md`
Sibling read (not the migration input): `web/references/kbank/.verification.md`
Destination: `docs/design-md-weight/migrated/kbank/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/kbank/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use ripgrep match lists per file, never a remembered count.

Source SHA-256 `e1670ad83df5a2eb25bc67fb4c124e56b2ded331d2f6590e60c75c480c035e34` (`web/references/kbank/DESIGN.md`). Sibling SHA-256 `c96845fbd6251bf27df40c795bb23f516aa9577819c2e9cf8f94f3e1c1b5a328` (`web/references/kbank/.verification.md`). Worker-close portable DESIGN SHA-256 `36de545776f31a0ff9407b953ddf4949d4cce16ec2b49c3ffb18c0988543c4f7`. Auditor DESIGN SHA-256 `539fb1f72ad6336eade3ccd4ed91464d8f2771b65258072671a0ea856d2f0241`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `logo.type` / `slug` 옮김 → Typography & Assets Assets | Portable file has no frontmatter. H1 is `# K bank Design System` (`DESIGN.md` 1). Identity table `provenance.md` 9–21. Homepage is dual (E2a): YAML `https://www.kbanknow.com` at `provenance.md` 13/23; inspected `https://www.kbanknow.com/web/web-home/home/main` DESIGN dest 1 at 9 / provenance dest 4 at 23/47/57/68. Catalog `primary_color` `#0114a7` is dual: `DESIGN.md` dest 2 at 73/75 + `provenance.md` dest 4 at 14/23/98/117. Favicon slug URL is dual (E2a): `DESIGN.md` dest 1 at 141 + `provenance.md` dest 1 at 16. Field-name mentions `logo.slug` at `provenance.md` 25; "favicon slug is dual" at 23 — mention, not a second URL use. |
| YAML `omd: "0.1"`, `verified`, `verification_v2`, `tokens.source: reconciled`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): identity table `provenance.md` 17–21; freshness table 33–37. `omd` format is at 17; `tokens.source` at 19 (exact `tokens.source: reconciled` dest 0 — table form `tokens.source \| reconciled`). `verification_v2.checked` at 34. `components_harvested` dest 3 at 21/148/214. The source footer's **Verified:** 2026-07-13 is at `provenance.md` 39. Conflicts unresolved: none at 41. These are ledger keys with no portable slot. |
| YAML `tokens.note` | 옮김 → Experience Scope; 분리 → provenance | Full note transcribed at `provenance.md` 86. The facts it names (six-route public-web capture; resource center corroborates the two blue brand colors and Pretendard K Edition; does not create extra product components or states) land at `DESIGN.md` 9. Dual (E2a). |
| YAML `tokens.colors` (4 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 75–78. All four roles kept with names, values, token-set keys, and claim surfaces: primary `#0114a7` / `#0114A7` (home), secondary `#4262ff` / `#4262FF` (home), canvas `#ffffff` / `#FFFFFF` (home), foreground `#000000` (home). Resource-center `#E0E6F1` / `#EDF1F7` / `#F7F9FD` / `#2848DF` stay named as not retained (`DESIGN.md` 80/368). |
| YAML `tokens.typography.family.ui` | 옮김 → Typography & Assets Family | `Pretendard K Edition` at `DESIGN.md` 122. Live 58-use count at `DESIGN.md` 113. `-apple-system` 181-use system evidence at `DESIGN.md` 114. |
| YAML `tokens.typography.body` / `product-display` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 132–133. YAML `normal` stays `normal` and `59.4px` stays `59.4px` (A1a). YAML sizes `16` and `44` sit beside §3 `16px` / `44px`. Tracking `-0.22px` kept. Both YAML `use` strings restored verbatim in the Token-set use column (A1, A3) at 132/133. Surface attachments follow YAML claim anchors: body = home; product-display = product-curious. The 18px / 700 / 24.3px selected tab is a §3 row, not a YAML typography key (`DESIGN.md` 134). |
| YAML `tokens.spacing` (2 steps) | 옮김 → Foundations spacing | Unitless: `DESIGN.md` 84 (`compact-action-inline 14` home · `wide-action-inline 28` product-curious). `tokens.spacing.compact-action-inline: 14` is disambiguated from the 14px Pretendard instance on the duplicate home snapshot and from `0px 14px` padding. `tokens.spacing.wide-action-inline: 28` is disambiguated from other 28px bundle observations. Dual key-path strings: `tokens.spacing.compact-action-inline` DESIGN dest 1 at 84 / provenance dest 2 at 130/163; `tokens.spacing.wide-action-inline` DESIGN dest 2 at 84/182 / provenance dest 3 at 131/164/200 (E2a). |
| YAML `tokens.rounded` (3 steps) | 옮김 → Foundations shape | `DESIGN.md` 88–90 (`compact-action 8` home · `primary-action 10` product-curious · `selected-tab 0` product-index). `tokens.rounded.compact-action: 8` / `tokens.rounded.primary-action: 10` / `tokens.rounded.selected-tab: 0` dest at `DESIGN.md` 92. Bordered-choice `6px` stays on that component (`DESIGN.md` 257). No `tokens.rounded.full` exists in the source; none is added. |
| YAML `tokens.shadow.none` | 옮김 → Foundations elevation | `DESIGN.md` 96. Claim surface: home. Route-level flatness, not a shadow scale. |
| YAML `tokens.components.public-home-shell` | 옮김 → Components & States | `DESIGN.md` 295–304. Verified primitive type preserved, not flattened to `Kind` (A1b): `Primitive type: \`card\`` ×1 = YAML `type: card` ×1. YAML `use` restored verbatim as `Token-set use:` at 301. Kind: non-interactive with the source's static-shell reason; no applicability map (Core §4.4). `1365px × 840px` kept on this shell. |
| §4-only components (compact action, primary action, product index tab, bordered choice, full-width text button) | 옮김 → Components & States | `DESIGN.md` 169–293. `Primitive type: not in the token set` dest 5 at 172/197/222/246/272. No YAML `type` was borrowed from the home shell onto these five (hogangnono). All §4 anatomy values kept on the surface named beside them. |
| §1 Visual Theme & Atmosphere (legacy 87–98) | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–13; Distinctive traits 35–38. The atmosphere readings (restrained public-web job / white-black-two-blue / webfont-with-system-stack) carry adjacent complete qualifiers at 9/11 (B2/B2a). Key characteristics restated at 35–38 under the qualifier at 33. |
| §1 공식 브랜드·리소스·컬처 URL | 분리 → provenance; URL·정체 경계 옮김 → Scope | Identity/source URLs at `provenance.md` 47–76. The source's own sentence that brand marketing, the resource center, and culture writing are not silently converted into generic banking components stays in `DESIGN.md` 9. |
| §2 Layout & Grid (legacy 100–104) | 옮김 → Layout & Platforms | `DESIGN.md` 309–311. Collector viewport `1440×900` on the named pages; second home record as duplicate URL; `mainCardWrapper` `1365px × 840px`; 44px tabs and 40px/48px actions; no mobile breakpoint, authenticated layout, or responsive rule. Viewport reading at 309; surface-measurement reading at 311 (B2/B2a). |
| §3 Color & Typography (legacy 106–129) | 옮김 → Foundations semantic color + Typography & Assets | Colors `DESIGN.md` 75–80. Evidence-class table 112–116 (source header kept; Official product/brand-use 112 · Live computed 113 · Live system 114 · Declared-only 115 · Official distributed 116). Family 122–124; hierarchy table 132–134. Official-distributed / Declared-only / Live-system / official-use-not-license / sole-UI-family readings carry the adjacent complete qualifier at 118 (B2/B2a). |
| §4 Component Stylings (legacy 131–192) | 옮김 → Components & States | `DESIGN.md` 169–304. §4 body values and YAML `use` / radius / padding forms are both kept. Unique §4 values land: compact `home::[data-omd-capture="3"]` at 180; primary `product-curious::[data-omd-capture="19"]` plus duplicate-home 14px Pretendard at 203; tab `aria-selected="true"` dest 2 at 163/228; bordered choice medium-confidence at 254; full-width text button `product-curious::[data-omd-capture="14"]` at 279; `interactionCount: 0` at 165 (A3). Surface attachments follow YAML claim anchors and §4 use lines. |
| §5 Elevation (legacy 200–202) | 옮김 → Foundations elevation | `DESIGN.md` 96: `box-shadow: none` on the public-home shell and promoted action/tab samples; route-level flatness, not a shadow scale for native banking, brand marketing, or unobserved panels. Flatness reading carries the adjacent qualifier on the same line (B2/B2a). |
| §6 Spacing & Shape (legacy 204–208) | 옮김 → Foundations spacing + shape | `DESIGN.md` 84/88–92. Compact `0px 14px` / 8px and primary `0px 28px` / 10px; tab `0px` with `10px 4px 12px`; bordered choice 6px with `0px 12px`; bundle 2/3/4/6/8/10/12/16/20/24/28/32/100px observations not promoted into a global scale. |
| §7 Iconography Do's (legacy 214–218) | 옮김 → Experience application rules | `DESIGN.md` 53–55 (three Do rules), under the grouping qualifier at 51. Not placed in Governance controlled copy. Logo / K-bank identification icon / K-position rule land in Assets at `DESIGN.md` 139. |
| §7 Don'ts (legacy 220–224) | 옮김 → Experience avoid | `DESIGN.md` 61–63, under the qualifier at 59. The three §7 prohibitions are the source's own list, including transfer/account/login/native-app flows, a general card family, and `swiper-icons`. Voice Don'ts from §10 are 64–65, not this row. No invented domain is added. |
| §8 Accessibility (legacy 226–230) | 옮김 → Components capture record + Assets | Contrast pairing and “does not substitute for a contrast or accessibility audit” at `DESIGN.md` 165. Future accessible focus/state treatments at 165. Logo-visibility asset rule at 142. |
| §8 Responsive / layout absence | 옮김 → Layout & Platforms | Already in §2: no mobile breakpoint, authenticated layout, or responsive rule (`DESIGN.md` 309). This source has no separate §8 Responsive section. |
| §9 Content & Voice (legacy 232–234) | 옮김 → Content & Locales | `DESIGN.md` 316. This source's §9 is Content & Voice, not an Agent Prompt Guide — no tool prompt was deleted. Published names at 324: K bank, “pleasant financial life”, Pretendard K Edition, Pretendard, ONE card, `swiper-icons`, `-apple-system`. The qualifier at 322 covers the voice reading (B2/B2a, A5). Byte-exact names. |
| §10 Voice & Tone (legacy 236–251) | 옮김 → Content & Locales + Experience avoid | Three voice traits at `DESIGN.md` 318–320. Voice Do rules at 322. Voice Don'ts at 64–65. |
| §11 Brand Narrative (legacy 253–257) | 옮김 → Experience Scope | `DESIGN.md` 13: South Korea’s first internet-only bank; pleasant daily financial life (better basics, rewards woven into ordinary moments, access to investment, reassurance around customers’ assets); resource-center vocabulary (deep and secondary blue, K identification icon, Pretendard K Edition); distinguishing logo/asset guidance from the public-web UI; and the closing pair — the public product routes show only a bounded web slice; they do not prove the design of protected banking work or the native app. The source paragraph's last sentence is kept as one unit (`they do not prove the design of protected banking work or the native app` DESIGN dest 1 at 13). Marked there as narrative context that supplies no interface tokens; the classification carries an adjacent complete qualifier in the same paragraph (B2/B2a). Also noted as narrative-not-token-source at `provenance.md` 218. |
| §12 Principles — 4 numbered (legacy 259–268) | 옮김 → Experience principles | `DESIGN.md` 44–47 under the B2a form at 42: "These four items are a derived editorial implementation inference from the verified surfaces; they are not K bank-authored or a separately published UI specification." No published UI specification is in the source YAML, so the close uses the toss-form (rulebook v12 B2a 전제 주석). Portable derived-editorial inventory: `provenance.md` 177–209 (33 data rows). |
| §13 Personas — 4 source-grounded service audiences (legacy 270–277) | 옮김 → Experience primary-tasks + Audience | The source's own header says these are source-grounded service audiences, not fictional user profiles. Those four group wordings land at `DESIGN.md` 21–24 and 29. No name, age, city, or affiliation classification is invented or re-hosted (D2, D2a). Disposition at `provenance.md` 144. Selecting them as primary tasks is qualified at `DESIGN.md` 19. |
| §14 States (legacy 279–293) | 옮김 → Components & States capture record + per-component applicability | Full source evidence-boundary table preserved at `DESIGN.md` 153–163 without `[FILL IN]` wrappers (A2; the catalog graph is still 0/440, so nothing is delegated). Selected tab `aria-selected="true"` only; no selection-change interaction. The applicability rule is at 167, whose qualifier covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). A generic `Focus` row is not `focus-visible` treatment (B1) — `DESIGN.md` 167. Source `[FILL IN]` wrappers were dropped at the placeholder boundary (Deviations); they are not re-hosted as an omission-ledger row (E2b: no storage, so this log does not invent a 146–150 pointer). Evidence-boundary sentences remain. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Interactive controls declare the seven canonical states. Compact action, primary action, product index tab, bordered choice, and full-width text button close loading/error/success with a role reason (C2 v10) — destination public action / tab / choice / text button commits no operation in place (`loading \| not-applicable` dest 5 at 190/215/239/265/289). `loading \| applicable` dest 0. Public home shell is non-interactive with no map — `DESIGN.md` 303 (C4 / Core §4.4). This is not a complete state-coverage claim (`DESIGN.md` 167). |
| §15 Motion & Easing (legacy 295–297) | 옮김 → Foundations motion | `DESIGN.md` 100: "No motion, transition, easing, or interaction expansion appears in the supplied raw evidence. No motion token is promoted. The observed selected tab is not proof of a tab transition or easing curve." No curve was present to delete. B3 is held: the promotion condition at `DESIGN.md` 102 names all five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text (E2c). |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** (legacy 195–198) | 분리 → provenance | Freshness table `provenance.md` 33–37; **Verified:** text at 39; Conflicts unresolved: none at 41. Tier 1 list 68–75. Tier 2 79–80. The Verified block sits between §4 and §5 in this source; it is still footer metadata. |

## Sibling handling (`web/references/kbank/.verification.md`)

The sibling exists — confirmed with `find web/references/kbank -type f`. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at `provenance.md` 94–101 and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: coverage score 66; four component types / 14 component variants; `rgb(255, 255, 255)` / `rgb(0, 0, 0)` spellings; compact-action `oklch(0.571 0.235 268.681)` and primary-action `oklch(0.343 0.219 264.362)`; `https://www.kbanknow.com/fonts/` and ExtraLight / Regular / Medium / Bold subset names; 케미코드 as the culture-article title; older tokens.json `#B6F23D` / 56px CTA / 12px CTA radius / 14px body; `artifacts/reference-evidence/kbank.json`; `playwright_cli`. Recorded at `provenance.md` 105–113.
- Measured `DESIGN.md` 0 for those sibling-only strings: `66` as coverage score 0 · `#B6F23D` 0 · `케미코드` 0 · `56px` 0 · ExtraLight 0.
- `#0114a7` / `#0114A7` / `#4262ff` / `#4262FF` / Pretendard K Edition / 58 / 181 / `1365px × 840px` / `1440×900` / tab and choice `oklch` values are already in the source body and are corroboration.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. K bank's published Korean is the quoted “pleasant financial life” story in English; a hand sweep of published labels is mandatory even when the needle set is empty or thin.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published names and identity strings in the source body | 7 distinct | 0 | 0 | K bank / “pleasant financial life” / Pretendard K Edition / Pretendard / ONE card / `swiper-icons` / `-apple-system`. |
| `node test-v2/tools/latin-copy-audit.mjs --brand kbank --candidate docs/design-md-weight/migrated/kbank/DESIGN.md` | 10 lost / 1 brand scanned | 0 published | 0 | `, captured:` YAML metadata; `[FILL IN]` source placeholder wrappers (omitted, not published copy); `aria-selected=true` collector attribute; `home :: div.mainCardWrapper.css-x2jyed` selector (portable form `home::div.mainCardWrapper.css-x2jyed` dest 1 at `DESIGN.md` 301); `interactionKinds: 0` sibling-only; `omd:add-reference` tool name; four `data-omd-capture` selector spellings (portable form without spaces dest at 180/203/229/255/279). |
| Sibling published strings | 0 distinct sibling-only CTAs | 0 | 0 | Sibling records measurements and a conflict matrix, not additional published CTAs. 케미코드 is the culture-article title in the URL path and sibling heading; it is ledger-only at `provenance.md` 102/115. |

Sub-needle labels confirmed present individually in `DESIGN.md`: K bank, pleasant financial life, Pretendard K Edition, Pretendard, ONE card, `swiper-icons`, `-apple-system`.

A5 분모: hand sweep of source published labels 7 extracted / 0 missing; latin-copy-audit 10 lost / 1 scanned (0 published); gate `copy-loss` compared 0 / candidates 96.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand kbank --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 0, candidates: 96, detail: "바늘 0개 — 이 브랜드에서 A5는 기계 검사되지 않았다. 발행 라틴 문자열을 손으로 전수 대조하라." }]`. Separately, `scripts/design-md-core.cjs` `evaluatePortableCore` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 0 < `candidates` 96.

## Deviations recorded

- `DESIGN.md` is 5,684 words by `wc -w`, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: one YAML component record plus five §4-only controls, a source §14 body plus seven-state applicability on five interactive controls, key-path disambiguation for spacing 14/28 and radii 8/10/0, the full §11 narrative including its last sentence, surface-attached token-set paths, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted.
- No `ds.type` is in the source. The official resource center is a brand-asset page, not a published UI specification, so every derived-editorial close uses the toss-form `not K bank-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석). Measure: `derived editorial implementation inference` DESIGN = `not K bank-authored` DESIGN = 33. Provenance derived ledger 33 rows (E1 1:1).
- Source `[FILL IN]` wrappers in §14 and §15 were omitted at the placeholder boundary; the evidence-boundary sentences remain. They are not re-hosted as an omission-ledger row. Recorded rather than left as a Portable Core fail.

## F1 B2a rescan (mandatory final pass)

The portable body was re-read from H1 through Named gaps after the last prose edit. Every causal, interpretive, or judging sentence was asked whether it is a K bank-issued fact or a derived reading.

Complete-form closes (`derived editorial implementation inference` + `not K bank-authored or a separately published UI specification`) sit adjacent to:

1. Scope ¶1 — five-route contract and context/asset-source bound
2. Scope ¶2 — restrained public-web job / white-black-two-blue / webfont-with-system-stack
3. Scope narrative — §11 as narrative-not-tokens, including the last sentence
4. Primary tasks — selecting the four source-grounded audiences; not fictional biographies
5. Audience — refusing individual personas; reading those groups as audience
6. Distinctive traits — restatement classification; groupings
7. Principles — four items
8. Application rules — three Do rules
9. Avoid — Don'ts
10. Semantic color — pairing; role names from source labels; resource grayscale off the set; surfaces from YAML anchors
11. Spacing — key-path keep-separate; bundle observations not a global scale
12. Shape — local radii and YAML 8/10/0
13. Elevation — route-level flatness
14. Motion — selected tab as state, not motion
15. Motion B3 gate — five-kind per-component promotion; partial confirmation insufficient
16. Font evidence — Pretendard alternate / official-use-not-license / sole-UI-family-because-computed+FontFaceSet / `-apple-system` / `swiper-icons` / license unnamed / no-rehost
17. Family — fallback prohibition
18. Type roles — YAML `normal` / `59.4px`, §3 px keep-both, YAML claim anchors
19. Type roles sizes — 16/44/18 as named roles, not shared numerals
20. Assets icon-library — K-position rule as brand-asset guidance, not a general icon library
21. Assets favicon — Google favicon pointer
22. Assets logo-visibility — visibility rule is not control-contrast / a11y evidence
23. Capture record — source-contract keep; role-based applicability; white-on-blue not an a11y audit; not-complete-coverage
24. Public compact action — 40px / 8px / `0px 14px` as this action
25. Public primary action — 48px / 10px / `0px 28px` as this product-page action; 16px system vs 14px Pretendard keep-apart
26. Product index tab — 44px / 0px / 18px as this tab
27. Product-index bordered choice — 32px / 6px as this choice
28. Product-detail full-width text button — 60px / 18.72px as this control; no expansion named
29. Public home shell — `1365px × 840px` as this static shell
30. Layout viewport — `1440×900` as collector viewport; duplicate home as duplicate URL
31. Layout measurements — surface measurements, not cross-viewport specs
32. Content & Locales — voice register; opening copy-rules bound
33. Named gaps — named values, not a domain inventory; not permissions to invent

Count: DESIGN 33 = provenance inventory 33. No Scope/Avoid sentence invents a domain the source did not name (D1). No "does not say that anything measures …" closer was added (over-defense). `native application` / `mobile app` / `back-office` / `product application` / `measures 1440px` DESIGN dest 0.

## F2 E2 check (mandatory final pass)

Each log row above was written only after `grep` against `DESIGN.md` and `provenance.md`. Dual destinations named in this log were confirmed in both files before the row was closed: homepage YAML 13/23 + inspected dest 4 at 23/47/57/68; `#0114a7` DESIGN dest 2 / P dest 4; favicon slug URL DESIGN dest 1 at 141 / P dest 1 at 16; `tokens.note` facts at DESIGN 9 + P 86; `tokens.spacing.compact-action-inline` DESIGN dest 1 at 84 / P dest 2 at 130/163; `tokens.spacing.wide-action-inline` DESIGN dest 2 at 84/182 / P dest 3 at 131/164/200; published names. Compliance claims used only when the portable body actually holds the cited text: B3 five-kind gate at `DESIGN.md` 102; B2a complete form 33 = 33; C4 non-interactive at 303; C2 role reasons at 190/215/239/265/289. Persona deletion is unidentified (`provenance.md` 144) and does not re-host a name, age, city, or affiliation classification (D2a, E2d).
