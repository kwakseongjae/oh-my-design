import type { HangulAssets } from "@/lib/hangul/assets";
import { fill, type HangulCopy } from "./copy";

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
        <h2 id="hg-compare-h" className="hg-d">{beforeAfter ? t.shotsH2 : t.videoH2}</h2>
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
