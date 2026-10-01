"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import s from "./hangul.module.css";
import { findWordBreaks, renderedLines, type WordBreak } from "./word-breaks";

const MIN = 320;
const MAX = 430;
const DEFAULT_WIDTH = 360;

/** The eval page's metrics card (codex p1-A-r3, no skill), markup as generated.
 *  "사람들이모아와" has no space in the original: the page hides the <br> at ≤680px. */
export function MetricsCard({
  h2Ref,
}: {
  h2Ref?: React.Ref<HTMLHeadingElement>;
}) {
  return (
    <section className={s.metrics} aria-label="모아 주요 지표 (eval 원본 재현)">
      <div className={s.metricsIntro}>
        <span className={s.miniLabel}>BETTER FINANCE, TOGETHER</span>
        <h2 ref={h2Ref}>
          이미 많은 사람들이
          <br />
          모아와 함께하고 있어요.
        </h2>
      </div>
      <div className={s.metric}>
        <p>함께하는 사용자</p>
        <strong>
          320<span>만 명+</span>
        </strong>
        <span className={s.metricNote}>모아를 선택한 사람들</span>
      </div>
      <div className={s.metric}>
        <p>누적 송금액</p>
        <strong>
          12<span>조 원+</span>
        </strong>
        <span className={s.metricNote}>일상 속 연결된 마음</span>
      </div>
      <div className={s.metric}>
        <p>앱 스토어 평점</p>
        <strong>
          4.9<span className={s.stars}>★★★★★</span>
        </strong>
        <span className={s.metricNote}>사용자가 전하는 만족</span>
      </div>
    </section>
  );
}

const wordOf = (b: WordBreak) => (b.head + b.tail).replace(/[.,!?…·]+$/, "");
/** 이/가 by the last syllable's final consonant. */
const particle = (w: string) => {
  const c = w.charCodeAt(w.length - 1) - 0xac00;
  return c >= 0 && c < 11172 && c % 28 !== 0 ? "이" : "가";
};

type MapState = { off: boolean[]; on: boolean[] } | null;

