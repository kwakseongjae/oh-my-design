#Cafe24 migration log

Source: `web/references/cafe24/DESIGN.md`
Destination: `docs/design-md-weight/migrated/cafe24/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/cafe24/provenance.md`
Date: 2026-08-24
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7
Portable Core: command outputs are recorded in Revision 2026-08-24 (wave12 sol resubmit). This is not a catalog-adoption claim (E2c).
Gate: see that revision. Prior worker DESIGN SHA-256 `374370ea8f8a3378543d3ce5d9a12cbeeb23f4579168c9eecd374ff2ae513e12` and post-F3 SHA-256 `fde9399b9e7a63abe8d6553cfba583c398ec68d8f95aed8e1659760649d4ded0` **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — current SHA in that revision]**.
카탈로그 채택 아님.

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, display_name_kr, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Scope token-note + Distinctive + Foundations Cafe24 Blue / Semantic unmerged-role + capture-bound + Primary CTA + Step Badge + local recipes; logo URL 옮김 → Typography & Assets + provenance | Portable file has no frontmatter. Name kept as H1 `Cafe24 Design System`. Homepage `https://www.cafe24.com` is dual Scope 9/11 + provenance identity/surfaces/Proof 14/26/49/58/66/79 (E2a). Catalog `primary_color` `#084fff` is identity + portable Scope token-note 13 / atmosphere 15, Distinctive unmerged B2a 38 / bullet 40, Principles item 3 58 / item 5 60, capture-bound 63 / Do 66, Avoid list-head 76, Semantic unmerged-role 93 / Cafe24 Blue 95, Capture-record Empty 242, Primary CTA Background 262 / field note 270, App Submit field note 295 (as not-marketing-fill), Step Badge text 427 / field note 432, White Hero 467, Step Section 503, provenance 15/22/28/43/85/90/104/116/162 (E2a). Avoid 79 names lime, not this hex. Content Observed 550 is the live CTA string without this hex. Catalog favicon URL `https://www.google.com/s2/favicons?domain=cafe24.com&sz=128` is dual: provenance identity 16/24 + portable Typography & Assets 227 (E2a). Not a captured first-party mark. A first-party logo-file gap sentence was not generated. `display_name_kr` 카페24 is dual provenance identity 11 + portable Scope 9 (E2a). Observed 549 is a quoted store-hub headline, not the YAML identity field. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Assets 224 / Observed 487 / `#084fff` without White Hero/Step Section dests.]** |
| YAML `omd`, `verified`, `added`, token claims, `tokens.source` / `extracted` / `note`, `components_harvested` | mixed: `omd` / `verified` / `added` / `extracted` / `components_harvested` / `tokens.source` YAML keys 분리 → provenance; `tokens.note` 옮김 → Experience Scope + provenance; `live-extract` 값 옮김 → Font evidence live computed + provenance | `tokens.source: live-extract` YAML key and `components_harvested: true` are provenance-only as keys (A1c; provenance Identity 18/20/30 + Claim ledger 112). The live-extract extraction class is dual: provenance Identity/Claim ledger + portable Font evidence table row 194 (E2a). Line 190 is the adjacent complete B2a on evidence-class application, not the live-extract restatement. Token note is dual Scope 13 + provenance identity 22 (E2a, B2/B2a). YAML `verified` / `added` / `extracted` 2026-06-26 are provenance freshness 35–37. Footer Verified is provenance 38. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Font 190 / B2a 185.]** |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States; YAML `use` also Primary tasks | 검증된 값만 최소 필드 단위. YAML unitless lineHeight 1.21 / 1.35 / 1.53 / 1.42 / 1.40 / 1.50 / 1.00 비율 보존 (A1a) Type roles 209/215–223. YAML typography `use` 아홉 field restored on Type roles 215–223 (A1). Body-table Notes restored on the same rows (H2 section heroes / Store hub & feature section titles / Recommendation headlines / Feature card heads / Persona/segment card titles / Standard reading text / Top navigation / Primary CTA label / Tag chips, captions). YAML rem 3.00 / 2.50 / 1.88 / 1.50 / 1.25 / 1.13 / 1.00 / 0.88 restored in Size column 215–223. YAML spacing xs 4 / sm 8 / md 12 / base 16 / lg 20 / xl 32 / xxl 40 / section 64는 숫자 보존, px 접미사 비발명 (Spacing 119, Layout 511). Body 9px는 Spacing 119 / Layout 511에 별도 유지. YAML `rounded.full` 9999는 `9999px`로 마케팅 CTA에 보존되고 circular-icon `100%`와 비합침 (Shape 134/136, Circular 443/448). 검증된 primitive type은 컴포넌트별로 보존: button×4 (260, 285, 311, 440) + tab (338) + card (366) + input (382) + badge×2 (408, 424). Circular Icon Button `Type: button` is body §4 heading/Use, not YAML. `Kind: interactive`로 뭉개지 않음 (A1b). `#084fff`와 `#3971ff`, `#3971ff` submit fill과 input fill `#ffffff`, `#1c1c1c`와 `#1b1e26`와 `#000000`, `#e0e0e0`와 `#e6e8eb`와 `#d6dae1`는 비합침 (A4). YAML `shadow.none` 문자열은 Elevation 149. Primary tasks dests from these YAML `use` strings: 27–29 (marketing CTA 268, login submit 293, scan captured persona-card labels 372). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior button×3 without Circular Type; Type roles 206/212–220 without Notes; Primary tasks dests only on the §13 row.]** |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위. Four-URL evidence-domain assignment (11) names the source-footer Tier 1 URLs. Product-origin (9), token-note register-split including `#3971ff`-as-submit-fill-not-input-fill / 4px-shared-geometry (13), atmosphere extra names including app-blue-submit-fill-not-input-fill (15), public-history (17), refusal/embrace including energetic-not-bureaucratic (19) 문단 인접에 derived editorial implementation inference / not Cafe24-authored or a separately published UI specification 한정 (B2/B2a). Distinctive unmerged-role extras have adjacent complete B2a immediately before the bullets (38). `https://www.cafe24.com` / `https://eclogin.cafe24.com/Shop/` / `https://developers.cafe24.com/design/front/smart` / `https://news.cafe24.com`는 provenance와 dual (E2a). Atmosphere 15 and Distinctive 41 split `#3971ff` as submit fill from 4px shared geometry; input fill remains `#ffffff`. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior atmosphere/Distinctive “`#3971ff` on sharp 4px buttons and inputs”.]** |
| §1 / footer / §11 공식 URL | 분리 → provenance; 본문 Scope에도 | 서사·freshness 원장. 본문은 토큰 경계 한정을 유지. Four URLs remain named as brand-owned Tier 1. KED Global / Wikipedia / Newsroom Q&A URLs는 Scope 17 + provenance Narrative 108 (E2a). Evidence class is public-history narrative from those sources, not Official history. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | 21 YAML hex 전부. Unmerged-role extra characterizations have adjacent complete B2a at 93 (B2/B2a). Lime never-on-light has adjacent complete B2a at 111. App Blue 96 is eclogin submit fill. Input Border 106 / Input Ink 98 / canvas white 99 are the login field, not App Blue fill. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급. Pretendard marketing vs Noto Sans KR developers-docs kept as separate families (200–201). YAML `use` 아홉 field restored (215–223). Body-table Notes restored on Type roles (213–223) (A1/A4). Font evidence-class B2a (190). Live computed surface-use row 194; YAML family keys name those live computed families. No Font Official product-use row for Newsroom merchant philosophy (that narrative is Scope 17). No Declared-only label on live computed Pretendard / Noto Sans KR. Family font-use (203) / type-rule (205) / ratio-versus-size-local (209) / unmerged Button-vs-App-Submit (211) 독해는 각 인접 완전 B2a (B2/B2a). 원본에 없는 type-spec / FontFaceSet / exclusive-file 부정은 만들지 않음 (D1). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Official product-use / Declared-only Font rows and Notes-omission.]** |
| §4 Component Stylings | 옮김 → Components & States + Primary tasks | Primary CTA / App Submit / Selector Chip / Circular Icon Button `Type: button` 260/285/311/440; Nav Link `Type: tab` 338; Persona Card `Type: card` 366; Text Field `Type: input` 382; Tag Chip / Step Badge `Type: badge` 408/424 (Persona/Tag/Step kind/map 생략, C4 254/376/419/434/609). Circular Icon Button YAML `tokens.components` row 없음 — Type/Kind는 source §4 heading/Use (round icon/utility button)에서 복원 (A1b) 436–458; map 451–458 (default/hover/focus-visible/disabled applicable, loading/error/success not-applicable as carousel chrome utility not request-in-flight / form-outcome 456–458). Capture selector 없음 — 발명하지 않음. Primary CTA loading·error·success omitted (C2) 279. App Submit loading applicable 303; error/success omitted 305. Text Field error applicable 401; loading/success omitted 403. Selector / Nav L/E/S는 destination/selection 역할로 not-applicable 330–332 / 357–359 (C2; `not captured` 사유 아님, C1). Named Focus 없음; focus-visible 행에 hex 없음 (B1, 252/276/301/328/355/399/454). Field notes have adjacent complete B2a on unmerged-field readings (270/295/322/349/374/393/417/432/448). Nav captured-variant-not-click-transition has adjacent complete B2a (361). Primary tasks from these YAML/§4 uses: 27–29. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Circular kind/map omitted (C4) / Type not invented.]** **[SUPERSEDED dest 2026-08-24 wave12 pointer sync — prior Circular 436–456 / L/E/S 454–456.]** |
| §5 Layout | 옮김 → Layout & Platforms + Foundations spacing/shape | YAML scale + body 9px + harvested heights. Shape local-geometry limiter precedes the labeled list (127). Layout breathing-room extras (513)와 recorded-span / collapsing / not-cross-viewport (522, limiter precedes the breakpoint table)는 각 절 인접 완전 B2a (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | YAML `shadow.none` 149 + live `box-shadow: none` 151 + four-level table 143–147. Elevation-table Use limiter precedes the table (140) (B2/B2a). `#e0e0e0`와 `#e6e8eb` 비합침 151. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | Capture-bound grouping of §7 Do’s named rules has adjacent complete B2a (63) (B2/B2a). Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. Avoid list-head named Don’ts 인접 완전 B2a (76); last-bullet size-and-weight-driven 인접 완전 B2a (85) (B2/B2a). `#000000`는 Avoid 80 + Distinctive/Foundations (E2a). |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Source breakpoint table Mobile <640px / Tablet 640-1024px / Desktop 1024-1440px 보존 (528–530). Touch-purpose / collapsing / image-behavior / source-stated-heights-not-cross-viewport 독해는 Layout 인접 완전 B2a (522) (B2/B2a). 20%는 Scope Naver stake 17에 보존. |
| §9 Agent Prompt Guide | mixed: 도구 프롬프트 삭제; 고유 parent-child tuple 옮김 → local recipes | 도구별 복붙 프롬프트·Quick Color Reference·Iteration Guide 삭제 (A2). 검증된 hex/radius/height/family는 이미 Foundations/Type/Components에 있음. Unique tuples restored (A3/A4): White Hero 460–470 (white `#ffffff` parent + persona-card row + one primary pill CTA); Dark Feature Band 472–483 (full-width `#1a1d22` parent + 40px/700/-0.4px white headline + single lime emphasis + no shadow); Login White Card 485–495 (white-card parent + login input `#ffffff`/`#d6dae1`/4px/`14px 12px`/48px/`#1b1e26` + submit `#3971ff`/white/4px/56px/16px/700/`로그인`); Step Section 497–506 (step-section parent + numbered badge + category-tag pairing). Dark-band and white-card login pair are not promoted as global tokens. Unique §4 Circular Icon Button 값은 Components 436–458로 옮김 (A3). Remaining prompt-only constructions stay omitted in provenance omitted-prompts 141. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior “verified values already live elsewhere / prompt-only omitted” scatter-as-tuple.]** **[SUPERSEDED dest 2026-08-24 wave12 pointer sync — prior Circular 436–456.]** |
| §10 Voice & Tone | 옮김 → Content Observed + derived voice (인접 B2a) | Live Observed strings 545–551 under citation-character B2a (543). Derived editorial voice + tone table + forbidden register under adjacent complete B2a (557). Treating §14 rows as state-contract not extra voice samples has adjacent complete B2a (553) (B2/B2a, E1). |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | Founding 1999 / 이재석 / KOSDAQ / Naver 20% stake to deepen the two companies' commerce partnership / Newsroom quotes restated in portable Scope under adjacent complete B2a (9, 17, 19) (A1, B2/B2a). Lime-on-dark as energetic, not bureaucratic is Scope 19. KED/Wikipedia/Q&A URLs dual Scope 17 + provenance Narrative 108. Evidence class is public-history narrative from those sources, not Official history. Merchant-centric Newsroom philosophy is Scope/Narrative, not a Font Official product-use row. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior omission of the partnership / energetic-not-bureaucratic relations and Official-history promotion.]** |
| §12 Principles | 옮김 → Experience principles | 여섯 항목 전체 editorial readings. 인접 본문에 derived editorial implementation inference / not Cafe24-authored or a separately published UI specification (54). Capture-bound grouping (§7 Do’s) has adjacent complete B2a (63). Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). |
| §13 Personas | mixed: 가상 biography 삭제·sidecar 재수록 없음; Audience는 배제 경계만 | 원본이 named fictional archetypes. Names/biographies/ages/cities는 portable Audience에도 provenance에도 없음 (D2). Audience no-individual-personas-promoted + observable-work-follows-three-tasks application have adjacent complete B2a (34) (B2/B2a). Primary tasks 3건 dests are on the YAML/§4 source-rows (YAML `use` + §4 Use 268/293/372 → Primary tasks 27–29), under adjacent complete B2a as YAML-use-strings-not-from-§13 (25). The persona-card task is scan of captured hero audience-segment entry cards, not Open (no tap/open/destination proof; kind remains unconfirmed, C4). The portable body does not call those tasks independently verified (E2c). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior Primary-task dests only on this §13 row, and Open-card task.]** |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: Empty (no stores) / Empty (dashboard) / Loading (page/section) / Loading (app submit) / Error (form validation) / Error (operation failed) / Success (action saved) / Skeleton / Disabled (A2) 242–250. Capture-record table characterizations have adjacent complete B2a immediately before the table (238) (B2/B2a). Graph-not-adopted preservation sentence has adjacent complete B2a (236). 선언 컴포넌트는 §4.4를 닫되 미관측 시각값은 발명하지 않음. `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). Primary CTA loading·error·success omitted (C2) 279. App Submit loading applicable 303; error/success omitted 305. Text Field error applicable 401; loading/success omitted 403. Selector / Nav L/E/S role-based not-applicable 330–332 / 357–359. Circular Icon Button status table 451–458; L/E/S role-based not-applicable 456–458. Persona/Tag/Step kind/map 생략 (C4) 254/376/419/434/609. Circular Icon Button is not in that C4 set. focus-visible 행에 hex 없음 (B1, 252). graph 위임 없음. State coverage 완료 주장 없음 (C3, 252). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior C4 list including Circular Icon Button.]** **[SUPERSEDED dest 2026-08-24 wave12 pointer sync — prior Circular L/E/S 454–456.]** |
| §15 Motion & Easing | 옮김 → Foundations motion | Durations 120ms / 220ms / 360ms 159–161; easing names 167–169; signature carousel / fade-in / dark-band / reduced-motion 177–180. Functional-and-friendly and no-bounce dependability-not-gimmickry restored in the signature-motion body under adjacent complete B2a (155 and 173) (B2/B2a). Source-stated classification under adjacent complete B2a (155); not computed CSS. 무출처 cubic-bezier 3개 (`ease-enter` `cubic-bezier(0.2, 0.6, 0.25, 1)` / `ease-exit` `cubic-bezier(0.4, 0.0, 1, 1)` 템플릿 일치 / `ease-standard` `cubic-bezier(0.25, 0.1, 0.25, 1)`)는 provenance omission ledger 133–137 (E2b). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시 (182). “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps 610 lists the five kinds in inventory form; the B3 full promotion-gate sentence is Foundations Motion 182 only. **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior deletion of functional-and-friendly / dependability-not-gimmickry from portable Motion.]** |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts / HTML-comment Proof | mixed: freshness 분리 → provenance; live URLs는 portable에도; Proof sidecar + HTML comment 연결 → provenance | Dual (E2a): homepage/eclogin/developers/newsroom URLs는 Scope 11 + provenance Surfaces/Sources/Tier 1/Proof. Footer verified 2026-06-26는 provenance freshness 38 only. Conflicts unresolved: none. Source HTML comment raw samples + canonical sidecar `web/references/cafe24/.verification.md` 분리 → provenance Proof 71–97. Derived mirror `design-md/cafe24/.verification.md` has the same SHA-256 `5812cc95e16da7f3a4afd1acf9948e0313a2beef422ede165186cc1a7125d606`. Canonical is `web/references`. Sidecar Inspected 2026-06-26; Method playwright getComputedStyle; Sources the three inspected URLs; Raw samples on live cafe24.com / eclogin / developers. Portable body does not re-host the Proof rgb dump (E1). **[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — prior derived-only Proof pointer and false-absence of `web/references/cafe24/.verification.md`.]** |

### F1 / F2 (v7 mandatory final passes)

F1 and F2 dest maps below from the worker draft and F3 audit are **SUPERSEDED** by Revision 2026-08-24 (wave12 sol resubmit). Circular Icon Button range dests and Login White Card 4px tuple dests in that revision are **SUPERSEDED** by Revision 2026-08-24 (wave12 pointer sync). Worker completeness is not a current-class claim (E2c). This is not a catalog-adoption claim and is not a claim that no unqualified sentence remains (E2c). Reconstruction-boundary exemption not used. F3 was not re-run (E2c).

### F1 B2a scan (full DESIGN.md reread)

Worker-draft / F3 F1 dest map is **SUPERSEDED** by Revision 2026-08-24 (wave12 sol resubmit). Current adjacent complete B2a sites match `provenance.md` Derived inventory 155. Pointer-only dests for Circular Icon Button / Login White Card 4px are **SUPERSEDED** by Revision 2026-08-24 (wave12 pointer sync).

### F2 grep (this draft)

Worker-draft / F3 F2 dest map is **SUPERSEDED** by Revision 2026-08-24 (wave12 sol resubmit). Circular Icon Button 436–456 / 451–456 / 454–456 and Login White Card 490/495 dests in that F2 are **SUPERSEDED** by Revision 2026-08-24 (wave12 pointer sync).

## Revision 2026-08-24 (F3 B2a·E2 audit)

Fresh-session auditor grok-4.6. Rulebook v7 B2 / B2a / E1 / E2 / E2a–c only. Token values, component tables, state applicability, and section structure unchanged at that time.

Post-F3 DESIGN SHA-256 `fde9399b9e7a63abe8d6553cfba583c398ec68d8f95aed8e1659760649d4ded0`. `node test-v2/tools/migrate-reference.mjs --brand cafe24 --gate-only` → PASS, problems []. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/cafe24/DESIGN.md --check --require-portable-core --json` → exit 0, `portable_core: true`. Not a catalog-adoption claim (E2c).

