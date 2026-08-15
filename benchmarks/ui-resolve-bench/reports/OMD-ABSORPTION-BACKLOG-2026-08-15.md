# OMD-ABSORPTION-BACKLOG

경쟁 skill arm 산출물(같은 도서관 랜딩 과제)에서 **원리만** 흡수한다. 스킬 문구·라이선스 코드는 복사하지 않는다.

## 0. 입력과 한계

| 산출물 | 파일 | 외부 판정(참고) |
|---|---|---|
| ui-ux-pro-max | `artifacts/93b071a2-…-ui-ux-pro-max/index.html` | 60/100. 반응형·접근성·증거정직 PASS. journey·runtime FAIL. 전 arm 유일 접근성 통과 |
| ui-ux-pro-max (다른 seed) | `artifacts/9c5cf628-…-ui-ux-pro-max/index.html` | 대조군. 토큰/반응형 힌트는 더 드러나나 CTA 과다 |
| anthropic | `artifacts/93b071a2-…-anthropic-frontend-design/index.html` | 포스터풍 개성. unavailable-information 4연속 누락 |
| anthropic (다른 seed) | `artifacts/9c5cf628-…-anthropic-frontend-design/index.html` | 히어로=태그 폼. 모바일 내비 없음 |
| model-only | `artifacts/93b071a2-…-model-only/index.html` | 주 CTA 계열 11회. journey 실패 |
| model-only (다른 seed) | `artifacts/9c5cf628-…-model-only/index.html` | 스티키 바까지 primary 반복 |
| luna stub | `artifacts/luna-caf0-anthropic-index.html` | 빈 셸. 분석 대상 아님 |

`FILES.txt`는 `css/` `js/` `styles/` `design-system/`을 가리키지만 **이 디렉터리에는 `index.html`만 있다.** 미디어쿼리·focus ring·대비 수치는 CSS를 직접 읽지 못했다. 아래 근거는 HTML 랜드마크, ARIA 그래프, 클래스 아키텍처, SVG/인라인 색, noscript 미디어쿼리에서만 뽑는다.

공통 최다 실패는 판정과 코드가 일치한다.

- 주 CTA 유일성: `Reserve a tool` / `Reserve` / `Reserve this kind`가 크롬·히어로·카드·스티키·푸터에 반복.
- `unavailable-information`: 전 arm에 `data-state` 같은 **기계가 잡을 수 있는 부재 상태 노드가 없다.** 93b071a2 pro-max만 리뷰·재고·회비·추천을 **산문**으로 부정해 증거정직은 통과한 것으로 보인다.

---

## 1. ui-ux-pro-max가 접근성·반응형을 통과한 구조

다른 arm도 skip / `aria-expanded` / 라벨은 있다. 통과 arm만 가진 것은 **한 벌의 내비, 완전한 필드 그래프, 정보 SVG와 장식 SVG의 분리, 대비가 짝으로 고정된 색, wrap+disclosure 레이아웃**이다.

### 1.1 Focus

- 첫 포커스가 skip이고 목표가 `#main`이다. anthropic·일부 model-only는 `#reserve`로 건너뛰어 “본문으로 가기”가 주 CTA와 같다.
- 모바일 메뉴는 **한 개의** `#site-nav`를 disclosure로 연다. `aria-expanded` / `aria-controls` / `data-nav-label`(Open↔Close 교체 슬롯) / backdrop `tabindex="-1"`.
- 제출 성공 노드는 `tabindex="-1"` + `role="status"`라서 JS가 포커스를 옮길 수 있다.
- 카탈로그는 `#reserve` 링크가 아니라 `button` + `data-tool-prefix`다. 포커스가 페이지를 떠나지 않고 필드를 채운다.

### 1.2 ARIA·시맨틱

- 장식 아이콘 `aria-hidden`. 의미 있는 그림은 `role="img"` + `aria-labelledby` + `<title>` + `<desc>`.
- 모든 필드: `label[for]` ↔ `id`, `aria-describedby`가 hint+error를 한 체인으로 묶음, 에러 `role="alert"`, 성공 `role="status" aria-live="polite"`.
- 표: 보이는 `caption`, `th scope="col|row"`.
- FAQ는 `details/summary` (커스텀 아코디언 키보드 구현이 필요 없음).
- 9c5cf628 pro-max는 히어로 보드 전체를 `aria-hidden="true"`로 가려 대출전표 카피를 SR에서 지운다. 통과 arm은 그렇게 하지 않는다.

