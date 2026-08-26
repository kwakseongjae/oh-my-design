# Sinsang Market (Dealicious) migration log

Ruleset: `MIGRATION_RULEBOOK.md` v8 (2026-08-25) for the original migration; v9 (2026-08-26) for the A5 copy-restoration pass recorded below.

Source: `web/references/dealicious/DESIGN.md`
Destination: `docs/design-md-weight/migrated/dealicious/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/dealicious/provenance.md`
Date: 2026-08-25; A5 restoration pass 2026-08-26
Worker: GPT-5.6-sol T2-1 Wave 18; A5 restoration by Claude Opus 5 T2-1
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd: `portable_core: true`; `test-v2/tools/migrate-reference.mjs --gate-only`: PASS, problems `[]` — re-run after the A5 restoration)
DESIGN SHA-256: `9a1238b6ce8512884185824001e025728cc7e62543595ba6e068675f37236f29` (A5 restoration pass; pre-restoration `23f3b09547e3862145300a291828f83abd2b59ee283347370ca5033c8850e1eb`)
Source SHA-256 (unchanged, not edited): `c143cf4a23dfafffb1594e3d93eba7beaafc3150da798f6537c9bc3b72ca898a`

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity | 분리 → provenance; name/product identity → H1/Scope; `primary_color` → Experience/Foundations/Typography & Assets + provenance | Portable frontmatter removed; identity fields remain in provenance, while the name/product relation and `#001339` occupy their actual portable roles. |
| YAML first-party logo URL | exact URL/proof → provenance; identity/authority/reuse boundary → Typography & Assets | URL, dimensions, bytes, generic-favicon rejection, and source telemetry remain sidecar-only; first-party identity, palette evidence, and reuse boundary remain portable where applicable. |
| YAML verified/added/omd/extraction/harvest metadata | 분리 → provenance | Freshness/process metadata remains outside portable top matter. |
| YAML note | 이중 목적지 → Scope/Foundations/Typography & Assets + provenance | Navy/action/slate/tint/hairline and logo-palette boundaries remain in useful portable context and the exact ledger; the source note makes no font claim. |
| YAML colors | 옮김 → Foundations; exact ledger → provenance | All 15 keys retained; duplicate white roles remain named; sibling-only `#404e6b` and rgba scrim stay provenance-only. |
| YAML typography | 옮김 → Typography & Assets; exact ledger → provenance | Six roles, both families, exact fallback stack, sizes/weights/unitless ratios/rem forms retained without fixed-px conversion. |
| YAML spacing/rounded/shadow | 옮김 → Foundations; exact ledger → provenance | Eight values, four shape roles, explicit component forms, and `none` retained. |
| YAML components | 옮김 → Components & States; exact ledger → provenance | All six primitive records retained; cards/list item omit unproven kind and child links do not promote the container. |
| §1 Visual Theme & Atmosphere | 축약 이동 → Experience/Foundations/Typography & Assets; source comparison → provenance | Corporate scope and observed navy/ink/slate/tint/type/geometry/shadowless traits survive. The product-studio comparison is provenance-only, the mobile-native characterization is omitted, and retained portable interpretations carry B2a. |
| §2 Color Palette & Roles | 옮김 → Foundations | Identity, text, surface, muted, and on-color roles retained. |
| §3 Typography Rules | 분리 이동 → Experience + Typography & Assets | Exact stack, role metrics, rem forms, line heights, and light-headline avoidance survive. Causal prose about weight jump, cross-script rhythm, comfort, and title/body register is condensed or omitted rather than claimed wholesale. |
| §4 Component Stylings | 옮김 → Components & States; raw story record → Components & States + provenance; footer contacts → provenance; 라벨 카피 → Content & Locales | Two buttons, two cards, navigation, and footer records survive; transparent raw story container stays distinct from the white token in both destinations. Exact footer contacts remain sidecar-only. The footer label `개인정보 처리방침` and the two named story-card examples (`사내인터뷰`, `개발팀 연대기`) are restored byte-for-byte in Content & Locales under A5 — see the A5 restoration table. |
| §5 Layout Principles | 분리 이동 → Foundations + Layout & Platforms | Exact source scale/radii and measured CTA/hero/story/footer geometry survive. The conflicting `Base unit: 8px` and airy/generous-vertical-rhythm prose are omitted; the YAML `base: 16px` remains the source token. |
| §6 Depth & Elevation | exact treatments → Foundations; additional causal rhetoric → provenance | `none`, three tint roles, hairline, and navy scrim survive without shadow invention. Flat/fast/confident philosophy labels remain provenance narrative rather than portable claims. |
| §7 Do’s and Don’ts | 옮김 → Experience principles/Avoid + Foundations + Typography & Assets + Components & States | Brand/action/slate/type/tint/geometry/scrim boundaries survive at all actual portable destinations under adjacent B2a. |
| §8 Responsive Behavior | exact claims → provenance unresolved ledger; proof boundary → Layout & Platforms | Breakpoint values, collapse/touch/image rules, and cross-width behaviors remain exact only in provenance; portable text retains the non-promotion boundary without reproducing the ledger. |
| §9 Agent Prompt Guide | 고유 값은 Core 슬롯으로 옮김; prompt/example/workflow wrapper 삭제 | Every unique color/type/component/layout/contact value exists in Core sections or provenance. No slotless delegation. |
| §10 Voice & Tone | 축약 이동 → Content & Locales | Three verified samples plus navigation, CTA, and culture labels survive with contextual tone and forbidden register. The two exact story-card labels (`신상마켓의 얼굴을 만드는…`, `딜리셔스개발팀 연대기`) are restored byte-for-byte under A5; the shortened register forms `자유와 체계가 공존하는` / `심리적 안정감을 주는` are kept alongside the full corporate titles because both forms are the source's. |
| §11 Brand Narrative | 축약 이동 → Experience Scope/Content & Locales; evidence class and causal comparison → provenance | The 2015/platform/digitization/tech-topic core survives. The two corporate people-and-culture titles quoted in this section (`자유와 체계가 공존하는 딜리셔스`, `심리적 안정감을 주는 딜리셔스`) are restored byte-for-byte in Content & Locales under A5. Phone-call/paper-ledger/dawn-market/market-entry detail is omitted; source refusal/product-studio rhetoric is provenance-only or partially paraphrased under portable B2a. |
| §12 Principles | 옮김 → Experience derived principles | All five meanings retained with complete adjacent B2a. |
| §13 Personas | source-backed groups → Experience; fictional biographies 삭제 | D2 forbids fictional names/biographies in both outputs. |
| §14 States | 축약 이동 → Components & States legacy guidance | All nine patterns and their concrete treatments/explicit error strings survive with adjacent B2a; the separate “Honest, low-pressure” evaluative tag is omitted. Per-component applicability is separately role-derived. |
| §15 Motion & Easing | exact values 분리 → provenance unresolved ledger; B3 → Foundations Motion | Three durations, three curves, signature/reduced-motion rules retained without token promotion; portable B3 names all five evidence kinds. |
| Source comment/footer | Tier/inspection/no-conflict ledger → provenance; narrative → Scope + provenance; persona → Audience + provenance; interpretation → portable B2a boundaries + provenance; verified voice → Content + provenance | Source disclosures and evidence classes survive at their actual dual destinations; portable editorial claims carry their own adjacent authority boundary. |
| Canonical `.verification.md` | 분리·채택 → provenance Proof | Method, raw tuples/counts, first-party logo analysis, contacts/title, Tier 2 shells, regional-source test, and conflict matrix retained. |

