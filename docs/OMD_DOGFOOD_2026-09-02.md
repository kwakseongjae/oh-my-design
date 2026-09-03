# 2.0.1 도그푸딩 계획 — 재개 시 첫 작업 (2026-09-02 저녁 작성, 사용자 승인: opus5로 진행)

발행 전 조건: 아래 4경로가 **설치본에서 Claude Code 경로로** 실제로 돌아가야 한다. 지금까지의 검증은
grok 워커 경로(landing)·엔진 직접 호출(showcase)·감지 스크립트(setup)뿐이고, `omd:media`는 미실행이다.

## 셋업

```bash
npm pack                                  # oh-my-design-cli-2.0.1.tgz
mkdir -p /tmp/omd-dogfood && cd /tmp/omd-dogfood && npm init -y && npm i /path/to/oh-my-design-cli-2.0.1.tgz
npx omd install-skills --all --dir .      # .claude/skills·agents 설치
cp <레포>/web/references/toss/DESIGN.md ./DESIGN.md    # 브랜드 1개 (한국 편)
```
실행자: `claude -p --model opus` (또는 이 세션의 opus 서브에이전트) — 프로젝트 = /tmp/omd-dogfood, 레포 밖.

## 경로 4개 (순서대로, 각각 산출·판정 기준)

| # | 호출 | 통과 기준 | 실패 시 |
|---|---|---|---|
| 1 | `/omd:setup` | 감지 표 출력 → 문답 1배치(무인이면 첫 선택지) → `.omd/config.json` 생성(키 값 없음) → `.omd/preferences.md` pending 1줄 | 스킬 문안·`omd setup detect` 경로 수정 |
| 2 | `/omd:media hero --brand toss` | `assets/generated/hero/PROMPTS.md` + 이미지 1장(config 채널: grok-build 또는 codex) + `LEDGER.md`(채널·비용·sha) ; 세트 $1 미만 | 채널 호출 방법이 스킬에 부족하면 보강 |
| 3 | `/omd:landing toss — 앱 설치 전환` | **`omd-art-director` 서브에이전트가 실제로 스폰**돼 concept.md·storyboard.md 작성 → render.html → `omd check render/landing/contrast` 3종 PASS → `omd showcase` mp4 | 에이전트 스폰·도구 경로(설치본 `omd check …`)·codex 경로 분기 수정 |
| 4 | `/omd:issue process --dry-run` | 열린 skill-feedback 이슈 목록을 읽어 처리 계획을 내고 실제 변경은 없음 | verb 문안 수정 |

기록: 각 단계의 실제 명령·출력·소요·비용을 `docs/reviews/dogfood-2.0.1-<date>.md`에. 깨진 것은 고쳐서 레포에 커밋하고
tarball을 다시 만들어 그 단계만 재실행. 4/4 통과 후 `npm publish` 요청.

## 하드 룰
- 레포 안에서 돌리지 않는다(설치본 검증이 목적). 벤치 봉인 칸·content-runs 미접촉.
- Claude 주간 한도 80% 가드: 시작 전 `/usage` 확인.
