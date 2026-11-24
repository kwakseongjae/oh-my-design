"use client";

/**
 * The blog home's banner field: web/public/design.md, Asset: the blog field. A two-ink ordered dither
 * (Paper Shaders, vendored in src/vendor/paper-shaders) in color.paper and color.primary. Decorative
 * only: nothing to read sits on it. The CSS poster under the canvas shows until the canvas draws, then
 * hides, so its dots never show through the banner's rounded corner. Reduced motion holds a still
 * frame; the shader pauses itself off screen and in a hidden tab.
 */

import { useEffect, useRef, useState } from "react";

const INKS = { back: "#ffffff", front: "#6749e2" } as const;
const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).concat(1);

export function BlogField() {
  const scene = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = scene.current;
    if (!el) return;
    let disposed = false;
    let mount: { dispose: () => void } | undefined;
    (async () => {
      try {
        if (!document.createElement("canvas").getContext("webgl2")) return;
        const [{ ShaderMount }, { ditheringFragmentShader, DitheringShapes, DitheringTypes }] = await Promise.all([
          import("@/vendor/paper-shaders/shader-mount.js"),
          import("@/vendor/paper-shaders/shaders/dithering.js"),
        ]);
        if (disposed) return;
        const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
        const phone = matchMedia("(max-width: 900px)").matches;
        mount = new ShaderMount(
          el,
          ditheringFragmentShader,
          {
            u_colorBack: hex(INKS.back),
            u_colorFront: hex(INKS.front),
            u_shape: DitheringShapes.warp,
            u_type: DitheringTypes["4x4"],
            u_pxSize: 3,
            u_fit: 2,
            u_scale: 1,
            u_rotation: 0,
            u_offsetX: phone ? -0.2 : 0,
            u_offsetY: 0,
            u_originX: 0.5,
            u_originY: 0.5,
            u_worldWidth: 1280,
            u_worldHeight: 168,
          },
          undefined,
          still ? 0 : 0.1,
          8000,
        );
        requestAnimationFrame(() => requestAnimationFrame(() => !disposed && setLive(true)));
      } catch {
        // No WebGL2 or the shader failed: the poster stays.
      }
    })();
    return () => {
      disposed = true;
      mount?.dispose();
    };
  }, []);

  return (
    <div className="bh-field" data-live={live || undefined}>
      <div className="bh-field-scene" ref={scene} />
      <div className="bh-field-poster" />
    </div>
  );
}
