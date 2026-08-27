# Danawa migration log

Ruleset: `MIGRATION_RULEBOOK.md` v8 (2026-08-25) for the Wave 18 migration; re-checked against v9 (2026-08-26) in the two A5 copy-restoration passes below.

Source: `web/references/danawa/DESIGN.md`
Destination: `docs/design-md-weight/migrated/danawa/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/danawa/provenance.md`
Date: 2026-08-25
Worker: GPT-5.6-sol T2-1 Wave 18
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd: `portable_core: true`, `structurally_valid: true`; `test-v2/tools/migrate-reference.mjs --brand danawa --gate-only`: PASS, problems `[]` — re-measured 2026-08-26 after the second A5 restoration pass)
DESIGN SHA-256: `563b59dab6d897aa9d7ba9265aed3dda3ffb7abd3604079ddd034bb2e6d0835b` (A5 restoration, second pass, 2026-08-26). Supersedes `81bc735fb22def27a37ddabfce208ab55ce5653eab1b1efed72584a7fa2a2604` (first A5 pass, same day) and the post-audit `3c3f52228c4ef5e41ce2c0801ffae6b0ed01ce33d17e134e2997c39da2307f16` recorded in `audit-log.md`, which points at the pre-restoration state.
Source SHA-256: `0d12570363ac19dc08af2f5de8697db161913cb1ac91e75fe2b1f3a83865dc1c` (`web/references/danawa/DESIGN.md`, unchanged — re-measured 2026-08-26)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity | 분리 → provenance; name/display name 이중 목적지 → H1/Scope | Portable frontmatter removed; exact identity retained. |
| YAML Google s2 favicon | 분리 → provenance; asset-authority boundary → Typography & Assets | Exact URL retained in ledger; portable file does not claim official logo distribution/licence. |
| YAML verified/added/omd/extraction/harvest metadata | 분리 → provenance | Freshness and process metadata remain outside portable top matter. |
| YAML note | 이중 목적지 → Scope/Foundations + provenance | Green gateway, catalog blue, price red, near-black ladder, and shadowless boundary all retained. |
| YAML colors | 옮김 → Foundations; exact ledger → provenance | All 23 source color keys remain represented; the two `#ffffff` keys (`canvas` and `on-primary`) share one portable `Canvas / on-color` row and one provenance `canvas/on-primary` ledger entry. |
| YAML typography | 옮김 → Typography & Assets; exact ledger → provenance | Pretendard roles and unitless `1.4` / `1.5` preserved. Body’s legacy `normal` rendering also remains. |
| YAML spacing/rounded/shadow | 옮김 → Foundations; exact/alternate forms → provenance | All values and explicit-unit variants retained; 52 and 9999 remain separate. |
| YAML components | 옮김 → Components & States; exact ledger → provenance | Ten component-token records preserved, including `listItem`, two non-interactive badges, a card, four buttons, an input, and a tab. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience/Foundations/Typography/Layout | Dense catalog scope and verified traits retained; interpretive density/tool language carries adjacent complete B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations | All green/blue/red/text/surface/hairline roles retained. |
| §3 Typography Rules | 옮김 → Typography & Assets | Full fallback stack, hierarchy, token ratios, and source/capture search-size split retained without merging. |
| §4 Component Stylings | 옮김 → Components & States; sibling-only tuple differences → provenance | Buttons/input/cards/badges/list/nav/panel values and heights retained. 18px/token vs 16px/raw search, 13px vs 13.3333px pager, and `#e0e0e0` vs `#f1f1f1` card border remain distinct. |
| §5 Layout Principles | verified desktop composition → Layout & Platforms; unverified width/three-zone claims → provenance | Captured density, modules, spacing, and dimensions remain portable; `~1280px`/rail contract lacks matching proof and is unpromoted. |
| §6 Depth & Elevation | verified flat/hairline/tints → Foundations; overlay scrims → provenance unresolved | `none`, hairlines, and tints stay portable. Exact `rgba(0,0,0,0.6/0.7)` values survive without unsupported elevation promotion. |
| §7 Do’s and Don’ts | 옮김 → Experience derived principles/Avoid | All color/type/density/geometry/depth rules retained with complete adjacent B2a. |
| §8 responsive values | 분리 → provenance unresolved ledger; captured desktop sizes → Layout & Platforms | Breakpoints, separate mobile property, three-zone collapse, and image behavior lack multi-viewport proof; exact claims remain losslessly recorded. |
| §9 Agent Prompt Guide | 고유 값은 Core 슬롯으로 옮김; prompt/example wrapper 삭제 | All unique product-row, category, search, rank, filter values exist in Foundations/Typography/Components/Layout. No slotless delegation. |
| §10 Voice & Tone | 옮김 → Content & Locales | Slogan, labels, price/rank register, official mission phrase, promotional boundary, and forbidden phrases retained. Corrected 2026-08-26: three quoted §10 strings had been carried only as English paraphrase (A5 loss) and are now byte-exact in Content & Locales — see “A5 copy restoration” below. |
| §11 Brand Narrative | 옮김 → Experience Scope + Content; third-party source class → provenance | Founding/listing/acquisition/rebrand/trust narrative retained as context, not live token evidence. Corrected 2026-08-26 (second A5 pass): the parent-company name `커넥트웨이브` and the origin-market proper noun `용산전자상가` had survived only as English (`ConnectWave`, `Yongsan`); both are now byte-exact in Scope beside the English — see “Second pass” below. |
| §12 Principles | 옮김 → Experience derived principles | Five editorial implications retained under complete adjacent B2a. |
| §13 Personas | source-backed groups → Experience; fictional biographies 삭제 | D2 forbids invented names/biographies from portable and provenance. |
| §14 States | 옮김 → Components & States legacy derived guidance | The source table meaning/values are preserved with adjacent B2a; the separately derived per-component applicability maps do not originate in legacy §14. No measured-state or coverage claim is made. |
| §15 motion | exact values 분리 → provenance unresolved ledger; B3 → Foundations Motion | Durations, curves, signatures, ~5s, and reduced-motion rule remain losslessly recorded but not tokens; portable B3 states five evidence kinds. |
| Footer/source comment | 분리 → provenance | Tier sources, official/third-party narrative evidence, persona disclosure, and interpretation disclosure retained. Corrected 2026-08-26 (second A5 pass): the third-party citations were held as bare URLs only; the source’s own labels (`나무위키`, `위키백과`, `전자신문 상장기업 분석`, `머니투데이`, `커넥트웨이브 보도`) are now byte-exact in the provenance source ledger. |
| Canonical `.verification.md` | 분리·채택 → provenance Proof | Raw samples/counts and sibling-only values (`#fe3f3f`, `#f1f1f1`, 13.3333px, 16px search) retained without portable invention. |

