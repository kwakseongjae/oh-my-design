/**
 * The MCP screen tools: the published product screens (lib/screens/manifest.ts, the committed manifest and nothing
 * else) read beside the catalog, so an answer to "show me a sign-in screen" carries the screen, its pictures, and the
 * measured values of the same service's DESIGN.md.
 *
 * What may be said about a screen is what the manifest records: its key, type, title, state, the widths it was shot
 * at, whether people were hidden on it, the walk's shot date and signed-out state, and which DESIGN.md colour tokens
 * were found with exactly their value on it (any width). Everything else from the DESIGN.md is labelled as coming
 * from the DESIGN.md, never as seen on the screen.
 *
 * Pure apart from the catalog reader it calls: every function takes the manifest, so the shut state (no manifest,
 * which is what an unpublished checkout holds) is tested by passing null. No fs here (the image route's bundle rule):
 * public.server.ts and gallery.server.ts are not imported.
 */

import committed from "@/data/screens-public.generated.json";
import { SCREENS_NOTICE } from "@/components/screens/notice-copy";
import { SCREENS_CONTACT_EMAIL, screenRemovalHref } from "@/lib/screens/contact";
import { publicModel, validManifest, type PublicManifest } from "@/lib/screens/manifest";
import { deviceOf, type Device, type ScreenCard, type ScreensModel } from "@/lib/screens/model";
import { compareTypes, groupByType, typeName, typeParam } from "@/lib/screens/screen-types";
import { getComponentStates, getTokens, knownReference, summaryFor } from "./catalog";
import {
  CONTEXT_GROUPS, DEVICES, FROM_DESIGN_MD, SCREEN_USE, SEEN_ON_SCREEN, CatalogError, envelope,
  type SourcedValue, type Summary, type ToolInput,
} from "./contracts";

const SITE = "https://oh-my-design.kr";

/** The committed manifest, or null: the shut state. */
export const COMMITTED_MANIFEST: PublicManifest | null = validManifest(committed, false);

/** One published service, read once: the registry's summary and the model the pages draw. */
interface Service {
  summary: Summary;
  model: ScreensModel;
  /** Shown cards (not blocked, with a still), the walk's order. */
  cards: ScreenCard[];
  /** "both" (the service also has an app) or "web", as the walk says. */
  platform: string | null;
}

/** Services whose slug is a catalog id (the gallery's rule: a walk with no reference behind it is left out), with
 *  image paths on this site, never the store's. */
const servicesCache = new WeakMap<PublicManifest, Service[]>();
export function servicesOf(manifest: PublicManifest | null): Service[] {
  if (!manifest) return [];
  const cached = servicesCache.get(manifest);
  if (cached) return cached;
  const services = manifest.services.flatMap((s) => {
    if (!knownReference(s.slug)) return [];
    const model = publicModel(s, manifest.base);
    const cards = model?.cards.filter((card) => !card.blocked && card.stills.length > 0) ?? [];
    return model && cards.length ? [{ summary: summaryFor(s.slug), model, cards, platform: model.platform }] : [];
  });
  // The gallery's order: services that also have an app first, then by id.
  services.sort((a, b) => Number(b.platform === "both") - Number(a.platform === "both") || a.summary.id.localeCompare(b.summary.id));
  servicesCache.set(manifest, services);
  return services;
}

// ---- the pieces every answer is made of ----------------------------------------------------------------------------

function takedownLine(locale: "en" | "ko", url: string): string {
  const t = SCREENS_NOTICE[locale].takedown(SCREENS_CONTACT_EMAIL !== "");
  return `${t.before}${t.form}${locale === "ko" ? "" : " "}(${url})${t.between}${SCREENS_CONTACT_EMAIL}${t.after}`;
}

function screensBlock(manifest: PublicManifest | null) {
  const services = servicesOf(manifest);
  const url = screenRemovalHref();
  return {
    published: services.length > 0,
    ...(manifest?.generated ? { generated: manifest.generated } : {}),
    services: services.length,
    screens: services.reduce((n, s) => n + s.cards.length, 0),
    use: SCREEN_USE,
    takedown: { en: takedownLine("en", url), ko: takedownLine("ko", url), url },
    ...(services.length ? {} : { message: "Screens are not published yet, so there is nothing to return. The reference tools still answer." }),
  };
}

/** Every screen tool's envelope: the catalog's, plus what the screens are and whose. */
function screensEnvelope<T extends object>(manifest: PublicManifest | null, data: T, absent: readonly string[] = []) {
  const screens = screensBlock(manifest);
  return envelope({ screens, ...data }, screens.published ? absent : ["screens", ...absent]);
}

