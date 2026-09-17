import type {
  ReferenceAstNode,
  ReferenceAstTokens,
  ReferenceAstValue,
} from "./schema";
import type { CoreConsumerContract, CoreConsumerToken } from "./core-consumer-contract";
import type { Overrides } from "@/lib/core/types";

export const REFERENCE_FORMATS = ["designmd", "tailwind", "css", "dtcg"] as const;
export type ReferenceFormat = (typeof REFERENCE_FORMATS)[number];

export interface ReferenceFormatArtifact {
  readonly id: ReferenceFormat;
  readonly label: string;
  readonly content: string;
  readonly filename: string;
  readonly mime: string;
  /** A concise export-specific limitation. The payload remains downloadable. */
  readonly notice?: string;
}

interface FormatInput {
  readonly referenceId: string;
  readonly designMd: string;
  readonly tokens: ReferenceAstTokens;
  /** Explicit builder choices keyed by their canonical claim path. */
  readonly claimOverrides?: Readonly<Record<string, string | number>>;
}

interface CoreFormatInput {
  readonly referenceId: string;
  readonly designMd: string;
  readonly contract: CoreConsumerContract;
  readonly overrides: Pick<Overrides, "primaryColor" | "fontFamily" | "headingWeight" | "borderRadius">;
}

function isCanonical<T extends string | number | boolean | null>(
  value: ReferenceAstValue<T>,
): boolean {
  return value.origin === "frontmatter" && value.confidence === "high";
}