## A5 copy restoration (2026-08-26)

Rulebook v9 added A5 (brand-published strings move as bytes) and the gate added `copy-loss`.
The Wave 18 output and its fresh-session audit both passed, so neither lane is used as evidence
here — every pointer below was re-measured by `grep -nF` on 2026-08-26.

| Legacy string | Legacy site (measured) | What it was quoted as | Disposition | Destination (measured) |
|---|---|---|---|---|
| `다나와 추천` | `web/references/danawa/DESIGN.md` L377 (§10 Voice & Tone, tone table, **Rankings** row: `Authoritative and data-backed. "인기 순위 1", "다나와 추천". Implies aggregated truth.`) | Live ranking label — a badge/label string, not prose | 복원 → Content & Locales | `DESIGN.md` L375, byte-exact, paired with `인기 순위 1` as the source pairs them, under the section's existing B2a qualifier |
| `프리미엄 라이프스타일` | same file L380 (§10 **Forbidden phrases**: `Luxury or aspirational framing ("프리미엄 라이프스타일")`) | Named anti-example that calibrates the luxury/aspirational avoidance | 복원 → Content & Locales | `DESIGN.md` L377, byte-exact, English gloss kept **beside** it (`luxury or aspirational framing (…)`), not in place of it |
| `최고의 쇼핑경험` | same file L380 (§10 **Forbidden phrases**: `Empty superlatives without a number ("최고의 쇼핑경험" with nothing to back it)`) | Named anti-example that calibrates the unsupported-superlative avoidance | 복원 → Content & Locales | `DESIGN.md` L377, byte-exact, with the source's own gloss `with nothing to back it` preserved |

- Loss mechanism: the migrated avoidance sentence read `Avoid luxury/aspirational framing, unsupported
  superlatives, …` — an English summary that dropped the two quoted Korean anti-examples, and the
  Rankings register was compressed to the single word `rank`. A5 counts this as loss even though the
  rule's *meaning* survived: the calibrating strings are values, not descriptions.
- Nothing was deleted in this pass, so no A5 deletion reason is recorded. All three strings were
  restorable in the standard destination (Content & Locales verified-sample prose).
- Not changed: token values, component-table values, state applicability judgments, section
  structure, and the canonical source file (source SHA-256 re-measured identical).
