# 온집 Design System

<!-- design-md:section experience -->
## 1. Experience

<!-- design-md:claim scope kind=product-surface lang=en -->
### Scope

온집은 자리가 먼저인 상점이다. 사용자는 라이프스타일 장면과 집들이를 보고 상품 24종을 고르고, 스펙·후기·역참조 집들이를 한 자리에서 읽는다. 구매·배송·실시간 재고 수량은 데이터에 없으므로 화면에서 불가능한 정보로 고지한다.
<!-- design-md:claim-end -->

<!-- design-md:claim primary-tasks kind=user-outcomes count=5 lang=en -->
### Primary tasks

- 홈에서 기획전 두 건과 인기 상품, 최신 집들이를 함께 훑는다

- 스토어에서 카테고리와 재고로 거르고 가격 또는 평점으로 정렬한다

- 상품 상세에서 세 컷 갤러리, 스펙, 후기 분포, 등장 집들이를 확인한다

- 집들이를 집 유형으로 거르고 매거진 본문과 사용된 상품을 읽는다

- 없는 상품·글이거나 구매처럼 제공되지 않는 정보를 정직하게 본다
<!-- design-md:claim-end -->

### Design direction

- 철학: 자리가 먼저인 상점. 스튜디오 카탈로그가 아니라 창가와 거실에 앉힌 장면을 앞에 둔다.

- P1 자리가 먼저다 — 라이프스타일·집들이를 우선한다. 흰 배경 그리드와 로고 히어로를 희생한다.

- P2 한 자리에 한 손길 — 고르기와 읽기를 같은 시야에서 끝낸다. 풀폭 히어로와 모달 과다를 희생한다.

- P3 따뜻한 묵음 — 종이·먹·흙색. 악센트는 작은 신호. 퍼플 그라데이션과 순수 흑백을 희생한다.

- 결정 표는 토큰 $description의 D-ID와 Governance 결정 경로로 역추적한다.

### Principles

- D-P1-1 홈은 벤토 8칸 이상. 기획전 2 + 인기 상품 + 최신 집들이로 와이드 공백을 채운다.

- D-P1-2 스토어 카드는 라이프스타일 컷과 한 줄 피치를 쓴다. 가격은 제목 바로 아래.

- D-P1-3 상품 3컷은 갤러리. 캐러셀 문법은 4장 미만에서 쓰지 않는다.

- D-P1-4 집들이 상세는 갤러리 4컷과 본문 단락을 교차하는 매거진.

- D-P2-1 표면 장르는 그림자 타일 하나. 카드 12px, 컨트롤 8px.

- D-P2-2 스토어는 컬럼 추가. 매거진은 중앙 아티클 웰: 본문은 기존 measure(72ch/40em), 갤러리·조인 카드는 ~960px 이미지 웰. 좌측 협폭에 가두면 1440에서 우측이 빈 종이가 된다.

- D-P2-3 상품 상세는 960 이상에서 갤러리+사실 | 후기+집들이 2패인.

- D-P2-4 정렬은 커스텀 리스트박스. 네이티브 셀렉트 팝업 금지.

- D-P2-5 섹션 공기 2.5/4/6rem, 컨트롤 높이 48, 터치 44.

- D-P2-6 disabled는 chip 면·muted 글자·rule 보더. opacity로 흐리지 않는다.

- D-P3-1 종이 #F3EDE3, 먹 #2C261E. 순수 #000/#fff 금지.

- D-P3-2 테라코타 악센트 #A84320는 뷰포트 5% 이하.

- D-P3-3 그림자는 rest/hover/selected 토큰. 선택은 링.

- D-P3-4 한글 고딕 한 패밀리. 디스플레이는 크기와 무게. 트래킹 -0.01em이 하한.

- D-P3-5 모션 120/200/320ms, transform과 opacity만. 감소 모션 필수.

- D-P3-6 사용자 말만. 구현 어휘 금지. 허구 고지는 푸터 한 줄.

### Avoid

- 네이티브 미소장 셀렉트와 파란 라디오

- 개발자 상태 스위처

- 퍼플-시안 그라데이션 헤드라인

