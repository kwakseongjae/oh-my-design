/**
 * probe-surface-ego.js — measure one brand surface through ego lite.
 *
 * Runs inside ego-browser's own Node runtime, not this repo's:
 *
 *   OMD_URL=https://example.com node -e "…"   ← NO. It will not work.
 *   OMD_URL=https://example.com sh web/scripts/probe-surface-ego.sh   ← use the wrapper
 *
 * ## Why this exists rather than another ad-hoc script
 *
 * `probe-component-states.mjs` (2026-09-17) already encodes the traps that matter and is
 * still the right tool for a *single component* on a public page. This one is for a *whole
 * surface* — the token dump plus every reachable control — and it exists because ego lite
 * can reach surfaces Playwright cannot: the sign-in walls that blocked pixiv, weibo, douyin,
 * asana and zhihu. Everything else about the method is the same, including the corrections
 * below.
 *
 * ## Three corrections over what I was doing on 2026-09-21/22
 *
 * 1. **Focus is measured first, before the mouse ever touches the control.** Measured
 *    2026-09-22: after a mouse press `.focus()` sets `:focus` but NOT `:focus-visible`, so
 *    no ring renders and the reading is a false negative — which is exactly what produced
 *    this session's "focus produced no change" entries. Chrome keys the heuristic off the
 *    last interaction modality, so the fix is ordering: focus, blur, then rest/hover/press.
 *    (Tabbing to the element also works in principle but does not reliably arrive — weibo
 *    needs more than 40 presses.)
 *
 *    **This reduces the false negatives; it does not eliminate them.** Measured on weibo
 *    through ego lite, `.focus()` set `:focus` and still not `:focus-visible`, where the
 *    same call on an isolated test page did set it — Chrome's modality heuristic depends on
 *    browser-session state an automated run does not fully control. So the harness records
 *    `focused` and `focusVisible` as two separate flags on every reading. A focus entry with
 *    `focusVisible: false` means *the ring did not render under automation*, which is NOT
 *    the same claim as *this control has no focus style*. Never write the second into a
 *    reference on the strength of the first.
 *
 * 2. **Declared and rendered values are both dumped, never just one.** krds authors
 *    `#0b50d0` where `getComputedStyle` returns `#0c51d1` — one per channel. Painting the
 *    computed value over a correct authored token makes a right token wrong. The caller
 *    compares; this script refuses to choose.
 *
 * 3. **Namespaces are reported, not merged.** A page's custom properties are a mix of the
 *    brand's, its framework's, and whatever third-party stylesheet is embedded — weibo
 *    carries GitHub's `--color-prettylights-*`. The dump is grouped so the caller can see
 *    whose tokens they are before promoting any.
 *
 * ## Privacy rule for authenticated surfaces (owner-approved 2026-09-22)
 *
 * ego lite runs in the owner's logged-in session. This script therefore extracts **tokens
 * and geometry only** — custom properties, computed styles, element boxes. It never reads
 * or returns page text, form values, account identifiers or media. `--allow-text` exists
 * for public marketing surfaces where the copy is the evidence; it is refused whenever the
 * page looks authenticated.
 */

/* ego's Node runtime does not inherit the caller's environment — measured 2026-09-22,
   process.env has 81 keys and none of them are ours. The wrapper therefore prepends a
   `globalThis.OMD_CFG = {...}` line to this file before piping it in. */
const CFG = globalThis.OMD_CFG || {};
const URL_ = CFG.url;
const LABEL = CFG.label || "surface";
const ALLOW_TEXT = CFG.allowText === true;
const SCHEME = CFG.scheme || "light";
const MAX_CONTROLS = Number(CFG.maxControls || 6);
if (!URL_) { console.error("no url — run through web/scripts/probe-surface-ego.sh"); throw new Error("no url"); }

const hx = (s) => {
  const t = String(s).match(/rgba\(\s*\d+,\s*\d+,\s*\d+,\s*0\s*\)/);
  if (t) return "transparent";
  const m = String(s).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  return m ? "#" + [1, 2, 3].map((i) => (+m[i]).toString(16).padStart(2, "0")).join("") : String(s);
};

const task = await taskSpace(`omd probe ${LABEL}`);
const page = task.page("p1");