- No evidence class was promoted. `다나와 추천` stays framed exactly as §10 framed it (a ranking-label
  register example), and the two forbidden phrases stay framed as things to avoid — neither is
  presented as verified live-surface capture.
- E3: no wording, quote, or line break was shaped to influence the gate. The only typographic
  difference from the source is the surrounding quotation mark (`"` → `“ ”`), matching this file's
  existing convention for `비교하고 잘 사는, 다나와`; the quoted string bytes themselves are identical
  (`grep -F` against the source returns a hit for each).

### Ledger pointer re-verification (grep-measured, 2026-08-26)

- §10 row above: the pre-existing claim “forbidden phrases retained” was **false** before this pass
  and is now true; the row was corrected rather than left standing.
- YAML colors row (“All 23 source color keys remain represented”): re-counted — the source `colors:`
  block has exactly 23 keys and `canvas`/`on-primary` are both `#ffffff`; claim holds.
- YAML components row (“Ten component-token records”): provenance `Component token record` table has
  exactly 10 rows; claim holds.
- SHA pointers: the portable DESIGN SHA-256 moved with this edit and was updated above. The source
  SHA-256 is unchanged. `audit-log.md` is left as written — it is a dated record of the 2026-08-25
  audit session, and its SHA is annotated above as pre-restoration rather than rewritten.
- No other line-number pointers exist in this ledger or in `provenance.md` (`grep -nE` for `L<n>` /
  `line <n>` returns none), so none were stale.

### Second pass (2026-08-26) — gate quote-form widening

After the first pass the `copy-loss` check gained the CJK quotation forms (`「」`, `『』`, `（）`),
and with parentheses accepted as a quote form it also began reading markdown link labels and
parenthetical glosses as quotations. Four further strings surfaced. They are **not** the same class
as the first pass — none of them is Danawa UI copy — so each was classified before it was moved.
Every pointer below was re-measured by `grep -nF` on 2026-08-26.

| Legacy string | Legacy site (measured) | Class | Disposition | Destination (measured) |
|---|---|---|---|---|
| `커넥트웨이브` | `web/references/danawa/DESIGN.md` L393 (§11: `rebranded the combined entity **ConnectWave (커넥트웨이브)**`) and L467 (footer corroboration list) | 사명 — the parent company’s Korean name, i.e. corporate identity. A5 names 사명 explicitly, so this is a brand fact and a value, not a description | 복원 → Experience Scope; 분리 → provenance 출처 원장 (E2a: two destinations) | `DESIGN.md` L13 as `ConnectWave (커넥트웨이브)`, byte-exact in the source’s own paired form; `provenance.md` L46 as the citation label `커넥트웨이브 보도`, and L48 inside the quoted footer list |
| `용산전자상가` | same file L389 (§11: `the Yongsan Electronics Market (용산전자상가) merchants`) | Proper noun of the origin market — not itself brand-published copy, but a named entity the portable Scope already asserts. It had been degraded to the bare district word `Yongsan`, dropping the entity name, so A5’s 병기 rule (keep the original, put the English beside it) is applied by analogy rather than the strict 발행 문자열 clause | 복원 → Experience Scope | `DESIGN.md` L13 as `Yongsan Electronics Market (용산전자상가)`; the English is 병기 beside the original, not a replacement |
| `나무위키` | same file L389 (§11 citation label `[나무위키](https://namu.wiki/…)`) and L467 (footer corroboration list) | 출처 표기 — the name of a third-party reference work. Not brand-published, carries no UI value | 분리 → provenance 출처 원장 (E1) | `provenance.md` L42 (label ↔ URL row) and L48 (quoted footer list) |
| `전자신문 상장기업 분석` | same file L389 (§11: `[전자신문 상장기업 분석](https://m.etnews.com/20210514000188)`) | 출처 표기 — the cited article’s title as the source wrote it | 분리 → provenance 출처 원장 (E1) | `provenance.md` L44 (label ↔ URL row) |

- Loss mechanism, corporate identity: the Scope sentence carried the rebrand as `the later ConnectWave
  corporate rebrand` and the founding as `a Yongsan PC-component price database`. Both facts survived;
  both Korean proper nouns did not. A5 treats the string as the value, so an English-only rendering of a
  company name is loss even when the sentence is true.
- Loss mechanism, citations: the provenance ledger already held all five external URLs, but stripped the
  labels the source wrote them under. The citation was traceable by URL and not by name.
