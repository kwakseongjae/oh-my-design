# GitLab migration log

- Source: `web/references/gitlab/DESIGN.md` (legacy, omd 0.1) — 수정하지 않음
- Sibling: `web/references/gitlab/.verification.md` — **존재함**(`find`로 확인), 전문 판독, **증거 등급으로만 채택**. 상세는 provenance `Sibling verification file (E2)`.
- Destination: `docs/design-md-weight/migrated/gitlab/DESIGN.md`
- Provenance: `docs/design-md-weight/migrated/gitlab/provenance.md`
- 규칙집: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v11**
- 대응표: `docs/design-md-weight/2026-08-22-essence-verdict.md` / 제약: `docs/reviews/t1-2-essence-2026-08-23-rereview.md` 27–33행 / 의미 조건: `docs/reviews/t1-3-golden-2026-08-23-sol-review.md` §5
- 형태 모범: `docs/design-md-weight/golden-samples/musinsa/`
- Portable Core: **pass** — `scripts/design-md-core.cjs` `evaluatePortableCore`, `level: "portable-core"`, `portable_core: true`, `reasons: []`, placeholder 0, `projection.locale`/claim `lang` 모두 `en`
- 도메인: developer-tools. **증거 영역이 둘**이다 — 마케팅 chrome(`about.gitlab.com`)과 **공개 발행 디자인 시스템 Pajamas**(`design.gitlab.com` + button/badge/text-input 3개 컴포넌트 페이지). 원본 자신의 token note와 conflict matrix가 두 영역을 분리해 두었고(버튼 radius 8px/4px를 병합하지 않고 둘 다 유지), 이관본도 값마다 도메인을 붙여 병합하지 않았다.

`provenance.md`의 `Claim ledger`가 모든 값의 원본 위치와 portable 목적지를 색인한다. 아래 표의 각 행은 **portable 목적지**와, 색인을 넘어 provenance가 값 자체를 보관하는 경우의 **추가 목적지**를 함께 적는다(E2a).

## A5a — 발행 카피 손 대조 (규칙집 v11 신설)

게이트 `coverage`: `copy-loss` **compared 0 / candidates 252**. 원본이 전량 라틴이라 비라틴 런 바늘이 하나도 만들어지지 않았다 — 즉 이 브랜드에서 A5는 **기계로 한 번도 대조되지 않았다**. `verdict: PASS`는 카피 보존의 증거가 아니다. 그래서 손 스윕을 했다.

| 단계 | 수치 |
|---|---|
| 추출 (게이트와 동일한 `QUOTED_COPY` 정규식) | 원본 `DESIGN.md` **252**개 인용 문자열 + sibling `.verification.md` **151**개 = 두 파일 전수 |
| 그중 **브랜드 발행 문자열**로 판정한 바늘 | **47**개 (헤드라인·페이지 타이틀·CTA 라벨·nav 라벨·proof stat·제품/브랜드 명칭·상태 계약이 고정한 금지 문구·금지 레지스터 예시·원본이 스스로 editorial이라 지목한 문구·창업자 이름·sibling이 측정 대상으로 명기한 카피) |
| 바늘이 아니라고 판정해 제외 | 나머지 — hex·치수·CSS 선언·셀렉터(`.btn-confirm`·`.gl-form-input` 등)·점 경로·폰트 스택·카피에 대한 서술(`marketing top nav`·`border rendered as inset shadow` 등)·원본이 스스로 제3자 결과로 격리한 Tier 2 문자열 |
| 미생존 | **1**건 — `SAST/DAST` |
| 처리 | 아래 참조. 나머지 46건은 산출 3파일에 바이트 그대로 생존(실측). |

**미생존 1건의 처분.** 그 문자열은 원본에서 **오직 §13 페르소나 전기 안에만** 등장한다. 관측된 표면 카피가 아니라 가상 인물의 동기 서술이므로 **브랜드 발행 문자열이 아니다.** D2에 따라 fictional personas 3인, §13 전체와 함께 삭제했고, 제품 능력 명칭으로 승격해 portable 본문에 되살리지 않았다. provenance `Omission ledger`의 §13 행과 이 행이 그 처분이다.