### 1.3 레이아웃·미디어

- `.wrap` / `.wrap--shell` 한 줄 폭. `.form-grid` + `.field--full`. `.shop`은 형제 패널이라 3열이 깨져도 스택된다.
- 헤더 = brand | nav | 단일 크롬 CTA | toggle. 9c5cf628는 데스크톱 내비 + 모바일 내비 + primary를 복제하고, noscript에서 `max-width: 1023px`로 모바일 목록을 열어 둔다.
- viewport + (9c5cf628) `color-scheme` / `btn-label-full|short`.

### 1.4 색 대비

- SVG에 navy `#1E3A8A` / `#1E40AF` on ice `#EFF6FF` / `#FFFFFF`, 배지 흰 글자 on `#15803D`.
- `theme-color`를 light/dark 미디어로 짝지음.
- 9c5cf628는 `--color-primary`와 `--color-on-primary`를 **한 쌍**으로 쓴다. 단독 primary 토큰이 아니다.

**일반화:** 접근성은 속성 나열이 아니라 (1) 스킵 목표 = 본문, (2) 내비 한 벌, (3) 필드 ID 그래프, (4) 정보/장식 미디어 분리, (5) 성공 포커스 타깃, (6) 전경·배경 토큰 쌍, (7) wrap + disclosure다.

---

## 2. anthropic 시각 개성 — 원리만

복제 대상은 페그보드/스탬프 모티브가 아니다. **장소가 레이아웃이 되고, 타입이 포스터처럼 끊기며, 표면이 교차하고, 빈 훅이 정보를 대신한다.**

- **타입 스케일 = 역할 4단.** `.eyebrow` / `.display` / `.section-title` / `.lede`. 9c5cf628는 히어로를 세 줄 `.display`로 끊어 포스터 리드를 만든다. 마케팅 장문이 아니다.
- **색 = 표면 이름.** `pegboard`(어두운 오브젝트) · `section--enamel` · `section--wash` · `hours-plaque` · `stamp`. 9c5cf628 `theme-color: #163e42`. 브랜드 블루 한 방이 아니라 **작업장 재질**.
- **섹션 리듬 = 교차 표면.** 93b071a2: 페그보드 히어로 → enamel(절차) → wash(베이) → enamel(방문 2열) → wash(카드 폼). 이미지/오브젝트 섹션과 카피 섹션이 번갈아 숨 쉰다.
- **UI가 물건.** 훅·섀도보드·대출 카드·행 태그(`tag__eyelet`)·fascia. `hang.is-out`은 빈 훅만 남겨 “지금은 없음”을 **그림으로** 말한다. 다만 이것은 장식이지 required state가 아니다.
- **공간 좌표.** Bay A–J, station A–D. 그리드에 주소가 생긴다.
- **폼을 히어로에 붙이면** (9c5cf628) 별도 히어로 CTA가 사라져 시각과 journey가 같이 단순해진다. 개성의 부산물이 유일성에 유리하다.

---

## 3. 공통 실패 2종 — 구조적 강제

산문 주의만으로는 반복 실패한다. 컨트롤러가 **DOM에서 셀 수 있게** 계약해야 한다.

### 3.1 `unavailable-information`

브리프에 없는 사실(실시간 재고, 후기, 회비, 지도 좌표, 대기열 번호, 추천 로고)은 세 갈래로 붕괴한다.

| 붕괴 | 예 | 결과 |
|---|---|---|
| 침묵 | anthropic에 후기·회비·추천 슬롯 자체 없음 | 상태 4연속 누락 |
| 날조 | `14 Linden Avenue`, Fernwood, 가상 이메일 | 증거정직 위험 |
| 산문만 | pro-max “We do not publish ratings…” | 정직 PASS, 상태 머신 FAIL 가능 |

