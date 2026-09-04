# rx4-D — 오픈소스는 "큰 이미지·유휴·간결"을 어떻게 만드는가

레인 D · 2026-09-04 · 대상: `omd-aphrodite` r4 (힉스젠 r3 60점 회귀 대응)

---

## 1. 한 줄 결론

오픈소스가 "와우"를 만드는 방식은 **효과를 더 얹는 것이 아니라 이미지 하나에 화면 전체를 내주고 그 이미지에 스스로 움직일 시간 축을 주는 것**이었다 — 그래서 r3 의 실패는 취향이 아니라 세 개의 측정 가능한 기본값(시작 크기 62% 미만 · 유휴 축 없음 · 호버가 열쇠)의 문제였고, 그 셋을 기본값으로 뒤집는 효과 3종(`fullbleed-scale-reveal` · `wide-drum` · `persistent-expand`, 합계 gzip 8.9KB)을 fx-library 에 추가했다.

### 문제를 수치로 (헤드리스 1440×900, `render-r3.html` 실측)

| 섹션 | 미디어 개수 | 가장 큰 이미지 폭 | 높이 |
|---|---|---|---|
| s1 hero | 11 | 127.7%vw | 127.7%vh |
| **s2 range** | **12** | **11.5%vw** | 24.2%vh |
| s3 control | 8 | 63.0%vw | 105%vh |
| **s4 compare** | 8 | **21.1%vw** | 21.1%vh |
| s5 gallery | **22** | 35.7%vw | 56.7%vh |
| **s5b cylinder** | 12 | **18.2%vw** | 33.4%vh |
| **s6 feature** | 4 | **29.0%vw** | 33.3%vh |
| **s7 presets** | 6 | **16.6%vw** | 17.7%vh |
| s8 delivery | 6 | 114.8%vw | 114.8%vh |
| s10 footer | 8 | 100%vw | 56.0%vh |

**미디어가 있는 10개 섹션 중 6개에서 가장 큰 이미지가 뷰포트 폭의 40% 미만이었다. 중앙값 35.7%vw.**
동시에 섹션당 미디어 개수 중앙값은 8개, 최대 22개다 — **작은 것을 많이** 놓은 것이 r3 의 구조다.
사용자가 말한 "소극적인 사이즈"와 "화려함 속의 간결함 부재"는 이 두 줄이다.

---

## 2. 서베이

검증 깊이를 열로 명시한다. **본문 정독 = 해당 URL 을 실제로 열어 읽음. 검색 스니펫 = 검색 결과 요약만 확인, 원문 미대조. 데모 실물은 어느 항목도 확인하지 못했다(헤드리스 환경).**

