import type { Preset } from '../core/types.js';

export const dataDensePreset: Preset = {
  name: 'data-dense',
  displayName: 'Data Dense',
  description: 'Compact spacing with flat depth and geometric sans — inspired by project management and data-heavy interfaces',
  preferences: {
    mood: 'clean',
    primaryColor: '#5e6ad2',
    roundness: 'sharp',
    density: 'compact',
    typography: 'geometric',
    depth: 'flat',
    darkMode: true,
    components: ['button', 'card', 'input', 'table', 'badge', 'tabs', 'select', 'dropdown'],
  },
  dosAndDonts: {
    dos: [
      'Pack information densely — every pixel should earn its place',
      'Use small type sizes (12-13px) for data cells and metadata',
      'Rely on borders and background tints over shadows for separation',
      'Keep interactive elements compact but above 28px minimum height',
      'Use keyboard shortcuts and dense navigation patterns',
    ],
    donts: [
      'Add decorative spacing between dense data elements',
      'Use large rounded corners — they waste space in tight layouts',
      'Apply heavy shadows that add visual weight to a dense interface',
      'Use more than 2 levels of visual nesting',
      'Mix compact and spacious components on the same surface',
    ],
  },
};
