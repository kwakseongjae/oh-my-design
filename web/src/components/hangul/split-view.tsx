"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export interface SideLabels {
  readonly before: string;
  readonly after: string;
  readonly group: string;
  readonly hintAuto: string;
  readonly hintPaused: string;
}

/** A stop on the hero's tour: the string both screens bring into view, and the rule tag it lights. */
export interface TourStop {
  readonly target: string;
  readonly rule: string;
  readonly label: string;
}

type Side = "before" | "after";

/** Below this width the two screens share one place and a switch picks the one shown (hangul.css). */
const NARROW = "(max-width: 879px)";
const EVERY_MS = 3200;

/** The tour's beats. TRAVEL_MS is moa.css's scroll transition; a wide stop holds both screens for
 *  HOLD_MS, a narrow one gives each screen SIDE_MS. */
const TRAVEL_MS = 670;
const HOLD_MS = 2000;
const SIDE_MS = 1420;
const GAP_MS = 250;
const HOME_MS = 1170;
/** the spotlight's margin around its string, in the 12 px gap between moa's cards */
const FOCUS_PAD = 6;

/**
 * Scroll one fixed-chrome moa screen so `target` sits mid-view, as far as the content allows, and
 * size its spotlight to it. Each screen measures its own strings: the two sets differ in length,
 * so the same string sits at a different height on each side. With no target it goes back to the top.
 */
function aim(moa: HTMLElement, target: string | null) {
  const view = moa.querySelector<HTMLElement>(".moa-view");
  const scroll = moa.querySelector<HTMLElement>(".moa-scroll");
  const focus = moa.querySelector<HTMLElement>(".moa-focus");
  if (!view || !scroll || !focus) return;
  const box = target ? moa.querySelector(target)?.getBoundingClientRect() : undefined;
  if (!box) {
    scroll.style.transform = "";
    return;
  }
  const content = scroll.getBoundingClientRect();
  const top = box.top - content.top;
  const y = Math.max(0, Math.min(top - (view.clientHeight - box.height) / 2, content.height - view.clientHeight));
  scroll.style.transform = `translateY(${-y}px)`;
  focus.style.top = `${view.offsetTop + top - y - FOCUS_PAD}px`;
  focus.style.left = `${box.left - moa.getBoundingClientRect().left - FOCUS_PAD}px`;
  focus.style.width = `${box.width + FOCUS_PAD * 2}px`;
  focus.style.height = `${box.height + FOCUS_PAD * 2}px`;
}

/**
 * Walk both screens through the stops from `at` on, forever: scroll a little, spotlight one string
 * and light its rule, hold (narrow: without the skill, then with it), move on. Returns the stop
 * function, which leaves everything where it is, so a pressed switch compares the stop on screen.
 */
function playTour(
  root: HTMLElement,
  stops: readonly TourStop[],
  at: { current: number },
  narrow: boolean,
  show: (side: Side) => void,
  caption: (label: string) => void,
) {
  const screens = [...root.querySelectorAll<HTMLElement>(".moa--fixed")];
  const tags = [...root.querySelectorAll<HTMLElement>(".hg-tag")];
  let timer = 0;
  const wait = (ms: number) => new Promise<void>((done) => (timer = window.setTimeout(done, ms)));
  const light = (rule: string | null) => {
    screens.forEach((s) => s.toggleAttribute("data-focus", rule !== null));
    tags.forEach((t) => t.toggleAttribute("data-on", t.dataset.rule === rule));
  };
  (async () => {
    for (;;) {
      const stop = stops[at.current];
      if (narrow) show("before");
      screens.forEach((s) => aim(s, stop.target));
      await wait(TRAVEL_MS);
      light(stop.rule);
      caption(stop.label);
      if (narrow) {
        await wait(SIDE_MS);
        show("after");
        await wait(SIDE_MS);
      } else {
        await wait(HOLD_MS);
      }
      light(null);
      at.current = (at.current + 1) % stops.length;
      if (at.current === 0) {
        await wait(GAP_MS);
        screens.forEach((s) => aim(s, null));
        await wait(HOME_MS);
      } else {
        await wait(GAP_MS);
      }
    }
  })();
  return () => window.clearTimeout(timer);
}

/**
 * Two versions of one screen. Wide: side by side, with `between` (rule tags, notes) in the middle
 * column, or under the pair where the middle column won't fit. Narrow: one place for both, a switch
 * above it and `between` under it; the switch alternates the two every 3.2 s while the pair is on
 * screen, until someone presses it, and never with reduced motion. With `tour` (the hero) the pair
 * walks through its stops instead, at every width, and the line under the switch names the rule.
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
  tour,
}: {
  labels: SideLabels;
  before: ReactNode;
  after: ReactNode;
  between?: ReactNode;
  variant: "hero" | "chapter";
  tour?: readonly TourStop[];
}) {
  const [side, setSide] = useState<Side>("before");
  const [auto, setAuto] = useState(true);
  const [rule, setRule] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const at = useRef(0);

  useEffect(() => {
    const el = root.current;
    if (!auto || !el) return;
    const narrow = matchMedia(NARROW);
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let stop = () => {};
    const sync = () => {
      stop();
      stop = () => {};
      if (reduce.matches) {
        setAuto(false);
      } else if (visible && !document.hidden) {
        if (tour) {
          stop = playTour(el, tour, at, narrow.matches, setSide, setRule);
        } else if (narrow.matches) {
          const timer = window.setInterval(() => setSide((s) => (s === "before" ? "after" : "before")), EVERY_MS);
          stop = () => window.clearInterval(timer);
        }
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
      stop();
      io.disconnect();
      narrow.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [auto, tour]);

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
        <p className="hg-switch-hint">{auto ? (rule ?? labels.hintAuto) : labels.hintPaused}</p>
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
