import { readFileSync } from "node:fs";
import { join } from "node:path";
import { REGISTRY, type RefEntry } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { hasKoDetail } from "@/lib/i18n/ko-detail";
import { parseV3 } from "../../../scripts/lib/design-md-v3.mjs";
import { hasHangul, searchFields, sectionsOf } from "./search-data.mjs";
import { semanticScores } from "./semantic";
import {
  ASPECTS, STATES, TOKEN_GROUPS, CatalogError, envelope,
  type Component, type Evidence, type Fonts, type Json, type SourcedValue,
  type Substitute, type Summary, type ToolInput,
} from "./contracts";

type Data = Record<string, Json>;
type Section = { title: string; markdown: string };
interface Reference {
  summary: Summary;
  markdown: string;
  frontmatter: Data;
  sidecar: Data;
  sections: Section[];
}

const entries = new Map<string, RefEntry>(REGISTRY.map((entry) => [entry.id, entry]));
const cache = new Map<string, Reference>();
const SITE = "https://oh-my-design.kr";
export const knownReference = (id: string) => entries.has(id);
const isMap = (value: unknown): value is Data => !!value && typeof value === "object" && !Array.isArray(value);
const map = (value: unknown): Data => isMap(value) ? value : {};
const unique = (values: readonly string[]) => [...new Set(values)];
export { sectionsOf } from "./search-data.mjs";

/** Omit only the unresolved leaf; retain its known siblings. */
function clean(value: unknown, path: string, absent: string[]): Json | undefined {
  if (value == null || (typeof value === "string" && (!value.trim() || /^\[FILL IN\]/i.test(value)))) {
    absent.push(path);
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.flatMap((item, i) => {
      const result = clean(item, `${path}.${i}`, absent);
      return result === undefined ? [] : [result];
    });
  }
  if (isMap(value)) {
    const result: Data = {};
    for (const [key, item] of Object.entries(value)) {
      const resultValue = clean(item, `${path}.${key}`, absent);
      if (resultValue !== undefined) result[key] = resultValue;
    }
    return result;
  }
  return value as Json;
}

function trust(summary: Summary) {
  return summary.status === "verified_v2" ? {} : { trust: "unverified" as const, reason_codes: summary.reason_codes ?? [] };
}

export function summaryFor(id: string): Summary {
  const entry = entries.get(id);
  if (!entry) throw new CatalogError("unknown_reference", `Unknown reference '${id}'. Use search_references to find an exact catalog id.`);
  const quality = REFERENCE_QUALITY_BY_ID[id];
  if (!quality) throw new CatalogError("catalog_unavailable", "The catalog quality manifest is incomplete.");
  const absent: string[] = [];
  const summary: Summary = {
    id, name: entry.name, country: entry.country, category: entry.category,
    status: quality.status === "legacy_snapshot" ? "legacy" : quality.status,
    urls: { page: `${SITE}/design-systems/${id}`, raw: `${SITE}/${id}/design.md` }, absent,
  };
  if (hasHangul(entry.displayName)) summary.display_name_ko = entry.displayName;
  else absent.push("display_name_ko");
  if (entry.homepage) summary.homepage = entry.homepage;
  else absent.push("homepage");
  if (quality.verifiedAt) summary.verified_at = quality.verifiedAt;
  else absent.push("verified_at");
  if (quality.nextReverifyAt) summary.next_reverify_at = quality.nextReverifyAt;
  else absent.push("next_reverify_at");
  if (hasKoDetail(entry.country, quality.status)) summary.urls.page_ko = `${SITE}/ko/design-systems/${id}`;
  else absent.push("urls.page_ko");
  if (quality.status !== "verified_v2") {
    summary.trust = "unverified";
    summary.reason_codes = [...quality.reasonCodes];
  }
  return summary;
}

function load(id: string): Reference {
  const summary = summaryFor(id); // Whitelist before any filesystem access.
  const cached = cache.get(id);
  if (cached) return cached;
  let markdown: string;
  let sidecar: Data;
  try {
    markdown = readFileSync(join(process.cwd(), "references", id, "DESIGN.md"), "utf8");
    sidecar = JSON.parse(readFileSync(join(process.cwd(), "references", id, "reference.json"), "utf8"));
  } catch {
    throw new CatalogError("catalog_unavailable", "Canonical reference files are unavailable.");
  }
  const parsed = parseV3(markdown) as { frontmatter: Data } | null;
  if (!parsed || sidecar.format !== "3.0.0") throw new CatalogError("catalog_unavailable", "Expected DESIGN.md v3 and reference.json format 3.0.0.");
  const reference = { summary, markdown, sidecar, frontmatter: parsed.frontmatter, sections: sectionsOf(markdown) };
  cache.set(id, reference);
  return reference;
}

