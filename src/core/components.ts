import type { ComponentName, ComponentTokens, DesignTokens } from './types.js';

type ComponentGenerator = (tokens: DesignTokens) => ComponentTokens;

const COMPONENT_TITLES: Record<ComponentName, string> = {
  button: 'Button',
  card: 'Card',
  dialog: 'Dialog / Modal',
  dropdown: 'Dropdown Menu',
  table: 'Table',
  input: 'Input / Form Field',
  navigation: 'Navigation / Sidebar',
  badge: 'Badge / Tag',
  'floating-button': 'Floating Action Button',
  toast: 'Toast / Notification',
  tabs: 'Tabs',
  select: 'Select',
};

const generators: Record<ComponentName, ComponentGenerator> = {
  button: (t) => ({
    description: 'Primary interaction element. Use clear, action-oriented labels.',
    variants: {
      default: { background: t.colors.primary.base, foreground: t.colors.primary.foreground, radius: t.radius.md },
      secondary: { background: t.colors.secondary.base, foreground: t.colors.secondary.foreground, border: t.colors.border, radius: t.radius.md },
      outline: { background: 'transparent', foreground: t.colors.foreground, border: t.colors.border, radius: t.radius.md },
      ghost: { background: 'transparent', foreground: t.colors.foreground, radius: t.radius.md },
      destructive: { background: t.colors.destructive.base, foreground: t.colors.destructive.foreground, radius: t.radius.md },
    },
    states: {
      hover: 'Reduce opacity to 90% or shift background 1 stop darker',
      active: 'Scale down to 98% and shift background 2 stops darker',
      focus: `Ring 2px offset-2 using ring color (${t.colors.ring})`,
      disabled: 'Opacity 50%, pointer-events none',
    },
    sizes: {
      sm: { height: '32px', padding: t.spacing.componentPadding.sm, fontSize: t.typography.scale.sm },
      md: { height: '40px', padding: t.spacing.componentPadding.md, fontSize: t.typography.scale.sm },
      lg: { height: '48px', padding: t.spacing.componentPadding.lg, fontSize: t.typography.scale.base },
    },
  }),

  card: (t) => ({
    description: 'Container for grouped content. Provides visual separation from the page background.',
    variants: {
      default: { background: t.colors.card.base, foreground: t.colors.card.foreground, border: t.colors.border, shadow: t.shadows.sm, radius: t.radius.lg },
      elevated: { background: t.colors.card.base, foreground: t.colors.card.foreground, shadow: t.shadows.md, radius: t.radius.lg },
      outline: { background: 'transparent', foreground: t.colors.foreground, border: t.colors.border, radius: t.radius.lg },
    },
    states: {
      hover: 'Shift shadow up one level (sm → md) for interactive cards',
    },
  }),

  dialog: (t) => ({
    description: 'Modal overlay for focused interactions. Always includes a backdrop.',
    variants: {
      default: { background: t.colors.card.base, foreground: t.colors.card.foreground, shadow: t.shadows.xl, radius: t.radius.lg },
    },
    states: {
      hover: 'N/A',
      focus: 'Trap focus within the dialog. Highlight focusable elements with ring.',
    },
  }),

  dropdown: (t) => ({
    description: 'Contextual menu triggered by a button or right-click.',
    variants: {
      default: { background: t.colors.popover.base, foreground: t.colors.popover.foreground, border: t.colors.border, shadow: t.shadows.lg, radius: t.radius.md },
    },
    states: {
      hover: `Item background shifts to accent (${t.colors.accent.base})`,
      focus: `Item receives subtle background tint and focus ring`,
    },
    sizes: {
      item: { height: '32px', padding: t.spacing.componentPadding.sm, fontSize: t.typography.scale.sm },
    },
  }),

  table: (t) => ({
    description: 'Data display in rows and columns. Prioritize scanability and alignment.',
    variants: {
      default: { background: t.colors.card.base, foreground: t.colors.foreground, border: t.colors.border, radius: t.radius.lg },
    },
    states: {
      hover: `Row background shifts to muted (${t.colors.muted.base})`,
    },
    sizes: {
      cell: { height: '44px', padding: t.spacing.componentPadding.sm, fontSize: t.typography.scale.sm },
      header: { height: '44px', padding: t.spacing.componentPadding.sm, fontSize: t.typography.scale.sm },
    },
  }),

  input: (t) => ({
    description: 'Text input, textarea, and form controls.',
    variants: {
      default: { background: t.colors.background, foreground: t.colors.foreground, border: t.colors.input, radius: t.radius.md },
      error: { background: t.colors.background, foreground: t.colors.foreground, border: t.colors.destructive.base, radius: t.radius.md },
    },
    states: {
      hover: 'Border darkens by 1 stop',
      focus: `Border shifts to ring color (${t.colors.ring}), add focus ring`,
      disabled: 'Background shifts to muted, opacity 60%',
    },
    sizes: {
      sm: { height: '32px', padding: t.spacing.componentPadding.sm, fontSize: t.typography.scale.sm },
      md: { height: '40px', padding: t.spacing.componentPadding.md, fontSize: t.typography.scale.sm },
      lg: { height: '48px', padding: t.spacing.componentPadding.lg, fontSize: t.typography.scale.base },
    },
  }),

  navigation: (t) => ({
    description: 'Primary navigation, sidebar, or top bar.',
    variants: {
      default: { background: t.colors.card.base, foreground: t.colors.foreground, border: t.colors.border },
    },
    states: {
      hover: `Item background shifts to accent (${t.colors.accent.base})`,
      active: `Item receives primary color indicator and semibold weight`,
    },
    sizes: {
      item: { height: '40px', padding: t.spacing.componentPadding.md, fontSize: t.typography.scale.sm },
    },
  }),

  badge: (t) => ({
    description: 'Small label for status, category, or count.',
    variants: {
      default: { background: t.colors.primary.base, foreground: t.colors.primary.foreground, radius: t.radius.full },
      secondary: { background: t.colors.secondary.base, foreground: t.colors.secondary.foreground, radius: t.radius.full },
      outline: { background: 'transparent', foreground: t.colors.foreground, border: t.colors.border, radius: t.radius.full },
      destructive: { background: t.colors.destructive.base, foreground: t.colors.destructive.foreground, radius: t.radius.full },
    },
    states: {},
    sizes: {
      sm: { height: '20px', padding: '2px 8px', fontSize: t.typography.scale.xs },
      md: { height: '24px', padding: '2px 10px', fontSize: t.typography.scale.sm },
    },
  }),

  'floating-button': (t) => ({
    description: 'Fixed-position action button, typically in the bottom-right corner.',
    variants: {
      default: { background: t.colors.primary.base, foreground: t.colors.primary.foreground, shadow: t.shadows.lg, radius: t.radius.full },
    },
    states: {
      hover: 'Scale to 105%, shadow increases one level',
      active: 'Scale to 95%',
      focus: `Focus ring with offset (${t.colors.ring})`,
    },
    sizes: {
      md: { height: '48px', padding: '12px', fontSize: t.typography.scale.base },
      lg: { height: '56px', padding: '16px', fontSize: t.typography.scale.lg },
    },
  }),

  toast: (t) => ({
    description: 'Temporary notification appearing at screen edge.',
    variants: {
      default: { background: t.colors.card.base, foreground: t.colors.card.foreground, border: t.colors.border, shadow: t.shadows.lg, radius: t.radius.md },
      success: { background: '#10b981', foreground: '#ffffff', shadow: t.shadows.lg, radius: t.radius.md },
      error: { background: t.colors.destructive.base, foreground: t.colors.destructive.foreground, shadow: t.shadows.lg, radius: t.radius.md },
    },
    states: {},
  }),

  tabs: (t) => ({
    description: 'Segmented navigation for switching between content panels.',
    variants: {
      default: { background: t.colors.muted.base, foreground: t.colors.muted.foreground, radius: t.radius.md },
      active: { background: t.colors.background, foreground: t.colors.foreground, shadow: t.shadows.sm, radius: t.radius.md },
    },
    states: {
      hover: `Background shifts to accent (${t.colors.accent.base})`,
    },
    sizes: {
      item: { height: '36px', padding: t.spacing.componentPadding.sm, fontSize: t.typography.scale.sm },
    },
  }),

  select: (t) => ({
    description: 'Dropdown selector for choosing from a list of options.',
    variants: {
      default: { background: t.colors.background, foreground: t.colors.foreground, border: t.colors.input, radius: t.radius.md },
    },
    states: {
      hover: 'Border darkens by 1 stop',
      focus: `Border shifts to ring color (${t.colors.ring}), add focus ring`,
      disabled: 'Background shifts to muted, opacity 60%',
    },
    sizes: {
      sm: { height: '32px', padding: t.spacing.componentPadding.sm, fontSize: t.typography.scale.sm },
      md: { height: '40px', padding: t.spacing.componentPadding.md, fontSize: t.typography.scale.sm },
    },
  }),
};

export function generateComponentTokens(
  componentNames: ComponentName[],
  tokens: DesignTokens,
): Array<{ name: ComponentName; title: string } & ComponentTokens> {
  return componentNames.map((name) => ({
    name,
    title: COMPONENT_TITLES[name],
    ...generators[name](tokens),
  }));
}
