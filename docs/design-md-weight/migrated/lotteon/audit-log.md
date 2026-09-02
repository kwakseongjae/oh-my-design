# lotteon 감사 로그 — B2a · E2 전담

감사 대상: `docs/design-md-weight/migrated/lotteon/{DESIGN.md, provenance.md, migration-log.md}`
원본: `web/references/lotteon/DESIGN.md`
검증 sibling: `web/references/lotteon/.verification.md` — `find`로 경로 직접 확인. dotfile은 `ls`/`*`에 안 보이므로 경로를 직접 적음.
기준: `docs/design-md-weight/MIGRATION_RULEBOOK.md` B2·B2a, E1·E2·E2a–c (추가 조건으로 D2a·E2d·B1·A5a·A1 키 경로 검사)
감사 방식: 이관 워커의 보고를 받지 않고 산출물·원본만 대조. 계수는 전부 `grep -oF -- | wc -l`(파일별). `grep -c` 미사용.
날짜: 2026-08-29

발행 1차 UI 사양은 수집되지 않음. B2a 예문 전제(v12)가 성립하므로 toss형 닫힘 `not Lotte ON-authored or a separately published UI specification`을 요구한다. 기존 22건은 class를 끝까지 닫고 있어 형태만으로 FAIL하지 않았다.

착수 실측: 본문 `derived editorial implementation inference` 22 / `not Lotte ON-authored` 22 / `separately published UI specification` 22 / `separately published` **23**. 원장 데이터 행 22 (166–187). `not a separately published UI specification` DESIGN dest **0** — 23번째 `separately published`는 Content `:298`의 `separately published copy manual`이고 같은 완전형 줄에 있다. 숫자는 맞았으나 양쪽이 함께 좁았다(fastcampus). Scope `:11`은 인상·Story 셸만 이름하고 `2026-07-13 measurements, not a declared global marketing palette`는 세 번째 부류인데 한정 밖. Principles `:43`은 완전형 뒤 원본 bound `not an invented design manifesto`를 닫힘에 접지 않음. Semantic `:80`은 canvas≠selected-tab text만 이름하고 같은 `#ffffff`의 page/tab/dropdown surface · default tab/dropdown `bg` · selected-tab text 세 글을 비해합하지 않음. Spacing `:97`은 키 비해합만 이름하고 `not a complete mathematical scale`은 한정 밖. Motion `:125`는 부분 확인 거부만 이름하고 official framework/vendor document 일치는 한정 밖. Type roles `:154`는 keep-both만 이름하고 `not an invented universal type scale`은 한정 밖. Capture `:181`은 C2/C4/keep-apart만 이름하고 38-variant · three-interaction · static default geometry는 `:179`에 세 번째 부류로 있음. Layout `:293`은 1440px≠breakpoint · 밀도 구분만 이름하고 spacing samples≠scale · not a mobile layout contract는 `:285`/`:287`에 있음.

문장 분류: 브랜드 발행 사실(1996/2018/2020년 4월, 롯데닷컴·롯데e커머스·롯데쇼핑, Story/기업소개 인용 네 줄, YAML 값) / 관측 기술(hex·px·loaded family·셀렉터 밖 기하) / 편집적 해석·인과 판단(표면 귀속, 비해합, 스케일 거부, 승격 게이트, 페르소나 삭제 읽기, 38-variant 한도). 세 번째 부류만 수정 대상.

## 수정 목록 (22건)

### B2a — 인접 한정 (본문 8건, 발생 수 +0)