function evidenceFor(reference: Reference, path: string): Evidence {
  const verification = map(reference.sidecar.verification_v2);
  const claims = map(verification.claims);
  const claim = map(claims[path] ?? claims[`prose:${path}`]);
  if (!Object.keys(claim).length) return { status: "unsourced" };
  const evidence: Evidence = {};
  for (const [key, value] of Object.entries(claim)) {
    if (key === "surface_id" || key === "source_id") continue;
    const known = clean(value, path, []);
    if (known !== undefined) evidence[key] = known;
  }
  const surface = Array.isArray(verification.surfaces) ? verification.surfaces.find((value) => map(value).id === claim.surface_id) : undefined;
  const source = Array.isArray(verification.sources) ? verification.sources.find((value) => map(value).id === claim.source_id) : undefined;
  if (surface) evidence.surface = clean(surface, path, []) as Data;
  if (source) evidence.source = clean(source, path, []) as Data;
  if (!surface || !source || !evidence.method || !evidence.captured) evidence.status = "unsourced";
  return evidence;
}

function measured(evidence: Evidence): boolean {
  return evidence.status !== "unsourced" && typeof evidence.method === "string" && !/prose|infer|heuristic|unmeasured|unknown/i.test(evidence.method);
}

function fontData(reference: Reference, absent: string[]): Fonts {
  const declared = map(reference.frontmatter.fonts);
  const fonts: Fonts = {};
  const faces: Record<string, Data> = {};
  const substitutes: Substitute[] = [];
  const measurements = map(map(reference.sidecar.fonts).substitutes);
  for (const [brand, face] of Object.entries(map(declared.faces))) {
    const { substitutes: declaredSubstitutes, ...metadata } = map(face);
    faces[brand] = clean(metadata, `fonts.faces.${brand}`, absent) as Data;
    for (const [script, named] of Object.entries(map(declaredSubstitutes))) {
      const supplied = map(map(measurements[brand])[script]);
      const metrics = map(supplied.metrics);
      const delta = map(metrics.delta);
      if (supplied.family !== map(named).family || typeof metrics.xHeightRatio !== "number" || typeof metrics.avgAdvance !== "number" || !metrics.weightRange || !metrics.classification || !(delta.page || delta.record)) {
        absent.push(`fonts.faces.${brand}.substitutes.${script}`);
        continue;
      }
      substitutes.push({ ...(clean(supplied, "fonts.substitutes", absent) as Data),
        brand_family: brand, script, family: String(supplied.family), label: "substitute — not the brand face", metrics: clean(metrics, "fonts.substitutes.metrics", absent) as Data });
    }
  }
  if (Object.keys(faces).length) fonts.faces = faces;
  else absent.push("fonts.faces");
  if (substitutes.length) fonts.substitutes = substitutes;
  const defaults: NonNullable<Fonts["safe_defaults"]> = {};
  for (const [script, families] of Object.entries(map(declared.safeDefaults))) {
    if (Array.isArray(families)) defaults[script] = families.filter((family): family is string => typeof family === "string").map((family) => ({ family, label: "safe default (not the brand face)" }));
  }
  if (Object.keys(defaults).length) fonts.safe_defaults = defaults;
  const narrative = reference.sections.find((section) => section.title === "Typography");
  if (narrative) fonts.narrative = narrative.markdown;
  return fonts;
}

function valueAt(reference: Reference, path: string, raw: unknown, absent: string[]): SourcedValue | undefined {
  const value = clean(raw, path, absent);
  if (value === undefined) return;
  const result: SourcedValue = { path, value, evidence: evidenceFor(reference, path), ...trust(reference.summary) };
  // A declared substitute must travel with its per-script measurements even in a font stack.
  if (typeof value === "string" && /font|typography/i.test(path)) {
    const fonts = fontData(reference, []);
    for (const [brand, face] of Object.entries(map(map(reference.frontmatter.fonts).faces))) {
      for (const [script, named] of Object.entries(map(map(face).substitutes))) {
        const family = map(named).family;
        if (typeof family !== "string" || !value.includes(family)) continue;
        const substitute = fonts.substitutes?.find((item) => item.brand_family === brand && item.script === script);
        if (!substitute) { absent.push(path); return; }
        result.substitutes = [...(result.substitutes ?? []), substitute];
      }
    }
  }
  return result;
}

