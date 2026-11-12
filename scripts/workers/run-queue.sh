#!/usr/bin/env bash
# Keep the Sol slots filled from a queue file and print one line per event (for a Monitor):
#   SPAWNED <id> · DONE <id> exit=<n> · RETRY <id> (capacity) · SKIPPED <id> (<why>) · IDLE (queue empty, none of ours running)
#
#   scripts/workers/run-queue.sh <queue-file> [--cap N]
#
# Queue file, one item per line (# comments and blank lines ignored), in order:
#   reverify <id>                                   re-verify an existing partial/legacy reference
#   new <id> <locale> <url> <name…>                 author a new reference (name may contain spaces)
#   spawn <id> <workdir> <order>                     run a prepared order as-is (a follow-up, e.g. id duolingo-p2)
#
# The cap counts every live Codex worker on this machine, other projects included (owner 2026-10-29: Sol
# 4 at a time). Workers start through spawn.sh in their own session, so ending this script (a Monitor
# expiring, a TaskStop) never ends a worker. An id that already has a run directory (other than
# *.killed) is skipped, so the script can be restarted with the same file at any time.
# Orders: reverify -> make-reverify-order.py (wave reverify1); new -> make-reference-order.py (wave new1).
# `new` items run the round-4 method by default (adopted 2026-11-12 after batch 9, docs/research/2026-11-09-collection-method-test.md):
# headless capture, the worker compiles its own capture (order step 6b), effort medium. The environment turns each back:
#   OMD_QUEUE_MCP=capture (headed)   OMD_QUEUE_EFFORT=max   OMD_ORDER_COMPILED=0   OMD_QUEUE_WAVE=<folder under ~/.omd-workers, default new2>
# `reverify` and `spawn` items are unchanged (spawn.sh defaults: max effort, headed capture).
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
    case "$b" in *.killed) continue ;; esac   # parked runs (capacity retries, killed spawns) are not completions
    if [ -f "$d/exit-code" ] && [ ! -e "$SEEN/$b" ]; then
      touch "$SEEN/$b"; id=${b#rv-}; id=${id%-20*}
      ec=$(cat "$d/exit-code")
      # Codex capacity errors end a run in seconds or minutes with no work done: park the run and queue the
      # item again at the end (once per run directory), instead of losing it.
      if [ "$ec" != 0 ] && grep -q "at capacity" "$d/worker.log" 2>/dev/null; then
        for l in "${LINES[@]}"; do set -- $l; if [ "$2" = "$id" ]; then LINES+=("$l"); break; fi; done
        mv "$d" "$d.killed"; echo "RETRY $id (model at capacity)"
      else
        echo "DONE $id exit=$ec"
      fi
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
        wave=${OMD_QUEUE_WAVE:-new2}
        if OMD_ORDER_COMPILED=${OMD_ORDER_COMPILED:-1} python3 "$REPO/scripts/workers/make-reference-order.py" "$wave" "$id" "$name" "$url" "$locale" "$origin" >/dev/null 2>&1; then
          "$REPO/scripts/workers/spawn.sh" --workdir "$HOME_W/$wave/$id" --order "$HOME_W/$wave/$id/order.md" --name "rv-$id" --mcp "${OMD_QUEUE_MCP:-capture-headless}" --effort "${OMD_QUEUE_EFFORT:-medium}" >/dev/null 2>&1
          echo "SPAWNED new:$id"; sleep 20
        else echo "SKIPPED new:$id (no order)"; fi ;;
      spawn)
        if [ -f "$4" ]; then
          "$REPO/scripts/workers/spawn.sh" --workdir "$3" --order "$4" --name "rv-$id" --mcp capture >/dev/null 2>&1
          echo "SPAWNED $id"; sleep 20
        else echo "SKIPPED $id (no order at $4)"; fi ;;
      *) echo "SKIPPED $id (unknown kind $kind)" ;;
    esac
  done
  ours=0
  # A run is still ours only while its process lives: a worker killed without an exit-code (2026-11-02 left four)
  # must not keep this loop from reaching IDLE.
  for d in "$RUNS"/rv-*; do [ -f "$d/pid" ] && [ ! -f "$d/exit-code" ] && kill -0 "$(cat "$d/pid")" 2>/dev/null && ours=$((ours + 1)); done
  if [ "$i" -ge "${#LINES[@]}" ] && [ "$ours" -eq 0 ]; then echo "IDLE"; exit 0; fi
  sleep 60
done
