import { readFileSync } from "node:fs";
const m = JSON.parse(readFileSync(new URL("./measurements.json", import.meta.url), "utf8"));
const med = (a)=>{ if(!a.length) return null; const s=[...a].sort((x,y)=>x-y); return s[Math.floor(s.length/2)]; };
const rows=[];
for (const s of m.sites) {
  const secs = s.sections.filter(x=>x.height>=200);
  const nonHero = secs.slice(1);
  const vhs = secs.map(x=>x.viewportHeights);
  const txt = secs.filter(x=>x.textRatio>0).map(x=>x.textRatio);
  const ast = secs.filter(x=>x.assetRatio>0).map(x=>x.assetRatio);
  const sizes = s.typeScale.filter(([k,c])=>c>=3).map(([k])=>+k.split("/")[0]);
  const uniq=[...new Set(sizes)].sort((a,b)=>b-a);
  const ratios=[]; for(let i=0;i<uniq.length-1;i++) ratios.push(+(uniq[i]/uniq[i+1]).toFixed(2));
  const weights=[...new Set(s.typeScale.map(([k])=>+k.split("/")[1]))].sort((a,b)=>a-b);
  const totalDur = s.motion.topDurationsMs.reduce((a,[,c])=>a+c,0);
  const tone = secs.map(x=>x.tone==="dark"?"D":x.tone==="light"?"L":"m").join("");
  rows.push({
    site: s.site,
    docVH: s.viewportHeights,
    secN: secs.length,
    sectionTags: s.domSectionTags,
    heroVH: vhs[0],
    bodyVHmed: med(nonHero.map(x=>x.viewportHeights)),
    bodyVHmin: Math.min(...nonHero.map(x=>x.viewportHeights)),
    bodyVHmax: Math.max(...nonHero.map(x=>x.viewportHeights)),
    txtMed: +med(txt).toFixed(3), txtMin: +Math.min(...txt).toFixed(3), txtMax: +Math.max(...txt).toFixed(3),
    astMed: +med(ast).toFixed(2),
    imgTotal: secs.reduce((a,x)=>a+x.imgCount,0),
    vidTotal: secs.reduce((a,x)=>a+x.videoCount,0),
    canvasTotal: secs.reduce((a,x)=>a+x.canvasCount,0),
    displayPx: Math.max(...uniq), bodyPx: (()=>{ const e=s.typeScale.filter(([k,c])=>{const [sz]=k.split("/"); return +sz>=13&&+sz<=20;}).sort((a,b)=>b[1]-a[1])[0]; return e?+e[0].split("/")[0]:null; })(),
    scale: uniq.join(","), stepRatios: ratios.join(","), weights: weights.join(","),
    modeDurMs: s.motion.topDurationsMs[0][0], modeDurShare: +((s.motion.topDurationsMs[0][1]/totalDur)*100).toFixed(0),
    top3Dur: s.motion.topDurationsMs.slice(0,3).map(([d,c])=>`${d}ms×${c}`).join(" "),
    transformDecls: (s.motion.topProperties.find(p=>p[0]==="transform")||[,0])[1],
    opacityDecls: (s.motion.topProperties.find(p=>p[0]==="opacity")||[,0])[1],
    toneSeq: tone, darkSecs: tone.split("").filter(c=>c==="D").length,
    stickyN: s.stickyCount, hscroll: secs.filter(x=>x.horizontalScroller).length,
    snap: s.scrollSnap.firstDescendant ? s.scrollSnap.firstDescendant.value : "none",
    prm: s.prefersReducedMotionRule,
    colW: med(nonHero.map(x=>x.commonBlockWidth).filter(Boolean)),
    bodyMeasure: med(secs.map(x=>x.medianBodyWidthPx).filter(Boolean)),
    maxMeasure: Math.max(...secs.map(x=>x.maxBodyWidthPx||0)),
    revealsOnEnter: s.revealsOnEnter?.totals ? `${s.revealsOnEnter.totals.revealedOnEnter} (${s.revealsOnEnter.totals.revealsPerViewport}/vp, ${s.revealsOnEnter.totals.stepsWithAnyReveal}/${s.revealsOnEnter.totals.stepsProbed} steps)` : "pending",
  });
}
console.table(rows.map(r=>({site:r.site,docVH:r.docVH,secN:r.secN,secTags:r.sectionTags,heroVH:r.heroVH,bodyVH:`${r.bodyVHmin}-${r.bodyVHmax} (med ${r.bodyVHmed})`,txt:`${r.txtMin}-${r.txtMax} (med ${r.txtMed})`,astMed:r.astMed,img:r.imgTotal,vid:r.vidTotal,cv:r.canvasTotal})));
console.table(rows.map(r=>({site:r.site,display:r.displayPx,body:r.bodyPx,ratio:+(r.displayPx/r.bodyPx).toFixed(1),scale:r.scale,steps:r.stepRatios,weights:r.weights,colW:r.colW,measure:r.bodyMeasure,maxMeasure:r.maxMeasure})));
console.table(rows.map(r=>({site:r.site,modeDur:r.modeDurMs+"ms",share:r.modeDurShare+"%",top3:r.top3Dur,opacityDecl:r.opacityDecls,transformDecl:r.transformDecls,prm:r.prm,reveals:r.revealsOnEnter})));
console.table(rows.map(r=>({site:r.site,toneSeq:r.toneSeq,dark:r.darkSecs,sticky:r.stickyN,hscroll:r.hscroll,snap:r.snap})));
