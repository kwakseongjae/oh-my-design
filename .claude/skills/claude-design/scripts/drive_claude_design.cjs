#!/usr/bin/env node
/**
 * drive_claude_design.cjs — Playwright-based driver for claude.ai/design.
 *
 * WHY: claude-in-chrome's click/screenshot layer depends on OS foreground focus
 * (a chronic bug: "Cannot access a chrome-extension:// URL of different extension").
 * Playwright drives its OWN Chrome instance over CDP — no foreground dependency,
 * and a dedicated profile means no conflicting extensions.
 *
 * AUTH: uses a persistent profile dir, so the user logs into claude.ai ONCE
 * (headed) and every later run is fully automated.
 *
 * Run:  NODE_PATH=$(npm root -g) node drive_claude_design.cjs <config.json>
 * config.json: { projectName, fidelity, prompt, assets[], profileDir, outFile,
 *                shotDir, loginTimeoutMs, headless, questionAnswers[],
 *                awaitAnswersMs, answersFile, questionGraceMs, maxQuestionRounds,
 *                genTimeoutMs, questionsOut }
 *
 * claude.ai/design SOMETIMES interjects a "Quick questions" clarifying panel
 * before generating (multiple-choice chip groups + a Continue button), usually a
 * MINUTE+ in (after a collapsed "Reading files" phase) and in a "Questions" TAB
 * that's closed by default. The panel renders in several brittle layouts, so the
 * driver acts LAYOUT-INDEPENDENTLY: it watches for a visible Continue button and
 * opens the tab. How it answers:
 *   - AGENT-REASONED (best, when cfg.awaitAnswersMs is set): the driver dumps the
 *     questions to cfg.questionsOut and emits QUESTIONS_AWAITING, then polls
 *     cfg.answersFile. The agent running the skill reads the questions, picks the
 *     APPROPRIATE option per question from the codebase brief, and writes a JSON
 *     array of option-text substrings; the driver clicks exactly those.
 *   - AUTONOMOUS fallback (no agent / timeout): clicks EVERY "Decide for me"/escape
 *     chip (delegates each group to the context-aware design model).
 *   - cfg.questionAnswers pre-supplies picks: [{ pick: "<substr>" | ["a","b"] }].
 * Continue is clicked only AFTER answering, and RESULT_URL only after the design
 * settles — so it's never the parked questions page.
 *
 * Resolve markers on stdout (grep-friendly): [cd] LOGIN_NEEDED / LOGGED_IN /
 * CREATED / PROMPT_SET / ASSETS / SUBMITTED / QUESTIONS_DETECTED / QUESTIONS_AWAITING /
 * ANSWERS_RECEIVED / QUESTIONS_ANSWERED / CONTINUE_CLICKED / NO_QUESTIONS /
 * QUESTIONS_HANDLED / SETTLED / RESULT_URL=<url> / ERROR=<x> / FATAL=<x>.
 * Browser is left OPEN after success so the user can watch.
 */
const fs = require('fs');
const path = require('path');
const os = require('os');
const { chromium } = require('playwright');

function log(...a) { console.log('[cd]', ...a); }
const cfg = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const HOME = os.homedir();
const PROFILE = cfg.profileDir || path.join(HOME, '.claude/skills/claude-design/.runtime/chrome-profile');
const SHOTDIR = cfg.shotDir || '/tmp/cd-shots';
const OUT = cfg.outFile || '/tmp/cd-result.json';
fs.mkdirSync(PROFILE, { recursive: true });
fs.mkdirSync(SHOTDIR, { recursive: true });

let SHOT = 0;
async function shot(page, name) {
  try { const p = path.join(SHOTDIR, `${String(++SHOT).padStart(2, '0')}-${name}.png`); await page.screenshot({ path: p, fullPage: false }); log('SHOT=' + p); } catch (e) {}
}