**[SUPERSEDED dest 2026-08-24 wave12 sol resubmit — F3 current-class for false-absence proof, Circular Icon C4 inversion, Open-card task, scatter-as-tuple §9, missing Notes, deleted §11/§15 relations, Font Official-product-use/Declared-only, Official history, App-Blue-as-input-fill. F3 was not re-run.]**

## Revision 2026-08-24 (wave12 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave12-2026-08-24-sol-full.md` §5 cafe24. New F3 is not required. E2c: this revision does not re-assert F1/F2/F3 closed.

F2 grep after body edits (three files: DESIGN.md, provenance.md, migration-log.md):

- Canonical Proof sidecar `web/references/cafe24/.verification.md` → provenance 49/62/71/73/172. Derived mirror `design-md/cafe24/.verification.md` same SHA-256 `5812cc95e16da7f3a4afd1acf9948e0313a2beef422ede165186cc1a7125d606` → provenance 73/172. Portable DESIGN.md does not re-host the Proof rgb dump. False-absence of the canonical sidecar is not in any of the three files.
- Catalog `primary_color` `#084fff` → DESIGN 13/15/38/40/58/60/63/66/76/93/95/242/262/270/295/427/432/467/503 + provenance 15/22/28/43/85/90/104/116/162. Avoid 79 does not contain `#084fff`. Content Observed 550 is the live CTA string without this hex.
- App blue `#3971ff` → DESIGN 13/15/38/41/60/63/71/93/96/245/270/287/295/303/487/492/495 + provenance 22/43/93/104/116/155. Submit fill, not input fill. 4px shared geometry is Distinctive 42 / Shape 129 / Text Field 387 / Login White Card 492 (tuple) · 495 (reinforcing sentence). **[SUPERSEDED dest 2026-08-24 wave12 pointer sync — prior Login White Card 490/495; :490 is Anatomy: surface.]**
- Google favicon URL → Assets 227 + provenance identity 16/24 only (not Named gaps).
- Homepage `https://www.cafe24.com` → Scope 9/11 + provenance 14/26/49/58/66/79.
- Eclogin / developers / newsroom URLs → Scope 11 (newsroom also 17) + provenance surfaces/Sources/Tier 1/Proof.
- `tokens.source` / `components_harvested` YAML keys → provenance only; portable Font evidence table row 194 names live computed surface-use. Line 190 is B2a evidence-class, not the live-extract restatement.
- `display_name_kr` 카페24 → provenance 11 + Scope 9. Observed 549 is a quoted headline, not the YAML key.
- YAML `use` strings → Type roles 215–223 and component Use 268/293/320/347/372/391/415/430; Primary tasks 27–29 carry marketing CTA / login / scan captured persona-card uses. Persona Card Use 372 is also a Primary-task dest (YAML/§4), not only a §13 detour.
- Body-table Notes → Type roles 213–223 (H2 section heroes / Store hub & feature section titles / Recommendation headlines / Feature card heads / Persona/segment card titles / Standard reading text / Top navigation / Primary CTA label / Tag chips, captions).
- `Type: button` ×4 → 260/285/311/440; capture-record restore sentence 254; YAML-absence note 447. `Type: tab` → 338; `Type: card` → 366; `Type: input` → 382; `Type: badge` ×2 → 408/424.
- Circular Icon Button Kind 439 / Type 440 / map 451–458. Loading/error/success not-applicable 456–458 (carousel chrome utility, not request-in-flight / form-outcome). **[SUPERSEDED dest 2026-08-24 wave12 pointer sync — prior map 451–456 / L/E/S 454–456.]**
- Primary CTA omission sentence → 279. App Submit error/success omission → 305. Text Field loading/success omission → 403. Not destination `not-applicable` rows.
- Persona/Tag/Step C4 omit-kind → 254/376/419/434/609. Circular is not in that set.
- Persona names absent from DESIGN.md and provenance. Open-card task absent.
- `omd-apply` / `npx omd` / `[FILL IN]` absent from portable body.
- §14 nine rows → Capture record 242–250.
- `9999px` → Distinctive/Shape/Primary CTA/Circular field-note as listed; YAML step 9999 also Shape 134.
- YAML spacing numbers 4/8/12/16/20/32/40/64 → Spacing 119 and Layout 511 without a required px suffix on the YAML steps; body 9px kept beside them.
- B3 five-kind gate → Foundations Motion 182 (`transition properties, animation name, duration, easing, and reduced-motion behavior` + per component + “Official documentation of a single curve or duration is not that gate”). Named gaps 610 lists those five kinds in inventory form; it is not the B3 full promotion-gate sentence.
- Cubic-bezier values absent from DESIGN.md tables (names only at 167–169); provenance omitted-curves 133–137 stores the three source curves.
- `prefers-reduced-motion` → Motion 180.
- `20%` / commerce partnership → Scope 17.
- energetic, not bureaucratic → Scope 19.
- functional and friendly → Motion 175 (limiter 173/155). dependability, not gimmickry → Motion 173/180.
- `100%` → Distinctive 38/49, Shape 127/134/136, Primary CTA field note 270, Circular 443/448.
- `0px` token → Primary CTA padding 265 and App Submit padding 290.
- YAML rem 3.00rem / 2.50rem / 1.88rem / 1.50rem / 1.25rem / 1.13rem / 1.00rem / 0.88rem → Type roles 215–223.
- YAML unitless lineHeight 1.21 / 1.35 / 1.53 / 1.42 / 1.40 / 1.50 / 1.00 → Type roles 209/215–223.
- §9 local recipes → White Hero 460–470, Dark Feature Band 472–483, Login White Card 485–495, Step Section 497–506.
- Font evidence: Live computed 194; no Official product-use row; no Declared-only row on Pretendard/Noto Sans KR.
- Scan the captured hero audience-segment entry cards → Primary tasks 29.

