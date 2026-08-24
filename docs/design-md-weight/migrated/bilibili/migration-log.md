# Bilibili migration log

Source: `web/references/bilibili/DESIGN.md`
Destination: `docs/design-md-weight/migrated/bilibili/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/bilibili/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v2
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance | Portable file has no frontmatter. Name kept as H1 `Bilibili Design System`. `#FB7299` stays catalog metadata, not a Foundations colour. Simple Icons logo is catalog identity, not a captured mark. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` / `note` | 분리 → provenance | 출처 원장·freshness·Proof. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. `secondary` `#61666d`는 search default text로 유지하고 일반 Foreground와 합치지 않음 (A4). `hairline` `#e3e5e7`는 focused/pressed fill + border candidate로 유지 (A4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 두 product route, 1440×900, feed/card 표현, bullet chatting은 서사이지 토큰이 아님. |
| §1 corporate URLs | 분리 → provenance | 서사 출처. 본문은 토큰이 아니라고 밝힌 경계를 Experience에 유지. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `#f1f2f3` `#ffffff` `#18191c` `#9499a0` `#61666d` `#e3e5e7`. pink/blue/coin/error/success/selected 생략 제약. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 5종, system stack 951, HarmonyOS declared-only 54+54, 역할 메트릭. fallback을 브랜드 페이스로 쓰지 않음. |
| §3 Huawei HarmonyOS URL | 분리 → provenance | HarmonyOS Sans source-domain boundary. 본문은 Huawei 자산이지 Bilibili 자산이 아님을 유지. |
| §4 Component Stylings | 옮김 → Components & States | Cover, stats strip, skeleton line, home search, feed roll. capture selector는 provenance. |
| §4 Video-card cover / stats / skeleton | 옮김 → Components & States | default 기하만. interactive-kind 근거 없음 → kind와 applicability map 생략 (C4). |
| §4 Home search / Feed roll | 옮김 → Components & States | interactive. §4.4 7상태. 미관측 시각값은 생략. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 248px × 140px, 10px info margin, 4px metadata margin, 4/8/16. grid/breakpoint/page-margin는 원본대로 생략. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | `box-shadow: none` 관측 범위만. dropdown/dialog/mini-player/hover lift/modal 생략. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms / 원문 placeholder wrapper → provenance omission ledger | 실질 제약(“one 1440×900 desktop capture only / no breakpoint, mobile, touch-target, or responsive-layout claim”)은 Layout & Platforms로. `[FILL IN — …]` wrapper 원문은 provenance “Source placeholders omitted from the portable file”에 보관. 값은 채우지 않음 (A1, E2b). |
| §9 Agent Prompt Guide — Evidence-safe prompt | 삭제 | 도구별 명령·복붙 형식. 카드/검색 수치는 §4에 이미 있음 (A3: 고유값 없음). “Do not add an unobserved CTA / focus / pressed / validation state”는 Experience avoid로 옮김. |
| §9 Boundary | 옮김 → Experience principles / avoid | 좁은 product-home 참조. corporate narrative·CDN declaration·historic catalog metadata를 토큰으로 올리지 않음. |
| §10 Voice & Tone | 옮김 → Content & Locales | 가이드 없음, “All the Videos You Like”, microcopy/error/mascot unverified. 합성 보이스 샘플 없음. |
| §11 Brand Narrative | 옮김 → Experience `scope` | 2009/2010, community pillars, mission, bullet chatting. URL은 provenance. |
| §12 Principles | 옮김 → Experience principles | 세 원칙과 UI implication. 세 UI implication은 공식 Bilibili UI doctrine이 아니며 별도 발행된 product-system 규격 밖이다. 공식 서사와 관측 표면에서 파생한 편집적 구현 해석이라는 B2/B2a 한정을 원칙 인접 portable 본문에 남김. |
| §13 Personas | 옮김 → Experience audience | 원문이 evidence-bounded stakeholder groups이며 fictional people가 아니라고 밝힘. 검증된 그룹만. sidecar 재수록 없음 (D2). |
| §14 States | 옮김 → Components & States capture record + per-component applicability / 원문 placeholder wrapper → provenance omission ledger | 본문 보존: Empty/Error/Success/Disabled는 플레이스홀더 값을 생략하고 “no … observation” 제약을 남김. Loading·Skeleton 값은 보존. Empty/Error/Success/Disabled 네 `[FILL IN]` wrapper 원문은 provenance omission ledger에 보관. 값은 채우지 않음 (A1, E2b). 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. Search focused/pressed 색은 추가 colour role이지 `focus-visible` treatment가 아님 (B1). Home search loading/error/success와 feed roll error/success는 역할 의미로 `not-applicable` (C2). Feed roll loading은 카드 셋 대기로 applicable. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations motion / 원문 placeholder wrapper → provenance omission ledger | 플레이스홀더 값은 생략. 실질 제약(“Do not infer hover, player, or celebratory motion from static component evidence”)과 컴포넌트별 computed evidence 승격 조건은 Foundations에 남김 (B3). `[FILL IN — the supplied capture reports no interaction expansion…]` wrapper 원문은 provenance omission ledger에 보관. 값은 채우지 않음 (E2b). 무출처 커브 없음(삭제할 값 없음). |
| Footer **Verified** / Tier 1 / Tier 2 / Conflicts | 분리 → provenance | freshness·원장. |

## Revision 2026-08-23 (wave1 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v3 (B2a · B3 명문화 · E2a–c). Source FAIL: `docs/reviews/t2-1-wave1-2026-08-23-sol-sample.md`.

| Item | Correction |
|---|---|
| §12 UI implications B2/B2a | Adjacent portable qualifier: the three *UI implication* notes are not official Bilibili UI doctrine and not a separately published product-system specification; they are editorial implementation interpretations derived from official narrative and observed surfaces. Governance’s general “not authority for an unrelated target” sentence is not that limit. |
| migration-log §12 | Records that the authority limit remains in the adjacent portable body. |
| §8 / §14 / §15 placeholder wrappers | Log now records the split: substantive constraints → portable destinations; original `[FILL IN]` wrappers → provenance omission ledger. Six wrappers remain quoted in provenance. No values filled (E2b). |
