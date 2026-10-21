import type { HangulAssets } from "@/lib/hangul/assets";
import { fill, type HangulCopy } from "./copy";

/** −0.03 → "−0.03em", 0 → "0" (a real minus sign, as the rest of the page writes it). */
export function fmtEm(v: number): string {
  if (v === 0) return "0";
  return `${v < 0 ? "−" : ""}${Math.abs(v)}em`;
}

/** One screenshot, linked to its full-size file (on a phone the desktop pair is thumbnail-sized). */
function Shot({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  return (
    <a className="hg-shot-a" href={src}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static files from public/hangul, sized by the asset contract */}
      <img className="hg-shot-img" src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
    </a>
  );
}

/**
 * The launch content (docs/HANGUL_LAUNCH_PLAN_2026-10-21.md H3): the same eval page before and
 * after /hangul, the side-by-side scroll video, and the measured-67 data card. The content stream
 * fills web/src/data/hangul-assets.json; each block renders only when its entry is there, and a
 * section with no entries renders nothing at all. Never a placeholder.
 */
export function CompareSection({ assets, t, band }: { assets: HangulAssets; t: HangulCopy["assets"]; band: boolean }) {
  const { beforeAfter, video } = assets;
  if (!beforeAfter && !video) return null;
  return (
    <section id="compare" className={`hg-sec${band ? " hg-band" : ""}`} aria-labelledby="hg-compare-h">
      <div className="sq-wrap">
        <h2 id="hg-compare-h">{beforeAfter ? t.shotsH2 : t.videoH2}</h2>
        {beforeAfter ? (
          <>
            <p className="hg-intro">{fill(t.shotsCaption, { source: beforeAfter.source })}</p>
            <div className="hg-shots">
              {(["desktop", "phone"] as const).map((k) => {
                const pair = beforeAfter[k];
                return (
                  <figure key={k} className={`hg-shot hg-shot--${k}`}>
                    <figcaption className="hg-shot-k">{k === "desktop" ? t.desktop : t.phone}</figcaption>
                    <div className="hg-shot-pair">
                      {(["before", "after"] as const).map((side) => (
                        <div key={side} className="hg-shot-side">
                          <p className="hg-shot-l">{side === "before" ? t.before : t.after}</p>
                          <Shot
                            src={pair[side]}
                            alt={`${k === "desktop" ? t.desktop : t.phone} · ${side === "before" ? t.before : t.after}`}
                            width={pair.width}
                            height={pair.height}
                          />
                        </div>
                      ))}
                    </div>
                  </figure>
                );
              })}
            </div>
          </>
        ) : null}
        {video ? (
          <figure className="hg-video">
            {beforeAfter ? <h3 className="hg-video-h">{t.videoH2}</h3> : null}
            <video
              className="hg-video-el"
              controls
              muted
              playsInline
              preload="none"
              poster={video.poster}
              width={video.width}
              height={video.height}
            >
              <source src={video.mp4} type="video/mp4" />
            </video>
            <figcaption className="hg-video-c">
              {fill(t.videoCaption, { seconds: Math.round(video.seconds) })}
              {video.gif ? (
                <>
                  {" "}
                  <a className="hg-link" href={video.gif}>{t.gif}</a>
                </>
              ) : null}
            </figcaption>
          </figure>
        ) : null}
      </div>
    </section>
  );
}

export function MeasuredSection({ assets, t, band }: { assets: HangulAssets; t: HangulCopy["assets"]; band: boolean }) {
  const m = assets.measured;
  if (!m) return null;
  // Body line-height shows its interquartile range, never min–max: measured-67.md says its extremes
  // are single-line UI text sized by height (1.0) and fixed-pixel values (4.571), not paragraph
  // line-height (contract doc in lib/hangul/assets.ts). Spreads without an IQR keep min–max.
  const stats = [
    { k: t.bodyLineHeight, v: m.bodyLineHeight, f: (x: number) => x.toFixed(2).replace(/0$/, ""), iqrOnly: true },
    { k: t.bodyLetterSpacing, v: m.bodyLetterSpacingEm, f: fmtEm, iqrOnly: false },
    { k: t.headingLetterSpacing, v: m.headingLetterSpacingEm, f: fmtEm, iqrOnly: false },
  ];
  const top = Math.max(1, ...m.topFonts.map((x) => x.count));
  return (
    <section id="measured" className={`hg-sec${band ? " hg-band" : ""}`} aria-labelledby="hg-measured-h">
      <div className="sq-wrap">
        <h2 id="hg-measured-h">{fill(t.measuredH2, { services: m.services })}</h2>
        <p className="hg-intro">{fill(t.measuredSub, { date: m.date })}</p>
        <div className="hg-mcard">
          <dl className="hg-mstats">
            {stats.map((s) => (
              <div key={s.k} className="hg-mstat">
                <dt>{s.k}</dt>
                <dd>
                  <span className="hg-mstat-v hg-num">{s.f(s.v.median)}</span>
                  {s.v.iqr && s.v.iqr.length === 2 ? (
                    <span className="hg-mstat-r">
                      {t.median} · {t.iqr} <span className="hg-num">{s.f(s.v.iqr[0])} – {s.f(s.v.iqr[1])}</span>
                    </span>
                  ) : s.iqrOnly ? (
                    <span className="hg-mstat-r">{t.median}</span>
                  ) : (
                    <span className="hg-mstat-r">
                      {t.median} · {t.range} <span className="hg-num">{s.f(s.v.min)} – {s.f(s.v.max)}</span>
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          {m.topFonts.length > 0 ? (
            <div className="hg-fonts">
              <p className="hg-fonts-h">{t.fonts}</p>
              <ol className="hg-fonts-list">
                {m.topFonts.map((f) => (
                  <li key={f.family} className="hg-font">
                    <span className="hg-font-name" lang="en">{f.family}</span>
                    <span className="hg-font-bar" aria-hidden="true">
                      <span style={{ width: `${(f.count / top) * 100}%` }} />
                    </span>
                    <span className="hg-font-n hg-num">{fill(t.fontCount, { count: f.count })}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
