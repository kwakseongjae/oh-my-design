# content-runs/landing — 「압도적 원페이지」 스킬 테스트 셋업 (2026-09-02)

목적: affinity.studio급 스크롤 기반 랜딩(구도·에셋 배치·컨셉이 한 페이지에서 폭발하는 것)을
DESIGN.md에서 재현하는 `omd:landing` 스킬을 **같은 브리프·같은 모델·같은 이미지 채널**로
기존 arm과 나란히 놓고 검증한다. 봉인 벤치(`03-runs`)와 무관하며 수치·순위 주장에 쓰지 않는다.
상위 규칙은 `../README.md`(비공식 고지·브랜드 태그 금지·봉인 수치 미언급).

## arm

| arm | 팩 | 역할 |
|---|---|---|
| `autopilot` | `benchmarks/ui-resolve-bench/fixtures/competitor-skills-2.0/omd-autopilot-v2/` | omd 현행 기준선 |
| `hallmark` | `benchmarks/ui-resolve-bench/fixtures/competitor-skills-2.0/hallmark/` | 외부 기준선 |
| `landing` | `skills/omd-landing/` (+ `.claude/agents/omd-art-director.md`) | 검증 대상 — 코덱스 `docs/design-excellence/landing-craft-codex.md` |

실행자: grok build CLI(`grok --prompt-file … -m grok-4.6 --always-approve`), 이미지 채널 = grok `image_gen`.
프롬프트는 `runs/run-<brand>-<arm>.txt`로 조립한다(브리프 본문은 세 arm에 바이트 동일).

## 브리프

- `briefs/stripe.md` — 미국 편. 결제 인프라, 개발자 대상, 데스크톱 1440 + 모바일 390 스크롤 원페이지.
- `briefs/toss.md` — 한국 편. 금융 슈퍼앱, 일반 사용자 대상, 한국어 카피.

두 브리프 모두 **원페이지 스크롤 저니**(6~8섹션)를 요구하고, 사이트를 베끼는 것이 아니라 그 브랜드가
쓸 법한 컨셉·카피·에셋을 새로 만든다. 로고 원본 금지(텍스트 워드마크). 하단 unofficial 고지.

## 산출 (arm마다 `<brand>/<arm>/`)

`render.html`(외부 요청 0, 단독) · `assets/`(생성 이미지, 히어로 1 + 섹션 3~5) · `system.md`(디자인 시스템 설명,
형식 자유) · `trace.md`(이미지 프롬프트 원문·세션 id·sha256·재시도) · `landing` arm만 추가로
`storyboard.md`(섹션별 컨셉·구도·에셋 계획·스크롤 연출 표).

## 검증 (전 arm 동일, 기계 우선)

1. `node ../../tools/render-integrity.mjs <brand>/*/render.html` — 1440·390 전수 PASS.
2. `node ../../tools/landing-integrity.mjs <brand>/*/render.html` — 코덱스에서 기계화한 규칙(섹션 리듬·
   에셋:텍스트 비율·타입 스케일·모션 토큰·reduced-motion) — 코덱스 완성 후 작성.
3. `omd-designer-review` 에이전트(오케스트레이터 수동 호출) — BLOCK 0.
4. 스크롤 시연 영상: `omd:showcase`(작성 예정) 또는 `build-scroll-compare.mjs` 프레임 캡처 → mp4.
5. 비교 페이지 `compare.html` (3열, 상단 조건 명시, 하단 고지).

## 수용 기준 (시드 AC 4)

두 브리프 모두 `landing` arm이 1·2·3 PASS + 시연 영상 + 비교 페이지. 정성 판단(“압도적인가”)은
사용자가 비교 페이지에서 한다 — 이 문서는 그 판단의 입력을 만드는 것까지다.

## 기준선 실측 (2026-09-02, 기존 stripe 홈 런 3 arm에 `landing-integrity.mjs` 적용)