const typeOf = (type: string) => ({ slug: typeParam(type), name_en: typeName("en", type), name_ko: typeName("ko", type) });

function serviceOf(s: Service) {
  const { summary } = s;
  return {
    id: summary.id, name: summary.name,
    ...(summary.display_name_ko ? { display_name_ko: summary.display_name_ko } : {}),
    country: summary.country, category: summary.category, status: summary.status,
    ...(summary.trust ? { trust: summary.trust, reason_codes: summary.reason_codes ?? [] } : {}),
    urls: {
      design_md_page: summary.urls.page, design_md_raw: summary.urls.raw,
      screens: `${SITE}/screens/${summary.id}`, screens_ko: `${SITE}/ko/screens/${summary.id}`,
    },
  };
}

function rightsOf(s: Service) {
  const shot = s.model.shot;
  const url = screenRemovalHref(s.summary.id);
  return {
    ...(shot ? { shot } : {}),
    signed_out: s.model.signedOut,
    rights: SCREENS_NOTICE.en.rights("service", shot ? { from: shot, to: shot } : null, s.model.signedOut),
    takedown: url,
  };
}

const devicesOfCard = (card: ScreenCard): Device[] => DEVICES.filter((d) => card.stills.some((still) => deviceOf(still.width) === d));

/** The DESIGN.md colours recorded on a screen, by exact value, in the manifest's order. */
function seenOn(s: Service, key: string) {
  return s.model.colors.filter((c) => c.screens.includes(key)).map((c) => ({ path: `colors.${c.token}`, token: c.token, value: c.value, label: SEEN_ON_SCREEN }));
}

function screenOf(s: Service, card: ScreenCard, device?: Device) {
  const absent: string[] = [];
  const images: Partial<Record<Device, { width: number; still: string; thumb?: string; page: string; page_ko: string }>> = {};
  for (const still of card.stills) {
    const d = deviceOf(still.width);
    if ((device && d !== device) || images[d]) continue;
    const query = `?device=${d}#${card.key}`;
    images[d] = {
      width: still.width,
      still: `${SITE}${still.still}`,
      ...(still.thumb ? { thumb: `${SITE}${still.thumb}` } : {}),
      page: `${SITE}/screens/${s.summary.id}${query}`,
      page_ko: `${SITE}/ko/screens/${s.summary.id}${query}`,
    };
    if (!still.thumb) absent.push(`images.${d}.thumb`);
  }
  const provenance = {
    ...rightsOf(s),
    masked: card.masked,
    ...(card.masked ? { masked_note: SCREENS_NOTICE.en.masked } : {}),
  };
  if (!s.model.shot) absent.push("provenance.shot");
  return {
    key: card.key, title: card.title, type: typeOf(card.type),
    ...(card.state ? { state: card.state } : {}),
    devices: devicesOfCard(card),
    images, provenance, tokens_seen: seenOn(s, card.key), absent,
  };
}

function counts(cards: ScreenCard[]) {
  return {
    any: cards.length,
    mobile: cards.filter((card) => devicesOfCard(card).includes("mobile")).length,
    desktop: cards.filter((card) => devicesOfCard(card).includes("desktop")).length,
  };
}

function serviceFor(manifest: PublicManifest | null, id: string): Service | null {
  summaryFor(id); // An id outside the catalog is an error, as in every reference tool.
  return servicesOf(manifest).find((s) => s.summary.id === id) ?? null;
}

// ---- the tools -----------------------------------------------------------------------------------------------------

export function listScreenTypes(_args: ToolInput<"list_screen_types">, manifest: PublicManifest | null = COMMITTED_MANIFEST) {
  const services = servicesOf(manifest);
  const all = services.flatMap((s) => s.cards.map((card) => ({ s, card })));
  const types = [...new Set(all.map((x) => x.card.type))].sort(compareTypes).map((type) => {
    const of = all.filter((x) => x.card.type === type);
    const on = (d?: Device) => of.filter((x) => !d || devicesOfCard(x.card).includes(d));
    return {
      ...typeOf(type),
      screens: { any: on().length, mobile: on("mobile").length, desktop: on("desktop").length },
      services: { any: new Set(on().map((x) => x.s.summary.id)).size, mobile: new Set(on("mobile").map((x) => x.s.summary.id)).size, desktop: new Set(on("desktop").map((x) => x.s.summary.id)).size },
    };
  });
  return screensEnvelope(manifest, {
    types,
    services: services.map((s) => {
      const { shot, signed_out } = rightsOf(s);
      return { ...serviceOf(s), ...(shot ? { shot } : {}), signed_out, screens: counts(s.cards) };
    }),
  }, [
    ...services.filter((s) => !s.model.shot).map((s) => `services.${s.summary.id}.shot`),
    ...services.filter((s) => !s.summary.display_name_ko).map((s) => `services.${s.summary.id}.display_name_ko`),
  ]);
}

