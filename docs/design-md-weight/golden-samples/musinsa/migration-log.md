# Musinsa migration log

Source: `web/references/musinsa/DESIGN.md`
Destination: `docs/design-md-weight/golden-samples/musinsa/DESIGN.md`
Provenance: `docs/design-md-weight/golden-samples/musinsa/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T1-3
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance | Portable file has no frontmatter. Name kept as H1 `Musinsa Design System`. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note` | 분리 → provenance | 출처 원장·freshness·Proof. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위, 현재 표현, 2025 STORE BI. 반복 분위기 문장은 범위에 기여하는 요약만. |
| §1 공식 히스토리·BI URL | 분리 → provenance | 서사 출처. 본문은 토큰이 아니라고 밝힌 경계를 Experience에 유지. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `#000000` `#ffffff` `#666666` `#ebebeb` 및 sale/error 등 생략 제약. |
| §3 Typography Rules | 옮김 → Typography & Assets | Pretendard 증거 등급, 패밀리, 역할 메트릭. 미확인 패밀리 대체 금지. |
| §3 Pretendard license URL | 분리 → provenance | 라이선스 원장. 본문은 OFL 1.1과 “폰트 자산이지 무신사 브랜드 자산이 아님”을 유지. |
| §4 Component Stylings | 옮김 → Components & States | 4개 컴포넌트 anatomy·variant·observed default. capture selector는 provenance. |
| §4 “prior generic inventory not retained” | 옮김 → Components & States capture record | 현재 계약이 아님을 보존. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 4/6/8/24, square unpadded image, 24px article padding. grid/breakpoint/gutter는 원본대로 생략. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `box-shadow: none` 관측 범위만. |
| §7 Do's | 옮김 → Experience principles | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | 데스크탑 측정이지 cross-viewport 규격이 아님. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·프롬프트. 정사각형 이미지·14px/400·색 제약은 이미 Foundations/Components에 있음. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | 뉴스룸 서사와 “Bolder Than Ever: The New MUSINSA”. 합성 보이스 샘플 없음. |
| §11 Brand Narrative | 옮김 → Experience `scope` | 2001 스니커 커뮤니티 → MUSINSA.com / Magazine / Store, 2025 STORE BI≠CI. 연표 URL은 provenance. |
| §12 Principles | 옮김 → Experience principles | 세 원칙과 UI implication. |
| §13 Personas | 옮김 → Experience audience | 이해관계자 그룹만. 가상 biography 없음(원본도 없음). sidecar 승격 없음. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: interaction coverage 0, empty/loading/error/success/skeleton/disabled/focus/pressed 미관측. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations motion | “No motion token is promoted” 제약. 커브 없음(삭제할 무출처 커브도 없음). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·원장. |

## Revision 2026-08-23 (sol FAIL resubmit)

| Item | Correction |
|---|---|
| Capture record “other canonical states are `not-applicable` until captured” | Retracted. Applicability is judged by control meaning. Missing capture omits the visual treatment only. State coverage is not claimed complete. |
| Global-navigation Store Link hover/disabled/loading/error/success `not-applicable` (reason: not captured / coverage 0) | Retracted. All five are `applicable`; visual treatments omitted. |
| Home Search Input hover/disabled/loading/error/success `not-applicable` | Retracted. All five are `applicable`; visual treatments omitted. |
| MUSINSA STANDARD Product-image Link hover/disabled/loading/error/success `not-applicable` | Retracted. All five are `applicable`; visual treatments omitted. |
| MUSINSA STANDARD Product Utility Button hover/disabled/loading/error/success `not-applicable` | Retracted. All five are `applicable`; visual treatments omitted. |
