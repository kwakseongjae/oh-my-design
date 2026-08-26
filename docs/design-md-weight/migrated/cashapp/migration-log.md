# Cash App migration log

Source: `web/references/cashapp/DESIGN.md`
Destination: `docs/design-md-weight/migrated/cashapp/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/cashapp/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: `node test-v2/tools/migrate-reference.mjs --brand cashapp --gate-only` → PASS, problems `[]`. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/cashapp/DESIGN.md --check --require-portable-core --json` → exit 0, `portable_core: true`. Not a catalog-adoption claim (E2c).
Worker F1/F2 completeness is not a current-class claim (E2c). Post-F3 dest greps are in the table and F1/F2 block below.

Source format: 15-section OmD 0.1 with YAML frontmatter. Mapping is by meaning, not by re-bundling legacy sections as Portable Core MUST.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; name / homepage / `primary_color` / favicon 옮김 → Experience / Foundations / Assets | Portable file has no frontmatter. H1 is `Cash App Design System`. Homepage `https://cash.app` dual DESIGN Scope 9/11 + Primary tasks 27 + provenance identity 13 / 25 / Surfaces 50 / Sources 60 / Tier 1 68 / Proof 80 (E2a). `https://cash.app/card` dual DESIGN Scope 11 / Primary tasks 27 + provenance 25/51/61/69/81 (E2a). `https://design.cash.app/color` dual DESIGN Scope 11 / Primary tasks 29 + provenance 25/52/62/70/82 (E2a). `https://design.cash.app/typography` dual DESIGN Scope 11 / Primary tasks 29 / Font 179 + provenance 25/53/63/71/89 (E2a). Catalog `primary_color` `#00e013` dual provenance 14/21/27 + DESIGN 13/15/38/40/54/61/63/91/93/141/226/246/255/397/401/406/413/473/506/511/613 (E2a). `#00e013` also appears at DESIGN 384 as “not Cash Green”. Avoid 76 names Citron `#d8ff14`, not this hex. Favicon URL `https://www.google.com/s2/favicons?domain=cash.app&sz=128` dual DESIGN Assets 211 + provenance identity 15/23 (E2a). `country` provenance 11 only. `category` provenance 12 only. |
| YAML `omd`, `verified`, `tokens.source` / `extracted` / `note`, `components_harvested` | 분리 → provenance; token note 옮김 → Experience `scope` | 출처 원장·freshness. YAML `tokens.source: live-extract` field is provenance 17/29/109/156 only (A1c). Portable Font live-computed row 180 restates computed surface-use, not the YAML key (E2a). `components_harvested: true` provenance 19/29/109/156 only. Token note dual provenance 21 + DESIGN Scope 13 (E2a). Source has no `ds.*` and no `verification_v2`; none invented (provenance 31). Canonical Proof sidecar `web/references/cashapp/.verification.md` exists (provenance Surfaces 54 / Sources 64 / Proof 73–75 / notes 169). Derived mirror `design-md/cashapp/.verification.md` same SHA-256 `b788952ff8ff9f996206eb23f5a6df738c73e44fb0fcdae3c119fd35e0a65288`. Portable DESIGN.md does not re-host the Proof rgb dump (E1). Absence of the sidecar is not the disposition. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. YAML unitless `lineHeight` `1.0` / `1.1` / `1.2` / `1.5` kept as ratios (A1a, Type roles 195/199–205/207). Rem companions 5.40rem / 2.50rem / 1.50rem / 1.00rem / 0.88rem / 0.75rem at 199–205. Primitive types preserved per component: button ×3 (244/270/296), tab ×2 (392/419), card ×2 (345/360), badge (375), avatar (445) (A1b). Default Input YAML type 없음·발명 없음 (329/238 + Named gaps 616). **[SUPERSEDED dest 2026-08-24 wave13 sol resubmit — prior 328/238.]** `#00e013` vs `#d8ff14` vs `#3860be` unmerged (A4, Semantic 91/93/99/101 + Distinctive 38/47 for `#3860be`). `#000000` on-primary vs ink vs Log-in fill unmerged as roles (91). `#ffffff` canvas vs on-dark vs Sign-up-on-dark fill unmerged as roles (91). `#f8f8f8` vs `#f6f6f6` (102/103). `#737373` / `#555555` / `#999999` / `#858585` unmerged (104–107). `#999999` Default Input border is that control’s field (325/330), not muted-soft text. `#f9fffa` tint is Semantic 94. YAML spacing xs 4 / sm 8 / md 12 / base 16 / lg 20 / xl 31 / xxl 48 / section 64 at Spacing 111 + Layout 519; no px suffix added to YAML numbers. YAML `rounded` sm 2 / md 20 / lg 999 / full 9999 vs body `2px` / `20px` / `999px` / `9999px` / `50%` unmerged (119/127). YAML `shadow.none` `none` at Elevation 139. YAML component Use fields 252/278/304/350/365/381/398/424/451 (not 251/349/364/380/399/452). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위 `cash.app` / `cash.app/card` / `design.cash.app`. Dual canvas, Cash Green, Citron, Cash Sans, 999px pills, `box-shadow: none`. Atmosphere extras sit under adjacent complete B2a (15). |
| §1 공식 히스토리·portal quotes | 옮김 → Experience `scope`; 출처 원장 분리 → provenance | Portal-documented quotes remain in Scope 15 / Semantic 93/99 / Family 187. Public-history 2013 / Block / Index Studio under B2a 17. URLs dual as above. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color + Avoid | Full palette including PMS/CMYK/RGB on Cash Green / Black / White / Citron. Unmerged-role limiter precedes the list (91). Citron never-full-background dual Semantic 99 + Avoid 76. |
| §3 Typography Rules | 옮김 → Typography & Assets | Cash Sans; rounded punctuation; Regular/Medium; Helvetica Neue fallback; scale 86/40/24/16/14/12 with rem companions. YAML `use` restored on Type roles 199–205. Nav 16px/600 unmerged from Body 16px/400 and portal-nav 16px/400 (207/427). |
| §4 Component Stylings | 옮김 → Components & States | Sign Up / Log In / Sign Up on Dark / Default Input / Light Feature Card / Dark Tile / Citron Accent Chip / Marketing Nav / Brand-Portal Nav / Account Control. YAML geometry and body geometry kept unmerged (padding YAML `0 20px` vs body `0px 20px` at 249/275/301). Default Input body-only (A3, 318–340). Field-note B2a: 255/281/307/330/353/368/384/401/427/454. YAML Use dests 252/278/304/350/365/381/398/424/451. |
| §4 Verified / Tier 1 / Tier 2 / Conflicts footer | 분리 → provenance | freshness·원장. Live `rgb(0,224,19)` match dual DESIGN Semantic 93 + provenance 44/81/94/101. Canonical sidecar `web/references/cashapp/.verification.md` connected in provenance Proof (E1). |
| §5 Layout Principles | 옮김 → Foundations spacing / shape + Layout & Platforms | YAML scale + body px including 31px; 0px vertical / 20px horizontal / 46px at Spacing 113; 276px hero zone (111/519/521/526/532); 86px portal index; 20px cards. Whitespace philosophy under B2a 530 (limiter precedes the philosophy list). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Table 133–137 under Use limiter 131. `box-shadow: none` 141. Deliberate modern-flat anti-corporate / fast-confident-culturally-current / avoiding-legacy-banking-card-stack restored in the same paragraph under that limiter (A1, B2/B2a). `#00e013` / `#d8ff14` emphasis not a drop shadow (141). **[SUPERSEDED dest 2026-08-24 wave13 sol resubmit — prior disposition omitted the canonical elevation relationship.]** |
| §7 Do's | 옮김 → Experience capture-bound application | Do’s 63–70 under B2a 61. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | Don’ts 76–83 under B2a 74. Last-bullet floods-of-green quote adjacent complete B2a 83. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoint table 536–540 (`<640px` / `640-1024px` / `1024-1440px`) under recorded-span limiter 532. Collapsing / image behavior / touch-target 542–546. Desktop measurements 46px / 276px / 86px are not a cross-viewport specification (532). |
| §9 Agent Prompt Guide | 삭제 (wrappers) + 옮김 (unique tuples) → local recipes | Quick Color Reference / Example Component Prompts wrappers / Iteration Guide deleted (no adapter slot). Unique parent-child tuples restored as White Hero 466–476, Feature Card 478–490 (`#737373` body 16px/400), Dark Section 492–502, Marketing Top Nav 504–514 (right-aligned Sign-up). Dual provenance Omitted §9 138. Verified hexes already in Foundations/Components stay there (A3/A4). |
| §10 Voice & Tone | 옮김 → Content & Locales | Observed verbatim 555–557 under citation-character B2a 553. Derived voice / tone table / forbidden register under B2a 563. §14 strings not extra Observed (559). |
| §11 Brand Narrative | 옮김 → Experience `scope` | 2013 Square Cash / Block / 2024 Index Studio under public-history B2a 17. Refusal/embrace under B2a 19. 연표 URL/press는 provenance Narrative 103/105. |
| §12 Principles | 옮김 → Experience principles | Six stems + UI implication under B2a 52. |
| §13 Personas | 삭제 | Fictional archetypes. Not Audience, not primary tasks, not re-hosted in provenance (D2). Generic deletion only: provenance 146–148. Independently listed primary tasks come from YAML use / live hosts (25–29), not from §13. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: nine rows Empty/Loading/Error/Success/Skeleton/Disabled at 224–234 under table-characterization B2a 222 (limiter precedes the table). Graph 위임 없음. Declared interactive components close Core §4.4 by role. `not captured` is not a `not-applicable` reason (C1, 236). `focus-visible` rows carry no hex (B1, 261/287/313/336/407/433/460). Marketing Nav `#00e013` fill/underline on hover is a captured variant (397/413), not `focus-visible`. Sign Up / Log In / Sign Up on Dark L/E/S omitted (C2, 264/290/316). Default Input error applicable (338) / loading/success omitted (340). Marketing Nav / Brand-Portal Nav / Account Control L/E/S role-based not-applicable (409–411 / 435–437 / 462–464). Light Feature Card / Dark Tile / Citron Accent Chip Kind+map omitted (C4, 238/355/370/386/615). This is not a complete state-coverage claim (C3, 236). |
| §15 Motion & Easing | 옮김 → Foundations motion; 무출처 커브 분리 → provenance omission ledger | Durations 120ms / 220ms / 360ms at DESIGN 149–151 + provenance 122/136. Easing names kept; cubic-bezier values omitted (E2b): provenance 130–134 `ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` / `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` (spec-template match) / `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`. Signature motions + `prefers-reduced-motion: reduce` at DESIGN 165 under B2a 145/163. B3 five-kind gate full text → Foundations Motion 167 only (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Easing names also DESIGN 157–159 + Named gaps 611. §14 extra Named gaps dests 612/614/615. Named gaps 617 is inventory form, not the B3 sentence (E2c). **[SUPERSEDED dest 2026-08-24 wave13 sol resubmit — prior dest omitted 611/612/614.]** |
| HTML comment philosophy-layer / Proof | 분리 → provenance | Proof 73–94 (sidecar + HTML comment). Interpretive-claims note is the source’s own editorial marker; portable B2a sites are listed in provenance Derived inventory 152. Canonical sidecar path restated at provenance 75/169. |

### F1 / F2 (v7 mandatory final passes)

- **F1 B2a scan (worker):** not a current-class completeness claim (E2c). Post-F3 adjacent complete B2a (`derived editorial implementation inference` / `not Cash App-authored or a separately published UI specification`) at Scope 11/13/15/17/19; Primary tasks 25; Audience 34; Distinctive 38; Principles 52; capture-bound Do’s 61; Avoid 74/83; Semantic 91; Spacing 111/113; Shape 119/127; Elevation 131; Motion 145/163; Font 175; Family 189; Type-rule 191; Type-role 195; Assets 211/213; Capture 220/222; field notes 255/281/307/330/353/368/384/401/427/454; captured-variant 413/439; local recipes 468/476/480/490/494/502/506/514; Layout 521/530/532; Content 553/559/563. Left without B2a: catalog identity / homepage URL / YAML tokens / primitive types / B3 167 / C1–C3 236 / Governance controlled copy / Named gaps inventory.
- **F2 E2 grep (post-F3):** values grepped in DESIGN.md + provenance.md + this log. Dual destinations listed above. `tokens.source` YAML key → provenance 17/29/109/156 only. B3 전문 → DESIGN 167 only. `#00e013` Avoid 76 is not a destination (Citron `#d8ff14` is). Personas names/ages/cities/segments → 0 hits in DESIGN.md and provenance.md. YAML Use dests 252/278/304/350/365/381/398/424/451. Canonical sidecar `web/references/cashapp/.verification.md` → provenance 54/64/73/75/169.

`node test-v2/tools/migrate-reference.mjs --brand cashapp --gate-only` → PASS, problems `[]`.
`node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/cashapp/DESIGN.md --check --require-portable-core --json` → exit 0, `portable_core: true`.
Post-F3 SHA-256 `99b0960afde126c010c27a48397eadf0bce37db1cbf33d744b98c7b445856d01`. Command outputs are not catalog adoption (E2c).


## Revision 2026-08-24 (wave13 sol resubmit)

List-only revision against `docs/reviews/t2-1-wave13-2026-08-24-sol-full.md` cashapp conditions 1–4. Rulebook v7. New F3 was not run. Worker-session and post-F3 dest maps above are **[SUPERSEDED dest 2026-08-24 wave13 sol resubmit]**. Not a catalog-adoption claim (E2c).

1. Canonical elevation relationship restored at DESIGN 141 under adjacent complete B2a 131 (modern-flat anti-corporate / fast-confident-culturally-current / avoiding-legacy-banking-card-stack). Not phantom.
2. Canonical §11 evolution restored at Scope 17 (email/text P2P → Card / direct deposit / stocks / bitcoin / tax; redefining money as branchless alternative; 2024 Index Studio infinite-canvas portal / push boundaries / defy conventions). Motion infinite-canvas remains Motion-only.
3. Sidecar-only Proof in provenance: Green CTA live-computed 14.8 px unmerged from YAML/body 14px; Secondary typeface section exists for Display / Novelty / Bespoke (no family name invented); favicon 756-byte 16×16 PNG. Portable DESIGN does not promote 14.8 as a type-role (gate token-invention vs legacy DESIGN.md).
4. Default Input type-none dests 329/238 + Named gaps 616. §15 easing names DESIGN 157–159 + Named gaps 611; omitted curves provenance. §14 extra Named gaps 612/614/615.

F2 greps after this revision:

- anti-corporate elevation relationship → DESIGN 131/141 (also atmosphere 15). Not audit phantom current-class.
- redefining money (evolution) → Scope 17 + provenance Narrative
- Secondary typeface section → DESIGN 179 + provenance Proof
- sidecar 14.8 px (space-separated so gate token-invention does not treat it as a new `px` token) → provenance Proof. YAML/body 14px stays on components.
- 756 bytes favicon → provenance Proof
- Default Input YAML type none → DESIGN 329/238 + Named gaps 616
- ease-enter / ease-exit / ease-standard names → DESIGN 157–159 + Named gaps 611. Omitted curves → provenance. B3 전문 → Motion 167. Named gaps 617 is inventory form.
- §14 Named gaps hover/pressed/focus-visible → 612; L/E/S treatments → 614; C4 cards/chip → 615

Post-revision DESIGN SHA-256 `3871ca7f8067f32a2e0e8d376aa5f8e59f849ca25932872e7baa264f21659ca4`. `--gate-only` PASS, problems []. Core `portable_core: true`. F3 was not re-run. Not a catalog-adoption claim (E2c).


## Revision 2026-08-24 (wave13 ledger sync)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave13-2026-08-24-sol-recheck.md` cashapp condition 3. DESIGN.md not edited. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed. Provenance current rows that omitted the extra Named-gaps dests from Revision 2026-08-24 (wave13 sol resubmit) are **[SUPERSEDED dest 2026-08-24 wave13 ledger sync]**. Migration-log F2 dests 616/611/612/614/615 were already recorded; provenance current rows now match.

| Source-row | Provenance current dests (this revision) |
|---|---|
| Default Input YAML type none | DESIGN 329 / Capture-record 238 / Named gaps 616 |
| §15 easing names | DESIGN 157–159 + Named gaps 611 (curves remain provenance omission ledger) |
| §14 extra Named gaps | hover/pressed/focus-visible 612; L/E/S treatments 614; C4 cards/chip 615 |

### F2 (this revision; value + field/role context)

- Default Input Type none → 329/238/616 (all three files)
- ease-enter / ease-exit / ease-standard names → DESIGN 157–159 + Named gaps 611
- §14 Named gaps 612/614/615 → provenance claim ledger + Proof notes 170–173
- B3 전문 → Motion 167. Named gaps 617 is inventory form

SHA-256 `3871ca7f8067f32a2e0e8d376aa5f8e59f849ca25932872e7baa264f21659ca4` unchanged (DESIGN.md not edited). This log does not claim F2 completeness beyond those greps, and does not re-assert F1/F2/F3 compliance as closed (E2c). Not a catalog-adoption claim (E2c). F3 was not re-run.
