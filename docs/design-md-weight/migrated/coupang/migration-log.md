# Coupang migration log

Source: `web/references/coupang/DESIGN.md`
Destination: `docs/design-md-weight/migrated/coupang/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/coupang/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v4
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; favicon 옮김 → Typography & Assets | Portable file has no frontmatter. Name kept as H1 `Coupang Design System`. Favicon `https://www.coupang.com/favicon.ico` is identity in provenance and a storefront asset in Typography & Assets (E2a dual destination). Catalog `primary_color` `#000000` matches observed Foreground. |
| YAML `ds` (name/url/type/description/og_image) | 분리 → provenance | 출처 원장. YAML `ds.type: brand` 보존 (A1c). `og_image` is identity metadata, not an interface token. Media-assets mark rules remain in Experience/Assets as standalone guidance (E1). |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` | 분리 → provenance | 출처 원장·freshness·Proof. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. `foreground-account` `#212b36`은 account-area list item의 renderable field이며 일반 Foreground `#000000`과 합치지 않음 (A4). YAML unitless `lineHeight` 1.5 / 1.25는 비율로 보존하고 본문 표의 24px / 21px / 15–32px / 16.5px와 합치지 않음 (A1a). YAML `type: listItem` 두 건은 컴포넌트별로 보존 (A1b). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 한국 커머스 스토어프론트 vs marketing/careers, 홈+제품 URL(제품은 minimal chrome), 흰 캔버스·검색 헤더. Careers 사실과 corporate/editorial ≠ token-source 경계는 유지. “Those ideas explain the dense, utilitarian register” 인과 해석은 삭제 (B2/B2a). Careers/Newsroom URL은 provenance. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `#ffffff` `#000000` `#555555` `#333333` `#212b36` `#e5e7eb` 및 Coupang-red / WOW / status / hover/pressed / `#E94B22` 생략 제약. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급, Apple SD Gothic Neo 시스템 스택 155, Coupang Sans corporate/careers only, 미디어 자산은 폰트 라이선스가 아님, Times 비승격. Times 증거 종류는 `Unresolved claim` (captured but uncorroborated unresolved claim)으로 유지. 비승격은 유지. 미확인 family 대체 금지. |
| §3 Coupang Sans / media-assets URL | 분리 → provenance; 본문에 자산·증거 등급으로도 유지 | 라이선스·서사 원장. 본문은 corporate/careers vs commerce 경계를 유지. |
| §4 Component Stylings | 옮김 → Components & States | Header menu control, search submit (`Type: button`), search input (`Type: input`), menu item (`Type: listItem`, not a tab), account utility (`Type: listItem`). YAML 기하와 본문 기하를 같은 슬롯에 유지. `Kind: interactive`로 listItem/button/input 구분을 뭉개지 않음 (A1b). Capture selector는 provenance. |
| §4 “Interactive machine components are omitted…” | 옮김 → Components & States capture record | 관측 default만 본문에 남김. 상호작용 머신 컴포넌트 부재는 관측 사실이지 coverage 완료가 아님 (C3). |
| §4 footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·원장. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 1440px 데스크탑, 351px search, 32px menu, header utility spacing. product-grid/breakpoint/sticky/card spacing은 원본대로 생략. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `box-shadow: none` 관측 범위만. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | No mobile viewport. breakpoint/grid/sticky/touch-target 미수립. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·복붙 프롬프트. 흰 사각 search 14px, menu controls, pale gray hairlines, red CTA/product card/font substitution/interaction 금지는 이미 Foundations/Components/Avoid에 있음. §9에만 있던 **delivery badge** 금지는 Experience avoid로 옮김 (A3). 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | careers 보이스, Do/Don't 표, 검증된 세 문장. 합성 storefront 보이스 샘플 없음. 원본에 없는 도메인 부정 claim 신설 없음 (D1). |
| §10 careers URL | 분리 → provenance | 보이스 출처. 본문은 corporate vs commerce copy 경계를 유지. |
| §11 Brand Narrative | 옮김 → Experience `scope` + Typography & Assets; URL·서사 원장 분리 → provenance | shopping/eating/living, future of commerce, Newsroom 영역 분리는 Experience Scope. Coupang Sans Display/Text cuts와 speed/legibility 맥락은 Typography & Assets 증거 등급·Assets에도 남김. Why Coupang / Newsroom / Coupang Sans URL과 corporate/careers vs commerce 서사 경계는 provenance (E2a 세 목적지: Experience + Typography & Assets + provenance). |
| §12 Principles | 옮김 → Experience principles | 세 리더십 원칙은 first-party careers/leadership 언어. *UI implication* 인접 본문에 derived editorial implementation inference / not Coupang-authored or separately published UI specification 한정을 둠 (B2/B2a). Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | mixed: no-persona 경계 옮김 → Experience Audience; 두 값 생략; wrapper 분리 → provenance omission ledger | 원본 본문 “No first-party persona research was collected… Do not fabricate customer archetypes or demographic facts”는 portable Audience에 유지. `[FILL IN: user-provided primary customer segment]` / `[FILL IN: user-provided commerce task and context]` 두 값은 최소 필드 생략. 원문 wrapper는 provenance omission ledger에 보관 (E2b). 가상 biography 승격 없음. sidecar 재수록 없음 (D2). Independently verified Primary tasks 2건은 §13 placeholder가 아니라 §4의 캡처된 homepage catalog search와 compact header menu/account-utility controls (`count=2`). |
| §14 States | 옮김 → Components & States capture record + per-component applicability; placeholder wrapper 분리 → provenance omission ledger | 본문 보존: only default captured; Empty/Loading/Error/Success/Skeleton/Disabled는 product-specific observation 전 명세 금지. `[FILL IN: no observed state]` 6개는 portable에 방출하지 않고 provenance 생략 원장에 보관 (E2b). 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1). Header menu control / search submit / search input / menu item / account utility의 loading·error·success는 역할 의미로 판정 (C2). graph 위임 없음. coverage 완료 주장 없음 (C3). |
| §15 Motion & Easing | 옮김 → Foundations motion; placeholder wrapper 분리 → provenance omission ledger | 무출처 커브 없음(삭제할 값 없음). `[FILL IN: product-specific motion evidence]`는 portable에 방출하지 않고 provenance 생략 원장에 보관 (E2b). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 승격한다는 게이트를 전문 명시. “공식 출처로 검증될 때까지” 약화 문구는 쓰지 않음 (B3, E2c). Named gaps가 같은 다섯 종류 게이트를 말함. |

## Revision 2026-08-23 (wave2 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v5 (B2a 예문 고정). Source FAIL: `docs/reviews/t2-1-wave2-2026-08-23-sol-sample.md` §1.

| Item | Correction |
|---|---|
| Times evidence class | Restored as `Unresolved claim` / captured but uncorroborated unresolved claim. Non-promotion is unchanged. The previous `Outside this capture` label is withdrawn (A1, E2). |
| Scope causal reading | Deleted “Those ideas explain the dense, utilitarian register…”. First-party careers facts and the corporate/editorial ≠ token-source boundary remain. No B2a-unqualified causal inference in Scope (B2/B2a). |
| §11 destinations | Log now records the actual three destinations: Experience Scope + Typography & Assets (Display/Text cuts, speed/legibility) + provenance URLs/narrative (E2a). |
| §13 disposition | Log now records mixed disposition: no-persona boundary → Audience; two unresolved values omitted; wrappers → provenance omission ledger. Primary tasks map to §4 captured controls, not §13 placeholders (E2). |
