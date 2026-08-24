# Toss migration log

Source: `web/references/toss/DESIGN.md`
Destination: `docs/design-md-weight/migrated/toss/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/toss/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v2
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance | Portable file has no frontmatter. Name kept as H1 `Toss Design System`. Catalog `primary_color` `#0064ff` stays identity metadata; the portable Avoid restates that it is not UI primary `#3182f6`. Catalog favicon `https://static.toss.im/icons/png/4x/icon-toss-logo.png` is identity-only in provenance; it is not a portable Typography & Assets claim (E2a: not dual-destination). |
| YAML `omd`, `verified`, `ds`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note` | 분리 → provenance | 출처 원장·freshness·Proof. Token note (TDS vs `toss.im` 분리)는 Foundations에도 계약으로 남김. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. 마케팅 `weak-background`/`weak-foreground`는 제품 Primary와 합치지 않음 (A4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 두 시스템(TDS Mobile / `toss.im`), 제품 범위, 현재 표현. 반복 분위기 문장은 범위에 기여하는 요약만. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | 제품 역할 11색 + 마케팅 weak pair. `#0064ff`를 `#3182f6`으로 치환하지 않음. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 5종, Toss Product Sans 810, 역할 메트릭, Tossface declared-only, 미확인 family 대체 금지. 원본 표의 단독 `Unresolved` 셀은 Portable Core placeholder 검사에 걸리므로 등급 이름을 `Outside this capture`로만 바꿨고, 셀 본문(재배포·네이티브 메트릭 미해상)은 그대로 둠. |
| §3 라이선스·재배포 미해상 | 옮김 → Typography unresolved / Named gaps | 값은 발명하지 않음. |
| §4 Component Stylings | 옮김 → Components & States | TDS Button / Text Field / Badge / Agreement, marketing-primary, marketing-dark. YAML 기하와 본문 기하를 같은 슬롯에 유지. 검증된 primitive type은 컴포넌트별로 보존: button / input / badge / toggle / button / button. `Kind: interactive`로 뭉개지 않음 (A1b). |
| §4 TDS Badge “descriptive rather than interactive” | 옮김 → Components & States | kind `non-interactive`; applicability map 생략 (C4). |
| §4 footer **Verified** / Tier 1 / Tier 2 / Surface split / Conflicts | 분리 → provenance | freshness·원장. Surface split 수치(56px/16px vs 40–46px/7px)는 Layout에도 계약으로 남김. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | 4/6/8/16/24/32 작업 스케일, TDS vs marketing 기하 분리. grid/breakpoint는 원본대로 생략. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | 무출처 shadow 비승격, flat color layering 제약. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. `#0064ff` 치환 금지 포함. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | 터치 xlarge 유지, 마케팅 40px/46px 높이 보존, breakpoint/max-width/safe-area 미수립. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·복붙 프롬프트. 버튼/CTA 수치와 Toss Product Sans·Tossface 제약은 이미 Components/Typography에 있음. 고유 제약 “component not listed → mark as extension”만 Experience principles로 옮김 (A3). 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | Easy to answer / Value first, cost later, 직접적 회복 카피. 합성 보이스 샘플 없음. 원본에 없는 storefront/support-copy 부정 claim 신설 없음 (D1). |
| §11 Brand Narrative | 옮김 → Experience `scope` | 연결 금융 경험, 제품 브랜딩=사용 경험, Toss Product Sans 제품 문제. 연표식 원장은 없음. |
| §12 Principles | 옮김 → Experience principles | 다섯 구현 원칙. 인접 본문에 derived editorial implementation inference / not Toss-authored or separately published UI specification 한정을 둠 (B2/B2a). Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | 옮김 → Experience `primary-tasks` | 원본이 first-party product contexts이며 invented demographic personas가 아니라고 명시. 세 항목을 user-outcomes로 흡수. 가상 biography 없음. sidecar 재수록 없음 (D2). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: 4행 표. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1). TDS Button error/success, Text Field loading/success, Agreement loading/error/success, 두 marketing CTA loading/error/success는 역할 의미로 판정 (C2). graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations motion | 무출처 커브 없음(삭제할 값 없음). duration/easing 비승격. Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시. “공식 출처로 검증될 때까지 local extension” 약화 문구는 폐기 (B3, E2c). |

## Revision 2026-08-23 (wave1 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v3 (B2a · B3 명문화 · E2a–c). Source FAIL: `docs/reviews/t2-1-wave1-2026-08-23-sol-sample.md`.

| Item | Correction |
|---|---|
| Foundations Motion B3 | Replaced the weakened “official component source / local extension” gate with the five evidence kinds (transition properties, animation name, duration, easing, reduced-motion behavior) and the per-component computed-observation requirement. Official documentation of one curve or duration is not that gate. |
| migration-log §15 | Updated to match the actual portable B3 boundary (E2c). Named gaps now name the same five-kind gate. |
| YAML logo / catalog favicon | Decision: identity-only. Removed from portable Typography & Assets. Provenance retains `https://static.toss.im/icons/png/4x/icon-toss-logo.png`. Not dual-destination (E2a). |

## Revision 2026-08-23 (wave1 recheck resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v4 (A1a–c · B2a 완전성). Source FAIL: `docs/reviews/t2-1-wave1-2026-08-23-sol-recheck.md`.

| Item | Correction |
|---|---|
| component primitive `Type` | Six verified types are kept per component beside `Kind`: TDS Button `button`, Text Field `input`, Badge `badge`, Agreement `toggle`, marketing-primary `button`, marketing-dark `button`. `Kind: interactive` is not a substitute for the primitive (A1b). |
| Principles B2/B2a | Adjacent portable qualifier now finishes the evidence class: derived editorial implementation inference / not Toss-authored or separately published UI specification. “derived from the verified surfaces, not quoted corporate doctrine” was incomplete (B2a). |
