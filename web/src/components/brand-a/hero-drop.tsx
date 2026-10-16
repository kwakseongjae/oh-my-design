import type { CSSProperties } from "react";
import drop from "@/data/hero-drop.json";
import heroCaps from "@/data/hero-caps.json";
import { LOCALE_SWITCH_KEY, type SiteLocale } from "@/lib/i18n/site-locales";

/**
 * Round 9 — the 2D drop that hands off to 3D (owner decision (b), 2026-10-16).
 *
 * Arriving from the language picker, the caps new to this locale start falling at first
 * paint instead of after the three.js scene boots. scripts/hero-posters.mjs renders, from the
 * live scene, a base poster (this set without its fresh caps) and one sprite sheet per poster
 * size holding each fresh cap and, separately, its floor shadow, matted over paper and black.
 * HeroDropLayer places them in poster space (landing.css .sq-k3-stage); dropScript (inline,
 * right after #k3) animates them with WAAPI at parse time — gravity fall, squash on impact, one
 * bounce, settle — timed like the 3D drop (keys3d/main.js GRAV/H0). Settled, base + sprites is
 * the full poster, which is what the 3D scene shows; hero-keys.tsx fades the canvas in only
 * after the drop has finished, then removes the layer. Reduced motion: no drop, settled poster.
 * No WebGL: the drop, then the full poster (the same picture).
 *
 * Server component: every number comes from data/hero-drop.json at build time.
 */

type Sprite = { x: number; y: number; w: number; h: number; sx: number };
type CapSprites = { id: string; cap: Sprite; sh: Sprite; f: number; b: number };
type Variant = { w: number; h: number; sheet: { src: string; w: number; h: number }; caps: CapSprites[] };
type DropSet = { fresh: string[]; d?: Variant; m?: Variant };

const SETS = (drop as { sets: Record<string, DropSet> }).sets;
export const capSetOf = (l: SiteLocale) => (l === "ja" || l === "zh-tw" ? l : "default");

const pct = (n: number) => `${+(n * 100).toFixed(4)}%`;

function spriteStyle(s: Sprite, v: Variant): CSSProperties {
  const { w: sw, h: sh } = v.sheet;
  return {
    left: pct(s.x / v.w),
    top: pct(s.y / v.h),
    width: pct(s.w / v.w),
    height: pct(s.h / v.h),
    backgroundSize: `${pct(sw / s.w)} ${pct(sh / s.h)}`,
    backgroundPosition: `${sw > s.w ? pct(s.sx / (sw - s.w)) : "0%"} 0%`,
  };
}

function Layer({ v, kind }: { v: Variant; kind: "d" | "m" }) {
  if (!v.caps.length) return null;
  return (
    <div className={`sq-k3-drop sq-k3-drop-${kind}`} data-sheet={v.sheet.src} style={{ "--ar": v.w / v.h, "--sheet": `url(${v.sheet.src})` } as CSSProperties}>
      <div className="sq-k3-stage">
        {v.caps.map((c) => (
          <span key={c.id} data-cap={c.id}>
            <i className="sq-k3-s" data-k="sh" style={spriteStyle(c.sh, v)} />
            <i className="sq-k3-s" data-k="cap" data-f={c.f} data-b={c.b} style={spriteStyle(c.cap, v)} />
          </span>
        ))}
      </div>
    </div>
  );
}

/** Sprite layers for this locale's fresh caps (inside #k3; hidden unless #k3[data-drop]). */
export function HeroDropLayer({ locale }: { locale: SiteLocale }) {
  const s = SETS[capSetOf(locale)];
  if (!s?.fresh.length) return null;
  return (
    <>
      {s.d ? <Layer v={s.d} kind="d" /> : null}
      {s.m ? <Layer v={s.m} kind="m" /> : null}
    </>
  );
}

/** ids on each set's keyboard, in heroCapsFor order (wide rows, then narrow) */
function idsBySet(): Record<string, string[]> {
  const sets = heroCaps.sets as Record<string, { wide: string[][]; narrow: string[][] }>;
  return Object.fromEntries(Object.entries(sets).map(([k, s]) => [k, [...new Set([...s.wide.flat(), ...s.narrow.flat()])]]));
}

