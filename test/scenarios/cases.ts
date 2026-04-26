export interface ScenarioCase {
  id: string;
  title: string;
  description: string;
  reference: string;
  expected: {
    matchedKeywordsIncludes?: string[];
    matchedKeywordsCount?: { min?: number; max?: number };
    topRefsAnyOf?: string[];
    axisSigns?: Record<string, '>0' | '<0' | '==0' | '!=0'>;
    hasWarnings?: boolean;
    keptKeywordsIncludes?: string[];
    keptKeywordsExcludes?: string[];
    hexChangesMin?: number;
  };
  preferences?: Array<{ note: string; expectedScope?: string }>;
}

export const SCENARIOS: ScenarioCase[] = [
  {
    id: 's1-warm-marketplace',
    title: 'Warm approachable B2C marketplace',
    description: 'a warm and approachable B2C marketplace for home goods',
    reference: 'airbnb',
    expected: {
      matchedKeywordsIncludes: ['warm', 'approachable'],
      topRefsAnyOf: ['airbnb', 'karrot', 'baemin'],
      axisSigns: {
        'color.hue_deg': '>0',
        'color.saturation_pct': '>0',
        'radius_px': '>0',
      },
      hasWarnings: false,
      hexChangesMin: 1,
    },
    preferences: [
      { note: 'CTAs should never be uppercase', expectedScope: 'components.button' },
      { note: 'primary brand should not use gradients', expectedScope: 'color' },
    ],
  },
  {
    id: 's2-minimal-devtool',
    title: 'Minimal clean developer tool',
    description: 'minimal clean developer tool with engineering focus',
    reference: 'vercel',
    expected: {
      matchedKeywordsIncludes: ['minimal', 'technical'],
      topRefsAnyOf: ['vercel', 'linear.app', 'expo', 'cal'],
      axisSigns: {
        'color.saturation_pct': '<0',
        'radius_px': '<0',
      },
      hasWarnings: false,
      hexChangesMin: 1,
    },
  },
  {
    id: 's3-premium-fintech',
    title: 'Premium trustworthy fintech dashboard',
    description: 'premium trustworthy fintech dashboard',
    reference: 'stripe',
    expected: {
      matchedKeywordsIncludes: ['premium', 'trustworthy'],
      topRefsAnyOf: ['stripe', 'coinbase'],
      axisSigns: {
        'color.saturation_pct': '<0',
      },
      hasWarnings: false,
      hexChangesMin: 1,
    },
    preferences: [
      { note: 'use 8pt grid, not 4pt', expectedScope: 'spacing' },
    ],
  },
  {
    id: 's4-conflict-drop',
    title: 'Conflict: playful and serious',
    description: 'playful and serious gaming platform',
    reference: 'vercel',
    expected: {
      matchedKeywordsIncludes: ['playful', 'serious'],
      keptKeywordsExcludes: ['playful', 'serious'],
      hasWarnings: true,
      hexChangesMin: 0,
    },
  },
  {
    id: 's5-enterprise-saas',
    title: 'Enterprise B2B SaaS',
    description: 'enterprise B2B SaaS for accounting teams',
    reference: 'freee',
    expected: {
      matchedKeywordsIncludes: ['enterprise'],
      topRefsAnyOf: ['freee', 'cohere', 'hashicorp', 'airtable'],
      axisSigns: {
        'color.saturation_pct': '<0',
      },
      hasWarnings: false,
    },
  },
  {
    id: 's6-editorial-ai',
    title: 'Editorial warm AI writing companion',
    description: 'editorial warm AI writing companion',
    reference: 'claude',
    expected: {
      matchedKeywordsIncludes: ['editorial', 'warm'],
      topRefsAnyOf: ['claude', 'cursor'],
      axisSigns: {
        'color.hue_deg': '>0',
      },
      hasWarnings: false,
      hexChangesMin: 1,
    },
  },
  {
    id: 's7-dense-dashboard',
    title: 'Dense data dashboard',
    description: 'dense data dashboard for financial analysts',
    reference: 'stripe',
    expected: {
      matchedKeywordsIncludes: ['dense'],
      axisSigns: {
        'spacing.base_px': '!=0',
        'spacing.scale_ratio': '!=0',
      },
      hasWarnings: false,
    },
  },
  {
    id: 's8-modifier-winner',
    title: 'Modifier: primarily playful, slightly formal',
    description: "primarily playful, slightly formal children's learning app",
    reference: 'baemin',
    expected: {
      matchedKeywordsIncludes: ['playful', 'formal'],
      keptKeywordsIncludes: ['playful'],
      keptKeywordsExcludes: ['formal'],
      hasWarnings: false,
      hexChangesMin: 1,
    },
  },
  {
    id: 's9-synonyms',
    title: 'Synonym expansion: fun + fast + startup',
    description: 'a fun and fast startup product',
    reference: 'linear.app',
    expected: {
      keptKeywordsIncludes: ['playful', 'energetic', 'indie'],
      matchedKeywordsCount: { min: 3 },
      hasWarnings: false,
    },
  },
  {
    id: 's10-unmatched',
    title: 'Unmatched (reference-fidelity request)',
    description: 'Stripe-like fintech',
    reference: 'stripe',
    expected: {
      matchedKeywordsCount: { max: 0 },
      axisSigns: {},
      hasWarnings: false,
      hexChangesMin: 0,
    },
  },
];

export const PASS_THRESHOLDS = {
  vocabCoverageMin: 0.8, // 8/10
  recommendationHitRate: 1.0, // all topRefsAnyOf cases must pass
  determinismStrict: true, // same desc → same delta_set
};
