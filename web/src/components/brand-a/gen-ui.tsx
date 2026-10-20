"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties, type KeyboardEvent } from "react";
import { SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { GEN_UI_FIRST } from "@/lib/landing-a/picks";
import type { Prop } from "@/lib/landing-a/props";
import type { GenSpec } from "@/lib/landing-a/types";
import type { BrandCopy } from "./copy";
import type { JourneyCopy } from "./copy/r11-journey";
import { glyph, lines, methodKey, tips, type TipRow } from "./gen-render";
import type { Face } from "./journey/face";
import { STEPS, type Plan, type Step } from "./journey/model";
import { Screen, type ElAttrs } from "./journey/screens";
import { onColor } from "./keycap";
import "./gen-ui.css";

/**
 * DESIGN.md → screen (round 11, owner #8–#11). Choosing a company always re-runs the generation:
 * skeleton → the scan reads the excerpt step by step (colours, type, components, card) → each part
 * of the company's own sample screen snaps to its claimed values, with a typed agent log. There is no
 * instant swap and no auto-cycle (a perpetual regeneration would rewrite the excerpt under a reader);
 * the first view plays once, then only a choice or "replay" runs it. The resting state is always the
 * resolved screen; reduced motion = no stream, no skeleton.
 *
 * Phone (≤900px): the chips scroll sideways, and the DESIGN.md pane and the screen pane are two tabs
 * under the agent log (screen first), never a tall stack. A run never switches the tab.
 */
type T = BrandCopy["gen"];
export interface GenExtra {
  readonly plan: Plan;
  readonly face: Face;
  readonly prop: Prop | null;
}

const fill = (s: string, v: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? String(v[k]) : m));

