# Gaudiy migration log

Source: `web/references/gaudiy/DESIGN.md` (legacy, omd 0.1)
Verification sibling: `web/references/gaudiy/.verification.md` (dotfile; existence confirmed with `find`, not with a glob)
Destination: `docs/design-md-weight/migrated/gaudiy/DESIGN.md`
Provenance: `docs/design-md-weight/migrated/gaudiy/provenance.md`
Rulebook: **v11** (`docs/design-md-weight/MIGRATION_RULEBOOK.md`)
Date: 2026-08-26
Portable Core: **pass** (`scripts/design-md-core.cjs` `evaluatePortableCore` → `level: portable-core`, `structurally_valid: true`, `portable_core: true`, `reasons: []`, placeholders 0)

## Disposition table

| Legacy | Disposition | Destination / reason |
|---|---|---|
| YAML identity (`id`, `name`, `country` JP, `category`, `homepage`, `primary_color` `#050505`, `logo`) | 분리 → provenance `Identity` | Portable file has no frontmatter. Name kept as H1 `Gaudiy Design System`. |
| YAML `logo` (favicon slug) | 분리 → provenance `Identity` **+ 옮김 → portable `Typography & Assets` → `Assets`** | 이중 목적지(E2a). URL은 provenance에만; 「그 포인터가 Gaudiy 자체 호스팅 파일이 아니라 제3자 favicon 서비스 URL」이라는 판단은 portable Assets 첫 항목에 있다. Google favicon-service URL이므로 brand image로 승격하지 않았다. |
| YAML `verified` / `added` / `omd` / `tokens.source` / `tokens.extracted` / `components_harvested` | 분리 → provenance `Identity`·`Freshness` | 출처 원장·freshness (E1). |
| YAML `tokens.note` | 분리 → provenance `Identity` (verbatim 인용) **+ 옮김 → portable `Experience` → `Scope`, `Foundations` → `Semantic color`** | 이중 목적지(E2a). 노트 전문은 provenance에 인용으로 보존하고, 그 실질(두 표면 잉크 분기 `#050505`/`#000000`, charcoal body 규칙, accent hue 부재 제약, inversion+0px+1–2px border emphasis 기제, 표면색 `#ffffff`/`#eeeeee`)은 본문에 값·규칙으로 있다. |
| YAML `tokens.colors` 9개 (`ink` `ink-pure` `text` `muted` `muted-alt` `faint` `canvas` `surface` `on-ink`) | 옮김 → `Foundations` → `Semantic color` | 9개 역할 전부. 실측: legacy hex 8종이 산출 `DESIGN.md`에 8/8 존재(`#ffffff`가 canvas와 on-ink 두 역할을 공유). |
| YAML `tokens.typography` (family 3, display-hero, section, body, cta) | 옮김 → `Typography & Assets` → `Family`·`Type roles` | Type roles 표 실측 4행 = legacy §3 Hierarchy 4행. A1a: unitless `1.40`·`1.50`이 비율로 생존(산출 `DESIGN.md`에서 `1.40` 4회, `1.50` 3회, px 변환 0건). `4.00rem`·`1.75rem`·`1.00rem`·`89.6px`·`39.2px`도 그대로. |
| YAML `tokens.spacing` 7개 (8/9/10/16/18/32/64) | 옮김 → `Foundations` → `Spacing` | 7개 값 + `~8px` base unit. |
| YAML `tokens.rounded` (sm/md/lg 0, full 9999) | 옮김 → `Foundations` → `Shape` | `0px`와 `9999px (50%)` 둘 다. |
| YAML `tokens.shadow.none` | 옮김 → `Foundations` → `Elevation` (+ `Components` → Grey Section Band `Shadow: none`) | 이중 목적지(둘 다 portable 본문). |
| YAML `tokens.components` 7개 + 각 `type` | 옮김 → `Components & States` | A1b: primitive type을 컴포넌트별로 보존. 실측 산출 `DESIGN.md`: `Primitive type: \`button\`` 3회, `` `card` `` 3회, `` `tab` `` 1회 — legacy YAML 실측(button 3 / card 3 / tab 1)과 동수. §4 산문에만 있던 Badges의 Inverted Label은 `Primitive group: \`badge\`` 1회로 별도 선언. |
| §1 Visual Theme & Atmosphere — 표면 범위·색·타입·기하 기술 | 옮김 → `Experience` → `Scope` 2번째 문단 | 값은 표면에 붙여 뒀다(corporate 1px `#000000`/`#777777`, recruit 2px `#050505`/`#555555`). |
| §1 인과·해석 문장("glitch" identity, defiant counter-move, engineered block, zine-like cadence, editorial-brutalist, "designs like a magazine, not a SaaS dashboard", obstinate refusal to round) | 옮김 → `Experience` → `Scope` 3번째 문단, 한정 부착 | B2a 완전형 인접 배치. 값 손실 없음 — 같은 관측은 Foundations·Typography·Components에 값으로 남아 있다. 원본 닫는 주석이 스스로 "monochrome as conviction"·"editorial-brutalist as a rejection of glossy crypto branding"을 editorial reading으로 지목한 사실도 같은 문단에 적었다. |
| §1 Key Characteristics 8항 | 옮김 → `Experience` → `Distinctive traits` | 실측 legacy 8 = 산출 8. 항목 안의 해석(monochrome as commitment, charcoal as softening, sharpness as brand)에 B2a 완전형 한정을 머리에 배치. |
| §2 Color Palette & Roles (Ink & Text 6 / Surface 2 / Inversion 1) | 옮김 → `Foundations` → `Semantic color` | 9개 역할 + `#333333` 223–285 occurrences live. 역할명에 붙은 해석("softened black for warmth and readability", "the color that draws every box", "emphasis mechanic is inversion, not color")에 B2a 완전형 한정을 인접 배치. |
| §3 Font Family 3종 · Hierarchy 4행 | 옮김 → `Typography & Assets` | Noto Sans JP / Noto Sans / generic `sans-serif`. 미확인 family 대체 금지 문장 유지. |
| §3 Principles 4항 (bold-JP-display, tracking flips, charcoal-not-black, two-scripts-two-fonts) | 옮김 → `Typography & Assets` → `Type roles` 하단, 한정 부착 | 네 항 모두 해석이므로 B2a 완전형 한정 안에 이름으로 지목했다(weight/font-switch as hierarchy signals, negative-then-positive flip as signature, charcoal as comfort, roles never swapped). |
| §4 Component Stylings — Buttons 3 / Cards 3 / Badges 1 / Navigation 1 | 옮김 → `Components & States` | 8개 컴포넌트 선언. §4 Navigation의 `Background: #ffffff`는 YAML `nav-link`에 없던 값이라 병합해 보존(A3). `active: ink #050505`는 정식 7상태 밖의 source-declared state로 별도 행 보존(B1). |
| §5 Layout Principles — Spacing System / Grid & Container 4 / Whitespace 3 / Border Radius Scale | 옮김 → `Layout & Platforms` (+ Spacing·Shape는 `Foundations`) | 이중 목적지: 스케일과 radius는 Foundations, 그리드·화이트스페이스는 Layout. `~4474px` long-scroll, 1px 카드 행, 2px 잡카드 그리드 보존. Whitespace 3항의 해석(rhythm, philosophy)에 B2a 완전형 한정 인접. |
| §6 Depth & Elevation 표 4행 + Shadow Philosophy | 옮김 → `Foundations` → `Elevation` | 실측 legacy 4행 = 산출 4행. "editorial-brutalist choice … a little defiant … visual opposite of soft gradient-and-shadow card stacks"와 「네 단계를 elevation ladder로 읽는 것」 자체에 B2a 완전형 한정. |
| §7 Do 8항 | 옮김 → `Experience` → `Application rules` | 실측 legacy 8 = 산출 9 (아래 §9 이동분 1항 포함). Governance 통제 문구에 브랜드 규칙을 넣지 않았다. |
| §7 Don't 8항 | 옮김 → `Experience` → `Avoid` | 실측 legacy 8 = 산출 8. |
| §8 Responsive Behavior — Breakpoints 3 / Touch Targets 3 / Collapsing 4 / Image 2 | 옮김 → `Layout & Platforms` | 실측 breakpoint 3=3, collapsing 4=4. `640px`·`1024px`·`1440px`·`160px` 보존. 두 캡처가 단일 데스크탑 폭이므로 breakpoint 표를 「측정된 전환」이 아니라 source-stated로 규정하고, B2a 완전형 한정의 범위를 touch targets·collapsing·image behavior 세 하위절까지 **이름으로** 확장했다. |
| §9 Agent Prompt Guide — Quick Color Reference / Example Component Prompts 4 / Iteration Guide 8 | **삭제** | 도구별 명령·프롬프트 포장·같은 규칙의 재진술. 색·타입·radius·border 값은 전부 Foundations/Typography/Components에 이미 있다. 슬롯 없는 위임 없음. 실측: 산출 `DESIGN.md`에 `Quick Color Reference`/`Example Component Prompt`/`Iteration Guide`/`omd-apply`/`npx omd` 각 0회. |
| §9 안의 고유 제약 「Use sparingly for the single primary action」(solid black inversion CTA) | **옮김 → `Experience` → `Application rules` 9번째 항** | A3. 이 문장은 §9 프롬프트 예시 안에만 있었고 받을 슬롯(브랜드 적용 규칙)이 있으므로 삭제 대상이 아니다. |
| §9 안의 「On press, invert to solid #000000 fill with #ffffff text」 | 삭제 (중복) | A3 검사 결과 중복: 같은 주장이 §15 motion rules의 inversion flip 문장으로 존재하며, 그쪽이 `Foundations` → `Motion`에 보존돼 있다. |
| §10 Voice & Tone — 성격 규정 문단 + Context/Tone 5행 표 | 옮김 → `Content & Locales` | 실측 legacy 5행 = 산출 5행. voice 성격 규정과 표의 register 독해에 B2a 완전형 한정을 표 바로 앞에 배치. |
| §10 Voice samples 3건 (verbatim) | 옮김 → `Content & Locales` | A5: 3건 전부 바이트 그대로. 원문이 published string이고 영문은 원본 자신이 붙인 읽기 보조라고 본문에 명기했으며, 원본의 영문 대역 "With fans, advance the era." / "creating a nation of fans"도 verbatim 유지(의역 0건). `*(verified live 2026-06-17, …)*` 표기만 provenance `Freshness`·`Sources`로 분리. |
| §10 Forbidden register 4항 | 옮김 → `Content & Locales` | 원문 그대로("revolutionary", "to the moon" 포함). 두 인용은 브랜드가 거부하는 register의 예시이지 Gaudiy 카피가 아니라고 인접에 적었다. |
| §11 Brand Narrative 3문단 | 옮김 → `Experience` → `Scope` 4번째 문단 | 2018 창업, Tokyo, 石川裕也 (Yuya Ishikawa, CEO), Gaudiy Fanlink, ファン国家の創造, Sony Group + Bandai Namco Holdings, 松竹 (Shochiku) / 東映アニメーション (Toei Animation) / 東宝 (Toho), 2025 Pre-Series C 전부 보존. 증거 등급은 원본 닫는 주석대로 분할했다 — 파트너·펀딩은 라이브 news card 관측, 창업연도·CEO는 원본 자신이 "widely documented public facts … not directly quoted from a verified Gaudiy statement in this turn"이라 밝힌 계열. 해석(백커 로스터를 core proof point로, 모노크롬을 거부의 가시적 형태로, 비전 문구를 co-creation 재정의로)에 B2a 완전형 한정 인접. |
| §11 서사가 토큰이 아니라는 경계 | 옮김 → `Experience` → `Scope` (문단 끝) | E1: standalone 해석에 필요한 경계는 본문에. |
| §12 Principles 5항 (+ 각 UI implication) | 옮김 → `Experience` → `Principles` | 실측 legacy 5 = 산출 5. B2a 완전형 한정을 머리에 배치하고, 원본 주석이 editorial이라 지목한 "monochrome as conviction"을 그 문장에서 이름으로 지목했다. |
| §13 Personas — fictional personas 3인, §13, D2 삭제 | **삭제 (sidecar 재수록도 안 함)** | D2·D2a. 원본 §13 머리글과 닫는 주석이 둘 다 fictional archetypes이며 이름은 illustrative라고 명시. 이름·나이·도시·전기는 산출 3파일에 재수록하지 않는다. `Experience` → `Audience`에는 원본이 스스로 publicly observable audiences라 부른 그룹(IP·엔터 권리자 / 일본 팬 커뮤니티 / 채용 대상 엔지니어·디자이너)만 남겼고, 그 그룹 읽기에도 B2a 완전형 한정을 붙였다. |
| §14 States 9행 | 옮김 → `Components & States` → `State record` **+ 컴포넌트별 applicability 사유** | 이중 목적지(둘 다 portable 본문). 실측 legacy 9행 = 산출 9행, 값·카피 그대로("エラーが発生しました", "必須" 포함). 같은 내용을 근거로 Outline CTA의 loading(인라인 진행·스피너 오버레이 없음)·error(charcoal 인라인 메시지 + 필드 단위 검증)·success(간결한 인라인 확인 + inversion) 사유와, 세 컴포넌트의 disabled 사유(reduced-opacity + Faint Grey `#656565`)를 채웠다. graph 위임 없음. |
| §14의 값 없는 서술(reduced-opacity, flat pulse, glitch/cut) | 옮김 → `State record` · 이름만 → `Governance` → `Recorded unresolved decisions` | 이중 목적지. 서술은 본문에 남기고, 값이 없다는 사실만 Governance에 값 없이 이름으로. 그럴듯한 값으로 채우지 않음. |
| §15 Durations 3행 (`motion-fast` 120ms / `motion-standard` 200ms / `motion-slow` 320ms) | 옮김 → `Foundations` → `Motion` | 실측 3행 = 3행. 규칙집 제약 5의 삭제 범위는 **무출처 커브뿐**이고 duration은 브랜드마다 다르므로 보존. sibling이 transition/animation/duration/easing 샘플을 0건 기록했으므로 증거 등급 한정(B2a 완전형)을 이 절 머리에 붙였다. |
| §15 Easings — 역할 이름 3개와 use 3행 | 옮김 → `Foundations` → `Motion` | `ease-enter` / `ease-exit` / `ease-standard`와 각 용도 3행 보존. 실측 3행 = 3행. |
| §15 Easings — 커브 값 3개 | **삭제 → provenance `Omission ledger`에 verbatim 보관** | 무출처 커브. sibling raw samples 20건 어디에도 transition·animation·duration·easing 관측이 없고, 원본 닫는 주석이 §10–15를 philosophy layer로 두어 live-inspect 목록 밖에 놓았다. `cubic-bezier(0.4, 0.0, 1, 1)`은 `spec/omd-v0.1.md` 265–268행 예시 표(그 파일이 스스로 "비브랜드 구현 기본값"이라 규정하고 reference로 옮기는 것을 금지한 자리)의 `ease-exit`와 동일. 실측: 세 값 모두 산출 `DESIGN.md` 0회 / `provenance.md` 1회씩. |
| §15 Motion rules (inversion flip / cards fade in from below / glitch·cut / no bounce or spring / `prefers-reduced-motion: reduce`) | 옮김 → `Foundations` → `Motion` | 전부 보존. reduced-motion 계약 포함. |
| B3 — 미해상 motion 승격 조건 | **신규 작성 → `Foundations` → `Motion` + `Governance`** | 원본에는 승격 조건 문장이 없다. 규칙집 B3이 요구하는 **다섯 증거 종류 전부**(transition properties · animation name · duration · easing · reduced-motion behavior)와 「컴포넌트별 computed 관측 후에만」 게이트를 본문에 적었다. "공식 출처로 검증될 때까지" 류 약화 문구 없음(실측 0회). E2c 대조: 다섯 종류 전문이 산출 `DESIGN.md`에 **2회**(`Foundations` → `Motion` 1회, `Governance` → 첫 unresolved 항목 1회), `provenance.md`에 0회임을 `grep -o … \| wc -l`로 파일별 확인한 뒤 이 행을 적었다. |
| Footer 블록 (**Verified** / Tier 1 2개 URL / Tier 2 2개 시도 / Conflicts unresolved) | 분리 → provenance `Freshness`·`Sources` | freshness·출처 원장(E1). Tier 1 두 URL의 원문 범위 주석("corporate, live computed style" / "recruit special site, live computed style")과 Tier 2 결과 문자열("No designs found for 'gaudiy'"), 두-표면 variance 문장까지 verbatim 보존. |
| 닫는 HTML 주석 (Sources — Philosophy Layer) | 분리 → provenance `Evidence class` **+ 옮김 → 본문의 증거 등급 한정** | 이중 목적지. 주석의 다섯 계층 구분(§1–9 live-inspect / §10 verbatim voice / §11 서사와 그 등급 분할 / §13 fictional / interpretive claims)은 provenance에 보존하고, 그 구분이 만들어 내는 한정은 Scope·Motion·State record·Components에 문장으로 있다. |
| Sibling `.verification.md` — Proof 머리말·method·raw samples 20건·Conflict matrix 4행·Notes 3항 | 분리 → provenance **+ 1440px 밴드 폭은 옮김 → portable `Layout & Platforms` → `Breakpoints`** | 증거 등급으로만 채택한 값이 대부분. 실측: sibling raw samples 20건 = provenance `Raw samples` 20행; conflict matrix 4행 = 4행; Notes 3항(JP country / logo 995B / Gaudi-Figma 제외)은 provenance의 `Country note`·`Logo decision`·`Excluded third-party source` 세 절로. sibling 전용 값 `80px`·`100px`·`136px`·`30px`은 산출 `DESIGN.md`에서 각 0회이고 provenance에만 있다. **예외(E2a):** sibling `1440×4474px` 밴드 폭 중 `1440px`는 본문 Breakpoints에 "the grey band measures 1440px across"로 **1회** 있다(`grep -oF 'measures 1440px' DESIGN.md`). 레거시 본문은 `~4474px`와 Desktop 범위 `1024-1440px`만 가진다. |
| Sibling 전용 발행 문자열 4건 | 분리 → provenance (바이트 그대로) | A5는 sibling이 측정 대상으로 명기한 문자열에도 걸리므로 `Gaudiy Groupが松竹、東映アニメーション、東宝より追加調達…` · `デザインディレクター` · `Corporate IT` · `株式会社Gaudiy Group｜ファンと共に、時代を進める。` 4건 모두 바이트 그대로 보관. legacy 본문이 스스로 담은 라벨만 portable 본문에 올렸다. |
| Sibling이 스스로 제외한 제3자 문자열 `Gaudi - Design System` | 분리 → provenance `Excluded third-party source` | A5a: 원본이 스스로 제외한 제3자 문자열은 바늘이 아니다. 제외 결정 자체는 증거 이력이므로 원장에 보존. |

