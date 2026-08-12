import type { Overrides, StylePreferences } from "@/lib/core/types";
import coreConformanceModule from "../../../../scripts/design-md-core-conformance.cjs";

export const DESIGN_MD_CORE_SECTIONS = [
  { id: "experience", heading: "Experience" },
  { id: "foundations", heading: "Foundations" },
  { id: "typography-assets", heading: "Typography & Assets" },
  { id: "components-states", heading: "Components & States" },
  { id: "layout-platforms", heading: "Layout & Platforms" },
  { id: "content-locales", heading: "Content & Locales" },
  { id: "governance", heading: "Governance" },
] as const;

export const DESIGN_MD_VALIDATE_COMMAND = "npx oh-my-design-cli@latest design-md validate DESIGN.md";

export type DesignMdCoreSectionId = (typeof DESIGN_MD_CORE_SECTIONS)[number]["id"];

export interface BuilderDesignDecision {
  readonly path: string;
  readonly section: DesignMdCoreSectionId;
  readonly label: string;
  readonly value: string | boolean;
  readonly source: "user-instruction";
}

/**
 * Browser-safe projection of the normative Core engine's conformance result.
 * Keep the field names aligned with `scripts/design-md-core.cjs`; the Builder
 * must display that verdict rather than reimplementing its usefulness rules.
 */
export interface BuilderDesignMdCoreConformance {
  readonly level: "portable-core" | "structural-core" | "none";
  readonly structurally_valid: boolean;
  readonly portable_core: boolean;
  readonly reasons: readonly {
    readonly code: string;
    readonly message: string;
  }[];
}

export interface BuilderDesignMdCoreStatusCopy {
  readonly title: string;
  readonly description: string;
  readonly tone: "pass" | "warning" | "error";
}

export function describeBuilderDesignMdCoreConformance(
  conformance: BuilderDesignMdCoreConformance,
): BuilderDesignMdCoreStatusCopy {
  if (conformance.portable_core) {
    return {
      title: "Portable Core",
      description: "This standalone reference projection passes the Portable Core usefulness checks. It remains reference evidence until you explicitly adopt it for a project.",
      tone: "pass",
    };
  }
  if (!conformance.structurally_valid) {
    return {
      title: "Core validation failed",
      description: "The export does not currently satisfy the Core v2 structural contract. Review every validation reason before adoption.",
      tone: "error",
    };
  }
  const contextOnly = conformance.reasons.length > 0 && conformance.reasons.every(({ code }) => (
    code === "missing-product-surface-scope" || code === "missing-primary-task"
  ));
  return contextOnly
    ? {
        title: "Structural Core — project context required",
        description: "The seven-section Core v2 structure is valid, but the reference does not establish your project's product surface or primary task. Supply that context, then validate again.",
        tone: "warning",
      }
    : {
        title: "Structural Core — validation work required",
        description: "The seven-section Core v2 structure is valid, but the document does not yet pass every standalone usefulness check. Resolve the reasons below, then validate again.",
        tone: "warning",
      };
}

const coreConformance = coreConformanceModule as {
  evaluatePortableCoreClaims(
    markdown: string,
    options: { structurallyValid: boolean; cleanTop: boolean; projectionLocale?: string },
  ): BuilderDesignMdCoreConformance;
};

export interface BuilderDesignMdCoreProjection {
  readonly markdown: string;
  readonly decisions: readonly BuilderDesignDecision[];
  /** Normative shared-engine verdict for this exact byte string. */
  readonly conformance: BuilderDesignMdCoreConformance;
  readonly diagnostics: {
    readonly substantiveSourceSections: number;
    readonly mappedSections: number;
    readonly preservedUnclassifiedSections: readonly string[];
    readonly omittedMetadataSections: readonly string[];
  };
}

interface ParsedSection {
  readonly anchor: string | null;
  readonly heading: string;
  readonly body: string;
}

