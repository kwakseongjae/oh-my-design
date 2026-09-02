# kakaobank migration log

Source: `web/references/kakaobank/DESIGN.md`
Sibling read (not the migration input): `web/references/kakaobank/.verification.md`
Destination: `docs/design-md-weight/migrated/kakaobank/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/kakaobank/provenance.md`
Date: 2026-08-28
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**
Not a catalog-adoption claim. Gate output is recorded below as a run result, not as evidence of semantic adequacy (E2c).

Every destination line below was checked with `grep` against the three output files before it was written (F2). Line numbers are from the files as written in this directory. Counts use ripgrep match lists per file, never a remembered count.

Source SHA-256 `a2659b60968159b143317fb6a99ad21c35e2f04a87ef561edf6c12c2919144cf` (`web/references/kakaobank/DESIGN.md`). Sibling SHA-256 `60140b4ca81b03e12764c262bc7459b776a841261750cab4cdc72f8c9be6b68b` (`web/references/kakaobank/.verification.md`). Worker-close portable DESIGN SHA-256 `85cacaac69a2f31aa73372f605374c741243f61903754c85460d8af21932ed3e`.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance; `homepage` 옮김 → Experience Scope; `logo.type` / `slug` 옮김 → Typography & Assets Assets | Portable file has no frontmatter. H1 is `# KakaoBank Design System` (`DESIGN.md` 1). Identity table `provenance.md` 9–25. Homepage is dual (E2a): YAML `https://www.kakaobank.com` at `provenance.md` 13/27; inspected `https://www.kakaobank.com/` at `DESIGN.md` 9 and `provenance.md` 51/59/66. Catalog `primary_color` `#ffe300` is dual: `DESIGN.md` dest 2 at 77/79 + `provenance.md` dest 5 at 14/27/90/115/203 (it also matches `tokens.colors.primary`). Simple Icons slug is dual: `DESIGN.md` 165 + `provenance.md` dest 3 at 16/29/212 (E2a). |
| YAML `omd: "0.1"`, `verified`, `verification_v2`, `tokens.source: reconciled`, `tokens.extracted`, `components_harvested: true` | 분리 → provenance | Verification metadata is a value and is kept, not dropped (A1c): `provenance.md` 17–21, 37–43. `omd` format is at 17; `tokens.source | reconciled` at 19; `verification_v2.checked` at 38 (exact `tokens.source: reconciled` dest 0 — table form only). The source footer's **Verified:** 2026-07-12 is at `provenance.md` 43. `components_harvested` DESIGN dest 0 / provenance dest 3 (`provenance.md` 21/151/226). These are ledger keys with no portable slot. |
| YAML `ds.name` / `ds.url` / `ds.type: brand` / `ds.description` | 분리 → provenance; description 옮김 → Experience Scope | A1c: table cell `ds.type | brand` at `provenance.md` 24; exact `ds.type: brand` dest 1 at `provenance.md` 31. Full description transcribed at `provenance.md` 25. The source fact that the identity resource does not substitute for native banking-product UI evidence is dual: `DESIGN.md` dest 1 at 9 + `provenance.md` dest 2 at 25/31 (E2a). |
| YAML `tokens.note` | 옮김 → Experience Scope; 분리 → provenance | Full note transcribed at `provenance.md` 76–80 (73–74 is Tier 2). The facts it names (corporate home / service / brand-resource capture; brand identity and public web measurements promoted; native banking-product controls not inferred) land at `DESIGN.md` 9. Dual (E2a). |
| YAML `tokens.colors` (7 keys) | 옮김 → Foundations semantic color | `DESIGN.md` 79–85. All seven roles kept with names, values, token-set keys, and claim surfaces: primary `#ffe300` / `#FFE300` (brand), canvas `#ffffff` (home), foreground `#000000` (home), secondary `#888888` (home), body `#444444` (service), surface `#f7f7f7` (home), divider `#e6e6e6` (brand). Official `#FFE300` kept beside token-set `#ffe300`. Earlier `#E02000` / `#0FBE6C` / `#FF9800` and live `#007AFF` stay named as not retained (`DESIGN.md` 87/348–349). |
| YAML `tokens.typography.family.ui` | 옮김 → Typography & Assets Family | `Pretendard Variable` at `DESIGN.md` 143. Live 645-element count DESIGN dest 3 at `DESIGN.md` 13×2/134. |
| YAML `tokens.typography.hero` / `display` / `section` / `card-title` / `body` / `navigation` | 옮김 → Typography & Assets Type roles | `DESIGN.md` 153–158. Unitless line heights stay ratios and are never converted to a replacement px (A1a): `1.3` / `1.24` / `1.36` / `1.44` / `1.5` (`1.5` on body and navigation). Parenthetical px (`117px` / `52.08px` / `43.52px` / `34.56px` / `24px` / `21px`) is the source §3 spelling. YAML tracking `-0.9` / `-0.84` / `-0.64` / `-0.48` / `-0.14` kept beside the §3 `-0.9px` form. All six YAML `use` strings restored verbatim in the Token-set use column (A1, A3). Surface attachments follow YAML claim anchors: hero/body/navigation = home; display/section/card-title = service. The 42px service title is not the 42px-tall corporate black-action (`DESIGN.md` 160/243). |
| YAML `tokens.spacing` (5 steps) | 옮김 → Foundations spacing | Unitless: `DESIGN.md` 95–99 (`xs 8` home · `sm 12` home · `md 16` home · `lg 24` service · `xl 40` brand). `tokens.spacing.md: 16` is disambiguated from `tokens.rounded.section: 16` and from the 16px body / tab-font / download-font / spec-row-font / tab-padding at `DESIGN.md` 101/160/218/268. `tokens.spacing.lg: 24` is disambiguated from brand-spec-row `24px` at `DESIGN.md` 101/292. Dual key-path strings: `tokens.spacing.sm` DESIGN dest 1 at 96 / provenance dest 2 at 130/174; `tokens.spacing.md` DESIGN dest 8 at 97/101/113/160/218×2/268×2 / provenance dest 4 at 131/175/214/216; `tokens.spacing.lg` DESIGN dest 4 at 98/101/292×2 / provenance dest 3 at 132/176/217 (E2a). |
| YAML `tokens.rounded` (3 steps) | 옮김 → Foundations shape | `DESIGN.md` 109–111 (`action 6` · `section 16` · `full 9999`). Claim surface for all three: home. `tokens.rounded.full: 9999` dest 1 at `DESIGN.md` 113; `tokens.rounded.full` DESIGN 2 / provenance 2. `tokens.rounded.section` DESIGN 3 / provenance 2. Navigation/tab `0px` stays on those components (`DESIGN.md` 113). |
| YAML `tokens.components` (5 records) | 옮김 → Components & States | `DESIGN.md` 180–293. Verified primitive types preserved per component, not flattened to `Kind` (A1b): `Primitive type: \`button\`` ×3 (183/233/258 = YAML top-navigation + black-action + resource-download), `tab` ×1 (207), `listItem` ×1 (283). All five YAML `use` strings restored verbatim as `Token-set use:` lines (190/215/240/265/290). YAML `states` strings kept on the Observed lines (191/216/241/266). No §4-only component borrowed a `Primitive type`. `not in the token set` DESIGN dest 0. |
| §1 Visual Theme & Atmosphere (legacy 155–169) | 옮김 → Experience Scope + Distinctive traits | Scope `DESIGN.md` 9–15; Distinctive traits 37–42. The atmosphere readings (digitally accessible / regulated-institution restraint / restraint as the distinctive system / yellow as identity rather than every-control proof / brand character from scale) carry adjacent complete qualifiers at 9/11/13 (B2/B2a). Key Characteristics restated at 37–42 under the qualifier at 35. |
| §1 공식 히스토리·Brand Resource·V2.0 PDF URL | 분리 → provenance; URL·정체 경계 옮김 → Scope | Identity/source URLs at `provenance.md` 51–69. The source's own sentence that the Brand Resource does not substitute for native banking-product UI evidence stays in `DESIGN.md` 9. |
| §2 Color Palette & Roles (legacy 171–180) | 옮김 → Foundations semantic color | `DESIGN.md` 79–87. Characterizing phrases covered by the adjacent qualifier at 77 (B2/B2a). `#007AFF` not promoted. |
| §3 Typography Rules — evidence classes, family, hierarchy (legacy 182–201) | 옮김 → Typography & Assets | Evidence classes `DESIGN.md` 133–137 (source header `Unresolved` rewritten as `Unresolved class` so the table cell is not a bare placeholder word; the resolution text is unchanged). Family 143–145; hierarchy table 153–158. Official-distributed / Declared-only / Unresolved-class readings carry the adjacent complete qualifier at 139 (B2/B2a). |
| §4 Component Stylings (legacy 203–227) | 옮김 → Components & States | `DESIGN.md` 180–293. §4 body values and YAML `use` / radius / padding forms are both kept. Unique §4 values land: top-nav focus/hover/pressed at 191; service-tab `no reusable selected style` at 216; black-action and resource-download `no reusable hover or pressed value` at 241/266; yellow native CTAs / account cards / transfer inputs / status badges / notifications / bottom sheets / app tabs absent until a native-product path at 176 (A3). Surface attachments follow YAML claim anchors (home / service / brand). |
| §5 Layout Principles (legacy 229–235) | 옮김 → Layout & Platforms | `DESIGN.md` 298: the five source rules kept as written, under the qualifier at the same line (B2/B2a). |
| §6 Depth & Elevation (legacy 237–239) | 옮김 → Foundations elevation | `DESIGN.md` 117: shadow-free public system; separation from white/pale-gray surfaces, `#e6e6e6` rules, and typographic scale; no sheet/card/focus shadow for native banking UI. Flat-layering reading carries the adjacent qualifier on the same line (B2/B2a). |
| §7 Do's (legacy 243–247) | 옮김 → Experience application rules | `DESIGN.md` 57–60 (four Do rules), under the grouping qualifier at 55. Not placed in Governance controlled copy. |
| §7 Don'ts (legacy 249–253) | 옮김 → Experience avoid | `DESIGN.md` 66–69, under the qualifier at 64. The four prohibitions are the source's own list, including `#FEE500` / `#FAE100` and `Kakao Friends-heavy app mockup`. No invented domain is added. |
| §8 Responsive Behavior (legacy 255–257) | 옮김 → Layout & Platforms | `DESIGN.md` 300: public routes preserve typographic hierarchy and section grouping while content reflows; exact mobile-app navigation, banking-task breakpoints, device safe areas, and native keyboard behavior remain unresolved. Surface-measurement reading at 302 (B2/B2a). |
| §9 Agent Prompt Guide (legacy 259–261) | 삭제 | Tool-facing construction prompt; no receiving slot and no dedicated adapter file. Every value §9 names was checked against the portable body before deletion and each was already present (A2, A3): white canvas, black-first type, `#f7f7f7`, Pretendard Variable, large bold headings, flat navigation, 6px black public actions, `#FFE300` only for verified identity roles, omit unverified native banking components. The check is itemised at `provenance.md` 148. |
| §10 Voice & Tone (legacy 263–265) | 옮김 → Content & Locales | `DESIGN.md` 307. Published names at 309: KakaoBank, 카카오뱅크, KakaoBank Yellow, KakaoBank mini, Pretendard Variable, KakaoBank Brand Resource. The qualifier at 307 covers the voice reading (B2/B2a, A5). Byte-exact names. |
| §11 Brand Narrative (legacy 267–269) | 옮김 → Experience Scope | `DESIGN.md` 15: ordinary-life positioning; official symbol centered on the individual; catalog expansion from basic accounts into youth, business, investment, global, and AI-related offerings; one unmistakable yellow then a large field of neutral structure; consumer product and financial institution; large Korean headings; monochrome navigation and pale-gray sections; and the closing pair — the protected wordmark and exact yellow establish ownership, but they do not dictate the geometry of native transfers, account cards, or compliance flows; those product layers require their own evidence. The source paragraph's last sentence is kept as one unit (`Those product layers require their own evidence` DESIGN dest 1 at 15). Marked there as narrative context that supplies no interface tokens; the classification carries an adjacent complete qualifier in the same paragraph (B2/B2a). Also noted as narrative-not-token-source at `provenance.md` 230 (not 226). No founding year is in the source; none is added. |
| §12 Principles — 4 numbered (legacy 271–276) | 옮김 → Experience principles | `DESIGN.md` 48–51 under the B2a form at 46: "These four items are a derived editorial implementation inference from the verified surfaces; they are not KakaoBank-authored or a separately published UI specification." `ds.type` is `brand`, not a published UI specification, so the close uses the toss-form (rulebook v12 B2a 전제 주석). Portable derived-editorial inventory: `provenance.md` 187–221 (29 data rows at 193–221). |
| §13 Personas — 4 first-party task contexts (legacy 278–286) | 옮김 → Experience primary-tasks + Audience | The source's own header says first-party material establishes task contexts only and leaves names, ages, balances, credit profiles, income, risk tolerance, and success metrics unspecified. Those four task-context wordings land at `DESIGN.md` 23–26 and 31. No name, age, city, balance, motivation, or affiliation classification is invented or re-hosted (D2, D2a). Disposition at `provenance.md` 147. Selecting them as primary tasks is qualified at `DESIGN.md` 21. |
| §14 States (legacy 288–290) | 옮김 → Components & States capture record + per-component applicability | Full source body preserved at `DESIGN.md` 174: top navigation focus, hover, and pressed; one current service control disabled with semantic role insufficient for promotion; native loading, empty, transfer success, transfer failure, identity verification, and destructive states remain absent (A2; the catalog graph is still 0/440, so nothing is delegated). The applicability rule is at 178, whose qualifier covers every Reason cell that follows. Non-observation is never used as a `not-applicable` reason (C1). A generic `focus` capture is not `focus-visible` treatment (B1) — `DESIGN.md` 178/191. |
| §14 → per-component applicability (Core §4.4) | 옮김 → Components & States | Interactive controls declare the seven canonical states. Top navigation and Service-category tab close loading/error/success with a role reason (C2 v10) — destination navigation item / tab commits no operation in place (`loading \| not-applicable` dest 2 at 200/226). Corporate black action and Brand-resource download keep `loading \| applicable` dest 2 at 251/276 because those roles commit in place. Brand specification row gets no `kind` and no map because the source supplies no interaction evidence for the row — `DESIGN.md` 293 (C4). This is not a complete state-coverage claim (`DESIGN.md` 178). |
| §15 Motion & Easing (legacy 292–294) | 옮김 → Foundations motion | `DESIGN.md` 121: "No reusable duration or easing curve is promoted. Public interaction capture establishes state presence, not native banking motion behavior." No curve was present to delete. B3 is held: the promotion condition at `DESIGN.md` 123 names all five evidence kinds — computed transition properties, animation name, duration, easing, reduced-motion behavior — and the per-component gate, in full text (E2c). |
| Footer **Verified** / **Tier 1 sources** / **Tier 2** / **Conflicts** (legacy 298–301) | 분리 → provenance | Freshness `provenance.md` 37–45; Tier 1 list 66–69; Tier 2 73–74. Conflicts unresolved: none — `provenance.md` 45. |