## 최종 패스 기록

**패스 1 — B2a 스캔.** 본문 완성 후 `DESIGN.md` 전체를 처음부터 다시 읽고, Principles 안팎을 불문하고 인과·해석·판단 문장마다 근거 class를 자문했다. 그 결과 아홉 자리를 고쳤다: (1) Scope 첫 문단의 Fanlink 제품 서술을 서사 문단 소속으로 명시, (2) Scope 3문단 한정에 emphasis-by-inversion·separation-by-bands·greys-as-ladder 세 독해를 이름으로 추가, (3) Scope 4문단의 「are editorial readings」 불완전 한정을 완전형으로 승격하고 co-creation 독해를 추가, (4) `Semantic color`에 역할 독해용 완전 한정 신설, (5) Font evidence의 `Official distributed asset` 행을 `Record scope`로 교체(원본에 `license`·`distributed`·`asset` 각 0회 — 원본이 세우지 않은 도메인을 미해상 gap으로 열거하지 않기 위해, D1a), (6) `Type roles` 한정에 hierarchy-signal·never-swap 독해 추가, (7) `Assets`에서 원본에 0회인 `photography` 제거, (8) `How to read this section` 한정을 role description과 일본어 라벨 옆 영문 독해까지 확장, (9) `Breakpoints` 한정의 범위를 touch targets·collapsing·image behavior로 확장하고 「generous tappable blocks」류를 원본 귀속 표현으로 되돌림. 최종 실측(F3 후): 완전형 한정 **22자리 / 21개 표제**, 불완전 한정 0건(`grep -oF 'editorial reading' DESIGN.md` 0). 색인은 provenance `Derived editorial inventory` 22행에 있고 본문 실측과 같다. F3가 Family·Assets·Governance에 인접 완전형 3건을 신설하고 Semantic color 한정을 constraint까지 확장했다.

