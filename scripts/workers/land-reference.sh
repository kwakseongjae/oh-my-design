#!/usr/bin/env bash
# Land one finished reference worker's output in a catalog worktree, up to (not including) the commit.
#
#   scripts/workers/land-reference.sh <worker-folder> <id> <worktree>
#
# <worker-folder> holds the worker's out/DESIGN.md, out/reference.json and verification.md
# (~/.omd-workers/reverify1/<id> or ~/.omd-workers/new1/<id>). The orchestrator has already read the
# worker's report and re-measured its headline claim (AUTONOMY_LOOP §4 ②′); this script does the
# mechanical part of the 2026-11-02 landing sequence and stops for review:
#   copy -> build-registry + quality (prints the reference's status) -> build-reference-ast (MCP metadata)
#   -> search terms (Claude, changed references only) -> query:references:data -> sync-catalog (tests) -> evidence:ledger -> build-reference-ast -> gen-llms-full
#   -> check-counts.
# It exits non-zero if the reference is not verified_v2 or a test fails. The motion-value ratchet in
# web/__tests__/evidence-integrity.test.ts usually drops by one per re-verified reference: lower it with a
# dated line, rerun `node scripts/sync-catalog.mjs` in web/, then commit. A test that times out under load
# is rerun alone before it is believed.
set -eo pipefail
SRC=$1; ID=$2; WT=$3
REPO=$(cd "$(dirname "$0")/../.." && pwd)
[ -f "$SRC/out/DESIGN.md" ] && [ -f "$SRC/out/reference.json" ] && [ -f "$SRC/verification.md" ] || { echo "missing outputs in $SRC" >&2; exit 2; }
[ -d "$WT/web/references" ] || { echo "not a catalog worktree: $WT" >&2; exit 2; }
NEW=0; [ -d "$WT/web/references/$ID" ] || NEW=1
mkdir -p "$WT/web/references/$ID"
cp "$SRC/out/DESIGN.md" "$WT/web/references/$ID/DESIGN.md"
cp "$SRC/out/reference.json" "$WT/web/references/$ID/reference.json"
cp "$SRC/verification.md" "$WT/web/references/$ID/.verification.md"
cd "$WT/web"
node scripts/build-registry.mjs >/dev/null
node scripts/build-reference-quality.mjs | sed -n 2p
STATUS=$(npx tsx -e "import { REFERENCE_QUALITY } from './src/data/reference-quality.generated'; import { REGISTRY_BY_ID } from './src/data/registry.generated'; const e = REFERENCE_QUALITY.find(x => x.id === '$ID')!; const r = (REGISTRY_BY_ID as any)['$ID']; console.log([e.status, JSON.stringify(e.reasonCodes), JSON.stringify(e.advisoryCodes), 'claims=' + e.claimCount, 'components=' + e.componentCount + '/' + e.statedComponentCount, r.country, r.category].join(' '))")
echo "[$ID]$([ $NEW = 1 ] && echo ' (new)') $STATUS"
case "$STATUS" in verified_v2*) ;; *) echo "not verified_v2; stopping before the sync" >&2; exit 3 ;; esac
npm run -s build-reference-ast | tail -1
# Search terms for MCP search_references (Claude; only references whose text changed). Needs ANTHROPIC_API_KEY in the
# main checkout's web/.env.local; without it the reference is still found by keywords and the next run fills it in.
[ -f scripts/build-search-descriptors.mjs ] && node --env-file-if-exists="$REPO/web/.env.local" --no-warnings scripts/build-search-descriptors.mjs 2>&1 | grep -E "to \(re\)write|wrote|failed|have terms" || true
(cd .. && npm run -s query:references:data | tail -1)
node scripts/sync-catalog.mjs 2>&1 | grep -E "fingerprints\]|count\] targets|FAIL|AssertionError|Tests " || true
npm run -s evidence:ledger | tail -1
npm run -s build-reference-ast | tail -1
cd .. && node scripts/gen-llms-full.cjs | tail -1 && node scripts/check-counts.mjs | tail -1
echo "next: fix the motion ratchet if it moved, rerun sync-catalog, review the diff, commit"