## Sibling handling (`web/references/kakaobank/.verification.md`)

The sibling exists — confirmed with `find web/references/kakaobank -type f`. It is a separate canonical file, not the migration input, so nothing in it was used to establish a portable body fact that the source body does not already record.

- Its full record is transcribed at `provenance.md` 88–100 and is **not** promoted into `DESIGN.md`.
- Values it carries that the visible source body does not: coverage `77/100`; 24 color candidates; two font declarations; 20 component variants; four collected surfaces / three effective first-party routes; previous foreground `#1e1e1e`; SF Mono; whisper/subtle/sheet shadow names; mixed 12/16px app-like controls as a previous/secondary field; `artifacts/reference-evidence/kakaobank.json`. Recorded at `provenance.md` 104–111.
- Measured `DESIGN.md` 0 for those sibling-only strings: `77/100` 0 · `#1e1e1e` 0 · `SF Mono` 0 · `whisper` 0.
- `#ffe300` / `#FFE300` / `#ffffff` / `#f7f7f7` / `#e6e6e6` / Pretendard Variable / 645 / 90px/800/117px / 42px/700/52.08px / 62px are already in the source body and are corroboration.

## A5 / A5a verification

The gate's `copy-loss` needles come only from contiguous non-Latin runs of four characters or more inside quotations. KakaoBank is Korean-forward in the title only (`카카오뱅크` is not inside quotation marks in the source), so a hand sweep of published labels is mandatory even when the needle set is empty or thin.

