# ego lite 도입 — 설치 완료, 온보딩 대기 (2026-09-22)

오너 승인으로 도입. `docs/MEASUREMENT_METHOD_2026-09-22.md` §5의 판정("가장 쓸모 있다,
다만 조건부")을 실행한 것이다.

## 1. 설치된 것

```
skill   .agents/skills/ego-browser/     (npx skills add citrolabs/ego-lite)
        → Claude Code에 심볼릭 링크됨. Codex·Cursor 등 15개 채널에도 설치
app     /Applications/ego lite.app      393MB · v0.5.1.11 · arm64
cli     ~/.local/bin/ego-browser        → ~/.local/share/ego/active_version_dir/Helpers/
harness web/scripts/probe-surface-ego.js + .sh
```

DMG는 `cdn.ego.app/setup/macos/arm64/egolite-fHoqgZ74bOEM.dmg`(135MB)에서 받았다.

### 설치 스크립트를 읽고 실행했다

`install.sh` 234줄을 전부 읽고 돌렸다. 하는 일: DMG 다운로드 → 임시 디렉터리에 읽기 전용
마운트 → 번들 안에 `ego-browser` 헬퍼가 있는지 검증 → `/Applications`로 이동 → 앱 실행.
외부 전송이나 임시·앱 디렉터리 밖 쓰기는 없다.

**두 가지는 명시해 둔다:**
- **`xattr -dr com.apple.quarantine`으로 Gatekeeper 격리 속성을 벗긴다.** 스크립트가 이유를
  주석으로 밝히고 있다(첫 실행 차단 방지). 보안상 의미가 있는 동작이라 적어둔다.
- `/Applications`가 쓰기 가능이라 **sudo는 호출되지 않았다.** 불가였다면 암호 프롬프트가
  떴을 것이고 그건 내가 처리할 수 없다.

## 2. 남은 한 단계 — **오너가 해야 한다**

앱 창이 열려 있고 온보딩이 대기 중이다. CLI는 온보딩 전까지 이렇게 답한다:

> Please complete the onboarding process first.

**온보딩에서 Chrome 데이터(로그인·쿠키·확장·북마크) 가져오기를 선택하게 된다. 이건 내가
대신 정할 일이 아니다.** 가져오면 로그인 월 뒤를 잴 수 있고, 안 가져오면 공개 표면만
가능하다(지금 Playwright와 같은 수준).

완료 후 **새 터미널**에서:

```bash
command -v ego-browser                      # ~/.local/bin/ego-browser
ego-browser nodejs <<'EOF'
console.log('ego-browser ready')
EOF
```

## 3. 개인정보 규칙 (이 레포에서 ego lite를 쓸 때)

오너의 실제 로그인 세션에서 도는 도구다. 하네스에 규칙을 코드로 박아뒀다:

- **토큰과 기하만 추출한다** — 커스텀 프로퍼티, 계산된 스타일, 요소 박스.
- **페이지 텍스트·폼 값·계정 식별자·미디어는 읽지도 반환하지도 않는다.**
- 컨트롤 라벨조차 기본은 `#0`·`#1` 같은 인덱스다. `OMD_ALLOW_TEXT=1`로 켤 수 있지만
  **로그인 어포던스가 없는(=인증된 것으로 보이는) 페이지에서는 자동으로 거부**된다.
- 출력 JSON에 `looksAuthenticated`와 `textCaptured`가 찍혀 사후 검증이 가능하다.

## 4. 하네스 — 세 가지를 고쳐서 만들었다

`web/scripts/probe-surface-ego.js`. 기존 ad-hoc 스크립트와 다른 점:

1. **포커스를 실제 Tab 입력으로 잰다.** `.focus()`는 마우스 press 뒤에 오면 `:focus`만 켜고
   `:focus-visible`은 안 켠다(2026-09-22 실측). 이번 세션의 "focus 변화 없음" 기록들이
   그래서 생긴 위음성이다. 하네스는 상태마다 포인터를 park하고, 포커스는 blur 후 Tab을
   최대 40번 눌러 해당 컨트롤에 도달한 뒤 읽는다. `:focus-visible` 매칭 여부도 함께 기록한다.
2. **선언값과 렌더값을 둘 다 덤프한다.** krds의 authored `#0b50d0` vs computed `#0c51d1`
   (채널당 1 차이) 때문이다. 스크립트는 **고르지 않는다** — 대조는 사람이 한다.
3. **네임스페이스를 합치지 않고 보고한다.** weibo에 섞여 있던 GitHub `--color-prettylights-*`
   같은 것을 승격 전에 보이게 하려는 것.

부수적으로 쿠키 배너를 CSS로 숨기고(수락하지 않는다) 클릭을 캡처 단계에서 삼켜
`:active`를 페이지 이동 없이 읽는다.

### 쓰는 법

```bash
OMD_URL=https://weibo.com/ OMD_LABEL=weibo sh web/scripts/probe-surface-ego.sh
OMD_URL=… OMD_ALLOW_TEXT=1 …      # 공개 마케팅 페이지에서만
```
env: `OMD_URL`(필수) · `OMD_LABEL` · `OMD_SCHEME` · `OMD_MAX_CONTROLS` · `OMD_ALLOW_TEXT`

## 5. 온보딩 직후 할 일 — known-answer 테스트

새 도구를 믿기 전에 **이미 아는 답으로 검증한다.** weibo를 Playwright로 이미 쟀다:

```
root 커스텀 프로퍼티 479 · 자기 네임스페이스 309
--w-color-orange-1 #ff8200 · --w-b-flat-primary-bg-hover #ff5900
검색 버튼 #ff8200 r0 h48 → hover #ff5900
```

ego lite로 같은 숫자가 나오면 도구는 동등하다. 다르면 **차이 자체가 정보**다.
이 세션에서 계측기를 여섯 번 틀렸고, 전부 알려진 답과 대조해서 잡았다.

## 6. 이게 풀어줄 것

이번 세션 최대 차단 요인이 로그인 월이었다:

| 레퍼런스 | 막힌 것 |
|---|---|
| pixiv | 홈 전체가 sign-in wall(본문 180자) — 레이아웃·그리드 주장 불가 |
| weibo | 피드 전체. 컴포넌트 2개만 관측 |
| douyin | 피드 전부. 컨트롤 1개, 상태 0 |
| zhihu | 답변 페이지·에디터·멤버십 |
| asana | `input-default`가 인증 화면이라 `interactive_state_missing` |
| cybozu | 앱 UI 전체 |

asana·sendbird는 **인터랙티브 컴포넌트 2~3개가 상태 미관측**이라 verified에 못 갔다.
그 중 여럿이 로그인 뒤에 있다.
