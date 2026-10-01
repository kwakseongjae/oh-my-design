"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { RotateCcw } from "lucide-react";
import s from "./hangul.module.css";

type Geo = {
  dx: number;
  dy: number;
  /** Proof-mark geometry, in px relative to the torn box. */
  head: { r: number; t: number; h: number };
  tail: { l: number; t: number; w: number; h: number };
};

/** Torn state is held this long after load (and after a replay) before it mends. */
const HOLD_MS = 1200;
const CODE = "h1 {\n  word-break: keep-all;\n  overflow-wrap: anywhere;\n}";

/** The hero's signature: 있어 / 요. at display size, with a proofreader's mark.
 *  A beat after load, 요. slides back up beside 있어 and the CSS that fixes it
 *  takes the line 요. leaves behind, all inside the first screen. A real <br>
 *  stays in the DOM, so the break is deliberate markup; only a transform moves
 *  the fragment. With reduced motion the animated layer is hidden by CSS and a
 *  static end state (있어요. + the CSS) shows instead, with no JS involved. */
export function TornHeadline({
  children,
  cta,
}: {
  children?: React.ReactNode;
  cta?: React.ReactNode;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLSpanElement>(null);
  const tailRef = useRef<HTMLSpanElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const [geo, setGeo] = useState<Geo | null>(null);
  const [mended, setMended] = useState(false);
  const [animate, setAnimate] = useState(false);

  const measure = useCallback(() => {
    const box = boxRef.current?.getBoundingClientRect();
    const h = headRef.current?.getBoundingClientRect();
    const t = tailRef.current?.getBoundingClientRect();
    if (!box || !h || !t) return;
    // Measure with the transform removed: the tail's layout box, not its painted one.
    const tx = tailRef.current
      ? new DOMMatrixReadOnly(getComputedStyle(tailRef.current).transform)
      : null;
    const tl = t.left - (tx?.m41 ?? 0);
    const tt = t.top - (tx?.m42 ?? 0);
    setGeo({
      dx: h.right - tl,
      dy: h.top - tt,
      head: { r: h.right - box.left, t: h.top - box.top, h: h.height },
      tail: { l: tl - box.left, t: tt - box.top, w: t.width, h: t.height },
    });
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (boxRef.current) ro.observe(boxRef.current);
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [measure]);

  const play = useCallback(() => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setAnimate(true);
      setMended(true);
    }, HOLD_MS);
  }, []);

  // Play once on load, after the fonts settle so the mend lands on the real glyphs.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelled = false;
    const start = () => {
      if (!cancelled) play();
    };
    if (document.fonts?.ready) document.fonts.ready.then(start);
    else start();
    return () => {
      cancelled = true;
      window.clearTimeout(timer.current);
    };
  }, [play]);

  const replay = () => {
    // Snap back to the torn state, hold it, then mend again.
    setAnimate(false);
    setMended(false);
    play();
  };

  const g = geo;
  const mark = g
    ? (() => {
        const ax = g.head.r - g.head.h * 0.04;
        const ay = g.head.t + g.head.h * 0.62;
        const bx = g.tail.l + g.tail.w * 0.28;
        const by = g.tail.t + g.tail.h * 0.16;
        const k = g.head.h;
        return {
          path: `M ${ax} ${ay} C ${ax + k * 0.42} ${ay + k * 0.18}, ${bx + k * 0.5} ${by - k * 0.5}, ${bx} ${by}`,
          arrow: `M ${bx - k * 0.07} ${by - k * 0.1} L ${bx} ${by} L ${bx + k * 0.1} ${by - k * 0.06}`,
          box: {
            x: g.tail.l - k * 0.05,
            y: g.tail.t + k * 0.12,
            w: g.tail.w + k * 0.1,
            h: g.tail.h - k * 0.22,
          },
        };
      })()
    : null;

  return (
    <>
      <div className={s.tornArea}>
        {/* Animated layer (motion allowed) */}
        <div
          ref={boxRef}
          aria-hidden
          className={`${s.torn} ${s.tornMotion} ${animate ? s.animate : ""}`}
          style={
            {
              "--p": mended ? 1 : 0,
              "--dx": g?.dx ?? 0,
              "--dy": g?.dy ?? 0,
            } as React.CSSProperties
          }
        >
          <span ref={headRef} className={s.tornHead}>
            있어
          </span>
          <br />
          <span ref={tailRef} className={s.tornTail}>
            요.
          </span>
          {mark ? (
            <svg className={s.tornMark} width="100%" height="100%">
              <ellipse
                cx={mark.box.x + mark.box.w * 0.56}
                cy={mark.box.y + mark.box.h / 2}
                rx={mark.box.w * 0.54}
                ry={mark.box.h * 0.56}
                transform={`rotate(-4 ${mark.box.x + mark.box.w * 0.56} ${mark.box.y + mark.box.h / 2})`}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={3}
                strokeLinecap="round"
                pathLength={100}
                strokeDasharray="96 4"
              />
              <path
                d={mark.path}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={3}
                strokeLinecap="round"
              />
              <path
                d={mark.arrow}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : null}
          <code className={`${s.tornCode} ${s.mono}`}>{CODE}</code>
        </div>

        {/* Static end state (reduced motion) */}
        <div aria-hidden className={`${s.torn} ${s.tornStill}`}>
          <span className={s.tornHead}>있어요.</span>
          <br />
          <span className={s.tornHead}>&nbsp;</span>
          <code className={`${s.tornCode} ${s.mono}`}>{CODE}</code>
        </div>

        <div className={s.marginRow}>
          <p className={s.margin} data-mended={mended} aria-hidden>
            <span className={`${s.marginLabel} ${s.labelBefore}`}>
              단어 중간에서 줄이 바뀌었습니다
            </span>
            <span className={`${s.marginLabel} ${s.labelAfter}`}>
              CSS 한 줄로 고쳤습니다 · 잘린 단어 0
            </span>
          </p>
          <button
            type="button"
            onClick={replay}
            className={s.replay}
            aria-label="줄바꿈을 고치는 장면 다시 보기"
          >
            <RotateCcw className="size-4" aria-hidden /> 다시 보기
          </button>
        </div>
      </div>

      <div className={s.heroRight}>
        {children}
        {cta ? <div className="mt-6 flex flex-wrap gap-3">{cta}</div> : null}
      </div>
    </>
  );
}
