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
| stripe | **landing** | **12.05** | 8 | **100%, 4변 블리드** | PASS | **FAIL 0** (2회차 수렴, LI-9 1건 자가 수정) | $0.51 | 컨셉 "money layer cutaway", 에셋 5장(히어로+4), 반전 1섹션, reduced-motion OK |

독립 재검증(오케스트레이터): render PASS · LI FAIL 0 · 스크롤 여정 후 숨은 요소 0 · reduced-motion에서 스크롤 없이 전부 표시.
