#!/usr/bin/env bash
# 컨텍스트 복원 — 새 세션/compact 후 이 스크립트 하나로 현재 위치를 복원한다.
set -uo pipefail
cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

STATE_FILE="docs/CURRENT_STATE.md"
JOURNAL_FILE="docs/JOURNAL.md"
ROADMAP_FILE="spec/v2-execution.md"

echo "════════ CURRENT STATE ════════"
cat "$STATE_FILE" 2>/dev/null || echo "(없음 — $STATE_FILE 먼저 생성 필요)"

echo ""
echo "════════ JOURNAL 최근 2개 항목 ════════"
awk '/^## /{n++} n>2{exit} n>=1{print}' "$JOURNAL_FILE" 2>/dev/null || echo "(없음)"

echo ""
echo "════════ GIT ════════"
git log --oneline -5 2>/dev/null || echo "(git 저장소 아님)"
DIRTY=$(git status --short 2>/dev/null | head -20)
[ -n "$DIRTY" ] && { echo "-- dirty --"; echo "$DIRTY"; }

echo ""
echo "════════ ROADMAP 미완료 (다음 후보) ════════"
grep -n -E '⬜|🔶|\[ \]' "$ROADMAP_FILE" 2>/dev/null | head -15 || echo "(마커 없음 — $ROADMAP_FILE 확인)"
