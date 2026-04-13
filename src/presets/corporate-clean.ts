import type { Preset } from '../core/types.js';

export const corporateCleanPreset: Preset = {
  name: 'corporate-clean',
  displayName: 'Corporate Clean',
  description: 'System fonts, subtle shadows, blue primary — reliable enterprise SaaS aesthetic',
  preferences: {
    mood: 'clean',
    primaryColor: '#2563eb',
    roundness: 'moderate',
    density: 'comfortable',
    typography: 'humanist',
    depth: 'subtle',
    darkMode: true,
    components: ['button', 'card', 'input', 'table', 'dialog', 'dropdown', 'navigation', 'tabs', 'select', 'badge'],
  },
  dosAndDonts: {
    dos: [
      'Use system fonts for maximum cross-platform consistency',
      'Keep the blue primary for trust and authority',
      'Apply subtle shadows for gentle depth without drama',
      'Maintain strict visual hierarchy with consistent spacing',
      'Design for accessibility first — WCAG AA minimum everywhere',
    ],
    donts: [
      'Use trendy or experimental design patterns',
      'Apply vibrant accent colors to large surfaces',
      'Use custom or decorative fonts — system fonts are intentional',
      'Create dramatic visual effects (large shadows, animations)',
      'Sacrifice clarity for visual flair',
    ],
  },
};
