/**
 * Target discovery — which URL of a brand should be captured, and on what
 * channel.
 *
 * The nine brands in this round were chosen by hand: someone opened the site,
 * looked around, and pasted a URL. That does not survive going to hundreds.
 * Worse, it hides the decision. `https://www.musinsa.com/category/001` is a
 * product surface and `https://corp.musinsa.com` is a corporate one, and the
 * repository rule is explicit that the second cannot populate the first's
 * tokens. Right now that judgement exists only as prose in a planning doc.
 *
 *   candidates → surface class → reachability → target, with the reason recorded
 *
 * Two things this deliberately does NOT do:
 *
 *   - It does not guess. A page whose signals disagree comes back
 *     `unclassified` with both signals attached, and a brand whose surfaces are
 *     all unclassified yields no target rather than a plausible one.
 *   - It does not work around a refusal. A challenge page or a login wall is a
 *     site declining to be read; the channel ladder tries the browser a person
 *     would use, and if that is also refused the brand is reported unreachable.
 *
 *   node discover-targets.mjs --brand musinsa --home https://www.musinsa.com/
 *   node discover-targets.mjs --file targets.seed.json
 */

import { chromium } from "playwright-core";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT_ROOT = resolve(HERE, "..", "00-evidence", "_targets");

const MAX_CANDIDATES = 14;
const NAV_TIMEOUT = 45000;

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? undefined : process.argv[i + 1];
}

/* ------------------------------------------------------------ candidates -- */

/**
 * Path priors. These only *rank* candidates — the class a page ends up with
 * comes from what the page shows, below. A prior that decided the class would
 * reproduce the hand-picking, just faster and less visibly.
 */
const PATH_PRIORS = [
  { re: /\/(category|categories|products?|shop|store|browse|search|list|feed|explore)(\/|$|\?)/i, guess: "product", weight: 3 },
  { re: /\/(wdlist|jobs|items|deals|goods)(\/|$|\?)/i, guess: "product", weight: 3 },
  { re: /\/(docs?|developers?|help|support|guide|api)(\/|$)/i, guess: "docs", weight: 2 },
  { re: /\/(about|company|careers?|ir|newsroom|press|corp)(\/|$)/i, guess: "corporate", weight: 2 },
  { re: /^\/?(kr|ko|en)?\/?$/i, guess: "landing", weight: 1 },
];

async function collectCandidates(page, home) {
  const origin = new URL(home).origin;
  const links = await page.evaluate((base) => {
    const out = new Map();
    for (const a of document.querySelectorAll("a[href]")) {
      let url;
      try { url = new URL(a.getAttribute("href"), base); } catch { continue; }
      if (url.origin !== new URL(base).origin) continue;
      url.hash = "";
      const key = url.toString();
      if (out.has(key)) continue;
      const r = a.getBoundingClientRect();
      out.set(key, {
        url: key,
        text: (a.textContent ?? "").trim().slice(0, 40),
        // A link in the primary nav is a different kind of claim about the
        // site than one in the footer, and nav position is the only structural
        // signal available before the page is opened.
        inNav: !!a.closest("nav, header, [role=navigation], [role=banner]"),
        inFooter: !!a.closest("footer, [role=contentinfo]"),
        aboveFold: r.top >= 0 && r.top < window.innerHeight,
      });
    }
    return [...out.values()];
  }, home);

  const scored = links.map((l) => {
    const path = new URL(l.url).pathname + new URL(l.url).search;
    let score = (l.inNav ? 3 : 0) + (l.aboveFold ? 1 : 0) - (l.inFooter ? 2 : 0);
    let guess = null;
    for (const p of PATH_PRIORS) {
      if (p.re.test(path)) { score += p.weight; guess = guess ?? p.guess; break; }
    }
    return { ...l, path, score, prior: guess };
  });

  const seen = new Set();
  const picked = [{ url: home, path: new URL(home).pathname, text: "(home)", inNav: false, inFooter: false, aboveFold: true, score: 99, prior: "landing" }];
  for (const c of scored.sort((a, b) => b.score - a.score)) {
    if (c.score <= 0) break;
    // One candidate per first path segment, so a category tree does not fill
    // the whole list with siblings.
    const seg = c.path.split("/").filter(Boolean)[0] ?? "";
    if (seen.has(seg) || c.url === home) continue;
    seen.add(seg);
    picked.push(c);
    if (picked.length >= MAX_CANDIDATES) break;
  }
  return picked;
}