- 3열 아이콘-위-헤드라인 타일

- 구현 파일명·필드명을 화면에 쓰기

- 구매·배송·실시간 수량을 지어내기

<!-- design-md:section foundations -->
## 2. Foundations

<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->
### Semantic tokens

- **color.accent**: `#A84320` — D-P3-2 테라코타 신호. 면적 5% 이하.
- **color.accent-ink**: `#F7F1E8` — D-P3-2 악센트 위 글자.
- **color.chip**: `#EFE6D6` — D-P2-1 칩 기본 면.
- **color.disabled**: `#EFE6D6` — D-P2-6 disabled 면. chip과 같다. opacity 금지.
- **color.disabled-ink**: `#5E564C` — D-P2-6 disabled 글자. muted와 같다.
- **color.disabled-rule**: `#D2C8B6` — D-P2-6 disabled 보더. rule과 같다.
- **color.focus**: `#2C261E` — D-P2-5 포커스 링. 종이 위 12.8:1.
- **color.ink**: `#2C261E` — D-P3-1 따뜻한 먹. 순수 검정 금지.
- **color.ink-soft**: `#4A433A` — D-P3-1 이차 본문.
- **color.inverse**: `#322B23` — D-P3-1 푸터·역전 판. L<50이면 글자 토큰을 뒤집는다.
- **color.inverse-ink**: `#F0E8DA` — D-P3-1 역전 면 글자.
- **color.muted**: `#5E564C` — D-P3-1 메타·라벨. 본문 대비 6.2:1.
- **color.paper**: `#F3EDE3` — D-P3-1 따뜻한 종이. 순수 흰색 금지.
- **color.paper-2**: `#E7DDCE` — D-P3-1 밴드·칩 보조 면.
- **color.rule**: `#D2C8B6` — D-P3-3 헤어라인 룰.
- **color.stock-low**: `#7A4A12` — 재고 품절임박 마크.
- **color.stock-ok**: `#2F4A2C` — 재고 판매중 마크.
- **color.stock-out**: `#5C564E` — 재고 품절 마크.
- **elevation.hover**: `0 8px 20px oklch(0.32 0.02 70 / 0.14)` — D-P3-3 호버 한 단.
- **elevation.rest**: `0 1px 2px oklch(0.32 0.02 70 / 0.10)` — D-P3-3 휴식 타일.
- **elevation.selected**: `0 0 0 2px #A84320` — D-P3-3 선택은 링, 면 워시와 동시에 쓰지 않는다.
- **motion.base**: `200ms` — D-P3-5
- **motion.enter**: `0.2 0.7 0.2 1` — D-P3-5 입장.
- **motion.exit**: `0.4 0 1 1` — D-P3-5 퇴장. 바운스 금지.
- **motion.fast**: `120ms` — D-P3-5
- **motion.slow**: `320ms` — D-P3-5
- **radius.card**: `12px` — D-P2-1 타일 카드.
- **radius.control**: `8px` — D-P2-1 컨트롤은 카드보다 타이트.
- **radius.media**: `4px` — D-P2-1 미디어는 거의 직각, 사진이 장르를 맡는다.
- **size.control**: `48px` — D-P2-5 인풋과 버튼 공유 높이.
- **size.hit**: `44px` — D-P2-5 최소 히트.
- **space.12**: `12px` — D-P1-2 카드 내부 제목-가격.
- **space.16**: `16px` — D-P2-5 카드 본문 패딩.
- **space.2**: `2px` — D-P2-5 4pt 스케일 최소.
- **space.24**: `24px` — D-P2-5 카드 액션 분리.
- **space.4**: `4px` — D-P2-5
- **space.40**: `40px` — D-P2-5 섹션 공기 2.5rem.
- **space.64**: `64px` — D-P2-5 섹션 공기 4rem.
- **space.8**: `8px` — D-P2-5 아이콘-라벨 갭.
- **space.96**: `96px` — D-P2-5 섹션 공기 6rem.
- **space.gutter**: `clamp(16px, 4vw, 48px)` — D-P2-2 뷰포트 거터.
- **measure.image**: `960px` — D-P2-2 매거진 이미지 웰. 본문 measure보다 넓다.
- **type.family**: `"Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif` — D-P3-4 한글 커버. 세리프 폴백 없음.

