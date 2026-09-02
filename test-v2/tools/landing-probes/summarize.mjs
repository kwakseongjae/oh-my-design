import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const HERE = dirname(fileURLToPath(import.meta.url));
const m = JSON.parse(readFileSync(join(HERE, "measurements.json"), "utf8"));
const only = process.argv[2];
for (const s of m.sites) {
  if (only && s.site !== only) continue;
  console.log("\n############ " + s.site + " " + s.url + "  captured " + s.capturedAt);
  console.log("http", s.httpStatus, "| errors", JSON.stringify(s.errors));
  console.log("docHeight", s.docHeightPx, "px =", s.viewportHeights, "vh | <section> tags", s.domSectionTags, "| derived sections", s.derivedSectionCount, "| container", s.containerPath);
  console.log("scroll steps", s.scrollStepCount, "| fullPage", s.fullPageCapture);
  console.log("sticky", s.stickyCount, JSON.stringify((s.sticky||[]).slice(0,4)));
  console.log("fixed", s.fixedCount, JSON.stringify((s.fixed||[]).slice(0,4)));
  console.log("snap", JSON.stringify(s.scrollSnap));
  console.log("reveals", JSON.stringify({...s.reveals, sample: undefined}));
  console.log("fold.text", JSON.stringify(s.fold?.biggestText));
  console.log("fold.media", JSON.stringify(s.fold?.biggestMedia));
  console.log("videos", JSON.stringify(s.videos));
  console.log("videoAfter", JSON.stringify(s.videoStateAfterJourney));
  console.log("motion", JSON.stringify(s.motion));
  console.log("typeScale(size/weight,count)", JSON.stringify(s.typeScale));
  console.log("prefersReducedMotionRule", s.prefersReducedMotionRule, "| docBg", s.docBg);
  console.table((s.sections||[]).map(x=>({
    i:x.index, tag:x.tag, top:x.top, h:x.height, vh:x.viewportHeights,
    txt:x.textRatio, asset:x.assetRatio, maxF:x.maxFontPx, w:x.maxFontWeight,
    img:x.imgCount, vid:x.videoCount, cv:x.canvasCount, svg:x.svgBig,
    body:x.medianBodyWidthPx, maxBody:x.maxBodyWidthPx, blockW:x.commonBlockWidth,
    bg:x.dominantRgb, tone:x.tone, L:x.relativeLuminance,
    sticky:x.stickyChild?x.stickyChild.pos+":"+x.stickyChild.h:"-", hscroll:x.horizontalScroller?"Y":"-",
  })));
}
