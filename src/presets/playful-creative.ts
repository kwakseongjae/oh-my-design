import type { Preset } from '../core/types.js';

export const playfulCreativePreset: Preset = {
  name: 'playful-creative',
  displayName: 'Playful Creative',
  description: 'Rounded corners, vibrant colors, and layered depth — inspired by creative and design tools',
  preferences: {
    mood: 'playful',
    primaryColor: '#a855f7',
    roundness: 'rounded',
    density: 'comfortable',
    typography: 'humanist',
    depth: 'layered',
    darkMode: true,
    components: ['button', 'card', 'input', 'badge', 'dialog', 'toast', 'floating-button'],
  },
  dosAndDonts: {
    dos: [
      'Use vibrant, saturated colors for interactive elements',
      'Apply generous border-radius to convey friendliness',
      'Layer surfaces with distinct shadows for spatial clarity',
      'Use playful micro-interactions (scale, bounce, color shift)',
      'Mix 2-3 accent colors for visual variety within the palette',
    ],
    donts: [
      'Use sharp corners — they contradict the playful mood',
      'Make the palette too muted or desaturated',
      'Use flat depth — layered shadows are part of the personality',
      'Overcrowd layouts — playful needs room to breathe',
      'Use formal serif fonts for UI text',
    ],
  },
};
