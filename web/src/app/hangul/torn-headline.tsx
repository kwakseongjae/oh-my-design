"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import s from "./hangul.module.css";

type Geo = {
  dx: number;
  dy: number;
  /** Proof-mark geometry, in px relative to the torn box. */
  head: { r: number; t: number; h: number };
  tail: { l: number; t: number; w: number; h: number };
};

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

/** The hero's signature: 있어 / 요. at display size, with a proofreader's mark.
 *  Scrolling (or the button) slides 요. back up beside 있어, and the CSS rule
 *  that fixes it takes the line 요. leaves behind. A real <br> stays in the DOM,
 *  so the break is deliberate markup; only a transform moves the fragment. */
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
  const [geo, setGeo] = useState<Geo | null>(null);
  const [scrollP, setScrollP] = useState(0);
  const [forced, setForced] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const [announce, setAnnounce] = useState("");

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

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() =>
        setScrollP(
          clamp01(
            (window.scrollY - (window.innerWidth < 1024 ? window.innerHeight * 0.12 : 24)) /
              (window.innerHeight * 0.3),
          ),
        ),
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const p = forced ?? scrollP;
  const mended = p >= 0.5;

  const toggle = () => {
    setAnimate(true);
    setForced(mended ? 0 : 1);
    setAnnounce(mended ? "다시 끊었습니다. 끊긴 단어 1" : "규칙을 적용했습니다. 끊긴 단어 0");
    window.setTimeout(() => setAnimate(false), 600);
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
          code: g.tail.t + g.tail.h * 0.5,
        };
      })()
    : null;

  return (
    <>
      <div className={s.tornArea}>
        <div
          ref={boxRef}
          aria-hidden
          className={`${s.torn} ${animate ? s.animate : ""}`}
          style={
            {
              "--p": p,
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
          {mark ? (
            <code
              className={`${s.tornCode} ${s.mono}`}
              style={{ top: mark.code }}
            >
              {"h1 {\n  word-break: keep-all;\n  overflow-wrap: anywhere;\n}"}
            </code>
          ) : null}
        </div>
        <p className={s.margin}>
          <span className={s.marginLabel}>
            {mended ? "교정 끝 · 끊긴 단어 0" : "교정 1 · 단어 중간에서 줄이 바뀜"}
          </span>
        </p>
      </div>

      <div className={s.heroRight}>
        {children}
        <div className="mt-6 flex flex-wrap gap-3">
          {cta}
          <button type="button" onClick={toggle} className={s.btn}>
            {mended ? "다시 끊어 보기" : "규칙 한 줄로 붙이기"}
          </button>
        </div>
        <p className="sr-only" aria-live="polite">
          {announce}
        </p>
      </div>
    </>
  );
}
