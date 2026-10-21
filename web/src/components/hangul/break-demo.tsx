"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { DEMO_HEADING, fill, objectParticle, subjectParticle, type HangulCopy, type HangulLocale } from "./copy";
import { findWordBreaks, wordOf, type WordBreak } from "./word-breaks";

const MIN = 320;
const MAX = 430;
const START = 360;
const COUNT = MAX - MIN + 1; // 111 widths
/** Frames grow past actual size only where every width still fits; hangul.css sets the same 1.25 at
 *  this breakpoint, so the server-rendered frame and the measured one never disagree at START. */
const BIG = "(min-width: 1240px)";

type Sweep = { off: boolean[]; on: boolean[] };

/** One phone screen: the eval card with its heading, at `width` CSS px, scaled to fit the stage. */
function Frame({
  fix,
  width,
  scale,
  frameRef,
  textRef,
  mark,
}: {
  fix: boolean;
  width: number;
  scale: number | null;
  frameRef: React.Ref<HTMLDivElement>;
  textRef: React.Ref<HTMLParagraphElement>;
  mark: WordBreak["rect"] | null;
}) {
  return (
    <div
      ref={frameRef}
      className={`hg-sp${fix ? " hg-sp--fix" : ""}`}
      data-hangul-specimen={fix ? "after" : "before"}
      style={{ width, ...(scale === null ? {} : ({ "--hg-s": scale } as React.CSSProperties)) }}
      aria-hidden="true"
    >
      <div className="hg-sp-card">
        <p ref={textRef} className="hg-sp-h" lang="ko">
          {DEMO_HEADING}
        </p>
      </div>
      {mark ? (
        <span
          className="hg-mark"
          style={{ left: mark.x - 4, top: mark.y - 2, width: mark.width + 8, height: mark.height + 4 }}
        />
      ) : null}
    </div>
  );
}

/**
 * The hero's live demo (owner v4 review: the fixed result must never hide behind a scroll or a
 * toggle). The same eval heading sits in two phone screens of the same width, one with the CSS
 * the agent wrote and one with /hangul's two lines added, side by side on desktop and stacked
 * on phones, both inside the first screen. The slider sets the screen width (320–430px); the
 * break map lays the heading out at all 111 widths in this reader's browser and fonts, with and
 * without the rule, and marks the ones where a word breaks mid-syllable.
 *
 * Every frame has a fixed-height stage and the map has fixed cells, so measuring never moves
 * anything below it. The probe that draws the map is built off-screen, measured and removed.
 */
