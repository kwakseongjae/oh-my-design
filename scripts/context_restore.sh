#!/usr/bin/env bash
# 컨텍스트 복원 — 새 세션/compact 후 이 스크립트 하나로 현재 위치를 복원한다. SessionStart 훅이 자동으로 돌린다.
#
# 출력 전체를 9KB 아래로 둔다. 훅 출력이 길면 Claude Code는 앞 2KB만 보여 주고 나머지를 파일로 돌린다
# (2026-11-10: CURRENT_STATE.md 465KB → 출력 76KB → 실제로 읽힌 것은 2KB). 그래서 파일마다 상한을 두고,
# 상한을 넘는 파일은 잘라 내는 대신 "줄여라"고 알린다.
set -uo pipefail
cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

STATE_FILE="docs/CURRENT_STATE.md"
JOURNAL_FILE="docs/JOURNAL.md"
ROADMAP_FILE="docs/ROADMAP.md"

# 줄 단위로 max 바이트까지만 낸다(head -c는 한글 한 글자의 중간을 자를 수 있다).
cap() { awk -v max="$1" '{ n += length($0) + 1; if (n > max) { print "… (이하 생략 — 파일을 직접 읽어라)"; exit } print }'; }

echo "════════ 지금 ($STATE_FILE 앞부분) ════════"
if [ -f "$STATE_FILE" ]; then
  LC_ALL=C cap 5500 < "$STATE_FILE"
  SIZE=$(wc -c < "$STATE_FILE" | tr -d ' ')
  [ "$SIZE" -gt 40000 ] && echo "⚠ $STATE_FILE 가 $((SIZE / 1000))KB다. 오래된 날짜 절을 docs/archive/state/로 옮겨라."
else
  echo "(없음 — $STATE_FILE 먼저 생성 필요)"
fi

echo ""
echo "════════ JOURNAL 최근 2개 항목 ════════"
awk '/^## /{n++} n>2{exit} n>=1{print}' "$JOURNAL_FILE" 2>/dev/null | LC_ALL=C cap 1800 || echo "(없음)"

echo ""
echo "════════ GIT ════════"
echo "branch: $(git branch --show-current 2>/dev/null)"
git log --oneline -3 2>/dev/null || echo "(git 저장소 아님)"
DIRTY=$(git status --short 2>/dev/null | head -10)
[ -n "$DIRTY" ] && { echo "-- dirty --"; echo "$DIRTY"; }

echo ""
echo "════════ 트랙 ($ROADMAP_FILE) ════════"
# ROADMAP.md의 <!-- tracks:start --> … <!-- tracks:end --> 사이 표만 낸다.
awk '/<!-- tracks:start -->/{on=1; next} /<!-- tracks:end -->/{on=0} on' "$ROADMAP_FILE" 2>/dev/null | LC_ALL=C cap 1500 || echo "(없음 — $ROADMAP_FILE 확인)"
