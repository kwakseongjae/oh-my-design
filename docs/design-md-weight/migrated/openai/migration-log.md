# OpenAI migration log

Source: `web/references/openai/DESIGN.md`
Destination: `docs/design-md-weight/migrated/openai/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/openai/provenance.md`
Date: 2026-08-23
Worker: grok-4.6 T2
Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v4
Portable Core: pass (`scripts/design-md-core.cjs` inspectDesignMd, `portable_core: true`, placeholders 0)

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (id, name, country, category, homepage, primary_color, logo) | 분리 → provenance; homepage URL 옮김 → Experience `scope` | Portable file has no frontmatter. Name kept as H1 `OpenAI Design System`. Homepage `https://openai.com` is dual-destination: Experience Scope + provenance identity (E2a). Catalog `primary_color` `#10a37f` stays identity metadata; portable Avoid restates that it is not the default primary-action fill `#0d0d0d`. Catalog favicon `https://www.google.com/s2/favicons?domain=openai.com&sz=128` is identity-only in provenance; it is not a portable Typography & Assets claim (E2a: not dual-destination). |
| YAML `omd`, `verified`, `added`, token claims, `tokens.source` / `extracted`, `components_harvested` | 분리 → provenance | 출처 원장·freshness·Proof. `tokens.source: prose-derived` is metadata (A1c). No `ds.type` on source; none invented. |
| YAML `tokens.colors` / `typography` / `spacing` / `rounded` / `shadow` / `components` | 옮김 → Foundations, Typography & Assets, Components & States | 검증된 값만 최소 필드 단위. Teal `#10a37f`와 default primary fill `#0d0d0d`를 합치지 않음. Warning `#f5a623`과 amber badge `#fdf0d5`/`#b8770f`를 합치지 않음 (A4). YAML unitless `lineHeight` 1.07 / 1.15 / 1.25 / 1.33 / 1.4 / 1.56 / 1.63 / 1.6 / 1.57 / 1.38은 비율로 보존하고 본문 표의 고정 px 관측과 합치지 않음 (A1a). 검증된 primitive type은 컴포넌트별로 보존: button ×5, input ×2, card ×2, listItem, badge-neutral / badge-teal / badge-amber 각 `Type: badge`, tab ×2, toast, dialog, toggle. `Kind: interactive`로 뭉개지 않음 (A1b). Neutral badge `Border: none` 보존. |
| YAML toast shadow `0 4px 16px rgba(0,0,0,0.16)` vs §6 Level 3 `0 4px 16px rgba(0,0,0,0.12)` | 옮김 → Foundations elevation + Components toast; 분리 → provenance Conflicts | 충돌 보존. 평균하거나 한쪽을 버리지 않음. |
| §1 Visual Theme & Atmosphere | 옮김 → Experience `scope` claim, distinctive traits | ChatGPT / API platform / openai.com 세 표면, dual light/dark, teal scarcity. “interface argues / well-set book” 문단 인접에 derived editorial implementation inference / not OpenAI-authored or separately published UI specification 한정 (B2/B2a). 2025 OpenAI Sans rebrand 이력은 third-party WebSearch corroboration으로 한정하고 official product-use로 승격하지 않음 (E1). |
| §2 Color Palette & Roles | 옮김 → Foundations semantic color | 전 hex 역할 보존. Brand lockup vs UI fill 분리. |
| §3 Typography Rules | 옮김 → Typography & Assets | OpenAI Sans 스택, Signifier research-only, SF Mono/Söhne Mono. 2025 rebrand/ABC Dinamo/Söhne/Signifier/Colfax 이력은 `Third-party-corroborated brand history` 증거 종류. Official product-use 행에 두지 않음. openai.com/brand HTTP 403은 Outside this capture (E1). YAML unitless line-height와 본문 표 computed px는 별 값으로 유지 (A1a). Söhne/system fallback을 브랜드 페이스로 표시하지 않음. |
| §4 Component Stylings | 옮김 → Components & States | Primary black/teal, secondary, ghost, pill, composer, form field, standard/interactive/dark card, user/assistant message, badge 3 variants, underline tab, segmented, toast, dialog, toggle. YAML 기하와 본문 기하를 같은 슬롯에 유지. Dark-mode primary는 Primary (Black)의 dark-surface variant. Error Field는 form-field error 상태로 흡수. |
| §4 Standard Card / Dark Card / User Message / Assistant Message / Dialog | 옮김 → Components & States | interactive-kind 근거 없음 → kind와 applicability map 생략 (C4). User Message `Type: listItem` 보존. Dialog `Type: dialog`와 검증된 geometry 보존. Dialog surface에 `Kind: interactive`와 7-state map을 발명하지 않음. |
| §4 Badge / Toast | 옮김 → Components & States | kind `non-interactive`; applicability map 생략 (C4). Neutral / Teal / Amber 각각 `Type: badge` (umbrella type 한 줄로 축약하지 않음, A1b). Neutral `Border: none` 보존. Toast `Type: toast` 보존. |
| §4 footer **Tier 1** openai.com live DOM | 분리 → provenance; URL 옮김 → Experience `scope` | freshness·원장. Homepage dual Experience + provenance (E2a). |
| §5 Layout Principles | 옮김 → Layout & Platforms + Foundations spacing/shape | 4px base, 4/8/12/16/24/32/48/64/96, 96–128px bands, 720px / 768px / 1200px, radius scale. “Whitespace is treated as the brand” 인접에 derived editorial implementation inference / not OpenAI-authored or separately published UI specification 한정 (B2/B2a). |
| §6 Depth & Elevation | 옮김 → Foundations elevation | 5-level table, borders-over-shadows, dark-mode tint, blur(12px) sticky header, flat modal scrim. Toast opacity 충돌은 위 행. Elevation philosophy 인접에 derived editorial implementation inference / not OpenAI-authored or separately published UI specification 한정 (B2/B2a). |
| §7 Do's | 옮김 → Experience principles (capture-bound application) | 브랜드 적용 규칙. Governance 통제 문구에 넣지 않음. |
| §7 Don'ts | 옮김 → Experience avoid | 브랜드 금지. |
| §8 Responsive Behavior | 옮김 → Layout & Platforms | 640 / 1024 / 1440 / 768 breakpoints, 48px/40px/36px/52px touch, drawer, hamburger, 12px generated-image corners, 24–40px avatars. |
| §9 Agent Prompt Guide | 삭제 | 도구별 명령·복붙 프롬프트. 색·버튼·composer 수치는 이미 Foundations/Components에 있음. 고유 값만 옮김 (A3): composer inline send/attach icons; model-card title 20px/600 `#0d0d0d` + description 15px/400 `#6e6e80`. 슬롯 없는 위임 없음. |
| §10 Voice & Tone | 옮김 → Content & Locales | 표 7행 + forbidden tone. 합성 보이스 샘플 없음. 원본에 없는 도메인 coverage 문구 신설 없음 (D1). Voice characterization 인접에 derived editorial implementation inference / not OpenAI-authored or separately published UI specification 한정 (B2/B2a). |
| §11 Brand Narrative | 옮김 → Experience `scope` | 현재 제품(ChatGPT, API, marketing), teal 한 점. 2025 OpenAI Sans/ABC Dinamo 이력은 third-party-corroborated brand history로만 옮김 (E1). 2015 창립자 나열·100 million users 연표는 범위에 기여하지 않아 생략. 서사 URL은 없음. |
| §12 Principles | 옮김 → Experience principles | 여덟 원칙. 인접 본문에 derived editorial implementation inference / not OpenAI-authored or separately published UI specification 한정을 둠 (B2/B2a). Capture-bound application과 Governance 일반 문구는 그 한정의 대체물이 아님. |
| §13 Personas | mixed: exclusion boundary 옮김 → Experience Audience; fictional names·ages·cities·biographies 삭제; sidecar 재수록 없음 | 원본이 fictional archetypes라고 명시. portable Audience는 “Source §13’s named fictional archetypes are not Audience and are not primary tasks” exclusion boundary를 유지. Maya/David/Priya 이름·나이·도시·biography는 삭제. sidecar 재수록 없음 (D2). Independently verified Primary tasks 3건은 §13이 아니라 composer/streaming, named CTA buttons, docs/API-key fields (`count=3`). |
| §14 States | 옮김 → Components & States capture record + per-component applicability | 본문 보존: 12행 표 (Empty×2, Loading×2, Streaming, Error×3, Success, Disabled, Focus, Selected). Error (rate limit) “Honest and specific, not apologetic boilerplate”와 Selected “a quiet highlight, not a colored bar” 의미 제약 보존 (A2). 선언 컴포넌트는 §4.4 7상태 표를 닫되 미관측 시각값은 발명하지 않음. Dialog는 kind/map 생략이라 C2 표를 닫지 않음 (C4). `not captured`를 `not-applicable` 사유로 쓰지 않음 (C1). 버튼/칩/composer loading·error·success, 탭/segmented/toggle의 loading·error·success는 역할 의미로 판정 (C2). generic `Focus`는 `focus-visible` treatment로 승격하지 않음 (B1). graph 위임 없음. State coverage 완료 주장 없음 (C3). |
| §15 Motion & Easing | 옮김 → Foundations motion; 무출처 커브만 삭제 | Duration 5개(0ms / 120ms / 200ms / 300ms / per-token)와 signature motion 4개(streaming, composer focus, menu/popover with source-stated `ease-out`, reduce motion)는 본문 보존. Token names `ease-out` / `ease-in` / `ease-standard`와 use (appearing menus/modals/toasts, dismissals, two-way hovers/tab/drawer)는 source-stated/uncomputed로 본문 보존. 무출처 cubic-bezier 3개만 삭제 — `ease-in` `cubic-bezier(0.4, 0.0, 1, 1)`은 legacy 규격 템플릿 `ease-exit`와 동일. 삭제한 커브 문자열은 provenance omission ledger에 보관 (E2b). Foundations Motion은 B3 다섯 증거 종류(transition properties · animation name · duration · easing · reduced-motion behavior)를 컴포넌트별 computed 관측한 뒤에만 curve/animation-name/transition-property를 승격한다는 게이트를 전문 명시. 단일 curve/duration 확인은 그 게이트가 아님 (B3, E2c). |
| HTML comment OmD v0.1 Sources | 분리 → provenance | freshness, 403, WebSearch corroboration, prose-derived, fictional personas, editorial readings. OpenAI Sans history는 third-party-corroborated evidence class로 portable Font evidence에 남기고 official product-use로 승격하지 않음 (E1). 해석 한정은 portable Principles와 Principles 밖 retained editorial block 인접에도 남김 (B2/B2a). |

