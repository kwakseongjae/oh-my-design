#!/bin/zsh
cd /Users/kwakseongjae/Desktop/projects/oh-my-design
A=test-v2/content-runs/aphrodite/higgsgen; t0=$(date +%s)
until grep -qE 'FETCH_DONE|Error|24h 창 초과' $A/batch-p1.log 2>/dev/null; do [ $(( $(date +%s) - t0 )) -gt 7200 ] && { echo "P1_TIMEOUT"; exit 1; }; sleep 30; done
grep -q 'FETCH_DONE' $A/batch-p1.log || { echo "P1_ABORT"; grep Error $A/batch-p1.log | head -2; exit 1; }
mkdir -p $A/assets; n=0; for f in $A/batch-p1/images/*.png; do cp "$f" $A/assets/ && n=$((n+1)); done; echo "[$(date +%H:%M:%S)] P1_ASSETS=$n"
for a in seq-01 ba-01-a ba-02-a ba-03-a ba-04-a; do [ -f $A/assets/$a.png ] || { echo "P2_ABORT: 앵커 없음 $a"; exit 1; }; done
node test-v2/tools/image-batch.mjs run --spec $A/set.p2.json --out $A/batch-p2 --poll 45 > $A/batch-p2.log 2>&1
grep -E 'FETCH_DONE' $A/batch-p2.log && { for f in $A/batch-p2/images/*.png; do cp "$f" $A/assets/; done; echo "[$(date +%H:%M:%S)] P2_ASSETS_DONE total=$(ls $A/assets/*.png | wc -l | tr -d ' ')"; } || { echo "P2_FAIL"; tail -3 $A/batch-p2.log; }