**패스 2 — E2 대조.** 위 표의 각 행을 쓰기 전에 값이 실제로 어느 파일 어느 절에 있는지 `grep -o … | wc -l`(파일별)과 `awk` 블록 카운트로 확인했다. 기억으로 쓴 행은 없다. 이중 목적지는 두 목적지를 모두 적었다(logo, `tokens.note`, shadow, spacing/radius, §14 상태, §14 값 없는 서술, 닫는 주석, sibling `1440px` 밴드 폭). 준수 주장은 본문 실재를 확인한 것만 적었다 — B3 다섯 종류 전문 2회, primitive type 3종 동수, lineHeight 비율 2종, §14 9행, voice sample 3건, Do 8→9·Don't 8·Principles 5·traits 8·tone 5·breakpoint 3·elevation 4·type role 4, B2a 완전형 22/22.

## 값 보존 실측 (산출 3파일 대조)

| 검사 | 결과 |
|---|---|
| legacy 고유 토큰 37종 (hex 8 · px 22 · rem 3 · ms 3 · pct 1) | **37/37 이 산출 `DESIGN.md` 본문에 존재 — 손실 0.** provenance에만 있고 본문에 없는 값 0종. |
| portable 본문의 토큰 발명 | **0건.** 본문의 모든 hex/px/rem/ms/pct가 legacy 토큰 집합의 부분집합. sibling 전용 `80px`·`100px`·`136px`·`30px`은 본문 0회. |
| unitless lineHeight (A1a) | `1.40`·`1.50` 2종 전부 비율로 생존(각 4회·3회). px 변환 0건. `89.6px (1.40)`·`39.2px (1.40)` 형태로 px와 비율을 병기. |
| primitive type (A1b) | button 3 · card 3 · tab 1 — legacy YAML 실측과 동수. badge는 §4 산문 유래라 `Primitive group`으로 1회. |
| A5 비라틴 (게이트 바늘) | 게이트 `copy-loss` **0건 손실**. 단 이 검사는 **인용 문자열 152개 중 18개**(`coverage.compared` 18 / `candidates` 152 = 11.8%)에서 뽑은 비라틴 run만 본 것이다 — `verdict: PASS`는 「대조한 바늘 중 잃은 것이 없다」이지 카피 전량 보존의 증명이 아니다. 나머지는 아래 손 스윕이 담당한다. |
| **A5a 발행 문자열 손 대조 (바늘 밖 전수)** | `compared < candidates`이므로 손 스윕을 수행했다. legacy 본문·YAML·닫는 주석과 sibling 양쪽에서 인용 문자열을 전수 추출(legacy 152 / sibling 87)한 뒤, **브랜드가 발행한 문자열만** 바늘로 남겼다 — **추출 38건**(legacy 34 + sibling 전용 4). 비라틴 20건: くわしく見る · カジュアル面談に申し込む · コーポレートサイトへ · ファンと共に、時代を進める。 · ファン国家の創造 · たぶんチャンス。 · 採用特設サイト \| 株式会社Gaudiy Group · 株式会社Gaudiy Group · プロダクトデザイナー · データサイエンティスト · デザイナー · エンジニア · 法務 · 労務 · 石川裕也 · 松竹 · 東映アニメーション · 東宝 · エラーが発生しました · 必須. 라틴 14건: PdM · Gaudiy Fanlink · Tech Blog · Gaudiy AI Lab · AI Lab · Member note · CEO'S note · With fans, advance the era. · creating a nation of fans · nation of fans · Yuya Ishikawa · Shochiku · Toei Animation · Toho. sibling 전용 4건: Gaudiy Groupが松竹、東映アニメーション、東宝より追加調達… · デザインディレクター · Corporate IT · 株式会社Gaudiy Group｜ファンと共に、時代を進める。 — **미생존 0건, 복원 0건, 처분 기재 0건.** 바늘에서 제외한 것: 폰트 스택(`Noto Sans JP` 등), CSS·토큰 이름(`box-shadow: none`, `prefers-reduced-motion: reduce`, `cubic-bezier(…)`, `motion-fast` …), 점 경로·YAML `use:` 서술문, 카피에 대한 서술(`Level 0`, `elevation`, `monochrome as conviction`), 제3자 문자열(`No designs found for 'gaudiy'` — getdesign.md의 메시지; `Gaudi - Design System` — sibling이 스스로 제외), 그리고 브랜드가 거부하는 register의 예시(`revolutionary`, `to the moon`). 제외한 것들도 세 파일 어딘가에 그대로 남아 있으나 A5 분모에는 넣지 않았다. |
| `[FILL IN]` | legacy 0건, 산출 `DESIGN.md` 0건. provenance에 1회 — 「원본에 placeholder가 없다」는 원장 문장의 범주 라벨(대괄호 안 지시문 없는 맨 토큰)이며, 지시문을 콜론 뒤에 담는 구체형이 아니다. 29cm 승인본 provenance가 같은 용법을 쓴다. |
| C1 (`not captured`/`not named`를 not-applicable 사유로) | **0건.** 상태 표 28행(4개 interactive 컴포넌트 × 7) 중 `applicable` 21행 / `not-applicable` 7행이고, 7행 전부 역할 사유로 닫혔다 — press destination 2행(Solid Black Inline CTA error·success), 즉시 로컬 dismissal 3행(Round Close Control loading·error·success), destination 선택 2행(Navigation Item error·success). |
| C2 (역할 판단 없는 일괄 개방 / 일괄 폐쇄) | 일괄 처리 없음. 같은 primitive(`button`)인데 판정이 갈렸다 — Outline CTA는 「カジュアル面談に申し込む」가 신청을 커밋하므로 loading·error·success `applicable`(§14 값으로 사유를 채움), Solid Black Inline CTA와 Round Close Control은 커밋 연산이 없어 일부 `not-applicable`. `tab`으로 검증된 Navigation Item은 목적지 선택이므로 error·success 폐쇄. 사유는 전부 의미상 근거이고 관측 부재가 아니다. |
| C3 | "This is not a claim that state coverage is finished." 를 `Components & States` 머리에 1회 명시. 완료 주장 0건. |
| C4 | News / Press Card와 Job-Role Card는 interactive-kind 근거가 없어 **kind와 applicability map 자체를 생략**했다(primitive type `card`만 보존). Grey Section Band와 Inverted Label은 레이아웃 밴드·라벨이라는 역할 근거가 있어 `kind: non-interactive` + 사유로 닫았다. |
| B1 | 원본에 `focus-visible` 0회. 산출 `DESIGN.md`의 `focus-visible` 행 4개는 전부 값 없이 "visual treatment omitted"이며 hex 0건. sibling의 구조 관측(h2 라벨, 섹션 표제)도 본문 사실로 승격하지 않았다. |
| D1 / D1a | `Governance` → `Recorded unresolved decisions` 8항과 Font evidence의 `Outside these captures` 명사구 목록은 전부 원본이 세운 도메인이다 — Fanlink(§11) · mobile/app(§8·§11) · Tech Blog / Gaudiy AI Lab / Member note / CEO'S note(§4) · easing curves(§15) · hover/press/focus(§9·§14·§15) · disabled opacity(§14) · skeleton pulse(§14) · glitch/cut(§15) · tablet 2-up grid(§8) · nav touch target(§8). 원본에 0회인 `license`·`distributed`·`photography`·`authenticated`·`native`·`parity`는 어느 목록에도 없다. |
| E3 | 값 표기를 왜곡한 자리 0건. `migrate-reference.mjs` 게이트는 첫 실행부터 `problems: []`. 다만 **conformance checker 오탐 1건을 아래에 보고**한다(우회하지 않고 기재). |

