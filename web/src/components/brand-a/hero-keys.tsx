"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { CapData } from "@/lib/landing-a/types";
import type { BrandCopy } from "./copy";
import { legendOn } from "./keycap";

/**
 * Hero keyboard: jelly keycaps rendered by three.js (keys3d/, ~140 KB gzip),
 * imported only after `load` + requestIdleCallback and only with WebGL. Until
 * then — and for good without WebGL, on import failure, or with ?k3=poster —
 * the pre-rendered poster is the background. The canvas is decorative
 * (aria-hidden); the same companies are a list of real links (visually
 * hidden) whose focus squishes the cap and draws a ring, and the readout card
 * names the company with its claimed values.
 */
type KbCopy = BrandCopy["kb"];
interface Labels { kb: KbCopy; open: string; meta: string; more: string }

const FAM: Record<string, string> = {
  ko: '"Wanted Sans Variable","Apple SD Gothic Neo","Noto Sans KR",sans-serif',
  ja: 'var(--font-noto-jp),"Noto Sans JP","Hiragino Sans","Hiragino Kaku Gothic ProN",sans-serif',
  "zh-Hant": 'var(--font-noto-tc),"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif',
  en: '"Wanted Sans Variable","Wanted Sans",sans-serif',
};
const fill = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? String(v[k]) : m));