export function BreakDemo({ t, locale }: { t: HangulCopy["demo"]; locale: HangulLocale }) {
  const [width, setWidth] = useState(START);
  const [scale, setScale] = useState<number | null>(null);
  const [broken, setBroken] = useState<WordBreak[] | null>(null);
  const [brokenAfter, setBrokenAfter] = useState<WordBreak[] | null>(null);
  const [sweep, setSweep] = useState<Sweep | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const beforeFrame = useRef<HTMLDivElement>(null);
  const beforeText = useRef<HTMLParagraphElement>(null);
  const afterFrame = useRef<HTMLDivElement>(null);
  const afterText = useRef<HTMLParagraphElement>(null);

  // Fit the frame to its stage. A transform scales the picture without moving any line break.
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const big = window.matchMedia(BIG);
    const fit = () => {
      const max = big.matches ? 1.25 : 1;
      setScale(Math.min(max, stage.clientWidth / width));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(stage);
    big.addEventListener("change", fit);
    return () => {
      ro.disconnect();
      big.removeEventListener("change", fit);
    };
  }, [width]);

  const measure = useCallback(() => {
    const s = scale ?? 1;
    if (beforeText.current && beforeFrame.current) setBroken(findWordBreaks(beforeText.current, beforeFrame.current, s));
    if (afterText.current && afterFrame.current) setBrokenAfter(findWordBreaks(afterText.current, afterFrame.current, s));
  }, [scale]);

  useLayoutEffect(() => {
    measure();
  }, [measure, width]);
  const measureRef = useRef(measure);
  useEffect(() => {
    measureRef.current = measure;
  }, [measure]);

  // The break map: an off-screen copy of the frame, laid out at every width with and without the
  // rule, once the heading's face has loaded. Removed as soon as it is measured.
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      const root = rootRef.current;
      const text = beforeText.current;
      if (!root || !text) return;
      try {
        await document.fonts.load(`600 18px ${getComputedStyle(text).fontFamily}`, DEMO_HEADING);
        await document.fonts.ready;
      } catch {
        /* measure with whatever face rendered */
      }
      if (cancelled) return;
      const probe = document.createElement("div");
      probe.className = "hg-probe";
      probe.setAttribute("aria-hidden", "true");
      const frame = document.createElement("div");
      frame.className = "hg-sp hg-sp--probe";
      const card = document.createElement("div");
      card.className = "hg-sp-card";
      const h = document.createElement("p");
      h.className = "hg-sp-h";
      h.lang = "ko";
      h.textContent = DEMO_HEADING;
      card.append(h);
      frame.append(card);
      probe.append(frame);
      root.append(probe);
      const row = (fix: boolean) => {
        frame.classList.toggle("hg-sp--fix", fix);
        const out: boolean[] = [];
        for (let w = MIN; w <= MAX; w++) {
          frame.style.width = `${w}px`;
          out.push(findWordBreaks(h).length > 0);
        }
        return out;
      };
      const result = { off: row(false), on: row(true) };
      probe.remove();
      setSweep(result);
      measureRef.current();
    };
    void run();
    const again = () => void run();
    document.fonts?.addEventListener?.("loadingdone", again);
    return () => {
      cancelled = true;
      document.fonts?.removeEventListener?.("loadingdone", again);
    };
  }, []);

  const pick = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.type === "pointermove" && e.buttons !== 1) return;
    if (e.type === "pointerdown") e.currentTarget.setPointerCapture(e.pointerId);
    const r = e.currentTarget.getBoundingClientRect();
    const i = Math.min(COUNT - 1, Math.max(0, Math.floor(((e.clientX - r.left) / r.width) * COUNT)));
    setWidth(MIN + i);
  };

  const b = broken?.[0];
  const ba = brokenAfter?.[0];
  const off = sweep?.off.filter(Boolean).length;
  const on = sweep?.on.filter(Boolean).length;
  const s = scale ?? 1;
  const readout = (x: WordBreak) => {
    const word = wordOf(x);
    return fill(t.broken, { word, p: subjectParticle(word), head: x.head, tail: x.tail, ro: objectParticle(x.tail) });
  };

  const cells = (row: boolean[] | undefined) =>
    Array.from({ length: COUNT }, (_, i) => (
      <span
        key={i}
        className={`hg-cell${row?.[i] ? " is-broken" : ""}${MIN + i === width ? " is-now" : ""}`}
      />
    ));

  return (
    <div ref={rootRef} className="hg-demo" role="group" aria-label={t.label} lang={locale}>
      <div className="hg-pair">
        <figure className="hg-pane">
          <figcaption className="hg-pane-name">{t.before}</figcaption>
          <div className="hg-stage" ref={stageRef}>
            <Frame fix={false} width={width} scale={scale} frameRef={beforeFrame} textRef={beforeText} mark={b?.rect ?? null} />
          </div>
          <p className={`hg-read${b ? " is-bad" : broken ? " is-good" : ""}`} aria-live="polite">
            {b ? readout(b) : broken ? t.whole : " "}
          </p>
          <pre className="hg-code"><code>{t.codeBefore}</code></pre>
        </figure>
        <figure className="hg-pane">
          <figcaption className="hg-pane-name">{t.after}</figcaption>
          <div className="hg-stage">
            <Frame fix width={width} scale={scale} frameRef={afterFrame} textRef={afterText} mark={ba?.rect ?? null} />
          </div>
          <p className={`hg-read${ba ? " is-bad" : brokenAfter ? " is-good" : ""}`}>
            {ba ? readout(ba) : brokenAfter ? t.wholeAfter : " "}
          </p>
          <pre className="hg-code"><code>{t.codeAfter}</code></pre>
        </figure>
      </div>

      <div className="hg-ctl">
        <label className="hg-width" htmlFor="hg-width">
          <span>{t.width}</span>
          <span className="hg-width-v">
            <output htmlFor="hg-width" className="hg-num">{width}px</output>
            <span className="hg-scale">{Math.abs(s - 1) < 0.005 ? t.actual : fill(t.scaled, { pct: Math.round(s * 100) })}</span>
          </span>
        </label>
        <input
          id="hg-width"
          className="hg-range"
          type="range"
          min={MIN}
          max={MAX}
          step={1}
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
          aria-describedby="hg-map-sum"
        />
        <div className="hg-map" aria-hidden="true">
          <div className="hg-map-row">
            <span className="hg-map-k">{t.rowBefore}</span>
            <div className="hg-cells" onPointerDown={pick} onPointerMove={pick}>{cells(sweep?.off)}</div>
            <span className="hg-map-n hg-num">{off ?? "–"}<small>/{COUNT}</small></span>
          </div>
          <div className="hg-map-row">
            <span className="hg-map-k">{t.rowAfter}</span>
            <div className="hg-cells" onPointerDown={pick} onPointerMove={pick}>{cells(sweep?.on)}</div>
            <span className="hg-map-n hg-num">{on ?? "–"}<small>/{COUNT}</small></span>
          </div>
          <div className="hg-axis hg-num"><span>{MIN}px</span><span>{MAX}px</span></div>
        </div>
        <p id="hg-map-sum" className="hg-sum">
          {fill(t.summary, { off: off ?? "–", on: on ?? "–" })}
        </p>
      </div>

      <p className="hg-note">{t.note}</p>
    </div>
  );
}
