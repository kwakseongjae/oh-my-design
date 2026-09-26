# 측정 방법 리서치 — 지금 쓰는 것, 틀린 것, 바꿀 것 (2026-09-22)

헤비한 사이트 진단을 앞두고 조사했다. **웹 리서치보다 먼저 레포와 내 방법을 측정했고,
가장 큰 발견은 거기서 나왔다** — 내 방법에 실측 가능한 결함이 있었고, 레포는 그걸 이미 알고 있었다.

## 1. 지금 쓰는 방법 (이번 세션에서 실제로 한 것)

```
playwright-core 1.61.1 + 시스템 Chrome 채널 (headless)
토큰    getComputedStyle(document.documentElement) → --* 전수
컴포넌트 요소별 getComputedStyle, 포인터 park → hover → press → focus 순
대조군  넌센스 경로(catch-all) · 넌센스 서브도메인(와일드카드 DNS)
필터    네임스페이스로 자기 토큰 / 프레임워크 / 서드파티 분리
확정    스토리북은 index.json (catch-all이 흉내낼 수 없음)
```

## 2. **결함 하나를 실측했다 — 커밋된 작업에 영향이 있다**

레포의 `web/scripts/probe-component-states.mjs`(2026-09-17) 주석이 경고하고 있었다:

> `toss` 프로그래밍 `.focus()`로는 `:focus-visible`이 false라 포커스 링이 안 뜬다.

**검증했다.** 자체 페이지로 3가지 순서를 재봤다:

| 순서 | `:focus` | `:focus-visible` | 링 |
|---|---|---|---|
| 마우스 상호작용 없이 `.focus()` | true | **true** | 보임 |
| Tab 키 | true | **true** | 보임 |
| **마우스로 누른 뒤 `.focus()`** | true | **false** | **안 보임** |

**내 측정 순서가 세 번째다.** park → hover → **press** → focus. 즉 `.focus()` 직전에 항상
마우스 클릭이 있었고, 크롬의 `:focus-visible` 휴리스틱이 마지막 입력 양식을 마우스로 보고
**포커스 링을 억제**한다.

### 정확한 영향 범위

```
positive (focus 값을 기록한 것)  pixiv 4 · sendbird 8 · smarthr 2 · asana 2 · ctrip 2
   → 안전하다. 변화를 실제로 관측했고, 놓쳤다면 더 많이 놓쳤을 뿐이다.
negative ("focus 변화 없음"이라 적은 것)  pixiv 1 · asana 1 · weibo 2 · zhihu 2
   → 신뢰할 수 없다. 편향된 계측기로 부재를 주장했다.
```

### 증거가 한 번 더 맞아떨어졌다 (2026-09-22 사후 확인)

수정하면서 보니 **내가 실제로 잡은 focus 값이 전부 폼 컨트롤이거나 평범한 `:focus` 사용처다**:

```
pixiv    switch · checkbox          asana  toggle-on
sendbird checkbox · toggle · input  smarthr input
ctrip    button-login-pill  ← 버튼이지만 :focus-visible이 아니라 :focus를 쓴다
```

**명세대로다.** 텍스트 입력과 폼 컨트롤은 입력 양식과 무관하게 `:focus-visible`에 매칭되고,
버튼은 아니다. 즉 **내가 관측한 것은 전부 휴리스틱이 양식을 안 따지는 종류**였고,
**놓친 것은 전부 따지는 종류**였다. 진단이 양방향으로 확인된다.

정확한 진술: **내 방법은 `:focus` 스타일은 잡고 `:focus-visible` 스타일은 체계적으로 놓친다.**
그리고 `:focus-visible`이 현재 권장 패턴이다. **긍정 관측은 유효하고 부정 관측은 무효다.**

### 고치는 법 — **두 번 고쳤다.** 첫 수정은 충분하지 않았다

**1차(2026-09-22 오전).** press를 focus *뒤에* 둔다. 즉 컨트롤 하나 안에서
`focus → rest → hover → press` 순서로 읽는다. deepseek에서 `#005fcc` 링을 처음 잡았으니
동작은 한다.

**그런데 컨트롤 경계를 넘는 오염이 남아 있었다.** taobao에서 컨트롤 [0]은 `fv=true`,
[1]은 `fv=false`가 나왔다 — 발견처럼 보이지만 아니다. **크롬의 modality는 엘리먼트별이
아니라 페이지 전역**이라, [0]에서 mousedown이 한 번 일어나면 그 뒤 [1]에 건 프로그램적
`.focus()`는 계속 억제된다. 컨트롤 안에서의 순서만 고쳐서는 **두 번째 컨트롤부터 전부
가짜 false**가 된다.

