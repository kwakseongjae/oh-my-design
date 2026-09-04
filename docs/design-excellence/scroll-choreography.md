# 스크롤 안무 · OSS 라이브러리 리서치 (2026-09-04)

**의뢰**: Higgsgen r1(60/100) 피드백 — "그리드 배치를 넘어 스크롤하면서 줌이 되거나 돌거나 하는 Framer/scroll-world 계열", "훌륭한 CSS 라이브러리나 오픈소스가 있다면 제로 베이스가 아니라 활용".
**제약 재정의**: 우리 제약은 **렌더 시 네트워크 요청 0**이지 **라이브러리 0이 아니다.** 라이선스가 허용하면 minified 소스를 단독 HTML `<script>` 안에 인라인한다.
**범용성**: 이 문서의 규칙·레시피는 업종 무관하다. 이미지 id 는 전부 변수(`IMG[...]`)로 두고, 어떤 브랜드가 자기 이미지셋을 꽂아도 같은 안무가 성립하도록 쓴다.

- 작성: 아프로디테 TF 리서치 요원 (opus5)
- 검증 환경: 실제 파일 다운로드(jsDelivr) + `test-v2/tools/lib/browser.mjs` chromiumRuntime 으로 `file://` 실행
- 테스트 HTML: `docs/research/fx-tests/` · 인라인용 라이브러리 원본: `docs/research/fx-tests/lib/`

