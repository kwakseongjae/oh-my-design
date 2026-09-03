#!/bin/zsh
# 게이트 픽스처 직렬 체인 — 배포 스킬을 grok build 로 돌려 산출을 남긴다.
set -u
HERE=${0:a:h}; ROOT=/Users/kwakseongjae/Desktop/projects/oh-my-design
for f in "$@"; do
  base=$(basename "$f" .txt)
  grok --prompt-file "$f" -m grok-4.6 --always-approve --cwd $ROOT --output-format json > "$HERE/out-$base.json" 2>&1
  done_line=$(grep -o 'GATE_RUN_DONE[^"\\]*' "$HERE/out-$base.json" | head -1)
  cost=$(grep -oE '"total_cost_usd": [0-9.]+' "$HERE/out-$base.json" | head -1 | grep -oE '[0-9.]+')
  print -- "RUN ${base}: ${done_line:-FAIL} cost=${cost:-?}"
done
print -- "GATE_CHAIN_DONE $#"