## A5 copy restoration (rulebook v9, 2026-08-26)

Rulebook v9 added A5: a brand-published string moves as bytes, and the `copy-loss`
gate check made five of this brand's losses visible. All five trace to real
published surface copy — footer navigation, story/culture card titles, corporate
people-and-culture page titles. None came from the §13 fictional personas, so none
qualified for a D2 deletion; all five are restored verbatim. English in parentheses
in the portable body is a reading aid set beside the Korean, never a substitute.
No token value, component table, state applicability row, or section structure was
touched, and the source file was not edited.

| String (bytes as published) | Legacy source — what it is | Restored to | Note |
|---|---|---|---|
| `개인정보 처리방침` | §4 Component Stylings → Footer, L174: footer navigation/contact row label | Content & Locales, footer-navigation label line | Label is portable copy; the exact contact rows (`contact@deali.net`, `1661-1916`) stay provenance-only as before. |
| `신상마켓의 얼굴을 만드는…` | §10 Voice & Tone table, L302: “Story / culture cards” row — a culture card title | Content & Locales, story/culture card titles line | The trailing `…` is the source's own truncation of the card title and is carried as the source records it, not added by this pass. |
| `딜리셔스개발팀 연대기` | §10 Voice & Tone table, L302: same row — a culture card title | Content & Locales, story/culture card titles line | Also restores the §4 L155 story-card example `개발팀 연대기` as a substring of the fuller published form; `사내인터뷰` (§4 L155, §10 L295) is restored on the same line. |
| `자유와 체계가 공존하는 딜리셔스` | §11 Brand Narrative, L316: corporate-site people-and-culture page title | Content & Locales, corporate people-and-culture titles line | The §10 L303 tone table quotes the shortened register form `자유와 체계가 공존하는`; both source forms are kept rather than collapsing one into the other. |
| `심리적 안정감을 주는 딜리셔스` | §11 Brand Narrative, L316: corporate-site people-and-culture page title | Content & Locales, corporate people-and-culture titles line | Same treatment as above for the shortened form `심리적 안정감을 주는`. |

