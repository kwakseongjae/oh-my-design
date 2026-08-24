#!/bin/zsh
# 9개 브랜드 에셋 생성 — 웨이브 3개씩 (grok 세션 동시 3개가 안전선)
# usage: run-asset-waves.sh [images] [videos]
cd "$(dirname "$0")"
IMAGES=${1:-16}
VIDEOS=${2:-3}
LOG_DIR=/private/tmp/claude-501/-Users-kwakseongjae-Desktop-projects-oh-my-design/24badea7-e8e8-43af-9c05-87abb1f1e1f6/scratchpad/asset-waves
mkdir -p $LOG_DIR

WAVES=(
  "toss karrot wanted"
  "apple figma naver"
  "baemin coupang musinsa"
)

for wave in "${WAVES[@]}"; do
  echo "=== wave: $wave ==="
  pids=()
  for b in ${=wave}; do
    node generate-assets.mjs --brand $b --run --images $IMAGES --videos $VIDEOS > $LOG_DIR/$b.json 2>&1 &
    pids+=($!)
  done
  wait $pids
  for b in ${=wave}; do
    tail -1 $LOG_DIR/$b.json 2>/dev/null
    n_img=$(ls ../02-generated/$b/images 2>/dev/null | wc -l | tr -d ' ')
    n_vid=$(ls ../02-generated/$b/videos 2>/dev/null | grep -c mp4)
    echo "  $b: images=$n_img videos=$n_vid"
  done
done
echo "ALL_WAVES_DONE"
