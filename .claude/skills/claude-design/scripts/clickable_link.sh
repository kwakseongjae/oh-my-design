#!/usr/bin/env bash
# clickable_link.sh — emit a terminal-clickable OSC-8 hyperlink for a URL.
#
# Part of the `claude-design` skill. Used at the end of the flow to surface the
# resulting claude.ai/design canvas/result link in the terminal as a clickable
# hyperlink, with a plain-URL fallback line for terminals that don't support OSC-8.
#
# Usage:  bash scripts/clickable_link.sh "<url>" ["<label>"]
#   <url>    required — the link to make clickable
#   <label>  optional — visible text for the hyperlink (defaults to the url)
#
# Behavior:
#   - If stdout is a TTY, prints the OSC-8 hyperlink AND a plain-url fallback line.
#   - If stdout is NOT a TTY, prints only the plain url (avoids junk escapes in pipes/files).
#   - The plain-url fallback line is ALWAYS printed (even if the hyperlink line fails),
#     so the URL is never lost.
#   - Exits 2 with a usage message on stderr if no url argument is given.

set -u

if [ "$#" -lt 1 ] || [ -z "${1:-}" ]; then
  printf 'usage: %s "<url>" ["<label>"]\n' "${0##*/}" >&2
  exit 2
fi

url=$1
label=${2:-$url}

# Strip control characters (incl. ESC) from url/label so a malformed value cannot
# break out of the OSC-8 sequence or inject terminal escapes. Treat the inputs as
# data, not as terminal control. Uses tr; falls back to the raw value if tr fails.
strip_ctrl() {
  # Delete bytes 0x00-0x1F and 0x7F (C0 controls + DEL).
  printf '%s' "$1" | tr -d '\000-\037\177' 2>/dev/null || printf '%s' "$1"
}
url=$(strip_ctrl "$url")
label=$(strip_ctrl "$label")

# ESC]8;;URL ESC\  LABEL  ESC]8;;ESC\   — OSC-8 hyperlink sequence.
# Only when stdout is a TTY (otherwise escapes would be junk in pipes/files).
# `|| true` so a transient write error here never prevents the plain-url fallback below.
if [ -t 1 ]; then
  printf '\033]8;;%s\033\\%s\033]8;;\033\\\n' "$url" "$label" || true
fi

# Plain-url fallback on its own line — ALWAYS printed (the only output when non-TTY,
# and the safety net when the OSC-8 line is unsupported or failed).
printf '%s\n' "$url"