// Attach reference files via the composer's "Add to chat" → "Attach file" menu,
// which triggers a native file picker (handled by Playwright's filechooser event).
async function attachViaAddToChat(page, files) {
  const add = page.locator('button[title="Add to chat"], [aria-label="Add to chat"]').first();
  if (!(await add.count().catch(() => 0))) { log('attach: no Add-to-chat button'); return 0; }
  async function onePass(list) {
    await add.click().catch(() => {});
    await page.waitForTimeout(500);
    const item = page.locator('button:has-text("Attach file"), [role=menuitem]:has-text("Attach file")').first();
    if (!(await item.count().catch(() => 0))) { await page.keyboard.press('Escape').catch(() => {}); return false; }
    const [chooser] = await Promise.all([
      page.waitForEvent('filechooser', { timeout: 8000 }).catch(() => null),
      item.click().catch(() => {}),
    ]);
    if (!chooser) { await page.keyboard.press('Escape').catch(() => {}); return false; }
    await chooser.setFiles(list).catch((e) => log('setFiles_warn=' + (e.message || '').split('\n')[0]));
    return true;
  }
  // try all-at-once, else fall back to one-by-one
  if (await onePass(files)) { await page.waitForTimeout(1800); return files.length; }
  let n = 0;
  for (const f of files) { if (await onePass([f])) { n++; await page.waitForTimeout(1400); } }
  return n;
}

// Visible page-text length — the one reliable activity/settle signal. During the
// file-reading phase, the clarifying panel, and design generation the main
// document text keeps changing; when it stops changing for a sustained window the
// run has settled. (claude.ai's Stop control has no stable selector, and the chat
// keeps "reading/thinking/code" wording around forever, so neither is usable.)
async function bodyLen(page) {
  return await page.evaluate(() => (document.body.innerText || '').length).catch(() => -1);
}

// Layout-independent answering — robust where structural grouping is not.
// claude.ai/design renders the panel in several layouts (with/without title,
// varied nesting) and the chips live in a "Questions" TAB that's CLOSED by default.
// So we don't parse groups; we just open the tab and click EVERY "Decide for me" /
// escape chip top-to-bottom (each delegates its group to Claude — the appropriate
// autonomous answer), then Continue. The reliable "a panel awaits" signal is a
// VISIBLE Continue button (it clears once answered); the chat notice "Claude has
// some questions" is permanent scrollback and must NOT drive the loop.

// One round-trip snapshot of panel-relevant state.
async function panelState(page) {
  return await page.evaluate(() => {
    const norm = s => (s || '').replace(/\s+/g, ' ').trim();
    const vis = el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 1 && r.height > 1 && s.visibility !== 'hidden' && s.display !== 'none'; };
    const B = [...document.querySelectorAll('button,[role=button]')].filter(vis);
    return {
      contVisible: B.some(b => /^continue$/i.test(norm(b.innerText))),
      decideCount: B.filter(b => /^decide for me$/i.test(norm(b.innerText))).length,
      chipCount: B.filter(b => { const t = norm(b.innerText); return t && !/^(share|send|design system|design files|questions|continue|present|sj)$/i.test(t) && !/^claude opus/i.test(t); }).length,
      generating: /generating (more )?questions|generating options|thinking…|writing questions/i.test(document.body.innerText || ''),
      notice: /claude has some questions|quick questions about|a few (quick )?questions/i.test(document.body.innerText || ''),
    };
  }).catch(() => ({ contVisible: false, decideCount: 0, notice: false }));
}

// Open the Questions tab ONLY if its chips aren't already visible (don't toggle an
// open tab shut).
async function ensureQuestionsOpen(page) {
  if ((await panelState(page)).contVisible) return true;
  const tab = page.getByText(/^Questions$/);
  if (await tab.count().catch(() => 0)) { await tab.first().click().catch(() => {}); await page.waitForTimeout(1500); return true; }
  return false;
}

