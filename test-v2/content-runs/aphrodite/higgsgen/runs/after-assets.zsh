#!/bin/zsh
# after-assets.zsh — p2 까지 끝나면 검사 3종을 돌려 결과를 남긴다 (빌드는 재실행 불필요: 이미지는 상대경로 참조)
cd /Users/kwakseongjae/Desktop/projects/oh-my-design
A=test-v2/content-runs/aphrodite/higgsgen; t0=$(date +%s)
until grep -qE 'P2_ASSETS_DONE|P2_FAIL|P1_TIMEOUT|P1_ABORT|P2_ABORT' $A/after-p1.log 2>/dev/null; do [ $(( $(date +%s) - t0 )) -gt 7200 ] && { echo "ASSETS_TIMEOUT"; exit 1; }; sleep 30; done
echo "[$(date +%H:%M:%S)] assets=$(ls $A/assets/*.png 2>/dev/null | wc -l | tr -d ' ')"
cd test-v2/tools
echo "═══ render-integrity ═══"; node render-integrity.mjs ../content-runs/aphrodite/higgsgen/render.html 2>&1 | grep -E '^(PASS|FAIL)|✗' | head -8
echo "═══ text-contrast ═══"; node text-contrast.mjs ../content-runs/aphrodite/higgsgen/render.html 2>&1 | grep -E 'FAIL|PASS' | head -8
echo "═══ landing-integrity ═══"; node landing-integrity.mjs ../content-runs/aphrodite/higgsgen/render.html 2>&1 | grep -E 'FAIL|render.html' | head -14
echo "[$(date +%H:%M:%S)] AFTER_ASSETS_DONE"