function valuesUnder(reference: Reference, raw: unknown, path: string, absent: string[]): SourcedValue[] {
  if (isMap(raw)) return Object.entries(raw).flatMap(([key, value]) => valuesUnder(reference, value, `${path}.${key}`, absent));
  const value = valueAt(reference, path, raw, absent);
  return value ? [value] : [];
}

function tokenGroup(reference: Reference, group: typeof TOKEN_GROUPS[number], absent: string[]): SourcedValue[] {
  const values: SourcedValue[] = [];
  if (reference.frontmatter[group] !== undefined) values.push(...valuesUnder(reference, reference.frontmatter[group], group, absent));
  // Shadow and motion are explicitly preserved prose values in the v3 sidecar, not guessed from text.
  const prose = map(reference.sidecar.migration).prose;
  if (Array.isArray(prose)) for (const item of prose) {
    const { path, value } = map(item);
    if (typeof path === "string" && path.startsWith(`${group}.`) && !values.some((entry) => entry.path === path)) {
      const entry = valueAt(reference, path, value, absent);
      if (entry) values.push(entry);
    }
  }
  if (group === "typography" && map(reference.frontmatter.fonts).roles) values.push(...valuesUnder(reference, map(reference.frontmatter.fonts).roles, "fonts.roles", absent));
  if (!values.length) absent.push(group);
  return values;
}

function componentsOf(reference: Reference, selected?: string): Component[] {
  return Object.entries(map(reference.frontmatter.components)).filter(([id]) => selected === undefined || id === selected).map(([id, raw]) => {
    const component: Component = { id, rest: [], states: {}, not_measured: [], absent: [], ...trust(reference.summary) };
    const path = `components.${id}`;
    if (typeof raw === "string") component.description = raw;
    const props = map(raw);
    if (typeof props.type === "string") { component.type = props.type; component.type_evidence = evidenceFor(reference, `${path}.type`); }
    else component.absent.push(`${path}.type`);
    if (typeof props.use === "string") component.description = props.use;
    for (const [key, value] of Object.entries(props)) {
      if (["type", "use", "states", "active", "disabled", "loading", "selected", "checked", ...STATES].includes(key)) continue;
      component.rest.push(...valuesUnder(reference, value, `${path}.${key}`, component.absent));
    }
    if (!component.rest.length) component.absent.push(`${path}.rest`);
    for (const state of STATES) {
      const candidates = props[state] === undefined ? [] : valuesUnder(reference, props[state], `${path}.${state}`, component.absent);
      const values = candidates.filter((entry) => {
        if (measured(entry.evidence)) return true;
        component.absent.push(entry.path);
        return false;
      });
      if (values.length) component.states[state] = values;
      else { component.not_measured.push(state); component.absent.push(`${path}.${state}`); }
    }
    component.absent = unique(component.absent);
    return component;
  });
}

/** Unicode keywords plus optional corpus-matched semantic scores; verified first. */
export async function searchReferences(args: ToolInput<"search_references">) {
  const terms = unique((args.query ?? "").normalize("NFKC").toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? []);
  const countries = args.country?.map((country) => country.toLowerCase());
  const categories = args.category?.map((category) => category.toLowerCase());
  const candidates = REGISTRY.filter((entry) => (!countries?.length || countries.includes(entry.country.toLowerCase())) && (!categories?.length || categories.includes(entry.category.toLowerCase())) && (args.status !== "verified" || REFERENCE_QUALITY_BY_ID[entry.id]?.status === "verified_v2"));
  const similarities = terms.length && candidates.length ? await semanticScores(args.query!) : undefined;
  const results = candidates.map((entry) => {
    const overview = terms.length ? load(entry.id).sections.find((section) => section.title === "Overview")?.markdown ?? "" : undefined;
    const fields = searchFields(entry, overview);
    const match: string[] = [];
    let score = 0;
    let matchedTerms = 0;
    for (const term of terms) {
      let found = false;
      for (const [field, text] of Object.entries(fields)) if (text.normalize("NFKC").toLowerCase().includes(term)) {
        match.push(field); found = true;
        score += ["id", "name", "display_name_ko"].includes(field) ? 10 : field === "overview" ? 1 : 3;
      }
      if (found) matchedTerms++;
    }
    // OR retrieval with a coverage bonus keeps descriptive multiword searches useful.
    // Up to 50 points lets semantics outweigh incidental substring matches,
    // while preserving the original keyword score and lexical match fields.
    const semantic = similarities ? 50 * Math.max(0, similarities.get(entry.id) ?? 0) : 0;
    return { ...summaryFor(entry.id), match: unique(match), score: score + matchedTerms * 5 + semantic };
  }).filter((result) => !terms.length || result.score > 0);
  results.sort((a, b) => Number(b.status === "verified_v2") - Number(a.status === "verified_v2") || b.score - a.score || a.id.localeCompare(b.id));
  return envelope({ results: results.slice(0, args.limit ?? 8), search_mode: similarities ? "hybrid" as const : "keyword" as const });
}