const terms = (text: string | undefined) => [...new Set((text ?? "").normalize("NFKC").toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [])];
const lower = (s: string) => s.normalize("NFKC").toLowerCase();

/** The type a filter names: a slug, an English name or the walk's Korean word, compared without case. */
function typeMatching(types: string[], wanted: string): string | null {
  const w = lower(wanted.trim());
  return types.find((t) => [typeParam(t), typeName("en", t), typeName("ko", t), t].some((name) => lower(name) === w)) ?? null;
}

export function searchScreens(args: ToolInput<"search_screens">, manifest: PublicManifest | null = COMMITTED_MANIFEST) {
  if (args.service) summaryFor(args.service); // unknown ids are errors, before anything else
  const services = servicesOf(manifest);
  if (!services.length) return screensEnvelope(manifest, { total: 0, results: [] });
  let type: string | null = null;
  if (args.type) {
    const types = [...new Set(services.flatMap((s) => s.cards.map((card) => card.type)))];
    type = typeMatching(types, args.type);
    if (!type) throw new CatalogError("unknown_screen_type", `No published screen has the type '${args.type}'. Use list_screen_types for the types there are.`);
  }
  const countries = args.country?.map(lower);
  const categories = args.category?.map(lower);
  const words = terms(args.query);
  const absent: string[] = [];
  if (args.service && !services.some((s) => s.summary.id === args.service)) absent.push(`screens.${args.service}`);
  const hits = services
    .filter((s) => (!args.service || s.summary.id === args.service) && (!countries?.length || countries.includes(lower(s.summary.country))) && (!categories?.length || categories.includes(lower(s.summary.category))))
    .flatMap((s, order) => s.cards
      .filter((card) => (!type || card.type === type) && (!args.device || devicesOfCard(card).includes(args.device)))
      .map((card, index) => {
        const fields: Record<string, string> = {
          service: [s.summary.id, s.summary.name, s.summary.display_name_ko ?? ""].join(" "),
          type: [typeParam(card.type), typeName("en", card.type), typeName("ko", card.type), card.type].join(" "),
          title: [card.title, card.state ?? ""].join(" "),
          category: s.summary.category,
        };
        const match: string[] = [];
        let score = 0;
        for (const term of words) {
          let found = false;
          for (const [field, text] of Object.entries(fields)) if (lower(text).includes(term)) {
            if (!match.includes(field)) match.push(field);
            found = true;
            score += field === "service" ? 10 : field === "type" ? 8 : field === "title" ? 5 : 2;
          }
          if (found) score += 5;
        }
        return { s, card, match, score, order, index };
      }))
    .filter((hit) => !words.length || hit.score > 0)
    .sort((a, b) => b.score - a.score || a.order - b.order || a.index - b.index);
  const results = hits.slice(0, args.limit ?? 10).map((hit) => ({
    service: serviceOf(hit.s),
    screen: screenOf(hit.s, hit.card, args.device),
    ...(words.length ? { match: hit.match, score: hit.score } : {}),
  }));
  for (const r of results) if (!r.service.display_name_ko) absent.push(`results.${r.service.id}.service.display_name_ko`);
  return screensEnvelope(manifest, { total: hits.length, results }, absent);
}

function nextFor(id: string, key?: string) {
  return {
    design_md: summaryFor(id).urls.raw,
    tools: [
      ...(key ? [] : [{ name: "get_screen_context", arguments: { id, key: "<key>" }, gives: "one screen with the measured values to build something like it" }]),
      { name: "get_tokens", arguments: { id }, gives: "every token group with evidence" },
      { name: "get_component_states", arguments: { id }, gives: "components with resting values and measured hover, pressed and focus" },
      { name: "get_design_md", arguments: { id }, gives: "the whole DESIGN.md, or sections" },
    ],
  };
}

