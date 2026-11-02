import { z } from "zod";
import metadata from "./catalog.generated.json";
import { PKG_VERSION } from "@/data/version.generated";

export const NOTICE = "Descriptions of public product surfaces for design reference. Not affiliated with or endorsed by the companies named.";
export const CATALOG = { ...metadata, version: PKG_VERSION };
export const TOKEN_GROUPS = ["colors", "typography", "rounded", "spacing", "shadow", "motion"] as const;
export const ASPECTS = ["colors", "typography", "radius", "components", "motion"] as const;
export const SECTIONS = ["Overview", "Colors", "Typography", "Layout", "Elevation & Depth", "Motion & Easing", "Components", "Do's and Don'ts", "Voice & Tone", "Agent Prompt Guide", "Governance", "CJK Typesetting"] as const;
export const STATES = ["hover", "pressed", "focus"] as const;

export const annotations = { readOnlyHint: true, idempotentHint: true, openWorldHint: false } as const;
const id = z.string().min(1).max(80).describe("Exact catalog id; use search_references to discover it. Names are never substituted.");
export const inputs = {
  search_references: z.object({
    query: z.string().max(500).optional(),
    country: z.array(z.string().min(1).max(40)).max(30).optional(),
    category: z.array(z.string().min(1).max(80)).max(30).optional(),
    status: z.enum(["verified", "any"]).optional().describe("verified filters to verified_v2; any (default) includes all, verified first."),
    limit: z.number().int().min(1).max(20).optional(),
  }).strict(),
  get_reference: z.object({ id }).strict(),
  get_design_md: z.object({ id, sections: z.array(z.enum(SECTIONS)).min(1).max(SECTIONS.length).optional() }).strict(),
  get_tokens: z.object({ id, groups: z.array(z.enum(TOKEN_GROUPS)).min(1).max(TOKEN_GROUPS.length).optional() }).strict(),
  get_component_states: z.object({ id, component: z.string().min(1).max(160).optional() }).strict(),
  compare_references: z.object({ ids: z.array(id).min(2).max(4).refine((ids) => new Set(ids).size === ids.length, "Use distinct reference ids."), aspects: z.array(z.enum(ASPECTS)).min(1).max(ASPECTS.length).optional() }).strict(),
};
export type ToolName = keyof typeof inputs;
export type ToolInput<T extends ToolName> = z.infer<(typeof inputs)[T]>;

const record = z.record(z.string(), z.json());
export const evidenceSchema = z.object({
  status: z.literal("unsourced").optional(),
  method: z.string().optional(),
  surface: record.optional(),
  source: record.optional(),
  captured: z.string().optional(),
}).catchall(z.json());
const trust = { trust: z.literal("unverified").optional(), reason_codes: z.array(z.string()).optional() };
export const urlsSchema = z.object({ page: z.string(), page_ko: z.string().optional(), raw: z.string() });
export const summarySchema = z.object({
  id: z.string(), name: z.string(), display_name_ko: z.string().optional(),
  country: z.string(), category: z.string(), homepage: z.string().optional(),
  status: z.enum(["verified_v2", "partial", "legacy"]),
  verified_at: z.string().optional(), next_reverify_at: z.string().optional(),
  urls: urlsSchema, absent: z.array(z.string()), ...trust,
});
export const substituteSchema = z.object({
  brand_family: z.string(), script: z.string(), family: z.string(),
  label: z.literal("substitute — not the brand face"),
  metrics: record,
}).catchall(z.json());
export const valueSchema = z.object({
  path: z.string(), value: z.json(), evidence: evidenceSchema,
  substitutes: z.array(substituteSchema).optional(), ...trust,
});
export const componentSchema = z.object({
  id: z.string(), type: z.string().optional(), type_evidence: evidenceSchema.optional(),
  description: z.string().optional(), rest: z.array(valueSchema),
  states: z.object({ hover: z.array(valueSchema).optional(), pressed: z.array(valueSchema).optional(), focus: z.array(valueSchema).optional() }),
  not_measured: z.array(z.enum(STATES)), absent: z.array(z.string()), ...trust,
});
export const fontsSchema = z.object({
  faces: z.record(z.string(), record).optional(),
  substitutes: z.array(substituteSchema).optional(),
  safe_defaults: z.record(z.string(), z.array(z.object({ family: z.string(), label: z.literal("safe default (not the brand face)") }))).optional(),
  narrative: z.string().optional(),
});
const common = {
  catalog: z.object({ version: z.string(), reference_ast: z.string(), generated: z.string() }),
  notice: z.literal(NOTICE), absent: z.array(z.string()),
};
export const outputs = {
  search_references: z.object({ ...common, results: z.array(summarySchema.extend({ match: z.array(z.string()), score: z.number() })) }),
  get_reference: z.object({
    ...common, reference: summarySchema,
    sections: z.array(z.object({ title: z.string(), characters: z.number().int() })),
    counts: z.object({ token_groups: z.record(z.string(), z.number().int()), components_with_measured_states: z.number().int() }),
    sources: z.array(record), surfaces: z.array(record), conflicts: z.array(z.json()),
  }),
  get_design_md: z.object({ ...common, reference: summarySchema, markdown: z.string() }),
  get_tokens: z.object({ ...common, reference: summarySchema, groups: z.record(z.string(), z.array(valueSchema)), fonts: fontsSchema.optional() }),
  get_component_states: z.object({ ...common, reference: summarySchema, components: z.array(componentSchema) }),
  compare_references: z.object({
    ...common, references: z.array(summarySchema),
    rows: z.array(z.object({ aspect: z.enum(ASPECTS), path: z.string(), values: z.record(z.string(), valueSchema), absent: z.array(z.string()) })),
  }),
};
export type Summary = z.infer<typeof summarySchema>;
export type Evidence = z.infer<typeof evidenceSchema>;
export type SourcedValue = z.infer<typeof valueSchema>;
export type Component = z.infer<typeof componentSchema>;
export type Fonts = z.infer<typeof fontsSchema>;
export type Substitute = z.infer<typeof substituteSchema>;
export type Json = z.infer<ReturnType<typeof z.json>>;

export function envelope<T extends object>(data: T, absent: readonly string[] = []) {
  return { catalog: CATALOG, notice: NOTICE, absent: [...new Set(absent)], ...data };
}

export class CatalogError extends Error {
  constructor(public readonly code: string, message: string) { super(message); }
}

export function errorEnvelope(code: string, message: string) {
  return envelope({ error: { code, message } });
}
