#!/bin/zsh
set -e
here=${0:A:h}
cd $here
log() { echo "[$(date +%H:%M:%S)] $*"; }
log init
npx -y shadcn@latest init --name app --base base --preset maia --template next --no-monorepo -y > init.log 2>&1
cd app
log add-all
npx -y shadcn@latest add --all -y > ../add.log 2>&1
ls components/ui/*.tsx | wc -l
log skill
DISABLE_TELEMETRY=1 DO_NOT_TRACK=1 npx -y skills@latest add shadcn/ui --skill shadcn -a claude-code -y > ../skill.log 2>&1
ls -la .claude/skills .agents/skills 2>&1 | head
log design-md
curl -sf -o DESIGN.md https://oh-my-design.kr/toss/design.md
shasum -a 256 DESIGN.md
cp app/globals.css ../globals.before.css
cp -R components/ui ../ui.before
cp app/layout.tsx ../layout.before.tsx
log claude
fnm exec --using=24 -- claude --dangerously-skip-permissions -p "$(cat ../PROMPT.txt)" --model sonnet --max-turns 80 --output-format json > ../run.json 2> ../run.err
log done $?