function slug(value: string): string {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function canonicalEntries<T extends string | number>(
  record: Readonly<Record<string, ReferenceAstValue<T>>>,
  claimOverrides: Readonly<Record<string, string | number>> = {},
): readonly [string, T][] {
  return Object.entries(record)
    .filter(([, value]) => isCanonical(value))
    .map(([name, value]) => [name, (claimOverrides[value.claimPath] ?? value.value) as T] as const);
}

function isAstValue(node: ReferenceAstNode): node is ReferenceAstValue<string | number | boolean | null> {
  return Boolean(node)
    && !Array.isArray(node)
    && typeof node === "object"
    && "value" in node
    && "claimPath" in node
    && "origin" in node
    && "confidence" in node;
}

function canonicalPlain(
  node: ReferenceAstNode,
  claimOverrides: Readonly<Record<string, string | number>> = {},
): unknown {
  if (isAstValue(node)) {
    return isCanonical(node) ? (claimOverrides[node.claimPath] ?? node.value) : undefined;
  }
  if (Array.isArray(node)) {
    const values = node.map((value) => canonicalPlain(value, claimOverrides)).filter((value) => value !== undefined);
    return values.length > 0 ? values : undefined;
  }
  const entries = Object.entries(node)
    .map(([key, value]) => [key, canonicalPlain(value, claimOverrides)] as const)
    .filter(([, value]) => value !== undefined);
  return entries.length > 0 ? Object.fromEntries(entries) : undefined;
}

function flattenCanonical(
  node: ReferenceAstNode,
  prefix: readonly string[] = [],
  claimOverrides: Readonly<Record<string, string | number>> = {},
): readonly { readonly path: readonly string[]; readonly value: string | number | boolean }[] {
  if (isAstValue(node)) {
    if (!isCanonical(node) || node.value === null) return [];
    return [{ path: prefix, value: (claimOverrides[node.claimPath] ?? node.value) as string | number | boolean }];
  }
  if (Array.isArray(node)) {
    return node.flatMap((value, index) => flattenCanonical(value, [...prefix, String(index)], claimOverrides));
  }
  return Object.entries(node).flatMap(([key, value]) => flattenCanonical(value, [...prefix, key], claimOverrides));
}

function cssValue(value: string | number | boolean, unit?: "px"): string {
  if (typeof value === "number" && unit) return `${value}${unit}`;
  return String(value);
}

function toCssVariables(tokens: ReferenceAstTokens, claimOverrides: Readonly<Record<string, string | number>>): string {
  const lines: string[] = [];
  for (const [name, value] of canonicalEntries(tokens.colors, claimOverrides)) {
    lines.push(`  --color-${slug(name)}: ${value};`);
  }
  for (const [name, value] of canonicalEntries(tokens.typography.families, claimOverrides)) {
    lines.push(`  --font-${slug(name)}: ${value};`);
  }
  for (const leaf of flattenCanonical(tokens.typography.tiers, [], claimOverrides)) {
    const key = leaf.path.at(-1)?.toLowerCase() ?? "";
    lines.push(`  --type-${leaf.path.map(slug).join("-")}: ${cssValue(leaf.value, key === "size" ? "px" : undefined)};`);
  }
  for (const [name, value] of canonicalEntries(tokens.spacing, claimOverrides)) {
    lines.push(`  --space-${slug(name)}: ${value}px;`);
  }
  for (const [name, value] of canonicalEntries(tokens.rounded, claimOverrides)) {
    lines.push(`  --radius-${slug(name)}: ${value};`);
  }
  for (const [name, value] of canonicalEntries(tokens.shadows, claimOverrides)) {
    lines.push(`  --shadow-${slug(name)}: ${value};`);
  }
  return `:root {\n${lines.join("\n")}\n}`;
}

function tailwindTierLine(path: readonly string[], value: string | number | boolean): string | null {
  const field = path.at(-1)?.toLowerCase();
  const tier = slug(path.slice(0, -1).join("-"));
  if (!tier || !field) return null;
  if (field === "size") return `  --text-${tier}: ${cssValue(value, "px")};`;
  if (field === "weight" || field === "fontweight") return `  --font-weight-${tier}: ${value};`;
  if (field === "lineheight" || field === "line-height") return `  --leading-${tier}: ${value};`;
  if (field === "tracking" || field === "letterspacing" || field === "letter-spacing") return `  --tracking-${tier}: ${value};`;
  return null;
}

function toTailwind(tokens: ReferenceAstTokens, claimOverrides: Readonly<Record<string, string | number>>): string {
  const lines: string[] = [];
  for (const [name, value] of canonicalEntries(tokens.colors, claimOverrides)) {
    lines.push(`  --color-${slug(name)}: ${value};`);
  }
  for (const [name, value] of canonicalEntries(tokens.typography.families, claimOverrides)) {
    lines.push(`  --font-${slug(name)}: ${value};`);
  }
  for (const leaf of flattenCanonical(tokens.typography.tiers, [], claimOverrides)) {
    const line = tailwindTierLine(leaf.path, leaf.value);
    if (line) lines.push(line);
  }
  for (const [name, value] of canonicalEntries(tokens.spacing, claimOverrides)) {
    lines.push(`  --spacing-${slug(name)}: ${value}px;`);
  }
  for (const [name, value] of canonicalEntries(tokens.rounded, claimOverrides)) {
    lines.push(`  --radius-${slug(name)}: ${value};`);
  }
  for (const [name, value] of canonicalEntries(tokens.shadows, claimOverrides)) {
    lines.push(`  --shadow-${slug(name)}: ${value};`);
  }
  return `@theme {\n${lines.join("\n")}\n}`;
}

function token(type: string, value: unknown) {
  return { $type: type, $value: value };
}

function toDtcgNode(
  node: ReferenceAstNode,
  path: readonly string[] = [],
  claimOverrides: Readonly<Record<string, string | number>> = {},
): unknown {
  if (isAstValue(node)) {
    if (!isCanonical(node) || node.value === null) return undefined;
    const raw = claimOverrides[node.claimPath] ?? node.value;
    const field = path.at(-1)?.toLowerCase() ?? "";
    if (field === "size" || field === "fontsize" || field === "font-size") {
      return token("dimension", typeof raw === "number" ? `${raw}px` : raw);
    }
    if (field === "tracking" || field === "letterspacing" || field === "letter-spacing") {
      return token("dimension", typeof raw === "number" ? `${raw}px` : raw);
    }
    if (field === "weight" || field === "fontweight" || field === "font-weight") {
      return token("fontWeight", raw);
    }
    return token(typeof raw === "number" ? "number" : typeof raw === "boolean" ? "boolean" : "string", raw);
  }
  if (Array.isArray(node)) {
    const values = node.map((value, index) => toDtcgNode(value, [...path, String(index)], claimOverrides));
    return values.some((value) => value !== undefined) ? values : undefined;
  }
  const entries = Object.entries(node)
    .map(([key, value]) => [key, toDtcgNode(value, [...path, key], claimOverrides)] as const)
    .filter(([, value]) => value !== undefined);
  return entries.length > 0 ? Object.fromEntries(entries) : undefined;
}

function toDtcg(tokens: ReferenceAstTokens, claimOverrides: Readonly<Record<string, string | number>>): string {
  const components = canonicalPlain(tokens.components, claimOverrides);
  const output = {
    color: Object.fromEntries(canonicalEntries(tokens.colors, claimOverrides).map(([name, value]) => [name, token("color", value)])),
    typography: {
      family: Object.fromEntries(canonicalEntries(tokens.typography.families, claimOverrides).map(([name, value]) => [name, token("fontFamily", value)])),
      tiers: toDtcgNode(tokens.typography.tiers, [], claimOverrides) ?? {},
    },
    spacing: Object.fromEntries(canonicalEntries(tokens.spacing, claimOverrides).map(([name, value]) => [name, token("dimension", `${value}px`)])),
    radius: Object.fromEntries(canonicalEntries(tokens.rounded, claimOverrides).map(([name, value]) => [name, token("dimension", value)])),
    shadow: Object.fromEntries(canonicalEntries(tokens.shadows, claimOverrides).map(([name, value]) => [name, token("string", value)])),
    ...(components === undefined
      ? {}
      : { $extensions: { "oh-my-design": { components } } }),
  };
  return `${JSON.stringify(output, null, 2)}\n`;
}

export function createReferenceFormatArtifacts(input: FormatInput): Readonly<Record<ReferenceFormat, ReferenceFormatArtifact>> {
  const safeId = slug(input.referenceId) || "reference";
  const claimOverrides = input.claimOverrides ?? {};
  return {
    designmd: {
      id: "designmd",
      label: "DESIGN.md",
      content: input.designMd,
      filename: "DESIGN.md",
      mime: "text/markdown",
    },
    tailwind: {
      id: "tailwind",
      label: "Tailwind v4",
      content: toTailwind(input.tokens, claimOverrides),
      filename: `${safeId}.theme.css`,
      mime: "text/css",
    },
    css: {
      id: "css",
      label: "CSS Variables",
      content: toCssVariables(input.tokens, claimOverrides),
      filename: `${safeId}.tokens.css`,
      mime: "text/css",
    },
    dtcg: {
      id: "dtcg",
      label: "DTCG JSON",
      content: toDtcg(input.tokens, claimOverrides),
      filename: `${safeId}.tokens.json`,
      mime: "application/json",
    },
  };
}

function coreTokenValue(token: CoreConsumerToken, overrides: CoreFormatInput["overrides"]): unknown {
  if (token.id === "color.primary" && token.type === "color" && overrides.primaryColor) return overrides.primaryColor;
  if (token.id === "radius.default" && token.type === "dimension" && overrides.borderRadius) return overrides.borderRadius;
  return token.value;
}

interface CoreExportEntry {
  readonly id: string;
  readonly type: string;
  readonly value: unknown;
  readonly claimPath: string | null;
  readonly sourceClass: string;
  readonly evidence: readonly string[];
  readonly derived: boolean;
  readonly original?: {
    readonly value: unknown;
    readonly claimPath: string;
    readonly sourceClass: string;
    readonly evidence: readonly string[];
  };
}

function tokenOverrideSlot(token: CoreConsumerToken, overrides: CoreFormatInput["overrides"]): string | null {
  if (token.id === "color.primary" && token.type === "color" && overrides.primaryColor) return "primaryColor";
  if (token.id === "radius.default" && token.type === "dimension" && overrides.borderRadius) return "borderRadius";
  return null;
}

function coreExportEntries(input: CoreFormatInput): CoreExportEntry[] {
  const entries: CoreExportEntry[] = input.contract.tokens.map((token) => {
    const overrideSlot = tokenOverrideSlot(token, input.overrides);
    return {
      id: token.id,
      type: token.type,
      value: coreTokenValue(token, input.overrides),
      claimPath: overrideSlot ? null : token.claimPath,
      sourceClass: overrideSlot ? "user-authored-proposal" : token.sourceClass,
      evidence: overrideSlot ? [`builder://override/${overrideSlot}`] : token.evidence,
      derived: Boolean(overrideSlot),
      ...(overrideSlot ? {
        original: {
          value: token.value,
          claimPath: token.claimPath,
          sourceClass: token.sourceClass,
          evidence: token.evidence,
        },
      } : {}),
    };
  });
  const has = (id: string, type: string) => entries.some((entry) => entry.id === id && entry.type === type);
  const derived = (id: string, type: string, value: unknown, slot: string): CoreExportEntry => ({
    id,
    type,
    value,
    claimPath: null,
    sourceClass: "user-authored-proposal",
    evidence: [`builder://override/${slot}`],
    derived: true,
  });
  if (input.overrides.primaryColor && !has("color.primary", "color")) {
    entries.push(derived("color.primary", "color", input.overrides.primaryColor, "primaryColor"));
  }
  if (input.overrides.borderRadius && !has("radius.default", "dimension")) {
    entries.push(derived("radius.default", "dimension", input.overrides.borderRadius, "borderRadius"));
  }
  let hasUiRole = false;
  for (const role of input.contract.fontRoles) {
    const id = role.metadata.id;
    const family = role.metadata.family;
    if (typeof id !== "string" || typeof family !== "string") continue;
    const isUi = id === "ui" || id === "ui-sans";
    hasUiRole ||= isUi;
    const resolvedFamily = isUi && input.overrides.fontFamily ? input.overrides.fontFamily : family;
    const familyOverridden = Boolean(isUi && input.overrides.fontFamily);
    entries.push({
      id: `font.${id}`,
      type: "fontFamily",
      value: resolvedFamily,
      claimPath: familyOverridden ? null : role.claimPath,
      sourceClass: familyOverridden ? "user-authored-proposal" : role.sourceClass,
      evidence: familyOverridden ? ["builder://override/fontFamily"] : role.evidence,
      derived: familyOverridden,
      ...(familyOverridden ? {
        original: {
          value: family,
          claimPath: role.claimPath,
          sourceClass: role.sourceClass,
          evidence: role.evidence,
        },
      } : {}),
    });
    const weight = isUi && input.overrides.headingWeight
      ? Number(input.overrides.headingWeight) || input.overrides.headingWeight
      : role.metadata.weight;
    if (typeof weight === "string" || typeof weight === "number") {
      const weightOverridden = Boolean(isUi && input.overrides.headingWeight);
      entries.push({
        id: `font-weight.${id}`,
        type: "fontWeight",
        value: weight,
        claimPath: weightOverridden ? null : role.claimPath,
        sourceClass: weightOverridden ? "user-authored-proposal" : role.sourceClass,
        evidence: weightOverridden ? ["builder://override/headingWeight"] : role.evidence,
        derived: weightOverridden,
        ...(weightOverridden ? {
          original: {
            value: role.metadata.weight,
            claimPath: role.claimPath,
            sourceClass: role.sourceClass,
            evidence: role.evidence,
          },
        } : {}),
      });
    }
  }
  if (!hasUiRole && input.overrides.fontFamily) {
    entries.push(derived("font.ui", "fontFamily", input.overrides.fontFamily, "fontFamily"));
  }
  if (!hasUiRole && input.overrides.headingWeight) {
    entries.push(derived("font-weight.ui", "fontWeight", Number(input.overrides.headingWeight) || input.overrides.headingWeight, "headingWeight"));
  }
  return entries;
}

function collisionSuffix(id: string): string {
  return Array.from(id).map((character) => character.codePointAt(0)!.toString(16)).join("");
}

function coreCssLines(entries: readonly CoreExportEntry[]): string[] {
  const scalar = entries.filter((entry) => typeof entry.value === "string" || typeof entry.value === "number");
  const bases = scalar.map((entry) => entry.id.split(".").map(slug).filter(Boolean).join("-"));
  const counts = new Map<string, number>();
  for (const base of bases) counts.set(base, (counts.get(base) ?? 0) + 1);
  const lines: string[] = [];
  scalar.forEach((entry, index) => {
    const base = bases[index];
    if (!base) return;
    const variable = (counts.get(base) ?? 0) > 1
      ? `${base}--id-${collisionSuffix(`${entry.id}:${entry.type}:${index}`)}`
      : base;
    lines.push(`  /* source: ${entry.id}${entry.derived ? "; derived builder override" : `; claim: ${entry.claimPath}`} */`);
    lines.push(`  --${variable}: ${entry.value};`);
  });
  return lines;
}

const DTCG_FORMAT_VERSION = "2025.10";
const DTCG_FORMAT_URL = "https://www.designtokens.org/tr/2025.10/format/";

type DtcgConversion =
  | { readonly ok: true; readonly type: string; readonly value: unknown }
  | { readonly ok: false; readonly reason: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function aliasTarget(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const match = /^\{([^{}]+)\}$/.exec(value);
  return match?.[1] ?? null;
}

function validDtcgId(id: string): boolean {
  const parts = id.split(".");
  return parts.length > 0 && parts.every((part) => part.length > 0 && !part.startsWith("$") && !/[{}.]/.test(part));
}

function isDimension(value: unknown): value is { value: number; unit: "px" | "rem" } {
  return isRecord(value)
    && Number.isFinite(value.value)
    && (value.unit === "px" || value.unit === "rem")
    && Object.keys(value).every((key) => key === "value" || key === "unit");
}

function toDimension(value: unknown): { value: number; unit: "px" | "rem" } | null {
  if (isDimension(value)) return value;
  if (typeof value !== "string") return null;
  const match = /^(-?(?:\d+\.?\d*|\.\d+))(px|rem)$/.exec(value.trim());
  if (!match) return null;
  const numeric = Number(match[1]);
  return Number.isFinite(numeric) ? { value: numeric, unit: match[2] as "px" | "rem" } : null;
}

function isDuration(value: unknown): boolean {
  return isRecord(value)
    && Number.isFinite(value.value)
    && (value.unit === "ms" || value.unit === "s")
    && Object.keys(value).every((key) => key === "value" || key === "unit");
}

function isCubicBezier(value: unknown): boolean {
  return Array.isArray(value)
    && value.length === 4
    && value.every(Number.isFinite)
    && (value[0] as number) >= 0 && (value[0] as number) <= 1
    && (value[2] as number) >= 0 && (value[2] as number) <= 1;
}

const FONT_WEIGHT_NAMES = new Set([
  "thin", "hairline", "extra-light", "ultra-light", "light", "normal", "regular", "book",
  "medium", "semi-bold", "demi-bold", "bold", "extra-bold", "ultra-bold", "black", "heavy",
  "extra-black", "ultra-black",
]);

function isFontWeight(value: unknown): boolean {
  return (typeof value === "number" && Number.isFinite(value) && value >= 1 && value <= 1000)
    || (typeof value === "string" && FONT_WEIGHT_NAMES.has(value));
}

function isSrgbColor(value: unknown): boolean {
  if (!isRecord(value) || value.colorSpace !== "srgb" || !Array.isArray(value.components)) return false;
  if (value.components.length !== 3 || !value.components.every((part) => typeof part === "number" && part >= 0 && part <= 1)) return false;
  if (value.alpha !== undefined && !(typeof value.alpha === "number" && value.alpha >= 0 && value.alpha <= 1)) return false;
  if (value.hex !== undefined && !(typeof value.hex === "string" && /^#[0-9a-fA-F]{6}$/.test(value.hex))) return false;
  return Object.keys(value).every((key) => ["colorSpace", "components", "alpha", "hex"].includes(key));
}

function toColor(value: unknown): unknown | null {
  if (isSrgbColor(value)) return value;
  if (typeof value !== "string") return null;
  const match = /^#([0-9a-fA-F]{6})([0-9a-fA-F]{2})?$/.exec(value);
  if (!match) return null;
  const bytes = [0, 2, 4].map((offset) => Number.parseInt(match[1].slice(offset, offset + 2), 16));
  return {
    colorSpace: "srgb",
    components: bytes.map((part) => part / 255),
    ...(match[2] ? { alpha: Number.parseInt(match[2], 16) / 255 } : {}),
    hex: `#${match[1].toLowerCase()}`,
  };
}

function isAlias(value: unknown): boolean {
  return aliasTarget(value) !== null;
}

function containsAlias(value: unknown): boolean {
  if (isAlias(value)) return true;
  if (Array.isArray(value)) return value.some(containsAlias);
  return isRecord(value) && Object.values(value).some(containsAlias);
}

function isStrokeStyle(value: unknown): boolean {
  if (isAlias(value)) return true;
  if (typeof value === "string") return ["solid", "dashed", "dotted", "double", "groove", "ridge", "outset", "inset"].includes(value);
  return isRecord(value)
    && Array.isArray(value.dashArray)
    && value.dashArray.length > 0
    && value.dashArray.every((part) => isDimension(part) || isAlias(part))
    && ["round", "butt", "square"].includes(String(value.lineCap))
    && Object.keys(value).every((key) => key === "dashArray" || key === "lineCap");
}

function isColorValue(value: unknown): boolean { return isAlias(value) || isSrgbColor(value); }
function isDimensionValue(value: unknown): boolean { return isAlias(value) || isDimension(value); }
function isDurationValue(value: unknown): boolean { return isAlias(value) || isDuration(value); }
function isBezierValue(value: unknown): boolean { return isAlias(value) || isCubicBezier(value); }
function isFontFamilyValue(value: unknown): boolean {
  return isAlias(value) || typeof value === "string" || (Array.isArray(value) && value.length > 0 && value.every((part) => typeof part === "string"));
}
function isFontWeightValue(value: unknown): boolean { return isAlias(value) || isFontWeight(value); }
function isNumberValue(value: unknown): boolean { return isAlias(value) || (typeof value === "number" && Number.isFinite(value)); }

function isComposite(type: string, value: unknown): boolean {
  if (isAlias(value)) return true;
  if (type === "strokeStyle") return isStrokeStyle(value);
  if (type === "border") return isRecord(value)
    && isColorValue(value.color) && isDimensionValue(value.width) && isStrokeStyle(value.style)
    && Object.keys(value).every((key) => ["color", "width", "style"].includes(key));
  if (type === "transition") return isRecord(value)
    && isDurationValue(value.duration) && isDurationValue(value.delay) && isBezierValue(value.timingFunction)
    && Object.keys(value).every((key) => ["duration", "delay", "timingFunction"].includes(key));
  const isShadow = (candidate: unknown) => isRecord(candidate)
    && isColorValue(candidate.color)
    && isDimensionValue(candidate.offsetX) && isDimensionValue(candidate.offsetY)
    && isDimensionValue(candidate.blur) && isDimensionValue(candidate.spread)
    && (candidate.inset === undefined || typeof candidate.inset === "boolean")
    && Object.keys(candidate).every((key) => ["color", "offsetX", "offsetY", "blur", "spread", "inset"].includes(key));
  if (type === "shadow") return isShadow(value)
    || (Array.isArray(value) && value.length > 0 && value.every((part) => isShadow(part) || isAlias(part)));
  if (type === "gradient") return Array.isArray(value) && value.length > 0 && value.every((stop) => (
    isAlias(stop) || (isRecord(stop) && isColorValue(stop.color) && isNumberValue(stop.position)
      && Object.keys(stop).every((key) => key === "color" || key === "position"))
  ));
  if (type === "typography") return isRecord(value)
    && isFontFamilyValue(value.fontFamily) && isDimensionValue(value.fontSize)
    && isFontWeightValue(value.fontWeight) && isDimensionValue(value.letterSpacing)
    && isNumberValue(value.lineHeight)
    && Object.keys(value).every((key) => ["fontFamily", "fontSize", "fontWeight", "letterSpacing", "lineHeight"].includes(key));
  return false;
}

function convertDtcg(entry: CoreExportEntry): DtcgConversion {
  const standardTypes = new Set([
    "color", "dimension", "fontFamily", "fontWeight", "number",
    "strokeStyle", "border", "transition", "shadow", "gradient", "typography",
  ]);
  if (isAlias(entry.value)) return standardTypes.has(entry.type)
    ? { ok: true, type: entry.type, value: entry.value }
    : { ok: false, reason: `unsupported-core-type:${entry.type}` };
  if (entry.type === "color") {
    const color = toColor(entry.value);
    return color === null ? { ok: false, reason: "color-value-not-supported" } : { ok: true, type: "color", value: color };
  }
  if (entry.type === "dimension") {
    const dimension = toDimension(entry.value);
    return dimension === null ? { ok: false, reason: "dimension-requires-px-or-rem" } : { ok: true, type: "dimension", value: dimension };
  }
  if (entry.type === "fontFamily") return isFontFamilyValue(entry.value)
    ? { ok: true, type: "fontFamily", value: entry.value }
    : { ok: false, reason: "font-family-value-invalid" };
  if (entry.type === "fontWeight") return isFontWeightValue(entry.value)
    ? { ok: true, type: "fontWeight", value: entry.value }
    : { ok: false, reason: "font-weight-value-invalid" };
  if (entry.type === "number") return isNumberValue(entry.value)
    ? { ok: true, type: "number", value: entry.value }
    : { ok: false, reason: "number-value-invalid" };
  if (["strokeStyle", "border", "transition", "shadow", "gradient", "typography"].includes(entry.type)) {
    if (containsAlias(entry.value)) return { ok: false, reason: `${entry.type}-nested-alias-not-supported` };
    return isComposite(entry.type, entry.value)
      ? { ok: true, type: entry.type, value: entry.value }
      : { ok: false, reason: `${entry.type}-value-invalid` };
  }
  return { ok: false, reason: `unsupported-core-type:${entry.type}` };
}

function dtcgPath(id: string, parentIds: ReadonlySet<string>): string[] {
  const parts = id.split(".");
  return parentIds.has(id) ? [...parts, "$root"] : parts;
}

function rewriteAliases(value: unknown, paths: ReadonlyMap<string, readonly string[]>): unknown {
  const target = aliasTarget(value);
  if (target !== null) {
    const targetPath = paths.get(target);
    return targetPath ? `{${targetPath.join(".")}}` : value;
  }
  if (Array.isArray(value)) return value.map((part) => rewriteAliases(part, paths));
  if (!isRecord(value)) return value;
  return Object.fromEntries(Object.entries(value).map(([key, part]) => [key, rewriteAliases(part, paths)]));
}

function assignDtcg(root: Record<string, unknown>, path: readonly string[], value: unknown, type: string): void {
  if (path.length === 0) return;
  let cursor = root;
  for (const part of path.slice(0, -1)) {
    const existing = cursor[part];
    if (!existing || typeof existing !== "object" || Array.isArray(existing)) {
      cursor[part] = {};
    }
    cursor = cursor[part] as Record<string, unknown>;
  }
  cursor[path.at(-1)!] = { $type: type, $value: value };
}

/** Export only hash-bound Core values. User overrides replace their exact
 * semantic slot in the derived artifact and never mutate the adopted contract. */
export function createCoreReferenceFormatArtifacts(input: CoreFormatInput): Readonly<Record<ReferenceFormat, ReferenceFormatArtifact>> {
  const safeId = slug(input.referenceId) || "reference";
  const entries = coreExportEntries(input);
  const dtcg: Record<string, unknown> = {};
  const validEntries = entries.filter((entry) => validDtcgId(entry.id));
  const entryIds = new Set(validEntries.map((entry) => entry.id));
  const parentIds = new Set(validEntries.filter((entry) => (
    validEntries.some((candidate) => candidate.id.startsWith(`${entry.id}.`))
  )).map((entry) => entry.id));
  const paths = new Map(validEntries.map((entry) => [entry.id, dtcgPath(entry.id, parentIds)] as const));
  const entriesById = new Map(validEntries.map((entry) => [entry.id, entry] as const));
  const conversions = new Map<string, Extract<DtcgConversion, { ok: true }>>();
  const reasons = new Map<string, string>();
  for (const entry of entries) {
    if (!entryIds.has(entry.id)) {
      reasons.set(entry.id, "invalid-dtcg-name");
      continue;
    }
    const converted = convertDtcg(entry);
    if (converted.ok) conversions.set(entry.id, converted);
    else reasons.set(entry.id, converted.reason);
  }
  const aliasEdges = new Map<string, string>();
  for (const [id, converted] of conversions) {
    const target = aliasTarget(converted.value);
    if (target !== null) aliasEdges.set(id, target);
  }
  const cycleMembers = new Set<string>();
  for (const start of aliasEdges.keys()) {
    const path: string[] = [];
    const positions = new Map<string, number>();
    let cursor: string | undefined = start;
    while (cursor !== undefined && aliasEdges.has(cursor)) {
      const position = positions.get(cursor);
      if (position !== undefined) {
        path.slice(position).forEach((id) => cycleMembers.add(id));
        break;
      }
      positions.set(cursor, path.length);
      path.push(cursor);
      cursor = aliasEdges.get(cursor);
    }
  }
  for (const id of cycleMembers) {
    conversions.delete(id);
    reasons.set(id, "cyclic-alias");
  }
  let changed = true;
  while (changed) {
    changed = false;
    for (const [id, converted] of [...conversions]) {
      const target = aliasTarget(converted.value);
      if (target === null) continue;
      const source = entriesById.get(id)!;
      const targetEntry = entriesById.get(target);
      if (!targetEntry) {
        conversions.delete(id);
        reasons.set(id, `unresolved-alias:${target}`);
        changed = true;
      } else if (targetEntry.type !== source.type) {
        conversions.delete(id);
        reasons.set(id, `alias-type-mismatch:${target}`);
        changed = true;
      } else if (!conversions.has(target)) {
        conversions.delete(id);
        reasons.set(id, `alias-target-not-emitted:${target}`);
        changed = true;
      }
    }
  }
  const supported: { sourceId: string; standardPath: string }[] = [];
  const unsupported: { sourceId: string; reason: string }[] = [];
  for (const entry of entries) {
    const converted = conversions.get(entry.id);
    if (!converted) {
      unsupported.push({ sourceId: entry.id, reason: reasons.get(entry.id) ?? "conversion-failed" });
      continue;
    }
    const path = paths.get(entry.id)!;
    assignDtcg(dtcg, path, rewriteAliases(converted.value, paths), converted.type);
    supported.push({ sourceId: entry.id, standardPath: path.join(".") });
  }
  dtcg.$extensions = {
    "oh-my-design": {
      conversion: {
        format: "DTCG",
        version: DTCG_FORMAT_VERSION,
        specification: DTCG_FORMAT_URL,
        supported,
        unsupported,
      },
      sourceTokens: Object.fromEntries(entries.map((entry) => [entry.id, {
        $type: entry.type,
        $value: entry.value,
        source: {
          claimPath: entry.claimPath,
          sourceClass: entry.sourceClass,
          evidence: entry.evidence,
          derived: entry.derived,
          ...(entry.original ? { original: entry.original } : {}),
        },
      }])),
    },
  };
  const cssLines = coreCssLines(entries);
  return {
    designmd: { id: "designmd", label: "DESIGN.md", content: input.designMd, filename: "DESIGN.md", mime: "text/markdown" },
    tailwind: { id: "tailwind", label: "Tailwind v4", content: `@theme {\n${cssLines.join("\n")}\n}`, filename: `${safeId}.theme.css`, mime: "text/css" },
    css: { id: "css", label: "CSS Variables", content: `:root {\n${cssLines.join("\n")}\n}`, filename: `${safeId}.tokens.css`, mime: "text/css" },
    dtcg: {
      id: "dtcg",
      label: "DTCG 2025.10 JSON",
      content: `${JSON.stringify(dtcg, null, 2)}\n`,
      filename: `${safeId}.tokens.json`,
      mime: "application/design-tokens+json",
      ...(unsupported.length > 0 ? { notice: `${unsupported.length} source token${unsupported.length === 1 ? "" : "s"} remain in the OmD source ledger because they cannot be represented as DTCG 2025.10 values.` } : {}),
    },
  };
}