## 게이트

`node test-v2/tools/migrate-reference.mjs --brand gaudiy --gate-only` 계열 검사 결과: `verdict: PASS`, `problems: []`, `coverage.copy-loss: compared 18 / candidates 152`.

### E3 보고 — conformance checker `explicitlyNegatesClaim('scope', …)` 오탐

`scripts/design-md-core-conformance.cjs` 285행의 scope 부정 패턴 `/(?:\b(?:no|not|without)\b|does?\s+not).{0,32}\b(?:product|surface|scope)\b/i` 이, Scope claim 안의 문장 **「The accent scan returned no saturated hue on either surface.」**를 「이 문서가 자기 product surface를 부정한다」로 읽고 `portable_core: false` / `missing-product-surface-scope`를 냈다. 그 문장은 scope를 부정하지 않는다 — accent hue 관측 제약이다. `no` 와 `surface` 가 32자 안에 들어온 것이 원인이고, 같은 함수의 `ATTRIBUTED` 가드는 문장에 출처 귀속 어휘가 없어 발동하지 않았다.

조문이 금지하는 「표기를 바꿔 피하기」는 하지 않았다. 대신 그 문장의 실제 결함을 고쳤다 — **관측의 주체를 밝히지 않은 문장**이었으므로 「The source's accent scan records no saturated hue on either surface.」로 귀속을 명시했다. 같은 사실이 `Foundations` → `Semantic color`에는 처음부터 귀속형("the source records no saturated accent hue anywhere on either surface, and its accent scan returned empty")으로 적혀 있었고, 이 수정은 두 자리의 증거 귀속 규율을 일치시킨 것이지 게이트 어휘를 피해 문장을 재배치한 것이 아니다. 값·카피·의미 변화 0건(수정 전후 A5a 38/38 생존, 토큰 37/37 동일). 패턴 자체는 그대로 두었으므로 오탐은 남아 있다 — 이관본 135개 중 이 조건에 걸린 것은 gaudiy 하나였다.

