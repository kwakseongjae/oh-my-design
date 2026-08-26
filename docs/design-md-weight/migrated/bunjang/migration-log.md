# Bunjang migration log

Source: `web/references/bunjang/DESIGN.md`
Destination: `docs/design-md-weight/migrated/bunjang/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/bunjang/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: `node test-v2/tools/migrate-reference.mjs --brand bunjang --gate-only` → PASS, problems `[]`. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/bunjang/DESIGN.md --check --require-portable-core --json` → exit 0, `portable_core: true`. Not a catalog-adoption claim (E2c).
F3 ran 2026-08-24 (fresh session, grok-4.6). Worker F1/F2 completeness is not a current-class claim (E2c).

Source format: 13-section variant (no §14 States, no §15 Motion). Mapping is by meaning, not by re-bundling legacy sections as Portable Core MUST.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, display_name_kr, country, category, homepage, primary_color, logo) | 분리 → provenance; `번개장터` / homepage / `primary_color` / favicon 옮김 → Experience / Foundations / Assets | Portable file has no frontmatter. H1 is `Bunjang Design System`. `display_name_kr` `번개장터` dual provenance 11/30 + DESIGN Scope 9 (E2a). Catalog homepage exact `https://m.bunjang.co.kr` (no slash) dual DESIGN Scope 9 and 11 + provenance identity 14 / 26 (E2a). Footer URL `https://m.bunjang.co.kr/` (slash) dual DESIGN Scope 11 + provenance identity 26 / Surfaces 47–48 / Sources 54 / Tier 1 64 (E2a). Catalog `primary_color` `#d80c18` dual provenance 15/22/28/41 + DESIGN Scope 13/15, Distinctive 36/38/44, Principles 50/58, Avoid 69, Semantic 86/88/106, Primary CTA 223/232, Safe-chip field note 323, Heart 365/370/381 (E2a). Favicon URL `https://static.bunjang.co.kr/web/ui/favicon.ico` dual DESIGN Assets 192 + provenance identity 16/24 (E2a). `country` / `category` provenance 12–13 only. |
| YAML `omd`, `verified`, `tokens.source` / `extracted` / `note`, `components_harvested` | 분리 → provenance; token note 옮김 → Experience `scope` | 출처 원장·freshness. YAML `tokens.source: prose-derived` field is provenance 18/30/121/179 only (A1c). Portable Scope 13 and provenance Claim ledger 101 wording `Token extraction is prose-derived` are not the YAML key (E2a). `components_harvested: true` provenance 20/30/101/120 only. Token note dual provenance 22 + DESIGN Scope 13 (E2a). Source has no `ds.*` and no `verification_v2`; none invented (provenance 30). |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. YAML unitless `lineHeight` `1.2` kept as ratio (A1a, Type roles 177/181–184/186–188). YAML search `lineHeight` `18` and body `18px` unmerged from `1.2` and from body `normal` (177/185/280). Primitive types preserved per component: button ×2 (221/248), input (274), card (299), badge ×3 (315/330/345), toggle (361) (A1b). `#d80c18` primary / red-500 / error share the hex and are not merged into one role (A4, Semantic 86/88). `#c00b15` interpolated, not observed hover paint (B1, DESIGN 13/86/88–89/205/213/230/232/237/488 + provenance 41/122). `#4c4c4c` is secondary-button text, not Gray-900 (86/94/251/259). Card-title `#666` / `#666666` and meta `#999` / `#999999` stay local writings (15/53/61/86/95/98/186/188/303/308). Partner `#000000` is not Gray-900 (118). Overlay `rgba(0,0,0,0.3)` and 10% heart-inner are not `box-shadow` on sampled elements (136/146). YAML spacing xs 4 / sm 8 / md 16 / base 16 / lg 24 / xl 32 / xxl 48 / section 64 at Spacing 122 + Layout 401; YAML lg 24 is not given a px suffix. YAML `rounded` sm 4 / md 6 / lg 20 / full 999 vs body `4px` / `6px` / `20px` / `999px` unmerged (130/132). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위 `m.bunjang.co.kr`, 390px, 81:100, Pretendard Variable 211/211, red scarcity, borders-and-tints, app-install rail. Product-kind C2C / flea-market and visual-character readings sit under adjacent complete B2a (11/15). Atmosphere fictional demographics deleted from portable and provenance (D2, provenance 97/174). |
| §1 공식 비교(Karrot) / “Bun UI” / 퍼블릭 DS 부재 | 옮김 → Experience `scope` (Bun UI) + Content (Karrot); 조회 URL 분리 → provenance Tier 1 | Bun UI prefix / vanilla-extract names dual Scope 17 + provenance Narrative 93 (E2a). Public lookup host/status ledger provenance 72–80 only. Portable Scope 17 restates the standalone conclusion and authority boundary (DS exists internally; public Storybook / npm / documentation / GitHub artifacts do not). Individual hosts are not in portable Scope. Karrot comparison is Content 450 under adjacent complete B2a, not a first-party manifesto. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color + Avoid | Full gray ladder, red/green/blue/yellow/care/safe stops, partner `--color-brand-*`. Unmerged-role limiter precedes the list (86). `#c00b15` kept with interpolated/not-observed source sentence (88–89). Partner fills not Bunjang chrome (118 + Avoid 74). |
| §3 Typography | 옮김 → Typography & Assets | Pretendard Variable; 400/500/700; scale 20/18/16/15/14/13/12; `normal` vs YAML `1.2` vs search `18`/`18px` unmerged (177). Tracking `normal`. No second family. Font table is live computed use only (164): Pretendard Variable, fallback `sans-serif`, Bunjang CDN self-host, 211/211. Font evidence-class B2a 160 names those four readings only. Family 168/171/173. Official-distributed / exclusive-negative / exact-woff2 / Official-product-use-as-DS-lookup / Declared-only / Unresolved-woff2 are absent. |
| §4 Iconography & Imagery | 옮김 → Typography & Assets + Heart + Product Card | Logo SVG URL dual Assets 193 + provenance 24/94 (E2a). Path-only `assets/_reference/logo-icon.svg` is provenance 63, not the URL. IP not-for-downstream-use dual Assets 193 + provenance 94. Thumb 81/100, `media.bunjang.co.kr` crop, 20×20 icons `#191919`/`#8c8c8c`. Photo-aesthetic reading adjacent complete B2a (198). Empty-state cartoons absence is source-stated (196/205). |
| §5 Spacing, Radius & Elevation | 옮김 → Foundations spacing / shape / elevation | Observed padding `12px 20px` / `8px 12px` / `16px 20px` / `20px 132px 40px`; ~24-32px / ~12-16px kept as range writings (124). Radius 4/6/20/999px + 22px logo. Elevation table Use limiter precedes the table (138–146). No box-shadow on sampled elements. |
| §6 Layout & Grid | 옮김 → Layout & Platforms | `--layout-width-*` 480px / 640px / 1240px / 100vw; 390px canonical; drawer 480px; 2-col / 4-col; safe-area `--bun-ui-sa*`. Token-not-complete-breakpoint adjacent complete B2a precedes measurements (403). Measurements 405. |
| §7 z-index Tokens | 옮김 → Layout & Platforms | sticky/footer 100, header 200, widget 500, drawer-dim 900, drawer 1000, popup-dim 1100, popup 1200, snackbar 1500 (407). Snackbar-over-modal reading adjacent complete B2a (409). |
| §8 Components — atomic anatomy | 옮김 → Components & States | Primary CTA, Secondary CTA, Search input, Product Card, three chips, Heart, Header parent, App-Download Top Banner parent. Button family cardinality restored as observed-technical: three variants × four sizes `_variant-{normal|primary|…}` × `_size-{XS|M|XL}` × `_full`; known named `normal` (secondary), `primary`; sizes XS, M, XL; `_full` (Capture 207, Primary Use 229, Secondary Use 256; dual provenance Capture selectors 111). Third variant name not invented. YAML geometry and body geometry kept unmerged (Primary radius 6px vs XS 4px, 226–232). Header/Banner type and kind not invented (C4, 215/388/396). Product Card / chips Kind+map omitted (C4, 215/310/325/340/355). Field-note B2a: Primary 232, Secondary 259, Search 285, Card 308, chips 323/338/353, Heart 370, Header 388, Banner 396. |
| §9 Microcopy & Voice | 옮김 → Content & Locales | Source marks analysis-only / do not transplant verbatim. Observed strings 420–426 under citation-character B2a 418. Analysis-only heading B2a 414. Derived voice / five principles 430–448 under adjacent complete B2a 430. Karrot 450 under adjacent complete B2a. Not Observed-class. |
| §10 Patterns & Anti-Patterns | 옮김 → Experience principles / Avoid | Five numbered items + UI implication under B2a 48. Anti-patterns in Avoid 67–76. Governance 통제 문구에 넣지 않음. |
| §11 Brand Voice Summary | 옮김 → Content derived voice (Karrot / velocity / unsentimental) | Karrot comparison adjacent complete B2a at Content 450. Not a first-party manifesto. Listing-volume metric not promoted as a verified company fact. |
| §12 When to draw inspiration | 삭제 | 도구/영감 사용 안내. C2C/scanning/one-CTA 제약은 이미 Experience principles/Avoid/Layout에 있음. 슬롯 없는 위임 없음. Provenance omission 176. |
| §13 Do's and Don'ts | 옮김 → Experience capture-bound application + Avoid | Do’s 56–63. Don’ts 67–76. Last-bullet partner+snackbar pairing adjacent complete B2a 76. |
| Personas / §13 archetypes | 삭제 | Source has no Personas section. Atmosphere fictional demographics not copied into Audience, Primary tasks, or provenance labels (D2, provenance 97/175). Independently listed primary tasks come from captured controls (23–27), not from atmosphere prose. |
| States (§14 equivalent) | 없음 → Capture record + per-component applicability | Source has no States section (205). Graph 위임 없음. Declared interactive components close Core §4.4 by role. `not captured` is not a `not-applicable` reason (C1, 213). `#c00b15` not on a `focus-visible` row (B1, 90/213). Primary CTA L/E/S `not-applicable` by app-install/start-in-app handoff meaning (C2, 240–242). Secondary / Search / Heart L/E/S omitted at the field boundary (C2, 268/294/379). Product Card / chips / Header / Banner Kind+map omitted (C4, 215/310/325/340/355/388/396). This is not a complete state-coverage claim (C3, 213). |
| Motion (§15 equivalent) | 없음 → Foundations motion | Source has no motion duration, easing, animation name, transition property, or reduced-motion behavior. No cubic-bezier to omit (provenance 177). Foundations Motion 152 states the B3 five-kind gate (transition properties · animation name · duration · easing · reduced-motion behavior, per-component computed observation; official documentation of a single curve or duration is not that gate). Named gaps 491 is shortened, not the B3 전문 (E2c). |
| Footer **Verified** / Tier 1 / Tier 2 / IP guardrails | 분리 → provenance; live URL 옮김 → Experience `scope` | Verified 2026-05-14 freshness provenance 35–38. 73 custom properties and 9 raw_samples are provenance 60/62 only. 211/211 dual DESIGN Scope 15 / Font 160/164 + provenance 61/66 (E2a). `--remote-allow-origins` cause detail is provenance 58 (`suppress_origin=True` to bypass `--remote-allow-origins` block). Public lookup host/status ledger provenance 72–80 only. Tier 2 getdesign.md / refero provenance 86–88 only. IP guardrails dual Assets 193 + provenance 94. |