interface ProjectionInput {
  readonly source: string;
  readonly referenceName: string;
  readonly original: Pick<Overrides, "primaryColor" | "fontFamily" | "headingWeight" | "borderRadius">;
  readonly overrides: Overrides;
  /**
   * The current wizard initializes these choices before the user touches them.
   * Only values that differ from those implicit defaults can be promoted as
   * explicit decisions; default-valued preferences remain non-authoritative.
   */
  readonly stylePreferences?: StylePreferences;
  /**
   * The current Builder also seeds a generic component list. It is deliberately
   * ignored here: only components established by the reference body are kept.
   */
  readonly components?: readonly string[];
  /**
   * Reference exports preserve observed evidence. Selection-led authoring
   * produces proposals instead; those values must never be presented as
   * verified product facts merely because they pass through the same
   * portable Core renderer.
   */
  readonly authorityKind?: "evidence-backed-reference" | "user-authored-proposal" | "control-state-proposal";
}

const CORE_SECTION_IDS = new Set<string>(DESIGN_MD_CORE_SECTIONS.map(({ id }) => id));

const LEGACY_SECTION_TARGETS: readonly {
  readonly target: DesignMdCoreSectionId;
  readonly patterns: readonly RegExp[];
}[] = [
  {
    target: "experience",
    patterns: [
      /\bexperience\b/i,
      /^(?:scope|(?:product|project|surface|design\s+system).{0,12}scope)$/i,
      /^(?:(?:primary|core|key|main)\s+)?(?:user\s+)?(?:tasks?|jobs?(?:\s+to\s+be\s+done)?|journeys?|outcomes?)$/i,
      /visual\s+(?:theme|direction|atmosphere)/i,
      /\bbrand\s+narrative\b/i,
      /^principles?$/i,
      /do['’]?s?\s+and\s+don['’]?ts?/i,
      /\bpersonas?\b/i,
    ],
  },
  {
    target: "foundations",
    patterns: [
      /\bfoundations?\b/i,
      /\bcolou?r\b/i,
      /depth\s*(?:&|and)?\s*elevation/i,
      /motion\s*(?:&|and)?\s*easing/i,
      /\b(?:spacing|shape|radius|geometry|shadow|z-index|visual effects?|dark mode|tokens?)\b/i,
    ],
  },
  {
    target: "typography-assets",
    patterns: [
      /typography/i,
      /\btype\s+system\b/i,
      /\bfonts?\b/i,
      /\bassets?\b/i,
      /\bimagery\b/i,
      /\bicons?\b/i,
      /\blogos?\b/i,
    ],
  },
  {
    target: "components-states",
    patterns: [/\bcomponents?\b/i, /^states?$/i, /interaction\s+states?/i],
  },
  {
    target: "layout-platforms",
    patterns: [/\blayout\b/i, /responsive/i, /\bplatforms?\b/i, /\breflow\b/i],
  },
  {
    target: "content-locales",
    patterns: [/voice\s*(?:&|and)?\s*tone/i, /\bcontent\b/i, /\blocales?\b/i, /localization/i],
  },
  {
    target: "governance",
    patterns: [
      /\bgovernance\b/i,
      /agent\s+prompt/i,
      /application\s+rules?/i,
      /\baccessibility\b/i,
      /\bimplementation\b/i,
      /\busage guidelines?\b/i,
      /\badaptation\b/i,
    ],
  },
];

const PURE_METADATA_HEADING = /^(?:verification(?: footer| log)?|source urls?|reference urls?|audit(?: log)?|quality tier)$/i;
const EXPLICIT_SCOPE_HEADING = /^(?:scope|(?:product|project|surface|experience|design\s+system)(?:\s*(?:\/|&|and|\+|:|-))?\s*scope)$/i;
const EXPLICIT_TASKS_HEADING = /^(?:(?:primary|core|key|main)\s+)?(?:user\s+)?(?:tasks?|jobs?(?:\s+to\s+be\s+done)?|journeys?|outcomes?)$/i;

