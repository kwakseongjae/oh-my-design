# 레인 A 생산 기록 (T3-3 Phase 2) — 재현 포인트

- `prompts/run-<brand>-<arm>-rep<n>.txt` — grok build CLI에 넘긴 **프롬프트 바이트 그대로**(브리프 SHA·팩 SHA·스냅샷 handle·rep 변형 포함). 84칸 + apple·toss 24칸은 이전 세션 프롬프트(동일 템플릿).
- `chain.sh` / `chain-timeout.sh` — 실행 러너(직렬, 셀당 `RUN_DONE` 확인; timeout판은 40분 상한).
- `costs.jsonl` — 셀별 `total_cost_usd`·턴·토큰·grok sessionId (재실행 시 비용 기준선).
- 산출 칸은 `test-v2/03-runs/lane-a/<brand>/<arm>/rep-<n>/`(git 밖, 커스터디 정책) — 파일별 SHA는 `../cell-manifest.json`.
- 재현: `grok --prompt-file prompts/run-X.txt -m grok-4.6 --always-approve --cwd <repo> --output-format json`. 모델·경로·이미지 채널은 `run.json`의 `model`/`via`/`snapshotId`와 `run-config.json`이 봉인.
