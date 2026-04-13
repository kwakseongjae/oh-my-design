// ── User Preferences (CLI 입력) ──────────────────────────────────

export type Mood =
  | 'clean'
  | 'warm'
  | 'bold'
  | 'minimal'
  | 'playful'
  | 'dark';

export type Roundness = 'sharp' | 'moderate' | 'rounded' | 'pill';
export type Density = 'compact' | 'comfortable' | 'spacious';
export type TypographyStyle = 'geometric' | 'humanist' | 'monospace' | 'serif-accent';
export type DepthStyle = 'flat' | 'subtle' | 'layered' | 'dramatic';

export type ComponentName =
  | 'button'
  | 'card'
  | 'dialog'
  | 'dropdown'
  | 'table'
  | 'input'
  | 'navigation'
  | 'badge'
  | 'floating-button'
  | 'toast'
  | 'tabs'
  | 'select';

export interface UserPreferences {
  mood: Mood;
  primaryColor: string; // hex e.g. "#6366f1"
  roundness: Roundness;
  density: Density;
  typography: TypographyStyle;
  depth: DepthStyle;
  darkMode: boolean;
  components: ComponentName[];
  preset?: string;
}

// ── Design Tokens (생성 결과) ────────────────────────────────────

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
}

export interface SemanticColor {
  base: string;
  foreground: string;
}

export interface ColorTokens {
  primary: SemanticColor & { scale: ColorScale };
  secondary: SemanticColor;
  accent: SemanticColor;
  muted: SemanticColor;
  destructive: SemanticColor;
  background: string;
  foreground: string;
  card: SemanticColor;
  popover: SemanticColor;
  border: string;
  input: string;
  ring: string;
  chart: [string, string, string, string, string];
}

export interface TypographyTokens {
  fontFamily: {
    sans: string;
    mono: string;
    heading: string;
  };
  scale: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
  };
  weight: {
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
  letterSpacing: {
    tight: string;
    normal: string;
    wide: string;
  };
}

export interface SpacingTokens {
  baseUnit: number; // px
  scale: number[];  // e.g. [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]
  sectionGap: string;
  componentPadding: {
    sm: string;
    md: string;
    lg: string;
  };
}

export interface RadiusTokens {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface ShadowTokens {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface BorderTokens {
  width: string;
  style: string;
  color: string;
}

export interface ComponentTokens {
  description: string;
  variants: Record<string, {
    background: string;
    foreground: string;
    border?: string;
    shadow?: string;
    radius?: string;
    padding?: string;
  }>;
  states: {
    hover?: string;
    active?: string;
    disabled?: string;
    focus?: string;
  };
  sizes?: Record<string, {
    height: string;
    padding: string;
    fontSize: string;
  }>;
}

export interface DesignTokens {
  name: string;
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  radius: RadiusTokens;
  shadows: ShadowTokens;
  borders: BorderTokens;
  components: Partial<Record<ComponentName, ComponentTokens>>;
  darkColors?: ColorTokens;
}

// ── Preset ───────────────────────────────────────────────────────

export interface Preset {
  name: string;
  displayName: string;
  description: string;
  preferences: Partial<UserPreferences>;
  tokenOverrides?: Partial<DesignTokens>;
  dosAndDonts?: {
    dos: string[];
    donts: string[];
  };
}

// ── Template Context ─────────────────────────────────────────────

export interface TemplateContext extends DesignTokens {
  preferences: UserPreferences;
  presetName?: string;
  generatedAt: string;
  version: string;
}