**2차(2026-09-22 오후) — 2패스로 분리한다.**

```
패스 A  마우스를 한 번도 움직이지 않은 채, 모든 컨트롤의 rest와 focus를 먼저 읽는다
패스 B  그다음에야 hover와 press를 돈다
```

taobao 두 컨트롤 다 `fv=true`가 됐고, weibo는 다섯 컨트롤 전부 `fv=true`가 됐다.

**3차 — 인덱스는 엘리먼트가 아니다.** weibo 재측정 1차 시도가 또 이상했다: 컨트롤 [4]가
클래스(`woo-button-flat` → `woo-button-line`), 크기(160×34 → 64×28), 배경까지 바뀌어
돌아왔다. **weibo 홈은 리렌더링되고, 셀렉터를 패스마다 다시 평가하면 다른 노드를 준다.**

```
컨트롤을 element handle로 고정하고, 매 판독마다 (class, width, height) 동일성을 검사한다
```

정적 페이지(taobao)에서는 인덱스로도 같은 노드가 나왔다 — 모든 속성이 일치한 것이 그 증거다.
동적 피드에서는 아니다. **동일성 검사를 출력에 찍어서, 안 찍히면 그 판독을 못 쓰게 한다.**

## 2.5 **가장 비싼 실수는 positive 쪽에서 나왔다 — `auto`는 브라우저의 것이다**

§2를 고치고 나서 deepseek에서 `#005fcc` 포커스 링을 잡았고, **"카탈로그 최초의 확인된
포커스 링"**이라고 적어 커밋했다. 관측 자체는 정확했다 — `:focus-visible`이 true였고
outline이 그려졌다. **결론이 틀렸다.**

**컨트롤을 안 돌렸다.** `setContent`로 **작성자 스타일시트가 전혀 없는** 페이지를 만들고
맨 `<button>`·`<a>`·`<input>`에 focus를 주면 크롬은 라이트·다크 양쪽에서 이렇게 칠한다:

```
outline: rgb(0, 95, 204) auto 1px      ← 세 요소 모두, 두 스킴 모두, 바이트 동일
```

deepseek이 돌려준 값과 정확히 같다. **`#005fcc`는 크롬의 기본 포커스 링이다.**

### 판별 규칙 — 값 안에 답이 있다

| 읽은 값 | 판정 |
|---|---|
| `outline: rgb(0, 95, 204) **auto** 1px` | **브라우저 기본.** 토큰으로 올리지 않는다 |
| `outline: rgb(36, 166, 81) **solid** 2px` | 작성자가 쓴 것 (asana 토글, `#24a651`) |
| `box-shadow: … 0 0 0 4px` | 작성자가 쓴 것. **UA 링은 절대 box-shadow가 아니다** |
| `outline-style: none`이 focus에서도 유지 | 작성자가 UA 링을 **끈** 것 (taobao·weibo) |

`auto`는 작성자가 쓰지 않는다. 작성자가 쓴 링은 스타일과 너비를 이름으로 댄다.

### 왜 빠졌는지가 중요하다

negative 주장을 고치는 데 세션을 다 쓴 직후였고, **positive 관측이 "수정이 먹혔다"로
읽혔다.** 부재 주장에는 컨트롤을 요구하면서 존재 주장에는 요구하지 않았다. 카탈로그는
이미 같은 것을 손으로 두 번 걸렀다(cybozu `#2693ff` 포커스 링, ctrip `#0000ee`/`#ff0000`
링크색). 손으로 거른 것은 기억에 의존하므로, `__tests__/catalog-integrity.test.ts`에
**컴포넌트 상태 슬롯이 알려진 UA 기본값을 담으면 실패**하는 검사를 넣었다.

### 정정 결과

- **deepseek** — `button-secondary.focus` 삭제. §4·§14·`.verification.md`에 무엇이
  칠해지고 그게 누구 것인지 적었다.
- **asana** — 버튼에는 focus 토큰 없음(UA 링). **토글의 `#24a651`은 진짜다** —
  `solid 2px`로 다시 확인했다.
- **pixiv** — `rgba(0,150,250,.32) 0 0 0 4px`. **세 버튼이 같은 값**이라 Charcoal의
  `FocusRing`이 추론이 아니라 관측이 됐다. 유보 해제.
