#!/bin/sh
# probe-surface-ego.sh — run probe-surface-ego.js inside ego lite's Node runtime.
#
# The script cannot run under this repo's node: `page`, `taskSpace` and the rest are globals
# that only exist inside `ego-browser nodejs`. This wrapper pipes it in and keeps the JSON
# payload separable from the human-readable log.
#
#   OMD_URL=https://weibo.com/ OMD_LABEL=weibo sh web/scripts/probe-surface-ego.sh
#   OMD_URL=… OMD_LABEL=… OMD_ALLOW_TEXT=1 sh web/scripts/probe-surface-ego.sh   # public pages only
#   … > /tmp/out.log   then  sed -n '/^====/,$p' /tmp/out.log | tail -1 > /tmp/out.json
#
# Env: OMD_URL (required) · OMD_LABEL · OMD_SCHEME · OMD_MAX_CONTROLS · OMD_ALLOW_TEXT
set -eu

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
JS="$SCRIPT_DIR/probe-surface-ego.js"
[ -f "$JS" ] || { echo "missing $JS" >&2; exit 2; }

export PATH="$HOME/.local/bin:$PATH"
command -v ego-browser >/dev/null 2>&1 || {
  echo "ego-browser not on PATH." >&2
  echo "  Install: sh .agents/skills/ego-browser/scripts/install.sh" >&2
  echo "  Then complete onboarding in the ego lite window and open a new terminal." >&2
  exit 3
}

# `nodejs` reads the program from stdin; env vars are inherited by the runtime.
ego-browser nodejs < "$JS"
