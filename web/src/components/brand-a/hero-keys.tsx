"use client";

import { useEffect, useRef, useState } from "react";
import type { LogoCap } from "@/lib/landing-a/types";

/**
 * Hero keyboard (round 4): jelly keycaps engraved with each company's genuine logo
 * SVG, rendered by three.js (keys3d/, ~140 KB gzip), imported only after `load` +
 * requestIdleCallback and only with WebGL. Until then — and for good without WebGL,
 * on import failure, or with ?k3=poster — the pre-rendered poster is the background.
 *
 * The canvas is decorative (aria-hidden); the same companies are a visually hidden
 * list of real links whose focus squishes the cap and draws a ring. Hover or focus
 * shows the company's name only; a click opens its item page.
 */
interface K3 {
  setCaps(caps: unknown[], narrow: boolean): void;
  setTheme(paper: string, dark: boolean): void;
  highlight(id: string): void;
  ringOf(id: string): { x: number; y: number } | null;
  capPx(): number;
  kick(): void;
  destroy(): void;
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
          const fixed = txt.replace(/<svg\b([^>]*)>/, (_m, attrs: string) => {
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

export function HeroKeys({ caps, label }: { caps: readonly LogoCap[]; label: string }) {
  const [narrow, setNarrow] = useState(false);
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
  const isDark = () => document.documentElement.classList.contains("dark");

  const rel = (el: Element, h: Element) => {
    const a = el.getBoundingClientRect(), b = h.getBoundingClientRect();
    return { l: a.left - b.left, t: a.top - b.top, r: a.right - b.left, b: a.bottom - b.top };
  };

  /* mobile: the canvas covers only the sheet (cap area), not the copy */
  const placeHost = () => {
    const h = host(), hx = document.getElementById("hero-x");
    if (!h || !hx || !sheet.current) return;
    if (narrowRef.current) {
      const s = rel(sheet.current, hx);
      h.style.top = `${s.t}px`;
      h.style.height = `${Math.max(220, s.b - s.t)}px`;
    } else {
      h.style.top = "";
      h.style.height = "";
    }
    h.classList.add("sq-placed");
  };

  /* where the caps may sit: inside the sheet, with air on every side */
  const zone = () => {
    const h = host()!;
    const W = h.clientWidth, s = rel(sheet.current!, h);
    if (narrowRef.current) return { x0: 24, x1: W - 24, y0: 18, y1: h.clientHeight - 18 };
    const padX = (s.r - s.l) * 0.04, padY = (s.b - s.t) * 0.06;
    return { x0: s.l + padX, x1: Math.min(W - 24, s.r + (W - s.r) * 0.5), y0: s.t + padY, y1: s.b - padY };
  };

  const capsFor = (list: readonly LogoCap[]) =>
    Promise.all(list.map((c) => loadLogo(c.src))).then((imgs) =>
      list
        .map((c, i) => ({ id: c.id, hex: c.hex, rv: c.rv, row: c.row, mrow: c.mrow, wide: c.wide ? 2.2 : 1, img: imgs[i] }))
        .filter((d) => d.img),
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
    narrowRef.current = narrow;
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

  // boot after load + idle
  useEffect(() => {
    const h = host();
    if (!h) return;
    let cancelled = false;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
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
        return;
      }
      state.current = "loading";
      placeHost();
      Promise.all([import("./keys3d/main.js"), capsFor(caps.filter((c) => (narrowRef.current ? c.mrow : c.row) >= 0))])
        .then(([m, list]) => {
          if (cancelled) return;
          capsRef.current = list;
          k3.current = m.mount(h, {
            caps: list,
            narrow: narrowRef.current,
            zone,
            paper: paper(),
            dark: isDark(),
            reduce: () => reduce.matches,
            onHover: (d: { id: string } | null) => showName(d ? d.id : null),
            onOpen: (d: { id: string }) => {
              window.location.href = `/design-systems/${encodeURIComponent(d.id)}`;
            },
          }) as K3;
          state.current = "ready";
          requestAnimationFrame(() => h.classList.add("sq-live"));
        })
        .catch((e) => {
          console.warn("keys3d: poster fallback", e);
          state.current = "fail";
        });
    };
    const go = () => ("requestIdleCallback" in window ? requestIdleCallback(boot, { timeout: 900 }) : setTimeout(boot, 200));
    if (document.readyState === "complete") go();
    else addEventListener("load", go, { once: true });

    // theme: next-themes toggles .dark on <html>
    const sync = () => {
      if (!k3.current) return;
      k3.current.setTheme(paper(), isDark());
      k3.current.setCaps(capsRef.current, narrowRef.current);
    };
    const mo = new MutationObserver(sync);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    const onReduce = () => k3.current?.kick();
    reduce.addEventListener("change", onReduce);
    const ro = "ResizeObserver" in window ? new ResizeObserver(placeHost) : null;
    const hx = document.getElementById("hero-x");
    if (ro && hx) ro.observe(hx);
    return () => {
      cancelled = true;
      removeEventListener("load", go);
      mo.disconnect();
      reduce.removeEventListener("change", onReduce);
      ro?.disconnect();
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
            <a
              href={`/design-systems/${encodeURIComponent(c.id)}`}
              lang={c.nLang}
              onFocus={() => {
                if (k3.current) {
                  k3.current.highlight(c.id);
                  setTimeout(() => {
                    showName(c.id);
                    ring.current?.classList.add("sq-on");
                  }, 60);
                }
              }}
              onBlur={() => showName(null)}
            >
              {c.n}
            </a>
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
