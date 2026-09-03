#!/bin/zsh
cd /Users/kwakseongjae/Desktop/projects/oh-my-design
A=test-v2/content-runs/aphrodite/higgsgen; S=/private/tmp/claude-501/-Users-kwakseongjae-Desktop-projects-oh-my-design/cb2e257f-aca4-4114-89ed-93c73e067127/scratchpad; t0=$(date +%s)
until grep -qE 'FETCH_DONE|Error' $A/batch-p2.log 2>/dev/null; do [ $(( $(date +%s) - t0 )) -gt 5400 ] && { echo "P2_TIMEOUT"; exit 1; }; sleep 30; done
grep -q FETCH_DONE $A/batch-p2.log || { echo "P2_ABORT"; grep Error $A/batch-p2.log | head -2; exit 1; }
cp $A/batch-p2/images/*.png $A/assets/; echo "[$(date +%H:%M:%S)] assets=$(ls $A/assets/*.png | wc -l | tr -d ' ')"
cd test-v2/tools
echo "═══ render ═══"; node render-integrity.mjs ../content-runs/aphrodite/higgsgen/render.html 2>&1 | grep -E '^(PASS|FAIL)|✗' | head -5
echo "═══ contrast ═══"; node text-contrast.mjs ../content-runs/aphrodite/higgsgen/render.html 2>&1 | grep -E 'FAIL|PASS' | head -6
echo "═══ landing ═══"; node landing-integrity.mjs ../content-runs/aphrodite/higgsgen/render.html 2>&1 | grep -E 'FAIL|render.html' | head -8
cd /Users/kwakseongjae/Desktop/projects/oh-my-design
node -e '
const { chromiumRuntime } = await import("/Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2/tools/lib/browser.mjs");
const { chromium, launchOptions } = chromiumRuntime(); const b = await chromium.launch({ headless: true, ...launchOptions });
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
await p.goto("file:///Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2/content-runs/aphrodite/higgsgen/render.html", { waitUntil: "load" }); await p.waitForTimeout(1500);
const S=process.argv[1]; const H = await p.evaluate(() => document.body.scrollHeight);
for (const [name, f] of [["stage2",0.30],["compare2",0.46]]) { await p.evaluate((y) => window.scrollTo(0, y), Math.round(H*f)); await p.waitForTimeout(900); await p.screenshot({ path: `${S}/hg-${name}.png` }); }
await b.close(); console.log("shots ok");' $S
echo "[$(date +%H:%M:%S)] AFTER_P2_DONE"