/* canvas fonts can't read CSS variables: resolve them against the document */
function resolveFamily(f: string) {
  return f.replace(/var\((--[\w-]+)\)/g, (_, v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim() || getComputedStyle(document.body).getPropertyValue(v).trim() || "sans-serif");
}

interface K3 {
  setCaps(caps: unknown[], narrow: boolean): void;
  setTheme(paper: string, dark: boolean): void;
  highlight(id: string): void;
  ringOf(id: string): { x: number; y: number } | null;
  capPx(): number;
  kick(): void;
  destroy(): void;
}

export function HeroKeys({ caps, total, labels }: { caps: readonly CapData[]; total: number; labels: Labels }) {
  const [narrow, setNarrow] = useState(false);
  const shown = narrow ? caps.slice(0, 7) : caps;
  const [sel, setSel] = useState<CapData | null>(caps[0] ?? null);
  const sheet = useRef<HTMLDivElement>(null);
  const readout = useRef<HTMLAnchorElement>(null);
  const ring = useRef<HTMLSpanElement>(null);
  const k3 = useRef<K3 | null>(null);
  const state = useRef<"idle" | "loading" | "ready" | "fail">("idle");
  const capsRef = useRef<unknown[]>([]);
  const narrowRef = useRef(false);

  const host = () => document.getElementById("k3");
  const paper = () => getComputedStyle(document.documentElement).getPropertyValue("--sq-paper").trim() || "#ffffff";
  const isDark = () => document.documentElement.classList.contains("dark");

  const capsFor = (list: readonly CapData[]) =>
    list.map((d) => ({ ...d, fam: resolveFamily(FAM[d.gLang] ?? FAM.en), on: legendOn(d.hex) }));

  const rel = (el: Element, h: Element) => {
    const a = el.getBoundingClientRect(), b = h.getBoundingClientRect();
    return { l: a.left - b.left, t: a.top - b.top, r: a.right - b.left, b: a.bottom - b.top };
  };

  /* mobile: the canvas covers only the cap area of the sheet, not the copy */
  const placeHost = () => {
    const h = host(), hx = document.getElementById("hero-x");
    if (!h || !hx || !sheet.current || !readout.current) return;
    if (narrowRef.current) {
      const s = rel(sheet.current, hx), ro = rel(readout.current, hx);
      h.style.top = `${s.t}px`;
      h.style.height = `${Math.max(200, ro.t - s.t + 40)}px`;
    } else {
      h.style.top = "";
      h.style.height = "";
    }
    h.classList.add("sq-placed");
  };

  /* where the caps may sit: above the readout, right of the copy; full-bleed to the right on desktop */
  const zone = () => {
    const h = host()!;
    const W = h.clientWidth, s = rel(sheet.current!, h), ro = rel(readout.current!, h);
    if (narrowRef.current) return { x0: 14, x1: W - 14, y0: 10, y1: ro.t - 14 };
    return { x0: s.l + 10, x1: Math.min(W - 30, s.r + (W - s.r) * 0.7), y0: s.t + 4, y1: ro.t - 26 };
  };

  const fontsFor = (list: { w: number | null; fam: string; g: string }[]) => {
    const ps = list.map((d) => document.fonts.load(`${d.w ?? 700} 100px ${d.fam}`, d.g).catch(() => undefined));
    return Promise.race([Promise.all(ps), new Promise((r) => setTimeout(r, 2500))]);
  };

  const showRing = (id: string | null) => {
    const el = ring.current, h = host();
    if (!el) return;
    if (!k3.current || !id || !h || !sheet.current) {
      el.classList.remove("sq-on");
      return;
    }
    const p = k3.current.ringOf(id);
    if (!p) return;
    const sh = rel(sheet.current, h), size = k3.current.capPx() * 1.45;
    el.style.cssText = `left:${p.x - sh.l - size / 2}px;top:${p.y - sh.t - size / 2}px;width:${size}px;height:${size}px`;
    el.classList.add("sq-on");
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
    const list = capsFor(shown);
    capsRef.current = list;
    placeHost();
    if (k3.current) fontsFor(list).then(() => k3.current?.setCaps(list, narrow));
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
      import("./keys3d/main.js")
        .then((m) =>
          fontsFor(capsRef.current as { w: number | null; fam: string; g: string }[]).then(() => {
            if (cancelled) return;
            const dark = isDark();
            k3.current = m.mount(h, {
              caps: capsRef.current,
              narrow: narrowRef.current,
              zone,
              paper: paper(),
              dark,
              reduce: () => reduce.matches,
              more: (n: number) => ({
                id: "__more", more: true, wide: narrowRef.current ? 1.8 : 2.2, g: `+${total - n}`,
                hex: isDark() ? "#4a4f5a" : "#dfe2e8", on: isDark() ? "#f1f1ec" : "#15161a", fam: resolveFamily(FAM.en), w: 760, rv: 12,
              }),
              onHover: (d: CapData & { more?: boolean }) => {
                if (!d.more) setSel(caps.find((c) => c.id === d.id) ?? null);
              },
              onOpen: (d: CapData & { more?: boolean }) => {
                window.location.href = d.more ? "/design-systems" : `/design-systems/${encodeURIComponent(d.id)}`;
              },
            }) as K3;
            state.current = "ready";
            requestAnimationFrame(() => h.classList.add("sq-live"));
          }),
        )
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

  const d = sel ?? caps[0];
  const K = labels.kb;
  const capLine = d
    ? fill(K.cap, {
        r: d.rk != null ? fill(K.rad, { k: `radius.${d.rk}`, v: d.rv ?? "" }) : K.radNone,
        w: d.w != null ? `${d.w} (${d.wk})` : K.wNone,
      })
    : "";

  return (
    <div className="sq-sheet" ref={sheet}>
      <ul className="sq-kb-links" aria-label={K.label}>
        {shown.map((c) => (
          <li key={c.id}>
            <a
              href={`/design-systems/${encodeURIComponent(c.id)}`}
              aria-label={`${c.n} · ${c.role} ${c.hex}`}
              onFocus={() => {
                setSel(c);
                if (k3.current) {
                  k3.current.highlight(c.id);
                  setTimeout(() => showRing(c.id), 60);
                }
              }}
              onBlur={() => showRing(null)}
            >
              {c.n}
            </a>
          </li>
        ))}
      </ul>
      <span className="sq-k3-ring" ref={ring} aria-hidden="true" />
      {d ? (
        <a className="sq-readout" ref={readout} href={`/design-systems/${encodeURIComponent(d.id)}`} style={{ "--rc": d.hex ?? "transparent" } as CSSProperties}>
          <span className="sq-sw" aria-hidden="true" />
          <span className="sq-ro-txt">
            <span className="sq-nm">
              <span lang={d.nLang}>{d.n}</span>
              {d.alt ? (
                <small lang="en" style={{ fontWeight: 450, color: "var(--sq-ink-2)" }}>
                  {"  "}
                  {d.alt}
                </small>
              ) : null}
            </span>
            <span className="sq-meta">{fill(labels.meta, { role: d.role ?? "", hex: d.hex ?? "", date: d.chk ?? "", n: d.sf })}</span>
            <span className="sq-meta sq-cap-info">{capLine}</span>
          </span>
          <span className="sq-go">{labels.open}</span>
        </a>
      ) : null}
      <a className="sq-k3-more" href="/design-systems">
        {fill(labels.more, { n: total - shown.length })} →
      </a>
    </div>
  );
}