**보조 도구 대조.** `node test-v2/tools/latin-copy-audit.mjs --brand gitlab` 최초 실행: 후보 **49**건 중 **5**건 미생존(high 2 / medium 3) — `0 12px`, `14px GitLab Sans`, `1px solid #2f68b4`, `1px solid #bfbfc3`, `1px solid #c02f12`. 5건 모두 **발행 카피가 아니라 토큰 블록의 표기 변형**이었다(원본 자신이 YAML에서는 `"0 12px"`, §4 본문에서는 `Padding: 0px 12px`로 같은 값을 두 표기로 적는다). 표기를 왜곡해 회피하지 않고(E3), provenance에 `Token-block component strings (verbatim)` 표를 신설해 11개 컴포넌트 키의 토큰 블록 필드를 **바이트 그대로** 보관했다. 재실행 결과 `withLoss: 0 / totalLost: 0`.

## legacy 섹션별 처리

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country`, `category`, `homepage`, `primary_color`, `logo`) | 분리 → provenance · 일부 옮김 → DESIGN.md | 이중 목적지. Portable 파일에 frontmatter 없음. `name`은 H1 `# GitLab Design System`. `primary_color` `#1f75cb`는 provenance Identity 표와 DESIGN.md Foundations `Semantic color` 양쪽. `logo.type: simpleicons` / `slug: gitlab`은 provenance `Identity`·`Logo decision`에만 — Simple Icons는 제3자 아이콘 세트라 GitLab 배포 자산이 아니고, portable Assets에는 브랜드 마크 색(`#fc6d26`)과 「제3자 렌더링이라는 판정은 이 이관의 증거 판단」이라는 문장만 남겼다. |
| YAML `verified` / `added` / `omd` / `tokens.source: live-extract` / `tokens.extracted` / `components_harvested: true` | 분리 → provenance | freshness·증거 등급 원장(E1). A1c: `components_harvested: true`와 `tokens.source: live-extract`를 원장에서 누락하지 않았다(provenance `Identity` 표 각 1행). |
| YAML `tokens.note` (긴 문자열) | 분리 → provenance (인용 블록, 전문) · 값은 옮김 → DESIGN.md | 이중 목적지. 안의 값(`#1f75cb` `#fc6d26` `#7759c2` `#171321`, 마케팅/Pajamas 도메인 귀속)은 전부 Experience `Scope`·Foundations `Semantic color`에 별도로 실려 있다. note가 세운 도메인 분리를 Scope의 「Two boundaries」 문단이 근거로 인용한다. |
| YAML `tokens.colors` (**32키** — `grep -c` 아님, `awk`로 `colors:` 블록의 들여쓰기 4칸 키를 세어 32) | 옮김 → Foundations `Semantic color` | 5개 표 = primary&brand 4 / ink&dark 4 / text 5 / neutral&surface 7 / semantic 12 = **32 데이터 행**(헤더 5행 제외, 실측 32 = 32). §2의 role 이름과 설명 문자열은 `Recorded use` 열에 보존. `on-primary` `faint` `muted-alt` `surface-tint` `purple-tint` `dark-deep` `ink-strong` `tier-text` `danger-border` `warning-text` 등 키 이름은 provenance `Claim ledger`에 각 1회. |
| §2 Color Palette & Roles — 5개 소제목 · 불릿 24개 | 옮김 → Foundations `Semantic color` | 소제목 5개를 표 5개로 그대로 옮겼고 각 불릿의 설명을 `Recorded use`에 보존. semantic tint+text 쌍의 고정성(“each semantic has a fixed tint+text pair”)은 표 머리와 Avoid 양쪽에. |
| §2 `#ececef` / `#a4a3a8` / `#fbfafd` (팔레트가 아니라 컴포넌트 상태 값) | 옮김 → hex별로 목적지가 갈라짐 (전부 portable 본문) | A4: 이 값들을 일반 neutral role로 합치지 않고 「팔레트가 아니라 컴포넌트 상태 값」이라고 명시한 뒤 컴포넌트에 붙였다. `#ececef` — Foundations `Semantic color` 말미 · Components `Default (Secondary) Button` (State record **0**). `#a4a3a8` — Foundations `Semantic color` 말미 · Foundations `Elevation` 표·산문 · Components `Default (Secondary) Button` (State record **0**). `#fbfafd` — Foundations `Semantic color` 말미 · Components `Default (Secondary) Button` · Components `State record`. |
| YAML `tokens.typography.family` (`sans: "GitLab Sans"`) + §3 Font Family(폴백 스택 포함) | 옮김 → Typography & Assets `Font evidence` · `Family` | 폴백 스택 `-apple-system, system-ui, Segoe UI, Roboto, Noto Sans`을 브랜드 페이스로 제시하지 않는다는 경계를 `Font evidence` 별도 행과 `Family` 불릿 양쪽에 남겼다. |
| YAML `tokens.typography` 6역할 (size / weight / **unitless** lineHeight / tracking / use) + §3 Hierarchy 표 6행 | 옮김 → Typography & Assets `Type roles` | A1a: `lineHeight` 5종(`1.04` `1.12` `1.33` `1.50` `1.43`)을 px로 바꾸지 않고 비율 그대로 보존했다 — 산출 doc 실측 `1.04`×1 `1.12`×1 `1.33`×2 `1.50`×1 `1.43`×1. 원본이 스스로 적은 px 등가(`100px`, `24px`)만 괄호로 병기. rem 등가 6종(`6.00rem` `2.00rem` `1.13rem` `1.00rem` `0.88rem` `0.75rem`)과 tracking(`-2.88px` `-0.64px`)도 그대로. UI 역할의 weight는 YAML `400`과 §3 표 `400-425`가 다르므로 병합하지 않고 표에는 `400-425`, 그 아래 문장에 「토큰 블록은 400, 표는 400-425」로 두 표기를 다 남겼다(`425` 산출 doc 3회). |
| §3 Principles 4항 | 옮김 → Typography & Assets `Typography rules` | 실측 4항. 항목 안의 인과(무엇을 *위한* 굵기·트래킹인가)가 편집적 읽기라 B2a 완전형 한정을 절 머리에 인접 배치. |
| YAML `tokens.spacing` 8키 + §5 Spacing System | 옮김 → Foundations `Spacing` (+ Layout & Platforms) | 이중 목적지. 4px/8px 기준 단위와 8단계 스케일(4·8·12·16·24·32·48·64). 키 이름은 provenance `Claim ledger`에 `{ xs: 4, sm: 8, md: 12, base: 16, lg: 24, xl: 32, xxl: 48, section: 64 }`로 verbatim. |
| YAML `tokens.rounded` 4키 + §5 Border Radius Scale + §5 Grid의 `14px radius` | 옮김 → Foundations `Shape` | 5행 표로 도메인을 붙여 보존: 4px 마케팅 / 8px Pajamas / **14px** 드롭다운 nav-card 그리드 / 16px 마케팅 카드 / Pill `full: 9999 (160px / full)`. YAML `full: 9999`는 Shape 값 칸에 착지(산출 DESIGN.md `full: 9999` 1 · `9999` 1). 14px과 16px을 하나의 card radius로 합치지 않았다. 이전 서술(본문은 160px만, `full: 9999`는 provenance-only)은 `Revision 2026-08-28 (wave27 review)`가 대체. |
| §6 Depth & Elevation 5행 표 + Shadow Philosophy | 옮김 → Foundations `Elevation` | 5행 그대로(실측 헤더 포함 6행). YAML `tokens.shadow` 2키(`inset-border` `elevated`)도 같은 절에 문자열 그대로. Philosophy의 마지막 두 문장(“emphasis comes from color … not from stacked elevation”)이 측정에 목적을 부여하는 읽기라 B2a 완전형 한정을 그 문단 끝에 인접 배치. |
| YAML `tokens.components` 11개 (`type: button` ×4, `badge` ×4, `card` ×2, `input` ×1 — `grep -o 'type: [a-z]*' \| sort \| uniq -c` 실측) | 옮김 → Components & States | A1b: primitive type을 컴포넌트마다 `Primitive type: \`button\`/\`input\`/\`card\`/\`badge\``로 보존. 배지 4개는 tint+text 쌍만 다르므로 `Status Badge (Pajamas)` 한 레코드의 6 variant 표로 묶되, **네 토큰 블록 키를 이름으로 명시**하고(`badge-info`·`badge-success`·`badge-danger`·`badge-tier`, 각 `type: badge`) 네 레코드를 provenance `Token-block component strings (verbatim)`에 개별 보존했다. `type: simpleicons` 1건은 컴포넌트가 아니라 `logo.type`이라 위 logo 행에서 처리. |
| §4 Buttons 6종 / Inputs & Forms / Cards & Containers 2종 / Badges 6종 / Navigation | 옮김 → Components & States | 컴포넌트 레코드 9개(Confirm·Danger·Default·Tertiary Confirm·Marketing Ink CTA·Marketing White CTA·Text Input·Nav/Feature Card·Dark Proof-Stat Card) + Status Badge 6 variant + Navigation record. §4에만 있고 YAML에 없는 2종(Tertiary Confirm, Marketing White CTA)도 값 그대로 보존하고, primitive type이 토큰 블록에 없다는 사실을 각 레코드와 Governance `Named gaps`에 적었다. |
| §4 Navigation (흰 배경, inactive `#74717a`, active `#171321`, 16px/400, 4px nav 히트영역 / 8px Pajamas docs nav) | 옮김 → Components & States `Navigation record` | YAML 컴포넌트 항목이 아니라 배치 서술이라 별도 레코드로. nav 라벨 "Platform" · "Product" · "Why GitLab"은 바이트 그대로. |
| §4 하단 footer 블록 (**Verified** / Tier 1 5개 URL / Tier 2 2건 / Conflicts unresolved: none) | 분리 → provenance | freshness·출처 원장(E1). Tier 1 5개 URL과 각 URL의 원문 범위 주석, Tier 2 두 시도의 결과 문자열(`"gitlab — 0 DESIGN.md files"`, `"No designs found for \"gitlab\"."`)까지 provenance `Sources`에 보존. |
| §5 Layout Principles (Spacing System / Grid & Container / Whitespace Philosophy / Border Radius Scale) | 옮김 → Layout & Platforms + Foundations | Grid & Container 5불릿과 Whitespace 3불릿은 Layout에, Spacing System과 Border Radius Scale은 Foundations에(이중 배치 아님 — 서로 다른 내용). Whitespace 3항이 측정에 목적을 부여하는 읽기라 B2a 완전형 한정을 세 불릿 바로 뒤 문단에 인접 배치. |
| §7 Do 8항 | 옮김 → Experience `Application rules` | 실측 8항. 브랜드 적용 규칙이므로 Governance 통제 문구에는 넣지 않음(제약 3). 항목 안의 근거가 편집적 읽기라 B2a 완전형 한정을 절 머리에 인접 배치. |
| §7 Don't 8항 | 옮김 → Experience `Avoid` | 실측 8항, 원문 그대로, 이유까지 보존. 이관이 넣었던 9번째 범위 경계(`product application` 부정 claim)는 `Revision 2026-08-28 (wave27 review)`에서 삭제. |
| §8 Responsive Behavior (Breakpoints 4행 / Touch Targets 4항 / Collapsing Strategy 4항 / Image Behavior 3항) | 옮김 → Layout & Platforms `Responsive behavior` | 4행 그대로(`<640px` / `640-1024px` / `1024-1280px` / `>1280px`, 실측 헤더 포함 5행). 터치 타깃(32px / 45–47px / 20px+6px)·접힘·이미지 거동 전부 보존. 절 끝에 「이 규칙들은 원본이 각 폭에 대해 진술한 의도이고, 나머지 토큰 값은 한 번의 라이브 관측에서 왔다」는 경계를 남겼다. viewport 값 자체는 sibling 소유라 provenance에만 둔다(B1). |
| §9 Agent Prompt Guide — Quick Color Reference (불릿 11행) | 삭제 | 같은 값의 도구용 재진술. 열거된 hex가 전부 Foundations `Semantic color` 32행에 role·value·use로 이미 실려 있음(실측 대조 후 삭제). |
| §9 Example Component Prompts 5개 · Iteration Guide 7항 | 삭제 + 고유값 1건은 이동(A3) | 복붙용 프롬프트 포장과 도구별 workflow는 받을 슬롯이 없으므로 삭제(산출 doc에서 `Quick Color Reference`·`Example Component Prompts`·`Iteration Guide`·`Create a Pajamas confirm button` 각 0회 실측). 다만 §9에만 있던 렌더 가능한 값 1건 — 다크 proof-stat 카드의 타이포 — 은 Components `Dark Proof-Stat Card`의 `Typography` 행에 「the large stat is set in GitLab Sans 660 and the caption at 16px / 400」으로 옮겨 적혀 있다(그 문장 DESIGN.md 1회; 원본 §9 인용형 `Large stat in GitLab Sans 660, caption in 16px/400`은 DESIGN.md 0회 · provenance Omission ledger 1회). 나머지 §9 값(8px·32px·14px·`0 12px`·4px·`#1f75cb` focus ring 등)은 §2·§3·§4에 이미 존재. |
| §10 Voice & Tone — 성격 규정 문단 + Context/Tone 6행 표 | 옮김 → Content & Locales | 표 6행 그대로(실측 헤더 포함 7행). voice 해석(“transparent, direct, and quietly confident”를 투명성 자세와 연결하는 읽기)은 원본 닫는 주석이 editorial reading이라 밝힌 계열이라 B2a 완전형 한정을 표 바로 앞 문단에 붙이고, 그 한정이 아래 tone 표까지 덮는다고 명시했다. |
| §10 Voice samples 3건 (verbatim) | 옮김 → Content & Locales (+ provenance) | A5: 3건 전부 바이트 그대로 — "Ship faster. With trust."(doc 4회 · provenance 1회), "Finally, AI for the entire software lifecycle.", "4 hours saved per engineer per week". `*(verified live 2026-06-17)*` 표기만 provenance `Freshness`로 분리(doc 0회 · provenance 2회 실측). |
| §10 Forbidden register | 옮김 → Content & Locales | 원문 그대로 — "revolutionary" · "game-changer" · "radically transparent" · "gated or evasive copy" 포함. |
| §11 Brand Narrative 3문단 | 옮김 → Experience `Scope` (3번째 문단) | 2011 Dmitriy Zaporozhets, 2014 Sytse "Sid" Sijbrandij / CEO, 단일 애플리케이션 DevSecOps 플랫폼, 2021 Nasdaq IPO, all-remote, radical transparency, 공개 handbook과 Pajamas(“tokens, usage, Vue implementation”)까지 보존. 3문단의 refuses/embraces 쌍("trust us" 자세 거부 포함)도 인용 그대로 옮기고 「이것은 편집적 읽기」라는 한정을 바로 뒤에 붙였다. 증거 등급(원본 닫는 주석의 “widely documented public facts; not quoted from a single verified GitLab statement in this turn”)은 본문과 provenance `Narrative sources` 양쪽 — 이중 목적지. |
| §12 Principles 5항 (+ 각 UI implication) | 옮김 → Experience `Principles` | 실측 5항. B2a 완전형 한정을 절 머리에 인접 배치하고, 원본 닫는 주석이 editorial이라 지목한 "one color, one job"·"flat and structural"을 그 한정 문장에서 이름으로 지목했다. |
| §13 Personas 3인 | **삭제 (sidecar 재수록도 안 함)** | D2 / D2a. fictional personas 3인, §13, D2 삭제. 원본 §13 머리글과 닫는 주석이 둘 다 fictional archetypes이며 이름은 illustrative라고 명시. 이름·나이·도시·전기는 본문에 승격하지 않았고 provenance에도 재수록하지 않았다. Experience `Audience`에는 두 캡처 표면이 독립적으로 세우는 그룹(마케팅에서 평가하는 실무자 / Pajamas로 구현하는 빌더)만 남기고 그 그룹핑이 파생 판단임을 인접에 적었다. |
| §14 States 9행 | 옮김 → Components & States `State record` + 컴포넌트별 applicability 사유 | 이중 목적지(둘 다 portable 본문). 9행 값·카피 그대로(실측 9행) — "Something went wrong" · "Required" 금지 문구, `#fbfafd`/`#74717a`/`#dcdcde` 로딩·비활성 값, `#a32c12` on `#fdd4cd` 에러 배너, `#306440` on `#c3e6cd` 성공 배지, `#dd2b0e` 폼 에러 보더 포함. 같은 내용을 근거로 interactive 컴포넌트의 disabled/loading/error/success 사유를 채웠다. graph 위임 없음. |
| §15 Durations 3행 (`motion-fast` 100ms / `motion-standard` 200ms / `motion-slow` 320ms) | 옮김 → Foundations `Motion` | 3행 그대로. 규칙집의 삭제 범위는 **무출처 커브뿐**이고 duration은 브랜드마다 다르므로 보존. 다만 sibling의 method와 26개 raw sample 어디에도 transition·animation·duration·easing 관측이 없으므로 B2a 완전형 한정을 이 절 머리에 붙이고, 그 한정의 주어를 「읽는 행위」가 아니라 **motion contract 자체**(durations · easing roles · motion rules)로 두었다. |
| §15 Easings — 역할 3개와 use | 옮김 → Foundations `Motion` | `ease-enter` / `ease-exit` / `ease-standard`와 각 용도 3행 보존. |
| §15 Easings — 커브 값 3개 (`cubic-bezier(0.2, 0.6, 0.25, 1)`, `cubic-bezier(0.4, 0.0, 1, 1)`, `cubic-bezier(0.25, 0.1, 0.25, 1)`) | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. 실측: 원본 3회 · 산출 `DESIGN.md` **0회** · `provenance.md` 4회(원장 1행이 세 값을 담고 규격 인용 1건). `cubic-bezier(0.4, 0.0, 1, 1)`은 `spec/omd-v0.1.md`가 스스로 「비브랜드 구현 기본값이며 reference로 옮기지 말 것」이라 규정한 예시 표의 값과 동일하다. 역할과 용도는 본문에 남겼다. |
| §15 Motion rules 4항 | 옮김 → Foundations `Motion` | 4항 그대로 — 기능적/절제된 모션, `motion-standard / ease-enter` 드롭다운, `motion-fast` 버튼 프레스, no bounce/spring/overshoot, `prefers-reduced-motion: reduce` 계약 포함. |
| B3 — 미해상 motion의 승격 조건 | 신규 작성 → Foundations `Motion` | 원본에는 승격 조건 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. E2c 대조: 그 전문(“…transition properties, animation name, duration, easing, and reduced-motion behavior have been observed”)이 산출 `DESIGN.md`에 실제로 **1회** 존재함을 `grep -c`로 확인한 뒤 이 행을 적었다. 약화 문구(“공식 출처로 검증될 때까지”)는 쓰지 않았다. |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하 기술 | 옮김 → Experience `Scope` 1·2문단 | 두 표면을 분리 명시하고 값은 표면에 붙였다. 2문단의 성격 규정(ink-forward, editorial, restrained geometry)에는 문단 끝에 B2a 완전형 한정을 인접 배치. |
| §1 인과·해석 문장(“splits cleanly across two surfaces that share one identity”, “engineering tool that learned typography”, 다중 액센트를 규율로 읽는 문장) | 옮김 → Experience `Scope` 마지막 문단, 한정 부착 | B2a 완전형 인접 배치. 원본 닫는 주석이 "one color, one job"·"flat and structural"을 스스로 editorial reading으로 지목한 사실도 같은 문단에 적었다. 값 손실 없음 — 같은 관측(색 배치, 4px/8px/16px/160px, 96px/660/-2.88px)은 Foundations·Typography·Components에 값으로 남아 있다. |
| §1 Key Characteristics 8항 | 옮김 → Experience `Distinctive traits` | 실측 8항. 항목 안의 분류(“two-tier color logic”, “restrained radius”, “cool neutral text ladder”)에 B2a 완전형 한정을 절 머리에 인접 배치. |
| 원본 H1 `# Design System Inspiration of GitLab` | 삭제 → provenance `Omission ledger`에 기록 | Core v2 identity 라인 `# GitLab Design System`으로 대체. |
| 원본 닫는 HTML 주석 (“OmD v0.1 Sources — Philosophy Layer (sections 10–15)”) | 분리 → provenance `Source closing note` | Tier 1 라이브 측정 재진술과 §1-9 / §10 / §11 / §13 / interpretive claims의 **증거 등급 배정 5건**을 인용 그대로 보존. 이 5건이 본 이관의 세 결정(voice sample은 바이트 이동 / persona는 삭제 / 해석 문장에는 한정)의 근거다. `58 uses`·`(icons/emphasis)` 같은 주석 고유 표기도 provenance raw sample 9행에 병기. |
| Sibling `.verification.md` — Proof 머리말·method·raw samples 26건·Tier 2 attempts·Conflict matrix 4행·Logo 판정 | 분리 → provenance | 증거 등급으로만 채택. **portable 토큰 승격 0건**(실측: sibling 전용 hex/px/rem/ms/pct 토큰 집합이 공집합 — 원본이 이미 전부 담고 있다), **구조 분류 승격 0건**(B1). 초안에 두 건이 sibling에서 본문으로 넘어와 있었고 최종 패스에서 되돌렸다: (a) `font ×1372 (single typeface)` 빈도 관측 → 원본 §3의 “Used for everything”으로 교체, (b) 캡처를 “desktop inspection”으로 분류하던 문장 → viewport는 provenance에만 두고 본문은 「한 번의 라이브 관측」으로 교체. Pajamas를 “official first-party DS”로 분류하는 문장은 sibling의 분류임을 **인용으로 귀속**해 남겼다(E1이 요구하는 권위 한정이라 본문에 필요하다). |
| Sibling raw samples 26건 | 분리 → provenance `Raw samples` | 26행으로 보존(실측 26 = 26). |