// Dump the open panel's questions for the agent to reason over: the visible option
// chip labels (what the agent picks from) plus the readable panel text for context.
async function extractQuestions(page) {
  return await page.evaluate(() => {
    const norm = s => (s || '').replace(/\s+/g, ' ').trim();
    const vis = el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 1 && r.height > 1 && s.visibility !== 'hidden'; };
    const isGlobal = t => /^(share|send|design system|design files|questions|sj|new chat|copy|download|export|present|continue)$/i.test(t) || /^claude opus/i.test(t);
    const chips = [...document.querySelectorAll('button,[role=button]')].filter(vis).map(b => norm(b.innerText)).filter(t => t && !isGlobal(t));
    const cont = [...document.querySelectorAll('button,[role=button]')].filter(vis).find(b => /^continue$/i.test(norm(b.innerText)));
    let panelText = '';
    if (cont) { let x = cont; for (let i = 0; i < 8 && x.parentElement; i++) { x = x.parentElement; if ([...x.querySelectorAll('button,[role=button]')].filter(b => chips.includes(norm(b.innerText))).length >= Math.min(4, chips.length)) break; } panelText = norm(x.innerText).slice(0, 2000); }
    return { chips, panelText };
  }).catch(() => ({ chips: [], panelText: '' }));
}

// Apply answers to the open panel. `picks` = option-text substrings, clicked
// strictly top-to-bottom by absolute Y (so duplicate labels across groups resolve
// in order). If `sweepDecide`, also click every Decide/escape chip that ISN'T near
// an already-picked one (fills groups the agent didn't answer; won't override one
// it did). Returns chips clicked.
async function answerVisiblePanel(page, picks, sweepDecide) {
  let clicked = 0, lastAbsY = -1;
  const pickedYs = [];
  for (const sub of (picks || [])) {
    const c = await page.evaluate(({ sub, lastAbsY }) => {
      const norm = s => (s || '').replace(/\s+/g, ' ').trim();
      const vis = el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 1 && r.height > 1 && s.visibility !== 'hidden'; };
      const cands = [...document.querySelectorAll('button,[role=button]')].filter(vis)
        .filter(b => !/^continue$/i.test(norm(b.innerText)) && norm(b.innerText).toLowerCase().includes(String(sub).toLowerCase()))
        .map(el => ({ el, absY: el.getBoundingClientRect().top + window.scrollY })).sort((a, b) => a.absY - b.absY);
      const next = cands.find(c => c.absY > lastAbsY + 4) || cands[0];
      if (!next) return null;
      next.el.scrollIntoView({ block: 'center', behavior: 'instant' });
      const r = next.el.getBoundingClientRect();
      return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), absY: next.absY };
    }, { sub, lastAbsY }).catch(() => null);
    if (c) { await page.mouse.click(c.x, c.y).catch(() => {}); lastAbsY = c.absY; pickedYs.push(c.absY); clicked++; await page.waitForTimeout(200); }
  }
  if (sweepDecide) {
    lastAbsY = -1;
    for (let guard = 0; guard < 30; guard++) {
      const c = await page.evaluate(({ lastAbsY, pickedYs }) => {
        const norm = s => (s || '').replace(/\s+/g, ' ').trim();
        const vis = el => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 1 && r.height > 1 && s.visibility !== 'hidden'; };
        const isPick = b => { const t = norm(b.innerText); return /^decide for me$/i.test(t) || /^(don'?t need|no tweaks?|none|skip|no preference|keep exactly|keep it mostly)\b/i.test(t); };
        const cands = [...document.querySelectorAll('button,[role=button]')].filter(vis).filter(isPick)
          .map(el => ({ el, absY: el.getBoundingClientRect().top + window.scrollY })).sort((a, b) => a.absY - b.absY);
        const next = cands.find(c => c.absY > lastAbsY + 4 && !pickedYs.some(py => Math.abs(py - c.absY) < 110));
        if (!next) return null;
        next.el.scrollIntoView({ block: 'center', behavior: 'instant' });
        const r = next.el.getBoundingClientRect();
        return { x: Math.round(r.x + r.width / 2), y: Math.round(r.y + r.height / 2), absY: next.absY };
      }, { lastAbsY, pickedYs }).catch(() => null);
      if (!c) break;
      await page.mouse.click(c.x, c.y).catch(() => {});
      lastAbsY = c.absY; clicked++;
      await page.waitForTimeout(200);
    }
  }
  return clicked;
}

