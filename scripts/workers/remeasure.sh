#!/usr/bin/env bash
# Independently re-measure a reference worker's headline states (docs/AUTONOMY_LOOP.md §4 ②′) with the worker's
# own control config, then print only the controls and what changed, ready to compare with its DESIGN.md.
#
#   scripts/workers/remeasure.sh <id> <url> <locale> [extra probe flags…]
#
# The config is the worker's states cfg.json under artifacts/reference-evidence/visual/<id>/ (the one with the
# most controls; REMEASURE_CFG=<path> picks another). capture-mcp.mjs records the worker's `close` selectors and
# `hideOverlays` in that cfg since 2026-11-09, and they are applied here, so the call is the worker's call. For
# older cfgs, pass them yourself (`--close "<sel>,<sel>"`, `--hide-overlays`), from the worker's report.
# Output: <out>/<id>.sum (full summary) and <out>/<id>-out.json; <out> defaults to $TMPDIR/omd-remeasure.
set -eo pipefail
ID=$1; URL=$2; LOC=$3; shift 3 || { echo "usage: remeasure.sh <id> <url> <locale> [probe flags…]" >&2; exit 2; }
REPO=$(cd "$(dirname "$0")/../.." && pwd)
OUT=${REMEASURE_OUT:-${TMPDIR:-/tmp}/omd-remeasure}
mkdir -p "$OUT"
EV="$REPO/artifacts/reference-evidence/visual/$ID"
CFG=${REMEASURE_CFG:-$(python3 - "$EV" <<'PY'
import glob, json, sys
best = max(glob.glob(sys.argv[1] + "/*/cfg.json"), key=lambda p: (len(json.load(open(p)).get("controls", [])), p), default="")
print(best)
PY
)}
[ -n "$CFG" ] && [ -f "$CFG" ] || { echo "$ID: no states cfg under $EV" >&2; exit 2; }
FLAGS=()
eval "$(python3 - "$CFG" <<'PY'
import json, shlex, sys
c = json.load(open(sys.argv[1]))
if c.get("close"): print("FLAGS+=(--close " + shlex.quote(",".join(c["close"])) + ")")
if c.get("hideOverlays"): print("FLAGS+=(--hide-overlays)")
PY
)"
cd "$REPO/web"
node scripts/probe-keyboard-states.mjs "$URL" --cfg "$CFG" --locale "$LOC" --browser worker --out "$OUT/$ID-out.json" "${FLAGS[@]}" "$@" --quiet --summary 2> "$OUT/$ID.sum" || true
echo "# $ID · cfg $CFG ${FLAGS[*]} $*"
head -1 "$OUT/$ID.sum" | cut -c1-200
grep -E "^[a-z][a-z0-9-]*: <|NOT FOUND|UNMEASURED|CHANGED|\[self\]|\[label\]|\[descendant\]" "$OUT/$ID.sum" | grep -v "^  focus" | cut -c1-160
