"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { AutoSwipe, browserClock, type SwipePhase } from "./autoswipe";
import { DEMO_HEADING, PANSIM_TITLE, fill, objectParticle, subjectParticle, type HangulCopy, type HangulLocale } from "./copy";
import { findWordBreaks, wordOf, type WordBreak } from "./word-breaks";

const MIN = 320;
const MAX = 430;
const START = 360;
const COUNT = MAX - MIN + 1; // 111 widths
/** Phone widths named under the slider. Only widths inside the demo's 320–430 range. */
const TICKS = [320, 360, 375, 390, 412, 430] as const;
/** Frames grow past actual size only where every width still fits; hangul.css sets the same 1.25 at
 *  this breakpoint, so the server-rendered frame and the measured one never disagree at START. */
const BIG = "(min-width: 1240px)";
/** Past the middle of the range the chip sits left of the thumb, so it never runs off a phone's rail. */
const FLIP = 375;

type Sweep = { off: boolean[]; on: boolean[] };
const pct = (w: number) => (w - MIN) / (MAX - MIN);

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
      style={{ width, ...(scale === null ? {} : ({ "--hg-s": scale } as CSSProperties)) }}
      aria-hidden="true"
    >
      <div className="hg-sp-card">
        <p ref={textRef} className="hg-sp-h" lang="ko">
          {DEMO_HEADING}
        </p>
      </div>
      {mark ? (
        // positioned by transform, so a mark that moves never counts as a layout shift
        <span
          className="hg-mark"
          style={{ transform: `translate(${mark.x - 4}px, ${mark.y - 2}px)`, width: mark.width + 8, height: mark.height + 4 }}
        />
      ) : null}
    </div>
  );
}

