# Brandi migration log

Rulebook: **v7** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Source: `web/references/brandi/DESIGN.md`
Destination: `docs/design-md-weight/migrated/brandi/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/brandi/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; 이름·홈페이지는 본문에도 | Portable file has no frontmatter. Name kept as H1 `Brandi Design System`. Homepage `https://www.brandi.co.kr` dual Experience Scope DESIGN.md:9,11 + provenance.md Identity 13,25 / Surfaces 45 / Sources 53 / Tier 1 61 (E2a). Product URLs `https://www.brandi.co.kr/products/106329458` and `https://www.brandi.co.kr/products/125381184` dual DESIGN.md:11 + provenance.md Identity 25 / Surfaces 46–47 / Sources 54–55 / Tier 1 62–63 (E2a). Catalog `primary_color` `#1e1e1e` dual provenance.md:14,21,39,132 + DESIGN.md:13,38,41,50,52,78,82,182,189,212 (E2a). Avoid does not contain this hex. Google s2 favicon URL `https://www.google.com/s2/favicons?domain=brandi.co.kr&sz=128` provenance.md:15,23 only; portable Assets DESIGN.md:160 is URL-free identity-boundary. |
| YAML `omd`, `verified`, `added`, `verification_v2`, token claims, `tokens.source` / `extracted` / `components_harvested` | 분리 → provenance | 출처 원장·freshness·Proof. `tokens.source: reconciled` provenance.md:17,21,104,120 (A1c). Claim ledger provenance.md:78–102. |
| YAML `tokens.colors` | 옮김 → Foundations semantic color | Semantic list DESIGN.md:80–89. Dual hex dests (E2a) include provenance.md:39 (pair ledger) and provenance.md:132 (`#1e1e1e` / `#00c73c` / `#e6e6e6`) / :149 (B2a inventory hex names), not portable Foundations only. Portable: `#ffffff` DESIGN.md:38,40,42,78,80,84,183,189,206,212,228,235,252 + provenance.md:39; `#202429` DESIGN.md:13,38,40,81,229,242,253 + provenance.md:149; `#ff365d` DESIGN.md:11,13,38,43,62,65,78,85,189,212 + provenance.md:39,149; `#1e1e1e` DESIGN.md:13,38,41,50,52,78,82,182,189,212 + provenance.md:14,21,39,132,149; `#00c73c` DESIGN.md:13,38,41,50,53,78,83,189,205,212 + provenance.md:39,132,149; `#e6e6e6` DESIGN.md:38,78,86,230,235,254,260 + provenance.md:39,132; `#e1e1e1` DESIGN.md:38,78,87,235,242 + provenance.md:39; `#ebeef2` DESIGN.md:38,78,88,267,274 + provenance.md:39; `#808893` DESIGN.md:38,78,89,268,274 + provenance.md:39. Same-hex canvas/on-action unmerged. `#ff204b` omitted as current token and kept as hex in Avoid DESIGN.md:62,64 / Foundations DESIGN.md:91 / Named gaps DESIGN.md:330 / provenance.md:149 (E2a). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Dual hex hits listed DESIGN.md only and omitted provenance.md:39,132,149; prior `#ffffff` 254, `#202429` 255, `#e6e6e6` 256/262, `#ebeef2` 270/277, `#808893` 271/277, `#ff204b` Named gaps 333.]** |
| YAML `tokens.typography` (family.ui, product-action / option / badge metrics, unitless lineHeight `1.0`) | 옮김 → Typography & Assets | Family DESIGN.md:137–143. Type roles DESIGN.md:148,152–154 keep unitless `1.0` (A1a). Body `normal` is size-local observation, not a replacement. YAML `use` strings kept in the same table. |
| YAML `tokens.spacing` (unitless 4 / 18 / 16 / 8 / 2 / 3) | 옮김 → Foundations Spacing + Layout | DESIGN.md:95,279. No px suffix added to YAML numbers. Harvested `18px 4px` DESIGN.md:97,185,208,274,281; option-listbox item 16px DESIGN.md:97,258,260,281; badge `2px 8px 3px` DESIGN.md:97,270,274,281. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Layout 282; prior `18px 4px` 277/284; prior 16px 260/262/284; prior badge padding 273/277/284.]** |
| YAML `tokens.rounded` (unitless 6 ×4) | 옮김 → Foundations Shape + Components | YAML 6 at DESIGN.md:101,103,108. Body `6px` on recorded controls. Listbox `0px 0px 6px 6px` unmerged DESIGN.md:38,44,103,106,255,260. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior YAML 6 dest 251 (deleted omitted-as-value Type field); prior listbox radius 257/262.]** |
| YAML `tokens.components.product-badge` (`type: badge`) | 옮김 → Components Product detail badge | Type: badge DESIGN.md:265 (A1b). Capture-record prose `type: badge` DESIGN.md:175. Anatomy DESIGN.md:262–274. Kind field is absent on this badge (C4 field omission). Kind/map-unconfirmed is prose only: Capture record DESIGN.md:175; badge field note DESIGN.md:274; Named gaps DESIGN.md:335. Listbox has no Type/Kind fields; YAML-no-primitive-type / no-interactive-kind / no-§4.4-map is prose at Capture record DESIGN.md:175, listbox field note DESIGN.md:260, Named gaps DESIGN.md:335. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Type: badge 267; prior anatomy 263–277; prior Kind omitted-as-value fields 252/268; Named gaps C4 dest omitted.]** |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | Product/surface range DESIGN.md:9–17. Atmosphere/action-ranking under adjacent B2a DESIGN.md:13. Distinctive list DESIGN.md:38–46. Legal-context Newnex also DESIGN.md:19. |
| §1 desktop-only / app·marketing·documentation·account-area bound | 옮김 → Experience Scope | DESIGN.md:17. Named gaps DESIGN.md:340. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Named gaps 343.]** |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | DESIGN.md:76–91. Partner `#00c73c` remains route-local. Promo `#ff365d` remains home-slider-only. Hex dual dests are in the YAML `tokens.colors` row (E2a). |
| §3 Typography Rules (evidence classes + observed hierarchy) | 옮김 → Typography & Assets | Font evidence table DESIGN.md:126–133. Noto/Spoqa/Pretendard/Arial resolutions preserved. Noto and Spoqa licence URLs: provenance.md:56–57,64–65 (this ledger); portable Font evidence DESIGN.md:126,130,131 and Assets DESIGN.md:162 restate the licence boundary without those URLs (E2a). Font boundary also Named gaps DESIGN.md:331 (Pretendard as a Brandi UI-family token; Arial as a Brandi font claim). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — Named gaps font dest omitted.]** |
| §4 Component Stylings | 옮김 → Components & States | Direct purchase DESIGN.md:176–198; Partner purchase DESIGN.md:200–221; Product option select DESIGN.md:223–246; Product option listbox DESIGN.md:248–260; Product detail badge DESIGN.md:262–274. Capture selectors dual DESIGN.md Use/Expanded 187,210,233,258,272 + Primary tasks `.btn-buy`/`.btn-n-buy` 28,29 + provenance.md:110–115 (E2a). YAML primitive `type` is recorded only as Type: badge DESIGN.md:265; none invented for purchase links or the option select. Listbox has no Type/Kind fields (C4); prose DESIGN.md:175,260 + Named gaps DESIGN.md:335. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior listbox 248–262 / badge 263–277; prior Expanded/Use 260,275.]** |
| §4 option “No hover, focus, pressed, validation, or selected-option styling is specified.” | 옮김 → Components capture record | DESIGN.md:171. Also Named gaps DESIGN.md:332. Visual treatments omitted; not used as `not-applicable` grounds. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Named gaps 335.]** |
| §5 Layout Principles | 옮김 → Layout & Platforms | 1440×900, recorded paddings only, DESIGN.md:279–281. Product grid / page container / sticky / mobile layout / checkout funnel omitted without a captured selector. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior 282–284.]** |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `box-shadow: none` on representative purchase links, select trigger, listbox, and badge DESIGN.md:112 only. No shadow scale or image overlay. |
| §7 Do's | 옮김 → Experience principles | Capture-bound application DESIGN.md:50–58. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | DESIGN.md:62–70. `#ff204b` hex preserved at DESIGN.md:62,64 (also Foundations 91 / Named gaps 330 / provenance.md:149). Last-bullet B2a DESIGN.md:70. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Named gaps 333.]** |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | DESIGN.md:283. Desktop-capture measurements, not a cross-viewport specification. Named gaps DESIGN.md:339 (breakpoints, touch-target requirements, sticky behavior, product-grid columns, mobile navigation, page container, and checkout funnel). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior dest 286 only; Named gaps dest omitted.]** |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. 검증된 `#1e1e1e` / `#00c73c` / `#e6e6e6`, 17px/500 Noto, 13px Spoqa, 6px, `18px 4px`는 이미 Foundations/Components/Experience에 있음. 슬롯 없는 위임 없음. Prompt 원문은 provenance.md:130–132에 삭제 disposition으로만 기록. |
| §10 Voice & Tone | 옮김 → Content & Locales; `[FILL IN]`은 분리 → provenance | Voice bound DESIGN.md:288. Site-title string also DESIGN.md:9,290. Placeholder quoted in provenance.md:142. Named gaps DESIGN.md:328 (first-party editorial voice principles or source-backed microcopy). No synthetic voice samples. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Voice 291 / site-title 293; Named gaps voice dest omitted.]** |
| §11 Brand Narrative | 옮김 → Experience `scope` + Content; `[FILL IN]`은 분리 → provenance | Site title DESIGN.md:9,288,290. Newnex/payment-intermediation DESIGN.md:19,290. Broader origin/mission/rebrand omitted. Placeholder provenance.md:143. Named gaps DESIGN.md:327. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior site title 291/293, Newnex 293, Named gaps 330.]** |
| §12 Principles | 옮김 → Experience principles (official principles 부재를 보존); `[FILL IN]`은 분리 → provenance | DESIGN.md:50 states official principles are not presented and names the capture-bound §7/§16 Do’s under adjacent complete B2a. Do bullets DESIGN.md:52–58. Placeholder provenance.md:144. Named gaps DESIGN.md:326. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Named gaps 329.]** |
| §13 Personas | 삭제 (값 없음). sidecar 재수록 없음 | Source is `[FILL IN: first-party, source-backed stakeholder groups or research. No synthetic personas are included.]` Audience DESIGN.md:34 promotes no individual personas. Placeholder provenance.md:136,145. Named gaps DESIGN.md:329 (first-party, source-backed stakeholder groups or research). D2: no names, biographies, or segment labels in provenance. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — Named gaps stakeholder dest omitted.]** |
| §14 States | 옮김 → Components & States capture record + per-component applicability | Capture record DESIGN.md:169–175 preserves expanded/listbox and disabled-option observations; empty/loading/error/success/cart/wish/sold-out/validation remain unspecified DESIGN.md:171. Named gaps DESIGN.md:333 (empty, loading, error, success, cart, wish, sold-out, and validation visual treatments) and DESIGN.md:334 (Direct purchase, Partner purchase, and Product option select loading·error·success applicability). Declared interactive components close default/hover/focus-visible/disabled by meaning (tables DESIGN.md:191–196, 214–219, 237–242). Direct purchase / Partner purchase / Product option select omit loading·error·success (C2) DESIGN.md:198,221,244. Listbox and badge have no Kind fields and no §4.4 maps (C4 field omission); prose DESIGN.md:175,260,274 + Named gaps DESIGN.md:335. Graph 위임 없음. State coverage is not claimed complete DESIGN.md:173. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — Named gaps empty/loading dests omitted; prior Kind omitted-as-value fields 252/268.]** |
| §15 Motion & Easing | 옮김 → Foundations motion | No duration/easing/transition/reduced-motion captured DESIGN.md:116. B3 five-kind per-component computed gate is DESIGN.md:118 (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps DESIGN.md:338 is inventory form, not that full gate sentence (E2c). No unattributed cubic-bezier to delete; none stored in provenance.md:127–128. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Named gaps 341.]** |
| §16 Do's and Don'ts (Summary) | 옮김 → Experience principles / avoid | Route/selector reuse and provenance-separation DESIGN.md:57–58. Declared-only/old-token DESIGN.md:69. Checkout/account/marketing/documentation/mobile invention DESIGN.md:70 (last-bullet adjacent complete B2a). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | Freshness provenance.md:27–37. Tier 1 provenance.md:59–65. Tier 2 provenance.md:67–72. Conflicts none provenance.md:39,104,119. |