이 PASS를 적합성 증거로 인용하지 않는다. 이 게이트는 A5 손실·E1 좁은 원장·E2 허위 목적지·B1 분류 승격을 통과시킨 전력이 있고, 이 브랜드에서는 인용 문자열의 11.8%만 기계 대조했다. 나머지 88.2%에 대한 판단 근거는 위 A5a 손 스윕 행(추출 38 / 미생존 0 / 처리 0)이다.

DONE migrated=1

## Revision 2026-08-28 (wave27 review)

Rulebook: `docs/design-md-weight/MIGRATION_RULEBOOK.md` **v12**. Trigger: semantic review FAIL 4, re-confirmed by the orchestrator. Four defects only. Token values, component-table structure, other state rows, B2a complete qualifiers, and the derived-inventory 1:1 were not opened. Source `web/references/gaudiy/DESIGN.md` and sibling `.verification.md` were not modified.

`find` confirmed the six files before any count: dest `DESIGN.md` / `provenance.md` / `migration-log.md` / `audit-log.md`, source `DESIGN.md`, sibling `.verification.md`. Counts below are `grep -oF '<needle>' <file>` match counts, file by file. A file that exists and prints no match is 0 for that file.

**1. A1 — restore the §11 Fanlink capability list.** Source `:313` records Gaudiy Fanlink as a fan-community platform that lets IP and entertainment brands run digital fan experiences — fan tokens, digital collectibles, community engagement — on top of blockchain rails. The portable Scope pointer and the narrative paragraph had kept only `digital fan experiences on blockchain rails`. Restored the source clause in both places (Scope first paragraph and Scope narrative). This is a source fact, not a reading, so no new B2a qualifier was attached.

