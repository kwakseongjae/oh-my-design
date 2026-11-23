import { z } from "zod";
import metadata from "./catalog.generated.json";
import { PKG_VERSION } from "@/data/version.generated";

export const NOTICE = "Descriptions of public product surfaces for design reference. Not affiliated with or endorsed by the companies named.";
export const CATALOG = { ...metadata, version: PKG_VERSION };
export const TOKEN_GROUPS = ["colors", "typography", "rounded", "spacing", "shadow", "motion"] as const;
export const ASPECTS = ["colors", "typography", "radius", "components", "motion"] as const;
export const SECTIONS = ["Overview", "Colors", "Typography", "Layout", "Elevation & Depth", "Motion & Easing", "Components", "Do's and Don'ts", "Voice & Tone", "Agent Prompt Guide", "Governance", "CJK Typesetting"] as const;
export const STATES = ["hover", "pressed", "focus"] as const;
export const DEVICES = ["mobile", "desktop"] as const;
export const CONTEXT_GROUPS = ["typography", "rounded", "spacing", "components"] as const;
/** The one sentence every screen tool's description and response carries. */
export const SCREEN_USE = "Study layout and patterns; do not copy a company's branding, text or images verbatim.";
export const SEEN_ON_SCREEN = "seen on this screen" as const;
export const FROM_DESIGN_MD = "from this service's DESIGN.md, not claimed to be on this screen" as const;
export const FROM_CAPTURE = "counted from the captured page's element boxes, not checked by eye" as const;

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
  list_screen_types: z.object({}).strict(),
  search_screens: z.object({
    query: z.string().max(200).optional().describe("Words matched against service ids and names (English and Korean), screen titles (Korean, as shot) and screen types."),
    type: z.string().min(1).max(40).optional().describe("A screen type by slug (sign-in), English name (Sign-in) or Korean name (로그인); list_screen_types lists them."),
    service: id.optional().describe("Exact catalog id of one service."),
    country: z.array(z.string().min(1).max(40)).max(30).optional(),
    category: z.array(z.string().min(1).max(80)).max(30).optional(),
    device: z.enum(DEVICES).optional().describe("Keep screens shot on this device; only its images are returned."),
    limit: z.number().int().min(1).max(30).optional().describe("Default 10."),
  }).strict(),
  get_service_screens: z.object({ id, device: z.enum(DEVICES).optional() }).strict(),
  get_screen_context: z.object({
    id,
    key: z.string().min(1).max(64).describe("The screen's key, from search_screens or get_service_screens."),
    include: z.array(z.enum(CONTEXT_GROUPS)).min(1).max(CONTEXT_GROUPS.length).optional().describe("What to bring from the service's DESIGN.md. Default: all."),
  }).strict(),
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
const referenceOutputs = {
  search_references: z.object({ ...common, results: z.array(summarySchema.extend({ match: z.array(z.string()), score: z.number() })), search_mode: z.enum(["keyword", "hybrid"]) }),
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

// ---- screens -------------------------------------------------------------------------------------------------------
const deviceCounts = z.object({ any: z.number().int(), mobile: z.number().int(), desktop: z.number().int() });
export const screensBlockSchema = z.object({
  published: z.boolean(),
  generated: z.string().optional(),
  services: z.number().int(),
  screens: z.number().int(),
  use: z.literal(SCREEN_USE),
  takedown: z.object({ en: z.string(), ko: z.string(), url: z.string() }),
  message: z.string().optional(),
});
export const screenTypeSchema = z.object({ slug: z.string(), name_en: z.string(), name_ko: z.string() });
export const screenServiceSchema = z.object({
  id: z.string(), name: z.string(), display_name_ko: z.string().optional(),
  country: z.string(), category: z.string(),
  status: z.enum(["verified_v2", "partial", "legacy"]), ...trust,
  urls: z.object({ design_md_page: z.string(), design_md_raw: z.string(), screens: z.string(), screens_ko: z.string() }),
});
export const provenanceSchema = z.object({
  shot: z.string().optional(), signed_out: z.boolean(), masked: z.boolean(),
  masked_note: z.string().optional(), rights: z.string(), takedown: z.string(),
});
const imageSchema = z.object({ width: z.number().int(), still: z.string(), thumb: z.string().optional(), page: z.string(), page_ko: z.string() });
export const seenColorSchema = z.object({ path: z.string(), token: z.string(), value: z.string(), label: z.literal(SEEN_ON_SCREEN) });
export const screenSchema = z.object({
  key: z.string(), title: z.string(), type: screenTypeSchema, state: z.string().optional(),
  devices: z.array(z.enum(DEVICES)),
  images: z.object({ mobile: imageSchema.optional(), desktop: imageSchema.optional() }),
  provenance: provenanceSchema,
  tokens_seen: z.array(seenColorSchema),
  absent: z.array(z.string()),
});
const outlineWidthSchema = z.object({
  width: z.number().int(), viewport: z.object({ width: z.number().int(), height: z.number().int() }),
  page_height: z.number().int().optional(), elements_capped: z.boolean(),
  first_viewport: z.object({
    counts: z.record(z.string(), z.number().int()),
    controls: z.array(z.object({ role: z.string(), box: z.object({ x: z.number().int(), y: z.number().int(), w: z.number().int(), h: z.number().int() }), radius: z.number().optional(), fill: z.string().optional() })),
  }),
  whole_page: z.object({ counts: z.record(z.string(), z.number().int()) }),
});
export const outlineSchema = z.object({ label: z.literal(FROM_CAPTURE), basis: z.string(), mobile: outlineWidthSchema.optional(), desktop: outlineWidthSchema.optional() });
const nextSchema = z.object({ design_md: z.string(), tools: z.array(z.object({ name: z.string(), arguments: record, gives: z.string() })) });
const screensCommon = { ...common, screens: screensBlockSchema };
const screenOutputs = {
  list_screen_types: z.object({
    ...screensCommon,
    types: z.array(screenTypeSchema.extend({ screens: deviceCounts, services: deviceCounts })),
    services: z.array(screenServiceSchema.extend({ shot: z.string().optional(), signed_out: z.boolean(), screens: deviceCounts })),
  }),
  search_screens: z.object({
    ...screensCommon,
    total: z.number().int(),
    results: z.array(z.object({ service: screenServiceSchema, screen: screenSchema, match: z.array(z.string()).optional(), score: z.number().optional() })),
  }),
  get_service_screens: z.object({
    ...screensCommon,
    reference: summarySchema.optional(),
    urls: z.object({ screens: z.string(), screens_ko: z.string() }).optional(),
    provenance: provenanceSchema.omit({ masked: true, masked_note: true }).optional(),
    counts: deviceCounts.optional(),
    groups: z.array(z.object({ type: screenTypeSchema, screens: z.array(screenSchema) })),
    colors: z.array(z.object({ path: z.string(), token: z.string(), value: z.string(), seen_on: z.array(z.string()) })).optional(),
    next: nextSchema.optional(),
  }),
  get_screen_context: z.object({
    ...screensCommon,
    reference: summarySchema.optional(),
    screen: screenSchema.optional(),
    outline: outlineSchema.optional(),
    seen_on_this_screen: z.object({
      label: z.literal(SEEN_ON_SCREEN), basis: z.string(),
      colors: z.array(seenColorSchema.extend({ design_md: valueSchema.optional(), design_md_value_now: z.string().optional() })),
    }).optional(),
    compared_not_seen: z.array(z.object({ path: z.string(), token: z.string(), value: z.string() })).optional(),
    from_design_md: z.object({
      label: z.literal(FROM_DESIGN_MD),
      typography: z.array(valueSchema).optional(), fonts: fontsSchema.optional(),
      rounded: z.array(valueSchema).optional(), spacing: z.array(valueSchema).optional(),
      components: z.array(componentSchema).optional(),
    }).optional(),
    not_known_for_this_screen: z.array(z.string()).optional(),
    next: nextSchema.optional(),
  }),
};
export const outputs = { ...referenceOutputs, ...screenOutputs };

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
