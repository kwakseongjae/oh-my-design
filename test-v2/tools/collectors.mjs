/**
 * The in-page collectors, in one place, as source strings.
 *
 * Two channels run these — Playwright by default, Aside for sites that refuse
 * automated browsers — and for a while each carried its own copy. That cost a
 * bug twice: the guard that stops a transparent background being reported as
 * #000000 went into one channel and not the other, and the second channel kept
 * reporting black until a recapture surfaced it. Coupang still has no
 * collection funnel for the same reason.
 *
 * They are strings because the two channels take page code differently:
 * Playwright accepts a function or a source string, and Aside's REPL takes a
 * script it serialises to the browser. A string is the only form both consume,
 * so it is the form that can be shared.
 *
 * Everything here runs inside the page. No imports, no closures over module
 * scope — whatever a collector needs, it computes.
 */

/** Shared helpers, prepended to each collector body. */
const PRELUDE = `
  // A fully transparent background is not black. Reporting #000000 here gave
  // Coupang a page background it does not have.
  const hexOf = (rgb) => {
    const m = /rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*([\\d.]+))?/.exec(rgb || "");
    if (!m) return null;
    if (m[4] !== undefined && Number(m[4]) === 0) return null;
    return "#" + [m[1], m[2], m[3]].map((v) => Number(v).toString(16).padStart(2, "0")).join("");
  };
  const PROMO = /banner|promo|carousel|swiper|slide|event|campaign|advert|\\bad\\b/i;
  const inPromo = (node) => {
    for (let cur = node; cur && cur !== document.body; cur = cur.parentElement) {
      const id = (cur.id || "") + " " + (cur.className || "").toString();
      if (PROMO.test(id)) return true;
    }
    return false;
  };
`;

/**
 * The interface the brand owns: header, primary control, type scale. This is
 * the part that survives a campaign, which is why it is measured apart from
 * imagery.
 */