| # | 출처 / URL | 검증 깊이 | 유휴 가능 | 이미지 뷰포트 점유 | 화면 요소 수 | 호버 역할 | 터치 | 라이선스 | 크기 | 구현 코어 | 모바일 폴백 | 우리 채택 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Codrops — Infinite GSAP Scroll Gallery with Parallax and Flip (2026-07-30) https://tympanus.net/codrops/2026/07/30/building-an-infinite-gsap-scroll-gallery-with-parallax-and-flip-transitions/ | 본문 정독 | ✗ (유휴 정지, 스크롤 관성만) | 썸네일 **190~260px**(≈15%vw), **클릭 시 풀뷰포트** | 슬라이드 12 | **호버 아님 — 클릭이 연다** | Observer 로 휠/터치 동일 처리, `preventDefault:true` | 기사에 명시 없음(리포 링크만) | GSAP core+Observer+Flip+SplitText ≈ 100KB+ | 일시정지 타임라인 + 플레이헤드=스크롤, `Flip.from`/`Flip.fit` | 없음 | **개념 채택**: "클릭이 연다 + 풀뷰포트"를 `persistent-expand` 에. Flip 은 미채택(예산) |
| 2 | Codrops — Scroll-Driven 3D Cube Gallery in Webflow with GSAP (2026-05-26) https://tympanus.net/codrops/2026/05/26/building-a-scroll-driven-3d-cube-gallery-in-webflow-with-gsap/ | 본문 정독 | ✗ (순수 스크롤 구동, 자동 회전 없음) | 큐브 `min(30vw,30vh)` / 배경 이미지 **풀스크린 `object-fit:cover`** | 섹션당 컬렉션 2벌, 500vh | 언급 없음 | 문서화 안 됨 | Webflow 튜토리얼(코드 라이선스 불명) | GSAP+ScrollTrigger+SplitText | `preserve-3d` + `cqi` 단위 `translate3d` | 언급 없음 | **미채택** — 전경 오브젝트가 30vw 로 작다. 배경만 풀블리드인 구조는 우리 문제를 못 푼다 |
| 3 | Codrops — Animated Product Grid Preview with GSAP & Clip-Path (2025-05-27) https://tympanus.net/codrops/2025/05/27/animated-product-grid-preview-with-gsap-clip-path/ | 검색 스니펫 (문법은 우리 `hover-cross-open` README 에서 이미 정독 기록) | ✗ | 프리뷰가 그리드 사이를 채움 | 그리드 8칸 + 프리뷰 1 | **호버가 연다 (관문)** | 호버 없는 기기에서 평범한 그리드 | 명시 없음 | GSAP + clip-path | `polygon(50% 50% ×4)` → 사방 확장 | 그리드로 잔존 | **변환 대상** — 우리 `hover-cross-open` 의 원류. §3 에서 클릭 지속으로 변환 |
| 4 | Aceternity UI — Container Scroll Animation https://ui.aceternity.com/components/container-scroll-animation | 본문 정독(문서가 얇음) | ✗ | 문서에 수치 없음. "scroll 로 3D 회전 + scale" | 1 | 없음 | 문서화 안 됨 | https://ui.aceternity.com/licence **(원문 미확인)** | Framer Motion 필요 | `MotionValue` scale/rotate/translate | 문서화 안 됨 | **개념만** — "스크롤로 커지는 프레임 1개"가 `fullbleed-scale-reveal` 의 계보. 코드 미참조 |
| 5 | Aceternity UI — 3D Marquee https://ui.aceternity.com/components/3d-marquee | 본문 정독(문서가 얇음) | ✅ **입력 0 에서 순환** | 문서에 수치 없음. 4열 그리드 | 이미지 배열(개수 미기재) | 없음 | 문서화 안 됨 | 위와 동일 **(원문 미확인)** | Framer Motion 필요 | 4열 분할 + 루프 마퀴 | 문서화 안 됨 | **개념 채택**: "유휴 마퀴". 다만 **4열 그리드 = 작은 타일 다수**라 크기 문제는 그대로 → 우리는 1열 56vh 로 |
| 6 | Magic UI — Marquee https://magicui.design/docs/components/marquee | 본문 정독 | ✅ **입력 0 에서 순환** | 문서에 수치 없음(콘텐츠 폭에 종속) | `repeat` 기본 **4배** 복제 | `pauseOnHover` — **관문 아님, 멈춤만** | 문서화 안 됨 | **MIT** (https://github.com/magicuidesign/magicui) | CSS 애니메이션 + `--duration` | CSS keyframes | 문서화 안 됨 | **채택**: `pauseOnHover` 철학 + 복제 전략. **단, CSS `animation` 은 드래그 중간에 이어받을 수 없어 rAF 로 다시 씀**. 문서에 `prefers-reduced-motion` 언급 없음 |
| 7 | React Bits — CircularGallery / FlyingPosters / DomeGallery / MorphSlider https://reactbits.dev/components/circular-gallery , https://reactbits.dev/components/flying-posters | 카탈로그 정독(써드파티 미러 catalog.md) + 라이선스 원문 정독 | ✅ (Circular/Flying 은 스크롤+유휴 혼합) | 대형 포스터 지향 | — | 보조 | 제스처 라이브러리 사용(Dome) | **MIT + Commons Clause** (https://github.com/DavidHDev/react-bits) | **WebGL: `ogl` / `gl-matrix` 의존** | 셰이더 + 왜곡 | — | **미채택(코드)**. ① Commons Clause 는 판매 제한 조항이라 코드 복사에 리스크 ② 렌더 시 네트워크 0·단일 HTML 제약에서 ogl 인라인은 예산 밖 ③ 필요한 것은 셰이더가 아니라 `translate3d` 1개 |
| 8 | React Bits — AccordionGallery (`deps: gsap`) | 카탈로그 정독 | ✗ | 패널 확장형 | 4~6 | **"expand on hover or focus" = 관문** | 명시 없음 | 위와 동일 | GSAP | flex/width 확장 + 패럴랙스 | 명시 없음 | **변환 채택**: 문법은 그대로, **시간 축을 호버에서 (자동 순환 + 클릭 고정)으로 옮김** → `persistent-expand` |
| 9 | React Bits — ScrollStack (`deps: lenis`) / Stack (`deps: motion`, autoplay) | 카탈로그 정독 | Stack ✅(autoplay) / ScrollStack ✗ | 카드 크기 | 4~5 | 보조 | 스와이프 | 위와 동일 | Lenis / Motion | sticky 겹침 · 스와이프 스택 | — | **미채택** — 우리 `sticky-card-stack` 이 CSS 14줄로 같은 일을 한다 |
| 10 | Motion Primitives https://github.com/ibelick/motion-primitives | 검색 스니펫 | 컴포넌트별 | — | — | — | — | **MIT** | Framer Motion 의존 | — | — | **미채택** — 이미지 대형화 축의 컴포넌트를 찾지 못함 |
| 11 | Cult UI https://github.com/nolly-studio/cult-ui | 검색 스니펫 | — | — | — | — | — | **MIT** | Framer Motion 의존 | — | — | **미채택** — 동상 |
| 12 | Uiverse https://github.com/uiverse-io/galaxy | 검색 스니펫 | 개별 | 대체로 **버튼·카드 단위(작음)** | — | 다수가 호버 구동 | — | **MIT** | 순수 CSS 다수 | CSS | — | **미채택** — 스케일 축이 아예 다르다(컴포넌트 장식) |
| 13 | Swiper — coverflow/autoplay https://swiperjs.com | 검색 스니펫 | ✅ autoplay 내장 | 설정 종속 | — | 설정 | 우수 | **MIT** | **≈47KB**(최소 구성 ≈20KB) | 자체 엔진 | 내장 | **미채택** — 우리 `coverflow-ring` README 의 판단과 동일: 필요한 건 소수 인덱스 1개 |
| 14 | Embla Carousel + autoplay 플러그인 https://www.npmjs.com/package/embla-carousel | 검색 스니펫 | ✅ 플러그인 | 설정 종속 | — | 설정 | 우수 | **MIT** | **core ≈7KB gz** | 헤드리스 | 직접 | **미채택(근소)** — 7KB 는 감당 가능하나 우리가 필요한 무한 띠 로직은 60줄이고, 예산은 GSAP 114.7KB 로 이미 차 있다 |
| 15 | CSS `scroll-snap` 풀스크린 갤러리 https://css-tricks.com/practical-css-scroll-snapping/ , https://ishadeed.com/article/css-scroll-snap/ | 검색 스니펫 | ✗ (사용자 스크롤 필요) | **100vw × 100vh 로 자연히 풀블리드** | 섹션 N | 없음 | 네이티브 | 웹 표준 | **0KB** | `scroll-snap-type` + `scroll-snap-align` | 네이티브 | **부분 채택(주의)** — 크기 축은 공짜로 해결되지만 유휴 축이 없고, 스냅 타깃이 뷰포트 전체면 모바일에서 콘텐츠 접근이 막힐 수 있다(출처가 명시한 함정). 랜딩 전체 스냅은 금지, 섹션 내부에서만 |
| 16 | Three.js / ogl / curtains.js 이미지 플레인 | 조사만(코드 미검토) | ✅ | 풀스크린 가능 | — | — | — | 각 MIT | **three ≈600KB+ / ogl 수십 KB** | 셰이더 | — | **미채택 — 이유 3개**: ① 단일 standalone HTML 에 인라인하면 gzip 예산 60KB 를 단독으로 초과 ② 우리가 원하는 것(확대·띠·펼침)은 전부 합성 transform 으로 되고 셰이더가 필요 없다 ③ WebGL 컨텍스트는 저사양·배터리 리스크가 있고 유휴 층 규칙(화면 밖 정지)과 궁합이 나쁘다 |

