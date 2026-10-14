import type { CSSProperties } from "react";
import type { CapData } from "@/lib/landing-a/types";
import "./keys.css";

import { contrast, legendOn } from "@/lib/landing-a/contrast";

export { contrast, legendOn };

/** Ink on a flat colour: whichever of ink/white reads better. */
export function onColor(c: string) {
  return contrast(c, "#15161a") >= contrast(c, "#ffffff") ? "#15161a" : "#ffffff";
}

export function glyphClass(g: string) {
  return /^\d/.test(g) ? "sq-dg" : /[぀-ヿ㐀-鿿가-힣]/.test(g) ? "" : "sq-lat";
}

/** CSS keycap (region keys + mini keys). Colour, radius and legend weight only from claimed tokens. */
export type KeycapFace = Pick<CapData, "g" | "gLang" | "c" | "hex" | "rv" | "w">;

export function CssKeycap({ d }: { d: KeycapFace }) {
  const style: Record<string, string | number> = {};
  if (d.hex) {
    style["--c"] = d.hex;
    style["--on"] = onColor(d.hex);
  }
  if (d.rv != null) style["--r"] = `${Math.min(d.rv, 24)}px`;
  if (d.w != null) style["--w"] = d.w;
  return (
    <span className={`sq-key${d.hex ? "" : " sq-blank"}`} style={style as CSSProperties} aria-hidden="true">
      <span className="sq-kc">
        <span className="sq-kt">
          <span className={`sq-lg ${glyphClass(d.g)}`} lang={d.gLang}>{d.g}</span>
          <span className="sq-kcc">{d.c}</span>
        </span>
      </span>
    </span>
  );
}
