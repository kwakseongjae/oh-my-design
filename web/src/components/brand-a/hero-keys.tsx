"use client";

import { useEffect, useRef, useState } from "react";
import type { LogoCap } from "@/lib/landing-a/types";
import { LOCALE_SWITCH_KEY, type SiteLocale } from "@/lib/i18n/site-locales";
import heroCaps from "@/data/hero-caps.json";
import { pickCompany, useHeroPick } from "./hero-pick";

/* Arrival from the language picker (locale-switch.tsx SWITCH_KEY): the locale we came
   from, read once and cleared. Stale (> 60 s) or mismatched notes are ignored. */
const SWITCH_KEY = LOCALE_SWITCH_KEY;
function takeSwitch(locale: SiteLocale): SiteLocale | null {
  try {
    const raw = sessionStorage.getItem(SWITCH_KEY);
    sessionStorage.removeItem(SWITCH_KEY);
    const s = raw ? (JSON.parse(raw) as { from?: SiteLocale; to?: string; t?: number }) : null;
    return s && s.to === locale && s.from && s.from !== locale && Date.now() - (s.t ?? 0) < 60000 ? s.from : null;
  } catch {
    return null;
  }
}
/** ids on a locale's keyboard (data/hero-caps.json; en/ko share default) */
function idsOf(l: SiteLocale): Set<string> {
  const sets = heroCaps.sets as Record<string, { wide: string[][]; narrow: string[][] }>;
  const s = sets[l] ?? sets.default;
  return new Set([...s.wide.flat(), ...s.narrow.flat()]);
}
/* Round 9: the inline drop script (hero-drop.tsx) leaves this when it ran the 2D drop:
   done resolves "done" (sprites settled), "skip" (sheet never decoded: r8 path) or "none". */
type DropState = { state: string; done: Promise<string> };
const dropState = () => (window as unknown as { __k3drop?: DropState }).__k3drop ?? null;

/** posters are per cap set */
const setOf = (l: SiteLocale) => (l === "ja" || l === "zh-tw" ? l : "default");

/**
 * Hero keyboard (round 4): jelly keycaps engraved with each company's genuine logo
 * SVG, rendered by three.js (keys3d/, ~140 KB gzip), imported only after `load` +
 * requestIdleCallback and only with WebGL. Until then — and for good without WebGL,
 * on import failure, or with ?k3=poster — the pre-rendered poster is the background.
 *
 * The canvas is decorative (aria-hidden); the same companies are a visually hidden
 * list of buttons whose focus squishes the cap and draws a ring. Hover or focus
 * shows the company's name only.
 *
 * Round 12 (owner 2026-10-21): a key no longer opens the company's item page. A click
 * or tap on a cap, or its button, picks the company the hero chat shows (hero-pick.ts;
 * the chat carries the link to the item page), and the picked cap stays raised — the
 * hover pose, held (keys3d select()). The buttons say which one is pressed
 * (aria-pressed) and that they drive the chat (aria-controls). Picking needs no WebGL:
 * on the poster the buttons still switch the chat.
 */
interface K3 {
  ready?: Promise<void>;
  setCaps(caps: unknown[], narrow: boolean): void;
  setTheme(paper: string, dark: boolean): void;
  highlight(id: string): void;
  select(id: string | null): void;
  ringOf(id: string): { x: number; y: number } | null;
  capPx(): number;
  kick(): void;
  destroy(): void;
  drop(ids: string[], opt?: { delay?: number; stagger?: number }): number;
}

/* glyph-cap faces by legend language (the page's own loaded faces) */
const FAM: Record<string, string> = {
  ko: '"Wanted Sans Variable","Apple SD Gothic Neo","Noto Sans KR",sans-serif',
  ja: 'var(--font-noto-jp),"Noto Sans JP","Hiragino Sans","Hiragino Kaku Gothic ProN",sans-serif',
  "zh-Hant": 'var(--font-noto-tc),"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif',
  en: '"Wanted Sans Variable","Wanted Sans",sans-serif',
};