## 규칙 대조 (본문 실재 확인 후에만 기재)

| 조항 | 이 이관에서의 처리 | 실측 근거 |
|---|---|---|
| A1 / A1a | 검증 값 손실 0 · 발명 0 · unitless lineHeight 5종 비율 유지 | 게이트 `token-loss` 0 / `token-invention` 0 / `ratio-loss` 미발생 |
| A1b | primitive type 4종 컴포넌트별 보존 | 산출 doc `\`button\`` 5회 · `\`input\`` 2회 · `\`card\`` 3회 · `\`badge\`` 2회(각 「How to read」 1회 포함), 배지 4키는 provenance에 개별 |
| A1c | `tokens.source` · `components_harvested` · `omd` · `verified` · `added` 원장 보존 | provenance `Identity` 표 |
| A3 | §9 고유값 1건(다크 stat 카드 타이포) 이동 | 산출 doc 1회 |
| A4 | `#ececef`/`#a4a3a8`/`#fbfafd`를 일반 neutral role로 합치지 않음 | Foundations 말미 문장 + Default 버튼 레코드 |
| A5 / A5a | 위 A5a 절 참조 — 추출 252+151 / 바늘 47 / 미생존 1 / 처분 기재 | 손 스윕 + `latin-copy-audit` 재실행 0 |
| B1 | generic `Focus` 관측을 `focus-visible` treatment로 승격하지 않음 | 산출 doc의 어떤 `focus-visible` 행에도 색값 없음(게이트 `focus-visible-promotion` 미발생). 관측된 `#1f75cb` 링은 Text Input 레코드의 별도 `Observed focus treatment` 항목에 |
| B2 / B2a | 해석·인과 문장 18개 위치에 완전형 한정 인접 배치 | provenance `Derived editorial inventory` 18행이 위치별로 색인. 본문 `derived editorial implementation inference` = 18 (파일별 `grep -oF` \| `wc -l`) |
| B3 | 다섯 증거 종류 전문 + 컴포넌트별 게이트 | 산출 doc 1회(E2c 대조 완료) |
| C1 | `not captured` / `not named`를 `not-applicable` 사유로 쓰지 않음 | 게이트 `na-inversion` 미발생 |
| C2 | 역할 판단으로 열고 닫음. primitive 종류만으로 일괄 개방하지 않았다 | 실측: interactive 7개 × 7상태 = 49행 = applicable 40 + not-applicable 9. Pajamas 액션 버튼 4종(Confirm·Danger·Default·Tertiary Confirm)은 연산을 커밋하므로 loading/error/success 전부 `applicable`(미해상 시각값만 생략). 마케팅 목적지 CTA 2종은 disabled/loading/error/success 4행씩 = 8행이 `not-applicable`이며 사유는 「공개 목적지로 보내고 제자리에서 커밋하는 연산이 없다」는 **의미상** 사유다(관측 부재가 아니다). Text Input은 loading 1행만 `not-applicable`(값 입력과 커밋의 분리 — 진행 상태는 폼의 액션 버튼이 갖는다)이고 error/success는 `applicable`. `Kind: interactive` 7 · `Kind: non-interactive` 2(Dark Proof-Stat Card · Status Badge) · kind 미선언 1(Nav / Feature Card, C4) |
| C3 | coverage 완료 주장 없음 | 「This is not a complete state-coverage claim.」 |
| C4 | interactive-kind 근거 없는 컴포넌트는 kind·map 생략 | Nav / Feature Card — kind와 applicability map 자체를 선언하지 않음. Dark Proof-Stat Card와 Status Badge는 §4.4의 non-interactive 경로(`kind` + 사유, map 없음) |
| D1 / D1a | 부정 claim과 `Named gaps` 명사구가 전부 원본이 세운 대상 | 게이트 `alien-negative-claim` 미발생. gap 7항은 easing 토큰명·hover darkens·focus·badge height·primitive type·stat 폰트 크기·language switcher로 전부 원본에 실재 |
| D2 / D2a | 가상 페르소나 승격·재수록 없음. 삭제 처분 행은 무식별 | fictional personas 3인, §13, D2 삭제. 식별자(이름·나이·도시·전기)를 원장·로그에 재열거하지 않음 |
| E1 | 원장·freshness·Proof는 provenance, 권위·증거 종류·경계는 본문 | provenance 15개 절 / 본문 Scope의 「Two boundaries」·Font evidence·How to read·Motion 머리 |
| E3 | 게이트 회피 없음 | 초회 실행에서 `alien-negative-claim` 1건이 떴고, 그 원인은 B2a 한정의 “were not read from …” 표현이었다. 값 표기를 왜곡하지 않고 **규칙집 B2a 예문의 표준 형태(“are not …-authored or …”)로 문장을 되돌려** 해소했다 — 조항이 지정한 형태로의 복귀이므로 우회가 아니다. |

