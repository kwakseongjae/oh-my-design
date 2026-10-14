/** WCAG relative luminance and contrast (shared by the keycaps and the build-time cap resolver). */
function lum(h: string) {
  const v = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
}
export function contrast(a: string, b: string) {
  const x = lum(a), y = lum(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}
/** Legend on a 3D cap: biased to a light legend (large single glyphs read at 3:1). */
export function legendOn(hex: string | null) {
  if (!hex) return "#15161a";
  return contrast(hex, "#ffffff") >= 0.75 * contrast(hex, "#15161a") ? "#ffffff" : "#15161a";
}
