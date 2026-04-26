import { hexToHsl, hslToHex } from '../utils/color.js';
import type { DeltaSet } from './vocabulary.js';

export interface StubStats {
  hexMatches: number;
  hexChanged: number;
  hueShift: number;
  satShift: number;
  lightShift: number;
  sourcesApplied: string[];
}

export interface StubResult {
  designMd: string;
  stats: StubStats;
}

const HEX_RE = /#[0-9a-fA-F]{6}\b/g;
const NEUTRAL_RE = /^#([0-9a-fA-F])\1([0-9a-fA-F])\2([0-9a-fA-F])\3$/;

const STUB_HEADER = `<!-- omd:stub v=1 — color-only deterministic shift baseline. Limitations: only color hex codes are shifted (hue/saturation/lightness from delta_set); radius_px, typography.letter_spacing_em, spacing.scale_ratio, and all narrative are NOT shifted by the stub. Run the omd:init skill in an agent session to apply the full delta_set + produce a voice-preserved Hybrid variation. -->`;

function isNeutral(hex: string): boolean {
  if (NEUTRAL_RE.test(hex)) return true;
  const [, s] = hexToHsl(hex);
  return s < 5;
}

function shiftHex(hex: string, dh: number, ds: number, dl: number): string {
  const [h, s, l] = hexToHsl(hex);
  const newH = ((h + dh) % 360 + 360) % 360;
  const newS = Math.max(0, Math.min(100, s + ds));
  const newL = Math.max(0, Math.min(100, l + dl));
  return hslToHex(newH, newS, newL);
}

export function applyDeltaStub(
  referenceMd: string,
  delta: DeltaSet
): StubResult {
  const dh = delta.axes['color.hue_deg']?.value ?? 0;
  const ds = delta.axes['color.saturation_pct']?.value ?? 0;
  const dl = delta.axes['color.lightness_pct']?.value ?? 0;

  const sourceSet = new Set<string>();
  for (const axis of ['color.hue_deg', 'color.saturation_pct', 'color.lightness_pct']) {
    for (const src of delta.axes[axis]?.sources ?? []) sourceSet.add(src);
  }
  const sources = [...sourceSet].sort();

  let hexMatches = 0;
  let hexChanged = 0;

  const shifted = referenceMd.replace(HEX_RE, (match) => {
    hexMatches++;
    if (dh === 0 && ds === 0 && dl === 0) return match;
    if (isNeutral(match)) return match; // preserve blacks/whites/grays
    const out = shiftHex(match, dh, ds, dl);
    if (out.toLowerCase() !== match.toLowerCase()) hexChanged++;
    return out;
  });

  const header = STUB_HEADER + '\n\n';
  return {
    designMd: header + shifted,
    stats: {
      hexMatches,
      hexChanged,
      hueShift: dh,
      satShift: ds,
      lightShift: dl,
      sourcesApplied: sources,
    },
  };
}
