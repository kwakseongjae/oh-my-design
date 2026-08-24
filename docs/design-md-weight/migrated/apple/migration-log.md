# Apple migration log

Source: `web/references/apple/DESIGN.md`
Destination: `docs/design-md-weight/migrated/apple/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/apple/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v2
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance | Portable file has no frontmatter. Name kept as H1 `Apple Design System`. Simple Icons logo is catalog identity, not a captured mark. |
| YAML `ds` (Human Interface Guidelines URL, type, description, og_image) | 분리 → provenance | 출처 원장. `ds.type: system` 포함 (A1c). 본문은 HIG 사이트 chrome ≠ native-platform guidance 경계를 Experience/Components에 유지. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note` | 분리 → provenance | 출처 원장·freshness·Proof. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. muted/secondary는 HIG documentation 한정. outline `transparent`는 Components field로 유지하고 Surface/Fog Canvas와 합치지 않음 (A4). 세 marketing component의 검증된 `Type: button`은 `Kind: interactive`로 뭉개지 않고 컴포넌트별로 보존 (A1b). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 세 evidence domain, 웹 팔레트/SF Pro/파란 액션, Liquid Glass는 native 서사·웹 토큰 아님. |
| §1 Key Characteristics | 옮김 → Experience distinctive traits | 600/31 uses, `#0071e3`/`#0066cc`/`#2997ff`, 44px/36px pills, 18px HIG card ≠ native. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | 10 role/value + native palette 추론 금지. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 5종, SF Pro Display/Text, 역할 메트릭, SF Mono declared-only, unresolved web→native mapping. |
| §4 Component Stylings | 옮김 → Components & States | Marketing Primary/Outline/Compact, Product Gallery Tab, HIG Reference Card. capture selector 없음 — 발명하지 않음. |
| §4 footer **Verified** / Tier 1 / Tier 2 / Surface split / Conflicts | 분리 → provenance | freshness·원장. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 마케팅 full-width vs store denser; 8/15, 11/21, 20px component-local. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | shadow 토큰 없음. 버튼/HIG card flat. 이미지가 깊이. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. hover/disabled/focus 미보유 시각 추론 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | 반응형은 있으나 universal breakpoint 없음. native는 HIG, 웹 기하 기계적 스케일 금지. |
| §9 Agent Prompt Guide — 복붙 CTA 문장 3개 | 삭제 | 도구별 명령·프롬프트. `#0071e3`/44px/980px/11px 21px, outline transparent `#0066cc`, compact 36px / 8px 15px는 이미 Components에 있음. 슬롯 없는 위임 없음. |
| §9 “When building a native app…” | 옮김 → Experience avoid | 브랜드 경계. 도구 wrapper가 아니라 native HIG 우선 규칙. |
| §10 Voice & Tone | 옮김 → Content & Locales | Simplicity/Craft/Delight, concise labels, privacy/safety 언어. 합성 CTA/에러 카피 없음. |
| §11 Brand Narrative | 옮김 → Experience `scope` + Typography & Assets (font evidence / SF optical family roles) + Content & Locales (HIG Simplicity / Craft / Delight language); URL·family 경계 분리 → provenance | HIG living system, 2025 Liquid Glass, SF Pro/Compact/Mono/New York optical roles. Liquid Glass는 native-platform 서사이지 apple.com computed token이 아님. HIG URL과 family-role 경계는 provenance narrative에도 남김 (E2a 이중 목적지). |
| §12 Principles | 옮김 → Experience principles | 다섯 구현 원칙. 인접 본문에 derived editorial implementation inference / not Apple-authored or separately published UI specification 한정을 둠 (B2/B2a). Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | 옮김 → Experience audience | 원문이 official HIG design contexts이며 invented demographic personas가 아님. 네 항목을 primary-tasks로 승격하지 않음. sidecar 재수록 없음 (D2). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: 마케팅 버튼 default·hover/pressed/disabled not retained; gallery selected/unselected; HIG card default only. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. 세 CTA / gallery tab / HIG card의 loading·error·success는 역할 의미로 `not-applicable` (C2). graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations motion | 웹 캡처에서 exact motion token 비승격. native는 platform HIG + reduced-motion support. Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시. 단일 curve/duration 또는 native HIG 문구 확인은 그 게이트가 아님 (B3, E2c). 무출처 커브 없음(삭제할 값 없음). |

## Revision 2026-08-23 (wave1 full-review resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v4 (A1a–c · B2a 완전성). Source FAIL: `docs/reviews/t2-1-wave1-2026-08-23-sol-full.md`.

| Item | Correction |
|---|---|
| provenance `ds.type: system` | Restored YAML `ds.type: system` in the identity ledger (A1c). Name, URL, description, and `og_image` were already present. |
| marketing `Type: button` | Three marketing CTAs keep verified `Type: button` beside `Kind: interactive`. `interactive` is not a substitute for the button primitive (A1b). |
| Principles B2/B2a | Adjacent portable qualifier now finishes the evidence class: derived editorial implementation inference / not Apple-authored or separately published UI specification. Governance’s general authority sentence is not that limit. |
| Foundations Motion B3 | Named the five evidence kinds (transition properties, animation name, duration, easing, reduced-motion behavior) and the per-component computed-observation gate. Native HIG + reduced-motion support remains implementation guidance, not a token promotion. Named gaps match that gate (B3, E2c). |
| §11 log destinations | Recorded the actual split: Experience scope + Typography & Assets family evidence + Content & Locales HIG language + provenance narrative/family boundary (E2a). |
