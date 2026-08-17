/**
 * Meridian Circle design tokens.
 * Source of truth for the project-owned system. applyTheme() projects
 * this object onto :root as CSS custom properties; styles.css mirrors
 * the same names and values so the sheet works before JS runs.
 */
export const theme = {
  color: {
    canvas: "#e7eef1",
    canvasDeep: "#d4e0e6",
    surface: "#f6f9fa",
    surfaceRaised: "#ffffff",
    ink: "#16202b",
    inkSoft: "#3c4c5b",
    inkMute: "#6a7b88",
    line: "#c3d1d9",
    lineStrong: "#96aab6",
    accent: "#2c6d74",
    accentSoft: "#d5ecec",
    accentDeep: "#1b4b52",
    indigo: "#3a3f6b",
    indigoSoft: "#e3e5f0",
    highlight: "#b08918",
    highlightSoft: "#f4ead0",
    focus: "#245f96",
    overlay: "rgba(22, 32, 43, 0.42)",
  },
  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
    7: "48px",
    8: "64px",
    9: "96px",
  },
  radius: {
    xs: "4px",
    sm: "8px",
    md: "14px",
    lg: "22px",
    xl: "32px",
    pill: "999px",
  },
  font: {
    display: '"Iowan Old Style", Palatino, "Palatino Linotype", "Times New Roman", serif',
    sans: '"Avenir Next", "Segoe UI", "Helvetica Neue", system-ui, sans-serif',
    mono: '"SF Mono", ui-monospace, Menlo, Consolas, monospace',
  },
  type: {
    eyebrow: "0.6875rem",
    small: "0.8125rem",
    body: "1rem",
    lead: "1.125rem",
    title: "clamp(1.65rem, 2.6vw, 2.25rem)",
    display: "clamp(2.1rem, 4.4vw, 3.15rem)",
    measure: "38rem",
  },
  shadow: {
    sm: "0 1px 2px rgba(22, 32, 43, 0.05)",
    md: "0 10px 28px rgba(22, 32, 43, 0.08)",
    lg: "0 20px 44px rgba(22, 32, 43, 0.12)",
  },
  motion: {
    duration: {
      instant: "80ms",
      fast: "140ms",
      med: "240ms",
      slow: "420ms",
    },
    easing: {
      standard: "cubic-bezier(0.2, 0, 0, 1)",
      emphasized: "cubic-bezier(0.22, 1, 0.36, 1)",
      exit: "cubic-bezier(0.4, 0, 1, 1)",
    },
    lift: "translateY(-6px)",
    press: "translateY(1px) scale(0.985)",
  },
  z: {
    base: "0",
    raised: "2",
    sticky: "10",
    overlay: "20",
  },
};

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

/** Flatten the theme tree into `--path-to-token` custom properties. */
export function tokensToVars(tree, prefix = "--") {
  const vars = {};
  const walk = (node, path) => {
    for (const [key, value] of Object.entries(node)) {
      const segment = String(key).replace(/[A-Z]/g, (ch) => `-${ch.toLowerCase()}`);
      const next = `${path}${segment}`;
      if (isPlainObject(value)) walk(value, `${next}-`);
      else vars[next] = String(value);
    }
  };
  walk(tree, prefix);
  return vars;
}

export function applyTheme(target = document.documentElement) {
  const vars = tokensToVars(theme);
  for (const [name, value] of Object.entries(vars)) {
    target.style.setProperty(name, value);
  }
  target.dataset.theme = "meridian";
}
