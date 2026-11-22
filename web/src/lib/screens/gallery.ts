/**
 * The /screens gallery and the landing's screens wall: the shape the server hands the client (gallery.server.ts fills
 * it) and the pure rules both draw by. No fs and no registry here: the client imports this file.
 *
 * The gallery is one card per service (owner, 2026-11-22: "누르면 들어가서 상세로 보는 형태"; the still b1-services in
 * tools/screen-archive/make-browse-mocks.mjs on the screens branch). Three filters narrow it: country and category
 * from the registry, and the device, which decides which stills the cards show. A card opens that service's item
 * page on its 서비스 화면 tab.
 *
 * What a screen is, everywhere it is counted (a card, the filter row's count, the landing's sentence): one screen key
 * of one service with at least one still at any width, which is one card on the item page's tab. The device filter
 * decides which services a view holds (one with no still at that width is left out) and which stills its card draws,
 * not what counts as a screen.
 */

import type { ScreenStill } from "./model";

/** Phone stills are shot at a 390 viewport, web stills at 1440; anything under 1024 is a phone width. */
export type Device = "phone" | "web";
export const DEVICES: readonly Device[] = ["phone", "web"];
export const deviceOf = (width: number): Device => (width < 1024 ? "phone" : "web");

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

/** A logo as components/brand-logo.tsx draws it (resolved on the server, archive-rows.server.ts logoFor). */
export interface GalleryLogo {
  src: string;
  kind: "svg" | "icon" | "favicon";
  dark?: boolean;
}

export interface GalleryService {
  slug: string;
  /** The registry's name (English page) or displayName (Korean page). */
  name: string;
  /** Its item page in this language; the same URL + "#screens" opens its 서비스 화면 tab. */
  href: string;
  /** The registry's country code, or null. */
  country: string | null;
  /** The registry's category slug, or null when it has none (then no category is shown). */
  category: string | null;
  /** The category's name in this language, or null. */
  categoryName: string | null;
  logo: GalleryLogo | null;
  /** Screens with a still, any width (see the definition at the top). */
  count: number;
}