(async () => {
  const ctx = await chromium.launchPersistentContext(PROFILE, {
    channel: 'chrome',
    headless: !!cfg.headless,
    viewport: null,
    args: ['--disable-blink-features=AutomationControlled', '--start-maximized', '--no-first-run', '--no-default-browser-check'],
  });
  let page = ctx.pages()[0] || await ctx.newPage();
  page.setDefaultTimeout(45000);

  const PROJ = 'input[placeholder="Project name"]';

  log('goto claude.ai/design');
  await page.goto('https://claude.ai/design', { waitUntil: 'domcontentloaded' }).catch(() => {});
  await page.waitForTimeout(2500);
  await shot(page, 'initial');

  // ---- LOGIN WAIT: poll ALL pages for the create panel. CRITICAL: do NOT
  //      force-navigate during login — that resets the user's login flow.
  //      claude.ai auto-redirects to /design after login (returnTo). Crash-proof
  //      via setTimeout (page.waitForTimeout throws if the page closes). ----
  const deadline = Date.now() + (cfg.loginTimeoutMs || 300000);
  let ready = false, warned = false;
  while (Date.now() < deadline) {
    try {
      for (const pg of ctx.pages()) {
        const vis = await pg.locator(PROJ).first().isVisible({ timeout: 600 }).catch(() => false);
        if (vis) { page = pg; ready = true; break; }
      }
    } catch (e) { /* transient (a page is navigating/closing) — ignore and retry */ }
    if (ready) break;
    if (!warned) {
      log('LOGIN_NEEDED — Playwright 가 연 그 Chrome 창에서 claude.ai 에 로그인하세요. 그 창 그대로 두면(닫지 말 것) 자동으로 이어집니다. 한 번만 하면 프로필에 저장됩니다.');
      try { await ctx.pages()[0].screenshot({ path: path.join(SHOTDIR, '02-login.png') }); } catch {}
      warned = true;
    }
    await new Promise(r => setTimeout(r, 2500));
  }
  if (!ready) { log('ERROR=login_timeout url=' + page.url()); fs.writeFileSync(OUT, JSON.stringify({ error: 'login_timeout' })); return; }
  log('LOGGED_IN');
  await shot(page, 'panel');

  // ---- Fill project name ----
  await page.fill(PROJ, cfg.projectName || 'claude-design');
  log('name set:', cfg.projectName);

  // ---- Fidelity (e.g. "High fidelity") ----
  if (cfg.fidelity) {
    const fb = page.getByRole('button', { name: cfg.fidelity, exact: true });
    if (await fb.count().catch(() => 0)) { await fb.first().click().catch(() => {}); log('fidelity:', cfg.fidelity); }
    else { const alt = page.getByText(cfg.fidelity, { exact: true }); if (await alt.count().catch(() => 0)) { await alt.first().click().catch(() => {}); log('fidelity(text):', cfg.fidelity); } }
  }
  await shot(page, 'precreate');

  // ---- Create ----
  const createBtn = page.getByRole('button', { name: 'Create', exact: true });
  await createBtn.first().click();
  log('CREATED clicked');
  await page.waitForTimeout(3500);
  await shot(page, 'aftercreate');

  // ---- Find composer (editable prompt) on the project page ----
  let composer = null;
  const cd = Date.now() + 45000;
  const cand = ['div[contenteditable="true"]', 'textarea', '[role="textbox"]'];
  while (Date.now() < cd && !composer) {
    for (const sel of cand) {
      const loc = page.locator(sel).last();
      if (await loc.count().catch(() => 0) && await loc.isVisible().catch(() => false) && await loc.isEditable().catch(() => false)) { composer = loc; break; }
    }
    if (!composer) await page.waitForTimeout(1500);
  }
  if (!composer) { log('ERROR=composer_not_found url=' + page.url()); await shot(page, 'no-composer'); }
  else {
    await composer.click().catch(() => {});
    try { await composer.fill(cfg.prompt); } catch { await composer.type(cfg.prompt, { delay: 0 }); }
    log('PROMPT_SET');
    await shot(page, 'prompt');
  }

  // ---- Attach reference files (brand images + local source bundle) ----
  const attachList = (cfg.attachFiles || cfg.assets || []).filter(a => { try { return fs.existsSync(a); } catch { return false; } });
  if (attachList.length) {
    let n = 0;
    try { n = await attachViaAddToChat(page, attachList); } catch (e) { log('attach_err=' + (e.message || '').split('\n')[0]); }
    log('ASSETS=' + n + '/' + attachList.length);
    await page.waitForTimeout(2000);
    await shot(page, 'assets');
  } else { log('ASSETS=0 (no files)'); }

  // ---- Submit ----
  if (composer) {
    const send = page.getByRole('button', { name: /^(send|submit|generate)$/i });
    if (await send.count().catch(() => 0)) { await send.last().click().catch(() => {}); }
    else { await composer.press('Enter').catch(() => {}); }
    log('SUBMITTED');
    await page.waitForTimeout(3000);
    await shot(page, 'submitted');
  }

  // ---- Settle on the project URL (/design/p/<uuid>) ----
  let url = page.url();
  { const ud = Date.now() + 30000; while (Date.now() < ud) { if (/\/design\/p\//.test(page.url())) { url = page.url(); break; } await page.waitForTimeout(1500); } }

  // ---- Watch from SUBMITTED until the design settles. The clarifying panel often
  //      appears a MINUTE+ in (after a collapsed "Reading files" phase) and its chips
  //      live in a CLOSED "Questions" tab — so each iteration we (1) detect the chat
  //      notice "Claude has some questions", open that tab, and answer; else (2) track
  //      page-text stability to decide we've settled. A minWatch floor stops us settling
  //      during the quiet reading phase before the panel renders (the old premature bug).
  const hardDeadline = Date.now() + (cfg.genTimeoutMs || 480000);
  const minWatchUntil = Date.now() + (cfg.questionGraceMs || 165000); // ≥ time for a late panel to appear
  const maxRounds = cfg.maxQuestionRounds || 8;
  const submitLen = await bodyLen(page);
  let round = 0, lastLen = -1, stable = 0, peakLen = submitLen, everAnswered = false, noticeOpens = 0;
  while (Date.now() < hardDeadline) {
    let st = await panelState(page);
    // A panel is waiting if a Continue button is visible. Before the first answer,
    // the persistent chat notice can also bootstrap one tab-open (bounded so it
    // can't spin once answered).
    if (!st.contVisible && st.notice && !everAnswered && noticeOpens < 3) { await ensureQuestionsOpen(page); noticeOpens++; st = await panelState(page); }
    if (st.contVisible && round < maxRounds) {
      // Wait for the panel to FULLY render before answering — claude.ai streams the
      // questions in ("Generating questions…"), so we hold until that's gone AND the
      // chip count is stable, else we'd answer a half-loaded panel.
      let prev = -1, same = 0;
      for (let k = 0; k < 18; k++) { const s = await panelState(page); if (!s.contVisible) break; const settled = !s.generating && s.chipCount === prev && s.chipCount > 0; if (settled) { if (++same >= 2) break; } else { same = 0; prev = s.chipCount; } await page.waitForTimeout(1500); }
      await ensureQuestionsOpen(page);
      round++;
      log('QUESTIONS_DETECTED round=' + round + ' decideChips=' + (await panelState(page)).decideCount);

      // Gather answers. Priority: agent-reasoned (await) > caller pre-supplied >
      // autonomous "Decide for me". `picks` = option-text substrings.
      const qOut = cfg.questionsOut || path.join(SHOTDIR, 'questions.json');
      const answersFile = cfg.answersFile || qOut.replace(/\.json$/i, '') + '.answers.json';
      const extracted = await extractQuestions(page);
      let picks = (cfg.questionAnswers || []).flatMap(a => Array.isArray(a.pick) ? a.pick : (a.pick ? [a.pick] : (typeof a === 'string' ? [a] : [])));
      let sweepDecide = true;
      try { fs.writeFileSync(qOut, JSON.stringify({ round, answersFile, chips: extracted.chips, panelText: extracted.panelText }, null, 2)); } catch {}
      if (cfg.awaitAnswersMs) {
        // Hand the questions to the agent: it reads qOut, reasons over the brief,
        // and writes answersFile (a JSON array of chosen option-text substrings).
        try { if (fs.existsSync(answersFile)) fs.unlinkSync(answersFile); } catch {}
        log('QUESTIONS_AWAITING file=' + qOut + ' answers=' + answersFile + ' chips=' + extracted.chips.length);
        const dl = Date.now() + cfg.awaitAnswersMs;
        while (Date.now() < dl) {
          if (fs.existsSync(answersFile)) {
            // Apply the agent's picks; KEEP the Decide-for-me sweep on so any group
            // that streamed in after the agent answered still gets delegated (the
            // pickedY-skip prevents the sweep from overriding an answered group).
            try { const a = JSON.parse(fs.readFileSync(answersFile, 'utf8')); const got = Array.isArray(a) ? a : (a.picks || a.answers || []); if (got.length) { picks = got; log('ANSWERS_RECEIVED n=' + picks.length); } } catch (e) { log('answers_parse_warn=' + (e.message || '').split('\n')[0]); }
            break;
          }
          await page.waitForTimeout(2000);
        }
        if (sweepDecide && Date.now() >= dl) log('ANSWERS_TIMEOUT (falling back to Decide-for-me)');
      }
      const n = await answerVisiblePanel(page, picks, sweepDecide);
      log('QUESTIONS_ANSWERED=' + n + ' chips' + (sweepDecide ? (picks.length ? ' (picks+decide-sweep)' : ' (decide-sweep)') : ' (agent picks)'));
      await shot(page, 'answered' + round);
      const cont = page.getByRole('button', { name: /^continue$/i });
      if (await cont.count().catch(() => 0)) { await cont.first().click({ timeout: 8000 }).catch((e) => log('continue_warn=' + (e.message || '').split('\n')[0])); log('CONTINUE_CLICKED'); }
      everAnswered = true; lastLen = -1; stable = 0;
      await page.waitForTimeout(5000);
      continue;
    }
    // No panel waiting → track page-text stability to decide we've settled.
    const len = await bodyLen(page);
    if (len > peakLen) peakLen = len;
    if (len === lastLen) stable++; else { stable = 0; lastLen = len; }
    const activity = everAnswered || (peakLen - submitLen > 300);
    // Don't settle before minWatch (a late panel may still be coming); after that,
    // 6 stable samples (~30s unchanged) with real activity seen = settled.
    if (stable >= 6 && activity && Date.now() > minWatchUntil) break;
    await page.waitForTimeout(5000);
  }
  if (round === 0) log('NO_QUESTIONS'); else log('QUESTIONS_HANDLED rounds=' + round);
  log(Date.now() >= hardDeadline ? 'GENERATION_TIMEOUT (capturing URL anyway)' : 'SETTLED');

  // ---- Capture the real result URL ----
  if (/\/design\/p\//.test(page.url())) url = page.url();
  log('RESULT_URL=' + url);
  fs.writeFileSync(OUT, JSON.stringify({ url, questionRounds: round }, null, 2));
  await shot(page, 'final');

  log('DONE — 브라우저는 열어 둡니다(생성 진행을 볼 수 있게). 닫으려면 이 창을 직접 닫으세요.');
  // Intentionally do NOT close ctx: keep the browser open. Process stays alive.
})().catch(e => { console.log('[cd] FATAL=' + (e && e.message ? e.message.split('\n')[0] : e)); try { fs.writeFileSync(OUT, JSON.stringify({ error: String(e && e.message || e) })); } catch {} process.exit(1); });
