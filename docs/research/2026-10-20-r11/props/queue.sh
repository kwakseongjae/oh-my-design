#!/bin/bash
# Sequential Codex image queue for the round-11 props (one image at a time).
# Pattern: docs/research/2026-10-13-rebrand/codex-queue.sh in the main checkout.
#
# Usage: queue.sh <queue-file>
#   Queue lines are "<file>|<subject>"; blank lines and lines starting with # are skipped.
#   Each prompt is "Subject: <subject>. " followed by style.txt verbatim, so all 13 props
#   share one style block. Output goes to raw/<file> (local only; raw PNGs are not committed).
#
# - Skips files that already exist (a retry uses a new name, e.g. coin-r1.png).
# - Asks Codex's built-in image tool for a transparent background and an untouched copy.
# - Logs every call to codex-queue.log, without the hook / skill-loader noise lines.
# - Stops the whole queue on "hit your usage limit"; notes moderation_blocked results.
# - Pins the Codex agent model with -m (default gpt-6-astra, the model the 10/13 queue ran on):
#   the configured default gpt-6.1-sol is rejected with a ChatGPT login (400, 2026-10-20 21:17).
set -u
MODEL=${CODEX_MODEL:-gpt-6-astra}
P=$(cd "$(dirname "$0")" && pwd)
RAW=$P/raw
LOG=$P/codex-queue.log
STYLE=$(cat "$P/style.txt")
mkdir -p "$RAW"

while IFS='|' read -r name subject; do
  [ -z "$name" ] && continue
  case "$name" in \#*) continue ;; esac
  if [ -f "$RAW/$name" ]; then echo "skip $name" >>"$LOG"; continue; fi
  prompt="Subject: $subject. $STYLE"
  echo "=== $(date +%T) $name" >>"$LOG"
  TMP=$(mktemp)
  codex exec -m "$MODEL" -C "$RAW" -s workspace-write --skip-git-repo-check \
    "이미지 생성 툴(\$imagegen)로 다음 이미지를 직접 생성해서 ./$name 로 저장해줘. 투명 배경 PNG로 생성해줘(transparent background, 알파 채널 유지). 생성된 파일을 변환·재인코딩하지 말고 그대로 복사해서 저장해. 코드 작성·설명 없이 이미지만 생성·저장. Image: $prompt" \
    </dev/null >"$TMP" 2>&1
  grep -v -E '^hook: |failed to load skill' "$TMP" >>"$LOG"
  if file "$RAW/$name" 2>/dev/null | grep -q 'PNG image'; then
    echo "OK $name $(file -b "$RAW/$name")" >>"$LOG"
  else
    echo "FAIL $name" >>"$LOG"
    if grep -qi "hit your usage limit" "$TMP"; then
      echo "STOP usage limit" >>"$LOG"; rm -f "$TMP"; exit 1
    fi
    grep -q moderation_blocked "$TMP" && echo "MODERATION $name" >>"$LOG"
  fi
  rm -f "$TMP"
done <"$1"
echo "=== DONE $(date +%T)" >>"$LOG"