| needle | orig | dest after |
|---|---:|---:|
| `fan token` | 1 | 2 |
| `collectible` | 2 | 2 |
| `digital collectibles` | 1 | 2 |
| `community engagement` | 1 | 2 |

Source's second `collectible` is the §13 persona line; that occurrence stays deleted (D2). The two dest hits are the restored §11 clause, once in the Scope pointer and once in the narrative.

**2. A1 / B1 — drop the sibling band-width as a body measurement.** Source has Desktop `1024-1440px` (`:245`) and body height `~4474px` (`:192`). It does not state a band width. Sibling has `1440×4474px full-width band`. The portable Breakpoints sentence had said `the grey band measures 1440px across`. That clause is removed. The Desktop range and `~4474px` stay. Provenance sibling-only row for `1440×4474px` is no longer a dual destination: the sample stays in the ledger.

| needle | orig | sib | dest after | dest carries |
|---|---:|---:|---:|---|
| `1440px` | 1 | 0 | 1 | Desktop range `1024-1440px` only |
| `measures 1440px` | 0 | 0 | 0 | — |
| `1440×4474px` | 0 | 1 | 0 | provenance 2 (raw sample + sibling-only table) |
| `~4474px` | 1 | — | 1 | Grid & Container |
| `80px` / `100px` / `136px` / `30px` | 0 | 1 each | 0 each | provenance only |

