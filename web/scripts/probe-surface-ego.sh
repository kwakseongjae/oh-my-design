#!/bin/sh
# probe-surface-ego.sh — run probe-surface-ego.js inside ego lite's Node runtime.
#
# The script cannot run under this repo's node: `page`, `taskSpace` and the rest are globals
# that exist only inside `ego-browser nodejs`. And ego's runtime does NOT inherit this
# shell's environment (measured 2026-09-22), so configuration is prepended to the program
# as a `globalThis.OMD_CFG` literal rather than passed as env.
#
#   OMD_URL=https://weibo.com/ OMD_LABEL=weibo sh web/scripts/probe-surface-ego.sh
#   OMD_URL=... OMD_ALLOW_TEXT=1 ...        # public marketing pages only
#
# The JSON payload is the last line, after a ==== separator:
#   ... > /tmp/out.log && sed -n '/^====/,$p' /tmp/out.log | tail -1 > /tmp/out.json
set -eu

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
JS="$SCRIPT_DIR/probe-surface-ego.js"
[ -f "$JS" ] || { echo "missing $JS" >&2; exit 2; }
[ -n "${OMD_URL:-}" ] || { echo "OMD_URL is required" >&2; exit 2; }

export PATH="$HOME/.local/bin:$PATH"
command -v ego-browser >/dev/null 2>&1 || {
  echo "ego-browser not on PATH." >&2
  echo "  Install: sh .agents/skills/ego-browser/scripts/install.sh" >&2
  echo "  Then complete onboarding in the ego lite window." >&2
  exit 3
}

TMP=$(mktemp -t omd-ego-probe.XXXXXX)
trap 'rm -f "$TMP"' EXIT HUP INT TERM

# JSON-escape the URL/label so a stray quote cannot break the program.
esc() { printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'; }

{
  printf 'globalThis.OMD_CFG = { url: "%s", label: "%s", scheme: "%s", maxControls: %s, allowText: %s };\n' \
    "$(esc "$OMD_URL")" \
    "$(esc "${OMD_LABEL:-surface}")" \
    "$(esc "${OMD_SCHEME:-light}")" \
    "${OMD_MAX_CONTROLS:-6}" \
    "$([ "${OMD_ALLOW_TEXT:-0}" = "1" ] && echo true || echo false)"
  cat "$JS"
} > "$TMP"

ego-browser nodejs < "$TMP"