강제: `design-md`의 `honesty.unknown[]` 각 항목마다 보이는 `[data-state="unavailable-information"]` 노드. 브리프에 없는 고유명·가격·별점·지도 iframe은 린트 실패.

### 3.2 주 CTA 유일성

주 동사 `Reserve a tool` 계열 가시 컨트롤 수 (제목/본문 문장 제외):

| Arm | 크롬+히어로+제출+푸터 primary | 카드/스티키 추가 | 합 |
|---|---:|---:|---:|
| 93b071a2 model-only | 3 | 8 × “Reserve this kind” | **11** |
| 9c5cf628 pro-max | 5 | 8 × “Reserve” 링크 | 13 |
| 93b071a2 anthropic | 5 | 0 | 5 |
| 93b071a2 pro-max | 4 | 카테고리는 힌트 문구만 | 4 |
| 9c5cf628 model-only | 3 + 스티키 바 | 0 | 4 |
| 9c5cf628 anthropic | 3 (폼이 히어로) | 0 | 3 |

강제: `journey.primaryAction.maxVisible = 1` (크롬 한 곳). 제출 버튼은 `data-cta="submit"`. 타일은 `data-cta="local"`이고 주 동사 문자열 금지. 스크롤 복제·푸터 메가 CTA·스티키 바는 기본 금지.

---

## 4. 흡수 백로그

형식: **[원리] → [근거] → [OmD 반영] → [우선순위]**

### ABS-01. 스킵 목표는 본문이지 주 CTA가 아니다

- **[원리]** 첫 포커스 링크는 `#main`(또는 동등 landmark)만 가리킨다. 과제 동사 섹션으로 건너뛰면 접근성 스킵과 journey 주행동이 충돌한다.
- **[근거]** 통과: `93b071a2-…-ui-ux-pro-max/index.html:13` `href="#main"`, `:50` `<main id="main">`. 실패 패턴: `93b071a2-…-anthropic-…/index.html:45` `href="#reserve"`; `9c5cf628-…-model-only/index.html:16`은 `#reserve`로 스킵하면서 `:46`에 `#main`이 따로 있다.
- **[OmD 반영]** 스킬 문구: “skip-link 목표 = main landmark”. 컨트롤러: 첫 `a[href^="#"]`가 `main` 또는 `[role=main]`인지. design-md 슬롯: `a11y.skipTarget`.
- **[우선순위]** H

### ABS-02. 내비는 한 벌, disclosure로만 접는다

- **[원리]** 데스크톱 목록과 모바일 목록을 복제하지 않는다. 한 `nav` + `aria-expanded`/`aria-controls` + 스크린리더 라벨 교체 + 배경은 탭 순서 밖.
- **[근거]** 통과: `93b071a2-…-ui-ux-pro-max/index.html:29-48` (`#site-nav`, `data-nav-toggle`, `data-nav-label`, backdrop `tabindex="-1"`). 복제: `9c5cf628-…-ui-ux-pro-max/index.html:52-84` (Primary + Mobile + primary CTA 추가). 9c5cf628 anthropic은 토글 자체가 없다 (`:26-32`).
- **[OmD 반영]** 스킬: “nav landmark ≤ 1, 좁은 폭은 disclosure”. 컨트롤러: `nav` 개수, 토글–패널 ID 연결, 복제된 동일 `href` 쌍. design-md: `layout.nav.mode = disclosure`.
- **[우선순위]** H

### ABS-03. 폼은 필드 단위 ID 그래프 + 이중 라이브 영역 + 성공 포커스

- **[원리]** 라벨·힌트·에러·성공이 각각 id로 묶인다. 에러는 `role="alert"`, 성공은 `role="status"` + `tabindex="-1"`. `novalidate`는 커스텀 에러를 쓸 때만 허용한다.
- **[근거]** 통과: `93b071a2-…-ui-ux-pro-max/index.html:373-440` (`aria-describedby="email-hint email-error"`, `role="alert"`, 성공 `:373-375`). 결손: anthropic `93b071a2-…:316-338` (래핑 label만, 에러 id 없음); model-only `93b071a2-…:433` `role="status"`만 있고 `aria-live` 없음; `9c5cf628-…-ui-ux-pro-max/index.html:383`은 에러에 `aria-live`만 있고 `role="alert"`가 없다.
- **[OmD 반영]** 스킬: 필드 그래프 체크리스트. 컨트롤러: `required` 컨트롤마다 `label[for]`·에러 id·submit 후 포커스 가능 노드. design-md: `states.form = [empty, invalid, submitting, success]`.
- **[우선순위]** H