- **zhihu** — `rgb(255,255,255) 0 0 0 2px, oklch(0.581758 0.21381 259.318 / .3) 0 0 0 4px`.
  36px 사각 버튼과 60px 둥근 위젯이 같은 링을 쓴다. 유보 해제.

---

## 2.6 **census의 서체는 "선언된 첫 항목"이지 "렌더된 서체"가 아니다**

내 census는 전부 이렇게 센다:

```js
const f = c.fontFamily.split(",")[0].replace(/["']/g, "");
```

**스택의 첫 이름을 셀 뿐, 그게 실제로 쓰였는지는 안 본다.** 첫 이름이 시스템 폰트이거나
실제로 로드된 웹폰트면 결과가 같아서 오늘 여덟 건은 우연히 맞았다.

**qiita에서 처음 어긋났다** (2026-09-22):

```
census family:  YakuHanJPs ×458   ← 1위
로드된 @font-face: Material Symbols Outlined(loaded) · FontAwesome(unloaded)  ← 2개뿐
전체 스택:      YakuHanJPs, -apple-system, "system-ui", "Segoe UI",
                "Hiragino Kaku Gothic ProN", … , sans-serif
```

**`YakuHanJPs`는 @font-face에 없다.** 선언만 되고 로드되지 않으므로 텍스트는
`-apple-system` 이하로 떨어진다. census만 읽었으면 **"YakuHanJPs가 458개 요소에
렌더된다"**고 썼을 것이다. caddi의 `Zalando Sans Expanded`와 같은 부류인데, 그건 토큰
이름으로 드러나서 잡혔고 이건 census 1위라 오히려 더 그럴듯하다.

### 규칙

**census의 family는 `document.fonts`의 loaded 목록과 대조하기 전까지 서체 주장이 아니다.**

| 대조 결과 | 처리 |
|---|---|
| 첫 이름이 loaded 목록에 있다 | 렌더된 서체. `tokens.typography.family`에 기록 |
| 첫 이름이 시스템 폰트다 | 렌더된다. 단 **브랜드 서체가 아니므로** family는 비운다 |
| **첫 이름이 둘 다 아니다** | **선언만 됐고 렌더 안 된다.** 산문에만 적고 토큰에 넣지 않는다 |

`document.fonts.check('16px X')`로는 안 갈린다 — 폴백으로 그릴 수 있으면 `true`를 준다
(qiita에서 `true`가 나왔다). **loaded 목록에 그 이름이 있는지**를 봐야 한다.

---

## 2.7 **"변화 없음"은 색 여섯 개가 같다는 뜻이 아니다 — opacity 페이드** (2026-09-23)

studysapuri 심층 프로브(sonnet)가 컨트롤 6개 전부 "hover·pressed 변화 없음"이라고 보고했다.
헤드라인 검증에서 주 CTA를 다시 재니 `transition: background-color 0.3s, color 0.3s, opacity 0.3s`
이고 hover에 **opacity가 1 → 0.9**로 내려간다. bg·fg·border·shadow는 그대로다.

원인은 도구였다. `probe-component-states.mjs`는 opacity를 **읽고도 출력하지 않았고**, 요약 줄이
배경색만 비교해 "없음 — 색 변화 없음을 부재로 기록할 것"이라고 안내했다. 위임 모델은 그 안내를
그대로 따랐다. 고친 뒤: opacity를 rest에서 항상, 바뀌면 상태마다 출력하고, 요약은
bg·fg·border·shadow·outline·transform·opacity 전부를 비교한다.

**규칙**: 상태 "없음"을 적기 전에 7개 값이 전부 같은지 본다. 하나라도 다르면 그 값이 상태다.

**소급 확인(같은 날)**: 옛 도구로 "hover 변화 없음"이 커밋된 7개 레퍼런스(crowdworks·taobao·base·newspicks·
chatwork·nulab·cybozu)를 고친 도구로 다시 쟀다 — 전부 유지. 결함이 실제로 오답을 낸 건 커밋 전의
studysapuri 하나였다. jal(Aside 필요)·kakaopay(라벨 없는 레거시 캡처)는 미확인으로 남긴다.

## 3. 레포가 이미 갖고 있던 것을 안 썼다

`probe-component-states.mjs` 251줄이 **내가 이번 세션에 손으로 다시 발견한 함정 4개를
이미 인코딩하고 있다**:

