#!/usr/bin/env bash
# Collection round 4 (owner 2026-11-11: 「수집 관련해서 max로 굳이 안써도 돼. 가장 효율적인 방식을 찾아봐줘」).
# Writers at lower effort, given the compiled measurements, on the evidence the max-effort runs gathered.
#   run.sh <arm> <engine> <model|-> <effort> [site-id…]      e.g.  run.sh m codex - medium
# Codex arms run up to 4 at a time (owner 2026-10-29); Claude arms one at a time. Restartable: a site whose run
# directory exists is skipped. Run names: rv-x9<arm>-<id>; folders: ~/.omd-workers/exp9<arm>/<id>.
set -u
ARM=$1; ENGINE=$2; MODEL=$3; EFFORT=$4; shift 4
HERE=$(cd "$(dirname "$0")" && pwd)
MAIN=$(dirname "$(git -C "$HERE" rev-parse --path-format=absolute --git-common-dir)")
HOME_W=$HOME/.omd-workers
live() { pgrep -f "codex-darwin-arm64.*codex exec" | wc -l | tr -d ' '; }
grep -v '^#' "$HERE/sites.txt" | while read -r id src prefix locale url name; do
  [ $# -gt 0 ] && ! printf '%s\n' "$@" | grep -qx "$id" && continue
  ls -d "$HOME_W"/runs/rv-x9"$ARM"-"$id"-2* >/dev/null 2>&1 && { echo "SKIP $ARM $id"; continue; }
  python3 "$HERE/make-folder.py" "exp9$ARM" "$ENGINE" "$id" "$src" "$prefix" "$locale" "$url" $name >/dev/null || { echo "FOLDER-FAIL $ARM $id"; continue; }
  W="$HOME_W/exp9$ARM/$id"
  if [ "$ENGINE" = codex ]; then
    while [ "$(live)" -ge 4 ]; do sleep 20; done
    "$MAIN/scripts/workers/spawn.sh" --workdir "$W" --order "$W/order.md" --name "rv-x9$ARM-$id" --effort "$EFFORT" </dev/null >/dev/null 2>&1
    echo "SPAWNED $ARM $id $(date +%H:%M:%S)"; sleep 15
  else
    "$MAIN/scripts/workers/spawn.sh" --engine claude --model "$MODEL" --effort "$EFFORT" --workdir "$W" --order "$W/order.md" --name "rv-x9$ARM-$id" </dev/null >/dev/null 2>&1
    until ls "$HOME_W"/runs/rv-x9"$ARM"-"$id"-2*/exit-code >/dev/null 2>&1; do sleep 20; done
    echo "DONE $ARM $id exit=$(cat "$HOME_W"/runs/rv-x9"$ARM"-"$id"-2*/exit-code) $(date +%H:%M:%S)"
  fi
done
if [ "$ENGINE" = codex ]; then
  while [ "$(live)" -gt 0 ]; do sleep 30; done
  for d in "$HOME_W"/runs/rv-x9"$ARM"-*; do echo "DONE $(basename "$d") exit=$(cat "$d/exit-code" 2>/dev/null || echo ?)"; done
fi
echo "ALL-DONE-$ARM"