## F1 / F2

Worker F1 (B2a scan) and F2 (E2 dest grep) were recorded before submit. Post-F3 dests in the F3 revision below are SUPERSEDED dest 2026-08-24 wave12 sol resubmit where they omitted provenance color hits, Named gaps dual dests, and listed omitted-as-value Type/Kind fields. Current dests are this table plus Revision 2026-08-24 (wave12 sol resubmit). This log does not claim F1/F2/F3 closed and does not claim that no unqualified sentence remains (E2c).

## Notes (rulebook, not extra dest claims)

- A1a: YAML unitless lineHeight `1.0` remains `1.0` in DESIGN.md:148,152–154.
- A1b: verified `type: badge` remains Type: badge at DESIGN.md:265.
- A1c: `tokens.source: reconciled` remains in provenance.md:17,21,104,120.
- B1: no generic Focus colour was copied onto a `focus-visible` row.
- B2a: adjacent complete limiter form is the portable sentences at the lines in provenance.md:149 after F3 expansion plus listbox/badge field-note C4 extras at DESIGN.md:260,274; Governance Authority is not treated as a substitute.
- C1: `not captured` / `not named` is not used as a `not-applicable` reason.
- C2: loading/error/success are omitted on Direct purchase, Partner purchase, and Product option select rather than closed from the nouns “link” or “select”.
- C3: DESIGN.md:173 states this is not a complete state-coverage claim.
- C4: Product option listbox and Product detail badge have no Kind fields and no §4.4 maps. Listbox has no Type field. Kind/map-unconfirmed is prose only (DESIGN.md:175,260,274; Named gaps 335).
- D1: portable negatives reuse source vocabulary (app, marketing, documentation, account-area, checkout, mobile, breakpoints, sticky, product-grid).
- D2: no fictional persona labels in provenance.md.
- E2a: dual destinations are listed above where a value lives in both files, including provenance color hits and Named gaps restatements.
- E2c: “B3 five-kind gate” refers only to DESIGN.md:118, not to Named gaps DESIGN.md:338.

