#!/usr/bin/env bash
# check-release-hygiene — guard the changeset against experiment byproducts.
#
# Scans STAGED files (default) or a given file list for scratch artifacts that
# should never reach the public repo: iterative drafts (v1/v2 .bak), source
# crops, contact sheets, logs, and anything under the gitignored scratch dirs.
#
# Used by:
#   - .husky/pre-commit (automatic gate)
#   - omd-release-hygiene skill (manual / agent-driven audit)
#   - `bash scripts/check-release-hygiene.sh` (ad-hoc)
#
# Exit 0 = clean. Exit 1 = byproducts found (commit blocked).
# Bypass (emergencies only): git commit --no-verify

set -uo pipefail

mode="${1:-staged}"

if [ "$mode" = "staged" ]; then
  files=$(git diff --cached --name-only --diff-filter=AM 2>/dev/null)
else
  # scan all tracked + untracked-but-not-ignored files
  files=$(git ls-files --cached --others --exclude-standard 2>/dev/null)
fi

[ -z "$files" ] && { echo "[hygiene] no files to scan."; exit 0; }

# Byproduct path patterns (extended regex). Each line = one rule.
#   1. iterative draft backups:   foo.v1.html.bak / foo.bak / foo.orig / foo.tmp
#   2. source crops / contact sheets:  _source-*, *-contact-sheet*
#   3. stray logs:  *.orchestrator.log, *.log at repo edges
#   4. scratch dirs that must be gitignored, never staged:  experiments/, .promo/
patterns='(\.v[0-9]+\.[a-z]+\.bak$)|(\.bak$)|(\.orig$)|(\.tmp$)|(/_source-)|(-contact-sheet)|(\.orchestrator\.log$)|(^experiments/)|(^\.promo/)|(/_old)|(^content/posts/_old)'

violations=$(echo "$files" | grep -nE "$patterns" || true)

if [ -n "$violations" ]; then
  echo ""
  echo "  ✗ release-hygiene: experiment byproducts staged for commit:"
  echo ""
  echo "$violations" | sed 's/^/      /'
  echo ""
  echo "  These are iterative/scratch artifacts that should not be pushed."
  echo "  Fix:  git restore --staged <file>   (unstage)"
  echo "        rm <file>                      (delete if scratch)"
  echo "  Scratch dirs (experiments/, .promo/) must stay gitignored."
  echo "  Bypass (emergencies only):  git commit --no-verify"
  echo ""
  exit 1
fi

echo "[hygiene] ✓ no experiment byproducts in changeset."
exit 0