export function getReference({ id }: ToolInput<"get_reference">) {
  const reference = load(id);
  const absent = [...reference.summary.absent];
  const token_groups = Object.fromEntries(TOKEN_GROUPS.map((group) => [group, tokenGroup(reference, group, absent).length]));
  const verification = map(reference.sidecar.verification_v2);
  const list = (key: string) => {
    if (!Array.isArray(verification[key])) { absent.push(`verification_v2.${key}`); return []; }
    return clean(verification[key], `verification_v2.${key}`, absent) as Data[];
  };
  return envelope({
    reference: reference.summary,
    sections: reference.sections.map(({ title, markdown }) => ({ title, characters: [...markdown].length })),
    counts: { token_groups, components_with_measured_states: componentsOf(reference).filter((component) => Object.keys(component.states).length > 0).length },
    sources: list("sources"), surfaces: list("surfaces"), conflicts: list("conflicts"),
  }, absent);
}

export function getDesignMd({ id, sections }: ToolInput<"get_design_md">) {
  const reference = load(id);
  const absent = [...reference.summary.absent];
  if (sections) for (const section of sections) if (!reference.sections.some((item) => item.title === section)) absent.push(`sections.${section}`);
  return envelope({ reference: reference.summary, markdown: sections ? reference.sections.filter((section) => sections.includes(section.title as typeof sections[number])).map((section) => section.markdown).join("") : reference.markdown }, absent);
}

export function getTokens({ id, groups = [...TOKEN_GROUPS] }: ToolInput<"get_tokens">) {
  const reference = load(id);
  const absent = [...reference.summary.absent];
  const result: Record<string, SourcedValue[]> = {};
  for (const group of unique(groups) as typeof groups) {
    const values = tokenGroup(reference, group, absent);
    if (values.length) result[group] = values;
  }
  const fonts = groups.includes("typography") ? fontData(reference, absent) : undefined;
  return envelope({ reference: reference.summary, groups: result, ...(fonts && Object.keys(fonts).length ? { fonts } : {}) }, absent);
}

export function getComponentStates({ id, component }: ToolInput<"get_component_states">) {
  const reference = load(id);
  const components = componentsOf(reference, component);
  const absent = [...reference.summary.absent, ...components.flatMap((item) => item.absent)];
  if (!components.length) absent.push(component ? `components.${component}` : "components");
  return envelope({ reference: reference.summary, components }, absent);
}

export function compareReferences({ ids, aspects = [...ASPECTS] }: ToolInput<"compare_references">) {
  const references = unique(ids).map(load); // Reject any unknown id before returning a partial comparison.
  const absent: string[] = [];
  const rows: { aspect: typeof ASPECTS[number]; path: string; values: Record<string, SourcedValue>; absent: string[] }[] = [];
  for (const aspect of unique(aspects) as typeof aspects) {
    const byPath = new Map<string, Record<string, SourcedValue>>();
    for (const reference of references) {
      const missing: string[] = [];
      const values = aspect === "components" ? componentsOf(reference).flatMap((component) => [...component.rest, ...Object.values(component.states).flat()]) : tokenGroup(reference, aspect === "radius" ? "rounded" : aspect, missing);
      if (!values.length) missing.push(aspect);
      for (const path of missing) absent.push(`${reference.summary.id}.${path}`);
      for (const value of values) byPath.set(value.path, { ...byPath.get(value.path), [reference.summary.id]: value });
    }
    for (const [path, values] of byPath) {
      const missing = references.filter((reference) => !values[reference.summary.id]).map((reference) => reference.summary.id);
      rows.push({ aspect, path, values, absent: missing });
      absent.push(...missing.map((id) => `${id}.${path}`));
    }
  }
  return envelope({ references: references.map((reference) => reference.summary), rows }, absent);
}
