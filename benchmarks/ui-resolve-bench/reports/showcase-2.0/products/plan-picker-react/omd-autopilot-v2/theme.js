export const theme = {
  color: {
    canvas: "#eef4f6",
    surface: "#ffffff",
    ink: "#102033",
    inkMuted: "#3d5163",
    accent: "#0f6e73",
    onAccent: "#ffffff",
    accentSoft: "#d7eef0",
    border: "#c5d4db",
    danger: "#8b1e2d",
    dangerBg: "#fdecee",
    success: "#14532d",
    successBg: "#e8f6ee",
    disabledInk: "#3a4a55",
    disabledBg: "#eef2f5",
  },
  space: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  radius: {
    control: "12px",
    card: "20px",
  },
  motion: {
    durationFast: "120ms",
    durationBase: "200ms",
    durationSlow: "320ms",
    easingEnter: "cubic-bezier(0.16, 1, 0.3, 1)",
    easingExit: "cubic-bezier(0.4, 0, 1, 1)",
  },
  type: {
    familySans: 'system-ui, "Segoe UI", sans-serif',
  },
};

const cssVarMap = {
  "color-canvas": theme.color.canvas,
  "color-surface": theme.color.surface,
  "color-ink": theme.color.ink,
  "color-ink-muted": theme.color.inkMuted,
  "color-accent": theme.color.accent,
  "color-on-accent": theme.color.onAccent,
  "color-accent-soft": theme.color.accentSoft,
  "color-border": theme.color.border,
  "color-danger": theme.color.danger,
  "color-danger-bg": theme.color.dangerBg,
  "color-success": theme.color.success,
  "color-success-bg": theme.color.successBg,
  "color-disabled-ink": theme.color.disabledInk,
  "color-disabled-bg": theme.color.disabledBg,
  "space-xs": theme.space.xs,
  "space-sm": theme.space.sm,
  "space-md": theme.space.md,
  "space-lg": theme.space.lg,
  "space-xl": theme.space.xl,
  "radius-control": theme.radius.control,
  "radius-card": theme.radius.card,
  "motion-duration-fast": theme.motion.durationFast,
  "motion-duration-base": theme.motion.durationBase,
  "motion-duration-slow": theme.motion.durationSlow,
  "motion-easing-enter": theme.motion.easingEnter,
  "motion-easing-exit": theme.motion.easingExit,
  "type-family-sans": theme.type.familySans,
};

export function applyTheme(root = document.documentElement) {
  for (const [name, value] of Object.entries(cssVarMap)) {
    root.style.setProperty(`--${name}`, value);
  }
}

export const cssVariables = cssVarMap;