### ABS-04. 정보 미디어와 장식 미디어를 분리한다

- **[원리]** 의미가 있는 그림은 이름과 설명을 갖는다. 장식만 `aria-hidden`. 의미 있는 카피를 담은 장식 래퍼를 통째로 숨기지 않는다.
- **[근거]** 통과: `93b071a2-…-ui-ux-pro-max/index.html:70-71`, `:329-331` (`role="img"` + title/desc). 장식: 같은 파일 `:18`, `:119`. 과도한 은닉: `9c5cf628-…-ui-ux-pro-max/index.html:103` `.hero-board` 전체 `aria-hidden` (내부 전표 카피 포함).
- **[OmD 반영]** 스킬: “의미 SVG = named image, 아이콘 = hidden”. 컨트롤러: `svg`가 제목 없이 단독이거나, `aria-hidden` 조상 안에 `h2`/`p`/`dl`이 있으면 실패. design-md: `a11y.media[]`.
- **[우선순위]** M

### ABS-05. 색은 단독 값이 아니라 전경·배경 쌍이다

- **[원리]** 본문·버튼·배지는 (fg, bg) 토큰으로만 칠한다. 라이트/다크 `theme-color`도 쌍이다.
- **[근거]** `93b071a2-…-ui-ux-pro-max/index.html:7-8` (theme-color light `#EFF6FF` / dark `#0B1220`); SVG `:73-104`, `:332-336` (navy on ice, 흰 글자 on `#15803D`). `9c5cf628-…-ui-ux-pro-max/index.html:6`, `:41-44` (`--color-primary` / `--color-on-primary`).
- **[OmD 반영]** 스킬: “토큰은 on-색 쌍”. 컨트롤러: primary 버튼·본문 텍스트에 짝 토큰이 있는지(빌드 후 대비 계산은 CSS가 들어올 때). design-md: `tokens.color.pairs[]`.
- **[우선순위]** M

### ABS-06. 레이아웃은 wrap + 수정자 그리드 + 스택 가능한 패널

- **[원리]** 한 measure(`.wrap`). 그리드는 “풀폭” 수정자를 갖는다. 3열 샵/데스크는 형제로 두어 좁은 폭에서 자연 스택. 헤더 CTA 라벨은 짧은 대체형을 가질 수 있다.
- **[근거]** `93b071a2-…-ui-ux-pro-max/index.html:16`, `:52`, `:290-327`, `:378` (`wrap`, `shop__panel`, `form-grid`, `field--full`). `9c5cf628-…-ui-ux-pro-max/index.html:14-17` (`@media (max-width: 1023px)` noscript), `:68` (`btn-label-full` / `btn-label-short`).
- **[OmD 반영]** 스킬: “고정 N열 금지, full-span 수정자, 헤더는 disclosure”. 컨트롤러: `viewport` 메타, 1023/48em 근처 브레이크 존재(CSS 동봉 시). design-md: `layout.measure`, `layout.breakpoints`.
- **[우선순위]** M

### ABS-07. 카탈로그 타일은 local action이다

- **[원리]** 분류 카드는 주 CTA가 아니다. 필드를 채우거나 스크롤만 한다. 눈에 보이는 동사는 주 동사와 달라야 한다.
- **[근거]** 상대적으로 나음: `93b071a2-…-ui-ux-pro-max/index.html:165-224` (`button.category` + `data-tool-prefix`, 힌트 “Reserve from this shelf”). 실패: `93b071a2-…-model-only/index.html:158-265` (8× `cat__cta` “Reserve this kind” → 헤더·히어로·제출과 합쳐 11); `9c5cf628-…-ui-ux-pro-max/index.html:202-280` (8× `<a href="#reserve">` + “Reserve”).
- **[OmD 반영]** 스킬: “컬렉션 타일 = local, 주 동사 문자열 금지”. 컨트롤러: 아래 ABS-11과 공유. design-md: `journey.localActions[]`.
- **[우선순위]** H