Prior F3 scatter-as-tuple, Circular C4 inversion, Open-card task, missing Notes, deleted §11/§15 relations, Font Official-product-use/Declared-only, Official history, App-Blue-as-input-fill, and false-absence Proof are superseded. This log does not claim F3 re-ran (E2c).

SHA-256 `b050dd6577bd01f79c0ca97d0298e8c5e0fc6b8575e8ffc610bc3c52c37e9d69`. `--gate-only` PASS, problems []. `--require-portable-core` exit 0, `portable_core: true`. F3 was not re-run. Not a catalog-adoption claim (E2c).

## Revision 2026-08-24 (wave12 pointer sync)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v7. Source remainder: `docs/reviews/t2-1-wave12-2026-08-24-sol-recheck.md` cafe24 condition 8. DESIGN.md not edited. New F3 not required. E2c: this revision does not re-assert F1/F2/F3 closed.

| Item | Correction |
|---|---|
| 1. Circular Icon Button ranges | Current source-row / provenance / F2 dests: component `DESIGN.md` 436–458; status table 451–458; loading/error/success 456–458. Prior 436–456 / 451–456 / 454–456 are not current. |
| 2. Login White Card 4px tuple | Current F2 dests: tuple 492; reinforcing sentence 495. `:490` is `Anatomy: surface`, not the 4px tuple. Prior 490/495 is not current. |

