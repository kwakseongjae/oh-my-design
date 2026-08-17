/**
 * Project design system. CSS custom properties in css/styles.css
 * mirror these values 1:1 (same names after flattening).
 */
export const theme = {
  color: {
    mist: "#E4EBEF",
    paper: "#F7F8F6",
    ink: "#14191C",
    inkSoft: "#3D4A50",
    lagoon: "#2A6F78",
    slate: "#243044",
    mineral: "#5C4E86",
    line: "#C5D0D3",
    lineHover: "#9AADB3",
    lift: "rgba(36, 48, 68, 0.16)",
    sample: "#5A4314",
    sampleWash: "#EFE2BE",
    night: "#152033",
    paperSelected: "#FCFDFC",
    horizon: "#D5E0E4",
  },
  type: {
    display:
      '"Didot", "Bodoni 72", "Bodoni MT", "Liberation Serif", Garamond, Georgia, serif',
    body: '"Avenir Next", Avenir, "Century Gothic", "Gill Sans", "Segoe UI", "Helvetica Neue", sans-serif',
    mono: 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace',
  },
  space: {
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.5rem",
    6: "2rem",
    7: "3rem",
    8: "4.5rem",
  },
  font: {
    sizeEyebrow: "0.72rem",
    sizeBody: "1.05rem",
    sizeLead: "1.15rem",
    sizePlan: "clamp(1.85rem, 3vw, 2.55rem)",
    sizeDisplay: "clamp(2.5rem, 6.4vw, 4.6rem)",
    sizeMeta: "0.82rem",
    trackingEyebrow: "0.14em",
    trackingDisplay: "-0.028em",
    leadingBody: "1.55",
    leadingDisplay: "0.92",
  },
  radius: {
    sm: "2px",
    md: "8px",
  },
  shadow: {
    lift: "0 18px 40px -18px var(--color-lift)",
    press: "0 6px 16px -12px var(--color-lift)",
  },
  motion: {
    durationPress: "90ms",
    durationHover: "180ms",
    durationSelect: "280ms",
    easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
    easePress: "cubic-bezier(0.4, 0, 1, 1)",
  },
};

function kebab(key) {
  return key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}

export function themeToVars(node = theme, prefix = "") {
  const vars = {};
  for (const [key, value] of Object.entries(node)) {
    const name = prefix ? `${prefix}-${kebab(key)}` : kebab(key);
    if (value && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(vars, themeToVars(value, name));
    } else {
      vars[`--${name}`] = String(value);
    }
  }
  return vars;
}

export function applyTheme() {
  const vars = themeToVars(theme);
  const declarations = Object.entries(vars)
    .map(([prop, value]) => `  ${prop}: ${value};`)
    .join("\n");
  let tag = document.getElementById("theme-properties");
  if (!tag) {
    tag = document.createElement("style");
    tag.id = "theme-properties";
    document.head.appendChild(tag);
  }
  tag.textContent = `:root {\n${declarations}\n}
@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-duration-press: 0.01ms;
    --motion-duration-hover: 0.01ms;
    --motion-duration-select: 0.01ms;
  }
}`;
  return vars;
}