### ABS-08. 타입 역할 4단과 포스터형 리드

- **[원리]** 페이지 타입은 eyebrow / display / title / lede 네 역할만 쓴다. 히어로 display는 짧은 줄로 끊는다. 본문 lede는 한 호흡.
- **[근거]** `93b071a2-…-anthropic-…/index.html:70-75`, `:173-176` (`.eyebrow` `.display` `.lede` `.section-title`). `9c5cf628-…-anthropic-…/index.html:44-48` (세 줄 `.display`: “Borrow the ladder. / Bring it back / next Saturday.”).
- **[OmD 반영]** 스킬: “히어로를 문단으로 쓰지 말고 2–4 짧은 줄”. design-md: `tokens.type.roles = [eyebrow, display, title, lede]`. 컨트롤러: `h1` 단어 수/줄 수 상한(느슨).
- **[우선순위]** M

### ABS-09. 섹션 리듬은 교차 표면이다

- **[원리]** 인접 섹션이 같은 회색 슬래브가 되지 않게, 표면 토큰(어둡/에나멜/워시, 또는 muted/plain)을 교차한다. 한 섹션은 “물건”, 다음 섹션은 “절차”.
- **[근거]** `93b071a2-…-anthropic-…/index.html:68` `.hero.pegboard` → `:171` `.section--enamel` → `:203` `.section--wash` → `:263` enamel → `:301` wash. 통과 arm도 `:111` `section--alt`로 약하게 교차한다.
- **[OmD 반영]** 스킬: “연속 섹션 동일 표면 금지”. design-md: `rhythm.surfaces[]` (섹션마다 표면 id). 컨트롤러: 인접 `section`의 surface 클래스 동일하면 경고.
- **[우선순위]** L

### ABS-10. 물건 메타포는 상태의 그림이지 상태 자체가 아니다

- **[원리]** 빈 훅·스탬프·행 태그는 개성을 준다. 그러나 required state를 대체하지 않는다. `is-out` 훅 옆에 기계 판독 가능한 부재 상태가 있어야 한다.
- **[근거]** `93b071a2-…-anthropic-…/index.html:107-113` (`figure.hang.is-out`, 캡션 “Circular saw · shadow”). `9c5cf628-…-anthropic-…/index.html:72-76` (폼이 행 태그). 두 파일 모두 `data-state` / unavailable 노드 없음.
- **[OmD 반영]** 스킬: “장식 부재 ≠ unavailable-information”. design-md: `motif` 슬롯과 `states.required`를 분리. 컨트롤러: 모티프 클래스만 있고 `data-state`가 없으면 실패.
- **[우선순위]** H

### ABS-11. 주 CTA 유일성 린트

- **[원리]** 한 뷰포트 상태에서 주 동사를 가진 크롬 컨트롤은 하나. 허용: (a) 헤더 또는 히어로 중 한 곳의 `data-cta="primary"`, (b) 폼 `type="submit"` (`data-cta="submit"`). 금지: 카테고리·푸터 메가 버튼·스티키 바·모바일 내비 복제.
- **[근거]** 11회: `93b071a2-…-model-only/index.html:40,53,170,183,196,210,223,237,251,265,429`. 통과 arm도 4회: `93b071a2-…-ui-ux-pro-max/index.html:38,60,438,485` (journey FAIL과 정합). 스티키: `9c5cf628-…-model-only/index.html:467-469`. 폼-인-히어로로 줄어든 예: `9c5cf628-…-anthropic-…/index.html:32,126,293`.
- **[OmD 반영]** 스킬: “primary 동사는 한 곳, 타일은 다른 동사”. 컨트롤러: `a.btn--primary, button.btn--primary, [data-cta=primary]` + 가시 텍스트가 주 동사와 일치하는 컨트롤 수를 세어 `maxVisible` 초과 시 실패. design-md: `journey.primaryAction = { verb, href, maxVisible, allowedSurfaces }`.
- **[우선순위]** H

