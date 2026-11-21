#!/bin/bash
# One arm of the /kana evaluation on Codex (docs/research/2026-11-13-kana-eval-plan.md).
#
#   scripts/lang/kana-eval/run-arm.sh A|B <out-dir> [runs=3] [parallel=4]
#
# Each run gets a fresh copy of the pinned create-next-app template in a workspace outside the repository, and an
# empty HOME and CODEX_HOME that hold only the Codex login file: `--ignore-user-config` alone still loads the skills
# in ~/.agents/skills (seen 2026-11-06 and 2026-11-12), and this machine has hangul and omd-feel there. Arm B copies
# the skill draft into the workspace and adds the one line the plan gives. The login copies are deleted at the end.
# Afterwards: scripts/lang/kana-eval/report.mjs <out-dir>
set -euo pipefail
ARM="$1"; OUT="$2"; RUNS="${3:-3}"; PAR="${4:-4}"
REPO="$(cd "$(dirname "$0")/../../.." && pwd)"
MAIN="$(git -C "$REPO" rev-parse --path-format=absolute --git-common-dir)/.."
TEMPLATE="${KANA_EVAL_TEMPLATE:-$MAIN/docs/research/2026-10-24-ux-writing/raw/template.tgz}"
MODEL="${KANA_EVAL_MODEL:-gpt-6.1-sol}"; EFFORT="${KANA_EVAL_EFFORT:-medium}"
case "$OUT" in "$REPO"/*|"$MAIN"/*) echo "the out dir must be outside the repository" >&2; exit 2;; esac
[ -f "$TEMPLATE" ] || { echo "no template at $TEMPLATE" >&2; exit 2; }
mkdir -p "$OUT/runs" "$OUT/logs" "$OUT/homes"
SKILL_LINE='この作業では kana スキルを使う：.agents/skills/kana/SKILL.md を読み、そのとおりに従う'
node -e '
const fs=require("fs"),c=require("crypto"),h=(f)=>c.createHash("sha256").update(fs.readFileSync(f)).digest("hex");
const [out,arm,tpl,repo,model,effort]=process.argv.slice(1);
fs.writeFileSync(out+"/meta-"+arm+".json",JSON.stringify({arm,startedAt:new Date().toISOString(),templateTgzSha256:h(tpl),checkerSha256:h(repo+"/scripts/lang/kana-check.mjs"),skillMdSha256:h(repo+"/docs/drafts/kana/SKILL.md"),skillCommit:require("child_process").execSync("git -C "+repo+" rev-parse HEAD").toString().trim(),codexVersion:require("child_process").execSync("codex --version").toString().trim(),model,effort,promptsReviewedByNativeReader:false},null,1)+"\n");
' "$OUT" "$ARM" "$TEMPLATE" "$REPO" "$MODEL" "$EFFORT"
run_one() {
  rid="$1"; p="${rid%%-*}"; ws="$OUT/runs/$rid"; home="$OUT/homes/$rid"
  rm -rf "$ws" "$home"; mkdir -p "$ws" "$home/.codex"
  tar -xzf "$TEMPLATE" -C "$ws"
  cp "$HOME_REAL/.codex/auth.json" "$home/.codex/auth.json"
  prompt="$(node -e 'process.stdout.write(JSON.parse(require("fs").readFileSync(process.argv[1],"utf8"))[process.argv[2]])' "$REPO/scripts/lang/kana-eval/prompts.json" "$p")"
  if [ "$ARM" = "B" ]; then
    mkdir -p "$ws/.agents/skills"; cp -R "$REPO/docs/drafts/kana" "$ws/.agents/skills/kana"
    prompt="$prompt
$SKILL_LINE"
  fi
  printf '%s' "$prompt" > "$OUT/logs/$rid.prompt.txt"
  start=$(date +%s)
  HOME="$home" CODEX_HOME="$home/.codex" gtimeout 1200 codex exec --cd "$ws" --skip-git-repo-check --sandbox workspace-write \
    -m "$MODEL" -c model_reasoning_effort="\"$EFFORT\"" -c approval_policy='"never"' --color never --json \
    -o "$OUT/logs/$rid.last.txt" - < "$OUT/logs/$rid.prompt.txt" > "$OUT/logs/$rid.jsonl" 2> "$OUT/logs/$rid.err" || true
  rm -rf "$home"
  echo "$rid secs=$(( $(date +%s) - start ))" >> "$OUT/logs/status-$ARM.txt"
}
export -f run_one; export OUT ARM REPO TEMPLATE MODEL EFFORT SKILL_LINE; export HOME_REAL="$HOME"
for p in p1 p2 p3; do for r in $(seq 1 "$RUNS"); do echo "$p-$ARM-r$r"; done; done | xargs -P "$PAR" -I{} bash -c 'run_one {}'
rmdir "$OUT/homes" 2>/dev/null || true
echo "ALL DONE" >> "$OUT/logs/status-$ARM.txt"