export function HangulHero({ children }: { children?: React.ReactNode }) {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [ruleOn, setRuleOn] = useState(false);
  const [scale, setScale] = useState(1);
  const [hostW, setHostW] = useState(0);
  const [frameH, setFrameH] = useState<number | null>(null);
  const [breaks, setBreaks] = useState<WordBreak[]>([]);
  const [lines, setLines] = useState<string[]>([]);
  const [map, setMap] = useState<MapState>(null);

  const hostRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const probeRef = useRef<HTMLDivElement>(null);
  const probeH2Ref = useRef<HTMLHeadingElement>(null);

  // Fit the true-width frame into the column. A transform scales the picture
  // without changing where the line breaks.
  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    // Up to 1.6× on wide columns so the specimen reads at desktop distance.
    const fit = () => {
      setHostW(host.clientWidth);
      setScale(Math.min(1.6, host.clientWidth / width));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(host);
    return () => ro.disconnect();
  }, [width]);

  const measure = useCallback(() => {
    const h2 = h2Ref.current;
    const frame = frameRef.current;
    if (!h2 || !frame) return;
    setBreaks(findWordBreaks(h2, frame, scale));
    setLines(renderedLines(h2));
    setFrameH(frame.offsetHeight * scale);
  }, [scale]);

  useLayoutEffect(() => {
    measure();
  }, [measure, width, ruleOn]);

  // Break map: lay the same heading out at every width from 320 to 430px,
  // with and without the rule, in this reader's fonts.
  useEffect(() => {
    let cancelled = false;
    const run = () => {
      const probe = probeRef.current;
      const h2 = probeH2Ref.current;
      if (!probe || !h2 || cancelled) return;
      const sweep = (on: boolean) => {
        probe.classList.toggle(s.ruleOn, on);
        const row: boolean[] = [];
        for (let w = MIN; w <= MAX; w++) {
          probe.style.width = `${w}px`;
          row.push(findWordBreaks(h2).length > 0);
        }
        return row;
      };
      setMap({ off: sweep(false), on: sweep(true) });
      measure();
    };
    if (document.fonts?.ready) document.fonts.ready.then(run);
    else run();
    return () => {
      cancelled = true;
    };
  }, [measure]);

  const broken = breaks[0];
  const offCount = map ? map.off.filter(Boolean).length : null;
  const onCount = map ? map.on.filter(Boolean).length : null;

  return (
    <div className={s.grid}>
      {/* Specimen: sticky on desktop while the controls and notes scroll */}
      <div className={s.demoSpecimen}>
        <div
          ref={hostRef}
          className={s.demoStage}
          style={{ height: frameH ?? undefined }}
          data-hangul-specimen="hg10-hero"
        >
          <div
            ref={frameRef}
            className={`${s.phone} ${ruleOn ? s.ruleOn : ""}`}
            style={{
              width,
              transform: `translateX(${Math.max(0, (hostW - width * scale) / 2)}px) scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <MetricsCard h2Ref={h2Ref} />
            {broken?.rect ? (
              <span
                aria-hidden
                className={s.breakBox}
                style={{
                  left: broken.rect.x - 5,
                  top: broken.rect.y - 4,
                  width: broken.rect.width + 10,
                  height: broken.rect.height + 8,
                }}
              />
            ) : null}
          </div>
        </div>
        <p className={`${s.note} mt-3`}>
          실제 DOM 텍스트입니다.{" "}
          {Math.abs(scale - 1) < 0.005
            ? `${width}px 화면을 그대로 그립니다.`
            : `${width}px 화면을 ${Math.round(scale * 100)}%로 ${scale < 1 ? "줄여" : "키워"} 보여 줍니다. 줄바꿈은 ${width}px 그대로입니다.`}
        </p>
      </div>

      {/* Controls + live readout */}
      <div className={s.demoControls}>
        <div role="group" aria-label="/hangul 규칙" className={s.seg}>
          {[
            { on: false, label: "생성된 그대로" },
            { on: true, label: "규칙 한 줄 추가" },
          ].map((o) => (
            <button
              key={String(o.on)}
              type="button"
              aria-pressed={ruleOn === o.on}
              onClick={() => setRuleOn(o.on)}
              className={s.segBtn}
            >
              {o.label}
            </button>
          ))}
        </div>

        <div>
          <label
            htmlFor="hangul-width"
            className="flex items-baseline justify-between font-semibold"
          >
            <span>폰 화면 폭</span>
            <span className={`${s.mono} text-xl font-bold`}>{width}px</span>
          </label>
          <input
            id="hangul-width"
            type="range"
            min={MIN}
            max={MAX}
            step={1}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className={`${s.range} mt-2`}
            aria-describedby="hangul-map-caption"
          />
          {/* Break map */}
          <div className={`${s.map} mt-1`} aria-hidden>
            {(map
              ? ruleOn
                ? map.on
                : map.off
              : Array.from({ length: MAX - MIN + 1 }, () => false)
            ).map((b, i) => (
              <span
                key={i}
                className={`${s.mapCell} ${b ? s.mapCellBroken : ""} ${MIN + i === width ? s.mapCellNow : ""}`}
              />
            ))}
          </div>
          <div
            className={`${s.mono} ${s.note} mt-1 flex justify-between`}
            aria-hidden
          >
            <span>{MIN}px</span>
            <span>{MAX}px</span>
          </div>
          <p id="hangul-map-caption" className={`${s.body} mt-3`}>
            {map
              ? `이 기기의 글꼴로 ${MIN}–${MAX}px를 1px씩 그려 보니, 생성된 그대로는 ${offCount}개 폭에서 단어가 끊겼고, 규칙을 더하면 ${onCount}개입니다.`
              : "이 기기의 글꼴로 폭마다 그려 보는 중입니다."}
          </p>
        </div>

        <div aria-live="polite" className={s.readout}>
          <p className={`${s.note} font-semibold`}>지금 이 화면에서</p>
          {broken ? (
            <p className={s.readoutBig} style={{ color: "var(--accent)" }}>
              ‘{wordOf(broken)}’{particle(wordOf(broken))} ‘{broken.head} /{" "}
              {broken.tail}’로 끊겼습니다
            </p>
          ) : (
            <p className={s.readoutBig}>끊긴 단어가 없습니다</p>
          )}
          <ol className={`${s.body} mt-3 space-y-1`}>
            {lines.map((l, i) => (
              <li key={i}>
                <span
                  className={`${s.num} font-semibold`}
                  style={{ color: "var(--fg)" }}
                >
                  {i + 1}줄
                </span>{" "}
                · {l}
              </li>
            ))}
          </ol>
        </div>

        <pre className={`${s.code} ${s.mono}`}>
          <code>
            {ruleOn
              ? "h1, h2, h3 {\n  word-break: keep-all;\n  overflow-wrap: anywhere;\n}"
              : "/* 생성된 그대로: word-break: normal */"}
          </code>
        </pre>

        {children}
      </div>

      {/* Offscreen probe for the break map */}
      <div
        aria-hidden
        className="pointer-events-none invisible fixed left-0 top-0 h-0 w-0 overflow-hidden"
      >
        <div
          ref={probeRef}
          className={s.phone}
          style={{ width: DEFAULT_WIDTH }}
        >
          <MetricsCard h2Ref={probeH2Ref} />
        </div>
      </div>
    </div>
  );
}