### F1 / F2 (v7; this pointer sync)

F1: unchanged from wave12 sol resubmit.

F2 (this revision; value + field/role context; not a claim that every source-row destination is closed):

- Circular Icon Button heading/fields/map → 436–458
- Circular Icon Button status table → 451–458
- Circular Icon Button loading/error/success not-applicable → 456–458
- Login White Card 4px parent-child tuple → 492; reinforcing 4px-shared-geometry sentence → 495
- SHA-256 `b050dd6577bd01f79c0ca97d0298e8c5e0fc6b8575e8ffc610bc3c52c37e9d69` unchanged (DESIGN.md not edited)

This log does not claim F2 completeness beyond those greps, and does not re-assert F1/F2/F3 compliance as closed (E2c). Not a catalog-adoption claim (E2c). F3 was not re-run.

## Revision 2026-08-26 (A5 카피 복원, 규칙집 v9)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v9 — A5(브랜드 발행 문자열 바이트 보존) 신설 + 게이트 `copy-loss` 신설. v9 게이트가 이 이관본을 `MIGRATION_BLOCKED / copy-loss` 로 차단했다: `원스톱 운영대행`. **오탐 아님 — 실제 A5 손실이었다.**

### 손실의 정체 (legacy grep)

`grep -n '원스톱\|운영대행' web/references/cafe24/DESIGN.md` → `383` 단 1행, §11 Brand Narrative:

