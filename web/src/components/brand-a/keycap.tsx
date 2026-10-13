import type { CSSProperties } from "react";
import type { CapData } from "@/lib/landing-a/types";
import "./keys.css";

/** WCAG relative luminance contrast. */
function lum(h: string) {
  const v = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
}
export function contrast(a: string, b: string) {
  const x = lum(a), y = lum(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
/** Ink on a flat colour: whichever of ink/white reads better. */
export function onColor(c: string) {
  return contrast(c, "#15161a") >= contrast(c, "#ffffff") ? "#15161a" : "#ffffff";
}
/** Legend on a 3D cap: biased to a light legend (large single glyphs read at 3:1). */
export function legendOn(hex: string | null) {
  if (!hex) return "#15161a";
  return contrast(hex, "#ffffff") >= 0.75 * contrast(hex, "#15161a") ? "#ffffff" : "#15161a";
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
