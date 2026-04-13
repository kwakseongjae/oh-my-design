import type { Preset } from '../core/types.js';

export const developerDarkPreset: Preset = {
  name: 'developer-dark',
  displayName: 'Developer Dark',
  description: 'High-contrast dark theme with monospace accents and sharp edges — inspired by developer tools and terminals',
  preferences: {
    mood: 'dark',
    primaryColor: '#ffffff',
    roundness: 'sharp',
    density: 'compact',
    typography: 'monospace',
    depth: 'subtle',
    darkMode: false, // already dark by default
    components: ['button', 'card', 'input', 'table', 'badge', 'tabs', 'toast'],
  },
  dosAndDonts: {
    dos: [
      'Use high contrast between foreground text and dark backgrounds',
      'Leverage monospace type for code, data, and labels',
      'Keep borders thin (1px) and use subtle color separation',
      'Use accent color only for interactive elements and focus rings',
      'Maintain sharp corners throughout — consistency matters',
    ],
    donts: [
      'Use rounded or pill-shaped elements — they conflict with the sharp aesthetic',
      'Apply warm tones to the neutral palette',
      'Use heavy shadows on dark backgrounds — they become invisible',
      'Mix serif fonts into the interface',
      'Use light gray text on dark backgrounds below 4.5:1 contrast ratio',
    ],
  },
};
