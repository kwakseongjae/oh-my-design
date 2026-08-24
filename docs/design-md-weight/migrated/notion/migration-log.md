# Notion migration log

Source: `web/references/notion/DESIGN.md`
Destination: `docs/design-md-weight/migrated/notion/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/notion/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v2
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance | Portable file has no frontmatter. Name kept as H1 `Notion Design System`. Simple Icons logo is catalog identity, not a captured mark. |
| YAML `omd`, `verified`, `verification_v2`, token claims, `tokens.source` / `extracted` | 분리 → provenance | 출처 원장·freshness·Proof. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. `docs-layer`는 Help hover `#f9f9f8`로 한정. `help-search.fg` `#000000`은 Language-picker search의 renderable field로 유지하고 일반 Ink와 합치지 않음 (A4). |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | 세 public 표면, 화이트 캔버스, `#0075de`, NotionInter, 4–12px, Help chrome 경계. |
| §1 About / Careers URL | 분리 → provenance | 서사 출처. 본문은 토큰이 아니라고 밝힌 경계를 Experience에 유지. |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | `#0075de` `#005bab` `#0073d9` `#0071d6` `#ffffff` ink/muted/whisper + Help `#f9f9f8` / focus rings. 상태색은 ramp가 아님. |
| §3 Typography Rules | 옮김 → Typography & Assets | 증거 등급 5종, NotionInter 906, 역할 메트릭, declared-only 5종, fallback을 브랜드 페이스로 쓰지 않음. |
| §3 NotionInter asset URL | 분리 → provenance | `notioninter-assets`. 본문은 서비스 자산·재배포 허가 없음을 유지. |
| §4 Component Stylings | 옮김 → Components & States | Global/Hero/Hero-secondary CTA, Compact card, Bento tab, Circular carousel, Language trigger/search, Help toggle. capture selector는 provenance. |
| §4 Compact card | 옮김 → Components & States | default 기하만. interactive-kind 근거 없음 → kind와 applicability map 생략. |
| §4 Global CTA pressed/focus “raw values in `.verification.md`” | 옮김 → Components Observed + Named gaps | 값은 발명하지 않음. 셀렉터는 provenance. |
| §4 footer **Verified** / Tier 1 / Tier 2 / Resolution / Conflicts | 분리 → provenance | freshness·원장. `#455dd3` 제거 기록 포함. |
| §5 Layout Principles | 옮김 → Layout & Platforms | 4/8/12/16/24, marketing vs Help 밀도. grid/gutter/native-app는 원본대로 생략. |
| §6 Depth & Elevation | 옮김 → Foundations elevation | flat, card 1px border, carousel 4-layer shadow 범위 한정, Help dialog 미주장. |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | 데스크탑 측정이지 Notion breakpoint가 아님. |
| §9 Agent Prompt Guide — Quick reference | 도구 wrapper 삭제; 고유값 옮김 → Components | 도구 명령·복붙 형식은 삭제. Help search의 transparent field는 §9에만 있던 고유값이라 Language-picker search `Background: transparent`로 옮김 (A3). CTA/card 수치는 Components에 이미 있음. |
| §9 Implementation boundary | 옮김 → Experience principles / avoid | 세 표면 분리, fallback을 NotionInter로 보이게 하지 않음, 미관측 workspace 컴포넌트 대체 금지. |
| §10 Voice & Tone | 옮김 → Content & Locales | Do/Don't 표, 공식 예문 4개, source-bound 한정. 합성 에러/엠프티 카피 없음. |
| §11 Brand Narrative | 옮김 → Experience `scope` | 파편화된 도구 비판, building blocks, AI mission, careers humans+agents. 인증 workspace UI 증거가 아님을 본문에 유지. URL은 provenance. |
| §12 Principles | 옮김 → Experience principles | 다섯 공식 값 + UI implication. 별도 발행 UI 스펙이 아님을 본문에 한정. |
| §13 Personas | 삭제 | 추론된 product-role archetype. 검증된 task만 Experience `primary-tasks`/`Audience`. sidecar 재수록 없음. |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: 8행 표, empty/loading/error/success/skeleton/disabled 미관측·미지정. 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. Bento tab / carousel arrow / language trigger / Help toggle의 loading·error·success는 역할 의미로 `not-applicable`. graph 위임 없음. |
| §15 Motion & Easing | 옮김 → Foundations motion | 스냅샷만 있고 duration/easing/transition/animation 없음. visual state로 모션 스케일 제조 금지. 무출처 커브 없음(삭제할 값 없음). |

## Revision 2026-08-23 (sol spotcheck resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v2 (A3·A4·B1·C2·D1·E2). Source FAIL: `docs/reviews/t1-4-notion-2026-08-23-sol-spotcheck.md`.

| Item | Correction |
|---|---|
| Hero CTA, Hero secondary, Language-picker search `focus-visible` treatments | Retracted. `focus-visible` stays `applicable`; visual treatments removed from those rows (B1). Original generic `Focus` / `::state-focus` values (`#0071d6`, `#e7f3fe`/`#005bab`, Help blue double-ring plus focused computed `rgba(0,0,0,0.95)`) stay as additional observed states. |
| Help search transparent field deleted with §9 | Restored as Language-picker search `Background: transparent`. §9 tool wrapper remains deleted; this unique value had a Components slot (A3). Prior log said the Help value was already in Foundations/Components — that disposition was false (E2). |
| YAML `help-search.fg` `#000000` collapsed into general Ink | Restored as the Language-picker search renderable field. Focused computed `rgba(0,0,0,0.95)` remains a separate observed role (A4). |
| Bento tab, carousel action, language trigger, Help toggle loading/error/success | Retracted primitive-kind `applicable` (`Interactive control` / `Button control`). Rejudged by product role: all twelve rows are `not-applicable` with role meaning, not capture absence (C2). |
| Content & Locales / Named gaps `storefront` error/empty/support-copy coverage | Removed. Source scope is marketing / public product-marketing / Help chrome. That negative claim was not in the source (D1). |