> That philosophy — take the operational burden off the seller so they can focus on creativity and brand — is visible in everything from the "원스톱 운영대행" (one-stop operations agency) framing to the "처음이어도 할 수 있어요" encouragement.

`원스톱 운영대행`은 원본이 영문 병기(`(one-stop operations agency)`)까지 달아 인용한 **브랜드 서비스 framing 명**이다. 서술어가 아니라 발행 문자열이므로 A5 대상.

이관본은 §11의 founding-premise 문단을 Scope로 옮기면서 창업연도·KOSDAQ·Naver 지분·창업자 인용까지는 보존했으나, `founding premise is merchant empowerment` 문장과 그 문장이 인용하던 **서비스명 자체**를 통째로 떨어뜨렸다. 짝을 이루던 `처음이어도 할 수 있어요`는 Principles `57` / Content Observed `547` / Derived voice `559`로 살아남아 게이트 needle을 충족했기 때문에, 소실은 `원스톱 운영대행` 한 건만 표면화됐다.

### 복원

`옮김 → Experience Scope (§11 public-history 문단)` — `DESIGN.md:17`. 원본 §11 문장 자리에 서비스명을 **바이트 그대로** 되돌리고 원본이 달아둔 영문 병기도 함께 복원했다 (A5: 영문은 원문 **옆에** 병기, 대체 금지):

