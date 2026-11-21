#!/usr/bin/env bash
# Collection round 4: did an arm's workers open the answers? The max-effort references for these sites are on disk
# (web/references/<id>/ in the repository and the source waves under ~/.omd-workers). A run whose log names them
# is discarded: move it to void-<run> and rerun the site.
#   leak-check.sh <arm>        prints one line per run; exit 1 if any run opened them
ARM=$1; RUNS=${OMD_WORKER_RUNS:-$HOME/.omd-workers/runs}; bad=0
for d in "$RUNS"/rv-x9"$ARM"-*; do
  [ -f "$d/worker.log" ] || continue
  id=$(basename "$d"); id=${id#rv-x9"$ARM"-}; id=${id%-2*}
  # the run's own folder is exp9<arm>/<id>; every other wave folder, and the published reference, is off limits
  other=$(grep -oE "omd-workers/(exp[0-9]+[a-z]|new[0-9]+|reverify[0-9]+|wave[0-9a-z]+)(-void|-dryrun)?/$id/" "$d/worker.log" | grep -vc "omd-workers/exp9$ARM/$id/")
  ref=$(grep -cE "(web/references|design-md|packages/mcp/data/references)/$id([/\"' ]|$)" "$d/worker.log")
  if [ "$ref" -gt 0 ] || [ "$other" -gt 0 ]; then echo "LEAK $id published-reference:$ref other-folder:$other  ($d)"; bad=1; else echo "clean $id"; fi
done
exit $bad
