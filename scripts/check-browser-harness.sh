#!/usr/bin/env bash
set -euo pipefail

if ! command -v browser-harness >/dev/null 2>&1; then
  echo "browser-harness is not installed" >&2
  exit 1
fi

browser-harness --version
browser-harness --doctor
printf '%s\n' 'ensure_real_tab()' 'print(page_info())' | browser-harness