> The source states the company's founding premise is merchant empowerment — take the operational burden off the seller so they can focus on creativity and brand — and reads that philosophy as visible in everything from the "원스톱 운영대행" (one-stop operations agency) framing to the "처음이어도 할 수 있어요" encouragement.

복원 문장 **바로 앞**에 인접 완전 B2a 한정을 새로 달았다 (`17`): `Treating the source's founding-premise reading — merchant empowerment, and that premise being legible in the brand's own one-stop service framing and its first-timer encouragement — as public-history narrative rather than an interface token is a derived editorial implementation inference from the verified surfaces; it is not Cafe24-authored or a separately published UI specification.` 기존 public-history 한정(문단 머리)은 손대지 않았고, 그 한정이 덮지 않던 새 인과 독해(`philosophy → framing에서 보인다`)만 새 한정이 덮는다 (B2/B2a).

**Content & Locales Observed에는 넣지 않았다.** 그 목록은 원본 §10이 `Voice samples (verbatim from live surfaces, 2026-06-26)`로 명기한 live 관측 문자열만 담는다. `원스톱 운영대행`은 §11 서사 인용이지 2026-06-26 live 캡처가 아니므로, Observed로 올리면 증거 종류 승격이다 (B1). 토큰 값·컴포넌트 표·state applicability·섹션 구조는 손대지 않았다.

