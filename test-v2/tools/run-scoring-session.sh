#!/bin/zsh
# run-scoring-session.sh — grok-4.6 평가자 세션 1개 실행 ((평가자, 레인, 청크)당 1세션).
#
# 세션 디렉터리를 cwd로 주고 패킷만 프롬프트로 넘긴다. 평가자는 responses.jsonl을 그 디렉터리에
# 쓴다. sonnet5 세션은 이 스크립트가 아니라 오케스트레이터가 Agent(model: sonnet)로 같은 packet.md를
# 프롬프트로 주어 연다 — 호출 경로만 다르고 입력은 바이트 동일해야 한다(manifest.json의 SHA).
#
# usage: run-scoring-session.sh <chunk 1|2|3>        (run_in_background로)
set -u
CHUNK=${1:?chunk}
ROOT=/Users/kwakseongjae/Desktop/projects/oh-my-design
DIR=$ROOT/test-v2/90-comparison/sessions/lane-a/grok-4.6/chunk-$CHUNK
[[ -f $DIR/packet.md ]] || { print -u2 "패킷 없음: $DIR/packet.md — build-packets.mjs 먼저"; exit 1 }
[[ -f $DIR/responses.jsonl ]] && { print -u2 "responses.jsonl이 이미 있다 — 봉인 세션은 재실행하지 않는다"; exit 2 }
grok --prompt-file $DIR/packet.md -m grok-4.6 --always-approve --cwd $DIR --output-format json > $DIR/session.out.json 2>&1
cost=$(grep -oE '"total_cost_usd": [0-9.]+' $DIR/session.out.json | head -1 | grep -oE '[0-9.]+')
done_line=$(grep -o 'SCORING_DONE[^"\\]*' $DIR/session.out.json | head -1)
print -- "SESSION grok-4.6 chunk-$CHUNK: ${done_line:-NO_DONE} cost=${cost:-?}"
node $ROOT/test-v2/tools/validate-responses.mjs --session $DIR --key $ROOT/test-v2/90-comparison/sessions/keys/grok-4.6-chunk-$CHUNK.json
