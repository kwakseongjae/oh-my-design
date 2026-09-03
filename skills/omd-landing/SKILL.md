---
name: omd-landing
description: "Scroll-native one-page landing that overwhelms — concept, composition, asset placement, and scroll choreography derived from DESIGN.md and the measured landing-craft codex. Trigger: '랜딩 페이지', '원페이지', 'landing page', 'one-pager', 'hero to footer', '스크롤 랜딩', 'affinity.studio 같은'."
argument-hint: "<brand or DESIGN.md path> — <one line: what the page must make the visitor feel and do>"
user-invocable: true
---

# omd:landing — 압도적 원페이지

한 페이지가 스크롤로 쌓이며 방문자를 압도하게 만든다. 카드 그리드를 늘어놓는 것이 아니라
**하나의 시각 컨셉**이 히어로에서 태어나 섹션마다 다른 구도로 변주되다가 CTA에서 닫힌다.
근거는 두 파일뿐이다: 프로젝트 `DESIGN.md`(브랜드가 정한 것)와 **랜딩 크래프트 코덱스**(실측으로 정한 것, 규칙 ID `LC-n`).
코덱스 위치 — 레포: `docs/design-excellence/landing-craft-codex.md` · 설치본: `node_modules/oh-my-design-cli/docs/design-excellence/landing-craft-codex.md`
(둘 다 없으면 `node -p "require('path').dirname(require.resolve('oh-my-design-cli/package.json'))"`로 패키지 루트를 찾아 그 아래 `docs/design-excellence/`를 읽는다).
둘 다 읽지 않았으면 시작하지 않는다.

## 입력

1. `DESIGN.md` 전문(Core v2면 §Scope·Foundations·Components·Content·Motion 앵커, legacy면 전 절).
   토큰은 여기 있는 것만 쓴다 — 발명 금지. `.omd/preferences.md`의 pending은 DESIGN.md를 덮는다.
2. 브리프 한 줄 이상: 방문자가 느껴야 할 것 + 해야 할 행동. 없으면 한 배치의 질문(최대 5개)으로 받는다.
   무인 모드(`unattended`)면 각 질문의 첫 선택지를 고르고 `trace.md`에 `autoSelected`로 남긴다.
3. 코덱스 `landing-craft-codex.md` — 규칙 표를 그대로 읽고, 이 런에서 적용할 규칙 ID를 골라 storyboard에 적는다.

## 런 디렉터리 (먼저 만든다)

```bash
SLUG=$(printf '%s' "<brand-or-brief>" | tr '[:upper:] ' '[:lower:]-' | tr -cd 'a-z0-9-' | cut -c1-40)
RUN=.omd/runs/landing-$SLUG-$(date +%Y%m%d-%H%M)
mkdir -p "$RUN/assets" && printf '%s\n' "<브리프 원문 그대로>" > "$RUN/task.md"
```
`<run>` = 위 `$RUN`. 산출은 전부 이 안에만 쓴다(`omd-harness`와 같은 관례, `.omd/runs/INDEX.md`에 한 줄 append).

## 산출 (run 디렉터리 안에만)

```
<run>/
  concept.md        아트디렉터 산출 — 컨셉 한 문장, 무드, 팔레트 사용법, 에셋 방향, 금지 목록
  storyboard.md     섹션 표: 순서·목적·뷰포트 높이·구도(LC-n)·에셋 계획(프롬프트)·스크롤 연출·카피 골격
  assets/           생성 이미지(omd:media 채널) + 인라인 SVG 원본
  render.html       단독 파일(외부 요청 0), 1440·390 대응, IntersectionObserver 리빌, pinned ≤1, reduced-motion
  system.md         이 페이지의 디자인 시스템 설명(토큰 인용 경로 포함)
  loop-trace.json   자평 회차별 결함 수(render-integrity·landing-integrity·designer-review), autoSelected
  trace.md          이미지 프롬프트 원문, 채널, 비용, sha256, 재시도
```

## 절차

### 1. 컨셉 (에이전트 `omd-art-director`)