| # | 위치 | 무엇이었나 | 무엇을 붙였나 |
|---|---|---|---|
| 1 | `DESIGN.md:11` — Scope ¶2 | 인상·Story 셸만. `not a declared global marketing palette`는 세 번째 부류인데 한정 밖. | 기존 완전형에 2026-07-13 layer = surface measurements ≠ declared global marketing palette를 접어 넣음. 발생 수 +0. |
| 2 | `DESIGN.md:43` — Principles | 완전형 다음 문장이 원본 bound `not an invented design manifesto`를 닫힘 밖에 둠. | 그 bound를 완전형 안에 접음. 원본 문장은 뒤에 재진술로 남김. |
| 3 | `DESIGN.md:80` — Semantic color | canvas `#ffffff` ≠ selected-tab text만. default tab/dropdown `bg` `#ffffff` 제3 귀속은 세 번째 부류. | page/tab/dropdown surface · default `bg` · selected-tab text를 비해합한 채 기존 완전형에 접음. `#ffffff` DESIGN dest 13→**14**. |
| 4 | `DESIGN.md:97` — Spacing | 키 비해합만. `not a complete mathematical scale`은 한정 앞. | 그 판단을 한정 안에 넣음. |
| 5 | `DESIGN.md:125` — Motion | 다섯 종류 게이트는 있으나 official framework/vendor document 일치 ≠ 게이트는 한정 밖. | 그 판단을 한정에 접어 넣음. |
| 6 | `DESIGN.md:154` — Type roles | YAML/§3 keep-both와 use 병기만. `not an invented universal type scale`은 세 번째 부류. | 그 경계를 한정에 접어 넣음. |
| 7 | `DESIGN.md:181` — Capture record | C2/C4/YAML keep-apart/`focus`≠`focus-visible`. `:179`의 38-variant · three-interaction bound · static default geometry는 세 번째 부류. | 세 판단을 기존 완전형에 접어 넣음. `listItem` DESIGN dest 1→**2** (원본 §4 분류; sibling 전용 아님). |
| 8 | `DESIGN.md:293` — Layout | 1440px≠breakpoint · 밀도≠universal card만. `:285` 스케일 거부와 `:287` not a mobile layout contract는 한정 밖. | 두 판단을 기존 완전형에 접어 넣음. |

수정 후 실측 — `DESIGN.md`: `derived editorial implementation inference` 22, `not Lotte ON-authored` 22, `separately published UI specification` 22, `separately published` 23, `not a separately published UI specification` 0. `provenance.md`의 같은 절 인용은 색인이지 한정이 아니다. `migration-log.md` mention은 use가 아니다.

한정 줄: 9, 11, 13, 19, 28, 32, 43, 56, 66, 80, 97, 109, 121, 125, 141, 150, 154, 172, 181, 293, 298, 347.

### E1 — provenance derived 범위 (8건)

좁은 쪽 FAIL(fastcampus형). 본문 한정이 이름하는 판단을 원장이 빼면 1:1이 아니다. 헤더/데이터 행 수는 22=22로 유지하고 행 텍스트를 본문에 맞춤.

| # | 위치 | 무엇이 틀렸나 | 어떻게 고쳤나 |
|---|---|---|---|
| 9 | Scope ¶2 행 | 인상·Story 셸만. | 2026-07-13 layer ≠ declared global marketing palette. |
| 10 | Principles 행 | stems/UI-implication pairing만. | source bound not an invented design manifesto. |
| 11 | Semantic color 행 | canvas≠selected-tab text, catalog `#000000` keep-off만. | page/tab/dropdown surface · default tab/dropdown `bg` · selected-tab text 비해합. |
| 12 | Spacing 행 | unitless vs captured-px 비해합만. | 2px/4px/8px/16px ≠ complete mathematical scale. |
| 13 | Motion 행 | 다섯 종류 + 부분 확인 거부만. | official framework/vendor document 일치 ≠ that gate. |
| 14 | Type roles 행 | keep-both / YAML use만. | remaining rows ≠ invented universal type scale. |
| 15 | Capture record 행 | applicability / C2/C4 / keep-apart / Focus≠focus-visible. | 38-variant bound + three-interaction bound + static default geometry. |
| 16 | Layout 행 | 1440px≠breakpoint · 밀도 구분만. | spacing samples ≠ scale; 1440px ≠ breakpoint/mobile-layout contract. |

