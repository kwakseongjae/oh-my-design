import type { Preset } from '../core/types.js';

export const brutalistPreset: Preset = {
  name: 'brutalist',
  displayName: 'Brutalist',
  description: 'No radius, flat surfaces, monospace type, high-contrast borders — anti-design aesthetic',
  preferences: {
    mood: 'bold',
    primaryColor: '#000000',
    roundness: 'sharp',
    density: 'comfortable',
    typography: 'monospace',
    depth: 'flat',
    darkMode: false,
    components: ['button', 'card', 'input', 'table', 'badge'],
  },
  dosAndDonts: {
    dos: [
      'Use thick borders (2-3px) as the primary visual separator',
      'Keep all corners sharp — 0px radius everywhere',
      'Use monospace type for all text, including headings',
      'Embrace high contrast: black on white, white on black',
      'Let raw structure show — no decorative gradients or shadows',
    ],
    donts: [
      'Add rounded corners, gradients, or subtle shadows',
      'Use pastel or muted color palettes',
      'Apply smooth transitions — prefer instant state changes',
      'Mix serif or humanist fonts into the interface',
      'Over-polish the UI — imperfection is intentional',
    ],
  },
};