DESIGN.md의 브랜드 사실(§1 서사·§Principles·§Voice)과 브리프에서 **컨셉 한 문장**을 뽑는다.
컨셉은 형용사 나열이 아니라 페이지가 무엇을 "보여 주는가"다(예: "결제가 흐르는 배관을 단면으로 본다").
아트디렉터는 컨셉·무드·에셋 방향·금지(코덱스의 anti-pattern + Vercel 「generated-design reflexes」류)를
`concept.md`에 쓴다. 토큰을 새로 만들지 않는다.
**호출 프롬프트에 이미 있는 에셋은 말로 서술해 넘긴다**(피사체·구도·주조색·빈 여백 위치, 픽셀 크기는 `sips -g pixelWidth -g pixelHeight`).
아트디렉터는 이미지 파일을 `Read`로 열지 않는다 — 대용량 이미지 tool_result 뒤에서 세션이 멈춘 사례(도그푸딩 2026-09-02).

### 2. 스토리보드

섹션 6~8개. 각 섹션에 (a) 목적 한 문장, (b) 뷰포트 높이(코덱스의 섹션 리듬 규칙 인용),
(c) 구도 패턴 — 코덱스 표의 패턴 이름과 `LC-n`(bleed / inset / stacked / split / pinned-reveal …),
(d) 에셋 계획 — 종류(사진/렌더/일러스트/추상 UI)·비율·배치·**생성 프롬프트 원문**(브랜드 팔레트 hex를
프롬프트에 잠근다), (e) 스크롤 연출(리빌 방식, 지속·이징은 DESIGN.md Motion 토큰), (f) 카피 골격.
**압도 지점**을 하나 정한다 — 페이지가 정점에 이르는 섹션과 그 직전의 여백 섹션.

#### 밀도 예산 (숫자로 적는다 — 서술만 하면 빈 페이지가 나온다)

코덱스의 LC-4·LC-15·LC-33은 **비율과 범위**로 쓰여 있어 분자·분모가 같이 작아지면 그대로 만족된다.
실제로 첫 stripe 랜딩은 LC-8(12.05vh)·LC-9(1.55vh)를 지키면서 본문 12화면 중 7화면이 잉크 12% 미만이었다
(다섯 화면은 0–7%). 그래서 스토리보드는 다음을 **개수로** 적는다.

- **미디어 총량 ≥ 페이지 vh × 1.0.** 12vh 페이지면 미디어 12개 이상이다. 이미지·영상·의미 있는 인라인 SVG를 센다
  (아이콘 하나하나는 세지 않는다 — 24px 이상, 장식이 아니라 내용인 것).
- **폴드(첫 화면) 미디어 ≥ 3개.** 코덱스 실측에서 affinity 폴드는 8개다.
- **스크롤러(LC-15)를 쓰면 항목 ≥ 8개.** 3~4개짜리 가로 스크롤은 밀도 밸브가 아니라 빈 줄이다.
- **모션 에셋 ≥ 1개.** `omd:setup`이 영상 채널을 잡아 뒀으면 `image_to_video`로 섹션 에셋 하나를 6초 루프로 만든다.
  `prefers-reduced-motion`에서는 같은 프레임의 정지 이미지로 대체한다(자동재생·무음·loop·playsinline).
  채널이 없으면 그 사실을 `trace.md`에 적는다 — 조용히 건너뛰지 않는다.
- **섹션별 잉크 목표 ≥ 26%**(코덱스 실측대역 26–54%의 하단). 목표에 못 미치는 섹션은 **패딩을 줄이거나 에셋을 늘린다.**
- **세로 패딩을 하나의 고정 vh로 통일하지 않는다.** 첫 산출은 모든 섹션이 `18vh/24vh`로 같아 리듬이 없었다
  (중앙값 = 최댓값 = 378px). 밀도가 낮은 섹션은 패딩을 줄이고, 압도 지점 앞뒤에만 큰 여백을 준다.

### 3. 에셋

