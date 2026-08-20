/**
 * Harbor Membership design system.
 * Nested theme object is the source of truth; applyTheme() mirrors every
 * leaf onto :root as --group-key CSS custom properties (kebab-case).
 * styles.css declares the same tokens so first paint matches JS.
 */
export const theme = {
  name: "harbor-membership",
  color: {
    primary: "#115E59",
    onPrimary: "#FFFFFF",
    primaryHover: "#0F4F4B",
    secondary: "#334155",
    onSecondary: "#F8FAFC",
    accent: "#0E7490",
    onAccent: "#FFFFFF",
    background: "#E4EEF2",
    foreground: "#122033",
    muted: "#D7E4EA",
    mutedForeground: "#3D5160",
    card: "rgba(255, 255, 255, 0.78)",
    cardSolid: "#F7FBFC",
    cardSelected: "rgba(240, 253, 250, 0.92)",
    cardForeground: "#122033",
    border: "rgba(18, 32, 51, 0.12)",
    borderStrong: "rgba(17, 94, 89, 0.45)",
    glassBorder: "rgba(255, 255, 255, 0.55)",
    destructive: "#B91C1C",
    onDestructive: "#FFFFFF",
    ring: "#115E59",
    ringOffset: "#E4EEF2",
    success: "#0F766E",
    warning: "#B45309",
    overlay: "rgba(18, 32, 51, 0.08)",
    sample: "#7C2D12",
    sampleSurface: "#FFF7ED",
  },
  space: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
  },
  font: {
    family:
      "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif",
    sizeXs: "0.75rem",
    sizeSm: "0.875rem",
    sizeMd: "1rem",
    sizeLg: "1.125rem",
    sizeXl: "1.25rem",
    size2xl: "1.5rem",
    size3xl: "2rem",
    size4xl: "2.5rem",
    weightRegular: "400",
    weightMedium: "500",
    weightSemibold: "600",
    weightBold: "700",
    leadingTight: "1.25",
    leadingBody: "1.6",
    trackingTight: "-0.02em",
    trackingWide: "0.06em",
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    full: "999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(18, 32, 51, 0.06)",
    md: "0 8px 20px rgba(18, 32, 51, 0.08)",
    lg: "0 16px 32px rgba(18, 32, 51, 0.12)",
    xl: "0 24px 48px rgba(18, 32, 51, 0.16)",
    selected: "0 12px 28px rgba(17, 94, 89, 0.18)",
    focus: "0 0 0 3px var(--color-ring-offset), 0 0 0 6px var(--color-ring)",
  },
  motion: {
    durationHover: "180ms",
    durationPress: "150ms",
    durationSelect: "220ms",
    easingOut: "cubic-bezier(0.16, 1, 0.3, 1)",
    easingIn: "cubic-bezier(0.4, 0, 1, 1)",
    easingStandard: "cubic-bezier(0.2, 0, 0, 1)",
    scalePress: "0.985",
    liftHover: "-4px",
  },
  effect: {
    blur: "16px",
    blurStrong: "22px",
  },
  z: {
    base: "0",
    raised: "10",
    sticky: "20",
    skip: "100",
  },
  size: {
    tap: "48px",
    container: "72rem",
    summary: "20.5rem",
  },
};

function kebab(key) {
  return String(key)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([a-zA-Z])(\d)/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();
}

export function toCssVars(node, prefix = "") {
  const vars = {};
  for (const [key, value] of Object.entries(node)) {
    if (key === "name") continue;
    const path = prefix ? `${prefix}-${kebab(key)}` : kebab(key);
    if (value && typeof value === "object" && !Array.isArray(value)) {
      Object.assign(vars, toCssVars(value, path));
    } else if (value != null) {
      vars[`--${path}`] = String(value);
    }
  }
  return vars;
}

export const cssVariables = toCssVars(theme);

export function applyTheme(root = document.documentElement) {
  for (const [name, value] of Object.entries(cssVariables)) {
    root.style.setProperty(name, value);
  }
  root.dataset.theme = theme.name;
}

export default theme;
