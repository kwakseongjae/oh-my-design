# fx-library — 어떻게 만들어졌고 어떻게 쓰나

## 왜 있나
r1 피드백: "CSS 효과가 지하철 라이트 수준이다. 오픈소스와 레퍼런스를 많이 알아두고
그것을 레퍼런스로 활용해라. 제로 베이스 말고 훌륭한 라이브러리를 활용해라."

여기서 "라이브러리를 활용한다"는 두 가지로 갈린다.
1. 남의 코드를 **가져다 넣는다** → 라이선스가 결정한다.
2. 남이 확립한 **어휘를 안다** → 그 어휘로 우리가 짠다.

리서치 결과 이 분야는 1번이 위험하다(아래 라이선스 표). 그래서 이 라이브러리는
**어휘는 최대한 넓게 참조하고, 코드는 100% 자작(MIT)** 으로 간다.
그 대신 각 README 에 "이 어휘는 어디서 왔는지"를 URL 로 남긴다 — 그것이 레퍼런스로서의 값이다.

## 라이선스 판정 (2026-09-04 조사, 1차 소스 확인)

| 대상 | 라이선스 | 벤더링(우리 산출물에 코드 포함) |
|---|---|---|
| Magic UI | MIT (LICENSE 원문 확인) | 가능 |
| Motion Primitives | MIT (`LICENCE.md` 원문 확인) | 가능 |
| uiverse.io (`uiverse-io/galaxy`) | MIT (원문 확인) | 가능 (단, 크라우드 제출물이라 스니펫별 출처는 약함) |
| Cult UI / Eldora UI / Animata / Luxe | MIT (GitHub spdx 확인) | 가능 |
| **Aceternity UI** | **독자 라이선스** — "cannot re-distribute the Item ... regardless of modifications" | **불가** |
| **React Bits** | **MIT + Commons Clause** — "may not sell, sublicense, or redistribute the components themselves" | **불가** |
| **Skiper UI** | 상용($129~549), 라이선스 페이지 없음 | **불가** |
| **GSAP (SplitText 포함)** | 2025-04-30 무료화, 그러나 **MIT 아님**. GreenSock standard no-charge license. "경쟁 비주얼 애니메이션 빌더에 임베드 금지" 조항 | **회색 — 쓰지 않는다** |
| **pokemon-cards-css (홀로 카드)** | **GPL-3.0** (LICENSE 원문 확인) | **불가 (카피레프트 전파)** |
| tsParticles | MIT (npm 표기) | 가능하나 이 라이브러리에선 불필요 |
| vanilla-tilt.js | MIT (배지 확인), 3년 이상 미유지보수 | 불필요 (26줄로 대체) |

→ 결론: **이 라이브러리는 위 어느 것의 코드도 포함하지 않는다.** 전부 자작 MIT.
GSAP 회색지대와 GPL 전파를 동시에 피하면서, 어휘는 전부 흡수했다.

## 폴더 규약
```
fx-library/
  INDEX.md              효과 목록 (효과명·태그·크기·라이선스·데모 경로)
  README.md             이 문서
  _shell.css/_shell.js  데모 전용 크롬 (효과 코드 아님)
  <효과명>/
    README.md           출처 · 라이선스 · 언제 쓰나 · 금기 · 파라미터 · 접근성
    demo.html           단독 동작 (file:// 로 열어도 됨)
    snippet.css         효과 CSS
    snippet.js          효과 JS (있는 경우)
```

## 스니펫 규약
- **JS 는 좌표·상태만 넘기고 그리기는 CSS 가 한다.** JS 가 스타일을 계산하지 않는다.
- **JS 는 클래식 스크립트로 `window.fxLib` 에 등록한다.** ESM 이 아니다 —
  단일 HTML 로 인라인하는 것이 이 라이브러리의 사용처이고, `file://` 에서 ESM 은 CORS 로 막힌다.
- **모든 파라미터는 커스텀 프로퍼티.** 값을 바꾸려고 스니펫을 편집하지 않는다.
- **`prefers-reduced-motion` 대응은 스니펫 안에 있다.** 사용처가 잊어도 되게.
- **터치 기기에서 포인터 효과는 마운트조차 하지 않는다.**
- **효과가 전부 실패해도 콘텐츠는 완전히 읽혀야 한다** (progressive enhancement).

## 검증
```bash
node /tmp/fx-verify.mjs   # 데모 17개 × (콘솔 에러 0 · 다크/라이트 렌더 · 스크롤)
```
헤드리스 크로미움은 `test-v2/tools/lib/browser.mjs` 로 해석한다.

## 새 효과를 추가할 때
1. 어휘의 출처 URL 을 먼저 확인한다. 확인 못 하면 README 에 "확인 못 함"이라고 쓴다.
2. 원 구현의 라이선스를 확인한다. MIT/OFL/CC0/Apache 가 아니면 **코드를 보지 말고 기법만 재작성한다.**
3. README 의 **금기** 항목을 반드시 채운다. 이 라이브러리의 값은 효과 목록이 아니라
   "언제 쓰면 싸구려가 되는가"에 있다.
4. 데모를 만들고 검증 스크립트를 통과시킨다.
