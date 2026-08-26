# Cybozu migration log

Ruleset: `MIGRATION_RULEBOOK.md` v9 (2026-08-26) — A5 copy-restoration pass; migrated under v8 (2026-08-25)

Source: `web/references/cybozu/DESIGN.md`
Destination: `docs/design-md-weight/migrated/cybozu/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/cybozu/provenance.md`
Date: 2026-08-25 (A5 copy restoration 2026-08-26)
Worker: GPT-5.6-sol T2-1 Wave 18; A5 restoration T2-1 A5 worker
Portable Core: pass (`scripts/design-md-core.cjs` evaluatePortableCore: `portable_core: true`, `structurally_valid: true`; `test-v2/tools/migrate-reference.mjs --brand cybozu --gate-only`: PASS, problems `[]` — re-measured 2026-08-26 after the A5 restoration)
DESIGN SHA-256: `c246ed307657f2de3b5d0940c1b9470a7115826b4f72903d882d565fe985c736` (2026-08-26, post-A5-restoration; pre-restoration `e094aeebceb09627bd6427414f9db9fe71cc0af6b44a6cb5e9435073d7a92f3b`)
Source SHA-256 (unchanged): `d504cee0163753e1f9b448c4b6c1e811ce30e0d0fd6fea7330e83a99e79e3a35`

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity | 분리 → provenance; name 이중 목적지 → H1 | No portable frontmatter; all exact identity values retained. |
| YAML Google s2 favicon | 분리 → provenance; asset-authority boundary → Typography & Assets | Exact URL stays in provenance. Portable file states that the catalog pointer is not an official distributed logo; no favicon substitution claim. |
| YAML verified/added/omd and token extraction metadata | 분리 → provenance | Freshness and tool metadata stay outside portable top matter. |
| YAML token note | 이중 목적지 → Experience Scope + provenance | Corporate teal and kintone yellow remain separate surface systems and are explicitly not merged. |
| YAML colors | 옮김 → Foundations; exact ledger → provenance | All corporate and kintone values and roles preserved. |
| YAML typography | 옮김 → Typography & Assets; exact ledger → provenance | Full families and unitless `2.0`, `1.45`, `1.40`, `1.69` line-height forms preserved alongside captured px results. |
| YAML spacing/rounded/shadow | 옮김 → Foundations; exact ledger → provenance | Every value preserved; 9999 token and captured 50% geometry are not merged. |
| YAML components | 옮김 → Components & States; exact ledger → provenance | All eight component records and their source primitive types and fields are preserved component-by-component; badge is non-interactive, cards omit kind/maps. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience + Foundations + Typography & Assets | Two-surface scope and all verified traits retained. Editorial atmosphere/causal readings carry adjacent complete B2a qualification. |
| §2 Color Palette & Roles | 옮김 → Foundations | All 20 surface-bounded color roles retained without teal/yellow reconciliation. |
| §3 Typography Rules | 옮김 → Typography & Assets | Full stacks, role metrics, surface split, and hierarchy retained; editorial friendliness explanation moved under qualified derived principles. |
| §4 Component Stylings | 옮김 → Components & States | All buttons, cards, badge, navigation, and input values retained; §4.4 applicability is role-specific and does not use capture absence as non-applicability. The published `Use:` label strings quoted in legacy 144/161/171/180/195/205/214 are carried as bytes (A5) — see the A5 restoration table below for the ones dropped in the first pass and now restored. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations | Verified desktop grouping, spacing, tint, radius, and exact control dimensions retained. The card titles named unquoted in legacy 239 (`顧客・案件管理, 脱エクセル, ワークフロー`) are brand-published strings and are carried as bytes into Layout & Platforms (A5); they sit below the gate's quoted-run detector, so their loss was silent. |
| §6 Depth & Elevation | 옮김 → Foundations Elevation | Flat/tint/hairline/soft/PickUp records all retained with boundaries. |
| §7 Do’s and Don’ts | 옮김 → Experience derived principles/Avoid + Foundations | Brand rules retained with adjacent complete B2a classification; no Governance dilution. |
| §8 Responsive Behavior | unverified breakpoint/collapse/radius-retention claims → provenance unresolved ledger; source-body control sizes and observed image no-shadow behavior → Layout & Platforms; sidecar-only PickUp size → provenance | `<640`, `640–1024`, `1024–1440`, collapse recipes, and cross-breakpoint radius retention have no multi-viewport proof, so their exact claims are preserved outside prescriptive Core. Source-body 40/42/56/64/66px measurements and observed product-image no-shadow behavior remain portable; the sibling proof’s additional 50px PickUp size stays in provenance. |
| §9 Agent Prompt Guide | 고유 값은 Core 슬롯으로 옮김; prompt/example wrapper 삭제 | Every unique value is present in Foundations, Typography, Components, or Layout; tool-specific prompt prose is deleted with no sidecar delegation. |
| §10 Voice & Tone | 옮김 → Content & Locales | Registers, labels, verbatim live titles/CTAs, and forbidden register retained. |
| §11 Brand Narrative | 옮김 → Experience Scope/Audience + Assets | Founding/evolution/mission/open-design context retained; sources and proof boundaries remain in provenance. |
| §12 Principles | 옮김 → Experience derived principles | Five editorial implications retained under complete adjacent B2a qualification; not promoted as published Cybozu doctrine. |
| §13 Personas | source-backed groups → Experience; fictional biographies 삭제 | D2 forbids fictional persona promotion or provenance recopy; names and biographies are deleted, while verified audience groups remain. |
| §14 States | 옮김 → Components & States legacy derived guidance | Full recipe meanings/values are preserved in the legacy-guidance table with adjacent complete derived-editorial classification; they do not supply the separately derived per-component applicability maps and are not presented as observed evidence or complete coverage. |
| §15 motion | exact legacy values 분리 → provenance unresolved ledger; absence rule/B3 → Foundations Motion | Unproven curves/durations are not brand tokens, but every exact value and rule is retained for loss accounting. Portable B3 names all five evidence kinds and component-specific observation. |
| Footer/source comment | 분리 → provenance | Tier 1/2, proof method, library version/licence, persona disclosure, and interpretive-claim disclosure retained in the ledger. |
| Canonical `.verification.md` | 분리·채택 → provenance Proof | Selected raw style tuples and frequency counts, source boundaries, and the teal/yellow conflict disposition are retained in provenance, which also points to the canonical full sibling Proof; no portable telemetry is promoted. |