### F1 / F2 (v7 mandatory final passes)

- **F1 B2a scan (worker):** SUPERSEDED dest 2026-08-24 F3. **[SUPERSEDED current-class 2026-08-24 wave12 sol resubmit — F3 Font extras / Family 175/177 / Type-role 181 / Assets 202 / Capture 211 / field-note dests / Layout 405/411 / Content 416/420/432/452 are not current. See Revision 2026-08-24 (wave12 sol resubmit).]**
- **F2 E2 grep (worker):** SUPERSEDED dest 2026-08-24 F3. **[SUPERSEDED current-class 2026-08-24 wave12 sol resubmit — F3 `#d80c18` Primary 225/234 Heart 367/372/383, favicon 196, logo-icon 197, Font 160/165, Named gaps 493, `tokens.source` 178 are not current dests.]**

### Revision 2026-08-24 (F3 audit)

Auditor grok-4.6, fresh session. B2a·E2 only. Token values, component tables, state applicability, and section structure unchanged. See `audit-log.md`.

F1 inventory after this scan: Scope 11/13/15/17; Primary tasks 23; Audience 32; Distinctive 36; Principles 48; capture-bound Do’s 56; Avoid 67/76; Semantic 86/99/102/108/114/116/118; Spacing 126; Shape 132; Elevation Use 138 / philosophy 148; Font 160; Family 175/177; Type-role 181; Assets 202; Capture 211; field notes 234/261/287/310/325/340/355/372/390/398; Heart tapped 383; Layout 405/411; Content 416/420/432/452. **[SUPERSEDED current-class dest map 2026-08-24 wave12 sol resubmit — Font no-published-documentation-site / exact-woff2 / Official-distributed; Family 175/177; Type-role 181; Assets 202; Capture 211; field notes 234…; Layout 405/411; Content 416… are not current.]**

