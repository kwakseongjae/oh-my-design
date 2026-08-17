/**
 * Ledge design system (project-owned).
 * Not an official third-party kit. This object is the source of truth
 * and is mirrored onto CSS custom properties via applyTheme().
 */
export const theme = {
  fonts: {
    sans: '"Avenir Next", "Segoe UI Variable Text", "Segoe UI", "Helvetica Neue", sans-serif',
    display: '"Avenir Next", "Segoe UI Variable Display", "Segoe UI", "Helvetica Neue", sans-serif',
    mono: '"SFMono-Regular", "SF Mono", "ui-monospace", "Menlo", "Consolas", monospace',
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.375rem",
    display: "clamp(2rem, 3.4vw, 2.85rem)",
  },
  leading: {
    tight: "1.15",
    display: "1.12",
    body: "1.6",
  },
  tracking: {
    display: "-0.032em",
    label: "0.14em",
    mono: "0.01em",
  },
  space: {
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "24px",
    6: "32px",
    7: "48px",
    8: "64px",
    page: "clamp(20px, 4vw, 48px)",
  },
  radius: {
    sm: "6px",
    md: "12px",
    lg: "18px",
    pill: "999px",
  },
  z: {
    base: "0",
    sticky: "10",
    nav: "20",
  },
  motion: {
    durationFast: "140ms",
    duration: "240ms",
    durationSlow: "380ms",
    ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    pressScale: "0.985",
    hoverLift: "-2px",
  },
  motionReduced: {
    durationFast: "0.01ms",
    duration: "0.01ms",
    durationSlow: "0.01ms",
    ease: "linear",
    pressScale: "1",
    hoverLift: "0px",
  },
  light: {
    bg: "#d7e2e6",
    bgDeep: "#cbd8dd",
    surface: "#e8eef1",
    surfaceRaised: "#f5f8f9",
    ink: "#1a262c",
    inkMuted: "#3a4b52",
    inkFaint: "#4a5d64",
    line: "#b4c3c9",
    accent: "#2a6a66",
    accentHover: "#245c59",
    accentSoft: "#c9dddb",
    accentInk: "#f3f8f8",
    selectedBg: "#1d3c41",
    selectedInk: "#eef6f5",
    selectedMuted: "#c5d9d6",
    shadow: "rgba(26, 50, 58, 0.14)",
    artWell: "#c8d6d8",
    focus: "#2a6a66",
  },
  dark: {
    bg: "#13191c",
    bgDeep: "#0f1417",
    surface: "#1b2327",
    surfaceRaised: "#232c31",
    ink: "#e6eef0",
    inkMuted: "#b4c1c5",
    inkFaint: "#8d9ca1",
    line: "#334046",
    accent: "#5ea8a2",
    accentHover: "#6fb6b0",
    accentSoft: "#1c3333",
    accentInk: "#101716",
    selectedBg: "#2a6a66",
    selectedInk: "#f2fafa",
    selectedMuted: "#d2e6e3",
    shadow: "rgba(8, 14, 16, 0.45)",
    artWell: "#1a262a",
    focus: "#7ec4be",
  },
};

export function flattenTokens(map, prefix = "") {
  const out = {};
  for (const [key, value] of Object.entries(map)) {
    const token = prefix ? `${prefix}-${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(out, flattenTokens(value, token));
    } else {
      out[`--${token}`] = String(value);
    }
  }
  return out;
}

export function themeVars(scheme, reduceMotion) {
  const colors = scheme === "dark" ? theme.dark : theme.light;
  const motion = reduceMotion ? theme.motionReduced : theme.motion;
  return {
    ...flattenTokens(colors, "color"),
    ...flattenTokens(theme.fonts, "font"),
    ...flattenTokens(theme.fontSize, "font-size"),
    ...flattenTokens(theme.leading, "leading"),
    ...flattenTokens(theme.tracking, "tracking"),
    ...flattenTokens(theme.space, "space"),
    ...flattenTokens(theme.radius, "radius"),
    ...flattenTokens(motion, "motion"),
    ...flattenTokens(theme.z, "z"),
  };
}

export function applyTheme(root, scheme, reduceMotion) {
  const vars = themeVars(scheme, reduceMotion);
  for (const [prop, value] of Object.entries(vars)) {
    root.style.setProperty(prop, value);
  }
  root.dataset.theme = scheme;
  root.style.colorScheme = scheme;
}

export function getSystemScheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function getStoredScheme() {
  try {
    const stored = localStorage.getItem("ledge-theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* private mode */
  }
  return null;
}

export function storeScheme(scheme) {
  try {
    localStorage.setItem("ledge-theme", scheme);
  } catch {
    /* private mode */
  }
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
