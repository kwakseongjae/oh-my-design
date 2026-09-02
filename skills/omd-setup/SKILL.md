---
name: omd-setup
description: "Guided setup of the tools the design harness can use — image/video generation channels, browser, encoders. Detects what the user already has, explains pros/cons/costs, asks instead of instructing, and saves choices to .omd/config.json so every later design task reuses them. Trigger: 'omd setup', '도구 셋업', '이미지 생성 뭐 쓸 수 있어', 'configure media', '세팅해줘', 'what can you generate'."
argument-hint: "[--redo] — 기존 설정을 무시하고 다시 문답"
user-invocable: true
---

# omd:setup — 가진 것을 찾고, 고르게 하고, 기억한다

원칙 하나: **"이거 발급받아라"고 하지 않는다.** 이 머신과 계정에 이미 있는 채널을 찾아 보여 주고,
각 채널의 장단점·비용을 설명한 뒤, 사용자가 고른다. 고른 것은 `.omd/config.json`에 저장돼 이후의
디자인 작업(`omd:landing`, `omd:media`, `omd:showcase`, `omd:autopilot`)이 자동으로 쓴다.
키 값은 어디에도 기록하지 않는다 — env 이름의 존재 여부만.

## 절차

### 1. 감지 (기계)

```bash
node scripts/omd-setup-detect.mjs --json    # 레포
omd setup detect --json                     # 설치본 (같은 스크립트를 패키지 루트에서 실행한다)
```
`scripts/omd-setup-detect.mjs`가 있으면 위 줄을, 없으면 아래 줄을 쓴다. 결과의 `channels[*].present`가 사실이다.
`present: null`(claude-in-chrome 등)은 세션의 도구 목록에서 직접 확인한다. 이미 `.omd/config.json`이 있고
`--redo`가 아니면 현재 설정을 보여 주고 바꿀지만 묻는다.

### 2. 설명 (한 번에, 표로)

감지된 채널만 표에 넣는다(없는 것은 "미보유" 한 줄로 접는다 — 발급 안내 금지). 열: 채널 · 무엇을 만드나 ·
장점 · 단점 · 비용(외부 발표치임을 명시) · 이 프로젝트에서 쓰는 곳. 예:

| 채널 | 만드는 것 | 장점 | 단점 | 비용 | 쓰는 곳 |
|---|---|---|---|---|---|
| grok build | 이미지·6초 영상 | 로그인만으로 · 벤치 실사용 | SVG 없음 | 구독 | landing 히어로·섹션 에셋 |
| Codex $imagegen | 이미지 | 키 없이 헤드리스, 참조 편집 | SVG 없음 | ≈$0.03–0.08/장 | media 래스터 |
| Recraft | SVG·style_id | 유일한 벡터, 브랜드 스타일 재사용 | 유료 키 | SVG $0.088 | 아이콘·일러스트 세트 |

### 3. 문답 (한 배치, 최대 5문)

`AskUserQuestion` 한 번에 묻는다:
1. 래스터 이미지 1순위 채널(감지된 것 중) — 권장은 첫 선택지.
2. SVG·아이콘 세트: Recraft 보유 시 쓸지 / 없으면 인라인 SVG 생성으로 갈지.
3. 영상: grok `image_to_video` / Veo / 안 씀.
4. 브라우저: playwright(결정론) / claude-in-chrome(로그인 세션) / aside.
5. 비용 상한: 작업당 자산 세트 예산(기본 $1).
무인 모드면 각 문항의 첫 선택지를 고르고 `autoSelected`로 기록한다.

### 4. 저장

`.omd/config.json`:
```json
{
  "version": 1,
  "updatedAt": "<ISO8601>",
  "media": { "image": ["grok-build", "codex-imagegen"], "svg": "inline" , "video": "grok-build", "budgetUsdPerSet": 1 },
  "browser": "playwright",
  "detected": { "<channel>": { "present": true, "version": "…" } },
  "notes": "사용자가 고른 이유 한 줄"
}
```
`.omd/preferences.md`에 `pending` 한 줄을 남긴다: "도구 설정 — <요약> (omd:setup, <날짜>)". 키 값은 쓰지 않는다.

### 5. 다음 행동 제안 (한 줄)

설정이 끝나면 지금 바로 해볼 수 있는 것 하나를 제안한다 — 예: "`omd:landing toss` 로 원페이지를 만들면
grok build로 에셋 5장을 생성하고 showcase 영상까지 냅니다."

## 소비자 (이 설정을 읽는 스킬)

- `omd:media` / `omd-codex-image` — `media.image[0]`부터 시도, 실패 시 다음 채널, 전부 없으면 프롬프트 팩 + 큐.
- `omd:landing` 3단계 에셋 — 같은 순서. `budgetUsdPerSet` 초과 시 중단하고 보고.
- `omd:showcase` — `ffmpeg` 부재면 프레임 PNG만 남기고 안내.
- `omd doctor` — 설정 요약을 한 줄로 보여 준다.

## 하드 룰

- 발급·결제·가입을 지시하지 않는다. 없는 채널은 "없음"으로 표시하고 대안(인라인 SVG·소싱·프롬프트 팩)을 제시한다.
- 키 값·토큰을 파일·로그·대화에 쓰지 않는다.
- 사용자가 고르기 전에는 아무 채널도 기본값으로 굳히지 않는다(무인 모드 제외, 그때도 기록).