## 목차
1. [§1 라이브러리 결정표](#1-라이브러리-결정표)
2. [§2 스크롤 안무 기법 카탈로그](#2-스크롤-안무-기법-카탈로그)
3. [§3 레시피 8종 (동작 검증됨)](#3-레시피-8종)
4. [§4 인라인 정책 · 폴백 · 리스크](#4-인라인-정책--폴백--리스크)

---

## 1 라이브러리 결정표

### 1.1 실측 (2026-09-04, jsDelivr 에서 `curl` 로 실제 파일을 받아 `wc -c`)

| 라이브러리 | 버전 | 라이선스(확인 방식) | minified raw | gzip | 인라인 가능 |
|---|---|---|---|---|---|
| **GSAP core** | 3.15.0 | GreenSock Standard — **상업 이용 무료** (gsap.com/standard-license 원문 확인) | **71.2 KB** | 27.7 KB | ✅ |
| **GSAP ScrollTrigger** | 3.15.0 | 동상 (구 Club 플러그인 포함 전부 무료) | **43.5 KB** | 17.6 KB | ✅ |
| GSAP Observer | 3.13.0 | 동상 | 9.8 KB | 4.2 KB | ✅ |
| GSAP Flip | 3.13.0 | 동상 | 24.4 KB | 9.3 KB | ✅ |
| GSAP ScrollSmoother | 3.15.0 | 동상 (구 Club 전용 → 현재 무료) | 13.1 KB | — | ✅ |
| GSAP SplitText | 3.15.0 | 동상 (구 Club 전용 → 현재 무료) | 7.6 KB | — | ✅ |
| **Lenis** | 1.3.11 (npm latest 1.3.26) | **MIT** (npm `license` 필드) | **16.4 KB** | 4.7 KB | ✅ |
| Motion (구 Motion One) | 12.23.12 (npm latest 13.2.0) | **MIT** | 79.1 KB | 27.6 KB | ✅ |
| Locomotive Scroll v5 | 5.0.0-beta.21 (npm latest 5.0.1) | **MIT** | 33.1 KB | 8.4 KB | ✅ |
| ScrollReveal | 4.0.9 | **GPL-3.0 또는 유료 상업 라이선스** (파일 헤더 배너 원문) | 16.2 KB | 5.6 KB | ❌ 정책상 배제 |
| AOS | 2.3.4 | MIT | 14.3 KB + CSS 25.4 KB | 4.6 KB | △ |
| Theatre.js `@theatre/core` | 0.7.2 | Apache-2.0 | 126.4 KB | — | △ 단독으로 과대 |
| Rive `@rive-app/canvas` | 2.42.0 | MIT | **440 KB** + WASM 별도 | — | ❌ WASM 를 런타임에 받는다 → 네트워크 0 위반 |
| three.js | 0.185.1 | MIT | **357 KB** | — | ❌ 예산 3배 |

> ScrollReveal 배너 원문: *"Licensed under the GNU General Public License 3.0 for compatible open source projects and non-commercial use. For commercial sites… purchasing a commercial license."* → 범용 스킬이 남의 상업 사이트를 찍어내는 우리 용도에서는 **쓰지 않는다**.

### 1.2 GSAP 라이선스 — 확인한 것

`https://gsap.com/standard-license/` 원문에서 확인:
- **"Commercial usage is covered under the standard license."** — 상업 이용 무료.
- **"All of GSAP including the plugins that were formerly 'members-only' like SplitText and MorphSVG … can be used in commercial projects at no charge."** — ScrollTrigger·ScrollSmoother·SplitText 포함 전부 무료.
- 제한: **Webflow 의 노코드 비주얼 애니메이션 빌더와 경쟁하는 도구에 GSAP 를 심는 것**이 금지 사용. 니치 도구와 **AI 생성 코드는 "Prohibited Use 가 아니다"** 라고 FAQ 가 명시.
- 우리 용도(생성된 정적 랜딩 HTML 안에 인라인) → **허용**. 다만 우리가 만드는 것이 "코드 없이 애니메이션을 짜는 비주얼 빌더"로 진화하면 재검토가 필요하다. 지금의 `omd:aphrodite`(프롬프트 → 완성 HTML)는 빌더가 아니다.
- npm `gsap@3.15.0` 의 `license` 필드도 `"Standard 'no charge' license: https://gsap.com/standard-license."` 로 동일.

### 1.3 기능 대조 — 스크롤 연동 이미지 변형

| 기능 | GSAP+ScrollTrigger | Motion | Locomotive v5 | AOS | 네이티브 CSS `animation-timeline` |
|---|---|---|---|---|---|
| scrub(스크롤=타임라인 위치) | ✅ `scrub`(관성 계수까지) | ✅ `scroll()` | △ progress 값만 | ❌ | ✅ `scroll()`/`view()` |
| **pin(구간 고정)** | ✅ `pin` — 핵심 | ❌ 없음 | ❌ | ❌ | ❌ (position:sticky 로 우회) |
| 가로 핀 이동 | ✅ pin + x | 수동 | 수동 | ❌ | sticky+scroll() 로 가능 |
| scale / rotate / rotateY(3D) | ✅ 한 API | ✅ | 수동 | 프리셋만 | ✅ |
| stagger(다중 요소 시차) | ✅ `stagger`/함수형 값 | ✅ | ❌ | ❌ | ❌(요소별 선언 필요) |
| 리사이즈 재계산 | ✅ `invalidateOnRefresh` | 수동 | ✅ | 부분 | ✅ 자동 |
| `prefers-reduced-motion` | 내장 아님 → **`gsap.matchMedia()`/직접 분기** | 내장 아님 | 내장 아님 | `disable` 옵션 | CSS 미디어쿼리로 자연 분기 |
| file:// 단독 HTML 동작 | ✅ **실측 확인** | 미측정 | 미측정 | 미측정 | ✅ 실측(Chrome 149) |

### 1.4 결정

- **1순위 — GSAP core + ScrollTrigger, 인라인 114.7 KB.**
  `pin`·`scrub`·함수형 stagger·`invalidateOnRefresh` 를 **한 API** 로 쥔다. 목표 8개 레시피 중 6개가 `pin` 없이는 성립하지 않는다(핀이 없으면 "스크롤로 돌린다"가 아니라 "지나가면서 조금 움직인다"가 된다). 라이선스는 상업 이용 무료로 공식 확인. **9개 레시피 전부 file:// 단독 HTML 에서 콘솔 에러 0 으로 실측 통과.**
- **2순위 — Lenis(MIT, 16.4 KB) 를 GSAP 위에 선택적으로 얹는다.**
  관성 스크롤 자체가 "Framer 느낌"의 절반이다. 배선은 한 가지뿐 — Lenis 가 스크롤 소스, GSAP ticker 가 유일한 rAF(레시피 R9). 합계 **131.1 KB**. 예산 120 KB 를 16 KB 초과하므로 **기본은 끄고, 페이지가 스크롤 안무 중심일 때만 켠다**(플래그).
- **3순위(무예산 폴백) — 네이티브 CSS `animation-timeline: view()/scroll()`.**
  Chrome 149 에서 `view()`·`scroll()`·`timeline-scope` **전부 지원 확인**. **apple.com/airpods-pro 와 apple.com/iphone-17-pro 가 실제로 이걸 쓰고 있다**(스타일시트에서 `animation-timeline` 규칙 검출, 스크롤 시 360/400·454/400 요소 변형). 0 KB·pin 없음. 리빌·패럴랙스·클립 리빌은 이걸로 충분하고, 핀·가로·3D 링은 안 된다.
- **배제**: ScrollReveal(GPL/유료), Rive(WASM 런타임 네트워크), three.js(357 KB), Theatre.js(에디터 전제 + 126 KB).

---

## 2 스크롤 안무 기법 카탈로그

### 2.1 실측한 레퍼런스 (chromium 149, 1440×900, `docs/research/fx-tests/probe-sites.mjs`)

각 사이트를 실제로 열어 ① 스크롤 라이브러리 생존 여부 ② 스크롤 전/후 400개 요소 중 변형된 수를 셌다.

| 사이트 | 검출된 스택 | 스크롤 시 변형 요소 | 비고 |
|---|---|---|---|
| `apple.com/airpods-pro` | **네이티브 CSS `animation-timeline`** (JS 스크롤 라이브러리 0) | 360/400 | 캡처 확인: 스크롤에 따라 그래픽·타이포가 스케일/모프 |
| `apple.com/iphone-17-pro` | 네이티브 CSS `animation-timeline` + WebGL canvas 1 | 454/400 | CSS 안무 + 제품 3D 를 병용 |
| `gsap.com` | **GSAP + ScrollTrigger 라이브** | 524/400 | 1순위 라이브러리의 자사 쇼케이스 |
| `cuberto.com` | **Lenis** | 526/400 | 캡처 확인: 관성 스크롤 + 카드 스택 |
| `locomotive.ca` | **Lenis + `data-scroll` + WebGL canvas 2** | 325/400 | Locomotive v5 = Lenis 기반임을 라이브에서 확인 |
| `framer.com` | Framer 자체 런타임(`data-framer-*`) | 372/400 | "프레이머 느낌"의 원본 |
| `linear.app` | 알려진 라이브러리 검출 0 | 459/400 | 자체 구현 — 라이브러리 없이도 이 밀도가 가능하다는 반례 |
| `lusion.co` | **three.js / WebGL canvas 3** | DOM 0/400 | 모든 운동이 WebGL 안에서 일어남 → DOM 계측 불가 |
| `igloo.inc` | 검출 0 | 0/400 | **확인 못 함** (지연 로딩 또는 봇 차단) |
| `awwwards.com/websites/scroll/` | — | 395/400 | 컬렉션 URL 실재 확인 (개별 수상작 기법은 미확인) |

**여기서 나온 사실 3개**
1. **Apple 은 이미 JS 없이 CSS 로 스크롤 안무를 한다.** 라이브러리는 "쓰거나 안 쓰거나"가 아니라 "핀·타임라인이 필요한 구간에만" 쓰는 물건이다.
2. **Lenis 는 현업 표준에 가깝다** — cuberto·locomotive 둘 다 라이브에서 검출. Locomotive v5 는 자기 사이트에서 Lenis 를 쓴다.
3. **Linear 는 라이브러리 없이 459개 요소를 움직인다** — 밀도는 라이브러리가 아니라 안무가 만든다.

### 2.2 기법 9종

각 항목: **무엇을 하는가 → 실사례 URL → 왜 놀라는가 → 우리 레시피 번호**

1. **줌스루 (썸네일 → 풀블리드)** — 작은 창으로 보이던 프레임이 스크롤과 함께 화면 전체가 된다.
   · `https://www.apple.com/airpods-pro/` (CSS `animation-timeline` 실측) · `https://gsap.com/demos/`
   → **놀라는 이유**: 이미지가 "커지는" 게 아니라 **관객이 앞으로 걸어 들어간다**. 스크롤이 이동 거리로 번역된 첫 순간이다. → **R1**
2. **가로 핀 스크롤** — 세로 스크롤을 세로가 아닌 가로 이동으로 소비한다.
   · `https://gsap.com/docs/v3/Plugins/ScrollTrigger/` (pin + horizontal 은 이 플러그인의 표준 예제)
   → **놀라는 이유**: 스크롤 축과 운동 축이 어긋나는 순간 뇌가 "이 페이지는 규칙이 다르다"고 판정한다. 마키(자동 루프)와 결정적으로 다른 점: **속도의 주인이 사용자**다. → **R2**
3. **3D 회전 카드 팬 / 원통 갤러리** — 목록을 평면 그리드가 아니라 원통 위에 얹고 스크롤로 돌린다.
   · `https://www.cuberto.com/` (Lenis 실측, 카드 스택 캡처 확인) · `https://tympanus.net/codrops/` (이 계열 튜토리얼의 표준 출처)
   → **놀라는 이유**: 그리드는 "전부 보여준 목록", 원통은 "뒤에 더 있는 세계"다. 같은 12장이 더 많아 보인다. → **R3**
4. **스택 펼침/접힘** — 겹쳐 있던 더미가 부채처럼 펼쳐졌다 다시 접힌다.
   · `https://www.cuberto.com/` (스크롤 0.15 → 0.4 구간 카드 스택 캡처 확인)
   → **놀라는 이유**: "여러 장이 있다"를 **한 동작으로** 말한다. 그리드는 세는 것이고 스택은 쥐는 것이다. → **R4**
5. **스크럽 시퀀스** — 같은 장소·같은 렌즈의 연속 프레임을 스크롤로 감는다.
   · `https://www.apple.com/iphone-17-pro/` (CSS 타임라인 + 캔버스 병용 실측)
   → **놀라는 이유**: 정지 이미지 묶음이 **시간**이 된다. 사용자가 재생 헤드를 쥐고 있다는 감각이 영상보다 강하다. → **R5**
6. **스케일 + 클립 리빌** — 마스크가 아래에서 위로 열리고 안쪽 이미지는 **반대 방향으로** 내려앉는다.
   · `https://scroll-driven-animations.style/demos/` · `https://developer.chrome.com/docs/css-ui/scroll-driven-animations`
   → **놀라는 이유**: 페이드인은 "나타났다", 대비 운동은 "**깊이가 있다**". 두 레이어가 서로 다른 속도로 움직이는 순간 평면이 공간이 된다. → **R6**
7. **텍스트-이미지 교차 마스크 (글자를 뚫고 나오는 이미지)** — 글자 안에 갇힌 이미지가 글자를 깨고 화면 전체가 된다.
   · `https://tympanus.net/codrops/` (background-clip:text 계열의 표준 출처) · `https://www.framer.com/`
   → **놀라는 이유**: 타이포와 이미지가 **같은 물체**였다는 걸 뒤늦게 알려준다. 브랜드 단어와 브랜드 이미지가 하나로 붙는다. → **R7**
8. **매치 컷 (섹션 간 컷 연결)** — 경계에서 이미지를 갈아끼우지 않고, 같은 프레임이 다른 장면이 된다.
   · `https://linear.app/` (섹션 경계에서 요소가 끊기지 않고 이어지는 밀도 459/400 실측)
   → **놀라는 이유**: 섹션이 "다음 칸"이 아니라 **같은 카메라의 다음 컷**이 된다. 스크롤이 편집이 된다. → **R8**
9. **패럴랙스 깊이 층 + 관성 스크롤** — 층마다 다른 속도, 스크롤 자체가 미끄러진다.
   · `https://lenis.darkroom.engineering/` (Lenis 공식) · `https://www.locomotive.ca/` (Lenis+data-scroll 실측)
   → **놀라는 이유**: 안무를 하나도 안 바꿔도 **관성만으로** 페이지가 다른 물건이 된다. "Framer 느낌"의 절반은 이징이다. → **R9**

**하지 않은 것**: Awwwards 개별 수상작의 기법은 컬렉션 URL 실재만 확인했고 **작품별 기법은 확인 못 함**. `igloo.inc` 는 로드 자체가 확인 못 함. WebGL(three.js) 계열은 DOM 계측이 불가능해 **기법 분류에서 제외**했다 — 우리 예산(357 KB)에서도 벗어난다.

---

## 3 레시피 8종 (+ 관성 1) — 전부 실측 통과

**소스**: `docs/research/fx-tests/recipes/NN-*.html` (조각) → `build.mjs` 가 GSAP·ScrollTrigger·Lenis 를 **인라인**해 `dist/NN-*.html` 단독 파일로 굽는다.
**검증**: `node run.mjs` — chromium(`test-v2/tools/lib/browser.mjs`)으로 `file://` 로 열고 끝까지 스크롤. **9/9 콘솔 에러 0.**
**검증 2**: `node verify.mjs` — (a) 스크롤 0.25↔0.55 지점의 computed style 델타로 **실제 변형 발생 확인**, (b) `reducedMotion:"reduce"` 컨텍스트에서 **9/9 에러 0, ScrollTrigger 0개 생성**(= 스크럽 경로가 실제로 꺼진다), 이미지는 전부 로드됨.
**시각 확인**: `docs/research/fx-tests/contact-sheet.png` (레시피 5종 × 스크롤 2지점 + apple/cuberto 실사이트).

### 3.0 공통 규약 — 업종 무관하게 재사용하는 법

```js
// 페이지 셸이 딱 3개만 제공하면 어떤 브랜드의 어떤 이미지셋에도 같은 안무가 성립한다.
window.ASSETS = "…/assets/";              // 이미지 디렉터리(또는 data: URI 맵)
window.IMG    = (id) => ASSETS + id + ".png";
window.REDUCED= matchMedia("(prefers-reduced-motion: reduce)").matches;
```
각 레시피 첫 줄의 `const IDS = [...]` **하나만 갈아끼우면 된다**. 이미지 id 는 하드코딩하지 않는다 — 다크 AI 제품이든 ERP 대시보드 스크린샷이든 디자인 스튜디오 포트폴리오든 동일.

**모든 레시피의 reduced-motion 폴백은 "애니메이션만 끄기"가 아니라 "같은 정보를 정적 레이아웃으로 주기"다.**
가로 핀 → 가로 스크롤 컨테이너, 3D 링 → 평면 그리드, 스택 → 펼친 그리드, 매치컷 → 좌우 나란히. 정보가 사라지면 폴백이 아니다.

### 3.1 R1 히어로 줌스루

히어로. 클립패스 창이 30%/34% 에서 0 으로 열리며 안쪽 이미지는 1.4 → 1 로 되돌아온다(반대 방향 = 깊이).

<sub>`recipes/01-zoom-through.html` — CSS 4줄 + 마크업 4줄 + JS 15줄 = **23줄**</sub>

```html
<section class="r1"><div class="r1-stage">
  <figure class="r1-frame"><img id="r1img" alt=""></figure>
  <h1 class="r1-h">One frame,<br><em>every</em> scale.</h1>
</div></section>
```
```js
/* R1 ZOOM-THROUGH — 썸네일 크기의 창이 스크롤과 함께 풀블리드로 열린다.
   이미지 id 는 변수 하나(HERO)만 바꾸면 어떤 브랜드에서도 성립. */
const HERO = "hero-01";
const img = document.getElementById("r1img");
img.src = IMG(HERO);
const h = document.querySelector(".r1-h");
if (REDUCED) {                      // 폴백: 처음부터 풀블리드 정지 화면
  document.querySelector(".r1-frame").style.clipPath = "inset(0% round 0)";
} else {
  gsap.timeline({ scrollTrigger: { trigger: ".r1", start: "top top", end: "+=180%", scrub: 0.6, pin: ".r1-stage" } })
    .fromTo(".r1-frame", { clipPath: "inset(30% 34% round 14px)" },
                         { clipPath: "inset(0% 0% round 0px)", ease: "none" }, 0)
    .fromTo(img, { scale: 1.4 }, { scale: 1, ease: "none" }, 0)
    .fromTo(h, { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, ease: "power2.out" }, 0.45);
}
```

### 3.2 R2 가로 핀 갤러리 — 마키 대체

속도의 주인을 사용자에게 넘긴다. 하단 진행 레일이 "얼마나 남았는지"를 항상 말해준다.

<sub>`recipes/02-horizontal-pin.html` — CSS 6줄 + 마크업 1줄 + JS 18줄 = **25줄**</sub>

```html
<section class="r2"><div class="r2-track" id="r2track"></div><div class="rail"><i id="r2bar"></i></div></section>
```
```js
/* R2 HORIZONTAL PIN — 마키(무한 루프) 대체. 스크롤 = 가로 이동. 사용자가 속도를 쥔다. */
const IDS = ["grid-01","grid-02","grid-03","grid-04","grid-05","grid-06","grid-07","grid-08"];
const track = document.getElementById("r2track");
track.innerHTML = IDS.map((id,i)=>`<figure class="r2-card"><img src="${IMG(id)}" alt=""><figcaption>${String(i+1).padStart(2,"0")}</figcaption></figure>`).join("");
if (REDUCED) {                      // 폴백: 손가락으로 미는 가로 스크롤 컨테이너
  Object.assign(document.querySelector(".r2").style, { overflowX: "auto", height: "auto" });
} else {
  const dist = () => track.scrollWidth - innerWidth + innerWidth * 0.12;
  gsap.to(track, {
    x: () => -dist(), ease: "none",
    scrollTrigger: { trigger: ".r2", pin: true, scrub: 0.5, end: () => "+=" + dist(), invalidateOnRefresh: true,
      onUpdate: (s) => { document.getElementById("r2bar").style.width = (s.progress * 100).toFixed(1) + "%"; } },
  });
  gsap.utils.toArray(".r2-card").forEach((c, i) => {   // 지나갈 때 살짝 커졌다 작아지는 호흡
    gsap.fromTo(c, { scale: 0.92 }, { scale: 1, ease: "none",
      scrollTrigger: { trigger: ".r2", start: () => "top top+=" + i, scrub: true, end: "+=40%" } });
  });
}
```

### 3.3 R3 3D 회전 카드 팬

목록을 원통 위에 얹는다. 360° 를 스크롤 250% 에 매핑.

<sub>`recipes/03-card-fan-3d.html` — CSS 3줄 + 마크업 1줄 + JS 14줄 = **18줄**</sub>

```html
<section class="r3"><div class="r3-stage"><div class="r3-ring" id="r3ring"></div></div></section>
```
```js
/* R3 3D CARD FAN — 그리드 대신 원통. 스크롤이 링을 돌린다(회전 = 목록 탐색). */
const IDS = ["arch-01","arch-02","arch-03","arch-04","prod-01","prod-02","prod-03","prod-04"];
const ring = document.getElementById("r3ring");
const R = Math.round(innerWidth * 0.30), STEP = 360 / IDS.length;
ring.innerHTML = IDS.map((id,i)=>`<figure style="transform:rotateY(${i*STEP}deg) translateZ(${R}px)"><img src="${IMG(id)}" alt=""></figure>`).join("");
if (REDUCED) {                      // 폴백: 평평한 반응형 그리드
  Object.assign(ring.style, { transformStyle: "flat", width: "80vw", height: "auto", display: "grid",
    gridTemplateColumns: "repeat(4,1fr)", gap: "12px" });
  ring.querySelectorAll("figure").forEach((f) => { f.style.position = "static"; f.style.transform = "none"; f.style.aspectRatio = "3/4"; });
} else {
  gsap.timeline({ scrollTrigger: { trigger: ".r3", start: "top top", end: "+=250%", scrub: 0.7, pin: ".r3-stage" } })
    .fromTo(ring, { rotateY: 0, rotateX: 8 }, { rotateY: -360, rotateX: -4, ease: "none" }, 0)
    .fromTo(ring, { scale: 0.8 }, { scale: 1.05, ease: "none" }, 0);
}
```

### 3.4 R4 스택 펼침/접힘

한 더미 → 부채 → 다시 정렬. 0~0.65 펼치고 0.65~1 에서 각도만 0 으로 되돌린다.

<sub>`recipes/04-stack-unfold.html` — CSS 3줄 + 마크업 1줄 + JS 16줄 = **20줄**</sub>

```html
<section class="r4"><div class="r4-stage"><div class="r4-deck" id="r4deck"></div></div></section>
```
```js
/* R4 STACK UNFOLD — 한 장으로 겹쳐 있던 더미가 부채처럼 펼쳐졌다 다시 접힌다(재료/증거 섹션용). */
const IDS = ["mat-01","mat-02","mat-03","mat-04","mat-05","mat-06"];
const deck = document.getElementById("r4deck");
deck.innerHTML = IDS.map((id)=>`<figure><img src="${IMG(id)}" alt=""></figure>`).join("");
const cards = gsap.utils.toArray(".r4-deck figure");
const mid = (cards.length - 1) / 2;
if (REDUCED) {                      // 폴백: 펼쳐진 상태로 고정
  Object.assign(deck.style, { width: "80vw", height: "auto", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px" });
  cards.forEach((c) => { c.style.position = "static"; c.style.aspectRatio = "4/5"; });
} else {
  gsap.set(cards, { rotate: (i) => (i - mid) * 1.2, y: (i) => i * 3 });
  gsap.timeline({ scrollTrigger: { trigger: ".r4", start: "top top", end: "+=220%", scrub: 0.6, pin: ".r4-stage" } })
    .to(cards, { rotate: (i) => (i - mid) * 14, x: (i) => (i - mid) * innerWidth * 0.115,
                 y: (i) => Math.abs(i - mid) * 26, ease: "none" }, 0)
    .to(cards, { rotate: 0, x: (i) => (i - mid) * innerWidth * 0.115, y: 0, ease: "none" }, 0.65);
}
```

### 3.5 R5 스크럽 시퀀스 (개선판)

컷이 아니라 시간이 되게: 크로스페이드 + 1.06 → 1 미세 줌, 그리고 프레임 인덱스 눈금.

<sub>`recipes/05-scrub-sequence.html` — CSS 7줄 + 마크업 1줄 + JS 20줄 = **28줄**</sub>

```html
<section class="r5"><div class="r5-stage" id="r5stage"><div class="r5-cap" id="r5cap"></div><div class="r5-tick" id="r5tick"></div></div></section>
```
```js
/* R5 SCRUB SEQUENCE — 같은 장소·같은 렌즈 프레임을 스크롤로 감는다(핵심: 크로스페이드 + 미세 줌으로 컷이 아니라 시간이 되게). */
const IDS = ["seq-01","seq-02","seq-03","seq-04","seq-05","seq-06","seq-07","seq-08"];
const stage = document.getElementById("r5stage");
stage.insertAdjacentHTML("afterbegin", IDS.map((id)=>`<figure><img src="${IMG(id)}" alt=""></figure>`).join(""));
document.getElementById("r5tick").innerHTML = IDS.map(()=>"<b></b>").join("");
const frames = gsap.utils.toArray(".r5-stage figure"), ticks = [...document.querySelectorAll(".r5-tick b")];
const paint = (p) => { const i = Math.min(IDS.length - 1, Math.floor(p * IDS.length));
  ticks.forEach((t, n) => t.classList.toggle("on", n <= i));
  document.getElementById("r5cap").textContent = `frame ${String(i + 1).padStart(2, "0")} / ${IDS.length}`; };
if (REDUCED) {                      // 폴백: 첫 프레임 정지 + 캡션
  gsap.set(frames[0], { opacity: 1 }); paint(0);
} else {
  const tl = gsap.timeline({ defaults: { ease: "none" },
    scrollTrigger: { trigger: ".r5", start: "top top", end: "+=" + IDS.length * 90 + "%", scrub: 0.35,
      pin: ".r5-stage", onUpdate: (s) => paint(s.progress) } });
  frames.forEach((f, i) => { if (!i) return;
    tl.fromTo(f, { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1 }, i - 0.25);
    tl.to(frames[i - 1], { opacity: 0, duration: 1 }, i - 0.25); });
  paint(0);
}
```

### 3.6 R6 스케일 + 클립 리빌

페이드인 금지. 마스크는 위로 열리고 이미지는 아래로 내려앉는다.

<sub>`recipes/06-scale-clip-reveal.html` — CSS 3줄 + 마크업 1줄 + JS 14줄 = **18줄**</sub>

```html
<section class="r6" id="r6"></section>
```
```js
/* R6 SCALE + CLIP REVEAL — 페이드인 금지. 아래에서 위로 창이 열리고 안쪽 이미지는 반대로 내려앉는다(마스크 대비 운동). */
const IDS = ["abs-01","abs-02","abs-03","abs-04","abs-05","abs-06"];
const host = document.getElementById("r6");
host.innerHTML = IDS.map((id)=>`<figure><img src="${IMG(id)}" alt=""></figure>`).join("");
const figs = gsap.utils.toArray("#r6 figure");
if (REDUCED) {                      // 폴백: 마스크 해제, 정지 그리드
  gsap.set(figs, { clipPath: "inset(0% 0 0 0)" });
} else {
  figs.forEach((f) => {
    gsap.timeline({ scrollTrigger: { trigger: f, start: "top 88%", end: "top 45%", scrub: 0.5 } })
      .fromTo(f, { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", ease: "none" }, 0)
      .fromTo(f.querySelector("img"), { yPercent: -14, scale: 1.18 }, { yPercent: 0, scale: 1, ease: "none" }, 0);
  });
}
```

### 3.7 R7 텍스트를 뚫고 나오는 이미지

글자 마스크 → 스케일 6배 돌파 → 풀블리드 교대.

<sub>`recipes/07-text-breakout.html` — CSS 6줄 + 마크업 4줄 + JS 15줄 = **25줄**</sub>

```html
<section class="r7"><div class="r7-stage">
  <div class="r7-bleed"><img id="r7img" alt=""></div>
  <h2 class="r7-type" id="r7type">MADE<br>OF LIGHT</h2>
</div></section>
```
```js
/* R7 TEXT BREAKOUT — 글자 안에 갇혀 있던 이미지가 스크롤과 함께 글자를 뚫고 화면 전체가 된다. */
const ID = "mat-03", WORD = "MADE\nOF LIGHT";   /* 규칙: 텍스트 마스크에는 값이 넓고 밝은 프레임을 쓴다.
   near-dark ambient 프레임을 넣으면 글자가 배경에 잠겨 읽히지 않는다(실측으로 확인, §4-R3). */
const type = document.getElementById("r7type"), bleed = document.querySelector(".r7-bleed");
document.getElementById("r7img").src = IMG(ID);
type.style.setProperty("--src", `url("${IMG(ID)}")`);
type.innerHTML = WORD.split("\n").join("<br>");
if (REDUCED) {                      // 폴백: 텍스트-마스크 정지 상태(운동 없음, 개념은 유지)
  type.style.backgroundSize = "140% auto";
} else {
  gsap.timeline({ scrollTrigger: { trigger: ".r7", start: "top top", end: "+=200%", scrub: 0.6, pin: ".r7-stage" } })
    .fromTo(type, { backgroundSize: "300% auto", scale: 0.85 }, { backgroundSize: "120% auto", scale: 1, ease: "none" }, 0)
    .to(type, { scale: 6, opacity: 0, ease: "power2.in" }, 0.55)
    .fromTo(bleed, { opacity: 0, scale: 1.25 }, { opacity: 1, scale: 1, ease: "none" }, 0.6);
}
```

### 3.8 R8 매치 컷 — 섹션 간 연결

A 가 화면을 채우는 순간 B 가 같은 크기로 태어나 다시 작아진다.

<sub>`recipes/08-match-cut.html` — CSS 4줄 + 마크업 5줄 + JS 20줄 = **29줄**</sub>

```html
<section class="r8"><div class="r8-stage">
  <figure class="r8-a" id="r8a"><img alt=""></figure>
  <figure class="r8-b" id="r8b"><img alt=""></figure>
  <div class="r8-note" id="r8note"></div>
</div></section>
```
```js
/* R8 MATCH CUT — 섹션 경계에서 이미지를 갈아끼우지 않고 "같은 프레임이 다른 장면이 된다".
   A가 화면을 채우는 순간 B가 같은 크기로 태어나 다시 작아진다 = 컷이 이어진 것처럼 읽힌다. */
const A = "ba-01-a", B = "ba-01-b", LABEL = ["draft", "final"];
document.querySelector("#r8a img").src = IMG(A);
document.querySelector("#r8b img").src = IMG(B);
const note = document.getElementById("r8note");
note.textContent = LABEL[0];
if (REDUCED) {                      // 폴백: 두 장을 나란히(전/후 비교는 그대로 성립)
  Object.assign(document.querySelector(".r8-stage").style, { display: "flex", gap: "2vw", position: "static", height: "60vh" });
  document.querySelectorAll(".r8-a,.r8-b").forEach((f) => { f.style.position = "static"; f.style.opacity = 1; });
  note.textContent = LABEL.join(" → ");
} else {
  gsap.timeline({ scrollTrigger: { trigger: ".r8", start: "top top", end: "+=220%", scrub: 0.5, pin: ".r8-stage",
      onUpdate: (s) => { note.textContent = LABEL[s.progress < 0.5 ? 0 : 1]; } } })
    .to("#r8a", { width: "100vw", height: "100vh", borderRadius: 0, ease: "none" }, 0)
    .to("#r8a img", { scale: 1.12, ease: "none" }, 0)
    .set("#r8b", { width: "100vw", height: "100vh", borderRadius: 0, opacity: 1 }, 0.5)
    .set("#r8a", { opacity: 0 }, 0.5)
    .to("#r8b", { width: "34vw", height: "52vh", borderRadius: 14, ease: "none" }, 0.5);
}
```

### 3.9 R9 Lenis 관성 + 패럴랙스 (선택)

2순위 라이브러리 배선의 정본. Lenis 가 스크롤 소스, GSAP ticker 가 유일한 rAF.

<sub>`recipes/09-lenis-smooth.html` — CSS 3줄 + 마크업 1줄 + JS 16줄 = **20줄**</sub>

```html
<section class="r9" id="r9"></section>
```
```js
/* R9 LENIS + GSAP — 관성 스무스 스크롤을 ScrollTrigger 와 한 클럭에 묶는다(둘이 서로 싸우지 않게 하는 정본 배선).
   이게 "Framer/Awwwards 느낌"의 절반이다: 같은 안무라도 스크롤이 미끄러지면 다른 물건으로 읽힌다. */
const IDS = ["fig-01","fig-02","fig-03","fig-04"];
document.getElementById("r9").innerHTML = IDS.map((id)=>`<figure><img src="${IMG(id)}" alt=""></figure>`).join("");
if (!REDUCED && typeof Lenis !== "undefined") {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
  lenis.on("scroll", ScrollTrigger.update);                 // Lenis 가 스크롤 소스
  gsap.ticker.add((t) => lenis.raf(t * 1000));              // GSAP 가 유일한 rAF 루프
  gsap.ticker.lagSmoothing(0);
  window.__lenis = lenis;
}
gsap.utils.toArray("#r9 figure").forEach((f, i) => {         // 패럴랙스 깊이 층
  if (REDUCED) return;
  gsap.fromTo(f.querySelector("img"), { yPercent: -12 }, { yPercent: 12, ease: "none",
    scrollTrigger: { trigger: f, start: "top bottom", end: "bottom top", scrub: true } });
});
```
---

## 4 인라인 정책 · 폴백 · 리스크

### 4.1 인라인 정책 (범용 규칙)

1. **네트워크 0 은 라이브러리 0 이 아니다.** 판정 기준은 "렌더 시 외부 요청이 있는가"다. minified 소스를 `<script>` 안에 넣으면 요청은 0 이다 — 실측으로 9/9 확인.
2. **라이선스 게이트**: 인라인 대상은 (a) 상업 이용 허용, (b) 소스 재배포 허용, (c) WASM/워커 등 **런타임에 추가 파일을 받지 않는** 것. → GSAP(Standard, 무료) · Lenis(MIT) 통과. ScrollReveal(GPL/유료) · Rive(WASM) 탈락.
3. **출처 표기 의무**: 인라인한 파일의 라이선스 배너 주석을 **지우지 않는다**(GSAP·ScrollReveal 은 배너가 파일에 들어 있다). 런의 `trace.md` 에 `라이브러리 · 버전 · 출처 URL · 라이선스 · 바이트 수`를 한 줄씩 남긴다.
4. **예산**: 기본 **114.7 KB**(GSAP+ScrollTrigger). 관성이 필요하면 +16.4 KB(Lenis) = 131.1 KB. 같은 페이지가 이미 수 MB 의 이미지를 싣고 있으므로 **JS 131 KB 는 페이지 무게의 반올림 오차**다. 다만 예산 상한은 "무게" 때문이 아니라 **의존성 규율** 때문에 유지한다 — 상한을 넘기려면 이유를 trace 에 적는다.
5. **핀이 필요 없는 효과는 라이브러리를 쓰지 않는다.** 리빌·패럴랙스·간단 스크럽은 CSS `animation-timeline: view()/scroll()` 로 0 KB 에 된다(Chrome 149 지원 확인, Apple 이 프로덕션에서 사용 중). GSAP 는 **pin·타임라인·stagger 가 필요한 구간의 도구**다.

### 4.2 폴백 3층

| 층 | 조건 | 동작 |
|---|---|---|
| A | 정상 | GSAP ScrollTrigger 안무 (+선택적 Lenis 관성) |
| B | `prefers-reduced-motion: reduce` | **스크럽 전면 차단** — ScrollTrigger 를 아예 만들지 않고 각 섹션을 정적 레이아웃으로 편성(가로→스크롤 컨테이너, 3D→그리드, 스택→그리드, 매치컷→나란히). 실측: 9/9 에러 0, 트리거 0개 |
| C | 스크립트 실패/차단 | 마크업만으로 읽히게 — 이미지는 `<img>` 로 문서 흐름에 있고, 초기 CSS 는 **콘텐츠를 숨기지 않는다**. (R6 만 예외적으로 `clip-path:inset(100% …)` 로 시작하므로 **`<noscript>` 로 해제 규칙을 넣어야 한다 — 미구현, r2 에서 처리**) |

### 4.3 실측으로 나온 제작 규칙 (범용)

- **R-A 텍스트 마스크에는 값이 넓고 밝은 프레임을 쓴다.** 첫 구현에서 near-dark ambient 프레임(`amb-01`)을 넣었더니 글자가 배경에 잠겨 **읽히지 않았다**(콘택트 시트에서 확인). 매크로 텍스처(`mat-03`)로 바꾸고 `filter:brightness(1.25) contrast(1.1)` 를 걸어 해결. → **마스크용 이미지는 "이 이미지가 예쁜가"가 아니라 "글자 모양이 살아남는가"로 고른다.**
- **R-B 핀 구간 길이 = 사건 수 × 90%~100% vh.** R5(8프레임)는 `end:"+=720%"`. 이보다 짧으면 프레임이 튀고, 길면 사용자가 갇혔다고 느낀다.
- **R-C 반대 방향 운동이 깊이를 만든다.** 컨테이너가 열릴 때 내용은 반대로 움직인다(R1: 창 열림 ↔ 이미지 축소, R6: 마스크 상승 ↔ 이미지 하강). 같은 방향으로 움직이면 그냥 커지는 것이다.
- **R-D 스크럽 계수는 0.35~0.7.** 0 이면 딱딱하고 1 이상이면 손을 떠난 느낌이 든다. 시퀀스(프레임 교체)는 낮게(0.35), 변형(스케일/회전)은 높게(0.6~0.7).
- **R-E 액센트는 사건에만.** r1 리뷰의 WARN(라임이 라벨로 흩어져 사건이 못 됨)을 이 레시피들에 반영: 액센트 색은 **R1 헤드라인 한 단어**, **R2 진행 레일**, **R5 프레임 눈금** — 즉 "지금 무슨 일이 일어나는지"를 말하는 자리에만 쓴다. 카드 테두리·캡션·아이콘에는 쓰지 않는다.
- **R-F `invalidateOnRefresh` 없이 가로 핀을 쓰지 않는다.** 거리 계산이 리사이즈에서 깨진다(R2 에 적용).

### 4.4 Higgsgen r2 적용 매핑 (참고 — 규칙 자체는 업종 무관)

| 현재 섹션 | 문제 | 대체 레시피 |
|---|---|---|
| S1 Hero | 정지 풀블리드 | **R1 줌스루** |
| S2 Range wall (12장) | 자동 마키 = 사용자가 속도를 못 쥠 | **R2 가로 핀** |
| S3 Control (시퀀스 8장) | 컷 전환 | **R5 스크럽 시퀀스**(크로스페이드+미세 줌+눈금) |
| S4 Before/After (4쌍) | 슬라이더 | **R8 매치 컷** |
| S5 Material proof (6장) | 그리드 | **R4 스택 펼침** |
| S7 Space (4장) | 그리드 | **R3 3D 카드 팬** |
| S8 Abstract ground (6장) | 그리드 + 페이드 | **R6 스케일+클립 리빌** |
| S10 Ambient / 브랜드 문장 | 텍스트만 | **R7 텍스트 돌파** (단, R-A 대로 밝은 프레임으로) |
| 전 구간 | 스크롤 감촉 | **R9 Lenis**(플래그로 on) |

### 4.5 남은 리스크 · 확인 못 한 것

- **확인 못 함**: Safari/Firefox 에서의 동작. 측정은 Chromium 149 단일 엔진에서만 했다. `clip-path` 보간과 `background-clip:text` 는 Safari 접두사 이슈 이력이 있다 — r2 빌드 전에 Safari 1회 확인이 필요하다.
- **확인 못 함**: Motion·Locomotive v5·AOS 의 file:// 단독 동작. 크기와 라이선스만 실측했고 **런타임 검증은 GSAP·Lenis·네이티브 CSS 만** 했다.
- **확인 못 함**: Awwwards 개별 수상작의 기법, `igloo.inc` 의 실제 연출.
- **리스크(라이선스)**: GSAP 무료는 "Webflow 의 비주얼 애니메이션 빌더와 경쟁하는 도구"를 금지한다. 우리 산출물이 **"코드 없이 애니메이션을 짜는 편집기"** 로 진화하면 재검토 대상이 된다. 지금(프롬프트 → 완성 HTML)은 해당 없음. 이 판단은 **런의 trace 에 기록해 두고 제품 형태가 바뀔 때 다시 읽는다.**
- **리스크(성능)**: 핀 구간이 많으면 스크롤 길이가 페이지당 수천 vh 로 늘어난다. R1(180%)+R2(트랙 길이)+R3(250%)+R4(220%)+R5(720%)+R7(200%)+R8(220%) 을 한 페이지에 다 넣으면 **스크롤 피로**가 온다. r2 는 **핀 구간 최대 4개**로 제한할 것을 권한다 — 나머지는 R6/R9 같은 비핀 효과로.
- **미구현**: 4.2 의 C층(`<noscript>` 로 R6 클립 해제).

---

## 부록 — 재현 방법

```bash
cd docs/research/fx-tests
node build.mjs     # recipes/*.html + lib/*.min.js → dist/*.html (단독, 네트워크 0)
node run.mjs       # file:// 로 열고 끝까지 스크롤 → 콘솔 에러 0 검사
node verify.mjs    # 변형 델타 + reduced-motion 경로 + 네이티브 CSS 지원
node probe-sites.mjs <url…>   # 실사이트 스택/변형량 계측
node sheet.mjs     # 콘택트 시트 생성 → contact-sheet.png
```

라이브러리 원본(인라인 소스): `docs/research/fx-tests/lib/` — `gsap315.min.js`(71.2 KB) · `ScrollTrigger315.min.js`(43.5 KB) · `lenis.min.js`(16.4 KB) 외.
