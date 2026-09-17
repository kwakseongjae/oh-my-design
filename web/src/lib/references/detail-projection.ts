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
/**
 * Core v2 documents carry no frontmatter and none of the legacy section
 * numbering — identity moved to the provenance sidecar, and tokens live as
 * role-labelled bullets inside marker-delimited contract sections:
 *
 *   - **Canvas** (`#ffffff`): repeated white page surface.
 *
 * So a v2 document gets its own extractor instead of returning a detail whose
 * every field silently fell through two parsers built for the old shape. What
 * a role bullet does not state is left empty — the builder already renders
 * absent fields as absent, and inventing a value here would undo the exact
 * rule the migration enforces.
 */
export function isCoreV2Document(designMd: string): boolean {
  return designMd.includes("design-md:section") && designMd.includes("design-md:claim");
}

function coreV2Section(designMd: string, section: string): string {
  const re = new RegExp(`<!-- design-md:section ${section} -->([\\s\\S]*?)(?=<!-- design-md:section |$)`);
  return re.exec(designMd)?.[1] ?? "";
}

/**
 * Role-labelled colour bullets. Two notations exist across the migrated set —
 * `- **Role** (\`#hex\`): …` and `- **Role** — \`#hex\`: …` — so the parser
 * accepts a role in bold followed by hexes anywhere before the line's prose.
 */
function roleBullets(sectionText: string): Array<{ role: string; hexes: string[]; description: string }> {
  const out: Array<{ role: string; hexes: string[]; description: string }> = [];
  for (const m of sectionText.matchAll(/^- \*\*([^*]+)\*\*\s*(?:\(([^)]*)\)|[—–-]\s*(`[^:\n]*))\s*:?\s*([^\n]*)/gm)) {
    const head = m[2] ?? m[3] ?? "";
    const hexes = [...head.matchAll(/#[0-9a-fA-F]{6}/g)].map((h) => h[0]);
    if (hexes.length) out.push({ role: m[1].trim(), hexes, description: m[4] ?? "" });
  }
  return out;
}

function exactHeadingWeight(sectionText: string): string {
  const lines = sectionText.split("\n");
  for (let headerIndex = 0; headerIndex < lines.length - 2; headerIndex += 1) {
    if (!/^\s*\|.*\|\s*$/.test(lines[headerIndex])) continue;
    const cells = lines[headerIndex].trim().slice(1, -1).split("|").map((cell) => cell.trim().toLowerCase());
    const roleIndex = cells.indexOf("role");
    const weightIndex = cells.indexOf("weight");
    if (roleIndex < 0 || weightIndex < 0 || !/^\s*\|(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(lines[headerIndex + 1])) continue;
    for (const row of lines.slice(headerIndex + 2)) {
      if (!/^\s*\|.*\|\s*$/.test(row)) break;
      const values = row.trim().slice(1, -1).split("|").map((cell) => cell.replace(/[*_`]/g, "").trim());
      if (!/^(?:heading|display)$/i.test(values[roleIndex] ?? "")) continue;
      const weight = values[weightIndex] ?? "";
      if (/^(?:[1-9]\d{1,3}|thin|light|normal|regular|medium|semi-bold|bold|extra-bold|black)$/i.test(weight)) {
        return weight;
      }
    }
  }
  return "";
}