/* ego lite inherits prefers-color-scheme from the OS, unlike a Playwright context where it
   is set explicitly. Measured 2026-09-22: with macOS in Dark, weibo returned #ea8011 where
   Playwright-light returned #ff8200 — not a colour-management difference, the brand's dark
   theme. Playwright forced to dark reproduced ego's numbers byte for byte, which is how the
   engines were shown equivalent. Forcing the scheme here makes a run reproducible regardless
   of the operator's OS setting, and `scheme: "dark"` is a deliberate second measurement
   rather than an accident. */
await page.cdp("Emulation.setEmulatedMedia", {
  features: [{ name: "prefers-color-scheme", value: SCHEME }],
});
await page.goto(URL_, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(6000);

/* An authenticated page is one that offers no sign-in affordance. Detected before any text
   is read, so the privacy rule can be applied to the page that is actually loaded. */
const looksAuthed = await page.evaluate(() => {
  const signIn = document.querySelector(
    'a[href*="login" i],a[href*="signin" i],button[class*="login" i],button[class*="signin" i]'
  );
  return !signIn;
});
const textAllowed = ALLOW_TEXT && !looksAuthed;

/* Suppress navigation so :active can be read in place — a press on a live anchor is a click,
   and the navigation destroys the execution context mid-read. */
await page.evaluate(() => {
  const stop = (e) => { e.preventDefault(); e.stopPropagation(); };
  for (const t of ["click", "auxclick", "submit"]) document.addEventListener(t, stop, true);
  window.addEventListener("beforeunload", stop, true);
  const kill = /cookie|consent|onetrust|privacy|gdpr|truste|cky-/i;
  for (const e of document.querySelectorAll("div,section,aside,dialog")) {
    const id = `${e.id} ${e.className}`;
    if (typeof id === "string" && kill.test(id)) e.style.setProperty("display", "none", "important");
  }
});

/* ── 1. declared custom properties, grouped by namespace ───────────────────── */
const tokens = await page.evaluate(() => {
  const cs = getComputedStyle(document.documentElement);
  const all = {};
  for (const n of Array.from(cs)) if (n.startsWith("--")) { const v = cs.getPropertyValue(n).trim(); if (v) all[n] = v; }
  const ns = {};
  for (const n of Object.keys(all)) {
    const m = n.match(/^--([a-zA-Z0-9]+)[-_]/);
    const k = m ? m[1] : "(bare)";
    (ns[k] = ns[k] || []).push(n);
  }
  return { all, ns: Object.fromEntries(Object.entries(ns).map(([k, v]) => [k, v.length])) };
});

/* ── 2. rendered frequency — what is actually painted ──────────────────────── */
const rendered = await page.evaluate(() => {
  const fg = {}, bg = {}, radii = {}, sizes = {}, fonts = {};
  for (const e of [...document.querySelectorAll("*")].slice(0, 2000)) {
    const c = getComputedStyle(e);
    if (c.color) fg[c.color] = (fg[c.color] || 0) + 1;
    if (c.backgroundColor && c.backgroundColor !== "rgba(0, 0, 0, 0)") bg[c.backgroundColor] = (bg[c.backgroundColor] || 0) + 1;
    if (c.borderRadius && c.borderRadius !== "0px") radii[c.borderRadius] = (radii[c.borderRadius] || 0) + 1;
    if (c.fontSize) sizes[c.fontSize] = (sizes[c.fontSize] || 0) + 1;
    if (c.fontFamily) { const f = c.fontFamily.split(",")[0].replace(/["']/g, ""); fonts[f] = (fonts[f] || 0) + 1; }
  }
  const top = (o, n = 10) => Object.entries(o).sort((a, x) => x[1] - a[1]).slice(0, n);
  const b = getComputedStyle(document.body);
  return { body: { font: b.fontFamily, size: b.fontSize, lh: b.lineHeight, color: b.color, bg: b.backgroundColor },
           fg: top(fg), bg: top(bg), radii: top(radii, 8), sizes: top(sizes), fonts: top(fonts, 5) };
});

/* ── 3. controls, each state read from a clean pointer state ───────────────── */
const SEL = `[...document.querySelectorAll("a,button,input,[role=button],[role=switch]")].filter(e=>{
  const r=e.getBoundingClientRect();
  return r.width>32&&r.width<520&&r.height>20&&r.height<90&&r.top>=0&&r.top<1600
    && getComputedStyle(e).visibility!=="hidden";})`;
const count = await page.evaluate(`(${SEL}).length`);
const read = async (i) => page.evaluate(`(() => { const e = (${SEL})[${i}]; if(!e) return null;
  const c = getComputedStyle(e); const r = e.getBoundingClientRect();
  return { tag:e.tagName.toLowerCase(), cls:String(e.className||"").slice(0,40),
    bg:c.backgroundColor, fg:c.color, border:c.borderWidth+" "+c.borderStyle+" "+c.borderColor,
    radius:c.borderRadius, pad:c.padding, h:Math.round(r.height)+"px", w:Math.round(r.width)+"px",
    size:c.fontSize, weight:c.fontWeight, font:c.fontFamily.split(",")[0].replace(/["']/g,""),
    outline:c.outline, shadow:c.boxShadow.slice(0,40), opacity:c.opacity, cursor:c.cursor,
    focusVisible: e.matches(":focus-visible"), focused: e.matches(":focus") }; })()`);
const park = async () => { await page.mouse.move(2, 2); await page.waitForTimeout(420); };
const boxOf = (i) => page.evaluate(`(() => { const e=(${SEL})[${i}]; if(!e) return null;
  const r=e.getBoundingClientRect(); return {x:r.x+r.width/2, y:r.y+r.height/2}; })()`);

const controls = [];
for (let i = 0; i < Math.min(count, MAX_CONTROLS); i++) {
  /* Focus FIRST, before this control has ever been touched by the mouse.
     Measured 2026-09-22: `.focus()` matches :focus-visible when no mouse interaction
     preceded it, and fails to when one did — Chrome keys the heuristic off the last
     interaction modality. Tabbing to the element would also work but does not reliably
     reach it (weibo needs more than 40 presses), so ordering is the reliable lever.
     `focusVisible` is recorded so a reader can tell a real ring from a bare :focus. */
  await page.evaluate(`(() => { const e = (${SEL})[${i}]; if (e && e.focus) e.focus(); })()`);
  await page.waitForTimeout(320);
  const focus = await read(i);

  await page.evaluate(() => { document.activeElement?.blur?.(); });
  await park();
  const rest = await read(i);
  if (!rest) continue;

  const box = await boxOf(i);
  if (box) { await page.mouse.move(box.x, box.y); await page.waitForTimeout(450); }
  const hover = await read(i);

  await park();
  if (box) { await page.mouse.move(box.x, box.y); await page.mouse.down(); await page.waitForTimeout(380); }
  const press = await read(i);
  if (box) await page.mouse.up();
  await park();

  const label = textAllowed
    ? await page.evaluate(`(() => { const e=(${SEL})[${i}]; return e ? (e.innerText||"").trim().slice(0,20) : ""; })()`)
    : `#${i}`;
  const diff = (x) => !x ? "(not read)" : Object.keys(rest).filter((k) => rest[k] !== x[k]).map((k) => `${k}:${hx(x[k])}`).join(" ") || "-";
  controls.push({ i, label, rest, hover, press, focus });
  console.log(`  [${i}] ${label.padEnd(18)} <${rest.tag}> bg=${hx(rest.bg).padEnd(11)} fg=${hx(rest.fg).padEnd(11)} r=${rest.radius.padEnd(8)} h=${rest.h}`);
  console.log(`      hover[${diff(hover)}]`);
  console.log(`      press[${diff(press)}]`);
  console.log(`      focus[${diff(focus)}]  :focus-visible=${focus ? focus.focusVisible : "?"}`);
}

const out = {
  measuredAt: new Date().toISOString(), url: URL_, label: LABEL, scheme: SCHEME,
  engine: "ego-lite", schemeForced: true, looksAuthenticated: looksAuthed, textCaptured: textAllowed,
  tokens, rendered, controlCount: count, controls,
};
console.log("\n" + "=".repeat(60));
console.log(JSON.stringify(out));
await task.finish({ keep: [] });
