# Gogolook migration log

Source: `web/references/gogolook/DESIGN.md` (unmodified)
Destination: `docs/design-md-weight/migrated/gogolook/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/gogolook/provenance.md`
Rulebook version: **v12** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-08-28
Worker: grok-4.6 T2-1 wave 28

Every row below was checked by grepping the three output files before it was written; the line numbers are grep results taken after the final edit, not recollection (F2). Bare numbers are `DESIGN.md` lines; provenance lines are marked `prov`.

## Frontmatter

| Legacy | Disposition | Destination / reason |
|---|---|---|
| `id`, `country`, `category`, `homepage`, `verified`, `omd: "0.1"` | 분리 → provenance | provenance Identity (prov 9–17) and Freshness (prov 36–38, conflicts at prov 40). The portable body carries no frontmatter. |
| `name: Gogolook` | 옮김 → DESIGN.md H1 · 분리 → provenance | H1 `# Gogolook Design System` (line 1) and provenance Identity (prov 10). |
| `primary_color: "#0CD25F"` | 옮김 → Foundations · 분리 → provenance | Semantic color **Whoscall Green** (line 81) and provenance Identity (prov 14) + claim ledger (prov 95). |
| `logo.type: favicon` / `logo.slug` | 분리 → provenance | prov 15, with the reason at prov 30: the source classifies it only as `type: favicon` and states nothing about ownership or license, so the URL stays in the ledger. The body records the existence of a favicon / webclip entry at line 156 without the URL. Measured, `grep -oF 'cdn.prod.website-files.com' DESIGN.md \| wc -l` = 0; provenance 1. |
| `ds.name` / `ds.url` / `ds.type: brand` / `ds.description` | 분리 → provenance · 이름·URL은 옮김 → Scope | A1c: `ds.type: brand` is kept as a value at prov 23–26. `Whoscall Brand Guidelines` stands in the portable body (line 11 and 18 further hits = 19) and in provenance (prov 21, 26) — two destinations (E2a). `ds.description` sentence is 0 in `DESIGN.md`, 1 in provenance (prov 24). |
| `tokens.source: prose-derived`, `tokens.extracted: 2026-06-09` | 분리 → provenance Identity / Freshness; **meaning** 옮김 → Scope (line 11) + Spacing (line 95) | The field name stays in the ledger (`grep -oF 'prose-derived' DESIGN.md \| wc -l` = 0; provenance 4). The body states in plain language that the machine-readable value set was drawn from the record's own prose after the inspection (E1). |
| `tokens.colors` (8 values) | 옮김 → Foundations Semantic color (lines 81–91) · 분리 → provenance claim ledger (prov 95–102) | Uppercase prose / sibling forms in the body; YAML lowercase forms in the verbatim table (prov 71–78). Both destinations (E2a). Measured, `grep -oF '#0cd25f' DESIGN.md \| wc -l` = 0, provenance 3. |
| `tokens.typography.family` (sans + mono both `Noto Sans`) | 옮김 → Typography Family / Font evidence (lines 131, 138) · 분리 → provenance (prov 85, 103) | The oddity that `mono` is also `Noto Sans` is preserved, not normalized. |
| `tokens.typography.hero` 118 / 500 / `1.1` | 옮김 → Type roles (line 147) | Unitless `1.1` kept as a ratio (A1a). Use string "Nunito rounded display hero" at line 147 and prov 79 — two destinations (E2a). |
| `tokens.typography.body` 16 / 400 / `1.5` | 옮김 → Type roles (line 148) | Unitless `1.5` kept. Use string "Noto Sans body copy" at line 148 and prov 80 — two destinations (E2a). |
| `tokens.typography.button` 16 / 500 / `1.0` | 옮김 → Type roles (line 149) | Unitless `1.0` kept. Use string "Pill button label" at line 149 and prov 81 — two destinations (E2a). |
| `tokens.spacing` (6 named steps) | 옮김 → Foundations Spacing (line 95) · Layout (line 248) · 분리 → provenance (prov 107) | Named steps `xs`…`section` framed as the prose-derived set, not as an independently computed scale. Live padding `16px 32px` is stated separately. |
| `tokens.rounded` (`sm` 40 / `md` 40 / `lg` 100 / `full` 9999) | 옮김 → Foundations Shape (lines 99–102) | `full` 9999 is at line 102. Measured, `grep -oF '9999' DESIGN.md \| wc -l` = 1; provenance 1. |
| `tokens.components.button-primary` (`type: button`) | 옮김 → Components Primary Download Pill (lines 168–191) | `Type: button` at line 171 (A1b). Use string "Primary download CTA pill, 56px height" is 0 in DESIGN.md, 1 in provenance (prov 82) — byte form kept in the ledger (A5). |
| `tokens.components.button-secondary` (`type: button`) | 옮김 → Components Secondary Demo Pill (lines 193–216) · 분리 → provenance (prov 110) | `Type: button` at line 196. `rgba(255,255,255,0.8)` at lines 13 and 199; also named in the claim ledger (prov 110) — two destinations (E2a). Use string "Secondary demo pill, 56px height" is 0 in DESIGN.md, 1 in provenance (prov 83). |
| `tokens.components.button-premium` (`type: button`) | 옮김 → Components Premium Button (lines 218–241) | `Type: button` at line 221. Height 57px, radius 40px, weight 400. Use string "Premium / upgrade action on light-green surface, 57px height" is 0 in DESIGN.md, 1 in provenance (prov 84). |
| `components_harvested: true` | 분리 → provenance | prov 20 and prov 167 (A1c). Count: 0 in DESIGN.md, 2 in provenance. |

