/**
 * The /screens gallery, the service screens pages and the landing's screens wall: the shape the server hands the
 * client (gallery.server.ts fills it) and the pure rules they draw by. No fs and no registry here: the client imports
 * this file.
 *
 * The gallery is one card per service (owner, 2026-11-22: "누르면 들어가서 상세로 보는 형태"; the still b1-services in
 * tools/screen-archive/make-browse-mocks.mjs on the screens branch). Four filters narrow it: country and category from
 * the registry, the device, which decides which stills are shown, and the screen type, which turns the cards into one
 * tile per screen of that type (owner, round 2: "화면 종류 별로도 볼 수 있으면"). A card opens that service's screens
 * page (/screens/<id>); a tile opens it at that screen.
 *
 * What a screen is, everywhere it is counted on a card or in a sentence: one screen key of one service with at least
 * one still at any width, which is one card on the item page's tab. The device filter decides which services a view
 * holds (one with no still on that device is left out) and which stills are drawn, not what counts as a screen; in the
 * type view the count is the tiles shown.
 */

import { DEVICES, deviceOf, stillOn, type Device, type ScreenCard, type ScreenStill } from "./model";
import { OTHER_TYPE, compareTypes, typeFromParam, typeParam } from "./screen-types";

export { DEVICES, deviceOf, stillOn, type Device };

/** One screen of one service as the gallery and the wall draw it. Only screens with a still: blocked and withheld
 *  ones never get here. */
export interface GalleryShot {
  slug: string;
  key: string;
  type: string;
  title: string;
  state: string | null;
  /** Widest first; a screen shot at one width only has one. */
  stills: ScreenStill[];
}

/** A logo as components/brand-logo.tsx draws it (resolved on the server, archive-rows.server.ts markFor). */
export interface GalleryLogo {
  src: string;
  kind: "svg" | "icon" | "favicon";
  dark?: boolean;
}

export interface GalleryService {
  slug: string;
  /** The registry's name (English page) or displayName (Korean page). */
  name: string;
  /** Its item page (DESIGN.md) in this language where there is one (lib/i18n/ko-detail.ts), else the English one. */
  href: string;
  /** Its screens page in this language: /screens/<id> or /ko/screens/<id> (every service with screens has both). */
  screensHref: string;
  /** The registry's country code, or null. */
  country: string | null;
  /** The registry's category slug, or null when it has none (then no category is shown). */
  category: string | null;
  /** The category's name in this language, or null. */
  categoryName: string | null;
  logo: GalleryLogo | null;
  /** Screens with a still, any width (see the definition at the top). */
  count: number;
  /** Devices it has stills on, mobile first. */
  devices: Device[];
}

export interface FilterOption {
  value: string;
  label: string;
  /** Shown beside the label in the open list only. */
  count?: number;
}

export interface GalleryModel {
  /** In gallery order (orderServices). */
  services: GalleryService[];
  /** Service by service in that order, each in its walk's order. */
  shots: GalleryShot[];
  /** Shooting dates, earliest and latest (the same day when every walk ran on one), or null. */
  shot: { from: string; to: string } | null;
  /** Every walk ran signed out. */
  signedOut: boolean;
  /** Devices with at least one still, mobile first. */
  devices: Device[];
  /** Countries and categories that have screens, named in this language; "All" is the copy's. */
  countries: FilterOption[];
  categories: FilterOption[];
  /** The site publishes screens: the page adds its rights and takedown lines. */
  published: boolean;
}

/** The services in gallery order: those with an app as well as the web first, then by name in the page's language. */
export function orderServices<T extends { name: string; platform: string | null }>(services: T[], locale: string): T[] {
  const coll = new Intl.Collator(locale);
  const rank = (s: T) => (s.platform === "both" ? 0 : 1);
  return [...services].sort((a, b) => rank(a) - rank(b) || coll.compare(a.name, b.name));
}

/** What an image of a card, a tile or the wall loads: the small rendition when there is one, else the still. */
export const smallSrc = (still: ScreenStill): string => still.thumb ?? still.still;

/** The device a set of devices opens on: mobile where there are mobile stills. */
export const defaultDevice = (devices: readonly Device[]): Device => (devices.includes("mobile") ? "mobile" : (devices[0] ?? "mobile"));

/**
 * A service's screens page on a device, at a screen when `key` is given (the page opens that screen's large view).
 * The device goes in the query only when it is not the one the page opens on anyway.
 */
export function screensPageHref(service: Pick<GalleryService, "screensHref" | "devices">, device: Device, key?: string): string {
  const q = device === defaultDevice(service.devices) ? "" : `?device=${device}`;
  return `${service.screensHref}${q}${key ? `#${key}` : ""}`;
}

// ---- filters ----------------------------------------------------------------------------------------------------

export interface Filter {
  /** A country code, or null for all. */
  country: string | null;
  device: Device;
  /** A category slug, or null for all. */
  category: string | null;
  /** A screen type (the walk's Korean word), or null: one card per service. */
  type: string | null;
}

/** The unfiltered view, the canonical page: every country and category, service cards, on mobile when there are
 *  mobile stills. */
