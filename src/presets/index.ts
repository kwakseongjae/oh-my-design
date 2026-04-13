import type { Preset } from '../core/types.js';
import { basePreset } from './_base.js';
import { fintechPremiumPreset } from './fintech-premium.js';
import { developerDarkPreset } from './developer-dark.js';
import { productivityWarmPreset } from './productivity-warm.js';
import { dataDensePreset } from './data-dense.js';
import { playfulCreativePreset } from './playful-creative.js';
import { brutalistPreset } from './brutalist.js';
import { corporateCleanPreset } from './corporate-clean.js';

export { basePreset } from './_base.js';

const presetRegistry: Map<string, Preset> = new Map([
  ['fintech-premium', fintechPremiumPreset],
  ['developer-dark', developerDarkPreset],
  ['productivity-warm', productivityWarmPreset],
  ['data-dense', dataDensePreset],
  ['playful-creative', playfulCreativePreset],
  ['brutalist', brutalistPreset],
  ['corporate-clean', corporateCleanPreset],
]);

export function getPreset(name: string): Preset | undefined {
  return presetRegistry.get(name);
}

export function getAllPresets(): Preset[] {
  return Array.from(presetRegistry.values());
}

export function mergeWithBase(preset: Preset): Required<Pick<Preset, 'preferences' | 'dosAndDonts'>> {
  return {
    preferences: { ...basePreset.preferences, ...preset.preferences },
    dosAndDonts: {
      dos: [...(basePreset.dosAndDonts?.dos ?? []), ...(preset.dosAndDonts?.dos ?? [])],
      donts: [...(basePreset.dosAndDonts?.donts ?? []), ...(preset.dosAndDonts?.donts ?? [])],
    },
  };
}