The earlier disposition row that treated the sibling band width as a portable Breakpoints destination is **SUPERSEDED** by this revision. Historical `audit-log.md` / this file still mention the old clause; those mentions are the defect record, not a body fact.

**3. D1 — delete the invented mobile-app domain.** Source `mobile app` = 0, sibling 0. Source `Mobile` is the viewport-row name only. The Scope non-proxy list and the Font-evidence Outside-these-captures row had named `a mobile app`. Both names are deleted. The remaining named-outsides are source domains: Fanlink, Tech Blog, Gaudiy AI Lab, Member note, CEO'S note. No negative claim of the form "not a mobile app" was written.

After this edit, dest `DESIGN.md` `a mobile app` = 0 and dest `mobile app` = 0. The earlier 값-보존 D1 row that defended `mobile/app(§8·§11)` is **SUPERSEDED**: those sections do not establish that domain.

**4. C2 — close loading on destination-open controls.** Solid Black Inline CTA and Navigation Item open a destination and commit no operation. Their `error` rows were already `not-applicable` for that role reason; `loading` is now closed on the same criterion. Outline CTA stays `loading | applicable` because `カジュアル面談に申し込む` commits an application.

Dest after, `grep -oF` on `DESIGN.md`:

- `loading | applicable` = 1 (Outline CTA `:242`)
- `loading | not-applicable` = 3 (Solid CTA `:220`, Round Close `:260`, Nav `:278`)
- `error | applicable` = 1 (Outline CTA `:243`)
- `error | not-applicable` = 3 (Solid CTA `:221`, Round Close `:261`, Nav `:279`)

