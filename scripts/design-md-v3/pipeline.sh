#!/usr/bin/env bash
# Rebuild every generated catalog artifact from web/references, for the v3 batch guards.
# After a batch, `git diff --stat -- web/src/data data` must show only intended changes.
set -euo pipefail
cd "$(dirname "$0")/../.."
(cd web && node scripts/build-registry.mjs >/dev/null)
(cd web && node scripts/build-reference-quality.mjs >/dev/null)
node scripts/build-reference-quality-data.mjs >/dev/null
(cd web && node scripts/build-evidence-ledger.mjs >/dev/null)
(cd web && node --no-warnings --experimental-strip-types scripts/build-reference-ast.ts >/dev/null)
echo "pipeline rebuilt"