`omd:media`가 감지한 채널로 storyboard의 프롬프트를 실행한다(채널 없음 → 프롬프트 팩과 수동 큐를
`assets/QUEUE.md`에 남기고, 자리에는 브랜드 팔레트의 추상 SVG 플레이스홀더를 넣는다 — 스톡·이모지 금지).
얼굴 사진 생성 금지, 로고 생성 금지(텍스트 워드마크). 각 이미지의 프롬프트·채널·비용을 `trace.md`에.
**스토리보드의 밀도 예산(미디어 개수·폴드 개수·모션 1개)을 채우지 못한 채로 다음 단계에 가지 않는다** —
생성이 실패하면 프롬프트를 고쳐 다시 돌리고, 채널 한계로 불가능하면 그 사실과 실제 개수를 `trace.md`에 적는다.
이미지 **비율은 그 이미지가 들어갈 슬롯의 실측 종횡비**에서 가져온다(기본값 금지 — `omd:media` §1).

### 4. 빌드

단독 `render.html`. CSS 변수는 DESIGN.md 토큰 이름을 그대로 쓴다(`--color-…`, `--space-…`).
UA 기본 스타일 리셋(figure/blockquote 마진 — #78). 이미지는 `assets/` 상대 경로 또는 data URI.
모션은 transform·opacity만, 지속 3단계 이하, `@media (prefers-reduced-motion: reduce)`에서 전부 정지.
텍스트 최대 폭·타입 스케일·섹션 높이는 코덱스 수치 범위 안에서.
**사진 위 글자에는 스크림이 있어야 한다** (LC-36 "압도는 읽혀야 한다"): 히어로·핀 스테이지·반전 섹션의 nav·wordmark·
lead·CTA·포커스 링은 배경 픽셀 대비 WCAG 4.5:1(일반)·3:1(큰 텍스트·UI)을 넘겨야 하고, 그 수단은 토큰 색의 알파
스크림(`::before`)과 포커스 링 halo다 — 첫 toss 런이 스크림 없이 nav 1.05:1·wordmark 1.07:1로 BLOCK 6을 받았다.
`muted` 계열 토큰은 눈썹·법적 고지를 포함한 **어떤 본문 텍스트에도** 쓰지 않는다(3.0:1). 스크롤 리빌(`opacity:0`)은
`<noscript>`와 `@media (scripting: none)`에서 전부 보이게 — JS 없이 빈 페이지는 결함이다.

### 5. 자평 루프 (최대 3회 — ①②가 FAIL 0이면 그 회차에서 멈춘다; 결함이 줄지 않으면 중단하고 보고)

`test-v2/tools/`가 있는 레포에서는 왼쪽 경로를, 없으면(설치된 패키지) 괄호 안의 `omd` 명령을 쓴다 — 같은 도구다.

```
① node test-v2/tools/render-integrity.mjs <run>/render.html   (설치본: omd check render <run>/render.html)      # 결정론
② node test-v2/tools/landing-integrity.mjs <run>/render.html  (설치본: omd check landing <run>/render.html)     # 코덱스 기계 규칙
②′ node test-v2/tools/text-contrast.mjs <run>/render.html     (설치본: omd check contrast <run>/render.html)    # 사진·그라디언트 위 텍스트·포커스 링·no-JS (첫 두 런의 BLOCK 계열)
③ 스크린샷: 1440·390 × 섹션 경계마다 → 구도·여백·겹침을 눈으로 대조 (storyboard와)
③-b `omd check landing`(LI-24~26 밀도 바닥: 화면 잉크 12%·폴드 미디어 3개·미디어 1개/vh)이 통과해야 다음으로 간다.

④ `omd-designer-review` 서브에이전트 스폰(Agent, 입력: `<run>/render.html` 절대경로 + 프로젝트 DESIGN.md 경로 + 도구 호출 상한 20회·15분·review.md 골격 먼저 — BLOCK만 집계)
```
FAIL 항목만 지목해 고친다(전면 재생성 금지). 회차별 (①결함·②위반·②′대비 FAIL·④BLOCK) 수를 `loop-trace.json`에.
같은 rule ID가 2회 연속 FAIL이면 멈추고 `omd:issue`로 접수한다.

### 6. 시연

`omd:showcase <run>/render.html`로 스크롤 영상(mp4/gif)을 만든다(없으면
`test-v2/content-runs/build-scroll-compare.mjs` 프레임 캡처 → ffmpeg). 하단에 비공식 고지가 보이게.

## 코덱스 적용 요약 (전문은 코덱스; 여기는 어느 단계에서 어느 규칙을 보는가)

| 단계 | 규칙 | 핵심 수치(실측, 5사이트) |
|---|---|---|
| 컨셉·폴드 | LC-1~3, LC-33~36 | 첫 화면 에셋이 뷰포트의 89~130%를 덮고 2변 이상 블리드; 헤드라인 상단 1/3(17.6~39.7 %vh); 좌측 앵커 5.4~14.4 %vw; 정점은 이르게, 규모로(직전 섹션은 텍스트 비율 최저 → 다음 섹션 최고) |
| 리듬 | LC-8~12, LC-14 | 페이지 10~16 vh(핀 고정 제외); 본문 섹션 중앙값 1.0~1.9 vh; 핀 스테이지는 정확히 1 뷰포트; 리빌 0.1~6.8/뷰포트는 다이얼; 세로 snap 금지 |
| 구도·여백 | LC-4~7 | 섹션의 46~74%는 빈 면; 텍스트는 섹션의 2.6~13.6%; 두 레인(블리드 1440 + 읽기 672/1232/1264); 거터 하나(48/88/92/104px)를 페이지 전체에 |
| 에셋 | LC-17~20, §6 표 | 페이지당 29~63장·섹션당 3~7; 블리드 에셋 16:9; 배치는 블리드 또는 인셋(둥근 면, 하단 크롭) 둘뿐; 스톡 0 — 제품·고객의 작업물 |
| 타이포 | LC-21~25 | display:body 3.0~4.6×(세리프면 7×); 본문 14~17px; UI 스케일 1.05~1.20, 최상단 한 번의 점프 1.33~1.75; 웨이트 대비는 작게(300/300도 있음); 라틴 display만 −0.02em |
| 색·전환 | LC-26~28 | 그라운드 하나를 유지(252 또는 12); 반전은 단 한 섹션(강조 장치); 틴트는 240,240,252 정도 |
| 모션 | LC-13, LC-29~32 | 지배 지속시간 하나(100/300/320/400ms, 33~70%); 2~3단계, 두 번째는 1.3~1.6×; opacity(+transform)만, clip-path·filter 0; reduced-motion 필수 |
| 자평 | LI-1~23 · #86 | `landing-integrity.mjs`가 기계 판정(페이지 vh·섹션 비율·폴드 커버리지·타입 비·거터·지속시간·easing·snap·비디오 속성·스톡 호스트·균일 카드 그리드·h1) · `text-contrast.mjs`가 사진 위 텍스트 대비·포커스 링·no-JS |

## 하드 룰

- DESIGN.md에 없는 토큰·브랜드 사실 발명 금지. 코덱스에 없는 "취향" 규칙 발명 금지 — 근거 없는 판단은
  `concept.md`에 「가정」으로 표시한다.
- **코덱스 수치와 DESIGN.md 토큰이 충돌하면 DESIGN.md가 이긴다**(예: 코덱스 LC-21 display:body 3.0×↑ vs 토스 h1 36/body 14 = 2.57×).
  코덱스 범위 미달은 `concept.md`에 「가정」으로 남기고 토큰을 늘리지 않는다. Motion 토큰이 없는 DESIGN.md(다수)에서는
  코덱스 LC-29/30의 값(300/400ms 등)을 **「로컬 확장」으로 표시**해 쓴다.
- 실제 사이트 카피·캡처·로고 원본 사용 금지. 통계 수치 발명 금지.
- 하나의 페이지만 만든다. 페이지를 늘리는 요구는 `omd:autopilot`(멀티페이지)로 보낸다.
- 이 스킬은 생성기다. 판정은 도구와 `omd-designer-review`가 한다 — 스스로 "좋다"고 쓰지 않는다.