| Sweep | Extracted | Missing from `DESIGN.md` + `provenance.md` | Published copy among the missing | Handling |
|---|---:|---:|---:|---|
| Published names and identity strings in the source body | 10 distinct | 0 | 0 | KakaoBank / 카카오뱅크 / KakaoBank Yellow / KakaoBank mini / Pretendard Variable / KakaoBank Brand Resource / `#FFE300` / `#FEE500` / `#FAE100` / Kakao Friends. |
| `node test-v2/tools/latin-copy-audit.mjs --brand kakaobank --candidate docs/design-md-weight/migrated/kakaobank/DESIGN.md` | 1 lost / 1 brand scanned | 0 published | 0 | `", captured:"` is YAML metadata, not published copy (same class as intuit). |
| Sibling published strings | 0 distinct sibling-only CTAs | 0 | 0 | Sibling records measurements and a conflict matrix, not additional published CTAs. |

Sub-needle labels confirmed present individually in `DESIGN.md`: KakaoBank, 카카오뱅크, KakaoBank Yellow, KakaoBank mini, Pretendard Variable, KakaoBank Brand Resource, `#FFE300`, `#FEE500`, `#FAE100`, Kakao Friends.

A5 분모: hand sweep of source published labels 10 extracted / 0 missing; latin-copy-audit 1 lost / 1 scanned (0 published); gate `copy-loss` compared 1 / candidates 151.

