#!/usr/bin/env bash
# Land several finished, already re-measured reference workers in one pass (2026-11-09).
#
#   scripts/workers/land-batch.sh <worktree> <worker-folder>...
#
# land-reference.sh runs the whole pipeline (registry, quality, AST, search terms, query data, sync-catalog with
# the full web test suite, ledger, llms) once per reference. In batch 6 that was ~7 minutes each and the
# orchestrator's main cost. This copies every worker's outputs first, checks each one is verified_v2, and then
# runs the pipeline once. A reference that is not verified_v2 is taken back out before the pipeline runs and
# reported; the rest land. Commit per reference afterwards if you want one commit each (the copies are separate
# paths), or one commit for the batch.
#
# The orchestrator must have read each worker's report and re-measured its headline claim first
# (docs/AUTONOMY_LOOP.md §4 ②′); this script does only the mechanical part. The motion-value ratchet in
# web/__tests__/evidence-integrity.test.ts usually drops by one per re-verified legacy reference: lower it with a
# dated line and rerun `node scripts/sync-catalog.mjs` in web/.
set -eo pipefail
WT=$1; shift
REPO=$(cd "$(dirname "$0")/../.." && pwd)
[ -d "$WT/web/references" ] || { echo "not a catalog worktree: $WT" >&2; exit 2; }
[ $# -gt 0 ] || { echo "usage: land-batch.sh <worktree> <worker-folder>..." >&2; exit 2; }

IDS=()
for SRC in "$@"; do
  ID=$(basename "$SRC")
  [ -f "$SRC/out/DESIGN.md" ] && [ -f "$SRC/out/reference.json" ] && [ -f "$SRC/verification.md" ] || { echo "[$ID] missing outputs in $SRC" >&2; exit 2; }
  NEW=0; [ -d "$WT/web/references/$ID" ] || NEW=1
  mkdir -p "$WT/web/references/$ID"
  cp "$SRC/out/DESIGN.md" "$WT/web/references/$ID/DESIGN.md"
  cp "$SRC/out/reference.json" "$WT/web/references/$ID/reference.json"
  cp "$SRC/verification.md" "$WT/web/references/$ID/.verification.md"
  # A numbered cross-reference written against the worker's 15 numbered sections points at the wrong section once
  # the headings are unnumbered and reordered (batch 9: four of seven). Fix it in the worker's body.md and reassemble.
  grep -nE '§§?[0-9]' "$SRC/out/DESIGN.md" | cut -c1-140 | sed "s/^/[$ID] numbered section reference: /" >&2 || true
  IDS+=("$ID:$NEW")
done

cd "$WT/web"
node scripts/build-registry.mjs >/dev/null
node scripts/build-reference-quality.mjs >/dev/null
LANDED=()
for E in "${IDS[@]}"; do
  ID=${E%%:*}; NEW=${E##*:}
  STATUS=$(npx tsx -e "import { REFERENCE_QUALITY } from './src/data/reference-quality.generated'; import { REGISTRY_BY_ID } from './src/data/registry.generated'; const e = REFERENCE_QUALITY.find(x => x.id === '$ID')!; const r = (REGISTRY_BY_ID as any)['$ID']; console.log([e.status, JSON.stringify(e.reasonCodes), JSON.stringify(e.advisoryCodes), 'components=' + e.componentCount + '/' + e.statedComponentCount, r.country, r.category, 'ko=' + r.displayName].join(' '))")
  echo "[$ID]$([ "$NEW" = 1 ] && echo ' (new)') $STATUS"
  case "$STATUS" in
    verified_v2*) LANDED+=("$ID") ;;
    *) echo "[$ID] not verified_v2: taken back out" >&2
       if [ "$NEW" = 1 ]; then rm -rf "references/$ID"; else git checkout -- "references/$ID"; fi ;;
  esac
done
[ ${#LANDED[@]} -gt 0 ] || { echo "nothing to land" >&2; exit 3; }

# One pass of the pipeline for everything that stayed.
node scripts/build-registry.mjs >/dev/null
node scripts/build-reference-quality.mjs | sed -n 2p
npm run -s build-reference-ast | tail -1
[ -f scripts/build-search-descriptors.mjs ] && node --env-file-if-exists="$REPO/web/.env.local" --no-warnings scripts/build-search-descriptors.mjs 2>&1 | grep -E "to \(re\)write|wrote|failed|have terms" || true
(cd .. && npm run -s query:references:data | tail -1)
node scripts/sync-catalog.mjs 2>&1 | grep -E "fingerprints\]|count\] targets|FAIL|AssertionError|Tests " || true
npm run -s evidence:ledger | tail -1
npm run -s build-reference-ast | tail -1
cd .. && node scripts/gen-llms-full.cjs | tail -1 && node scripts/check-counts.mjs | tail -1
echo "landed: ${LANDED[*]}"
echo "next: fix the motion ratchet if it moved (it drops by one per re-verified legacy reference), rerun sync-catalog, review, commit"
