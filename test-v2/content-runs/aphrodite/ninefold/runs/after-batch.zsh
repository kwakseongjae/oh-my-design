#!/bin/zsh
# after-batch.zsh — FETCH_DONE 을 기다렸다가 이미지를 assets/ 로 옮기고 페이지를 다시 만들고 검사 3종을 돌린다.
cd /Users/kwakseongjae/Desktop/projects/oh-my-design
D=test-v2/content-runs/aphrodite/ninefold
t0=$(date +%s)
until grep -qE 'FETCH_DONE|Error|24h 창 초과' $D/batch-v1.log 2>/dev/null; do
  [ $(( $(date +%s) - t0 )) -gt 5400 ] && { echo "AFTER_TIMEOUT"; exit 1; }; sleep 30; done
grep -E 'FETCH_DONE' $D/batch-v1.log || { echo "AFTER_ABORT: fetch 실패"; grep -E 'Error' $D/batch-v1.log | head -3; exit 1; }
mkdir -p $D/assets; n=0
for f in $D/batch-v1/images/*.png; do [ -f "$f" ] && { cp "$f" $D/assets/; n=$((n+1)); }; done
echo "[$(date +%H:%M:%S)] assets copied=$n"
node $D/runs/build-scaffold.mjs
cd test-v2/tools
echo "═══ render-integrity ═══"; node render-integrity.mjs ../content-runs/aphrodite/ninefold/render.html 2>&1 | grep -E '^(PASS|FAIL)|✗' | head -6
echo "═══ text-contrast ═══"; node text-contrast.mjs ../content-runs/aphrodite/ninefold/render.html 2>&1 | grep -E 'FAIL|PASS' | head -6
echo "═══ landing-integrity ═══"; node landing-integrity.mjs ../content-runs/aphrodite/ninefold/render.html 2>&1 | grep -E 'FAIL|render.html' | head -14
echo "[$(date +%H:%M:%S)] AFTER_BATCH_DONE"
