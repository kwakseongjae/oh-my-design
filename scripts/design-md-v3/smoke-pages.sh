#!/usr/bin/env bash
# Item-page smoke for converted references against a running site (default: next dev on :3399).
#   scripts/design-md-v3/smoke-pages.sh <base-url> id1 id2 ...
# Checks Home or the catalog index links to each item page, the item page renders with its h1 and #use block, and the
# raw twin /<id>/design.md serves the file byte for byte (plus its footer).
set -uo pipefail
base="$1"; shift
root="$(cd "$(dirname "$0")/../.." && pwd)"
home="$(curl -s "$base/")$(curl -s "$base/design-systems")"
fail=0
for id in "$@"; do
  page="$(curl -s -w '\n%{http_code}' "$base/design-systems/$id")"
  code="${page##*$'\n'}"
  raw="$(curl -s "$base/$id/design.md")"
  want="$(cat "$root/web/references/$id/DESIGN.md")"
  inhome=$(grep -c "/design-systems/$id\"" <<<"$home")
  h1=$(grep -c "<h1" <<<"$page")
  use=$(grep -c 'id="use"' <<<"$page")
  rawok=no; [ "${raw:0:${#want}}" = "$want" ] && rawok=yes  # the twin appends a source footer
  echo "$id http=$code home-link=$inhome h1=$h1 use-block=$use raw-v3=$rawok"
  { [ "$code" = 200 ] && [ "$h1" -ge 1 ] && [ "$use" -ge 1 ] && [ "$rawok" = yes ]; } || fail=1
done
exit $fail