export function getServiceScreens({ id, device }: ToolInput<"get_service_screens">, manifest: PublicManifest | null = COMMITTED_MANIFEST) {
  if (!servicesOf(manifest).length) return screensEnvelope(manifest, { groups: [] });
  const reference = summaryFor(id);
  const s = serviceFor(manifest, id);
  if (!s) return screensEnvelope(manifest, { reference, groups: [], next: nextFor(id) }, [...reference.absent, `screens.${id}`]);
  const cards = device ? s.cards.filter((card) => devicesOfCard(card).includes(device)) : s.cards;
  const { takedown, ...rights } = rightsOf(s);
  const absent = [...reference.absent, ...(s.model.shot ? [] : ["provenance.shot"])];
  if (device && !cards.length) absent.push(`screens.${id}.${device}`);
  return screensEnvelope(manifest, {
    reference,
    urls: { screens: `${SITE}/screens/${id}`, screens_ko: `${SITE}/ko/screens/${id}` },
    provenance: { ...rights, takedown },
    counts: counts(s.cards),
    groups: groupByType(cards).map((group) => ({ type: typeOf(group.type), screens: group.cards.map((card) => screenOf(s, card, device)) })),
    colors: s.model.colors.map((c) => ({ path: `colors.${c.token}`, token: c.token, value: c.value, seen_on: c.screens })),
    next: nextFor(id),
  }, absent);
}

/** What the published data cannot say about one screen, so an agent does not fill it in. */
const NOT_KNOWN = [
  "Which DESIGN.md component each element on this screen is: the published data does not link screen elements to catalog components.",
  "Layout measurements of this screen (grid, columns, element positions and sizes).",
  "Type sizes, radii and spacing on this screen: only colours were compared screen by screen.",
  "For a colour seen on this screen: which element, property or width it was found on, and how often.",
  "Interaction states on this screen: the stills are at rest.",
  "Any text or image on the screen beyond what the still shows.",
];

export function getScreenContext({ id, key, include = [...CONTEXT_GROUPS] }: ToolInput<"get_screen_context">, manifest: PublicManifest | null = COMMITTED_MANIFEST) {
  if (!servicesOf(manifest).length) return screensEnvelope(manifest, {});
  const reference = summaryFor(id);
  const s = serviceFor(manifest, id);
  const card = s?.cards.find((c) => c.key === key);
  if (!s || !card) throw new CatalogError("unknown_screen", `No published screen '${key}' for '${id}'. Use get_service_screens or search_screens for the keys there are.`);
  const absent = [...reference.absent];
  const groups = [...new Set(include)];

  // The colour group is read whole, to join the manifest's colours to their evidence.
  const tokens = getTokens({ id, groups: ["colors", ...groups.filter((g): g is "typography" | "rounded" | "spacing" => g !== "components")] });
  const colorValues = new Map((tokens.groups.colors ?? []).map((v) => [v.path, v]));
  const colors = seenOn(s, key).map((seen) => {
    const now = colorValues.get(seen.path);
    if (!now) { absent.push(`seen_on_this_screen.${seen.path}.design_md`); return seen; }
    // The screen was compared with the value of its walk's day: evidence travels only while the value is the same.
    if (typeof now.value === "string" && now.value.toLowerCase() === seen.value.toLowerCase()) return { ...seen, design_md: now as SourcedValue };
    absent.push(`seen_on_this_screen.${seen.path}.design_md`);
    return { ...seen, design_md_value_now: String(now.value) };
  });
  const seenPaths = new Set(colors.map((c) => c.path));
  for (const path of tokens.absent) if (path !== "colors" && !reference.absent.includes(path)) absent.push(`from_design_md.${path}`);

  const from: Record<string, unknown> = { label: FROM_DESIGN_MD };
  for (const group of ["typography", "rounded", "spacing"] as const) {
    if (!groups.includes(group)) continue;
    if (tokens.groups[group]?.length) from[group] = tokens.groups[group];
  }
  if (groups.includes("typography") && tokens.fonts) from.fonts = tokens.fonts;
  if (groups.includes("components")) {
    const states = getComponentStates({ id });
    if (states.components.length) from.components = states.components;
    else absent.push("from_design_md.components");
  }

  return screensEnvelope(manifest, {
    reference,
    screen: screenOf(s, card),
    seen_on_this_screen: {
      label: SEEN_ON_SCREEN,
      basis: `Exact value (#rrggbb, opaque) found among the computed colours of this screen's captured elements, compared with this service's DESIGN.md colour tokens on the walk's day${s.model.shot ? ` (${s.model.shot})` : ""}, at one or more of its widths.`,
      colors,
    },
    compared_not_seen: s.model.colors.filter((c) => !seenPaths.has(`colors.${c.token}`)).map((c) => ({ path: `colors.${c.token}`, token: c.token, value: c.value })),
    from_design_md: from,
    not_known_for_this_screen: NOT_KNOWN,
    next: nextFor(id, key),
  }, absent);
}