export const COLLECT_CHROME = `(() => {
${PRELUDE}
  const vh = window.innerHeight;

  // Geometry, not tag names. Coupang has a header — logo, search, category nav,
  // visible in any screenshot — and no <header>, no [role=banner], no <nav>.
  const headerOf = () => {
    const semantic = document.querySelector("header, [role=banner]");
    if (semantic) return { el: semantic, by: "semantic" };
    let best = null;
    for (const el of document.querySelectorAll("div, section, nav")) {
      const r = el.getBoundingClientRect();
      if (r.top > 8 || r.height < 40 || r.height > 220) continue;
      if (r.width < window.innerWidth * 0.8) continue;
      if (!el.querySelector("a, img, input")) continue;
      if (!best || r.height * r.width > best.r.height * best.r.width) best = { el, r };
    }
    return best ? { el: best.el, by: "geometry" } : null;
  };
  const headerHit = headerOf();
  const header = headerHit ? headerHit.el : null;

  // A primary control is not always a filled rectangle. Musinsa's category page
  // has 34 controls above the fold and none with an opaque background.
  const fillOf = (st) => {
    if (st.backgroundColor && st.backgroundColor !== "rgba(0, 0, 0, 0)" && st.backgroundColor !== "transparent") return "solid";
    const bw = parseFloat(st.borderTopWidth) || 0;
    const bc = st.borderTopColor || "";
    if (bw > 0 && bc && bc !== "rgba(0, 0, 0, 0)") return "outline";
    return "text";
  };
  const signature = new Map();
  const candidates = [];
  for (const el of document.querySelectorAll("button, a[class*=btn i], a[class*=button i], [role=button]")) {
    const r = el.getBoundingClientRect();
    if (r.top > vh || r.width < 60 || r.height < 28) continue;
    const st = getComputedStyle(el);
    const label = (el.innerText || "").trim();
    if (!label || inPromo(el)) continue;
    const fill = fillOf(st);
    if (fill === "text") continue; // a bare text link is navigation, not a control surface
    const key = fill + "|" + st.backgroundColor + "|" + st.borderTopColor + "|" + st.borderRadius + "|" + st.fontSize;
    signature.set(key, (signature.get(key) || 0) + 1);
    candidates.push({ el, s: st, r, key, label, fill });
  }
  // Reusable UI repeats; a campaign banner is a one-off.
  candidates.sort((a, b) => {
    const rep = (signature.get(b.key) || 0) - (signature.get(a.key) || 0);
    return rep !== 0 ? rep : b.r.width * b.r.height - a.r.width * a.r.height;
  });
  const primary = candidates[0] || null;

  const typeScale = [];
  for (const tag of ["h1", "h2", "h3", "p", "button"]) {
    const el = [...document.querySelectorAll(tag)].find((n) => {
      const r = n.getBoundingClientRect();
      return r.top < vh * 3 && r.height > 8 && (n.innerText || "").trim();
    });
    if (!el) continue;
    const st = getComputedStyle(el);
    typeScale.push({
      tag, fontPx: +parseFloat(st.fontSize).toFixed(1), weight: st.fontWeight,
      family: st.fontFamily.split(",")[0].replace(/["']/g, "").trim(),
      lineHeight: st.lineHeight, letterSpacing: st.letterSpacing, color: hexOf(st.color),
    });
  }

  return {
    // body and html are both transparent on plenty of sites: the canvas the
    // reader sees comes from the browser, not from CSS. The host measures it
    // off the screenshot instead.
    pageBackgroundComputed: hexOf(getComputedStyle(document.body).backgroundColor)
      || hexOf(getComputedStyle(document.documentElement).backgroundColor),
    bodyColor: hexOf(getComputedStyle(document.body).color),
    header: header ? {
      detectedBy: headerHit.by,
      background: hexOf(getComputedStyle(header).backgroundColor),
      heightPx: +header.getBoundingClientRect().height.toFixed(1),
    } : null,
    primaryButton: primary ? {
      fill: primary.fill,
      background: hexOf(primary.s.backgroundColor),
      borderColor: primary.fill === "outline" ? hexOf(primary.s.borderTopColor) : undefined,
      color: hexOf(primary.s.color),
      radiusPx: +parseFloat(primary.s.borderRadius).toFixed(1),
      fontPx: +parseFloat(primary.s.fontSize).toFixed(1),
      weight: primary.s.fontWeight,
      label: primary.label.slice(0, 40),
      repeats: signature.get(primary.key) || 1,
    } : null,
    typeScale,
    // An absence a reader can interpret. Bare null cannot distinguish "this
    // page has no primary control" from "the collector could not see one".
    notes: {
      buttonCandidatesAboveFold: candidates.length,
      headerDetectedBy: headerHit ? headerHit.by : "not found",
    },
  };
})`;

/**
 * Published imagery, counted at every stage. Apple, Figma and Toss each
 * returned nothing for a different reason and each needed its own
 * investigation; the funnel makes a zero yield name its own cause.
 */