## A5 copy restoration (2026-08-26, rulebook v9)

Rulebook v9 added A5 — a brand-published string moves as bytes; translation, paraphrase, English substitution, and case normalization are all losses — and the gate gained a `copy-loss` check. Wave 18 passed both lanes and the semantic review, so the pass history is not evidence here: the first pass kept every token, table value, and applicability judgment but silently dropped the published Japanese label strings from the component `Use:` lines, and neither lane looked at copy. The rows below were re-measured by grep against the source and all four outputs, not recalled.

| String | Legacy citation | Disposition |
|---|---|---|
| `顧客・案件管理` | 195 — `Use:` of **kintone Feature Card** (§4 Cards & Containers); also named in 239 (§5 grid) | 복원 → DESIGN.md §4 `### kintone feature card` `- Use:` line (`DESIGN.md:314`), byte-identical, plus §5 Layout & Platforms (`DESIGN.md:369`). Not translated: it is the card's published title. |
| `脱エクセル` | 195 — `Use:` of **kintone Feature Card**; also 239 | 복원 → `DESIGN.md:314` and `DESIGN.md:369`, byte-identical. No English rendering is admissible: "de-Excel" / "escape from Excel" is an interpretation of a coined JP B2B idiom, and the original is the only canonical form. No gloss was added, because a gloss here would be a derived editorial translation that the source never published. |
| `製品情報` | 214 — `Use:` of **Navigation** (§4), corporate top horizontal nav | 복원 → DESIGN.md §4 `### Corporate top-navigation item` `- Use:` line (`DESIGN.md:179`), byte-identical. |
| `セミナー・イベント` | 214 — `Use:` of **Navigation** (§4) | 복원 → `DESIGN.md:179`, byte-identical. Distinct from the corporate band label `Seminar・Event` already carried in §6 Content & Locales (`DESIGN.md:379`): 214 is the top-nav item, 70/97 are the muted `#aaaaaa` bilingual English section labels. Two evidence domains — the English label is not a translation slot for this string, and neither substitutes for the other. |
| `企業・IR` | 214 — `Use:` of **Navigation** (§4) | 복원 → `DESIGN.md:179`, byte-identical. Not flagged by the gate: the detector requires a contiguous non-Latin run of ≥4 characters, and the run here is `企業・` (3) because `IR` is Latin. Same defect class as the four above; restored with them. |
| `ニュース` | 214 — `Use:` of **Navigation** (§4) | 복원 → `DESIGN.md:179`. It had survived the gate only incidentally, inside the unrelated provenance quote `“ニュース 一覧”` (`provenance.md:70`, the §4 inline text-link role from legacy 144). Its nav-item context was gone; the gate's substring test cannot tell relocation from coincidence. |
| `ワークフロー` | 239 — §5 Layout, third named kintone use-case card | 복원 → `DESIGN.md:369`. Unquoted at source, so the gate never saw it; the loss was real regardless. |
| `田中美咲, 38, 松山` / `佐藤健, 45, 東京` / `鈴木あみ, 29, 大阪` | 381/383/385 — §13 Personas | **삭제 유지 (복원하지 않음).** These are not brand-published strings. The source itself labels §13 "fictional archetypes … not individual people", and D2 forbids promoting or re-copying a fictional persona into Core or provenance. A5 protects published copy from paraphrase; it does not resurrect invented content. Restoring them would be fabrication, so they stay deleted and the reason is recorded here. Their Japanese runs will therefore always read as "absent" to a byte scan of this reference — by design, not by loss. |
| `案件管理` (bare) | 381 — inside the deleted `田中美咲` persona biography | **원본 자리로는 복원하지 않음.** Its only source location is the fictional biography above. The string is nonetheless present in the outputs as part of the restored card title `顧客・案件管理`; no separate persona-derived citation was created. |

Re-verified pointers (grep, 2026-08-26): `web/references/cybozu/DESIGN.md` quoted `Use:` label lines are 144/161/171/180/195/205/214 and the §5 card-title line is 239 — the earlier prose rows carried no line numbers, so nothing had drifted; the numbers above are newly measured, not copied. The source file is unmodified (SHA-256 `d504cee0163753e1f9b448c4b6c1e811ce30e0d0fd6fea7330e83a99e79e3a35`, identical to the Wave 18 audit record). Portable-doc line numbers cited above are post-restoration.

Unchanged by this pass: every token value, every component-table value, every state applicability verdict and its reason, and the section structure. The three edits add published label strings to existing `- Use:` / layout prose lines and change nothing else.

## Required final passes

- F1 B2a scan: completed across Scope, principles, avoidances, state guidance, foundations, layout, content, components, and governance; all editorial interpretations have an adjacent complete evidence-class limit.
- F2 E2 scan: completed against all three outputs; every split and dual destination above exists, including unresolved responsive/motion ledgers.
- E3: no value, hex, curve, selector, or line break was distorted to influence the gate. False positives will be reported rather than evaded.