### Contrast pairs

- color.ink on color.paper: minimum 4.5:1
- color.ink-soft on color.paper: minimum 4.5:1
- color.muted on color.paper: minimum 4.5:1
- color.ink on color.paper-2: minimum 4.5:1
- color.ink on color.chip: minimum 4.5:1
- color.disabled-ink on color.disabled: minimum 4.5:1
- color.accent-ink on color.accent: minimum 4.5:1
- color.inverse-ink on color.inverse: minimum 4.5:1
- color.stock-ok on color.paper: minimum 4.5:1
- color.stock-low on color.paper: minimum 4.5:1
- color.stock-out on color.paper: minimum 4.5:1
- color.focus on color.paper: minimum 3:1

### Reduced motion

Required.

### Foundation rules

- 모든 색은 color.* 토큰만 사용한다. 인라인 hex 금지.

- 호버는 면·테두리·그림자를 바꾸고 이동만으로 끝내지 않는다.

- 포커스 링은 :focus-visible 전용이며 즉시 나타난다. transition 금지.

- 모션은 transform과 opacity만. prefers-reduced-motion에서 지속시간 0.

- 악센트 면적은 어떤 뷰포트에서도 약 5%를 넘지 않는다.

- 재고 세 값은 stock-ok / stock-low / stock-out 토큰으로만 표시한다.
<!-- design-md:claim-end -->

<!-- design-md:section typography-assets -->
## 3. Typography & Assets

### Type roles

| Role | Usage | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|---|
| display | 페이지 제목. 한글 디스플레이는 같은 고딕의 무게와 크기로만 위계를 만든다. | "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif | clamp(2rem, 1.4rem + 2.2vw, 3.5rem) | 800 | 1.22 | -0.01em |
| title | 섹션·카드 고유명. | "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif | clamp(1.15rem, 1rem + 0.6vw, 1.5rem) | 700 | 1.3 | -0.01em |
| body | 본문·피치·후기. word-break: keep-all. 줄간격 1.7. | "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif | 1rem | 400 | 1.7 | 0 |
| label | 브랜드·카테고리·재고 라벨. 한글은 올캡스 금지. 작고 낮은 대비의 보조 글자. | "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif | 0.75rem | 600 | 1.4 | 0.04em |
| price | 가격. 천 단위 구분, 원 접미. 제목 바로 아래. | "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif | 1.125rem | 700 | 1.3 | 0 |

### Assets

| Asset | Kind | Source status | License status | Source | Notes |
|---|---|---|---|---|---|
| hangul-gothic-stack | font | official | not-required | Operating-system Hangul gothic faces named by the Korean type contract | 추가 웹폰트 설치 금지. 네트워크 로드 금지. |
| catalog-stills | image | user-provided | not-required | public/assets | 상품 3컷, 집들이 4컷, 기획전 배너. 장식 이미지는 aria-hidden. |

### Rules

- 모든 한글 역할은 같은 고딕 스택을 쓴다. 라틴 세리프 디스플레이 금지.

- 본문과 제목에 word-break: keep-all. 디스플레이 제목에 overflow-wrap: anywhere와 min-width: 0.

- 가격과 숫자는 천 단위 구분, 단위는 숫자 뒤(129,000원, 6평).

- 이미지에 명시적 width/height. 접힌 아래는 loading=lazy, LCP는 eager.

<!-- design-md:section components-states -->
## 4. Components & States

### Component: skip-link

**Semantics:** 본문 건너뛰기. 대상은 #main이며 기본 CTA가 아니다.

- Anatomy: label
- Variants: to-main
- States: default, hover, focus-visible
- Token references: color.accent, color.accent-ink, size.hit

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | 건너뛰기는 항상 사용 가능하다. |
| loading | not-applicable | 동기 화면이며 비동기 제출이 없다. |
| error | not-applicable | 이 컨트롤은 검증 오류를 갖지 않는다. |
| success | not-applicable | 성공은 라이브 요약이 맡고 이 컨트롤 자체는 성공 면을 갖지 않는다. |

