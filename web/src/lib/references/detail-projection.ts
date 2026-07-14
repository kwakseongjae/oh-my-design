import { isSystemFontStack, resolveFontsFromDesignMd } from "@/lib/font-registry";
import { selectReferenceFoundations } from "./normalize.ts";
import type { ReferenceAst, ReferenceAstFoundations } from "./schema";

export interface ReferenceDetail {
  readonly id: string;
  readonly designMd: string;
  readonly primary: string;
  readonly background: string;
  readonly foreground: string;
  readonly fontFamily: string;
  readonly mono?: string;
  readonly brandFont?: string;
  readonly headingWeight: string;
  readonly radius: string;
  readonly mood: string;
  readonly accent?: string;
  readonly border?: string;
}

export type ReferenceDetailParityField =
  | "primary"
  | "background"
  | "foreground"
  | "fontFamily"
  | "radius";

export interface ReferenceDetailParityDifference {
  readonly field: ReferenceDetailParityField;
  readonly legacy: string;
  readonly ast: string;
}

export interface ReferenceDetailAstContract {
  readonly schemaVersion: ReferenceAst["schemaVersion"];
  readonly quality: ReferenceAst["quality"];
  readonly foundations: ReferenceAstFoundations;
  readonly tokens: ReferenceAst["tokens"];
  readonly evidence: ReferenceAst["evidence"];
  readonly compatibilityFallbacks: readonly ReferenceDetailParityField[];
  readonly parity: {
    readonly matches: boolean;
    readonly differences: readonly ReferenceDetailParityDifference[];
  };
}

export interface AstReferenceDetailProjection {
  readonly detail: ReferenceDetail;
  readonly contract: ReferenceDetailAstContract;
}