F2 greps after this scan: homepage no-slash DESIGN 9/11 + provenance 14/26; slash DESIGN 11 + provenance 26/47–48/54/64; `#d80c18` DESIGN 13/15/36/38/44/50/58/69/86/88/106/225/234/325/367/372/383 + provenance 15/22/28/41; `#c00b15` DESIGN 13/86/88–89/209/215/232/234/239/490 + provenance 41/122; favicon DESIGN 196 + provenance 16/24; logo-icon URL DESIGN 197 + provenance 24/94 (not 63); `tokens.source` YAML key provenance 18/30/121/178; B3 전문 DESIGN 152; Named gaps 493 is not that sentence. **[SUPERSEDED current-class dest map 2026-08-24 wave12 sol resubmit.]**

SHA-256 (DESIGN.md, this worker pass): `1548726bd01a367066b3a8986c42fa5aa4874bf9c8978a1de742d0f534e72b0b` — SUPERSEDED dest 2026-08-24 F3.

Post-F3 DESIGN SHA-256 `fecb6b1792e18e985d65ea905da9ee11a74a243e5d137f03209375697b75bcb3`. `--gate-only` PASS, problems []. Core `portable_core: true`. Not a catalog-adoption claim (E2c). **[SUPERSEDED as current-file SHA 2026-08-24 wave12 sol resubmit.]**

