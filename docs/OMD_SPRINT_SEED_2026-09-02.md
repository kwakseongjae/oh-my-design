# omd 2주 스프린트 시드 — 2026-09-02 (Ouroboros `seed_fdfad08ba47e`)

> 인터뷰 `interview_20260902_011743`(5라운드, 모호도 0.19)에서 생성. 사용자 확정 답: 이관 완주 우선(마라톤 무인),
> 슬롭 게이트 공통+브랜드별, Fable을 master·critic·final-qa에 배치, 내부 부채 반나절 선행, 도구 온보딩은
> 문답형 setup. 오케스트레이터가 위임 범위에서 답한 것(2주 안/밖 경계·수용 기준·컷라인)은 사용자 확인 대기.
> 계획 정본은 `docs/OMD_PLAN_2026-09-02.md`; 이 시드는 그 계획의 실행 계약이다.

## Goal

211본 잔여 Core v2 이관을 무인 마라톤 러너로 완주하고, 하네스 내부 부채를 갚고, 5개 기능(F6 루프 정식화,
F3 슬롭 게이트 v2, omd:landing, F1 omd:setup+media, F2 omd:showcase)을 Claude OAuth 80% 컷라인 거버넌스와
우선순위 순서 안에서 인도한다.

## Constraints

- Claude OAuth 주간 한도 80%에서 Claude 풀 정지; D1·D3 시작 시 사용자 `/usage` 확인.
- grok 잔액 의존: 402/429 → 5/15/30분 백오프 ×3 → blocked; 마라톤은 15분 프로브로 최대 6시간 대기 후 중단·보고.
- 봉인 벤치 `test-v2/03-runs` 수정 금지. 푸시는 건별 사용자 승인.
- opus 폴백 기본 OFF (켜면 검토 단계만, 웨이브당 ≤10호출).
- 카탈로그 정본은 `web/references/<id>/DESIGN.md`뿐.
- 80% 컷라인: 지킨다 = 마라톤(grok) · 랜딩 스킬 v1 + 브리프 1개 테스트 · F6 최소형. 잘라낸다 = F1 media 본체 ·
  F3 브랜드별 절 · F2 showcase(grok 위임 가능) · 랜딩 2번째 브리프.
- 마라톤은 무인, Fable은 랜딩·테스트·기능을 병행. 예상 grok 비용 $350–400.

## Acceptance criteria

1. **이관 완주** — 211본 전부 terminal(passed 또는 사유 있는 deferred). `metrics/wave-*.jsonl`, `DEFERRED.txt`. 설명 없는 미완료 0.
2. **부채 + F6** — render-integrity를 autopilot EXTERNAL_VERIFY에 배선, 루프 상한을 단일 개정 원장(게이트당 2·총 3)으로 통일,
   `skill-rules.json` 24종 재생성, 스킬 트리 드리프트 검사를 check-mirror-drift에 추가, AGENTS.md 낡은 헬퍼 문구 정정,
   autopilot이 `loop-trace.json`에 회차별 결함 수를 기록하고 T-B·T-D에서 감소.
3. **F3 슬롭 게이트 v2** — 공통 결정론 검사 20종을 T3 108칸에 소급 실행해 검출률·오탐 보고; 신규 레퍼런스에 브랜드별
   anti-pattern 절을 Core v2 writer가 생성.
4. **omd:landing** — 실측 기반 랜딩 크래프트 코덱스 위에서 브리프 2개(미국·한국)가 render-integrity PASS + designer-review
   BLOCK 0, 스크롤 시연 영상, 기존 autopilot 산출과 나란한 비교 페이지.
5. **F1 omd:setup + media** — 보유 채널(grok CLI image_gen / Codex $imagegen / Gemini / xAI·Recraft 키)을 명령이 아니라 문답으로
   확정해 `.omd/config`에 저장; 레퍼런스 3개 자산 세트, 세트당 $1 미만, 출처·비용 원장.
6. **F2 omd:showcase** — 명령 1회로 60초 내 mp4/gif; stripe 3-arm 영상이 캠페인 촬영에 그대로 쓰임.
7. **릴리즈 2.0.1** (사용자 확정 09-02 11:50) — 신규 스킬(omd:landing·omd:setup·omd:media·omd:showcase·omd:issue)과 러너·검증기 개정을 담아 `omd-release-hygiene` 통과 후 npm 배포(배포 자체는 사용자 인증 필요) + 프로덕션 싱크(main 머지·푸시·/design.md 라이브 확인).
8. **임팩트 콘텐츠** — X + Threads에 "와 다르다" 급 소재 2종: stripe 3-arm 스크롤 비교 영상(미국 브랜드 편) + omd:landing 결과물 쇼케이스. 그록봇 하드 룰(수치 무조작·레퍼런스 태그 금지·unofficial 고지·봉인 수치 미공개) 유지, 사람 승인 게이트.

## Exit conditions

- migration_done: 211/211 terminal, DEFERRED 사유 완비.
- claude_hard_stop: 사용자 `/usage` ≥80% → 컷라인 적용(마라톤·랜딩 v1 유지).
- grok_exhaustion: 402가 6시간 넘고 사용자 충전 불가 → 마라톤 중단·보고, F2 생략.
- sprint_complete: AC 6개 평가, 잔여는 다음 스프린트 문서화.
- plan_invalidation: 사용자가 우선순위를 뒤집거나 기능 2개 이상을 밀어내는 범위를 추가 → 재인터뷰.

## Evaluation principles (가중치)

migration_completeness 0.25 · unattended_reliability 0.20 · feature_acceptance_fidelity 0.20 · resource_governance 0.15 ·
parallel_efficiency 0.10 · harness_integrity 0.10.

## 실행 일정 (크리티컬 패스, Claude 풀)

| 일 | 작업 | 산출 |
|---|---|---|
| D0 (09-02) | 마라톤 가동(완료) · 랜딩 코덱스 리서치 · 이 시드 | `landing-craft-codex.md` |
| D1 | 내부 부채 반나절(①②③④) · `omd:landing` 스킬 v1 + 아트디렉터 에이전트 · 테스트 셋업 | 스킬 파일, content-runs/landing |
| D2 | 랜딩 테스트 런 2브리프 · 비교 페이지 · showcase 영상(grok 워커) | 비교 페이지, mp4 |
| D3–4 | F6 루프 정식화 + unattended | loop-trace.json |
| D5–6 | F3 슬롭 게이트 v2 | 검출률 보고 |
| D7 | F1 setup + media | `.omd/config`, 자산 세트 3 |
| D8–9 | 2.0.1 릴리즈(release-hygiene·카운트 싱크·npm) + X/Threads 소재 최종 승인·게시 | 태그 v2.0.1, 포스트 |
| 병행 | 마라톤 24웨이브(grok) — 완주 예상 D1 오후~D2 | 웨이브 커밋 24 |
