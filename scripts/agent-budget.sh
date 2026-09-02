#!/bin/zsh
# 가용 메모리에 맞는 동시 에이전트 수를 출력한다.
#
# 왜 필요한가: 2026-08-29 웨이브 42에서 배경 grok 워커 5기가 연속으로 죽었다. grok도
# 인증도 멀쩡했고 단일 실행도 죽었다 — 원인은 macOS jetsam이었다. 여유 메모리가 60MB,
# 스왑이 14GB 중 13.7GB(96%) 차 있었고, 커널이 메모리를 잡는 프로세스부터 죽였다.
# 전경 스모크("ALIVE" 한 줄)만 살아남은 것이 단서였다 — 즉시 끝나 메모리를 안 잡는다.
#
# 이 머신은 다른 Claude 세션 2개, 타 프로젝트의 4.7GB Python 작업, Cursor, VM을 동시에
# 돌린다. 가용량은 내 통제 밖에서 크게 흔들리므로, 배치를 띄우기 전에 매번 잰다.
#
# grok 에이전트 1기 실측 RSS ≈ 234MB. 헤드룸을 두고 400MB로 잡는다.
#
# usage: scripts/agent-budget.sh [최대치]     기본 최대 5

set -u
MAX=${1:-5}
PER_AGENT_MB=400
RESERVE_MB=2048   # 시스템과 편집기용으로 남겨두는 몫

avail=$(vm_stat | awk '
  /Pages free/     { gsub(/\./,"",$3); f=$3 }
  /Pages inactive/ { gsub(/\./,"",$3); i=$3 }
  END { printf "%.0f", (f+i)*16384/1048576 }')

swap_free=$(sysctl -n vm.swapusage | sed -E 's/.*free = ([0-9.]+)M.*/\1/')

usable=$(( avail - RESERVE_MB ))
(( usable < 0 )) && usable=0
n=$(( usable / PER_AGENT_MB ))
(( n > MAX )) && n=$MAX

# 스왑이 거의 찼으면 가용 페이지가 많아 보여도 믿지 않는다 — 8/29에 커널이 죽인
# 상태가 정확히 그랬다(inactive는 많고 swap free 580MB).
if (( ${swap_free%.*} < 1024 )) && (( n > 2 )); then
  n=2
fi

(( n < 1 )) && n=1

print -- "$n"
print -u2 "  [agent-budget] 가용 ${avail}MB · swap free ${swap_free}M → 동시 ${n}기 (최대 ${MAX})"
