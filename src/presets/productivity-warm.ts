import type { Preset } from '../core/types.js';

export const productivityWarmPreset: Preset = {
  name: 'productivity-warm',
  displayName: 'Productivity Warm',
  description: 'Warm neutrals with friendly radius and comfortable density — inspired by modern productivity tools',
  preferences: {
    mood: 'warm',
    primaryColor: '#2f81f7',
    roundness: 'rounded',
    density: 'comfortable',
    typography: 'humanist',
    depth: 'subtle',
    darkMode: true,
    components: ['button', 'card', 'input', 'dropdown', 'dialog', 'navigation', 'badge'],
  },
  dosAndDonts: {
    dos: [
      'Use warm gray tones (#faf9f7, #37352f) over pure black/white',
      'Keep interactions gentle — soft hover states, smooth transitions',
      'Use rounded corners consistently for a friendly, approachable feel',
      'Emphasize readability with generous line-height (1.6+)',
      'Layer content with subtle background tints rather than hard borders',
    ],
    donts: [
      'Use sharp corners or angular design elements',
      'Apply cold, saturated blues for large background areas',
      'Use heavy shadows that make the UI feel oppressive',
      'Over-use the primary color — warm UIs need muted palettes',
      'Make interactive elements too small — comfortable density means generous targets',
    ],
  },
};