export function defaultFilter(model: Pick<GalleryModel, "devices">): Filter {
  return { country: null, device: defaultDevice(model.devices), category: null, type: null };
}

/** Every type the gallery offers: the walk's types except the catch-all 「화면」, in the fixed order. */
export function galleryTypes(model: Pick<GalleryModel, "shots">): string[] {
  return [...new Set(model.shots.map((s) => s.type))].filter((t) => t && t !== OTHER_TYPE).sort(compareTypes);
}

/** The filter a URL's query names. Anything it does not know falls back to the default for that filter. */
export function parseFilter(query: string, model: Pick<GalleryModel, "devices" | "countries" | "categories" | "shots">): Filter {
  const q = new URLSearchParams(query);
  const base = defaultFilter(model);
  const country = q.get("country")?.toUpperCase() ?? null;
  const device = q.get("device");
  const category = q.get("category");
  return {
    country: country && model.countries.some((c) => c.value === country) ? country : null,
    device: device && (model.devices as string[]).includes(device) ? (device as Device) : base.device,
    category: category && model.categories.some((c) => c.value === category) ? category : null,
    type: typeFromParam(q.get("type"), galleryTypes(model)),
  };
}

/** The query that names a filter, without "?"; empty for the default view, so the canonical URL stays bare. */
export function filterQuery(filter: Filter, model: Pick<GalleryModel, "devices">): string {
  const q = new URLSearchParams();
  if (filter.country) q.set("country", filter.country.toLowerCase());
  if (filter.device !== defaultFilter(model).device) q.set("device", filter.device);
  if (filter.category) q.set("category", filter.category);
  if (filter.type) q.set("type", typeParam(filter.type));
  return q.toString();
}

/** The services a filter's country and category keep, in gallery order. */
function servicesIn(model: Pick<GalleryModel, "services">, filter: Pick<Filter, "country" | "category">): GalleryService[] {
  return model.services.filter((s) => (!filter.country || s.country === filter.country) && (!filter.category || s.category === filter.category));
}

/** The types the type filter lists under the other filters, with how many screens each has on the device, in the
 *  fixed order. The chosen type stays listed (at 0) when the other filters leave none of it. */
export function typeOptions(model: Pick<GalleryModel, "services" | "shots">, filter: Filter): { type: string; count: number }[] {
  const slugs = new Set(servicesIn(model, filter).map((s) => s.slug));
  const n = new Map<string, number>();
  for (const s of model.shots) if (slugs.has(s.slug) && s.type !== OTHER_TYPE && stillOn(s, filter.device)) n.set(s.type, (n.get(s.type) ?? 0) + 1);
  if (filter.type && !n.has(filter.type)) n.set(filter.type, 0);
  return [...n.keys()].sort(compareTypes).map((type) => ({ type, count: n.get(type)! }));
}

/** The screen types a card prefers, in order: home, then a list, then a detail (owner brief, 2026-11-22). */
const PREFERRED = ["홈", "목록", "상세", "검색 결과"];
const isStateScreen = (s: Pick<GalleryShot, "type" | "state">) => s.state !== null || s.type === "오류";

/**
 * The stills a card shows for one service on one device. Mobile: three, a home, then a list, then a detail, each
 * the first of its type in the walk's order; then the walk's other screens, and state screens (an empty search, a
 * missing page) only when nothing else is left. Desktop: one, the home or else the first screen there is. Three desktop
 * stills side by side on a card a third of the page wide would each be about 120px wide, too small to read.
 */
export function cardPicks<T extends Pick<GalleryShot, "type" | "state" | "stills">>(shots: T[], device: Device): { shot: T; still: ScreenStill }[] {
  const here = shots.filter((s) => stillOn(s, device));
  const n = device === "mobile" ? 3 : 1;
  const out: T[] = [];
  for (const type of PREFERRED) {
    const s = here.find((x) => x.type === type && !isStateScreen(x) && !out.includes(x));
    if (s) out.push(s);
  }
  for (const s of here) if (!isStateScreen(s) && !out.includes(s)) out.push(s);
  for (const s of here) if (!out.includes(s)) out.push(s);
  return out.slice(0, n).map((shot) => ({ shot, still: stillOn(shot, device)! }));
}

export interface ServiceCard {
  service: GalleryService;
  picks: { shot: GalleryShot; still: ScreenStill }[];
}

export interface TypeTile {
  service: GalleryService;
  shot: GalleryShot;
  still: ScreenStill;
}

export type BrowseView =
  | { kind: "services"; cards: ServiceCard[]; screens: number; services: number }
  | { kind: "type"; tiles: TypeTile[]; screens: number; services: number };

/** The service cards a filter shows (no type chosen), in gallery order. */
export function serviceCards(model: Pick<GalleryModel, "services" | "shots">, filter: Filter): ServiceCard[] {
  return servicesIn(model, filter)
    .map((service) => ({ service, picks: cardPicks(model.shots.filter((s) => s.slug === service.slug), filter.device) }))
    .filter((c) => c.picks.length > 0);
}