### 서베이에서 반복해서 나온 네 가지 (r4 규칙 후보)

1. **큰 이미지는 "확대"가 아니라 "기본값"이다.** Codrops #1 의 썸네일은 15%vw 지만 그것은 *목록*이고, 사건은 클릭 후 **풀뷰포트**다. 우리 r3 은 목록만 있고 사건이 없었다.
2. **유휴는 마퀴에서 온다.** 입력 0 에서 움직이는 사례(#5, #6, React Bits Stack autoplay)는 전부 **한 축의 등속 순환**이었다. 복잡한 유휴가 아니라 **단순한 한 방향**이다.
3. **호버는 어디서도 "여는 열쇠"가 아니었다.** #6 은 `pauseOnHover`(멈춤), #1 은 클릭. 호버가 여는 것은 #3·#8 이고, 둘 다 그 대가로 **터치 폴백에서 기능을 잃는다**.
4. **요소 수는 적다.** #1 은 12장, #5 는 4열. 22개를 한 섹션에 놓는 구성은 어디에도 없었다.

---

## 3. 우리 fx-library 호버 관문 감사 → 변환안

| 효과 | 현재 층 | 호버가 하는 일 | 판정 | 변환안 (r4) |
|---|---|---|---|---|
| `stack-fan-hover` | 호버 | **관문** — 호버해야 펼쳐지고 떠나면 닫힌다 | **변환 필요** | ① 기본 상태를 **58% 펼침**으로(모바일 규칙을 데스크톱에도 승격) ② 호버는 **추가 12%** 만 ③ 클릭 = 전체 펼침 **지속** ④ 카드 폭을 화면 폭의 12% → **22%** 로. 단, 힉스젠 S2 에서는 이 효과 자체를 `wide-drum` 으로 교체 권장 |
| `hover-cross-open` | 호버 | **관문** — 호버해야 프리뷰가 열린다. 터치에서는 `display:none` = 기능 소멸 | **변환 필요** | ① **중앙 1칸을 상시 열린 상태**로 두고(기본값이 이미 큰 프리뷰) ② 호버/포커스는 프리뷰 **내용 교체**만 ③ 클릭 = 그 칸 고정 ④ 터치에서는 탭으로 교체(숨기지 않는다) ⑤ 프리뷰 크기를 그리드 폭의 **60% 이상**으로 |
| `flip-expand-card` | 호버·전환 | 호버는 리프트, **여는 것은 이미 클릭** | **부분 변환** | ① 그리드 카드 기본 크기를 **29%vw → 46%vw**(2열) ② 열림 `inset` 을 `7vh 8vw` → **`0`(진짜 풀블리드)** ③ 호버 리프트를 −6px → **−2%** 로 통일 ④ 닫기 버튼을 명시(현재 Escape 만) |
| `poster-cylinder` | 유휴 | 감속(관문 아님) | **크기만 변환** | ✅ 유휴는 정상. 다만 실측 **18.2%vw** 로 작다. 반지름·포스터 폭을 키워 띠가 **최소 45%vw** 를 차지하게. 힉스젠에서는 `wide-drum` 과 배타이므로 r4 에서 S5b 삭제 권장 |
| `coverflow-ring` | 유휴 | 정지(관문 아님) | **크기만 변환** | ✅ 유휴 정상. 중앙 커버 높이를 **40vh 이상**으로 못 박는다 |
| `drift-collage` | 유휴·배경 | 없음 | **유지, 단 용도 제한** | 타일이 작은 것이 **의도**(배경)다. 문제는 이걸 **전경 이미지 자리에 쓴 것**. r4 에서는 배경 전용으로만 |
| `sticky-card-stack` | 스크롤 | 없음 | **유지** | 카드 높이 56~76vh 규칙이 이미 "큰 이미지"를 강제한다 |
| `mask-wipe-reveal` | 스크롤 | 없음 | **유지** | 마스크는 크기와 무관. `fullbleed-scale-reveal` 과 같은 섹션 금지(스크롤 동사 1개) |

### 변환 규칙 5개 (업종 무관, 스킬에 승격 권장)

1. **기본 상태 규칙** — 호버·클릭 없이 보이는 상태가 이미 "볼 만한 상태"여야 한다. 호버 뒤에 있는 것은 **터치 사용자에게 없는 것**이다.
2. **호버 상한 규칙** — 호버가 바꿀 수 있는 것은 **2% 리프트 · 밝기 · 자동 진행 정지**까지. 레이아웃을 바꾸는 호버는 관문이다.
3. **지속 규칙** — 여는 것은 클릭/탭이고, 열린 것은 **다시 닫을 때까지 열려 있다**. 포인터 이탈로 닫히지 않는다.
4. **크기 하한 규칙** — 섹션의 주인공 이미지는 **폭 ≥ 45%vw 또는 높이 ≥ 40vh**. 둘 다 미달이면 그 섹션에는 주인공이 없는 것이다.
5. **요소 상한 규칙** — 한 섹션에 동시에 보이는 미디어 **6개 이하**. 12장을 보여줘야 하면 **순환**시킨다(공간이 아니라 시간에 쌓는다).

---

## 4. 신규 3종

경로: `docs/design-excellence/fx-library/{fullbleed-scale-reveal,wide-drum,persistent-expand}/`
각 폴더 = `README.md`(출처·라이선스·언제 쓰나·금기·크기) + `demo.html`(단독) + `snippet.css` + `snippet.js` + `preview.jpg`.
전부 **외부 의존 0 · 렌더 시 네트워크 요청 0**. 합계 **gzip 8.9KB**(예산 60KB 의 15%).

### (a) `fullbleed-scale-reveal` — "이미지가 작다" 를 구조로 막는다

- **무엇을**: 프레임 하나가 시작부터 **62vw** 이고, 핀 구간에서 **100vw(=화면 끝)** 까지 자란 뒤 여정의 55% 지점에서 **멈춰 머문다(hold 45%)**.
- **왜**: r3 의 6개 섹션이 40%vw 미만이었다. 이 효과는 **최소값이 62%** 라서 "소극적인 사이즈"가 물리적으로 불가능하다. 그리고 **hold 구간이 시원시원함의 정체**다 — hold 가 없으면 큰 그림이 화면 끝에 닿는 순간 밀려나가 사용자는 그것을 *본 적이 없게* 된다.
- **간결함**: 움직이는 값이 `--e` **하나**다. 배율·라운드·자막·진행 눈금이 전부 그 함수. 호버 없음.
- **크기**: CSS 84줄 + JS 38줄 / **gzip 2.5KB**
- **검증** (헤드리스 크로미움 1440×900): 콘솔 에러 **0**, 가로 오버플로 **0px**

  | 여정 | `--e` | 프레임 폭 | 라운드 |
  |---|---|---|---|
  | 0% | 0 | **62.0vw** | 26px |
  | 30% | 0.906 | 96.4vw | 2.4px |
  | **55%** | **1** | **100vw** | 0px |
  | 70% / 98% | 1 | 100vw (hold) | 0px |

  `prefers-reduced-motion: reduce` → 핀 해제(`position:static`), 이미지 `min(84svh,720px)` **정적 블록으로 잔존**(1440×900 에서 720px), 에러 0.
- **스크린샷**: `docs/design-excellence/fx-library/fullbleed-scale-reveal/preview.jpg` (17.9KB)

### (b) `wide-drum` — "가만히 두면 죽어 있다" 를 막는다

- **무엇을**: **뷰포트 전폭** 포스터 띠. 타일 높이 **56vh**. 입력 0 에서 **62px/s** 로 계속 흐른다. 호버하면 멈추고, 드래그하면 따라오고, 놓으면 기본 속도로 **수렴**한다.
- **왜**: 유휴 사례(#5·#6)는 전부 "한 축 등속 순환"이었지만 **타일이 작았다**. 이 효과는 `--fx-drum-h: 56vh` 를 기본값으로 두고 README 에 **"40vh 미만이면 이 효과를 쓸 이유가 없다"** 를 금기로 못 박았다.
- **간결함**: 프레임당 트랙 transform **1개** + 화면 안 타일의 `--d` 4~6개. 레이아웃은 리사이즈 때만 읽는다. 명암은 `filter` 가 아니라 `::after` 의 opacity(합성).
- **호버**: **관문 아님** — 멈춤만. 터치에서 잃는 것이 없다.
- **크기**: CSS 73줄 + JS 81줄 / **gzip 3.1KB** (Swiper 47KB, Embla 7KB, ogl 수십 KB 대비)
- **검증**: 콘솔 에러 **0**, 가로 오버플로 **0px**, 입력 0 상태 0.9초에 트랙 **55.9px 이동**(≈62px/s, 설정값 일치), 타일 높이 **57.7vh**, 띠 폭 **100vw**, 복제 후 24장.
  `reduce` → 0.9초 동안 이동 **0px**(정지하되 남긴다), 드래그는 생존, 에러 0.
- **스크린샷**: `.../wide-drum/preview.jpg` (19.0KB)

### (c) `persistent-expand` — "매번 호버해야 펼쳐진다" 를 막는다

- **무엇을**: 가로 4패널 중 하나가 항상 **행 폭의 62.7% · 68vh** 로 열려 있고, **5.2초마다 스스로 옆으로 옮겨 간다**. 클릭하면 그 자리에 **고정**(자동 순환 정지, "고정됨" 배지), 다시 클릭하거나 `Esc` 로 해제.
- **왜**: r3 의 `stack-fan-hover`·`hover-cross-open` 은 호버가 열쇠였다. 이 효과는 **기본 상태가 이미 크고**(규칙 4), **호버는 2% 리프트뿐**(규칙 2), **열림은 지속**(규칙 3), **유휴 축이 있다**(규칙 1). 네 규칙을 한 컴포넌트로 시연한다.
- **간결함**: 상태는 클래스 **하나**(`.is-open`). JS 는 클래스만 바꾼다. 닫힌 패널도 세로 라벨로 무엇인지 읽힌다.
- **정직한 비용**: `flex-grow` 트랜지션은 **매 프레임 레이아웃**이다. `contain: layout paint` 로 범위를 가두고 **패널 5장 상한**을 금기에 명시했다. 그 이상은 FLIP 으로 가야 한다.
- **접근성**: `role=button` · `aria-expanded` · Enter/Space/←→/Esc. 열림이 지속 상태라 **스크린리더가 읽는 도중 사라지지 않는다** — 호버 프리뷰가 구조적으로 못 하는 것.
- **크기**: CSS 96줄 + JS 63줄 / **gzip 3.1KB**
- **검증**: 콘솔 에러 **0**, 가로 오버플로 **0px**, 입력 0 으로 5.6초 → 열린 index **0 → 1**(자동 순환), 열린 폭 **62.7%**, 높이 **68vh**, 4번 클릭 → `is-pinned` 부착 후 **5.6초 더 기다려도 index 3 유지**(지속 확인).
  `reduce` → 5.6초 동안 index **0 유지**(순환 정지), 클릭 고정은 정상, 에러 0.
- **스크린샷**: `.../persistent-expand/preview.jpg` (39.1KB)

INDEX.md 에는 층별 표(유휴 2종 · 이미지 리빌 1종), **"큰 이미지 축"** 절, 배타 관계(`wide-drum` ↔ `poster-cylinder`/`coverflow-ring`, 가로 축 배타, 핀 예산)를 함께 반영했다.

---

## 5. r4 권장 배정 — 섹션당 효과 1층

원칙: **섹션당 스크롤 1 · 유휴 1 · 호버 1 이하**, 그리고 **주인공 이미지 ≥ 45%vw 또는 ≥ 40vh**, **동시 미디어 ≤ 6**.
핀 구간은 페이지당 **4개**가 상한이다.

| 섹션 | r3 (실측) | r4 권장 | 효과 (1층) | 결과 이미지 점유 | 근거 |
|---|---|---|---|---|---|
| S0 진입 | `entry-curtain-count` | **유지** | 진입 1회 | — | 커튼이 열리는 순간 이미 무언가 돌고 있어야 한다 |
| **S1 Hero** | 11개 미디어(콜라주 7 + 줌스루), 127%vw | **`fullbleed-scale-reveal` 1개 + `ambient-fold` 광원만** | 스크롤 1 · 유휴 1(배경) | 62vw → **100vw** | `drift-collage` 7타일 **삭제** — 작은 타일 다수가 문제의 원형이다. 배경 광원 1겹만 남긴다 |
| **S2 Range** | `stack-fan-hover`, **11.5%vw**, 12개 | **`wide-drum` 으로 교체** | **유휴 1** | 띠 **100vw**, 타일 **56vh** | 호버 관문 제거 + 12장을 **공간이 아니라 시간에** 쌓는다(동시 노출 4~5장) |
| S3 Control 스크럽(핀) | R5 스크럽, 63%vw | **유지 + 프레임 88vw 로 확대** | 스크롤 1 | 63 → **88vw** | 효과는 옳다. 크기만 부족했다 |
| **S4 Compare** | 자동 스윕, **21.1%vw** | **밴드를 풀블리드로**(92vw × 72vh), 슬라이더 유지 | 스크롤 1 · 호버 1(슬라이더) | 21 → **92vw** | 비교는 큰 화면에서만 성립한다 |
| **S5 Gallery** | 가로 핀, **22개 미디어**, 35.7%vw | **`persistent-expand` 로 교체 (핀 해제)** | **유휴 1** | 열린 패널 **62% × 68vh** | 22개 → **4패널**. 핀 1개 반납(예산 확보). 자동 순환으로 4장 전부 노출 |
| **S5b Cylinder** | `poster-cylinder`, **18.2%vw** | **섹션 삭제** | — | — | `wide-drum`(S2) 과 **3D 유휴 동사 배타**. 역할이 중복이고 크기는 1/3 이다. 섹션 수를 줄이는 것이 간결함이다 |
| **S6 Feature** | `flip-expand-card` 호버, **29%vw** | **`fullbleed-scale-reveal` 2번째 핀** | 스크롤 1 | 62 → **100vw** | 대표작 한 장이라면 사건도 한 개여야 한다 |
| **S7 Presets** | 틸트 + 스포트라이트 + 선택 = **호버 3겹**, 16.6%vw | **호버 동사 1개(선택)만 남기고 미리보기 확대** | 호버 1 | 16.6 → **44%vw**(2×2, 각 40vh) | 호버 동사는 섹션당 1개. 나머지 둘은 소음이다 |
| S8 Delivery(핀) | R6 스크럽 114%vw + `hover-cross-open` | **`hover-cross-open` 제거, 스크럽만** | 스크롤 1 | **114vw 유지** | 이미 충분히 크다. 호버 관문만 덜어내면 된다 |
| S9 Plan | 라이브 수치 점멸 | **유지** | 유휴 1(텍스트) | — | 이미지 없는 섹션은 그대로 |
| S10 Footer | 브레이크아웃 100vw | **유지** | 스크롤 1 · 호버 1(`magnetic-cursor`) | 100vw | 문제 없음 |

### 이 배정이 만드는 변화 (예상치, r4 렌더 후 같은 리그로 재측정할 것)

- **섹션 11 → 9** (S5b 삭제, S2 단순화) — "화려함 속의 간결함"
- **40%vw 미만 섹션 6 → 0**; 주인공 이미지 폭 중앙값 **35.7%vw → 약 92%vw**
- **핀 구간**: S1 · S3 · S6 · S8 = **4개**(상한 정확히 충족, S5 반납분으로 S6 확보)
- **호버 관문 3개(S2 팬 · S6 FLIP · S8 십자) → 0개**. 터치에서 잃는 기능 0
- **유휴 층**: S1(배경 광원) · S2(`wide-drum`) · S5(`persistent-expand`) — **섹션당 1개, 전부 이미지에 붙어 있다**
- **최대 동시 미디어 22 → 6**

### 남은 리스크

1. **`persistent-expand` 의 `flex-grow` 레이아웃 비용** — 패널 4장 + 자식 2단계까지만 검증했다. 힉스젠 S5 에서 카드 내부 구조가 깊어지면 FLIP 전환을 재검토한다.
2. **핀 4개가 상한에 정확히 걸린다** — S6 을 핀으로 쓰려면 S5 의 핀 해제가 **선결 조건**이다. 둘은 한 묶음으로 결정해야 한다.
3. **Aceternity 라이선스 원문 미확인** — 개념만 참조했고 코드는 참조하지 않았으므로 현재 리스크는 없으나, 향후 코드 참조 시 https://ui.aceternity.com/licence 를 먼저 읽어야 한다.
4. **React Bits 는 MIT + Commons Clause** — 판매 제한 조항이 있다. **코드 복사 금지, 문법 참조까지**로 선을 그었고 우리 구현은 전부 자작이다.
5. **데모 실물 미확인** — 서베이 항목 중 라이브 데모를 육안 확인한 것은 없다(헤드리스 환경). 문서/카탈로그 기준 판단임을 각 행에 명시했다.