export function extractCoreV2ReferenceDetail(
  id: string,
  designMd: string,
): ReferenceDetail {
  const foundations = coreV2Section(designMd, "foundations");
  const typography = coreV2Section(designMd, "typography-assets");
  const experience = coreV2Section(designMd, "experience");

  const bullets = roleBullets(foundations);
  const byExactRole = (role: string) => bullets.find(
    (bullet) => bullet.role.trim().toLowerCase() === role,
  ) ?? null;

  // Only exact global role labels enter the compatibility detail. Qualifiers
  // such as Corporate, Card, Marketing, or Surface-local identify a narrower
  // evidence domain and cannot fill the catalog-wide field.
  const primary = byExactRole("primary");
  const canvas = byExactRole("canvas");
  const foreground = byExactRole("foreground");
  const border = byExactRole("border");

  // Typography: the Family contract's canonical bullet carries the face in a
  // code span — "**Canonical visible UI family:** \`Toss Product Sans\`".
  // A system-stack answer ("operating-system stack beginning \`-apple-system\`")
  // is a real answer too, but it is not a named face, so it stays empty here —
  // rendering \`-apple-system\` as though it were a brand font is exactly the
  // substitution the documents forbid.
  // A corporate, marketing, display, or mono observation is not the global
  // UI family. Match the declaration label, not any phrase containing "family".
  const familyBullet =
    /^- \*\*(?:(?:Primary\s*\/\s*)?(?:(?:Current|Canonical)\s+)?(?:(?:visible|named)\s+)?UI family|(?:Current\s+)?official app family):\*\*\s*([^\n]+)/im.exec(typography)?.[1] ?? "";
  // The code span may hold a full CSS stack — the named face is its first
  // entry, quoted or bare ("Netflix Sans", Helvetica, ... / Pretendard, ...).
  const namedSpan = /`([^`]{1,120})`/.exec(familyBullet);
  const beforeName = namedSpan ? familyBullet.slice(0, namedSpan.index) : familyBullet;
  const afterName = namedSpan ? familyBullet.slice(namedSpan.index + namedSpan[0].length) : "";
  // A candidate is not a confirmed family. A separate limitation on loading
  // the font binary is deliberately not a negation of known family metadata.
  const unresolvedFamily = /\b(?:unresolved|unknown|unconfirmed|candidate)\b/i.test(beforeName)
    || /^[\s).:;—–-]*(?:(?:is|remains)\s+)?(?:not\s+(?:confirmed|verified)|unconfirmed|unverified|unresolved|unknown)\b/i.test(afterName);
  const stack = unresolvedFamily ? "" : namedSpan?.[1] ?? "";
  const firstEntry = stack.split(",")[0]?.trim().replace(/^["']|["']$/g, "") ?? "";
  const fontFamily = isSystemFontStack(stack)
    || /^(?:System|serif|sans-serif|monospace|ui-serif|ui-sans-serif|ui-monospace|ui-rounded)$/i.test(firstEntry)
    ? "" : firstEntry;
  const headingWeight = exactHeadingWeight(typography);

  // Shape is admitted only from a structured bullet whose label itself names
  // a catalog-wide role. Radius-like prose and component-local observations
  // remain narrative. A negation anywhere on the declaration line invalidates
  // it, including labels such as "Default radius" followed by "not canonical".
  const radiusLine = foundations.split("\n").find((line) => {
    const declaration = /^- \*\*([^*]+)\*\*\s*(?:\(\s*`?(\d+(?:\.\d+)?px)`?\s*\)|[:—–-]?\s*`(\d+(?:\.\d+)?px)`)/i.exec(line);
    if (!declaration) return false;
    const label = declaration[1].trim();
    return /(?:^|\s)(?:canonical|default|system-wide|universal)(?:\s|$)/i.test(label)
      && /(?:radius|corner)/i.test(label)
      && !/\b(?:not|isn't|is not|noncanonical|non-canonical|local|surface)\b/i.test(line);
  }) ?? "";
  const radius = /`(\d+(?:\.\d+)?px)`/.exec(radiusLine)?.[1]
    ?? /\(\s*(\d+(?:\.\d+)?px)\s*\)/.exec(radiusLine)?.[1]
    ?? "";

  // Mood: the scope claim's opening paragraph — the sentence the document
  // itself leads with.
  const mood =
    /### Scope\s*\n+([\s\S]*?)(?=\n\n|\n<!--)/.exec(experience)?.[1]?.trim().slice(0, 400) ?? "";

  return {
    id,
    designMd,
    primary: primary?.hexes[0] ?? "",
    background: canvas?.hexes[0] ?? "",
    foreground: foreground?.hexes[0] ?? "",
    fontFamily,
    headingWeight,
    radius,
    mood,
    border: border?.hexes[0],
  };
}

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
