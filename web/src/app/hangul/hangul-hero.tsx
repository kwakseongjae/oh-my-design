"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import s from "./hangul.module.css";
import { findWordBreaks, renderedLines, type WordBreak } from "./word-breaks";

const MIN = 320;
const MAX = 430;
const DEFAULT_WIDTH = 360;

/** The eval page's metrics card (codex p1-A-r3, no skill), markup as generated.
 *  "사람들이모아와" has no space in the original: the page hides the <br> at ≤680px. */
export function MetricsCard({ h2Ref }: { h2Ref?: React.Ref<HTMLHeadingElement> }) {
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

export function HangulHero() {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [ruleOn, setRuleOn] = useState(false);
  const [scale, setScale] = useState(1);
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
    const fit = () => setScale(Math.min(1, host.clientWidth / width));
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
    <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
      {/* Specimen */}
      <div>
        <div
          ref={hostRef}
          className="relative w-full overflow-hidden rounded-[20px] border border-border bg-muted"
          style={{ height: frameH ?? undefined }}
          data-hangul-specimen="hg10-hero"
        >
          <div
            ref={frameRef}
            className={`${s.phone} ${ruleOn ? s.ruleOn : ""}`}
            style={{ width, transform: `scale(${scale})`, transformOrigin: "top left", marginInline: scale === 1 ? "auto" : 0 }}
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
        <p className="mt-2 text-xs text-muted-foreground">
          실제 DOM 텍스트입니다. {scale < 1 ? `${width}px 화면을 ${Math.round(scale * 100)}%로 줄여 보여 줍니다. 줄바꿈은 ${width}px 그대로입니다.` : `${width}px 화면을 그대로 그립니다.`}
        </p>
      </div>

      {/* Controls + live readout */}
      <div className="flex flex-col gap-6">
        <div role="group" aria-label="/hangul 규칙" className="grid grid-cols-2 gap-1 rounded-xl border border-border bg-muted p-1">
          {[
            { on: false, label: "생성된 그대로" },
            { on: true, label: "규칙 한 줄 추가" },
          ].map((o) => (
            <button
              key={String(o.on)}
              type="button"
              aria-pressed={ruleOn === o.on}
              onClick={() => setRuleOn(o.on)}
              className={`min-h-11 rounded-lg px-3 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-ring motion-safe:transition-colors ${
                ruleOn === o.on ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>

        <div>
          <label htmlFor="hangul-width" className="flex items-baseline justify-between text-sm font-semibold">
            <span>폰 화면 폭</span>
            <span className={`${s.num} text-base`}>{width}px</span>
          </label>
          <input
            id="hangul-width"
            type="range"
            min={MIN}
            max={MAX}
            step={1}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            className="mt-2 h-11 w-full cursor-pointer accent-[var(--primary)]"
            aria-describedby="hangul-map-caption"
          />
          {/* Break map */}
          <div className="relative mt-1 flex h-6 w-full items-stretch gap-px" aria-hidden>
            {(map ? (ruleOn ? map.on : map.off) : Array.from({ length: MAX - MIN + 1 }, () => false)).map((b, i) => (
              <span
                key={i}
                className={`flex-1 rounded-[1px] ${b ? "bg-destructive" : "bg-border"} ${MIN + i === width ? "outline outline-2 outline-foreground" : ""}`}
              />
            ))}
          </div>
          <div className={`${s.num} mt-1 flex justify-between text-xs text-muted-foreground`} aria-hidden>
            <span>{MIN}px</span>
            <span>{MAX}px</span>
          </div>
          <p id="hangul-map-caption" className="mt-2 text-sm text-muted-foreground">
            {map
              ? `이 기기의 글꼴로 ${MIN}–${MAX}px를 1px씩 그려 보니, 생성된 그대로는 ${offCount}개 폭에서 단어가 끊겼고, 규칙을 더하면 ${onCount}개입니다.`
              : "이 기기의 글꼴로 폭마다 그려 보는 중입니다."}
          </p>
        </div>

        <div aria-live="polite" className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs font-semibold text-muted-foreground">지금 이 화면에서</p>
          {broken ? (
            <p className="mt-1 text-lg font-bold text-destructive">
              ‘{wordOf(broken)}’{particle(wordOf(broken))} ‘{broken.head} / {broken.tail}’로 끊겼습니다
            </p>
          ) : (
            <p className="mt-1 text-lg font-bold">끊긴 단어가 없습니다</p>
          )}
          <ol className="mt-2 space-y-0.5 text-sm text-muted-foreground">
            {lines.map((l, i) => (
              <li key={i}>
                <span className={s.num}>{i + 1}줄</span> · {l}
              </li>
            ))}
          </ol>
        </div>

        <pre className="overflow-x-auto rounded-xl bg-foreground px-4 py-3 text-[13px] leading-[1.5] text-background">
          <code>
            {ruleOn ? "h1, h2, h3 {\n  word-break: keep-all;\n  overflow-wrap: anywhere;\n}" : "/* 생성된 그대로: word-break: normal */"}
          </code>
        </pre>
      </div>

      {/* Offscreen probe for the break map */}
      <div aria-hidden className="pointer-events-none invisible fixed left-0 top-0 h-0 w-0 overflow-hidden">
        <div ref={probeRef} className={s.phone} style={{ width: DEFAULT_WIDTH }}>
          <MetricsCard h2Ref={probeH2Ref} />
        </div>
      </div>
    </div>
  );
}