/** A pointing hand, drawn here (no emoji): it rides on the thumb while the slider moves by itself. */
function Hand() {
  return (
    <svg className="hg-hand" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        d="M12.2 15V6.9a2.1 2.1 0 0 1 4.2 0v6.6h.5v-1.6a2.1 2.1 0 0 1 4.2 0v1.9h.5v-1a2.1 2.1 0 0 1 4.2 0v7.4c0 4.5-3.5 8.1-7.9 8.1h-1.8c-2.3 0-4.4-1.1-5.7-3l-4.6-6.2a2 2 0 0 1 3.1-2.5l3.3 4z"
        fill="currentColor"
        stroke="var(--hg-paper)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * The hero's live demo, set as one leaf of the Hunminjeongeum Haerye (concept A,
 * docs/research/2026-10-21-hangul/r15/concept): a double 광곽 around it, a 판심 down the middle with
 * the 어미 facing inward and its title set vertically, the result without the skill on one half and
 * the result with /hangul on the other. The same eval heading sits in two phone screens of the same
 * width, inside the first screen on every device (owner v4 review). The slider sets the screen width
 * (320–430px); the break map lays the heading out at all 111 widths in this reader's browser and
 * fonts, with and without the rule, drawn as 계선 (column rules): a vermilion rule where a word
 * breaks mid-word.
 *
 * The slider moves by itself when it comes into view (autoswipe.ts, owner 2026-10-21), driving the same
 * width state as a reader would, and once more after 8 s if nobody touched it. The reader's first press
 * on the demo, or key or focus on its control, stops it for good and takes the chip away. Never under
 * prefers-reduced-motion: there the chip just sits by the thumb.
 *
 * Every frame has a fixed-height stage and the map has fixed cells, so measuring and the auto-swipe
 * never move anything below them. The probe that draws the map is built off-screen, measured and removed.
 */
export function BreakDemo({ t, locale }: { t: HangulCopy["demo"]; locale: HangulLocale }) {
  const [width, setWidth] = useState(START);
  const [scale, setScale] = useState<number | null>(null);
  const [broken, setBroken] = useState<WordBreak[] | null>(null);
  const [brokenAfter, setBrokenAfter] = useState<WordBreak[] | null>(null);
  const [sweep, setSweep] = useState<Sweep | null>(null);
  const [phase, setPhase] = useState<SwipePhase>("idle");
  const [touched, setTouched] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const ctlRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const beforeFrame = useRef<HTMLDivElement>(null);
  const beforeText = useRef<HTMLParagraphElement>(null);
  const afterFrame = useRef<HTMLDivElement>(null);
  const afterText = useRef<HTMLParagraphElement>(null);
  const widthRef = useRef(width);
  useEffect(() => {
    widthRef.current = width;
  }, [width]);

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

  // The auto-swipe, and the hand-off: a press anywhere on the demo, or a key or focus on its control,
  // stops it at once and for good. It watches the control, not the whole demo: on a phone the leaf is
  // taller than the screen, and the swipe is there to show that the slider moves.
  useEffect(() => {
    const root = rootRef.current;
    const ctl = ctlRef.current;
    if (!root || !ctl) return;
    let swipe: AutoSwipe | null = null;
    const touch = () => {
      setTouched(true);
      swipe?.interact();
    };
    const hands: [HTMLElement, string][] = [
      [root, "pointerdown"],
      [ctl, "keydown"],
      [ctl, "focusin"],
    ];
    for (const [el, e] of hands) el.addEventListener(e, touch, true);
    let io: IntersectionObserver | null = null;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!still && typeof IntersectionObserver === "function") {
      swipe = new AutoSwipe(browserClock(), () => widthRef.current, setWidth, (p) => setPhase(p));
      const s = swipe;
      io = new IntersectionObserver(([e]) => s.setInView(e.isIntersecting && e.intersectionRatio >= 0.5), {
        threshold: [0, 0.5, 1],
      });
      io.observe(ctl);
    }
    return () => {
      for (const [el, e] of hands) el.removeEventListener(e, touch, true);
      io?.disconnect();
      swipe?.dispose();
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
  const playing = phase === "playing";
  const readout = (x: WordBreak) => {
    const word = wordOf(x);
    return fill(t.broken, { word, p: subjectParticle(word), head: x.head, tail: x.tail, ro: objectParticle(x.tail) });
  };
  const valueText = b
    ? fill(t.valueBroken, { w: width, word: wordOf(b), p: subjectParticle(wordOf(b)) })
    : fill(t.valueWhole, { w: width });

  const cells = (row: boolean[] | undefined) =>
    Array.from({ length: COUNT }, (_, i) => (
      <span key={i} className={`hg-cell${row?.[i] ? " is-broken" : ""}${MIN + i === width ? " is-now" : ""}`} />
    ));

  return (
    <div
      ref={rootRef}
      className={`hg-demo${playing ? " is-playing" : ""}${touched ? " is-touched" : ""}`}
      data-swipe={phase}
      role="group"
      aria-label={t.label}
      lang={locale}
    >
      <div className="hg-leaf">
        <div className="hg-leaf-in">
          <figure className="hg-pane">
            <figcaption className="hg-pane-name">{t.before}</figcaption>
            <div className="hg-stage" ref={stageRef}>
              <Frame fix={false} width={width} scale={scale} frameRef={beforeFrame} textRef={beforeText} mark={b?.rect ?? null} />
            </div>
            <p className={`hg-read${b ? " is-bad" : broken ? " is-good" : ""}`} aria-live={playing ? "off" : "polite"}>
              {b ? readout(b) : broken ? t.whole : " "}
            </p>
            <pre className="hg-code"><code>{t.codeBefore}</code></pre>
          </figure>

          {/* 판심: the fold between the half-leaves, its 어미 facing inward, its title set vertically.
              Each syllable is its own inline-block: render-check reads a vertical column as broken lines. */}
          <div className="hg-pansim" aria-hidden="true">
            <span className="hg-eomi hg-eomi--top" />
            <span className="hg-pansim-t hg-d" lang="ko">
              {[...PANSIM_TITLE].map((c, i) => (c === " " ? <span key={i} className="hg-pansim-sp"> </span> : <span key={i}>{c}</span>))}
            </span>
            <span className="hg-eomi hg-eomi--bottom" />
          </div>

          <figure className="hg-pane">
            <figcaption className="hg-pane-name">{t.after}</figcaption>
            <div className="hg-stage">
              <Frame fix width={width} scale={scale} frameRef={afterFrame} textRef={afterText} mark={ba?.rect ?? null} />
            </div>
            <p className={`hg-read${ba ? " is-bad" : brokenAfter ? " is-good" : ""}`}>
              {ba ? readout(ba) : brokenAfter ? t.wholeAfter : " "}
            </p>
            <pre className="hg-code"><code>{t.codeAfter}</code></pre>
          </figure>

          <div className="hg-ctl" ref={ctlRef}>
            <div className="hg-ctl-h">
              <label className="hg-ctl-l" htmlFor="hg-width">{t.width}</label>
              <span className="hg-width-v">
                <output htmlFor="hg-width" className="hg-num">{width}px</output>
                <span className="hg-scale">{Math.abs(s - 1) < 0.005 ? t.actual : fill(t.scaled, { pct: Math.round(s * 100) })}</span>
              </span>
            </div>
            <div className="hg-map" aria-hidden="true">
              <div className="hg-row">
                <span className="hg-map-k">{t.rowBefore}</span>
                <div className="hg-cells" onPointerDown={pick} onPointerMove={pick}>{cells(sweep?.off)}</div>
                <span className="hg-map-n hg-num">{off ?? "–"}<small>/{COUNT}</small></span>
              </div>
              <div className="hg-row">
                <span className="hg-map-k">{t.rowAfter}</span>
                <div className="hg-cells" onPointerDown={pick} onPointerMove={pick}>{cells(sweep?.on)}</div>
                <span className="hg-map-n hg-num">{on ?? "–"}<small>/{COUNT}</small></span>
              </div>
            </div>
            <div className="hg-row hg-row--rail">
              <div className="hg-rail">
                <input
                  id="hg-width"
                  className="hg-range"
                  type="range"
                  min={MIN}
                  max={MAX}
                  step={1}
                  value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  aria-valuetext={valueText}
                  aria-describedby="hg-map-sum"
                />
                {/* moved by transform along the thumb's track, so riding on the thumb is never a layout shift */}
                <div className="hg-follow" aria-hidden="true">
                  <div className={`hg-follow-in${width > FLIP ? " is-flip" : ""}`} style={{ "--p": pct(width) } as CSSProperties}>
                    <Hand />
                    <span className="hg-chip">{t.hint}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hg-row hg-row--ticks" aria-hidden="true">
              <div className="hg-ticks hg-num">
                {TICKS.map((w) => (
                  <span key={w} style={{ "--p": pct(w) } as CSSProperties}>{w}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p id="hg-map-sum" className="hg-sum">
        {fill(t.summary, { off: off ?? "–", on: on ?? "–" })}
      </p>
      <p className="hg-note">{t.note}</p>
    </div>
  );
}
