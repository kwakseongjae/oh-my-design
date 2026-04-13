import type { Preset } from '../core/types.js';

export const fintechPremiumPreset: Preset = {
  name: 'fintech-premium',
  displayName: 'Fintech Premium',
  description: 'Refined, trustworthy aesthetic with blue-tinted shadows and conservative radius — inspired by fintech dashboards',
  preferences: {
    mood: 'clean',
    primaryColor: '#635bff',
    roundness: 'moderate',
    density: 'comfortable',
    typography: 'geometric',
    depth: 'layered',
    darkMode: true,
    components: ['button', 'card', 'input', 'table', 'badge', 'dropdown', 'tabs'],
  },
  dosAndDonts: {
    dos: [
      'Use generous whitespace to convey premium feel',
      'Rely on typography hierarchy over decorative elements',
      'Keep interactive states subtle — opacity shifts over color jumps',
      'Use the primary color sparingly for key CTAs only',
      'Present data in clean, well-aligned tables with minimal borders',
    ],
    donts: [
      'Use bright, saturated accent colors for large surface areas',
      'Mix warm and cool grays — stick to one temperature',
      'Add decorative gradients or patterns to functional surfaces',
      'Use pill-shaped buttons for primary actions',
      'Over-decorate table rows — let the data breathe',
    ],
  },
};