### ABS-12. required-state 체크리스트를 활성화 계약에 넣는다

- **[원리]** 랜딩 활성화 조건에 `unavailable-information`을 명시한다. 산문 한 줄이 아니라 **보이는 상태 노드**다. 슬롯 예: 실시간 재고, 후기/평점, 요금/회비, 지도/좌표, 대기열 번호, 제3자 추천.
- **[근거]** 전 arm `data-state` 0건. 산문 정직(통과 arm): `93b071a2-…-ui-ux-pro-max/index.html:162` (not live inventory), `:276-277` (no ratings/quotes), `:512` (no stock/dues/endorsements). 슬롯 침묵(anthropic 4연속과 정합): 같은 후기·회비·추천·지도 부재 상태가 `93b071a2-…-anthropic-…`에 없음. 지도 대신 날조: `:267` “14 Linden Avenue”. 대조로 지도 부재를 말한 예: `9c5cf628-…-ui-ux-pro-max/index.html:319`, 대기열 부재 `:360`.
- **[OmD 반영]** 스킬: “브리프에 없는 사실 = 각 슬롯에 unavailable 상태”. 컨트롤러: `honesty.unknown[]` 길이 = `[data-state=unavailable-information]` 개수, 각 노드에 제목+대체 행동. 활성화 게이트: 상태 집합 ⊂ {empty, loading, error, success, unavailable-information}. design-md: `honesty.unknown[]`, `states.required[]`.
- **[우선순위]** H

### ABS-13. 반-날조 린트 (부재 상태의 반대편)

- **[원리]** 브리프 소스에 없는 도로명, 이메일, 가격, 별점, 재고 숫자, 임베드 지도는 출력 금지. 모르면 ABS-12 노드를 연다.
- **[근거]** 날조 주소: `93b071a2-…-anthropic-…/index.html:267`. 장소 고유명: `9c5cf628-…-anthropic-…/index.html:5,18,50` (Fernwood / Pender Lot). 가상 메일: `9c5cf628-…-ui-ux-pro-max/index.html:475`; `93b071a2-…-model-only/index.html:375`. 통과 arm은 지명을 “Cedar Block / Community Building” 수준으로 두고 `:325`에서 전용 주차장이 없다고 말한다.
- **[OmD 반영]** 컨트롤러: 브리프 엔티티 화이트리스트 밖 고유명·`mailto:`·통화/별점 패턴. design-md: `honesty.allowedEntities[]`. 스킬: “없는 주소/메일을 만들지 말 것”.
- **[우선순위]** H

### ABS-14. 표와 시간은 닫힌 날까지 한 캡션 아래

- **[원리]** 영업시간 표는 `caption` + row header + **닫힌 요일**. 열린 날만 있는 plaque는 부재(휴무) 상태를 숨긴다.
- **[근거]** 통과: `93b071a2-…-ui-ux-pro-max/index.html:294-318` (caption, `scope`, Sun–Fri closed). 부분: `9c5cf628-…-anthropic-…/index.html:53-61` 히어로 plaque는 토·수요일만, 표 `:251-257`도 휴무 행이 없다.
- **[OmD 반영]** 스킬: “시간 표는 7일 또는 명시적 Closed 행”. 컨트롤러: hours 표에 Closed/휴무 셀 또는 7행. design-md: `content.hours.closedPolicy`.
- **[우선순위]** L

### ABS-15. 산출물 계약에 CSS/JS를 포함한다

- **[원리]** HTML만 남기면 반응형·포커스 링·런타임을 채점할 수 없다. 통과 arm도 `css/landing.css` + `js/landing.js`를 참조한다. 이번 스냅샷에 파일이 없어 runtime FAIL과 구분이 안 된다.
- **[근거]** `93b071a2-…-ui-ux-pro-max/index.html:10`, `:516`. 각 arm `FILES.txt`는 css/js를 나열하나 이 디렉터리에 파일이 없다.
- **[OmD 반영]** 컨트롤러: `index.html`이 가리키는 로컬 css/js가 워크스페이스에 존재하는지, 폼/내비 data-hook에 대응하는 스크립트 여부. 스킬이 아니라 **패키징/검증 게이트**.
- **[우선순위]** M

