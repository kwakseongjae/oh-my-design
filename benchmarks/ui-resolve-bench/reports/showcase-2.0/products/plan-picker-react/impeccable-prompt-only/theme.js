/**
 * Meridian Rooms design tokens.
 * Project-owned theme object. styles.css :root mirrors these custom properties.
 */
export const theme = {
  color: {
    blotter: "#1a2340",
    blotterLift: "#243154",
    window: "#d5e4e8",
    ice: "#eef4f5",
    paper: "#e4ecee",
    paperEdge: "#c5d3d7",
    ink: "#12182a",
    inkSoft: "#c9d7db",
    stamp: "#2c6b70",
    stampDeep: "#1e4d52",
    brass: "#b08a4a",
    brassDeep: "#8a6a34",
    focus: "#d4b36a",
    rule: "rgba(228, 236, 238, 0.14)",
  },
  space: {
    2: "0.25rem",
    4: "0.5rem",
    8: "1rem",
    12: "1.5rem",
    16: "2rem",
    20: "2.5rem",
    24: "3rem",
    32: "4rem",
    40: "5rem",
    48: "6rem",
  },
  font: {
    display:
      'Palatino, "Palatino Linotype", "Iowan Old Style", "Book Antiqua", Georgia, serif',
    label:
      '"Avenir Next", "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
    measure: 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace',
  },
  size: {
    display: "clamp(2.25rem, 5vw, 3.5rem)",
    folio: "clamp(1.75rem, 3vw, 2.25rem)",
    title: "clamp(1.375rem, 2.2vw, 1.75rem)",
    body: "1.0625rem",
    mark: "0.875rem",
    label: "0.8125rem",
  },
  leading: {
    display: "1.05",
    folio: "1.12",
    title: "1.15",
    body: "1.5",
    mark: "1.35",
  },
  tracking: {
    display: "-0.02em",
    title: "-0.015em",
    label: "0.04em",
    mark: "0.01em",
  },
  weight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
  radius: {
    paper: "2px",
    stamp: "50%",
    focus: "2px",
  },
  shadow: {
    card: "0 12px 28px rgba(10, 14, 28, 0.38)",
    cardHover: "0 18px 36px rgba(10, 14, 28, 0.46)",
    cardPressed: "0 4px 12px rgba(10, 14, 28, 0.3)",
    folio: "0 16px 32px rgba(10, 14, 28, 0.32)",
  },
  motion: {
    duration: {
      hover: "220ms",
      press: "140ms",
      select: "340ms",
      folio: "280ms",
    },
    ease: {
      out: "cubic-bezier(0.16, 1, 0.3, 1)",
      press: "cubic-bezier(0.4, 0, 0.2, 1)",
    },
  },
  line: {
    hair: "1px",
    stamp: "2px",
    focus: "2px",
  },
  z: {
    card: "2",
    selected: "4",
    folio: "3",
    stamp: "5",
  },
};

export function themeToVars(node = theme, parts = []) {
  const vars = {};
  if (node && typeof node === "object") {
    for (const [key, value] of Object.entries(node)) {
      Object.assign(vars, themeToVars(value, [...parts, key]));
    }
    return vars;
  }
  vars[`--${parts.join("-")}`] = String(node);
  return vars;
}

export function applyTheme(root = document.documentElement) {
  const vars = themeToVars();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    vars["--motion-duration-hover"] = "1ms";
    vars["--motion-duration-press"] = "1ms";
    vars["--motion-duration-select"] = "1ms";
    vars["--motion-duration-folio"] = "1ms";
  }
  for (const [name, value] of Object.entries(vars)) {
    root.style.setProperty(name, value);
  }
  return vars;
}