export interface FilterOption {
  value: string;
  label: string;
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
  /** Devices with at least one still, phone first. */
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

/** The still at this device, or null: a phone card never borrows a web still. */
export function stillOn(shot: Pick<GalleryShot, "stills">, device: Device): ScreenStill | null {
  return shot.stills.find((s) => deviceOf(s.width) === device) ?? null;
}

/** What an image of a card or of the wall loads: the small rendition when there is one, else the still. */
export const smallSrc = (still: ScreenStill): string => still.thumb ?? still.still;

// ---- filters ----------------------------------------------------------------------------------------------------

export interface Filter {
  /** A country code, or null for all. */
  country: string | null;
  device: Device;
  /** A category slug, or null for all. */
  category: string | null;
}

/** The unfiltered view, the canonical page: every country and category, on phones when there are phone stills. */
export function defaultFilter(model: Pick<GalleryModel, "devices">): Filter {
  return { country: null, device: model.devices.includes("phone") ? "phone" : (model.devices[0] ?? "phone"), category: null };
}

/** The filter a URL's query names. Anything it does not know falls back to the default for that filter. */
export function parseFilter(query: string, model: Pick<GalleryModel, "devices" | "countries" | "categories">): Filter {
  const q = new URLSearchParams(query);
  const base = defaultFilter(model);
  const country = q.get("country")?.toUpperCase() ?? null;
  const device = q.get("device");
  const category = q.get("category");
  return {
    country: country && model.countries.some((c) => c.value === country) ? country : null,
    device: device && (model.devices as string[]).includes(device) ? (device as Device) : base.device,
    category: category && model.categories.some((c) => c.value === category) ? category : null,
  };
}

/** The query that names a filter, without "?"; empty for the default view, so the canonical URL stays bare. */
export function filterQuery(filter: Filter, model: Pick<GalleryModel, "devices">): string {
  const q = new URLSearchParams();
  if (filter.country) q.set("country", filter.country.toLowerCase());
  if (filter.device !== defaultFilter(model).device) q.set("device", filter.device);
  if (filter.category) q.set("category", filter.category);
  return q.toString();
}

/** The screen types a card prefers, in order: home, then a list, then a detail (owner brief, 2026-11-22). */
const PREFERRED = ["홈", "목록", "상세", "검색 결과"];
const isStateScreen = (s: Pick<GalleryShot, "type" | "state">) => s.state !== null || s.type === "오류";

/**
 * The stills a card shows for one service on one device. Phone: three, a home, then a list, then a detail, each
 * the first of its type in the walk's order; then the walk's other screens, and state screens (an empty search, a
 * missing page) only when nothing else is left. Web: one, the home or else the first screen there is. Three web
 * stills side by side on a card a third of the page wide would each be about 120px wide, too small to read.
 */
export function cardPicks<T extends Pick<GalleryShot, "type" | "state" | "stills">>(shots: T[], device: Device): { shot: T; still: ScreenStill }[] {
  const here = shots.filter((s) => stillOn(s, device));
  const n = device === "phone" ? 3 : 1;
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

/** The cards a filter shows, in gallery order, and the filter row's count. */
export function browse(model: Pick<GalleryModel, "services" | "shots">, filter: Filter): { cards: ServiceCard[]; screens: number; services: number } {
  const cards: ServiceCard[] = [];
  for (const service of model.services) {
    if (filter.country && service.country !== filter.country) continue;
    if (filter.category && service.category !== filter.category) continue;
    const picks = cardPicks(
      model.shots.filter((s) => s.slug === service.slug),
      filter.device,
    );
    if (picks.length) cards.push({ service, picks });
  }
  return { cards, screens: cards.reduce((n, c) => n + c.service.count, 0), services: cards.length };
}

/** Filter options by how many services have them, most first; ties by the order given. */
export function byCount(values: (string | null)[]): string[] {
  const n = new Map<string, number>();
  for (const v of values) if (v) n.set(v, (n.get(v) ?? 0) + 1);
  return [...n.keys()].sort((a, b) => n.get(b)! - n.get(a)!);
}

// ---- the landing wall -------------------------------------------------------------------------------------------

export interface WallTile {
  slug: string;
  key: string;
  /** The service's name and the screen's title, for the link's accessible name. */
  name: string;
  title: string;
  /** The service's item page with its 서비스 화면 tab open. */
  href: string;
  src: string;
  /** A web still, drawn twice as wide as a phone one (and left out on a phone, where it would not fit). */
  wide: boolean;
}

/**
 * The wall's two rows. Each holds every service at most once: the first its phone home screens in gallery order,
 * the second another phone screen of each, starting halfway through the services so the rows do not line up. Each
 * row swaps one or two services for a web still (two from eight services up), placed where the row would put that
 * service when it has a web still, else at the next one that does, and never at a service already drawn wide in the
 * first row, so no still appears twice on the wall.
 */
export function wallRows(model: Pick<GalleryModel, "services" | "shots">): [WallTile[], WallTile[]] {
  const svc = model.services;
  const half = Math.floor(svc.length / 2);
  const rotated = [...svc.slice(half), ...svc.slice(0, half)];
  const wideCount = svc.length >= 8 ? 2 : 1;
  const wideIn = new Set<string>();
  const row = (services: GalleryService[], phonePick: number, wideAt: number[]): WallTile[] => {
    // a short row still gets its web still: a slot past its end moves to its last place
    const slots = wideAt.slice(0, wideCount).map((s) => Math.min(s, services.length - 1));
    const out: WallTile[] = [];
    let wides = 0;
    services.forEach((service, i) => {
      const shots = model.shots.filter((s) => s.slug === service.slug);
      const web = cardPicks(shots, "web")[0];
      const phone = cardPicks(shots, "phone");
      // a service drawn wide in the first row is not drawn wide again in the second: no still shows twice
      const wantWide = wides < slots.length && i >= slots[wides] && !wideIn.has(service.slug);
      const tile = (p: { shot: GalleryShot; still: ScreenStill }, wide: boolean): WallTile => ({
        slug: service.slug,
        key: p.shot.key,
        name: service.name,
        title: p.shot.title,
        href: `${service.href}#screens`,
        src: smallSrc(p.still),
        wide,
      });
      if (wantWide && web) {
        out.push(tile(web, true));
        wideIn.add(service.slug);
        wides++;
      } else if (phone.length) {
        out.push(tile(phone[Math.min(phonePick, phone.length - 1)], false));
      } else if (web) {
        out.push(tile(web, true));
      }
    });
    return out;
  };
  return [row(svc, 0, [2, 7]), row(rotated, 1, [3, 8])];
}