헤더 / 데이터 행 **22 = 22** at 166–187 (E1 1:1, 이름 범위 정렬). `scripts/check-limiter-ledger.mjs lotteon` 본문 22 = 원장 22.

### E2 / E2a / E2c — 로그 목적지 (6건)

본문이 아니라 로그(와 거짓 목적지 원장 행)만 고침. 이중 목적지는 둘 다, 없는 문자열은 빼거나 실측 줄로 옮김.

| # | 위치 | 무엇이 틀렸나 (실측) | 어떻게 고쳤나 |
|---|---|---|---|
| 17 | YAML metadata 행 | exact `tokens.source: live-extract` provenance dest **4** at 19/74/192/199. 실측 dest **3** at 74/192/199. 줄 19은 표 칸 `\| tokens.source \| live-extract \|` — 다른 표기. | dest 3 at 74/192/199. 표 칸은 다른 표기로 적음. |
| 18 | §12 Principles 행 | 짧은 인용 `"These 4 items are a derived editorial implementation inference from the verified surfaces"`를 본문 목적지로 적음. DESIGN dest **0** — fitpet형 2차 목적지. | dest 0으로 바로잡고 실제 em-dash 문장 dest 1 at 43만 목적지로 적음. |
| 19 | §14 applicability 행 | YAML `type: button` dest 1 / `tab` 1 / `input` 1 / `card` 1. exact `type: button` DESIGN dest **0**. | portable 행 `Primitive type: \`button\`` dest 1 at 257 · tab 203 · input 231 · card 187. colon 표기 DESIGN dest 0. |
| 20 | YAML metadata + Footer 행 | **Verified:** producer string을 `provenance.md` **37**로 적음. 실측 dest 1 at **36**. | 36으로 교정. |
| 21 | §9 삭제 행 | 점검 원장을 `provenance.md` **160**으로 적음. 160은 Derived editorial 절 제목. 실측 점검 문단 dest 1 at **158**. | 158로 교정. |
| 22 | F1·F2 dest 표 | 본문 수정 뒤 재실측 없음(lablup). `#ffffff` dest 13이 한정 확장으로 14. `listItem` dest 1→2. `wc -w` 5,361→5,543. | `grep -oF -- \| wc -l` 재실측. `#ffffff` DESIGN **14** / provenance **7**. `listItem` DESIGN **2** / provenance **2**. 확장 8자리를 F1에 적음. 자리 수 22=22 유지. |

Destination SHA `56674e35b805dbf580ffe4639c4b569000eba3ae39bf22b42591d3d7fb282299` → `c521cfe81c9c481a00b83eec60a26c031cafc5c6bf29e019072b97191d29579f` (한정 확장 후). 줄 수 DESIGN `wc -l` **359** 불변. `wc -w` 5,361→**5,543**. provenance 201 불변(행 텍스트만).

## 수정하지 않은 것 (검토 후 위반 아님)

- 토큰 값, 컴포넌트 표, 상태 applicability, 구조. 원본·sibling 미수정.
- 기존 22개 완전형은 evidence class를 끝까지 닫음. 발행 DS 없음 — toss형 닫힘이 맞다. 문법 변형(복수 `are derived editorial implementation inferences`)은 완전형.
- Governance 일반 문구는 B2a 대체물이 아니며, 그 절에 새 해석을 보태지 않았다. Named gaps의 B3 다섯 종류는 Motion 한정과 같은 게이트의 재진술.
- E2c: B3 전문 `computed transition properties, animation name, duration, easing, and reduced-motion behavior` DESIGN dest 2 (Motion `:125` · Named gaps `:350`).
- E2d: sibling-only 머리(`provenance.md` 119)는 DESIGN.md를 분모로 두고 부재를 적으며, 그 문장은 「this file에 없다」고 단언하지 않는다. `34px` DESIGN dest 0 · provenance dest 2 — 로그 mention은 분모가 아니다.
- D2a 처분 행은 절·인원·필드 종류만. 이름·나이·도시·전기 없음.
- A1 키 경로: `product-card` 8필드(type/bg/fg/radius/padding/height/font/use)가 Product Card 블록 행으로 존재. `home-image-tab` 10필드(+border/states)가 Home Image Tab 블록 행으로 존재. `search-input` 9필드가 Search Input 블록 행으로 존재. `recent-products-dropdown` 10필드가 Recent Products Dropdown 블록 행으로 존재. icook형 타 블록 hex 차용 없음. 복원 0. YAML `use` 7/7.