/* canvas fonts can't read CSS variables: resolve them against the document */
function resolveFamily(f: string) {
  return f
    .replace(/var\((--[\w-]+)\)/g, (_, v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim())
    .replace(/^,+|,(?=,)/g, "");
}

const imgCache = new Map<string, Promise<HTMLImageElement | null>>();

/** Load a logo SVG as an <img> with explicit pixel size (Safari/Firefox draw nothing for viewBox-only SVGs). */
function loadLogo(src: string): Promise<HTMLImageElement | null> {
  if (!imgCache.has(src)) {
    imgCache.set(
      src,
      fetch(src)
        .then((r) => r.text())
        .then((txt) => {
          const vb = txt.match(/viewBox="([^"]+)"/)?.[1].trim().split(/[\s,]+/).map(Number);
          const ratio = vb && vb[3] > 0 ? vb[2] / vb[3] : 1;
          const w = 2048, h = Math.round(w / ratio);
          // an Illustrator <switch> stub (<foreignObject requiredExtensions=…>, e.g. FamilyMart) draws
          // nothing but taints the canvas, which kills the colour calibration: drop the stub only
          const fixed = txt.replace(/<foreignObject\b[^>]*\/>|<foreignObject\b[\s\S]*?<\/foreignObject>/g, "").replace(/<svg\b([^>]*)>/, (_m, attrs: string) => {
            const rest = attrs.replace(/\s(width|height)="[^"]*"/g, "");
            return `<svg${rest} width="${w}" height="${h}">`;
          });
          const url = URL.createObjectURL(new Blob([fixed], { type: "image/svg+xml" }));
          const img = new Image();
          img.decoding = "async";
          img.src = url;
          return img.decode().then(() => img);
        })
        .catch(() => null),
    );
  }
  return imgCache.get(src)!;
}

