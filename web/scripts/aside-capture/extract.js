// In-page extraction for references whose sites block the headless collector (2026-10-01).
// Run inside the Aside browser REPL (main session only; never delegated — Aside carries the
// owner's logins). It mirrors captureElements() in capture-reference-evidence.ts: same
// selectors, same visibility filter, same style fields, same data-omd-capture indexing.
// Rows are positional to keep the REPL output small; assemble.mts names them.
//
// Usage in the REPL: paste this file's body, then
//   const t = await openTab(url); await new Promise(r => setTimeout(r, 4000));
//   caps.push(await t.evaluate(globalThis.omdExtract)); await closeTab(t);
//   console.log(JSON.stringify({ capturedAt: new Date().toISOString(), surfaces: caps }));
// The REPL saves an oversized result to a tool-results file; pass that file to assemble.mts.
globalThis.omdExtract = () => {
  const selectors = ["body", "h1", "h2", "h3", "h4", "p", "button", "a", "input", "select", "textarea", "article", "li", "[role]",
    '[class*="card" i]', '[class*="button" i]', '[class*="badge" i]', '[class*="chip" i]', '[class*="tab" i]'].join(",");
  const seen = new Set();
  const fonts = [];
  const fi = (f) => { let i = fonts.indexOf(f); if (i < 0) { fonts.push(f); i = fonts.length - 1; } return i; };
  const cands = [...document.querySelectorAll(selectors)].filter((el) => {
    if (seen.has(el)) return false;
    seen.add(el);
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    return r.width >= 12 && r.height >= 8 && s.display !== "none" && s.visibility !== "hidden" && Number(s.opacity) > 0;
  });
  // Same cap as the collector (500). A capped page is flagged so a primary is never chosen from a truncated sample
  // (ssg's home has 32k elements; a 250 cap hid its #ff5452 labels and cafe24's main CTA, 2026-10-01).
  const capped = cands.length > 500;
  cands.splice(500);
  let ii = 0;
  const rows = cands.map((el) => {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    const inter = el.matches('button,a,input,select,textarea,[role="button"],[role="tab"],[role="switch"],[tabindex]');
    const sel = inter ? `[data-omd-capture="${ii++}"]` : (el.id ? "#" + el.id : el.tagName.toLowerCase());
    let label = null;
    if (inter && /^rgb\(0, 0, 238\)|^rgb\(255, 0, 0\)|^rgb\(85, 26, 139\)/.test(s.color)) {
      const c = [...el.querySelectorAll("*")].find((x) => (x.textContent || "").trim().length && !x.children.length);
      if (c) label = getComputedStyle(c).color;
    }
    return [sel, el.tagName.toLowerCase(), el.getAttribute("role"), (el.textContent || "").trim().length,
      Math.round(r.width), Math.round(r.height), Math.round(r.top + scrollY),
      s.color, s.backgroundColor, s.borderColor, s.borderWidth, s.borderRadius, s.boxShadow === "none" ? "" : s.boxShadow,
      s.padding, fi(s.fontFamily), s.fontSize, s.fontWeight, s.lineHeight, s.letterSpacing,
      el.getAttribute("aria-selected"), (el.disabled === true || el.getAttribute("aria-disabled") === "true") ? 1 : 0,
      (typeof el.className === "string" ? el.className : "").slice(0, 40), label];
  });
  const loaded = [];
  document.fonts.forEach((f) => { if (f.status === "loaded") loaded.push(f.family.replace(/["']/g, "") + "|" + f.weight); });
  // A logged-in page is not a public surface: assemble.mts refuses it.
  return { url: location.href, fonts, rows, loaded: [...new Set(loaded)], loggedIn: /로그아웃|logout|sign out|마이페이지/i.test(document.body.innerText), capped };
};