## 게이트 결과

`node test-v2/tools/migrate-reference.mjs --brand gitlab --gate-only` → `verdict: PASS`, `problems: []`.

`coverage`: `copy-loss` **compared 0 / candidates 252**. 이 PASS는 「대조한 바늘 중 잃은 것이 없다」가 아니라 **「대조한 바늘이 하나도 없다」**는 뜻이다. A5 준수의 근거는 게이트가 아니라 위 A5a 손 스윕(추출 403 / 바늘 47 / 미생존 1 / 처분 1)이다.

## Revision 2026-08-28 (wave27 review)

규칙집 v12. 확정 FAIL 4만 수정. 존재 여부 재논쟁 없음. 파일은 `find`로 확인한 뒤 `grep -o <패턴> <파일> | wc -l`로 파일별 실측. B2a 완전형 18문장과 provenance derived 원장 18행은 그대로(본문 `derived editorial implementation inference` 18 = 원장 18).

**1. A1 값 소실 — YAML `tokens.rounded.full: 9999`.** Shape Pill 칸이 `160px (full)` 별칭만 갖고 `9999`는 Claim ledger에만 있었다. 값 칸을 `full: 9999 (160px / full)`로 되살림(YAML 값 + §5 별칭). 실측: `9999` 원본 1 / 산출 DESIGN.md 1 / provenance 2 / sibling 0. `full: 9999` 원본 1 / 산출 DESIGN.md 1 / provenance 2. `160px / full` 원본 1 / 산출 DESIGN.md 1. Shape 표 5행·다른 칸 불변.

