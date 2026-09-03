#!/bin/zsh
# T3 생산 직렬 체인 (셀당 40분 상한) — 2026-09-02 musinsa/omd/rep-4 가 2h07m 멈춘 뒤 도입
set -u
SP=${0:a:h}
for f in "$@"; do
  base=$(basename "$f" .txt)
  perl -e 'alarm 2400; exec @ARGV' grok --prompt-file "$f" -m grok-4.6 --always-approve \
    --cwd /Users/kwakseongjae/Desktop/projects/oh-my-design \
    --output-format json > "$SP/out-$base.json" 2>&1
  code=$?
  done_line=$(grep -o 'RUN_DONE[^"\\]*' "$SP/out-$base.json" | head -1)
  cost=$(grep -oE '"total_cost_usd": [0-9.]+' "$SP/out-$base.json" | head -1 | grep -oE '[0-9.]+')
  print -- "CELL ${base}: ${done_line:-FAIL(exit=$code)} cost=${cost:-?}"
done
print -- "CHAIN_DONE $#"
