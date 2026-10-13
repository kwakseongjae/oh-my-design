"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties, type KeyboardEvent } from "react";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import type { GenSpec } from "@/lib/landing-a/types";
import type { BrandCopy } from "./copy";
import { glyph, lines, methodKey, missingLabels, states, tips, vars, type TipRow } from "./gen-render";
import { onColor } from "./keycap";

/**
 * Scan → generate (port of the prototype's round-5 genui5.js).
 * First view: skeleton → the scan reads the excerpt → each element snaps to its
 * claimed values, with a typed agent log. Later switches: instant restyle (CSS
 * variables morph ~450ms). The resting state is always the resolved screen;
 * reduced motion = no stream, no skeleton, no auto-cycle.
 */
type T = BrandCopy["gen"];
const LOADED_FACE: Partial<Record<SiteLocale, string>> = { ja: "Noto Sans JP", "zh-tw": "Noto Sans TC" };
const FIRST: Record<string, string> = { KR: "toss", JP: "line", TW: "104" };
const SYS = /^(system|-apple-system|system-ui)$/i;
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

export function GenUI({ specs, locale, t, first }: { specs: readonly GenSpec[]; locale: SiteLocale; t: T; first: string }) {
  const ordered = useMemo(() => {
    const ccs = { KR: 0, TW: 1, JP: 2, US: 3 } as Record<string, number>;
    const rank = (cc: string) => (cc === first ? -1 : ccs[cc] ?? 4);
    return [...specs].sort((a, b) => rank(a.cc) - rank(b.cc));
  }, [specs, first]);
  const by = useMemo(() => Object.fromEntries(specs.map((s) => [s.id, s])), [specs]);
  const [cur, setCur] = useState(() => (by[FIRST[first]] ? FIRST[first] : ordered[0]?.id));
  const s = by[cur] ?? ordered[0];
  const reduce = useReducedMotion();

  const ls = useMemo(() => lines(s, t.absent), [s, t.absent]);
  const { v: cssVars, miss } = useMemo(() => vars(s), [s]);
  const tipRows = useMemo(() => tips(s), [s]);
  const st = useMemo(() => states(s.btn), [s]);
  const count = ls.filter((l) => !l.miss).length;

  // playback state
  const [playing, setPlaying] = useState(false);
  const [sk, setSk] = useState<Set<number> | null>(null); // steps still skeleton (null = resolved)
  const [snap, setSnap] = useState<number | null>(null);
  const [lit, setLit] = useState<Set<number>>(new Set());
  const [flash, setFlash] = useState(0);
  const [log, setLog] = useState<{ text: string; bold?: string; rest?: string }>({ text: "" });
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const typer = useRef<ReturnType<typeof setTimeout>[]>([]);
  const touched = useRef(false);
  const visible = useRef(false);
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
    setLog({ text: "", ...summary(s, count) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const placeScan = (i: number) => {
    const li = liRefs.current[i];
    const sc = scan.current;
    const c = code.current;
    if (!li || !sc || !c) return;
    sc.style.top = `${li.offsetTop + 10 - 4}px`;
    sc.style.height = `${li.offsetHeight + 8}px`;
    if (c.scrollHeight > c.clientHeight + 4) c.scrollTop = Math.max(0, li.offsetTop - 70);
  };

  const play = useCallback(() => {
    clear();
    if (reduce) {
      setLog({ text: "", ...summary(s, count) });
      return;
    }
    setPlaying(true);
    setSk(new Set([0, 1, 2, 3, 4]));
    setLit(new Set());
    let logText = "Reading DESIGN.md…";
    typeLog(logText, 18);
    const nColors = ls.filter((l) => /colors\./.test(l.t) && !l.miss).length;
    const steps: [string, number][] = [[`colors (${nColors})`, 0], ["typography", 1], [`components.${s.btn ? s.btn.k : "button"}`, 2], ["surface", 3], ["states", 4]];
    let tm = 700;
    for (const [label, step] of steps) {
      const mine = ls.map((l, i) => (l.s === step ? i : -1)).filter((i) => i >= 0);
      later(() => {
        logText += ` → ${label}`;
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
          n.delete(step);
          return n;
        });
        setSnap(step);
        later(() => setSnap((x) => (x === step ? null : x)), 600);
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
      typeLog("", 0, summary(s, count));
    }, tm + 700);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, s, ls, count, typeLog, summary]);

  const apply = useCallback(
    (id: string, user: boolean) => {
      const n = by[id];
      if (!n) return;
      clear();
      setPlaying(false);
      setSk(null);
      setLit(new Set());
      setCur(id);
      if (!reduce) setFlash((f) => f + 1);
      const bits: string[] = [];
      if (n.primary) bits.push(`primary ${n.primary.v}`);
      if (n.btn?.radius != null) bits.push(`radius ${n.btn.radius}px`);
      if (n.head) bits.push(`${n.head.k} ${n.head.size}/${n.head.weight}`);
      typeLog(`Applied ${n.name}: ${bits.join(" · ")}`, 8, { bold: `Applied ${n.name}`, rest: `: ${bits.join(" · ")}` });
      if (user) touched.current = true;
    },
    [by, reduce, typeLog],
  );

  // first view → play; visibility for the auto-cycle
  useEffect(() => {
    const el = root.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (es) => {
        visible.current = es[0].isIntersecting;
        if (visible.current && !played.current) {
          played.current = true;
          play();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [play]);

  // auto-cycle: one company per region, every 5.2s, only while visible; stops for good on interaction
  useEffect(() => {
    if (reduce) return;
    const picks: string[] = [];
    for (const x of ordered) if (!picks.some((p) => by[p].cc === x.cc)) picks.push(x.id);
    const iv = setInterval(() => {
      if (touched.current || !visible.current || document.hidden || playing || !played.current) return;
      const i = picks.indexOf(cur);
      apply(picks[(i + 1) % picks.length], false);
    }, 5200);
    return () => clearInterval(iv);
  }, [reduce, ordered, by, cur, playing, apply]);

  useEffect(() => () => {
    clear();
    typer.current.forEach(clearTimeout);
  }, []);

  // provenance tooltip
  const [tip, setTip] = useState<{ k: number; top: number; left: number } | null>(null);
  const out = useRef<HTMLDivElement>(null);
  const tipEl = useRef<HTMLDivElement>(null);
  const showTip = (el: HTMLElement) => {
    const k = Number(el.dataset.k);
    const o = out.current?.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    if (!o) return;
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
  const tipProps = (k: number) => ({
    "data-k": k,
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => e.target === e.currentTarget && showTip(e.currentTarget),
    onMouseLeave: () => setTip(null),
    onFocus: (e: React.FocusEvent<HTMLElement>) => showTip(e.currentTarget),
    onBlur: () => setTip(null),
    onClick: (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      if (tip?.k === k) setTip(null);
      else showTip(e.currentTarget);
    },
  });

  // face note (owner decision F2: a known but unloadable face is named with a substitute label)
  const loaded = LOADED_FACE[locale];
  const fam = s.famT?.v ?? s.famD?.v ?? null;
  const isSys = !!fam && SYS.test(fam.trim());
  const isLoaded = !!fam && fam === loaded;
  let face = !fam ? t.r5.noFace : isSys || isLoaded ? fill(t.asSpec, { f: fam }) : fill(t.r5.subF, { f: fam });
  if (s.famD && s.famT && s.famD.v !== s.famT.v) face += ` ${fill(t.r5.disp, { d: s.famD.v })}`;
  const screenFont = isSys ? 'system-ui,-apple-system,"Segoe UI",sans-serif' : isLoaded ? `var(--font-noto-${locale === "ja" ? "jp" : "tc"}),"${loaded}",sans-serif` : undefined;

  const missTags = (pairs: [string, string][]) => {
    const tg = pairs.filter(([f]) => miss.has(f as never));
    return tg.length ? (
      <span className="sq-mtags">
        {tg.map(([, label]) => (
          <span key={label} className="sq-mtag">{`${label}: ${t.r5.dflt}`}</span>
        ))}
      </span>
    ) : null;
  };
  const cls = (base: string, flags: string[], step: number) =>
    `${base}${flags.filter((f) => miss.has(f as never)).map((f) => ` sq-m-${f}`).join("")}${sk?.has(step) ? " sq-sk" : ""}${snap === step ? " sq-snap" : ""}`;

  const onPickKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = ordered[(i + (e.key === "ArrowRight" ? 1 : -1) + ordered.length) % ordered.length];
    const btn = (e.currentTarget.parentElement?.querySelector(`[data-id="${CSS.escape(n.id)}"]`) as HTMLButtonElement | null);
    btn?.focus();
    touched.current = true;
    apply(n.id, true);
  };

  const missing = missingLabels(s, ls);
  const stop = () => {
    touched.current = true;
  };

  return (
    <div
      className={`sq-g5${playing ? " sq-playing sq-busy" : ""}`}
      ref={root}
      onPointerDown={stop}
      onKeyDown={stop}
      onWheel={stop}
      onTouchStart={stop}
    >
      <div className="sq-g5-pick-wrap">
        <div className="sq-g5-pick" role="radiogroup" aria-label={t.r5.pick}>
          {ordered.map((x, i) => {
            const g = glyph(x.name);
            const pri = x.primary?.v ?? x.btn?.bg ?? "#c9ccd3";
            return (
              <button
                key={x.id}
                type="button"
                role="radio"
                className="sq-g5-chip"
                data-id={x.id}
                aria-checked={x.id === s.id}
                tabIndex={x.id === s.id ? 0 : -1}
                onClick={() => apply(x.id, true)}
                onKeyDown={(e) => onPickKey(e, i)}
              >
                <span className={`sq-jk${/^\d/.test(g) ? " sq-dg" : ""}`} lang={/^\d/.test(g) || !/[぀-ヿ㐀-鿿가-힣]/.test(g) ? "en" : { KR: "ko", JP: "ja", TW: "zh-Hant" }[x.cc] ?? "en"} style={{ "--sw": pri, "--on": onColor(pri) } as CSSProperties} aria-hidden="true">
                  {g}
                </span>
                <span lang={x.nLang}>{x.name}</span>
                <small>{x.cc}</small>
              </button>
            );
          })}
        </div>
      </div>
      <div className="sq-g5-grid">
        <figure className="sq-g5-src">
          <div className="sq-g5-file" lang="en">
            <span>DESIGN.md</span>
            <span>{`web/references/${s.id}/DESIGN.md`}</span>
          </div>
          <div className="sq-g5-code" ref={code}>
            <ol lang="en" key={`${s.id}-${flash}`}>
              {ls.map((l, i) => {
                const m = !l.miss && l.t.match(/#[0-9a-f]{6}/i);
                return (
                  <li
                    key={i}
                    ref={(el) => {
                      liRefs.current[i] = el;
                    }}
                    data-s={l.s}
                    className={[l.miss ? "sq-miss" : "", lit.has(i) ? "sq-lit" : "", flash && !playing ? "sq-flash" : ""].filter(Boolean).join(" ") || undefined}
                    style={flash && !playing ? { animationDelay: `${i * 18}ms` } : undefined}
                  >
                    {l.t}
                    {m ? <i style={{ "--sw": m[0] } as CSSProperties} /> : null}
                  </li>
                );
              })}
            </ol>
            <div className="sq-g5-scan" ref={scan} aria-hidden="true" />
          </div>
        </figure>
        <div className="sq-g5-out" ref={out}>
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
          <div className="sq-g5-stage">
            <span className="sq-g5-label">{t.sample.label}</span>
            <div className={`sq-scr${sk?.has(0) ? " sq-sk" : ""}`} tabIndex={0} style={{ ...(cssVars as CSSProperties), fontFamily: screenFont }} {...tipProps(0)}>
              <div className="sq-scr-in">
                <p className={cls("sq-e sq-e-h", ["head"], 1)} tabIndex={0} {...tipProps(1)}>
                  <span>{t.sample.title}</span>
                </p>
                <p className={cls("sq-e sq-e-p", ["bod", "body"], 1)} {...tipProps(1)}>
                  <span>{t.sample.body}</span>
                </p>
                <div className={cls("sq-e sq-e-card", ["sbg", "sr"], 3)} tabIndex={0} {...tipProps(3)}>
                  {missTags([["sbg", "background"], ["sr", "radius"]])}
                  <p className="sq-e-ct">{t.sample.card}</p>
                  {t.sample.rows.map((r) => (
                    <p key={r} className="sq-e-row">
                      <span>{r}</span>
                      <i />
                    </p>
                  ))}
                </div>
                <button type="button" className={cls("sq-e sq-e-btn", ["btn", "br", "bh", "bpad", "bfont"], 2)} {...tipProps(2)}>
                  <span>{t.sample.cta}</span>
                </button>
                {missTags([["bh", "height"], ["bpad", "padding"], ["bfont", "font"], ["br", "radius"]])}
                <div className={cls("sq-e sq-e-st", [], 4)} tabIndex={0} {...tipProps(4)}>
                  <p className="sq-e-ct">{t.sample.states}</p>
                  <div className="sq-e-sts">
                    {st.length ? (
                      st.map((x) =>
                        x.css ? (
                          <span key={x.k} className="sq-e-sb" style={x.css as CSSProperties}>{t.r5.st[x.k]}</span>
                        ) : (
                          <span key={x.k} className="sq-e-chip">
                            {t.r5.st[x.k]}
                            {x.sw ? <i style={{ background: x.sw }} /> : null}
                          </span>
                        ),
                      )
                    ) : (
                      <span className="sq-e-chip sq-dash">{t.r5.stNone}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sq-g5-sum">
            <span className="sq-ct">{fill(t.r5.sum, { n: count })}</span>
            <span className="sq-hint">{t.r5.hint}</span>
            {missing.length ? (
              <span className="sq-ms">
                {t.r5.missing}
                {missing.map((m) => (
                  <span key={m} lang="en">{m}</span>
                ))}
              </span>
            ) : null}
            <span className="sq-face">{face}</span>
          </div>
          {tip ? (
            <div className="sq-g5-tip" role="tooltip" ref={tipEl} style={{ top: tip.top, left: tip.left }} lang="en">
              {tipRows[tip.k]?.map((r: TipRow, i) => (
                <div key={i}>
                  <b>{r.k}</b> {r.v != null ? r.v : <span className="sq-x">{t.absent}</span>}
                  {r.p ? (
                    <small>
                      {r.p[0]} · {t.m[methodKey(r.p[1])]} · {r.p[2]}
                      {r.other ? (
                        <>
                          {" · "}
                          <em>{t.r5.otherDomain}</em>
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
      <div className="sq-g5-foot">
        <dl className="sq-gen-stats">
          {[s.stats.claims, s.stats.sf, `${s.stats.src} · ${s.stats.t1}`, s.stats.chk, s.stats.next].map((v, i) => (
            <div key={i}>
              <dt>{v}</dt>
              <dd>{t.stats[i]}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          className="sq-gen-replay"
          onClick={() => {
            touched.current = true;
            play();
          }}
        >
          {t.replay}
        </button>
      </div>
    </div>
  );
}
