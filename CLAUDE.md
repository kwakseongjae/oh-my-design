@AGENTS.md

## 세션 연속성 프로토콜
- 시작: `scripts/context_restore.sh` 실행(또는 docs/CURRENT_STATE.md 읽기) → 막힘/대기부터 처리.
- 체크포인트: 작업 단위 완료·결정 확정마다 CURRENT_STATE.md를 먼저 갱신하고 나서 보고한다.
- 종료: JOURNAL.md 맨 위에 항목 추가(한 일/열린 것/다음, 5줄 이내). 채팅에만 있는 맥락은 잃어버린 것으로 간주.
- 컨텍스트가 요약(compact)된 채 재개되면: 첫 행동으로 context_restore.sh를 실행해 복원한다.
