import type {
  ReferenceAstNode,
  ReferenceAstTokens,
  ReferenceAstValue,
} from "./schema";

export const REFERENCE_FORMATS = ["designmd", "tailwind", "css", "dtcg"] as const;
export type ReferenceFormat = (typeof REFERENCE_FORMATS)[number];

export interface ReferenceFormatArtifact {
  readonly id: ReferenceFormat;
  readonly label: string;
  readonly content: string;
  readonly filename: string;
  readonly mime: string;
}

interface FormatInput {
  readonly referenceId: string;
  readonly designMd: string;
  readonly tokens: ReferenceAstTokens;
  /** Explicit builder choices keyed by their canonical claim path. */
  readonly claimOverrides?: Readonly<Record<string, string | number>>;
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