export const COLLECT_IMAGERY = `((max) => {
${PRELUDE}
  const vw = window.innerWidth;
  const seen = new Set();
  const out = [];
  const funnel = { found: 0, sizeOk: 0, centreInFrame: 0, srcOk: 0 };

  // Not only <img>. Toss's hero is a video and a canvas.
  // Size relative to the viewport, not an absolute pixel floor. 160px is 11%
  // of a 1440 screen and 41% of a 390 one, so a fixed threshold silently
  // rejected every image on mobile — Musinsa's phone layout came back empty
  // with 100% lost at this exact stage.
  const frameArea = vw * window.innerHeight;
  for (const el of document.querySelectorAll("img, video, canvas")) {
    funnel.found++;
    const r = el.getBoundingClientRect();
    if (r.width < 96 || r.height < 96) continue;
    if ((r.width * r.height) / frameArea < 0.04) continue;
    funnel.sizeOk++;
    // A slide parked off-screen has its centre outside the frame; a full-bleed
    // hero wider than the viewport does not. A coverage test cannot tell them
    // apart, which is why Apple produced nothing at all.
    const centreX = r.left + r.width / 2;
    if (centreX < 0 || centreX > vw) continue;
    funnel.centreInFrame++;

    const kind = el.tagName.toLowerCase();
    // A <video> that plays from <source> children, or has not loaded yet,
    // reports neither currentSrc nor src. Requiring one dropped the element
    // whose whole point was that Toss's hero is not an <img>. Position stands
    // in as identity for anything without a URL.
    const positional = kind + "@" + Math.round(r.x) + "," + Math.round(r.y);
    const src = el.currentSrc || el.src || el.poster || (kind === "img" ? "" : positional);
    if (!src || seen.has(src)) continue;
    seen.add(src);
    funnel.srcOk++;

    // A tag written now is the one identity that survives the round trip.
    // src is swapped by srcset and document coordinates are moved by anything
    // that lazy-loads above; the attribute is moved by neither.
    const tag = "c" + funnel.srcOk;
    el.setAttribute("data-omd-cap", tag);

    out.push({
      src, kind, tag,
      alt: (el.alt || "").slice(0, 80),
      // Absolute document coordinates: each sample is scrolled to on its own
      // rather than hoping it lands inside one of a few fixed passes.
      docBox: { x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height },
      // Whether the element is in the first render at all. Without this, the
      // sampled count reads like an answer to "what does the first screen
      // show", and it is not: Naver's phone layout yields ten large images and
      // every one of them starts 1512px down the document.
      // (No backticks in here — this whole collector is a template literal.)
      aboveFold: r.y + window.scrollY < window.innerHeight && r.y + window.scrollY + r.height > 0,
      aspect: +(r.width / r.height).toFixed(3),
      areaShare: +((r.width * r.height) / (vw * window.innerHeight)).toFixed(4),
      intrinsic: { w: el.naturalWidth || el.videoWidth || el.width || null, h: el.naturalHeight || el.videoHeight || el.height || null },
    });
  }
  // The cap travels with the funnel. Without it the host cannot tell a site
  // that yielded 12 of 65 qualifying images from one that lost 53 of them.
  funnel.cap = max;
  return { funnel, candidates: out.sort((a, b) => b.areaShare - a.areaShare).slice(0, max) };
})`;

/**
 * Re-find a candidate after scrolling to it, by geometry rather than by src.
 * Responsive images swap currentSrc as the viewport moves, and matching on it
 * lost most of Figma's and Baemin's samples.
 */
export const REFIND_BOX = `((want) => {
  const vw = window.innerWidth, vh = window.innerHeight;
  const FLOOR = 96;
  const bigEnough = (n) => {
    const r = n.getBoundingClientRect();
    return r.width >= FLOOR && r.height >= FLOOR;
  };

  let el = want.tag ? document.querySelector('[data-omd-cap="' + want.tag + '"]') : null;
  let matchedBy = "tag";

  if (!el || !bigEnough(el)) {
    // A component that re-renders on scroll drops the attribute. Fall back to
    // shape and horizontal position — never to the document y, which is the
    // part that drifts. Baemin's phone layout lost eight of nine samples to
    // exactly that drift.
    matchedBy = "geometry";
    el = null;
    let best = Infinity;
    for (const n of document.querySelectorAll("img, video, canvas")) {
      const r = n.getBoundingClientRect();
      if (r.width < FLOOR || r.height < FLOOR) continue;
      if (r.bottom < 0 || r.top > vh) continue;
      const d = Math.abs(r.width - want.w) + Math.abs(r.height - want.h)
        + Math.abs(r.x + window.scrollX - want.x) * 0.5;
      if (d < best) { best = d; el = n; }
    }
    // Relative to the frame, because a tolerance that is generous at 1440 is
    // most of the screen at 390.
    if (!el || best > Math.max(160, vw * 0.35)) return null;
  }

  const r = el.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const visibleH = Math.min(r.bottom, vh) - Math.max(r.top, 0);
  const visibleW = Math.min(r.right, vw) - Math.max(r.left, 0);
  if (visibleH < FLOOR || visibleW < FLOOR) return null;
  return {
    matchedBy,
    pixelBox: { x: Math.max(0, r.left) * dpr, y: Math.max(0, r.top) * dpr, w: visibleW * dpr, h: visibleH * dpr },
    clipped: r.top < 0 || r.bottom > vh || r.left < 0 || r.right > vw,
  };
})`;

/**
 * Scroll a candidate into view by its tag, falling back to the document
 * coordinate recorded at enumeration. Scrolling to a stale y on a reflowing
 * mobile layout lands on the wrong part of the page, and everything after that
 * measures whatever happened to be there.
 */
