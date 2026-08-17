/**
 * Project design system. applyTheme() projects this object onto
 * mirrored CSS custom properties (--group-key).
 * Offline: no webfonts. Archivo-like grotesk via named system faces.
 */
export const theme = {
  color: {
    paper: "oklch(99% 0.003 255)",
    "paper-2": "oklch(97.2% 0.004 255)",
    "paper-3": "oklch(94.5% 0.006 255)",
    ink: "oklch(16% 0.010 255)",
    "ink-2": "oklch(28% 0.012 255)",
    muted: "oklch(38% 0.018 255)",
    rule: "oklch(88% 0.008 255)",
    "rule-2": "oklch(78% 0.010 255)",
    accent: "oklch(45% 0.19 264)",
    "accent-ink": "oklch(99% 0.003 255)",
    focus: "oklch(45% 0.19 264)",
    error: "oklch(46% 0.18 25)",
    success: "oklch(40% 0.11 155)",
    "plate-muted": "oklch(78% 0.014 255)",
  },
  font: {
    display:
      '"Avenir Next", "Futura", "Gill Sans", "Trebuchet MS", sans-serif',
    body: '"Avenir Next", "Futura", "Gill Sans", "Trebuchet MS", sans-serif',
    "display-weight": "800",
    "tracking-display": "-0.045em",
    "tracking-numeral": "-0.05em",
    "label-weight": "600",
    "label-tracking": "0.09em",
  },
  space: {
    px: "1px",
    "3xs": "0.125rem",
    "2xs": "0.25rem",
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2.5rem",
    "2xl": "4rem",
    "3xl": "6rem",
    "4xl": "9rem",
    page: "clamp(1rem, 4vw, 2.5rem)",
  },
  text: {
    xs: "0.75rem",
    sm: "0.8125rem",
    base: "1rem",
    md: "1.25rem",
    lg: "1.5625rem",
    xl: "1.9531rem",
    "2xl": "2.4414rem",
    "3xl": "3.0518rem",
    display: "clamp(2.75rem, 5vw + 1rem, 5.25rem)",
    "display-s": "clamp(2rem, 4vw + 0.5rem, 3.25rem)",
    label: "0.75rem",
    numeral: "clamp(7.5rem, 22vw, 20rem)",
  },
  ease: {
    out: "cubic-bezier(0.16, 1, 0.3, 1)",
    in: "cubic-bezier(0.7, 0, 0.84, 0)",
    "in-out": "cubic-bezier(0.65, 0, 0.35, 1)",
  },
  dur: {
    micro: "120ms",
    short: "220ms",
    long: "420ms",
  },
  radius: {
    none: "0",
    card: "0",
  },
  rule: {
    hairline: "1px",
    ink: "2px",
    bar: "3px",
  },
  z: {
    base: "1",
    raised: "10",
    dropdown: "100",
    sticky: "200",
    modal: "400",
    toast: "500",
    tooltip: "600",
  },
  lh: {
    display: "1.02",
    body: "1.5",
    tight: "1.15",
    numeral: "0.8",
  },
  measure: {
    body: "65ch",
    statement: "48ch",
    colophon: "72ch",
  },
  size: {
    hit: "2.75rem",
    "hit-coarse": "3rem",
    shell: "80rem",
    period: "0.52em",
  },
};

export function toCssVars(source = theme) {
  const vars = {};
  function walk(node, prefix) {
    for (const [key, value] of Object.entries(node)) {
      if (value && typeof value === "object" && !Array.isArray(value)) {
        walk(value, `${prefix}${key}-`);
      } else {
        vars[`--${prefix}${key}`] = String(value);
      }
    }
  }
  walk(source, "");
  return vars;
}

export function applyTheme(source = theme, root = document.documentElement) {
  const vars = toCssVars(source);
  for (const [name, value] of Object.entries(vars)) {
    root.style.setProperty(name, value);
  }
  return vars;
}
