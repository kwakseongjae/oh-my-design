"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * The tour of #compare. compare.tsx renders every stop; this only picks the stop and, on a phone, the side. Its habits
 * are hangul's split-view.tsx: it runs only while the section is on screen and the tab is visible, stops for good when
 * someone picks a stop or a side, and never runs with reduced motion. It is not SplitView: that tour scrolls one moa
 * screen and moves a spotlight over it, where here each stop is a different component with its own labels.
 *
 * Every stop sits in the same grid cell on both sides (kana.css), so each side is as tall as its tallest stop and the
 * page does not move during the tour. Hidden stops are visibility:hidden, out of the accessibility tree.
 */

export interface CompareLabels {
  readonly wrong: string;
  readonly right: string;
  readonly group: string;
  readonly stops: string;
  readonly hintAuto: string;
  readonly hintPaused: string;
  readonly play: string;
  readonly pause: string;
}

type Role = "wrong" | "right";

/** below this width one side shows at a time, with a switch above it (kana.css) */
const NARROW = "(max-width: 879px)";
/** wide: both sides at once; narrow: each side in turn */
const HOLD_MS = 4200;
const SIDE_MS = 2600;

export function CompareTour({
  labels,
  ids,
  kinds,
  captions,
  wrong,
  right,
}: {
  labels: CompareLabels;
  ids: readonly string[];
  kinds: readonly string[];
  captions: readonly ReactNode[];
  wrong: readonly ReactNode[];
  right: readonly ReactNode[];
}) {
  const [at, setAt] = useState(0);
  const [side, setSide] = useState<Role>("wrong");
  const [auto, setAuto] = useState(true);
  const [motion, setMotion] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const atRef = useRef(0);
  atRef.current = at;
  const n = ids.length;

  useEffect(() => {
    const el = root.current;
    if (!auto || !el) return;
    const narrow = matchMedia(NARROW);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let timer = 0;
    let run = 0;
    const stop = () => {
      run++;
      window.clearTimeout(timer);
    };
    const wait = (ms: number, mine: number) =>
      new Promise<boolean>((done) => (timer = window.setTimeout(() => done(mine === run), ms)));
    const play = async () => {
      const mine = ++run;
      for (;;) {
        if (narrow.matches) {
          setSide("wrong");
          if (!(await wait(SIDE_MS, mine))) return;
          setSide("right");
          if (!(await wait(SIDE_MS, mine))) return;
        } else if (!(await wait(HOLD_MS, mine))) return;
        setSide("wrong");
        setAt((atRef.current + 1) % n);
      }
    };
    const sync = () => {
      stop();
      if (reduce.matches) {
        setMotion(false);
        setAuto(false);
      } else if (visible && !document.hidden) {
        void play();
      }
    };
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        sync();
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    narrow.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      stop();
      io.disconnect();
      narrow.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [auto, n]);

  const go = (i: number) => {
    setAuto(false);
    setAt(((i % n) + n) % n);
    setSide("wrong");
  };
  const pick = (s: Role) => {
    setAuto(false);
    setSide(s);
  };

  const stack = (nodes: readonly ReactNode[], cls: string) => (
    <div className={`kc-stack ${cls}`}>
      {nodes.map((node, i) => (
        <div key={i} className="kc-stop" data-on={i === at ? "" : undefined} aria-hidden={i === at ? undefined : true}>
          {node}
        </div>
      ))}
    </div>
  );

  return (
    <div ref={root} className="kc" data-side={side}>
      <div className="kc-switch" role="group" aria-label={labels.group}>
        {(["wrong", "right"] as const).map((s) => (
          <button key={s} type="button" className="kc-switch-btn" data-side={s} aria-pressed={side === s} onClick={() => pick(s)}>
            {labels[s]}
          </button>
        ))}
      </div>
      <div className="kc-stage">
        {(["wrong", "right"] as const).map((s) => (
          <figure key={s} className={`kc-side kc-side--${s}`}>
            <figcaption className="kc-side-l">{labels[s]}</figcaption>
            {stack(s === "wrong" ? wrong : right, "kc-panels")}
          </figure>
        ))}
      </div>
      {/* After the screens in the document: on a phone the caption shows there, and its links come after the switch
          in the tab order as they do on screen. Wide screens lift it above the stage with `order` (kana.css); the
          stage holds nothing focusable, so the tab order still follows what is seen. */}
      {stack(captions, "kc-caps")}
      <div className="kc-nav">
        <button type="button" className="kc-step" onClick={() => go(at - 1)} aria-label={`${ids[(at - 1 + n) % n]} ${kinds[(at - 1 + n) % n]}`}>
          <span aria-hidden="true">←</span>
        </button>
        <ol className="kc-stops" aria-label={labels.stops}>
          {ids.map((id, i) => (
            <li key={i}>
              <button type="button" className="kc-stop-btn" aria-pressed={i === at} onClick={() => go(i)}>
                <span className="kc-stop-id" lang="en">
                  {id}
                </span>
                <span className="kc-stop-kind">{kinds[i]}</span>
              </button>
            </li>
          ))}
        </ol>
        <p className="kc-count" aria-hidden="true">
          {at + 1} / {n}
        </p>
        <button type="button" className="kc-step" onClick={() => go(at + 1)} aria-label={`${ids[(at + 1) % n]} ${kinds[(at + 1) % n]}`}>
          <span aria-hidden="true">→</span>
        </button>
        {motion ? (
          <button type="button" className="kc-play" aria-pressed={auto} onClick={() => setAuto((a) => !a)}>
            {auto ? labels.pause : labels.play}
          </button>
        ) : null}
      </div>
      <p className="kc-hint">{auto ? labels.hintAuto : labels.hintPaused}</p>
    </div>
  );
}