### Component: site-nav

**Semantics:** 전 페이지 동일 탐색. 활성 링크는 aria-current=page. 좁은 화면은 공개 버튼으로 접는다.

- Anatomy: wordmark, primary-links, menu-disclosure
- Variants: wide, compact
- States: default, hover, focus-visible, disabled
- Token references: color.ink, color.paper, color.accent, size.hit, motion.base

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | 동기 화면이며 비동기 제출이 없다. |
| error | not-applicable | 이 컨트롤은 검증 오류를 갖지 않는다. |
| success | not-applicable | 성공은 라이브 요약이 맡고 이 컨트롤 자체는 성공 면을 갖지 않는다. |

### Component: button

**Semantics:** 동사 라벨. 뷰당 primary 1개. data-cta로 primary/local/submit을 구분한다.

- Anatomy: label
- Variants: primary, secondary, ghost
- States: default, hover, focus-visible, disabled
- Token references: color.accent, color.accent-ink, color.ink, color.disabled, color.disabled-ink, color.disabled-rule, radius.control, size.control, motion.fast

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | 동기 화면이며 비동기 제출이 없다. |
| error | not-applicable | 이 컨트롤은 검증 오류를 갖지 않는다. |
| success | not-applicable | 성공은 라이브 요약이 맡고 이 컨트롤 자체는 성공 면을 갖지 않는다. |

### Component: filter-chip

**Semantics:** 필터 전용 칩. 선택은 aria-pressed와 지속 마크로 드러난다. 배지와 섞지 않는다.

- Anatomy: label, pressed-mark
- Variants: category, stock, home-type
- States: default, hover, focus-visible, disabled
- Token references: color.chip, color.ink, color.accent, radius.control, size.hit

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | 동기 화면이며 비동기 제출이 없다. |
| error | not-applicable | 이 컨트롤은 검증 오류를 갖지 않는다. |
| success | not-applicable | 성공은 라이브 요약이 맡고 이 컨트롤 자체는 성공 면을 갖지 않는다. |

### Component: listbox

**Semantics:** APG 선택 전용 콤보박스. 포커스는 트리거, 옵션은 aria-activedescendant. Escape는 취소.

- Anatomy: trigger, popup, option
- Variants: sort
- States: default, hover, focus-visible, disabled
- Token references: color.paper, color.ink, color.accent, radius.control, size.control, elevation.hover

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | applicable |  |
| loading | not-applicable | 동기 화면이며 비동기 제출이 없다. |
| error | not-applicable | 이 컨트롤은 검증 오류를 갖지 않는다. |
| success | not-applicable | 성공은 라이브 요약이 맡고 이 컨트롤 자체는 성공 면을 갖지 않는다. |

### Component: product-card

**Semantics:** 전체 클릭 카드. 내부 CTA 없음. 스토어는 라이프스타일 컷과 한 줄 피치를 쓴다.

- Anatomy: media, brand, title, price, pitch, meta
- Variants: store, join
- States: default, hover, focus-visible
- Token references: color.paper, color.ink, radius.card, elevation.rest, elevation.hover, space.16

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | 품절이어도 상세로 들어가므로 카드 자체는 비활성이지 않다. |
| loading | not-applicable | 동기 화면이며 비동기 제출이 없다. |
| error | not-applicable | 이 컨트롤은 검증 오류를 갖지 않는다. |
| success | not-applicable | 성공은 라이브 요약이 맡고 이 컨트롤 자체는 성공 면을 갖지 않는다. |

### Component: image-gallery

**Semantics:** 상품 3컷 정지 갤러리. 캐러셀이 아니다. 선택 컷은 aria-selected.

- Anatomy: stage, thumb, status
- Variants: three-still
- States: default, hover, focus-visible, loading, error
- Token references: color.paper-2, color.ink, radius.media, motion.base

- Interaction kind: interactive

#### State applicability

