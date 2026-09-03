# Portaly F3 audit (B2a · E2)

Auditor: grok-4.6 (fresh session, not the T2 worker). Worker report was not an input.
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v12 — B2 / B2a / E1 / E2 / E2a–c (plus orchestrator A1 key-path, D2a, E2d as checks).
Date: 2026-09-03

Files confirmed by `find` before any count: `docs/design-md-weight/migrated/portaly/{DESIGN.md,provenance.md,migration-log.md}`, `web/references/portaly/DESIGN.md`, sibling `web/references/portaly/.verification.md` (dotfile, path written out). Counts are `grep -o` occurrence counts per file, never `grep -c`.

Sentence class used: brand-published fact / observed technical / editorial interpretation or causal judgement. Only the third class without an adjacent complete qualifier (`derived editorial implementation inference` / `not Portaly-authored or a separately published UI specification`) was edited in the body. Token values, state applicability maps, and section order were not rewritten except the A1 row restore named below.

Portaly has no separately published UI specification, so the toss-form close is the complete class (rulebook v12 B2a 전제 주석).

## Classification (DESIGN.md)

Already adjacent to a complete B2a phrase and left as-is:
- Scope inspected-URL / keep-beside / live-extract / surface-attachment (`:9`)
- Scope atmosphere characterizations (`:11`)
- Scope founding-and-recognition classified as narrative-not-tokens (`:13`)
- Primary tasks YAML-`use` selection (`:19`)
- Audience drop-biographies / source-named groups (`:29`)
- Distinctive groupings (`:33`)
- Principles 5 items + UI implications (`:46`)
- Application rules / Avoid (`:56`, `:69`)
- Semantic color unmerged roles (`:86`) and Purple-Hero / Navy-Deep keep-apart (`:117`)
- Spacing / Shape unmerged numerals (`:134`, `:147`)
- Elevation gentle-depth reading (`:151`)
- Motion source-stated durations / unattributed curves (`:164`), signature-motion characterizations (`:180`), reduced-motion register (`:182`), B3 five-kind gate (`:184`)
- Font evidence / Family / Type roles / hero-white / Type principles (`:203`, `:213`, `:217`, `:231`, `:235`)
- Assets favicon identity-boundary / photography non-replacement (`:244`, `:246`)
- Capture graph-not-adopted / §14 wording / applicability (`:253`, `:267`, `:269`)
- Per-component keep-aparts (`:290`, `:316`, `:343`, `:370`, `:394`, `:417`, `:436`, `:460`, `:482`)
- Layout as source writings (`:487`)
- Content adjectives / forbidden register / samples (`:540`, `:550`, `:561`)
- Named gaps as source-named unresolved writings (`:595`)

Left unqualified (brand-published or observed-technical):
- Identity, inspected URLs, hex/radius/type values, YAML `use` strings, published slogans and TC labels
- §14 state table body, including source characterizations Encouraging-never-blank-scary / Honest-and-calm
- Per-control applicability maps and C2 role reasons
- Governance boilerplate
- Source-stated Shadow Philosophy / Motion rules / Whitespace philosophy / Type principles as the source wrote them

Third class found without an adjacent complete limiter that named the reading (fixed):
- Elevation `:160` — `tokens.shadow.card` stays on pricing plan cards / `tokens.shadow.block` stays on creator link blocks / Neither is copied onto the other. The `:151` limiter named only the gentle-depth mood, not the unmerged-shadow keep-apart.

## Fixes

