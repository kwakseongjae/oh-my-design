#!/usr/bin/env bash
# Keep the Sol slots filled from a queue file and print one line per event (for a Monitor):
#   SPAWNED <id> · DONE <id> exit=<n> · SKIPPED <id> (<why>) · IDLE (queue empty, none of ours running)
#
#   scripts/workers/run-queue.sh <queue-file> [--cap N]
#
# Queue file, one item per line (# comments and blank lines ignored), in order:
#   reverify <id>                                   re-verify an existing partial/legacy reference
#   new <id> <locale> <url> <name…>                 author a new reference (name may contain spaces)
#
# The cap counts every live Codex worker on this machine, other projects included (owner 2026-10-29: Sol
# 4 at a time). Workers start through spawn.sh in their own session, so ending this script (a Monitor
# expiring, a TaskStop) never ends a worker. An id that already has a run directory (other than
# *.killed) is skipped, so the script can be restarted with the same file at any time.
# Orders: reverify -> make-reverify-order.py (wave reverify1); new -> make-reference-order.py (wave new1).
# Landing a finished run is the orchestrator's job (scripts/workers/land-reference.sh, then review).
# bash 3.2 (macOS): no associative arrays, no `set -u` with arrays that may empty.
REPO=$(cd "$(dirname "$0")/../.." && pwd)
RUNS=${OMD_WORKER_RUNS:-$HOME/.omd-workers/runs}
HOME_W=${OMD_WORKER_HOME:-$HOME/.omd-workers}
QUEUE=$1; shift || true
CAP=4
[ "${1:-}" = "--cap" ] && CAP=$2
[ -f "$QUEUE" ] || { echo "usage: run-queue.sh <queue-file> [--cap N]" >&2; exit 2; }

SEEN=$(mktemp -d)
for d in "$RUNS"/rv-*; do [ -f "$d/exit-code" ] && touch "$SEEN/$(basename "$d")"; done
live_sol() { pgrep -f "codex-darwin-arm64.*codex exec" | wc -l | tr -d ' '; }
has_run() { ls -d "$RUNS"/rv-"$1"-20* 2>/dev/null | grep -qv '\.killed$'; }

LINES=()
while IFS= read -r line || [ -n "$line" ]; do
  case "$line" in ''|\#*) continue ;; esac
  LINES+=("$line")
done < "$QUEUE"
i=0

while :; do
  for d in "$RUNS"/rv-*; do
    [ -d "$d" ] || continue
    b=$(basename "$d")
    if [ -f "$d/exit-code" ] && [ ! -e "$SEEN/$b" ]; then
      touch "$SEEN/$b"; id=${b#rv-}; id=${id%-20*}
      echo "DONE $id exit=$(cat "$d/exit-code")"
    fi
  done
  while [ "$i" -lt "${#LINES[@]}" ] && [ "$(live_sol)" -lt "$CAP" ]; do
    set -- ${LINES[$i]}; i=$((i + 1))
    kind=$1; id=$2
    if has_run "$id"; then continue; fi
    case "$kind" in
      reverify)
        if python3 "$REPO/scripts/workers/make-reverify-order.py" reverify1 "$id" >/dev/null 2>&1; then
          "$REPO/scripts/workers/spawn.sh" --workdir "$HOME_W/reverify1/$id" --order "$HOME_W/reverify1/$id/order.md" --name "rv-$id" --mcp capture >/dev/null 2>&1
          echo "SPAWNED $id"; sleep 20
        else echo "SKIPPED $id (no reverify order)"; fi ;;
      new)
        locale=$3; url=$4; shift 4; name="$*"
        origin=$(printf '%s' "$url" | sed -E 's#^(https?://[^/]+).*#\1#')
        if python3 "$REPO/scripts/workers/make-reference-order.py" new1 "$id" "$name" "$url" "$locale" "$origin" >/dev/null 2>&1; then
          "$REPO/scripts/workers/spawn.sh" --workdir "$HOME_W/new1/$id" --order "$HOME_W/new1/$id/order.md" --name "rv-$id" --mcp capture >/dev/null 2>&1
          echo "SPAWNED new:$id"; sleep 20
        else echo "SKIPPED new:$id (no order)"; fi ;;
      *) echo "SKIPPED $id (unknown kind $kind)" ;;
    esac
  done
  ours=0
  for d in "$RUNS"/rv-*; do [ -f "$d/pid" ] && [ ! -f "$d/exit-code" ] && ours=$((ours + 1)); done
  if [ "$i" -ge "${#LINES[@]}" ] && [ "$ours" -eq 0 ]; then echo "IDLE"; exit 0; fi
  sleep 60
done