## Revision 2026-08-24 (wave12 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source FAIL: `docs/reviews/t2-1-wave12-2026-08-24-sol-full.md` §3 bunjang. New F3 not required. F3 was not re-run. This revision does not claim F1/F2/F3 completeness stronger than the greps below (E2c). Gate/Core outputs are not a catalog-adoption claim (E2c).

| Item | Correction (grep after body edits) |
|---|---|
| 1. Button family cardinality | Restored observed class-family: three variants × four sizes `_variant-{normal|primary|…}` × `_size-{XS|M|XL}` × `_full`. Known named: `normal` (secondary), `primary`; sizes XS, M, XL; `_full`. Capture 207, Primary Use 229, Secondary Use 256, provenance Capture selectors 111. Third variant name not invented. |
| 2. Font evidence | Font table is live computed use only (164): Pretendard Variable, fallback `sans-serif`, Bunjang CDN self-host, 211/211. Family current visible UI family 168 kept. Font B2a 160 names live-211/211 / CDN-self-host / only-observed-family / fallback-not-substitute. Deleted Official-distributed, exclusive-negative, exact `.woff2` coverage/Named gap, Official-product-use-as-DS-lookup, Declared-only, Unresolved-woff2. Those strings are absent from current DESIGN.md. |
| 3. Provenance / Scope boundary | Restored `--remote-allow-origins` cause at provenance 58. Portable Scope 17 restates standalone conclusion + authority boundary only. Individual lookup host/status ledger is provenance 72–80, not portable Scope. |
| 4. Ledgers | Source-row dests in the table above rewritten to current lines. F3 Font extras / lookup-host restatement / woff2 Named gap / dest maps / post-F3 SHA superseded as current-class. |