export function HeroKeys({ caps, label, locale, initial }: { caps: readonly LogoCap[]; label: string; locale: SiteLocale; initial: string }) {
  const [narrow, setNarrow] = useState(false);
  const pick = useHeroPick();
  const current = pick.id ?? initial;
  const currentRef = useRef(current);
  const shown = caps.filter((c) => (narrow ? c.mrow : c.row) >= 0);
  const [name, setName] = useState<{ n: string; lang: string; x: number; y: number } | null>(null);
  const sheet = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLSpanElement>(null);
  const k3 = useRef<K3 | null>(null);
  const state = useRef<"idle" | "loading" | "ready" | "fail">("idle");
  const capsRef = useRef<unknown[]>([]);
  const narrowRef = useRef(false);

  const host = () => document.getElementById("k3");
  const paper = () => getComputedStyle(document.documentElement).getPropertyValue("--sq-paper").trim() || "#ffffff";

  const rel = (el: Element, h: Element) => {
    const a = el.getBoundingClientRect(), b = h.getBoundingClientRect();
    return { l: a.left - b.left, t: a.top - b.top, r: a.right - b.left, b: a.bottom - b.top };
  };

  /* Round 7: the host is placed by CSS at every width (phone: it shares the sheet's grid
     cell, landing.css), so nothing moves after first paint. Kept as a hook for the class. */
  const placeHost = () => {
    host()?.classList.add("sq-placed");
  };

  /* where the caps may sit: inside the sheet, with air on every side */
  const zone = () => {
    const h = host()!;
    const W = h.clientWidth, s = rel(sheet.current!, h);
    if (narrowRef.current) return { x0: 24, x1: W - 24, y0: 18, y1: h.clientHeight - 18 };
    const padX = (s.r - s.l) * 0.04, padY = (s.b - s.t) * 0.06;
    return { x0: s.l + padX, x1: Math.min(W - 24, s.r + (W - s.r) * 0.5), y0: s.t + padY, y1: s.b - padY };
  };

  /* logo caps load their SVG; glyph caps wait for their face (canvas can't fall back gracefully) */
  const capsFor = (list: readonly LogoCap[]) =>
    Promise.all(
      list.map((c) => {
        if (c.kind === "logo") return loadLogo(c.src);
        const fam = resolveFamily(FAM[c.gLang] ?? FAM.en);
        return document.fonts.load(`${c.w ?? 700} 100px ${fam}`, c.g).then(() => fam, () => fam);
      }),
    ).then((res) =>
      list
        .map((c, i) => {
          const base = { id: c.id, hex: c.hex, rv: c.rv, row: c.row, mrow: c.mrow, wide: c.wide ? 2.2 : 1 };
          if (c.kind === "logo") return { ...base, img: res[i] as HTMLImageElement | null };
          return { ...base, img: null, g: c.g, fam: res[i] as string, w: c.w ?? 700, on: c.on, glyph: true };
        })
        .filter((d) => d.img || "glyph" in d),
    );

  const showName = (id: string | null) => {
    const el = ring.current, h = host();
    if (!k3.current || !id || !h || !sheet.current) {
      el?.classList.remove("sq-on");
      setName(null);
      return;
    }
    const p = k3.current.ringOf(id);
    const c = caps.find((x) => x.id === id);
    if (!p || !c) return;
    const sh = rel(sheet.current, h), size = k3.current.capPx() * (c.wide ? 1.2 : 1.45);
    const x = p.x - sh.l, y = p.y - sh.t;
    if (el) el.style.cssText = `left:${x - (size * (c.wide ? 1.9 : 1)) / 2}px;top:${y - size / 2}px;width:${size * (c.wide ? 1.9 : 1)}px;height:${size}px`;
    setName({ n: c.n, lang: c.nLang, x, y: y - k3.current.capPx() * 0.72 });
  };

  // the chat's company stays raised on the keyboard (a build run for the posters keeps every cap at rest)
  useEffect(() => {
    currentRef.current = current;
    if (!/[?&]k3dbg=1/.test(location.search)) k3.current?.select(current);
  }, [current]);

  // breakpoint
  useEffect(() => {
    const mq = matchMedia("(max-width:900px)");
    const on = () => {
      narrowRef.current = mq.matches;
      setNarrow(mq.matches);
    };
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  // caps list → scene
  useEffect(() => {
    // round 9: narrowRef is the breakpoint effect's alone. Writing the `narrow` state here put it
    // back to false on a phone's first commit (state still false, matchMedia already true), and an
    // arrival boot at load in the same commit then laid the phone keyboard out as desktop rows
    placeHost();
    let live = true;
    capsFor(shown).then((list) => {
      if (!live) return;
      capsRef.current = list;
      k3.current?.setCaps(list, narrow);
    });
    return () => {
      live = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [narrow, caps]);

  // boot after load + idle (and, for a page prerendered from the language picker, after activation)
  useEffect(() => {
    const h = host();
    if (!h) return;
    let cancelled = false;
    let from: SiteLocale | null = null;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    // back to this locale's own poster (the inline swap showed the previous one)
    const ownPoster = () => h.setAttribute("data-set", setOf(locale));
    // after a 2D drop: the full poster once the sprites have settled (the same picture)
    const settle = () => {
      const D = dropState();
      const end = () => { h.removeAttribute("data-drop"); ownPoster(); };
      if (D) D.done.then(end); else end();
    };
    const boot = () => {
      if (cancelled || state.current !== "idle") return;
      let ok = false;
      try {
        const c = document.createElement("canvas");
        ok = !!(c.getContext("webgl2") || c.getContext("webgl"));
      } catch {
        ok = false;
      }
      if (!ok || /[?&]k3=poster/.test(location.search)) {
        state.current = "fail";
        settle();
        return;
      }
      state.current = "loading";
      performance.mark("k3:boot");
      placeHost();
      Promise.all([import("./keys3d/main.js"), capsFor(caps.filter((c) => (narrowRef.current ? c.mrow : c.row) >= 0))])
        .then(([m, list]) => {
          if (cancelled) return;
          performance.mark("k3:loaded");
          capsRef.current = list;
          k3.current = m.mount(h, {
            caps: list,
            narrow: narrowRef.current,
            zone,
            paper: paper(),
            dark: false,
            reduce: () => reduce.matches,
            onHover: (d: { id: string } | null) => showName(d ? d.id : null),
            onPick: (d: { id: string }) => pickCompany(d.id),
          }) as K3;
          if (!/[?&]k3dbg=1/.test(location.search)) k3.current.select(currentRef.current);
          state.current = "ready";
          performance.mark("k3:mounted");
          if (/[?&]k3dbg=1/.test(location.search)) (window as unknown as { __k3: K3 }).__k3 = k3.current; // scripts/hero-posters.mjs
          // fade the canvas in only once its shaders are compiled and its colours calibrated
          (k3.current.ready ?? Promise.resolve()).then(() => requestAnimationFrame(() => {
            if (cancelled) return;
            // round 9: arriving with a 2D drop, the canvas waits for the sprites to settle — then the
            // settled sprites, the full poster and the scene are one picture and the fade shows no jump
            const D = from ? dropState() : null;
            const reveal = (how?: string) => {
              if (cancelled) return;
              performance.mark("k3:live");
              h.classList.add("sq-live");
              // the poster stays under the (opaque) canvas; swap it back once the fade is done
              setTimeout(() => { h.removeAttribute("data-drop"); ownPoster(); }, 500);
              // no 2D drop ran (r8 path): only the caps new to this locale fall in, in 3D
              if (from && !reduce.matches && (!D || how === "skip")) {
                const prev = idsOf(from);
                const fresh = (list as { id: string }[]).map((d) => d.id).filter((id) => !prev.has(id));
                k3.current?.drop(fresh, { delay: 0.04, stagger: 0.07 });
              }
            };
            if (D) D.done.then(reveal); else reveal();
          }));
        })
        .catch((e) => {
          console.warn("keys3d: poster fallback", e);
          state.current = "fail";
          settle();
        });
    };
    // a beat after load, then idle: the page answers input first (the boot is ~300 ms of work);
    // the poster covers the wait
    const go = () => setTimeout(() => ("requestIdleCallback" in window ? requestIdleCallback(boot, { timeout: 1200 }) : boot()), 300);
    const start = () => {
      from = takeSwitch(locale);
      // prerendered page: the inline poster swap ran before the click; redo it on activation
      if (from && !reduce.matches && !dropState()) h.setAttribute("data-set", setOf(from));
      // round 8: arriving from the language picker, the new caps are what the person waits for —
      // boot at load (keys3d and the logos are in the HTTP cache from the page just left) without the
      // 300 ms beat and idle wait; not before load, where it competed with hydration on phones
      const next = from ? boot : go;
      if (document.readyState === "complete") next();
      else addEventListener("load", next, { once: true });
    };
    const prerendering = (document as Document & { prerendering?: boolean }).prerendering;
    if (prerendering) document.addEventListener("prerenderingchange", start, { once: true });
    else start();

    const onReduce = () => k3.current?.kick();
    reduce.addEventListener("change", onReduce);
    return () => {
      cancelled = true;
      removeEventListener("load", go);
      removeEventListener("load", boot);
      document.removeEventListener("prerenderingchange", start);
      reduce.removeEventListener("change", onReduce);
      k3.current?.destroy();
      k3.current = null;
      state.current = "idle";
      h.classList.remove("sq-live");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sq-sheet" ref={sheet}>
      <ul className="sq-kb-links" aria-label={label}>
        {shown.map((c) => (
          <li key={c.id}>
            <button
              type="button"
              aria-pressed={current === c.id}
              aria-controls="chat"
              lang={c.nLang}
              onClick={() => pickCompany(c.id)}
              onFocus={() => {
                if (k3.current) {
                  k3.current.highlight(c.id);
                  setTimeout(() => {
                    showName(c.id);
                    ring.current?.classList.add("sq-on");
                  }, 60);
                }
              }}
              onBlur={() => {
                k3.current?.highlight("");
                showName(null);
              }}
            >
              {c.n}
            </button>
          </li>
        ))}
      </ul>
      <span className="sq-k3-ring" ref={ring} aria-hidden="true" />
      {name ? (
        <span className="sq-k3-name" aria-hidden="true" lang={name.lang} style={{ left: name.x, top: name.y }}>
          {name.n}
        </span>
      ) : null}
    </div>
  );
}
