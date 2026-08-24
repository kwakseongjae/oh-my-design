# Karrot migration log

Source: `web/references/karrot/DESIGN.md`
Destination: `docs/design-md-weight/golden-samples/karrot/DESIGN.md`
Provenance: `docs/design-md-weight/golden-samples/karrot/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T1-3
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity, ds, logo, country, category, homepage | 분리 → provenance | Portable file has no frontmatter. Name kept as H1. SEED URL kept as asset authority in Typography & Assets. |
| YAML `primary_color: "#ff7e36"` | 분리 → provenance | Identity metadata. 본문 토큰으로 승격하지 않음 (SEED Primary `#ff6f0f` / marketing `#ff6600`과 별개). |
| YAML `omd`, `verified`, `verification_v2`, token claims | 분리 → provenance | 출처 원장·freshness·Proof. |
| YAML `tokens.colors` including marketing | 옮김 → Foundations | SEED 시맨틱과 marketing CTA를 분리 보존. |
| YAML typography / spacing / rounded / components | 옮김 → Typography & Assets, Foundations, Components & States | 검증된 값만. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` + distinctive traits | 하이퍼로컬 범위, SEED vs marketing 표면 분리. |
| §2 Color Palette & Roles | 옮김 → Foundations | 전체 시맨틱 색 + marketing 예외. |
| §3 Typography Rules | 옮김 → Typography & Assets | System first family, Pretendard declared-only, 역할 표, 증거 등급. |
| §4 Component Stylings | 옮김 → Components & States | Marketing CTA + SEED Box Button / Text Field / Tabs / Snackbar. §4.4 7상태 표로 닫음. |
| §5 Layout Principles | 옮김 → Foundations spacing/shape + Layout & Platforms | 4px 그리드, 관측 클러스터, radius, whitespace. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `box-shadow: none`; 보편 shadow 없음. |
| §7 Do's | 옮김 → Experience principles / Foundations rules already stated | 브랜드 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms + component notes | 36px header pill, 40–48px deeper CTA, Box Button inset, Tabs hug/fill, Text Field wrap/clip. |
| §9 Agent Prompt Guide | 삭제 | Quick color reference는 §2 중복. Example prompts·Iteration Guide는 도구별 명령·프롬프트. 받을 슬롯 없는 위임 없음. 색 구분·System 타입·4/8/12/16/64는 이미 Core 필드에 있음. |
| §10 Voice & Tone | 옮김 → Content & Locales | 검증된 톤 표, 금지어, 라이브 샘플. |
| §10 illustrative samples | 삭제 | `illustrative: not verified as live Karrot copy`. 가상 카피를 본문·sidecar로 승격하지 않음. 원문 표시는 provenance에만. |
| §11 Brand Narrative (proximity, mission, refusals) | 옮김 → Experience `scope` | 현재 계약 해석에 기여하는 서사. |
| §11 연표·펀딩·유니콘·사용자 수·창업자 전기 | 분리 → provenance | 현재 계약 해석에 기여하지 않는 연표식 나열. |
| §11 6/10/50 km | 분리 → provenance | 원본이 디자인 제약으로 쓰지 말라고 함. |
| §11 HTML 주석 (editorial orange readings, 재검증 경고) | 분리 → provenance | Proof/freshness. |
| §12 Principles | 옮김 → Experience principles | 8개 전부. §3과 충돌하는 Pretendard 문구는 선택하지 않고 둘 다 보존. |
| §13 Personas (visible stakeholder bullets) | 옮김 → Experience audience + primary-tasks | 가상 biography 아님(본문 주장). |
| §13 HTML 주석의 허구 인구통계 아키타입 | 삭제 | 가상 persona. sidecar로 옮기지 않음. |
| §14 States | 옮김 → Components & States “Product surface states” | 표 본문 전부 보존. graph 위임 없음. 선언 컴포넌트는 별도 §4.4 표. |
| §15 durations | 옮김 → Foundations motion duration | 브랜드별 값 보존 (slow 350ms, page 300ms 포함). |
| §15 easing cubic-bezier 3개 | 삭제 | 무출처 템플릿 커브. `spec/omd-v0.1.md` `ease-enter` / `ease-exit` / `ease-standard`와 동일. 역할 이름·용도는 유지. duration·signature·reduced-motion은 유지. |
| §15 spring-forbidden + licensed PTR exception | 옮김 → Foundations motion roles | 원본 본문 규칙. |
| §15 signature motions + reduced-motion | 옮김 → Foundations | T1-3: 커브만 삭제. |
| Footer Verified / Tier 1 / Tier 2 / drift | 분리 → provenance | freshness·원장. |

## Revision 2026-08-23 (sol FAIL resubmit)

| Item | Correction |
|---|---|
| §15 spring-forbidden as an unconditional Foundations rule | Restored the source-comment authority limit in portable Foundations: derived editorial interpretation from brand posture, not a documented SEED rule. Provenance no longer holds that limit alone. |
| §13 four stakeholder-context bullets → primary-tasks + Audience | Retracted. Conflict (official contexts vs fictional archetypes) is unresolved. Portable claim is the independently verified task only: buy or sell nearby with locals (`count=1`). |
| Philosophy-comment fictional demographics in provenance | Removed. Not rehosted in provenance or a persona sidecar. |
| Marketing Primary CTA hover `not-applicable` (Hover not captured) | Reversed. Pointer-web CTA hover is `applicable`; visual treatment omitted. The other `Not captured` `not-applicable` rows on this CTA were retracted the same way. State coverage is not claimed complete. |