/** What a filter shows and the filter row's count: service cards, or, with a type chosen, one tile per screen of that
 *  type on the device (services in gallery order, each in its walk's order). */
export function browse(model: Pick<GalleryModel, "services" | "shots">, filter: Filter): BrowseView {
  if (filter.type) {
    const tiles: TypeTile[] = [];
    for (const service of servicesIn(model, filter)) {
      for (const shot of model.shots) {
        if (shot.slug !== service.slug || shot.type !== filter.type) continue;
        const still = stillOn(shot, filter.device);
        if (still) tiles.push({ service, shot, still });
      }
    }
    return { kind: "type", tiles, screens: tiles.length, services: new Set(tiles.map((t) => t.service.slug)).size };
  }
  const cards = serviceCards(model, filter);
  return { kind: "services", cards, screens: cards.reduce((n, c) => n + c.service.count, 0), services: cards.length };
}

/** Filter options by how many services have them, most first; ties by the order given. */
export function byCount(values: (string | null)[]): string[] {
  const n = new Map<string, number>();
  for (const v of values) if (v) n.set(v, (n.get(v) ?? 0) + 1);
  return [...n.keys()].sort((a, b) => n.get(b)! - n.get(a)!);
}

/**
 * The services a screens page suggests at its foot: those in the same category first, then the rest, each group in
 * gallery order, never the page's own service. The page keeps the first few with stills on the device it shows.
 */
export function similarServices(model: Pick<GalleryModel, "services">, slug: string): GalleryService[] {
  const self = model.services.find((s) => s.slug === slug);
  const others = model.services.filter((s) => s.slug !== slug);
  if (!self?.category) return others;
  return [...others.filter((s) => s.category === self.category), ...others.filter((s) => s.category !== self.category)];
}

/** One service's screens page: the service as the gallery names it, every card of its walk (blocked ones included,
 *  which say so; withheld ones never reach here), and the services it suggests with their shots. */
export interface ServiceScreensModel {
  service: GalleryService;
  /** Its name on the other language's page as well, for the downloads' README (both languages in one file). */
  names: { en: string; ko: string };
  cards: ScreenCard[];
  shot: string | null;
  signedOut: boolean;
  published: boolean;
  /** Same category first, then the rest (gallery.ts similarServices), with the shots their cards draw from. */
  similar: { service: GalleryService; shots: GalleryShot[] }[];
}

// ---- the landing wall -------------------------------------------------------------------------------------------

export interface WallTile {
  slug: string;
  key: string;
  /** The service's name and the screen's title, for the link's accessible name. */
  name: string;
  title: string;
  /** The service's screens page, opening this screen's large view on this still's device. */
  href: string;
  src: string;
  /** A desktop still, drawn twice as wide as a mobile one (and left out on a phone, where it would not fit). */
  wide: boolean;
}

/**
 * The wall's two rows. Each holds every service at most once: the first its mobile home screens in gallery order,
 * the second another mobile screen of each, starting halfway through the services so the rows do not line up. Each
 * row swaps one or two services for a desktop still (two from eight services up), placed where the row would put that
 * service when it has a desktop still, else at the next one that does, and never at a service already drawn wide in
 * the first row, so no still appears twice on the wall.
 */
export function wallRows(model: Pick<GalleryModel, "services" | "shots">): [WallTile[], WallTile[]] {
  const svc = model.services;
  const half = Math.floor(svc.length / 2);
  const rotated = [...svc.slice(half), ...svc.slice(0, half)];
  const wideCount = svc.length >= 8 ? 2 : 1;
  const wideIn = new Set<string>();
  const row = (services: GalleryService[], mobilePick: number, wideAt: number[]): WallTile[] => {
    // a short row still gets its desktop still: a slot past its end moves to its last place
    const slots = wideAt.slice(0, wideCount).map((s) => Math.min(s, services.length - 1));
    const out: WallTile[] = [];
    let wides = 0;
    services.forEach((service, i) => {
      const shots = model.shots.filter((s) => s.slug === service.slug);
      const desktop = cardPicks(shots, "desktop")[0];
      const mobile = cardPicks(shots, "mobile");
      // a service drawn wide in the first row is not drawn wide again in the second: no still shows twice
      const wantWide = wides < slots.length && i >= slots[wides] && !wideIn.has(service.slug);
      const tile = (p: { shot: GalleryShot; still: ScreenStill }, wide: boolean): WallTile => ({
        slug: service.slug,
        key: p.shot.key,
        name: service.name,
        title: p.shot.title,
        href: screensPageHref(service, wide ? "desktop" : "mobile", p.shot.key),
        src: smallSrc(p.still),
        wide,
      });
      if (wantWide && desktop) {
        out.push(tile(desktop, true));
        wideIn.add(service.slug);
        wides++;
      } else if (mobile.length) {
        out.push(tile(mobile[Math.min(mobilePick, mobile.length - 1)], false));
      } else if (desktop) {
        out.push(tile(desktop, true));
      }
    });
    return out;
  };
  return [row(svc, 0, [2, 7]), row(rotated, 1, [3, 8])];
}