## Gate run

`node test-v2/tools/migrate-reference.mjs --brand kakaobank --gate-only` → `verdict: PASS`, `problems: []`, `coverage: [{ check: "copy-loss", compared: 1, candidates: 151, detail: "인용 문자열 151개 중 1개만 비교했다 — 나머지는 라틴이라 바늘이 되지 않는다. 라틴 전수 대조는 손으로 하라." }]`. Separately, `scripts/design-md-core.cjs` `evaluatePortableCore` reports `level: portable-core`, `portable_core: true`, `reasons: []`, and 0 `[FILL IN]`. Both are run results only. The gate has historically passed A5 losses, narrow ledgers, false log destinations, and B1 promotions, so neither is cited here as evidence that the migration is correct; the sweeps above and the two mandatory passes are. A5a was mandatory because `compared` 1 < `candidates` 151.

## Deviations recorded

- `DESIGN.md` is 4,562 words by `wc -w` after F3, above the spec's 600–1,800-word SHOULD budget. The budget yielded to A1: five declared component records, a source §14 body plus seven-state applicability on four interactive controls, `tokens.rounded.full: 9999` kept off matching spacing keys, the full §11 narrative including its last sentence, surface-attached token-set paths, and the B2a qualifications cannot be compressed without dropping verified values or dropping the qualifications. Recorded rather than silently accepted. Worker-close was 4,297 words.
- `ds.type` is `brand`, not a published UI specification, so every derived-editorial close uses the toss-form `not KakaoBank-authored or a separately published UI specification` (rulebook v12 B2a 전제 주석). F3 measure: `derived editorial implementation inference` DESIGN = `not KakaoBank-authored` DESIGN = 29. Provenance derived ledger 29 rows (E1 1:1). Worker-close was 24=24; both sides were narrow.
- Font-evidence table header `Unresolved` was rewritten as `Unresolved class` (`DESIGN.md` 137) so a table cell is not a bare Core placeholder word. The resolution text is the source's own. Recorded rather than left as a Portable Core fail.
- Worker-close portable DESIGN SHA-256 `85cacaac69a2f31aa73372f605374c741243f61903754c85460d8af21932ed3e`. Auditor SHA `76f7efa134f5f3b3807631a0628718a95dde90ce84b1d59623fd829451443152`.