| arm | 페이지 vh | 섹션 | 폴드 미디어 커버리지 | FAIL |
|---|---:|---:|---:|---|
| omd-autopilot-v2 | 2.81 | 3 | 14.7% | LI-1 · LI-3 |
| hallmark | 2.97 | 4 | 14.2% | LI-1 · LI-2 · LI-3 |
| ui-ux-pro-max | 3.39 | 5 | 12.6% | LI-1 · LI-2 · LI-3 |

세 arm 모두 "짧은 페이지 + 작은 인셋 히어로" — 코덱스가 잰 압도적 원페이지(10~16 vh, 폴드 커버리지 89~130%)와
정반대 서명이다. 이 브리프는 원페이지 요구가 없었으므로 결함이 아니라 **출발점**이고, `landing` arm이 갈라야 할 거리다.

## 랜딩 브리프 실측 (2026-09-02, 같은 브리프·grok-4.6·image_gen)

| 브랜드 | arm | 페이지 vh | 섹션 | 폴드 커버리지 | render | landing-integrity | 비용 | 비고 |
|---|---|---:|---:|---:|---|---|---:|---|
| stripe | autopilot | 6.05 | 8 | (핀 스테이지) | PASS | FAIL 2 (LI-2 0.63 vh · LI-8 12px) | $0.44 | 기준선 |
| stripe | hallmark | 7.9 | 8 | (핀 스테이지) | PASS | FAIL 0 | $1.80 | 기준선 — 랜딩 브리프에서는 코덱스 기계 규칙을 통과, 폴드 규모·컨셉 밀도는 비교 페이지에서 |
| stripe | **landing** | **12.05** | 8 | **100%, 4변 블리드** | PASS | **FAIL 0** (2회차 수렴, LI-9 1건 자가 수정) | $0.51 | 컨셉 "money layer cutaway", 에셋 5장(히어로+4), 반전 1섹션, reduced-motion OK |
| toss | autopilot | 7.84 | 7 | (핀 스테이지) | PASS | FAIL 0 | $0.51 | 기준선 |
| toss | hallmark | 8.22 | 4 | (핀 스테이지) | PASS | FAIL 0 | 체인 로그 | 기준선 |
| toss | **landing** | **12.05** | 8 | 100% | PASS | **FAIL 0** (WARN 1) | 체인 로그 | 컨셉 "일상 책상", 라이트 그라운드 유지, 한국어 카피, 반전 없음 |

독립 재검증(오케스트레이터): render PASS · LI FAIL 0 · 스크롤 여정 후 숨은 요소 0 · reduced-motion에서 스크롤 없이 전부 표시.

## 디자이너 리뷰 · 개정 라운드(toss) — 2026-09-02

- round 1 (`toss/landing/review.md`): **BLOCK 6** — 히어로 사진 위 크롬 대비(nav 1.05~1.30:1, wordmark 1.07:1, lead 3.05:1, 포커스 링 1.38:1; 원인 = 스크림 부재), `muted` 본문 사용 3.0:1, `.reveal{opacity:0}`에 noscript 없음. WARN 13 · FYI 11. 기계 검사 두 종은 이 결함들을 못 본다 → 이슈 #86(LI-24~26)·#87(루프에 리뷰 자동 호출).
- 개정(grok, `runs/fix-toss-landing.txt`, $0.36): BLOCK 6만 지목 수정 — 스크림·halo·muted→body·noscript+scripting:none. render PASS · LI FAIL 0 · 12.05 vh 유지. 스크림이 강해 사진이 옅어졌다(트레이드오프, 비교 페이지에서 판단).
- round 2 (`reviews/toss-landing-review.md` §Round 2): **BLOCK 0** — B1 nav 6.81:1 · B2 wordmark 15.6 · B3 lead 5.37 · B4 muted 0노드 · B5 포커스 3.62~3.71 · B6 no-JS 렌더 바이트 동일. 회귀 없음(스크림 토큰색, 12.05 vh 유지). FYI 2(포커스 halo box-shadow는 DESIGN.md 그림자 절제와 충돌 — concept.md 가정에 기록 필요). round-1 WARN 13·FYI 11은 재측정 안 함. → **toss: 시드 AC 4 충족**(render PASS · LI FAIL 0 · designer-review BLOCK 0 · 시연 영상 · 비교 페이지).
- 비교 페이지 `toss/compare.html`(3열) · 3-arm 시연 영상(14초) 생성 — 두 브랜드 모두 3 arm 완비.

