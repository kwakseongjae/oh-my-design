#!/bin/zsh
# 랜딩 콘텐츠 런 직렬 체인 — grok build, 셀마다 CONTENT_RUN_DONE 확인
set -u
HERE=${0:a:h}; ROOT=/Users/kwakseongjae/Desktop/projects/oh-my-design
for f in "$@"; do
  base=$(basename "$f" .txt)
  grok --prompt-file "$f" -m grok-4.6 --always-approve --cwd $ROOT --output-format json > "$HERE/out-$base.json" 2>&1
  done_line=$(grep -o 'CONTENT_RUN_DONE[^"\\]*' "$HERE/out-$base.json" | head -1)
  cost=$(grep -oE '"total_cost_usd": [0-9.]+' "$HERE/out-$base.json" | head -1 | grep -oE '[0-9.]+')
  print -- "RUN ${base}: ${done_line:-FAIL} cost=${cost:-?}"
done
print -- "LANDING_CHAIN_DONE $#"