/** Exact pre-AST detail response logic, retained as the rollback adapter. */
export function extractLegacyReferenceDetail(id: string, designMd: string): ReferenceDetail {
  const primaryMatch = designMd.match(
    /## 2\. Color[\s\S]*?\*\*([^*]+)\*\*\s*\(`(#[0-9a-fA-F]{6})`\).*?(?:primary|brand|CTA|main)/i,
  );
  const primary = primaryMatch ? primaryMatch[2] : "#6366f1";

  const s2Full = designMd.match(/## 2\. Color[\s\S]*?(?=## 3\.)/i)?.[0] ?? "";
  let background = "#ffffff";
  const s2Early = s2Full.slice(0, 2000);
  const roleRe = /\*\*[^*]+\*\*\s*\(`(#[0-9a-fA-F]{6})`\)[^\n]{0,300}?(?:primary\s+page\s+background|primary\s+canvas|main\s+canvas|default\s+canvas|page\s+background|primary\s+background|the\s+primary\s+(?:page\s+)?(?:canvas|background)|page\s+canvas|void\s+canvas|main\s+page\s+background)/i;
  const tier1 = s2Early.match(roleRe);
  if (tier1) {
    background = tier1[1];
  } else {
    const bgSectionContent = s2Full.match(
      /###[^\n]*\b(?:Background|Surface|Canvas)\b[^\n]*\n([\s\S]*?)(?=\n###|\n## |$)/i,
    )?.[1] ?? "";
    const hexEntries = [...bgSectionContent.matchAll(/\*\*[^*]+\*\*\s*\(`(#[0-9a-fA-F]{6})`\)[^\n]*/g)];
    const meaningfulHex = hexEntries.find(
      (match) => !/overlay|badge|pill|selection|frost|glass|alpha|backdrop/i.test(match[0]),
    );
    if (meaningfulHex) {
      background = meaningfulHex[1];
    } else if (bgSectionContent) {
      const darkFallback = s2Full.match(
        /\*\*[^*]+\*\*\s*\(`(#[0-9a-fA-F]{6})`\)[^\n]*(?:dark\s+(?:\w+\s+)?(?:surface|background|canvas|interactive)|deepest\s+surface|button\s+background[^\n]*dark)/i,
      );
      if (darkFallback) background = darkFallback[1];
    } else {
      const quickBg = s2Full.match(/Quick Color Reference[\s\S]*?Background.*?`(#[0-9a-fA-F]{6})`/i);
      if (quickBg) background = quickBg[1];
    }
  }

  const foregroundMatch = designMd.match(/(?:heading|primary text).*?`(#[0-9a-fA-F]{6})`/i);
  const foreground = foregroundMatch ? foregroundMatch[1] : "#09090b";
  const { family: fontFamily, mono, brand: brandFont } = resolveFontsFromDesignMd(designMd);
  const weightMatch = designMd.match(/Display.*?\|\s*(\d{3})\s*\|/);
  const headingWeight = weightMatch ? weightMatch[1] : "600";
  const radiusMatch = designMd.match(/(?:border-radius|radius).*?(\d+px(?:\s*[-–]\s*\d+px)?)/i);
  const radius = radiusMatch ? radiusMatch[1] : "6px";
  const accentMatch = designMd.match(/(?:accent|secondary).*?`(#[0-9a-fA-F]{6})`/i);
  const borderMatch = designMd.match(/(?:border.*?default|border.*?standard).*?`(#[0-9a-fA-F]{6})`/i);
  const mood = designMd.match(/## 1\. Visual Theme.*?\n([\s\S]*?)(?=## 2\.)/)?.[1]?.trim().split("\n\n")[0] || "";

  return {
    id,
    designMd,
    primary,
    background,
    foreground,
    fontFamily,
    mono,
    brandFont,
    headingWeight,
    radius,
    mood,
    accent: accentMatch?.[1],
    border: borderMatch?.[1],
  };
}

function displayFontFromStack(stack: string): string | null {
  if (isSystemFontStack(stack)) return "System";
  const first = stack
    .split(",")
    .map((token) => token.replace(/['"`]/g, "").trim())
    .find((token) => token && !/^(?:serif|sans-serif|monospace|system-ui|ui-sans-serif|ui-monospace)$/i.test(token));
  return first ?? null;
}

function equivalent(field: ReferenceDetailParityField, left: string, right: string): boolean {
  const normalize = (value: string) => value.trim().replace(/\s+/g, " ");
  if (["primary", "background", "foreground"].includes(field)) {
    return normalize(left).toLowerCase() === normalize(right).toLowerCase();
  }
  return normalize(left) === normalize(right);
}

function compareDetails(legacy: ReferenceDetail, detail: ReferenceDetail): readonly ReferenceDetailParityDifference[] {
  const fields: readonly ReferenceDetailParityField[] = [
    "primary",
    "background",
    "foreground",
    "fontFamily",
    "radius",
  ];
  return fields.flatMap((field) =>
    equivalent(field, legacy[field], detail[field])
      ? []
      : [{ field, legacy: legacy[field], ast: detail[field] }],
  );
}

/**
 * Project canonical AST facts into the legacy-compatible response shape. Any
 * absent canonical fact remains visible in `compatibilityFallbacks` instead of
 * being silently represented as authoritative AST data.
 */
export function projectAstReferenceDetail(
  ast: ReferenceAst,
  legacy: ReferenceDetail,
): AstReferenceDetailProjection {
  const foundations = selectReferenceFoundations(ast);
  const canonical = <T,>(value: { value: T; origin: string; confidence: string } | null) =>
    value?.origin === "frontmatter" && value.confidence === "high" ? value : null;
  const primary = canonical(foundations.primary);
  const canvas = canonical(foundations.canvas);
  const foreground = canonical(foundations.foreground);
  const uiFont = canonical(foundations.uiFont);
  const radius = canonical(foundations.radius);
  const displayFont = uiFont ? displayFontFromStack(uiFont.value) : null;

  const compatibilityFallbacks: ReferenceDetailParityField[] = [];
  if (!primary) compatibilityFallbacks.push("primary");
  if (!canvas) compatibilityFallbacks.push("background");
  if (!foreground) compatibilityFallbacks.push("foreground");
  if (!displayFont) compatibilityFallbacks.push("fontFamily");
  if (!radius) compatibilityFallbacks.push("radius");

  const detail: ReferenceDetail = {
    ...legacy,
    primary: primary?.value ?? "",
    background: canvas?.value ?? "",
    foreground: foreground?.value ?? "",
    fontFamily: displayFont ?? "",
    radius: radius?.value ?? "",
  };
  const differences = compareDetails(legacy, detail);

  return {
    detail,
    contract: {
      schemaVersion: ast.schemaVersion,
      quality: ast.quality,
      foundations,
      tokens: ast.tokens,
      evidence: ast.evidence,
      compatibilityFallbacks,
      parity: {
        matches: differences.length === 0,
        differences,
      },
    },
  };
}
