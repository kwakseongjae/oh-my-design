# Cloudflare migration log

Source: `web/references/cloudflare/DESIGN.md`
Destination: `docs/design-md-weight/migrated/cloudflare/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/cloudflare/provenance.md`
Date: 2026-08-25
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v8
Portable Core: pass (`node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/cloudflare/DESIGN.md --check --require-portable-core --json`, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage 옮김 → Experience Scope; `primary_color` 옮김 → Foundations Cloudflare Orange; logo 경계 문장 옮김 → Typography & Assets | Portable file has no frontmatter. Name kept as H1 `Cloudflare Design System`. Homepage `https://www.cloudflare.com` is dual Scope DESIGN.md:9,13 + provenance identity/surfaces/Tier 1 13,23,42,53,60,117 (E2a). Catalog `primary_color` `#F6821F` is dual identity + portable Foundations Cloudflare Orange / Primary / Brand DESIGN.md:96 (also token-note Scope 11, §4 footer 13, Distinctive 42; grep hits 11,13,21,42,51,53,64,94,96,101,126,302,360,473,488,576,591,775,777,780,782 + provenance 14,21,23,36,71,118) (E2a). Catalog logo type `simpleicons` / slug `cloudflare` is dual: provenance identity 15,23 + portable Typography & Assets identity-only sentence DESIGN.md:262 (`Catalog logo metadata is Simple Icons identity (cloudflare)`) (E2a). |
| YAML `omd`, `verified`, `added`, token claims, `tokens.source` / `extracted`, `components_harvested` | 분리 → provenance; `tokens.source: design-system` 옮김 → Experience Scope | Dual destination (E2a): portable Scope DESIGN.md:11 keeps `tokens.source: design-system`; provenance identity/freshness/Proof 17,23,114,120 keeps `design-system`, `extracted: 2026-06-08`, `components_harvested: true` 19,79,114, `verified` / `added` 2026-06-06. No `ds.type` on source; none invented (A1c) provenance 25,115. |
| YAML `tokens.note` | 옮김 → Experience Scope; 원장 분리 → provenance | Dual destination (E2a): portable Scope DESIGN.md:11 keeps Orange `#F6821F` rationed to one or two places, warm near-black, never pure `#000`; provenance keeps the source note. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. YAML unitless `lineHeight` 1.1 / 1.15 / 1.2 / 1.3 / 1.4 / 1.45 / 1.6 / 1.55 / 1.5는 비율로 보존 DESIGN.md:239,245–256 (A1a). Body px conversions (62px / 46px / 38px / 31px / 28px / 26px / 22px / 20px / 18px / 17px / 21px) stay in the Notes column; they are not a rewrite of the ratios. 검증된 primitive type은 컴포넌트별로 보존: button×6 DESIGN.md:300,334,357,379,402,423 + tab DESIGN.md:468 + card×6 (card/stat-card/surface/table/tooltip/code-block) DESIGN.md:617,652,625,664,747,677. `Kind: interactive`로 뭉개지 않음 (A1b). YAML `type: input` DESIGN.md:494,525,548 / `toggle` 572,597 / `badge` 689,699 / `dialog` 719 / `toast` 733도 컴포넌트별로 유지. Dark CTA / Marketing Feature Card / Pagination YAML type 없음 — Type 필드 미방출 (C4; `Type: omitted` 값으로 쓰지 않음). Primary hover `#E2700B` / pressed `#D9700F` / ghost hover `#FDF3E7` / danger hover `#A11F22`는 해당 컨트롤 필드이며 일반 Orange가 아님 (A4). YAML spacing xs 4 … section 64는 px 접미사 없이 dual Foundations Spacing DESIGN.md:130 + Layout 789; body 12px / 96px는 YAML 키가 아님. YAML rounded full 9999 vs body `9999px` 148; YAML shadow `0px` form DESIGN.md:156–159 vs body `0` form; YAML Primary 36px / `0 12px` / 8px vs §4 large 40px / 16px / 8px vs §9 `40px` / `0 20px` / 6px — 비평균 316. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위(marketing `https://www.cloudflare.com` DESIGN.md:9,13, named dashboard, kumo DESIGN.md:9 / cf-ui 9,220 / style-guide 9). Token/theme facts는 한정 없이. this-contract-covers 9, keep-orange-led-identity 13, must-not-collapse-second-grounding-path 15, atmosphere extras 19 문단 인접에 derived editorial implementation inference / not Cloudflare-authored or separately published UI specification 한정 (B2/B2a). Key characteristics는 Distinctive traits 40. |
| §1 공식 히스토리·미션 | 옮김 → Experience Scope; 서사 원장 분리 → provenance | 2009 Prince / Holloway / Zatlyn, Project Honey Pot, NYSE NET 2019, mission “to help build a better Internet”, R2 / AI inference는 공개 사실 DESIGN.md:17 (public-facts-not-interface-tokens B2a on 17). Dual Scope 17 + Content 811 + provenance narrative 75 (wording there is “help build a better Internet”) (E2a). 연표 URL은 원본에 없는 것은 발명하지 않음. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | YAML hex plus body pairs unmerged: `#E2700B` vs `#D9700F`; `#FDF3E7` vs `#FBE6CC` 99; `#2FB344` vs `#9BCA3E` 111; `#BD2528` vs `#E1351D` 112; `#F6C549` vs `#FFC107` 113; `#2C7CB0` vs `#0073AA` 114; `#717174` vs `#666666`; `#999999` vs `#A1A1A1`; `#EDEDED` vs `#F0F0F0`; `#F7F7F7` vs `#F5F5F5`; `#15171A` vs `#1D1F20`; `#262A2E` vs `#23272B`; `#F48120` body-only 100; dark popover `#2E3338` 121,173; muted dark `#9BA1A6` 120; skeleton `#2A2E33` 122,279. HTML-comment interpretive limiter dual Scope DESIGN.md:15 + Semantic DESIGN.md:94 + Motion 177 + Font 216/220 + Named gaps 866 + provenance (E1, E2a). Semantic unmerge lede 92; after-list component-fields 124; switch on-state split 126. |
| §3 Typography Rules | 옮김 → Typography & Assets | 다섯 증거 등급 DESIGN.md:216–224. YAML `Inter` / `JetBrains Mono`와 §3 fallback stacks 둘 다 유지 DESIGN.md:226–233. Inter Display는 declared-only. YAML unitless line-height 보존 (A1a) 239,245–256. Type-character 문단 인접 B2a DESIGN.md:235. 시스템 스택을 Inter로 표시하지 않음. Table-header `0.04em` vs eyebrow `0.06em` 258. |
| §3 Inter / JetBrains license | 없음 | 원본에 라이선스 문장 없음. 발명하지 않음. |
| §4 Component Patterns | 옮김 → Components & States | Buttons / inputs / switch / checkbox / cards / table / code / badge / status pills / dialog / toast / tooltip + additional patterns. Capture selector 없음 — 발명하지 않음. kumo `--color-kumo-brand` blue vs marketing orange split 유지. |
| §4 footer **Tier 1** / kumo / cf-ui / style-guide | 분리 → provenance; Tier 1 URL 옮김 → Experience Scope | Dual destination (E2a): homepage `https://www.cloudflare.com` is portable Scope DESIGN.md:9,13 + provenance surfaces/sources/Tier 1. `github.com/cloudflare/kumo` is portable Scope DESIGN.md:9 only (not 13) + provenance 43,54,61. `cloudflare.github.io/cf-ui` is portable Scope 9 + Font 220 + provenance 44,55,62. `developers.cloudflare.com/style-guide/components` is portable Scope 9 only (not 13) + provenance 45,56,63. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | 4px base / 8px rhythm, 1200px marketing, 240px nav, radius scale including 6px layout-standard vs 8px kumo button. Spacing YAML-without-px dual Foundations 130 + Layout 789. Shape §5 local scale limiter precedes the list 140. Whitespace 철학 문단 인접 B2a DESIGN.md:791 (B2/B2a). Logomark never-recolors / partner-logos grayscale-or-mono 인접 완전 B2a dual Assets 264 + Layout 806. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | Flat/subtle/raised/floating/modal + YAML `0px` tuples 156–159. tooltip `shadow-lg` not replaced 171. Border-first 독해 인접 B2a DESIGN.md:173 (B2/B2a). Dark popover `#2E3338` 유지 121,173. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙 DESIGN.md:62,64–70 (named-Do’s B2a on 62). Governance 통제 문구에 넣지 않음. Numbered editorial Principles와 분리. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지 DESIGN.md:74–84 (named-Don’ts B2a on 74; kumo-blue-split 77; last Avoid fallback 83). 미관측을 `not-applicable`로 바꾸는 근거가 아님 (C1). Last Avoid (fallback stack as Inter)는 재구성 경계이며 인접 B2a DESIGN.md:83. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | Breakpoints 640 / 1024 / 1280, collapsing, touch ≥40px / ≥44px / ≥32px, logo grayscale, logomark never recolors. 원본에 없는 최소폭 발명 없음. |
| §9 Agent Prompt Guide | 삭제; §9-only 고유값 옮김 → Components | 도구별 복붙 프롬프트 삭제. Color reference는 이미 Foundations에 있음. §9 example primary `40px` / `6px` / `0 20px`와 marketing-hero CTA `48px` / `6px`는 §4 8px / YAML 36px와 비합침으로 Primary / Dark CTA에 유지. DNS record row (white bg, 1px `#EDEDED` bottom border, type pill, 13px JetBrains Mono `#36393A`, proxy toggle, Proxied pill `#E8F5D8`/`#3D6B14`)는 §9 예시에만 있는 고유 근거값이라 Components additional patterns DESIGN.md:782으로 옮김 (A3). 슬롯 없는 위임 없음. |
| §10 Voice & Tone | mixed: mission line 옮김 → Content + provenance; derived 표/금지/독해 옮김 → Content (인접 B2a) | Mission “to help build a better Internet” dual portable Content DESIGN.md:811 + Scope 17 + provenance narrative 75 (ledger wording “help build a better Internet”) (E2a). Derived editorial copy-pattern table, forbidden list (including 100% guarantees), and voice reading sit under adjacent complete B2a DESIGN.md:813 and are not labeled Observed (B2/B2a, E1). 합성 보이스 샘플 없음 827. |
| §11 Brand Narrative | 옮김 → Experience `scope`; 서사 원장 분리 → provenance | 2009 창립, Honey Pot, 2019 NET, connectivity-cloud expansion은 공개 사실 DESIGN.md:17. Orange-as-democratizing-infrastructure 인과는 Scope 인접 B2a DESIGN.md:21 (named extras) (B2/B2a). |
| §12 Principles | 옮김 → Experience principles | 여덟 항목 전체가 editorial readings. 인접 본문에 derived editorial implementation inference / not Cloudflare-authored or a separately published UI specification DESIGN.md:51 (named stems+tails). Capture-bound application은 source §7 Do’s이며 그 한정 밖 62. Governance 일반 문구는 그 한정의 대체물이 아님 (B2/B2a, E1). |
| §13 Personas | mixed: 가상 biography 삭제·sidecar 재수록 없음; Audience는 배제 경계만 | 원본이 fictional archetypes라고 명시. Names/ages/cities/employers/biographies는 portable Audience에도 provenance에도 없음 (D2). Independently verified Primary tasks 3건은 §13이 아니라 YAML `use` / §4 Use: Get started / Add site / Save / Deploy; DNS records and proxy toggle; Overview / Analytics / DNS / SSL and analytics tiles (`count=3`) DESIGN.md:25–32 (named jobs B2a on 27). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: Empty first-use / Empty filtered / Loading first-paint / Loading refresh / Error inline / Error toast / Error page-level / Success toast / Status healthy / degraded / down / Disabled / Focus / Loading inside button DESIGN.md:271,275–288 (A2). 선언 컴포넌트는 §4.4를 역할로 닫되 미관측 시각값은 발명하지 않음. `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 (C1). loading·error·success 실제 판정 (C2; 이전 C1/C2 준수 주장은 과대였음): Primary Save/Deploy error/success applicable · treatment omitted 325–326; Destructive Delete/Purge error/success applicable · treatment omitted 395–396; Primary/Destructive loading applicable 324,394; Ghost 373 and Dark CTA 460 L/E/S omitted (mixed/unresolved destination; not N/A as navigation); Text/Mono/Select error applicable 515,540,564; loading/success omitted 517,542,566 (not N/A from capture absence); Compact 417 / Icon 437 / Marketing Feature Card 647 / Pagination 771 L/E/S omitted; Secondary/Tabs/Switch/Checkbox L/E/S 역할별 not-applicable. Named `Focus`는 `focus-visible` treatment로 승격하지 않음; focus-visible 행에 hex 없음 (B1) 290,328,504,505. `Type: omitted` / `Kind: omitted` 필드 미방출. Badge / Status Pill `Kind: non-interactive` 미방출. Marketing Feature Card Kind: interactive + map 630,640–644; Pagination Kind: interactive + map 758,764–768. Standard Panel / Stat / Surface / Data Table / Code Block / Tooltip / Dialog / Toast / Badge / Status Pill kind 필드와 map 생략 (C4). graph 위임 없음. State coverage 완료 주장 없음 (C3). |
| §15 Motion & Easing | 옮김 → Foundations motion; 무출처 커브 분리 → provenance omission ledger | Duration (`motion-instant` 0ms / `motion-fast` 120ms / `motion-standard` 200ms / `motion-emphasis` 300ms / `motion-page` 350ms), dialog-local 150ms 189,727, easing 이름/용도, signature motions 5 **with relation tails restored** (wave16 sol resubmit; prior “signature motions 5 kept” overclaimed because DESIGN.md:202–205 had truncated the interactive-cue / accessibility-first / leaving-quicker / never-a-hard-swap tails), `prefers-reduced-motion` 유지 DESIGN.md:177–208. Exact cubic-bezier `cubic-bezier(0.0, 0.0, 0.2, 1)` / `cubic-bezier(0.4, 0.0, 1, 1)` / `cubic-bezier(0.4, 0.0, 0.2, 1)` / `cubic-bezier(0.16, 1, 0.3, 1)`는 무출처(HTML 주석이 interpretive라 명시; 앞 셋은 `spec/omd-v0.1.md` 예시 표와 일치)라 portable에서 생략하고 provenance omission ledger에 보관 provenance.md:105–108 (E2b). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 표 밖 값을 승격한다는 게이트를 전문 명시 DESIGN.md:208. “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps가 같은 다섯 종류 게이트를 말함 DESIGN.md:864. |
| HTML comment (OmD v0.1 Sources) | mixed: brand-color refs·unreachable WebFetch·interpretive limiter·narrative 분리 → provenance; limiter·mission·founding 옮김 → Scope/Foundations/Content | Token grounding (Orange from public brand-color refs; Inter/JetBrains from named DS docs; dark mode `blog.cloudflare.com/dark-mode` provenance-only 70; founders/mission)는 provenance. `color.cloudflare.design` / cloudflare.com WebFetch unreachable은 dual Scope DESIGN.md:15 + Font DESIGN.md:216,220 + Named gaps 866 + provenance Tier 2 36,67 (E2a). Interpretive limiter on grey/semantic/dark hex, geometry, motion is dual Scope DESIGN.md:15 + Semantic 94 + Motion 177 + provenance (E1, E2a). Fictional-persona 경고는 Audience 배제 경계만 36; biographies not re-hosted (D2). |
| Footer **Verified** / Tier 1 | 분리 → provenance; URL 옮김 → Scope | freshness·원장. Dual as above. |

### F1 / F2 (v8 mandatory final passes)

Prior worker and F3 dest maps below are SUPERSEDED by `## Revision 2026-08-25 (wave16 sol resubmit)`. Worker/F3 completeness is not a current-class claim (E2c). This is not a catalog-adoption claim and is not a claim that no unqualified sentence remains (E2c). New F3 was not run.

### F1 B2a scan (F3 session; full DESIGN.md reread)

After a full reread of DESIGN.md, adjacent complete B2a sites match `provenance.md` Proof notes inventory: 9, 13, 15, 17, 19, 21, 27, 36, 40, 51, 62, 74, 77, 83, 92, 94, 124, 126, 130, 140, 148, 171, 173, 177, 189, 200, 216, 233, 235, 239, 258, 262, 266, 273, 292, 318, 420, 440, 446, 465, 491, 594, 600, 629, 634, 668, 713, 743, 774, 776, 798, 812. Governance Authority / priority / unknowns / changes are the controlled Core copy; they are not reconstruction readings and are not wrapped. Named gaps are unnamed-value inventory, not extra brand doctrine. B3 five-kind gate 208 is not wrapped. Per-control C2 reason table cells are Core applicability sentences, not extra B2a destinations. This is not a claim that no unqualified sentence remains (E2c).

### F2 grep (F3 session; value + field/role context)

F2 grep after F3 body/ledger writes (three files: DESIGN.md, provenance.md, migration-log.md):

- Homepage `https://www.cloudflare.com` → DESIGN 9,13 + provenance 13,23,42,53,60,117
- Catalog `primary_color` `#F6821F` → DESIGN 11,13,21,42,51,53,64,94,96,101,126,304,362,476,491,579,594,759,762,765,767 + provenance 14,21,23,36,71,118. Foundations Cloudflare Orange row is 96, not 92
- Token note / `tokens.source: design-system` → DESIGN 11 + provenance 17,23,114,120
- Simple Icons slug `cloudflare` → DESIGN 262 + provenance 15,23 (not 258)
- kumo URL → DESIGN 9 only (not 13) + provenance 43,54,61
- cf-ui URL → DESIGN 9,220 + provenance 44,55,62
- style-guide URL → DESIGN 9 only (not 13) + provenance 45,56,63
- `color.cloudflare.design` → DESIGN 15,216,220,851 + provenance 36,67
- `blog.cloudflare.com/dark-mode` → provenance 70 only
- Mission “to help build a better Internet” → DESIGN 17,796; provenance 75 wording is “help build a better Internet”
- YAML lineHeight 1.1/1.15/1.2/1.3/1.4/1.45/1.6/1.55/1.5 → Type roles 239,245–256
- `Type: button` 302/336/359/382/405/426; `Type: tab` 471; `Type: card` 620/646/659/673/748; `Type: input` 497/528/551; `Type: toggle` 575/600; `Type: badge` 686/697; `Type: dialog` 718; `Type: toast` 733; `Type: omitted` 446/634
- `#FBE6CC` 99, `#9BCA3E` 111, `#E1351D` 112, `#FFC107` 113, `#0073AA` 114, `#F48120` 100, `#2E3338` 121/173, `#2A2E33` 122/279, `#9BA1A6` 120
- YAML shadow `0px 1px 3px 0px` 156. §9 `0 20px` 148/308/318. DNS record row 767. §14 “No DNS records yet.” 277/766/808
- Named `Focus` ring `0 0 0 3px rgba(246,130,31,0.2)` 330/507/508; not on a focus-visible hex row
- Cubic-bezier values → provenance omission ledger 105–108 only, not portable Foundations as promoted curves
- B3 five-kind gate → Foundations Motion DESIGN.md:208 and Named gaps 849 (not 204/845)
- Primary tasks Get started / Add site / Save / Deploy, DNS/proxy, Overview/Analytics/DNS/SSL — DESIGN 27–32, not §13
- Devin/Priya/Marcus absent from DESIGN.md and provenance

### Revision 2026-08-25 (F3 B2a·E2 audit)

Not a catalog-adoption claim (E2c). Worker F1/F2 completeness is not a current-class claim. Post-F3 DESIGN SHA-256 `411c17c271d94896f2482763931fe6ef39f1ec5aa1eb9e0d588008a5f53256a4`. `--gate-only` PASS, problems []. Core `portable_core: true`. SUPERSEDED by the wave16 sol resubmit revision below.

## Revision 2026-08-25 (wave16 sol resubmit)

Fixed list only. Prior dest maps SUPERSEDED. New F3 not run. No F1/F2/F3 completeness claim (E2c). Not a catalog-adoption claim.

1. **C4 field omission.** Deleted every `Type: omitted` / `Kind: omitted` field. Deleted unfounded `Kind: non-interactive` on Badge and Status Pill. YAML type absent → Type field not emitted (Dark CTA, Marketing Feature Card, Pagination). `Type: omitted` / `Kind: omitted` now 0 hits in DESIGN.md.
2. **Interaction evidence restored.** Signature-motion relation tails restored at DESIGN.md:202–205 (hover-lift “cue that the surface is interactive”; “Accessibility-first; never suppressed for aesthetics”; “leaving is quicker than arriving”; “never a hard swap, so operators perceive the change”). Prior §15 “signature motions 5 kept” overclaimed truncated tails. Marketing Feature Card Kind: interactive + map 630,640–644 (hover from named hover-lift; focus-visible applicable, treatment omitted; L/E/S omitted 647). Pagination promoted to a component Kind: interactive + map as numbered compact buttons 755–771 (no YAML type invented).
3. **Exact-role L/E/S.** Primary Save/Deploy error/success applicable, treatment omitted 325–326. Destructive Delete/Purge error/success applicable, treatment omitted 395–396. Ghost 373 and Dark CTA 460 L/E/S omitted (unresolved destination; not N/A as navigation). Text/Mono/Select error applicable 515,540,564; loading/success omitted 517,542,566 (not N/A from capture absence). Prior C1/C2 compliance claims were stronger than the body.
4. **D1 negatives deleted.** native-app typography/chrome, Cloudflare-exclusive distributed font, first-party mark-file absence, and non-English locale-profile negatives removed from DESIGN, Named gaps, provenance, migration-log, and audit current-class. Simple Icons type/slug kept as identity-only 262 without a file-exists claim.
5. **Asset B2a.** Deleted the source-absent replacement-ban sentence. Adjacent complete B2a on “orange cloud logomark scales but never recolors” and “product/partner logos grayscale-or-mono in logo walls” at Assets 264 and Layout 806.
6. **card×6.** Canonical YAML `type: card` is card/stat-card/surface/table/tooltip/code-block. POST-EDIT `Type: card` 617 (panel/card), 652 (stat-card), 664 (table), 677 (code-block), 747 (tooltip); YAML surface `(type: card)` 625. Ledger was card×5; now card×6.

### F2 grep (POST-EDIT; this resubmit)

- Homepage `https://www.cloudflare.com` → DESIGN 9,13 + provenance 13,23,42,53,60,117
- Catalog `primary_color` `#F6821F` → DESIGN 11,13,21,42,51,53,64,94,96,101,126,302,360,473,488,576,591,775,777,780,782 + provenance 14,21,23,36,71,118. Foundations Cloudflare Orange row is 96
- Token note / `tokens.source: design-system` → DESIGN 11 + provenance 17,23,114,120
- Simple Icons slug `cloudflare` → DESIGN 262 + provenance 15,23
- kumo URL → DESIGN 9 only (not 13) + provenance 43,54,61
- cf-ui URL → DESIGN 9,220 + provenance 44,55,62
- style-guide URL → DESIGN 9 only (not 13) + provenance 45,56,63
- `color.cloudflare.design` → DESIGN 15,216,220,866 + provenance 36,67
- `blog.cloudflare.com/dark-mode` → provenance 70 only
- Mission “to help build a better Internet” → DESIGN 17,811; provenance 75 wording is “help build a better Internet”
- YAML lineHeight 1.1/1.15/1.2/1.3/1.4/1.45/1.6/1.55/1.5 → Type roles 239,245–256
- `Type: button` 300/334/357/379/402/423; `Type: tab` 468; `Type: card` 617/652/664/677/747 + YAML surface `(type: card)` 625; `Type: input` 494/525/548; `Type: toggle` 572/597; `Type: badge` 689/699; `Type: dialog` 719; `Type: toast` 733; `Type: omitted` 0; `Kind: omitted` 0; `Kind: non-interactive` 0
- `#FBE6CC` 99, `#9BCA3E` 111, `#E1351D` 112, `#FFC107` 113, `#0073AA` 114, `#F48120` 100, `#2E3338` 121/173, `#2A2E33` 122/277, `#9BA1A6` 120
- YAML shadow `0px 1px 3px 0px` 156. §9 `0 20px` 148/306/316. DNS record row 782. §14 “No DNS records yet.” 275/781/823
- Named `Focus` ring `0 0 0 3px rgba(246,130,31,0.2)` 328/504/505; not on a focus-visible hex row
- Cubic-bezier values → provenance omission ledger 105–108 only
- B3 five-kind gate → Foundations Motion DESIGN.md:208 and Named gaps 864
- Signature-motion tails → DESIGN 202–205
- Marketing Feature Card Kind: interactive 630; Pagination Kind: interactive 758
- Primary tasks Get started / Add site / Save / Deploy, DNS/proxy, Overview/Analytics/DNS/SSL — DESIGN 27–32, not §13
- Devin/Priya/Marcus absent from DESIGN.md and provenance
- `native-app` / `Cloudflare-exclusive` / first-party mark-file absence / non-English locale-profile negatives absent from DESIGN.md
- Logomark never-recolors / grayscale-or-mono B2a → DESIGN 264, 806
- Post-resubmit DESIGN SHA-256 `7993d30533db894c224c32192771f7ace4adbf9961e4a1d557f5948955eb842b`. `node test-v2/tools/migrate-reference.mjs --brand cloudflare --gate-only` PASS, `problems: []`. `node scripts/migrate-design-md-core.cjs --input docs/design-md-weight/migrated/cloudflare/DESIGN.md --check --require-portable-core --json` exit 0, `portable_core: true`. New F3 not run.
