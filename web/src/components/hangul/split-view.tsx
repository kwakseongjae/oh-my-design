"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export interface SideLabels {
  readonly before: string;
  readonly after: string;
  readonly group: string;
  readonly hintAuto: string;
  readonly hintPaused: string;
}

type Side = "before" | "after";

/** Below this width the two screens share one place and a switch picks the one shown (hangul.css). */
const NARROW = "(max-width: 879px)";
const EVERY_MS = 3200;

/**
 * Two versions of one screen. Wide: side by side, with `between` (rule tags, notes) in the middle
 * column, or under the pair where the middle column won't fit. Narrow: one place for both, a switch
 * above it and `between` under it; the switch alternates the two every 3.2 s while the pair is on
 * screen, until someone presses it, and never with reduced motion.
 *
 * Both screens stay in the document at every width (the hidden one is only transparent), so a
 * screen reader reads the pair in order, without/with, and nothing flips under it.
 */
export function SplitView({
  labels,
  before,
  after,
  between,
  variant,
}: {
  labels: SideLabels;
  before: ReactNode;
  after: ReactNode;
  between?: ReactNode;
  variant: "hero" | "chapter";
}) {
  const [side, setSide] = useState<Side>("before");
  const [auto, setAuto] = useState(true);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!auto || !el) return;
    const narrow = matchMedia(NARROW);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let timer = 0;
    const sync = () => {
      window.clearInterval(timer);
      timer = 0;
      if (narrow.matches && !reduce.matches && visible && !document.hidden) {
        timer = window.setInterval(() => setSide((s) => (s === "before" ? "after" : "before")), EVERY_MS);
      }
    };
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        sync();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    narrow.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      window.clearInterval(timer);
      io.disconnect();
      narrow.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [auto]);

  const pick = (s: Side) => {
    setAuto(false);
    setSide(s);
  };

  return (
    <div ref={root} className={`hg-split hg-split--${variant}`} data-side={side}>
      <div className="hg-switch-box">
        <div className="hg-switch" role="group" aria-label={labels.group}>
          {(["before", "after"] as const).map((s) => (
            <button key={s} type="button" className="hg-switch-btn" data-side={s} aria-pressed={side === s} onClick={() => pick(s)}>
              {labels[s]}
            </button>
          ))}
        </div>
        <p className="hg-switch-hint">{auto ? labels.hintAuto : labels.hintPaused}</p>
      </div>
      <div className="hg-split-stage">
        {(["before", "after"] as const).map((s) => (
          <figure key={s} className={`hg-side hg-side--${s}`}>
            <figcaption className="hg-side-l">
              <span className="hg-side-dot" aria-hidden="true" />
              {labels[s]}
            </figcaption>
            {s === "before" ? before : after}
          </figure>
        ))}
        {between ? <div className="hg-split-mid">{between}</div> : null}
      </div>
    </div>
  );
}
