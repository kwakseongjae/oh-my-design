import type { FontEvidenceStatus, ReferenceEvidenceBundle } from "./evidence";

export interface EvidenceFixtureExpectation {
  readonly componentTypes: readonly string[];
  readonly states: readonly string[];
  readonly fonts: readonly { readonly family: string; readonly status: FontEvidenceStatus }[];
  readonly colors: readonly string[];
}
export interface EvidenceMetric {
  readonly expected: number;
  readonly observed: number;
  readonly truePositive: number;
  readonly falsePositive: number;
  readonly falseNegative: number;
  readonly precision: number;
  readonly recall: number;
  readonly f1: number;
}

export interface EvidenceFixtureReport {
  readonly componentTypes: EvidenceMetric;
  readonly states: EvidenceMetric;
  readonly fonts: EvidenceMetric;
  readonly colors: EvidenceMetric;
  readonly overall: EvidenceMetric;
  readonly missing: readonly string[];
  readonly unexpected: readonly string[];
}

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function metric(expectedValues: readonly string[], observedValues: readonly string[]): EvidenceMetric {
  const expected = new Set(expectedValues.map(normalize));
  const observed = new Set(observedValues.map(normalize));
  const truePositive = [...observed].filter((value) => expected.has(value)).length;
  const falsePositive = observed.size - truePositive;
  const falseNegative = expected.size - truePositive;
  const precision = observed.size === 0 ? (expected.size === 0 ? 1 : 0) : truePositive / observed.size;
  const recall = expected.size === 0 ? 1 : truePositive / expected.size;
  const f1 = precision + recall === 0 ? 0 : 2 * precision * recall / (precision + recall);
  return {
    expected: expected.size,
    observed: observed.size,
    truePositive,
    falsePositive,
    falseNegative,
    precision: Number(precision.toFixed(4)),
    recall: Number(recall.toFixed(4)),
    f1: Number(f1.toFixed(4)),
  };
}

function prefixed(prefix: string, values: readonly string[]): string[] {
  return values.map((value) => `${prefix}:${normalize(value)}`);
}

export function evaluateEvidenceFixture(
  bundle: ReferenceEvidenceBundle,
  expectation: EvidenceFixtureExpectation,
): EvidenceFixtureReport {
  const expectedComponents = prefixed("component", expectation.componentTypes);
  const observedComponents = prefixed("component", [...new Set(bundle.components.map((component) => component.type))]);
  const expectedStates = prefixed("state", expectation.states);
  const observedStates = prefixed("state", [...new Set(bundle.components.flatMap((component) => component.states))]);
  const expectedFonts = expectation.fonts.map((font) => `font:${normalize(font.family)}:${font.status}`);
  const observedFonts = bundle.fonts.map((font) => `font:${normalize(font.family)}:${font.status}`);
  const expectedColors = prefixed("color", expectation.colors);
  const observedColors = prefixed("color", [...new Set(bundle.colors.map((color) => color.value))]);

  const categories = {
    componentTypes: metric(expectedComponents, observedComponents),
    states: metric(expectedStates, observedStates),
    fonts: metric(expectedFonts, observedFonts),
    colors: metric(expectedColors, observedColors),
  };
  const allExpected = [...expectedComponents, ...expectedStates, ...expectedFonts, ...expectedColors];
  const allObserved = [...observedComponents, ...observedStates, ...observedFonts, ...observedColors];
  const expectedSet = new Set(allExpected.map(normalize));
  const observedSet = new Set(allObserved.map(normalize));
  return {
    ...categories,
    overall: metric(allExpected, allObserved),
    missing: [...expectedSet].filter((value) => !observedSet.has(value)).sort(),
    unexpected: [...observedSet].filter((value) => !expectedSet.has(value)).sort(),
  };
}
