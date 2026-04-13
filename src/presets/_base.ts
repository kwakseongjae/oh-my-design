import type { Preset } from '../core/types.js';

export const basePreset: Preset = {
  name: 'base',
  displayName: 'Base',
  description: 'Shared defaults inherited by all presets',
  preferences: {
    mood: 'clean',
    primaryColor: '#2563eb',
    roundness: 'moderate',
    density: 'comfortable',
    typography: 'geometric',
    depth: 'subtle',
    darkMode: false,
    components: ['button', 'card', 'input'],
  },
  dosAndDonts: {
    dos: [
      'Maintain consistent spacing throughout all components',
      'Use semantic color tokens instead of raw hex values',
      'Ensure all interactive elements have visible focus indicators',
      'Keep text contrast ratio at WCAG AA minimum (4.5:1)',
      'Use the defined type scale — avoid arbitrary font sizes',
    ],
    donts: [
      'Mix border-radius styles within the same surface level',
      'Use more than 3 font weights on a single page',
      'Apply shadows and borders simultaneously on the same element',
      'Override semantic colors with hard-coded values',
      'Nest elevated surfaces more than 2 levels deep',
    ],
  },
};