function normalizedHeading(value: string): string {
  return value.replace(/^#{1,6}\s+/, "").replace(/^\d+(?:\.\d+)*\.?\s*/, "").trim();
}

function insertClaimBeforeExplicitHeading(
  body: string,
  claim: "scope" | "primary-tasks",
  headingPattern: RegExp,
): { body: string; inserted: boolean } {
  const lines = body.split("\n");
  let headingLevel = 0;
  const index = lines.findIndex((line) => {
    const match = line.trim().match(/^(#{3,6})\s+(.+?)\s*$/);
    if (match && headingPattern.test(normalizedHeading(match[2]))) {
      headingLevel = match[1].length;
      return true;
    }
    return false;
  });
  if (index < 0) return { body, inserted: false };
  const end = lines.findIndex((line, lineIndex) => (
    lineIndex > index && new RegExp(`^#{1,${headingLevel}}\\s+`).test(line.trim())
  ));
  const bodyEnd = end < 0 ? lines.length : end;
  const claimBody = lines.slice(index, bodyEnd).join("\n");
  const taskCount = taskListCount(claimBody);
  const attributes = claim === "scope"
    ? "kind=product-surface lang=en"
    : `kind=user-outcomes count=${taskCount} lang=en`;
  if (claim === "primary-tasks" && taskCount === 0) {
    return { body, inserted: false };
  }
  lines.splice(index, 0, `<!-- design-md:claim ${claim} ${attributes} -->`);
  lines.splice(bodyEnd + 1, 0, "<!-- design-md:claim-end -->");
  return { body: lines.join("\n"), inserted: true };
}

function taskListCount(value: string): number {
  return (value.match(/^\s*(?:[-*+] |\d+\.\s+)\S.+$/gm) ?? []).length;
}

function addEvidenceClaimMarkers(
  section: ParsedSection,
  target: DesignMdCoreSectionId,
  rendered: string,
  claims: Set<string>,
): string {
  if (target === "foundations" && !claims.has("foundations")) {
    claims.add("foundations");
    return `<!-- design-md:claim foundations kind=rules-or-constraints lang=en -->\n${rendered}\n<!-- design-md:claim-end -->`;
  }
  if (target !== "experience") return rendered;

  let output = rendered;
  const heading = normalizedHeading(section.heading);
  if (!claims.has("scope")) {
    if (EXPLICIT_SCOPE_HEADING.test(heading)) {
      output = `<!-- design-md:claim scope kind=product-surface lang=en -->\n${output}\n<!-- design-md:claim-end -->`;
      claims.add("scope");
    } else {
      const inserted = insertClaimBeforeExplicitHeading(output, "scope", EXPLICIT_SCOPE_HEADING);
      output = inserted.body;
      if (inserted.inserted) claims.add("scope");
    }
  }
  if (!claims.has("primary-tasks")) {
    const declaredTasks = taskListCount(output);
    if (EXPLICIT_TASKS_HEADING.test(heading) && declaredTasks > 0) {
      output = `<!-- design-md:claim primary-tasks kind=user-outcomes count=${declaredTasks} lang=en -->\n${output}\n<!-- design-md:claim-end -->`;
      claims.add("primary-tasks");
    } else {
      const inserted = insertClaimBeforeExplicitHeading(output, "primary-tasks", EXPLICIT_TASKS_HEADING);
      output = inserted.body;
      if (inserted.inserted) claims.add("primary-tasks");
    }
  }
  return output;
}

function withoutFrontmatter(markdown: string): string[] {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  if (lines[0]?.trim() !== "---") return lines;
  const end = lines.findIndex((line, index) => index > 0 && line.trim() === "---");
  return end < 0 ? lines : lines.slice(end + 1);
}

function parseSections(markdown: string): { title: string | null; sections: readonly ParsedSection[] } {
  const lines = withoutFrontmatter(markdown);
  let title: string | null = null;
  let pendingAnchor: string | null = null;
  let current: { anchor: string | null; heading: string; lines: string[] } | null = null;
  const sections: { anchor: string | null; heading: string; lines: string[] }[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!title && trimmed.startsWith("# ")) {
      title = trimmed.slice(2).trim();
      continue;
    }
    const anchorMatch = trimmed.match(/^<!--\s*design-md:section\s+([a-z0-9-]+)\s*-->$/i);
    if (anchorMatch) {
      pendingAnchor = anchorMatch[1].toLowerCase();
      continue;
    }
    if (trimmed.startsWith("## ") && !trimmed.startsWith("### ")) {
      if (current) sections.push(current);
      current = { anchor: pendingAnchor, heading: trimmed.slice(3).trim(), lines: [] };
      pendingAnchor = null;
      continue;
    }
    if (current) current.lines.push(line);
  }
  if (current) sections.push(current);

  return {
    title,
    sections: sections.map(({ anchor, heading, lines: bodyLines }) => ({
      anchor,
      heading,
      body: sanitizePortableBody(bodyLines),
    })),
  };
}

function sanitizePortableBody(lines: readonly string[]): string {
  const output: string[] = [];
  let comment: string[] | null = null;

  for (const sourceLine of lines) {
    const line = sourceLine.trim() === "---" ? "" : sourceLine;
    if (comment) {
      comment.push(line);
      if (line.includes("-->")) {
        const value = comment.join("\n");
        if (!/(?:oh-my-design|\bomd\b|sources?|verified|verification|quality|generator)/i.test(value)) {
          output.push(...comment);
        }
        comment = null;
      }
      continue;
    }
    if (line.includes("<!--")) {
      comment = [line];
      if (line.includes("-->")) {
        const value = comment.join("\n");
        if (!/(?:oh-my-design|\bomd\b|sources?|verified|verification|quality|generator)/i.test(value)) {
          output.push(line);
        }
        comment = null;
      }
      continue;
    }
    if (/^\*\*(?:verified|tier\s+[12]\s+sources?|surface\s+split|conflicts?\s+unresolved|quality\s+tier|generated\s+by):\*\*/i.test(line.trim())) {
      continue;
    }

    output.push(neutralizeCaptureInstrumentation(line));
  }
  if (comment && !/(?:oh-my-design|\bomd\b|sources?|verified|verification|quality|generator)/i.test(comment.join("\n"))) {
    output.push(...comment);
  }

  while (output[0]?.trim() === "") output.shift();
  while (output.at(-1)?.trim() === "") output.pop();
  return output.join("\n").replace(/\n{3,}/g, "\n\n");
}

function neutralizeCaptureInstrumentation(line: string): string {
  const legacyPlaceholder = /(?:\*\*|`)?\[\s*(?:FILL\s+IN|TODO|TBD|UNKNOWN|UNRESOLVED|NOT\s+SPECIFIED)(?:\s*(?::|—|-)\s*[^\]]*)?\s*\](?:\*\*|`)?/gi;
  if (legacyPlaceholder.test(line)) {
    legacyPlaceholder.lastIndex = 0;
    const trimmed = line.trim();
    if (/^\|.*\|$/.test(trimmed)) {
      const cells = trimmed.slice(1, -1).split("|");
      const resolvedCells = cells.map((cell) => {
        legacyPlaceholder.lastIndex = 0;
        const withoutMarker = cell.replace(legacyPlaceholder, "").trim();
        return withoutMarker.replace(/[*_`\s.;:,—-]/g, "") ? withoutMarker : "";
      });
      // Preserve every resolved sibling cell. An unresolved value disappears
      // at its own cell boundary instead of deleting the entire evidence row.
      if (!resolvedCells.some((cell) => cell)) return "";
      line = `| ${resolvedCells.join(" | ")} |`;
    } else {
      const withoutMarker = line.replace(legacyPlaceholder, "");
      if (!withoutMarker.replace(/[*_`\s.;:,—-]/g, "")) return "";
      // If a bullet contained both a known fact and an unresolved sibling,
      // keep the known text instead of discarding the whole item.
      line = withoutMarker.replace(/\s{2,}/g, " ").replace(/\s+([.;:,])/g, "$1").trimEnd();
    }
  }
  return line
    // Legacy references used placeholder labels even when the following prose
    // already stated the exact evidence boundary. Portable Core keeps that
    // useful boundary and removes the sentinel; a bare sentinel becomes absent.
    .replace(/\[data-omd-(?:interaction-)?capture(?:=[^\]]+)?\]/gi, "[captured element]")
    .replace(/\b(?:oh-my-design|omd(?::(?:add-reference|migrate|update))?)\b/gi, "the source catalog")
    .replace(/\bthe source catalog\s+v?0\.1\b/gi, "the source catalog")
    // Bare legacy sentinels are not Core values. Preserve useful evidence-
    // boundary prose while replacing a table label or sentence prefix with a
    // neutral description; a truly empty sentinel was removed above.
    .replace(/\|\s*(?:\*\*|`)?(?:TODO|TBD|UNKNOWN|UNRESOLVED|NOT\s+SPECIFIED)(?:\*\*|`)?\s*\|/gi, "| Evidence boundary |")
    .replace(/\b(?:TODO|TBD|UNKNOWN|UNRESOLVED|NOT\s+SPECIFIED)\s*:/gi, "Not established:")
    .replace(/:\s*(?:\*\*|`)?\s*(?:TODO|TBD|UNKNOWN|UNRESOLVED|NOT\s+SPECIFIED)(?:\*\*|`)?\s*$/gi, ": not established");
}

function sectionTarget(section: ParsedSection): DesignMdCoreSectionId | null {
  if (section.anchor && CORE_SECTION_IDS.has(section.anchor)) {
    return section.anchor as DesignMdCoreSectionId;
  }
  const heading = section.heading.replace(/^\d+(?:\.\d+)*\.?\s*/, "").trim();
  return LEGACY_SECTION_TARGETS.find(({ patterns }) => patterns.some((pattern) => pattern.test(heading)))?.target ?? null;
}

function portableTitle(sourceTitle: string | null, referenceName: string): string {
  const clean = (sourceTitle ?? "")
    .replace(/^design\s+system\s+inspiration\s+(?:of|for)\s+/i, "")
    .replace(/\s+reference\s+design\s+system$/i, "")
    .trim();
  if (/design\s+system$/i.test(clean)) return clean;
  const identity = clean || referenceName.trim() || "Reference";
  return `${identity} Reference Design System`;
}

function changed(value: string, original: string): boolean {
  return value.trim() !== "" && value.trim().toLowerCase() !== original.trim().toLowerCase();
}

const IMPLICIT_WIZARD_STYLE_DEFAULTS: Readonly<Record<string, string>> = {
  buttonStyle: "sharp",
  inputStyle: "bordered",
  headerStyle: "glass",
  cardStyle: "bordered",
  density: "spacious",
};

const STYLE_DECISION_FIELDS: Readonly<Record<string, {
  readonly path: string;
  readonly section: DesignMdCoreSectionId;
  readonly label: string;
}>> = {
  buttonStyle: { path: "components_states.button.style", section: "components-states", label: "Button style" },
  inputStyle: { path: "components_states.input.style", section: "components-states", label: "Input style" },
  headerStyle: { path: "components_states.navigation.style", section: "components-states", label: "Navigation style" },
  cardStyle: { path: "components_states.card.style", section: "components-states", label: "Card style" },
  density: { path: "layout_platforms.density", section: "layout-platforms", label: "Layout density" },
};

export function buildBuilderDesignDecisions(input: Pick<ProjectionInput, "original" | "overrides" | "stylePreferences">): readonly BuilderDesignDecision[] {
  const { original, overrides, stylePreferences } = input;
  const decisions: BuilderDesignDecision[] = [];
  if (changed(overrides.primaryColor, original.primaryColor)) {
    decisions.push({ path: "foundations.color.primary", section: "foundations", label: "Primary color", value: overrides.primaryColor, source: "user-instruction" });
  }
  if (changed(overrides.borderRadius, original.borderRadius)) {
    decisions.push({ path: "foundations.shape.radius", section: "foundations", label: "Border radius", value: overrides.borderRadius, source: "user-instruction" });
  }
  if (changed(overrides.fontFamily, original.fontFamily)) {
    decisions.push({ path: "typography_assets.type.family.ui", section: "typography-assets", label: "UI font family", value: overrides.fontFamily, source: "user-instruction" });
  }
  if (changed(overrides.headingWeight, original.headingWeight)) {
    decisions.push({ path: "typography_assets.type.heading.weight", section: "typography-assets", label: "Heading weight", value: overrides.headingWeight, source: "user-instruction" });
  }
  if (overrides.darkMode) {
    decisions.push({ path: "foundations.color.modes.dark.required", section: "foundations", label: "Dark mode required", value: true, source: "user-instruction" });
  }
  for (const [key, field] of Object.entries(STYLE_DECISION_FIELDS)) {
    const value = stylePreferences?.[key];
    // The wizard eagerly seeds its defaults, so a default-valued preference
    // is not proof of a user choice. A non-default value can only arrive after
    // an explicit selection (or an explicit shared Builder configuration).
    if (!value || value === IMPLICIT_WIZARD_STYLE_DEFAULTS[key]) continue;
    decisions.push({ ...field, value, source: "user-instruction" });
  }
  return decisions;
}

function decisionBlock(decisions: readonly BuilderDesignDecision[]): string {
  if (decisions.length === 0) return "";
  const rows = decisions.map((decision) => {
    if (decision.path === "foundations.color.modes.dark.required") {
      return "- **Dark mode required:** yes. Exact dark-mode token values remain unspecified; do not derive them from the reference palette.";
    }
    return `- **${decision.label}:** \`${String(decision.value)}\` (explicit user instruction)`;
  });
  return [
    "### Explicit user selections",
    "",
    "If adopted for a project, these selections take precedence over conflicting reference observations in this section.",
    "",
    ...rows,
  ].join("\n");
}

function provenanceBlock(decisions: readonly BuilderDesignDecision[]): string {
  if (decisions.length === 0) return "";
  return [
    "### Decision provenance",
    "",
    "| Decision path | Value | Source |",
    "|---|---|---|",
    ...decisions.map((decision) => `| \`${decision.path}\` | \`${String(decision.value)}\` | User instruction |`),
  ].join("\n");
}

function governanceRules(authorityKind: NonNullable<ProjectionInput["authorityKind"]>): string {
  const isProposal = authorityKind === "user-authored-proposal" || authorityKind === "control-state-proposal";
  const authorityClaim = isProposal
    ? "portable-brief"
    : "evidence-backed-reconstruction";
  const authorityRule = isProposal
    ? "This document is a portable design brief for the declared scope."
    : "This document is an evidence-backed reconstruction, not authority for an unrelated target project.";
  return [
    ...(isProposal ? [
      "### Proposal boundary",
      "",
      "Values in this file are project proposals from the current control state. Unchanged defaults are generator proposals, not user-authored or observed production facts. Explicit selections remain proposals until project evidence or owner adoption binds them.",
      "",
      "Unknown values remain absent at the smallest unresolved field or group boundary.",
      "",
    ] : []),
    `<!-- design-md:claim authority kind=${authorityClaim} lang=en -->`,
    "### Authority",
    "",
    authorityRule,
    "<!-- design-md:claim-end -->",
    "",
    "<!-- design-md:claim application-priority order=prompt-fact,repository-fact,system-contract,reference-inspiration lang=en -->",
    "### Application priority",
    "",
    "1. Direct user instructions for the requested scope.",
    "2. Repository facts.",
    "3. This system contract.",
    "4. Reference inspiration.",
    "<!-- design-md:claim-end -->",
    "",
    "<!-- design-md:claim unknowns policy=absent-at-smallest-unresolved-boundary lang=en -->",
    "### Unknowns",
    "",
    "Omit only the smallest unresolved value or group. Do not replace it with a plausible default.",
    "<!-- design-md:claim-end -->",
    "",
    "<!-- design-md:claim changes policy=review-record-validate-before-adoption lang=en -->",
    "### Changes",
    "",
    "Record, review, and validate changes before adoption.",
    "<!-- design-md:claim-end -->",
  ].join("\n");
}

function legacySectionBlock(section: ParsedSection): string {
  const heading = neutralizeCaptureInstrumentation(
    section.heading.replace(/^\d+(?:\.\d+)*\.?\s*/, "").trim(),
  );
  return [`### ${heading}`, section.body].filter(Boolean).join("\n\n");
}

function preservedSourceBlock(section: ParsedSection): string {
  const heading = neutralizeCaptureInstrumentation(
    section.heading.replace(/^\d+(?:\.\d+)*\.?\s*/, "").trim(),
  );
  return [
    `### Preserved source material — ${heading}`,
    "",
    "This material is retained for review because it has not yet been assigned to a typed Core field. Do not promote it to a token or product fact without an explicit decision.",
    "",
    section.body,
  ].join("\n");
}

export function projectBuilderDesignMdCore(input: ProjectionInput): BuilderDesignMdCoreProjection {
  // The generic component list is intentionally acknowledged but not read;
  // see the interface comment for the authority boundary.
  void input.components;

  const parsed = parseSections(input.source);
  const authorityKind = input.authorityKind ?? "evidence-backed-reference";
  const sourceIsCore = DESIGN_MD_CORE_SECTIONS.every(({ id }) => parsed.sections.some((section) => section.anchor === id));
  const evidenceClaims = new Set(
    [...input.source.matchAll(/<!--\s*design-md:claim\s+([a-z][a-z0-9-]*)\b[^>]*-->/g)]
      .map((match) => match[1]),
  );
  const buckets = new Map<DesignMdCoreSectionId, string[]>(DESIGN_MD_CORE_SECTIONS.map(({ id }) => [id, []]));
  const preservedUnclassifiedSections: string[] = [];
  const omittedMetadataSections: string[] = [];
  let substantiveSourceSections = 0;
  let mappedSections = 0;

  for (const section of parsed.sections) {
    if (!section.body) continue;
    substantiveSourceSections += 1;
    const target = sectionTarget(section);
    if (!target) {
      const normalizedHeading = section.heading.replace(/^\d+(?:\.\d+)*\.?\s*/, "").trim();
      if (PURE_METADATA_HEADING.test(normalizedHeading)) {
        omittedMetadataSections.push(section.heading);
        continue;
      }
      preservedUnclassifiedSections.push(section.heading);
      buckets.get("governance")?.push(preservedSourceBlock(section));
      continue;
    }
    mappedSections += 1;
    let rendered = sourceIsCore ? section.body : legacySectionBlock(section);
    if (target === "governance") {
      rendered = rendered.replace(
        /<!--\s*design-md:claim\s+(?:authority|application-priority|unknowns|changes)\b[^>]*-->\s*/g,
        "",
      ).replace(/<!--\s*design-md:claim-end\s*-->\s*/g, "");
    }
    buckets.get(target)?.push(addEvidenceClaimMarkers(section, target, rendered, evidenceClaims));
  }

  const decisions = buildBuilderDesignDecisions(input);
  const renderedSections = DESIGN_MD_CORE_SECTIONS.map(({ id, heading }, index) => {
    const content = [...(buckets.get(id) ?? [])];
    const localDecisions = decisions.filter((decision) => decision.section === id);
    if (localDecisions.length > 0) content.unshift(decisionBlock(localDecisions));
    if (id === "governance") {
      const provenance = provenanceBlock(decisions);
      if (provenance) content.push(provenance);
      // The canonical controlled claims come last so preserved source prose
      // cannot become part of the exact `changes` declaration body.
      content.push(governanceRules(authorityKind));
    }
    const body = content.filter(Boolean).join("\n\n");
    return `<!-- design-md:section ${id} -->\n## ${index + 1}. ${heading}${body ? `\n\n${body}` : ""}`;
  });

  const markdown = `# ${portableTitle(parsed.title, input.referenceName)}\n\n${renderedSections.join("\n\n")}\n`;
  const conformance = coreConformance.evaluatePortableCoreClaims(markdown, {
    // The renderer owns these two invariants: it always emits exactly the
    // seven ordered Core anchors, without frontmatter or producer metadata.
    structurallyValid: true,
    cleanTop: true,
    projectionLocale: "en",
  });

  return {
    markdown,
    decisions,
    conformance,
    diagnostics: {
      substantiveSourceSections,
      mappedSections,
      preservedUnclassifiedSections,
      omittedMetadataSections,
    },
  };
}
