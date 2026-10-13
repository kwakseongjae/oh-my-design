#!/usr/bin/env bash
# One guarded v3 conversion batch (PHASE1.md §7). Leaves the batch uncommitted for review.
#   scripts/design-md-v3/run-batch.sh <workdir> <convert-tree args...>
#   e.g. scripts/design-md-v3/run-batch.sh /tmp/v3-b1 --tier verified
# Steps: baseline pipeline + guard snapshot + legacy tree archive at HEAD; convert; rebuild;
# guards; spec-10 check; web gate suites; item-page parity. Exits non-zero on the first failure.
set -euo pipefail
cd "$(dirname "$0")/../.."
work="$1"; shift
mkdir -p "$work/legacy"
git diff --quiet -- web/references design-md || { echo "web/references or design-md has uncommitted changes" >&2; exit 2; }
./scripts/design-md-v3/pipeline.sh
node scripts/design-md-v3/guards.mjs snapshot "$work" 2>/dev/null
git archive HEAD web/references | tar -x -C "$work/legacy"
git checkout -- data/reference-quality.json web/src/data 2>/dev/null || true
node scripts/design-md-v3/convert-tree.mjs "$@" | cut -c1-300
./scripts/design-md-v3/pipeline.sh
git checkout -- data/reference-quality.json 2>/dev/null || true
node scripts/design-md-v3/guards.mjs check "$work" 2>/dev/null
node scripts/design-md-v3/check.mjs
(cd web && npx vitest run __tests__/catalog-integrity.test.ts __tests__/reference-quality.test.ts __tests__/evidence-integrity.test.ts __tests__/reference-ast-fleet.test.ts 2>&1 | grep -E "Test Files|Tests ")
(cd web && V3_PARITY_LEGACY_ROOT="$work/legacy/web" npx vitest run __tests__/design-md-v3-parity.test.ts 2>&1 | grep -E "compared|accentMoved|Tests ")
echo "batch guarded OK"