### F1 (new/changed B2a sites; this resubmit)

Changed: Scope 17 (DS-exists-internally-public-artifacts-do-not; no individual lookup hosts); Font 160 (live computed / CDN self-host / only-observed-family / fallback-not-substitute; Official-distributed / exclusive-negative / exact-woff2 / no-published-documentation-site not current).
Unchanged sites: Scope 11/13/15; Primary tasks 23; Audience 32; Distinctive 36; Principles 48; capture-bound Do’s 56; Avoid 67/76; Semantic 86/99/102/108/114/116/118; Spacing 126; Shape 132; Elevation Use 138 / philosophy 148; Family 171/173; Type-role 177; Assets 198; Capture 209; field notes 232/259/285/308/323/338/353/370/388/396; Heart tapped 381; Layout 403/409; Content 414/418/430/450.
Left without B2a: catalog identity / homepage URL / YAML tokens / primitive types / button-family cardinality 207/229/256 (observed-technical) / 211/211 / B3 152 / C1–C3 211–215 / Governance / Named gaps.

### F2 (changed values; grepped)

- three variants × four sizes / `_variant-{normal|primary|…}` / `_size-{XS|M|XL}` / `_full` → Capture 207, Primary Use 229, Secondary Use 256, provenance 111
- Live computed surface-use / Pretendard Variable / `sans-serif` / Bunjang CDN → Font 164 + Family 168
- `Official distributed` / `Not a Bunjang-exclusive` / `.woff2` / `Official product-use` / `Declared-only` / `Unresolved claim` → 0 hits in DESIGN.md
- `design.bunjang.co.kr` / `bun-ui.bunjang.co.kr` / `tech.bunjang.co.kr` / `brand.bunjang.co.kr` / `company.bunjang.co.kr` / `blog.bunjang.co.kr` / DNS 000 → provenance 72–77 only, 0 hits in DESIGN.md
- `--remote-allow-origins` → provenance 58
- `#d80c18` → DESIGN 13/15/36/38/44/50/58/69/86/88/106/223/232/323/365/370/381 + provenance 15/22/28/41
- `#c00b15` → DESIGN 13/86/88–89/205/213/230/232/237/488 + provenance 41/122
- favicon → DESIGN 192 + provenance 16/24
- logo-icon URL → DESIGN 193 + provenance 24/94 (path-only 63 is not the URL)
- 211/211 → DESIGN Scope 15 / Font 160/164 + provenance 61/66
- `tokens.source` YAML key → provenance 18/30/121/179
- Type: button 221/248; input 274; card 299; badge 315/330/345; toggle 361
- C2 omit L/E/S → Secondary 268, Search 294, Heart 379; Primary not-applicable 240–242
- C4 omit kind/map → 215/310/325/340/355/388/396
- YAML `lineHeight` 1.2 / 18 / `18px` → Type roles 177/181–188 + Search 280
- B3 five-kind gate full text → Foundations Motion 152 only (not Named gaps 491)
- Observed strings → Content 420–426
- Karrot → Content 450
- Layout B2a / measurements / z-index → 403/405/407/409

`node test-v2/tools/migrate-reference.mjs --brand bunjang --gate-only` → PASS, problems `[]`.
`node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/bunjang/DESIGN.md --check --require-portable-core --json` → exit 0, `portable_core: true`.
SHA-256 `1ad844e1e575ca33779d1e0644f05cc5584a9633aaae8f1cf338c0819c41f089`. Post-F3 SHA `fecb6b1792e18e985d65ea905da9ee11a74a243e5d137f03209375697b75bcb3` superseded as current-file SHA. Command outputs are not catalog adoption (E2c). New F3 not required. F3 was not re-run.

