# Linear migration log

Source: `web/references/linear.app/DESIGN.md`
Destination: `docs/design-md-weight/migrated/linear.app/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/linear.app/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v2
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage URL 옮김 → Experience `scope` | Portable file has no frontmatter. Name kept as H1 `Linear Design System`. Homepage `https://linear.app` is dual-destination: Experience Scope + provenance identity (E2a). Simple Icons logo is catalog identity, not a captured mark. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note`, `ds` | 분리 → provenance; home / Method / customers / pricing / brand URL 옮김 → Experience `scope` | 출처 원장·freshness·Proof. Homepage, Method, customers, pricing, and brand URLs remain in Experience Scope as well as provenance surfaces/sources/Tier 1 (E2a). |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. `primary-action.fg` `#08090a`는 컨트롤의 renderable field로 유지하고 일반 Canvas와 합치지 않음 (A4). Identity indigo `#5e6ad2`와 CTA fill `#e5e5e6`를 합치지 않음. YAML unitless `lineHeight` 1 / 1.33 / 1.6 / 1.5 / 1.71은 비율로 보존하고 본문 표의 고정 px 관측과 합치지 않음 (A1a). primary/secondary/nav의 검증된 `Type: button`은 `Kind: interactive`로 뭉개지 않고 컴포넌트별로 보존 (A1b). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 네 public 표면, `#08090a` 캔버스, Inter Variable, light-steel pill, 임베디드 프리뷰 경계. |
| §1 Method / brand 역할 문장 | 옮김 → Experience `scope` | 철학·아이덴티티 맥락. URL은 provenance. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `#5e6ad2` `#08090a` `#f7f8f8` `#d0d6e0` `#8a8f98` `#62666d` `#e5e5e6` `#1c1d1e`. Neon lime·prior hover indigo·generic success 생략 제약 유지. 8% white hairline, 5% white secondary fill. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 5종, Inter Variable 1,728, Berkeley Mono 6, Tiempos Headline 1회 관측, SF Pro declared-only, 역할 메트릭. 기록된 family 토큰 `Inter`와 live Inter Variable을 합치지 않음. 원본 표의 `Unresolved` 칸 라벨은 Portable Core placeholder 금지에 걸려 `Outside this capture`로만 바꿨고, authenticated workspace·native/desktop가 이 캡처 밖이라는 의미는 유지. YAML unitless line-height와 본문 표 computed px는 별 값으로 유지 (A1a). |
| §4 Component Stylings | 옮김 → Components & States | Primary/secondary public action, navigation trigger, embedded product menu row, customer story card. compact 32px variant는 local. nested 6px geometry 유지. |
| §4 Customer story card | 옮김 → Components & States | default 기하만. interactive-kind 근거 없음 → kind와 applicability map 생략 (C4). lime sibling은 editorial variant. |
| §4 65 variants / omitted inputs·dialogs | 옮김 → Components & States capture record | 5개만 canonical. 나머지는 원본대로 생략. |
| §5 Layout Principles | 옮김 → Layout & Platforms, Experience capture-bound application | luminance-before-borders, pill vs 6–8px preview, editorial/product alternate, 24–32px card padding. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | 저대비 레이어, primary-action shadow 값, 역할 한정. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | public reflow 유지. authenticated workspace breakpoints·desktop-client는 원본대로 미해상. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·복붙 프롬프트. `#08090a`·Inter Variable·pill CTA·6–8px preview·verified menu states 제약은 이미 Experience/Foundations/Components에 있음. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | concise/opinionated/operational 보이스. 합성 에러/엠프티 카피 없음. 원본에 없는 도메인 coverage 문구 신설 없음 (D1). |
| §11 Brand Narrative | 옮김 → Experience `scope` | 시스템으로서의 개발, Method, indigo vs neutrals, customer stories, 임베디드 프리뷰. 연표식 원장은 provenance. |
| §12 Principles | 옮김 → Experience principles | 네 원칙. 인접 본문에 derived editorial implementation inference / not Linear-authored or separately published UI specification 한정을 둠 (B2/B2a). Capture-bound application과 Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | 옮김 → Experience `primary-tasks` / Audience | public task context 3개만. 가상 biography·이름·규모·지표 없음. sidecar 재수록 없음 (D2). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: public nav focus/hover/pressed·expanded/menu-open 검증, embedded selected/open 검증, loading/empty/error/success/disabled workflow/command-palette 부재. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. Navigation trigger·embedded menu row의 loading·error·success는 역할 의미로 `not-applicable` (C2). generic focus는 `focus-visible` treatment로 승격하지 않음 (B1). graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations motion | Menu expansion은 state change이지 universal animation token 또는 animation-name 관측이 아님. Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시. 단일 curve/duration 확인은 그 게이트가 아님 (B3, E2c). 무출처 커브 없음(삭제할 값 없음). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance; Tier 1 public route URLs 옮김 → Experience `scope` | freshness·원장. Homepage / method / customers / pricing / brand URLs are dual Experience + provenance (E2a). Refero historical lime/indigo/radius는 현재 토큰으로 승격하지 않음. |

## Revision 2026-08-23 (wave1 full-review resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v4 (A1a–c · B2a 완전성). Source FAIL: `docs/reviews/t2-1-wave1-2026-08-23-sol-full.md`.

| Item | Correction |
|---|---|
| unitless `lineHeight` | Restored verified ratios 1, 1.33, 1.6, 1.5, 1.71 as Type-role line-height. Legacy body-table px (48px, 31.92px, 24px, 19.5px, 24px) remain named as size-local observations. 14 × 1.71 = 23.94, so technical-preview 24px is a rounding, not the token (A1a). |
| `Type: button` | Primary, secondary, and nav-trigger keep verified `Type: button` beside `Kind: interactive`. Product menu remains tab anatomy; customer card remains `Type: card` (A1b). |
| Principles B2/B2a | Adjacent portable qualifier now finishes the evidence class: derived editorial implementation inference / not Linear-authored or separately published UI specification. Capture-bound application is a scope note, not that class. |
| Foundations Motion B3 | Named the five evidence kinds and the per-component computed-observation gate. Menu expansion is not an animation-name observation. Named gaps match. |
| route URL dual destination | YAML identity, verification/freshness, and footer rows now record homepage + home/Method/customers/pricing/brand as Experience Scope + provenance (E2a). |