### 복원하지 않은 것 (사유 명기)

- **§13 페르소나 대사 안의 인용 2종** — `"처음이어도 할 수 있어요"`(`legacy:400`), `"쇼핑몰 솔루션 이전"`(`legacy:404`). 삭제 — 가상 페르소나 진술이라 D2로 제거된 문맥이며 승격·재수록 금지. 두 문자열의 **발행 형태 자체**는 페르소나와 무관하게 이미 본문에 있다: `처음이어도 할 수 있어요` → Principles `57` / Content Observed `547` / Derived voice `559`; `쇼핑몰 솔루션 이전` → Nav Link Observed `348`. A5 손실 아님.
- **§13 세그먼트 라벨** — 신규 창업자 / 크리에이터 / 기업형 / 글로벌. 페르소나 문단 쪽 서술은 D2로 삭제 유지. 라벨 자체는 §10 tone 표에서 온 발행 문자열로 Content `564`에 이미 바이트 보존(추가로 Persona/Segment Card Observed `373`, Layout `518`).

### 이번 복원 범위 밖에서 grep으로 관측된 잔여 (미수정, 보고 대상)

게이트의 `copy-loss` needle은 **비라틴 연속 구간**만 검사하므로 라틴 문자열 손실은 보이지 않는다. 이번 grep 중 다음이 관측됐고, **고치지 않고 그대로 보고한다** (E3: 표기 왜곡으로 회피하지 않음, 그리고 지정 범위 밖 임의 수정 금지):

