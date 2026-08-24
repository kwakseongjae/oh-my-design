#!/bin/zsh
# T2-1 마이그레이션 웨이브 — 웨이브 내부만 병렬 (grok 승인 조건)
# usage: run-migration-wave.sh <id...>
cd "$(dirname "$0")"
LOG=/private/tmp/claude-501/-Users-kwakseongjae-Desktop-projects-oh-my-design/24badea7-e8e8-43af-9c05-87abb1f1e1f6/scratchpad/migration-waves
mkdir -p $LOG
DONE_LIST=$(dirname "$0")/../../docs/design-md-weight/migrated/DONE.txt
pids=()
for b in "$@"; do
  if grep -qx "$b" "$DONE_LIST" 2>/dev/null; then
    echo "SKIP $b — 이미 양 레인 통과 (DONE.txt). 승인본을 덮어쓰지 않는다."
    continue
  fi
  node migrate-reference.mjs --brand $b > $LOG/$b.json 2>&1 &
  pids+=($!)
done
wait $pids
echo "=== 게이트 결과 ==="
for b in "$@"; do
  python3 -c "
import json,sys
try:
    d=json.load(open('$LOG/$b.json'))
    print(f\"  $b: {d['verdict']}\" + ('' if d['verdict']=='PASS' else ' ' + ','.join(p['check'] for p in d['problems'])))
except Exception:
    print('  $b: 파싱 실패 — 로그 확인')
"
done
echo "WAVE_DONE"