| 레포가 아는 것 | 내가 이번에 또 당한 것 |
|---|---|
| `krds` — 문서화된 버튼이 `display:none` 탭 안에 있어 0×0 (`--open-tabs` 옵션 있음) | pixiv 스토리북의 **0×0 "Set string" 버튼** |
| `karrot` — 스토리북 iframe의 파란 outline은 브랜드가 아니라 크롬 | serendie **탭 크롬을 컴포넌트로 오인** |
| `toss` — `.focus()`로는 `:focus-visible` 안 뜸 | **위 §2 전체** |
| `line` — 예제가 전부 PNG. 측정할 DOM이 없다는 것도 결과 | (안 만남) |

그리고 하나 더, 내가 몰랐던 것:

> **칠해진 색을 그대로 쓰지 않는다.** `krds` authored `--krds-...-hover`는 `#0b50d0`인데
> `getComputedStyle`은 `#0c51d1`을 돌려줬다(채널마다 1 차이). **칠해진 값을 썼다면 맞는
> 토큰을 틀리게 만들었다.**

→ **선언된 커스텀 프로퍼티와 렌더된 계산값을 둘 다 덤프해 대조해야 한다.** weibo에서
우연히 이걸 했고(`--w-b-flat-primary-bg-hover #ff5900` = 실측 hover) 그게 그 레퍼런스의
가장 강한 증거가 됐다. **우연이 아니라 절차여야 한다.**

## 4. 테스트해보니 문제가 아니었던 것 (음성 결과)

과하게 만들 뻔한 것들을 실측으로 기각했다.

- **Shadow DOM** — weibo·ctrip·zhihu·huawei 네 곳 모두 **shadow host 0개**. 순회 코드 불필요.
  (단 웹컴포넌트 기반 스토리북 — kintone-ui-component 같은 — 에서는 필요해진다.)
- **컴포넌트 스코프 커스텀 프로퍼티** — 네 곳 합쳐 **1개**, 그마저 `--v3836584028` 빌드 해시다.
  `:root` 전수로 충분하다.
- **CSS Typed OM (`computedStyleMap`)** — `border-radius: .5em`을 `getComputedStyle`도
  `computedStyleMap`도 똑같이 `7px`로 준다. **정밀도 이득 없음.**
- **iframe** — 네 곳 모두 0개.

## 5. 새 도구 조사 — 각각의 판정

### ego lite — **가장 쓸모 있다. 다만 조건부**
`citrolabs/ego-lite`. 에이전트용 Chromium으로, **사용자의 로그인 상태를 공유**하고 Spaces로
탭을 격리한다. 깊은 중첩 iframe 처리가 강점이라고 주장한다. macOS 전용(2026 중반 기준).

**왜 중요한가**: 이번 세션 최대 차단 요인이 **로그인 월**이었다 — pixiv(홈 전체) ·
weibo(피드) · douyin(피드 전부) · asana(input은 인증 화면) · zhihu(답변 페이지) ·
cybozu(앱 UI). 인증된 표면을 잴 수 있으면 `interactive_state_missing`의 상당수가 풀린다.

**조건**: 오너의 실제 로그인 세션을 쓰는 것이므로 **오너 승인이 먼저**다. 내가 계정을 만들거나
로그인하지 않는다. 그리고 인증 화면에는 개인 데이터가 있으므로 **토큰·기하만 추출하고
콘텐츠는 기록하지 않는다**는 규칙이 필요하다.

### Chrome DevTools MCP — **이미 있지만 이 용도엔 형태가 틀렸다**
이 환경에 `mcp__chrome-devtools__*`로 이미 붙어 있다. 그런데 **DOM 트리를 컨텍스트로
밀어 넣는다** — 조사에 따르면 몇 번의 질의로 ~5M 토큰. 내 작업은 그 반대여야 한다:
**계산은 페이지 안에서 하고 요약만 넘어온다.** 스크립트가 맞고 MCP는 탐색용이다.
(단 1회성 탐색·디버깅에는 유용하다.)

### JEV / browser-use — **이 용도엔 불필요**
TypeSafe의 Jev는 **행동 선택** 모델이다(다음에 뭘 클릭할지). 내 측정은 결정적 셀렉터를
쓰므로 모델이 고를 필요가 없다. 다만 조사 중 확인된 한 줄은 내 방식을 지지한다 —
*"요소는 접근성 트리가 아니라 DOM에서 직접 가져온다. 접근성 트리는 input을 과소보고한다."*

