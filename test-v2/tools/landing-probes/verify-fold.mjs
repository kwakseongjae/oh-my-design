import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const require = createRequire("/Users/kwakseongjae/Desktop/projects/oh-my-design/test-v2/tools/package.json");
const { chromium } = require("playwright-core");
const HERE = dirname(fileURLToPath(import.meta.url));
const targets = [
  ["affinity", "https://www.affinity.studio/", "en-US"],
  ["linear", "https://linear.app/", "en-US"],
  ["stripe", "https://stripe.com/", "en-US"],
  ["apple-iphone", "https://www.apple.com/kr/iphone/", "ko-KR"],
  ["toss", "https://toss.im/", "ko-KR"],
];
const only = process.argv[2];
for (const [id, url, locale] of targets) {
  if (only && id !== only) continue;
  const b = await chromium.launch({ channel: "chrome" });
  const c = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, locale, colorScheme: "light",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36" });
  const p = await c.newPage();
  await p.goto(url, { waitUntil: "load", timeout: 75000 });
  await p.waitForTimeout(6000);
  const y1 = await p.evaluate(() => Math.round(window.scrollY));
  await p.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await p.waitForTimeout(600);
  const y2 = await p.evaluate(() => Math.round(window.scrollY));
  await p.screenshot({ path: join(HERE, "captures", id, "fold-verified.png") });
  // negative space above the first headline, and hero geometry
  const geo = await p.evaluate(() => {
    const vh = innerHeight, vw = innerWidth;
    let big = null;
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.top > vh || r.bottom < 0 || r.width < 20 || r.height < 12) continue;
      const cs = getComputedStyle(el);
      if (cs.display === "none" || cs.visibility === "hidden" || +cs.opacity < 0.05) continue;
      if (![...el.childNodes].some((n) => n.nodeType === 3 && n.nodeValue.trim().length > 2)) continue;
      const fs = parseFloat(cs.fontSize) || 0;
      if (!big || fs > big.fontPx) big = { fontPx: +fs.toFixed(1), weight: cs.fontWeight, family: cs.fontFamily.split(",")[0].replace(/["']/g, ""),
        lineHeightPx: parseFloat(cs.lineHeight) || null, letterSpacing: cs.letterSpacing, textAlign: cs.textAlign,
        text: el.textContent.trim().slice(0, 70), top: Math.round(r.top), left: Math.round(r.left), w: Math.round(r.width), h: Math.round(r.height),
        topPctOfVh: +((r.top / vh) * 100).toFixed(1), leftPctOfVw: +((r.left / vw) * 100).toFixed(1), widthPctOfVw: +((r.width / vw) * 100).toFixed(1) };
    }
    let media = null;
    for (const el of document.querySelectorAll("img,video,canvas")) {
      const r = el.getBoundingClientRect();
      if (r.top > vh || r.bottom < 0) continue;
      const a = r.width * r.height;
      if (!media || a > media.areaPx) media = { tag: el.tagName.toLowerCase(), areaPx: Math.round(a), coveragePctOfViewport: +((a / (vw * vh)) * 100).toFixed(1),
        top: Math.round(r.top), left: Math.round(r.left), w: Math.round(r.width), h: Math.round(r.height),
        bleedsLeft: r.left < 1, bleedsRight: r.right > vw - 1, bleedsBottom: r.bottom > vh - 1, bleedsTop: r.top < 1,
        aspect: +(r.width / Math.max(1, r.height)).toFixed(2) };
    }
    // count how many discrete visual elements are in the fold
    let mediaInFold = 0;
    for (const el of document.querySelectorAll("img,video,canvas,svg")) {
      const r = el.getBoundingClientRect();
      if (r.top > vh || r.bottom < 0 || r.width < 24 || r.height < 24) continue;
      mediaInFold++;
    }
    return { big, media, mediaInFold, docHeight: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) };
  });
  console.log(JSON.stringify({ id, scrollYAfterLoad: y1, scrollYAfterReset: y2, ...geo }));
  await b.close();
}