| State | Applicability | Reason |
|---|---|---|
| default | applicable |  |
| hover | applicable |  |
| focus-visible | applicable |  |
| disabled | not-applicable | 세 컷이 있는 한 갤러리는 항상 조작 가능하다. |
| loading | applicable |  |
| error | applicable |  |
| success | not-applicable | 성공은 라이브 요약이 맡고 이 컨트롤 자체는 성공 면을 갖지 않는다. |

### Component: spec-table

**Semantics:** 소재·크기·색상·구성만 표시한다. 데이터에 없는 스펙을 만들지 않는다.

- Anatomy: row-label, row-value
- States: default
- Token references: color.ink, color.rule, type.family

- Interaction kind: non-interactive
- Interaction reason: 읽기 전용 표이며 포커스 계약이 없다.

### Component: rating-summary

**Semantics:** 목록에 있는 후기로 분포를 계산하고, 상품의 후기 수는 광고된 총수로 따로 밝힌다.

- Anatomy: average, count, distribution
- States: default
- Token references: color.ink, color.accent, color.paper-2

- Interaction kind: non-interactive
- Interaction reason: 집계 표시이며 조작하지 않는다.

### Component: stock-badge

**Semantics:** 판매중·품절임박·품절. 정적 배지. 클릭 없음.

- Anatomy: label
- States: default
- Token references: color.stock-ok, color.stock-low, color.stock-out

- Interaction kind: non-interactive
- Interaction reason: 상태 배지이며 필터 칩과 역할을 섞지 않는다.

### Component: unavailable-note

**Semantics:** 구매·장바구니·배송·실시간 수량처럼 데이터에 없는 정보를 이름 붙여 고지한다. data-state=unavailable.

- Anatomy: label, sentence
- States: default
- Token references: color.ink-soft, color.paper-2, color.rule

- Interaction kind: non-interactive
- Interaction reason: 정직 고지 노드이며 조작면이 없다.

### Component: footer-colophon

**Semantics:** 허구 샘플 고지 한 줄. 상단 배너로 반복하지 않는다.

- Anatomy: disclosure
- States: default
- Token references: color.inverse, color.inverse-ink

- Interaction kind: non-interactive
- Interaction reason: 콜로폰 문장만 담는다.

### Rules

- 인터랙티브 컴포넌트는 default/hover/focus-visible를 시각적으로 구분한다.

- 한 뷰에 primary CTA는 하나. 반복 카드 액션은 data-cta=local.

- 네이티브 폼 컨트롤은 appearance를 제거하고 토큰으로 다시 그린다.

- 빈 상태와 오류 상태는 점선 패널로 카드와 구분한다.

<!-- design-md:section layout-platforms -->
## 5. Layout & Platforms

### Responsive constraints

- Minimum supported width: 320px
- Reflow target: 200% zoom

### Layout rules

- 초광폭 전략: 스토어와 홈은 컬럼 추가, 집들이 상세는 중앙 아티클 웰(본문 measure, 갤러리·조인 ~960px), 배경만 풀블리드.

- 홈 문법: 혼합 벤토. 기획전 2칸을 크게, 인기 상품 4, 최신 집들이 3 이상. 칸 수 8 이상.

- 스토어 문법: 2/3/4 카드 그리드. 트랙은 minmax(0,1fr). 필터+정렬은 그리드 위 툴바.

- 상품 상세 문법: 3컷 갤러리 + 스펙. 960 이상 2패인으로 후기·집들이를 옆에 둔다.

- 집들이 목록 문법: 1/2/3 편집 카드. 집 유형 필터.

- 집들이 상세 문법: 매거진. 갤러리 4와 본문 4를 교차하고, 갤러리·조인 카드는 중앙 960 웰, 문단은 기존 measure.

- 문서 가로 스크롤 금지. overflow-x는 clip. 200% 확대와 320px에서 과업 순서 유지.

- 터치 뷰포트에서 주요 컨트롤은 짧은 변 44px 이상.

### Platform: web

- React + Vite SPA. 라우트 변경 시 제목, 스크롤 복원, h1 포커스.
- html lang=ko. 단일 main, 단일 h1.
- 1280x800에서 홈 접힘: 말머리·제목·리드·기본 행동이 보여야 한다.