Destination pair (Solid CTA, Nav): loading and error now use the same role test. Round Close was already closed on both. Outline remains the one commit control. State-table rows: `not-applicable` 9 (was 7). How-to-read already stated that destination-open / immediate-dismissal closes operation-outcome; the two loading cells now match that sentence. `motion-slow` dest = 1, still in Foundations → Motion, no longer attached to a destination-open loading reason.

**Line pointers.** dest `DESIGN.md` is still **453** lines (in-place edits, no insert/delete). Re-read every `DESIGN.md:<n>` pointer: audit-log `:174` Family qualifier, `:106` Semantic color qualifier, `:193` Assets qualifier, `:444` Governance qualifier — each still lands on that sentence. provenance and this log have no `DESIGN.md:<n>` pointers.

**B2a 1:1 unchanged.** dest `derived editorial implementation inference` 22 / `not Gaudiy-authored` 22 / `separately published UI specification` 22. provenance derived inventory still 22 data rows. No qualifier was added or rewritten.

**Not changed.** Token values, component-table structure, other state rows, Outline CTA commit opening, B2a sentences, source, sibling.

Post-revision `DESIGN.md` SHA-256: `fa6df78bfcd70ef72ed129f2209256697ac82302fe6d17f54688ca2a4ee21c1f`.