## Revision 2026-08-24 (F3 B2a·E2 audit)

Fresh-session auditor grepped dests against the three files after B2a limiter expansions. Worker SHA is withdrawn as current-class. Post-F3 SHA and then-current F2 dests are SUPERSEDED dest 2026-08-24 wave12 sol resubmit where they were stronger than the actual dest map (missing provenance color hits and Named gaps dual dests; listing omitted-as-value Type/Kind fields). No “no unqualified sentence remains” claim (E2c). Not a catalog-adoption claim. F3 was not re-run.

## Revision 2026-08-24 (wave12 sol resubmit)

Source remainder: `docs/reviews/t2-1-wave12-2026-08-24-sol-full.md` §2 brandi. Rulebook v7 C4 / E2 / E2a / E2c / F2. New F3 not required and was not re-run. This revision does not re-assert F1/F2/F3 compliance as closed (E2c). Gate/Core outputs are not a catalog-adoption claim (E2c).

Portable DESIGN SHA-256 `6debdbbc8cd32af5ea9121a4f20beabfe74111a3a41873e40fefdbfec5dcf32f`. `node test-v2/tools/migrate-reference.mjs --brand brandi --gate-only` → PASS, problems []. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/brandi/DESIGN.md --check --require-portable-core --json` → exit 0 / `portable_core: true`. Post-F3 SHA `f0d0ff42822760644aa7f4c2587ce7cd2e6185be6d68e0cbd911a7fa952d0d4c` is superseded as the current-file SHA.

| Item | Correction |
|---|---|
| 1. C4 field omission | Product option listbox no longer emits Type/Kind omitted-as-value fields. Product detail badge keeps `Type: badge` (265) and no longer emits a Kind omitted-as-value field. Kind/map-unconfirmed is prose only: Capture record 175; listbox field note 260; badge field note 274; Named gaps 335. |
| 2. Color dual dests | YAML `tokens.colors` dests now include provenance.md:39 (pair ledger), :132 (`#1e1e1e` / `#00c73c` / `#e6e6e6`), :149 (B2a inventory hex names), plus current portable literals. Prior DESIGN-only Dual hex hits SUPERSEDED. |
| 3. §14 Named gaps | Original `web/references/brandi/DESIGN.md:255-257` → Capture record 171 and Named gaps 333 (empty/loading/error/success rows) plus 334 (C2 loading·error·success). Prior log dest omitted Named gaps. |
| 4. Responsive Named gaps | Original `:229-231` → Layout 283 and Named gaps 339. Prior log dest 286 only. |
| 5. Voice / persona Named gaps | Voice placeholder → Content 288 + provenance.md:142 + Named gaps 328. Persona placeholder → Audience 34 + provenance.md:136,145 + Named gaps 329. |
| 6. Font / C4 Named gaps | Font boundary → Font evidence 126–133 + Named gaps 331. C4 boundary → Capture 175 / listbox 260 / badge 274 + Named gaps 335. Prior source-rows omitted those Named gaps dests. |