1. `DESIGN.md:160` — appended a complete adjacent B2a on keeping the two YAML shadows unmerged (card on pricing plan cards, block on creator link blocks). Shadow hex/blur strings unchanged.
2. `DESIGN.md:425–427` — restored YAML `tokens.components.link-block` `radius` / `padding` / `font` as rows in that block (`Radius: 6px`, `Padding: 8px 16px`, `Font: \`16px / 600 Noto Sans\``). Values were already in a bundled “YAML filled variant” sentence; they were not rows. The rounded 16px variant note and keep-apart at `:436` unchanged.
3. `provenance.md` Derived editorial inventory — 42 → 43 data rows to match body dest 43. Added Elevation keep-apart `:160`. After the three-row insert, Location pointers that had drifted were aligned: `:433→436`, `:457→460`, `:479→482`, `:484→487`, `:537→540`, `:547→550`, `:558→561`, `:592→595`.
4. `migration-log.md` YAML identity — exact homepage `https://portaly.cc/` is DESIGN dest 2 at 9 + provenance dest 4 at 13/24/48/55, not dest 2 at 9/430 (`:430` was `/cwl`). Prefix matches on `/en/pricing` `/en/blog` `/cwl` named separately (E2a). Catalog `#862983` DESIGN dest 25 + provenance dest 12 (was dest 7). type `favicon` DESIGN dest 2 at 244 (was dest 1).
5. `migration-log.md` `live-extract` — YAML value dest 4 at 9(×2)/184/195, not dest 6 at lines that only have `live-extracted`. Colon form provenance dest 2 at 26/187. `components_harvested` provenance dest 4 at 22/26/75/186.
6. `migration-log.md` family / type / spacing dests — `tokens.typography.family.sans` dest 2 at 196/207 (was 196/205); `cjk` dest 2 at 196/208 (was 196/207); §9 stack writing dest 2 at 197/210 (was dest at 197 only); `Drive Social Media Traffic` dest 4 at 223/231(×2)/557 (was dest 3 at 223/231/554); `tokens.rounded.lg: 20` dest 5 at 134/147(×2)/316/436 (was dest 4 at …/433); `tokens.spacing.lg: 20` dest 4 at 134/147/316/495; `tokens.rounded.full: 9999` dest 4 at 147/290/370/460.
7. `migration-log.md` component / C2 dests — `Primitive type: \`toggle\`` dest 1 at 452; `Primitive type: \`badge\`` dest 1 at 476; `Kind: non-interactive` dest 1 at 475 (was `kind: non-interactive` at 473); C2 L/E/S `commits no operation in place` at 298–300 / 324–326 / 351–353 / 378–380 / 402–404 / 444–446 / 468–470 (was off-by-one on the first five controls, pointing at disabled+loading+error). YAML `link-block` rows recorded at 425–427. `林啟維` DESIGN dest 3 at 11/13/561 (was dest at 11/558, missing `:13`).
8. `migration-log.md` layout / content / B3 / B2a counts — §5 489–508 qualifier 487; §8 510–534 table 512–516, Phone-mockup dest 2 at 246/534; §10 540–561 with period-bearing slogan dest 3 (was dest 2); B3 five-kind dest 2 at 184/603; Official-documentation sentence dest 1 at 184; B2a DESIGN dest 43 = provenance 43; word count 9,004.

Post-fix measure (`grep -o`, per file): `derived editorial implementation inference` DESIGN dest 43 = `not Portaly-authored` DESIGN dest 43 = provenance inventory 43 data rows.

## 범위 밖 관찰

- **B1 sibling 전용 분류 (고치지 않음).** `section H2` SRC 0 / SIB 1 (`web/references/portaly/.verification.md:31`) / DESIGN dest 2 at 231/557. `live H2` SRC 0 / SIB 0 / DESIGN dest 1 at 223. ` H2` SRC 0 / SIB 1 / DESIGN dest 3 at 223/231/557. The published string `Drive Social Media Traffic` is dual-hosted (A5a); the heading-level classification is sibling-only and is written as fact in the Type-roles table and Content samples. `feature H3` SIB 2 / DESIGN dest 0; `hero H1` SIB 1 / DESIGN dest 0 — those two were not promoted.
- **A5a coverage.** Gate `--gate-only` `copy-loss` compared 2 / candidates 199. Hand sweep of published labels in the log is 24 extracted / 0 missing; sibling published copy 3 / 0. Latin slogans measured present (`Your All-in-One Platform for Growth and Profit` DESIGN dest 3; `Join 200,000 creators worldwide to turn passion into profit` dest 3; `Growth & monetization plans built for creators` dest 3; `Turn Traffic into Revenue` dest 4; `Start for free` dest 3; `Features` / `Portaly AI` / `Blog` dest ≥1). Remaining latin-copy-audit losses `goto` / `zh-TW` are sibling inspect-method strings (SIB 1 / DESIGN dest 0). Not a Latin published-copy loss on this pass.
- **A1 extra, not a YAML-field loss.** `Anatomy: label` SRC 0 / SIB 0 / DESIGN dest 1 at Primary (Join Now) only. YAML `nav-link.active` is a row (`Active:`) in the Nav Link block; hex is backtick-wrapped, not a missing key path.
- **D2a / E2d.** Identifiers and biographical phrases from source §13 are dest 0 in DESIGN and provenance. Deletion rows name §13 페르소나 3인 (이름·나이·도시 포함) without re-listing them. Motivations and affiliation classifications were not reconstructed in Audience or Primary tasks. Absence assertions about sibling-only px say those strings stay in the ledger, not that they are absent from all three files.
- **Same hex, two roles.** `#ffffff` is Surface and On Primary; the Semantic color qualifier and inventory already name the second key. Not an E1 miss after this scan.
- **Word budget.** Portable body is 9,004 words (Python `split()`), recorded in the log as a deviation, not compressed.

AUDIT_DONE fixes=8