## 범위 밖 관찰

- **A5a.** `--gate-only` `copy-loss` compared **3** / candidates **130**. `verdict: PASS`는 대조한 바늘 중 잃은 것이 없다는 뜻이지 카피 보존이 아니다. 손 대조 발행 카피 9 (`롯데ON` DESIGN dest 3 · `롯데닷컴` 1 · `롯데e커머스` 1 · `롯데쇼핑` 1 · `Lotte ON` 32 — 22는 B2a 닫힘 mention · `취향을, 브랜드를, 혜택을 발견하는 즐거움` 1 · `취향, 브랜드, 혜택을 발견하는 즐거움` 2 · `고객이 원하고 만족하는 서비스를 만들어요` 1 · `쇼핑을 새롭게, 세상을 이롭게!` 1) DESIGN dest 각 ≥1, 미생존 0. YAML use 7/7. `latin-copy-audit` lost 6 / 33 = `[FILL IN: …]` wrappers (발행 카피 0). 발행 라틴 손실은 안 보인다.
- **B1.** sibling 전용 `coverage score 80` / `playwright_cli` / `34px` / `52px` / `12px 16px` / `artifacts/reference-evidence/lotteon.json` / `2026-07-13T14:53:34.804Z` / `rgb(51, 51, 51)` / `data-omd-capture="54"` / `data-omd-capture="77"` DESIGN dest 0. `portal H2` / `h3` sibling 0, 본문 승격 0. `listItem`은 원본 §4 `:243` SRC dest 1 — sibling 전용 분류가 아니다.
- **D2a.** 식별자·동기 스케치·소속 신조어 DESIGN dest 0. Primary tasks는 캡처 표면 세 개. Audience는 공식 자료의 customers / participating brands 그룹. 로그 삭제 행은 원형 라벨을 적지 않음 — 이 브랜드는 영어 추론 아키타입이고 발행 한국어 원형 라벨이 아님. 라벨 재수록을 D2a로 지목하지 않음(웨이브 41).
- **E2d.** 부재 단언 행이 자기 자신을 분모에 넣는 형태 없음. sibling-only 절은 「this file에 없다」를 명시적으로 거부한다.
- **같은 hex 다른 역할.** `#ffffff`는 canvas / default tab·dropdown `bg` / selected-tab text 세 귀속. 착수 원장은 canvas≠selected-tab text만 적었음 → E1로 원장·본문 한정을 실제에 맞춤(고침 #3·#11). `#000000`는 catalog `primary_color` / `tokens.colors.primary` / search-icon / selected-tab fill — 보편 filled CTA로 합치지 않음은 착수부터 이름됨.
- **열 구조.** 원본 색 표는 이름·hex·use. 토큰명 열(`--lotteon-…`)은 원본에 없음. 산출 Semantic color는 YAML 경로를 병기. krds형 토큰명 열 삭제는 해당 없음. 충돌 없음(`conflicts: none`); sibling 추가 기하(원형 버튼 `34px`, recent tab `52px`)는 provenance-only로 일관.
- **모션 규칙 원본 부재.** 원본 §15에 커브·duration 없음. 본문 `intentionally` 합성 없음. 부재를 합성하지 않은 것은 모범(웨이브 39 kmong). `cubic-bezier` DESIGN dest 0 · provenance dest 0. 값 인용+역할만 남는 T2 관례 해당 없음(원본에 값이 없음).
- **D1.** `native-client` / `authenticated` / `mobile app` DESIGN dest 0.

AUDIT_DONE fixes=22