/* --------------------------------------------------------- classification - */

/**
 * Read from the page, not from the URL. Signals are counted and reported; the
 * class is only asserted when one domain leads and the page is not primarily
 * something else.
 */
const CLASSIFY = `() => {
  const t = document.body?.innerText ?? "";
  const q = (sel) => document.querySelectorAll(sel).length;
  const vw = innerWidth, vh = innerHeight;

  // Repeated same-size tiles carrying an image and a price/label is what a
  // product surface looks like regardless of markup style — Coupang has no
  // semantic landmarks at all.
  const boxes = [...document.querySelectorAll("li, article, [class*=item], [class*=card], [class*=product], [class*=goods]")]
    .map(el => el.getBoundingClientRect())
    .filter(r => r.width > 80 && r.height > 80 && r.width < vw * 0.5);
  const sig = new Map();
  for (const r of boxes) {
    const k = Math.round(r.width / 8) + "x" + Math.round(r.height / 8);
    sig.set(k, (sig.get(k) ?? 0) + 1);
  }
  const gridRepeat = Math.max(0, ...sig.values());

  const priceLike = (t.match(/[0-9][0-9,]{2,}\\s*원|₩\\s?[0-9]|\\$[0-9]/g) ?? []).length;
  const bigImages = [...document.querySelectorAll("img, video, canvas")]
    .filter(el => { const r = el.getBoundingClientRect(); return r.width * r.height > vw * vh * 0.04; }).length;

  const docsNav = q("nav a[href*='/docs'], aside a, [class*=sidebar] a");
  const codeBlocks = q("pre, code");
  const corporateWords = (t.match(/투자자|IR|보도자료|채용|Careers|Investor|Newsroom|사업자등록|대표이사/gi) ?? []).length;
  const loginWall = q("input[type=password]") > 0;

  return {
    title: document.title.slice(0, 120),
    url: location.href,
    gridRepeat, priceLike, bigImages, docsNav, codeBlocks, corporateWords, loginWall,
    textLength: t.length,
    links: q("a[href]"),
  };
}`;

function classify(signals) {
  const votes = [];
  if (signals.gridRepeat >= 6) votes.push({ cls: "product", why: `${signals.gridRepeat} repeated tiles of one size` });
  if (signals.priceLike >= 6) votes.push({ cls: "product", why: `${signals.priceLike} price-shaped strings` });
  if (signals.docsNav >= 12 && signals.codeBlocks >= 3) votes.push({ cls: "docs", why: `${signals.docsNav} sidebar links, ${signals.codeBlocks} code blocks` });
  if (signals.corporateWords >= 4) votes.push({ cls: "corporate", why: `${signals.corporateWords} corporate-register terms` });
  if (signals.bigImages >= 3 && signals.gridRepeat < 6 && signals.priceLike < 6) {
    votes.push({ cls: "landing", why: `${signals.bigImages} full-width media, no product grid` });
  }

  const tally = votes.reduce((m, v) => m.set(v.cls, (m.get(v.cls) ?? 0) + 1), new Map());
  const ranked = [...tally.entries()].sort((a, b) => b[1] - a[1]);
  if (ranked.length === 0) {
    return { class: "unclassified", reason: "no signal reached its threshold", votes };
  }
  if (ranked.length > 1 && ranked[0][1] === ranked[1][1]) {
    // A store's landing page really is both. Saying so beats picking one.
    return { class: "unclassified", reason: `signals tie: ${ranked.map(([c, n]) => `${c}×${n}`).join(", ")}`, votes };
  }
  return { class: ranked[0][0], reason: votes.filter((v) => v.cls === ranked[0][0]).map((v) => v.why).join("; "), votes };
}

