#!/bin/zsh
# Run the shadcn DESIGN.md skill headlessly in one arm directory.
arm=$1
here=${0:A:h}
cd "$here/app-$arm" || exit 1
prompt=$(cat "$here/PROMPT.txt")
fnm exec --using=24 -- claude --dangerously-skip-permissions -p "$prompt" \
  --model sonnet --max-turns 80 --output-format json > "$here/run-$arm.json" 2> "$here/run-$arm.err"
echo "exit $? $arm"
