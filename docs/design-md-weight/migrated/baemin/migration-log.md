# Baemin migration log

Source: `web/references/baemin/DESIGN.md`
Destination: `docs/design-md-weight/migrated/baemin/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/baemin/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v2
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance | Portable file has no frontmatter. Name kept as H1 `Baemin Design System`. Favicon URL also in Typography & Assets. |
| YAML `ds` (Woowa Font Catalog name/url/type/description) | 분리 → provenance; catalog URL 옮김 → Typography & Assets | 출처 원장. 본문은 catalog/license를 공식 배포 자산으로 유지. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note` | 분리 → provenance | 출처 원장·freshness·Proof. Token note의 surface-local 한정은 Typography/Experience 본문에 유지 (B2/E1). |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. `BAEMINWORK`는 공식 앱 패밀리로 유지하고 baemin.com System / Woowa Pretendard Variable과 합치지 않음 (A4). `corporate-disabled` `#cccccc`는 일반 Ink가 아니라 corporate disabled text (A4). App-download `13.3333px / 400`은 Baemin Web Button `16px / 700`과 합치지 않음 (A4). 7개 component의 검증된 `Type: button`은 `Kind: interactive`로 뭉개지 않고 컴포넌트별로 보존 (A1b). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 제품/표면 범위, mint `#0cefd3`, WORK, 공공 폰트 프로그램, Baemin 2.0. 분위기 반복은 범위에 기여하는 요약만. |
| §1 공식 2.0 발표·폰트 프로그램 | 본문 한정 유지; URL 분리 → provenance | 서사는 토큰이 아니라고 밝힌 경계를 Experience/Typography에 유지. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | baemin.com `#0cefd3` `#ffffff` `#222222` `#000000` `#f6f6f6`와 Woowa/font `#232324` `#6c6d6f` `#f3f4f5` `#cccccc` `#a6a7a9` on-dark `#ffffff`를 표면별로 유지. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 5종, WORK 공식 앱 패밀리, 라이브 System/Pretendard Variable, Hanna–Kkubulim 표, 역할 메트릭, 라이선스 조건. 원본 증거 등급명 `Unresolved`는 portable placeholder 금지 때문에 `Outside this capture`로 투영. 생략 대상(native-app scale/weights, loadable WORK specimen)은 유지. 미확인 family 대체 금지. |
| §3 폰트 카탈로그·라이선스 URL | 분리 → provenance; 본문에 자산으로도 유지 | 라이선스 원장. 본문은 파일만으로 권한을 추론하지 말라는 규칙을 유지. |
| §4 Component Patterns | 옮김 → Components & States | 7개 컴포넌트 anatomy·variant·observed default. 원본에 capture selector 없음 — 발명하지 않음. |
| §4 footer **Verified** / Tier 1 / Tier 2 / Surface split / Conflicts | 분리 → provenance | freshness·원장. Surface split은 Typography/Experience 본문에도 해석 한정으로 남김 (E1). |
| §5 Layout Principles | 옮김 → Layout & Platforms | 6px/20px baemin.com, 8/12/16/20/24/32 Woowa. native ordering-app grid/breakpoint/touch-target는 원본대로 생략. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | 그림자 토큰 없음, flat/border/translucent overlay. 옛 five-tier app-shadow 제거 조건 보존. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. `#2ac1bc`, black pill CTA, WORK 대체 금지 포함. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | 공개 웹은 responsive이나 universal breakpoint 없음. native-app responsive/touch는 device-inspectable 증거 전까지 unresolved. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·복붙 프롬프트. 54px/12px/14px 19px/`#222222`/13.3333px/400, WORK specimen 불가, Woowa `#232324`/8px, 2.0 명확성 규칙은 이미 Components/Typography/Experience에 있음. 슬롯 없는 위임 없음 (A3). |
| §10 Voice & Tone | 옮김 → Content & Locales | 4행 톤 표, 검증된 표현, 슬로건을 UI filler로 재사용하지 말 것. 합성 보이스 샘플 없음. |
| §11 Brand Narrative | 옮김 → Experience `scope` | 2010 전화→앱, Hanna 공공 폰트, Baemin 2.0 mint+WORK, 식지 않게 하라는 미션. 연표 URL은 provenance. |
| §12 Principles | 옮김 → Experience principles | 다섯 구현 원칙. 인접 본문에 derived editorial implementation inference / not Baemin-authored or separately published UI specification 한정을 둠 (B2/B2a). Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | 옮김 → Experience Audience | 공식 stakeholder 3그룹(customers / restaurant owners / riders)은 Audience. restaurant-owner·rider 필요 문장은 Primary tasks로 승격하지 않음 — source §13에 source id/URL이 없음. Independently verified task는 §1/§11 + `baemin-app-rebrand` 미션 1건 (`count=1`). 가상 biography 없음. sidecar 없음 (D2). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: 4행 표, other retained buttons default only, missing states explicitly unclaimed. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. App-download / nav / read-more×2 / family-site selector / carousel의 loading·error·success는 역할 의미로 `not-applicable`. Font download loading·error는 파일 다운로드 역할로 `applicable`, success는 catalog available/unavailable 의미로 `not-applicable`. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations motion | duration/easing 미승격, native-app motion unresolved. Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시. 일반적 web-transition 관측이나 단일 curve/duration 확인은 그 게이트가 아님 (B3, E2c). 무출처 커브 없음(삭제할 값 없음). |

## Revision 2026-08-23 (wave1 full-review resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v4 (A1a–c · B2a 완전성). Source FAIL: `docs/reviews/t2-1-wave1-2026-08-23-sol-full.md`.

| Item | Correction |
|---|---|
| component `Type: button` | All seven components keep verified `Type: button` beside `Kind: interactive`. `interactive` is not a substitute for the button primitive (A1b). |
| Principles B2/B2a | Adjacent portable qualifier now finishes the evidence class: derived editorial implementation inference / not Baemin-authored or separately published UI specification. |
| Foundations Motion B3 | Named the five evidence kinds (transition properties, animation name, duration, easing, reduced-motion behavior) and the per-component computed-observation gate. Generic web-transition language is not that gate. Named gaps match. §15 log no longer over-claims B3 (E2c). |
| §13 dual destination | Log and provenance recorded `Primary tasks + Audience` and removed the false Audience-only claim. That dual-destination mapping is superseded by the wave1 recheck resubmit: restaurant-owner·rider needs stay Audience-only because source §13 cites no source id/URL. |

## Revision 2026-08-23 (wave1 recheck resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v4 (A1a–c · B2a 완전성). Source FAIL: `docs/reviews/t2-1-wave1-2026-08-23-sol-recheck.md`.

| Item | Correction |
|---|---|
| §13 restaurant-owner·rider tasks | Retracted as user-outcome tasks. Source §13 names official stakeholder contexts but cites no source id or URL, so those operational-need bullets have no independently verified first-party task mapping. Portable Primary tasks is the independently verified Baemin 2.0 mission only: keep what people need from going cold by ordering through the app (`count=1`), mapped to `baemin-app-rebrand` / `baemin-rebrand-official` (https://www.woowahan.com/report/detail/975?page=1) and Experience scope from source §1/§11. The three §13 groups remain Audience. Log and provenance match that split (E2a). |
