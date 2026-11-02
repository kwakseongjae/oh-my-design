#!/usr/bin/env bash
# Spawn one background worker (Codex gpt-6.1-sol by default, or Claude Sonnet) from a work order.
# docs/WORKER_PLAN_2026-10-29.md §4. Owner decisions 2026-10-29: Sol workers run at most 4 at a time; browsers are
# the worker's own Chrome (see web/scripts/probe-keyboard-states.mjs --browser worker), never the owner's profile.
#
#   scripts/workers/spawn.sh --workdir DIR --order FILE [--name NAME] [--engine codex|claude]
#                            [--model M] [--effort E] [--mcp capture] [--no-wait]
#
# codex: codex exec --ignore-user-config (no personal MCP servers, browsers or computer use), workspace-write sandbox
#        with network, approvals off, JSON event log. `--mcp capture` adds the capture MCP server (scripts/workers/
#        capture-mcp.mjs), whose fixed tools run outside the sandbox and are approved automatically.
# claude: claude -p --model sonnet --effort medium, acceptEdits, a narrow Bash allowlist, no skills or MCP.
# Output: a run directory under $OMD_WORKER_RUNS (default ~/.omd-workers/runs) with order.md, worker.log,
#         last-message.md, meta.json, pid, and exit-code when done. The last stdout line is RUN_DIR=<path>.
# The worker's subshell drops this script's stdio, so `spawn.sh … | tail` returns at once.
# Workers never commit or push; the orchestrator reviews the diff, reruns the checks and commits.
set -euo pipefail

ENGINE="codex"; MODEL=""; EFFORT=""; WORKDIR=""; ORDER=""; NAME=""; MCP=""; WAIT=1
RUNS="${OMD_WORKER_RUNS:-$HOME/.omd-workers/runs}"
MAX="${OMD_WORKER_MAX:-4}"
REPO="$(cd "$(dirname "$0")/../.." && pwd)"

while [ $# -gt 0 ]; do
  case "$1" in
    --workdir) WORKDIR="$2"; shift 2 ;;
    --order) ORDER="$2"; shift 2 ;;
    --name) NAME="$2"; shift 2 ;;
    --engine) ENGINE="$2"; shift 2 ;;
    --model) MODEL="$2"; shift 2 ;;
    --effort) EFFORT="$2"; shift 2 ;;
    --mcp) MCP="$2"; shift 2 ;;
    --no-wait) WAIT=0; shift ;;
    -h|--help) sed -n '2,17p' "$0"; exit 0 ;;
    *) echo "unknown arg: $1" >&2; exit 2 ;;
  esac
done
[ -d "$WORKDIR" ] || { echo "--workdir must be an existing directory" >&2; exit 2; }
[ -f "$ORDER" ] || { echo "--order must be a file" >&2; exit 2; }
case "$ENGINE" in codex) MODEL="${MODEL:-gpt-6.1-sol}"; EFFORT="${EFFORT:-max}" ;; claude) MODEL="${MODEL:-sonnet}"; EFFORT="${EFFORT:-medium}" ;; *) echo "--engine codex|claude" >&2; exit 2 ;; esac
WORKDIR="$(cd "$WORKDIR" && pwd)"; ORDER="$(cd "$(dirname "$ORDER")" && pwd)/$(basename "$ORDER")"
NAME="${NAME:-$(basename "$WORKDIR")}"
mkdir -p "$RUNS"

# The cap counts live Codex workers only (owner: "sol 기준 4개"); a run is live while its pid runs and it has no exit-code.
live() { local n=0; for d in "$RUNS"/*/; do [ -f "$d/engine" ] && [ "$(cat "$d/engine")" = codex ] || continue; [ -f "$d/exit-code" ] && continue; [ -f "$d/pid" ] && kill -0 "$(cat "$d/pid")" 2>/dev/null && n=$((n+1)); done; echo "$n"; }
if [ "$ENGINE" = codex ]; then
  while [ "$(live)" -ge "$MAX" ]; do
    [ "$WAIT" = 1 ] || { echo "cap reached: $(live)/$MAX Codex workers running" >&2; exit 3; }
    sleep 30
  done
fi

RUN_DIR="$RUNS/${NAME}-$(date +%Y%m%dT%H%M%S)"
mkdir -p "$RUN_DIR"
cp "$ORDER" "$RUN_DIR/order.md"
echo "$ENGINE" > "$RUN_DIR/engine"

if [ "$ENGINE" = codex ]; then
  MCP_ARGS=()
  if [ "$MCP" = capture ]; then
    MCP_ARGS=(-c 'mcp_servers.capture.command="node"' -c "mcp_servers.capture.args=[\"$REPO/scripts/workers/capture-mcp.mjs\"]" -c 'mcp_servers.capture.default_tools_approval_mode="approve"' -c 'mcp_servers.capture.tool_timeout_sec=900')
  fi
  GIT_FLAGS=(); git -C "$WORKDIR" rev-parse --git-dir >/dev/null 2>&1 || GIT_FLAGS=(--skip-git-repo-check)
  CMD=(codex exec --ignore-user-config --json ${GIT_FLAGS[@]+"${GIT_FLAGS[@]}"} -C "$WORKDIR" -m "$MODEL" -c "model_reasoning_effort=\"$EFFORT\""
       -s workspace-write -c 'sandbox_workspace_write.network_access=true' -c 'approval_policy="never"' ${MCP_ARGS[@]+"${MCP_ARGS[@]}"}
       --output-last-message "$RUN_DIR/last-message.md" --color never -)
  ( cd "$WORKDIR" && "${CMD[@]}" < "$RUN_DIR/order.md" > "$RUN_DIR/worker.log" 2>&1; echo $? > "$RUN_DIR/exit-code" ) </dev/null >/dev/null 2>&1 &
else
  CLAUDE_BIN="$(command -v claude)"
  ( cd "$WORKDIR" && "$CLAUDE_BIN" -p "$(cat "$RUN_DIR/order.md")" --model "$MODEL" --effort "$EFFORT" --output-format stream-json --verbose \
      --setting-sources project,local --strict-mcp-config --disallowedTools Skill Task Agent WebSearch WebFetch \
      --permission-mode acceptEdits --allowedTools "Bash(node:*)" "Bash(npx vitest:*)" "Bash(git diff:*)" "Bash(git status:*)" "Bash(diff:*)" "Bash(ls:*)" "Bash(cat:*)" "Bash(grep:*)" \
      --no-session-persistence --max-turns 80 > "$RUN_DIR/worker.log" 2>&1
    ec=$?
    python3 -c "import json,sys
r=[json.loads(l) for l in open(sys.argv[1]) if l.startswith('{')]
res=[x for x in r if x.get('type')=='result']
open(sys.argv[2],'w').write(res[-1].get('result','') if res else '')" "$RUN_DIR/worker.log" "$RUN_DIR/last-message.md" 2>/dev/null
    echo $ec > "$RUN_DIR/exit-code" ) </dev/null >/dev/null 2>&1 &
fi
echo $! > "$RUN_DIR/pid"
cat > "$RUN_DIR/meta.json" <<EOF
{ "name": "$NAME", "engine": "$ENGINE", "model": "$MODEL", "effort": "$EFFORT", "workdir": "$WORKDIR", "mcp": "$MCP", "started_at": "$(date -u +%Y-%m-%dT%H:%M:%SZ)" }
EOF
echo "RUN_DIR=$RUN_DIR"