export const SCROLL_TO = `((want) => {
  const el = want.tag ? document.querySelector('[data-omd-cap="' + want.tag + '"]') : null;
  if (el) {
    el.scrollIntoView({ block: "center", inline: "nearest" });
    return "tag";
  }
  window.scrollTo(0, Math.max(0, want.y + want.h / 2 - window.innerHeight / 2));
  return "docBox";
})`;

/** Video above the fold — attributes only; frames are sampled by the host. */
export const FIND_VIDEO = `(() => {
  const v = [...document.querySelectorAll("video")]
    .find((el) => { const r = el.getBoundingClientRect(); return r.top < window.innerHeight && r.width > 200; });
  if (!v) return { present: false, note: "no video above the fold at capture time" };
  const r = v.getBoundingClientRect();
  return {
    present: true, autoplay: v.autoplay, loop: v.loop, muted: v.muted,
    poster: v.poster || null,
    duration: Number.isFinite(v.duration) && v.duration > 0 ? +v.duration.toFixed(2) : null,
    aspect: +(r.width / r.height).toFixed(3),
    intrinsic: { w: v.videoWidth || null, h: v.videoHeight || null },
  };
})`;

/** Consent and newsletter modals sit between the capture and the page. */
export const DISMISS_SELECTORS = [
  '[aria-label*="close" i]', '[aria-label*="dismiss" i]', '[aria-label*="닫기"]',
  'button:has-text("Accept")', 'button:has-text("Accept all")', 'button:has-text("I agree")',
  'button:has-text("동의")', 'button:has-text("모두 동의")', 'button:has-text("확인")',
  'button:has-text("同意")', 'button:has-text("接受")', '[id*="cookie" i] button',
  '[class*="cookie" i] button', '[id*="consent" i] button', '[class*="consent" i] button',
];

/**
 * Ratio and floor. 90% alone let Baemin through while it lost eight of nine
 * candidates and finished with one sample — thin evidence is the risk whether
 * or not it arrived steeply.
 */
export function attritionOf(funnel) {
  const order = ["found", "sizeOk", "centreInFrame", "srcOk", "kept", "framed", "cropped", "analysed"];
  const reasons = [];
  let worst = null;
  for (let i = 1; i < order.length; i++) {
    const before = funnel[order[i - 1]];
    const after = funnel[order[i]];
    if (before === undefined || after === undefined || !before) continue;
    const lost = 1 - after / before;
    // found → sizeOk is not like the others. Every commerce page carries far
    // more icons, badges and grid thumbnails than large imagery, so Coupang
    // dropping 89% there is the filter working, not the measurement failing.
    // A high loss at any later stage means something broke.
    if (order[i] === "sizeOk") continue;
    // srcOk → kept is where the sample cap applies. Coupang qualifies 65 images
    // and keeps the 12 it was asked for; reading that as an 82% loss flagged a
    // capture that had done exactly what it was told.
    if (order[i] === "kept" && funnel.cap && after >= funnel.cap) continue;
    if (lost >= 0.8 && (!worst || lost > worst.lost)) {
      worst = { stage: `${order[i - 1]} → ${order[i]}`, before, after, lost: +lost.toFixed(3) };
    }
  }
  if (worst) reasons.push(`${Math.round(worst.lost * 100)}% dropped at ${worst.stage}`);
  // The count is the honest test of coverage — a funnel can look healthy in
  // ratios and still end with one sample.
  if (funnel.analysed < 4) {
    // A zero that names its own cause. Naver's desktop portal has 83 media
    // elements and none reaching the size floor, which is a fact about that
    // surface; a zero at framing would be a fact about the collector.
    const where = ["sizeOk", "centreInFrame", "srcOk", "kept", "framed", "cropped", "analysed"]
      .find((k) => (funnel[k] ?? 0) === 0);
    reasons.push(where === "sizeOk"
      ? `no media element reaches the size floor at this viewport (${funnel.found} found) — a property of the surface, not a collection failure`
      : `only ${funnel.analysed} samples analysed${where ? `; nothing survived ${where}` : ""}`);
  }
  const sizeLoss = funnel.found ? 1 - (funnel.sizeOk ?? 0) / funnel.found : 0;
  return reasons.length
    ? { suspect: true, reasons, ...(worst ?? {}), sizeFilterLoss: +sizeLoss.toFixed(3), note: "verify before using downstream" }
    : { suspect: false, sizeFilterLoss: +sizeLoss.toFixed(3) };
}