## 디자이너 리뷰 · 개정 라운드(stripe) — 2026-09-02

- round 1 (`reviews/stripe-landing-review.md`, 글리프 픽셀 단위 측정): **BLOCK 6** — 같은 계열(스크림 부재): lead 100% 글리프 <4.5:1, ghost CTA 99.7% <3:1, wordmark+nav 100% <3:1, h1@390 16.4% <3:1, reveal no-JS 12/13 블록 비표시, 포커스 링 98% <3:1. 브랜드 계약 위반은 0(토큰·radius·폰트 전부 적합) — "화이트 캔버스에서 잰 팔레트를 사진 위에 그대로 썼다"가 원인. 다크 섹션(`.global`)은 통과. WARN 6 · FYI 8.
- 개정 r2(grok, `runs/fix-stripe-landing.txt`, $0.19): 그라디언트 스크림(사진 유지), ghost CTA 채움, 포커스 halo, noscript. 오케스트레이터 실측(`qa/round2-orchestrator/`, 명목색 vs 배경 픽셀): 텍스트 전부 ≥4.75:1·0% 미달, no-JS 0 hidden; 잔여 = 1440 nav CTA 포커스 링 32% <3:1 → 마이크로 개정 r3($0.13) → min 3.83, 0%. **BLOCK 0** (`reviews/stripe-landing-review.md` §Round 2). → **stripe: 시드 AC 4 충족**. 리뷰 에이전트는 2회 연속 무산출로 오케스트레이터 스크립트가 대체 — 이 스크립트가 LI-24 후보(#86).

## 텍스트 대비 실측 — `test-v2/tools/text-contrast.mjs` (2026-09-02 16:45, 6런, 1440·390)

명목 글자색 vs 글리프 뒤 배경 픽셀(WCAG), 포커스 링(링 색 픽셀만, 3:1), no-JS 숨김. FAIL = 어느 요소든 임계 미만 글리프 픽셀 >5%.

| 브랜드 | arm | 결과 | 주요 항목 |
|---|---|---|---|
| stripe | **landing** | **PASS**, no-JS 0 | 히어로 텍스트 전부 ≥4.75:1, 포커스 링 ≥3.4:1 |
| stripe | autopilot | FAIL 29, no-JS 7 | 다크 히어로 텍스트 전부 2.19:1(wordmark·nav·h1·lede·CTA), 포커스 링 2.53, JS 없이 7블록 비표시 |
| stripe | hallmark | FAIL 5, no-JS 3 | CTA 라벨 2.02:1 ×2, JS 없이 3블록 비표시 |
| toss | **landing** | **PASS**(개정 r3 후, $0.22), no-JS 0 | r3 전: 히어로 CTA 2개 포커스 링 2.26·2.38(사진 위) · ghost 라벨 4.44~4.48 경계 → r3 후 라벨 13.4:1, 링 전부 ≥3:1 |
| toss | autopilot | FAIL 13, no-JS 9 | nav 2.93~3.51, CTA 3.71, 포커스 링 1.5~1.8, JS 없이 9블록 비표시 |
| toss | hallmark | FAIL 2, no-JS 0 | 사진 위 캡션 1.05 / 1.99 |

읽는 법: 이 도구는 디자이너 리뷰의 BLOCK 계열(사진 위 대비·no-JS)을 결정론으로 잡는다(#86 LI-24~26). 기준선 4런의 결함은 이 브리프의 산출을 그대로 잰 것이고, 봉인 벤치와 무관하며 순위·수치 주장에 쓰지 않는다. 도구 버그 2건(lazy 이미지 decode 대기, halo를 링 색으로 오인)은 이 6런에서 잡아 고쳤다.
