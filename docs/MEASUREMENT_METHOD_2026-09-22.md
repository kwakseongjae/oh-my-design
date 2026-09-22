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

### 고치는 법

`.focus()` 대신 **실제 Tab 입력으로 키보드 양식을 만든 뒤** 읽는다. 그리고 press를 focus
*뒤에* 두거나, focus 측정 전에 새 컨텍스트로 리셋한다. 순서가 결과를 바꾼다.

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

`focus 변화 없음`이라 적은 **6곳**(pixiv·asana·weibo·zhihu 각 1~2건)은 재측정 대상이다.
긍정 관측(ctrip·sendbird·pixiv·smarthr·asana의 focus 값)은 유효하므로 건드리지 않는다.
**팔레트나 등급에는 영향이 없다** — focus는 컴포넌트 상태 한 칸이고, 그 칸이 "없음"에서
"있음"으로 바뀌면 오히려 깊이가 늘어난다.