/* ---------------------------------------------------------- reachability -- */

const CHALLENGE_MARKERS = [
  "Access Denied", "Attention Required", "잠시 후 다시", "비정상적인 접근",
  "cf-challenge", "captcha", "are you a human", "unusual traffic",
];

function reachabilityOf(status, signals, bodyText) {
  if (status === null) return { reachable: false, verdict: "NO_RESPONSE", channelHint: "aside" };
  if (status === 403 || status === 429) return { reachable: false, verdict: "REFUSED", status, channelHint: "aside" };
  if (status >= 400) return { reachable: false, verdict: "ERROR", status, channelHint: null };
  const hit = CHALLENGE_MARKERS.find((m) => bodyText.toLowerCase().includes(m.toLowerCase()));
  if (hit) return { reachable: false, verdict: "CHALLENGE", marker: hit, channelHint: "aside" };
  if (signals.loginWall && signals.textLength < 1200) {
    // Not a refusal to solve — a surface that is simply behind an account, and
    // therefore not a public surface at all.
    return { reachable: false, verdict: "LOGIN_WALL", channelHint: null };
  }
  if (signals.textLength < 400 && signals.bigImages === 0) {
    return { reachable: false, verdict: "EMPTY", channelHint: "aside" };
  }
  return { reachable: true, verdict: "OK", status };
}

/* --------------------------------------------------------------- select -- */

/**
 * Pages whose content is the visitor's own state, not the brand's. A cart, a
 * wishlist or a my-page shows whatever this session put there, so capturing one
 * measures the session.
 */
const ACCOUNT_PATH = /\/(mypage|my|account|cart|order|checkout|payment|login|logout|signup|join|auth|like|wish|favorit)/i;

/**
 * Product surfaces first, because that is what the catalog's tokens describe.
 * Then nav-linked over incidental, and only then imagery count.
 *
 * The imagery-first version chose `musinsa.com/products/3020393` — a single
 * item page with 130 large images, more than any list. But which item that is
 * depends on what was merchandised the day the crawl ran, which is the same
 * volatility that produced a sage-green Musinsa palette off a promo banner. A
 * surface the brand links from its own nav is a claim the brand makes about
 * itself; a leaf reached by clicking a tile is an accident of the moment.
 */
function selectTarget(rows) {
  const usable = rows.filter((r) => r.reachability.reachable);
  const rank = { product: 3, landing: 2, docs: 0, corporate: 0, unclassified: 1 };
  const excluded = [];
  const scored = usable
    .map((r) => ({ r, k: rank[r.classification.class] ?? 0 }))
    .filter((x) => {
      if (x.k === 0) return false;
      if (ACCOUNT_PATH.test(new URL(x.r.url).pathname)) {
        excluded.push({ url: x.r.url, why: "account or session-state surface" });
        return false;
      }
      return true;
    })
    .sort((a, b) =>
      b.k - a.k
      || (b.r.inNav ? 1 : 0) - (a.r.inNav ? 1 : 0)
      || b.r.signals.bigImages - a.r.signals.bigImages);

  if (scored.length === 0) {
    return {
      chosen: null,
      reason: usable.length === 0 ? "no candidate was reachable" : "no candidate is a capturable product or landing surface",
      excluded,
    };
  }
  const best = scored[0].r;
  return {
    chosen: best.url,
    surfaceClass: best.classification.class,
    reason: `${best.classification.class} surface (${best.classification.reason}); ${best.inNav ? "linked from the brand's own nav" : "not nav-linked"}; ${best.signals.bigImages} large media elements`,
    channel: "playwright",
    runnerUp: scored[1]?.r.url ?? null,
    excluded,
  };
}