## F1 B2a rescan (mandatory final pass)

The portable body was re-read from H1 through Named gaps after the last prose edit. Every causal, interpretive, or judging sentence was asked whether it is a KakaoBank-issued fact or a derived reading.

Complete-form closes (`derived editorial implementation inference` + `not KakaoBank-authored or a separately published UI specification`) sit adjacent to:

1. Scope ¶1 — three-surface contract and identity-source bound
2. Scope ¶2 — digitally accessible / restraint / yellow-as-identity
3. Scope ¶3 — brand character from scale
4. Scope narrative — §11 as narrative-not-tokens, including the last sentence
5. Primary tasks — selecting the four first-party contexts; not fictional biographies
6. Audience — refusing individual personas; reading those groups as audience
7. Distinctive traits — restatement classification; groupings
8. Principles — four items
9. Application rules — four Do rules
10. Avoid — four Don'ts
11. Semantic color — pairing; role names from source labels; `#007AFF` off the set; surfaces from YAML anchors
12. Spacing — key-path keep-separate
13. Shape — local radii and `full: 9999`
14. Elevation — flat public layering
15. Motion — capture as state, not motion
16. Font evidence — wordmark / `swiper-icons` / native typography
17. Family — fallback prohibition
18. Type roles — YAML ratio, §3 px keep-both, YAML claim anchors
19. Type roles sizes — 90/42/16/14 as named roles, not shared numerals or the 42px-tall action
20. Assets — Simple Icons pointer
21. Capture record — source-contract keep; role-based applicability; not-complete-coverage
22. Service-category tab — 62px / `16px 0` as this tab, not nav 62px or spacing.md
23. Corporate black action — 42px as this action, not the service-page title
24. Brand-resource download — 43px / padding as this control, not spacing.md
25. Brand specification row — `24px` as line-height spelling, not spacing.lg
26. Layout rules — five source rules as public-surface contract
27. Layout measurements — surface measurements, not cross-viewport specs
28. Content & Locales — voice register
29. Named gaps — named values, not a domain inventory; not permissions to invent

Count: DESIGN 29 = provenance inventory 29. Worker-close 24=24 was narrow on both sides (fastcampus). No Scope/Avoid sentence invents a domain the source did not name (D1). No "does not say that anything measures …" closer was added (over-defense).

## F2 E2 check (mandatory final pass)

Each log row above was written only after `grep -oF` against `DESIGN.md` and `provenance.md`. Dual destinations named in this log were confirmed in both files before the row was closed: homepage, `#ffe300` DESIGN dest 2 / P dest 5, Simple Icons slug DESIGN dest 1 / P dest 3, `ds.description` / native-banking-product sentence DESIGN dest 1 / P dest 2, `tokens.note` facts at 76–80, `tokens.spacing.sm` / `md` / `lg`, `tokens.rounded.section` / `full`, published names. Compliance claims used only when the portable body actually holds the cited text: B3 five-kind gate at `DESIGN.md` 123; B2a complete form 29 = 29; C4 omit at 293; C2 role reasons at 200/226/251/276. Persona deletion is unidentified (`provenance.md` 147) and does not re-host a name, age, city, or motivation (D2a, E2d).