- `legacy:381` §11 두 번째 문장 `It grew into Korea's foundational global e-commerce platform — providing the infrastructure to **build, operate, and market** online stores on a one-stop basis.` 가 이관본에 없다. Scope `9`는 §1 `legacy:72` 원문 `the infrastructure that builds, operates, and markets a huge share of the country's online stores` 를 바이트 그대로 담고 있으나, §11 쪽의 `global` · `on a one-stop basis` 한정과 `**build, operate, and market**` 원형은 어느 파일에도 없다. `grep -n 'one-stop' DESIGN.md provenance.md` → portable 4행(`17` 이번 복원 `(one-stop operations agency)`, `56` Principles의 `one-stop framing`, `543` Observed 인용 성격 목록, `549` store hub headline `(one-stop promise)`), provenance 0행. `on a one-stop basis` 원형은 그 어디에도 없다.
- `legacy:406` 페르소나 문장의 `the platform's one-stop "build, operate, market" promise` 는 D2 삭제 문맥이라 복원 대상이 아니지만, 위 §11 원형이 없으므로 그 promise 문구의 원형이 이관본 어디에도 남지 않았다.

둘 다 라틴이라 `copy-loss`가 잡지 못한다. A5 판정(원본 저자의 서술인가, 브랜드 발행 문자열인가)이 필요한 자리이므로 sol 의미 검토로 올린다. 이 절은 관측 보고이며 준수 주장이 아니다 (E2c).

### F2 E2 대조 (실측 grep, 복원 후)

- `grep -n '원스톱 운영대행' docs/design-md-weight/migrated/cafe24/DESIGN.md` → `17` 1행(복원 자리). 목적지는 portable Scope 단일이며 provenance 이중 목적지 아님 — `grep -c '원스톱 운영대행' provenance.md` → `0` (E2a 해당 없음).
- legacy `383`의 인용 단위(`"원스톱 운영대행" (one-stop operations agency) framing to the "처음이어도 할 수 있어요" encouragement`)와 복원 문자열 비교 → BYTE-IDENTICAL.
- `grep -n '처음이어도' DESIGN.md` → `17`(복원), `57`(Principles 2), `547`(Content Observed, `!` 포함 live 형태), `559`(Derived voice). live 목록의 `처음이어도 할 수 있어요!`와 §11/§12의 `!` 없는 형태는 각각 제 원본 바이트를 유지하며 합치지 않았다 (A1a 정신).
- `grep -n '쇼핑몰 솔루션 이전' DESIGN.md` → `348` (Nav Link Observed). provenance 0행.
- 페르소나 이름 김도윤 / 이서아 / 박준호 / Mei Chen 은 여전히 DESIGN.md·provenance 양쪽에 부재 (D2 유지).
- 이번 편집은 Scope 문단 1곳만 건드렸다. 토큰 hex·YAML 비율·`Type:` 행·state 표는 diff에 없다.

### 게이트

`cd test-v2/tools && node migrate-reference.mjs --brand cafe24 --gate-only` → **PASS, problems []**. 복원 후 portable DESIGN SHA-256 `c83936a858c2fa55969efac094c7ebde05cfabc232ad055a52ab17df52d06723` (직전 `b050dd6577bd01f79c0ca97d0298e8c5e0fc6b8575e8ffc610bc3c52c37e9d69` 를 대체). 이 절은 명령 출력 기록이며 카탈로그 채택 주장이 아니다 (E2c). 게이트 오탐 회피용 표기 왜곡 없음 (E3).

### A5 판정 — 잔여 관측분 (2026-08-26, 검토자 opus5)

복원 워커가 범위 밖 잔여로 올린 원본 §11 문장

> It grew into Korea's foundational global e-commerce platform — providing the
> infrastructure to build, operate, and market online stores on a one-stop basis.

은 **A5 대상이 아니다.** 이것은 브랜드가 발행한 문자열이 아니라 원본 레퍼런스 저자가
KED Global·Wikipedia를 인용해 쓴 **서술문**이다. A5가 지키는 것은 라벨·CTA·마이크로카피·
사명처럼 브랜드가 자기 표면에 실제로 띄운 바이트다. 저자 서술을 A5로 끌어들이면 조항이
"원본 문장 전부 보존"으로 팽창해 Core v2 이관 자체가 불가능해진다.

또한 그 문장이 담은 실질(one-stop 인프라 성격)은 같은 패스에서 복원된 발행 서비스명
`원스톱 운영대행`과 그 영문 병기로 본문에 살아 있다. 사실관계(1999 창업·창업자·
2018 KOSDAQ·2021 Naver 지분)도 이관 시 보존됐음이 확인됐다.

처분: 복원하지 않는다. 이후 웨이브에서 같은 문장이 다시 올라오면 이 판정을 참조하라.
