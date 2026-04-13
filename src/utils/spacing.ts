import type { Density, SpacingTokens } from '../core/types.js';

const SPACING_CONFIGS: Record<Density, { baseUnit: number; multiplier: number }> = {
  compact:     { baseUnit: 4, multiplier: 1 },
  comfortable: { baseUnit: 4, multiplier: 1.5 },
  spacious:    { baseUnit: 4, multiplier: 2 },
};

export function generateSpacingTokens(density: Density): SpacingTokens {
  const { baseUnit, multiplier } = SPACING_CONFIGS[density];

  const steps = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24];
  const scale = steps.map((s) => Math.round(s * baseUnit * multiplier));

  const px = (n: number) => `${n}px`;

  return {
    baseUnit: baseUnit * multiplier,
    scale,
    sectionGap: px(scale[8]),
    componentPadding: {
      sm: `${px(scale[2])} ${px(scale[3])}`,
      md: `${px(scale[3])} ${px(scale[4])}`,
      lg: `${px(scale[4])} ${px(scale[6])}`,
    },
  };
}