### 이미 설치돼 있는데 안 쓰는 것
- **`axe-core` 4.11.2** — 루트 `package.json`에 있고 벤치 하네스만 쓴다. **대비(contrast)
  측정에 쓸 수 있다** — 오늘 뱃지 대비를 손으로 계산했는데 이게 있었다.
- **`sharp` 0.34.5** — `web/`에 있다. 오늘 "sharp 없음"이라고 했는데 **루트에서 임포트해서**
  그랬다. 스크린샷 픽셀 대비 측정에 쓸 수 있다.

## 6. 그래서 앞으로 쓸 방법

1. **레포 프로버를 먼저 읽고 쓴다.** `probe-component-states.mjs` + `probe-design-system-index.mjs`.
   새로 짜기 전에 이미 있는 함정 지식을 쓴다.
2. **선언값과 렌더값을 둘 다 덤프해 대조한다.** 커스텀 프로퍼티 전수 + 요소별 계산값.
   불일치는 버리지 말고 **Conflict Matrix에 남긴다**(krds 1채널 차이, ctrip off-system이 그 예).
3. **포커스는 Tab으로 잰다.** `.focus()`는 마우스 뒤에 오면 `:focus-visible`을 죽인다.
   측정 순서를 `park → hover → press → (리셋) → Tab` 으로 바꾼다.
4. **대조군을 계속 쓴다.** 넌센스 경로·서브도메인은 이번에 catch-all 53개와 와일드카드
   DNS를 걸러냈다. 비용이 거의 없고 수확이 크다.
5. **로그인 월은 오너 승인 후 ego lite로.** 승인 전에는 `partial`이 정직한 상태다.
6. **Shadow DOM 순회는 웹컴포넌트 스토리북에서만.** 일반 사이트엔 불필요(실측 0).
7. **대비는 axe-core로**, 픽셀 확인은 `web/`의 sharp로.

## 7. 고쳐야 할 것 (커밋된 작업)

**2026-09-22 갱신 — weibo 처리 완료.** 재측정 결과 두 선언 컴포넌트 모두 `:focus-visible`
true이고 **속성이 하나도 안 바뀐다**(`outline-style: none` 유지). "신뢰할 수 없음" 유보를
실측값으로 교체했다. hover·pressed는 이번 실행에서 `:hover`가 안 잡혀서 **건드리지 않았고**
원래 판독(`#ff5900`)이 유효하다.

**2026-09-22 — negative 주장 전부 처리 완료.** pixiv·zhihu는 실제 링이 있었고(유보 해제),
asana는 UA 기본 링이라 토큰을 안 만들었다. **재측정은 새 하니스가 아니라 레포에 이미 있던
`probe-component-states.mjs`로 했다** — 상태마다 페이지를 새로 여는 구조라 modality 오염이
애초에 불가능하다. §3이 말하는 실수를 한 번 더 한 셈이다.


`focus 변화 없음`이라 적은 **6곳**(pixiv·asana·weibo·zhihu 각 1~2건)은 재측정 대상이다.
긍정 관측(ctrip·sendbird·pixiv·smarthr·asana의 focus 값)은 유효하므로 건드리지 않는다.
**팔레트나 등급에는 영향이 없다** — focus는 컴포넌트 상태 한 칸이고, 그 칸이 "없음"에서
"있음"으로 바뀌면 오히려 깊이가 늘어난다.

### 2.8 background-image·밑줄 사각지대 (2026-09-26)

FlixBus Honeycomb은 hover·press를 `background-color`가 아니라 `background-image`의 반투명 그라디언트
레이어(`--flix-hover-layer-color` = `linear-gradient(rgba(0,0,0,.06)…)`, press `.12`)로 그린다. 7값 비교는
이를 "변화 없음"으로 읽었다. 밑줄(`text-decoration`) hover도 같은 사각지대였다. `probe-component-states.mjs`가
이제 두 값을 비교·출력한다. 같은 날 두 가지를 더 고쳤다: Usercentrics처럼 **열린 shadow root 안의
동의 배너**도 거부 버튼을 찾고, 거부 뒤 재로드 대기를 `--wait` 값 그대로 쓴다. Playwright `hover()`가
actionability 검사로 타임아웃하면 중심 좌표로 포인터만 옮긴다(판정은 여전히 `:hover` 매칭).
소급 스윕: 커밋된 verified 레퍼런스 중 "hover 변화 없음" 컴포넌트 39개(23건) — §3 큐 참조.