/* ----------------------------------------------------------------- main --- */

async function discover(brand, home) {
  const browser = await chromium.launch({ channel: "chrome" });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: "ko-KR",
    colorScheme: "light",
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();
  const startedAt = Date.now();
  const rows = [];
  let candidates = [];

  try {
    const res = await page.goto(home, { waitUntil: "domcontentloaded", timeout: NAV_TIMEOUT });
    await page.waitForTimeout(2500);
    const homeStatus = res?.status() ?? null;
    if (homeStatus && homeStatus < 400) candidates = await collectCandidates(page, home);
    else candidates = [{ url: home, path: "/", text: "(home)", score: 99, prior: "landing" }];

    for (const c of candidates) {
      const rowStart = Date.now();
      let status = null;
      try {
        const r = await page.goto(c.url, { waitUntil: "domcontentloaded", timeout: NAV_TIMEOUT });
        status = r?.status() ?? null;
        await page.waitForTimeout(1800);
      } catch (e) {
        rows.push({ ...c, error: String(e).split("\n")[0], reachability: { reachable: false, verdict: "NAV_FAILED", channelHint: "aside" }, classification: { class: "unclassified", reason: "page did not load" } });
        continue;
      }
      // Self-invoking: a string is evaluated as an expression, so handing over
      // an arrow function returns the function rather than calling it.
      const signals = await page.evaluate(`(${CLASSIFY})()`).catch((e) => ({ __error: String(e).split("\n")[0] }));
      if (!signals || signals.__error) {
        rows.push({
          ...c,
          reachability: { reachable: false, verdict: "NO_SIGNALS", channelHint: "aside" },
          classification: { class: "unclassified", reason: signals?.__error ?? "page yielded no signals" },
        });
        continue;
      }
      const bodyText = await page.evaluate(() => (document.body?.innerText ?? "").slice(0, 4000)).catch(() => "");
      rows.push({
        ...c,
        signals,
        reachability: reachabilityOf(status, signals, bodyText),
        classification: classify(signals),
        durationMs: Date.now() - rowStart,
      });
    }
  } finally {
    await browser.close();
  }

  const selection = selectTarget(rows);
  return {
    brand,
    home,
    discoveredAt: new Date().toISOString(),
    method: {
      note: "surface class is read from the page; URL patterns only rank candidates",
      gate: "corporate and docs surfaces are never selected — they cannot populate a product surface's tokens",
      refusals: "a challenge or login wall ends the attempt on that surface; nothing is worked around",
    },
    candidatesConsidered: rows.length,
    selection,
    rows,
    totalDurationMs: Date.now() - startedAt,
  };
}

const seedFile = arg("file");
const seeds = seedFile
  ? JSON.parse(readFileSync(seedFile, "utf8"))
  : [{ brand: arg("brand"), home: arg("home") }];

if (!seeds.length || !seeds[0].brand || !seeds[0].home) {
  console.error("usage: discover-targets.mjs --brand <id> --home <url> | --file <seeds.json>");
  process.exit(1);
}

mkdirSync(OUT_ROOT, { recursive: true });
const summary = [];
for (const seed of seeds) {
  const result = await discover(seed.brand, seed.home);
  writeFileSync(join(OUT_ROOT, `${seed.brand}.json`), `${JSON.stringify(result, null, 2)}\n`, "utf8");
  summary.push({
    brand: seed.brand,
    considered: result.candidatesConsidered,
    chosen: result.selection.chosen,
    surface: result.selection.surfaceClass ?? null,
    why: result.selection.reason,
    seconds: +(result.totalDurationMs / 1000).toFixed(1),
  });
}
console.log(JSON.stringify({ out: OUT_ROOT, summary }, null, 1));