<!-- design-md:section content-locales -->
## 6. Content & Locales

### Voice

- 짧은 구어. 물건이 아니라 자리를 말한다. 앉으면 구름 같아요.

- 구현 어휘 금지: 파일명, 필드명, 프레임워크 단어를 화면에 쓰지 않는다.

- 허구 고지는 푸터 한 줄. 섹션마다 반복하지 않는다.

- 없는 정보는 카테고리 이름을 넣어 고지한다. 구매는 이 샘플에 없습니다.

### Terminology

| Term | Preferred form |
|---|---|
| 기획전 | 큐레이션 묶음의 사용자 이름 |
| 스토어 | 상품 목록 화면의 사용자 이름 |
| 재고 | 판매중·품절임박·품절 |
| 집들이 | 거주 후기 매거진의 사용자 이름 |
| 후기 | 상품 리뷰의 사용자 이름 |

### Locale: ko (supported)

- 모든 핵심 카피는 한국어.
- word-break: keep-all. 본문 줄간격 1.6–1.8.
- 가격은 1,290,000원 형식. 평수는 6평.
- html lang과 문서 언어가 같아야 한다.

<!-- design-md:section governance -->
## 7. Governance

<!-- design-md:claim authority kind=project-system lang=en -->
### Authority

This document is the project design contract for the declared scope.
<!-- design-md:claim-end -->

<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->
### Application priority

1. Direct user instructions for the requested scope.
2. Repository facts.
3. This system contract.
4. Reference inspiration.
<!-- design-md:claim-end -->

<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->
### Unknowns

Omit only the smallest unresolved value or group. Do not replace it with a plausible default.
<!-- design-md:claim-end -->

<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->
### Changes

Record, review, and validate changes before adoption.
<!-- design-md:claim-end -->

### Project priority details

1. 요청 프롬프트의 페이지·데이터·품질 계약

2. src/data/data.json과 public/assets의 사실

3. 이 시스템 계약의 토큰과 문법

4. 레퍼런스 영감은 사실로 승격하지 않는다

### Additional change rules

- 토큰이나 문법을 바꾸려면 결정 표에 D-ID를 추가한 뒤 쓴다.

- 컴파일된 DESIGN.md와 바인딩 해시는 컴파일러만 생성한다.

### Decision provenance

- /identity/kind — prompt-fact; value: "project-system"; evidence: .benchmark/PROMPT.md, .omd/runs/onzip-home/design-system-decision.json
- /experience/summary — prompt-fact; evidence: .benchmark/PROMPT.md, .omd/runs/onzip-home/data-inventory.md
- /foundations/tokens/color.paper/$value — agent-proposed-greenfield-decision; value: "#F3EDE3"; evidence: .omd/runs/onzip-home/system/proposal.md, .omd/runs/onzip-home/council/design-system/result.json
- /foundations/tokens/color.ink/$value — agent-proposed-greenfield-decision; value: "#2C261E"; evidence: .omd/runs/onzip-home/system/proposal.md, .omd/runs/onzip-home/council/design-system/result.json
- /foundations/tokens/color.accent/$value — agent-proposed-greenfield-decision; value: "#A84320"; evidence: .omd/runs/onzip-home/system/proposal.md, .omd/runs/onzip-home/council/design-system/result.json
- /foundations/reduced_motion — prompt-fact; value: true; evidence: .benchmark/PROMPT.md
- /layout_platforms/minimum_width_px — prompt-fact; value: 320; evidence: .benchmark/PROMPT.md
- /layout_platforms/reflow_zoom_percent — prompt-fact; value: 200; evidence: .benchmark/PROMPT.md
- /content_locales/locales/0/locale — prompt-fact; value: "ko"; evidence: .benchmark/PROMPT.md, src/data/data.json
- /typography_assets/assets/1/source — repository-fact; value: "public/assets"; evidence: .omd/runs/onzip-home/data-inventory.md, src/data/data.json
- /components_states/components/4/id — prompt-fact; value: "listbox"; evidence: .benchmark/PROMPT.md, .omd/runs/onzip-home/council/interaction/result.json