## Body sections

| Legacy | Disposition | Destination / reason |
|---|---|---|
| §1 Visual Theme & Atmosphere — product + captured layer | 옮김 → Experience Scope (lines 9, 13) | Company description, inspected URLs, and the captured marketing layer. Line 13 carries `#FFFFFF`, Nunito 118/500, Noto Sans 16/400, `#262626`, 56px / 100px / `16px 32px` / `#05F067`, `rgba(255,255,255,0.8)`, `#E6FAEF` 40px / 57px, `#F53F90`, `#019D91`. |
| §1 interpretive framing (friendly protection vs enterprise security; "you're protected"; trusted neighbor; green does the emotional work; "security-vendor" tropes) | 옮김 → Experience Scope (line 15) | Kept as a derived editorial implementation inference with the adjacent complete qualifier, including the published Whoscall Brand Guidelines in the closing noun (B2a). `"you're protected"` is byte-exact. |
| §2 Color Palette & Roles (8 entries) | 옮김 → Foundations Semantic color (lines 81–91) | Split by evidence domain: brand-page documented `#0CD25F` / `#2C3E50` / `#FFFFFF` vs live `#05F067` / `#E6FAEF` / `#262626` / `#F53F90` / `#019D91`. Role-name characterizations qualified at line 77 (B2a). |
| §3 Typography Rules | 옮김 → Typography & Assets (lines 135–152) | Nunito display and Noto Sans body; unitless line heights `1.1` / `1.5` / `1.0`; substitution ban at line 139. The pairing reading qualified at line 141 (B2a). |
| §4 Primary Download Pill | 옮김 → Components (lines 168–191) | Anatomy, `type: button`, default observation, and a §4.4 applicability table. Loading / error / success closed for a destination-role reason, not for absence of capture (C2). |
| §4 Secondary Demo Pill | 옮김 → Components (lines 193–216) | Same structure. `"demo"` byte-exact in the Role line (line 195). |
| §4 Premium Button | 옮김 → Components (lines 218–241) | Same structure. Height `57px`, radius `40px`, weight `400`. |
| §5 Layout Principles | 옮김 → Layout & Platforms (line 246) | Composition reading qualified adjacently, including the qualitative scaling remarks (B2a). |
| §6 Depth & Elevation | 옮김 → Foundations Elevation (line 108) | Qualified adjacently (B2a). No shadow token is promoted. |
| §7 Do's (4 rules) | 옮김 → Experience Application rules (lines 57–60) | Qualified at line 55. Deliberately not folded into the controlled Governance copy. |
| §7 Don'ts (4 rules) | 옮김 → Experience Avoid (lines 66–69) | Qualified at line 64. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms (line 250) | Specific breakpoint values remain unnamed. The 118px-on-large-screens and 16px-body remarks stay qualitative. Covered by the section qualifier at line 246. |
| §9 Agent Prompt Guide | 삭제 | Tool-facing prompt packaging with no receiving slot. Every hex, size, radius, padding, height, and family inside it was grepped against the rest of the source before this row was written; each already stands in §2, §3, or §4, so nothing unique was lost (A3). No delegation to a skill or adapter. Disposition also at prov 159. |
| §10 Voice & Tone | 옮김 → Content & Locales (lines 255–259) | Register reading qualified at line 255 (B2a). The pair `"threat detected"` / `"we've got your back"` is byte-exact at line 257, under that qualifier. Also named in the derived ledger at prov 136. |
| §11 Brand Narrative | 옮김 → Experience Scope (line 9) · 분리 → provenance | Taiwan TrustTech, Whoscall caller-ID and anti-scam. Corporate URL is in Scope (line 9) and provenance Surfaces / Sources. The interpretive "mission energy" / "approachable protection" reading sits inside the line 15 qualifier, not as a Gogolook statement. |
| §12 Principles (5) | 옮김 → Experience Principles (lines 47–51) | Qualified at line 45 with the full evidence-class limitation, including the published Whoscall Brand Guidelines. |
| §13 Personas (3 fictional role titles) | 삭제 | Fictional biography (D2). Not promoted and not re-recorded in provenance, not even as titles (D2a). Disposition at prov 158. Group-level audience survives at line 30. |
| §14 States | 옮김 → Components & States Capture record (line 164) + per-component applicability | Body preserved: no documented states beyond default; no specific hover / pressed / focus / disabled values. The "derive conservatively" instruction is kept as a qualitative constraint, not as invented hex (A1). Applicability is judged by control meaning (C1). Graph delegation none (A2). Qualified at line 164 (B2a). |
| §15 Motion & Easing | 옮김 → Foundations Motion (lines 112–116) | No duration, curve, animation name, transition property, or reduced-motion value is promoted (there is no unattributed curve to delete). Qualitative character qualified at line 114 (B2a). |
| §15 promotion condition | 신설 근거 규칙 → Foundations Motion (line 116) | B3 is written out in full at line 116, verified by reading the line: transition properties, animation name, duration, easing, and reduced-motion behavior, plus the per-component computed-observation gate and the "official documentation of a single curve or duration is not that gate" clause. This row claims only what line 116 actually contains (E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | Freshness (prov 36–38) and Sources (prov 55–63). `"**Conflicts unresolved:** none"` reduced to the source's `none` at prov 40. The footer note that `#0CD25F` is the catalog primary and `#05F067` is the live near-twin is at prov 63 and in Scope line 11. |

## Sibling file

`web/references/gogolook/.verification.md` **exists** — confirmed with `find web/references/gogolook -type f`, not with `ls` or a `*` glob. It was adopted as Proof corroboration (prov 140–152). Inspection date 2026-06-01, method `playwright getComputedStyle (live DOM) + raw source-file fetch`, and the URL set match the source. No viewport and no extra hex or metric was taken into the portable body.

Sibling RGB expansions `rgb(5,240,103)` and `rgb(230,250,239)`: DESIGN.md 0 / provenance 3 each (disposition mention, not a body use) / this log 1 each. The provenance sentences name the strings as mention, not as a three-file absence (E2d).

## F1 — B2a scan

Re-read the whole portable body after drafting. Every causal / interpretive / judgment sentence is either a published brand-page fact, a live observation, or a derived editorial implementation inference with an adjacent complete qualifier (`derived editorial implementation inference` / `not Gogolook-authored` / `separately published UI specification, including the published Whoscall Brand Guidelines`). Measured after F3: all three fragments = **17** in `DESIGN.md`. The 17 sites are listed one-to-one at prov 120–136.

The published Whoscall Brand Guidelines is a `ds.type: brand` page, not a first-party UI specification. The B2a closing noun names that page so the qualifier does not claim the brand page is absent (v12 premise note). Documented colors are not inside the derived set.

## F2 — destination check

Rows above were written after the greps in this session. Dual destinations (hex case pair, use strings that survive in both files, `Whoscall Brand Guidelines`, `rgba(255,255,255,0.8)`) name both. Compliance claims name only text that is present: B3 is claimed only because line 116 contains the five evidence kinds and the per-component gate.

## A5 / A5a — issued-copy sweep

Trigger: gate `copy-loss` reported `compared: 0` / `candidates: 49` (바늘 0개). A5a hand sweep was therefore required.

Extracted issued or sibling-measured strings (needles): `Gogolook`, `Whoscall`, `TrustTech`, `Whoscall Green`, `Dark Gray`, `Whoscall Brand Guidelines`, `Nunito`, `Noto Sans`, `Nunito rounded display hero`, `Noto Sans body copy`, `Pill button label`, `Primary download CTA pill, 56px height`, `Secondary demo pill, 56px height`, `Premium / upgrade action on light-green surface, 57px height`, the quoted `"demo"` action, and the eight color hexes in both case forms.

| Needle | DESIGN.md | provenance | Disposition |
|---|---:|---:|---|
| `Gogolook` | 1 (H1) + later mentions (22; 17 of them are the B2a `Gogolook-authored` fragment) | Identity | survived |
| `Whoscall` | Scope and throughout | Surfaces / Sources | survived |
| `TrustTech` | 1 (line 9) | 1 (prov 112) | survived |
| `Whoscall Green` | 4 | 3 | survived |
| `Dark Gray` | 2 | 3 | survived |
| `Whoscall Brand Guidelines` | 19 | 2 | survived; two destinations |
| `Nunito` / `Noto Sans` | 13 / 12 | 3 / 6 | survived |
| `Nunito rounded display hero` | 1 (line 147) | 1 (prov 79) | survived; two destinations |
| `Noto Sans body copy` | 1 (line 148) | 1 (prov 80) | survived; two destinations |
| `Pill button label` | 2 (both on line 149: role name and use string) | 1 (prov 81) | survived; two destinations |
| `Primary download CTA pill, 56px height` | 0 | 1 (prov 82) | ledger only; meaning in Components Role |
| `Secondary demo pill, 56px height` | 0 | 1 (prov 83) | ledger only; meaning in Components Role |
| `Premium / upgrade action on light-green surface, 57px height` | 0 | 1 (prov 84) | ledger only; meaning in Components Role |
| `"demo"` | Role line 195 | — | survived |
| uppercase hexes | present | present | survived |
| YAML lowercase hexes | 0 | 3 each | ledger only; same values, different byte form |

Not needles (editorial samples, kept with a qualifier, not treated as brand-issued copy): `"you're protected"` (line 15), `"we've got your back"` / `"threat detected"` (line 257).

Extracted 22 issued/sibling needles. Unsurvived as portable-body bytes: 3 component `use:` strings and 7 YAML lowercase hex forms — all recorded in provenance with a disposition, not lost. Unexplained miss: 0.

A5 compliance is claimed against this denominator (22 extracted / 0 unexplained miss), not against a gate `verdict: PASS` alone (A5a).

## Proof / SHA

| Artifact | SHA-256 |
|---|---|
| Source `web/references/gogolook/DESIGN.md` | `ee088f48dbd6803ae8c995be1e008c90724ea19efcab296604ab0b4248e4514a` |
| Sibling `web/references/gogolook/.verification.md` | `2b8b88b73d7be3e91401037db9de399c71aede7c0ab823ac06920d6a9c613a7a` |
| Portable `docs/design-md-weight/migrated/gogolook/DESIGN.md` | `335c3c8b7934e04b261d1551b67bc642f067f1e017cb1ffaae0b99dd98531e18` |

Source and sibling were not modified. Gate: `--gate-only` **PASS** / `problems []`. `copy-loss` coverage `0/49` (A5a hand sweep above). Core `inspectDesignMd` `portable_core: true`, placeholders 0. Process-leak hits on this body: 0.

## Audit revision 2026-08-28 (F3)

Independent B2a·E2 audit (worker report unused). DESIGN.md line count unchanged (299). Portable SHA above is post-audit.

- Body complete qualifiers 15→**17** (Spacing :95 measurement-class; Family :139 substitution/canonicity). Layout :246 qualifier expanded to name the measured-grid reading (same site).
- Provenance derived ledger 15→**17** (prov 120–136). RGB "appear only in the sibling" rewritten as mention/use (E2d).
- Log destinations corrected to grep results: verbatim use-string/family rows were off by one; Voice pair is prov 136 not 140; TrustTech is prov 112 not 117; conflicts `none` is prov 40 not 43; footer near-twin note is prov 63 not 62; Freshness data is prov 36–38; sibling corroboration is prov 140–152; §13/§9 omission are prov 158/159; `components_harvested` proof note is prov 167.

## Revision 2026-08-28 (wave28 review)

Confirmed defect only: A4 / A1 — `tokens.typography.button.lineHeight: 1.0` was copied onto the Type roles Premium row. Orchestrator reconfirmed; existence is not re-litigated.

- Remove: Type roles Premium Line height `1.0` (`DESIGN.md` :150). Source `button-premium` records `font: "16px / 400"` only (`web/references/gogolook/DESIGN.md:40` · `:97`). YAML `lineHeight: 1.0` belongs to `tokens.typography.button` / use "Pill button label" and stays on the Pill row (:149). The Premium cell is now `—` (omission mark used when the source recorded none). Recorded-as no longer reads weight 400 as the sole difference, which is what promoted `1.0` as a shared value.
- Not touched: other Type role rows, token values, component tables, state rows, B2a complete qualifiers, provenance derived ledger 17=17, `web/references/gogolook/**`.
- Line count: `DESIGN.md` still **299** (in-place cell edit). Provenance `DESIGN.md` line pointers 15 · 21 · 30 · 34 · 45 · 55 · 64 · 77 · 95 · 108 · 114 · 124 · 139 · 141 · 164 · 246 · 255 re-read against the current file; all still land. Migration-log dest lines 11 · 81–91 · 95 · 99–102 · 116 · 147–149 · 156 · 164 · 168–191 · 193–216 · 218–241 · 246 · 250 · 255–259 re-read; no dest moved.

실측 (`find`로 산출 4파일·원본·sibling 존재 확인 후 `grep -oF <패턴> <파일> | wc -l`, 파일별. `no matches found` 아님):

| 패턴 | 원본 | sibling | DESIGN.md | provenance.md | migration-log.md | audit-log.md |
|---|---:|---:|---:|---:|---:|---:|
| `1.0` | 1 | 0 | **1** | 1 | 9 | 0 |

Review-time portable-body `1.0` was DESIGN **2**. After this revision the portable body is **1** (Pill row :149 only). Provenance 1 is the pill claim-ledger row (prov 106). The log's extra hits are the button dest row, the §3 dest, and this revision section (E2d: this file is in its own denominator).

B2a remains **17 = 17** (`derived editorial implementation inference` DESIGN 17 / provenance inventory 17).

Post-revision DESIGN.md SHA-256: `c6e93d2c7ded0069e1cc36df9978550c62a8311da9682e4d03d551f0311f09d6`.