## Revision 2026-08-23 (wave2 sol resubmit)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` v5 (B2a 예문 고정). Source FAIL: `docs/reviews/t2-1-wave2-2026-08-23-sol-sample.md` §2.

| Item | Correction |
|---|---|
| Neutral Badge `Border: none` | Restored on Badge (Neutral). Unknown/omission is not `none` (A1). |
| badge ×3 primitive type | Neutral / Teal / Amber each keep `Type: badge`. Umbrella `Type: badge` one-liner withdrawn (A1b). |
| OpenAI Sans history | Moved from `Official product-use` to `Third-party-corroborated brand history`. 403 caveat is Outside this capture, not official authority (E1). |
| B2a outside Principles | Adjacent complete qualifier on Scope “interface argues / well-set book”, Elevation philosophy, Layout whitespace, type-character reading, and Voice/tone notes. Principles eight-item qualifier does not cover those blocks (B2/B2a). |
| §14 meaning constraints | Restored rate-limit “Honest and specific, not apologetic boilerplate” and Selected “a quiet highlight, not a colored bar” (A2, E2c). |
| Dialog C4 | `Type: dialog` and verified geometry kept. `Kind: interactive` and 7-state map omitted (C4). |
| Favicon | Identity-only in provenance. Portable Assets favicon sentence removed so the log’s provenance-only claim matches the body (E2/E2a). |
| §13 disposition | Log records mixed: exclusion boundary → Audience; fictional names/ages/cities/biographies → 삭제; no sidecar. Primary tasks map to composer/CTA/docs, not §13 (E2). |
| Easing names / use / `ease-out` | Restored `ease-out` / `ease-in` / `ease-standard` names and uses, and menu/popover `ease-out` association, as source-stated/uncomputed. Three cubic-bezier curves remain omitted in provenance (A1, E2/E2c). |