Deleted with reason (A5 requires the loss to be visible in the ledger): none for
this brand. Every string the gate flagged was restorable published copy.

## Required final passes

- F3 B2/B2a scan: completed sentence by sentence across Scope, tasks, audience, traits, principles, avoidances, semantic roles, spacing, shape/elevation/motion, family/assets, state evidence, each component family/kind/applicability or omission boundary, legacy state recipes, layout, content, and governance. Every editorial interpretation or causal judgment has an adjacent complete authority qualifier.
- F3 E1/E2 scan: all 25 disposition rows were grep-checked against source DESIGN, portable DESIGN, and provenance. Exact freshness, logo URL/proof, and unpromoted responsive claims remain in provenance; all portable/sidecar dual destinations, condensations, and omissions now match the files.
- E3: gate PASS with problems `[]`; no false positive was observed, and no token, hex, ratio, state label, or source wording was distorted for gate behavior.

### A5 restoration pass re-verification (2026-08-26)

- Every ledger pointer touched by the restoration was re-checked by measured grep
  rather than from memory. Legacy line numbers were re-read after the pass and are
  current: `개인정보 처리방침` L174, story/culture card titles L302, the shortened
  register forms L303, the corporate people-and-culture titles L316, and the §4
  story-card examples L155. The §4, §10, and §11 disposition rows above previously
  recorded these strings as omitted; those rows are corrected, since the claim no
  longer matches the files.
- Destination presence re-checked by grep: all five strings resolve exactly 1× in
  the portable `DESIGN.md`, so each has one portable home rather than being
  duplicated across sections. Counted in this log they appear 2–3× each, which is
  the ledger quoting them in the corrected disposition rows and the A5 table above;
  `provenance.md` carries none of the five, matching the disposition that these are
  portable copy rather than sidecar evidence.
- Sidecar-only claims re-verified unchanged: `contact@deali.net` and `1661-1916`
  remain provenance-only (0× in the portable doc), the first-party logo URL remains
  provenance-only, and the portable doc's two `breakpoint` mentions remain
  non-promotion boundary statements carrying no exact values.
- Source untouched: `web/references/dealicious/DESIGN.md` SHA-256 is still
  `c143cf4a23dfafffb1594e3d93eba7beaafc3150da798f6537c9bc3b72ca898a`.
- E3: gate re-run after the restoration returns PASS with problems `[]`. The
  `copy-loss` finding was a true positive — five genuinely lost published strings —
  so nothing was reworded to dodge the scanner.