**2. A1 융합 승격 — sibling 전용 16px padding.** Nav / Feature Card가 `14px radius with 16px padding`을 원본 측정처럼 적었다. 원본 §5는 `Product-nav cards arranged in a multi-card grid inside dropdown panels (14px radius)`만, YAML `nav-card`는 `padding: 24px` / `radius: 16px`. sibling raw sample 6만 `nav-card grid radius 14px / padding 16px`. 본문 문장을 원본 §5 표현으로 되돌리고, 16px 그리드 padding은 provenance sibling 절에 출처로만 남김. 실측: `14px radius with 16px padding` 원본 0 / sibling 0 / 산출 DESIGN.md 0 / provenance 0. sibling 원문 `nav-card grid radius 14px / padding 16px` sibling 1 / 산출 DESIGN.md 0 / provenance 2. 원본 표현 `multi-card grid inside dropdown panels (14px radius)` 원본 1 / 산출 DESIGN.md 2 (Layout Grid + Nav / Feature Card).

**3. D1 — 발명 도메인 `product application`.** 원본은 `product/Pajamas`를 한 표면으로 두고 `single-application`만 쓴다. Scope 마지막 문장 · Avoid 9항 · Font evidence 「Outside these captures」 행을 삭제(부정 claim으로도 쓰지 않음). Avoid는 원본 8항과 같아졌고, 절 머리의 「9번째는 이관이 추가한 경계」 문장도 같이 지움. Font evidence 데이터 행 5→4. 실측: `product application` 원본 0 / sibling 0 / 산출 DESIGN.md 0 / provenance 0.

**4. D2 — Primary tasks 3번째가 §13 동기 승격.** `so that the result matches GitLab's own product UI`를 삭제. 남은 줄은 §11이 세운 `tokens, usage, Vue implementation`. 실측: `matches GitLab's own product UI` 산출 DESIGN.md 0 / provenance 0. `matches GitLab's own UI` 원본 1 (전기, 미승격) / 산출 DESIGN.md 0.

**줄 포인터.** 산출 DESIGN.md 622→620 (Avoid 1행 + Font evidence 1행 삭제; 나머지 제자리). `DESIGN.md:<n>` 포인터는 provenance · migration-log · audit-log 각 0. 원장은 섹션명. 전수 재검증, 갱신할 숫자 포인터 없음.

**안 건드린 것.** 토큰 값(복원한 `full: 9999` 제외) · 컴포넌트 표 구조 · state 표 · B2a 완전형 · 원본 `web/references/gitlab/**`.

Post-revision DESIGN.md SHA-256: `bf916f91295b25893c5de1b4c31dd3025f81611e0b0ef62a683c586263bbedca`.
