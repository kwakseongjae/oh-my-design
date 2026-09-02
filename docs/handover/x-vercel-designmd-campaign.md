# X 캠페인 인수인계 — "Vercel의 design.md 루프, 우리는 이미 돌리고 있다" (2026-09-01)

담당: 그록봇 (X 포스팅) · 소재 준비: 오케스트레이터 · 승인: 사람 창구
기존 하드 룰(`grokbot-x-posting.md` §4) 전부 적용. 이 문서는 캠페인별 추가 지시.

## 배경

Vercel이 2026-09-01 자사 에이전트가 design.md 파일 하나로 온브랜드 페이지를 만드는 루프를
공개했다 (vercel.com/blog/how-our-agents-build-on-brand-pages-with-design-md, X 조회 30만+).
핵심 메커니즘 — 파일 하나에 판단 인코딩 · 동결 시나리오 eval · 가장 좁은 자리에 교정 배치 ·
불평 감소율 추적 — 은 oh-my-design이 독립적으로 도달해 운영 중인 구조와 동형이다.
대조표: `docs/design-excellence/vercel-designmd-loop-adoption.md`.

## 캠페인 각도 (이 순서로 강도가 세진다)

1. **관례 동참** — "우리도 오늘부터 `oh-my-design.kr/design.md`를 서빙한다. vercel.com/design.md
   같은 관례가 생태계를 만든다. llms.txt가 그랬듯." (라이브 URL이 증거 — 배포 후에만 발화)
2. **동형 루프** — "그 아티클의 eval 루프(동결 브리프, 파일만 변수, 실행마다 버전·스크린샷
   저장)는 우리가 카탈로그 440개를 검증하며 돌리는 루프와 같은 구조다." — 수치 없이 구조만.
3. **시연 영상** — stripe 3-arm 비교 (아래).

## 영상 소재 — stripe 3-arm 비교

- 런: `test-v2/content-runs/stripe/{hallmark,ui-ux-pro-max,omd}` — 같은 브리프·같은 모델
  (grok-4.6)·같은 이미지 채널, 다른 것은 하네스뿐. 봉인 벤치(03-runs)와 완전 분리.
- 촬영 화면: `test-v2/content-runs/stripe/compare.html` (3열 나란히, 상단에 조건 명시,
  하단에 unofficial 고지 내장). 개별 arm 전체 화면 링크 포함.
- 촬영 순서 제안: compare 3열 풀샷(3초) → 각 arm 세로 스크롤(arm당 5~7초, hallmark →
  ui-ux-pro-max → omd 순서로 긴장 축적) → omd의 system.md 문서 스크롤(디자인 시스템까지
  나온다는 차별점) → 마무리 카드 "One DESIGN.md. Any agent."
- 이전 스레드 영상(Hallmark vs omd, 한국 브랜드)과 짝이 되는 **미국 브랜드 편**이다.

## 포스트 카피 초안 (승인 후 사용)

**EN (메인 트윗, 영상 첨부):**
> Vercel showed how one design.md file makes their agents build on-brand pages.
>
> Same prompt. Same model. Only the harness changes.
> Here's Stripe's homepage, three ways — and only one ships a design system with it.
>
> We curate 440 companies' DESIGN.md files, with provenance. github.com/kwakseongjae/oh-my-design

**EN (스레드 2 — 관례 동참):**
> vercel.com/design.md started a convention worth copying. As of today:
> oh-my-design.kr/design.md
>
> The agent-era brand guide isn't a PDF. It's a file an agent can load.

**KR (쿼트 또는 별도 포스트):**
> Vercel이 design.md 파일 하나로 에이전트가 온브랜드 페이지를 만들게 하는 루프를 공개했습니다.
> 저 루프의 절반은 저희가 440개 기업 레퍼런스를 검증하며 이미 돌리고 있던 구조라 반가웠고,
> 나머지 절반(공개 URL 관례, 렌더 무결성 체크)은 오늘 채택했습니다.
> oh-my-design.kr/design.md 도 오늘부터 열려 있습니다.

## 영상 제작 도구 (2026-09-02 추가)

`node test-v2/tools/showcase.mjs --compare test-v2/content-runs/stripe/hallmark/render.html test-v2/content-runs/stripe/uiuxpromax/render.html test-v2/content-runs/stripe/omd/render.html --labels "hallmark|ui-ux-pro-max|omd" --out stripe-compare.mp4 --seconds 10`
→ 2880×600 30fps 동기 스크롤 3열 영상(검증: 8초 68초 생성). 단일 arm 세로 스크롤은 `--label`로. 마무리 카드는 별도 편집.

**후속 소재 — 랜딩 원페이지 편**: `test-v2/content-runs/landing/`(stripe·toss × autopilot·hallmark·landing). `omd:landing` arm이
render-integrity·landing-integrity PASS를 내면 같은 명령으로 3열 비교 영상을 만든다. 기존 3 arm은 페이지 3 vh·폴드 커버리지 13%
(코덱스 기준 10~16 vh·89~130%)라 "와 다르다" 대비가 구조적으로 크다 — 수치는 캡션에 넣지 않고 화면으로만 보여 준다.

## 이 캠페인의 추가 하드 룰

1. **"only one ships a design system" 문구는 정성 관찰이다** — 실측(세 arm 산출물에서
   system.md 유무·분량)으로 뒷받침되지만, 수치 순위·품질 우위 주장으로 확장하지 않는다.
2. T3 봉인 수치(비용·실패율 등)를 이 캠페인에서 언급하지 않는다.
3. Stripe를 태그·멘션하지 않는다. 영상·페이지의 unofficial 고지를 자르지 않는다.
4. Vercel 아티클 링크는 인용 표기로만 — 제휴·협업 암시 문구 금지.
5. 관례 동참 트윗(#2)은 `oh-my-design.kr/design.md`가 **프로덕션 배포로 라이브가 된 뒤에만** 발화.

## 상태

- [x] content-runs 인프라 + 3-arm 프롬프트 준비
- [x] stripe 3-arm 실행 완료 (2026-09-01, 총 $2.50 (1.22/0.53/0.74))
- [x] compare.html 생성 + render-integrity 3/3 PASS
- [x] /design.md 프로덕션 배포 — **라이브 2026-09-02 (PR #85 → main, HTTP 200)** → 트윗 #2 발화 조건 충족
- [ ] 사람 창구 승인 → 촬영 → 포스팅
