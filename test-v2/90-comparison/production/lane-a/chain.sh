#!/bin/zsh
# T3 생산 직렬 체인 — 프롬프트 파일들을 순서대로 실행, 셀마다 RUN_DONE 확인
set -u
SP=${0:a:h}
for f in "$@"; do
  base=$(basename "$f" .txt)
  grok --prompt-file "$f" -m grok-4.6 --always-approve \
    --cwd /Users/kwakseongjae/Desktop/projects/oh-my-design \
    --output-format json > "$SP/out-$base.json" 2>&1
  done_line=$(grep -o 'RUN_DONE[^"\\]*' "$SP/out-$base.json" | head -1)
  cost=$(grep -oE '"total_cost_usd": [0-9.]+' "$SP/out-$base.json" | head -1 | grep -oE '[0-9.]+')
  print -- "CELL ${base}: ${done_line:-FAIL} cost=${cost:-?}"
done
print -- "CHAIN_DONE $#"