/**
 * Inline, right after #k3 (pre-hydration). Arriving from the picker (sessionStorage note,
 * < 60 s, motion allowed): when the caps new here are exactly the ones the sprites were
 * rendered for, show the base poster and drop the sprites once their sheet has decoded
 * (1.5 s cap). Otherwise — or if the sheet never decodes — the r8 path: the previous
 * locale's poster until the 3D scene is live, and the 3D drop. window.__k3drop tells
 * hero-keys.tsx which happened (done resolves "done" | "skip" | "none").
 */
export function dropScript(locale: SiteLocale): string {
  const own = capSetOf(locale);
  const fresh = SETS[own]?.fresh ?? [];
  const cfg = JSON.stringify({ key: LOCALE_SWITCH_KEY, to: locale, own, ids: idsBySet(), fresh });
  return `(function(){try{var C=${cfg},s=JSON.parse(sessionStorage.getItem(C.key)||"null"),k=document.getElementById("k3");
if(!(s&&k&&s.to===C.to&&s.from&&s.from!==s.to&&Date.now()-s.t<60000)||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
var fs=(s.from==="ja"||s.from==="zh-tw")?s.from:"default",prev=C.ids[fs]||[],nu=C.ids[C.own].filter(function(x){return prev.indexOf(x)<0});
if(!nu.length)return;
var same=nu.length===C.fresh.length&&nu.every(function(x){return C.fresh.indexOf(x)>=0}),L=k.querySelector(matchMedia("(max-width:900px)").matches?".sq-k3-drop-m":".sq-k3-drop-d");
var legacy=function(){k.removeAttribute("data-drop");k.setAttribute("data-set",fs)};
if(!same){legacy();return}
var D=window.__k3drop={state:"wait"};D.done=new Promise(function(r){D.end=r});
if(!L){D.state="none";D.end("none");return}
k.setAttribute("data-drop","");
var fail=function(){if(D.state!=="wait")return;D.state="skip";legacy();D.end("skip")};
var t=setTimeout(fail,1500),img=new Image();img.src=L.getAttribute("data-sheet");
img.decode().then(function(){if(D.state!=="wait")return;clearTimeout(t);D.state="run";
var T=1000,a=[],e1="cubic-bezier(.33,0,.67,.33)",eo="cubic-bezier(.33,1,.68,1)";
[].forEach.call(L.querySelectorAll("[data-cap]"),function(g,i){var dl=40+70*i,c=g.querySelector('[data-k="cap"]'),h=g.querySelector('[data-k="sh"]'),F=+c.getAttribute("data-f"),B=+c.getAttribute("data-b");
a.push(c.animate([{offset:0,opacity:0,transform:"translateY(-"+F+"%) scale(1.3)",easing:"linear"},{offset:.04,opacity:1,transform:"translateY(-"+(F*.997)+"%) scale(1.299)",easing:e1},{offset:.524,opacity:1,transform:"translateY(0) scale(1,1)",easing:eo},{offset:.58,opacity:1,transform:"translateY(0) scale(1.1,.84)",easing:eo},{offset:.7,opacity:1,transform:"translateY(-"+B+"%) scale(.98,1.03)",easing:e1},{offset:.826,opacity:1,transform:"translateY(0) scale(1,1)",easing:eo},{offset:.88,opacity:1,transform:"translateY(0) scale(1.03,.95)",easing:"ease-in-out"},{offset:1,opacity:1,transform:"none"}],{duration:T,delay:dl,fill:"both"}));
a.push(h.animate([{offset:0,opacity:0,transform:"scale(1.6)",easing:e1},{offset:.524,opacity:1,transform:"scale(1)",easing:eo},{offset:.7,opacity:.85,transform:"scale(1.05)",easing:e1},{offset:.826,opacity:1,transform:"scale(1)"},{offset:1,opacity:1,transform:"none"}],{duration:T,delay:dl,fill:"both"}))});
if(!a.length){D.state="none";k.removeAttribute("data-drop");D.end("none");return}
a[0].ready.then(function(){setTimeout(function(){performance.mark("k3:sprite-move")},40)});
Promise.all(a.map(function(x){return x.finished})).then(function(){D.state="done";D.end("done")})},fail)}catch(e){}})();`;
}