- Why the two citation labels are not portable: E1 puts the 출처 원장 in `provenance.md`. A wiki’s or a
  newspaper’s name is neither a Danawa-published string nor a token, so promoting it into the portable
  body would misplace it. This is a destination decision, not a deletion — **nothing was deleted in this
  pass, so no A5 deletion reason is recorded.**
- Two further labels the gate did not flag (`위키백과`, `머니투데이`) and the footer’s `커넥트웨이브 PR`
  sit in the same ledger row and were restored in the same edit, so the row is complete rather than
  selectively repaired to the flag list.
- Not changed: token values, component-table values, state applicability judgments, section structure,
  and the canonical source file (source SHA-256 re-measured identical). The first-pass restoration was
  not reverted — all three of its strings were re-measured at their logged destinations (see the
  re-verification below).
- No evidence class was promoted. The Scope paragraph keeps its existing closing qualifier (“Those
  historical statements include third-party corroboration and remain narrative context rather than live
  interface-token proof”), and the provenance citation table states in its lead sentence that none of the
  five sources supplies a UI token.

**E3 — gate behaviour reported, not evaded.** Two of the four flags (`나무위키`,
`전자신문 상장기업 분석`) fall outside A5’s stated unit: A5 governs 브랜드가 발행한 문자열 — labels, CTA,
forum names, microcopy, 사명 — and the name of a third-party wiki or newspaper is none of those. The
cause is the widened quote set: with `( )` accepted as a quotation form, `[나무위키](https://…` parses as
a quoted string and its non-Latin run becomes a needle, so markdown link labels and parenthetical glosses
now enter the copy check. The same widening is what surfaced `커넥트웨이브`, a genuine A5 loss on a 사명 that the
Wave 18 worker, the fresh-session audit, and the first A5 pass all passed over, so the check reads as
over-inclusive rather than wrong. No wording, quote, or line
break was shaped to clear it — the two citation labels are in the provenance ledger because E1 puts the
출처 원장 there, which is where they would have gone had the gate never fired. Observation offered for
gate tuning, not applied here: excluding `](http` link labels from the quote scan, or treating `( )` runs
as ledger-class rather than copy-class, would separate the two populations.

### Ledger pointer re-verification, second pass (grep-measured, 2026-08-26)

- First-pass destinations re-measured and still true: `다나와 추천` and `인기 순위 1` at `DESIGN.md` L375;
  `프리미엄 라이프스타일` and `최고의 쇼핑경험` at L377. The second-pass edit is in-line at L13 and added no
  lines, so the file is still 417 lines and no first-pass pointer moved.
- Legacy pointers re-measured: `용산전자상가` and both citation labels at source L389; `커넥트웨이브` at
  source L393 and L467; `나무위키` at source L389 and L467.
- Every restored string was checked with `grep -F` against `web/references/danawa/DESIGN.md`, so each is
  present in the source in exactly the byte form written into the outputs.
- SHA pointers: the portable DESIGN SHA-256 moved with this edit and was updated in the header above. The
  source SHA-256 is unchanged. `audit-log.md` is again left as written — it is a dated record of the
  2026-08-25 audit session, and the header annotates its SHA as pre-restoration rather than rewriting it.
- The provenance source ledger gained a table; the pre-existing five URLs are unchanged and none was
  reordered, so no other pointer in either file was affected.

## Required final passes

- F1 B2a scan: completed across Scope, principles, avoidances, state guidance, foundations, layout, content, components, and governance; derived claims have adjacent complete evidence-class text.
- F2 E2 scan: completed against all three files; all split/dual destinations and unresolved width/scrim/motion/state values exist as logged.
- E3: no token, hex, curve, URL, or wording is distorted for gate behavior. Any false positive will be reported instead of evaded.
- A5 pass 1 (2026-08-26): `copy-loss` cleared on real restoration, not on gate-shaped wording. Gate result `{"brand":"danawa","verdict":"PASS","problems":[]}`; no false positive was observed — all three flagged strings were genuinely absent from all three output files before this pass.
- A5 pass 2 (2026-08-26, after the gate’s quote-form widening): four further strings flagged, all four genuinely absent from all three output files beforehand. Two were restored to the portable Scope as brand facts (사명 `커넥트웨이브`, origin-market proper noun `용산전자상가`) and two were placed in the provenance 출처 원장 as citation labels (`나무위키`, `전자신문 상장기업 분석`). Nothing was deleted. A partial false positive **is** reported rather than evaded: the two citation labels are outside A5’s unit and were flagged only because `( )` now parses markdown link labels as quotations — see the E3 paragraph above.