### F1 of changed sites (this resubmit)

Listbox field-note 260 names yaml-has-no-primitive-type / no-interactive-kind-confirmation / no-§4.4-map under the existing adjacent complete B2a. Badge field-note 274 names no-interactive-kind-confirmation / no-§4.4-map under its adjacent complete B2a. Capture-record C4 limiter 175 is unchanged. This is not a closed-completeness claim (E2c).

### F2 grepped dests (CURRENT lines; three files)

- `#ffffff` → DESIGN 38,40,42,78,80,84,183,189,206,212,228,235,252 + provenance.md:39
- `#202429` → DESIGN 13,38,40,81,229,242,253 + provenance.md:149
- `#ff365d` → DESIGN 11,13,38,43,62,65,78,85,189,212 + provenance.md:39,149
- `#1e1e1e` → DESIGN 13,38,41,50,52,78,82,182,189,212 + provenance.md:14,21,39,132,149. Avoid does not contain this hex.
- `#00c73c` → DESIGN 13,38,41,50,53,78,83,189,205,212 + provenance.md:39,132,149
- `#e6e6e6` → DESIGN 38,78,86,230,235,254,260 + provenance.md:39,132
- `#e1e1e1` → DESIGN 38,78,87,235,242 + provenance.md:39
- `#ebeef2` → DESIGN 38,78,88,267,274 + provenance.md:39
- `#808893` → DESIGN 38,78,89,268,274 + provenance.md:39
- `#ff204b` → DESIGN 62,64,91,330 + provenance.md:149
- `Type: badge` → 265; prose `type: badge` → 175
- Listbox C4 prose → 175,260; badge C4 prose → 175,274; Named gaps C4 → 335. No Type/Kind omitted-as-value fields in DESIGN.md.
- Capture selectors → Use/Expanded 187,210,233,258,272 + Primary tasks 28,29 + provenance.md:110–115
- `18px 4px` → 97,185,208,274,281
- Listbox `0px 0px 6px 6px` → 38,44,103,106,255,260
- Site title → 9,288,290; Newnex → 19,290
- §14 empty/loading/error/success → Capture 171 + Named gaps 333,334
- Responsive breakpoints → Layout 283 + Named gaps 339
- Voice placeholder → Content 288 + provenance.md:142 + Named gaps 328
- Stakeholder placeholder → Audience 34 + provenance.md:136,145 + Named gaps 329
- Font Pretendard/Arial boundary → 126–133,137–144,162 + Named gaps 331
- B3 five-kind gate → Motion 118; Named gaps 338 is inventory form, not that full gate sentence
- YAML unitless `1.0` → 148,152–154

Prior incomplete dest maps in this log and in `audit-log.md:104-105` are SUPERSEDED. New F3 was not re-run. Not a catalog-adoption claim (E2c).