const RM = "(prefers-reduced-motion: reduce)";
function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = matchMedia(RM);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => matchMedia(RM).matches,
    () => false,
  );
}
const NARROW = "(max-width: 900px)";
function useNarrow() {
  return useSyncExternalStore(
    (cb) => {
      const mq = matchMedia(NARROW);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => matchMedia(NARROW).matches,
    () => false,
  );
}

/** The log names each step by what the excerpt reads in it. */
function stepName(p: Plan, st: Step): string {
  const toks = Object.values(p.els).flatMap((e) => e.toks).filter((t) => t.step === st);
  if (!toks.length) return "";
  if (st === 0) return `colors (${new Set(toks.map((t) => t.k)).size})`;
  if (st === 1) return "typography";
  const m = toks[0].k.match(/^(components\.[^.]+)/);
  return m ? m[1] : "card";
}

export function GenUI({
  specs,
  extras,
  locale,
  t,
  j,
  first,
}: {
  specs: readonly GenSpec[];
  extras: Readonly<Record<string, GenExtra>>;
  locale: SiteLocale;
  t: T;
  j: JourneyCopy;
  first: string;
}) {
  const uid = useId();
  const ordered = useMemo(() => {
    const ccs = { KR: 0, TW: 1, JP: 2, US: 3 } as Record<string, number>;
    const rank = (cc: string) => (cc === first ? -1 : ccs[cc] ?? 4);
    return [...specs].filter((s) => extras[s.id]).sort((a, b) => rank(a.cc) - rank(b.cc));
  }, [specs, extras, first]);
  const by = useMemo(() => Object.fromEntries(ordered.map((s) => [s.id, s])), [ordered]);
  const firstId = (GEN_UI_FIRST as Record<string, string>)[first];
  const [cur, setCur] = useState(() => (by[firstId] ? firstId : ordered[0]?.id));
  const s = by[cur] ?? ordered[0];
  const x = extras[s.id];
  const reduce = useReducedMotion();
  const narrow = useNarrow();
  const [tab, setTab] = useState<"screen" | "code">("screen");

  const linesBy = useMemo(() => Object.fromEntries(ordered.map((o) => [o.id, lines(extras[o.id].plan)])), [ordered, extras]);
  const ls = linesBy[s.id];
  const tipRows = useMemo(() => tips(x.plan), [x]);

  // playback state
  const [playing, setPlaying] = useState(false);
  const [sk, setSk] = useState<Set<Step> | null>(null); // steps still skeleton (null = resolved)
  const [snap, setSnap] = useState<Step | null>(null);
  const [lit, setLit] = useState<Set<number>>(new Set());
  const [log, setLog] = useState<{ text: string; bold?: string; rest?: string }>({ text: "" });
  // provenance tooltip (element id → rows)
  const [tip, setTip] = useState<{ k: string; top: number; left: number } | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const typer = useRef<ReturnType<typeof setTimeout>[]>([]);
  const played = useRef(false);
  const root = useRef<HTMLDivElement>(null);
  const code = useRef<HTMLDivElement>(null);
  const scan = useRef<HTMLDivElement>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };
  const later = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms));
  const typeLog = useCallback(
    (full: string, speed: number, final?: { bold: string; rest: string }) => {
      typer.current.forEach(clearTimeout);
      typer.current = [];
      if (reduce) {
        setLog(final ? { text: "", bold: final.bold, rest: final.rest } : { text: full });
        return;
      }
      let i = 0;
      const step = () => {
        i += 2;
        if (i < full.length) {
          setLog({ text: full.slice(0, i) });
          typer.current.push(setTimeout(step, speed));
        } else setLog(final ? { text: "", bold: final.bold, rest: final.rest } : { text: full });
      };
      step();
    },
    [reduce],
  );
  const summary = useCallback((spec: GenSpec, n: number) => ({ bold: spec.name, rest: ` · ${fill(t.r5.sum, { n })}` }), [t.r5.sum]);

  // resting log
  useEffect(() => {
    setLog({ text: "", ...summary(s, ls.length) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const placeScan = (i: number) => {
    const li = liRefs.current[i];
    const sc = scan.current;
    const c = code.current;
    // the DESIGN.md pane is a hidden tab on a phone: nothing to place
    if (!li || !sc || !c || !c.offsetParent) return;
    sc.style.top = `${li.offsetTop + 10 - 4}px`;
    sc.style.height = `${li.offsetHeight + 8}px`;
    if (c.scrollHeight > c.clientHeight + 4) c.scrollTop = Math.max(0, li.offsetTop - 70);
  };

  /* face: a real or substitute face is confirmed loaded before it goes unlabelled (journey/face.ts);
     one that fails to load is labelled "not applied" like a face that was never there */
  const [faceOk, setFaceOk] = useState<Record<string, boolean>>({});
  const asked = useRef(new Set<string>());
  const loadFace = useCallback(
    (id: string) => {
      const f = extras[id]?.face;
      const el = root.current;
      if (!f || !el || asked.current.has(id) || (f.mode !== "real" && f.mode !== "substitute")) return;
      asked.current.add(id);
      if (!("fonts" in document)) return;
      let family = "";
      if (f.mode === "substitute") {
        if (!document.querySelector(`link[data-r11-face="${CSS.escape(f.href)}"]`)) {
          const l = document.createElement("link");
          l.rel = "stylesheet";
          l.href = f.href;
          l.dataset.r11Face = f.href;
          document.head.appendChild(l);
        }
        family = `"${f.sub}"`;
      } else {
        const v = f.css.match(/var\((--[\w-]+)\)/)?.[1];
        family = v ? getComputedStyle(el).getPropertyValue(v).trim() : "";
      }
      if (!family) {
        setFaceOk((p) => ({ ...p, [id]: false }));
        return;
      }
      const sample = JSON.stringify(j.sample[extras[id].plan.kind]);
      Promise.all([400, 700].map((w) => document.fonts.load(`${w} 16px ${family}`, sample)))
        .then((r) => setFaceOk((p) => ({ ...p, [id]: r.some((x) => x.length > 0) })))
        .catch(() => setFaceOk((p) => ({ ...p, [id]: false })));
    },
    [extras, j],
  );

  const run = useCallback(
    (id: string) => {
      const spec = by[id];
      const xp = extras[id];
      if (!spec || !xp) return;
      clear();
      played.current = true;
      setCur(id);
      setTip(null);
      loadFace(id);
      const L = linesBy[id];
      if (reduce) {
        setPlaying(false);
        setSk(null);
        setLit(new Set());
        typeLog("", 0, summary(spec, L.length));
        return;
      }
      setPlaying(true);
      setSk(new Set(STEPS));
      setLit(new Set());
      let logText = "Reading DESIGN.md…";
      typeLog(logText, 18);
      let tm = 700;
      for (const st of STEPS) {
        const name = stepName(xp.plan, st);
        const mine = L.map((l, i) => (l.s === st ? i : -1)).filter((i) => i >= 0);
        if (!name) {
          // a step this screen reads nothing in (LINE has no card) resolves at once
          later(() => {
            setSk((p) => {
              const n = new Set(p ?? []);
              n.delete(st);
              return n;
            });
          }, tm);
          continue;
        }
        later(() => {
          logText += ` → ${name}`;
          typeLog(logText, 10);
        }, tm);
        for (const i of mine) {
          later(() => {
            placeScan(i);
            setLit((p) => new Set(p).add(i));
          }, tm);
          tm += 160;
        }
        later(() => {
          setSk((p) => {
            const n = new Set(p ?? []);
            n.delete(st);
            return n;
          });
          setSnap(st);
          later(() => setSnap((v) => (v === st ? null : v)), 600);
          setLit((p) => {
            const n = new Set(p);
            mine.forEach((i) => n.delete(i));
            return n;
          });
        }, tm + 120);
        tm += 520;
      }
      later(() => {
        logText += " → building screen…";
        typeLog(logText, 10);
      }, tm);
      later(() => {
        setPlaying(false);
        setSk(null);
        typeLog("", 0, summary(spec, L.length));
      }, tm + 700);
    },
    [by, extras, linesBy, reduce, typeLog, summary, loadFace],
  );

  // first view → one run; nothing replays on its own after that
  useEffect(() => {
    const el = root.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting && !played.current) run(cur);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [run, cur]);

  useEffect(
    () => () => {
      clear();
      typer.current.forEach(clearTimeout);
    },
    [],
  );

  // provenance tooltip
  const out = useRef<HTMLDivElement>(null);
  const tipEl = useRef<HTMLDivElement>(null);
  const showTip = (el: HTMLElement) => {
    const k = el.dataset.k ?? "";
    const o = out.current?.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    if (!o || !tipRows[k]) return;
    setTip({ k, top: r.bottom - o.top + 8, left: Math.max(4, r.left - o.left) });
  };
  useEffect(() => {
    // keep the tip inside the panel once its size is known
    const e = tipEl.current, o = out.current;
    if (!tip || !e || !o) return;
    const ob = o.getBoundingClientRect();
    const maxLeft = ob.width - e.offsetWidth - 4;
    if (tip.left > maxLeft) e.style.left = `${Math.max(4, maxLeft)}px`;
    if (tip.top + e.offsetHeight > ob.height) e.style.top = `${Math.max(4, tip.top - e.offsetHeight - 60)}px`;
  }, [tip]);
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest?.(".sq-scr")) setTip(null);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const attrs = (id: string, base: string, step: Step): ElAttrs => ({
    className: `${base}${sk?.has(step) ? " sq-sk" : ""}${snap === step ? " sq-snap" : ""}`,
    "data-k": id,
    tabIndex: 0,
    onMouseEnter: (e) => e.target === e.currentTarget && showTip(e.currentTarget),
    onMouseLeave: () => setTip(null),
    onFocus: (e) => showTip(e.currentTarget),
    onBlur: () => setTip(null),
    onClick: (e) => {
      e.stopPropagation();
      if (tip?.k === id) setTip(null);
      else showTip(e.currentTarget);
    },
  });
  const el = (id: string, cls: string): ElAttrs | null => {
    const e = x.plan.els[id];
    return e ? attrs(id, `sq-e ${cls}`, e.step) : null;
  };
  const frame = x.plan.els.frame ? attrs("frame", "", 0) : null;

  const onPickKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = ordered[(i + (e.key === "ArrowRight" ? 1 : -1) + ordered.length) % ordered.length];
    const btn = e.currentTarget.parentElement?.querySelector(`[data-id="${CSS.escape(n.id)}"]`) as HTMLButtonElement | null;
    btn?.focus();
    run(n.id);
  };
  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "Home" && e.key !== "End") return;
    e.preventDefault();
    const next = tab === "screen" ? "code" : "screen";
    setTab(next);
    (e.currentTarget.parentElement?.querySelector(`[data-tab="${next}"]`) as HTMLButtonElement | null)?.focus();
  };

  // the small label under the screen: only when the screen is not set in the brand face
  const f = x.face;
  const ok = faceOk[s.id];
  const faceNote =
    f.mode === "none" || ((f.mode === "real" || f.mode === "substitute") && ok === false)
      ? j.face.none
      : f.mode === "uncovered"
        ? fill(j.face.uncovered, { f: f.family })
        : f.mode === "substitute"
          ? fill(j.face.sub, { s: f.sub })
          : null;
  const faceCss = (f.mode === "real" || f.mode === "substitute") && ok === false ? f.css.replace(/^.*?,\s*(var\(--sq-f-[\w-]+\))$/, "$1") : f.css;
  const omitted = x.plan.omitted;
  const p = x.prop;
  const tabProps = (k: "screen" | "code") => ({
    role: "tab" as const,
    id: `${uid}-t-${k}`,
    "data-tab": k,
    "aria-controls": `${uid}-p-${k}`,
    "aria-selected": tab === k,
    tabIndex: tab === k ? 0 : -1,
    onClick: () => setTab(k),
    onKeyDown: onTabKey,
  });
  const panelProps = (k: "screen" | "code") => (narrow ? { role: "tabpanel" as const, id: `${uid}-p-${k}`, "aria-labelledby": `${uid}-t-${k}` } : { id: `${uid}-p-${k}` });

  return (
    <div className={`sq-g5${playing ? " sq-playing sq-busy" : ""}`} data-tab={tab} ref={root}>
      <div className="sq-g5-pick-wrap">
        <div className="sq-g5-pick" role="radiogroup" aria-label={t.r5.pick}>
          {ordered.map((o, i) => {
            const g = glyph(o.name);
            const pri = o.primary?.v ?? o.btn?.bg ?? "#c9ccd3";
            return (
              <button
                key={o.id}
                type="button"
                role="radio"
                className="sq-g5-chip"
                data-id={o.id}
                aria-checked={o.id === s.id}
                tabIndex={o.id === s.id ? 0 : -1}
                onClick={() => run(o.id)}
                onKeyDown={(e) => onPickKey(e, i)}
              >
                {o.logo ? (
                  /* genuine logo (brand-svg.json) as delivered: flat, never recoloured, on a plain white tile with clear space */
                  <span className="sq-jk sq-jk-logo" aria-hidden="true">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={o.logo} alt="" width={20} height={20} loading="lazy" decoding="async" />
                  </span>
                ) : (
                  <span className={`sq-jk${/^\d/.test(g) ? " sq-dg" : ""}`} lang={/^\d/.test(g) || !/[぀-ヿ㐀-鿿가-힣]/.test(g) ? "en" : { KR: "ko", JP: "ja", TW: "zh-Hant" }[o.cc] ?? "en"} style={{ "--sw": pri, "--on": onColor(pri) } as CSSProperties} aria-hidden="true">
                    {g}
                  </span>
                )}
                <span lang={o.nLang}>{o.name}</span>
                <small>{o.cc}</small>
              </button>
            );
          })}
        </div>
      </div>
      <div className="sq-g5-grid">
        <div className="sq-g5-agent" lang="en">
          <span className="sq-g5-dot" aria-hidden="true" />
          <span className="sq-g5-log" role="status" aria-live="polite">
            {log.bold ? (
              <>
                <b>{log.bold}</b>
                {log.rest}
              </>
            ) : (
              log.text
            )}
          </span>
          <span className="sq-g5-caret" aria-hidden="true" />
        </div>
        <div className="sq-g5-tabs" role="tablist" aria-label={j.tabs.label}>
          <button type="button" {...tabProps("screen")}>
            {j.tabs.screen}
          </button>
          <button type="button" {...tabProps("code")} lang="en">
            {j.tabs.code}
          </button>
        </div>
        <figure className="sq-g5-src" {...panelProps("code")}>
          <div className="sq-g5-file" lang="en">
            <span>DESIGN.md</span>
            <span>{`web/references/${s.id}/DESIGN.md`}</span>
          </div>
          <div className="sq-g5-code" ref={code}>
            <ol lang="en" key={s.id}>
              {ls.map((l, i) => (
                <li
                  key={i}
                  ref={(e) => {
                    liRefs.current[i] = e;
                  }}
                  data-s={l.s}
                  className={lit.has(i) ? "sq-lit" : undefined}
                >
                  {l.t}
                  {l.hex ? <i style={{ "--sw": l.hex } as CSSProperties} /> : null}
                </li>
              ))}
            </ol>
            <div className="sq-g5-scan" ref={scan} aria-hidden="true" />
          </div>
        </figure>
        <div className="sq-g5-out" ref={out} {...panelProps("screen")}>
          <div className="sq-g5-stage" role="group" aria-label={t.sample.label}>
            {p ? (
              /* OmD's own generic prop (never a brand asset): on the stage, outside the brand's screen */
              // eslint-disable-next-line @next/next/no-img-element
              <img className="sq-g5-prop" src={p.src} width={p.width} height={p.height} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            ) : null}
            <Screen plan={x.plan} copy={j.sample} el={el} frame={frame} face={faceCss} />
            {faceNote ? <p className="sq-g5-face">{faceNote}</p> : null}
          </div>
          <div className="sq-g5-sum">
            <span className="sq-ct">{fill(t.r5.sum, { n: ls.length })}</span>
            <span className="sq-hint">{t.r5.hint}</span>
            {omitted.length ? (
              <p className="sq-ms">
                {j.omitted} <span lang="en">{omitted.join(", ")}</span>
              </p>
            ) : null}
            <button type="button" className="sq-gen-replay" onClick={() => run(s.id)}>
              {t.replay}
            </button>
          </div>
          {tip ? (
            <div className="sq-g5-tip" role="tooltip" ref={tipEl} style={{ top: tip.top, left: tip.left }} lang="en">
              {tipRows[tip.k]?.map((r: TipRow, i) => (
                <div key={i}>
                  <b>{r.k}</b> {r.v}
                  {r.p ? (
                    <small>
                      {r.p[0]} · <span lang={SITE_LOCALE_META[locale].htmlLang}>{t.m[methodKey(r.p[1])]}</span> · {r.p[2]}
                      {r.other ? (
                        <>
                          {" · "}
                          <em lang={SITE_LOCALE_META[locale].htmlLang}>{t.r5.otherDomain}</em>
                        </>
                      ) : null}
                    </small>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