---

## 5. Autopilot이 먼저 넣을 것

1. **H — 계약:** `states.required`에 `unavailable-information`, `journey.primaryAction.maxVisible=1` (ABS-11, ABS-12).
2. **H — 린트:** 주 동사 카운트, 반-날조, 필드 ID 그래프, skip→main, nav 1벌 (ABS-01–03, 07, 11–13).
3. **M — 토큰/레이아웃:** fg/bg 쌍, wrap+disclosure, 타입 4역할 (ABS-05, 06, 08).
4. **L — 리듬/모티프:** 교차 표면, 시간 표 휴무 행. 모티프는 상태와 분리 (ABS-09, 10, 14).

통과 arm에서 가져갈 것은 페인트가 아니라 **그래프**(포커스·ARIA·토큰 쌍·내비 한 벌)다. anthropic에서 가져갈 것은 스프라이트가 아니라 **역할 있는 타입 + 교차 표면 + 짧은 포스터 리드**다. 둘 다 컨트롤러가 세지 못하면 다음 라운드에서 같은 두 가지로 다시 떨어진다.

BACKLOG-COMPLETE

---

## 5. Hallmark 원리 흡수 (Fable 분석 — SKILL 요약 기반, 문구 복제 없음)

Hallmark(Nutlope, MIT, @13ac0ec7)는 v0.3 보충 arm으로 실측 예정이지만, 공개 구조에서 미리 배울 원리:

### ABS-H1. 상태 체크리스트를 "권고"가 아니라 "계약"으로
- **[원리]** 인터랙티브 컴포넌트마다 8-state(default/hover/focus-visible/active/disabled/loading/error/success)를 의무화하고, 데모 래퍼로 각 상태를 라벨링해 보여준다. 우리 벤치마크의 전 arm 공통 실패(상태 누락)를 겨냥하는 유일한 경쟁 설계.
- **[OmD 반영]** §3.1의 `data-state` 강제와 결합: design-md `states[]`를 컨트롤러 activation 계약에 포함 — 상태 노드가 DOM에 없으면 adopt 거부. 우선순위 **H**.

### ABS-H2. 사전 자기비평 패스(pre-emit critique)
- **[원리]** 방출 전 6축(Philosophy/Hierarchy/Execution/Specificity/Restraint/Variety) 1–5 자기채점, 3 미만이면 수정 후 방출. 채점 스탬프를 산출물 주석에 남겨 검증 가능.
- **[OmD 반영]** omd-autopilot의 방출 직전 단계에 축별 자기채점+스탬프 도입(축 이름은 OmD 고유로 재설계: 예: Proof/Hierarchy/States/Honesty/Restraint). 컨트롤러가 스탬프 존재를 검사. 우선순위 **M**.

### ABS-H3. 구조 다양화 규칙(diversification)
- **[원리]** 연속 산출물이 macrostructure와 테마 축(명도/디스플레이체/액센트) 중 최소 1개에서 달라야 함 — "같은 hero→3-feature→CTA→footer 리듬" 재발 방지.
- **[OmD 반영]** omd-autopilot이 reference 카탈로그 선택 시 직전 run의 구조 지문과 비교해 중복 회피(우리는 실기업 레퍼런스 카탈로그가 있어 지문 다양화에 더 유리). 우선순위 **M**.

### ABS-H4. 슬롭 게이트의 사후 검사 위치
- **[원리]** 58개 게이트를 생성 후(Step 7) 로드해 검사→실패분 수정→핸드오프. 생성 중 컨텍스트를 게이트 텍스트로 오염시키지 않음.
- **[OmD 반영]** omd-slop-audit(113규칙)를 autopilot 방출 파이프라인의 사후 단계로 정식 편입(현재는 별도 스킬). 우선순위 **M**.

주의: 이상은 공개 요약에서 추출한 설계 원리이며, Hallmark 문구·게이트 텍스트의 복제는 하지 않는다(MIT여도 OmD 정체성 원칙). 실측 대조는 v0.3 보충 9셀 결과로 갱신한다.
