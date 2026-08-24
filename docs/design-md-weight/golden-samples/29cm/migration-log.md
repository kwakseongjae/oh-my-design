# 29CM migration log

Source: `web/references/29cm/DESIGN.md`
Destination: `docs/design-md-weight/golden-samples/29cm/DESIGN.md`
Provenance: `docs/design-md-weight/golden-samples/29cm/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T1-3
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity, logo, homepage, primary_color | 분리 → provenance | Portable file has no frontmatter. Name kept as H1 `29CM Design System`. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note` | 분리 → provenance | 출처 원장·freshness·Proof. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만. `#f4f4f4`는 비정규 증거로 provenance. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` + distinctive traits | 다섯 표면, editorial-commerce, 스케일 대비. |
| §2 Color Palette & Roles | 옮김 → Foundations | 7색 + sale-as-text 제약 + `#f4f4f4` 비승격. |
| §3 Typography Rules | 옮김 → Typography & Assets | Pretendard Variable, declared-only Campton/swiper-icons, 역할 표. |
| §4 Component Stylings | 옮김 → Components & States | Ghost Outline, Carousel Control, Product Grid Item, Editorial Story Item, Quantity Input. 68 variants는 인벤토리로 provenance에도 기록. |
| §4 footer Verified / Tier 1 / Tier 2 | 분리 → provenance | freshness·원장. |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | 밀도 분리, 2/4/8/16/24/28, radius 어휘. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | 표 전부 + shadow `none`. |
| §7 Do's | 옮김 → Experience principles / already-stated foundation rules | 브랜드 적용. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. |
| §8 Responsive Behavior (verified bullets) | 옮김 → Layout & Platforms | aspect ratio, 52px target, semantic list/button. 데스크탑 한계 명시. |
| §8 `[FILL IN: controlled multi-viewport capture required]` | 삭제 (최소 경계 생략) | 플레이스홀더를 새로 쓰지 않음. 대상 이름만 Governance named gaps에 값 없이 기록. |
| §9 Agent Prompt Guide | 삭제 | Quick token reference는 §2/§3 중복. Construction prompts는 도구별 명령. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | 관측된 인터페이스 언어 경계. 금지어·어미 발명 없음. |
| §11 Brand Narrative | 옮김 → Experience `scope` | “감도 깊은 취향 셀렉트샵”, editor-inside-a-store. 창립 신화는 원본대로 생략. |
| §12 Principles | 옮김 → Experience principles | “implementation inferences, not 29CM-authored” 라벨 보존. |
| §13 Personas | 옮김 → Experience audience + primary-tasks | 관측 과업만. 허구 인구통계 없음. sidecar 없음. |
| §14 States verified rows | 옮김 → Components & States “Verified treatments” | Default/Hover/Focus/Pressed/Disabled/Sale 본문 보존. |
| §14 Empty/Loading/Error/Success `[FILL IN]` 4행 | 삭제 (최소 경계 생략) | 플레이스홀더 미복사. 갭 이름은 Governance named gaps. §14 검증된 본문은 지우지 않음. |
| §14 pseudo-state 한계 문단 | 옮김 → Components & States | 본문 보존. |
| 선언 컴포넌트 7상태 표 | 옮김 (신규 구조, 값 발명 없음) | Core v2 §4.4. graph 위임 없음. |
| §15 `[FILL IN: no canonical motion…]` | 삭제 (최소 경계 생략) | 플레이스홀더 미복사. |
| §15 “Do not infer 150ms/250ms…” | 옮김 → Foundations motion | 발명 방지 제약. 무출처 커브 없음. |

## Revision 2026-08-23 (sol FAIL resubmit)

| Item | Correction |
|---|---|
| Ghost Outline hover/disabled/loading/error/success `not-applicable` (not named / not captured) | Retracted. Applicability follows button meaning; uncaptured treatments omitted. |
| Carousel Control loading/error/success `not-applicable` (not captured) | Retracted. Hover/focus/disabled stay captured `applicable`. The three uncaptured rows are `applicable` with omitted treatment. |
| Product Grid Item `Kind: interactive` + 7-state `not-applicable` table | Retracted. Source names a listItem with no state or interactive-kind evidence. Kind and the state-applicability map are omitted. |
| Editorial Story Item `Kind: interactive` + 7-state `not-applicable` table | Retracted. Same as Product Grid Item. |
| Quantity Input hover/disabled/loading/error/success `not-applicable` (not captured) | Retracted. Applicability follows input/field meaning; uncaptured treatments omitted. |
| First-pass log “값 발명 없음” for the 7-state tables | Semantic `not-applicable` / `Kind: interactive` confirmations were invented. This revision withdraws them. |
| §15 per-component computed transition/animation/duration/easing/reduced-motion promotion condition | Restored as a Foundations motion rule. Named gaps now name the same evidence gate. State coverage is not claimed complete. |
